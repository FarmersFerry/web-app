(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),i=n.n(r),c=(n(12),n(1)),s=n(2),l=n(3),u=n(4),h=(n(13),n(14),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={price:isNaN(e.price)?0:e.price},a}return Object(s.a)(n,[{key:"componentWillReceiveProps",value:function(e){this.setState({price:isNaN(e.price)?0:e.price})}},{key:"render",value:function(){return o.a.createElement("span",null,"\xa3",(this.state.price/100).toFixed(2))}}]),n}(o.a.Component)),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={bagsOfCorn:0,geese:0,total:0},e}return Object(s.a)(n,[{key:"getTotal",value:function(e,t){return 25*(e+t)}},{key:"onChangeCornQuantity",value:function(e){var t=this.state.bagsOfCorn+e;t<0&&(t=0),this.setState({bagsOfCorn:t,total:this.getTotal(this.state.geese,t)})}},{key:"onChangeGeeseQuantity",value:function(e){var t=this.state.geese+e;t<0&&(t=0),this.setState({geese:t,total:this.getTotal(t,this.state.bagsOfCorn)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("p",null,"Ferry Price: ",o.a.createElement(h,{price:25})),o.a.createElement("p",{id:"bags-of-corn"},"Bags of corn: ",this.state.bagsOfCorn),o.a.createElement("p",{id:"geese"},"Geese: ",this.state.geese)),o.a.createElement("div",null,o.a.createElement("h3",null,"Corn"),o.a.createElement("button",{id:"corn-plus-one",onClick:function(){return e.onChangeCornQuantity(1)}},"+"),o.a.createElement("button",{onClick:function(){return e.onChangeCornQuantity(10)}},"+10"),o.a.createElement("button",{onClick:function(){return e.onChangeCornQuantity(-10)}},"-10"),o.a.createElement("button",{onClick:function(){return e.onChangeCornQuantity(-1)}},"-")),o.a.createElement("div",null,o.a.createElement("h3",null,"Geese"),o.a.createElement("button",{id:"goose-plus-one",onClick:function(){return e.onChangeGeeseQuantity(1)}},"+"),o.a.createElement("button",{onClick:function(){return e.onChangeGeeseQuantity(10)}},"+10"),o.a.createElement("button",{onClick:function(){return e.onChangeGeeseQuantity(-10)}},"-10"),o.a.createElement("button",{onClick:function(){return e.onChangeGeeseQuantity(-1)}},"-")),(this.state.geese<=1||this.state.bagsOfCorn<=1)&&o.a.createElement("div",{id:"total"},console.log(this.state.total),"Price for ferry: ",o.a.createElement(h,{price:this.state.total})),this.state.geese>1&&this.state.bagsOfCorn>1&&o.a.createElement("div",null,"CANNOT DO FERRY TRIP"))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.6cb772bf.chunk.js.map