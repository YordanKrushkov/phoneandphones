(this.webpackJsonpphoneandphones=this.webpackJsonpphoneandphones||[]).push([[0],{134:function(e,t,n){e.exports={loginWrapper:"Login_loginWrapper__2tdTW",formWrapper:"Login_formWrapper__tmehD"}},135:function(e,t,n){e.exports={wrapper:"OrderComponent_wrapper__lnPff",container:"OrderComponent_container__3Qr_D"}},136:function(e,t,n){e.exports={phonesWrapper:"Phones_phonesWrapper__pC6z_",phonesList:"Phones_phonesList__3JLmi"}},208:function(e,t,n){e.exports={footer:"Footer_footer__39ssh"}},21:function(e,t,n){e.exports={detailsWrapper:"PhoneDetails_detailsWrapper__3SzQM",container:"PhoneDetails_container__1R08E",imageWrapper:"PhoneDetails_imageWrapper__161ST",body:"PhoneDetails_body__5KSyi",infoWrapper:"PhoneDetails_infoWrapper__2FEZS",priceWrapper:"PhoneDetails_priceWrapper__2vOZo",buttons:"PhoneDetails_buttons__3_hMO"}},210:function(e,t,n){e.exports={headerWrapper:"WebHeader_headerWrapper__211oR"}},214:function(e,t,n){e.exports={aboutUsWrapper:"AboutUs_aboutUsWrapper__1smnv"}},215:function(e,t,n){e.exports={ring:"Loader_ring__IZJx7"}},219:function(e,t,n){e.exports={card:"SingleCard_card__1Dkf9"}},225:function(e,t,n){},226:function(e,t,n){},32:function(e,t,n){e.exports={heroBanner:"Home_heroBanner__ExwNe",heroTitle:"Home_heroTitle__3Tsmc",overlay:"Home_overlay__RYx0s",sectionTitle:"Home_sectionTitle__SWMbz",cardWrapper:"Home_cardWrapper__hp6OK",corousel:"Home_corousel__1SoUn",leftArrow:"Home_leftArrow__2hduX",rightArrow:"Home_rightArrow__1StcE"}},642:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),s=n(31),a=n.n(s),o=(n(225),n(4)),i=n(9),l=(n(226),n(208)),u=n.n(l),j=n(1),h=function(){return Object(j.jsxs)("div",{className:u.a.footer,children:[Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[" ",Object(j.jsx)(o.b,{to:"/",children:"Home"})]}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/phones",children:"Phones"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/about",children:"About us"})})]}),Object(j.jsx)("h2",{children:"Phone & Phones"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:"Partners"}),Object(j.jsx)("li",{children:"T&C"}),Object(j.jsx)("li",{children:"YordanKrushkov 2021\xae"})]})]})},d=n(6),p=n(210),b=n.n(p),O=function(e){var t=e.isAuthenticated,n=e.logout;return Object(j.jsxs)("div",{className:b.a.headerWrapper,children:[Object(j.jsx)("h2",{children:"Phone&Phones"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),t&&Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/add",children:"Add Phone"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/phones",children:"Phones"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/about",children:"About Us"})}),t?Object(j.jsx)("li",{onClick:n,children:Object(j.jsx)(o.b,{to:"/",children:"Logout"})}):Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/login",children:"Login"})})]})]})},m=n(70),x=n.n(m),f=n(211),_=function(e){var t=e.isAuthenticated,n=e.logout,c=Object(r.useState)(!1),s=Object(d.a)(c,2),a=s[0],i=s[1];return Object(j.jsxs)("div",{className:x.a.headerWrapper,children:[Object(j.jsx)("h2",{children:"Phone&Phones"}),Object(j.jsx)(f.a,{className:x.a.menu,onClick:function(){return i(!a)}}),Object(j.jsxs)("ul",{className:a?x.a.show:x.a.hidde,onClick:function(){return i(!a)},children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",children:"Home"})}),t&&Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/add",children:"Add Phone"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/phones",children:"Phones"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/about",children:"About Us"})}),t?Object(j.jsx)("li",{onClick:n,children:Object(j.jsx)(o.b,{to:"/",children:"Logout"})}):Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/login",children:"Login"})})]})]})},v=n(37),g=n(212),y=n(213),P=n(221),w=n(220),S=n(18),W=n.n(S),N=n(41),C=function(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null},k=function(){var e=Object(N.a)(W.a.mark((function e(){var t,n;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://phonesandphones.herokuapp.com/user/verify",{method:"POST",headers:{"Content-Type":"application/json",Authorization:C("x-auth-token")}});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=Object(r.createContext)(),D=function(e){Object(P.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(g.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={userID:"",isAuthenticated:null,userEmail:""},e.login=function(t){var n=t.email,r=t.id;e.setState({userID:r,isAuthenticated:!0,userEmail:n})},e.logout=function(){document.cookie="x-auth-token=",localStorage.removeItem("user"),e.setState({isAuthenticated:!1,userEmail:"",userID:""})},e}return Object(y.a)(n,[{key:"componentDidMount",value:function(){var e=this;k().then((function(t){t&&t.auth?e.setState({userID:t.user._id,isAuthenticated:!0,userEmail:t.user.email}):e.logout()})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(j.jsx)(A.Provider,{value:Object(v.a)(Object(v.a)({},this.state),{},{login:this.login,logout:this.logout}),children:this.props.children})}}]),n}(r.Component),E=function(){var e=Object(r.useState)(window.innerWidth>950),t=Object(d.a)(e,2),n=t[0],c=(t[1],Object(r.useContext)(A)),s=c.isAuthenticated,a=c.logout;return Object(r.useEffect)((function(){}),[n]),n?Object(j.jsx)(O,{isAuthenticated:s,logout:a}):Object(j.jsx)(_,{isAuthenticated:s,logout:a})},T=n(214),I=n.n(T),M=function(){return Object(j.jsxs)("div",{className:I.a.aboutUsWrapper,children:[Object(j.jsx)("h1",{children:"Phone & Phones"}),Object(j.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi atque modi ut quaerat neque. Vel voluptates in expedita. Cumque obcaecati fuga magni perferendis nihil iste modi accusamus, eius numquam, sed officia quasi nam amet aperiam nobis odio quidem asperiores optio, aliquam voluptatum error minima doloremque perspiciatis! Provident voluptatem dolor minus incidunt, ducimus minima in quod, unde sit tempora molestiae blanditiis iste! Harum similique hic, quidem fugiat explicabo exercitationem veniam eveniet suscipit repellendus et, aspernatur culpa dignissimos? Sed sint cupiditate labore."})]})},L=n(55),H=n(71),q=n.n(H),R=n(218),z=n(215),U=n.n(z),B=function(){return Object(j.jsx)("div",{"data-testid":"loader",className:U.a.ring})},F=(n(235),function(e){var t=Object(r.useState)({name:"",manufacturer:"",color:"",screen:"",processor:"",ram:"",memory:"",price:"",description:""}),n=Object(d.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)({}),o=Object(d.a)(a,2),l=o[0],u=o[1],h=Object(r.useState)(!1),p=Object(d.a)(h,2),b=p[0],O=p[1],m=Object(r.useState)(!1),x=Object(d.a)(m,2),f=x[0],_=x[1],g=Object(r.useState)(!1),y=Object(d.a)(g,2),P=y[0],w=y[1],S=Object(r.useRef)(null),W=Object(i.f)(),N=function(e){s(Object(v.a)(Object(v.a)({},c),{},Object(L.a)({},e.target.name,e.target.value)))};Object(r.useEffect)((function(){if(e.location.state){var t=e.location.state.id;fetch("https://phonesandphones.herokuapp.com/phones/".concat(t)).then((function(e){return e.json()})).then((function(e){s(e),_(!0)})).catch((function(e){return console.log(e)}))}return function(){}}),[c]),Object(r.useEffect)((function(){return b&&(w(!1),setTimeout((function(){O(!1)}),2e3)),function(){}}),[b]);return Object(j.jsxs)("div",{className:q.a.addPhoneWrapper,children:[P&&Object(j.jsx)(B,{}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w(!0);var n=function(e,t){var n=!1;if(Object.values(e).forEach((function(e){""!==e||(n=!0)})),t)return n;n=!0}(c,l),r=f?"/update":"/addphone";n?O(!0):(fetch("https://phonesandphones.herokuapp.com/phones".concat(r),{method:"POST",body:JSON.stringify({phone:c,image:l.img}),headers:{"Content-type":"application/json",Authorization:C("x-auth-token")}}).then((function(e){return e.json()})).then((function(e){console.log(e),s(e),w(!1)})).catch((function(e){return console.log(e)})),s({name:"",manufacturer:"",color:"",screen:"",processor:"",ram:"",memory:"",price:"",description:""}),u({}),f?W.push("/phone/".concat(e.location.state.id)):W.push("/"))},children:[f?Object(j.jsx)("h1",{children:"Edit Phone"}):Object(j.jsx)("h1",{children:"Add phone"}),!f&&Object(j.jsx)("p",{className:b?q.a.error:"",children:"All fields must be filled *"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{className:q.a.openImage,onClick:function(){S.current.click()},children:[Object(j.jsx)(R.a,{}),l.name||c.image||"Add Image"]}),Object(j.jsx)("input",{className:q.a.hiddenInput,type:"file",ref:S,onChange:function(e){!function(e,t,n){n(!0);var r=e.target.files[0],c=r.name,s=new FileReader;s.readAsDataURL(r),s.onloadend=function(){t({img:s.result,name:c}),n(!1)}}(e,u,w)}})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Model",onChange:N,value:c.name}),Object(j.jsx)("input",{type:"text",name:"manufacturer",placeholder:"Manufacturer",onChange:N,value:c.manufacturer})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",name:"color",placeholder:"Color",onChange:N,value:c.color}),Object(j.jsx)("input",{type:"text",name:"screen",placeholder:"Screen Size",onChange:N,value:c.screen})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",name:"processor",placeholder:"Processor",onChange:N,value:c.processor}),Object(j.jsx)("input",{type:"text",name:"ram",placeholder:"RAM",onChange:N,value:c.ram})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{type:"text",name:"memory",placeholder:"Memory",onChange:N,value:c.memory}),Object(j.jsx)("input",{type:"number",name:"price",placeholder:"Price",onChange:N,value:c.price})]}),Object(j.jsx)("textarea",{name:"description",id:"description",placeholder:"Type a description",onChange:N,value:c.description}),Object(j.jsx)("button",{children:"SUMBMIT"})]})]})}),J=n(32),K=n.n(J),G=function(e){var t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){return console.log(e)}))}),[c]),{phones:c}},Z=n(219),X=n.n(Z),Y=(n.p,n(90)),Q=function(e){var t=e.data,n=Object(i.f)();return Object(j.jsxs)("section",{className:X.a.card,children:[Object(j.jsx)("header",{children:Object(j.jsx)(Y.a,{publicId:t.image,id:"phonePicture",cloudName:"zltgrd"})}),Object(j.jsxs)("main",{children:[Object(j.jsx)("h2",{children:t.name}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Memory: ",Object(j.jsx)("b",{children:t.memory})]}),Object(j.jsxs)("p",{children:["Color: ",Object(j.jsx)("b",{children:t.color})]})]})]}),Object(j.jsxs)("footer",{children:[Object(j.jsxs)("h3",{children:["\xa3",t.price]}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),n.push("/phone/".concat(t._id))},children:"Details..."})]})]})},V=n(133),$=function(){var e=G("https://phonesandphones.herokuapp.com/phones").phones,t=Object(r.useRef)(null),n=Object(r.useState)(!1),c=Object(d.a)(n,2),s=c[0],a=c[1],o=function(e){t.current.scrollLeft+=e};return Object(r.useEffect)((function(){a(!0),e&&a(!1)}),[e]),Object(j.jsxs)("div",{className:K.a.homeWrapper,children:[Object(j.jsxs)("div",{className:K.a.heroBanner,children:[Object(j.jsx)("div",{className:K.a.overlay}),Object(j.jsxs)("div",{className:K.a.heroTitle,children:[Object(j.jsx)("h1",{children:"Find your new phone"}),Object(j.jsx)("h3",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, esse!"})]})]}),Object(j.jsxs)("div",{children:[s&&Object(j.jsx)(B,{}),Object(j.jsx)("h2",{className:K.a.sectionTitle,children:"New arrivals"}),Object(j.jsxs)("div",{className:K.a.corousel,children:[Object(j.jsx)(V.a,{className:K.a.leftArrow,onClick:function(){return o(-320)}}),Object(j.jsx)(V.b,{className:K.a.rightArrow,onClick:function(){return o(320)}}),Object(j.jsx)("div",{className:K.a.cardWrapper,ref:t,children:e&&e.map((function(e){return Object(j.jsx)(Q,{data:e},e._id)}))})]})]})]})},ee=n(134),te=n.n(ee),ne=function(){var e=Object(N.a)(W.a.mark((function e(t,n,r,c){var s,a,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 3:return s=e.sent,a=s.headers.get("Authorization"),document.cookie="x-auth-token=".concat(a),e.next=8,s.json();case 8:o=e.sent,console.log(o),o.email&&a&&o._id?r({email:o.email,id:o._id}):c(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),c(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n,r,c){return e.apply(this,arguments)}}(),re=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useContext)(A).login,a=Object(i.f)(),l=function(){var e=Object(N.a)(W.a.mark((function e(t){var n,r,o;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c(!0),n={email:t.target.email.value.trim(),password:t.target.password.value.trim()},r=function(e){s(e),localStorage.setItem("user",e.email),c(!1),a.push("/")},o=function(){c(!1),a.push("/login")},e.next=7,ne("https://phonesandphones.herokuapp.com/user/login",n,(function(e){return r(e)}),(function(e){return o()}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:te.a.loginWrapper,children:[n&&Object(j.jsx)(B,{}),Object(j.jsxs)("form",{onSubmit:l,children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsxs)("div",{className:te.a.formWrapper,children:[Object(j.jsx)("input",{type:"email",id:"email",placeholder:"Email address"}),Object(j.jsx)("input",{type:"password",id:"password",placeholder:"Password"}),Object(j.jsxs)("p",{children:["Don't have an account? ",Object(j.jsx)(o.b,{to:"/register",children:"Sign up"})]})]}),Object(j.jsx)("button",{children:"LogIn"})]})]})},ce=n(21),se=n.n(ce),ae=n(135),oe=n.n(ae),ie=function(e){var t=e.setOrder,n=e.userEmail;return Object(j.jsx)("div",{className:oe.a.wrapper,children:Object(j.jsxs)("div",{className:oe.a.container,children:[Object(j.jsx)("h1",{children:"Congratulations!"}),Object(j.jsxs)("h3",{children:["A memnber of our team will contact you shortly at: ",n]}),Object(j.jsx)("button",{onClick:function(){t(!1)},children:"Thank you!"})]})})},le=function(e){fetch("https://phonesandphones.herokuapp.com/phones/delete",{method:"POST",body:JSON.stringify({id:e}),headers:{Authorization:C("x-auth-token"),"Content-Type":"application/json"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))},ue=function(){var e=Object(i.f)(),t=Object(r.useContext)(A),n=t.isAuthenticated,c=t.userEmail,s=e.location.pathname.split("phone/")[1],a=Object(r.useState)(!1),o=Object(d.a)(a,2),l=o[0],u=o[1],h=G("https://phonesandphones.herokuapp.com/phones/".concat(s)).phones,p=Object(r.useState)(!1),b=Object(d.a)(p,2),O=b[0],m=b[1];Object(r.useEffect)((function(){m(!0),h&&m(!1)}),[h]);return Object(j.jsxs)("div",{className:se.a.detailsWrapper,children:[O&&Object(j.jsx)(B,{}),Object(j.jsxs)("div",{className:se.a.container,children:[Object(j.jsx)("div",{className:se.a.imageWrapper,children:Object(j.jsx)(Y.a,{publicId:h.image,id:"phonePicture",cloudName:"zltgrd"})}),Object(j.jsxs)("div",{className:se.a.body,children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:h.name}),Object(j.jsx)("h2",{children:h.manufacturer})]}),Object(j.jsxs)("main",{children:[Object(j.jsx)("h3",{children:"Specifications"}),Object(j.jsxs)("div",{className:se.a.infoWrapper,children:[Object(j.jsx)("h3",{children:"Color:"}),Object(j.jsx)("h3",{children:h.color})]}),Object(j.jsxs)("div",{className:se.a.infoWrapper,children:[Object(j.jsx)("h3",{children:"Screen Size:"}),Object(j.jsx)("h3",{children:h.screen})]}),Object(j.jsxs)("div",{className:se.a.infoWrapper,children:[Object(j.jsx)("h3",{children:"Processor:"}),Object(j.jsx)("h3",{children:h.processor})]}),Object(j.jsxs)("div",{className:se.a.infoWrapper,children:[Object(j.jsx)("h3",{children:"Memory:"}),Object(j.jsxs)("h3",{children:[h.memory,"GB"]})]}),Object(j.jsxs)("div",{className:se.a.infoWrapper,children:[Object(j.jsx)("h3",{children:"RAM:"}),Object(j.jsxs)("h3",{children:[h.ram,"GB"]})]}),Object(j.jsxs)("div",{className:se.a.priceWrapper,children:[Object(j.jsx)("h3",{children:"Price:"}),Object(j.jsxs)("h2",{children:["\xa3",h.price]})]})]})]})]}),Object(j.jsxs)("footer",{children:[Object(j.jsx)("h3",{children:"Description"}),Object(j.jsx)("p",{children:h.description}),Object(j.jsx)("button",{onClick:function(t){n?u(!0):e.push("/login")},children:"Order Now"}),n&&Object(j.jsxs)("div",{className:se.a.buttons,children:[Object(j.jsx)("button",{onClick:function(){e.push("/add",{id:h._id})},children:"Edit"}),Object(j.jsx)("button",{onClick:function(){le(h._id),e.push("/")},children:"Delete"})]})]}),l&&Object(j.jsx)(ie,{setOrder:u,userEmail:c})]})},je=n(136),he=n.n(je),de=function(){var e=G("https://phonesandphones.herokuapp.com/phones").phones,t=Object(r.useState)(!1),n=Object(d.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){s(!0),e&&s(!1)}),[e]),Object(j.jsxs)("div",{className:he.a.phonesWrapper,children:[c&&Object(j.jsx)(B,{}),Object(j.jsx)("div",{className:he.a.phonesList,children:e&&e.map((function(e){return Object(j.jsx)(Q,{data:e},e._id)}))})]})},pe=n(91),be=n.n(pe),Oe=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)({email:"",password:"",rePassword:""}),a=Object(d.a)(s,2),l=a[0],u=a[1],h=Object(r.useState)(""),p=Object(d.a)(h,2),b=p[0],O=p[1],m=Object(r.useContext)(A).login,x=Object(i.f)(),f=function(e){u(Object(v.a)(Object(v.a)({},l),{},Object(L.a)({},e.target.id,e.target.value)))},_=function(e){m(e),localStorage.setItem("user",e.email),x.push("/"),c(!1)},g=function(){var e=Object(N.a)(W.a.mark((function e(t){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c(!0),l.password===l.rePassword){e.next=8;break}return O("The passwords dont't match"),c(!1),e.abrupt("return");case 8:if(!(l.password<6)){e.next=14;break}return O("The password must be at least 6 characters"),c(!1),e.abrupt("return");case 14:return e.next=16,ne("https://phonesandphones.herokuapp.com/user/register",l,(function(e){return _(e)}),(function(e){return x.push("/register"),void c(!1)}));case 16:u({email:"",password:"",rePassword:""});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){b&&setTimeout((function(){O("")}),2e3)}),[b]),Object(j.jsxs)("div",{className:be.a.registerWrapper,children:[n&&Object(j.jsx)(B,{}),Object(j.jsxs)("form",{onSubmit:g,children:[Object(j.jsx)("h1",{children:"Register"}),Object(j.jsxs)("div",{className:be.a.formWrapper,children:[Object(j.jsx)("input",{type:"email",id:"email",placeholder:"Email address",value:l.email,onChange:f}),Object(j.jsx)("input",{type:"password",id:"password",placeholder:"Password",value:l.password,onChange:f}),Object(j.jsx)("input",{type:"password",id:"rePassword",placeholder:"Repeat Password",value:l.rePassword,onChange:f}),Object(j.jsxs)("p",{children:["You have an account already? ",Object(j.jsx)(o.b,{to:"/login",children:"Login"})]})]}),b&&Object(j.jsx)("p",{className:be.a.err,children:b}),Object(j.jsx)("button",{children:"Register"})]})]})};var me=function(){return Object(j.jsx)("div",{className:"App",basename:"/phoneandphones/",children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(E,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:$}),Object(j.jsx)(i.a,{path:"/about",component:M}),Object(j.jsx)(i.a,{path:"/login",component:re}),Object(j.jsx)(i.a,{path:"/register",component:Oe}),Object(j.jsx)(i.a,{path:"/add",component:F}),Object(j.jsx)(i.a,{path:"/phones",component:de}),Object(j.jsx)(i.a,{path:"/phone/:id",component:ue})]}),Object(j.jsx)(h,{})]})})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,643)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(D,{children:Object(j.jsx)(me,{})})}),document.getElementById("root")),xe()},70:function(e,t,n){e.exports={headerWrapper:"MobileHeader_headerWrapper__3obUG",menu:"MobileHeader_menu__hTDbM",show:"MobileHeader_show__3E0z2",hidde:"MobileHeader_hidde__feyII"}},71:function(e,t,n){e.exports={addPhoneWrapper:"AddPhone_addPhoneWrapper__1gDOf",openImage:"AddPhone_openImage__2hEcq",hiddenInput:"AddPhone_hiddenInput__K1mMp",error:"AddPhone_error__2qMdh"}},91:function(e,t,n){e.exports={registerWrapper:"Register_registerWrapper__3ZXWG",formWrapper:"Register_formWrapper__3XKcB",err:"Register_err__38Skv"}}},[[642,1,2]]]);
//# sourceMappingURL=main.a7aba514.chunk.js.map