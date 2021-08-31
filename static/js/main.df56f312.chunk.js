(this["webpackJsonpi-can-help-login"]=this["webpackJsonpi-can-help-login"]||[]).push([[0],{145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),r=n.n(i),o=n(31),s=n(11),l=n(87),j=n(88),d=n(98),b=n(97),O=n(40),m=n(25),u=n(179),h=n(148),x=n(181),g=n(195),p=n(194),f=n(183),v=n(177),y=n(2),N=Object(v.a)({root:{marginTop:"30px"},paper:{backgroundColor:"#c2ede4"},submitButton:{margin:"15px"},loginTitle:{fontSize:"30px",fontFamily:"Roboto"},innerPaper:{marginTop:"10px",marginBottom:"20px"}});var C=function(e){var t=e.Login,n=e.error,c=N(),i=Object(a.useState)({Email:"",Password:""}),r=Object(m.a)(i,2),o=r[0],s=r[1];return Object(y.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(o)},children:Object(y.jsx)(u.a,{maxWidth:"sm",className:c.root,children:Object(y.jsxs)(h.a,{className:c.paper,elevation:3,children:[Object(y.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:[Object(y.jsx)("h2",{className:c.loginTitle,children:"Login"}),Object(y.jsx)(g.a,{width:"70%",children:Object(y.jsxs)(h.a,{className:c.innerPaper,elevation:2,children:[Object(y.jsxs)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:4,children:[Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(p.a,{id:"outlined-basic",label:"Email",variant:"standard",type:"email",onChange:function(e){return s(Object(O.a)(Object(O.a)({},o),{},{Email:e.target.value}))},value:o.Email})}),Object(y.jsx)(x.a,{item:!0,children:Object(y.jsx)(p.a,{id:"outlined-basic",label:"Password",type:"password",variant:"standard",onChange:function(e){return s(Object(O.a)(Object(O.a)({},o),{},{Password:e.target.value}))},value:o.Password})})]}),""!==n?Object(y.jsx)("div",{className:"error",children:n}):""]})}),Object(y.jsx)(f.a,{className:c.submitButton,variant:"contained",type:"submit",value:"LOGIN",children:"LOGIN"})]}),Object(y.jsx)(x.a,{container:!0,direction:"column",alignItems:"center"})]})})})},S="https://ichntestserver.us1.gearhost.cloud",w=n.p+"static/media/logoNoBkg.b893081a.png",k=n(22),I=n.n(k),B=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).Login=function(t){I.a.post("".concat(S,"/User/Login"),t).then((function(t){console.log(t),localStorage.setItem("login",JSON.stringify({login:!0,token:t.data.token})),e.storeCollector(),window.location.replace("".concat(window.location.pathname,"/"))})).catch((function(t){console.log(t),e.setState({error:"Could not log in"})}))},e.state={Email:null,Password:null,login:!1,store:null,error:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.storeCollector()}},{key:"storeCollector",value:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.login&&this.setState({login:!0,store:e,error:""})}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)("img",{className:"login-logo",src:w,alt:"KyendR"}),Object(y.jsx)(C,{Login:this.Login,error:this.state.error})]})}}]),n}(c.a.Component),P=n(198),L=n(184),A=n(185),D=n(66),J=n.n(D),E=Object(v.a)({commitCard:{whiteSpace:"unset"},paper:{backgroundColor:"#ecf2d8"}});var z=function(e){var t=e.title,n=e.description,a=e.details,c=e.id,i=e.Uncommit,r=E(),o=r.commitCard;return r.paper,Object(y.jsxs)(x.a,{container:!0,item:!0,xs:8,sm:6,md:4,className:o,children:[Object(y.jsx)("button",{onClick:function(){return i(c)},children:"Uncommit"}),Object(y.jsxs)(P.a,{children:[Object(y.jsxs)(L.a,{expandIcon:Object(y.jsx)(J.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:[t," ",Object(y.jsx)("br",{}),Object(y.jsx)("br",{})," ",n]}),Object(y.jsx)(A.a,{children:a})]})]})},M=n(186);var F=function(){var e=Object(a.useState)({commitments:[]}),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),r=Object(m.a)(i,2),o=r[0],s=r[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=JSON.parse(localStorage.getItem("login"));I.a.get("".concat(S,"/Provider/GetMyCommitments"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){console.log(e.data),s(!1),c(e.data)})).catch((function(e){return console.log(e)}))},j=function(e){var t=JSON.parse(localStorage.getItem("login"));I.a.post("".concat(S,"/Provider/Commit"),{needId:e,count:0},{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){console.log(e),l(e.data)})).catch((function(e){return console.log(e)}))};return Object(y.jsx)("div",{children:o?Object(y.jsx)("div",{className:"loading",children:Object(y.jsx)(M.a,{})}):n.length>0?Object(y.jsx)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:n.map((function(e,t){return Object(y.jsx)(z,{id:e.id,title:e.title,description:e.description,details:e.details,Uncommit:j},e.id)}))}):Object(y.jsxs)("div",{className:"no-commitments",children:[Object(y.jsx)("h2",{children:"No Commitments yet."}),Object(y.jsx)("h3",{children:'View the "Fill a Need" page to find a new commitment.'})]})})},G=Object(v.a)({needCard:{whiteSpace:"unset"},paper:{backgroundColor:"#ecf2d8"}});var T=function(e){var t=e.title,n=e.description,a=e.details,c=e.id,i=e.Commit,r=G(),o=r.needCard;return r.paper,Object(y.jsxs)(x.a,{container:!0,item:!0,xs:8,sm:6,md:4,className:o,children:[Object(y.jsx)("button",{onClick:function(){return i(c)},children:"Commit"}),Object(y.jsxs)(P.a,{children:[Object(y.jsxs)(L.a,{expandIcon:Object(y.jsx)(J.a,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:[t," ",Object(y.jsx)("br",{}),Object(y.jsx)("br",{})," ",n]}),Object(y.jsx)(A.a,{children:a})]})]})};var U=function(){var e=Object(a.useState)({needs:[]}),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!0),r=Object(m.a)(i,2),o=r[0],s=r[1];Object(a.useEffect)((function(){l()}),[]);var l=function(){var e=JSON.parse(localStorage.getItem("login"));I.a.get("".concat(S,"/Provider/GetOpenOpportunities?daysOut=60"),{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){console.log(e),s(!1),c(e.data)})).catch((function(e){return console.log(e)}))},j=function(e){var t=JSON.parse(localStorage.getItem("login"));I.a.post("".concat(S,"/Provider/Commit"),{needId:e,count:1},{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(e){l(),console.log(e)})).catch((function(e){return console.log(e)}))};return Object(y.jsx)("div",{children:o?Object(y.jsx)("div",{className:"loading",children:Object(y.jsx)(M.a,{})}):n.length>0?Object(y.jsx)(x.a,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",spacing:2,children:n.map((function(e){return Object(y.jsx)(T,{id:e.id,title:e.title,description:e.description,details:e.details,Commit:j},e.id)}))}):Object(y.jsx)("h1",{children:"Nothing here"})})};var H=function(){return Object(y.jsx)("div",{children:"To Be Developed"})},R=Object(a.createContext)();function W(e){var t=e.children,n=Object(a.useState)(!1),c=Object(m.a)(n,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){if(!i){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&r(!0)}}),[]),Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(R.Provider,{value:{isAuthenticated:i,setIsAuthenticated:r},children:t})})}var K=n(182),V=n(187),q=n(188),Q=n(189),X=n(90),Y=n.n(X);var Z=function(e){var t=e.closeDrawer,n=Object(a.useContext)(R).setIsAuthenticated;return Object(y.jsx)(K.a,{children:Object(y.jsxs)(V.a,{button:!0,onClick:function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.token&&I.a.post("".concat(S,"/User/Logout"),{withCredentials:!0},{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){console.log(e),localStorage.removeItem("login"),t(),n(!1)})).catch((function(e){return console.log(e.response)}))},children:[Object(y.jsx)(q.a,{children:Object(y.jsx)(Y.a,{})}),Object(y.jsx)(Q.a,{primary:"Logout"})]})})};var $=function(){var e=Object(s.g)();return Object(y.jsx)("div",{className:"welcome",children:Object(y.jsxs)(x.a,{container:!0,direction:"column",alignItems:"center",spacing:2,children:[Object(y.jsx)(x.a,{item:!0,xs:8,children:Object(y.jsx)(o.b,{to:"/meetaneed",className:"/meetaneed"===e.pathname,style:{textDecoration:"none"},children:Object(y.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"Fill a Need"})})}),Object(y.jsx)(x.a,{item:!0,xs:8,children:Object(y.jsx)(o.b,{to:"/commitments",style:{textDecoration:"none"},className:"/commitments"===e.pathname,children:Object(y.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"My Commitments"})})}),Object(y.jsx)(x.a,{item:!0,xs:8,children:Object(y.jsx)(o.b,{to:"/history",className:"/history"===e.pathname,style:{textDecoration:"none"},children:Object(y.jsx)(f.a,{style:{minWidth:"170px"},variant:"contained",color:"primary",children:"My History"})})})]})})},_=n(58),ee=n(4),te=n(18),ne=n(197),ae=n(190),ce=n(191),ie=n(192),re=n(67),oe=n(193),se=n(149),le=n(91),je=n.n(le),de=n(92),be=n.n(de),Oe=n(93),me=n.n(Oe),ue=n(96),he=n.n(ue),xe=n(95),ge=n.n(xe),pe=n(94),fe=n.n(pe),ve=240,ye=Object(v.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#c2ede4"},appBarShift:{width:"calc(100% - ".concat(ve,"px)"),marginLeft:ve,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:ve,flexShrink:0},drawerPaper:{width:ve},drawerHeader:Object(O.a)(Object(O.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"space-between"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function Ne(){var e=ye(),t=Object(te.a)(),n=c.a.useState(!1),a=Object(m.a)(n,2),i=a[0],r=a[1],l=Object(s.g)(),j=function(){r(!1)};return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(ae.a,{}),Object(y.jsx)(ce.a,{position:"fixed",className:Object(ee.a)(e.appBar,Object(_.a)({},e.appBarShift,i)),children:Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{"aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:Object(ee.a)(e.menuButton,i&&e.hide),children:Object(y.jsx)(je.a,{})})})}),Object(y.jsxs)(ne.a,{className:e.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:e.drawerPaper},children:[Object(y.jsxs)("div",{className:e.drawerHeader,children:[Object(y.jsx)(re.a,{children:"KeyndR"}),Object(y.jsx)(se.a,{onClick:j,children:"ltr"===t.direction?Object(y.jsx)(be.a,{}):Object(y.jsx)(me.a,{})})]}),Object(y.jsx)(oe.a,{}),Object(y.jsx)(K.a,{children:Object(y.jsx)(o.b,{to:"/meetaneed",className:"/meetaneed"===l.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:j,children:Object(y.jsxs)(V.a,{button:!0,children:[Object(y.jsx)(q.a,{children:Object(y.jsx)(fe.a,{})}),Object(y.jsx)(Q.a,{primary:"Fill a Need"})]})})}),Object(y.jsx)(K.a,{children:Object(y.jsx)(o.b,{to:"/commitments",className:"/commitments"===l.pathname,style:{textDecoration:"none",color:"rgba(0, 0, 0, 0.87)"},onClick:j,children:Object(y.jsxs)(V.a,{button:!0,children:[Object(y.jsx)(q.a,{children:Object(y.jsx)(ge.a,{})}),Object(y.jsx)(Q.a,{primary:"My Commitments"})]})})}),Object(y.jsx)(K.a,{children:Object(y.jsxs)(V.a,{button:!0,children:[Object(y.jsx)(q.a,{children:Object(y.jsx)(he.a,{})}),Object(y.jsx)(Q.a,{primary:"My History"})]})}),Object(y.jsx)(Z,{closeDrawer:j})]})]})}var Ce=Object(v.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),backgroundColor:"#c2ede4"}}}));function Se(){var e=Ce();return Object(y.jsxs)("div",{className:e.root,children:[Object(y.jsx)(ae.a,{}),Object(y.jsx)(ce.a,{position:"fixed",className:Object(ee.a)(e.appBar),children:Object(y.jsx)(ie.a,{})})]})}var we=function(){var e=Object(a.useContext)(R).isAuthenticated;return Object(y.jsx)("div",{className:"nav",children:e?Object(y.jsx)(Ne,{}):Object(y.jsx)(Se,{})})};n(145);var ke=Object(s.h)((function(){var e=Object(a.useContext)(R),t=(e.userObject,e.isAuthenticated);return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(we,{}),Object(y.jsxs)(s.d,{children:[Object(y.jsx)(s.b,{exact:!0,path:"/",children:t?Object(y.jsx)($,{}):Object(y.jsx)(s.a,{to:"/login"})}),Object(y.jsx)(s.b,{exact:!0,path:"/login",children:t?Object(y.jsx)(s.a,{to:"/"}):Object(y.jsx)(B,{})}),Object(y.jsx)(s.b,{path:"/commitments",children:t?Object(y.jsx)(F,{}):Object(y.jsx)(s.a,{to:"/login"})}),Object(y.jsx)(s.b,{path:"/meetaneed",children:t?Object(y.jsx)(U,{}):Object(y.jsx)(s.a,{to:"/login"})}),Object(y.jsx)(s.b,{path:"/history",children:t?Object(y.jsx)(H,{}):Object(y.jsx)(s.a,{to:"/login"})})]})]})}));r.a.render(Object(y.jsx)(o.a,{children:Object(y.jsx)(W,{children:Object(y.jsx)(ke,{})})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.df56f312.chunk.js.map