(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{90858:function(e,t,n){Promise.resolve().then(n.bind(n,36827))},98909:function(e,t,n){"use strict";n.d(t,{Bz:function(){return d},Dx:function(){return a},M5:function(){return p},OL:function(){return u},Wz:function(){return h},XJ:function(){return c},hp:function(){return m},jr:function(){return x},ls:function(){return o},sr:function(){return j},zx:function(){return f}});var s=n(3827),i=n(8792),r=n(86123),l=n(77658);let a=e=>{let{children:t,className:n=""}=e;return(0,s.jsx)("div",{className:["typo-title",n].join(" "),children:t})},o=e=>{let{children:t,className:n=""}=e;return(0,s.jsx)("div",{className:["typo-hero",n].join(" "),children:t})},c=e=>{let{children:t,className:n=""}=e;return(0,s.jsx)("div",{className:["heading2",n].join(" "),children:t})},d=e=>{let{children:t,className:n="",color:i="text-typo-150"}=e;return(0,s.jsx)("div",{className:["heading8",i,n].join(" "),children:t})},x=e=>{let{children:t,className:n=""}=e;return(0,s.jsx)("div",{className:["typo-body-medium",n].join(" "),children:t})},u=e=>{let{children:t,href:n}=e;return(0,s.jsx)(i.default,{className:"text-left font-[14px] font-normal leading-[24px] underline",href:n,children:t})},m=e=>{let{className:t,...n}=e;return(0,s.jsx)("button",{...n,className:["button-pill",t].join(" ")})},p=e=>{let{textToCopy:t}=e;return(0,s.jsx)("button",{className:"cursor-pointer",dangerouslySetInnerHTML:{__html:l.BR},onClick:()=>{navigator.clipboard.writeText(t),(0,r.Am)("Copied to clipboard",{type:"info"})}})},h=e=>(0,s.jsxs)("span",{className:"relative block",children:[(0,s.jsx)("input",{...e,className:"h-[96px] w-full bg-black p-[16px] pl-[52px] focus:outline-none",style:{border:"1px solid white",borderRadius:"16px",fontSize:"48px"}}),(0,s.jsx)("span",{className:"absolute bottom-0 left-[12px] top-0 flex h-full items-center text-[24px] text-[48px]",children:"$"})]}),j=e=>(0,s.jsx)("input",{...e,className:"h-[50px] w-full bg-black py-[8px] focus:outline-none",style:{border:"none",borderBottom:"1px solid white"}}),f=e=>(0,s.jsx)("button",{...e,className:"w-full rounded-[8px] bg-white py-[16px] text-black"})},16273:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var s=n(3827),i=n(23234),r=n(64090),l=n(86123),a=n(98909),o=n(98245),c=n.n(o),d=n(77658);c().setAppElement(document.body);var x=e=>{let{children:t,...n}=e;return(0,s.jsx)(c(),{...n,style:{content:{background:"#000",border:"none",borderRadius:"48px",bottom:"auto",boxShadow:"0px 0px 50px 0px #FFFFFF40",left:"50%",opacity:.8,padding:"45px",right:"auto",top:"50%",transform:"translate(-50%, -50%)"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}},children:(0,s.jsxs)("div",{className:"relative w-full",children:[(0,s.jsx)("button",{className:"absolute right-[-16px] top-[-16px] w-[36px] cursor-pointer",dangerouslySetInnerHTML:{__html:d.kC},onClick:n.onRequestClose}),t]})})},u=n(88197),m=n(80469),p=n(62986),h=()=>{let e=(0,m.n)(),{client:t}=(0,i.Hj)(),[n,o]=(0,r.useState)("input"),[c,d]=(0,r.useState)(!1),{account:h,staking:j}=e,{modal:f}=j.state,v=(null==f?void 0:f.type)==="delegate";if((0,r.useEffect)(()=>()=>{o("input")},[v]),!v)return null;let{validator:g}=null==f?void 0:f.content;return(0,s.jsx)(x,{isOpen:v,onRequestClose:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"completed"===n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:"CONGRATS!"}),(0,s.jsxs)("div",{children:["You have successfully staked on ",g.description.moniker,". Thank you for contributing in securing the XION network."]}),(0,s.jsx)(a.zx,{onClick:()=>{e.staking.dispatch((0,p.ZG)(null))},children:"Awesome"})]}):(0,s.jsxs)("div",{className:"min-w-[390px]",children:[(0,s.jsx)("div",{className:"text-center uppercase",children:(0,s.jsxs)(a.ls,{children:["Delegate To ",g.description.moniker]})}),(0,s.jsxs)("div",{className:"mt-[40px] flex w-full flex-col items-center justify-center gap-[12px] uppercase",children:[(0,s.jsx)(a.Bz,{children:"Available for delegation"}),(0,s.jsx)(a.XJ,{children:"$240.00"}),(0,s.jsx)(a.Bz,{children:"24 XION"})]}),(0,s.jsxs)("div",{className:"mt-[40px] flex w-full flex-row justify-between",children:[(0,s.jsx)("div",{children:"Amount"}),(0,s.jsx)(a.Bz,{children:"=24 XION"})]}),(0,s.jsx)("div",{className:"mt-[8px]",children:(0,s.jsx)(a.Wz,{})}),(0,s.jsx)("div",{className:"mt-[40px] w-full",children:(0,s.jsx)(a.sr,{placeholder:"Memo (Optional)"})}),(0,s.jsx)("div",{className:"mt-[48px] w-full",children:(0,s.jsx)(a.zx,{disabled:c,onClick:()=>{if(!t)return;d(!0);let e={delegator:h.bech32Address,validator:g.operatorAddress};(0,u._5)(e,t,j).then(()=>{(0,l.Am)("Staking successful",{type:"success"})}).catch(()=>{(0,l.Am)("Staking error",{type:"error"})}).finally(()=>{d(!1)})},children:"Delegate Now"})})]})})},j=()=>(0,s.jsx)(h,{})},36827:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(3827),i=n(23234),r=n(59115),l=n(22840),a=n(8792),o=n(15313),c=n(64090),d=n(98909),x=n(88197),u=n(80469),m=n(62986),p=n(39730),h=n(89056),j=n(66803),f=n(9016),v=n(67497);let g=()=>(0,s.jsx)("div",{className:"h-[1px] w-full bg-bg-400"}),b=()=>(0,s.jsx)("div",{className:"h-full w-[1px] bg-bg-400"});var N=n(16273);function w(){let e=(0,o.useSearchParams)().get("address"),t=(0,u.n)(),[n,w]=(0,c.useState)(null),{client:k}=(0,i.Hj)(),y=(0,h.P)(null==n?void 0:n.description.identity);if((0,c.useEffect)(()=>{(async()=>{e&&w(await (0,x.qp)(e,t.staking))})()},[e,t]),!n)return(0,s.jsx)("div",{children:"Loading ..."});let C=(0,p.Sg)(n.tokens,t.staking.state),z=(0,v.gg)(C),A=new l.Z(n.tokens).div(new l.Z(10).pow(6)),S=(0,p.ap)(t.staking.state),B=(0,p.L2)(n.operatorAddress,t.staking.state),I=(0,p.Cn)(n.operatorAddress,t.staking.state);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"page-container flex w-full flex-col gap-[16px] px-[16px]",children:[(0,s.jsxs)("div",{className:"mb-[32px] mt-[40px]",children:[(0,s.jsx)(d.OL,{href:"/",children:"STAKING"})," ","> ",(0,s.jsx)("span",{children:n.description.moniker})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-[24px] p-[24px]",style:{backgroundImage:"url(".concat(f.sb,"/overview-bg.png)"),backgroundSize:"cover",borderRadius:16},children:[(0,s.jsxs)("div",{className:"flex flex-row items-center gap-[16px]",children:[(0,s.jsx)("img",{alt:"Validator logo",className:"block w-[80px] rounded-full",src:y||f.c1}),(0,s.jsx)("div",{className:"flex flex-1 items-center gap-[16px]",children:(0,s.jsx)("div",{className:"typo-validator-name",children:n.description.moniker||""})}),(0,s.jsx)("div",{children:(0,s.jsx)(r.z,{disabled:!t.isConnected,onClick:()=>{t.staking.dispatch((0,m.ZG)({content:{validator:n},type:"delegate"}))},children:"DELEGATE NOW"})})]}),(0,s.jsx)(g,{}),(0,s.jsxs)("div",{className:"grid grid-cols-4",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Bz,{children:"Total Stake (XION)"}),(0,s.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,s.jsx)(d.XJ,{children:(0,v.HS)(A)})}),(0,s.jsx)(d.Bz,{children:(0,v.H_)((0,j.Jp)(A))}),(0,s.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,s.jsx)(b,{})})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Bz,{children:"Commission Rate"}),(0,s.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,s.jsx)(d.XJ,{children:(0,v.i)(n.commission.commissionRates.rate,2)})}),(0,s.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,s.jsx)(b,{})})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Bz,{children:"Voting Power"}),(0,s.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,s.jsx)(d.XJ,{children:z})}),(0,s.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,s.jsx)(b,{})})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Bz,{children:"My Delegation (XION)"}),(0,s.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,s.jsx)(d.XJ,{children:(0,v.HS)(B)})}),(0,s.jsx)(d.Bz,{children:(0,v.H_)((0,j.Jp)(B))})]})]}),(0,s.jsx)(g,{}),(0,s.jsxs)("div",{className:"grid grid-cols-4",children:[(0,s.jsxs)("div",{className:"col-span-2",children:[(0,s.jsx)(d.Bz,{color:"text-white",children:"XION Address"}),(0,s.jsxs)("div",{className:"inline-flex flex-row gap-2 break-all",children:[n.operatorAddress," ",(0,s.jsx)(d.M5,{textToCopy:n.operatorAddress})]})]}),n.description.website&&(0,s.jsxs)("div",{children:[(0,s.jsx)(d.Bz,{color:"text-white",children:"Website"}),(0,s.jsx)(a.default,{href:n.description.website,target:"_blank",children:n.description.website})]}),n.description.securityContact&&(0,s.jsxs)("div",{children:[(0,s.jsx)(d.Bz,{color:"text-white",children:"Security Contact"}),(0,s.jsx)(a.default,{href:"mailto:".concat(n.description.securityContact),children:n.description.securityContact})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(d.Bz,{color:"text-white",children:"Details"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:n.description.details}),(0,s.jsxs)("div",{children:["Max Commission Rate:"," ",(0,v.i)(n.commission.commissionRates.maxRate,0)]}),(0,s.jsxs)("div",{children:["Max commission Change Rate:"," ",(0,v.i)(n.commission.commissionRates.maxChangeRate,0)]})]})]})]}),(0,s.jsx)("div",{className:"mb-[24px] mt-[32px]",children:(0,s.jsx)(d.Dx,{children:"My Delegations"})}),(0,s.jsxs)("div",{className:"grid grid-cols-4 rounded-[24px] bg-bg-600 p-[24px]",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Bz,{children:"Claimable Rewards"}),(0,s.jsxs)("div",{className:"mb-[8px] mt-[12px] flex flex-row items-center gap-[8px]",children:[(0,s.jsx)(d.XJ,{children:(0,v.H_)(I)}),I&&(null==I?void 0:I.amount)!=="0"&&(0,s.jsx)(d.hp,{onClick:()=>{if(!k)return;let e={delegator:t.account.bech32Address,validator:n.operatorAddress};(0,x.sT)(e,k,t.staking)},children:"Claim"})]}),(0,s.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,s.jsx)(b,{})})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(d.Bz,{children:"My Delegation (XION)"}),(0,s.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,s.jsx)(d.XJ,{children:(0,v.HS)(B)})}),(0,s.jsx)(d.Bz,{children:(0,v.H_)((0,j.Jp)(B))}),(0,s.jsx)("div",{className:"absolute bottom-0 right-[20px] top-0",children:(0,s.jsx)(b,{})})]}),(0,s.jsxs)("div",{className:"col-span-2 flex flex-row gap-[16px]",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d.Bz,{children:"Available For Delegation (XION)"}),(0,s.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,s.jsx)(d.XJ,{children:S?(0,v.HS)(S):"-"})}),(0,s.jsx)(d.Bz,{children:S?(0,v.H_)((0,j.Jp)(S)):"-"})]}),(0,s.jsxs)("div",{className:"flex h-full flex-row items-end gap-[16px]",children:[(0,s.jsx)("div",{children:(0,s.jsx)(r.z,{disabled:!t.isConnected,children:"Delegate"})}),(0,s.jsx)("div",{children:(0,s.jsx)(r.z,{disabled:!t.isConnected,onClick:()=>{if(!k)return;let e={delegator:t.account.bech32Address,validator:n.operatorAddress};(0,x.xu)(e,k,t.staking)},children:"Unstake"})})]})]})]})]}),(0,s.jsx)(N.Z,{})]})}},39730:function(e,t,n){"use strict";n.d(t,{Cn:function(){return l},Hg:function(){return o},L2:function(){return c},Sg:function(){return d},U2:function(){return r},ap:function(){return a}});var s=n(22840),i=n(66803);let r=e=>{let{delegations:t}=e;if(!(null==t?void 0:t.items.length))return null;let n=t.items.map(e=>e.balance);return(0,i.HJ)(n)},l=(e,t)=>{let{delegations:n}=t;if(!(null==n?void 0:n.items.length))return null;let s=n.items.filter(t=>!e||t.validatorAddress===e).map(e=>e.rewards);return(0,i.HJ)(s)},a=e=>{let{tokens:t}=e;return t?new s.Z((0,i.bI)(t).amount):null},o=(e,t)=>{var n;return!!(null===(n=t.delegations)||void 0===n?void 0:n.items.some(t=>t.validatorAddress===e))},c=(e,t)=>{var n;let r=null===(n=t.delegations)||void 0===n?void 0:n.items.filter(t=>t.validatorAddress===e);if(!(null==r?void 0:r.length))return new s.Z(0);let l=(0,i.HJ)(r.map(e=>e.balance));return new s.Z(l.amount)},d=(e,t)=>{let{pool:n}=t;return e&&"string"==typeof(null==n?void 0:n.bondedTokens)?new s.Z(e).div(new s.Z(n.bondedTokens)).toNumber():null}},89056:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});var s=n(64090),i=n(9016);let r={},l={getIdentityLogo:e=>{if(r[e])return r[e];let t=fetch("https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=".concat(e)).then(e=>e.json()).then(e=>{var t,n,s,i;return(null==e?void 0:null===(i=e.them)||void 0===i?void 0:null===(s=i[0])||void 0===s?void 0:null===(n=s.pictures)||void 0===n?void 0:null===(t=n.primary)||void 0===t?void 0:t.url)||null}).catch(()=>null);return r[e]=t,t}},a=e=>{let[t,n]=(0,s.useState)(null);return(0,s.useEffect)(()=>{(async()=>{e&&n(await l.getIdentityLogo(e))})()},[e]),t||i.c1}},67497:function(e,t,n){"use strict";n.d(t,{Em:function(){return l},HS:function(){return o},H_:function(){return d},gg:function(){return a},i:function(){return c}});var s=n(22840),i=n(66803),r=n(9016);let l=(e,t)=>{let n=(0,i.bI)(e),r=new s.Z(n.amount);if(r.eq(0))return"".concat(r.toFormat()," ").concat(n.denom);if(r.lt(1e-4))return"<".concat(1e-4," ").concat(n.denom);if(t){let e=Intl.NumberFormat("en",{notation:"compact"});return"".concat(e.format(r.toNumber())," ").concat(n.denom)}return"".concat(r.toFormat(4)," ").concat(n.denom)},a=e=>{if("number"!=typeof e||Number.isNaN(e))return null;let t=e<1e-4?"<0.1":(100*e).toFixed(1);return"".concat(t,"%")},o=e=>Intl.NumberFormat("en",{notation:"compact"}).format(e.toNumber()),c=(e,t)=>{let n=new s.Z(e).div(new s.Z(10).pow(18)).toNumber();return"".concat((100*n).toFixed(t),"%")},d=(e,t)=>{let n=(0,i.bI)(e||(0,i.IB)()),l=new s.Z(e?n.amount:0).times(r.Ex);return"$".concat(t?o(l):l.toFormat(2))}}},function(e){e.O(0,[350,218,147,228,933,115,245,82,971,69,744],function(){return e(e.s=90858)}),_N_E=e.O()}]);