(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),r=n.n(i),s=(n(12),n(1)),c=n(2),u=n(4),l=n(3),m=(n(13),o.a.Component,function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){a.state.username.trim().length>0&&a.setState({signedIn:!0}),e.preventDefault()},a.handleChange=function(e){},a.state={username:"",showHomePage:!1,signedIn:!1},a}return Object(c.a)(n,[{key:"render",value:function(){return!this.state.signedIn&&this.state.showHomePage,o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("label",null,"Username:"),o.a.createElement("input",{type:"text",value:this.state.username,onChange:this.handleChange}),o.a.createElement("button",{className:"loginButton",type:"submit"},"Login")))}}]),n}(o.a.Component));n(14);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.986e4bda.chunk.js.map