(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{46601:function(){},89214:function(){},42480:function(){},85568:function(){},69386:function(){},31616:function(){},20131:function(){},16026:function(){},33370:function(){},18127:function(t,n,e){Promise.resolve().then(e.bind(e,41994))},41994:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return p}});var a=e(3827),o=e(99646),i=e.n(o),r=e(52674);e(22754),e(25805);var s=e(64090),l=e(76958),d=e(80469),u=e(62986);let c=t=>{let{children:n}=t;return(0,d.f)(),(0,a.jsx)(a.Fragment,{children:n})},m=t=>{let{children:n}=t,[e,o]=(0,s.useReducer)(u.I6,l.W);return(0,s.useEffect)(()=>{window.stakingContext={state:e}},[e]),(0,a.jsx)(l.Y.Provider,{value:{dispatch:o,state:e},children:(0,a.jsx)(c,{children:n})})};var g=e(9016);e(63385);let f={contracts:[],dashboardUrl:g.T$,rpcUrl:g.Od,stake:!0};function p(t){let{children:n}=t;return(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{className:i().className,children:(0,a.jsx)(r.B7,{config:f,children:(0,a.jsx)(m,{children:n})})})})}},88197:function(t,n,e){"use strict";e.d(n,{co:function(){return x},yt:function(){return h},yQ:function(){return b}});var a=e(58015),o=e(43890),i=e(22840),r=e(62884),s=e(66803),l=e(9016);let d=async()=>{let t=await o.Tendermint34Client.connect(l.Od);return a.QueryClient.withExtensions(t,a.setupStakingExtension,a.setupDistributionExtension,a.setupIbcExtension)},u=async t=>{let{address:n,amount:e,client:a,gasLimit:o,memo:i,msgs:r}=t;return{amount:e,gas:o,granter:n}},c=async()=>{let t=await d();return await t.staking.validators("BOND_STATUS_BONDED")},m=async t=>{let n=await a.StargateClient.connect(l.Od);return await n.getBalance(t,"uxion")},g=async t=>{let n=await d();return await n.staking.delegatorDelegations(t)},f=async t=>{let n=await d();return await n.staking.delegatorUnbondingDelegations(t)},p=async(t,n)=>{let e=await d(),a=await e.distribution.delegationRewards(t,n);return(await Promise.all(a.rewards.map(async t=>{if(0==t.denom.indexOf("ibc/")){var n;let a=await e.ibc.transfer.denomTrace(t.denom.substring(4));t.denom=(null===(n=a.denomTrace)||void 0===n?void 0:n.baseDenom)||t.denom}return t}))).filter(t=>{var n;return(null===(n=t.denom)||void 0===n?void 0:n.toUpperCase())==="UXION"}).map(t=>({amount:new i.Z(t.amount).div(new i.Z(10).pow(18)).toString(),denom:t.denom})).map(t=>(0,s.bI)(t))},v=async(t,n,e)=>{let a=r.MsgDelegate.fromPartial({amount:e,delegatorAddress:t.delegator,validatorAddress:t.validator}),o={amount:[{amount:"1000",denom:"uxion"}],gas:"200000",granter:t.delegator};return await n.signAndBroadcast(t.delegator,[{typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:a}],o)},y=async(t,n,e)=>{let a={typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:r.MsgUndelegate.fromPartial({amount:e,delegatorAddress:t.delegator,validatorAddress:t.validator})},o=await u({address:t.delegator,amount:[{amount:"1000",denom:"uxion"}],client:n,gasLimit:"400000",memo:"",msgs:[a]});return await n.signAndBroadcast(t.delegator,[a],o)};var w=e(62986);let x=async(t,n)=>{try{var e,a,o,i,r,l;let[d,u,v,y]=await Promise.all([m(t),c(),g(t).then(async n=>({items:await Promise.all(n.delegationResponses.map(async n=>({balance:n.balance,rewards:await p(t,n.delegation.validatorAddress).then(t=>(0,s.HJ)(t)),validatorAddress:n.delegation.validatorAddress}))),pagination:n.pagination})),f(t).then(t=>({items:t.unbondingResponses.reduce((t,n)=>(t.push(...n.entries.map(t=>({balance:{amount:t.balance,denom:"uxion"},completionTime:Number(t.completionTime.seconds),completionTimeNanos:t.completionTime.nanos,id:t.unbondingId.toString(),validator:n.validatorAddress}))),t),[]),pagination:t.pagination})).catch(()=>({items:[],pagination:null})).then(t=>({items:t.items,pagination:t.pagination}))]);n.dispatch((0,w.d0)(d)),n.dispatch((0,w.T2)({items:u.validators,nextKey:(null===(e=u.pagination)||void 0===e?void 0:e.nextKey)||null,total:(null===(a=u.pagination)||void 0===a?void 0:a.total)||null},!0)),n.dispatch((0,w.Qx)({items:v.items,nextKey:(null===(o=v.pagination)||void 0===o?void 0:o.nextKey)||null,total:(null===(i=v.pagination)||void 0===i?void 0:i.total)||null},!0)),n.dispatch((0,w.Kg)({items:y.items,nextKey:(null===(r=y.pagination)||void 0===r?void 0:r.nextKey)||null,total:(null===(l=y.pagination)||void 0===l?void 0:l.total)||null},!0))}catch(t){console.error("error fetching staking data:",t)}},h=async(t,n,e)=>{await v(t,n,{amount:"1000",denom:"uxion"}),await x(t.delegator,e)},b=async(t,n,e)=>{console.log("debug: actions.ts: result",await y(t,n,{amount:"1000",denom:"uxion"})),await x(t.delegator,e)}},80469:function(t,n,e){"use strict";e.d(n,{f:function(){return l},n:function(){return s}});var a=e(52674),o=e(64090),i=e(76958),r=e(88197);let s=()=>{let t=(0,o.useRef)({}),n=(0,o.useContext)(i.Y);t.current.state=n.state,t.current.dispatch=n.dispatch;let{data:e}=(0,a.hT)(),r=null==e?void 0:e.bech32Address;return{account:e,address:r,isLoggedIn:!!(null==e?void 0:e.bech32Address),staking:t.current}},l=()=>{let{address:t,isLoggedIn:n,staking:e}=s();(0,o.useEffect)(()=>{n&&t&&(0,r.co)(t,e)},[n,t,e])}},76958:function(t,n,e){"use strict";e.d(n,{W:function(){return o},Y:function(){return i}});var a=e(64090);let o={delegations:null,tokens:null,unbondings:null,validators:null},i=(0,a.createContext)({dispatch:()=>null,state:o})},62986:function(t,n,e){"use strict";e.d(n,{I6:function(){return u},Kg:function(){return r},Qx:function(){return i},T2:function(){return o},d0:function(){return a}});let a=t=>({content:t,type:"SET_TOKENS"}),o=(t,n)=>({content:t,reset:n,type:"ADD_VALIDATORS"}),i=(t,n)=>({content:t,reset:n,type:"ADD_DELEGATIONS"}),r=(t,n)=>({content:t,reset:n,type:"ADD_UNBONDINGS"}),s=t=>{let n=new Set;return t.filter(t=>!n.has(t.operatorAddress)&&(n.add(t.operatorAddress),!0))},l=t=>{let n=new Set;return t.filter(t=>!n.has(t.validatorAddress)&&(n.add(t.validatorAddress),!0))},d=t=>{let n=new Set;return t.filter(t=>{let e=t.id;return!n.has(e)&&(n.add(e),!0)})},u=(t,n)=>{switch(n.type){case"SET_TOKENS":return{...t,tokens:n.content};case"ADD_VALIDATORS":{let e=!n.reset&&t.validators||{items:[],nextKey:null,total:null};return e.total=n.content.total,e.nextKey=n.content.nextKey,e.items=s(e.items.concat(n.content.items)),{...t,validators:e}}case"ADD_DELEGATIONS":{let e=!n.reset&&t.delegations||{items:[],nextKey:null,total:null};return e.total=n.content.total,e.nextKey=n.content.nextKey,e.items=l(n.content.items.concat(e.items)),{...t,delegations:e}}case"ADD_UNBONDINGS":{let e=!n.reset&&t.unbondings||{items:[],nextKey:null,total:null};return e.total=n.content.total,e.nextKey=n.content.nextKey,e.items=d(n.content.items.concat(e.items)),{...t,unbondings:e}}default:return t}}},66803:function(t,n,e){"use strict";e.d(n,{Em:function(){return i},HJ:function(){return s},bI:function(){return o}});var a=e(22840);let o=t=>{var n,e,o;return(null===(n=t.denom)||void 0===n?void 0:n.toUpperCase())==="UXION"?{amount:new a.Z(t.amount).div(new a.Z(10).pow(6)).toString(),denom:"XION"}:(null===(e=t.denom)||void 0===e?void 0:e.toUpperCase())==="XION"?{amount:t.amount,denom:"XION"}:{...t,denom:null===(o=t.denom)||void 0===o?void 0:o.toUpperCase()}},i=t=>{let n=o(t),e=new a.Z(n.amount);return"".concat(e.toFormat()," ").concat(n.denom)},r=()=>({amount:"0",denom:"xion"}),s=t=>t.reduce((t,n)=>({amount:(parseFloat(t.amount)+parseFloat(o(n).amount)).toString(),denom:n.denom}),r())},9016:function(t,n,e){"use strict";e.d(n,{Bv:function(){return a},Od:function(){return i},T$:function(){return o}});let{chainId:a}=e(3436).testnetChainInfo,o=void 0,i="https://rpc.xion-testnet.forbole.com"},22754:function(){},25805:function(){},63385:function(){},99646:function(t){t.exports={style:{fontFamily:"'__Inter_215590', '__Inter_Fallback_215590'",fontStyle:"normal"},className:"__className_215590"}}},function(t){t.O(0,[350,218,147,228,933,77,565,971,69,744],function(){return t(t.s=18127)}),_N_E=t.O()}]);