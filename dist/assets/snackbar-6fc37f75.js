import{j as e,M as u,G as n,d as t,cX as i,a3 as D,cY as O,r as g,cZ as S,a1 as z,cF as W,T as v,B as Y,bH as j,av as q,Z as I,aw as E,bX as R,P as C,c_ as P,p,ad as b,o as B,F as m,q as k,c$ as N,d0 as F,d1 as L,R as G,S as f,bE as V,b9 as H,bY as M,H as a}from"./index-9f92d9a5.js";import{C as U}from"./ComponentHeader-aaec553a.js";import{C as A,a as Z}from"./ComponentSkeleton-491754a5.js";import{C as $}from"./CheckCircleFilled-0d751d21.js";import{C as T}from"./Checkbox-007802b5.js";import{S as X}from"./Slider-d9886f3b.js";import{M as K}from"./MinusOutlined-d53db00f.js";import{P as _}from"./PlusOutlined-4a656733.js";import"./Skeleton-96df5298.js";import"./visuallyHidden-14c3de6e.js";function J(){const r=`<Button variant="contained" onClick={() =>enqueueSnackbar('This is default message.')}>
  Default
</Button>
<Button variant="contained" onClick={() =>enqueueSnackbar('his is success message', { variant: 'success' })}>
  success
</Button>
<Button variant="contained" onClick={() =>enqueueSnackbar('his is warning message', { variant: 'warning' })}>
  Warning
</Button>
<Button variant="contained" onClick={() =>enqueueSnackbar('his is info message', { variant: 'info' })}>
  Info
</Button>
<Button variant="contained" onClick={() =>enqueueSnackbar('his is error message', { variant: 'error' })}>
  Error
</Button>
`;return e.jsx(u,{title:"Color Variants",codeString:r,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>i("This is default message."),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>i("his is success message",{variant:"success"}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>i("This is warning message",{variant:"warning"}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>i("This is info message",{variant:"info"}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>i("This is info message",{variant:"error"}),children:"Error"})})]})})}const Q=D(O)(()=>({"@media (min-width:600px)":{minWidth:"344px !important"}})),w=g.forwardRef(({id:r,message:o},c)=>{const{closeSnackbar:s}=S(),[l,d]=g.useState(!1),h=g.useCallback(()=>{d(y=>!y)},[]),x=g.useCallback(()=>{s(r)},[r,s]);return e.jsx(Q,{ref:c,children:e.jsxs(z,{sx:{bgcolor:"warning.light",width:"100%"},children:[e.jsxs(W,{sx:{padding:"8px 8px 8px 16px",justifyContent:"space-between"},children:[e.jsx(v,{variant:"subtitle2",children:o}),e.jsxs(Y,{sx:{marginLeft:"auto"},children:[e.jsx(j,{"aria-label":"Show more",sx:{p:1,transition:"all .2s",transform:l?"rotate(180deg)":"rotate(0deg)"},onClick:h,children:e.jsx(q,{})}),e.jsx(j,{sx:{p:1,transition:"all .2s"},onClick:x,children:e.jsx(I,{})})]})]}),e.jsx(E,{in:l,timeout:"auto",unmountOnExit:!0,children:e.jsxs(R,{sx:{padding:2,borderTopLeftRadius:0,borderTopRightRadius:0,bgcolor:"warning.lighter"},children:[e.jsx(v,{gutterBottom:!0,children:"PDF ready"}),e.jsx(t,{size:"small",startIcon:e.jsx($,{style:{fontSize:16,marginTop:-2}}),sx:{"&:hover":{bgcolor:"transparent"}},children:"Download now"})]})})]})})});w.propTypes={id:C.number,message:C.string};function ee(){const r=`<Button
  variant="outlined"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() => {
   enqueueSnackbar("You're report is ready", {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      },
      content: (key, message) => <CustomNotistack id={key} message={message} />
    });
  }}
>
  Show snackbar
</Button>`;return e.jsx(u,{title:"Custom Component",codeString:r,children:e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{i("You're report is ready",{anchorOrigin:{vertical:"bottom",horizontal:"right"},content:(o,c)=>e.jsx(w,{id:o,message:c})})},children:"Show snackbar"})})}function ne(){const[r,o]=g.useState(!1),c=l=>{o(l.target.checked),P(l.target.checked)},s=`<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
Dense margins
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() =>enqueueSnackbar('Your notification here')}>
  Show snackbar
</Button>`;return e.jsxs(u,{title:"Dense",codeString:s,children:[e.jsx(T,{checked:r,onChange:c,inputProps:{"aria-label":"controlled"}}),"Dense margins",e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>i("Your notification here"),children:"Show snackbar"})]})}function te(){const{closeSnackbar:r}=S(),o=`<Button variant="outlined" 
  onClick={() =>enqueueSnackbar('No connection!', { variant: 'error',persist: true, anchorOrigin: { horizontal: 'center', vertical: 'bottom' }})}>
  Back Online
</Button>
<Button variant="outlined" fullWidth sx={{ marginBlockStart: 2 }} onClick={() => closeSnackbar()}>
    Back Online
</Button>`;return e.jsx(u,{title:"Dismiss Programmatically",codeString:o,children:e.jsxs(p,{flexDirection:"row",justifyContent:"space-between",children:[e.jsx(t,{variant:"outlined",fullWidth:!0,color:"error",sx:{marginBlockStart:2,marginInlineEnd:2},onClick:()=>i("No connection!",{variant:"error",persist:!0,anchorOrigin:{horizontal:"center",vertical:"bottom"}}),children:"Simulate connection loss"}),e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>r(),children:"Back Online"})]})})}function ae(){const[r,o]=g.useState(1),c=(h,x)=>{typeof x=="number"&&o(x)},s=[{value:1},{value:3},{value:5},{value:7},{value:9},{value:11}];function l(h){return h===11?"persist":`${h}s`}const d=`<Button
  variant="contained"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() => {
    if (value !== 11) {
     enqueueSnackbar('Your notification here', { autoHideDuration: value * 1000 });
    } else {
     enqueueSnackbar('Your notification here', { persist: true });
    }
  }}
>
  Show Snackbar
</Button>`;return e.jsxs(u,{title:"Hide Duration",codeString:d,children:[e.jsx(X,{value:r,min:1,step:2,max:11,valueLabelDisplay:"on",marks:s,getAriaValueText:l,valueLabelFormat:l,onChange:c}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{r!==11?i("Your notification here",{autoHideDuration:r*1e3}):i("Your notification here",{persist:!0})},children:"Show Snackbar"})]})}function re(){const[r,o]=g.useState("usedefault"),c=l=>{o(l.target.value)},s=`<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
 enqueueSnackbar('Your notification here', { variant: 'info' });
 handlerIconVariants(value);
}}
>
  Show Snackbar
</Button>`;return e.jsxs(u,{title:"With Icons",codeString:s,children:[e.jsx(b,{children:e.jsxs(B,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:r,onChange:c,name:"row-radio-buttons-group",children:[e.jsx(m,{value:"usedefault",control:e.jsx(k,{}),label:"Use Default"}),e.jsx(m,{value:"useemojis",control:e.jsx(k,{}),label:"Use Emojis"}),e.jsx(m,{value:"hide",control:e.jsx(k,{}),label:"Hide"})]})}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>{i("Your notification here",{variant:"info"}),N(r)},children:"Show Snackbar"})]})}function ie(){const r={minWidth:"auto"},{snackbar:o}=F(),[c,s]=g.useState(3),l=()=>{i("Your notification here"),L(c)},d=`<Button
variant="contained"
fullWidth
sx={{ marginBlockStart: 2 }}
onClick={() => {
 enqueueSnackbar('Your notification here');
 handlerIncrease(value);
}}
>
  Show Snackbar
</Button>`;return e.jsxs(u,{title:"Maximum snackbars",codeString:d,children:[e.jsxs(p,{justifyContent:"space-between",flexDirection:"row",children:[e.jsx(t,{variant:"outlined",size:"small",sx:r,disabled:o.maxStack===0,onClick:()=>s(h=>h-1),children:e.jsx(K,{})}),e.jsxs(v,{variant:"body1",children:["stack up to ",c]}),e.jsx(t,{variant:"outlined",size:"small",sx:r,disabled:o.maxStack===4,onClick:()=>s(h=>h+1),children:e.jsx(_,{})})]}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>l(),children:"Show Snackbar"})]})}function oe(){const r=`<Button
  variant="contained"
  onClick={() =>
   enqueueSnackbar('This is default message.', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'left'
      }
    })
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
   enqueueSnackbar('his is success message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    })
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
   enqueueSnackbar('This is warning message', {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    })
  }
>
  Top-right
</Button>
<Button
  variant="contained"
  onClick={() =>
   enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      }
    })
  }
>
  Bottom-left
</Button>
<Button
  variant="contained"
  onClick={() =>
   enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      }
    })
  }
>
  Bottom-center
</Button>
<Button
  variant="contained"
  onClick={() =>
   enqueueSnackbar('This is info message', {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }
    })
  }
>
  Bottom-Right
</Button>`;return e.jsx(u,{title:"Positioning",codeString:r,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>i("This is default message.",{anchorOrigin:{vertical:"top",horizontal:"left"}}),children:"Top-Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>i("his is success message",{anchorOrigin:{vertical:"top",horizontal:"center"}}),children:"Top-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>i("This is warning message",{anchorOrigin:{vertical:"top",horizontal:"right"}}),children:"Top-right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>i("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"left"}}),children:"Bottom-left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>i("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"center"}}),children:"Bottom-center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>i("This is info message",{anchorOrigin:{vertical:"bottom",horizontal:"right"}}),children:"Bottom-Right"})})]})})}function se(){const[r,o]=G.useState(!0),c=l=>{o(l.target.checked)},s=`<Button
  variant="outlined"
  fullWidth
  sx={{ marginBlockStart: 2 }}
  onClick={() =>
   enqueueSnackbar('You only see me once.', {
      preventDuplicate: checked ? true : false
    })
  }
