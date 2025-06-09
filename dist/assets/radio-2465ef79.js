import{j as o,G as n,p as s,M as a,ad as r,o as t,F as l,q as e}from"./index-5b235dd7.js";import{C as u}from"./ComponentHeader-837f723c.js";import{C as b,a as x}from"./ComponentSkeleton-369af398.js";import"./Skeleton-44ae600a.js";const v=()=>{const i=`<FormControl component="fieldset">
  <RadioGroup aria-label="gender" defaultValue="female" name="radio-buttons-group" row>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio disabled />} label="Other" />
  </RadioGroup>
</FormControl>`,c=`<FormControl component="fieldset">
  <RadioGroup aria-label="size" defaultValue="small" name="radio-buttons-group" row>
    <FormControlLabel value="small" control={<Radio />} label="Default" />
    <FormControlLabel value="medium" control={<Radio className="size-medium" />} label="Medium" />
    <FormControlLabel value="large" control={<Radio className="size-large" />} label="Large" />
  </RadioGroup>
</FormControl>`,d=`<FormControl component="fieldset">
  <RadioGroup aria-label="size" defaultValue="success" name="radio-buttons-group" row>
    <FormControlLabel value="primary" control={<Radio />} label="Primary" />
    <FormControlLabel value="secondary" control={<Radio color="secondary" />} label="Secondary" />
    <FormControlLabel value="success" control={<Radio color="success" />} label="Success" />
    <FormControlLabel value="warning" control={<Radio color="warning" />} label="Warning" />
    <FormControlLabel value="info" control={<Radio color="info" />} label="Info" />
    <FormControlLabel value="error" control={<Radio color="error" />} label="Error" />
  </RadioGroup>
</FormControl>`,m=`<FormControl component="fieldset">
  <RadioGroup row aria-label="position" name="position" defaultValue="top">
    <FormControlLabel value="top" control={<Radio />} label="Top" labelPlacement="top" />
    <FormControlLabel value="start" control={<Radio />} label="Start" labelPlacement="start" sx={{ mr: 1 }} />
    <FormControlLabel value="bottom" control={<Radio />} label="Bottom" labelPlacement="bottom" />
    <FormControlLabel value="end" control={<Radio />} label="End" sx={{ ml: 1 }} />
  </RadioGroup>
</FormControl>`;return o.jsxs(b,{children:[o.jsx(u,{title:"Radio",caption:"Radio buttons allow the user to select one option from a set.",directory:"src/pages/components-overview/radio",link:"https://mui.com/material-ui/react-radio-button/"}),o.jsx(x,{children:o.jsxs(n,{container:!0,spacing:3,children:[o.jsx(n,{item:!0,xs:12,lg:6,children:o.jsxs(s,{spacing:3,children:[o.jsx(a,{title:"Basic",codeHighlight:!0,codeString:i,children:o.jsx(r,{children:o.jsxs(t,{row:!0,"aria-labelledby":"gender",defaultValue:"male",name:"gender",children:[o.jsx(l,{value:"female",control:o.jsx(e,{}),label:"Female"}),o.jsx(l,{value:"male",control:o.jsx(e,{}),label:"Male"}),o.jsx(l,{value:"other",control:o.jsx(e,{disabled:!0}),label:"Other"})]})})}),o.jsx(a,{title:"Size",codeString:c,children:o.jsx(r,{component:"fieldset",children:o.jsxs(t,{"aria-label":"size",defaultValue:"small",name:"size",row:!0,children:[o.jsx(l,{value:"small",control:o.jsx(e,{}),label:"Default"}),o.jsx(l,{value:"medium",control:o.jsx(e,{className:"size-medium"}),label:"Medium"}),o.jsx(l,{value:"large",control:o.jsx(e,{className:"size-large"}),label:"Large"})]})})})]})}),o.jsx(n,{item:!0,xs:12,lg:6,children:o.jsxs(s,{spacing:3,children:[o.jsx(a,{title:"Colors",codeString:d,children:o.jsx(r,{component:"fieldset",children:o.jsxs(t,{"aria-label":"size",defaultValue:"success",name:"colors",row:!0,children:[o.jsx(l,{value:"primary",control:o.jsx(e,{}),label:"Primary"}),o.jsx(l,{value:"secondary",control:o.jsx(e,{color:"secondary"}),label:"Secondary"}),o.jsx(l,{value:"success",control:o.jsx(e,{color:"success"}),label:"Success"}),o.jsx(l,{value:"warning",control:o.jsx(e,{color:"warning"}),label:"Warning"}),o.jsx(l,{value:"info",control:o.jsx(e,{color:"info"}),label:"Info"}),o.jsx(l,{value:"error",control:o.jsx(e,{color:"error"}),label:"Error"})]})})}),o.jsx(a,{title:"Label Placement",codeString:m,children:o.jsx(r,{component:"fieldset",children:o.jsxs(t,{row:!0,"aria-label":"position",name:"position",defaultValue:"top",children:[o.jsx(l,{value:"top",control:o.jsx(e,{}),label:"Top",labelPlacement:"top"}),o.jsx(l,{value:"start",control:o.jsx(e,{}),label:"Start",labelPlacement:"start",sx:{mr:1}}),o.jsx(l,{value:"bottom",control:o.jsx(e,{}),label:"Bottom",labelPlacement:"bottom"}),o.jsx(l,{value:"end",control:o.jsx(e,{}),label:"End",sx:{ml:1}})]})})})]})})]})})]})};export{v as default};
