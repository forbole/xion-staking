(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82],{46601:function(){},89214:function(){},42480:function(){},85568:function(){},69386:function(){},31616:function(){},20131:function(){},16026:function(){},33370:function(){},88197:function(t,n,e){"use strict";e.d(n,{sT:function(){return S},wX:function(){return h},VZ:function(){return y},qp:function(){return D},_5:function(){return x},xu:function(){return A}});var a=e(22840),o=e(71694),i=e(66803);let r=null,l=async()=>r||(r=(await (0,o.C_)()).staking.validators("BOND_STATUS_BONDED").then(t=>(r=null,t))),s=null,u=async t=>{if((null==s?void 0:s[0])===t)return s[1];let n=(await (0,o.C_)()).staking.validator(t).then(n=>((null==s?void 0:s[0])===t&&(s=null),n.validator));return s=[t,n],n},d=null,c=async()=>d||(d=(await (0,o.C_)()).staking.pool().then(t=>(d=null,t.pool))),g=async t=>{let n=await (0,o.N$)();return await n.getBalance(t,"uxion")},v=async t=>{let n=await (0,o.C_)();return await n.staking.delegatorDelegations(t)},m=async t=>{let n=await (0,o.C_)();return await n.staking.delegatorUnbondingDelegations(t)},w=async(t,n)=>{let e=await (0,o.C_)(),r=await e.distribution.delegationRewards(t,n);return(await Promise.all(r.rewards.map(async t=>{if(0==t.denom.indexOf("ibc/")){var n;let a=await e.ibc.transfer.denomTrace(t.denom.substring(4));t.denom=(null===(n=a.denomTrace)||void 0===n?void 0:n.baseDenom)||t.denom}return t}))).filter(t=>{var n;return(null===(n=t.denom)||void 0===n?void 0:n.toUpperCase())==="UXION"}).map(t=>({amount:new a.Z(t.amount).div(new a.Z(10).pow(18)).toString(),denom:t.denom})).map(t=>(0,i.bI)(t))};var f=e(19807),p=e(62986);let h=async t=>{try{var n,e;t.dispatch((0,p.Kv)(!0));let[a,o]=await Promise.all([l(),c()]);t.dispatch((0,p.T2)({items:a.validators,nextKey:(null===(n=a.pagination)||void 0===n?void 0:n.nextKey)||null,total:(null===(e=a.pagination)||void 0===e?void 0:e.total)||null},!0)),t.dispatch((0,p.DD)(o)),t.dispatch((0,p.Kv)(!1))}catch(t){console.error("error fetching staking data:",t)}},y=async(t,n)=>{try{var e,a,o,r;n.dispatch((0,p.Kv)(!0));let[l,s,u]=await Promise.all([g(t),v(t).then(async n=>({items:await Promise.all(n.delegationResponses.map(async n=>({balance:n.balance,rewards:await w(t,n.delegation.validatorAddress).then(t=>(0,i.HJ)(t)),validatorAddress:n.delegation.validatorAddress}))),pagination:n.pagination})),m(t).then(t=>({items:t.unbondingResponses.reduce((t,n)=>(t.push(...n.entries.map(t=>({balance:{amount:t.balance,denom:"uxion"},completionTime:Number(t.completionTime.seconds),completionTimeNanos:t.completionTime.nanos,id:t.unbondingId.toString(),validator:n.validatorAddress}))),t),[]),pagination:t.pagination})).catch(()=>({items:[],pagination:null})).then(t=>({items:t.items,pagination:t.pagination}))]);n.dispatch((0,p.d0)(l)),n.dispatch((0,p.Qx)({items:s.items,nextKey:(null===(e=s.pagination)||void 0===e?void 0:e.nextKey)||null,total:(null===(a=s.pagination)||void 0===a?void 0:a.total)||null},!0)),n.dispatch((0,p.Kg)({items:u.items,nextKey:(null===(o=u.pagination)||void 0===o?void 0:o.nextKey)||null,total:(null===(r=u.pagination)||void 0===r?void 0:r.total)||null},!0)),n.dispatch((0,p.Kv)(!1))}catch(t){console.error("error fetching staking data:",t)}},x=async(t,n,e,a,o)=>(await (0,f.H0)(t,a,n,e),async()=>{await y(t.delegator,o)}),A=async(t,n,e,a,o)=>(await (0,f.vZ)(t,a,n,e),async()=>{await y(t.delegator,o)}),S=async(t,n,e)=>{await (0,f.YY)(t,n),await y(t.delegator,e)},D=async(t,n)=>{var e;if((null===(e=n.state.validatorDetails)||void 0===e?void 0:e.operatorAddress)===t)return n.state.validatorDetails;let a=await u(t);return n.dispatch((0,p.gT)(a)),a}},80469:function(t,n,e){"use strict";e.d(n,{f:function(){return u},n:function(){return s}});var a=e(23234),o=e(64090),i=e(88197),r=e(62986),l=e(544);let s=()=>{let t=(0,o.useRef)({}),n=(0,o.useContext)(l.Y);t.current.state=n.state,t.current.dispatch=n.dispatch;let{data:e,isConnected:i}=(0,a.hT)(),r=null==e?void 0:e.bech32Address;return{account:e,address:r,isConnected:i,staking:t.current}},u=()=>{let{address:t,isConnected:n,staking:e}=s();(0,o.useEffect)(()=>{(0,i.wX)(e)},[e]),(0,o.useEffect)(()=>{if(n&&t)return(0,i.VZ)(t,e),()=>{e.dispatch((0,r.kS)())}},[n,t,e])}},62986:function(t,n,e){"use strict";e.d(n,{DD:function(){return u},I6:function(){return f},Kg:function(){return l},Kv:function(){return o},Qx:function(){return r},T2:function(){return i},WY:function(){return w},ZG:function(){return c},d0:function(){return a},gT:function(){return s},kS:function(){return d}});let a=t=>({content:t,type:"SET_TOKENS"}),o=t=>({content:t,type:"SET_IS_INFO_LOADING"}),i=(t,n)=>({content:t,reset:n,type:"ADD_VALIDATORS"}),r=(t,n)=>({content:t,reset:n,type:"ADD_DELEGATIONS"}),l=(t,n)=>({content:t,reset:n,type:"ADD_UNBONDINGS"}),s=t=>({content:t,type:"SET_VALIDATOR_DETAILS"}),u=t=>({content:t,type:"SET_POOL"}),d=()=>({content:null,type:"LOGOUT"}),c=t=>({content:t,type:"SET_MODAL"}),g=t=>{let n=new Set;return t.filter(t=>!n.has(t.operatorAddress)&&(n.add(t.operatorAddress),!0))},v=t=>{let n=new Set;return t.filter(t=>!n.has(t.validatorAddress)&&(n.add(t.validatorAddress),!0))},m=t=>{let n=new Set;return t.filter(t=>{let e=t.id;return!n.has(e)&&(n.add(e),!0)})},w=t=>({content:t,type:"SET_IS_LOADING_BLOCKING"}),f=(t,n)=>{switch(n.type){case"SET_TOKENS":return{...t,tokens:n.content};case"ADD_VALIDATORS":{let e=!n.reset&&t.validators||{items:[],nextKey:null,total:null};return e.total=n.content.total,e.nextKey=n.content.nextKey,e.items=g(e.items.concat(n.content.items)),{...t,validators:e}}case"ADD_DELEGATIONS":{let e=!n.reset&&t.delegations||{items:[],nextKey:null,total:null};return e.total=n.content.total,e.nextKey=n.content.nextKey,e.items=v(n.content.items.concat(e.items)),{...t,delegations:e}}case"ADD_UNBONDINGS":{let e=!n.reset&&t.unbondings||{items:[],nextKey:null,total:null};return e.total=n.content.total,e.nextKey=n.content.nextKey,e.items=m(n.content.items.concat(e.items)),{...t,unbondings:e}}case"SET_IS_INFO_LOADING":return{...t,isInfoLoading:n.content};case"SET_VALIDATOR_DETAILS":return{...t,validatorDetails:n.content};case"SET_POOL":return{...t,pool:n.content};case"SET_MODAL":return{...t,modal:n.content};case"LOGOUT":return{...t,delegations:null,unbondings:null,validators:null};case"SET_IS_LOADING_BLOCKING":return{...t,isLoadingBlocking:n.content};default:return t}}},544:function(t,n,e){"use strict";e.d(n,{W:function(){return o},Y:function(){return i}});var a=e(64090);let o={delegations:null,isInfoLoading:!1,isLoadingBlocking:!1,modal:null,pool:null,tokens:null,unbondings:null,validatorDetails:null,validators:null},i=(0,a.createContext)({dispatch:()=>null,state:o})},71694:function(t,n,e){"use strict";let a,o;e.d(n,{C_:function(){return u},N$:function(){return d},v4:function(){return c}});var i=e(18722),r=e(58015),l=e(43890),s=e(9016);let u=()=>(a||(a=(async()=>{let t=await l.Tendermint34Client.connect(s.Od);return r.QueryClient.withExtensions(t,r.setupStakingExtension,r.setupDistributionExtension,r.setupIbcExtension)})()),a),d=()=>(o||(o=(async()=>await r.StargateClient.connect(s.Od))()),o),c=async()=>{let t=localStorage.getItem("xion-authz-temp-account");if(!t)return;let n=await i.DirectSecp256k1HdWallet.deserialize(t,"abstraxion"),e=await n.getAccounts().then(t=>{var n;return null===(n=t[0])||void 0===n?void 0:n.address});return{client:await r.SigningStargateClient.connectWithSigner(s.Od,n),granteeAddress:e}}},66803:function(t,n,e){"use strict";e.d(n,{HJ:function(){return s},IB:function(){return i},Jp:function(){return r},bI:function(){return o},kw:function(){return l}});var a=e(22840);let o=t=>{var n,e,o;return(null===(n=t.denom)||void 0===n?void 0:n.toUpperCase())==="UXION"?{amount:new a.Z(t.amount).div(new a.Z(10).pow(6)).toString(),denom:"XION"}:(null===(e=t.denom)||void 0===e?void 0:e.toUpperCase())==="XION"?{amount:t.amount,denom:"XION"}:{...t,denom:null===(o=t.denom)||void 0===o?void 0:o.toUpperCase()}},i=()=>({amount:"0",denom:"XION"}),r=t=>({amount:t.toString(),denom:"XION"}),l=t=>({amount:t.div(new a.Z(10).pow(6)).toString(),denom:"XION"}),s=t=>t.reduce((t,n)=>({amount:new a.Z(t.amount).plus(o(n).amount).toString(),denom:t.denom}),i())},9016:function(t,n,e){"use strict";e.d(n,{Ex:function(){return l},Jg:function(){return a},Od:function(){return i},T$:function(){return o},c1:function(){return s},sb:function(){return r}});let a=!0,o=void 0,i="https://rpc.xion-testnet.forbole.com",r="/xion-staking",l=10,s="".concat(r,"/default-avatar.svg")},77658:function(t,n,e){"use strict";e.d(n,{BR:function(){return o},Sf:function(){return a},gU:function(){return i},kC:function(){return r}});let a='<svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.24264 4.24264L8.48528 0H0L4.24264 4.24264Z" fill="#F2F2F2"/></svg>',o='<svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4.71289" y="4.71094" width="9.16672" height="11.5371" stroke="white" stroke-width="1.5"/><path d="M1 12.2593V2C1 1.44772 1.44772 1 2 1H11.0741" stroke="white" stroke-width="1.5"/></svg>',i='<svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="17.2353" height="11.9412" rx="1.5" stroke="white"/><path d="M0.5 14.1176V3.75012C0.503887 3.7521 0.507782 3.75406 0.511683 3.75601C1.06022 4.03029 1.7516 4.0298 2.29374 4.02942C2.31368 4.02941 2.33342 4.0294 2.35294 4.0294H17.6471C18.6704 4.0294 19.5 4.85899 19.5 5.88234V14.1176C19.5 15.141 18.6704 15.9706 17.6471 15.9706H2.35294C1.32959 15.9706 0.5 15.141 0.5 14.1176Z" fill="black" stroke="white"/><line x1="3.5293" y1="7.14746" x2="15.8822" y2="7.14746" stroke="white"/></svg>',r='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.941 6L12 10.941L7.059 6L6 7.05975L10.941 12L6 16.941L7.059 18L12 13.059L16.941 18L18 16.941L13.059 12L18 7.05975L16.941 6Z" fill="#6C6A6A"/></svg>'},19807:function(t,n,e){"use strict";e.d(n,{YY:function(){return w},sj:function(){return f},H0:function(){return v},vZ:function(){return m}});var a=e(22840),o=e(53856),i=e(62884),r=e(66803),l=e(97481),s=e(71694);let u=async(t,n)=>{let{client:e,granteeAddress:a}=await (0,s.v4)()||{};if(!e||!a)return null;let o=[{typeUrl:"/cosmos.authz.v1beta1.MsgExec",value:l.MsgExec.fromPartial({grantee:a,msgs:t.map(t=>e.registry.encodeAsAny(t))})}];return await e.simulate(a,o,n).then(t=>Math.ceil(2*t).toString()).catch(t=>(console.log("debug: core/base.ts: Estimate error",t),null))},d=async t=>{let{address:n,amount:e=[{amount:"1000",denom:"uxion"}],gasLimit:a="400000",memo:o="",msgs:i}=t;return{amount:e,gas:await u(i,o)||a,granter:n}},c=t=>n=>{if(console.log("debug: base.ts: result",n),!n.events.find(n=>n.type===t))throw console.error(n),Error("Out of gas");return n},g=t=>{throw console.error(t),t},v=async(t,n,e,o)=>{let l=new a.Z((0,r.bI)(e).amount).times(new a.Z(10).pow(6)).toString(),s={typeUrl:"/cosmos.staking.v1beta1.MsgDelegate",value:i.MsgDelegate.fromPartial({amount:{amount:l,denom:"uxion"},delegatorAddress:t.delegator,validatorAddress:t.validator})},u=await d({address:t.delegator,memo:o,msgs:[s]});return await n.signAndBroadcast(t.delegator,[s],u,o).then(c("delegate")).catch(g)},m=async(t,n,e,a)=>{let o={typeUrl:"/cosmos.staking.v1beta1.MsgUndelegate",value:i.MsgUndelegate.fromPartial({amount:e,delegatorAddress:t.delegator,validatorAddress:t.validator})},r=await d({address:t.delegator,memo:a,msgs:[o]});return await n.signAndBroadcast(t.delegator,[o],r,a).then(c("unbond")).catch(g)},w=async(t,n)=>{let e=[{typeUrl:"/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",value:o.MsgWithdrawDelegatorReward.fromPartial({delegatorAddress:t.delegator,validatorAddress:t.validator})}],a=await d({address:t.delegator,msgs:e});return await n.signAndBroadcast(t.delegator,e,a).then(c("withdraw_rewards")).catch(g)},f=t=>{let n=(0,r.bI)(t);return new a.Z(n.amount).gte(1e-4)}}}]);