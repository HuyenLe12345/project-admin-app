(this.webpackJsonpadmin_shop=this.webpackJsonpadmin_shop||[]).push([[6],{116:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(2),c=a(51),o=a(8),r=a(35),i=a.n(r),l=(a(116),a(0));t.default=()=>{const[e,t]=Object(s.useState)(""),[a,r]=Object(s.useState)(""),[p,u]=Object(s.useState)(!1),[d,j]=Object(s.useState)(!1),[g,m]=Object(s.useState)(null),[h,b]=Object(s.useState)(!1),{loading:O,error:x,dispatch:f}=Object(s.useContext)(o.a);return Object(l.jsx)("div",{className:"page-wrapper",children:Object(l.jsx)("div",{className:"page-breadcrumb",children:Object(l.jsx)("div",{className:"row",children:Object(l.jsx)("div",{className:"login",children:Object(l.jsxs)("div",{className:"heading",children:[Object(l.jsx)("h2",{children:"Sign in"}),Object(l.jsxs)("div",{children:[p&&Object(l.jsx)("span",{className:"text-danger",children:g}),d&&Object(l.jsx)("span",{className:"text-danger",children:g})]}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"input-group input-group-lg",children:[Object(l.jsx)("span",{className:"input-group-addon",children:Object(l.jsx)("i",{className:"fa fa-user"})}),Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"Email",value:e,onChange:e=>t(e.target.value)})]}),Object(l.jsxs)("div",{className:"input-group input-group-lg",children:[Object(l.jsx)("span",{className:"input-group-addon",children:Object(l.jsx)("i",{className:"fa fa-lock"})}),Object(l.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",value:a,onChange:e=>r(e.target.value)})]}),h&&Object(l.jsx)(n.a,{to:"/"}),Object(l.jsx)("button",{type:"button",className:"float",onClick:()=>{(async()=>{const t={email:e,password:a};console.log("PARAMS",t);const s="?"+i.a.stringify(t),n=await c.a.postLogin(s);if(console.log("response",n),n&&n.error){const e=n.error;"email"===e.path?(u(!0),j(!1),m(e.msg)):"password"===e.path&&(u(!1),j(!0),m(e.msg))}if(n&&"Success"===n.message){const e=n.user;u(!1),j(!1),m(null),localStorage.setItem("id_user",e._id),localStorage.setItem("name_user",e.fullname),localStorage.setItem("token",e.token),f({type:"LOGIN_SUCCESS",payload:e}),b(!0)}})()},children:"Login"})]})]})})})})})}},33:function(e,t,a){"use strict";var s=a(36),n=a.n(s),c=a(35),o=a.n(c);const r=n.a.create({baseURL:"http://localhost:5000/admin",headers:{"content-type":"application/json"},paramsSerializer:e=>o.a.stringify(e)});r.interceptors.request.use((async e=>{const t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e.data instanceof FormData&&delete e.headers["content-type"],e})),r.interceptors.response.use((e=>e&&e.data?e.data:e),(e=>{throw e})),t.a=r},51:function(e,t,a){"use strict";var s=a(33);const n={getAllData:()=>s.a.get("/users"),getDetailData:e=>{const t="".concat(e);return s.a.get(t)},postLogin:e=>{const t="/login/".concat(e);return s.a.post(t)},postSignUp:e=>{const t="/signup/".concat(e);return s.a.post(t)}};t.a=n}}]);
//# sourceMappingURL=6.bff2b79e.chunk.js.map