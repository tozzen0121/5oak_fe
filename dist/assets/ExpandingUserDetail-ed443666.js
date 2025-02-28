import{P as y,c as f,ac as v,j as s,G as i,M as x,a5 as b,p as n,k as I,g as P,T as e,a6 as c,K as j,a7 as l,ab as t,O as a,W as o,e as N}from"./index-22c328f7.js";import{P as m}from"./react-number-format.es-fc79171f.js";import{M as L}from"./MailOutlined-4eb101c1.js";import{P as M}from"./PhoneOutlined-96d2d83e.js";import{E as p}from"./EnvironmentOutlined-707697d0.js";const T=[{value:3,label:"Rejected"},{value:1,label:"Verified"},{value:2,label:"Pending"}],k=({data:r})=>{const u=f(),d=v(u.breakpoints.down("md")),h=T.filter(g=>g.value===Number(r.status));return s.jsxs(i,{container:!0,spacing:2.5,sx:{pl:{xs:0,sm:5,md:6,lg:10,xl:12}},children:[s.jsx(i,{item:!0,xs:12,sm:5,md:4,xl:3.5,children:s.jsxs(x,{children:[s.jsx(b,{label:h.length>0?h[0].label:"Pending",size:"small",sx:{position:"absolute",right:-1,top:-1,borderRadius:"0 4px 0 4px"}}),s.jsxs(i,{container:!0,spacing:3,children:[s.jsx(i,{item:!0,xs:12,children:s.jsxs(n,{spacing:2.5,alignItems:"center",children:[s.jsx(I,{alt:"Avatar 1",size:"xl",src:P(`avatar-${r.avatar}.png`)}),s.jsxs(n,{spacing:.5,alignItems:"center",children:[s.jsxs(e,{variant:"h5",children:[r.firstName," ",r.lastName]}),s.jsx(e,{color:"secondary",children:r.role})]})]})}),s.jsx(i,{item:!0,xs:12,children:s.jsx(c,{})}),s.jsx(i,{item:!0,xs:12,children:s.jsxs(n,{direction:"row",justifyContent:"space-around",alignItems:"center",children:[s.jsxs(n,{spacing:.5,alignItems:"center",children:[s.jsx(e,{variant:"h5",children:r.age}),s.jsx(e,{color:"secondary",children:"Age"})]}),s.jsx(c,{orientation:"vertical",flexItem:!0}),s.jsxs(n,{spacing:.5,alignItems:"center",children:[s.jsxs(e,{variant:"h5",children:[r.progress,"%"]}),s.jsx(e,{color:"secondary",children:"Progress"})]}),s.jsx(c,{orientation:"vertical",flexItem:!0}),s.jsxs(n,{spacing:.5,alignItems:"center",children:[s.jsx(e,{variant:"h5",children:r.visits}),s.jsx(e,{color:"secondary",children:"Visits"})]})]})}),s.jsx(i,{item:!0,xs:12,children:s.jsx(c,{})}),s.jsx(i,{item:!0,xs:12,children:s.jsxs(j,{component:"nav","aria-label":"main mailbox folders",sx:{py:0,"& .MuiListItem-root":{p:0}},children:[s.jsxs(l,{children:[s.jsx(t,{children:s.jsx(L,{})}),s.jsx(a,{primary:s.jsx(e,{color:"secondary",children:"Email"})}),s.jsx(o,{children:s.jsx(e,{align:"right",children:r.email})})]}),s.jsxs(l,{children:[s.jsx(t,{children:s.jsx(M,{})}),s.jsx(a,{primary:s.jsx(e,{color:"secondary",children:"Phone"})}),s.jsx(o,{children:s.jsx(e,{align:"right",children:s.jsx(m,{displayType:"text",format:"+1 (###) ###-####",mask:"_",defaultValue:r.contact})})})]}),s.jsxs(l,{children:[s.jsx(t,{children:s.jsx(p,{})}),s.jsx(a,{primary:s.jsx(e,{color:"secondary",children:"Location"})}),s.jsx(o,{children:s.jsx(e,{align:"right",children:r.country})})]}),s.jsxs(l,{children:[s.jsx(t,{children:s.jsx(p,{})}),s.jsx(a,{primary:s.jsx(e,{color:"secondary",children:"Portfolio"})}),s.jsx(o,{children:s.jsx(N,{align:"right",href:"https://google.com",target:"_blank",children:"https://anshan.dh.url"})})]})]})})]})]})}),s.jsx(i,{item:!0,xs:12,sm:7,md:8,xl:8.5,children:s.jsxs(n,{spacing:2.5,children:[s.jsx(x,{title:"Personal Details",children:s.jsxs(j,{sx:{py:0},children:[s.jsx(l,{divider:!d,children:s.jsxs(i,{container:!0,spacing:3,children:[s.jsx(i,{item:!0,xs:12,md:6,children:s.jsxs(n,{spacing:.5,children:[s.jsx(e,{color:"secondary",children:"Full Name"}),s.jsxs(e,{children:[r.firstName," ",r.lastName]})]})}),s.jsx(i,{item:!0,xs:12,md:6,children:s.jsxs(n,{spacing:.5,children:[s.jsx(e,{color:"secondary",children:"Father Name"}),s.jsxs(e,{children:["Mr. ",r.fatherName]})]})})]})}),s.jsx(l,{divider:!d,children:s.jsxs(i,{container:!0,spacing:3,children:[s.jsx(i,{item:!0,xs:12,md:6,children:s.jsxs(n,{spacing:.5,children:[s.jsx(e,{color:"secondary",children:"Country"}),s.jsx(e,{children:r.country})]})}),s.jsx(i,{item:!0,xs:12,md:6,children:s.jsxs(n,{spacing:.5,children:[s.jsx(e,{color:"secondary",children:"Zip Code"}),s.jsx(e,{children:s.jsx(m,{displayType:"text",format:"### ###",mask:"_",defaultValue:r.contact})})]})})]})}),s.jsx(l,{children:s.jsxs(n,{spacing:.5,children:[s.jsx(e,{color:"secondary",children:"Address"}),s.jsx(e,{children:r.address})]})})]})}),s.jsx(x,{title:"About me",children:s.jsxs(e,{color:"secondary",children:["Hello, I’m ",r.firstName," ",r.lastName," ",r.role," based in international company, ",r.about]})})]})})]})};k.propTypes={data:y.object};export{k as E};
