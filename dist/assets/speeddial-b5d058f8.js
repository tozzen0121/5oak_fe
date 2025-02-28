import{be as F,bf as E,a3 as y,a0 as l,d5 as X,bg as N,r as a,bi as U,b3 as G,j as o,bn as W,a9 as Y,bo as Z,bd as ee,$ as D,c as I,M as z,F as S,ax as oe,ck as te,o as ne,q as T,B as b,d as _,d6 as ae,T as ie,G as C}from"./index-22c328f7.js";import{C as se}from"./ComponentHeader-c43235a9.js";import{C as le,a as ce}from"./ComponentSkeleton-c6eec1fd.js";import{S as O}from"./SpeedDial-feee8c21.js";import{F as re}from"./Fab-e8687457.js";import{S as M}from"./ShareAltOutlined-57e5f20b.js";import{E as pe}from"./EditOutlined-8b352285.js";import"./Skeleton-276ea468.js";function de(e){return E("MuiSpeedDialAction",e)}const me=F("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),he=me,ue=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],fe=e=>{const{open:t,tooltipPlacement:n,classes:i}=e,r={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip",`tooltipPlacement${N(n)}`,!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return Z(r,de,i)},xe=y(re,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.fab,!n.open&&t.fabClosed]}})(({theme:e,ownerState:t})=>l({margin:8,color:(e.vars||e).palette.text.secondary,backgroundColor:(e.vars||e).palette.background.paper,"&:hover":{backgroundColor:e.vars?e.vars.palette.SpeedDialAction.fabHoverBg:X(e.palette.background.paper,.15)},transition:`${e.transitions.create("transform",{duration:e.transitions.duration.shorter})}, opacity 0.8s`,opacity:1},!t.open&&{opacity:0,transform:"scale(0)"})),ge=y("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.staticTooltip,!n.open&&t.staticTooltipClosed,t[`tooltipPlacement${N(n.tooltipPlacement)}`]]}})(({theme:e,ownerState:t})=>({position:"relative",display:"flex",alignItems:"center",[`& .${he.staticTooltipLabel}`]:l({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.shorter}),opacity:1},!t.open&&{opacity:0,transform:"scale(0.5)"},t.tooltipPlacement==="left"&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},t.tooltipPlacement==="right"&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8})})),Se=y("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:(e,t)=>t.staticTooltipLabel})(({theme:e})=>l({position:"absolute"},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.paper,borderRadius:(e.vars||e).shape.borderRadius,boxShadow:(e.vars||e).shadows[1],color:(e.vars||e).palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})),be=a.forwardRef(function(t,n){const i=U({props:t,name:"MuiSpeedDialAction"}),{className:r,delay:d=0,FabProps:m={},icon:u,id:p,open:c,TooltipClasses:s,tooltipOpen:f=!1,tooltipPlacement:g="left",tooltipTitle:h}=i,$=G(i,ue),v=l({},i,{tooltipPlacement:g}),j=fe(v),[A,w]=a.useState(f),K=()=>{w(!1)},Q=()=>{w(!0)},B={transitionDelay:`${d}ms`},P=o.jsx(xe,l({size:"small",className:W(j.fab,r),tabIndex:-1,role:"menuitem",ownerState:v},m,{style:l({},B,m.style),children:u}));return f?o.jsxs(ge,l({id:p,ref:n,className:j.staticTooltip,ownerState:v},$,{children:[o.jsx(Se,{style:B,id:`${p}-label`,className:j.staticTooltipLabel,ownerState:v,children:h}),a.cloneElement(P,{"aria-labelledby":`${p}-label`})]})):(!c&&A&&w(!1),o.jsx(Y,l({id:p,ref:n,title:h,placement:g,onClose:K,onOpen:Q,open:c&&A,classes:s},$,{children:P})))}),k=be,ve=ee(o.jsx("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");function Te(e){return E("MuiSpeedDialIcon",e)}const Ce=F("MuiSpeedDialIcon",["root","icon","iconOpen","iconWithOpenIconOpen","openIcon","openIconOpen"]),x=Ce,ye=["className","icon","open","openIcon"],De=e=>{const{classes:t,open:n,openIcon:i}=e;return Z({root:["root"],icon:["icon",n&&"iconOpen",i&&n&&"iconWithOpenIconOpen"],openIcon:["openIcon",n&&"openIconOpen"]},Te,t)},je=y("span",{name:"MuiSpeedDialIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[{[`& .${x.icon}`]:t.icon},{[`& .${x.icon}`]:n.open&&t.iconOpen},{[`& .${x.icon}`]:n.open&&n.openIcon&&t.iconWithOpenIconOpen},{[`& .${x.openIcon}`]:t.openIcon},{[`& .${x.openIcon}`]:n.open&&t.openIconOpen},t.root]}})(({theme:e,ownerState:t})=>({height:24,[`& .${x.icon}`]:l({transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short})},t.open&&l({transform:"rotate(45deg)"},t.openIcon&&{opacity:0})),[`& .${x.openIcon}`]:l({position:"absolute",transition:e.transitions.create(["transform","opacity"],{duration:e.transitions.duration.short}),opacity:0,transform:"rotate(-45deg)"},t.open&&{transform:"rotate(0deg)",opacity:1})})),q=a.forwardRef(function(t,n){const i=U({props:t,name:"MuiSpeedDialIcon"}),{className:r,icon:d,openIcon:m}=i,u=G(i,ye),p=i,c=De(p);function s(f,g){return a.isValidElement(f)?a.cloneElement(f,{className:g}):f}return o.jsxs(je,l({className:W(c.root,r),ref:n,ownerState:p},u,{children:[m?s(m,c.openIcon):null,d?s(d,c.icon):o.jsx(ve,{className:c.icon})]}))});q.muiName="SpeedDialIcon";const H=q;var we={icon:function(t,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M232 706h142c22.1 0 40 17.9 40 40v142h250V264H232v442z",fill:n}},{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32z",fill:t}},{tag:"path",attrs:{d:"M704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z",fill:t}}]}},name:"copy",theme:"twotone"};const Ie=we;var ze=function(t,n){return a.createElement(D,l({},t,{ref:n,icon:Ie}))};const J=a.forwardRef(ze);var Oe={icon:function(t,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z",fill:t}},{tag:"path",attrs:{d:"M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5 0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201z",fill:n}}]}},name:"heart",theme:"twotone"};const Me=Oe;var ke=function(t,n){return a.createElement(D,l({},t,{ref:n,icon:Me}))};const L=a.forwardRef(ke);var He={icon:function(t,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 180h304v152H360zm492 220H172c-6.6 0-12 5.4-12 12v292h132V500h440v204h132V412c0-6.6-5.4-12-12-12zm-24 84c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v40z",fill:n}},{tag:"path",attrs:{d:"M852 332H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80zM360 180h304v152H360V180zm304 664H360V568h304v276zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v292z",fill:t}},{tag:"path",attrs:{d:"M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8z",fill:t}}]}},name:"printer",theme:"twotone"};const Le=He;var Re=function(t,n){return a.createElement(D,l({},t,{ref:n,icon:Le}))};const R=a.forwardRef(Re);var Ve={icon:function(t,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M704 320c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V184H184v656h656V341.8l-136-136V320zM512 730c-79.5 0-144-64.5-144-144s64.5-144 144-144 144 64.5 144 144-64.5 144-144 144z",fill:n}},{tag:"path",attrs:{d:"M512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z",fill:t}},{tag:"path",attrs:{d:"M893.3 293.3L730.7 130.7c-.7-.7-1.4-1.3-2.1-2-.1-.1-.3-.2-.4-.3-.7-.7-1.5-1.3-2.2-1.9a64 64 0 00-22-11.7V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840z",fill:t}}]}},name:"save",theme:"twotone"};const $e=Ve;var Ae=function(t,n){return a.createElement(D,l({},t,{ref:n,icon:$e}))};const V=a.forwardRef(Ae);function Be(){const e=I(),[t,n]=a.useState(!1),i=[{icon:o.jsx(V,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Save"},{icon:o.jsx(R,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Print"},{icon:o.jsx(M,{style:{color:e.palette.grey[600],fontSize:"1.15rem"}}),name:"Share"},{icon:o.jsx(L,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Like"}],r=()=>{n(!1)},d=()=>{n(!0)},[m,u]=a.useState("up"),p=h=>{u(h.target.value)},[c,s]=a.useState(!1),f=h=>{s(h.target.checked)},g=`<FormControlLabel control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary" />} label="Hidden" />
  <FormLabel component="legend">Direction</FormLabel>
  <RadioGroup sx={{ mt: 1 }} aria-label="direction" name="direction" value={direction} onChange={handleDirectionChange} row>
    <FormControlLabel value="up" control={<Radio />} label="Up" />
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <FormControlLabel value="right" control={<Radio />} label="Right" />
    </Box>
    <FormControlLabel value="down" control={<Radio />} label="Down" />
    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
      <FormControlLabel value="left" control={<Radio />} label="Left" />
    </Box>
  </RadioGroup>
  <Box sx={{ position: 'relative', marginTop: theme.spacing(3), height: 300 }}>
    <SpeedDial
      sx={{
        position: 'absolute',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
          bottom: theme.spacing(2),
          right: theme.spacing(2)
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
          top: theme.spacing(2),
          left: theme.spacing(2)
        }
      }}
      ariaLabel="SpeedDial example"
      hidden={hidden}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction={direction}
    >
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
      ))}
    </SpeedDial>
  </Box>`;return o.jsx(z,{title:"Basic",codeString:g,children:o.jsxs(o.Fragment,{children:[o.jsx(S,{control:o.jsx(oe,{checked:c,onChange:f,color:"primary"}),label:"Hidden"}),o.jsx(te,{component:"legend",children:"Direction"}),o.jsxs(ne,{sx:{mt:1},"aria-label":"direction",name:"direction",value:m,onChange:p,row:!0,children:[o.jsx(S,{value:"up",control:o.jsx(T,{}),label:"Up"}),o.jsx(b,{sx:{display:{xs:"none",sm:"block"}},children:o.jsx(S,{value:"right",control:o.jsx(T,{}),label:"Right"})}),o.jsx(S,{value:"down",control:o.jsx(T,{}),label:"Down"}),o.jsx(b,{sx:{display:{xs:"none",sm:"block"}},children:o.jsx(S,{value:"left",control:o.jsx(T,{}),label:"Left"})})]}),o.jsx(b,{sx:{position:"relative",marginTop:e.spacing(3),height:300},children:o.jsx(O,{sx:{position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:e.spacing(2),right:e.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:e.spacing(2),left:e.spacing(2)},"& .MuiSpeedDialAction-fab":{bgcolor:"secondary.200"}},ariaLabel:"SpeedDial example",hidden:c,icon:o.jsx(H,{}),onClose:r,onOpen:d,open:t,direction:m,children:i.map(h=>o.jsx(k,{icon:h.icon,tooltipTitle:h.name,onClick:r},h.name))})})]})})}function Pe(){const e=I(),t=[{icon:o.jsx(J,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Copy"},{icon:o.jsx(V,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Save"},{icon:o.jsx(R,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Print"},{icon:o.jsx(M,{style:{color:e.palette.grey[600],fontSize:"1.15rem"}}),name:"Share"},{icon:o.jsx(L,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Like"}],[n,i]=a.useState(!1),r=()=>{i(!0)},d=()=>{i(!1)},[m,u]=a.useState(!1),p=()=>{u(s=>!s)},c=`<Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
  <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
  <SpeedDial
    ariaLabel="SpeedDial openIcon example"
    hidden={hidden}
    icon={<SpeedDialIcon openIcon={<EditOutlined style={{ fontSize: '1.3rem' }} />} />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
  >
    {actions.map((action) => (
      <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={handleClose} />
    ))}
  </SpeedDial>
</Box>`;return o.jsx(z,{title:"Custom Close Icon",codeString:c,children:o.jsxs(b,{sx:{height:430,transform:"translateZ(0px)",flexGrow:1},children:[o.jsx(_,{onClick:p,children:"Toggle Speed Dial"}),o.jsx(O,{ariaLabel:"SpeedDial openIcon example",hidden:m,icon:o.jsx(H,{openIcon:o.jsx(pe,{style:{fontSize:"1.3rem"}})}),onClose:d,onOpen:r,open:n,sx:{position:"absolute",bottom:16,right:16,"& .MuiSpeedDialAction-fab":{bgcolor:"secondary.200"}},children:t.map(s=>o.jsx(k,{icon:s.icon,tooltipTitle:s.name,onClick:d},s.name))})]})})}function Fe(){const e=I(),[t,n]=a.useState(!1),i=[{icon:o.jsx(J,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Copy"},{icon:o.jsx(V,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Save"},{icon:o.jsx(R,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Print"},{icon:o.jsx(M,{style:{color:e.palette.grey[600],fontSize:"1.15rem"}}),name:"Share"},{icon:o.jsx(L,{twoToneColor:e.palette.grey[600],style:{fontSize:"1.15rem"}}),name:"Like"}],r=()=>{n(!0)},d=()=>{n(!1)},[m,u]=a.useState(!1),p=()=>{u(s=>!s)},c=`<Box sx={{ height: 430, transform: 'translateZ(0px)', flexGrow: 1 }}>
  <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
  <Backdrop open={open} />
  <SpeedDial
    ariaLabel="SpeedDial tooltip example"
    hidden={hidden}
    icon={<SpeedDialIcon />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    sx={{ position: 'absolute', bottom: 16, right: 16 }}
  >
    {actions.map((action) => (
      <SpeedDialAction
        key={action.name}
        icon={action.icon}
        tooltipTitle={<Typography variant="subtitle1">{action.name}</Typography>}
        tooltipOpen
        onClick={handleClose}
      />
    ))}
  </SpeedDial>
</Box>`;return o.jsx(z,{title:"Persistent Icon",codeString:c,children:o.jsxs(b,{sx:{height:430,transform:"translateZ(0px)",flexGrow:1},children:[o.jsx(_,{onClick:p,children:"Toggle Speed Dial"}),o.jsx(ae,{open:t}),o.jsx(O,{ariaLabel:"SpeedDial tooltip example",hidden:m,icon:o.jsx(H,{}),onClose:d,onOpen:r,open:t,sx:{position:"absolute",bottom:16,right:16,"& .MuiSpeedDialAction-fab":{bgcolor:"secondary.200"}},children:i.map(s=>o.jsx(k,{icon:s.icon,tooltipTitle:o.jsx(ie,{variant:"subtitle1",children:s.name}),tooltipOpen:!0,onClick:d},s.name))})]})})}const Je=()=>o.jsxs(le,{children:[o.jsx(se,{title:"Speed Dial",caption:"When pressed, a floating action button can display three to six related actions in the form of a speed dial.",directory:"src/pages/components-overview/speeddial",link:"https://mui.com/material-ui/react-speed-dial/"}),o.jsx(ce,{children:o.jsxs(C,{container:!0,spacing:3,children:[o.jsx(C,{item:!0,xs:12,lg:6,children:o.jsx(Be,{})}),o.jsx(C,{item:!0,xs:12,sm:6,lg:3,children:o.jsx(Pe,{})}),o.jsx(C,{item:!0,xs:12,sm:6,lg:3,children:o.jsx(Fe,{})})]})})]});export{Je as default};
