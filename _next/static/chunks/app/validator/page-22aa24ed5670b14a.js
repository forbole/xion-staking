(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[276],{90858:function(e,n,t){Promise.resolve().then(t.bind(t,36827))},98909:function(e,n,t){"use strict";t.d(n,{Bz:function(){return a},Dx:function(){return d},M5:function(){return h},OL:function(){return x},XJ:function(){return o},hp:function(){return m},jr:function(){return u},ls:function(){return c}});var i=t(3827),s=t(8792),r=t(86123),l=t(77658);let d=e=>{let{children:n,className:t=""}=e;return(0,i.jsx)("div",{className:["typo-title",t].join(" "),children:n})},c=e=>{let{children:n,className:t=""}=e;return(0,i.jsx)("div",{className:["typo-hero",t].join(" "),children:n})},o=e=>{let{children:n,className:t=""}=e;return(0,i.jsx)("div",{className:["heading2",t].join(" "),children:n})},a=e=>{let{children:n,className:t="",color:s="text-typo-150"}=e;return(0,i.jsx)("div",{className:["heading8",s,t].join(" "),children:n})},u=e=>{let{children:n,className:t=""}=e;return(0,i.jsx)("div",{className:["typo-body-medium",t].join(" "),children:n})},x=e=>{let{children:n,href:t}=e;return(0,i.jsx)(s.default,{className:"text-left font-[14px] font-normal leading-[24px] underline",href:t,children:n})},m=e=>{let{className:n,...t}=e;return(0,i.jsx)("button",{...t,className:["button-pill",n].join(" ")})},h=e=>{let{textToCopy:n}=e;return(0,i.jsx)("button",{className:"cursor-pointer",dangerouslySetInnerHTML:{__html:l.BR},onClick:()=>{navigator.clipboard.writeText(n),(0,r.Am)("Copied to clipboard",{type:"info"})}})}},16273:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var i=t(3827),s=t(59115),r=t(64090),l=t(98245),d=t.n(l);d().setAppElement(document.body);var c=e=>(0,i.jsx)(d(),{...e,style:{content:{background:"#000",bottom:"auto",left:"50%",opacity:.8,right:"auto",top:"50%",transform:"translate(-50%, -50%)"}}}),o=t(80469),a=t(62986),u=()=>{let e=(0,o.n)(),[n,t]=(0,r.useState)("input"),l="delegate"===e.staking.state.modalOpened;if((0,r.useEffect)(()=>()=>{t("input")},[l]),!l)return null;let d="ValidatorName";return(0,i.jsx)(c,{isOpen:l,onRequestClose:()=>{e.staking.dispatch((0,a.ZG)(null))},children:"completed"===n?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{children:"CONGRATS!"}),(0,i.jsxs)("div",{children:["You have successfully staked on ",d,". Thank you for contributing in securing the XION network."]}),(0,i.jsx)(s.z,{onClick:()=>{e.staking.dispatch((0,a.ZG)(null))},children:"Awesome"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"uppercase",children:["Delegate To ",d]}),(0,i.jsx)("div",{className:"uppercase",children:"Available for delegation"}),(0,i.jsx)("div",{children:"$240.00"}),(0,i.jsx)("div",{children:"24 XION"}),(0,i.jsx)("div",{children:"Amount"}),(0,i.jsx)("div",{children:(0,i.jsx)("input",{})}),(0,i.jsx)("div",{children:"Memo (Optional)"}),(0,i.jsx)("div",{children:(0,i.jsx)("input",{})}),(0,i.jsx)("div",{children:(0,i.jsx)(s.z,{children:"Delegate Now"})})]})})},x=()=>(0,i.jsx)(u,{})},36827:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var i=t(3827),s=t(23234),r=t(59115),l=t(22840),d=t(8792),c=t(15313),o=t(64090),a=t(98909),u=t(88197),x=t(80469),m=t(62986),h=t(39730),p=t(89056),j=t(66803),v=t(9016),f=t(67497);let g=()=>(0,i.jsx)("div",{className:"h-[1px] w-full bg-bg-400"});var b=t(16273);function N(){let e=(0,c.useSearchParams)().get("address"),n=(0,x.n)(),[t,N]=(0,o.useState)(null),{client:k}=(0,s.Hj)(),w=(0,p.P)(null==t?void 0:t.description.identity);if((0,o.useEffect)(()=>{(async()=>{e&&N(await (0,u.qp)(e,n.staking))})()},[e,n]),!t)return(0,i.jsx)("div",{children:"Loading ..."});let y=(0,h.Sg)(t.tokens,n.staking.state),C=(0,f.gg)(y),z=new l.Z(t.tokens).div(new l.Z(10).pow(6)),A=(0,h.ap)(n.staking.state),B=(0,h.L2)(t.operatorAddress,n.staking.state),I=(0,h.Cn)(t.operatorAddress,n.staking.state);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"page-container flex w-full flex-col gap-[16px] px-[16px]",children:[(0,i.jsxs)("div",{className:"mb-[32px] mt-[40px]",children:[(0,i.jsx)(a.OL,{href:"/",children:"STAKING"})," ","> ",(0,i.jsx)("span",{children:t.description.moniker})]}),(0,i.jsxs)("div",{className:"flex flex-col gap-[24px] p-[24px]",style:{backgroundImage:"url(/overview-bg.png)",backgroundSize:"cover",borderRadius:16},children:[(0,i.jsxs)("div",{className:"flex flex-row items-center gap-[16px]",children:[(0,i.jsx)("img",{alt:"Validator logo",className:"block w-[80px] rounded-full",src:w||v.c1}),(0,i.jsx)("div",{className:"flex flex-1 items-center gap-[16px]",children:(0,i.jsx)("div",{className:"typo-validator-name",children:t.description.moniker||""})}),(0,i.jsx)("div",{children:(0,i.jsx)(r.z,{disabled:!n.isConnected,onClick:()=>{n.staking.dispatch((0,m.ZG)("delegate"))},children:"DELEGATE NOW"})})]}),(0,i.jsx)(g,{}),(0,i.jsxs)("div",{className:"grid grid-cols-4",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{children:"Total Stake (XION)"}),(0,i.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,i.jsx)(a.XJ,{children:(0,f.HS)(z)})}),(0,i.jsx)(a.Bz,{children:(0,f.H_)((0,j.Jp)(z))})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{children:"Comminssion Rate"}),(0,i.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,i.jsx)(a.XJ,{children:(0,f.i)(t.commission.commissionRates.rate,2)})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{children:"Voting Power"}),(0,i.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,i.jsx)(a.XJ,{children:C})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{children:"My Delegation (XION)"}),(0,i.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,i.jsx)(a.XJ,{children:(0,f.HS)(B)})}),(0,i.jsx)(a.Bz,{children:(0,f.H_)((0,j.Jp)(B))})]})]}),(0,i.jsx)(g,{}),(0,i.jsxs)("div",{className:"grid grid-cols-4",children:[(0,i.jsxs)("div",{className:"col-span-2",children:[(0,i.jsx)(a.Bz,{color:"text-white",children:"XION Address"}),(0,i.jsxs)("div",{className:"inline-flex flex-row gap-2 break-all",children:[t.operatorAddress," ",(0,i.jsx)(a.M5,{textToCopy:t.operatorAddress})]})]}),t.description.website&&(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{color:"text-white",children:"Website"}),(0,i.jsx)(d.default,{href:t.description.website,target:"_blank",children:t.description.website})]}),t.description.securityContact&&(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{color:"text-white",children:"Security Contact"}),(0,i.jsx)(d.default,{href:"mailto:".concat(t.description.securityContact),children:t.description.securityContact})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{color:"text-white",children:"Details"}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:t.description.details}),(0,i.jsxs)("div",{children:["Max Commission Rate:"," ",(0,f.i)(t.commission.commissionRates.maxRate,0)]}),(0,i.jsxs)("div",{children:["Max commission Change Rate:"," ",(0,f.i)(t.commission.commissionRates.maxChangeRate,0)]})]})]})]}),(0,i.jsx)("div",{className:"mb-[24px] mt-[32px]",children:(0,i.jsx)(a.Dx,{children:"My Delegations"})}),(0,i.jsxs)("div",{className:"grid grid-cols-4 rounded-[24px] bg-bg-600 p-[24px]",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{children:"Claimable Rewards"}),(0,i.jsxs)("div",{className:"mb-[8px] mt-[12px] flex flex-row items-center gap-[8px]",children:[(0,i.jsx)(a.XJ,{children:(0,f.H_)(I)}),I&&(null==I?void 0:I.amount)!=="0"&&(0,i.jsx)(a.hp,{onClick:()=>{if(!k)return;let e={delegator:n.account.bech32Address,validator:t.operatorAddress};(0,u.sT)(e,k,n.staking)},children:"Claim"})]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{children:"My Delegation (XION)"}),(0,i.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,i.jsx)(a.XJ,{children:(0,f.HS)(B)})}),(0,i.jsx)(a.Bz,{children:(0,f.H_)((0,j.Jp)(B))})]}),(0,i.jsxs)("div",{className:"col-span-2 flex flex-row gap-[16px]",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(a.Bz,{children:"Available For Delegation (XION)"}),(0,i.jsx)("div",{className:"mb-[8px] mt-[12px]",children:(0,i.jsx)(a.XJ,{children:A?(0,f.HS)(A):"-"})}),(0,i.jsx)(a.Bz,{children:A?(0,f.H_)((0,j.Jp)(A)):"-"})]}),(0,i.jsxs)("div",{className:"flex h-full flex-row items-end gap-[16px]",children:[(0,i.jsx)("div",{children:(0,i.jsx)(r.z,{disabled:!n.isConnected,children:"Delegate"})}),(0,i.jsx)("div",{children:(0,i.jsx)(r.z,{disabled:!n.isConnected,onClick:()=>{if(!k)return;let e={delegator:n.account.bech32Address,validator:t.operatorAddress};(0,u.xu)(e,k,n.staking)},children:"Unstake"})})]})]})]})]}),(0,i.jsx)(b.Z,{})]})}},39730:function(e,n,t){"use strict";t.d(n,{Cn:function(){return l},Hg:function(){return c},L2:function(){return o},Sg:function(){return a},U2:function(){return r},ap:function(){return d}});var i=t(22840),s=t(66803);let r=e=>{let{delegations:n}=e;if(!(null==n?void 0:n.items.length))return null;let t=n.items.map(e=>e.balance);return(0,s.HJ)(t)},l=(e,n)=>{let{delegations:t}=n;if(!(null==t?void 0:t.items.length))return null;let i=t.items.filter(n=>!e||n.validatorAddress===e).map(e=>e.rewards);return(0,s.HJ)(i)},d=e=>{let{tokens:n}=e;return n?new i.Z((0,s.bI)(n).amount):null},c=(e,n)=>{var t;return!!(null===(t=n.delegations)||void 0===t?void 0:t.items.some(n=>n.validatorAddress===e))},o=(e,n)=>{var t;let r=null===(t=n.delegations)||void 0===t?void 0:t.items.filter(n=>n.validatorAddress===e);if(!(null==r?void 0:r.length))return new i.Z(0);let l=(0,s.HJ)(r.map(e=>e.balance));return new i.Z(l.amount)},a=(e,n)=>{let{pool:t}=n;return e&&"string"==typeof(null==t?void 0:t.bondedTokens)?new i.Z(e).div(new i.Z(t.bondedTokens)).toNumber():null}},89056:function(e,n,t){"use strict";t.d(n,{P:function(){return d}});var i=t(64090),s=t(9016);let r={},l={getIdentityLogo:e=>{if(r[e])return r[e];let n=fetch("https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=".concat(e)).then(e=>e.json()).then(e=>{var n,t,i,s;return(null==e?void 0:null===(s=e.them)||void 0===s?void 0:null===(i=s[0])||void 0===i?void 0:null===(t=i.pictures)||void 0===t?void 0:null===(n=t.primary)||void 0===n?void 0:n.url)||null}).catch(()=>null);return r[e]=n,n}},d=e=>{let[n,t]=(0,i.useState)(null);return(0,i.useEffect)(()=>{(async()=>{e&&t(await l.getIdentityLogo(e))})()},[e]),n||s.c1}},67497:function(e,n,t){"use strict";t.d(n,{Em:function(){return l},HS:function(){return c},H_:function(){return a},gg:function(){return d},i:function(){return o}});var i=t(22840),s=t(66803),r=t(9016);let l=(e,n)=>{let t=(0,s.bI)(e),r=new i.Z(t.amount);if(r.eq(0))return"".concat(r.toFormat()," ").concat(t.denom);if(r.lt(1e-4))return"<".concat(1e-4," ").concat(t.denom);if(n){let e=Intl.NumberFormat("en",{notation:"compact"});return"".concat(e.format(r.toNumber())," ").concat(t.denom)}return"".concat(r.toFormat(4)," ").concat(t.denom)},d=e=>{if("number"!=typeof e||Number.isNaN(e))return null;let n=e<1e-4?"<0.1":(100*e).toFixed(1);return"".concat(n,"%")},c=e=>Intl.NumberFormat("en",{notation:"compact"}).format(e.toNumber()),o=(e,n)=>{let t=new i.Z(e).div(new i.Z(10).pow(18)).toNumber();return"".concat((100*t).toFixed(n),"%")},a=(e,n)=>{let t=(0,s.bI)(e||(0,s.IB)()),l=new i.Z(e?t.amount:0).times(r.Ex);return"$".concat(n?c(l):l.toFormat(2))}}},function(e){e.O(0,[350,218,147,228,933,115,245,82,971,69,744],function(){return e(e.s=90858)}),_N_E=e.O()}]);