(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{105:function(t,e,n){},106:function(t,e,n){},114:function(t,e){},116:function(t,e){},126:function(t,e,n){},128:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(11),r=n.n(a),i=(n(105),n(76),n(21)),o=n(183),l=n(184),j=n(176),b=n(185),d=n(181),h=n(182),u=(n(106),n(62)),x=n(191),O=n(180),p=n(178),m=n(179),v=n(177),f=n(192),g=n(189),C=n(193),S=n(2);function y(t){var e=Object(c.useState)(t.starting_value),n=Object(i.a)(e,2),s=n[0],a=n[1];return Object(S.jsx)("textarea",{type:"text",name:"user_prompt",value:s,fullWidth:!0,onChange:function(e){e.target.value.startsWith(t.starting_value)&&(a(e.target.value),t.onValueChange(e))}})}function P(t){var e=s.a.useState(t.value),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(C.a,{id:"demo-simple-select-label",children:"Classe"}),Object(S.jsxs)(g.a,{labelId:"SCP-Class",id:"scpClassSelect",value:c,onChange:function(e){a(e.target.value),t.onClassChange(e)},children:[Object(S.jsx)(f.a,{value:0,children:"Safe"}),Object(S.jsx)(f.a,{value:1,children:"Euclide"}),Object(S.jsx)(f.a,{value:2,children:"Keter"}),Object(S.jsx)(f.a,{value:3,children:"Thomiel"})]})]})}function w(){var t=s.a.useState(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],a=s.a.useState(""),r=Object(i.a)(a,2),o=r[0],l=r[1],b=s.a.useState(0),d=Object(i.a)(b,2),h=d[0],u=d[1],f=function(){c(!1)};return Object(S.jsxs)("div",{children:[Object(S.jsx)(j.a,{variant:"contained",color:"primary",onClick:function(){c(!0)},fullWidth:!0,children:Object(S.jsx)("h3",{children:"Submit a prompt !"})}),Object(S.jsxs)(x.a,{fullWidth:!0,maxWidth:"sm",open:n,onClose:f,"aria-labelledby":"form-dialog-title",children:[Object(S.jsx)(v.a,{id:"form-dialog-title",children:"Submit your SCP idea !"}),Object(S.jsxs)(p.a,{children:[Object(S.jsx)(m.a,{children:"Describe your SCP :"}),Object(S.jsx)(y,{starting_value:"SCP 104 is ",onValueChange:function(t){l(t.target.value)}}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(P,{onClassChange:function(t){console.log(t.target.value),u(t.target.value)},value:h})]}),Object(S.jsxs)(O.a,{children:[Object(S.jsx)(j.a,{onClick:f,color:"primary",children:"Cancel"}),Object(S.jsx)(j.a,{onClick:function(){var t="https://thisscpdoesnotexist.pythonanywhere.com/add_prompt/?prompt="+o.substring(11)+"&class="+h.toString()+"&ip="+Math.floor(100*Math.random()).toString();fetch(t),console.log("fetched"),f()},color:"primary",children:"Submit"})]})]})]})}var k=Object(d.a)({root:{maxWidth:500},title:{fontSize:14},Card:{marginBottom:"-50%"}});function N(t){var e=k();e.root,t.scpClass;return Object(S.jsx)(h.a,{item:!0,xs:12,sm:6,md:3,children:Object(S.jsx)(o.a,{className:e.root,children:Object(S.jsxs)(l.a,{children:[Object(S.jsx)(u.a,{bg:"Keter"==t.scpClass?"danger":"Euclid"==t.scpClass?"warning":"success",children:t.scpClass}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),t.prompt,Object(S.jsx)(b.a,{children:Object(S.jsxs)(j.a,{size:"small",onClick:function(){return e=t.idx,void fetch("https://thisscpdoesnotexist.pythonanywhere.com/vote/?n="+e.toString()+"&ip="+Math.floor(100*Math.random()).toString());var e},children:[Object(S.jsx)("strong",{children:"Votes !"})," (",t.votes,")"]})})]})})})}function E(t){var e=t.pollingItems.sort((function(t,e){return e.votes-t.votes})).map((function(t){return Object(S.jsx)(N,{prompt:t.prompt,scpClass:t.scpClass,votes:t.votes,idx:t.index})}));return Object(S.jsx)("div",{className:"poll-list",children:Object(S.jsx)(h.a,{container:!0,spacing:3,children:e})})}var _=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/get_poll/").then((function(t){return t.json()})).then((function(t){s(t.poll)}))}),[]),Object(S.jsxs)("div",{className:"CurrentPoll",children:[Object(S.jsx)("strong",{children:"Current Poll :"}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(E,{pollingItems:n}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(w,{className:"openDialogBtn"})]})},I=n(70),M=n.n(I),B=n(85),D=n(188),F=n(86);function T(t){return fetch("https://raw.githubusercontent.com/thisscpdoesnotexist/thisscpdoesnotexist.github.io/main/raw_scp/"+t).then((function(t){return t.text()})).then((function(t){return t}))}function W(t){return void 0===t.data?"Loading...":(console.log(t.data),t.data.map((function(t,e){return Object(S.jsxs)(D.a.Item,{eventKey:e.toString(),children:[Object(S.jsxs)(D.a.Header,{children:[Object(S.jsxs)("strong",{children:[t.prompt," \xa0"]}),Object(S.jsx)(u.a,{bg:"Keter"===t.class?"danger":"Euclid"===t.class?"warning":"success",children:t.class})]}),Object(S.jsx)(D.a.Body,{children:t.desc})]})})))}var L=function(){var t=Object(c.useState)([]),e=Object(i.a)(t,2),n=e[0],s=e[1];return Object(c.useEffect)(function(){var t=Object(B.a)(M.a.mark((function t(){var e,n,c,a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T("scp_list.csv");case 2:e=t.sent,3!=(n=Object(F.a)(e)).data[n.data.length-1].length&&n.data.pop(),c=[],a=0;case 7:if(!(a<n.data.length)){t.next=19;break}return t.t0=c,t.t1=n.data[a][0],t.t2=n.data[a][1],t.next=13,T(n.data[a][2]);case 13:t.t3=t.sent,t.t4={prompt:t.t1,class:t.t2,desc:t.t3},t.t0.push.call(t.t0,t.t4);case 16:a++,t.next=7;break;case 19:console.log("there it is"),console.log(c),s(c);case 22:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),[]),Object(S.jsxs)("div",{className:"ReadRawGithub",children:[Object(S.jsx)("h2",{children:" List of Past SCPs"}),Object(S.jsx)(D.a,{children:Object(S.jsx)(W,{data:n})})]})},A=(n(125),n(126),n(24)),G=n(13);Object(G.f)((function(t){return Object(S.jsx)("div",{className:"navigation",children:Object(S.jsx)("nav",{class:"navbar navbar-expand navbar-dark bg-dark",children:Object(S.jsxs)("div",{class:"container",children:[Object(S.jsx)(A.b,{class:"navbar-brand",to:"/",children:"This SCP Does Not Exist !"}),Object(S.jsx)("div",{children:Object(S.jsxs)("ul",{class:"navbar-nav ml-auto",children:[Object(S.jsx)("li",{class:"nav-item  ".concat("/"===t.location.pathname?"active":""),children:Object(S.jsx)(A.b,{class:"nav-link",to:"/",children:"Poll"})}),Object(S.jsx)("li",{class:"nav-item  ".concat("/list"===t.location.pathname?"active":""),children:Object(S.jsx)(A.b,{class:"nav-link",to:"/list",children:"List SCPs"})}),Object(S.jsx)("li",{class:"nav-item  ".concat("/about"===t.location.pathname?"active":""),children:Object(S.jsx)(A.b,{class:"nav-link",to:"/about",children:"About"})})]})})]})})})}));var K=function(){return Object(S.jsx)("div",{className:"App",children:"Made using the power of GPT-3"})};var R=function(){return Object(S.jsx)("div",{className:"Footer navbar fixed-bottom",children:"Made by Retronyme and Filouface"})},V=n(186),z=n(187),J=n(93),H=n(90),q=Object(d.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));function Q(){var t=Object(c.useState)(0),e=Object(i.a)(t,2),n=e[0],s=e[1];Object(c.useEffect)((function(){fetch("https://thisscpdoesnotexist.pythonanywhere.com/next_time/").then((function(t){return t.text()})).then((function(t){s(1e3*parseInt(t))}))}),[]);var a=q();return Object(S.jsx)("div",{className:a.root,children:Object(S.jsx)(V.a,{position:"static",children:Object(S.jsx)(z.a,{children:Object(S.jsxs)(h.a,{container:!0,spacing:3,children:[Object(S.jsx)(h.a,{item:!0,xs:12,sm:3,children:Object(S.jsx)(j.a,{color:"inherit",children:Object(S.jsx)(J.a,{variant:"h5",className:a.title,children:"This SCP Does Not Exist"})})}),Object(S.jsx)(h.a,{item:!0,sm:5,children:Object(S.jsx)("h1",{children:Object(S.jsx)(H.a,{date:new Date(n)})})}),Object(S.jsx)(h.a,{item:!0,xs:12,sm:1,children:Object(S.jsx)(A.b,{to:"/",children:Object(S.jsx)(j.a,{color:"inherit",children:Object(S.jsx)("strong",{children:"Poll"})})})}),Object(S.jsx)(h.a,{item:!0,xs:12,sm:1,children:Object(S.jsx)(A.b,{to:"/list",children:Object(S.jsx)(j.a,{color:"inherit",children:Object(S.jsx)("strong",{children:"Past SCPs"})})})}),Object(S.jsx)(h.a,{item:!0,xs:12,sm:1,children:Object(S.jsx)(A.b,{to:"/about",children:Object(S.jsx)(j.a,{color:"inherit",children:Object(S.jsx)("strong",{children:"About"})})})})]})})})})}var U=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(A.a,{children:[Object(S.jsx)(Q,{}),Object(S.jsx)("br",{}),Object(S.jsxs)(G.c,{children:[Object(S.jsx)(G.a,{path:"/",exact:!0,component:_}),Object(S.jsx)(G.a,{path:"/list",exact:!0,component:L}),Object(S.jsx)(G.a,{path:"/about",exact:!0,component:K})]}),Object(S.jsx)(R,{})]})})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,194)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),a(t),r(t)}))};r.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(U,{})}),document.getElementById("root")),X()},76:function(t,e,n){}},[[128,1,2]]]);
//# sourceMappingURL=main.f99fea04.chunk.js.map