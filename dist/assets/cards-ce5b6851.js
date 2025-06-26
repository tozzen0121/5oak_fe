import{P as u,r as M,j as e,B as v,T as t,c as L,X as P,G as r,M as a,e as S,L as B,I as l,a2 as d,a6 as h,i as m}from"./index-0e2d5618.js";import{C as q}from"./ComponentHeader-ec032122.js";import{C as w,a as A}from"./ComponentSkeleton-ec647e24.js";import{T as O,a as y}from"./Tabs-18eb2575.js";import{T as R,a as x}from"./ToggleButtonGroup-e4e63bdc.js";import{E as k}from"./EditOutlined-b54325a8.js";import{E as z}from"./EllipsisOutlined-653da25e.js";import{M as c}from"./MoreOutlined-35954c4b.js";import"./Skeleton-c1bb4e34.js";import"./KeyboardArrowRight-4e86ba44.js";function p({children:i,value:o,index:n,...s}){return e.jsx("div",{role:"tabpanel",hidden:o!==n,id:`simple-tabpanel-${n}`,"aria-labelledby":`simple-tab-${n}`,...s,children:o===n&&e.jsx(v,{sx:{p:3},children:i})})}p.propTypes={children:u.node,index:u.number,value:u.number};function b(i){return{id:`simple-tab-${i}`,"aria-controls":`simple-tabpanel-${i}`}}function C({activeTab:i}){const[o,n]=M.useState(i||0),s=(j,g)=>{n(g)};return e.jsxs(v,{sx:{width:"100%"},children:[e.jsx(v,{sx:{borderBottom:1,borderColor:"divider"},children:e.jsxs(O,{value:o,onChange:s,"aria-label":"basic tabs example",children:[e.jsx(y,{label:"Article",...b(0)}),e.jsx(y,{label:"App",...b(1)}),e.jsx(y,{label:"Project",...b(2)})]})}),e.jsxs(p,{value:o,index:0,children:[e.jsx(t,{variant:"h5",gutterBottom:!0,color:"textSecondary",children:"Article Content"}),e.jsx(t,{variant:"h6",gutterBottom:!i,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem, sagittis eu mauris et, viverra lobortis urna."}),!i&&e.jsx(t,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque."})]}),e.jsxs(p,{value:o,index:1,children:[e.jsx(t,{variant:"h5",gutterBottom:!0,color:"textSecondary",children:"App Content"}),e.jsx(t,{variant:"h6",children:"Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet."})]}),e.jsxs(p,{value:o,index:2,children:[e.jsx(t,{variant:"h5",gutterBottom:!0,color:"textSecondary",children:"Project Content"}),e.jsx(t,{variant:"h6",children:"Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat cursus in nec est."})]})]})}C.propTypes={activeTab:u.number};const T="/assets/card-media-8e2abf7b.png",V=()=>{const i=L(),o=e.jsxs(R,{fullWidth:!0,color:"primary",exclusive:!0,"aria-label":"text alignment",size:"small",sx:{p:1,"& .MuiToggleButton-root":{borderRadius:0,p:.75,"&:not(.Mui-selected)":{borderTopColor:"transparent",borderBottomColor:"transparent"},"&:first-of-type":{borderLeftColor:"transparent"},"&:last-of-type":{borderRightColor:"transparent"},"&:hover":{bgcolor:"transparent",color:i.palette.primary.main}}},children:[e.jsx(x,{value:"web","aria-label":"web",children:e.jsx(P,{})}),e.jsx(x,{value:"android","aria-label":"android",children:e.jsx(k,{})}),e.jsx(x,{value:"ios","aria-label":"ios",children:e.jsx(z,{})})]}),n=`<MainCard border={false} boxShadow shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>

<MainCard title="Card Title" border={false} boxShadow shadow={theme.customShadows.z1} sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>`,s=`<MainCard sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>

<MainCard title="Card Title" sx={{ height: '100%' }}>
  <Typography variant="h6">Card Subtitle</Typography>
  <Typography variant="caption" color="textSecondary">
    This is card description
  </Typography>
</MainCard>`,j=`<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      More
    </Link>
  }
>
  <Typography variant="h5" color="textSecondary" gutterBottom>
    Card Subtitle
  </Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim.
  </Typography>
</MainCard>
<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
>
  <Typography variant="h5" color="textSecondary" gutterBottom>
    Card Subtitle
  </Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper
    ligula. Mauris purus sem.
  </Typography>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
  content={false}
>
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: theme.palette.primary.main
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web" disableRipple>
      <SettingOutlined />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android" disableRipple>
      <EditOutlined />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios" disableRipple>
      <EllipsisOutlined />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>`,g=`<MainCard content={false}>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu.
    </Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: theme.palette.primary.main
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web" disableRipple>
      <SettingOutlined />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android" disableRipple>
      <EditOutlined />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios" disableRipple>
      <EllipsisOutlined />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
  content={false}
>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu,
    </Typography>
  </CardContent>
</MainCard>

<MainCard
  title="Card Title"
  secondary={
    <Link color="primary" href="/">
      <MoreOutlined />
    </Link>
  }
  content={false}
>
  <CardMedia component="img" image={media} alt="green iguana" />
  <CardContent>
    <Typography variant="h5" color="textSecondary" gutterBottom>
      Card Subtitle
    </Typography>
    <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
  </CardContent>
  <Divider />
  <ToggleButtonGroup
    fullWidth
    color="primary"
    exclusive
    aria-label="text alignment"
    size="small"
    sx={{
      p: 1,
      '& .MuiToggleButton-root': {
        borderRadius: 0,
        p: 0.75,
        '&:not(.Mui-selected)': {
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        },
        '&:first-of-type': {
          borderLeftColor: 'transparent'
        },
        '&:last-of-type': {
          borderRightColor: 'transparent'
        },
        '&:hover': {
          bgcolor: 'transparent',
          color: theme.palette.primary.main
        }
      }
    }}
  >
    <ToggleButton value="web" aria-label="web" disableRipple>
      <SettingOutlined />
    </ToggleButton>
    <ToggleButton value="android" aria-label="android" disableRipple>
      <EditOutlined />
    </ToggleButton>
    <ToggleButton value="ios" aria-label="ios" disableRipple>
      <EllipsisOutlined />
    </ToggleButton>
  </ToggleButtonGroup>
</MainCard>`,f=`<MainCard content={false}>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Article" {...a11yProps(0)} />
        <Tab label="App" {...a11yProps(1)} />
        <Tab label="Project" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Article Content
      </Typography>
      <Typography variant="h6" gutterBottom={!activeTab}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
        purus sem, sagittis eu mauris et, viverra lobortis urna.
      </Typography>
      {!activeTab && (
        <Typography variant="h6">
          Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis.
          Suspendisse blandit velit sit amet velit porta aliquet.
        </Typography>
      )}
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        App Content
      </Typography>
      <Typography variant="h6">
        Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
        semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Project Content
      </Typography>
      <Typography variant="h6">
        Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
        cursus in nec est.
      </Typography>
    </TabPanel>
  </Box>
</MainCard>

<MainCard
  title="Card Title"
  divider={false}
  content={false}
  secondary={
    <Link color="primary" href="/">
      More
    </Link>
  }
>
  <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Article" {...a11yProps(0)} />
        <Tab label="App" {...a11yProps(1)} />
        <Tab label="Project" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value} index={0}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Article Content
      </Typography>
      <Typography variant="h6" gutterBottom={!activeTab}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris
        purus sem, sagittis eu mauris et, viverra lobortis urna.
      </Typography>
      {!activeTab && (
        <Typography variant="h6">
          Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis.
          Suspendisse blandit velit sit amet velit porta aliquet.
        </Typography>
      )}
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        App Content
      </Typography>
      <Typography variant="h6">
        Suspendisse sed lectus ac nunc rhoncus scelerisque. Integer vitae fringilla leo. Aliquam tincidunt et turpis non mattis. Ut sed
        semper orci, sed facilisis mauris. Suspendisse blandit velit sit amet velit porta aliquet.
      </Typography>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Typography variant="h5" gutterBottom color="textSecondary">
        Project Content
      </Typography>
      <Typography variant="h6">
        Nam egestas sollicitudin nisl, sit amet aliquam risus pharetra ac. Donec ac lacinia orci. Phasellus ut enim eu ligula placerat
        cursus in nec est.
      </Typography>
    </TabPanel>
  </Box>
</MainCard>`;return e.jsxs(w,{children:[e.jsx(q,{title:"Card",caption:"Cards contain content and actions about a single subject.",directory:"src/pages/components-overview/cards",link:"https://mui.com/material-ui/react-card/"}),e.jsx(A,{children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Basic",codeString:n,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{border:!1,boxShadow:!0,shadow:i.customShadows.z1,sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"textSecondary",children:"This is card description"})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",border:!1,boxShadow:!0,shadow:i.customShadows.z1,sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"textSecondary",children:"This is card description"})]})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Outlined",codeString:s,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"textSecondary",children:"This is card description"})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",sx:{height:"100%"},children:[e.jsx(t,{variant:"h6",children:"Card Subtitle"}),e.jsx(t,{variant:"caption",color:"textSecondary",children:"This is card description"})]})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Action",codeString:j,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(S,{component:B,to:"#",color:"primary",children:"More"}),children:[e.jsx(t,{variant:"h5",color:"textSecondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim."})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(l,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),children:[e.jsx(t,{variant:"h5",color:"textSecondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu, semper ligula. Mauris purus sem."})]})}),e.jsx(r,{item:!0,xs:12,md:6,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(l,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),content:!1,children:[e.jsxs(d,{children:[e.jsx(t,{variant:"h5",color:"textSecondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(h,{}),o]})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Complex Interaction",codeString:f,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{content:!1,children:e.jsx(C,{})})}),e.jsx(r,{item:!0,xs:12,children:e.jsx(a,{title:"Card Title",divider:!1,content:!1,secondary:e.jsx(S,{component:B,to:"#",color:"primary",children:"More"}),children:e.jsx(C,{activeTab:2})})})]})})}),e.jsx(r,{item:!0,xs:12,lg:6,children:e.jsx(a,{title:"Media",codeString:g,children:e.jsxs(r,{container:!0,spacing:3,children:[e.jsx(r,{item:!0,xs:12,sm:6,lg:4,children:e.jsxs(a,{content:!1,children:[e.jsx(m,{component:"img",image:T,alt:"green iguana"}),e.jsxs(d,{children:[e.jsx(t,{variant:"h5",color:"textSecondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu."})]}),e.jsx(h,{}),o]})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:4,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(l,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),content:!1,children:[e.jsx(m,{component:"img",image:T,alt:"green iguana"}),e.jsxs(d,{children:[e.jsx(t,{variant:"h5",color:"textSecondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non libero dignissim, viverra augue eu,"})]})]})}),e.jsx(r,{item:!0,xs:12,sm:6,lg:4,children:e.jsxs(a,{title:"Card Title",secondary:e.jsx(l,{size:"small",color:"secondary",children:e.jsx(c,{style:{fontSize:"1.15rem"}})}),content:!1,children:[e.jsx(m,{component:"img",image:T,alt:"green iguana"}),e.jsxs(d,{children:[e.jsx(t,{variant:"h5",color:"textSecondary",gutterBottom:!0,children:"Card Subtitle"}),e.jsx(t,{variant:"body1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(h,{}),o]})})]})})})]})})]})};export{V as default};
