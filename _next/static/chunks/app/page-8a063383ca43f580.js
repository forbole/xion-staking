(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{67617:function(e,s,t){Promise.resolve().then(t.bind(t,64339))},64339:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return F}});var i=t(3827),n=t(64090),a=t(82012),l=t(80469),r=t(62948),c=t(75615),d=t(3237),o=t(88197),x=t(66803),m=t(19807),u=(0,n.memo)(()=>{let{isConnected:e}=(0,c.hT)(),{address:s,client:t,staking:r}=(0,l.n)(),[u,p]=(0,n.useState)({canFaucet:!1,denom:"",lastFaucetTimestamp:0,maxBalance:0,nextFaucetTimestamp:0}),[h,j]=(0,n.useState)(!1),g=(0,n.useCallback)(async()=>{if(e&&s&&t){var i,n;let e=await (0,m.TI)(s,t);(null===(i=r.state.tokens)||void 0===i?void 0:i.denom)===e.denom&&d.Jg&&(parseInt(null===(n=r.state.tokens)||void 0===n?void 0:n.amount)>e.maxBalance?p({...e,canFaucet:!1}):p(e))}},[e,s,t,r.state.tokens]);if((0,n.useEffect)(()=>{g()},[e,s,t,g]),!e||!u.canFaucet)return null;let v=(0,x.bI)({amount:u.maxBalance.toString(),denom:u.denom});return(0,i.jsx)("div",{className:"grid min-h-[144px] flex-col items-center justify-center gap-[8px] overflow-auto",style:{gridTemplateColumns:"1fr"},children:u.canFaucet&&(0,i.jsxs)(a.zx,{isLoading:h,onClick:async()=>{if(t)try{j(!0),await (0,m.dQ)(s,t)}catch(e){console.error(e)}finally{await (0,o.VZ)(s,r),j(!1)}},children:["Faucet ",v.amount," ",v.denom]})})}),p=t(37275),h=t(22840),j=t(62986),g=t(39730),v=t(67497),f=t(42498);let w="relative flex w-full h-full flex-col items-start gap-3 p-[24px]",N=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"absolute bottom-[24px] right-[-8px] top-[24px] hidden md:block",children:(0,i.jsx)(f.i,{})}),(0,i.jsx)("div",{className:"w-full translate-y-[24px] md:hidden",children:(0,i.jsx)(f.I,{})})]});var b=(0,n.memo)(()=>{let{isConnected:e}=(0,c.hT)(),{staking:s}=(0,l.n)(),[,t]=(0,c.dd)();if(!e)return(0,i.jsxs)("div",{className:"flex min-h-[212px] flex-col items-center justify-center gap-[8px] px-[12px] uppercase",style:{backgroundImage:"url(".concat(d.sb,"/overview-bg.png)"),borderRadius:24},children:[(0,i.jsx)(a.ls,{className:"text-center",children:"Please Log In To View"}),(0,i.jsx)("div",{children:(0,i.jsx)(a.zx,{className:"min-w-[150px]",onClick:()=>{t(!0)},children:"Log In"})})]});let n=(0,g.U2)(s.state,null)||(0,x.IB)(),r=(0,g.Cn)(null,s.state)||(0,x.IB)(),o=(0,g.jc)(s.state),m=s.state.tokens?(0,x.bI)(s.state.tokens):(0,x.IB)();return(0,i.jsxs)("div",{className:"flex min-h-[144px] flex-col items-center justify-center gap-[8px] overflow-auto md:grid",style:{backgroundImage:"url(".concat(d.sb,"/overview-bg.png)"),backgroundSize:"cover",borderRadius:24,gridTemplateColumns:"1fr 1fr 1fr 1fr"},children:[(0,i.jsxs)("div",{className:w,children:[(0,i.jsx)(a.Bz,{children:"Claimable Rewards (XION)"}),(0,i.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,i.jsx)(a.XJ,{title:[r.amount,"XION"].join(" "),children:(0,v.HS)(new h.Z(r.amount),d.Uv)}),(0,g.c3)(s.state)&&(0,i.jsx)(a.hp,{onClick:()=>{var e;s.dispatch((0,j.ZG)({content:{delegations:(null===(e=s.state.delegations)||void 0===e?void 0:e.items)||[]},type:"rewards"}))},children:"Claim"})]}),(0,i.jsx)(a.jr,{children:(0,v.H_)(r)}),(0,i.jsx)(N,{})]}),(0,i.jsxs)("div",{className:w,children:[(0,i.jsx)(a.Bz,{children:"APR"}),(0,i.jsx)(a.XJ,{children:(0,v.PV)(o)}),(0,i.jsx)(N,{})]}),(0,i.jsxs)("div",{className:w,children:[(0,i.jsx)(a.Bz,{children:"Delegated Amount (XION)"}),(0,i.jsx)(a.XJ,{title:(0,v.Em)(n),children:(0,v.HS)(new h.Z(n.amount),d.Uv)}),(0,i.jsx)(a.jr,{children:(0,v.H_)(n)}),(0,i.jsx)(N,{})]}),(0,i.jsxs)("div",{className:w,children:[(0,i.jsx)(a.Bz,{children:"Available For Delegation (XION)"}),(0,i.jsx)(a.XJ,{title:(0,v.Em)(m),children:(0,v.HS)(new h.Z(m.amount))}),(0,i.jsx)(a.jr,{children:(0,v.H_)(m)})]})]})}),k=t(20534),S=t(143),y=t(80148),B=t(89056),C=t(26605),_=t(48074);let I="grid-cols-[150px_repeat(3,1fr)_80px_100px] md:grid-cols-[350px_repeat(3,1fr)_80px_100px]",D={gap:"16px",minWidth:1e3},A=e=>{let{disabled:s,onStake:t,staking:n,validator:l}=e,{identity:r}=l.description,c=(0,B.P)(r),d=(0,g.Sg)(null==l?void 0:l.tokens,n.state),o=(0,v.gg)(d);return(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-between gap-0",style:{minWidth:1e3},children:[(0,i.jsxs)("div",{className:["grid w-full items-center justify-between gap-2 p-4",I].join(" "),style:D,children:[(0,i.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,i.jsx)(S.D,{logo:c}),(0,i.jsxs)("div",{className:"flex flex-col justify-center gap-[2px] text-left",children:[(0,i.jsx)("div",{className:"max-w-[150px] overflow-hidden truncate text-[14px] font-bold leading-[20px] md:max-w-[300px]",children:l.description.moniker}),(0,i.jsx)(C.Z,{address:l.operatorAddress})]}),(0,i.jsx)("div",{className:"flex min-w-max flex-col items-center justify-center",children:(0,g.zq)(l.operatorAddress,n.state)&&(0,i.jsx)("div",{className:"rounded-[2px] bg-successBg px-[8px] py-[2px] text-[11px] font-medium leading-[16px] tracking-normal text-success",children:"You staked"})})]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(_.Z,{text:(0,v.Em)((0,x.kw)(new h.Z(l.tokens)),!0)})}),(0,i.jsx)("div",{className:"text-right",children:(0,v.i)(l.commission.commissionRates.rate,2)}),d&&(0,i.jsx)("div",{className:"text-right",children:o}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(a.OL,{href:"/validator?address=".concat(l.operatorAddress),children:"Details"})}),t&&(0,i.jsx)("div",{children:(0,i.jsx)(a.hp,{disabled:s,onClick:t,children:"Delegate"})})]}),(0,i.jsx)("div",{className:"box-content h-[1px] bg-bg-500",style:{width:"calc(100% - 48px)"}})]})},O=S.N;var T=(0,n.memo)(()=>{var e,s,t;let{isConnected:r,staking:c}=(0,l.n)(),[d,o]=(0,n.useState)("none"),[x,m]=(0,n.useState)("active"),[u,p]=(0,n.useState)(""),{validators:v}=c.state,f=(null===(e=v.bonded)||void 0===e?void 0:e.items)||[],w=((null===(s=v.unbonded)||void 0===s?void 0:s.items)||[]).concat((null===(t=v.unbonding)||void 0===t?void 0:t.items)||[]),N=!c.state.validators.bonded||!c.state.validators.unbonding||!c.state.validators.bonded,b=("active"===x?f:w).filter("active"===x?e=>e.status===k.BondStatus.BOND_STATUS_BONDED:e=>e.status===k.BondStatus.BOND_STATUS_UNBONDED||e.status===k.BondStatus.BOND_STATUS_UNBONDING).slice().sort((e,s)=>{if("none"===d)return 0;if(["voting-power-asc","voting-power-desc"].includes(d)){let t=(0,g.Sg)(e.tokens,c.state),i=(0,g.Sg)(s.tokens,c.state);return(0,y.B)(t,i,"voting-power-asc"===d)}if(["commission-asc","commission-desc"].includes(d)){let t=parseFloat(e.commission.commissionRates.rate),i=parseFloat(s.commission.commissionRates.rate);return(0,y.B)(t,i,"commission-asc"===d)}if(["name-asc","name-desc"].includes(d)){let t=e.description.moniker.toLowerCase(),i=s.description.moniker.toLowerCase();return(0,y.B)(t,i,"name-asc"===d)}if(["staked-asc","staked-desc"].includes(d)){let t=new h.Z(e.tokens),i=new h.Z(s.tokens);return(0,y.B)(t,i,"staked-asc"===d)}return 0}).filter(e=>{if(!u)return!0;let s=e.description.moniker.toLowerCase(),t=e.operatorAddress.toLowerCase();return s.includes(u.toLowerCase())||t.includes(u.toLowerCase())});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col  md:grid md:grid-cols-3",children:[(0,i.jsxs)("div",{className:"flex w-full flex-col justify-start gap-[32px] md:flex-row md:gap-[16px]",children:[(0,i.jsx)(a.Dx,{children:"Validators"}),(0,i.jsx)(a.Mj,{onChange:e=>p(e.target.value),value:u})]}),(0,i.jsxs)("div",{className:"mt-[12px] flex flex-row items-center justify-center gap-[40px] uppercase md:mt-0",children:[(0,i.jsxs)(a.Y6,{active:"active"===x,onClick:()=>{m("active")},children:["Active",(0,i.jsxs)("span",{className:"hidden md:inline-block",children:[" ","(",f.length,")"]})]}),(0,i.jsxs)(a.Y6,{active:"inactive"===x,onClick:()=>{m("inactive")},children:["Inactive",(0,i.jsxs)("span",{className:"ml-[4px] hidden md:inline-block",children:[" ","(",w.length,")"]})]})]})]}),(0,i.jsxs)("div",{className:"min-h-[100px] overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100",children:[(0,i.jsxs)("div",{className:["grid w-full items-center justify-between gap-2 bg-bg-500 p-4 uppercase",I].join(" "),style:D,children:[(0,i.jsx)(O,{onSort:o,sort:d,sorting:["name-asc","name-desc"],children:"Validator"}),(0,i.jsx)(O,{onSort:o,rigthAlign:!0,sort:d,sorting:["staked-asc","staked-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,i.jsx)(O,{onSort:o,rigthAlign:!0,sort:d,sorting:["commission-asc","commission-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Commission"})}),(0,i.jsx)(O,{onSort:o,rigthAlign:!0,sort:d,sorting:["voting-power-asc","voting-power-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Voting Power"})})]}),N&&(0,i.jsx)(a.yV,{}),b.map(e=>(0,i.jsx)(A,{disabled:!r,onStake:"active"===x?()=>{c.dispatch((0,j.ZG)({content:{validator:e},type:"delegate"}))}:null,staking:c,validator:e},e.operatorAddress))]})]})}),F=(0,n.memo)(function(){let{staking:e}=(0,l.n)(),[s,t]=(0,n.useState)(!1),c=(0,r.S6)(e.state);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"page-container flex flex-col gap-6 px-[12px] pb-[24px] md:px-[24px]",children:[(0,i.jsxs)("div",{className:"mt-[40px] flex flex-row justify-between text-left",children:[(0,i.jsxs)(a.Dx,{children:[(0,i.jsx)("span",{className:"hidden md:block",children:"Your Staking Overview"}),(0,i.jsx)("span",{className:"block md:hidden",children:"Your Overview"})]}),c&&(0,i.jsx)(r.sv,{isShowingDetails:s,setIsShowingDetails:t})]}),(0,i.jsx)(u,{}),(0,i.jsx)(b,{}),s&&c&&(0,i.jsx)(r.ZP,{}),(0,i.jsx)(T,{})]}),(0,i.jsx)(p.Z,{})]})})}},function(e){e.O(0,[350,218,147,228,933,4,245,567,495,971,69,744],function(){return e(e.s=67617)}),_N_E=e.O()}]);