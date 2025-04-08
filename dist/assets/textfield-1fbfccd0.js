import{r as S,j as e,G as d,p as l,M as i,D as t,ao as r,I as o,ad as v,aQ as C}from"./index-4ec2acc9.js";import{C as A}from"./ComponentHeader-ef0a2d07.js";import{C as P,a as O}from"./ComponentSkeleton-8ac3d3ba.js";import{I as a}from"./InputAdornment-35ce84c4.js";import{E as W}from"./EyeOutlined-a46660da.js";import{E as u}from"./EyeInvisibleOutlined-93b707a0.js";import{M}from"./MailOutlined-0ac5197f.js";import"./Skeleton-2744104e.js";const D=()=>{const[n,c]=S.useState({password:"",showPassword:!1}),p=s=>T=>{c({...n,[s]:T.target.value})},x=()=>{c({...n,showPassword:!n.showPassword})},h=s=>{s.preventDefault()},m=`<TextField id="outlined-basic" label="Outlined" />
  <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" />`,b=`<TextField required id="outlined-required" placeholder="Required *" defaultValue="Hello World" />
  <TextField id="helper-text-basic" placeholder="Helper text" helperText="Helper text" />
  <TextField id="outlined-number" label="Number" type="number" />
  <TextField
    id="outlined-number"
    defaultValue="Read Only"
    InputProps={{
      readOnly: true
    }}
  />
  <OutlinedInput
    id="outlined-adornment-password"
    type={values.showPassword ? 'text' : 'password'}
    value={values.password}
    onChange={handleChange('password')}
    endAdornment={
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
          color="secondary"
        >
          {values.showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </IconButton>
      </InputAdornment>
    }
  />
  <FormControl variant="standard">
    <Stack spacing={3}>
      <InputLabel shrink htmlFor="with-label-input">
        With Label
      </InputLabel>
      <TextField id="with-label-input" placeholder="With Label" />
    </Stack>
  </FormControl>
  <TextField id="disabled-basic" label="Disabled" disabled />
  <TextField id="filled-search" placeholder="Search" type="search" />`,j=`<OutlinedInput id="start-adornment-email" placeholder="Email / UserId" startAdornment={<MailOutlined />} />
  <OutlinedInput
    id="end-adornment-password"
    type="password"
    placeholder="Password"
    endAdornment={
      <InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
          <EyeInvisibleOutlined />
        </IconButton>
      </InputAdornment>
    }
  />`,g=`<TextField id="outlined-basic-small" label="Small" size="small" />
  <TextField id="outlined-basic-default" label="Medium" />
  <TextField
    id="outlined-basic-custom"
    label="Custom"
    sx={{
      '& .MuiInputLabel-root': { fontSize: '1rem' },
      '& .MuiOutlinedInput-root': { fontSize: '1rem' }
    }}
  />`,w='<TextField id="outlined-basic-auto" label="Auto Focus" autoFocus />',f=`<TextField error id="outlined-error" label="Error" defaultValue="Hello World" />
  <TextField
    error
    id="outlined-error-helper-text"
    label="Error"
    defaultValue="Hello World"
    helperText="Incorrect entry."
  />`,I=`<TextField
    id="outlined-multiline-static"
    fullWidth
    label="Multiline"
    multiline
    rows={5}
    defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
  />`,y=`<TextField
    placeholder="Website URL"
    id="url-start-adornment"
    InputProps={{
      startAdornment: 'https://'
    }}
  />
  <TextField
    placeholder="Website URL"
    id="outlined-end-adornment"
    InputProps={{
      endAdornment: '.com'
    }}
  />
  <OutlinedInput
    id="text-adornment-password"
    type="password"
    placeholder="Password"
    endAdornment={
      <InputAdornment position="end">
        <IconButton aria-label="toggle password visibility" edge="end" color="secondary">
          <EyeInvisibleOutlined />
        </IconButton>
      </InputAdornment>
    }
  />
  <TextField
    placeholder="0.00"
    id="outlined-start-adornment"
    InputProps={{
      startAdornment: '$'
    }}
  />`,F='<TextField fullWidth id="outlined-basic-fullwidth" label="Fullwidth" />';return e.jsxs(P,{children:[e.jsx(A,{title:"Text Field",caption:"Text fields let users enter and edit text.",directory:"src/pages/components-overview/textfield",link:"https://mui.com/material-ui/react-text-field/"}),e.jsx(O,{children:e.jsxs(d,{container:!0,spacing:3,children:[e.jsx(d,{item:!0,xs:12,lg:6,children:e.jsxs(l,{spacing:3,children:[e.jsx(i,{title:"Basic",codeHighlight:!0,codeString:m,children:e.jsxs(l,{spacing:2,children:[e.jsx(t,{id:"outlined-basic",placeholder:"Outlined"}),e.jsx(t,{id:"filled-basic",label:"Filled",variant:"filled"}),e.jsx(t,{id:"standard-basic",label:"Standard",variant:"standard"})]})}),e.jsx(i,{title:"Form Props",codeString:b,children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(l,{spacing:2,children:[e.jsx(t,{required:!0,id:"outlined-required",placeholder:"Required *",defaultValue:"Hello World"}),e.jsx(t,{id:"helper-text-basic",placeholder:"Helper text",helperText:"Helper text"}),e.jsx(t,{id:"outlined-number",placeholder:"Number",type:"number"}),e.jsx(t,{id:"outlined-number",defaultValue:"Read Only",InputProps:{readOnly:!0}})]})}),e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(l,{spacing:2,children:[e.jsx(r,{id:"outlined-adornment-password",type:n.showPassword?"text":"password",value:n.password,onChange:p("password"),endAdornment:e.jsx(a,{position:"end",children:e.jsx(o,{"aria-label":"toggle password visibility",onClick:x,onMouseDown:h,edge:"end",color:"secondary",children:n.showPassword?e.jsx(W,{}):e.jsx(u,{})})})}),e.jsx(v,{variant:"standard",children:e.jsxs(l,{spacing:3,children:[e.jsx(C,{shrink:!0,htmlFor:"with-label-input",children:"With Label"}),e.jsx(t,{id:"with-label-input",placeholder:"With Label"})]})}),e.jsx(t,{id:"disabled-basic",placeholder:"Disabled",disabled:!0}),e.jsx(t,{id:"filled-search",placeholder:"Search",type:"search"})]})})]})}),e.jsx(i,{title:"With Icon",codeString:j,children:e.jsxs(l,{spacing:2,children:[e.jsx(r,{id:"start-adornment-email",placeholder:"Email / UserId",startAdornment:e.jsx(M,{})}),e.jsx(r,{id:"end-adornment-password",type:"password",placeholder:"Password",endAdornment:e.jsx(a,{position:"end",children:e.jsx(o,{"aria-label":"toggle password visibility",edge:"end",color:"secondary",children:e.jsx(u,{})})})})]})}),e.jsx(i,{title:"Sizes",codeString:g,children:e.jsxs(l,{spacing:2,children:[e.jsx(t,{id:"outlined-basic-small",placeholder:"Small",size:"small"}),e.jsx(t,{id:"outlined-basic-default",placeholder:"Medium"}),e.jsx(t,{id:"outlined-basic-custom",placeholder:"Custom",sx:{"& .MuiInputLabel-root":{fontSize:"1rem"},"& .MuiOutlinedInput-root":{fontSize:"1rem"}}})]})})]})}),e.jsx(d,{item:!0,xs:12,lg:6,children:e.jsxs(l,{spacing:3,children:[e.jsx(i,{title:"Event",codeString:w,children:e.jsx(t,{id:"outlined-basic-auto",placeholder:"Auto Focus",autoFocus:!0})}),e.jsx(i,{title:"Validation",codeString:f,children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,md:6,children:e.jsx(t,{error:!0,id:"outlined-error",placeholder:"Error",defaultValue:"Hello World"})}),e.jsx(d,{item:!0,xs:12,md:6,children:e.jsx(t,{error:!0,id:"outlined-error-helper-text",placeholder:"Error",defaultValue:"Hello World",helperText:"Incorrect entry."})})]})}),e.jsx(i,{title:"Multiline",codeString:I,children:e.jsx(t,{id:"outlined-multiline-static",fullWidth:!0,placeholder:"Multiline",multiline:!0,rows:5,defaultValue:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"})}),e.jsx(i,{title:"Input Adornments",codeString:y,children:e.jsxs(d,{container:!0,spacing:2,children:[e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(l,{spacing:2,children:[e.jsx(t,{placeholder:"Website URL",id:"url-start-adornment",InputProps:{startAdornment:"https://"}}),e.jsx(t,{placeholder:"Website URL",id:"outlined-end-adornment",InputProps:{endAdornment:".com"}})]})}),e.jsx(d,{item:!0,xs:12,md:6,children:e.jsxs(l,{spacing:2,children:[e.jsx(r,{id:"text-adornment-password",type:"password",placeholder:"Password",endAdornment:e.jsx(a,{position:"end",children:e.jsx(o,{"aria-label":"toggle password visibility",edge:"end",color:"secondary",children:e.jsx(u,{})})})}),e.jsx(t,{placeholder:"0.00",id:"outlined-start-adornment",InputProps:{startAdornment:"$"}})]})})]})}),e.jsx(i,{title:"Full Width",codeString:F,children:e.jsx(t,{fullWidth:!0,id:"outlined-basic-fullwidth",placeholder:"Fullwidth"})})]})})]})})]})};export{D as default};
