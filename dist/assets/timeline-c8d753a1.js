import{r as m,$ as H,a0 as r,bf as v,be as S,bg as z,a3 as R,bi as I,b3 as O,j as e,bn as b,bo as M,T as C,bD as V,M as D,G as f}from"./index-4ec2acc9.js";import{C as k}from"./ComponentHeader-ef0a2d07.js";import{C as B,a as G}from"./ComponentSkeleton-8ac3d3ba.js";import{G as P}from"./GiftOutlined-07176b4b.js";import"./Skeleton-2744104e.js";var L={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M275 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm613 144H768c0-39.8-32.2-72-72-72H200c-39.8 0-72 32.2-72 72v248c0 3.4.2 6.7.7 9.9-.5 7-.7 14-.7 21.1 0 176.7 143.3 320 320 320 160.1 0 292.7-117.5 316.3-271H888c39.8 0 72-32.2 72-72V497c0-39.8-32.2-72-72-72zM696 681h-1.1c.7 7.6 1.1 15.2 1.1 23 0 137-111 248-248 248S200 841 200 704c0-7.8.4-15.4 1.1-23H200V425h496v256zm192-8H776V497h112v176zM613 281c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36zm-170 0c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36s-36 16.1-36 36v209c0 19.9 16.1 36 36 36z"}}]},name:"coffee",theme:"outlined"};const _=L;var W=function(n,t){return m.createElement(H,r({},n,{ref:t,icon:_}))};const q=m.forwardRef(W);var F={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 140H96c-17.7 0-32 14.3-32 32v496c0 17.7 14.3 32 32 32h380v112H304c-8.8 0-16 7.2-16 16v48c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-48c0-8.8-7.2-16-16-16H548V700h380c17.7 0 32-14.3 32-32V172c0-17.7-14.3-32-32-32zm-40 488H136V212h752v416z"}}]},name:"desktop",theme:"outlined"};const J=F;var K=function(n,t){return m.createElement(H,r({},n,{ref:t,icon:J}))};const Q=m.forwardRef(K);var X={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0011.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 00-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8zm752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 00-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8 4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8z"}}]},name:"retweet",theme:"outlined"};const Y=X;var Z=function(n,t){return m.createElement(H,r({},n,{ref:t,icon:Y}))};const ee=m.forwardRef(Z),ie=m.createContext({}),$=ie;function ne(i){return v("MuiTimeline",i)}S("MuiTimeline",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]);function y(i){return i==="alternate-reverse"?"positionAlternateReverse":`position${z(i)}`}const te=["position","className"],oe=i=>{const{position:n,classes:t}=i,o={root:["root",n&&y(n)]};return M(o,ne,t)},re=R("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:(i,n)=>{const{ownerState:t}=i;return[n.root,t.position&&n[y(t.position)]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),le=m.forwardRef(function(n,t){const o=I({props:n,name:"MuiTimeline"}),{position:p="right",className:u}=o,x=O(o,te),T=r({},o,{position:p}),h=oe(T),j=m.useMemo(()=>({position:p}),[p]);return e.jsx($.Provider,{value:j,children:e.jsx(re,r({className:b(h.root,u),ownerState:T,ref:t},x))})}),w=le;function se(i){return v("MuiTimelineConnector",i)}S("MuiTimelineConnector",["root"]);const ae=["className"],ce=i=>{const{classes:n}=i;return M({root:["root"]},se,n)},me=R("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:(i,n)=>n.root})(({theme:i})=>({width:2,backgroundColor:(i.vars||i).palette.grey[400],flexGrow:1})),pe=m.forwardRef(function(n,t){const o=I({props:n,name:"MuiTimelineConnector"}),{className:p}=o,u=O(o,ae),x=o,T=ce(x);return e.jsx(me,r({className:b(T.root,p),ownerState:x,ref:t},u))}),d=pe;function de(i){return v("MuiTimelineContent",i)}const Te=S("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),xe=Te,ue=["className"],he=i=>{const{position:n,classes:t}=i,o={root:["root",y(n)]};return M(o,de,t)},Ce=R(C,{name:"MuiTimelineContent",slot:"Root",overridesResolver:(i,n)=>{const{ownerState:t}=i;return[n.root,n[y(t.position)]]}})(({ownerState:i})=>r({flex:1,padding:"6px 16px",textAlign:"left"},i.position==="left"&&{textAlign:"right"})),je=m.forwardRef(function(n,t){const o=I({props:n,name:"MuiTimelineContent"}),{className:p}=o,u=O(o,ue),{position:x}=m.useContext($),T=r({},o,{position:x||"right"}),h=he(T);return e.jsx(Ce,r({component:"div",className:b(h.root,p),ownerState:T,ref:t},u))}),l=je;function ge(i){return v("MuiTimelineDot",i)}S("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);const ye=["className","color","variant"],fe=i=>{const{color:n,variant:t,classes:o}=i,p={root:["root",t,n!=="inherit"&&`${t}${z(n)}`]};return M(p,ge,o)},ve=R("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:(i,n)=>{const{ownerState:t}=i;return[n.root,n[t.color!=="inherit"&&`${t.variant}${z(t.color)}`],n[t.variant]]}})(({ownerState:i,theme:n})=>r({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(n.vars||n).shadows[1],margin:"11.5px 0"},i.variant==="filled"&&r({borderColor:"transparent"},i.color!=="inherit"&&r({},i.color==="grey"?{color:(n.vars||n).palette.grey[50],backgroundColor:(n.vars||n).palette.grey[400]}:{color:(n.vars||n).palette[i.color].contrastText,backgroundColor:(n.vars||n).palette[i.color].main})),i.variant==="outlined"&&r({boxShadow:"none",backgroundColor:"transparent"},i.color!=="inherit"&&r({},i.color==="grey"?{borderColor:(n.vars||n).palette.grey[400]}:{borderColor:(n.vars||n).palette[i.color].main})))),Se=m.forwardRef(function(n,t){const o=I({props:n,name:"MuiTimelineDot"}),{className:p,color:u="grey",variant:x="filled"}=o,T=O(o,ye),h=r({},o,{color:u,variant:x}),j=fe(h);return e.jsx(ve,r({className:b(j.root,p),ownerState:h,ref:t},T))}),s=Se;function Re(i){return v("MuiTimelineOppositeContent",i)}const Ie=S("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse"]),Oe=Ie,be=["className"],Me=i=>{const{position:n,classes:t}=i,o={root:["root",y(n)]};return M(o,Re,t)},De=R(C,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:(i,n)=>{const{ownerState:t}=i;return[n.root,n[y(t.position)]]}})(({ownerState:i})=>r({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},i.position==="left"&&{textAlign:"left"})),N=m.forwardRef(function(n,t){const o=I({props:n,name:"MuiTimelineOppositeContent"}),{className:p}=o,u=O(o,be),{position:x}=m.useContext($),T=r({},o,{position:x||"left"}),h=Me(T);return e.jsx(De,r({component:"div",className:b(h.root,p),ownerState:T,ref:t},u))});N.muiName="TimelineOppositeContent";const g=N;function we(i){return v("MuiTimelineItem",i)}S("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","positionAlternateReverse","missingOppositeContent"]);const $e=["position","className"],He=i=>{const{position:n,classes:t,hasOppositeContent:o}=i,p={root:["root",y(n),!o&&"missingOppositeContent"]};return M(p,we,t)},ze=R("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:(i,n)=>{const{ownerState:t}=i;return[n.root,n[y(t.position)]]}})(({ownerState:i})=>r({listStyle:"none",display:"flex",position:"relative",minHeight:70},i.position==="left"&&{flexDirection:"row-reverse"},(i.position==="alternate"||i.position==="alternate-reverse")&&{[`&:nth-of-type(${i.position==="alternate"?"even":"odd"})`]:{flexDirection:"row-reverse",[`& .${xe.root}`]:{textAlign:"right"},[`& .${Oe.root}`]:{textAlign:"left"}}},!i.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})),Ne=m.forwardRef(function(n,t){const o=I({props:n,name:"MuiTimelineItem"}),{position:p,className:u}=o,x=O(o,$e),{position:T}=m.useContext($);let h=!1;m.Children.forEach(o.children,U=>{V(U,["TimelineOppositeContent"])&&(h=!0)});const j=r({},o,{position:p||T||"right",hasOppositeContent:h}),E=He(j),A=m.useMemo(()=>({position:j.position}),[j.position]);return e.jsx($.Provider,{value:A,children:e.jsx(ze,r({className:b(E.root,u),ownerState:j,ref:t},x))})}),a=Ne;function Ee(i){return v("MuiTimelineSeparator",i)}S("MuiTimelineSeparator",["root"]);const Ae=["className"],Ue=i=>{const{classes:n}=i;return M({root:["root"]},Ee,n)},Ve=R("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:(i,n)=>n.root})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),ke=m.forwardRef(function(n,t){const o=I({props:n,name:"MuiTimelineSeparator"}),{className:p}=o,u=O(o,Ae),x=o,T=Ue(x);return e.jsx(Ve,r({className:b(T.root,p),ownerState:x,ref:t},u))}),c=ke;function Be(){const i=`<Timeline>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
</Timeline>`;return e.jsx(D,{title:"Basic",codeString:i,children:e.jsxs(w,{children:[e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Eat"})]}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Code"})]}),e.jsxs(a,{sx:{minHeight:"auto"},children:[e.jsx(c,{children:e.jsx(s,{variant:"outlined",color:"primary"})}),e.jsx(l,{children:"Sleep"})]})]})})}function Ge(){const i=`<Timeline position="left">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
</Timeline>`;return e.jsx(D,{title:"Left Positioned",codeString:i,children:e.jsxs(w,{position:"left",children:[e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Eat"})]}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Code"})]}),e.jsxs(a,{sx:{minHeight:"auto"},children:[e.jsx(c,{children:e.jsx(s,{variant:"outlined",color:"primary"})}),e.jsx(l,{children:"Sleep"})]})]})})}function Pe(){const i=`<Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
    </TimelineSeparator>
    <TimelineContent>Repeat</TimelineContent>
  </TimelineItem>
</Timeline>`;return e.jsx(D,{title:"Alternating Positioned",codeString:i,children:e.jsxs(w,{position:"alternate",children:[e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Eat"})]}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Code"})]}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Sleep"})]}),e.jsxs(a,{sx:{minHeight:"auto"},children:[e.jsx(c,{children:e.jsx(s,{variant:"outlined",color:"primary"})}),e.jsx(l,{children:"Repeat"})]})]})})}function Le(){const i=`<Timeline position="alternate">
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="success" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="warning" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="error" />
    </TimelineSeparator>
    <TimelineContent>Repeat</TimelineContent>
  </TimelineItem>
</Timeline>`;return e.jsx(D,{title:"Colors",codeString:i,children:e.jsxs(w,{position:"alternate",children:[e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Eat"})]}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"success"}),e.jsx(d,{})]}),e.jsx(l,{children:"Code"})]}),e.jsxs(a,{children:[e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"warning"}),e.jsx(d,{})]}),e.jsx(l,{children:"Sleep"})]}),e.jsxs(a,{sx:{minHeight:"auto"},children:[e.jsx(c,{children:e.jsx(s,{variant:"outlined",color:"error"})}),e.jsx(l,{children:"Repeat"})]})]})})}function _e(){const i=`<Timeline position="alternate">
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">09:30 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Eat</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">10:00 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Code</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent color="text.secondary">12:00 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Sleep</TimelineContent>
  </TimelineItem>
  <TimelineItem sx={{ minHeight: 'auto' }}>
    <TimelineOppositeContent color="text.secondary">9:00 am</TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot variant="outlined" color="primary" />
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Repeat</TimelineContent>
  </TimelineItem>
</Timeline>`;return e.jsx(D,{title:"Opposite Content",codeString:i,children:e.jsxs(w,{position:"alternate",children:[e.jsxs(a,{children:[e.jsx(g,{color:"text.secondary",children:"09:30 am"}),e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Eat"})]}),e.jsxs(a,{children:[e.jsx(g,{color:"text.secondary",children:"10:00 am"}),e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Code"})]}),e.jsxs(a,{children:[e.jsx(g,{color:"text.secondary",children:"12:00 am"}),e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Sleep"})]}),e.jsxs(a,{sx:{minHeight:"auto"},children:[e.jsx(g,{color:"text.secondary",children:"9:00 am"}),e.jsxs(c,{children:[e.jsx(s,{variant:"outlined",color:"primary"}),e.jsx(d,{})]}),e.jsx(l,{children:"Repeat"})]})]})})}function We(){const i=`<Timeline
  position="alternate"
  sx={{
    '& .MuiTimelineItem-root': { minHeight: 90 },
    '& .MuiTimelineOppositeContent-root': { mt: 0.5 },
    '& .MuiTimelineDot-root': {
      borderRadius: 1.25,
      boxShadow: 'none',
      margin: 0,
      ml: 1.25,
      mr: 1.25,
      p: 1,
      '& .MuiSvgIcon-root': { fontSize: '1.2rem' }
    },
    '& .MuiTimelineContent-root': { borderRadius: 1, bgcolor: 'secondary.lighter', height: '100%' },
    '& .MuiTimelineConnector-root': { border: '1px dashed', borderColor: 'secondary.light', bgcolor: 'transparent' }
  }}
>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      9:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'primary.main', bgcolor: 'primary.lighter' }}>
        <CoffeeOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Eat
      </Typography>
      <Typography color="textSecondary">Because you need strength</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent variant="body2" color="text.secondary">
      10:00 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'success.main', bgcolor: 'success.lighter' }}>
        <DesktopOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Code
      </Typography>
      <Typography color="textSecondary">Because it&apos;s awesome!</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      11:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'warning.main', bgcolor: 'warning.lighter' }}>
        <GiftOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Gift
      </Typography>
      <Typography color="textSecondary">Because you need.</Typography>
    </TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineOppositeContent align="right" variant="body2" color="text.secondary">
      12:30 am
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ color: 'error.main', bgcolor: 'error.lighter' }}>
        <RetweetOutlined style={{ fontSize: '1.3rem' }} />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Typography variant="h6" component="span">
        Repeat
      </Typography>
      <Typography color="textSecondary">This is the life you love!</Typography>
    </TimelineContent>
  </TimelineItem>
