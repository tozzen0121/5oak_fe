import{be as w,bf as E,a3 as P,a0 as o,bq as U,V as _,r as i,bi as k,b3 as z,j as y,bn as A,bo as V}from"./index-22c328f7.js";function q(a){return E("MuiAvatarGroup",a)}const D=w("MuiAvatarGroup",["root","avatar"]),I=D,T=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],C={small:-16,medium:null},W=a=>{const{classes:t}=a;return V({root:["root"],avatar:["avatar"]},q,t)},B=P("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:(a,t)=>o({[`& .${I.avatar}`]:t.avatar},t.root)})(({theme:a})=>({[`& .${U.root}`]:{border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}},display:"flex",flexDirection:"row-reverse"})),F=P(_,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:(a,t)=>t.avatar})(({theme:a})=>({border:`2px solid ${(a.vars||a).palette.background.default}`,boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}})),H=i.forwardRef(function(t,f){var g;const c=k({props:t,name:"MuiAvatarGroup"}),{children:M,className:N,component:b="div",componentsProps:S={},max:p=5,slotProps:L={},spacing:e="medium",total:$,variant:v="circular"}=c,R=z(c,T);let s=p<2?2:p;const u=o({},c,{max:p,spacing:e,component:b,variant:v}),d=W(u),m=i.Children.toArray(M).filter(r=>i.isValidElement(r)),l=$||m.length;l===s&&(s+=1),s=Math.min(l+1,s);const x=Math.min(m.length,s-1),G=Math.max(l-s,l-x,0),h=e&&C[e]!==void 0?C[e]:-e,n=(g=L.additionalAvatar)!=null?g:S.additionalAvatar;return y.jsxs(B,o({as:b,ownerState:u,className:A(d.root,N),ref:f},R,{children:[G?y.jsxs(F,o({ownerState:u,variant:v},n,{className:A(d.avatar,n==null?void 0:n.className),style:o({marginLeft:h},n==null?void 0:n.style),children:["+",G]})):null,m.slice(0,x).reverse().map((r,j)=>i.cloneElement(r,{className:A(r.props.className,d.avatar),style:o({marginLeft:j===x-1?void 0:h},r.props.style),variant:r.props.variant||v}))]}))}),K=H;export{K as A};