>
  Show snackbar
</Button>`;return e.jsx(u,{title:"Prevent Duplicate",codeString:s,children:e.jsxs(p,{flexDirection:"row",gap:1,justifyContent:"center",alignItems:"center",flexWrap:"wrap",children:[e.jsx(T,{checked:r,onChange:c,inputProps:{"aria-label":"controlled"}}),"Prevent duplicate",e.jsx(t,{variant:"outlined",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>i("You only see me once.",{preventDuplicate:!!r}),children:"Show snackbar"})]})})}function ce(){const{closeSnackbar:r}=S(),o=s=>e.jsxs(p,{direction:"row",spacing:.5,children:[e.jsx(t,{size:"small",color:"error",variant:"contained",onClick:()=>{alert(`I belong to snackbar with id ${s}`)},children:"Undo"}),e.jsx(t,{size:"small",color:"secondary",variant:"contained",onClick:()=>r(s),children:"Dismiss"})]}),c=`const actionTask = (snackbarId: SnackbarKey) => (
  <>
    <Button
      variant="text"
      onClick={() => {
        alert("I belong to snackbar with id {snackbarId}");
      }}
    >
      Undo
    </Button>
    <Button variant="text" onClick={() => closeSnackbar(snackbarId)}>
      Dismiss
    </Button>
  </>
);
<Button variant="outlined" onClick={() =>enqueueSnackbar('Your notification here', { action: (key) => actionTask(key) })}>
 Show Snackbar
