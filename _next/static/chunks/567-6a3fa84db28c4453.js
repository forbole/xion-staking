(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{46601:function(){},89214:function(){},42480:function(){},85568:function(){},69386:function(){},31616:function(){},20131:function(){},16026:function(){},33370:function(){},3237:function(t,e,n){"use strict";n.d(e,{Ex:function(){return s},Jg:function(){return r},Mx:function(){return d},Od:function(){return i},T$:function(){return a},Uv:function(){return g},_H:function(){return c},aJ:function(){return o},c1:function(){return u},sb:function(){return l}});let r=!0,a=void 0,i="https://rpc.xion-testnet.forbole.com",o="xion1z8gr3jn7rd5leyvz7z3zmelxmrz6q8lv7flc3a4u8kltwj6leags8u64qx",l="/xion-staking",s=10,u="".concat(l,"/default-avatar.svg"),d=r?3:21,c=1e-5,g=.001},82012:function(t,e,n){"use strict";n.d(e,{jr:function(){return h},zx:function(){return T},ZP:function(){return b},hp:function(){return w},M5:function(){return y},Rk:function(){return C},Xq:function(){return N},XJ:function(){return m},Bz:function(){return x},ls:function(){return f},Wz:function(){return _},yV:function(){return D},OL:function(){return v},sr:function(){return A},Mj:function(){return S},Y6:function(){return O},Dx:function(){return p}});var r=n(3827),a=n(20996),i=n(32283),o=n(8792),l=n(64090),s=n(30298),u=n(34417);let d=()=>{let t=(0,l.useRef)({}),e=(0,l.useContext)(u._);return t.current.state=e.state,t.current.dispatch=e.dispatch,{core:t.current}};var c=n(97573),g=n(59371);let p=t=>{let{children:e,className:n="",title:a}=t;return(0,r.jsx)("div",{className:["text-[24px] font-bold leading-[28px] text-white",n].join(" "),title:a,children:e})},f=t=>{let{children:e,className:n="",title:a}=t;return(0,r.jsx)("div",{className:["text-[32px] font-light leading-[38px]",n].join(" "),title:a,children:e})},m=t=>{let{children:e,className:n="",title:a}=t;return(0,r.jsx)("div",{className:["text-white; text-[40px] font-bold leading-[36px]",n].join(" "),title:a,children:e})},x=t=>{let{children:e,className:n="",color:a="text-[#ffffff80]",title:i}=t;return(0,r.jsx)("div",{className:["text-[14px] font-bold leading-[16px]",a,n].join(" "),title:i,children:e})},h=t=>{let{children:e,className:n="",title:a}=t;return(0,r.jsx)("div",{className:["text-[16px] font-normal leading-[24px] text-[#ffffffb3]",n].join(" "),title:a,children:e})},v=t=>{let{children:e,href:n}=t;return(0,r.jsx)(o.default,{className:"text-left font-normal leading-[24px] underline underline-offset-[2px]",href:n,children:e})},w=t=>{let{className:e,variant:n,...a}=t;return(0,r.jsx)("button",{...a,className:["cursor-pointer rounded-full bg-bg-550 px-[16px] py-[4px] text-white hover:bg-bg-600 disabled:cursor-not-allowed disabled:bg-bg-600 disabled:text-typo-150","danger"===n?"[&]:bg-dangerBg [&]:text-danger":"",e].join(" ")})},b=t=>{let{className:e,variant:n,...a}=t;return(0,r.jsx)("button",{...a,className:["cursor-pointer rounded-full bg-transparent px-[8px] py-[4px] text-white disabled:cursor-not-allowed disabled:bg-bg-600 disabled:text-typo-150","danger"===n?"[&]:text-danger":"",e].join(" ")})},y=t=>{let{textToCopy:e}=t;return(0,r.jsx)("button",{className:"cursor-pointer",dangerouslySetInnerHTML:{__html:g.BR},onClick:()=>{navigator.clipboard.writeText(e),(0,s.Am)("Copied to clipboard",{type:"info"})}})},_=t=>{let{error:e,...n}=t;return(0,r.jsxs)("span",{className:"relative block",children:[(0,r.jsx)("input",{...n,className:["h-[96px] w-full rounded-[16px] border-[1px] bg-black p-[16px] pr-[140px] text-[48px] focus:outline-none",e?"border-danger":"border-[rgba(255,255,255,0.2)]"].join(" ")}),(0,r.jsx)("span",{className:"absolute bottom-0 right-[12px] top-0 flex h-full items-center  text-[48px] text-typo-300",children:"XION"})]})},N=t=>{let{children:e}=t;return(0,r.jsx)("div",{className:"mt-[8px] text-danger",children:e})},A=t=>(0,r.jsx)("input",{...t,className:"h-[50px] w-full border-b-[1px] border-b-bg-400 bg-black py-[8px] focus:outline-none"}),T=t=>{let{className:e,isLoading:n,variant:a,...i}=t;return(0,r.jsx)("button",{...i,className:["w-full rounded-[8px] px-[12px] py-[16px] text-black disabled:cursor-not-allowed","danger"===a?"text-danger disabled:text-typo-150 bg-[#D745061A]":"success"===a?"bg-success text-black disabled:bg-green-400":"bg-white text-black disabled:bg-bg-400",e||""].join(" "),disabled:n||i.disabled,children:n?(0,r.jsx)("span",{className:"flex items-center justify-center",children:(0,r.jsx)("span",{className:"animate-spin",dangerouslySetInnerHTML:{__html:g._m}})}):i.children})},C=t=>{let{children:e,className:n,id:o,modalClass:s,offset:u,placement:g,Trigger:p}=t,[f,m]=(0,l.useState)(null),{core:x}=d(),h=x.state.popupOpenId===o;return(0,r.jsxs)("div",{className:[n].join(" "),children:[(0,r.jsx)("button",{onClick:t=>{t.stopPropagation(),x.dispatch((0,c.h)(o))},ref:m,children:(0,r.jsx)(p,{id:o})}),h&&(0,r.jsx)(a.d,{onClickAway:()=>{h&&x.dispatch((0,c.h)(null))},children:(0,r.jsx)(i.G,{anchor:f,className:[s].join(" "),offset:u,open:h,placement:g,withTransition:!0,children:e})})]})},S=t=>(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"z-5 absolute bottom-[10px] left-0",children:(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:g.yC}})}),(0,r.jsx)("input",{...t,className:"border-b-[1px] border-b-transparent bg-transparent pb-[8px] pl-[24px] text-white outline-none hover:border-b-bg-400 focus:border-b-bg-400"})]}),O=t=>{let{active:e,...n}=t;return(0,r.jsx)("button",{...n,className:["border-b-[1px] pb-[4px] text-[12px] uppercase leading-[12px] tracking-[1.5px]",e?"border-b-white":"border-b-transparent"].join(" ")})},D=()=>(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center gap-[28px]",children:[(0,r.jsxs)("div",{className:"mt-[80px] text-typo-100 opacity-50",children:["Loading the data..."," "]}),(0,r.jsx)("div",{className:"mb-[80px] flex w-[80px] items-center justify-center",children:(0,r.jsx)("span",{className:"animate-spin",dangerouslySetInnerHTML:{__html:g.Qn}})})]})},97573:function(t,e,n){"use strict";n.d(e,{I:function(){return a},h:function(){return r}});let r=t=>({content:t,type:"SET_POPUP_OPEN_ID"}),a=(t,e)=>"SET_POPUP_OPEN_ID"===e.type?{...t,popupOpenId:e.content}:t},34417:function(t,e,n){"use strict";n.d(e,{W:function(){return a},_:function(){return i}});var r=n(64090);let a={popupOpenId:null},i=(0,r.createContext)({dispatch:()=>null,state:a})},59371:function(t,e,n){"use strict";n.d(e,{BR:function(){return o},GI:function(){return c},Qn:function(){return r},Sf:function(){return l},_m:function(){return i},cx:function(){return d},gU:function(){return u},kC:function(){return s},yC:function(){return a}});let r='<svg width="70" height="68" viewBox="0 0 70 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.1291 65.3291C12.9402 61.3769 3.3291 49.1465 3.3291 34.6713C3.3291 16.9982 17.656 2.67132 35.3291 2.67132C53.0022 2.67132 67.3291 16.9982 67.3291 34.6713C67.3291 48.4042 58.6784 60.1166 46.5291 64.6566" stroke="url(#paint0_angular_59_446)" stroke-width="5"/><defs><radialGradient id="paint0_angular_59_446" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35.3291 33.8713) rotate(75.8157) scale(37.5446 36.7572)"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></radialGradient></defs></svg>',a='<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.4351 10.0629H12.7124L12.4563 9.81589C13.3528 8.77301 13.8925 7.4191 13.8925 5.94625C13.8925 2.66209 11.2304 0 7.94625 0C4.66209 0 2 2.66209 2 5.94625C2 9.23042 4.66209 11.8925 7.94625 11.8925C9.4191 11.8925 10.773 11.3528 11.8159 10.4563L12.0629 10.7124V11.4351L16.6369 16L18 14.6369L13.4351 10.0629ZM7.94625 10.0629C5.66838 10.0629 3.82962 8.22413 3.82962 5.94625C3.82962 3.66838 5.66838 1.82962 7.94625 1.82962C10.2241 1.82962 12.0629 3.66838 12.0629 5.94625C12.0629 8.22413 10.2241 10.0629 7.94625 10.0629Z" fill="white"/></svg>',i='<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.5171 14.3401C2.6686 9.17917 6.16589 4.51075 11.4091 3.10583C17.8107 1.39053 24.3908 5.18952 26.1061 11.5911C27.8214 17.9927 24.0224 24.5727 17.6208 26.2881C12.6464 27.6209 7.56432 25.6242 4.74067 21.6641" stroke="url(#paint0_angular_196_4454)" stroke-width="3"/><defs><radialGradient id="paint0_angular_196_4454" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.8047 14.6193) rotate(150.816) scale(14.0792 13.784)"><stop/><stop offset="1" stop-opacity="0"/></radialGradient></defs></svg>',o='<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.71289" y="4.71094" width="9.16672" height="11.5371" stroke="white" stroke-width="1.5"/><path d="M1 12.2593V2C1 1.44772 1.44772 1 2 1H11.0741" stroke="white" stroke-width="1.5"/></svg>',l='<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.24264 4.24264L8.48528 0H0L4.24264 4.24264Z" fill="#F2F2F2"/></svg>',s='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.941 6L12 10.941L7.059 6L6 7.05975L10.941 12L6 16.941L7.059 18L12 13.059L16.941 18L18 16.941L13.059 12L18 7.05975L16.941 6Z" fill="#6C6A6A"/></svg>',u='<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="17.2353" height="11.9412" rx="1.5" stroke="white"/><path d="M0.5 14.1176V3.75012C0.503887 3.7521 0.507782 3.75406 0.511683 3.75601C1.06022 4.03029 1.7516 4.0298 2.29374 4.02942C2.31368 4.02941 2.33342 4.0294 2.35294 4.0294H17.6471C18.6704 4.0294 19.5 4.85899 19.5 5.88234V14.1176C19.5 15.141 18.6704 15.9706 17.6471 15.9706H2.35294C1.32959 15.9706 0.5 15.141 0.5 14.1176Z" fill="black" stroke="white"/><line x1="3.5293" y1="7.14746" x2="15.8822" y2="7.14746" stroke="white"/></svg>',d='<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00003 6.24271L5.24268 2.00007L9.48532 6.24271" stroke="#F2F2F2" stroke-width="1.5"/></svg>',c='<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="15.5" stroke="white" stroke-opacity="0.2"/><circle cx="16" cy="10" r="2" fill="#6C6A6A"/><circle cx="16" cy="16" r="2" fill="#6C6A6A"/><circle cx="16" cy="22" r="2" fill="#6C6A6A"/></svg>'},88197:function(t,e,n){"use strict";n.d(e,{wX:function(){return b},VZ:function(){return y},Dr:function(){return T},qp:function(){return A},_5:function(){return _},xu:function(){return N}});var r=n(22840),a=n(71694),i=n(66803);let o=null,l=async t=>o||(o=(await (0,a.C_)()).staking.validators(t).then(t=>(o=null,t))),s={},u=async t=>{let e=s[t];if(e)return e;let n=(await (0,a.C_)()).staking.validator(t).then(e=>(s[t]=void 0,e.validator));return s[t]=n,n},d=null,c=async()=>d||(d=(await (0,a.C_)()).staking.pool().then(t=>(d=null,t.pool))),g=async t=>{let e=await (0,a.N$)();return await e.getBalance(t,"uxion")},p=async t=>{let e=await (0,a.C_)();return await e.staking.delegatorDelegations(t)},f=async t=>{let e=await (0,a.C_)();return await e.staking.delegatorUnbondingDelegations(t)},m=async(t,e)=>{let n=await (0,a.C_)(),o=await n.distribution.delegationRewards(t,e);return(await Promise.all(o.rewards.map(async t=>{if(0==t.denom.indexOf("ibc/")){var e;let r=await n.ibc.transfer.denomTrace(t.denom.substring(4));t.denom=(null===(e=r.denomTrace)||void 0===e?void 0:e.baseDenom)||t.denom}return t}))).filter(t=>{var e;return(null===(e=t.denom)||void 0===e?void 0:e.toUpperCase())==="UXION"}).map(t=>({amount:new r.Z(t.amount).div(new r.Z(10).pow(18)).toString(),denom:t.denom})).map(t=>(0,i.bI)(t))},x=async()=>{let t=await (0,a.C_)(),e=await t.mint.params().catch(()=>null);return(null==e?void 0:e.inflationMax)||.2};var h=n(19807),v=n(62986),w=n(39730);let b=async t=>{try{t.dispatch((0,v.Kv)(!0));let[e,n,r,a,i]=await Promise.all([l("BOND_STATUS_BONDED"),l("BOND_STATUS_UNBONDED"),l("BOND_STATUS_UNBONDING"),x(),c()]);[[e,"bonded"],[n,"unbonded"],[r,"unbonding"]].forEach(e=>{var n,r;let[a,i]=e;t.dispatch((0,v.T2)({items:a.validators,nextKey:(null===(n=a.pagination)||void 0===n?void 0:n.nextKey)||null,total:(null===(r=a.pagination)||void 0===r?void 0:r.total)||null},!0,i))}),t.dispatch((0,v.DD)(i)),t.dispatch((0,v.Km)(a.toString())),t.dispatch((0,v.Kv)(!1))}catch(t){console.error("error fetching staking data:",t)}},y=async(t,e)=>{try{var n,r,a,o;e.dispatch((0,v.Kv)(!0));let[l,s,u]=await Promise.all([g(t),p(t).then(async e=>({items:await Promise.all(e.delegationResponses.map(async e=>({balance:e.balance,rewards:await m(t,e.delegation.validatorAddress).then(t=>(0,i.HJ)(t)),validatorAddress:e.delegation.validatorAddress}))),pagination:e.pagination})),f(t).then(t=>({items:t.unbondingResponses.reduce((t,e)=>(t.push(...e.entries.map(t=>({balance:{amount:t.balance,denom:"uxion"},completionTime:Number(t.completionTime.seconds),completionTimeNanos:t.completionTime.nanos,creationHeight:t.creationHeight,id:t.unbondingId.toString(),validator:e.validatorAddress}))),t),[]),pagination:t.pagination})).catch(()=>({items:[],pagination:null})).then(t=>({items:t.items,pagination:t.pagination}))]);e.dispatch((0,v.d0)(l)),e.dispatch((0,v.Qx)({items:s.items,nextKey:(null===(n=s.pagination)||void 0===n?void 0:n.nextKey)||null,total:(null===(r=s.pagination)||void 0===r?void 0:r.total)||null},!0)),e.dispatch((0,v.Kg)({items:u.items,nextKey:(null===(a=u.pagination)||void 0===a?void 0:a.nextKey)||null,total:(null===(o=u.pagination)||void 0===o?void 0:o.total)||null},!0)),e.dispatch((0,v.Kv)(!1))}catch(t){console.error("error fetching staking data:",t)}},_=async(t,e,n,r,a)=>(await (0,h.H0)(t,r,e,n),async()=>{await y(t.delegator,a)}),N=async(t,e,n,r,a)=>(await (0,h.vZ)(t,r,e,n),async()=>{await y(t.delegator,a)}),A=async(t,e)=>{var n;if((null===(n=e.state.validatorDetails)||void 0===n?void 0:n.operatorAddress)===t)return e.state.validatorDetails;let r=(0,w.mM)(e.state)[t]||await u(t);return e.dispatch((0,v.gT)(r)),r},T=async(t,e)=>{let n=(0,w.mM)(e.state)[t];if(n)return n;let r=await u(t);return e.dispatch((0,v.N7)({[t]:r,...e.state.extraValidators})),r}},80469:function(t,e,n){"use strict";let r;n.d(e,{f:function(){return d},n:function(){return u}});var a=n(75615),i=n(64090),o=n(88197),l=n(62986),s=n(544);let u=()=>{let t=(0,i.useRef)({}),e=(0,i.useContext)(s.Y);t.current.state=e.state,t.current.dispatch=e.dispatch;let{data:n,isConnected:o}=(0,a.hT)(),l=null==n?void 0:n.bech32Address;return{account:n,address:l,client:o?r:void 0,isConnected:o,staking:t.current}},d=()=>{let{client:t}=(0,a.Hj)(),{address:e,isConnected:n,staking:s}=u();r=n?t:void 0,(0,i.useEffect)(()=>{(0,o.wX)(s)},[s]),(0,i.useEffect)(()=>{if(n&&e)return(0,o.VZ)(e,s),()=>{s.dispatch((0,l.kS)())}},[n,e,s])}},62986:function(t,e,n){"use strict";n.d(e,{DD:function(){return u},I6:function(){return h},Kg:function(){return l},Km:function(){return g},Kv:function(){return a},N7:function(){return p},Qx:function(){return o},T2:function(){return i},ZG:function(){return c},d0:function(){return r},gT:function(){return s},kS:function(){return d}});let r=t=>({content:t,type:"SET_TOKENS"}),a=t=>({content:t,type:"SET_IS_INFO_LOADING"}),i=(t,e,n)=>({content:t,reset:e,status:n,type:"ADD_VALIDATORS"}),o=(t,e)=>({content:t,reset:e,type:"ADD_DELEGATIONS"}),l=(t,e)=>({content:t,reset:e,type:"ADD_UNBONDINGS"}),s=t=>({content:t,type:"SET_VALIDATOR_DETAILS"}),u=t=>({content:t,type:"SET_POOL"}),d=()=>({content:null,type:"LOGOUT"}),c=t=>({content:t,type:"SET_MODAL"}),g=t=>({content:t,type:"SET_INFLATION"}),p=t=>({content:t,type:"SET_EXTRA_VALIDATORS"}),f=t=>{let e=new Set;return t.filter(t=>!e.has(t.operatorAddress)&&(e.add(t.operatorAddress),!0))},m=t=>{let e=new Set;return t.filter(t=>!e.has(t.validatorAddress)&&(e.add(t.validatorAddress),!0))},x=t=>{let e=new Set;return t.filter(t=>{let n=t.id;return!e.has(n)&&(e.add(n),!0)})},h=(t,e)=>{switch(e.type){case"SET_TOKENS":return{...t,tokens:e.content};case"ADD_VALIDATORS":{let n=!e.reset&&t.validators[e.status]||{items:[],nextKey:null,total:null};return n.total=e.content.total,n.nextKey=e.content.nextKey,n.items=f(n.items.concat(e.content.items)),{...t,validators:{...t.validators,[e.status]:n}}}case"ADD_DELEGATIONS":{let n=!e.reset&&t.delegations||{items:[],nextKey:null,total:null};return n.total=e.content.total,n.nextKey=e.content.nextKey,n.items=m(e.content.items.concat(n.items)),{...t,delegations:n}}case"ADD_UNBONDINGS":{let n=!e.reset&&t.unbondings||{items:[],nextKey:null,total:null};return n.total=e.content.total,n.nextKey=e.content.nextKey,n.items=x(e.content.items.concat(n.items)),{...t,unbondings:n}}case"SET_IS_INFO_LOADING":return{...t,isInfoLoading:e.content};case"SET_VALIDATOR_DETAILS":return{...t,validatorDetails:e.content};case"SET_POOL":return{...t,pool:e.content};case"SET_MODAL":return{...t,modal:e.content};case"LOGOUT":return{...t,delegations:null,unbondings:null};case"SET_EXTRA_VALIDATORS":return{...t,extraValidators:e.content};case"SET_INFLATION":return{...t,inflation:e.content};default:return t}}},39730:function(t,e,n){"use strict";n.d(e,{Cn:function(){return s},Sg:function(){return c},U2:function(){return o},ap:function(){return u},c3:function(){return g},jc:function(){return f},jv:function(){return l},mM:function(){return p},zq:function(){return d}});var r=n(22840),a=n(66803),i=n(19807);let o=(t,e)=>{let{delegations:n}=t;if(!(null==n?void 0:n.items.length))return null;let r=n.items.filter(t=>!e||t.validatorAddress===e).map(t=>t.balance);return(0,a.HJ)(r)},l=(t,e)=>{let{unbondings:n}=t;if(!(null==n?void 0:n.items.length))return null;let r=n.items.filter(t=>!e||t.validator===e).map(t=>t.balance);return(0,a.HJ)(r)},s=(t,e)=>{let{delegations:n}=e;if(!(null==n?void 0:n.items.length))return null;let r=n.items.filter(e=>!t||e.validatorAddress===t).map(t=>t.rewards);return(0,a.HJ)(r)},u=t=>{let{tokens:e}=t;return e?new r.Z((0,a.bI)(e).amount):null},d=(t,e)=>{var n;return!!(null===(n=e.delegations)||void 0===n?void 0:n.items.some(e=>e.validatorAddress===t))},c=(t,e)=>{let{pool:n}=e;return t&&"string"==typeof(null==n?void 0:n.bondedTokens)?new r.Z(t).div(new r.Z(n.bondedTokens)).toNumber():null},g=t=>{let{delegations:e}=t;return null!=e&&!!e.items.length&&e.items.some(t=>(0,i.m)(null==t?void 0:t.rewards))},p=t=>Object.values(t.validators).map(t=>null==t?void 0:t.items).flat().reduce((t,e)=>(e&&(t[e.operatorAddress]=e),t),{...t.extraValidators}),f=t=>t.inflation?new r.Z(t.inflation):null},544:function(t,e,n){"use strict";n.d(e,{W:function(){return a},Y:function(){return i}});var r=n(64090);let a={delegations:null,extraValidators:{},inflation:null,isInfoLoading:!1,modal:null,pool:null,tokens:null,unbondings:null,validatorDetails:null,validators:{bonded:null,unbonded:null,unbonding:null}},i=(0,r.createContext)({dispatch:()=>null,state:a})},71694:function(t,e,n){"use strict";let r,a;n.d(e,{C_:function(){return u},N$:function(){return d},v4:function(){return c}});var i=n(18722),o=n(58015),l=n(43890),s=n(3237);let u=()=>(r||(r=(async()=>{let t=await l.Tendermint34Client.connect(s.Od);return o.QueryClient.withExtensions(t,o.setupStakingExtension,o.setupDistributionExtension,o.setupMintExtension,o.setupIbcExtension)})()),r),d=()=>(a||(a=(async()=>await o.StargateClient.connect(s.Od))()),a),c=async t=>{let e=localStorage.getItem("xion-authz-temp-account");if(!e)return;let n=await i.DirectSecp256k1HdWallet.deserialize(e,"abstraxion"),r=await n.getAccounts().then(t=>{var e;return null===(e=t[0])||void 0===e?void 0:e.address});return{client:await o.SigningStargateClient.connectWithSigner(s.Od,n,{registry:t}),granteeAddress:r}}},66803:function(t,e,n){"use strict";n.d(e,{HJ:function(){return d},IB:function(){return i},Jp:function(){return o},UO:function(){return l},bI:function(){return a},bP:function(){return u},kw:function(){return s}});var r=n(22840);let a=t=>{var e,n,a;return(null===(e=t.denom)||void 0===e?void 0:e.toUpperCase())==="UXION"?{amount:new r.Z(t.amount).div(new r.Z(10).pow(6)).toString(),denom:"XION"}:(null===(n=t.denom)||void 0===n?void 0:n.toUpperCase())==="XION"?{amount:t.amount,denom:"XION"}:{...t,denom:null===(a=t.denom)||void 0===a?void 0:a.toUpperCase()}},i=()=>({amount:"0",denom:"XION"}),o=t=>({amount:t.toString(),denom:"XION"}),l=t=>t&&new r.Z(t.amount).gt(0),s=t=>({amount:t.div(new r.Z(10).pow(6)).toString(),denom:"XION"}),u=t=>({amount:t.times(new r.Z(10).pow(6)).toString(),denom:"UXION"}),d=t=>t.reduce((t,e)=>({amount:new r.Z(t.amount).plus(a(e).amount).toString(),denom:t.denom}),i())},19807:function(t,e,n){"use strict";n.d(e,{mu:function(){return b},YY:function(){return v},dQ:function(){return _},TI:function(){return y},m:function(){return w},H0:function(){return x},vZ:function(){return h}});var r=n(22840),a=n(53856),i=n(62884),o=n(3237),l=n(66803),s=n(97481),u=n(71694);let d=async(t,e)=>{let{client:n,granteeAddress:r}=await (0,u.v4)()||{};if(!n||!r)return null;let a=[{typeUrl:"/cosmos.authz.v1beta1.MsgExec",value:s.MsgExec.fromPartial({grantee:r,msgs:t.map(t=>n.registry.encodeAsAny(t))})}];return await n.simulate(r,a,e).then(t=>Math.ceil(2*t).toString()).catch(t=>(console.log("debug: core/base.ts: Estimate error",t),null))},c=async t=>{let{address:e,amount:n=[{amount:"0",denom:"uxion"}],gasLimit:r="400000",memo:a="",msgs:i}=t;return{amount:n,gas:await d(i,a).catch(()=>null)||r,granter:e}},g=t=>({amount:t.amount,denom:["UXION","XION"].includes(t.denom.toUpperCase())?t.denom.toLowerCase():t.denom}),p=t=>{if("UXION"===t.denom.toUpperCase())return g(t);if("XION"===t.denom.toUpperCase())return g((0,l.bP)(new r.Z(t.amount)));throw Error("Invalid coin denom")},f=t=>e=>{if(console.log("debug: base.ts: result",e),!e.events.find(e=>e.type===t))throw console.error(e),Error("Out of gas");return e},m=t=>{throw console.error(t),t},x=async(t,e,n,r)=>{let a=p(n),o={typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:i.MsgDelegate.fromPartial({amount:a,delegatorAddress:t.delegator,validatorAddress:t.validator})},l=await c({address:t.delegator,memo:r,msgs:[o]});return await e.signAndBroadcast(t.delegator,[o],l,r).then(f("delegate")).catch(m)},h=async(t,e,n,r)=>{let a=p(n),o={typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:i.MsgUndelegate.fromPartial({amount:a,delegatorAddress:t.delegator,validatorAddress:t.validator})},l=await c({address:t.delegator,memo:r,msgs:[o]});return await e.signAndBroadcast(t.delegator,[o],l,r).then(f("unbond")).catch(m)},v=async(t,e)=>{let n=[{typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:a.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:t.delegator,validatorAddress:t.validator})}],r=await c({address:t.delegator,msgs:n});return await e.signAndBroadcast(t.delegator,n,r).then(f("withdraw_rewards")).catch(m)},w=t=>{if(!t)return!1;let e=(0,l.bI)(t);return new r.Z(e.amount).gte(o._H)},b=async(t,e,n)=>{n.registry.register(i.MsgCancelUnbondingDelegation.typeUrl,i.MsgCancelUnbondingDelegation);let r=[{typeUrl:"/cosmos.staking.v1beta1.MsgCancelUnbondingDelegation",value:i.MsgCancelUnbondingDelegation.fromPartial({amount:e.balance,creationHeight:e.creationHeight,delegatorAddress:t.delegator,validatorAddress:t.validator})}],a=await c({address:t.delegator,msgs:r});return await n.signAndBroadcast(t.delegator,r,a,"").then(f("cancel_unbonding_delegation")).catch(m)},y=async(t,e)=>await e.queryContractSmart(o.aJ,{get_address_last_faucet_timestamp:{address:t}}).then(t=>{let e=Math.floor(Date.now()/1e3),n=parseInt(t.timestamp);return 0===n?{canFaucet:!0,denom:t.denom,lastFaucetTimestamp:0,maxBalance:t.amount_to_faucet,nextFaucetTimestamp:e}:{canFaucet:n+t.cooldown_period<e,denom:t.denom,lastFaucetTimestamp:n,maxBalance:t.amount_to_faucet,nextFaucetTimestamp:n+t.cooldown_period}}).catch(m),_=async(t,e)=>await e.execute(t,o.aJ,{faucet:{}},"auto").catch(m)}}]);