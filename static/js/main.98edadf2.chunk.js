(this.webpackJsonpmakeyourdrink=this.webpackJsonpmakeyourdrink||[]).push([[0],[,,,,,,,function(n,e,t){n.exports=t(18)},,,,,function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){},function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(6),c=t.n(i),s=(t(12),t(1)),o=t(2),u=t(4),l=t(3),m=(t(13),t(14),function(n){var e=n.name,t=n.onClick;return a.a.createElement("button",{className:"button",onClick:t},e)}),d=(t(15),function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"imgCard"},a.a.createElement("img",{src:this.props.drinkImg,className:"img"}),a.a.createElement("div",{className:"drink-name"},a.a.createElement("h3",null,this.props.drinkName),a.a.createElement("p",null,this.props.drinkIngredients.join(" | ")))),a.a.createElement("div",{className:"instructions"},a.a.createElement("h2",null,"Instructions"),a.a.createElement("p",null,this.props.drinkInstructions)))}}]),t}(r.Component)),k=(t(16),function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"header"},a.a.createElement("img",{src:"/img/logo.png"}),a.a.createElement("h1",null,"Make Your Drink"))}}]),t}(r.Component)),h=(t(17),function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(n){var r;return Object(s.a)(this,t),(r=e.call(this,n)).state={idDrink:null,drinkName:null,drinkInstructions:null,drinkImg:null,drinkIngredients:[]},r}return Object(o.a)(t,[{key:"myData",value:function(){var n=this;fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(n){return n.json()})).then((function(e){var t=n.getIngredients(e.drinks[0]);n.setState({idDrink:e.drinks[0].idDrink,drinkName:e.drinks[0].strDrink,drinkInstructions:e.drinks[0].strInstructions,drinkImg:e.drinks[0].strDrinkThumb,drinkIngredients:t}),console.log(n.state)}))}},{key:"getIngredients",value:function(n){var e=[];return Object.getOwnPropertyNames(n).filter((function(n){return n.includes("strIngredient")})).forEach((function(t){if(!n[t])return e;e.push(n[t])})),e}},{key:"componentDidMount",value:function(){this.myData()}},{key:"render",value:function(){var n=this;return a.a.createElement(r.Fragment,null,a.a.createElement(k,null),a.a.createElement("div",{className:"view"},a.a.createElement(d,{idDrink:this.state.idDrink,drinkName:this.state.drinkName,drinkInstructions:this.state.drinkInstructions,drinkImg:this.state.drinkImg,drinkIngredients:this.state.drinkIngredients}),a.a.createElement(m,{onClick:function(){return n.myData()},name:"New Drink"})))}}]),t}(r.Component)),p=function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(){return Object(s.a)(this,t),e.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app"},a.a.createElement(h,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.98edadf2.chunk.js.map