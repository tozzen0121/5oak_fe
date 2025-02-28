import{c as S,r as d,j as e,G as t,T as s,p as i,d as j,M as l,B as h,K as B,N as p,O as g,_ as k,Q as c,I as T,D as b}from"./index-22c328f7.js";import{A as o,U as M,O,S as z,M as R,R as D,I as L,a as $}from"./AcquisitionChannels-eef2669e.js";import{I as A,M as G}from"./MonthlyBarChart-40d6f5f3.js";import{S as U}from"./SalesChart-bc757658.js";import{T as W,a as y}from"./ToggleButtonGroup-cb30e0dd.js";import{C as q}from"./CaretDownOutlined-f659ab0d.js";import{D as E}from"./DownloadOutlined-eb6f53dd.js";import"./RiseOutlined-117f4919.js";import"./react-apexcharts.min-7924397a.js";import"./FileTextOutlined-bcd5bf26.js";import"./Checkbox-7b4c4348.js";const Q=[{value:"today",label:"Today"},{value:"month",label:"This Month"},{value:"year",label:"This Year"}],ee=()=>{const a=S(),[v,C]=d.useState("today"),[r,x]=d.useState("week"),[m,f]=d.useState("By volume"),I=n=>{f(n.target.value)},w=(n,u)=>{u&&x(u)};return e.jsxs(t,{container:!0,rowSpacing:4.5,columnSpacing:3,children:[e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsx(o,{title:"Total Users",count:"78,250",percentage:70.5,children:e.jsx(M,{})})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsx(o,{title:"Total Order",count:"18,800",percentage:27.4,isLoss:!0,color:"warning",children:e.jsx(O,{})})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsx(o,{title:"Total Sales",count:"$35,078",percentage:27.4,isLoss:!0,color:"warning",children:e.jsx(z,{})})}),e.jsx(t,{item:!0,xs:12,sm:6,md:4,lg:3,children:e.jsx(o,{title:"Total Marketing",count:"$1,12,083",percentage:70.5,children:e.jsx(R,{})})}),e.jsxs(t,{item:!0,xs:12,md:7,lg:8,children:[e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h5",children:"Unique Visitor"})}),e.jsx(t,{item:!0,children:e.jsxs(i,{direction:"row",alignItems:"center",spacing:0,children:[e.jsx(j,{size:"small",onClick:()=>x("month"),color:r==="month"?"primary":"secondary",variant:r==="month"?"outlined":"text",children:"Month"}),e.jsx(j,{size:"small",onClick:()=>x("week"),color:r==="week"?"primary":"secondary",variant:r==="week"?"outlined":"text",children:"Week"})]})})]}),e.jsx(l,{content:!1,sx:{mt:1.5},children:e.jsx(h,{sx:{pt:1,pr:2},children:e.jsx(A,{slot:r})})})]}),e.jsxs(t,{item:!0,xs:12,md:5,lg:4,children:[e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h5",children:"Income Overview"})}),e.jsx(t,{item:!0})]}),e.jsxs(l,{sx:{mt:2},content:!1,children:[e.jsx(h,{sx:{p:3,pb:0},children:e.jsxs(i,{spacing:2,children:[e.jsx(s,{variant:"h6",color:"textSecondary",children:"This Week Statistics"}),e.jsx(s,{variant:"h3",children:"$7,650"})]})}),e.jsx(G,{})]})]}),e.jsxs(t,{item:!0,xs:12,md:5,lg:4,children:[e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h5",children:"Analytics Report"})}),e.jsx(t,{item:!0})]}),e.jsxs(l,{sx:{mt:2},content:!1,children:[e.jsxs(B,{sx:{p:0,"& .MuiListItemButton-root":{py:1.25}},children:[e.jsxs(p,{divider:!0,children:[e.jsx(g,{primary:"Company Finance Growth"}),e.jsx(s,{variant:"h5",children:"+45.14%"})]}),e.jsxs(p,{divider:!0,children:[e.jsx(g,{primary:"Company Expenses Ratio"}),e.jsx(s,{variant:"h5",children:"0.58%"})]})]}),e.jsx(D,{})]})]}),e.jsxs(t,{item:!0,xs:12,md:7,lg:8,children:[e.jsx(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h5",children:"Income Overview"})})}),e.jsxs(l,{content:!1,sx:{mt:1.5},children:[e.jsx(t,{item:!0,children:e.jsxs(t,{container:!0,children:[e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsxs(i,{sx:{ml:2,mt:3},alignItems:{xs:"center",sm:"flex-start"},children:[e.jsxs(i,{direction:"row",alignItems:"center",children:[e.jsx(q,{style:{color:a.palette.error.main,paddingRight:"4px"}}),e.jsx(s,{color:a.palette.error.main,children:"$1,12,900 (45.67%)"})]}),e.jsx(s,{color:"textSecondary",sx:{display:"block"},children:"Compare to : 01 Dec 2021-08 Jan 2022"})]})}),e.jsx(t,{item:!0,xs:12,sm:6,children:e.jsxs(i,{direction:"row",spacing:1,alignItems:"center",justifyContent:{xs:"center",sm:"flex-end"},sx:{mt:3,mr:2},children:[e.jsxs(W,{exclusive:!0,onChange:w,size:"small",value:r,children:[e.jsx(y,{disabled:r==="week",value:"week",sx:{px:2,py:.5},children:"Week"}),e.jsx(y,{disabled:r==="month",value:"month",sx:{px:2,py:.5},children:"Month"})]}),e.jsxs(k,{value:m,onChange:I,size:"small",children:[e.jsx(c,{value:"By volume",children:"By Volume"}),e.jsx(c,{value:"By margin",children:"By Margin"}),e.jsx(c,{value:"By sales",children:"By Sales"})]}),e.jsx(T,{size:"small",sx:{border:`1px solid ${a.palette.grey[400]}`,"&:hover":{backgroundColor:"transparent"}},children:e.jsx(E,{style:{color:a.palette.grey[900]}})})]})})]})}),e.jsx(h,{sx:{pt:1},children:e.jsx(L,{slot:r,quantity:m})})]})]}),e.jsxs(t,{item:!0,xs:12,md:7,lg:8,children:[e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(s,{variant:"h5",children:"Sales Report"})}),e.jsx(t,{item:!0,children:e.jsx(b,{id:"standard-select-currency",size:"small",select:!0,value:v,onChange:n=>C(n.target.value),sx:{"& .MuiInputBase-input":{py:.75,fontSize:"0.875rem"}},children:Q.map(n=>e.jsx(c,{value:n.value,children:n.label},n.value))})})]}),e.jsx(U,{})]}),e.jsx(t,{item:!0,xs:12,md:5,lg:4,children:e.jsx($,{})})]})};export{ee as default};
