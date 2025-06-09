import{bf as Ze,be as Je,a3 as ke,T as Y,bt as et,r as x,bi as tt,b3 as nt,j as n,a0 as Oe,bn as ot,bo as it,P as G,d as m,c as pe,aB as O,G as f,aO as P,I as oe,Z as ie,K as he,N as F,U as ne,k as je,g as at,O as R,B as X,aP as E,aS as L,D as Pe,aC as rt,S as st,cW as lt,cN as ct,V as Te,Y as dt,a6 as ut,ad as gt,_ as pt,Q as V,ax as ht,ac as Me,bb as mt,br as Ae,aD as Ie,bc as ft,bX as xt,o as Ct,F as vt,q as Dt,M as B}from"./index-00d10488.js";import{C as yt}from"./ComponentHeader-2988d0fc.js";import{C as bt,a as St}from"./ComponentSkeleton-5bbc5a2f.js";import{P as jt}from"./PlusOutlined-775b7cad.js";import{a as Tt}from"./avatar-2-1a15928a.js";import"./Skeleton-a874ac2b.js";function wt(e){return Ze("MuiDialogContentText",e)}Je("MuiDialogContentText",["root"]);const Bt=["children","className"],kt=e=>{const{classes:t}=e,i=it({root:["root"]},wt,t);return Oe({},t,i)},Ot=ke(Y,{shouldForwardProp:e=>et(e)||e==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Pt=x.forwardRef(function(t,o){const i=tt({props:t,name:"MuiDialogContentText"}),{className:a}=i,r=nt(i,Bt),s=kt(r);return n.jsx(Ot,Oe({component:"p",variant:"body1",color:"text.secondary",ref:o,ownerState:r,className:ot(s.root,a)},i,{classes:s}))}),z=Pt,Ee=["username@gmail.com","user02@gmail.com"];function Le({onClose:e,selectedValue:t,open:o}){const i=pe(),a=()=>{e(t)},r=s=>{e(s)};return n.jsxs(O,{onClose:a,open:o,children:[n.jsxs(f,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",sx:{borderBottom:`1px solid ${i.palette.divider}`},children:[n.jsx(f,{item:!0,children:n.jsx(P,{children:"Set backup account"})}),n.jsx(f,{item:!0,sx:{mr:1.5},children:n.jsx(oe,{color:"secondary",onClick:a,children:n.jsx(ie,{})})})]}),n.jsxs(he,{sx:{p:2.5},children:[Ee.map((s,l)=>n.jsxs(F,{selected:t===s,onClick:()=>r(s),sx:{p:1.25},children:[n.jsx(ne,{children:n.jsx(je,{src:at(`avatar-${l+1}.png`)})}),n.jsx(R,{primary:s})]},s)),n.jsxs(F,{autoFocus:!0,onClick:()=>r("addAccount"),sx:{p:1.25},children:[n.jsx(ne,{children:n.jsx(je,{size:"sm",children:n.jsx(jt,{})})}),n.jsx(R,{primary:"Add Account"})]})]})]})}Le.propTypes={onClose:G.func.isRequired,open:G.bool.isRequired,selectedValue:G.string.isRequired};function Mt(){const[e,t]=x.useState(!1),[o,i]=x.useState(Ee[1]),a=()=>{t(!0)},r=s=>{t(!1),i(s)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a,children:"Open simple dialog"}),n.jsx(Le,{selectedValue:o,open:e,onClose:r})]})}function At(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open alert dialog"}),n.jsx(O,{open:e,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:n.jsxs(X,{sx:{p:1,py:1.5},children:[n.jsx(P,{id:"alert-dialog-title",children:"Use Google's location service?"}),n.jsx(E,{children:n.jsx(z,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(L,{children:[n.jsx(m,{color:"error",onClick:i,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:i,children:"Agree"})]})]})})]})}function It(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open form dialog"}),n.jsx(O,{open:e,onClose:i,children:n.jsxs(X,{sx:{p:1,py:1.5},children:[n.jsx(P,{children:"Subscribe"}),n.jsxs(E,{children:[n.jsx(z,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),n.jsx(Pe,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),n.jsxs(L,{children:[n.jsx(m,{color:"error",onClick:i,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:i,children:"Subscribe"})]})]})})]})}function Et(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Slide in dialog"}),n.jsx(O,{open:e,TransitionComponent:rt,keepMounted:!0,onClose:i,"aria-describedby":"alert-dialog-slide-description",children:n.jsxs(X,{sx:{p:1,py:1.5},children:[n.jsx(P,{children:"Use Google'ss location service?"}),n.jsx(E,{children:n.jsx(z,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(L,{children:[n.jsx(m,{color:"error",onClick:i,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:i,children:"Agree"})]})]})})]})}const Lt=ke(O)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(3)},"& .MuiDialogActions-root":{padding:e.spacing(1.25),paddingRight:e.spacing(2)}})),Ne=({children:e,onClose:t,...o})=>n.jsxs(P,{sx:{m:0,p:2},...o,children:[e,t?n.jsx(oe,{"aria-label":"close",onClick:t,color:"secondary",sx:{position:"absolute",right:10,top:10},children:n.jsx(ie,{})}):null]});Ne.propTypes={onClose:G.func.isRequired,children:G.node};function Nt(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open dialog"}),n.jsxs(Lt,{onClose:i,"aria-labelledby":"customized-dialog-title",open:e,children:[n.jsx(Ne,{id:"customized-dialog-title",onClose:i,children:"Modal Title"}),n.jsxs(E,{dividers:!0,sx:{p:3},children:[n.jsx(Y,{variant:"h6",gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),n.jsx(Y,{variant:"h6",gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),n.jsx(L,{children:n.jsx(m,{variant:"contained",onClick:i,children:"Save changes"})})]})]})}const _t=x.forwardRef((e,t)=>n.jsx(st,{direction:"up",ref:t,...e}));function Wt(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open full-screen dialog"}),n.jsxs(O,{fullScreen:!0,open:e,onClose:i,TransitionComponent:_t,children:[n.jsx(lt,{sx:{position:"relative",boxShadow:"none"},children:n.jsxs(ct,{children:[n.jsx(oe,{edge:"start",color:"inherit",onClick:i,"aria-label":"close",children:n.jsx(ie,{})}),n.jsx(Y,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Set Backup Account"}),n.jsx(m,{color:"primary",variant:"contained",onClick:i,children:"save"})]})}),n.jsxs(he,{sx:{p:3},children:[n.jsxs(F,{children:[n.jsx(ne,{children:n.jsx(Te,{src:dt})}),n.jsx(R,{primary:"Phone ringtone",secondary:"Default"})]}),n.jsx(ut,{}),n.jsxs(F,{children:[n.jsx(ne,{children:n.jsx(Te,{src:Tt})}),n.jsx(R,{primary:"Default notification ringtone",secondary:"Tethys"})]})]})]})]})}function Gt(){const[e,t]=x.useState(!0),[o,i]=x.useState("sm"),[a,r]=x.useState(!1),s=()=>{r(!0)},l=()=>{r(!1)},g=D=>{i(D.target.value)},v=D=>{t(D.target.checked)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:s,children:"Open max-width dialog"}),n.jsx(O,{fullWidth:e,maxWidth:o,open:a,onClose:l,children:n.jsxs(X,{sx:{p:1,py:1.5},children:[n.jsx(P,{children:"Optional sizes"}),n.jsxs(E,{children:[n.jsx(z,{children:"You can set my maximum width and whether to adapt or not."}),n.jsxs(f,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:1},children:[n.jsx(f,{item:!0,children:n.jsx(Y,{variant:"h6",children:"Max Width :"})}),n.jsx(f,{item:!0,children:n.jsx(gt,{sx:{minWidth:120},children:n.jsxs(pt,{autoFocus:!0,value:o,onChange:g,inputProps:{name:"max-width",id:"max-width"},children:[n.jsx(V,{value:!1,children:"false"}),n.jsx(V,{value:"xs",children:"xs"}),n.jsx(V,{value:"sm",children:"sm"}),n.jsx(V,{value:"md",children:"md"}),n.jsx(V,{value:"lg",children:"lg"}),n.jsx(V,{value:"xl",children:"xl"})]})})})]}),n.jsxs(f,{container:!0,spacing:1.5,alignItems:"center",sx:{mt:.25},children:[n.jsx(f,{item:!0,children:n.jsx(Y,{variant:"h6",children:"Full Width:"})}),n.jsx(f,{item:!0,children:n.jsx(ht,{checked:e,onChange:v})})]})]}),n.jsx(L,{children:n.jsx(m,{variant:"outlined",color:"error",onClick:l,children:"Close"})})]})})]})}function Ft(){const e=pe(),t=Me(e.breakpoints.down("md")),[o,i]=x.useState(!1),a=()=>{i(!0)},r=()=>{i(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a,children:"Open responsive dialog"}),n.jsx(O,{fullScreen:t,open:o,onClose:r,"aria-labelledby":"responsive-dialog-title",children:n.jsxs(X,{sx:{p:1,py:1.5},children:[n.jsx(P,{id:"responsive-dialog-title",children:"Use Google's location service?"}),n.jsx(E,{children:n.jsx(z,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),n.jsxs(L,{children:[n.jsx(m,{color:"error",onClick:r,children:"Disagree"}),n.jsx(m,{variant:"contained",onClick:r,children:"Agree"})]})]})})]})}var ae={exports:{}},_e={};function We(e){var t,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=We(e[t]))&&(i&&(i+=" "),i+=o);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function we(){for(var e,t,o=0,i="";o<arguments.length;)(e=arguments[o++])&&(t=We(e))&&(i&&(i+=" "),i+=t);return i}const Rt=Object.freeze(Object.defineProperty({__proto__:null,clsx:we,default:we},Symbol.toStringTag,{value:"Module"})),Yt=mt(Rt);var C={},M={};Object.defineProperty(M,"__esModule",{value:!0});M.dontSetMe=Vt;M.findInArray=Xt;M.int=$t;M.isFunction=Ut;M.isNum=qt;function Xt(e,t){for(let o=0,i=e.length;o<i;o++)if(t.apply(t,[e[o],o,e]))return e[o]}function Ut(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function qt(e){return typeof e=="number"&&!isNaN(e)}function $t(e){return parseInt(e,10)}function Vt(e,t,o){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(o," - do not set this, set it on the child."))}var U={};Object.defineProperty(U,"__esModule",{value:!0});U.browserPrefixToKey=Fe;U.browserPrefixToStyle=Ht;U.default=void 0;U.getPrefix=Ge;const de=["Moz","Webkit","O","ms"];function Ge(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const o=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!o||t in o)return"";for(let i=0;i<de.length;i++)if(Fe(t,de[i])in o)return de[i];return""}function Fe(e,t){return t?"".concat(t).concat(zt(e)):e}function Ht(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function zt(e){let t="",o=!0;for(let i=0;i<e.length;i++)o?(t+=e[i].toUpperCase(),o=!1):e[i]==="-"?o=!0:t+=e[i];return t}U.default=Ge();Object.defineProperty(C,"__esModule",{value:!0});C.addClassName=Xe;C.addEvent=Zt;C.addUserSelectStyles=dn;C.createCSSTransform=rn;C.createSVGTransform=sn;C.getTouch=ln;C.getTouchIdentifier=cn;C.getTranslation=me;C.innerHeight=nn;C.innerWidth=on;C.matchesSelector=Ye;C.matchesSelectorAndParentsTo=Qt;C.offsetXYFromParent=an;C.outerHeight=en;C.outerWidth=tn;C.removeClassName=Ue;C.removeEvent=Jt;C.removeUserSelectStyles=un;var w=M,Be=Kt(U);function Re(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(Re=function(i){return i?o:t})(e)}function Kt(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=Re(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,o&&o.set(e,i),i}let te="";function Ye(e,t){return te||(te=(0,w.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(o){return(0,w.isFunction)(e[o])})),(0,w.isFunction)(e[te])?e[te](t):!1}function Qt(e,t,o){let i=e;do{if(Ye(i,t))return!0;if(i===o)return!1;i=i.parentNode}while(i);return!1}function Zt(e,t,o,i){if(!e)return;const a={capture:!0,...i};e.addEventListener?e.addEventListener(t,o,a):e.attachEvent?e.attachEvent("on"+t,o):e["on"+t]=o}function Jt(e,t,o,i){if(!e)return;const a={capture:!0,...i};e.removeEventListener?e.removeEventListener(t,o,a):e.detachEvent?e.detachEvent("on"+t,o):e["on"+t]=null}function en(e){let t=e.clientHeight;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,w.int)(o.borderTopWidth),t+=(0,w.int)(o.borderBottomWidth),t}function tn(e){let t=e.clientWidth;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,w.int)(o.borderLeftWidth),t+=(0,w.int)(o.borderRightWidth),t}function nn(e){let t=e.clientHeight;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,w.int)(o.paddingTop),t-=(0,w.int)(o.paddingBottom),t}function on(e){let t=e.clientWidth;const o=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,w.int)(o.paddingLeft),t-=(0,w.int)(o.paddingRight),t}function an(e,t,o){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),r=(e.clientX+t.scrollLeft-a.left)/o,s=(e.clientY+t.scrollTop-a.top)/o;return{x:r,y:s}}function rn(e,t){const o=me(e,t,"px");return{[(0,Be.browserPrefixToKey)("transform",Be.default)]:o}}function sn(e,t){return me(e,t,"")}function me(e,t,o){let{x:i,y:a}=e,r="translate(".concat(i).concat(o,",").concat(a).concat(o,")");if(t){const s="".concat(typeof t.x=="string"?t.x:t.x+o),l="".concat(typeof t.y=="string"?t.y:t.y+o);r="translate(".concat(s,", ").concat(l,")")+r}return r}function ln(e,t){return e.targetTouches&&(0,w.findInArray)(e.targetTouches,o=>t===o.identifier)||e.changedTouches&&(0,w.findInArray)(e.changedTouches,o=>t===o.identifier)}function cn(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function dn(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&Xe(e.body,"react-draggable-transparent-selection")}function un(e){if(e)try{if(e.body&&Ue(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function Xe(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Ue(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var A={};Object.defineProperty(A,"__esModule",{value:!0});A.canDragX=hn;A.canDragY=mn;A.createCoreData=xn;A.createDraggableData=Cn;A.getBoundPosition=gn;A.getControlPosition=fn;A.snapToGrid=pn;var T=M,H=C;function gn(e,t,o){if(!e.props.bounds)return[t,o];let{bounds:i}=e.props;i=typeof i=="string"?i:vn(i);const a=fe(e);if(typeof i=="string"){const{ownerDocument:r}=a,s=r.defaultView;let l;if(i==="parent"?l=a.parentNode:l=r.querySelector(i),!(l instanceof s.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const g=l,v=s.getComputedStyle(a),D=s.getComputedStyle(g);i={left:-a.offsetLeft+(0,T.int)(D.paddingLeft)+(0,T.int)(v.marginLeft),top:-a.offsetTop+(0,T.int)(D.paddingTop)+(0,T.int)(v.marginTop),right:(0,H.innerWidth)(g)-(0,H.outerWidth)(a)-a.offsetLeft+(0,T.int)(D.paddingRight)-(0,T.int)(v.marginRight),bottom:(0,H.innerHeight)(g)-(0,H.outerHeight)(a)-a.offsetTop+(0,T.int)(D.paddingBottom)-(0,T.int)(v.marginBottom)}}return(0,T.isNum)(i.right)&&(t=Math.min(t,i.right)),(0,T.isNum)(i.bottom)&&(o=Math.min(o,i.bottom)),(0,T.isNum)(i.left)&&(t=Math.max(t,i.left)),(0,T.isNum)(i.top)&&(o=Math.max(o,i.top)),[t,o]}function pn(e,t,o){const i=Math.round(t/e[0])*e[0],a=Math.round(o/e[1])*e[1];return[i,a]}function hn(e){return e.props.axis==="both"||e.props.axis==="x"}function mn(e){return e.props.axis==="both"||e.props.axis==="y"}function fn(e,t,o){const i=typeof t=="number"?(0,H.getTouch)(e,t):null;if(typeof t=="number"&&!i)return null;const a=fe(o),r=o.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,H.offsetXYFromParent)(i||e,r,o.props.scale)}function xn(e,t,o){const i=!(0,T.isNum)(e.lastX),a=fe(e);return i?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:o,x:t,y:o}:{node:a,deltaX:t-e.lastX,deltaY:o-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:o}}function Cn(e,t){const o=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/o,y:e.state.y+t.deltaY/o,deltaX:t.deltaX/o,deltaY:t.deltaY/o,lastX:e.state.x,lastY:e.state.y}}function vn(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function fe(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var re={},se={};Object.defineProperty(se,"__esModule",{value:!0});se.default=Dn;function Dn(){}Object.defineProperty(re,"__esModule",{value:!0});re.default=void 0;var ue=bn(x),j=xe(Ae),yn=xe(Ie),b=C,_=A,ge=M,Q=xe(se);function xe(e){return e&&e.__esModule?e:{default:e}}function qe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(qe=function(i){return i?o:t})(e)}function bn(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=qe(t);if(o&&o.has(e))return o.get(e);var i={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)){var s=a?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,o&&o.set(e,i),i}function S(e,t,o){return t=Sn(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Sn(e){var t=jn(e,"string");return typeof t=="symbol"?t:String(t)}function jn(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var i=o.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const k={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let W=k.mouse,le=class extends ue.Component{constructor(){super(...arguments),S(this,"dragging",!1),S(this,"lastX",NaN),S(this,"lastY",NaN),S(this,"touchIdentifier",null),S(this,"mounted",!1),S(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const o=this.findDOMNode();if(!o||!o.ownerDocument||!o.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:i}=o;if(this.props.disabled||!(t.target instanceof i.defaultView.Node)||this.props.handle&&!(0,b.matchesSelectorAndParentsTo)(t.target,this.props.handle,o)||this.props.cancel&&(0,b.matchesSelectorAndParentsTo)(t.target,this.props.cancel,o))return;t.type==="touchstart"&&t.preventDefault();const a=(0,b.getTouchIdentifier)(t);this.touchIdentifier=a;const r=(0,_.getControlPosition)(t,a,this);if(r==null)return;const{x:s,y:l}=r,g=(0,_.createCoreData)(this,s,l);(0,Q.default)("DraggableCore: handleDragStart: %j",g),(0,Q.default)("calling",this.props.onStart),!(this.props.onStart(t,g)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,b.addUserSelectStyles)(i),this.dragging=!0,this.lastX=s,this.lastY=l,(0,b.addEvent)(i,W.move,this.handleDrag),(0,b.addEvent)(i,W.stop,this.handleDragStop))}),S(this,"handleDrag",t=>{const o=(0,_.getControlPosition)(t,this.touchIdentifier,this);if(o==null)return;let{x:i,y:a}=o;if(Array.isArray(this.props.grid)){let l=i-this.lastX,g=a-this.lastY;if([l,g]=(0,_.snapToGrid)(this.props.grid,l,g),!l&&!g)return;i=this.lastX+l,a=this.lastY+g}const r=(0,_.createCoreData)(this,i,a);if((0,Q.default)("DraggableCore: handleDrag: %j",r),this.props.onDrag(t,r)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const g=document.createEvent("MouseEvents");g.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(g)}return}this.lastX=i,this.lastY=a}),S(this,"handleDragStop",t=>{if(!this.dragging)return;const o=(0,_.getControlPosition)(t,this.touchIdentifier,this);if(o==null)return;let{x:i,y:a}=o;if(Array.isArray(this.props.grid)){let g=i-this.lastX||0,v=a-this.lastY||0;[g,v]=(0,_.snapToGrid)(this.props.grid,g,v),i=this.lastX+g,a=this.lastY+v}const r=(0,_.createCoreData)(this,i,a);if(this.props.onStop(t,r)===!1||this.mounted===!1)return!1;const l=this.findDOMNode();l&&this.props.enableUserSelectHack&&(0,b.removeUserSelectStyles)(l.ownerDocument),(0,Q.default)("DraggableCore: handleDragStop: %j",r),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,l&&((0,Q.default)("DraggableCore: Removing handlers"),(0,b.removeEvent)(l.ownerDocument,W.move,this.handleDrag),(0,b.removeEvent)(l.ownerDocument,W.stop,this.handleDragStop))}),S(this,"onMouseDown",t=>(W=k.mouse,this.handleDragStart(t))),S(this,"onMouseUp",t=>(W=k.mouse,this.handleDragStop(t))),S(this,"onTouchStart",t=>(W=k.touch,this.handleDragStart(t))),S(this,"onTouchEnd",t=>(W=k.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,b.addEvent)(t,k.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:o}=t;(0,b.removeEvent)(o,k.mouse.move,this.handleDrag),(0,b.removeEvent)(o,k.touch.move,this.handleDrag),(0,b.removeEvent)(o,k.mouse.stop,this.handleDragStop),(0,b.removeEvent)(o,k.touch.stop,this.handleDragStop),(0,b.removeEvent)(t,k.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,b.removeUserSelectStyles)(o)}}findDOMNode(){var t,o;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(o=this.props)===null||o===void 0||(o=o.nodeRef)===null||o===void 0?void 0:o.current:yn.default.findDOMNode(this)}render(){return ue.cloneElement(ue.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};re.default=le;S(le,"displayName","DraggableCore");S(le,"propTypes",{allowAnyClick:j.default.bool,children:j.default.node.isRequired,disabled:j.default.bool,enableUserSelectHack:j.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:j.default.arrayOf(j.default.number),handle:j.default.string,cancel:j.default.string,nodeRef:j.default.object,onStart:j.default.func,onDrag:j.default.func,onStop:j.default.func,onMouseDown:j.default.func,scale:j.default.number,className:ge.dontSetMe,style:ge.dontSetMe,transform:ge.dontSetMe});S(le,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return g.default}}),e.default=void 0;var t=ce(x),o=D(Ae),i=D(Ie),a=D(Yt),r=C,s=A,l=M,g=D(re),v=D(se);function D(c){return c&&c.__esModule?c:{default:c}}function Z(c){if(typeof WeakMap!="function")return null;var d=new WeakMap,p=new WeakMap;return(Z=function(u){return u?p:d})(c)}function ce(c,d){if(!d&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var p=Z(d);if(p&&p.has(c))return p.get(c);var u={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in c)if(h!=="default"&&Object.prototype.hasOwnProperty.call(c,h)){var N=y?Object.getOwnPropertyDescriptor(c,h):null;N&&(N.get||N.set)?Object.defineProperty(u,h,N):u[h]=c[h]}return u.default=c,p&&p.set(c,u),u}function I(){return I=Object.assign?Object.assign.bind():function(c){for(var d=1;d<arguments.length;d++){var p=arguments[d];for(var u in p)Object.prototype.hasOwnProperty.call(p,u)&&(c[u]=p[u])}return c},I.apply(this,arguments)}function q(c,d,p){return d=He(d),d in c?Object.defineProperty(c,d,{value:p,enumerable:!0,configurable:!0,writable:!0}):c[d]=p,c}function He(c){var d=ze(c,"string");return typeof d=="symbol"?d:String(d)}function ze(c,d){if(typeof c!="object"||c===null)return c;var p=c[Symbol.toPrimitive];if(p!==void 0){var u=p.call(c,d||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(c)}class J extends t.Component{static getDerivedStateFromProps(d,p){let{position:u}=d,{prevPropsPosition:y}=p;return u&&(!y||u.x!==y.x||u.y!==y.y)?((0,v.default)("Draggable: getDerivedStateFromProps %j",{position:u,prevPropsPosition:y}),{x:u.x,y:u.y,prevPropsPosition:{...u}}):null}constructor(d){super(d),q(this,"onDragStart",(p,u)=>{if((0,v.default)("Draggable: onDragStart: %j",u),this.props.onStart(p,(0,s.createDraggableData)(this,u))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),q(this,"onDrag",(p,u)=>{if(!this.state.dragging)return!1;(0,v.default)("Draggable: onDrag: %j",u);const y=(0,s.createDraggableData)(this,u),h={x:y.x,y:y.y,slackX:0,slackY:0};if(this.props.bounds){const{x:K,y:$}=h;h.x+=this.state.slackX,h.y+=this.state.slackY;const[ee,Ce]=(0,s.getBoundPosition)(this,h.x,h.y);h.x=ee,h.y=Ce,h.slackX=this.state.slackX+(K-h.x),h.slackY=this.state.slackY+($-h.y),y.x=h.x,y.y=h.y,y.deltaX=h.x-this.state.x,y.deltaY=h.y-this.state.y}if(this.props.onDrag(p,y)===!1)return!1;this.setState(h)}),q(this,"onDragStop",(p,u)=>{if(!this.state.dragging||this.props.onStop(p,(0,s.createDraggableData)(this,u))===!1)return!1;(0,v.default)("Draggable: onDragStop: %j",u);const h={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:K,y:$}=this.props.position;h.x=K,h.y=$}this.setState(h)}),this.state={dragging:!1,dragged:!1,x:d.position?d.position.x:d.defaultPosition.x,y:d.position?d.position.y:d.defaultPosition.y,prevPropsPosition:{...d.position},slackX:0,slackY:0,isElementSVG:!1},d.position&&!(d.onDrag||d.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var d,p;return(d=(p=this.props)===null||p===void 0||(p=p.nodeRef)===null||p===void 0?void 0:p.current)!==null&&d!==void 0?d:i.default.findDOMNode(this)}render(){const{axis:d,bounds:p,children:u,defaultPosition:y,defaultClassName:h,defaultClassNameDragging:N,defaultClassNameDragged:K,position:$,positionOffset:ee,scale:Ce,...Ke}=this.props;let ve={},De=null;const ye=!!!$||this.state.dragging,be=$||y,Se={x:(0,s.canDragX)(this)&&ye?this.state.x:be.x,y:(0,s.canDragY)(this)&&ye?this.state.y:be.y};this.state.isElementSVG?De=(0,r.createSVGTransform)(Se,ee):ve=(0,r.createCSSTransform)(Se,ee);const Qe=(0,a.default)(u.props.className||"",h,{[N]:this.state.dragging,[K]:this.state.dragged});return t.createElement(g.default,I({},Ke,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(u),{className:Qe,style:{...u.props.style,...ve},transform:De}))}}e.default=J,q(J,"displayName","Draggable"),q(J,"propTypes",{...g.default.propTypes,axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),q(J,"defaultProps",{...g.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(_e);const{default:$e,DraggableCore:Tn}=_e;ae.exports=$e;ae.exports.default=$e;ae.exports.DraggableCore=Tn;var wn=ae.exports;const Bn=ft(wn),kn=x.forwardRef((e,t)=>n.jsx(Bn,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:n.jsx(xt,{ref:t,...e})}));function On(){const[e,t]=x.useState(!1),o=()=>{t(!0)},i=()=>{t(!1)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:o,children:"Open draggable dialog"}),n.jsx(O,{open:e,onClose:i,PaperComponent:kn,"aria-labelledby":"draggable-dialog-title",children:n.jsxs(X,{sx:{p:1,py:1.5},children:[n.jsx(P,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Subscribe"}),n.jsxs(E,{children:[n.jsx(z,{sx:{mb:2},children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),n.jsx(Pe,{id:"name",placeholder:"Email Address",type:"email",fullWidth:!0,variant:"outlined"})]}),n.jsxs(L,{children:[n.jsx(m,{color:"error",onClick:i,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:i,children:"Subscribe"})]})]})})]})}function Pn(){const[e,t]=x.useState(!1),[o,i]=x.useState("paper"),a=l=>()=>{t(!0),i(l)},r=()=>{t(!1)},s=x.useRef(null);return x.useEffect(()=>{if(e){const{current:l}=s;l!==null&&l.focus()}},[e]),n.jsxs(n.Fragment,{children:[n.jsx(m,{variant:"contained",onClick:a("paper"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=paper"}),n.jsx(m,{variant:"outlined",onClick:a("body"),sx:{mr:1,ml:1,mb:1,mt:1},children:"scroll=body"}),n.jsxs(O,{open:e,onClose:r,scroll:o,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[n.jsxs(f,{container:!0,spacing:2,justifyContent:"space-between",alignItems:"center",children:[n.jsx(f,{item:!0,children:n.jsx(P,{children:"Subscribe"})}),n.jsx(f,{item:!0,sx:{mr:1.5},children:n.jsx(oe,{color:"secondary",onClick:r,children:n.jsx(ie,{})})})]}),n.jsx(E,{dividers:!0,children:n.jsx(f,{container:!0,spacing:1.25,children:[...new Array(25)].map((l,g)=>n.jsx(f,{item:!0,children:n.jsx(Y,{variant:"h6",children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."})},`${g}-${o}`))})}),n.jsxs(L,{children:[n.jsx(m,{color:"error",onClick:r,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:r,sx:{mr:1},children:"Subscribe"})]})]})]})}const Mn=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis"];function Ve({onClose:e,value:t,open:o,...i}){const a=pe(),r=Me(a.breakpoints.down("md")),[s,l]=x.useState(t),g=x.useRef(null);x.useEffect(()=>{o||l(t)},[t,o]);const v=()=>{g.current!=null&&g.current.focus()},D=()=>{e()},Z=()=>{e(s)},ce=I=>{l(I.target.value)};return n.jsxs(O,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:r?"sm":"lg",TransitionProps:{onEntering:v},open:o,...i,children:[n.jsx(P,{children:"Phone Ringtone"}),n.jsx(E,{dividers:!0,children:n.jsx(Ct,{row:!r,ref:g,"aria-label":"ringtone",name:"ringtone",value:s,onChange:ce,children:Mn.map(I=>n.jsx(vt,{value:I,control:n.jsx(Dt,{}),label:I},I))})}),n.jsxs(L,{children:[n.jsx(m,{color:"error",onClick:D,children:"Cancel"}),n.jsx(m,{variant:"contained",onClick:Z,sx:{mr:.5},children:"Done"})]})]})}Ve.propTypes={onClose:G.func.isRequired,open:G.bool.isRequired,value:G.string.isRequired};function An(){const[e,t]=x.useState(!1),[o,i]=x.useState("Hangouts Call"),a=()=>{t(!0)},r=s=>{t(!1),s&&i(s)};return n.jsx(X,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:n.jsxs(he,{component:"div",role:"group",children:[n.jsx(F,{divider:!0,disabled:!0,children:n.jsx(R,{primary:"Interruptions"})}),n.jsx(F,{divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:a,children:n.jsx(R,{primary:"Phone Ringtone",secondary:o})}),n.jsx(F,{divider:!0,disabled:!0,children:n.jsx(R,{primary:"Default Notification Ringtone",secondary:"Tethys"})}),n.jsx(Ve,{id:"ringtone-menu",keepMounted:!0,open:e,onClose:r,value:o})]})})}const Rn=()=>{const e=`// SimpleDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open simple dialog
</Button>
<Dialog onClose={handleClose} open={open}>
  <Grid
    container
    spacing={2}
    justifyContent="space-between"
    alignItems="center"
    sx={{ borderBottom: '1px solid {theme.palette.divider}' }}
  >
    <Grid item>
      <DialogTitle>Set backup account</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>
  <List sx={{ p: 2.5 }}>
    {emails.map((email, index) => (
      <ListItemButton selected={selectedValue === email} onClick={() => handleListItemClick(email)} key={email} sx={{ p: 1.25 }}>
        <ListItemAvatar>
        <Avatar src={'/src/assets/images/users/avatar-{index + 1}.png'} />
        </ListItemAvatar>
        <ListItemText primary={email} />
        </ListItemButton>
    ))}
    <ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')} sx={{ p: 1.25 }}>
      <ListItemAvatar>
      <Avatar size="sm">
      <PlusOutlined />
    </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Add Account" />
      </ListItemButton>
  </List>
</Dialog>`,t=`// AlertDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open alert dialog
</Button>
<Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
<Box sx={{ p: 1, py: 1.5 }}>
  <DialogTitle id="alert-dialog-title">Use Google&apos;s location service?</DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Disagree
    </Button>
    <Button variant="contained" onClick={handleClose} autoFocus>
      Agree
    </Button>
  </DialogActions>
</Box>
</Dialog>`,o=`// FormDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open form dialog
</Button>
<Dialog open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,i=` // TransitionsDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Slide in dialog
</Button>
<Dialog
  open={open}
  TransitionComponent={Transition}
  keepMounted
  onClose={handleClose}
  aria-describedby="alert-dialog-slide-description"
>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Use Google&apos;ss location service?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,a=`// CustomizedDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open dialog
</Button>
<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
  <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
    Modal Title
  </BootstrapDialogTitle>
  <DialogContent dividers sx={{ p: 3 }}>
    <Typography variant="h6" gutterBottom>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus,
      porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus
      sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
    <Typography variant="h6" gutterBottom>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
      odio dui. Donec ullamcorper nulla non metus auctor fringilla.
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button variant="contained" autoFocus onClick={handleClose}>
      Save changes
    </Button>
  </DialogActions>
</BootstrapDialog>`,r=`// FullScreenDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open full-screen dialog
</Button>
<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
  <AppBar sx={{ position: 'relative', boxShadow: 'none' }}>
    <Toolbar>
      <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
        <CloseOutlined />
      </IconButton>
      <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
        Set Backup Account
      </Typography>
      <Button autoFocus color="inherit" onClick={handleClose}>
        save
      </Button>
    </Toolbar>
  </AppBar>
  <List sx={{ p: 3 }}>
  <ListItemButton>
      <ListItemAvatar>
        <Avatar src={'/src/assets/images/users/avatar-1.png'} />
      </ListItemAvatar>
      <ListItemText primary="Phone ringtone" secondary="Default" />
    </ListItemButton>
    <Divider />
    <ListItemButton>
      <ListItemAvatar>
        <Avatar src={'/src/assets/images/users/avatar-2.png'} />
      </ListItemAvatar>
      <ListItemText primary="Default notification ringtone" secondary="Tethys" />
    </ListItemButton>
  </List>
</Dialog>`,s=`// SizesDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open max-width dialog
</Button>
<Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle>Optional sizes</DialogTitle>
    <DialogContent>
      <DialogContentText>You can set my maximum width and whether to adapt or not.</DialogContentText>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 1 }}>
        <Grid item>
          <Typography variant="h6">Max Width :</Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              autoFocus
              value={maxWidth}
              onChange={handleMaxWidthChange}
              inputProps={{
                name: 'max-width',
                id: 'max-width'
              }}
            >
              <MenuItem value={false as any}>false</MenuItem>
              <MenuItem value="xs">xs</MenuItem>
              <MenuItem value="sm">sm</MenuItem>
              <MenuItem value="md">md</MenuItem>
              <MenuItem value="lg">lg</MenuItem>
              <MenuItem value="xl">xl</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={1.5} alignItems="center" sx={{ mt: 0.25 }}>
        <Grid item>
          <Typography variant="h6">Full Width:</Typography>
        </Grid>
        <Grid item>
          <Switch checked={fullWidth} onChange={handleFullWidthChange} />
        </Grid>
      </Grid>
    </DialogContent>
    <DialogActions>
      <Button variant="outlined" color="error" onClick={handleClose}>
        Close
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,l=`// ResponsiveDialog.tsx
<Button variant="contained" onClick={handleClickOpen}>
  Open responsive dialog
</Button>
<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle id="responsive-dialog-title">Use Google&apos;s location service?</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Disagree
      </Button>
      <Button variant="contained" onClick={handleClose} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,g=`// DraggableDialog
<Button variant="contained" onClick={handleClickOpen}>
  Open draggable dialog
</Button>
<Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title">
  <Box sx={{ p: 1, py: 1.5 }}>
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
      Subscribe
    </DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ mb: 2 }}>
        To subscribe to this website, please enter your email address here. We will send updates occasionally.
      </DialogContentText>
      <TextField id="name" placeholder="Email Address" type="email" fullWidth variant="outlined" />
    </DialogContent>
    <DialogActions>
      <Button color="error" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={handleClose}>
        Subscribe
      </Button>
    </DialogActions>
  </Box>
</Dialog>`,v=`// ScrollDialog.tsx
<Button variant="contained" onClick={handleClickOpen('paper')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=paper
</Button>
<Button variant="outlined" onClick={handleClickOpen('body')} sx={{ mr: 1, ml: 1, mb: 1, mt: 1 }}>
  scroll=body
</Button>
<Dialog
  open={open}
  onClose={handleClose}
  scroll={scroll}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
>
  <Grid container spacing={2} justifyContent="space-between" alignItems="center">
    <Grid item>
      <DialogTitle>Subscribe</DialogTitle>
    </Grid>
    <Grid item sx={{ mr: 1.5 }}>
      <IconButton color="secondary" onClick={handleClose}>
        <CloseOutlined />
      </IconButton>
    </Grid>
  </Grid>
  <DialogContent dividers>
    <Grid container spacing={1.25}>
      {[...new Array(25)].map((i, index) => (
        <Grid item key={'{index}-{scroll}'}>
          <Typography variant="h6">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac in, egestas eget quam. Morbi leo risus,
            porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </Typography>
        </Grid>
      ))}
    </Grid>
  </DialogContent>
  <DialogActions>
    <Button color="error" onClick={handleClose}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleClose} sx={{ mr: 1 }}>
      Subscribe
    </Button>
  </DialogActions>
</Dialog>`,D=`// ConfirmationDialog.tsx
<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <List component="div" role="group">
    <ListItemButton divider disabled>
      <ListItemText primary="Interruptions" />
    </ListItemButton>
    <ListItemButton
      divider
      aria-haspopup="true"
      aria-controls="ringtone-menu"
      aria-label="phone ringtone"
      onClick={handleClickListItem}
    >
      <ListItemText primary="Phone Ringtone" secondary={value} />
    </ListItemButton>
    <ListItemButton divider disabled>
      <ListItemText primary="Default Notification Ringtone" secondary="Tethys" />
    </ListItemButton>
    <ConfirmationDialogRaw id="ringtone-menu" keepMounted open={open} onClose={handleClose} value={value} />
  </List>
</Box>
<Dialog
  sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
  maxWidth={matchDownMD ? 'sm' : 'lg'}
  TransitionProps={{ onEntering: handleEntering }}
  open={open}
  {...other}
>
  <DialogTitle>Phone Ringtone</DialogTitle>
  <DialogContent dividers>
    <RadioGroup row={!matchDownMD} ref={radioGroupRef} aria-label="ringtone" name="ringtone" value={value} onChange={handleChange}>
      {options.map((option) => (
        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
      ))}
    </RadioGroup>
  </DialogContent>
  <DialogActions>
    <Button color="error" autoFocus onClick={handleCancel}>
      Cancel
    </Button>
    <Button variant="contained" onClick={handleOk} sx={{ mr: 0.5 }}>
      Done
    </Button>
  </DialogActions>
</Dialog>`;return n.jsxs(bt,{children:[n.jsx(yt,{title:"Dialog",caption:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.",directory:"src/pages/components-overview/dialogs",link:"https://mui.com/material-ui/react-dialog/"}),n.jsx(St,{sx:{"& .MuiCardContent-root":{textAlign:"center"}},children:n.jsxs(f,{container:!0,spacing:3,children:[n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Basic",codeString:e,children:n.jsx(Mt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Alert",codeString:t,children:n.jsx(At,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Form",codeString:o,children:n.jsx(It,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Transitions",codeString:i,children:n.jsx(Et,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Customized",codeString:a,children:n.jsx(Nt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Full Screen",codeString:r,children:n.jsx(Wt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Sizes",codeString:s,children:n.jsx(Gt,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Responsive",codeString:l,children:n.jsx(Ft,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Draggable",codeString:g,children:n.jsx(On,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Scrolling",codeString:v,children:n.jsx(Pn,{})})}),n.jsx(f,{item:!0,xs:12,sm:6,lg:4,children:n.jsx(B,{title:"Confirmation",codeString:D,children:n.jsx(An,{})})})]})})]})};export{Rn as default};
