import{r as o,R as I}from"./index-22c328f7.js";/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function k(){return k=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},k.apply(this,arguments)}function Me(n,e){if(n==null)return{};var r={},t=Object.keys(n),a,i;for(i=0;i<t.length;i++)a=t[i],!(e.indexOf(a)>=0)&&(r[a]=n[a]);return r}var ke=["bottom","height","left","right","top","width"],$e=function(e,r){return e===void 0&&(e={}),r===void 0&&(r={}),ke.some(function(t){return e[t]!==r[t]})},R=new Map,ve,Ce=function n(){var e=[];R.forEach(function(r,t){var a=t.getBoundingClientRect();$e(a,r.rect)&&(r.rect=a,e.push(r))}),e.forEach(function(r){r.callbacks.forEach(function(t){return t(r.rect)})}),ve=window.requestAnimationFrame(n)};function we(n,e){return{observe:function(){var t=R.size===0;R.has(n)?R.get(n).callbacks.push(e):R.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[e]}),t&&Ce()},unobserve:function(){var t=R.get(n);if(t){var a=t.callbacks.indexOf(e);a>=0&&t.callbacks.splice(a,1),t.callbacks.length||R.delete(n),R.size||cancelAnimationFrame(ve)}}}}var L=typeof window<"u"?o.useLayoutEffect:o.useEffect;function Te(n,e){var r=e.rect;return n.height!==r.height||n.width!==r.width?r:n}var Fe=function(e,r){r===void 0&&(r={width:0,height:0});var t=I.useState(e.current),a=t[0],i=t[1],v=I.useReducer(Te,r),m=v[0],b=v[1],p=I.useRef(!1);return L(function(){e.current!==a&&i(e.current)}),L(function(){if(a&&!p.current){p.current=!0;var S=a.getBoundingClientRect();b({rect:S})}},[a]),I.useEffect(function(){if(a){var S=we(a,function($){b({rect:$})});return S.observe(),function(){S.unobserve()}}},[a]),m},Ie=["align"],Le=function(){return 50},Ke=function(e){return e},je=function(e,r){var t=r?"offsetWidth":"offsetHeight";return e[t]},Be=function(e){for(var r=Math.max(e.start-e.overscan,0),t=Math.min(e.end+e.overscan,e.size-1),a=[],i=r;i<=t;i++)a.push(i);return a},qe=function(e){var r,t=e.size,a=t===void 0?0:t,i=e.estimateSize,v=i===void 0?Le:i,m=e.overscan,b=m===void 0?1:m,p=e.paddingStart,S=p===void 0?0:p,$=e.paddingEnd,de=$===void 0?0:$,y=e.parentRef,H=e.horizontal,C=H===void 0?!1:H,me=e.scrollToFn,he=e.useObserver,ge=e.initialRect,V=e.onScrollElement,D=e.scrollOffsetFn,G=e.keyExtractor,J=G===void 0?Ke:G,Q=e.measureSize,U=Q===void 0?je:Q,X=e.rangeExtractor,Y=X===void 0?Be:X,Se=C?"width":"height",w=C?"scrollLeft":"scrollTop",h=o.useRef({outerSize:0,scrollOffset:0,measurements:[],totalSize:0}),Z=o.useState(0),ze=Z[0],_=Z[1];h.current.scrollOffset=ze;var Re=he||Fe,pe=Re(y,ge),Ee=pe[Se];h.current.outerSize=Ee;var O=o.useCallback(function(s){y.current&&(y.current[w]=s)},[y,w]),ee=me||O,T=o.useCallback(function(s){ee(s,O)},[O,ee]),re=o.useState({}),te=re[0],K=re[1],be=o.useCallback(function(){return K({})},[]),F=o.useRef([]),x=o.useMemo(function(){var s=F.current.length>0?Math.min.apply(Math,F.current):0;F.current=[];for(var f=h.current.measurements.slice(0,s),c=s;c<a;c++){var u=J(c),z=te[u],d=f[c-1]?f[c-1].end:S,g=typeof z=="number"?z:v(c),E=d+g;f[c]={index:c,start:d,size:g,end:E,key:u}}return f},[v,te,S,a,J]),ae=(((r=x[a-1])==null?void 0:r.end)||S)+de;h.current.measurements=x,h.current.totalSize=ae;var M=V?V.current:y.current,j=o.useRef(D);j.current=D,L(function(){if(!M){_(0);return}var s=function(c){var u=j.current?j.current(c):M[w];_(u)};return s(),M.addEventListener("scroll",s,{capture:!1,passive:!0}),function(){M.removeEventListener("scroll",s)}},[M,w]);var ne=Ae(h.current),se=ne.start,ue=ne.end,B=o.useMemo(function(){return Y({start:se,end:ue,overscan:b,size:x.length})},[se,ue,b,x.length,Y]),ie=o.useRef(U);ie.current=U;var xe=o.useMemo(function(){for(var s=[],f=function(d,g){var E=B[d],N=x[E],l=k({},N,{measureRef:function(fe){if(fe){var q=ie.current(fe,C);if(q!==l.size){var le=h.current.scrollOffset;l.start<le&&O(le+(q-l.size)),F.current.push(E),K(function(Oe){var W;return k({},Oe,(W={},W[l.key]=q,W))})}}}});s.push(l)},c=0,u=B.length;c<u;c++)f(c);return s},[B,O,C,x]),ce=o.useRef(!1);L(function(){ce.current&&K({}),ce.current=!0},[v]);var P=o.useCallback(function(s,f){var c=f===void 0?{align:"start"}:f,u=c.align,z=h.current,d=z.scrollOffset,g=z.outerSize;u==="auto"&&(s<=d?u="start":s>=d+g?u="end":u="start"),u==="start"?T(s):u==="end"?T(s-g):u==="center"&&T(s-g/2)},[T]),A=o.useCallback(function(s,f){var c=f===void 0?{align:"auto"}:f,u=c.align,z=Me(c,Ie),d=h.current,g=d.measurements,E=d.scrollOffset,N=d.outerSize,l=g[Math.max(0,Math.min(s,a-1))];if(l){if(u==="auto")if(l.end>=E+N)u="end";else if(l.start<=E)u="start";else return;var oe=u==="center"?l.start+l.size/2:u==="end"?l.end:l.start;P(oe,k({align:u},z))}},[P,a]),ye=o.useCallback(function(s,f){A(s,f),requestAnimationFrame(function(){A(s,f)})},[A]);return{virtualItems:xe,totalSize:ae,scrollToOffset:P,scrollToIndex:ye,measure:be}},Pe=function(e,r,t,a){for(;e<=r;){var i=(e+r)/2|0,v=t(i);if(v<a)e=i+1;else if(v>a)r=i-1;else return i}return e>0?e-1:0};function Ae(n){for(var e=n.measurements,r=n.outerSize,t=n.scrollOffset,a=e.length-1,i=function(p){return e[p].start},v=Pe(0,a,i,t),m=v;m<a&&e[m].end<t+r;)m++;return{start:v,end:m}}export{qe as u};
