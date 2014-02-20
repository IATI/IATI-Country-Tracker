exports.chunks={"chunk1":"\nThis is some {test} data! \n","chunk2":"\nThis is some more data\n{chunk1}\n","loading":"\n<b>Please wait, requesting data from iati-datastore...</b>\n","preparing":"\n<b>Please wait, preparing page...</b>\n","title":"IATI Country Tracker\n\n","view_act":"{ctnavxml}\n<div style=\"width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;\">\n{xml}\n</div>\n{footer}\n","view_main":"<style>{css}</style>\n{ctnav}\n<div style=\"width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;\">\n{cthead}\n{ctbox1}\n{ctbox1table}\n{ctbox1more}\n{ctboxes}\n{ctnear}\n{ctfooter}\n{ctfind}\n</div>\n\n","view_donors":"<style>{css}</style>\n{ctnavxml}\n<div style=\"width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;\">\n\t<div class=\"defcon\">\n\t\t{table_donors}\n\t</div>\n</div>\n{footer}\n","table_donors":"<table class=\"donors\">\n{table_donors_row_head}\n{table_donors_rows}\n</table>\n","table_donors_rows":"{table_donors_row}\n","table_donors_row_head":"<tr>\n<td>CRS</td>\n<td>Donor</td>\n<td>2012 transactions</td>\n<td>2013 transactions</td>\n<td>2014 transactions</td>\n<td>2014 budget</td>\n<td>2015 budget</td>\n</tr>\n","table_donors_row":"<tr>\n<td>{crs}</td>\n<td>{donor}</td>\n<td>{t2012}</td>\n<td>{t2013}</td>\n<td>{t2014}</td>\n<td>{b2014}</td>\n<td>{b2015}</td></tr>\n\n","view_sectors":"<style>{css}</style>\n{ctnavxml}\n<div style=\"width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;\">\n\t<div class=\"defcon\">\n\t\t{table_sectors}\n\t</div>\n</div>\n{footer}\n","table_sectors":"<table class=\"sectors\">\n{table_sectors_row_head}\n{table_sectors_rows}\n</table>\n","table_sectors_rows":"{table_sectors_row}\n","table_sectors_row_head":"<tr>\n<td>CRS</td>\n<td>Sector</td>\n<td>2012 transactions</td>\n<td>2013 transactions</td>\n<td>2014 transactions</td>\n<td>2014 budget</td>\n<td>2015 budget</td>\n</tr>\n","table_sectors_row":"<tr>\n<td>{crs}</td>\n<td>{sector}</td>\n<td>{t2012}</td>\n<td>{t2013}</td>\n<td>{t2014}</td>\n<td>{b2014}</td>\n<td>{b2015}</td></tr>\n\n\n","view_districts":"<style>{css}</style>\n{ctnavxml}\n<div style=\"width:1040px; margin:0 auto; background-color:#fff; padding-top:110px;\">\n\t<div class=\"defcon\">\n\t\t{table_districts}\n\t</div>\n</div>\n{footer}\n","table_districts":"<table class=\"districts\">\n{table_districts_row_head}\n{table_districts_rows}\n</table>\n","table_districts_rows":"{table_districts_row}\n","table_districts_row_head":"<tr>\n<td>District</td>\n<td>2012 transactions</td>\n<td>2013 transactions</td>\n<td>2014 transactions</td>\n<td>2014 budget</td>\n<td>2015 budget</td>\n</tr>\n","table_districts_row":"<tr>\n<td>{location}</td>\n<td>{t2012}</td>\n<td>{t2013}</td>\n<td>{t2014}</td>\n<td>{b2014}</td>\n<td>{b2015}</td></tr>\n\n","ctnav":"<div style=\"width:100%; background-color:#96CBFF; border-bottom:11px solid #BDD9FC; height:90px; position:fixed; z-index:1;\">\n\t<div style=\"width:960px; margin:0 auto; color:#fff; font-size:32px; padding-top:30px;\">\n\t\t<div style=\"display:inline-block; vertical-align:top; width:760px; height:30px;\">\n\t\t\t<a href=\"#ctrack_index\"><img src=\"/art/ctlogo.png\" alt=\"Country Tracker logo\" width=\"350\" height=\"30\"/></a>\n\t\t</div><div style=\"width:200px; display:inline-block; text-align:right;\"><a href=\"/\" class=\"navabout\">Back to modules</a></div>\n\t</div>\n</div>\n","ctnavxml":"<div style=\"width:100%; background-color:#96CBFF; border-bottom:11px solid #BDD9FC; height:90px; position:fixed; z-index:1;\">\n\t<div style=\"width:960px; margin:0 auto; color:#fff; font-size:32px; padding-top:30px;\">\n\t\t<div style=\"display:inline-block; vertical-align:top; width:760px; height:30px;\">\n\t\t\t<a href=\"#ctrack_index\"><img src=\"/art/ctlogo.png\" alt=\"Country Tracker logo\" width=\"350\" height=\"30\"/></a>\n\t\t</div><div style=\"width:200px; display:inline-block; text-align:right;\"><a href=\"#ctrack_index\" class=\"navabout\">Back</a></div>\n\t</div>\n</div>\n\n","divtop":"<div style=\"width:1040px; margin:0 auto; background-color:#fff;\">","divbot":"</div>\n\n","cthead":"<div style=\"width:960px; margin:0 auto; color:#444; padding-top:40px;\">\n<div style=\"display:inline-block; vertical-align:top; width:150px; height:90px;\"><img src=\"{country_flag}\" alt=\"{country_name} flag\" width=\"150\" height=\"90\"/></div><div style=\"display:inline-block; vertical-align:top; width:620px; max-width:620px; padding-left:20px;\">\n<div style=\"color:#8E9092; font-size:32px;\">What's going on?</div><div style=\"font-size:64px; letter-spacing:5px; color:#444; line-height:1.0em; text-transform:uppercase;\">{country_name}</div></div><a title=\"This denotes the current cut-off time for the current data population and will not be visible in the widget.\" style=\"display:inline-block; vertical-align:top; text-align:center; color:#ccc; font-size:32px;\"><div style=\"font-size:20px;\">TIME STAMP</div><div style=\"color:#bbb;\">{today}</div></a>\n</div>\n","country_flag":"/art/bdflag.png\n","country_name":"BANGLADESH\n\n","ctbox1":"<div style=\"width:954px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;\">\n<div style=\"width:634px; padding:30px; display:inline-block; vertical-align:top; border-right:3px solid #D8D8D8; max-height:240px;\">{ctactive}</div><div style=\"display:inline-block; vertical-align:top; width:257px; max-height:240px;\"><div style=\"padding:20px 10px 10px 30px; border-bottom:3px solid #D8D8D8; height:50%;\">{ctactivities}</div><div style=\"padding:20px 10px 10px 30px; height:50%;\">{ctpublishers}</div></div>\n</div>\n\n\n\n","ctactive":"<div style=\"padding-left:10px; font-size:32px; color:#A5BBC0;\">Active Projects</div>\n<div style=\"font-size:128px; color:#444;\">{active_projects}</div>\n\n\n\n","ctactivities":"<div style=\"padding-left:5px;font-size:20px; color:#A5BBC0;\">Total Projects</div>\n<div style=\"font-size:56px; color:#444;\">{total_projects}</div>\n\n\n\n","ctpublishers":"<div style=\"padding-left:5px;font-size:20px; color:#A5BBC0;\">Publishers</div>\n<div style=\"font-size:56px; color:#444;\">{numof_publishers}</div>\n\n\n\n","ctbox1table_data":"<tr><td>{num}.</td><td><div><a href=\"#ctrack_activity\" activity=\"{aid}\">{title}</a></div></td><td>{date}</td></tr>\n","ctbox1table":"<table class=\"def box1\">\n<tr><td colspan=\"2\" style=\"font-size:12px; color:#666; line-height:2.0em;\">ENDING SOON</td><td style=\"font-size:12px; color:#666; line-height:2.0em;\">END DATE</td></tr>\n{ctbox1table_datas}\n</table>\n","old":"<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div></td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>334461</td></tr>\n\n\n\n<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div></td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>334461</td></tr>\n\n\n\n<tr><td>1.</td><td><div>Paribarvittik Jeboboichittra Gram (PJG) Project</div><div style=\"padding-top:10px;\"><img src=\"/art/logo1.png\" alt=\"logo\" width=\"215\" height=\"49\"/></div></td><td>2014-01-17</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div><div style=\"padding-top:10px;\"><img src=\"/art/logo2.png\" alt=\"logo\" width=\"215\" height=\"49\"/></div></td><td>2014-02-24</td></tr>\n<tr><td>3.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div><div style=\"padding-top:10px;\"><img src=\"/art/logo3.png\" alt=\"logo\" width=\"215\" height=\"49\"/></div></td><td>2014-06-07</td></tr>\n<tr><td>4.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div><div style=\"padding-top:10px;\"><img src=\"/art/logo1.png\" alt=\"logo\" width=\"215\" height=\"49\"/></div></td><td>2014-11-13</td></tr>\n<tr><td>5.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div><div style=\"padding-top:10px;\"><img src=\"/art/logo2.png\" alt=\"logo\" width=\"215\" height=\"49\"/></div></td><td>2015-03-12</td></tr>\n\n\n\n\n<tr><td>1.</td><td><div>Project A</div></td><td>Pakistan</td><td>334461</td></tr>\n<tr><td>2.</td><td><div>Flood Resistant Shelter for South-West region in Bangladesh (FRESH)</div></td><td>Nepal</td><td>1612124</td></tr>\n<tr><td>3.</td><td><div>Project C</div></td><td>Russia</td><td>313887</td></tr>\n<tr><td>4.</td><td><div>Empowering Women RMG Workers Project Bangladesh</div></td><td>China</td><td>1612124</td></tr>\n<tr><td>5.</td><td><div>Project E</div></td><td>Korea</td><td>334461</td></tr>\n\n\n\n","ctbox1more":"<div style=\"width:960px; margin:0 auto;\">\n<a href=\"#ctrack_ending_more\" class=\"boxmore\">LOAD MORE</a>\n</div>\n\n\n\n","ctboxes":"<div style=\"width:960px; margin:0 auto;\">\n<div style=\"display:inline-block; vertical-align:top; margin-right:60px;\">{ctbox2}{ctbox2table}{ctbox2more}</div><div style=\"display:inline-block; vertical-align:top;\">{ctbox3}{ctbox3table}{ctbox3more}</div>\n</div>\n\n\n\n","ctbox2":"<div style=\"width:444px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;\">\n<div style=\"width:270px; padding:20px; display:inline-block; vertical-align:top;\">{ctend}</div><div style=\"display:inline-block; vertical-align:top; width:134px; padding-top:40px;\"><img src=\"/art/graph.png\" alt=\"Growth Graph\" width=\"84\" height=\"94\"/></div>\n</div>\n\n\n\n","ctend":"<div style=\"padding-left:10px; font-size:20px; color:#B19090;\">Ended Projects</div>\n<div style=\"font-size:86px; color:#444;\">{finished_projects}</div>\n\n\n\n","ctbox2table_data":"<tr><td>{num}.</td><td><div><a href=\"#ctrack_activity\" activity=\"{activity}\">{title}</a></div></td><td>{date}</td></tr>\n","ctbox2table":"<table class=\"def box2\">\n<tr><td colspan=\"2\" style=\"font-size:12px; color:#666;\">ENDING SOON</td><td style=\"font-size:12px; color:#666;\">END DATE</td></tr>\n{ctbox2table_datas}\n</table>\n","ctbox2more":"<div style=\"width:450px; margin:0 auto;\">\n<a href=\"#ctrack_finished_more\" class=\"boxmore\">LOAD MORE</a>\n</div>\n","ctbox3more":"<div style=\"width:450px; margin:0 auto;\">\n<a href=\"#ctrack_starting_more\" class=\"boxmore\">LOAD MORE</a>\n</div>\n\n\n","ctbox3":"<div style=\"width:444px; margin:0 auto; color:#444; margin-top:40px; border:3px solid #D8D8D8;\">\n<div style=\"width:270px; padding:20px; display:inline-block; vertical-align:top;\">{ctplan}</div><div style=\"display:inline-block; vertical-align:top; width:134px; padding-top:40px;\"><img src=\"/art/graph.png\" alt=\"Growth Graph\" width=\"84\" height=\"94\"/></div>\n</div>\n\n\n\n","ctplan":"<div style=\"padding-left:10px; font-size:20px; color:#96B67C;\">Planned Projects</div>\n<div style=\"font-size:86px; color:#444;\">{planned_projects}</div>\n\n\n","ctbox3table_data":"<tr><td>{num}.</td><td><div><a href=\"#ctrack_activity\" activity=\"{activity}\">{title}</a></div><div style=\"padding-top:10px;\"><img src=\"/art/logo1.png\" alt=\"logo\" width=\"215\" height=\"49\"/></div></td><td>{date}</td></tr>\n","ctbox3table":"<table class=\"def box3\">\n<tr><td colspan=\"2\" style=\"font-size:12px; color:#666;\">STARTING SOON</td><td style=\"font-size:12px; color:#666;\">START DATE</td></tr>\n{ctbox3table_datas}\n</table>\n","ctnear":"<div style=\"width:960px; margin:0 auto; margin-top:60px; background-color:#E5EFFA; padding-bottom:40px;\">{ctnearhead}{ctneartable}{ctnearmore}</div>\n\n\n\n","ctnearhead":"<div style=\"width:880px; padding:30px 40px 0 40px; margin:0 auto;\">\n<div style=\"border-bottom:3px solid #CDE2E7; padding-bottom:20px;\">\n<div style=\"display:inline-block; font-size:38px; color:#3C98AF; width:635px;\"><div style=\"display:inline-block; padding-right:10px; width:30px;\"><img src=\"/art/compass.png\" alt=\"compass icon\" width=\"30\" height=\"30\" /></div>What's going on nearby?</div><a href=\"#\" style=\"display:inline-block; font-size:20px; text-align:right; color:#999;\">Change radius of 600 miles</a>\n</div>\n</div>\n\n\n\n","ctneartable_data":"<tr><td>{num}.</td><td><div><a href=\"#ctrack_activity\" activity=\"{activity}\">{title}</a></div></td><td>{country}</td><td>{date}</td></tr>\n","ctneartable":"<table class=\"def near\">\n<tr><td colspan=\"2\" style=\" font-size:12px; color:#999; line-height:2.3em;\">ACTIVE PROJECTS ENDING SOON</td><td style=\"font-size:12px; color:#999; line-height:2.3em;\">LOCATION &#8743; &#8744;</td><td style=\"font-size:12px; color:#999; line-height:2.3em;\">END DATE</td></tr>\n{ctneartable_datas}\n</table>\n","ctnearmore":"<div style=\"width:880px; margin:0 auto; padding:0 40px;\">\n<a href=\"#ctrack_near_more\" class=\"nearmore\">LOAD MORE</a>\n</div>\n\n\n\n","ctfooter":"<div style=\"width:960px; margin:0 auto; margin-top:40px;\">{ctfootboxes}</div>\n\n\n\n","ctfootboxes":"<div style=\"display:inline-block; vertical-align:top; width:370px; margin:0 auto;\">{ctabout}</div><div style=\"display:inline-block; vertical-align:top; width:330px; margin:0 auto;\">{ctlogo}</div><div style=\"display:inline-block; vertical-align:top; width:260px; margin:0 auto;\">{ctembed}</div>\n\n\n\n","ctabout":"<a name=\"about\"></a>\n<div style=\"margin:0 auto; line-height:1.35em; word-spacing:0.05em; font-size:18px; color:#777;\">Country Tracker aims to be a simple user interface to search and browse all IATI data relating to a specific country that can be easily hosted by <span class=\"bold\">anyone</span>, <span class=\"bold ob\">anywhere</span>.</div>\n\n\n\n","ctlogo":"<a href=\"http://iatistandard.org/\" target=\"_blank\" style=\"width:270; margin:0 auto; padding:0 30px;\"><img src=\"/art/iati-logo.269.png\" alt=\"IATI logo\" width=\"269\" height=\"70\"/></a>\n\n\n\n","ctembed":"<div style=\"width:260px; margin:0 auto; font-size:16px; color:#444; padding-bottom:10px;\">Embed this on your website!</div>\n<div style=\"width:198px; height:70px; margin:0 auto; border:1px solid #444; padding:20px 30px; color:#ccc; font-size:14px; resize:both;\noverflow:auto; background-color:rgb(255, 255, 255);\">HTML embed code will be placed here for copy and pasting on to your website.</div>\n\n\n\n","ctfind":"<div class=\"footer\">\n<div style=\"width:960px; margin:0 auto;\">\n<div style=\"display:inline-block; vertical-align:top; width:520px; font-size:28px; padding-right:20px;\">Find out what's going on where you live</div><div style=\"display:inline-block; vertical-align:top; width:340px; height:35px; background-color:#F7EA61; border-bottom:3px solid #C7B740; font-size:28px; color:#fff;\">eg. United Kingdom</div><a href=# style=\"display:inline-block; vertical-align:top; width:35px; height:35px; padding-left:35px;\"><img src=\"/art/find.png\" alt=\"Find\" width=\"35\" height=\"35\" /></a>\n</div>\n</div>\n\n","footer":"<div class=\"footwrap\">\n\t<div class=\"footcon\">\n\t\t<a href=\"http://www.aidtransparency.net/\" target=\"_blank\" title=\"International Aid Transparency Initiative (IATI)\" class=\"copyright\">© 2014 International Aid Transparency Initiative (IATI)</span>\n\t</div>\n</div>\n\n\n","css":"html\t\t\t\t{background:url('{background_image}') no-repeat bottom fixed; background-size:cover; overflow:hidden; overflow-y: scroll;}\ntable.donors\t\t\t{width:960px; border-collapse:collapse;}\ntable.donors td\t\t{padding:10px 20px; vertical-align:top; border-bottom:1px solid #ccc;}\n\ntable.sectors\t\t\t{width:960px; border-collapse:collapse;}\ntable.sectors td\t\t{padding:10px 20px; vertical-align:top; border-bottom:1px solid #ccc;}\n\ntable.districts\t\t\t{width:960px; border-collapse:collapse;}\ntable.districts td\t\t{padding:10px 20px; vertical-align:top; border-bottom:1px solid #ccc;}\n"};