</Timeline>`;return e.jsx(D,{title:"Customized",codeString:i,children:e.jsxs(w,{position:"alternate",sx:{"& .MuiTimelineItem-root":{minHeight:90},"& .MuiTimelineOppositeContent-root":{mt:.5},"& .MuiTimelineDot-root":{borderRadius:1.25,boxShadow:"none",margin:0,ml:1.25,mr:1.25,p:1,"& .MuiSvgIcon-root":{fontSize:"1.2rem"}},"& .MuiTimelineContent-root":{borderRadius:1,bgcolor:"secondary.lighter",height:"100%"},"& .MuiTimelineConnector-root":{border:"1px dashed",borderColor:"secondary.light",bgcolor:"transparent"}},children:[e.jsxs(a,{children:[e.jsx(g,{align:"right",variant:"body2",color:"text.secondary",children:"9:30 am"}),e.jsxs(c,{children:[e.jsx(s,{sx:{color:"primary.main",bgcolor:"primary.lighter"},children:e.jsx(q,{style:{fontSize:"1.3rem"}})}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(C,{variant:"h6",component:"span",children:"Eat"}),e.jsx(C,{color:"textSecondary",children:"Because you need strength"})]})]}),e.jsxs(a,{children:[e.jsx(g,{variant:"body2",color:"text.secondary",children:"10:00 am"}),e.jsxs(c,{children:[e.jsx(s,{sx:{color:"success.main",bgcolor:"success.lighter"},children:e.jsx(Q,{style:{fontSize:"1.3rem"}})}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(C,{variant:"h6",component:"span",children:"Code"}),e.jsx(C,{color:"textSecondary",children:"Because it's awesome!"})]})]}),e.jsxs(a,{children:[e.jsx(g,{align:"right",variant:"body2",color:"text.secondary",children:"11:30 am"}),e.jsxs(c,{children:[e.jsx(s,{sx:{color:"warning.main",bgcolor:"warning.lighter"},children:e.jsx(P,{style:{fontSize:"1.3rem"}})}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(C,{variant:"h6",component:"span",children:"Gift"}),e.jsx(C,{color:"textSecondary",children:"Because you need."})]})]}),e.jsxs(a,{children:[e.jsx(g,{align:"right",variant:"body2",color:"text.secondary",children:"12:30 am"}),e.jsxs(c,{children:[e.jsx(s,{sx:{color:"error.main",bgcolor:"error.lighter"},children:e.jsx(ee,{style:{fontSize:"1.3rem"}})}),e.jsx(d,{})]}),e.jsxs(l,{children:[e.jsx(C,{variant:"h6",component:"span",children:"Repeat"}),e.jsx(C,{color:"textSecondary",children:"This is the life you love!"})]})]})]})})}const Xe=()=>e.jsxs(B,{children:[e.jsx(k,{title:"Timeline",caption:"The timeline displays a list of events in chronological order.",directory:"src/pages/components-overview/timeline",link:"https://mui.com/material-ui/react-timeline/"}),e.jsx(G,{children:e.jsxs(f,{container:!0,spacing:3,children:[e.jsx(f,{item:!0,xs:12,sm:6,children:e.jsx(Be,{})}),e.jsx(f,{item:!0,xs:12,sm:6,children:e.jsx(Ge,{})}),e.jsx(f,{item:!0,xs:12,sm:6,children:e.jsx(Pe,{})}),e.jsx(f,{item:!0,xs:12,sm:6,children:e.jsx(Le,{})}),e.jsx(f,{item:!0,xs:12,lg:6,children:e.jsx(_e,{})}),e.jsx(f,{item:!0,xs:12,lg:6,children:e.jsx(We,{})})]})})]});export{Xe as default};