</Button>`;return e.jsx(u,{title:"With Action",codeString:c,children:e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>i("Your notification here",{action:s=>o(s)}),children:"Show Snackbar"})})}function le(){const[r,o]=g.useState("slide"),c=d=>{o(d.target.value)},s=()=>{switch(r){case"slide":i("Your notification here",{TransitionComponent:f});break;case"grow":i("Your notification here",{TransitionComponent:M});break;case"fade":i("Your notification here",{TransitionComponent:H});break;case"zoom":i("Your notification here",{TransitionComponent:V});break;default:i("Your notification here",{TransitionComponent:f});break}},l=`<Button variant="contained" 
  onClick={() =>enqueueSnackbar('Your notification here', { TransitionComponent: Slide })>
  Slide
</Button>
<Button variant="contained" 
  onClick={() =>enqueueSnackbar('Your notification here', { TransitionComponent: Grow })>
  Grow
</Button>
<Button variant="contained" 
  onClick={() =>enqueueSnackbar('Your notification here', { TransitionComponent: Fade })>
  Fade
</Button>
<Button variant="contained" 
  onClick={() =>enqueueSnackbar('Your notification here', { TransitionComponent: Zoom })>
  Zoom
</Button>`;return e.jsxs(u,{title:"Animation",codeString:l,children:[e.jsx(b,{children:e.jsxs(B,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",value:r,onChange:c,name:"row-radio-buttons-group",children:[e.jsx(m,{value:"slide",control:e.jsx(k,{}),label:"Slide"}),e.jsx(m,{value:"grow",control:e.jsx(k,{}),label:"Grow"}),e.jsx(m,{value:"fade",control:e.jsx(k,{}),label:"Fade"}),e.jsx(m,{value:"zoom",control:e.jsx(k,{}),label:"Zoom"})]})}),e.jsx(t,{variant:"contained",fullWidth:!0,sx:{marginBlockStart:2},onClick:()=>s(),children:"Show Snackbar"})]})}const je=()=>{const r=`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
    });
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
    });
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
    });
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
    });
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
    });
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
    });
  }
