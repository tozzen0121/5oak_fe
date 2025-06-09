import{c as W,r as d,j as e,G as S,p as c,M as t}from"./index-00d10488.js";import{C as E}from"./ComponentHeader-2988d0fc.js";import{C as G,a as H}from"./ComponentSkeleton-5bbc5a2f.js";import{S as a}from"./Slider-9b568417.js";import{A as B,S as $}from"./SoundOutlined-f7e67fa3.js";import"./Skeleton-a874ac2b.js";import"./visuallyHidden-14c3de6e.js";function i(s){return`${s}°C`}function q(s){return p.findIndex(u=>u.value===s)+1}const r=10,p=[{value:0,label:"0°C"},{value:20,label:"20°C"},{value:37,label:"37°C"},{value:100,label:"100°C"}],Y=()=>{const s=W(),[u,b]=d.useState(55),v=(g,l)=>{b(l)},[f,V]=d.useState([20,37]),j=(g,l)=>{V(l)},[n,h]=d.useState([20,55]),C=(g,l,x)=>{Array.isArray(l)&&h(x===0?[Math.min(l[0],n[1]-r),n[1]]:[n[0],Math.max(l[1],n[0]+r)])},[y,m]=d.useState([35,76]),A=(g,l,x)=>{if(Array.isArray(l))if(l[1]-l[0]<r)if(x===0){const o=Math.min(l[0],100-r);m([o,o+r])}else{const o=Math.max(l[1],r);m([o-r,o])}else m(l)},L="<Slider defaultValue={35} />",T=`<Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <AudioMutedOutlined style={{ color: volume <= 25 ? 'inherit' : theme.palette.text.secondary }} />
  <Slider aria-label="Volume" value={volume} onChange={handleVolumeChange} />
  <SoundOutlined style={{ color: volume > 25 ? 'inherit' : theme.palette.text.secondary }} />
</Stack>`,D=`<Slider
  getAriaLabel={() => 'Temperature range'}
  value={range}
  onChange={handleRangeChange}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
/>`,M=`<Slider
  sx={{ mt: 2.5 }}
  aria-label="Always visible"
  defaultValue={80}
  getAriaValueText={valuetext}
  step={10}
  valueLabelDisplay="on"
/>`,k=`<Stack sx={{ height: 300 }} spacing={1} direction="row">
  <Slider aria-label="Temperature" orientation="vertical" getAriaValueText={valuetext} defaultValue={30} />
  <Slider aria-label="Temperature" orientation="vertical" defaultValue={30} disabled />
  <Slider
    getAriaLabel={() => 'Temperature'}
    orientation="vertical"
    getAriaValueText={valuetext}
    defaultValue={[20, 37]}
    marks={marks}
    color="warning"
  />
</Stack>`,w="<Slider defaultValue={50} disabled />",R=`<Slider size="small" defaultValue={70} aria-label="Small" valueLabelDisplay="auto" />
<Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />`,z=`<Slider
  aria-label="Temperature"
  defaultValue={60}
  getAriaValueText={valuetext}
  valueLabelDisplay="auto"
  step={10}
  marks
  min={10}
  max={110}
/>`,I=`<Slider
  aria-label="Restricted values"
  defaultValue={20}
  valueLabelFormat={valueLabelFormat}
  getAriaValueText={valuetext}
  step={null}
  valueLabelDisplay="auto"
  marks={marks}
/>`,O=`<Slider
  getAriaLabel={() => 'Minimum distance'}
  value={value1}
  onChange={handleChange1}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
  disableSwap
/>
<Slider
  getAriaLabel={() => 'Minimum distance shift'}
  value={value2}
  onChange={handleChange2}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
  disableSwap
/>`,F=`<Slider defaultValue={65} />
<Slider defaultValue={50} color="secondary" />
<Slider defaultValue={95} color="success" />
<Slider defaultValue={30} color="warning" />
<Slider defaultValue={85} color="info" />
<Slider defaultValue={5} color="error" />`;return e.jsxs(G,{children:[e.jsx(E,{title:"Slider",caption:"Sliders allow users to make selections from a range of values.",directory:"src/pages/components-overview/slider",link:"https://mui.com/material-ui/react-slider/"}),e.jsx(H,{children:e.jsxs(S,{container:!0,spacing:2.5,children:[e.jsx(S,{item:!0,xs:12,sm:6,children:e.jsxs(c,{spacing:2.5,children:[e.jsx(t,{title:"Basic",codeHighlight:!0,codeString:L,children:e.jsx(a,{defaultValue:35})}),e.jsx(t,{title:"With Icons",codeString:T,children:e.jsxs(c,{spacing:2,direction:"row",sx:{mb:1},alignItems:"center",children:[e.jsx(B,{style:{color:u<=25?"inherit":s.palette.text.secondary}}),e.jsx(a,{"aria-label":"Volume",value:u,onChange:v}),e.jsx($,{style:{color:u>25?"inherit":s.palette.text.secondary}})]})}),e.jsx(t,{title:"Range",codeString:D,children:e.jsx(a,{getAriaLabel:()=>"Temperature range",value:f,onChange:j,valueLabelDisplay:"auto",getAriaValueText:i})}),e.jsx(t,{title:"With Label",codeString:M,children:e.jsx(a,{sx:{mt:2.5},"aria-label":"Always visible",defaultValue:80,getAriaValueText:i,step:10,valueLabelDisplay:"on"})}),e.jsx(t,{title:"Vertical",codeString:k,children:e.jsxs(c,{sx:{height:300},spacing:1,direction:"row",children:[e.jsx(a,{"aria-label":"Temperature",orientation:"vertical",getAriaValueText:i,defaultValue:30}),e.jsx(a,{"aria-label":"Temperature",orientation:"vertical",defaultValue:30,disabled:!0,sx:{"&.MuiSlider-root.Mui-disabled":{"& .MuiSlider-track":{color:"secondary.200"},"& .MuiSlider-thumb":{bgcolor:"primary.light"}}}}),e.jsx(a,{getAriaLabel:()=>"Temperature",orientation:"vertical",getAriaValueText:i,defaultValue:[20,37],marks:p,color:"warning"})]})})]})}),e.jsx(S,{item:!0,xs:12,sm:6,children:e.jsxs(c,{spacing:2.5,children:[e.jsx(t,{title:"Disabled",codeString:w,children:e.jsx(a,{defaultValue:50,disabled:!0,sx:{"&.MuiSlider-root.Mui-disabled":{"& .MuiSlider-track":{color:"secondary.200"},"& .MuiSlider-thumb":{bgcolor:"primary.light"}}}})}),e.jsxs(t,{title:"Sizes",codeString:R,children:[e.jsx(a,{size:"small",defaultValue:70,"aria-label":"Small",valueLabelDisplay:"auto"}),e.jsx(a,{defaultValue:50,"aria-label":"Default",valueLabelDisplay:"auto"})]}),e.jsx(t,{title:"Discrete",codeString:z,children:e.jsx(a,{"aria-label":"Temperature",defaultValue:60,getAriaValueText:i,valueLabelDisplay:"auto",step:10,marks:!0,min:10,max:110})}),e.jsx(t,{title:"Restricted values",codeString:I,children:e.jsx(a,{"aria-label":"Restricted values",defaultValue:20,valueLabelFormat:q,getAriaValueText:i,step:null,valueLabelDisplay:"auto",marks:p})}),e.jsxs(t,{title:"Minimum distance",codeString:O,children:[e.jsx(a,{getAriaLabel:()=>"Minimum distance",value:n,onChange:C,valueLabelDisplay:"auto",getAriaValueText:i,disableSwap:!0}),e.jsx(a,{getAriaLabel:()=>"Minimum distance shift",value:y,onChange:A,valueLabelDisplay:"auto",getAriaValueText:i,disableSwap:!0})]}),e.jsxs(t,{title:"Colors",codeString:F,children:[e.jsx(a,{defaultValue:65}),e.jsx(a,{defaultValue:50,color:"secondary"}),e.jsx(a,{defaultValue:95,color:"success"}),e.jsx(a,{defaultValue:30,color:"warning"}),e.jsx(a,{defaultValue:85,color:"info"}),e.jsx(a,{defaultValue:5,color:"error"})]})]})})]})})]})};export{Y as default};
