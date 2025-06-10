import{r as s,$ as m,a0 as h,a3 as w,c as A,j as e,G as r,M as a,a5 as l,V as c,Y as z,d2 as I,B as T}from"./index-753a7d60.js";import{C as F}from"./ComponentHeader-34de432c.js";import{C as H,a as L}from"./ComponentSkeleton-437d0355.js";import{a as d}from"./avatar-6-26ba5fec.js";import{S as N}from"./SmileFilled-d17ffe6b.js";import{H as P}from"./HeartFilled-16497653.js";import"./Skeleton-12c184b4.js";var R={icon:function(t,o){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M292.7 840h438.6l24.2-512h-487z",fill:o}},{tag:"path",attrs:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z",fill:t}}]}},name:"delete",theme:"twotone"};const B=R;var M=function(t,o){return s.createElement(m,h({},t,{ref:o,icon:B}))};const E=s.forwardRef(M);var W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 01-12.7-6.5V353.7a8 8 0 0112.7-6.5L656.1 506a7.9 7.9 0 010 12.9z"}}]},name:"play-circle",theme:"filled"};const $=W;var V=function(t,o){return s.createElement(m,h({},t,{ref:o,icon:$}))};const q=s.forwardRef(V),p=w("li")(({theme:i})=>({margin:i.spacing(.5)}));p.displayName="ListItem";const U=()=>{const i=A(),[t,o]=s.useState([{key:0,label:"Angular"},{key:1,label:"jQuery"},{key:2,label:"Polymer"},{key:3,label:"React"},{key:4,label:"Vue.js"}]),b=n=>()=>{o(S=>S.filter(k=>k.key!==n.key))},x=`<Chip label="Default" />
<Chip label="Color" color="primary" />
<Chip label="Disabled" color="primary" disabled />
<Chip label="Clickable" color="primary" onClick={() => {}} />
<Chip label="Deletable" color="primary" onDelete={() => {}} />
<Chip avatar={<Avatar variant="rounded" alt="Natacha" src={avatar} />} label="Avatar" color="primary" />`,u=`<Chip label="Default" variant="outlined" />
<Chip label="Color" variant="outlined" color="primary" />
<Chip label="Disabled" variant="outlined" color="primary" disabled />
<Chip label="Clickable" variant="outlined" color="primary" onClick={() => {}} />
<Chip label="Deletable" variant="outlined" color="primary" onDelete={() => {}} />
<Chip
  variant="outlined"
  avatar={<Avatar variant="rounded" alt="Natacha" src={avatarDark} />}
  label="Avatar"
  color="primary"
/>`,j=`<Chip label="Default" variant="light" />
<Chip label="Color" variant="light" color="primary" />
<Chip label="Disabled" variant="light" color="primary" disabled />
<Chip label="Clickable" variant="light" color="primary" onClick={() => {}} />
<Chip label="Deletable" variant="light" color="primary" onDelete={() => {}} />
<Chip
  variant="light"
  avatar={<Avatar variant="rounded" alt="Natacha" src={avatarDark} />}
  label="Avatar"
  color="primary"
/>`,C=`<Chip label="Default" variant="combined" />
<Chip label="Color" variant="combined" color="primary" />
<Chip label="Disabled" variant="combined" color="primary" disabled />
<Chip label="Clickable" variant="combined" color="primary" onClick={() => {}} />
<Chip label="Deletable" variant="combined" color="primary" onDelete={() => {}} />
<Chip
  variant="combined"
  avatar={<Avatar variant="rounded" alt="Natacha" src={avatarDark} />}
  label="Avatar"
  color="primary"
/>`,v=`<Chip label="Default" onDelete={() => {}} color="error" />
<Chip
  label="Custom Icon"
  onDelete={() => {}}
  color="error"
  deleteIcon={<MinusSquareFilled style={{ fontSize: '1.15rem' }} />}
/>
<Chip
  variant="outlined"
  label="Custom Icon"
  onDelete={() => {}}
  color="error"
  deleteIcon={<DeleteTwoTone twoToneColor={theme.palette.error.main} style={{ fontSize: '1.15rem' }} />}
/>`,y=`<Chip color="secondary" variant="light" icon={<PlayCircleFilled />} label="Play" />
<Chip
  variant="combined"
  color="primary"
  avatar={<Avatar variant="rounded" alt="Natacha" src={avatarDark} />}
  label="Avatar"
/>
<Chip color="warning" variant="outlined" icon={<SmileFilled />} label="Smile" />
<Chip icon={<HeartFilled />} color="error" label="Like" />`,g=`<Chip color="primary" label="Small" size="small" />
<Chip color="primary" label="Default" />
<Chip color="primary" label="Large" size="large" />`,D=`<Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    border: '1px solid',
    borderColor: theme.palette.grey[300],
    borderRadius: 1,
    p: 0.5,
    m: 0
  }}
  component="ul"
