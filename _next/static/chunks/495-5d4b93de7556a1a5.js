"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{143:function(e,t,s){s.d(t,{N:function(){return l}});var n=s(3827),r=s(59371);let l=e=>{let{children:t,onSort:s,sort:l,sorting:i}=e,a=(i||[]).concat(["none"]),c=l?a.indexOf(l):-1;return(0,n.jsx)("div",{className:"text-[14px] font-normal leading-[14px] tracking-wider",children:(0,n.jsxs)("span",{className:"relative",children:[t," ",!!s&&!!l&&(0,n.jsx)("button",{className:"absolute right-[-16px] top-[6px] cursor-pointer",dangerouslySetInnerHTML:{__html:r.Sf},onClick:()=>{if(!s)return;let e=(1+a.indexOf(l))%a.length,t=a[e];null==s||s(t)},style:{rotate:0===c?"180deg":1===c?"0deg":"90deg"}})]})})}},80148:function(e,t,s){s.d(t,{B:function(){return r}});var n=s(22840);let r=(e,t,s)=>typeof e!=typeof t?0:"string"==typeof e?s?e.localeCompare(t):t.localeCompare(e):"number"==typeof e?Number.isNaN(e)||Number.isNaN(t)?0:s?e-t:t-e:e instanceof n.Z&&t instanceof n.Z?s?e.minus(t).toNumber():t.minus(e).toNumber():0},26605:function(e,t,s){var n=s(3827),r=s(30298);t.Z=e=>{let{address:t}=e;if(!t)return null;let s=[t.slice(0,5),t.slice(t.length-5)].join("...");return(0,n.jsx)("button",{className:"cursor-pointer text-left text-[12px] font-normal leading-[20px] text-typo-200",onClick:()=>{navigator.clipboard.writeText(t),(0,r.Am)("Copied to clipboard",{type:"info"})},children:s})}},62948:function(e,t,s){s.d(t,{S6:function(){return N},sv:function(){return b}});var n=s(3827),r=s(22840),l=s(64090),i=s(82012),a=s(143),c=s(59371),o=s(80148),d=s(88197),u=s(80469),x=s(62986),m=s(39730),p=s(89056),h=s(66803),j=s(19807),f=s(67497),v=s(26605),g=s(48074);let N=e=>{let t=(0,m.jv)(e,null),s=(0,m.U2)(e,null);return(0,h.UO)(t)||(0,h.UO)(s)},b=e=>{let{isShowingDetails:t,setIsShowingDetails:s}=e;return(0,n.jsxs)("button",{className:"text-primary-500 flex flex-row items-center gap-2",onClick:()=>{s(!t)},children:[t?"Hide details":"Show details",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:c.cx},style:{transform:"rotate(".concat(t?"0deg":"180deg",")")}})]})},w={gap:"16px",gridTemplateColumns:"60px 1.5fr repeat(4, 1fr)",minWidth:800,overflow:"auto"},y="grid w-full items-center justify-between gap-2 p-2 mb-[24px] last:mb-[0px] bg-black rounded-[8px]",k="w-full overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100 px-[16px]",S=()=>(0,n.jsx)("span",{className:"hover:bg-bg-500",dangerouslySetInnerHTML:{__html:c.GI}}),C=(0,l.memo)(e=>{let{delegation:t,disabled:s,index:r,staking:a,validator:c}=e,{validatorAddress:o}=t;(0,l.useEffect)(()=>{o&&(0,d.Dr)(o,a)},[o,a]);let u=(0,p.P)(null==c?void 0:c.description.identity);return(0,n.jsxs)("div",{className:y,style:w,children:[(0,n.jsx)("div",{className:"flex items-center justify-start",children:(0,n.jsx)("img",{alt:"Validator logo",className:"block w-[50px] rounded-full",src:u,style:{height:50,width:50}})}),(0,n.jsx)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:(0,n.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,n.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(v.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(g.Z,{text:(0,f.Em)(t.balance)})}),(0,n.jsx)("div",{className:"text-right",children:c?(0,f.i)(c.commission.commissionRates.rate,0):""}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(g.Z,{text:(0,f.Em)(t.rewards)})}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-end gap-[8px]",children:[(0,n.jsx)(i.hp,{disabled:s,onClick:()=>{c&&a.dispatch((0,x.ZG)({content:{validator:c},type:"delegate"}))},children:"Delegate"}),(0,n.jsx)(i.Rk,{Trigger:S,id:"delegation-".concat(r),children:(0,n.jsxs)("div",{className:"flex flex-col gap-[12px] rounded-[8px] bg-bg-600 py-[4px]",children:[(0,n.jsx)(i.ZP,{disabled:!(0,j.m)(null==t?void 0:t.rewards)||s,onClick:()=>{c&&a.dispatch((0,x.ZG)({content:{delegations:[t]},type:"rewards"}))},children:"Claim rewards"}),(0,n.jsx)(i.ZP,{disabled:s,onClick:()=>{c&&a.dispatch((0,x.ZG)({content:{validator:c},type:"undelegate"}))},variant:"danger",children:"Undelegate"})]})})]})]})}),Z=e=>{let{disabled:t,stakingRef:s,unbonding:r,validator:a}=e,{staking:c}=s,o=(0,p.P)(null==a?void 0:a.description.identity),u=r.validator;return(0,l.useEffect)(()=>{u&&(0,d.Dr)(u,c)},[u,c]),(0,n.jsxs)("div",{className:y,style:w,children:[(0,n.jsx)("div",{className:"flex items-center justify-start",children:(0,n.jsx)("img",{alt:"Validator logo",className:"block w-[50px] rounded-full",src:o,style:{height:50,width:50}})}),(0,n.jsx)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:(0,n.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,n.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==a?void 0:a.description.moniker)||""}),(0,n.jsx)(v.Z,{address:(null==a?void 0:a.operatorAddress)||""})]})}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(g.Z,{text:(0,f.Em)(r.balance)})}),(0,n.jsx)("div",{className:"text-right",children:"Unbonding"}),(0,n.jsx)("div",{className:"text-right",children:(0,f.ts)(r.completionTime)}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(i.hp,{disabled:t,onClick:()=>{c.dispatch((0,x.ZG)({content:{unbonding:r},type:"cancel-staking"}))},variant:"danger",children:"Cancel Unstake"})})]})},F=a.N,E=a.N,I="grid w-full items-center justify-between gap-2 p-4 uppercase";t.ZP=(0,l.memo)(()=>{let e=(0,u.n)(),{staking:t}=e,[s,i]=(0,l.useState)("none"),[a,c]=(0,l.useState)("none"),d=(0,m.mM)(t.state),{delegations:x,unbondings:p}=t.state,h=!!(null==x?void 0:x.items.length),j=!!(null==p?void 0:p.items.length);return h||j?(0,n.jsxs)("div",{className:"flex h-full flex-1 flex-col items-end gap-[16px]",children:[h&&(()=>{let e=x.items.slice().sort((e,t)=>{switch(s){case"staked-asc":case"staked-desc":return(0,o.B)(new r.Z(e.balance.amount),new r.Z(t.balance.amount),"staked-asc"===s);case"rewards-asc":case"rewards-desc":return(0,o.B)(new r.Z(e.rewards.amount),new r.Z(t.rewards.amount),"rewards-asc"===s);case"commission-asc":case"commission-desc":{let n=d[e.validatorAddress],r=d[t.validatorAddress];return(0,o.B)(Number(null==n?void 0:n.commission.commissionRates.rate),Number(null==r?void 0:r.commission.commissionRates.rate),"commission-asc"===s)}default:return 0}});return(0,n.jsxs)("div",{className:k,children:[(0,n.jsxs)("div",{className:I,style:w,children:[(0,n.jsx)("div",{}),(0,n.jsx)(F,{children:"Delegations"}),(0,n.jsx)(F,{onSort:i,sort:s,sorting:["staked-asc","staked-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,n.jsx)(F,{onSort:i,sort:s,sorting:["commission-asc","commission-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Commission"})}),(0,n.jsx)(F,{onSort:i,sort:s,sorting:["rewards-asc","rewards-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Rewards"})})]}),e.map((e,s)=>(0,n.jsx)(C,{delegation:e,index:s,staking:t,validator:d[e.validatorAddress]},s))]})})(),j&&(()=>{let t=p.items.slice().sort((e,t)=>{switch(a){case"amount-asc":case"amount-desc":return(0,o.B)(Number(e.balance.amount),Number(t.balance.amount),"amount-asc"===a);case"completion-asc":case"completion-desc":return(0,o.B)(e.completionTime,t.completionTime,"completion-asc"===a);default:return 0}});return(0,n.jsxs)("div",{className:k,children:[(0,n.jsxs)("div",{className:I,style:w,children:[(0,n.jsx)("div",{}),(0,n.jsx)(E,{children:"Unstakings"}),(0,n.jsx)(E,{onSort:c,sort:a,sorting:["staked-asc","staked-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,n.jsx)(E,{children:(0,n.jsx)("div",{className:"text-right",children:"Status"})}),(0,n.jsx)(E,{onSort:c,sort:a,sorting:["date-asc","date-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Completion Time"})})]}),t.map((t,s)=>(0,n.jsx)(Z,{stakingRef:e,unbonding:t,validator:d[t.validator]},s))]})})()]}):null})},42498:function(e,t,s){s.d(t,{I:function(){return r},i:function(){return l}});var n=s(3827);let r=e=>{let{className:t}=e;return(0,n.jsx)("div",{className:["h-[1px] w-full bg-bg-400",t||""].join(" ")})},l=()=>(0,n.jsx)("div",{className:"h-full w-[1px] bg-bg-400"})},37275:function(e,t,s){s.d(t,{Z:function(){return F}});var n=s(3827),r=s(64090),l=s(30298),i=s(82012),a=s(98245),c=s.n(a),o=s(59371);c().setAppElement(document.body);let d=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"mb-[16px] text-[16px] leading-[24px] text-typo-100 opacity-50",children:t})};var u=e=>{let{children:t,...s}=e;return(0,r.useEffect)(()=>{if(s.isOpen){let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}},[s.isOpen]),(0,n.jsx)(c(),{...s,style:{content:{background:"transparent",border:"none",bottom:"auto",boxShadow:"0px 0px 50px 0px #FFFFFF40",boxSizing:"border-box",display:"grid",gridTemplateColumns:"1fr",inset:0,maxHeight:"100%",minWidth:"100vw",outline:"none",overflow:"auto",padding:"0",pointerEvents:"none",position:"fixed",right:"auto",width:"100vw",zIndex:10},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,n.jsxs)("div",{className:"relative w-full overflow-auto px-[16px] py-[40px] md:p-[50px]",style:{backgroundColor:"#000",borderRadius:"48px",boxShadow:"0px 0px 50px 0px #FFFFFF40",boxSizing:"border-box",display:"flex",flexDirection:"column",height:"max-content",margin:"auto",maxWidth:"100vw",outline:"none",pointerEvents:"auto",position:"relative",width:"min-content"},children:[(0,n.jsx)("button",{className:"absolute right-[12px] top-[12px] w-[36px] cursor-pointer",dangerouslySetInnerHTML:{__html:o.kC},onClick:s.onRequestClose}),t]})})},x=s(88197),m=s(80469),p=s(62986),h=(0,r.memo)(()=>{let e=(0,m.n)(),[t,s]=(0,r.useState)("confirm"),[a,c]=(0,r.useState)(!1),{account:o,client:h,staking:j}=e,{modal:f}=j.state,v=(null==f?void 0:f.type)==="cancel-staking";if(!v)return null;let{unbonding:g}=(null==f?void 0:f.content)||{};if(!g)return null;let N="confirm"===t?(0,n.jsxs)("div",{className:"w-full text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"Are you sure?"})}),(0,n.jsxs)(d,{children:["We are currently completing the unstaking process.",(0,n.jsx)("br",{}),"Are you sure you want to cancel the process?"]}),(0,n.jsx)(i.zx,{className:"mt-[25px]",isLoading:a,onClick:()=>{if(!h)return;c(!0);let e={delegator:o.bech32Address,validator:g.validator};(0,x.p4)(e,g,h,j).then(e=>{e(),s("completed")}).catch(()=>{(0,l.Am)("There was an unexpected error canceling your unstaking. Please try again later.",{type:"error"})}).finally(()=>{c(!1)})},children:"CONFIRM"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"Success!"})}),(0,n.jsx)(d,{children:"You have successfully cancel the unstaking process, and you are now contributing to the security of the XION network again."})]}),(0,n.jsx)(i.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]});return(0,n.jsx)(u,{isOpen:v,onRequestClose:()=>{a||e.staking.dispatch((0,p.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:N})})}),j=s(22840),f=s(3237),v=s(66803),g=s(19807);let N=async(e,t)=>{let{client:s,staking:n}=e,{modal:r}=n.state;if((null==r?void 0:r.type)!=="rewards")return;let{delegations:i}=(null==r?void 0:r.content)||{};if(!s||!(null==i?void 0:i.length))return;let a=e.account.bech32Address;i.reduce(async(e,t)=>{await e;let n=(0,v.bI)(t.rewards);if(new j.Z(n.amount).lt(f._H))return;let r={delegator:a,validator:t.validatorAddress};await (0,g.YY)(r,s)},Promise.resolve()).then(()=>(0,x.VZ)(a,n)).then(()=>{t("completed")}).catch(()=>{(0,l.Am)("There was an unexpected error claiming your rewards. Please try again later.",{type:"error"})})};var b=(0,r.memo)(()=>{let e=(0,m.n)(),[t,s]=(0,r.useState)("loading"),l=(0,r.useRef)(!1),{staking:a}=e,{modal:c}=a.state,o=(null==c?void 0:c.type)==="rewards";if((0,r.useEffect)(()=>{o&&!l.current&&(l.current=!0,N(e,s))},[o,e]),!o)return null;let x="loading"===t?(0,n.jsxs)("div",{className:"w-full text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"CLAIMING"})}),(0,n.jsx)(d,{children:"Wait until your rewards are withdrawn."}),(0,n.jsx)(i.zx,{className:"mt-[25px]",isLoading:!0})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"Success!"})}),(0,n.jsx)(d,{children:"You have claimed your staking rewards successfully."})]}),(0,n.jsx)(i.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]});return(0,n.jsx)(u,{isOpen:o,onRequestClose:()=>{"loading"!==t&&e.staking.dispatch((0,p.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:x})})}),w=s(39730),y=s(67497);let k="input";var S=()=>{let e=(0,m.n)(),{client:t}=e,[s,a]=(0,r.useState)(k),[c,o]=(0,r.useState)(!1),[h,g]=(0,r.useState)(""),[N,b]=(0,r.useState)(""),[S,C]=(0,r.useState)({amount:void 0,memo:void 0}),{account:Z,staking:F}=e,{modal:E}=F.state,I=(null==E?void 0:E.type)==="delegate";if((0,r.useEffect)(()=>()=>{a(k),C({}),g(""),b("")},[I]),!I)return null;let{validator:A}=null==E?void 0:E.content;if(!A)return null;let O=new j.Z(h),z=O.isNaN()?"":O.times(f.Ex),B=Object.values(S).some(e=>!!e),R=(0,w.ap)(F.state);return(0,n.jsx)(u,{isOpen:I,onRequestClose:()=>{c||e.staking.dispatch((0,p.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(i.Bz,{children:"Staked Amount (XION)"}),(0,n.jsx)(i.XJ,{children:O.toString()}),z&&(0,n.jsxs)(i.Bz,{children:["$",(0,y.HS)(z)]})]}),!!N&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:N})})]});if("completed"===s)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(d,{children:["You have successfully staked on"," ",A.description.moniker,". Thank you for contributing in securing the XION network."]})]}),r(),(0,n.jsx)(i.zx,{disabled:c,onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]});if("review"===s)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"REVIEW"})}),(0,n.jsxs)(d,{children:["Get ready to stake your XION token with"," ",A.description.moniker,". Press 'Confirm' to proceed."]})]}),r(),(0,n.jsx)(i.zx,{isLoading:c,onClick:()=>{if(!t)return;o(!0);let e={delegator:Z.bech32Address,validator:A.operatorAddress};(0,x._5)(e,(0,v.Jp)(O),N,t,F).then(e=>(a("completed"),e())).catch(()=>{(0,l.Am)("Staking error",{type:"error"})}).finally(()=>{o(!1)})},children:"CONFIRM"})]});let u=()=>{if(!z||!R||O.isNaN()||O.gt(R))return C({...S,amount:"Invalid amount"}),!0};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(i.ls,{children:["Delegate To ",A.description.moniker]})}),R&&(()=>{let e=R.times(f.Ex);return(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,n.jsx)(i.Bz,{children:"Available for delegation (XION)"}),(0,n.jsx)(i.XJ,{children:(0,y.HS)(R)}),(0,n.jsxs)(i.Bz,{children:["$",(0,y.HS)(e)]})]})})(),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!z&&(0,n.jsxs)(i.Bz,{children:["= $",(0,y.HS)(z)]})]}),(0,n.jsxs)("form",{onSubmit:e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!u()&&(!t||B||O.lt(0)||a("review"))},children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(i.Wz,{disabled:c,error:!!S.amount,onBlur:()=>{u()},onChange:e=>{S.amount&&C({...S,amount:void 0}),g(e.target.value)},value:h}),S.amount&&(0,n.jsx)(i.Xq,{children:S.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(i.sr,{disabled:c,onChange:e=>{b(e.target.value)},placeholder:"Memo (Optional)",value:N})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(i.zx,{disabled:c||B,type:"submit",children:"DELEGATE NOW"})})]})]})})()})})};let C="input";var Z=()=>{let e=(0,m.n)(),{client:t}=e,[s,a]=(0,r.useState)(C),[c,o]=(0,r.useState)(!1),[h,g]=(0,r.useState)({amount:void 0,memo:void 0}),[N,b]=(0,r.useState)(""),[k,S]=(0,r.useState)(""),{account:Z,staking:F}=e,{modal:E}=F.state,I=(null==E?void 0:E.type)==="undelegate";if((0,r.useEffect)(()=>()=>{a(C),b(""),g({}),S("")},[I]),!I)return null;let{validator:A}=null==E?void 0:E.content;if(!A)return null;let O=new j.Z(N),z=O.isNaN()?"":O.times(f.Ex),B=(0,w.U2)(F.state,A.operatorAddress),R=()=>{if(!z||!B||O.lte(0)||O.gt(new j.Z(B.amount)))return g({...h,amount:"Invalid amount"}),!0},H=e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!R()&&t&&O.gt(0)&&a("review")};return(0,n.jsx)(u,{isOpen:I,onRequestClose:()=>{c||e.staking.dispatch((0,p.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(i.Bz,{children:"Unstaking Amount (XION)"}),(0,n.jsx)(i.XJ,{children:(0,y.HS)(O)}),(0,n.jsx)(i.Bz,{children:(0,y.H_)((0,v.Jp)(O))})]}),!!k&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:k})})]});return"completed"===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(d,{children:["You have successfully unstaked from"," ",A.description.moniker,". It takes ",f.Mx," ","days to complete the unstaking process"]})]}),r(),(0,n.jsx)(i.zx,{disabled:c,onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]}):"review"===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(i.ls,{children:"REVIEW"})}),(0,n.jsxs)(d,{children:["Unstaking your XION Token means you'll stop earning rewards. Remember, it takes ",f.Mx," days to complete the unstaking process."]})]}),r(),(0,n.jsx)(i.zx,{isLoading:c,onClick:()=>{if(!t)return;o(!0);let e={delegator:Z.bech32Address,validator:A.operatorAddress};(0,x.xu)(e,(0,v.Jp)(O),k,t,F).then(e=>(a("completed"),e())).catch(()=>{(0,l.Am)("Staking error",{type:"error"})}).finally(()=>{o(!1)})},children:"CONFIRM"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(i.ls,{children:["Unstake From ",A.description.moniker]})}),B&&(()=>{let e=new j.Z(B.amount).times(f.Ex);return(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,n.jsx)(i.Bz,{children:"Available amount (XION)"}),(0,n.jsx)(i.XJ,{children:(0,y.HS)(new j.Z(B.amount))}),(0,n.jsxs)(i.Bz,{children:["$",(0,y.HS)(e)]})]})})(),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!z&&(0,n.jsxs)(i.Bz,{children:["=$",(0,y.HS)(z)]})]}),(0,n.jsxs)("form",{onSubmit:H,children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(i.Wz,{disabled:c,error:!!h.amount,onBlur:()=>{R()},onChange:e=>{h.amount&&g({...h,amount:void 0}),b(e.target.value)},value:N}),h.amount&&(0,n.jsx)(i.Xq,{children:h.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(i.sr,{disabled:c,onChange:e=>{S(e.target.value)},placeholder:"Memo (Optional)",value:k})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(i.zx,{disabled:c,type:"submit",children:"Unstake Now"})})]})]})})()})})},F=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(S,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(b,{}),(0,n.jsx)(h,{})]})},48074:function(e,t,s){var n=s(3827);t.Z=e=>{let{text:t}=e,[s,r]=t.split(" ");return(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{children:s})," ",(0,n.jsx)("span",{className:"text-typo-200",children:r})]})}},89056:function(e,t,s){s.d(t,{P:function(){return a}});var n=s(64090),r=s(3237);let l={},i={getIdentityLogo:e=>{if(l[e])return l[e];let t=fetch("https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=".concat(e)).then(e=>e.json()).then(e=>{var t,s,n,r;return(null==e?void 0:null===(r=e.them)||void 0===r?void 0:null===(n=r[0])||void 0===n?void 0:null===(s=n.pictures)||void 0===s?void 0:null===(t=s.primary)||void 0===t?void 0:t.url)||null}).catch(()=>null);return l[e]=t,t}},a=e=>{let[t,s]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async()=>{e&&s(await i.getIdentityLogo(e))})()},[e]),t||r.c1}},67497:function(e,t,s){s.d(t,{Em:function(){return i},HS:function(){return c},H_:function(){return d},PV:function(){return x},gg:function(){return a},i:function(){return o},ts:function(){return u}});var n=s(22840),r=s(3237),l=s(66803);let i=(e,t)=>{let s=(0,l.bI)(e),r=new n.Z(s.amount);if(r.eq(0))return"".concat(r.toFormat()," ").concat(s.denom);if(r.lt(1e-4))return"<".concat(1e-4," ").concat(s.denom);if(t){let e=Intl.NumberFormat("en",{notation:"compact"});return"".concat(e.format(r.toNumber())," ").concat(s.denom)}return"".concat(r.toFormat(4)," ").concat(s.denom)},a=e=>{if("number"!=typeof e||Number.isNaN(e))return null;let t=e<1e-4?"<0.1":(100*e).toFixed(1);return"".concat(t,"%")},c=e=>Intl.NumberFormat("en",{notation:"compact"}).format(e.toNumber()),o=(e,t)=>{let s=new n.Z(e).div(new n.Z(10).pow(18)).toNumber();return"".concat((100*s).toFixed(t),"%")},d=(e,t)=>{let s=(0,l.bI)(e||(0,l.IB)()),i=new n.Z(e?s.amount:0).times(r.Ex);return i.eq(0)?"$0":!t&&i.lt(.01)?"<$0.01":"$".concat(t?c(i):i.toFormat(2))},u=e=>{let t=1e3*e,s=Math.floor((t-Date.now())/864e5),n=new Date(t).toLocaleString("en-US",{month:"short"}),r=new Date(t).getDate(),l=new Date(t).getFullYear();return"in ".concat(s," day").concat(1===s?"":"s",", ").concat(n," ").concat(r," ").concat(l)},x=e=>e?"".concat(e.times(100).toFixed(2),"%"):"-"}}]);