(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),s=n.n(l),c=(n(13),n(1)),i=n(2),o=n(4),u=n(3),m=(n(14),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showdetails:!1})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"event__summary"},r.a.createElement("h1",null," ",this.props.event.summary)),r.a.createElement("p",{className:"event__summary--dateTime"},this.props.event.start.dateTime),r.a.createElement("p",{className:"event__summary--timeZone"},this.props.event.start.timeZone),t&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"hide details"),!t&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details"),t&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("h3",null,"About event: "),r.a.createElement("h4",null,r.a.createElement("a",{ref:this.props.event.htmlLink,target:"blank"}," See details on Google Calendar ")),r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),n}(a.Component)),h=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={events:[]},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.state.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))})))}}]),n}(a.Component),v=(n(7),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.location,query:"Berlin, German",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n})},e.handleItemClicked=function(t){e.setState({query:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("h1",null," Meet App"),r.a.createElement("h3",null,"Choose your nearest city"),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t},"onClick=",(function(){return e.handleItemClicked(t)}))}))))}}]),n}(a.Component)),p=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,r.a.createElement("h5",null,"Number of Events:")),r.a.createElement("input",{value:this.state.numberOfEvents,type:"text",className:"numberOfEventsInput",onChange:this.handleOnchange},this.state.numberOfEvents))}}]),n}(a.Component),d=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(p,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.36afb447.chunk.js.map