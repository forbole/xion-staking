(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{90858:function(e,s,i){Promise.resolve().then(i.bind(i,18157))},18157:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return w}});var a=i(3827),l=i(59115),t=i(22840),d=i(8792),n=i(15313),c=i(64090),r=i(98909),x=i(88197),o=i(80469),h=i(62986),p=i(39730),m=i(89056),j=i(66803),g=i(9016),v=i(67497);let u=()=>(0,a.jsx)("div",{className:"h-[1px] w-full bg-bg-400"}),b=()=>(0,a.jsx)("div",{className:"h-full w-[1px] bg-bg-400"});var f=i(71860),N=i(23234);function k(){let e=(0,n.useSearchParams)().get("address"),s=(0,o.n)(),[,i]=(0,N.dd)(),{isConnected:l,staking:d}=s,{isLoadingBlocking:m}=d.state,[g,u]=(0,c.useState)(null),{client:f}=(0,N.Hj)();if((0,c.useEffect)(()=>{(async()=>{e&&u(await (0,x.qp)(e,d))})()},[e,d]),!g)return(0,a.jsx)("div",{children:"Loading ..."});let k=(0,p.ap)(s.staking.state),w=(0,p.U2)(s.staking.state,null),C=(0,p.U2)(s.staking.state,g.operatorAddress),z=(0,p.Cn)(g.operatorAddress,s.staking.state),y=l?(0,a.jsxs)("div",{className:"grid grid-cols-4 rounded-[24px] bg-bg-600 p-[24px]",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(r.Bz,{children:"Claimable Rewards"}),(0,a.jsxs)("div",{className:"mb-[8px] mt-[12px] flex flex-row items-center gap-[8px]",children:[(0,a.jsx)(r.XJ,{children:(0,v.H_)(z)}),z&&(null==z?void 0:z.amount)!=="0"&&(0,a.jsx)(r.hp,{disabled:m,onClick:()=>{if(!f)return;let e={delegator:s.account.bech32Address,validator:g.operatorAddress};d.dispatch((0,h.WY)(!0)),(0,x.sT)(e,f,s.staking).finally(()=>{d.dispatch((0,h.WY)(!1))})},children:"Claim"})]}),(0,a.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,a.jsx)(b,{})})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(r.Bz,{children:"My Delegation (XION)"}),(0,a.jsx)("div",{className:"mb-[8px] mt-[12px]",children:w&&(0,a.jsx)(r.XJ,{children:(0,v.HS)(new t.Z(w.amount))})}),(0,a.jsx)(r.Bz,{children:(0,v.H_)(w)}),(0,a.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,a.jsx)(b,{})})]}),(0,a.jsxs)("div",{className:"col-span-2 flex flex-row gap-[16px]",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Bz,{children:"Available For Delegation (XION)"}),(0,a.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,a.jsx)(r.XJ,{children:k?(0,v.HS)(k):"-"})}),(0,a.jsx)(r.Bz,{children:k?(0,v.H_)((0,j.Jp)(k)):"-"})]}),(0,a.jsxs)("div",{className:"flex h-full flex-1 flex-row items-end gap-[16px]",children:[(0,a.jsx)(r.zx,{className:"flex-1",disabled:!s.isConnected||m,onClick:()=>{d.dispatch((0,h.ZG)({content:{validator:g},type:"delegate"}))},variant:"success",children:"Delegate"}),(0,a.jsx)(r.zx,{className:"flex-1",disabled:m||!s.isConnected||!C||(null==C?void 0:C.amount)==="0",onClick:()=>{d.dispatch((0,h.ZG)({content:{validator:g},type:"undelegate"}))},variant:"danger",children:"Unstake"})]})]})]}):(0,a.jsxs)("div",{className:"flex h-[220px] flex-col items-center justify-center gap-[32px] rounded-[24px] bg-bg-600 uppercase",children:[(0,a.jsx)(r.ls,{children:"Please log in to view"}),(0,a.jsx)(r.zx,{disabled:m,onClick:()=>{i(!0)},children:"Log in"})]});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"mb-[24px] mt-[32px]",children:(0,a.jsx)(r.Dx,{children:"My Delegations"})}),y]})}function w(){let e=(0,n.useSearchParams)().get("address"),s=(0,o.n)(),{isLoadingBlocking:i}=s.staking.state,[N,w]=(0,c.useState)(null),C=(0,m.P)(null==N?void 0:N.description.identity);if((0,c.useEffect)(()=>{(async()=>{e&&w(await (0,x.qp)(e,s.staking))})()},[e,s]),!N)return(0,a.jsx)("div",{children:"Loading ..."});let z=(0,p.Sg)(N.tokens,s.staking.state),y=(0,v.gg)(z),B=new t.Z(N.tokens).div(new t.Z(10).pow(6)),S=(0,p.U2)(s.staking.state,N.operatorAddress),A=(0,p.zq)(N.operatorAddress,s.staking.state);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"page-container flex w-full flex-col gap-[16px] px-[16px] pb-[32px]",children:[(0,a.jsxs)("div",{className:"mb-[32px] mt-[40px]",children:[(0,a.jsx)(r.OL,{href:"/",children:"STAKING"})," ","> ",(0,a.jsx)("span",{children:N.description.moniker})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-[24px] p-[24px]",style:{backgroundImage:"url(".concat(g.sb,"/overview-bg.png)"),backgroundSize:"cover",borderRadius:16},children:[(0,a.jsxs)("div",{className:"flex flex-row items-center gap-[16px]",children:[(0,a.jsx)("img",{alt:"Validator logo",className:"block w-[80px] rounded-full",src:C||g.c1}),(0,a.jsxs)("div",{className:"flex flex-1 items-center gap-[16px]",children:[(0,a.jsx)("div",{className:"typo-validator-name",children:N.description.moniker||""}),A&&(0,a.jsx)("div",{className:"rounded-[4px] bg-successBg px-[8px] py-[4px] text-[11px] text-success",children:"You staked"})]}),(0,a.jsx)("div",{children:(0,a.jsx)(l.z,{disabled:!s.isConnected||i,onClick:()=>{s.staking.dispatch((0,h.ZG)({content:{validator:N},type:"delegate"}))},children:"DELEGATE NOW"})})]}),(0,a.jsx)(u,{}),(0,a.jsxs)("div",{className:"grid grid-cols-4",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(r.Bz,{children:"Total Stake (XION)"}),(0,a.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,a.jsx)(r.XJ,{children:(0,v.HS)(B)})}),(0,a.jsx)(r.Bz,{children:(0,v.H_)((0,j.Jp)(B))}),(0,a.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,a.jsx)(b,{})})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(r.Bz,{children:"Commission Rate"}),(0,a.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,a.jsx)(r.XJ,{children:(0,v.i)(N.commission.commissionRates.rate,2)})}),(0,a.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,a.jsx)(b,{})})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(r.Bz,{children:"Voting Power"}),(0,a.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,a.jsx)(r.XJ,{children:y})}),(0,a.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,a.jsx)(b,{})})]}),(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(r.Bz,{children:"My Delegation (XION)"}),(0,a.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,a.jsx)(r.XJ,{children:S?(0,v.HS)(new t.Z((0,j.bI)(S).amount)):"-"})}),(0,a.jsx)(r.Bz,{children:(0,v.H_)(S)})]})]}),(0,a.jsx)(u,{}),(0,a.jsxs)("div",{className:"grid grid-cols-4",children:[(0,a.jsxs)("div",{className:"col-span-2",children:[(0,a.jsx)(r.Bz,{color:"text-white",children:"XION Address"}),(0,a.jsxs)("div",{className:"inline-flex flex-row gap-2 break-all",children:[N.operatorAddress," ",(0,a.jsx)(r.M5,{textToCopy:N.operatorAddress})]})]}),N.description.website&&(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Bz,{color:"text-white",children:"Website"}),(0,a.jsx)(d.default,{href:N.description.website,target:"_blank",children:N.description.website})]}),N.description.securityContact&&(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Bz,{color:"text-white",children:"Security Contact"}),(0,a.jsx)(d.default,{href:"mailto:".concat(N.description.securityContact),children:N.description.securityContact})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Bz,{color:"text-white",children:"Details"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:N.description.details}),(0,a.jsxs)("div",{children:["Max Commission Rate:"," ",(0,v.i)(N.commission.commissionRates.maxRate,0)]}),(0,a.jsxs)("div",{children:["Max commission Change Rate:"," ",(0,v.i)(N.commission.commissionRates.maxChangeRate,0)]})]})]})]}),(0,a.jsx)(k,{})]}),(0,a.jsx)(f.Z,{})]})}}},function(e){e.O(0,[350,218,147,228,933,115,245,82,98,971,69,744],function(){return e(e.s=90858)}),_N_E=e.O()}]);