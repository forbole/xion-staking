(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{46601:function(){},89214:function(){},42480:function(){},85568:function(){},69386:function(){},31616:function(){},20131:function(){},16026:function(){},33370:function(){},96496:function(e,t,n){Promise.resolve().then(n.bind(n,68454))},68454:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(3827),i=n(52674),o=n(80469),r=n(62331),s=n(8792),l=n(64090),d=n(88197),c=n(66803),u=n(9016),m=n(18722),v=()=>{let[e,t]=(0,l.useState)(null);return((0,l.useEffect)(()=>{(async()=>{var e;let n=localStorage.getItem("xion-authz-temp-account");if(!n)return;let a=await m.DirectSecp256k1HdWallet.deserialize(n,"abstraxion"),i=await a.getAccounts(),o=null==i?void 0:null===(e=i[0])||void 0===e?void 0:e.address;o&&t(o)})()},[]),e)?(0,a.jsx)(s.default,{href:"https://explorer.burnt.com/".concat(u.Bv,"/account/").concat(e),target:"_blank",children:(0,a.jsx)(r.z,{onClick:()=>{},children:"DEBUG ACCOUNT"})}):null};let g=e=>{let{disabled:t,onStake:n,validator:i}=e,{website:o}=i.description;return(0,a.jsxs)("div",{style:{border:"solid 1ps white",marginBottom:10},children:[(0,a.jsx)("div",{children:(0,a.jsx)("b",{children:i.description.moniker})}),(0,a.jsx)("div",{children:i.operatorAddress}),(0,a.jsx)("div",{children:(0,a.jsx)(r.z,{disabled:t,onClick:n,structure:"naked",children:"Stake here"})}),o&&(0,a.jsx)("div",{children:(0,a.jsx)(s.default,{href:o,target:"_blank",children:o})})]})};var x=(0,l.memo)(function(){let{account:e,staking:t}=(0,o.n)(),[n,m]=(0,l.useState)(!1),{delegations:x,tokens:h,unbondings:p,validators:f}=t.state,{client:b}=(0,i.Hj)(),w=(null==f?void 0:f.items.reduce((e,t)=>(e[t.operatorAddress]=t,e),{}))||{};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{children:"Account"}),(0,a.jsx)("div",{children:(0,a.jsx)("b",{children:e.bech32Address})}),h&&(0,a.jsxs)("div",{children:["Tokens: ",(0,a.jsx)("b",{children:(0,c.Em)(h)})]})]}),!!(null==x?void 0:x.items.length)&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Delegations:"}),x.items.map(i=>{let o=w[i.validatorAddress],s=null==o?void 0:o.description.moniker;return(0,a.jsxs)("div",{style:{border:"1px solid #fff",marginBottom:20},children:[(0,a.jsxs)("div",{children:["Delegated: ",(0,c.Em)(i.balance)]}),i.rewards&&(0,a.jsxs)("div",{children:["Rewards: ",(0,c.Em)(i.rewards)]}),(0,a.jsxs)("div",{children:["Validator: ",s||i.validatorAddress]}),(0,a.jsxs)("div",{className:"flex flex-row gap-4",children:[(0,a.jsx)(r.z,{disabled:n,onClick:()=>{if(m(!0),!b||!o)return;m(!0);let n={delegator:e.bech32Address,validator:o.operatorAddress};(0,d.yQ)(n,b,t).then(()=>{m(!1)})},children:"Undelegate"}),i.rewards&&(0,a.jsx)(r.z,{disabled:n||"0"===i.rewards.amount,onClick:()=>{},children:"Claim rewards"}),(0,a.jsx)(r.z,{disabled:n,onClick:()=>{},children:"Redelelegate"})]})]},i.validatorAddress)})]}),!!(null==p?void 0:p.items.length)&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Unbondings:"}),(0,a.jsx)("div",{children:null==p?void 0:p.items.map(e=>{let t=w[e.validator];return(0,a.jsxs)("div",{style:{border:"1px solid #fff"},children:["Unbonding tokens: ",(0,c.Em)(e.balance)," ","(completed by:"," ",new Date(e.completionTime).toString(),") Validator:"," ",(null==t?void 0:t.description.moniker)||e.validator]},"".concat(e.completionTime,"-").concat(e.completionTimeNanos))})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-center gap-4",children:[(0,a.jsx)(s.default,{href:"https://explorer.burnt.com/".concat(u.Bv,"/account/").concat(e.bech32Address),target:"_blank",children:(0,a.jsx)(r.z,{onClick:()=>{},children:"VIEW ACCOUNT"})}),(0,a.jsx)(v,{})]}),f&&(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Validators:"}),(0,a.jsx)("div",{className:"max-h-[200px] max-w-max overflow-auto",children:f.items.map(i=>(0,a.jsx)(g,{disabled:n,onStake:()=>{if(!b)return;m(!0);let n={delegator:e.bech32Address,validator:i.operatorAddress};(0,d.yt)(n,b,t).then(()=>{m(!1)})},validator:i},i.operatorAddress))})]})]})});function h(){let[,e]=(0,i.dd)(),t=(0,l.useCallback)(()=>{e(!0)},[e]);return(0,a.jsx)("div",{className:"w-max",children:(0,a.jsx)(r.z,{fullWidth:!0,onClick:t,structure:"base",children:"CONNECT"})})}function p(){let{isLoggedIn:e}=(0,o.n)(),[t,n]=(0,i.dd)();return(0,a.jsxs)("main",{className:"m-auto flex min-h-screen max-w-xs flex-col items-center justify-center gap-4 p-4",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold tracking-tighter text-black dark:text-white",children:"XION Staking"}),e?(0,a.jsx)(x,{}):(0,a.jsx)(h,{}),t&&(0,a.jsx)(i.my,{onClose:()=>{n(!1)}})]})}},88197:function(e,t,n){"use strict";n.d(t,{co:function(){return b},yt:function(){return w},yQ:function(){return y}});var a=n(58015),i=n(43890),o=n(22840),r=n(62884),s=n(66803),l=n(9016);let d=async()=>{let e=await i.Tendermint34Client.connect(l.Od);return a.QueryClient.withExtensions(e,a.setupStakingExtension,a.setupDistributionExtension,a.setupIbcExtension)},c=async e=>{let{address:t,amount:n,client:a,gasLimit:i,memo:o,msgs:r}=e;return{amount:n,gas:i,granter:t}},u=async()=>{let e=await d();return await e.staking.validators("BOND_STATUS_BONDED")},m=async e=>{let t=await a.StargateClient.connect(l.Od);return await t.getBalance(e,"uxion")},v=async e=>{let t=await d();return await t.staking.delegatorDelegations(e)},g=async e=>{let t=await d();return await t.staking.delegatorUnbondingDelegations(e)},x=async(e,t)=>{let n=await d(),a=await n.distribution.delegationRewards(e,t);return(await Promise.all(a.rewards.map(async e=>{if(0==e.denom.indexOf("ibc/")){var t;let a=await n.ibc.transfer.denomTrace(e.denom.substring(4));e.denom=(null===(t=a.denomTrace)||void 0===t?void 0:t.baseDenom)||e.denom}return e}))).filter(e=>{var t;return(null===(t=e.denom)||void 0===t?void 0:t.toUpperCase())==="UXION"}).map(e=>({amount:new o.Z(e.amount).div(new o.Z(10).pow(18)).toString(),denom:e.denom})).map(e=>(0,s.bI)(e))},h=async(e,t,n)=>{let a=r.MsgDelegate.fromPartial({amount:n,delegatorAddress:e.delegator,validatorAddress:e.validator}),i={amount:[{amount:"1000",denom:"uxion"}],gas:"200000",granter:e.delegator};return await t.signAndBroadcast(e.delegator,[{typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:a}],i)},p=async(e,t,n)=>{let a={typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:r.MsgUndelegate.fromPartial({amount:n,delegatorAddress:e.delegator,validatorAddress:e.validator})},i=await c({address:e.delegator,amount:[{amount:"1000",denom:"uxion"}],client:t,gasLimit:"400000",memo:"",msgs:[a]});return await t.signAndBroadcast(e.delegator,[a],i)};var f=n(62986);let b=async(e,t)=>{try{var n,a,i,o,r,l;let[d,c,h,p]=await Promise.all([m(e),u(),v(e).then(async t=>({items:await Promise.all(t.delegationResponses.map(async t=>({balance:t.balance,rewards:await x(e,t.delegation.validatorAddress).then(e=>(0,s.HJ)(e)),validatorAddress:t.delegation.validatorAddress}))),pagination:t.pagination})),g(e).then(e=>({items:e.unbondingResponses.reduce((e,t)=>(e.push(...t.entries.map(e=>({balance:{amount:e.balance,denom:"uxion"},completionTime:Number(e.completionTime.seconds),completionTimeNanos:e.completionTime.nanos,id:e.unbondingId.toString(),validator:t.validatorAddress}))),e),[]),pagination:e.pagination})).catch(()=>({items:[],pagination:null})).then(e=>({items:e.items,pagination:e.pagination}))]);t.dispatch((0,f.d0)(d)),t.dispatch((0,f.T2)({items:c.validators,nextKey:(null===(n=c.pagination)||void 0===n?void 0:n.nextKey)||null,total:(null===(a=c.pagination)||void 0===a?void 0:a.total)||null},!0)),t.dispatch((0,f.Qx)({items:h.items,nextKey:(null===(i=h.pagination)||void 0===i?void 0:i.nextKey)||null,total:(null===(o=h.pagination)||void 0===o?void 0:o.total)||null},!0)),t.dispatch((0,f.Kg)({items:p.items,nextKey:(null===(r=p.pagination)||void 0===r?void 0:r.nextKey)||null,total:(null===(l=p.pagination)||void 0===l?void 0:l.total)||null},!0))}catch(e){console.error("error fetching staking data:",e)}},w=async(e,t,n)=>{await h(e,t,{amount:"1000",denom:"uxion"}),await b(e.delegator,n)},y=async(e,t,n)=>{console.log("debug: actions.ts: result",await p(e,t,{amount:"1000",denom:"uxion"})),await b(e.delegator,n)}},80469:function(e,t,n){"use strict";n.d(t,{f:function(){return l},n:function(){return s}});var a=n(52674),i=n(64090),o=n(76958),r=n(88197);let s=()=>{let e=(0,i.useRef)({}),t=(0,i.useContext)(o.Y);e.current.state=t.state,e.current.dispatch=t.dispatch;let{data:n}=(0,a.hT)(),r=null==n?void 0:n.bech32Address;return{account:n,address:r,isLoggedIn:!!(null==n?void 0:n.bech32Address),staking:e.current}},l=()=>{let{address:e,isLoggedIn:t,staking:n}=s();(0,i.useEffect)(()=>{t&&e&&(0,r.co)(e,n)},[t,e,n])}},76958:function(e,t,n){"use strict";n.d(t,{W:function(){return i},Y:function(){return o}});var a=n(64090);let i={delegations:null,tokens:null,unbondings:null,validators:null},o=(0,a.createContext)({dispatch:()=>null,state:i})},62986:function(e,t,n){"use strict";n.d(t,{I6:function(){return c},Kg:function(){return r},Qx:function(){return o},T2:function(){return i},d0:function(){return a}});let a=e=>({content:e,type:"SET_TOKENS"}),i=(e,t)=>({content:e,reset:t,type:"ADD_VALIDATORS"}),o=(e,t)=>({content:e,reset:t,type:"ADD_DELEGATIONS"}),r=(e,t)=>({content:e,reset:t,type:"ADD_UNBONDINGS"}),s=e=>{let t=new Set;return e.filter(e=>!t.has(e.operatorAddress)&&(t.add(e.operatorAddress),!0))},l=e=>{let t=new Set;return e.filter(e=>!t.has(e.validatorAddress)&&(t.add(e.validatorAddress),!0))},d=e=>{let t=new Set;return e.filter(e=>{let n=e.id;return!t.has(n)&&(t.add(n),!0)})},c=(e,t)=>{switch(t.type){case"SET_TOKENS":return{...e,tokens:t.content};case"ADD_VALIDATORS":{let n=!t.reset&&e.validators||{items:[],nextKey:null,total:null};return n.total=t.content.total,n.nextKey=t.content.nextKey,n.items=s(n.items.concat(t.content.items)),{...e,validators:n}}case"ADD_DELEGATIONS":{let n=!t.reset&&e.delegations||{items:[],nextKey:null,total:null};return n.total=t.content.total,n.nextKey=t.content.nextKey,n.items=l(t.content.items.concat(n.items)),{...e,delegations:n}}case"ADD_UNBONDINGS":{let n=!t.reset&&e.unbondings||{items:[],nextKey:null,total:null};return n.total=t.content.total,n.nextKey=t.content.nextKey,n.items=d(t.content.items.concat(n.items)),{...e,unbondings:n}}default:return e}}},66803:function(e,t,n){"use strict";n.d(t,{Em:function(){return o},HJ:function(){return s},bI:function(){return i}});var a=n(22840);let i=e=>{var t,n,i;return(null===(t=e.denom)||void 0===t?void 0:t.toUpperCase())==="UXION"?{amount:new a.Z(e.amount).div(new a.Z(10).pow(6)).toString(),denom:"XION"}:(null===(n=e.denom)||void 0===n?void 0:n.toUpperCase())==="XION"?{amount:e.amount,denom:"XION"}:{...e,denom:null===(i=e.denom)||void 0===i?void 0:i.toUpperCase()}},o=e=>{let t=i(e),n=new a.Z(t.amount);return"".concat(n.toFormat()," ").concat(t.denom)},r=()=>({amount:"0",denom:"xion"}),s=e=>e.reduce((e,t)=>({amount:(parseFloat(e.amount)+parseFloat(i(t).amount)).toString(),denom:t.denom}),r())},9016:function(e,t,n){"use strict";n.d(t,{Bv:function(){return a},Od:function(){return o},T$:function(){return i}});let{chainId:a}=n(3436).testnetChainInfo,i=void 0,o="https://rpc.xion-testnet.forbole.com"}},function(e){e.O(0,[350,218,147,228,933,565,792,971,69,744],function(){return e(e.s=96496)}),_N_E=e.O()}]);