(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{67617:function(e,s,t){Promise.resolve().then(t.bind(t,99378))},99378:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return S}});var i=t(3827),l=t(64090),r=t(98909),n=t(40184),a=t(23234),c=t(80469),o=t(39730),d=t(66803),x=t(9016),m=t(19807),p=t(67497),h=(0,l.memo)(()=>{let{isConnected:e}=(0,a.hT)(),{staking:s}=(0,c.n)();if(!e)return(0,i.jsxs)("div",{className:"flex min-h-[212px] flex-col items-center justify-center gap-[32px] uppercase",style:{backgroundImage:"url(".concat(x.sb,"/overview-bg.png)"),borderRadius:24},children:[(0,i.jsx)(r.ls,{children:"Please Log In To View"}),(0,i.jsx)("div",{children:"Log In"})]});let t=(0,o.U2)(s.state,null)||(0,d.IB)(),l=(0,o.Cn)(null,s.state)||(0,d.IB)(),n=s.state.tokens||(0,d.IB)();return(0,i.jsxs)("div",{className:"grid min-h-[144px] flex-col items-center justify-center gap-[32px]",style:{backgroundImage:"url(".concat(x.sb,"/overview-bg.png)"),borderRadius:24,gridTemplateColumns:"1fr 1fr 1fr 1fr"},children:[(0,i.jsxs)("div",{className:"flex h-full flex-col items-start gap-3 p-[24px]",children:[(0,i.jsx)(r.Bz,{children:"Claimable Rewards"}),(0,i.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,i.jsx)(r.XJ,{children:(0,p.H_)(l)}),(0,m.sj)(l)&&(0,i.jsx)(r.hp,{children:"Claim"})]}),(0,i.jsx)(r.jr,{children:(0,p.Em)(l)})]}),(0,i.jsxs)("div",{className:"flex h-full flex-col items-start gap-3 p-[24px]",children:[(0,i.jsx)(r.Bz,{children:"APR"}),(0,i.jsx)(r.XJ,{children:"15.57%"})]}),(0,i.jsxs)("div",{className:"flex h-full flex-col items-start gap-3 p-[24px]",children:[(0,i.jsx)(r.Bz,{children:"Delegated Amount"}),(0,i.jsx)(r.XJ,{children:(0,p.H_)(t)}),(0,i.jsx)(r.jr,{children:(0,p.Em)(t)})]}),(0,i.jsxs)("div",{className:"flex h-full flex-col items-start gap-3 p-[24px]",children:[(0,i.jsx)(r.Bz,{children:"Available For Delegation"}),(0,i.jsx)(r.XJ,{children:(0,p.H_)(n)}),(0,i.jsx)(r.jr,{children:(0,p.Em)(n)})]})]})}),u=t(22840),g=t(62986),j=t(89056),f=t(77658),v=t(86123),N=e=>{let{address:s}=e;if(!s)return null;let t=[s.slice(0,5),s.slice(s.length-5)].join("...");return(0,i.jsx)("button",{className:"cursor-pointer text-left text-[12px] font-normal leading-[20px] text-typo-200",onClick:()=>{navigator.clipboard.writeText(s),(0,v.Am)("Copied to clipboard",{type:"info"})},children:t})},b=e=>{let{text:s}=e,[t,l]=s.split(" ");return(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{children:t})," ",(0,i.jsx)("span",{className:"text-typo-200",children:l})]})};let w={gap:"16px",gridTemplateColumns:"60px 1.5fr repeat(3, 1fr) 80px 80px"},k=e=>{let{disabled:s,onStake:t,staking:l,validator:n}=e,{identity:a}=n.description,c=(0,j.P)(a),x=(0,o.Sg)(null==n?void 0:n.tokens,l.state),m=(0,p.gg)(x);return(0,i.jsxs)("div",{className:"flex w-full flex-col items-center justify-between gap-2",children:[(0,i.jsxs)("div",{className:"grid w-full items-center justify-between gap-2 p-4",style:w,children:[(0,i.jsx)("div",{className:"flex items-center justify-start",children:(0,i.jsx)("img",{alt:"Validator logo",className:"block w-[50px] rounded-full",src:c,style:{height:50,width:50}})}),(0,i.jsxs)("div",{className:"flex flex-1 flex-row justify-start gap-4",children:[(0,i.jsxs)("div",{className:"flex flex-col justify-start gap-2 text-left",children:[(0,i.jsx)("div",{className:"text-[14px] font-bold leading-[20px]",children:n.description.moniker}),(0,i.jsx)(N,{address:n.operatorAddress})]}),(0,i.jsx)("div",{className:"flex min-w-max flex-col items-center justify-center",children:(0,o.Hg)(n.operatorAddress,l.state)&&(0,i.jsx)("div",{className:"rounded-[2px] bg-successBg p-[2px] text-[11px] font-medium leading-[16px] tracking-normal text-success",children:"You staked"})})]}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(b,{text:(0,p.Em)((0,d.kw)(new u.Z(n.tokens)),!0)})}),(0,i.jsx)("div",{className:"text-right",children:(0,p.i)(n.commission.commissionRates.rate,2)}),x&&(0,i.jsx)("div",{className:"text-right",children:m}),(0,i.jsx)("div",{className:"text-right",children:(0,i.jsx)(r.OL,{href:"/validator?address=".concat(n.operatorAddress),children:"Details"})}),(0,i.jsx)("div",{children:(0,i.jsx)(r.hp,{disabled:s,onClick:t,children:"Delegate"})})]}),(0,i.jsx)("div",{className:"box-content h-[1px] bg-bg-500",style:{width:"calc(100% - 48px)"}})]})},y=e=>{let{children:s,onSort:t,sort:l,sorting:r}=e,n=(r||[]).concat(["none"]),a=n.indexOf(l);return(0,i.jsx)("div",{className:"text-[14px] font-normal leading-[14px] tracking-wider",children:(0,i.jsxs)("span",{className:"relative",children:[s," ",!!t&&(0,i.jsx)("button",{className:"absolute right-[-16px] top-[6px] cursor-pointer",dangerouslySetInnerHTML:{__html:f.Sf},onClick:()=>{if(!t)return;let e=(1+n.indexOf(l))%n.length,s=n[e];null==t||t(s)},style:{rotate:0===a?"180deg":1===a?"0deg":"90deg"}})]})})};var C=()=>{let{staking:e}=(0,c.n)(),[s,t]=(0,l.useState)("none"),{validators:r}=e.state;if(!(null==r?void 0:r.items.length))return null;let n=r.items.slice().sort((t,i)=>{if("none"===s)return 0;if(["voting-power-asc","voting-power-desc"].includes(s)){let l=(0,o.Sg)(t.tokens,e.state),r=(0,o.Sg)(i.tokens,e.state);return l&&r?"voting-power-asc"===s?l-r:r-l:0}if(["commission-asc","commission-desc"].includes(s)){let e=parseFloat(t.commission.commissionRates.rate),l=parseFloat(i.commission.commissionRates.rate);return e&&l?"commission-asc"===s?e-l:l-e:0}if(["name-asc","name-desc"].includes(s)){let e=t.description.moniker.toLowerCase(),l=i.description.moniker.toLowerCase();return e&&l?"name-asc"===s?e.localeCompare(l):l.localeCompare(e):0}if(["staked-asc","staked-desc"].includes(s)){let e=new u.Z(t.tokens),l=new u.Z(i.tokens);return"staked-asc"===s?e.minus(l).toNumber():l.minus(e).toNumber()}return 0});return(0,i.jsxs)("div",{className:"overflow-hidden rounded-[24px] bg-bg-600 pb-4 text-typo-100",children:[(0,i.jsxs)("div",{className:"grid w-full items-center justify-between gap-2 bg-bg-500 p-4 uppercase",style:w,children:[(0,i.jsx)("div",{}),(0,i.jsx)(y,{onSort:t,sort:s,sorting:["name-asc","name-desc"],children:"Validator"}),(0,i.jsx)(y,{onSort:t,sort:s,sorting:["staked-asc","staked-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Staked Amount"})}),(0,i.jsx)(y,{onSort:t,sort:s,sorting:["commission-asc","commission-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Commission"})}),(0,i.jsx)(y,{onSort:t,sort:s,sorting:["voting-power-asc","voting-power-desc"],children:(0,i.jsx)("div",{className:"text-right",children:"Voting Power"})})]}),n.map(s=>(0,i.jsx)(k,{onStake:()=>{e.dispatch((0,g.ZG)({content:{validator:s},type:"delegate"}))},staking:e,validator:s},s.operatorAddress))]})},S=(0,l.memo)(function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"page-container flex flex-col gap-6 px-[24px] pb-[24px]",children:[(0,i.jsx)("div",{className:"mt-[40px] text-left",children:(0,i.jsx)(r.Dx,{children:"Your Staking Overview"})}),(0,i.jsx)(h,{}),(0,i.jsx)(r.Dx,{children:"Validators"}),(0,i.jsx)(C,{})]}),(0,i.jsx)(n.Z,{})]})})}},function(e){e.O(0,[350,218,147,228,933,115,245,82,436,971,69,744],function(){return e(e.s=67617)}),_N_E=e.O()}]);