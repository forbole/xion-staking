(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{67617:function(e,s,t){Promise.resolve().then(t.bind(t,64350))},64350:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return I}});var i=t(3827),n=t(64090),a=t(82012),l=t(80469),r=t(62948),c=t(37275),d=t(75615),o=t(22840),x=t(3237),m=t(62986),u=t(39730),h=t(66803),p=t(67497),g=t(42498);let j="absolute bottom-[24px] right-[-8px] top-[24px]",v="relative flex h-full flex-col items-start gap-3 p-[24px]";var f=(0,n.memo)(()=>{let{isConnected:e}=(0,d.hT)(),{staking:s}=(0,l.n)(),[,t]=(0,d.dd)();if(!e)return(0,i.jsxs)("div",{className:"flex min-h-[212px] flex-col items-center justify-center gap-[8px] px-[12px] uppercase",style:{backgroundImage:"url(".concat(x.sb,"/overview-bg.png)"),borderRadius:24},children:[(0,i.jsx)(a.ls,{className:"text-center",children:"Please Log In To View"}),(0,i.jsx)("div",{children:(0,i.jsx)(a.zx,{className:"min-w-[150px]",onClick:()=>{t(!0)},children:"Log In"})})]});let n=(0,u.U2)(s.state,null)||(0,h.IB)(),r=(0,u.Cn)(null,s.state)||(0,h.IB)(),c=(0,u.jc)(s.state),f=s.state.tokens?(0,h.bI)(s.state.tokens):(0,h.IB)();return(0,i.jsxs)("div",{className:"grid min-h-[144px] flex-col items-center justify-center gap-[8px] overflow-auto",style:{backgroundImage:"url(".concat(x.sb,"/overview-bg.png)"),borderRadius:24,gridTemplateColumns:"1fr 1fr 1fr 1fr"},children:[(0,i.jsxs)("div",{className:v,children:[(0,i.jsx)(a.Bz,{children:"Claimable Rewards (XION)"}),(0,i.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,i.jsx)(a.XJ,{title:[r.amount,"XION"].join(" "),children:(0,p.HS)(new o.Z(r.amount),x.Uv)}),(0,u.c3)(s.state)&&(0,i.jsx)(a.hp,{onClick:()=>{var e;s.dispatch((0,m.ZG)({content:{delegations:(null===(e=s.state.delegations)||void 0===e?void 0:e.items)||[]},type:"rewards"}))},children:"Claim"})]}),(0,i.jsx)(a.jr,{children:(0,p.H_)(r)}),(0,i.jsx)("div",{className:j,children:(0,i.jsx)(g.i,{})})]}),(0,i.jsxs)("div",{className:v,children:[(0,i.jsx)(a.Bz,{children:"APR"}),(0,i.jsx)(a.XJ,{children:(0,p.PV)(c)}),(0,i.jsx)("div",{className:j,children:(0,i.jsx)(g.i,{})})]}),(0,i.jsxs)("div",{className:v,children:[(0,i.jsx)(a.Bz,{children:"Delegated Amount (XION)"}),(0,i.jsx)(a.XJ,{title:(0,p.Em)(n),children:(0,p.HS)(new o.Z(n.amount),x.Uv)}),(0,i.jsx)(a.jr,{children:(0,p.H_)(n)}),(0,i.jsx)("div",{className:j,children:(0,i.jsx)(g.i,{})})]}),(0,i.jsxs)("div",{className:v,children:[(0,i.jsx)(a.Bz,{children:"Available For Delegation (XION)"}),(0,i.jsx)(a.XJ,{title:(0,p.Em)(f),children:(0,p.HS)(new o.Z(f.amount))}),(0,i.jsx)(a.jr,{children:(0,p.H_)(f)})]})]})}),N=t(20534),w=t(143),b=t(80148),k=t(89056),S=t(26605),y=t(48074);let B={gap:"16px",gridTemplateColumns:"350px repeat(3, 1fr) 80px 100px",minWidth:800},C=e=>{let{disabled:s,onStake:t,staking:n,validator:l}=e,{identity:r}=l.description,c=(0,k.P)(r),d=(0,u.Sg)(null==l?void 0:l.tokens,n.state),x=(0,p.gg)(d);return(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-between gap-0",style:{minWidth:800},children:[(0,i.jsxs)("div",{className:"grid w-full items-center justify-between gap-2 p-4",style:B,children:[(0,i.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,i.jsx)("div",{className:"flex items-center justify-start",children:(0,i.jsx)("img",{alt:"Validator logo",className:"block w-[50px] rounded-full",src:c,style:{height:50,minHeight:50,minWidth:50,width:50}})}),(0,i.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,i.jsx)("div",{className:"max-w-[300px] overflow-hidden truncate text-[14px] font-bold leading-[20px]",children:l.description.moniker}),(0,i.jsx)(S.Z,{address:l.operatorAddress})]}),(0,i.jsx)("div",{className:"flex min-w-max flex-col items-center justify-center",children:(0,u.zq)(l.operatorAddress,n.state)&&(0,i.jsx)("div",{className:"rounded-[2px] bg-successBg px-[8px] py-[2px] text-[11px] font-medium leading-[16px] tracking-normal text-success",children:"You staked"})})]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(y.Z,{text:(0,p.Em)((0,h.kw)(new o.Z(l.tokens)),!0)})}),(0,i.jsx)("div",{className:"text-right",children:(0,p.i)(l.commission.commissionRates.rate,2)}),d&&(0,i.jsx)("div",{className:"text-right",children:x}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(a.OL,{href:"/validator?address=".concat(l.operatorAddress),children:"Details"})}),t&&(0,i.jsx)("div",{children:(0,i.jsx)(a.hp,{disabled:s,onClick:t,children:"Delegate"})})]}),(0,i.jsx)("div",{className:"box-content h-[1px] bg-bg-500",style:{width:"calc(100% - 48px)"}})]})},A=w.N;var D=(0,n.memo)(()=>{var e,s,t;let{isConnected:r,staking:c}=(0,l.n)(),[d,x]=(0,n.useState)("none"),[h,p]=(0,n.useState)("active"),[g,j]=(0,n.useState)(""),{validators:v}=c.state,f=(null===(e=v.bonded)||void 0===e?void 0:e.items)||[],w=((null===(s=v.unbonded)||void 0===s?void 0:s.items)||[]).concat((null===(t=v.unbonding)||void 0===t?void 0:t.items)||[]),k=!c.state.validators.bonded||!c.state.validators.unbonding||!c.state.validators.bonded,S=("active"===h?f:w).filter("active"===h?e=>e.status===N.BondStatus.BOND_STATUS_BONDED:e=>e.status===(N.BondStatus.BOND_STATUS_UNBONDED||N.BondStatus.BOND_STATUS_UNBONDING)).slice().sort((e,s)=>{if("none"===d)return 0;if(["voting-power-asc","voting-power-desc"].includes(d)){let t=(0,u.Sg)(e.tokens,c.state),i=(0,u.Sg)(s.tokens,c.state);return(0,b.B)(t,i,"voting-power-asc"===d)}if(["commission-asc","commission-desc"].includes(d)){let t=parseFloat(e.commission.commissionRates.rate),i=parseFloat(s.commission.commissionRates.rate);return(0,b.B)(t,i,"commission-asc"===d)}if(["name-asc","name-desc"].includes(d)){let t=e.description.moniker.toLowerCase(),i=s.description.moniker.toLowerCase();return(0,b.B)(t,i,"name-asc"===d)}if(["staked-asc","staked-desc"].includes(d)){let t=new o.Z(e.tokens),i=new o.Z(s.tokens);return(0,b.B)(t,i,"staked-asc"===d)}return 0}).filter(e=>{if(!g)return!0;let s=e.description.moniker.toLowerCase(),t=e.operatorAddress.toLowerCase();return s.includes(g.toLowerCase())||t.includes(g.toLowerCase())});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex flex-col  md:grid md:grid-cols-3",children:[(0,i.jsxs)("div",{className:"flex w-full flex-col justify-start gap-[32px] md:flex-row md:gap-[16px]",children:[(0,i.jsx)(a.Dx,{children:"Validators"}),(0,i.jsx)(a.Mj,{onChange:e=>j(e.target.value),value:g})]}),(0,i.jsxs)("div",{className:"mt-[12px] flex flex-row items-center justify-center gap-[40px] uppercase md:mt-0",children:[(0,i.jsxs)(a.Y6,{active:"active"===h,onClick:()=>{p("active")},children:["Active (",f.length,")"]}),(0,i.jsxs)(a.Y6,{active:"inactive"===h,onClick:()=>{p("inactive")},children:["Inactive (",w.length,")"]})]})]}),(0,i.jsxs)("div",{className:"min-h-[100px] overflow-auto rounded-[24px] bg-bg-600 pb-4 text-typo-100",children:[(0,i.jsxs)("div",{className:"grid w-full items-center justify-between gap-2 bg-bg-500 p-4 uppercase",style:B,children:[(0,i.jsx)(A,{onSort:x,sort:d,sorting:["name-asc","name-desc"],children:"Validator"}),(0,i.jsx)(A,{onSort:x,rigthAlign:!0,sort:d,sorting:["staked-asc","staked-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,i.jsx)(A,{onSort:x,rigthAlign:!0,sort:d,sorting:["commission-asc","commission-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Commission"})}),(0,i.jsx)(A,{onSort:x,rigthAlign:!0,sort:d,sorting:["voting-power-asc","voting-power-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Voting Power"})})]}),k&&(0,i.jsx)(a.yV,{}),S.map(e=>(0,i.jsx)(C,{disabled:!r,onStake:"active"===h?()=>{c.dispatch((0,m.ZG)({content:{validator:e},type:"delegate"}))}:null,staking:c,validator:e},e.operatorAddress))]})]})}),I=(0,n.memo)(function(){let{staking:e}=(0,l.n)(),[s,t]=(0,n.useState)(!1),d=(0,r.S6)(e.state);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"page-container flex flex-col gap-6 px-[12px] pb-[24px] md:px-[24px]",children:[(0,i.jsxs)("div",{className:"mt-[40px] flex flex-row justify-between text-left",children:[(0,i.jsx)(a.Dx,{children:"Your Staking Overview"}),d&&(0,i.jsx)(r.sv,{isShowingDetails:s,setIsShowingDetails:t})]}),(0,i.jsx)(f,{}),s&&d&&(0,i.jsx)(r.ZP,{}),(0,i.jsx)(D,{})]}),(0,i.jsx)(c.Z,{})]})})}},function(e){e.O(0,[350,218,147,228,933,4,245,567,495,971,69,744],function(){return e(e.s=67617)}),_N_E=e.O()}]);