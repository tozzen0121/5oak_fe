import{P as l,c3 as f,r as h,j as e,a5 as c,M as g,bX as x}from"./index-22c328f7.js";import{u as b,b as j,S as y,f as n}from"./ScrollX-4ed5c916.js";import{C as T}from"./Filter-454bc8d8.js";import{L as C}from"./LinearWithLabel-b0b7ff5b.js";import{T as R,a as D,b as K}from"./TableContainer-de1f9420.js";import{T as P}from"./TableHead-9e7ad68b.js";import{T as p}from"./TableRow-26a6c0bb.js";import{T as d}from"./TableCell-97ce9cb3.js";import"./DownloadOutlined-eb6f53dd.js";import"./CaretUpOutlined-77b1b8be.js";import"./CaretDownOutlined-f659ab0d.js";import"./Pagination-b2be339d.js";import"./index-0f547e3f.js";import"./Checkbox-7b4c4348.js";import"./MinusOutlined-f3ddcfa6.js";function u({columns:t,data:o,title:r}){const i=b({data:o,columns:t,getCoreRowModel:j()});let m=[];return i.getAllColumns().map(s=>m.push({label:typeof s.columnDef.header=="string"?s.columnDef.header:"#",key:s.columnDef.accessorKey})),e.jsx(g,{content:!1,title:r,secondary:e.jsx(T,{data:o,headers:m,filename:"dense.csv"}),children:e.jsx(y,{children:e.jsx(R,{component:x,children:e.jsxs(D,{size:"small",children:[e.jsx(P,{children:i.getHeaderGroups().map(s=>e.jsx(p,{children:s.headers.map(a=>e.jsx(d,{...a.column.columnDef.meta,children:a.isPlaceholder?null:n(a.column.columnDef.header,a.getContext())},a.id))},s.id))}),e.jsx(K,{children:i.getRowModel().rows.map(s=>e.jsx(p,{children:s.getVisibleCells().map(a=>e.jsx(d,{...a.column.columnDef.meta,children:n(a.column.columnDef.cell,a.getContext())},a.id))},s.id))})]})})})})}u.propTypes={columns:l.array,data:l.array,title:l.string};const S=()=>{const t=f(10),o=h.useMemo(()=>[{header:"Name",footer:"Name",accessorKey:"fullName"},{header:"Email",footer:"Email",accessorKey:"email"},{header:"Age",footer:"Age",accessorKey:"age",meta:{className:"cell-right"}},{header:"Role",footer:"Role",accessorKey:"role"},{header:"Visits",footer:"Visits",accessorKey:"visits",meta:{className:"cell-right"}},{header:"Status",footer:"Status",accessorKey:"status",cell:r=>{switch(r.getValue()){case"Complicated":return e.jsx(c,{color:"error",label:"Complicated",size:"small",variant:"light"});case"Relationship":return e.jsx(c,{color:"success",label:"Relationship",size:"small",variant:"light"});case"Single":default:return e.jsx(c,{color:"info",label:"Single",size:"small",variant:"light"})}}},{header:"Profile Progress",footer:"Profile Progress",accessorKey:"progress",cell:r=>e.jsx(C,{value:r.getValue(),sx:{minWidth:75}})}],[]);return e.jsx(u,{data:t,columns:o,title:"Dense Table"})};S.propTypes={getValue:l.func};export{S as default};