>
  Error
</Button>`,o=`<Button
  variant="outlined"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      alert: {
        variant: 'outlined'
      },
    });
  }
>
  Default
</Button>
<Button
  variant="outlined"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'secondary'
      },
    });
  }
>
  Secondary
</Button>
<Button
  variant="outlined"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'success'
      },
    });
  }
>
  Success
</Button>
<Button
  variant="outlined"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'warning'
      },
    });
  }
>
  Warning
</Button>
<Button
  variant="outlined"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'info'
      },
    });
  }
>
  Info
</Button>
<Button
  variant="outlined"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        variant: 'outlined',
        color: 'error'
      },
    });
  }
>
  Error
</Button>`,c=`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      close: true
    });
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      close: true
    });
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      close: true
    });
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      close: true
    });
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      close: true
    });
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      close: true
    });
  }
>
  Error
</Button>`,s=`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is default message',
      variant: 'alert',
      actionButton: true,
      close: true
    });
  }
>
  Default
</Button>
<Button
  variant="contained"
  color="secondary"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is secondary message',
      variant: 'alert',
      alert: { color: 'secondary' },
      actionButton: true,
      close: true
    });
  }
>
  Secondary
</Button>
<Button
  variant="contained"
  color="success"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is success message',
      variant: 'alert',
      alert: {
        color: 'success'
      },
      actionButton: true,
      close: true
    });
  }
>
  Success
</Button>
<Button
  variant="contained"
  color="warning"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is warning message',
      variant: 'alert',
      alert: {
        color: 'warning'
      },
      actionButton: true,
      close: true
    });
  }
>
  Warning
</Button>
<Button
  variant="contained"
  color="info"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is info message',
      variant: 'alert',
      alert: {
        color: 'info'
      },
      actionButton: true,
      close: true
    });
  }
>
  Info
</Button>
<Button
  variant="contained"
  color="error"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is error message',
      variant: 'alert',
      alert: {
        color: 'error'
      },
      actionButton: true,
      close: true
    });
  }
>
  Error
</Button>`,l=`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'left' },
      message: 'This is an top-left message!',
      close: true
    });
  }
>
  Top-Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
      message: 'This is an top-center message!',
      close: true
    });
  }
>
  Top-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'top', horizontal: 'right' },
      message: 'This is an top-right message!',
      close: true
    });
  }
>
  Top-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      message: 'This is an bottom-right message!',
      close: true
    });
  }
>
  Bottom-Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
      message: 'This is an bottom-center message!',
      close: true
    });
  }
>
  Bottom-Center
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
      message: 'This is an bottom-left message!',
      close: true
    });
  }
>
  Bottom-Left
</Button>`,d=`<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an fade message!',
      transition: 'Fade',
      close: true
    });
  }
>
  Default/Fade
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-left message!',
      transition: 'SlideLeft',
      close: true
    });
  }
>
  Slide Left
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-up message!',
      transition: 'SlideUp',
      close: true
    });
  }
>
  Slide Up
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-right message!',
      transition: 'SlideRight',
      close: true
    });
  }
