(this.webpackJsonpadmin_shop=this.webpackJsonpadmin_shop||[]).push([[8],{117:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(49),r=s(44),n=s.n(r),i=s(0);const l=n()("http://localhost:5000/admin",{transports:["websocket"]});t.default=function(e){const[t,s]=Object(c.useState)([]),[r,n]=Object(c.useState)(!1),[d,o]=Object(c.useState)("");return Object(c.useEffect)((()=>{(async()=>{const e=await a.a.getAll();console.log("response"),console.log(e.orders),s(e.orders),console.log("history")})()}),[]),Object(c.useEffect)((()=>{l.on("receive_order",(e=>{o("User ID: "+e+" V\u1eeba \u0110\u1eb7t H\xe0ng"),setTimeout((()=>{window.location.reload()}),4e3)}))}),[]),Object(i.jsxs)("div",{className:"page-wrapper",children:[Object(i.jsx)("div",{className:"page-breadcrumb",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-7 align-self-center",children:[Object(i.jsx)("h4",{className:"page-title text-truncate text-dark font-weight-medium mb-1",children:"Basic Initialisation"}),Object(i.jsx)("div",{className:"d-flex align-items-center",children:Object(i.jsx)("nav",{"aria-label":"breadcrumb",children:Object(i.jsxs)("ol",{className:"breadcrumb m-0 p-0",children:[Object(i.jsx)("li",{className:"breadcrumb-item",children:Object(i.jsx)("a",{href:"/",className:"text-muted",children:"History"})}),Object(i.jsx)("li",{className:"breadcrumb-item text-muted active","aria-current":"page",children:"Table"})]})})})]})})}),Object(i.jsx)("div",{className:"container-fluid",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-12",children:Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h4",{className:"card-title",children:"History"}),Object(i.jsx)("h3",{children:d}),Object(i.jsx)("input",{className:"form-control w-25",type:"text",placeholder:"Enter Search!"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"table-responsive",children:Object(i.jsxs)("table",{className:"table table-striped table-bordered no-wrap",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"ID User"}),Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Phone"}),Object(i.jsx)("th",{children:"Address"}),Object(i.jsx)("th",{children:"Total"}),Object(i.jsx)("th",{children:"Delivery"}),Object(i.jsx)("th",{children:"Status"}),Object(i.jsx)("th",{children:"Detail"})]})}),Object(i.jsx)("tbody",{children:t&&t.map((e=>Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:e.user._id}),Object(i.jsx)("td",{children:e.user.fullname}),Object(i.jsx)("td",{children:e.user.phone}),Object(i.jsx)("td",{children:e.user.address}),Object(i.jsx)("td",{children:e.total}),Object(i.jsx)("td",{children:e.delivery?"\u0110\xe3 V\u1eadn Chuy\u1ec3n":"Ch\u01b0a V\u1eadn Chuy\u1ec3n"}),Object(i.jsx)("td",{children:e.status?"\u0110\xe3 Thanh To\xe1n":"Ch\u01b0a Thanh To\xe1n"}),Object(i.jsx)("td",{children:Object(i.jsx)("a",{style:{cursor:"pointer",color:"white"},className:"btn btn-success",children:"View"})})]},e._id)))})]})})]})})})})}),Object(i.jsx)("footer",{className:"footer text-center text-muted"})]})}},33:function(e,t,s){"use strict";var c=s(36),a=s.n(c),r=s(35),n=s.n(r);const i=a.a.create({baseURL:"http://localhost:5000/admin",headers:{"content-type":"application/json"},paramsSerializer:e=>n.a.stringify(e)});i.interceptors.request.use((async e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e.data instanceof FormData&&delete e.headers["content-type"],e})),i.interceptors.response.use((e=>e&&e.data?e.data:e),(e=>{throw e})),t.a=i},49:function(e,t,s){"use strict";var c=s(33);const a={getHistoryAPI:e=>{const t="/histories".concat(e);return c.a.get(t)},getDetail:e=>{const t="/histories/".concat(e);return c.a.get(t)},getAll:()=>c.a.get("/histories/all")};t.a=a}}]);
//# sourceMappingURL=8.c70dde7d.chunk.js.map