(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(13),n(1)),i=n(2),u=n(4),s=n(3),m=(n(14),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),n}(a.Component)),h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={events:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.state.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))})))}}]),n}(a.Component),p=(n(7),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.location,query:"Berlin, German",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("h1",null," Meet App>"),r.a.createElement("h3",null,"Choose your nearest city"),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t},"onClick=",(function(){return e.handleItemClicked(t)}))}))))}}]),n}(a.Component)),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(h,null),r.a.createElement(m,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8aeeed29.chunk.js.map