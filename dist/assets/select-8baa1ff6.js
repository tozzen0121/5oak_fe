import{r as d,j as e,M as p,G as u,p as m,aQ as h,ad as x,_ as c,Q as a,aR as I,c as b,ao as g,O as j,B as y,a5 as S}from"./index-0e2d5618.js";import{C}from"./ComponentHeader-ec032122.js";import{C as v,a as M}from"./ComponentSkeleton-ec647e24.js";import{C as T}from"./Checkbox-48da1547.js";import"./Skeleton-c1bb4e34.js";function f(){const[i,r]=d.useState(""),t=n=>{r(n.target.value)},s=`<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Select Age</InputLabel>
  <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} placeholder="Age" onChange={handleChange}>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <FormHelperText>Without label</FormHelperText>
  <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
    <MenuItem value="" sx={{ color: 'text.secondary' }}>
      Select Age
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>`;return e.jsx(p,{title:"Basic",codeHighlight:!0,codeString:s,children:e.jsxs(u,{container:!0,spacing:2.5,children:[e.jsx(u,{item:!0,xs:12,children:e.jsxs(m,{spacing:1,children:[e.jsx(h,{children:"Age"}),e.jsx(x,{fullWidth:!0,children:e.jsxs(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:i,placeholder:"Age",onChange:t,children:[e.jsx(a,{value:10,children:"Ten"}),e.jsx(a,{value:20,children:"Twenty"}),e.jsx(a,{value:30,children:"Thirty"})]})})]})}),e.jsx(u,{item:!0,xs:12,children:e.jsx(x,{fullWidth:!0,children:e.jsxs(c,{value:i,onChange:t,displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[e.jsx(a,{value:"",sx:{color:"text.secondary"},children:"Without label"}),e.jsx(a,{value:10,children:"Ten"}),e.jsx(a,{value:20,children:"Twenty"}),e.jsx(a,{value:30,children:"Thirty"})]})})})]})})}function k(){const[i,r]=d.useState(""),t=n=>{r(n.target.value)},s=`<Stack spacing={1}>
  <InputLabel id="demo-simple-select-helper-label">Number</InputLabel>
  <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={age} onChange={handleChange}>
    <MenuItem value="">
      <em>Select Number</em>
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
  <FormHelperText>helper text</FormHelperText>
</Stack>`;return e.jsx(p,{title:"With Helper Text",codeString:s,children:e.jsxs(m,{spacing:1,children:[e.jsx(h,{id:"demo-simple-select-helper-label",children:"Number"}),e.jsxs(c,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:i,onChange:t,children:[e.jsx(a,{value:"",children:e.jsx("em",{children:"Select Number"})}),e.jsx(a,{value:10,children:"Ten"}),e.jsx(a,{value:20,children:"Twenty"}),e.jsx(a,{value:30,children:"Thirty"})]}),e.jsx(I,{children:"helper text"})]})})}function W(){const[i,r]=d.useState(""),t=n=>{r(n.target.value)},s=`<FormControl sx={{ minWidth: 80 }}>
  <InputLabel id="demo-simple-select-autowidth-label">Auto</InputLabel>
  <Select
    labelId="demo-simple-select-autowidth-label"
    id="demo-simple-select-autowidth"
    value={age}
    onChange={handleChange}
    autoWidth
    placeholder="Age"
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={10}>Twenty</MenuItem>
    <MenuItem value={21}>Twenty one</MenuItem>
    <MenuItem value={22}>Twenty one and a half</MenuItem>
  </Select>
</FormControl>`;return e.jsx(p,{title:"Auto Width",codeString:s,children:e.jsxs(x,{sx:{minWidth:80},children:[e.jsx(h,{id:"demo-simple-select-autowidth-label",children:"Auto"}),e.jsxs(c,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:i,onChange:t,autoWidth:!0,placeholder:"Age",children:[e.jsx(a,{value:"",children:e.jsx("em",{children:"None"})}),e.jsx(a,{value:10,children:"Twenty"}),e.jsx(a,{value:21,children:"Twenty one"}),e.jsx(a,{value:22,children:"Twenty one and a half"})]})]})})}const A=48,w=8,H={PaperProps:{style:{maxHeight:A*4.5+w,width:250}}},P=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function N(i,r,t){return{fontWeight:r.indexOf(i)===-1?t.typography.fontWeightRegular:t.typography.fontWeightMedium}}function O(){const i=b(),[r,t]=d.useState([]),s=l=>{const{target:{value:o}}=l;t(typeof o=="string"?o.split(","):o)},n=`// MultipleSelect.tsx
  <Stack spacing={1}>
    <InputLabel id="demo-multiple-name-label">Name</InputLabel>
    <Select
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput label="Name" />}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </Stack>`;return e.jsx(p,{title:"Multiple",codeString:n,children:e.jsxs(m,{spacing:1,children:[e.jsx(h,{id:"demo-multiple-name-label",children:"Name"}),e.jsx(c,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",multiple:!0,value:r,onChange:s,input:e.jsx(g,{label:"Name"}),MenuProps:H,children:P.map(l=>e.jsx(a,{value:l,style:N(l,r,i),children:l},l))})]})})}const L=48,F=8,E={PaperProps:{style:{maxHeight:L*4.5+F,width:250}}},V=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function _(){const[i,r]=d.useState([]),t=n=>{const{target:{value:l}}=n;r(typeof l=="string"?l.split(","):l)},s=`// CheckmarksSelect.tsx
  <FormControl fullWidth>
    <InputLabel id="demo-multiple-checkbox-label">Checkmarks</InputLabel>
    <Select
      labelId="demo-multiple-checkbox-label"
      id="demo-multiple-checkbox"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput placeholder="Tag" />}
      renderValue={(selected) => selected.join(', ')}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem key={name} value={name}>
          <Checkbox checked={personName.indexOf(name) > -1} />
          <ListItemText primary={name} />
        </MenuItem>
      ))}
    </Select>
  </FormControl>`;return e.jsx(p,{title:"With Checkmarks",codeString:s,children:e.jsxs(x,{fullWidth:!0,children:[e.jsx(h,{id:"demo-multiple-checkbox-label",children:"Checkmarks"}),e.jsx(c,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:i,onChange:t,input:e.jsx(g,{placeholder:"Tag"}),renderValue:n=>n.join(", "),MenuProps:E,children:V.map(n=>e.jsxs(a,{value:n,children:[e.jsx(T,{checked:i.indexOf(n)>-1}),e.jsx(j,{primary:n})]},n))})]})})}const B=48,$=8,G={PaperProps:{style:{maxHeight:B*4.5+$,width:250}}},R=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function D(i,r,t){return{fontWeight:r.indexOf(i)===-1?t.typography.fontWeightRegular:t.typography.fontWeightMedium}}function K(){const i=b(),[r,t]=d.useState(["Van Henry","Kelly Snyder"]),s=l=>{const{target:{value:o}}=l;t(typeof o=="string"?o.split(","):o)},n=`// ChipSelect.tsx
  <Stack spacing={1}>
    <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
    <Select
      labelId="demo-multiple-chip-label"
      id="demo-multiple-chip"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput id="select-multiple-chip" placeholder="Chip" />}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selected.map((value) => (
            <Chip key={value} label={value} variant="light" color="primary" size="small" />
          ))}
        </Box>
      )}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </Stack>`;return e.jsx(p,{title:"With Chip",codeString:n,children:e.jsxs(m,{spacing:1,children:[e.jsx(h,{id:"demo-multiple-chip-label",children:"Chip"}),e.jsx(c,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,value:r,onChange:s,input:e.jsx(g,{id:"select-multiple-chip",placeholder:"Chip"}),renderValue:l=>e.jsx(y,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:l.map(o=>e.jsx(S,{label:o,variant:"light",color:"primary",size:"small"},o))}),MenuProps:G,children:R.map(l=>e.jsx(a,{value:l,style:D(l,r,i),children:l},l))})]})})}const X=()=>e.jsxs(v,{children:[e.jsx(C,{title:"Select",caption:"Select components are used for collecting user provided information from a list of options.",directory:"src/pages/components-overview/select",link:"https://mui.com/material-ui/react-select/"}),e.jsx(M,{children:e.jsxs(u,{container:!0,spacing:3,children:[e.jsx(u,{item:!0,xs:12,sm:6,children:e.jsxs(m,{spacing:3,children:[e.jsx(f,{}),e.jsx(k,{}),e.jsx(W,{})]})}),e.jsx(u,{item:!0,xs:12,sm:6,children:e.jsxs(m,{spacing:3,children:[e.jsx(O,{}),e.jsx(_,{}),e.jsx(K,{})]})})]})})]});export{X as default};
