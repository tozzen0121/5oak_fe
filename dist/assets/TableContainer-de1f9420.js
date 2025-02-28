import{bf as p,be as u,a3 as y,a0 as r,r as b,bi as m,b3 as T,j as d,bn as C,bo as f}from"./index-22c328f7.js";import{a as B,b as N}from"./TableCell-97ce9cb3.js";function S(o){return p("MuiTable",o)}u("MuiTable",["root","stickyHeader"]);const j=["className","component","padding","size","stickyHeader"],k=o=>{const{classes:e,stickyHeader:s}=o;return f({root:["root",s&&"stickyHeader"]},S,e)},H=y("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:s}=o;return[e.root,s.stickyHeader&&e.stickyHeader]}})(({theme:o,ownerState:e})=>r({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":r({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},e.stickyHeader&&{borderCollapse:"separate"})),v="table",U=b.forwardRef(function(e,s){const t=m({props:e,name:"MuiTable"}),{className:i,component:a=v,padding:l="normal",size:n="medium",stickyHeader:c=!1}=t,g=T(t,j),x=r({},t,{component:a,padding:l,size:n,stickyHeader:c}),M=k(x),R=b.useMemo(()=>({padding:l,size:n,stickyHeader:c}),[l,n,c]);return d.jsx(B.Provider,{value:R,children:d.jsx(H,r({as:a,role:a===v?null:"table",ref:s,className:C(M.root,i),ownerState:x},g))})}),G=U;function $(o){return p("MuiTableBody",o)}u("MuiTableBody",["root"]);const h=["className","component"],_=o=>{const{classes:e}=o;return f({root:["root"]},$,e)},P=y("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,e)=>e.root})({display:"table-row-group"}),z={variant:"body"},w="tbody",E=b.forwardRef(function(e,s){const t=m({props:e,name:"MuiTableBody"}),{className:i,component:a=w}=t,l=T(t,h),n=r({},t,{component:a}),c=_(n);return d.jsx(N.Provider,{value:z,children:d.jsx(P,r({className:C(c.root,i),as:a,ref:s,role:a===w?null:"rowgroup",ownerState:n},l))})}),I=E;function A(o){return p("MuiTableContainer",o)}u("MuiTableContainer",["root"]);const L=["className","component"],W=o=>{const{classes:e}=o;return f({root:["root"]},A,e)},X=y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,e)=>e.root})({width:"100%",overflowX:"auto"}),q=b.forwardRef(function(e,s){const t=m({props:e,name:"MuiTableContainer"}),{className:i,component:a="div"}=t,l=T(t,L),n=r({},t,{component:a}),c=W(n);return d.jsx(X,r({ref:s,as:a,className:C(c.root,i),ownerState:n},l))}),J=q;export{J as T,G as a,I as b};
