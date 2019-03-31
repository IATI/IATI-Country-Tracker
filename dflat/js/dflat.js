// Copyright (c) 2019 International Aid Transparency Initiative (IATI)
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

var dflat=exports;

var util=require('util');

var entities = require("entities");

var jml = require("./jml.js");
var xson = require("./xson.js");

var database = require("../json/database.json");

var ls=function(a) { console.log(util.inspect(a,{depth:null})); }

// parse the xml string into a flat structure
dflat.xml_to_xson=function(data)
{
	if(typeof data=="string")
	{
		data=jml.from_xml(data)
	}
// else assume it is already parsed jml
	
	var flat={}

	var pretrim=function(s,b)
	{
		if( b && s.startsWith(b) )
		{
			s=s.substr(b.length)
		}
		return s
	}

	var store=function(op,n,v)
	{
//		console.log(n+" = "+v)
		var tn=pretrim(n,op.trim)
		op.store[tn]=v
	}
	
	var dump
	var dump_attr=function(it,op)
	{
		for(var name in it)
		{
			if( (name!="0") && (name!="1") )
			{
				store(op,op.name+"@"+name,it[name])
			}
		}
		if( Array.isArray(it[1]) && (it[1].length==1) && (typeof it[1][0] == "string") )
		{
			store(op,op.name,it[1][0])
		}
	}

	dump=function(it,op)
	{
		if(typeof it === 'string')
		{
			return
		}

		if(Array.isArray(it))
		{
			for(var i=0;i<it.length;i++)
			{
				dump(it[i],op)
			}
			return
		}
		
		if( it[0] == "narrative" )
		{
			if( Array.isArray(it[1]) && (it[1].length==1) && (typeof it[1][0] == "string") )
			{
				var lang = it["xml:lang"] || op.lang || "en" // use default lang
				store(op,op.root+"/"+"narrative/"+lang,it[1][0])
			}
		}
		else
		{
			var np=Object.assign({},op)
			np.name=op.root+"/"+it[0]
			np.root=np.name
			
			var info = database.paths[ np.name ]

			if( info && info.multiple ) // can there be multiples?
			{
				var n=pretrim( np.name , np.trim ) // trim

				op.store[ n ]=op.store[ n ] || []
				np.store={}
				np.trim=np.name
				op.store[ n ].push(np.store)
			}
			
			dump_attr(it,np)
			if(it[1]) { dump(it[1],np) }
		}

	}
	dump(data,{root:"",store:flat})



	return flat
}


dflat.xson_to_xsv=function(data,root,paths)
{

	var header=[]
	var t={}
	xson.all(data,function(v,a){
		var n=a.join("")
		for(let path in paths)
		{
			if(n.startsWith(path)) // only remember these values
			{
				n=n.substr( root.length )
				t[n]=true
				break
			}
		}
	})
	for(var n in t)
	{
		header.push(n)
	}
	header.sort()
	header.unshift(root)
	header.unshift("parent")
	header.unshift("index")

	var lines=[]
	
	lines.push(header.join(","))

	var row=function(it)
	{
		var t=[];
		t.push(it[0]);
		t.push(it[1]);
		t.push(it[2]);
		for(var i=3;i<header.length;i++)
		{
			var head=header[i]
			if( it[root+head] !== undefined )
			{
				var s=""+it[root+head]
				if(s.includes(",") || s.includes(";") || s.includes("\t") || s.includes("\n") ) // need to escape
				{
					s="\""+s.split("\"").join("\"\"")+"\""; // wrap in quotes and double quotes in string
				}
				t.push( s );
			}
			else
			{
				t.push("");
			}
		}
		while(t[t.length-1]==="") { t.splice(-1) } // trim trailing commas
		lines.push(t.join(","))
	}
	

	var rows=[]

	var walk
	walk=function(it,nn,row)
	{
		var basepath=nn.join("")

		if(basepath==root) // start a new item
		{
			if(row[2]!=="") // check if we are already done
			{
				row={0:rows.length+1,2:basepath.substr( root.length )}
				rows[rows.length]=row // new row
			}
		}

		for(const n of Object.keys(it).sort() ) // force order
		{
			var v=it[n]
			if(Array.isArray(v))
			{
				if(v.length>1)
				{
					for(let i=0;i<v.length;i++)
					{
						if(basepath.startsWith(root)) // always need a new row to keep heirachy
						{
							rows[rows.length]={ 0:rows.length+1 , 1:row[0] , 2:(basepath+n).substr( root.length ) } // new row
							walk( v[i] , nn.concat([n]) , rows[rows.length-1] )
						}
						else
						{
							walk( v[i] , nn.concat([n]) , row )
						}
					}
				}
				else
				if(v.length==1)
				{
					walk( v[0] , nn.concat([n]) , row ) // not a new row just a new path
				}
			}
			else
			{
				for(let path in paths)
				{
					if(basepath.startsWith(path)) // only remember these values
					{
						row[ basepath+n ]=v
						break
					}
				}
			}
		}
	}
	walk(data,[],{})

	for(var v of rows)
	{
		row(v)
	}

	return lines.join("\n")
}

