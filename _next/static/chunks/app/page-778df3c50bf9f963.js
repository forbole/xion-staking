(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{67617:function(e,t,r){Promise.resolve().then(r.bind(r,30014))},30014:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(3827),i=r(52674),s=r(59115),d=r(8792),l=r(64090),o=r(86123),a=r(94108),c=r(80469),u=r(39730),h=r(9016),v=r(67497),x=r(61947),m=r(18722),f=()=>{let[e,t]=(0,l.useState)(null);return((0,l.useEffect)(()=>{(async()=>{var e;let r=localStorage.getItem("xion-authz-temp-account");if(!r)return;let n=await m.DirectSecp256k1HdWallet.deserialize(r,"abstraxion"),i=await n.getAccounts(),s=null==i?void 0:null===(e=i[0])||void 0===e?void 0:e.address;s&&t(s)})()},[]),e)?(0,n.jsx)(d.default,{href:"https://explorer.burnt.com/".concat(h.Bv,"/account/").concat(e),target:"_blank",children:(0,n.jsx)(s.z,{onClick:()=>{},children:"DEBUG ACCOUNT"})}):null};let j=e=>{let{disabled:t,onStake:r,validator:i}=e,{website:o}=i.description,[a,c]=(0,l.useState)(null),{identity:u}=i.description;return(0,l.useEffect)(()=>{(async()=>{u&&c(await x.x.getIdentityLogo(u))})()},[u]),(0,n.jsxs)("div",{style:{border:"solid 1px white",marginBottom:10},children:[a&&(0,n.jsx)("div",{children:(0,n.jsx)("img",{alt:"Validator logo",src:a,style:{height:50,width:50}})}),(0,n.jsxs)(d.default,{href:"/validator?address=".concat(i.operatorAddress),children:[(0,n.jsx)("div",{children:(0,n.jsx)("b",{children:i.description.moniker})}),(0,n.jsx)("div",{children:i.operatorAddress})]}),(0,n.jsx)("div",{children:(0,n.jsx)(s.z,{disabled:t,onClick:r,structure:"naked",children:"Stake here"})}),o&&(0,n.jsx)("div",{children:(0,n.jsx)(d.default,{href:o,target:"_blank",children:o})})]})};var p=(0,l.memo)(function(){let{account:e,staking:t}=(0,c.n)(),[r,x]=(0,l.useState)(!1),{delegations:m,isInfoLoading:p,tokens:g,unbondings:b,validators:k}=t.state,{client:A}=(0,i.Hj)(),[,y]=(0,i.dd)(),w=(0,l.useMemo)(()=>(null==k?void 0:k.items.reduce((e,t)=>(e[t.operatorAddress]=t,e),{}))||{},[k]),C=(0,u.U)(t.state);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("div",{children:"Account"}),(0,n.jsx)("div",{children:(0,n.jsx)("b",{children:e.bech32Address})}),(0,n.jsx)("div",{children:(0,n.jsx)(s.z,{onClick:()=>{y(!0)},children:"Open Settings"})}),g&&(0,n.jsxs)("div",{children:["Tokens: ",(0,n.jsx)("b",{children:(0,v.Em)(g)})]}),C&&(0,n.jsxs)("div",{children:["Total delegation: ",(0,n.jsx)("b",{children:(0,v.Em)(C)})]})]}),p&&(0,n.jsx)("div",{children:"Loading ..."}),!!(null==m?void 0:m.items.length)&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Delegations:"}),m.items.map(i=>{let d=w[i.validatorAddress],l=null==d?void 0:d.description.moniker;return(0,n.jsxs)("div",{style:{border:"1px solid #fff",marginBottom:20},children:[(0,n.jsxs)("div",{children:["Delegated: ",(0,v.Em)(i.balance)]}),i.rewards&&(0,n.jsxs)("div",{children:["Rewards: ",(0,v.Em)(i.rewards)]}),(0,n.jsxs)("div",{children:["Validator: ",l||i.validatorAddress]}),(0,n.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,n.jsx)(s.z,{disabled:r,onClick:()=>{if(!A||!d)return;x(!0);let r={delegator:e.bech32Address,validator:d.operatorAddress};(0,a.xu)(r,A,t).then(()=>{(0,o.Am)("Unstake successful",{type:"success"})}).catch(()=>{(0,o.Am)("Unstake error",{type:"error"})}).finally(()=>{x(!1)})},children:"Undelegate"}),i.rewards&&(0,n.jsx)(s.z,{disabled:r||"0"===i.rewards.amount,onClick:()=>{if(!A)return;x(!0);let r={delegator:e.bech32Address,validator:i.validatorAddress};(0,a.sT)(r,A,t).then(()=>{(0,o.Am)("Claim success",{type:"success"})}).catch(()=>{(0,o.Am)("Claim error",{type:"error"})}).finally(()=>{x(!1)})},children:"Claim rewards"})]})]},i.validatorAddress)})]}),!!(null==b?void 0:b.items.length)&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Unbondings:"}),(0,n.jsx)("div",{children:null==b?void 0:b.items.map(e=>{let t=w[e.validator];return(0,n.jsxs)("div",{style:{border:"1px solid #fff"},children:[(0,n.jsxs)("div",{children:["Unbonding tokens: ",(0,v.Em)(e.balance)]}),(0,n.jsxs)("div",{children:["Completed by:"," ",new Date(e.completionTime).toString()]}),(0,n.jsxs)("div",{children:["Validator:"," ",(null==t?void 0:t.description.moniker)||e.validator]})]},"".concat(e.completionTime,"-").concat(e.completionTimeNanos))})})]}),(0,n.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,n.jsx)(d.default,{href:"https://explorer.burnt.com/".concat(h.Bv,"/account/").concat(e.bech32Address),target:"_blank",children:(0,n.jsx)(s.z,{onClick:()=>{},children:"VIEW ACCOUNT"})}),(0,n.jsx)(f,{})]}),!!(null==k?void 0:k.items.length)&&(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:"Validators:"}),(0,n.jsx)("div",{className:"max-h-[200px] max-w-max overflow-auto",children:k.items.map(i=>(0,n.jsx)(j,{disabled:r,onStake:()=>{if(!A)return;x(!0);let r={delegator:e.bech32Address,validator:i.operatorAddress};(0,a._5)(r,A,t).then(()=>{(0,o.Am)("Staking successful",{type:"success"})}).catch(()=>{(0,o.Am)("Staking error",{type:"error"})}).finally(()=>{x(!1)})},validator:i},i.operatorAddress))})]})]})})},39730:function(e,t,r){"use strict";r.d(t,{S:function(){return d},U:function(){return s}});var n=r(22840),i=r(66803);let s=e=>{let{delegations:t}=e;if(!(null==t?void 0:t.items.length))return null;let r=t.items.map(e=>e.balance);return(0,i.H)(r)},d=(e,t)=>{let{pool:r}=t;return e&&"string"==typeof(null==r?void 0:r.bondedTokens)?new n.Z(e).div(new n.Z(r.bondedTokens)).toNumber():null}},67497:function(e,t,r){"use strict";r.d(t,{Em:function(){return s},gg:function(){return d},i:function(){return l}});var n=r(22840),i=r(66803);let s=e=>{let t=(0,i.b)(e),r=new n.Z(t.amount);return"".concat(r.toFormat()," ").concat(t.denom)},d=e=>{if("number"!=typeof e||Number.isNaN(e))return null;let t=e<1e-4?"<0.1":(100*e).toFixed(1);return"".concat(t,"%")},l=e=>{let t=new n.Z(e).div(new n.Z(10).pow(18)).toNumber();return"".concat((100*t).toFixed(0),"%")}},61947:function(e,t,r){"use strict";r.d(t,{x:function(){return i}});let n={},i={getIdentityLogo:e=>{if(n[e])return n[e];let t=fetch("https://keybase.io/_/api/1.0/user/lookup.json?key_suffix=".concat(e)).then(e=>e.json()).then(e=>{var t,r,n,i;return(null==e?void 0:null===(i=e.them)||void 0===i?void 0:null===(n=i[0])||void 0===n?void 0:null===(r=n.pictures)||void 0===r?void 0:null===(t=r.primary)||void 0===t?void 0:t.url)||null}).catch(()=>null);return n[e]=t,t}}}},function(e){e.O(0,[350,218,147,228,933,45,792,123,658,971,69,744],function(){return e(e.s=67617)}),_N_E=e.O()}]);