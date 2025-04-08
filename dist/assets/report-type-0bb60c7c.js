import{y as U,z as v,r as l,j as o,M as N,G as y,p as D,d as S,T as V,x as k}from"./index-76cbadce.js";import{C as F}from"./ComponentSkeleton-b7df70e0.js";import{separateByComma as M,ReactTable as A}from"./report-bd0e2a62.js";import"./Skeleton-de7aee3d.js";import"./LoadingButton-adb431a8.js";import"./react-apexcharts.min-e8e31fda.js";import"./ScrollX-c2c073b0.js";import"./Filter-9d7b8708.js";import"./DownloadOutlined-dd73438d.js";import"./CaretUpOutlined-abafc2dd.js";import"./CaretDownOutlined-18dbe8f1.js";import"./TableRow-46b3b72b.js";import"./TableCell-e1b69dbf.js";import"./Pagination-a4de3615.js";import"./index-9e1f01bf.js";import"./Checkbox-60456d01.js";import"./MinusOutlined-0ba7cfc0.js";import"./RowEditable-64a00098.js";import"./LinearWithLabel-29bf2ba4.js";import"./Slider-9f81ec77.js";import"./visuallyHidden-14c3de6e.js";import"./TableContainer-0496d285.js";import"./TableHead-4d0ea02a.js";import"./SendOutlined-87dacc3b.js";const lt=()=>{const{type:r,tab:C}=U(),j=v(),[g,R]=l.useState([]),[u,w]=l.useState([]),[b,i]=l.useState(""),P=l.useMemo(()=>[{header:"",accessorKey:"day",dataType:"text"},...u.map(m=>({header:m.name,accessorKey:m.name,dataType:"text",cell:M}))],[u]);return l.useEffect(()=>{(async()=>{const p=await k.get("/api/reports");if(p.status===200){w(p.data.games);const c=p.data.games.reduce((t,e)=>(t[e.name]=e.launchDate,t),{}),d=p.data.data.filter(t=>{const e=c[t.game];return C=="exclusive"?new Date(t.summary)<new Date(e):new Date(e)<=new Date(t.summary)});d.sort((t,e)=>new Date(t.summary)-new Date(e.summary));const h=d.reduce((t,{game:e,ggrEuro:n,uniquePlayers:a,spins:s,betsEuro:G})=>(t[e]||(t[e]={name:e,users:[],totalGGR:[],spinsPerUser:[],totalCoins:[],cwpp:[],totalGGRValue:0,totalCoinValue:0}),t[e].totalGGRValue+=n,t[e].totalCoinValue+=G,t[e].users.push(a.toFixed(2)),t[e].totalGGR.push(t[e].totalGGRValue.toFixed(2)),t[e].spinsPerUser.push((s/a).toFixed(2)),t[e].cwpp.push((G/a).toFixed(2)),t[e].totalCoins.push(t[e].totalCoinValue.toFixed(2)),t),{}),T=Math.max(...Object.values(h).map(t=>t.users.length)),x=[],f=Object.keys(c);for(let t=0;t<T;t++){const e={day:`Day ${t+1}`};for(let n=0;n<f.length;n++){const a=f[n],s=h[a];s?r==="users"?e[a]=Number(t<s.users.length?s.users[t]:0):r==="totalGGR"?e[a]=Number(t<s.totalGGR.length?s.totalGGR[t]:0):r==="spinsPerUser"?e[a]=Number(t<s.spinsPerUser.length?s.spinsPerUser[t]:0):r==="totalCoins"?e[a]=Number(t<s.totalCoins.length?s.totalCoins[t]:0):r==="cwpp"&&(e[a]=Number(t<s.cwpp.length?s.cwpp[t]:0)):(console.error(`Missing data for game: ${a}`),e[a]=0)}x.push(e)}R(x)}})(),r==="users"?i("Users"):r==="totalGGR"?i("Total GGR"):r==="spinsPerUser"?i("Spins Per User"):r==="totalCoins"?i("Total Coins"):r==="cwpp"&&i("CWPP")},[]),o.jsx(F,{children:o.jsx(N,{title:"",children:o.jsxs(y,{item:!0,xs:12,lg:12,children:[o.jsx(D,{mb:3,spacing:1,children:o.jsx(y,{item:!0,children:o.jsx(S,{variant:"contained",onClick:()=>j(-1),children:"Back"})})}),o.jsxs(D,{mb:5,spacing:3,children:[o.jsx(V,{variant:"h2",textAlign:"center",children:b}),o.jsx(A,{data:g,columns:P,setData:()=>{}})]})]})})})};export{lt as default};
