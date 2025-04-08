import{c as K,r as B,j as a,G as t,p as g,M as e,k as r,Y as l,aT as M,T as x,B as j,a6 as S,a9 as b}from"./index-0488e0de.js";import{C as F}from"./ComponentHeader-7519d118.js";import{C as q,a as P}from"./ComponentSkeleton-dcfb7096.js";import{a as n}from"./avatar-2-1a15928a.js";import{a as m}from"./avatar-3-41e23d55.js";import{a as A}from"./avatar-4-1f91ffd9.js";import{a as o}from"./avatar-5-b1789eeb.js";import{a as i}from"./avatar-6-26ba5fec.js";import{a as d}from"./avatar-7-9014aedd.js";import{a as v,b as h}from"./avatar-9-f7d8b79d.js";import{a as u}from"./avatar-10-a1a55996.js";import{v as Z}from"./vector-1-61cb6bc2.js";import{B as c}from"./Badge-9d8449ae.js";import{A as p}from"./AvatarGroup-2fb7867e.js";import{U as s}from"./UserOutlined-e62bf948.js";import{Z as E,a as V}from"./ZoomOutOutlined-f9b05ccb.js";import{P as Y}from"./PlusOutlined-7ce6047c.js";import{D as Q}from"./DatabaseFilled-7cd374a2.js";import{C as X}from"./CheckOutlined-51877923.js";import{W as _}from"./WarningFilled-ce0fd04f.js";import{I as $}from"./InfoCircleFilled-3ea02b30.js";import"./Skeleton-51fcc206.js";const T="/assets/vector-2-329e8e3c.png",aa="/assets/vector-3-897137e2.png",ra="/assets/vector-4-553eea34.png",Sa=()=>{const y=K(),[f,C]=B.useState(!1),[z,N]=B.useState(!1),U='<Avatar alt="Basic"><UserOutlined /></Avatar>',D=`<Avatar alt="Avatar 1" src="/src/assets/images/users/avatar-1.png" />
  <Avatar alt="Avatar 2" src="/src/assets/images/users/avatar-2.png" />
  <Avatar alt="Avatar 3" src="/src/assets/images/users/avatar-3.png" />
  <Avatar alt="Avatar 4" src="/src/assets/images/users/avatar-4.png" />`,O=`<Avatar><img alt="Natacha" src="/src/assets/images/users/vector-1.png" height={40} /></Avatar>
<Avatar><img alt="Natacha" src="/src/assets/images/users/vector-2.png" height={40} /></Avatar>
<Avatar><img alt="Natacha" src="/src/assets/images/users/vector-3.png" height={40} /></Avatar>
<Avatar><img alt="Natacha" src="/src/assets/images/users/vector-4.png" height={40} /></Avatar>`,k=`<Avatar alt="Natacha" size="sm">U</Avatar>
<Avatar color="error" alt="Natacha" size="sm">UI</Avatar>
<Avatar color="error" type="filled" alt="Natacha" size="sm">A</Avatar>`,w=`<Avatar alt="Natacha"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="rounded" type="combined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="square" type="filled"><UserOutlined /></Avatar>
<Avatar alt="Natacha">U</Avatar>
<Avatar alt="Natacha" variant="rounded" type="combined">U</Avatar>
<Avatar alt="Natacha" variant="square" type="filled">U</Avatar>`,W=`<Avatar alt="Natacha" type="outlined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="rounded" type="outlined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" variant="square" type="outlined"><UserOutlined /></Avatar>
<Avatar alt="Natacha" type="outlined">U</Avatar>
<Avatar alt="Natacha" variant="rounded" type="outlined">U</Avatar>
<Avatar alt="Natacha" variant="square" type="outlined">U</Avatar>`,G=`<Avatar alt="Natacha" size="sm" type="filled"><UserOutlined /></Avatar>
<Avatar alt="Natacha" size="sm" type="filled" color="success"><ZoomInOutlined /></Avatar>
<Avatar alt="Natacha" size="sm" type="filled" color="error"><ZoomOutOutlined /></Avatar>
<Avatar alt="Natacha" size="sm"><PlusOutlined /></Avatar>`,H=`<AvatarGroup max={4}>
  <Avatar alt="Trevor Henderson" src="/src/assets/images/users/avatar-5.png" />
  <Avatar alt="Jone Doe" src="/src/assets/images/users/avatar-6.png" />
  <Avatar alt="Lein Ket" src="/src/assets/images/users/avatar-7.png" />
  <Avatar alt="Stebin Ben" src="/src/assets/images/users/avatar-8.png" />
  <Avatar alt="Wungh Tend" src="/src/assets/images/users/avatar-9.png" />
  <Avatar alt="Trevor Das" src="/src/assets/images/users/avatar-10.png" />
</AvatarGroup>
<Box sx={{ width: 186 }}>
  <Tooltip
    open={show}
    placement="top-end"
    title={
      <AvatarGroup max={10}>
        <Avatar alt="Trevor Henderson" src="/src/assets/images/users/avatar-5.png" />
        <Avatar alt="Jone Doe" src="/src/assets/images/users/avatar-6.png" />
        <Avatar alt="Lein Ket" src="/src/assets/images/users/avatar-7.png" />
        <Avatar alt="Stebin Ben" src="/src/assets/images/users/avatar-8.png" />
        <Avatar alt="Wungh Tend" src="/src/assets/images/users/avatar-9.png" />
        <Avatar alt="Trevor Das" src="/src/assets/images/users/avatar-10.png" />
      </AvatarGroup>
    }
  >
    <AvatarGroup
      sx={{ '& .MuiAvatarGroup-avatar': { bgcolor: theme.palette.primary.main, cursor: 'pointer' } }}
      componentsProps={{
        additionalAvatar: {
          onMouseEnter: () => {
            setShow(true);
          },
          onMouseLeave: () => {
            setShow(false);
          }
        }
      }}
    >
      <Avatar alt="Remy Sharp" src="/src/assets/images/users/avatar-1.png" />
      <Avatar alt="Travis Howard" src="/src/assets/images/users/avatar-2.png" />
      <Avatar alt="Cindy Baker" src="/src/assets/images/users/avatar-3.png" />
      <Avatar alt="Agnes Walker" src="/src/assets/images/users/avatar-4.png" />
      <Avatar alt="Trevor Henderson" src="/src/assets/images/users/avatar-5.png" />
      <Avatar alt="Jone Doe" src="/src/assets/images/users/avatar-6.png" />
      <Avatar alt="Lein Ket" src="/src/assets/images/users/avatar-7.png" />
      <Avatar alt="Stebin Ben" src="/src/assets/images/users/avatar-8.png" />
      <Avatar alt="Wungh Tend" src="/src/assets/images/users/avatar-9.png" />
      <Avatar alt="Trevor Das" src="/src/assets/images/users/avatar-10.png" />
    </AvatarGroup>
  </Tooltip>
</Box>
<Box sx={{ width: 222 }}>
  <Tooltip
    open={open}
    placement="top-end"
    title={
      <AvatarGroup max={10}>
      <Avatar alt="Jone Doe" src="/src/assets/images/users/avatar-6.png" />
      <Avatar alt="Lein Ket" src="/src/assets/images/users/avatar-7.png" />
      <Avatar alt="Stebin Ben" src="/src/assets/images/users/avatar-8.png" />
      <Avatar alt="Wungh Tend" src="/src/assets/images/users/avatar-9.png" />
      <Avatar alt="Trevor Das" src="/src/assets/images/users/avatar-10.png" />
      </AvatarGroup>
    }
  >
    <AvatarGroup
      max={6}
      sx={{ '& .MuiAvatarGroup-avatar': { bgcolor: theme.palette.primary.main, cursor: 'pointer' } }}
      componentsProps={{
        additionalAvatar: {
          onClick: () => {
            setOpen(!open);
          }
        }
      }}
    >
      <Avatar alt="Remy Sharp" src="/src/assets/images/users/avatar-1.png" />
      <Avatar alt="Travis Howard" src="/src/assets/images/users/avatar-2.png" />
      <Avatar alt="Cindy Baker" src="/src/assets/images/users/avatar-3.png" />
      <Avatar alt="Agnes Walker" src="/src/assets/images/users/avatar-4.png" />
      <Avatar alt="Trevor Henderson" src="/src/assets/images/users/avatar-5.png" />
      <Avatar alt="Jone Doe" src="/src/assets/images/users/avatar-6.png" />
      <Avatar alt="Lein Ket" src="/src/assets/images/users/avatar-7.png" />
      <Avatar alt="Stebin Ben" src="/src/assets/images/users/avatar-8.png" />
      <Avatar alt="Wungh Tend" src="/src/assets/images/users/avatar-9.png" />
      <Avatar alt="Trevor Das" src="/src/assets/images/users/avatar-10.png" />
    </AvatarGroup>
  </Tooltip>
</Box>`,L=`<Badge badgeContent={4} color="error" overlap="circular">
  <Avatar alt="Natacha" type="filled" src="/src/assets/images/users/avatar-6.png" />
</Badge>
<Badge color="error" overlap="circular" variant="dot">
  <Avatar alt="Natacha" color="secondary" type="filled">
    <UserOutlined />
  </Avatar>
</Badge>
<Badge color="error" overlap="circular" variant="dot">
    <Avatar alt="Natacha" type="filled" src="/src/assets/images/users/avatar-2.png" />
</Badge>
<Badge color="error" overlap="circular" variant="dot">
  <Avatar alt="Natacha" type="outlined">
    U
  </Avatar>
</Badge>
<Badge color="error" overlap="circular" variant="dot">
  <Avatar>
    <img alt="Natacha" src="/src/assets/images/users/vector-2.png" width={40} />
  </Avatar>
</Badge>
<Badge color="success" variant="dot">
  <Avatar alt="Natacha" variant="rounded" type="filled" src="/src/assets/images/users/avatar-1.png" />
</Badge>
<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={<Avatar size="badge" alt="Remy Sharp" src="/src/assets/images/users/avatar-6.png" />}
>
<Avatar alt="Travis Howard" src="/src/assets/images/users/avatar-1.png" />
</Badge>`,R=`<Avatar size="xs" alt="Avatar 1" src="/src/assets/images/users/avatar-1.png" />
<Avatar size="xl" alt="Avatar 5" src="/src/assets/images/users/avatar-5.png" />
<Avatar size="lg" alt="Avatar 4" src="/src/assets/images/users/avatar-4.png" />
<Avatar size="md" alt="Avatar 3" src="/src/assets/images/users/avatar-3.png" />
<Avatar size="sm" alt="Avatar 2" src="/src/assets/images/users/avatar-2.png" />`,I=`<Avatar alt="Basic" type="filled"><UserOutlined /></Avatar>
<Avatar alt="Basic" type="filled" color="error"><DeleteFilled /></Avatar>
<Avatar alt="Basic" type="filled" color="info"><InfoCircleFilled /></Avatar>
<Avatar alt="Basic" type="filled" color="warning"><WarningFilled /></Avatar>
<Avatar alt="Basic" type="filled" color="success"><CheckOutlined /></Avatar>
<Avatar alt="Basic" type="filled" color="secondary"><DatabaseFilled /></Avatar>`,J=`<Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="filled">B</Avatar>
<Avatar src="/broken-image.jpg" color="error" />
<Avatar alt="Remy Sharp" src="/broken-image.jpg" color="error" type="outlined" />`;return a.jsxs(q,{children:[a.jsx(F,{title:"Avatar",caption:"Avatars are found throughout material design with uses in everything from tables to dialog menus.",directory:"src/pages/components-overview/avatars",link:"https://mui.com/material-ui/react-avatar/"}),a.jsx(P,{children:a.jsxs(t,{container:!0,spacing:3,children:[a.jsx(t,{item:!0,xs:12,lg:6,children:a.jsxs(g,{spacing:3,children:[a.jsx(e,{title:"Basic",codeHighlight:!0,codeString:U,children:a.jsx(r,{alt:"Basic",children:a.jsx(s,{})})}),a.jsx(e,{title:"Vector",codeString:O,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{children:a.jsx("img",{alt:"Natacha",src:Z,height:40})})}),a.jsx(t,{item:!0,children:a.jsx(r,{children:a.jsx("img",{alt:"Natacha",src:T,height:40})})}),a.jsx(t,{item:!0,children:a.jsx(r,{children:a.jsx("img",{alt:"Natacha",src:aa,height:40})})}),a.jsx(t,{item:!0,children:a.jsx(r,{children:a.jsx("img",{alt:"Natacha",src:ra,height:40})})})]})}),a.jsx(e,{title:"Variants",codeString:w,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"rounded",type:"combined",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"square",type:"filled",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",children:"U"})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"rounded",type:"combined",children:"U"})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"square",type:"filled",children:"U"})})]})}),a.jsx(e,{title:"Icon",codeString:G,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",size:"sm",type:"filled",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",size:"sm",type:"filled",color:"success",children:a.jsx(E,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",size:"sm",type:"filled",color:"error",children:a.jsx(V,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",size:"sm",children:a.jsx(Y,{})})})]})}),a.jsx(e,{title:"With Badge",codeString:L,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(c,{badgeContent:4,color:"error",overlap:"circular",children:a.jsx(r,{alt:"Natacha",type:"filled",src:i})})}),a.jsx(t,{item:!0,children:a.jsx(c,{color:"error",overlap:"circular",variant:"dot",children:a.jsx(r,{alt:"Natacha",color:"secondary",type:"filled",children:a.jsx(s,{})})})}),a.jsx(t,{item:!0,children:a.jsx(c,{color:"error",overlap:"circular",variant:"dot",children:a.jsx(r,{alt:"Natacha",type:"filled",src:n})})}),a.jsx(t,{item:!0,children:a.jsx(c,{color:"error",overlap:"circular",variant:"dot",children:a.jsx(r,{alt:"Natacha",type:"outlined",children:"U"})})}),a.jsx(t,{item:!0,children:a.jsx(c,{color:"error",overlap:"circular",variant:"dot",children:a.jsx(r,{children:a.jsx("img",{alt:"Natacha",src:T,width:40})})})}),a.jsx(t,{item:!0,children:a.jsx(c,{color:"success",variant:"dot",children:a.jsx(r,{alt:"Natacha",variant:"rounded",type:"filled",src:l})})}),a.jsx(t,{item:!0,children:a.jsx(c,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:a.jsx(r,{size:"badge",alt:"Remy Sharp",src:i}),children:a.jsx(r,{alt:"Travis Howard",src:l})})})]})}),a.jsx(e,{title:"Image",codeString:D,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Avatar 1",src:l})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Avatar 2",src:n})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Avatar 3",src:m})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Avatar 4",src:A})})]})}),a.jsx(e,{title:"Colors",codeString:I,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Basic",type:"filled",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Basic",type:"filled",color:"secondary",children:a.jsx(Q,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Basic",type:"filled",color:"success",children:a.jsx(X,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Basic",type:"filled",color:"warning",children:a.jsx(_,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Basic",type:"filled",color:"info",children:a.jsx($,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Basic",type:"filled",color:"error",children:a.jsx(M,{})})})]})})]})}),a.jsx(t,{item:!0,xs:12,lg:6,children:a.jsxs(g,{spacing:3,children:[a.jsx(e,{title:"Letter",codeString:k,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",size:"sm",children:"U"})}),a.jsx(t,{item:!0,children:a.jsx(r,{color:"error",alt:"Natacha",size:"sm",children:"UI"})}),a.jsx(t,{item:!0,children:a.jsx(r,{color:"error",type:"filled",alt:"Natacha",size:"sm",children:"A"})})]})}),a.jsx(e,{title:"Outlined",codeString:W,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",type:"outlined",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"rounded",type:"outlined",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"square",type:"outlined",children:a.jsx(s,{})})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",type:"outlined",children:"U"})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"rounded",type:"outlined",children:"U"})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Natacha",variant:"square",type:"outlined",children:"U"})})]})}),a.jsxs(e,{title:"Avatar Group",codeString:H,children:[a.jsxs(g,{spacing:2,children:[a.jsx(x,{variant:"subtitle1",children:"Default"}),a.jsx(j,{sx:{width:148},children:a.jsxs(p,{max:4,children:[a.jsx(r,{alt:"Trevor Henderson",src:o}),a.jsx(r,{alt:"Jone Doe",src:i}),a.jsx(r,{alt:"Lein Ket",src:d}),a.jsx(r,{alt:"Stebin Ben",src:v}),a.jsx(r,{alt:"Wungh Tend",src:h}),a.jsx(r,{alt:"Trevor Das",src:u})]})}),a.jsx(S,{sx:{my:2}}),a.jsx(x,{variant:"subtitle1",children:"On Hover"}),a.jsx(j,{sx:{width:186},children:a.jsx(b,{open:z,placement:"top-end",title:a.jsxs(p,{max:10,children:[a.jsx(r,{alt:"Trevor Henderson",src:o}),a.jsx(r,{alt:"Jone Doe",src:i}),a.jsx(r,{alt:"Lein Ket",src:d}),a.jsx(r,{alt:"Stebin Ben",src:v}),a.jsx(r,{alt:"Wungh Tend",src:h}),a.jsx(r,{alt:"Trevor Das",src:u})]}),children:a.jsxs(p,{sx:{"& .MuiAvatarGroup-avatar":{bgcolor:y.palette.primary.main,cursor:"pointer"}},componentsProps:{additionalAvatar:{onMouseEnter:()=>{N(!0)},onMouseLeave:()=>{N(!1)}}},children:[a.jsx(r,{alt:"Remy Sharp",src:l}),a.jsx(r,{alt:"Travis Howard",src:n}),a.jsx(r,{alt:"Cindy Baker",src:m}),a.jsx(r,{alt:"Agnes Walker",src:A}),a.jsx(r,{alt:"Trevor Henderson",src:o}),a.jsx(r,{alt:"Jone Doe",src:i}),a.jsx(r,{alt:"Lein Ket",src:d}),a.jsx(r,{alt:"Stebin Ben",src:v}),a.jsx(r,{alt:"Wungh Tend",src:h}),a.jsx(r,{alt:"Trevor Das",src:u})]})})})]}),a.jsx(S,{sx:{my:2}}),a.jsxs(g,{spacing:2,children:[a.jsx(x,{variant:"subtitle1",children:"On Click"}),a.jsx(j,{sx:{width:222},children:a.jsx(b,{open:f,placement:"top-end",title:a.jsxs(p,{max:10,children:[a.jsx(r,{alt:"Jone Doe",src:i}),a.jsx(r,{alt:"Lein Ket",src:d}),a.jsx(r,{alt:"Stebin Ben",src:v}),a.jsx(r,{alt:"Wungh Tend",src:h}),a.jsx(r,{alt:"Trevor Das",src:u})]}),children:a.jsxs(p,{max:6,sx:{"& .MuiAvatarGroup-avatar":{bgcolor:y.palette.primary.main,cursor:"pointer"}},componentsProps:{additionalAvatar:{onClick:()=>{C(!f)}}},children:[a.jsx(r,{alt:"Remy Sharp",src:l}),a.jsx(r,{alt:"Travis Howard",src:n}),a.jsx(r,{alt:"Cindy Baker",src:m}),a.jsx(r,{alt:"Agnes Walker",src:A}),a.jsx(r,{alt:"Trevor Henderson",src:o}),a.jsx(r,{alt:"Jone Doe",src:i}),a.jsx(r,{alt:"Lein Ket",src:d}),a.jsx(r,{alt:"Stebin Ben",src:v}),a.jsx(r,{alt:"Wungh Tend",src:h}),a.jsx(r,{alt:"Trevor Das",src:u})]})})})]})]}),a.jsx(e,{title:"Sizes",codeString:R,children:a.jsxs(t,{container:!0,spacing:1,alignItems:"center",children:[a.jsx(t,{item:!0,children:a.jsx(r,{size:"xs",alt:"Avatar 1",src:l})}),a.jsx(t,{item:!0,children:a.jsx(r,{size:"sm",alt:"Avatar 2",src:n})}),a.jsx(t,{item:!0,children:a.jsx(r,{size:"md",alt:"Avatar 3",src:m})}),a.jsx(t,{item:!0,children:a.jsx(r,{size:"xl",alt:"Avatar 5",src:o})}),a.jsx(t,{item:!0,children:a.jsx(r,{size:"xl",alt:"Avatar 6",src:i})})]})}),a.jsx(e,{title:"Fallbacks",codeString:J,children:a.jsxs(t,{container:!0,spacing:1,children:[a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Remy Sharp",src:"/broken-image.jpg",color:"error",type:"filled",children:"B"})}),a.jsx(t,{item:!0,children:a.jsx(r,{alt:"Remy Sharp",src:"/broken-image.jpg",color:"error",type:"outlined"})}),a.jsx(t,{item:!0,children:a.jsx(r,{src:"/broken-image.jpg",color:"error"})})]})})]})})]})})]})};export{Sa as default};
