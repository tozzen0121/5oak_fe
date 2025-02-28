import{c as f,r as p,j as t,M as y,a6 as P}from"./index-22c328f7.js";import{C as T}from"./Filter-454bc8d8.js";import"./LinearWithLabel-b0b7ff5b.js";import{T as j,a as C,b as u}from"./TableContainer-de1f9420.js";import{T as S}from"./TableHead-9e7ad68b.js";import{T as c}from"./TableRow-26a6c0bb.js";import{T as h}from"./TableCell-97ce9cb3.js";import{T as R}from"./TablePagination-b68fd889.js";import"./DownloadOutlined-eb6f53dd.js";import"./CaretUpOutlined-77b1b8be.js";import"./CaretDownOutlined-f659ab0d.js";import"./Pagination-b2be339d.js";import"./index-0f547e3f.js";import"./Checkbox-7b4c4348.js";import"./MinusOutlined-f3ddcfa6.js";import"./KeyboardArrowRight-982fdffa.js";const g=[{id:"name",label:"Name",minWidth:170},{id:"code",label:"ISO Code",minWidth:100},{id:"population",label:"Population",minWidth:170,align:"right",format:i=>i.toLocaleString("en-US")},{id:"size",label:"Size (km²)",minWidth:170,align:"right",format:i=>i.toLocaleString("en-US")},{id:"density",label:"Density",minWidth:170,align:"right",format:i=>typeof i=="number"&&i.toFixed(2)}];function e(i,n,s,o){const d=s/o;return{name:i,code:n,population:s,size:o,density:d}}const m=[e("India","IN",1324171354,3287263),e("China","CN",1403500365,9596961),e("Italy","IT",60483973,301340),e("United States","US",327167434,9833520),e("Canada","CA",37602103,9984670),e("Australia","AU",25475400,7692024),e("Germany","DE",83019200,357578),e("Ireland","IE",4857e3,70273),e("Mexico","MX",126577691,1972550),e("Japan","JP",126317e3,377973),e("France","FR",67022e3,640679),e("United Kingdom","GB",67545757,242495),e("Russia","RU",146793744,17098246),e("Nigeria","NG",200962417,923768),e("Brazil","BR",210147125,8515767)];function J(){const i=f(),[n,s]=p.useState(0),[o,d]=p.useState(10),x=(a,r)=>{s(r)},b=a=>{var r;d(+((r=a==null?void 0:a.target)==null?void 0:r.value)),s(0)};return t.jsxs(y,{content:!1,title:"Sticky Header",secondary:t.jsx(T,{data:m,filename:"sticky-table-data.csv"}),children:[t.jsx(j,{sx:{maxHeight:430},children:t.jsxs(C,{stickyHeader:!0,"aria-label":"sticky table",children:[t.jsx(S,{sx:{"& th":{borderTop:`1px solid ${i.palette.divider}`,borderBottom:`2px solid ${i.palette.divider} !important`}},children:t.jsx(c,{children:g.map(a=>t.jsx(h,{sx:{minWidth:a.minWidth,position:"sticky !important"},align:a.align,children:a.label},a.id))})}),t.jsx(u,{children:m.slice(n*o,n*o+o).map(a=>t.jsx(c,{sx:{py:3},hover:!0,role:"checkbox",tabIndex:-1,children:g.map(r=>{const l=a[r.id];return t.jsx(h,{align:r.align,children:r.format&&typeof l=="number"?r.format(l):l},r.id)})},a.code))})]})}),t.jsx(P,{}),t.jsx(R,{rowsPerPageOptions:[10,25,100],component:"div",count:m.length,rowsPerPage:o,page:n,onPageChange:x,onRowsPerPageChange:b})]})}export{J as default};
