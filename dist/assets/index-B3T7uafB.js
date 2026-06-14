const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Doom-JAYCqeiO.js","assets/DosPlayer-Diwk1jvs.js","assets/DoomII-BWhMD5VW.js","assets/TombRaider-O1BFhY2g.js","assets/Persia-CaiZZtcF.js"])))=>i.map(i=>d[i]);
var lk=Object.defineProperty;var ak=(e,n,o)=>n in e?lk(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var Ne=(e,n,o)=>ak(e,typeof n!="symbol"?n+"":n,o);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(a){if(a.ep)return;a.ep=!0;const u=o(a);fetch(a.href,u)}})();function Mn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ud={exports:{}},ns={},dd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function ck(){if(Q0)return Pe;Q0=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function k(z){return z===null||typeof z!="object"?null:(z=w&&z[w]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function $(z,ee,ue){this.props=z,this.context=ee,this.refs=C,this.updater=ue||T}$.prototype.isReactComponent={},$.prototype.setState=function(z,ee){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,ee,"setState")},$.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function b(){}b.prototype=$.prototype;function j(z,ee,ue){this.props=z,this.context=ee,this.refs=C,this.updater=ue||T}var S=j.prototype=new b;S.constructor=j,E(S,$.prototype),S.isPureReactComponent=!0;var R=Array.isArray,M=Object.prototype.hasOwnProperty,V={current:null},Z={key:!0,ref:!0,__self:!0,__source:!0};function ne(z,ee,ue){var fe,Q={},Y=null,re=null;if(ee!=null)for(fe in ee.ref!==void 0&&(re=ee.ref),ee.key!==void 0&&(Y=""+ee.key),ee)M.call(ee,fe)&&!Z.hasOwnProperty(fe)&&(Q[fe]=ee[fe]);var H=arguments.length-2;if(H===1)Q.children=ue;else if(1<H){for(var A=Array(H),B=0;B<H;B++)A[B]=arguments[B+2];Q.children=A}if(z&&z.defaultProps)for(fe in H=z.defaultProps,H)Q[fe]===void 0&&(Q[fe]=H[fe]);return{$$typeof:e,type:z,key:Y,ref:re,props:Q,_owner:V.current}}function ie(z,ee){return{$$typeof:e,type:z.type,key:ee,ref:z.ref,props:z.props,_owner:z._owner}}function me(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function de(z){var ee={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ue){return ee[ue]})}var xe=/\/+/g;function ce(z,ee){return typeof z=="object"&&z!==null&&z.key!=null?de(""+z.key):ee.toString(36)}function G(z,ee,ue,fe,Q){var Y=typeof z;(Y==="undefined"||Y==="boolean")&&(z=null);var re=!1;if(z===null)re=!0;else switch(Y){case"string":case"number":re=!0;break;case"object":switch(z.$$typeof){case e:case n:re=!0}}if(re)return re=z,Q=Q(re),z=fe===""?"."+ce(re,0):fe,R(Q)?(ue="",z!=null&&(ue=z.replace(xe,"$&/")+"/"),G(Q,ee,ue,"",function(B){return B})):Q!=null&&(me(Q)&&(Q=ie(Q,ue+(!Q.key||re&&re.key===Q.key?"":(""+Q.key).replace(xe,"$&/")+"/")+z)),ee.push(Q)),1;if(re=0,fe=fe===""?".":fe+":",R(z))for(var H=0;H<z.length;H++){Y=z[H];var A=fe+ce(Y,H);re+=G(Y,ee,ue,A,Q)}else if(A=k(z),typeof A=="function")for(z=A.call(z),H=0;!(Y=z.next()).done;)Y=Y.value,A=fe+ce(Y,H++),re+=G(Y,ee,ue,A,Q);else if(Y==="object")throw ee=String(z),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return re}function N(z,ee,ue){if(z==null)return z;var fe=[],Q=0;return G(z,fe,"","",function(Y){return ee.call(ue,Y,Q++)}),fe}function I(z){if(z._status===-1){var ee=z._result;ee=ee(),ee.then(function(ue){(z._status===0||z._status===-1)&&(z._status=1,z._result=ue)},function(ue){(z._status===0||z._status===-1)&&(z._status=2,z._result=ue)}),z._status===-1&&(z._status=0,z._result=ee)}if(z._status===1)return z._result.default;throw z._result}var q={current:null},W={transition:null},F={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:W,ReactCurrentOwner:V};function P(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:N,forEach:function(z,ee,ue){N(z,function(){ee.apply(this,arguments)},ue)},count:function(z){var ee=0;return N(z,function(){ee++}),ee},toArray:function(z){return N(z,function(ee){return ee})||[]},only:function(z){if(!me(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Pe.Component=$,Pe.Fragment=o,Pe.Profiler=a,Pe.PureComponent=j,Pe.StrictMode=i,Pe.Suspense=h,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,Pe.act=P,Pe.cloneElement=function(z,ee,ue){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var fe=E({},z.props),Q=z.key,Y=z.ref,re=z._owner;if(ee!=null){if(ee.ref!==void 0&&(Y=ee.ref,re=V.current),ee.key!==void 0&&(Q=""+ee.key),z.type&&z.type.defaultProps)var H=z.type.defaultProps;for(A in ee)M.call(ee,A)&&!Z.hasOwnProperty(A)&&(fe[A]=ee[A]===void 0&&H!==void 0?H[A]:ee[A])}var A=arguments.length-2;if(A===1)fe.children=ue;else if(1<A){H=Array(A);for(var B=0;B<A;B++)H[B]=arguments[B+2];fe.children=H}return{$$typeof:e,type:z.type,key:Q,ref:Y,props:fe,_owner:re}},Pe.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:u,_context:z},z.Consumer=z},Pe.createElement=ne,Pe.createFactory=function(z){var ee=ne.bind(null,z);return ee.type=z,ee},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(z){return{$$typeof:p,render:z}},Pe.isValidElement=me,Pe.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:I}},Pe.memo=function(z,ee){return{$$typeof:m,type:z,compare:ee===void 0?null:ee}},Pe.startTransition=function(z){var ee=W.transition;W.transition={};try{z()}finally{W.transition=ee}},Pe.unstable_act=P,Pe.useCallback=function(z,ee){return q.current.useCallback(z,ee)},Pe.useContext=function(z){return q.current.useContext(z)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(z){return q.current.useDeferredValue(z)},Pe.useEffect=function(z,ee){return q.current.useEffect(z,ee)},Pe.useId=function(){return q.current.useId()},Pe.useImperativeHandle=function(z,ee,ue){return q.current.useImperativeHandle(z,ee,ue)},Pe.useInsertionEffect=function(z,ee){return q.current.useInsertionEffect(z,ee)},Pe.useLayoutEffect=function(z,ee){return q.current.useLayoutEffect(z,ee)},Pe.useMemo=function(z,ee){return q.current.useMemo(z,ee)},Pe.useReducer=function(z,ee,ue){return q.current.useReducer(z,ee,ue)},Pe.useRef=function(z){return q.current.useRef(z)},Pe.useState=function(z){return q.current.useState(z)},Pe.useSyncExternalStore=function(z,ee,ue){return q.current.useSyncExternalStore(z,ee,ue)},Pe.useTransition=function(){return q.current.useTransition()},Pe.version="18.3.1",Pe}var q0;function pp(){return q0||(q0=1,dd.exports=ck()),dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0;function uk(){if(G0)return ns;G0=1;var e=pp(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(p,h,m){var y,w={},k=null,T=null;m!==void 0&&(k=""+m),h.key!==void 0&&(k=""+h.key),h.ref!==void 0&&(T=h.ref);for(y in h)i.call(h,y)&&!u.hasOwnProperty(y)&&(w[y]=h[y]);if(p&&p.defaultProps)for(y in h=p.defaultProps,h)w[y]===void 0&&(w[y]=h[y]);return{$$typeof:n,type:p,key:k,ref:T,props:w,_owner:a.current}}return ns.Fragment=o,ns.jsx=d,ns.jsxs=d,ns}var Y0;function dk(){return Y0||(Y0=1,ud.exports=uk()),ud.exports}var l=dk(),g=pp();const J=Mn(g);var Ul={},fd={exports:{}},Kt={},pd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function fk(){return X0||(X0=1,function(e){function n(W,F){var P=W.length;W.push(F);e:for(;0<P;){var z=P-1>>>1,ee=W[z];if(0<a(ee,F))W[z]=F,W[P]=ee,P=z;else break e}}function o(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var F=W[0],P=W.pop();if(P!==F){W[0]=P;e:for(var z=0,ee=W.length,ue=ee>>>1;z<ue;){var fe=2*(z+1)-1,Q=W[fe],Y=fe+1,re=W[Y];if(0>a(Q,P))Y<ee&&0>a(re,Q)?(W[z]=re,W[Y]=P,z=Y):(W[z]=Q,W[fe]=P,z=fe);else if(Y<ee&&0>a(re,P))W[z]=re,W[Y]=P,z=Y;else break e}}return F}function a(W,F){var P=W.sortIndex-F.sortIndex;return P!==0?P:W.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var h=[],m=[],y=1,w=null,k=3,T=!1,E=!1,C=!1,$=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var F=o(m);F!==null;){if(F.callback===null)i(m);else if(F.startTime<=W)i(m),F.sortIndex=F.expirationTime,n(h,F);else break;F=o(m)}}function R(W){if(C=!1,S(W),!E)if(o(h)!==null)E=!0,I(M);else{var F=o(m);F!==null&&q(R,F.startTime-W)}}function M(W,F){E=!1,C&&(C=!1,b(ne),ne=-1),T=!0;var P=k;try{for(S(F),w=o(h);w!==null&&(!(w.expirationTime>F)||W&&!de());){var z=w.callback;if(typeof z=="function"){w.callback=null,k=w.priorityLevel;var ee=z(w.expirationTime<=F);F=e.unstable_now(),typeof ee=="function"?w.callback=ee:w===o(h)&&i(h),S(F)}else i(h);w=o(h)}if(w!==null)var ue=!0;else{var fe=o(m);fe!==null&&q(R,fe.startTime-F),ue=!1}return ue}finally{w=null,k=P,T=!1}}var V=!1,Z=null,ne=-1,ie=5,me=-1;function de(){return!(e.unstable_now()-me<ie)}function xe(){if(Z!==null){var W=e.unstable_now();me=W;var F=!0;try{F=Z(!0,W)}finally{F?ce():(V=!1,Z=null)}}else V=!1}var ce;if(typeof j=="function")ce=function(){j(xe)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,N=G.port2;G.port1.onmessage=xe,ce=function(){N.postMessage(null)}}else ce=function(){$(xe,0)};function I(W){Z=W,V||(V=!0,ce())}function q(W,F){ne=$(function(){W(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){E||T||(E=!0,I(M))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return k},e.unstable_getFirstCallbackNode=function(){return o(h)},e.unstable_next=function(W){switch(k){case 1:case 2:case 3:var F=3;break;default:F=k}var P=k;k=F;try{return W()}finally{k=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,F){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var P=k;k=W;try{return F()}finally{k=P}},e.unstable_scheduleCallback=function(W,F,P){var z=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?z+P:z):P=z,W){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=P+ee,W={id:y++,callback:F,priorityLevel:W,startTime:P,expirationTime:ee,sortIndex:-1},P>z?(W.sortIndex=P,n(m,W),o(h)===null&&W===o(m)&&(C?(b(ne),ne=-1):C=!0,q(R,P-z))):(W.sortIndex=ee,n(h,W),E||T||(E=!0,I(M))),W},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(W){var F=k;return function(){var P=k;k=F;try{return W.apply(this,arguments)}finally{k=P}}}}(hd)),hd}var J0;function pk(){return J0||(J0=1,pd.exports=fk()),pd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function hk(){if(Z0)return Kt;Z0=1;var e=pp(),n=pk();function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)i.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function k(t){return h.call(w,t)?!0:h.call(y,t)?!1:m.test(t)?w[t]=!0:(y[t]=!0,!1)}function T(t,r,s,c){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,r,s,c){if(r===null||typeof r>"u"||T(t,r,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function C(t,r,s,c,f,x,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=r,this.sanitizeURL=x,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];$[r]=new C(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function j(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(b,j);$[r]=new C(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(b,j);$[r]=new C(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(b,j);$[r]=new C(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,s,c){var f=$.hasOwnProperty(r)?$[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,s,f,c)&&(s=null),c||f===null?k(r)&&(s===null?t.removeAttribute(r):t.setAttribute(r,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(r=f.attributeName,c=f.attributeNamespace,s===null?t.removeAttribute(r):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,c?t.setAttributeNS(c,r,s):t.setAttribute(r,s))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),V=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),ne=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),de=Symbol.for("react.context"),xe=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),W=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var P=Object.assign,z;function ee(t){if(z===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+t}var ue=!1;function fe(t,r){if(!t||ue)return"";ue=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(X){var c=X}Reflect.construct(t,[],r)}else{try{r.call()}catch(X){c=X}t.call(r.prototype)}else{try{throw Error()}catch(X){c=X}t()}}catch(X){if(X&&c&&typeof X.stack=="string"){for(var f=X.stack.split(`
`),x=c.stack.split(`
`),v=f.length-1,D=x.length-1;1<=v&&0<=D&&f[v]!==x[D];)D--;for(;1<=v&&0<=D;v--,D--)if(f[v]!==x[D]){if(v!==1||D!==1)do if(v--,D--,0>D||f[v]!==x[D]){var O=`
`+f[v].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=v&&0<=D);break}}}finally{ue=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?ee(t):""}function Q(t){switch(t.tag){case 5:return ee(t.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return t=fe(t.type,!1),t;case 11:return t=fe(t.type.render,!1),t;case 1:return t=fe(t.type,!0),t;default:return""}}function Y(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Z:return"Fragment";case V:return"Portal";case ie:return"Profiler";case ne:return"StrictMode";case ce:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case de:return(t.displayName||"Context")+".Consumer";case me:return(t._context.displayName||"Context")+".Provider";case xe:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return r=t.displayName||null,r!==null?r:Y(t.type)||"Memo";case I:r=t._payload,t=t._init;try{return Y(t(r))}catch{}}return null}function re(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(r);case 8:return r===ne?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function H(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function B(t){var r=A(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,x=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,x.call(this,v)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function le(t){t._valueTracker||(t._valueTracker=B(t))}function he(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return t&&(c=A(t)?t.checked?"true":"false":t.value),t=c,t!==s?(r.setValue(t),!0):!1}function ge(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function je(t,r){var s=r.checked;return P({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Te(t,r){var s=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;s=H(r.value!=null?r.value:s),t._wrapperState={initialChecked:c,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Me(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function Je(t,r){Me(t,r);var s=H(r.value),c=r.type;if(s!=null)c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?zt(t,r.type,s):r.hasOwnProperty("defaultValue")&&zt(t,r.type,H(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Xt(t,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,s||r===t.value||(t.value=r),t.defaultValue=r}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function zt(t,r,s){(r!=="number"||ge(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var kn=Array.isArray;function fn(t,r,s,c){if(t=t.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=r.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&c&&(t[s].defaultSelected=!0)}else{for(s=""+H(s),r=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function At(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return P({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qe(t,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(o(92));if(kn(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),s=r}t._wrapperState={initialValue:H(s)}}function Jt(t,r){var s=H(r.value),c=H(r.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),r.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),c!=null&&(t.defaultValue=""+c)}function xi(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function sh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bc(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?sh(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ls,lh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,c,f){MSApp.execUnsafeLocalFunction(function(){return t(r,s,c,f)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function yi(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(wi).forEach(function(t){f1.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),wi[r]=wi[t]})});function ah(t,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||wi.hasOwnProperty(t)&&wi[t]?(""+r).trim():r+"px"}function ch(t,r){t=t.style;for(var s in r)if(r.hasOwnProperty(s)){var c=s.indexOf("--")===0,f=ah(s,r[s],c);s==="float"&&(s="cssFloat"),c?t.setProperty(s,f):t[s]=f}}var p1=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kc(t,r){if(r){if(p1[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function Sc(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jc=null;function Cc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,ko=null,So=null;function uh(t){if(t=Bi(t)){if(typeof Ec!="function")throw Error(o(280));var r=t.stateNode;r&&(r=il(r),Ec(t.stateNode,t.type,r))}}function dh(t){ko?So?So.push(t):So=[t]:ko=t}function fh(){if(ko){var t=ko,r=So;if(So=ko=null,uh(t),r)for(t=0;t<r.length;t++)uh(r[t])}}function ph(t,r){return t(r)}function hh(){}var $c=!1;function mh(t,r,s){if($c)return t(r,s);$c=!0;try{return ph(t,r,s)}finally{$c=!1,(ko!==null||So!==null)&&(hh(),fh())}}function vi(t,r){var s=t.stateNode;if(s===null)return null;var c=il(s);if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(o(231,r,typeof s));return s}var Tc=!1;if(p)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Tc=!1}function h1(t,r,s,c,f,x,v,D,O){var X=Array.prototype.slice.call(arguments,3);try{r.apply(s,X)}catch(se){this.onError(se)}}var ki=!1,Os=null,zs=!1,Ac=null,m1={onError:function(t){ki=!0,Os=t}};function g1(t,r,s,c,f,x,v,D,O){ki=!1,Os=null,h1.apply(m1,arguments)}function x1(t,r,s,c,f,x,v,D,O){if(g1.apply(this,arguments),ki){if(ki){var X=Os;ki=!1,Os=null}else throw Error(o(198));zs||(zs=!0,Ac=X)}}function Kr(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function gh(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function xh(t){if(Kr(t)!==t)throw Error(o(188))}function y1(t){var r=t.alternate;if(!r){if(r=Kr(t),r===null)throw Error(o(188));return r!==t?null:t}for(var s=t,c=r;;){var f=s.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===s)return xh(f),t;if(x===c)return xh(f),r;x=x.sibling}throw Error(o(188))}if(s.return!==c.return)s=f,c=x;else{for(var v=!1,D=f.child;D;){if(D===s){v=!0,s=f,c=x;break}if(D===c){v=!0,c=f,s=x;break}D=D.sibling}if(!v){for(D=x.child;D;){if(D===s){v=!0,s=x,c=f;break}if(D===c){v=!0,c=x,s=f;break}D=D.sibling}if(!v)throw Error(o(189))}}if(s.alternate!==c)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?t:r}function yh(t){return t=y1(t),t!==null?wh(t):null}function wh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=wh(t);if(r!==null)return r;t=t.sibling}return null}var vh=n.unstable_scheduleCallback,bh=n.unstable_cancelCallback,w1=n.unstable_shouldYield,v1=n.unstable_requestPaint,it=n.unstable_now,b1=n.unstable_getCurrentPriorityLevel,Rc=n.unstable_ImmediatePriority,kh=n.unstable_UserBlockingPriority,_s=n.unstable_NormalPriority,k1=n.unstable_LowPriority,Sh=n.unstable_IdlePriority,Fs=null,_n=null;function S1(t){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Fs,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:E1,j1=Math.log,C1=Math.LN2;function E1(t){return t>>>=0,t===0?32:31-(j1(t)/C1|0)|0}var Bs=64,Ws=4194304;function Si(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hs(t,r){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes,v=s&268435455;if(v!==0){var D=v&~f;D!==0?c=Si(D):(x&=v,x!==0&&(c=Si(x)))}else v=s&~f,v!==0?c=Si(v):x!==0&&(c=Si(x));if(c===0)return 0;if(r!==0&&r!==c&&!(r&f)&&(f=c&-c,x=r&-r,f>=x||f===16&&(x&4194240)!==0))return r;if(c&4&&(c|=s&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)s=31-Sn(r),f=1<<s,c|=t[s],r&=~f;return c}function $1(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function T1(t,r){for(var s=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,x=t.pendingLanes;0<x;){var v=31-Sn(x),D=1<<v,O=f[v];O===-1?(!(D&s)||D&c)&&(f[v]=$1(D,r)):O<=r&&(t.expiredLanes|=D),x&=~D}}function Dc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jh(){var t=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),t}function Ic(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function ji(t,r,s){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-Sn(r),t[r]=s}function A1(t,r){var s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-Sn(s),x=1<<f;r[f]=0,c[f]=-1,t[f]=-1,s&=~x}}function Pc(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var c=31-Sn(s),f=1<<c;f&r|t[c]&r&&(t[c]|=r),s&=~f}}var He=0;function Ch(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Eh,Nc,$h,Th,Ah,Mc=!1,Us=[],pr=null,hr=null,mr=null,Ci=new Map,Ei=new Map,gr=[],R1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(t,r){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Ci.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(r.pointerId)}}function $i(t,r,s,c,f,x){return t===null||t.nativeEvent!==x?(t={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},r!==null&&(r=Bi(r),r!==null&&Nc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function D1(t,r,s,c,f){switch(r){case"focusin":return pr=$i(pr,t,r,s,c,f),!0;case"dragenter":return hr=$i(hr,t,r,s,c,f),!0;case"mouseover":return mr=$i(mr,t,r,s,c,f),!0;case"pointerover":var x=f.pointerId;return Ci.set(x,$i(Ci.get(x)||null,t,r,s,c,f)),!0;case"gotpointercapture":return x=f.pointerId,Ei.set(x,$i(Ei.get(x)||null,t,r,s,c,f)),!0}return!1}function Dh(t){var r=Qr(t.target);if(r!==null){var s=Kr(r);if(s!==null){if(r=s.tag,r===13){if(r=gh(s),r!==null){t.blockedOn=r,Ah(t.priority,function(){$h(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=Oc(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);jc=c,s.target.dispatchEvent(c),jc=null}else return r=Bi(s),r!==null&&Nc(r),t.blockedOn=s,!1;r.shift()}return!0}function Ih(t,r,s){Vs(t)&&s.delete(r)}function I1(){Mc=!1,pr!==null&&Vs(pr)&&(pr=null),hr!==null&&Vs(hr)&&(hr=null),mr!==null&&Vs(mr)&&(mr=null),Ci.forEach(Ih),Ei.forEach(Ih)}function Ti(t,r){t.blockedOn===r&&(t.blockedOn=null,Mc||(Mc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,I1)))}function Ai(t){function r(f){return Ti(f,t)}if(0<Us.length){Ti(Us[0],t);for(var s=1;s<Us.length;s++){var c=Us[s];c.blockedOn===t&&(c.blockedOn=null)}}for(pr!==null&&Ti(pr,t),hr!==null&&Ti(hr,t),mr!==null&&Ti(mr,t),Ci.forEach(r),Ei.forEach(r),s=0;s<gr.length;s++)c=gr[s],c.blockedOn===t&&(c.blockedOn=null);for(;0<gr.length&&(s=gr[0],s.blockedOn===null);)Dh(s),s.blockedOn===null&&gr.shift()}var jo=R.ReactCurrentBatchConfig,Ks=!0;function P1(t,r,s,c){var f=He,x=jo.transition;jo.transition=null;try{He=1,Lc(t,r,s,c)}finally{He=f,jo.transition=x}}function N1(t,r,s,c){var f=He,x=jo.transition;jo.transition=null;try{He=4,Lc(t,r,s,c)}finally{He=f,jo.transition=x}}function Lc(t,r,s,c){if(Ks){var f=Oc(t,r,s,c);if(f===null)eu(t,r,c,Qs,s),Rh(t,c);else if(D1(f,t,r,s,c))c.stopPropagation();else if(Rh(t,c),r&4&&-1<R1.indexOf(t)){for(;f!==null;){var x=Bi(f);if(x!==null&&Eh(x),x=Oc(t,r,s,c),x===null&&eu(t,r,c,Qs,s),x===f)break;f=x}f!==null&&c.stopPropagation()}else eu(t,r,c,null,s)}}var Qs=null;function Oc(t,r,s,c){if(Qs=null,t=Cc(c),t=Qr(t),t!==null)if(r=Kr(t),r===null)t=null;else if(s=r.tag,s===13){if(t=gh(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Qs=t,null}function Ph(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b1()){case Rc:return 1;case kh:return 4;case _s:case k1:return 16;case Sh:return 536870912;default:return 16}default:return 16}}var xr=null,zc=null,qs=null;function Nh(){if(qs)return qs;var t,r=zc,s=r.length,c,f="value"in xr?xr.value:xr.textContent,x=f.length;for(t=0;t<s&&r[t]===f[t];t++);var v=s-t;for(c=1;c<=v&&r[s-c]===f[x-c];c++);return qs=f.slice(t,1<c?1-c:void 0)}function Gs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Ys(){return!0}function Mh(){return!1}function Zt(t){function r(s,c,f,x,v){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=v,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(x):x[D]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ys:Mh,this.isPropagationStopped=Mh,this}return P(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ys)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ys)},persist:function(){},isPersistent:Ys}),r}var Co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_c=Zt(Co),Ri=P({},Co,{view:0,detail:0}),M1=Zt(Ri),Fc,Bc,Di,Xs=P({},Ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Di&&(Di&&t.type==="mousemove"?(Fc=t.screenX-Di.screenX,Bc=t.screenY-Di.screenY):Bc=Fc=0,Di=t),Fc)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Lh=Zt(Xs),L1=P({},Xs,{dataTransfer:0}),O1=Zt(L1),z1=P({},Ri,{relatedTarget:0}),Wc=Zt(z1),_1=P({},Co,{animationName:0,elapsedTime:0,pseudoElement:0}),F1=Zt(_1),B1=P({},Co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),W1=Zt(B1),H1=P({},Co,{data:0}),Oh=Zt(H1),U1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Q1(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=K1[t])?!!r[t]:!1}function Hc(){return Q1}var q1=P({},Ri,{key:function(t){if(t.key){var r=U1[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Gs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?V1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?Gs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),G1=Zt(q1),Y1=P({},Xs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zh=Zt(Y1),X1=P({},Ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),J1=Zt(X1),Z1=P({},Co,{propertyName:0,elapsedTime:0,pseudoElement:0}),eb=Zt(Z1),tb=P({},Xs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nb=Zt(tb),rb=[9,13,27,32],Uc=p&&"CompositionEvent"in window,Ii=null;p&&"documentMode"in document&&(Ii=document.documentMode);var ob=p&&"TextEvent"in window&&!Ii,_h=p&&(!Uc||Ii&&8<Ii&&11>=Ii),Fh=" ",Bh=!1;function Wh(t,r){switch(t){case"keyup":return rb.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Eo=!1;function ib(t,r){switch(t){case"compositionend":return Hh(r);case"keypress":return r.which!==32?null:(Bh=!0,Fh);case"textInput":return t=r.data,t===Fh&&Bh?null:t;default:return null}}function sb(t,r){if(Eo)return t==="compositionend"||!Uc&&Wh(t,r)?(t=Nh(),qs=zc=xr=null,Eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return _h&&r.locale!=="ko"?null:r.data;default:return null}}var lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!lb[t.type]:r==="textarea"}function Vh(t,r,s,c){dh(c),r=nl(r,"onChange"),0<r.length&&(s=new _c("onChange","change",null,s,c),t.push({event:s,listeners:r}))}var Pi=null,Ni=null;function ab(t){cm(t,0)}function Js(t){var r=Do(t);if(he(r))return t}function cb(t,r){if(t==="change")return r}var Kh=!1;if(p){var Vc;if(p){var Kc="oninput"in document;if(!Kc){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),Kc=typeof Qh.oninput=="function"}Vc=Kc}else Vc=!1;Kh=Vc&&(!document.documentMode||9<document.documentMode)}function qh(){Pi&&(Pi.detachEvent("onpropertychange",Gh),Ni=Pi=null)}function Gh(t){if(t.propertyName==="value"&&Js(Ni)){var r=[];Vh(r,Ni,t,Cc(t)),mh(ab,r)}}function ub(t,r,s){t==="focusin"?(qh(),Pi=r,Ni=s,Pi.attachEvent("onpropertychange",Gh)):t==="focusout"&&qh()}function db(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Js(Ni)}function fb(t,r){if(t==="click")return Js(r)}function pb(t,r){if(t==="input"||t==="change")return Js(r)}function hb(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var jn=typeof Object.is=="function"?Object.is:hb;function Mi(t,r){if(jn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!h.call(r,f)||!jn(t[f],r[f]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xh(t,r){var s=Yh(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=r&&c>=r)return{node:s,offset:r-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Yh(s)}}function Jh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Jh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Zh(){for(var t=window,r=ge();r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=ge(t.document)}return r}function Qc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function mb(t){var r=Zh(),s=t.focusedElem,c=t.selectionRange;if(r!==s&&s&&s.ownerDocument&&Jh(s.ownerDocument.documentElement,s)){if(c!==null&&Qc(s)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(t,s.value.length);else if(t=(r=s.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,x=Math.min(c.start,f);c=c.end===void 0?x:Math.min(c.end,f),!t.extend&&x>c&&(f=c,c=x,x=f),f=Xh(s,x);var v=Xh(s,c);f&&v&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),x>c?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=s;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)t=r[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gb=p&&"documentMode"in document&&11>=document.documentMode,$o=null,qc=null,Li=null,Gc=!1;function em(t,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Gc||$o==null||$o!==ge(c)||(c=$o,"selectionStart"in c&&Qc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Li&&Mi(Li,c)||(Li=c,c=nl(qc,"onSelect"),0<c.length&&(r=new _c("onSelect","select",null,r,s),t.push({event:r,listeners:c}),r.target=$o)))}function Zs(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var To={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},Yc={},tm={};p&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function el(t){if(Yc[t])return Yc[t];if(!To[t])return t;var r=To[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in tm)return Yc[t]=r[s];return t}var nm=el("animationend"),rm=el("animationiteration"),om=el("animationstart"),im=el("transitionend"),sm=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,r){sm.set(t,r),u(r,[t])}for(var Xc=0;Xc<lm.length;Xc++){var Jc=lm[Xc],xb=Jc.toLowerCase(),yb=Jc[0].toUpperCase()+Jc.slice(1);yr(xb,"on"+yb)}yr(nm,"onAnimationEnd"),yr(rm,"onAnimationIteration"),yr(om,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(im,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function am(t,r,s){var c=t.type||"unknown-event";t.currentTarget=s,x1(c,r,void 0,t),t.currentTarget=null}function cm(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],f=c.event;c=c.listeners;e:{var x=void 0;if(r)for(var v=c.length-1;0<=v;v--){var D=c[v],O=D.instance,X=D.currentTarget;if(D=D.listener,O!==x&&f.isPropagationStopped())break e;am(f,D,X),x=O}else for(v=0;v<c.length;v++){if(D=c[v],O=D.instance,X=D.currentTarget,D=D.listener,O!==x&&f.isPropagationStopped())break e;am(f,D,X),x=O}}}if(zs)throw t=Ac,zs=!1,Ac=null,t}function qe(t,r){var s=r[su];s===void 0&&(s=r[su]=new Set);var c=t+"__bubble";s.has(c)||(um(r,t,2,!1),s.add(c))}function Zc(t,r,s){var c=0;r&&(c|=4),um(s,t,c,r)}var tl="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[tl]){t[tl]=!0,i.forEach(function(s){s!=="selectionchange"&&(wb.has(s)||Zc(s,!1,t),Zc(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[tl]||(r[tl]=!0,Zc("selectionchange",!1,r))}}function um(t,r,s,c){switch(Ph(r)){case 1:var f=P1;break;case 4:f=N1;break;default:f=Lc}s=f.bind(null,r,s,t),f=void 0,!Tc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(r,s,{capture:!0,passive:f}):t.addEventListener(r,s,!0):f!==void 0?t.addEventListener(r,s,{passive:f}):t.addEventListener(r,s,!1)}function eu(t,r,s,c,f){var x=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var D=c.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var O=v.tag;if((O===3||O===4)&&(O=v.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;v=v.return}for(;D!==null;){if(v=Qr(D),v===null)return;if(O=v.tag,O===5||O===6){c=x=v;continue e}D=D.parentNode}}c=c.return}mh(function(){var X=x,se=Cc(s),ae=[];e:{var oe=sm.get(t);if(oe!==void 0){var we=_c,be=t;switch(t){case"keypress":if(Gs(s)===0)break e;case"keydown":case"keyup":we=G1;break;case"focusin":be="focus",we=Wc;break;case"focusout":be="blur",we=Wc;break;case"beforeblur":case"afterblur":we=Wc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=J1;break;case nm:case rm:case om:we=F1;break;case im:we=eb;break;case"scroll":we=M1;break;case"wheel":we=nb;break;case"copy":case"cut":case"paste":we=W1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=zh}var ke=(r&4)!==0,st=!ke&&t==="scroll",U=ke?oe!==null?oe+"Capture":null:oe;ke=[];for(var _=X,K;_!==null;){K=_;var pe=K.stateNode;if(K.tag===5&&pe!==null&&(K=pe,U!==null&&(pe=vi(_,U),pe!=null&&ke.push(_i(_,pe,K)))),st)break;_=_.return}0<ke.length&&(oe=new we(oe,be,null,s,se),ae.push({event:oe,listeners:ke}))}}if(!(r&7)){e:{if(oe=t==="mouseover"||t==="pointerover",we=t==="mouseout"||t==="pointerout",oe&&s!==jc&&(be=s.relatedTarget||s.fromElement)&&(Qr(be)||be[Zn]))break e;if((we||oe)&&(oe=se.window===se?se:(oe=se.ownerDocument)?oe.defaultView||oe.parentWindow:window,we?(be=s.relatedTarget||s.toElement,we=X,be=be?Qr(be):null,be!==null&&(st=Kr(be),be!==st||be.tag!==5&&be.tag!==6)&&(be=null)):(we=null,be=X),we!==be)){if(ke=Lh,pe="onMouseLeave",U="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(ke=zh,pe="onPointerLeave",U="onPointerEnter",_="pointer"),st=we==null?oe:Do(we),K=be==null?oe:Do(be),oe=new ke(pe,_+"leave",we,s,se),oe.target=st,oe.relatedTarget=K,pe=null,Qr(se)===X&&(ke=new ke(U,_+"enter",be,s,se),ke.target=K,ke.relatedTarget=st,pe=ke),st=pe,we&&be)t:{for(ke=we,U=be,_=0,K=ke;K;K=Ao(K))_++;for(K=0,pe=U;pe;pe=Ao(pe))K++;for(;0<_-K;)ke=Ao(ke),_--;for(;0<K-_;)U=Ao(U),K--;for(;_--;){if(ke===U||U!==null&&ke===U.alternate)break t;ke=Ao(ke),U=Ao(U)}ke=null}else ke=null;we!==null&&dm(ae,oe,we,ke,!1),be!==null&&st!==null&&dm(ae,st,be,ke,!0)}}e:{if(oe=X?Do(X):window,we=oe.nodeName&&oe.nodeName.toLowerCase(),we==="select"||we==="input"&&oe.type==="file")var Se=cb;else if(Uh(oe))if(Kh)Se=pb;else{Se=db;var Ee=ub}else(we=oe.nodeName)&&we.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(Se=fb);if(Se&&(Se=Se(t,X))){Vh(ae,Se,s,se);break e}Ee&&Ee(t,oe,X),t==="focusout"&&(Ee=oe._wrapperState)&&Ee.controlled&&oe.type==="number"&&zt(oe,"number",oe.value)}switch(Ee=X?Do(X):window,t){case"focusin":(Uh(Ee)||Ee.contentEditable==="true")&&($o=Ee,qc=X,Li=null);break;case"focusout":Li=qc=$o=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,em(ae,s,se);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":em(ae,s,se)}var $e;if(Uc)e:{switch(t){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Eo?Wh(t,s)&&(Ae="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ae="onCompositionStart");Ae&&(_h&&s.locale!=="ko"&&(Eo||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Eo&&($e=Nh()):(xr=se,zc="value"in xr?xr.value:xr.textContent,Eo=!0)),Ee=nl(X,Ae),0<Ee.length&&(Ae=new Oh(Ae,t,null,s,se),ae.push({event:Ae,listeners:Ee}),$e?Ae.data=$e:($e=Hh(s),$e!==null&&(Ae.data=$e)))),($e=ob?ib(t,s):sb(t,s))&&(X=nl(X,"onBeforeInput"),0<X.length&&(se=new Oh("onBeforeInput","beforeinput",null,s,se),ae.push({event:se,listeners:X}),se.data=$e))}cm(ae,r)})}function _i(t,r,s){return{instance:t,listener:r,currentTarget:s}}function nl(t,r){for(var s=r+"Capture",c=[];t!==null;){var f=t,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=vi(t,s),x!=null&&c.unshift(_i(t,x,f)),x=vi(t,r),x!=null&&c.push(_i(t,x,f))),t=t.return}return c}function Ao(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dm(t,r,s,c,f){for(var x=r._reactName,v=[];s!==null&&s!==c;){var D=s,O=D.alternate,X=D.stateNode;if(O!==null&&O===c)break;D.tag===5&&X!==null&&(D=X,f?(O=vi(s,x),O!=null&&v.unshift(_i(s,O,D))):f||(O=vi(s,x),O!=null&&v.push(_i(s,O,D)))),s=s.return}v.length!==0&&t.push({event:r,listeners:v})}var vb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function fm(t){return(typeof t=="string"?t:""+t).replace(vb,`
`).replace(bb,"")}function rl(t,r,s){if(r=fm(r),fm(t)!==r&&s)throw Error(o(425))}function ol(){}var tu=null,nu=null;function ru(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ou=typeof setTimeout=="function"?setTimeout:void 0,kb=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,Sb=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(t){return pm.resolve(null).then(t).catch(jb)}:ou;function jb(t){setTimeout(function(){throw t})}function iu(t,r){var s=r,c=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(c===0){t.removeChild(f),Ai(r);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=f}while(s);Ai(r)}function wr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function hm(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),Fn="__reactFiber$"+Ro,Fi="__reactProps$"+Ro,Zn="__reactContainer$"+Ro,su="__reactEvents$"+Ro,Cb="__reactListeners$"+Ro,Eb="__reactHandles$"+Ro;function Qr(t){var r=t[Fn];if(r)return r;for(var s=t.parentNode;s;){if(r=s[Zn]||s[Fn]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=hm(t);t!==null;){if(s=t[Fn])return s;t=hm(t)}return r}t=s,s=t.parentNode}return null}function Bi(t){return t=t[Fn]||t[Zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Do(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function il(t){return t[Fi]||null}var lu=[],Io=-1;function vr(t){return{current:t}}function Ge(t){0>Io||(t.current=lu[Io],lu[Io]=null,Io--)}function Ke(t,r){Io++,lu[Io]=t.current,t.current=r}var br={},Rt=vr(br),Bt=vr(!1),qr=br;function Po(t,r){var s=t.type.contextTypes;if(!s)return br;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in s)f[x]=r[x];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function Wt(t){return t=t.childContextTypes,t!=null}function sl(){Ge(Bt),Ge(Rt)}function mm(t,r,s){if(Rt.current!==br)throw Error(o(168));Ke(Rt,r),Ke(Bt,s)}function gm(t,r,s){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(o(108,re(t)||"Unknown",f));return P({},s,c)}function ll(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,qr=Rt.current,Ke(Rt,t),Ke(Bt,Bt.current),!0}function xm(t,r,s){var c=t.stateNode;if(!c)throw Error(o(169));s?(t=gm(t,r,qr),c.__reactInternalMemoizedMergedChildContext=t,Ge(Bt),Ge(Rt),Ke(Rt,t)):Ge(Bt),Ke(Bt,s)}var er=null,al=!1,au=!1;function ym(t){er===null?er=[t]:er.push(t)}function $b(t){al=!0,ym(t)}function kr(){if(!au&&er!==null){au=!0;var t=0,r=He;try{var s=er;for(He=1;t<s.length;t++){var c=s[t];do c=c(!0);while(c!==null)}er=null,al=!1}catch(f){throw er!==null&&(er=er.slice(t+1)),vh(Rc,kr),f}finally{He=r,au=!1}}return null}var No=[],Mo=0,cl=null,ul=0,pn=[],hn=0,Gr=null,tr=1,nr="";function Yr(t,r){No[Mo++]=ul,No[Mo++]=cl,cl=t,ul=r}function wm(t,r,s){pn[hn++]=tr,pn[hn++]=nr,pn[hn++]=Gr,Gr=t;var c=tr;t=nr;var f=32-Sn(c)-1;c&=~(1<<f),s+=1;var x=32-Sn(r)+f;if(30<x){var v=f-f%5;x=(c&(1<<v)-1).toString(32),c>>=v,f-=v,tr=1<<32-Sn(r)+f|s<<f|c,nr=x+t}else tr=1<<x|s<<f|c,nr=t}function cu(t){t.return!==null&&(Yr(t,1),wm(t,1,0))}function uu(t){for(;t===cl;)cl=No[--Mo],No[Mo]=null,ul=No[--Mo],No[Mo]=null;for(;t===Gr;)Gr=pn[--hn],pn[hn]=null,nr=pn[--hn],pn[hn]=null,tr=pn[--hn],pn[hn]=null}var en=null,tn=null,Xe=!1,Cn=null;function vm(t,r){var s=yn(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=t,r=t.deletions,r===null?(t.deletions=[s],t.flags|=16):r.push(s)}function bm(t,r){switch(t.tag){case 5:var s=t.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,en=t,tn=wr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,en=t,tn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=Gr!==null?{id:tr,overflow:nr}:null,t.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=yn(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,en=t,tn=null,!0):!1;default:return!1}}function du(t){return(t.mode&1)!==0&&(t.flags&128)===0}function fu(t){if(Xe){var r=tn;if(r){var s=r;if(!bm(t,r)){if(du(t))throw Error(o(418));r=wr(s.nextSibling);var c=en;r&&bm(t,r)?vm(c,s):(t.flags=t.flags&-4097|2,Xe=!1,en=t)}}else{if(du(t))throw Error(o(418));t.flags=t.flags&-4097|2,Xe=!1,en=t}}}function km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function dl(t){if(t!==en)return!1;if(!Xe)return km(t),Xe=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!ru(t.type,t.memoizedProps)),r&&(r=tn)){if(du(t))throw Sm(),Error(o(418));for(;r;)vm(t,r),r=wr(r.nextSibling)}if(km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(r===0){tn=wr(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}t=t.nextSibling}tn=null}}else tn=en?wr(t.stateNode.nextSibling):null;return!0}function Sm(){for(var t=tn;t;)t=wr(t.nextSibling)}function Lo(){tn=en=null,Xe=!1}function pu(t){Cn===null?Cn=[t]:Cn.push(t)}var Tb=R.ReactCurrentBatchConfig;function Wi(t,r,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var c=s.stateNode}if(!c)throw Error(o(147,t));var f=c,x=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(v){var D=f.refs;v===null?delete D[x]:D[x]=v},r._stringRef=x,r)}if(typeof t!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,t))}return t}function fl(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function jm(t){var r=t._init;return r(t._payload)}function Cm(t){function r(U,_){if(t){var K=U.deletions;K===null?(U.deletions=[_],U.flags|=16):K.push(_)}}function s(U,_){if(!t)return null;for(;_!==null;)r(U,_),_=_.sibling;return null}function c(U,_){for(U=new Map;_!==null;)_.key!==null?U.set(_.key,_):U.set(_.index,_),_=_.sibling;return U}function f(U,_){return U=Rr(U,_),U.index=0,U.sibling=null,U}function x(U,_,K){return U.index=K,t?(K=U.alternate,K!==null?(K=K.index,K<_?(U.flags|=2,_):K):(U.flags|=2,_)):(U.flags|=1048576,_)}function v(U){return t&&U.alternate===null&&(U.flags|=2),U}function D(U,_,K,pe){return _===null||_.tag!==6?(_=od(K,U.mode,pe),_.return=U,_):(_=f(_,K),_.return=U,_)}function O(U,_,K,pe){var Se=K.type;return Se===Z?se(U,_,K.props.children,pe,K.key):_!==null&&(_.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===I&&jm(Se)===_.type)?(pe=f(_,K.props),pe.ref=Wi(U,_,K),pe.return=U,pe):(pe=Ll(K.type,K.key,K.props,null,U.mode,pe),pe.ref=Wi(U,_,K),pe.return=U,pe)}function X(U,_,K,pe){return _===null||_.tag!==4||_.stateNode.containerInfo!==K.containerInfo||_.stateNode.implementation!==K.implementation?(_=id(K,U.mode,pe),_.return=U,_):(_=f(_,K.children||[]),_.return=U,_)}function se(U,_,K,pe,Se){return _===null||_.tag!==7?(_=oo(K,U.mode,pe,Se),_.return=U,_):(_=f(_,K),_.return=U,_)}function ae(U,_,K){if(typeof _=="string"&&_!==""||typeof _=="number")return _=od(""+_,U.mode,K),_.return=U,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case M:return K=Ll(_.type,_.key,_.props,null,U.mode,K),K.ref=Wi(U,null,_),K.return=U,K;case V:return _=id(_,U.mode,K),_.return=U,_;case I:var pe=_._init;return ae(U,pe(_._payload),K)}if(kn(_)||F(_))return _=oo(_,U.mode,K,null),_.return=U,_;fl(U,_)}return null}function oe(U,_,K,pe){var Se=_!==null?_.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Se!==null?null:D(U,_,""+K,pe);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Se?O(U,_,K,pe):null;case V:return K.key===Se?X(U,_,K,pe):null;case I:return Se=K._init,oe(U,_,Se(K._payload),pe)}if(kn(K)||F(K))return Se!==null?null:se(U,_,K,pe,null);fl(U,K)}return null}function we(U,_,K,pe,Se){if(typeof pe=="string"&&pe!==""||typeof pe=="number")return U=U.get(K)||null,D(_,U,""+pe,Se);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case M:return U=U.get(pe.key===null?K:pe.key)||null,O(_,U,pe,Se);case V:return U=U.get(pe.key===null?K:pe.key)||null,X(_,U,pe,Se);case I:var Ee=pe._init;return we(U,_,K,Ee(pe._payload),Se)}if(kn(pe)||F(pe))return U=U.get(K)||null,se(_,U,pe,Se,null);fl(_,pe)}return null}function be(U,_,K,pe){for(var Se=null,Ee=null,$e=_,Ae=_=0,gt=null;$e!==null&&Ae<K.length;Ae++){$e.index>Ae?(gt=$e,$e=null):gt=$e.sibling;var ze=oe(U,$e,K[Ae],pe);if(ze===null){$e===null&&($e=gt);break}t&&$e&&ze.alternate===null&&r(U,$e),_=x(ze,_,Ae),Ee===null?Se=ze:Ee.sibling=ze,Ee=ze,$e=gt}if(Ae===K.length)return s(U,$e),Xe&&Yr(U,Ae),Se;if($e===null){for(;Ae<K.length;Ae++)$e=ae(U,K[Ae],pe),$e!==null&&(_=x($e,_,Ae),Ee===null?Se=$e:Ee.sibling=$e,Ee=$e);return Xe&&Yr(U,Ae),Se}for($e=c(U,$e);Ae<K.length;Ae++)gt=we($e,U,Ae,K[Ae],pe),gt!==null&&(t&&gt.alternate!==null&&$e.delete(gt.key===null?Ae:gt.key),_=x(gt,_,Ae),Ee===null?Se=gt:Ee.sibling=gt,Ee=gt);return t&&$e.forEach(function(Dr){return r(U,Dr)}),Xe&&Yr(U,Ae),Se}function ke(U,_,K,pe){var Se=F(K);if(typeof Se!="function")throw Error(o(150));if(K=Se.call(K),K==null)throw Error(o(151));for(var Ee=Se=null,$e=_,Ae=_=0,gt=null,ze=K.next();$e!==null&&!ze.done;Ae++,ze=K.next()){$e.index>Ae?(gt=$e,$e=null):gt=$e.sibling;var Dr=oe(U,$e,ze.value,pe);if(Dr===null){$e===null&&($e=gt);break}t&&$e&&Dr.alternate===null&&r(U,$e),_=x(Dr,_,Ae),Ee===null?Se=Dr:Ee.sibling=Dr,Ee=Dr,$e=gt}if(ze.done)return s(U,$e),Xe&&Yr(U,Ae),Se;if($e===null){for(;!ze.done;Ae++,ze=K.next())ze=ae(U,ze.value,pe),ze!==null&&(_=x(ze,_,Ae),Ee===null?Se=ze:Ee.sibling=ze,Ee=ze);return Xe&&Yr(U,Ae),Se}for($e=c(U,$e);!ze.done;Ae++,ze=K.next())ze=we($e,U,Ae,ze.value,pe),ze!==null&&(t&&ze.alternate!==null&&$e.delete(ze.key===null?Ae:ze.key),_=x(ze,_,Ae),Ee===null?Se=ze:Ee.sibling=ze,Ee=ze);return t&&$e.forEach(function(sk){return r(U,sk)}),Xe&&Yr(U,Ae),Se}function st(U,_,K,pe){if(typeof K=="object"&&K!==null&&K.type===Z&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:e:{for(var Se=K.key,Ee=_;Ee!==null;){if(Ee.key===Se){if(Se=K.type,Se===Z){if(Ee.tag===7){s(U,Ee.sibling),_=f(Ee,K.props.children),_.return=U,U=_;break e}}else if(Ee.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===I&&jm(Se)===Ee.type){s(U,Ee.sibling),_=f(Ee,K.props),_.ref=Wi(U,Ee,K),_.return=U,U=_;break e}s(U,Ee);break}else r(U,Ee);Ee=Ee.sibling}K.type===Z?(_=oo(K.props.children,U.mode,pe,K.key),_.return=U,U=_):(pe=Ll(K.type,K.key,K.props,null,U.mode,pe),pe.ref=Wi(U,_,K),pe.return=U,U=pe)}return v(U);case V:e:{for(Ee=K.key;_!==null;){if(_.key===Ee)if(_.tag===4&&_.stateNode.containerInfo===K.containerInfo&&_.stateNode.implementation===K.implementation){s(U,_.sibling),_=f(_,K.children||[]),_.return=U,U=_;break e}else{s(U,_);break}else r(U,_);_=_.sibling}_=id(K,U.mode,pe),_.return=U,U=_}return v(U);case I:return Ee=K._init,st(U,_,Ee(K._payload),pe)}if(kn(K))return be(U,_,K,pe);if(F(K))return ke(U,_,K,pe);fl(U,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,_!==null&&_.tag===6?(s(U,_.sibling),_=f(_,K),_.return=U,U=_):(s(U,_),_=od(K,U.mode,pe),_.return=U,U=_),v(U)):s(U,_)}return st}var Oo=Cm(!0),Em=Cm(!1),pl=vr(null),hl=null,zo=null,hu=null;function mu(){hu=zo=hl=null}function gu(t){var r=pl.current;Ge(pl),t._currentValue=r}function xu(t,r,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===s)break;t=t.return}}function _o(t,r){hl=t,hu=zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Ht=!0),t.firstContext=null)}function mn(t){var r=t._currentValue;if(hu!==t)if(t={context:t,memoizedValue:r,next:null},zo===null){if(hl===null)throw Error(o(308));zo=t,hl.dependencies={lanes:0,firstContext:t}}else zo=zo.next=t;return r}var Xr=null;function yu(t){Xr===null?Xr=[t]:Xr.push(t)}function $m(t,r,s,c){var f=r.interleaved;return f===null?(s.next=s,yu(r)):(s.next=f.next,f.next=s),r.interleaved=s,rr(t,c)}function rr(t,r){t.lanes|=r;var s=t.alternate;for(s!==null&&(s.lanes|=r),s=t,t=t.return;t!==null;)t.childLanes|=r,s=t.alternate,s!==null&&(s.childLanes|=r),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Sr=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tm(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function or(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function jr(t,r,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,Le&2){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,rr(t,s)}return f=c.interleaved,f===null?(r.next=r,yu(c)):(r.next=f.next,f.next=r),c.interleaved=r,rr(t,s)}function ml(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,Pc(t,s)}}function Am(t,r){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var v={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};x===null?f=x=v:x=x.next=v,s=s.next}while(s!==null);x===null?f=x=r:x=x.next=r}else f=x=r;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,effects:c.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}function gl(t,r,s,c){var f=t.updateQueue;Sr=!1;var x=f.firstBaseUpdate,v=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var O=D,X=O.next;O.next=null,v===null?x=X:v.next=X,v=O;var se=t.alternate;se!==null&&(se=se.updateQueue,D=se.lastBaseUpdate,D!==v&&(D===null?se.firstBaseUpdate=X:D.next=X,se.lastBaseUpdate=O))}if(x!==null){var ae=f.baseState;v=0,se=X=O=null,D=x;do{var oe=D.lane,we=D.eventTime;if((c&oe)===oe){se!==null&&(se=se.next={eventTime:we,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var be=t,ke=D;switch(oe=r,we=s,ke.tag){case 1:if(be=ke.payload,typeof be=="function"){ae=be.call(we,ae,oe);break e}ae=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ke.payload,oe=typeof be=="function"?be.call(we,ae,oe):be,oe==null)break e;ae=P({},ae,oe);break e;case 2:Sr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,oe=f.effects,oe===null?f.effects=[D]:oe.push(D))}else we={eventTime:we,lane:oe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},se===null?(X=se=we,O=ae):se=se.next=we,v|=oe;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;oe=D,D=oe.next,oe.next=null,f.lastBaseUpdate=oe,f.shared.pending=null}}while(!0);if(se===null&&(O=ae),f.baseState=O,f.firstBaseUpdate=X,f.lastBaseUpdate=se,r=f.shared.interleaved,r!==null){f=r;do v|=f.lane,f=f.next;while(f!==r)}else x===null&&(f.shared.lanes=0);eo|=v,t.lanes=v,t.memoizedState=ae}}function Rm(t,r,s){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],f=c.callback;if(f!==null){if(c.callback=null,c=s,typeof f!="function")throw Error(o(191,f));f.call(c)}}}var Hi={},Bn=vr(Hi),Ui=vr(Hi),Vi=vr(Hi);function Jr(t){if(t===Hi)throw Error(o(174));return t}function vu(t,r){switch(Ke(Vi,r),Ke(Ui,t),Ke(Bn,Hi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:bc(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=bc(r,t)}Ge(Bn),Ke(Bn,r)}function Fo(){Ge(Bn),Ge(Ui),Ge(Vi)}function Dm(t){Jr(Vi.current);var r=Jr(Bn.current),s=bc(r,t.type);r!==s&&(Ke(Ui,t),Ke(Bn,s))}function bu(t){Ui.current===t&&(Ge(Bn),Ge(Ui))}var Ze=vr(0);function xl(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ku=[];function Su(){for(var t=0;t<ku.length;t++)ku[t]._workInProgressVersionPrimary=null;ku.length=0}var yl=R.ReactCurrentDispatcher,ju=R.ReactCurrentBatchConfig,Zr=0,et=null,ut=null,ht=null,wl=!1,Ki=!1,Qi=0,Ab=0;function Dt(){throw Error(o(321))}function Cu(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!jn(t[s],r[s]))return!1;return!0}function Eu(t,r,s,c,f,x){if(Zr=x,et=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,yl.current=t===null||t.memoizedState===null?Pb:Nb,t=s(c,f),Ki){x=0;do{if(Ki=!1,Qi=0,25<=x)throw Error(o(301));x+=1,ht=ut=null,r.updateQueue=null,yl.current=Mb,t=s(c,f)}while(Ki)}if(yl.current=kl,r=ut!==null&&ut.next!==null,Zr=0,ht=ut=et=null,wl=!1,r)throw Error(o(300));return t}function $u(){var t=Qi!==0;return Qi=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?et.memoizedState=ht=t:ht=ht.next=t,ht}function gn(){if(ut===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var r=ht===null?et.memoizedState:ht.next;if(r!==null)ht=r,ut=t;else{if(t===null)throw Error(o(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},ht===null?et.memoizedState=ht=t:ht=ht.next=t}return ht}function qi(t,r){return typeof r=="function"?r(t):r}function Tu(t){var r=gn(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=ut,f=c.baseQueue,x=s.pending;if(x!==null){if(f!==null){var v=f.next;f.next=x.next,x.next=v}c.baseQueue=f=x,s.pending=null}if(f!==null){x=f.next,c=c.baseState;var D=v=null,O=null,X=x;do{var se=X.lane;if((Zr&se)===se)O!==null&&(O=O.next={lane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),c=X.hasEagerState?X.eagerState:t(c,X.action);else{var ae={lane:se,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null};O===null?(D=O=ae,v=c):O=O.next=ae,et.lanes|=se,eo|=se}X=X.next}while(X!==null&&X!==x);O===null?v=c:O.next=D,jn(c,r.memoizedState)||(Ht=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=O,s.lastRenderedState=c}if(t=s.interleaved,t!==null){f=t;do x=f.lane,et.lanes|=x,eo|=x,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function Au(t){var r=gn(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=s.dispatch,f=s.pending,x=r.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do x=t(x,v.action),v=v.next;while(v!==f);jn(x,r.memoizedState)||(Ht=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),s.lastRenderedState=x}return[x,c]}function Im(){}function Pm(t,r){var s=et,c=gn(),f=r(),x=!jn(c.memoizedState,f);if(x&&(c.memoizedState=f,Ht=!0),c=c.queue,Ru(Lm.bind(null,s,c,t),[t]),c.getSnapshot!==r||x||ht!==null&&ht.memoizedState.tag&1){if(s.flags|=2048,Gi(9,Mm.bind(null,s,c,f,r),void 0,null),mt===null)throw Error(o(349));Zr&30||Nm(s,r,f)}return f}function Nm(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function Mm(t,r,s,c){r.value=s,r.getSnapshot=c,Om(r)&&zm(t)}function Lm(t,r,s){return s(function(){Om(r)&&zm(t)})}function Om(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!jn(t,s)}catch{return!0}}function zm(t){var r=rr(t,1);r!==null&&An(r,t,1,-1)}function _m(t){var r=Wn();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},r.queue=t,t=t.dispatch=Ib.bind(null,et,t),[r.memoizedState,t]}function Gi(t,r,s,c){return t={tag:t,create:r,destroy:s,deps:c,next:null},r=et.updateQueue,r===null?(r={lastEffect:null,stores:null},et.updateQueue=r,r.lastEffect=t.next=t):(s=r.lastEffect,s===null?r.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,r.lastEffect=t)),t}function Fm(){return gn().memoizedState}function vl(t,r,s,c){var f=Wn();et.flags|=t,f.memoizedState=Gi(1|r,s,void 0,c===void 0?null:c)}function bl(t,r,s,c){var f=gn();c=c===void 0?null:c;var x=void 0;if(ut!==null){var v=ut.memoizedState;if(x=v.destroy,c!==null&&Cu(c,v.deps)){f.memoizedState=Gi(r,s,x,c);return}}et.flags|=t,f.memoizedState=Gi(1|r,s,x,c)}function Bm(t,r){return vl(8390656,8,t,r)}function Ru(t,r){return bl(2048,8,t,r)}function Wm(t,r){return bl(4,2,t,r)}function Hm(t,r){return bl(4,4,t,r)}function Um(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Vm(t,r,s){return s=s!=null?s.concat([t]):null,bl(4,4,Um.bind(null,r,t),s)}function Du(){}function Km(t,r){var s=gn();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&Cu(r,c[1])?c[0]:(s.memoizedState=[t,r],t)}function Qm(t,r){var s=gn();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&Cu(r,c[1])?c[0]:(t=t(),s.memoizedState=[t,r],t)}function qm(t,r,s){return Zr&21?(jn(s,r)||(s=jh(),et.lanes|=s,eo|=s,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Ht=!0),t.memoizedState=s)}function Rb(t,r){var s=He;He=s!==0&&4>s?s:4,t(!0);var c=ju.transition;ju.transition={};try{t(!1),r()}finally{He=s,ju.transition=c}}function Gm(){return gn().memoizedState}function Db(t,r,s){var c=Tr(t);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},Ym(t))Xm(r,s);else if(s=$m(t,r,s,c),s!==null){var f=Ft();An(s,t,c,f),Jm(s,r,c)}}function Ib(t,r,s){var c=Tr(t),f={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ym(t))Xm(r,f);else{var x=t.alternate;if(t.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var v=r.lastRenderedState,D=x(v,s);if(f.hasEagerState=!0,f.eagerState=D,jn(D,v)){var O=r.interleaved;O===null?(f.next=f,yu(r)):(f.next=O.next,O.next=f),r.interleaved=f;return}}catch{}finally{}s=$m(t,r,f,c),s!==null&&(f=Ft(),An(s,t,c,f),Jm(s,r,c))}}function Ym(t){var r=t.alternate;return t===et||r!==null&&r===et}function Xm(t,r){Ki=wl=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function Jm(t,r,s){if(s&4194240){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,Pc(t,s)}}var kl={readContext:mn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},Pb={readContext:mn,useCallback:function(t,r){return Wn().memoizedState=[t,r===void 0?null:r],t},useContext:mn,useEffect:Bm,useImperativeHandle:function(t,r,s){return s=s!=null?s.concat([t]):null,vl(4194308,4,Um.bind(null,r,t),s)},useLayoutEffect:function(t,r){return vl(4194308,4,t,r)},useInsertionEffect:function(t,r){return vl(4,2,t,r)},useMemo:function(t,r){var s=Wn();return r=r===void 0?null:r,t=t(),s.memoizedState=[t,r],t},useReducer:function(t,r,s){var c=Wn();return r=s!==void 0?s(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Db.bind(null,et,t),[c.memoizedState,t]},useRef:function(t){var r=Wn();return t={current:t},r.memoizedState=t},useState:_m,useDebugValue:Du,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=_m(!1),r=t[0];return t=Rb.bind(null,t[1]),Wn().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,s){var c=et,f=Wn();if(Xe){if(s===void 0)throw Error(o(407));s=s()}else{if(s=r(),mt===null)throw Error(o(349));Zr&30||Nm(c,r,s)}f.memoizedState=s;var x={value:s,getSnapshot:r};return f.queue=x,Bm(Lm.bind(null,c,x,t),[t]),c.flags|=2048,Gi(9,Mm.bind(null,c,x,s,r),void 0,null),s},useId:function(){var t=Wn(),r=mt.identifierPrefix;if(Xe){var s=nr,c=tr;s=(c&~(1<<32-Sn(c)-1)).toString(32)+s,r=":"+r+"R"+s,s=Qi++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=Ab++,r=":"+r+"r"+s.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Nb={readContext:mn,useCallback:Km,useContext:mn,useEffect:Ru,useImperativeHandle:Vm,useInsertionEffect:Wm,useLayoutEffect:Hm,useMemo:Qm,useReducer:Tu,useRef:Fm,useState:function(){return Tu(qi)},useDebugValue:Du,useDeferredValue:function(t){var r=gn();return qm(r,ut.memoizedState,t)},useTransition:function(){var t=Tu(qi)[0],r=gn().memoizedState;return[t,r]},useMutableSource:Im,useSyncExternalStore:Pm,useId:Gm,unstable_isNewReconciler:!1},Mb={readContext:mn,useCallback:Km,useContext:mn,useEffect:Ru,useImperativeHandle:Vm,useInsertionEffect:Wm,useLayoutEffect:Hm,useMemo:Qm,useReducer:Au,useRef:Fm,useState:function(){return Au(qi)},useDebugValue:Du,useDeferredValue:function(t){var r=gn();return ut===null?r.memoizedState=t:qm(r,ut.memoizedState,t)},useTransition:function(){var t=Au(qi)[0],r=gn().memoizedState;return[t,r]},useMutableSource:Im,useSyncExternalStore:Pm,useId:Gm,unstable_isNewReconciler:!1};function En(t,r){if(t&&t.defaultProps){r=P({},r),t=t.defaultProps;for(var s in t)r[s]===void 0&&(r[s]=t[s]);return r}return r}function Iu(t,r,s,c){r=t.memoizedState,s=s(c,r),s=s==null?r:P({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Sl={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,r,s){t=t._reactInternals;var c=Ft(),f=Tr(t),x=or(c,f);x.payload=r,s!=null&&(x.callback=s),r=jr(t,x,f),r!==null&&(An(r,t,f,c),ml(r,t,f))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var c=Ft(),f=Tr(t),x=or(c,f);x.tag=1,x.payload=r,s!=null&&(x.callback=s),r=jr(t,x,f),r!==null&&(An(r,t,f,c),ml(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=Ft(),c=Tr(t),f=or(s,c);f.tag=2,r!=null&&(f.callback=r),r=jr(t,f,c),r!==null&&(An(r,t,c,s),ml(r,t,c))}};function Zm(t,r,s,c,f,x,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,x,v):r.prototype&&r.prototype.isPureReactComponent?!Mi(s,c)||!Mi(f,x):!0}function e0(t,r,s){var c=!1,f=br,x=r.contextType;return typeof x=="object"&&x!==null?x=mn(x):(f=Wt(r)?qr:Rt.current,c=r.contextTypes,x=(c=c!=null)?Po(t,f):br),r=new r(s,x),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=x),r}function t0(t,r,s,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==t&&Sl.enqueueReplaceState(r,r.state,null)}function Pu(t,r,s,c){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},wu(t);var x=r.contextType;typeof x=="object"&&x!==null?f.context=mn(x):(x=Wt(r)?qr:Rt.current,f.context=Po(t,x)),f.state=t.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Iu(t,r,x,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Sl.enqueueReplaceState(f,f.state,null),gl(t,s,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Bo(t,r){try{var s="",c=r;do s+=Q(c),c=c.return;while(c);var f=s}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:t,source:r,stack:f,digest:null}}function Nu(t,r,s){return{value:t,source:null,stack:s??null,digest:r??null}}function Mu(t,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var Lb=typeof WeakMap=="function"?WeakMap:Map;function n0(t,r,s){s=or(-1,s),s.tag=3,s.payload={element:null};var c=r.value;return s.callback=function(){Rl||(Rl=!0,Yu=c),Mu(t,r)},s}function r0(t,r,s){s=or(-1,s),s.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;s.payload=function(){return c(f)},s.callback=function(){Mu(t,r)}}var x=t.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(s.callback=function(){Mu(t,r),typeof c!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),s}function o0(t,r,s){var c=t.pingCache;if(c===null){c=t.pingCache=new Lb;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(s)||(f.add(s),t=Yb.bind(null,t,r,s),r.then(t,t))}function i0(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function s0(t,r,s,c,f){return t.mode&1?(t.flags|=65536,t.lanes=f,t):(t===r?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=or(-1,1),r.tag=2,jr(s,r,1))),s.lanes|=1),t)}var Ob=R.ReactCurrentOwner,Ht=!1;function _t(t,r,s,c){r.child=t===null?Em(r,null,s,c):Oo(r,t.child,s,c)}function l0(t,r,s,c,f){s=s.render;var x=r.ref;return _o(r,f),c=Eu(t,r,s,c,x,f),s=$u(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,ir(t,r,f)):(Xe&&s&&cu(r),r.flags|=1,_t(t,r,c,f),r.child)}function a0(t,r,s,c,f){if(t===null){var x=s.type;return typeof x=="function"&&!rd(x)&&x.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=x,c0(t,r,x,c,f)):(t=Ll(s.type,null,c,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(x=t.child,!(t.lanes&f)){var v=x.memoizedProps;if(s=s.compare,s=s!==null?s:Mi,s(v,c)&&t.ref===r.ref)return ir(t,r,f)}return r.flags|=1,t=Rr(x,c),t.ref=r.ref,t.return=r,r.child=t}function c0(t,r,s,c,f){if(t!==null){var x=t.memoizedProps;if(Mi(x,c)&&t.ref===r.ref)if(Ht=!1,r.pendingProps=c=x,(t.lanes&f)!==0)t.flags&131072&&(Ht=!0);else return r.lanes=t.lanes,ir(t,r,f)}return Lu(t,r,s,c,f)}function u0(t,r,s){var c=r.pendingProps,f=c.children,x=t!==null?t.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Ho,nn),nn|=s;else{if(!(s&1073741824))return t=x!==null?x.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ke(Ho,nn),nn|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:s,Ke(Ho,nn),nn|=c}else x!==null?(c=x.baseLanes|s,r.memoizedState=null):c=s,Ke(Ho,nn),nn|=c;return _t(t,r,f,s),r.child}function d0(t,r){var s=r.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function Lu(t,r,s,c,f){var x=Wt(s)?qr:Rt.current;return x=Po(r,x),_o(r,f),s=Eu(t,r,s,c,x,f),c=$u(),t!==null&&!Ht?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,ir(t,r,f)):(Xe&&c&&cu(r),r.flags|=1,_t(t,r,s,f),r.child)}function f0(t,r,s,c,f){if(Wt(s)){var x=!0;ll(r)}else x=!1;if(_o(r,f),r.stateNode===null)Cl(t,r),e0(r,s,c),Pu(r,s,c,f),c=!0;else if(t===null){var v=r.stateNode,D=r.memoizedProps;v.props=D;var O=v.context,X=s.contextType;typeof X=="object"&&X!==null?X=mn(X):(X=Wt(s)?qr:Rt.current,X=Po(r,X));var se=s.getDerivedStateFromProps,ae=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function";ae||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(D!==c||O!==X)&&t0(r,v,c,X),Sr=!1;var oe=r.memoizedState;v.state=oe,gl(r,c,v,f),O=r.memoizedState,D!==c||oe!==O||Bt.current||Sr?(typeof se=="function"&&(Iu(r,s,se,c),O=r.memoizedState),(D=Sr||Zm(r,s,D,c,oe,O,X))?(ae||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=O),v.props=c,v.state=O,v.context=X,c=D):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Tm(t,r),D=r.memoizedProps,X=r.type===r.elementType?D:En(r.type,D),v.props=X,ae=r.pendingProps,oe=v.context,O=s.contextType,typeof O=="object"&&O!==null?O=mn(O):(O=Wt(s)?qr:Rt.current,O=Po(r,O));var we=s.getDerivedStateFromProps;(se=typeof we=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(D!==ae||oe!==O)&&t0(r,v,c,O),Sr=!1,oe=r.memoizedState,v.state=oe,gl(r,c,v,f);var be=r.memoizedState;D!==ae||oe!==be||Bt.current||Sr?(typeof we=="function"&&(Iu(r,s,we,c),be=r.memoizedState),(X=Sr||Zm(r,s,X,c,oe,be,O)||!1)?(se||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,be,O),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,be,O)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||D===t.memoizedProps&&oe===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&oe===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=be),v.props=c,v.state=be,v.context=O,c=X):(typeof v.componentDidUpdate!="function"||D===t.memoizedProps&&oe===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&oe===t.memoizedState||(r.flags|=1024),c=!1)}return Ou(t,r,s,c,x,f)}function Ou(t,r,s,c,f,x){d0(t,r);var v=(r.flags&128)!==0;if(!c&&!v)return f&&xm(r,s,!1),ir(t,r,x);c=r.stateNode,Ob.current=r;var D=v&&typeof s.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&v?(r.child=Oo(r,t.child,null,x),r.child=Oo(r,null,D,x)):_t(t,r,D,x),r.memoizedState=c.state,f&&xm(r,s,!0),r.child}function p0(t){var r=t.stateNode;r.pendingContext?mm(t,r.pendingContext,r.pendingContext!==r.context):r.context&&mm(t,r.context,!1),vu(t,r.containerInfo)}function h0(t,r,s,c,f){return Lo(),pu(f),r.flags|=256,_t(t,r,s,c),r.child}var zu={dehydrated:null,treeContext:null,retryLane:0};function _u(t){return{baseLanes:t,cachePool:null,transitions:null}}function m0(t,r,s){var c=r.pendingProps,f=Ze.current,x=!1,v=(r.flags&128)!==0,D;if((D=v)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(x=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ke(Ze,f&1),t===null)return fu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=c.children,t=c.fallback,x?(c=r.mode,x=r.child,v={mode:"hidden",children:v},!(c&1)&&x!==null?(x.childLanes=0,x.pendingProps=v):x=Ol(v,c,0,null),t=oo(t,c,s,null),x.return=r,t.return=r,x.sibling=t,r.child=x,r.child.memoizedState=_u(s),r.memoizedState=zu,t):Fu(r,v));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return zb(t,r,v,c,D,f,s);if(x){x=c.fallback,v=r.mode,f=t.child,D=f.sibling;var O={mode:"hidden",children:c.children};return!(v&1)&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=O,r.deletions=null):(c=Rr(f,O),c.subtreeFlags=f.subtreeFlags&14680064),D!==null?x=Rr(D,x):(x=oo(x,v,s,null),x.flags|=2),x.return=r,c.return=r,c.sibling=x,r.child=c,c=x,x=r.child,v=t.child.memoizedState,v=v===null?_u(s):{baseLanes:v.baseLanes|s,cachePool:null,transitions:v.transitions},x.memoizedState=v,x.childLanes=t.childLanes&~s,r.memoizedState=zu,c}return x=t.child,t=x.sibling,c=Rr(x,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=s),c.return=r,c.sibling=null,t!==null&&(s=r.deletions,s===null?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=c,r.memoizedState=null,c}function Fu(t,r){return r=Ol({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function jl(t,r,s,c){return c!==null&&pu(c),Oo(r,t.child,null,s),t=Fu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function zb(t,r,s,c,f,x,v){if(s)return r.flags&256?(r.flags&=-257,c=Nu(Error(o(422))),jl(t,r,v,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(x=c.fallback,f=r.mode,c=Ol({mode:"visible",children:c.children},f,0,null),x=oo(x,f,v,null),x.flags|=2,c.return=r,x.return=r,c.sibling=x,r.child=c,r.mode&1&&Oo(r,t.child,null,v),r.child.memoizedState=_u(v),r.memoizedState=zu,x);if(!(r.mode&1))return jl(t,r,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var D=c.dgst;return c=D,x=Error(o(419)),c=Nu(x,c,void 0),jl(t,r,v,c)}if(D=(v&t.childLanes)!==0,Ht||D){if(c=mt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,rr(t,f),An(c,t,f,-1))}return nd(),c=Nu(Error(o(421))),jl(t,r,v,c)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Xb.bind(null,t),f._reactRetry=r,null):(t=x.treeContext,tn=wr(f.nextSibling),en=r,Xe=!0,Cn=null,t!==null&&(pn[hn++]=tr,pn[hn++]=nr,pn[hn++]=Gr,tr=t.id,nr=t.overflow,Gr=r),r=Fu(r,c.children),r.flags|=4096,r)}function g0(t,r,s){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),xu(t.return,r,s)}function Bu(t,r,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=f)}function x0(t,r,s){var c=r.pendingProps,f=c.revealOrder,x=c.tail;if(_t(t,r,c.children,s),c=Ze.current,c&2)c=c&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&g0(t,s,r);else if(t.tag===19)g0(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ke(Ze,c),!(r.mode&1))r.memoizedState=null;else switch(f){case"forwards":for(s=r.child,f=null;s!==null;)t=s.alternate,t!==null&&xl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),Bu(r,!1,f,s,x);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&xl(t)===null){r.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Bu(r,!0,s,null,x);break;case"together":Bu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Cl(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function ir(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),eo|=r.lanes,!(s&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,s=Rr(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Rr(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function _b(t,r,s){switch(r.tag){case 3:p0(r),Lo();break;case 5:Dm(r);break;case 1:Wt(r.type)&&ll(r);break;case 4:vu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Ke(pl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ke(Ze,Ze.current&1),r.flags|=128,null):s&r.child.childLanes?m0(t,r,s):(Ke(Ze,Ze.current&1),t=ir(t,r,s),t!==null?t.sibling:null);Ke(Ze,Ze.current&1);break;case 19:if(c=(s&r.childLanes)!==0,t.flags&128){if(c)return x0(t,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Ze,Ze.current),c)break;return null;case 22:case 23:return r.lanes=0,u0(t,r,s)}return ir(t,r,s)}var y0,Wu,w0,v0;y0=function(t,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Wu=function(){},w0=function(t,r,s,c){var f=t.memoizedProps;if(f!==c){t=r.stateNode,Jr(Bn.current);var x=null;switch(s){case"input":f=je(t,f),c=je(t,c),x=[];break;case"select":f=P({},f,{value:void 0}),c=P({},c,{value:void 0}),x=[];break;case"textarea":f=At(t,f),c=At(t,c),x=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=ol)}kc(s,c);var v;s=null;for(X in f)if(!c.hasOwnProperty(X)&&f.hasOwnProperty(X)&&f[X]!=null)if(X==="style"){var D=f[X];for(v in D)D.hasOwnProperty(v)&&(s||(s={}),s[v]="")}else X!=="dangerouslySetInnerHTML"&&X!=="children"&&X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&X!=="autoFocus"&&(a.hasOwnProperty(X)?x||(x=[]):(x=x||[]).push(X,null));for(X in c){var O=c[X];if(D=f!=null?f[X]:void 0,c.hasOwnProperty(X)&&O!==D&&(O!=null||D!=null))if(X==="style")if(D){for(v in D)!D.hasOwnProperty(v)||O&&O.hasOwnProperty(v)||(s||(s={}),s[v]="");for(v in O)O.hasOwnProperty(v)&&D[v]!==O[v]&&(s||(s={}),s[v]=O[v])}else s||(x||(x=[]),x.push(X,s)),s=O;else X==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(x=x||[]).push(X,O)):X==="children"?typeof O!="string"&&typeof O!="number"||(x=x||[]).push(X,""+O):X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&(a.hasOwnProperty(X)?(O!=null&&X==="onScroll"&&qe("scroll",t),x||D===O||(x=[])):(x=x||[]).push(X,O))}s&&(x=x||[]).push("style",s);var X=x;(r.updateQueue=X)&&(r.flags|=4)}},v0=function(t,r,s,c){s!==c&&(r.flags|=4)};function Yi(t,r){if(!Xe)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function It(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(r)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=s,r}function Fb(t,r,s){var c=r.pendingProps;switch(uu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return It(r),null;case 1:return Wt(r.type)&&sl(),It(r),null;case 3:return c=r.stateNode,Fo(),Ge(Bt),Ge(Rt),Su(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(dl(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Cn!==null&&(Zu(Cn),Cn=null))),Wu(t,r),It(r),null;case 5:bu(r);var f=Jr(Vi.current);if(s=r.type,t!==null&&r.stateNode!=null)w0(t,r,s,c,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return It(r),null}if(t=Jr(Bn.current),dl(r)){c=r.stateNode,s=r.type;var x=r.memoizedProps;switch(c[Fn]=r,c[Fi]=x,t=(r.mode&1)!==0,s){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(f=0;f<Oi.length;f++)qe(Oi[f],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Te(c,x),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},qe("invalid",c);break;case"textarea":Qe(c,x),qe("invalid",c)}kc(s,x),f=null;for(var v in x)if(x.hasOwnProperty(v)){var D=x[v];v==="children"?typeof D=="string"?c.textContent!==D&&(x.suppressHydrationWarning!==!0&&rl(c.textContent,D,t),f=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(x.suppressHydrationWarning!==!0&&rl(c.textContent,D,t),f=["children",""+D]):a.hasOwnProperty(v)&&D!=null&&v==="onScroll"&&qe("scroll",c)}switch(s){case"input":le(c),Xt(c,x,!0);break;case"textarea":le(c),xi(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=ol)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sh(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=v.createElement(s,{is:c.is}):(t=v.createElement(s),s==="select"&&(v=t,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):t=v.createElementNS(t,s),t[Fn]=r,t[Fi]=c,y0(t,r,!1,!1),r.stateNode=t;e:{switch(v=Sc(s,c),s){case"dialog":qe("cancel",t),qe("close",t),f=c;break;case"iframe":case"object":case"embed":qe("load",t),f=c;break;case"video":case"audio":for(f=0;f<Oi.length;f++)qe(Oi[f],t);f=c;break;case"source":qe("error",t),f=c;break;case"img":case"image":case"link":qe("error",t),qe("load",t),f=c;break;case"details":qe("toggle",t),f=c;break;case"input":Te(t,c),f=je(t,c),qe("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=P({},c,{value:void 0}),qe("invalid",t);break;case"textarea":Qe(t,c),f=At(t,c),qe("invalid",t);break;default:f=c}kc(s,f),D=f;for(x in D)if(D.hasOwnProperty(x)){var O=D[x];x==="style"?ch(t,O):x==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&lh(t,O)):x==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&yi(t,O):typeof O=="number"&&yi(t,""+O):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?O!=null&&x==="onScroll"&&qe("scroll",t):O!=null&&S(t,x,O,v))}switch(s){case"input":le(t),Xt(t,c,!1);break;case"textarea":le(t),xi(t);break;case"option":c.value!=null&&t.setAttribute("value",""+H(c.value));break;case"select":t.multiple=!!c.multiple,x=c.value,x!=null?fn(t,!!c.multiple,x,!1):c.defaultValue!=null&&fn(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=ol)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return It(r),null;case 6:if(t&&r.stateNode!=null)v0(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(s=Jr(Vi.current),Jr(Bn.current),dl(r)){if(c=r.stateNode,s=r.memoizedProps,c[Fn]=r,(x=c.nodeValue!==s)&&(t=en,t!==null))switch(t.tag){case 3:rl(c.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(c.nodeValue,s,(t.mode&1)!==0)}x&&(r.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[Fn]=r,r.stateNode=c}return It(r),null;case 13:if(Ge(Ze),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xe&&tn!==null&&r.mode&1&&!(r.flags&128))Sm(),Lo(),r.flags|=98560,x=!1;else if(x=dl(r),c!==null&&c.dehydrated!==null){if(t===null){if(!x)throw Error(o(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(o(317));x[Fn]=r}else Lo(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;It(r),x=!1}else Cn!==null&&(Zu(Cn),Cn=null),x=!0;if(!x)return r.flags&65536?r:null}return r.flags&128?(r.lanes=s,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(t===null||Ze.current&1?dt===0&&(dt=3):nd())),r.updateQueue!==null&&(r.flags|=4),It(r),null);case 4:return Fo(),Wu(t,r),t===null&&zi(r.stateNode.containerInfo),It(r),null;case 10:return gu(r.type._context),It(r),null;case 17:return Wt(r.type)&&sl(),It(r),null;case 19:if(Ge(Ze),x=r.memoizedState,x===null)return It(r),null;if(c=(r.flags&128)!==0,v=x.rendering,v===null)if(c)Yi(x,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(v=xl(t),v!==null){for(r.flags|=128,Yi(x,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=s,s=r.child;s!==null;)x=s,t=c,x.flags&=14680066,v=x.alternate,v===null?(x.childLanes=0,x.lanes=t,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=v.childLanes,x.lanes=v.lanes,x.child=v.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=v.memoizedProps,x.memoizedState=v.memoizedState,x.updateQueue=v.updateQueue,x.type=v.type,t=v.dependencies,x.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ke(Ze,Ze.current&1|2),r.child}t=t.sibling}x.tail!==null&&it()>Uo&&(r.flags|=128,c=!0,Yi(x,!1),r.lanes=4194304)}else{if(!c)if(t=xl(v),t!==null){if(r.flags|=128,c=!0,s=t.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),Yi(x,!0),x.tail===null&&x.tailMode==="hidden"&&!v.alternate&&!Xe)return It(r),null}else 2*it()-x.renderingStartTime>Uo&&s!==1073741824&&(r.flags|=128,c=!0,Yi(x,!1),r.lanes=4194304);x.isBackwards?(v.sibling=r.child,r.child=v):(s=x.last,s!==null?s.sibling=v:r.child=v,x.last=v)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=it(),r.sibling=null,s=Ze.current,Ke(Ze,c?s&1|2:s&1),r):(It(r),null);case 22:case 23:return td(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?nn&1073741824&&(It(r),r.subtreeFlags&6&&(r.flags|=8192)):It(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function Bb(t,r){switch(uu(r),r.tag){case 1:return Wt(r.type)&&sl(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Fo(),Ge(Bt),Ge(Rt),Su(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return bu(r),null;case 13:if(Ge(Ze),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));Lo()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ge(Ze),null;case 4:return Fo(),null;case 10:return gu(r.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var El=!1,Pt=!1,Wb=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Wo(t,r){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){nt(t,r,c)}else s.current=null}function Hu(t,r,s){try{s()}catch(c){nt(t,r,c)}}var b0=!1;function Hb(t,r){if(tu=Ks,t=Zh(),Qc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var v=0,D=-1,O=-1,X=0,se=0,ae=t,oe=null;t:for(;;){for(var we;ae!==s||f!==0&&ae.nodeType!==3||(D=v+f),ae!==x||c!==0&&ae.nodeType!==3||(O=v+c),ae.nodeType===3&&(v+=ae.nodeValue.length),(we=ae.firstChild)!==null;)oe=ae,ae=we;for(;;){if(ae===t)break t;if(oe===s&&++X===f&&(D=v),oe===x&&++se===c&&(O=v),(we=ae.nextSibling)!==null)break;ae=oe,oe=ae.parentNode}ae=we}s=D===-1||O===-1?null:{start:D,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(nu={focusedElem:t,selectionRange:s},Ks=!1,ve=r;ve!==null;)if(r=ve,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ve=t;else for(;ve!==null;){r=ve;try{var be=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var ke=be.memoizedProps,st=be.memoizedState,U=r.stateNode,_=U.getSnapshotBeforeUpdate(r.elementType===r.type?ke:En(r.type,ke),st);U.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var K=r.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(pe){nt(r,r.return,pe)}if(t=r.sibling,t!==null){t.return=r.return,ve=t;break}ve=r.return}return be=b0,b0=!1,be}function Xi(t,r,s){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var x=f.destroy;f.destroy=void 0,x!==void 0&&Hu(r,s,x)}f=f.next}while(f!==c)}}function $l(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var c=s.create;s.destroy=c()}s=s.next}while(s!==r)}}function Uu(t){var r=t.ref;if(r!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof r=="function"?r(t):r.current=t}}function k0(t){var r=t.alternate;r!==null&&(t.alternate=null,k0(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Fn],delete r[Fi],delete r[su],delete r[Cb],delete r[Eb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S0(t){return t.tag===5||t.tag===3||t.tag===4}function j0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(t,r):s.insertBefore(t,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(t,s)):(r=s,r.appendChild(t)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=ol));else if(c!==4&&(t=t.child,t!==null))for(Vu(t,r,s),t=t.sibling;t!==null;)Vu(t,r,s),t=t.sibling}function Ku(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Ku(t,r,s),t=t.sibling;t!==null;)Ku(t,r,s),t=t.sibling}var kt=null,$n=!1;function Cr(t,r,s){for(s=s.child;s!==null;)C0(t,r,s),s=s.sibling}function C0(t,r,s){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Fs,s)}catch{}switch(s.tag){case 5:Pt||Wo(s,r);case 6:var c=kt,f=$n;kt=null,Cr(t,r,s),kt=c,$n=f,kt!==null&&($n?(t=kt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):kt.removeChild(s.stateNode));break;case 18:kt!==null&&($n?(t=kt,s=s.stateNode,t.nodeType===8?iu(t.parentNode,s):t.nodeType===1&&iu(t,s),Ai(t)):iu(kt,s.stateNode));break;case 4:c=kt,f=$n,kt=s.stateNode.containerInfo,$n=!0,Cr(t,r,s),kt=c,$n=f;break;case 0:case 11:case 14:case 15:if(!Pt&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var x=f,v=x.destroy;x=x.tag,v!==void 0&&(x&2||x&4)&&Hu(s,r,v),f=f.next}while(f!==c)}Cr(t,r,s);break;case 1:if(!Pt&&(Wo(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(D){nt(s,r,D)}Cr(t,r,s);break;case 21:Cr(t,r,s);break;case 22:s.mode&1?(Pt=(c=Pt)||s.memoizedState!==null,Cr(t,r,s),Pt=c):Cr(t,r,s);break;default:Cr(t,r,s)}}function E0(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Wb),r.forEach(function(c){var f=Jb.bind(null,t,c);s.has(c)||(s.add(c),c.then(f,f))})}}function Tn(t,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c];try{var x=t,v=r,D=v;e:for(;D!==null;){switch(D.tag){case 5:kt=D.stateNode,$n=!1;break e;case 3:kt=D.stateNode.containerInfo,$n=!0;break e;case 4:kt=D.stateNode.containerInfo,$n=!0;break e}D=D.return}if(kt===null)throw Error(o(160));C0(x,v,f),kt=null,$n=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(X){nt(f,r,X)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)$0(r,t),r=r.sibling}function $0(t,r){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(r,t),Hn(t),c&4){try{Xi(3,t,t.return),$l(3,t)}catch(ke){nt(t,t.return,ke)}try{Xi(5,t,t.return)}catch(ke){nt(t,t.return,ke)}}break;case 1:Tn(r,t),Hn(t),c&512&&s!==null&&Wo(s,s.return);break;case 5:if(Tn(r,t),Hn(t),c&512&&s!==null&&Wo(s,s.return),t.flags&32){var f=t.stateNode;try{yi(f,"")}catch(ke){nt(t,t.return,ke)}}if(c&4&&(f=t.stateNode,f!=null)){var x=t.memoizedProps,v=s!==null?s.memoizedProps:x,D=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{D==="input"&&x.type==="radio"&&x.name!=null&&Me(f,x),Sc(D,v);var X=Sc(D,x);for(v=0;v<O.length;v+=2){var se=O[v],ae=O[v+1];se==="style"?ch(f,ae):se==="dangerouslySetInnerHTML"?lh(f,ae):se==="children"?yi(f,ae):S(f,se,ae,X)}switch(D){case"input":Je(f,x);break;case"textarea":Jt(f,x);break;case"select":var oe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var we=x.value;we!=null?fn(f,!!x.multiple,we,!1):oe!==!!x.multiple&&(x.defaultValue!=null?fn(f,!!x.multiple,x.defaultValue,!0):fn(f,!!x.multiple,x.multiple?[]:"",!1))}f[Fi]=x}catch(ke){nt(t,t.return,ke)}}break;case 6:if(Tn(r,t),Hn(t),c&4){if(t.stateNode===null)throw Error(o(162));f=t.stateNode,x=t.memoizedProps;try{f.nodeValue=x}catch(ke){nt(t,t.return,ke)}}break;case 3:if(Tn(r,t),Hn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ai(r.containerInfo)}catch(ke){nt(t,t.return,ke)}break;case 4:Tn(r,t),Hn(t);break;case 13:Tn(r,t),Hn(t),f=t.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(Gu=it())),c&4&&E0(t);break;case 22:if(se=s!==null&&s.memoizedState!==null,t.mode&1?(Pt=(X=Pt)||se,Tn(r,t),Pt=X):Tn(r,t),Hn(t),c&8192){if(X=t.memoizedState!==null,(t.stateNode.isHidden=X)&&!se&&t.mode&1)for(ve=t,se=t.child;se!==null;){for(ae=ve=se;ve!==null;){switch(oe=ve,we=oe.child,oe.tag){case 0:case 11:case 14:case 15:Xi(4,oe,oe.return);break;case 1:Wo(oe,oe.return);var be=oe.stateNode;if(typeof be.componentWillUnmount=="function"){c=oe,s=oe.return;try{r=c,be.props=r.memoizedProps,be.state=r.memoizedState,be.componentWillUnmount()}catch(ke){nt(c,s,ke)}}break;case 5:Wo(oe,oe.return);break;case 22:if(oe.memoizedState!==null){R0(ae);continue}}we!==null?(we.return=oe,ve=we):R0(ae)}se=se.sibling}e:for(se=null,ae=t;;){if(ae.tag===5){if(se===null){se=ae;try{f=ae.stateNode,X?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(D=ae.stateNode,O=ae.memoizedProps.style,v=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=ah("display",v))}catch(ke){nt(t,t.return,ke)}}}else if(ae.tag===6){if(se===null)try{ae.stateNode.nodeValue=X?"":ae.memoizedProps}catch(ke){nt(t,t.return,ke)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===t)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===t)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===t)break e;se===ae&&(se=null),ae=ae.return}se===ae&&(se=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:Tn(r,t),Hn(t),c&4&&E0(t);break;case 21:break;default:Tn(r,t),Hn(t)}}function Hn(t){var r=t.flags;if(r&2){try{e:{for(var s=t.return;s!==null;){if(S0(s)){var c=s;break e}s=s.return}throw Error(o(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(yi(f,""),c.flags&=-33);var x=j0(t);Ku(t,x,f);break;case 3:case 4:var v=c.stateNode.containerInfo,D=j0(t);Vu(t,D,v);break;default:throw Error(o(161))}}catch(O){nt(t,t.return,O)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Ub(t,r,s){ve=t,T0(t)}function T0(t,r,s){for(var c=(t.mode&1)!==0;ve!==null;){var f=ve,x=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||El;if(!v){var D=f.alternate,O=D!==null&&D.memoizedState!==null||Pt;D=El;var X=Pt;if(El=v,(Pt=O)&&!X)for(ve=f;ve!==null;)v=ve,O=v.child,v.tag===22&&v.memoizedState!==null?D0(f):O!==null?(O.return=v,ve=O):D0(f);for(;x!==null;)ve=x,T0(x),x=x.sibling;ve=f,El=D,Pt=X}A0(t)}else f.subtreeFlags&8772&&x!==null?(x.return=f,ve=x):A0(t)}}function A0(t){for(;ve!==null;){var r=ve;if(r.flags&8772){var s=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Pt||$l(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Pt)if(s===null)c.componentDidMount();else{var f=r.elementType===r.type?s.memoizedProps:En(r.type,s.memoizedProps);c.componentDidUpdate(f,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&Rm(r,x,c);break;case 3:var v=r.updateQueue;if(v!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}Rm(r,v,s)}break;case 5:var D=r.stateNode;if(s===null&&r.flags&4){s=D;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var X=r.alternate;if(X!==null){var se=X.memoizedState;if(se!==null){var ae=se.dehydrated;ae!==null&&Ai(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Pt||r.flags&512&&Uu(r)}catch(oe){nt(r,r.return,oe)}}if(r===t){ve=null;break}if(s=r.sibling,s!==null){s.return=r.return,ve=s;break}ve=r.return}}function R0(t){for(;ve!==null;){var r=ve;if(r===t){ve=null;break}var s=r.sibling;if(s!==null){s.return=r.return,ve=s;break}ve=r.return}}function D0(t){for(;ve!==null;){var r=ve;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{$l(4,r)}catch(O){nt(r,s,O)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(O){nt(r,f,O)}}var x=r.return;try{Uu(r)}catch(O){nt(r,x,O)}break;case 5:var v=r.return;try{Uu(r)}catch(O){nt(r,v,O)}}}catch(O){nt(r,r.return,O)}if(r===t){ve=null;break}var D=r.sibling;if(D!==null){D.return=r.return,ve=D;break}ve=r.return}}var Vb=Math.ceil,Tl=R.ReactCurrentDispatcher,Qu=R.ReactCurrentOwner,xn=R.ReactCurrentBatchConfig,Le=0,mt=null,at=null,St=0,nn=0,Ho=vr(0),dt=0,Ji=null,eo=0,Al=0,qu=0,Zi=null,Ut=null,Gu=0,Uo=1/0,sr=null,Rl=!1,Yu=null,Er=null,Dl=!1,$r=null,Il=0,es=0,Xu=null,Pl=-1,Nl=0;function Ft(){return Le&6?it():Pl!==-1?Pl:Pl=it()}function Tr(t){return t.mode&1?Le&2&&St!==0?St&-St:Tb.transition!==null?(Nl===0&&(Nl=jh()),Nl):(t=He,t!==0||(t=window.event,t=t===void 0?16:Ph(t.type)),t):1}function An(t,r,s,c){if(50<es)throw es=0,Xu=null,Error(o(185));ji(t,s,c),(!(Le&2)||t!==mt)&&(t===mt&&(!(Le&2)&&(Al|=s),dt===4&&Ar(t,St)),Vt(t,c),s===1&&Le===0&&!(r.mode&1)&&(Uo=it()+500,al&&kr()))}function Vt(t,r){var s=t.callbackNode;T1(t,r);var c=Hs(t,t===mt?St:0);if(c===0)s!==null&&bh(s),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(s!=null&&bh(s),r===1)t.tag===0?$b(P0.bind(null,t)):ym(P0.bind(null,t)),Sb(function(){!(Le&6)&&kr()}),s=null;else{switch(Ch(c)){case 1:s=Rc;break;case 4:s=kh;break;case 16:s=_s;break;case 536870912:s=Sh;break;default:s=_s}s=B0(s,I0.bind(null,t))}t.callbackPriority=r,t.callbackNode=s}}function I0(t,r){if(Pl=-1,Nl=0,Le&6)throw Error(o(327));var s=t.callbackNode;if(Vo()&&t.callbackNode!==s)return null;var c=Hs(t,t===mt?St:0);if(c===0)return null;if(c&30||c&t.expiredLanes||r)r=Ml(t,c);else{r=c;var f=Le;Le|=2;var x=M0();(mt!==t||St!==r)&&(sr=null,Uo=it()+500,no(t,r));do try{qb();break}catch(D){N0(t,D)}while(!0);mu(),Tl.current=x,Le=f,at!==null?r=0:(mt=null,St=0,r=dt)}if(r!==0){if(r===2&&(f=Dc(t),f!==0&&(c=f,r=Ju(t,f))),r===1)throw s=Ji,no(t,0),Ar(t,c),Vt(t,it()),s;if(r===6)Ar(t,c);else{if(f=t.current.alternate,!(c&30)&&!Kb(f)&&(r=Ml(t,c),r===2&&(x=Dc(t),x!==0&&(c=x,r=Ju(t,x))),r===1))throw s=Ji,no(t,0),Ar(t,c),Vt(t,it()),s;switch(t.finishedWork=f,t.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:ro(t,Ut,sr);break;case 3:if(Ar(t,c),(c&130023424)===c&&(r=Gu+500-it(),10<r)){if(Hs(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Ft(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=ou(ro.bind(null,t,Ut,sr),r);break}ro(t,Ut,sr);break;case 4:if(Ar(t,c),(c&4194240)===c)break;for(r=t.eventTimes,f=-1;0<c;){var v=31-Sn(c);x=1<<v,v=r[v],v>f&&(f=v),c&=~x}if(c=f,c=it()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Vb(c/1960))-c,10<c){t.timeoutHandle=ou(ro.bind(null,t,Ut,sr),c);break}ro(t,Ut,sr);break;case 5:ro(t,Ut,sr);break;default:throw Error(o(329))}}}return Vt(t,it()),t.callbackNode===s?I0.bind(null,t):null}function Ju(t,r){var s=Zi;return t.current.memoizedState.isDehydrated&&(no(t,r).flags|=256),t=Ml(t,r),t!==2&&(r=Ut,Ut=s,r!==null&&Zu(r)),t}function Zu(t){Ut===null?Ut=t:Ut.push.apply(Ut,t)}function Kb(t){for(var r=t;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var f=s[c],x=f.getSnapshot;f=f.value;try{if(!jn(x(),f))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ar(t,r){for(r&=~qu,r&=~Al,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var s=31-Sn(r),c=1<<s;t[s]=-1,r&=~c}}function P0(t){if(Le&6)throw Error(o(327));Vo();var r=Hs(t,0);if(!(r&1))return Vt(t,it()),null;var s=Ml(t,r);if(t.tag!==0&&s===2){var c=Dc(t);c!==0&&(r=c,s=Ju(t,c))}if(s===1)throw s=Ji,no(t,0),Ar(t,r),Vt(t,it()),s;if(s===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,ro(t,Ut,sr),Vt(t,it()),null}function ed(t,r){var s=Le;Le|=1;try{return t(r)}finally{Le=s,Le===0&&(Uo=it()+500,al&&kr())}}function to(t){$r!==null&&$r.tag===0&&!(Le&6)&&Vo();var r=Le;Le|=1;var s=xn.transition,c=He;try{if(xn.transition=null,He=1,t)return t()}finally{He=c,xn.transition=s,Le=r,!(Le&6)&&kr()}}function td(){nn=Ho.current,Ge(Ho)}function no(t,r){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,kb(s)),at!==null)for(s=at.return;s!==null;){var c=s;switch(uu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&sl();break;case 3:Fo(),Ge(Bt),Ge(Rt),Su();break;case 5:bu(c);break;case 4:Fo();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:gu(c.type._context);break;case 22:case 23:td()}s=s.return}if(mt=t,at=t=Rr(t.current,null),St=nn=r,dt=0,Ji=null,qu=Al=eo=0,Ut=Zi=null,Xr!==null){for(r=0;r<Xr.length;r++)if(s=Xr[r],c=s.interleaved,c!==null){s.interleaved=null;var f=c.next,x=s.pending;if(x!==null){var v=x.next;x.next=f,c.next=v}s.pending=c}Xr=null}return t}function N0(t,r){do{var s=at;try{if(mu(),yl.current=kl,wl){for(var c=et.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}wl=!1}if(Zr=0,ht=ut=et=null,Ki=!1,Qi=0,Qu.current=null,s===null||s.return===null){dt=1,Ji=r,at=null;break}e:{var x=t,v=s.return,D=s,O=r;if(r=St,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var X=O,se=D,ae=se.tag;if(!(se.mode&1)&&(ae===0||ae===11||ae===15)){var oe=se.alternate;oe?(se.updateQueue=oe.updateQueue,se.memoizedState=oe.memoizedState,se.lanes=oe.lanes):(se.updateQueue=null,se.memoizedState=null)}var we=i0(v);if(we!==null){we.flags&=-257,s0(we,v,D,x,r),we.mode&1&&o0(x,X,r),r=we,O=X;var be=r.updateQueue;if(be===null){var ke=new Set;ke.add(O),r.updateQueue=ke}else be.add(O);break e}else{if(!(r&1)){o0(x,X,r),nd();break e}O=Error(o(426))}}else if(Xe&&D.mode&1){var st=i0(v);if(st!==null){!(st.flags&65536)&&(st.flags|=256),s0(st,v,D,x,r),pu(Bo(O,D));break e}}x=O=Bo(O,D),dt!==4&&(dt=2),Zi===null?Zi=[x]:Zi.push(x),x=v;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var U=n0(x,O,r);Am(x,U);break e;case 1:D=O;var _=x.type,K=x.stateNode;if(!(x.flags&128)&&(typeof _.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Er===null||!Er.has(K)))){x.flags|=65536,r&=-r,x.lanes|=r;var pe=r0(x,D,r);Am(x,pe);break e}}x=x.return}while(x!==null)}O0(s)}catch(Se){r=Se,at===s&&s!==null&&(at=s=s.return);continue}break}while(!0)}function M0(){var t=Tl.current;return Tl.current=kl,t===null?kl:t}function nd(){(dt===0||dt===3||dt===2)&&(dt=4),mt===null||!(eo&268435455)&&!(Al&268435455)||Ar(mt,St)}function Ml(t,r){var s=Le;Le|=2;var c=M0();(mt!==t||St!==r)&&(sr=null,no(t,r));do try{Qb();break}catch(f){N0(t,f)}while(!0);if(mu(),Le=s,Tl.current=c,at!==null)throw Error(o(261));return mt=null,St=0,dt}function Qb(){for(;at!==null;)L0(at)}function qb(){for(;at!==null&&!w1();)L0(at)}function L0(t){var r=F0(t.alternate,t,nn);t.memoizedProps=t.pendingProps,r===null?O0(t):at=r,Qu.current=null}function O0(t){var r=t;do{var s=r.alternate;if(t=r.return,r.flags&32768){if(s=Bb(s,r),s!==null){s.flags&=32767,at=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,at=null;return}}else if(s=Fb(s,r,nn),s!==null){at=s;return}if(r=r.sibling,r!==null){at=r;return}at=r=t}while(r!==null);dt===0&&(dt=5)}function ro(t,r,s){var c=He,f=xn.transition;try{xn.transition=null,He=1,Gb(t,r,s,c)}finally{xn.transition=f,He=c}return null}function Gb(t,r,s,c){do Vo();while($r!==null);if(Le&6)throw Error(o(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var x=s.lanes|s.childLanes;if(A1(t,x),t===mt&&(at=mt=null,St=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Dl||(Dl=!0,B0(_s,function(){return Vo(),null})),x=(s.flags&15990)!==0,s.subtreeFlags&15990||x){x=xn.transition,xn.transition=null;var v=He;He=1;var D=Le;Le|=4,Qu.current=null,Hb(t,s),$0(s,t),mb(nu),Ks=!!tu,nu=tu=null,t.current=s,Ub(s),v1(),Le=D,He=v,xn.transition=x}else t.current=s;if(Dl&&(Dl=!1,$r=t,Il=f),x=t.pendingLanes,x===0&&(Er=null),S1(s.stateNode),Vt(t,it()),r!==null)for(c=t.onRecoverableError,s=0;s<r.length;s++)f=r[s],c(f.value,{componentStack:f.stack,digest:f.digest});if(Rl)throw Rl=!1,t=Yu,Yu=null,t;return Il&1&&t.tag!==0&&Vo(),x=t.pendingLanes,x&1?t===Xu?es++:(es=0,Xu=t):es=0,kr(),null}function Vo(){if($r!==null){var t=Ch(Il),r=xn.transition,s=He;try{if(xn.transition=null,He=16>t?16:t,$r===null)var c=!1;else{if(t=$r,$r=null,Il=0,Le&6)throw Error(o(331));var f=Le;for(Le|=4,ve=t.current;ve!==null;){var x=ve,v=x.child;if(ve.flags&16){var D=x.deletions;if(D!==null){for(var O=0;O<D.length;O++){var X=D[O];for(ve=X;ve!==null;){var se=ve;switch(se.tag){case 0:case 11:case 15:Xi(8,se,x)}var ae=se.child;if(ae!==null)ae.return=se,ve=ae;else for(;ve!==null;){se=ve;var oe=se.sibling,we=se.return;if(k0(se),se===X){ve=null;break}if(oe!==null){oe.return=we,ve=oe;break}ve=we}}}var be=x.alternate;if(be!==null){var ke=be.child;if(ke!==null){be.child=null;do{var st=ke.sibling;ke.sibling=null,ke=st}while(ke!==null)}}ve=x}}if(x.subtreeFlags&2064&&v!==null)v.return=x,ve=v;else e:for(;ve!==null;){if(x=ve,x.flags&2048)switch(x.tag){case 0:case 11:case 15:Xi(9,x,x.return)}var U=x.sibling;if(U!==null){U.return=x.return,ve=U;break e}ve=x.return}}var _=t.current;for(ve=_;ve!==null;){v=ve;var K=v.child;if(v.subtreeFlags&2064&&K!==null)K.return=v,ve=K;else e:for(v=_;ve!==null;){if(D=ve,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:$l(9,D)}}catch(Se){nt(D,D.return,Se)}if(D===v){ve=null;break e}var pe=D.sibling;if(pe!==null){pe.return=D.return,ve=pe;break e}ve=D.return}}if(Le=f,kr(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Fs,t)}catch{}c=!0}return c}finally{He=s,xn.transition=r}}return!1}function z0(t,r,s){r=Bo(s,r),r=n0(t,r,1),t=jr(t,r,1),r=Ft(),t!==null&&(ji(t,1,r),Vt(t,r))}function nt(t,r,s){if(t.tag===3)z0(t,t,s);else for(;r!==null;){if(r.tag===3){z0(r,t,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Er===null||!Er.has(c))){t=Bo(s,t),t=r0(r,t,1),r=jr(r,t,1),t=Ft(),r!==null&&(ji(r,1,t),Vt(r,t));break}}r=r.return}}function Yb(t,r,s){var c=t.pingCache;c!==null&&c.delete(r),r=Ft(),t.pingedLanes|=t.suspendedLanes&s,mt===t&&(St&s)===s&&(dt===4||dt===3&&(St&130023424)===St&&500>it()-Gu?no(t,0):qu|=s),Vt(t,r)}function _0(t,r){r===0&&(t.mode&1?(r=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):r=1);var s=Ft();t=rr(t,r),t!==null&&(ji(t,r,s),Vt(t,s))}function Xb(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),_0(t,s)}function Jb(t,r){var s=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),_0(t,s)}var F0;F0=function(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps||Bt.current)Ht=!0;else{if(!(t.lanes&s)&&!(r.flags&128))return Ht=!1,_b(t,r,s);Ht=!!(t.flags&131072)}else Ht=!1,Xe&&r.flags&1048576&&wm(r,ul,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Cl(t,r),t=r.pendingProps;var f=Po(r,Rt.current);_o(r,s),f=Eu(null,r,c,t,f,s);var x=$u();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Wt(c)?(x=!0,ll(r)):x=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,wu(r),f.updater=Sl,r.stateNode=f,f._reactInternals=r,Pu(r,c,t,s),r=Ou(null,r,c,!0,x,s)):(r.tag=0,Xe&&x&&cu(r),_t(null,r,f,s),r=r.child),r;case 16:c=r.elementType;e:{switch(Cl(t,r),t=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=ek(c),t=En(c,t),f){case 0:r=Lu(null,r,c,t,s);break e;case 1:r=f0(null,r,c,t,s);break e;case 11:r=l0(null,r,c,t,s);break e;case 14:r=a0(null,r,c,En(c.type,t),s);break e}throw Error(o(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:En(c,f),Lu(t,r,c,f,s);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:En(c,f),f0(t,r,c,f,s);case 3:e:{if(p0(r),t===null)throw Error(o(387));c=r.pendingProps,x=r.memoizedState,f=x.element,Tm(t,r),gl(r,c,null,s);var v=r.memoizedState;if(c=v.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){f=Bo(Error(o(423)),r),r=h0(t,r,c,s,f);break e}else if(c!==f){f=Bo(Error(o(424)),r),r=h0(t,r,c,s,f);break e}else for(tn=wr(r.stateNode.containerInfo.firstChild),en=r,Xe=!0,Cn=null,s=Em(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Lo(),c===f){r=ir(t,r,s);break e}_t(t,r,c,s)}r=r.child}return r;case 5:return Dm(r),t===null&&fu(r),c=r.type,f=r.pendingProps,x=t!==null?t.memoizedProps:null,v=f.children,ru(c,f)?v=null:x!==null&&ru(c,x)&&(r.flags|=32),d0(t,r),_t(t,r,v,s),r.child;case 6:return t===null&&fu(r),null;case 13:return m0(t,r,s);case 4:return vu(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Oo(r,null,c,s):_t(t,r,c,s),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:En(c,f),l0(t,r,c,f,s);case 7:return _t(t,r,r.pendingProps,s),r.child;case 8:return _t(t,r,r.pendingProps.children,s),r.child;case 12:return _t(t,r,r.pendingProps.children,s),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,x=r.memoizedProps,v=f.value,Ke(pl,c._currentValue),c._currentValue=v,x!==null)if(jn(x.value,v)){if(x.children===f.children&&!Bt.current){r=ir(t,r,s);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var D=x.dependencies;if(D!==null){v=x.child;for(var O=D.firstContext;O!==null;){if(O.context===c){if(x.tag===1){O=or(-1,s&-s),O.tag=2;var X=x.updateQueue;if(X!==null){X=X.shared;var se=X.pending;se===null?O.next=O:(O.next=se.next,se.next=O),X.pending=O}}x.lanes|=s,O=x.alternate,O!==null&&(O.lanes|=s),xu(x.return,s,r),D.lanes|=s;break}O=O.next}}else if(x.tag===10)v=x.type===r.type?null:x.child;else if(x.tag===18){if(v=x.return,v===null)throw Error(o(341));v.lanes|=s,D=v.alternate,D!==null&&(D.lanes|=s),xu(v,s,r),v=x.sibling}else v=x.child;if(v!==null)v.return=x;else for(v=x;v!==null;){if(v===r){v=null;break}if(x=v.sibling,x!==null){x.return=v.return,v=x;break}v=v.return}x=v}_t(t,r,f.children,s),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,_o(r,s),f=mn(f),c=c(f),r.flags|=1,_t(t,r,c,s),r.child;case 14:return c=r.type,f=En(c,r.pendingProps),f=En(c.type,f),a0(t,r,c,f,s);case 15:return c0(t,r,r.type,r.pendingProps,s);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:En(c,f),Cl(t,r),r.tag=1,Wt(c)?(t=!0,ll(r)):t=!1,_o(r,s),e0(r,c,f),Pu(r,c,f,s),Ou(null,r,c,!0,t,s);case 19:return x0(t,r,s);case 22:return u0(t,r,s)}throw Error(o(156,r.tag))};function B0(t,r){return vh(t,r)}function Zb(t,r,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(t,r,s,c){return new Zb(t,r,s,c)}function rd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ek(t){if(typeof t=="function")return rd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xe)return 11;if(t===N)return 14}return 2}function Rr(t,r){var s=t.alternate;return s===null?(s=yn(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Ll(t,r,s,c,f,x){var v=2;if(c=t,typeof t=="function")rd(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case Z:return oo(s.children,f,x,r);case ne:v=8,f|=8;break;case ie:return t=yn(12,s,r,f|2),t.elementType=ie,t.lanes=x,t;case ce:return t=yn(13,s,r,f),t.elementType=ce,t.lanes=x,t;case G:return t=yn(19,s,r,f),t.elementType=G,t.lanes=x,t;case q:return Ol(s,f,x,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case me:v=10;break e;case de:v=9;break e;case xe:v=11;break e;case N:v=14;break e;case I:v=16,c=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return r=yn(v,s,r,f),r.elementType=t,r.type=c,r.lanes=x,r}function oo(t,r,s,c){return t=yn(7,t,c,r),t.lanes=s,t}function Ol(t,r,s,c){return t=yn(22,t,c,r),t.elementType=q,t.lanes=s,t.stateNode={isHidden:!1},t}function od(t,r,s){return t=yn(6,t,null,r),t.lanes=s,t}function id(t,r,s){return r=yn(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function tk(t,r,s,c,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function sd(t,r,s,c,f,x,v,D,O){return t=new tk(t,r,s,D,O),r===1?(r=1,x===!0&&(r|=8)):r=0,x=yn(3,null,null,r),t.current=x,x.stateNode=t,x.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(x),t}function nk(t,r,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:c==null?null:""+c,children:t,containerInfo:r,implementation:s}}function W0(t){if(!t)return br;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Wt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var s=t.type;if(Wt(s))return gm(t,s,r)}return r}function H0(t,r,s,c,f,x,v,D,O){return t=sd(s,c,!0,t,f,x,v,D,O),t.context=W0(null),s=t.current,c=Ft(),f=Tr(s),x=or(c,f),x.callback=r??null,jr(s,x,f),t.current.lanes=f,ji(t,f,c),Vt(t,c),t}function zl(t,r,s,c){var f=r.current,x=Ft(),v=Tr(f);return s=W0(s),r.context===null?r.context=s:r.pendingContext=s,r=or(x,v),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=jr(f,r,v),t!==null&&(An(t,f,v,x),ml(t,f,v)),v}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function U0(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function ld(t,r){U0(t,r),(t=t.alternate)&&U0(t,r)}var V0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}Fl.prototype.render=ad.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));zl(t,r,null,null)},Fl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;to(function(){zl(null,t,null,null)}),r[Zn]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var r=Th();t={blockedOn:null,target:t,priority:r};for(var s=0;s<gr.length&&r!==0&&r<gr[s].priority;s++);gr.splice(s,0,t),s===0&&Dh(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function K0(){}function rk(t,r,s,c,f){if(f){if(typeof c=="function"){var x=c;c=function(){var X=_l(v);x.call(X)}}var v=H0(r,c,t,0,null,!1,!1,"",K0);return t._reactRootContainer=v,t[Zn]=v.current,zi(t.nodeType===8?t.parentNode:t),to(),v}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var D=c;c=function(){var X=_l(O);D.call(X)}}var O=sd(t,0,!1,null,null,!1,!1,"",K0);return t._reactRootContainer=O,t[Zn]=O.current,zi(t.nodeType===8?t.parentNode:t),to(function(){zl(r,O,s,c)}),O}function Wl(t,r,s,c,f){var x=s._reactRootContainer;if(x){var v=x;if(typeof f=="function"){var D=f;f=function(){var O=_l(v);D.call(O)}}zl(r,v,t,f)}else v=rk(s,r,t,f,c);return _l(v)}Eh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var s=Si(r.pendingLanes);s!==0&&(Pc(r,s|1),Vt(r,it()),!(Le&6)&&(Uo=it()+500,kr()))}break;case 13:to(function(){var c=rr(t,1);if(c!==null){var f=Ft();An(c,t,1,f)}}),ld(t,1)}},Nc=function(t){if(t.tag===13){var r=rr(t,134217728);if(r!==null){var s=Ft();An(r,t,134217728,s)}ld(t,134217728)}},$h=function(t){if(t.tag===13){var r=Tr(t),s=rr(t,r);if(s!==null){var c=Ft();An(s,t,r,c)}ld(t,r)}},Th=function(){return He},Ah=function(t,r){var s=He;try{return He=t,r()}finally{He=s}},Ec=function(t,r,s){switch(r){case"input":if(Je(t,s),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==t&&c.form===t.form){var f=il(c);if(!f)throw Error(o(90));he(c),Je(c,f)}}}break;case"textarea":Jt(t,s);break;case"select":r=s.value,r!=null&&fn(t,!!s.multiple,r,!1)}},ph=ed,hh=to;var ok={usingClientEntryPoint:!1,Events:[Bi,Do,il,dh,fh,ed]},ts={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ik={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yh(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{Fs=Hl.inject(ik),_n=Hl}catch{}}return Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ok,Kt.createPortal=function(t,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(r))throw Error(o(200));return nk(t,r,null,s)},Kt.createRoot=function(t,r){if(!cd(t))throw Error(o(299));var s=!1,c="",f=V0;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=sd(t,1,!1,null,null,s,!1,c,f),t[Zn]=r.current,zi(t.nodeType===8?t.parentNode:t),new ad(r)},Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=yh(r),t=t===null?null:t.stateNode,t},Kt.flushSync=function(t){return to(t)},Kt.hydrate=function(t,r,s){if(!Bl(r))throw Error(o(200));return Wl(null,t,r,!0,s)},Kt.hydrateRoot=function(t,r,s){if(!cd(t))throw Error(o(405));var c=s!=null&&s.hydratedSources||null,f=!1,x="",v=V0;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(x=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),r=H0(r,null,t,1,s??null,f,!1,x,v),t[Zn]=r.current,zi(t),c)for(t=0;t<c.length;t++)s=c[t],f=s._getVersion,f=f(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,f]:r.mutableSourceEagerHydrationData.push(s,f);return new Fl(r)},Kt.render=function(t,r,s){if(!Bl(r))throw Error(o(200));return Wl(null,t,r,!1,s)},Kt.unmountComponentAtNode=function(t){if(!Bl(t))throw Error(o(40));return t._reactRootContainer?(to(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[Zn]=null})}),!0):!1},Kt.unstable_batchedUpdates=ed,Kt.unstable_renderSubtreeIntoContainer=function(t,r,s,c){if(!Bl(s))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return Wl(t,r,s,!1,c)},Kt.version="18.3.1-next-f1338f8080-20240426",Kt}var eg;function ry(){if(eg)return fd.exports;eg=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),fd.exports=hk(),fd.exports}var tg;function mk(){if(tg)return Ul;tg=1;var e=ry();return Ul.createRoot=e.createRoot,Ul.hydrateRoot=e.hydrateRoot,Ul}var gk=mk(),wt=function(){return wt=Object.assign||function(n){for(var o,i=1,a=arguments.length;i<a;i++){o=arguments[i];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])}return n},wt.apply(this,arguments)};function ei(e,n,o){if(o||arguments.length===2)for(var i=0,a=n.length,u;i<a;i++)(u||!(i in n))&&(u||(u=Array.prototype.slice.call(n,0,i)),u[i]=n[i]);return e.concat(u||Array.prototype.slice.call(n))}var Ye="-ms-",ms="-moz-",Fe="-webkit-",oy="comm",Va="rule",hp="decl",xk="@import",iy="@keyframes",yk="@layer",sy=Math.abs,mp=String.fromCharCode,df=Object.assign;function wk(e,n){return yt(e,0)^45?(((n<<2^yt(e,0))<<2^yt(e,1))<<2^yt(e,2))<<2^yt(e,3):0}function ly(e){return e.trim()}function ar(e,n){return(e=n.exec(e))?e[0]:e}function Ie(e,n,o){return e.replace(n,o)}function ia(e,n,o){return e.indexOf(n,o)}function yt(e,n){return e.charCodeAt(n)|0}function ti(e,n,o){return e.slice(n,o)}function Vn(e){return e.length}function ay(e){return e.length}function cs(e,n){return n.push(e),e}function vk(e,n){return e.map(n).join("")}function ng(e,n){return e.filter(function(o){return!ar(o,n)})}var Ka=1,ni=1,cy=0,wn=0,ct=0,ai="";function Qa(e,n,o,i,a,u,d,p){return{value:e,root:n,parent:o,type:i,props:a,children:u,line:Ka,column:ni,length:d,return:"",siblings:p}}function Ir(e,n){return df(Qa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Ko(e){for(;e.root;)e=Ir(e.root,{children:[e]});cs(e,e.siblings)}function bk(){return ct}function kk(){return ct=wn>0?yt(ai,--wn):0,ni--,ct===10&&(ni=1,Ka--),ct}function Dn(){return ct=wn<cy?yt(ai,wn++):0,ni++,ct===10&&(ni=1,Ka++),ct}function fo(){return yt(ai,wn)}function sa(){return wn}function qa(e,n){return ti(ai,e,n)}function ff(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sk(e){return Ka=ni=1,cy=Vn(ai=e),wn=0,[]}function jk(e){return ai="",e}function md(e){return ly(qa(wn-1,pf(e===91?e+2:e===40?e+1:e)))}function Ck(e){for(;(ct=fo())&&ct<33;)Dn();return ff(e)>2||ff(ct)>3?"":" "}function Ek(e,n){for(;--n&&Dn()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return qa(e,sa()+(n<6&&fo()==32&&Dn()==32))}function pf(e){for(;Dn();)switch(ct){case e:return wn;case 34:case 39:e!==34&&e!==39&&pf(ct);break;case 40:e===41&&pf(e);break;case 92:Dn();break}return wn}function $k(e,n){for(;Dn()&&e+ct!==57;)if(e+ct===84&&fo()===47)break;return"/*"+qa(n,wn-1)+"*"+mp(e===47?e:Dn())}function Tk(e){for(;!ff(fo());)Dn();return qa(e,wn)}function Ak(e){return jk(la("",null,null,null,[""],e=Sk(e),0,[0],e))}function la(e,n,o,i,a,u,d,p,h){for(var m=0,y=0,w=d,k=0,T=0,E=0,C=1,$=1,b=1,j=0,S="",R=a,M=u,V=i,Z=S;$;)switch(E=j,j=Dn()){case 40:if(E!=108&&yt(Z,w-1)==58){ia(Z+=Ie(md(j),"&","&\f"),"&\f",sy(m?p[m-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:Z+=md(j);break;case 9:case 10:case 13:case 32:Z+=Ck(E);break;case 92:Z+=Ek(sa()-1,7);continue;case 47:switch(fo()){case 42:case 47:cs(Rk($k(Dn(),sa()),n,o,h),h);break;default:Z+="/"}break;case 123*C:p[m++]=Vn(Z)*b;case 125*C:case 59:case 0:switch(j){case 0:case 125:$=0;case 59+y:b==-1&&(Z=Ie(Z,/\f/g,"")),T>0&&Vn(Z)-w&&cs(T>32?og(Z+";",i,o,w-1,h):og(Ie(Z," ","")+";",i,o,w-2,h),h);break;case 59:Z+=";";default:if(cs(V=rg(Z,n,o,m,y,a,p,S,R=[],M=[],w,u),u),j===123)if(y===0)la(Z,n,V,V,R,u,w,p,M);else switch(k===99&&yt(Z,3)===110?100:k){case 100:case 108:case 109:case 115:la(e,V,V,i&&cs(rg(e,V,V,0,0,a,p,S,a,R=[],w,M),M),a,M,w,p,i?R:M);break;default:la(Z,V,V,V,[""],M,0,p,M)}}m=y=T=0,C=b=1,S=Z="",w=d;break;case 58:w=1+Vn(Z),T=E;default:if(C<1){if(j==123)--C;else if(j==125&&C++==0&&kk()==125)continue}switch(Z+=mp(j),j*C){case 38:b=y>0?1:(Z+="\f",-1);break;case 44:p[m++]=(Vn(Z)-1)*b,b=1;break;case 64:fo()===45&&(Z+=md(Dn())),k=fo(),y=w=Vn(S=Z+=Tk(sa())),j++;break;case 45:E===45&&Vn(Z)==2&&(C=0)}}return u}function rg(e,n,o,i,a,u,d,p,h,m,y,w){for(var k=a-1,T=a===0?u:[""],E=ay(T),C=0,$=0,b=0;C<i;++C)for(var j=0,S=ti(e,k+1,k=sy($=d[C])),R=e;j<E;++j)(R=ly($>0?T[j]+" "+S:Ie(S,/&\f/g,T[j])))&&(h[b++]=R);return Qa(e,n,o,a===0?Va:p,h,m,y,w)}function Rk(e,n,o,i){return Qa(e,n,o,oy,mp(bk()),ti(e,2,-2),0,i)}function og(e,n,o,i,a){return Qa(e,n,o,hp,ti(e,0,i),ti(e,i+1,-1),i,a)}function uy(e,n,o){switch(wk(e,n)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 4789:return ms+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+ms+e+Ye+e+e;case 5936:switch(yt(e,n+11)){case 114:return Fe+e+Ye+Ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+Ye+Ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+Ye+Ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Fe+e+Ye+e+e;case 6165:return Fe+e+Ye+"flex-"+e+e;case 5187:return Fe+e+Ie(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+Ye+"flex-$1$2")+e;case 5443:return Fe+e+Ye+"flex-item-"+Ie(e,/flex-|-self/g,"")+(ar(e,/flex-|baseline/)?"":Ye+"grid-row-"+Ie(e,/flex-|-self/g,""))+e;case 4675:return Fe+e+Ye+"flex-line-pack"+Ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return Fe+e+Ye+Ie(e,"shrink","negative")+e;case 5292:return Fe+e+Ye+Ie(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Ie(e,"-grow","")+Fe+e+Ye+Ie(e,"grow","positive")+e;case 4554:return Fe+Ie(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Ie(Ie(Ie(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Ie(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Ie(Ie(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4200:if(!ar(e,/flex-|baseline/))return Ye+"grid-column-align"+ti(e,n)+e;break;case 2592:case 3360:return Ye+Ie(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(i,a){return n=a,ar(i.props,/grid-\w+-end/)})?~ia(e+(o=o[n].value),"span",0)?e:Ye+Ie(e,"-start","")+e+Ye+"grid-row-span:"+(~ia(o,"span",0)?ar(o,/\d+/):+ar(o,/\d+/)-+ar(e,/\d+/))+";":Ye+Ie(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(i){return ar(i.props,/grid-\w+-start/)})?e:Ye+Ie(Ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ie(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Vn(e)-1-n>6)switch(yt(e,n+1)){case 109:if(yt(e,n+4)!==45)break;case 102:return Ie(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+ms+(yt(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~ia(e,"stretch",0)?uy(Ie(e,"stretch","fill-available"),n,o)+e:e}break;case 5152:case 5920:return Ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,u,d,p,h,m){return Ye+a+":"+u+m+(d?Ye+a+"-span:"+(p?h:+h-+u)+m:"")+e});case 4949:if(yt(e,n+6)===121)return Ie(e,":",":"+Fe)+e;break;case 6444:switch(yt(e,yt(e,14)===45?18:11)){case 120:return Ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(yt(e,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+Ye+"$2box$3")+e;case 100:return Ie(e,":",":"+Ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ie(e,"scroll-","scroll-snap-")+e}return e}function Sa(e,n){for(var o="",i=0;i<e.length;i++)o+=n(e[i],i,e,n)||"";return o}function Dk(e,n,o,i){switch(e.type){case yk:if(e.children.length)break;case xk:case hp:return e.return=e.return||e.value;case oy:return"";case iy:return e.return=e.value+"{"+Sa(e.children,i)+"}";case Va:if(!Vn(e.value=e.props.join(",")))return""}return Vn(o=Sa(e.children,i))?e.return=e.value+"{"+o+"}":""}function Ik(e){var n=ay(e);return function(o,i,a,u){for(var d="",p=0;p<n;p++)d+=e[p](o,i,a,u)||"";return d}}function Pk(e){return function(n){n.root||(n=n.return)&&e(n)}}function Nk(e,n,o,i){if(e.length>-1&&!e.return)switch(e.type){case hp:e.return=uy(e.value,e.length,o);return;case iy:return Sa([Ir(e,{value:Ie(e.value,"@","@"+Fe)})],i);case Va:if(e.length)return vk(o=e.props,function(a){switch(ar(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ko(Ir(e,{props:[Ie(a,/:(read-\w+)/,":"+ms+"$1")]})),Ko(Ir(e,{props:[a]})),df(e,{props:ng(o,i)});break;case"::placeholder":Ko(Ir(e,{props:[Ie(a,/:(plac\w+)/,":"+Fe+"input-$1")]})),Ko(Ir(e,{props:[Ie(a,/:(plac\w+)/,":"+ms+"$1")]})),Ko(Ir(e,{props:[Ie(a,/:(plac\w+)/,Ye+"input-$1")]})),Ko(Ir(e,{props:[a]})),df(e,{props:ng(o,i)});break}return""})}}var Mk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},on={},ri=typeof process<"u"&&on!==void 0&&(on.REACT_APP_SC_ATTR||on.SC_ATTR)||"data-styled",dy="active",fy="data-styled-version",Ga="6.1.14",gp=`/*!sc*/
`,ja=typeof window<"u"&&"HTMLElement"in window,Lk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&on.REACT_APP_SC_DISABLE_SPEEDY!==""?on.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&on.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&on!==void 0&&on.SC_DISABLE_SPEEDY!==void 0&&on.SC_DISABLE_SPEEDY!==""&&on.SC_DISABLE_SPEEDY!=="false"&&on.SC_DISABLE_SPEEDY),Ok={},Ya=Object.freeze([]),oi=Object.freeze({});function py(e,n,o){return o===void 0&&(o=oi),e.theme!==o.theme&&e.theme||n||o.theme}var hy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),zk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_k=/(^-|-$)/g;function ig(e){return e.replace(zk,"-").replace(_k,"")}var Fk=/(a)(d)/gi,Vl=52,sg=function(e){return String.fromCharCode(e+(e>25?39:97))};function hf(e){var n,o="";for(n=Math.abs(e);n>Vl;n=n/Vl|0)o=sg(n%Vl)+o;return(sg(n%Vl)+o).replace(Fk,"$1-$2")}var gd,my=5381,Xo=function(e,n){for(var o=n.length;o;)e=33*e^n.charCodeAt(--o);return e},gy=function(e){return Xo(my,e)};function xp(e){return hf(gy(e)>>>0)}function Bk(e){return e.displayName||e.name||"Component"}function xd(e){return typeof e=="string"&&!0}var xy=typeof Symbol=="function"&&Symbol.for,yy=xy?Symbol.for("react.memo"):60115,Wk=xy?Symbol.for("react.forward_ref"):60112,Hk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Uk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vk=((gd={})[Wk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gd[yy]=wy,gd);function lg(e){return("type"in(n=e)&&n.type.$$typeof)===yy?wy:"$$typeof"in e?Vk[e.$$typeof]:Hk;var n}var Kk=Object.defineProperty,Qk=Object.getOwnPropertyNames,ag=Object.getOwnPropertySymbols,qk=Object.getOwnPropertyDescriptor,Gk=Object.getPrototypeOf,cg=Object.prototype;function vy(e,n,o){if(typeof n!="string"){if(cg){var i=Gk(n);i&&i!==cg&&vy(e,i,o)}var a=Qk(n);ag&&(a=a.concat(ag(n)));for(var u=lg(e),d=lg(n),p=0;p<a.length;++p){var h=a[p];if(!(h in Uk||o&&o[h]||d&&h in d||u&&h in u)){var m=qk(n,h);try{Kk(e,h,m)}catch{}}}}return e}function ho(e){return typeof e=="function"}function yp(e){return typeof e=="object"&&"styledComponentId"in e}function ao(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Ca(e,n){if(e.length===0)return"";for(var o=e[0],i=1;i<e.length;i++)o+=e[i];return o}function vs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function mf(e,n,o){if(o===void 0&&(o=!1),!o&&!vs(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)e[i]=mf(e[i],n[i]);else if(vs(n))for(var i in n)e[i]=mf(e[i],n[i]);return e}function wp(e,n){Object.defineProperty(e,"toString",{value:n})}function mo(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Yk=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var o=0,i=0;i<n;i++)o+=this.groupSizes[i];return o},e.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,u=a;n>=u;)if((u<<=1)<0)throw mo(16,"".concat(n));this.groupSizes=new Uint32Array(u),this.groupSizes.set(i),this.length=u;for(var d=a;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(n+1),h=(d=0,o.length);d<h;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[n]++,p++)},e.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o;this.groupSizes[n]=0;for(var u=i;u<a;u++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),u=a+i,d=a;d<u;d++)o+="".concat(this.tag.getRule(d)).concat(gp);return o},e}(),aa=new Map,Ea=new Map,ca=1,Kl=function(e){if(aa.has(e))return aa.get(e);for(;Ea.has(ca);)ca++;var n=ca++;return aa.set(e,n),Ea.set(n,e),n},Xk=function(e,n){ca=n+1,aa.set(e,n),Ea.set(n,e)},Jk="style[".concat(ri,"][").concat(fy,'="').concat(Ga,'"]'),Zk=new RegExp("^".concat(ri,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eS=function(e,n,o){for(var i,a=o.split(","),u=0,d=a.length;u<d;u++)(i=a[u])&&e.registerName(n,i)},tS=function(e,n){for(var o,i=((o=n.textContent)!==null&&o!==void 0?o:"").split(gp),a=[],u=0,d=i.length;u<d;u++){var p=i[u].trim();if(p){var h=p.match(Zk);if(h){var m=0|parseInt(h[1],10),y=h[2];m!==0&&(Xk(y,m),eS(e,y,h[3]),e.getTag().insertRules(m,a)),a.length=0}else a.push(p)}}},ug=function(e){for(var n=document.querySelectorAll(Jk),o=0,i=n.length;o<i;o++){var a=n[o];a&&a.getAttribute(ri)!==dy&&(tS(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function nS(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var by=function(e){var n=document.head,o=e||n,i=document.createElement("style"),a=function(p){var h=Array.from(p.querySelectorAll("style[".concat(ri,"]")));return h[h.length-1]}(o),u=a!==void 0?a.nextSibling:null;i.setAttribute(ri,dy),i.setAttribute(fy,Ga);var d=nS();return d&&i.setAttribute("nonce",d),o.insertBefore(i,u),i},rS=function(){function e(n){this.element=by(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,u=i.length;a<u;a++){var d=i[a];if(d.ownerNode===o)return d}throw mo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},e}(),oS=function(){function e(n){this.element=by(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),iS=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),dg=ja,sS={isServer:!ja,useCSSOMInjection:!Lk},$a=function(){function e(n,o,i){n===void 0&&(n=oi),o===void 0&&(o={});var a=this;this.options=wt(wt({},sS),n),this.gs=o,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ja&&dg&&(dg=!1,ug(this)),wp(this,function(){return function(u){for(var d=u.getTag(),p=d.length,h="",m=function(w){var k=function(b){return Ea.get(b)}(w);if(k===void 0)return"continue";var T=u.names.get(k),E=d.getGroup(w);if(T===void 0||!T.size||E.length===0)return"continue";var C="".concat(ri,".g").concat(w,'[id="').concat(k,'"]'),$="";T!==void 0&&T.forEach(function(b){b.length>0&&($+="".concat(b,","))}),h+="".concat(E).concat(C,'{content:"').concat($,'"}').concat(gp)},y=0;y<p;y++)m(y);return h}(a)})}return e.registerId=function(n){return Kl(n)},e.prototype.rehydrate=function(){!this.server&&ja&&ug(this)},e.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new e(wt(wt({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var i=o.useCSSOMInjection,a=o.target;return o.isServer?new iS(a):i?new rS(a):new oS(a)}(this.options),new Yk(n)));var n},e.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},e.prototype.registerName=function(n,o){if(Kl(n),this.names.has(n))this.names.get(n).add(o);else{var i=new Set;i.add(o),this.names.set(n,i)}},e.prototype.insertRules=function(n,o,i){this.registerName(n,o),this.getTag().insertRules(Kl(n),i)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Kl(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lS=/&/g,aS=/^\s*\/\/.*$/gm;function ky(e,n){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(i){return"".concat(n," ").concat(i)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=ky(o.children,n)),o})}function cS(e){var n,o,i,a=oi,u=a.options,d=u===void 0?oi:u,p=a.plugins,h=p===void 0?Ya:p,m=function(k,T,E){return E.startsWith(o)&&E.endsWith(o)&&E.replaceAll(o,"").length>0?".".concat(n):k},y=h.slice();y.push(function(k){k.type===Va&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(lS,o).replace(i,m))}),d.prefix&&y.push(Nk),y.push(Dk);var w=function(k,T,E,C){T===void 0&&(T=""),E===void 0&&(E=""),C===void 0&&(C="&"),n=C,o=T,i=new RegExp("\\".concat(o,"\\b"),"g");var $=k.replace(aS,""),b=Ak(E||T?"".concat(E," ").concat(T," { ").concat($," }"):$);d.namespace&&(b=ky(b,d.namespace));var j=[];return Sa(b,Ik(y.concat(Pk(function(S){return j.push(S)})))),j};return w.hash=h.length?h.reduce(function(k,T){return T.name||mo(15),Xo(k,T.name)},my).toString():"",w}var uS=new $a,gf=cS(),Sy=J.createContext({shouldForwardProp:void 0,styleSheet:uS,stylis:gf});Sy.Consumer;J.createContext(void 0);function xf(){return g.useContext(Sy)}var jy=function(){function e(n,o){var i=this;this.inject=function(a,u){u===void 0&&(u=gf);var d=i.name+u.hash;a.hasNameForId(i.id,d)||a.insertRules(i.id,d,u(i.rules,d,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,wp(this,function(){throw mo(12,String(i.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=gf),this.name+n.hash},e}(),dS=function(e){return e>="A"&&e<="Z"};function fg(e){for(var n="",o=0;o<e.length;o++){var i=e[o];if(o===1&&i==="-"&&e[0]==="-")return e;dS(i)?n+="-"+i.toLowerCase():n+=i}return n.startsWith("ms-")?"-"+n:n}var Cy=function(e){return e==null||e===!1||e===""},Ey=function(e){var n,o,i=[];for(var a in e){var u=e[a];e.hasOwnProperty(a)&&!Cy(u)&&(Array.isArray(u)&&u.isCss||ho(u)?i.push("".concat(fg(a),":"),u,";"):vs(u)?i.push.apply(i,ei(ei(["".concat(a," {")],Ey(u),!1),["}"],!1)):i.push("".concat(fg(a),": ").concat((n=a,(o=u)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Mk||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return i};function Mr(e,n,o,i){if(Cy(e))return[];if(yp(e))return[".".concat(e.styledComponentId)];if(ho(e)){if(!ho(u=e)||u.prototype&&u.prototype.isReactComponent||!n)return[e];var a=e(n);return Mr(a,n,o,i)}var u;return e instanceof jy?o?(e.inject(o,i),[e.getName(i)]):[e]:vs(e)?Ey(e):Array.isArray(e)?Array.prototype.concat.apply(Ya,e.map(function(d){return Mr(d,n,o,i)})):[e.toString()]}function $y(e){for(var n=0;n<e.length;n+=1){var o=e[n];if(ho(o)&&!yp(o))return!1}return!0}var fS=gy(Ga),pS=function(){function e(n,o,i){this.rules=n,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&$y(n),this.componentId=o,this.baseHash=Xo(fS,o),this.baseStyle=i,$a.registerId(o)}return e.prototype.generateAndInjectStyles=function(n,o,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))a=ao(a,this.staticRulesId);else{var u=Ca(Mr(this.rules,n,o,i)),d=hf(Xo(this.baseHash,u)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=i(u,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}a=ao(a,d),this.staticRulesId=d}else{for(var h=Xo(this.baseHash,i.hash),m="",y=0;y<this.rules.length;y++){var w=this.rules[y];if(typeof w=="string")m+=w;else if(w){var k=Ca(Mr(w,n,o,i));h=Xo(h,k+y),m+=k}}if(m){var T=hf(h>>>0);o.hasNameForId(this.componentId,T)||o.insertRules(this.componentId,T,i(m,".".concat(T),void 0,this.componentId)),a=ao(a,T)}}return a},e}(),bs=J.createContext(void 0);bs.Consumer;function hS(e){var n=J.useContext(bs),o=g.useMemo(function(){return function(i,a){if(!i)throw mo(14);if(ho(i)){var u=i(a);return u}if(Array.isArray(i)||typeof i!="object")throw mo(8);return a?wt(wt({},a),i):i}(e.theme,n)},[e.theme,n]);return e.children?J.createElement(bs.Provider,{value:o},e.children):null}var yd={};function mS(e,n,o){var i=yp(e),a=e,u=!xd(e),d=n.attrs,p=d===void 0?Ya:d,h=n.componentId,m=h===void 0?function(R,M){var V=typeof R!="string"?"sc":ig(R);yd[V]=(yd[V]||0)+1;var Z="".concat(V,"-").concat(xp(Ga+V+yd[V]));return M?"".concat(M,"-").concat(Z):Z}(n.displayName,n.parentComponentId):h,y=n.displayName,w=y===void 0?function(R){return xd(R)?"styled.".concat(R):"Styled(".concat(Bk(R),")")}(e):y,k=n.displayName&&n.componentId?"".concat(ig(n.displayName),"-").concat(n.componentId):n.componentId||m,T=i&&a.attrs?a.attrs.concat(p).filter(Boolean):p,E=n.shouldForwardProp;if(i&&a.shouldForwardProp){var C=a.shouldForwardProp;if(n.shouldForwardProp){var $=n.shouldForwardProp;E=function(R,M){return C(R,M)&&$(R,M)}}else E=C}var b=new pS(o,k,i?a.componentStyle:void 0);function j(R,M){return function(V,Z,ne){var ie=V.attrs,me=V.componentStyle,de=V.defaultProps,xe=V.foldedComponentIds,ce=V.styledComponentId,G=V.target,N=J.useContext(bs),I=xf(),q=V.shouldForwardProp||I.shouldForwardProp,W=py(Z,N,de)||oi,F=function(Q,Y,re){for(var H,A=wt(wt({},Y),{className:void 0,theme:re}),B=0;B<Q.length;B+=1){var le=ho(H=Q[B])?H(A):H;for(var he in le)A[he]=he==="className"?ao(A[he],le[he]):he==="style"?wt(wt({},A[he]),le[he]):le[he]}return Y.className&&(A.className=ao(A.className,Y.className)),A}(ie,Z,W),P=F.as||G,z={};for(var ee in F)F[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&F.theme===W||(ee==="forwardedAs"?z.as=F.forwardedAs:q&&!q(ee,P)||(z[ee]=F[ee]));var ue=function(Q,Y){var re=xf(),H=Q.generateAndInjectStyles(Y,re.styleSheet,re.stylis);return H}(me,F),fe=ao(xe,ce);return ue&&(fe+=" "+ue),F.className&&(fe+=" "+F.className),z[xd(P)&&!hy.has(P)?"class":"className"]=fe,ne&&(z.ref=ne),g.createElement(P,z)}(S,R,M)}j.displayName=w;var S=J.forwardRef(j);return S.attrs=T,S.componentStyle=b,S.displayName=w,S.shouldForwardProp=E,S.foldedComponentIds=i?ao(a.foldedComponentIds,a.styledComponentId):"",S.styledComponentId=k,S.target=i?a.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=i?function(M){for(var V=[],Z=1;Z<arguments.length;Z++)V[Z-1]=arguments[Z];for(var ne=0,ie=V;ne<ie.length;ne++)mf(M,ie[ne],!0);return M}({},a.defaultProps,R):R}}),wp(S,function(){return".".concat(S.styledComponentId)}),u&&vy(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function pg(e,n){for(var o=[e[0]],i=0,a=n.length;i<a;i+=1)o.push(n[i],e[i+1]);return o}var hg=function(e){return Object.assign(e,{isCss:!0})};function ye(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(ho(e)||vs(e))return hg(Mr(pg(Ya,ei([e],n,!0))));var i=e;return n.length===0&&i.length===1&&typeof i[0]=="string"?Mr(i):hg(Mr(pg(i,n)))}function yf(e,n,o){if(o===void 0&&(o=oi),!n)throw mo(1,n);var i=function(a){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return e(n,o,ye.apply(void 0,ei([a],u,!1)))};return i.attrs=function(a){return yf(e,n,wt(wt({},o),{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return yf(e,n,wt(wt({},o),a))},i}var Ty=function(e){return yf(mS,e)},L=Ty;hy.forEach(function(e){L[e]=Ty(e)});var gS=function(){function e(n,o){this.rules=n,this.componentId=o,this.isStatic=$y(n),$a.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,o,i,a){var u=a(Ca(Mr(this.rules,o,i,a)),""),d=this.componentId+n;i.insertRules(d,d,u)},e.prototype.removeStyles=function(n,o){o.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,o,i,a){n>2&&$a.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,o,i,a)},e}();function xS(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=ye.apply(void 0,ei([e],n,!1)),a="sc-global-".concat(xp(JSON.stringify(i))),u=new gS(i,a),d=function(h){var m=xf(),y=J.useContext(bs),w=J.useRef(m.styleSheet.allocateGSInstance(a)).current;return m.styleSheet.server&&p(w,h,m.styleSheet,y,m.stylis),J.useLayoutEffect(function(){if(!m.styleSheet.server)return p(w,h,m.styleSheet,y,m.stylis),function(){return u.removeStyles(w,m.styleSheet)}},[w,h,m.styleSheet,y,m.stylis]),null};function p(h,m,y,w,k){if(u.isStatic)u.renderStyles(h,Ok,y,k);else{var T=wt(wt({},m),{theme:py(m,w,d.defaultProps)});u.renderStyles(h,T,y,k)}}return J.memo(d)}function bt(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=Ca(ye.apply(void 0,ei([e],n,!1))),a=xp(i);return new jy(a,i)}var yS=`
  html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1.5;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
}
button {
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: black;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

`;const vp="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",bp="inset 2px 2px 3px rgba(0,0,0,0.2)",Pn=()=>ye`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Nn=({background:e="material",color:n="materialText"}={})=>ye`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[e]};
  color: ${({theme:o})=>o[n]};
`,Es=({mainColor:e="black",secondaryColor:n="transparent",pixelSize:o=2})=>ye`
  background-image: ${[`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`,`linear-gradient(
      45deg,
      ${e} 25%,
      transparent 25%,
      transparent 75%,
      ${e} 75%
    )`].join(",")};
  background-color: ${n};
  background-size: ${`${o*2}px ${o*2}px`};
  background-position: 0 0, ${`${o}px ${o}px`};
`,go=()=>ye`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Qo={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},wS=({theme:e,topLeftInner:n,bottomRightInner:o,hasShadow:i=!1,hasInsetShadow:a=!1})=>[i?vp:!1,a?bp:!1,n!==null?`inset 1px 1px 0px 1px ${e[n]}`:!1,o!==null?`inset -1px -1px 0 1px ${e[o]}`:!1].filter(Boolean).join(", "),rt=({invert:e=!1,style:n="button"}={})=>{const o={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return ye`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:i})=>i[Qo[n][o.topLeftOuter]]};
    border-top-color: ${({theme:i})=>i[Qo[n][o.topLeftOuter]]};
    border-right-color: ${({theme:i})=>i[Qo[n][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:i})=>i[Qo[n][o.bottomRightOuter]]};
    box-shadow: ${({theme:i,shadow:a})=>wS({theme:i,topLeftInner:Qo[n][o.topLeftInner],bottomRightInner:Qo[n][o.bottomRightInner],hasShadow:a})};
  `},ii=()=>ye`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,vS=e=>Buffer.from(e).toString("base64"),bS=typeof btoa<"u"?btoa:vS,Ql=(e,n=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${n} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${bS(o)})`},kp=(e="default")=>ye`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:n})=>Es({mainColor:e==="flat"?n.flatLight:n.material,secondaryColor:e==="flat"?n.canvas:n.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Nn()}
    ${e==="flat"?go():rt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:n})=>n.material};
  }
  ::-webkit-scrollbar-button {
    ${Nn()}
    ${e==="flat"?go():rt({style:"window"})}
      display: block;
    outline-offset: -2px;
    height: 26px;
    width: 26px;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
  }
  ::-webkit-scrollbar-button:active,
  ::-webkit-scrollbar-button:active {
    background-position: 0 1px;
    ${e==="default"?rt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:n})=>Ql(n.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:n})=>Ql(n.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:n})=>Ql(n.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:n})=>Ql(n.materialText,0)};
  }
`,kS=L.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,SS=g.forwardRef(({children:e,underline:n=!0,...o},i)=>J.createElement(kS,{ref:i,underline:n,...o},e));SS.displayName="Anchor";const jS=L.header`
  ${rt()};
  ${Nn()};

  position: ${e=>{var n;return(n=e.position)!==null&&n!==void 0?n:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,CS=g.forwardRef(({children:e,fixed:n=!0,position:o="fixed",...i},a)=>J.createElement(jS,{fixed:n,position:n!==!1?o:void 0,ref:a,...i},e));CS.displayName="AppBar";const vo=()=>{};function co(e,n,o){return o!==null&&e>o?o:n!==null&&e<n?n:e}function ES(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),i=o[0].split(".")[1];return(i?i.length:0)+parseInt(o[1],10)}const n=e.toString().split(".")[1];return n?n.length:0}function mg(e,n,o){const i=Math.round((e-o)/n)*n+o;return Number(i.toFixed(ES(n)))}function _r(e){return typeof e=="number"?`${e}px`:e}const $S=L.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:e})=>`
    height: ${e};
    width: ${e};
    `}
  border-radius: ${({square:e})=>e?0:"50%"};
  overflow: hidden;
  ${({noBorder:e,theme:n})=>!e&&`
    border-top: 2px solid ${n.borderDark};
    border-left: 2px solid ${n.borderDark};
    border-bottom: 2px solid ${n.borderLightest};
    border-right: 2px solid ${n.borderLightest};
    background: ${n.material};
  `}
  ${({src:e})=>!e&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,TS=L.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,AS=g.forwardRef(({alt:e="",children:n,noBorder:o=!1,size:i=35,square:a=!1,src:u,...d},p)=>J.createElement($S,{noBorder:o,ref:p,size:_r(i),square:a,src:u,...d},u?J.createElement(TS,{src:u,alt:e}):n));AS.displayName="Avatar";const $t={sm:"28px",md:"36px",lg:"44px"},RS=ye`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>$t[e]};
  width: ${({fullWidth:e,size:n="md",square:o})=>e?"100%":o?$t[n]:"auto"};
  padding: ${({square:e})=>e?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:e})=>!e&&"2px"};
  }
  padding-top: ${({active:e,disabled:n})=>e&&!n&&"2px"};
  &:after {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  font-family: inherit;
`,Xa=L.button`
  ${({active:e,disabled:n,primary:o,theme:i,variant:a})=>a==="flat"?ye`
          ${go()}
          ${o?`
          border: 2px solid ${i.checkmark};
            outline: 2px solid ${i.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${i.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!e&&!n&&ii}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?ye`
          ${Nn()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!n&&!e&&rt({style:"buttonThin"})}
          }
          &:active {
            ${!n&&rt({style:"buttonThinPressed"})}
          }
          ${e&&rt({style:"buttonThinPressed"})}
          ${n&&Pn()}
        `:ye`
          ${Nn()};
          border: none;
          ${n&&Pn()}
          ${e?Es({mainColor:i.material,secondaryColor:i.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?ye`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${i.borderDarkest};
                `:ye`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${rt(e?{style:a==="raised"?"window":"button",invert:!0}:{style:a==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!n&&rt({style:a==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!n&&ii}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${RS}
`,We=g.forwardRef(({onClick:e,disabled:n=!1,children:o,type:i="button",fullWidth:a=!1,size:u="md",square:d=!1,active:p=!1,onTouchStart:h=vo,primary:m=!1,variant:y="default",...w},k)=>J.createElement(Xa,{active:p,disabled:n,$disabled:n,fullWidth:a,onClick:n?void 0:e,onTouchStart:h,primary:m,ref:k,size:u,square:d,type:i,variant:y,...w},o));We.displayName="Button";function Fr({defaultValue:e,onChange:n,onChangePropName:o="onChange",readOnly:i,value:a,valuePropName:u="value"}){const d=a!==void 0,[p,h]=g.useState(e),m=g.useCallback(y=>{d||h(y)},[d]);if(d&&typeof n!="function"&&!i){const y=`Warning: You provided a \`${u}\` prop to a component without an \`${o}\` handler.${u==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${u}\`.`}`;console.warn(y)}return[d?a:p,m]}const wf=L.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>$t[e.size]};
  width: ${e=>e.square?$t[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>$t[e.size]};
  color: ${({theme:e})=>e.materialText};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
  font-weight: ${({primary:e})=>e?"bold":"normal"};
  &:hover {
    ${({theme:e,$disabled:n})=>!n&&`
        color: ${e.materialTextInvert};
        background: ${e.hoverBackground};
      `}

    cursor: default;
  }
  ${e=>e.$disabled&&Pn()}
`,xt=g.forwardRef(({size:e="lg",disabled:n,square:o,children:i,onClick:a,primary:u,...d},p)=>J.createElement(wf,{$disabled:n,size:e,square:o,onClick:n?void 0:a,primary:u,role:"menuitem",ref:p,"aria-disabled":n,...d},i));xt.displayName="MenuListItem";const gs=L.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${rt({style:"window"})}
  ${Nn()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;gs.displayName="MenuList";const Kn=20,Ta=L.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Kn}px;
  height: ${Kn}px;
  opacity: 0;
  z-index: -1;
`,Sp=L.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&Pn()}

  ${wf} & {
    margin: 0;
    height: 100%;
  }
  ${wf}:hover & {
    ${({$disabled:e,theme:n})=>!e&&ye`
        color: ${n.materialTextInvert};
      `};
  }
`,jp=L.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ta}:focus ~ & {
    ${ii}
  }
  ${Ta}:not(:disabled) ~ &:active {
    ${ii}
  }
`,qn=L.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:e})=>e.borderDark};
  border-top-color: ${({theme:e})=>e.borderDark};
  border-right-color: ${({theme:e})=>e.borderLightest};
  border-bottom-color: ${({theme:e})=>e.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:e})=>e.borderDarkest};
    border-top-color: ${({theme:e})=>e.borderDarkest};
    border-right-color: ${({theme:e})=>e.borderLight};
    border-bottom-color: ${({theme:e})=>e.borderLight};

    pointer-events: none;
    ${e=>e.shadow&&`box-shadow:${bp};`}
  }
`,DS=L.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${kp()}
`,Ay=g.forwardRef(({children:e,shadow:n=!0,...o},i)=>J.createElement(qn,{ref:i,shadow:n,...o},J.createElement(DS,null,e)));Ay.displayName="ScrollView";const Ry=ye`
  width: ${Kn}px;
  height: ${Kn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,IS=L(qn)`
  ${Ry}
  width: ${Kn}px;
  height: ${Kn}px;
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
  &:before {
    box-shadow: none;
  }
`,PS=L.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  ${Ry}
  width: ${Kn-4}px;
  height: ${Kn-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
`,NS=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({$disabled:e,theme:n})=>e?n.checkmarkDisabled:n.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
  }
`,MS=L.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:n})=>Es({mainColor:e?n.checkmarkDisabled:n.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,LS={flat:PS,default:IS},ft=g.forwardRef(({checked:e,className:n="",defaultChecked:o=!1,disabled:i=!1,indeterminate:a=!1,label:u="",onChange:d=vo,style:p={},value:h,variant:m="default",...y},w)=>{var k;const[T,E]=Fr({defaultValue:o,onChange:d,readOnly:(k=y.readOnly)!==null&&k!==void 0?k:i,value:e}),C=g.useCallback(j=>{const S=j.target.checked;E(S),d(j)},[d,E]),$=LS[m];let b=null;return a?b=MS:T&&(b=NS),J.createElement(Sp,{$disabled:i,className:n,style:p},J.createElement(Ta,{disabled:i,onChange:i?void 0:C,readOnly:i,type:"checkbox",value:h,checked:T,"data-indeterminate":a,ref:w,...y}),J.createElement($,{$disabled:i,role:"presentation"},b&&J.createElement(b,{$disabled:i,variant:m})),u&&J.createElement(jp,null,u))});ft.displayName="Checkbox";const Ja=L.div`
  ${({orientation:e,theme:n,size:o="100%"})=>e==="vertical"?`
    height: ${_r(o)};
    border-left: 2px solid ${n.borderDark};
    border-right: 2px solid ${n.borderLightest};
    margin: 0;
    `:`
    width: ${_r(o)};
    border-bottom: 2px solid ${n.borderLightest};
    border-top: 2px solid ${n.borderDark};
    margin: 0;
    `}
`;Ja.displayName="Separator";const OS=L(Xa)`
  padding-left: 8px;
`,zS=L(Ja)`
  height: 21px;
  position: relative;
  top: 0;
`,Dy=L.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`,_S=L.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?ye`
          border: 2px solid ${({theme:n})=>n.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
          );
        `:ye`
          border: 2px solid ${({theme:n})=>n.materialText};
        `}
  ${Dy}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ii}
    outline-offset: -8px;
  }
`,FS=L.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?ye`
          border-top: 6px solid ${({theme:n})=>n.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
          );
        `:ye`
          border-top: 6px solid ${({theme:n})=>n.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:e})=>e==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,BS=g.forwardRef(({value:e,defaultValue:n,onChange:o=vo,disabled:i=!1,variant:a="default",...u},d)=>{var p;const[h,m]=Fr({defaultValue:n,onChange:o,readOnly:(p=u.readOnly)!==null&&p!==void 0?p:i,value:e}),y=w=>{const k=w.target.value;m(k),o(w)};return J.createElement(OS,{disabled:i,as:"div",variant:a,size:"md"},J.createElement(Dy,{onChange:y,readOnly:i,disabled:i,value:h??"#008080",type:"color",ref:d,...u}),J.createElement(_S,{$disabled:i,color:h??"#008080",role:"presentation"}),a==="default"&&J.createElement(zS,{orientation:"vertical"}),J.createElement(FS,{$disabled:i,variant:a}))});BS.displayName="ColorInput";const WS=L.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>ye`
    width: ${11*e}px;
    height: ${21*e}px;
    margin: ${e}px;

    span,
    span:before,
    span:after {
      box-sizing: border-box;
      display: inline-block;
      position: absolute;
    }
    span.active,
    span.active:before,
    span.active:after {
      background: var(--react95-digit-primary-color);
    }
    span:not(.active),
    span:not(.active):before,
    span:not(.active):after {
      ${Es({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${e}px;
      width: ${9*e}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${e}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${e*2}px);
      top: ${2*e}px;
      left: ${e}px;
    }
    span.horizontal.top {
      top: 0;
    }
    span.horizontal.bottom {
      bottom: 0;
      transform: rotateX(180deg);
    }

    span.center,
    span.center:before,
    span.center:after {
      height: ${e}px;
      border-left: ${e}px solid var(--react95-digit-bg-color);
      border-right: ${e}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${e}px solid var(--react95-digit-primary-color);
      border-right: ${e}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${e}px;
      width: ${9*e}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${e}px;
    }
    span.center:after {
      bottom: ${e}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${e}px;
      border-top: ${e}px solid var(--react95-digit-bg-color);
      border-bottom: ${e}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*e}px;
    }
    span.vertical.left {
      left: 0;
    }
    span.vertical.right {
      right: 0;
      transform: rotateY(180deg);
    }
    span.vertical.top {
      top: 0px;
    }
    span.vertical.bottom {
      bottom: 0px;
    }
    span.vertical:before {
      content: '';
      height: 100%;
      top: ${0}px;
      left: ${e}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${e*2}px);
      top: ${e}px;
      left: ${e*2}px;
    }
  `}
`,gg=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],HS=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function US({digit:e=0,pixelSize:n=2,...o}){const i=HS[Number(e)].map((a,u)=>a?`${gg[u]} active`:gg[u]);return J.createElement(WS,{pixelSize:n,...o},i.map((a,u)=>J.createElement("span",{className:a,key:u})))}const VS=L.div`
  ${rt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,KS={sm:1,md:2,lg:3,xl:4},QS=g.forwardRef(({value:e=0,minLength:n=3,size:o="md",...i},a)=>{const u=g.useMemo(()=>e.toString().padStart(n,"0").split(""),[n,e]);return J.createElement(VS,{ref:a,...i},u.map((d,p)=>J.createElement(US,{digit:d,pixelSize:KS[o],key:p})))});QS.displayName="Counter";const Iy=ye`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${$t.md};
`,qS=L(qn).attrs({"data-testid":"variant-default"})`
  ${Iy}
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
`,GS=L.div.attrs({"data-testid":"variant-flat"})`
  ${go()}
  ${Iy}
  position: relative;
`,Py=ye`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({theme:e})=>e.canvasText};
  ${({disabled:e,variant:n})=>n!=="flat"&&e&&Pn()}
`,YS=L.input`
  ${Py}
  padding: 0 8px;
`,XS=L.textarea`
  ${Py}
  padding: 8px;
  resize: none;
  ${({variant:e})=>kp(e)}
`,ur=g.forwardRef(({className:e,disabled:n=!1,fullWidth:o,onChange:i=vo,shadow:a=!0,style:u,variant:d="default",...p},h)=>{const m=d==="flat"?GS:qS,y=g.useMemo(()=>{var w;return p.multiline?J.createElement(XS,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,variant:d,...p}):J.createElement(YS,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,type:(w=p.type)!==null&&w!==void 0?w:"text",variant:d,...p})},[n,i,p,h,d]);return J.createElement(m,{className:e,fullWidth:o,$disabled:n,shadow:a,style:u},y)});ur.displayName="TextInput";const JS=L.div`
  display: inline-flex;
  align-items: center;
`,vf=L(We)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?ye`
          height: calc(50% - 1px);
        `:ye`
          height: 50%;
        `}
`,ZS=L.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?ye`
          height: calc(${$t.md} - 4px);
        `:ye`
          height: ${$t.md};
          margin-left: 2px;
        `}
`,xg=L.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?ye`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:n})=>n.materialText};
        `:ye`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:n})=>n.materialText};
        `}
  ${vf}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?ye`
            border-bottom-color: ${({theme:n})=>n.materialTextDisabled};
          `:ye`
            border-top-color: ${({theme:n})=>n.materialTextDisabled};
          `}
  }
`,Ny=g.forwardRef(({className:e,defaultValue:n,disabled:o=!1,max:i,min:a,onChange:u,readOnly:d,step:p=1,style:h,value:m,variant:y="default",width:w,...k},T)=>{const[E,C]=Fr({defaultValue:n,onChange:u,readOnly:d,value:m}),$=g.useCallback(V=>{const Z=parseFloat(V.target.value);C(Z)},[C]),b=g.useCallback(V=>{const Z=co(parseFloat(((E??0)+V).toFixed(2)),a??null,i??null);C(Z),u==null||u(Z)},[i,a,u,C,E]),j=g.useCallback(()=>{E!==void 0&&(u==null||u(E))},[u,E]),S=g.useCallback(()=>{b(p)},[b,p]),R=g.useCallback(()=>{b(-p)},[b,p]),M=y==="flat"?"flat":"raised";return J.createElement(JS,{className:e,style:{...h,width:w!==void 0?_r(w):"auto"},...k},J.createElement(ur,{value:E,variant:y,onChange:$,disabled:o,type:"number",readOnly:d,ref:T,fullWidth:!0,onBlur:j}),J.createElement(ZS,{variant:y},J.createElement(vf,{"data-testid":"increment",variant:M,disabled:o||d,onClick:S},J.createElement(xg,{invert:!0})),J.createElement(vf,{"data-testid":"decrement",variant:M,disabled:o||d,onClick:R},J.createElement(xg,null))))});Ny.displayName="NumberInput";function ej(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<10;o+=1)n+=e[Math.floor(Math.random()*e.length)];return n}const My=e=>g.useMemo(()=>ej(),[e]),Ly=ye`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Oy=ye`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,Cp=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,tj=L.div`
  ${Ly}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Cp}:focus & {
    ${Oy}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,zy=ye`
  height: ${$t.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:n})=>e?Pn():n.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,nj=L(qn)`
  ${zy}
  background: ${({$disabled:e=!1,theme:n})=>e?n.material:n.canvas};
  &:focus {
    outline: 0;
  }
`,rj=L.div`
  ${go()}
  ${zy}
  background: ${({$disabled:e=!1,theme:n})=>e?n.flatLight:n.canvas};
`,oj=L.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${Ly}
  cursor: pointer;
  &:disabled {
    ${Pn()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,_y=L(Xa).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?ye`
          height: 100%;
          margin-right: 0;
        `:ye`
          height: 100%;
        `}
  ${({native:e=!1,variant:n="default"})=>e&&(n==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:e=!1,native:n=!1})=>e||n?"none":"auto"}
`,ij=L.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({$disabled:e=!1,theme:n})=>e?n.materialTextDisabled:n.materialText};
  ${({$disabled:e=!1,theme:n})=>e&&`
    filter: drop-shadow(1px 1px 0px ${n.materialTextDisabledShadow});
    border-top-color: ${n.materialTextDisabled};
    `}
  ${_y}:active & {
    margin-top: 2px;
  }
`,sj=L.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:e})=>e.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${vp};
  ${({variant:e="default"})=>e==="flat"?ye`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:n})=>n.flatDark};
        `:ye`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:n})=>n.borderDarkest};
        `}
  ${({variant:e="default"})=>kp(e)}
`,lj=L.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${$t.md} - 4px);
  line-height: calc(${$t.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Oy:""}
  user-select: none;
`,aj=[],Fy=({className:e,defaultValue:n,disabled:o,native:i,onChange:a,options:u=aj,readOnly:d,style:p,value:h,variant:m,width:y})=>{var w;const k=g.useMemo(()=>u.filter(Boolean),[u]),[T,E]=Fr({defaultValue:n??((w=k==null?void 0:k[0])===null||w===void 0?void 0:w.value),onChange:a,readOnly:d,value:h}),C=!(o||d),$=g.useMemo(()=>({className:e,style:{...p,width:y}}),[e,p,y]),b=g.useMemo(()=>J.createElement(_y,{as:"div","data-testid":"select-button",$disabled:o,native:i,tabIndex:-1,variant:m==="flat"?"flat":"raised"},J.createElement(ij,{"data-testid":"select-icon",$disabled:o})),[o,i,m]),j=g.useMemo(()=>m==="flat"?rj:nj,[m]);return g.useMemo(()=>({isEnabled:C,options:k,value:T,setValue:E,wrapperProps:$,DropdownButton:b,Wrapper:j}),[b,j,C,k,E,T,$])},cj={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},uj=1e3,dj=({onBlur:e,onChange:n,onClose:o,onFocus:i,onKeyDown:a,onMouseDown:u,onOpen:d,open:p,options:h,readOnly:m,value:y,selectRef:w,setValue:k,wrapperRef:T})=>{const E=g.useRef(null),C=g.useRef([]),$=g.useRef(0),b=g.useRef(0),j=g.useRef(),S=g.useRef("search"),R=g.useRef(""),M=g.useRef(),[V,Z]=Fr({defaultValue:!1,onChange:d,onChangePropName:"onOpen",readOnly:m,value:p,valuePropName:"open"}),ne=g.useMemo(()=>{const A=h.findIndex(B=>B.value===y);return $.current=co(A,0,null),h[A]},[h,y]),[ie,me]=g.useState(h[0]),de=g.useCallback(A=>{const B=E.current,le=C.current[A];if(!le||!B){j.current=A;return}j.current=void 0;const he=B.clientHeight,ge=B.scrollTop,je=B.scrollTop+he,Te=le.offsetTop,Me=le.offsetHeight,Je=le.offsetTop+le.offsetHeight;Te<ge&&B.scrollTo(0,Te),Je>je&&B.scrollTo(0,Te-he+Me),le.focus({preventScroll:!0})},[E]),xe=g.useCallback((A,{scroll:B}={})=>{var le;const he=h.length-1;let ge;switch(A){case"first":{ge=0;break}case"last":{ge=he;break}case"next":{ge=co(b.current+1,0,he);break}case"previous":{ge=co(b.current-1,0,he);break}case"selected":{ge=co((le=$.current)!==null&&le!==void 0?le:0,0,he);break}default:ge=A}b.current=ge,me(h[ge]),B&&de(ge)},[b,h,de]),ce=g.useCallback(({fromEvent:A})=>{Z(!0),xe("selected",{scroll:!0}),d==null||d({fromEvent:A})},[xe,d,Z]),G=g.useCallback(()=>{S.current="search",R.current="",clearTimeout(M.current)},[]),N=g.useCallback(({focusSelect:A,fromEvent:B})=>{var le;o==null||o({fromEvent:B}),Z(!1),me(h[0]),G(),j.current=void 0,A&&((le=w.current)===null||le===void 0||le.focus())},[G,o,h,w,Z]),I=g.useCallback(({fromEvent:A})=>{V?N({focusSelect:!1,fromEvent:A}):ce({fromEvent:A})},[N,ce,V]),q=g.useCallback((A,{fromEvent:B})=>{$.current!==A&&($.current=A,k(h[A].value),n==null||n(h[A],{fromEvent:B}))},[n,h,k]),W=g.useCallback(({focusSelect:A,fromEvent:B})=>{q(b.current,{fromEvent:B}),N({focusSelect:A,fromEvent:B})},[N,q]),F=g.useCallback((A,{fromEvent:B,select:le})=>{var he;switch(S.current==="cycleFirstLetter"&&A!==R.current&&(S.current="search"),A===R.current?S.current="cycleFirstLetter":R.current+=A,S.current){case"search":{let ge=h.findIndex(je=>{var Te;return((Te=je.label)===null||Te===void 0?void 0:Te.toLocaleUpperCase().indexOf(R.current))===0});ge<0&&(ge=h.findIndex(je=>{var Te;return((Te=je.label)===null||Te===void 0?void 0:Te.toLocaleUpperCase().indexOf(A))===0}),R.current=A),ge>=0&&(le?q(ge,{fromEvent:B}):xe(ge,{scroll:!0}));break}case"cycleFirstLetter":{const ge=le?(he=$.current)!==null&&he!==void 0?he:-1:b.current;let je=h.findIndex((Te,Me)=>{var Je;return Me>ge&&((Je=Te.label)===null||Je===void 0?void 0:Je.toLocaleUpperCase().indexOf(A))===0});je<0&&(je=h.findIndex(Te=>{var Me;return((Me=Te.label)===null||Me===void 0?void 0:Me.toLocaleUpperCase().indexOf(A))===0})),je>=0&&(le?q(je,{fromEvent:B}):xe(je,{scroll:!0}));break}}clearTimeout(M.current),M.current=setTimeout(()=>{S.current==="search"&&(R.current="")},uj)},[xe,h,q]),P=g.useCallback(A=>{var B;A.button===0&&(A.preventDefault(),(B=w.current)===null||B===void 0||B.focus(),I({fromEvent:A}),u==null||u(A))},[u,w,I]),z=g.useCallback(A=>{W({focusSelect:!0,fromEvent:A})},[W]),ee=g.useCallback(A=>{const{altKey:B,code:le,ctrlKey:he,metaKey:ge,shiftKey:je}=A,{ARROW_DOWN:Te,ARROW_UP:Me,END:Je,ENTER:Xt,ESC:zt,HOME:kn,SPACE:fn,TAB:At}=cj,Qe=B||he||ge||je;if(!(le===At&&(B||he||ge)||le!==At&&Qe))switch(le){case Te:{if(A.preventDefault(),!V){ce({fromEvent:A});return}xe("next",{scroll:!0});break}case Me:{if(A.preventDefault(),!V){ce({fromEvent:A});return}xe("previous",{scroll:!0});break}case Je:{if(A.preventDefault(),!V){ce({fromEvent:A});return}xe("last",{scroll:!0});break}case Xt:{if(!V)return;A.preventDefault(),W({focusSelect:!0,fromEvent:A});break}case zt:{if(!V)return;A.preventDefault(),N({focusSelect:!0,fromEvent:A});break}case kn:{if(A.preventDefault(),!V){ce({fromEvent:A});return}xe("first",{scroll:!0});break}case fn:{A.preventDefault(),V?W({focusSelect:!0,fromEvent:A}):ce({fromEvent:A});break}case At:{if(!V)return;je||A.preventDefault(),W({focusSelect:!je,fromEvent:A});break}default:!Qe&&le.match(/^Key/)&&(A.preventDefault(),A.stopPropagation(),F(le.replace(/^Key/,""),{select:!V,fromEvent:A}))}},[xe,N,V,ce,F,W]),ue=g.useCallback(A=>{ee(A),a==null||a(A)},[ee,a]),fe=g.useCallback(A=>{xe(A)},[xe]),Q=g.useCallback(A=>{V||(G(),e==null||e(A))},[G,e,V]),Y=g.useCallback(A=>{G(),i==null||i(A)},[G,i]),re=g.useCallback(A=>{E.current=A,j.current!==void 0&&de(j.current)},[de]),H=g.useCallback((A,B)=>{C.current[B]=A,j.current===B&&de(j.current)},[de]);return g.useEffect(()=>{if(!V)return()=>{};const A=B=>{var le;const he=B.target;!((le=T.current)===null||le===void 0)&&le.contains(he)||(B.preventDefault(),N({focusSelect:!1,fromEvent:B}))};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[N,V,T]),g.useMemo(()=>({activeOption:ie,handleActivateOptionIndex:fe,handleBlur:Q,handleButtonKeyDown:ue,handleDropdownKeyDown:ee,handleFocus:Y,handleMouseDown:P,handleOptionClick:z,handleSetDropdownRef:re,handleSetOptionRef:H,open:V,selectedOption:ne}),[ie,fe,Q,ue,Y,ee,P,z,re,H,V,ne])},fj=g.forwardRef(({className:e,defaultValue:n,disabled:o,onChange:i,options:a,readOnly:u,style:d,value:p,variant:h,width:m,...y},w)=>{const{isEnabled:k,options:T,setValue:E,value:C,DropdownButton:$,Wrapper:b}=Fy({defaultValue:n,disabled:o,native:!0,onChange:i,options:a,readOnly:u,value:p,variant:h}),j=g.useCallback(S=>{const R=T.find(M=>M.value===S.target.value);R&&(E(R.value),i==null||i(R,{fromEvent:S}))},[i,T,E]);return J.createElement(b,{className:e,style:{...d,width:m}},J.createElement(Cp,null,J.createElement(oj,{...y,disabled:o,onChange:k?j:vo,ref:w,value:C},T.map((S,R)=>{var M;return J.createElement("option",{key:`${S.value}-${R}`,value:S.value},(M=S.label)!==null&&M!==void 0?M:S.value)})),$))});fj.displayName="SelectNative";function pj({activateOptionIndex:e,active:n,index:o,onClick:i,option:a,selected:u,setRef:d}){const p=g.useCallback(()=>{e(o)},[e,o]),h=g.useCallback(y=>{d(y,o)},[o,d]),m=My();return J.createElement(lj,{active:n,"aria-selected":u?"true":void 0,"data-value":a.value,id:m,onClick:i,onMouseEnter:p,ref:h,role:"option",tabIndex:0},a.label)}function hj({"aria-label":e,"aria-labelledby":n,className:o,defaultValue:i,disabled:a=!1,formatDisplay:u,inputProps:d,labelId:p,menuMaxHeight:h,name:m,onBlur:y,onChange:w,onClose:k,onFocus:T,onKeyDown:E,onMouseDown:C,onOpen:$,open:b,options:j,readOnly:S,shadow:R=!0,style:M,variant:V="default",value:Z,width:ne="auto",...ie},me){const{isEnabled:de,options:xe,setValue:ce,value:G,wrapperProps:N,DropdownButton:I,Wrapper:q}=Fy({className:o,defaultValue:i,disabled:a,native:!1,onChange:w,options:j,style:M,readOnly:S,value:Z,variant:V,width:ne}),W=g.useRef(null),F=g.useRef(null),P=g.useRef(null),{activeOption:z,handleActivateOptionIndex:ee,handleBlur:ue,handleButtonKeyDown:fe,handleDropdownKeyDown:Q,handleFocus:Y,handleMouseDown:re,handleOptionClick:H,handleSetDropdownRef:A,handleSetOptionRef:B,open:le,selectedOption:he}=dj({onBlur:y,onChange:w,onClose:k,onFocus:T,onKeyDown:E,onMouseDown:C,onOpen:$,open:b,options:xe,value:G,selectRef:F,setValue:ce,wrapperRef:P});g.useImperativeHandle(me,()=>({focus:Xt=>{var zt;(zt=F.current)===null||zt===void 0||zt.focus(Xt)},node:W.current,value:String(G)}),[G]);const ge=g.useMemo(()=>he?typeof u=="function"?u(he):he.label:"",[u,he]),je=de?1:void 0,Te=g.useMemo(()=>h?{overflow:"auto",maxHeight:h}:void 0,[h]),Me=My(),Je=g.useMemo(()=>xe.map((Xt,zt)=>{const kn=`${G}-${zt}`,fn=Xt===z,At=Xt===he;return J.createElement(pj,{activateOptionIndex:ee,active:fn,index:zt,key:kn,onClick:H,option:Xt,selected:At,setRef:B})}),[z,ee,H,B,xe,he,G]);return J.createElement(q,{...N,$disabled:a,ref:P,shadow:R,style:{...M,width:ne}},J.createElement("input",{name:m,ref:W,type:"hidden",value:String(G),...d}),J.createElement(Cp,{"aria-disabled":a,"aria-expanded":le,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":n??p,"aria-owns":de&&le?Me:void 0,onBlur:ue,onFocus:Y,onKeyDown:fe,onMouseDown:de?re:C,ref:F,role:"button",tabIndex:je,...ie},J.createElement(tj,null,ge),I),de&&le&&J.createElement(sj,{id:Me,onKeyDown:Q,ref:A,role:"listbox",style:Te,tabIndex:0,variant:V},Je))}const By=g.forwardRef(hj);By.displayName="Select";const mj=L.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,bf=g.forwardRef(function({children:n,noPadding:o=!1,...i},a){return J.createElement(mj,{noPadding:o,ref:a,...i},n)});bf.displayName="Toolbar";const gj=L.div`
  padding: 16px;
`,Ur=g.forwardRef(function({children:n,...o},i){return J.createElement(gj,{ref:i,...o},n)});Ur.displayName="WindowContent";const xj=L.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?ye`
          background: ${({theme:n})=>n.headerNotActiveBackground};
          color: ${({theme:n})=>n.headerNotActiveText};
        `:ye`
          background: ${({theme:n})=>n.headerBackground};
          color: ${({theme:n})=>n.headerText};
        `}

  ${Xa} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ci=g.forwardRef(function({active:n=!0,children:o,...i},a){return J.createElement(xj,{active:n,ref:a,...i},o)});ci.displayName="WindowHeader";const yj=L.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${rt({style:"window"})}
  ${Nn()}
`,wj=L.span`
  ${({theme:e})=>ye`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${e.borderLightest} 16.67%,
      ${e.material} 16.67%,
      ${e.material} 33.33%,
      ${e.borderDark} 33.33%,
      ${e.borderDark} 50%,
      ${e.borderLightest} 50%,
      ${e.borderLightest} 66.67%,
      ${e.material} 66.67%,
      ${e.material} 83.33%,
      ${e.borderDark} 83.33%,
      ${e.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,ui=g.forwardRef(({children:e,resizable:n=!1,resizeRef:o,shadow:i=!0,...a},u)=>J.createElement(yj,{ref:u,shadow:i,...a},e,n&&J.createElement(wj,{"data-testid":"resizeHandle",ref:o})));ui.displayName="Window";const vj=L(Ay)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,bj=L.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,kj=L.div`
  display: flex;
  flex-wrap: wrap;
`,lr=L.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Sj=L.span`
  cursor: pointer;

  background: ${({active:e,theme:n})=>e?n.hoverBackground:"transparent"};
  color: ${({active:e,theme:n})=>e?n.canvasTextInvert:n.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:n})=>n?"none":e.materialDark};
  }
`,jj=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Cj(e,n){return new Date(e,n+1,0).getDate()}function Ej(e,n,o){return new Date(e,n,o).getDay()}function $j(e){const n=new Date(Date.parse(e)),o=n.getUTCDate(),i=n.getUTCMonth(),a=n.getUTCFullYear();return{day:o,month:i,year:a}}const Tj=g.forwardRef(({className:e,date:n=new Date().toISOString(),onAccept:o,onCancel:i,shadow:a=!0},u)=>{const[d,p]=g.useState(()=>$j(n)),{year:h,month:m,day:y}=d,w=g.useCallback(({value:$})=>{p(b=>({...b,month:$}))},[]),k=g.useCallback($=>{p(b=>({...b,year:$}))},[]),T=g.useCallback($=>{p(b=>({...b,day:$}))},[]),E=g.useCallback(()=>{const $=[d.year,d.month+1,d.day].map(b=>String(b).padStart(2,"0")).join("-");o==null||o($)},[d.day,d.month,d.year,o]),C=g.useMemo(()=>{const $=Array.from({length:42}),b=Ej(h,m,1);let j=y;const S=Cj(h,m);return j=j<S?j:S,$.forEach((R,M)=>{if(M>=b&&M<S+b){const V=M-b+1;$[M]=J.createElement(lr,{key:M,onClick:()=>{T(V)}},J.createElement(Sj,{active:V===j},V))}else $[M]=J.createElement(lr,{key:M})}),$},[y,T,m,h]);return J.createElement(ui,{className:e,ref:u,shadow:a,style:{margin:20}},J.createElement(ci,null,J.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),J.createElement(Ur,null,J.createElement(bf,{noPadding:!0,style:{justifyContent:"space-between"}},J.createElement(By,{options:jj,value:m,onChange:w,width:128,menuMaxHeight:200}),J.createElement(Ny,{value:h,onChange:k,width:100})),J.createElement(vj,null,J.createElement(bj,null,J.createElement(lr,null,"S"),J.createElement(lr,null,"M"),J.createElement(lr,null,"T"),J.createElement(lr,null,"W"),J.createElement(lr,null,"T"),J.createElement(lr,null,"F"),J.createElement(lr,null,"S")),J.createElement(kj,null,C)),J.createElement(bf,{noPadding:!0,style:{justifyContent:"space-between"}},J.createElement(We,{fullWidth:!0,onClick:i,disabled:!i},"Cancel"),J.createElement(We,{fullWidth:!0,onClick:o?E:void 0,disabled:!o},"OK"))))});Tj.displayName="DatePicker";const Aj=e=>{switch(e){case"status":case"well":return ye`
        ${rt({style:"status"})}
      `;case"window":case"outside":return ye`
        ${rt({style:"window"})}
      `;case"field":return ye`
        ${rt({style:"field"})}
      `;default:return ye`
        ${rt()}
      `}},Rj=L.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Aj(e)}
  ${({variant:e})=>Nn(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,pt=g.forwardRef(({children:e,shadow:n=!1,variant:o="window",...i},a)=>J.createElement(Rj,{ref:a,shadow:n,variant:o,...i},e));pt.displayName="Frame";const Dj=L.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:n})=>n==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&ye`
      box-shadow: -1px -1px 0 1px ${({theme:n})=>n.borderDark},
        inset -1px -1px 0 1px ${({theme:n})=>n.borderDark};
    `}
  ${e=>e.$disabled&&Pn()}
`,Ij=L.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:n})=>n==="flat"?e.canvas:e.material};
`,Wy=g.forwardRef(({label:e,disabled:n=!1,variant:o="default",children:i,...a},u)=>J.createElement(Dj,{"aria-disabled":n,$disabled:n,variant:o,ref:u,...a},e&&J.createElement(Ij,{variant:o},e),i));Wy.displayName="GroupBox";const Pj=L.div`
  ${({theme:e,size:n="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${_r(n)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Pj.displayName="Handle";const Nj="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Mj=L.div`
  display: inline-block;
  height: ${({size:e})=>_r(e)};
  width: ${({size:e})=>_r(e)};
`,Lj=L.span`
  display: block;
  background: ${Nj};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Oj=g.forwardRef(({size:e=30,...n},o)=>J.createElement(Mj,{size:e,ref:o,...n},J.createElement(Lj,null)));Oj.displayName="Hourglass";const zj=L.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,_j=L.div`
  position: relative;
`,Fj=L.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:e})=>e.material};
  border-top: 4px solid ${({theme:e})=>e.borderLightest};
  border-left: 4px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 4px solid ${({theme:e})=>e.borderDark};
  border-right: 4px solid ${({theme:e})=>e.borderDark};

  outline: 1px dotted ${({theme:e})=>e.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:e})=>e.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:e})=>e.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`,Bj=L(qn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Wj=L.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:e})=>e.material};
  border-left: 2px solid ${({theme:e})=>e.borderLightest};
  border-bottom: 2px solid ${({theme:e})=>e.borderDarkest};
  border-right: 2px solid ${({theme:e})=>e.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:e})=>e.material};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:e})=>e.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:e})=>e.material};
    border: 2px solid ${({theme:e})=>e.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:e})=>e.borderLightest},
      1px 1px 0 1px ${({theme:e})=>e.borderDarkest};
  }
`,Hy=g.forwardRef(({backgroundStyles:e,children:n,...o},i)=>J.createElement(zj,{ref:i,...o},J.createElement(_j,null,J.createElement(Fj,null,J.createElement(Bj,{style:e},n)),J.createElement(Wj,null))));Hy.displayName="Monitor";const Hj=L.div`
  display: inline-block;
  height: ${$t.md};
  width: 100%;
`,Uj=L(qn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Uy=ye`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Vj=L.div`
  position: relative;
  top: 4px;
  ${Uy}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Kj=L.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Uy}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Qj=L.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Vy=17,qj=L.span`
  display: inline-block;
  width: ${Vy}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Gj=g.forwardRef(({hideValue:e=!1,shadow:n=!0,value:o,variant:i="default",...a},u)=>{const d=e?null:`${o}%`,p=g.useRef(null),[h,m]=g.useState([]),y=g.useCallback(()=>{if(!p.current||o===void 0)return;const w=p.current.getBoundingClientRect().width,k=Math.round(o/100*w/Vy);m(Array.from({length:k}))},[o]);return g.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[y]),J.createElement(Hj,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:u,role:"progressbar",variant:i,...a},J.createElement(Uj,{variant:i,shadow:n},i==="default"?J.createElement(J.Fragment,null,J.createElement(Vj,{"data-testid":"defaultProgress1"},d),J.createElement(Kj,{"data-testid":"defaultProgress2",value:o},d)):J.createElement(Qj,{ref:p,"data-testid":"tileProgress"},h.map((w,k)=>J.createElement(qj,{key:k})))))});Gj.displayName="ProgressBar";const Ky=ye`
  width: ${Kn}px;
  height: ${Kn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Yj=L(qn)`
  ${Ky}
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`,Xj=L.div`
  ${go()}
  ${Ky}
  outline: none;
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:e})=>e.flatDark};
    border-radius: 50%;
  }
`,Jj=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${e=>e.$disabled?e.theme.checkmarkDisabled:e.theme.checkmark};
`,Zj={flat:Xj,default:Yj},eC=g.forwardRef(({checked:e,className:n="",disabled:o=!1,label:i="",onChange:a,style:u={},variant:d="default",...p},h)=>{const m=Zj[d];return J.createElement(Sp,{$disabled:o,className:n,style:u},J.createElement(m,{$disabled:o,role:"presentation"},e&&J.createElement(Jj,{$disabled:o,variant:d})),J.createElement(Ta,{disabled:o,onChange:o?void 0:a,readOnly:o,type:"radio",checked:e,ref:h,...p}),i&&J.createElement(jp,null,i))});eC.displayName="Radio";const tC=typeof window<"u"?g.useLayoutEffect:g.useEffect;function io(e){const n=g.useRef(e);return tC(()=>{n.current=e}),g.useCallback((...o)=>(0,n.current)(...o),[])}function yg(e,n){typeof e=="function"?e(n):e&&(e.current=n)}function wg(e,n){return g.useMemo(()=>e==null&&n==null?null:o=>{yg(e,o),yg(n,o)},[e,n])}var qt=ry();let Za=!0,kf=!1,vg;const nC={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function rC(e){if("type"in e){const{type:n,tagName:o}=e;if(o==="INPUT"&&nC[n]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function oC(e){e.metaKey||e.altKey||e.ctrlKey||(Za=!0)}function wd(){Za=!1}function iC(){this.visibilityState==="hidden"&&kf&&(Za=!0)}function sC(e){e.addEventListener("keydown",oC,!0),e.addEventListener("mousedown",wd,!0),e.addEventListener("pointerdown",wd,!0),e.addEventListener("touchstart",wd,!0),e.addEventListener("visibilitychange",iC,!0)}function lC(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch{}return Za||rC(n)}function aC(){kf=!0,window.clearTimeout(vg),vg=window.setTimeout(()=>{kf=!1},100)}function cC(){const e=g.useCallback(n=>{const o=qt.findDOMNode(n);o!=null&&sC(o.ownerDocument)},[]);return{isFocusVisible:lC,onBlurVisible:aC,ref:e}}function uC(e,n,o){return(o-n)*e+n}function ql(e,n){if(n!==void 0&&"changedTouches"in e){for(let o=0;o<e.changedTouches.length;o+=1){const i=e.changedTouches[o];if(i.identifier===n)return{x:i.clientX,y:i.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Gl(e){return e&&e.ownerDocument||document}function dC(e,n){var o;const{index:i}=(o=e.reduce((a,u,d)=>{const p=Math.abs(n-u);return a===null||p<a.distance||p===a.distance?{distance:p,index:d}:a},null))!==null&&o!==void 0?o:{};return i??-1}const fC=L.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({hasMarks:e})=>e?"41px":"39px"};
    ${({isFocused:e,theme:n})=>e&&`
        outline: 2px dotted ${n.materialText};
        `}
  }

  ${({orientation:e,size:n})=>e==="vertical"?ye`
          height: ${n};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:ye`
          width: ${n};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Qy=()=>ye`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?ye`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:ye`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,pC=L(qn)`
  ${Qy()}
`,hC=L(qn)`
  ${Qy()}

  border-left-color: ${({theme:e})=>e.flatLight};
  border-top-color: ${({theme:e})=>e.flatLight};
  border-right-color: ${({theme:e})=>e.canvas};
  border-bottom-color: ${({theme:e})=>e.canvas};
  &:before {
    border-left-color: ${({theme:e})=>e.flatDark};
    border-top-color: ${({theme:e})=>e.flatDark};
    border-right-color: ${({theme:e})=>e.flatLight};
    border-bottom-color: ${({theme:e})=>e.flatLight};
  }
`,mC=L.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?ye`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:ye`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?ye`
          ${go()}
          outline: 2px solid ${({theme:n})=>n.flatDark};
          background: ${({theme:n})=>n.flatLight};
        `:ye`
          ${Nn()}
          ${rt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:n})=>e&&Es({mainColor:n.material,secondaryColor:n.borderLightest})}
`,Aa=6,gC=L.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?ye`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Aa}px;
          border-bottom: 2px solid ${({theme:n})=>n.materialText};
        `:ye`
          bottom: ${-6}px;
          height: ${Aa}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:n})=>n.materialText};
          border-right: 1px solid ${({theme:n})=>n.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:n})=>e&&ye`
      ${Pn()}
      box-shadow: 1px 1px 0px ${n.materialTextDisabledShadow};
      border-color: ${n.materialTextDisabled};
    `}
`,xC=L.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?ye`
          transform: translate(${Aa+2}px, ${Aa+1}px);
        `:ye`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,qy=g.forwardRef(({defaultValue:e,disabled:n=!1,marks:o=!1,max:i=100,min:a=0,name:u,onChange:d,onChangeCommitted:p,onMouseDown:h,orientation:m="horizontal",size:y="100%",step:w=1,value:k,variant:T="default",...E},C)=>{const $=T==="flat"?hC:pC,b=m==="vertical",[j=a,S]=Fr({defaultValue:e,onChange:d??p,value:k}),{isFocusVisible:R,onBlurVisible:M,ref:V}=cC(),[Z,ne]=g.useState(!1),ie=g.useRef(),me=g.useRef(null),de=wg(V,ie),xe=wg(C,de),ce=io(ue=>{R(ue)&&ne(!0)}),G=io(()=>{Z!==!1&&(ne(!1),M())}),N=g.useRef(),I=g.useMemo(()=>o===!0&&Number.isFinite(w)?[...Array(Math.round((i-a)/w)+1)].map((ue,fe)=>({label:void 0,value:a+w*fe})):Array.isArray(o)?o:[],[o,i,a,w]),q=io(ue=>{const fe=(i-a)/10,Q=I.map(H=>H.value),Y=Q.indexOf(j);let re=0;switch(ue.key){case"Home":re=a;break;case"End":re=i;break;case"PageUp":w&&(re=j+fe);break;case"PageDown":w&&(re=j-fe);break;case"ArrowRight":case"ArrowUp":w?re=j+w:re=Q[Y+1]||Q[Q.length-1];break;case"ArrowLeft":case"ArrowDown":w?re=j-w:re=Q[Y-1]||Q[0];break;default:return}ue.preventDefault(),w&&(re=mg(re,w,a)),re=co(re,a,i),S(re),ne(!0),d==null||d(re),p==null||p(re)}),W=g.useCallback(ue=>{if(!ie.current)return 0;const fe=ie.current.getBoundingClientRect();let Q;b?Q=(fe.bottom-ue.y)/fe.height:Q=(ue.x-fe.left)/fe.width;let Y;if(Y=uC(Q,a,i),w)Y=mg(Y,w,a);else{const re=I.map(A=>A.value),H=dC(re,Y);Y=re[H]}return Y=co(Y,a,i),Y},[I,i,a,w,b]),F=io(ue=>{var fe;const Q=ql(ue,N.current);if(!Q)return;const Y=W(Q);(fe=me.current)===null||fe===void 0||fe.focus(),S(Y),ne(!0),d==null||d(Y)}),P=io(ue=>{const fe=ql(ue,N.current);if(!fe)return;const Q=W(fe);p==null||p(Q),N.current=void 0;const Y=Gl(ie.current);Y.removeEventListener("mousemove",F),Y.removeEventListener("mouseup",P),Y.removeEventListener("touchmove",F),Y.removeEventListener("touchend",P)}),z=io(ue=>{var fe;h==null||h(ue),ue.preventDefault(),(fe=me.current)===null||fe===void 0||fe.focus(),ne(!0);const Q=ql(ue,N.current);if(Q){const re=W(Q);S(re),d==null||d(re)}const Y=Gl(ie.current);Y.addEventListener("mousemove",F),Y.addEventListener("mouseup",P)}),ee=io(ue=>{var fe;ue.preventDefault();const Q=ue.changedTouches[0];Q!=null&&(N.current=Q.identifier),(fe=me.current)===null||fe===void 0||fe.focus(),ne(!0);const Y=ql(ue,N.current);if(Y){const H=W(Y);S(H),d==null||d(H)}const re=Gl(ie.current);re.addEventListener("touchmove",F),re.addEventListener("touchend",P)});return g.useEffect(()=>{const{current:ue}=ie;ue==null||ue.addEventListener("touchstart",ee);const fe=Gl(ue);return()=>{ue==null||ue.removeEventListener("touchstart",ee),fe.removeEventListener("mousemove",F),fe.removeEventListener("mouseup",P),fe.removeEventListener("touchmove",F),fe.removeEventListener("touchend",P)}},[P,F,ee]),J.createElement(fC,{$disabled:n,hasMarks:!!I.length,isFocused:Z,onMouseDown:z,orientation:m,ref:xe,size:_r(y),...E},J.createElement("input",{disabled:n,name:u,type:"hidden",value:j??0}),I&&I.map(ue=>J.createElement(gC,{$disabled:n,"data-testid":"tick",key:ue.value/(i-a)*100,orientation:m,style:{[b?"bottom":"left"]:`${(ue.value-a)/(i-a)*100}%`}},ue.label&&J.createElement(xC,{"aria-hidden":!0,"data-testid":"mark",orientation:m},ue.label))),J.createElement($,{orientation:m,variant:T}),J.createElement(mC,{$disabled:n,"aria-disabled":n?!0:void 0,"aria-orientation":m,"aria-valuemax":i,"aria-valuemin":a,"aria-valuenow":j,onBlur:G,onFocus:ce,onKeyDown:q,orientation:m,ref:me,role:"slider",style:{[b?"bottom":"left"]:`${(b?-100:0)+100*(j-a)/(i-a)}%`},tabIndex:n?void 0:0,variant:T}))});qy.displayName="Slider";const yC=L.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${bp};
  overflow-y: auto;
`,Gy=g.forwardRef(function({children:n,...o},i){return J.createElement(yC,{ref:i,...o},n)});Gy.displayName="TableBody";const wC=L.td`
  padding: 0 8px;
`,lo=g.forwardRef(function({children:n,...o},i){return J.createElement(wC,{ref:i,...o},n)});lo.displayName="TableDataCell";const vC=L.thead`
  display: table-header-group;
`,Yy=g.forwardRef(function({children:n,...o},i){return J.createElement(vC,{ref:i,...o},n)});Yy.displayName="TableHead";const bC=L.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:e})=>e.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${rt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&ye`
      &:active {
        &:before {
          ${rt({invert:!0,style:"window"})}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({theme:e})=>e.materialText};
  ${({$disabled:e})=>e&&Pn()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&Pn()}
  }
`,Xy=g.forwardRef(function({disabled:n=!1,children:o,onClick:i,onTouchStart:a=vo,sort:u,...d},p){const h=u==="asc"?"ascending":u==="desc"?"descending":void 0;return J.createElement(bC,{$disabled:n,"aria-disabled":n,"aria-sort":h,onClick:n?void 0:i,onTouchStart:n?void 0:a,ref:p,...d},J.createElement("div",null,o))});Xy.displayName="TableHeadCell";const kC=L.tr`
  color: inherit;
  display: table-row;
  height: calc(${$t.md} - 2px);
  line-height: calc(${$t.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,Sf=g.forwardRef(function({children:n,...o},i){return J.createElement(kC,{ref:i,...o},n)});Sf.displayName="TableRow";const SC=L.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,jC=L(qn)`
  &:before {
    box-shadow: none;
  }
`,Jy=g.forwardRef(({children:e,...n},o)=>J.createElement(jC,null,J.createElement(SC,{ref:o,...n},e)));Jy.displayName="Table";const CC=L.button`
  ${Nn()}
  ${rt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${$t.md};
  line-height: ${$t.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ii}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${$t.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({theme:e})=>e.material};
    bottom: -4px;
    left: 2px;
  }
`,Lr=g.forwardRef(({value:e,onClick:n,selected:o=!1,children:i,...a},u)=>J.createElement(CC,{"aria-selected":o,selected:o,onClick:d=>n==null?void 0:n(e,d),ref:u,role:"tab",...a},i));Lr.displayName="Tab";const EC=L.div`
  ${Nn()}
  ${rt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,ec=g.forwardRef(({children:e,...n},o)=>J.createElement(EC,{ref:o,...n},e));ec.displayName="TabBody";const $C=L.div`
  position: relative;
  ${({isMultiRow:e,theme:n})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${n.borderDark};
  }
  `}
`,TC=L.div.attrs(()=>({"data-testid":"tab-row"}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({theme:e})=>e.borderDarkest};
    border-left: 2px solid ${({theme:e})=>e.borderLightest};
  }
`;function AC(e,n){const o=[];for(let i=n;i>0;i-=1)o.push(e.splice(0,Math.ceil(e.length/i)));return o}const tc=g.forwardRef(({value:e,onChange:n=vo,children:o,rows:i=1,...a},u)=>{const d=g.useMemo(()=>{var p;const h=(p=J.Children.map(o,w=>{if(!J.isValidElement(w))return null;const k={selected:w.props.value===e,onClick:n};return J.cloneElement(w,k)}))!==null&&p!==void 0?p:[],m=AC(h,i).map((w,k)=>({key:k,tabs:w})),y=m.findIndex(w=>w.tabs.some(k=>k.props.selected));return m.push(m.splice(y,1)[0]),m},[o,n,i,e]);return J.createElement($C,{...a,isMultiRow:i>1,role:"tablist",ref:u},d.map(p=>J.createElement(TC,{key:p.key},p.tabs)))});tc.displayName="Tabs";const RC=["blur","focus"],DC=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function bg(e){return"nativeEvent"in e&&RC.includes(e.type)}function kg(e){return"nativeEvent"in e&&DC.includes(e.type)}const IC={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},PC=L.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${vp};
  text-align: center;
  font-size: 1rem;
  ${e=>IC[e.position]}
`,NC=L.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,MC=g.forwardRef(({className:e,children:n,disableFocusListener:o=!1,disableMouseListener:i=!1,enterDelay:a=1e3,leaveDelay:u=0,onBlur:d,onClose:p,onFocus:h,onMouseEnter:m,onMouseLeave:y,onOpen:w,style:k,text:T,position:E="top",...C},$)=>{const[b,j]=g.useState(!1),[S,R]=g.useState(),[M,V]=g.useState(),Z=!o,ne=!i,ie=W=>{window.clearTimeout(S),window.clearTimeout(M);const F=window.setTimeout(()=>{j(!0),w==null||w(W)},a);R(F)},me=W=>{W.persist(),bg(W)?h==null||h(W):kg(W)&&(m==null||m(W)),ie(W)},de=W=>{window.clearTimeout(S),window.clearTimeout(M);const F=window.setTimeout(()=>{j(!1),p==null||p(W)},u);V(F)},xe=W=>{W.persist(),bg(W)?d==null||d(W):kg(W)&&(y==null||y(W)),de(W)},ce=Z?xe:void 0,G=Z?me:void 0,N=ne?me:void 0,I=ne?xe:void 0,q=Z?0:void 0;return J.createElement(NC,{"data-testid":"tooltip-wrapper",onBlur:ce,onFocus:G,onMouseEnter:N,onMouseLeave:I,tabIndex:q},J.createElement(PC,{className:e,"data-testid":"tooltip",position:E,ref:$,show:b,style:k,...C},T),n)});MC.displayName="Tooltip";const jf=L(jp)`
  white-space: nowrap;
`,Zy=ye`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":ye`
          cursor: pointer;

          :focus {
            ${jf} {
              background: ${({theme:n})=>n.hoverBackground};
              color: ${({theme:n})=>n.materialTextInvert};
              outline: 2px dotted ${({theme:n})=>n.focusSecondary};
            }
          }
        `}
`,LC=L.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&ye`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:n})=>n.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({theme:e})=>e.borderDark};
      font-size: 12px;
    }
  }
`,OC=L.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?ye`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:n})=>n.material};
            }
          }
        `:ye`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:n})=>n.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({theme:e})=>e.borderDark};
    }
  }
`,zC=L.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,_C=L.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Zy};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`,Sg=L(Sp)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Zy};
`,FC=L.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function jg(e,n){return e.includes(n)?e.filter(o=>o!==n):[...e,n]}function Cg(e){e.preventDefault()}function ew({className:e,disabled:n,expanded:o,innerRef:i,level:a,select:u,selected:d,style:p,tree:h=[]}){const m=a===0,y=g.useCallback(w=>{var k,T;const E=!!(w.items&&w.items.length>0),C=o.includes(w.id),$=(k=n||w.disabled)!==null&&k!==void 0?k:!1,b=$?Cg:M=>u(M,w),j=$?Cg:M=>u(M,w),S=d===w.id,R=J.createElement(FC,{"aria-hidden":!0},w.icon);return J.createElement(OC,{key:w.label,isRootLevel:m,role:"treeitem","aria-expanded":C,"aria-selected":S,hasItems:E},E?J.createElement(zC,{open:C},J.createElement(_C,{onClick:b,$disabled:$},J.createElement(Sg,{$disabled:$},R,J.createElement(jf,null,w.label))),C&&J.createElement(ew,{className:e,disabled:$,expanded:o,level:a+1,select:u,selected:d,style:p,tree:(T=w.items)!==null&&T!==void 0?T:[]})):J.createElement(Sg,{as:"button",$disabled:$,onClick:j},R,J.createElement(jf,null,w.label)))},[e,n,o,m,a,u,d,p]);return J.createElement(LC,{className:m?e:void 0,style:m?p:void 0,ref:m?i:void 0,role:m?"tree":"group",isRootLevel:m},h.map(y))}function BC({className:e,defaultExpanded:n=[],defaultSelected:o,disabled:i=!1,expanded:a,onNodeSelect:u,onNodeToggle:d,selected:p,style:h,tree:m=[]},y){const[w,k]=Fr({defaultValue:n,onChange:d,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[T,E]=Fr({defaultValue:o,onChange:u,onChangePropName:"onNodeSelect",value:p,valuePropName:"selected"}),C=g.useCallback((j,S)=>{if(d){const R=jg(w,S);d(j,R)}k(R=>jg(R,S))},[w,d,k]),$=g.useCallback((j,S)=>{E(S),u&&u(j,S)},[u,E]),b=g.useCallback((j,S)=>{j.preventDefault(),$(j,S.id),S.items&&S.items.length&&C(j,S.id)},[$,C]);return J.createElement(ew,{className:e,disabled:i,expanded:w,level:0,innerRef:y,select:b,selected:T,style:h,tree:m})}const WC=g.forwardRef(BC);WC.displayName="TreeView";const HC="/assets/ms_sans_serif-Du8rjN1q.woff2",UC="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var rs={},Eg;function VC(){if(Eg)return rs;Eg=1,Object.defineProperty(rs,"__esModule",{value:!0}),rs.parse=d,rs.serialize=m;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const k=function(){};return k.prototype=Object.create(null),k})();function d(k,T){const E=new u,C=k.length;if(C<2)return E;const $=(T==null?void 0:T.decode)||y;let b=0;do{const j=k.indexOf("=",b);if(j===-1)break;const S=k.indexOf(";",b),R=S===-1?C:S;if(j>R){b=k.lastIndexOf(";",j-1)+1;continue}const M=p(k,b,j),V=h(k,j,M),Z=k.slice(M,V);if(E[Z]===void 0){let ne=p(k,j+1,R),ie=h(k,R,ne);const me=$(k.slice(ne,ie));E[Z]=me}b=R+1}while(b<C);return E}function p(k,T,E){do{const C=k.charCodeAt(T);if(C!==32&&C!==9)return T}while(++T<E);return E}function h(k,T,E){for(;T>E;){const C=k.charCodeAt(--T);if(C!==32&&C!==9)return T+1}return E}function m(k,T,E){const C=(E==null?void 0:E.encode)||encodeURIComponent;if(!e.test(k))throw new TypeError(`argument name is invalid: ${k}`);const $=C(T);if(!n.test($))throw new TypeError(`argument val is invalid: ${T}`);let b=k+"="+$;if(!E)return b;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);b+="; Max-Age="+E.maxAge}if(E.domain){if(!o.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);b+="; Domain="+E.domain}if(E.path){if(!i.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);b+="; Path="+E.path}if(E.expires){if(!w(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);b+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(b+="; HttpOnly"),E.secure&&(b+="; Secure"),E.partitioned&&(b+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return b}function y(k){if(k.indexOf("%")===-1)return k;try{return decodeURIComponent(k)}catch{return k}}function w(k){return a.call(k)==="[object Date]"}return rs}VC();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $g="popstate";function KC(e={}){function n(i,a){let{pathname:u,search:d,hash:p}=i.location;return Cf("",{pathname:u,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function o(i,a){return typeof a=="string"?a:ks(a)}return qC(n,o,null,e)}function tt(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Qn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function QC(){return Math.random().toString(36).substring(2,10)}function Tg(e,n){return{usr:e.state,key:e.key,idx:n}}function Cf(e,n,o=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?di(n):n,state:o,key:n&&n.key||i||QC()}}function ks({pathname:e="/",search:n="",hash:o=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function di(e){let n={};if(e){let o=e.indexOf("#");o>=0&&(n.hash=e.substring(o),e=e.substring(0,o));let i=e.indexOf("?");i>=0&&(n.search=e.substring(i),e=e.substring(0,i)),e&&(n.pathname=e)}return n}function qC(e,n,o,i={}){let{window:a=document.defaultView,v5Compat:u=!1}=i,d=a.history,p="POP",h=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function w(){p="POP";let $=y(),b=$==null?null:$-m;m=$,h&&h({action:p,location:C.location,delta:b})}function k($,b){p="PUSH";let j=Cf(C.location,$,b);m=y()+1;let S=Tg(j,m),R=C.createHref(j);try{d.pushState(S,"",R)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(R)}u&&h&&h({action:p,location:C.location,delta:1})}function T($,b){p="REPLACE";let j=Cf(C.location,$,b);m=y();let S=Tg(j,m),R=C.createHref(j);d.replaceState(S,"",R),u&&h&&h({action:p,location:C.location,delta:0})}function E($){let b=a.location.origin!=="null"?a.location.origin:a.location.href,j=typeof $=="string"?$:ks($);return j=j.replace(/ $/,"%20"),tt(b,`No window.location.(origin|href) available to create URL for href: ${j}`),new URL(j,b)}let C={get action(){return p},get location(){return e(a,d)},listen($){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener($g,w),h=$,()=>{a.removeEventListener($g,w),h=null}},createHref($){return n(a,$)},createURL:E,encodeLocation($){let b=E($);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:k,replace:T,go($){return d.go($)}};return C}function tw(e,n,o="/"){return GC(e,n,o,!1)}function GC(e,n,o,i){let a=typeof n=="string"?di(n):n,u=Br(a.pathname||"/",o);if(u==null)return null;let d=nw(e);YC(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=lE(u);p=iE(d[h],m,i)}return p}function nw(e,n=[],o=[],i=""){let a=(u,d,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};h.relativePath.startsWith("/")&&(tt(h.relativePath.startsWith(i),`Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(i.length));let m=dr([i,h.relativePath]),y=o.concat(h);u.children&&u.children.length>0&&(tt(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),nw(u.children,n,y,m)),!(u.path==null&&!u.index)&&n.push({path:m,score:rE(m,u.index),routesMeta:y})};return e.forEach((u,d)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))a(u,d);else for(let h of rw(u.path))a(u,d,h)}),n}function rw(e){let n=e.split("/");if(n.length===0)return[];let[o,...i]=n,a=o.endsWith("?"),u=o.replace(/\?$/,"");if(i.length===0)return a?[u,""]:[u];let d=rw(i.join("/")),p=[];return p.push(...d.map(h=>h===""?u:[u,h].join("/"))),a&&p.push(...d),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function YC(e){e.sort((n,o)=>n.score!==o.score?o.score-n.score:oE(n.routesMeta.map(i=>i.childrenIndex),o.routesMeta.map(i=>i.childrenIndex)))}var XC=/^:[\w-]+$/,JC=3,ZC=2,eE=1,tE=10,nE=-2,Ag=e=>e==="*";function rE(e,n){let o=e.split("/"),i=o.length;return o.some(Ag)&&(i+=nE),n&&(i+=ZC),o.filter(a=>!Ag(a)).reduce((a,u)=>a+(XC.test(u)?JC:u===""?eE:tE),i)}function oE(e,n){return e.length===n.length&&e.slice(0,-1).every((i,a)=>i===n[a])?e[e.length-1]-n[n.length-1]:0}function iE(e,n,o=!1){let{routesMeta:i}=e,a={},u="/",d=[];for(let p=0;p<i.length;++p){let h=i[p],m=p===i.length-1,y=u==="/"?n:n.slice(u.length)||"/",w=Ra({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y),k=h.route;if(!w&&m&&o&&!i[i.length-1].route.index&&(w=Ra({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!w)return null;Object.assign(a,w.params),d.push({params:a,pathname:dr([u,w.pathname]),pathnameBase:dE(dr([u,w.pathnameBase])),route:k}),w.pathnameBase!=="/"&&(u=dr([u,w.pathnameBase]))}return d}function Ra(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,i]=sE(e.path,e.caseSensitive,e.end),a=n.match(o);if(!a)return null;let u=a[0],d=u.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:i.reduce((m,{paramName:y,isOptional:w},k)=>{if(y==="*"){let E=p[k]||"";d=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const T=p[k];return w&&!T?m[y]=void 0:m[y]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:e}}function sE(e,n=!1,o=!0){Qn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(i.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),i]}function lE(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Qn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Br(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,i=e.charAt(o);return i&&i!=="/"?null:e.slice(o)||"/"}function aE(e,n="/"){let{pathname:o,search:i="",hash:a=""}=typeof e=="string"?di(e):e;return{pathname:o?o.startsWith("/")?o:cE(o,n):n,search:fE(i),hash:pE(a)}}function cE(e,n){let o=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function vd(e,n,o,i){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uE(e){return e.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function ow(e){let n=uE(e);return n.map((o,i)=>i===n.length-1?o.pathname:o.pathnameBase)}function iw(e,n,o,i=!1){let a;typeof e=="string"?a=di(e):(a={...e},tt(!a.pathname||!a.pathname.includes("?"),vd("?","pathname","search",a)),tt(!a.pathname||!a.pathname.includes("#"),vd("#","pathname","hash",a)),tt(!a.search||!a.search.includes("#"),vd("#","search","hash",a)));let u=e===""||a.pathname==="",d=u?"/":a.pathname,p;if(d==null)p=o;else{let w=n.length-1;if(!i&&d.startsWith("..")){let k=d.split("/");for(;k[0]==="..";)k.shift(),w-=1;a.pathname=k.join("/")}p=w>=0?n[w]:"/"}let h=aE(a,p),m=d&&d!=="/"&&d.endsWith("/"),y=(u||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||y)&&(h.pathname+="/"),h}var dr=e=>e.join("/").replace(/\/\/+/g,"/"),dE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,pE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function hE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var sw=["POST","PUT","PATCH","DELETE"];new Set(sw);var mE=["GET",...sw];new Set(mE);var fi=g.createContext(null);fi.displayName="DataRouter";var nc=g.createContext(null);nc.displayName="DataRouterState";var lw=g.createContext({isTransitioning:!1});lw.displayName="ViewTransition";var gE=g.createContext(new Map);gE.displayName="Fetchers";var xE=g.createContext(null);xE.displayName="Await";var Gn=g.createContext(null);Gn.displayName="Navigation";var $s=g.createContext(null);$s.displayName="Location";var fr=g.createContext({outlet:null,matches:[],isDataRoute:!1});fr.displayName="Route";var Ep=g.createContext(null);Ep.displayName="RouteError";function yE(e,{relative:n}={}){tt(Ts(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:i}=g.useContext(Gn),{hash:a,pathname:u,search:d}=As(e,{relative:n}),p=u;return o!=="/"&&(p=u==="/"?o:dr([o,u])),i.createHref({pathname:p,search:d,hash:a})}function Ts(){return g.useContext($s)!=null}function bo(){return tt(Ts(),"useLocation() may be used only in the context of a <Router> component."),g.useContext($s).location}var aw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function cw(e){g.useContext(Gn).static||g.useLayoutEffect(e)}function pi(){let{isDataRoute:e}=g.useContext(fr);return e?DE():wE()}function wE(){tt(Ts(),"useNavigate() may be used only in the context of a <Router> component.");let e=g.useContext(fi),{basename:n,navigator:o}=g.useContext(Gn),{matches:i}=g.useContext(fr),{pathname:a}=bo(),u=JSON.stringify(ow(i)),d=g.useRef(!1);return cw(()=>{d.current=!0}),g.useCallback((h,m={})=>{if(Qn(d.current,aw),!d.current)return;if(typeof h=="number"){o.go(h);return}let y=iw(h,JSON.parse(u),a,m.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:dr([n,y.pathname])),(m.replace?o.replace:o.push)(y,m.state,m)},[n,o,u,a,e])}g.createContext(null);function As(e,{relative:n}={}){let{matches:o}=g.useContext(fr),{pathname:i}=bo(),a=JSON.stringify(ow(o));return g.useMemo(()=>iw(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function vE(e,n){return uw(e,n)}function uw(e,n,o,i){var b;tt(Ts(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=g.useContext(Gn),{matches:u}=g.useContext(fr),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",y=d&&d.route;{let j=y&&y.path||"";dw(h,!y||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let w=bo(),k;if(n){let j=typeof n=="string"?di(n):n;tt(m==="/"||((b=j.pathname)==null?void 0:b.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${j.pathname}" was given in the \`location\` prop.`),k=j}else k=w;let T=k.pathname||"/",E=T;if(m!=="/"){let j=m.replace(/^\//,"").split("/");E="/"+T.replace(/^\//,"").split("/").slice(j.length).join("/")}let C=tw(e,{pathname:E});Qn(y||C!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),Qn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=CE(C&&C.map(j=>Object.assign({},j,{params:Object.assign({},p,j.params),pathname:dr([m,a.encodeLocation?a.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?m:dr([m,a.encodeLocation?a.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),u,o,i);return n&&$?g.createElement($s.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},$):$}function bE(){let e=RE(),n=hE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:u},"ErrorBoundary")," or"," ",g.createElement("code",{style:u},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),o?g.createElement("pre",{style:a},o):null,d)}var kE=g.createElement(bE,null),SE=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?g.createElement(fr.Provider,{value:this.props.routeContext},g.createElement(Ep.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function jE({routeContext:e,match:n,children:o}){let i=g.useContext(fi);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(fr.Provider,{value:e},o)}function CE(e,n=[],o=null,i=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let a=e,u=o==null?void 0:o.errors;if(u!=null){let h=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);tt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let d=!1,p=-1;if(o)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:y,errors:w}=o,k=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!w||w[m.route.id]===void 0);if(m.route.lazy||k){d=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((h,m,y)=>{let w,k=!1,T=null,E=null;o&&(w=u&&m.route.id?u[m.route.id]:void 0,T=m.route.errorElement||kE,d&&(p<0&&y===0?(dw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,E=null):p===y&&(k=!0,E=m.route.hydrateFallbackElement||null)));let C=n.concat(a.slice(0,y+1)),$=()=>{let b;return w?b=T:k?b=E:m.route.Component?b=g.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=h,g.createElement(jE,{match:m,routeContext:{outlet:h,matches:C,isDataRoute:o!=null},children:b})};return o&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?g.createElement(SE,{location:o.location,revalidation:o.revalidation,component:T,error:w,children:$(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):$()},null)}function $p(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function EE(e){let n=g.useContext(fi);return tt(n,$p(e)),n}function $E(e){let n=g.useContext(nc);return tt(n,$p(e)),n}function TE(e){let n=g.useContext(fr);return tt(n,$p(e)),n}function Tp(e){let n=TE(e),o=n.matches[n.matches.length-1];return tt(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function AE(){return Tp("useRouteId")}function RE(){var i;let e=g.useContext(Ep),n=$E("useRouteError"),o=Tp("useRouteError");return e!==void 0?e:(i=n.errors)==null?void 0:i[o]}function DE(){let{router:e}=EE("useNavigate"),n=Tp("useNavigate"),o=g.useRef(!1);return cw(()=>{o.current=!0}),g.useCallback(async(a,u={})=>{Qn(o.current,aw),o.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:n,...u}))},[e,n])}var Rg={};function dw(e,n,o){!n&&!Rg[e]&&(Rg[e]=!0,Qn(!1,o))}g.memo(IE);function IE({routes:e,future:n,state:o}){return uw(e,void 0,o,n)}function ua(e){tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function PE({basename:e="/",children:n=null,location:o,navigationType:i="POP",navigator:a,static:u=!1}){tt(!Ts(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),p=g.useMemo(()=>({basename:d,navigator:a,static:u,future:{}}),[d,a,u]);typeof o=="string"&&(o=di(o));let{pathname:h="/",search:m="",hash:y="",state:w=null,key:k="default"}=o,T=g.useMemo(()=>{let E=Br(h,d);return E==null?null:{location:{pathname:E,search:m,hash:y,state:w,key:k},navigationType:i}},[d,h,m,y,w,k,i]);return Qn(T!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:g.createElement(Gn.Provider,{value:p},g.createElement($s.Provider,{children:n,value:T}))}function NE({children:e,location:n}){return vE(Ef(e),n)}function Ef(e,n=[]){let o=[];return g.Children.forEach(e,(i,a)=>{if(!g.isValidElement(i))return;let u=[...n,a];if(i.type===g.Fragment){o.push.apply(o,Ef(i.props.children,u));return}tt(i.type===ua,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||u.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=Ef(i.props.children,u)),o.push(d)}),o}var da="get",fa="application/x-www-form-urlencoded";function rc(e){return e!=null&&typeof e.tagName=="string"}function ME(e){return rc(e)&&e.tagName.toLowerCase()==="button"}function LE(e){return rc(e)&&e.tagName.toLowerCase()==="form"}function OE(e){return rc(e)&&e.tagName.toLowerCase()==="input"}function zE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _E(e,n){return e.button===0&&(!n||n==="_self")&&!zE(e)}var Yl=null;function FE(){if(Yl===null)try{new FormData(document.createElement("form"),0),Yl=!1}catch{Yl=!0}return Yl}var BE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bd(e){return e!=null&&!BE.has(e)?(Qn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fa}"`),null):e}function WE(e,n){let o,i,a,u,d;if(LE(e)){let p=e.getAttribute("action");i=p?Br(p,n):null,o=e.getAttribute("method")||da,a=bd(e.getAttribute("enctype"))||fa,u=new FormData(e)}else if(ME(e)||OE(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||p.getAttribute("action");if(i=h?Br(h,n):null,o=e.getAttribute("formmethod")||p.getAttribute("method")||da,a=bd(e.getAttribute("formenctype"))||bd(p.getAttribute("enctype"))||fa,u=new FormData(p,e),!FE()){let{name:m,type:y,value:w}=e;if(y==="image"){let k=m?`${m}.`:"";u.append(`${k}x`,"0"),u.append(`${k}y`,"0")}else m&&u.append(m,w)}}else{if(rc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=da,i=null,a=fa,d=e}return u&&a==="text/plain"&&(d=u,u=void 0),{action:i,method:o.toLowerCase(),encType:a,formData:u,body:d}}function Ap(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function HE(e,n){if(e.id in n)return n[e.id];try{let o=await import(e.module);return n[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function UE(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function VE(e,n,o){let i=await Promise.all(e.map(async a=>{let u=n.routes[a.route.id];if(u){let d=await HE(u,o);return d.links?d.links():[]}return[]}));return GE(i.flat(1).filter(UE).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Dg(e,n,o,i,a,u){let d=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,p=(h,m)=>{var y;return o[m].pathname!==h.pathname||((y=o[m].route.path)==null?void 0:y.endsWith("*"))&&o[m].params["*"]!==h.params["*"]};return u==="assets"?n.filter((h,m)=>d(h,m)||p(h,m)):u==="data"?n.filter((h,m)=>{var w;let y=i.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let k=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function KE(e,n){return QE(e.map(o=>{let i=n.routes[o.route.id];if(!i)return[];let a=[i.module];return i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function QE(e){return[...new Set(e)]}function qE(e){let n={},o=Object.keys(e).sort();for(let i of o)n[i]=e[i];return n}function GE(e,n){let o=new Set;return new Set(n),e.reduce((i,a)=>{let u=JSON.stringify(qE(a));return o.has(u)||(o.add(u),i.push({key:u,link:a})),i},[])}function YE(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function XE(){let e=g.useContext(fi);return Ap(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function JE(){let e=g.useContext(nc);return Ap(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Rp=g.createContext(void 0);Rp.displayName="FrameworkContext";function fw(){let e=g.useContext(Rp);return Ap(e,"You must render this element inside a <HydratedRouter> element"),e}function ZE(e,n){let o=g.useContext(Rp),[i,a]=g.useState(!1),[u,d]=g.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:y,onTouchStart:w}=n,k=g.useRef(null);g.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let C=b=>{b.forEach(j=>{d(j.isIntersecting)})},$=new IntersectionObserver(C,{threshold:.5});return k.current&&$.observe(k.current),()=>{$.disconnect()}}},[e]),g.useEffect(()=>{if(i){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[i]);let T=()=>{a(!0)},E=()=>{a(!1),d(!1)};return o?e!=="intent"?[u,k,{}]:[u,k,{onFocus:os(p,T),onBlur:os(h,E),onMouseEnter:os(m,T),onMouseLeave:os(y,E),onTouchStart:os(w,T)}]:[!1,k,{}]}function os(e,n){return o=>{e&&e(o),o.defaultPrevented||n(o)}}function e2({page:e,...n}){let{router:o}=XE(),i=g.useMemo(()=>tw(o.routes,e,o.basename),[o.routes,e,o.basename]);return i?g.createElement(n2,{page:e,matches:i,...n}):null}function t2(e){let{manifest:n,routeModules:o}=fw(),[i,a]=g.useState([]);return g.useEffect(()=>{let u=!1;return VE(e,n,o).then(d=>{u||a(d)}),()=>{u=!0}},[e,n,o]),i}function n2({page:e,matches:n,...o}){let i=bo(),{manifest:a,routeModules:u}=fw(),{loaderData:d,matches:p}=JE(),h=g.useMemo(()=>Dg(e,n,p,a,i,"data"),[e,n,p,a,i]),m=g.useMemo(()=>Dg(e,n,p,a,i,"assets"),[e,n,p,a,i]),y=g.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let T=new Set,E=!1;if(n.forEach($=>{var j;let b=a.routes[$.route.id];!b||!b.hasLoader||(!h.some(S=>S.route.id===$.route.id)&&$.route.id in d&&((j=u[$.route.id])!=null&&j.shouldRevalidate)||b.hasClientLoader?E=!0:T.add($.route.id))}),T.size===0)return[];let C=YE(e);return E&&T.size>0&&C.searchParams.set("_routes",n.filter($=>T.has($.route.id)).map($=>$.route.id).join(",")),[C.pathname+C.search]},[d,i,a,h,n,e,u]),w=g.useMemo(()=>KE(m,a),[m,a]),k=t2(m);return g.createElement(g.Fragment,null,y.map(T=>g.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...o})),w.map(T=>g.createElement("link",{key:T,rel:"modulepreload",href:T,...o})),k.map(({key:T,link:E})=>g.createElement("link",{key:T,...E})))}function r2(...e){return n=>{e.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})}}var pw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{pw&&(window.__reactRouterVersion="7.1.3")}catch{}function o2({basename:e,children:n,window:o}){let i=g.useRef();i.current==null&&(i.current=KC({window:o,v5Compat:!0}));let a=i.current,[u,d]=g.useState({action:a.action,location:a.location}),p=g.useCallback(h=>{g.startTransition(()=>d(h))},[d]);return g.useLayoutEffect(()=>a.listen(p),[a,p]),g.createElement(PE,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:a})}var hw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mw=g.forwardRef(function({onClick:n,discover:o="render",prefetch:i="none",relative:a,reloadDocument:u,replace:d,state:p,target:h,to:m,preventScrollReset:y,viewTransition:w,...k},T){let{basename:E}=g.useContext(Gn),C=typeof m=="string"&&hw.test(m),$,b=!1;if(typeof m=="string"&&C&&($=m,pw))try{let ie=new URL(window.location.href),me=m.startsWith("//")?new URL(ie.protocol+m):new URL(m),de=Br(me.pathname,E);me.origin===ie.origin&&de!=null?m=de+me.search+me.hash:b=!0}catch{Qn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=yE(m,{relative:a}),[S,R,M]=ZE(i,k),V=a2(m,{replace:d,state:p,target:h,preventScrollReset:y,relative:a,viewTransition:w});function Z(ie){n&&n(ie),ie.defaultPrevented||V(ie)}let ne=g.createElement("a",{...k,...M,href:$||j,onClick:b||u?n:Z,ref:r2(T,R),target:h,"data-discover":!C&&o==="render"?"true":void 0});return S&&!C?g.createElement(g.Fragment,null,ne,g.createElement(e2,{page:j})):ne});mw.displayName="Link";var i2=g.forwardRef(function({"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:u,to:d,viewTransition:p,children:h,...m},y){let w=As(d,{relative:m.relative}),k=bo(),T=g.useContext(nc),{navigator:E,basename:C}=g.useContext(Gn),$=T!=null&&p2(w)&&p===!0,b=E.encodeLocation?E.encodeLocation(w).pathname:w.pathname,j=k.pathname,S=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;o||(j=j.toLowerCase(),S=S?S.toLowerCase():null,b=b.toLowerCase()),S&&C&&(S=Br(S,C)||S);const R=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let M=j===b||!a&&j.startsWith(b)&&j.charAt(R)==="/",V=S!=null&&(S===b||!a&&S.startsWith(b)&&S.charAt(b.length)==="/"),Z={isActive:M,isPending:V,isTransitioning:$},ne=M?n:void 0,ie;typeof i=="function"?ie=i(Z):ie=[i,M?"active":null,V?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let me=typeof u=="function"?u(Z):u;return g.createElement(mw,{...m,"aria-current":ne,className:ie,ref:y,style:me,to:d,viewTransition:p},typeof h=="function"?h(Z):h)});i2.displayName="NavLink";var s2=g.forwardRef(({discover:e="render",fetcherKey:n,navigate:o,reloadDocument:i,replace:a,state:u,method:d=da,action:p,onSubmit:h,relative:m,preventScrollReset:y,viewTransition:w,...k},T)=>{let E=d2(),C=f2(p,{relative:m}),$=d.toLowerCase()==="get"?"get":"post",b=typeof p=="string"&&hw.test(p),j=S=>{if(h&&h(S),S.defaultPrevented)return;S.preventDefault();let R=S.nativeEvent.submitter,M=(R==null?void 0:R.getAttribute("formmethod"))||d;E(R||S.currentTarget,{fetcherKey:n,method:M,navigate:o,replace:a,state:u,relative:m,preventScrollReset:y,viewTransition:w})};return g.createElement("form",{ref:T,method:$,action:C,onSubmit:i?h:j,...k,"data-discover":!b&&e==="render"?"true":void 0})});s2.displayName="Form";function l2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gw(e){let n=g.useContext(fi);return tt(n,l2(e)),n}function a2(e,{target:n,replace:o,state:i,preventScrollReset:a,relative:u,viewTransition:d}={}){let p=pi(),h=bo(),m=As(e,{relative:u});return g.useCallback(y=>{if(_E(y,n)){y.preventDefault();let w=o!==void 0?o:ks(h)===ks(m);p(e,{replace:w,state:i,preventScrollReset:a,relative:u,viewTransition:d})}},[h,p,m,o,i,n,e,a,u,d])}var c2=0,u2=()=>`__${String(++c2)}__`;function d2(){let{router:e}=gw("useSubmit"),{basename:n}=g.useContext(Gn),o=AE();return g.useCallback(async(i,a={})=>{let{action:u,method:d,encType:p,formData:h,body:m}=WE(i,n);if(a.navigate===!1){let y=a.fetcherKey||u2();await e.fetch(y,o,a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||d,formEncType:a.encType||p,flushSync:a.flushSync})}else await e.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||d,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,n,o])}function f2(e,{relative:n}={}){let{basename:o}=g.useContext(Gn),i=g.useContext(fr);tt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),u={...As(e||".",{relative:n})},d=bo();if(e==null){u.search=d.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(y=>y==="")){p.delete("index"),h.filter(w=>w).forEach(w=>p.append("index",w));let y=p.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:dr([o,u.pathname])),ks(u)}function p2(e,n={}){let o=g.useContext(lw);tt(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=gw("useViewTransitionState"),a=As(e,{relative:n.relative});if(!o.isTransitioning)return!1;let u=Br(o.currentLocation.pathname,i)||o.currentLocation.pathname,d=Br(o.nextLocation.pathname,i)||o.nextLocation.pathname;return Ra(a.pathname,d)!=null||Ra(a.pathname,u)!=null}new TextEncoder;const Ct=[];for(let e=0;e<256;++e)Ct.push((e+256).toString(16).slice(1));function h2(e,n=0){return(Ct[e[n+0]]+Ct[e[n+1]]+Ct[e[n+2]]+Ct[e[n+3]]+"-"+Ct[e[n+4]]+Ct[e[n+5]]+"-"+Ct[e[n+6]]+Ct[e[n+7]]+"-"+Ct[e[n+8]]+Ct[e[n+9]]+"-"+Ct[e[n+10]]+Ct[e[n+11]]+Ct[e[n+12]]+Ct[e[n+13]]+Ct[e[n+14]]+Ct[e[n+15]]).toLowerCase()}let kd;const m2=new Uint8Array(16);function g2(){if(!kd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");kd=crypto.getRandomValues.bind(crypto)}return kd(m2)}const x2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ig={randomUUID:x2};function y2(e,n,o){var a;if(Ig.randomUUID&&!e)return Ig.randomUUID();e=e||{};const i=e.random??((a=e.rng)==null?void 0:a.call(e))??g2();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,h2(i)}function Rs(e){const n=[];for(const o of e.split("/"))if(!(o===""||o===".")){if(o===".."){n.pop();continue}n.push(o)}return n}function Or(e){return"/"+Rs(e).join("/")}function Ue(...e){return Or(e.join("/"))}function sn(e){const n=Rs(e);return n.pop(),"/"+n.join("/")}function ln(e){const n=Rs(e);return n.length?n[n.length-1]:""}class Ce extends Error{constructor(n,o){super(o?`${n}: ${o}`:n),this.code=n,this.name="KernelError"}}const w2={spawn:"proc",kill:"proc",win_focus:"gui",win_move:"gui",open:"fs",read:"fs",write:"fs",close:"fs",readdir:"fs",stat:"fs",mkdir:"fs",unlink:"fs",rename:"fs"};class v2{constructor(n){Ne(this,"registry");Ne(this,"processes",new Map);Ne(this,"listeners",new Set);Ne(this,"persistence");Ne(this,"defaultLocation");Ne(this,"uid");Ne(this,"snapshot",[]);Ne(this,"vfs",null);Ne(this,"kernelFds",new Map);Ne(this,"nextFd",3);Ne(this,"panicListeners",new Set);Ne(this,"panicState",null);Ne(this,"subscribeFs",n=>this.vfs?this.vfs.subscribe(n):()=>{});Ne(this,"fsVersion",()=>{var n;return((n=this.vfs)==null?void 0:n.version())??0});Ne(this,"subscribe",n=>(this.listeners.add(n),()=>this.listeners.delete(n)));Ne(this,"getSnapshot",()=>this.snapshot);Ne(this,"subscribePanic",n=>(this.panicListeners.add(n),()=>this.panicListeners.delete(n)));Ne(this,"getPanic",()=>this.panicState);this.registry=n.registry,this.persistence=n.persistence,this.defaultLocation=n.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=n.uid??1e3,this.boot()}boot(){var o;const n=(o=this.persistence)==null?void 0:o.load();if(n)for(const i of n)this.registry.has(i.exec)&&this.processes.set(i.pid,this.hydrate(i));this.rebuildSnapshot()}hydrate(n){return{pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,icon:n.icon,argv:n.argv??[],state:n.state,priority:n.priority,window:n.window,cwd:n.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const n=this.snapshot.map(o=>({pid:o.pid,ppid:o.ppid,uid:o.uid,exec:o.exec,name:o.name,icon:o.icon,argv:o.argv,priority:o.priority,window:o.window,cwd:o.cwd,state:o.state}));this.persistence.save(n)}mountVfs(n){this.vfs=n}processInfo(){return this.sysPs()}panic(n){this.panicState={code:n.code??"0E",address:n.address??"0028:C000"+((this.snapshot.length*7+11)%65536).toString(16).toUpperCase().padStart(4,"0"),message:n.message,stack:n.stack,syscall:n.syscall,recoverable:n.recoverable??!0};for(const o of this.panicListeners)o(this.panicState)}clearPanic(){this.panicState=null;for(const n of this.panicListeners)n(null)}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const n of this.listeners)n()}syscall(n,o,i){try{return Promise.resolve(this.dispatch(n,o,i))}catch(a){if(!(a instanceof Ce)){const u=a;this.panic({message:(u==null?void 0:u.message)??String(a),stack:u==null?void 0:u.stack,syscall:o})}return Promise.reject(a)}}enforcePermission(n,o){var d;if(n===null)return;const i=w2[o];if(!i)return;const a=this.processes.get(n);if(!a)throw new Ce("ESRCH",`no process ${n}`);if(!(((d=this.registry.get(a.exec))==null?void 0:d.permissions)??[]).includes(i))throw new Ce("EACCES",`'${a.exec}' lacks '${i}' permission for ${o}`)}dispatch(n,o,i){var a;switch(this.enforcePermission(n,o),o){case"spawn":return this.sysSpawn(n,i);case"exit":return this.sysExit(n,i.code??0);case"kill":return this.sysKill(i.pid);case"getpid":return n;case"getargv":return n?((a=this.processes.get(n))==null?void 0:a.argv)??[]:[];case"ps":return this.sysPs();case"win_focus":return this.sysFocus(i.pid);case"win_move":return this.sysMove(i.pid,i.location);case"open":return this.sysOpen(n,i.path,i.flags);case"read":return this.sysRead(n,i.fd,i.len);case"write":return this.sysWrite(n,i.fd,i.data);case"close":return this.sysClose(n,i.fd);case"readdir":return this.fs().readdir(i.path);case"stat":return this.fs().stat(i.path);case"mkdir":return this.fs().mkdir(i.path);case"unlink":return this.fs().unlink(i.path);case"rename":return this.fs().rename(i.from,i.to);default:throw new Ce("ENOSYS",`unknown syscall: ${o}`)}}sysSpawn(n,o){const i=this.registry.get(o.exec);if(!i)throw new Ce("ENOENT",`no program "${o.exec}" in /bin`);const a=y2();for(const u of this.processes.values())u.priority+=1;return this.processes.set(a,{pid:a,ppid:n,uid:this.uid,exec:o.exec,name:o.name??i.name,icon:o.icon??i.icon,argv:o.argv??[],state:"running",priority:0,window:o.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(n){if(!this.processes.delete(n))throw new Ce("ESRCH",`no process ${n}`);this.commit()}sysExit(n,o){n&&this.sysKill(n)}sysPs(){return this.snapshot.map(n=>({pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,state:n.state,priority:n.priority}))}sysFocus(n){if(!this.processes.get(n))throw new Ce("ESRCH",`no process ${n}`);let i=0;for(const a of this.processes.values())a.priority=a.pid===n?0:++i;this.commit()}sysMove(n,o){const i=this.processes.get(n);if(!i)throw new Ce("ESRCH",`no process ${n}`);i.window=o,this.commit()}fs(){if(!this.vfs)throw new Ce("ENOSYS","no filesystem mounted");return this.vfs}fdTable(n){if(n===null)return this.kernelFds;const o=this.processes.get(n);if(!o)throw new Ce("ESRCH",`no process ${n}`);return o.fds}sysOpen(n,o,i){const a=this.fs(),u=Or(o),d=a.exists(u),p=i==="w"||i==="a"||i==="rw";if(d)i==="w"&&a.write(u,new Uint8Array);else{if(!p)throw new Ce("ENOENT",u);a.write(u,new Uint8Array)}const h=i==="a"?a.stat(u).size:0,m=this.nextFd++;return this.fdTable(n).set(m,{path:u,flags:i,offset:h}),m}openFile(n,o){const i=this.fdTable(n).get(o);if(!i)throw new Ce("EBADF",`bad fd ${o}`);return i}sysRead(n,o,i){const a=this.openFile(n,o);if(a.flags!=="r"&&a.flags!=="rw")throw new Ce("EBADF","not opened for reading");const d=this.fs().read(a.path).slice(a.offset,a.offset+i);return a.offset+=d.length,d}sysWrite(n,o,i){const a=this.openFile(n,o);if(a.flags==="r")throw new Ce("EBADF","not opened for writing");const u=this.fs().read(a.path),d=a.offset+i.length,p=new Uint8Array(Math.max(u.length,d));return p.set(u),p.set(i,a.offset),this.fs().write(a.path,p),a.offset=d,i.length}sysClose(n,o){if(!this.fdTable(n).delete(o))throw new Ce("EBADF",`bad fd ${o}`)}}class b2{constructor(){Ne(this,"programs",new Map)}register(n){this.programs.set(n.exec,n)}unregister(n){return this.programs.delete(n)}get(n){return this.programs.get(n)}component(n){var o;return(o=this.programs.get(n))==null?void 0:o.component}has(n){return this.programs.has(n)}list(){return[...this.programs.values()]}}const k2="modulepreload",S2=function(e){return"/"+e},Pg={},Ln=function(n,o,i){let a=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=Promise.allSettled(o.map(h=>{if(h=S2(h),h in Pg)return;Pg[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":k2,m||(w.as="script"),w.crossOrigin="",w.href=h,p&&w.setAttribute("nonce",p),document.head.appendChild(w),m)return new Promise((k,T)=>{w.addEventListener("load",k),w.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function u(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return a.then(d=>{for(const p of d||[])p.status==="rejected"&&u(p.reason);return n().catch(u)})};function Oe(e){return{exec:e.exec,name:e.name,icon:e.icon,component:e.component,permissions:e.permissions??[]}}const Tt=L.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: ${e=>e.$minW??360}px;
    min-height: ${e=>e.$minH??240}px;
    background: #c0c0c0;
`,vn=L.div`
    flex: 1;
    min-height: 0;
    display: flex;
    overflow: hidden;
`,j2=L.div`
    display: flex;
    align-items: stretch;
    height: 20px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    font-size: 12px;
    flex-shrink: 0;
`,C2=L.button`
    border: none;
    background: ${e=>e.$open?"#000080":"transparent"};
    color: ${e=>e.$open?"#fff":"#000"};
    padding: 0 8px;
    font-size: 12px;
    cursor: default;
    font-family: inherit;
    &:hover {
        background: #000080;
        color: #fff;
    }
`,E2=L.div`
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 150px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 9999;
    padding: 2px;
`,$2=L.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 3px 18px 3px 6px;
    font-size: 12px;
    cursor: ${e=>e.$disabled?"default":"pointer"};
    color: ${e=>e.$disabled?"#808080":"#000"};
    white-space: nowrap;
    &:hover {
        background: ${e=>e.$disabled?"transparent":"#000080"};
        color: ${e=>e.$disabled?"#808080":"#fff"};
    }
`,Re=({icon:e,children:n,...o})=>l.jsxs($2,{...o,children:[l.jsx("span",{style:{width:16,flexShrink:0,display:"inline-flex",justifyContent:"center"},children:e&&l.jsx("img",{src:e,alt:"",style:{width:16,height:16}})}),l.jsx("span",{style:{flex:1,display:"flex",justifyContent:"space-between",gap:18},children:n})]}),Ds=L.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`;function T2({label:e,accel:n}){const o=n??e[0],i=e.toLowerCase().indexOf(o.toLowerCase());return i<0?l.jsx(l.Fragment,{children:e}):l.jsxs(l.Fragment,{children:[e.slice(0,i),l.jsx("u",{children:e[i]}),e.slice(i+1)]})}const xw=g.createContext({openId:null,setOpenId:()=>{}}),bn=({children:e})=>{const[n,o]=g.useState(null),i=g.useRef(null);return g.useEffect(()=>{if(n===null)return;const a=d=>{var p;(p=i.current)!=null&&p.contains(d.target)||o(null)},u=d=>{d.key==="Escape"&&o(null)};return document.addEventListener("mousedown",a),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",u)}},[n]),l.jsx(xw.Provider,{value:{openId:n,setOpenId:o},children:l.jsx(j2,{ref:i,children:e})})},Be=({label:e,accel:n,children:o,disabled:i,onOpen:a})=>{const u=g.useId(),{openId:d,setOpenId:p}=g.useContext(xw),h=d===u,m=()=>{i||(a==null||a(),p(u))},y=()=>i?void 0:h?p(null):m(),w=()=>{!i&&d!==null&&d!==u&&m()};return l.jsxs("div",{style:{position:"relative"},onMouseEnter:w,children:[l.jsx(C2,{$open:h,disabled:i,onClick:y,children:l.jsx(T2,{label:e,accel:n})}),h&&l.jsx(E2,{onClick:()=>p(null),children:o})]})},hi=L.div`
    display: flex;
    align-items: center;
    gap: 1px;
    padding: 2px 2px 2px 6px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    flex-shrink: 0;
    flex-wrap: wrap;
    position: relative;
    /* the coolbar gripper */
    &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 4px;
        bottom: 4px;
        width: 3px;
        border-left: 1px solid #ffffff;
        border-right: 1px solid #808080;
    }
`,lt=L.button`
    min-width: 23px;
    height: 22px;
    padding: 0 5px;
    font-size: 12px;
    font-family: inherit;
    color: #000;
    cursor: default;
    background: #c0c0c0;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    border: 1px solid;
    border-color: ${e=>e.$active?"#808080 #ffffff #ffffff #808080":"transparent"};
    &:hover {
        border-color: ${e=>e.$active?"#808080 #ffffff #ffffff #808080":"#ffffff #808080 #808080 #ffffff"};
    }
    &:active {
        border-color: #808080 #ffffff #ffffff #808080;
    }
    &:disabled {
        color: #808080;
        border-color: transparent;
    }
`,In=L.div`
    width: 2px;
    height: 18px;
    margin: 0 3px;
    border-left: 1px solid #808080;
    border-right: 1px solid #ffffff;
`,A2=L.div`
    display: flex;
    align-items: stretch;
    gap: 2px;
    padding: 2px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    flex-shrink: 0;
    font-size: 11px;
`,_e=L.div`
    flex: ${e=>e.$flex??0} 1 auto;
    min-width: 0;
    padding: 1px 6px;
    border: 1px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Ot=({children:e})=>l.jsxs(A2,{children:[e,l.jsx("div",{style:{width:14,alignSelf:"stretch",position:"relative"},children:l.jsx("svg",{viewBox:"0 0 14 14",width:"14",height:"100%",style:{position:"absolute",bottom:0,right:0},children:[0,1,2].map(n=>[0,1,2].filter(o=>o>=n).map(o=>l.jsxs("g",{children:[l.jsx("rect",{x:4+o*3,y:4+n*3,width:"2",height:"2",fill:"#ffffff"}),l.jsx("rect",{x:4+o*3,y:4+n*3,width:"1",height:"1",fill:"#808080"})]},`${n}-${o}`)))})})]});function R2(e,n){const o=(i,a)=>e.syscall(n,i,a);return{spawn:(i,a)=>o("spawn",{exec:i,...a}),exit:(i=0)=>o("exit",{code:i}),kill:i=>o("kill",{pid:i}),getpid:()=>o("getpid",{}),argv:()=>o("getargv",{}),ps:()=>o("ps",{}),focus:i=>o("win_focus",{pid:i}),move:(i,a)=>o("win_move",{pid:a??n,location:i}),open:(i,a="r")=>o("open",{path:i,flags:a}),read:(i,a)=>o("read",{fd:i,len:a}),write:(i,a)=>o("write",{fd:i,data:a}),close:i=>o("close",{fd:i}),readdir:i=>o("readdir",{path:i}),stat:i=>o("stat",{path:i}),mkdir:i=>o("mkdir",{path:i}),unlink:i=>o("unlink",{path:i}),rename:(i,a)=>o("rename",{from:i,to:a}),async readFile(i){const{size:a}=await o("stat",{path:i}),u=await o("open",{path:i,flags:"r"});try{return await o("read",{fd:u,len:a})}finally{await o("close",{fd:u})}},async writeFile(i,a){const u=await o("open",{path:i,flags:"w"});try{await o("write",{fd:u,data:a})}finally{await o("close",{fd:u})}},async readTextFile(i){return new TextDecoder().decode(await this.readFile(i))},async writeTextFile(i,a){await this.writeFile(i,new TextEncoder().encode(a))}}}const yw=g.createContext(null);function D2({pid:e,children:n}){return l.jsx(yw.Provider,{value:e,children:n})}function I2(){return g.useContext(yw)}function cn(){const e=Vr(),n=I2();return g.useMemo(()=>R2(e,n),[e,n])}const ww="vortex.recycle";function Dp(){try{return JSON.parse(localStorage.getItem(ww)||"{}")}catch{return{}}}function vw(e){localStorage.setItem(ww,JSON.stringify(e))}function bw(e,n){const o=Dp();o[e]=n,vw(o)}function P2(e){return Dp()[e]}function Ng(e){const n=Dp();delete n[e],vw(n)}const Ip="vortex.session";function oc(){try{const e=localStorage.getItem(Ip);return e?JSON.parse(e):null}catch{return null}}function N2(e){localStorage.setItem(Ip,JSON.stringify(e))}function kw(){localStorage.removeItem(Ip)}function ic(){var e;return((e=oc())==null?void 0:e.token)??null}function Wr(){var e;return`/home/${((e=oc())==null?void 0:e.username)||"user"}`}let pa=null;function Mg(e){pa=e}function Sw(){kw(),pa==null||pa()}const Et="/explorer.png",Hr="/notes.png",is="/Recycle Bin";async function jw(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await jw(e,Ue(n,i));await e.unlink(n)}const M2=()=>{const e=cn(),[n,o]=g.useState([]),[i,a]=g.useState(null),u=g.useCallback(async()=>{await e.mkdir(is).catch(()=>{});const h=await e.readdir(is).catch(()=>[]),m=await Promise.all(h.map(async y=>{try{return{name:y,type:(await e.stat(Ue(is,y))).type}}catch{return{name:y,type:"file"}}}));o(m),a(null)},[e]);g.useEffect(()=>{u()},[u]);const d=async()=>{if(!i)return;let h=P2(i)??Ue(Wr(),i);await e.stat(sn(h)).then(()=>!0).catch(()=>!1)||(h=Ue(Wr(),i)),await e.rename(Ue(is,i),h).catch(()=>{}),Ng(i),await u()},p=async()=>{for(const h of n)await jw(e,Ue(is,h.name)).catch(()=>{}),Ng(h.name);await u()};return l.jsxs(Tt,{$minW:420,$minH:280,children:[l.jsxs(bn,{children:[l.jsxs(Be,{label:"File",children:[l.jsx(Re,{$disabled:!i,onMouseDown:h=>{h.preventDefault(),d()},children:"Restore"}),l.jsx(Ds,{}),l.jsx(Re,{$disabled:n.length===0,onMouseDown:h=>{h.preventDefault(),p()},children:"Empty Recycle Bin"})]}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Recycle Bin — VortexOS"})})]}),l.jsxs(hi,{children:[l.jsx(lt,{onClick:d,disabled:!i,children:"↩ Restore"}),l.jsx(In,{}),l.jsx(lt,{onClick:p,disabled:n.length===0,children:"🗑 Empty Recycle Bin"})]}),l.jsx(vn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onClick:()=>a(null),children:n.length===0?l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#555"},children:"The Recycle Bin is empty."}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:n.map(h=>l.jsxs("div",{onClick:m=>{m.stopPropagation(),a(h.name)},style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:h.type==="dir"?Et:Hr,alt:h.type,style:{height:48,filter:i===h.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:i===h.name?"white":"black",backgroundColor:i===h.name?"#000080":"transparent"},children:h.name})]},h.name))})})}),l.jsx(Ot,{children:l.jsxs(_e,{$flex:1,children:[n.length," object(s)"]})})]})};async function L2(){var e;try{if((e=navigator.storage)!=null&&e.estimate){const{usage:n=0,quota:o=0}=await navigator.storage.estimate();return{usage:n,quota:o,supported:!0}}}catch{}return{usage:0,quota:0,supported:!1}}function Nr(e){if(e<=0)return"0 B";const n=["B","KB","MB","GB","TB"],o=Math.min(n.length-1,Math.floor(Math.log(e)/Math.log(1024)));return`${(e/Math.pow(1024,o)).toFixed(o===0?0:1)} ${n[o]}`}function Cw(){const[e,n]=g.useState(null);return g.useEffect(()=>{let o=!0;return L2().then(i=>{o&&n(i)}),()=>{o=!1}},[]),e}const xs="/my-computer.png",O2=()=>{const e=cn(),n=Cw(),o=[{name:"VortexOS (C:)",path:"/",icon:xs},{name:"Home",path:Wr(),icon:Et},{name:"Cloud (/mnt/cloud)",path:"/mnt/cloud",icon:Et},{name:"Public (/mnt/public)",path:"/mnt/public",icon:Et},{name:"Programs (/bin)",path:"/bin",icon:Et},{name:"Devices (/dev)",path:"/dev",icon:Et},{name:"Processes (/proc)",path:"/proc",icon:Et}],i=n&&n.quota>0?Math.min(100,n.usage/n.quota*100):0;return l.jsxs(Tt,{$minW:420,$minH:280,children:[l.jsxs(bn,{children:[l.jsx(Be,{label:"File",children:l.jsx(Re,{$disabled:!0,children:"Open / Explore a drive"})}),l.jsx(Be,{label:"View",children:l.jsx(Re,{$disabled:!0,children:"Large Icons"})}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"My Computer — VortexOS"})})]}),l.jsx(vn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:o.map(a=>l.jsxs("div",{onDoubleClick:()=>e.spawn("explorer",{argv:[a.path]}),title:"Double-click to open",style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:110,padding:10},children:[l.jsx("img",{src:a.icon,alt:"",style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:a.name})]},a.path))})})}),l.jsxs(pt,{variant:"well",className:"footer",style:{display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[l.jsxs("span",{style:{fontSize:12},children:[o.length," object(s)"]}),(n==null?void 0:n.supported)&&l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,marginLeft:"auto"},children:[l.jsx("span",{children:"Disk (C:):"}),l.jsx("span",{title:`${Nr(n.usage)} of ${Nr(n.quota)} used`,style:{width:90,height:12,border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff",position:"relative"},children:l.jsx("span",{style:{position:"absolute",inset:0,width:`${i}%`,background:"#000080"}})}),l.jsxs("span",{children:[Nr(n.usage)," / ",Nr(n.quota)]})]})]})]})},Ew=60;let ha=4,Da=0,us=0,ds=0,$f=!1;const Tf=new Array(Ew).fill(0),Af=new Array(Ew).fill(0);let $w=Tw();function Tw(){return{cpu:ha,mem:Da,memBytes:us,memTotal:ds,cpuHistory:[...Tf],memHistory:[...Af],real:$f}}const fs=new Set;let Rf=!1,Pp=0,ma=0,Df=0,Ia=0,ga=null;function Aw(e){if(ma){const n=e-ma;Df+=Math.max(0,n-16.7),Ia++}ma=e,Pp=requestAnimationFrame(Aw)}function z2(){const e=performance.memory;e&&e.jsHeapSizeLimit?($f=!0,us=e.usedJSHeapSize,ds=e.jsHeapSizeLimit,Da=Math.min(100,Math.round(e.usedJSHeapSize/e.jsHeapSizeLimit*100))):($f=!1,ds=64*1024*1024,us=Math.min(ds,us+Ia%3*4096+1024),Da=Math.min(95,Math.round(us/ds*100)))}function _2(){const e=Ia>0?Math.min(1,Df/1e3):0,n=3+Math.round(e*97);ha=Math.round(ha*.5+n*.5),Df=0,Ia=0,z2(),Tf.push(ha),Tf.shift(),Af.push(Da),Af.shift(),$w=Tw(),fs.forEach(o=>o())}function F2(){Rf||(Rf=!0,ma=0,Pp=requestAnimationFrame(Aw),ga=setInterval(_2,1e3))}function B2(){Rf=!1,cancelAnimationFrame(Pp),ga&&clearInterval(ga),ga=null}function W2(){return $w}function Rw(){return g.useSyncExternalStore(e=>(fs.add(e),fs.size===1&&F2(),()=>{fs.delete(e),fs.size===0&&B2()}),W2)}function H2(e,n){let o=0;for(let d=0;d<e.length;d++)o=o*31+e.charCodeAt(d)>>>0;const i=o%7,a=(o+n)%5,u=1.5+o%64+(o>>3)%10/10;return{cpu:i+a,mem:Math.round(u*10)/10}}const U2=()=>{const e=vc(),n=cn(),[o,i]=g.useState(0);g.useEffect(()=>{const u=setInterval(()=>i(d=>d+1),1e3);return()=>clearInterval(u)},[]);const a=["PID","Name","CPU","Mem","Pri",""];return l.jsxs(Jy,{style:{width:"100%"},children:[l.jsx(Yy,{children:l.jsx(Sf,{children:a.map((u,d)=>l.jsx(Xy,{children:u},d))})}),l.jsx(Gy,{children:e.map(u=>{const d=H2(u.pid,o);return l.jsxs(Sf,{children:[l.jsx(lo,{style:{textAlign:"center"},children:u.pid.slice(0,8)}),l.jsx(lo,{children:u.name}),l.jsxs(lo,{style:{textAlign:"center"},children:[String(d.cpu).padStart(2,"0"),"%"]}),l.jsxs(lo,{style:{textAlign:"center"},children:[d.mem," MB"]}),l.jsx(lo,{style:{textAlign:"center"},children:u.priority===0?"High":"Normal"}),l.jsx(lo,{style:{textAlign:"center"},children:l.jsx(We,{size:"sm",onClick:()=>n.kill(u.pid),children:"End"})})]},u.pid)})})]})},Lg=({history:e,value:n,label:o,unit:i="%"})=>{const a=g.useRef(null);return g.useEffect(()=>{const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width,h=u.height;d.fillStyle="#000",d.fillRect(0,0,p,h),d.strokeStyle="#003b00",d.lineWidth=1;for(let y=0;y<=p;y+=16)d.beginPath(),d.moveTo(y,0),d.lineTo(y,h),d.stroke();for(let y=0;y<=h;y+=12)d.beginPath(),d.moveTo(0,y),d.lineTo(p,y),d.stroke();d.strokeStyle="#00ff00",d.lineWidth=1.5,d.beginPath();const m=e.length;e.forEach((y,w)=>{const k=w/(m-1)*p,T=h-Math.min(100,y)/100*h;w===0?d.moveTo(k,T):d.lineTo(k,T)}),d.stroke()},[e]),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:12,marginBottom:4},children:o}),l.jsx(pt,{variant:"well",style:{padding:2},children:l.jsx("canvas",{ref:a,width:220,height:96,style:{display:"block",width:"100%",height:96}})}),l.jsxs("div",{style:{fontSize:18,fontFamily:"monospace",textAlign:"center",marginTop:4},children:[n,i]})]})},V2=()=>{const e=Rw();return l.jsxs("div",{style:{padding:12},children:[l.jsxs("div",{style:{display:"flex",gap:16},children:[l.jsx(Lg,{history:e.cpuHistory,value:e.cpu,label:"CPU Usage (main thread)"}),l.jsx(Lg,{history:e.memHistory,value:e.mem,label:"Memory Usage"})]}),l.jsxs(pt,{variant:"well",style:{marginTop:12,padding:10,fontSize:12,lineHeight:1.7},children:[l.jsxs("div",{children:[l.jsx("b",{children:"CPU:"})," ",e.cpu,"% (measured from frame timing — a browser tab can't read the host CPU)"]}),l.jsxs("div",{children:[l.jsx("b",{children:"Memory:"})," ",Nr(e.memBytes)," of ",Nr(e.memTotal)," ",e.real?"(real JS heap)":"(estimated)"]})]})]})},Dw=g.createContext({});function K2({children:e}){const[n,o]=g.useState("url(/win-cursor/arrow.cur), auto"),[i,a]=g.useState([]),u=ce=>a(G=>G.includes(ce)?G:[...G,ce]),d=ce=>a(G=>G.filter(N=>N!==ce)),[p,h]=g.useState(()=>localStorage.getItem("vortex.crt")==="1"),m=()=>h(ce=>{const G=!ce;return localStorage.setItem("vortex.crt",G?"1":"0"),G}),[y,w]=g.useState(()=>localStorage.getItem("vortex.sss")!=="0"),k=()=>w(ce=>{const G=!ce;return localStorage.setItem("vortex.sss",G?"1":"0"),G}),[T,E]=g.useState(null),[C,$]=g.useState(()=>localStorage.getItem("vortex.theme")||"original"),b=ce=>{localStorage.setItem("vortex.theme",ce),$(ce)},[j,S]=g.useState(!1),R=g.useRef(null),M=(ce=550)=>{S(!0),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>S(!1),ce)},V=()=>{var ce;return`vortex.wallpaper.${((ce=oc())==null?void 0:ce.username)||"user"}`},Z=()=>{const ce=localStorage.getItem(V())??localStorage.getItem("wallpaper");if(ce===null)return{image:"",type:1};try{return JSON.parse(ce)}catch{return{image:"",type:1}}},[ne,ie]=g.useState(Z),me=ce=>{localStorage.setItem(V(),JSON.stringify(ce)),ie(ce)},de=()=>ie(Z()),xe=ce=>{o(`url(/win-cursor/${ce}), auto`)};return l.jsx(Dw.Provider,{value:{cursor:n,changeCursor:xe,wallpaper:ne,changeWallpaper:me,reloadWallpaper:de,minimized:i,minimize:u,restore:d,crt:p,toggleCrt:m,clipboard:T,setClipboard:E,theme:C,setTheme:b,busy:j,flashBusy:M,sssStyle:y,toggleSssStyle:k},children:e})}function Yt(){return g.useContext(Dw)}const Q2=()=>{const{processes:e,changePriority:n,closeProcess:o}=zn(),{minimized:i,restore:a}=Yt(),[u,d]=g.useState(null),p=h=>{h.uuid&&(a(h.uuid),n(h,0))};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[l.jsx("div",{style:{fontSize:12,marginBottom:6},children:"Task"}),l.jsxs(pt,{variant:"well",style:{flex:1,minHeight:80,overflow:"auto",background:"#fff"},children:[e.length===0&&l.jsx("div",{style:{padding:10,color:"#666"},children:"No tasks running."}),e.map(h=>{const m=!!h.uuid&&i.includes(h.uuid);return l.jsxs("div",{onClick:()=>d(h.uuid??null),onDoubleClick:()=>p(h),style:{display:"flex",alignItems:"center",gap:8,padding:"3px 6px",cursor:"pointer",background:u===h.uuid?"#000080":"transparent",color:u===h.uuid?"#fff":"#000"},children:[l.jsx("img",{src:h.icon,alt:"",style:{width:16,height:16}}),l.jsx("span",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:h.name}),l.jsx("span",{style:{fontSize:11,opacity:.8},children:m?"Background":"Running"})]},h.uuid)})]}),l.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end",marginTop:8},children:[l.jsx(We,{disabled:!u,onClick:()=>{const h=e.find(m=>m.uuid===u);h!=null&&h.uuid&&o(h.uuid),d(null)},children:"End Task"}),l.jsx(We,{disabled:!u,onClick:()=>{const h=e.find(m=>m.uuid===u);h&&p(h)},children:"Switch To"})]})]})},q2=()=>{const[e,n]=g.useState(0),o=Rw(),{processes:i}=zn();return l.jsxs(l.Fragment,{children:[l.jsxs(Ur,{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[l.jsxs(tc,{value:e,onChange:a=>n(a),children:[l.jsx(Lr,{value:0,children:"Applications"}),l.jsx(Lr,{value:1,children:"Processes"}),l.jsx(Lr,{value:2,children:"Performance"})]}),l.jsxs(ec,{style:{flex:1,minHeight:0,overflow:"auto"},children:[e===0&&l.jsx(Q2,{}),e===1&&l.jsx(U2,{}),e===2&&l.jsx(V2,{})]})]}),l.jsxs(pt,{variant:"well",className:"footer",style:{display:"flex",gap:16,padding:"2px 8px",fontSize:11},children:[l.jsxs("span",{children:["Tasks: ",i.length]}),l.jsxs("span",{children:["CPU Usage: ",o.cpu,"%"]}),l.jsxs("span",{children:["Mem: ",o.mem,"%"]})]})]})},G2=L.div`
    position: fixed;
    z-index: 100000;
    min-width: 168px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    padding: 2px;
    font-size: 13px;
    user-select: none;
`,Y2=L.div`
    display: flex;
    align-items: center;
    height: 22px;
    padding: 0 6px 0 0;
    color: ${({$disabled:e})=>e?"#808080":"#000"};
    cursor: ${({$disabled:e})=>e?"default":"pointer"};
    white-space: nowrap;
    &:hover {
        background: ${({$disabled:e})=>e?"transparent":"#000080"};
        color: ${({$disabled:e})=>e?"#808080":"#fff"};
    }
    &:hover .ctx-shortcut {
        color: #cfd6ff;
    }
`,X2=L.div`
    width: 22px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`,J2=L.span`
    margin-left: auto;
    padding-left: 22px;
    font-size: 11px;
    color: #555;
`,Z2=L.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`,e8=L.span`
    margin-left: auto;
    padding-left: 14px;
    font-size: 10px;
`,Og=176,Iw=({items:e,x:n,y:o,onClose:i})=>{const[a,u]=g.useState(null);return l.jsx(G2,{style:{left:n,top:o},onMouseDown:d=>d.stopPropagation(),onContextMenu:d=>d.preventDefault(),children:e.map((d,p)=>{var m;if(d.separator)return l.jsx(Z2,{},p);const h=!!((m=d.submenu)!=null&&m.length);return l.jsxs(Y2,{$disabled:d.disabled,onMouseEnter:y=>{if(h&&!d.disabled){const w=y.currentTarget.getBoundingClientRect(),k=w.right+Og>window.innerWidth;u({index:p,x:k?w.left-Og+3:w.right-3,y:w.top-3})}else u(null)},onClick:()=>{var y;d.disabled||h||((y=d.onClick)==null||y.call(d),i())},children:[l.jsx(X2,{children:d.checked?"✓":d.bullet?"●":d.glyph?d.glyph:d.icon?l.jsx("img",{src:d.icon,alt:"",style:{width:16,height:16,objectFit:"contain"}}):""}),l.jsx("span",{children:d.label}),d.shortcut&&!h&&l.jsx(J2,{className:"ctx-shortcut",children:d.shortcut}),h&&l.jsx(e8,{children:"▶"}),h&&(a==null?void 0:a.index)===p&&l.jsx(Iw,{items:d.submenu,x:a.x,y:a.y,onClose:i})]},p)})})},xo=({items:e,x:n,y:o,onClose:i})=>{g.useEffect(()=>{const h=m=>{m.key==="Escape"&&i()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]);const a=window.innerWidth,u=window.innerHeight,d=Math.min(n,a-180),p=Math.min(o,u-e.length*22-12);return qt.createPortal(l.jsx(Iw,{items:e,x:d,y:Math.max(4,p),onClose:i}),document.body)},Pr=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement;function zg(e,n,o){const i=e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(i,"value").set.call(e,n),e.dispatchEvent(new Event("input",{bubbles:!0})),e.setSelectionRange(o,o)}function _g(e,n){if(e.focus(),Pr(e))n&&"start"in n&&e.setSelectionRange(n.start,n.end);else if(n instanceof Range){const o=window.getSelection();o==null||o.removeAllRanges(),o==null||o.addRange(n)}}function t8(e,n){return Pr(e)&&n&&"start"in n?e.value.slice(n.start,n.end):n instanceof Range?n.toString():""}function Pw(e={}){var d;const[n,o]=g.useState(null),i=g.useRef(null),a=p=>{p.preventDefault();const h=p.currentTarget;if(Pr(h))i.current={start:h.selectionStart??0,end:h.selectionEnd??0};else{const m=window.getSelection();i.current=m&&m.rangeCount?m.getRangeAt(0).cloneRange():null}o({x:p.clientX,y:p.clientY,el:h})};g.useEffect(()=>{if(!n)return;const p=()=>o(null);return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[n]);let u=null;if(n){const p=n.el,h=i.current,m=Pr(p)?!!h&&"start"in h&&h.start!==h.end:h instanceof Range&&!h.collapsed,y=Pr(p)?!p.readOnly&&!p.disabled:p.isContentEditable,w=()=>{var $;const C=t8(p,h);C&&(($=navigator.clipboard)==null||$.writeText(C).catch(()=>{}))},k=()=>{Pr(p)&&h&&"start"in h?zg(p,p.value.slice(0,h.start)+p.value.slice(h.end),h.start):(_g(p,h),document.execCommand("delete"))},E=[{label:"Undo",shortcut:"Ctrl+Z",disabled:!y,onClick:()=>{p.focus(),document.execCommand("undo")}},{separator:!0},{label:"Cut",shortcut:"Ctrl+X",disabled:!m||!y,onClick:()=>{w(),k()}},{label:"Copy",shortcut:"Ctrl+C",disabled:!m,onClick:w},{label:"Paste",shortcut:"Ctrl+V",disabled:!y,onClick:()=>{var C;(C=navigator.clipboard)==null||C.readText().then($=>{if($)if(Pr(p)&&h&&"start"in h){const b=p.value.slice(0,h.start)+$+p.value.slice(h.end);zg(p,b,h.start+$.length)}else _g(p,h),document.execCommand("insertText",!1,$)}).catch(()=>{})}},{label:"Delete",shortcut:"Del",disabled:!m||!y,onClick:k},{separator:!0},{label:"Select All",shortcut:"Ctrl+A",onClick:()=>{p.focus(),Pr(p)?p.select():document.execCommand("selectAll")}},...(d=e.extra)!=null&&d.length?[{separator:!0},...e.extra]:[]];u=l.jsx(xo,{x:n.x,y:n.y,items:E,onClose:()=>o(null)})}return{openEditMenu:a,editMenu:u}}const n8=()=>{const e=cn(),n=Wr(),o=`${n}/welcome.txt`,[i,a]=g.useState(o),[u,d]=g.useState(""),[p,h]=g.useState(!1),[m,y]=g.useState([]),[w,k]=g.useState("Ready"),{openEditMenu:T,editMenu:E}=Pw(),C=g.useCallback(async S=>{try{const R=await e.readTextFile(S);a(S),d(R),h(!1),k(`Opened ${S}`)}catch(R){k(`Could not open ${S}: ${R.code??R.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[S]=await e.argv();await C(S||o)})()},[C,e]);const $=async()=>{try{y((await e.readdir(n)).filter(S=>S.endsWith(".txt")))}catch{y([])}},b=async()=>{try{await e.writeTextFile(i,u),h(!1),k(`Saved ${i}`)}catch(S){k(`Save failed: ${S.code??S.message}`)}},j=()=>{const S=window.prompt("New file name:","untitled.txt");S&&(a(`${n}/${S}`),d(""),h(!0),k(`New file ${S} — not saved yet`))};return l.jsxs(Tt,{$minW:520,$minH:360,children:[l.jsxs(bn,{children:[l.jsxs(Be,{label:"File",onOpen:$,children:[l.jsx(Re,{onMouseDown:S=>{S.preventDefault(),j()},children:"New"}),l.jsxs(Re,{onMouseDown:S=>{S.preventDefault(),b()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(Ds,{}),m.length===0?l.jsx(Re,{$disabled:!0,children:"(no .txt files)"}):m.map(S=>l.jsx(Re,{onMouseDown:R=>{R.preventDefault(),C(`${n}/${S}`)},children:S},S))]}),l.jsx(Be,{label:"Edit",children:l.jsx(Re,{onMouseDown:S=>{S.preventDefault(),d(""),h(!0)},children:"Select All / Clear"})}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Notes — VortexOS"})})]}),l.jsx(vn,{style:{padding:3},children:l.jsx("textarea",{value:u,onChange:S=>{d(S.target.value),h(!0)},onContextMenu:T,spellCheck:!1,rows:20,style:{flex:1,width:"100%",height:"100%",resize:"none",boxSizing:"border-box",padding:6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",background:"#ffffff",fontFamily:"'ms_sans_serif', 'MS Sans Serif', sans-serif",fontSize:13,outline:"none"}})}),l.jsxs(Ot,{children:[l.jsxs(_e,{$flex:1,children:[i,p?" •":""]}),l.jsx(_e,{children:w})]}),E]})},Fg=/\.(html?|rtf|doc)$/i,r8=["MS Sans Serif","Times New Roman","Courier New","Arial","Georgia"],o8=[1,2,3,4,5,6,7],i8=()=>{const e=cn(),n=Wr(),o=g.useRef(null),[i,a]=g.useState(`${n}/document.html`),[u,d]=g.useState(""),[p,h]=g.useState([]),{openEditMenu:m,editMenu:y}=Pw(),w=(j,S)=>{var R;(R=o.current)==null||R.focus(),document.execCommand(j,!1,S)},k=g.useCallback(async j=>{try{const S=await e.readTextFile(j);o.current&&(o.current.innerHTML=S),a(j),d(`Opened ${j}`)}catch(S){d(`Could not open ${j}: ${S.code??S.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[j]=await e.argv();j?await k(j):o.current&&(o.current.innerHTML="<p>The quick brown fox jumps over the lazy dog.</p>")})()},[k,e]);const T=async()=>{try{h((await e.readdir(n)).filter(j=>Fg.test(j)))}catch{h([])}},E=async()=>{var j;try{await e.writeTextFile(i,((j=o.current)==null?void 0:j.innerHTML)??""),d(`Saved ${i}`)}catch(S){d(`Save failed: ${S.code??S.message}`)}},C=async()=>{var R;const j=window.prompt("Save as:",i.split("/").pop()||"document.html");if(!j)return;const S=`${n}/${Fg.test(j)?j:j+".html"}`;a(S);try{await e.writeTextFile(S,((R=o.current)==null?void 0:R.innerHTML)??""),d(`Saved ${S}`)}catch(M){d(`Save failed: ${M.code??M.message}`)}},$=()=>{o.current&&(o.current.innerHTML=""),a(`${n}/document.html`),d("New document")},b=(j,S,R)=>l.jsx(lt,{onMouseDown:M=>M.preventDefault(),onClick:()=>w(S),style:R,children:j});return l.jsxs(Tt,{$minW:560,$minH:400,children:[l.jsxs(bn,{children:[l.jsxs(Be,{label:"File",onOpen:T,children:[l.jsx(Re,{onMouseDown:j=>{j.preventDefault(),$()},children:"New"}),l.jsxs(Re,{onMouseDown:j=>{j.preventDefault(),E()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(Re,{onMouseDown:j=>{j.preventDefault(),C()},children:"Save As…"}),l.jsx(Ds,{}),p.length===0?l.jsx(Re,{$disabled:!0,children:"(no documents)"}):p.map(j=>l.jsx(Re,{onMouseDown:S=>{S.preventDefault(),k(`${n}/${j}`)},children:j},j))]}),l.jsxs(Be,{label:"Edit",children:[l.jsx(Re,{onMouseDown:j=>{j.preventDefault(),w("undo")},children:"Undo"}),l.jsx(Re,{onMouseDown:j=>{j.preventDefault(),w("selectAll")},children:"Select All"})]}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"WordPad — VortexOS"})})]}),l.jsxs(hi,{children:[l.jsx("select",{onMouseDown:j=>j.stopPropagation(),onChange:j=>w("fontName",j.target.value),children:r8.map(j=>l.jsx("option",{value:j,children:j},j))}),l.jsx("select",{onChange:j=>w("fontSize",j.target.value),defaultValue:"3",children:o8.map(j=>l.jsx("option",{value:j,children:j},j))}),l.jsx(In,{}),b("B","bold",{fontWeight:"bold"}),b("I","italic",{fontStyle:"italic"}),b("U","underline",{textDecoration:"underline"}),l.jsx("input",{type:"color",onChange:j=>w("foreColor",j.target.value),title:"Text colour",style:{width:26,height:20,padding:0}}),l.jsx(In,{}),b("≡L","justifyLeft"),b("≡C","justifyCenter"),b("≡R","justifyRight"),b("• List","insertUnorderedList")]}),l.jsx(vn,{style:{padding:3},children:l.jsx(pt,{variant:"well",style:{flex:1,minHeight:0,display:"flex",flexDirection:"column",padding:0},children:l.jsx("div",{ref:o,contentEditable:!0,suppressContentEditableWarning:!0,onContextMenu:m,style:{flex:1,minHeight:300,overflow:"auto",padding:10,background:"#fff",outline:"none",fontFamily:"'Times New Roman', serif",fontSize:16}})})}),l.jsxs(Ot,{children:[l.jsx(_e,{$flex:1,children:i}),l.jsx(_e,{children:u||"Ready"})]}),y]})},s8="/image-file.svg",l8=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i;function Nw(e,n){return n?Et:l8.test(e)?s8:Hr}let ss=null,Pa=(()=>{const e=parseFloat(localStorage.getItem("vortex.volume")??"");return Number.isFinite(e)?e:.7})(),Np=localStorage.getItem("vortex.muted")==="1";const If=new Set,Mw=()=>If.forEach(e=>e());function a8(e){return If.add(e),()=>If.delete(e)}function Pf(){return Pa}function Lw(e){Pa=Math.min(1,Math.max(0,e)),localStorage.setItem("vortex.volume",String(Pa)),Mw()}function Nf(){return Np}function Ow(e){Np=e,localStorage.setItem("vortex.muted",e?"1":"0"),Mw()}function Yn(){try{if(!ss){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;ss=new e}return ss.state==="suspended"&&ss.resume(),ss}catch{return null}}function vt(e,{freq:n,start:o,dur:i,type:a="sine",gain:u=.2}){const d=Np?0:u*Pa;if(d<=0)return;const p=e.createOscillator(),h=e.createGain();p.type=a,p.frequency.value=n;const m=e.currentTime+o;h.gain.setValueAtTime(1e-4,m),h.gain.linearRampToValueAtTime(d,m+.02),h.gain.exponentialRampToValueAtTime(1e-4,m+i),p.connect(h).connect(e.destination),p.start(m),p.stop(m+i+.05)}function c8(){const e=Yn();if(!e)return;[[261.63,"sine"],[329.63,"sine"],[392,"sine"],[523.25,"triangle"]].forEach(([o,i],a)=>vt(e,{freq:o,start:a*.18,dur:1.8,type:i,gain:.15}))}function u8(){const e=Yn();if(!e)return;[[261.63,"triangle"],[329.63,"triangle"],[392,"triangle"],[523.25,"sine"]].forEach(([o,i],a)=>vt(e,{freq:o,start:a*.13,dur:1.9,type:i,gain:.14})),[261.63,329.63,392,523.25].forEach(o=>vt(e,{freq:o,start:.55,dur:2.4,type:"sine",gain:.07})),vt(e,{freq:1046.5,start:.7,dur:1.6,type:"sine",gain:.06}),vt(e,{freq:1567.98,start:.78,dur:1.4,type:"sine",gain:.04})}function Mp(){const e=Yn();e&&(vt(e,{freq:880,start:0,dur:.16,type:"sine",gain:.22}),vt(e,{freq:1318.51,start:0,dur:.4,type:"sine",gain:.1}))}function Zo(){const e=Yn();e&&vt(e,{freq:200,start:0,dur:.05,type:"square",gain:.05})}function yo(){const e=Yn();e&&[523.25,659.25,783.99].forEach((n,o)=>vt(e,{freq:n,start:o*.04,dur:.5,gain:.11}))}function d8(){const e=Yn();e&&(vt(e,{freq:440,start:0,dur:.08,type:"triangle",gain:.09}),vt(e,{freq:660,start:.05,dur:.1,type:"triangle",gain:.09}))}function f8(){const e=Yn();e&&(vt(e,{freq:520,start:0,dur:.08,type:"triangle",gain:.08}),vt(e,{freq:320,start:.05,dur:.12,type:"triangle",gain:.08}))}function p8(){const e=Yn();e&&(vt(e,{freq:600,start:0,dur:.12,type:"sine",gain:.08}),vt(e,{freq:300,start:.04,dur:.12,type:"sine",gain:.08}))}function h8(){const e=Yn();e&&(vt(e,{freq:300,start:0,dur:.12,type:"sine",gain:.08}),vt(e,{freq:600,start:.04,dur:.12,type:"sine",gain:.08}))}function m8(){const e=Yn();e&&[523.25,392,329.63,261.63].forEach((n,o)=>vt(e,{freq:n,start:o*.18,dur:.7,type:"sine",gain:.15}))}const g8="linear-gradient(90deg, #000080 0%, #1084d0 100%)",x8="linear-gradient(90deg, #808080 0%, #b5b5b5 100%)",Is=(e=!0)=>({background:e?g8:x8,color:e?"#ffffff":"#dfdfdf",fontWeight:"bold"}),zw=g.createContext({alert:async()=>{}}),Ps=()=>g.useContext(zw),y8=({type:e})=>{const n={width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"#fff",borderRadius:"50%"};return e==="error"?l.jsx("div",{style:{...n,background:"#d40000",fontSize:20},children:"✕"}):e==="warning"?l.jsxs("div",{style:{width:36,height:34,flexShrink:0,position:"relative"},children:[l.jsx("div",{style:{width:0,height:0,borderLeft:"18px solid transparent",borderRight:"18px solid transparent",borderBottom:"32px solid #ffd000"}}),l.jsx("span",{style:{position:"absolute",left:15,top:9,fontWeight:"bold",color:"#000"},children:"!"})]}):l.jsx("div",{style:{...n,background:"#000080",fontStyle:"italic",fontFamily:"Georgia, serif",fontSize:22},children:"i"})};function w8({children:e}){const[n,o]=g.useState(null),i=g.useCallback(u=>(Mp(),new Promise(d=>{o({title:u.title??"VortexOS",message:u.message,type:u.type??"info",resolve:d})})),[]),a=()=>{n==null||n.resolve(),o(null)};return g.useEffect(()=>{if(!n)return;const u=d=>{(d.key==="Enter"||d.key==="Escape")&&a()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[n]),l.jsxs(zw.Provider,{value:{alert:i},children:[e,n&&l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.08)"},children:l.jsxs(ui,{style:{minWidth:330,maxWidth:420},children:[l.jsxs(ci,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",...Is(!0)},children:[l.jsx("span",{children:n.title}),l.jsx(We,{onClick:a,style:{width:20,height:18,minWidth:0,padding:0,fontWeight:"bold"},children:"✕"})]}),l.jsxs(Ur,{children:[l.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[l.jsx(y8,{type:n.type}),l.jsx("p",{style:{whiteSpace:"pre-line",lineHeight:1.4},children:n.message})]}),l.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:l.jsx(We,{onClick:a,style:{minWidth:84},primary:!0,children:"OK"})})]})]})})]})}const Sd="/Recycle Bin";async function _w(e,n,o){if((await e.stat(n)).type==="dir"){await e.mkdir(o);for(const a of await e.readdir(n))await _w(e,Ue(n,a),Ue(o,a))}else await e.writeFile(o,await e.readFile(n))}function Xl(e,n){if(!e.includes(n))return n;const o=n.lastIndexOf("."),i=o>0?n.slice(0,o):n,a=o>0?n.slice(o):"";for(let u=2;;u++){const d=`${i} (${u})${a}`;if(!e.includes(d))return d}}const v8=()=>{const e=cn(),{clipboard:n,setClipboard:o}=Yt(),{alert:i}=Ps(),[a,u]=g.useState("/"),[d,p]=g.useState([]),[h,m]=g.useState(null),[y,w]=g.useState(""),[k,T]=g.useState(null),[E,C]=g.useState(null),[$,b]=g.useState(""),j=g.useRef(null),S=g.useCallback(async I=>{try{const q=await e.readdir(I),W=await Promise.all(q.map(async F=>{try{const P=await e.stat(Ue(I,F));return{name:F,type:P.type,size:P.size}}catch{return{name:F,type:"file",size:0}}}));W.sort((F,P)=>F.type===P.type?F.name.localeCompare(P.name):F.type==="dir"?-1:1),u(I),p(W),m(null),w(`${W.length} object(s)`)}catch(q){w(`Cannot open ${I}: ${q.code??q.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[I]=await e.argv();await S(I||"/")})()},[S,e]),g.useEffect(()=>{if(!k)return;const I=()=>T(null);return document.addEventListener("click",I),()=>document.removeEventListener("click",I)},[k]);const R=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,M=/\.(mp3|wav|ogg|m4a|flac)$/i,V=I=>{const q=Ue(a,I.name);I.type==="dir"?S(q):R.test(I.name)?e.spawn("imageviewer",{argv:[q]}):M.test(I.name)?e.spawn("mediaplayer",{argv:[q]}):e.spawn("notes",{argv:[q]})},Z=async()=>{const I=Xl(d.map(q=>q.name),"New Folder");try{await e.mkdir(Ue(a,I)),await S(a),me(I)}catch(q){i({title:"Error",message:`Could not create folder: ${q.code??q.message}`,type:"error"})}},ne=async()=>{const I=Xl(d.map(q=>q.name),"New Text Document.txt");try{await e.writeTextFile(Ue(a,I),""),await S(a),me(I)}catch(q){i({title:"Error",message:`Could not create file: ${q.code??q.message}`,type:"error"})}},ie=async I=>{const q=Ue(a,I);try{await e.mkdir(Sd).catch(()=>{});const W=await e.readdir(Sd).catch(()=>[]),F=Xl(W,I);await e.rename(q,Ue(Sd,F)),bw(F,q),await S(a)}catch(W){i({title:"Delete",message:`Could not delete "${I}": ${W.code??W.message}`,type:"error"})}},me=I=>{m(I),C(I),b(I)},de=async()=>{if(!E)return;const I=$.trim(),q=E;if(C(null),!(!I||I===q))try{await e.rename(Ue(a,q),Ue(a,I)),await S(a)}catch(W){i({title:"Rename",message:`Could not rename: ${W.code??W.message}`,type:"error"})}},xe=async()=>{if(!n)return;const I=n.path,q=Ue(a,Xl(d.map(W=>W.name),ln(I)));try{n.op==="cut"?(await e.rename(I,q),o(null)):await _w(e,I,q),await S(a)}catch(W){i({title:"Paste",message:`Could not paste: ${W.code??W.message}`,type:"error"})}},ce=I=>{i({title:`${I.name} Properties`,message:`Name: ${I.name}
Type: ${I.type==="dir"?"File Folder":"File"}
Location: ${a}
Size: ${I.type==="dir"?"—":`${I.size} byte(s)`}`,type:"info"})},G=(I,q)=>{I.preventDefault(),I.stopPropagation(),q&&m(q.name),T({x:I.clientX,y:I.clientY,entry:q})},N=I=>{E||(I.key==="Delete"&&h?ie(h):I.key==="F2"&&h&&me(h))};return l.jsxs(Tt,{ref:j,tabIndex:0,onKeyDown:N,$minW:560,$minH:360,style:{outline:"none"},children:[l.jsxs(bn,{children:[l.jsxs(Be,{label:"File",children:[l.jsx(Re,{icon:Et,onMouseDown:I=>{I.preventDefault(),Z()},children:"New Folder"}),l.jsx(Re,{icon:Hr,onMouseDown:I=>{I.preventDefault(),ne()},children:"New Text Document"})]}),l.jsx(Be,{label:"Edit",children:l.jsxs(Re,{$disabled:!n,onMouseDown:I=>{I.preventDefault(),xe()},children:["Paste",l.jsx("span",{children:"Ctrl+V"})]})}),l.jsxs(Be,{label:"View",children:[l.jsxs(Re,{onMouseDown:I=>{I.preventDefault(),S(a)},children:["Refresh",l.jsx("span",{children:"F5"})]}),l.jsx(Ds,{}),l.jsx(Re,{$disabled:a==="/",onMouseDown:I=>{I.preventDefault(),S(sn(a))},children:"Up One Level"})]}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Explorer — VortexOS"})})]}),l.jsxs(hi,{children:[l.jsx(lt,{onClick:()=>S(sn(a)),disabled:a==="/",children:"↑ Up"}),l.jsx(lt,{onClick:()=>S(a),children:"⟳ Refresh"}),l.jsx(In,{}),l.jsx(lt,{onClick:Z,children:"New Folder"}),l.jsx(In,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Address:"}),l.jsx("input",{defaultValue:a,onKeyDown:I=>{I.key==="Enter"&&S(I.target.value)},style:{flex:1,minWidth:120}},a)]}),l.jsx(vn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onContextMenu:I=>G(I,null),onClick:()=>m(null),children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",alignContent:"flex-start"},children:d.map(I=>l.jsxs("div",{onClick:q=>{q.stopPropagation(),m(I.name)},onDoubleClick:()=>V(I),onContextMenu:q=>G(q,I),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:Nw(I.name,I.type==="dir"),alt:I.type,style:{height:48,filter:h===I.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),E===I.name?l.jsx(ur,{value:$,onChange:q=>b(q.target.value),onBlur:de,onKeyDown:q=>{q.key==="Enter"&&de(),q.key==="Escape"&&C(null)},autoFocus:!0,style:{width:80}}):l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:h===I.name?"white":"black",backgroundColor:h===I.name?"#000080":"transparent"},children:I.name})]},I.name))})})}),l.jsxs(Ot,{children:[l.jsx(_e,{$flex:1,children:y||"Explorer"}),l.jsxs(_e,{children:[d.length," object(s)"]})]}),k&&(k.entry?l.jsx(xo,{x:k.x,y:k.y,onClose:()=>T(null),items:[{label:"Open",glyph:"▸",onClick:()=>V(k.entry)},{separator:!0},{label:"Cut",shortcut:"Ctrl+X",onClick:()=>o({op:"cut",path:Ue(a,k.entry.name)})},{label:"Copy",shortcut:"Ctrl+C",onClick:()=>o({op:"copy",path:Ue(a,k.entry.name)})},{separator:!0},{label:"Delete",glyph:"🗑",onClick:()=>ie(k.entry.name)},{label:"Rename",shortcut:"F2",onClick:()=>me(k.entry.name)},{separator:!0},{label:"Properties",onClick:()=>ce(k.entry)}]}):l.jsx(xo,{x:k.x,y:k.y,onClose:()=>T(null),items:[{label:"New",submenu:[{label:"Folder",icon:Et,onClick:Z},{label:"Text Document",icon:Hr,onClick:ne}]},{separator:!0},{label:"Paste",shortcut:"Ctrl+V",disabled:!n,onClick:xe},{label:"Refresh",glyph:"⟳",onClick:()=>S(a)}]}))]})};var jd,Bg;function b8(){if(Bg)return jd;Bg=1;var e={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return jd=e,jd}var k8=b8();const S8=Mn(k8);var Cd,Wg;function j8(){if(Wg)return Cd;Wg=1;var e={name:"ash",anchor:"rgb(192, 192, 192)",anchorVisited:"rgb(192, 192, 192)",borderDark:"rgb(63, 63, 63)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(115, 115, 115)",borderLightest:"rgb(175, 175, 175)",canvas:"rgb(64, 64, 64)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(63, 63, 63)",canvasTextDisabledShadow:"rgb(175, 175, 175)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(128, 128, 128)",desktopBackground:"rgb(0, 0, 0)",flatDark:"rgb(63, 63, 63)",flatLight:"rgb(96, 96, 96)",focusSecondary:"rgb(175, 175, 175)",headerBackground:"linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))",headerNotActiveBackground:"linear-gradient(to right, rgb(63, 63, 63), rgb(0, 0, 0))",headerNotActiveText:"rgb(128, 128, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(0, 0, 0)",material:"rgb(96, 96, 96)",materialDark:"rgb(63, 63, 63)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(63, 63, 63)",materialTextDisabledShadow:"rgb(175, 175, 175)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(0, 0, 0)",tooltip:"rgb(0, 0, 0)"};return Cd=e,Cd}var C8=j8();const E8=Mn(C8);var Ed,Hg;function $8(){if(Hg)return Ed;Hg=1;var e={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"};return Ed=e,Ed}var T8=$8();const A8=Mn(T8);var $d,Ug;function R8(){if(Ug)return $d;Ug=1;var e={name:"matrix",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#282828",borderDarkest:"#000000",borderLight:"#656565",borderLightest:"#a7a7a7",canvas:"#c0c0c0",canvasText:"#000000",canvasTextDisabled:"#282828",canvasTextDisabledShadow:"#ff0000",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#282828",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#35FF69",headerBackground:"#000000",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#535353",headerText:"#a7a7a7",hoverBackground:"#000000",material:"#535353",materialDark:"#282828",materialText:"#35FF69",materialTextDisabled:"#282828",materialTextDisabledShadow:"#a7a7a7",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return $d=e,$d}var D8=R8();const I8=Mn(D8);var Td,Vg;function P8(){if(Vg)return Td;Vg=1;var e={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"};return Td=e,Td}var N8=P8();const M8=Mn(N8);var Ad,Kg;function L8(){if(Kg)return Ad;Kg=1;var e={name:"ninjaTurtles",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#017401",borderDarkest:"#000000",borderLight:"#1dbc1b",borderLightest:"#55fd55",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#017401",canvasTextDisabledShadow:"#55fd55",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#017401",desktopBackground:"#045424",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#FF1D15",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#FABC3C",material:"#00a800",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#017401",materialTextDisabledShadow:"#55fd55",materialTextInvert:"#000000",progress:"#FF1D15",tooltip:"#fefbcc"};return Ad=e,Ad}var O8=L8();const z8=Mn(O8);var Rd,Qg;function _8(){if(Qg)return Rd;Qg=1;var e={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"};return Rd=e,Rd}var F8=_8();const B8=Mn(F8);var Dd,qg;function W8(){if(qg)return Dd;qg=1;var e={name:"lilac",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#5f549b",borderDarkest:"#1c1449",borderLight:"#bcb4e9",borderLightest:"#d3ccf4",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#5f549b",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#5f549b",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#5e4dba",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#5e4dba",material:"#b1a7df",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#5f549b",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#5e4dba",tooltip:"#fefbcc"};return Dd=e,Dd}var H8=W8();const U8=Mn(H8);var Id,Gg;function V8(){if(Gg)return Id;Gg=1;var e={name:"blackAndWhite",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#000000",borderLight:"#dfe0e3",borderLightest:"#888c8f",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#888c8f",desktopBackground:"#ffffff",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000000",headerNotActiveBackground:"#ffffff",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#000000",material:"#ffffff",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return Id=e,Id}var K8=V8();const Q8=Mn(K8);var Pd,Yg;function q8(){if(Yg)return Pd;Yg=1;var e={name:"highContrast",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#ffffff",borderLight:"#dfe0e3",borderLightest:"#ffffff",canvas:"#353535",canvasText:"#ffffff",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#ffffff",checkmarkDisabled:"#888c8f",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#8e0284",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#8e0284",material:"#000000",materialDark:"#9a9e9c",materialText:"#ffffff",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0284",tooltip:"#fefbcc"};return Pd=e,Pd}var G8=q8();const Y8=Mn(G8),Mf={original:{name:"Windows Standard",theme:S8},ash:{name:"Ash (Win98)",theme:E8},marine:{name:"Marine",theme:B8},rainyDay:{name:"Rainy Day",theme:M8},candy:{name:"Candy",theme:A8},lilac:{name:"Lilac",theme:U8},ninjaTurtles:{name:"Ninja Turtles",theme:z8},matrix:{name:"Matrix",theme:I8},blackAndWhite:{name:"Black & White",theme:Q8},highContrast:{name:"High Contrast",theme:Y8}},X8="original";function J8(e){return(Mf[e]??Mf[X8]).theme}const Fw="vortex.screensaver",Xg={type:"starfield",wait:3};function Z8(){try{return{...Xg,...JSON.parse(localStorage.getItem(Fw)||"{}")}}catch{return{...Xg}}}let xa=Z8();const Lf=new Set,Of=new Set;function Bw(){return xa}function Jg(e){xa={...xa,...e},localStorage.setItem(Fw,JSON.stringify(xa)),Lf.forEach(n=>n())}function e$(e){return Lf.add(e),()=>Lf.delete(e)}function Ww(){return g.useSyncExternalStore(e$,Bw)}function t$(){Of.forEach(e=>e())}function n$(e){return Of.add(e),()=>Of.delete(e)}const r$=[{key:"none",name:"(None)"},{key:"starfield",name:"Starfield Simulation"},{key:"mystify",name:"Mystify Your Mind"},{key:"pipes",name:"3D Pipes"}],Zg={reduceMotion:!1,uiScale:100,showClock:!0,clock24h:!1,clockSeconds:!1,pointerScheme:"arrow.cur",desktopIconSize:"normal",showDesktopIcons:!0,showQuickLaunch:!0,liveDrag:!1,windowSnap:!0,singleClickOpen:!1,accentColor:"#000080",autoHideTaskbar:!1,dateFormat:"short",firstDayMonday:!1},o$={small:{icon:32,cell:64,font:11},normal:{icon:42,cell:76,font:12},large:{icon:56,cell:92,font:13}},Hw="vortex.settings";function i$(){try{const e=JSON.parse(localStorage.getItem(Hw)??"{}");return{...Zg,...e&&typeof e=="object"?e:{}}}catch{return{...Zg}}}let ya=i$();const zf=new Set,s$=()=>zf.forEach(e=>e());function l$(){return ya}function ot(e,n){ya={...ya,[e]:n},localStorage.setItem(Hw,JSON.stringify(ya)),s$()}function un(){return g.useSyncExternalStore(e=>(zf.add(e),()=>zf.delete(e)),l$)}const a$=[{key:"background",label:"Background"},{key:"appearance",label:"Appearance"},{key:"screensaver",label:"Screen Saver"},{key:"effects",label:"Effects"}],c$=L.div`
    display: flex;
    gap: 3px;
    padding: 8px 10px 0;
`,u$=L.button`
    padding: 5px 16px;
    font-size: 13px;
    cursor: pointer;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 ${({$active:e})=>e?"#c0c0c0":"#808080"} #ffffff;
    border-radius: 5px 5px 0 0;
    margin-bottom: -2px;
    font-weight: ${({$active:e})=>e?"bold":"normal"};
    position: relative;
    z-index: ${({$active:e})=>e?2:1};
`,d$=L.div`
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    margin: 0 10px 10px;
    padding: 16px;
    background: #c0c0c0;
`,so=L.p`
    font-weight: bold;
    margin: 0 0 8px;
`,Jl=L.p`
    font-size: 12px;
    color: #444;
    margin: 6px 0 0;
`,f$=[{name:"Vaporwave",count:7,prefix:"vw",ext:"jpg"},{name:"Windows XP",count:5,prefix:"xp",ext:"jpg"},{name:"Windows 7",count:4,prefix:"7",ext:"jpg"},{name:"Games",count:1,prefix:"games",ext:"png"}],p$=["#008080","#000080","#000000","#1a0033","#2e0d4f","#004b40","#800000","#3a3a3a"],h$=["#000080","#1084d0","#a0117a","#0a8043","#b8860b","#800000","#5a2d8c","#c0392b","#0d7377","#000000"],m$=L.div`
    width: 104px;
    height: 66px;
    flex-shrink: 0;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    border: 3px solid ${({$selected:e})=>e?"#000080":"transparent"};
    box-shadow: ${({$selected:e})=>e?"0 0 0 1px #1084d0":"inset 0 0 0 1px #00000033"};
    &:hover {
        border-color: #1084d0;
    }
`,Nd=L.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,ex=L.div`
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 3px solid ${({$selected:e})=>e?"#000080":"#808080"};
    &:hover {
        border-color: #1084d0;
    }
`,g$=()=>{const{changeWallpaper:e,wallpaper:n,crt:o,toggleCrt:i,theme:a,setTheme:u,sssStyle:d,toggleSssStyle:p}=Yt(),h=Ww(),m=un(),[y,w]=g.useState("background"),[k,T]=g.useState(n.image||""),[E,C]=g.useState(n.type||1),$=k?E===2?{background:k}:{backgroundImage:`url('/${k}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:d?"#1a0033":"#008080"};return l.jsxs("div",{style:{minHeight:420},children:[l.jsx(c$,{children:a$.map(b=>l.jsx(u$,{$active:y===b.key,onClick:()=>w(b.key),children:b.label},b.key))}),l.jsxs(d$,{children:[y==="background"&&l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:l.jsx(Hy,{backgroundStyles:$})}),l.jsx(so,{children:"Solid colors"}),l.jsx(Nd,{style:{marginBottom:16},children:p$.map(b=>l.jsx(ex,{$selected:k===b&&E===2,style:{background:b},onClick:()=>{T(b),C(2)}},b))}),f$.map(b=>l.jsxs("div",{style:{marginBottom:14},children:[l.jsx(so,{children:b.name}),l.jsx(Nd,{children:Array.from({length:b.count},(j,S)=>S+1).map(j=>{const S=`wallpapers/${b.prefix}-${j}.${b.ext}`;return l.jsx(m$,{$selected:k===S,style:{backgroundImage:`url('/${S}')`},onClick:()=>{T(S),C(1)},title:`${b.name} ${j}`},S)})})]},b.name)),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:8},children:[l.jsx(We,{onClick:()=>{T(""),e({image:"",type:1})},children:"Default"}),l.jsx(We,{onClick:()=>e({image:k,type:E}),disabled:!k,children:"Apply"})]})]}),y==="appearance"&&l.jsxs("div",{children:[l.jsx(so,{children:"Color scheme"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:6,marginBottom:16},children:Object.entries(Mf).map(([b,j])=>{const S=j.headerBackground||"#000080",R=j.material||"#c0c0c0";return l.jsxs("div",{onClick:()=>u(b),style:{display:"flex",alignItems:"center",gap:8,padding:6,cursor:"pointer",background:a===b?"#000080":"#fff",color:a===b?"#fff":"#000",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:[l.jsxs("div",{style:{display:"flex",flexShrink:0,border:"1px solid #000"},children:[l.jsx("div",{style:{width:14,height:24,background:S}}),l.jsx("div",{style:{width:14,height:24,background:R}})]}),l.jsx("span",{style:{fontSize:13},children:j.name})]},b)})}),l.jsx(so,{children:"Accent colour"}),l.jsx(Nd,{style:{marginBottom:16},children:h$.map(b=>l.jsx(ex,{$selected:m.accentColor.toLowerCase()===b.toLowerCase(),style:{background:b,width:36,height:36},onClick:()=>ot("accentColor",b),title:b},b))}),l.jsx(Jl,{style:{marginTop:0,marginBottom:14},children:"Used to highlight selected desktop icons and the selection box."}),l.jsxs("fieldset",{style:{border:"2px groove #c0c0c0",padding:"8px 12px"},children:[l.jsx("legend",{style:{fontWeight:"bold"},children:"Desktop Style"}),l.jsx(ft,{checked:d,onChange:p,label:"Serious Sam Style (Vaporwave)"}),l.jsx(Jl,{children:"On: the signature vaporwave desktop. Off: a clean, stock Windows 98 look."})]})]}),y==="screensaver"&&l.jsxs("div",{children:[l.jsx(so,{children:"Screen saver"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:12},children:[l.jsx("select",{value:h.type,onChange:b=>Jg({type:b.target.value}),style:{fontFamily:"inherit",padding:2},children:r$.map(b=>l.jsx("option",{value:b.key,children:b.name},b.key))}),l.jsx(We,{size:"sm",disabled:h.type==="none",onClick:()=>t$(),children:"Preview"})]}),l.jsxs("label",{style:{fontSize:13},children:["Wait:"," ",l.jsx("input",{type:"number",min:1,max:60,value:h.wait,onChange:b=>Jg({wait:Math.max(1,Number(b.target.value)||1)}),style:{width:48,fontFamily:"inherit"}})," ","minutes"]}),l.jsx(Jl,{children:"The screen saver starts after the desktop has been idle for this long."})]}),y==="effects"&&l.jsxs("div",{children:[l.jsx(so,{children:"Visual effects"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:o,onChange:i,label:"CRT scanline effect"}),l.jsx(ft,{checked:m.reduceMotion,onChange:()=>ot("reduceMotion",!m.reduceMotion),label:"Reduce motion (minimise animations)"})]}),l.jsx(so,{style:{marginTop:16},children:"Windows"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:m.liveDrag,onChange:()=>ot("liveDrag",!m.liveDrag),label:"Show window contents while dragging"}),l.jsx(ft,{checked:m.windowSnap,onChange:()=>ot("windowSnap",!m.windowSnap),label:"Snap windows to screen edges"})]}),l.jsxs("div",{style:{marginTop:16,display:"flex",alignItems:"center",gap:8},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"ui-scale",children:"Interface size:"}),l.jsx("select",{id:"ui-scale",value:m.uiScale,onChange:b=>ot("uiScale",Number(b.target.value)),style:{fontFamily:"inherit",padding:2},children:[90,100,110,125,150].map(b=>l.jsxs("option",{value:b,children:[b,"%"]},b))})]}),l.jsx(Jl,{children:"Interface size and reduce-motion are also in the Accessibility applet."})]})]})]})};let x$=1,Ss=[],Na=[];const _f=new Set,sc=()=>_f.forEach(e=>e());function Uw(e){return _f.add(e),()=>_f.delete(e)}function tx(){return Ss}function nx(){return Na}function y$(e){const n={...e,id:x$++,ts:Date.now()};return Ss=[...Ss,n],Na=[...Na,n].slice(-50),sc(),n.id}function Md(e){Ss=Ss.filter(n=>n.id!==e),sc()}function w$(){Na=[],sc()}const Vw="vortex.notify.winpopup";let Kw=localStorage.getItem(Vw)==="classic"?"classic":"toast";function Qw(){return Kw}function v$(e){Kw=e,localStorage.setItem(Vw,e),sc()}const qw="vortex.eggs",rx=["konami","vortex","credits","about"],Ff=new Set;function b$(){try{const e=JSON.parse(localStorage.getItem(qw)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}let ps=b$();function k$(){return ps}function lc(e){ps.includes(e)||(ps=[...ps,e],localStorage.setItem(qw,JSON.stringify(ps)),Ff.forEach(n=>n()))}function S$(){return g.useSyncExternalStore(e=>(Ff.add(e),()=>Ff.delete(e)),k$)}const ox=new Set;function j$(e){return ox.add(e),()=>ox.delete(e)}const Bf=new Set;function Wf(){Bf.forEach(e=>e())}function C$(e){return Bf.add(e),()=>Bf.delete(e)}const Ld=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function E$(e){let n=0;const o=i=>{const a=i.key.length===1?i.key.toLowerCase():i.key;a===Ld[n]?(n++,n===Ld.length&&(n=0,e())):n=a===Ld[0]?1:0};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}const $$=Date.now(),Hf="vortex.bootcount";let Ma=0;function T$(){const e=parseInt(localStorage.getItem(Hf)??"0",10);Ma=(Number.isFinite(e)?e:0)+1,localStorage.setItem(Hf,String(Ma))}function Gw(){if(Ma)return Ma;const e=parseInt(localStorage.getItem(Hf)??"0",10);return Number.isFinite(e)?e:0}function A$(){return Date.now()-$$}function R$(e){const n=Math.floor(e/1e3),o=n%60,i=Math.floor(n/60)%60,a=Math.floor(n/3600),u=d=>String(d).padStart(2,"0");return a>0?`${a}:${u(i)}:${u(o)}`:`${i}:${u(o)}`}const D$=bt`to { transform: rotate(360deg); }`,I$=bt`to { transform: rotate(-360deg); }`,P$=bt`
    0%, 100% { opacity: 0.75; transform: scale(0.94); }
    50% { opacity: 1; transform: scale(1.06); }
`,Od=L.circle`
    fill: none;
    stroke-linecap: round;
    transform-origin: 60px 60px;
    ${({$spin:e,$dur:n,$rev:o})=>e&&ye`
            animation: ${o?I$:D$} ${n}s linear infinite;
        `}
`,N$=L.circle`
    transform-origin: 60px 60px;
    ${({$spin:e})=>e&&ye`
            animation: ${P$} 2.4s ease-in-out infinite;
        `}
`,si=({size:e=120,vapor:n=!0,spinning:o=!0})=>{const i=n?"vortex-vapor":"vortex-stock",a=n?["#ff2d95","#a14bff","#00e5d0"]:["#1084d0","#3fa9f5","#000080"],u=n?"#ff67c8":"#5cb9ff";return l.jsxs("svg",{viewBox:"0 0 120 120",width:e,height:e,role:"img","aria-label":"VortexOS",style:{filter:`drop-shadow(0 0 ${e/12}px ${a[0]}88)`,display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:`${i}-grad`,x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:a[0]}),l.jsx("stop",{offset:"50%",stopColor:a[1]}),l.jsx("stop",{offset:"100%",stopColor:a[2]})]}),l.jsxs("radialGradient",{id:`${i}-core`,children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"55%",stopColor:u}),l.jsx("stop",{offset:"100%",stopColor:a[0],stopOpacity:"0"})]})]}),l.jsx(Od,{cx:"60",cy:"60",r:"52",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"200 127",$dur:7,$spin:o}),l.jsx(Od,{cx:"60",cy:"60",r:"38",stroke:`url(#${i}-grad)`,strokeWidth:"7",strokeDasharray:"120 119",$dur:4.5,$rev:!0,$spin:o}),l.jsx(Od,{cx:"60",cy:"60",r:"24",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"70 80",$dur:2.6,$spin:o}),l.jsx(N$,{cx:"60",cy:"60",r:"13",fill:`url(#${i}-core)`,$spin:o})]})},M$="http://localhost:8082";function L$(e){switch(e){case 400:return"Please enter a user name and password.";case 401:return"Incorrect user name or password.";case 409:return"That user name is already taken.";default:return`Something went wrong (HTTP ${e}).`}}async function Yw(e,n,o){let i;try{i=await fetch(`${M$}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:o})})}catch{throw new Error("Cannot reach the server. Is the backend running?")}if(!i.ok)throw new Error(L$(i.status));const a=await i.json();return{token:a.token,username:a.username}}const O$=(e,n)=>Yw("/auth/register",e,n),z$=(e,n)=>Yw("/auth/login",e,n),Xw=g.createContext(null);function _$({children:e}){const[n,o]=g.useState(()=>oc()),i=g.useCallback(h=>{N2(h),o(h)},[]),a=g.useCallback(async(h,m)=>i(await z$(h,m)),[i]),u=g.useCallback(async(h,m)=>i(await O$(h,m)),[i]),d=g.useCallback(()=>{kw(),o(null)},[]);g.useEffect(()=>(Mg(()=>o(null)),()=>Mg(null)),[]);const p=g.useMemo(()=>({session:n,username:(n==null?void 0:n.username)??null,isAuthenticated:!!n,login:a,register:u,logout:d}),[n,a,u,d]);return l.jsx(Xw.Provider,{value:p,children:e})}function Xn(){const e=g.useContext(Xw);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}const F$=()=>{const[e,n]=g.useState(Math.round(Pf()*100)),[o,i]=g.useState(Nf()),[a,u]=g.useState(Qw()==="classic");return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Sound"}),l.jsx(ft,{checked:o,onChange:()=>{const d=!o;i(d),Ow(d)},label:"Mute all sounds"}),l.jsxs("div",{style:{marginTop:14},children:[l.jsx("label",{children:"Volume"}),l.jsx("input",{type:"range",min:0,max:100,value:e,disabled:o,onChange:d=>{const p=Number(d.target.value);n(p),Lw(p/100)},onMouseUp:()=>!o&&yo(),style:{width:220,display:"block",marginTop:4}}),l.jsxs("span",{children:[e,"%"]})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Notifications"}),l.jsx(ft,{checked:a,onChange:()=>{const d=!a;u(d),v$(d?"classic":"toast")},label:"Use classic WinPopup window for messages"}),l.jsx("p",{style:{fontSize:11,color:"#555",marginTop:6},children:"When off, incoming Net Send messages appear as toast notifications in the corner."})]})},B$=()=>{const[e,n]=g.useState(new Date),{dateFormat:o,clock24h:i}=un();g.useEffect(()=>{const d=setInterval(()=>n(new Date),1e3);return()=>clearInterval(d)},[]);const a=o==="long"?e.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}):e.toLocaleDateString(),u=e.toLocaleTimeString(void 0,{hour12:!i});return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Date & Time"}),l.jsxs(pt,{variant:"well",style:{padding:10,fontSize:16},children:[l.jsx("div",{style:{fontWeight:"bold"},children:a}),l.jsx("div",{style:{fontFamily:"monospace",fontSize:20,marginTop:4},children:u})]}),l.jsxs("p",{style:{marginTop:10,fontSize:12},children:["VortexOS follows your computer's clock. Change the date format and week start in"," ",l.jsx("b",{children:"Regional Settings"}),"."]})]})},W$=()=>{const e=un(),n=new Date,o=e.dateFormat==="long"?n.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}):n.toLocaleDateString();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Date"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"date-format",children:"Date format:"}),l.jsxs("select",{id:"date-format",value:e.dateFormat,onChange:i=>ot("dateFormat",i.target.value),style:{fontFamily:"inherit",padding:2},children:[l.jsx("option",{value:"short",children:"Short (e.g. 6/14/2026)"}),l.jsx("option",{value:"long",children:"Long (e.g. Sunday, June 14, 2026)"})]})]}),l.jsx(pt,{variant:"well",style:{padding:"6px 10px",fontSize:13,display:"inline-block"},children:o}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Calendar"}),l.jsx(ft,{checked:e.firstDayMonday,onChange:()=>ot("firstDayMonday",!e.firstDayMonday),label:"Start the week on Monday"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:10},children:"Affects the calendar in the Clock app and the system-tray fly-out."})]})},H$=[{file:"arrow.cur",name:"Standard"},{file:"Beam.cur",name:"Text Select"},{file:"help_win95.cur",name:"Help"},{file:"Grabbing.cur",name:"Grabbing"},{file:"Cursor_3.cur",name:"Classic 1"},{file:"Cursor_5.cur",name:"Classic 2"},{file:"Cursor_7.cur",name:"Classic 3"},{file:"Cursor_9.cur",name:"Classic 4"},{file:"Cursor_11.cur",name:"Classic 5"},{file:"Cursor_14.cur",name:"Classic 6"}],U$=()=>{const e=un();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Pointer scheme"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginBottom:12},children:"Pick a pointer — it applies instantly and is remembered."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:H$.map(n=>{const o=e.pointerScheme===n.file;return l.jsxs("div",{onClick:()=>ot("pointerScheme",n.file),style:{width:92,cursor:`url(/win-cursor/${n.file}), auto`,textAlign:"center",padding:8,background:o?"#000080":"#fff",color:o?"#fff":"#000",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},title:n.name,children:[l.jsx("div",{style:{height:40,background:`#c0c0c0 url(/win-cursor/${n.file}) center no-repeat`,border:"1px solid #808080",marginBottom:6}}),l.jsx("div",{style:{fontSize:11},children:n.name})]},n.file)})})]})},V$=()=>{const e=un();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Taskbar"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:e.showQuickLaunch,onChange:()=>ot("showQuickLaunch",!e.showQuickLaunch),label:"Show the Quick Launch toolbar"}),l.jsx(ft,{checked:e.autoHideTaskbar,onChange:()=>ot("autoHideTaskbar",!e.autoHideTaskbar),label:"Auto-hide the taskbar"})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 10px"},children:"Clock"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:e.showClock,onChange:()=>ot("showClock",!e.showClock),label:"Show the clock"}),l.jsx(ft,{checked:e.clock24h,onChange:()=>ot("clock24h",!e.clock24h),label:"Use 24-hour time",disabled:!e.showClock}),l.jsx(ft,{checked:e.clockSeconds,onChange:()=>ot("clockSeconds",!e.clockSeconds),label:"Show seconds",disabled:!e.showClock})]}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:14},children:"Taskbar and clock changes apply immediately."})]})},K$=()=>{const e=un();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Desktop icons"}),l.jsx(ft,{checked:e.showDesktopIcons,onChange:()=>ot("showDesktopIcons",!e.showDesktopIcons),label:"Show icons on the desktop"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:14},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"icon-size",children:"Icon size:"}),l.jsxs("select",{id:"icon-size",value:e.desktopIconSize,disabled:!e.showDesktopIcons,onChange:n=>ot("desktopIconSize",n.target.value),style:{fontFamily:"inherit",padding:2},children:[l.jsx("option",{value:"small",children:"Small"}),l.jsx("option",{value:"normal",children:"Normal"}),l.jsx("option",{value:"large",children:"Large"})]})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Open items"}),l.jsx(ft,{checked:e.singleClickOpen,onChange:()=>ot("singleClickOpen",!e.singleClickOpen),label:"Single-click to open an icon (instead of double-click)"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:14},children:"Changes apply to the desktop instantly."})]})},Q$=()=>{const e=un(),{setTheme:n}=Yt();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Display"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"acc-scale",children:"Interface size:"}),l.jsx("select",{id:"acc-scale",value:e.uiScale,onChange:o=>ot("uiScale",Number(o.target.value)),style:{fontFamily:"inherit",padding:2},children:[90,100,110,125,150].map(o=>l.jsxs("option",{value:o,children:[o,"%"]},o))}),l.jsx("span",{style:{fontSize:12,color:"#444"},children:"Scales the whole desktop."})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"4px 0 8px"},children:"Motion"}),l.jsx(ft,{checked:e.reduceMotion,onChange:()=>ot("reduceMotion",!e.reduceMotion),label:"Reduce motion (minimise animations & transitions)"}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Contrast"}),l.jsx(We,{onClick:()=>n("highContrast"),children:"Switch to High Contrast theme"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:8},children:"You can change the theme back any time in Display ▸ Appearance."})]})},q$=()=>{const{username:e,logout:n}=Xn(),o=Gw();return l.jsxs("div",{style:{padding:18},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:16},children:[l.jsx("div",{style:{width:56,height:56,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:"bold",color:"#fff",background:"linear-gradient(135deg, #ff2d95, #00e5d0)",textTransform:"uppercase"},children:(e||"?").charAt(0)}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:20,fontWeight:"bold",margin:0},children:e||"Guest"}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:12,color:"#008000"},children:"● Signed in"}),l.jsxs("p",{style:{margin:"2px 0 0",fontSize:12,color:"#555"},children:[o," session",o===1?"":"s"," on this machine"]})]})]}),l.jsx("p",{style:{fontSize:12.5,marginBottom:14},children:"Your files, desktop, shared folders and high scores are all private to this account. Sign out to switch users."}),l.jsxs(We,{onClick:n,children:["Log Off ",e,"…"]})]})},G$=()=>{const e=Cw(),n=S$(),o=g.useRef(0),i=()=>{o.current+=1,o.current>=5&&(o.current=0,lc("about"),Wf())},a=navigator,[,u]=g.useState(0);g.useEffect(()=>{const m=setInterval(()=>u(y=>y+1),1e3);return()=>clearInterval(m)},[]);const d=[["Uptime",R$(A$())],["Boots",String(Gw())],["Apps",String(zr.length)]],p=[["Processor",`${a.hardwareConcurrency??"?"} virtual cores`],["Memory",a.deviceMemory?`${a.deviceMemory} GB RAM`:"—"],["Display",`${window.screen.width} × ${window.screen.height}`],["Disk (OPFS)",e!=null&&e.supported?`${Nr(e.usage)} of ${Nr(e.quota)}`:"—"],["Kernel","VortexOS microkernel · syscall ABI"],["Filesystem","MemFS + OPFS · /dev /proc /bin /mnt"]],h=n.length===rx.length;return l.jsxs("div",{style:{padding:18,lineHeight:1.55,overflow:"auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14},children:[l.jsx("div",{onClick:i,style:{cursor:"pointer",userSelect:"none",flexShrink:0},title:"VortexOS",children:l.jsx(si,{size:62,vapor:!0})}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:28,fontWeight:800,letterSpacing:1,margin:0,background:"linear-gradient(90deg, #d6177f, #7a2fd6, #0aa89a)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"},children:"VortexOS"}),l.jsx("p",{style:{margin:0,fontSize:13},children:"Version 2.0 · Experimental Edition"}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:13,color:"#a0117a",fontWeight:"bold"},children:"a creation by Serious Sam"})]})]}),l.jsx("div",{style:{display:"flex",gap:8,marginBottom:14},children:d.map(([m,y])=>l.jsxs("div",{style:{flex:1,textAlign:"center",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",padding:"7px 4px"},children:[l.jsx("div",{style:{fontSize:18,fontWeight:"bold",color:"#000080",fontVariantNumeric:"tabular-nums"},children:y}),l.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:.5},children:m})]},m))}),l.jsxs("p",{style:{fontSize:12.5,margin:"0 0 12px"},children:["I didn't theme a desktop — I ",l.jsx("b",{children:"built an operating system"}),". Under the nostalgia is a real microkernel with a syscall ABI, a virtual filesystem, a process scheduler, a command shell, a window manager and multi-user networking. Every window, every app, every sound — hand-made, from scratch, in a browser tab. No emulator. No clone. It just ",l.jsx("i",{children:"looks"})," like 1995."]}),l.jsx("table",{style:{fontSize:13,borderCollapse:"collapse",marginBottom:6},children:l.jsx("tbody",{children:p.map(([m,y])=>l.jsxs("tr",{children:[l.jsxs("td",{style:{fontWeight:"bold",paddingRight:16,verticalAlign:"top",whiteSpace:"nowrap"},children:[m,":"]}),l.jsx("td",{children:y})]},m))})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:12},children:[l.jsx("button",{onClick:Wf,style:{padding:"5px 16px",fontSize:13,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #000000 #000000 #ffffff",cursor:"pointer"},children:"🎬 Roll the Credits"}),l.jsxs("span",{style:{fontSize:11,color:h?"#008000":"#888",fontWeight:h?"bold":"normal"},children:[h?"🌀 ":"","Easter eggs found: ",n.length," / ",rx.length]})]})]})},ix=[{name:"Display",icon:"/monitor.png",component:g$},{name:"Desktop",icon:"/desktop.svg",component:K$},{name:"Mouse",icon:"/mouse.svg",component:U$},{name:"Sounds",icon:"/sound.svg",component:F$},{name:"Taskbar & Clock",icon:"/taskbar.svg",component:V$},{name:"Accessibility",icon:"/accessibility.svg",component:Q$},{name:"Date/Time",icon:"/clock.svg",component:B$},{name:"Regional",icon:"/regional.svg",component:W$},{name:"Accounts",icon:"/users.svg",component:q$},{name:"About Vortex",icon:"/w95.png",component:G$}],Y$=()=>{const[e,n]=g.useState(null);return l.jsxs(Tt,{$minW:560,$minH:380,children:[l.jsxs(bn,{children:[l.jsx(Be,{label:"File",children:l.jsx(Re,{$disabled:!e,onMouseDown:o=>{o.preventDefault(),n(null)},children:"Close Applet"})}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Control Panel — VortexOS"})})]}),l.jsxs(hi,{children:[l.jsx(lt,{onClick:()=>n(null),disabled:!e,children:"◀ Back"}),l.jsx(In,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:e?e.name:"Control Panel"})]}),l.jsx(vn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:e?l.jsx(e.component,{}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap",padding:10},children:ix.map(o=>l.jsxs("div",{onDoubleClick:()=>n(o),title:"Double-click to open",style:{cursor:"pointer",width:96,padding:12,display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("img",{src:o.icon,alt:o.name,style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:o.name})]},o.name))})})}),l.jsxs(Ot,{children:[l.jsx(_e,{$flex:1,children:e?e.name:"Control Panel"}),l.jsxs(_e,{children:[ix.length," object(s)"]})]})]})},X$=new Set(["|","<",";"]);function J$(e){const n=[];let o=0;const i=e.length;for(;o<i;){const a=e[o];if(a===" "||a==="	"){o++;continue}if(a===">"){e[o+1]===">"?(n.push({type:"op",value:">>"}),o+=2):(n.push({type:"op",value:">"}),o++);continue}if(X$.has(a)){n.push({type:"op",value:a}),o++;continue}let u="";for(;o<i;){const d=e[o];if(d===" "||d==="	"||d==="|"||d==="<"||d===">"||d===";")break;if(d==='"'||d==="'"){const p=d;for(o++;o<i&&e[o]!==p;)u+=e[o],o++;o++;continue}if(d==="\\"&&o+1<i){u+=e[o+1],o+=2;continue}u+=d,o++}n.push({type:"word",value:u})}return n}class Zl extends Error{}function Z$(e){const n=J$(e),o=[];let i=[],a=null,u=!1;const d=()=>{a&&i.push(a),a=null},p=()=>{if(u)throw new Zl("syntax error near `|`");d(),i.length&&o.push(i),i=[]};for(let h=0;h<n.length;h++){const m=n[h];if(m.type==="word"){a||(a={argv:[]}),a.argv.push(m.value),u=!1;continue}if(m.value===";"){p();continue}if(m.value==="|"){if(!a||a.argv.length===0)throw new Zl("syntax error near `|`");d(),u=!0;continue}const y=n[h+1];if(!y||y.type!=="word")throw new Zl(`syntax error near \`${m.value}\``);a||(a={argv:[]}),m.value==="<"?a.stdinFile=y.value:(a.stdoutFile=y.value,a.append=m.value===">>"),h++}p();for(const h of o)for(const m of h)if(m.argv.length===0)throw new Zl("syntax error: empty command");return o}function Lt(e,n){return n.startsWith("/")?Or(n):Ue(e,n)}function dn(e){const n=new Set,o=[];for(const i of e.slice(1))if(i.length>1&&i[0]==="-"&&i[1]!=="-")for(const a of i.slice(1))n.add(a);else o.push(i);return{flags:n,operands:o}}const Jn=e=>(e==null?void 0:e.code)??(e==null?void 0:e.message)??"error",eT=async({argv:e,out:n})=>(n(e.slice(1).join(" ")+`
`),0),tT=async({cwd:e,out:n})=>(n(e+`
`),0),nT=async({env:e,out:n})=>(n((e.USER??"user")+`
`),0),rT=async({argv:e,out:n})=>(n(e.includes("-a")?`VortexOS 2.0 vortex web microkernel
`:`VortexOS
`),0),oT=async({out:e})=>(e(new Date().toString()+`
`),0),iT=String.raw`
         .-""""-.
       .'        '.        V O R T E X   O S
      /   .--.     \       ----------------------------
     |   /    \     |      Version 2.0 · Experimental Edition
     |   \    /     |      a creation by Serious Sam
      \   '--'  o  /
       '.        .'        "No emulator. No clone."
         '-....-'           a real microkernel, in a browser.
`,sT=async({out:e})=>(lc("vortex"),e(iT+`
`),e(`Try 'credits' to roll the credits. The Konami code does something too...
`),0),lT=async({out:e})=>(lc("credits"),Wf(),e(`Rolling the credits... 🌀
`),0),aT=async({out:e})=>(e(`Nothing happens.
`),0),cT=async({env:e,out:n})=>{for(const[o,i]of Object.entries(e))n(`${o}=${i}
`);return 0},uT=async({argv:e,cwd:n,sys:o,out:i,err:a})=>{const{flags:u,operands:d}=dn(e),p=d.length?d:["."];let h=0;for(const m of p){const y=Lt(n,m);try{const w=await o.stat(y),k=w.type==="dir"?await o.readdir(y):[ln(y)];if(u.has("l"))for(const T of k){const E=w.type==="dir"?Ue(y,T):y,C=await o.stat(E),$=C.type==="dir"?"d":C.type==="dev"?"c":"-";i(`${$}  ${String(C.size).padStart(6)}  ${T}
`)}else k.length&&i(k.join(`
`)+`
`)}catch(w){a(`ls: cannot access '${m}': ${Jn(w)}
`),h=1}}return h},dT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=dn(e);if(d.length===0)return a(o),0;let p=0;for(const h of d)try{a(await i.readTextFile(Lt(n,h)))}catch(m){u(`cat: ${h}: ${Jn(m)}
`),p=1}return p},fT=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=dn(e);let d=0;for(const p of u){const h=Lt(n,p);try{if(a.has("p")){let m="";for(const y of h.split("/").filter(Boolean))m+="/"+y,await o.stat(m).then(()=>!0).catch(()=>!1)||await o.mkdir(m)}else await o.mkdir(h)}catch(m){i(`mkdir: ${p}: ${Jn(m)}
`),d=1}}return d},pT=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=dn(e);let u=0;for(const d of a){const p=Lt(n,d);try{await o.stat(p).then(()=>!0).catch(()=>!1)||await o.writeTextFile(p,"")}catch(h){i(`touch: ${d}: ${Jn(h)}
`),u=1}}return u};async function Jw(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await Jw(e,Ue(n,i));await e.unlink(n)}const hT=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=dn(e);let d=0;for(const p of u){const h=Lt(n,p);try{a.has("r")?await Jw(o,h):await o.unlink(h)}catch(m){i(`rm: ${p}: ${Jn(m)}
`),d=1}}return d},Zw=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=dn(e);if(a.length<2)return i(`cp: usage: cp <src> <dst>
`),1;const u=Lt(n,a[0]);let d=Lt(n,a[1]);try{return await o.stat(d).then(p=>p.type==="dir").catch(()=>!1)&&(d=Ue(d,ln(u))),await o.writeFile(d,await o.readFile(u)),0}catch(p){return i(`cp: ${Jn(p)}
`),1}},mT=async e=>{const n=await Zw(e);if(n!==0)return n;const{operands:o}=dn(e.argv);return await e.sys.unlink(Lt(e.cwd,o[0])).catch(()=>{}),0},gT=async({sys:e,out:n})=>{const o=await e.ps();n(`PID       NAME                 STATE     PRIO
`);for(const i of o)n(`${i.pid.slice(0,8)}  ${i.name.padEnd(20).slice(0,20)}  ${i.state.padEnd(8)}  ${i.priority}
`);return 0},xT=async({argv:e,sys:n,out:o,err:i})=>{const{operands:a}=dn(e);if(a.length===0)return i(`kill: usage: kill <pid>
`),1;const u=await n.ps();let d=0;for(const p of a){const h=u.find(m=>m.pid===p||m.pid.startsWith(p));if(!h){i(`kill: ${p}: no such process
`),d=1;continue}await n.kill(h.pid),o(`killed ${h.pid.slice(0,8)} (${h.name})
`)}return d},yT=async({argv:e,out:n,err:o})=>{const{operands:i}=dn(e);let a=0;for(const u of i)u in Lp||nv.includes(u)?n(`/bin/${u}
`):(o(`${u} not found
`),a=1);return a},wT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{flags:d,operands:p}=dn(e);if(p.length===0)return u(`grep: usage: grep <pattern> [file...]
`),1;const[h,...m]=p,y=d.has("i")?h.toLowerCase():h,w=E=>(d.has("i")?E.toLowerCase():E).includes(y),k=[];if(m.length===0)k.push(o);else for(const E of m)try{k.push(await i.readTextFile(Lt(n,E)))}catch(C){u(`grep: ${E}: ${Jn(C)}
`)}let T=!1;for(const E of k)for(const C of E.split(`
`))C!==""&&w(C)&&(a(C+`
`),T=!0);return T?0:1},vT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=dn(e),p=m=>({lines:m===""?0:m.replace(/\n$/,"").split(`
`).length,words:m.split(/\s+/).filter(Boolean).length,chars:m.length});if(d.length===0){const m=p(o);return a(`${m.lines} ${m.words} ${m.chars}
`),0}let h=0;for(const m of d)try{const y=p(await i.readTextFile(Lt(n,m)));a(`${y.lines} ${y.words} ${y.chars} ${m}
`)}catch(y){u(`wc: ${m}: ${Jn(y)}
`),h=1}return h};function ev(e){const n=e.split(`
`);return n[n.length-1]===""&&n.pop(),n}function tv(e,n){const o=e.indexOf("-n"),i=o>=0?Number(e[o+1]):NaN;return Number.isFinite(i)?i:n}const bT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=tv(e,10),p=dn(e).operands.filter(m=>!/^\d+$/.test(m)),h=m=>ev(m).slice(0,d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const m of p)h(await i.readTextFile(Lt(n,m)));return 0}catch(m){return u(`head: ${Jn(m)}
`),1}},kT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=tv(e,10),p=dn(e).operands.filter(m=>!/^\d+$/.test(m)),h=m=>ev(m).slice(-d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const m of p)h(await i.readTextFile(Lt(n,m)));return 0}catch(m){return u(`tail: ${Jn(m)}
`),1}},ST=async({out:e})=>(e(`VortexOS shell — available commands:
`),e([...Object.keys(Lp),...nv].sort().join("  ")+`
`),e(`Pipes (|), redirects (> >> <) and ; are supported.
`),0),nv=["cd","clear","export"],Lp={echo:eT,pwd:tT,whoami:nT,uname:rT,date:oT,env:cT,ls:uT,cat:dT,mkdir:fT,touch:pT,rm:hT,cp:Zw,mv:mT,ps:gT,kill:xT,which:yT,grep:wT,wc:vT,head:bT,tail:kT,help:ST,vortex:sT,credits:lT,xyzzy:aT};class rv{constructor(n,o="/home/user",i={}){Ne(this,"cwd");Ne(this,"env");this.sys=n,this.cwd=o,this.env={HOME:"/home/user",USER:"user",PATH:"/bin",...i}}prompt(){const n=this.cwd===this.env.HOME?"~":this.cwd;return`${this.env.USER}@vortex:${n}$ `}async run(n){let o="",i=!1,a=0;const u=p=>{o+=p};let d;try{d=Z$(n)}catch(p){return{output:`sh: ${p.message}
`,clear:!1,code:2}}for(const p of d){const h=await this.runPipeline(p,u);a=h.code,h.clear&&(i=!0,o="")}return{output:o,clear:i,code:a}}expand(n){let o=n;return o==="~"?o=this.env.HOME:o.startsWith("~/")&&(o=this.env.HOME+o.slice(1)),o=o.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g,(i,a)=>this.env[a]??""),o=o.replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g,(i,a)=>this.env[a]??""),o}expandCommand(n){return{argv:n.argv.map(o=>this.expand(o)),stdinFile:n.stdinFile?this.expand(n.stdinFile):void 0,stdoutFile:n.stdoutFile?this.expand(n.stdoutFile):void 0,append:n.append}}async runPipeline(n,o){const i=n.map(d=>this.expandCommand(d));if(i.length===1){const d=i[0].argv,p=d[0],h=d.length===1?/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/.exec(p):null;if(h)return this.env[h[1]]=h[2],{code:0};if(p==="cd")return{code:await this.cd(d,o)};if(p==="clear")return{code:0,clear:!0};if(p==="export")return{code:this.export(d)};if(p==="sh"||p==="source"||p===".")return{code:await this.runScript(d[1],o)}}let a="",u=0;for(const d of i){const p=d.argv[0],h=Lp[p];let m=a;if(d.stdinFile)try{m=await this.sys.readTextFile(Lt(this.cwd,d.stdinFile))}catch(w){return o(`sh: ${d.stdinFile}: ${w.code??"error"}
`),{code:1}}if(!h)return o(`sh: ${p}: command not found
`),{code:127};let y="";u=await h({argv:d.argv,stdin:m,cwd:this.cwd,env:this.env,sys:this.sys,out:w=>y+=w,err:o}),a=await this.applyStdout(d,y,o)}return o(a),{code:u}}async applyStdout(n,o,i){if(!n.stdoutFile)return o;const a=Lt(this.cwd,n.stdoutFile);try{const u=n.append?await this.sys.readTextFile(a).catch(()=>""):"";await this.sys.writeTextFile(a,u+o)}catch(u){i(`sh: ${n.stdoutFile}: ${u.code??"error"}
`)}return""}async cd(n,o){const i=n[1]?Lt(this.cwd,n[1]):this.env.HOME;try{return(await this.sys.stat(i)).type!=="dir"?(o(`cd: not a directory: ${n[1]}
`),1):(this.cwd=i,0)}catch{return o(`cd: ${n[1]}: No such file or directory
`),1}}export(n){for(const o of n.slice(1)){const i=o.indexOf("=");i>0&&(this.env[o.slice(0,i)]=o.slice(i+1))}return 0}async runScript(n,o){if(!n)return o(`sh: usage: sh <script>
`),2;let i;try{i=await this.sys.readTextFile(Lt(this.cwd,n))}catch(u){return o(`sh: ${n}: ${u.code??"not found"}
`),1}let a=0;for(const u of i.split(`
`)){const d=u.trim();if(!d||d.startsWith("#"))continue;const p=await this.run(d);p.output&&o(p.output),a=p.code}return a}}const jT=["VortexOS [Version 2.0]","Type 'help' for a list of commands.",""],CT=()=>{const e=cn(),n=g.useRef(null);n.current||(n.current=new rv(e));const o=n.current,[i,a]=g.useState(jT),[u,d]=g.useState(""),[p,h]=g.useState([]),[m,y]=g.useState(-1),[w,k]=g.useState(!1),T=g.useRef(null),E=g.useRef(null),[C,$]=g.useState(null);g.useEffect(()=>{if(!C)return;const S=()=>$(null);return document.addEventListener("click",S),()=>document.removeEventListener("click",S)},[C]),g.useEffect(()=>{var S,R;(S=T.current)==null||S.scrollTo(0,T.current.scrollHeight),(R=E.current)==null||R.focus()},[i]);const b=async()=>{const S=u;a(M=>[...M,o.prompt()+S]),d(""),y(-1),S.trim()&&h(M=>[...M,S]),k(!0);const R=await o.run(S);if(k(!1),R.clear){a([]);return}R.output&&a(M=>[...M,...R.output.replace(/\n$/,"").split(`
`)])},j=S=>{if(S.key==="Enter")S.preventDefault(),w||b();else if(S.key==="ArrowUp"){if(S.preventDefault(),!p.length)return;const R=m===-1?p.length-1:Math.max(0,m-1);y(R),d(p[R])}else if(S.key==="ArrowDown"){if(S.preventDefault(),m===-1)return;const R=m+1;R>=p.length?(y(-1),d("")):(y(R),d(p[R]))}};return l.jsxs("div",{ref:T,onClick:()=>{var S;return(S=E.current)==null?void 0:S.focus()},onContextMenu:S=>{var R;S.preventDefault(),$({x:S.clientX,y:S.clientY,sel:((R=window.getSelection())==null?void 0:R.toString())??""})},style:{width:"100%",height:"100%",minWidth:600,minHeight:360,boxSizing:"border-box",overflowY:"auto",background:"#000",color:"#c0c0c0",fontFamily:"'Lucida Console', 'Courier New', monospace",fontSize:13,lineHeight:1.35,padding:8,cursor:"text"},children:[i.map((S,R)=>l.jsx("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:S||" "},R)),l.jsxs("div",{style:{display:"flex",whiteSpace:"pre"},children:[l.jsx("span",{children:o.prompt()}),l.jsx("input",{ref:E,value:u,onChange:S=>d(S.target.value),onKeyDown:j,spellCheck:!1,autoComplete:"off",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"inherit",fontSize:"inherit",padding:0}})]}),C&&l.jsx(xo,{x:C.x,y:C.y,onClose:()=>$(null),items:[{label:"Copy",shortcut:"Ctrl+C",disabled:!C.sel,onClick:()=>{var S;return C.sel&&void((S=navigator.clipboard)==null?void 0:S.writeText(C.sel).catch(()=>{}))}},{label:"Paste",shortcut:"Ctrl+V",onClick:()=>{var S;return void((S=navigator.clipboard)==null?void 0:S.readText().then(R=>{var M;R&&d(V=>V+R.replace(/\n/g," ")),(M=E.current)==null||M.focus()}).catch(()=>{}))}},{label:"Select All",onClick:()=>{const S=T.current;if(!S)return;const R=document.createRange();R.selectNodeContents(S);const M=window.getSelection();M==null||M.removeAllRanges(),M==null||M.addRange(R)}},{separator:!0},{label:"Clear",glyph:"⌦",onClick:()=>a([])}]})]})},sx=(e,n,o)=>{switch(o){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n;case"x^y":return Math.pow(e,n);case"Mod":return n===0?NaN:e%n;case"And":return(e&n)>>>0;case"Or":return(e|n)>>>0;case"Xor":return(e^n)>>>0;case"Lsh":return e<<n>>>0;case"Rsh":return e>>n>>>0}},ET=()=>{const[e,n]=g.useState("0"),[o,i]=g.useState(null),[a,u]=g.useState(null),[d,p]=g.useState(!0),[h,m]=g.useState(0),[y,w]=g.useState("standard"),[k,T]=g.useState(10),[E,C]=g.useState(!0),$=g.useRef(null);g.useEffect(()=>{var H;return(H=$.current)==null?void 0:H.focus()},[]);const b=()=>y==="programmer"?parseInt(e,k)||0:parseFloat(e)||0,j=H=>{if(!Number.isFinite(H))return n("Error");if(y==="programmer"){const A=Math.trunc(H)>>>0;n(A.toString(k).toUpperCase())}else n(String(Math.round(H*1e10)/1e10))},S=H=>{if(y!=="programmer")return!0;const A=parseInt(H,16);return!isNaN(A)&&A<k},R=H=>{H==="."&&y==="programmer"||S(H)&&(d?(n(H==="."?"0.":H),p(!1)):H==="."?e.includes(".")||n(e+"."):n(e==="0"?H:e+H))},M=H=>{const A=b();if(o!==null&&a&&!d){const B=sx(o,A,a);i(B),j(B)}else i(A);u(H),p(!0)},V=()=>{o===null||!a||(j(sx(o,b(),a)),i(null),u(null),p(!0))},Z=()=>{n("0"),i(null),u(null),p(!0)},ne=()=>{n("0"),p(!0)},ie=()=>{n(H=>H.length>1?H.slice(0,-1):"0")},me=H=>E?H*Math.PI/180:H,de=H=>{j(H(b())),p(!0)},xe=H=>{if(H=Math.trunc(H),H<0)return NaN;let A=1;for(let B=2;B<=H;B++)A*=B;return A},ce=H=>{const A=b();T(H),n((Math.trunc(A)>>>0).toString(H).toUpperCase()),p(!0)},G=()=>m(0),N=()=>{j(h),p(!0)},I=()=>m(b()),q=()=>m(H=>H+b()),W=()=>m(H=>H-b()),F=H=>{const A=H.key;if(/^[0-9]$/.test(A))return R(A);if(y==="programmer"&&/^[a-fA-F]$/.test(A))return R(A.toUpperCase());if(A===".")return R(".");if(A==="+")return M("+");if(A==="-")return M("-");if(A==="*")return M("×");if(A==="/")return H.preventDefault(),M("÷");if(A==="Enter"||A==="=")return H.preventDefault(),V();if(A==="Backspace")return ie();if(A==="Escape")return Z()},P=({label:H,onClick:A,accent:B,kind:le,w:he=44})=>{const ge=le??(B?"op":void 0),je=ge==="op"?"#000080":ge==="clr"?"#a00000":ge==="mem"?"#006000":"#000";return l.jsx(We,{onClick:A,onMouseDown:Te=>Te.preventDefault(),primary:ge==="eq",style:{width:he,height:34,fontSize:14,padding:0,color:ge==="eq"?void 0:je,fontWeight:ge&&ge!=="mem"?"bold":"normal"},children:H})},z=l.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[["MC",G],["MR",N],["MS",I],["M+",q],["M-",W]].map(([H,A])=>l.jsx(We,{onClick:A,onMouseDown:B=>B.preventDefault(),style:{flex:1,minWidth:0,height:30,fontSize:13,padding:0,color:"#006000"},children:H},H))}),ee=l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 44px)",gap:4},children:[l.jsx(P,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(P,{label:"CE",onClick:ne,kind:"clr"}),l.jsx(P,{label:"C",onClick:Z,kind:"clr"}),l.jsx(P,{label:"±",onClick:()=>de(H=>-H)}),l.jsx(P,{label:"√",onClick:()=>de(Math.sqrt)}),l.jsx(P,{label:"7",onClick:()=>R("7")}),l.jsx(P,{label:"8",onClick:()=>R("8")}),l.jsx(P,{label:"9",onClick:()=>R("9")}),l.jsx(P,{label:"÷",onClick:()=>M("÷"),accent:!0}),l.jsx(P,{label:"%",onClick:()=>de(H=>H/100)}),l.jsx(P,{label:"4",onClick:()=>R("4")}),l.jsx(P,{label:"5",onClick:()=>R("5")}),l.jsx(P,{label:"6",onClick:()=>R("6")}),l.jsx(P,{label:"×",onClick:()=>M("×"),accent:!0}),l.jsx(P,{label:"1/x",onClick:()=>de(H=>1/H)}),l.jsx(P,{label:"1",onClick:()=>R("1")}),l.jsx(P,{label:"2",onClick:()=>R("2")}),l.jsx(P,{label:"3",onClick:()=>R("3")}),l.jsx(P,{label:"-",onClick:()=>M("-"),accent:!0}),l.jsx(P,{label:"=",onClick:V,kind:"eq"}),l.jsx(P,{label:"0",onClick:()=>R("0"),w:92}),l.jsx(P,{label:".",onClick:()=>R(".")}),l.jsx(P,{label:"+",onClick:()=>M("+"),accent:!0})]}),ue=l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:E,onChange:()=>C(!0)})," Deg"]}),l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:!E,onChange:()=>C(!1)})," Rad"]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(P,{label:"sin",onClick:()=>de(H=>Math.sin(me(H)))}),l.jsx(P,{label:"cos",onClick:()=>de(H=>Math.cos(me(H)))}),l.jsx(P,{label:"tan",onClick:()=>de(H=>Math.tan(me(H)))}),l.jsx(P,{label:"x²",onClick:()=>de(H=>H*H)}),l.jsx(P,{label:"x^y",onClick:()=>M("x^y"),accent:!0}),l.jsx(P,{label:"C",onClick:Z,kind:"clr"}),l.jsx(P,{label:"log",onClick:()=>de(Math.log10)}),l.jsx(P,{label:"ln",onClick:()=>de(Math.log)}),l.jsx(P,{label:"n!",onClick:()=>de(xe)}),l.jsx(P,{label:"√",onClick:()=>de(Math.sqrt)}),l.jsx(P,{label:"1/x",onClick:()=>de(H=>1/H)}),l.jsx(P,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(P,{label:"π",onClick:()=>{j(Math.PI),p(!0)}}),l.jsx(P,{label:"e",onClick:()=>{j(Math.E),p(!0)}}),l.jsx(P,{label:"±",onClick:()=>de(H=>-H)}),l.jsx(P,{label:"(",onClick:()=>{}}),l.jsx(P,{label:")",onClick:()=>{}}),l.jsx(P,{label:"%",onClick:()=>de(H=>H/100)}),l.jsx(P,{label:"7",onClick:()=>R("7")}),l.jsx(P,{label:"8",onClick:()=>R("8")}),l.jsx(P,{label:"9",onClick:()=>R("9")}),l.jsx(P,{label:"÷",onClick:()=>M("÷"),accent:!0}),l.jsx(P,{label:"×",onClick:()=>M("×"),accent:!0}),l.jsx(P,{label:"=",onClick:V,kind:"eq"}),l.jsx(P,{label:"4",onClick:()=>R("4")}),l.jsx(P,{label:"5",onClick:()=>R("5")}),l.jsx(P,{label:"6",onClick:()=>R("6")}),l.jsx(P,{label:"-",onClick:()=>M("-"),accent:!0}),l.jsx(P,{label:"+",onClick:()=>M("+"),accent:!0}),l.jsx(P,{label:".",onClick:()=>R(".")}),l.jsx(P,{label:"1",onClick:()=>R("1")}),l.jsx(P,{label:"2",onClick:()=>R("2")}),l.jsx(P,{label:"3",onClick:()=>R("3")}),l.jsx(P,{label:"0",onClick:()=>R("0")}),l.jsx(P,{label:"0",onClick:()=>R("0")}),l.jsx(P,{label:"00",onClick:()=>{R("0"),R("0")}})]})]}),fe=["A","B","C","D","E","F"],Q=l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[["Hex",16],["Dec",10],["Oct",8],["Bin",2]].map(([H,A])=>l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:k===A,onChange:()=>ce(A)})," ",H]},A))}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(P,{label:"And",onClick:()=>M("And"),accent:!0}),l.jsx(P,{label:"Or",onClick:()=>M("Or"),accent:!0}),l.jsx(P,{label:"Xor",onClick:()=>M("Xor"),accent:!0}),l.jsx(P,{label:"Not",onClick:()=>de(H=>~Math.trunc(H)>>>0),accent:!0}),l.jsx(P,{label:"Lsh",onClick:()=>M("Lsh"),accent:!0}),l.jsx(P,{label:"Rsh",onClick:()=>M("Rsh"),accent:!0}),l.jsx(P,{label:"Mod",onClick:()=>M("Mod"),accent:!0}),l.jsx(P,{label:"C",onClick:Z,kind:"clr"}),l.jsx(P,{label:"CE",onClick:ne,kind:"clr"}),l.jsx(P,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(P,{label:"±",onClick:()=>de(H=>-Math.trunc(H))}),l.jsx(P,{label:"=",onClick:V,kind:"eq"}),fe.slice(0,3).map(H=>l.jsx(P,{label:H,onClick:()=>R(H)},H)),l.jsx(P,{label:"7",onClick:()=>R("7")}),l.jsx(P,{label:"8",onClick:()=>R("8")}),l.jsx(P,{label:"9",onClick:()=>R("9")}),fe.slice(3).map(H=>l.jsx(P,{label:H,onClick:()=>R(H)},H)),l.jsx(P,{label:"4",onClick:()=>R("4")}),l.jsx(P,{label:"5",onClick:()=>R("5")}),l.jsx(P,{label:"6",onClick:()=>R("6")}),l.jsx(P,{label:"÷",onClick:()=>M("÷"),accent:!0}),l.jsx(P,{label:"×",onClick:()=>M("×"),accent:!0}),l.jsx(P,{label:"-",onClick:()=>M("-"),accent:!0}),l.jsx(P,{label:"1",onClick:()=>R("1")}),l.jsx(P,{label:"2",onClick:()=>R("2")}),l.jsx(P,{label:"3",onClick:()=>R("3")}),l.jsx(P,{label:"+",onClick:()=>M("+"),accent:!0}),l.jsx(P,{label:"0",onClick:()=>R("0"),w:92})]})]}),Y=y==="standard"?252:300,re=y==="programmer"?{16:"HEX",10:"DEC",8:"OCT",2:"BIN"}[k]:y==="scientific"?E?"DEG":"RAD":"";return l.jsxs("div",{ref:$,tabIndex:0,onKeyDown:F,style:{outline:"none",width:Y},children:[l.jsxs(bn,{children:[l.jsx(Be,{label:"View",children:["standard","scientific","programmer"].map(H=>l.jsxs(Re,{onMouseDown:A=>{A.preventDefault(),w(H),Z(),H!=="programmer"&&T(10)},style:{textTransform:"capitalize"},children:[y===H?"● ":"○ ",H]},H))}),l.jsx(Be,{label:"Edit",children:l.jsx(Re,{onMouseDown:H=>{var A;H.preventDefault(),(A=navigator.clipboard)==null||A.writeText(e).catch(()=>{})},children:"Copy"})}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Calculator — VortexOS"})})]}),l.jsxs("div",{style:{padding:8},children:[l.jsxs(pt,{variant:"well",style:{width:"100%",boxSizing:"border-box",display:"block",padding:"4px 8px",marginBottom:8,overflow:"hidden",background:"#cfe3cf"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#3a5a3a",height:14,fontFamily:"monospace"},children:[l.jsx("span",{children:h!==0?"M":""}),l.jsx("span",{children:[a??"",re].filter(Boolean).join("  ")})]}),l.jsx("div",{style:{textAlign:"right",fontFamily:"'Courier New', monospace",fontWeight:"bold",fontSize:28,color:"#0c2a0c",lineHeight:1.1,letterSpacing:1,overflow:"hidden",textOverflow:"ellipsis"},children:e})]}),z,y==="standard"&&ee,y==="scientific"&&ue,y==="programmer"&&Q]})]})};function ov(e,n){return function(){return e.apply(n,arguments)}}const{toString:$T}=Object.prototype,{getPrototypeOf:Op}=Object,ac=(e=>n=>{const o=$T.call(n);return e[o]||(e[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),On=e=>(e=e.toLowerCase(),n=>ac(n)===e),cc=e=>n=>typeof n===e,{isArray:mi}=Array,js=cc("undefined");function TT(e){return e!==null&&!js(e)&&e.constructor!==null&&!js(e.constructor)&&an(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const iv=On("ArrayBuffer");function AT(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&iv(e.buffer),n}const RT=cc("string"),an=cc("function"),sv=cc("number"),uc=e=>e!==null&&typeof e=="object",DT=e=>e===!0||e===!1,wa=e=>{if(ac(e)!=="object")return!1;const n=Op(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},IT=On("Date"),PT=On("File"),NT=On("Blob"),MT=On("FileList"),LT=e=>uc(e)&&an(e.pipe),OT=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||an(e.append)&&((n=ac(e))==="formdata"||n==="object"&&an(e.toString)&&e.toString()==="[object FormData]"))},zT=On("URLSearchParams"),[_T,FT,BT,WT]=["ReadableStream","Request","Response","Headers"].map(On),HT=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ns(e,n,{allOwnKeys:o=!1}={}){if(e===null||typeof e>"u")return;let i,a;if(typeof e!="object"&&(e=[e]),mi(e))for(i=0,a=e.length;i<a;i++)n.call(null,e[i],i,e);else{const u=o?Object.getOwnPropertyNames(e):Object.keys(e),d=u.length;let p;for(i=0;i<d;i++)p=u[i],n.call(null,e[p],p,e)}}function lv(e,n){n=n.toLowerCase();const o=Object.keys(e);let i=o.length,a;for(;i-- >0;)if(a=o[i],n===a.toLowerCase())return a;return null}const uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,av=e=>!js(e)&&e!==uo;function Uf(){const{caseless:e}=av(this)&&this||{},n={},o=(i,a)=>{const u=e&&lv(n,a)||a;wa(n[u])&&wa(i)?n[u]=Uf(n[u],i):wa(i)?n[u]=Uf({},i):mi(i)?n[u]=i.slice():n[u]=i};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&Ns(arguments[i],o);return n}const UT=(e,n,o,{allOwnKeys:i}={})=>(Ns(n,(a,u)=>{o&&an(a)?e[u]=ov(a,o):e[u]=a},{allOwnKeys:i}),e),VT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),KT=(e,n,o,i)=>{e.prototype=Object.create(n.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),o&&Object.assign(e.prototype,o)},QT=(e,n,o,i)=>{let a,u,d;const p={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),u=a.length;u-- >0;)d=a[u],(!i||i(d,e,n))&&!p[d]&&(n[d]=e[d],p[d]=!0);e=o!==!1&&Op(e)}while(e&&(!o||o(e,n))&&e!==Object.prototype);return n},qT=(e,n,o)=>{e=String(e),(o===void 0||o>e.length)&&(o=e.length),o-=n.length;const i=e.indexOf(n,o);return i!==-1&&i===o},GT=e=>{if(!e)return null;if(mi(e))return e;let n=e.length;if(!sv(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=e[n];return o},YT=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Op(Uint8Array)),XT=(e,n)=>{const i=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=i.next())&&!a.done;){const u=a.value;n.call(e,u[0],u[1])}},JT=(e,n)=>{let o;const i=[];for(;(o=e.exec(n))!==null;)i.push(o);return i},ZT=On("HTMLFormElement"),eA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,i,a){return i.toUpperCase()+a}),lx=(({hasOwnProperty:e})=>(n,o)=>e.call(n,o))(Object.prototype),tA=On("RegExp"),cv=(e,n)=>{const o=Object.getOwnPropertyDescriptors(e),i={};Ns(o,(a,u)=>{let d;(d=n(a,u,e))!==!1&&(i[u]=d||a)}),Object.defineProperties(e,i)},nA=e=>{cv(e,(n,o)=>{if(an(e)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const i=e[o];if(an(i)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},rA=(e,n)=>{const o={},i=a=>{a.forEach(u=>{o[u]=!0})};return mi(e)?i(e):i(String(e).split(n)),o},oA=()=>{},iA=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n,zd="abcdefghijklmnopqrstuvwxyz",ax="0123456789",uv={DIGIT:ax,ALPHA:zd,ALPHA_DIGIT:zd+zd.toUpperCase()+ax},sA=(e=16,n=uv.ALPHA_DIGIT)=>{let o="";const{length:i}=n;for(;e--;)o+=n[Math.random()*i|0];return o};function lA(e){return!!(e&&an(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const aA=e=>{const n=new Array(10),o=(i,a)=>{if(uc(i)){if(n.indexOf(i)>=0)return;if(!("toJSON"in i)){n[a]=i;const u=mi(i)?[]:{};return Ns(i,(d,p)=>{const h=o(d,a+1);!js(h)&&(u[p]=h)}),n[a]=void 0,u}}return i};return o(e,0)},cA=On("AsyncFunction"),uA=e=>e&&(uc(e)||an(e))&&an(e.then)&&an(e.catch),dv=((e,n)=>e?setImmediate:n?((o,i)=>(uo.addEventListener("message",({source:a,data:u})=>{a===uo&&u===o&&i.length&&i.shift()()},!1),a=>{i.push(a),uo.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",an(uo.postMessage)),dA=typeof queueMicrotask<"u"?queueMicrotask.bind(uo):typeof process<"u"&&process.nextTick||dv,te={isArray:mi,isArrayBuffer:iv,isBuffer:TT,isFormData:OT,isArrayBufferView:AT,isString:RT,isNumber:sv,isBoolean:DT,isObject:uc,isPlainObject:wa,isReadableStream:_T,isRequest:FT,isResponse:BT,isHeaders:WT,isUndefined:js,isDate:IT,isFile:PT,isBlob:NT,isRegExp:tA,isFunction:an,isStream:LT,isURLSearchParams:zT,isTypedArray:YT,isFileList:MT,forEach:Ns,merge:Uf,extend:UT,trim:HT,stripBOM:VT,inherits:KT,toFlatObject:QT,kindOf:ac,kindOfTest:On,endsWith:qT,toArray:GT,forEachEntry:XT,matchAll:JT,isHTMLForm:ZT,hasOwnProperty:lx,hasOwnProp:lx,reduceDescriptors:cv,freezeMethods:nA,toObjectSet:rA,toCamelCase:eA,noop:oA,toFiniteNumber:iA,findKey:lv,global:uo,isContextDefined:av,ALPHABET:uv,generateString:sA,isSpecCompliantForm:lA,toJSONObject:aA,isAsyncFn:cA,isThenable:uA,setImmediate:dv,asap:dA};function De(e,n,o,i,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),i&&(this.request=i),a&&(this.response=a,this.status=a.status?a.status:null)}te.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:te.toJSONObject(this.config),code:this.code,status:this.status}}});const fv=De.prototype,pv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{pv[e]={value:e}});Object.defineProperties(De,pv);Object.defineProperty(fv,"isAxiosError",{value:!0});De.from=(e,n,o,i,a,u)=>{const d=Object.create(fv);return te.toFlatObject(e,d,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),De.call(d,e.message,n,o,i,a),d.cause=e,d.name=e.name,u&&Object.assign(d,u),d};const fA=null;function Vf(e){return te.isPlainObject(e)||te.isArray(e)}function hv(e){return te.endsWith(e,"[]")?e.slice(0,-2):e}function cx(e,n,o){return e?e.concat(n).map(function(a,u){return a=hv(a),!o&&u?"["+a+"]":a}).join(o?".":""):n}function pA(e){return te.isArray(e)&&!e.some(Vf)}const hA=te.toFlatObject(te,{},null,function(n){return/^is[A-Z]/.test(n)});function dc(e,n,o){if(!te.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,o=te.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,$){return!te.isUndefined($[C])});const i=o.metaTokens,a=o.visitor||y,u=o.dots,d=o.indexes,h=(o.Blob||typeof Blob<"u"&&Blob)&&te.isSpecCompliantForm(n);if(!te.isFunction(a))throw new TypeError("visitor must be a function");function m(E){if(E===null)return"";if(te.isDate(E))return E.toISOString();if(!h&&te.isBlob(E))throw new De("Blob is not supported. Use a Buffer instead.");return te.isArrayBuffer(E)||te.isTypedArray(E)?h&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function y(E,C,$){let b=E;if(E&&!$&&typeof E=="object"){if(te.endsWith(C,"{}"))C=i?C:C.slice(0,-2),E=JSON.stringify(E);else if(te.isArray(E)&&pA(E)||(te.isFileList(E)||te.endsWith(C,"[]"))&&(b=te.toArray(E)))return C=hv(C),b.forEach(function(S,R){!(te.isUndefined(S)||S===null)&&n.append(d===!0?cx([C],R,u):d===null?C:C+"[]",m(S))}),!1}return Vf(E)?!0:(n.append(cx($,C,u),m(E)),!1)}const w=[],k=Object.assign(hA,{defaultVisitor:y,convertValue:m,isVisitable:Vf});function T(E,C){if(!te.isUndefined(E)){if(w.indexOf(E)!==-1)throw Error("Circular reference detected in "+C.join("."));w.push(E),te.forEach(E,function(b,j){(!(te.isUndefined(b)||b===null)&&a.call(n,b,te.isString(j)?j.trim():j,C,k))===!0&&T(b,C?C.concat(j):[j])}),w.pop()}}if(!te.isObject(e))throw new TypeError("data must be an object");return T(e),n}function ux(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return n[i]})}function zp(e,n){this._pairs=[],e&&dc(e,this,n)}const mv=zp.prototype;mv.append=function(n,o){this._pairs.push([n,o])};mv.toString=function(n){const o=n?function(i){return n.call(this,i,ux)}:ux;return this._pairs.map(function(a){return o(a[0])+"="+o(a[1])},"").join("&")};function mA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function gv(e,n,o){if(!n)return e;const i=o&&o.encode||mA;te.isFunction(o)&&(o={serialize:o});const a=o&&o.serialize;let u;if(a?u=a(n,o):u=te.isURLSearchParams(n)?n.toString():new zp(n,o).toString(i),u){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class dx{constructor(){this.handlers=[]}use(n,o,i){return this.handlers.push({fulfilled:n,rejected:o,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){te.forEach(this.handlers,function(i){i!==null&&n(i)})}}const xv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gA=typeof URLSearchParams<"u"?URLSearchParams:zp,xA=typeof FormData<"u"?FormData:null,yA=typeof Blob<"u"?Blob:null,wA={isBrowser:!0,classes:{URLSearchParams:gA,FormData:xA,Blob:yA},protocols:["http","https","file","blob","url","data"]},_p=typeof window<"u"&&typeof document<"u",Kf=typeof navigator=="object"&&navigator||void 0,vA=_p&&(!Kf||["ReactNative","NativeScript","NS"].indexOf(Kf.product)<0),bA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kA=_p&&window.location.href||"http://localhost",SA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_p,hasStandardBrowserEnv:vA,hasStandardBrowserWebWorkerEnv:bA,navigator:Kf,origin:kA},Symbol.toStringTag,{value:"Module"})),Mt={...SA,...wA};function jA(e,n){return dc(e,new Mt.classes.URLSearchParams,Object.assign({visitor:function(o,i,a,u){return Mt.isNode&&te.isBuffer(o)?(this.append(i,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function CA(e){return te.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function EA(e){const n={},o=Object.keys(e);let i;const a=o.length;let u;for(i=0;i<a;i++)u=o[i],n[u]=e[u];return n}function yv(e){function n(o,i,a,u){let d=o[u++];if(d==="__proto__")return!0;const p=Number.isFinite(+d),h=u>=o.length;return d=!d&&te.isArray(a)?a.length:d,h?(te.hasOwnProp(a,d)?a[d]=[a[d],i]:a[d]=i,!p):((!a[d]||!te.isObject(a[d]))&&(a[d]=[]),n(o,i,a[d],u)&&te.isArray(a[d])&&(a[d]=EA(a[d])),!p)}if(te.isFormData(e)&&te.isFunction(e.entries)){const o={};return te.forEachEntry(e,(i,a)=>{n(CA(i),a,o,0)}),o}return null}function $A(e,n,o){if(te.isString(e))try{return(n||JSON.parse)(e),te.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(o||JSON.stringify)(e)}const Ms={transitional:xv,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const i=o.getContentType()||"",a=i.indexOf("application/json")>-1,u=te.isObject(n);if(u&&te.isHTMLForm(n)&&(n=new FormData(n)),te.isFormData(n))return a?JSON.stringify(yv(n)):n;if(te.isArrayBuffer(n)||te.isBuffer(n)||te.isStream(n)||te.isFile(n)||te.isBlob(n)||te.isReadableStream(n))return n;if(te.isArrayBufferView(n))return n.buffer;if(te.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let p;if(u){if(i.indexOf("application/x-www-form-urlencoded")>-1)return jA(n,this.formSerializer).toString();if((p=te.isFileList(n))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return dc(p?{"files[]":n}:n,h&&new h,this.formSerializer)}}return u||a?(o.setContentType("application/json",!1),$A(n)):n}],transformResponse:[function(n){const o=this.transitional||Ms.transitional,i=o&&o.forcedJSONParsing,a=this.responseType==="json";if(te.isResponse(n)||te.isReadableStream(n))return n;if(n&&te.isString(n)&&(i&&!this.responseType||a)){const d=!(o&&o.silentJSONParsing)&&a;try{return JSON.parse(n)}catch(p){if(d)throw p.name==="SyntaxError"?De.from(p,De.ERR_BAD_RESPONSE,this,null,this.response):p}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mt.classes.FormData,Blob:Mt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};te.forEach(["delete","get","head","post","put","patch"],e=>{Ms.headers[e]={}});const TA=te.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),AA=e=>{const n={};let o,i,a;return e&&e.split(`
`).forEach(function(d){a=d.indexOf(":"),o=d.substring(0,a).trim().toLowerCase(),i=d.substring(a+1).trim(),!(!o||n[o]&&TA[o])&&(o==="set-cookie"?n[o]?n[o].push(i):n[o]=[i]:n[o]=n[o]?n[o]+", "+i:i)}),n},fx=Symbol("internals");function ls(e){return e&&String(e).trim().toLowerCase()}function va(e){return e===!1||e==null?e:te.isArray(e)?e.map(va):String(e)}function RA(e){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=o.exec(e);)n[i[1]]=i[2];return n}const DA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function _d(e,n,o,i,a){if(te.isFunction(i))return i.call(this,n,o);if(a&&(n=o),!!te.isString(n)){if(te.isString(i))return n.indexOf(i)!==-1;if(te.isRegExp(i))return i.test(n)}}function IA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,i)=>o.toUpperCase()+i)}function PA(e,n){const o=te.toCamelCase(" "+n);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+o,{value:function(a,u,d){return this[i].call(this,n,a,u,d)},configurable:!0})})}class Gt{constructor(n){n&&this.set(n)}set(n,o,i){const a=this;function u(p,h,m){const y=ls(h);if(!y)throw new Error("header name must be a non-empty string");const w=te.findKey(a,y);(!w||a[w]===void 0||m===!0||m===void 0&&a[w]!==!1)&&(a[w||h]=va(p))}const d=(p,h)=>te.forEach(p,(m,y)=>u(m,y,h));if(te.isPlainObject(n)||n instanceof this.constructor)d(n,o);else if(te.isString(n)&&(n=n.trim())&&!DA(n))d(AA(n),o);else if(te.isHeaders(n))for(const[p,h]of n.entries())u(h,p,i);else n!=null&&u(o,n,i);return this}get(n,o){if(n=ls(n),n){const i=te.findKey(this,n);if(i){const a=this[i];if(!o)return a;if(o===!0)return RA(a);if(te.isFunction(o))return o.call(this,a,i);if(te.isRegExp(o))return o.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=ls(n),n){const i=te.findKey(this,n);return!!(i&&this[i]!==void 0&&(!o||_d(this,this[i],i,o)))}return!1}delete(n,o){const i=this;let a=!1;function u(d){if(d=ls(d),d){const p=te.findKey(i,d);p&&(!o||_d(i,i[p],p,o))&&(delete i[p],a=!0)}}return te.isArray(n)?n.forEach(u):u(n),a}clear(n){const o=Object.keys(this);let i=o.length,a=!1;for(;i--;){const u=o[i];(!n||_d(this,this[u],u,n,!0))&&(delete this[u],a=!0)}return a}normalize(n){const o=this,i={};return te.forEach(this,(a,u)=>{const d=te.findKey(i,u);if(d){o[d]=va(a),delete o[u];return}const p=n?IA(u):String(u).trim();p!==u&&delete o[u],o[p]=va(a),i[p]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return te.forEach(this,(i,a)=>{i!=null&&i!==!1&&(o[a]=n&&te.isArray(i)?i.join(", "):i)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const i=new this(n);return o.forEach(a=>i.set(a)),i}static accessor(n){const i=(this[fx]=this[fx]={accessors:{}}).accessors,a=this.prototype;function u(d){const p=ls(d);i[p]||(PA(a,d),i[p]=!0)}return te.isArray(n)?n.forEach(u):u(n),this}}Gt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);te.reduceDescriptors(Gt.prototype,({value:e},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(i){this[o]=i}}});te.freezeMethods(Gt);function Fd(e,n){const o=this||Ms,i=n||o,a=Gt.from(i.headers);let u=i.data;return te.forEach(e,function(p){u=p.call(o,u,a.normalize(),n?n.status:void 0)}),a.normalize(),u}function wv(e){return!!(e&&e.__CANCEL__)}function gi(e,n,o){De.call(this,e??"canceled",De.ERR_CANCELED,n,o),this.name="CanceledError"}te.inherits(gi,De,{__CANCEL__:!0});function vv(e,n,o){const i=o.config.validateStatus;!o.status||!i||i(o.status)?e(o):n(new De("Request failed with status code "+o.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function NA(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function MA(e,n){e=e||10;const o=new Array(e),i=new Array(e);let a=0,u=0,d;return n=n!==void 0?n:1e3,function(h){const m=Date.now(),y=i[u];d||(d=m),o[a]=h,i[a]=m;let w=u,k=0;for(;w!==a;)k+=o[w++],w=w%e;if(a=(a+1)%e,a===u&&(u=(u+1)%e),m-d<n)return;const T=y&&m-y;return T?Math.round(k*1e3/T):void 0}}function LA(e,n){let o=0,i=1e3/n,a,u;const d=(m,y=Date.now())=>{o=y,a=null,u&&(clearTimeout(u),u=null),e.apply(null,m)};return[(...m)=>{const y=Date.now(),w=y-o;w>=i?d(m,y):(a=m,u||(u=setTimeout(()=>{u=null,d(a)},i-w)))},()=>a&&d(a)]}const La=(e,n,o=3)=>{let i=0;const a=MA(50,250);return LA(u=>{const d=u.loaded,p=u.lengthComputable?u.total:void 0,h=d-i,m=a(h),y=d<=p;i=d;const w={loaded:d,total:p,progress:p?d/p:void 0,bytes:h,rate:m||void 0,estimated:m&&p&&y?(p-d)/m:void 0,event:u,lengthComputable:p!=null,[n?"download":"upload"]:!0};e(w)},o)},px=(e,n)=>{const o=e!=null;return[i=>n[0]({lengthComputable:o,total:e,loaded:i}),n[1]]},hx=e=>(...n)=>te.asap(()=>e(...n)),OA=Mt.hasStandardBrowserEnv?((e,n)=>o=>(o=new URL(o,Mt.origin),e.protocol===o.protocol&&e.host===o.host&&(n||e.port===o.port)))(new URL(Mt.origin),Mt.navigator&&/(msie|trident)/i.test(Mt.navigator.userAgent)):()=>!0,zA=Mt.hasStandardBrowserEnv?{write(e,n,o,i,a,u){const d=[e+"="+encodeURIComponent(n)];te.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),te.isString(i)&&d.push("path="+i),te.isString(a)&&d.push("domain="+a),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function _A(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function FA(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function bv(e,n){return e&&!_A(n)?FA(e,n):n}const mx=e=>e instanceof Gt?{...e}:e;function wo(e,n){n=n||{};const o={};function i(m,y,w,k){return te.isPlainObject(m)&&te.isPlainObject(y)?te.merge.call({caseless:k},m,y):te.isPlainObject(y)?te.merge({},y):te.isArray(y)?y.slice():y}function a(m,y,w,k){if(te.isUndefined(y)){if(!te.isUndefined(m))return i(void 0,m,w,k)}else return i(m,y,w,k)}function u(m,y){if(!te.isUndefined(y))return i(void 0,y)}function d(m,y){if(te.isUndefined(y)){if(!te.isUndefined(m))return i(void 0,m)}else return i(void 0,y)}function p(m,y,w){if(w in n)return i(m,y);if(w in e)return i(void 0,m)}const h={url:u,method:u,data:u,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:p,headers:(m,y,w)=>a(mx(m),mx(y),w,!0)};return te.forEach(Object.keys(Object.assign({},e,n)),function(y){const w=h[y]||a,k=w(e[y],n[y],y);te.isUndefined(k)&&w!==p||(o[y]=k)}),o}const kv=e=>{const n=wo({},e);let{data:o,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:u,headers:d,auth:p}=n;n.headers=d=Gt.from(d),n.url=gv(bv(n.baseURL,n.url),e.params,e.paramsSerializer),p&&d.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(te.isFormData(o)){if(Mt.hasStandardBrowserEnv||Mt.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((h=d.getContentType())!==!1){const[m,...y]=h?h.split(";").map(w=>w.trim()).filter(Boolean):[];d.setContentType([m||"multipart/form-data",...y].join("; "))}}if(Mt.hasStandardBrowserEnv&&(i&&te.isFunction(i)&&(i=i(n)),i||i!==!1&&OA(n.url))){const m=a&&u&&zA.read(u);m&&d.set(a,m)}return n},BA=typeof XMLHttpRequest<"u",WA=BA&&function(e){return new Promise(function(o,i){const a=kv(e);let u=a.data;const d=Gt.from(a.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:m}=a,y,w,k,T,E;function C(){T&&T(),E&&E(),a.cancelToken&&a.cancelToken.unsubscribe(y),a.signal&&a.signal.removeEventListener("abort",y)}let $=new XMLHttpRequest;$.open(a.method.toUpperCase(),a.url,!0),$.timeout=a.timeout;function b(){if(!$)return;const S=Gt.from("getAllResponseHeaders"in $&&$.getAllResponseHeaders()),M={data:!p||p==="text"||p==="json"?$.responseText:$.response,status:$.status,statusText:$.statusText,headers:S,config:e,request:$};vv(function(Z){o(Z),C()},function(Z){i(Z),C()},M),$=null}"onloadend"in $?$.onloadend=b:$.onreadystatechange=function(){!$||$.readyState!==4||$.status===0&&!($.responseURL&&$.responseURL.indexOf("file:")===0)||setTimeout(b)},$.onabort=function(){$&&(i(new De("Request aborted",De.ECONNABORTED,e,$)),$=null)},$.onerror=function(){i(new De("Network Error",De.ERR_NETWORK,e,$)),$=null},$.ontimeout=function(){let R=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const M=a.transitional||xv;a.timeoutErrorMessage&&(R=a.timeoutErrorMessage),i(new De(R,M.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,e,$)),$=null},u===void 0&&d.setContentType(null),"setRequestHeader"in $&&te.forEach(d.toJSON(),function(R,M){$.setRequestHeader(M,R)}),te.isUndefined(a.withCredentials)||($.withCredentials=!!a.withCredentials),p&&p!=="json"&&($.responseType=a.responseType),m&&([k,E]=La(m,!0),$.addEventListener("progress",k)),h&&$.upload&&([w,T]=La(h),$.upload.addEventListener("progress",w),$.upload.addEventListener("loadend",T)),(a.cancelToken||a.signal)&&(y=S=>{$&&(i(!S||S.type?new gi(null,e,$):S),$.abort(),$=null)},a.cancelToken&&a.cancelToken.subscribe(y),a.signal&&(a.signal.aborted?y():a.signal.addEventListener("abort",y)));const j=NA(a.url);if(j&&Mt.protocols.indexOf(j)===-1){i(new De("Unsupported protocol "+j+":",De.ERR_BAD_REQUEST,e));return}$.send(u||null)})},HA=(e,n)=>{const{length:o}=e=e?e.filter(Boolean):[];if(n||o){let i=new AbortController,a;const u=function(m){if(!a){a=!0,p();const y=m instanceof Error?m:this.reason;i.abort(y instanceof De?y:new gi(y instanceof Error?y.message:y))}};let d=n&&setTimeout(()=>{d=null,u(new De(`timeout ${n} of ms exceeded`,De.ETIMEDOUT))},n);const p=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(u):m.removeEventListener("abort",u)}),e=null)};e.forEach(m=>m.addEventListener("abort",u));const{signal:h}=i;return h.unsubscribe=()=>te.asap(p),h}},UA=function*(e,n){let o=e.byteLength;if(o<n){yield e;return}let i=0,a;for(;i<o;)a=i+n,yield e.slice(i,a),i=a},VA=async function*(e,n){for await(const o of KA(e))yield*UA(o,n)},KA=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:o,value:i}=await n.read();if(o)break;yield i}}finally{await n.cancel()}},gx=(e,n,o,i)=>{const a=VA(e,n);let u=0,d,p=h=>{d||(d=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:m,value:y}=await a.next();if(m){p(),h.close();return}let w=y.byteLength;if(o){let k=u+=w;o(k)}h.enqueue(new Uint8Array(y))}catch(m){throw p(m),m}},cancel(h){return p(h),a.return()}},{highWaterMark:2})},fc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Sv=fc&&typeof ReadableStream=="function",QA=fc&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),jv=(e,...n)=>{try{return!!e(...n)}catch{return!1}},qA=Sv&&jv(()=>{let e=!1;const n=new Request(Mt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),xx=64*1024,Qf=Sv&&jv(()=>te.isReadableStream(new Response("").body)),Oa={stream:Qf&&(e=>e.body)};fc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Oa[n]&&(Oa[n]=te.isFunction(e[n])?o=>o[n]():(o,i)=>{throw new De(`Response type '${n}' is not supported`,De.ERR_NOT_SUPPORT,i)})})})(new Response);const GA=async e=>{if(e==null)return 0;if(te.isBlob(e))return e.size;if(te.isSpecCompliantForm(e))return(await new Request(Mt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(te.isArrayBufferView(e)||te.isArrayBuffer(e))return e.byteLength;if(te.isURLSearchParams(e)&&(e=e+""),te.isString(e))return(await QA(e)).byteLength},YA=async(e,n)=>{const o=te.toFiniteNumber(e.getContentLength());return o??GA(n)},XA=fc&&(async e=>{let{url:n,method:o,data:i,signal:a,cancelToken:u,timeout:d,onDownloadProgress:p,onUploadProgress:h,responseType:m,headers:y,withCredentials:w="same-origin",fetchOptions:k}=kv(e);m=m?(m+"").toLowerCase():"text";let T=HA([a,u&&u.toAbortSignal()],d),E;const C=T&&T.unsubscribe&&(()=>{T.unsubscribe()});let $;try{if(h&&qA&&o!=="get"&&o!=="head"&&($=await YA(y,i))!==0){let M=new Request(n,{method:"POST",body:i,duplex:"half"}),V;if(te.isFormData(i)&&(V=M.headers.get("content-type"))&&y.setContentType(V),M.body){const[Z,ne]=px($,La(hx(h)));i=gx(M.body,xx,Z,ne)}}te.isString(w)||(w=w?"include":"omit");const b="credentials"in Request.prototype;E=new Request(n,{...k,signal:T,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:b?w:void 0});let j=await fetch(E);const S=Qf&&(m==="stream"||m==="response");if(Qf&&(p||S&&C)){const M={};["status","statusText","headers"].forEach(ie=>{M[ie]=j[ie]});const V=te.toFiniteNumber(j.headers.get("content-length")),[Z,ne]=p&&px(V,La(hx(p),!0))||[];j=new Response(gx(j.body,xx,Z,()=>{ne&&ne(),C&&C()}),M)}m=m||"text";let R=await Oa[te.findKey(Oa,m)||"text"](j,e);return!S&&C&&C(),await new Promise((M,V)=>{vv(M,V,{data:R,headers:Gt.from(j.headers),status:j.status,statusText:j.statusText,config:e,request:E})})}catch(b){throw C&&C(),b&&b.name==="TypeError"&&/fetch/i.test(b.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,e,E),{cause:b.cause||b}):De.from(b,b&&b.code,e,E)}}),qf={http:fA,xhr:WA,fetch:XA};te.forEach(qf,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const yx=e=>`- ${e}`,JA=e=>te.isFunction(e)||e===null||e===!1,Cv={getAdapter:e=>{e=te.isArray(e)?e:[e];const{length:n}=e;let o,i;const a={};for(let u=0;u<n;u++){o=e[u];let d;if(i=o,!JA(o)&&(i=qf[(d=String(o)).toLowerCase()],i===void 0))throw new De(`Unknown adapter '${d}'`);if(i)break;a[d||"#"+u]=i}if(!i){const u=Object.entries(a).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let d=n?u.length>1?`since :
`+u.map(yx).join(`
`):" "+yx(u[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return i},adapters:qf};function Bd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new gi(null,e)}function wx(e){return Bd(e),e.headers=Gt.from(e.headers),e.data=Fd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Cv.getAdapter(e.adapter||Ms.adapter)(e).then(function(i){return Bd(e),i.data=Fd.call(e,e.transformResponse,i),i.headers=Gt.from(i.headers),i},function(i){return wv(i)||(Bd(e),i&&i.response&&(i.response.data=Fd.call(e,e.transformResponse,i.response),i.response.headers=Gt.from(i.response.headers))),Promise.reject(i)})}const Ev="1.7.9",pc={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{pc[e]=function(i){return typeof i===e||"a"+(n<1?"n ":" ")+e}});const vx={};pc.transitional=function(n,o,i){function a(u,d){return"[Axios v"+Ev+"] Transitional option '"+u+"'"+d+(i?". "+i:"")}return(u,d,p)=>{if(n===!1)throw new De(a(d," has been removed"+(o?" in "+o:"")),De.ERR_DEPRECATED);return o&&!vx[d]&&(vx[d]=!0,console.warn(a(d," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(u,d,p):!0}};pc.spelling=function(n){return(o,i)=>(console.warn(`${i} is likely a misspelling of ${n}`),!0)};function ZA(e,n,o){if(typeof e!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let a=i.length;for(;a-- >0;){const u=i[a],d=n[u];if(d){const p=e[u],h=p===void 0||d(p,u,e);if(h!==!0)throw new De("option "+u+" must be "+h,De.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new De("Unknown option "+u,De.ERR_BAD_OPTION)}}const ba={assertOptions:ZA,validators:pc},Un=ba.validators;class po{constructor(n){this.defaults=n,this.interceptors={request:new dx,response:new dx}}async request(n,o){try{return await this._request(n,o)}catch(i){if(i instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{i.stack?u&&!String(i.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+u):i.stack=u}catch{}}throw i}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=wo(this.defaults,o);const{transitional:i,paramsSerializer:a,headers:u}=o;i!==void 0&&ba.assertOptions(i,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),a!=null&&(te.isFunction(a)?o.paramsSerializer={serialize:a}:ba.assertOptions(a,{encode:Un.function,serialize:Un.function},!0)),ba.assertOptions(o,{baseUrl:Un.spelling("baseURL"),withXsrfToken:Un.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let d=u&&te.merge(u.common,u[o.method]);u&&te.forEach(["delete","get","head","post","put","patch","common"],E=>{delete u[E]}),o.headers=Gt.concat(d,u);const p=[];let h=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(o)===!1||(h=h&&C.synchronous,p.unshift(C.fulfilled,C.rejected))});const m=[];this.interceptors.response.forEach(function(C){m.push(C.fulfilled,C.rejected)});let y,w=0,k;if(!h){const E=[wx.bind(this),void 0];for(E.unshift.apply(E,p),E.push.apply(E,m),k=E.length,y=Promise.resolve(o);w<k;)y=y.then(E[w++],E[w++]);return y}k=p.length;let T=o;for(w=0;w<k;){const E=p[w++],C=p[w++];try{T=E(T)}catch($){C.call(this,$);break}}try{y=wx.call(this,T)}catch(E){return Promise.reject(E)}for(w=0,k=m.length;w<k;)y=y.then(m[w++],m[w++]);return y}getUri(n){n=wo(this.defaults,n);const o=bv(n.baseURL,n.url);return gv(o,n.params,n.paramsSerializer)}}te.forEach(["delete","get","head","options"],function(n){po.prototype[n]=function(o,i){return this.request(wo(i||{},{method:n,url:o,data:(i||{}).data}))}});te.forEach(["post","put","patch"],function(n){function o(i){return function(u,d,p){return this.request(wo(p||{},{method:n,headers:i?{"Content-Type":"multipart/form-data"}:{},url:u,data:d}))}}po.prototype[n]=o(),po.prototype[n+"Form"]=o(!0)});class Fp{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const i=this;this.promise.then(a=>{if(!i._listeners)return;let u=i._listeners.length;for(;u-- >0;)i._listeners[u](a);i._listeners=null}),this.promise.then=a=>{let u;const d=new Promise(p=>{i.subscribe(p),u=p}).then(a);return d.cancel=function(){i.unsubscribe(u)},d},n(function(u,d,p){i.reason||(i.reason=new gi(u,d,p),o(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=i=>{n.abort(i)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new Fp(function(a){n=a}),cancel:n}}}function eR(e){return function(o){return e.apply(null,o)}}function tR(e){return te.isObject(e)&&e.isAxiosError===!0}const Gf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Gf).forEach(([e,n])=>{Gf[n]=e});function $v(e){const n=new po(e),o=ov(po.prototype.request,n);return te.extend(o,po.prototype,n,{allOwnKeys:!0}),te.extend(o,n,null,{allOwnKeys:!0}),o.create=function(a){return $v(wo(e,a))},o}const Ve=$v(Ms);Ve.Axios=po;Ve.CanceledError=gi;Ve.CancelToken=Fp;Ve.isCancel=wv;Ve.VERSION=Ev;Ve.toFormData=dc;Ve.AxiosError=De;Ve.Cancel=Ve.CanceledError;Ve.all=function(n){return Promise.all(n)};Ve.spread=eR;Ve.isAxiosError=tR;Ve.mergeConfig=wo;Ve.AxiosHeaders=Gt;Ve.formToJSON=e=>yv(te.isHTMLForm(e)?new FormData(e):e);Ve.getAdapter=Cv.getAdapter;Ve.HttpStatusCode=Gf;Ve.default=Ve;const Tv="http://localhost:8082";async function hc(e,n){try{await Ve.post(`${Tv}/scores`,{game:e,value:n})}catch{}}async function nR(e,n="desc"){try{const o=await Ve.get(`${Tv}/scores`,{params:{game:e,order:n}});return Array.isArray(o.data)?o.data:[]}catch{return[]}}const mc=({game:e,order:n="desc",format:o=d=>String(d),title:i="High Scores",refreshKey:a,width:u=180})=>{const[d,p]=g.useState([]),[h,m]=g.useState(!1);return g.useEffect(()=>{let y=!0;return nR(e,n).then(w=>{y&&(p(w),m(!0))}),()=>{y=!1}},[e,n,a]),l.jsxs("div",{style:{width:u},children:[l.jsxs("div",{style:{fontWeight:"bold",fontSize:12,marginBottom:4,color:"#000080"},children:["🏆 ",i]}),l.jsx(pt,{variant:"well",style:{background:"#fff",padding:4,minHeight:60},children:h?d.length===0?l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"No scores yet — be the first!"}):d.map((y,w)=>l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,padding:"1px 4px",background:w===0?"#fff7cc":"transparent"},children:[l.jsxs("span",{style:{color:"#555",width:18},children:[w+1,"."]}),l.jsx("span",{style:{fontFamily:"monospace",fontWeight:w===0?"bold":"normal"},children:o(y.value)}),l.jsx("span",{style:{color:"#999",fontSize:10,marginLeft:"auto",paddingLeft:8},children:new Date(y.createdAt).toLocaleDateString()})]},y.id)):l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"Loading…"})})]})},ea={beginner:{rows:9,cols:9,mines:10,label:"Beginner"},intermediate:{rows:16,cols:16,mines:40,label:"Intermediate"},expert:{rows:16,cols:30,mines:99,label:"Expert"}},rR=["","#0000ff","#008000","#ff0000","#000080","#800000","#008080","#000000","#808080"],bx=(e,n)=>Array.from({length:e},()=>Array.from({length:n},()=>({mine:!1,revealed:!1,flagged:!1,adj:0})));function oR(e,n,o){const i=e.length,a=e[0].length;let u=0;for(;u<n;){const d=Math.floor(Math.random()*i),p=Math.floor(Math.random()*a);e[d][p].mine||o.has(`${d},${p}`)||(e[d][p].mine=!0,u++)}for(let d=0;d<i;d++)for(let p=0;p<a;p++){if(e[d][p].mine)continue;let h=0;for(let m=-1;m<=1;m++)for(let y=-1;y<=1;y++){const w=d+m,k=p+y;w>=0&&w<i&&k>=0&&k<a&&e[w][k].mine&&h++}e[d][p].adj=h}}const iR=()=>{const[e,n]=g.useState("beginner"),o=ea[e],[i,a]=g.useState(()=>bx(o.rows,o.cols)),[u,d]=g.useState("playing"),[p,h]=g.useState(!1),[m,y]=g.useState(0),[w,k]=g.useState(0),T=g.useRef(0),E=(M=e)=>{const V=ea[M];n(M),a(bx(V.rows,V.cols)),d("playing"),h(!1),y(0),T.current=0};g.useEffect(()=>{if(u!=="playing"||!p)return;const M=setInterval(()=>y(V=>(T.current=V+1,V+1)),1e3);return()=>clearInterval(M)},[u,p]);const C=o.mines-i.flat().filter(M=>M.flagged).length,$=(M,V)=>{u==="playing"&&a(Z=>{const ne=Z.map(xe=>xe.map(ce=>({...ce})));if(!p){const xe=new Set;for(let ce=-1;ce<=1;ce++)for(let G=-1;G<=1;G++)xe.add(`${M+ce},${V+G}`);oR(ne,o.mines,xe),h(!0)}const ie=ne[M][V];if(ie.revealed||ie.flagged)return Z;if(ie.mine)return ne.forEach(xe=>xe.forEach(ce=>ce.mine&&(ce.revealed=!0))),d("lost"),ne;const me=[[M,V]];for(;me.length;){const[xe,ce]=me.pop(),G=ne[xe][ce];if(!(G.revealed||G.flagged)&&(G.revealed=!0,G.adj===0))for(let N=-1;N<=1;N++)for(let I=-1;I<=1;I++){const q=xe+N,W=ce+I;q>=0&&q<ne.length&&W>=0&&W<ne[0].length&&!ne[q][W].mine&&me.push([q,W])}}return ne.flat().filter(xe=>xe.revealed&&!xe.mine).length===o.rows*o.cols-o.mines&&(d("won"),yo(),hc(`minesweeper:${e}`,T.current).then(()=>k(xe=>xe+1))),ne})},b=(M,V,Z)=>{M.preventDefault(),u==="playing"&&a(ne=>ne.map((ie,me)=>ie.map((de,xe)=>me===V&&xe===Z&&!de.revealed?{...de,flagged:!de.flagged}:de)))},j=u==="won"?"😎":u==="lost"?"😵":"🙂",S=M=>({border:"2px solid",borderColor:M?"#808080 #fff #fff #808080":"#fff #808080 #808080 #fff"}),R=M=>l.jsx("span",{style:{background:"#000",color:"#f00",fontFamily:"monospace",fontSize:20,padding:"0 4px",minWidth:42,textAlign:"center",letterSpacing:1},children:String(Math.max(0,Math.min(999,M))).padStart(3,"0")});return l.jsxs(Tt,{$minW:260,$minH:300,children:[l.jsxs(bn,{children:[l.jsxs(Be,{label:"Game",children:[l.jsxs(Re,{onMouseDown:M=>{M.preventDefault(),E()},children:["New",l.jsx("span",{children:"F2"})]}),l.jsx(Ds,{}),Object.keys(ea).map(M=>l.jsxs(Re,{onMouseDown:V=>{V.preventDefault(),E(M)},children:[e===M?"● ":"○ ",ea[M].label]},M))]}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Minesweeper — VortexOS"})})]}),l.jsxs(vn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{style:{background:"#c0c0c0",userSelect:"none"},children:[l.jsxs("div",{style:{...S(!0),display:"flex",justifyContent:"space-between",alignItems:"center",padding:6,marginBottom:8},children:[R(C),l.jsx("button",{onClick:()=>E(),style:{...S(!1),width:32,height:32,fontSize:18,cursor:"pointer",background:"#c0c0c0"},children:j}),R(m)]}),l.jsx("div",{style:{...S(!0),display:"inline-block",padding:3},children:i.map((M,V)=>l.jsx("div",{style:{display:"flex"},children:M.map((Z,ne)=>l.jsx("div",{onClick:()=>$(V,ne),onContextMenu:ie=>b(ie,V,ne),style:{width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:13,cursor:u==="playing"?"pointer":"default",background:Z.revealed&&Z.mine?"#f00":"#c0c0c0",color:rR[Z.adj]||"#000",...Z.revealed?{border:"1px solid #808080"}:S(!1)},children:Z.flagged?"🚩":Z.revealed?Z.mine?"💣":Z.adj||"":""},ne))},V))})]}),l.jsx(mc,{game:`minesweeper:${e}`,order:"asc",format:M=>`${M}s`,title:`${o.label} Best`,width:130,refreshKey:w})]}),l.jsxs(Ot,{children:[l.jsx(_e,{$flex:1,children:o.label}),l.jsx(_e,{children:u==="won"?"You won! 😎":u==="lost"?"BOOM 💥":p?"Playing…":"Click to start"}),l.jsxs(_e,{children:[m,"s"]})]})]})},Wd=["♠","♥","♦","♣"],Hd=e=>e===1||e===2,sR=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],Ud=56,as=78,lR=20;function kx(){const e=[];for(let a=0;a<4;a=a+1)for(let u=1;u<=13;u++)e.push({suit:a,rank:u,up:!1});for(let a=e.length-1;a>0;a--){const u=Math.floor(Math.random()*(a+1));[e[a],e[u]]=[e[u],e[a]]}const n=[[],[],[],[],[],[],[]];let o=0;for(let a=0;a<7;a++)for(let u=0;u<=a;u++){const d=e[o++];d.up=u===a,n[a].push(d)}return{stock:e.slice(o).map(a=>({...a,up:!1})),waste:[],found:[[],[],[],[]],tab:n}}const aR=()=>{const[e,n]=g.useState(kx),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,m]=g.useState(!1),[y,w]=g.useState(!1),[k,T]=g.useState(0),E=g.useRef(!1);g.useEffect(()=>{if(h)return;const N=setInterval(()=>p(I=>I+1),1e3);return()=>clearInterval(N)},[h]);const C=()=>{n(kx()),i(null),u(0),p(0),m(!1),E.current=!1},$=N=>{N.found.every(I=>I.length===13)&&(m(!0),E.current||(E.current=!0,yo(),hc("solitaire",d).then(()=>T(I=>I+1))))},b=N=>{u(I=>I+1),n(N),i(null),$(N)},j=N=>({stock:[...N.stock],waste:[...N.waste],found:N.found.map(I=>[...I]),tab:N.tab.map(I=>[...I])}),S=()=>{const N=j(e);if(N.stock.length===0)N.stock=N.waste.reverse().map(I=>({...I,up:!1})),N.waste=[];else{const I=y?3:1;for(let q=0;q<I&&N.stock.length;q++){const W=N.stock.pop();W.up=!0,N.waste.push(W)}}n(N),i(null)},R=(N,I)=>I.length===0?N.rank===1:I[I.length-1].suit===N.suit&&N.rank===I[I.length-1].rank+1,M=(N,I)=>I.length===0?N.rank===13:I[I.length-1].up&&Hd(I[I.length-1].suit)!==Hd(N.suit)&&I[I.length-1].rank===N.rank+1,V=(N,I)=>I.pile==="waste"?N.waste.slice(-1):I.pile==="found"?N.found[I.col].slice(-1):N.tab[I.col].slice(I.idx),Z=(N,I)=>{if(I.pile==="waste")N.waste.pop();else if(I.pile==="found")N.found[I.col].pop();else{N.tab[I.col]=N.tab[I.col].slice(0,I.idx);const q=N.tab[I.col];q.length&&!q[q.length-1].up&&(q[q.length-1].up=!0)}},ne=(N,I)=>{if(!V(e,N).length)return!1;const W=j(e),F=V(W,N);return I.pile==="found"?F.length!==1||!R(F[0],W.found[I.col])?!1:(Z(W,N),W.found[I.col].push(F[0]),b(W),!0):I.pile==="tab"&&M(F[0],W.tab[I.col])?(Z(W,N),W.tab[I.col].push(...F),b(W),!0):!1},ie=N=>{const I=V(e,N);if(I.length!==1)return!1;for(let q=0;q<4;q++)if(R(I[0],e.found[q]))return ne(N,{pile:"found",col:q});return!1},me=(N,I,q,W)=>{if(h||N==="tab"&&!W.up)return;if(!o){i({pile:N,col:I,idx:q});return}if(o.pile===N&&o.col===I&&o.idx===q){i(null);return}ne(o,N==="found"?{pile:N,col:I}:{pile:"tab",col:I})||i({pile:N,col:I,idx:q})},de=(N,I)=>{h||!o||ne(o,{pile:N,col:I})||i(null)},xe=(N,I,q)=>(o==null?void 0:o.pile)===N&&o.col===I&&o.idx===q,ce=({card:N,sel:I,onClick:q,onDouble:W})=>l.jsx("div",{onClick:q,onDoubleClick:W,style:{width:Ud,height:as,boxSizing:"border-box",borderRadius:4,cursor:"pointer",border:I?"2px solid #ffd000":"1px solid #000",background:N.up?"#fff":"linear-gradient(135deg, #1064d0 25%, #0a3d80 25% 50%, #1064d0 50% 75%, #0a3d80 75%)",backgroundSize:N.up?void 0:"10px 10px",color:Hd(N.suit)?"#c00000":"#000",position:"relative",userSelect:"none",flexShrink:0,boxShadow:I?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:N.up&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:13,fontWeight:"bold",lineHeight:1},children:[sR[N.rank],l.jsx("div",{children:Wd[N.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26},children:Wd[N.suit]})]})}),G=({children:N,onClick:I})=>l.jsx("div",{onClick:I,style:{width:Ud,height:as,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",flexShrink:0},children:N});return l.jsxs(Tt,{$minW:560,$minH:460,children:[l.jsxs(bn,{children:[l.jsxs(Be,{label:"Game",children:[l.jsxs(Re,{onMouseDown:N=>{N.preventDefault(),C()},children:["New Game",l.jsx("span",{children:"F2"})]}),l.jsxs(Re,{onMouseDown:N=>{N.preventDefault(),w(I=>!I)},children:[y?"● ":"○ ","Draw three"]})]}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Solitaire — VortexOS"})})]}),l.jsxs(vn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[l.jsx("div",{onClick:S,children:e.stock.length?l.jsx(ce,{card:{suit:0,rank:0,up:!1}}):l.jsx(G,{children:l.jsx("div",{style:{color:"#fff",textAlign:"center",lineHeight:`${as}px`},children:"↻"})})}),l.jsx("div",{children:e.waste.length?l.jsx(ce,{card:e.waste[e.waste.length-1],sel:xe("waste",0,e.waste.length-1),onClick:()=>me("waste",0,e.waste.length-1,e.waste[e.waste.length-1]),onDouble:()=>ie({pile:"waste",col:0,idx:e.waste.length-1})}):l.jsx(G,{})}),l.jsx("div",{style:{flex:1}}),e.found.map((N,I)=>l.jsx("div",{onClick:()=>N.length===0&&de("found",I),children:N.length?l.jsx(ce,{card:N[N.length-1],sel:xe("found",I,N.length-1),onClick:()=>me("found",I,N.length-1,N[N.length-1])}):l.jsx(G,{onClick:()=>de("found",I),children:l.jsx("div",{style:{color:"rgba(255,255,255,0.4)",textAlign:"center",lineHeight:`${as}px`,fontSize:24},children:Wd[I]})})},I))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map((N,I)=>l.jsxs("div",{style:{position:"relative",width:Ud,minHeight:as},onClick:()=>N.length===0&&de("tab",I),children:[N.length===0&&l.jsx(G,{onClick:()=>de("tab",I)}),N.map((q,W)=>l.jsx("div",{style:{position:"absolute",top:W*lR,left:0},children:l.jsx(ce,{card:q,sel:xe("tab",I,W),onClick:()=>me("tab",I,W,q),onDouble:()=>q.up&&ie({pile:"tab",col:I,idx:W})})},W))]},I))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 You won in ",d,"s and ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:C,children:"Play again"})]})]}),l.jsx(mc,{game:"solitaire",order:"asc",format:N=>`${Math.floor(N/60)}:${String(N%60).padStart(2,"0")}`,title:"Best Times",width:150,refreshKey:k})]}),l.jsxs(Ot,{children:[l.jsxs(_e,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(_e,{children:["Moves: ",a]}),l.jsx(_e,{children:h?"You won! 🎉":`Stock: ${e.stock.length}`})]})]})},Go=20,rn=16,qo=Go*rn,cR=110,Vd=(e,n)=>e.x===n.x&&e.y===n.y,uR=()=>{const e=g.useRef(null),n=g.useRef(null),o=g.useRef([]),i=g.useRef({x:1,y:0}),a=g.useRef({x:1,y:0}),u=g.useRef({x:0,y:0}),[d,p]=g.useState(0),[h,m]=g.useState("ready"),[y,w]=g.useState(0),k=g.useRef(h);k.current=h;const T=()=>{let b;do b={x:Math.floor(Math.random()*Go),y:Math.floor(Math.random()*Go)};while(o.current.some(j=>Vd(j,b)));u.current=b},E=()=>{var b;o.current=[{x:8,y:10},{x:7,y:10},{x:6,y:10}],i.current={x:1,y:0},a.current={x:1,y:0},T(),p(0),m("playing"),(b=n.current)==null||b.focus()},C=()=>{var j;const b=(j=e.current)==null?void 0:j.getContext("2d");if(b){b.fillStyle="#0a1f0a",b.fillRect(0,0,qo,qo),b.strokeStyle="#0f2f0f";for(let S=0;S<=Go;S++)b.beginPath(),b.moveTo(S*rn,0),b.lineTo(S*rn,qo),b.stroke(),b.beginPath(),b.moveTo(0,S*rn),b.lineTo(qo,S*rn),b.stroke();b.fillStyle="#ff3b3b",b.fillRect(u.current.x*rn+2,u.current.y*rn+2,rn-4,rn-4),o.current.forEach((S,R)=>{b.fillStyle=R===0?"#9cff57":"#3ec70b",b.fillRect(S.x*rn+1,S.y*rn+1,rn-2,rn-2)})}};g.useEffect(()=>{C()},[]),g.useEffect(()=>{if(h!=="playing")return;const b=setInterval(()=>{const j=a.current;i.current=j;const S=o.current[0],R={x:S.x+j.x,y:S.y+j.y};if(R.x<0||R.y<0||R.x>=Go||R.y>=Go||o.current.some(M=>Vd(M,R))){m("over"),yo(),p(M=>(hc("snake",M).then(()=>w(V=>V+1)),M));return}o.current=[R,...o.current],Vd(R,u.current)?(p(M=>M+1),Mp(),T()):o.current.pop(),C()},cR);return()=>clearInterval(b)},[h]);const $=b=>{const j=b.key,S=(R,M)=>{i.current.x===-R&&i.current.y===-M||(a.current={x:R,y:M})};j==="ArrowUp"||j==="w"?(b.preventDefault(),S(0,-1)):j==="ArrowDown"||j==="s"?(b.preventDefault(),S(0,1)):j==="ArrowLeft"||j==="a"?(b.preventDefault(),S(-1,0)):j==="ArrowRight"||j==="d"?(b.preventDefault(),S(1,0)):(j===" "||j==="Enter")&&(b.preventDefault(),k.current!=="playing"&&E())};return l.jsxs(Tt,{$minW:360,$minH:300,children:[l.jsxs(bn,{children:[l.jsx(Be,{label:"Game",children:l.jsxs(Re,{onMouseDown:b=>{b.preventDefault(),E()},children:["New Game",l.jsx("span",{children:"Space"})]})}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"Snake — arrows or WASD to move"})})]}),l.jsxs(vn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{ref:n,tabIndex:0,onKeyDown:$,style:{outline:"none",position:"relative",border:"2px solid",borderColor:"#808080 #fff #fff #808080"},children:[l.jsx("canvas",{ref:e,width:qo,height:qo,style:{display:"block"}}),h!=="playing"&&l.jsxs("div",{onClick:E,style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:h==="over"?`Game Over — ${d}`:"🐍 Snake"}),l.jsx("div",{style:{fontSize:12},children:"Click or press Space to play"}),l.jsx("div",{style:{fontSize:11,opacity:.8},children:"Arrow keys / WASD to steer"})]})]}),l.jsx(mc,{game:"snake",order:"desc",format:b=>String(b),title:"Top Scores",width:130,refreshKey:y})]}),l.jsxs(Ot,{children:[l.jsxs(_e,{$flex:1,children:["Score: ",d]}),l.jsx(_e,{children:h==="over"?"Game Over":h==="playing"?"Go!":"Ready"}),l.jsxs(_e,{children:["Length: ",Math.max(0,o.current.length)]})]})]})},Kd=["♠","♥","♦","♣"],dR=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],ys=e=>e===1||e===2,Qd=52,qd=72,fR=18;function Sx(){const e=[];for(let o=0;o<4;o=o+1)for(let i=1;i<=13;i++)e.push({suit:o,rank:i});for(let o=e.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[e[o],e[i]]=[e[i],e[o]]}const n=[[],[],[],[],[],[],[],[]];return e.forEach((o,i)=>n[i%8].push(o)),{free:[null,null,null,null],found:[[],[],[],[]],tab:n}}const Gd=e=>e.every((n,o)=>o===0||ys(e[o-1].suit)!==ys(n.suit)&&e[o-1].rank===n.rank+1),pR=()=>{const[e,n]=g.useState(Sx),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,m]=g.useState(!1),[y,w]=g.useState(0),k=g.useRef(!1);g.useEffect(()=>{if(h)return;const G=setInterval(()=>p(N=>N+1),1e3);return()=>clearInterval(G)},[h]);const T=()=>{n(Sx()),i(null),u(0),p(0),m(!1),k.current=!1},E=G=>({free:[...G.free],found:G.found.map(N=>[...N]),tab:G.tab.map(N=>[...N])}),C=G=>{G.found.every(N=>N.length===13)&&(m(!0),k.current||(k.current=!0,yo(),hc("freecell",d).then(()=>w(N=>N+1))))},$=G=>{u(N=>N+1),n(G),i(null),C(G)},b=(G,N)=>N.length===0?G.rank===1:N[N.length-1].suit===G.suit&&G.rank===N[N.length-1].rank+1,j=(G,N)=>N.length===0?!0:ys(N[N.length-1].suit)!==ys(G.suit)&&N[N.length-1].rank===G.rank+1,S=G=>{const N=e.free.filter(q=>q===null).length,I=e.tab.filter(q=>q.length===0).length-(G?1:0);return(N+1)*Math.pow(2,Math.max(0,I))},R=(G,N)=>{if(N.pile==="free"){const I=G.free[N.col];return I?[I]:[]}return N.pile==="found"?G.found[N.col].slice(-1):G.tab[N.col].slice(N.idx)},M=(G,N)=>{N.pile==="free"?G.free[N.col]=null:N.pile==="found"?G.found[N.col].pop():G.tab[N.col]=G.tab[N.col].slice(0,N.idx)},V=(G,N)=>{if(!R(e,G).length)return!1;const q=E(e),W=R(q,G);if(N.pile==="free")return W.length!==1||q.free[N.col]!==null?!1:(M(q,G),q.free[N.col]=W[0],$(q),!0);if(N.pile==="found")return W.length!==1||!b(W[0],q.found[N.col])?!1:(M(q,G),q.found[N.col].push(W[0]),$(q),!0);if(!Gd(W))return!1;const F=q.tab[N.col].length===0;return!j(W[0],q.tab[N.col])||W.length>S(F)?!1:(M(q,G),q.tab[N.col].push(...W),$(q),!0)},Z=G=>{const N=R(e,G);if(N.length!==1)return!1;for(let I=0;I<4;I++)if(b(N[0],e.found[I]))return V(G,{pile:"found",col:I});return!1},ne=(G,N)=>{if(!h){if(!o){Gd(e.tab[G].slice(N))&&i({pile:"tab",col:G,idx:N});return}if(o.pile==="tab"&&o.col===G&&o.idx===N){i(null);return}V(o,{pile:"tab",col:G})||(Gd(e.tab[G].slice(N))?i({pile:"tab",col:G,idx:N}):i(null))}},ie=G=>{h||o&&V(o,{pile:"free",col:G})||(e.free[G]?i(de("free",G,0)?null:{pile:"free",col:G,idx:0}):i(null))},me=G=>{h||!o||V(o,{pile:"found",col:G})||i(null)},de=(G,N,I)=>(o==null?void 0:o.pile)===G&&o.col===N&&o.idx===I,xe=({card:G,selected:N,onClick:I,onDouble:q})=>l.jsxs("div",{onClick:I,onDoubleClick:q,style:{width:Qd,height:qd,boxSizing:"border-box",borderRadius:4,cursor:"pointer",background:"#fff",border:N?"2px solid #ffd000":"1px solid #000",color:ys(G.suit)?"#c00000":"#000",position:"relative",userSelect:"none",boxShadow:N?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:12,fontWeight:"bold",lineHeight:1},children:[dR[G.rank],l.jsx("div",{children:Kd[G.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24},children:Kd[G.suit]})]}),ce=({label:G,onClick:N})=>l.jsx("div",{onClick:N,style:{width:Qd,height:qd,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:G});return l.jsxs(Tt,{$minW:560,$minH:480,children:[l.jsxs(bn,{children:[l.jsx(Be,{label:"Game",children:l.jsxs(Re,{onMouseDown:G=>{G.preventDefault(),T()},children:["New Game",l.jsx("span",{children:"F2"})]})}),l.jsx(Be,{label:"Help",children:l.jsx(Re,{$disabled:!0,children:"FreeCell — VortexOS"})})]}),l.jsxs(vn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[e.free.map((G,N)=>l.jsx("div",{onClick:()=>ie(N),children:G?l.jsx(xe,{card:G,selected:de("free",N,0),onClick:()=>ie(N),onDouble:()=>Z({pile:"free",col:N,idx:0})}):l.jsx(ce,{})},N)),l.jsx("div",{style:{flex:1}}),e.found.map((G,N)=>l.jsx("div",{onClick:()=>me(N),children:G.length?l.jsx(xe,{card:G[G.length-1]}):l.jsx(ce,{label:Kd[N],onClick:()=>me(N)})},N))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map((G,N)=>l.jsxs("div",{style:{position:"relative",width:Qd,minHeight:qd},onClick:()=>G.length===0&&ne(N,0),children:[G.length===0&&l.jsx(ce,{onClick:()=>ne(N,0)}),G.map((I,q)=>l.jsx("div",{style:{position:"absolute",top:q*fR,left:0},children:l.jsx(xe,{card:I,selected:de("tab",N,q),onClick:()=>ne(N,q),onDouble:()=>Z({pile:"tab",col:N,idx:q})})},q))]},N))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 Solved in ",d,"s, ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:T,children:"Play again"})]})]}),l.jsx(mc,{game:"freecell",order:"asc",format:G=>`${Math.floor(G/60)}:${String(G%60).padStart(2,"0")}`,title:"Best Times",width:140,refreshKey:y})]}),l.jsxs(Ot,{children:[l.jsxs(_e,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(_e,{children:["Moves: ",a]}),l.jsx(_e,{children:h?"Solved! 🎉":"FreeCell"})]})]})},hR=()=>{const[e,n]=g.useState(new Date),{firstDayMonday:o}=un();g.useEffect(()=>{const j=setInterval(()=>n(new Date),1e3);return()=>clearInterval(j)},[]);const i=e.getSeconds(),a=e.getMinutes(),u=e.getHours()%12,d=i*6,p=a*6+i*.1,h=u*30+a*.5,m=(j,S,R,M)=>{const V=(j-90)*Math.PI/180;return l.jsx("line",{x1:"50",y1:"50",x2:50+S*Math.cos(V),y2:50+S*Math.sin(V),stroke:M,strokeWidth:R,strokeLinecap:"round"})},y=e.getFullYear(),w=e.getMonth(),k=new Date(y,w,1).getDay(),T=o?(k+6)%7:k,E=new Date(y,w+1,0).getDate(),C=e.toLocaleDateString(void 0,{month:"long",year:"numeric"}),$=o?["M","T","W","T","F","S","S"]:["S","M","T","W","T","F","S"],b=[...Array(T).fill(null),...Array.from({length:E},(j,S)=>S+1)];return l.jsxs("div",{style:{padding:12,display:"flex",gap:16,alignItems:"flex-start"},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 100 100",children:[l.jsx("circle",{cx:"50",cy:"50",r:"47",fill:"#fff",stroke:"#000",strokeWidth:"2"}),Array.from({length:12}).map((j,S)=>{const R=(S*30-90)*Math.PI/180;return l.jsx("line",{x1:50+42*Math.cos(R),y1:50+42*Math.sin(R),x2:50+46*Math.cos(R),y2:50+46*Math.sin(R),stroke:"#000",strokeWidth:"2"},S)}),m(h,24,3,"#000"),m(p,34,2,"#000"),m(d,38,1,"#c0392b"),l.jsx("circle",{cx:"50",cy:"50",r:"2",fill:"#000"})]}),l.jsx(pt,{variant:"well",style:{marginTop:8,padding:4,fontFamily:"monospace",fontSize:16},children:e.toLocaleTimeString()})]}),l.jsxs("div",{children:[l.jsx("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:4},children:C}),l.jsxs("table",{style:{borderCollapse:"collapse",fontSize:12},children:[l.jsx("thead",{children:l.jsx("tr",{children:$.map((j,S)=>l.jsx("th",{style:{width:22,padding:2,color:"#000080"},children:j},S))})}),l.jsx("tbody",{children:Array.from({length:Math.ceil(b.length/7)}).map((j,S)=>l.jsx("tr",{children:b.slice(S*7,S*7+7).map((R,M)=>l.jsx("td",{style:{width:22,height:20,textAlign:"center",background:R===e.getDate()?"#000080":"transparent",color:R===e.getDate()?"#fff":"#000"},children:R??""},M))},S))})]})]})]})},mR=["#000000","#404040","#808080","#c0c0c0","#ffffff","#7f0000","#ff0000","#ff7f00","#ffff00","#7fff00","#008000","#00ff00","#00ffff","#0000ff","#000080","#7f00ff","#800080","#ff00ff","#ffc0cb","#8b4513","#a0522d","#ffd700","#00e5d0","#ff2d95"],gR=[2,4,8,14,24],jt=520,Nt=360,xR=[1,2,4],yR=[{id:"pencil",label:"✎ Pencil"},{id:"line",label:"╱ Line"},{id:"rect",label:"▭ Rect"},{id:"ellipse",label:"◯ Ellipse"},{id:"fill",label:"🪣 Fill"},{id:"spray",label:"✷ Spray"},{id:"eraser",label:"▱ Eraser"},{id:"picker",label:"💧 Pick"}],wR=()=>{const e=cn(),{alert:n}=Ps(),o=g.useRef(null),i=g.useRef([]),a=g.useRef(!1),u=g.useRef(null),d=g.useRef(null),p=g.useRef(null),h=g.useRef([]),m=g.useRef([]),y=g.useRef(1),[w,k]=g.useState([{id:0,name:"Background",visible:!0}]),[T,E]=g.useState(0),[C,$]=g.useState("pencil"),[b,j]=g.useState("#000000"),[S,R]=g.useState(4),[M,V]=g.useState(1),[,Z]=g.useState(0),ne=Q=>{const Y=document.createElement("canvas");if(Y.width=jt,Y.height=Nt,Q){const re=Y.getContext("2d");re.fillStyle="#fff",re.fillRect(0,0,jt,Nt)}return Y};g.useEffect(()=>{i.current.length||(i.current=[ne(!0)],me())},[]);const ie=()=>i.current[T].getContext("2d"),me=()=>{var Y;const Q=(Y=o.current)==null?void 0:Y.getContext("2d");Q&&(Q.clearRect(0,0,jt,Nt),w.forEach((re,H)=>{re.visible&&i.current[H]&&Q.drawImage(i.current[H],0,0)}))};g.useEffect(()=>{me()},[w]);const de=Q=>{const Y=o.current.getBoundingClientRect();return{x:(Q.clientX-Y.left)/M,y:(Q.clientY-Y.top)/M}},xe=()=>{h.current.push({layer:T,data:ie().getImageData(0,0,jt,Nt)}),h.current.length>25&&h.current.shift(),m.current=[],Z(Q=>Q+1)},ce=()=>{const Q=h.current.pop();if(!Q)return;const Y=i.current[Q.layer].getContext("2d");m.current.push({layer:Q.layer,data:Y.getImageData(0,0,jt,Nt)}),Y.putImageData(Q.data,0,0),me(),Z(re=>re+1)},G=()=>{const Q=m.current.pop();if(!Q)return;const Y=i.current[Q.layer].getContext("2d");h.current.push({layer:Q.layer,data:Y.getImageData(0,0,jt,Nt)}),Y.putImageData(Q.data,0,0),me(),Z(re=>re+1)},N=Q=>{const Y=de(Q);if(C==="picker"){const re=o.current.getContext("2d").getImageData(Math.round(Y.x),Math.round(Y.y),1,1).data;j("#"+[re[0],re[1],re[2]].map(H=>H.toString(16).padStart(2,"0")).join(""));return}if(xe(),C==="fill"){F(Math.round(Y.x),Math.round(Y.y),b),me();return}a.current=!0,u.current=Y,d.current=Y,(C==="line"||C==="rect"||C==="ellipse")&&(p.current=ie().getImageData(0,0,jt,Nt)),C==="spray"&&q(Y.x,Y.y)},I=Q=>{if(!a.current)return;const Y=ie(),re=de(Q);if(Y.globalCompositeOperation=C==="eraser"?"destination-out":"source-over",Y.strokeStyle=b,Y.fillStyle=b,Y.lineWidth=S,Y.lineCap="round",Y.lineJoin="round",C==="pencil"||C==="eraser")Y.beginPath(),Y.moveTo(d.current.x,d.current.y),Y.lineTo(re.x,re.y),Y.stroke(),d.current=re;else if(C==="spray")q(re.x,re.y);else if(p.current){Y.putImageData(p.current,0,0);const H=u.current;Y.beginPath(),C==="line"?(Y.moveTo(H.x,H.y),Y.lineTo(re.x,re.y),Y.stroke()):C==="rect"?Y.strokeRect(Math.min(H.x,re.x),Math.min(H.y,re.y),Math.abs(re.x-H.x),Math.abs(re.y-H.y)):C==="ellipse"&&(Y.ellipse((H.x+re.x)/2,(H.y+re.y)/2,Math.abs(re.x-H.x)/2,Math.abs(re.y-H.y)/2,0,0,Math.PI*2),Y.stroke())}Y.globalCompositeOperation="source-over",me()},q=(Q,Y)=>{const re=ie();re.fillStyle=b;for(let H=0;H<S*3;H++){const A=Math.random()*Math.PI*2,B=Math.random()*S*1.5;re.fillRect(Q+Math.cos(A)*B,Y+Math.sin(A)*B,1,1)}},W=()=>{a.current=!1,u.current=null,d.current=null,p.current=null},F=(Q,Y,re)=>{if(Q<0||Y<0||Q>=jt||Y>=Nt)return;const H=ie(),A=H.getImageData(0,0,jt,Nt),B=A.data,le=(Qe,Jt)=>(Jt*jt+Qe)*4,he=le(Q,Y),ge=B[he],je=B[he+1],Te=B[he+2],Me=B[he+3],Je=parseInt(re.slice(1,3),16),Xt=parseInt(re.slice(3,5),16),zt=parseInt(re.slice(5,7),16);if(ge===Je&&je===Xt&&Te===zt&&Me===255)return;const kn=Qe=>B[Qe]===ge&&B[Qe+1]===je&&B[Qe+2]===Te&&B[Qe+3]===Me,fn=Qe=>{B[Qe]=Je,B[Qe+1]=Xt,B[Qe+2]=zt,B[Qe+3]=255},At=[[Q,Y]];for(;At.length;){const[Qe,Jt]=At.pop(),xi=le(Qe,Jt);kn(xi)&&(fn(xi),Qe>0&&At.push([Qe-1,Jt]),Qe<jt-1&&At.push([Qe+1,Jt]),Jt>0&&At.push([Qe,Jt-1]),Jt<Nt-1&&At.push([Qe,Jt+1]))}H.putImageData(A,0,0)},P=()=>{xe();const Q=ie();T===0?(Q.fillStyle="#fff",Q.fillRect(0,0,jt,Nt)):Q.clearRect(0,0,jt,Nt),me()},z=()=>{i.current.push(ne(!1));const Q=y.current++;k(Y=>[...Y,{id:Q,name:`Layer ${Q}`,visible:!0}]),E(i.current.length-1)},ee=Q=>{w.length<=1||(i.current.splice(Q,1),k(Y=>Y.filter((re,H)=>H!==Q)),E(Y=>Math.max(0,Y>=Q?Y-1:Y)))},ue=Q=>k(Y=>Y.map((re,H)=>H===Q?{...re,visible:!re.visible}:re)),fe=async()=>{const Q=window.prompt("Save as:","painting.png");if(!Q)return;me();const Y=o.current.toDataURL("image/png"),re=Uint8Array.from(atob(Y.split(",")[1]),H=>H.charCodeAt(0));try{await e.writeFile(`${Wr()}/${Q}`,re),await n({title:"Paint",message:`Saved to ${Wr()}/${Q}`,type:"info"})}catch(H){await n({title:"Paint",message:`Save failed: ${H.code??H.message}`,type:"error"})}};return l.jsxs("div",{style:{padding:6},children:[l.jsxs(hi,{children:[l.jsx(lt,{onClick:ce,disabled:!h.current.length,children:"Undo"}),l.jsx(lt,{onClick:G,disabled:!m.current.length,children:"Redo"}),l.jsx(In,{}),l.jsx(lt,{onClick:P,children:"Clear"}),l.jsx(lt,{onClick:fe,children:"Save"}),l.jsx(In,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Zoom:"}),xR.map(Q=>l.jsxs(lt,{$active:M===Q,onClick:()=>V(Q),children:[Q,"x"]},Q))]}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,width:96},children:[yR.map(Q=>l.jsx(We,{size:"sm",active:C===Q.id,onClick:()=>$(Q.id),style:{justifyContent:"flex-start"},children:Q.label},Q.id)),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:96,marginTop:6},children:mR.map(Q=>l.jsx("div",{onClick:()=>{j(Q),(C==="eraser"||C==="picker")&&$("pencil")},style:{width:16,height:16,background:Q,border:b===Q?"2px solid #000080":"1px solid #808080",cursor:"pointer",boxSizing:"border-box"}},Q))}),l.jsx("input",{type:"color",value:b,onChange:Q=>j(Q.target.value),style:{width:92,height:22,marginTop:4,padding:0},title:"Custom colour"}),l.jsx("div",{style:{display:"flex",gap:3,marginTop:6,flexWrap:"wrap"},children:gR.map(Q=>l.jsx(We,{size:"sm",active:S===Q,onClick:()=>R(Q),style:{width:26},children:Q},Q))})]}),l.jsx(pt,{variant:"well",style:{padding:2,overflow:"auto",maxWidth:jt+8,maxHeight:Nt+8},children:l.jsx("div",{style:{width:jt*M,height:Nt*M},children:l.jsx("canvas",{ref:o,width:jt,height:Nt,onMouseDown:N,onMouseMove:I,onMouseUp:W,onMouseLeave:W,style:{display:"block",cursor:C==="picker"?"copy":"crosshair",background:"#fff",width:jt*M,height:Nt*M,imageRendering:"pixelated"}})})}),l.jsxs("div",{style:{width:132,display:"flex",flexDirection:"column",gap:3},children:[l.jsx("div",{style:{fontSize:12,fontWeight:"bold"},children:"Layers"}),l.jsx(We,{size:"sm",onClick:z,children:"+ Add Layer"}),l.jsx(pt,{variant:"well",style:{flex:1,minHeight:120,padding:2,overflow:"auto"},children:w.map((Q,Y)=>Y).reverse().map(Q=>{const Y=w[Q];return l.jsxs("div",{onClick:()=>E(Q),style:{display:"flex",alignItems:"center",gap:4,padding:"2px 3px",fontSize:11,cursor:"pointer",background:T===Q?"#000080":"transparent",color:T===Q?"#fff":"#000"},children:[l.jsx("span",{onClick:re=>{re.stopPropagation(),ue(Q)},title:"Toggle visibility",style:{cursor:"pointer"},children:Y.visible?"👁":"—"}),l.jsx("span",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Y.name}),w.length>1&&l.jsx("span",{onClick:re=>{re.stopPropagation(),ee(Q)},title:"Delete layer",style:{cursor:"pointer"},children:"✕"})]},Y.id)})})]})]})]})},Av="vortex.recent.docs",vR=10;function Rv(){try{const e=JSON.parse(localStorage.getItem(Av)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function bR(e){const n=e.trim();if(!n)return;const o=[n,...Rv().filter(i=>i!==n)].slice(0,vR);localStorage.setItem(Av,JSON.stringify(o))}const kR=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,SR=/\.(mp3|wav|ogg|m4a|flac)$/i,jR=/\.(html?|rtf|doc)$/i,CR=/\.(js|jsx|ts|tsx|mjs|cjs|css|scss|less|json|md|markdown|sh|bash|py|xml)$/i;async function Bp(e,n){let o;try{o=(await e.stat(n)).type}catch{return!1}return o==="dir"?(e.spawn("explorer",{argv:[n]}),!0):(kR.test(n)?e.spawn("imageviewer",{argv:[n]}):SR.test(n)?e.spawn("mediaplayer",{argv:[n]}):/\.csv$/i.test(n)?e.spawn("vortexcalc",{argv:[n]}):/\.pdf$/i.test(n)?e.spawn("docviewer",{argv:[n]}):/\.(md|markdown)$/i.test(n)?e.spawn("markdown",{argv:[n]}):CR.test(n)?e.spawn("vortexcode",{argv:[n]}):jR.test(n)?e.spawn("wordpad",{argv:[n]}):e.spawn("notes",{argv:[n]}),bR(n),!0)}const jx=200,ER=new Set(["/proc","/dev"]),$R=512*1024,TR=/\.(png|jpe?g|gif|bmp|webp|ico|mp3|wav|ogg|m4a|flac|zip|gz|pdf)$/i,Yd=864e5,Cx=[{label:"any time",ms:0},{label:"today",ms:Yd},{label:"the last 7 days",ms:7*Yd},{label:"the last 30 days",ms:30*Yd}];async function Dv(e,n,o,i,a,u){if(a.length>=jx||ER.has(n)||!u())return;let d;try{d=await e.readdir(n)}catch{return}for(const p of d){if(a.length>=jx||!u())return;const h=Ue(n,p);let m="file",y=0,w=0;try{const T=await e.stat(h);m=T.type,y=T.size,w=T.mtime}catch{continue}let k=!0;if(o.name&&!p.toLowerCase().includes(o.name)&&(k=!1),k&&o.sinceMs&&w<i-o.sinceMs&&(k=!1),k&&o.content)if(m!=="file"||y>$R||TR.test(p))k=!1;else try{(await e.readTextFile(h)).toLowerCase().includes(o.content)||(k=!1)}catch{k=!1}k&&a.push({name:p,path:h,type:m,mtime:w}),m==="dir"&&await Dv(e,h,o,i,a,u)}}const AR=()=>{const e=cn(),[n,o]=g.useState(Wr()),[i,a]=g.useState(""),[u,d]=g.useState(""),[p,h]=g.useState(0),[m,y]=g.useState([]),[w,k]=g.useState(!1),[T,E]=g.useState(!1),C=g.useRef(0),$=async()=>{const j=++C.current,S={name:i.trim().toLowerCase(),content:u.trim().toLowerCase(),sinceMs:Cx[p].ms};if(!S.name&&!S.content&&!S.sinceMs){y([]),E(!1);return}k(!0);const R=[];await Dv(e,n||"/",S,Date.now(),R,()=>C.current===j),C.current===j&&(y(R),k(!1),E(!0))};g.useEffect(()=>{const j=setTimeout($,300);return()=>clearTimeout(j)},[i,u,p,n]);const b=j=>{j.type==="dir"?e.spawn("explorer",{argv:[j.path]}):Bp(e,j.path)};return l.jsxs(Tt,{$minW:480,$minH:380,children:[l.jsxs(vn,{style:{flexDirection:"column",padding:8},children:[l.jsxs(Wy,{label:"Find: Files or Folders",children:[l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Named:"}),l.jsx(ur,{value:i,onChange:j=>a(j.target.value),placeholder:"part of a name",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Containing text:"}),l.jsx(ur,{value:u,onChange:j=>d(j.target.value),placeholder:"words inside the file",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Modified:"}),l.jsx("select",{value:p,onChange:j=>h(Number(j.target.value)),style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:2},children:Cx.map((j,S)=>l.jsx("option",{value:S,children:j.label},j.label))})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{width:96},children:"Look in:"}),l.jsx(ur,{value:n,onChange:j=>o(j.target.value),style:{flex:1},fullWidth:!0}),l.jsx(We,{onClick:$,disabled:w,children:w?"…":"Find Now"})]})]}),l.jsxs(pt,{variant:"well",style:{flex:1,minHeight:120,marginTop:8,overflow:"auto",background:"#fff",padding:4},children:[m.map(j=>l.jsxs("div",{onDoubleClick:()=>b(j),title:j.path,style:{display:"flex",justifyContent:"space-between",gap:8,padding:"2px 4px",cursor:"pointer"},children:[l.jsxs("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[j.type==="dir"?"📁":"📄"," ",j.name]}),l.jsxs("span",{style:{color:"#666",fontSize:11,whiteSpace:"nowrap"},children:[j.mtime?new Date(j.mtime).toLocaleDateString():""," · ",j.path]})]},j.path)),T&&m.length===0&&l.jsx("div",{style:{padding:8,color:"#666"},children:"No items found."}),!T&&l.jsx("div",{style:{padding:8,color:"#666"},children:"Enter a name, text to find inside files, or a date — results appear as you type."})]})]}),l.jsx(Ot,{children:l.jsx(_e,{$flex:1,children:w?"Searching…":T?`${m.length} item(s) found`:"Ready"})})]})},Iv=e=>`vortex.welcome.${e||"user"}`;function Pv(e){return localStorage.getItem(Iv(e))==="1"}function RR(e){localStorage.setItem(Iv(e),"1")}const Nv="vortex.tips.enabled",DR=new Set,IR=()=>DR.forEach(e=>e());function ka(){return localStorage.getItem(Nv)!=="0"}function PR(e){localStorage.setItem(Nv,e?"1":"0"),IR()}const Jo=["Press Ctrl+Space anywhere to open the Command Palette and launch any app or action instantly.","VortexOS runs on a real microkernel — open the Terminal and type `ps` to watch live processes.","Drag a window to a screen edge to snap it to that half; drag to a corner to quarter-tile it.","Your files live in a real virtual filesystem. Try `ls /` in the Terminal, or browse it in Explorer.","Share files with other users in Network Neighborhood, and send messages with WinPopup.","Right-click the desktop to create folders and documents or rearrange your icons.","Open Control Panel ▸ Display to switch between the Serious Sam vaporwave look and classic Windows.","Beat your own high scores in Solitaire, Minesweeper, FreeCell and Snake — they sync to your account.","Press Alt+Tab to flip between open windows, just like the real thing.","The Recycle Bin really works — deleted files go there, and you can restore them.","Press Ctrl+Alt+Del in a panic to reboot — VortexOS has a real BSOD and Task Manager too."];function NR(e){return Jo[(e%Jo.length+Jo.length)%Jo.length]}const Yf=new Set,Xf=new Set;function MR(){Yf.forEach(e=>e())}function LR(e){return Yf.add(e),()=>Yf.delete(e)}function Mv(){Xf.forEach(e=>e())}function OR(e){return Xf.add(e),()=>Xf.delete(e)}const Lv="vortex.assistant.enabled",Jf=new Set,zR=()=>Jf.forEach(e=>e());function Ov(){return localStorage.getItem(Lv)!=="0"}function zv(e){localStorage.setItem(Lv,e?"1":"0"),zR()}function _R(){return g.useSyncExternalStore(e=>(Jf.add(e),()=>Jf.delete(e)),Ov)}const Zf=new Set;function FR(e){Ov()&&Zf.forEach(n=>n(e))}function BR(e){return Zf.add(e),()=>Zf.delete(e)}const WR=["Hi! I'm Vortex — your guide around here. Click me for a tip anytime.","Hey there. New to VortexOS? Click me and I'll show you the ropes.","Welcome back! Click me whenever you want a hand."],HR=["Yikes — that app hit a snag. Dr. Watson logged the details, and the rest of VortexOS is just fine.","That didn't go as planned. No data lost — want to peek at what happened?","Whoops. One app stumbled, but the kernel kept right on running."],UR={terminal:["A real shell awaits — try `ps` to see live processes, or `ls /`.","Pipes and redirects work here: `cat notes.txt | grep todo`."],explorer:["This is a real filesystem. Right-click for New Folder, F2 to rename."],notes:["Everything you type saves to an actual file on disk."],wordpad:["Rich text here — and it saves as a real .html file."],paint:["The fill bucket floods bounded areas. Don't forget Undo!"],calculator:["Psst — try Scientific or Programmer mode in the View menu."],minesweeper:["Your first click is always safe. Now go flag those mines!"],solitaire:["Aces up to the foundations. Double-click to auto-move a card."],freecell:["Use the four free cells wisely — almost every deal is winnable."],snake:["Arrow keys or WASD. Whatever you do, don't bite your tail."],browser:["I route pages through a proxy so they actually load — no frame blocking."],network:["See who else is online and browse their shared files."],messenger:["Net Send lives! Ping another signed-in user a message."],control_panel:["Make it yours — wallpaper, themes, screensavers, and Serious Sam Style."],backlogger:["Track your game backlog, complete with real console art."],task_manager:["Honest CPU and memory graphs in here — no faking it."],find:["Search by name, by contents, or by the date a file changed."],mediaplayer:["Folder playlists and a live retrowave visualizer. Press play."],imageviewer:["Prev/Next across the folder, plus zoom, rotate and a slideshow."],clock:["Hand-drawn analog face and a working calendar."],nightwave:["Retrowave radio, streaming live. Turn it up."],vaporwave:["Retrowave radio, streaming live. Turn it up."]};function gc(e){return e[Math.floor(Math.random()*e.length)]}function VR(e){const n=UR[e];return n&&n.length?gc(n):null}function Ex(){return gc(Jo)}function KR(){return gc(WR)}function QR(){return gc(HR)}const qR=()=>l.jsxs(Tt,{$minW:460,$minH:380,children:[l.jsxs(bn,{children:[l.jsx(Be,{label:"File",children:l.jsx(Re,{$disabled:!0,children:"Print Topic"})}),l.jsxs(Be,{label:"Help",children:[l.jsx(Re,{onClick:MR,children:"Welcome Tour…"}),l.jsx(Re,{onClick:Mv,children:"Tip of the Day…"}),l.jsx(Re,{onClick:()=>zv(!0),children:"Show Vortex Assistant"})]})]}),l.jsx(vn,{style:{padding:3},children:l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",padding:16,lineHeight:1.6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:12},children:[l.jsx(si,{size:48,vapor:!0,spinning:!1}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:"VortexOS 2.0"}),l.jsx("div",{style:{fontSize:12,color:"#444"},children:"Experimental Edition — a creation by Serious Sam"})]})]}),l.jsx("p",{style:{fontWeight:"bold"},children:"About"}),l.jsx("p",{children:"VortexOS is a desktop operating system that runs in your browser, built on a real microkernel: an in-memory virtual filesystem persisted to OPFS, a process model with a syscall ABI, a command shell, a window manager, and multi-user networking. No emulator, no clone."}),l.jsx("p",{style:{fontWeight:"bold",marginTop:12},children:"Getting started"}),l.jsxs("ul",{style:{margin:"4px 0 0 18px"},children:[l.jsxs("li",{children:[l.jsx("b",{children:"Command Palette"})," — press ",l.jsx("code",{children:"Ctrl+Space"})," to fuzzy-launch any app or action."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Explorer"})," & ",l.jsx("b",{children:"Terminal"})," — browse a real filesystem, or type ",l.jsx("code",{children:"ls"}),", ",l.jsx("code",{children:"cat"}),", ",l.jsx("code",{children:"ps"}),", even ",l.jsx("code",{children:".sh"})," scripts."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"WordPad"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"})," — real apps that save real files."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Games"})," — Solitaire, FreeCell, Minesweeper and Snake, with per-user high scores."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Network Neighborhood"})," & ",l.jsx("b",{children:"WinPopup"})," — share files and chat with other users."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the Serious Sam Style toggle."]}),l.jsxs("li",{children:["Drag desktop icons anywhere; deleted files go to the ",l.jsx("b",{children:"Recycle Bin"}),"."]})]}),l.jsxs("p",{style:{marginTop:12},children:["New here? Open ",l.jsx("b",{children:"Help ▸ Welcome Tour"})," for the guided introduction, or ",l.jsx("b",{children:"Tip of the Day"})," for a quick hint."]}),l.jsx("p",{style:{marginTop:12,color:"#444",fontSize:12},children:"Registered to: Serious Sam"})]})}),l.jsx(Ot,{children:l.jsx(_e,{$flex:1,children:"VortexOS Help"})})]}),xc="http://localhost:8082";async function GR(){const{data:e}=await Ve.get(`${xc}/share/users`);return Array.isArray(e)?e:[]}async function YR(e){const{data:n}=await Ve.get(`${xc}/share/users/${e}/files`);return Array.isArray(n)?n:[]}async function XR(){const{data:e}=await Ve.get(`${xc}/files`);return Array.isArray(e)?e:[]}async function JR(e,n){await Ve.put(`${xc}/files/share`,null,{params:{path:e,shared:n}})}function ZR(e){if(!e)return"";try{return decodeURIComponent(escape(atob(e)))}catch{try{return atob(e)}catch{return"(unable to display this file)"}}}const Xd={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},$x={cursor:"pointer",padding:"2px 6px",fontSize:13},eD=()=>{const{username:e}=Xn(),[n,o]=g.useState(0),[i,a]=g.useState(null),[u,d]=g.useState([]),p=g.useCallback(async()=>{try{a(null);const S=await XR();d(S.filter(R=>R.type!=="folder"))}catch{a("Could not reach the network. Is the backend running?")}},[]),h=async S=>{try{await JR(S.path,!S.shared),d(R=>R.map(M=>M.path===S.path?{...M,shared:!M.shared}:M))}catch{a("Could not update sharing.")}},[m,y]=g.useState([]),[w,k]=g.useState(null),[T,E]=g.useState([]),[C,$]=g.useState(null),b=g.useCallback(async()=>{try{a(null),y(await GR())}catch{a("Could not reach the network. Is the backend running?")}},[]),j=async S=>{k(S),$(null);try{E(await YR(S.id))}catch{E([])}};return g.useEffect(()=>{p(),b()},[p,b]),l.jsxs(Tt,{$minW:460,$minH:320,style:{padding:4},children:[l.jsxs(tc,{value:n,onChange:S=>o(S),children:[l.jsx(Lr,{value:0,children:"Network Neighborhood"}),l.jsx(Lr,{value:1,children:"My Shared Files"})]}),l.jsx(ec,{style:{flex:1,minHeight:0},children:l.jsxs(Ur,{style:{height:"100%"},children:[i&&l.jsx("p",{style:{color:"#800000",fontSize:12},children:i}),n===0&&l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsxs("div",{style:{...Xd,width:130},children:[m.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No one is sharing yet."}),m.map(S=>l.jsxs("div",{style:{...$x,background:(w==null?void 0:w.id)===S.id?"#000080":"transparent",color:(w==null?void 0:w.id)===S.id?"#fff":"#000"},onClick:()=>j(S),children:["🖥 ",S.username,S.username===e?" (you)":""]},S.id))]}),l.jsxs("div",{style:{...Xd,width:150},children:[!w&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Select a computer."}),w&&T.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No shared files."}),T.map(S=>l.jsxs("div",{style:{...$x,background:(C==null?void 0:C.id)===S.id?"#000080":"transparent",color:(C==null?void 0:C.id)===S.id?"#fff":"#000"},onClick:()=>$(S),children:["📄 ",S.name]},S.id))]}),l.jsx(pt,{variant:"field",style:{flex:1,height:230,overflow:"auto",background:"white",padding:6},children:C?l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:12,fontFamily:"monospace"},children:ZR(C.content)}):l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Open a shared file to view it (read-only)."})})]}),n===1&&l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:12,marginTop:0},children:"Tick a file to share it with everyone on the network."}),l.jsxs("div",{style:Xd,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"You have no cloud files to share."}),u.map(S=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"1px 4px"},children:[l.jsx(ft,{checked:S.shared,onChange:()=>h(S)}),l.jsx("span",{style:{fontSize:13},children:S.path.replace("/mnt/cloud","")})]},S.id))]}),l.jsx(We,{onClick:p,style:{marginTop:8},children:"Refresh"})]})]})}),l.jsx(Ot,{children:l.jsx(_e,{$flex:1,children:i||"Network Neighborhood"})})]})};let Qt=null,za=[];const Wp=[];let _a=!1;const ep=new Set,ws=()=>ep.forEach(e=>e());function tD(e){return`${"http://localhost:8082".replace(/^http/,"ws")}/ws?token=${encodeURIComponent(e)}`}function nD(){const e=ic();!e||Qt||(_a=!0,_v(e))}function _v(e){let n;try{n=new WebSocket(tD(e))}catch{return}Qt=n,n.onmessage=o=>{if(Qt!==n)return;let i;try{i=JSON.parse(o.data)}catch{return}i.type==="presence"?(za=i.users??[],ws()):i.type==="msg"&&i.from&&i.body&&(Wp.push({from:i.from,body:i.body,ts:i.ts??Date.now()}),ws())},n.onclose=()=>{Qt===n&&(Qt=null,za=[],ws(),_a&&setTimeout(()=>{const o=ic();_a&&o&&!Qt&&_v(o)},2e3))},n.onerror=()=>{try{n.close()}catch{}}}function rD(){_a=!1,za=[];const e=Qt;Qt=null;try{e==null||e.close()}catch{}ws()}function oD(e,n){!Qt||Qt.readyState!==WebSocket.OPEN||!e||!n||(Qt.send(JSON.stringify({type:"msg",to:e,body:n})),Wp.push({from:"me",to:e,body:n,ts:Date.now(),mine:!0}),ws())}function tp(){return za}function Tx(){return(Qt==null?void 0:Qt.readyState)===WebSocket.OPEN}function np(){return Wp}function Hp(e){return ep.add(e),()=>ep.delete(e)}function iD(){const[,e]=g.useReducer(n=>n+1,0);return g.useEffect(()=>Hp(e),[]),{online:tp(),log:np()}}const sD={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},lD=()=>{const{username:e}=Xn(),{online:n,log:o}=iD(),[i,a]=g.useState(null),[u,d]=g.useState(""),p=n.filter(y=>y!==e),h=i?o.filter(y=>y.mine&&y.to===i||!y.mine&&y.from===i):[],m=()=>{!i||!u.trim()||(oD(i,u.trim()),d(""))};return l.jsxs(Tt,{$minW:440,$minH:320,children:[l.jsxs("div",{style:{display:"flex",gap:8,flex:1,minHeight:0,padding:8},children:[l.jsx("div",{style:{...sD,width:130},children:p.map(y=>l.jsxs("div",{onClick:()=>a(y),style:{cursor:"pointer",padding:"2px 6px",fontSize:13,background:i===y?"#000080":"transparent",color:i===y?"#fff":"#000"},children:["🟢 ",y]},y))}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[l.jsxs(pt,{variant:"field",style:{flex:1,background:"white",overflow:"auto",padding:6,marginBottom:6},children:[!i&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Select someone to message."}),i&&h.length===0&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"No messages yet. Say hi!"}),h.map((y,w)=>l.jsxs("p",{style:{margin:"2px 0",fontSize:13},children:[l.jsxs("b",{children:[y.mine?"You":y.from,":"]})," ",y.body]},w))]}),l.jsxs("div",{style:{display:"flex",gap:6},children:[l.jsx(ur,{value:u,disabled:!i,placeholder:i?`Message ${i}…`:"Pick a recipient",onChange:y=>d(y.target.value),onKeyDown:y=>{y.key==="Enter"&&m()},style:{flex:1}}),l.jsx(We,{onClick:m,disabled:!i||!u.trim(),children:"Send"})]})]})]}),l.jsx(Ot,{children:l.jsx(_e,{$flex:1,children:p.length===0?"No one else is online.":`${p.length} user(s) online`})})]})},aD={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",webp:"image/webp",svg:"image/svg+xml",ico:"image/x-icon"},cD=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,uD=e=>aD[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,dD=e=>e.slice(0,e.lastIndexOf("/"))||"/",fD=e=>e.slice(e.lastIndexOf("/")+1),pD=()=>{const e=cn(),[n,o]=g.useState([]),[i,a]=g.useState(0),[u,d]=g.useState(null),[p,h]=g.useState(null),[m,y]=g.useState(1),[w,k]=g.useState(0),[T,E]=g.useState(!0),[C,$]=g.useState(!1);g.useEffect(()=>{(async()=>{const ne=(await e.argv())[0];if(!ne){h("No image to display.");return}const ie=dD(ne);try{const de=(await e.readdir(ie)).filter(ce=>cD.test(ce)).sort().map(ce=>`${ie}/${ce}`),xe=Math.max(0,de.indexOf(ne));o(de.length?de:[ne]),a(xe)}catch{o([ne]),a(0)}})()},[e]),g.useEffect(()=>{const ne=n[i];if(!ne)return;let ie=null,me=!0;return h(null),y(1),k(0),E(!0),(async()=>{const de=uD(ne);if(!de){h("Unsupported image format.");return}try{const xe=await e.readFile(ne);ie=URL.createObjectURL(new Blob([xe],{type:de})),me&&d(ie)}catch{me&&h("Could not open this file.")}})(),()=>{me=!1,ie&&URL.revokeObjectURL(ie)}},[n,i,e]);const b=()=>a(ne=>n.length?(ne+1)%n.length:0),j=()=>a(ne=>n.length?(ne-1+n.length)%n.length:0),S=g.useRef(b);S.current=b,g.useEffect(()=>{if(!C||n.length<2)return;const ne=setInterval(()=>S.current(),3e3);return()=>clearInterval(ne)},[C,n.length]);const R=()=>{E(!1),y(ne=>Math.min(8,ne*1.25))},M=()=>{E(!1),y(ne=>Math.max(.1,ne/1.25))},V=()=>{E(!1),y(1)},Z=T?{maxWidth:"100%",maxHeight:"100%",transform:`rotate(${w}deg)`,imageRendering:"pixelated"}:{transform:`scale(${m}) rotate(${w}deg)`,imageRendering:"pixelated"};return l.jsxs(Tt,{$minW:360,$minH:280,children:[l.jsxs(hi,{children:[l.jsx(lt,{onClick:j,disabled:n.length<2,children:"◀ Prev"}),l.jsx(lt,{onClick:b,disabled:n.length<2,children:"Next ▶"}),l.jsx(In,{}),l.jsx(lt,{onClick:R,children:"Zoom +"}),l.jsx(lt,{onClick:M,children:"Zoom −"}),l.jsx(lt,{$active:T,onClick:()=>{E(!0),y(1)},children:"Fit"}),l.jsx(lt,{onClick:V,children:"1:1"}),l.jsx(In,{}),l.jsx(lt,{onClick:()=>k(ne=>ne-90),children:"↺"}),l.jsx(lt,{onClick:()=>k(ne=>ne+90),children:"↻"}),l.jsx(In,{}),l.jsx(lt,{$active:C,onClick:()=>$(ne=>!ne),disabled:n.length<2,children:C?"⏸ Stop":"▶ Slideshow"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",display:"flex",alignItems:"center",justifyContent:"center",background:"#2b2b2b"},children:[p&&l.jsx("p",{style:{color:"#fff"},children:p}),!p&&u&&l.jsx("img",{src:u,alt:n[i],style:Z}),!p&&!u&&l.jsx("p",{style:{color:"#fff"},children:"Loading…"})]}),l.jsxs(Ot,{children:[l.jsx(_e,{$flex:1,children:n[i]?fD(n[i]):""}),l.jsx(_e,{children:n.length>1?`${i+1} / ${n.length}`:"1 / 1"}),l.jsx(_e,{children:T?"Fit":`${Math.round(m*100)}%`})]})]})},hD={mp3:"audio/mpeg",wav:"audio/wav",ogg:"audio/ogg",m4a:"audio/mp4",flac:"audio/flac"},mD=/\.(mp3|wav|ogg|m4a|flac)$/i,gD=e=>hD[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,xD=e=>e.slice(0,e.lastIndexOf("/"))||"/",Jd=e=>e.slice(e.lastIndexOf("/")+1),yD=()=>{const e=cn(),n=g.useRef(null),o=g.useRef(null),i=g.useRef(null),a=g.useRef(!1),u=g.useRef(0),[d,p]=g.useState([]),[h,m]=g.useState(0),[y,w]=g.useState(null);g.useEffect(()=>{(async()=>{const C=(await e.argv())[0];if(!C){w("No media to play.");return}const $=xD(C);try{const j=(await e.readdir($)).filter(S=>mD.test(S)).sort().map(S=>`${$}/${S}`);p(j.length?j:[C]),m(Math.max(0,j.indexOf(C)))}catch{p([C]),m(0)}})()},[e]),g.useEffect(()=>{const C=d[h];if(!C||!n.current)return;let $=null,b=!0;return(async()=>{const j=gD(C);if(!j){w("Unsupported audio format.");return}try{const S=await e.readFile(C);$=URL.createObjectURL(new Blob([S],{type:j})),b&&n.current&&(n.current.src=$,n.current.play().catch(()=>{}))}catch{b&&w("Could not open this file.")}})(),()=>{b=!1,$&&URL.revokeObjectURL($)}},[d,h,e]);const k=()=>{if(!(a.current||!n.current))try{const C=window.AudioContext||window.webkitAudioContext,$=new C,b=$.createMediaElementSource(n.current),j=$.createAnalyser();j.fftSize=128,b.connect(j),j.connect($.destination),i.current=j,a.current=!0,$.resume(),T()}catch{}},T=()=>{const C=o.current,$=i.current;if(!C||!$)return;const b=C.getContext("2d"),j=$.frequencyBinCount,S=new Uint8Array(j);$.getByteFrequencyData(S),b.fillStyle="#0a0020",b.fillRect(0,0,C.width,C.height);const R=C.width/j;for(let M=0;M<j;M++){const V=S[M]/255*C.height,Z=b.createLinearGradient(0,C.height,0,C.height-V);Z.addColorStop(0,"#ff2d95"),Z.addColorStop(1,"#00e5d0"),b.fillStyle=Z,b.fillRect(M*R,C.height-V,R-1,V)}u.current=requestAnimationFrame(T)};g.useEffect(()=>()=>cancelAnimationFrame(u.current),[]);const E=()=>m(C=>d.length?(C+1)%d.length:0);return l.jsxs(Tt,{$minW:340,$minH:280,style:{padding:6,paddingBottom:0},children:[y&&l.jsx("p",{style:{padding:12},children:y}),!y&&l.jsxs(l.Fragment,{children:[l.jsxs("p",{style:{margin:"2px 0 6px",fontWeight:"bold",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["🎵 ",d[h]?Jd(d[h]):"—"]}),l.jsx(pt,{variant:"well",style:{padding:2,marginBottom:6},children:l.jsx("canvas",{ref:o,width:320,height:80,style:{display:"block",width:"100%",height:80,background:"#0a0020"}})}),l.jsx("audio",{ref:n,controls:!0,onPlay:k,onEnded:E,style:{width:"100%"}}),l.jsxs("p",{style:{fontSize:12,fontWeight:"bold",margin:"8px 0 4px"},children:["Playlist (",d.length,")"]}),l.jsx(pt,{variant:"well",style:{flex:1,minHeight:60,overflow:"auto",background:"#fff"},children:d.map((C,$)=>l.jsxs("div",{onClick:()=>m($),style:{padding:"3px 6px",cursor:"pointer",fontSize:12,background:$===h?"#000080":"transparent",color:$===h?"#fff":"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[$===h?"▶ ":"",Jd(C)]},C))})]}),l.jsxs(Ot,{children:[l.jsx(_e,{$flex:1,children:y?"No media":d[h]?Jd(d[h]):"—"}),l.jsxs(_e,{children:[d.length," track(s)"]})]})]})},Fv="vortex.uninstalled",rp=new Set;function wD(){try{return new Set(JSON.parse(localStorage.getItem(Fv)||"[]"))}catch{return new Set}}let Fa=wD();function vD(){localStorage.setItem(Fv,JSON.stringify([...Fa]))}function Bv(){return Fa}function Ax(e,n){const o=new Set(Fa);n?o.delete(e):o.add(e),Fa=o,vD(),rp.forEach(i=>i())}function bD(e){return rp.add(e),()=>rp.delete(e)}function yc(){return g.useSyncExternalStore(bD,Bv)}const Rx={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},Dx={display:"flex",alignItems:"center",gap:8,padding:"3px 6px"},kD=()=>{const e=Vr(),n=yc(),[o,i]=g.useState(0),a=zr.filter(h=>!n.has(h.exec)),u=zr.filter(h=>n.has(h.exec)),d=h=>{e.registry.unregister(h),Ax(h,!1)},p=h=>{const m=zr.find(y=>y.exec===h);m&&e.registry.register(m),Ax(h,!0)};return l.jsxs(Tt,{$minW:420,$minH:320,style:{padding:4},children:[l.jsxs(tc,{value:o,onChange:h=>i(h),children:[l.jsx(Lr,{value:0,children:"Install/Uninstall"}),l.jsx(Lr,{value:1,children:"Add Programs"})]}),l.jsx(ec,{style:{flex:1,minHeight:0},children:l.jsxs(Ur,{style:{height:"100%"},children:[o===0&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Installed programs. Select one and click Remove to uninstall it."}),l.jsx("div",{style:Rx,children:a.map(h=>l.jsxs("div",{style:Dx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),MD.has(h.exec)?l.jsx("span",{style:{fontSize:11,color:"#555"},children:"system"}):l.jsx(We,{size:"sm",onClick:()=>d(h.exec),children:"Remove"})]},h.exec))})]}),o===1&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Programs available to install."}),l.jsxs("div",{style:Rx,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Everything is installed."}),u.map(h=>l.jsxs("div",{style:Dx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),l.jsx(We,{size:"sm",onClick:()=>p(h.exec),children:"Install"})]},h.exec))]})]})]})}),l.jsx(Ot,{children:l.jsxs(_e,{$flex:1,children:[a.length," installed · ",u.length," available"]})})]})},Wv="/trash.svg",wc="/task_manager.png",Hv="/doom.png",Uv="/doom2.png",Up="/playstation-logo.png",Vv="/wordpad.svg",Vp="/vortexcode.svg",Kp="/vortexcalc.svg",Qp="/markdown.svg",SD="/docviewer.svg",Kv="/browser.png",Qv="/tomb.jpg",qv="/persia.png",Gv="/vapor.png",qp="/terminal.svg",Gp="/calculator.svg",Yp="/minesweeper.svg",Xp="/solitaire.svg",Jp="/snake.svg",Zp="/freecell.svg",Ba="/clock.svg",Wa="/paint_file-3.png",op="/find.svg",ip="/help.svg",eh="/network.svg",Cs="/winpopup.svg",jD=g.lazy(()=>Ln(()=>import("./Doom-JAYCqeiO.js"),__vite__mapDeps([0,1]))),CD=g.lazy(()=>Ln(()=>import("./DoomII-BWhMD5VW.js"),__vite__mapDeps([2,1]))),ED=g.lazy(()=>Ln(()=>import("./TombRaider-O1BFhY2g.js"),__vite__mapDeps([3,1]))),$D=g.lazy(()=>Ln(()=>import("./Persia-CaiZZtcF.js"),__vite__mapDeps([4,1]))),TD=g.lazy(()=>Ln(()=>import("./Backlogger-CtYQGWUO.js"),[])),AD=g.lazy(()=>Ln(()=>import("./Browser-Cd8b5p10.js"),[])),RD=g.lazy(()=>Ln(()=>import("./NightwavePlaza-DTI3Nb-H.js"),[])),DD=g.lazy(()=>Ln(()=>import("./VortexCode-B-qbS0rp.js"),[])),ID=g.lazy(()=>Ln(()=>import("./VortexCalc-BluSAj7H.js"),[])),PD=g.lazy(()=>Ln(()=>import("./MarkdownStudio-BJQjxGwM.js"),[])),ND=g.lazy(()=>Ln(()=>import("./DocViewer-DDmMneYG.js"),[])),MD=new Set(["recycle_bin","my_computer","task_manager","explorer","terminal","control_panel","notes","find","add_remove"]),zr=[Oe({exec:"recycle_bin",name:"Recycle Bin",icon:Wv,component:M2,permissions:["fs"]}),Oe({exec:"my_computer",name:"My Computer",icon:xs,component:O2,permissions:["proc"]}),Oe({exec:"task_manager",name:"Task Manager",icon:wc,component:q2,permissions:["proc"]}),Oe({exec:"notes",name:"Notes",icon:Hr,component:n8,permissions:["fs"]}),Oe({exec:"wordpad",name:"WordPad",icon:Vv,component:i8,permissions:["fs"]}),Oe({exec:"vortexcode",name:"VortexCode",icon:Vp,component:DD,permissions:["fs","proc"]}),Oe({exec:"vortexcalc",name:"VortexCalc",icon:Kp,component:ID,permissions:["fs"]}),Oe({exec:"markdown",name:"Markdown Studio",icon:Qp,component:PD,permissions:["fs"]}),Oe({exec:"docviewer",name:"Document Viewer",icon:SD,component:ND,permissions:["fs"]}),Oe({exec:"explorer",name:"Explorer",icon:Et,component:v8,permissions:["fs","proc"]}),Oe({exec:"terminal",name:"Terminal",icon:qp,component:CT,permissions:["fs","proc"]}),Oe({exec:"paint",name:"Paint",icon:Wa,component:wR,permissions:["fs"]}),Oe({exec:"imageviewer",name:"Image Viewer",icon:Wa,component:pD,permissions:["fs"]}),Oe({exec:"mediaplayer",name:"Media Player",icon:Ba,component:yD,permissions:["fs"]}),Oe({exec:"find",name:"Find Files",icon:op,component:AR,permissions:["fs","proc"]}),Oe({exec:"backlogger",name:"GameCache",icon:Up,component:TD,permissions:["net"]}),Oe({exec:"network",name:"Network Neighborhood",icon:eh,component:eD,permissions:["net"]}),Oe({exec:"messenger",name:"WinPopup",icon:Cs,component:lD,permissions:["net"]}),Oe({exec:"browser",name:"Browser",icon:Kv,component:AD,permissions:["net"]}),Oe({exec:"vaporwave",name:"Nightwave Plaza",icon:Gv,component:RD,permissions:["net","audio"]}),Oe({exec:"calculator",name:"Calculator",icon:Gp,component:ET,permissions:[]}),Oe({exec:"minesweeper",name:"Minesweeper",icon:Yp,component:iR,permissions:["net"]}),Oe({exec:"solitaire",name:"Solitaire",icon:Xp,component:aR,permissions:["net"]}),Oe({exec:"snake",name:"Snake",icon:Jp,component:uR,permissions:["net"]}),Oe({exec:"freecell",name:"FreeCell",icon:Zp,component:pR,permissions:["net"]}),Oe({exec:"clock",name:"Clock",icon:Ba,component:hR,permissions:[]}),Oe({exec:"help",name:"Help",icon:ip,component:qR,permissions:[]}),Oe({exec:"control_panel",name:"Control Panel",icon:xs,component:Y$,permissions:[]}),Oe({exec:"add_remove",name:"Add/Remove Programs",icon:xs,component:kD,permissions:[]}),Oe({exec:"doom",name:"Doom",icon:Hv,component:jD,permissions:[]}),Oe({exec:"doomII",name:"Doom II",icon:Uv,component:CD,permissions:[]}),Oe({exec:"tomb",name:"Tomb Raider",icon:Qv,component:ED,permissions:[]}),Oe({exec:"persia",name:"Prince of Persia",icon:qv,component:$D,permissions:[]})];function LD(e){for(const n of zr)e.register(n)}const Zd="vortex.proctable",OD="process";function zD(e){return{load(){const n=localStorage.getItem(Zd);if(n)return _D(n);const o=localStorage.getItem(OD);if(o){const i=FD(o,e);return i&&localStorage.setItem(Zd,JSON.stringify(i)),i}return null},save(n){localStorage.setItem(Zd,JSON.stringify(n))}}}function _D(e){try{const n=JSON.parse(e);return Array.isArray(n)?n:null}catch{return null}}function FD(e,n){let o;try{o=JSON.parse(e)}catch{return null}return Array.isArray(o)?o.filter(i=>i&&i.componentName).map(i=>{var a,u;return{pid:i.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:i.componentName,name:i.name??i.componentName,icon:i.icon??"",priority:typeof i.priority=="number"?i.priority:0,window:{x:((a=i.location)==null?void 0:a.x)??n().x,y:((u=i.location)==null?void 0:u.y)??n().y},cwd:"/home/user",state:"running"}}):null}class BD{constructor(){Ne(this,"mounts",[]);Ne(this,"listeners",new Set);Ne(this,"changeVersion",0)}subscribe(n){return this.listeners.add(n),()=>this.listeners.delete(n)}version(){return this.changeVersion}touch(){this.emit()}emit(){this.changeVersion++;for(const n of this.listeners)n()}mount(n,o){const i=Or(n);this.mounts=this.mounts.filter(a=>a.mountPoint!==i),this.mounts.push({mountPoint:i,fs:o}),this.mounts.sort((a,u)=>u.mountPoint.length-a.mountPoint.length)}route(n){const o=Or(n);for(const i of this.mounts)if(i.mountPoint==="/"||o===i.mountPoint||o.startsWith(i.mountPoint+"/")){const a=i.mountPoint==="/"?o:o.slice(i.mountPoint.length)||"/";return{fs:i.fs,rel:a||"/",mountPoint:i.mountPoint}}throw new Ce("ENOENT",n)}childMounts(n){const o=Or(n);return this.mounts.filter(i=>i.mountPoint!=="/"&&sn(i.mountPoint)===o).map(i=>i.mountPoint.slice(o==="/"?1:o.length+1))}stat(n){const{fs:o,rel:i}=this.route(n);return o.stat(i)}readdir(n){const{fs:o,rel:i}=this.route(n),a=o.readdir(i);return[...new Set([...a,...this.childMounts(n)])].sort()}read(n){const{fs:o,rel:i}=this.route(n);return o.read(i)}write(n,o){const{fs:i,rel:a}=this.route(n);if(i.readonly)throw new Ce("EROFS",n);i.write(a,o),this.emit()}mkdir(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new Ce("EROFS",n);o.mkdir(i),this.emit()}unlink(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new Ce("EROFS",n);o.unlink(i),this.emit()}rename(n,o){const i=this.route(n),a=this.route(o);if(i.fs.readonly||a.fs.readonly)throw new Ce("EROFS",n);if(i.fs===a.fs)i.fs.rename(i.rel,a.rel);else{if(this.stat(n).type==="dir")throw new Ce("EINVAL","cross-mount dir move");a.fs.write(a.rel,i.fs.read(i.rel)),i.fs.unlink(i.rel)}this.emit()}exists(n){try{return this.stat(n),!0}catch{return!1}}}const ta=()=>Date.now();class li{constructor(){Ne(this,"readonly",!1);Ne(this,"root",{type:"dir",mtime:ta(),children:new Map})}resolve(n){let o=this.root;for(const i of Rs(n)){if(o.type!=="dir"||!o.children)throw new Ce("ENOTDIR",n);const a=o.children.get(i);if(!a)return null;o=a}return o}resolveDir(n){const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type!=="dir")throw new Ce("ENOTDIR",n);return o}exists(n){return this.resolve(n)!==null}stat(n){var i;const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);return{type:o.type,size:o.type==="file"?((i=o.data)==null?void 0:i.length)??0:0,mtime:o.mtime}}readdir(n){return[...this.resolveDir(n).children.keys()].sort()}read(n){const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type==="dir")throw new Ce("EISDIR",n);return o.data??new Uint8Array}write(n,o){if(Or(n)==="/")throw new Ce("EISDIR",n);const i=this.resolveDir(sn(n)),a=ln(n),u=i.children.get(a);if(u&&u.type==="dir")throw new Ce("EISDIR",n);i.children.set(a,{type:"file",mtime:ta(),data:new Uint8Array(o)})}mkdir(n){const o=this.resolveDir(sn(n)),i=ln(n);if(!i)throw new Ce("EEXIST",n);if(o.children.has(i))throw new Ce("EEXIST",n);o.children.set(i,{type:"dir",mtime:ta(),children:new Map})}unlink(n){if(Or(n)==="/")throw new Ce("EACCES","cannot unlink /");const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type==="dir"&&o.children.size>0)throw new Ce("ENOTEMPTY",n);this.resolveDir(sn(n)).children.delete(ln(n))}rename(n,o){const i=this.resolve(n);if(!i)throw new Ce("ENOENT",n);const a=this.resolveDir(sn(o));this.resolveDir(sn(n)).children.delete(ln(n)),i.mtime=ta(),a.children.set(ln(o),i)}serialize(){return Yv(this.root)}static deserialize(n){const o=new li;return o.root=Xv(n),o}}function Yv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:Array.from(e.data??[])};const n={};for(const[o,i]of e.children)n[o]=Yv(i);return{type:"dir",mtime:e.mtime,children:n}}function Xv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:new Uint8Array(e.data??[])};const n=new Map;for(const[o,i]of Object.entries(e.children??{}))n.set(o,Xv(i));return{type:"dir",mtime:e.mtime,children:n}}const Ix=["null","zero","random"],Px=256,Nx=()=>Date.now();class WD{constructor(){Ne(this,"readonly",!1)}device(n){const o=ln(n);if(sn(n)!=="/"||!Ix.includes(o))throw new Ce("ENOENT",n);return o}stat(n){return n==="/"?{type:"dir",size:0,mtime:Nx()}:(this.device(n),{type:"dev",size:0,mtime:Nx()})}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return[...Ix]}read(n){switch(this.device(n)){case"null":return new Uint8Array;case"zero":return new Uint8Array(Px);case"random":return crypto.getRandomValues(new Uint8Array(Px));default:throw new Ce("ENOENT",n)}}write(n,o){if(this.device(n)!=="null")throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}const Mx=()=>Date.now(),Lx=e=>new TextEncoder().encode(e);class HD{constructor(n){Ne(this,"readonly",!0);this.source=n}entries(){return["processes",...this.source().map(n=>n.pid)]}find(n){return this.source().find(o=>o.pid===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:Mx()};const o=ln(n);if(sn(n)!=="/"||!this.entries().includes(o))throw new Ce("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:Mx()}}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return this.entries()}read(n){const o=ln(n);if(o==="processes"){const a=this.source().map(u=>`${u.pid.slice(0,8)}  ${u.state.padEnd(8)}  p${u.priority}  ${u.name}`).join(`
`);return Lx(`PID       STATE     PRIO  NAME
${a}
`)}const i=this.find(o);if(!i)throw new Ce("ENOENT",n);return Lx(`pid:      ${i.pid}
ppid:     ${i.ppid??"-"}
name:     ${i.name}
exec:     ${i.exec}
state:    ${i.state}
priority: ${i.priority}
uid:      ${i.uid}
`)}write(n){throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}const Ox=()=>Date.now(),UD=e=>new TextEncoder().encode(e);class VD{constructor(n){Ne(this,"readonly",!0);this.source=n}find(n){return this.source().find(o=>o.exec===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:Ox()};const o=ln(n);if(sn(n)!=="/"||!this.find(o))throw new Ce("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:Ox()}}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return this.source().map(o=>o.exec).sort()}read(n){const o=this.find(ln(n));if(!o)throw new Ce("ENOENT",n);return UD(`#!vortex-program
exec=${o.exec}
name=${o.name}
`)}write(n){throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}function KD(e){let n="";for(const o of e)n+=String.fromCharCode(o);return btoa(n)}function QD(e){const n=atob(e),o=new Uint8Array(n.length);for(let i=0;i<n.length;i++)o[i]=n.charCodeAt(i);return o}class zx{constructor(n,o,i=()=>{}){Ne(this,"readonly",!1);Ne(this,"mirror",new li);Ne(this,"chains",new Map);this.mountPoint=n,this.api=o,this.onLoaded=i}async init(){try{const o=(await this.api.list()).filter(a=>a.path===this.mountPoint||a.path.startsWith(this.mountPoint+"/")),i=a=>a===this.mountPoint?"/":a.slice(this.mountPoint.length);for(const a of o.filter(u=>u.type==="folder").sort((u,d)=>u.path.length-d.path.length))this.ensureDir(i(a.path));for(const a of o.filter(u=>u.type!=="folder")){const u=i(a.path);this.ensureDir(sn(u)),this.mirror.write(u,a.content?QD(a.content):new Uint8Array)}}catch{}this.onLoaded()}async reload(){this.mirror=new li,this.chains.clear(),await this.init()}ensureDir(n){let o="";for(const i of Rs(n))o+="/"+i,this.mirror.exists(o)||this.mirror.mkdir(o)}full(n){return n==="/"?this.mountPoint:this.mountPoint+n}nameOf(n){return n.slice(n.lastIndexOf("/")+1)}stat(n){return this.mirror.stat(n)}readdir(n){return this.mirror.readdir(n)}read(n){return this.mirror.read(n)}chain(n,o){const a=(this.chains.get(n)??Promise.resolve()).then(o).catch(()=>{});this.chains.set(n,a)}async flush(){await Promise.all(this.chains.values())}write(n,o){this.mirror.write(n,o);const i=KD(o);this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"file",i))}mkdir(n){this.mirror.mkdir(n),this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"folder",null))}unlink(n){this.mirror.unlink(n),this.chain(n,()=>this.api.remove(this.full(n)))}rename(n,o){this.mirror.rename(n,o),this.chain(n,()=>this.api.rename(this.full(n),this.full(o)))}}function _x(e,n="/files"){const o=()=>{const a=ic();return{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{}}},i=a=>(a.status===401&&Sw(),a);return{async list(){const a=i(await fetch(`${e}${n}`,{headers:o()}));return a.ok?a.json():[]},async upsert(a,u,d,p){i(await fetch(`${e}${n}`,{method:"POST",headers:o(),body:JSON.stringify({path:a,name:u,type:d,content:p})}))},async remove(a){i(await fetch(`${e}${n}?path=${encodeURIComponent(a)}`,{method:"DELETE",headers:o()}))},async rename(a,u){i(await fetch(`${e}${n}/rename?from=${encodeURIComponent(a)}&to=${encodeURIComponent(u)}`,{method:"PUT",headers:o()}))}}}const Ha="vortex.vfs";function qD(){return{async load(){const e=localStorage.getItem(Ha);if(!e)return null;try{return JSON.parse(e)}catch{return null}},save(e){try{localStorage.setItem(Ha,JSON.stringify(e))}catch{}}}}const Fx="vortex.vfs.json";function GD(){var e;return typeof navigator<"u"&&!!((e=navigator.storage)!=null&&e.getDirectory)}function YD(){let e=null,n=null,o=!1;async function i(){if(o||n===null)return;o=!0;const a=n;n=null;try{const p=await(await(await navigator.storage.getDirectory()).getFileHandle(Fx,{create:!0})).createWritable();await p.write(JSON.stringify(a)),await p.close()}catch{}finally{o=!1,n!==null&&i()}}return{async load(){try{const u=await(await navigator.storage.getDirectory()).getFileHandle(Fx).catch(()=>null);if(u){const p=await(await u.getFile()).text();return p?JSON.parse(p):null}const d=localStorage.getItem(Ha);if(d){const p=JSON.parse(d);return n=p,i(),localStorage.removeItem(Ha),p}return null}catch{return null}},save(a){n=a,e&&clearTimeout(e),e=setTimeout(()=>void i(),300)}}}function XD(){return GD()?YD():qD()}const Jv=g.createContext(null),Bx=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2});function JD(){const e=new li;return e.mkdir("/home"),e.mkdir("/tmp"),e.mkdir("/mnt"),e.mkdir("/Recycle Bin"),e}async function ZD(){const e=new b2;LD(e);for(const m of Bv())e.unregister(m);const n=new v2({registry:e,persistence:zD(Bx),defaultWindowLocation:Bx}),o=XD(),i=await o.load(),a=i?li.deserialize(i):JD();a.exists("/mnt")||a.mkdir("/mnt");const u=new BD;u.mount("/",a),u.mount("/dev",new WD),u.mount("/proc",new HD(()=>n.processInfo())),u.mount("/bin",new VD(()=>n.registry.list().map(m=>({exec:m.exec,name:m.name}))));const d="http://localhost:8082",p=new zx("/mnt/cloud",_x(d,"/files"),()=>u.touch());u.mount("/mnt/cloud",p);const h=new zx("/mnt/public",_x(d,"/public/files"),()=>u.touch());return u.mount("/mnt/public",h),u.subscribe(()=>o.save(a.serialize())),n.mountVfs(u),i||o.save(a.serialize()),{kernel:n,drives:[p,h]}}const Zv=g.createContext(async()=>{});function e4({children:e,kernel:n}){const[o,i]=g.useState(n?{kernel:n,drives:[]}:null);g.useEffect(()=>{if(n){i({kernel:n,drives:[]});return}let d=!1;return ZD().then(p=>{d||i(p)}),()=>{d=!0}},[n]);const a=(o==null?void 0:o.drives)??[],u=g.useCallback(async()=>{await Promise.all(a.map(d=>d.reload()))},[a]);return o?l.jsx(Jv.Provider,{value:o.kernel,children:l.jsx(Zv.Provider,{value:u,children:e})}):l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#008080",color:"#fff",fontSize:14},children:"Starting VortexOS…"})}function t4(){return g.useContext(Zv)}function Vr(){const e=g.useContext(Jv);if(!e)throw new Error("useKernel must be used within a KernelProvider");return e}function vc(){const e=Vr();return g.useSyncExternalStore(e.subscribe,e.getSnapshot)}function n4(){const e=Vr();return g.useSyncExternalStore(e.subscribeFs,e.fsVersion)}function r4(){const e=Vr();return g.useSyncExternalStore(e.subscribePanic,e.getPanic)}const e1=J.createContext({});function o4({children:e}){const n=Vr(),o=vc(),i=g.useMemo(()=>o.map(h=>({uuid:h.pid,priority:h.priority,component:n.registry.component(h.exec)??(()=>null),selected:!1,icon:h.icon,name:h.name,location:h.window})),[o,n]),a=h=>{const m=h.componentName;m&&n.syscall(null,"spawn",{exec:m,name:h.name,icon:h.icon,argv:h.argv})},u=h=>{h&&n.syscall(null,"kill",{pid:h})},d=h=>{h.uuid&&n.syscall(null,"win_focus",{pid:h.uuid})},p=(h,m)=>{h&&n.syscall(null,"win_move",{pid:h,location:m})};return l.jsx(e1.Provider,{value:{processes:i,changePriority:d,closeProcess:u,addProcess:a,handleProceessLocationChange:p},children:e})}function zn(){return J.useContext(e1)}const Wx=200,Hx=2400,i4=bt`from { width: 0 } to { width: 100% }`,t1=bt`from { opacity: 0 } to { opacity: 1 }`,s4=bt`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`,th=L.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
`,l4=L(th)`
    ${({$vapor:e})=>e?`background:
                radial-gradient(120% 80% at 50% 18%, #2a0a4a 0%, #14012b 55%, #05010f 100%);`:"background-image: url('/clouds.jpg'); background-size: cover; background-position: center;"}
`,a4=L.div`
    position: absolute;
    inset: 38% 0 0 0;
    background-image:
        linear-gradient(rgba(255, 45, 149, 0.45) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 229, 208, 0.4) 1px, transparent 1px);
    background-size: 44px 44px;
    transform: perspective(340px) rotateX(62deg);
    transform-origin: top center;
    mask-image: linear-gradient(#000, transparent 75%);
    pointer-events: none;
`,c4=L.button`
    margin-top: 26px;
    padding: 11px 30px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #00e5d0)":"linear-gradient(90deg, #000080, #1084d0)"};
    box-shadow: 0 0 22px ${({$vapor:e})=>e?"#ff2d9577":"#1084d066"};
    transition: transform 0.12s ease, box-shadow 0.12s ease;
    &:hover {
        transform: translateY(-1px) scale(1.03);
        box-shadow: 0 0 30px ${({$vapor:e})=>e?"#ff2d95aa":"#1084d0aa"};
    }
    &:active {
        transform: translateY(0) scale(0.99);
    }
`,u4=L(th)`
    background: ${({$vapor:e})=>e?"radial-gradient(80% 80% at 50% 50%, #0a0118 0%, #000 100%)":"#000"};
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7vh 8vw;
    color: #d8d8d8;
    font-family: "Courier New", monospace;
    font-size: 15px;
    line-height: 1.7;
    text-align: left;
`,d4=L.div`
    animation: ${t1} 0.1s linear;
    white-space: pre;
`,f4=L.span`
    color: ${({$vapor:e})=>e?"#00e5d0":"#3ad14a"};
    font-weight: bold;
`,p4=L.span`
    display: inline-block;
    width: 9px;
    height: 16px;
    margin-left: 2px;
    vertical-align: text-bottom;
    background: currentColor;
    animation: ${s4} 1s step-end infinite;
`,h4=L(th)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#000"};
    animation: ${t1} 0.5s ease;
`,Ux=L.h1`
    margin: 26px 0 2px;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #5cb9ff, #ffffff)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,Vx=L.p`
    margin: 2px 0 0;
    color: #b9b9c8;
    font-size: 13px;
    letter-spacing: 1px;
`,Kx=L.p`
    margin: 6px 0 0;
    font-size: 13px;
    font-weight: 600;
    color: ${({$vapor:e})=>e?"#00e5d0":"#7fc6ff"};
    text-shadow: 0 0 12px ${({$vapor:e})=>e?"#00e5d088":"transparent"};
`,m4=L.div`
    width: 320px;
    height: 18px;
    margin-top: 40px;
    padding: 2px;
    background: #000;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,g4=L.div`
    height: 100%;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #00e5d0)":"linear-gradient(90deg, #000080, #1084d0)"};
    animation: ${i4} ${({$ms:e})=>e}ms linear forwards;
`,x4=e=>[{label:"VortexOS BIOS v2.0  —  Experimental Edition"},{label:"(c) Serious Sam.  All rights reserved."},{label:""},{label:`Detecting processor cores ........ ${e}`,status:""},{label:"Microkernel .......................",status:"OK"},{label:"Syscall ABI .......................",status:"OK"},{label:"Virtual File System (OPFS) ........",status:"OK"},{label:"Process scheduler .................",status:"OK"},{label:""},{label:"Starting VortexOS ..."}],y4=()=>{const e=pi(),{sssStyle:n}=Yt(),o=n,[i,a]=g.useState("ready"),[u,d]=g.useState(0),p=x4(navigator.hardwareConcurrency||4),h=g.useRef([]),m=()=>{c8(),a("post")};return g.useEffect(()=>{if(i==="post")return p.forEach((y,w)=>{h.current.push(setTimeout(()=>d(w+1),w*Wx))}),h.current.push(setTimeout(()=>a("logo"),p.length*Wx+350)),()=>{h.current.forEach(clearTimeout),h.current=[]}},[i]),g.useEffect(()=>{if(i!=="logo")return;u8();const y=setTimeout(()=>e("/vortex"),Hx);return()=>clearTimeout(y)},[i,e]),i==="ready"?l.jsxs(l4,{$vapor:o,children:[o&&l.jsx(a4,{}),l.jsxs("div",{style:{position:"relative",zIndex:1},children:[l.jsx(si,{size:150,vapor:o}),l.jsx(Ux,{$vapor:o,children:"VortexOS"}),l.jsx(Vx,{style:{color:o?"#cfcfe0":"#0a0a0a"},children:"Experimental Edition"}),l.jsx(c4,{$vapor:o,onClick:m,children:"Are you ready?"}),l.jsx(Kx,{$vapor:o,style:{marginTop:18,color:o?"#00e5d0":"#0a0a0a"},children:"a creation by Serious Sam"})]})]}):i==="post"?l.jsx(u4,{$vapor:o,children:p.slice(0,u).map((y,w)=>l.jsxs(d4,{children:[y.label,y.status?l.jsx(f4,{$vapor:o,children:y.status}):null,w===u-1&&l.jsx(p4,{})]},w))}):l.jsxs(h4,{$vapor:o,children:[l.jsx(si,{size:170,vapor:o}),l.jsx(Ux,{$vapor:o,children:"VortexOS"}),l.jsx(Vx,{children:"Version 2.0 · Experimental Edition"}),l.jsx(Kx,{$vapor:o,children:"a creation by Serious Sam"}),l.jsx(m4,{children:l.jsx(g4,{$vapor:o,$ms:Hx-200})})]})},w4=`Welcome to VortexOS.\r
\r
This is a real file, stored on a real virtual filesystem.\r
Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r
`;async function sp(e,n){return e.stat(n).then(()=>!0).catch(()=>!1)}async function n1(e,n,o){await sp(e,o)||await e.mkdir(o).catch(()=>{});const i=await e.readdir(n).catch(()=>[]);for(const a of i){const u=`${n}/${a}`,d=`${o}/${a}`,p=await e.stat(u).catch(()=>null);p&&(p.type==="dir"?(await n1(e,u,d),await e.unlink(u).catch(()=>{})):await sp(e,d)?await e.unlink(u).catch(()=>{}):await e.rename(u,d).catch(()=>{}))}}async function v4(e,n){const o=`/home/${n}`,i=`vortex.homemerged.${n}`;if(n!=="user"&&!localStorage.getItem(i)){try{await sp(e,"/home/user")&&(await n1(e,"/home/user",o),await e.unlink("/home/user").catch(()=>{}))}catch{}localStorage.setItem(i,"1")}await e.mkdir(o).catch(()=>{}),await e.mkdir(`${o}/Documents`).catch(()=>{}),await e.mkdir(`${o}/Desktop`).catch(()=>{}),(await e.readdir(o).catch(()=>[])).includes("welcome.txt")||await e.writeTextFile(`${o}/welcome.txt`,w4).catch(()=>{})}const Qx=40,qx="/Recycle Bin",ef=84,na=92,b4=[{id:"app:recycle_bin",name:"Recycle Bin",icon:Wv,kind:"app",componentName:"recycle_bin"},{id:"app:backlogger",name:"GameCache",icon:Up,kind:"app",componentName:"backlogger"},{id:"app:my_computer",name:"My Computer",icon:xs,kind:"app",componentName:"my_computer"},{id:"app:network",name:"Network Neighborhood",icon:eh,kind:"app",componentName:"network"},{id:"app:messenger",name:"WinPopup",icon:Cs,kind:"app",componentName:"messenger"},{id:"app:vaporwave",name:"Nightwave Plaza",icon:Gv,kind:"app",componentName:"vaporwave"},{id:"app:task_manager",name:"Task Manager",icon:wc,kind:"app",componentName:"task_manager"},{id:"app:explorer",name:"Explorer",icon:Et,kind:"app",componentName:"explorer"},{id:"app:terminal",name:"Terminal",icon:qp,kind:"app",componentName:"terminal"},{id:"app:notes",name:"Notes",icon:Hr,kind:"app",componentName:"notes"},{id:"app:vortexcode",name:"VortexCode",icon:Vp,kind:"app",componentName:"vortexcode"},{id:"app:vortexcalc",name:"VortexCalc",icon:Kp,kind:"app",componentName:"vortexcalc"},{id:"app:markdown",name:"Markdown Studio",icon:Qp,kind:"app",componentName:"markdown"},{id:"app:browser",name:"Browser",icon:Kv,kind:"app",componentName:"browser"},{id:"app:doom",name:"Doom",icon:Hv,kind:"app",componentName:"doom"},{id:"app:doomII",name:"Doom II",icon:Uv,kind:"app",componentName:"doomII"},{id:"app:persia",name:"Prince of Persia",icon:qv,kind:"app",componentName:"persia"},{id:"app:tomb",name:"Tomb Raider",icon:Qv,kind:"app",componentName:"tomb"},{id:"app:calculator",name:"Calculator",icon:Gp,kind:"app",componentName:"calculator"},{id:"app:minesweeper",name:"Minesweeper",icon:Yp,kind:"app",componentName:"minesweeper"},{id:"app:solitaire",name:"Solitaire",icon:Xp,kind:"app",componentName:"solitaire"},{id:"app:snake",name:"Snake",icon:Jp,kind:"app",componentName:"snake"},{id:"app:freecell",name:"FreeCell",icon:Zp,kind:"app",componentName:"freecell"},{id:"app:clock",name:"Clock",icon:Ba,kind:"app",componentName:"clock"},{id:"app:paint",name:"Paint",icon:Wa,kind:"app",componentName:"paint"}],k4=e=>{try{return JSON.parse(localStorage.getItem(e)||"{}")}catch{return{}}},S4=()=>{const{addProcess:e}=zn(),n=cn(),{alert:o}=Ps(),{username:i}=Xn(),a=n4(),u=yc(),d=un(),p=o$[d.desktopIconSize],h=i||"user",m=`/home/${h}/Desktop`,y=`vortex.desktop.positions.${h}`,[w,k]=g.useState([]),[T,E]=g.useState(()=>k4(y)),[C,$]=g.useState(new Set),[b,j]=g.useState(null),[S,R]=g.useState(null),M=g.useRef(null),V=g.useRef(null),Z=g.useRef(null),ne=[...b4.filter(A=>!A.componentName||!u.has(A.componentName)),...w],ie=Math.max(1,Math.floor((window.innerHeight-Qx-20)/na)),me=(A,B)=>T[A]??{x:12+Math.floor(B/ie)*ef,y:12+B%ie*na},de=g.useCallback(async()=>{try{await v4(n,h);const A=await n.readdir(m),B=await Promise.all(A.map(async le=>{const he=await n.stat(Ue(m,le)).then(ge=>ge.type).catch(()=>"file");return{id:`file:${le}`,name:le,icon:Nw(le,he==="dir"),kind:he==="dir"?"dir":"file",path:Ue(m,le)}}));k(B)}catch{k([])}},[n,h,m]);g.useEffect(()=>{new Audio("win98.mp3").play().catch(()=>{})},[]),g.useEffect(()=>{de()},[de,a]),g.useEffect(()=>{if(!b)return;const A=()=>j(null);return document.addEventListener("click",A),()=>document.removeEventListener("click",A)},[b]),g.useEffect(()=>{localStorage.setItem(y,JSON.stringify(T))},[T,y]);const xe=A=>{A.kind==="app"?e({componentName:A.componentName,name:A.name,icon:A.icon}):A.path&&Bp(n,A.path)},ce=(A,B,le)=>{if(A.button!==0)return;A.stopPropagation(),j(null);const he=C.has(B.id),ge=he?[...C]:[B.id];he||$(new Set([B.id]));const je={};ge.forEach(Te=>{const Me=ne.findIndex(Je=>Je.id===Te);je[Te]=me(Te,Me>=0?Me:le)}),V.current={ids:ge,startMouse:{x:A.clientX,y:A.clientY},start:je},document.addEventListener("mousemove",G),document.addEventListener("mouseup",N)},G=A=>{const B=V.current;if(!B)return;const le=A.clientX-B.startMouse.x,he=A.clientY-B.startMouse.y;E(ge=>{const je={...ge};for(const Te of B.ids){const Me=B.start[Te];je[Te]={x:Math.max(0,Me.x+le),y:Math.max(0,Me.y+he)}}return je})},N=A=>{document.removeEventListener("mousemove",G),document.removeEventListener("mouseup",N);const B=V.current;if(B&&d.singleClickOpen&&B.ids.length===1&&!(Math.abs(A.clientX-B.startMouse.x)>4||Math.abs(A.clientY-B.startMouse.y)>4)){const he=ne.find(ge=>ge.id===B.ids[0]);he&&xe(he)}V.current=null},I=A=>{A.button===0&&($(new Set),j(null),Z.current={x:A.clientX,y:A.clientY},document.addEventListener("mousemove",q),document.addEventListener("mouseup",W))},q=A=>{if(!Z.current)return;const B=Math.min(A.clientX,Z.current.x),le=Math.min(A.clientY,Z.current.y),he=Math.abs(A.clientX-Z.current.x),ge=Math.abs(A.clientY-Z.current.y);R({x:B,y:le,w:he,h:ge});const je=new Set;ne.forEach((Te,Me)=>{const Je=me(Te.id,Me);Je.x+ef>B&&Je.x<B+he&&Je.y+na>le&&Je.y<le+ge&&je.add(Te.id)}),$(je)},W=()=>{document.removeEventListener("mousemove",q),document.removeEventListener("mouseup",W),Z.current=null,R(null)},F=A=>{const B=w.map(je=>je.name);if(!B.includes(A))return A;const le=A.lastIndexOf("."),he=le>0?A.slice(0,le):A,ge=le>0?A.slice(le):"";for(let je=2;;je++)if(!B.includes(`${he} (${je})${ge}`))return`${he} (${je})${ge}`},P=async()=>{await n.mkdir(Ue(m,F("New Folder"))).catch(A=>o({title:"Error",message:A.code??"failed",type:"error"})),de()},z=async()=>{await n.writeTextFile(Ue(m,F("New Text Document.txt")),""),de()},ee=async A=>{const le=(await n.readdir(qx).catch(()=>[])).includes(A.name)?`${A.name}-${Date.now()%1e4}`:A.name;await n.rename(A.path,Ue(qx,le)).catch(()=>{}),bw(le,A.path)},ue=async A=>{await ee(A),de()},fe=async()=>{const A=w.filter(B=>C.has(B.id));for(const B of A)await ee(B);de()},Q=()=>E({}),Y=A=>{const B=ge=>ge.kind==="app"?0:ge.kind==="dir"?1:2,le=[...ne].sort((ge,je)=>{if(A==="type"){const Te=B(ge)-B(je);if(Te!==0)return Te}return ge.name.localeCompare(je.name)}),he={};le.forEach((ge,je)=>{he[ge.id]={x:12+Math.floor(je/ie)*ef,y:12+je%ie*na}}),E(he)},re=()=>e({componentName:"control_panel",name:"Control Panel",icon:"/controlpanel.png"});g.useEffect(()=>{const A=B=>{var he;if(B.key!=="Delete")return;const le=(he=document.activeElement)==null?void 0:he.tagName;le==="INPUT"||le==="TEXTAREA"||w.some(ge=>C.has(ge.id))&&fe()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[C,w]);const H=(A,B)=>{A.preventDefault(),A.stopPropagation(),B&&$(new Set([B.id])),j({x:A.clientX,y:A.clientY,item:B})};return l.jsxs("div",{ref:M,onMouseDown:I,onContextMenu:A=>H(A,null),style:{position:"relative",width:"100%",height:`calc(100vh - ${Qx}px)`,overflow:"hidden"},children:[d.showDesktopIcons&&ne.map((A,B)=>{const le=me(A.id,B),he=C.has(A.id);return l.jsxs("div",{onMouseDown:ge=>ce(ge,A,B),onDoubleClick:d.singleClickOpen?void 0:()=>xe(A),onContextMenu:ge=>H(ge,A),style:{position:"absolute",left:le.x,top:le.y,width:p.cell,display:"flex",flexDirection:"column",alignItems:"center",padding:3,cursor:"pointer",border:he?"1px dotted #ffffff":"1px solid transparent"},children:[l.jsx("img",{src:A.icon,alt:A.name,style:{height:p.icon,width:p.icon,objectFit:"contain"},draggable:!1}),l.jsx("p",{style:{marginTop:2,padding:"0 3px",textAlign:"center",fontSize:p.font,color:"#fff",textShadow:he?"none":"1px 1px 0 rgba(0,0,0,0.6)",backgroundColor:he?d.accentColor:"transparent",wordBreak:"break-word"},children:A.name})]},A.id)}),S&&l.jsx("div",{style:{position:"fixed",left:S.x,top:S.y,width:S.w,height:S.h,border:`1px dotted ${d.accentColor}`,background:`${d.accentColor}22`,pointerEvents:"none",zIndex:5}}),b&&(b.item?l.jsx(xo,{x:b.x,y:b.y,onClose:()=>j(null),items:[{label:"Open",glyph:"▸",onClick:()=>xe(b.item)},...b.item.kind!=="app"?[{separator:!0},{label:"Delete",glyph:"🗑",onClick:()=>ue(b.item)}]:[],{separator:!0},{label:"Properties",onClick:()=>o({title:`${b.item.name} Properties`,message:`Name: ${b.item.name}
Type: ${b.item.kind==="app"?"Application":b.item.kind==="dir"?"Folder":"File"}${b.item.path?`
Location: ${b.item.path}`:""}`,type:"info"})}]}):l.jsx(xo,{x:b.x,y:b.y,onClose:()=>j(null),items:[{label:"View",submenu:[{label:"Large Icons",bullet:d.desktopIconSize==="large",onClick:()=>ot("desktopIconSize","large")},{label:"Normal Icons",bullet:d.desktopIconSize==="normal",onClick:()=>ot("desktopIconSize","normal")},{label:"Small Icons",bullet:d.desktopIconSize==="small",onClick:()=>ot("desktopIconSize","small")},{separator:!0},{label:"Show Desktop Icons",checked:d.showDesktopIcons,onClick:()=>ot("showDesktopIcons",!d.showDesktopIcons)}]},{label:"Sort Icons",submenu:[{label:"by Name",onClick:()=>Y("name")},{label:"by Type",onClick:()=>Y("type")}]},{label:"Line up Icons",onClick:Q},{label:"Refresh",glyph:"⟳",onClick:de},{separator:!0},{label:"New",submenu:[{label:"Folder",icon:Et,onClick:P},{label:"Text Document",icon:Hr,onClick:z}]},{separator:!0},{label:"Properties",onClick:re}]}))]})},nh=["terminal","explorer","browser"],rh=e=>`vortex.quicklaunch.${e||"user"}`,lp=new Set,j4=()=>lp.forEach(e=>e());function oh(e){const n=localStorage.getItem(rh(e));if(n===null)return nh;try{const o=JSON.parse(n);return Array.isArray(o)?o.filter(i=>typeof i=="string"):[]}catch{return[]}}function r1(e,n){localStorage.setItem(rh(e),JSON.stringify(n)),j4()}function o1(e,n){return oh(e).includes(n)}function C4(e,n){const o=oh(e);o.includes(n)||r1(e,[...o,n])}function i1(e,n){r1(e,oh(e).filter(o=>o!==n))}function E4(e,n){o1(e,n)?i1(e,n):C4(e,n)}function $4(e){return g.useSyncExternalStore(n=>(lp.add(n),()=>lp.delete(n)),()=>{const n=localStorage.getItem(rh(e))??JSON.stringify(nh);return T4(n)})}let Gx="",tf=nh;function T4(e){if(e!==Gx){Gx=e;try{const n=JSON.parse(e);tf=Array.isArray(n)?n.filter(o=>typeof o=="string"):[]}catch{tf=[]}}return tf}let ih=!1;const ap=new Set,s1=()=>ap.forEach(e=>e());function l1(){ih=!0,s1()}function ra(){ih=!1,s1()}function A4(){return g.useSyncExternalStore(e=>(ap.add(e),()=>ap.delete(e)),()=>ih)}const a1="vortex.run.mru",R4=10;function cp(){try{const e=JSON.parse(localStorage.getItem(a1)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function D4(e){const n=e.trim();if(!n)return;const o=[n,...cp().filter(i=>i!==n)].slice(0,R4);localStorage.setItem(a1,JSON.stringify(o))}const nf=40,I4=L.div`
    margin-left: auto;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    font-size: 12px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,rf=L.button`
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #000;
`,of=L.div`
    position: fixed;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 100001;
    padding: 8px;
    font-size: 12px;
`;function P4({muted:e}){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M2 6.5h3l4-3v11l-4-3H2z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),e?l.jsx("path",{d:"M12 6l4 6M16 6l-4 6",stroke:"#a00",strokeWidth:"1.5",strokeLinecap:"round"}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.5 6.5a3.5 3.5 0 0 1 0 5",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}),l.jsx("path",{d:"M13.5 5a6 6 0 0 1 0 8",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})]})}function N4(){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M9 2.5a3.5 3.5 0 0 0-3.5 3.5c0 4-1.5 5-1.5 5h10s-1.5-1-1.5-5A3.5 3.5 0 0 0 9 2.5z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.5 13.5a1.5 1.5 0 0 0 3 0",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round"})]})}function M4({connected:e}){const n=e?"#00c000":"#5a5a5a";return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1",y:"3",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"8",y:"9",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("path",{d:"M5.5 9.5v1.5h7",fill:"none",stroke:"#000",strokeWidth:"0.8"})]})}function L4(e){const[n,o]=g.useState(()=>new Date);return g.useEffect(()=>{const i=setInterval(()=>o(new Date),e);return()=>clearInterval(i)},[e]),n}function O4(e,n){const o=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0");if(n.clock24h){const d=String(e.getHours()).padStart(2,"0");return n.clockSeconds?`${d}:${o}:${i}`:`${d}:${o}`}const a=e.getHours()>=12?"PM":"AM",u=e.getHours()%12||12;return n.clockSeconds?`${u}:${o}:${i} ${a}`:`${u}:${o} ${a}`}const z4=["January","February","March","April","May","June","July","August","September","October","November","December"],_4=["S","M","T","W","T","F","S"],F4=["M","T","W","T","F","S","S"];function B4({today:e,firstDayMonday:n}){const o=e.getFullYear(),i=e.getMonth(),a=new Date(o,i,1).getDay(),u=n?(a+6)%7:a,d=new Date(o,i+1,0).getDate(),p=n?F4:_4,h=[];for(let m=0;m<u;m++)h.push(null);for(let m=1;m<=d;m++)h.push(m);return l.jsxs("div",{style:{width:196},children:[l.jsxs("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:6},children:[z4[i]," ",o]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,textAlign:"center"},children:[p.map((m,y)=>l.jsx("div",{style:{fontWeight:"bold",color:"#000080",fontSize:11},children:m},y)),h.map((m,y)=>{const w=m===e.getDate();return l.jsx("div",{style:{padding:"2px 0",fontSize:11,background:w?"#000080":"transparent",color:w?"#fff":"#000"},children:m??""},y)})]})]})}const W4={info:"#000080",warning:"#806000",error:"#800000"};function H4({items:e}){return l.jsxs("div",{style:{width:260},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{fontWeight:"bold"},children:"Notifications"}),e.length>0&&l.jsx("button",{onClick:()=>w$(),style:{fontSize:11,cursor:"pointer",border:"1px solid #808080",background:"#c0c0c0"},children:"Clear"})]}),l.jsx("div",{style:{maxHeight:220,overflowY:"auto",background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080"},children:e.length===0?l.jsx("div",{style:{padding:12,color:"#666",textAlign:"center"},children:"No notifications"}):[...e].reverse().map(n=>l.jsxs("div",{style:{padding:"6px 8px",borderBottom:"1px solid #e0e0e0",display:"flex",gap:6},children:[n.icon&&l.jsx("img",{src:n.icon,alt:"",style:{width:16,height:16,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",color:W4[n.type]??"#000"},children:n.title}),l.jsx("div",{style:{color:"#000",wordBreak:"break-word"},children:n.body})]})]},n.id))})]})}const U4=({username:e})=>{const n=un(),o=L4(n.clockSeconds?1e3:1e4),[i,a]=g.useState(null),u=g.useRef(null);g.useSyncExternalStore(a8,()=>`${Pf()}|${Nf()}`);const d=Pf(),p=Nf();g.useSyncExternalStore(Hp,()=>`${Tx()}|${tp().length}`);const h=Tx(),m=tp().length;g.useSyncExternalStore(Uw,()=>String(nx().length));const y=nx();g.useEffect(()=>{if(!i)return;const k=E=>{var C;(C=u.current)!=null&&C.contains(E.target)||a(null)},T=E=>E.key==="Escape"&&a(null);return document.addEventListener("mousedown",k),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",k),document.removeEventListener("keydown",T)}},[i]);const w=k=>{Zo(),a(T=>T===k?null:k)};return l.jsxs(l.Fragment,{children:[l.jsxs(I4,{ref:u,className:"tray-clock",children:[l.jsx(rf,{title:h?`Network: connected (${m} online)`:"Network: offline",onClick:()=>{Zo(),a(null)},children:l.jsx(M4,{connected:h})}),l.jsx(rf,{title:p?"Volume: muted":`Volume: ${Math.round(d*100)}%`,onClick:()=>w("volume"),children:l.jsx(P4,{muted:p})}),l.jsx(rf,{title:`Notifications (${y.length})`,onClick:()=>w("notifications"),children:l.jsx(N4,{})}),e&&l.jsx("span",{style:{opacity:.85},children:e}),n.showClock&&l.jsx("span",{style:{cursor:"pointer"},onClick:()=>w("clock"),children:O4(o,n)})]}),i==="volume"&&qt.createPortal(l.jsxs(of,{style:{right:8,bottom:nf+6,width:96},onMouseDown:k=>k.stopPropagation(),children:[l.jsx("div",{style:{textAlign:"center",marginBottom:4},children:"Volume"}),l.jsx("div",{style:{display:"flex",justifyContent:"center",height:120},children:l.jsx(qy,{orientation:"vertical",size:"120px",min:0,max:100,step:1,value:Math.round(d*100),onChange:k=>Lw(k/100)})}),l.jsx("div",{style:{marginTop:6},children:l.jsx(ft,{checked:p,onChange:()=>Ow(!p),label:"Mute"})})]}),document.body),i==="clock"&&qt.createPortal(l.jsx(of,{style:{right:8,bottom:nf+6},onMouseDown:k=>k.stopPropagation(),children:l.jsx(B4,{today:o,firstDayMonday:n.firstDayMonday})}),document.body),i==="notifications"&&qt.createPortal(l.jsx(of,{style:{right:8,bottom:nf+6},onMouseDown:k=>k.stopPropagation(),children:l.jsx(H4,{items:y})}),document.body)]})},V4=40,K4=({process:e,minimized:n,children:o})=>{const[i,a]=g.useState(null),u=g.useRef(null),d=g.useRef(null),p=()=>{u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{var w;const y=(w=d.current)==null?void 0:w.firstElementChild;y&&a(y.getBoundingClientRect())},400)},h=()=>{u.current&&clearTimeout(u.current),u.current=null,a(null)},m=n?"Minimized":e.priority===0?"Active":"Running";return l.jsxs("span",{ref:d,style:{display:"contents"},onMouseEnter:p,onMouseLeave:h,onMouseDown:h,children:[o,i&&qt.createPortal(l.jsx("div",{style:{position:"fixed",left:Math.max(4,Math.min(i.left,window.innerWidth-184)),bottom:V4+6,width:180,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",padding:8,zIndex:3e6,pointerEvents:"none",fontSize:12,color:"#000"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:e.icon,alt:"",style:{width:32,height:32,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),l.jsx("div",{style:{color:"#000080"},children:m})]})]})}),document.body)]})},Yx=({text:e,children:n})=>{const[o,i]=g.useState(null),a=g.useRef(null),u=p=>{const h=p.clientX,m=p.clientY;a.current&&clearTimeout(a.current),a.current=setTimeout(()=>i({x:h,y:m}),500)},d=()=>{a.current&&clearTimeout(a.current),a.current=null,i(null)};return l.jsxs("span",{style:{display:"contents"},onMouseEnter:u,onMouseLeave:d,onMouseDown:d,children:[n,o&&e&&qt.createPortal(l.jsx("div",{style:{position:"fixed",left:o.x+12,top:o.y+18,background:"#ffffe1",border:"1px solid #000",padding:"1px 5px",fontSize:12,color:"#000",pointerEvents:"none",zIndex:3e6,whiteSpace:"nowrap",boxShadow:"1px 1px 1px rgba(0,0,0,0.3)"},children:e}),document.body)]})},cr="/w95.png",Yo="/controlpanel.png",Ua=40,Q4=L.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${Ua}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 4px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    z-index: 99999;
    transition: transform 0.18s ease;
    transform: translateY(${({$hidden:e})=>e?`${Ua-3}px`:"0"});
`,q4=L.button`
    flex: 0 1 160px;
    min-width: 90px;
    max-width: 160px;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 6px;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 12px;
    color: #000;
    background: #c0c0c0;
    cursor: pointer;
    border: 2px solid;
    border-color: ${e=>e.$pressed?"#808080 #ffffff #ffffff #808080":"#ffffff #808080 #808080 #ffffff"};
`,sf=new Map(zr.map(e=>[e.exec,e])),G4=L.button`
    width: 26px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #808080 #ffffff #ffffff #808080;
    }
`,Y4=L.button`
    width: 26px;
    height: 30px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    &:hover {
        border-color: #808080 #ffffff #ffffff #808080;
    }
`,X4=[{name:"Terminal",icon:qp,componentName:"terminal"},{name:"Explorer",icon:Et,componentName:"explorer"},{name:"Notes",icon:Hr,componentName:"notes"},{name:"WordPad",icon:Vv,componentName:"wordpad"},{name:"VortexCode",icon:Vp,componentName:"vortexcode"},{name:"VortexCalc",icon:Kp,componentName:"vortexcalc"},{name:"Markdown Studio",icon:Qp,componentName:"markdown"},{name:"GameCache",icon:Up,componentName:"backlogger"},{name:"Network Neighborhood",icon:eh,componentName:"network"},{name:"WinPopup",icon:Cs,componentName:"messenger"},{name:"Task Manager",icon:wc,componentName:"task_manager"},{name:"Control Panel",icon:Yo,componentName:"control_panel"},{name:"Calculator",icon:Gp,componentName:"calculator"},{name:"Minesweeper",icon:Yp,componentName:"minesweeper"},{name:"Solitaire",icon:Xp,componentName:"solitaire"},{name:"Snake",icon:Jp,componentName:"snake"},{name:"FreeCell",icon:Zp,componentName:"freecell"},{name:"Clock",icon:Ba,componentName:"clock"},{name:"Paint",icon:Wa,componentName:"paint"}],J4=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),[a,u]=g.useState(!1),{changePriority:d,processes:p,addProcess:h,handleProceessLocationChange:m}=zn(),{minimized:y,minimize:w,restore:k,sssStyle:T}=Yt(),{username:E,logout:C}=Xn(),$=yc(),b=E||"user",j=$4(b),S=un(),R=g.useRef([]),M=()=>{const F=p.filter(P=>P.uuid&&!y.includes(P.uuid));F.length?(R.current=F.map(P=>P.uuid),F.forEach(P=>P.uuid&&w(P.uuid))):(R.current.forEach(P=>k(P)),R.current=[]),Zo()},V=F=>{const P=sf.get(F);P&&(h({name:P.name,icon:P.icon,componentName:F}),Zo())},Z=F=>{if(!F)return;const P=F.getBoundingClientRect().top,z=window.innerHeight-Ua-P-8;F.style.maxHeight=`${Math.max(140,z)}px`,F.style.overflowY="auto"},ne=pi(),[ie,me]=g.useState(null),[de,xe]=g.useState(!1);g.useEffect(()=>{if(!ie)return;const F=()=>me(null);return document.addEventListener("click",F),()=>document.removeEventListener("click",F)},[ie]);const ce=()=>{p.forEach((F,P)=>{F.uuid&&(k(F.uuid),m(F.uuid,{x:340+P*34,y:230+P*34}))}),me(null)},G=()=>{const F=p.length;if(F){const P=Math.ceil(Math.sqrt(F)),z=Math.ceil(F/P),ee=window.innerWidth/P,ue=(window.innerHeight-Ua)/z;p.forEach((fe,Q)=>{if(!fe.uuid)return;const Y=Q%P,re=Math.floor(Q/P);k(fe.uuid),m(fe.uuid,{x:Math.round(Y*ee+ee/2),y:Math.round(re*ue+ue/2)})})}me(null)},N=()=>{p.forEach(F=>F.uuid&&w(F.uuid)),me(null)};g.useEffect(()=>{if(!e)return;const F=()=>{n(!1),i(!1),u(!1)},P=z=>z.key==="Escape"&&F();return document.addEventListener("click",F),document.addEventListener("keydown",P),()=>{document.removeEventListener("click",F),document.removeEventListener("keydown",P)}},[e]);const I=F=>{h(F),n(!1),i(!1)},q=F=>{const P=F.uuid;P&&(y.includes(P)?(k(P),d(F,0)):F.priority===0?w(P):d(F,0))},W=S.autoHideTaskbar&&!de&&!e&&!o&&!a&&!ie;return l.jsxs(Q4,{$hidden:W,onMouseEnter:()=>xe(!0),onMouseLeave:()=>xe(!1),onClick:F=>F.stopPropagation(),onContextMenu:F=>{F.preventDefault(),F.stopPropagation(),me({x:F.clientX,y:F.clientY})},children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(We,{onClick:()=>{Zo(),n(F=>!F),i(!1),u(!1)},active:e,style:{fontWeight:"bold",height:30,display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:cr,alt:"",style:{height:20}}),"Start"]}),e&&l.jsxs("div",{style:{position:"absolute",bottom:"calc(100% + 3px)",left:0,display:"flex",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)"},children:[l.jsx("div",{style:{width:30,background:T?"linear-gradient(180deg, #ff2d95 0%, #6a1b9a 55%, #00e5d0 100%)":"linear-gradient(180deg, #00007a 0%, #000033 100%)",borderTop:"2px solid #dfdfdf",borderLeft:"2px solid #dfdfdf",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsxs("div",{style:{writingMode:"vertical-rl",transform:"rotate(180deg)",whiteSpace:"nowrap",color:"#fff",padding:"12px 0",display:"flex",alignItems:"center",gap:4},children:[l.jsx("span",{style:{fontWeight:400,letterSpacing:1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"Vortex"}),l.jsx("span",{style:{fontWeight:"bold",fontSize:20,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"98"})]})}),l.jsxs(gs,{style:{width:200,position:"static"},children:[l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[l.jsxs(xt,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Et,style:{width:20}})," Programs"]}),l.jsx("span",{children:"▸"})]}),o&&l.jsx(gs,{ref:Z,style:{position:"absolute",left:"100%",top:0,width:220},children:X4.filter(F=>!$.has(F.componentName)).map(F=>l.jsxs(xt,{style:{cursor:"pointer",justifyContent:"space-between"},onClick:()=>I(F),onContextMenu:P=>{P.preventDefault(),P.stopPropagation(),E4(b,F.componentName)},title:"Right-click to pin/unpin to Quick Launch",children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:F.icon,style:{width:20}})," ",F.name]}),o1(b,F.componentName)&&l.jsx("span",{style:{color:"#000080"},children:"📌"})]},F.componentName))})]}),l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>I({name:"Explorer",icon:Et,componentName:"explorer",argv:["/home/user/Documents"]}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Et,style:{width:20}})," Documents"]})}),l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[l.jsxs(xt,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Yo,style:{width:20}})," Settings"]}),l.jsx("span",{children:"▸"})]}),a&&l.jsxs(gs,{ref:Z,style:{position:"absolute",left:"100%",top:0,width:220},children:[l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>I({name:"Control Panel",icon:Yo,componentName:"control_panel"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Yo,style:{width:20}})," Control Panel"]})}),l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>I({name:"Add/Remove Programs",icon:Yo,componentName:"add_remove"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Yo,style:{width:20}})," Add/Remove Programs"]})})]})]}),l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>I({name:"Find Files",icon:op,componentName:"find"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:op,style:{width:20}})," Find"]})}),l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>I({name:"Help",icon:ip,componentName:"help"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:ip,style:{width:20}})," Help"]})}),l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>{n(!1),l1()},children:"Run..."}),l.jsx(Ja,{}),l.jsxs(xt,{style:{cursor:"pointer"},onClick:()=>{n(!1),C()},children:["Log Off ",E,"..."]}),l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>ne("/shutdown"),children:"Shut Down..."})]})]})]}),S.showQuickLaunch&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2,paddingLeft:4,borderLeft:"1px solid #808080",borderRight:"1px solid #808080",marginLeft:2,marginRight:2},children:[l.jsx(Yx,{text:"Show Desktop",children:l.jsx(G4,{onClick:M,"aria-label":"Show Desktop",children:l.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1.5",y:"2",width:"13",height:"9",rx:"0.5",fill:"#000080",stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"5.5",y:"11",width:"5",height:"1.5",fill:"#808080"}),l.jsx("rect",{x:"3.5",y:"12.5",width:"9",height:"1.5",fill:"#404040"})]})})}),j.filter(F=>sf.has(F)&&!$.has(F)).map(F=>{const P=sf.get(F);return l.jsx(Yx,{text:P.name,children:l.jsx(Y4,{onClick:()=>V(F),onContextMenu:z=>{z.preventDefault(),z.stopPropagation(),i1(b,F)},"aria-label":P.name,title:P.name,children:l.jsx("img",{src:P.icon,style:{width:18,height:18}})})},F)})]}),l.jsx("div",{style:{display:"flex",flex:1,gap:3,overflow:"hidden",marginLeft:2},children:p.map(F=>{const P=F.priority===0&&!y.includes(F.uuid??"");return l.jsx(K4,{process:F,minimized:y.includes(F.uuid??""),children:l.jsxs(q4,{$pressed:P,onClick:()=>q(F),children:[l.jsx("img",{src:F.icon,style:{width:18,height:18,flexShrink:0}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:F.name})]})},F.uuid)})}),l.jsx(U4,{username:E}),ie&&l.jsx(xo,{x:ie.x,y:ie.y,onClose:()=>me(null),items:[{label:"Cascade Windows",onClick:ce},{label:"Tile Windows",onClick:G},{label:"Minimize All Windows",onClick:N},{separator:!0},{label:"Show the Desktop",onClick:M},{label:"Task Manager",icon:wc,onClick:()=>V("task_manager")},{separator:!0},{label:"Properties",onClick:()=>V("control_panel")}]})]})};let up=[];const dp=new Set,Z4=()=>dp.forEach(e=>e());function c1(e){up=[...up,{kind:e.kind??"app",app:e.app,pid:e.pid,message:e.message,stack:e.stack,ts:Date.now()}].slice(-30),Z4()}function Xx(){return up}function e5(e){return dp.add(e),()=>dp.delete(e)}class t5 extends J.Component{constructor(){super(...arguments);Ne(this,"state",{error:null,details:!1,stack:""})}static getDerivedStateFromError(o){return{error:o}}componentDidCatch(o,i){const a=`${o.stack??o.message}

Component stack:${i.componentStack??""}`;this.setState({stack:a}),c1({app:this.props.appName,pid:this.props.pid,message:o.message,stack:a})}render(){var i;if(!this.state.error)return this.props.children;const{appName:o}=this.props;return l.jsx("div",{style:{padding:16,background:"#c0c0c0",height:"100%",boxSizing:"border-box",overflow:"auto",color:"#000"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",maxWidth:380,margin:"0 auto"},children:[l.jsx("div",{style:{background:"linear-gradient(90deg, #000080, #1084d0)",color:"#fff",fontWeight:"bold",padding:"2px 4px",fontSize:12},children:o}),l.jsxs("div",{style:{padding:14,fontSize:12,lineHeight:1.5},children:[l.jsx("p",{style:{margin:0},children:"This program has performed an illegal operation and will be shut down."}),l.jsx("p",{style:{margin:"8px 0 0"},children:"If the problem persists, contact the program vendor."}),this.state.details&&l.jsxs("pre",{style:{marginTop:12,padding:8,background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080",fontSize:10,fontFamily:"monospace",whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:160,overflow:"auto"},children:["DR. WATSON — application fault",`
`,"App: ",o,"  PID: ",((i=this.props.pid)==null?void 0:i.slice(0,8))??"—",`
`,this.state.error.message,`

`,this.state.stack]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:16},children:[l.jsx(lf,{onClick:this.props.onClose,children:"Close"}),l.jsx(lf,{onClick:()=>this.setState({error:null,details:!1}),children:"Ignore"}),l.jsxs(lf,{onClick:()=>this.setState(a=>({details:!a.details})),children:["Details ",this.state.details?"<<":">>"]})]})]})]})})}}const lf=({onClick:e,children:n})=>l.jsx("button",{onClick:e,style:{minWidth:75,height:23,fontSize:12,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",cursor:"pointer"},onMouseDown:o=>{o.currentTarget.style.borderColor="#808080 #ffffff #ffffff #808080"},onMouseUp:o=>{o.currentTarget.style.borderColor="#ffffff #808080 #808080 #ffffff"},children:n}),hs=40,n5=[{key:"n",dx:0,dy:-1,cursor:"ns-resize",box:{top:-3,left:10,right:10,height:7}},{key:"s",dx:0,dy:1,cursor:"ns-resize",box:{bottom:-3,left:10,right:10,height:7}},{key:"w",dx:-1,dy:0,cursor:"ew-resize",box:{left:-3,top:10,bottom:10,width:7}},{key:"e",dx:1,dy:0,cursor:"ew-resize",box:{right:-3,top:10,bottom:10,width:7}},{key:"nw",dx:-1,dy:-1,cursor:"nwse-resize",box:{left:-3,top:-3,width:14,height:14}},{key:"ne",dx:1,dy:-1,cursor:"nesw-resize",box:{right:-3,top:-3,width:14,height:14}},{key:"sw",dx:-1,dy:1,cursor:"nesw-resize",box:{left:-3,bottom:-3,width:14,height:14}},{key:"se",dx:1,dy:1,cursor:"nwse-resize",box:{right:-3,bottom:-3,width:14,height:14}}],oa=22;function r5(e,n){const o=window.innerWidth,i=window.innerHeight-hs,a=e<=oa,u=e>=o-oa,d=n<=oa,p=n>=i-oa;return d&&a?{x:0,y:0,w:o/2,h:i/2}:d&&u?{x:o/2,y:0,w:o/2,h:i/2}:p&&a?{x:0,y:i/2,w:o/2,h:i/2}:p&&u?{x:o/2,y:i/2,w:o/2,h:i/2}:a?{x:0,y:0,w:o/2,h:i}:u?{x:o/2,y:0,w:o/2,h:i}:d?{x:0,y:0,w:o,h:i}:null}const o5=({process:e})=>{var Q,Y,re,H;const{changePriority:n,closeProcess:o,handleProceessLocationChange:i}=zn(),{changeCursor:a,minimized:u,minimize:d}=Yt(),p=un(),[h,m]=g.useState({x:((Q=e.location)==null?void 0:Q.x)??0,y:((Y=e.location)==null?void 0:Y.y)??0}),[y,w]=g.useState(!1),[k,T]=g.useState(null),[E,C]=g.useState(!1),[$,b]=g.useState(!1),[j,S]=g.useState(!1),[R,M]=g.useState(null),V=g.useRef(null);g.useEffect(()=>{if(!j)return;const A=()=>S(!1);return document.addEventListener("click",A),()=>document.removeEventListener("click",A)},[j]);const Z=g.useRef(null),ne=g.useRef(null),ie=g.useRef(null),me=e.priority===0,de=!!e.uuid&&u.includes(e.uuid);g.useEffect(()=>{var A,B;y||m({x:((A=e.location)==null?void 0:A.x)??0,y:((B=e.location)==null?void 0:B.y)??0})},[(re=e.location)==null?void 0:re.x,(H=e.location)==null?void 0:H.y]),g.useEffect(()=>(y?(a("Grabbing.cur"),document.addEventListener("mousemove",ce),document.addEventListener("mouseup",G)):(a("arrow.cur"),document.removeEventListener("mousemove",ce),document.removeEventListener("mouseup",G)),()=>{document.removeEventListener("mousemove",ce),document.removeEventListener("mouseup",G)}),[y]);const xe=A=>{var le;if(E)return;e.uuid&&n(e,0);const B=(le=Z.current)==null?void 0:le.getBoundingClientRect();B&&(ne.current={mouseX:A.clientX,mouseY:A.clientY,left:B.left,top:B.top,w:B.width,h:B.height},T({x:B.left,y:B.top,w:B.width,h:B.height}),w(!0))},ce=A=>{if(!ne.current)return;const B=p.windowSnap?r5(A.clientX,A.clientY):null;if(ie.current=B,B){T(B);return}const le=A.clientX-ne.current.mouseX,he=A.clientY-ne.current.mouseY,ge=ne.current.w,je=ne.current.h;if(p.liveDrag&&e.uuid){let Te=ne.current.left+le,Me=ne.current.top+he;Te=Math.min(Math.max(Te,80-ge),window.innerWidth-80),Me=Math.min(Math.max(Me,0),window.innerHeight-hs-28),m({x:Math.round(Te+ge/2),y:Math.round(Me+je/2)}),T(null)}else T({x:ne.current.left+le,y:ne.current.top+he,w:ge,h:je})},G=A=>{w(!1);const B=ne.current,le=ie.current;if(le&&e.uuid){C(!1),M({w:le.w,h:le.h});const he={x:Math.round(le.x+le.w/2),y:Math.round(le.y+le.h/2)};m(he),i(e.uuid,he)}else if(B&&e.uuid){let he=B.left+(A.clientX-B.mouseX),ge=B.top+(A.clientY-B.mouseY);he=Math.min(Math.max(he,80-B.w),window.innerWidth-80),ge=Math.min(Math.max(ge,0),window.innerHeight-hs-28);const je={x:Math.round(he+B.w/2),y:Math.round(ge+B.h/2)};m(je),i(e.uuid,je)}T(null),ie.current=null,ne.current=null},N=()=>{h8(),C(A=>!A)},I=()=>{if(p8(),!!e.uuid){if(E){d(e.uuid);return}b(!0),setTimeout(()=>{e.uuid&&d(e.uuid),b(!1)},150)}},q=A=>A.stopPropagation(),W=240,F=150,P=A=>{const B=V.current;if(!B)return;const le=A.clientX-B.mouseX,he=A.clientY-B.mouseY;let ge=B.w,je=B.h,Te=B.left,Me=B.top;B.dx===1&&(ge=Math.max(W,B.w+le)),B.dx===-1&&(ge=Math.max(W,B.w-le),Te=B.left+(B.w-ge)),B.dy===1&&(je=Math.max(F,B.h+he)),B.dy===-1&&(je=Math.max(F,B.h-he),Me=B.top+(B.h-je)),M({w:ge,h:je}),m({x:Te+ge/2,y:Me+je/2})},z=()=>{V.current=null,document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",z)},ee=(A,B)=>le=>{var ge;if(E)return;le.preventDefault(),le.stopPropagation();const he=(ge=Z.current)==null?void 0:ge.getBoundingClientRect();he&&(V.current={mouseX:le.clientX,mouseY:le.clientY,w:he.width,h:he.height,left:he.left,top:he.top,dx:A,dy:B},document.addEventListener("mousemove",P),document.addEventListener("mouseup",z))},ue=E?void 0:$?"winMinimize 150ms ease-in forwards":"winOpen 140ms ease-out",fe=E?{position:"fixed",top:0,left:0,width:"100vw",height:`calc(100vh - ${hs}px)`,transform:"none",zIndex:me?9999:e.priority+1,userSelect:"none",display:de?"none":"flex",flexDirection:"column"}:{position:"absolute",top:`${h.y}px`,left:`${h.x}px`,transform:"translate(-50%, -50%)",zIndex:me?9999:e.priority+1,userSelect:"none",display:de?"none":R?"flex":void 0,flexDirection:"column",animation:R?void 0:ue,minWidth:240,minHeight:150,maxWidth:"100vw",maxHeight:`calc(100vh - ${hs}px)`,...R?{width:R.w,height:R.h}:{}};return l.jsxs(l.Fragment,{children:[l.jsxs(ui,{ref:Z,onClick:()=>n(e,0),resizable:!E,className:"window",style:fe,children:[l.jsxs(ci,{onMouseDown:xe,onDoubleClick:N,className:"window-title",style:{display:"flex",alignItems:"center",justifyContent:"space-between",...Is(me)},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",overflow:"hidden",position:"relative"},children:[l.jsx("img",{src:e.icon,onMouseDown:A=>A.stopPropagation(),onClick:A=>{A.stopPropagation(),S(B=>!B)},onDoubleClick:A=>{A.stopPropagation(),e.uuid&&o(e.uuid)},style:{width:18,height:18,marginRight:4,cursor:"pointer"}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),j&&l.jsxs(gs,{style:{position:"absolute",left:0,top:"100%",width:150,zIndex:100002},onMouseDown:A=>A.stopPropagation(),children:[l.jsx(xt,{disabled:!E,style:{cursor:E?"pointer":"default"},onClick:()=>C(!1),children:"Restore"}),l.jsx(xt,{disabled:!0,children:"Move"}),l.jsx(xt,{disabled:!0,children:"Size"}),l.jsx(xt,{style:{cursor:"pointer"},onClick:I,children:"Minimize"}),l.jsx(xt,{disabled:E,style:{cursor:E?"default":"pointer"},onClick:()=>C(!0),children:"Maximize"}),l.jsx(Ja,{}),l.jsx(xt,{style:{cursor:"pointer"},onClick:()=>e.uuid&&o(e.uuid),children:"Close"})]})]}),l.jsxs("div",{style:{display:"flex",gap:2},onMouseDown:q,onClick:q,children:[l.jsx(af,{label:"Minimize",onClick:I,glyph:l.jsx("span",{style:{display:"block",width:8,height:2,background:"#000",marginTop:5}})}),l.jsx(af,{label:"Maximize",onClick:N,glyph:l.jsx("span",{style:{display:"block",width:9,height:8,border:"1px solid #000",borderTopWidth:2}})}),l.jsx(af,{label:"Close",onClick:()=>e.uuid&&o(e.uuid),glyph:l.jsx("span",{style:{fontWeight:"bold",fontSize:11,lineHeight:"10px"},children:"✕"})})]})]}),e.component?l.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",...E||R?{flex:1,minHeight:0,overflow:"auto"}:{}},children:l.jsx(D2,{pid:e.uuid??null,children:l.jsx(t5,{appName:e.name,pid:e.uuid??null,onClose:()=>e.uuid&&o(e.uuid),children:l.jsx(g.Suspense,{fallback:l.jsxs("div",{style:{padding:24,textAlign:"center",color:"#000"},children:["Loading ",e.name,"…"]}),children:J.createElement(e.component)})})})}):"",!E&&n5.map(A=>l.jsx("div",{onMouseDown:ee(A.dx,A.dy),style:{position:"absolute",zIndex:20,cursor:A.cursor,...A.box}},A.key))]},e.uuid),k&&qt.createPortal(l.jsx("div",{style:{position:"fixed",left:k.x,top:k.y,width:k.w,height:k.h,border:"2px dotted #fff",mixBlendMode:"difference",pointerEvents:"none",zIndex:100001}}),document.body)]})},af=({glyph:e,onClick:n,label:o})=>l.jsx(We,{"aria-label":o,onClick:n,style:{width:20,height:18,minWidth:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e}),i5=()=>{const{processes:e}=zn();return l.jsx(l.Fragment,{children:e.map(n=>l.jsx(o5,{process:n},n.uuid))})},s5="/clouds.jpg",l5=L.div`
    position: fixed;
    inset: 0;
    background: url(${s5}) center / cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`,Jx=L.label`
    display: grid;
    grid-template-columns: 86px 1fr;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 13px;
`,a5=()=>{const{login:e,register:n}=Xn(),[o,i]=g.useState("login"),[a,u]=g.useState(""),[d,p]=g.useState(""),[h,m]=g.useState(null),[y,w]=g.useState(!1),k=async E=>{if(E.preventDefault(),!(y||!a.trim()||!d)){w(!0),m(null);try{o==="login"?await e(a.trim(),d):await n(a.trim(),d)}catch(C){m(C instanceof Error?C.message:"Sign in failed."),w(!1)}}},T=()=>{i(E=>E==="login"?"register":"login"),m(null)};return l.jsx(l5,{children:l.jsxs(ui,{style:{width:360},children:[l.jsxs(ci,{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:cr,alt:"",style:{width:18,height:18}}),l.jsx("span",{children:o==="login"?"Enter Network Password":"New VortexOS Account"})]}),l.jsx(Ur,{children:l.jsxs("form",{onSubmit:k,children:[l.jsx("p",{style:{marginTop:0,marginBottom:14,fontSize:13},children:o==="login"?"Type a user name and password to log on to VortexOS.":"Choose a user name and password to create your account."}),l.jsxs(Jx,{children:["User name:",l.jsx(ur,{value:a,onChange:E=>u(E.target.value),disabled:y,autoFocus:!0})]}),l.jsxs(Jx,{children:["Password:",l.jsx(ur,{type:"password",value:d,onChange:E=>p(E.target.value),disabled:y})]}),h&&l.jsx("p",{style:{color:"#aa0000",fontSize:12,margin:"4px 0 10px"},children:h}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:6},children:[l.jsx(We,{type:"submit",primary:!0,disabled:y||!a.trim()||!d,children:y?"Please wait…":o==="login"?"OK":"Create"}),l.jsx(We,{type:"button",onClick:T,disabled:y,children:o==="login"?"New user…":"Cancel"})]})]})})]})})},c5=()=>{const{alert:e}=Ps(),n=g.useRef(0);return g.useEffect(()=>(n.current=np().length,Hp(()=>{const o=np();for(let i=n.current;i<o.length;i++){const a=o[i];a.mine||(Qw()==="classic"?e({title:`Message from ${a.from}`,message:a.body,type:"info"}):y$({title:`Message from ${a.from}`,body:a.body,type:"info",icon:Cs,action:{kind:"open-app",exec:"messenger",name:"WinPopup",icon:Cs}}))}n.current=o.length})),[e]),null},u5=40,d5=6e3,f5=bt`
    from { transform: translateX(120%); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
`,p5=L.div`
    position: fixed;
    right: 8px;
    bottom: ${u5+8}px;
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
    z-index: 100000;
    pointer-events: none;
`,h5=L.div`
    width: 260px;
    background: #ffffe1;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    padding: 0;
    font-size: 12px;
    pointer-events: auto;
    animation: ${f5} 0.18s ease-out;
`,m5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #000080, #1084d0);
    color: #fff;
    font-weight: bold;
    padding: 2px 4px;
`,g5={info:"#000080",warning:"#806000",error:"#800000"},x5=({toast:e,onOpenApp:n})=>{g.useEffect(()=>{Mp();const a=setTimeout(()=>Md(e.id),d5);return()=>clearTimeout(a)},[e.id]);const o=!!e.action,i=()=>{var a;((a=e.action)==null?void 0:a.kind)==="open-app"&&n(e.action.exec,e.action.name,e.action.icon),Md(e.id)};return l.jsxs(h5,{$type:e.type,children:[l.jsxs(m5,{style:{background:`linear-gradient(90deg, ${g5[e.type]??"#000080"}, #1084d0)`},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:e.icon??cr,alt:"",style:{width:14,height:14}}),e.title]}),l.jsx("button",{"aria-label":"Close notification",onClick:a=>{a.stopPropagation(),Md(e.id)},style:{width:16,height:14,lineHeight:"10px",fontSize:11,border:"1px solid #fff",background:"#c0c0c0",color:"#000",cursor:"pointer"},children:"×"})]}),l.jsxs("div",{onClick:o?i:void 0,style:{padding:"8px 10px",cursor:o?"pointer":"default",color:"#000"},children:[e.body,o&&l.jsx("div",{style:{marginTop:6,color:"#000080",textDecoration:"underline",fontSize:11},children:"Click to open"})]})]})},y5=()=>{const{addProcess:e}=zn();g.useSyncExternalStore(Uw,()=>tx().map(i=>i.id).join(","));const n=tx(),o=(i,a,u)=>{e({name:a,icon:u,componentName:i})};return l.jsx(p5,{children:n.map(i=>l.jsx(x5,{toast:i,onOpenApp:o},i.id))})},w5=bt`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`,v5=L.span`
    animation: ${w5} 1s step-end infinite;
`,b5=L.div`
    position: fixed;
    inset: 0;
    z-index: 2000001;
    background: #0000aa;
    color: #c0c0c0;
    font-family: "Courier New", "Lucida Console", monospace;
    font-size: 15px;
    line-height: 1.5;
    padding: 8vh 12vw;
    box-sizing: border-box;
    cursor: none;
`,k5=L.div`
    background: #c0c0c0;
    color: #0000aa;
    display: inline-block;
    padding: 0 8px;
    font-weight: bold;
    margin: 0 auto 28px;
`,S5=()=>{const e=r4(),n=Vr(),o=pi();return g.useEffect(()=>{e&&c1({kind:"kernel",app:"VortexOS Kernel",pid:null,message:e.message,stack:e.stack??""})},[e]),g.useEffect(()=>{if(!e)return;const i=()=>{n.clearPanic(),o("/"),window.location.assign("/")},a=u=>{if(u.preventDefault(),u.ctrlKey&&u.altKey&&(u.key==="Delete"||u.key==="Backspace")){i();return}e.recoverable?n.clearPanic():i()};return window.addEventListener("keydown",a,!0),()=>window.removeEventListener("keydown",a,!0)},[e,n,o]),e?l.jsxs(b5,{onClick:()=>n.clearPanic(),children:[l.jsx("div",{style:{textAlign:"center"},children:l.jsx(k5,{children:"VortexOS"})}),l.jsxs("p",{style:{margin:"0 0 18px"},children:["A fatal exception ",e.code," has occurred at ",e.address,". The current application will be terminated."]}),l.jsx("p",{style:{margin:"0 0 6px"},children:"*  Press any key to terminate the current application."}),l.jsxs("p",{style:{margin:"0 0 28px"},children:["*  Press CTRL+ALT+DEL again to restart your computer. You will",l.jsx("br",{}),"   lose any unsaved information in all applications."]}),e.syscall&&l.jsxs("p",{style:{margin:"0 0 28px",opacity:.7},children:["Faulting syscall: ",e.syscall," — ",e.message]}),l.jsxs("p",{style:{textAlign:"center",margin:0},children:["Press any key to continue ",l.jsx(v5,{children:"_"})]})]}):null};class j5 extends J.Component{constructor(){super(...arguments);Ne(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(o,i){this.props.onFatal(o,`${o.stack??o.message}
${i.componentStack??""}`)}render(){return this.state.dead?null:this.props.children}}const C5=({children:e})=>{const n=Vr();return l.jsx(j5,{onFatal:(o,i)=>n.panic({message:o.message,stack:i,recoverable:!1}),children:e})};function Zx(e,n){const o=e.toLowerCase(),i=n.toLowerCase();if(o==="")return 1;let a=0,u=0,d=-2;for(let p=0;p<i.length&&u<o.length;p++)i[p]===o[u]&&(a+=1,p===d+1&&(a+=3),(p===0||i[p-1]===" "||i[p-1]==="/"||i[p-1]==="-"||i[p-1]==="_")&&(a+=5),p===0&&(a+=2),d=p,u++);return u<o.length?null:(a-=i.length*.05,i.startsWith(o)&&(a+=4),i===o&&(a+=10),a)}function E5(e,n){if(n.trim()==="")return[...e].sort((i,a)=>i.name.localeCompare(a.name));const o=[];for(const i of e){const a=Math.max(Zx(n,i.name)??-1/0,(Zx(n,i.exec)??-1/0)-2);a>-1/0&&o.push({app:i,score:a})}return o.sort((i,a)=>a.score-i.score||i.app.name.localeCompare(a.app.name)),o.map(i=>i.app)}const $5=L.div`
    position: fixed;
    inset: 0;
    z-index: 1500000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 14vh;
    background: rgba(0, 0, 0, 0.25);
`,T5=L.div`
    width: 460px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
`,A5=L.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #808080;
`,R5=L.input`
    flex: 1;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 15px;
    padding: 4px 6px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    background: #fff;
    outline: none;
`,D5=L.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    background: ${e=>e.$sel?"#000080":"transparent"};
    color: ${e=>e.$sel?"#fff":"#000"};
`,I5=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(""),[a,u]=g.useState(0),d=g.useRef(null),{addProcess:p}=zn(),{logout:h}=Xn(),m=pi(),y=yc();g.useEffect(()=>{const $=b=>{b.ctrlKey&&(b.code==="Space"||b.key===" ")&&(b.preventDefault(),n(j=>!j))};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[]),g.useEffect(()=>{e&&(i(""),u(0),setTimeout(()=>{var $;return($=d.current)==null?void 0:$.focus()},0))},[e]);const w=($,b,j)=>p({name:b,icon:j,componentName:$}),k=g.useMemo(()=>{const $=zr.filter(S=>!y.has(S.exec)).map(S=>({exec:S.exec,name:S.name,icon:S.icon,kind:"app",run:()=>w(S.exec,S.name,S.icon)})),b=[{exec:"run",name:"Run…",icon:cr,kind:"action",run:()=>l1()},{exec:"shutdown",name:"Shut Down…",icon:cr,kind:"action",run:()=>m("/shutdown")},{exec:"logoff",name:"Log Off",icon:cr,kind:"action",run:()=>h()}];return E5([...$,...b],o).slice(0,8)},[o,y]);if(g.useEffect(()=>u(0),[o]),!e)return null;const T=()=>n(!1),E=$=>{$&&(Zo(),T(),$.run())},C=$=>{if($.key==="Escape")return T();$.key==="ArrowDown"?($.preventDefault(),u(b=>Math.min(k.length-1,b+1))):$.key==="ArrowUp"?($.preventDefault(),u(b=>Math.max(0,b-1))):$.key==="Enter"&&($.preventDefault(),E(k[a]))};return qt.createPortal(l.jsx($5,{onMouseDown:T,children:l.jsxs(T5,{onMouseDown:$=>$.stopPropagation(),children:[l.jsxs(A5,{children:[l.jsx("img",{src:cr,alt:"",style:{width:22,height:22}}),l.jsx(R5,{ref:d,value:o,placeholder:"Search apps and actions…",onChange:$=>i($.target.value),onKeyDown:C})]}),l.jsx("div",{style:{maxHeight:320,overflowY:"auto"},children:k.length===0?l.jsx("div",{style:{padding:12,color:"#555",fontSize:13},children:"No matches"}):k.map(($,b)=>l.jsxs(D5,{$sel:b===a,onMouseEnter:()=>u(b),onClick:()=>E($),children:[l.jsx("img",{src:$.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1},children:$.name}),l.jsx("span",{style:{fontSize:11,opacity:.6},children:$.kind==="action"?"Action":"App"})]},`${$.kind}:${$.exec}`))}),l.jsxs("div",{style:{borderTop:"1px solid #808080",padding:"3px 8px",fontSize:11,color:"#444",display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"↑↓ navigate · Enter run · Esc close"}),l.jsx("span",{children:"Ctrl+Space"})]})]})}),document.body)},fp=new Map;for(const e of zr)fp.set(e.exec.toLowerCase(),e),fp.set(e.name.toLowerCase(),e);const P5=()=>{const e=A4(),n=cn(),{alert:o}=Ps(),[i,a]=g.useState(""),u=g.useRef(null);if(g.useEffect(()=>{e&&(a(cp()[0]??""),setTimeout(()=>{var p;return(p=u.current)==null?void 0:p.focus()},0))},[e]),!e)return null;const d=async()=>{var k;const p=i.trim();if(!p)return;D4(p),ra();const h=fp.get(p.toLowerCase());if(h){n.spawn(h.exec);return}if(p.startsWith("/")||p.startsWith("~")){const T=p.startsWith("~")?p.replace(/^~/,"/home/user"):p;await Bp(n,T)||o({title:"Run",message:`Cannot find '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"});return}const y=await new rv(n).run(p),w=(k=y.output)==null?void 0:k.trim();y.code!==0?o({title:"Run",message:w||`Cannot find the file '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"}):w&&o({title:`Run: ${p}`,message:w,type:"info"})};return qt.createPortal(l.jsx("div",{style:{position:"fixed",inset:0,zIndex:14e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.15)"},onMouseDown:ra,children:l.jsxs(ui,{style:{width:380},onMouseDown:p=>p.stopPropagation(),children:[l.jsxs(ci,{style:{display:"flex",alignItems:"center",gap:6,...Is(!0)},children:[l.jsx("img",{src:cr,alt:"",style:{width:16,height:16}}),"Run"]}),l.jsxs(Ur,{children:[l.jsxs("div",{style:{display:"flex",gap:10,marginBottom:12},children:[l.jsx("img",{src:cr,alt:"",style:{width:32,height:32}}),l.jsx("p",{style:{margin:0,fontSize:12,lineHeight:1.4},children:"Type the name of a program, folder, document, or command, and VortexOS will open it for you."})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[l.jsx("label",{style:{fontSize:12},children:"Open:"}),l.jsx("input",{ref:u,list:"run-mru",value:i,onChange:p=>a(p.target.value),onKeyDown:p=>{p.key==="Enter"&&d(),p.key==="Escape"&&ra()},style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:"3px 5px",border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff"}}),l.jsx("datalist",{id:"run-mru",children:[...cp(),...Rv()].map(p=>l.jsx("option",{value:p},p))})]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[l.jsx(We,{onClick:d,style:{minWidth:75},children:"OK"}),l.jsx(We,{onClick:ra,style:{minWidth:75},children:"Cancel"})]})]})]})}),document.body)},N5=()=>{var m;const{processes:e,changePriority:n}=zn(),{restore:o}=Yt(),[i,a]=g.useState(!1),[u,d]=g.useState(0),p=g.useRef([]),h=g.useRef(0);return g.useEffect(()=>{h.current=u},[u]),g.useEffect(()=>{const y=k=>{if(k.key!=="Tab"||!k.altKey){k.key==="Escape"&&i&&a(!1);return}const T=e.filter(E=>E.uuid);if(T.length!==0)if(k.preventDefault(),i){const E=p.current.length;d(C=>k.shiftKey?(C-1+E)%E:(C+1)%E)}else{const E=[...T].sort(($,b)=>($.priority??0)-(b.priority??0));p.current=E,a(!0);const C=k.shiftKey?E.length-1:Math.min(1,E.length-1);d(C)}},w=k=>{if((k.key==="Alt"||!k.altKey)&&i){const T=p.current[h.current];T!=null&&T.uuid&&(o(T.uuid),n(T,0)),a(!1)}};return window.addEventListener("keydown",y),window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",y),window.removeEventListener("keyup",w)}},[e,i,n,o]),!i||p.current.length===0?null:l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e6,pointerEvents:"none"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#dfdfdf #000 #000 #dfdfdf",boxShadow:"3px 3px 0 rgba(0,0,0,0.4)",padding:16,maxWidth:"80vw"},children:[l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",maxWidth:560},children:p.current.map((y,w)=>l.jsx("div",{style:{width:72,height:72,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:4,border:w===u?"2px solid #000080":"2px solid transparent",background:w===u?"#000080":"transparent"},children:l.jsx("img",{src:y.icon,alt:"",style:{width:32,height:32,objectFit:"contain"}})},y.uuid))}),l.jsx("p",{style:{textAlign:"center",margin:"10px 0 0",fontSize:13},children:(m=p.current[u])==null?void 0:m.name})]})})},M5=()=>{const e=vc(),{flashBusy:n}=Yt(),o=g.useRef(new Set(e.map(a=>a.pid))),i=g.useRef(!1);return g.useEffect(()=>{const a=new Set(e.map(u=>u.pid));if(i.current){let u=!1,d=!1;a.forEach(p=>{o.current.has(p)||(u=!0)}),o.current.forEach(p=>{a.has(p)||(d=!0)}),u&&(d8(),n()),d&&f8()}i.current=!0,o.current=a},[e,n]),null},L5=()=>{const{type:e,wait:n}=Ww(),[o,i]=g.useState(!1),a=g.useRef(Date.now()),u=g.useRef(null);return g.useEffect(()=>{const d=()=>{a.current=Date.now(),i(m=>m&&!1)};window.addEventListener("mousemove",d),window.addEventListener("mousedown",d),window.addEventListener("keydown",d),window.addEventListener("wheel",d);const p=setInterval(()=>{const m=Bw();m.type!=="none"&&Date.now()-a.current>m.wait*6e4&&i(!0)},1e3),h=n$(()=>i(!0));return()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mousedown",d),window.removeEventListener("keydown",d),window.removeEventListener("wheel",d),clearInterval(p),h()}},[n]),g.useEffect(()=>{if(!o)return;const d=u.current;if(!d)return;const p=d.getContext("2d");if(!p)return;let h=d.width=window.innerWidth,m=d.height=window.innerHeight;const y=()=>{h=d.width=window.innerWidth,m=d.height=window.innerHeight};window.addEventListener("resize",y);let w=0;const k=O5(e,()=>h,()=>m),T=()=>{k(p),w=requestAnimationFrame(T)};return p.fillStyle="#000",p.fillRect(0,0,h,m),T(),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",y)}},[o,e]),!o||e==="none"?null:l.jsx("canvas",{ref:u,style:{position:"fixed",inset:0,zIndex:5e6,background:"#000",cursor:"none"}})};function O5(e,n,o){return e==="mystify"?_5(n,o):e==="pipes"?F5(n,o):z5(n,o)}function z5(e,n){const i=Array.from({length:500},()=>({x:Rn(-1,1),y:Rn(-1,1),z:Rn(.05,1)}));return a=>{const u=e(),d=n(),p=u/2,h=d/2;a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(0,0,u,d),a.fillStyle="#fff";for(const m of i){m.z-=.006,m.z<=.02&&(m.x=Rn(-1,1),m.y=Rn(-1,1),m.z=1);const y=p+m.x/m.z*p,w=h+m.y/m.z*h;if(y<0||y>u||w<0||w>d)continue;const k=(1-m.z)*2.5;a.globalAlpha=Math.min(1,1-m.z+.2),a.beginPath(),a.arc(y,w,k,0,Math.PI*2),a.fill()}a.globalAlpha=1}}function _5(e,n){const o=e(),i=n(),a=d=>({hue:d,pts:Array.from({length:4},()=>({x:Rn(0,o),y:Rn(0,i),vx:Rn(-3,3),vy:Rn(-3,3)})),trail:[]}),u=[a(190),a(320)];return d=>{const p=e(),h=n();d.fillStyle="rgba(0,0,0,0.12)",d.fillRect(0,0,p,h);for(const m of u){for(const y of m.pts)y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>p)&&(y.vx*=-1),(y.y<0||y.y>h)&&(y.vy*=-1);m.trail.push(m.pts.map(y=>({x:y.x,y:y.y}))),m.trail.length>14&&m.trail.shift(),m.trail.forEach((y,w)=>{d.strokeStyle=`hsl(${m.hue}, 90%, ${20+w/m.trail.length*50}%)`,d.lineWidth=1.5,d.beginPath(),y.forEach((k,T)=>T===0?d.moveTo(k.x,k.y):d.lineTo(k.x,k.y)),d.closePath(),d.stroke()}),m.hue=(m.hue+.3)%360}}}function F5(e,n){let i=0,a=0,u=0,d=Rn(0,360),p=Math.ceil(e()/26),h=Math.ceil(n()/26);i=Math.floor(p/2),a=Math.floor(h/2);let m=0;return y=>{p=Math.ceil(e()/26),h=Math.ceil(n()/26);for(let w=0;w<2;w++){const k=i*26+13,T=a*26+26/2;Math.random()<.15&&(u=(u+(Math.random()<.5?1:3))%4);const[E,C]=[[1,0],[0,1],[-1,0],[0,-1]][u];i+=E,a+=C,(i<0||i>=p||a<0||a>=h||++m>1400)&&(i=Math.floor(Math.random()*p),a=Math.floor(Math.random()*h),d=Rn(0,360),m=0);const $=i*26+26/2,b=a*26+26/2;y.strokeStyle=`hsl(${d}, 80%, 55%)`,y.lineWidth=8,y.lineCap="round",y.beginPath(),y.moveTo(k,T),y.lineTo($,b),y.stroke(),y.fillStyle=`hsl(${d}, 80%, 65%)`,y.beginPath(),y.arc($,b,5,0,Math.PI*2),y.fill()}}}function Rn(e,n){return e+Math.random()*(n-e)}const B5=L.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 60000;
    display: flex;
    align-items: center;
    justify-content: center;
`,W5=L.div`
    width: 540px;
    max-width: 94vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 5px 5px 18px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
`,H5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,U5=L.button`
    width: 18px;
    height: 18px;
    line-height: 1;
    font-size: 12px;
    font-weight: bold;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,V5=L.div`
    display: flex;
    height: 300px;
`,K5=L.div`
    width: 150px;
    flex-shrink: 0;
    background: linear-gradient(160deg, #1d0540 0%, #3a0a6b 45%, #00231f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 14px;
`,Q5=L.div`
    text-align: center;
    color: #fff;
    font-weight: 800;
    font-size: 17px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #ff2d95, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,q5=L.div`
    flex: 1;
    padding: 18px 20px;
    background: #c0c0c0;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.55;
`,G5=L.h2`
    margin: 0 0 10px;
    font-size: 17px;
    color: #000080;
`,Y5=L.button`
    align-self: flex-start;
    margin-top: 14px;
    padding: 5px 16px;
    font-size: 13px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,X5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid #808080;
    box-shadow: inset 0 1px 0 #ffffff;
`,J5=L.div`
    display: flex;
    gap: 6px;
`,Z5=L.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({$on:e})=>e?"#000080":"#808080"};
    box-shadow: ${({$on:e})=>e?"0 0 5px #1084d0":"none"};
`,cf=L.button`
    min-width: 78px;
    padding: 5px 12px;
    font-size: 13px;
    font-weight: ${({$primary:e})=>e?"bold":"normal"};
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:disabled {
        color: #808080;
        cursor: default;
    }
    &:active:not(:disabled) {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,eI=L.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,tI=()=>{const{username:e,isAuthenticated:n}=Xn(),{addProcess:o}=zn(),[i,a]=g.useState(!1),[u,d]=g.useState(0),[p,h]=g.useState(!0),m=g.useRef(!1),y=(C,$,b)=>o({name:$,icon:b,componentName:C}),w=[{title:`Welcome${e?`, ${e}`:""}!`,body:l.jsxs("p",{children:["This is ",l.jsx("b",{children:"VortexOS"})," — a desktop operating system that runs in your browser, built on a"," ",l.jsx("b",{children:"real microkernel"}),": a virtual filesystem, processes, a command shell and a window manager. No emulator, no clone. Let's take a quick tour."]})},{title:"The Start menu & desktop",body:l.jsxs("p",{children:["Everything launches from the ",l.jsx("b",{children:"Start"})," button. Drag desktop icons anywhere, right-click the desktop for a menu, and use the taskbar tray for volume, the clock and notifications."]})},{title:"Command Palette",body:l.jsxs("p",{children:["Press ",l.jsx("b",{children:"Ctrl + Space"})," anywhere to open the Command Palette — a fuzzy launcher for every app and system action. It's the fastest way to get around VortexOS."]}),action:{label:"Try it now",run:()=>{try{window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space",ctrlKey:!0,bubbles:!0}))}catch{}}}},{title:"Apps & games",body:l.jsxs("p",{children:["Real productivity apps — ",l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"}),", ",l.jsx("b",{children:"WordPad"})," — save to the filesystem. And a full games suite — ",l.jsx("b",{children:"Solitaire"}),", ",l.jsx("b",{children:"Minesweeper"}),", ",l.jsx("b",{children:"FreeCell"}),","," ",l.jsx("b",{children:"Snake"})," — with high scores synced to your account."]}),action:{label:"Play Solitaire",run:()=>y("solitaire","Solitaire","/solitaire.svg")}},{title:"Connect & personalize",body:l.jsxs("p",{children:["Other people are here too. Browse their shared files in ",l.jsx("b",{children:"Network Neighborhood"})," and chat over"," ",l.jsx("b",{children:"WinPopup"}),". Make it yours in ",l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the"," ",l.jsx("b",{children:"Serious Sam Style"})," vaporwave toggle."]}),action:{label:"Open Control Panel",run:()=>y("control_panel","Control Panel","/controlpanel.png")}},{title:"You're all set",body:l.jsxs("p",{children:["That's the tour. You can re-open it any time from ",l.jsx("b",{children:"Help ▸ Welcome Tour"}),". Welcome aboard — enjoy VortexOS.",l.jsx("br",{}),l.jsx("br",{}),l.jsx("i",{children:"— a creation by Serious Sam"})]})}],k=u===w.length-1;g.useEffect(()=>{!n||m.current||(m.current=!0,Pv(e||"user")||setTimeout(()=>{d(0),a(!0)},700))},[n,e]),g.useEffect(()=>LR(()=>{d(0),a(!0)}),[]);const T=()=>{p&&RR(e||"user"),a(!1),ka()&&setTimeout(()=>Mv(),350)};if(!i)return null;const E=w[u];return qt.createPortal(l.jsx(B5,{onMouseDown:C=>C.target===C.currentTarget&&T(),children:l.jsxs(W5,{role:"dialog","aria-label":"Welcome to VortexOS",children:[l.jsxs(H5,{style:Is(!0),children:[l.jsx("span",{children:"Welcome to VortexOS"}),l.jsx(U5,{onClick:T,title:"Close",children:"×"})]}),l.jsxs(V5,{children:[l.jsxs(K5,{children:[l.jsx(si,{size:92,vapor:!0}),l.jsx(Q5,{children:"VortexOS"})]}),l.jsxs(q5,{children:[l.jsx(G5,{children:E.title}),l.jsx("div",{children:E.body}),E.action&&l.jsx(Y5,{onClick:E.action.run,children:E.action.label})]})]}),l.jsxs(X5,{children:[l.jsxs(eI,{children:[l.jsx("input",{type:"checkbox",checked:p,onChange:C=>h(C.target.checked)}),"Don't show this again"]}),l.jsx(J5,{children:w.map((C,$)=>l.jsx(Z5,{$on:$===u},$))}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(cf,{onClick:()=>d(C=>Math.max(0,C-1)),disabled:u===0,children:"‹ Back"}),k?l.jsx(cf,{$primary:!0,onClick:T,children:"Finish"}):l.jsx(cf,{$primary:!0,onClick:()=>d(C=>Math.min(w.length-1,C+1)),children:"Next ›"})]})]})]})}),document.body)},nI=L.div`
    position: fixed;
    inset: 0;
    z-index: 59000;
    display: flex;
    align-items: center;
    justify-content: center;
`,rI=L.div`
    width: 440px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 4px 4px 14px rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
`,oI=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,iI=L.button`
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: bold;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,sI=L.div`
    display: flex;
    gap: 14px;
    padding: 18px 16px;
`,lI=L.div`
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(circle at 38% 32%, #fff7c0, #ffd83a 55%, #e0960a);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    box-shadow: 0 0 14px #ffd83a88;
`,aI=L.div`
    flex: 1;
    background: #ffffff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 12px 14px;
    min-height: 96px;
    font-size: 13px;
    line-height: 1.55;
`,cI=L.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 6px;
`,uI=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 12px;
`,dI=L.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,ey=L.button`
    min-width: 84px;
    padding: 5px 12px;
    font-size: 13px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,fI=()=>{const{username:e,isAuthenticated:n}=Xn(),[o,i]=g.useState(!1),[a,u]=g.useState(0),[d,p]=g.useState(ka()),h=g.useRef(!1);g.useEffect(()=>{!n||h.current||ka()&&Pv(e||"user")&&(h.current=!0,setTimeout(()=>{u(Math.floor(Date.now()/864e5)%Jo.length),p(!0),i(!0)},900))},[n,e]),g.useEffect(()=>OR(()=>{h.current=!0,p(ka()),i(!0)}),[]);const m=y=>{p(y),PR(y)};return o?qt.createPortal(l.jsx(nI,{children:l.jsxs(rI,{role:"dialog","aria-label":"Tip of the Day",children:[l.jsxs(oI,{style:Is(!0),children:[l.jsx("span",{children:"Tip of the Day"}),l.jsx(iI,{onClick:()=>i(!1),title:"Close",children:"×"})]}),l.jsxs(sI,{children:[l.jsx(lI,{children:"💡"}),l.jsxs(aI,{children:[l.jsx(cI,{children:"Did you know…"}),l.jsx("div",{children:NR(a)})]})]}),l.jsxs(uI,{children:[l.jsxs(dI,{children:[l.jsx("input",{type:"checkbox",checked:d,onChange:y=>m(y.target.checked)}),"Show tips at startup"]}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(ey,{onClick:()=>u(y=>y+1),children:"Next Tip"}),l.jsx(ey,{onClick:()=>i(!1),children:"Close"})]})]})]})}),document.body):null},pI=9e3,hI=6e3,mI=3e4,gI=75e3,xI=12e3,yI=bt`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
`,wI=bt`
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.12); }
`,vI=bt`
    0%, 92%, 100% { transform: scaleY(1); }
    96% { transform: scaleY(0.08); }
`,bI=bt`to { transform: rotate(360deg); }`,kI=bt`
    0% { transform: scale(0.6); opacity: 0; }
    60% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
`,SI=bt`
    0% { transform: scale(1); }
    40% { transform: scale(1.16) rotate(-4deg); }
    100% { transform: scale(1); }
`,jI=L.div`
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 58000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    pointer-events: none;
`,CI=L.div`
    pointer-events: auto;
    position: relative;
    max-width: 250px;
    background: #fffef2;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 11px 13px 12px;
    font-size: 13px;
    line-height: 1.5;
    color: #1a1a1a;
    box-shadow: 3px 4px 0 rgba(0, 0, 0, 0.25);
    animation: ${kI} 0.28s cubic-bezier(0.18, 0.9, 0.3, 1.2);
    /* little tail toward the sprite (bottom-right) */
    &::after {
        content: "";
        position: absolute;
        right: 26px;
        bottom: -9px;
        width: 14px;
        height: 14px;
        background: #fffef2;
        border-right: 1px solid #2a2a2a;
        border-bottom: 1px solid #2a2a2a;
        transform: rotate(45deg);
    }
`,EI=L.div`
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.4px;
    margin-bottom: 3px;
    background: linear-gradient(90deg, #d6177f, #0aa89a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,$I=L.div`
    margin-top: 9px;
    display: flex;
    gap: 8px;
`,TI=L.button`
    font-size: 12px;
    padding: 3px 11px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,AI=L.button`
    font-size: 12px;
    background: none;
    border: none;
    color: #555;
    text-decoration: underline;
    cursor: pointer;
    padding: 3px 2px;
    &:hover {
        color: #000;
    }
`,RI=L.div`
    pointer-events: auto;
    position: relative;
    width: 84px;
    height: 84px;
    cursor: pointer;
    animation: ${yI} 3.4s ease-in-out infinite;
    &:hover .vx-hide {
        opacity: 1;
    }
`,DI=L.div`
    width: 100%;
    height: 100%;
    /* re-keyed by $pop to retrigger the pop animation on each speak */
    animation: ${SI} 0.5s ease;
`,II=L.div`
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #ff2d9577 0%, #00e5d000 70%);
    animation: ${wI} 2.6s ease-in-out infinite;
    pointer-events: none;
`,PI=L.button`
    position: absolute;
    top: -2px;
    right: -2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #000;
    background: #c0c0c0;
    font-size: 11px;
    font-weight: bold;
    line-height: 1;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 2;
    &:active {
        background: #a0a0a0;
    }
`,NI=L.g`
    transform-origin: 50px 46px;
    animation: ${vI} 4.5s infinite;
`,MI=L.path`
    transform-origin: 50px 50px;
    animation: ${bI} 7s linear infinite;
`,LI=()=>{const e=_R(),n=vc(),{addProcess:o}=zn(),[i,a]=g.useState(null),[u,d]=g.useState(0),p=g.useRef(new Set),h=g.useRef(!1),m=g.useRef(0),y=g.useRef(0),w=g.useRef(Date.now()),k=g.useRef(Xx().length),T=g.useRef(!1),E=g.useRef(null),C=g.useCallback(b=>{y.current=Date.now(),a(b),d(j=>j+1),E.current&&clearTimeout(E.current),E.current=setTimeout(()=>a(null),pI)},[]),$=g.useCallback((b,j,S)=>o({name:j,icon:S,componentName:b}),[o]);return g.useEffect(()=>{!e||T.current||(T.current=!0,setTimeout(()=>C({text:KR()}),2200))},[e,C]),g.useEffect(()=>{if(!e)return;const b=()=>w.current=Date.now(),j=["mousemove","mousedown","keydown","wheel"];j.forEach(R=>window.addEventListener(R,b,{passive:!0}));const S=setInterval(()=>{const R=Date.now(),M=R-w.current>mI,V=R-y.current>gI;M&&V&&!document.hidden&&C({text:Ex()})},xI);return()=>{j.forEach(R=>window.removeEventListener(R,b)),clearInterval(S)}},[e,C]),g.useEffect(()=>{if(e)return e5(()=>{const b=Xx();if(b.length<=k.current){k.current=b.length;return}k.current=b.length,C({text:QR(),action:{label:"Task Manager",run:()=>$("task_manager","Task Manager","/task_manager.png")}})})},[e,C,$]),g.useEffect(()=>{if(e)return BR(b=>C(b))},[e,C]),g.useEffect(()=>{const b=new Set(n.map(j=>j.pid));if(h.current&&e){const j=n.find(R=>!p.current.has(R.pid)),S=Date.now();if(j&&S-m.current>hI){const R=VR(j.exec);R&&(m.current=S,C({text:R}))}}h.current=!0,p.current=b},[n,e,C]),e?l.jsxs(jI,{children:[i&&l.jsxs(CI,{role:"status",children:[l.jsx(EI,{children:"Vortex"}),l.jsx("div",{children:i.text}),i.action&&l.jsxs($I,{children:[l.jsx(TI,{onClick:()=>{i.action.run(),a(null)},children:i.action.label}),l.jsx(AI,{onClick:()=>a(null),children:"Dismiss"})]})]}),l.jsxs(RI,{title:"Vortex — click for a tip",onClick:()=>C({text:Ex()}),children:[l.jsx(PI,{className:"vx-hide",title:"Hide Vortex (re-enable from Help)",onClick:b=>{b.stopPropagation(),zv(!1)},children:"×"}),l.jsx(II,{}),l.jsx(DI,{$pop:u,children:l.jsxs("svg",{viewBox:"0 0 100 100",width:84,height:84,style:{display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"vx-body",cx:"42%",cy:"36%",r:"70%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff8fd4"}),l.jsx("stop",{offset:"45%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#3a0a6b"})]}),l.jsxs("linearGradient",{id:"vx-rim",x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#00e5d0"})]})]}),l.jsx("circle",{cx:"50",cy:"50",r:"33",fill:"url(#vx-body)",stroke:"url(#vx-rim)",strokeWidth:"3"}),l.jsx(MI,{d:"M50 30 A20 20 0 1 1 30 50",fill:"none",stroke:"#ffffff",strokeWidth:"3",strokeLinecap:"round",opacity:"0.55"}),l.jsxs(NI,{children:[l.jsx("ellipse",{cx:"40",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("ellipse",{cx:"60",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("circle",{cx:"41.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"61.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"43",cy:"45",r:"1.1",fill:"#fff"}),l.jsx("circle",{cx:"63",cy:"45",r:"1.1",fill:"#fff"})]}),l.jsx("path",{d:"M42 62 Q50 69 58 62",fill:"none",stroke:"#fff",strokeWidth:"2.6",strokeLinecap:"round",opacity:"0.85"})]})},u)]})]}):null},OI=5500,ty=["#ff2d95","#00e5d0","#a14bff","#ffd83a","#1084d0","#ff8fd4"],zI=bt`
    0% { transform: scale(0.4) rotate(-8deg); opacity: 0; }
    55% { transform: scale(1.12) rotate(2deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
`,_I=bt`to { filter: hue-rotate(360deg); }`,FI=L.div`
    position: fixed;
    inset: 0;
    z-index: 70000;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`,BI=L.div`
    font-family: "Segoe UI", Tahoma, sans-serif;
    font-size: clamp(28px, 7vw, 64px);
    font-weight: 900;
    letter-spacing: 3px;
    text-align: center;
    background: linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0, #ffd83a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 40px rgba(255, 45, 149, 0.4);
    animation: ${zI} 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.3), ${_I} 3s linear infinite;
`,WI=L.canvas`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
`,HI=bt`
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-130%); }
`,UI=L.div`
    position: fixed;
    inset: 0;
    z-index: 71000;
    background: radial-gradient(80% 80% at 50% 40%, #0a0118 0%, #000 100%);
    overflow: hidden;
    cursor: pointer;
`,VI=L.div`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    color: #eee;
    font-family: "Segoe UI", Tahoma, sans-serif;
    animation: ${HI} 22s linear infinite;
`,uf=L.div`
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,KI=L.div`
    position: fixed;
    bottom: 18px;
    right: 22px;
    color: #888;
    font-size: 12px;
    font-family: "Segoe UI", sans-serif;
`,QI=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),a=g.useRef(null);return g.useEffect(()=>E$(()=>{lc("konami"),n(!0),yo(),FR({text:"🌀 You found the Konami code — VORTEX MODE engaged!"})}),[]),g.useEffect(()=>j$(()=>n(!0)),[]),g.useEffect(()=>C$(()=>{i(!0),yo()}),[]),g.useEffect(()=>{if(!e)return;const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width=window.innerWidth,h=u.height=window.innerHeight,m=Array.from({length:160},()=>({x:Math.random()*p,y:Math.random()*-h,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,size:5+Math.random()*7,color:ty[Math.floor(Math.random()*ty.length)],rot:Math.random()*Math.PI,vr:(Math.random()-.5)*.3}));let y=0;const w=()=>{d.clearRect(0,0,p,h),m.forEach(T=>{T.x+=T.vx,T.y+=T.vy,T.vy+=.04,T.rot+=T.vr,T.y>h+20&&(T.y=-20,T.x=Math.random()*p,T.vy=2+Math.random()*4),d.save(),d.translate(T.x,T.y),d.rotate(T.rot),d.fillStyle=T.color,d.fillRect(-T.size/2,-T.size/2,T.size,T.size*.6),d.restore()}),y=requestAnimationFrame(w)};w();const k=setTimeout(()=>n(!1),OI);return()=>{cancelAnimationFrame(y),clearTimeout(k)}},[e]),g.useEffect(()=>{if(!o)return;const u=d=>{d.key==="Escape"&&i(!1)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[o]),l.jsxs(l.Fragment,{children:[e&&qt.createPortal(l.jsxs(FI,{children:[l.jsx(WI,{ref:a}),l.jsx(BI,{children:"VORTEX MODE"})]}),document.body),o&&qt.createPortal(l.jsxs(UI,{onClick:()=>i(!1),children:[l.jsxs(VI,{children:[l.jsx("div",{style:{height:40}}),l.jsx(uf,{children:"VortexOS 2.0"}),l.jsx("p",{style:{color:"#b9b9c8"},children:"Experimental Edition"}),l.jsx("div",{style:{height:40}}),l.jsx("p",{style:{color:"#888",fontSize:13},children:"a creation by"}),l.jsx(uf,{style:{fontSize:52},children:"SERIOUS SAM"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontWeight:700,color:"#00e5d0"},children:"The Microkernel"}),l.jsx("p",{children:"Syscall ABI · Process scheduler"}),l.jsx("p",{children:"Per-process file descriptors"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#ff67c8"},children:"The System"}),l.jsx("p",{children:"Virtual File System · OPFS"}),l.jsx("p",{children:"Real shell & coreutils"}),l.jsx("p",{children:"Window manager · compositor-free"}),l.jsx("p",{children:"Multi-user accounts & networking"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#a14bff"},children:"The Desktop"}),l.jsx("p",{children:"Every app, hand-built"}),l.jsx("p",{children:"The games · The tray · The assistant"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontSize:18},children:"Built from scratch in a browser."}),l.jsx("p",{style:{fontSize:18,color:"#00e5d0"},children:"No emulator. No clone."}),l.jsx("div",{style:{height:50}}),l.jsx("p",{style:{color:"#888"},children:"Special thanks:"}),l.jsx("p",{style:{fontSize:20},children:"You, for exploring. 🌀"}),l.jsx("div",{style:{height:80}}),l.jsx(uf,{style:{fontSize:30},children:"VortexOS"}),l.jsx("div",{style:{height:60}})]}),l.jsx(KI,{children:"Press Esc or click to close"})]}),document.body)]})},qI=()=>{const{uiScale:e,reduceMotion:n,pointerScheme:o}=un(),{changeCursor:i}=Yt();return g.useEffect(()=>(e===100?document.documentElement.style.removeProperty("zoom"):document.documentElement.style.setProperty("zoom",String(e/100)),()=>{document.documentElement.style.removeProperty("zoom")}),[e]),g.useEffect(()=>{n?document.documentElement.setAttribute("data-reduce-motion",""):document.documentElement.removeAttribute("data-reduce-motion")},[n]),g.useEffect(()=>{i(o)},[o]),null},GI=()=>{const{cursor:e,crt:n,busy:o,reloadWallpaper:i}=Yt(),{isAuthenticated:a}=Xn(),u=t4();return g.useEffect(()=>{a&&(u(),i())},[a]),g.useEffect(()=>{if(a)return nD(),()=>rD()},[a]),a?l.jsxs("div",{style:{position:"fixed",inset:0,overflow:"hidden",cursor:o?"url(/win-cursor/loading.cur), wait":e},onContextMenu:d=>d.preventDefault(),children:[l.jsxs(C5,{children:[l.jsx(S4,{}),l.jsx(i5,{}),l.jsx(J4,{}),l.jsx(c5,{}),l.jsx(y5,{}),l.jsx(N5,{}),l.jsx(M5,{}),l.jsx(L5,{}),l.jsx(I5,{}),l.jsx(P5,{}),l.jsx(tI,{}),l.jsx(fI,{}),l.jsx(LI,{}),l.jsx(QI,{}),l.jsx(qI,{})]}),l.jsx(S5,{}),n&&l.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:1e6,background:"repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",mixBlendMode:"multiply"},children:l.jsx("div",{style:{position:"absolute",inset:0,boxShadow:"inset 0 0 150px rgba(0,0,0,0.55)"}})})]}):l.jsx(a5,{})},u1=bt`from { opacity: 0 } to { opacity: 1 }`,d1=L.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`,YI=L(d1)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#008080"};
    animation: ${u1} 0.4s ease;
`,XI=L.h1`
    margin: 22px 0 0;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #ffffff, #cfe9e9)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,JI=L(d1)`
    background: #000;
    gap: 34px;
`,ZI=L.p`
    color: #ffa000;
    font-size: 26px;
    text-align: center;
    padding: 0 20px;
    text-shadow: 0 0 10px rgba(255, 160, 0, 0.35);
    animation: ${u1} 0.6s ease;
`,eP=L.button`
    padding: 9px 26px;
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    background: linear-gradient(90deg, #ff2d95, #00e5d0);
    box-shadow: 0 0 18px #ff2d9555;
    transition: transform 0.12s ease;
    &:hover {
        transform: scale(1.04);
    }
`,tP=()=>{const e=pi(),{sssStyle:n}=Yt(),o=n,[i,a]=g.useState("closing");return g.useEffect(()=>{m8();const u=setTimeout(()=>a("off"),2600);return()=>clearTimeout(u)},[]),i==="closing"?l.jsxs(YI,{$vapor:o,children:[l.jsx(si,{size:120,vapor:o}),l.jsx(XI,{$vapor:o,children:"VortexOS"}),l.jsx("p",{style:{marginTop:26,fontSize:14,color:o?"#cfcfe0":"#fff"},children:"Please wait while VortexOS shuts down…"})]}):l.jsxs(JI,{children:[l.jsx(ZI,{children:"It's now safe to turn off your computer."}),l.jsx(eP,{onClick:()=>e("/"),children:"Restart"})]})},nP=()=>{const{wallpaper:e,sssStyle:n}=Yt(),o=()=>e.image?e.type===2?{background:e.image}:{backgroundImage:`url('/${e.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:n?{backgroundImage:"url('/wallpapers/vw-5.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#1a0033"}:{background:"#008080"};return l.jsx("div",{style:{...o(),width:"100vw",height:"100vh",overflow:"hidden"},children:l.jsxs(NE,{children:[l.jsx(ua,{path:"/",element:l.jsx(y4,{})}),l.jsx(ua,{path:"/vortex",element:l.jsx(GI,{})}),l.jsx(ua,{path:"/shutdown",element:l.jsx(tP,{})})]})})},rP=({children:e})=>{const{theme:n}=Yt();return l.jsx(hS,{theme:J8(n),children:e})},oP=xS`
  ${yS}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${HC}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${UC}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'ms_sans_serif';
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes winOpen {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.82); }
    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }

  @keyframes winMinimize {
    from { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    to   { opacity: 0; transform: translate(-50%, 230%) scale(0.2); }
  }
`,iP=()=>l.jsxs(o2,{children:[l.jsx(oP,{}),l.jsx(e4,{children:l.jsx(K2,{children:l.jsx(rP,{children:l.jsx(o4,{children:l.jsx(w8,{children:l.jsx(_$,{children:l.jsx(nP,{})})})})})})})]});let ny=!1;function sP(){ny||(ny=!0,Ve.interceptors.request.use(e=>{const n=ic();return n&&(e.headers=e.headers??{},e.headers.Authorization=`Bearer ${n}`),e}),Ve.interceptors.response.use(e=>e,e=>{var o,i;const n=((o=e==null?void 0:e.config)==null?void 0:o.url)??"";return((i=e==null?void 0:e.response)==null?void 0:i.status)===401&&!n.includes("/auth/")&&Sw(),Promise.reject(e)}))}sP();T$();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});gk.createRoot(document.getElementById("root")).render(l.jsx(g.StrictMode,{children:l.jsx(iP,{})}));export{Tt as A,We as B,ft as C,pt as F,bn as M,Gj as P,By as S,ur as T,Ur as W,Ve as a,Ps as b,Be as c,L as d,Re as e,vn as f,Ot as g,_e as h,bf as i,l as j,ic as k,cn as l,bt as m,Wr as n,ln as o,Ds as p,hi as q,g as r,lt as s,In as t,Yt as u,Ue as v,rv as w,Pw as x};
