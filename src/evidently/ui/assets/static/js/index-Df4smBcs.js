import{H as f,j as t,B as l,J as x,K as c,N as h,O as v,d as m,P as g,Q as j,r as y,U as O,V as _,T as P,I as w,W as B,X as R,Y as b,Z as D}from"./vendor-COAUpDWz.js";import{r as I,i as M}from"./createSvgIcon-63W_9W2b.js";const H=e=>{var a;return typeof((a=e==null?void 0:e.handle)==null?void 0:a.crumb)=="function"},N=()=>{const a=f().filter(H).map(({handle:r,data:s,id:o,pathname:n,params:i})=>r.crumb(s,{id:o,pathname:n,params:i}));return t.jsx(l,{children:t.jsx(x,{"aria-label":"breadcrumb",children:a.map(r=>t.jsx(c,{component:h,color:"inherit",to:r.to,children:r.linkText},r.to))})})},T=()=>{const e=v(),a=m(),{state:r}=g();return e.state!=="idle"||a.some(({state:o})=>o!=="idle")||r!=="idle"?t.jsx(l,{width:1,sx:{position:"fixed",top:0,left:0,zIndex:1e3},children:t.jsx(j,{sx:{height:"3px"}})}):null};var u={},W=M;Object.defineProperty(u,"__esModule",{value:!0});var d=u.default=void 0;S(y);var q=W(I()),C=t;function p(e){if(typeof WeakMap!="function")return null;var a=new WeakMap,r=new WeakMap;return(p=function(s){return s?r:a})(e)}function S(e,a){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var r=p(a);if(r&&r.has(e))return r.get(e);var s={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)){var i=o?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(s,n,i):s[n]=e[n]}return s.default=e,r&&r.set(e,s),s}var L=(0,q.default)((0,C.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");d=u.default=L;function A({version:e,authComponent:a,logoSrc:r}){return t.jsx(t.Fragment,{children:t.jsx(O,{position:"static",color:"transparent",children:t.jsxs(_,{children:[t.jsxs(P,{variant:"h6",sx:{flexGrow:1},children:[t.jsx("img",{src:r,height:"55px",alt:"evidently logo"}),t.jsx("span",{style:{verticalAlign:"super",fontSize:"0.75rem"},children:e})]}),a,t.jsx(c,{href:"https://github.com/evidentlyai/evidently",children:t.jsx(w,{children:t.jsx(d,{})})}),t.jsx(c,{href:"https://docs.evidentlyai.com/",children:t.jsx(B,{children:"Docs"})})]})})})}const G=({logoSrc:e,authComponent:a})=>{const{version:r}=R();return t.jsxs(t.Fragment,{children:[t.jsx(A,{authComponent:a,version:r,logoSrc:e}),t.jsx(T,{}),t.jsx(b,{}),t.jsxs(l,{p:3,children:[t.jsx(N,{}),t.jsx(D,{})]})]})},k={crumb:()=>({to:"/",linkText:"Home"})};export{G as HomeComponentTemplate,k as handle};
