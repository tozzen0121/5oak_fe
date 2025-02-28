import{P as h,c as R,j as o,cg as P,aE as D}from"./index-22c328f7.js";import{S as y,V as r,I as z,T as t,D as F,P as N}from"./react-pdf.browser.es-9656bb82.js";const _="#262626",E="#8c8c8c",a=y.create({container:{flexDirection:"row"},detailColumn:{marginBottom:"12px",flexDirection:"column",flexGrow:2},chipTitle:{fontSize:"8px",padding:4},chip:{alignItems:"center",borderRadius:"4px",marginLeft:52,marginRight:4,marginBottom:8},leftColumn:{flexDirection:"column",width:36,marginRight:10,paddingLeft:4,marginTop:4},image:{width:90,height:28},mainContainer:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"stretch"},row:{flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-end"},title:{color:_,fontSize:"10px"},caption:{color:E,fontSize:"10px"}}),$=({list:e})=>{const c=R();return o.jsxs(r,{style:a.mainContainer,children:[o.jsxs(r,{style:a.container,children:[o.jsxs(r,{style:a.leftColumn,children:[o.jsx(z,{src:P,style:a.image}),o.jsx(t,{style:[a.caption,{marginTop:4}],children:`#${e==null?void 0:e.invoice_id}`})]}),o.jsx(r,{style:a.detailColumn,children:o.jsx(r,{style:[a.chip,{backgroundColor:(e==null?void 0:e.status)==="Paid"?c.palette.success.light+20:(e==null?void 0:e.status)==="Unpaid"?c.palette.info.light+20:c.palette.error.light+20,color:(e==null?void 0:e.status)==="Paid"?c.palette.success.main:(e==null?void 0:e.status)==="Unpaid"?c.palette.info.main:c.palette.error.main}],children:o.jsx(t,{style:a.chipTitle,children:e==null?void 0:e.status})})})]}),o.jsxs(r,{children:[o.jsxs(r,{style:[a.row,{marginTop:8}],children:[o.jsx(t,{style:a.title,children:"Date"}),o.jsxs(t,{style:a.caption,children:[" ",(e==null?void 0:e.date)&&D(new Date(e==null?void 0:e.date),"dd/MM/yyyy")]})]}),o.jsxs(r,{style:[a.row,{marginTop:8}],children:[o.jsx(t,{style:a.title,children:"Due Date"}),o.jsxs(t,{style:a.caption,children:[" ",(e==null?void 0:e.due_date)&&D(new Date(e==null?void 0:e.due_date),"dd/MM/yyyy")]})]})]})]})};$.propTypes={list:h.object};const m="#262626",M="#8c8c8c",L="#f0f0f0",n=y.create({container:{flex:1,paddingTop:16,"@media max-width: 400":{paddingTop:10,paddingLeft:0}},card:{border:`1px solid ${L}`,borderRadius:"2px",padding:"20px",width:"48%"},title:{color:m,fontSize:"12px",fontWeight:500},caption:{color:M,fontSize:"10px"},tableTitle:{color:m,fontSize:"10px",fontWeight:500},tableCell:{color:m,fontSize:"10px"},row:{flexDirection:"row",alignItems:"center",marginBottom:24},subRow:{justifyContent:"space-between",alignItems:"flex-start",margin:0,paddingBottom:20},column:{flexDirection:"column"},paragraph:{color:"#1F2937",fontSize:"12px"},tableHeader:{justifyContent:"space-between",borderBottom:"1px solid #f0f0f0",borderTop:"1px solid #f0f0f0",paddingTop:"10px",paddingBottom:"10px",margin:0,paddingLeft:10},tableRow:{alignItems:"center",justifyContent:"center",borderBottom:"1px solid #f0f0f0",paddingBottom:10,paddingTop:10,margin:0,paddingLeft:10},amountSection:{margin:0,paddingRight:25,paddingTop:16,justifyContent:"flex-end"},amountRow:{margin:0,width:"40%",justifyContent:"space-between"},pb5:{paddingBottom:5},flex03:{flex:"0.3 1 0px"},flex07:{flex:"0.7 1 0px"},flex17:{flex:"1.7 1 0px"},flex20:{flex:"2 1 0px"}}),B=({list:e})=>{var f,j,u,g,b,w,T,C,I;const c=R(),l=(f=e==null?void 0:e.invoice_detail)==null?void 0:f.reduce((d,p)=>p.name.trim().length>0?d+Number(p.price*Math.floor(p.qty)):d,0),i=Number(e==null?void 0:e.tax)*l/100,x=Number(e==null?void 0:e.discount)*l/100,s=l-x+i;return o.jsxs(r,{style:n.container,children:[o.jsxs(r,{style:[n.row,n.subRow],children:[o.jsxs(r,{style:n.card,children:[o.jsx(t,{style:[n.title,{marginBottom:8}],children:"From:"}),o.jsx(t,{style:[n.caption,n.pb5],children:(j=e==null?void 0:e.cashierInfo)==null?void 0:j.name}),o.jsx(t,{style:[n.caption,n.pb5],children:(u=e==null?void 0:e.cashierInfo)==null?void 0:u.address}),o.jsx(t,{style:[n.caption,n.pb5],children:(g=e==null?void 0:e.cashierInfo)==null?void 0:g.phone}),o.jsx(t,{style:[n.caption,n.pb5],children:(b=e==null?void 0:e.cashierInfo)==null?void 0:b.email})]}),o.jsxs(r,{style:n.card,children:[o.jsx(t,{style:[n.title,{marginBottom:8}],children:"To:"}),o.jsx(t,{style:[n.caption,n.pb5],children:(w=e==null?void 0:e.customerInfo)==null?void 0:w.name}),o.jsx(t,{style:[n.caption,n.pb5],children:(T=e==null?void 0:e.customerInfo)==null?void 0:T.address}),o.jsx(t,{style:[n.caption,n.pb5],children:(C=e==null?void 0:e.customerInfo)==null?void 0:C.phone}),o.jsx(t,{style:[n.caption,n.pb5],children:(I=e==null?void 0:e.customerInfo)==null?void 0:I.email})]})]}),o.jsxs(r,{children:[o.jsxs(r,{style:[n.row,n.tableHeader,{backgroundColor:c.palette.grey[100]}],children:[o.jsx(t,{style:[n.tableTitle,n.flex03],children:"#"}),o.jsx(t,{style:[n.tableTitle,n.flex17],children:"NAME"}),o.jsx(t,{style:[n.tableTitle,n.flex20],children:"DESCRIPTION"}),o.jsx(t,{style:[n.tableTitle,n.flex07],children:"QTY"}),o.jsx(t,{style:[n.tableTitle,n.flex07],children:"PRICE"}),o.jsx(t,{style:[n.tableTitle,n.flex07],children:"AMOUNT"})]}),e==null?void 0:e.invoice_detail.map((d,p)=>o.jsxs(r,{style:[n.row,n.tableRow],children:[o.jsx(t,{style:[n.tableCell,n.flex03],children:p+1}),o.jsx(t,{style:[n.tableCell,n.flex17,{textOverflow:"ellipsis"}],children:d.name}),o.jsx(t,{style:[n.tableCell,n.flex20],children:d.description}),o.jsx(t,{style:[n.tableCell,n.flex07],children:d.qty}),o.jsx(t,{style:[n.tableCell,n.flex07],children:`$${Number(d.price).toFixed(2)}`}),o.jsx(t,{style:[n.tableCell,n.flex07],children:`$${Number(d.price*d.qty).toFixed(2)}`})]},d.id))]}),o.jsx(r,{style:[n.row,{paddingTop:25,margin:0,paddingRight:25,justifyContent:"flex-end"}],children:o.jsxs(r,{style:[n.row,n.amountRow],children:[o.jsx(t,{style:n.caption,children:"Sub Total:"}),o.jsxs(t,{style:n.tableCell,children:["$",l==null?void 0:l.toFixed(2)]})]})}),o.jsx(r,{style:[n.row,n.amountSection],children:o.jsxs(r,{style:[n.row,n.amountRow],children:[o.jsx(t,{style:n.caption,children:"Discount:"}),o.jsxs(t,{style:[n.caption,{color:c.palette.success.main}],children:["$",x==null?void 0:x.toFixed(2)]})]})}),o.jsx(r,{style:[n.row,n.amountSection],children:o.jsxs(r,{style:[n.row,n.amountRow],children:[o.jsx(t,{style:n.caption,children:"Tax:"}),o.jsxs(t,{style:[n.caption],children:["$",i==null?void 0:i.toFixed(2)]})]})}),o.jsx(r,{style:[n.row,n.amountSection],children:o.jsxs(r,{style:[n.row,n.amountRow],children:[o.jsx(t,{style:n.tableCell,children:"Grand Total:"}),o.jsxs(t,{style:n.tableCell,children:["$",s%1===0?s:s==null?void 0:s.toFixed(2)]})]})}),o.jsxs(r,{style:[n.row,{alignItems:"flex-start",marginTop:20,width:"95%"}],children:[o.jsx(t,{style:n.caption,children:"Notes "}),o.jsxs(t,{style:n.tableCell,children:[" ","It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!"]})]})]})};B.propTypes={list:h.object};const S=y.create({page:{padding:30},container:{flex:1,flexDirection:"row","@media max-width: 400":{flexDirection:"column"}}}),k=({list:e})=>{var i,x;let c=(e==null?void 0:e.invoiceId)||(e==null?void 0:e.invoice_id),l=(e==null?void 0:e.customer_name)||((i=e==null?void 0:e.from)==null?void 0:i.name)||((x=e==null?void 0:e.customerInfo)==null?void 0:x.name);return o.jsx(F,{title:`${c} ${l}`,children:o.jsxs(N,{size:"A4",style:S.page,children:[o.jsx($,{list:e}),o.jsx(r,{style:S.container,children:o.jsx(B,{list:e})})]})})};k.propTypes={list:h.object};export{k as E};
