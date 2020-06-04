(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),c=(n(17),n(2)),s=n(3),l=n(5),u=n(4),h=(n(18),n(19),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={price:isNaN(e.price)?0:e.price},a}return Object(s.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({price:isNaN(e.price)?0:e.price})}},{key:"render",value:function(){return r.a.createElement("span",null,"\xa3",(this.state.price/100).toFixed(2))}}]),n}(r.a.Component)),f=(n(20),function(e,t){var n=[];return n.push({take:e,direction:"away"}),n.push({take:null,direction:"home"}),n.push({take:t,direction:"away"}),n.push({take:e,direction:"home"}),n.push({take:t,direction:"away"}),n.push({take:null,direction:"home"}),n.push({take:e,direction:"away"}),n}),m=function(e,t){for(var n=[],a=0;a<e;a++)n.push({take:t,direction:"away"}),n.push({take:null,direction:"home"});return n.pop(),n},p=function(){var e=[];return e.push({take:"goose",direction:"away"}),e.push({take:null,direction:"home"}),e.push({take:"corn",direction:"away"}),e},v=function(e,t){return 1===e&&2===t?f("goose","corn"):2===e&&1===t?f("corn","goose"):e>0&&0===t?m(e,"goose"):0===e&&t>0?m(t,"corn"):1===e&&1===t?p():[]},b=n(6),y=n(7),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={moves:[]},a.state={moves:v(e.geese,e.corn)},a}return Object(s.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({moves:v(e.geese,e.corn)})}},{key:"convertItemToIcon",value:function(e){switch(e){case"corn":return r.a.createElement(b.a,{className:"corn",icon:y.d});case"goose":return r.a.createElement(b.a,{icon:y.c});default:return r.a.createElement(b.a,{icon:y.e})}}},{key:"render",value:function(){var e=this,t=[];return this.state.moves.forEach((function(n){var a=r.a.createElement(b.a,{icon:y.b});"home"===n.direction&&(a=r.a.createElement(b.a,{icon:y.a}));var o=n.take;o||(o="nothing"),o=e.convertItemToIcon(o),t.push(r.a.createElement("tr",null,r.a.createElement("td",null,o),r.a.createElement("td",null,a)))})),t.length>0?r.a.createElement("div",null,r.a.createElement("h2",null,"Trips"),r.a.createElement("table",null,r.a.createElement("tbody",null,t))):null}}]),n}(r.a.Component),k=(n(26),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={quantity:0},a.state={quantity:a.props.quantity},a}return Object(s.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({quantity:e.quantity})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"item-picker"},r.a.createElement("h2",null,this.props.name),r.a.createElement("p",null,this.props.quantityLabel,": ",this.state.quantity),r.a.createElement("div",{className:"item-picker__button-container"},r.a.createElement("button",{onClick:function(){return e.props.callback(1)}},"+"),r.a.createElement("button",{onClick:function(){return e.props.callback(10)}},"+10"),r.a.createElement("button",{onClick:function(){return e.props.callback(-10)}},"-10"),r.a.createElement("button",{onClick:function(){return e.props.callback(-1)}},"-")))}}]),n}(r.a.Component)),E=function(e,t,n){if(0===e&&0===t&&0===n)return!0;if(0===n){if(0===e||0===t)return!0;if(e<=2&&t<=1)return!0;if(e<=1&&t<=2)return!0}else{if(e>1&&t>1)return!1;if(0===e)return!0;if(e<=2&&t<=1)return!(n>1)}return!1},d=function(e,t,n,a){return t+n+a===0?0:(2*(t+n+a)-1)*e},O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).priceOfFerry=25,e.state={bagsOfCorn:0,geese:0,foxes:0,total:0,canTravel:!0},e}return Object(s.a)(n,[{key:"onChangeCornQuantity",value:function(e){var t=this.state.bagsOfCorn+e;t<0&&(t=0),this.setState({bagsOfCorn:t,total:d(this.priceOfFerry,this.state.geese,t,this.state.foxes),canTravel:E(this.state.geese,t,this.state.foxes)})}},{key:"onChangeGeeseQuantity",value:function(e){var t=this.state.geese+e;t<0&&(t=0),this.setState({geese:t,total:d(this.priceOfFerry,t,this.state.bagsOfCorn,this.state.foxes),canTravel:E(t,this.state.bagsOfCorn,this.state.foxes)})}},{key:"onChangeFoxQuantity",value:function(e){var t=this.state.foxes+e;t<0&&(t=0),this.setState({foxes:t,total:d(this.priceOfFerry,this.state.geese,this.state.bagsOfCorn,t),canTravel:E(this.state.geese,this.state.bagsOfCorn,t)})}},{key:"reset",value:function(){this.setState({bagsOfCorn:0,geese:0,foxes:0,total:0,canTravel:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement("h1",null,"Ferry Trip Calculator"),r.a.createElement("p",null,"Ferry Price: ",r.a.createElement(h,{price:this.priceOfFerry})),r.a.createElement(k,{name:"Corn",quantity:this.state.bagsOfCorn,quantityLabel:"Bags of corn",callback:function(t){return e.onChangeCornQuantity(t)}}),r.a.createElement(k,{name:"Geese",quantity:this.state.geese,quantityLabel:"Geese",callback:function(t){return e.onChangeGeeseQuantity(t)}}),r.a.createElement(k,{name:"Foxes",quantity:this.state.foxes,quantityLabel:"Foxes",callback:function(t){return e.onChangeFoxQuantity(t)}}),r.a.createElement("div",{className:"reset-button-container"},r.a.createElement("button",{onClick:function(){return e.reset()}},"Reset")),this.state.canTravel&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"total"},"Price for ferry: ",r.a.createElement(h,{price:this.state.total})),r.a.createElement(g,{geese:this.state.geese,corn:this.state.bagsOfCorn})),!this.state.canTravel&&r.a.createElement("div",{className:"error"},"CANNOT DO FERRY TRIP"))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.c57e569a.chunk.js.map