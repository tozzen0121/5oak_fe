import{r,j as a,G as i,p as n,M as o,ad as W,_ as E,Q as c,T as H,D as L}from"./index-0e1e62d2.js";import{C as N}from"./ComponentHeader-406c8be8.js";import{C as D,a as Q}from"./ComponentSkeleton-734c8697.js";import{P as e}from"./Pagination-0cf02d6e.js";import{T as V}from"./TablePagination-1f0280c2.js";import"./Skeleton-03b719d8.js";import"./KeyboardArrowRight-bc74c91d.js";import"./TableCell-28fbe66c.js";const Z=()=>{const[P,u]=r.useState(2),[m,h]=r.useState(10),x=(t,s)=>{u(s)},j=t=>{h(parseInt(t.target.value,10)),u(0)},[l,v]=r.useState(10),[f,d]=r.useState(!1),y=t=>{v(+t.target.value)},C=()=>{d(!1)},S=()=>{d(!0)},[b,g]=r.useState(1),[w,p]=r.useState(1),I=(t,s)=>{g(s)},M=t=>{+t.target.value>0&&+t.target.value<=100/l?(p(+t.target.value),g(+t.target.value)):p("")},z=`<Pagination count={10} defaultPage={1} color="primary" />
  <Pagination count={10} defaultPage={2} variant="contained" color="primary" />
  <Pagination count={10} defaultPage={3} variant="outlined" color="secondary" />
  <Pagination count={10} defaultPage={4} disabled />`,B=`<Pagination count={10} defaultPage={1} size="small" color="primary" />
  <Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
  <Pagination count={10} defaultPage={3} size="large" variant="contained" color="secondary" />`,T=`<Pagination count={11} defaultPage={1} siblingCount={0} color="primary" />
  <Pagination count={11} defaultPage={2} color="primary" />
  <Pagination count={11} defaultPage={3} color="primary" variant="combined" />
  <Pagination count={11} defaultPage={4} siblingCount={0} boundaryCount={2} variant="outlined" color="primary" />
  <Pagination count={11} defaultPage={5} boundaryCount={2} variant="contained" color="primary" />`,F=`<Pagination
    count={100 / rows}
    page={currentPage}
    onChange={handleChangePagination}
    color="primary"
    variant="combined"
  />
  <FormControl sx={{ m: 1, minWidth: 120 }}>
    <Select
      id="demo-controlled-open-select"
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      value={rows}
      onChange={handleChange}
      size="small"
      sx={{ '& .MuiSelect-select': { py: 0.75, px: 1.25 } }}
    >
      <MenuItem value={5}>5 / page</MenuItem>
      <MenuItem value={10}>10 / page</MenuItem>
      <MenuItem value={25}>25 / page</MenuItem>
      <MenuItem value={50}>50 / page</MenuItem>
      <MenuItem value={100}>100 / page</MenuItem>
    </Select>
  </FormControl>
  <Stack direction="row" spacing={1} alignItems="center">
    <Typography variant="h6">Go to</Typography>
    <TextField
      id="outlined-name"
      placeholder="Page"
      value={goto}
      onChange={handleChangeGoto}
      size="small"
      sx={{ '& .MuiOutlinedInput-input': { py: 0.75, px: 1.25, width: 50 } }}
    />
  </Stack>`,G=`<Pagination count={10} defaultPage={1} color="primary" />
  <Pagination count={10} defaultPage={2} variant="outlined" color="primary" />
  <Pagination count={10} defaultPage={3} variant="contained" color="primary" />
  <Pagination count={10} defaultPage={4} variant="combined" color="primary" />`,O=`<Pagination count={10} defaultPage={1} color="primary" shape="circular" />
  <Pagination count={10} defaultPage={2} variant="outlined" color="primary" shape="circular" />
  <Pagination count={10} defaultPage={3} variant="contained" color="primary" shape="circular" />
  <Pagination count={10} defaultPage={4} variant="combined" color="primary" shape="circular" />`,R=`<Pagination count={10} showFirstButton showLastButton variant="combined" color="primary" />
  <Pagination count={10} hidePrevButton hideNextButton variant="contained" shape="circular" />`,k=`<Pagination count={10} defaultPage={6} color="primary" />
  <Pagination count={10} defaultPage={6} variant="outlined" color="secondary" />
  <Pagination count={10} defaultPage={6} variant="contained" color="success" />
  <Pagination count={10} defaultPage={6} variant="combined" color="warning" />
  <Pagination count={10} defaultPage={6} variant="outlined" color="info" shape="circular" />
  <Pagination count={10} defaultPage={6} variant="contained" color="error" shape="circular" />`;return a.jsxs(D,{children:[a.jsx(N,{title:"Pagination",caption:"The Pagination component enables the user to select a specific page from a range of pages.",directory:"src/pages/components-overview/pagination",link:"https://mui.com/material-ui/react-pagination/"}),a.jsx(Q,{children:a.jsxs(i,{container:!0,spacing:3,children:[a.jsx(i,{item:!0,xs:12,lg:6,children:a.jsxs(n,{spacing:3,children:[a.jsx(o,{title:"Basic",codeHighlight:!0,codeString:z,children:a.jsxs(n,{spacing:2,children:[a.jsx(e,{count:10,defaultPage:1,color:"primary"}),a.jsx(e,{count:10,defaultPage:2,variant:"contained",color:"primary"}),a.jsx(e,{count:10,defaultPage:3,variant:"outlined",color:"secondary"}),a.jsx(e,{count:10,defaultPage:4,disabled:!0})]})}),a.jsx(o,{title:"Size",codeString:B,children:a.jsxs(n,{spacing:2,children:[a.jsx(e,{count:10,defaultPage:1,size:"small",color:"primary"}),a.jsx(e,{count:10,defaultPage:2,variant:"outlined",color:"primary"}),a.jsx(e,{count:10,defaultPage:3,size:"large",variant:"contained",color:"secondary"})]})}),a.jsx(o,{title:"Ranges",codeString:T,children:a.jsxs(n,{spacing:2,children:[a.jsx(e,{count:11,defaultPage:1,siblingCount:0,color:"primary"}),a.jsx(e,{count:11,defaultPage:2,color:"primary"}),a.jsx(e,{count:11,defaultPage:3,color:"primary",variant:"combined"}),a.jsx(e,{count:11,defaultPage:4,siblingCount:0,boundaryCount:2,variant:"outlined",color:"primary"}),a.jsx(e,{count:11,defaultPage:5,boundaryCount:2,variant:"contained",color:"primary"})]})}),a.jsx(o,{title:"Tables",codeString:F,children:a.jsxs(a.Fragment,{children:[a.jsxs(i,{container:!0,alignItems:"center",justifyContent:"flex-end",spacing:.5,children:[a.jsx(i,{item:!0,children:a.jsx(e,{count:100/l,page:b,onChange:I,color:"primary",variant:"combined"})}),a.jsx(i,{item:!0,children:a.jsx(W,{sx:{m:1,minWidth:120},children:a.jsxs(E,{id:"demo-controlled-open-select",open:f,onClose:C,onOpen:S,value:l,onChange:y,size:"small",sx:{"& .MuiSelect-select":{py:.75,px:1.25}},children:[a.jsx(c,{value:5,children:"5 / page"}),a.jsx(c,{value:10,children:"10 / page"}),a.jsx(c,{value:25,children:"25 / page"}),a.jsx(c,{value:50,children:"50 / page"}),a.jsx(c,{value:100,children:"100 / page"})]})})}),a.jsx(i,{item:!0,children:a.jsxs(n,{direction:"row",spacing:1,alignItems:"center",children:[a.jsx(H,{variant:"h6",children:"Go to"}),a.jsx(L,{id:"outlined-name",placeholder:"Page",value:w,onChange:M,size:"small",sx:{"& .MuiOutlinedInput-input":{py:.75,px:1.25,width:50}}})]})})]}),a.jsx(V,{component:"div",count:100,page:P,onPageChange:x,rowsPerPage:m,onRowsPerPageChange:j})]})})]})}),a.jsx(i,{item:!0,xs:12,lg:6,children:a.jsxs(n,{spacing:3,children:[a.jsx(o,{title:"Variants",codeString:G,children:a.jsxs(n,{spacing:2,children:[a.jsx(e,{count:10,defaultPage:1,color:"primary"}),a.jsx(e,{count:10,defaultPage:2,variant:"outlined",color:"primary"}),a.jsx(e,{count:10,defaultPage:3,variant:"contained",color:"primary"}),a.jsx(e,{count:10,defaultPage:4,variant:"combined",color:"primary"})]})}),a.jsx(o,{title:"Circular",codeString:O,children:a.jsxs(n,{spacing:2,children:[a.jsx(e,{count:10,defaultPage:1,color:"primary",shape:"circular"}),a.jsx(e,{count:10,defaultPage:2,variant:"outlined",color:"primary",shape:"circular"}),a.jsx(e,{count:10,defaultPage:3,variant:"contained",color:"primary",shape:"circular"}),a.jsx(e,{count:10,defaultPage:4,variant:"combined",color:"primary",shape:"circular"})]})}),a.jsx(o,{title:"Buttons",codeString:R,children:a.jsx(n,{spacing:2,children:a.jsxs(n,{spacing:2,children:[a.jsx(e,{count:10,showFirstButton:!0,showLastButton:!0,variant:"combined",color:"primary"}),a.jsx(e,{count:10,hidePrevButton:!0,hideNextButton:!0,variant:"contained",shape:"circular"})]})})}),a.jsx(o,{title:"Colors",codeString:k,children:a.jsx(n,{spacing:2,children:a.jsxs(n,{spacing:2,children:[a.jsx(e,{count:10,defaultPage:6,color:"primary"}),a.jsx(e,{count:10,defaultPage:6,variant:"outlined",color:"secondary"}),a.jsx(e,{count:10,defaultPage:6,variant:"contained",color:"success"}),a.jsx(e,{count:10,defaultPage:6,variant:"combined",color:"warning"}),a.jsx(e,{count:10,defaultPage:6,variant:"outlined",color:"info",shape:"circular"}),a.jsx(e,{count:10,defaultPage:6,variant:"contained",color:"error",shape:"circular"})]})})})]})})]})})]})};export{Z as default};
