(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{46601:function(){},89214:function(){},42480:function(){},85568:function(){},69386:function(){},31616:function(){},20131:function(){},16026:function(){},33370:function(){},25362:function(t,e,n){"use strict";n.d(e,{sT:function(){return D},wX:function(){return w},qp:function(){return A},_5:function(){return y},xu:function(){return h}});var a=n(21390),o=n(66803),r=n(53856),i=n(62884),s=n(97481),l=n(71694);let u=async(t,e)=>{let{client:n,granteeAddress:a}=await (0,l.v4)()||{};if(!n||!a)return null;let o=[{typeUrl:"/cosmos.authz.v1beta1.MsgExec",value:s.MsgExec.fromPartial({grantee:a,msgs:t.map(t=>n.registry.encodeAsAny(t))})}];return await n.simulate(a,o,e).then(t=>Math.ceil(2*t).toString()).catch(t=>(console.log("debug: core/base.ts: Estimate error",t),null))},d=async t=>{let{address:e,amount:n=[{amount:"1000",denom:"uxion"}],gasLimit:a="400000",memo:o="",msgs:r}=t;return{amount:n,gas:await u(r,o)||a,granter:e}},c=t=>e=>{if(console.log("debug: base.ts: result",e),!e.events.find(e=>e.type===t))throw console.error(e),Error("Out of gas");return e},g=t=>{throw console.error(t),t},m=async(t,e,n)=>{let a={typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:i.MsgDelegate.fromPartial({amount:n,delegatorAddress:t.delegator,validatorAddress:t.validator})},o=await d({address:t.delegator,msgs:[a]});return await e.signAndBroadcast(t.delegator,[a],o).then(c("delegate")).catch(g)},v=async(t,e,n)=>{let a={typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:i.MsgUndelegate.fromPartial({amount:n,delegatorAddress:t.delegator,validatorAddress:t.validator})},o=await d({address:t.delegator,msgs:[a]});return await e.signAndBroadcast(t.delegator,[a],o).then(c("unbond")).catch(g)},p=async(t,e)=>{let n=[{typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:r.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:t.delegator,validatorAddress:t.validator})}],a=await d({address:t.delegator,msgs:n});return await e.signAndBroadcast(t.delegator,n,a).then(c("withdraw_rewards")).catch(g)};var f=n(62986);let w=async(t,e)=>{try{var n,r,i,s,l,u;e.dispatch((0,f.Kv)(!0));let[d,c,g,m,v]=await Promise.all([(0,a.sb)(t),(0,a.Ld)(),(0,a.Mj)(),(0,a.cq)(t).then(async e=>({items:await Promise.all(e.delegationResponses.map(async e=>({balance:e.balance,rewards:await (0,a.rl)(t,e.delegation.validatorAddress).then(t=>(0,o.H)(t)),validatorAddress:e.delegation.validatorAddress}))),pagination:e.pagination})),(0,a.GE)(t).then(t=>({items:t.unbondingResponses.reduce((t,e)=>(t.push(...e.entries.map(t=>({balance:{amount:t.balance,denom:"uxion"},completionTime:Number(t.completionTime.seconds),completionTimeNanos:t.completionTime.nanos,id:t.unbondingId.toString(),validator:e.validatorAddress}))),t),[]),pagination:t.pagination})).catch(()=>({items:[],pagination:null})).then(t=>({items:t.items,pagination:t.pagination}))]);e.dispatch((0,f.d0)(d)),e.dispatch((0,f.T2)({items:c.validators,nextKey:(null===(n=c.pagination)||void 0===n?void 0:n.nextKey)||null,total:(null===(r=c.pagination)||void 0===r?void 0:r.total)||null},!0)),e.dispatch((0,f.Qx)({items:m.items,nextKey:(null===(i=m.pagination)||void 0===i?void 0:i.nextKey)||null,total:(null===(s=m.pagination)||void 0===s?void 0:s.total)||null},!0)),e.dispatch((0,f.Kg)({items:v.items,nextKey:(null===(l=v.pagination)||void 0===l?void 0:l.nextKey)||null,total:(null===(u=v.pagination)||void 0===u?void 0:u.total)||null},!0)),e.dispatch((0,f.DD)(g)),e.dispatch((0,f.Kv)(!1))}catch(t){console.error("error fetching staking data:",t)}},y=async(t,e,n)=>{await m(t,e,{amount:"1000",denom:"uxion"}),await w(t.delegator,n)},h=async(t,e,n)=>{await v(t,e,{amount:"1000",denom:"uxion"}),await w(t.delegator,n)},D=async(t,e,n)=>{await p(t,e),await w(t.delegator,n)},A=async(t,e)=>{var n;if((null===(n=e.state.validatorDetails)||void 0===n?void 0:n.operatorAddress)===t)return e.state.validatorDetails;let o=await (0,a.Ji)(t);return e.dispatch((0,f.gT)(o)),o}},80469:function(t,e,n){"use strict";n.d(e,{f:function(){return l},n:function(){return s}});var a=n(52674),o=n(64090),r=n(25362),i=n(544);let s=()=>{let t=(0,o.useRef)({}),e=(0,o.useContext)(i.Y);t.current.state=e.state,t.current.dispatch=e.dispatch;let{data:n,isConnected:r}=(0,a.hT)(),s=null==n?void 0:n.bech32Address;return{account:n,address:s,isConnected:r,staking:t.current}},l=()=>{let{address:t,isConnected:e,staking:n}=s();(0,o.useEffect)(()=>{e&&t&&(0,r.wX)(t,n)},[e,t,n])}},62986:function(t,e,n){"use strict";n.d(e,{DD:function(){return u},I6:function(){return m},Kg:function(){return s},Kv:function(){return o},Qx:function(){return i},T2:function(){return r},d0:function(){return a},gT:function(){return l}});let a=t=>({content:t,type:"SET_TOKENS"}),o=t=>({content:t,type:"SET_IS_INFO_LOADING"}),r=(t,e)=>({content:t,reset:e,type:"ADD_VALIDATORS"}),i=(t,e)=>({content:t,reset:e,type:"ADD_DELEGATIONS"}),s=(t,e)=>({content:t,reset:e,type:"ADD_UNBONDINGS"}),l=t=>({content:t,type:"SET_VALIDATOR_DETAILS"}),u=t=>({content:t,type:"SET_POOL"}),d=t=>{let e=new Set;return t.filter(t=>!e.has(t.operatorAddress)&&(e.add(t.operatorAddress),!0))},c=t=>{let e=new Set;return t.filter(t=>!e.has(t.validatorAddress)&&(e.add(t.validatorAddress),!0))},g=t=>{let e=new Set;return t.filter(t=>{let n=t.id;return!e.has(n)&&(e.add(n),!0)})},m=(t,e)=>{switch(e.type){case"SET_TOKENS":return{...t,tokens:e.content};case"ADD_VALIDATORS":{let n=!e.reset&&t.validators||{items:[],nextKey:null,total:null};return n.total=e.content.total,n.nextKey=e.content.nextKey,n.items=d(n.items.concat(e.content.items)),{...t,validators:n}}case"ADD_DELEGATIONS":{let n=!e.reset&&t.delegations||{items:[],nextKey:null,total:null};return n.total=e.content.total,n.nextKey=e.content.nextKey,n.items=c(e.content.items.concat(n.items)),{...t,delegations:n}}case"ADD_UNBONDINGS":{let n=!e.reset&&t.unbondings||{items:[],nextKey:null,total:null};return n.total=e.content.total,n.nextKey=e.content.nextKey,n.items=g(e.content.items.concat(n.items)),{...t,unbondings:n}}case"SET_IS_INFO_LOADING":return{...t,isInfoLoading:e.content};case"SET_VALIDATOR_DETAILS":return{...t,validatorDetails:e.content};case"SET_POOL":return{...t,pool:e.content};default:return t}}},544:function(t,e,n){"use strict";n.d(e,{W:function(){return o},Y:function(){return r}});var a=n(64090);let o={delegations:null,isInfoLoading:!1,pool:null,tokens:null,unbondings:null,validatorDetails:null,validators:null},r=(0,a.createContext)({dispatch:()=>null,state:o})},21390:function(t,e,n){"use strict";n.d(e,{GE:function(){return f},Ji:function(){return c},Ld:function(){return u},Mj:function(){return m},cq:function(){return p},rl:function(){return w},sb:function(){return v},wv:function(){return y}});var a=n(58015),o=n(22840),r=n(71694),i=n(66803),s=n(9016);let l=null,u=async()=>l||(l=(await (0,r.C_)()).staking.validators("BOND_STATUS_BONDED").then(t=>(l=null,t))),d=null,c=async t=>{if((null==d?void 0:d[0])===t)return d[1];let e=(await (0,r.C_)()).staking.validator(t).then(e=>((null==d?void 0:d[0])===t&&(d=null),e.validator));return d=[t,e],e},g=null,m=async()=>g||(g=(await (0,r.C_)()).staking.pool().then(t=>(g=null,t.pool))),v=async t=>{let e=await a.StargateClient.connect(s.Od);return await e.getBalance(t,"uxion")},p=async t=>{let e=await (0,r.C_)();return await e.staking.delegatorDelegations(t)},f=async t=>{let e=await (0,r.C_)();return await e.staking.delegatorUnbondingDelegations(t)},w=async(t,e)=>{let n=await (0,r.C_)(),a=await n.distribution.delegationRewards(t,e);return(await Promise.all(a.rewards.map(async t=>{if(0==t.denom.indexOf("ibc/")){var e;let a=await n.ibc.transfer.denomTrace(t.denom.substring(4));t.denom=(null===(e=a.denomTrace)||void 0===e?void 0:e.baseDenom)||t.denom}return t}))).filter(t=>{var e;return(null===(e=t.denom)||void 0===e?void 0:e.toUpperCase())==="UXION"}).map(t=>({amount:new o.Z(t.amount).div(new o.Z(10).pow(18)).toString(),denom:t.denom})).map(t=>(0,i.b)(t))},y=async(t,e,n)=>{let a=(await (0,r.g_)()).subscribeNewBlock(),o={complete:n,error:e,next:t};return a.addListener(o),()=>{a.removeListener(o)}}},71694:function(t,e,n){"use strict";n.d(e,{C_:function(){return s},g_:function(){return u},v4:function(){return l}});var a=n(18722),o=n(58015),r=n(43890),i=n(9016);let s=async()=>{let t=await r.Tendermint34Client.connect(i.Od);return o.QueryClient.withExtensions(t,o.setupStakingExtension,o.setupDistributionExtension,o.setupIbcExtension)},l=async()=>{let t=localStorage.getItem("xion-authz-temp-account");if(!t)return;let e=await a.DirectSecp256k1HdWallet.deserialize(t,"abstraxion"),n=await e.getAccounts().then(t=>{var e;return null===(e=t[0])||void 0===e?void 0:e.address});return{client:await o.SigningStargateClient.connectWithSigner(i.Od,e),granteeAddress:n}},u=()=>r.Tendermint34Client.connect(i.SO)},66803:function(t,e,n){"use strict";n.d(e,{H:function(){return i},b:function(){return o}});var a=n(22840);let o=t=>{var e,n,o;return(null===(e=t.denom)||void 0===e?void 0:e.toUpperCase())==="UXION"?{amount:new a.Z(t.amount).div(new a.Z(10).pow(6)).toString(),denom:"XION"}:(null===(n=t.denom)||void 0===n?void 0:n.toUpperCase())==="XION"?{amount:t.amount,denom:"XION"}:{...t,denom:null===(o=t.denom)||void 0===o?void 0:o.toUpperCase()}},r=()=>({amount:"0",denom:"xion"}),i=t=>t.reduce((t,e)=>({amount:new a.Z(t.amount).plus(o(e).amount).toString(),denom:t.denom}),r())},9016:function(t,e,n){"use strict";n.d(e,{Bv:function(){return a},Od:function(){return r},SO:function(){return i},T$:function(){return o}});let{chainId:a}=n(3436).testnetChainInfo,o=void 0,r="https://rpc.xion-testnet.forbole.com",i=r.replace("https://","wss://")}}]);