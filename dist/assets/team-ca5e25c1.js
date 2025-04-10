import{P as u,c as D,r as a,j as e,p as l,k as P,g as F,T as b,L as I,a9 as C,I as w,b8 as k,x as v,ac as A,t as O,M as B,d as H,B as T,a6 as L,ai as z}from"./index-753917f8.js";import{u as $,g as N,a as K,b as V,c as _,d as G,S as U,f as R}from"./ScrollX-8862e671.js";import{r as Q}from"./index-481cdf3e.js";import X from"./empty-16c5a0d2.js";import{D as q,S as J,R as W,H as Y,T as Z}from"./Filter-0d09368d.js";import"./LinearWithLabel-0b5c2d46.js";import"./CustomerModal-9b543230.js";import{E as ee}from"./ExpandingUserDetail-5c3f92b2.js";import{T as te,a as oe,b as se}from"./TableContainer-77c8ed45.js";import{T as ae}from"./TableHead-d6414b7e.js";import{T as S}from"./TableRow-d0f11552.js";import{T as y}from"./TableCell-c304432c.js";import{E as ne}from"./EditOutlined-4486d4bc.js";import{D as re}from"./DeleteOutlined-6d609190.js";import{P as le}from"./PlusOutlined-b2bb7c91.js";import"./TableFooter-861c0e3e.js";import"./DownloadOutlined-dbc769e8.js";import"./CaretUpOutlined-0b5dccae.js";import"./CaretDownOutlined-a37cf84e.js";import"./Pagination-ce75653e.js";import"./index-51520492.js";import"./Checkbox-b962259d.js";import"./MinusOutlined-4de8e98c.js";import"./react-number-format.es-e0d27b46.js";import"./MailOutlined-0e1cc98a.js";import"./PhoneOutlined-fe438d6d.js";import"./EnvironmentOutlined-2845981e.js";const ie=(m,i,d,g)=>{const r=Q(m.getValue(i),d);return g(r),r.passed};function M({data:m,columns:i,modalToggler:d}){const g=D(),r=A(g.breakpoints.down("sm")),[h,p]=a.useState([{id:"id",desc:!0}]),[c,j]=a.useState({}),[x,f]=a.useState(""),o=$({data:m,columns:i,state:{sorting:h,rowSelection:c,globalFilter:x},enableRowSelection:!0,onSortingChange:p,onRowSelectionChange:j,onGlobalFilterChange:f,getRowCanExpand:()=>!0,getSortedRowModel:N(),getFilteredRowModel:K(),getCoreRowModel:V(),getPaginationRowModel:_(),getExpandedRowModel:G(),globalFilterFn:ie,debugTable:!0}),n=O(g.palette.primary.lighter,.1);let E=[];return i.map(s=>s.accessorKey&&E.push({label:typeof s.header=="string"?s.header:"#",key:s.accessorKey})),e.jsxs(B,{content:!1,children:[e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",justifyContent:"space-between",sx:{padding:2,...r&&{"& .MuiOutlinedInput-root, & .MuiFormControl-root":{width:"100%"}}},children:[e.jsx(q,{value:x??"",onFilterChange:s=>f(String(s)),placeholder:`Search ${m.length} records...`}),e.jsxs(l,{direction:{xs:"column",sm:"row"},spacing:2,alignItems:"center",sx:{width:{xs:"100%",sm:"auto"}},children:[e.jsx(J,{getState:o.getState,getAllColumns:o.getAllColumns,setSorting:p}),e.jsx(l,{direction:"row",spacing:2,alignItems:"center",children:e.jsx(I,{to:"/admin/employee-create",children:e.jsx(H,{variant:"contained",startIcon:e.jsx(le,{}),onClick:d,children:"Add Employee"})})})]})]}),e.jsx(U,{children:e.jsxs(l,{children:[e.jsx(W,{selected:Object.keys(c).length}),e.jsx(te,{children:e.jsxs(oe,{children:[e.jsx(ae,{children:o.getHeaderGroups().map(s=>e.jsx(S,{children:s.headers.map(t=>(t.column.columnDef.meta!==void 0&&t.column.getCanSort()&&Object.assign(t.column.columnDef.meta,{className:t.column.columnDef.meta.className+" cursor-pointer prevent-select"}),e.jsx(y,{...t.column.columnDef.meta,onClick:t.column.getToggleSortingHandler(),...t.column.getCanSort()&&t.column.columnDef.meta===void 0&&{className:"cursor-pointer prevent-select"},children:t.isPlaceholder?null:e.jsxs(l,{direction:"row",spacing:1,alignItems:"center",children:[e.jsx(T,{children:R(t.column.columnDef.header,t.getContext())}),t.column.getCanSort()&&e.jsx(Y,{column:t.column})]})},t.id)))},s.id))}),e.jsx(se,{children:o.getRowModel().rows.map(s=>e.jsxs(a.Fragment,{children:[e.jsx(S,{children:s.getVisibleCells().map(t=>e.jsx(y,{...t.column.columnDef.meta,children:R(t.column.columnDef.cell,t.getContext())},t.id))}),s.getIsExpanded()&&e.jsx(S,{sx:{bgcolor:n,"&:hover":{bgcolor:`${n} !important`}},children:e.jsx(y,{colSpan:s.getVisibleCells().length,children:e.jsx(ee,{data:s.original})})})]},s.id))})]})}),e.jsxs(e.Fragment,{children:[e.jsx(L,{}),e.jsx(T,{sx:{p:2},children:e.jsx(Z,{setPageSize:o.setPageSize,setPageIndex:o.setPageIndex,getState:o.getState,getPageCount:o.getPageCount})})]})]})})]})}M.propTypes={columns:u.array,data:u.array,getHeaderProps:u.func,handleAdd:u.func,modalToggler:u.func,renderRowSubComponent:u.any};const Be=()=>{const m=D(),[i,d]=a.useState([]),[g,r]=a.useState(!1),[h,p]=a.useState(!1),[c,j]=a.useState(""),x=()=>{p(!h)};a.useEffect(()=>{(async()=>{try{r(!0);const{data:n}=await z("/api/employee");d(n),r(!1)}catch{r(!1)}})()},[]);const f=a.useMemo(()=>[{header:"Title",accessorKey:"name",cell:({row:o,getValue:n})=>e.jsxs(l,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(P,{alt:"Avatar 1",size:"sm",src:F(`${o.original.imagePath}`)}),e.jsxs(l,{spacing:0,children:[e.jsx(b,{variant:"subtitle1",children:n()}),e.jsx(b,{color:"text.secondary",children:o.original.email})]})]})},{header:"Actions",meta:{className:"cell-center"},disableSortBy:!0,cell:({row:o})=>e.jsxs(l,{direction:"row",alignItems:"center",justifyContent:"center",spacing:0,children:[e.jsx(I,{to:`/admin/employee-edit/${o.original._id}`,children:e.jsx(C,{title:"Edit",children:e.jsx(w,{color:"primary",children:e.jsx(ne,{})})})}),e.jsx(C,{title:"Delete",children:e.jsx(w,{color:"error",onClick:n=>{n.stopPropagation(),x(),p(!0),j(o.original._id)},children:e.jsx(re,{})})})]})}],[m]);return g?e.jsx(X,{}):e.jsxs(e.Fragment,{children:[e.jsx(M,{data:i,columns:f,modalToggler:()=>{}}),e.jsx(k,{id:c,title:c,open:h,handleClose:x,deletehandler:async()=>{try{await v.delete(`/api/employee/${c}`),d(i.filter(o=>o._id!==c)),p(!1),j("")}catch{}}})]})};export{Be as default,ie as fuzzyFilter};
