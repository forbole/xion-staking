(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{90858:function(e,s,i){Promise.resolve().then(i.bind(i,66355))},66355:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return y}});var l=i(3827),a=i(22840),n=i(20534),t=i(8792),c=i(15313),d=i(64090),x=i(3237),r=i(82012),o=i(88197),m=i(80469),p=i(62986),h=i(39730),j=i(89056),v=i(66803),u=i(67497),g=i(42498),f=i(37275),N=i(75615),w=i(62948);let b=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0 hidden md:block",children:(0,l.jsx)(g.i,{})}),(0,l.jsx)("div",{className:"block w-full translate-y-[12px] md:hidden",children:(0,l.jsx)(g.I,{})})]});function k(){var e;let s=(0,c.useSearchParams)().get("address"),i=(0,m.n)(),[,n]=(0,N.dd)(),[t,j]=(0,d.useState)(!1),{isConnected:g,staking:f}=i,[k,y]=(0,d.useState)(null);if((0,d.useEffect)(()=>{(async()=>{s&&y(await (0,o.qp)(s,f))})()},[s,f]),!k)return(0,l.jsx)("div",{children:"Loading ..."});let S=(0,h.ap)(f.state),C=(0,h.U2)(f.state,null),z=(0,h.jv)(f.state,null),B=(0,h.Cn)(null,f.state),X=(0,w.S6)(f.state),I=(null===(e=f.state.unbondings)||void 0===e?void 0:e.items)||[],_=g?(0,l.jsxs)("div",{className:"flex flex-col gap-[32px] rounded-[24px] bg-bg-600 p-[24px] md:grid md:grid-cols-4 md:gap-0",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Bz,{children:"Claimable Rewards (XION)"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px] flex flex-row items-center gap-[8px]",children:(0,l.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,l.jsxs)("div",{className:"flex flex-row items-center gap-[12px]",children:[B&&(0,l.jsx)(r.XJ,{title:[B.amount,"XION"].join(" "),children:(0,u.HS)(new a.Z(B.amount),x.Uv)}),(0,h.c3)(f.state)&&(0,l.jsx)(r.hp,{onClick:()=>{var e;f.dispatch((0,p.ZG)({content:{delegations:(null===(e=f.state.delegations)||void 0===e?void 0:e.items)||[]},type:"rewards"}))},children:"Claim"})]}),(0,l.jsx)(r.jr,{children:(0,u.H_)(B)})]})}),(0,l.jsx)(b,{})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Bz,{children:"My Delegation (XION)"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px]",children:C&&(0,l.jsx)(r.XJ,{children:(0,u.HS)(new a.Z(C.amount))})}),(0,l.jsx)(r.jr,{children:(0,u.H_)(C)}),(0,l.jsx)(b,{})]}),(0,l.jsx)("div",{className:"flex flex-row gap-[16px]",children:(0,l.jsxs)("div",{className:"relative w-full",children:[(0,l.jsx)(r.Bz,{children:"Available For Delegation (XION)"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,l.jsx)(r.XJ,{children:S?(0,u.HS)(S):"-"})}),(0,l.jsx)(r.jr,{children:S?(0,u.H_)((0,v.Jp)(S)):"-"}),(0,l.jsx)(b,{})]})}),(0,l.jsx)("div",{className:"flex flex-row gap-[16px]",children:(0,l.jsxs)("div",{children:[(0,l.jsx)(r.Bz,{children:"Unstakings (XION)"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,l.jsxs)("div",{className:"flex flex-row items-center gap-[12px]",children:[(0,l.jsx)(r.XJ,{children:z?(0,u.HS)(new a.Z(z.amount)):"-"}),!!(null==I?void 0:I.length)&&(0,l.jsx)("div",{className:"flex h-full flex-row items-end justify-end text-right",children:(0,l.jsx)("span",{children:(0,l.jsx)(r.hp,{className:"text-[14px]",onClick:()=>{f.dispatch((0,p.ZG)({content:{unbondings:I},type:"cancel-unstaking"}))},variant:"danger",children:"Cancel Unstake"})})})]})}),(0,l.jsx)(r.jr,{children:z?(0,u.H_)(z):"-"})]})})]}):(0,l.jsxs)("div",{className:"flex h-[220px] min-w-[1000px] flex-col items-center justify-center gap-[32px] rounded-[24px] bg-bg-600 uppercase",children:[(0,l.jsx)(r.ls,{children:"Please log in to view"}),(0,l.jsx)("div",{children:(0,l.jsx)(r.zx,{className:"[&]:min-w-[150px]",onClick:()=>{n(!0)},children:"Log in"})})]});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"mb-[24px] mt-[32px] flex flex-row items-center justify-between",children:[(0,l.jsx)(r.Dx,{children:"My Delegations"}),X&&(0,l.jsx)(w.sv,{isShowingDetails:t,setIsShowingDetails:j})]}),(0,l.jsx)("div",{className:"w-full overflow-auto",children:_}),X&&t&&(0,l.jsx)(w.ZP,{})]})}function y(){let e=(0,c.useSearchParams)().get("address"),s=(0,m.n)(),[i,N]=(0,d.useState)(null),w=(0,j.P)(null==i?void 0:i.description.identity);if((0,d.useEffect)(()=>{(async()=>{e&&N(await (0,o.qp)(e,s.staking))})()},[e,s]),!i)return(0,l.jsx)("div",{className:"mb-[36px] w-full",children:(0,l.jsx)(r.yV,{})});let b=(0,h.Sg)(i.tokens,s.staking.state),y=(0,u.gg)(b),S=new a.Z(i.tokens).div(new a.Z(10).pow(6)),C=(0,h.U2)(s.staking.state,i.operatorAddress),z=(0,h.zq)(i.operatorAddress,s.staking.state);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"page-container flex w-full flex-col gap-[16px] px-[16px] pb-[32px]",children:[(0,l.jsxs)("div",{className:"mb-[32px] mt-[40px]",children:[(0,l.jsx)(r.OL,{href:"/",children:"STAKING"})," ","> ",(0,l.jsx)("span",{className:"uppercase",children:i.description.moniker})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-[24px] overflow-auto p-[24px]",style:{backgroundImage:"url(".concat(x.sb,"/overview-bg.png)"),backgroundSize:"cover",borderRadius:16},children:[(0,l.jsxs)("div",{className:"flex w-full flex-col items-center gap-[16px] md:min-w-[1000px] md:flex-row",children:[(0,l.jsxs)("div",{className:"flex w-full flex-row justify-between gap-[16px]",children:[(0,l.jsx)("img",{alt:"Validator logo",className:"block w-[80px] rounded-full",src:w||x.c1}),(0,l.jsxs)("div",{className:"flex flex-1 items-center gap-[16px]",children:[(0,l.jsx)("div",{className:"text-[32px] font-bold leading-[36px] text-white",children:i.description.moniker||""}),z&&(0,l.jsx)("div",{className:"rounded-[4px] bg-successBg px-[8px] py-[4px] text-[11px] text-success",children:"You staked"})]})]}),i.status===n.BondStatus.BOND_STATUS_BONDED&&(0,l.jsx)("div",{className:"flex w-full md:w-[unset]",children:(0,l.jsx)(r.zx,{className:"w-full md:w-max",disabled:!s.isConnected,onClick:()=>{s.staking.dispatch((0,p.ZG)({content:{validator:i},type:"delegate"}))},children:"DELEGATE NOW"})})]}),(0,l.jsx)(g.I,{className:"md:min-w-[1000px]"}),(0,l.jsxs)("div",{className:"grid grid-cols-2 md:min-w-[1000px] md:grid-cols-4",children:[(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Bz,{children:"Total Stake (XION)"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,l.jsx)(r.XJ,{responsive:!0,children:(0,u.HS)(S)})}),(0,l.jsx)(r.jr,{children:(0,u.H_)((0,v.Jp)(S))}),(0,l.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,l.jsx)(g.i,{})})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Bz,{children:"Commission Rate"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,l.jsx)(r.XJ,{responsive:!0,children:(0,u.i)(i.commission.commissionRates.rate,2)})}),(0,l.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,l.jsx)(g.i,{})})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Bz,{children:"Voting Power"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,l.jsx)(r.XJ,{responsive:!0,children:y})}),(0,l.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,l.jsx)(g.i,{})})]}),(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.Bz,{children:"My Delegation (XION)"}),(0,l.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,l.jsx)(r.XJ,{responsive:!0,children:C?(0,u.HS)(new a.Z((0,v.bI)(C).amount)):"-"})}),(0,l.jsx)(r.jr,{children:(0,u.H_)(C)})]})]}),(0,l.jsx)(g.I,{className:"md:min-w-[1000px]"}),(0,l.jsxs)("div",{className:"grid grid-cols-1 gap-[24px] md:min-w-[1000px] md:grid-cols-4 md:gap-0",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-[8px] md:col-span-2",children:[(0,l.jsx)(r.Bz,{color:"text-white",children:"XION Address"}),(0,l.jsxs)("div",{className:"inline-flex flex-row gap-2 break-all",children:[i.operatorAddress," ",(0,l.jsx)(r.M5,{textToCopy:i.operatorAddress})]})]}),i.description.website&&(0,l.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,l.jsx)(r.Bz,{color:"text-white",children:"Website"}),(0,l.jsx)(t.default,{href:i.description.website,target:"_blank",children:i.description.website})]}),i.description.securityContact&&(0,l.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,l.jsx)(r.Bz,{color:"text-white",children:"Security Contact"}),(0,l.jsx)(t.default,{href:"mailto:".concat(i.description.securityContact),children:i.description.securityContact})]})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-[8px]",children:[(0,l.jsx)(r.Bz,{color:"text-white",children:"Details"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:i.description.details}),(0,l.jsxs)("div",{children:["Max Commission Rate:"," ",(0,u.i)(i.commission.commissionRates.maxRate,0)]}),(0,l.jsxs)("div",{children:["Max commission Change Rate:"," ",(0,u.i)(i.commission.commissionRates.maxChangeRate,0)]})]})]})]}),(0,l.jsx)(k,{})]}),(0,l.jsx)(f.Z,{})]})}}},function(e){e.O(0,[350,218,147,228,933,4,245,567,495,971,69,744],function(){return e(e.s=90858)}),_N_E=e.O()}]);