>
  {chipData.map((data) => (
    <ListItem key={data.key}>
      <Chip
        size="small"
        variant="combined"
        label={data.label}
        onDelete={data.label === 'React' ? undefined : handleDelete(data)}
      />
    </ListItem>
  ))}
</Box>`,f=`<Chip label="Primary" color="primary" />
<Chip label="Secondary" color="secondary" />
<Chip label="Success" color="success" />
<Chip label="Warning" color="warning" />
<Chip label="Info" color="info" />
<Chip label="Error" color="error" />`;return e.jsxs(H,{children:[e.jsx(F,{title:"Chips",caption:"Chips are compact elements that represent an input, attribute, or action.",directory:"src/pages/components-overview/chips",link:"https://mui.com/material-ui/react-chip/"}),e.jsx(L,{children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Basic",codeHighlight:!0,codeString:x,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{label:"Default"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Color",color:"primary"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Disabled",color:"primary",disabled:!0})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Clickable",color:"primary",onClick:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Deletable",color:"primary",onDelete:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{avatar:e.jsx(c,{variant:"rounded",alt:"Natacha",src:z}),label:"Avatar",color:"primary"})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Outlined",codeString:u,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{label:"Default",variant:"outlined"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Color",variant:"outlined",color:"primary"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Disabled",variant:"outlined",color:"primary",disabled:!0})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Clickable",variant:"outlined",color:"primary",onClick:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Deletable",variant:"outlined",color:"primary",onDelete:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{variant:"outlined",avatar:e.jsx(c,{variant:"rounded",alt:"Natacha",src:d}),label:"Avatar",color:"primary"})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Lighter",codeString:j,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{label:"Default",variant:"light"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Color",variant:"light",color:"primary"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Disabled",variant:"light",color:"primary",disabled:!0})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Clickable",variant:"light",color:"primary",onClick:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Deletable",variant:"light",color:"primary",onDelete:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{variant:"light",avatar:e.jsx(c,{variant:"rounded",alt:"Natacha",src:d}),label:"Avatar",color:"primary"})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Combined",codeString:C,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{label:"Default",variant:"combined"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Color",variant:"combined",color:"primary"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Disabled",variant:"combined",color:"primary",disabled:!0})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Clickable",variant:"combined",color:"primary",onClick:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Deletable",variant:"combined",color:"primary",onDelete:()=>{}})}),e.jsx(r,{item:!0,children:e.jsx(l,{variant:"combined",avatar:e.jsx(c,{variant:"rounded",alt:"Natacha",src:d}),label:"Avatar",color:"primary"})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Deletable Icon",codeString:v,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{label:"Default",onDelete:()=>{},color:"error"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Custom Icon",onDelete:()=>{},color:"error",deleteIcon:e.jsx(I,{style:{fontSize:"1.15rem"}})})}),e.jsx(r,{item:!0,children:e.jsx(l,{variant:"outlined",label:"Custom Icon",onDelete:()=>{},color:"error",deleteIcon:e.jsx(E,{twoToneColor:i.palette.error.main,style:{fontSize:"1.15rem"}})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Avatar & Icon",codeString:y,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{color:"secondary",variant:"light",icon:e.jsx(q,{}),label:"Play"})}),e.jsx(r,{item:!0,children:e.jsx(l,{variant:"combined",color:"primary",avatar:e.jsx(c,{variant:"rounded",alt:"Natacha",src:d}),label:"Avatar"})}),e.jsx(r,{item:!0,children:e.jsx(l,{color:"warning",variant:"outlined",icon:e.jsx(N,{}),label:"Smile"})}),e.jsx(r,{item:!0,children:e.jsx(l,{icon:e.jsx(P,{}),color:"error",label:"Like"})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Size",codeString:g,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{color:"primary",label:"Small",size:"small"})}),e.jsx(r,{item:!0,children:e.jsx(l,{color:"primary",label:"Default"})}),e.jsx(r,{item:!0,children:e.jsx(l,{color:"primary",label:"Large",size:"large"})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Array",codeString:D,children:e.jsx(T,{sx:{display:"flex",flexWrap:"wrap",listStyle:"none",border:"1px solid",borderColor:i.palette.grey[300],borderRadius:1,p:.5,m:0},component:"ul",children:t.map(n=>e.jsx(p,{children:e.jsx(l,{size:"small",variant:"combined",label:n.label,onDelete:n.label==="React"?void 0:b(n)})},n.key))})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{title:"Color",codeString:f,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(l,{label:"Primary",color:"primary"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Secondary",color:"secondary"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Success",color:"success"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Warning",color:"warning"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Info",color:"info"})}),e.jsx(r,{item:!0,children:e.jsx(l,{label:"Error",color:"error"})})]})})})]})})]})};export{U as default};
