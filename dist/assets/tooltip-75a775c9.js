import{a3 as p,j as t,a9 as n,P as x,c as F,B as P,ci as H,d3 as a,r as N,G as o,p as j,M as l,I as M,aT as $,d as e,T,aA as z,b9 as O,bE as V}from"./index-385486e1.js";import{C as E}from"./ComponentHeader-68d9f612.js";import{C as G,a as R}from"./ComponentSkeleton-5c04c834.js";import{F as Y}from"./Fab-e1594ee7.js";import{P as Z}from"./PlusOutlined-d18b31db.js";import"./Skeleton-81b92fc8.js";function q({color:i,theme:r,labelColor:s}){const u=H(r,i),{main:c,contrastText:m}=u;let h=i||"";return["primary","secondary","info","success","warning","error"].includes(h)?{[`& .${a.tooltip}`]:{backgroundColor:c,color:s||m},[`& .${a.arrow}`]:{color:c}}:{[`& .${a.tooltip}`]:{backgroundColor:h,color:s||m,boxShadow:r.shadows[1]},[`& .${a.arrow}`]:{color:h}}}const J=p(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}),{shouldForwardProp:i=>i!=="color"&&i!=="labelColor"})(({theme:i,color:r,labelColor:s})=>({...r&&q({color:r,theme:i,labelColor:s})}));function d({children:i,arrow:r=!0,labelColor:s="",...u}){const c=F();return t.jsx(P,{display:"flex",children:t.jsx(J,{arrow:r,...u,theme:c,labelColor:s,children:i})})}d.propTypes={children:x.element,arrow:x.bool,labelColor:x.string,rest:x.array};const g=p(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))(({theme:i})=>({[`& .${a.tooltip}`]:{backgroundColor:i.palette.common.white,color:"rgba(0, 0, 0, 0.87)",boxShadow:i.shadows[1],fontSize:11}}));g.displayName="LightTooltip";const B=p(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))(({theme:i})=>({[`& .${a.arrow}`]:{color:i.palette.secondary.dark},[`& .${a.tooltip}`]:{backgroundColor:i.palette.secondary.dark}}));B.displayName="BootstrapTooltip";const y=p(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))(({theme:i})=>({[`& .${a.tooltip}`]:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:i.typography.pxToRem(12),border:"1px solid #dadde9"}}));y.displayName="HtmlTooltip";const C=p(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))({[`& .${a.tooltip}`]:{maxWidth:500}});C.displayName="CustomWidthTooltip";const A=p(({className:i,...r})=>t.jsx(n,{...r,classes:{popper:i}}))({[`& .${a.tooltip}`]:{maxWidth:"none"}});A.displayName="NoMaxWidthTooltip";function ot(){const[i,r]=N.useState(!1),s=()=>{r(!1)},u=()=>{r(!0)},c=`
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.`,m=`<Tooltip title="Delete">
<IconButton aria-label="delete" size="large">
  <DeleteFilled />
</IconButton>
</Tooltip>
<Tooltip title="Add" aria-label="add">
<Fab color="primary" sx={{ m: 2 }}>
  <PlusOutlined />
</Fab>
</Tooltip>`,h=`<LightTooltip title="Add">
<Button>Light</Button>
</LightTooltip>
<BootstrapTooltip title="Add">
<Button>Bootstrap</Button>
</BootstrapTooltip>
<HtmlTooltip
title={
  <>
    <Typography color="inherit">Tooltip with HTML</Typography>
    <em>And here&apos;s</em>{' '}
    <Typography variant="subtitle1" component="span">
      some
    </Typography>{' '}
    <u>amazing content</u>. it&apos;s very engaging. Right?
  </>
}
>
<Button>HTML</Button>
</HtmlTooltip>`,v=`<Tooltip title="Add" arrow>
<Button>Arrow</Button>
</Tooltip>`,b=`<Tooltip title="Add" enterDelay={500} leaveDelay={200}>
<Button>[500ms, 200ms]</Button>
</Tooltip>`,f=`<Tooltip title="You Don't have permission to do this">
<span>
  <Button disabled>A Disabled Button</Button>
</span>
</Tooltip>`,S=`<Tooltip title="Add" disableInteractive>
<Button>Disable Interactive</Button>
</Tooltip>`,w=`<Tooltip disableFocusListener title="Add">
<Button>Hover or touch</Button>
</Tooltip>
<Tooltip disableFocusListener disableTouchListener title="Add">
<Button>Hover</Button>
</Tooltip>
<ClickAwayListener onClickAway={handleTooltipClose}>
<div>
  <Tooltip
    PopperProps={{
      disablePortal: true
    }}
    onClose={handleTooltipClose}
    open={open}
    disableFocusListener
    disableHoverListener
    disableTouchListener
    title="Add"
  >
    <Button onClick={handleTooltipOpen}>Click</Button>
  </Tooltip>
</div>
</ClickAwayListener>`,k=`<Tooltip title="Add">
<Button>Grow</Button>
</Tooltip>
<Tooltip TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} title="Add">
<Button>Fade</Button>
</Tooltip>
<Tooltip TransitionComponent={Zoom} title="Add">
<Button>Zoom</Button>
</Tooltip>`,L=`<Tooltip title={longText}>
<Button sx={{ m: 1 }}>Default Width [300px]</Button>
</Tooltip>
<CustomWidthTooltip title={longText}>
<Button sx={{ m: 1 }}>Custom Width [500px]</Button>
</CustomWidthTooltip>
<NoMaxWidthTooltip title={longText}>
<Button sx={{ m: 1 }}>No wrapping</Button>
</NoMaxWidthTooltip>`,I=`<Tooltip title="Add" placement="top-start">
<Button color="secondary" variant="outlined">
  top-start
</Button>
</Tooltip>
<Tooltip title="Add" placement="top">
<Button color="secondary" variant="outlined">
  top
</Button>
</Tooltip>
<Tooltip title="Add" placement="top-end">
<Button color="secondary" variant="outlined">
  top-end
</Button>
</Tooltip>
<Tooltip title="Add" placement="right-start">
<Button color="secondary" variant="outlined">
  right-start
</Button>
</Tooltip>
<Tooltip title="Add" placement="right">
<Button color="secondary" variant="outlined">
  right
</Button>
</Tooltip>
<Tooltip title="Add" placement="right-end">
<Button color="secondary" variant="outlined">
  right-end
</Button>
</Tooltip>
<Tooltip title="Add" placement="left-start">
<Button color="secondary" variant="outlined">
  left-start
</Button>
</Tooltip>
<Tooltip title="Add" placement="left">
<Button color="secondary" variant="outlined">
  left
</Button>
</Tooltip>
<Tooltip title="Add" placement="left-end">
<Button color="secondary" variant="outlined">
  left-end
</Button>
</Tooltip>
<Tooltip title="Add" placement="bottom-start">
<Button color="secondary" variant="outlined">
  bottom-start
</Button>
</Tooltip>
<Tooltip title="Add" placement="bottom">
<Button color="secondary" variant="outlined">
  bottom
</Button>
</Tooltip>
<Tooltip title="Add" placement="bottom-end">
<Button color="secondary" variant="outlined">
  bottom-end
</Button>
</Tooltip>`,W=`<CustomTooltip title="Add" color="primary">
  <Button color="primary" variant="outlined">
   primary
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="secondary">
  <Button color="secondary" variant="contained">
    Secondary
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="success">
  <Button color="success" variant="contained">
    Success
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="info">
  <Button color="info" variant="contained">
    Info
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="warning">
  <Button color="warning" variant="contained">
    Warning
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="error">
  <Button color="error" variant="contained">
    Error
  </Button>
</CustomTooltip>
`,D=`<CustomTooltip title="Add" color="#fff" bg="pink">
  <Button color="inherit" variant="outlined">
    pink
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="#fff">
  <Button color="inherit" variant="contained">
    Orange
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="#000">
  <Button color="inherit" variant="contained">
    Yellow
  </Button>
</CustomTooltip>
<CustomTooltip title="Add" color="white" labelColor='#000'>
  <Button color="inherit" variant="contained">
    Black/White
  </Button>
</CustomTooltip>
`;return t.jsxs(G,{children:[t.jsx(E,{title:"Tooltip",caption:"Tooltips display informative text when users hover over, focus on, or tap an element.",directory:"src/pages/components-overview/tooltip",link:"https://mui.com/material-ui/react-tooltip/"}),t.jsx(R,{children:t.jsxs(o,{container:!0,spacing:3,children:[t.jsx(o,{item:!0,xs:12,md:6,children:t.jsxs(j,{spacing:3,children:[t.jsx(l,{title:"Simple Tooltips",codeHighlight:!0,codeString:m,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Delete",children:t.jsx(M,{"aria-label":"delete",size:"large",children:t.jsx($,{})})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add","aria-label":"add",children:t.jsx(Y,{color:"primary",sx:{m:2},children:t.jsx(Z,{style:{fontSize:"1.3rem"}})})})})]})}),t.jsx(l,{title:"Customized Tooltip",codeString:h,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(g,{title:"Add",children:t.jsx(e,{children:"Light"})})}),t.jsx(o,{item:!0,children:t.jsx(B,{title:"Add",children:t.jsx(e,{children:"Bootstrap"})})}),t.jsx(o,{item:!0,children:t.jsx(y,{title:t.jsxs(t.Fragment,{children:[t.jsx(T,{color:"inherit",children:"Tooltip with HTML"}),t.jsx("em",{children:"And here's"})," ",t.jsx(T,{variant:"subtitle1",component:"span",children:"some"})," ",t.jsx("u",{children:"amazing content"}),". it's very engaging. Right?"]}),children:t.jsx(e,{children:"HTML"})})})]})}),t.jsx(l,{title:"Arrow Tooltips",codeString:v,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",arrow:!0,children:t.jsx(e,{children:"Arrow"})})})})}),t.jsx(l,{title:"Delay Tooltips",codeString:b,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",enterDelay:500,leaveDelay:200,children:t.jsx(e,{children:"[500ms, 200ms]"})})})})}),t.jsx(l,{title:"Disabled Tooltips",codeString:f,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"You Don't have permission to do this",children:t.jsx("span",{children:t.jsx(e,{disabled:!0,children:"A Disabled Button"})})})})})}),t.jsx(l,{title:"Disable Interactive Tooltips",codeString:S,children:t.jsx(o,{container:!0,spacing:1,alignItems:"center",children:t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",disableInteractive:!0,children:t.jsx(e,{children:"Disable Interactive"})})})})})]})}),t.jsx(o,{item:!0,xs:12,md:6,children:t.jsxs(j,{spacing:3,children:[t.jsx(l,{title:"Triggers/Controlled Tooltips",codeString:w,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{disableFocusListener:!0,title:"Add",children:t.jsx(e,{children:"Hover or touch"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{disableFocusListener:!0,disableTouchListener:!0,title:"Add",children:t.jsx(e,{children:"Hover"})})}),t.jsx(o,{item:!0,children:t.jsx(z,{onClickAway:s,children:t.jsx("div",{children:t.jsx(n,{PopperProps:{disablePortal:!0},onClose:s,open:i,disableFocusListener:!0,disableHoverListener:!0,disableTouchListener:!0,title:"Add",children:t.jsx(e,{onClick:u,children:"Click"})})})})})]})}),t.jsx(l,{title:"Transitions Tooltips",codeString:k,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",children:t.jsx(e,{children:"Grow"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{TransitionComponent:O,TransitionProps:{timeout:600},title:"Add",children:t.jsx(e,{children:"Fade"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{TransitionComponent:V,title:"Add",children:t.jsx(e,{children:"Zoom"})})})]})}),t.jsx(l,{title:"Variable Width Tooltips",codeString:L,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:c,children:t.jsx(e,{sx:{m:1},children:"Default Width [300px]"})})}),t.jsx(o,{item:!0,children:t.jsx(C,{title:c,children:t.jsx(e,{sx:{m:1},children:"Custom Width [500px]"})})}),t.jsx(o,{item:!0,children:t.jsx(A,{title:c,children:t.jsx(e,{sx:{m:1},children:"No wrapping"})})})]})}),t.jsx(l,{title:"Positioned Tooltips",codeString:I,children:t.jsxs(t.Fragment,{children:[t.jsxs(o,{container:!0,justifyContent:"center",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"top-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"top-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"top",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"top"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"top-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"top-end"})})})]}),t.jsxs(o,{container:!0,justifyContent:"center",sx:{my:1},children:[t.jsxs(o,{item:!0,xs:6,container:!0,alignItems:"flex-start",direction:"column",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"right-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"right-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"right",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"right"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"right-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"right-end"})})})]}),t.jsxs(o,{item:!0,xs:6,container:!0,alignItems:"flex-end",direction:"column",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"left-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"left-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"left",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"left"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"left-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"left-end"})})})]})]}),t.jsxs(o,{container:!0,justifyContent:"center",spacing:1,children:[t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"bottom-start",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"bottom-start"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"bottom",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"bottom"})})}),t.jsx(o,{item:!0,children:t.jsx(n,{title:"Add",placement:"bottom-end",children:t.jsx(e,{color:"secondary",variant:"outlined",children:"bottom-end"})})})]})]})}),t.jsx(l,{title:"Color Variant Tooltips",codeString:W,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"primary",children:t.jsx(e,{color:"primary",variant:"contained",children:"Primary"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"secondary",children:t.jsx(e,{color:"secondary",variant:"contained",children:"Secondary"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"success",children:t.jsx(e,{color:"success",variant:"contained",children:"Success"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"info",children:t.jsx(e,{color:"info",variant:"contained",children:"Info"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"warning",children:t.jsx(e,{color:"warning",variant:"contained",children:"Warning"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"error",children:t.jsx(e,{color:"error",variant:"contained",children:"error"})})})]})}),t.jsx(l,{title:"Custom Color Tooltips",codeString:D,children:t.jsxs(o,{container:!0,spacing:1,alignItems:"center",children:[t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"pink",labelColor:"#000",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"pink"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"orange",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"Orange"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"yellow",labelColor:"#000",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"Yellow"})})}),t.jsx(o,{item:!0,children:t.jsx(d,{title:"Add",color:"#fff",labelColor:"#000",children:t.jsx(e,{color:"inherit",variant:"outlined",children:"Black/white"})})})]})})]})})]})})]})}export{ot as default};
