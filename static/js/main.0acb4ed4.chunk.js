(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],[,,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/cherryblossom.b610ae10.png"},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),s=n.n(o),i=(n(15),n(8)),c=n(1),l=n(2),m=n(4),u=n(3),h=(n(6),r.a.Component,n(9)),g=n.n(h),d=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){a.state.username.trim().length>0&&a.setState({signedIn:!0}),e.preventDefault()},a.handleChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(i.a)({},n,t))},a.state={username:"",showHomePage:!1,signedIn:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return this.state.signedIn||this.state.showHomePage?r.a.createElement("div",null,r.a.createElement("p",null,"Welcome"),r.a.createElement("p",{className:"user"},this.state.username),r.a.createElement("img",{src:g.a,alt:"cherry",height:50,width:50,text:"cherry blossom"},"cherry blossom")):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),r.a.createElement("button",{className:"loginButton",type:"submit"},"Login")))}}]),n}(r.a.Component);n(16);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.0acb4ed4.chunk.js.map