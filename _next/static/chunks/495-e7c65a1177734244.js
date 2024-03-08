"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{143:function(e,t,n){n.d(t,{N:function(){return r}});var s=n(3827),l=n(59371);let r=e=>{let{children:t,onSort:n,rigthAlign:r,sort:i,sorting:a}=e,c=(a||[]).concat(["none"]),o=i?c.indexOf(i):-1;return(0,s.jsx)("div",{className:["flex flex-row text-[14px] font-normal leading-[14px] tracking-wider",r?"justify-end":""].join(" "),children:(0,s.jsxs)("button",{className:["flex flex-row items-center gap-[8px] uppercase",n?"cursor-pointer":""].join(" "),onClick:()=>{if(!n||!i)return;let e=(1+c.indexOf(i))%(c.length-1),t=c[e];null==n||n(t)},children:[(0,s.jsx)("span",{children:t}),n&&(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:l.Sf},style:{rotate:0===o?"180deg":"0deg"}})]})})}},80148:function(e,t,n){n.d(t,{B:function(){return l}});var s=n(22840);let l=(e,t,n)=>typeof e!=typeof t?0:"string"==typeof e?n?e.localeCompare(t):t.localeCompare(e):"number"==typeof e?Number.isNaN(e)||Number.isNaN(t)?0:n?e-t:t-e:e instanceof s.Z&&t instanceof s.Z?n?e.minus(t).toNumber():t.minus(e).toNumber():0},26605:function(e,t,n){var s=n(3827),l=n(30298);t.Z=e=>{let{address:t}=e;if(!t)return null;let n=[t.slice(0,5),t.slice(t.length-5)].join("...");return(0,s.jsx)("button",{className:"cursor-pointer text-left text-[12px] font-normal leading-[20px] text-typo-200",onClick:()=>{navigator.clipboard.writeText(t),(0,l.Am)("Copied to clipboard",{type:"info"})},children:n})}},62948:function(e,t,n){n.d(t,{S6:function(){return N},sv:function(){return w}});var s=n(3827),l=n(22840),r=n(64090),i=n(82012),a=n(143),c=n(59371),o=n(80148),d=n(88197),u=n(80469),x=n(62986),m=n(39730),p=n(89056),h=n(66803),j=n(19807),g=n(67497),f=n(26605),v=n(48074);let N=e=>{let t=(0,m.jv)(e,null),n=(0,m.U2)(e,null);return(0,h.UO)(t)||(0,h.UO)(n)},w=e=>{let{isShowingDetails:t,setIsShowingDetails:n}=e;return(0,s.jsxs)("button",{className:"text-primary-500 flex flex-row items-center gap-2",onClick:()=>{n(!t)},children:[t?"Hide details":"Show details",(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:c.cx},style:{transform:"rotate(".concat(t?"0deg":"180deg",")")}})]})},b={gap:"16px",gridTemplateColumns:"2fr repeat(4, 1fr)",minWidth:800,overflow:"auto"},y="grid w-full items-center justify-between gap-2 p-2 mb-[16px] last:mb-[0px] bg-black rounded-[8px]",k="w-full overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100 px-[16px]",S=()=>(0,s.jsx)("span",{className:"hover:bg-bg-500",dangerouslySetInnerHTML:{__html:c.GI}}),C=(0,r.memo)(e=>{let{delegation:t,disabled:n,index:l,staking:a,validator:c}=e,{validatorAddress:o}=t;(0,r.useEffect)(()=>{o&&(0,d.Dr)(o,a)},[o,a]);let u=(0,p.P)(null==c?void 0:c.description.identity);return(0,s.jsxs)("div",{className:y,style:b,children:[(0,s.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,s.jsx)("div",{className:"flex items-center justify-start",children:(0,s.jsx)("img",{alt:"Validator logo",className:"block w-[50px] rounded-full",src:u,style:{height:50,width:50}})}),(0,s.jsxs)("div",{className:"flex flex-col justify-center gap-2 text-left",children:[(0,s.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==c?void 0:c.description.moniker)||""}),(0,s.jsx)(f.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)(v.Z,{text:(0,g.Em)(t.balance)})}),(0,s.jsx)("div",{className:"text-right",children:c?(0,g.i)(c.commission.commissionRates.rate,0):""}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)(v.Z,{text:(0,g.Em)(t.rewards)})}),(0,s.jsxs)("div",{className:"flex flex-row items-center justify-end gap-[8px]",children:[(0,s.jsx)(i.hp,{disabled:n,onClick:()=>{c&&a.dispatch((0,x.ZG)({content:{validator:c},type:"delegate"}))},children:"Delegate"}),(0,s.jsx)(i.Rk,{Trigger:S,id:"delegation-".concat(l),children:(0,s.jsxs)("div",{className:"flex flex-col gap-[12px] rounded-[8px] bg-bg-600 py-[4px]",children:[(0,s.jsx)(i.ZP,{disabled:!(0,j.m)(null==t?void 0:t.rewards)||n,onClick:()=>{c&&a.dispatch((0,x.ZG)({content:{delegations:[t]},type:"rewards"}))},children:"Claim rewards"}),(0,s.jsx)(i.ZP,{disabled:n,onClick:()=>{c&&a.dispatch((0,x.ZG)({content:{validator:c},type:"undelegate"}))},variant:"danger",children:"Undelegate"})]})})]})]})}),Z=e=>{let{disabled:t,stakingRef:n,unbonding:l,validator:a}=e,{staking:c}=n,o=(0,p.P)(null==a?void 0:a.description.identity),u=l.validator;return(0,r.useEffect)(()=>{u&&(0,d.Dr)(u,c)},[u,c]),(0,s.jsxs)("div",{className:y,style:b,children:[(0,s.jsx)("div",{className:"flex items-center justify-start",children:(0,s.jsx)("img",{alt:"Validator logo",className:"block w-[50px] rounded-full",src:o,style:{height:50,width:50}})}),(0,s.jsx)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:(0,s.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,s.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==a?void 0:a.description.moniker)||""}),(0,s.jsx)(f.Z,{address:(null==a?void 0:a.operatorAddress)||""})]})}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)(v.Z,{text:(0,g.Em)(l.balance)})}),(0,s.jsx)("div",{className:"text-right",children:"Unbonding"}),(0,s.jsx)("div",{className:"text-right",children:(0,g.ts)(l.completionTime)}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)(i.hp,{disabled:t,onClick:()=>{c.dispatch((0,x.ZG)({content:{unbondings:[l]},type:"cancel-unstaking"}))},variant:"danger",children:"Cancel Unstake"})})]})},A=a.N,F=a.N,E="grid w-full items-center justify-between gap-2 py-4 px-2 uppercase";t.ZP=(0,r.memo)(()=>{let e=(0,u.n)(),{staking:t}=e,[n,i]=(0,r.useState)("none"),[a,c]=(0,r.useState)("none"),d=(0,m.mM)(t.state),{delegations:x,unbondings:p}=t.state,h=!!(null==x?void 0:x.items.length),j=!!(null==p?void 0:p.items.length);return h||j?(0,s.jsxs)("div",{className:"flex h-full flex-1 flex-col items-end gap-[16px]",children:[h&&(()=>{let e=x.items.slice().sort((e,t)=>{switch(n){case"staked-asc":case"staked-desc":return(0,o.B)(new l.Z(e.balance.amount),new l.Z(t.balance.amount),"staked-asc"===n);case"rewards-asc":case"rewards-desc":return(0,o.B)(new l.Z(e.rewards.amount),new l.Z(t.rewards.amount),"rewards-asc"===n);case"commission-asc":case"commission-desc":{let s=d[e.validatorAddress],l=d[t.validatorAddress];return(0,o.B)(Number(null==s?void 0:s.commission.commissionRates.rate),Number(null==l?void 0:l.commission.commissionRates.rate),"commission-asc"===n)}default:return 0}});return(0,s.jsxs)("div",{className:k,children:[(0,s.jsxs)("div",{className:E,style:b,children:[(0,s.jsx)(A,{children:"Delegations"}),(0,s.jsx)(A,{onSort:i,rigthAlign:!0,sort:n,sorting:["staked-asc","staked-desc"],children:"Staked Amount"}),(0,s.jsx)(A,{onSort:i,rigthAlign:!0,sort:n,sorting:["commission-asc","commission-desc"],children:(0,s.jsx)("div",{className:"text-right",children:"Commission"})}),(0,s.jsx)(A,{onSort:i,rigthAlign:!0,sort:n,sorting:["rewards-asc","rewards-desc"],children:(0,s.jsx)("div",{className:"text-right",children:"Rewards"})})]}),e.map((e,n)=>(0,s.jsx)(C,{delegation:e,index:n,staking:t,validator:d[e.validatorAddress]},n))]})})(),j&&(()=>{let t=p.items.slice().sort((e,t)=>{switch(a){case"amount-asc":case"amount-desc":return(0,o.B)(Number(e.balance.amount),Number(t.balance.amount),"amount-asc"===a);case"completion-asc":case"completion-desc":return(0,o.B)(e.completionTime,t.completionTime,"completion-asc"===a);default:return 0}});return(0,s.jsxs)("div",{className:k,children:[(0,s.jsxs)("div",{className:E,style:b,children:[(0,s.jsx)(F,{rigthAlign:!0,children:"Unstakings"}),(0,s.jsx)(F,{onSort:c,rigthAlign:!0,sort:a,sorting:["staked-asc","staked-desc"],children:(0,s.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,s.jsx)(F,{rigthAlign:!0,children:(0,s.jsx)("div",{className:"text-right",children:"Status"})}),(0,s.jsx)(F,{onSort:c,rigthAlign:!0,sort:a,sorting:["date-asc","date-desc"],children:(0,s.jsx)("div",{className:"text-right",children:"Completion Time"})})]}),t.map((t,n)=>(0,s.jsx)(Z,{stakingRef:e,unbonding:t,validator:d[t.validator]},n))]})})()]}):null})},42498:function(e,t,n){n.d(t,{I:function(){return l},i:function(){return r}});var s=n(3827);let l=e=>{let{className:t}=e;return(0,s.jsx)("div",{className:["h-[1px] w-full bg-bg-400",t||""].join(" ")})},r=()=>(0,s.jsx)("div",{className:"h-full w-[1px] bg-bg-400"})},37275:function(e,t,n){n.d(t,{Z:function(){return A}});var s=n(3827),l=n(64090),r=n(30298),i=n(82012),a=n(98245),c=n.n(a),o=n(59371);c().setAppElement(document.body);let d=e=>{let{children:t}=e;return(0,s.jsx)("div",{className:"mb-[16px] text-[16px] leading-[24px] text-typo-100 opacity-50",children:t})};var u=e=>{let{children:t,...n}=e;return(0,l.useEffect)(()=>{if(n.isOpen){let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}},[n.isOpen]),(0,s.jsx)(c(),{...n,style:{content:{background:"transparent",border:"none",bottom:"auto",boxShadow:"0px 0px 50px 0px #FFFFFF40",boxSizing:"border-box",display:"grid",gridTemplateColumns:"1fr",inset:0,maxHeight:"100%",minWidth:"100vw",outline:"none",overflow:"auto",padding:"0",pointerEvents:"none",position:"fixed",right:"auto",width:"100vw",zIndex:10},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,s.jsxs)("div",{className:"relative w-full overflow-auto px-[16px] py-[40px] md:p-[50px]",style:{backgroundColor:"#000",borderRadius:"48px",boxShadow:"0px 0px 50px 0px #FFFFFF40",boxSizing:"border-box",display:"flex",flexDirection:"column",height:"max-content",margin:"auto",maxWidth:"100vw",outline:"none",pointerEvents:"auto",position:"relative",width:"min-content"},children:[(0,s.jsx)("button",{className:"absolute right-[12px] top-[12px] w-[36px] cursor-pointer",dangerouslySetInnerHTML:{__html:o.kC},onClick:n.onRequestClose}),t]})})},x=n(88197),m=n(80469),p=n(62986),h=n(19807),j=(0,l.memo)(()=>{let e=(0,m.n)(),[t,n]=(0,l.useState)("confirm"),[a,c]=(0,l.useState)(!1),{account:o,client:j,staking:g}=e,{modal:f}=g.state,v=(null==f?void 0:f.type)==="cancel-unstaking";if(!v)return null;let{unbondings:N}=(null==f?void 0:f.content)||{};if(!(null==N?void 0:N.length))return null;let w="confirm"===t?(0,s.jsxs)("div",{className:"w-full text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"Are you sure?"})}),(0,s.jsxs)(d,{children:["We are currently completing the unstaking process.",(0,s.jsx)("br",{}),"Are you sure you want to cancel the process?"]}),(0,s.jsx)(i.zx,{className:"mt-[25px]",isLoading:a,onClick:()=>{j&&(c(!0),N.reduce(async(e,t)=>{await e;let n={delegator:o.bech32Address,validator:t.validator};await (0,h.mu)(n,t,j)},Promise.resolve()).then(()=>{(0,x.VZ)(o.bech32Address,g),n("completed")}).catch(()=>{(0,r.Am)("There was an unexpected error canceling your unstaking. Please try again later.",{type:"error"})}).finally(()=>{c(!1)}))},children:"CONFIRM"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"Success!"})}),(0,s.jsx)(d,{children:"You have successfully cancel the unstaking process, and you are now contributing to the security of the XION network again."})]}),(0,s.jsx)(i.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]});return(0,s.jsx)(u,{isOpen:v,onRequestClose:()=>{a||e.staking.dispatch((0,p.ZG)(null))},children:(0,s.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:w})})}),g=n(22840),f=n(3237),v=n(66803);let N=async(e,t)=>{let{client:n,staking:s}=e,{modal:l}=s.state;if((null==l?void 0:l.type)!=="rewards")return;let{delegations:i}=(null==l?void 0:l.content)||{};if(!n||!(null==i?void 0:i.length))return;let a=e.account.bech32Address;i.reduce(async(e,t)=>{await e;let s=(0,v.bI)(t.rewards);if(new g.Z(s.amount).lt(f._H))return;let l={delegator:a,validator:t.validatorAddress};await (0,h.YY)(l,n)},Promise.resolve()).then(()=>(0,x.VZ)(a,s)).then(()=>{t("completed")}).catch(()=>{(0,r.Am)("There was an unexpected error claiming your rewards. Please try again later.",{type:"error"})})};var w=(0,l.memo)(()=>{let e=(0,m.n)(),[t,n]=(0,l.useState)("loading"),r=(0,l.useRef)(!1),{staking:a}=e,{modal:c}=a.state,o=(null==c?void 0:c.type)==="rewards";if((0,l.useEffect)(()=>{o&&!r.current&&(r.current=!0,N(e,n))},[o,e]),!o)return null;let x="loading"===t?(0,s.jsxs)("div",{className:"w-full text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"CLAIMING"})}),(0,s.jsx)(d,{children:"Wait until your rewards are withdrawn."}),(0,s.jsx)(i.zx,{className:"mt-[25px]",isLoading:!0})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"Success!"})}),(0,s.jsx)(d,{children:"You have claimed your staking rewards successfully."})]}),(0,s.jsx)(i.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]});return(0,s.jsx)(u,{isOpen:o,onRequestClose:()=>{"loading"!==t&&e.staking.dispatch((0,p.ZG)(null))},children:(0,s.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:x})})}),b=n(39730),y=n(67497);let k="input";var S=()=>{let e=(0,m.n)(),{client:t}=e,[n,a]=(0,l.useState)(k),[c,o]=(0,l.useState)(!1),[h,j]=(0,l.useState)(""),[N,w]=(0,l.useState)(""),[S,C]=(0,l.useState)({amount:void 0,memo:void 0}),{account:Z,staking:A}=e,{modal:F}=A.state,E=(null==F?void 0:F.type)==="delegate";if((0,l.useEffect)(()=>()=>{a(k),C({}),j(""),w("")},[E]),!E)return null;let{validator:I}=null==F?void 0:F.content;if(!I)return null;let O=new g.Z(h),z=O.isNaN()?"":O.times(f.Ex),B=Object.values(S).some(e=>!!e),R=(0,b.ap)(A.state);return(0,s.jsx)(u,{isOpen:E,onRequestClose:()=>{c||e.staking.dispatch((0,p.ZG)(null))},children:(0,s.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let l=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,s.jsx)(i.Bz,{children:"Staked Amount (XION)"}),(0,s.jsx)(i.XJ,{children:O.toString()}),z&&(0,s.jsxs)(i.Bz,{children:["$",(0,y.HS)(z)]})]}),!!N&&(0,s.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,s.jsx)("div",{children:N})})]});if("completed"===n)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"SUCCESS!"})}),(0,s.jsxs)(d,{children:["You have successfully staked on"," ",I.description.moniker,". Thank you for contributing in securing the XION network."]})]}),l(),(0,s.jsx)(i.zx,{disabled:c,onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]});if("review"===n)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"REVIEW"})}),(0,s.jsxs)(d,{children:["Get ready to stake your XION token with"," ",I.description.moniker,". Press 'Confirm' to proceed."]})]}),l(),(0,s.jsx)(i.zx,{isLoading:c,onClick:()=>{if(!t)return;o(!0);let e={delegator:Z.bech32Address,validator:I.operatorAddress};(0,x._5)(e,(0,v.Jp)(O),N,t,A).then(e=>(a("completed"),e())).catch(()=>{(0,r.Am)("Staking error",{type:"error"})}).finally(()=>{o(!1)})},children:"CONFIRM"})]});let u=()=>{if(!z||!R||O.isNaN()||O.gt(R))return C({...S,amount:"Invalid amount"}),!0};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsxs)(i.ls,{children:["Delegate To ",I.description.moniker]})}),R&&(()=>{let e=R.times(f.Ex);return(0,s.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,s.jsx)(i.Bz,{children:"Available for delegation (XION)"}),(0,s.jsx)(i.XJ,{children:(0,y.HS)(R)}),(0,s.jsxs)(i.Bz,{children:["$",(0,y.HS)(e)]})]})})(),(0,s.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,s.jsx)("div",{children:"Amount"}),!!z&&(0,s.jsxs)(i.Bz,{children:["= $",(0,y.HS)(z)]})]}),(0,s.jsxs)("form",{onSubmit:e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!u()&&(!t||B||O.lt(0)||a("review"))},children:[(0,s.jsxs)("div",{className:"mt-[8px]",children:[(0,s.jsx)(i.Wz,{disabled:c,error:!!S.amount,onBlur:()=>{u()},onChange:e=>{S.amount&&C({...S,amount:void 0}),j(e.target.value)},value:h}),S.amount&&(0,s.jsx)(i.Xq,{children:S.amount})]}),(0,s.jsx)("div",{className:"mt-[40px] w-full",children:(0,s.jsx)(i.sr,{disabled:c,onChange:e=>{w(e.target.value)},placeholder:"Memo (Optional)",value:N})}),(0,s.jsx)("div",{className:"mt-[48px] w-full",children:(0,s.jsx)(i.zx,{disabled:c||B,type:"submit",children:"DELEGATE NOW"})})]})]})})()})})};let C="input";var Z=()=>{let e=(0,m.n)(),{client:t}=e,[n,a]=(0,l.useState)(C),[c,o]=(0,l.useState)(!1),[h,j]=(0,l.useState)({amount:void 0,memo:void 0}),[N,w]=(0,l.useState)(""),[k,S]=(0,l.useState)(""),{account:Z,staking:A}=e,{modal:F}=A.state,E=(null==F?void 0:F.type)==="undelegate";if((0,l.useEffect)(()=>()=>{a(C),w(""),j({}),S("")},[E]),!E)return null;let{validator:I}=null==F?void 0:F.content;if(!I)return null;let O=new g.Z(N),z=O.isNaN()?"":O.times(f.Ex),B=(0,b.U2)(A.state,I.operatorAddress),R=()=>{if(!z||!B||O.lte(0)||O.gt(new g.Z(B.amount)))return j({...h,amount:"Invalid amount"}),!0},H=e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!R()&&t&&O.gt(0)&&a("review")};return(0,s.jsx)(u,{isOpen:E,onRequestClose:()=>{c||e.staking.dispatch((0,p.ZG)(null))},children:(0,s.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let l=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,s.jsx)(i.Bz,{children:"Unstaking Amount (XION)"}),(0,s.jsx)(i.XJ,{children:(0,y.HS)(O)}),(0,s.jsx)(i.Bz,{children:(0,y.H_)((0,v.Jp)(O))})]}),!!k&&(0,s.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,s.jsx)("div",{children:k})})]});return"completed"===n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"SUCCESS!"})}),(0,s.jsxs)(d,{children:["You have successfully unstaked from"," ",I.description.moniker,". It takes ",f.Mx," ","days to complete the unstaking process"]})]}),l(),(0,s.jsx)(i.zx,{disabled:c,onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"CLOSE"})]}):"review"===n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsx)(i.ls,{children:"REVIEW"})}),(0,s.jsxs)(d,{children:["Unstaking your XION Token means you'll stop earning rewards. Remember, it takes ",f.Mx," days to complete the unstaking process."]})]}),l(),(0,s.jsx)(i.zx,{isLoading:c,onClick:()=>{if(!t)return;o(!0);let e={delegator:Z.bech32Address,validator:I.operatorAddress};(0,x.xu)(e,(0,v.Jp)(O),k,t,A).then(e=>(a("completed"),e())).catch(()=>{(0,r.Am)("Staking error",{type:"error"})}).finally(()=>{o(!1)})},children:"CONFIRM"})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,s.jsxs)(i.ls,{children:["Unstake From ",I.description.moniker]})}),B&&(()=>{let e=new g.Z(B.amount).times(f.Ex);return(0,s.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,s.jsx)(i.Bz,{children:"Available amount (XION)"}),(0,s.jsx)(i.XJ,{children:(0,y.HS)(new g.Z(B.amount))}),(0,s.jsxs)(i.Bz,{children:["$",(0,y.HS)(e)]})]})})(),(0,s.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,s.jsx)("div",{children:"Amount"}),!!z&&(0,s.jsxs)(i.Bz,{children:["=$",(0,y.HS)(z)]})]}),(0,s.jsxs)("form",{onSubmit:H,children:[(0,s.jsxs)("div",{className:"mt-[8px]",children:[(0,s.jsx)(i.Wz,{disabled:c,error:!!h.amount,onBlur:()=>{R()},onChange:e=>{h.amount&&j({...h,amount:void 0}),w(e.target.value)},value:N}),h.amount&&(0,s.jsx)(i.Xq,{children:h.amount})]}),(0,s.jsx)("div",{className:"mt-[40px] w-full",children:(0,s.jsx)(i.sr,{disabled:c,onChange:e=>{S(e.target.value)},placeholder:"Memo (Optional)",value:k})}),(0,s.jsx)("div",{className:"mt-[48px] w-full",children:(0,s.jsx)(i.zx,{disabled:c,type:"submit",children:"Unstake Now"})})]})]})})()})})},A=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(S,{}),(0,s.jsx)(Z,{}),(0,s.jsx)(w,{}),(0,s.jsx)(j,{})]})},48074:function(e,t,n){var s=n(3827);t.Z=e=>{let{text:t}=e,[n,l]=t.split(" ");return(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:n})," ",(0,s.jsx)("span",{className:"text-typo-200",children:l})]})}},89056:function(e,t,n){n.d(t,{P:function(){return a}});var s=n(64090),l=n(3237);let r={},i={getIdentityLogo:e=>{if(r[e])return r[e];let t=fetch("https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=".concat(e)).then(e=>e.json()).then(e=>{var t,n,s,l;return(null==e?void 0:null===(l=e.them)||void 0===l?void 0:null===(s=l[0])||void 0===s?void 0:null===(n=s.pictures)||void 0===n?void 0:null===(t=n.primary)||void 0===t?void 0:t.url)||null}).catch(()=>null);return r[e]=t,t}},a=e=>{let[t,n]=(0,s.useState)(null);return(0,s.useEffect)(()=>{(async()=>{e&&n(await i.getIdentityLogo(e))})()},[e]),t||l.c1}},67497:function(e,t,n){n.d(t,{Em:function(){return i},HS:function(){return c},H_:function(){return d},PV:function(){return x},gg:function(){return a},i:function(){return o},ts:function(){return u}});var s=n(22840),l=n(3237),r=n(66803);let i=(e,t)=>{let n=(0,r.bI)(e),l=new s.Z(n.amount);if(l.eq(0))return"".concat(l.toFormat()," ").concat(n.denom);if(l.lt(1e-4))return"<".concat(1e-4," ").concat(n.denom);if(t){let e=Intl.NumberFormat("en",{notation:"compact"});return"".concat(e.format(l.toNumber())," ").concat(n.denom)}return"".concat(l.toFormat(4)," ").concat(n.denom)},a=e=>{if("number"!=typeof e||Number.isNaN(e))return null;let t=e<1e-4?"<0.1":(100*e).toFixed(1);return"".concat(t,"%")},c=(e,t)=>t&&e.lt(t)?"<".concat(t):Intl.NumberFormat("en",{notation:"compact"}).format(e.toNumber()),o=(e,t)=>{let n=new s.Z(e).div(new s.Z(10).pow(18)).toNumber();return"".concat((100*n).toFixed(t),"%")},d=(e,t)=>{let n=(0,r.bI)(e||(0,r.IB)()),i=new s.Z(e?n.amount:0).times(l.Ex);return i.eq(0)?"$0":!t&&i.lt(.01)?"<$0.01":"$".concat(t?c(i):i.toFormat(2))},u=e=>{let t=1e3*e,n=Math.floor((t-Date.now())/864e5),s=new Date(t).toLocaleString("en-US",{month:"short"}),l=new Date(t).getDate(),r=new Date(t).getFullYear();return"in ".concat(n," day").concat(1===n?"":"s",", ").concat(s," ").concat(l," ").concat(r)},x=e=>e?"".concat(e.times(100).toFixed(2),"%"):"-"}}]);