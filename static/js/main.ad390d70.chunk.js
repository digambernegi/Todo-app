(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(9),a=n.n(i),l=(n(15),n(16),n(10)),r=n(8),o=n(5),j=n(4),d=(n(17),n(0)),u=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(function(){var e=localStorage.getItem("mylist");return e?JSON.parse(e):[]}()),a=Object(o.a)(i,2),u=a[0],b=a[1],m=Object(c.useState)(""),O=Object(o.a)(m,2),f=O[0],h=O[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),g=v[0],p=v[1],N=function(){if(n)if(n&&g)b(u.map((function(e){return e.id===f?Object(r.a)(Object(r.a)({},e),{},{name:n}):e}))),s(""),h(""),p(!1);else{var e={id:(new Date).getTime().toString(),name:n};b([].concat(Object(l.a)(u),[e])),s("")}else alert("Todo is empty!")};return Object(c.useEffect)((function(){localStorage.setItem("mylist",JSON.stringify(u))}),[u]),Object(d.jsx)("div",{className:"main_div",children:Object(d.jsxs)("div",{className:"child_div",children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:"../checklist.png",alt:"todolist"}),Object(d.jsx)("h3",{children:"Todo List"})]}),Object(d.jsxs)("div",{className:"addItems",children:[Object(d.jsx)("input",{className:"form_controls",type:"text",placeholder:"Add Items \ud83d\udcdd",value:n,onChange:function(e){return s(e.target.value)}}),g?Object(d.jsx)(j.a,{className:"edit-btnn",onClick:N}):Object(d.jsx)(j.b,{className:"add-btnn",onClick:N})]}),Object(d.jsx)("div",{className:"showItems",children:u.map((function(e){return Object(d.jsxs)("div",{className:"eachItems",children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsxs)("div",{className:"todo-btn",children:[Object(d.jsx)(j.a,{className:"edit-btn",onClick:function(){return function(e){var t=u.find((function(t){return t.id===e}));s(t.name),h(e),p(!0)}(e.id)}}),Object(d.jsx)(j.c,{className:"del-btn",onClick:function(){return function(e){var t=u.filter((function(t){return t.id!==e}));b(t)}(e.id)}})]})]},e.id)}))}),Object(d.jsx)("div",{className:"show",children:Object(d.jsxs)("button",{className:"btn","data-sm-link-text":"Remove All",onClick:function(){b([])},children:[" ",Object(d.jsx)("span",{children:"Clear List"})]})})]})})};var b=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(u,{})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),m()}},[[21,1,2]]]);
//# sourceMappingURL=main.ad390d70.chunk.js.map