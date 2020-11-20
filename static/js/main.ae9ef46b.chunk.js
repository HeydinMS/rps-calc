(this["webpackJsonprps-calc"]=this["webpackJsonprps-calc"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),r=s.n(c),i=s(8),a=s.n(i),o=(s(15),s(2)),j=s(3),b=s(6),l=s(5),p=s(4),h=(s(16),function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"rps-container",children:[Object(n.jsx)("button",{className:"btn btn-primary rps-button",onClick:function(){return e.props.onIncrement(e.props.name)},children:"Increment"}),Object(n.jsx)("div",{className:"rps-display",children:this.props.count}),Object(n.jsx)("button",{className:"btn btn-primary rps-button",onClick:function(){return e.props.onDecrement(e.props.name)},children:"Decrement"})]})}}]),s}(r.a.Component)),d=s(9),u=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){var e=this.props.state,t=9;for(var s in e){t-=e[s]}var c={rock:(3-e.rock)/t,paper:(3-e.paper)/t,scissor:(3-e.scissor)/t},r={rock:{win:c.scissor,draw:c.rock,lose:c.paper},paper:{win:c.rock,draw:c.paper,lose:c.scissor},scissor:{win:c.paper,draw:c.scissor,lose:c.rock}};function i(e,t){var s=0,n=[];for(var c in e){var r=e[c][t].toFixed(2);r>s?(s=r,n=[c]):r===s&&n.push(c)}return n}var a,o=i(r,"win");if(o.length>1){var j,b=[],l=Object(d.a)(o);try{for(l.s();!(j=l.n()).done;){var p=j.value;b[p]=r[p]}}catch(h){l.e(h)}finally{l.f()}a=i(b,"draw")}else a=o;return 1===a.length?Object(n.jsxs)("div",{className:"result",children:[Object(n.jsx)("div",{className:"statement",children:Object(n.jsxs)("p",{children:["Best guess would be ",Object(n.jsx)("b",{children:a[0].toUpperCase()}),"."]})}),Object(n.jsx)(O,{probabilities:r})]}):3===a.length?Object(n.jsxs)("div",{className:"result",children:[Object(n.jsx)("div",{className:"statement",children:Object(n.jsx)("p",{children:"All options have the same chance of winning."})}),Object(n.jsx)(O,{probabilities:r})]}):Object(n.jsxs)("div",{className:"result",children:[Object(n.jsx)("div",{className:"statement",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"bestGuess[0]"}),", and ",Object(n.jsx)("b",{children:"bestGuess[1]"})," are equally likely to win and or result in a draw"]})}),Object(n.jsx)(O,{probabilities:r})]})}}]),s}(r.a.Component),O=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(n.jsx)("table",{className:"rps-table result-table",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Action"}),Object(n.jsx)("th",{children:"Win"}),Object(n.jsx)("th",{children:"Draw"}),Object(n.jsx)("th",{children:"Lose"})]}),Object(n.jsx)(m,{name:"rock",probabilities:this.props.probabilities.rock}),Object(n.jsx)(m,{name:"paper",probabilities:this.props.probabilities.paper}),Object(n.jsx)(m,{name:"scissor",probabilities:this.props.probabilities.scissor})]})})}}]),s}(r.a.Component),m=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(j.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("tr",{className:"action-row",children:[Object(n.jsx)("td",{children:this.props.name.toUpperCase()}),Object(n.jsxs)("td",{children:[(100*this.props.probabilities.win).toFixed(2),"%"]}),Object(n.jsxs)("td",{children:[(100*this.props.probabilities.draw).toFixed(2),"%"]}),Object(n.jsxs)("td",{children:[(100*this.props.probabilities.lose).toFixed(2),"%"]})]})}}]),s}(r.a.Component),x=u,v=function(e){Object(l.a)(s,e);var t=Object(p.a)(s);function s(){var e;return Object(o.a)(this,s),(e=t.call(this)).state={cap:{max:3,min:0},counts:{rock:0,paper:0,scissor:0}},e.increment=e.increment.bind(Object(b.a)(e)),e.decrement=e.decrement.bind(Object(b.a)(e)),e}return Object(j.a)(s,[{key:"increment",value:function(e){if(this.state.counts[e]<this.state.cap.max){console.log("increment",e);var t=Object.assign({},this.state);t.counts[e]=t.counts[e]+1,console.log(t),this.setState(t)}}},{key:"decrement",value:function(e){if(this.state.counts[e]>this.state.cap.min){console.log("decrement",e);var t=Object.assign({},this.state);t.counts[e]=t.counts[e]-1,console.log(t),this.setState(t)}}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("table",{className:"rps-table",children:Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Rock"}),Object(n.jsx)("th",{children:"Paper"}),Object(n.jsx)("th",{children:"Scissor"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(h,{id:"rock-container",name:"rock",count:this.state.counts.rock,onIncrement:this.increment,onDecrement:this.decrement})}),Object(n.jsx)("td",{children:Object(n.jsx)(h,{id:"paper-container",name:"paper",count:this.state.counts.paper,onIncrement:this.increment,onDecrement:this.decrement})}),Object(n.jsx)("td",{children:Object(n.jsx)(h,{id:"scissor-container",name:"scissor",count:this.state.counts.scissor,onIncrement:this.increment,onDecrement:this.decrement})})]})]})}),Object(n.jsx)(x,{state:this.state.counts})]})})}}]),s}(r.a.Component),f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),r(e),i(e)}))};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.ae9ef46b.chunk.js.map