>
  Slide Right
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an slide-down message!',
      transition: 'SlideDown',
      close: true
    });
  }
>
  Slide Down
</Button>
<Button
  variant="contained"
  onClick={() =>
    openSnackbar({
      open: true,
      message: 'This is an grow message!',
      transition: 'Grow',
      close: true
    });
  }
>
  Grow
</Button>`;return e.jsxs(A,{children:[e.jsx(U,{title:"Snackbar",caption:"Snackbars provide brief notifications. The component is also known as a toast.",directory:"src/pages/components-overview/snackbar",link:"https://mui.com/material-ui/react-snackbar/"}),e.jsx(Z,{children:e.jsxs(n,{container:!0,spacing:3,children:[e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(u,{title:"Basic",codeString:r,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is default message",variant:"alert"}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{color:"secondary"}}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"}}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"}}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{color:"info"}}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"}}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(u,{title:"Outlined",codeString:o,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",alert:{variant:"outlined"}}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{variant:"outlined",color:"secondary"}}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{variant:"outlined",color:"success"}}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{variant:"outlined",color:"warning"}}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{variant:"outlined",color:"info"}}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{variant:"outlined",color:"error"}}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(u,{title:"With Close",codeString:c,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",close:!0}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{color:"secondary"},close:!0}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{color:"success"},close:!0}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{color:"warning"},close:!0}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{color:"info"},close:!0}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{color:"error"},close:!0}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(u,{title:"With Close + Action",codeString:s,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",onClick:()=>a({open:!0,message:"This is default message",variant:"alert",alert:{variant:"outlined"},actionButton:!0,close:!0}),children:"Default"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"secondary",onClick:()=>a({open:!0,message:"This is secondary message",variant:"alert",alert:{variant:"outlined",color:"secondary"},actionButton:!0,close:!0}),children:"Secondary"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"success",onClick:()=>a({open:!0,message:"This is success message",variant:"alert",alert:{variant:"outlined",color:"success"},actionButton:!0,close:!0}),children:"Success"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"warning",onClick:()=>a({open:!0,message:"This is warning message",variant:"alert",alert:{variant:"outlined",color:"warning"},actionButton:!0,close:!0}),children:"Warning"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"info",onClick:()=>a({open:!0,message:"This is info message",variant:"alert",alert:{variant:"outlined",color:"info"},actionButton:!0,close:!0}),children:"Info"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"outlined",color:"error",onClick:()=>a({open:!0,message:"This is error message",variant:"alert",alert:{variant:"outlined",color:"error"},actionButton:!0,close:!0}),children:"Error"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(u,{title:"Position",codeString:l,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"left"},message:"This is an top-left message!",close:!0}),children:"Top-Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"center"},message:"This is an top-center message!",close:!0}),children:"Top-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"top",horizontal:"right"},message:"This is an top-right message!",close:!0}),children:"Top-Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"},message:"This is an bottom-right message!",close:!0}),children:"Bottom-Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"This is an bottom-center message!",close:!0}),children:"Bottom-Center"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},message:"This is an bottom-left message!",close:!0}),children:"Bottom-Left"})})]})})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(u,{title:"Transitions",codeString:d,children:e.jsxs(n,{container:!0,spacing:2,children:[e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an fade message!",transition:"Fade",close:!0}),children:"Default/Fade"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-left message!",transition:"SlideLeft",close:!0}),children:"Slide Left"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-up message!",transition:"SlideUp",close:!0}),children:"Slide Up"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-right message!",transition:"SlideRight",close:!0}),children:"Slide Right"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an slide-down message!",transition:"SlideDown",close:!0}),children:"Slide Down"})}),e.jsx(n,{item:!0,children:e.jsx(t,{variant:"contained",onClick:()=>a({open:!0,message:"This is an grow message!",transition:"Grow",close:!0}),children:"Grow"})})]})})}),e.jsx(n,{item:!0,xs:12,children:e.jsx(v,{variant:"h5",sx:{mt:2},children:"Extended - Notistack"})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(J,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ie,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(re,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ae,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ce,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(te,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(se,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(le,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ne,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(ee,{})}),e.jsx(n,{item:!0,xs:12,lg:6,children:e.jsx(oe,{})})]})})]})};export{je as default};
