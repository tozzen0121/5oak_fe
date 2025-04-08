import{be as W,bf as $,a3 as L,bw as Y,a0 as b,r as m,bi as V,b3 as I,bD as J,j as e,bn as z,bo as F,aw as O,P as x,M as w,cB as E,B as u,d,T as S,ar as K,G as T,p as A}from"./index-0488e0de.js";import{C as X}from"./ComponentHeader-7519d118.js";import{C as Z,a as ee}from"./ComponentSkeleton-dcfb7096.js";import{c as U,d as H,b as R,S as P,a as D}from"./Stepper-68abe494.js";import{S as te}from"./index-dfc22fe3.js";import{L as ie}from"./LeftOutlined-fbae278c.js";import"./Skeleton-51fcc206.js";function se(t){return $("MuiStepButton",t)}const ne=W("MuiStepButton",["root","horizontal","vertical","touchRipple"]),M=ne,ae=["children","className","icon","optional"],oe=t=>{const{classes:i,orientation:s}=t;return F({root:["root",s],touchRipple:["touchRipple"]},se,i)},re=L(Y,{name:"MuiStepButton",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:s}=t;return[{[`& .${M.touchRipple}`]:i.touchRipple},i.root,i[s.orientation]]}})(({ownerState:t})=>b({width:"100%",padding:"24px 16px",margin:"-24px -16px",boxSizing:"content-box"},t.orientation==="vertical"&&{justifyContent:"flex-start",padding:"8px",margin:"-8px"},{[`& .${M.touchRipple}`]:{color:"rgba(0, 0, 0, 0.3)"}})),le=m.forwardRef(function(i,s){const n=V({props:i,name:"MuiStepButton"}),{children:r,className:h,icon:l,optional:c}=n,v=I(n,ae),{disabled:y,active:C}=m.useContext(U),{orientation:a}=m.useContext(H),p=b({},n,{orientation:a}),g=oe(p),o={icon:l,optional:c},f=J(r,["StepLabel"])?m.cloneElement(r,o):e.jsx(R,b({},o,{children:r}));return e.jsx(re,b({focusRipple:!0,disabled:y,TouchRippleProps:{className:g.touchRipple},className:z(g.root,h),ref:s,ownerState:p,"aria-current":C?"step":void 0},v,{children:f}))}),ue=le;function ce(t){return $("MuiStepContent",t)}W("MuiStepContent",["root","last","transition"]);const pe=["children","className","TransitionComponent","transitionDuration","TransitionProps"],de=t=>{const{classes:i,last:s}=t;return F({root:["root",s&&"last"],transition:["transition"]},ce,i)},me=L("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:s}=t;return[i.root,s.last&&i.last]}})(({ownerState:t,theme:i})=>b({marginLeft:12,paddingLeft:8+12,paddingRight:8,borderLeft:i.vars?`1px solid ${i.vars.palette.StepContent.border}`:`1px solid ${i.palette.mode==="light"?i.palette.grey[400]:i.palette.grey[600]}`},t.last&&{borderLeft:"none"})),xe=L(O,{name:"MuiStepContent",slot:"Transition",overridesResolver:(t,i)=>i.transition})({}),he=m.forwardRef(function(i,s){const n=V({props:i,name:"MuiStepContent"}),{children:r,className:h,TransitionComponent:l=O,transitionDuration:c="auto",TransitionProps:v}=n,y=I(n,pe);m.useContext(H);const{active:C,last:a,expanded:p}=m.useContext(U),g=b({},n,{last:a}),o=de(g);let f=c;return c==="auto"&&!l.muiSupportAuto&&(f=void 0),e.jsx(me,b({className:z(o.root,h),ref:s,ownerState:g},y,{children:e.jsx(xe,b({as:l,in:C||p,className:o.transition,ownerState:g,timeout:f,unmountOnExit:!0},v,{children:r}))}))}),ge=he,B=["Select campaign settings","Create an ad group","Create an ad"];function k({children:t,value:i,index:s,...n}){return e.jsx("div",{role:"tabpanel",hidden:i!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...n,children:i===s&&e.jsx(u,{sx:{p:3},children:t})})}k.propTypes={children:x.node,value:x.number,index:x.number};function Se(){const[t,i]=m.useState(0),[s,n]=m.useState(new Set),r=a=>a===1,h=a=>s.has(a),l=()=>{let a=s;h(t)&&(a=new Set(a.values()),a.delete(t)),i(p=>p+1),n(a)},c=()=>{i(a=>a-1)},v=()=>{if(!r(t))throw new Error("You can't skip a step that isn't optional.");i(a=>a+1),n(a=>{const p=new Set(a.values());return p.add(t),p})},y=()=>{i(0)},C=` // HorizontalLinearStepper.tsx
  <Stepper activeStep={activeStep}>
    {steps.map((label, index) => {
      const stepProps = {};
      const labelProps: {
        optional?: ReactNode;
      } = {};
      if (isStepOptional(index)) {
        labelProps.optional = <Typography variant="caption">Optional</Typography>;
      }
      if (isStepSkipped(index)) {
        stepProps.completed = false;
      }
      return (
        <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>{label}</StepLabel>
        </Step>
      );
    })}
  </Stepper>
  {activeStep === steps.length ? (
    <>
      <Alert sx={{ my: 3 }}>All steps completed - you&apos;re finished</Alert>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleReset} color="error" variant="contained">
          Reset
        </Button>
      </Box>
    </>
  ) : (
    <>
      <StepWrapper value={activeStep} index={0}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in
          laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat
          tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu.
        </Typography>
      </StepWrapper>
      <StepWrapper value={activeStep} index={1}>
        <Typography>
          Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim
          vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci
          id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor,
          enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu,
          eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet
          feugiat ac quis est.
        </Typography>
      </StepWrapper>
      <StepWrapper value={activeStep} index={2}>
        <Typography>
          Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis
          sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin.
          Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis.
          Nullam id scelerisque nunc, in ultricies orci.
        </Typography>
      </StepWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        {isStepOptional(activeStep) && (
          <Button color="error" onClick={handleSkip} sx={{ mr: 1 }}>
            Skip
          </Button>
        )}
        <Button onClick={handleNext} variant="contained" color={activeStep === steps.length - 1 ? 'success' : 'primary'}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </>
  )}`;return e.jsx(w,{title:"Basic - Linear",codeString:C,children:e.jsxs(e.Fragment,{children:[e.jsx(P,{activeStep:t,children:B.map((a,p)=>{const g={},o={};return r(p)&&(o.optional=e.jsx(S,{variant:"caption",children:"Optional"})),h(p)&&(g.completed=!1),e.jsx(D,{...g,children:e.jsx(R,{...o,children:a})},a)})}),t===B.length?e.jsxs(e.Fragment,{children:[e.jsx(E,{sx:{my:3},children:"All steps completed - you're finished"}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row"},children:[e.jsx(u,{sx:{flex:"1 1 auto"}}),e.jsx(d,{onClick:y,color:"error",variant:"contained",children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{value:t,index:0,children:e.jsx(S,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu."})}),e.jsx(k,{value:t,index:1,children:e.jsx(S,{children:"Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor, enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu, eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet feugiat ac quis est."})}),e.jsx(k,{value:t,index:2,children:e.jsx(S,{children:"Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin. Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis. Nullam id scelerisque nunc, in ultricies orci."})}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(d,{variant:"outlined",disabled:t===0,onClick:c,sx:{mr:1},children:"Back"}),e.jsx(u,{sx:{flex:"1 1 auto"}}),r(t)&&e.jsx(d,{color:"error",onClick:v,sx:{mr:1},children:"Skip"}),e.jsx(d,{onClick:l,variant:"contained",color:t===B.length-1?"success":"primary",children:t===B.length-1?"Finish":"Next"})]})]})]})})}const j=["Select campaign settings","Create an ad group","Create an ad"];function q({children:t,value:i,index:s,...n}){return e.jsx("div",{role:"tabpanel",hidden:i!==s,id:`simple-tabpanel-${s}`,"aria-labelledby":`simple-tab-${s}`,...n,children:i===s&&e.jsx(u,{sx:{p:3},children:t})})}q.propTypes={children:x.node,value:x.number,index:x.number};function ve(){const[t,i]=m.useState(0),[s,n]=m.useState({}),r=()=>j.length,h=()=>Object.keys(s).length,l=()=>t===r()-1,c=()=>h()===r(),v=()=>{const o=l()&&!c()?j.findIndex((f,G)=>!(G in s)):t+1;i(o)},y=()=>{i(o=>o-1)},C=o=>()=>{i(o)},a=()=>{const o=s;o[t]=!0,n(o),v()},p=()=>{i(0),n({})},g=`// HorizontalNonLinearStepper.tsx
  <Stepper nonLinear activeStep={activeStep}>
    {steps.map((label, index) => (
      <Step key={label} completed={completed[index]}>
        <StepButton color="inherit" onClick={handleStep(index)}>
          {label}
        </StepButton>
      </Step>
    ))}
  </Stepper>
  <div>
    {allStepsCompleted() ? (
      <>
        <Alert sx={{ my: 3 }}>All steps completed - you&apos;re finished</Alert>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleReset} color="error" variant="contained">
            Reset
          </Button>
        </Box>
      </>
    ) : (
      <>
        <StepWrapper value={activeStep} index={0}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in
            laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat
            tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu.
          </Typography>
        </StepWrapper>
        <StepWrapper value={activeStep} index={1}>
          <Typography>
            Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim
            vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci
            id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor,
            enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu,
            eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet
            feugiat ac quis est.
          </Typography>
        </StepWrapper>
        <StepWrapper value={activeStep} index={2}>
          <Typography>
            Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis
            sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin.
            Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis.
            Nullam id scelerisque nunc, in ultricies orci.
          </Typography>
        </StepWrapper>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {activeStep !== steps.length &&
            (completed[activeStep] ? (
              <Button color="success">Step {activeStep + 1} already completed</Button>
            ) : (
              <Button onClick={handleComplete} color="success" variant={activeStep === totalSteps() - 1 ? 'contained' : 'outlined'}>
                {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
              </Button>
            ))}
          <Button disabled={activeStep === steps.length - 1} onClick={handleNext} sx={{ ml: 1 }} variant="contained" color="primary">
            Next
          </Button>
        </Box>
      </>
    )}
  </div>`;return e.jsxs(w,{title:"Non - Linear",codeString:g,children:[e.jsx(P,{nonLinear:!0,activeStep:t,children:j.map((o,f)=>e.jsx(D,{completed:s[f],children:e.jsx(ue,{color:"inherit",onClick:C(f),children:o})},o))}),e.jsx("div",{children:c()?e.jsxs(e.Fragment,{children:[e.jsx(E,{sx:{my:3},children:"All steps completed - you're finished"}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row"},children:[e.jsx(u,{sx:{flex:"1 1 auto"}}),e.jsx(d,{onClick:p,color:"error",variant:"contained",children:"Reset"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(q,{value:t,index:0,children:e.jsx(S,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel massa mi. Nullam suscipit eu est non eleifend. Duis in laoreet metus. Etiam a vulputate nibh, sed maximus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet urna ut sodales malesuada. Vivamus sit amet massa turpis. Nullam nec ligula tempor, aliquam mauris nec, volutpat tellus. Ut mattis a lacus ac fermentum. Vestibulum sit amet tempus nisl. Nulla id enim ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc nec velit arcu."})}),e.jsx(q,{value:t,index:1,children:e.jsx(S,{children:"Curabitur fringilla purus scelerisque, auctor mi ac, posuere sem. Nullam dictum mauris lectus, in laoreet lorem dignissim vel. Sed rutrum non nulla eget laoreet. Curabitur sit amet hendrerit magna, hendrerit vulputate nunc. Quisque maximus, orci id lobortis imperdiet, mi lectus porta est, eu aliquet leo risus id lectus. Nullam dignissim, nisl non convallis auctor, enim metus laoreet leo, ut hendrerit arcu tortor ut tellus. In quis dui leo. Maecenas risus nisi, aliquet ac elit eu, eleifend posuere enim. Phasellus interdum mi eu ex varius, ut vestibulum mi accumsan. Integer quis metus ac velit laoreet feugiat ac quis est."})}),e.jsx(q,{value:t,index:2,children:e.jsx(S,{children:"Vivamus sed odio dictum, sollicitudin neque in, sagittis erat. Cras feugiat faucibus luctus. Pellentesque sit amet sagittis sapien. Nunc pharetra molestie ante, non posuere est tincidunt quis. Nunc venenatis lobortis magna sit amet sollicitudin. Nam porta neque eu condimentum dignissim. Cras vestibulum dui et ex dignissim gravida. Nam elementum nec urna ut sagittis. Nullam id scelerisque nunc, in ultricies orci."})}),e.jsxs(u,{sx:{display:"flex",flexDirection:"row",pt:2},children:[e.jsx(d,{variant:"outlined",disabled:t===0,onClick:y,sx:{mr:1},children:"Back"}),e.jsx(u,{sx:{flex:"1 1 auto"}}),t!==j.length&&(s[t]?e.jsxs(d,{color:"success",children:["Step ",t+1," already completed"]}):e.jsx(d,{onClick:a,color:"success",variant:t===r()-1?"contained":"outlined",children:h()===r()-1?"Finish":"Complete Step"})),e.jsx(d,{disabled:t===j.length-1,onClick:v,sx:{ml:1},variant:"contained",color:"primary",children:"Next"})]})]})})]})}const N=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function fe(){const[t,i]=m.useState(0),s=()=>i(l=>l+1),n=()=>i(l=>l-1),r=()=>i(0),h=`// VerticalLinearStepper.tsx
  <Stepper activeStep={activeStep} orientation="vertical">
    {steps.map((step, index) => (
      <Step key={step.label}>
        <StepLabel optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}>{step.label}</StepLabel>
        <StepContent>
          <Typography>{step.description}</Typography>
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 1, mr: 1 }}
                color={index === steps.length - 1 ? 'success' : 'primary'}
              >
                {index === steps.length - 1 ? 'Finish' : 'Continue'}
              </Button>
              <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                Back
              </Button>
            </div>
          </Box>
        </StepContent>
      </Step>
    ))}
  </Stepper>
  {activeStep === steps.length && (
    <Box sx={{ pt: 2 }}>
      <Typography sx={{ color: 'success.main' }}>All steps completed - you&apos;re finished</Typography>
      <Button size="small" variant="contained" color="error" onClick={handleReset} sx={{ mt: 2, mr: 1 }}>
        Reset
      </Button>
    </Box>
  )}`;return e.jsxs(w,{title:"Vertical",codeString:h,children:[e.jsx(P,{activeStep:t,orientation:"vertical",children:N.map((l,c)=>e.jsxs(D,{children:[e.jsx(R,{optional:c===2?e.jsx(S,{variant:"caption",children:"Last step"}):null,children:l.label}),e.jsxs(ge,{children:[e.jsx(S,{children:l.description}),e.jsx(u,{sx:{mb:2},children:e.jsxs("div",{children:[e.jsx(d,{variant:"contained",onClick:s,sx:{mt:1,mr:1},color:c===N.length-1?"success":"primary",children:c===N.length-1?"Finish":"Continue"}),e.jsx(d,{disabled:c===0,onClick:n,sx:{mt:1,mr:1},children:"Back"})]})})]})]},l.label))}),t===N.length&&e.jsxs(u,{sx:{pt:2},children:[e.jsx(S,{sx:{color:"success.main"},children:"All steps completed - you're finished"}),e.jsx(d,{size:"small",variant:"contained",color:"error",onClick:r,sx:{mt:2,mr:1},children:"Reset"})]})]})}function Q({className:t,style:i,onClick:s}){return e.jsx("div",{className:t,style:{...i,display:"block",top:"87%",right:64},children:e.jsx(d,{onClick:s,endIcon:e.jsx(K,{size:14}),sx:{my:2,mx:1},size:"small",children:"Next"})})}Q.propTypes={className:x.string,style:x.object,onClick:x.func};function _({className:t,style:i,onClick:s}){return e.jsx("div",{className:t,style:{...i,display:"block",top:"87%",left:0},children:e.jsx(d,{onClick:s,startIcon:e.jsx(ie,{size:14}),sx:{my:2,mx:1},size:"small",children:"Back"})})}_.propTypes={className:x.string,style:x.object,onClick:x.func};function be(){const t=[{label:"San Francisco",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{label:"Goč, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}],i={dots:!0,autoplay:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,nextArrow:e.jsx(Q,{}),prevArrow:e.jsx(_,{})};return e.jsx(w,{content:!1,sx:{"& .slick-dots":{position:"static",pt:1,pb:1.5},"& .slick-prev:before":{display:"none"},"& .slick-next:before":{display:"none"}},children:e.jsx(te,{...i,children:t.map((s,n)=>e.jsxs(u,{children:[e.jsx(u,{sx:{p:1.75},children:e.jsx(S,{children:s.label})}),e.jsx(u,{component:"img",sx:{height:255,display:"block",overflow:"hidden",width:"100%"},src:s.imgPath,alt:s.label})]},n))})})}const we=()=>e.jsxs(Z,{children:[e.jsx(X,{title:"Stepper",caption:"Steppers convey progress through numbered steps. It provides a wizard-like workflow.",directory:"src/pages/components-overview/stepper",link:"https://mui.com/material-ui/react-stepper/"}),e.jsx(ee,{children:e.jsxs(T,{container:!0,spacing:3,children:[e.jsx(T,{item:!0,xs:12,lg:8,children:e.jsxs(A,{spacing:3,children:[e.jsx(Se,{}),e.jsx(ve,{})]})}),e.jsx(T,{item:!0,xs:12,lg:4,children:e.jsxs(A,{spacing:3,children:[e.jsx(fe,{}),e.jsx(be,{})]})})]})})]});export{we as default};
