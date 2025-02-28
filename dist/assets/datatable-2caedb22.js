import{R as h,j as e,M,a6 as z,B as V,P as x}from"./index-22c328f7.js";import{header as F}from"./basic-08506288.js";import{C as K,R as L}from"./Filter-454bc8d8.js";import"./LinearWithLabel-b0b7ff5b.js";import{T as G,a as J,b as N}from"./TableContainer-de1f9420.js";import{T as P}from"./TableRow-26a6c0bb.js";import{T as p}from"./TableCell-97ce9cb3.js";import{C}from"./Checkbox-7b4c4348.js";import{T as W}from"./TablePagination-b68fd889.js";import{T as $}from"./TableHead-9e7ad68b.js";import{T as B}from"./TableSortLabel-6eba0b26.js";import{v as Q}from"./visuallyHidden-14c3de6e.js";import"./DownloadOutlined-eb6f53dd.js";import"./CaretUpOutlined-77b1b8be.js";import"./CaretDownOutlined-f659ab0d.js";import"./Pagination-b2be339d.js";import"./index-0f547e3f.js";import"./MinusOutlined-f3ddcfa6.js";import"./KeyboardArrowRight-982fdffa.js";function d(r,i,t,a,s){return{name:r,calories:i,fat:t,carbs:a,protein:s}}const b=[d("Cupcake",305,3.7,67,4.3),d("Donut",452,25,51,4.9),d("Eclair",262,16,24,6),d("Frozen yoghurt",159,6,24,4),d("Gingerbread",356,16,49,3.9),d("Honeycomb",408,3.2,87,6.5),d("Ice cream sandwich",237,9,37,4.3),d("Jelly Bean",375,0,94,0),d("KitKat",518,26,65,7),d("Lollipop",392,.2,98,0),d("Marshmallow",318,0,81,2),d("Nougat",360,19,9,37),d("Oreo",437,18,63,4)];function k(r,i,t){return i[t]<r[t]?-1:i[t]>r[t]?1:0}const U=(r,i)=>r==="desc"?(t,a)=>k(t,a,i):(t,a)=>-k(t,a,i);function X(r,i){const t=r.map((a,s)=>[a,s]);return t.sort((a,s)=>{const u=i(a[0],s[0]);return u!==0?u:a[1]-s[1]}),t.map(a=>a[0])}const Y=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function y({onSelectAllClick:r,order:i,orderBy:t,numSelected:a,rowCount:s,onRequestSort:u}){const g=c=>j=>{u(j,c)};return e.jsx($,{children:e.jsxs(P,{children:[e.jsx(p,{padding:"checkbox",sx:{pl:3},children:e.jsx(C,{color:"primary",indeterminate:a>0&&a<s,checked:s>0&&a===s,onChange:r,inputProps:{"aria-label":"select all desserts"}})}),Y.map(c=>e.jsx(p,{align:c.numeric?"right":"left",padding:c.disablePadding?"none":"normal",sortDirection:t===c.id?i:!1,children:e.jsxs(B,{active:t===c.id,direction:t===c.id?i:"asc",onClick:g(c.id),children:[c.label,t===c.id?e.jsx(V,{component:"span",sx:Q,children:i==="desc"?"sorted descending":"sorted ascending"}):null]})},c.id))]})})}y.propTypes={numSelected:x.number.isRequired,onRequestSort:x.func.isRequired,onSelectAllClick:x.func.isRequired,order:x.oneOf(["asc","desc"]).isRequired,orderBy:x.string.isRequired,rowCount:x.number.isRequired};function xe(){const[r,i]=h.useState("asc"),[t,a]=h.useState("calories"),[s,u]=h.useState([]),[g,c]=h.useState(0),[j]=h.useState(!1),[f,q]=h.useState(5),[T,v]=h.useState([]),w=(n,m)=>{i(t===m&&r==="asc"?"desc":"asc"),a(m)},D=n=>{if(n.target.checked){const m=b.map(o=>o.name);u(m);return}u([])},I=(n,m)=>{const o=s.indexOf(m);let l=[];o===-1?l=l.concat(s,m):o===0?l=l.concat(s.slice(1)):o===s.length-1?l=l.concat(s.slice(0,-1)):o>0&&(l=l.concat(s.slice(0,o),s.slice(o+1))),u(l);const S=b.filter(H=>l.includes(H.name.toString()));v(S),u(l)},O=(n,m)=>{c(m)},A=n=>{q(parseInt(n==null?void 0:n.target.value,10)),c(0)},E=n=>s.indexOf(n)!==-1,R=g>0?Math.max(0,(1+g)*f-b.length):0;return e.jsxs(M,{content:!1,title:"Data Tables",secondary:e.jsx(K,{data:T.length>0?T:b,headers:F,filename:"selected-table-data.csv"}),children:[e.jsx(L,{selected:s.length}),e.jsx(G,{children:e.jsxs(J,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:j?"small":"medium",children:[e.jsx(y,{numSelected:s.length,order:r,orderBy:t,onSelectAllClick:D,onRequestSort:w,rowCount:b.length}),e.jsxs(N,{children:[X(b,U(r,t)).slice(g*f,g*f+f).map((n,m)=>{if(typeof n=="number")return null;const o=E(n.name),l=`enhanced-table-checkbox-${m}`;return e.jsxs(P,{hover:!0,onClick:S=>I(S,n.name),role:"checkbox","aria-checked":o,tabIndex:-1,selected:o,children:[e.jsx(p,{padding:"checkbox",sx:{pl:3},children:e.jsx(C,{color:"primary",checked:o,inputProps:{"aria-labelledby":l}})}),e.jsx(p,{component:"th",id:l,scope:"row",padding:"none",children:n.name}),e.jsx(p,{align:"right",children:n.calories}),e.jsx(p,{align:"right",children:n.fat}),e.jsx(p,{align:"right",children:n.carbs}),e.jsx(p,{sx:{pr:3},align:"right",children:n.protein})]},n.name)}),R>0&&e.jsx(P,{style:{height:(j?33:53)*R},children:e.jsx(p,{colSpan:6})})]})]})}),e.jsx(z,{}),e.jsx(W,{rowsPerPageOptions:[5,10,25],component:"div",count:b.length,rowsPerPage:f,page:g,onPageChange:O,onRowsPerPageChange:A})]})}export{xe as default};
