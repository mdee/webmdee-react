(this["webpackJsonpbernie-frontend"]=this["webpackJsonpbernie-frontend"]||[]).push([[0],{250:function(e,a,t){e.exports=t.p+"static/media/campaign-data.9cc1d394.gif"},251:function(e,a,t){e.exports=t.p+"static/media/reviewsage.e80803b4.gif"},252:function(e,a,t){e.exports=t.p+"static/media/recording.62d46780.gif"},294:function(e,a,t){e.exports=t(517)},299:function(e,a,t){},300:function(e,a,t){},517:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),o=t.n(l),i=(t(299),t(580)),c=t(159),s=t(122),m=(t(300),t(11)),d=t(51),u=t.n(d),h=t(557),p=t(562),g=t(596),f=t(589),E=t(598),b=t(573),w=t(591),y=t(570),v=t(599),k=t(567),x=t(575),j=t(568),I=t(576),S=t(569),_=t(577),C=t(572),O=t(571),A=t(578),D=t(579),T=t(600),R=t(581),B=t(582),N=t(583),P=t(584),G=t(585),M=t(586),$=t(587),z=t(592),Y=t(593),W=t(156),K=t.n(W),L=t(153),H=t(28),V=t(588),q=t(590),U=t(93),F=t(248),J=t.n(F),Q=t(21),X=t(594),Z=t(560),ee=t(561),ae=t(595),te=t(574),ne=X.a("%m/%d/%y"),re=function(){function e(e){var a=e.split("-");if(1===a.length){var t=a[0].split(" ");return"".concat(t[0]," $").concat(t[1])}return"$".concat(a[0],"-$").concat(a[1])}var a=Object(h.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},drawer:{width:250}}})),t=X.a("%Y-%m-%d"),l=t(new Date),o=["\u2264 $100","$100-$1k","$1k-$50k","$50k-$100k","> $100k"],d=["Image","Text","Video"],W=ae.a().domain(o).range(Z.a),F=ae.a().domain(d).range(ee.a),re=Object(n.useState)([]),le=Object(m.a)(re,2),oe=le[0],ie=le[1],ce=Object(n.useState)(""),se=Object(m.a)(ce,2),me=se[0],de=se[1],ue=Object(n.useState)(l),he=Object(m.a)(ue,2),pe=he[0],ge=he[1],fe=Object(n.useState)(l),Ee=Object(m.a)(fe,2),be=Ee[0],we=Ee[1],ye=Object(n.useState)(""),ve=Object(m.a)(ye,2),ke=ve[0],xe=ve[1],je=Object(n.useState)(""),Ie=Object(m.a)(je,2),Se=Ie[0],_e=Ie[1],Ce=Object(n.useState)(!0),Oe=Object(m.a)(Ce,2),Ae=Oe[0],De=Oe[1],Te=Object(n.useState)(!1),Re=Object(m.a)(Te,2),Be=Re[0],Ne=Re[1],Pe=Object(n.useState)(!0),Ge=Object(m.a)(Pe,2),Me=Ge[0],$e=Ge[1],ze=Object(n.useState)(4),Ye=Object(m.a)(ze,2),We=Ye[0],Ke=Ye[1],Le=Object(n.useState)(""),He=Object(m.a)(Le,2),Ve=He[0],qe=He[1],Ue=Object(n.useState)([]),Fe=Object(m.a)(Ue,2),Je=Fe[0],Qe=Fe[1],Xe=Object(n.useState)(0),Ze=Object(m.a)(Xe,2),ea=Ze[0],aa=Ze[1],ta=Object(n.useState)(!0),na=Object(m.a)(ta,2),ra=na[0],la=na[1],oa=Object(n.useState)(!0),ia=Object(m.a)(oa,2),ca=ia[0],sa=ia[1],ma=Object(n.useState)(!1),da=Object(m.a)(ma,2),ua=da[0],ha=da[1],pa=Object(n.useState)(!1),ga=Object(m.a)(pa,2),fa=ga[0],Ea=ga[1],ba=Object(n.useState)(!1),wa=Object(m.a)(ba,2),ya=wa[0],va=wa[1],ka=Object(n.useState)([]),xa=Object(m.a)(ka,2),ja=xa[0],Ia=xa[1],Sa=Object(n.useState)(null),_a=Object(m.a)(Sa,2),Ca=_a[0],Oa=_a[1],Aa=Object(n.useState)(!1),Da=Object(m.a)(Aa,2),Ta=Da[0],Ra=Da[1],Ba=Object(n.useState)(!0),Na=Object(m.a)(Ba,2),Pa=Na[0],Ga=Na[1],Ma=Object(n.useState)(!0),$a=Object(m.a)(Ma,2),za=$a[0],Ya=$a[1],Wa=function(e,a){"clickaway"!==a&&ha(!1)},Ka=Object(n.useState)(10),La=Object(m.a)(Ka,2),Ha=La[0],Va=La[1];var qa=Object(n.useCallback)((function(){var e="campaign_name=".concat(me,"&start_date=").concat(pe,"&end_date=").concat(be);return""!==Ve&&(e+="&ad_type=".concat(Ve)),e}),[me,pe,be,Ve]);function Ua(){Ya(!0);var a=qa();if(u.a.get("http://bernie-ads-backend.herokuapp.com/api/date_ads_metadata/?"+a).then((function(a){var t=a.data.map((function(a,t){var n={dateString:ne(new Date(a.date))};return a.spend_ranges.forEach((function(a){n[e(a.label)]=a.count})),a.impressions_ranges.forEach((function(e){n[e.label]=e.count})),a.ad_types.forEach((function(e){n[e.label]=e.count})),n}));Ia(t),ha(!0),Ea(!1),Ya(!1)})),ra){var t=!0;u.a.get("http://bernie-ads-backend.herokuapp.com/api/date_donations_metadata/?"+a).then((function(e){var a=e.data.map((function(e){return e.count>0&&(t=!1),{dateString:ne(new Date(e.date)),donations:e.count}}));Oa(a),Ga(t)}))}ca&&u.a.get("http://bernie-ads-backend.herokuapp.com/api/ads/?"+a).then((function(a){var t=a.data;t.forEach((function(a){a.spend_range=e(a.spend_range),a.start_date=ne(new Date(a.start_date)),a.end_date=ne(new Date(a.end_date))})),Qe(t)}))}Object(n.useEffect)((function(){var a="?month_delta=".concat(2);Promise.allSettled([u.a.get("http://bernie-ads-backend.herokuapp.com/api/campaigns/"),u.a.get("http://bernie-ads-backend.herokuapp.com/api/date_extent/"+a)]).then((function(a){var t=a[0].value.data,n=a[1].value.data;ie(t),de("BERNIE 2020"),xe(n.min_date),_e(n.max_date),we(n.max_date),ge(n.start_date);var r="campaign_name=".concat("BERNIE 2020","&start_date=").concat(n.start_date,"&end_date=").concat(n.max_date);u.a.get("http://bernie-ads-backend.herokuapp.com/api/date_ads_metadata/?"+r).then((function(a){var t=a.data.map((function(a,t){var n={dateString:ne(new Date(a.date))};return a.spend_ranges.forEach((function(a){n[e(a.label)]=a.count})),a.impressions_ranges.forEach((function(e){n[e.label]=e.count})),a.ad_types.forEach((function(e){n[e.label]=e.count})),n}));Ia(t),ha(!0),Ea(!1),Ya(!1)}));var l=!0;u.a.get("http://bernie-ads-backend.herokuapp.com/api/date_donations_metadata/?"+r).then((function(e){var a=e.data.map((function(e){return e.count&&(l=!1),{dateString:ne(new Date(e.date)),donations:e.count}}));Ga(l),Oa(a)})),u.a.get("http://bernie-ads-backend.herokuapp.com/api/ads/?"+r).then((function(a){var t=a.data;t.forEach((function(a){a.spend_range=e(a.spend_range),a.start_date=ne(new Date(a.start_date)),a.end_date=ne(new Date(a.end_date))})),Qe(t)}))}))}),[]);var Fa=function(){return function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&Ea(!fa)}},Ja=a();function Qa(){va(!1)}return r.a.createElement("div",{className:"dashboard"},r.a.createElement(_.a,{position:"static"},r.a.createElement(C.a,null,r.a.createElement(O.a,{edge:"start",className:Ja.menuButton,color:"inherit","aria-label":"menu",onClick:Fa(),onKeyDown:Fa()},r.a.createElement(K.a,null)),r.a.createElement(s.a,{variant:"h6"},r.a.createElement(A.a,{component:U.b,to:"/",color:"inherit"},"WebMDee.com")))),za?r.a.createElement(D.a,null):"",r.a.createElement(T.a,{open:fa,onClose:Fa()},r.a.createElement("div",{className:Ja.drawer},r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(g.a,{id:"presidential-campaign"},"Presidential Campaign"),r.a.createElement(f.a,{labelId:"presidential-campaign",value:me,disabled:!oe.length,onClick:function(e){return de(e.target.value)},onBlur:function(e){return de(e.target.value)}},r.a.createElement(E.a,null),oe.map((function(e){return r.a.createElement(E.a,{key:e.name,value:e.name},e.name)})))),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(H.a,{utils:L.a},r.a.createElement(V.a,{disableToolbar:!0,variant:"inline",format:"MM/DD/YY",label:"Start Date",id:"start-date-picker-inline",margin:"normal",value:pe,onChange:function(e){ge(t(e._d))},minDate:ke,maxDate:Se,KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(H.a,{utils:L.a},r.a.createElement(V.a,{disableToolbar:!0,variant:"inline",format:"MM/DD/YY",margin:"normal",id:"end-date-picker-inline",label:"End Date",value:be,onChange:function(e){we(t(e._d))},minDate:ke,maxDate:Se,KeyboardButtonProps:{"aria-label":"change date"}}))),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(g.a,{id:"ad-type"},"Ad Type"),r.a.createElement(f.a,{labelId:"ad-type",value:Ve,disabled:!d.length,onClick:function(e){return qe(e.target.value)},onChange:function(e){return qe(e.target.value)},onBlur:function(e){return qe(e.target.value)}},r.a.createElement(E.a,{value:""}),d.map((function(e){return r.a.createElement(E.a,{key:e,value:e},e)})))),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(b.a,{control:r.a.createElement(w.a,{checked:ra,onClick:function(e){return la(e.target.checked)},onChange:function(e){return la(e.target.checked)},onBlur:function(e){return la(e.target.checked)},color:"primary"}),label:"Retrieve Individual Donations"})),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(b.a,{control:r.a.createElement(w.a,{checked:ca,onClick:function(e){return sa(e.target.checked)},onChange:function(e){return sa(e.target.checked)},onBlur:function(e){return sa(e.target.checked)},color:"primary"}),label:"Retrieve Ad Details"})),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(y.a,{variant:"contained",color:"primary",onClick:Ua,disabled:!oe.length},"Submit")),r.a.createElement(te.a,null),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(b.a,{control:r.a.createElement(w.a,{checked:Ae,onClick:function(e){return De(e.target.checked)},onChange:function(e){return De(e.target.checked)},onBlur:function(e){return De(e.target.checked)},color:"primary"}),label:"Show Ad Spend"})),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(b.a,{control:r.a.createElement(w.a,{checked:Me,onClick:function(e){return $e(e.target.checked)},onChange:function(e){return $e(e.target.checked)},onBlur:function(e){return $e(e.target.checked)},color:"primary"}),label:"Show Ad Types"})),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(b.a,{control:r.a.createElement(w.a,{checked:Be,onClick:function(e){return Ne(e.target.checked)},onChange:function(e){return Ne(e.target.checked)},onBlur:function(e){return Ne(e.target.checked)},color:"primary"}),label:"Show Ad Impressions"})),r.a.createElement(p.a,{className:Ja.formControl},r.a.createElement(v.a,{id:"chart-bar-width",label:"Chart Bar Width",type:"number",error:Ta,value:We,onChange:function(e){var a;(a=+e.target.value)<1||a>13?Ra(!0):(Ra(!1),Ke(a))},helperText:"Bar width must be in the range [1, 13]",InputLabelProps:{shrink:!0}})))),r.a.createElement(k.a,{fullWidth:!0,maxWidth:"sm",open:ya,onClose:Qa,"aria-labelledby":"help-dialog-title"},r.a.createElement(x.a,{id:"help-dialog-title"},"Ads + Donation Data Tool"),r.a.createElement(j.a,null,r.a.createElement(I.a,null,"This tool allows you to visualize publicly available data for several 2020 presidential candidates.",r.a.createElement("p",null,"You can see how many online ad campaigns each candidate has run on Google over the past several months, each one's price range, impressions target, and ad type (such as text or video)."),"FEC data for individual donations can also be retrieved through Q3 2019. Simply click ",r.a.createElement(K.a,null)," up top to begin exploring the data!")),r.a.createElement(S.a,null,r.a.createElement(y.a,{onClick:Qa,color:"primary"},"Close"))),r.a.createElement(i.a,{container:!0},r.a.createElement(i.a,{item:!0,xs:2}),r.a.createElement(i.a,{item:!0,xs:8},r.a.createElement("div",{style:{textAlign:"center",margin:"10px 0 10px 0"}},r.a.createElement(s.a,{variant:"h6",className:Ja.title},me," Ads + Donation Data Tool"))),r.a.createElement(i.a,{item:!0,xs:2},r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(O.a,{color:"primary",onClick:function(){va(!0)}},r.a.createElement(J.a,null)))),r.a.createElement(i.a,{item:!0,xs:12,sm:6},ja.length?r.a.createElement(Q.h,{width:"100%",aspect:1.5},r.a.createElement(Q.e,{data:ja,margin:{top:20,right:30,left:20,bottom:5}},r.a.createElement(Q.d,{strokeDasharray:"3 3"}),r.a.createElement(Q.i,null),r.a.createElement(Q.g,null),r.a.createElement(Q.j,{dataKey:"dateString",type:"category"}),r.a.createElement(Q.k,{type:"number"},r.a.createElement(Q.f,{value:"Number Of Ad Campaigns",position:"insideLeft",angle:-90,style:{textAnchor:"middle"}})),Me?d.map((function(e){return r.a.createElement(Q.a,{angle:45,textAnchor:"end",dataKey:e,stackId:"ad-type",type:"monotone",key:e,stroke:F(e),fill:F(e)})})):"",Ae?o.map((function(e){return r.a.createElement(Q.b,{dataKey:e,stackId:"spend",key:e,stroke:"lightGray",fill:W(e),barSize:We})})):"",Be?["\u2264 10k","100k-1M","10k-100k","1M-10M","> 10M"].map((function(e){return r.a.createElement(Q.b,{dataKey:e,stackId:"impressions",key:e,stroke:"lightGray",fill:W(e),barSize:We})})):"")):r.a.createElement("div",null,r.a.createElement(q.a,{severity:"info"},'Click "Submit" in order to retrieve Google Ads data for the ',me," campaign."))),r.a.createElement(i.a,{item:!0,xs:12,sm:6},null!==Ca&&ra?ra&&Pa?r.a.createElement(q.a,{severity:"info"},"No data for individual donations to the ",me," campaign from ",ne(new Date(pe))," - ",ne(new Date(be)),"."):r.a.createElement(Q.h,{width:"100%",aspect:1.5},r.a.createElement(Q.c,{data:Ca,margin:{top:20,right:30,left:20,bottom:5},barSize:We},r.a.createElement(Q.d,{strokeDasharray:"3 3"}),r.a.createElement(Q.i,null),r.a.createElement(Q.g,null),r.a.createElement(Q.j,{dataKey:"dateString",type:"category"}),r.a.createElement(Q.k,{type:"number"},r.a.createElement(Q.f,{value:"Number Of Donations",position:"insideLeft",angle:-90,style:{textAnchor:"middle"}})),r.a.createElement(Q.b,{dataKey:"donations",stroke:"lightGray",fill:"steelblue"}))):r.a.createElement("div",null,r.a.createElement(q.a,{severity:"info"},'Check "Retrieve Individual Donations" in order to retrieve FEC donation data from individuals for the ',me," campaign."))),r.a.createElement(i.a,{item:!0,xs:12,sm:12,style:{marginTop:"10px"}},Je.length&&ca?r.a.createElement(R.a,{component:c.a},r.a.createElement(B.a,{className:Ja.table,size:"small","aria-label":"simple table"},r.a.createElement(N.a,null,r.a.createElement(P.a,null,r.a.createElement(G.a,null,"Start Date"),r.a.createElement(G.a,null,"End Date"),r.a.createElement(G.a,null,"Spend Range"),r.a.createElement(G.a,null,"Impressions Range"),r.a.createElement(G.a,null,"Ad Type"))),r.a.createElement(M.a,null,Je.slice(ea*Ha,ea*Ha+Ha).map((function(e){return r.a.createElement(P.a,{key:e.id},r.a.createElement(G.a,{component:"th",scope:"row"},e.start_date),r.a.createElement(G.a,null,e.end_date),r.a.createElement(G.a,null,e.spend_range),r.a.createElement(G.a,null,e.impressions_range),r.a.createElement(G.a,null,r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.ad_type)))}))),r.a.createElement($.a,null,r.a.createElement(P.a,null,r.a.createElement(z.a,{rowsPerPageOptions:[5,10,25,50],rowsPerPage:Ha,count:Je.length,page:ea,onChangePage:function(e,a){aa(a)},onChangeRowsPerPage:function(e){Va(parseInt(e.target.value,10)),aa(0)}}))))):r.a.createElement(q.a,{severity:"info"},'Check "Retrieve Ad Details" to display ad details here.')),r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement("div",{style:{margin:"10px 0 10px 0",textAlign:"center"}},"Ad data is from Google's ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://transparencyreport.google.com/political-ads/region/US"},"Transparency Report"),", individual donation data is from ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.fec.gov/data/browse-data/?tab=bulk-data"},"fec.gov")))),r.a.createElement(Y.a,{open:ua,autoHideDuration:6e3,onClose:Wa},r.a.createElement(q.a,{onClose:Wa,severity:"success"},ra?r.a.createElement("div",null,"Retrieved ad campaign and individual donation data for ",me," from ",ne(new Date(pe))," - ",ne(new Date(be))):r.a.createElement("div",null,"Retrieved ad campaign data for ",me," from ",ne(new Date(pe))," - ",ne(new Date(be))))))},le=t(57),oe=t(249),ie=t(250),ce=t.n(ie),se=t(251),me=t.n(se),de=t(252),ue=t.n(de),he=function(){return r.a.createElement("div",null,r.a.createElement(U.a,{basename:"/",hashType:"slash"},r.a.createElement(le.c,null,r.a.createElement(le.a,{path:"/campaign-data-app"},r.a.createElement(re,null)),r.a.createElement(le.a,{path:"/"},r.a.createElement(i.a,{container:!0,component:c.a,elevation:3,className:"webmdee-card"},r.a.createElement(i.a,{item:!0,xs:12},r.a.createElement("p",null,"Hello there!"),r.a.createElement("p",null,"My name's ",r.a.createElement("span",null,"Mark Dhillon"),", & I'm an engineer."),r.a.createElement("p",null,r.a.createElement("a",{href:"https://s3-us-west-1.amazonaws.com/webmdee/Mark+Dhillon's+CV+(2019).pdf"},"C.V."),", ",r.a.createElement("a",{href:"https://www.github.com/mdee"},"GitHub"),", & ",r.a.createElement("a",{href:"https://www.linkedin.com/in/webmdee"},"LinkedIn"),"."))),r.a.createElement(i.a,{container:!0,component:c.a,elevation:3,className:"webmdee-card"},r.a.createElement(i.a,{item:!0,xs:6,style:{textAlign:"left"}},r.a.createElement(s.a,{variant:"h5"},"Visualizing 2020 Campaign Data")),r.a.createElement(i.a,{item:!0,xs:6,style:{textAlign:"right"}},r.a.createElement(s.a,{variant:"h6"},"02/10/20")),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("p",null,"As a way to learn React and refamiliarize myself with Django, I made ",r.a.createElement(U.b,{to:"/campaign-data-app"},"this interactive tool"),"."),r.a.createElement("p",null,"It visualizes data from Google's ",r.a.createElement("a",{href:"https://transparencyreport.google.com/political-ads/region/US"},"Transparency Report on Political Advertising"),", and also data about invididual donations through Q3 2019 to candidates from ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.fec.gov/data/browse-data/?tab=bulk-data"},"fec.gov")),r.a.createElement("p",null,"Why did I do this? For starters, I have long been interested in designing interfaces, and building interactive data visualizations. I used to pretty much exclusively write web apps, but for the past ~5 years I've spent most of my time in embedded code land (alongside some Python & MATLAB)."),r.a.createElement("p",null,"In fact, back when I was keeping up with web apps, there was a spirited debate about which framework to use: Angular, Ember, or React. At the time, I chose Ember."),r.a.createElement("p",null,"I think it's safe to say that React won ",r.a.createElement("span",{role:"img","aria-label":"haha-emoji"},"\ud83d\ude02"),"."),r.a.createElement("p",null,"So, this app came out of a desire to learn something new (React) and play around with some interface design and data visualization (which I am always game for). The data required a bit of preprocessing, but it was a fun challenge that gave me some time with the following:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.djangoproject.com/"},"Django")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.django-rest-framework.org/"},"Django REST Framework")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://recharts.org/"},"Recharts")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://reactjs.org/"},"React")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://material-ui.com/"},"Material UI")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://d3js.org/"},"d3")," (scale, scale-chromatic, time, time-format)"),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.postgresql.org/"},"Postgre SQL")))),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:ce.a,style:{display:"block",maxWidth:"95%",height:"auto",margin:"0 auto"},alt:"Recording of campaign data app interaction"}))),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("div",null,"The tool allows you to explore how many Google ad campaigns each of the 6 major Democratic candidates have been running this election cycle. Each ad has the following attributes:"),r.a.createElement("ul",null,r.a.createElement("li",null,"A spend range (less than $100, $100 - $1000, etc.)"),r.a.createElement("li",null,"An impressions range (10K, 1M, etc.)"),r.a.createElement("li",null,"A date range during which it was served"),r.a.createElement("li",null,"The type of ad it was (text, image, video)")),r.a.createElement("p",null,"The use case that I had in mind was for somebody who is working on one of these campaigns to be able to compare ad strategies to competitors. For funsies, I also added in the ability to see individual donations as reported by the FEC. It's interesting to look at ad surges as well as how each campaign combines the different kinds of ads. Here's one anecdote:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Joe Biden announced his campaign for president on 4/25/19. The data shows he immediately began running around ~40 ad campaigns concurrently in the early going, almost all of them inexpensive text ads. As the months continued, that number halved until it dropped to 0 on 10/21/19"),r.a.createElement("li",null,"On 10/24/19, he reversed his earlier position and ",r.a.createElement("a",{href:"https://www.cnn.com/2019/10/23/politics/joe-biden-fundraising-super-pac/index.html"},"signaled an openness")," to accepting Super PAC support"),r.a.createElement("li",null,"On 10/25/19, a Super PAC ",r.a.createElement("a",{href:"https://www.cnn.com/2019/10/29/politics/joe-biden-ally-launches-super-pac/index.html"},"was formally launched")," to support him"),r.a.createElement("li",null,"On 11/07/19, 106(!) ads began running concurrently, all of them video. He wasn't kidding about using Super PAC dollars!")),r.a.createElement("p",null,"This was fun for me to build. The backend is deployed on a free Heroku tier, and the front end is served up via Github Pages. Here's the source code for the ",r.a.createElement("a",{href:"https://github.com/mdee/bernie_backend"},"backend")," & ",r.a.createElement("a",{href:"https://github.com/mdee/webmdee-react"},"frontend"),"."))),r.a.createElement(i.a,{container:!0,component:c.a,elevation:3,className:"webmdee-card"},r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(s.a,{variant:"h5"},"ReviewSage"))),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(s.a,{variant:"h6"},"03/04/15"))),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("p",null,r.a.createElement("b",null,"TL;DR")," Raised $$ for app after graduating, ",r.a.createElement("strike",null,"here's a demo"),"."),r.a.createElement("div",null,"In my final semester before completing a Computer Science Master's degree @ UW Madison, I took a course taught by Professors Remzi Arpaci-Dusseau and Paul Barford on Software Entrepreneurship. The purpose of the course was to examine processes and case studies to transform ideas into successful businesses, as well as to create a working prototype of an idea and present it at the end of the course.",r.a.createElement("br",null),"At the time, I had been focusing on mining information from text (through work with Professor Michael Gleicher) and trying to visualize the data with ",r.a.createElement("a",{href:"http://d3js.org/"},"D3"),". That work, combined with the class project lead me to create ReviewSage.",r.a.createElement("br",null),r.a.createElement("p",null,r.a.createElement("b",null,"ReviewSage was made to harness the wisdom trapped in Yelp reviews, quickly.")),"I worked on hard on the prototype, and my efforts were rewarded with a rare opportunity: Great Oaks Venture Capital was willing to provide me with some seed funding to develop ReviewSage into a business. You can play around with a representative version ",r.a.createElement("strike",null,"here"),", or watch the animation to get the gist.",r.a.createElement("br",null),"The ",r.a.createElement("strike",null,"live app")," demonstrates what ReviewSage was originally intended for: giving consumers quick answers about Yelp reviews. After submitting a URL, ReviewSage looks for commonly used phrases and shows you the spread of ratings when people use those phrases.")),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:me.a,style:{display:"block",maxWidth:"100%",height:"auto",margin:"0 auto"},alt:"Recording of ReviewSage app interaction"}))),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("div",null,r.a.createElement("p",null,"At the time, I was preparing to join a start-up somewhere in CA. Then I got a message from Professor Barford saying that I could start my own."),r.a.createElement("p",null,r.a.createElement("b",null,"Getting $$ to start a business around my idea was too tempting to pass up.")),"After incorporating the business, I decided to position it as a B2B app: businesses could use my software to keep up with their online presence. That seemed like a good idea at the time. In the end, it didn't work out. However, I'm very pleased with the experience I gained from taking on such a challenge. I spent 1.5 years chasing this dream, and I think I came out ahead.",r.a.createElement("p",null,"I was able to take a project that I cared about and raise seed funding to start a business. I received a lot of great guidance from my Professors, as well as Andy Boszhardt and John Philosophos from Great Oaks."),"I was able to hire an engineer to work with me, and his experience helped him secure a job at a premier start-up in Madison now. I was able to get the largest restaurant group in Madison to become a beta tester and eventually a paying customer, and also raised a subsequent round. ReviewSage even got some ",r.a.createElement("a",{href:"http://www.isthmus.com/isthmus/article.php?article=41117"},"local press"),".",r.a.createElement("p",null,"Things don't always work out the way you hope. But that's ok; life's too short to dwell on the past. The future? Now that's exciting.")))),r.a.createElement(i.a,{container:!0,component:c.a,elevation:3,className:"webmdee-card"},r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(s.a,{variant:"h5"},"Expense Logging"))),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(s.a,{variant:"h6"},"01/15/15"))),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("p",null,"I recently found out about ",r.a.createElement("a",{href:"http://interactjs.io/"},"interact.js")," and came away very impressed. You might even say that my ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=k4t8KisRznQ"},"mind was blown"),"."),r.a.createElement("div",null,"It's a fantastic Javascript libary which takes away ",r.a.createElement("span",{style:{textDecoration:"line-through"}},"a lot")," all of the pain for drag-and-drop, resizing, and multi-touch gestures (all with ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=7COUk5eh6jY"},"inertia"),") for browsers over IE8. That's huge!"),r.a.createElement("p",null,r.a.createElement("b",null,"In the endless debate over developing web vs native, ",r.a.createElement("a",{href:"http://interactjs.io/"},"interact.js")," is a panacea for web apps to support gestures and touch-screen interactions.")),r.a.createElement("div",null,"Most of the time when I see a new library spring up, I'll leave it open in a tab or maybe even bookmark it to check later (if it seems cool, of course). Not this time. This time I wanted to start using the new hotness right away. I had just come out of my first start-up (relatively) unscathed, and as a consequence of that experience I was regularly tracking my expenses to see where my money was going."),r.a.createElement("p",null,"Along the way, I kicked around ideas about what I'd like to see from an expense tracking app, and once I saw ",r.a.createElement("a",{href:"http://interactjs.io/"},"interact.js"),", I decided to make it happen. You can see a gif of the finished product on this page, or ",r.a.createElement("strike",null,"play around with it yourself"),".")),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:ue.a,style:{display:"block",maxWidth:"100%",height:"auto",margin:"0 auto"},alt:"Recording of expense management app interaction"}))),r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("p",null,"The app uses localStorage to keep track of what you've entered after you close it, and also supports generating an email of your data in CSV form. That means any data you enter ",r.a.createElement("b",null,"lives on your device alone"),", but supports exporting if you feel so inclined."),r.a.createElement("p",null,"I ended up using a few different gestures from interact.js:"),r.a.createElement("ul",{style:{fontWeight:300,margin:"10px"}},r.a.createElement("li",null,r.a.createElement("b",null,"Double-tapping")," to minimize a new expense so it can dragged to the proper account."),r.a.createElement("li",null,r.a.createElement("b",null,"Dragging")," a new expense into the proper account."),r.a.createElement("li",null,r.a.createElement("b",null,"Pressing and holding")," a new expense to toggle between showing a place to describe the transaction (e.g. 'Coffee')")),r.a.createElement("p",null,r.a.createElement("b",null,"I'd recommend interact.js for anybody wanting to integrate gestures for a web-app.")),r.a.createElement("p",null,"The examples and API documentation are all solid; it only took me a couple hours to get the gestures that I wanted working consistently."),r.a.createElement("p",null,"Since it's a relatively new library, there's not a whole lot of answers online if something doesn't work as expected. Sometimes though, it's nice not having Stack Overflow as a crutch."))),r.a.createElement(i.a,{container:!0,component:c.a,elevation:3,className:"webmdee-card"},r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(s.a,{variant:"h5"},"Gary Busey Clips + Twitter"))),r.a.createElement(i.a,{item:!0,xs:6},r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(s.a,{variant:"h6"},"01/13/15"))),r.a.createElement(i.a,{item:!0,xs:12,sm:6},r.a.createElement("p",null,"Gary Busey is an ",r.a.createElement("a",{href:"http://en.wikipedia.org/wiki/Gary_Busey#Awards_and_nominations"},"accomplished actor"),", and also seems to be a ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=TkYt0unokRM"},"funny guy"),". I haven't kept up with any of his later career, beyond knowing that he's done some reality TV shows and sells \"",r.a.createElement("a",{href:"http://garybusey.com/gary_busey_buseyisms.html"},"Busey-isms"),'" online.'),r.a.createElement("p",null,"I have, however, seen him act in quite a few movies, and I'm pretty sure that I enjoyed his roles. Point Break, Black Sheep\u2026those are all good in my book. His recent TV commericals for Amazon also make me laugh a lot."),r.a.createElement("p",null,"One day, I decided to look up clips of his movie roles on YouTube. It turns out that there are a lot of them, and the prevailing reason for that seems to be that the uploaders find these clips hilarious, weird, or both."),r.a.createElement("p",null,r.a.createElement("b",null,"So there are a bunch of goofy clips available on the internet, and Twitter is a thing so...yes, that's right. Let's make a Twitter bot to spread the Gospel of Gary (Busey).")),r.a.createElement("p",null,r.a.createElement("a",{href:"http://twitter.com/buseybot"},"BuseyBot")," is a Django app using ",r.a.createElement("a",{href:"https://github.com/tweepy/tweepy"},"tweepy"),". At different times of day, it looks for folks talking about Gary Busey and sends one of them a juicy Busey movie clip.")),r.a.createElement(i.a,{item:!0,xs:12,sm:6},r.a.createElement("div",null,r.a.createElement(oe.Timeline,{dataSource:{sourceType:"profile",screenName:"buseybot"},options:{username:"UniversalSerialBusey",height:"450"}}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[294,1,2]]]);
//# sourceMappingURL=main.10601e5e.chunk.js.map