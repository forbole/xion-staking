"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{143:function(e,t,s){s.d(t,{D:function(){return i},N:function(){return r}});var n=s(3827),l=s(59371);let r=e=>{let{children:t,mobile:s,onSort:r,rigthAlign:i,sort:a,sorting:d}=e,o=(d||[]).concat(["none"]),c=a?o.indexOf(a):-1;return(0,n.jsx)("div",{className:["flex-row text-[14px] font-normal leading-[14px] tracking-wider",i?"justify-end":"",s?"flex":"hidden md:flex"].join(" "),children:(0,n.jsxs)("button",{className:["flex flex-row items-center gap-[8px] uppercase",r?"cursor-pointer":"cursor-default"].join(" "),onClick:()=>{if(!r||!a)return;let e=(1+o.indexOf(a))%(o.length-1),t=o[e];null==r||r(t)},children:[(0,n.jsx)("span",{children:t}),r&&(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:l.Sf},style:{rotate:0===c?"180deg":"0deg"}})]})})},i=e=>{let{height:t=50,logo:s,width:l=50}=e;return(0,n.jsx)("div",{className:"flex items-center justify-start",children:s?(0,n.jsx)("img",{alt:"Validator logo",className:"block rounded-full",height:t,src:s,width:l}):(0,n.jsx)("span",{className:"block rounded-full",style:{background:"\n    linear-gradient(to bottom right, #000000 0%, #666666 50%) bottom right,\n    linear-gradient(to bottom left, #000000 0%, #666666 50%) bottom left,\n    linear-gradient(to top left, #000000 0%, #666666 50%) top left,\n    linear-gradient(to top right, #000000 0%, #666666 50%) top right\n  ",backgroundRepeat:"no-repeat",backgroundSize:"50% 50%",height:"50px",width:"50px"}})})}},80148:function(e,t,s){s.d(t,{B:function(){return l}});var n=s(22840);let l=(e,t,s)=>typeof e!=typeof t?0:"string"==typeof e?s?e.localeCompare(t):t.localeCompare(e):"number"==typeof e?Number.isNaN(e)||Number.isNaN(t)?0:s?e-t:t-e:e instanceof n.Z&&t instanceof n.Z?s?e.minus(t).toNumber():t.minus(e).toNumber():0},62948:function(e,t,s){s.d(t,{S6:function(){return w},sv:function(){return N}});var n=s(3827),l=s(22840),r=s(20534),i=s(64090),a=s(82012),d=s(143),o=s(59371),c=s(80148),x=s(88197),u=s(80469),m=s(62986),p=s(39730),h=s(89056),j=s(66803),f=s(19807),v=s(67497),g=s(26605),b=s(48074);let w=e=>{let t=(0,p.jv)(e,null),s=(0,p.U2)(e,null);return(0,j.UO)(t)||(0,j.UO)(s)},N=e=>{let{isShowingDetails:t,setIsShowingDetails:s}=e;return(0,n.jsxs)("button",{className:"text-primary-500 flex flex-row items-center gap-2 text-[14px]",onClick:()=>{s(!t)},children:[t?"Hide details":"View details",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:o.cx},style:{transform:"rotate(".concat(t?"0deg":"180deg",")")}})]})},y={gap:"16px",gridTemplateColumns:"1.5fr repeat(4, 1.05fr)",overflow:"auto"},k="w-full items-center justify-between gap-2 p-2 mb-[16px] last:mb-[0px] bg-black rounded-[8px]",S="w-full overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100 px-[16px]",C=()=>(0,n.jsx)("span",{className:"hover:bg-bg-500",dangerouslySetInnerHTML:{__html:o.GI}}),A=(0,i.memo)(e=>{let{delegation:t,disabled:s,index:l,staking:o,validator:c}=e,{validatorAddress:u}=t;(0,i.useEffect)(()=>{u&&(0,x.Dr)(u,o)},[u,o]);let p=(0,h.P)(null==c?void 0:c.description.identity,null==c?void 0:c.operatorAddress),j=e=>(0,n.jsx)(a.Rk,{Trigger:C,id:"delegation-".concat(l,"-").concat(e.toString()),placement:"bottom-end",children:(0,n.jsxs)("div",{className:["flex-col gap-[12px] rounded-[8px] bg-bg-600 py-[4px]",e?"flex md:hidden":"hidden md:flex"].join(" "),children:[(0,n.jsx)(a.ZP,{onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{validator:c},type:"redelegate"}))},children:"Redelegate"}),(0,n.jsx)(a.ZP,{disabled:!(0,f.m)(null==t?void 0:t.rewards)||s,onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{delegations:[t]},type:"rewards"}))},children:"Claim rewards"}),(0,n.jsx)(a.ZP,{disabled:s,onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{validator:c},type:"undelegate"}))},variant:"danger",children:"Undelegate"})]})}),w={disabled:s||(null==c?void 0:c.status)!==r.BondStatus.BOND_STATUS_BONDED,onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{validator:c},type:"delegate"}))}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:[k,"hidden min-w-[1000px] md:grid"].join(" "),style:y,children:[(0,n.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-[2px] text-left",children:[(0,n.jsx)("div",{className:"max-w-[150px] overflow-hidden truncate text-[14px] font-bold leading-[20px] md:max-w-[250px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(b.Z,{text:(0,v.Em)(t.balance)})}),(0,n.jsx)("div",{className:"text-right",children:c?(0,v.i)(c.commission.commissionRates.rate,0):""}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(b.Z,{text:(0,v.Em)(t.rewards)})}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-end gap-[8px]",children:[(0,n.jsx)(a.hp,{...w,children:"Delegate"}),j(!1)]})]}),(0,n.jsxs)("div",{className:[k,"flex w-full flex-col px-[16px] md:hidden"].join(" "),children:[(0,n.jsxs)("div",{className:"flex w-full flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-[2px] text-left",children:[(0,n.jsx)("div",{className:"max-w-[150px] overflow-hidden truncate text-[14px] font-bold leading-[20px] md:max-w-[250px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Staked amount"}),(0,n.jsx)(b.Z,{text:(0,v.Em)(t.balance)})]}),c&&(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Commission"}),(0,n.jsx)("span",{children:(0,v.i)(c.commission.commissionRates.rate,0)})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Rewards"}),(0,n.jsx)(b.Z,{text:(0,v.Em)(t.rewards)})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row items-center justify-end gap-[8px] ",children:[(0,n.jsx)(a.hp,{...w,children:"Delegate"}),j(!0)]})]})]})}),Z=e=>{let{balance:t,completionTime:s,isUnbonding:l,onCancel:r,stakingRef:o,validator:c,validatorAddress:u}=e,{staking:m}=o,p=(0,h.P)(null==c?void 0:c.description.identity,null==c?void 0:c.operatorAddress);(0,i.useEffect)(()=>{u&&(0,x.Dr)(u,m)},[u,m]);let j={disabled:!r,onClick:r};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:[k,"hidden min-w-[1000px] md:grid"].join(" "),style:y,children:[(0,n.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,n.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(b.Z,{text:(0,v.Em)(t)})}),(0,n.jsx)("div",{className:"text-right",children:l?"Unbonding":"Redelegation"}),(0,n.jsx)("div",{className:"text-right",children:(0,v.ts)(s)}),(0,n.jsx)("div",{className:"text-right",children:!!r&&(0,n.jsx)(a.hp,{...j,variant:"danger",children:"Cancel unbonding"})})]}),(0,n.jsxs)("div",{className:[k,"flex w-full flex-col px-[16px] md:hidden"].join(" "),children:[(0,n.jsxs)("div",{className:"flex w-full flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,n.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Amount"}),(0,n.jsx)(b.Z,{text:(0,v.Em)(t)})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsx)("span",{children:l?"Unbonding":"Redelegation"})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Completion"}),(0,v.ts)(s)]}),!!r&&(0,n.jsx)("div",{className:"flex w-full flex-row justify-end",children:(0,n.jsx)(a.hp,{...j,variant:"danger",children:"Cancel unbonding"})})]})]})},E=d.N,F=d.N,I="grid w-full items-center justify-between gap-2 py-4 px-2 uppercase md:min-w-[1000px]";t.ZP=(0,i.memo)(()=>{let e=(0,u.n)(),{staking:t}=e,[s,r]=(0,i.useState)("none"),[a,d]=(0,i.useState)("none"),o=(0,p.mM)(t.state),{delegations:x,redelegations:h,unbondings:j}=t.state,f=!!(null==x?void 0:x.items.length),v=!!(null==j?void 0:j.items.length),g=!!(null==h?void 0:h.items.length);return f||v||g?(0,n.jsxs)("div",{className:"flex h-full flex-1 flex-col items-end gap-[16px]",children:[f&&(()=>{let e=x.items.slice().sort((e,t)=>{switch(s){case"staked-asc":case"staked-desc":return(0,c.B)(new l.Z(e.balance.amount),new l.Z(t.balance.amount),"staked-asc"===s);case"rewards-asc":case"rewards-desc":return(0,c.B)(new l.Z(e.rewards.amount),new l.Z(t.rewards.amount),"rewards-asc"===s);case"commission-asc":case"commission-desc":{let n=o[e.validatorAddress],l=o[t.validatorAddress];return(0,c.B)(Number(null==n?void 0:n.commission.commissionRates.rate),Number(null==l?void 0:l.commission.commissionRates.rate),"commission-asc"===s)}default:return 0}});return(0,n.jsxs)("div",{className:S,children:[(0,n.jsxs)("div",{className:I,style:y,children:[(0,n.jsx)(E,{mobile:!0,children:"Delegations"}),(0,n.jsx)(E,{onSort:r,rigthAlign:!0,sort:s,sorting:["staked-asc","staked-desc"],children:"Staked Amount"}),(0,n.jsx)(E,{onSort:r,rigthAlign:!0,sort:s,sorting:["commission-asc","commission-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Commission"})}),(0,n.jsx)(E,{onSort:r,rigthAlign:!0,sort:s,sorting:["rewards-asc","rewards-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Rewards"})})]}),e.map((e,s)=>(0,n.jsx)(A,{delegation:e,index:s,staking:t,validator:o[e.validatorAddress]},s))]})})(),(v||g)&&(()=>{var s,l;let r=[...null!==(s=null==j?void 0:j.items)&&void 0!==s?s:[],...null!==(l=null==h?void 0:h.items)&&void 0!==l?l:[]].sort((e,t)=>{switch(a){case"amount-asc":case"amount-desc":return(0,c.B)(Number(e.balance.amount),Number(t.balance.amount),"amount-asc"===a);case"completion-asc":case"completion-desc":return(0,c.B)(e.completionTime,t.completionTime,"completion-asc"===a);default:return 0}});return(0,n.jsxs)("div",{className:S,children:[(0,n.jsxs)("div",{className:I,style:y,children:[(0,n.jsx)(F,{mobile:!0,children:"Unbondings/Redelegations"}),(0,n.jsx)(F,{onSort:d,rigthAlign:!0,sort:a,sorting:["amount-asc","amount-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,n.jsx)(F,{rigthAlign:!0,children:(0,n.jsx)("div",{className:"text-right",children:"Status"})}),(0,n.jsx)(F,{onSort:d,rigthAlign:!0,sort:a,sorting:["completion-asc","completion-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Completion Time"})})]}),r.map((s,l)=>{let r="validator"in s,i=r?s.validator:s.dstValidator,a=r?()=>{t.dispatch((0,m.ZG)({content:{unbondings:[s]},type:"cancel-unstaking"}))}:void 0;return(0,n.jsx)(Z,{balance:s.balance,completionTime:s.completionTime,isUnbonding:r,onCancel:a,stakingRef:e,validator:o[i],validatorAddress:i},l)})]})})()]}):null})},42498:function(e,t,s){s.d(t,{I:function(){return l},i:function(){return r}});var n=s(3827);let l=e=>{let{className:t}=e;return(0,n.jsx)("div",{className:["h-[1px] w-full bg-[#ffffff33]",t||""].join(" ")})},r=()=>(0,n.jsx)("div",{className:"h-full w-[1px] bg-[#ffffff33]"})},88612:function(e,t,s){s.d(t,{Z:function(){return T}});var n=s(3827),l=s(66759),r=s(86482),i=s(22840),a=s(64090),d=s(30298),o=s(3237),c=s(82012),x=s(98245),u=s.n(x),m=s(59371);u().setAppElement(document.body);let p=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"mb-[16px] text-[16px] leading-[24px] text-typo-100 opacity-50",children:t})};var h=e=>{let{children:t,...s}=e;return(0,a.useEffect)(()=>{if(s.isOpen){let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}},[s.isOpen]),(0,n.jsx)(u(),{...s,style:{content:{background:"transparent",border:"none",bottom:"auto",boxShadow:"0px 0px 50px 0px #FFFFFF40",boxSizing:"border-box",display:"grid",gridTemplateColumns:"1fr",inset:0,maxHeight:"100%",minWidth:"100vw",outline:"none",overflow:"auto",padding:"0",pointerEvents:"none",position:"fixed",right:"auto",width:"100vw",zIndex:10},overlay:{backdropFilter:"blur(10px)",backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitBackdropFilter:"blur(10px)"}},children:(0,n.jsxs)("div",{className:"relative z-10 min-h-[100vh] w-full overflow-auto px-[16px] pb-[40px] pt-[80px] shadow-[0px_0px_50px_0px_#FFFFFF40] md:min-h-[unset] md:rounded-[48px] md:p-[48px]",style:{boxSizing:"border-box",display:"flex",flexDirection:"column",height:"max-content",margin:"auto",maxWidth:"100vw",outline:"none",pointerEvents:"auto",position:"relative",width:"min-content"},children:[(0,n.jsx)("button",{className:"absolute right-[24px] top-[24px] h-[24px] w-[24px] cursor-pointer",dangerouslySetInnerHTML:{__html:m.kC},onClick:s.onRequestClose}),t]})})},j=s(143),f=s(26605),v=s(89056),g=s(88197),b=s(80469),w=s(62986),N=s(39730),y=s(66803),k=s(67497);let S="input",C=e=>{let{validator:{description:{identity:t,moniker:s},operatorAddress:r}}=e,i=(0,v.P)(t,r);return(0,n.jsx)(l.W,{value:r,children:(0,n.jsxs)("div",{className:"flex cursor-pointer gap-2 bg-black py-2 pl-6 lg:min-w-[390px]",children:[(0,n.jsx)(j.D,{height:24,logo:i,width:24}),(0,n.jsx)("span",{children:s})]})})},A=()=>(0,n.jsxs)("div",{className:"flex gap-2 bg-black",children:[(0,n.jsx)(j.D,{logo:null}),(0,n.jsxs)("div",{className:"flex flex-col items-start gap-1 bg-black p-2",children:[(0,n.jsx)("span",{children:"Select Validator"}),(0,n.jsx)("span",{className:"text-typo-200",children:"XION Address"})]}),(0,n.jsx)("span",{className:"ml-auto self-center",dangerouslySetInnerHTML:{__html:m.Sf}})]}),Z=e=>{let{validator:t}=e,s=(0,v.P)(t.description.identity,t.operatorAddress);return(0,n.jsxs)("div",{className:"flex gap-2 bg-black ",children:[(0,n.jsx)(j.D,{logo:s}),(0,n.jsxs)("div",{className:"flex flex-col items-start gap-1 bg-black p-2",children:[(0,n.jsx)("span",{children:t.description.moniker}),(0,n.jsx)(f.Z,{address:t.operatorAddress})]}),(0,n.jsx)("span",{className:"ml-auto self-center",dangerouslySetInnerHTML:{__html:m.Sf}})]})};var E=()=>{var e,t;let s=(0,b.n)(),{client:l}=s,[x,u]=(0,a.useState)(S),[m,j]=(0,a.useState)(!1),[f,v]=(0,a.useState)({amount:void 0,memo:void 0}),[E,F]=(0,a.useState)(),[I,O]=(0,a.useState)(""),[z,R]=(0,a.useState)(""),{account:_,staking:D}=s,{modal:B}=D.state,T=(null==B?void 0:B.type)==="redelegate";(0,a.useEffect)(()=>()=>{u(S),O(""),v({}),R("")},[T]);let{validators:P}=D.state,q=[null===(e=P.bonded)||void 0===e?void 0:e.items,null===(t=P.unbonded)||void 0===t?void 0:t.items].flat(1).filter(e=>!!e),H=q.reduce((e,t)=>({...e,[t.operatorAddress]:t}),{});if(!T)return null;let{validator:L}=null==B?void 0:B.content;if(!L)return null;let U=new i.Z(I),M=U.isNaN()?"":U.times(o.Ex),X=(0,N.U2)(D.state,L.operatorAddress),G=()=>{if(!M||!X||U.lte(0)||U.gt(new i.Z(X.amount)))return v({...f,amount:"Invalid amount"}),!0},W=e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!G()&&l&&U.gt(0)&&u("review")};return(0,n.jsx)(h,{isOpen:T,onRequestClose:()=>{m||s.staking.dispatch((0,w.ZG)(null))},children:(0,n.jsx)("div",{className:"flex min-h-full min-w-[90vw] grow flex-col md:min-w-[390px]",children:(()=>{let e=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(c.Bz,{children:"Redelegation Amount (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.HS)(U)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)((0,y.Jp)(U))})]}),!!z&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:z})})]});return"completed"===x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(p,{children:["You have successfully redelegate from"," ",L.description.moniker,"to ",null==E?void 0:E.description.moniker]})]}),e(),(0,n.jsx)(c.zx,{className:"mt-auto",disabled:m,onClick:()=>{s.staking.dispatch((0,w.ZG)(null))},children:"CLOSE"})]}):"review"===x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"REVIEW"})}),(0,n.jsxs)(p,{children:["You are about to redelegate your token from"," ",L.description.moniker," to",null==E?void 0:E.description.moniker,". Remember, you will not able to redelegate these token within ",o.Mx," days."]})]}),e(),(0,n.jsx)(c.zx,{className:"mt-auto",isLoading:m,onClick:()=>{l&&E&&(j(!0),(0,g.Ty)({amount:(0,y.Jp)(U),client:l,delegatorAddress:_.bech32Address,memo:z,validatorDstAddress:null==E?void 0:E.operatorAddress,validatorSrcAddress:L.operatorAddress},D).then(e=>(u("completed"),e())).catch(()=>{(0,d.Am)("Redelegation error",{type:"error"})}).finally(()=>j(!1)))},children:"PROCEED"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(c.ls,{children:["Redelegate From ",L.description.moniker]})}),(0,n.jsxs)("div",{className:"mb-4 flex justify-between",children:[(0,n.jsx)("span",{children:"To"}),(0,n.jsxs)("div",{children:["Available:"," ",!!X&&(0,k.Em)(X,void 0,!0)," ",(0,n.jsx)("span",{className:"opacity-40",children:"XION"})]})]}),(0,n.jsx)(r.P,{className:"w-full rounded-lg border border-white border-opacity-10 bg-black px-[20px] py-[20px]",id:"validator",onChange:(e,t)=>{t&&F(H[t])},renderValue:e=>null==e?(0,n.jsx)(A,{}):(0,n.jsx)(Z,{validator:H[e.value]}),children:(0,n.jsx)("div",{className:"max-h-96 overflow-x-visible overflow-y-scroll rounded-lg border border-white border-opacity-10 bg-black",children:Object.values(q).map(e=>(0,n.jsx)(C,{validator:e},e.operatorAddress))})}),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!M&&(0,n.jsxs)(c.Bz,{children:["=$",(0,k.HS)(M)]})]}),(0,n.jsxs)("form",{onSubmit:W,children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(c.Wz,{disabled:m,error:!!f.amount,onBlur:()=>{G()},onChange:e=>{f.amount&&v({...f,amount:void 0}),O(e.target.value)},value:I}),f.amount&&(0,n.jsx)(c.Xq,{children:f.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(c.sr,{className:"placeholder:text-[#6C6A6A]",disabled:m,onChange:e=>{R(e.target.value)},placeholder:"Memo (Optional)",value:z})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(c.zx,{disabled:m,type:"submit",children:"Redelegate now"})})]})]})})()})})},F=s(19807),I=(0,a.memo)(()=>{let e=(0,b.n)(),[t,s]=(0,a.useState)("confirm"),[l,r]=(0,a.useState)(!1),{account:i,client:o,staking:x}=e,{modal:u}=x.state,m=(null==u?void 0:u.type)==="cancel-unstaking";if(!m)return null;let{unbondings:j}=(null==u?void 0:u.content)||{};if(!(null==j?void 0:j.length))return null;let f="confirm"===t?(0,n.jsxs)("div",{className:"w-full text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"Are you sure?"})}),(0,n.jsxs)(p,{children:["We are currently completing the unstaking process.",(0,n.jsx)("br",{}),"Are you sure you want to cancel the process?"]}),(0,n.jsx)(c.zx,{className:"mt-[25px]",isLoading:l,onClick:()=>{o&&(r(!0),j.reduce(async(e,t)=>{await e;let s={delegator:i.bech32Address,validator:t.validator};await (0,F.mu)(s,t,o)},Promise.resolve()).then(()=>{(0,g.VZ)(i.bech32Address,x),s("completed")}).catch(()=>{(0,d.Am)("There was an unexpected error canceling your unstaking. Please try again later.",{type:"error"})}).finally(()=>{r(!1)}))},children:"CONFIRM"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"Success!"})}),(0,n.jsx)(p,{children:"You have successfully cancel the unstaking process, and you are now contributing to the security of the XION network again."})]}),(0,n.jsx)(c.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,w.ZG)(null))},children:"CLOSE"})]});return(0,n.jsx)(h,{isOpen:m,onRequestClose:()=>{l||e.staking.dispatch((0,w.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:f})})});let O=async(e,t)=>{let{client:s,staking:n}=e,{modal:l}=n.state;if((null==l?void 0:l.type)!=="rewards")return;let{delegations:r}=(null==l?void 0:l.content)||{};if(!s||!(null==r?void 0:r.length))return;let a=e.account.bech32Address;r.reduce(async(e,t)=>{await e;let n=(0,y.bI)(t.rewards);if(new i.Z(n.amount).lt(o._H))return;let l={delegator:a,validator:t.validatorAddress};await (0,F.YY)(l,s)},Promise.resolve()).then(()=>(0,g.VZ)(a,n)).then(()=>{t("completed")}).catch(()=>{(0,d.Am)("There was an unexpected error claiming your rewards. Please try again later.",{type:"error"})})};var z=(0,a.memo)(()=>{let e=(0,b.n)(),[t,s]=(0,a.useState)("loading"),l=(0,a.useRef)(!1),{staking:r}=e,{modal:i}=r.state,d=(null==i?void 0:i.type)==="rewards";if((0,a.useEffect)(()=>{d&&!l.current&&(l.current=!0,O(e,s))},[d,e]),!d)return null;let o="loading"===t?(0,n.jsxs)("div",{className:"w-full text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"CLAIMING"})}),(0,n.jsx)(p,{children:"Wait until your rewards are withdrawn."}),(0,n.jsx)(c.zx,{className:"mt-[25px]",isLoading:!0})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"Success!"})}),(0,n.jsx)(p,{children:"You have claimed your staking rewards successfully."})]}),(0,n.jsx)(c.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,w.ZG)(null))},children:"CLOSE"})]});return(0,n.jsx)(h,{isOpen:d,onRequestClose:()=>{"loading"!==t&&e.staking.dispatch((0,w.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:o})})});let R="input";var _=()=>{let e=(0,b.n)(),{client:t}=e,[s,l]=(0,a.useState)(R),[r,x]=(0,a.useState)(!1),[u,m]=(0,a.useState)(""),[j,f]=(0,a.useState)(""),[v,S]=(0,a.useState)({amount:void 0,memo:void 0}),{account:C,staking:A}=e,{modal:Z}=A.state,E=(null==Z?void 0:Z.type)==="delegate";if((0,a.useEffect)(()=>()=>{l(R),S({}),m(""),f("")},[E]),!E)return null;let{validator:F}=null==Z?void 0:Z.content;if(!F)return null;let I=new i.Z(u),O=I.isNaN()?"":I.times(o.Ex),z=Object.values(v).some(e=>!!e),_=(0,N.ap)(A.state);return(0,n.jsx)(h,{isOpen:E,onRequestClose:()=>{r||e.staking.dispatch((0,w.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let i=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(c.Bz,{children:"Staked Amount (XION)"}),(0,n.jsx)(c.XJ,{children:I.toString()}),O&&(0,n.jsxs)(c.Bz,{children:["$",(0,k.HS)(O)]})]}),!!j&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:j})})]});if("completed"===s)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(p,{children:["You have successfully staked on"," ",F.description.moniker,". Thank you for contributing in securing the XION network."]})]}),i(),(0,n.jsx)(c.zx,{disabled:r,onClick:()=>{e.staking.dispatch((0,w.ZG)(null))},children:"CLOSE"})]});if("review"===s)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"REVIEW"})}),(0,n.jsxs)(p,{children:["Get ready to stake your XION token with"," ",F.description.moniker,". Press 'Confirm' to proceed."]})]}),i(),(0,n.jsx)(c.zx,{isLoading:r,onClick:()=>{if(!t)return;x(!0);let e={delegator:C.bech32Address,validator:F.operatorAddress};(0,g._5)(e,(0,y.Jp)(I),j,t,A).then(e=>(l("completed"),e())).catch(()=>{(0,d.Am)("Staking error",{type:"error"})}).finally(()=>{x(!1)})},children:"CONFIRM"})]});let a=()=>{if(!O||!_||I.isNaN()||I.gt(_))return S({...v,amount:"Invalid amount"}),!0};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(c.ls,{children:["Delegate To ",F.description.moniker]})}),_&&(()=>{let e={amount:_.toString(),denom:"XION"};return(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,n.jsx)(c.Bz,{children:"Available for delegation (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.Em)(e,void 0,!0)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)(e)})]})})(),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!O&&(0,n.jsxs)(c.Bz,{children:["= $",(0,k.HS)(O)]})]}),(0,n.jsxs)("form",{onSubmit:e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!a()&&(!t||z||I.lt(0)||l("review"))},children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(c.Wz,{disabled:r,error:!!v.amount,onBlur:()=>{a()},onChange:e=>{v.amount&&S({...v,amount:void 0}),m(e.target.value)},value:u}),v.amount&&(0,n.jsx)(c.Xq,{children:v.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(c.sr,{disabled:r,onChange:e=>{f(e.target.value)},placeholder:"Memo (Optional)",value:j})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(c.zx,{disabled:r||z,type:"submit",children:"DELEGATE NOW"})})]})]})})()})})};let D="input";var B=()=>{let e=(0,b.n)(),{client:t}=e,[s,l]=(0,a.useState)(D),[r,x]=(0,a.useState)(!1),[u,m]=(0,a.useState)({amount:void 0,memo:void 0}),[j,f]=(0,a.useState)(""),[v,S]=(0,a.useState)(""),{account:C,staking:A}=e,{modal:Z}=A.state,E=(null==Z?void 0:Z.type)==="undelegate";if((0,a.useEffect)(()=>()=>{l(D),f(""),m({}),S("")},[E]),!E)return null;let{validator:F}=null==Z?void 0:Z.content;if(!F)return null;let I=new i.Z(j),O=I.isNaN()?"":I.times(o.Ex),z=(0,N.U2)(A.state,F.operatorAddress),R=()=>{if(!O||!z||I.lte(0)||I.gt(new i.Z(z.amount)))return m({...u,amount:"Invalid amount"}),!0},_=e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!R()&&t&&I.gt(0)&&l("review")};return(0,n.jsx)(h,{isOpen:E,onRequestClose:()=>{r||e.staking.dispatch((0,w.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let i=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(c.Bz,{children:"Unstaking Amount (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.HS)(I)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)((0,y.Jp)(I))})]}),!!v&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:v})})]});return"completed"===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(p,{children:["You have successfully unstaked from"," ",F.description.moniker,". It takes ",o.Mx," ","days to complete the unstaking process"]})]}),i(),(0,n.jsx)(c.zx,{disabled:r,onClick:()=>{e.staking.dispatch((0,w.ZG)(null))},children:"CLOSE"})]}):"review"===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"REVIEW"})}),(0,n.jsxs)(p,{children:["Unstaking your XION Token means you'll stop earning rewards. Remember, it takes ",o.Mx," days to complete the unstaking process."]})]}),i(),(0,n.jsx)(c.zx,{isLoading:r,onClick:()=>{if(!t)return;x(!0);let e={delegator:C.bech32Address,validator:F.operatorAddress};(0,g.xu)(e,(0,y.Jp)(I),v,t,A).then(e=>(l("completed"),e())).catch(()=>{(0,d.Am)("Staking error",{type:"error"})}).finally(()=>{x(!1)})},children:"CONFIRM"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(c.ls,{children:["Unbond From ",F.description.moniker]})}),z&&(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,n.jsx)(c.Bz,{children:"Available amount (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.Em)(z,void 0,!0)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)(z)})]}),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!O&&(0,n.jsxs)(c.Bz,{children:["=$",(0,k.HS)(O)]})]}),(0,n.jsxs)("form",{onSubmit:_,children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(c.Wz,{disabled:r,error:!!u.amount,onBlur:()=>{R()},onChange:e=>{u.amount&&m({...u,amount:void 0}),f(e.target.value)},value:j}),u.amount&&(0,n.jsx)(c.Xq,{children:u.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(c.sr,{disabled:r,onChange:e=>{S(e.target.value)},placeholder:"Memo (Optional)",value:v})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(c.zx,{disabled:r,type:"submit",children:"Unbond Now"})})]})]})})()})})},T=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_,{}),(0,n.jsx)(B,{}),(0,n.jsx)(z,{}),(0,n.jsx)(I,{}),(0,n.jsx)(E,{})]})},48074:function(e,t,s){var n=s(3827);t.Z=e=>{let{text:t}=e,[s,l]=t.split(" ");return(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{children:s})," ",(0,n.jsx)("span",{className:"text-typo-200",children:l})]})}},89056:function(e,t,s){s.d(t,{P:function(){return d}});var n=s(64090),l=s(3237);let r={},i={getIdentityLogo:e=>{if(r[e])return r[e];let t=fetch("https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=".concat(e)).then(e=>e.json()).then(e=>{var t,s,n,l;return(null==e?void 0:null===(l=e.them)||void 0===l?void 0:null===(n=l[0])||void 0===n?void 0:null===(s=n.pictures)||void 0===s?void 0:null===(t=s.primary)||void 0===t?void 0:t.url)||null}).catch(()=>null);return r[e]=t,t}},a={xionvaloper1mq85keggvh67m37035mnncsqjnpkmunl6s2w56:"/chains/bonus-block.png",xionvaloper1sprpvyqln2vxshq8c5jt3dshn480rfeelupqrj:"/chains/inf-stones.png",xionvaloper1t4yes7c20hhga3nhqylnyq9kn5ja8t7c6ay45c:"/chains/mech-cap.png",xionvaloper1ypwfnfuldmlp9u8asqzz6qx29p0utqzer5678k:"/chains/stake-lab.png"},d=(e,t)=>{let[s,r]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async()=>{if(e){let t=await i.getIdentityLogo(e);if(t){r(t);return}}if(t){let e=a[t];e&&r(l.sb+e)}})()},[e,t]),s}},67497:function(e,t,s){s.d(t,{Em:function(){return i},HS:function(){return d},H_:function(){return c},PV:function(){return u},gg:function(){return a},i:function(){return o},ts:function(){return x}});var n=s(22840),l=s(3237),r=s(66803);let i=(e,t,s)=>{let i=(0,r.bI)(e),a=new n.Z(i.amount),d=s?"":" ".concat(i.denom);if(a.eq(0))return"".concat(a.toFormat()).concat(d);if(a.lt(l.Uv))return"<".concat(l.Uv).concat(d);if(t){let e=Intl.NumberFormat("en",{notation:"compact"});return"".concat(e.format(a.toNumber())).concat(d)}return"".concat(a.toFormat(Math.min(l.oF,a.decimalPlaces()||1/0))).concat(d)},a=e=>{if("number"!=typeof e||Number.isNaN(e))return null;let t=e<1e-4?"<0.1":(100*e).toFixed(1);return"".concat(t,"%")},d=(e,t,s)=>t&&e.lt(t)?"<".concat(t):s?e.toFormat(Math.min(s,e.decimalPlaces()||1/0)):Intl.NumberFormat("en",{notation:"compact"}).format(e.toNumber()),o=(e,t)=>{let s=new n.Z(e).div(new n.Z(10).pow(18)).toNumber();return"".concat((100*s).toFixed(t),"%")},c=(e,t)=>{let s=(0,r.bI)(e||(0,r.IB)()),i=new n.Z(e?s.amount:0).times(l.Ex);return i.eq(0)?"$0":!t&&i.lt(.01)?"<$0.01":"$".concat(t?d(i):i.toFormat(2))},x=e=>{let t=1e3*e,s=Math.floor((t-Date.now())/864e5),n=new Date(t).toLocaleString("en-US",{month:"short"}),l=new Date(t).getDate(),r=new Date(t).getFullYear();return"in ".concat(s," day").concat(1===s?"":"s",", ").concat(n," ").concat(l," ").concat(r)},u=e=>e?"".concat(e.times(100).toFixed(2),"%"):"-"}}]);