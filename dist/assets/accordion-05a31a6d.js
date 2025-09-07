import{j as e,M as u,d7 as a,d8 as o,T as i,d9 as s,r as g,c as y,B as b,p as m,G as p}from"./index-385486e1.js";import{C as A}from"./ComponentHeader-68d9f612.js";import{C as S,a as j}from"./ComponentSkeleton-5c04c834.js";import{S as L}from"./SmileOutlined-0aa88ed4.js";import{U as T}from"./UserOutlined-4850db38.js";import{C}from"./ClockCircleOutlined-177d37a3.js";import{P as v}from"./PictureOutlined-6d894127.js";import"./Skeleton-81b92fc8.js";const D=()=>{const t=`<Accordion>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion>
  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
    <Typography variant="h6">Accordion 05</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`;return e.jsx(u,{title:"Basic",codeString:t,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(o,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 01"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{children:[e.jsx(o,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 02"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{children:[e.jsx(o,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 03"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{children:[e.jsx(o,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 04"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{children:[e.jsx(o,{"aria-controls":"panel5d-content",id:"panel5d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 05"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})},f=()=>{const[t,d]=g.useState(!1),n=l=>(h,c)=>{d(c?l:!1)},r=`<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} disabled>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} disabled>
  <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
    <Typography variant="h6">Accordion 05</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`;return e.jsx(u,{title:"Disabled",codeString:r,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{expanded:t==="panel1",onChange:n("panel1"),children:[e.jsx(o,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 01"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel2",onChange:n("panel2"),children:[e.jsx(o,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 02"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel3",onChange:n("panel3"),children:[e.jsx(o,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 03"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel4",onChange:n("panel4"),disabled:!0,children:[e.jsx(o,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 04"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel5",onChange:n("panel5"),disabled:!0,children:[e.jsx(o,{"aria-controls":"panel5d-content",id:"panel5d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 05"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})},k=()=>{const[t,d]=g.useState(!1),n=l=>(h,c)=>{d(c?l:!1)},r=`<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`;return e.jsx(u,{title:"Controlled",codeString:r,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{expanded:t==="panel1",onChange:n("panel1"),children:[e.jsx(o,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 01"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel2",onChange:n("panel2"),children:[e.jsx(o,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 02"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel3",onChange:n("panel3"),children:[e.jsx(o,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 03"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel4",onChange:n("panel4"),children:[e.jsx(o,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 04"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})},w=()=>{const[t,d]=g.useState(!1),n=l=>(h,c)=>{d(c?l:!1)},r=`<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
    <Typography variant="h6">Accordion 01</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
    <Typography variant="h6">Accordion 02</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
    <Typography variant="h6">Accordion 03</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>
<Accordion expanded>
  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
    <Typography variant="h6">Accordion 04</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
  </AccordionDetails>
</Accordion>`;return e.jsx(u,{title:"Fixed",codeString:r,children:e.jsxs(e.Fragment,{children:[e.jsxs(a,{expanded:t==="panel1",onChange:n("panel1"),children:[e.jsx(o,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 01"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel2",onChange:n("panel2"),children:[e.jsx(o,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 02"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:t==="panel3",onChange:n("panel3"),children:[e.jsx(o,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 03"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:!0,children:[e.jsx(o,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsx(i,{variant:"h6",children:"Accordion 04"})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})},M=()=>{const t=y(),[d,n]=g.useState("panel1"),r=h=>(c,x)=>{n(x?h:!1)},l=`<Box
  sx={{
    '& .MuiAccordion-root': {
      borderColor: theme.palette.divider,
      '& .MuiAccordionSummary-root': {
        bgcolor: 'transparent',
        flexDirection: 'row'
      },
      '& .MuiAccordionDetails-root': {
        borderColor: theme.palette.divider
      },
      '& .Mui-expanded': {
        color: theme.palette.primary.main
      }
    }
  }}
>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <SmileOutlined />
        <Typography variant="h6">Accordion 01</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Stack spacing={2}>
        <Typography variant="h5">Lorem ipsum dolor sit amet,</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </Stack>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <UserOutlined />
        <Typography variant="h6">Accordion 02</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <ClockCircleOutlined />
        <Typography variant="h6">Accordion 03</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
    <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
      <Stack direction="row" spacing={1.5} alignItems="center">
        <PictureOutlined />
        <Typography variant="h6">Accordion 04</Typography>
      </Stack>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
</Box>`;return e.jsx(u,{title:"Customized",codeString:l,children:e.jsxs(b,{sx:{"& .MuiAccordion-root":{borderColor:t.palette.divider,"& .MuiAccordionSummary-root":{bgcolor:"transparent",flexDirection:"row","&:focus-visible":{bgcolor:"primary.lighter"}},"& .MuiAccordionDetails-root":{borderColor:t.palette.divider},"& .Mui-expanded":{color:t.palette.primary.main}}},children:[e.jsxs(a,{expanded:d==="panel1",onChange:r("panel1"),children:[e.jsx(o,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e.jsxs(m,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(L,{}),e.jsx(i,{variant:"h6",children:"Accordion 01"})]})}),e.jsx(s,{children:e.jsxs(m,{spacing:2,children:[e.jsx(i,{variant:"h5",children:"Lorem ipsum dolor sit amet,"}),e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}),e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]})})]}),e.jsxs(a,{expanded:d==="panel2",onChange:r("panel2"),children:[e.jsx(o,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e.jsxs(m,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(T,{}),e.jsx(i,{variant:"h6",children:"Accordion 02"})]})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:d==="panel3",onChange:r("panel3"),children:[e.jsx(o,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e.jsxs(m,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(C,{}),e.jsx(i,{variant:"h6",children:"Accordion 03"})]})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e.jsxs(a,{expanded:d==="panel4",onChange:r("panel4"),children:[e.jsx(o,{"aria-controls":"panel4d-content",id:"panel4d-header",children:e.jsxs(m,{direction:"row",spacing:1.5,alignItems:"center",children:[e.jsx(v,{}),e.jsx(i,{variant:"h6",children:"Accordion 04"})]})}),e.jsx(s,{children:e.jsx(i,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})})},G=()=>e.jsxs(S,{children:[e.jsx(A,{title:"Accordion",caption:"Lists are continuous, vertical indexes of text or images.",directory:"src/pages/components-overview/accordion",link:"https://mui.com/material-ui/react-accordion/"}),e.jsx(j,{children:e.jsxs(p,{container:!0,spacing:3,children:[e.jsx(p,{item:!0,xs:12,lg:6,children:e.jsx(D,{})}),e.jsx(p,{item:!0,xs:12,lg:6,children:e.jsx(f,{})}),e.jsx(p,{item:!0,xs:12,lg:6,children:e.jsx(k,{})}),e.jsx(p,{item:!0,xs:12,lg:6,children:e.jsx(w,{})}),e.jsx(p,{item:!0,xs:12,lg:6,children:e.jsx(M,{})})]})})]});export{G as default};
