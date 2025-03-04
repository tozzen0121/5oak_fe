import{r as s,j as e,G as r,M as i,T as y,k as n,p as g,d as x,F as O,ax as M}from"./index-339f3481.js";import{C as f}from"./ComponentHeader-aecff1e8.js";import{C as A,a as S}from"./ComponentSkeleton-cd219244.js";import{B as t}from"./Badge-b7c07c67.js";import{B as w}from"./ButtonGroup-1e69fd73.js";import{M as a}from"./MailOutlined-f5533a1f.js";import{U as d}from"./UserOutlined-142afa30.js";import{M as U}from"./MinusOutlined-3294283e.js";import{P as k}from"./PlusOutlined-edcef9ba.js";import"./Skeleton-86bb450a.js";const H=()=>{const[o,c]=s.useState(1),[l,h]=s.useState(!1),j=()=>{h(!l)},u=`<Badge badgeContent={4} color="primary"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="secondary"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="success"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="warning"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="info"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="error"><MailOutlined /></Badge>`,m=`<Badge badgeContent={4} color="primary" variant="light"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="secondary" variant="light"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="success" variant="light"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="warning" variant="light"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="info" variant="light"><MailOutlined /></Badge>
  <Badge badgeContent={4} color="error" variant="light"><MailOutlined /></Badge>`,B=`<Badge badgeContent={99} color="primary"><MailOutlined /></Badge>
  <Badge badgeContent={100} color="secondary"><MailOutlined /></Badge>
  <Badge badgeContent={1000} max={999} color="primary" variant="light"><MailOutlined /></Badge>
  <Badge badgeContent={99} color="secondary" variant="light"><MailOutlined /></Badge>
  <Badge badgeContent={99} color="error"><MailOutlined /></Badge>`,p=`<Badge color="primary" variant="dot"><MailOutlined /></Badge>
  <Badge color="secondary" variant="dot"><MailOutlined /></Badge>
  <Badge max={999} color="success" variant="dot"><MailOutlined /></Badge>
  <Badge color="warning" variant="dot"><MailOutlined /></Badge>
  <Badge color="info" variant="dot"><MailOutlined /></Badge>
  <Badge color="error" variant="dot"><Typography variant="h6">Typography</Typography></Badge>`,v=`<Badge badgeContent={9} color="primary">
    <MailOutlined />
  </Badge>
  <Badge color="primary" variant="dot">
    <MailOutlined />
  </Badge>
  <Badge
    badgeContent={9}
    color="primary"
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
  >
    <MailOutlined />
  </Badge>
  <Badge
    badgeContent={9}
    color="primary"
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left'
    }}
  >
    <MailOutlined />
  </Badge>
  <Badge
    badgeContent={99}
    color="primary"
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left'
    }}
  >
    <MailOutlined />
  </Badge>`,b=`<Badge color="error" overlap="circular" variant="dot">
    <AntAvatar alt="Basic">
      <UserOutlined />
    </AntAvatar>
  </Badge>
  <Badge color="error" variant="dot">
    <AntAvatar alt="Basic" variant="rounded" type="filled">
      <UserOutlined />
    </AntAvatar>
  </Badge>
  <Badge color="error" variant="dot">
    <AntAvatar alt="Basic" variant="square" type="outlined">
      <UserOutlined />
    </AntAvatar>
  </Badge>
  <Badge badgeContent=" " color="error" overlap="circular">
    <AntAvatar alt="Basic" type="outlined">
      U
    </AntAvatar>
  </Badge>
  <Badge badgeContent=" " color="error">
    <AntAvatar alt="Basic" variant="rounded" type="filled">
      U
    </AntAvatar>
  </Badge>
  <Badge badgeContent=" " color="error">
    <AntAvatar alt="Basic" variant="square" type="outlined">
      U
    </AntAvatar>
  </Badge>`,C=`<Badge color="primary" badgeContent={count}><MailOutlined /></Badge>
  <ButtonGroup>
    <Button
      aria-label="reduce"
      onClick={() => {
        setCount(Math.max(count - 1, 0));
      }}
    >
      <MinusOutlined />
    </Button>
    <Button
      aria-label="increase"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <PlusOutlined />
    </Button>
  </ButtonGroup>
  <Badge color="primary" variant="dot" invisible={invisible}><MailOutlined /></Badge>
  <FormControlLabel
    sx={{ color: 'text.primary' }}
    control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
    label="Show Badge"
    labelPlacement="start"
  />`;return e.jsxs(A,{children:[e.jsx(f,{title:"Badge",caption:"Badge generates a small badge to the top-right of its child(ren).",directory:"src/pages/components-overview/badges",link:"https://mui.com/material-ui/react-badge/"}),e.jsx(S,{children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(i,{title:"Basic",codeHighlight:!0,codeString:u,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"primary",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"secondary",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"success",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"warning",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"info",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"error",children:e.jsx(a,{})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(i,{title:"Light",codeString:m,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"primary",variant:"light",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"secondary",variant:"light",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"success",variant:"light",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"warning",variant:"light",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"info",variant:"light",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:4,color:"error",variant:"light",children:e.jsx(a,{})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(i,{title:"Maximmum Value",codeString:B,children:e.jsxs(r,{container:!0,spacing:4,children:[e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:99,color:"primary",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:100,color:"secondary",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:1e3,max:999,color:"primary",variant:"light",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:99,color:"secondary",variant:"light",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:99,color:"error",children:e.jsx(a,{})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(i,{title:"Dot Badges",codeString:p,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,children:e.jsx(t,{color:"primary",variant:"dot",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{color:"secondary",variant:"dot",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{max:999,color:"success",variant:"dot",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{color:"warning",variant:"dot",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{color:"info",variant:"dot",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{color:"error",variant:"dot",children:e.jsx(y,{variant:"h6",children:"Typography"})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(i,{title:"Alignment",codeString:v,children:e.jsxs(r,{container:!0,spacing:4,children:[e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:9,color:"primary",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{color:"primary",variant:"dot",children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:9,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:9,color:"primary",anchorOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(a,{})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:99,color:"primary",anchorOrigin:{vertical:"bottom",horizontal:"left"},children:e.jsx(a,{})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(i,{title:"Overlap",codeString:b,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,children:e.jsx(t,{color:"error",overlap:"circular",variant:"dot",children:e.jsx(n,{alt:"Basic",children:e.jsx(d,{})})})}),e.jsx(r,{item:!0,children:e.jsx(t,{color:"error",variant:"dot",children:e.jsx(n,{alt:"Basic",variant:"rounded",type:"filled",children:e.jsx(d,{})})})}),e.jsx(r,{item:!0,children:e.jsx(t,{color:"error",variant:"dot",children:e.jsx(n,{alt:"Basic",variant:"square",type:"outlined",children:e.jsx(d,{})})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:" ",color:"error",overlap:"circular",children:e.jsx(n,{alt:"Basic",type:"outlined",children:"U"})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:" ",color:"error",children:e.jsx(n,{alt:"Basic",variant:"rounded",type:"filled",children:"U"})})}),e.jsx(r,{item:!0,children:e.jsx(t,{badgeContent:" ",color:"error",children:e.jsx(n,{alt:"Basic",variant:"square",type:"outlined",children:"U"})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(i,{title:"Visibility",codeString:C,children:e.jsxs(r,{container:!0,spacing:2,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(g,{direction:"row",spacing:3,alignItems:"center",children:[e.jsx(t,{color:"primary",badgeContent:o,children:e.jsx(a,{})}),e.jsxs(w,{children:[e.jsx(x,{"aria-label":"reduce",onClick:()=>{c(Math.max(o-1,0))},children:e.jsx(U,{})}),e.jsx(x,{"aria-label":"increase",onClick:()=>{c(o+1)},children:e.jsx(k,{})})]})]})}),e.jsx(r,{item:!0,xs:12,children:e.jsxs(g,{direction:"row",spacing:3,alignItems:"center",children:[e.jsx(t,{color:"primary",variant:"dot",invisible:l,children:e.jsx(a,{})}),e.jsx(O,{sx:{color:"text.primary"},control:e.jsx(M,{checked:!l,onChange:j}),label:"Show Badge",labelPlacement:"start"})]})})]})})})]})})]})};export{H as default};
