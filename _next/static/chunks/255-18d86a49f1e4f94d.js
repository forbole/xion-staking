"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[255],{143:function(e,t,s){s.d(t,{D:function(){return r},N:function(){return i}});var n=s(3827),l=s(59371);let i=e=>{let{children:t,mobile:s,onSort:i,rigthAlign:r,sort:a,sorting:d}=e,o=(d||[]).concat(["none"]),c=a?o.indexOf(a):-1;return(0,n.jsx)("div",{className:["flex-row text-[14px] font-normal leading-[14px] tracking-wider",r?"justify-end":"",s?"flex":"hidden md:flex"].join(" "),children:(0,n.jsxs)("button",{className:["flex flex-row items-center gap-[8px] uppercase",i?"cursor-pointer":"cursor-default"].join(" "),onClick:()=>{if(!i||!a)return;let e=(1+o.indexOf(a))%(o.length-1),t=o[e];null==i||i(t)},children:[(0,n.jsx)("span",{children:t}),i&&(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:l.Sf},style:{rotate:0===c?"180deg":"0deg"}})]})})},r=e=>{let{height:t=50,logo:s,width:l=50}=e;return(0,n.jsx)("div",{className:"flex items-center justify-start",children:s?(0,n.jsx)("img",{alt:"Validator logo",className:"block rounded-full",height:t,src:s,width:l}):(0,n.jsx)("span",{className:"block h-[50px] w-[50px] rounded-full bg-defaultLogo"})})}},80148:function(e,t,s){s.d(t,{B:function(){return l}});var n=s(22840);let l=(e,t,s)=>typeof e!=typeof t?0:"string"==typeof e?s?e.localeCompare(t):t.localeCompare(e):"number"==typeof e?Number.isNaN(e)||Number.isNaN(t)?0:s?e-t:t-e:e instanceof n.Z&&t instanceof n.Z?s?e.minus(t).toNumber():t.minus(e).toNumber():0},62948:function(e,t,s){s.d(t,{S6:function(){return N},sv:function(){return b}});var n=s(3827),l=s(22840),i=s(20534),r=s(64090),a=s(82012),d=s(143),o=s(59371),c=s(80148),x=s(88197),u=s(80469),m=s(62986),p=s(39730),h=s(89056),j=s(66803),f=s(19807),v=s(67497),g=s(26605),w=s(48074);let N=e=>{let t=(0,p.jv)(e,null),s=(0,p.U2)(e,null);return(0,j.UO)(t)||(0,j.UO)(s)},b=e=>{let{isShowingDetails:t,setIsShowingDetails:s}=e;return(0,n.jsxs)("button",{className:"text-primary-500 flex flex-row items-center gap-2 text-[14px]",onClick:()=>{s(!t)},children:[t?"Hide details":"View details",(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:o.cx},style:{transform:"rotate(".concat(t?"0deg":"180deg",")")}})]})},y={gap:"16px",gridTemplateColumns:"1.5fr repeat(4, 1.05fr)",overflow:"auto"},k="w-full items-center justify-between gap-2 p-2 mb-[16px] last:mb-[0px] bg-black rounded-[8px]",S="w-full overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100 px-[16px]",C=()=>(0,n.jsx)("span",{className:"hover:bg-bg-500",dangerouslySetInnerHTML:{__html:o.GI}}),A=(0,r.memo)(e=>{let{delegation:t,disabled:s,index:l,staking:o,validator:c}=e,{validatorAddress:u}=t;(0,r.useEffect)(()=>{u&&(0,x.Dr)(u,o)},[u,o]);let p=(0,h.P)(null==c?void 0:c.description.identity,null==c?void 0:c.operatorAddress),j=e=>(0,n.jsx)(a.Rk,{Trigger:C,id:"delegation-".concat(l,"-").concat(e.toString()),placement:"bottom-end",children:(0,n.jsxs)("div",{className:["flex-col gap-[12px] rounded-[8px] bg-bg-600 py-[4px]",e?"flex md:hidden":"hidden md:flex"].join(" "),children:[(0,n.jsx)(a.ZP,{onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{validator:c},type:"redelegate"}))},children:"Redelegate"}),(0,n.jsx)(a.ZP,{disabled:!(0,f.m)(null==t?void 0:t.rewards)||s,onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{delegations:[t]},type:"rewards"}))},children:"Claim rewards"}),(0,n.jsx)(a.ZP,{disabled:s,onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{validator:c},type:"undelegate"}))},variant:"danger",children:"Undelegate"})]})}),N={disabled:s||(null==c?void 0:c.status)!==i.BondStatus.BOND_STATUS_BONDED,onClick:()=>{c&&o.dispatch((0,m.ZG)({content:{validator:c},type:"delegate"}))}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:[k,"hidden min-w-[1000px] md:grid"].join(" "),style:y,children:[(0,n.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-[2px] text-left",children:[(0,n.jsx)("div",{className:"max-w-[150px] overflow-hidden truncate text-[14px] font-bold leading-[20px] md:max-w-[250px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(w.Z,{text:(0,v.Em)(t.balance)})}),(0,n.jsx)("div",{className:"text-right",children:c?(0,v.i)(c.commission.commissionRates.rate,0):""}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(w.Z,{text:(0,v.Em)(t.rewards)})}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-end gap-[8px]",children:[(0,n.jsx)(a.hp,{...N,children:"Delegate"}),j(!1)]})]}),(0,n.jsxs)("div",{className:[k,"flex w-full flex-col px-[16px] md:hidden"].join(" "),children:[(0,n.jsxs)("div",{className:"flex w-full flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-center gap-[2px] text-left",children:[(0,n.jsx)("div",{className:"max-w-[150px] overflow-hidden truncate text-[14px] font-bold leading-[20px] md:max-w-[250px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Staked amount"}),(0,n.jsx)(w.Z,{text:(0,v.Em)(t.balance)})]}),c&&(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Commission"}),(0,n.jsx)("span",{children:(0,v.i)(c.commission.commissionRates.rate,0)})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Rewards"}),(0,n.jsx)(w.Z,{text:(0,v.Em)(t.rewards)})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row items-center justify-end gap-[8px] ",children:[(0,n.jsx)(a.hp,{...N,children:"Delegate"}),j(!0)]})]})]})}),Z=e=>{let{balance:t,completionTime:s,onCancel:l,stakingRef:i,status:o,validator:c,validatorAddress:u}=e,{staking:m}=i,p=(0,h.P)(null==c?void 0:c.description.identity,null==c?void 0:c.operatorAddress);(0,r.useEffect)(()=>{u&&(0,x.Dr)(u,m)},[u,m]);let j={disabled:!l,onClick:l};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:[k,"hidden min-w-[1000px] md:grid"].join(" "),style:y,children:[(0,n.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,n.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsx)("div",{className:"text-right",children:(0,n.jsx)(w.Z,{text:(0,v.Em)(t)})}),(0,n.jsx)("div",{className:"text-right",children:"Unbonding"}),(0,n.jsx)("div",{className:"text-right",children:(0,v.ts)(s)}),(0,n.jsx)("div",{className:"text-right",children:!!l&&(0,n.jsx)(a.hp,{...j,variant:"danger",children:"Cancel Unstake"})})]}),(0,n.jsxs)("div",{className:[k,"flex w-full flex-col px-[16px] md:hidden"].join(" "),children:[(0,n.jsxs)("div",{className:"flex w-full flex-1 flex-row justify-start gap-4",children:[(0,n.jsx)(d.D,{logo:p}),(0,n.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,n.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:(null==c?void 0:c.description.moniker)||""}),(0,n.jsx)(g.Z,{address:(null==c?void 0:c.operatorAddress)||""})]})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Amount"}),(0,n.jsx)(w.Z,{text:(0,v.Em)(t)})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Status"}),(0,n.jsx)("span",{children:o})]}),(0,n.jsxs)("div",{className:"flex w-full flex-row justify-between",children:[(0,n.jsx)("span",{children:"Completion"}),(0,v.ts)(s)]}),!!l&&(0,n.jsx)("div",{className:"flex w-full flex-row justify-end",children:(0,n.jsx)(a.hp,{...j,variant:"danger",children:"Cancel Unstake"})})]})]})},E=d.N,F=d.N,O="grid w-full items-center justify-between gap-2 py-4 px-2 uppercase md:min-w-[1000px]";t.ZP=(0,r.memo)(()=>{let e=(0,u.n)(),{staking:t}=e,[s,i]=(0,r.useState)("none"),[a,d]=(0,r.useState)("none"),o=(0,p.mM)(t.state),{delegations:x,redelegations:h,unbondings:j}=t.state,f=!!(null==x?void 0:x.items.length),v=!!(null==j?void 0:j.items.length),g=!!(null==h?void 0:h.items.length);return f||v||g?(0,n.jsxs)("div",{className:"flex h-full flex-1 flex-col items-end gap-[16px]",children:[f&&(()=>{let e=x.items.slice().sort((e,t)=>{switch(s){case"staked-asc":case"staked-desc":return(0,c.B)(new l.Z(e.balance.amount),new l.Z(t.balance.amount),"staked-asc"===s);case"rewards-asc":case"rewards-desc":return(0,c.B)(new l.Z(e.rewards.amount),new l.Z(t.rewards.amount),"rewards-asc"===s);case"commission-asc":case"commission-desc":{let n=o[e.validatorAddress],l=o[t.validatorAddress];return(0,c.B)(Number(null==n?void 0:n.commission.commissionRates.rate),Number(null==l?void 0:l.commission.commissionRates.rate),"commission-asc"===s)}default:return 0}});return(0,n.jsxs)("div",{className:S,children:[(0,n.jsxs)("div",{className:O,style:y,children:[(0,n.jsx)(E,{mobile:!0,children:"Delegations"}),(0,n.jsx)(E,{onSort:i,rigthAlign:!0,sort:s,sorting:["staked-asc","staked-desc"],children:"Staked Amount"}),(0,n.jsx)(E,{onSort:i,rigthAlign:!0,sort:s,sorting:["commission-asc","commission-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Commission"})}),(0,n.jsx)(E,{onSort:i,rigthAlign:!0,sort:s,sorting:["rewards-asc","rewards-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Rewards"})})]}),e.map((e,s)=>(0,n.jsx)(A,{delegation:e,index:s,staking:t,validator:o[e.validatorAddress]},s))]})})(),(v||g)&&(()=>{var s,l;let i=[...null!==(s=null==j?void 0:j.items)&&void 0!==s?s:[],...null!==(l=null==h?void 0:h.items)&&void 0!==l?l:[]].sort((e,t)=>{switch(a){case"amount-asc":case"amount-desc":return(0,c.B)(Number(e.balance.amount),Number(t.balance.amount),"amount-asc"===a);case"completion-asc":case"completion-desc":return(0,c.B)(e.completionTime,t.completionTime,"completion-asc"===a);default:return 0}});return(0,n.jsxs)("div",{className:S,children:[(0,n.jsxs)("div",{className:O,style:y,children:[(0,n.jsx)(F,{mobile:!0,children:"Unstakings/Redelegations"}),(0,n.jsx)(F,{onSort:d,rigthAlign:!0,sort:a,sorting:["amount-asc","amount-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,n.jsx)(F,{rigthAlign:!0,children:(0,n.jsx)("div",{className:"text-right",children:"Status"})}),(0,n.jsx)(F,{onSort:d,rigthAlign:!0,sort:a,sorting:["completion-asc","completion-desc"],children:(0,n.jsx)("div",{className:"text-right",children:"Completion Time"})})]}),i.map((s,l)=>{let i="validator"in s,r=i?s.validator:s.dstValidator,a=i?()=>{t.dispatch((0,m.ZG)({content:{unbondings:[s]},type:"cancel-unstaking"}))}:void 0;return(0,n.jsx)(Z,{balance:s.balance,completionTime:s.completionTime,onCancel:a,stakingRef:e,status:i?"Unbonding":"Redelegation",validator:o[r],validatorAddress:r},l)})]})})()]}):null})},42498:function(e,t,s){s.d(t,{I:function(){return l},i:function(){return i}});var n=s(3827);let l=e=>{let{className:t}=e;return(0,n.jsx)("div",{className:["h-[1px] w-full bg-[#ffffff33]",t||""].join(" ")})},i=()=>(0,n.jsx)("div",{className:"h-full w-[1px] bg-[#ffffff33]"})},88612:function(e,t,s){s.d(t,{Z:function(){return T}});var n=s(3827),l=s(66759),i=s(86482),r=s(22840),a=s(64090),d=s(30298),o=s(3237),c=s(82012),x=s(98245),u=s.n(x),m=s(59371);u().setAppElement(document.body);let p=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"mb-[16px] text-[16px] leading-[24px] text-typo-100 opacity-50",children:t})};var h=e=>{let{children:t,...s}=e;return(0,a.useEffect)(()=>{if(s.isOpen){let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}}},[s.isOpen]),(0,n.jsx)(u(),{...s,style:{content:{background:"transparent",border:"none",bottom:"auto",boxShadow:"0px 0px 50px 0px #FFFFFF40",boxSizing:"border-box",display:"grid",gridTemplateColumns:"1fr",inset:0,maxHeight:"100%",minWidth:"100vw",outline:"none",overflow:"auto",padding:"0",pointerEvents:"none",position:"fixed",right:"auto",width:"100vw",zIndex:10},overlay:{backdropFilter:"blur(10px)",backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,n.jsxs)("div",{className:"relative min-h-[100vh] w-full overflow-auto bg-[#000] px-[16px] py-[80px] md:min-h-[unset] md:rounded-[48px] md:p-[50px] md:py-[40px]",style:{boxShadow:"0px 0px 50px 0px #FFFFFF40",boxSizing:"border-box",display:"flex",flexDirection:"column",height:"max-content",margin:"auto",maxWidth:"100vw",outline:"none",pointerEvents:"auto",position:"relative",width:"min-content"},children:[(0,n.jsx)("button",{className:"absolute right-[12px] top-[12px] w-[36px] cursor-pointer",dangerouslySetInnerHTML:{__html:m.kC},onClick:s.onRequestClose}),t]})})},j=s(143),f=s(26605),v=s(89056),g=s(88197),w=s(80469),N=s(62986),b=s(39730),y=s(66803),k=s(67497);let S="input",C=e=>{let{validator:{description:{identity:t,moniker:s},operatorAddress:i}}=e,r=(0,v.P)(t,i);return(0,n.jsx)(l.W,{value:i,children:(0,n.jsxs)("div",{className:"flex gap-2 bg-black py-2 pl-6 lg:min-w-96",children:[(0,n.jsx)(j.D,{height:24,logo:r,width:24}),(0,n.jsx)("span",{children:s})]})})},A=e=>{let{open:t=!1}=e;return(0,n.jsx)("img",{alt:"down-arrow",className:["ml-auto mr-4",t?"rotate-180":""].join(" "),height:24,src:"/down-arrow.svg",width:24})},Z=()=>(0,n.jsxs)("div",{className:"flex gap-2 bg-black",children:[(0,n.jsx)(j.D,{logo:null}),(0,n.jsxs)("div",{className:"flex flex-col items-start gap-1 bg-black p-2",children:[(0,n.jsx)("span",{children:"Select Validator"}),(0,n.jsx)("span",{children:"XION Address"})]}),(0,n.jsx)(A,{})]}),E=e=>{let{validator:t}=e,s=(0,v.P)(t.description.identity,t.operatorAddress);return(0,n.jsxs)("div",{className:"flex gap-2 bg-black",children:[(0,n.jsx)(j.D,{logo:s}),(0,n.jsxs)("div",{className:"flex flex-col items-start gap-1 bg-black p-2",children:[(0,n.jsx)("span",{children:t.description.moniker}),(0,n.jsx)(f.Z,{address:t.operatorAddress})]}),(0,n.jsx)(A,{})]})};var F=()=>{var e,t;let s=(0,w.n)(),{client:l}=s,[x,u]=(0,a.useState)(S),[m,j]=(0,a.useState)(!1),[f,v]=(0,a.useState)({amount:void 0,memo:void 0}),[A,F]=(0,a.useState)(),[O,I]=(0,a.useState)(""),[z,R]=(0,a.useState)(""),{account:D,staking:B}=s,{modal:_}=B.state,P=(null==_?void 0:_.type)==="redelegate";(0,a.useEffect)(()=>()=>{u(S),I(""),v({}),R("")},[P]);let{validators:T}=B.state,U=[null===(e=T.bonded)||void 0===e?void 0:e.items,null===(t=T.unbonded)||void 0===t?void 0:t.items].flat(1).filter(e=>!!e),q=U.reduce((e,t)=>({...e,[t.operatorAddress]:t}),{});if(!P)return null;let{validator:L}=null==_?void 0:_.content;if(!L)return null;let X=new r.Z(O),G=X.isNaN()?"":X.times(o.Ex),H=(0,b.U2)(B.state,L.operatorAddress),M=()=>{if(!G||!H||X.lte(0)||X.gt(new r.Z(H.amount)))return v({...f,amount:"Invalid amount"}),!0},W=e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!M()&&l&&X.gt(0)&&u("review")};return(0,n.jsx)(h,{isOpen:P,onRequestClose:()=>{m||s.staking.dispatch((0,N.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let e=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(c.Bz,{children:"Redelegation Amount (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.HS)(X)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)((0,y.Jp)(X))})]}),!!z&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:z})})]});return"completed"===x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(p,{children:["You have successfully redelegate from"," ",L.description.moniker,"to ",null==A?void 0:A.description.moniker]})]}),e(),(0,n.jsx)(c.zx,{disabled:m,onClick:()=>{s.staking.dispatch((0,N.ZG)(null))},children:"CLOSE"})]}):"review"===x?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"REVIEW"})}),(0,n.jsxs)(p,{children:["You are about to redelegate your token from"," ",L.description.moniker," to",null==A?void 0:A.description.moniker,". Remember, you will not able to redelegate these token within ",o.Mx," days."]})]}),e(),(0,n.jsx)(c.zx,{isLoading:m,onClick:()=>{l&&A&&(j(!0),(0,g.Ty)({amount:(0,y.Jp)(X),client:l,delegatorAddress:D.bech32Address,memo:z,validatorDstAddress:null==A?void 0:A.operatorAddress,validatorSrcAddress:L.operatorAddress},B).then(e=>(u("completed"),e())).catch(()=>{(0,d.Am)("Redelegation error",{type:"error"})}).finally(()=>j(!1)))},children:"PROCEED"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(c.ls,{children:["Redelegate From ",L.description.moniker]})}),(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("span",{children:"To"}),(0,n.jsxs)("div",{children:["Available:"," ",!!H&&(0,k.Em)(H,void 0,!0)," ",(0,n.jsx)("span",{className:"opacity-40",children:"XION"})]})]}),(0,n.jsx)(i.P,{className:"m-4 w-full",id:"validator",onChange:(e,t)=>{t&&F(q[t])},renderValue:e=>null==e?(0,n.jsx)(Z,{}):(0,n.jsx)(E,{validator:q[e.value]}),children:(0,n.jsx)("div",{className:"max-h-96 overflow-x-visible overflow-y-scroll",children:Object.values(U).map(e=>(0,n.jsx)(C,{validator:e},e.operatorAddress))})}),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!G&&(0,n.jsxs)(c.Bz,{children:["=$",(0,k.HS)(G)]})]}),(0,n.jsxs)("form",{onSubmit:W,children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(c.Wz,{disabled:m,error:!!f.amount,onBlur:()=>{M()},onChange:e=>{f.amount&&v({...f,amount:void 0}),I(e.target.value)},value:O}),f.amount&&(0,n.jsx)(c.Xq,{children:f.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(c.sr,{disabled:m,onChange:e=>{R(e.target.value)},placeholder:"Memo (Optional)",value:z})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(c.zx,{disabled:m,type:"submit",children:"Redelegate now"})})]})]})})()})})},O=s(19807),I=(0,a.memo)(()=>{let e=(0,w.n)(),[t,s]=(0,a.useState)("confirm"),[l,i]=(0,a.useState)(!1),{account:r,client:o,staking:x}=e,{modal:u}=x.state,m=(null==u?void 0:u.type)==="cancel-unstaking";if(!m)return null;let{unbondings:j}=(null==u?void 0:u.content)||{};if(!(null==j?void 0:j.length))return null;let f="confirm"===t?(0,n.jsxs)("div",{className:"w-full text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"Are you sure?"})}),(0,n.jsxs)(p,{children:["We are currently completing the unstaking process.",(0,n.jsx)("br",{}),"Are you sure you want to cancel the process?"]}),(0,n.jsx)(c.zx,{className:"mt-[25px]",isLoading:l,onClick:()=>{o&&(i(!0),j.reduce(async(e,t)=>{await e;let s={delegator:r.bech32Address,validator:t.validator};await (0,O.mu)(s,t,o)},Promise.resolve()).then(()=>{(0,g.VZ)(r.bech32Address,x),s("completed")}).catch(()=>{(0,d.Am)("There was an unexpected error canceling your unstaking. Please try again later.",{type:"error"})}).finally(()=>{i(!1)}))},children:"CONFIRM"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"Success!"})}),(0,n.jsx)(p,{children:"You have successfully cancel the unstaking process, and you are now contributing to the security of the XION network again."})]}),(0,n.jsx)(c.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,N.ZG)(null))},children:"CLOSE"})]});return(0,n.jsx)(h,{isOpen:m,onRequestClose:()=>{l||e.staking.dispatch((0,N.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:f})})});let z=async(e,t)=>{let{client:s,staking:n}=e,{modal:l}=n.state;if((null==l?void 0:l.type)!=="rewards")return;let{delegations:i}=(null==l?void 0:l.content)||{};if(!s||!(null==i?void 0:i.length))return;let a=e.account.bech32Address;i.reduce(async(e,t)=>{await e;let n=(0,y.bI)(t.rewards);if(new r.Z(n.amount).lt(o._H))return;let l={delegator:a,validator:t.validatorAddress};await (0,O.YY)(l,s)},Promise.resolve()).then(()=>(0,g.VZ)(a,n)).then(()=>{t("completed")}).catch(()=>{(0,d.Am)("There was an unexpected error claiming your rewards. Please try again later.",{type:"error"})})};var R=(0,a.memo)(()=>{let e=(0,w.n)(),[t,s]=(0,a.useState)("loading"),l=(0,a.useRef)(!1),{staking:i}=e,{modal:r}=i.state,d=(null==r?void 0:r.type)==="rewards";if((0,a.useEffect)(()=>{d&&!l.current&&(l.current=!0,z(e,s))},[d,e]),!d)return null;let o="loading"===t?(0,n.jsxs)("div",{className:"w-full text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"CLAIMING"})}),(0,n.jsx)(p,{children:"Wait until your rewards are withdrawn."}),(0,n.jsx)(c.zx,{className:"mt-[25px]",isLoading:!0})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"Success!"})}),(0,n.jsx)(p,{children:"You have claimed your staking rewards successfully."})]}),(0,n.jsx)(c.zx,{className:"mt-[25px]",onClick:()=>{e.staking.dispatch((0,N.ZG)(null))},children:"CLOSE"})]});return(0,n.jsx)(h,{isOpen:d,onRequestClose:()=>{"loading"!==t&&e.staking.dispatch((0,N.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:o})})});let D="input";var B=()=>{let e=(0,w.n)(),{client:t}=e,[s,l]=(0,a.useState)(D),[i,x]=(0,a.useState)(!1),[u,m]=(0,a.useState)(""),[j,f]=(0,a.useState)(""),[v,S]=(0,a.useState)({amount:void 0,memo:void 0}),{account:C,staking:A}=e,{modal:Z}=A.state,E=(null==Z?void 0:Z.type)==="delegate";if((0,a.useEffect)(()=>()=>{l(D),S({}),m(""),f("")},[E]),!E)return null;let{validator:F}=null==Z?void 0:Z.content;if(!F)return null;let O=new r.Z(u),I=O.isNaN()?"":O.times(o.Ex),z=Object.values(v).some(e=>!!e),R=(0,b.ap)(A.state);return(0,n.jsx)(h,{isOpen:E,onRequestClose:()=>{i||e.staking.dispatch((0,N.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(c.Bz,{children:"Staked Amount (XION)"}),(0,n.jsx)(c.XJ,{children:O.toString()}),I&&(0,n.jsxs)(c.Bz,{children:["$",(0,k.HS)(I)]})]}),!!j&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:j})})]});if("completed"===s)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(p,{children:["You have successfully staked on"," ",F.description.moniker,". Thank you for contributing in securing the XION network."]})]}),r(),(0,n.jsx)(c.zx,{disabled:i,onClick:()=>{e.staking.dispatch((0,N.ZG)(null))},children:"CLOSE"})]});if("review"===s)return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"REVIEW"})}),(0,n.jsxs)(p,{children:["Get ready to stake your XION token with"," ",F.description.moniker,". Press 'Confirm' to proceed."]})]}),r(),(0,n.jsx)(c.zx,{isLoading:i,onClick:()=>{if(!t)return;x(!0);let e={delegator:C.bech32Address,validator:F.operatorAddress};(0,g._5)(e,(0,y.Jp)(O),j,t,A).then(e=>(l("completed"),e())).catch(()=>{(0,d.Am)("Staking error",{type:"error"})}).finally(()=>{x(!1)})},children:"CONFIRM"})]});let a=()=>{if(!I||!R||O.isNaN()||O.gt(R))return S({...v,amount:"Invalid amount"}),!0};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(c.ls,{children:["Delegate To ",F.description.moniker]})}),R&&(()=>{let e={amount:R.toString(),denom:"XION"};return(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,n.jsx)(c.Bz,{children:"Available for delegation (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.Em)(e,void 0,!0)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)(e)})]})})(),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!I&&(0,n.jsxs)(c.Bz,{children:["= $",(0,k.HS)(I)]})]}),(0,n.jsxs)("form",{onSubmit:e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!a()&&(!t||z||O.lt(0)||l("review"))},children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(c.Wz,{disabled:i,error:!!v.amount,onBlur:()=>{a()},onChange:e=>{v.amount&&S({...v,amount:void 0}),m(e.target.value)},value:u}),v.amount&&(0,n.jsx)(c.Xq,{children:v.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(c.sr,{disabled:i,onChange:e=>{f(e.target.value)},placeholder:"Memo (Optional)",value:j})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(c.zx,{disabled:i||z,type:"submit",children:"DELEGATE NOW"})})]})]})})()})})};let _="input";var P=()=>{let e=(0,w.n)(),{client:t}=e,[s,l]=(0,a.useState)(_),[i,x]=(0,a.useState)(!1),[u,m]=(0,a.useState)({amount:void 0,memo:void 0}),[j,f]=(0,a.useState)(""),[v,S]=(0,a.useState)(""),{account:C,staking:A}=e,{modal:Z}=A.state,E=(null==Z?void 0:Z.type)==="undelegate";if((0,a.useEffect)(()=>()=>{l(_),f(""),m({}),S("")},[E]),!E)return null;let{validator:F}=null==Z?void 0:Z.content;if(!F)return null;let O=new r.Z(j),I=O.isNaN()?"":O.times(o.Ex),z=(0,b.U2)(A.state,F.operatorAddress),R=()=>{if(!I||!z||O.lte(0)||O.gt(new r.Z(z.amount)))return m({...u,amount:"Invalid amount"}),!0},D=e=>{null==e||e.stopPropagation(),null==e||e.preventDefault(),!R()&&t&&O.gt(0)&&l("review")};return(0,n.jsx)(h,{isOpen:E,onRequestClose:()=>{i||e.staking.dispatch((0,N.ZG)(null))},children:(0,n.jsx)("div",{className:"min-w-[90vw] md:min-w-[390px]",children:(()=>{let r=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"mb-[32px] mt-[32px] flex w-full flex-col items-center justify-center gap-[12px]",children:[(0,n.jsx)(c.Bz,{children:"Unstaking Amount (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.HS)(O)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)((0,y.Jp)(O))})]}),!!v&&(0,n.jsx)("div",{className:"mb-[32px] text-center italic",children:(0,n.jsx)("div",{children:v})})]});return"completed"===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"SUCCESS!"})}),(0,n.jsxs)(p,{children:["You have successfully unstaked from"," ",F.description.moniker,". It takes ",o.Mx," ","days to complete the unstaking process"]})]}),r(),(0,n.jsx)(c.zx,{disabled:i,onClick:()=>{e.staking.dispatch((0,N.ZG)(null))},children:"CLOSE"})]}):"review"===s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsx)(c.ls,{children:"REVIEW"})}),(0,n.jsxs)(p,{children:["Unstaking your XION Token means you'll stop earning rewards. Remember, it takes ",o.Mx," days to complete the unstaking process."]})]}),r(),(0,n.jsx)(c.zx,{isLoading:i,onClick:()=>{if(!t)return;x(!0);let e={delegator:C.bech32Address,validator:F.operatorAddress};(0,g.xu)(e,(0,y.Jp)(O),v,t,A).then(e=>(l("completed"),e())).catch(()=>{(0,d.Am)("Staking error",{type:"error"})}).finally(()=>{x(!1)})},children:"CONFIRM"})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"mb-[35px] text-center uppercase",children:(0,n.jsxs)(c.ls,{children:["Unstake From ",F.description.moniker]})}),z&&(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,n.jsx)(c.Bz,{children:"Available amount (XION)"}),(0,n.jsx)(c.XJ,{children:(0,k.Em)(z,void 0,!0)}),(0,n.jsx)(c.Bz,{children:(0,k.H_)(z)})]}),(0,n.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,n.jsx)("div",{children:"Amount"}),!!I&&(0,n.jsxs)(c.Bz,{children:["=$",(0,k.HS)(I)]})]}),(0,n.jsxs)("form",{onSubmit:D,children:[(0,n.jsxs)("div",{className:"mt-[8px]",children:[(0,n.jsx)(c.Wz,{disabled:i,error:!!u.amount,onBlur:()=>{R()},onChange:e=>{u.amount&&m({...u,amount:void 0}),f(e.target.value)},value:j}),u.amount&&(0,n.jsx)(c.Xq,{children:u.amount})]}),(0,n.jsx)("div",{className:"mt-[40px] w-full",children:(0,n.jsx)(c.sr,{disabled:i,onChange:e=>{S(e.target.value)},placeholder:"Memo (Optional)",value:v})}),(0,n.jsx)("div",{className:"mt-[48px] w-full",children:(0,n.jsx)(c.zx,{disabled:i,type:"submit",children:"Unstake Now"})})]})]})})()})})},T=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(B,{}),(0,n.jsx)(P,{}),(0,n.jsx)(R,{}),(0,n.jsx)(I,{}),(0,n.jsx)(F,{})]})},48074:function(e,t,s){var n=s(3827);t.Z=e=>{let{text:t}=e,[s,l]=t.split(" ");return(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{children:s})," ",(0,n.jsx)("span",{className:"text-typo-200",children:l})]})}},89056:function(e,t,s){s.d(t,{P:function(){return d}});var n=s(64090),l=s(3237);let i={},r={getIdentityLogo:e=>{if(i[e])return i[e];let t=fetch("https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=".concat(e)).then(e=>e.json()).then(e=>{var t,s,n,l;return(null==e?void 0:null===(l=e.them)||void 0===l?void 0:null===(n=l[0])||void 0===n?void 0:null===(s=n.pictures)||void 0===s?void 0:null===(t=s.primary)||void 0===t?void 0:t.url)||null}).catch(()=>null);return i[e]=t,t}},a={xionvaloper1mq85keggvh67m37035mnncsqjnpkmunl6s2w56:"/chains/bonus-block.png",xionvaloper1sprpvyqln2vxshq8c5jt3dshn480rfeelupqrj:"/chains/inf-stones.png",xionvaloper1t4yes7c20hhga3nhqylnyq9kn5ja8t7c6ay45c:"/chains/mech-cap.png",xionvaloper1ypwfnfuldmlp9u8asqzz6qx29p0utqzer5678k:"/chains/stake-lab.png"},d=(e,t)=>{let[s,i]=(0,n.useState)(null);return(0,n.useEffect)(()=>{(async()=>{if(e){let t=await r.getIdentityLogo(e);if(t){i(t);return}}if(t){let e=a[t];e&&i(l.sb+e)}})()},[e,t]),s}},67497:function(e,t,s){s.d(t,{Em:function(){return r},HS:function(){return d},H_:function(){return c},PV:function(){return u},gg:function(){return a},i:function(){return o},ts:function(){return x}});var n=s(22840),l=s(3237),i=s(66803);let r=(e,t,s)=>{let r=(0,i.bI)(e),a=new n.Z(r.amount),d=s?"":" ".concat(r.denom);if(a.eq(0))return"".concat(a.toFormat()).concat(d);if(a.lt(l.Uv))return"<".concat(l.Uv).concat(d);if(t){let e=Intl.NumberFormat("en",{notation:"compact"});return"".concat(e.format(a.toNumber())).concat(d)}return"".concat(a.toFormat(Math.min(l.oF,a.decimalPlaces()||1/0))).concat(d)},a=e=>{if("number"!=typeof e||Number.isNaN(e))return null;let t=e<1e-4?"<0.1":(100*e).toFixed(1);return"".concat(t,"%")},d=(e,t,s)=>t&&e.lt(t)?"<".concat(t):s?e.toFormat(Math.min(s,e.decimalPlaces()||1/0)):Intl.NumberFormat("en",{notation:"compact"}).format(e.toNumber()),o=(e,t)=>{let s=new n.Z(e).div(new n.Z(10).pow(18)).toNumber();return"".concat((100*s).toFixed(t),"%")},c=(e,t)=>{let s=(0,i.bI)(e||(0,i.IB)()),r=new n.Z(e?s.amount:0).times(l.Ex);return r.eq(0)?"$0":!t&&r.lt(.01)?"<$0.01":"$".concat(t?d(r):r.toFormat(2))},x=e=>{let t=1e3*e,s=Math.floor((t-Date.now())/864e5),n=new Date(t).toLocaleString("en-US",{month:"short"}),l=new Date(t).getDate(),i=new Date(t).getFullYear();return"in ".concat(s," day").concat(1===s?"":"s",", ").concat(n," ").concat(l," ").concat(i)},u=e=>e?"".concat(e.times(100).toFixed(2),"%"):"-"}}]);