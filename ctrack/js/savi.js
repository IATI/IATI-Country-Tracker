// Copyright (c) 2014 International Aid Transparency Initiative (IATI)
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT

var savi=exports;

var Chartist=require("chartist")
var moment=require("moment")

var iati_codes=require("../../dstore/json/iati_codes.json")


savi.encodeURIComponent=function(str)
{
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}

var commafy=function(s) { return (""+parseFloat(s)).replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
        return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,"); }) };



savi.add_transaction_chart = function(opts) {
	
//	return; // remove this to enable

	opts.charts=opts.charts || []
	opts.containers=opts.containers || []

	var data=[]
	var last_it
	var it_total=0
	for(var index=opts.transactions.length-1 ; index>=0 ; index--)
	{
		var transaction=opts.transactions.eq(index)
		var it={}

		var it_date=transaction.children("transaction-date").first().attr("iso-date");
		var it_value=transaction.children("value").first().html();
		var it_currency=transaction.children("value").first().children("span").first().html();
		var it_number=parseFloat(it_value.split(",").join(""))

		it_total+=it_number // makes more sense to display accumilated values
		
		if(!it_currency) // need a currency
		{
			opts.bad_currency = true
		}
		
		if(!opts.currency)
		{
			opts.currency=it_currency
		}
		else
		{
			if(opts.currency!=it_currency) { opts.bad_currency = true } // bad data, should all be the same currency
		}

		it.x=new Date( it_date+"T00:00:00.000Z" )
		it.y=it_total
		
		if( last_it && ( last_it.x.getTime()==it.x.getTime() ) ) // merge
		{
			last_it.y=it_total
		}
		else
		{
			data.push(it)
			last_it=it // remember last so we can merge if the same time
		}
	}
	data.sort(function(a,b){return a.x-b.x})
//console.log(data)

// remember list of data for later changes
	opts.datas=opts.datas || []
	opts.datas.push(data)


//	if(data.length<=1) // do not bother showing only 1 value
//	{
//		return;
//	}


	var render=$('<div class="transactions_svg transactions_svg_type_'+opts.transaction_type+'"></div>')
	opts.here.after(render)
	
// share options
	opts.chart_options = opts.chart_options || {
		  width:  '920px',
		  height: '240px',
		  axisX: {
			type: Chartist.FixedScaleAxis,
			divisor: 8,
			labelInterpolationFnc: function(value) {
			  return moment(value).format('YYYY MMM DD');
			}
		  },
		  axisY: {
			referenceValue: 0,
			offset: 80,
			scaleMinSpace: 24,
			type: Chartist.AutoScaleAxis,
			labelInterpolationFnc: function(value) {
			  return commafy(value)+" "+opts.currency;
			}
		  }
		}

	var chart_series=[]

/*
	if(opts.all && opts.all.series)
	{
		for(var i=0;i<opts.all.series.length;i++)
		{
			chart_series.push(
				{
				className:"svg_line_transaction_type_"+opts.transaction_type,
				  name: opts.all.series[i].name, // remember name
				  data: [] // empty place holder
				}
			)
		}
	}
*/

	chart_series.push(
		{
		  className:"svg_line_transaction_type_"+opts.transaction_type,
		  name: opts.transaction_type,
		  data: data
		}
	)

	var chart = new Chartist.Line(render[0], {
	  series: chart_series,
	}, opts.chart_options );
	opts.charts.push(chart)
	opts.containers.push(render)

	if(opts.all)
	{
		opts.all.series=opts.all.series || []
		opts.all.series.push(
			{
			  className:"svg_line_transaction_type_"+opts.transaction_type,
			  name: opts.transaction_type,
			  data: data
			}
		)
	}

	if(opts.all.here)
	{
		var render=$('<div class="transactions_svg transactions_svg_type_all"></div>')
		opts.all.here.before(render)

		var chart = new Chartist.Line(render[0], {
			series:opts.all.series,
		}, opts.chart_options );

		opts.charts.push(chart)
		opts.containers.push(render)

	}

	if(opts.final) // final adjustments to all chart data
	{
		if(opts.datas)
		{
			var tmin=new Date( "9999-01-01" )
			var tmax=new Date( "0000-01-01" )
			for(var di=0;di<opts.datas.length;di++)
			{
				var ds=opts.datas[di]
				for(var i=0;i<ds.length;i++)
				{
					var v=ds[i]
					if(v.x>tmax){tmax=v.x}
					if(v.x<tmin){tmin=v.x}
				}
			}
//console.log(tmin+" - "+tmax)

			opts.chart_options.axisX.low = tmin.getTime()
			
			opts.chart_options.axisX.low  = tmin.getTime() - ( 1000 * 60 * 60 * 24 * 32 ) // 32 days buffer
			opts.chart_options.axisX.high = tmax.getTime() + ( 1000 * 60 * 60 * 24 * 32 ) // 32 days buffer
			
			for(var di=0;di<opts.datas.length;di++)
			{
				if(ds.length>0)
				{
					var ds=opts.datas[di]
					var l=ds[ds.length-1]
					var f=ds[0]
//					if(l.x<tmax)
					{
						ds.push({x:new Date(tmax.getTime()+( 1000 * 60 * 60 * 24 * 32 )),y:l.y,className:"fake_transaction_data"}) // add a final number
					}
					if(l.x>tmin)
					{
//						ds.unshift({x:tmin,y:0,className:"fake_transaction_data"}) // add a start number
					}
				}
			}
		}
		for(var i in opts.charts) // update each chart with new data
		{
			var v=opts.charts[i]
			v.update(undefined,opts.chart_options,true)
		}

		if( opts.bad_currency ) // mixxed curencies so we should hide the charts
		{
			for(var i in opts.charts) // remove each chart
			{
				var v=opts.charts[i]
				v.detach()
			}
			for(var i in opts.containers) // empty each container
			{
				var v=opts.containers[i]
				v.remove()
			}
		}
	}

}

savi.fixup = function(args){


args=args || {};	
var inside=args.inside || "";
//var prelink=args.link || "http://datastore.iatistandard.org/api/1/access/activity.xml?iati-identifier=";
var prelink=args.link || "http://d-portal.org/q.html?aid=";
var postlink=args.link_post || "";


// links to publisher views
var pubprelink=args.link || "http://d-portal.org/ctrack.html?publisher=";
var pubpostlink=args.link_post || "#view=main";


// links to fao
var faoprelink=args.link || "http://aims.fao.org/aos/agrovoc/";
var faopostlink=args.link_post || ".html";


var acts=$(inside+"iati-activity").not(".savidone"); // ignore activities that have already been done
acts.addClass("savidone"); // mark as done so we ignore if we get called again

//console.log("save fixup "+inside+"iati-activity"+" "+acts.length);
//console.log(acts.html());


        
var commafy_ifnum=function(s)
{
	var n=parseFloat(s);
	var t=n.toString();
	
	if ( t == s )
	{
		return commafy(s);
	}
	else
	{
		return s;
	}
}

// Adjust some tags using js

var wrap_link=function(it,url,cc)
{
	it.wrap("<a href=\""+url+"\" class=\""+cc+"\" target=\"_blank\" ></a>");
}

var wrapInner_link=function(it,url,cc)
{
	it.wrapInner("<a href=\""+url+"\" class=\""+cc+"\" target=\"_blank\" ></a>");
}

acts.find("value").each(function(i){var it=$(this);
	var c=it.attr("currency");
	if(!c) { c=it.parents("iati-activity").attr("default-currency"); } // use default?
	if(c)
	{
		c=c.toUpperCase();
		it.html( commafy( it.html() ) +"<span>"+c+"</span>" );
	}
});

acts.each(function(i){var it=$(this);
	var needed=["title","participating-org","reporting-org","description","activity-status","activity-scope","humanitarian-scope"];
	needed.forEach(function(n){
		if( it.children(n).length==0 )
		{
			it.append("<"+n+" />"); // just add a blank tag
		}
	});
	

	{
		var narratives=["participating-org, receiver-org, provider-org"];
		narratives.forEach(function(n){
			it.find(n).each(function(i){var it=$(this);
				if( it.find("narrative").length==0 ) // only if no narrative in this tag
				{
					var id=it.attr("ref");
					id=iati_codes.publisher_names[id] || id;	//	converts ref to publisher name or if lookup fails, use raw text
					var text=it.text(); // get text
					if(text.trim()=="") // is text empty?
					{
						it.wrapInner("<narrative></narrative>");
						it.find("narrative").text( id ); // use ref
					}
					else
					{
						it.wrapInner("<narrative></narrative>"); // just wrap text
					}
				}
			});
		});
	}

	
/*
	var ad=it.children("activity-date"); // added in ( PRE 201 ), to include actual dates when there isn't one for savi layout
	var got_start=false;
	var got_end=false;
	ad.each(function(i,a){
		var t=$(a).attr("type");
		if(t=="start-actual")
		{
			got_start=true;
		}
		if(t=="end-actual")
		{
			got_end=true;
		}
	});

	if(!got_start){ it.append("<activity-date type=\"start-actual\" />"); }
	if(!got_end)  { it.append("<activity-date type=\"end-actual\" />"); }
*/
	
});


// change title to span_title (title tag seems to confuse browsers)
acts.find("title").each(function(i){var it=$(this);
//console.log(it.text());
	it.replaceWith($('<span-title>' + it.text() + '</span-title>'));
});


acts.find("participating-org").each(function(i){var it=$(this);
	var c=it.attr("role");
	var d=it.attr("type");
	var e=it.attr("ref");
	if(c)
	{
		c=c.toLowerCase();
//		it.attr("role",c)
		c=iati_codes.org_role[c] || c;
		if(c)
		{
			it.append($('<span-narrative class="org-role">' + c + '</span-narrative>'));
		}
	}
	
	if(d)
	{
		d=d.toLowerCase();
		d=iati_codes.org_type[d] || d;
		if(d)
		{
			it.append($('<span-narrative class="org-type">' + d + '</span-narrative>'));
		}
	}
	if(e)
	{
		it.append($('<span-narrative class="org-ref">' + e + '</span-narrative>'));
	}
	
	if( it.html().trim()=="" )
	{
		it.html( it.attr("ref") || it.html() );
	}

});


//acts.find("participating-org").each(function(i){var it=$(this);	
//	var id=it.attr("role");
//	if( (id)=="1" )
//	{
//		it.find("participating-org").wrapAll( "<org-type-1></org-type-1>" );	
//	}
//});

acts.find("participating-org").each(function(i){var it=$(this);	
	it.find("narrative").first().wrap($('<span-lang></span-lang>'));	
});

//acts.find("participating-org").each(function(i){var it=$(this);
//	if(it.attr("role"))
//	{
//		it.append($('<span-narrative class="participating-role">'  + it.attr("role") + " role" + '</span-narrative>'));
//	}
//});


acts.find("document-link category").each(function(i){var it=$(this);
	var c=it.attr("code");
	if(c)
	{
		c=c.toUpperCase();
		c=iati_codes.doc_cat[c] || c;
		if(c)
		{
			it.wrap($('<span-narrative class="doc-cat">' + c + '</span-narrative>'));
		}
	}
});

acts.find("document-link document-date").each(function(i){var it=$(this);
	var c=it.attr("iso-date");
	if(c)
	{
		it.wrap($('<span-doc_date>' + c + '</span-doc_date>'));
	}
});



acts.find("transaction").each(function(i){var it=$(this);
	var needed=["transaction-date","transaction-type","description","provider-org","receiver-org","value"];
	needed.forEach(function(n){
		if( it.children(n).length==0 )
		{
			it.append("<"+n+" />"); // just add a blank tag
		}
	});
	var tdate=it.children("transaction-date");
	var tvalue=it.children("value");
	if( !tdate.attr("iso-date") && tvalue.attr("value-date") ) // use value date if iso-date is missing
	{
//		console.log("fixing "+tvalue.attr("value-date"))
		tdate.attr("iso-date",tvalue.attr("value-date"));
	}
	
});


acts.find("budget").each(function(i){var it=$(this);
	var t=it.attr("type");
	var s=it.attr("status");
	t=iati_codes.budget_type[t];
	s=iati_codes.budget_status[s];
	if(t)
	{
		it.append($('<span-budget-type>'  + t + '</span-budget-type>'));
	}
	if(s)
	{
		it.append($('<span-budget-status>'  + s + '</span-budget-status>'));
	}
});

acts.find("budget").each(function(i){var it=$(this);
	var needed=["period-start","period-end","value","span-budget-type","span-budget-status"];
	needed.forEach(function(n){
		if( it.children(n).length==0 )
		{
			it.append("<"+n+" />"); // just add a blank tag
		}
	});

});


acts.find("activity-date,transaction-date,period-start,period-end").each(function(i){var it=$(this);
	it.html( it.attr("iso-date") );
});

// duplicate the baseline into the period for display purposes (it is in many ways a start value)
acts.find("result").each(function(i){var it=$(this);

//	var baseline=it.find("baseline").first();
	
	it.find("period").each(function(i){var it=$(this);
//		it.prepend( baseline.clone() );
		
		var dpct=0;
		
		var sdate=it.find("period-start").first().attr("iso-date")
		var edate=it.find("period-end").first().attr("iso-date")
		
		if( sdate && edate )
		{
			sdate=sdate.split("-");
			edate=edate.split("-");
			
			sdate=Date.UTC(sdate[0],sdate[1]-1,sdate[2]);
			edate=Date.UTC(edate[0],edate[1]-1,edate[2]);

			var dtot=edate-sdate;
			var dval=(new Date()).getTime()-sdate;
			dpct=Math.floor(100*dval/dtot);
			if(dpct<0){dpct=0;}
			if(dpct>100){dpct=100;}
		}
		
//		console.log(it,dpct);
		
		it.find("period-end").first().after("<div class=\"timeline\"><div class=\"time time-percent"+dpct+"\" style=\"width:"+dpct+"%;\"><span></span></div></div>");
		
		var target=it.find("target").first();
		var actual=it.find("actual").first();
		
		var div=actual; // the div we intend to change
		
		if(target&&actual)
		{
			target=target.attr("value");
			actual=actual.attr("value");
			
			if($.isNumeric(target)&&$.isNumeric(actual))
			{
				target=Number(target);
				actual=Number(actual);
				
				if(actual>=target)
				{
					div.addClass("value-higher");
				}
				else
//				if(actual>0)
				{
					div.addClass("value-lower");
				}
			}
		}
		
	});
});


acts.find("result indicator").each(function(i){var it=$(this);

	var baseline=it.find("baseline").first();
	
	it.find("period").each(function(i){var it=$(this);
		it.prepend( baseline.clone() );
	});

});

acts.find("result").each(function(i){var it=$(this);	
	it.find( "reference" ).not("indicator reference").wrapAll( "<span-result-reference></span-result-reference>" );	
});

acts.find("result indicator").each(function(i){var it=$(this);	
	it.find( "span-title, description, reference, document-link" ).not("document-link span-title, document-link description").wrapAll( "<span-result class='lc'></span-result>" );	
});

acts.find("result indicator").each(function(i){var it=$(this);	
	it.find( "reference" ).wrapAll( "<span-reference></span-reference>" );	
});

acts.find("result indicator").each(function(i){var it=$(this);	
	it.find( "document-link" ).wrapAll( "<span-document></span-document>" );	
});


acts.find("result reference").each(function(i){var it=$(this);
	var id=it.attr("vocabulary");
	id=iati_codes.result_vocab[id] || id;
	if(id)
	{
		it.html(id);
	}
});

acts.find("result indicator reference").each(function(i){var it=$(this);
	var id=it.attr("vocabulary");
	id=iati_codes.indicator_vocab[id] || id;
	if(id)
	{
		it.html(id);
	}
});

acts.find("result indicator").each(function(i){var it=$(this);
	var needed=["description"];
	needed.forEach(function(n){
		if( it.children(n).length==0 )
		{
			it.append("<"+n+" />"); // just add a blank tag
		}
	});
});

acts.find("result indicator period").each(function(i){var it=$(this);
	var needed=["period-start", "period-end", "baseline", "target", "actual"];
	needed.forEach(function(n){
		if( it.children(n).length==0 )
		{
			it.append("<"+n+" />"); // just add a blank tag
		}
	});
});

acts.find("result target, result actual").each(function(i){var it=$(this);
	it.prepend($('<span-narrative>' + commafy_ifnum(it.attr("value")) + '</span-narrative>'));
});


acts.find("result baseline").each(function(i){var it=$(this);
	if(it.attr("value"))
	{
		it.prepend($('<span-narrative class="baseline-value">' + commafy_ifnum(it.attr("value")) + '</span-narrative>'));
	}
});


acts.find("result actual comment narrative").each(function(i){var it=$(this);
	it.replaceWith($('<span-narrative>' + it.text() + '</span-narrative>'));
});


acts.find("result reference").each(function(i){var it=$(this);
	var id=it.attr("indicator-uri");
	if(id)
	{
		wrap_link(it,id,"a_"+this.tagName.toLowerCase());
	}
});
acts.find("result reference").each(function(i){var it=$(this);
	var id=it.attr("vocabulary-uri");
	if(id)
	{
		wrap_link(it,id,"a_"+this.tagName.toLowerCase());
	}
});


// tag elements
acts.find("openag\\:tag").each(function(i){var it=$(this);
	
	var id=it.attr("code");
	
	it.replaceWith($('<span-openag code=' + id + '>' + it.html() + '</span-openag>'));
	
});

acts.find("span-openag").each(function(i){var it=$(this);
	
	var id=it.attr("code");
	if(id)
	{
		wrapInner_link(it,faoprelink+id+faopostlink,"a_openag");
	}
	
});


acts.find("related-activity").each(function(i){var it=$(this);
	if( it.html().length<4 )
	{
		it.html(it.attr("ref"));
	}
});

acts.find("policy-marker").each(function(i){var it=$(this);
	var tc=it.attr("vocabulary");
	var td=it.attr("code");
	var te=it.attr("significance");	
	var tcname=iati_codes.policy_vocab[tc] || tc;
	td=iati_codes.policy_code[td] || td;
	te=iati_codes.policy_sig[te] || te;	

	if((!tc)||(tc=="1")) // OECD DAC CRS is "1"
	{
		if(td)
		{
			it.html(td);
		}
	}

//	if(tc)
//	{
//		it.append($('<span-narrative class="policy_vocab">' + tcname + '</span-narrative>'));
//	}	
	if(te)
	{
		it.append($('<span-narrative class="policy_sig">' + te + '</span-narrative>'));
	}
	it.find("span-narrative").wrapAll("<span-narrative class='policies'></span-narrative>");	
});


acts.find("humanitarian-scope").each(function(i){var it=$(this);
	var tc=it.attr("vocabulary");
	td=it.attr("type");
	te=it.attr("vocabulary-uri");
	tf=it.attr("code");
	var tc=iati_codes.hum_scope_vocab[tc] || tc;
	td=iati_codes.hum_scope_type[td] || td;

	if(te)
	{
		it.find("narrative").first().wrap($('<span-lang><a href="' + te + '" class="hum_scope_uri"></a></span-lang>'));
	}
	else
	{
		it.find("narrative").first().wrap($('<span-lang></span-lang>'));
	}
	if(tc)
	{
		it.append($('<span-narrative class="hum_scope_vocab">' + tc + '</span-narrative>'));
	}	
	if(td)
	{
		it.append($('<span-narrative class="hum_scope_type">' + td + '</span-narrative>'));
	}
	if(tf)
	{
		it.append($('<span-narrative class="hum_scope_code">' + tf + '</span-narrative>'));
	}
	it.find("span-narrative").wrapAll("<span-narrative class='hum_scope'></span-narrative>");
	
});


acts.find("planned-disbursement").each(function(i){var it=$(this);
	var t=it.attr("type");
	t=iati_codes.budget_type[t];
	if(t)
	{
		it.append($('<span-planned-type>'  + t + '</span-planned-type>'));
	}
});

acts.find("planned-disbursement").each(function(i){var it=$(this);
	var needed=["period-start","period-end","span-planned-type","provider-org","receiver-org","value"];
	needed.forEach(function(n){
		if( it.children(n).length==0 )
		{
			it.append("<"+n+" />"); // just add a blank tag
		}
	});

});


acts.find("recipient-region").each(function(i){var it=$(this);
	
	var c=it.attr("code");
	var d=it.attr("code");
	var v=it.attr("vocabulary");
	var u=it.attr("vocabulary-uri");
	var p=it.attr("percentage");	
	
	
	if( it.find("narrative").text()!="" )
	{
		it.html("<narrative>"+it.find("narrative").text()+"</narrative>");
		if(p)
		{
			it.html("<narrative>"+it.find("narrative").text()+"</narrative>"+"<span class='region-percent'>"+p+"%</span>");
		}
	}
	else //(version 2.01 - freetext is no longer allowed)
	{
		it.html("<narrative>"+d+"</narrative>");
		if(p)
		{
			it.html("<narrative>"+d+"</narrative>"+"<span class='region-percent'>"+p+"%</span>");
		}
		//it.text(""); 
	}
		
	if(u)
	{
		it.html($('<a href="' + u + '" class="region-uri">' + d + '</a>'));
		if(p)
		{
			it.html($('<a href="' + u + '" class="region-uri">' + d + '</a><span class="region-percent">' + p + '%</span>'));
		}
	}
	
	if(c)
	{
		c=iati_codes.region_code[c]; //Only if lookup is valid
		if(c)
		{
			it.append($('<span class="region-code">' + c + '</span>'));
		}
	}
	
	if(v)
	{
		v=iati_codes.region_vocab[v]; //Only if lookup is valid
		if(v)
		{
			it.append($('<span class="region-vocab">' + v + '</span>'));
		}
	}
});



acts.find("reporting-org").each(function(i){var it=$(this);
	var t=it.attr("ref");
	t=iati_codes.publisher_names[t];
	if(t)
	{
		it.html(t);
	}
});

acts.find("activity-status").each(function(i){var it=$(this);
	var tc=it.attr("code");
	tc=iati_codes.activity_status[tc] || tc;
	if(tc)
	{
		it.html(tc);
	}
});


acts.find("activity-scope").each(function(i){var it=$(this);
	var tc=it.attr("code");
	tc=iati_codes.act_scope[tc] || tc;
	if(tc)
	{
		it.html(tc);
	}
});

acts.find("sector").each(function(i){var it=$(this);

	var tp=it.attr("percentage") || 100;
	var tc=it.attr("code");
	var td=it.attr("code");
	
	if(!it.attr("vocabulary")) { it.attr("vocabulary","DAC"); } //	If there is no vocab, assume it is DAC.

	var vocab=it.attr("vocabulary")
	if( vocab=="1" || vocab=="2" || vocab=="DAC" )
	{
		var te="active";
		if(iati_codes.sector_withdrawn[tc])
		{
				te="withdrawn";
		}
		
		tc=iati_codes.sector[tc] || iati_codes.sector_withdrawn[tc] || iati_codes.sector_category[tc] || tc;	
		if(tc)
		{
			it.html("<span class='sec_code' code='"+td+"' status='"+te+"'>"+tc+"</span><span class='sec_bar' style='width:calc("+tp+" * 4.75px);'></span><span class='sec_value'>"+tp+"%</span>");
		}
	}
	else
	{
		var nn=it.find("narrative")
		if(nn.length>0)
		{
			tc=$(nn[0]).text()
		}
		var tf=it.attr("vocabulary");
		var tg=it.attr("vocabulary");
		tf=iati_codes.sector_vocab[tf] || tf;	
		it.html("<span class='sec_code' code='"+td+"' vocab='"+tf+"'>"+tc+"</span><span class='sec_value'>"+tp+"%</span>");
	}
	

});


acts.find("transaction recipient-country").each(function(i){var it=$(this);	
//	console.log("country code",it.attr("code"));
	it.find( it.attr("code") ).wrapAll( "<span-transaction class='recipient-country'></span-transaction>" );	
});

acts.find("transaction-type").each(function(i){var it=$(this);

	var tc=it.attr("code");
	if(tc)
	{
		tc=tc.toUpperCase();
		tc=iati_codes.transaction_type[tc] || tc;
		if(tc)
		{
			it.html(tc);
		}
	}
});

acts.find("recipient-country").each(function(i){var it=$(this);

	var tp=it.attr("percentage") || 100;
	var tc=it.attr("code")
	var td=it.attr("code");
	if(tc)
	{
		tc=tc.toUpperCase();
		tc=iati_codes.country[tc] || tc;
		if(tc)
		{
			it.html("<span class='rec_code' code='"+td+"'>"+tc+"</span><span class='rec_bar' style='width:calc("+tp+" * 4.75px);'></span><span class='rec_value'>"+tp+"%</span>");
		}
	}

});


var sort_elements=function(selector,sortlist){

	acts.find(selector).each(function(i){var it=$(this);
		
		var sortweight={}; for(var i=0; i<sortlist.length; i++) { sortweight[ sortlist[i] ]=i+1; }

		var aa=it.children();
		aa.sort(function(a,b){
			var ret=0;
			var aw=sortweight[a.tagName.toLowerCase()] || sortweight[0];
			var bw=sortweight[b.tagName.toLowerCase()] || sortweight[0];
			if(ret===0)
			{
				if(aw > bw ) { ret= 1; }
				if(aw < bw ) { ret=-1; }
			}
			if(ret===0)
			{
				if(a.tagName.toLowerCase() > b.tagName.toLowerCase() ) { ret= 1; }
				if(a.tagName.toLowerCase() < b.tagName.toLowerCase() ) { ret=-1; }
			}
			return ret;
		});
		it.append(aa);

	});

}

sort_elements("participating-org",[
		"span-lang",
		"span-narrative",
		"narrative",
		0]);
		
sort_elements("result",[
		"span-title",
		"description",
		"span-result-reference",
		"document-link",
		"indicator",
		0]);

sort_elements("result indicator",[
		"span-result",
		"span-title",
		"description",
		"reference",
		"period",
		0]);
		
sort_elements("span-result",[
		"span-title",
		"description",
		"span-reference",
		"span-document",
		0]);

sort_elements("result indicator period",[
		"period-start",
		"period-end",
		"baseline",
		"target",
		"actual",
		0]);

sort_elements("budget",[
		"period-start",
		"period-end",
		"span-budget-type",
		"span-budget-status",
		"value",
		0]);
		
sort_elements("planned-disbursement",[
		"period-start",
		"period-end",
		"span-planned-type",
		"provider-org",
		"receiver-org",
		"value",
		0]);

sort_elements("transaction",[
		"transaction-date",
		"transaction-type",
		"description",
		"sector",
		"provider-org",
		"receiver-org",
		"value",
		0]);
		
sort_elements("document-link",[
		"span-title",
		"description",
		"language",
		"span-doc_date",
		"span-narrative",
		0]);
		
sort_elements("humanitarian-scope",[
		"span-lang",
		"span-narrative",
		"narrative",
		0]);		


var sorted=0;
acts.each(function(i){var it=$(this);
sorted++;
	var sortlist=[
		"title",
		"span-title",
		"reporting-org",
		"iati-identifier",
		"document-link",	
		"activity-date",
		"participating-org",
		"description",
		"humanitarian-scope",
		"activity-scope",
		"recipient-country",
		"location",
		"recipient-region",				
		"sector",
		"span-openag",
		"budget",
		"planned-disbursement",
		"transaction",
		"result",
		"contact-info",
		"activity-website",
		"policy-marker",	
		"related-activity",
		"activity-status",
		
	0
	];
	var sortweight={}; for(var i=0; i<sortlist.length; i++) { sortweight[ sortlist[i] ]=i+1; }

	var aa=it.children();	
	aa.sort(function(a,b){
		var ret=0;
		
		var aname=a.tagName.toLowerCase();
		var bname=b.tagName.toLowerCase();
		
		var aw=sortweight[aname] || sortweight[0];
		var bw=sortweight[bname] || sortweight[0];

		if(ret===0)
		{
			if(aw > bw ) { ret= 1; }
			if(aw < bw ) { ret=-1; }
		}

		if(ret===0)
		{
			if(aname > bname ) { ret= 1; }
			if(aname < bname ) { ret=-1; }
		}
		
//		Sort document links:
//		Latest date first, if dates are found, 
//		then sort by format type.
		
		if( (ret===0) && (aname=="document-link") )
		{
			var ad=($(a).find("document-date"));
			var bd=($(b).find("document-date"));
			if(ad&&bd)
			{
				var at=(ad.attr("iso-date"));
				var bt=(bd.attr("iso-date"));
				if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
			}
		}
		
		
		if( (ret===0) && (aname=="document-link") )
		{
			var at=(a.getAttribute("format"));
			var bt=(b.getAttribute("format"));
			if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
		}
		
		if( (ret===0) && (aname=="participating-org") )
		{
			var at=(a.getAttribute("role"));
			var bt=(b.getAttribute("role"));
			if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
		}
		
		if( (ret===0) && (aname=="recipient-country") )
		{
			var at=Number(a.getAttribute("percentage"));
			var bt=Number(b.getAttribute("percentage"));
			if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
		}

		if( (ret===0) && (aname=="activity-date") )
		{
			var at=a.getAttribute("type");
			var bt=b.getAttribute("type");
			if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
		}
		
		if( (ret===0) && (aname=="sector") )
		{
			var at=a.getAttribute("vocabulary");
			var bt=b.getAttribute("vocabulary");
			if(at>bt) { ret=1; } else if(at<bt) { ret=-1; }
		}

		if( (ret===0) && (aname=="sector") )
		{
			var at=Number(a.getAttribute("percentage"));
			var bt=Number(b.getAttribute("percentage"));
			if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
		}

		if( (ret===0) && (aname=="budget") )
		{
			var at=$(a).children("period-start").first().attr("iso-date");
			var bt=$(b).children("period-start").first().attr("iso-date");
			if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
		}

		if( (ret===0) && (aname=="transaction") ) // sort by numeric type
		{
			var at=$(a).children("transaction-type").first().attr("code");
			var bt=$(b).children("transaction-type").first().attr("code");
			at=iati_codes.transaction_type_num[at] || parseInt(at) || 0;
			bt=iati_codes.transaction_type_num[bt] || parseInt(bt) || 0;
			if(at>bt) { ret=1; } else if(at<bt) { ret=-1; }
		}

		if( (ret===0) && (aname=="transaction") )
		{
			var at=$(a).children("transaction-date").first().attr("iso-date");
			var bt=$(b).children("transaction-date").first().attr("iso-date");
			if(at<bt) { ret=1; } else if(at>bt) { ret=-1; }
		}

		if( (ret===0) && (aname=="related-activity") )
		{
			var at=$(a).attr("type");
			var bt=$(b).attr("type");
			if(at>bt) { ret=1; } else if(at<bt) { ret=-1; }
		}
		
		if( (ret===0) && (aname==bname) )
		{
			var at=$(a).attr("xml:lang");
			var bt=$(b).attr("xml:lang");
			if(at&&bt)
			{
				if(at>bt) { ret=1; } else if(at<bt) { ret=-1; }
			}
		}
		
		return ret;
	});
	it.append(aa);

	for(var i=0; i<sortlist.length-1; i++) { var v=sortlist[i];
		var list=it.children( v );
		list.wrapAll( "<span class='span_"+v+"' />");
		if(v=="transaction") // split transactions
		{
			var all_here
			var all={}
			var split_idx
			var split_start=-1
			var split_end=-1
			var split_type=false
			var test_type
			var opts={}
			var dosplit=function(final){
				if(split_start>=0) // valid range
				{
//console.log("slice "+split_start+" to "+split_end)
					var transactions=list.slice(split_start,split_end+1)
					var here=transactions.wrapAll( "<span class='span_transaction_code_"+split_type+"' />").eq(0).parent().eq(0)

					opts.here=here
					opts.transactions=transactions
					opts.transaction_type=split_type
					opts.all=all
					opts.final=final

					savi.add_transaction_chart(opts)

					all_here=all_here || here
				}
				split_start=split_idx
				split_end=split_idx
				split_type=test_type
			}
			for( split_idx=0 ; split_idx<list.length ; split_idx++ ) // walk backwards
			{
				test_type=list.eq(split_idx).children("transaction-type").first().attr("code");
				test_type=iati_codes.transaction_type_num[test_type] || parseInt(test_type) || 0;
				if(test_type===split_type)
				{
					split_end=split_idx // advance group over the same items
				}
				else // change of type
				{
					dosplit()
				}
			}
			all.here=all_here // final call will also render them all in one graph
			dosplit(true)
			
		}
	}

});
//console.log("sorted "+sorted+" acts");

acts.find("document-link").each(function(i){var it=$(this);
	wrap_link(it,it.attr("url"),"a_"+this.tagName.toLowerCase());
});

acts.find("activity-website").each(function(i){var it=$(this);
	wrap_link(it,it.html(),"a_"+this.tagName.toLowerCase());
});

acts.find("iati-identifier").each(function(i){var it=$(this);
	var slug=it.parent().parent().attr("dstore:slug"); // do we know where this came from?
	var id=savi.encodeURIComponent(it.text().trim());
	wrapInner_link(it,prelink+id+postlink,"a_"+this.tagName.toLowerCase());
	it.append($("<a class='a_xml_"+this.tagName.toLowerCase()+
	"' href='http://d-portal.org/q.xml?aid="+id+"' target='_blank'>xml</a>"));
	if(slug)
	{
		it.append($("<a class='a_logs' href='http://d-portal.org/ctrack.html#view=dash_sluglog&slug="+slug+"' target='_blank'>logs</a>"));
		it.append($("<a class='a_slug' href='http://iatiregistry.org/dataset/"+slug+"' target='_blank'>dataset</a>"));
	}
});


acts.find("provider-org[ref], provider-org[provider-activity-id], provider-org[type]").each(function(i){var it=$(this);
	var id=it.attr("ref");
	var aid=it.attr("provider-activity-id");
	var d=it.attr("type");
	d=iati_codes.org_type[d] || d;
	
	if( aid )
	{
		wrapInner_link(it,prelink+savi.encodeURIComponent(aid.trim())+postlink,"a_"+this.tagName.toLowerCase());
	}
	else
	if(iati_codes.publisher_names[id])
	{
		wrapInner_link(it,pubprelink+id+pubpostlink,"a_"+this.tagName.toLowerCase());
	}
	
	if(id)
	{
		it.append($('<div><span-narrative class="provider-org-ref">' + id + '</span-narrative></div>'));
	}
	if(d)
	{
		it.append($('<div><span-narrative class="org-type">' + d + '</span-narrative></div>'));
	}
});

acts.find("receiver-org[ref], receiver-org[receiver-activity-id], receiver-org[type]").each(function(i){var it=$(this);
	var id=it.attr("ref");
	var aid=it.attr("receiver-activity-id");
	var d=it.attr("type");
	d=iati_codes.org_type[d] || d;
	
	if( aid )
	{
		wrapInner_link(it,prelink+savi.encodeURIComponent(aid.trim())+postlink,"a_"+this.tagName.toLowerCase());
	}
	else
	if(iati_codes.publisher_names[id])
	{
		wrapInner_link(it,pubprelink+id+pubpostlink,"a_"+this.tagName.toLowerCase());
	}
	
	if(id)
	{
		it.append($('<div><span-narrative class="receiver-org-ref">' + id + '</span-narrative></div>'));
	}
	if(d)
	{
		it.append($('<div><span-narrative class="org-type">' + d + '</span-narrative></div>'));
	}
});

acts.find("participating-org[ref], participating-org[activity-id]").each(function(i){var it=$(this);
	var id=it.attr("ref");
	var aid=it.attr("activity-id");
	
	if( aid )
	{
		wrapInner_link(it,prelink+savi.encodeURIComponent(aid.trim())+postlink,"a_"+this.tagName.toLowerCase());
	}
	else
	if(iati_codes.publisher_names[id])
	{
		wrapInner_link(it,pubprelink+id+pubpostlink,"a_"+this.tagName.toLowerCase());
	}
});


acts.find("reporting-org[ref]").each(function(i){var it=$(this);
	var id=it.attr("ref");
	
	if(id)
	{
		wrapInner_link(it,pubprelink+id+pubpostlink,"a_"+this.tagName.toLowerCase());
	}
});


acts.find("related-activity").each(function(i){var it=$(this);
	var id=it.attr("ref");
	if(id)
	{
		wrap_link(it,prelink+savi.encodeURIComponent(id)+postlink,"a_"+this.tagName.toLowerCase());
	}
});

acts.find("*").each(function(i){var it=$(this);
	if( ($.trim(it.text())=="") && (it.children().length==0) ) // no text or tags
	{
        it.addClass("empty");
    }
});


// apply css to selected div
acts.find("location").each(function(i){var it=$(this);
	if(( it.find("narrative").length==0 ) &&  it.find( "pos" ).hasClass( "empty" ))
	{
		it.parent().css( "display", "none" );
	}
});


// Version 1 banner notice
acts.each(function(i){var it=$(this);
	var c=it.attr("version");
	if( (c)== "1.0" || (c)== "1.00" || (c)== "1.01" || (c)== "1.02" || (c)== "1.03" || (c)== "1.04" || (c)== "1.05" )
	{
		it.prepend($('<a href="https://iatistandard.org/en/news/notice-iati-standard-version-1-is-deprecated/" class="banner_v1">Data on this page has been published according to version 1 of the IATI Standard, which has now been deprecated. Learn more.</a>'));
	}
});


//	add hide div to these classes
$( "span.span_document-link, span.span_participating-org, span.span_recipient-country, span.span_budget, span.span_planned-disbursement, span.span_result, span.span_related-activity, span.span_location, span.span_recipient-region, span.span_policy-marker" ).each(function(i,el){
	var e=$(el);
	var ec=e.children();
	var c=$("<span class='hide'>-</span>");
	var d=$("<span class='length'>( " + ec.length + " )</span>");		// count children
	e.append(c);
	e.append(d);
	c.click(function(){
		if( ec.eq(0).css('display') == 'none' )
		{
			c.text('-');
			ec.show('fast');
		}
		else
		{
			c.text('+');
			ec.hide('fast');
		}
	});
});

//	only count dac sectors
$( "span.span_sector" ).each(function(i,el){
	var e=$(el);
	var ec=e.children("sector[vocabulary=\"DAC\"], sector[vocabulary=\"1\"], sector[vocabulary=\"2\"]");
	var ed=e.find( "sector" );
	var c=$("<span class='hide'>-</span>");
	var d=$("<span class='length'>( " + ec.length + " )</span>");
	e.append(c);
	if(ec.length>0)
	{
		e.append(d);
	}
	c.click(function(){
		if( ed.eq(0).css('display') == 'none' )
		{
			c.text('-');
			ed.show('fast');
		}
		else
		{
			c.text('+');
			ed.hide('fast');
		}
	});

	// get all non dac sectors
	var ee=e.find( "sector" ).not("sector[vocabulary=\"DAC\"], sector[vocabulary=\"1\"], sector[vocabulary=\"2\"]");
	if(ee.length>0) // got some  non dac
	{
		ee.wrapAll( "<div class='non_dac_sectors' />");
	}
});


//	count transactions
$( "span.span_transaction" ).each(function(i,el){
	var e=$(el);
	var ec=e.find( "transaction" );
	var c=$("<span class='hide'>-</span>");
	var d=$("<span class='length'>( " + ec.length + " )</span>");		// count children
	e.append(c);
	e.append(d);
	c.click(function(){
		if( ec.eq(0).css('display') == 'none' )
		{
			c.text('-');
			ec.show('fast');
		}
		else
		{
			c.text('+');
			ec.hide('fast');
		}
	});
});

// count transaction-type
$( "span.span_transaction_code_1, span.span_transaction_code_2, span.span_transaction_code_3, span.span_transaction_code_4, span.span_transaction_code_5, span.span_transaction_code_6, span.span_transaction_code_7, span.span_transaction_code_8, span.span_transaction_code_9, span.span_transaction_code_10, span.span_transaction_code_11, span.span_transaction_code_12, span.span_transaction_code_13" ).each(function(i,el){
	var e=$(el);
	var ec=e.find( "transaction" );
	var c=$("<span class='hide'>-</span>");
	var d=$("<span class='length'>( " + ec.length + " )</span>");		// count children
	e.append(c);
	e.append(d);
	c.click(function(){
		if( ec.eq(0).css('display') == 'none' )
		{
			c.text('-');
			ec.show('fast');
		}
		else
		{
			c.text('+');
			ec.hide('fast');
		}
	});
});

$( "span.span_transaction").each(function(i,el){
	var e=$(el);
	e.parent().find("span.span_transaction_code_11").insertBefore("span.span_transaction_code_1");	//	move div before div
	e.parent().find(".transactions_svg_type_11").insertBefore("span.span_transaction_code_1");	//	move div before div
	e.parent().find(".transactions_svg_type_all").append("<div class='legend_wrap'></div>");	//	move div before div
	for(var idx=1; idx<=13; idx++)
	{
		e.parent().find(".transactions_svg_type_"+idx).append("<span class='legend type_" + idx + "'></span>");	// add span for legend
	}	
	e.parent().find("span.legend").clone().appendTo(".legend_wrap");	// duplicate and move inside legend_wrap
});


//	add hide div to these classes
$( "result" ).each(function(i,el){
	var e=$(el);
	var ec=e.children();
	var c=$("<span class='hide'>-</span>");
	e.append(c);
	c.click(function(){
		if( ec.eq(0).css('display') == 'none' )
		{
			c.text('-');
			ec.show('fast');
		}
		else
		{
			c.text('+');
			ec.hide('fast');
		}
	});
});

};
