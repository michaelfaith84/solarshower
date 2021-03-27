(this["webpackJsonpsolar-shower"]=this["webpackJsonpsolar-shower"]||[]).push([[0],{24:function(e,t,c){},26:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(18),l=c.n(a),j=(c(24),c(25),c.p,c(26),c(8)),i=c(7),r=c(9),h=Object(n.createContext)(),b=c(32),d=c(33),o=c(34),O=c(39),x=c(35),u=c(36),g=c(1),m=function(){var e=Object(n.useContext)(h).showResults,t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=(c[0],c[1],Object(n.useRef)(null),Object(n.useState)({time:"",rate:""})),a=Object(r.a)(s,2),l=a[0],m=a[1],f=l.time,v=l.rate,w=function(e){var t=new RegExp(/^\d*\.?\d*/),c=e.target.value.match(t)?e.target.value.match(t)[0]:0;console.log(c),m(Object(i.a)(Object(i.a)({},l),{},Object(j.a)({},e.target.name,c)))};return Object(g.jsxs)(n.Fragment,{children:[Object(g.jsx)(b.a,{children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(o.a,{className:"mb-3",size:"lg",children:[Object(g.jsx)(o.a.Prepend,{children:Object(g.jsx)(o.a.Text,{id:"shower-time",children:Object(g.jsx)("i",{className:"fal fa-shower"})})}),Object(g.jsx)(O.a,{placeholder:"Time (Minutes)","aria-label":"time","aria-describedby":"shower-time",name:"time",value:f,onChange:w})]})})}),Object(g.jsx)(b.a,{children:Object(g.jsx)(d.a,{className:"text-center",children:Object(g.jsxs)(x.a,{"aria-label":"Common Rates",className:"pb-3 w-100",size:"lg",children:[Object(g.jsx)(u.a,{variant:"warning",className:"text-white",onClick:function(e){m(Object(i.a)(Object(i.a)({},l),{},{rate:2.5}))},children:"Average"}),Object(g.jsx)(u.a,{variant:"success",onClick:function(e){m(Object(i.a)(Object(i.a)({},l),{},{rate:1.6}))},children:"Eco"})]})})}),Object(g.jsx)(b.a,{children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(o.a,{className:"mb-3",size:"lg",children:[Object(g.jsx)(o.a.Prepend,{children:Object(g.jsx)(o.a.Text,{id:"flow-rate",children:Object(g.jsx)("i",{className:"fal fa-water-lower"})})}),Object(g.jsx)(O.a,{placeholder:"Flow (Gallons Per Minute)","aria-label":"rate","aria-describedby":"flow-rate",name:"rate",value:v,onChange:w})]})})}),Object(g.jsx)(b.a,{children:Object(g.jsx)(d.a,{children:Object(g.jsx)(u.a,{size:"lg",block:"true",onClick:function(t){f>0&&v>0&&e(f,v)},children:"MATH!"})})})]})},f=function(){return Object(g.jsx)("section",{id:"header",children:Object(g.jsxs)("h1",{className:"mt-5 mb-4",children:["CPVC Solar Shower ",Object(g.jsx)("i",{className:"far fa-calculator"})]})})},v=c(37),w=c(40),p=c(38),k=function(){var e=Object(n.useContext)(h),t=e.gallons,c=e.weight,s=e.length,a=e.reset,l=e.setLength,j=function(e){l(e.target.id.substr(1))};return Object(g.jsxs)(n.Fragment,{children:[Object(g.jsxs)(w.a,{children:[Object(g.jsx)(w.a.Header,{children:Object(g.jsxs)(p.a,{variant:"tabs",defaultActiveKey:"#s1",children:[Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s1",id:"s1",onClick:j,children:'1"'})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s1.25",id:"s1.25",onClick:j,children:'1-1/4""'})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s1.5",id:"s1.5",onClick:j,children:'1-1/2"'})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s2",id:"s2",onClick:j,children:'2"'})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s2.5",id:"s2.5",onClick:j,children:'2.5"'})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s3",id:"s3",onClick:j,children:'3"'})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s4",id:"s4",onClick:j,children:'4"'})}),Object(g.jsx)(p.a.Item,{children:Object(g.jsx)(p.a.Link,{eventKey:"#s5",id:"s5",onClick:j,children:'5"'})})]})}),Object(g.jsx)(w.a.Body,{children:Object(g.jsxs)(w.a.Text,{children:[Object(g.jsx)(b.a,{children:Object(g.jsx)(d.a,{className:"text-center",children:Object(g.jsx)("h4",{children:"Length"})})}),Object(g.jsx)(b.a,{children:Object(g.jsxs)(d.a,{className:"text-center",children:[s," feet"]})})]})}),Object(g.jsxs)(w.a.Footer,{children:[Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(d.a,{md:6,className:"text-right",children:["Gallons:"," "]}),Object(g.jsx)(d.a,{md:6,className:"text-left",children:t})]}),Object(g.jsxs)(b.a,{children:[Object(g.jsxs)(d.a,{md:6,className:"text-right",children:["Weight:"," "]}),Object(g.jsx)(d.a,{md:6,className:"text-left",children:c})]})]})]}),Object(g.jsx)(u.a,{className:"mt-4",block:"true",onClick:a,children:"Reset"})]})},C="SHOW_RESULTS",y="RESET",N="SET_LENGTH",L=function(e,t){switch(t.type){case C:return console.log(e),console.log(t.payload),Object(i.a)(Object(i.a)({},e),t.payload);case y:return{gallons:0,weight:0,lengths:{},length:0};case N:return Object(i.a)(Object(i.a)({},e),{},{length:e.lengths[t.payload]});default:return e}},F=function(e){var t=Object(n.useReducer)(L,{gallons:0,weight:0,lengths:{},length:0}),c=Object(r.a)(t,2),s=c[0],a=c[1];return Object(g.jsx)(h.Provider,{value:{gallons:s.gallons,weight:s.weight,lengths:s.lengths,length:s.length,showResults:function(e,t){var c=e*t*231,n=(e*t).toFixed(2),s=(8.33*n).toFixed(2),l={};[1,1.25,1.5,2,2.5,3,4,5].map((function(e){l=Object.assign(Object(j.a)({},e,(c/(Math.PI*Math.pow(.5*e,2))/12).toFixed(2)),l)})),a({type:C,payload:{weight:s,gallons:n,lengths:l,length:l[1]}})},reset:function(){a({type:y})},setLength:function(e){console.log(e),a({type:N,payload:e})}},children:e.children})},I=function(){var e=Object(n.useContext)(h).lengths;return Object.keys(e).length>0?Object(g.jsx)(k,{}):Object(g.jsx)(m,{})};var S=function(){return Object(g.jsx)(F,{children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(v.a,{children:Object(g.jsx)(b.a,{children:Object(g.jsxs)(d.a,{md:{span:8,offset:2},children:[Object(g.jsx)(f,{}),Object(g.jsx)(I,{})]})})})})})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),n(e),s(e),a(e),l(e)}))};l.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root")),T()}},[[31,1,2]]]);
//# sourceMappingURL=main.dff4084b.chunk.js.map