import{j as e,M as h,a3 as l}from"./index-22c328f7.js";import{header as p}from"./basic-08506288.js";import{C as x}from"./Filter-454bc8d8.js";import"./LinearWithLabel-b0b7ff5b.js";import{T as g,a as b,b as j}from"./TableContainer-de1f9420.js";import{T as f}from"./TableHead-9e7ad68b.js";import{T as o}from"./TableRow-26a6c0bb.js";import{T as u,t as i}from"./TableCell-97ce9cb3.js";import"./DownloadOutlined-eb6f53dd.js";import"./CaretUpOutlined-77b1b8be.js";import"./CaretDownOutlined-f659ab0d.js";import"./Pagination-b2be339d.js";import"./index-0f547e3f.js";import"./Checkbox-7b4c4348.js";import"./MinusOutlined-f3ddcfa6.js";const t=l(u)(({theme:r})=>({[`&.${i.head}`]:{backgroundColor:r.palette.common.black,color:r.palette.common.white},[`&.${i.body}`]:{fontSize:14}})),C=l(o)(({theme:r})=>({"&:nth-of-type(odd)":{backgroundColor:r.palette.action.hover},"&:last-of-type td, &:last-of-type th":{border:0}}));function a(r,n,c,d,m){return{name:r,calories:n,fat:c,carbs:d,protein:m}}const s=[a("Frozen yoghurt",159,6,24,4),a("Ice cream sandwich",237,9,37,4.3),a("Eclair",262,16,24,6),a("Cupcake",305,3.7,67,4.3),a("Gingerbread",356,16,49,3.9)];function H(){return e.jsx(h,{content:!1,title:"Customized Tables",secondary:e.jsx(x,{data:s,headers:p,filename:"customized-table-data.csv"}),children:e.jsx(g,{children:e.jsxs(b,{sx:{minWidth:320},"aria-label":"customized table",children:[e.jsx(f,{children:e.jsxs(o,{children:[e.jsx(t,{sx:{pl:3},children:"Dessert (100g serving)"}),e.jsx(t,{align:"right",children:"Calories"}),e.jsx(t,{align:"right",children:"Fat (g)"}),e.jsx(t,{align:"right",children:"Carbs (g)"}),e.jsx(t,{sx:{pr:3},align:"right",children:"Protein (g)"})]})}),e.jsx(j,{children:s.map(r=>e.jsxs(C,{hover:!0,children:[e.jsx(t,{sx:{pl:3},component:"th",scope:"row",children:r.name}),e.jsx(t,{align:"right",children:r.calories}),e.jsx(t,{align:"right",children:r.fat}),e.jsx(t,{align:"right",children:r.carbs}),e.jsx(t,{sx:{pr:3},align:"right",children:r.protein})]},r.name))})]})})})}export{H as default};
