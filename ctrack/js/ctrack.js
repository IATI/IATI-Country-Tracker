!function(t,n){n.ctrack=t,t.chunks={chunk1:"\nThis is some {test} data! \n",chunk2:"\nThis is some more data\n{chunk1}\n",loading:"\n<b>Please wait, requesting data from iati-datastore...</b>\n",preparing:"\n<b>Please wait, preparing page...</b>\n",dump_act_xml:'{ctnavxml}\n<div style="width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;">\n{xml}\n</div>\n',dump_act:'<a href="#ctrack_index">BACK</a>\n<table>\n<tr><td>id:</td><td>{id}</td></tr>\n<tr><td>title:</td><td>{title}</td></tr>\n<tr><td>status:</td><td>{status} ({status-code})</td></tr>\n<tr><td>start-date:</td><td>{start-date}</td></tr>\n<tr><td>end-date:</td><td>{end-date}</td></tr>\n<tr><td>description:</td><td>{description}</td></tr>\n</table>\n<br/>\n\n',title:"Country Tracker\n",bodytest:'<style>{css}</style>\n{ctnav}\n<div style="width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;">\n{cthead}\n{ctbox1}\n{ctbox1table}\n{ctbox1more}\n{ctboxes}\n{ctnear}\n{ctfooter}\n{ctfind}\n</div>\n\n</div>\n',ctnav:'<div style="width:100%; background-color:#96CBFF; border-bottom:11px solid #BDD9FC; height:90px; position:fixed; z-index:1;">\n	<div style="width:960px; margin:0 auto; color:#fff; font-size:32px; padding-top:30px;">\n		<div style="display:inline-block; vertical-align:top; width:760px; height:30px;">\n			<a href="#ctrack_index"><img src="/art/ctlogo.png" alt="Country Tracker logo" width="350" height="30"/></a>\n		</div><div style="width:200px; display:inline-block; text-align:right;"><a href="/" class="navabout">Back to modules</a></div>\n	</div>\n</div>\n',ctnavxml:'<div style="width:100%; background-color:#96CBFF; border-bottom:11px solid #BDD9FC; height:90px; position:fixed; z-index:1;">\n	<div style="width:960px; margin:0 auto; color:#fff; font-size:32px; padding-top:30px;">\n		<div style="display:inline-block; vertical-align:top; width:760px; height:30px;">\n			<a href="#ctrack_index"><img src="/art/ctlogo.png" alt="Country Tracker logo" width="350" height="30"/></a>\n		</div><div style="width:200px; display:inline-block; text-align:right;"><a href="#ctrack_index" class="navabout">Back</a></div>\n	</div>\n</div>\n\n',divtop:'<div style="width:1040px; margin:0 auto; background-color:#fff;">',divbot:"</div>\n\n",cthead:'<div style="width:960px; margin:0 auto; color:#444; padding-top:40px;">\n<div style="display:inline-block; vertical-align:top; width:150px; height:90px;"><img src="{country_flag}" alt="{country_name} flag" width="150" height="90"/></div><div style="display:inline-block; vertical-align:top; width:620px; max-width:620px; padding-left:20px;">\n<div style="color:#8E9092; font-size:32px;">What\'s going on?</div><div style="font-size:64px; letter-spacing:5px; color:#444; line-height:1.0em; text-transform:uppercase;">{country_name}</div></div><a title="This denotes the current cut-off time for the current data population and will not be visible in the widget." style="display:inline-block; vertical-align:top; text-align:center; color:#ccc; font-size:32px;"><div style="font-size:20px;">TIME STAMP</div><div style="color:#bbb;">{today}</div></a>\n</div>\n',country_flag:"/art/bdflag.png\n",country_name:"BANGLADESH\n\n",ctbox1:'<div style="width:954px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;">\n<div style="width:634px; padding:30px; display:inline-block; vertical-align:top; border-right:3px solid #D8D8D8; max-height:240px;">{ctactive}</div><div style="display:inline-block; vertical-align:top; width:257px; max-height:240px;"><div style="padding:20px 10px 10px 30px; border-bottom:3px solid #D8D8D8; height:50%;">{ctactivities}</div><div style="padding:20px 10px 10px 30px; height:50%;">{ctpublishers}</div></div>\n</div>\n\n\n\n',ctactive:'<div style="padding-left:10px; font-size:32px; color:#A5BBC0;">Active Projects</div>\n<div style="font-size:128px; color:#444;">{active_projects}</div>\n\n\n\n',ctactivities:'<div style="padding-left:5px;font-size:20px; color:#A5BBC0;">Total Projects</div>\n<div style="font-size:56px; color:#444;">{total_projects}</div>\n\n\n\n',ctpublishers:'<div style="padding-left:5px;font-size:20px; color:#A5BBC0;">Publishers</div>\n<div style="font-size:56px; color:#444;">{numof_publishers}</div>\n\n\n\n',ctbox1table_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{aid}">{title}</a></div></td><td>{date}</td></tr>\n',ctbox1table:'<table class="box1">\n<tr><td colspan="2" style="font-size:12px; color:#666; line-height:2.0em;">ENDING SOON</td><td style="font-size:12px; color:#666; line-height:2.0em;">END DATE</td></tr>\n{ctbox1table_datas}\n</table>\n',old:'<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div></td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>334461</td></tr>\n\n\n\n<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div></td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>334461</td></tr>\n\n\n\n<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div><div style="padding-top:10px;"><img src="/art/logo1.png" alt="logo" width="215" height="49"/></div></td><td>2014-01-17</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div><div style="padding-top:10px;"><img src="/art/logo2.png" alt="logo" width="215" height="49"/></div></td><td>2014-02-24</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div><div style="padding-top:10px;"><img src="/art/logo3.png" alt="logo" width="215" height="49"/></div></td><td>2014-06-07</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div><div style="padding-top:10px;"><img src="/art/logo1.png" alt="logo" width="215" height="49"/></div></td><td>2014-11-13</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div><div style="padding-top:10px;"><img src="/art/logo2.png" alt="logo" width="215" height="49"/></div></td><td>2015-03-12</td></tr>\n\n\n\n\n<tr><td>1.</td><td><div>Project A</div></td><td>Pakistan</td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>Nepal</td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Project C</div></td><td>Russia</td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>China</td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Project E</div></td><td>Korea</td><td>334461</td></tr>\n\n\n\n',ctbox1more:'<div style="width:960px; margin:0 auto;">\n<a href="#ctrack_ending_more" class="boxmore">LOAD MORE</a>\n</div>\n\n\n\n',ctboxes:'<div style="width:960px; margin:0 auto;">\n<div style="display:inline-block; vertical-align:top; margin-right:60px;">{ctbox2}{ctbox2table}{ctbox2more}</div><div style="display:inline-block; vertical-align:top;">{ctbox3}{ctbox3table}{ctbox3more}</div>\n</div>\n\n\n\n',ctbox2:'<div style="width:444px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;">\n<div style="width:270px; padding:20px; display:inline-block; vertical-align:top;">{ctend}</div><div style="display:inline-block; vertical-align:top; width:134px; padding-top:40px;"><img src="/art/graph.png" alt="Growth Graph" width="84" height="94"/></div>\n</div>\n\n\n\n',ctend:'<div style="padding-left:10px; font-size:20px; color:#B19090;">Ended Projects</div>\n<div style="font-size:86px; color:#444;">{finished_projects}</div>\n\n\n\n',ctbox2table_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{activity}">{title}</a></div></td><td>{date}</td></tr>\n',ctbox2table:'<table class="box2">\n<tr><td colspan="2" style="font-size:12px; color:#666;">ENDING SOON</td><td style="font-size:12px; color:#666;">END DATE</td></tr>\n{ctbox2table_datas}\n</table>\n',ctbox2more:'<div style="width:450px; margin:0 auto;">\n<a href="#ctrack_finished_more" class="boxmore">LOAD MORE</a>\n</div>\n',ctbox3more:'<div style="width:450px; margin:0 auto;">\n<a href="#ctrack_starting_more" class="boxmore">LOAD MORE</a>\n</div>\n\n\n',ctbox3:'<div style="width:444px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;">\n<div style="width:270px; padding:20px; display:inline-block; vertical-align:top;">{ctplan}</div><div style="display:inline-block; vertical-align:top; width:134px; padding-top:40px;"><img src="/art/graph.png" alt="Growth Graph" width="84" height="94"/></div>\n</div>\n\n\n\n',ctplan:'<div style="padding-left:10px; font-size:20px; color:#96B67C;">Planned Projects</div>\n<div style="font-size:86px; color:#444;">{planned_projects}</div>\n\n\n',ctbox3table_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{activity}">{title}</a></div><div style="padding-top:10px;"><img src="/art/logo1.png" alt="logo" width="215" height="49"/></div></td><td>{date}</td></tr>\n',ctbox3table:'<table class="box3">\n<tr><td colspan="2" style="font-size:12px; color:#666;">STARTING SOON</td><td style="font-size:12px; color:#666;">START DATE</td></tr>\n{ctbox3table_datas}\n</table>\n',ctnear:'<div style="width:960px; margin:0 auto; margin-top:60px; background-color:#E5EFFA; padding-bottom:40px;">{ctnearhead}{ctneartable}{ctnearmore}</div>\n\n\n\n',ctnearhead:'<div style="width:880px; padding:30px 40px 0 40px; margin:0 auto;">\n<div style="border-bottom:3px solid #CDE2E7; padding-bottom:20px;">\n<div style="display:inline-block; font-size:38px; color:#3C98AF; width:635px;"><div style="display:inline-block; padding-right:10px; width:30px;"><img src="/art/compass.png" alt="compass icon" width="30" height="30" /></div>What\'s going on nearby?</div><a href="#" style="display:inline-block; font-size:20px; text-align:right; color:#999;">Change radius of 600 miles</a>\n</div>\n</div>\n\n\n\n',ctneartable_data:'<tr><td>{num}.</td><td><div><a href="#ctrack_activity" activity="{activity}">{title}</a></div></td><td>{country}</td><td>{date}</td></tr>\n',ctneartable:'<table class="near">\n<tr><td colspan="2" style=" font-size:12px; color:#999; line-height:2.3em;">ACTIVE PROJECTS ENDING SOON</td><td style="font-size:12px; color:#999; line-height:2.3em;">LOCATION &#8743; &#8744;</td><td style="font-size:12px; color:#999; line-height:2.3em;">END DATE</td></tr>\n{ctneartable_datas}\n</table>\n',ctnearmore:'<div style="width:880px; margin:0 auto; padding:0 40px;">\n<a href="#ctrack_near_more" class="nearmore">LOAD MORE</a>\n</div>\n\n\n\n',ctfooter:'<div style="width:960px; margin:0 auto; margin-top:40px;">{ctfootboxes}</div>\n\n\n\n',ctfootboxes:'<div style="display:inline-block; vertical-align:top; width:370px; margin:0 auto;">{ctabout}</div><div style="display:inline-block; vertical-align:top; width:330px; margin:0 auto;">{ctlogo}</div><div style="display:inline-block; vertical-align:top; width:260px; margin:0 auto;">{ctembed}</div>\n\n\n\n',ctabout:'<a name="about"></a>\n<div style="margin:0 auto; line-height:1.35em; word-spacing:0.05em; font-size:18px; color:#777;">Country Tracker aims to be a simple user interface to search and browse all IATI data relating to a specific country that can be easily hosted by <span class="bold">anyone</span>, <span class="bold ob">anywhere</span>.</div>\n\n\n\n',ctlogo:'<a href="http://iatistandard.org/" target="_blank" style="width:270; margin:0 auto; padding:0 30px;"><img src="/art/iati-logo.269.png" alt="IATI logo" width="269" height="70"/></a>\n\n\n\n',ctembed:'<div style="width:260px; margin:0 auto; font-size:16px; color:#444; padding-bottom:10px;">Embed this on your website!</div>\n<div style="width:198px; height:70px; margin:0 auto; border:1px solid #444; padding:20px 30px; color:#ccc; font-size:14px; resize:both;\noverflow:auto; background-color:rgb(255, 255, 255);">HTML embed code will be placed here for copy and pasting on to your website.</div>\n\n\n\n',ctfind:'<div class="footer">\n<div style="width:960px; margin:0 auto;">\n<div style="display:inline-block; vertical-align:top; width:520px; font-size:28px; padding-right:20px;">Find out what\'s going on where you live</div><div style="display:inline-block; vertical-align:top; width:340px; height:35px; background-color:#F7EA61; border-bottom:3px solid #C7B740; font-size:28px; color:#fff;">eg. United Kingdom</div><a href=# style="display:inline-block; vertical-align:top; width:35px; height:35px; padding-left:35px;"><img src="/art/find.png" alt="Find" width="35" height="35" /></a>\n</div>\n</div>\n\n\n',css:"html	{background:url('{background_image}') no-repeat bottom fixed; background-size:cover; overflow:hidden; overflow-y: scroll;}\n"};var e=e||t;e.plate={},e.plate.preps={},e.plate.prepare_cache=function(t){if(e.plate.preps[t])return e.plate.preps[t];var i=e.plate.prepare(t);return e.plate.preps[t]=i,i},e.plate.prepare=function(t){var i=t.split("{"),n=[];n.push(i[0]);for(var e=1;e<i.length;e++){var a=i[e].split("}");if(a.length>=2){n.push("{"),n.push(a[0]),n.push(a[1]);for(var d=2;d<a.length;d++)n.push("}"+a[2])}else n.push("{"+i[e])}return n},e.plate.lookup=function(t,i){return void 0!=i[t]?i[t]:void 0!=e.args.chunks[t]?e.args.chunks[t]:void 0!=e.chunks[t]?e.chunks[t]:"{"+t+"}"},e.plate.chunk=function(t,i){return e.plate.replace(e.chunks[t],i)},e.plate.recurse_chunk=function(t,i){return e.plate.recurse_replace(e.chunks[t],i)},e.plate.chunks=function(t,i){return e.plate.replaces(e.chunks[t],i)},e.plate.replace=function(t,i){for(var n=e.plate.prepare(t),a=[],d=0;d<n.length;d++){var o=n[d];"{"==o?(d++,o=n[d],a.push(e.plate.lookup(o,i))):a.push(o)}return a.join("")},e.plate.recurse_replace=function(t,i){for(var n="",a=0;t!=n&&(n=t,t=e.plate.replace(t,i),a++,!(a>100)););return t},e.plate.replaces=function(t,i){for(var n=[],a=0;a<i.length;a++)n.push(e.plate.replace(t,i[a]));return n.join("")};var e=e||t;e.setup_html=function(t){e.args=t,e.div={},e.div.master=$(e.args.master),e.div.main=$('<div class="ctrack_main"></div>'),e.div.master.empty(),e.div.master.append(e.div.main),e.div.main.html(e.plate.chunk("loading",{}));var i={},n=function(t,n){return i[t]=void 0!=n?n:e.plate.recurse_chunk(t,i),i[t]};e.htmldata=i,e.htmlchunk=n,e.htmlchunk("ctbox1table_datas","<tr><td>Loading...</td></tr>"),e.htmlchunk("active_projects",0),e.htmlchunk("ctbox2table_datas","<tr><td>Loading...</td></tr>"),e.htmlchunk("finished_projects",0),e.htmlchunk("ctbox3table_datas","<tr><td>Loading...</td></tr>"),e.htmlchunk("planned_projects",0),e.htmlchunk("ctneartable_datas","<tr><td>Loading...</td></tr>"),e.htmlchunk("numof_publishers",0),e.htmlchunk("total_projects",0),e.htmlchunk("today",e.get_today()),e.htmlall=function(t){return t?n(t):void 0},e.div.main.html(e.htmlall("bodytest")),e.fetch_endingsoon({limit:5}),e.fetch_finished({limit:5}),e.fetch_planned({limit:5}),e.fetch_near({limit:5}),e.fetch_stats({}),$(document).on("click","a",function(t){var i=$(this).prop("href");if(i&&(i=i.split("#"),i[1])){i=i[1];var n=i.split("_");if(console.log(i),"ctrack"==n[0])if(t.preventDefault(),"index"==n[1])e.div.main.html(e.htmlall("bodytest"));else if("activity"==n[1]){var i=$(this).attr("activity");console.log(i),e.fetch_activity({activity:i})}else if("more"==n[2])switch(n[1]){case"ending":e.fetch_endingsoon({limit:20});break;case"finished":e.fetch_finished({limit:20});break;case"starting":e.fetch_planned({limit:20});break;case"near":e.fetch_near({limit:20})}}})};var e=e||t;e.iati={},e.iati.totext=function(t){return"string"==typeof t?t:"object"==typeof t?e.iati.totext(t.text):""},e.iati.fill_text=function(t,i,n){for(var a=0;a<n.length;a++)i[n[a]]=e.iati.totext(t[n[a]])},e.iati.array_status=["Pipeline","Implementation","Completion","Post","Cancelled"],e.iati.lookup_status=function(t){return e.iati.array_status[t]||"N/A"},e.iati.clean_activity=function(t){var i={};return t["iati-activity"]&&(t=t["iati-activity"]),e.iati.fill_text(t,i,["title","description","reporting-org"]),i["status-code"]=Number(t["activity-status"]&&t["activity-status"].code||-1),i.status=e.iati.lookup_status(i["status-code"]),i["start-date"]=t["start-actual"]||t["start-planned"],i["end-date"]=t["end-actual"]||t["end-planned"],i.id=t["iati-identifier"],i},e.iati.clean_activities=function(t){for(var i=[],n=0;n<t.length;n++)i[n]=e.iati.clean_activity(t[n]);return i};var e=e||t;e.get_today=function(){var t=new Date,i=("0"+t.getDate()).slice(-2),n=("0"+(t.getMonth()+1)).slice(-2),e=t.getFullYear()+"-"+n+"-"+i;return e},e.get_nday=function(t){var i=new Date(1e3*t*60*60*24),n=("0"+i.getDate()).slice(-2),e=("0"+(i.getMonth()+1)).slice(-2),a=i.getFullYear()+"-"+e+"-"+n;return a},e.fetch=function(t,i){$.ajax({dataType:"json",url:e.args.dstore+"/q?callback=?",data:t,success:i})},e.fetch_endingsoon=function(t){t=t||{};var n=e.get_today(),a={from:"activities,country",limit:t.limit||5,orderby:"day_end",status_code:"2",day_end_gt:0,country_code:t.country||e.args.country},d=t.callback||function(t){console.log("fetch endingsoon : "+n),console.log(t);var a=[];for(i=0;i<t.rows.length;i++){var d=t.rows[i];d.num=i+1,d.date=e.get_nday(d.day_end),d.activity=d.aid,a.push(e.plate.chunk("ctbox1table_data",d))}e.htmlchunk("ctbox1table_datas",a.join("")),e.div.main.html(e.htmlall("bodytest"))};e.fetch(a,d)},e.fetch_finished=function(t){t=t||{};var n=e.get_today(),a={from:"activities,country",limit:t.limit||5,orderby:"day_end-",status_code:"3|4",country_code:t.country||e.args.country},d=t.callback||function(t){console.log("fetch finshed : "+n),console.log(t);var a=[];for(i=0;i<t.rows.length;i++){var d=t.rows[i];d.num=i+1,d.date=e.get_nday(d.day_end),d.activity=d.aid,a.push(e.plate.chunk("ctbox2table_data",d))}e.htmlchunk("ctbox2table_datas",a.join("")),e.div.main.html(e.htmlall("bodytest"))};e.fetch(a,d)},e.fetch_planned=function(t){t=t||{};var n=e.get_today(),a={from:"activities,country",limit:t.limit||5,orderby:"day_start",status_code:1,country_code:t.country||e.args.country},d=t.callback||function(t){console.log("fetch planned : "+n),console.log(t);var a=[];for(i=0;i<t.rows.length;i++){var d=t.rows[i];d.num=i+1,d.date=e.get_nday(d.day_start),d.activity=d.aid,a.push(e.plate.chunk("ctbox3table_data",d))}e.htmlchunk("ctbox3table_datas",a.join("")),e.div.main.html(e.htmlall("bodytest"))};e.fetch(a,d)},e.fetch_stats=function(t){t=t||{};var n=(e.get_today(),function(){var i={from:"activities,country",select:"stats",country_code:t.country||e.args.country},n=t.callback||function(t){console.log("activity stats1"),console.log(t),e.htmlchunk("total_projects",t.rows[0]["COUNT(*)"]),e.htmlchunk("numof_publishers",t.rows[0]["COUNT(DISTINCT reporting_org)"]),e.div.main.html(e.htmlall("bodytest"))};e.fetch(i,n)});n();var a=function(){var n={from:"activities,country",select:"stats",groupby:"status_code",country_code:t.country||e.args.country},a=t.callback||function(t){console.log("activity stats2"),console.log(t);var n={};for(i=0;i<t.rows.length;i++){var a=t.rows[i],d=a["MAX(status_code)"],o=a["COUNT(*)"];n[d]=o}e.htmlchunk("active_projects",n[2]||0),e.htmlchunk("finished_projects",(n[3]||0)+(n[4]||0)),e.htmlchunk("planned_projects",n[1]||0)};e.fetch(n,a)};a()},e.fetch_activity=function(t){var i={aid:t.activity},n=t.callback||function(t){e.div.main.html(e.plate.chunk("preparing",{})),console.log(t),e.div.main.html(e.plate.chunk("dump_act_xml",t.rows[0])),iati_activity_clean_and_sort()};e.fetch(i,n)},e.fetch_near=function(t){t=t||{},t.limit=t.limit||5,t.country="bd",t.callback=t.callback||function(t){console.log("fetch endingsoon NP "),console.log(t);var n=[];for(i=0;i<t.rows.length;i++){var a=t.rows[i];a.num=i+1,a.date=e.get_nday(a.day_end),a.country="Nepal",a.activity=a.aid,n.push(e.plate.chunk("ctneartable_data",a))}e.htmlchunk("ctneartable_datas",n.join("")),e.div.main.html(e.htmlall("bodytest"))},e.fetch_endingsoon(t)}}({},function(){return this}());
//# sourceMappingURL=ctrack.map