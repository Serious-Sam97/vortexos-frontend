const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Doom-DBsHeSXa.js","assets/DosPlayer-BvjuAAWo.js","assets/DoomII-CKOXy54K.js","assets/TombRaider-CrTPkOLM.js","assets/Persia-B8ZV-3ZE.js"])))=>i.map(i=>d[i]);
var ok=Object.defineProperty;var ik=(e,n,o)=>n in e?ok(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var Ne=(e,n,o)=>ik(e,typeof n!="symbol"?n+"":n,o);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(a){if(a.ep)return;a.ep=!0;const u=o(a);fetch(a.href,u)}})();function An(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cd={exports:{}},es={},ud={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U0;function sk(){if(U0)return Pe;U0=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function b(z){return z===null||typeof z!="object"?null:(z=w&&z[w]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function $(z,J,ae){this.props=z,this.context=J,this.refs=C,this.updater=ae||T}$.prototype.isReactComponent={},$.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},$.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function k(){}k.prototype=$.prototype;function j(z,J,ae){this.props=z,this.context=J,this.refs=C,this.updater=ae||T}var S=j.prototype=new k;S.constructor=j,E(S,$.prototype),S.isPureReactComponent=!0;var R=Array.isArray,M=Object.prototype.hasOwnProperty,K={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function ee(z,J,ae){var ue,ge={},pe=null,xe=null;if(J!=null)for(ue in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(pe=""+J.key),J)M.call(J,ue)&&!X.hasOwnProperty(ue)&&(ge[ue]=J[ue]);var q=arguments.length-2;if(q===1)ge.children=ae;else if(1<q){for(var A=Array(q),V=0;V<q;V++)A[V]=arguments[V+2];ge.children=A}if(z&&z.defaultProps)for(ue in q=z.defaultProps,q)ge[ue]===void 0&&(ge[ue]=q[ue]);return{$$typeof:e,type:z,key:pe,ref:xe,props:ge,_owner:K.current}}function ie(z,J){return{$$typeof:e,type:z.type,key:J,ref:z.ref,props:z.props,_owner:z._owner}}function me(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function fe(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ae){return J[ae]})}var he=/\/+/g;function le(z,J){return typeof z=="object"&&z!==null&&z.key!=null?fe(""+z.key):J.toString(36)}function _(z,J,ae,ue,ge){var pe=typeof z;(pe==="undefined"||pe==="boolean")&&(z=null);var xe=!1;if(z===null)xe=!0;else switch(pe){case"string":case"number":xe=!0;break;case"object":switch(z.$$typeof){case e:case n:xe=!0}}if(xe)return xe=z,ge=ge(xe),z=ue===""?"."+le(xe,0):ue,R(ge)?(ae="",z!=null&&(ae=z.replace(he,"$&/")+"/"),_(ge,J,ae,"",function(V){return V})):ge!=null&&(me(ge)&&(ge=ie(ge,ae+(!ge.key||xe&&xe.key===ge.key?"":(""+ge.key).replace(he,"$&/")+"/")+z)),J.push(ge)),1;if(xe=0,ue=ue===""?".":ue+":",R(z))for(var q=0;q<z.length;q++){pe=z[q];var A=ue+le(pe,q);xe+=_(pe,J,ae,A,ge)}else if(A=b(z),typeof A=="function")for(z=A.call(z),q=0;!(pe=z.next()).done;)pe=pe.value,A=ue+le(pe,q++),xe+=_(pe,J,ae,A,ge);else if(pe==="object")throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function D(z,J,ae){if(z==null)return z;var ue=[],ge=0;return _(z,ue,"","",function(pe){return J.call(ae,pe,ge++)}),ue}function I(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(ae){(z._status===0||z._status===-1)&&(z._status=1,z._result=ae)},function(ae){(z._status===0||z._status===-1)&&(z._status=2,z._result=ae)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var H={current:null},W={transition:null},B={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:W,ReactCurrentOwner:K};function N(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:D,forEach:function(z,J,ae){D(z,function(){J.apply(this,arguments)},ae)},count:function(z){var J=0;return D(z,function(){J++}),J},toArray:function(z){return D(z,function(J){return J})||[]},only:function(z){if(!me(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Pe.Component=$,Pe.Fragment=o,Pe.Profiler=a,Pe.PureComponent=j,Pe.StrictMode=i,Pe.Suspense=h,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Pe.act=N,Pe.cloneElement=function(z,J,ae){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ue=E({},z.props),ge=z.key,pe=z.ref,xe=z._owner;if(J!=null){if(J.ref!==void 0&&(pe=J.ref,xe=K.current),J.key!==void 0&&(ge=""+J.key),z.type&&z.type.defaultProps)var q=z.type.defaultProps;for(A in J)M.call(J,A)&&!X.hasOwnProperty(A)&&(ue[A]=J[A]===void 0&&q!==void 0?q[A]:J[A])}var A=arguments.length-2;if(A===1)ue.children=ae;else if(1<A){q=Array(A);for(var V=0;V<A;V++)q[V]=arguments[V+2];ue.children=q}return{$$typeof:e,type:z.type,key:ge,ref:pe,props:ue,_owner:xe}},Pe.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:u,_context:z},z.Consumer=z},Pe.createElement=ee,Pe.createFactory=function(z){var J=ee.bind(null,z);return J.type=z,J},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(z){return{$$typeof:p,render:z}},Pe.isValidElement=me,Pe.lazy=function(z){return{$$typeof:y,_payload:{_status:-1,_result:z},_init:I}},Pe.memo=function(z,J){return{$$typeof:m,type:z,compare:J===void 0?null:J}},Pe.startTransition=function(z){var J=W.transition;W.transition={};try{z()}finally{W.transition=J}},Pe.unstable_act=N,Pe.useCallback=function(z,J){return H.current.useCallback(z,J)},Pe.useContext=function(z){return H.current.useContext(z)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(z){return H.current.useDeferredValue(z)},Pe.useEffect=function(z,J){return H.current.useEffect(z,J)},Pe.useId=function(){return H.current.useId()},Pe.useImperativeHandle=function(z,J,ae){return H.current.useImperativeHandle(z,J,ae)},Pe.useInsertionEffect=function(z,J){return H.current.useInsertionEffect(z,J)},Pe.useLayoutEffect=function(z,J){return H.current.useLayoutEffect(z,J)},Pe.useMemo=function(z,J){return H.current.useMemo(z,J)},Pe.useReducer=function(z,J,ae){return H.current.useReducer(z,J,ae)},Pe.useRef=function(z){return H.current.useRef(z)},Pe.useState=function(z){return H.current.useState(z)},Pe.useSyncExternalStore=function(z,J,ae){return H.current.useSyncExternalStore(z,J,ae)},Pe.useTransition=function(){return H.current.useTransition()},Pe.version="18.3.1",Pe}var V0;function fp(){return V0||(V0=1,ud.exports=sk()),ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function lk(){if(K0)return es;K0=1;var e=fp(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(p,h,m){var y,w={},b=null,T=null;m!==void 0&&(b=""+m),h.key!==void 0&&(b=""+h.key),h.ref!==void 0&&(T=h.ref);for(y in h)i.call(h,y)&&!u.hasOwnProperty(y)&&(w[y]=h[y]);if(p&&p.defaultProps)for(y in h=p.defaultProps,h)w[y]===void 0&&(w[y]=h[y]);return{$$typeof:n,type:p,key:b,ref:T,props:w,_owner:a.current}}return es.Fragment=o,es.jsx=d,es.jsxs=d,es}var Q0;function ak(){return Q0||(Q0=1,cd.exports=lk()),cd.exports}var l=ak(),g=fp();const Y=An(g);var Wl={},dd={exports:{}},Bt={},fd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function ck(){return q0||(q0=1,function(e){function n(W,B){var N=W.length;W.push(B);e:for(;0<N;){var z=N-1>>>1,J=W[z];if(0<a(J,B))W[z]=B,W[N]=J,N=z;else break e}}function o(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var B=W[0],N=W.pop();if(N!==B){W[0]=N;e:for(var z=0,J=W.length,ae=J>>>1;z<ae;){var ue=2*(z+1)-1,ge=W[ue],pe=ue+1,xe=W[pe];if(0>a(ge,N))pe<J&&0>a(xe,ge)?(W[z]=xe,W[pe]=N,z=pe):(W[z]=ge,W[ue]=N,z=ue);else if(pe<J&&0>a(xe,N))W[z]=xe,W[pe]=N,z=pe;else break e}}return B}function a(W,B){var N=W.sortIndex-B.sortIndex;return N!==0?N:W.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var h=[],m=[],y=1,w=null,b=3,T=!1,E=!1,C=!1,$=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var B=o(m);B!==null;){if(B.callback===null)i(m);else if(B.startTime<=W)i(m),B.sortIndex=B.expirationTime,n(h,B);else break;B=o(m)}}function R(W){if(C=!1,S(W),!E)if(o(h)!==null)E=!0,I(M);else{var B=o(m);B!==null&&H(R,B.startTime-W)}}function M(W,B){E=!1,C&&(C=!1,k(ee),ee=-1),T=!0;var N=b;try{for(S(B),w=o(h);w!==null&&(!(w.expirationTime>B)||W&&!fe());){var z=w.callback;if(typeof z=="function"){w.callback=null,b=w.priorityLevel;var J=z(w.expirationTime<=B);B=e.unstable_now(),typeof J=="function"?w.callback=J:w===o(h)&&i(h),S(B)}else i(h);w=o(h)}if(w!==null)var ae=!0;else{var ue=o(m);ue!==null&&H(R,ue.startTime-B),ae=!1}return ae}finally{w=null,b=N,T=!1}}var K=!1,X=null,ee=-1,ie=5,me=-1;function fe(){return!(e.unstable_now()-me<ie)}function he(){if(X!==null){var W=e.unstable_now();me=W;var B=!0;try{B=X(!0,W)}finally{B?le():(K=!1,X=null)}}else K=!1}var le;if(typeof j=="function")le=function(){j(he)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,D=_.port2;_.port1.onmessage=he,le=function(){D.postMessage(null)}}else le=function(){$(he,0)};function I(W){X=W,K||(K=!0,le())}function H(W,B){ee=$(function(){W(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){E||T||(E=!0,I(M))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return o(h)},e.unstable_next=function(W){switch(b){case 1:case 2:case 3:var B=3;break;default:B=b}var N=b;b=B;try{return W()}finally{b=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,B){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var N=b;b=W;try{return B()}finally{b=N}},e.unstable_scheduleCallback=function(W,B,N){var z=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?z+N:z):N=z,W){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=N+J,W={id:y++,callback:B,priorityLevel:W,startTime:N,expirationTime:J,sortIndex:-1},N>z?(W.sortIndex=N,n(m,W),o(h)===null&&W===o(m)&&(C?(k(ee),ee=-1):C=!0,H(R,N-z))):(W.sortIndex=J,n(h,W),E||T||(E=!0,I(M))),W},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(W){var B=b;return function(){var N=b;b=B;try{return W.apply(this,arguments)}finally{b=N}}}}(pd)),pd}var G0;function uk(){return G0||(G0=1,fd.exports=ck()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function dk(){if(Y0)return Bt;Y0=1;var e=fp(),n=uk();function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)i.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function b(t){return h.call(w,t)?!0:h.call(y,t)?!1:m.test(t)?w[t]=!0:(y[t]=!0,!1)}function T(t,r,s,c){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,r,s,c){if(r===null||typeof r>"u"||T(t,r,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function C(t,r,s,c,f,x,v){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=r,this.sanitizeURL=x,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];$[r]=new C(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){$[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){$[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){$[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){$[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){$[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function j(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(k,j);$[r]=new C(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(k,j);$[r]=new C(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(k,j);$[r]=new C(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){$[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),$.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){$[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function S(t,r,s,c){var f=$.hasOwnProperty(r)?$[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,s,f,c)&&(s=null),c||f===null?b(r)&&(s===null?t.removeAttribute(r):t.setAttribute(r,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(r=f.attributeName,c=f.attributeNamespace,s===null?t.removeAttribute(r):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,c?t.setAttributeNS(c,r,s):t.setAttribute(r,s))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),K=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),fe=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),W=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var N=Object.assign,z;function J(t){if(z===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+t}var ae=!1;function ue(t,r){if(!t||ae)return"";ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(G){var c=G}Reflect.construct(t,[],r)}else{try{r.call()}catch(G){c=G}t.call(r.prototype)}else{try{throw Error()}catch(G){c=G}t()}}catch(G){if(G&&c&&typeof G.stack=="string"){for(var f=G.stack.split(`
`),x=c.stack.split(`
`),v=f.length-1,P=x.length-1;1<=v&&0<=P&&f[v]!==x[P];)P--;for(;1<=v&&0<=P;v--,P--)if(f[v]!==x[P]){if(v!==1||P!==1)do if(v--,P--,0>P||f[v]!==x[P]){var O=`
`+f[v].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=v&&0<=P);break}}}finally{ae=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?J(t):""}function ge(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case K:return"Portal";case ie:return"Profiler";case ee:return"StrictMode";case le:return"Suspense";case _:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fe:return(t.displayName||"Context")+".Consumer";case me:return(t._context.displayName||"Context")+".Provider";case he:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case D:return r=t.displayName||null,r!==null?r:pe(t.type)||"Memo";case I:r=t._payload,t=t._init;try{return pe(t(r))}catch{}}return null}function xe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(r);case 8:return r===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function q(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function V(t){var r=A(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,x=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,x.call(this,v)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function te(t){t._valueTracker||(t._valueTracker=V(t))}function ne(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return t&&(c=A(t)?t.checked?"true":"false":t.value),t=c,t!==s?(r.setValue(t),!0):!1}function ce(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function je(t,r){var s=r.checked;return N({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Re(t,r){var s=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;s=q(r.value!=null?r.value:s),t._wrapperState={initialChecked:c,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ze(t,r){r=r.checked,r!=null&&S(t,"checked",r,!1)}function st(t,r){ze(t,r);var s=q(r.value),c=r.type;if(s!=null)c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?ln(t,r.type,s):r.hasOwnProperty("defaultValue")&&ln(t,r.type,q(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function In(t,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,s||r===t.value||(t.value=r),t.defaultValue=r}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function ln(t,r,s){(r!=="number"||ce(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var qn=Array.isArray;function Pn(t,r,s,c){if(t=t.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=r.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&c&&(t[s].defaultSelected=!0)}else{for(s=""+q(s),r=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function Gn(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return N({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mi(t,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(o(92));if(qn(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),s=r}t._wrapperState={initialValue:q(s)}}function wc(t,r){var s=q(r.value),c=q(r.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),r.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),c!=null&&(t.defaultValue=""+c)}function nh(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function rh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vc(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?rh(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ns,oh=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,c,f){MSApp.execUnsafeLocalFunction(function(){return t(r,s,c,f)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ns=Ns||document.createElement("div"),Ns.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ns.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function gi(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c1=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(t){c1.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),xi[r]=xi[t]})});function ih(t,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||xi.hasOwnProperty(t)&&xi[t]?(""+r).trim():r+"px"}function sh(t,r){t=t.style;for(var s in r)if(r.hasOwnProperty(s)){var c=s.indexOf("--")===0,f=ih(s,r[s],c);s==="float"&&(s="cssFloat"),c?t.setProperty(s,f):t[s]=f}}var u1=N({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(t,r){if(r){if(u1[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function kc(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sc=null;function jc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cc=null,vo=null,bo=null;function lh(t){if(t=_i(t)){if(typeof Cc!="function")throw Error(o(280));var r=t.stateNode;r&&(r=rl(r),Cc(t.stateNode,t.type,r))}}function ah(t){vo?bo?bo.push(t):bo=[t]:vo=t}function ch(){if(vo){var t=vo,r=bo;if(bo=vo=null,lh(t),r)for(t=0;t<r.length;t++)lh(r[t])}}function uh(t,r){return t(r)}function dh(){}var Ec=!1;function fh(t,r,s){if(Ec)return t(r,s);Ec=!0;try{return uh(t,r,s)}finally{Ec=!1,(vo!==null||bo!==null)&&(dh(),ch())}}function yi(t,r){var s=t.stateNode;if(s===null)return null;var c=rl(s);if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(o(231,r,typeof s));return s}var $c=!1;if(p)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){$c=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{$c=!1}function d1(t,r,s,c,f,x,v,P,O){var G=Array.prototype.slice.call(arguments,3);try{r.apply(s,G)}catch(oe){this.onError(oe)}}var vi=!1,Ms=null,Ls=!1,Tc=null,f1={onError:function(t){vi=!0,Ms=t}};function p1(t,r,s,c,f,x,v,P,O){vi=!1,Ms=null,d1.apply(f1,arguments)}function h1(t,r,s,c,f,x,v,P,O){if(p1.apply(this,arguments),vi){if(vi){var G=Ms;vi=!1,Ms=null}else throw Error(o(198));Ls||(Ls=!0,Tc=G)}}function Hr(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function ph(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function hh(t){if(Hr(t)!==t)throw Error(o(188))}function m1(t){var r=t.alternate;if(!r){if(r=Hr(t),r===null)throw Error(o(188));return r!==t?null:t}for(var s=t,c=r;;){var f=s.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===s)return hh(f),t;if(x===c)return hh(f),r;x=x.sibling}throw Error(o(188))}if(s.return!==c.return)s=f,c=x;else{for(var v=!1,P=f.child;P;){if(P===s){v=!0,s=f,c=x;break}if(P===c){v=!0,c=f,s=x;break}P=P.sibling}if(!v){for(P=x.child;P;){if(P===s){v=!0,s=x,c=f;break}if(P===c){v=!0,c=x,s=f;break}P=P.sibling}if(!v)throw Error(o(189))}}if(s.alternate!==c)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?t:r}function mh(t){return t=m1(t),t!==null?gh(t):null}function gh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=gh(t);if(r!==null)return r;t=t.sibling}return null}var xh=n.unstable_scheduleCallback,yh=n.unstable_cancelCallback,g1=n.unstable_shouldYield,x1=n.unstable_requestPaint,rt=n.unstable_now,y1=n.unstable_getCurrentPriorityLevel,Ac=n.unstable_ImmediatePriority,wh=n.unstable_UserBlockingPriority,Os=n.unstable_NormalPriority,w1=n.unstable_LowPriority,vh=n.unstable_IdlePriority,zs=null,Nn=null;function v1(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(zs,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:S1,b1=Math.log,k1=Math.LN2;function S1(t){return t>>>=0,t===0?32:31-(b1(t)/k1|0)|0}var _s=64,Fs=4194304;function bi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bs(t,r){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes,v=s&268435455;if(v!==0){var P=v&~f;P!==0?c=bi(P):(x&=v,x!==0&&(c=bi(x)))}else v=s&~f,v!==0?c=bi(v):x!==0&&(c=bi(x));if(c===0)return 0;if(r!==0&&r!==c&&!(r&f)&&(f=c&-c,x=r&-r,f>=x||f===16&&(x&4194240)!==0))return r;if(c&4&&(c|=s&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)s=31-xn(r),f=1<<s,c|=t[s],r&=~f;return c}function j1(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C1(t,r){for(var s=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,x=t.pendingLanes;0<x;){var v=31-xn(x),P=1<<v,O=f[v];O===-1?(!(P&s)||P&c)&&(f[v]=j1(P,r)):O<=r&&(t.expiredLanes|=P),x&=~P}}function Rc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bh(){var t=_s;return _s<<=1,!(_s&4194240)&&(_s=64),t}function Dc(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function ki(t,r,s){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-xn(r),t[r]=s}function E1(t,r){var s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-xn(s),x=1<<f;r[f]=0,c[f]=-1,t[f]=-1,s&=~x}}function Ic(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var c=31-xn(s),f=1<<c;f&r|t[c]&r&&(t[c]|=r),s&=~f}}var Be=0;function kh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sh,Pc,jh,Ch,Eh,Nc=!1,Ws=[],ur=null,dr=null,fr=null,Si=new Map,ji=new Map,pr=[],$1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(t,r){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Si.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(r.pointerId)}}function Ci(t,r,s,c,f,x){return t===null||t.nativeEvent!==x?(t={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},r!==null&&(r=_i(r),r!==null&&Pc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function T1(t,r,s,c,f){switch(r){case"focusin":return ur=Ci(ur,t,r,s,c,f),!0;case"dragenter":return dr=Ci(dr,t,r,s,c,f),!0;case"mouseover":return fr=Ci(fr,t,r,s,c,f),!0;case"pointerover":var x=f.pointerId;return Si.set(x,Ci(Si.get(x)||null,t,r,s,c,f)),!0;case"gotpointercapture":return x=f.pointerId,ji.set(x,Ci(ji.get(x)||null,t,r,s,c,f)),!0}return!1}function Th(t){var r=Ur(t.target);if(r!==null){var s=Hr(r);if(s!==null){if(r=s.tag,r===13){if(r=ph(s),r!==null){t.blockedOn=r,Eh(t.priority,function(){jh(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=Lc(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);Sc=c,s.target.dispatchEvent(c),Sc=null}else return r=_i(s),r!==null&&Pc(r),t.blockedOn=s,!1;r.shift()}return!0}function Ah(t,r,s){Hs(t)&&s.delete(r)}function A1(){Nc=!1,ur!==null&&Hs(ur)&&(ur=null),dr!==null&&Hs(dr)&&(dr=null),fr!==null&&Hs(fr)&&(fr=null),Si.forEach(Ah),ji.forEach(Ah)}function Ei(t,r){t.blockedOn===r&&(t.blockedOn=null,Nc||(Nc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,A1)))}function $i(t){function r(f){return Ei(f,t)}if(0<Ws.length){Ei(Ws[0],t);for(var s=1;s<Ws.length;s++){var c=Ws[s];c.blockedOn===t&&(c.blockedOn=null)}}for(ur!==null&&Ei(ur,t),dr!==null&&Ei(dr,t),fr!==null&&Ei(fr,t),Si.forEach(r),ji.forEach(r),s=0;s<pr.length;s++)c=pr[s],c.blockedOn===t&&(c.blockedOn=null);for(;0<pr.length&&(s=pr[0],s.blockedOn===null);)Th(s),s.blockedOn===null&&pr.shift()}var ko=R.ReactCurrentBatchConfig,Us=!0;function R1(t,r,s,c){var f=Be,x=ko.transition;ko.transition=null;try{Be=1,Mc(t,r,s,c)}finally{Be=f,ko.transition=x}}function D1(t,r,s,c){var f=Be,x=ko.transition;ko.transition=null;try{Be=4,Mc(t,r,s,c)}finally{Be=f,ko.transition=x}}function Mc(t,r,s,c){if(Us){var f=Lc(t,r,s,c);if(f===null)Zc(t,r,c,Vs,s),$h(t,c);else if(T1(f,t,r,s,c))c.stopPropagation();else if($h(t,c),r&4&&-1<$1.indexOf(t)){for(;f!==null;){var x=_i(f);if(x!==null&&Sh(x),x=Lc(t,r,s,c),x===null&&Zc(t,r,c,Vs,s),x===f)break;f=x}f!==null&&c.stopPropagation()}else Zc(t,r,c,null,s)}}var Vs=null;function Lc(t,r,s,c){if(Vs=null,t=jc(c),t=Ur(t),t!==null)if(r=Hr(t),r===null)t=null;else if(s=r.tag,s===13){if(t=ph(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Vs=t,null}function Rh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(y1()){case Ac:return 1;case wh:return 4;case Os:case w1:return 16;case vh:return 536870912;default:return 16}default:return 16}}var hr=null,Oc=null,Ks=null;function Dh(){if(Ks)return Ks;var t,r=Oc,s=r.length,c,f="value"in hr?hr.value:hr.textContent,x=f.length;for(t=0;t<s&&r[t]===f[t];t++);var v=s-t;for(c=1;c<=v&&r[s-c]===f[x-c];c++);return Ks=f.slice(t,1<c?1-c:void 0)}function Qs(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function qs(){return!0}function Ih(){return!1}function Qt(t){function r(s,c,f,x,v){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=v,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(s=t[P],this[P]=s?s(x):x[P]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?qs:Ih,this.isPropagationStopped=Ih,this}return N(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=qs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=qs)},persist:function(){},isPersistent:qs}),r}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zc=Qt(So),Ti=N({},So,{view:0,detail:0}),I1=Qt(Ti),_c,Fc,Ai,Gs=N({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(_c=t.screenX-Ai.screenX,Fc=t.screenY-Ai.screenY):Fc=_c=0,Ai=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:Fc}}),Ph=Qt(Gs),P1=N({},Gs,{dataTransfer:0}),N1=Qt(P1),M1=N({},Ti,{relatedTarget:0}),Bc=Qt(M1),L1=N({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),O1=Qt(L1),z1=N({},So,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_1=Qt(z1),F1=N({},So,{data:0}),Nh=Qt(F1),B1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function U1(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=H1[t])?!!r[t]:!1}function Wc(){return U1}var V1=N({},Ti,{key:function(t){if(t.key){var r=B1[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Qs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(t){return t.type==="keypress"?Qs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),K1=Qt(V1),Q1=N({},Gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=Qt(Q1),q1=N({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),G1=Qt(q1),Y1=N({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),X1=Qt(Y1),J1=N({},Gs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z1=Qt(J1),eb=[9,13,27,32],Hc=p&&"CompositionEvent"in window,Ri=null;p&&"documentMode"in document&&(Ri=document.documentMode);var tb=p&&"TextEvent"in window&&!Ri,Lh=p&&(!Hc||Ri&&8<Ri&&11>=Ri),Oh=" ",zh=!1;function _h(t,r){switch(t){case"keyup":return eb.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var jo=!1;function nb(t,r){switch(t){case"compositionend":return Fh(r);case"keypress":return r.which!==32?null:(zh=!0,Oh);case"textInput":return t=r.data,t===Oh&&zh?null:t;default:return null}}function rb(t,r){if(jo)return t==="compositionend"||!Hc&&_h(t,r)?(t=Dh(),Ks=Oc=hr=null,jo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Lh&&r.locale!=="ko"?null:r.data;default:return null}}var ob={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!ob[t.type]:r==="textarea"}function Wh(t,r,s,c){ah(c),r=el(r,"onChange"),0<r.length&&(s=new zc("onChange","change",null,s,c),t.push({event:s,listeners:r}))}var Di=null,Ii=null;function ib(t){sm(t,0)}function Ys(t){var r=Ao(t);if(ne(r))return t}function sb(t,r){if(t==="change")return r}var Hh=!1;if(p){var Uc;if(p){var Vc="oninput"in document;if(!Vc){var Uh=document.createElement("div");Uh.setAttribute("oninput","return;"),Vc=typeof Uh.oninput=="function"}Uc=Vc}else Uc=!1;Hh=Uc&&(!document.documentMode||9<document.documentMode)}function Vh(){Di&&(Di.detachEvent("onpropertychange",Kh),Ii=Di=null)}function Kh(t){if(t.propertyName==="value"&&Ys(Ii)){var r=[];Wh(r,Ii,t,jc(t)),fh(ib,r)}}function lb(t,r,s){t==="focusin"?(Vh(),Di=r,Ii=s,Di.attachEvent("onpropertychange",Kh)):t==="focusout"&&Vh()}function ab(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ys(Ii)}function cb(t,r){if(t==="click")return Ys(r)}function ub(t,r){if(t==="input"||t==="change")return Ys(r)}function db(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var yn=typeof Object.is=="function"?Object.is:db;function Pi(t,r){if(yn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!h.call(r,f)||!yn(t[f],r[f]))return!1}return!0}function Qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,r){var s=Qh(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=r&&c>=r)return{node:s,offset:r-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Qh(s)}}function Gh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Gh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Yh(){for(var t=window,r=ce();r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=ce(t.document)}return r}function Kc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function fb(t){var r=Yh(),s=t.focusedElem,c=t.selectionRange;if(r!==s&&s&&s.ownerDocument&&Gh(s.ownerDocument.documentElement,s)){if(c!==null&&Kc(s)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(t,s.value.length);else if(t=(r=s.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,x=Math.min(c.start,f);c=c.end===void 0?x:Math.min(c.end,f),!t.extend&&x>c&&(f=c,c=x,x=f),f=qh(s,x);var v=qh(s,c);f&&v&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),x>c?(t.addRange(r),t.extend(v.node,v.offset)):(r.setEnd(v.node,v.offset),t.addRange(r)))}}for(r=[],t=s;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)t=r[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pb=p&&"documentMode"in document&&11>=document.documentMode,Co=null,Qc=null,Ni=null,qc=!1;function Xh(t,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;qc||Co==null||Co!==ce(c)||(c=Co,"selectionStart"in c&&Kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ni&&Pi(Ni,c)||(Ni=c,c=el(Qc,"onSelect"),0<c.length&&(r=new zc("onSelect","select",null,r,s),t.push({event:r,listeners:c}),r.target=Co)))}function Xs(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var Eo={animationend:Xs("Animation","AnimationEnd"),animationiteration:Xs("Animation","AnimationIteration"),animationstart:Xs("Animation","AnimationStart"),transitionend:Xs("Transition","TransitionEnd")},Gc={},Jh={};p&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function Js(t){if(Gc[t])return Gc[t];if(!Eo[t])return t;var r=Eo[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Jh)return Gc[t]=r[s];return t}var Zh=Js("animationend"),em=Js("animationiteration"),tm=Js("animationstart"),nm=Js("transitionend"),rm=new Map,om="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,r){rm.set(t,r),u(r,[t])}for(var Yc=0;Yc<om.length;Yc++){var Xc=om[Yc],hb=Xc.toLowerCase(),mb=Xc[0].toUpperCase()+Xc.slice(1);mr(hb,"on"+mb)}mr(Zh,"onAnimationEnd"),mr(em,"onAnimationIteration"),mr(tm,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(nm,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function im(t,r,s){var c=t.type||"unknown-event";t.currentTarget=s,h1(c,r,void 0,t),t.currentTarget=null}function sm(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],f=c.event;c=c.listeners;e:{var x=void 0;if(r)for(var v=c.length-1;0<=v;v--){var P=c[v],O=P.instance,G=P.currentTarget;if(P=P.listener,O!==x&&f.isPropagationStopped())break e;im(f,P,G),x=O}else for(v=0;v<c.length;v++){if(P=c[v],O=P.instance,G=P.currentTarget,P=P.listener,O!==x&&f.isPropagationStopped())break e;im(f,P,G),x=O}}}if(Ls)throw t=Tc,Ls=!1,Tc=null,t}function Qe(t,r){var s=r[iu];s===void 0&&(s=r[iu]=new Set);var c=t+"__bubble";s.has(c)||(lm(r,t,2,!1),s.add(c))}function Jc(t,r,s){var c=0;r&&(c|=4),lm(s,t,c,r)}var Zs="_reactListening"+Math.random().toString(36).slice(2);function Li(t){if(!t[Zs]){t[Zs]=!0,i.forEach(function(s){s!=="selectionchange"&&(gb.has(s)||Jc(s,!1,t),Jc(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Zs]||(r[Zs]=!0,Jc("selectionchange",!1,r))}}function lm(t,r,s,c){switch(Rh(r)){case 1:var f=R1;break;case 4:f=D1;break;default:f=Mc}s=f.bind(null,r,s,t),f=void 0,!$c||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(r,s,{capture:!0,passive:f}):t.addEventListener(r,s,!0):f!==void 0?t.addEventListener(r,s,{passive:f}):t.addEventListener(r,s,!1)}function Zc(t,r,s,c,f){var x=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var P=c.stateNode.containerInfo;if(P===f||P.nodeType===8&&P.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var O=v.tag;if((O===3||O===4)&&(O=v.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;v=v.return}for(;P!==null;){if(v=Ur(P),v===null)return;if(O=v.tag,O===5||O===6){c=x=v;continue e}P=P.parentNode}}c=c.return}fh(function(){var G=x,oe=jc(s),se=[];e:{var re=rm.get(t);if(re!==void 0){var we=zc,be=t;switch(t){case"keypress":if(Qs(s)===0)break e;case"keydown":case"keyup":we=K1;break;case"focusin":be="focus",we=Bc;break;case"focusout":be="blur",we=Bc;break;case"beforeblur":case"afterblur":we=Bc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=Ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=N1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=G1;break;case Zh:case em:case tm:we=O1;break;case nm:we=X1;break;case"scroll":we=I1;break;case"wheel":we=Z1;break;case"copy":case"cut":case"paste":we=_1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=Mh}var ke=(r&4)!==0,ot=!ke&&t==="scroll",U=ke?re!==null?re+"Capture":null:re;ke=[];for(var F=G,Q;F!==null;){Q=F;var de=Q.stateNode;if(Q.tag===5&&de!==null&&(Q=de,U!==null&&(de=yi(F,U),de!=null&&ke.push(Oi(F,de,Q)))),ot)break;F=F.return}0<ke.length&&(re=new we(re,be,null,s,oe),se.push({event:re,listeners:ke}))}}if(!(r&7)){e:{if(re=t==="mouseover"||t==="pointerover",we=t==="mouseout"||t==="pointerout",re&&s!==Sc&&(be=s.relatedTarget||s.fromElement)&&(Ur(be)||be[Yn]))break e;if((we||re)&&(re=oe.window===oe?oe:(re=oe.ownerDocument)?re.defaultView||re.parentWindow:window,we?(be=s.relatedTarget||s.toElement,we=G,be=be?Ur(be):null,be!==null&&(ot=Hr(be),be!==ot||be.tag!==5&&be.tag!==6)&&(be=null)):(we=null,be=G),we!==be)){if(ke=Ph,de="onMouseLeave",U="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(ke=Mh,de="onPointerLeave",U="onPointerEnter",F="pointer"),ot=we==null?re:Ao(we),Q=be==null?re:Ao(be),re=new ke(de,F+"leave",we,s,oe),re.target=ot,re.relatedTarget=Q,de=null,Ur(oe)===G&&(ke=new ke(U,F+"enter",be,s,oe),ke.target=Q,ke.relatedTarget=ot,de=ke),ot=de,we&&be)t:{for(ke=we,U=be,F=0,Q=ke;Q;Q=$o(Q))F++;for(Q=0,de=U;de;de=$o(de))Q++;for(;0<F-Q;)ke=$o(ke),F--;for(;0<Q-F;)U=$o(U),Q--;for(;F--;){if(ke===U||U!==null&&ke===U.alternate)break t;ke=$o(ke),U=$o(U)}ke=null}else ke=null;we!==null&&am(se,re,we,ke,!1),be!==null&&ot!==null&&am(se,ot,be,ke,!0)}}e:{if(re=G?Ao(G):window,we=re.nodeName&&re.nodeName.toLowerCase(),we==="select"||we==="input"&&re.type==="file")var Se=sb;else if(Bh(re))if(Hh)Se=ub;else{Se=ab;var Ee=lb}else(we=re.nodeName)&&we.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(Se=cb);if(Se&&(Se=Se(t,G))){Wh(se,Se,s,oe);break e}Ee&&Ee(t,re,G),t==="focusout"&&(Ee=re._wrapperState)&&Ee.controlled&&re.type==="number"&&ln(re,"number",re.value)}switch(Ee=G?Ao(G):window,t){case"focusin":(Bh(Ee)||Ee.contentEditable==="true")&&(Co=Ee,Qc=G,Ni=null);break;case"focusout":Ni=Qc=Co=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,Xh(se,s,oe);break;case"selectionchange":if(pb)break;case"keydown":case"keyup":Xh(se,s,oe)}var $e;if(Hc)e:{switch(t){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else jo?_h(t,s)&&(Te="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Te="onCompositionStart");Te&&(Lh&&s.locale!=="ko"&&(jo||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&jo&&($e=Dh()):(hr=oe,Oc="value"in hr?hr.value:hr.textContent,jo=!0)),Ee=el(G,Te),0<Ee.length&&(Te=new Nh(Te,t,null,s,oe),se.push({event:Te,listeners:Ee}),$e?Te.data=$e:($e=Fh(s),$e!==null&&(Te.data=$e)))),($e=tb?nb(t,s):rb(t,s))&&(G=el(G,"onBeforeInput"),0<G.length&&(oe=new Nh("onBeforeInput","beforeinput",null,s,oe),se.push({event:oe,listeners:G}),oe.data=$e))}sm(se,r)})}function Oi(t,r,s){return{instance:t,listener:r,currentTarget:s}}function el(t,r){for(var s=r+"Capture",c=[];t!==null;){var f=t,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=yi(t,s),x!=null&&c.unshift(Oi(t,x,f)),x=yi(t,r),x!=null&&c.push(Oi(t,x,f))),t=t.return}return c}function $o(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,r,s,c,f){for(var x=r._reactName,v=[];s!==null&&s!==c;){var P=s,O=P.alternate,G=P.stateNode;if(O!==null&&O===c)break;P.tag===5&&G!==null&&(P=G,f?(O=yi(s,x),O!=null&&v.unshift(Oi(s,O,P))):f||(O=yi(s,x),O!=null&&v.push(Oi(s,O,P)))),s=s.return}v.length!==0&&t.push({event:r,listeners:v})}var xb=/\r\n?/g,yb=/\u0000|\uFFFD/g;function cm(t){return(typeof t=="string"?t:""+t).replace(xb,`
`).replace(yb,"")}function tl(t,r,s){if(r=cm(r),cm(t)!==r&&s)throw Error(o(425))}function nl(){}var eu=null,tu=null;function nu(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,wb=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,vb=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(bb)}:ru;function bb(t){setTimeout(function(){throw t})}function ou(t,r){var s=r,c=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(c===0){t.removeChild(f),$i(r);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=f}while(s);$i(r)}function gr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function dm(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}var To=Math.random().toString(36).slice(2),Mn="__reactFiber$"+To,zi="__reactProps$"+To,Yn="__reactContainer$"+To,iu="__reactEvents$"+To,kb="__reactListeners$"+To,Sb="__reactHandles$"+To;function Ur(t){var r=t[Mn];if(r)return r;for(var s=t.parentNode;s;){if(r=s[Yn]||s[Mn]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=dm(t);t!==null;){if(s=t[Mn])return s;t=dm(t)}return r}t=s,s=t.parentNode}return null}function _i(t){return t=t[Mn]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ao(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function rl(t){return t[zi]||null}var su=[],Ro=-1;function xr(t){return{current:t}}function qe(t){0>Ro||(t.current=su[Ro],su[Ro]=null,Ro--)}function Ke(t,r){Ro++,su[Ro]=t.current,t.current=r}var yr={},$t=xr(yr),Lt=xr(!1),Vr=yr;function Do(t,r){var s=t.type.contextTypes;if(!s)return yr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in s)f[x]=r[x];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function Ot(t){return t=t.childContextTypes,t!=null}function ol(){qe(Lt),qe($t)}function fm(t,r,s){if($t.current!==yr)throw Error(o(168));Ke($t,r),Ke(Lt,s)}function pm(t,r,s){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(o(108,xe(t)||"Unknown",f));return N({},s,c)}function il(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Vr=$t.current,Ke($t,t),Ke(Lt,Lt.current),!0}function hm(t,r,s){var c=t.stateNode;if(!c)throw Error(o(169));s?(t=pm(t,r,Vr),c.__reactInternalMemoizedMergedChildContext=t,qe(Lt),qe($t),Ke($t,t)):qe(Lt),Ke(Lt,s)}var Xn=null,sl=!1,lu=!1;function mm(t){Xn===null?Xn=[t]:Xn.push(t)}function jb(t){sl=!0,mm(t)}function wr(){if(!lu&&Xn!==null){lu=!0;var t=0,r=Be;try{var s=Xn;for(Be=1;t<s.length;t++){var c=s[t];do c=c(!0);while(c!==null)}Xn=null,sl=!1}catch(f){throw Xn!==null&&(Xn=Xn.slice(t+1)),xh(Ac,wr),f}finally{Be=r,lu=!1}}return null}var Io=[],Po=0,ll=null,al=0,an=[],cn=0,Kr=null,Jn=1,Zn="";function Qr(t,r){Io[Po++]=al,Io[Po++]=ll,ll=t,al=r}function gm(t,r,s){an[cn++]=Jn,an[cn++]=Zn,an[cn++]=Kr,Kr=t;var c=Jn;t=Zn;var f=32-xn(c)-1;c&=~(1<<f),s+=1;var x=32-xn(r)+f;if(30<x){var v=f-f%5;x=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Jn=1<<32-xn(r)+f|s<<f|c,Zn=x+t}else Jn=1<<x|s<<f|c,Zn=t}function au(t){t.return!==null&&(Qr(t,1),gm(t,1,0))}function cu(t){for(;t===ll;)ll=Io[--Po],Io[Po]=null,al=Io[--Po],Io[Po]=null;for(;t===Kr;)Kr=an[--cn],an[cn]=null,Zn=an[--cn],an[cn]=null,Jn=an[--cn],an[cn]=null}var qt=null,Gt=null,Ye=!1,wn=null;function xm(t,r){var s=pn(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=t,r=t.deletions,r===null?(t.deletions=[s],t.flags|=16):r.push(s)}function ym(t,r){switch(t.tag){case 5:var s=t.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,qt=t,Gt=gr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,qt=t,Gt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=Kr!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=pn(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,qt=t,Gt=null,!0):!1;default:return!1}}function uu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function du(t){if(Ye){var r=Gt;if(r){var s=r;if(!ym(t,r)){if(uu(t))throw Error(o(418));r=gr(s.nextSibling);var c=qt;r&&ym(t,r)?xm(c,s):(t.flags=t.flags&-4097|2,Ye=!1,qt=t)}}else{if(uu(t))throw Error(o(418));t.flags=t.flags&-4097|2,Ye=!1,qt=t}}}function wm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qt=t}function cl(t){if(t!==qt)return!1;if(!Ye)return wm(t),Ye=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!nu(t.type,t.memoizedProps)),r&&(r=Gt)){if(uu(t))throw vm(),Error(o(418));for(;r;)xm(t,r),r=gr(r.nextSibling)}if(wm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(r===0){Gt=gr(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}t=t.nextSibling}Gt=null}}else Gt=qt?gr(t.stateNode.nextSibling):null;return!0}function vm(){for(var t=Gt;t;)t=gr(t.nextSibling)}function No(){Gt=qt=null,Ye=!1}function fu(t){wn===null?wn=[t]:wn.push(t)}var Cb=R.ReactCurrentBatchConfig;function Fi(t,r,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var c=s.stateNode}if(!c)throw Error(o(147,t));var f=c,x=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(v){var P=f.refs;v===null?delete P[x]:P[x]=v},r._stringRef=x,r)}if(typeof t!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,t))}return t}function ul(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function bm(t){var r=t._init;return r(t._payload)}function km(t){function r(U,F){if(t){var Q=U.deletions;Q===null?(U.deletions=[F],U.flags|=16):Q.push(F)}}function s(U,F){if(!t)return null;for(;F!==null;)r(U,F),F=F.sibling;return null}function c(U,F){for(U=new Map;F!==null;)F.key!==null?U.set(F.key,F):U.set(F.index,F),F=F.sibling;return U}function f(U,F){return U=$r(U,F),U.index=0,U.sibling=null,U}function x(U,F,Q){return U.index=Q,t?(Q=U.alternate,Q!==null?(Q=Q.index,Q<F?(U.flags|=2,F):Q):(U.flags|=2,F)):(U.flags|=1048576,F)}function v(U){return t&&U.alternate===null&&(U.flags|=2),U}function P(U,F,Q,de){return F===null||F.tag!==6?(F=rd(Q,U.mode,de),F.return=U,F):(F=f(F,Q),F.return=U,F)}function O(U,F,Q,de){var Se=Q.type;return Se===X?oe(U,F,Q.props.children,de,Q.key):F!==null&&(F.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===I&&bm(Se)===F.type)?(de=f(F,Q.props),de.ref=Fi(U,F,Q),de.return=U,de):(de=Nl(Q.type,Q.key,Q.props,null,U.mode,de),de.ref=Fi(U,F,Q),de.return=U,de)}function G(U,F,Q,de){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=od(Q,U.mode,de),F.return=U,F):(F=f(F,Q.children||[]),F.return=U,F)}function oe(U,F,Q,de,Se){return F===null||F.tag!==7?(F=to(Q,U.mode,de,Se),F.return=U,F):(F=f(F,Q),F.return=U,F)}function se(U,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=rd(""+F,U.mode,Q),F.return=U,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case M:return Q=Nl(F.type,F.key,F.props,null,U.mode,Q),Q.ref=Fi(U,null,F),Q.return=U,Q;case K:return F=od(F,U.mode,Q),F.return=U,F;case I:var de=F._init;return se(U,de(F._payload),Q)}if(qn(F)||B(F))return F=to(F,U.mode,Q,null),F.return=U,F;ul(U,F)}return null}function re(U,F,Q,de){var Se=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Se!==null?null:P(U,F,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Se?O(U,F,Q,de):null;case K:return Q.key===Se?G(U,F,Q,de):null;case I:return Se=Q._init,re(U,F,Se(Q._payload),de)}if(qn(Q)||B(Q))return Se!==null?null:oe(U,F,Q,de,null);ul(U,Q)}return null}function we(U,F,Q,de,Se){if(typeof de=="string"&&de!==""||typeof de=="number")return U=U.get(Q)||null,P(F,U,""+de,Se);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case M:return U=U.get(de.key===null?Q:de.key)||null,O(F,U,de,Se);case K:return U=U.get(de.key===null?Q:de.key)||null,G(F,U,de,Se);case I:var Ee=de._init;return we(U,F,Q,Ee(de._payload),Se)}if(qn(de)||B(de))return U=U.get(Q)||null,oe(F,U,de,Se,null);ul(F,de)}return null}function be(U,F,Q,de){for(var Se=null,Ee=null,$e=F,Te=F=0,ht=null;$e!==null&&Te<Q.length;Te++){$e.index>Te?(ht=$e,$e=null):ht=$e.sibling;var Le=re(U,$e,Q[Te],de);if(Le===null){$e===null&&($e=ht);break}t&&$e&&Le.alternate===null&&r(U,$e),F=x(Le,F,Te),Ee===null?Se=Le:Ee.sibling=Le,Ee=Le,$e=ht}if(Te===Q.length)return s(U,$e),Ye&&Qr(U,Te),Se;if($e===null){for(;Te<Q.length;Te++)$e=se(U,Q[Te],de),$e!==null&&(F=x($e,F,Te),Ee===null?Se=$e:Ee.sibling=$e,Ee=$e);return Ye&&Qr(U,Te),Se}for($e=c(U,$e);Te<Q.length;Te++)ht=we($e,U,Te,Q[Te],de),ht!==null&&(t&&ht.alternate!==null&&$e.delete(ht.key===null?Te:ht.key),F=x(ht,F,Te),Ee===null?Se=ht:Ee.sibling=ht,Ee=ht);return t&&$e.forEach(function(Tr){return r(U,Tr)}),Ye&&Qr(U,Te),Se}function ke(U,F,Q,de){var Se=B(Q);if(typeof Se!="function")throw Error(o(150));if(Q=Se.call(Q),Q==null)throw Error(o(151));for(var Ee=Se=null,$e=F,Te=F=0,ht=null,Le=Q.next();$e!==null&&!Le.done;Te++,Le=Q.next()){$e.index>Te?(ht=$e,$e=null):ht=$e.sibling;var Tr=re(U,$e,Le.value,de);if(Tr===null){$e===null&&($e=ht);break}t&&$e&&Tr.alternate===null&&r(U,$e),F=x(Tr,F,Te),Ee===null?Se=Tr:Ee.sibling=Tr,Ee=Tr,$e=ht}if(Le.done)return s(U,$e),Ye&&Qr(U,Te),Se;if($e===null){for(;!Le.done;Te++,Le=Q.next())Le=se(U,Le.value,de),Le!==null&&(F=x(Le,F,Te),Ee===null?Se=Le:Ee.sibling=Le,Ee=Le);return Ye&&Qr(U,Te),Se}for($e=c(U,$e);!Le.done;Te++,Le=Q.next())Le=we($e,U,Te,Le.value,de),Le!==null&&(t&&Le.alternate!==null&&$e.delete(Le.key===null?Te:Le.key),F=x(Le,F,Te),Ee===null?Se=Le:Ee.sibling=Le,Ee=Le);return t&&$e.forEach(function(rk){return r(U,rk)}),Ye&&Qr(U,Te),Se}function ot(U,F,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===X&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:e:{for(var Se=Q.key,Ee=F;Ee!==null;){if(Ee.key===Se){if(Se=Q.type,Se===X){if(Ee.tag===7){s(U,Ee.sibling),F=f(Ee,Q.props.children),F.return=U,U=F;break e}}else if(Ee.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===I&&bm(Se)===Ee.type){s(U,Ee.sibling),F=f(Ee,Q.props),F.ref=Fi(U,Ee,Q),F.return=U,U=F;break e}s(U,Ee);break}else r(U,Ee);Ee=Ee.sibling}Q.type===X?(F=to(Q.props.children,U.mode,de,Q.key),F.return=U,U=F):(de=Nl(Q.type,Q.key,Q.props,null,U.mode,de),de.ref=Fi(U,F,Q),de.return=U,U=de)}return v(U);case K:e:{for(Ee=Q.key;F!==null;){if(F.key===Ee)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){s(U,F.sibling),F=f(F,Q.children||[]),F.return=U,U=F;break e}else{s(U,F);break}else r(U,F);F=F.sibling}F=od(Q,U.mode,de),F.return=U,U=F}return v(U);case I:return Ee=Q._init,ot(U,F,Ee(Q._payload),de)}if(qn(Q))return be(U,F,Q,de);if(B(Q))return ke(U,F,Q,de);ul(U,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,F!==null&&F.tag===6?(s(U,F.sibling),F=f(F,Q),F.return=U,U=F):(s(U,F),F=rd(Q,U.mode,de),F.return=U,U=F),v(U)):s(U,F)}return ot}var Mo=km(!0),Sm=km(!1),dl=xr(null),fl=null,Lo=null,pu=null;function hu(){pu=Lo=fl=null}function mu(t){var r=dl.current;qe(dl),t._currentValue=r}function gu(t,r,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===s)break;t=t.return}}function Oo(t,r){fl=t,pu=Lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(zt=!0),t.firstContext=null)}function un(t){var r=t._currentValue;if(pu!==t)if(t={context:t,memoizedValue:r,next:null},Lo===null){if(fl===null)throw Error(o(308));Lo=t,fl.dependencies={lanes:0,firstContext:t}}else Lo=Lo.next=t;return r}var qr=null;function xu(t){qr===null?qr=[t]:qr.push(t)}function jm(t,r,s,c){var f=r.interleaved;return f===null?(s.next=s,xu(r)):(s.next=f.next,f.next=s),r.interleaved=s,er(t,c)}function er(t,r){t.lanes|=r;var s=t.alternate;for(s!==null&&(s.lanes|=r),s=t,t=t.return;t!==null;)t.childLanes|=r,s=t.alternate,s!==null&&(s.childLanes|=r),s=t,t=t.return;return s.tag===3?s.stateNode:null}var vr=!1;function yu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cm(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function br(t,r,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,Me&2){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,er(t,s)}return f=c.interleaved,f===null?(r.next=r,xu(c)):(r.next=f.next,f.next=r),c.interleaved=r,er(t,s)}function pl(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,Ic(t,s)}}function Em(t,r){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var v={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};x===null?f=x=v:x=x.next=v,s=s.next}while(s!==null);x===null?f=x=r:x=x.next=r}else f=x=r;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,effects:c.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}function hl(t,r,s,c){var f=t.updateQueue;vr=!1;var x=f.firstBaseUpdate,v=f.lastBaseUpdate,P=f.shared.pending;if(P!==null){f.shared.pending=null;var O=P,G=O.next;O.next=null,v===null?x=G:v.next=G,v=O;var oe=t.alternate;oe!==null&&(oe=oe.updateQueue,P=oe.lastBaseUpdate,P!==v&&(P===null?oe.firstBaseUpdate=G:P.next=G,oe.lastBaseUpdate=O))}if(x!==null){var se=f.baseState;v=0,oe=G=O=null,P=x;do{var re=P.lane,we=P.eventTime;if((c&re)===re){oe!==null&&(oe=oe.next={eventTime:we,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var be=t,ke=P;switch(re=r,we=s,ke.tag){case 1:if(be=ke.payload,typeof be=="function"){se=be.call(we,se,re);break e}se=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ke.payload,re=typeof be=="function"?be.call(we,se,re):be,re==null)break e;se=N({},se,re);break e;case 2:vr=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,re=f.effects,re===null?f.effects=[P]:re.push(P))}else we={eventTime:we,lane:re,tag:P.tag,payload:P.payload,callback:P.callback,next:null},oe===null?(G=oe=we,O=se):oe=oe.next=we,v|=re;if(P=P.next,P===null){if(P=f.shared.pending,P===null)break;re=P,P=re.next,re.next=null,f.lastBaseUpdate=re,f.shared.pending=null}}while(!0);if(oe===null&&(O=se),f.baseState=O,f.firstBaseUpdate=G,f.lastBaseUpdate=oe,r=f.shared.interleaved,r!==null){f=r;do v|=f.lane,f=f.next;while(f!==r)}else x===null&&(f.shared.lanes=0);Xr|=v,t.lanes=v,t.memoizedState=se}}function $m(t,r,s){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],f=c.callback;if(f!==null){if(c.callback=null,c=s,typeof f!="function")throw Error(o(191,f));f.call(c)}}}var Bi={},Ln=xr(Bi),Wi=xr(Bi),Hi=xr(Bi);function Gr(t){if(t===Bi)throw Error(o(174));return t}function wu(t,r){switch(Ke(Hi,r),Ke(Wi,t),Ke(Ln,Bi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:vc(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=vc(r,t)}qe(Ln),Ke(Ln,r)}function zo(){qe(Ln),qe(Wi),qe(Hi)}function Tm(t){Gr(Hi.current);var r=Gr(Ln.current),s=vc(r,t.type);r!==s&&(Ke(Wi,t),Ke(Ln,s))}function vu(t){Wi.current===t&&(qe(Ln),qe(Wi))}var Xe=xr(0);function ml(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var bu=[];function ku(){for(var t=0;t<bu.length;t++)bu[t]._workInProgressVersionPrimary=null;bu.length=0}var gl=R.ReactCurrentDispatcher,Su=R.ReactCurrentBatchConfig,Yr=0,Je=null,ct=null,ft=null,xl=!1,Ui=!1,Vi=0,Eb=0;function Tt(){throw Error(o(321))}function ju(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!yn(t[s],r[s]))return!1;return!0}function Cu(t,r,s,c,f,x){if(Yr=x,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=t===null||t.memoizedState===null?Rb:Db,t=s(c,f),Ui){x=0;do{if(Ui=!1,Vi=0,25<=x)throw Error(o(301));x+=1,ft=ct=null,r.updateQueue=null,gl.current=Ib,t=s(c,f)}while(Ui)}if(gl.current=vl,r=ct!==null&&ct.next!==null,Yr=0,ft=ct=Je=null,xl=!1,r)throw Error(o(300));return t}function Eu(){var t=Vi!==0;return Vi=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Je.memoizedState=ft=t:ft=ft.next=t,ft}function dn(){if(ct===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var r=ft===null?Je.memoizedState:ft.next;if(r!==null)ft=r,ct=t;else{if(t===null)throw Error(o(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},ft===null?Je.memoizedState=ft=t:ft=ft.next=t}return ft}function Ki(t,r){return typeof r=="function"?r(t):r}function $u(t){var r=dn(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=ct,f=c.baseQueue,x=s.pending;if(x!==null){if(f!==null){var v=f.next;f.next=x.next,x.next=v}c.baseQueue=f=x,s.pending=null}if(f!==null){x=f.next,c=c.baseState;var P=v=null,O=null,G=x;do{var oe=G.lane;if((Yr&oe)===oe)O!==null&&(O=O.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),c=G.hasEagerState?G.eagerState:t(c,G.action);else{var se={lane:oe,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};O===null?(P=O=se,v=c):O=O.next=se,Je.lanes|=oe,Xr|=oe}G=G.next}while(G!==null&&G!==x);O===null?v=c:O.next=P,yn(c,r.memoizedState)||(zt=!0),r.memoizedState=c,r.baseState=v,r.baseQueue=O,s.lastRenderedState=c}if(t=s.interleaved,t!==null){f=t;do x=f.lane,Je.lanes|=x,Xr|=x,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function Tu(t){var r=dn(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=s.dispatch,f=s.pending,x=r.memoizedState;if(f!==null){s.pending=null;var v=f=f.next;do x=t(x,v.action),v=v.next;while(v!==f);yn(x,r.memoizedState)||(zt=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),s.lastRenderedState=x}return[x,c]}function Am(){}function Rm(t,r){var s=Je,c=dn(),f=r(),x=!yn(c.memoizedState,f);if(x&&(c.memoizedState=f,zt=!0),c=c.queue,Au(Pm.bind(null,s,c,t),[t]),c.getSnapshot!==r||x||ft!==null&&ft.memoizedState.tag&1){if(s.flags|=2048,Qi(9,Im.bind(null,s,c,f,r),void 0,null),pt===null)throw Error(o(349));Yr&30||Dm(s,r,f)}return f}function Dm(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function Im(t,r,s,c){r.value=s,r.getSnapshot=c,Nm(r)&&Mm(t)}function Pm(t,r,s){return s(function(){Nm(r)&&Mm(t)})}function Nm(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!yn(t,s)}catch{return!0}}function Mm(t){var r=er(t,1);r!==null&&Sn(r,t,1,-1)}function Lm(t){var r=On();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},r.queue=t,t=t.dispatch=Ab.bind(null,Je,t),[r.memoizedState,t]}function Qi(t,r,s,c){return t={tag:t,create:r,destroy:s,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=t.next=t):(s=r.lastEffect,s===null?r.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,r.lastEffect=t)),t}function Om(){return dn().memoizedState}function yl(t,r,s,c){var f=On();Je.flags|=t,f.memoizedState=Qi(1|r,s,void 0,c===void 0?null:c)}function wl(t,r,s,c){var f=dn();c=c===void 0?null:c;var x=void 0;if(ct!==null){var v=ct.memoizedState;if(x=v.destroy,c!==null&&ju(c,v.deps)){f.memoizedState=Qi(r,s,x,c);return}}Je.flags|=t,f.memoizedState=Qi(1|r,s,x,c)}function zm(t,r){return yl(8390656,8,t,r)}function Au(t,r){return wl(2048,8,t,r)}function _m(t,r){return wl(4,2,t,r)}function Fm(t,r){return wl(4,4,t,r)}function Bm(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Wm(t,r,s){return s=s!=null?s.concat([t]):null,wl(4,4,Bm.bind(null,r,t),s)}function Ru(){}function Hm(t,r){var s=dn();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&ju(r,c[1])?c[0]:(s.memoizedState=[t,r],t)}function Um(t,r){var s=dn();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&ju(r,c[1])?c[0]:(t=t(),s.memoizedState=[t,r],t)}function Vm(t,r,s){return Yr&21?(yn(s,r)||(s=bh(),Je.lanes|=s,Xr|=s,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=s)}function $b(t,r){var s=Be;Be=s!==0&&4>s?s:4,t(!0);var c=Su.transition;Su.transition={};try{t(!1),r()}finally{Be=s,Su.transition=c}}function Km(){return dn().memoizedState}function Tb(t,r,s){var c=Cr(t);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},Qm(t))qm(r,s);else if(s=jm(t,r,s,c),s!==null){var f=Mt();Sn(s,t,c,f),Gm(s,r,c)}}function Ab(t,r,s){var c=Cr(t),f={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(Qm(t))qm(r,f);else{var x=t.alternate;if(t.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var v=r.lastRenderedState,P=x(v,s);if(f.hasEagerState=!0,f.eagerState=P,yn(P,v)){var O=r.interleaved;O===null?(f.next=f,xu(r)):(f.next=O.next,O.next=f),r.interleaved=f;return}}catch{}finally{}s=jm(t,r,f,c),s!==null&&(f=Mt(),Sn(s,t,c,f),Gm(s,r,c))}}function Qm(t){var r=t.alternate;return t===Je||r!==null&&r===Je}function qm(t,r){Ui=xl=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function Gm(t,r,s){if(s&4194240){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,Ic(t,s)}}var vl={readContext:un,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Rb={readContext:un,useCallback:function(t,r){return On().memoizedState=[t,r===void 0?null:r],t},useContext:un,useEffect:zm,useImperativeHandle:function(t,r,s){return s=s!=null?s.concat([t]):null,yl(4194308,4,Bm.bind(null,r,t),s)},useLayoutEffect:function(t,r){return yl(4194308,4,t,r)},useInsertionEffect:function(t,r){return yl(4,2,t,r)},useMemo:function(t,r){var s=On();return r=r===void 0?null:r,t=t(),s.memoizedState=[t,r],t},useReducer:function(t,r,s){var c=On();return r=s!==void 0?s(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=Tb.bind(null,Je,t),[c.memoizedState,t]},useRef:function(t){var r=On();return t={current:t},r.memoizedState=t},useState:Lm,useDebugValue:Ru,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Lm(!1),r=t[0];return t=$b.bind(null,t[1]),On().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,s){var c=Je,f=On();if(Ye){if(s===void 0)throw Error(o(407));s=s()}else{if(s=r(),pt===null)throw Error(o(349));Yr&30||Dm(c,r,s)}f.memoizedState=s;var x={value:s,getSnapshot:r};return f.queue=x,zm(Pm.bind(null,c,x,t),[t]),c.flags|=2048,Qi(9,Im.bind(null,c,x,s,r),void 0,null),s},useId:function(){var t=On(),r=pt.identifierPrefix;if(Ye){var s=Zn,c=Jn;s=(c&~(1<<32-xn(c)-1)).toString(32)+s,r=":"+r+"R"+s,s=Vi++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=Eb++,r=":"+r+"r"+s.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},Db={readContext:un,useCallback:Hm,useContext:un,useEffect:Au,useImperativeHandle:Wm,useInsertionEffect:_m,useLayoutEffect:Fm,useMemo:Um,useReducer:$u,useRef:Om,useState:function(){return $u(Ki)},useDebugValue:Ru,useDeferredValue:function(t){var r=dn();return Vm(r,ct.memoizedState,t)},useTransition:function(){var t=$u(Ki)[0],r=dn().memoizedState;return[t,r]},useMutableSource:Am,useSyncExternalStore:Rm,useId:Km,unstable_isNewReconciler:!1},Ib={readContext:un,useCallback:Hm,useContext:un,useEffect:Au,useImperativeHandle:Wm,useInsertionEffect:_m,useLayoutEffect:Fm,useMemo:Um,useReducer:Tu,useRef:Om,useState:function(){return Tu(Ki)},useDebugValue:Ru,useDeferredValue:function(t){var r=dn();return ct===null?r.memoizedState=t:Vm(r,ct.memoizedState,t)},useTransition:function(){var t=Tu(Ki)[0],r=dn().memoizedState;return[t,r]},useMutableSource:Am,useSyncExternalStore:Rm,useId:Km,unstable_isNewReconciler:!1};function vn(t,r){if(t&&t.defaultProps){r=N({},r),t=t.defaultProps;for(var s in t)r[s]===void 0&&(r[s]=t[s]);return r}return r}function Du(t,r,s,c){r=t.memoizedState,s=s(c,r),s=s==null?r:N({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var bl={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,r,s){t=t._reactInternals;var c=Mt(),f=Cr(t),x=tr(c,f);x.payload=r,s!=null&&(x.callback=s),r=br(t,x,f),r!==null&&(Sn(r,t,f,c),pl(r,t,f))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var c=Mt(),f=Cr(t),x=tr(c,f);x.tag=1,x.payload=r,s!=null&&(x.callback=s),r=br(t,x,f),r!==null&&(Sn(r,t,f,c),pl(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=Mt(),c=Cr(t),f=tr(s,c);f.tag=2,r!=null&&(f.callback=r),r=br(t,f,c),r!==null&&(Sn(r,t,c,s),pl(r,t,c))}};function Ym(t,r,s,c,f,x,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,x,v):r.prototype&&r.prototype.isPureReactComponent?!Pi(s,c)||!Pi(f,x):!0}function Xm(t,r,s){var c=!1,f=yr,x=r.contextType;return typeof x=="object"&&x!==null?x=un(x):(f=Ot(r)?Vr:$t.current,c=r.contextTypes,x=(c=c!=null)?Do(t,f):yr),r=new r(s,x),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bl,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=x),r}function Jm(t,r,s,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==t&&bl.enqueueReplaceState(r,r.state,null)}function Iu(t,r,s,c){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},yu(t);var x=r.contextType;typeof x=="object"&&x!==null?f.context=un(x):(x=Ot(r)?Vr:$t.current,f.context=Do(t,x)),f.state=t.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Du(t,r,x,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&bl.enqueueReplaceState(f,f.state,null),hl(t,s,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,r){try{var s="",c=r;do s+=ge(c),c=c.return;while(c);var f=s}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:t,source:r,stack:f,digest:null}}function Pu(t,r,s){return{value:t,source:null,stack:s??null,digest:r??null}}function Nu(t,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var Pb=typeof WeakMap=="function"?WeakMap:Map;function Zm(t,r,s){s=tr(-1,s),s.tag=3,s.payload={element:null};var c=r.value;return s.callback=function(){Tl||(Tl=!0,Gu=c),Nu(t,r)},s}function e0(t,r,s){s=tr(-1,s),s.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;s.payload=function(){return c(f)},s.callback=function(){Nu(t,r)}}var x=t.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(s.callback=function(){Nu(t,r),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var v=r.stack;this.componentDidCatch(r.value,{componentStack:v!==null?v:""})}),s}function t0(t,r,s){var c=t.pingCache;if(c===null){c=t.pingCache=new Pb;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(s)||(f.add(s),t=Qb.bind(null,t,r,s),r.then(t,t))}function n0(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function r0(t,r,s,c,f){return t.mode&1?(t.flags|=65536,t.lanes=f,t):(t===r?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=tr(-1,1),r.tag=2,br(s,r,1))),s.lanes|=1),t)}var Nb=R.ReactCurrentOwner,zt=!1;function Nt(t,r,s,c){r.child=t===null?Sm(r,null,s,c):Mo(r,t.child,s,c)}function o0(t,r,s,c,f){s=s.render;var x=r.ref;return Oo(r,f),c=Cu(t,r,s,c,x,f),s=Eu(),t!==null&&!zt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,nr(t,r,f)):(Ye&&s&&au(r),r.flags|=1,Nt(t,r,c,f),r.child)}function i0(t,r,s,c,f){if(t===null){var x=s.type;return typeof x=="function"&&!nd(x)&&x.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=x,s0(t,r,x,c,f)):(t=Nl(s.type,null,c,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(x=t.child,!(t.lanes&f)){var v=x.memoizedProps;if(s=s.compare,s=s!==null?s:Pi,s(v,c)&&t.ref===r.ref)return nr(t,r,f)}return r.flags|=1,t=$r(x,c),t.ref=r.ref,t.return=r,r.child=t}function s0(t,r,s,c,f){if(t!==null){var x=t.memoizedProps;if(Pi(x,c)&&t.ref===r.ref)if(zt=!1,r.pendingProps=c=x,(t.lanes&f)!==0)t.flags&131072&&(zt=!0);else return r.lanes=t.lanes,nr(t,r,f)}return Mu(t,r,s,c,f)}function l0(t,r,s){var c=r.pendingProps,f=c.children,x=t!==null?t.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(Bo,Yt),Yt|=s;else{if(!(s&1073741824))return t=x!==null?x.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ke(Bo,Yt),Yt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:s,Ke(Bo,Yt),Yt|=c}else x!==null?(c=x.baseLanes|s,r.memoizedState=null):c=s,Ke(Bo,Yt),Yt|=c;return Nt(t,r,f,s),r.child}function a0(t,r){var s=r.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function Mu(t,r,s,c,f){var x=Ot(s)?Vr:$t.current;return x=Do(r,x),Oo(r,f),s=Cu(t,r,s,c,x,f),c=Eu(),t!==null&&!zt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,nr(t,r,f)):(Ye&&c&&au(r),r.flags|=1,Nt(t,r,s,f),r.child)}function c0(t,r,s,c,f){if(Ot(s)){var x=!0;il(r)}else x=!1;if(Oo(r,f),r.stateNode===null)Sl(t,r),Xm(r,s,c),Iu(r,s,c,f),c=!0;else if(t===null){var v=r.stateNode,P=r.memoizedProps;v.props=P;var O=v.context,G=s.contextType;typeof G=="object"&&G!==null?G=un(G):(G=Ot(s)?Vr:$t.current,G=Do(r,G));var oe=s.getDerivedStateFromProps,se=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function";se||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==c||O!==G)&&Jm(r,v,c,G),vr=!1;var re=r.memoizedState;v.state=re,hl(r,c,v,f),O=r.memoizedState,P!==c||re!==O||Lt.current||vr?(typeof oe=="function"&&(Du(r,s,oe,c),O=r.memoizedState),(P=vr||Ym(r,s,P,c,re,O,G))?(se||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(r.flags|=4194308)):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=O),v.props=c,v.state=O,v.context=G,c=P):(typeof v.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{v=r.stateNode,Cm(t,r),P=r.memoizedProps,G=r.type===r.elementType?P:vn(r.type,P),v.props=G,se=r.pendingProps,re=v.context,O=s.contextType,typeof O=="object"&&O!==null?O=un(O):(O=Ot(s)?Vr:$t.current,O=Do(r,O));var we=s.getDerivedStateFromProps;(oe=typeof we=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(P!==se||re!==O)&&Jm(r,v,c,O),vr=!1,re=r.memoizedState,v.state=re,hl(r,c,v,f);var be=r.memoizedState;P!==se||re!==be||Lt.current||vr?(typeof we=="function"&&(Du(r,s,we,c),be=r.memoizedState),(G=vr||Ym(r,s,G,c,re,be,O)||!1)?(oe||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,be,O),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,be,O)),typeof v.componentDidUpdate=="function"&&(r.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof v.componentDidUpdate!="function"||P===t.memoizedProps&&re===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&re===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=be),v.props=c,v.state=be,v.context=O,c=G):(typeof v.componentDidUpdate!="function"||P===t.memoizedProps&&re===t.memoizedState||(r.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&re===t.memoizedState||(r.flags|=1024),c=!1)}return Lu(t,r,s,c,x,f)}function Lu(t,r,s,c,f,x){a0(t,r);var v=(r.flags&128)!==0;if(!c&&!v)return f&&hm(r,s,!1),nr(t,r,x);c=r.stateNode,Nb.current=r;var P=v&&typeof s.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&v?(r.child=Mo(r,t.child,null,x),r.child=Mo(r,null,P,x)):Nt(t,r,P,x),r.memoizedState=c.state,f&&hm(r,s,!0),r.child}function u0(t){var r=t.stateNode;r.pendingContext?fm(t,r.pendingContext,r.pendingContext!==r.context):r.context&&fm(t,r.context,!1),wu(t,r.containerInfo)}function d0(t,r,s,c,f){return No(),fu(f),r.flags|=256,Nt(t,r,s,c),r.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function f0(t,r,s){var c=r.pendingProps,f=Xe.current,x=!1,v=(r.flags&128)!==0,P;if((P=v)||(P=t!==null&&t.memoizedState===null?!1:(f&2)!==0),P?(x=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ke(Xe,f&1),t===null)return du(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(v=c.children,t=c.fallback,x?(c=r.mode,x=r.child,v={mode:"hidden",children:v},!(c&1)&&x!==null?(x.childLanes=0,x.pendingProps=v):x=Ml(v,c,0,null),t=to(t,c,s,null),x.return=r,t.return=r,x.sibling=t,r.child=x,r.child.memoizedState=zu(s),r.memoizedState=Ou,t):_u(r,v));if(f=t.memoizedState,f!==null&&(P=f.dehydrated,P!==null))return Mb(t,r,v,c,P,f,s);if(x){x=c.fallback,v=r.mode,f=t.child,P=f.sibling;var O={mode:"hidden",children:c.children};return!(v&1)&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=O,r.deletions=null):(c=$r(f,O),c.subtreeFlags=f.subtreeFlags&14680064),P!==null?x=$r(P,x):(x=to(x,v,s,null),x.flags|=2),x.return=r,c.return=r,c.sibling=x,r.child=c,c=x,x=r.child,v=t.child.memoizedState,v=v===null?zu(s):{baseLanes:v.baseLanes|s,cachePool:null,transitions:v.transitions},x.memoizedState=v,x.childLanes=t.childLanes&~s,r.memoizedState=Ou,c}return x=t.child,t=x.sibling,c=$r(x,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=s),c.return=r,c.sibling=null,t!==null&&(s=r.deletions,s===null?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=c,r.memoizedState=null,c}function _u(t,r){return r=Ml({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function kl(t,r,s,c){return c!==null&&fu(c),Mo(r,t.child,null,s),t=_u(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Mb(t,r,s,c,f,x,v){if(s)return r.flags&256?(r.flags&=-257,c=Pu(Error(o(422))),kl(t,r,v,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(x=c.fallback,f=r.mode,c=Ml({mode:"visible",children:c.children},f,0,null),x=to(x,f,v,null),x.flags|=2,c.return=r,x.return=r,c.sibling=x,r.child=c,r.mode&1&&Mo(r,t.child,null,v),r.child.memoizedState=zu(v),r.memoizedState=Ou,x);if(!(r.mode&1))return kl(t,r,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var P=c.dgst;return c=P,x=Error(o(419)),c=Pu(x,c,void 0),kl(t,r,v,c)}if(P=(v&t.childLanes)!==0,zt||P){if(c=pt,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|v)?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,er(t,f),Sn(c,t,f,-1))}return td(),c=Pu(Error(o(421))),kl(t,r,v,c)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=qb.bind(null,t),f._reactRetry=r,null):(t=x.treeContext,Gt=gr(f.nextSibling),qt=r,Ye=!0,wn=null,t!==null&&(an[cn++]=Jn,an[cn++]=Zn,an[cn++]=Kr,Jn=t.id,Zn=t.overflow,Kr=r),r=_u(r,c.children),r.flags|=4096,r)}function p0(t,r,s){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),gu(t.return,r,s)}function Fu(t,r,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=f)}function h0(t,r,s){var c=r.pendingProps,f=c.revealOrder,x=c.tail;if(Nt(t,r,c.children,s),c=Xe.current,c&2)c=c&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p0(t,s,r);else if(t.tag===19)p0(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ke(Xe,c),!(r.mode&1))r.memoizedState=null;else switch(f){case"forwards":for(s=r.child,f=null;s!==null;)t=s.alternate,t!==null&&ml(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),Fu(r,!1,f,s,x);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&ml(t)===null){r.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Fu(r,!0,s,null,x);break;case"together":Fu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Sl(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function nr(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),Xr|=r.lanes,!(s&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,s=$r(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=$r(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function Lb(t,r,s){switch(r.tag){case 3:u0(r),No();break;case 5:Tm(r);break;case 1:Ot(r.type)&&il(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Ke(dl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ke(Xe,Xe.current&1),r.flags|=128,null):s&r.child.childLanes?f0(t,r,s):(Ke(Xe,Xe.current&1),t=nr(t,r,s),t!==null?t.sibling:null);Ke(Xe,Xe.current&1);break;case 19:if(c=(s&r.childLanes)!==0,t.flags&128){if(c)return h0(t,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,l0(t,r,s)}return nr(t,r,s)}var m0,Bu,g0,x0;m0=function(t,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Bu=function(){},g0=function(t,r,s,c){var f=t.memoizedProps;if(f!==c){t=r.stateNode,Gr(Ln.current);var x=null;switch(s){case"input":f=je(t,f),c=je(t,c),x=[];break;case"select":f=N({},f,{value:void 0}),c=N({},c,{value:void 0}),x=[];break;case"textarea":f=Gn(t,f),c=Gn(t,c),x=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=nl)}bc(s,c);var v;s=null;for(G in f)if(!c.hasOwnProperty(G)&&f.hasOwnProperty(G)&&f[G]!=null)if(G==="style"){var P=f[G];for(v in P)P.hasOwnProperty(v)&&(s||(s={}),s[v]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(a.hasOwnProperty(G)?x||(x=[]):(x=x||[]).push(G,null));for(G in c){var O=c[G];if(P=f!=null?f[G]:void 0,c.hasOwnProperty(G)&&O!==P&&(O!=null||P!=null))if(G==="style")if(P){for(v in P)!P.hasOwnProperty(v)||O&&O.hasOwnProperty(v)||(s||(s={}),s[v]="");for(v in O)O.hasOwnProperty(v)&&P[v]!==O[v]&&(s||(s={}),s[v]=O[v])}else s||(x||(x=[]),x.push(G,s)),s=O;else G==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,P=P?P.__html:void 0,O!=null&&P!==O&&(x=x||[]).push(G,O)):G==="children"?typeof O!="string"&&typeof O!="number"||(x=x||[]).push(G,""+O):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(a.hasOwnProperty(G)?(O!=null&&G==="onScroll"&&Qe("scroll",t),x||P===O||(x=[])):(x=x||[]).push(G,O))}s&&(x=x||[]).push("style",s);var G=x;(r.updateQueue=G)&&(r.flags|=4)}},x0=function(t,r,s,c){s!==c&&(r.flags|=4)};function qi(t,r){if(!Ye)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function At(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(r)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=s,r}function Ob(t,r,s){var c=r.pendingProps;switch(cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(r),null;case 1:return Ot(r.type)&&ol(),At(r),null;case 3:return c=r.stateNode,zo(),qe(Lt),qe($t),ku(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(cl(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,wn!==null&&(Ju(wn),wn=null))),Bu(t,r),At(r),null;case 5:vu(r);var f=Gr(Hi.current);if(s=r.type,t!==null&&r.stateNode!=null)g0(t,r,s,c,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return At(r),null}if(t=Gr(Ln.current),cl(r)){c=r.stateNode,s=r.type;var x=r.memoizedProps;switch(c[Mn]=r,c[zi]=x,t=(r.mode&1)!==0,s){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(f=0;f<Mi.length;f++)Qe(Mi[f],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":Re(c,x),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},Qe("invalid",c);break;case"textarea":mi(c,x),Qe("invalid",c)}bc(s,x),f=null;for(var v in x)if(x.hasOwnProperty(v)){var P=x[v];v==="children"?typeof P=="string"?c.textContent!==P&&(x.suppressHydrationWarning!==!0&&tl(c.textContent,P,t),f=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(x.suppressHydrationWarning!==!0&&tl(c.textContent,P,t),f=["children",""+P]):a.hasOwnProperty(v)&&P!=null&&v==="onScroll"&&Qe("scroll",c)}switch(s){case"input":te(c),In(c,x,!0);break;case"textarea":te(c),nh(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=nl)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rh(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=v.createElement(s,{is:c.is}):(t=v.createElement(s),s==="select"&&(v=t,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):t=v.createElementNS(t,s),t[Mn]=r,t[zi]=c,m0(t,r,!1,!1),r.stateNode=t;e:{switch(v=kc(s,c),s){case"dialog":Qe("cancel",t),Qe("close",t),f=c;break;case"iframe":case"object":case"embed":Qe("load",t),f=c;break;case"video":case"audio":for(f=0;f<Mi.length;f++)Qe(Mi[f],t);f=c;break;case"source":Qe("error",t),f=c;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),f=c;break;case"details":Qe("toggle",t),f=c;break;case"input":Re(t,c),f=je(t,c),Qe("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=N({},c,{value:void 0}),Qe("invalid",t);break;case"textarea":mi(t,c),f=Gn(t,c),Qe("invalid",t);break;default:f=c}bc(s,f),P=f;for(x in P)if(P.hasOwnProperty(x)){var O=P[x];x==="style"?sh(t,O):x==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&oh(t,O)):x==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&gi(t,O):typeof O=="number"&&gi(t,""+O):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?O!=null&&x==="onScroll"&&Qe("scroll",t):O!=null&&S(t,x,O,v))}switch(s){case"input":te(t),In(t,c,!1);break;case"textarea":te(t),nh(t);break;case"option":c.value!=null&&t.setAttribute("value",""+q(c.value));break;case"select":t.multiple=!!c.multiple,x=c.value,x!=null?Pn(t,!!c.multiple,x,!1):c.defaultValue!=null&&Pn(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=nl)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return At(r),null;case 6:if(t&&r.stateNode!=null)x0(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(s=Gr(Hi.current),Gr(Ln.current),cl(r)){if(c=r.stateNode,s=r.memoizedProps,c[Mn]=r,(x=c.nodeValue!==s)&&(t=qt,t!==null))switch(t.tag){case 3:tl(c.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&tl(c.nodeValue,s,(t.mode&1)!==0)}x&&(r.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[Mn]=r,r.stateNode=c}return At(r),null;case 13:if(qe(Xe),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ye&&Gt!==null&&r.mode&1&&!(r.flags&128))vm(),No(),r.flags|=98560,x=!1;else if(x=cl(r),c!==null&&c.dehydrated!==null){if(t===null){if(!x)throw Error(o(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(o(317));x[Mn]=r}else No(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;At(r),x=!1}else wn!==null&&(Ju(wn),wn=null),x=!0;if(!x)return r.flags&65536?r:null}return r.flags&128?(r.lanes=s,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(t===null||Xe.current&1?ut===0&&(ut=3):td())),r.updateQueue!==null&&(r.flags|=4),At(r),null);case 4:return zo(),Bu(t,r),t===null&&Li(r.stateNode.containerInfo),At(r),null;case 10:return mu(r.type._context),At(r),null;case 17:return Ot(r.type)&&ol(),At(r),null;case 19:if(qe(Xe),x=r.memoizedState,x===null)return At(r),null;if(c=(r.flags&128)!==0,v=x.rendering,v===null)if(c)qi(x,!1);else{if(ut!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(v=ml(t),v!==null){for(r.flags|=128,qi(x,!1),c=v.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=s,s=r.child;s!==null;)x=s,t=c,x.flags&=14680066,v=x.alternate,v===null?(x.childLanes=0,x.lanes=t,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=v.childLanes,x.lanes=v.lanes,x.child=v.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=v.memoizedProps,x.memoizedState=v.memoizedState,x.updateQueue=v.updateQueue,x.type=v.type,t=v.dependencies,x.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ke(Xe,Xe.current&1|2),r.child}t=t.sibling}x.tail!==null&&rt()>Wo&&(r.flags|=128,c=!0,qi(x,!1),r.lanes=4194304)}else{if(!c)if(t=ml(v),t!==null){if(r.flags|=128,c=!0,s=t.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),qi(x,!0),x.tail===null&&x.tailMode==="hidden"&&!v.alternate&&!Ye)return At(r),null}else 2*rt()-x.renderingStartTime>Wo&&s!==1073741824&&(r.flags|=128,c=!0,qi(x,!1),r.lanes=4194304);x.isBackwards?(v.sibling=r.child,r.child=v):(s=x.last,s!==null?s.sibling=v:r.child=v,x.last=v)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=rt(),r.sibling=null,s=Xe.current,Ke(Xe,c?s&1|2:s&1),r):(At(r),null);case 22:case 23:return ed(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?Yt&1073741824&&(At(r),r.subtreeFlags&6&&(r.flags|=8192)):At(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function zb(t,r){switch(cu(r),r.tag){case 1:return Ot(r.type)&&ol(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return zo(),qe(Lt),qe($t),ku(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return vu(r),null;case 13:if(qe(Xe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));No()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return qe(Xe),null;case 4:return zo(),null;case 10:return mu(r.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var jl=!1,Rt=!1,_b=typeof WeakSet=="function"?WeakSet:Set,ve=null;function Fo(t,r){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){et(t,r,c)}else s.current=null}function Wu(t,r,s){try{s()}catch(c){et(t,r,c)}}var y0=!1;function Fb(t,r){if(eu=Us,t=Yh(),Kc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var v=0,P=-1,O=-1,G=0,oe=0,se=t,re=null;t:for(;;){for(var we;se!==s||f!==0&&se.nodeType!==3||(P=v+f),se!==x||c!==0&&se.nodeType!==3||(O=v+c),se.nodeType===3&&(v+=se.nodeValue.length),(we=se.firstChild)!==null;)re=se,se=we;for(;;){if(se===t)break t;if(re===s&&++G===f&&(P=v),re===x&&++oe===c&&(O=v),(we=se.nextSibling)!==null)break;se=re,re=se.parentNode}se=we}s=P===-1||O===-1?null:{start:P,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(tu={focusedElem:t,selectionRange:s},Us=!1,ve=r;ve!==null;)if(r=ve,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ve=t;else for(;ve!==null;){r=ve;try{var be=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var ke=be.memoizedProps,ot=be.memoizedState,U=r.stateNode,F=U.getSnapshotBeforeUpdate(r.elementType===r.type?ke:vn(r.type,ke),ot);U.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(de){et(r,r.return,de)}if(t=r.sibling,t!==null){t.return=r.return,ve=t;break}ve=r.return}return be=y0,y0=!1,be}function Gi(t,r,s){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var x=f.destroy;f.destroy=void 0,x!==void 0&&Wu(r,s,x)}f=f.next}while(f!==c)}}function Cl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var c=s.create;s.destroy=c()}s=s.next}while(s!==r)}}function Hu(t){var r=t.ref;if(r!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof r=="function"?r(t):r.current=t}}function w0(t){var r=t.alternate;r!==null&&(t.alternate=null,w0(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Mn],delete r[zi],delete r[iu],delete r[kb],delete r[Sb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function v0(t){return t.tag===5||t.tag===3||t.tag===4}function b0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uu(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(t,r):s.insertBefore(t,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(t,s)):(r=s,r.appendChild(t)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=nl));else if(c!==4&&(t=t.child,t!==null))for(Uu(t,r,s),t=t.sibling;t!==null;)Uu(t,r,s),t=t.sibling}function Vu(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Vu(t,r,s),t=t.sibling;t!==null;)Vu(t,r,s),t=t.sibling}var bt=null,bn=!1;function kr(t,r,s){for(s=s.child;s!==null;)k0(t,r,s),s=s.sibling}function k0(t,r,s){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(zs,s)}catch{}switch(s.tag){case 5:Rt||Fo(s,r);case 6:var c=bt,f=bn;bt=null,kr(t,r,s),bt=c,bn=f,bt!==null&&(bn?(t=bt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):bt.removeChild(s.stateNode));break;case 18:bt!==null&&(bn?(t=bt,s=s.stateNode,t.nodeType===8?ou(t.parentNode,s):t.nodeType===1&&ou(t,s),$i(t)):ou(bt,s.stateNode));break;case 4:c=bt,f=bn,bt=s.stateNode.containerInfo,bn=!0,kr(t,r,s),bt=c,bn=f;break;case 0:case 11:case 14:case 15:if(!Rt&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var x=f,v=x.destroy;x=x.tag,v!==void 0&&(x&2||x&4)&&Wu(s,r,v),f=f.next}while(f!==c)}kr(t,r,s);break;case 1:if(!Rt&&(Fo(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(P){et(s,r,P)}kr(t,r,s);break;case 21:kr(t,r,s);break;case 22:s.mode&1?(Rt=(c=Rt)||s.memoizedState!==null,kr(t,r,s),Rt=c):kr(t,r,s);break;default:kr(t,r,s)}}function S0(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new _b),r.forEach(function(c){var f=Gb.bind(null,t,c);s.has(c)||(s.add(c),c.then(f,f))})}}function kn(t,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c];try{var x=t,v=r,P=v;e:for(;P!==null;){switch(P.tag){case 5:bt=P.stateNode,bn=!1;break e;case 3:bt=P.stateNode.containerInfo,bn=!0;break e;case 4:bt=P.stateNode.containerInfo,bn=!0;break e}P=P.return}if(bt===null)throw Error(o(160));k0(x,v,f),bt=null,bn=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(G){et(f,r,G)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)j0(r,t),r=r.sibling}function j0(t,r){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(r,t),zn(t),c&4){try{Gi(3,t,t.return),Cl(3,t)}catch(ke){et(t,t.return,ke)}try{Gi(5,t,t.return)}catch(ke){et(t,t.return,ke)}}break;case 1:kn(r,t),zn(t),c&512&&s!==null&&Fo(s,s.return);break;case 5:if(kn(r,t),zn(t),c&512&&s!==null&&Fo(s,s.return),t.flags&32){var f=t.stateNode;try{gi(f,"")}catch(ke){et(t,t.return,ke)}}if(c&4&&(f=t.stateNode,f!=null)){var x=t.memoizedProps,v=s!==null?s.memoizedProps:x,P=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{P==="input"&&x.type==="radio"&&x.name!=null&&ze(f,x),kc(P,v);var G=kc(P,x);for(v=0;v<O.length;v+=2){var oe=O[v],se=O[v+1];oe==="style"?sh(f,se):oe==="dangerouslySetInnerHTML"?oh(f,se):oe==="children"?gi(f,se):S(f,oe,se,G)}switch(P){case"input":st(f,x);break;case"textarea":wc(f,x);break;case"select":var re=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var we=x.value;we!=null?Pn(f,!!x.multiple,we,!1):re!==!!x.multiple&&(x.defaultValue!=null?Pn(f,!!x.multiple,x.defaultValue,!0):Pn(f,!!x.multiple,x.multiple?[]:"",!1))}f[zi]=x}catch(ke){et(t,t.return,ke)}}break;case 6:if(kn(r,t),zn(t),c&4){if(t.stateNode===null)throw Error(o(162));f=t.stateNode,x=t.memoizedProps;try{f.nodeValue=x}catch(ke){et(t,t.return,ke)}}break;case 3:if(kn(r,t),zn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{$i(r.containerInfo)}catch(ke){et(t,t.return,ke)}break;case 4:kn(r,t),zn(t);break;case 13:kn(r,t),zn(t),f=t.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(qu=rt())),c&4&&S0(t);break;case 22:if(oe=s!==null&&s.memoizedState!==null,t.mode&1?(Rt=(G=Rt)||oe,kn(r,t),Rt=G):kn(r,t),zn(t),c&8192){if(G=t.memoizedState!==null,(t.stateNode.isHidden=G)&&!oe&&t.mode&1)for(ve=t,oe=t.child;oe!==null;){for(se=ve=oe;ve!==null;){switch(re=ve,we=re.child,re.tag){case 0:case 11:case 14:case 15:Gi(4,re,re.return);break;case 1:Fo(re,re.return);var be=re.stateNode;if(typeof be.componentWillUnmount=="function"){c=re,s=re.return;try{r=c,be.props=r.memoizedProps,be.state=r.memoizedState,be.componentWillUnmount()}catch(ke){et(c,s,ke)}}break;case 5:Fo(re,re.return);break;case 22:if(re.memoizedState!==null){$0(se);continue}}we!==null?(we.return=re,ve=we):$0(se)}oe=oe.sibling}e:for(oe=null,se=t;;){if(se.tag===5){if(oe===null){oe=se;try{f=se.stateNode,G?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(P=se.stateNode,O=se.memoizedProps.style,v=O!=null&&O.hasOwnProperty("display")?O.display:null,P.style.display=ih("display",v))}catch(ke){et(t,t.return,ke)}}}else if(se.tag===6){if(oe===null)try{se.stateNode.nodeValue=G?"":se.memoizedProps}catch(ke){et(t,t.return,ke)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===t)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===t)break e;for(;se.sibling===null;){if(se.return===null||se.return===t)break e;oe===se&&(oe=null),se=se.return}oe===se&&(oe=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:kn(r,t),zn(t),c&4&&S0(t);break;case 21:break;default:kn(r,t),zn(t)}}function zn(t){var r=t.flags;if(r&2){try{e:{for(var s=t.return;s!==null;){if(v0(s)){var c=s;break e}s=s.return}throw Error(o(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(gi(f,""),c.flags&=-33);var x=b0(t);Vu(t,x,f);break;case 3:case 4:var v=c.stateNode.containerInfo,P=b0(t);Uu(t,P,v);break;default:throw Error(o(161))}}catch(O){et(t,t.return,O)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Bb(t,r,s){ve=t,C0(t)}function C0(t,r,s){for(var c=(t.mode&1)!==0;ve!==null;){var f=ve,x=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||jl;if(!v){var P=f.alternate,O=P!==null&&P.memoizedState!==null||Rt;P=jl;var G=Rt;if(jl=v,(Rt=O)&&!G)for(ve=f;ve!==null;)v=ve,O=v.child,v.tag===22&&v.memoizedState!==null?T0(f):O!==null?(O.return=v,ve=O):T0(f);for(;x!==null;)ve=x,C0(x),x=x.sibling;ve=f,jl=P,Rt=G}E0(t)}else f.subtreeFlags&8772&&x!==null?(x.return=f,ve=x):E0(t)}}function E0(t){for(;ve!==null;){var r=ve;if(r.flags&8772){var s=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Rt||Cl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Rt)if(s===null)c.componentDidMount();else{var f=r.elementType===r.type?s.memoizedProps:vn(r.type,s.memoizedProps);c.componentDidUpdate(f,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&$m(r,x,c);break;case 3:var v=r.updateQueue;if(v!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}$m(r,v,s)}break;case 5:var P=r.stateNode;if(s===null&&r.flags&4){s=P;var O=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var G=r.alternate;if(G!==null){var oe=G.memoizedState;if(oe!==null){var se=oe.dehydrated;se!==null&&$i(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Rt||r.flags&512&&Hu(r)}catch(re){et(r,r.return,re)}}if(r===t){ve=null;break}if(s=r.sibling,s!==null){s.return=r.return,ve=s;break}ve=r.return}}function $0(t){for(;ve!==null;){var r=ve;if(r===t){ve=null;break}var s=r.sibling;if(s!==null){s.return=r.return,ve=s;break}ve=r.return}}function T0(t){for(;ve!==null;){var r=ve;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{Cl(4,r)}catch(O){et(r,s,O)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(O){et(r,f,O)}}var x=r.return;try{Hu(r)}catch(O){et(r,x,O)}break;case 5:var v=r.return;try{Hu(r)}catch(O){et(r,v,O)}}}catch(O){et(r,r.return,O)}if(r===t){ve=null;break}var P=r.sibling;if(P!==null){P.return=r.return,ve=P;break}ve=r.return}}var Wb=Math.ceil,El=R.ReactCurrentDispatcher,Ku=R.ReactCurrentOwner,fn=R.ReactCurrentBatchConfig,Me=0,pt=null,lt=null,kt=0,Yt=0,Bo=xr(0),ut=0,Yi=null,Xr=0,$l=0,Qu=0,Xi=null,_t=null,qu=0,Wo=1/0,rr=null,Tl=!1,Gu=null,Sr=null,Al=!1,jr=null,Rl=0,Ji=0,Yu=null,Dl=-1,Il=0;function Mt(){return Me&6?rt():Dl!==-1?Dl:Dl=rt()}function Cr(t){return t.mode&1?Me&2&&kt!==0?kt&-kt:Cb.transition!==null?(Il===0&&(Il=bh()),Il):(t=Be,t!==0||(t=window.event,t=t===void 0?16:Rh(t.type)),t):1}function Sn(t,r,s,c){if(50<Ji)throw Ji=0,Yu=null,Error(o(185));ki(t,s,c),(!(Me&2)||t!==pt)&&(t===pt&&(!(Me&2)&&($l|=s),ut===4&&Er(t,kt)),Ft(t,c),s===1&&Me===0&&!(r.mode&1)&&(Wo=rt()+500,sl&&wr()))}function Ft(t,r){var s=t.callbackNode;C1(t,r);var c=Bs(t,t===pt?kt:0);if(c===0)s!==null&&yh(s),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(s!=null&&yh(s),r===1)t.tag===0?jb(R0.bind(null,t)):mm(R0.bind(null,t)),vb(function(){!(Me&6)&&wr()}),s=null;else{switch(kh(c)){case 1:s=Ac;break;case 4:s=wh;break;case 16:s=Os;break;case 536870912:s=vh;break;default:s=Os}s=z0(s,A0.bind(null,t))}t.callbackPriority=r,t.callbackNode=s}}function A0(t,r){if(Dl=-1,Il=0,Me&6)throw Error(o(327));var s=t.callbackNode;if(Ho()&&t.callbackNode!==s)return null;var c=Bs(t,t===pt?kt:0);if(c===0)return null;if(c&30||c&t.expiredLanes||r)r=Pl(t,c);else{r=c;var f=Me;Me|=2;var x=I0();(pt!==t||kt!==r)&&(rr=null,Wo=rt()+500,Zr(t,r));do try{Vb();break}catch(P){D0(t,P)}while(!0);hu(),El.current=x,Me=f,lt!==null?r=0:(pt=null,kt=0,r=ut)}if(r!==0){if(r===2&&(f=Rc(t),f!==0&&(c=f,r=Xu(t,f))),r===1)throw s=Yi,Zr(t,0),Er(t,c),Ft(t,rt()),s;if(r===6)Er(t,c);else{if(f=t.current.alternate,!(c&30)&&!Hb(f)&&(r=Pl(t,c),r===2&&(x=Rc(t),x!==0&&(c=x,r=Xu(t,x))),r===1))throw s=Yi,Zr(t,0),Er(t,c),Ft(t,rt()),s;switch(t.finishedWork=f,t.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:eo(t,_t,rr);break;case 3:if(Er(t,c),(c&130023424)===c&&(r=qu+500-rt(),10<r)){if(Bs(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Mt(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=ru(eo.bind(null,t,_t,rr),r);break}eo(t,_t,rr);break;case 4:if(Er(t,c),(c&4194240)===c)break;for(r=t.eventTimes,f=-1;0<c;){var v=31-xn(c);x=1<<v,v=r[v],v>f&&(f=v),c&=~x}if(c=f,c=rt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Wb(c/1960))-c,10<c){t.timeoutHandle=ru(eo.bind(null,t,_t,rr),c);break}eo(t,_t,rr);break;case 5:eo(t,_t,rr);break;default:throw Error(o(329))}}}return Ft(t,rt()),t.callbackNode===s?A0.bind(null,t):null}function Xu(t,r){var s=Xi;return t.current.memoizedState.isDehydrated&&(Zr(t,r).flags|=256),t=Pl(t,r),t!==2&&(r=_t,_t=s,r!==null&&Ju(r)),t}function Ju(t){_t===null?_t=t:_t.push.apply(_t,t)}function Hb(t){for(var r=t;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var f=s[c],x=f.getSnapshot;f=f.value;try{if(!yn(x(),f))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(t,r){for(r&=~Qu,r&=~$l,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var s=31-xn(r),c=1<<s;t[s]=-1,r&=~c}}function R0(t){if(Me&6)throw Error(o(327));Ho();var r=Bs(t,0);if(!(r&1))return Ft(t,rt()),null;var s=Pl(t,r);if(t.tag!==0&&s===2){var c=Rc(t);c!==0&&(r=c,s=Xu(t,c))}if(s===1)throw s=Yi,Zr(t,0),Er(t,r),Ft(t,rt()),s;if(s===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,eo(t,_t,rr),Ft(t,rt()),null}function Zu(t,r){var s=Me;Me|=1;try{return t(r)}finally{Me=s,Me===0&&(Wo=rt()+500,sl&&wr())}}function Jr(t){jr!==null&&jr.tag===0&&!(Me&6)&&Ho();var r=Me;Me|=1;var s=fn.transition,c=Be;try{if(fn.transition=null,Be=1,t)return t()}finally{Be=c,fn.transition=s,Me=r,!(Me&6)&&wr()}}function ed(){Yt=Bo.current,qe(Bo)}function Zr(t,r){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,wb(s)),lt!==null)for(s=lt.return;s!==null;){var c=s;switch(cu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ol();break;case 3:zo(),qe(Lt),qe($t),ku();break;case 5:vu(c);break;case 4:zo();break;case 13:qe(Xe);break;case 19:qe(Xe);break;case 10:mu(c.type._context);break;case 22:case 23:ed()}s=s.return}if(pt=t,lt=t=$r(t.current,null),kt=Yt=r,ut=0,Yi=null,Qu=$l=Xr=0,_t=Xi=null,qr!==null){for(r=0;r<qr.length;r++)if(s=qr[r],c=s.interleaved,c!==null){s.interleaved=null;var f=c.next,x=s.pending;if(x!==null){var v=x.next;x.next=f,c.next=v}s.pending=c}qr=null}return t}function D0(t,r){do{var s=lt;try{if(hu(),gl.current=vl,xl){for(var c=Je.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}xl=!1}if(Yr=0,ft=ct=Je=null,Ui=!1,Vi=0,Ku.current=null,s===null||s.return===null){ut=1,Yi=r,lt=null;break}e:{var x=t,v=s.return,P=s,O=r;if(r=kt,P.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var G=O,oe=P,se=oe.tag;if(!(oe.mode&1)&&(se===0||se===11||se===15)){var re=oe.alternate;re?(oe.updateQueue=re.updateQueue,oe.memoizedState=re.memoizedState,oe.lanes=re.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var we=n0(v);if(we!==null){we.flags&=-257,r0(we,v,P,x,r),we.mode&1&&t0(x,G,r),r=we,O=G;var be=r.updateQueue;if(be===null){var ke=new Set;ke.add(O),r.updateQueue=ke}else be.add(O);break e}else{if(!(r&1)){t0(x,G,r),td();break e}O=Error(o(426))}}else if(Ye&&P.mode&1){var ot=n0(v);if(ot!==null){!(ot.flags&65536)&&(ot.flags|=256),r0(ot,v,P,x,r),fu(_o(O,P));break e}}x=O=_o(O,P),ut!==4&&(ut=2),Xi===null?Xi=[x]:Xi.push(x),x=v;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var U=Zm(x,O,r);Em(x,U);break e;case 1:P=O;var F=x.type,Q=x.stateNode;if(!(x.flags&128)&&(typeof F.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(Sr===null||!Sr.has(Q)))){x.flags|=65536,r&=-r,x.lanes|=r;var de=e0(x,P,r);Em(x,de);break e}}x=x.return}while(x!==null)}N0(s)}catch(Se){r=Se,lt===s&&s!==null&&(lt=s=s.return);continue}break}while(!0)}function I0(){var t=El.current;return El.current=vl,t===null?vl:t}function td(){(ut===0||ut===3||ut===2)&&(ut=4),pt===null||!(Xr&268435455)&&!($l&268435455)||Er(pt,kt)}function Pl(t,r){var s=Me;Me|=2;var c=I0();(pt!==t||kt!==r)&&(rr=null,Zr(t,r));do try{Ub();break}catch(f){D0(t,f)}while(!0);if(hu(),Me=s,El.current=c,lt!==null)throw Error(o(261));return pt=null,kt=0,ut}function Ub(){for(;lt!==null;)P0(lt)}function Vb(){for(;lt!==null&&!g1();)P0(lt)}function P0(t){var r=O0(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,r===null?N0(t):lt=r,Ku.current=null}function N0(t){var r=t;do{var s=r.alternate;if(t=r.return,r.flags&32768){if(s=zb(s,r),s!==null){s.flags&=32767,lt=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ut=6,lt=null;return}}else if(s=Ob(s,r,Yt),s!==null){lt=s;return}if(r=r.sibling,r!==null){lt=r;return}lt=r=t}while(r!==null);ut===0&&(ut=5)}function eo(t,r,s){var c=Be,f=fn.transition;try{fn.transition=null,Be=1,Kb(t,r,s,c)}finally{fn.transition=f,Be=c}return null}function Kb(t,r,s,c){do Ho();while(jr!==null);if(Me&6)throw Error(o(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var x=s.lanes|s.childLanes;if(E1(t,x),t===pt&&(lt=pt=null,kt=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Al||(Al=!0,z0(Os,function(){return Ho(),null})),x=(s.flags&15990)!==0,s.subtreeFlags&15990||x){x=fn.transition,fn.transition=null;var v=Be;Be=1;var P=Me;Me|=4,Ku.current=null,Fb(t,s),j0(s,t),fb(tu),Us=!!eu,tu=eu=null,t.current=s,Bb(s),x1(),Me=P,Be=v,fn.transition=x}else t.current=s;if(Al&&(Al=!1,jr=t,Rl=f),x=t.pendingLanes,x===0&&(Sr=null),v1(s.stateNode),Ft(t,rt()),r!==null)for(c=t.onRecoverableError,s=0;s<r.length;s++)f=r[s],c(f.value,{componentStack:f.stack,digest:f.digest});if(Tl)throw Tl=!1,t=Gu,Gu=null,t;return Rl&1&&t.tag!==0&&Ho(),x=t.pendingLanes,x&1?t===Yu?Ji++:(Ji=0,Yu=t):Ji=0,wr(),null}function Ho(){if(jr!==null){var t=kh(Rl),r=fn.transition,s=Be;try{if(fn.transition=null,Be=16>t?16:t,jr===null)var c=!1;else{if(t=jr,jr=null,Rl=0,Me&6)throw Error(o(331));var f=Me;for(Me|=4,ve=t.current;ve!==null;){var x=ve,v=x.child;if(ve.flags&16){var P=x.deletions;if(P!==null){for(var O=0;O<P.length;O++){var G=P[O];for(ve=G;ve!==null;){var oe=ve;switch(oe.tag){case 0:case 11:case 15:Gi(8,oe,x)}var se=oe.child;if(se!==null)se.return=oe,ve=se;else for(;ve!==null;){oe=ve;var re=oe.sibling,we=oe.return;if(w0(oe),oe===G){ve=null;break}if(re!==null){re.return=we,ve=re;break}ve=we}}}var be=x.alternate;if(be!==null){var ke=be.child;if(ke!==null){be.child=null;do{var ot=ke.sibling;ke.sibling=null,ke=ot}while(ke!==null)}}ve=x}}if(x.subtreeFlags&2064&&v!==null)v.return=x,ve=v;else e:for(;ve!==null;){if(x=ve,x.flags&2048)switch(x.tag){case 0:case 11:case 15:Gi(9,x,x.return)}var U=x.sibling;if(U!==null){U.return=x.return,ve=U;break e}ve=x.return}}var F=t.current;for(ve=F;ve!==null;){v=ve;var Q=v.child;if(v.subtreeFlags&2064&&Q!==null)Q.return=v,ve=Q;else e:for(v=F;ve!==null;){if(P=ve,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:Cl(9,P)}}catch(Se){et(P,P.return,Se)}if(P===v){ve=null;break e}var de=P.sibling;if(de!==null){de.return=P.return,ve=de;break e}ve=P.return}}if(Me=f,wr(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(zs,t)}catch{}c=!0}return c}finally{Be=s,fn.transition=r}}return!1}function M0(t,r,s){r=_o(s,r),r=Zm(t,r,1),t=br(t,r,1),r=Mt(),t!==null&&(ki(t,1,r),Ft(t,r))}function et(t,r,s){if(t.tag===3)M0(t,t,s);else for(;r!==null;){if(r.tag===3){M0(r,t,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Sr===null||!Sr.has(c))){t=_o(s,t),t=e0(r,t,1),r=br(r,t,1),t=Mt(),r!==null&&(ki(r,1,t),Ft(r,t));break}}r=r.return}}function Qb(t,r,s){var c=t.pingCache;c!==null&&c.delete(r),r=Mt(),t.pingedLanes|=t.suspendedLanes&s,pt===t&&(kt&s)===s&&(ut===4||ut===3&&(kt&130023424)===kt&&500>rt()-qu?Zr(t,0):Qu|=s),Ft(t,r)}function L0(t,r){r===0&&(t.mode&1?(r=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):r=1);var s=Mt();t=er(t,r),t!==null&&(ki(t,r,s),Ft(t,s))}function qb(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),L0(t,s)}function Gb(t,r){var s=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),L0(t,s)}var O0;O0=function(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps||Lt.current)zt=!0;else{if(!(t.lanes&s)&&!(r.flags&128))return zt=!1,Lb(t,r,s);zt=!!(t.flags&131072)}else zt=!1,Ye&&r.flags&1048576&&gm(r,al,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Sl(t,r),t=r.pendingProps;var f=Do(r,$t.current);Oo(r,s),f=Cu(null,r,c,t,f,s);var x=Eu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Ot(c)?(x=!0,il(r)):x=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,yu(r),f.updater=bl,r.stateNode=f,f._reactInternals=r,Iu(r,c,t,s),r=Lu(null,r,c,!0,x,s)):(r.tag=0,Ye&&x&&au(r),Nt(null,r,f,s),r=r.child),r;case 16:c=r.elementType;e:{switch(Sl(t,r),t=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Xb(c),t=vn(c,t),f){case 0:r=Mu(null,r,c,t,s);break e;case 1:r=c0(null,r,c,t,s);break e;case 11:r=o0(null,r,c,t,s);break e;case 14:r=i0(null,r,c,vn(c.type,t),s);break e}throw Error(o(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),Mu(t,r,c,f,s);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),c0(t,r,c,f,s);case 3:e:{if(u0(r),t===null)throw Error(o(387));c=r.pendingProps,x=r.memoizedState,f=x.element,Cm(t,r),hl(r,c,null,s);var v=r.memoizedState;if(c=v.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){f=_o(Error(o(423)),r),r=d0(t,r,c,s,f);break e}else if(c!==f){f=_o(Error(o(424)),r),r=d0(t,r,c,s,f);break e}else for(Gt=gr(r.stateNode.containerInfo.firstChild),qt=r,Ye=!0,wn=null,s=Sm(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(No(),c===f){r=nr(t,r,s);break e}Nt(t,r,c,s)}r=r.child}return r;case 5:return Tm(r),t===null&&du(r),c=r.type,f=r.pendingProps,x=t!==null?t.memoizedProps:null,v=f.children,nu(c,f)?v=null:x!==null&&nu(c,x)&&(r.flags|=32),a0(t,r),Nt(t,r,v,s),r.child;case 6:return t===null&&du(r),null;case 13:return f0(t,r,s);case 4:return wu(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Mo(r,null,c,s):Nt(t,r,c,s),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),o0(t,r,c,f,s);case 7:return Nt(t,r,r.pendingProps,s),r.child;case 8:return Nt(t,r,r.pendingProps.children,s),r.child;case 12:return Nt(t,r,r.pendingProps.children,s),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,x=r.memoizedProps,v=f.value,Ke(dl,c._currentValue),c._currentValue=v,x!==null)if(yn(x.value,v)){if(x.children===f.children&&!Lt.current){r=nr(t,r,s);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var P=x.dependencies;if(P!==null){v=x.child;for(var O=P.firstContext;O!==null;){if(O.context===c){if(x.tag===1){O=tr(-1,s&-s),O.tag=2;var G=x.updateQueue;if(G!==null){G=G.shared;var oe=G.pending;oe===null?O.next=O:(O.next=oe.next,oe.next=O),G.pending=O}}x.lanes|=s,O=x.alternate,O!==null&&(O.lanes|=s),gu(x.return,s,r),P.lanes|=s;break}O=O.next}}else if(x.tag===10)v=x.type===r.type?null:x.child;else if(x.tag===18){if(v=x.return,v===null)throw Error(o(341));v.lanes|=s,P=v.alternate,P!==null&&(P.lanes|=s),gu(v,s,r),v=x.sibling}else v=x.child;if(v!==null)v.return=x;else for(v=x;v!==null;){if(v===r){v=null;break}if(x=v.sibling,x!==null){x.return=v.return,v=x;break}v=v.return}x=v}Nt(t,r,f.children,s),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Oo(r,s),f=un(f),c=c(f),r.flags|=1,Nt(t,r,c,s),r.child;case 14:return c=r.type,f=vn(c,r.pendingProps),f=vn(c.type,f),i0(t,r,c,f,s);case 15:return s0(t,r,r.type,r.pendingProps,s);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),Sl(t,r),r.tag=1,Ot(c)?(t=!0,il(r)):t=!1,Oo(r,s),Xm(r,c,f),Iu(r,c,f,s),Lu(null,r,c,!0,t,s);case 19:return h0(t,r,s);case 22:return l0(t,r,s)}throw Error(o(156,r.tag))};function z0(t,r){return xh(t,r)}function Yb(t,r,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,r,s,c){return new Yb(t,r,s,c)}function nd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xb(t){if(typeof t=="function")return nd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===he)return 11;if(t===D)return 14}return 2}function $r(t,r){var s=t.alternate;return s===null?(s=pn(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Nl(t,r,s,c,f,x){var v=2;if(c=t,typeof t=="function")nd(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case X:return to(s.children,f,x,r);case ee:v=8,f|=8;break;case ie:return t=pn(12,s,r,f|2),t.elementType=ie,t.lanes=x,t;case le:return t=pn(13,s,r,f),t.elementType=le,t.lanes=x,t;case _:return t=pn(19,s,r,f),t.elementType=_,t.lanes=x,t;case H:return Ml(s,f,x,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case me:v=10;break e;case fe:v=9;break e;case he:v=11;break e;case D:v=14;break e;case I:v=16,c=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return r=pn(v,s,r,f),r.elementType=t,r.type=c,r.lanes=x,r}function to(t,r,s,c){return t=pn(7,t,c,r),t.lanes=s,t}function Ml(t,r,s,c){return t=pn(22,t,c,r),t.elementType=H,t.lanes=s,t.stateNode={isHidden:!1},t}function rd(t,r,s){return t=pn(6,t,null,r),t.lanes=s,t}function od(t,r,s){return r=pn(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Jb(t,r,s,c,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function id(t,r,s,c,f,x,v,P,O){return t=new Jb(t,r,s,P,O),r===1?(r=1,x===!0&&(r|=8)):r=0,x=pn(3,null,null,r),t.current=x,x.stateNode=t,x.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(x),t}function Zb(t,r,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:c==null?null:""+c,children:t,containerInfo:r,implementation:s}}function _0(t){if(!t)return yr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Ot(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var s=t.type;if(Ot(s))return pm(t,s,r)}return r}function F0(t,r,s,c,f,x,v,P,O){return t=id(s,c,!0,t,f,x,v,P,O),t.context=_0(null),s=t.current,c=Mt(),f=Cr(s),x=tr(c,f),x.callback=r??null,br(s,x,f),t.current.lanes=f,ki(t,f,c),Ft(t,c),t}function Ll(t,r,s,c){var f=r.current,x=Mt(),v=Cr(f);return s=_0(s),r.context===null?r.context=s:r.pendingContext=s,r=tr(x,v),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=br(f,r,v),t!==null&&(Sn(t,f,v,x),pl(t,f,v)),v}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function B0(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function sd(t,r){B0(t,r),(t=t.alternate)&&B0(t,r)}var W0=typeof reportError=="function"?reportError:function(t){console.error(t)};function ld(t){this._internalRoot=t}zl.prototype.render=ld.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));Ll(t,r,null,null)},zl.prototype.unmount=ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Jr(function(){Ll(null,t,null,null)}),r[Yn]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var r=Ch();t={blockedOn:null,target:t,priority:r};for(var s=0;s<pr.length&&r!==0&&r<pr[s].priority;s++);pr.splice(s,0,t),s===0&&Th(t)}};function ad(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function H0(){}function ek(t,r,s,c,f){if(f){if(typeof c=="function"){var x=c;c=function(){var G=Ol(v);x.call(G)}}var v=F0(r,c,t,0,null,!1,!1,"",H0);return t._reactRootContainer=v,t[Yn]=v.current,Li(t.nodeType===8?t.parentNode:t),Jr(),v}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var P=c;c=function(){var G=Ol(O);P.call(G)}}var O=id(t,0,!1,null,null,!1,!1,"",H0);return t._reactRootContainer=O,t[Yn]=O.current,Li(t.nodeType===8?t.parentNode:t),Jr(function(){Ll(r,O,s,c)}),O}function Fl(t,r,s,c,f){var x=s._reactRootContainer;if(x){var v=x;if(typeof f=="function"){var P=f;f=function(){var O=Ol(v);P.call(O)}}Ll(r,v,t,f)}else v=ek(s,r,t,f,c);return Ol(v)}Sh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var s=bi(r.pendingLanes);s!==0&&(Ic(r,s|1),Ft(r,rt()),!(Me&6)&&(Wo=rt()+500,wr()))}break;case 13:Jr(function(){var c=er(t,1);if(c!==null){var f=Mt();Sn(c,t,1,f)}}),sd(t,1)}},Pc=function(t){if(t.tag===13){var r=er(t,134217728);if(r!==null){var s=Mt();Sn(r,t,134217728,s)}sd(t,134217728)}},jh=function(t){if(t.tag===13){var r=Cr(t),s=er(t,r);if(s!==null){var c=Mt();Sn(s,t,r,c)}sd(t,r)}},Ch=function(){return Be},Eh=function(t,r){var s=Be;try{return Be=t,r()}finally{Be=s}},Cc=function(t,r,s){switch(r){case"input":if(st(t,s),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==t&&c.form===t.form){var f=rl(c);if(!f)throw Error(o(90));ne(c),st(c,f)}}}break;case"textarea":wc(t,s);break;case"select":r=s.value,r!=null&&Pn(t,!!s.multiple,r,!1)}},uh=Zu,dh=Jr;var tk={usingClientEntryPoint:!1,Events:[_i,Ao,rl,ah,ch,Zu]},Zi={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nk={bundleType:Zi.bundleType,version:Zi.version,rendererPackageName:Zi.rendererPackageName,rendererConfig:Zi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mh(t),t===null?null:t.stateNode},findFiberByHostInstance:Zi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{zs=Bl.inject(nk),Nn=Bl}catch{}}return Bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tk,Bt.createPortal=function(t,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ad(r))throw Error(o(200));return Zb(t,r,null,s)},Bt.createRoot=function(t,r){if(!ad(t))throw Error(o(299));var s=!1,c="",f=W0;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=id(t,1,!1,null,null,s,!1,c,f),t[Yn]=r.current,Li(t.nodeType===8?t.parentNode:t),new ld(r)},Bt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=mh(r),t=t===null?null:t.stateNode,t},Bt.flushSync=function(t){return Jr(t)},Bt.hydrate=function(t,r,s){if(!_l(r))throw Error(o(200));return Fl(null,t,r,!0,s)},Bt.hydrateRoot=function(t,r,s){if(!ad(t))throw Error(o(405));var c=s!=null&&s.hydratedSources||null,f=!1,x="",v=W0;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(x=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),r=F0(r,null,t,1,s??null,f,!1,x,v),t[Yn]=r.current,Li(t),c)for(t=0;t<c.length;t++)s=c[t],f=s._getVersion,f=f(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,f]:r.mutableSourceEagerHydrationData.push(s,f);return new zl(r)},Bt.render=function(t,r,s){if(!_l(r))throw Error(o(200));return Fl(null,t,r,!1,s)},Bt.unmountComponentAtNode=function(t){if(!_l(t))throw Error(o(40));return t._reactRootContainer?(Jr(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1},Bt.unstable_batchedUpdates=Zu,Bt.unstable_renderSubtreeIntoContainer=function(t,r,s,c){if(!_l(s))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return Fl(t,r,s,!1,c)},Bt.version="18.3.1-next-f1338f8080-20240426",Bt}var X0;function ey(){if(X0)return dd.exports;X0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),dd.exports=dk(),dd.exports}var J0;function fk(){if(J0)return Wl;J0=1;var e=ey();return Wl.createRoot=e.createRoot,Wl.hydrateRoot=e.hydrateRoot,Wl}var pk=fk(),xt=function(){return xt=Object.assign||function(n){for(var o,i=1,a=arguments.length;i<a;i++){o=arguments[i];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])}return n},xt.apply(this,arguments)};function Jo(e,n,o){if(o||arguments.length===2)for(var i=0,a=n.length,u;i<a;i++)(u||!(i in n))&&(u||(u=Array.prototype.slice.call(n,0,i)),u[i]=n[i]);return e.concat(u||Array.prototype.slice.call(n))}var Ge="-ms-",ps="-moz-",_e="-webkit-",ty="comm",Ha="rule",pp="decl",hk="@import",ny="@keyframes",mk="@layer",ry=Math.abs,hp=String.fromCharCode,uf=Object.assign;function gk(e,n){return gt(e,0)^45?(((n<<2^gt(e,0))<<2^gt(e,1))<<2^gt(e,2))<<2^gt(e,3):0}function oy(e){return e.trim()}function ir(e,n){return(e=n.exec(e))?e[0]:e}function Ie(e,n,o){return e.replace(n,o)}function ra(e,n,o){return e.indexOf(n,o)}function gt(e,n){return e.charCodeAt(n)|0}function Zo(e,n,o){return e.slice(n,o)}function Fn(e){return e.length}function iy(e){return e.length}function ls(e,n){return n.push(e),e}function xk(e,n){return e.map(n).join("")}function Z0(e,n){return e.filter(function(o){return!ir(o,n)})}var Ua=1,ei=1,sy=0,hn=0,at=0,si="";function Va(e,n,o,i,a,u,d,p){return{value:e,root:n,parent:o,type:i,props:a,children:u,line:Ua,column:ei,length:d,return:"",siblings:p}}function Ar(e,n){return uf(Va("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Uo(e){for(;e.root;)e=Ar(e.root,{children:[e]});ls(e,e.siblings)}function yk(){return at}function wk(){return at=hn>0?gt(si,--hn):0,ei--,at===10&&(ei=1,Ua--),at}function Cn(){return at=hn<sy?gt(si,hn++):0,ei++,at===10&&(ei=1,Ua++),at}function ao(){return gt(si,hn)}function oa(){return hn}function Ka(e,n){return Zo(si,e,n)}function df(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vk(e){return Ua=ei=1,sy=Fn(si=e),hn=0,[]}function bk(e){return si="",e}function hd(e){return oy(Ka(hn-1,ff(e===91?e+2:e===40?e+1:e)))}function kk(e){for(;(at=ao())&&at<33;)Cn();return df(e)>2||df(at)>3?"":" "}function Sk(e,n){for(;--n&&Cn()&&!(at<48||at>102||at>57&&at<65||at>70&&at<97););return Ka(e,oa()+(n<6&&ao()==32&&Cn()==32))}function ff(e){for(;Cn();)switch(at){case e:return hn;case 34:case 39:e!==34&&e!==39&&ff(at);break;case 40:e===41&&ff(e);break;case 92:Cn();break}return hn}function jk(e,n){for(;Cn()&&e+at!==57;)if(e+at===84&&ao()===47)break;return"/*"+Ka(n,hn-1)+"*"+hp(e===47?e:Cn())}function Ck(e){for(;!df(ao());)Cn();return Ka(e,hn)}function Ek(e){return bk(ia("",null,null,null,[""],e=vk(e),0,[0],e))}function ia(e,n,o,i,a,u,d,p,h){for(var m=0,y=0,w=d,b=0,T=0,E=0,C=1,$=1,k=1,j=0,S="",R=a,M=u,K=i,X=S;$;)switch(E=j,j=Cn()){case 40:if(E!=108&&gt(X,w-1)==58){ra(X+=Ie(hd(j),"&","&\f"),"&\f",ry(m?p[m-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:X+=hd(j);break;case 9:case 10:case 13:case 32:X+=kk(E);break;case 92:X+=Sk(oa()-1,7);continue;case 47:switch(ao()){case 42:case 47:ls($k(jk(Cn(),oa()),n,o,h),h);break;default:X+="/"}break;case 123*C:p[m++]=Fn(X)*k;case 125*C:case 59:case 0:switch(j){case 0:case 125:$=0;case 59+y:k==-1&&(X=Ie(X,/\f/g,"")),T>0&&Fn(X)-w&&ls(T>32?tg(X+";",i,o,w-1,h):tg(Ie(X," ","")+";",i,o,w-2,h),h);break;case 59:X+=";";default:if(ls(K=eg(X,n,o,m,y,a,p,S,R=[],M=[],w,u),u),j===123)if(y===0)ia(X,n,K,K,R,u,w,p,M);else switch(b===99&&gt(X,3)===110?100:b){case 100:case 108:case 109:case 115:ia(e,K,K,i&&ls(eg(e,K,K,0,0,a,p,S,a,R=[],w,M),M),a,M,w,p,i?R:M);break;default:ia(X,K,K,K,[""],M,0,p,M)}}m=y=T=0,C=k=1,S=X="",w=d;break;case 58:w=1+Fn(X),T=E;default:if(C<1){if(j==123)--C;else if(j==125&&C++==0&&wk()==125)continue}switch(X+=hp(j),j*C){case 38:k=y>0?1:(X+="\f",-1);break;case 44:p[m++]=(Fn(X)-1)*k,k=1;break;case 64:ao()===45&&(X+=hd(Cn())),b=ao(),y=w=Fn(S=X+=Ck(oa())),j++;break;case 45:E===45&&Fn(X)==2&&(C=0)}}return u}function eg(e,n,o,i,a,u,d,p,h,m,y,w){for(var b=a-1,T=a===0?u:[""],E=iy(T),C=0,$=0,k=0;C<i;++C)for(var j=0,S=Zo(e,b+1,b=ry($=d[C])),R=e;j<E;++j)(R=oy($>0?T[j]+" "+S:Ie(S,/&\f/g,T[j])))&&(h[k++]=R);return Va(e,n,o,a===0?Ha:p,h,m,y,w)}function $k(e,n,o,i){return Va(e,n,o,ty,hp(yk()),Zo(e,2,-2),0,i)}function tg(e,n,o,i,a){return Va(e,n,o,pp,Zo(e,0,i),Zo(e,i+1,-1),i,a)}function ly(e,n,o){switch(gk(e,n)){case 5103:return _e+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+e+e;case 4789:return ps+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+e+ps+e+Ge+e+e;case 5936:switch(gt(e,n+11)){case 114:return _e+e+Ge+Ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return _e+e+Ge+Ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return _e+e+Ge+Ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return _e+e+Ge+e+e;case 6165:return _e+e+Ge+"flex-"+e+e;case 5187:return _e+e+Ie(e,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return _e+e+Ge+"flex-item-"+Ie(e,/flex-|-self/g,"")+(ir(e,/flex-|baseline/)?"":Ge+"grid-row-"+Ie(e,/flex-|-self/g,""))+e;case 4675:return _e+e+Ge+"flex-line-pack"+Ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return _e+e+Ge+Ie(e,"shrink","negative")+e;case 5292:return _e+e+Ge+Ie(e,"basis","preferred-size")+e;case 6060:return _e+"box-"+Ie(e,"-grow","")+_e+e+Ge+Ie(e,"grow","positive")+e;case 4554:return _e+Ie(e,/([^-])(transform)/g,"$1"+_e+"$2")+e;case 6187:return Ie(Ie(Ie(e,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),e,"")+e;case 5495:case 3959:return Ie(e,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return Ie(Ie(e,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+e+e;case 4200:if(!ir(e,/flex-|baseline/))return Ge+"grid-column-align"+Zo(e,n)+e;break;case 2592:case 3360:return Ge+Ie(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(i,a){return n=a,ir(i.props,/grid-\w+-end/)})?~ra(e+(o=o[n].value),"span",0)?e:Ge+Ie(e,"-start","")+e+Ge+"grid-row-span:"+(~ra(o,"span",0)?ir(o,/\d+/):+ir(o,/\d+/)-+ir(e,/\d+/))+";":Ge+Ie(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(i){return ir(i.props,/grid-\w+-start/)})?e:Ge+Ie(Ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ie(e,/(.+)-inline(.+)/,_e+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fn(e)-1-n>6)switch(gt(e,n+1)){case 109:if(gt(e,n+4)!==45)break;case 102:return Ie(e,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+ps+(gt(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~ra(e,"stretch",0)?ly(Ie(e,"stretch","fill-available"),n,o)+e:e}break;case 5152:case 5920:return Ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,u,d,p,h,m){return Ge+a+":"+u+m+(d?Ge+a+"-span:"+(p?h:+h-+u)+m:"")+e});case 4949:if(gt(e,n+6)===121)return Ie(e,":",":"+_e)+e;break;case 6444:switch(gt(e,gt(e,14)===45?18:11)){case 120:return Ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(gt(e,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Ge+"$2box$3")+e;case 100:return Ie(e,":",":"+Ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ie(e,"scroll-","scroll-snap-")+e}return e}function ba(e,n){for(var o="",i=0;i<e.length;i++)o+=n(e[i],i,e,n)||"";return o}function Tk(e,n,o,i){switch(e.type){case mk:if(e.children.length)break;case hk:case pp:return e.return=e.return||e.value;case ty:return"";case ny:return e.return=e.value+"{"+ba(e.children,i)+"}";case Ha:if(!Fn(e.value=e.props.join(",")))return""}return Fn(o=ba(e.children,i))?e.return=e.value+"{"+o+"}":""}function Ak(e){var n=iy(e);return function(o,i,a,u){for(var d="",p=0;p<n;p++)d+=e[p](o,i,a,u)||"";return d}}function Rk(e){return function(n){n.root||(n=n.return)&&e(n)}}function Dk(e,n,o,i){if(e.length>-1&&!e.return)switch(e.type){case pp:e.return=ly(e.value,e.length,o);return;case ny:return ba([Ar(e,{value:Ie(e.value,"@","@"+_e)})],i);case Ha:if(e.length)return xk(o=e.props,function(a){switch(ir(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Uo(Ar(e,{props:[Ie(a,/:(read-\w+)/,":"+ps+"$1")]})),Uo(Ar(e,{props:[a]})),uf(e,{props:Z0(o,i)});break;case"::placeholder":Uo(Ar(e,{props:[Ie(a,/:(plac\w+)/,":"+_e+"input-$1")]})),Uo(Ar(e,{props:[Ie(a,/:(plac\w+)/,":"+ps+"$1")]})),Uo(Ar(e,{props:[Ie(a,/:(plac\w+)/,Ge+"input-$1")]})),Uo(Ar(e,{props:[a]})),uf(e,{props:Z0(o,i)});break}return""})}}var Ik={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Zt={},ti=typeof process<"u"&&Zt!==void 0&&(Zt.REACT_APP_SC_ATTR||Zt.SC_ATTR)||"data-styled",ay="active",cy="data-styled-version",Qa="6.1.14",mp=`/*!sc*/
`,ka=typeof window<"u"&&"HTMLElement"in window,Pk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Zt.REACT_APP_SC_DISABLE_SPEEDY!==""?Zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Zt!==void 0&&Zt.SC_DISABLE_SPEEDY!==void 0&&Zt.SC_DISABLE_SPEEDY!==""&&Zt.SC_DISABLE_SPEEDY!=="false"&&Zt.SC_DISABLE_SPEEDY),Nk={},qa=Object.freeze([]),ni=Object.freeze({});function uy(e,n,o){return o===void 0&&(o=ni),e.theme!==o.theme&&e.theme||n||o.theme}var dy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Lk=/(^-|-$)/g;function ng(e){return e.replace(Mk,"-").replace(Lk,"")}var Ok=/(a)(d)/gi,Hl=52,rg=function(e){return String.fromCharCode(e+(e>25?39:97))};function pf(e){var n,o="";for(n=Math.abs(e);n>Hl;n=n/Hl|0)o=rg(n%Hl)+o;return(rg(n%Hl)+o).replace(Ok,"$1-$2")}var md,fy=5381,Go=function(e,n){for(var o=n.length;o;)e=33*e^n.charCodeAt(--o);return e},py=function(e){return Go(fy,e)};function gp(e){return pf(py(e)>>>0)}function zk(e){return e.displayName||e.name||"Component"}function gd(e){return typeof e=="string"&&!0}var hy=typeof Symbol=="function"&&Symbol.for,my=hy?Symbol.for("react.memo"):60115,_k=hy?Symbol.for("react.forward_ref"):60112,Fk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wk=((md={})[_k]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},md[my]=gy,md);function og(e){return("type"in(n=e)&&n.type.$$typeof)===my?gy:"$$typeof"in e?Wk[e.$$typeof]:Fk;var n}var Hk=Object.defineProperty,Uk=Object.getOwnPropertyNames,ig=Object.getOwnPropertySymbols,Vk=Object.getOwnPropertyDescriptor,Kk=Object.getPrototypeOf,sg=Object.prototype;function xy(e,n,o){if(typeof n!="string"){if(sg){var i=Kk(n);i&&i!==sg&&xy(e,i,o)}var a=Uk(n);ig&&(a=a.concat(ig(n)));for(var u=og(e),d=og(n),p=0;p<a.length;++p){var h=a[p];if(!(h in Bk||o&&o[h]||d&&h in d||u&&h in u)){var m=Vk(n,h);try{Hk(e,h,m)}catch{}}}}return e}function uo(e){return typeof e=="function"}function xp(e){return typeof e=="object"&&"styledComponentId"in e}function io(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function Sa(e,n){if(e.length===0)return"";for(var o=e[0],i=1;i<e.length;i++)o+=e[i];return o}function ys(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hf(e,n,o){if(o===void 0&&(o=!1),!o&&!ys(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)e[i]=hf(e[i],n[i]);else if(ys(n))for(var i in n)e[i]=hf(e[i],n[i]);return e}function yp(e,n){Object.defineProperty(e,"toString",{value:n})}function fo(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Qk=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var o=0,i=0;i<n;i++)o+=this.groupSizes[i];return o},e.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,u=a;n>=u;)if((u<<=1)<0)throw fo(16,"".concat(n));this.groupSizes=new Uint32Array(u),this.groupSizes.set(i),this.length=u;for(var d=a;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(n+1),h=(d=0,o.length);d<h;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[n]++,p++)},e.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o;this.groupSizes[n]=0;for(var u=i;u<a;u++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),u=a+i,d=a;d<u;d++)o+="".concat(this.tag.getRule(d)).concat(mp);return o},e}(),sa=new Map,ja=new Map,la=1,Ul=function(e){if(sa.has(e))return sa.get(e);for(;ja.has(la);)la++;var n=la++;return sa.set(e,n),ja.set(n,e),n},qk=function(e,n){la=n+1,sa.set(e,n),ja.set(n,e)},Gk="style[".concat(ti,"][").concat(cy,'="').concat(Qa,'"]'),Yk=new RegExp("^".concat(ti,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Xk=function(e,n,o){for(var i,a=o.split(","),u=0,d=a.length;u<d;u++)(i=a[u])&&e.registerName(n,i)},Jk=function(e,n){for(var o,i=((o=n.textContent)!==null&&o!==void 0?o:"").split(mp),a=[],u=0,d=i.length;u<d;u++){var p=i[u].trim();if(p){var h=p.match(Yk);if(h){var m=0|parseInt(h[1],10),y=h[2];m!==0&&(qk(y,m),Xk(e,y,h[3]),e.getTag().insertRules(m,a)),a.length=0}else a.push(p)}}},lg=function(e){for(var n=document.querySelectorAll(Gk),o=0,i=n.length;o<i;o++){var a=n[o];a&&a.getAttribute(ti)!==ay&&(Jk(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Zk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yy=function(e){var n=document.head,o=e||n,i=document.createElement("style"),a=function(p){var h=Array.from(p.querySelectorAll("style[".concat(ti,"]")));return h[h.length-1]}(o),u=a!==void 0?a.nextSibling:null;i.setAttribute(ti,ay),i.setAttribute(cy,Qa);var d=Zk();return d&&i.setAttribute("nonce",d),o.insertBefore(i,u),i},eS=function(){function e(n){this.element=yy(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,u=i.length;a<u;a++){var d=i[a];if(d.ownerNode===o)return d}throw fo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},e}(),tS=function(){function e(n){this.element=yy(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),nS=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ag=ka,rS={isServer:!ka,useCSSOMInjection:!Pk},Ca=function(){function e(n,o,i){n===void 0&&(n=ni),o===void 0&&(o={});var a=this;this.options=xt(xt({},rS),n),this.gs=o,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ka&&ag&&(ag=!1,lg(this)),yp(this,function(){return function(u){for(var d=u.getTag(),p=d.length,h="",m=function(w){var b=function(k){return ja.get(k)}(w);if(b===void 0)return"continue";var T=u.names.get(b),E=d.getGroup(w);if(T===void 0||!T.size||E.length===0)return"continue";var C="".concat(ti,".g").concat(w,'[id="').concat(b,'"]'),$="";T!==void 0&&T.forEach(function(k){k.length>0&&($+="".concat(k,","))}),h+="".concat(E).concat(C,'{content:"').concat($,'"}').concat(mp)},y=0;y<p;y++)m(y);return h}(a)})}return e.registerId=function(n){return Ul(n)},e.prototype.rehydrate=function(){!this.server&&ka&&lg(this)},e.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new e(xt(xt({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var i=o.useCSSOMInjection,a=o.target;return o.isServer?new nS(a):i?new eS(a):new tS(a)}(this.options),new Qk(n)));var n},e.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},e.prototype.registerName=function(n,o){if(Ul(n),this.names.has(n))this.names.get(n).add(o);else{var i=new Set;i.add(o),this.names.set(n,i)}},e.prototype.insertRules=function(n,o,i){this.registerName(n,o),this.getTag().insertRules(Ul(n),i)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Ul(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),oS=/&/g,iS=/^\s*\/\/.*$/gm;function wy(e,n){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(i){return"".concat(n," ").concat(i)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=wy(o.children,n)),o})}function sS(e){var n,o,i,a=ni,u=a.options,d=u===void 0?ni:u,p=a.plugins,h=p===void 0?qa:p,m=function(b,T,E){return E.startsWith(o)&&E.endsWith(o)&&E.replaceAll(o,"").length>0?".".concat(n):b},y=h.slice();y.push(function(b){b.type===Ha&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(oS,o).replace(i,m))}),d.prefix&&y.push(Dk),y.push(Tk);var w=function(b,T,E,C){T===void 0&&(T=""),E===void 0&&(E=""),C===void 0&&(C="&"),n=C,o=T,i=new RegExp("\\".concat(o,"\\b"),"g");var $=b.replace(iS,""),k=Ek(E||T?"".concat(E," ").concat(T," { ").concat($," }"):$);d.namespace&&(k=wy(k,d.namespace));var j=[];return ba(k,Ak(y.concat(Rk(function(S){return j.push(S)})))),j};return w.hash=h.length?h.reduce(function(b,T){return T.name||fo(15),Go(b,T.name)},fy).toString():"",w}var lS=new Ca,mf=sS(),vy=Y.createContext({shouldForwardProp:void 0,styleSheet:lS,stylis:mf});vy.Consumer;Y.createContext(void 0);function gf(){return g.useContext(vy)}var by=function(){function e(n,o){var i=this;this.inject=function(a,u){u===void 0&&(u=mf);var d=i.name+u.hash;a.hasNameForId(i.id,d)||a.insertRules(i.id,d,u(i.rules,d,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,yp(this,function(){throw fo(12,String(i.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=mf),this.name+n.hash},e}(),aS=function(e){return e>="A"&&e<="Z"};function cg(e){for(var n="",o=0;o<e.length;o++){var i=e[o];if(o===1&&i==="-"&&e[0]==="-")return e;aS(i)?n+="-"+i.toLowerCase():n+=i}return n.startsWith("ms-")?"-"+n:n}var ky=function(e){return e==null||e===!1||e===""},Sy=function(e){var n,o,i=[];for(var a in e){var u=e[a];e.hasOwnProperty(a)&&!ky(u)&&(Array.isArray(u)&&u.isCss||uo(u)?i.push("".concat(cg(a),":"),u,";"):ys(u)?i.push.apply(i,Jo(Jo(["".concat(a," {")],Sy(u),!1),["}"],!1)):i.push("".concat(cg(a),": ").concat((n=a,(o=u)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Ik||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return i};function Ir(e,n,o,i){if(ky(e))return[];if(xp(e))return[".".concat(e.styledComponentId)];if(uo(e)){if(!uo(u=e)||u.prototype&&u.prototype.isReactComponent||!n)return[e];var a=e(n);return Ir(a,n,o,i)}var u;return e instanceof by?o?(e.inject(o,i),[e.getName(i)]):[e]:ys(e)?Sy(e):Array.isArray(e)?Array.prototype.concat.apply(qa,e.map(function(d){return Ir(d,n,o,i)})):[e.toString()]}function jy(e){for(var n=0;n<e.length;n+=1){var o=e[n];if(uo(o)&&!xp(o))return!1}return!0}var cS=py(Qa),uS=function(){function e(n,o,i){this.rules=n,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&jy(n),this.componentId=o,this.baseHash=Go(cS,o),this.baseStyle=i,Ca.registerId(o)}return e.prototype.generateAndInjectStyles=function(n,o,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))a=io(a,this.staticRulesId);else{var u=Sa(Ir(this.rules,n,o,i)),d=pf(Go(this.baseHash,u)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=i(u,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}a=io(a,d),this.staticRulesId=d}else{for(var h=Go(this.baseHash,i.hash),m="",y=0;y<this.rules.length;y++){var w=this.rules[y];if(typeof w=="string")m+=w;else if(w){var b=Sa(Ir(w,n,o,i));h=Go(h,b+y),m+=b}}if(m){var T=pf(h>>>0);o.hasNameForId(this.componentId,T)||o.insertRules(this.componentId,T,i(m,".".concat(T),void 0,this.componentId)),a=io(a,T)}}return a},e}(),ws=Y.createContext(void 0);ws.Consumer;function dS(e){var n=Y.useContext(ws),o=g.useMemo(function(){return function(i,a){if(!i)throw fo(14);if(uo(i)){var u=i(a);return u}if(Array.isArray(i)||typeof i!="object")throw fo(8);return a?xt(xt({},a),i):i}(e.theme,n)},[e.theme,n]);return e.children?Y.createElement(ws.Provider,{value:o},e.children):null}var xd={};function fS(e,n,o){var i=xp(e),a=e,u=!gd(e),d=n.attrs,p=d===void 0?qa:d,h=n.componentId,m=h===void 0?function(R,M){var K=typeof R!="string"?"sc":ng(R);xd[K]=(xd[K]||0)+1;var X="".concat(K,"-").concat(gp(Qa+K+xd[K]));return M?"".concat(M,"-").concat(X):X}(n.displayName,n.parentComponentId):h,y=n.displayName,w=y===void 0?function(R){return gd(R)?"styled.".concat(R):"Styled(".concat(zk(R),")")}(e):y,b=n.displayName&&n.componentId?"".concat(ng(n.displayName),"-").concat(n.componentId):n.componentId||m,T=i&&a.attrs?a.attrs.concat(p).filter(Boolean):p,E=n.shouldForwardProp;if(i&&a.shouldForwardProp){var C=a.shouldForwardProp;if(n.shouldForwardProp){var $=n.shouldForwardProp;E=function(R,M){return C(R,M)&&$(R,M)}}else E=C}var k=new uS(o,b,i?a.componentStyle:void 0);function j(R,M){return function(K,X,ee){var ie=K.attrs,me=K.componentStyle,fe=K.defaultProps,he=K.foldedComponentIds,le=K.styledComponentId,_=K.target,D=Y.useContext(ws),I=gf(),H=K.shouldForwardProp||I.shouldForwardProp,W=uy(X,D,fe)||ni,B=function(ge,pe,xe){for(var q,A=xt(xt({},pe),{className:void 0,theme:xe}),V=0;V<ge.length;V+=1){var te=uo(q=ge[V])?q(A):q;for(var ne in te)A[ne]=ne==="className"?io(A[ne],te[ne]):ne==="style"?xt(xt({},A[ne]),te[ne]):te[ne]}return pe.className&&(A.className=io(A.className,pe.className)),A}(ie,X,W),N=B.as||_,z={};for(var J in B)B[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&B.theme===W||(J==="forwardedAs"?z.as=B.forwardedAs:H&&!H(J,N)||(z[J]=B[J]));var ae=function(ge,pe){var xe=gf(),q=ge.generateAndInjectStyles(pe,xe.styleSheet,xe.stylis);return q}(me,B),ue=io(he,le);return ae&&(ue+=" "+ae),B.className&&(ue+=" "+B.className),z[gd(N)&&!dy.has(N)?"class":"className"]=ue,ee&&(z.ref=ee),g.createElement(N,z)}(S,R,M)}j.displayName=w;var S=Y.forwardRef(j);return S.attrs=T,S.componentStyle=k,S.displayName=w,S.shouldForwardProp=E,S.foldedComponentIds=i?io(a.foldedComponentIds,a.styledComponentId):"",S.styledComponentId=b,S.target=i?a.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(R){this._foldedDefaultProps=i?function(M){for(var K=[],X=1;X<arguments.length;X++)K[X-1]=arguments[X];for(var ee=0,ie=K;ee<ie.length;ee++)hf(M,ie[ee],!0);return M}({},a.defaultProps,R):R}}),yp(S,function(){return".".concat(S.styledComponentId)}),u&&xy(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function ug(e,n){for(var o=[e[0]],i=0,a=n.length;i<a;i+=1)o.push(n[i],e[i+1]);return o}var dg=function(e){return Object.assign(e,{isCss:!0})};function ye(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(uo(e)||ys(e))return dg(Ir(ug(qa,Jo([e],n,!0))));var i=e;return n.length===0&&i.length===1&&typeof i[0]=="string"?Ir(i):dg(Ir(ug(i,n)))}function xf(e,n,o){if(o===void 0&&(o=ni),!n)throw fo(1,n);var i=function(a){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return e(n,o,ye.apply(void 0,Jo([a],u,!1)))};return i.attrs=function(a){return xf(e,n,xt(xt({},o),{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return xf(e,n,xt(xt({},o),a))},i}var Cy=function(e){return xf(fS,e)},L=Cy;dy.forEach(function(e){L[e]=Cy(e)});var pS=function(){function e(n,o){this.rules=n,this.componentId=o,this.isStatic=jy(n),Ca.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,o,i,a){var u=a(Sa(Ir(this.rules,o,i,a)),""),d=this.componentId+n;i.insertRules(d,d,u)},e.prototype.removeStyles=function(n,o){o.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,o,i,a){n>2&&Ca.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,o,i,a)},e}();function hS(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=ye.apply(void 0,Jo([e],n,!1)),a="sc-global-".concat(gp(JSON.stringify(i))),u=new pS(i,a),d=function(h){var m=gf(),y=Y.useContext(ws),w=Y.useRef(m.styleSheet.allocateGSInstance(a)).current;return m.styleSheet.server&&p(w,h,m.styleSheet,y,m.stylis),Y.useLayoutEffect(function(){if(!m.styleSheet.server)return p(w,h,m.styleSheet,y,m.stylis),function(){return u.removeStyles(w,m.styleSheet)}},[w,h,m.styleSheet,y,m.stylis]),null};function p(h,m,y,w,b){if(u.isStatic)u.renderStyles(h,Nk,y,b);else{var T=xt(xt({},m),{theme:uy(m,w,d.defaultProps)});u.renderStyles(h,T,y,b)}}return Y.memo(d)}function vt(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=Sa(ye.apply(void 0,Jo([e],n,!1))),a=gp(i);return new by(a,i)}var mS=`
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

`;const wp="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",vp="inset 2px 2px 3px rgba(0,0,0,0.2)",$n=()=>ye`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Tn=({background:e="material",color:n="materialText"}={})=>ye`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[e]};
  color: ${({theme:o})=>o[n]};
`,js=({mainColor:e="black",secondaryColor:n="transparent",pixelSize:o=2})=>ye`
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
`,po=()=>ye`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Vo={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},gS=({theme:e,topLeftInner:n,bottomRightInner:o,hasShadow:i=!1,hasInsetShadow:a=!1})=>[i?wp:!1,a?vp:!1,n!==null?`inset 1px 1px 0px 1px ${e[n]}`:!1,o!==null?`inset -1px -1px 0 1px ${e[o]}`:!1].filter(Boolean).join(", "),tt=({invert:e=!1,style:n="button"}={})=>{const o={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return ye`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:i})=>i[Vo[n][o.topLeftOuter]]};
    border-top-color: ${({theme:i})=>i[Vo[n][o.topLeftOuter]]};
    border-right-color: ${({theme:i})=>i[Vo[n][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:i})=>i[Vo[n][o.bottomRightOuter]]};
    box-shadow: ${({theme:i,shadow:a})=>gS({theme:i,topLeftInner:Vo[n][o.topLeftInner],bottomRightInner:Vo[n][o.bottomRightInner],hasShadow:a})};
  `},ri=()=>ye`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,xS=e=>Buffer.from(e).toString("base64"),yS=typeof btoa<"u"?btoa:xS,Vl=(e,n=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${n} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${yS(o)})`},bp=(e="default")=>ye`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:n})=>js({mainColor:e==="flat"?n.flatLight:n.material,secondaryColor:e==="flat"?n.canvas:n.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Tn()}
    ${e==="flat"?po():tt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:n})=>n.material};
  }
  ::-webkit-scrollbar-button {
    ${Tn()}
    ${e==="flat"?po():tt({style:"window"})}
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
    ${e==="default"?tt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:n})=>Vl(n.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:n})=>Vl(n.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:n})=>Vl(n.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:n})=>Vl(n.materialText,0)};
  }
`,wS=L.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,vS=g.forwardRef(({children:e,underline:n=!0,...o},i)=>Y.createElement(wS,{ref:i,underline:n,...o},e));vS.displayName="Anchor";const bS=L.header`
  ${tt()};
  ${Tn()};

  position: ${e=>{var n;return(n=e.position)!==null&&n!==void 0?n:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,kS=g.forwardRef(({children:e,fixed:n=!0,position:o="fixed",...i},a)=>Y.createElement(bS,{fixed:n,position:n!==!1?o:void 0,ref:a,...i},e));kS.displayName="AppBar";const xo=()=>{};function so(e,n,o){return o!==null&&e>o?o:n!==null&&e<n?n:e}function SS(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),i=o[0].split(".")[1];return(i?i.length:0)+parseInt(o[1],10)}const n=e.toString().split(".")[1];return n?n.length:0}function fg(e,n,o){const i=Math.round((e-o)/n)*n+o;return Number(i.toFixed(SS(n)))}function Lr(e){return typeof e=="number"?`${e}px`:e}const jS=L.div`
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
`,CS=L.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,ES=g.forwardRef(({alt:e="",children:n,noBorder:o=!1,size:i=35,square:a=!1,src:u,...d},p)=>Y.createElement(jS,{noBorder:o,ref:p,size:Lr(i),square:a,src:u,...d},u?Y.createElement(CS,{src:u,alt:e}):n));ES.displayName="Avatar";const Ct={sm:"28px",md:"36px",lg:"44px"},$S=ye`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>Ct[e]};
  width: ${({fullWidth:e,size:n="md",square:o})=>e?"100%":o?Ct[n]:"auto"};
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
`,Ga=L.button`
  ${({active:e,disabled:n,primary:o,theme:i,variant:a})=>a==="flat"?ye`
          ${po()}
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
            ${!e&&!n&&ri}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?ye`
          ${Tn()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!n&&!e&&tt({style:"buttonThin"})}
          }
          &:active {
            ${!n&&tt({style:"buttonThinPressed"})}
          }
          ${e&&tt({style:"buttonThinPressed"})}
          ${n&&$n()}
        `:ye`
          ${Tn()};
          border: none;
          ${n&&$n()}
          ${e?js({mainColor:i.material,secondaryColor:i.borderLightest}):""}
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

            ${tt(e?{style:a==="raised"?"window":"button",invert:!0}:{style:a==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!n&&tt({style:a==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!n&&ri}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${$S}
`,Ue=g.forwardRef(({onClick:e,disabled:n=!1,children:o,type:i="button",fullWidth:a=!1,size:u="md",square:d=!1,active:p=!1,onTouchStart:h=xo,primary:m=!1,variant:y="default",...w},b)=>Y.createElement(Ga,{active:p,disabled:n,$disabled:n,fullWidth:a,onClick:n?void 0:e,onTouchStart:h,primary:m,ref:b,size:u,square:d,type:i,variant:y,...w},o));Ue.displayName="Button";function Or({defaultValue:e,onChange:n,onChangePropName:o="onChange",readOnly:i,value:a,valuePropName:u="value"}){const d=a!==void 0,[p,h]=g.useState(e),m=g.useCallback(y=>{d||h(y)},[d]);if(d&&typeof n!="function"&&!i){const y=`Warning: You provided a \`${u}\` prop to a component without an \`${o}\` handler.${u==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${u}\`.`}`;console.warn(y)}return[d?a:p,m]}const yf=L.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>Ct[e.size]};
  width: ${e=>e.square?Ct[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>Ct[e.size]};
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
  ${e=>e.$disabled&&$n()}
`,mt=g.forwardRef(({size:e="lg",disabled:n,square:o,children:i,onClick:a,primary:u,...d},p)=>Y.createElement(yf,{$disabled:n,size:e,square:o,onClick:n?void 0:a,primary:u,role:"menuitem",ref:p,"aria-disabled":n,...d},i));mt.displayName="MenuListItem";const hs=L.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${tt({style:"window"})}
  ${Tn()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;hs.displayName="MenuList";const Bn=20,Ea=L.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Bn}px;
  height: ${Bn}px;
  opacity: 0;
  z-index: -1;
`,kp=L.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&$n()}

  ${yf} & {
    margin: 0;
    height: 100%;
  }
  ${yf}:hover & {
    ${({$disabled:e,theme:n})=>!e&&ye`
        color: ${n.materialTextInvert};
      `};
  }
`,Sp=L.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ea}:focus ~ & {
    ${ri}
  }
  ${Ea}:not(:disabled) ~ &:active {
    ${ri}
  }
`,Hn=L.div`
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
    ${e=>e.shadow&&`box-shadow:${vp};`}
  }
`,TS=L.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${bp()}
`,Ey=g.forwardRef(({children:e,shadow:n=!0,...o},i)=>Y.createElement(Hn,{ref:i,shadow:n,...o},Y.createElement(TS,null,e)));Ey.displayName="ScrollView";const $y=ye`
  width: ${Bn}px;
  height: ${Bn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,AS=L(Hn)`
  ${$y}
  width: ${Bn}px;
  height: ${Bn}px;
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
  &:before {
    box-shadow: none;
  }
`,RS=L.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  ${$y}
  width: ${Bn-4}px;
  height: ${Bn-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
`,DS=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,IS=L.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:n})=>js({mainColor:e?n.checkmarkDisabled:n.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,PS={flat:RS,default:AS},dt=g.forwardRef(({checked:e,className:n="",defaultChecked:o=!1,disabled:i=!1,indeterminate:a=!1,label:u="",onChange:d=xo,style:p={},value:h,variant:m="default",...y},w)=>{var b;const[T,E]=Or({defaultValue:o,onChange:d,readOnly:(b=y.readOnly)!==null&&b!==void 0?b:i,value:e}),C=g.useCallback(j=>{const S=j.target.checked;E(S),d(j)},[d,E]),$=PS[m];let k=null;return a?k=IS:T&&(k=DS),Y.createElement(kp,{$disabled:i,className:n,style:p},Y.createElement(Ea,{disabled:i,onChange:i?void 0:C,readOnly:i,type:"checkbox",value:h,checked:T,"data-indeterminate":a,ref:w,...y}),Y.createElement($,{$disabled:i,role:"presentation"},k&&Y.createElement(k,{$disabled:i,variant:m})),u&&Y.createElement(Sp,null,u))});dt.displayName="Checkbox";const Ya=L.div`
  ${({orientation:e,theme:n,size:o="100%"})=>e==="vertical"?`
    height: ${Lr(o)};
    border-left: 2px solid ${n.borderDark};
    border-right: 2px solid ${n.borderLightest};
    margin: 0;
    `:`
    width: ${Lr(o)};
    border-bottom: 2px solid ${n.borderLightest};
    border-top: 2px solid ${n.borderDark};
    margin: 0;
    `}
`;Ya.displayName="Separator";const NS=L(Ga)`
  padding-left: 8px;
`,MS=L(Ya)`
  height: 21px;
  position: relative;
  top: 0;
`,Ty=L.input`
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
`,LS=L.div`
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
  ${Ty}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ri}
    outline-offset: -8px;
  }
`,OS=L.span`
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
`,zS=g.forwardRef(({value:e,defaultValue:n,onChange:o=xo,disabled:i=!1,variant:a="default",...u},d)=>{var p;const[h,m]=Or({defaultValue:n,onChange:o,readOnly:(p=u.readOnly)!==null&&p!==void 0?p:i,value:e}),y=w=>{const b=w.target.value;m(b),o(w)};return Y.createElement(NS,{disabled:i,as:"div",variant:a,size:"md"},Y.createElement(Ty,{onChange:y,readOnly:i,disabled:i,value:h??"#008080",type:"color",ref:d,...u}),Y.createElement(LS,{$disabled:i,color:h??"#008080",role:"presentation"}),a==="default"&&Y.createElement(MS,{orientation:"vertical"}),Y.createElement(OS,{$disabled:i,variant:a}))});zS.displayName="ColorInput";const _S=L.div`
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
      ${js({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,pg=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],FS=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function BS({digit:e=0,pixelSize:n=2,...o}){const i=FS[Number(e)].map((a,u)=>a?`${pg[u]} active`:pg[u]);return Y.createElement(_S,{pixelSize:n,...o},i.map((a,u)=>Y.createElement("span",{className:a,key:u})))}const WS=L.div`
  ${tt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,HS={sm:1,md:2,lg:3,xl:4},US=g.forwardRef(({value:e=0,minLength:n=3,size:o="md",...i},a)=>{const u=g.useMemo(()=>e.toString().padStart(n,"0").split(""),[n,e]);return Y.createElement(WS,{ref:a,...i},u.map((d,p)=>Y.createElement(BS,{digit:d,pixelSize:HS[o],key:p})))});US.displayName="Counter";const Ay=ye`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ct.md};
`,VS=L(Hn).attrs({"data-testid":"variant-default"})`
  ${Ay}
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
`,KS=L.div.attrs({"data-testid":"variant-flat"})`
  ${po()}
  ${Ay}
  position: relative;
`,Ry=ye`
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
  ${({disabled:e,variant:n})=>n!=="flat"&&e&&$n()}
`,QS=L.input`
  ${Ry}
  padding: 0 8px;
`,qS=L.textarea`
  ${Ry}
  padding: 8px;
  resize: none;
  ${({variant:e})=>bp(e)}
`,lr=g.forwardRef(({className:e,disabled:n=!1,fullWidth:o,onChange:i=xo,shadow:a=!0,style:u,variant:d="default",...p},h)=>{const m=d==="flat"?KS:VS,y=g.useMemo(()=>{var w;return p.multiline?Y.createElement(qS,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,variant:d,...p}):Y.createElement(QS,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,type:(w=p.type)!==null&&w!==void 0?w:"text",variant:d,...p})},[n,i,p,h,d]);return Y.createElement(m,{className:e,fullWidth:o,$disabled:n,shadow:a,style:u},y)});lr.displayName="TextInput";const GS=L.div`
  display: inline-flex;
  align-items: center;
`,wf=L(Ue)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?ye`
          height: calc(50% - 1px);
        `:ye`
          height: 50%;
        `}
`,YS=L.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?ye`
          height: calc(${Ct.md} - 4px);
        `:ye`
          height: ${Ct.md};
          margin-left: 2px;
        `}
`,hg=L.span`
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
  ${wf}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?ye`
            border-bottom-color: ${({theme:n})=>n.materialTextDisabled};
          `:ye`
            border-top-color: ${({theme:n})=>n.materialTextDisabled};
          `}
  }
`,Dy=g.forwardRef(({className:e,defaultValue:n,disabled:o=!1,max:i,min:a,onChange:u,readOnly:d,step:p=1,style:h,value:m,variant:y="default",width:w,...b},T)=>{const[E,C]=Or({defaultValue:n,onChange:u,readOnly:d,value:m}),$=g.useCallback(K=>{const X=parseFloat(K.target.value);C(X)},[C]),k=g.useCallback(K=>{const X=so(parseFloat(((E??0)+K).toFixed(2)),a??null,i??null);C(X),u==null||u(X)},[i,a,u,C,E]),j=g.useCallback(()=>{E!==void 0&&(u==null||u(E))},[u,E]),S=g.useCallback(()=>{k(p)},[k,p]),R=g.useCallback(()=>{k(-p)},[k,p]),M=y==="flat"?"flat":"raised";return Y.createElement(GS,{className:e,style:{...h,width:w!==void 0?Lr(w):"auto"},...b},Y.createElement(lr,{value:E,variant:y,onChange:$,disabled:o,type:"number",readOnly:d,ref:T,fullWidth:!0,onBlur:j}),Y.createElement(YS,{variant:y},Y.createElement(wf,{"data-testid":"increment",variant:M,disabled:o||d,onClick:S},Y.createElement(hg,{invert:!0})),Y.createElement(wf,{"data-testid":"decrement",variant:M,disabled:o||d,onClick:R},Y.createElement(hg,null))))});Dy.displayName="NumberInput";function XS(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<10;o+=1)n+=e[Math.floor(Math.random()*e.length)];return n}const Iy=e=>g.useMemo(()=>XS(),[e]),Py=ye`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Ny=ye`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,jp=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,JS=L.div`
  ${Py}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${jp}:focus & {
    ${Ny}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,My=ye`
  height: ${Ct.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:n})=>e?$n():n.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,ZS=L(Hn)`
  ${My}
  background: ${({$disabled:e=!1,theme:n})=>e?n.material:n.canvas};
  &:focus {
    outline: 0;
  }
`,ej=L.div`
  ${po()}
  ${My}
  background: ${({$disabled:e=!1,theme:n})=>e?n.flatLight:n.canvas};
`,tj=L.select`
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
  ${Py}
  cursor: pointer;
  &:disabled {
    ${$n()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Ly=L(Ga).attrs(()=>({"aria-hidden":"true"}))`
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
`,nj=L.span`
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
  ${Ly}:active & {
    margin-top: 2px;
  }
`,rj=L.ul`
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
  box-shadow: ${wp};
  ${({variant:e="default"})=>e==="flat"?ye`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:n})=>n.flatDark};
        `:ye`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:n})=>n.borderDarkest};
        `}
  ${({variant:e="default"})=>bp(e)}
`,oj=L.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${Ct.md} - 4px);
  line-height: calc(${Ct.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?Ny:""}
  user-select: none;
`,ij=[],Oy=({className:e,defaultValue:n,disabled:o,native:i,onChange:a,options:u=ij,readOnly:d,style:p,value:h,variant:m,width:y})=>{var w;const b=g.useMemo(()=>u.filter(Boolean),[u]),[T,E]=Or({defaultValue:n??((w=b==null?void 0:b[0])===null||w===void 0?void 0:w.value),onChange:a,readOnly:d,value:h}),C=!(o||d),$=g.useMemo(()=>({className:e,style:{...p,width:y}}),[e,p,y]),k=g.useMemo(()=>Y.createElement(Ly,{as:"div","data-testid":"select-button",$disabled:o,native:i,tabIndex:-1,variant:m==="flat"?"flat":"raised"},Y.createElement(nj,{"data-testid":"select-icon",$disabled:o})),[o,i,m]),j=g.useMemo(()=>m==="flat"?ej:ZS,[m]);return g.useMemo(()=>({isEnabled:C,options:b,value:T,setValue:E,wrapperProps:$,DropdownButton:k,Wrapper:j}),[k,j,C,b,E,T,$])},sj={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},lj=1e3,aj=({onBlur:e,onChange:n,onClose:o,onFocus:i,onKeyDown:a,onMouseDown:u,onOpen:d,open:p,options:h,readOnly:m,value:y,selectRef:w,setValue:b,wrapperRef:T})=>{const E=g.useRef(null),C=g.useRef([]),$=g.useRef(0),k=g.useRef(0),j=g.useRef(),S=g.useRef("search"),R=g.useRef(""),M=g.useRef(),[K,X]=Or({defaultValue:!1,onChange:d,onChangePropName:"onOpen",readOnly:m,value:p,valuePropName:"open"}),ee=g.useMemo(()=>{const A=h.findIndex(V=>V.value===y);return $.current=so(A,0,null),h[A]},[h,y]),[ie,me]=g.useState(h[0]),fe=g.useCallback(A=>{const V=E.current,te=C.current[A];if(!te||!V){j.current=A;return}j.current=void 0;const ne=V.clientHeight,ce=V.scrollTop,je=V.scrollTop+ne,Re=te.offsetTop,ze=te.offsetHeight,st=te.offsetTop+te.offsetHeight;Re<ce&&V.scrollTo(0,Re),st>je&&V.scrollTo(0,Re-ne+ze),te.focus({preventScroll:!0})},[E]),he=g.useCallback((A,{scroll:V}={})=>{var te;const ne=h.length-1;let ce;switch(A){case"first":{ce=0;break}case"last":{ce=ne;break}case"next":{ce=so(k.current+1,0,ne);break}case"previous":{ce=so(k.current-1,0,ne);break}case"selected":{ce=so((te=$.current)!==null&&te!==void 0?te:0,0,ne);break}default:ce=A}k.current=ce,me(h[ce]),V&&fe(ce)},[k,h,fe]),le=g.useCallback(({fromEvent:A})=>{X(!0),he("selected",{scroll:!0}),d==null||d({fromEvent:A})},[he,d,X]),_=g.useCallback(()=>{S.current="search",R.current="",clearTimeout(M.current)},[]),D=g.useCallback(({focusSelect:A,fromEvent:V})=>{var te;o==null||o({fromEvent:V}),X(!1),me(h[0]),_(),j.current=void 0,A&&((te=w.current)===null||te===void 0||te.focus())},[_,o,h,w,X]),I=g.useCallback(({fromEvent:A})=>{K?D({focusSelect:!1,fromEvent:A}):le({fromEvent:A})},[D,le,K]),H=g.useCallback((A,{fromEvent:V})=>{$.current!==A&&($.current=A,b(h[A].value),n==null||n(h[A],{fromEvent:V}))},[n,h,b]),W=g.useCallback(({focusSelect:A,fromEvent:V})=>{H(k.current,{fromEvent:V}),D({focusSelect:A,fromEvent:V})},[D,H]),B=g.useCallback((A,{fromEvent:V,select:te})=>{var ne;switch(S.current==="cycleFirstLetter"&&A!==R.current&&(S.current="search"),A===R.current?S.current="cycleFirstLetter":R.current+=A,S.current){case"search":{let ce=h.findIndex(je=>{var Re;return((Re=je.label)===null||Re===void 0?void 0:Re.toLocaleUpperCase().indexOf(R.current))===0});ce<0&&(ce=h.findIndex(je=>{var Re;return((Re=je.label)===null||Re===void 0?void 0:Re.toLocaleUpperCase().indexOf(A))===0}),R.current=A),ce>=0&&(te?H(ce,{fromEvent:V}):he(ce,{scroll:!0}));break}case"cycleFirstLetter":{const ce=te?(ne=$.current)!==null&&ne!==void 0?ne:-1:k.current;let je=h.findIndex((Re,ze)=>{var st;return ze>ce&&((st=Re.label)===null||st===void 0?void 0:st.toLocaleUpperCase().indexOf(A))===0});je<0&&(je=h.findIndex(Re=>{var ze;return((ze=Re.label)===null||ze===void 0?void 0:ze.toLocaleUpperCase().indexOf(A))===0})),je>=0&&(te?H(je,{fromEvent:V}):he(je,{scroll:!0}));break}}clearTimeout(M.current),M.current=setTimeout(()=>{S.current==="search"&&(R.current="")},lj)},[he,h,H]),N=g.useCallback(A=>{var V;A.button===0&&(A.preventDefault(),(V=w.current)===null||V===void 0||V.focus(),I({fromEvent:A}),u==null||u(A))},[u,w,I]),z=g.useCallback(A=>{W({focusSelect:!0,fromEvent:A})},[W]),J=g.useCallback(A=>{const{altKey:V,code:te,ctrlKey:ne,metaKey:ce,shiftKey:je}=A,{ARROW_DOWN:Re,ARROW_UP:ze,END:st,ENTER:In,ESC:ln,HOME:qn,SPACE:Pn,TAB:Gn}=sj,mi=V||ne||ce||je;if(!(te===Gn&&(V||ne||ce)||te!==Gn&&mi))switch(te){case Re:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("next",{scroll:!0});break}case ze:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("previous",{scroll:!0});break}case st:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("last",{scroll:!0});break}case In:{if(!K)return;A.preventDefault(),W({focusSelect:!0,fromEvent:A});break}case ln:{if(!K)return;A.preventDefault(),D({focusSelect:!0,fromEvent:A});break}case qn:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("first",{scroll:!0});break}case Pn:{A.preventDefault(),K?W({focusSelect:!0,fromEvent:A}):le({fromEvent:A});break}case Gn:{if(!K)return;je||A.preventDefault(),W({focusSelect:!je,fromEvent:A});break}default:!mi&&te.match(/^Key/)&&(A.preventDefault(),A.stopPropagation(),B(te.replace(/^Key/,""),{select:!K,fromEvent:A}))}},[he,D,K,le,B,W]),ae=g.useCallback(A=>{J(A),a==null||a(A)},[J,a]),ue=g.useCallback(A=>{he(A)},[he]),ge=g.useCallback(A=>{K||(_(),e==null||e(A))},[_,e,K]),pe=g.useCallback(A=>{_(),i==null||i(A)},[_,i]),xe=g.useCallback(A=>{E.current=A,j.current!==void 0&&fe(j.current)},[fe]),q=g.useCallback((A,V)=>{C.current[V]=A,j.current===V&&fe(j.current)},[fe]);return g.useEffect(()=>{if(!K)return()=>{};const A=V=>{var te;const ne=V.target;!((te=T.current)===null||te===void 0)&&te.contains(ne)||(V.preventDefault(),D({focusSelect:!1,fromEvent:V}))};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[D,K,T]),g.useMemo(()=>({activeOption:ie,handleActivateOptionIndex:ue,handleBlur:ge,handleButtonKeyDown:ae,handleDropdownKeyDown:J,handleFocus:pe,handleMouseDown:N,handleOptionClick:z,handleSetDropdownRef:xe,handleSetOptionRef:q,open:K,selectedOption:ee}),[ie,ue,ge,ae,pe,J,N,z,xe,q,K,ee])},cj=g.forwardRef(({className:e,defaultValue:n,disabled:o,onChange:i,options:a,readOnly:u,style:d,value:p,variant:h,width:m,...y},w)=>{const{isEnabled:b,options:T,setValue:E,value:C,DropdownButton:$,Wrapper:k}=Oy({defaultValue:n,disabled:o,native:!0,onChange:i,options:a,readOnly:u,value:p,variant:h}),j=g.useCallback(S=>{const R=T.find(M=>M.value===S.target.value);R&&(E(R.value),i==null||i(R,{fromEvent:S}))},[i,T,E]);return Y.createElement(k,{className:e,style:{...d,width:m}},Y.createElement(jp,null,Y.createElement(tj,{...y,disabled:o,onChange:b?j:xo,ref:w,value:C},T.map((S,R)=>{var M;return Y.createElement("option",{key:`${S.value}-${R}`,value:S.value},(M=S.label)!==null&&M!==void 0?M:S.value)})),$))});cj.displayName="SelectNative";function uj({activateOptionIndex:e,active:n,index:o,onClick:i,option:a,selected:u,setRef:d}){const p=g.useCallback(()=>{e(o)},[e,o]),h=g.useCallback(y=>{d(y,o)},[o,d]),m=Iy();return Y.createElement(oj,{active:n,"aria-selected":u?"true":void 0,"data-value":a.value,id:m,onClick:i,onMouseEnter:p,ref:h,role:"option",tabIndex:0},a.label)}function dj({"aria-label":e,"aria-labelledby":n,className:o,defaultValue:i,disabled:a=!1,formatDisplay:u,inputProps:d,labelId:p,menuMaxHeight:h,name:m,onBlur:y,onChange:w,onClose:b,onFocus:T,onKeyDown:E,onMouseDown:C,onOpen:$,open:k,options:j,readOnly:S,shadow:R=!0,style:M,variant:K="default",value:X,width:ee="auto",...ie},me){const{isEnabled:fe,options:he,setValue:le,value:_,wrapperProps:D,DropdownButton:I,Wrapper:H}=Oy({className:o,defaultValue:i,disabled:a,native:!1,onChange:w,options:j,style:M,readOnly:S,value:X,variant:K,width:ee}),W=g.useRef(null),B=g.useRef(null),N=g.useRef(null),{activeOption:z,handleActivateOptionIndex:J,handleBlur:ae,handleButtonKeyDown:ue,handleDropdownKeyDown:ge,handleFocus:pe,handleMouseDown:xe,handleOptionClick:q,handleSetDropdownRef:A,handleSetOptionRef:V,open:te,selectedOption:ne}=aj({onBlur:y,onChange:w,onClose:b,onFocus:T,onKeyDown:E,onMouseDown:C,onOpen:$,open:k,options:he,value:_,selectRef:B,setValue:le,wrapperRef:N});g.useImperativeHandle(me,()=>({focus:In=>{var ln;(ln=B.current)===null||ln===void 0||ln.focus(In)},node:W.current,value:String(_)}),[_]);const ce=g.useMemo(()=>ne?typeof u=="function"?u(ne):ne.label:"",[u,ne]),je=fe?1:void 0,Re=g.useMemo(()=>h?{overflow:"auto",maxHeight:h}:void 0,[h]),ze=Iy(),st=g.useMemo(()=>he.map((In,ln)=>{const qn=`${_}-${ln}`,Pn=In===z,Gn=In===ne;return Y.createElement(uj,{activateOptionIndex:J,active:Pn,index:ln,key:qn,onClick:q,option:In,selected:Gn,setRef:V})}),[z,J,q,V,he,ne,_]);return Y.createElement(H,{...D,$disabled:a,ref:N,shadow:R,style:{...M,width:ee}},Y.createElement("input",{name:m,ref:W,type:"hidden",value:String(_),...d}),Y.createElement(jp,{"aria-disabled":a,"aria-expanded":te,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":n??p,"aria-owns":fe&&te?ze:void 0,onBlur:ae,onFocus:pe,onKeyDown:ue,onMouseDown:fe?xe:C,ref:B,role:"button",tabIndex:je,...ie},Y.createElement(JS,null,ce),I),fe&&te&&Y.createElement(rj,{id:ze,onKeyDown:ge,ref:A,role:"listbox",style:Re,tabIndex:0,variant:K},st))}const zy=g.forwardRef(dj);zy.displayName="Select";const fj=L.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,vf=g.forwardRef(function({children:n,noPadding:o=!1,...i},a){return Y.createElement(fj,{noPadding:o,ref:a,...i},n)});vf.displayName="Toolbar";const pj=L.div`
  padding: 16px;
`,Br=g.forwardRef(function({children:n,...o},i){return Y.createElement(pj,{ref:i,...o},n)});Br.displayName="WindowContent";const hj=L.div`
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

  ${Ga} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,li=g.forwardRef(function({active:n=!0,children:o,...i},a){return Y.createElement(hj,{active:n,ref:a,...i},o)});li.displayName="WindowHeader";const mj=L.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${tt({style:"window"})}
  ${Tn()}
`,gj=L.span`
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
`,ai=g.forwardRef(({children:e,resizable:n=!1,resizeRef:o,shadow:i=!0,...a},u)=>Y.createElement(mj,{ref:u,shadow:i,...a},e,n&&Y.createElement(gj,{"data-testid":"resizeHandle",ref:o})));ai.displayName="Window";const xj=L(Ey)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,yj=L.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,wj=L.div`
  display: flex;
  flex-wrap: wrap;
`,or=L.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,vj=L.span`
  cursor: pointer;

  background: ${({active:e,theme:n})=>e?n.hoverBackground:"transparent"};
  color: ${({active:e,theme:n})=>e?n.canvasTextInvert:n.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:n})=>n?"none":e.materialDark};
  }
`,bj=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function kj(e,n){return new Date(e,n+1,0).getDate()}function Sj(e,n,o){return new Date(e,n,o).getDay()}function jj(e){const n=new Date(Date.parse(e)),o=n.getUTCDate(),i=n.getUTCMonth(),a=n.getUTCFullYear();return{day:o,month:i,year:a}}const Cj=g.forwardRef(({className:e,date:n=new Date().toISOString(),onAccept:o,onCancel:i,shadow:a=!0},u)=>{const[d,p]=g.useState(()=>jj(n)),{year:h,month:m,day:y}=d,w=g.useCallback(({value:$})=>{p(k=>({...k,month:$}))},[]),b=g.useCallback($=>{p(k=>({...k,year:$}))},[]),T=g.useCallback($=>{p(k=>({...k,day:$}))},[]),E=g.useCallback(()=>{const $=[d.year,d.month+1,d.day].map(k=>String(k).padStart(2,"0")).join("-");o==null||o($)},[d.day,d.month,d.year,o]),C=g.useMemo(()=>{const $=Array.from({length:42}),k=Sj(h,m,1);let j=y;const S=kj(h,m);return j=j<S?j:S,$.forEach((R,M)=>{if(M>=k&&M<S+k){const K=M-k+1;$[M]=Y.createElement(or,{key:M,onClick:()=>{T(K)}},Y.createElement(vj,{active:K===j},K))}else $[M]=Y.createElement(or,{key:M})}),$},[y,T,m,h]);return Y.createElement(ai,{className:e,ref:u,shadow:a,style:{margin:20}},Y.createElement(li,null,Y.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),Y.createElement(Br,null,Y.createElement(vf,{noPadding:!0,style:{justifyContent:"space-between"}},Y.createElement(zy,{options:bj,value:m,onChange:w,width:128,menuMaxHeight:200}),Y.createElement(Dy,{value:h,onChange:b,width:100})),Y.createElement(xj,null,Y.createElement(yj,null,Y.createElement(or,null,"S"),Y.createElement(or,null,"M"),Y.createElement(or,null,"T"),Y.createElement(or,null,"W"),Y.createElement(or,null,"T"),Y.createElement(or,null,"F"),Y.createElement(or,null,"S")),Y.createElement(wj,null,C)),Y.createElement(vf,{noPadding:!0,style:{justifyContent:"space-between"}},Y.createElement(Ue,{fullWidth:!0,onClick:i,disabled:!i},"Cancel"),Y.createElement(Ue,{fullWidth:!0,onClick:o?E:void 0,disabled:!o},"OK"))))});Cj.displayName="DatePicker";const Ej=e=>{switch(e){case"status":case"well":return ye`
        ${tt({style:"status"})}
      `;case"window":case"outside":return ye`
        ${tt({style:"window"})}
      `;case"field":return ye`
        ${tt({style:"field"})}
      `;default:return ye`
        ${tt()}
      `}},$j=L.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>Ej(e)}
  ${({variant:e})=>Tn(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,wt=g.forwardRef(({children:e,shadow:n=!1,variant:o="window",...i},a)=>Y.createElement($j,{ref:a,shadow:n,variant:o,...i},e));wt.displayName="Frame";const Tj=L.fieldset`
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
  ${e=>e.$disabled&&$n()}
`,Aj=L.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:n})=>n==="flat"?e.canvas:e.material};
`,_y=g.forwardRef(({label:e,disabled:n=!1,variant:o="default",children:i,...a},u)=>Y.createElement(Tj,{"aria-disabled":n,$disabled:n,variant:o,ref:u,...a},e&&Y.createElement(Aj,{variant:o},e),i));_y.displayName="GroupBox";const Rj=L.div`
  ${({theme:e,size:n="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Lr(n)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Rj.displayName="Handle";const Dj="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ij=L.div`
  display: inline-block;
  height: ${({size:e})=>Lr(e)};
  width: ${({size:e})=>Lr(e)};
`,Pj=L.span`
  display: block;
  background: ${Dj};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Nj=g.forwardRef(({size:e=30,...n},o)=>Y.createElement(Ij,{size:e,ref:o,...n},Y.createElement(Pj,null)));Nj.displayName="Hourglass";const Mj=L.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Lj=L.div`
  position: relative;
`,Oj=L.div`
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
`,zj=L(Hn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,_j=L.div`
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
`,Fy=g.forwardRef(({backgroundStyles:e,children:n,...o},i)=>Y.createElement(Mj,{ref:i,...o},Y.createElement(Lj,null,Y.createElement(Oj,null,Y.createElement(zj,{style:e},n)),Y.createElement(_j,null))));Fy.displayName="Monitor";const Fj=L.div`
  display: inline-block;
  height: ${Ct.md};
  width: 100%;
`,Bj=L(Hn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,By=ye`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Wj=L.div`
  position: relative;
  top: 4px;
  ${By}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Hj=L.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${By}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Uj=L.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Wy=17,Vj=L.span`
  display: inline-block;
  width: ${Wy}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Kj=g.forwardRef(({hideValue:e=!1,shadow:n=!0,value:o,variant:i="default",...a},u)=>{const d=e?null:`${o}%`,p=g.useRef(null),[h,m]=g.useState([]),y=g.useCallback(()=>{if(!p.current||o===void 0)return;const w=p.current.getBoundingClientRect().width,b=Math.round(o/100*w/Wy);m(Array.from({length:b}))},[o]);return g.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[y]),Y.createElement(Fj,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:u,role:"progressbar",variant:i,...a},Y.createElement(Bj,{variant:i,shadow:n},i==="default"?Y.createElement(Y.Fragment,null,Y.createElement(Wj,{"data-testid":"defaultProgress1"},d),Y.createElement(Hj,{"data-testid":"defaultProgress2",value:o},d)):Y.createElement(Uj,{ref:p,"data-testid":"tileProgress"},h.map((w,b)=>Y.createElement(Vj,{key:b})))))});Kj.displayName="ProgressBar";const Hy=ye`
  width: ${Bn}px;
  height: ${Bn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Qj=L(Hn)`
  ${Hy}
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
`,qj=L.div`
  ${po()}
  ${Hy}
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
`,Gj=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Yj={flat:qj,default:Qj},Xj=g.forwardRef(({checked:e,className:n="",disabled:o=!1,label:i="",onChange:a,style:u={},variant:d="default",...p},h)=>{const m=Yj[d];return Y.createElement(kp,{$disabled:o,className:n,style:u},Y.createElement(m,{$disabled:o,role:"presentation"},e&&Y.createElement(Gj,{$disabled:o,variant:d})),Y.createElement(Ea,{disabled:o,onChange:o?void 0:a,readOnly:o,type:"radio",checked:e,ref:h,...p}),i&&Y.createElement(Sp,null,i))});Xj.displayName="Radio";const Jj=typeof window<"u"?g.useLayoutEffect:g.useEffect;function no(e){const n=g.useRef(e);return Jj(()=>{n.current=e}),g.useCallback((...o)=>(0,n.current)(...o),[])}function mg(e,n){typeof e=="function"?e(n):e&&(e.current=n)}function gg(e,n){return g.useMemo(()=>e==null&&n==null?null:o=>{mg(e,o),mg(n,o)},[e,n])}var Ut=ey();let Xa=!0,bf=!1,xg;const Zj={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function eC(e){if("type"in e){const{type:n,tagName:o}=e;if(o==="INPUT"&&Zj[n]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function tC(e){e.metaKey||e.altKey||e.ctrlKey||(Xa=!0)}function yd(){Xa=!1}function nC(){this.visibilityState==="hidden"&&bf&&(Xa=!0)}function rC(e){e.addEventListener("keydown",tC,!0),e.addEventListener("mousedown",yd,!0),e.addEventListener("pointerdown",yd,!0),e.addEventListener("touchstart",yd,!0),e.addEventListener("visibilitychange",nC,!0)}function oC(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch{}return Xa||eC(n)}function iC(){bf=!0,window.clearTimeout(xg),xg=window.setTimeout(()=>{bf=!1},100)}function sC(){const e=g.useCallback(n=>{const o=Ut.findDOMNode(n);o!=null&&rC(o.ownerDocument)},[]);return{isFocusVisible:oC,onBlurVisible:iC,ref:e}}function lC(e,n,o){return(o-n)*e+n}function Kl(e,n){if(n!==void 0&&"changedTouches"in e){for(let o=0;o<e.changedTouches.length;o+=1){const i=e.changedTouches[o];if(i.identifier===n)return{x:i.clientX,y:i.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Ql(e){return e&&e.ownerDocument||document}function aC(e,n){var o;const{index:i}=(o=e.reduce((a,u,d)=>{const p=Math.abs(n-u);return a===null||p<a.distance||p===a.distance?{distance:p,index:d}:a},null))!==null&&o!==void 0?o:{};return i??-1}const cC=L.div`
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
`,Uy=()=>ye`
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
`,uC=L(Hn)`
  ${Uy()}
`,dC=L(Hn)`
  ${Uy()}

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
`,fC=L.span`
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
          ${po()}
          outline: 2px solid ${({theme:n})=>n.flatDark};
          background: ${({theme:n})=>n.flatLight};
        `:ye`
          ${Tn()}
          ${tt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:n})=>e&&js({mainColor:n.material,secondaryColor:n.borderLightest})}
`,$a=6,pC=L.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?ye`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${$a}px;
          border-bottom: 2px solid ${({theme:n})=>n.materialText};
        `:ye`
          bottom: ${-6}px;
          height: ${$a}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:n})=>n.materialText};
          border-right: 1px solid ${({theme:n})=>n.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:n})=>e&&ye`
      ${$n()}
      box-shadow: 1px 1px 0px ${n.materialTextDisabledShadow};
      border-color: ${n.materialTextDisabled};
    `}
`,hC=L.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?ye`
          transform: translate(${$a+2}px, ${$a+1}px);
        `:ye`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Vy=g.forwardRef(({defaultValue:e,disabled:n=!1,marks:o=!1,max:i=100,min:a=0,name:u,onChange:d,onChangeCommitted:p,onMouseDown:h,orientation:m="horizontal",size:y="100%",step:w=1,value:b,variant:T="default",...E},C)=>{const $=T==="flat"?dC:uC,k=m==="vertical",[j=a,S]=Or({defaultValue:e,onChange:d??p,value:b}),{isFocusVisible:R,onBlurVisible:M,ref:K}=sC(),[X,ee]=g.useState(!1),ie=g.useRef(),me=g.useRef(null),fe=gg(K,ie),he=gg(C,fe),le=no(ae=>{R(ae)&&ee(!0)}),_=no(()=>{X!==!1&&(ee(!1),M())}),D=g.useRef(),I=g.useMemo(()=>o===!0&&Number.isFinite(w)?[...Array(Math.round((i-a)/w)+1)].map((ae,ue)=>({label:void 0,value:a+w*ue})):Array.isArray(o)?o:[],[o,i,a,w]),H=no(ae=>{const ue=(i-a)/10,ge=I.map(q=>q.value),pe=ge.indexOf(j);let xe=0;switch(ae.key){case"Home":xe=a;break;case"End":xe=i;break;case"PageUp":w&&(xe=j+ue);break;case"PageDown":w&&(xe=j-ue);break;case"ArrowRight":case"ArrowUp":w?xe=j+w:xe=ge[pe+1]||ge[ge.length-1];break;case"ArrowLeft":case"ArrowDown":w?xe=j-w:xe=ge[pe-1]||ge[0];break;default:return}ae.preventDefault(),w&&(xe=fg(xe,w,a)),xe=so(xe,a,i),S(xe),ee(!0),d==null||d(xe),p==null||p(xe)}),W=g.useCallback(ae=>{if(!ie.current)return 0;const ue=ie.current.getBoundingClientRect();let ge;k?ge=(ue.bottom-ae.y)/ue.height:ge=(ae.x-ue.left)/ue.width;let pe;if(pe=lC(ge,a,i),w)pe=fg(pe,w,a);else{const xe=I.map(A=>A.value),q=aC(xe,pe);pe=xe[q]}return pe=so(pe,a,i),pe},[I,i,a,w,k]),B=no(ae=>{var ue;const ge=Kl(ae,D.current);if(!ge)return;const pe=W(ge);(ue=me.current)===null||ue===void 0||ue.focus(),S(pe),ee(!0),d==null||d(pe)}),N=no(ae=>{const ue=Kl(ae,D.current);if(!ue)return;const ge=W(ue);p==null||p(ge),D.current=void 0;const pe=Ql(ie.current);pe.removeEventListener("mousemove",B),pe.removeEventListener("mouseup",N),pe.removeEventListener("touchmove",B),pe.removeEventListener("touchend",N)}),z=no(ae=>{var ue;h==null||h(ae),ae.preventDefault(),(ue=me.current)===null||ue===void 0||ue.focus(),ee(!0);const ge=Kl(ae,D.current);if(ge){const xe=W(ge);S(xe),d==null||d(xe)}const pe=Ql(ie.current);pe.addEventListener("mousemove",B),pe.addEventListener("mouseup",N)}),J=no(ae=>{var ue;ae.preventDefault();const ge=ae.changedTouches[0];ge!=null&&(D.current=ge.identifier),(ue=me.current)===null||ue===void 0||ue.focus(),ee(!0);const pe=Kl(ae,D.current);if(pe){const q=W(pe);S(q),d==null||d(q)}const xe=Ql(ie.current);xe.addEventListener("touchmove",B),xe.addEventListener("touchend",N)});return g.useEffect(()=>{const{current:ae}=ie;ae==null||ae.addEventListener("touchstart",J);const ue=Ql(ae);return()=>{ae==null||ae.removeEventListener("touchstart",J),ue.removeEventListener("mousemove",B),ue.removeEventListener("mouseup",N),ue.removeEventListener("touchmove",B),ue.removeEventListener("touchend",N)}},[N,B,J]),Y.createElement(cC,{$disabled:n,hasMarks:!!I.length,isFocused:X,onMouseDown:z,orientation:m,ref:he,size:Lr(y),...E},Y.createElement("input",{disabled:n,name:u,type:"hidden",value:j??0}),I&&I.map(ae=>Y.createElement(pC,{$disabled:n,"data-testid":"tick",key:ae.value/(i-a)*100,orientation:m,style:{[k?"bottom":"left"]:`${(ae.value-a)/(i-a)*100}%`}},ae.label&&Y.createElement(hC,{"aria-hidden":!0,"data-testid":"mark",orientation:m},ae.label))),Y.createElement($,{orientation:m,variant:T}),Y.createElement(fC,{$disabled:n,"aria-disabled":n?!0:void 0,"aria-orientation":m,"aria-valuemax":i,"aria-valuemin":a,"aria-valuenow":j,onBlur:_,onFocus:le,onKeyDown:H,orientation:m,ref:me,role:"slider",style:{[k?"bottom":"left"]:`${(k?-100:0)+100*(j-a)/(i-a)}%`},tabIndex:n?void 0:0,variant:T}))});Vy.displayName="Slider";const mC=L.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${vp};
  overflow-y: auto;
`,Ky=g.forwardRef(function({children:n,...o},i){return Y.createElement(mC,{ref:i,...o},n)});Ky.displayName="TableBody";const gC=L.td`
  padding: 0 8px;
`,oo=g.forwardRef(function({children:n,...o},i){return Y.createElement(gC,{ref:i,...o},n)});oo.displayName="TableDataCell";const xC=L.thead`
  display: table-header-group;
`,Qy=g.forwardRef(function({children:n,...o},i){return Y.createElement(xC,{ref:i,...o},n)});Qy.displayName="TableHead";const yC=L.th`
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
    ${tt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&ye`
      &:active {
        &:before {
          ${tt({invert:!0,style:"window"})}
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
  ${({$disabled:e})=>e&&$n()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&$n()}
  }
`,qy=g.forwardRef(function({disabled:n=!1,children:o,onClick:i,onTouchStart:a=xo,sort:u,...d},p){const h=u==="asc"?"ascending":u==="desc"?"descending":void 0;return Y.createElement(yC,{$disabled:n,"aria-disabled":n,"aria-sort":h,onClick:n?void 0:i,onTouchStart:n?void 0:a,ref:p,...d},Y.createElement("div",null,o))});qy.displayName="TableHeadCell";const wC=L.tr`
  color: inherit;
  display: table-row;
  height: calc(${Ct.md} - 2px);
  line-height: calc(${Ct.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,kf=g.forwardRef(function({children:n,...o},i){return Y.createElement(wC,{ref:i,...o},n)});kf.displayName="TableRow";const vC=L.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,bC=L(Hn)`
  &:before {
    box-shadow: none;
  }
`,Gy=g.forwardRef(({children:e,...n},o)=>Y.createElement(bC,null,Y.createElement(vC,{ref:o,...n},e)));Gy.displayName="Table";const kC=L.button`
  ${Tn()}
  ${tt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${Ct.md};
  line-height: ${Ct.md};
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
    ${ri}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${Ct.md} + 4px);
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
`,Pr=g.forwardRef(({value:e,onClick:n,selected:o=!1,children:i,...a},u)=>Y.createElement(kC,{"aria-selected":o,selected:o,onClick:d=>n==null?void 0:n(e,d),ref:u,role:"tab",...a},i));Pr.displayName="Tab";const SC=L.div`
  ${Tn()}
  ${tt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Ja=g.forwardRef(({children:e,...n},o)=>Y.createElement(SC,{ref:o,...n},e));Ja.displayName="TabBody";const jC=L.div`
  position: relative;
  ${({isMultiRow:e,theme:n})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${n.borderDark};
  }
  `}
`,CC=L.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function EC(e,n){const o=[];for(let i=n;i>0;i-=1)o.push(e.splice(0,Math.ceil(e.length/i)));return o}const Za=g.forwardRef(({value:e,onChange:n=xo,children:o,rows:i=1,...a},u)=>{const d=g.useMemo(()=>{var p;const h=(p=Y.Children.map(o,w=>{if(!Y.isValidElement(w))return null;const b={selected:w.props.value===e,onClick:n};return Y.cloneElement(w,b)}))!==null&&p!==void 0?p:[],m=EC(h,i).map((w,b)=>({key:b,tabs:w})),y=m.findIndex(w=>w.tabs.some(b=>b.props.selected));return m.push(m.splice(y,1)[0]),m},[o,n,i,e]);return Y.createElement(jC,{...a,isMultiRow:i>1,role:"tablist",ref:u},d.map(p=>Y.createElement(CC,{key:p.key},p.tabs)))});Za.displayName="Tabs";const $C=["blur","focus"],TC=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function yg(e){return"nativeEvent"in e&&$C.includes(e.type)}function wg(e){return"nativeEvent"in e&&TC.includes(e.type)}const AC={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},RC=L.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${wp};
  text-align: center;
  font-size: 1rem;
  ${e=>AC[e.position]}
`,DC=L.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,IC=g.forwardRef(({className:e,children:n,disableFocusListener:o=!1,disableMouseListener:i=!1,enterDelay:a=1e3,leaveDelay:u=0,onBlur:d,onClose:p,onFocus:h,onMouseEnter:m,onMouseLeave:y,onOpen:w,style:b,text:T,position:E="top",...C},$)=>{const[k,j]=g.useState(!1),[S,R]=g.useState(),[M,K]=g.useState(),X=!o,ee=!i,ie=W=>{window.clearTimeout(S),window.clearTimeout(M);const B=window.setTimeout(()=>{j(!0),w==null||w(W)},a);R(B)},me=W=>{W.persist(),yg(W)?h==null||h(W):wg(W)&&(m==null||m(W)),ie(W)},fe=W=>{window.clearTimeout(S),window.clearTimeout(M);const B=window.setTimeout(()=>{j(!1),p==null||p(W)},u);K(B)},he=W=>{W.persist(),yg(W)?d==null||d(W):wg(W)&&(y==null||y(W)),fe(W)},le=X?he:void 0,_=X?me:void 0,D=ee?me:void 0,I=ee?he:void 0,H=X?0:void 0;return Y.createElement(DC,{"data-testid":"tooltip-wrapper",onBlur:le,onFocus:_,onMouseEnter:D,onMouseLeave:I,tabIndex:H},Y.createElement(RC,{className:e,"data-testid":"tooltip",position:E,ref:$,show:k,style:b,...C},T),n)});IC.displayName="Tooltip";const Sf=L(Sp)`
  white-space: nowrap;
`,Yy=ye`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":ye`
          cursor: pointer;

          :focus {
            ${Sf} {
              background: ${({theme:n})=>n.hoverBackground};
              color: ${({theme:n})=>n.materialTextInvert};
              outline: 2px dotted ${({theme:n})=>n.focusSecondary};
            }
          }
        `}
`,PC=L.ul`
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
`,NC=L.li`
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
`,MC=L.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,LC=L.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${Yy};

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
`,vg=L(kp)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Yy};
`,OC=L.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function bg(e,n){return e.includes(n)?e.filter(o=>o!==n):[...e,n]}function kg(e){e.preventDefault()}function Xy({className:e,disabled:n,expanded:o,innerRef:i,level:a,select:u,selected:d,style:p,tree:h=[]}){const m=a===0,y=g.useCallback(w=>{var b,T;const E=!!(w.items&&w.items.length>0),C=o.includes(w.id),$=(b=n||w.disabled)!==null&&b!==void 0?b:!1,k=$?kg:M=>u(M,w),j=$?kg:M=>u(M,w),S=d===w.id,R=Y.createElement(OC,{"aria-hidden":!0},w.icon);return Y.createElement(NC,{key:w.label,isRootLevel:m,role:"treeitem","aria-expanded":C,"aria-selected":S,hasItems:E},E?Y.createElement(MC,{open:C},Y.createElement(LC,{onClick:k,$disabled:$},Y.createElement(vg,{$disabled:$},R,Y.createElement(Sf,null,w.label))),C&&Y.createElement(Xy,{className:e,disabled:$,expanded:o,level:a+1,select:u,selected:d,style:p,tree:(T=w.items)!==null&&T!==void 0?T:[]})):Y.createElement(vg,{as:"button",$disabled:$,onClick:j},R,Y.createElement(Sf,null,w.label)))},[e,n,o,m,a,u,d,p]);return Y.createElement(PC,{className:m?e:void 0,style:m?p:void 0,ref:m?i:void 0,role:m?"tree":"group",isRootLevel:m},h.map(y))}function zC({className:e,defaultExpanded:n=[],defaultSelected:o,disabled:i=!1,expanded:a,onNodeSelect:u,onNodeToggle:d,selected:p,style:h,tree:m=[]},y){const[w,b]=Or({defaultValue:n,onChange:d,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[T,E]=Or({defaultValue:o,onChange:u,onChangePropName:"onNodeSelect",value:p,valuePropName:"selected"}),C=g.useCallback((j,S)=>{if(d){const R=bg(w,S);d(j,R)}b(R=>bg(R,S))},[w,d,b]),$=g.useCallback((j,S)=>{E(S),u&&u(j,S)},[u,E]),k=g.useCallback((j,S)=>{j.preventDefault(),$(j,S.id),S.items&&S.items.length&&C(j,S.id)},[$,C]);return Y.createElement(Xy,{className:e,disabled:i,expanded:w,level:0,innerRef:y,select:k,selected:T,style:h,tree:m})}const _C=g.forwardRef(zC);_C.displayName="TreeView";const FC="/assets/ms_sans_serif-Du8rjN1q.woff2",BC="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var ts={},Sg;function WC(){if(Sg)return ts;Sg=1,Object.defineProperty(ts,"__esModule",{value:!0}),ts.parse=d,ts.serialize=m;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const b=function(){};return b.prototype=Object.create(null),b})();function d(b,T){const E=new u,C=b.length;if(C<2)return E;const $=(T==null?void 0:T.decode)||y;let k=0;do{const j=b.indexOf("=",k);if(j===-1)break;const S=b.indexOf(";",k),R=S===-1?C:S;if(j>R){k=b.lastIndexOf(";",j-1)+1;continue}const M=p(b,k,j),K=h(b,j,M),X=b.slice(M,K);if(E[X]===void 0){let ee=p(b,j+1,R),ie=h(b,R,ee);const me=$(b.slice(ee,ie));E[X]=me}k=R+1}while(k<C);return E}function p(b,T,E){do{const C=b.charCodeAt(T);if(C!==32&&C!==9)return T}while(++T<E);return E}function h(b,T,E){for(;T>E;){const C=b.charCodeAt(--T);if(C!==32&&C!==9)return T+1}return E}function m(b,T,E){const C=(E==null?void 0:E.encode)||encodeURIComponent;if(!e.test(b))throw new TypeError(`argument name is invalid: ${b}`);const $=C(T);if(!n.test($))throw new TypeError(`argument val is invalid: ${T}`);let k=b+"="+$;if(!E)return k;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);k+="; Max-Age="+E.maxAge}if(E.domain){if(!o.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);k+="; Domain="+E.domain}if(E.path){if(!i.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);k+="; Path="+E.path}if(E.expires){if(!w(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);k+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(k+="; HttpOnly"),E.secure&&(k+="; Secure"),E.partitioned&&(k+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":k+="; Priority=Low";break;case"medium":k+="; Priority=Medium";break;case"high":k+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":k+="; SameSite=Strict";break;case"lax":k+="; SameSite=Lax";break;case"none":k+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return k}function y(b){if(b.indexOf("%")===-1)return b;try{return decodeURIComponent(b)}catch{return b}}function w(b){return a.call(b)==="[object Date]"}return ts}WC();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var jg="popstate";function HC(e={}){function n(i,a){let{pathname:u,search:d,hash:p}=i.location;return jf("",{pathname:u,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function o(i,a){return typeof a=="string"?a:vs(a)}return VC(n,o,null,e)}function Ze(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Wn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function UC(){return Math.random().toString(36).substring(2,10)}function Cg(e,n){return{usr:e.state,key:e.key,idx:n}}function jf(e,n,o=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?ci(n):n,state:o,key:n&&n.key||i||UC()}}function vs({pathname:e="/",search:n="",hash:o=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function ci(e){let n={};if(e){let o=e.indexOf("#");o>=0&&(n.hash=e.substring(o),e=e.substring(0,o));let i=e.indexOf("?");i>=0&&(n.search=e.substring(i),e=e.substring(0,i)),e&&(n.pathname=e)}return n}function VC(e,n,o,i={}){let{window:a=document.defaultView,v5Compat:u=!1}=i,d=a.history,p="POP",h=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function w(){p="POP";let $=y(),k=$==null?null:$-m;m=$,h&&h({action:p,location:C.location,delta:k})}function b($,k){p="PUSH";let j=jf(C.location,$,k);m=y()+1;let S=Cg(j,m),R=C.createHref(j);try{d.pushState(S,"",R)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;a.location.assign(R)}u&&h&&h({action:p,location:C.location,delta:1})}function T($,k){p="REPLACE";let j=jf(C.location,$,k);m=y();let S=Cg(j,m),R=C.createHref(j);d.replaceState(S,"",R),u&&h&&h({action:p,location:C.location,delta:0})}function E($){let k=a.location.origin!=="null"?a.location.origin:a.location.href,j=typeof $=="string"?$:vs($);return j=j.replace(/ $/,"%20"),Ze(k,`No window.location.(origin|href) available to create URL for href: ${j}`),new URL(j,k)}let C={get action(){return p},get location(){return e(a,d)},listen($){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(jg,w),h=$,()=>{a.removeEventListener(jg,w),h=null}},createHref($){return n(a,$)},createURL:E,encodeLocation($){let k=E($);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:b,replace:T,go($){return d.go($)}};return C}function Jy(e,n,o="/"){return KC(e,n,o,!1)}function KC(e,n,o,i){let a=typeof n=="string"?ci(n):n,u=zr(a.pathname||"/",o);if(u==null)return null;let d=Zy(e);QC(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=oE(u);p=nE(d[h],m,i)}return p}function Zy(e,n=[],o=[],i=""){let a=(u,d,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};h.relativePath.startsWith("/")&&(Ze(h.relativePath.startsWith(i),`Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(i.length));let m=ar([i,h.relativePath]),y=o.concat(h);u.children&&u.children.length>0&&(Ze(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Zy(u.children,n,y,m)),!(u.path==null&&!u.index)&&n.push({path:m,score:eE(m,u.index),routesMeta:y})};return e.forEach((u,d)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))a(u,d);else for(let h of ew(u.path))a(u,d,h)}),n}function ew(e){let n=e.split("/");if(n.length===0)return[];let[o,...i]=n,a=o.endsWith("?"),u=o.replace(/\?$/,"");if(i.length===0)return a?[u,""]:[u];let d=ew(i.join("/")),p=[];return p.push(...d.map(h=>h===""?u:[u,h].join("/"))),a&&p.push(...d),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function QC(e){e.sort((n,o)=>n.score!==o.score?o.score-n.score:tE(n.routesMeta.map(i=>i.childrenIndex),o.routesMeta.map(i=>i.childrenIndex)))}var qC=/^:[\w-]+$/,GC=3,YC=2,XC=1,JC=10,ZC=-2,Eg=e=>e==="*";function eE(e,n){let o=e.split("/"),i=o.length;return o.some(Eg)&&(i+=ZC),n&&(i+=YC),o.filter(a=>!Eg(a)).reduce((a,u)=>a+(qC.test(u)?GC:u===""?XC:JC),i)}function tE(e,n){return e.length===n.length&&e.slice(0,-1).every((i,a)=>i===n[a])?e[e.length-1]-n[n.length-1]:0}function nE(e,n,o=!1){let{routesMeta:i}=e,a={},u="/",d=[];for(let p=0;p<i.length;++p){let h=i[p],m=p===i.length-1,y=u==="/"?n:n.slice(u.length)||"/",w=Ta({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y),b=h.route;if(!w&&m&&o&&!i[i.length-1].route.index&&(w=Ta({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!w)return null;Object.assign(a,w.params),d.push({params:a,pathname:ar([u,w.pathname]),pathnameBase:aE(ar([u,w.pathnameBase])),route:b}),w.pathnameBase!=="/"&&(u=ar([u,w.pathnameBase]))}return d}function Ta(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,i]=rE(e.path,e.caseSensitive,e.end),a=n.match(o);if(!a)return null;let u=a[0],d=u.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:i.reduce((m,{paramName:y,isOptional:w},b)=>{if(y==="*"){let E=p[b]||"";d=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const T=p[b];return w&&!T?m[y]=void 0:m[y]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:e}}function rE(e,n=!1,o=!0){Wn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(i.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),i]}function oE(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Wn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function zr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,i=e.charAt(o);return i&&i!=="/"?null:e.slice(o)||"/"}function iE(e,n="/"){let{pathname:o,search:i="",hash:a=""}=typeof e=="string"?ci(e):e;return{pathname:o?o.startsWith("/")?o:sE(o,n):n,search:cE(i),hash:uE(a)}}function sE(e,n){let o=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function wd(e,n,o,i){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lE(e){return e.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function tw(e){let n=lE(e);return n.map((o,i)=>i===n.length-1?o.pathname:o.pathnameBase)}function nw(e,n,o,i=!1){let a;typeof e=="string"?a=ci(e):(a={...e},Ze(!a.pathname||!a.pathname.includes("?"),wd("?","pathname","search",a)),Ze(!a.pathname||!a.pathname.includes("#"),wd("#","pathname","hash",a)),Ze(!a.search||!a.search.includes("#"),wd("#","search","hash",a)));let u=e===""||a.pathname==="",d=u?"/":a.pathname,p;if(d==null)p=o;else{let w=n.length-1;if(!i&&d.startsWith("..")){let b=d.split("/");for(;b[0]==="..";)b.shift(),w-=1;a.pathname=b.join("/")}p=w>=0?n[w]:"/"}let h=iE(a,p),m=d&&d!=="/"&&d.endsWith("/"),y=(u||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||y)&&(h.pathname+="/"),h}var ar=e=>e.join("/").replace(/\/\/+/g,"/"),aE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function dE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var rw=["POST","PUT","PATCH","DELETE"];new Set(rw);var fE=["GET",...rw];new Set(fE);var ui=g.createContext(null);ui.displayName="DataRouter";var ec=g.createContext(null);ec.displayName="DataRouterState";var ow=g.createContext({isTransitioning:!1});ow.displayName="ViewTransition";var pE=g.createContext(new Map);pE.displayName="Fetchers";var hE=g.createContext(null);hE.displayName="Await";var Un=g.createContext(null);Un.displayName="Navigation";var Cs=g.createContext(null);Cs.displayName="Location";var cr=g.createContext({outlet:null,matches:[],isDataRoute:!1});cr.displayName="Route";var Cp=g.createContext(null);Cp.displayName="RouteError";function mE(e,{relative:n}={}){Ze(Es(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:i}=g.useContext(Un),{hash:a,pathname:u,search:d}=$s(e,{relative:n}),p=u;return o!=="/"&&(p=u==="/"?o:ar([o,u])),i.createHref({pathname:p,search:d,hash:a})}function Es(){return g.useContext(Cs)!=null}function yo(){return Ze(Es(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(Cs).location}var iw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sw(e){g.useContext(Un).static||g.useLayoutEffect(e)}function di(){let{isDataRoute:e}=g.useContext(cr);return e?TE():gE()}function gE(){Ze(Es(),"useNavigate() may be used only in the context of a <Router> component.");let e=g.useContext(ui),{basename:n,navigator:o}=g.useContext(Un),{matches:i}=g.useContext(cr),{pathname:a}=yo(),u=JSON.stringify(tw(i)),d=g.useRef(!1);return sw(()=>{d.current=!0}),g.useCallback((h,m={})=>{if(Wn(d.current,iw),!d.current)return;if(typeof h=="number"){o.go(h);return}let y=nw(h,JSON.parse(u),a,m.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:ar([n,y.pathname])),(m.replace?o.replace:o.push)(y,m.state,m)},[n,o,u,a,e])}g.createContext(null);function $s(e,{relative:n}={}){let{matches:o}=g.useContext(cr),{pathname:i}=yo(),a=JSON.stringify(tw(o));return g.useMemo(()=>nw(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function xE(e,n){return lw(e,n)}function lw(e,n,o,i){var k;Ze(Es(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=g.useContext(Un),{matches:u}=g.useContext(cr),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",y=d&&d.route;{let j=y&&y.path||"";aw(h,!y||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let w=yo(),b;if(n){let j=typeof n=="string"?ci(n):n;Ze(m==="/"||((k=j.pathname)==null?void 0:k.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${j.pathname}" was given in the \`location\` prop.`),b=j}else b=w;let T=b.pathname||"/",E=T;if(m!=="/"){let j=m.replace(/^\//,"").split("/");E="/"+T.replace(/^\//,"").split("/").slice(j.length).join("/")}let C=Jy(e,{pathname:E});Wn(y||C!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Wn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=kE(C&&C.map(j=>Object.assign({},j,{params:Object.assign({},p,j.params),pathname:ar([m,a.encodeLocation?a.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?m:ar([m,a.encodeLocation?a.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),u,o,i);return n&&$?g.createElement(Cs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...b},navigationType:"POP"}},$):$}function yE(){let e=$E(),n=dE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:u},"ErrorBoundary")," or"," ",g.createElement("code",{style:u},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),o?g.createElement("pre",{style:a},o):null,d)}var wE=g.createElement(yE,null),vE=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?g.createElement(cr.Provider,{value:this.props.routeContext},g.createElement(Cp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bE({routeContext:e,match:n,children:o}){let i=g.useContext(ui);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(cr.Provider,{value:e},o)}function kE(e,n=[],o=null,i=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let a=e,u=o==null?void 0:o.errors;if(u!=null){let h=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Ze(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let d=!1,p=-1;if(o)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:y,errors:w}=o,b=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!w||w[m.route.id]===void 0);if(m.route.lazy||b){d=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((h,m,y)=>{let w,b=!1,T=null,E=null;o&&(w=u&&m.route.id?u[m.route.id]:void 0,T=m.route.errorElement||wE,d&&(p<0&&y===0?(aw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,E=null):p===y&&(b=!0,E=m.route.hydrateFallbackElement||null)));let C=n.concat(a.slice(0,y+1)),$=()=>{let k;return w?k=T:b?k=E:m.route.Component?k=g.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=h,g.createElement(bE,{match:m,routeContext:{outlet:h,matches:C,isDataRoute:o!=null},children:k})};return o&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?g.createElement(vE,{location:o.location,revalidation:o.revalidation,component:T,error:w,children:$(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):$()},null)}function Ep(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SE(e){let n=g.useContext(ui);return Ze(n,Ep(e)),n}function jE(e){let n=g.useContext(ec);return Ze(n,Ep(e)),n}function CE(e){let n=g.useContext(cr);return Ze(n,Ep(e)),n}function $p(e){let n=CE(e),o=n.matches[n.matches.length-1];return Ze(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function EE(){return $p("useRouteId")}function $E(){var i;let e=g.useContext(Cp),n=jE("useRouteError"),o=$p("useRouteError");return e!==void 0?e:(i=n.errors)==null?void 0:i[o]}function TE(){let{router:e}=SE("useNavigate"),n=$p("useNavigate"),o=g.useRef(!1);return sw(()=>{o.current=!0}),g.useCallback(async(a,u={})=>{Wn(o.current,iw),o.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:n,...u}))},[e,n])}var $g={};function aw(e,n,o){!n&&!$g[e]&&($g[e]=!0,Wn(!1,o))}g.memo(AE);function AE({routes:e,future:n,state:o}){return lw(e,void 0,o,n)}function aa(e){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function RE({basename:e="/",children:n=null,location:o,navigationType:i="POP",navigator:a,static:u=!1}){Ze(!Es(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),p=g.useMemo(()=>({basename:d,navigator:a,static:u,future:{}}),[d,a,u]);typeof o=="string"&&(o=ci(o));let{pathname:h="/",search:m="",hash:y="",state:w=null,key:b="default"}=o,T=g.useMemo(()=>{let E=zr(h,d);return E==null?null:{location:{pathname:E,search:m,hash:y,state:w,key:b},navigationType:i}},[d,h,m,y,w,b,i]);return Wn(T!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:g.createElement(Un.Provider,{value:p},g.createElement(Cs.Provider,{children:n,value:T}))}function DE({children:e,location:n}){return xE(Cf(e),n)}function Cf(e,n=[]){let o=[];return g.Children.forEach(e,(i,a)=>{if(!g.isValidElement(i))return;let u=[...n,a];if(i.type===g.Fragment){o.push.apply(o,Cf(i.props.children,u));return}Ze(i.type===aa,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||u.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=Cf(i.props.children,u)),o.push(d)}),o}var ca="get",ua="application/x-www-form-urlencoded";function tc(e){return e!=null&&typeof e.tagName=="string"}function IE(e){return tc(e)&&e.tagName.toLowerCase()==="button"}function PE(e){return tc(e)&&e.tagName.toLowerCase()==="form"}function NE(e){return tc(e)&&e.tagName.toLowerCase()==="input"}function ME(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function LE(e,n){return e.button===0&&(!n||n==="_self")&&!ME(e)}var ql=null;function OE(){if(ql===null)try{new FormData(document.createElement("form"),0),ql=!1}catch{ql=!0}return ql}var zE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vd(e){return e!=null&&!zE.has(e)?(Wn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ua}"`),null):e}function _E(e,n){let o,i,a,u,d;if(PE(e)){let p=e.getAttribute("action");i=p?zr(p,n):null,o=e.getAttribute("method")||ca,a=vd(e.getAttribute("enctype"))||ua,u=new FormData(e)}else if(IE(e)||NE(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||p.getAttribute("action");if(i=h?zr(h,n):null,o=e.getAttribute("formmethod")||p.getAttribute("method")||ca,a=vd(e.getAttribute("formenctype"))||vd(p.getAttribute("enctype"))||ua,u=new FormData(p,e),!OE()){let{name:m,type:y,value:w}=e;if(y==="image"){let b=m?`${m}.`:"";u.append(`${b}x`,"0"),u.append(`${b}y`,"0")}else m&&u.append(m,w)}}else{if(tc(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=ca,i=null,a=ua,d=e}return u&&a==="text/plain"&&(d=u,u=void 0),{action:i,method:o.toLowerCase(),encType:a,formData:u,body:d}}function Tp(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function FE(e,n){if(e.id in n)return n[e.id];try{let o=await import(e.module);return n[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BE(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function WE(e,n,o){let i=await Promise.all(e.map(async a=>{let u=n.routes[a.route.id];if(u){let d=await FE(u,o);return d.links?d.links():[]}return[]}));return KE(i.flat(1).filter(BE).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Tg(e,n,o,i,a,u){let d=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,p=(h,m)=>{var y;return o[m].pathname!==h.pathname||((y=o[m].route.path)==null?void 0:y.endsWith("*"))&&o[m].params["*"]!==h.params["*"]};return u==="assets"?n.filter((h,m)=>d(h,m)||p(h,m)):u==="data"?n.filter((h,m)=>{var w;let y=i.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let b=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function HE(e,n){return UE(e.map(o=>{let i=n.routes[o.route.id];if(!i)return[];let a=[i.module];return i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function UE(e){return[...new Set(e)]}function VE(e){let n={},o=Object.keys(e).sort();for(let i of o)n[i]=e[i];return n}function KE(e,n){let o=new Set;return new Set(n),e.reduce((i,a)=>{let u=JSON.stringify(VE(a));return o.has(u)||(o.add(u),i.push({key:u,link:a})),i},[])}function QE(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function qE(){let e=g.useContext(ui);return Tp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function GE(){let e=g.useContext(ec);return Tp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ap=g.createContext(void 0);Ap.displayName="FrameworkContext";function cw(){let e=g.useContext(Ap);return Tp(e,"You must render this element inside a <HydratedRouter> element"),e}function YE(e,n){let o=g.useContext(Ap),[i,a]=g.useState(!1),[u,d]=g.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:y,onTouchStart:w}=n,b=g.useRef(null);g.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let C=k=>{k.forEach(j=>{d(j.isIntersecting)})},$=new IntersectionObserver(C,{threshold:.5});return b.current&&$.observe(b.current),()=>{$.disconnect()}}},[e]),g.useEffect(()=>{if(i){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[i]);let T=()=>{a(!0)},E=()=>{a(!1),d(!1)};return o?e!=="intent"?[u,b,{}]:[u,b,{onFocus:ns(p,T),onBlur:ns(h,E),onMouseEnter:ns(m,T),onMouseLeave:ns(y,E),onTouchStart:ns(w,T)}]:[!1,b,{}]}function ns(e,n){return o=>{e&&e(o),o.defaultPrevented||n(o)}}function XE({page:e,...n}){let{router:o}=qE(),i=g.useMemo(()=>Jy(o.routes,e,o.basename),[o.routes,e,o.basename]);return i?g.createElement(ZE,{page:e,matches:i,...n}):null}function JE(e){let{manifest:n,routeModules:o}=cw(),[i,a]=g.useState([]);return g.useEffect(()=>{let u=!1;return WE(e,n,o).then(d=>{u||a(d)}),()=>{u=!0}},[e,n,o]),i}function ZE({page:e,matches:n,...o}){let i=yo(),{manifest:a,routeModules:u}=cw(),{loaderData:d,matches:p}=GE(),h=g.useMemo(()=>Tg(e,n,p,a,i,"data"),[e,n,p,a,i]),m=g.useMemo(()=>Tg(e,n,p,a,i,"assets"),[e,n,p,a,i]),y=g.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let T=new Set,E=!1;if(n.forEach($=>{var j;let k=a.routes[$.route.id];!k||!k.hasLoader||(!h.some(S=>S.route.id===$.route.id)&&$.route.id in d&&((j=u[$.route.id])!=null&&j.shouldRevalidate)||k.hasClientLoader?E=!0:T.add($.route.id))}),T.size===0)return[];let C=QE(e);return E&&T.size>0&&C.searchParams.set("_routes",n.filter($=>T.has($.route.id)).map($=>$.route.id).join(",")),[C.pathname+C.search]},[d,i,a,h,n,e,u]),w=g.useMemo(()=>HE(m,a),[m,a]),b=JE(m);return g.createElement(g.Fragment,null,y.map(T=>g.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...o})),w.map(T=>g.createElement("link",{key:T,rel:"modulepreload",href:T,...o})),b.map(({key:T,link:E})=>g.createElement("link",{key:T,...E})))}function e2(...e){return n=>{e.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})}}var uw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{uw&&(window.__reactRouterVersion="7.1.3")}catch{}function t2({basename:e,children:n,window:o}){let i=g.useRef();i.current==null&&(i.current=HC({window:o,v5Compat:!0}));let a=i.current,[u,d]=g.useState({action:a.action,location:a.location}),p=g.useCallback(h=>{g.startTransition(()=>d(h))},[d]);return g.useLayoutEffect(()=>a.listen(p),[a,p]),g.createElement(RE,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:a})}var dw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fw=g.forwardRef(function({onClick:n,discover:o="render",prefetch:i="none",relative:a,reloadDocument:u,replace:d,state:p,target:h,to:m,preventScrollReset:y,viewTransition:w,...b},T){let{basename:E}=g.useContext(Un),C=typeof m=="string"&&dw.test(m),$,k=!1;if(typeof m=="string"&&C&&($=m,uw))try{let ie=new URL(window.location.href),me=m.startsWith("//")?new URL(ie.protocol+m):new URL(m),fe=zr(me.pathname,E);me.origin===ie.origin&&fe!=null?m=fe+me.search+me.hash:k=!0}catch{Wn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=mE(m,{relative:a}),[S,R,M]=YE(i,b),K=i2(m,{replace:d,state:p,target:h,preventScrollReset:y,relative:a,viewTransition:w});function X(ie){n&&n(ie),ie.defaultPrevented||K(ie)}let ee=g.createElement("a",{...b,...M,href:$||j,onClick:k||u?n:X,ref:e2(T,R),target:h,"data-discover":!C&&o==="render"?"true":void 0});return S&&!C?g.createElement(g.Fragment,null,ee,g.createElement(XE,{page:j})):ee});fw.displayName="Link";var n2=g.forwardRef(function({"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:u,to:d,viewTransition:p,children:h,...m},y){let w=$s(d,{relative:m.relative}),b=yo(),T=g.useContext(ec),{navigator:E,basename:C}=g.useContext(Un),$=T!=null&&u2(w)&&p===!0,k=E.encodeLocation?E.encodeLocation(w).pathname:w.pathname,j=b.pathname,S=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;o||(j=j.toLowerCase(),S=S?S.toLowerCase():null,k=k.toLowerCase()),S&&C&&(S=zr(S,C)||S);const R=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let M=j===k||!a&&j.startsWith(k)&&j.charAt(R)==="/",K=S!=null&&(S===k||!a&&S.startsWith(k)&&S.charAt(k.length)==="/"),X={isActive:M,isPending:K,isTransitioning:$},ee=M?n:void 0,ie;typeof i=="function"?ie=i(X):ie=[i,M?"active":null,K?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let me=typeof u=="function"?u(X):u;return g.createElement(fw,{...m,"aria-current":ee,className:ie,ref:y,style:me,to:d,viewTransition:p},typeof h=="function"?h(X):h)});n2.displayName="NavLink";var r2=g.forwardRef(({discover:e="render",fetcherKey:n,navigate:o,reloadDocument:i,replace:a,state:u,method:d=ca,action:p,onSubmit:h,relative:m,preventScrollReset:y,viewTransition:w,...b},T)=>{let E=a2(),C=c2(p,{relative:m}),$=d.toLowerCase()==="get"?"get":"post",k=typeof p=="string"&&dw.test(p),j=S=>{if(h&&h(S),S.defaultPrevented)return;S.preventDefault();let R=S.nativeEvent.submitter,M=(R==null?void 0:R.getAttribute("formmethod"))||d;E(R||S.currentTarget,{fetcherKey:n,method:M,navigate:o,replace:a,state:u,relative:m,preventScrollReset:y,viewTransition:w})};return g.createElement("form",{ref:T,method:$,action:C,onSubmit:i?h:j,...b,"data-discover":!k&&e==="render"?"true":void 0})});r2.displayName="Form";function o2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pw(e){let n=g.useContext(ui);return Ze(n,o2(e)),n}function i2(e,{target:n,replace:o,state:i,preventScrollReset:a,relative:u,viewTransition:d}={}){let p=di(),h=yo(),m=$s(e,{relative:u});return g.useCallback(y=>{if(LE(y,n)){y.preventDefault();let w=o!==void 0?o:vs(h)===vs(m);p(e,{replace:w,state:i,preventScrollReset:a,relative:u,viewTransition:d})}},[h,p,m,o,i,n,e,a,u,d])}var s2=0,l2=()=>`__${String(++s2)}__`;function a2(){let{router:e}=pw("useSubmit"),{basename:n}=g.useContext(Un),o=EE();return g.useCallback(async(i,a={})=>{let{action:u,method:d,encType:p,formData:h,body:m}=_E(i,n);if(a.navigate===!1){let y=a.fetcherKey||l2();await e.fetch(y,o,a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||d,formEncType:a.encType||p,flushSync:a.flushSync})}else await e.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||d,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,n,o])}function c2(e,{relative:n}={}){let{basename:o}=g.useContext(Un),i=g.useContext(cr);Ze(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),u={...$s(e||".",{relative:n})},d=yo();if(e==null){u.search=d.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(y=>y==="")){p.delete("index"),h.filter(w=>w).forEach(w=>p.append("index",w));let y=p.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:ar([o,u.pathname])),vs(u)}function u2(e,n={}){let o=g.useContext(ow);Ze(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=pw("useViewTransitionState"),a=$s(e,{relative:n.relative});if(!o.isTransitioning)return!1;let u=zr(o.currentLocation.pathname,i)||o.currentLocation.pathname,d=zr(o.nextLocation.pathname,i)||o.nextLocation.pathname;return Ta(a.pathname,d)!=null||Ta(a.pathname,u)!=null}new TextEncoder;const St=[];for(let e=0;e<256;++e)St.push((e+256).toString(16).slice(1));function d2(e,n=0){return(St[e[n+0]]+St[e[n+1]]+St[e[n+2]]+St[e[n+3]]+"-"+St[e[n+4]]+St[e[n+5]]+"-"+St[e[n+6]]+St[e[n+7]]+"-"+St[e[n+8]]+St[e[n+9]]+"-"+St[e[n+10]]+St[e[n+11]]+St[e[n+12]]+St[e[n+13]]+St[e[n+14]]+St[e[n+15]]).toLowerCase()}let bd;const f2=new Uint8Array(16);function p2(){if(!bd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");bd=crypto.getRandomValues.bind(crypto)}return bd(f2)}const h2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ag={randomUUID:h2};function m2(e,n,o){var a;if(Ag.randomUUID&&!e)return Ag.randomUUID();e=e||{};const i=e.random??((a=e.rng)==null?void 0:a.call(e))??p2();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,d2(i)}function Ts(e){const n=[];for(const o of e.split("/"))if(!(o===""||o===".")){if(o===".."){n.pop();continue}n.push(o)}return n}function Nr(e){return"/"+Ts(e).join("/")}function He(...e){return Nr(e.join("/"))}function en(e){const n=Ts(e);return n.pop(),"/"+n.join("/")}function tn(e){const n=Ts(e);return n.length?n[n.length-1]:""}class Ce extends Error{constructor(n,o){super(o?`${n}: ${o}`:n),this.code=n,this.name="KernelError"}}const g2={spawn:"proc",kill:"proc",win_focus:"gui",win_move:"gui",open:"fs",read:"fs",write:"fs",close:"fs",readdir:"fs",stat:"fs",mkdir:"fs",unlink:"fs",rename:"fs"};class x2{constructor(n){Ne(this,"registry");Ne(this,"processes",new Map);Ne(this,"listeners",new Set);Ne(this,"persistence");Ne(this,"defaultLocation");Ne(this,"uid");Ne(this,"snapshot",[]);Ne(this,"vfs",null);Ne(this,"kernelFds",new Map);Ne(this,"nextFd",3);Ne(this,"panicListeners",new Set);Ne(this,"panicState",null);Ne(this,"subscribeFs",n=>this.vfs?this.vfs.subscribe(n):()=>{});Ne(this,"fsVersion",()=>{var n;return((n=this.vfs)==null?void 0:n.version())??0});Ne(this,"subscribe",n=>(this.listeners.add(n),()=>this.listeners.delete(n)));Ne(this,"getSnapshot",()=>this.snapshot);Ne(this,"subscribePanic",n=>(this.panicListeners.add(n),()=>this.panicListeners.delete(n)));Ne(this,"getPanic",()=>this.panicState);this.registry=n.registry,this.persistence=n.persistence,this.defaultLocation=n.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=n.uid??1e3,this.boot()}boot(){var o;const n=(o=this.persistence)==null?void 0:o.load();if(n)for(const i of n)this.registry.has(i.exec)&&this.processes.set(i.pid,this.hydrate(i));this.rebuildSnapshot()}hydrate(n){return{pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,icon:n.icon,argv:n.argv??[],state:n.state,priority:n.priority,window:n.window,cwd:n.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const n=this.snapshot.map(o=>({pid:o.pid,ppid:o.ppid,uid:o.uid,exec:o.exec,name:o.name,icon:o.icon,argv:o.argv,priority:o.priority,window:o.window,cwd:o.cwd,state:o.state}));this.persistence.save(n)}mountVfs(n){this.vfs=n}processInfo(){return this.sysPs()}panic(n){this.panicState={code:n.code??"0E",address:n.address??"0028:C000"+((this.snapshot.length*7+11)%65536).toString(16).toUpperCase().padStart(4,"0"),message:n.message,stack:n.stack,syscall:n.syscall,recoverable:n.recoverable??!0};for(const o of this.panicListeners)o(this.panicState)}clearPanic(){this.panicState=null;for(const n of this.panicListeners)n(null)}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const n of this.listeners)n()}syscall(n,o,i){try{return Promise.resolve(this.dispatch(n,o,i))}catch(a){if(!(a instanceof Ce)){const u=a;this.panic({message:(u==null?void 0:u.message)??String(a),stack:u==null?void 0:u.stack,syscall:o})}return Promise.reject(a)}}enforcePermission(n,o){var d;if(n===null)return;const i=g2[o];if(!i)return;const a=this.processes.get(n);if(!a)throw new Ce("ESRCH",`no process ${n}`);if(!(((d=this.registry.get(a.exec))==null?void 0:d.permissions)??[]).includes(i))throw new Ce("EACCES",`'${a.exec}' lacks '${i}' permission for ${o}`)}dispatch(n,o,i){var a;switch(this.enforcePermission(n,o),o){case"spawn":return this.sysSpawn(n,i);case"exit":return this.sysExit(n,i.code??0);case"kill":return this.sysKill(i.pid);case"getpid":return n;case"getargv":return n?((a=this.processes.get(n))==null?void 0:a.argv)??[]:[];case"ps":return this.sysPs();case"win_focus":return this.sysFocus(i.pid);case"win_move":return this.sysMove(i.pid,i.location);case"open":return this.sysOpen(n,i.path,i.flags);case"read":return this.sysRead(n,i.fd,i.len);case"write":return this.sysWrite(n,i.fd,i.data);case"close":return this.sysClose(n,i.fd);case"readdir":return this.fs().readdir(i.path);case"stat":return this.fs().stat(i.path);case"mkdir":return this.fs().mkdir(i.path);case"unlink":return this.fs().unlink(i.path);case"rename":return this.fs().rename(i.from,i.to);default:throw new Ce("ENOSYS",`unknown syscall: ${o}`)}}sysSpawn(n,o){const i=this.registry.get(o.exec);if(!i)throw new Ce("ENOENT",`no program "${o.exec}" in /bin`);const a=m2();for(const u of this.processes.values())u.priority+=1;return this.processes.set(a,{pid:a,ppid:n,uid:this.uid,exec:o.exec,name:o.name??i.name,icon:o.icon??i.icon,argv:o.argv??[],state:"running",priority:0,window:o.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(n){if(!this.processes.delete(n))throw new Ce("ESRCH",`no process ${n}`);this.commit()}sysExit(n,o){n&&this.sysKill(n)}sysPs(){return this.snapshot.map(n=>({pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,state:n.state,priority:n.priority}))}sysFocus(n){if(!this.processes.get(n))throw new Ce("ESRCH",`no process ${n}`);let i=0;for(const a of this.processes.values())a.priority=a.pid===n?0:++i;this.commit()}sysMove(n,o){const i=this.processes.get(n);if(!i)throw new Ce("ESRCH",`no process ${n}`);i.window=o,this.commit()}fs(){if(!this.vfs)throw new Ce("ENOSYS","no filesystem mounted");return this.vfs}fdTable(n){if(n===null)return this.kernelFds;const o=this.processes.get(n);if(!o)throw new Ce("ESRCH",`no process ${n}`);return o.fds}sysOpen(n,o,i){const a=this.fs(),u=Nr(o),d=a.exists(u),p=i==="w"||i==="a"||i==="rw";if(d)i==="w"&&a.write(u,new Uint8Array);else{if(!p)throw new Ce("ENOENT",u);a.write(u,new Uint8Array)}const h=i==="a"?a.stat(u).size:0,m=this.nextFd++;return this.fdTable(n).set(m,{path:u,flags:i,offset:h}),m}openFile(n,o){const i=this.fdTable(n).get(o);if(!i)throw new Ce("EBADF",`bad fd ${o}`);return i}sysRead(n,o,i){const a=this.openFile(n,o);if(a.flags!=="r"&&a.flags!=="rw")throw new Ce("EBADF","not opened for reading");const d=this.fs().read(a.path).slice(a.offset,a.offset+i);return a.offset+=d.length,d}sysWrite(n,o,i){const a=this.openFile(n,o);if(a.flags==="r")throw new Ce("EBADF","not opened for writing");const u=this.fs().read(a.path),d=a.offset+i.length,p=new Uint8Array(Math.max(u.length,d));return p.set(u),p.set(i,a.offset),this.fs().write(a.path,p),a.offset=d,i.length}sysClose(n,o){if(!this.fdTable(n).delete(o))throw new Ce("EBADF",`bad fd ${o}`)}}class y2{constructor(){Ne(this,"programs",new Map)}register(n){this.programs.set(n.exec,n)}unregister(n){return this.programs.delete(n)}get(n){return this.programs.get(n)}component(n){var o;return(o=this.programs.get(n))==null?void 0:o.component}has(n){return this.programs.has(n)}list(){return[...this.programs.values()]}}const w2="modulepreload",v2=function(e){return"/"+e},Rg={},wo=function(n,o,i){let a=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=Promise.allSettled(o.map(h=>{if(h=v2(h),h in Rg)return;Rg[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":w2,m||(w.as="script"),w.crossOrigin="",w.href=h,p&&w.setAttribute("nonce",p),document.head.appendChild(w),m)return new Promise((b,T)=>{w.addEventListener("load",b),w.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function u(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return a.then(d=>{for(const p of d||[])p.status==="rejected"&&u(p.reason);return n().catch(u)})};function We(e){return{exec:e.exec,name:e.name,icon:e.icon,component:e.component,permissions:e.permissions??[]}}const Et=L.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: ${e=>e.$minW??360}px;
    min-height: ${e=>e.$minH??240}px;
    background: #c0c0c0;
`,mn=L.div`
    flex: 1;
    min-height: 0;
    display: flex;
    overflow: hidden;
`,b2=L.div`
    display: flex;
    align-items: stretch;
    height: 20px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    font-size: 12px;
    flex-shrink: 0;
`,k2=L.button`
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
`,S2=L.div`
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
`,j2=L.div`
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
`,Ae=({icon:e,children:n,...o})=>l.jsxs(j2,{...o,children:[l.jsx("span",{style:{width:16,flexShrink:0,display:"inline-flex",justifyContent:"center"},children:e&&l.jsx("img",{src:e,alt:"",style:{width:16,height:16}})}),l.jsx("span",{style:{flex:1,display:"flex",justifyContent:"space-between",gap:18},children:n})]}),As=L.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`;function C2({label:e,accel:n}){const o=n??e[0],i=e.toLowerCase().indexOf(o.toLowerCase());return i<0?l.jsx(l.Fragment,{children:e}):l.jsxs(l.Fragment,{children:[e.slice(0,i),l.jsx("u",{children:e[i]}),e.slice(i+1)]})}const hw=g.createContext({openId:null,setOpenId:()=>{}}),gn=({children:e})=>{const[n,o]=g.useState(null),i=g.useRef(null);return g.useEffect(()=>{if(n===null)return;const a=d=>{var p;(p=i.current)!=null&&p.contains(d.target)||o(null)},u=d=>{d.key==="Escape"&&o(null)};return document.addEventListener("mousedown",a),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",u)}},[n]),l.jsx(hw.Provider,{value:{openId:n,setOpenId:o},children:l.jsx(b2,{ref:i,children:e})})},Fe=({label:e,accel:n,children:o,disabled:i,onOpen:a})=>{const u=g.useId(),{openId:d,setOpenId:p}=g.useContext(hw),h=d===u,m=()=>{i||(a==null||a(),p(u))},y=()=>i?void 0:h?p(null):m(),w=()=>{!i&&d!==null&&d!==u&&m()};return l.jsxs("div",{style:{position:"relative"},onMouseEnter:w,children:[l.jsx(k2,{$open:h,disabled:i,onClick:y,children:l.jsx(C2,{label:e,accel:n})}),h&&l.jsx(S2,{onClick:()=>p(null),children:o})]})},fi=L.div`
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
`,it=L.button`
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
`,En=L.div`
    width: 2px;
    height: 18px;
    margin: 0 3px;
    border-left: 1px solid #808080;
    border-right: 1px solid #ffffff;
`,E2=L.div`
    display: flex;
    align-items: stretch;
    gap: 2px;
    padding: 2px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    flex-shrink: 0;
    font-size: 11px;
`,Oe=L.div`
    flex: ${e=>e.$flex??0} 1 auto;
    min-width: 0;
    padding: 1px 6px;
    border: 1px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Pt=({children:e})=>l.jsxs(E2,{children:[e,l.jsx("div",{style:{width:14,alignSelf:"stretch",position:"relative"},children:l.jsx("svg",{viewBox:"0 0 14 14",width:"14",height:"100%",style:{position:"absolute",bottom:0,right:0},children:[0,1,2].map(n=>[0,1,2].filter(o=>o>=n).map(o=>l.jsxs("g",{children:[l.jsx("rect",{x:4+o*3,y:4+n*3,width:"2",height:"2",fill:"#ffffff"}),l.jsx("rect",{x:4+o*3,y:4+n*3,width:"1",height:"1",fill:"#808080"})]},`${n}-${o}`)))})})]});function $2(e,n){const o=(i,a)=>e.syscall(n,i,a);return{spawn:(i,a)=>o("spawn",{exec:i,...a}),exit:(i=0)=>o("exit",{code:i}),kill:i=>o("kill",{pid:i}),getpid:()=>o("getpid",{}),argv:()=>o("getargv",{}),ps:()=>o("ps",{}),focus:i=>o("win_focus",{pid:i}),move:(i,a)=>o("win_move",{pid:a??n,location:i}),open:(i,a="r")=>o("open",{path:i,flags:a}),read:(i,a)=>o("read",{fd:i,len:a}),write:(i,a)=>o("write",{fd:i,data:a}),close:i=>o("close",{fd:i}),readdir:i=>o("readdir",{path:i}),stat:i=>o("stat",{path:i}),mkdir:i=>o("mkdir",{path:i}),unlink:i=>o("unlink",{path:i}),rename:(i,a)=>o("rename",{from:i,to:a}),async readFile(i){const{size:a}=await o("stat",{path:i}),u=await o("open",{path:i,flags:"r"});try{return await o("read",{fd:u,len:a})}finally{await o("close",{fd:u})}},async writeFile(i,a){const u=await o("open",{path:i,flags:"w"});try{await o("write",{fd:u,data:a})}finally{await o("close",{fd:u})}},async readTextFile(i){return new TextDecoder().decode(await this.readFile(i))},async writeTextFile(i,a){await this.writeFile(i,new TextEncoder().encode(a))}}}const mw=g.createContext(null);function T2({pid:e,children:n}){return l.jsx(mw.Provider,{value:e,children:n})}function A2(){return g.useContext(mw)}function rn(){const e=Wr(),n=A2();return g.useMemo(()=>$2(e,n),[e,n])}const gw="vortex.recycle";function Rp(){try{return JSON.parse(localStorage.getItem(gw)||"{}")}catch{return{}}}function xw(e){localStorage.setItem(gw,JSON.stringify(e))}function yw(e,n){const o=Rp();o[e]=n,xw(o)}function R2(e){return Rp()[e]}function Dg(e){const n=Rp();delete n[e],xw(n)}const Dp="vortex.session";function nc(){try{const e=localStorage.getItem(Dp);return e?JSON.parse(e):null}catch{return null}}function D2(e){localStorage.setItem(Dp,JSON.stringify(e))}function ww(){localStorage.removeItem(Dp)}function rc(){var e;return((e=nc())==null?void 0:e.token)??null}function _r(){var e;return`/home/${((e=nc())==null?void 0:e.username)||"user"}`}let da=null;function Ig(e){da=e}function vw(){ww(),da==null||da()}const jt="/explorer.png",Fr="/notes.png",rs="/Recycle Bin";async function bw(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await bw(e,He(n,i));await e.unlink(n)}const I2=()=>{const e=rn(),[n,o]=g.useState([]),[i,a]=g.useState(null),u=g.useCallback(async()=>{await e.mkdir(rs).catch(()=>{});const h=await e.readdir(rs).catch(()=>[]),m=await Promise.all(h.map(async y=>{try{return{name:y,type:(await e.stat(He(rs,y))).type}}catch{return{name:y,type:"file"}}}));o(m),a(null)},[e]);g.useEffect(()=>{u()},[u]);const d=async()=>{if(!i)return;let h=R2(i)??He(_r(),i);await e.stat(en(h)).then(()=>!0).catch(()=>!1)||(h=He(_r(),i)),await e.rename(He(rs,i),h).catch(()=>{}),Dg(i),await u()},p=async()=>{for(const h of n)await bw(e,He(rs,h.name)).catch(()=>{}),Dg(h.name);await u()};return l.jsxs(Et,{$minW:420,$minH:280,children:[l.jsxs(gn,{children:[l.jsxs(Fe,{label:"File",children:[l.jsx(Ae,{$disabled:!i,onMouseDown:h=>{h.preventDefault(),d()},children:"Restore"}),l.jsx(As,{}),l.jsx(Ae,{$disabled:n.length===0,onMouseDown:h=>{h.preventDefault(),p()},children:"Empty Recycle Bin"})]}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Recycle Bin — VortexOS"})})]}),l.jsxs(fi,{children:[l.jsx(it,{onClick:d,disabled:!i,children:"↩ Restore"}),l.jsx(En,{}),l.jsx(it,{onClick:p,disabled:n.length===0,children:"🗑 Empty Recycle Bin"})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onClick:()=>a(null),children:n.length===0?l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#555"},children:"The Recycle Bin is empty."}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:n.map(h=>l.jsxs("div",{onClick:m=>{m.stopPropagation(),a(h.name)},style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:h.type==="dir"?jt:Fr,alt:h.type,style:{height:48,filter:i===h.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:i===h.name?"white":"black",backgroundColor:i===h.name?"#000080":"transparent"},children:h.name})]},h.name))})})}),l.jsx(Pt,{children:l.jsxs(Oe,{$flex:1,children:[n.length," object(s)"]})})]})};async function P2(){var e;try{if((e=navigator.storage)!=null&&e.estimate){const{usage:n=0,quota:o=0}=await navigator.storage.estimate();return{usage:n,quota:o,supported:!0}}}catch{}return{usage:0,quota:0,supported:!1}}function Dr(e){if(e<=0)return"0 B";const n=["B","KB","MB","GB","TB"],o=Math.min(n.length-1,Math.floor(Math.log(e)/Math.log(1024)));return`${(e/Math.pow(1024,o)).toFixed(o===0?0:1)} ${n[o]}`}function kw(){const[e,n]=g.useState(null);return g.useEffect(()=>{let o=!0;return P2().then(i=>{o&&n(i)}),()=>{o=!1}},[]),e}const ms="/my-computer.png",N2=()=>{const e=rn(),n=kw(),o=[{name:"VortexOS (C:)",path:"/",icon:ms},{name:"Home",path:_r(),icon:jt},{name:"Cloud (/mnt/cloud)",path:"/mnt/cloud",icon:jt},{name:"Public (/mnt/public)",path:"/mnt/public",icon:jt},{name:"Programs (/bin)",path:"/bin",icon:jt},{name:"Devices (/dev)",path:"/dev",icon:jt},{name:"Processes (/proc)",path:"/proc",icon:jt}],i=n&&n.quota>0?Math.min(100,n.usage/n.quota*100):0;return l.jsxs(Et,{$minW:420,$minH:280,children:[l.jsxs(gn,{children:[l.jsx(Fe,{label:"File",children:l.jsx(Ae,{$disabled:!0,children:"Open / Explore a drive"})}),l.jsx(Fe,{label:"View",children:l.jsx(Ae,{$disabled:!0,children:"Large Icons"})}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"My Computer — VortexOS"})})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:o.map(a=>l.jsxs("div",{onDoubleClick:()=>e.spawn("explorer",{argv:[a.path]}),title:"Double-click to open",style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:110,padding:10},children:[l.jsx("img",{src:a.icon,alt:"",style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:a.name})]},a.path))})})}),l.jsxs(wt,{variant:"well",className:"footer",style:{display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[l.jsxs("span",{style:{fontSize:12},children:[o.length," object(s)"]}),(n==null?void 0:n.supported)&&l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,marginLeft:"auto"},children:[l.jsx("span",{children:"Disk (C:):"}),l.jsx("span",{title:`${Dr(n.usage)} of ${Dr(n.quota)} used`,style:{width:90,height:12,border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff",position:"relative"},children:l.jsx("span",{style:{position:"absolute",inset:0,width:`${i}%`,background:"#000080"}})}),l.jsxs("span",{children:[Dr(n.usage)," / ",Dr(n.quota)]})]})]})]})},Sw=60;let fa=4,Aa=0,as=0,cs=0,Ef=!1;const $f=new Array(Sw).fill(0),Tf=new Array(Sw).fill(0);let jw=Cw();function Cw(){return{cpu:fa,mem:Aa,memBytes:as,memTotal:cs,cpuHistory:[...$f],memHistory:[...Tf],real:Ef}}const us=new Set;let Af=!1,Ip=0,pa=0,Rf=0,Ra=0,ha=null;function Ew(e){if(pa){const n=e-pa;Rf+=Math.max(0,n-16.7),Ra++}pa=e,Ip=requestAnimationFrame(Ew)}function M2(){const e=performance.memory;e&&e.jsHeapSizeLimit?(Ef=!0,as=e.usedJSHeapSize,cs=e.jsHeapSizeLimit,Aa=Math.min(100,Math.round(e.usedJSHeapSize/e.jsHeapSizeLimit*100))):(Ef=!1,cs=64*1024*1024,as=Math.min(cs,as+Ra%3*4096+1024),Aa=Math.min(95,Math.round(as/cs*100)))}function L2(){const e=Ra>0?Math.min(1,Rf/1e3):0,n=3+Math.round(e*97);fa=Math.round(fa*.5+n*.5),Rf=0,Ra=0,M2(),$f.push(fa),$f.shift(),Tf.push(Aa),Tf.shift(),jw=Cw(),us.forEach(o=>o())}function O2(){Af||(Af=!0,pa=0,Ip=requestAnimationFrame(Ew),ha=setInterval(L2,1e3))}function z2(){Af=!1,cancelAnimationFrame(Ip),ha&&clearInterval(ha),ha=null}function _2(){return jw}function $w(){return g.useSyncExternalStore(e=>(us.add(e),us.size===1&&O2(),()=>{us.delete(e),us.size===0&&z2()}),_2)}function F2(e,n){let o=0;for(let d=0;d<e.length;d++)o=o*31+e.charCodeAt(d)>>>0;const i=o%7,a=(o+n)%5,u=1.5+o%64+(o>>3)%10/10;return{cpu:i+a,mem:Math.round(u*10)/10}}const B2=()=>{const e=yc(),n=rn(),[o,i]=g.useState(0);g.useEffect(()=>{const u=setInterval(()=>i(d=>d+1),1e3);return()=>clearInterval(u)},[]);const a=["PID","Name","CPU","Mem","Pri",""];return l.jsxs(Gy,{style:{width:"100%"},children:[l.jsx(Qy,{children:l.jsx(kf,{children:a.map((u,d)=>l.jsx(qy,{children:u},d))})}),l.jsx(Ky,{children:e.map(u=>{const d=F2(u.pid,o);return l.jsxs(kf,{children:[l.jsx(oo,{style:{textAlign:"center"},children:u.pid.slice(0,8)}),l.jsx(oo,{children:u.name}),l.jsxs(oo,{style:{textAlign:"center"},children:[String(d.cpu).padStart(2,"0"),"%"]}),l.jsxs(oo,{style:{textAlign:"center"},children:[d.mem," MB"]}),l.jsx(oo,{style:{textAlign:"center"},children:u.priority===0?"High":"Normal"}),l.jsx(oo,{style:{textAlign:"center"},children:l.jsx(Ue,{size:"sm",onClick:()=>n.kill(u.pid),children:"End"})})]},u.pid)})})]})},Pg=({history:e,value:n,label:o,unit:i="%"})=>{const a=g.useRef(null);return g.useEffect(()=>{const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width,h=u.height;d.fillStyle="#000",d.fillRect(0,0,p,h),d.strokeStyle="#003b00",d.lineWidth=1;for(let y=0;y<=p;y+=16)d.beginPath(),d.moveTo(y,0),d.lineTo(y,h),d.stroke();for(let y=0;y<=h;y+=12)d.beginPath(),d.moveTo(0,y),d.lineTo(p,y),d.stroke();d.strokeStyle="#00ff00",d.lineWidth=1.5,d.beginPath();const m=e.length;e.forEach((y,w)=>{const b=w/(m-1)*p,T=h-Math.min(100,y)/100*h;w===0?d.moveTo(b,T):d.lineTo(b,T)}),d.stroke()},[e]),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:12,marginBottom:4},children:o}),l.jsx(wt,{variant:"well",style:{padding:2},children:l.jsx("canvas",{ref:a,width:220,height:96,style:{display:"block",width:"100%",height:96}})}),l.jsxs("div",{style:{fontSize:18,fontFamily:"monospace",textAlign:"center",marginTop:4},children:[n,i]})]})},W2=()=>{const e=$w();return l.jsxs("div",{style:{padding:12},children:[l.jsxs("div",{style:{display:"flex",gap:16},children:[l.jsx(Pg,{history:e.cpuHistory,value:e.cpu,label:"CPU Usage (main thread)"}),l.jsx(Pg,{history:e.memHistory,value:e.mem,label:"Memory Usage"})]}),l.jsxs(wt,{variant:"well",style:{marginTop:12,padding:10,fontSize:12,lineHeight:1.7},children:[l.jsxs("div",{children:[l.jsx("b",{children:"CPU:"})," ",e.cpu,"% (measured from frame timing — a browser tab can't read the host CPU)"]}),l.jsxs("div",{children:[l.jsx("b",{children:"Memory:"})," ",Dr(e.memBytes)," of ",Dr(e.memTotal)," ",e.real?"(real JS heap)":"(estimated)"]})]})]})},Tw=g.createContext({});function H2({children:e}){const[n,o]=g.useState("url(/win-cursor/arrow.cur), auto"),[i,a]=g.useState([]),u=le=>a(_=>_.includes(le)?_:[..._,le]),d=le=>a(_=>_.filter(D=>D!==le)),[p,h]=g.useState(()=>localStorage.getItem("vortex.crt")==="1"),m=()=>h(le=>{const _=!le;return localStorage.setItem("vortex.crt",_?"1":"0"),_}),[y,w]=g.useState(()=>localStorage.getItem("vortex.sss")!=="0"),b=()=>w(le=>{const _=!le;return localStorage.setItem("vortex.sss",_?"1":"0"),_}),[T,E]=g.useState(null),[C,$]=g.useState(()=>localStorage.getItem("vortex.theme")||"original"),k=le=>{localStorage.setItem("vortex.theme",le),$(le)},[j,S]=g.useState(!1),R=g.useRef(null),M=(le=550)=>{S(!0),R.current&&clearTimeout(R.current),R.current=setTimeout(()=>S(!1),le)},K=()=>{var le;return`vortex.wallpaper.${((le=nc())==null?void 0:le.username)||"user"}`},X=()=>{const le=localStorage.getItem(K())??localStorage.getItem("wallpaper");if(le===null)return{image:"",type:1};try{return JSON.parse(le)}catch{return{image:"",type:1}}},[ee,ie]=g.useState(X),me=le=>{localStorage.setItem(K(),JSON.stringify(le)),ie(le)},fe=()=>ie(X()),he=le=>{o(`url(/win-cursor/${le}), auto`)};return l.jsx(Tw.Provider,{value:{cursor:n,changeCursor:he,wallpaper:ee,changeWallpaper:me,reloadWallpaper:fe,minimized:i,minimize:u,restore:d,crt:p,toggleCrt:m,clipboard:T,setClipboard:E,theme:C,setTheme:k,busy:j,flashBusy:M,sssStyle:y,toggleSssStyle:b},children:e})}function Kt(){return g.useContext(Tw)}const U2=()=>{const{processes:e,changePriority:n,closeProcess:o}=Dn(),{minimized:i,restore:a}=Kt(),[u,d]=g.useState(null),p=h=>{h.uuid&&(a(h.uuid),n(h,0))};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[l.jsx("div",{style:{fontSize:12,marginBottom:6},children:"Task"}),l.jsxs(wt,{variant:"well",style:{flex:1,minHeight:80,overflow:"auto",background:"#fff"},children:[e.length===0&&l.jsx("div",{style:{padding:10,color:"#666"},children:"No tasks running."}),e.map(h=>{const m=!!h.uuid&&i.includes(h.uuid);return l.jsxs("div",{onClick:()=>d(h.uuid??null),onDoubleClick:()=>p(h),style:{display:"flex",alignItems:"center",gap:8,padding:"3px 6px",cursor:"pointer",background:u===h.uuid?"#000080":"transparent",color:u===h.uuid?"#fff":"#000"},children:[l.jsx("img",{src:h.icon,alt:"",style:{width:16,height:16}}),l.jsx("span",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:h.name}),l.jsx("span",{style:{fontSize:11,opacity:.8},children:m?"Background":"Running"})]},h.uuid)})]}),l.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end",marginTop:8},children:[l.jsx(Ue,{disabled:!u,onClick:()=>{const h=e.find(m=>m.uuid===u);h!=null&&h.uuid&&o(h.uuid),d(null)},children:"End Task"}),l.jsx(Ue,{disabled:!u,onClick:()=>{const h=e.find(m=>m.uuid===u);h&&p(h)},children:"Switch To"})]})]})},V2=()=>{const[e,n]=g.useState(0),o=$w(),{processes:i}=Dn();return l.jsxs(l.Fragment,{children:[l.jsxs(Br,{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[l.jsxs(Za,{value:e,onChange:a=>n(a),children:[l.jsx(Pr,{value:0,children:"Applications"}),l.jsx(Pr,{value:1,children:"Processes"}),l.jsx(Pr,{value:2,children:"Performance"})]}),l.jsxs(Ja,{style:{flex:1,minHeight:0,overflow:"auto"},children:[e===0&&l.jsx(U2,{}),e===1&&l.jsx(B2,{}),e===2&&l.jsx(W2,{})]})]}),l.jsxs(wt,{variant:"well",className:"footer",style:{display:"flex",gap:16,padding:"2px 8px",fontSize:11},children:[l.jsxs("span",{children:["Tasks: ",i.length]}),l.jsxs("span",{children:["CPU Usage: ",o.cpu,"%"]}),l.jsxs("span",{children:["Mem: ",o.mem,"%"]})]})]})},K2=L.div`
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
`,Q2=L.div`
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
`,q2=L.div`
    width: 22px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`,G2=L.span`
    margin-left: auto;
    padding-left: 22px;
    font-size: 11px;
    color: #555;
`,Y2=L.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`,X2=L.span`
    margin-left: auto;
    padding-left: 14px;
    font-size: 10px;
`,Ng=176,Aw=({items:e,x:n,y:o,onClose:i})=>{const[a,u]=g.useState(null);return l.jsx(K2,{style:{left:n,top:o},onMouseDown:d=>d.stopPropagation(),onContextMenu:d=>d.preventDefault(),children:e.map((d,p)=>{var m;if(d.separator)return l.jsx(Y2,{},p);const h=!!((m=d.submenu)!=null&&m.length);return l.jsxs(Q2,{$disabled:d.disabled,onMouseEnter:y=>{if(h&&!d.disabled){const w=y.currentTarget.getBoundingClientRect(),b=w.right+Ng>window.innerWidth;u({index:p,x:b?w.left-Ng+3:w.right-3,y:w.top-3})}else u(null)},onClick:()=>{var y;d.disabled||h||((y=d.onClick)==null||y.call(d),i())},children:[l.jsx(q2,{children:d.checked?"✓":d.bullet?"●":d.glyph?d.glyph:d.icon?l.jsx("img",{src:d.icon,alt:"",style:{width:16,height:16,objectFit:"contain"}}):""}),l.jsx("span",{children:d.label}),d.shortcut&&!h&&l.jsx(G2,{className:"ctx-shortcut",children:d.shortcut}),h&&l.jsx(X2,{children:"▶"}),h&&(a==null?void 0:a.index)===p&&l.jsx(Aw,{items:d.submenu,x:a.x,y:a.y,onClose:i})]},p)})})},ho=({items:e,x:n,y:o,onClose:i})=>{g.useEffect(()=>{const h=m=>{m.key==="Escape"&&i()};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]);const a=window.innerWidth,u=window.innerHeight,d=Math.min(n,a-180),p=Math.min(o,u-e.length*22-12);return Ut.createPortal(l.jsx(Aw,{items:e,x:d,y:Math.max(4,p),onClose:i}),document.body)},Rr=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement;function Mg(e,n,o){const i=e instanceof HTMLTextAreaElement?HTMLTextAreaElement.prototype:HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(i,"value").set.call(e,n),e.dispatchEvent(new Event("input",{bubbles:!0})),e.setSelectionRange(o,o)}function Lg(e,n){if(e.focus(),Rr(e))n&&"start"in n&&e.setSelectionRange(n.start,n.end);else if(n instanceof Range){const o=window.getSelection();o==null||o.removeAllRanges(),o==null||o.addRange(n)}}function J2(e,n){return Rr(e)&&n&&"start"in n?e.value.slice(n.start,n.end):n instanceof Range?n.toString():""}function Rw(e={}){var d;const[n,o]=g.useState(null),i=g.useRef(null),a=p=>{p.preventDefault();const h=p.currentTarget;if(Rr(h))i.current={start:h.selectionStart??0,end:h.selectionEnd??0};else{const m=window.getSelection();i.current=m&&m.rangeCount?m.getRangeAt(0).cloneRange():null}o({x:p.clientX,y:p.clientY,el:h})};g.useEffect(()=>{if(!n)return;const p=()=>o(null);return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[n]);let u=null;if(n){const p=n.el,h=i.current,m=Rr(p)?!!h&&"start"in h&&h.start!==h.end:h instanceof Range&&!h.collapsed,y=Rr(p)?!p.readOnly&&!p.disabled:p.isContentEditable,w=()=>{var $;const C=J2(p,h);C&&(($=navigator.clipboard)==null||$.writeText(C).catch(()=>{}))},b=()=>{Rr(p)&&h&&"start"in h?Mg(p,p.value.slice(0,h.start)+p.value.slice(h.end),h.start):(Lg(p,h),document.execCommand("delete"))},E=[{label:"Undo",shortcut:"Ctrl+Z",disabled:!y,onClick:()=>{p.focus(),document.execCommand("undo")}},{separator:!0},{label:"Cut",shortcut:"Ctrl+X",disabled:!m||!y,onClick:()=>{w(),b()}},{label:"Copy",shortcut:"Ctrl+C",disabled:!m,onClick:w},{label:"Paste",shortcut:"Ctrl+V",disabled:!y,onClick:()=>{var C;(C=navigator.clipboard)==null||C.readText().then($=>{if($)if(Rr(p)&&h&&"start"in h){const k=p.value.slice(0,h.start)+$+p.value.slice(h.end);Mg(p,k,h.start+$.length)}else Lg(p,h),document.execCommand("insertText",!1,$)}).catch(()=>{})}},{label:"Delete",shortcut:"Del",disabled:!m||!y,onClick:b},{separator:!0},{label:"Select All",shortcut:"Ctrl+A",onClick:()=>{p.focus(),Rr(p)?p.select():document.execCommand("selectAll")}},...(d=e.extra)!=null&&d.length?[{separator:!0},...e.extra]:[]];u=l.jsx(ho,{x:n.x,y:n.y,items:E,onClose:()=>o(null)})}return{openEditMenu:a,editMenu:u}}const Z2=()=>{const e=rn(),n=_r(),o=`${n}/welcome.txt`,[i,a]=g.useState(o),[u,d]=g.useState(""),[p,h]=g.useState(!1),[m,y]=g.useState([]),[w,b]=g.useState("Ready"),{openEditMenu:T,editMenu:E}=Rw(),C=g.useCallback(async S=>{try{const R=await e.readTextFile(S);a(S),d(R),h(!1),b(`Opened ${S}`)}catch(R){b(`Could not open ${S}: ${R.code??R.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[S]=await e.argv();await C(S||o)})()},[C,e]);const $=async()=>{try{y((await e.readdir(n)).filter(S=>S.endsWith(".txt")))}catch{y([])}},k=async()=>{try{await e.writeTextFile(i,u),h(!1),b(`Saved ${i}`)}catch(S){b(`Save failed: ${S.code??S.message}`)}},j=()=>{const S=window.prompt("New file name:","untitled.txt");S&&(a(`${n}/${S}`),d(""),h(!0),b(`New file ${S} — not saved yet`))};return l.jsxs(Et,{$minW:520,$minH:360,children:[l.jsxs(gn,{children:[l.jsxs(Fe,{label:"File",onOpen:$,children:[l.jsx(Ae,{onMouseDown:S=>{S.preventDefault(),j()},children:"New"}),l.jsxs(Ae,{onMouseDown:S=>{S.preventDefault(),k()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(As,{}),m.length===0?l.jsx(Ae,{$disabled:!0,children:"(no .txt files)"}):m.map(S=>l.jsx(Ae,{onMouseDown:R=>{R.preventDefault(),C(`${n}/${S}`)},children:S},S))]}),l.jsx(Fe,{label:"Edit",children:l.jsx(Ae,{onMouseDown:S=>{S.preventDefault(),d(""),h(!0)},children:"Select All / Clear"})}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Notes — VortexOS"})})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("textarea",{value:u,onChange:S=>{d(S.target.value),h(!0)},onContextMenu:T,spellCheck:!1,rows:20,style:{flex:1,width:"100%",height:"100%",resize:"none",boxSizing:"border-box",padding:6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",background:"#ffffff",fontFamily:"'ms_sans_serif', 'MS Sans Serif', sans-serif",fontSize:13,outline:"none"}})}),l.jsxs(Pt,{children:[l.jsxs(Oe,{$flex:1,children:[i,p?" •":""]}),l.jsx(Oe,{children:w})]}),E]})},Og=/\.(html?|rtf|doc)$/i,e8=["MS Sans Serif","Times New Roman","Courier New","Arial","Georgia"],t8=[1,2,3,4,5,6,7],n8=()=>{const e=rn(),n=_r(),o=g.useRef(null),[i,a]=g.useState(`${n}/document.html`),[u,d]=g.useState(""),[p,h]=g.useState([]),{openEditMenu:m,editMenu:y}=Rw(),w=(j,S)=>{var R;(R=o.current)==null||R.focus(),document.execCommand(j,!1,S)},b=g.useCallback(async j=>{try{const S=await e.readTextFile(j);o.current&&(o.current.innerHTML=S),a(j),d(`Opened ${j}`)}catch(S){d(`Could not open ${j}: ${S.code??S.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[j]=await e.argv();j?await b(j):o.current&&(o.current.innerHTML="<p>The quick brown fox jumps over the lazy dog.</p>")})()},[b,e]);const T=async()=>{try{h((await e.readdir(n)).filter(j=>Og.test(j)))}catch{h([])}},E=async()=>{var j;try{await e.writeTextFile(i,((j=o.current)==null?void 0:j.innerHTML)??""),d(`Saved ${i}`)}catch(S){d(`Save failed: ${S.code??S.message}`)}},C=async()=>{var R;const j=window.prompt("Save as:",i.split("/").pop()||"document.html");if(!j)return;const S=`${n}/${Og.test(j)?j:j+".html"}`;a(S);try{await e.writeTextFile(S,((R=o.current)==null?void 0:R.innerHTML)??""),d(`Saved ${S}`)}catch(M){d(`Save failed: ${M.code??M.message}`)}},$=()=>{o.current&&(o.current.innerHTML=""),a(`${n}/document.html`),d("New document")},k=(j,S,R)=>l.jsx(it,{onMouseDown:M=>M.preventDefault(),onClick:()=>w(S),style:R,children:j});return l.jsxs(Et,{$minW:560,$minH:400,children:[l.jsxs(gn,{children:[l.jsxs(Fe,{label:"File",onOpen:T,children:[l.jsx(Ae,{onMouseDown:j=>{j.preventDefault(),$()},children:"New"}),l.jsxs(Ae,{onMouseDown:j=>{j.preventDefault(),E()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(Ae,{onMouseDown:j=>{j.preventDefault(),C()},children:"Save As…"}),l.jsx(As,{}),p.length===0?l.jsx(Ae,{$disabled:!0,children:"(no documents)"}):p.map(j=>l.jsx(Ae,{onMouseDown:S=>{S.preventDefault(),b(`${n}/${j}`)},children:j},j))]}),l.jsxs(Fe,{label:"Edit",children:[l.jsx(Ae,{onMouseDown:j=>{j.preventDefault(),w("undo")},children:"Undo"}),l.jsx(Ae,{onMouseDown:j=>{j.preventDefault(),w("selectAll")},children:"Select All"})]}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"WordPad — VortexOS"})})]}),l.jsxs(fi,{children:[l.jsx("select",{onMouseDown:j=>j.stopPropagation(),onChange:j=>w("fontName",j.target.value),children:e8.map(j=>l.jsx("option",{value:j,children:j},j))}),l.jsx("select",{onChange:j=>w("fontSize",j.target.value),defaultValue:"3",children:t8.map(j=>l.jsx("option",{value:j,children:j},j))}),l.jsx(En,{}),k("B","bold",{fontWeight:"bold"}),k("I","italic",{fontStyle:"italic"}),k("U","underline",{textDecoration:"underline"}),l.jsx("input",{type:"color",onChange:j=>w("foreColor",j.target.value),title:"Text colour",style:{width:26,height:20,padding:0}}),l.jsx(En,{}),k("≡L","justifyLeft"),k("≡C","justifyCenter"),k("≡R","justifyRight"),k("• List","insertUnorderedList")]}),l.jsx(mn,{style:{padding:3},children:l.jsx(wt,{variant:"well",style:{flex:1,minHeight:0,display:"flex",flexDirection:"column",padding:0},children:l.jsx("div",{ref:o,contentEditable:!0,suppressContentEditableWarning:!0,onContextMenu:m,style:{flex:1,minHeight:300,overflow:"auto",padding:10,background:"#fff",outline:"none",fontFamily:"'Times New Roman', serif",fontSize:16}})})}),l.jsxs(Pt,{children:[l.jsx(Oe,{$flex:1,children:i}),l.jsx(Oe,{children:u||"Ready"})]}),y]})},r8="/image-file.svg",o8=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i;function Dw(e,n){return n?jt:o8.test(e)?r8:Fr}let os=null,Da=(()=>{const e=parseFloat(localStorage.getItem("vortex.volume")??"");return Number.isFinite(e)?e:.7})(),Pp=localStorage.getItem("vortex.muted")==="1";const Df=new Set,Iw=()=>Df.forEach(e=>e());function i8(e){return Df.add(e),()=>Df.delete(e)}function If(){return Da}function Pw(e){Da=Math.min(1,Math.max(0,e)),localStorage.setItem("vortex.volume",String(Da)),Iw()}function Pf(){return Pp}function Nw(e){Pp=e,localStorage.setItem("vortex.muted",e?"1":"0"),Iw()}function Vn(){try{if(!os){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;os=new e}return os.state==="suspended"&&os.resume(),os}catch{return null}}function yt(e,{freq:n,start:o,dur:i,type:a="sine",gain:u=.2}){const d=Pp?0:u*Da;if(d<=0)return;const p=e.createOscillator(),h=e.createGain();p.type=a,p.frequency.value=n;const m=e.currentTime+o;h.gain.setValueAtTime(1e-4,m),h.gain.linearRampToValueAtTime(d,m+.02),h.gain.exponentialRampToValueAtTime(1e-4,m+i),p.connect(h).connect(e.destination),p.start(m),p.stop(m+i+.05)}function s8(){const e=Vn();if(!e)return;[[261.63,"sine"],[329.63,"sine"],[392,"sine"],[523.25,"triangle"]].forEach(([o,i],a)=>yt(e,{freq:o,start:a*.18,dur:1.8,type:i,gain:.15}))}function l8(){const e=Vn();if(!e)return;[[261.63,"triangle"],[329.63,"triangle"],[392,"triangle"],[523.25,"sine"]].forEach(([o,i],a)=>yt(e,{freq:o,start:a*.13,dur:1.9,type:i,gain:.14})),[261.63,329.63,392,523.25].forEach(o=>yt(e,{freq:o,start:.55,dur:2.4,type:"sine",gain:.07})),yt(e,{freq:1046.5,start:.7,dur:1.6,type:"sine",gain:.06}),yt(e,{freq:1567.98,start:.78,dur:1.4,type:"sine",gain:.04})}function Np(){const e=Vn();e&&(yt(e,{freq:880,start:0,dur:.16,type:"sine",gain:.22}),yt(e,{freq:1318.51,start:0,dur:.4,type:"sine",gain:.1}))}function Xo(){const e=Vn();e&&yt(e,{freq:200,start:0,dur:.05,type:"square",gain:.05})}function mo(){const e=Vn();e&&[523.25,659.25,783.99].forEach((n,o)=>yt(e,{freq:n,start:o*.04,dur:.5,gain:.11}))}function a8(){const e=Vn();e&&(yt(e,{freq:440,start:0,dur:.08,type:"triangle",gain:.09}),yt(e,{freq:660,start:.05,dur:.1,type:"triangle",gain:.09}))}function c8(){const e=Vn();e&&(yt(e,{freq:520,start:0,dur:.08,type:"triangle",gain:.08}),yt(e,{freq:320,start:.05,dur:.12,type:"triangle",gain:.08}))}function u8(){const e=Vn();e&&(yt(e,{freq:600,start:0,dur:.12,type:"sine",gain:.08}),yt(e,{freq:300,start:.04,dur:.12,type:"sine",gain:.08}))}function d8(){const e=Vn();e&&(yt(e,{freq:300,start:0,dur:.12,type:"sine",gain:.08}),yt(e,{freq:600,start:.04,dur:.12,type:"sine",gain:.08}))}function f8(){const e=Vn();e&&[523.25,392,329.63,261.63].forEach((n,o)=>yt(e,{freq:n,start:o*.18,dur:.7,type:"sine",gain:.15}))}const p8="linear-gradient(90deg, #000080 0%, #1084d0 100%)",h8="linear-gradient(90deg, #808080 0%, #b5b5b5 100%)",Rs=(e=!0)=>({background:e?p8:h8,color:e?"#ffffff":"#dfdfdf",fontWeight:"bold"}),Mw=g.createContext({alert:async()=>{}}),Ds=()=>g.useContext(Mw),m8=({type:e})=>{const n={width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"#fff",borderRadius:"50%"};return e==="error"?l.jsx("div",{style:{...n,background:"#d40000",fontSize:20},children:"✕"}):e==="warning"?l.jsxs("div",{style:{width:36,height:34,flexShrink:0,position:"relative"},children:[l.jsx("div",{style:{width:0,height:0,borderLeft:"18px solid transparent",borderRight:"18px solid transparent",borderBottom:"32px solid #ffd000"}}),l.jsx("span",{style:{position:"absolute",left:15,top:9,fontWeight:"bold",color:"#000"},children:"!"})]}):l.jsx("div",{style:{...n,background:"#000080",fontStyle:"italic",fontFamily:"Georgia, serif",fontSize:22},children:"i"})};function g8({children:e}){const[n,o]=g.useState(null),i=g.useCallback(u=>(Np(),new Promise(d=>{o({title:u.title??"VortexOS",message:u.message,type:u.type??"info",resolve:d})})),[]),a=()=>{n==null||n.resolve(),o(null)};return g.useEffect(()=>{if(!n)return;const u=d=>{(d.key==="Enter"||d.key==="Escape")&&a()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[n]),l.jsxs(Mw.Provider,{value:{alert:i},children:[e,n&&l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.08)"},children:l.jsxs(ai,{style:{minWidth:330,maxWidth:420},children:[l.jsxs(li,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",...Rs(!0)},children:[l.jsx("span",{children:n.title}),l.jsx(Ue,{onClick:a,style:{width:20,height:18,minWidth:0,padding:0,fontWeight:"bold"},children:"✕"})]}),l.jsxs(Br,{children:[l.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[l.jsx(m8,{type:n.type}),l.jsx("p",{style:{whiteSpace:"pre-line",lineHeight:1.4},children:n.message})]}),l.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:l.jsx(Ue,{onClick:a,style:{minWidth:84},primary:!0,children:"OK"})})]})]})})]})}const kd="/Recycle Bin";async function Lw(e,n,o){if((await e.stat(n)).type==="dir"){await e.mkdir(o);for(const a of await e.readdir(n))await Lw(e,He(n,a),He(o,a))}else await e.writeFile(o,await e.readFile(n))}function Gl(e,n){if(!e.includes(n))return n;const o=n.lastIndexOf("."),i=o>0?n.slice(0,o):n,a=o>0?n.slice(o):"";for(let u=2;;u++){const d=`${i} (${u})${a}`;if(!e.includes(d))return d}}const x8=()=>{const e=rn(),{clipboard:n,setClipboard:o}=Kt(),{alert:i}=Ds(),[a,u]=g.useState("/"),[d,p]=g.useState([]),[h,m]=g.useState(null),[y,w]=g.useState(""),[b,T]=g.useState(null),[E,C]=g.useState(null),[$,k]=g.useState(""),j=g.useRef(null),S=g.useCallback(async I=>{try{const H=await e.readdir(I),W=await Promise.all(H.map(async B=>{try{const N=await e.stat(He(I,B));return{name:B,type:N.type,size:N.size}}catch{return{name:B,type:"file",size:0}}}));W.sort((B,N)=>B.type===N.type?B.name.localeCompare(N.name):B.type==="dir"?-1:1),u(I),p(W),m(null),w(`${W.length} object(s)`)}catch(H){w(`Cannot open ${I}: ${H.code??H.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[I]=await e.argv();await S(I||"/")})()},[S,e]),g.useEffect(()=>{if(!b)return;const I=()=>T(null);return document.addEventListener("click",I),()=>document.removeEventListener("click",I)},[b]);const R=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,M=/\.(mp3|wav|ogg|m4a|flac)$/i,K=I=>{const H=He(a,I.name);I.type==="dir"?S(H):R.test(I.name)?e.spawn("imageviewer",{argv:[H]}):M.test(I.name)?e.spawn("mediaplayer",{argv:[H]}):e.spawn("notes",{argv:[H]})},X=async()=>{const I=Gl(d.map(H=>H.name),"New Folder");try{await e.mkdir(He(a,I)),await S(a),me(I)}catch(H){i({title:"Error",message:`Could not create folder: ${H.code??H.message}`,type:"error"})}},ee=async()=>{const I=Gl(d.map(H=>H.name),"New Text Document.txt");try{await e.writeTextFile(He(a,I),""),await S(a),me(I)}catch(H){i({title:"Error",message:`Could not create file: ${H.code??H.message}`,type:"error"})}},ie=async I=>{const H=He(a,I);try{await e.mkdir(kd).catch(()=>{});const W=await e.readdir(kd).catch(()=>[]),B=Gl(W,I);await e.rename(H,He(kd,B)),yw(B,H),await S(a)}catch(W){i({title:"Delete",message:`Could not delete "${I}": ${W.code??W.message}`,type:"error"})}},me=I=>{m(I),C(I),k(I)},fe=async()=>{if(!E)return;const I=$.trim(),H=E;if(C(null),!(!I||I===H))try{await e.rename(He(a,H),He(a,I)),await S(a)}catch(W){i({title:"Rename",message:`Could not rename: ${W.code??W.message}`,type:"error"})}},he=async()=>{if(!n)return;const I=n.path,H=He(a,Gl(d.map(W=>W.name),tn(I)));try{n.op==="cut"?(await e.rename(I,H),o(null)):await Lw(e,I,H),await S(a)}catch(W){i({title:"Paste",message:`Could not paste: ${W.code??W.message}`,type:"error"})}},le=I=>{i({title:`${I.name} Properties`,message:`Name: ${I.name}
Type: ${I.type==="dir"?"File Folder":"File"}
Location: ${a}
Size: ${I.type==="dir"?"—":`${I.size} byte(s)`}`,type:"info"})},_=(I,H)=>{I.preventDefault(),I.stopPropagation(),H&&m(H.name),T({x:I.clientX,y:I.clientY,entry:H})},D=I=>{E||(I.key==="Delete"&&h?ie(h):I.key==="F2"&&h&&me(h))};return l.jsxs(Et,{ref:j,tabIndex:0,onKeyDown:D,$minW:560,$minH:360,style:{outline:"none"},children:[l.jsxs(gn,{children:[l.jsxs(Fe,{label:"File",children:[l.jsx(Ae,{icon:jt,onMouseDown:I=>{I.preventDefault(),X()},children:"New Folder"}),l.jsx(Ae,{icon:Fr,onMouseDown:I=>{I.preventDefault(),ee()},children:"New Text Document"})]}),l.jsx(Fe,{label:"Edit",children:l.jsxs(Ae,{$disabled:!n,onMouseDown:I=>{I.preventDefault(),he()},children:["Paste",l.jsx("span",{children:"Ctrl+V"})]})}),l.jsxs(Fe,{label:"View",children:[l.jsxs(Ae,{onMouseDown:I=>{I.preventDefault(),S(a)},children:["Refresh",l.jsx("span",{children:"F5"})]}),l.jsx(As,{}),l.jsx(Ae,{$disabled:a==="/",onMouseDown:I=>{I.preventDefault(),S(en(a))},children:"Up One Level"})]}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Explorer — VortexOS"})})]}),l.jsxs(fi,{children:[l.jsx(it,{onClick:()=>S(en(a)),disabled:a==="/",children:"↑ Up"}),l.jsx(it,{onClick:()=>S(a),children:"⟳ Refresh"}),l.jsx(En,{}),l.jsx(it,{onClick:X,children:"New Folder"}),l.jsx(En,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Address:"}),l.jsx("input",{defaultValue:a,onKeyDown:I=>{I.key==="Enter"&&S(I.target.value)},style:{flex:1,minWidth:120}},a)]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onContextMenu:I=>_(I,null),onClick:()=>m(null),children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",alignContent:"flex-start"},children:d.map(I=>l.jsxs("div",{onClick:H=>{H.stopPropagation(),m(I.name)},onDoubleClick:()=>K(I),onContextMenu:H=>_(H,I),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:Dw(I.name,I.type==="dir"),alt:I.type,style:{height:48,filter:h===I.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),E===I.name?l.jsx(lr,{value:$,onChange:H=>k(H.target.value),onBlur:fe,onKeyDown:H=>{H.key==="Enter"&&fe(),H.key==="Escape"&&C(null)},autoFocus:!0,style:{width:80}}):l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:h===I.name?"white":"black",backgroundColor:h===I.name?"#000080":"transparent"},children:I.name})]},I.name))})})}),l.jsxs(Pt,{children:[l.jsx(Oe,{$flex:1,children:y||"Explorer"}),l.jsxs(Oe,{children:[d.length," object(s)"]})]}),b&&(b.entry?l.jsx(ho,{x:b.x,y:b.y,onClose:()=>T(null),items:[{label:"Open",glyph:"▸",onClick:()=>K(b.entry)},{separator:!0},{label:"Cut",shortcut:"Ctrl+X",onClick:()=>o({op:"cut",path:He(a,b.entry.name)})},{label:"Copy",shortcut:"Ctrl+C",onClick:()=>o({op:"copy",path:He(a,b.entry.name)})},{separator:!0},{label:"Delete",glyph:"🗑",onClick:()=>ie(b.entry.name)},{label:"Rename",shortcut:"F2",onClick:()=>me(b.entry.name)},{separator:!0},{label:"Properties",onClick:()=>le(b.entry)}]}):l.jsx(ho,{x:b.x,y:b.y,onClose:()=>T(null),items:[{label:"New",submenu:[{label:"Folder",icon:jt,onClick:X},{label:"Text Document",icon:Fr,onClick:ee}]},{separator:!0},{label:"Paste",shortcut:"Ctrl+V",disabled:!n,onClick:he},{label:"Refresh",glyph:"⟳",onClick:()=>S(a)}]}))]})};var Sd,zg;function y8(){if(zg)return Sd;zg=1;var e={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return Sd=e,Sd}var w8=y8();const v8=An(w8);var jd,_g;function b8(){if(_g)return jd;_g=1;var e={name:"ash",anchor:"rgb(192, 192, 192)",anchorVisited:"rgb(192, 192, 192)",borderDark:"rgb(63, 63, 63)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(115, 115, 115)",borderLightest:"rgb(175, 175, 175)",canvas:"rgb(64, 64, 64)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(63, 63, 63)",canvasTextDisabledShadow:"rgb(175, 175, 175)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(128, 128, 128)",desktopBackground:"rgb(0, 0, 0)",flatDark:"rgb(63, 63, 63)",flatLight:"rgb(96, 96, 96)",focusSecondary:"rgb(175, 175, 175)",headerBackground:"linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))",headerNotActiveBackground:"linear-gradient(to right, rgb(63, 63, 63), rgb(0, 0, 0))",headerNotActiveText:"rgb(128, 128, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(0, 0, 0)",material:"rgb(96, 96, 96)",materialDark:"rgb(63, 63, 63)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(63, 63, 63)",materialTextDisabledShadow:"rgb(175, 175, 175)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(0, 0, 0)",tooltip:"rgb(0, 0, 0)"};return jd=e,jd}var k8=b8();const S8=An(k8);var Cd,Fg;function j8(){if(Fg)return Cd;Fg=1;var e={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"};return Cd=e,Cd}var C8=j8();const E8=An(C8);var Ed,Bg;function $8(){if(Bg)return Ed;Bg=1;var e={name:"matrix",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#282828",borderDarkest:"#000000",borderLight:"#656565",borderLightest:"#a7a7a7",canvas:"#c0c0c0",canvasText:"#000000",canvasTextDisabled:"#282828",canvasTextDisabledShadow:"#ff0000",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#282828",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#35FF69",headerBackground:"#000000",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#535353",headerText:"#a7a7a7",hoverBackground:"#000000",material:"#535353",materialDark:"#282828",materialText:"#35FF69",materialTextDisabled:"#282828",materialTextDisabledShadow:"#a7a7a7",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return Ed=e,Ed}var T8=$8();const A8=An(T8);var $d,Wg;function R8(){if(Wg)return $d;Wg=1;var e={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"};return $d=e,$d}var D8=R8();const I8=An(D8);var Td,Hg;function P8(){if(Hg)return Td;Hg=1;var e={name:"ninjaTurtles",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#017401",borderDarkest:"#000000",borderLight:"#1dbc1b",borderLightest:"#55fd55",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#017401",canvasTextDisabledShadow:"#55fd55",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#017401",desktopBackground:"#045424",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#FF1D15",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#FABC3C",material:"#00a800",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#017401",materialTextDisabledShadow:"#55fd55",materialTextInvert:"#000000",progress:"#FF1D15",tooltip:"#fefbcc"};return Td=e,Td}var N8=P8();const M8=An(N8);var Ad,Ug;function L8(){if(Ug)return Ad;Ug=1;var e={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"};return Ad=e,Ad}var O8=L8();const z8=An(O8);var Rd,Vg;function _8(){if(Vg)return Rd;Vg=1;var e={name:"lilac",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#5f549b",borderDarkest:"#1c1449",borderLight:"#bcb4e9",borderLightest:"#d3ccf4",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#5f549b",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#5f549b",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#5e4dba",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#5e4dba",material:"#b1a7df",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#5f549b",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#5e4dba",tooltip:"#fefbcc"};return Rd=e,Rd}var F8=_8();const B8=An(F8);var Dd,Kg;function W8(){if(Kg)return Dd;Kg=1;var e={name:"blackAndWhite",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#000000",borderLight:"#dfe0e3",borderLightest:"#888c8f",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#888c8f",desktopBackground:"#ffffff",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000000",headerNotActiveBackground:"#ffffff",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#000000",material:"#ffffff",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return Dd=e,Dd}var H8=W8();const U8=An(H8);var Id,Qg;function V8(){if(Qg)return Id;Qg=1;var e={name:"highContrast",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#ffffff",borderLight:"#dfe0e3",borderLightest:"#ffffff",canvas:"#353535",canvasText:"#ffffff",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#ffffff",checkmarkDisabled:"#888c8f",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#8e0284",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#8e0284",material:"#000000",materialDark:"#9a9e9c",materialText:"#ffffff",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0284",tooltip:"#fefbcc"};return Id=e,Id}var K8=V8();const Q8=An(K8),Nf={original:{name:"Windows Standard",theme:v8},ash:{name:"Ash (Win98)",theme:S8},marine:{name:"Marine",theme:z8},rainyDay:{name:"Rainy Day",theme:I8},candy:{name:"Candy",theme:E8},lilac:{name:"Lilac",theme:B8},ninjaTurtles:{name:"Ninja Turtles",theme:M8},matrix:{name:"Matrix",theme:A8},blackAndWhite:{name:"Black & White",theme:U8},highContrast:{name:"High Contrast",theme:Q8}},q8="original";function G8(e){return(Nf[e]??Nf[q8]).theme}const Ow="vortex.screensaver",qg={type:"starfield",wait:3};function Y8(){try{return{...qg,...JSON.parse(localStorage.getItem(Ow)||"{}")}}catch{return{...qg}}}let ma=Y8();const Mf=new Set,Lf=new Set;function zw(){return ma}function Gg(e){ma={...ma,...e},localStorage.setItem(Ow,JSON.stringify(ma)),Mf.forEach(n=>n())}function X8(e){return Mf.add(e),()=>Mf.delete(e)}function _w(){return g.useSyncExternalStore(X8,zw)}function J8(){Lf.forEach(e=>e())}function Z8(e){return Lf.add(e),()=>Lf.delete(e)}const e$=[{key:"none",name:"(None)"},{key:"starfield",name:"Starfield Simulation"},{key:"mystify",name:"Mystify Your Mind"},{key:"pipes",name:"3D Pipes"}],Yg={reduceMotion:!1,uiScale:100,showClock:!0,clock24h:!1,clockSeconds:!1,pointerScheme:"arrow.cur",desktopIconSize:"normal",showDesktopIcons:!0,showQuickLaunch:!0,liveDrag:!1,windowSnap:!0,singleClickOpen:!1,accentColor:"#000080",autoHideTaskbar:!1,dateFormat:"short",firstDayMonday:!1},t$={small:{icon:32,cell:64,font:11},normal:{icon:42,cell:76,font:12},large:{icon:56,cell:92,font:13}},Fw="vortex.settings";function n$(){try{const e=JSON.parse(localStorage.getItem(Fw)??"{}");return{...Yg,...e&&typeof e=="object"?e:{}}}catch{return{...Yg}}}let ga=n$();const Of=new Set,r$=()=>Of.forEach(e=>e());function o$(){return ga}function nt(e,n){ga={...ga,[e]:n},localStorage.setItem(Fw,JSON.stringify(ga)),r$()}function on(){return g.useSyncExternalStore(e=>(Of.add(e),()=>Of.delete(e)),o$)}const i$=[{key:"background",label:"Background"},{key:"appearance",label:"Appearance"},{key:"screensaver",label:"Screen Saver"},{key:"effects",label:"Effects"}],s$=L.div`
    display: flex;
    gap: 3px;
    padding: 8px 10px 0;
`,l$=L.button`
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
`,a$=L.div`
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    margin: 0 10px 10px;
    padding: 16px;
    background: #c0c0c0;
`,ro=L.p`
    font-weight: bold;
    margin: 0 0 8px;
`,Yl=L.p`
    font-size: 12px;
    color: #444;
    margin: 6px 0 0;
`,c$=[{name:"Vaporwave",count:7,prefix:"vw",ext:"jpg"},{name:"Windows XP",count:5,prefix:"xp",ext:"jpg"},{name:"Windows 7",count:4,prefix:"7",ext:"jpg"},{name:"Games",count:1,prefix:"games",ext:"png"}],u$=["#008080","#000080","#000000","#1a0033","#2e0d4f","#004b40","#800000","#3a3a3a"],d$=["#000080","#1084d0","#a0117a","#0a8043","#b8860b","#800000","#5a2d8c","#c0392b","#0d7377","#000000"],f$=L.div`
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
`,Pd=L.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Xg=L.div`
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 3px solid ${({$selected:e})=>e?"#000080":"#808080"};
    &:hover {
        border-color: #1084d0;
    }
`,p$=()=>{const{changeWallpaper:e,wallpaper:n,crt:o,toggleCrt:i,theme:a,setTheme:u,sssStyle:d,toggleSssStyle:p}=Kt(),h=_w(),m=on(),[y,w]=g.useState("background"),[b,T]=g.useState(n.image||""),[E,C]=g.useState(n.type||1),$=b?E===2?{background:b}:{backgroundImage:`url('/${b}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:d?"#1a0033":"#008080"};return l.jsxs("div",{style:{minHeight:420},children:[l.jsx(s$,{children:i$.map(k=>l.jsx(l$,{$active:y===k.key,onClick:()=>w(k.key),children:k.label},k.key))}),l.jsxs(a$,{children:[y==="background"&&l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:l.jsx(Fy,{backgroundStyles:$})}),l.jsx(ro,{children:"Solid colors"}),l.jsx(Pd,{style:{marginBottom:16},children:u$.map(k=>l.jsx(Xg,{$selected:b===k&&E===2,style:{background:k},onClick:()=>{T(k),C(2)}},k))}),c$.map(k=>l.jsxs("div",{style:{marginBottom:14},children:[l.jsx(ro,{children:k.name}),l.jsx(Pd,{children:Array.from({length:k.count},(j,S)=>S+1).map(j=>{const S=`wallpapers/${k.prefix}-${j}.${k.ext}`;return l.jsx(f$,{$selected:b===S,style:{backgroundImage:`url('/${S}')`},onClick:()=>{T(S),C(1)},title:`${k.name} ${j}`},S)})})]},k.name)),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:8},children:[l.jsx(Ue,{onClick:()=>{T(""),e({image:"",type:1})},children:"Default"}),l.jsx(Ue,{onClick:()=>e({image:b,type:E}),disabled:!b,children:"Apply"})]})]}),y==="appearance"&&l.jsxs("div",{children:[l.jsx(ro,{children:"Color scheme"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:6,marginBottom:16},children:Object.entries(Nf).map(([k,j])=>{const S=j.headerBackground||"#000080",R=j.material||"#c0c0c0";return l.jsxs("div",{onClick:()=>u(k),style:{display:"flex",alignItems:"center",gap:8,padding:6,cursor:"pointer",background:a===k?"#000080":"#fff",color:a===k?"#fff":"#000",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:[l.jsxs("div",{style:{display:"flex",flexShrink:0,border:"1px solid #000"},children:[l.jsx("div",{style:{width:14,height:24,background:S}}),l.jsx("div",{style:{width:14,height:24,background:R}})]}),l.jsx("span",{style:{fontSize:13},children:j.name})]},k)})}),l.jsx(ro,{children:"Accent colour"}),l.jsx(Pd,{style:{marginBottom:16},children:d$.map(k=>l.jsx(Xg,{$selected:m.accentColor.toLowerCase()===k.toLowerCase(),style:{background:k,width:36,height:36},onClick:()=>nt("accentColor",k),title:k},k))}),l.jsx(Yl,{style:{marginTop:0,marginBottom:14},children:"Used to highlight selected desktop icons and the selection box."}),l.jsxs("fieldset",{style:{border:"2px groove #c0c0c0",padding:"8px 12px"},children:[l.jsx("legend",{style:{fontWeight:"bold"},children:"Desktop Style"}),l.jsx(dt,{checked:d,onChange:p,label:"Serious Sam Style (Vaporwave)"}),l.jsx(Yl,{children:"On: the signature vaporwave desktop. Off: a clean, stock Windows 98 look."})]})]}),y==="screensaver"&&l.jsxs("div",{children:[l.jsx(ro,{children:"Screen saver"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:12},children:[l.jsx("select",{value:h.type,onChange:k=>Gg({type:k.target.value}),style:{fontFamily:"inherit",padding:2},children:e$.map(k=>l.jsx("option",{value:k.key,children:k.name},k.key))}),l.jsx(Ue,{size:"sm",disabled:h.type==="none",onClick:()=>J8(),children:"Preview"})]}),l.jsxs("label",{style:{fontSize:13},children:["Wait:"," ",l.jsx("input",{type:"number",min:1,max:60,value:h.wait,onChange:k=>Gg({wait:Math.max(1,Number(k.target.value)||1)}),style:{width:48,fontFamily:"inherit"}})," ","minutes"]}),l.jsx(Yl,{children:"The screen saver starts after the desktop has been idle for this long."})]}),y==="effects"&&l.jsxs("div",{children:[l.jsx(ro,{children:"Visual effects"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(dt,{checked:o,onChange:i,label:"CRT scanline effect"}),l.jsx(dt,{checked:m.reduceMotion,onChange:()=>nt("reduceMotion",!m.reduceMotion),label:"Reduce motion (minimise animations)"})]}),l.jsx(ro,{style:{marginTop:16},children:"Windows"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(dt,{checked:m.liveDrag,onChange:()=>nt("liveDrag",!m.liveDrag),label:"Show window contents while dragging"}),l.jsx(dt,{checked:m.windowSnap,onChange:()=>nt("windowSnap",!m.windowSnap),label:"Snap windows to screen edges"})]}),l.jsxs("div",{style:{marginTop:16,display:"flex",alignItems:"center",gap:8},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"ui-scale",children:"Interface size:"}),l.jsx("select",{id:"ui-scale",value:m.uiScale,onChange:k=>nt("uiScale",Number(k.target.value)),style:{fontFamily:"inherit",padding:2},children:[90,100,110,125,150].map(k=>l.jsxs("option",{value:k,children:[k,"%"]},k))})]}),l.jsx(Yl,{children:"Interface size and reduce-motion are also in the Accessibility applet."})]})]})]})};let h$=1,bs=[],Ia=[];const zf=new Set,oc=()=>zf.forEach(e=>e());function Bw(e){return zf.add(e),()=>zf.delete(e)}function Jg(){return bs}function Zg(){return Ia}function m$(e){const n={...e,id:h$++,ts:Date.now()};return bs=[...bs,n],Ia=[...Ia,n].slice(-50),oc(),n.id}function Nd(e){bs=bs.filter(n=>n.id!==e),oc()}function g$(){Ia=[],oc()}const Ww="vortex.notify.winpopup";let Hw=localStorage.getItem(Ww)==="classic"?"classic":"toast";function Uw(){return Hw}function x$(e){Hw=e,localStorage.setItem(Ww,e),oc()}const Vw="vortex.eggs",ex=["konami","vortex","credits","about"],_f=new Set;function y$(){try{const e=JSON.parse(localStorage.getItem(Vw)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}let ds=y$();function w$(){return ds}function ic(e){ds.includes(e)||(ds=[...ds,e],localStorage.setItem(Vw,JSON.stringify(ds)),_f.forEach(n=>n()))}function v$(){return g.useSyncExternalStore(e=>(_f.add(e),()=>_f.delete(e)),w$)}const tx=new Set;function b$(e){return tx.add(e),()=>tx.delete(e)}const Ff=new Set;function Bf(){Ff.forEach(e=>e())}function k$(e){return Ff.add(e),()=>Ff.delete(e)}const Md=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function S$(e){let n=0;const o=i=>{const a=i.key.length===1?i.key.toLowerCase():i.key;a===Md[n]?(n++,n===Md.length&&(n=0,e())):n=a===Md[0]?1:0};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}const j$=Date.now(),Wf="vortex.bootcount";let Pa=0;function C$(){const e=parseInt(localStorage.getItem(Wf)??"0",10);Pa=(Number.isFinite(e)?e:0)+1,localStorage.setItem(Wf,String(Pa))}function Kw(){if(Pa)return Pa;const e=parseInt(localStorage.getItem(Wf)??"0",10);return Number.isFinite(e)?e:0}function E$(){return Date.now()-j$}function $$(e){const n=Math.floor(e/1e3),o=n%60,i=Math.floor(n/60)%60,a=Math.floor(n/3600),u=d=>String(d).padStart(2,"0");return a>0?`${a}:${u(i)}:${u(o)}`:`${i}:${u(o)}`}const T$=vt`to { transform: rotate(360deg); }`,A$=vt`to { transform: rotate(-360deg); }`,R$=vt`
    0%, 100% { opacity: 0.75; transform: scale(0.94); }
    50% { opacity: 1; transform: scale(1.06); }
`,Ld=L.circle`
    fill: none;
    stroke-linecap: round;
    transform-origin: 60px 60px;
    ${({$spin:e,$dur:n,$rev:o})=>e&&ye`
            animation: ${o?A$:T$} ${n}s linear infinite;
        `}
`,D$=L.circle`
    transform-origin: 60px 60px;
    ${({$spin:e})=>e&&ye`
            animation: ${R$} 2.4s ease-in-out infinite;
        `}
`,oi=({size:e=120,vapor:n=!0,spinning:o=!0})=>{const i=n?"vortex-vapor":"vortex-stock",a=n?["#ff2d95","#a14bff","#00e5d0"]:["#1084d0","#3fa9f5","#000080"],u=n?"#ff67c8":"#5cb9ff";return l.jsxs("svg",{viewBox:"0 0 120 120",width:e,height:e,role:"img","aria-label":"VortexOS",style:{filter:`drop-shadow(0 0 ${e/12}px ${a[0]}88)`,display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:`${i}-grad`,x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:a[0]}),l.jsx("stop",{offset:"50%",stopColor:a[1]}),l.jsx("stop",{offset:"100%",stopColor:a[2]})]}),l.jsxs("radialGradient",{id:`${i}-core`,children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"55%",stopColor:u}),l.jsx("stop",{offset:"100%",stopColor:a[0],stopOpacity:"0"})]})]}),l.jsx(Ld,{cx:"60",cy:"60",r:"52",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"200 127",$dur:7,$spin:o}),l.jsx(Ld,{cx:"60",cy:"60",r:"38",stroke:`url(#${i}-grad)`,strokeWidth:"7",strokeDasharray:"120 119",$dur:4.5,$rev:!0,$spin:o}),l.jsx(Ld,{cx:"60",cy:"60",r:"24",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"70 80",$dur:2.6,$spin:o}),l.jsx(D$,{cx:"60",cy:"60",r:"13",fill:`url(#${i}-core)`,$spin:o})]})},I$="http://localhost:8082";function P$(e){switch(e){case 400:return"Please enter a user name and password.";case 401:return"Incorrect user name or password.";case 409:return"That user name is already taken.";default:return`Something went wrong (HTTP ${e}).`}}async function Qw(e,n,o){let i;try{i=await fetch(`${I$}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:o})})}catch{throw new Error("Cannot reach the server. Is the backend running?")}if(!i.ok)throw new Error(P$(i.status));const a=await i.json();return{token:a.token,username:a.username}}const N$=(e,n)=>Qw("/auth/register",e,n),M$=(e,n)=>Qw("/auth/login",e,n),qw=g.createContext(null);function L$({children:e}){const[n,o]=g.useState(()=>nc()),i=g.useCallback(h=>{D2(h),o(h)},[]),a=g.useCallback(async(h,m)=>i(await M$(h,m)),[i]),u=g.useCallback(async(h,m)=>i(await N$(h,m)),[i]),d=g.useCallback(()=>{ww(),o(null)},[]);g.useEffect(()=>(Ig(()=>o(null)),()=>Ig(null)),[]);const p=g.useMemo(()=>({session:n,username:(n==null?void 0:n.username)??null,isAuthenticated:!!n,login:a,register:u,logout:d}),[n,a,u,d]);return l.jsx(qw.Provider,{value:p,children:e})}function Kn(){const e=g.useContext(qw);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}const O$=()=>{const[e,n]=g.useState(Math.round(If()*100)),[o,i]=g.useState(Pf()),[a,u]=g.useState(Uw()==="classic");return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Sound"}),l.jsx(dt,{checked:o,onChange:()=>{const d=!o;i(d),Nw(d)},label:"Mute all sounds"}),l.jsxs("div",{style:{marginTop:14},children:[l.jsx("label",{children:"Volume"}),l.jsx("input",{type:"range",min:0,max:100,value:e,disabled:o,onChange:d=>{const p=Number(d.target.value);n(p),Pw(p/100)},onMouseUp:()=>!o&&mo(),style:{width:220,display:"block",marginTop:4}}),l.jsxs("span",{children:[e,"%"]})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Notifications"}),l.jsx(dt,{checked:a,onChange:()=>{const d=!a;u(d),x$(d?"classic":"toast")},label:"Use classic WinPopup window for messages"}),l.jsx("p",{style:{fontSize:11,color:"#555",marginTop:6},children:"When off, incoming Net Send messages appear as toast notifications in the corner."})]})},z$=()=>{const[e,n]=g.useState(new Date),{dateFormat:o,clock24h:i}=on();g.useEffect(()=>{const d=setInterval(()=>n(new Date),1e3);return()=>clearInterval(d)},[]);const a=o==="long"?e.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}):e.toLocaleDateString(),u=e.toLocaleTimeString(void 0,{hour12:!i});return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Date & Time"}),l.jsxs(wt,{variant:"well",style:{padding:10,fontSize:16},children:[l.jsx("div",{style:{fontWeight:"bold"},children:a}),l.jsx("div",{style:{fontFamily:"monospace",fontSize:20,marginTop:4},children:u})]}),l.jsxs("p",{style:{marginTop:10,fontSize:12},children:["VortexOS follows your computer's clock. Change the date format and week start in"," ",l.jsx("b",{children:"Regional Settings"}),"."]})]})},_$=()=>{const e=on(),n=new Date,o=e.dateFormat==="long"?n.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}):n.toLocaleDateString();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Date"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"date-format",children:"Date format:"}),l.jsxs("select",{id:"date-format",value:e.dateFormat,onChange:i=>nt("dateFormat",i.target.value),style:{fontFamily:"inherit",padding:2},children:[l.jsx("option",{value:"short",children:"Short (e.g. 6/14/2026)"}),l.jsx("option",{value:"long",children:"Long (e.g. Sunday, June 14, 2026)"})]})]}),l.jsx(wt,{variant:"well",style:{padding:"6px 10px",fontSize:13,display:"inline-block"},children:o}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Calendar"}),l.jsx(dt,{checked:e.firstDayMonday,onChange:()=>nt("firstDayMonday",!e.firstDayMonday),label:"Start the week on Monday"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:10},children:"Affects the calendar in the Clock app and the system-tray fly-out."})]})},F$=[{file:"arrow.cur",name:"Standard"},{file:"Beam.cur",name:"Text Select"},{file:"help_win95.cur",name:"Help"},{file:"Grabbing.cur",name:"Grabbing"},{file:"Cursor_3.cur",name:"Classic 1"},{file:"Cursor_5.cur",name:"Classic 2"},{file:"Cursor_7.cur",name:"Classic 3"},{file:"Cursor_9.cur",name:"Classic 4"},{file:"Cursor_11.cur",name:"Classic 5"},{file:"Cursor_14.cur",name:"Classic 6"}],B$=()=>{const e=on();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Pointer scheme"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginBottom:12},children:"Pick a pointer — it applies instantly and is remembered."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:F$.map(n=>{const o=e.pointerScheme===n.file;return l.jsxs("div",{onClick:()=>nt("pointerScheme",n.file),style:{width:92,cursor:`url(/win-cursor/${n.file}), auto`,textAlign:"center",padding:8,background:o?"#000080":"#fff",color:o?"#fff":"#000",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},title:n.name,children:[l.jsx("div",{style:{height:40,background:`#c0c0c0 url(/win-cursor/${n.file}) center no-repeat`,border:"1px solid #808080",marginBottom:6}}),l.jsx("div",{style:{fontSize:11},children:n.name})]},n.file)})})]})},W$=()=>{const e=on();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Taskbar"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(dt,{checked:e.showQuickLaunch,onChange:()=>nt("showQuickLaunch",!e.showQuickLaunch),label:"Show the Quick Launch toolbar"}),l.jsx(dt,{checked:e.autoHideTaskbar,onChange:()=>nt("autoHideTaskbar",!e.autoHideTaskbar),label:"Auto-hide the taskbar"})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 10px"},children:"Clock"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(dt,{checked:e.showClock,onChange:()=>nt("showClock",!e.showClock),label:"Show the clock"}),l.jsx(dt,{checked:e.clock24h,onChange:()=>nt("clock24h",!e.clock24h),label:"Use 24-hour time",disabled:!e.showClock}),l.jsx(dt,{checked:e.clockSeconds,onChange:()=>nt("clockSeconds",!e.clockSeconds),label:"Show seconds",disabled:!e.showClock})]}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:14},children:"Taskbar and clock changes apply immediately."})]})},H$=()=>{const e=on();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Desktop icons"}),l.jsx(dt,{checked:e.showDesktopIcons,onChange:()=>nt("showDesktopIcons",!e.showDesktopIcons),label:"Show icons on the desktop"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:14},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"icon-size",children:"Icon size:"}),l.jsxs("select",{id:"icon-size",value:e.desktopIconSize,disabled:!e.showDesktopIcons,onChange:n=>nt("desktopIconSize",n.target.value),style:{fontFamily:"inherit",padding:2},children:[l.jsx("option",{value:"small",children:"Small"}),l.jsx("option",{value:"normal",children:"Normal"}),l.jsx("option",{value:"large",children:"Large"})]})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Open items"}),l.jsx(dt,{checked:e.singleClickOpen,onChange:()=>nt("singleClickOpen",!e.singleClickOpen),label:"Single-click to open an icon (instead of double-click)"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:14},children:"Changes apply to the desktop instantly."})]})},U$=()=>{const e=on(),{setTheme:n}=Kt();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Display"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"acc-scale",children:"Interface size:"}),l.jsx("select",{id:"acc-scale",value:e.uiScale,onChange:o=>nt("uiScale",Number(o.target.value)),style:{fontFamily:"inherit",padding:2},children:[90,100,110,125,150].map(o=>l.jsxs("option",{value:o,children:[o,"%"]},o))}),l.jsx("span",{style:{fontSize:12,color:"#444"},children:"Scales the whole desktop."})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"4px 0 8px"},children:"Motion"}),l.jsx(dt,{checked:e.reduceMotion,onChange:()=>nt("reduceMotion",!e.reduceMotion),label:"Reduce motion (minimise animations & transitions)"}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Contrast"}),l.jsx(Ue,{onClick:()=>n("highContrast"),children:"Switch to High Contrast theme"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:8},children:"You can change the theme back any time in Display ▸ Appearance."})]})},V$=()=>{const{username:e,logout:n}=Kn(),o=Kw();return l.jsxs("div",{style:{padding:18},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:16},children:[l.jsx("div",{style:{width:56,height:56,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:"bold",color:"#fff",background:"linear-gradient(135deg, #ff2d95, #00e5d0)",textTransform:"uppercase"},children:(e||"?").charAt(0)}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:20,fontWeight:"bold",margin:0},children:e||"Guest"}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:12,color:"#008000"},children:"● Signed in"}),l.jsxs("p",{style:{margin:"2px 0 0",fontSize:12,color:"#555"},children:[o," session",o===1?"":"s"," on this machine"]})]})]}),l.jsx("p",{style:{fontSize:12.5,marginBottom:14},children:"Your files, desktop, shared folders and high scores are all private to this account. Sign out to switch users."}),l.jsxs(Ue,{onClick:n,children:["Log Off ",e,"…"]})]})},K$=()=>{const e=kw(),n=v$(),o=g.useRef(0),i=()=>{o.current+=1,o.current>=5&&(o.current=0,ic("about"),Bf())},a=navigator,[,u]=g.useState(0);g.useEffect(()=>{const m=setInterval(()=>u(y=>y+1),1e3);return()=>clearInterval(m)},[]);const d=[["Uptime",$$(E$())],["Boots",String(Kw())],["Apps",String(Mr.length)]],p=[["Processor",`${a.hardwareConcurrency??"?"} virtual cores`],["Memory",a.deviceMemory?`${a.deviceMemory} GB RAM`:"—"],["Display",`${window.screen.width} × ${window.screen.height}`],["Disk (OPFS)",e!=null&&e.supported?`${Dr(e.usage)} of ${Dr(e.quota)}`:"—"],["Kernel","VortexOS microkernel · syscall ABI"],["Filesystem","MemFS + OPFS · /dev /proc /bin /mnt"]],h=n.length===ex.length;return l.jsxs("div",{style:{padding:18,lineHeight:1.55,overflow:"auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14},children:[l.jsx("div",{onClick:i,style:{cursor:"pointer",userSelect:"none",flexShrink:0},title:"VortexOS",children:l.jsx(oi,{size:62,vapor:!0})}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:28,fontWeight:800,letterSpacing:1,margin:0,background:"linear-gradient(90deg, #d6177f, #7a2fd6, #0aa89a)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"},children:"VortexOS"}),l.jsx("p",{style:{margin:0,fontSize:13},children:"Version 2.0 · Experimental Edition"}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:13,color:"#a0117a",fontWeight:"bold"},children:"a creation by Serious Sam"})]})]}),l.jsx("div",{style:{display:"flex",gap:8,marginBottom:14},children:d.map(([m,y])=>l.jsxs("div",{style:{flex:1,textAlign:"center",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",padding:"7px 4px"},children:[l.jsx("div",{style:{fontSize:18,fontWeight:"bold",color:"#000080",fontVariantNumeric:"tabular-nums"},children:y}),l.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:.5},children:m})]},m))}),l.jsxs("p",{style:{fontSize:12.5,margin:"0 0 12px"},children:["I didn't theme a desktop — I ",l.jsx("b",{children:"built an operating system"}),". Under the nostalgia is a real microkernel with a syscall ABI, a virtual filesystem, a process scheduler, a command shell, a window manager and multi-user networking. Every window, every app, every sound — hand-made, from scratch, in a browser tab. No emulator. No clone. It just ",l.jsx("i",{children:"looks"})," like 1995."]}),l.jsx("table",{style:{fontSize:13,borderCollapse:"collapse",marginBottom:6},children:l.jsx("tbody",{children:p.map(([m,y])=>l.jsxs("tr",{children:[l.jsxs("td",{style:{fontWeight:"bold",paddingRight:16,verticalAlign:"top",whiteSpace:"nowrap"},children:[m,":"]}),l.jsx("td",{children:y})]},m))})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:12},children:[l.jsx("button",{onClick:Bf,style:{padding:"5px 16px",fontSize:13,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #000000 #000000 #ffffff",cursor:"pointer"},children:"🎬 Roll the Credits"}),l.jsxs("span",{style:{fontSize:11,color:h?"#008000":"#888",fontWeight:h?"bold":"normal"},children:[h?"🌀 ":"","Easter eggs found: ",n.length," / ",ex.length]})]})]})},nx=[{name:"Display",icon:"/monitor.png",component:p$},{name:"Desktop",icon:"/desktop.svg",component:H$},{name:"Mouse",icon:"/mouse.svg",component:B$},{name:"Sounds",icon:"/sound.svg",component:O$},{name:"Taskbar & Clock",icon:"/taskbar.svg",component:W$},{name:"Accessibility",icon:"/accessibility.svg",component:U$},{name:"Date/Time",icon:"/clock.svg",component:z$},{name:"Regional",icon:"/regional.svg",component:_$},{name:"Accounts",icon:"/users.svg",component:V$},{name:"About Vortex",icon:"/w95.png",component:K$}],Q$=()=>{const[e,n]=g.useState(null);return l.jsxs(Et,{$minW:560,$minH:380,children:[l.jsxs(gn,{children:[l.jsx(Fe,{label:"File",children:l.jsx(Ae,{$disabled:!e,onMouseDown:o=>{o.preventDefault(),n(null)},children:"Close Applet"})}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Control Panel — VortexOS"})})]}),l.jsxs(fi,{children:[l.jsx(it,{onClick:()=>n(null),disabled:!e,children:"◀ Back"}),l.jsx(En,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:e?e.name:"Control Panel"})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:e?l.jsx(e.component,{}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap",padding:10},children:nx.map(o=>l.jsxs("div",{onDoubleClick:()=>n(o),title:"Double-click to open",style:{cursor:"pointer",width:96,padding:12,display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("img",{src:o.icon,alt:o.name,style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:o.name})]},o.name))})})}),l.jsxs(Pt,{children:[l.jsx(Oe,{$flex:1,children:e?e.name:"Control Panel"}),l.jsxs(Oe,{children:[nx.length," object(s)"]})]})]})},q$=new Set(["|","<",";"]);function G$(e){const n=[];let o=0;const i=e.length;for(;o<i;){const a=e[o];if(a===" "||a==="	"){o++;continue}if(a===">"){e[o+1]===">"?(n.push({type:"op",value:">>"}),o+=2):(n.push({type:"op",value:">"}),o++);continue}if(q$.has(a)){n.push({type:"op",value:a}),o++;continue}let u="";for(;o<i;){const d=e[o];if(d===" "||d==="	"||d==="|"||d==="<"||d===">"||d===";")break;if(d==='"'||d==="'"){const p=d;for(o++;o<i&&e[o]!==p;)u+=e[o],o++;o++;continue}if(d==="\\"&&o+1<i){u+=e[o+1],o+=2;continue}u+=d,o++}n.push({type:"word",value:u})}return n}class Xl extends Error{}function Y$(e){const n=G$(e),o=[];let i=[],a=null,u=!1;const d=()=>{a&&i.push(a),a=null},p=()=>{if(u)throw new Xl("syntax error near `|`");d(),i.length&&o.push(i),i=[]};for(let h=0;h<n.length;h++){const m=n[h];if(m.type==="word"){a||(a={argv:[]}),a.argv.push(m.value),u=!1;continue}if(m.value===";"){p();continue}if(m.value==="|"){if(!a||a.argv.length===0)throw new Xl("syntax error near `|`");d(),u=!0;continue}const y=n[h+1];if(!y||y.type!=="word")throw new Xl(`syntax error near \`${m.value}\``);a||(a={argv:[]}),m.value==="<"?a.stdinFile=y.value:(a.stdoutFile=y.value,a.append=m.value===">>"),h++}p();for(const h of o)for(const m of h)if(m.argv.length===0)throw new Xl("syntax error: empty command");return o}function It(e,n){return n.startsWith("/")?Nr(n):He(e,n)}function sn(e){const n=new Set,o=[];for(const i of e.slice(1))if(i.length>1&&i[0]==="-"&&i[1]!=="-")for(const a of i.slice(1))n.add(a);else o.push(i);return{flags:n,operands:o}}const Qn=e=>(e==null?void 0:e.code)??(e==null?void 0:e.message)??"error",X$=async({argv:e,out:n})=>(n(e.slice(1).join(" ")+`
`),0),J$=async({cwd:e,out:n})=>(n(e+`
`),0),Z$=async({env:e,out:n})=>(n((e.USER??"user")+`
`),0),eT=async({argv:e,out:n})=>(n(e.includes("-a")?`VortexOS 2.0 vortex web microkernel
`:`VortexOS
`),0),tT=async({out:e})=>(e(new Date().toString()+`
`),0),nT=String.raw`
         .-""""-.
       .'        '.        V O R T E X   O S
      /   .--.     \       ----------------------------
     |   /    \     |      Version 2.0 · Experimental Edition
     |   \    /     |      a creation by Serious Sam
      \   '--'  o  /
       '.        .'        "No emulator. No clone."
         '-....-'           a real microkernel, in a browser.
`,rT=async({out:e})=>(ic("vortex"),e(nT+`
`),e(`Try 'credits' to roll the credits. The Konami code does something too...
`),0),oT=async({out:e})=>(ic("credits"),Bf(),e(`Rolling the credits... 🌀
`),0),iT=async({out:e})=>(e(`Nothing happens.
`),0),sT=async({env:e,out:n})=>{for(const[o,i]of Object.entries(e))n(`${o}=${i}
`);return 0},lT=async({argv:e,cwd:n,sys:o,out:i,err:a})=>{const{flags:u,operands:d}=sn(e),p=d.length?d:["."];let h=0;for(const m of p){const y=It(n,m);try{const w=await o.stat(y),b=w.type==="dir"?await o.readdir(y):[tn(y)];if(u.has("l"))for(const T of b){const E=w.type==="dir"?He(y,T):y,C=await o.stat(E),$=C.type==="dir"?"d":C.type==="dev"?"c":"-";i(`${$}  ${String(C.size).padStart(6)}  ${T}
`)}else b.length&&i(b.join(`
`)+`
`)}catch(w){a(`ls: cannot access '${m}': ${Qn(w)}
`),h=1}}return h},aT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=sn(e);if(d.length===0)return a(o),0;let p=0;for(const h of d)try{a(await i.readTextFile(It(n,h)))}catch(m){u(`cat: ${h}: ${Qn(m)}
`),p=1}return p},cT=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=sn(e);let d=0;for(const p of u){const h=It(n,p);try{if(a.has("p")){let m="";for(const y of h.split("/").filter(Boolean))m+="/"+y,await o.stat(m).then(()=>!0).catch(()=>!1)||await o.mkdir(m)}else await o.mkdir(h)}catch(m){i(`mkdir: ${p}: ${Qn(m)}
`),d=1}}return d},uT=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=sn(e);let u=0;for(const d of a){const p=It(n,d);try{await o.stat(p).then(()=>!0).catch(()=>!1)||await o.writeTextFile(p,"")}catch(h){i(`touch: ${d}: ${Qn(h)}
`),u=1}}return u};async function Gw(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await Gw(e,He(n,i));await e.unlink(n)}const dT=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=sn(e);let d=0;for(const p of u){const h=It(n,p);try{a.has("r")?await Gw(o,h):await o.unlink(h)}catch(m){i(`rm: ${p}: ${Qn(m)}
`),d=1}}return d},Yw=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=sn(e);if(a.length<2)return i(`cp: usage: cp <src> <dst>
`),1;const u=It(n,a[0]);let d=It(n,a[1]);try{return await o.stat(d).then(p=>p.type==="dir").catch(()=>!1)&&(d=He(d,tn(u))),await o.writeFile(d,await o.readFile(u)),0}catch(p){return i(`cp: ${Qn(p)}
`),1}},fT=async e=>{const n=await Yw(e);if(n!==0)return n;const{operands:o}=sn(e.argv);return await e.sys.unlink(It(e.cwd,o[0])).catch(()=>{}),0},pT=async({sys:e,out:n})=>{const o=await e.ps();n(`PID       NAME                 STATE     PRIO
`);for(const i of o)n(`${i.pid.slice(0,8)}  ${i.name.padEnd(20).slice(0,20)}  ${i.state.padEnd(8)}  ${i.priority}
`);return 0},hT=async({argv:e,sys:n,out:o,err:i})=>{const{operands:a}=sn(e);if(a.length===0)return i(`kill: usage: kill <pid>
`),1;const u=await n.ps();let d=0;for(const p of a){const h=u.find(m=>m.pid===p||m.pid.startsWith(p));if(!h){i(`kill: ${p}: no such process
`),d=1;continue}await n.kill(h.pid),o(`killed ${h.pid.slice(0,8)} (${h.name})
`)}return d},mT=async({argv:e,out:n,err:o})=>{const{operands:i}=sn(e);let a=0;for(const u of i)u in Mp||Zw.includes(u)?n(`/bin/${u}
`):(o(`${u} not found
`),a=1);return a},gT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{flags:d,operands:p}=sn(e);if(p.length===0)return u(`grep: usage: grep <pattern> [file...]
`),1;const[h,...m]=p,y=d.has("i")?h.toLowerCase():h,w=E=>(d.has("i")?E.toLowerCase():E).includes(y),b=[];if(m.length===0)b.push(o);else for(const E of m)try{b.push(await i.readTextFile(It(n,E)))}catch(C){u(`grep: ${E}: ${Qn(C)}
`)}let T=!1;for(const E of b)for(const C of E.split(`
`))C!==""&&w(C)&&(a(C+`
`),T=!0);return T?0:1},xT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=sn(e),p=m=>({lines:m===""?0:m.replace(/\n$/,"").split(`
`).length,words:m.split(/\s+/).filter(Boolean).length,chars:m.length});if(d.length===0){const m=p(o);return a(`${m.lines} ${m.words} ${m.chars}
`),0}let h=0;for(const m of d)try{const y=p(await i.readTextFile(It(n,m)));a(`${y.lines} ${y.words} ${y.chars} ${m}
`)}catch(y){u(`wc: ${m}: ${Qn(y)}
`),h=1}return h};function Xw(e){const n=e.split(`
`);return n[n.length-1]===""&&n.pop(),n}function Jw(e,n){const o=e.indexOf("-n"),i=o>=0?Number(e[o+1]):NaN;return Number.isFinite(i)?i:n}const yT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=Jw(e,10),p=sn(e).operands.filter(m=>!/^\d+$/.test(m)),h=m=>Xw(m).slice(0,d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const m of p)h(await i.readTextFile(It(n,m)));return 0}catch(m){return u(`head: ${Qn(m)}
`),1}},wT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=Jw(e,10),p=sn(e).operands.filter(m=>!/^\d+$/.test(m)),h=m=>Xw(m).slice(-d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const m of p)h(await i.readTextFile(It(n,m)));return 0}catch(m){return u(`tail: ${Qn(m)}
`),1}},vT=async({out:e})=>(e(`VortexOS shell — available commands:
`),e([...Object.keys(Mp),...Zw].sort().join("  ")+`
`),e(`Pipes (|), redirects (> >> <) and ; are supported.
`),0),Zw=["cd","clear","export"],Mp={echo:X$,pwd:J$,whoami:Z$,uname:eT,date:tT,env:sT,ls:lT,cat:aT,mkdir:cT,touch:uT,rm:dT,cp:Yw,mv:fT,ps:pT,kill:hT,which:mT,grep:gT,wc:xT,head:yT,tail:wT,help:vT,vortex:rT,credits:oT,xyzzy:iT};class ev{constructor(n,o="/home/user",i={}){Ne(this,"cwd");Ne(this,"env");this.sys=n,this.cwd=o,this.env={HOME:"/home/user",USER:"user",PATH:"/bin",...i}}prompt(){const n=this.cwd===this.env.HOME?"~":this.cwd;return`${this.env.USER}@vortex:${n}$ `}async run(n){let o="",i=!1,a=0;const u=p=>{o+=p};let d;try{d=Y$(n)}catch(p){return{output:`sh: ${p.message}
`,clear:!1,code:2}}for(const p of d){const h=await this.runPipeline(p,u);a=h.code,h.clear&&(i=!0,o="")}return{output:o,clear:i,code:a}}expand(n){let o=n;return o==="~"?o=this.env.HOME:o.startsWith("~/")&&(o=this.env.HOME+o.slice(1)),o=o.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g,(i,a)=>this.env[a]??""),o=o.replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g,(i,a)=>this.env[a]??""),o}expandCommand(n){return{argv:n.argv.map(o=>this.expand(o)),stdinFile:n.stdinFile?this.expand(n.stdinFile):void 0,stdoutFile:n.stdoutFile?this.expand(n.stdoutFile):void 0,append:n.append}}async runPipeline(n,o){const i=n.map(d=>this.expandCommand(d));if(i.length===1){const d=i[0].argv,p=d[0],h=d.length===1?/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/.exec(p):null;if(h)return this.env[h[1]]=h[2],{code:0};if(p==="cd")return{code:await this.cd(d,o)};if(p==="clear")return{code:0,clear:!0};if(p==="export")return{code:this.export(d)};if(p==="sh"||p==="source"||p===".")return{code:await this.runScript(d[1],o)}}let a="",u=0;for(const d of i){const p=d.argv[0],h=Mp[p];let m=a;if(d.stdinFile)try{m=await this.sys.readTextFile(It(this.cwd,d.stdinFile))}catch(w){return o(`sh: ${d.stdinFile}: ${w.code??"error"}
`),{code:1}}if(!h)return o(`sh: ${p}: command not found
`),{code:127};let y="";u=await h({argv:d.argv,stdin:m,cwd:this.cwd,env:this.env,sys:this.sys,out:w=>y+=w,err:o}),a=await this.applyStdout(d,y,o)}return o(a),{code:u}}async applyStdout(n,o,i){if(!n.stdoutFile)return o;const a=It(this.cwd,n.stdoutFile);try{const u=n.append?await this.sys.readTextFile(a).catch(()=>""):"";await this.sys.writeTextFile(a,u+o)}catch(u){i(`sh: ${n.stdoutFile}: ${u.code??"error"}
`)}return""}async cd(n,o){const i=n[1]?It(this.cwd,n[1]):this.env.HOME;try{return(await this.sys.stat(i)).type!=="dir"?(o(`cd: not a directory: ${n[1]}
`),1):(this.cwd=i,0)}catch{return o(`cd: ${n[1]}: No such file or directory
`),1}}export(n){for(const o of n.slice(1)){const i=o.indexOf("=");i>0&&(this.env[o.slice(0,i)]=o.slice(i+1))}return 0}async runScript(n,o){if(!n)return o(`sh: usage: sh <script>
`),2;let i;try{i=await this.sys.readTextFile(It(this.cwd,n))}catch(u){return o(`sh: ${n}: ${u.code??"not found"}
`),1}let a=0;for(const u of i.split(`
`)){const d=u.trim();if(!d||d.startsWith("#"))continue;const p=await this.run(d);p.output&&o(p.output),a=p.code}return a}}const bT=["VortexOS [Version 2.0]","Type 'help' for a list of commands.",""],kT=()=>{const e=rn(),n=g.useRef(null);n.current||(n.current=new ev(e));const o=n.current,[i,a]=g.useState(bT),[u,d]=g.useState(""),[p,h]=g.useState([]),[m,y]=g.useState(-1),[w,b]=g.useState(!1),T=g.useRef(null),E=g.useRef(null),[C,$]=g.useState(null);g.useEffect(()=>{if(!C)return;const S=()=>$(null);return document.addEventListener("click",S),()=>document.removeEventListener("click",S)},[C]),g.useEffect(()=>{var S,R;(S=T.current)==null||S.scrollTo(0,T.current.scrollHeight),(R=E.current)==null||R.focus()},[i]);const k=async()=>{const S=u;a(M=>[...M,o.prompt()+S]),d(""),y(-1),S.trim()&&h(M=>[...M,S]),b(!0);const R=await o.run(S);if(b(!1),R.clear){a([]);return}R.output&&a(M=>[...M,...R.output.replace(/\n$/,"").split(`
`)])},j=S=>{if(S.key==="Enter")S.preventDefault(),w||k();else if(S.key==="ArrowUp"){if(S.preventDefault(),!p.length)return;const R=m===-1?p.length-1:Math.max(0,m-1);y(R),d(p[R])}else if(S.key==="ArrowDown"){if(S.preventDefault(),m===-1)return;const R=m+1;R>=p.length?(y(-1),d("")):(y(R),d(p[R]))}};return l.jsxs("div",{ref:T,onClick:()=>{var S;return(S=E.current)==null?void 0:S.focus()},onContextMenu:S=>{var R;S.preventDefault(),$({x:S.clientX,y:S.clientY,sel:((R=window.getSelection())==null?void 0:R.toString())??""})},style:{width:"100%",height:"100%",minWidth:600,minHeight:360,boxSizing:"border-box",overflowY:"auto",background:"#000",color:"#c0c0c0",fontFamily:"'Lucida Console', 'Courier New', monospace",fontSize:13,lineHeight:1.35,padding:8,cursor:"text"},children:[i.map((S,R)=>l.jsx("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:S||" "},R)),l.jsxs("div",{style:{display:"flex",whiteSpace:"pre"},children:[l.jsx("span",{children:o.prompt()}),l.jsx("input",{ref:E,value:u,onChange:S=>d(S.target.value),onKeyDown:j,spellCheck:!1,autoComplete:"off",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"inherit",fontSize:"inherit",padding:0}})]}),C&&l.jsx(ho,{x:C.x,y:C.y,onClose:()=>$(null),items:[{label:"Copy",shortcut:"Ctrl+C",disabled:!C.sel,onClick:()=>{var S;return C.sel&&void((S=navigator.clipboard)==null?void 0:S.writeText(C.sel).catch(()=>{}))}},{label:"Paste",shortcut:"Ctrl+V",onClick:()=>{var S;return void((S=navigator.clipboard)==null?void 0:S.readText().then(R=>{var M;R&&d(K=>K+R.replace(/\n/g," ")),(M=E.current)==null||M.focus()}).catch(()=>{}))}},{label:"Select All",onClick:()=>{const S=T.current;if(!S)return;const R=document.createRange();R.selectNodeContents(S);const M=window.getSelection();M==null||M.removeAllRanges(),M==null||M.addRange(R)}},{separator:!0},{label:"Clear",glyph:"⌦",onClick:()=>a([])}]})]})},rx=(e,n,o)=>{switch(o){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n;case"x^y":return Math.pow(e,n);case"Mod":return n===0?NaN:e%n;case"And":return(e&n)>>>0;case"Or":return(e|n)>>>0;case"Xor":return(e^n)>>>0;case"Lsh":return e<<n>>>0;case"Rsh":return e>>n>>>0}},ST=()=>{const[e,n]=g.useState("0"),[o,i]=g.useState(null),[a,u]=g.useState(null),[d,p]=g.useState(!0),[h,m]=g.useState(0),[y,w]=g.useState("standard"),[b,T]=g.useState(10),[E,C]=g.useState(!0),$=g.useRef(null);g.useEffect(()=>{var q;return(q=$.current)==null?void 0:q.focus()},[]);const k=()=>y==="programmer"?parseInt(e,b)||0:parseFloat(e)||0,j=q=>{if(!Number.isFinite(q))return n("Error");if(y==="programmer"){const A=Math.trunc(q)>>>0;n(A.toString(b).toUpperCase())}else n(String(Math.round(q*1e10)/1e10))},S=q=>{if(y!=="programmer")return!0;const A=parseInt(q,16);return!isNaN(A)&&A<b},R=q=>{q==="."&&y==="programmer"||S(q)&&(d?(n(q==="."?"0.":q),p(!1)):q==="."?e.includes(".")||n(e+"."):n(e==="0"?q:e+q))},M=q=>{const A=k();if(o!==null&&a&&!d){const V=rx(o,A,a);i(V),j(V)}else i(A);u(q),p(!0)},K=()=>{o===null||!a||(j(rx(o,k(),a)),i(null),u(null),p(!0))},X=()=>{n("0"),i(null),u(null),p(!0)},ee=()=>{n("0"),p(!0)},ie=()=>{n(q=>q.length>1?q.slice(0,-1):"0")},me=q=>E?q*Math.PI/180:q,fe=q=>{j(q(k())),p(!0)},he=q=>{if(q=Math.trunc(q),q<0)return NaN;let A=1;for(let V=2;V<=q;V++)A*=V;return A},le=q=>{const A=k();T(q),n((Math.trunc(A)>>>0).toString(q).toUpperCase()),p(!0)},_=()=>m(0),D=()=>{j(h),p(!0)},I=()=>m(k()),H=()=>m(q=>q+k()),W=()=>m(q=>q-k()),B=q=>{const A=q.key;if(/^[0-9]$/.test(A))return R(A);if(y==="programmer"&&/^[a-fA-F]$/.test(A))return R(A.toUpperCase());if(A===".")return R(".");if(A==="+")return M("+");if(A==="-")return M("-");if(A==="*")return M("×");if(A==="/")return q.preventDefault(),M("÷");if(A==="Enter"||A==="=")return q.preventDefault(),K();if(A==="Backspace")return ie();if(A==="Escape")return X()},N=({label:q,onClick:A,accent:V,kind:te,w:ne=44})=>{const ce=te??(V?"op":void 0),je=ce==="op"?"#000080":ce==="clr"?"#a00000":ce==="mem"?"#006000":"#000";return l.jsx(Ue,{onClick:A,onMouseDown:Re=>Re.preventDefault(),primary:ce==="eq",style:{width:ne,height:34,fontSize:14,padding:0,color:ce==="eq"?void 0:je,fontWeight:ce&&ce!=="mem"?"bold":"normal"},children:q})},z=l.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[["MC",_],["MR",D],["MS",I],["M+",H],["M-",W]].map(([q,A])=>l.jsx(Ue,{onClick:A,onMouseDown:V=>V.preventDefault(),style:{flex:1,minWidth:0,height:30,fontSize:13,padding:0,color:"#006000"},children:q},q))}),J=l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 44px)",gap:4},children:[l.jsx(N,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(N,{label:"CE",onClick:ee,kind:"clr"}),l.jsx(N,{label:"C",onClick:X,kind:"clr"}),l.jsx(N,{label:"±",onClick:()=>fe(q=>-q)}),l.jsx(N,{label:"√",onClick:()=>fe(Math.sqrt)}),l.jsx(N,{label:"7",onClick:()=>R("7")}),l.jsx(N,{label:"8",onClick:()=>R("8")}),l.jsx(N,{label:"9",onClick:()=>R("9")}),l.jsx(N,{label:"÷",onClick:()=>M("÷"),accent:!0}),l.jsx(N,{label:"%",onClick:()=>fe(q=>q/100)}),l.jsx(N,{label:"4",onClick:()=>R("4")}),l.jsx(N,{label:"5",onClick:()=>R("5")}),l.jsx(N,{label:"6",onClick:()=>R("6")}),l.jsx(N,{label:"×",onClick:()=>M("×"),accent:!0}),l.jsx(N,{label:"1/x",onClick:()=>fe(q=>1/q)}),l.jsx(N,{label:"1",onClick:()=>R("1")}),l.jsx(N,{label:"2",onClick:()=>R("2")}),l.jsx(N,{label:"3",onClick:()=>R("3")}),l.jsx(N,{label:"-",onClick:()=>M("-"),accent:!0}),l.jsx(N,{label:"=",onClick:K,kind:"eq"}),l.jsx(N,{label:"0",onClick:()=>R("0"),w:92}),l.jsx(N,{label:".",onClick:()=>R(".")}),l.jsx(N,{label:"+",onClick:()=>M("+"),accent:!0})]}),ae=l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:E,onChange:()=>C(!0)})," Deg"]}),l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:!E,onChange:()=>C(!1)})," Rad"]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(N,{label:"sin",onClick:()=>fe(q=>Math.sin(me(q)))}),l.jsx(N,{label:"cos",onClick:()=>fe(q=>Math.cos(me(q)))}),l.jsx(N,{label:"tan",onClick:()=>fe(q=>Math.tan(me(q)))}),l.jsx(N,{label:"x²",onClick:()=>fe(q=>q*q)}),l.jsx(N,{label:"x^y",onClick:()=>M("x^y"),accent:!0}),l.jsx(N,{label:"C",onClick:X,kind:"clr"}),l.jsx(N,{label:"log",onClick:()=>fe(Math.log10)}),l.jsx(N,{label:"ln",onClick:()=>fe(Math.log)}),l.jsx(N,{label:"n!",onClick:()=>fe(he)}),l.jsx(N,{label:"√",onClick:()=>fe(Math.sqrt)}),l.jsx(N,{label:"1/x",onClick:()=>fe(q=>1/q)}),l.jsx(N,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(N,{label:"π",onClick:()=>{j(Math.PI),p(!0)}}),l.jsx(N,{label:"e",onClick:()=>{j(Math.E),p(!0)}}),l.jsx(N,{label:"±",onClick:()=>fe(q=>-q)}),l.jsx(N,{label:"(",onClick:()=>{}}),l.jsx(N,{label:")",onClick:()=>{}}),l.jsx(N,{label:"%",onClick:()=>fe(q=>q/100)}),l.jsx(N,{label:"7",onClick:()=>R("7")}),l.jsx(N,{label:"8",onClick:()=>R("8")}),l.jsx(N,{label:"9",onClick:()=>R("9")}),l.jsx(N,{label:"÷",onClick:()=>M("÷"),accent:!0}),l.jsx(N,{label:"×",onClick:()=>M("×"),accent:!0}),l.jsx(N,{label:"=",onClick:K,kind:"eq"}),l.jsx(N,{label:"4",onClick:()=>R("4")}),l.jsx(N,{label:"5",onClick:()=>R("5")}),l.jsx(N,{label:"6",onClick:()=>R("6")}),l.jsx(N,{label:"-",onClick:()=>M("-"),accent:!0}),l.jsx(N,{label:"+",onClick:()=>M("+"),accent:!0}),l.jsx(N,{label:".",onClick:()=>R(".")}),l.jsx(N,{label:"1",onClick:()=>R("1")}),l.jsx(N,{label:"2",onClick:()=>R("2")}),l.jsx(N,{label:"3",onClick:()=>R("3")}),l.jsx(N,{label:"0",onClick:()=>R("0")}),l.jsx(N,{label:"0",onClick:()=>R("0")}),l.jsx(N,{label:"00",onClick:()=>{R("0"),R("0")}})]})]}),ue=["A","B","C","D","E","F"],ge=l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[["Hex",16],["Dec",10],["Oct",8],["Bin",2]].map(([q,A])=>l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:b===A,onChange:()=>le(A)})," ",q]},A))}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(N,{label:"And",onClick:()=>M("And"),accent:!0}),l.jsx(N,{label:"Or",onClick:()=>M("Or"),accent:!0}),l.jsx(N,{label:"Xor",onClick:()=>M("Xor"),accent:!0}),l.jsx(N,{label:"Not",onClick:()=>fe(q=>~Math.trunc(q)>>>0),accent:!0}),l.jsx(N,{label:"Lsh",onClick:()=>M("Lsh"),accent:!0}),l.jsx(N,{label:"Rsh",onClick:()=>M("Rsh"),accent:!0}),l.jsx(N,{label:"Mod",onClick:()=>M("Mod"),accent:!0}),l.jsx(N,{label:"C",onClick:X,kind:"clr"}),l.jsx(N,{label:"CE",onClick:ee,kind:"clr"}),l.jsx(N,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(N,{label:"±",onClick:()=>fe(q=>-Math.trunc(q))}),l.jsx(N,{label:"=",onClick:K,kind:"eq"}),ue.slice(0,3).map(q=>l.jsx(N,{label:q,onClick:()=>R(q)},q)),l.jsx(N,{label:"7",onClick:()=>R("7")}),l.jsx(N,{label:"8",onClick:()=>R("8")}),l.jsx(N,{label:"9",onClick:()=>R("9")}),ue.slice(3).map(q=>l.jsx(N,{label:q,onClick:()=>R(q)},q)),l.jsx(N,{label:"4",onClick:()=>R("4")}),l.jsx(N,{label:"5",onClick:()=>R("5")}),l.jsx(N,{label:"6",onClick:()=>R("6")}),l.jsx(N,{label:"÷",onClick:()=>M("÷"),accent:!0}),l.jsx(N,{label:"×",onClick:()=>M("×"),accent:!0}),l.jsx(N,{label:"-",onClick:()=>M("-"),accent:!0}),l.jsx(N,{label:"1",onClick:()=>R("1")}),l.jsx(N,{label:"2",onClick:()=>R("2")}),l.jsx(N,{label:"3",onClick:()=>R("3")}),l.jsx(N,{label:"+",onClick:()=>M("+"),accent:!0}),l.jsx(N,{label:"0",onClick:()=>R("0"),w:92})]})]}),pe=y==="standard"?252:300,xe=y==="programmer"?{16:"HEX",10:"DEC",8:"OCT",2:"BIN"}[b]:y==="scientific"?E?"DEG":"RAD":"";return l.jsxs("div",{ref:$,tabIndex:0,onKeyDown:B,style:{outline:"none",width:pe},children:[l.jsxs(gn,{children:[l.jsx(Fe,{label:"View",children:["standard","scientific","programmer"].map(q=>l.jsxs(Ae,{onMouseDown:A=>{A.preventDefault(),w(q),X(),q!=="programmer"&&T(10)},style:{textTransform:"capitalize"},children:[y===q?"● ":"○ ",q]},q))}),l.jsx(Fe,{label:"Edit",children:l.jsx(Ae,{onMouseDown:q=>{var A;q.preventDefault(),(A=navigator.clipboard)==null||A.writeText(e).catch(()=>{})},children:"Copy"})}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Calculator — VortexOS"})})]}),l.jsxs("div",{style:{padding:8},children:[l.jsxs(wt,{variant:"well",style:{width:"100%",boxSizing:"border-box",display:"block",padding:"4px 8px",marginBottom:8,overflow:"hidden",background:"#cfe3cf"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#3a5a3a",height:14,fontFamily:"monospace"},children:[l.jsx("span",{children:h!==0?"M":""}),l.jsx("span",{children:[a??"",xe].filter(Boolean).join("  ")})]}),l.jsx("div",{style:{textAlign:"right",fontFamily:"'Courier New', monospace",fontWeight:"bold",fontSize:28,color:"#0c2a0c",lineHeight:1.1,letterSpacing:1,overflow:"hidden",textOverflow:"ellipsis"},children:e})]}),z,y==="standard"&&J,y==="scientific"&&ae,y==="programmer"&&ge]})]})};function tv(e,n){return function(){return e.apply(n,arguments)}}const{toString:jT}=Object.prototype,{getPrototypeOf:Lp}=Object,sc=(e=>n=>{const o=jT.call(n);return e[o]||(e[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Rn=e=>(e=e.toLowerCase(),n=>sc(n)===e),lc=e=>n=>typeof n===e,{isArray:pi}=Array,ks=lc("undefined");function CT(e){return e!==null&&!ks(e)&&e.constructor!==null&&!ks(e.constructor)&&nn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const nv=Rn("ArrayBuffer");function ET(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&nv(e.buffer),n}const $T=lc("string"),nn=lc("function"),rv=lc("number"),ac=e=>e!==null&&typeof e=="object",TT=e=>e===!0||e===!1,xa=e=>{if(sc(e)!=="object")return!1;const n=Lp(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},AT=Rn("Date"),RT=Rn("File"),DT=Rn("Blob"),IT=Rn("FileList"),PT=e=>ac(e)&&nn(e.pipe),NT=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||nn(e.append)&&((n=sc(e))==="formdata"||n==="object"&&nn(e.toString)&&e.toString()==="[object FormData]"))},MT=Rn("URLSearchParams"),[LT,OT,zT,_T]=["ReadableStream","Request","Response","Headers"].map(Rn),FT=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Is(e,n,{allOwnKeys:o=!1}={}){if(e===null||typeof e>"u")return;let i,a;if(typeof e!="object"&&(e=[e]),pi(e))for(i=0,a=e.length;i<a;i++)n.call(null,e[i],i,e);else{const u=o?Object.getOwnPropertyNames(e):Object.keys(e),d=u.length;let p;for(i=0;i<d;i++)p=u[i],n.call(null,e[p],p,e)}}function ov(e,n){n=n.toLowerCase();const o=Object.keys(e);let i=o.length,a;for(;i-- >0;)if(a=o[i],n===a.toLowerCase())return a;return null}const lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,iv=e=>!ks(e)&&e!==lo;function Hf(){const{caseless:e}=iv(this)&&this||{},n={},o=(i,a)=>{const u=e&&ov(n,a)||a;xa(n[u])&&xa(i)?n[u]=Hf(n[u],i):xa(i)?n[u]=Hf({},i):pi(i)?n[u]=i.slice():n[u]=i};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&Is(arguments[i],o);return n}const BT=(e,n,o,{allOwnKeys:i}={})=>(Is(n,(a,u)=>{o&&nn(a)?e[u]=tv(a,o):e[u]=a},{allOwnKeys:i}),e),WT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),HT=(e,n,o,i)=>{e.prototype=Object.create(n.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),o&&Object.assign(e.prototype,o)},UT=(e,n,o,i)=>{let a,u,d;const p={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),u=a.length;u-- >0;)d=a[u],(!i||i(d,e,n))&&!p[d]&&(n[d]=e[d],p[d]=!0);e=o!==!1&&Lp(e)}while(e&&(!o||o(e,n))&&e!==Object.prototype);return n},VT=(e,n,o)=>{e=String(e),(o===void 0||o>e.length)&&(o=e.length),o-=n.length;const i=e.indexOf(n,o);return i!==-1&&i===o},KT=e=>{if(!e)return null;if(pi(e))return e;let n=e.length;if(!rv(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=e[n];return o},QT=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Lp(Uint8Array)),qT=(e,n)=>{const i=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=i.next())&&!a.done;){const u=a.value;n.call(e,u[0],u[1])}},GT=(e,n)=>{let o;const i=[];for(;(o=e.exec(n))!==null;)i.push(o);return i},YT=Rn("HTMLFormElement"),XT=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,i,a){return i.toUpperCase()+a}),ox=(({hasOwnProperty:e})=>(n,o)=>e.call(n,o))(Object.prototype),JT=Rn("RegExp"),sv=(e,n)=>{const o=Object.getOwnPropertyDescriptors(e),i={};Is(o,(a,u)=>{let d;(d=n(a,u,e))!==!1&&(i[u]=d||a)}),Object.defineProperties(e,i)},ZT=e=>{sv(e,(n,o)=>{if(nn(e)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const i=e[o];if(nn(i)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},eA=(e,n)=>{const o={},i=a=>{a.forEach(u=>{o[u]=!0})};return pi(e)?i(e):i(String(e).split(n)),o},tA=()=>{},nA=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n,Od="abcdefghijklmnopqrstuvwxyz",ix="0123456789",lv={DIGIT:ix,ALPHA:Od,ALPHA_DIGIT:Od+Od.toUpperCase()+ix},rA=(e=16,n=lv.ALPHA_DIGIT)=>{let o="";const{length:i}=n;for(;e--;)o+=n[Math.random()*i|0];return o};function oA(e){return!!(e&&nn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const iA=e=>{const n=new Array(10),o=(i,a)=>{if(ac(i)){if(n.indexOf(i)>=0)return;if(!("toJSON"in i)){n[a]=i;const u=pi(i)?[]:{};return Is(i,(d,p)=>{const h=o(d,a+1);!ks(h)&&(u[p]=h)}),n[a]=void 0,u}}return i};return o(e,0)},sA=Rn("AsyncFunction"),lA=e=>e&&(ac(e)||nn(e))&&nn(e.then)&&nn(e.catch),av=((e,n)=>e?setImmediate:n?((o,i)=>(lo.addEventListener("message",({source:a,data:u})=>{a===lo&&u===o&&i.length&&i.shift()()},!1),a=>{i.push(a),lo.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",nn(lo.postMessage)),aA=typeof queueMicrotask<"u"?queueMicrotask.bind(lo):typeof process<"u"&&process.nextTick||av,Z={isArray:pi,isArrayBuffer:nv,isBuffer:CT,isFormData:NT,isArrayBufferView:ET,isString:$T,isNumber:rv,isBoolean:TT,isObject:ac,isPlainObject:xa,isReadableStream:LT,isRequest:OT,isResponse:zT,isHeaders:_T,isUndefined:ks,isDate:AT,isFile:RT,isBlob:DT,isRegExp:JT,isFunction:nn,isStream:PT,isURLSearchParams:MT,isTypedArray:QT,isFileList:IT,forEach:Is,merge:Hf,extend:BT,trim:FT,stripBOM:WT,inherits:HT,toFlatObject:UT,kindOf:sc,kindOfTest:Rn,endsWith:VT,toArray:KT,forEachEntry:qT,matchAll:GT,isHTMLForm:YT,hasOwnProperty:ox,hasOwnProp:ox,reduceDescriptors:sv,freezeMethods:ZT,toObjectSet:eA,toCamelCase:XT,noop:tA,toFiniteNumber:nA,findKey:ov,global:lo,isContextDefined:iv,ALPHABET:lv,generateString:rA,isSpecCompliantForm:oA,toJSONObject:iA,isAsyncFn:sA,isThenable:lA,setImmediate:av,asap:aA};function De(e,n,o,i,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),i&&(this.request=i),a&&(this.response=a,this.status=a.status?a.status:null)}Z.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const cv=De.prototype,uv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{uv[e]={value:e}});Object.defineProperties(De,uv);Object.defineProperty(cv,"isAxiosError",{value:!0});De.from=(e,n,o,i,a,u)=>{const d=Object.create(cv);return Z.toFlatObject(e,d,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),De.call(d,e.message,n,o,i,a),d.cause=e,d.name=e.name,u&&Object.assign(d,u),d};const cA=null;function Uf(e){return Z.isPlainObject(e)||Z.isArray(e)}function dv(e){return Z.endsWith(e,"[]")?e.slice(0,-2):e}function sx(e,n,o){return e?e.concat(n).map(function(a,u){return a=dv(a),!o&&u?"["+a+"]":a}).join(o?".":""):n}function uA(e){return Z.isArray(e)&&!e.some(Uf)}const dA=Z.toFlatObject(Z,{},null,function(n){return/^is[A-Z]/.test(n)});function cc(e,n,o){if(!Z.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,o=Z.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,$){return!Z.isUndefined($[C])});const i=o.metaTokens,a=o.visitor||y,u=o.dots,d=o.indexes,h=(o.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(n);if(!Z.isFunction(a))throw new TypeError("visitor must be a function");function m(E){if(E===null)return"";if(Z.isDate(E))return E.toISOString();if(!h&&Z.isBlob(E))throw new De("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(E)||Z.isTypedArray(E)?h&&typeof Blob=="function"?new Blob([E]):Buffer.from(E):E}function y(E,C,$){let k=E;if(E&&!$&&typeof E=="object"){if(Z.endsWith(C,"{}"))C=i?C:C.slice(0,-2),E=JSON.stringify(E);else if(Z.isArray(E)&&uA(E)||(Z.isFileList(E)||Z.endsWith(C,"[]"))&&(k=Z.toArray(E)))return C=dv(C),k.forEach(function(S,R){!(Z.isUndefined(S)||S===null)&&n.append(d===!0?sx([C],R,u):d===null?C:C+"[]",m(S))}),!1}return Uf(E)?!0:(n.append(sx($,C,u),m(E)),!1)}const w=[],b=Object.assign(dA,{defaultVisitor:y,convertValue:m,isVisitable:Uf});function T(E,C){if(!Z.isUndefined(E)){if(w.indexOf(E)!==-1)throw Error("Circular reference detected in "+C.join("."));w.push(E),Z.forEach(E,function(k,j){(!(Z.isUndefined(k)||k===null)&&a.call(n,k,Z.isString(j)?j.trim():j,C,b))===!0&&T(k,C?C.concat(j):[j])}),w.pop()}}if(!Z.isObject(e))throw new TypeError("data must be an object");return T(e),n}function lx(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return n[i]})}function Op(e,n){this._pairs=[],e&&cc(e,this,n)}const fv=Op.prototype;fv.append=function(n,o){this._pairs.push([n,o])};fv.toString=function(n){const o=n?function(i){return n.call(this,i,lx)}:lx;return this._pairs.map(function(a){return o(a[0])+"="+o(a[1])},"").join("&")};function fA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pv(e,n,o){if(!n)return e;const i=o&&o.encode||fA;Z.isFunction(o)&&(o={serialize:o});const a=o&&o.serialize;let u;if(a?u=a(n,o):u=Z.isURLSearchParams(n)?n.toString():new Op(n,o).toString(i),u){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class ax{constructor(){this.handlers=[]}use(n,o,i){return this.handlers.push({fulfilled:n,rejected:o,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){Z.forEach(this.handlers,function(i){i!==null&&n(i)})}}const hv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pA=typeof URLSearchParams<"u"?URLSearchParams:Op,hA=typeof FormData<"u"?FormData:null,mA=typeof Blob<"u"?Blob:null,gA={isBrowser:!0,classes:{URLSearchParams:pA,FormData:hA,Blob:mA},protocols:["http","https","file","blob","url","data"]},zp=typeof window<"u"&&typeof document<"u",Vf=typeof navigator=="object"&&navigator||void 0,xA=zp&&(!Vf||["ReactNative","NativeScript","NS"].indexOf(Vf.product)<0),yA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wA=zp&&window.location.href||"http://localhost",vA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:zp,hasStandardBrowserEnv:xA,hasStandardBrowserWebWorkerEnv:yA,navigator:Vf,origin:wA},Symbol.toStringTag,{value:"Module"})),Dt={...vA,...gA};function bA(e,n){return cc(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(o,i,a,u){return Dt.isNode&&Z.isBuffer(o)?(this.append(i,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function kA(e){return Z.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function SA(e){const n={},o=Object.keys(e);let i;const a=o.length;let u;for(i=0;i<a;i++)u=o[i],n[u]=e[u];return n}function mv(e){function n(o,i,a,u){let d=o[u++];if(d==="__proto__")return!0;const p=Number.isFinite(+d),h=u>=o.length;return d=!d&&Z.isArray(a)?a.length:d,h?(Z.hasOwnProp(a,d)?a[d]=[a[d],i]:a[d]=i,!p):((!a[d]||!Z.isObject(a[d]))&&(a[d]=[]),n(o,i,a[d],u)&&Z.isArray(a[d])&&(a[d]=SA(a[d])),!p)}if(Z.isFormData(e)&&Z.isFunction(e.entries)){const o={};return Z.forEachEntry(e,(i,a)=>{n(kA(i),a,o,0)}),o}return null}function jA(e,n,o){if(Z.isString(e))try{return(n||JSON.parse)(e),Z.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(o||JSON.stringify)(e)}const Ps={transitional:hv,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const i=o.getContentType()||"",a=i.indexOf("application/json")>-1,u=Z.isObject(n);if(u&&Z.isHTMLForm(n)&&(n=new FormData(n)),Z.isFormData(n))return a?JSON.stringify(mv(n)):n;if(Z.isArrayBuffer(n)||Z.isBuffer(n)||Z.isStream(n)||Z.isFile(n)||Z.isBlob(n)||Z.isReadableStream(n))return n;if(Z.isArrayBufferView(n))return n.buffer;if(Z.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let p;if(u){if(i.indexOf("application/x-www-form-urlencoded")>-1)return bA(n,this.formSerializer).toString();if((p=Z.isFileList(n))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return cc(p?{"files[]":n}:n,h&&new h,this.formSerializer)}}return u||a?(o.setContentType("application/json",!1),jA(n)):n}],transformResponse:[function(n){const o=this.transitional||Ps.transitional,i=o&&o.forcedJSONParsing,a=this.responseType==="json";if(Z.isResponse(n)||Z.isReadableStream(n))return n;if(n&&Z.isString(n)&&(i&&!this.responseType||a)){const d=!(o&&o.silentJSONParsing)&&a;try{return JSON.parse(n)}catch(p){if(d)throw p.name==="SyntaxError"?De.from(p,De.ERR_BAD_RESPONSE,this,null,this.response):p}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],e=>{Ps.headers[e]={}});const CA=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),EA=e=>{const n={};let o,i,a;return e&&e.split(`
`).forEach(function(d){a=d.indexOf(":"),o=d.substring(0,a).trim().toLowerCase(),i=d.substring(a+1).trim(),!(!o||n[o]&&CA[o])&&(o==="set-cookie"?n[o]?n[o].push(i):n[o]=[i]:n[o]=n[o]?n[o]+", "+i:i)}),n},cx=Symbol("internals");function is(e){return e&&String(e).trim().toLowerCase()}function ya(e){return e===!1||e==null?e:Z.isArray(e)?e.map(ya):String(e)}function $A(e){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=o.exec(e);)n[i[1]]=i[2];return n}const TA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function zd(e,n,o,i,a){if(Z.isFunction(i))return i.call(this,n,o);if(a&&(n=o),!!Z.isString(n)){if(Z.isString(i))return n.indexOf(i)!==-1;if(Z.isRegExp(i))return i.test(n)}}function AA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,i)=>o.toUpperCase()+i)}function RA(e,n){const o=Z.toCamelCase(" "+n);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+o,{value:function(a,u,d){return this[i].call(this,n,a,u,d)},configurable:!0})})}class Vt{constructor(n){n&&this.set(n)}set(n,o,i){const a=this;function u(p,h,m){const y=is(h);if(!y)throw new Error("header name must be a non-empty string");const w=Z.findKey(a,y);(!w||a[w]===void 0||m===!0||m===void 0&&a[w]!==!1)&&(a[w||h]=ya(p))}const d=(p,h)=>Z.forEach(p,(m,y)=>u(m,y,h));if(Z.isPlainObject(n)||n instanceof this.constructor)d(n,o);else if(Z.isString(n)&&(n=n.trim())&&!TA(n))d(EA(n),o);else if(Z.isHeaders(n))for(const[p,h]of n.entries())u(h,p,i);else n!=null&&u(o,n,i);return this}get(n,o){if(n=is(n),n){const i=Z.findKey(this,n);if(i){const a=this[i];if(!o)return a;if(o===!0)return $A(a);if(Z.isFunction(o))return o.call(this,a,i);if(Z.isRegExp(o))return o.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=is(n),n){const i=Z.findKey(this,n);return!!(i&&this[i]!==void 0&&(!o||zd(this,this[i],i,o)))}return!1}delete(n,o){const i=this;let a=!1;function u(d){if(d=is(d),d){const p=Z.findKey(i,d);p&&(!o||zd(i,i[p],p,o))&&(delete i[p],a=!0)}}return Z.isArray(n)?n.forEach(u):u(n),a}clear(n){const o=Object.keys(this);let i=o.length,a=!1;for(;i--;){const u=o[i];(!n||zd(this,this[u],u,n,!0))&&(delete this[u],a=!0)}return a}normalize(n){const o=this,i={};return Z.forEach(this,(a,u)=>{const d=Z.findKey(i,u);if(d){o[d]=ya(a),delete o[u];return}const p=n?AA(u):String(u).trim();p!==u&&delete o[u],o[p]=ya(a),i[p]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return Z.forEach(this,(i,a)=>{i!=null&&i!==!1&&(o[a]=n&&Z.isArray(i)?i.join(", "):i)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const i=new this(n);return o.forEach(a=>i.set(a)),i}static accessor(n){const i=(this[cx]=this[cx]={accessors:{}}).accessors,a=this.prototype;function u(d){const p=is(d);i[p]||(RA(a,d),i[p]=!0)}return Z.isArray(n)?n.forEach(u):u(n),this}}Vt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(Vt.prototype,({value:e},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(i){this[o]=i}}});Z.freezeMethods(Vt);function _d(e,n){const o=this||Ps,i=n||o,a=Vt.from(i.headers);let u=i.data;return Z.forEach(e,function(p){u=p.call(o,u,a.normalize(),n?n.status:void 0)}),a.normalize(),u}function gv(e){return!!(e&&e.__CANCEL__)}function hi(e,n,o){De.call(this,e??"canceled",De.ERR_CANCELED,n,o),this.name="CanceledError"}Z.inherits(hi,De,{__CANCEL__:!0});function xv(e,n,o){const i=o.config.validateStatus;!o.status||!i||i(o.status)?e(o):n(new De("Request failed with status code "+o.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function DA(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function IA(e,n){e=e||10;const o=new Array(e),i=new Array(e);let a=0,u=0,d;return n=n!==void 0?n:1e3,function(h){const m=Date.now(),y=i[u];d||(d=m),o[a]=h,i[a]=m;let w=u,b=0;for(;w!==a;)b+=o[w++],w=w%e;if(a=(a+1)%e,a===u&&(u=(u+1)%e),m-d<n)return;const T=y&&m-y;return T?Math.round(b*1e3/T):void 0}}function PA(e,n){let o=0,i=1e3/n,a,u;const d=(m,y=Date.now())=>{o=y,a=null,u&&(clearTimeout(u),u=null),e.apply(null,m)};return[(...m)=>{const y=Date.now(),w=y-o;w>=i?d(m,y):(a=m,u||(u=setTimeout(()=>{u=null,d(a)},i-w)))},()=>a&&d(a)]}const Na=(e,n,o=3)=>{let i=0;const a=IA(50,250);return PA(u=>{const d=u.loaded,p=u.lengthComputable?u.total:void 0,h=d-i,m=a(h),y=d<=p;i=d;const w={loaded:d,total:p,progress:p?d/p:void 0,bytes:h,rate:m||void 0,estimated:m&&p&&y?(p-d)/m:void 0,event:u,lengthComputable:p!=null,[n?"download":"upload"]:!0};e(w)},o)},ux=(e,n)=>{const o=e!=null;return[i=>n[0]({lengthComputable:o,total:e,loaded:i}),n[1]]},dx=e=>(...n)=>Z.asap(()=>e(...n)),NA=Dt.hasStandardBrowserEnv?((e,n)=>o=>(o=new URL(o,Dt.origin),e.protocol===o.protocol&&e.host===o.host&&(n||e.port===o.port)))(new URL(Dt.origin),Dt.navigator&&/(msie|trident)/i.test(Dt.navigator.userAgent)):()=>!0,MA=Dt.hasStandardBrowserEnv?{write(e,n,o,i,a,u){const d=[e+"="+encodeURIComponent(n)];Z.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),Z.isString(i)&&d.push("path="+i),Z.isString(a)&&d.push("domain="+a),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function LA(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function OA(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function yv(e,n){return e&&!LA(n)?OA(e,n):n}const fx=e=>e instanceof Vt?{...e}:e;function go(e,n){n=n||{};const o={};function i(m,y,w,b){return Z.isPlainObject(m)&&Z.isPlainObject(y)?Z.merge.call({caseless:b},m,y):Z.isPlainObject(y)?Z.merge({},y):Z.isArray(y)?y.slice():y}function a(m,y,w,b){if(Z.isUndefined(y)){if(!Z.isUndefined(m))return i(void 0,m,w,b)}else return i(m,y,w,b)}function u(m,y){if(!Z.isUndefined(y))return i(void 0,y)}function d(m,y){if(Z.isUndefined(y)){if(!Z.isUndefined(m))return i(void 0,m)}else return i(void 0,y)}function p(m,y,w){if(w in n)return i(m,y);if(w in e)return i(void 0,m)}const h={url:u,method:u,data:u,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:p,headers:(m,y,w)=>a(fx(m),fx(y),w,!0)};return Z.forEach(Object.keys(Object.assign({},e,n)),function(y){const w=h[y]||a,b=w(e[y],n[y],y);Z.isUndefined(b)&&w!==p||(o[y]=b)}),o}const wv=e=>{const n=go({},e);let{data:o,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:u,headers:d,auth:p}=n;n.headers=d=Vt.from(d),n.url=pv(yv(n.baseURL,n.url),e.params,e.paramsSerializer),p&&d.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(Z.isFormData(o)){if(Dt.hasStandardBrowserEnv||Dt.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((h=d.getContentType())!==!1){const[m,...y]=h?h.split(";").map(w=>w.trim()).filter(Boolean):[];d.setContentType([m||"multipart/form-data",...y].join("; "))}}if(Dt.hasStandardBrowserEnv&&(i&&Z.isFunction(i)&&(i=i(n)),i||i!==!1&&NA(n.url))){const m=a&&u&&MA.read(u);m&&d.set(a,m)}return n},zA=typeof XMLHttpRequest<"u",_A=zA&&function(e){return new Promise(function(o,i){const a=wv(e);let u=a.data;const d=Vt.from(a.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:m}=a,y,w,b,T,E;function C(){T&&T(),E&&E(),a.cancelToken&&a.cancelToken.unsubscribe(y),a.signal&&a.signal.removeEventListener("abort",y)}let $=new XMLHttpRequest;$.open(a.method.toUpperCase(),a.url,!0),$.timeout=a.timeout;function k(){if(!$)return;const S=Vt.from("getAllResponseHeaders"in $&&$.getAllResponseHeaders()),M={data:!p||p==="text"||p==="json"?$.responseText:$.response,status:$.status,statusText:$.statusText,headers:S,config:e,request:$};xv(function(X){o(X),C()},function(X){i(X),C()},M),$=null}"onloadend"in $?$.onloadend=k:$.onreadystatechange=function(){!$||$.readyState!==4||$.status===0&&!($.responseURL&&$.responseURL.indexOf("file:")===0)||setTimeout(k)},$.onabort=function(){$&&(i(new De("Request aborted",De.ECONNABORTED,e,$)),$=null)},$.onerror=function(){i(new De("Network Error",De.ERR_NETWORK,e,$)),$=null},$.ontimeout=function(){let R=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const M=a.transitional||hv;a.timeoutErrorMessage&&(R=a.timeoutErrorMessage),i(new De(R,M.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,e,$)),$=null},u===void 0&&d.setContentType(null),"setRequestHeader"in $&&Z.forEach(d.toJSON(),function(R,M){$.setRequestHeader(M,R)}),Z.isUndefined(a.withCredentials)||($.withCredentials=!!a.withCredentials),p&&p!=="json"&&($.responseType=a.responseType),m&&([b,E]=Na(m,!0),$.addEventListener("progress",b)),h&&$.upload&&([w,T]=Na(h),$.upload.addEventListener("progress",w),$.upload.addEventListener("loadend",T)),(a.cancelToken||a.signal)&&(y=S=>{$&&(i(!S||S.type?new hi(null,e,$):S),$.abort(),$=null)},a.cancelToken&&a.cancelToken.subscribe(y),a.signal&&(a.signal.aborted?y():a.signal.addEventListener("abort",y)));const j=DA(a.url);if(j&&Dt.protocols.indexOf(j)===-1){i(new De("Unsupported protocol "+j+":",De.ERR_BAD_REQUEST,e));return}$.send(u||null)})},FA=(e,n)=>{const{length:o}=e=e?e.filter(Boolean):[];if(n||o){let i=new AbortController,a;const u=function(m){if(!a){a=!0,p();const y=m instanceof Error?m:this.reason;i.abort(y instanceof De?y:new hi(y instanceof Error?y.message:y))}};let d=n&&setTimeout(()=>{d=null,u(new De(`timeout ${n} of ms exceeded`,De.ETIMEDOUT))},n);const p=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(u):m.removeEventListener("abort",u)}),e=null)};e.forEach(m=>m.addEventListener("abort",u));const{signal:h}=i;return h.unsubscribe=()=>Z.asap(p),h}},BA=function*(e,n){let o=e.byteLength;if(o<n){yield e;return}let i=0,a;for(;i<o;)a=i+n,yield e.slice(i,a),i=a},WA=async function*(e,n){for await(const o of HA(e))yield*BA(o,n)},HA=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:o,value:i}=await n.read();if(o)break;yield i}}finally{await n.cancel()}},px=(e,n,o,i)=>{const a=WA(e,n);let u=0,d,p=h=>{d||(d=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:m,value:y}=await a.next();if(m){p(),h.close();return}let w=y.byteLength;if(o){let b=u+=w;o(b)}h.enqueue(new Uint8Array(y))}catch(m){throw p(m),m}},cancel(h){return p(h),a.return()}},{highWaterMark:2})},uc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",vv=uc&&typeof ReadableStream=="function",UA=uc&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),bv=(e,...n)=>{try{return!!e(...n)}catch{return!1}},VA=vv&&bv(()=>{let e=!1;const n=new Request(Dt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),hx=64*1024,Kf=vv&&bv(()=>Z.isReadableStream(new Response("").body)),Ma={stream:Kf&&(e=>e.body)};uc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Ma[n]&&(Ma[n]=Z.isFunction(e[n])?o=>o[n]():(o,i)=>{throw new De(`Response type '${n}' is not supported`,De.ERR_NOT_SUPPORT,i)})})})(new Response);const KA=async e=>{if(e==null)return 0;if(Z.isBlob(e))return e.size;if(Z.isSpecCompliantForm(e))return(await new Request(Dt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(e)||Z.isArrayBuffer(e))return e.byteLength;if(Z.isURLSearchParams(e)&&(e=e+""),Z.isString(e))return(await UA(e)).byteLength},QA=async(e,n)=>{const o=Z.toFiniteNumber(e.getContentLength());return o??KA(n)},qA=uc&&(async e=>{let{url:n,method:o,data:i,signal:a,cancelToken:u,timeout:d,onDownloadProgress:p,onUploadProgress:h,responseType:m,headers:y,withCredentials:w="same-origin",fetchOptions:b}=wv(e);m=m?(m+"").toLowerCase():"text";let T=FA([a,u&&u.toAbortSignal()],d),E;const C=T&&T.unsubscribe&&(()=>{T.unsubscribe()});let $;try{if(h&&VA&&o!=="get"&&o!=="head"&&($=await QA(y,i))!==0){let M=new Request(n,{method:"POST",body:i,duplex:"half"}),K;if(Z.isFormData(i)&&(K=M.headers.get("content-type"))&&y.setContentType(K),M.body){const[X,ee]=ux($,Na(dx(h)));i=px(M.body,hx,X,ee)}}Z.isString(w)||(w=w?"include":"omit");const k="credentials"in Request.prototype;E=new Request(n,{...b,signal:T,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:k?w:void 0});let j=await fetch(E);const S=Kf&&(m==="stream"||m==="response");if(Kf&&(p||S&&C)){const M={};["status","statusText","headers"].forEach(ie=>{M[ie]=j[ie]});const K=Z.toFiniteNumber(j.headers.get("content-length")),[X,ee]=p&&ux(K,Na(dx(p),!0))||[];j=new Response(px(j.body,hx,X,()=>{ee&&ee(),C&&C()}),M)}m=m||"text";let R=await Ma[Z.findKey(Ma,m)||"text"](j,e);return!S&&C&&C(),await new Promise((M,K)=>{xv(M,K,{data:R,headers:Vt.from(j.headers),status:j.status,statusText:j.statusText,config:e,request:E})})}catch(k){throw C&&C(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,e,E),{cause:k.cause||k}):De.from(k,k&&k.code,e,E)}}),Qf={http:cA,xhr:_A,fetch:qA};Z.forEach(Qf,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const mx=e=>`- ${e}`,GA=e=>Z.isFunction(e)||e===null||e===!1,kv={getAdapter:e=>{e=Z.isArray(e)?e:[e];const{length:n}=e;let o,i;const a={};for(let u=0;u<n;u++){o=e[u];let d;if(i=o,!GA(o)&&(i=Qf[(d=String(o)).toLowerCase()],i===void 0))throw new De(`Unknown adapter '${d}'`);if(i)break;a[d||"#"+u]=i}if(!i){const u=Object.entries(a).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let d=n?u.length>1?`since :
`+u.map(mx).join(`
`):" "+mx(u[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return i},adapters:Qf};function Fd(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new hi(null,e)}function gx(e){return Fd(e),e.headers=Vt.from(e.headers),e.data=_d.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),kv.getAdapter(e.adapter||Ps.adapter)(e).then(function(i){return Fd(e),i.data=_d.call(e,e.transformResponse,i),i.headers=Vt.from(i.headers),i},function(i){return gv(i)||(Fd(e),i&&i.response&&(i.response.data=_d.call(e,e.transformResponse,i.response),i.response.headers=Vt.from(i.response.headers))),Promise.reject(i)})}const Sv="1.7.9",dc={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{dc[e]=function(i){return typeof i===e||"a"+(n<1?"n ":" ")+e}});const xx={};dc.transitional=function(n,o,i){function a(u,d){return"[Axios v"+Sv+"] Transitional option '"+u+"'"+d+(i?". "+i:"")}return(u,d,p)=>{if(n===!1)throw new De(a(d," has been removed"+(o?" in "+o:"")),De.ERR_DEPRECATED);return o&&!xx[d]&&(xx[d]=!0,console.warn(a(d," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(u,d,p):!0}};dc.spelling=function(n){return(o,i)=>(console.warn(`${i} is likely a misspelling of ${n}`),!0)};function YA(e,n,o){if(typeof e!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let a=i.length;for(;a-- >0;){const u=i[a],d=n[u];if(d){const p=e[u],h=p===void 0||d(p,u,e);if(h!==!0)throw new De("option "+u+" must be "+h,De.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new De("Unknown option "+u,De.ERR_BAD_OPTION)}}const wa={assertOptions:YA,validators:dc},_n=wa.validators;class co{constructor(n){this.defaults=n,this.interceptors={request:new ax,response:new ax}}async request(n,o){try{return await this._request(n,o)}catch(i){if(i instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{i.stack?u&&!String(i.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+u):i.stack=u}catch{}}throw i}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=go(this.defaults,o);const{transitional:i,paramsSerializer:a,headers:u}=o;i!==void 0&&wa.assertOptions(i,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),a!=null&&(Z.isFunction(a)?o.paramsSerializer={serialize:a}:wa.assertOptions(a,{encode:_n.function,serialize:_n.function},!0)),wa.assertOptions(o,{baseUrl:_n.spelling("baseURL"),withXsrfToken:_n.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let d=u&&Z.merge(u.common,u[o.method]);u&&Z.forEach(["delete","get","head","post","put","patch","common"],E=>{delete u[E]}),o.headers=Vt.concat(d,u);const p=[];let h=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(o)===!1||(h=h&&C.synchronous,p.unshift(C.fulfilled,C.rejected))});const m=[];this.interceptors.response.forEach(function(C){m.push(C.fulfilled,C.rejected)});let y,w=0,b;if(!h){const E=[gx.bind(this),void 0];for(E.unshift.apply(E,p),E.push.apply(E,m),b=E.length,y=Promise.resolve(o);w<b;)y=y.then(E[w++],E[w++]);return y}b=p.length;let T=o;for(w=0;w<b;){const E=p[w++],C=p[w++];try{T=E(T)}catch($){C.call(this,$);break}}try{y=gx.call(this,T)}catch(E){return Promise.reject(E)}for(w=0,b=m.length;w<b;)y=y.then(m[w++],m[w++]);return y}getUri(n){n=go(this.defaults,n);const o=yv(n.baseURL,n.url);return pv(o,n.params,n.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(n){co.prototype[n]=function(o,i){return this.request(go(i||{},{method:n,url:o,data:(i||{}).data}))}});Z.forEach(["post","put","patch"],function(n){function o(i){return function(u,d,p){return this.request(go(p||{},{method:n,headers:i?{"Content-Type":"multipart/form-data"}:{},url:u,data:d}))}}co.prototype[n]=o(),co.prototype[n+"Form"]=o(!0)});class _p{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const i=this;this.promise.then(a=>{if(!i._listeners)return;let u=i._listeners.length;for(;u-- >0;)i._listeners[u](a);i._listeners=null}),this.promise.then=a=>{let u;const d=new Promise(p=>{i.subscribe(p),u=p}).then(a);return d.cancel=function(){i.unsubscribe(u)},d},n(function(u,d,p){i.reason||(i.reason=new hi(u,d,p),o(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=i=>{n.abort(i)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new _p(function(a){n=a}),cancel:n}}}function XA(e){return function(o){return e.apply(null,o)}}function JA(e){return Z.isObject(e)&&e.isAxiosError===!0}const qf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qf).forEach(([e,n])=>{qf[n]=e});function jv(e){const n=new co(e),o=tv(co.prototype.request,n);return Z.extend(o,co.prototype,n,{allOwnKeys:!0}),Z.extend(o,n,null,{allOwnKeys:!0}),o.create=function(a){return jv(go(e,a))},o}const Ve=jv(Ps);Ve.Axios=co;Ve.CanceledError=hi;Ve.CancelToken=_p;Ve.isCancel=gv;Ve.VERSION=Sv;Ve.toFormData=cc;Ve.AxiosError=De;Ve.Cancel=Ve.CanceledError;Ve.all=function(n){return Promise.all(n)};Ve.spread=XA;Ve.isAxiosError=JA;Ve.mergeConfig=go;Ve.AxiosHeaders=Vt;Ve.formToJSON=e=>mv(Z.isHTMLForm(e)?new FormData(e):e);Ve.getAdapter=kv.getAdapter;Ve.HttpStatusCode=qf;Ve.default=Ve;const Cv="http://localhost:8082";async function fc(e,n){try{await Ve.post(`${Cv}/scores`,{game:e,value:n})}catch{}}async function ZA(e,n="desc"){try{const o=await Ve.get(`${Cv}/scores`,{params:{game:e,order:n}});return Array.isArray(o.data)?o.data:[]}catch{return[]}}const pc=({game:e,order:n="desc",format:o=d=>String(d),title:i="High Scores",refreshKey:a,width:u=180})=>{const[d,p]=g.useState([]),[h,m]=g.useState(!1);return g.useEffect(()=>{let y=!0;return ZA(e,n).then(w=>{y&&(p(w),m(!0))}),()=>{y=!1}},[e,n,a]),l.jsxs("div",{style:{width:u},children:[l.jsxs("div",{style:{fontWeight:"bold",fontSize:12,marginBottom:4,color:"#000080"},children:["🏆 ",i]}),l.jsx(wt,{variant:"well",style:{background:"#fff",padding:4,minHeight:60},children:h?d.length===0?l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"No scores yet — be the first!"}):d.map((y,w)=>l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,padding:"1px 4px",background:w===0?"#fff7cc":"transparent"},children:[l.jsxs("span",{style:{color:"#555",width:18},children:[w+1,"."]}),l.jsx("span",{style:{fontFamily:"monospace",fontWeight:w===0?"bold":"normal"},children:o(y.value)}),l.jsx("span",{style:{color:"#999",fontSize:10,marginLeft:"auto",paddingLeft:8},children:new Date(y.createdAt).toLocaleDateString()})]},y.id)):l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"Loading…"})})]})},Jl={beginner:{rows:9,cols:9,mines:10,label:"Beginner"},intermediate:{rows:16,cols:16,mines:40,label:"Intermediate"},expert:{rows:16,cols:30,mines:99,label:"Expert"}},eR=["","#0000ff","#008000","#ff0000","#000080","#800000","#008080","#000000","#808080"],yx=(e,n)=>Array.from({length:e},()=>Array.from({length:n},()=>({mine:!1,revealed:!1,flagged:!1,adj:0})));function tR(e,n,o){const i=e.length,a=e[0].length;let u=0;for(;u<n;){const d=Math.floor(Math.random()*i),p=Math.floor(Math.random()*a);e[d][p].mine||o.has(`${d},${p}`)||(e[d][p].mine=!0,u++)}for(let d=0;d<i;d++)for(let p=0;p<a;p++){if(e[d][p].mine)continue;let h=0;for(let m=-1;m<=1;m++)for(let y=-1;y<=1;y++){const w=d+m,b=p+y;w>=0&&w<i&&b>=0&&b<a&&e[w][b].mine&&h++}e[d][p].adj=h}}const nR=()=>{const[e,n]=g.useState("beginner"),o=Jl[e],[i,a]=g.useState(()=>yx(o.rows,o.cols)),[u,d]=g.useState("playing"),[p,h]=g.useState(!1),[m,y]=g.useState(0),[w,b]=g.useState(0),T=g.useRef(0),E=(M=e)=>{const K=Jl[M];n(M),a(yx(K.rows,K.cols)),d("playing"),h(!1),y(0),T.current=0};g.useEffect(()=>{if(u!=="playing"||!p)return;const M=setInterval(()=>y(K=>(T.current=K+1,K+1)),1e3);return()=>clearInterval(M)},[u,p]);const C=o.mines-i.flat().filter(M=>M.flagged).length,$=(M,K)=>{u==="playing"&&a(X=>{const ee=X.map(he=>he.map(le=>({...le})));if(!p){const he=new Set;for(let le=-1;le<=1;le++)for(let _=-1;_<=1;_++)he.add(`${M+le},${K+_}`);tR(ee,o.mines,he),h(!0)}const ie=ee[M][K];if(ie.revealed||ie.flagged)return X;if(ie.mine)return ee.forEach(he=>he.forEach(le=>le.mine&&(le.revealed=!0))),d("lost"),ee;const me=[[M,K]];for(;me.length;){const[he,le]=me.pop(),_=ee[he][le];if(!(_.revealed||_.flagged)&&(_.revealed=!0,_.adj===0))for(let D=-1;D<=1;D++)for(let I=-1;I<=1;I++){const H=he+D,W=le+I;H>=0&&H<ee.length&&W>=0&&W<ee[0].length&&!ee[H][W].mine&&me.push([H,W])}}return ee.flat().filter(he=>he.revealed&&!he.mine).length===o.rows*o.cols-o.mines&&(d("won"),mo(),fc(`minesweeper:${e}`,T.current).then(()=>b(he=>he+1))),ee})},k=(M,K,X)=>{M.preventDefault(),u==="playing"&&a(ee=>ee.map((ie,me)=>ie.map((fe,he)=>me===K&&he===X&&!fe.revealed?{...fe,flagged:!fe.flagged}:fe)))},j=u==="won"?"😎":u==="lost"?"😵":"🙂",S=M=>({border:"2px solid",borderColor:M?"#808080 #fff #fff #808080":"#fff #808080 #808080 #fff"}),R=M=>l.jsx("span",{style:{background:"#000",color:"#f00",fontFamily:"monospace",fontSize:20,padding:"0 4px",minWidth:42,textAlign:"center",letterSpacing:1},children:String(Math.max(0,Math.min(999,M))).padStart(3,"0")});return l.jsxs(Et,{$minW:260,$minH:300,children:[l.jsxs(gn,{children:[l.jsxs(Fe,{label:"Game",children:[l.jsxs(Ae,{onMouseDown:M=>{M.preventDefault(),E()},children:["New",l.jsx("span",{children:"F2"})]}),l.jsx(As,{}),Object.keys(Jl).map(M=>l.jsxs(Ae,{onMouseDown:K=>{K.preventDefault(),E(M)},children:[e===M?"● ":"○ ",Jl[M].label]},M))]}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Minesweeper — VortexOS"})})]}),l.jsxs(mn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{style:{background:"#c0c0c0",userSelect:"none"},children:[l.jsxs("div",{style:{...S(!0),display:"flex",justifyContent:"space-between",alignItems:"center",padding:6,marginBottom:8},children:[R(C),l.jsx("button",{onClick:()=>E(),style:{...S(!1),width:32,height:32,fontSize:18,cursor:"pointer",background:"#c0c0c0"},children:j}),R(m)]}),l.jsx("div",{style:{...S(!0),display:"inline-block",padding:3},children:i.map((M,K)=>l.jsx("div",{style:{display:"flex"},children:M.map((X,ee)=>l.jsx("div",{onClick:()=>$(K,ee),onContextMenu:ie=>k(ie,K,ee),style:{width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:13,cursor:u==="playing"?"pointer":"default",background:X.revealed&&X.mine?"#f00":"#c0c0c0",color:eR[X.adj]||"#000",...X.revealed?{border:"1px solid #808080"}:S(!1)},children:X.flagged?"🚩":X.revealed?X.mine?"💣":X.adj||"":""},ee))},K))})]}),l.jsx(pc,{game:`minesweeper:${e}`,order:"asc",format:M=>`${M}s`,title:`${o.label} Best`,width:130,refreshKey:w})]}),l.jsxs(Pt,{children:[l.jsx(Oe,{$flex:1,children:o.label}),l.jsx(Oe,{children:u==="won"?"You won! 😎":u==="lost"?"BOOM 💥":p?"Playing…":"Click to start"}),l.jsxs(Oe,{children:[m,"s"]})]})]})},Bd=["♠","♥","♦","♣"],Wd=e=>e===1||e===2,rR=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],Hd=56,ss=78,oR=20;function wx(){const e=[];for(let a=0;a<4;a=a+1)for(let u=1;u<=13;u++)e.push({suit:a,rank:u,up:!1});for(let a=e.length-1;a>0;a--){const u=Math.floor(Math.random()*(a+1));[e[a],e[u]]=[e[u],e[a]]}const n=[[],[],[],[],[],[],[]];let o=0;for(let a=0;a<7;a++)for(let u=0;u<=a;u++){const d=e[o++];d.up=u===a,n[a].push(d)}return{stock:e.slice(o).map(a=>({...a,up:!1})),waste:[],found:[[],[],[],[]],tab:n}}const iR=()=>{const[e,n]=g.useState(wx),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,m]=g.useState(!1),[y,w]=g.useState(!1),[b,T]=g.useState(0),E=g.useRef(!1);g.useEffect(()=>{if(h)return;const D=setInterval(()=>p(I=>I+1),1e3);return()=>clearInterval(D)},[h]);const C=()=>{n(wx()),i(null),u(0),p(0),m(!1),E.current=!1},$=D=>{D.found.every(I=>I.length===13)&&(m(!0),E.current||(E.current=!0,mo(),fc("solitaire",d).then(()=>T(I=>I+1))))},k=D=>{u(I=>I+1),n(D),i(null),$(D)},j=D=>({stock:[...D.stock],waste:[...D.waste],found:D.found.map(I=>[...I]),tab:D.tab.map(I=>[...I])}),S=()=>{const D=j(e);if(D.stock.length===0)D.stock=D.waste.reverse().map(I=>({...I,up:!1})),D.waste=[];else{const I=y?3:1;for(let H=0;H<I&&D.stock.length;H++){const W=D.stock.pop();W.up=!0,D.waste.push(W)}}n(D),i(null)},R=(D,I)=>I.length===0?D.rank===1:I[I.length-1].suit===D.suit&&D.rank===I[I.length-1].rank+1,M=(D,I)=>I.length===0?D.rank===13:I[I.length-1].up&&Wd(I[I.length-1].suit)!==Wd(D.suit)&&I[I.length-1].rank===D.rank+1,K=(D,I)=>I.pile==="waste"?D.waste.slice(-1):I.pile==="found"?D.found[I.col].slice(-1):D.tab[I.col].slice(I.idx),X=(D,I)=>{if(I.pile==="waste")D.waste.pop();else if(I.pile==="found")D.found[I.col].pop();else{D.tab[I.col]=D.tab[I.col].slice(0,I.idx);const H=D.tab[I.col];H.length&&!H[H.length-1].up&&(H[H.length-1].up=!0)}},ee=(D,I)=>{if(!K(e,D).length)return!1;const W=j(e),B=K(W,D);return I.pile==="found"?B.length!==1||!R(B[0],W.found[I.col])?!1:(X(W,D),W.found[I.col].push(B[0]),k(W),!0):I.pile==="tab"&&M(B[0],W.tab[I.col])?(X(W,D),W.tab[I.col].push(...B),k(W),!0):!1},ie=D=>{const I=K(e,D);if(I.length!==1)return!1;for(let H=0;H<4;H++)if(R(I[0],e.found[H]))return ee(D,{pile:"found",col:H});return!1},me=(D,I,H,W)=>{if(h||D==="tab"&&!W.up)return;if(!o){i({pile:D,col:I,idx:H});return}if(o.pile===D&&o.col===I&&o.idx===H){i(null);return}ee(o,D==="found"?{pile:D,col:I}:{pile:"tab",col:I})||i({pile:D,col:I,idx:H})},fe=(D,I)=>{h||!o||ee(o,{pile:D,col:I})||i(null)},he=(D,I,H)=>(o==null?void 0:o.pile)===D&&o.col===I&&o.idx===H,le=({card:D,sel:I,onClick:H,onDouble:W})=>l.jsx("div",{onClick:H,onDoubleClick:W,style:{width:Hd,height:ss,boxSizing:"border-box",borderRadius:4,cursor:"pointer",border:I?"2px solid #ffd000":"1px solid #000",background:D.up?"#fff":"linear-gradient(135deg, #1064d0 25%, #0a3d80 25% 50%, #1064d0 50% 75%, #0a3d80 75%)",backgroundSize:D.up?void 0:"10px 10px",color:Wd(D.suit)?"#c00000":"#000",position:"relative",userSelect:"none",flexShrink:0,boxShadow:I?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:D.up&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:13,fontWeight:"bold",lineHeight:1},children:[rR[D.rank],l.jsx("div",{children:Bd[D.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26},children:Bd[D.suit]})]})}),_=({children:D,onClick:I})=>l.jsx("div",{onClick:I,style:{width:Hd,height:ss,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",flexShrink:0},children:D});return l.jsxs(Et,{$minW:560,$minH:460,children:[l.jsxs(gn,{children:[l.jsxs(Fe,{label:"Game",children:[l.jsxs(Ae,{onMouseDown:D=>{D.preventDefault(),C()},children:["New Game",l.jsx("span",{children:"F2"})]}),l.jsxs(Ae,{onMouseDown:D=>{D.preventDefault(),w(I=>!I)},children:[y?"● ":"○ ","Draw three"]})]}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Solitaire — VortexOS"})})]}),l.jsxs(mn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[l.jsx("div",{onClick:S,children:e.stock.length?l.jsx(le,{card:{suit:0,rank:0,up:!1}}):l.jsx(_,{children:l.jsx("div",{style:{color:"#fff",textAlign:"center",lineHeight:`${ss}px`},children:"↻"})})}),l.jsx("div",{children:e.waste.length?l.jsx(le,{card:e.waste[e.waste.length-1],sel:he("waste",0,e.waste.length-1),onClick:()=>me("waste",0,e.waste.length-1,e.waste[e.waste.length-1]),onDouble:()=>ie({pile:"waste",col:0,idx:e.waste.length-1})}):l.jsx(_,{})}),l.jsx("div",{style:{flex:1}}),e.found.map((D,I)=>l.jsx("div",{onClick:()=>D.length===0&&fe("found",I),children:D.length?l.jsx(le,{card:D[D.length-1],sel:he("found",I,D.length-1),onClick:()=>me("found",I,D.length-1,D[D.length-1])}):l.jsx(_,{onClick:()=>fe("found",I),children:l.jsx("div",{style:{color:"rgba(255,255,255,0.4)",textAlign:"center",lineHeight:`${ss}px`,fontSize:24},children:Bd[I]})})},I))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map((D,I)=>l.jsxs("div",{style:{position:"relative",width:Hd,minHeight:ss},onClick:()=>D.length===0&&fe("tab",I),children:[D.length===0&&l.jsx(_,{onClick:()=>fe("tab",I)}),D.map((H,W)=>l.jsx("div",{style:{position:"absolute",top:W*oR,left:0},children:l.jsx(le,{card:H,sel:he("tab",I,W),onClick:()=>me("tab",I,W,H),onDouble:()=>H.up&&ie({pile:"tab",col:I,idx:W})})},W))]},I))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 You won in ",d,"s and ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:C,children:"Play again"})]})]}),l.jsx(pc,{game:"solitaire",order:"asc",format:D=>`${Math.floor(D/60)}:${String(D%60).padStart(2,"0")}`,title:"Best Times",width:150,refreshKey:b})]}),l.jsxs(Pt,{children:[l.jsxs(Oe,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(Oe,{children:["Moves: ",a]}),l.jsx(Oe,{children:h?"You won! 🎉":`Stock: ${e.stock.length}`})]})]})},Qo=20,Jt=16,Ko=Qo*Jt,sR=110,Ud=(e,n)=>e.x===n.x&&e.y===n.y,lR=()=>{const e=g.useRef(null),n=g.useRef(null),o=g.useRef([]),i=g.useRef({x:1,y:0}),a=g.useRef({x:1,y:0}),u=g.useRef({x:0,y:0}),[d,p]=g.useState(0),[h,m]=g.useState("ready"),[y,w]=g.useState(0),b=g.useRef(h);b.current=h;const T=()=>{let k;do k={x:Math.floor(Math.random()*Qo),y:Math.floor(Math.random()*Qo)};while(o.current.some(j=>Ud(j,k)));u.current=k},E=()=>{var k;o.current=[{x:8,y:10},{x:7,y:10},{x:6,y:10}],i.current={x:1,y:0},a.current={x:1,y:0},T(),p(0),m("playing"),(k=n.current)==null||k.focus()},C=()=>{var j;const k=(j=e.current)==null?void 0:j.getContext("2d");if(k){k.fillStyle="#0a1f0a",k.fillRect(0,0,Ko,Ko),k.strokeStyle="#0f2f0f";for(let S=0;S<=Qo;S++)k.beginPath(),k.moveTo(S*Jt,0),k.lineTo(S*Jt,Ko),k.stroke(),k.beginPath(),k.moveTo(0,S*Jt),k.lineTo(Ko,S*Jt),k.stroke();k.fillStyle="#ff3b3b",k.fillRect(u.current.x*Jt+2,u.current.y*Jt+2,Jt-4,Jt-4),o.current.forEach((S,R)=>{k.fillStyle=R===0?"#9cff57":"#3ec70b",k.fillRect(S.x*Jt+1,S.y*Jt+1,Jt-2,Jt-2)})}};g.useEffect(()=>{C()},[]),g.useEffect(()=>{if(h!=="playing")return;const k=setInterval(()=>{const j=a.current;i.current=j;const S=o.current[0],R={x:S.x+j.x,y:S.y+j.y};if(R.x<0||R.y<0||R.x>=Qo||R.y>=Qo||o.current.some(M=>Ud(M,R))){m("over"),mo(),p(M=>(fc("snake",M).then(()=>w(K=>K+1)),M));return}o.current=[R,...o.current],Ud(R,u.current)?(p(M=>M+1),Np(),T()):o.current.pop(),C()},sR);return()=>clearInterval(k)},[h]);const $=k=>{const j=k.key,S=(R,M)=>{i.current.x===-R&&i.current.y===-M||(a.current={x:R,y:M})};j==="ArrowUp"||j==="w"?(k.preventDefault(),S(0,-1)):j==="ArrowDown"||j==="s"?(k.preventDefault(),S(0,1)):j==="ArrowLeft"||j==="a"?(k.preventDefault(),S(-1,0)):j==="ArrowRight"||j==="d"?(k.preventDefault(),S(1,0)):(j===" "||j==="Enter")&&(k.preventDefault(),b.current!=="playing"&&E())};return l.jsxs(Et,{$minW:360,$minH:300,children:[l.jsxs(gn,{children:[l.jsx(Fe,{label:"Game",children:l.jsxs(Ae,{onMouseDown:k=>{k.preventDefault(),E()},children:["New Game",l.jsx("span",{children:"Space"})]})}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Snake — arrows or WASD to move"})})]}),l.jsxs(mn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{ref:n,tabIndex:0,onKeyDown:$,style:{outline:"none",position:"relative",border:"2px solid",borderColor:"#808080 #fff #fff #808080"},children:[l.jsx("canvas",{ref:e,width:Ko,height:Ko,style:{display:"block"}}),h!=="playing"&&l.jsxs("div",{onClick:E,style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:h==="over"?`Game Over — ${d}`:"🐍 Snake"}),l.jsx("div",{style:{fontSize:12},children:"Click or press Space to play"}),l.jsx("div",{style:{fontSize:11,opacity:.8},children:"Arrow keys / WASD to steer"})]})]}),l.jsx(pc,{game:"snake",order:"desc",format:k=>String(k),title:"Top Scores",width:130,refreshKey:y})]}),l.jsxs(Pt,{children:[l.jsxs(Oe,{$flex:1,children:["Score: ",d]}),l.jsx(Oe,{children:h==="over"?"Game Over":h==="playing"?"Go!":"Ready"}),l.jsxs(Oe,{children:["Length: ",Math.max(0,o.current.length)]})]})]})},Vd=["♠","♥","♦","♣"],aR=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],gs=e=>e===1||e===2,Kd=52,Qd=72,cR=18;function vx(){const e=[];for(let o=0;o<4;o=o+1)for(let i=1;i<=13;i++)e.push({suit:o,rank:i});for(let o=e.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[e[o],e[i]]=[e[i],e[o]]}const n=[[],[],[],[],[],[],[],[]];return e.forEach((o,i)=>n[i%8].push(o)),{free:[null,null,null,null],found:[[],[],[],[]],tab:n}}const qd=e=>e.every((n,o)=>o===0||gs(e[o-1].suit)!==gs(n.suit)&&e[o-1].rank===n.rank+1),uR=()=>{const[e,n]=g.useState(vx),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,m]=g.useState(!1),[y,w]=g.useState(0),b=g.useRef(!1);g.useEffect(()=>{if(h)return;const _=setInterval(()=>p(D=>D+1),1e3);return()=>clearInterval(_)},[h]);const T=()=>{n(vx()),i(null),u(0),p(0),m(!1),b.current=!1},E=_=>({free:[..._.free],found:_.found.map(D=>[...D]),tab:_.tab.map(D=>[...D])}),C=_=>{_.found.every(D=>D.length===13)&&(m(!0),b.current||(b.current=!0,mo(),fc("freecell",d).then(()=>w(D=>D+1))))},$=_=>{u(D=>D+1),n(_),i(null),C(_)},k=(_,D)=>D.length===0?_.rank===1:D[D.length-1].suit===_.suit&&_.rank===D[D.length-1].rank+1,j=(_,D)=>D.length===0?!0:gs(D[D.length-1].suit)!==gs(_.suit)&&D[D.length-1].rank===_.rank+1,S=_=>{const D=e.free.filter(H=>H===null).length,I=e.tab.filter(H=>H.length===0).length-(_?1:0);return(D+1)*Math.pow(2,Math.max(0,I))},R=(_,D)=>{if(D.pile==="free"){const I=_.free[D.col];return I?[I]:[]}return D.pile==="found"?_.found[D.col].slice(-1):_.tab[D.col].slice(D.idx)},M=(_,D)=>{D.pile==="free"?_.free[D.col]=null:D.pile==="found"?_.found[D.col].pop():_.tab[D.col]=_.tab[D.col].slice(0,D.idx)},K=(_,D)=>{if(!R(e,_).length)return!1;const H=E(e),W=R(H,_);if(D.pile==="free")return W.length!==1||H.free[D.col]!==null?!1:(M(H,_),H.free[D.col]=W[0],$(H),!0);if(D.pile==="found")return W.length!==1||!k(W[0],H.found[D.col])?!1:(M(H,_),H.found[D.col].push(W[0]),$(H),!0);if(!qd(W))return!1;const B=H.tab[D.col].length===0;return!j(W[0],H.tab[D.col])||W.length>S(B)?!1:(M(H,_),H.tab[D.col].push(...W),$(H),!0)},X=_=>{const D=R(e,_);if(D.length!==1)return!1;for(let I=0;I<4;I++)if(k(D[0],e.found[I]))return K(_,{pile:"found",col:I});return!1},ee=(_,D)=>{if(!h){if(!o){qd(e.tab[_].slice(D))&&i({pile:"tab",col:_,idx:D});return}if(o.pile==="tab"&&o.col===_&&o.idx===D){i(null);return}K(o,{pile:"tab",col:_})||(qd(e.tab[_].slice(D))?i({pile:"tab",col:_,idx:D}):i(null))}},ie=_=>{h||o&&K(o,{pile:"free",col:_})||(e.free[_]?i(fe("free",_,0)?null:{pile:"free",col:_,idx:0}):i(null))},me=_=>{h||!o||K(o,{pile:"found",col:_})||i(null)},fe=(_,D,I)=>(o==null?void 0:o.pile)===_&&o.col===D&&o.idx===I,he=({card:_,selected:D,onClick:I,onDouble:H})=>l.jsxs("div",{onClick:I,onDoubleClick:H,style:{width:Kd,height:Qd,boxSizing:"border-box",borderRadius:4,cursor:"pointer",background:"#fff",border:D?"2px solid #ffd000":"1px solid #000",color:gs(_.suit)?"#c00000":"#000",position:"relative",userSelect:"none",boxShadow:D?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:12,fontWeight:"bold",lineHeight:1},children:[aR[_.rank],l.jsx("div",{children:Vd[_.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24},children:Vd[_.suit]})]}),le=({label:_,onClick:D})=>l.jsx("div",{onClick:D,style:{width:Kd,height:Qd,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:_});return l.jsxs(Et,{$minW:560,$minH:480,children:[l.jsxs(gn,{children:[l.jsx(Fe,{label:"Game",children:l.jsxs(Ae,{onMouseDown:_=>{_.preventDefault(),T()},children:["New Game",l.jsx("span",{children:"F2"})]})}),l.jsx(Fe,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"FreeCell — VortexOS"})})]}),l.jsxs(mn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[e.free.map((_,D)=>l.jsx("div",{onClick:()=>ie(D),children:_?l.jsx(he,{card:_,selected:fe("free",D,0),onClick:()=>ie(D),onDouble:()=>X({pile:"free",col:D,idx:0})}):l.jsx(le,{})},D)),l.jsx("div",{style:{flex:1}}),e.found.map((_,D)=>l.jsx("div",{onClick:()=>me(D),children:_.length?l.jsx(he,{card:_[_.length-1]}):l.jsx(le,{label:Vd[D],onClick:()=>me(D)})},D))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map((_,D)=>l.jsxs("div",{style:{position:"relative",width:Kd,minHeight:Qd},onClick:()=>_.length===0&&ee(D,0),children:[_.length===0&&l.jsx(le,{onClick:()=>ee(D,0)}),_.map((I,H)=>l.jsx("div",{style:{position:"absolute",top:H*cR,left:0},children:l.jsx(he,{card:I,selected:fe("tab",D,H),onClick:()=>ee(D,H),onDouble:()=>X({pile:"tab",col:D,idx:H})})},H))]},D))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 Solved in ",d,"s, ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:T,children:"Play again"})]})]}),l.jsx(pc,{game:"freecell",order:"asc",format:_=>`${Math.floor(_/60)}:${String(_%60).padStart(2,"0")}`,title:"Best Times",width:140,refreshKey:y})]}),l.jsxs(Pt,{children:[l.jsxs(Oe,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(Oe,{children:["Moves: ",a]}),l.jsx(Oe,{children:h?"Solved! 🎉":"FreeCell"})]})]})},dR=()=>{const[e,n]=g.useState(new Date),{firstDayMonday:o}=on();g.useEffect(()=>{const j=setInterval(()=>n(new Date),1e3);return()=>clearInterval(j)},[]);const i=e.getSeconds(),a=e.getMinutes(),u=e.getHours()%12,d=i*6,p=a*6+i*.1,h=u*30+a*.5,m=(j,S,R,M)=>{const K=(j-90)*Math.PI/180;return l.jsx("line",{x1:"50",y1:"50",x2:50+S*Math.cos(K),y2:50+S*Math.sin(K),stroke:M,strokeWidth:R,strokeLinecap:"round"})},y=e.getFullYear(),w=e.getMonth(),b=new Date(y,w,1).getDay(),T=o?(b+6)%7:b,E=new Date(y,w+1,0).getDate(),C=e.toLocaleDateString(void 0,{month:"long",year:"numeric"}),$=o?["M","T","W","T","F","S","S"]:["S","M","T","W","T","F","S"],k=[...Array(T).fill(null),...Array.from({length:E},(j,S)=>S+1)];return l.jsxs("div",{style:{padding:12,display:"flex",gap:16,alignItems:"flex-start"},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 100 100",children:[l.jsx("circle",{cx:"50",cy:"50",r:"47",fill:"#fff",stroke:"#000",strokeWidth:"2"}),Array.from({length:12}).map((j,S)=>{const R=(S*30-90)*Math.PI/180;return l.jsx("line",{x1:50+42*Math.cos(R),y1:50+42*Math.sin(R),x2:50+46*Math.cos(R),y2:50+46*Math.sin(R),stroke:"#000",strokeWidth:"2"},S)}),m(h,24,3,"#000"),m(p,34,2,"#000"),m(d,38,1,"#c0392b"),l.jsx("circle",{cx:"50",cy:"50",r:"2",fill:"#000"})]}),l.jsx(wt,{variant:"well",style:{marginTop:8,padding:4,fontFamily:"monospace",fontSize:16},children:e.toLocaleTimeString()})]}),l.jsxs("div",{children:[l.jsx("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:4},children:C}),l.jsxs("table",{style:{borderCollapse:"collapse",fontSize:12},children:[l.jsx("thead",{children:l.jsx("tr",{children:$.map((j,S)=>l.jsx("th",{style:{width:22,padding:2,color:"#000080"},children:j},S))})}),l.jsx("tbody",{children:Array.from({length:Math.ceil(k.length/7)}).map((j,S)=>l.jsx("tr",{children:k.slice(S*7,S*7+7).map((R,M)=>l.jsx("td",{style:{width:22,height:20,textAlign:"center",background:R===e.getDate()?"#000080":"transparent",color:R===e.getDate()?"#fff":"#000"},children:R??""},M))},S))})]})]})]})},fR=["#000000","#808080","#c0c0c0","#ffffff","#ff0000","#ffa500","#ffff00","#008000","#00ff00","#0000ff","#00ffff","#800080","#ff00ff","#8b4513"],pR=[2,4,8,14],Wt=460,Xt=300,hR=[1,2,4],mR=[{id:"pencil",label:"✎ Pencil"},{id:"line",label:"╱ Line"},{id:"rect",label:"▭ Rect"},{id:"ellipse",label:"◯ Ellipse"},{id:"fill",label:"🪣 Fill"},{id:"eraser",label:"▱ Eraser"}],gR=()=>{const e=rn(),{alert:n}=Ds(),o=g.useRef(null),i=g.useRef(!1),a=g.useRef(null),u=g.useRef(null),d=g.useRef(null),p=g.useRef([]),h=g.useRef([]),[m,y]=g.useState("pencil"),[w,b]=g.useState("#000000"),[T,E]=g.useState(4),[C,$]=g.useState(1),[,k]=g.useState(0),j=()=>o.current.getContext("2d");g.useEffect(()=>{const _=j();_.fillStyle="#fff",_.fillRect(0,0,Wt,Xt)},[]);const S=_=>{const D=o.current.getBoundingClientRect();return{x:(_.clientX-D.left)/C,y:(_.clientY-D.top)/C}},R=()=>{p.current.push(j().getImageData(0,0,Wt,Xt)),p.current.length>25&&p.current.shift(),h.current=[],k(_=>_+1)},M=()=>{p.current.length&&(h.current.push(j().getImageData(0,0,Wt,Xt)),j().putImageData(p.current.pop(),0,0),k(_=>_+1))},K=()=>{h.current.length&&(p.current.push(j().getImageData(0,0,Wt,Xt)),j().putImageData(h.current.pop(),0,0),k(_=>_+1))},X=()=>m==="eraser"?"#fff":w,ee=_=>{const D=S(_);if(R(),m==="fill"){fe(Math.round(D.x),Math.round(D.y),w);return}i.current=!0,a.current=D,u.current=D,(m==="line"||m==="rect"||m==="ellipse")&&(d.current=j().getImageData(0,0,Wt,Xt))},ie=_=>{if(!i.current)return;const D=j(),I=S(_);if(D.strokeStyle=X(),D.fillStyle=X(),D.lineWidth=T,D.lineCap="round",m==="pencil"||m==="eraser")D.beginPath(),D.moveTo(u.current.x,u.current.y),D.lineTo(I.x,I.y),D.stroke(),u.current=I;else if(d.current){D.putImageData(d.current,0,0);const H=a.current;D.beginPath(),m==="line"?(D.moveTo(H.x,H.y),D.lineTo(I.x,I.y),D.stroke()):m==="rect"?D.strokeRect(Math.min(H.x,I.x),Math.min(H.y,I.y),Math.abs(I.x-H.x),Math.abs(I.y-H.y)):m==="ellipse"&&(D.ellipse((H.x+I.x)/2,(H.y+I.y)/2,Math.abs(I.x-H.x)/2,Math.abs(I.y-H.y)/2,0,0,Math.PI*2),D.stroke())}},me=()=>{i.current=!1,a.current=null,u.current=null,d.current=null},fe=(_,D,I)=>{if(_<0||D<0||_>=Wt||D>=Xt)return;const H=j(),W=H.getImageData(0,0,Wt,Xt),B=W.data,N=(ne,ce)=>(ce*Wt+ne)*4,z=N(_,D),J=B[z],ae=B[z+1],ue=B[z+2],ge=B[z+3],pe=parseInt(I.slice(1,3),16),xe=parseInt(I.slice(3,5),16),q=parseInt(I.slice(5,7),16);if(J===pe&&ae===xe&&ue===q&&ge===255)return;const A=ne=>B[ne]===J&&B[ne+1]===ae&&B[ne+2]===ue&&B[ne+3]===ge,V=ne=>{B[ne]=pe,B[ne+1]=xe,B[ne+2]=q,B[ne+3]=255},te=[[_,D]];for(;te.length;){const[ne,ce]=te.pop(),je=N(ne,ce);A(je)&&(V(je),ne>0&&te.push([ne-1,ce]),ne<Wt-1&&te.push([ne+1,ce]),ce>0&&te.push([ne,ce-1]),ce<Xt-1&&te.push([ne,ce+1]))}H.putImageData(W,0,0)},he=()=>{R();const _=j();_.fillStyle="#fff",_.fillRect(0,0,Wt,Xt)},le=async()=>{const _=window.prompt("Save as:","painting.png");if(!_)return;const D=o.current.toDataURL("image/png"),I=Uint8Array.from(atob(D.split(",")[1]),H=>H.charCodeAt(0));try{await e.writeFile(`${_r()}/${_}`,I),await n({title:"Paint",message:`Saved to ${_r()}/${_}`,type:"info"})}catch(H){await n({title:"Paint",message:`Save failed: ${H.code??H.message}`,type:"error"})}};return l.jsxs("div",{style:{padding:6},children:[l.jsxs(fi,{children:[l.jsx(it,{onClick:M,disabled:!p.current.length,children:"Undo"}),l.jsx(it,{onClick:K,disabled:!h.current.length,children:"Redo"}),l.jsx(En,{}),l.jsx(it,{onClick:he,children:"Clear"}),l.jsx(it,{onClick:le,children:"Save"}),l.jsx(En,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Zoom:"}),hR.map(_=>l.jsxs(it,{$active:C===_,onClick:()=>$(_),children:[_,"x"]},_))]}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,width:92},children:[mR.map(_=>l.jsx(Ue,{size:"sm",active:m===_.id,onClick:()=>y(_.id),style:{justifyContent:"flex-start"},children:_.label},_.id)),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:92,marginTop:6},children:fR.map(_=>l.jsx("div",{onClick:()=>{b(_),m==="eraser"&&y("pencil")},style:{width:18,height:18,background:_,border:w===_?"2px solid #000080":"1px solid #808080",cursor:"pointer",boxSizing:"border-box"}},_))}),l.jsx("div",{style:{display:"flex",gap:3,marginTop:6,flexWrap:"wrap"},children:pR.map(_=>l.jsx(Ue,{size:"sm",active:T===_,onClick:()=>E(_),style:{width:28},children:_},_))})]}),l.jsx(wt,{variant:"well",style:{padding:2,overflow:"auto",maxWidth:Wt+8,maxHeight:Xt+8},children:l.jsx("div",{style:{width:Wt*C,height:Xt*C},children:l.jsx("canvas",{ref:o,width:Wt,height:Xt,onMouseDown:ee,onMouseMove:ie,onMouseUp:me,onMouseLeave:me,style:{display:"block",cursor:"crosshair",background:"#fff",width:Wt*C,height:Xt*C,imageRendering:"pixelated"}})})})]})]})},Ev="vortex.recent.docs",xR=10;function $v(){try{const e=JSON.parse(localStorage.getItem(Ev)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function yR(e){const n=e.trim();if(!n)return;const o=[n,...$v().filter(i=>i!==n)].slice(0,xR);localStorage.setItem(Ev,JSON.stringify(o))}const wR=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,vR=/\.(mp3|wav|ogg|m4a|flac)$/i,bR=/\.(html?|rtf|doc)$/i;async function Fp(e,n){let o;try{o=(await e.stat(n)).type}catch{return!1}return o==="dir"?(e.spawn("explorer",{argv:[n]}),!0):(wR.test(n)?e.spawn("imageviewer",{argv:[n]}):vR.test(n)?e.spawn("mediaplayer",{argv:[n]}):bR.test(n)?e.spawn("wordpad",{argv:[n]}):e.spawn("notes",{argv:[n]}),yR(n),!0)}const bx=200,kR=new Set(["/proc","/dev"]),SR=512*1024,jR=/\.(png|jpe?g|gif|bmp|webp|ico|mp3|wav|ogg|m4a|flac|zip|gz|pdf)$/i,Gd=864e5,kx=[{label:"any time",ms:0},{label:"today",ms:Gd},{label:"the last 7 days",ms:7*Gd},{label:"the last 30 days",ms:30*Gd}];async function Tv(e,n,o,i,a,u){if(a.length>=bx||kR.has(n)||!u())return;let d;try{d=await e.readdir(n)}catch{return}for(const p of d){if(a.length>=bx||!u())return;const h=He(n,p);let m="file",y=0,w=0;try{const T=await e.stat(h);m=T.type,y=T.size,w=T.mtime}catch{continue}let b=!0;if(o.name&&!p.toLowerCase().includes(o.name)&&(b=!1),b&&o.sinceMs&&w<i-o.sinceMs&&(b=!1),b&&o.content)if(m!=="file"||y>SR||jR.test(p))b=!1;else try{(await e.readTextFile(h)).toLowerCase().includes(o.content)||(b=!1)}catch{b=!1}b&&a.push({name:p,path:h,type:m,mtime:w}),m==="dir"&&await Tv(e,h,o,i,a,u)}}const CR=()=>{const e=rn(),[n,o]=g.useState(_r()),[i,a]=g.useState(""),[u,d]=g.useState(""),[p,h]=g.useState(0),[m,y]=g.useState([]),[w,b]=g.useState(!1),[T,E]=g.useState(!1),C=g.useRef(0),$=async()=>{const j=++C.current,S={name:i.trim().toLowerCase(),content:u.trim().toLowerCase(),sinceMs:kx[p].ms};if(!S.name&&!S.content&&!S.sinceMs){y([]),E(!1);return}b(!0);const R=[];await Tv(e,n||"/",S,Date.now(),R,()=>C.current===j),C.current===j&&(y(R),b(!1),E(!0))};g.useEffect(()=>{const j=setTimeout($,300);return()=>clearTimeout(j)},[i,u,p,n]);const k=j=>{j.type==="dir"?e.spawn("explorer",{argv:[j.path]}):Fp(e,j.path)};return l.jsxs(Et,{$minW:480,$minH:380,children:[l.jsxs(mn,{style:{flexDirection:"column",padding:8},children:[l.jsxs(_y,{label:"Find: Files or Folders",children:[l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Named:"}),l.jsx(lr,{value:i,onChange:j=>a(j.target.value),placeholder:"part of a name",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Containing text:"}),l.jsx(lr,{value:u,onChange:j=>d(j.target.value),placeholder:"words inside the file",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Modified:"}),l.jsx("select",{value:p,onChange:j=>h(Number(j.target.value)),style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:2},children:kx.map((j,S)=>l.jsx("option",{value:S,children:j.label},j.label))})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{width:96},children:"Look in:"}),l.jsx(lr,{value:n,onChange:j=>o(j.target.value),style:{flex:1},fullWidth:!0}),l.jsx(Ue,{onClick:$,disabled:w,children:w?"…":"Find Now"})]})]}),l.jsxs(wt,{variant:"well",style:{flex:1,minHeight:120,marginTop:8,overflow:"auto",background:"#fff",padding:4},children:[m.map(j=>l.jsxs("div",{onDoubleClick:()=>k(j),title:j.path,style:{display:"flex",justifyContent:"space-between",gap:8,padding:"2px 4px",cursor:"pointer"},children:[l.jsxs("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[j.type==="dir"?"📁":"📄"," ",j.name]}),l.jsxs("span",{style:{color:"#666",fontSize:11,whiteSpace:"nowrap"},children:[j.mtime?new Date(j.mtime).toLocaleDateString():""," · ",j.path]})]},j.path)),T&&m.length===0&&l.jsx("div",{style:{padding:8,color:"#666"},children:"No items found."}),!T&&l.jsx("div",{style:{padding:8,color:"#666"},children:"Enter a name, text to find inside files, or a date — results appear as you type."})]})]}),l.jsx(Pt,{children:l.jsx(Oe,{$flex:1,children:w?"Searching…":T?`${m.length} item(s) found`:"Ready"})})]})},Av=e=>`vortex.welcome.${e||"user"}`;function Rv(e){return localStorage.getItem(Av(e))==="1"}function ER(e){localStorage.setItem(Av(e),"1")}const Dv="vortex.tips.enabled",$R=new Set,TR=()=>$R.forEach(e=>e());function va(){return localStorage.getItem(Dv)!=="0"}function AR(e){localStorage.setItem(Dv,e?"1":"0"),TR()}const Yo=["Press Ctrl+Space anywhere to open the Command Palette and launch any app or action instantly.","VortexOS runs on a real microkernel — open the Terminal and type `ps` to watch live processes.","Drag a window to a screen edge to snap it to that half; drag to a corner to quarter-tile it.","Your files live in a real virtual filesystem. Try `ls /` in the Terminal, or browse it in Explorer.","Share files with other users in Network Neighborhood, and send messages with WinPopup.","Right-click the desktop to create folders and documents or rearrange your icons.","Open Control Panel ▸ Display to switch between the Serious Sam vaporwave look and classic Windows.","Beat your own high scores in Solitaire, Minesweeper, FreeCell and Snake — they sync to your account.","Press Alt+Tab to flip between open windows, just like the real thing.","The Recycle Bin really works — deleted files go there, and you can restore them.","Press Ctrl+Alt+Del in a panic to reboot — VortexOS has a real BSOD and Task Manager too."];function RR(e){return Yo[(e%Yo.length+Yo.length)%Yo.length]}const Gf=new Set,Yf=new Set;function DR(){Gf.forEach(e=>e())}function IR(e){return Gf.add(e),()=>Gf.delete(e)}function Iv(){Yf.forEach(e=>e())}function PR(e){return Yf.add(e),()=>Yf.delete(e)}const Pv="vortex.assistant.enabled",Xf=new Set,NR=()=>Xf.forEach(e=>e());function Nv(){return localStorage.getItem(Pv)!=="0"}function Mv(e){localStorage.setItem(Pv,e?"1":"0"),NR()}function MR(){return g.useSyncExternalStore(e=>(Xf.add(e),()=>Xf.delete(e)),Nv)}const Jf=new Set;function LR(e){Nv()&&Jf.forEach(n=>n(e))}function OR(e){return Jf.add(e),()=>Jf.delete(e)}const zR=["Hi! I'm Vortex — your guide around here. Click me for a tip anytime.","Hey there. New to VortexOS? Click me and I'll show you the ropes.","Welcome back! Click me whenever you want a hand."],_R=["Yikes — that app hit a snag. Dr. Watson logged the details, and the rest of VortexOS is just fine.","That didn't go as planned. No data lost — want to peek at what happened?","Whoops. One app stumbled, but the kernel kept right on running."],FR={terminal:["A real shell awaits — try `ps` to see live processes, or `ls /`.","Pipes and redirects work here: `cat notes.txt | grep todo`."],explorer:["This is a real filesystem. Right-click for New Folder, F2 to rename."],notes:["Everything you type saves to an actual file on disk."],wordpad:["Rich text here — and it saves as a real .html file."],paint:["The fill bucket floods bounded areas. Don't forget Undo!"],calculator:["Psst — try Scientific or Programmer mode in the View menu."],minesweeper:["Your first click is always safe. Now go flag those mines!"],solitaire:["Aces up to the foundations. Double-click to auto-move a card."],freecell:["Use the four free cells wisely — almost every deal is winnable."],snake:["Arrow keys or WASD. Whatever you do, don't bite your tail."],browser:["I route pages through a proxy so they actually load — no frame blocking."],network:["See who else is online and browse their shared files."],messenger:["Net Send lives! Ping another signed-in user a message."],control_panel:["Make it yours — wallpaper, themes, screensavers, and Serious Sam Style."],backlogger:["Track your game backlog, complete with real console art."],task_manager:["Honest CPU and memory graphs in here — no faking it."],find:["Search by name, by contents, or by the date a file changed."],mediaplayer:["Folder playlists and a live retrowave visualizer. Press play."],imageviewer:["Prev/Next across the folder, plus zoom, rotate and a slideshow."],clock:["Hand-drawn analog face and a working calendar."],nightwave:["Retrowave radio, streaming live. Turn it up."],vaporwave:["Retrowave radio, streaming live. Turn it up."]};function hc(e){return e[Math.floor(Math.random()*e.length)]}function BR(e){const n=FR[e];return n&&n.length?hc(n):null}function Sx(){return hc(Yo)}function WR(){return hc(zR)}function HR(){return hc(_R)}const UR=()=>l.jsxs(Et,{$minW:460,$minH:380,children:[l.jsxs(gn,{children:[l.jsx(Fe,{label:"File",children:l.jsx(Ae,{$disabled:!0,children:"Print Topic"})}),l.jsxs(Fe,{label:"Help",children:[l.jsx(Ae,{onClick:DR,children:"Welcome Tour…"}),l.jsx(Ae,{onClick:Iv,children:"Tip of the Day…"}),l.jsx(Ae,{onClick:()=>Mv(!0),children:"Show Vortex Assistant"})]})]}),l.jsx(mn,{style:{padding:3},children:l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",padding:16,lineHeight:1.6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:12},children:[l.jsx(oi,{size:48,vapor:!0,spinning:!1}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:"VortexOS 2.0"}),l.jsx("div",{style:{fontSize:12,color:"#444"},children:"Experimental Edition — a creation by Serious Sam"})]})]}),l.jsx("p",{style:{fontWeight:"bold"},children:"About"}),l.jsx("p",{children:"VortexOS is a desktop operating system that runs in your browser, built on a real microkernel: an in-memory virtual filesystem persisted to OPFS, a process model with a syscall ABI, a command shell, a window manager, and multi-user networking. No emulator, no clone."}),l.jsx("p",{style:{fontWeight:"bold",marginTop:12},children:"Getting started"}),l.jsxs("ul",{style:{margin:"4px 0 0 18px"},children:[l.jsxs("li",{children:[l.jsx("b",{children:"Command Palette"})," — press ",l.jsx("code",{children:"Ctrl+Space"})," to fuzzy-launch any app or action."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Explorer"})," & ",l.jsx("b",{children:"Terminal"})," — browse a real filesystem, or type ",l.jsx("code",{children:"ls"}),", ",l.jsx("code",{children:"cat"}),", ",l.jsx("code",{children:"ps"}),", even ",l.jsx("code",{children:".sh"})," scripts."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"WordPad"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"})," — real apps that save real files."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Games"})," — Solitaire, FreeCell, Minesweeper and Snake, with per-user high scores."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Network Neighborhood"})," & ",l.jsx("b",{children:"WinPopup"})," — share files and chat with other users."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the Serious Sam Style toggle."]}),l.jsxs("li",{children:["Drag desktop icons anywhere; deleted files go to the ",l.jsx("b",{children:"Recycle Bin"}),"."]})]}),l.jsxs("p",{style:{marginTop:12},children:["New here? Open ",l.jsx("b",{children:"Help ▸ Welcome Tour"})," for the guided introduction, or ",l.jsx("b",{children:"Tip of the Day"})," for a quick hint."]}),l.jsx("p",{style:{marginTop:12,color:"#444",fontSize:12},children:"Registered to: Serious Sam"})]})}),l.jsx(Pt,{children:l.jsx(Oe,{$flex:1,children:"VortexOS Help"})})]}),mc="http://localhost:8082";async function VR(){const{data:e}=await Ve.get(`${mc}/share/users`);return Array.isArray(e)?e:[]}async function KR(e){const{data:n}=await Ve.get(`${mc}/share/users/${e}/files`);return Array.isArray(n)?n:[]}async function QR(){const{data:e}=await Ve.get(`${mc}/files`);return Array.isArray(e)?e:[]}async function qR(e,n){await Ve.put(`${mc}/files/share`,null,{params:{path:e,shared:n}})}function GR(e){if(!e)return"";try{return decodeURIComponent(escape(atob(e)))}catch{try{return atob(e)}catch{return"(unable to display this file)"}}}const Yd={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},jx={cursor:"pointer",padding:"2px 6px",fontSize:13},YR=()=>{const{username:e}=Kn(),[n,o]=g.useState(0),[i,a]=g.useState(null),[u,d]=g.useState([]),p=g.useCallback(async()=>{try{a(null);const S=await QR();d(S.filter(R=>R.type!=="folder"))}catch{a("Could not reach the network. Is the backend running?")}},[]),h=async S=>{try{await qR(S.path,!S.shared),d(R=>R.map(M=>M.path===S.path?{...M,shared:!M.shared}:M))}catch{a("Could not update sharing.")}},[m,y]=g.useState([]),[w,b]=g.useState(null),[T,E]=g.useState([]),[C,$]=g.useState(null),k=g.useCallback(async()=>{try{a(null),y(await VR())}catch{a("Could not reach the network. Is the backend running?")}},[]),j=async S=>{b(S),$(null);try{E(await KR(S.id))}catch{E([])}};return g.useEffect(()=>{p(),k()},[p,k]),l.jsxs(Et,{$minW:460,$minH:320,style:{padding:4},children:[l.jsxs(Za,{value:n,onChange:S=>o(S),children:[l.jsx(Pr,{value:0,children:"Network Neighborhood"}),l.jsx(Pr,{value:1,children:"My Shared Files"})]}),l.jsx(Ja,{style:{flex:1,minHeight:0},children:l.jsxs(Br,{style:{height:"100%"},children:[i&&l.jsx("p",{style:{color:"#800000",fontSize:12},children:i}),n===0&&l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsxs("div",{style:{...Yd,width:130},children:[m.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No one is sharing yet."}),m.map(S=>l.jsxs("div",{style:{...jx,background:(w==null?void 0:w.id)===S.id?"#000080":"transparent",color:(w==null?void 0:w.id)===S.id?"#fff":"#000"},onClick:()=>j(S),children:["🖥 ",S.username,S.username===e?" (you)":""]},S.id))]}),l.jsxs("div",{style:{...Yd,width:150},children:[!w&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Select a computer."}),w&&T.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No shared files."}),T.map(S=>l.jsxs("div",{style:{...jx,background:(C==null?void 0:C.id)===S.id?"#000080":"transparent",color:(C==null?void 0:C.id)===S.id?"#fff":"#000"},onClick:()=>$(S),children:["📄 ",S.name]},S.id))]}),l.jsx(wt,{variant:"field",style:{flex:1,height:230,overflow:"auto",background:"white",padding:6},children:C?l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:12,fontFamily:"monospace"},children:GR(C.content)}):l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Open a shared file to view it (read-only)."})})]}),n===1&&l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:12,marginTop:0},children:"Tick a file to share it with everyone on the network."}),l.jsxs("div",{style:Yd,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"You have no cloud files to share."}),u.map(S=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"1px 4px"},children:[l.jsx(dt,{checked:S.shared,onChange:()=>h(S)}),l.jsx("span",{style:{fontSize:13},children:S.path.replace("/mnt/cloud","")})]},S.id))]}),l.jsx(Ue,{onClick:p,style:{marginTop:8},children:"Refresh"})]})]})}),l.jsx(Pt,{children:l.jsx(Oe,{$flex:1,children:i||"Network Neighborhood"})})]})};let Ht=null,La=[];const Bp=[];let Oa=!1;const Zf=new Set,xs=()=>Zf.forEach(e=>e());function XR(e){return`${"http://localhost:8082".replace(/^http/,"ws")}/ws?token=${encodeURIComponent(e)}`}function JR(){const e=rc();!e||Ht||(Oa=!0,Lv(e))}function Lv(e){let n;try{n=new WebSocket(XR(e))}catch{return}Ht=n,n.onmessage=o=>{if(Ht!==n)return;let i;try{i=JSON.parse(o.data)}catch{return}i.type==="presence"?(La=i.users??[],xs()):i.type==="msg"&&i.from&&i.body&&(Bp.push({from:i.from,body:i.body,ts:i.ts??Date.now()}),xs())},n.onclose=()=>{Ht===n&&(Ht=null,La=[],xs(),Oa&&setTimeout(()=>{const o=rc();Oa&&o&&!Ht&&Lv(o)},2e3))},n.onerror=()=>{try{n.close()}catch{}}}function ZR(){Oa=!1,La=[];const e=Ht;Ht=null;try{e==null||e.close()}catch{}xs()}function eD(e,n){!Ht||Ht.readyState!==WebSocket.OPEN||!e||!n||(Ht.send(JSON.stringify({type:"msg",to:e,body:n})),Bp.push({from:"me",to:e,body:n,ts:Date.now(),mine:!0}),xs())}function ep(){return La}function Cx(){return(Ht==null?void 0:Ht.readyState)===WebSocket.OPEN}function tp(){return Bp}function Wp(e){return Zf.add(e),()=>Zf.delete(e)}function tD(){const[,e]=g.useReducer(n=>n+1,0);return g.useEffect(()=>Wp(e),[]),{online:ep(),log:tp()}}const nD={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},rD=()=>{const{username:e}=Kn(),{online:n,log:o}=tD(),[i,a]=g.useState(null),[u,d]=g.useState(""),p=n.filter(y=>y!==e),h=i?o.filter(y=>y.mine&&y.to===i||!y.mine&&y.from===i):[],m=()=>{!i||!u.trim()||(eD(i,u.trim()),d(""))};return l.jsxs(Et,{$minW:440,$minH:320,children:[l.jsxs("div",{style:{display:"flex",gap:8,flex:1,minHeight:0,padding:8},children:[l.jsx("div",{style:{...nD,width:130},children:p.map(y=>l.jsxs("div",{onClick:()=>a(y),style:{cursor:"pointer",padding:"2px 6px",fontSize:13,background:i===y?"#000080":"transparent",color:i===y?"#fff":"#000"},children:["🟢 ",y]},y))}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[l.jsxs(wt,{variant:"field",style:{flex:1,background:"white",overflow:"auto",padding:6,marginBottom:6},children:[!i&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Select someone to message."}),i&&h.length===0&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"No messages yet. Say hi!"}),h.map((y,w)=>l.jsxs("p",{style:{margin:"2px 0",fontSize:13},children:[l.jsxs("b",{children:[y.mine?"You":y.from,":"]})," ",y.body]},w))]}),l.jsxs("div",{style:{display:"flex",gap:6},children:[l.jsx(lr,{value:u,disabled:!i,placeholder:i?`Message ${i}…`:"Pick a recipient",onChange:y=>d(y.target.value),onKeyDown:y=>{y.key==="Enter"&&m()},style:{flex:1}}),l.jsx(Ue,{onClick:m,disabled:!i||!u.trim(),children:"Send"})]})]})]}),l.jsx(Pt,{children:l.jsx(Oe,{$flex:1,children:p.length===0?"No one else is online.":`${p.length} user(s) online`})})]})},oD={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",webp:"image/webp",svg:"image/svg+xml",ico:"image/x-icon"},iD=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,sD=e=>oD[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,lD=e=>e.slice(0,e.lastIndexOf("/"))||"/",aD=e=>e.slice(e.lastIndexOf("/")+1),cD=()=>{const e=rn(),[n,o]=g.useState([]),[i,a]=g.useState(0),[u,d]=g.useState(null),[p,h]=g.useState(null),[m,y]=g.useState(1),[w,b]=g.useState(0),[T,E]=g.useState(!0),[C,$]=g.useState(!1);g.useEffect(()=>{(async()=>{const ee=(await e.argv())[0];if(!ee){h("No image to display.");return}const ie=lD(ee);try{const fe=(await e.readdir(ie)).filter(le=>iD.test(le)).sort().map(le=>`${ie}/${le}`),he=Math.max(0,fe.indexOf(ee));o(fe.length?fe:[ee]),a(he)}catch{o([ee]),a(0)}})()},[e]),g.useEffect(()=>{const ee=n[i];if(!ee)return;let ie=null,me=!0;return h(null),y(1),b(0),E(!0),(async()=>{const fe=sD(ee);if(!fe){h("Unsupported image format.");return}try{const he=await e.readFile(ee);ie=URL.createObjectURL(new Blob([he],{type:fe})),me&&d(ie)}catch{me&&h("Could not open this file.")}})(),()=>{me=!1,ie&&URL.revokeObjectURL(ie)}},[n,i,e]);const k=()=>a(ee=>n.length?(ee+1)%n.length:0),j=()=>a(ee=>n.length?(ee-1+n.length)%n.length:0),S=g.useRef(k);S.current=k,g.useEffect(()=>{if(!C||n.length<2)return;const ee=setInterval(()=>S.current(),3e3);return()=>clearInterval(ee)},[C,n.length]);const R=()=>{E(!1),y(ee=>Math.min(8,ee*1.25))},M=()=>{E(!1),y(ee=>Math.max(.1,ee/1.25))},K=()=>{E(!1),y(1)},X=T?{maxWidth:"100%",maxHeight:"100%",transform:`rotate(${w}deg)`,imageRendering:"pixelated"}:{transform:`scale(${m}) rotate(${w}deg)`,imageRendering:"pixelated"};return l.jsxs(Et,{$minW:360,$minH:280,children:[l.jsxs(fi,{children:[l.jsx(it,{onClick:j,disabled:n.length<2,children:"◀ Prev"}),l.jsx(it,{onClick:k,disabled:n.length<2,children:"Next ▶"}),l.jsx(En,{}),l.jsx(it,{onClick:R,children:"Zoom +"}),l.jsx(it,{onClick:M,children:"Zoom −"}),l.jsx(it,{$active:T,onClick:()=>{E(!0),y(1)},children:"Fit"}),l.jsx(it,{onClick:K,children:"1:1"}),l.jsx(En,{}),l.jsx(it,{onClick:()=>b(ee=>ee-90),children:"↺"}),l.jsx(it,{onClick:()=>b(ee=>ee+90),children:"↻"}),l.jsx(En,{}),l.jsx(it,{$active:C,onClick:()=>$(ee=>!ee),disabled:n.length<2,children:C?"⏸ Stop":"▶ Slideshow"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",display:"flex",alignItems:"center",justifyContent:"center",background:"#2b2b2b"},children:[p&&l.jsx("p",{style:{color:"#fff"},children:p}),!p&&u&&l.jsx("img",{src:u,alt:n[i],style:X}),!p&&!u&&l.jsx("p",{style:{color:"#fff"},children:"Loading…"})]}),l.jsxs(Pt,{children:[l.jsx(Oe,{$flex:1,children:n[i]?aD(n[i]):""}),l.jsx(Oe,{children:n.length>1?`${i+1} / ${n.length}`:"1 / 1"}),l.jsx(Oe,{children:T?"Fit":`${Math.round(m*100)}%`})]})]})},uD={mp3:"audio/mpeg",wav:"audio/wav",ogg:"audio/ogg",m4a:"audio/mp4",flac:"audio/flac"},dD=/\.(mp3|wav|ogg|m4a|flac)$/i,fD=e=>uD[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,pD=e=>e.slice(0,e.lastIndexOf("/"))||"/",Xd=e=>e.slice(e.lastIndexOf("/")+1),hD=()=>{const e=rn(),n=g.useRef(null),o=g.useRef(null),i=g.useRef(null),a=g.useRef(!1),u=g.useRef(0),[d,p]=g.useState([]),[h,m]=g.useState(0),[y,w]=g.useState(null);g.useEffect(()=>{(async()=>{const C=(await e.argv())[0];if(!C){w("No media to play.");return}const $=pD(C);try{const j=(await e.readdir($)).filter(S=>dD.test(S)).sort().map(S=>`${$}/${S}`);p(j.length?j:[C]),m(Math.max(0,j.indexOf(C)))}catch{p([C]),m(0)}})()},[e]),g.useEffect(()=>{const C=d[h];if(!C||!n.current)return;let $=null,k=!0;return(async()=>{const j=fD(C);if(!j){w("Unsupported audio format.");return}try{const S=await e.readFile(C);$=URL.createObjectURL(new Blob([S],{type:j})),k&&n.current&&(n.current.src=$,n.current.play().catch(()=>{}))}catch{k&&w("Could not open this file.")}})(),()=>{k=!1,$&&URL.revokeObjectURL($)}},[d,h,e]);const b=()=>{if(!(a.current||!n.current))try{const C=window.AudioContext||window.webkitAudioContext,$=new C,k=$.createMediaElementSource(n.current),j=$.createAnalyser();j.fftSize=128,k.connect(j),j.connect($.destination),i.current=j,a.current=!0,$.resume(),T()}catch{}},T=()=>{const C=o.current,$=i.current;if(!C||!$)return;const k=C.getContext("2d"),j=$.frequencyBinCount,S=new Uint8Array(j);$.getByteFrequencyData(S),k.fillStyle="#0a0020",k.fillRect(0,0,C.width,C.height);const R=C.width/j;for(let M=0;M<j;M++){const K=S[M]/255*C.height,X=k.createLinearGradient(0,C.height,0,C.height-K);X.addColorStop(0,"#ff2d95"),X.addColorStop(1,"#00e5d0"),k.fillStyle=X,k.fillRect(M*R,C.height-K,R-1,K)}u.current=requestAnimationFrame(T)};g.useEffect(()=>()=>cancelAnimationFrame(u.current),[]);const E=()=>m(C=>d.length?(C+1)%d.length:0);return l.jsxs(Et,{$minW:340,$minH:280,style:{padding:6,paddingBottom:0},children:[y&&l.jsx("p",{style:{padding:12},children:y}),!y&&l.jsxs(l.Fragment,{children:[l.jsxs("p",{style:{margin:"2px 0 6px",fontWeight:"bold",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["🎵 ",d[h]?Xd(d[h]):"—"]}),l.jsx(wt,{variant:"well",style:{padding:2,marginBottom:6},children:l.jsx("canvas",{ref:o,width:320,height:80,style:{display:"block",width:"100%",height:80,background:"#0a0020"}})}),l.jsx("audio",{ref:n,controls:!0,onPlay:b,onEnded:E,style:{width:"100%"}}),l.jsxs("p",{style:{fontSize:12,fontWeight:"bold",margin:"8px 0 4px"},children:["Playlist (",d.length,")"]}),l.jsx(wt,{variant:"well",style:{flex:1,minHeight:60,overflow:"auto",background:"#fff"},children:d.map((C,$)=>l.jsxs("div",{onClick:()=>m($),style:{padding:"3px 6px",cursor:"pointer",fontSize:12,background:$===h?"#000080":"transparent",color:$===h?"#fff":"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[$===h?"▶ ":"",Xd(C)]},C))})]}),l.jsxs(Pt,{children:[l.jsx(Oe,{$flex:1,children:y?"No media":d[h]?Xd(d[h]):"—"}),l.jsxs(Oe,{children:[d.length," track(s)"]})]})]})},Ov="vortex.uninstalled",np=new Set;function mD(){try{return new Set(JSON.parse(localStorage.getItem(Ov)||"[]"))}catch{return new Set}}let za=mD();function gD(){localStorage.setItem(Ov,JSON.stringify([...za]))}function zv(){return za}function Ex(e,n){const o=new Set(za);n?o.delete(e):o.add(e),za=o,gD(),np.forEach(i=>i())}function xD(e){return np.add(e),()=>np.delete(e)}function gc(){return g.useSyncExternalStore(xD,zv)}const $x={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},Tx={display:"flex",alignItems:"center",gap:8,padding:"3px 6px"},yD=()=>{const e=Wr(),n=gc(),[o,i]=g.useState(0),a=Mr.filter(h=>!n.has(h.exec)),u=Mr.filter(h=>n.has(h.exec)),d=h=>{e.registry.unregister(h),Ex(h,!1)},p=h=>{const m=Mr.find(y=>y.exec===h);m&&e.registry.register(m),Ex(h,!0)};return l.jsxs(Et,{$minW:420,$minH:320,style:{padding:4},children:[l.jsxs(Za,{value:o,onChange:h=>i(h),children:[l.jsx(Pr,{value:0,children:"Install/Uninstall"}),l.jsx(Pr,{value:1,children:"Add Programs"})]}),l.jsx(Ja,{style:{flex:1,minHeight:0},children:l.jsxs(Br,{style:{height:"100%"},children:[o===0&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Installed programs. Select one and click Remove to uninstall it."}),l.jsx("div",{style:$x,children:a.map(h=>l.jsxs("div",{style:Tx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),ED.has(h.exec)?l.jsx("span",{style:{fontSize:11,color:"#555"},children:"system"}):l.jsx(Ue,{size:"sm",onClick:()=>d(h.exec),children:"Remove"})]},h.exec))})]}),o===1&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Programs available to install."}),l.jsxs("div",{style:$x,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Everything is installed."}),u.map(h=>l.jsxs("div",{style:Tx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),l.jsx(Ue,{size:"sm",onClick:()=>p(h.exec),children:"Install"})]},h.exec))]})]})]})}),l.jsx(Pt,{children:l.jsxs(Oe,{$flex:1,children:[a.length," installed · ",u.length," available"]})})]})},_v="/trash.svg",xc="/task_manager.png",Fv="/doom.png",Bv="/doom2.png",Hp="/playstation-logo.png",Wv="/wordpad.svg",Hv="/browser.png",Uv="/tomb.jpg",Vv="/persia.png",Kv="/vapor.png",Up="/terminal.svg",Vp="/calculator.svg",Kp="/minesweeper.svg",Qp="/solitaire.svg",qp="/snake.svg",Gp="/freecell.svg",_a="/clock.svg",Fa="/paint_file-3.png",rp="/find.svg",op="/help.svg",Yp="/network.svg",Ss="/winpopup.svg",wD=g.lazy(()=>wo(()=>import("./Doom-DBsHeSXa.js"),__vite__mapDeps([0,1]))),vD=g.lazy(()=>wo(()=>import("./DoomII-CKOXy54K.js"),__vite__mapDeps([2,1]))),bD=g.lazy(()=>wo(()=>import("./TombRaider-CrTPkOLM.js"),__vite__mapDeps([3,1]))),kD=g.lazy(()=>wo(()=>import("./Persia-B8ZV-3ZE.js"),__vite__mapDeps([4,1]))),SD=g.lazy(()=>wo(()=>import("./Backlogger-CwxAZs6W.js"),[])),jD=g.lazy(()=>wo(()=>import("./Browser-TqP7EFix.js"),[])),CD=g.lazy(()=>wo(()=>import("./NightwavePlaza-uaDSjX-0.js"),[])),ED=new Set(["recycle_bin","my_computer","task_manager","explorer","terminal","control_panel","notes","find","add_remove"]),Mr=[We({exec:"recycle_bin",name:"Recycle Bin",icon:_v,component:I2,permissions:["fs"]}),We({exec:"my_computer",name:"My Computer",icon:ms,component:N2,permissions:["proc"]}),We({exec:"task_manager",name:"Task Manager",icon:xc,component:V2,permissions:["proc"]}),We({exec:"notes",name:"Notes",icon:Fr,component:Z2,permissions:["fs"]}),We({exec:"wordpad",name:"WordPad",icon:Wv,component:n8,permissions:["fs"]}),We({exec:"explorer",name:"Explorer",icon:jt,component:x8,permissions:["fs","proc"]}),We({exec:"terminal",name:"Terminal",icon:Up,component:kT,permissions:["fs","proc"]}),We({exec:"paint",name:"Paint",icon:Fa,component:gR,permissions:["fs"]}),We({exec:"imageviewer",name:"Image Viewer",icon:Fa,component:cD,permissions:["fs"]}),We({exec:"mediaplayer",name:"Media Player",icon:_a,component:hD,permissions:["fs"]}),We({exec:"find",name:"Find Files",icon:rp,component:CR,permissions:["fs","proc"]}),We({exec:"backlogger",name:"GameCache",icon:Hp,component:SD,permissions:["net"]}),We({exec:"network",name:"Network Neighborhood",icon:Yp,component:YR,permissions:["net"]}),We({exec:"messenger",name:"WinPopup",icon:Ss,component:rD,permissions:["net"]}),We({exec:"browser",name:"Browser",icon:Hv,component:jD,permissions:["net"]}),We({exec:"vaporwave",name:"Nightwave Plaza",icon:Kv,component:CD,permissions:["net","audio"]}),We({exec:"calculator",name:"Calculator",icon:Vp,component:ST,permissions:[]}),We({exec:"minesweeper",name:"Minesweeper",icon:Kp,component:nR,permissions:["net"]}),We({exec:"solitaire",name:"Solitaire",icon:Qp,component:iR,permissions:["net"]}),We({exec:"snake",name:"Snake",icon:qp,component:lR,permissions:["net"]}),We({exec:"freecell",name:"FreeCell",icon:Gp,component:uR,permissions:["net"]}),We({exec:"clock",name:"Clock",icon:_a,component:dR,permissions:[]}),We({exec:"help",name:"Help",icon:op,component:UR,permissions:[]}),We({exec:"control_panel",name:"Control Panel",icon:ms,component:Q$,permissions:[]}),We({exec:"add_remove",name:"Add/Remove Programs",icon:ms,component:yD,permissions:[]}),We({exec:"doom",name:"Doom",icon:Fv,component:wD,permissions:[]}),We({exec:"doomII",name:"Doom II",icon:Bv,component:vD,permissions:[]}),We({exec:"tomb",name:"Tomb Raider",icon:Uv,component:bD,permissions:[]}),We({exec:"persia",name:"Prince of Persia",icon:Vv,component:kD,permissions:[]})];function $D(e){for(const n of Mr)e.register(n)}const Jd="vortex.proctable",TD="process";function AD(e){return{load(){const n=localStorage.getItem(Jd);if(n)return RD(n);const o=localStorage.getItem(TD);if(o){const i=DD(o,e);return i&&localStorage.setItem(Jd,JSON.stringify(i)),i}return null},save(n){localStorage.setItem(Jd,JSON.stringify(n))}}}function RD(e){try{const n=JSON.parse(e);return Array.isArray(n)?n:null}catch{return null}}function DD(e,n){let o;try{o=JSON.parse(e)}catch{return null}return Array.isArray(o)?o.filter(i=>i&&i.componentName).map(i=>{var a,u;return{pid:i.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:i.componentName,name:i.name??i.componentName,icon:i.icon??"",priority:typeof i.priority=="number"?i.priority:0,window:{x:((a=i.location)==null?void 0:a.x)??n().x,y:((u=i.location)==null?void 0:u.y)??n().y},cwd:"/home/user",state:"running"}}):null}class ID{constructor(){Ne(this,"mounts",[]);Ne(this,"listeners",new Set);Ne(this,"changeVersion",0)}subscribe(n){return this.listeners.add(n),()=>this.listeners.delete(n)}version(){return this.changeVersion}touch(){this.emit()}emit(){this.changeVersion++;for(const n of this.listeners)n()}mount(n,o){const i=Nr(n);this.mounts=this.mounts.filter(a=>a.mountPoint!==i),this.mounts.push({mountPoint:i,fs:o}),this.mounts.sort((a,u)=>u.mountPoint.length-a.mountPoint.length)}route(n){const o=Nr(n);for(const i of this.mounts)if(i.mountPoint==="/"||o===i.mountPoint||o.startsWith(i.mountPoint+"/")){const a=i.mountPoint==="/"?o:o.slice(i.mountPoint.length)||"/";return{fs:i.fs,rel:a||"/",mountPoint:i.mountPoint}}throw new Ce("ENOENT",n)}childMounts(n){const o=Nr(n);return this.mounts.filter(i=>i.mountPoint!=="/"&&en(i.mountPoint)===o).map(i=>i.mountPoint.slice(o==="/"?1:o.length+1))}stat(n){const{fs:o,rel:i}=this.route(n);return o.stat(i)}readdir(n){const{fs:o,rel:i}=this.route(n),a=o.readdir(i);return[...new Set([...a,...this.childMounts(n)])].sort()}read(n){const{fs:o,rel:i}=this.route(n);return o.read(i)}write(n,o){const{fs:i,rel:a}=this.route(n);if(i.readonly)throw new Ce("EROFS",n);i.write(a,o),this.emit()}mkdir(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new Ce("EROFS",n);o.mkdir(i),this.emit()}unlink(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new Ce("EROFS",n);o.unlink(i),this.emit()}rename(n,o){const i=this.route(n),a=this.route(o);if(i.fs.readonly||a.fs.readonly)throw new Ce("EROFS",n);if(i.fs===a.fs)i.fs.rename(i.rel,a.rel);else{if(this.stat(n).type==="dir")throw new Ce("EINVAL","cross-mount dir move");a.fs.write(a.rel,i.fs.read(i.rel)),i.fs.unlink(i.rel)}this.emit()}exists(n){try{return this.stat(n),!0}catch{return!1}}}const Zl=()=>Date.now();class ii{constructor(){Ne(this,"readonly",!1);Ne(this,"root",{type:"dir",mtime:Zl(),children:new Map})}resolve(n){let o=this.root;for(const i of Ts(n)){if(o.type!=="dir"||!o.children)throw new Ce("ENOTDIR",n);const a=o.children.get(i);if(!a)return null;o=a}return o}resolveDir(n){const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type!=="dir")throw new Ce("ENOTDIR",n);return o}exists(n){return this.resolve(n)!==null}stat(n){var i;const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);return{type:o.type,size:o.type==="file"?((i=o.data)==null?void 0:i.length)??0:0,mtime:o.mtime}}readdir(n){return[...this.resolveDir(n).children.keys()].sort()}read(n){const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type==="dir")throw new Ce("EISDIR",n);return o.data??new Uint8Array}write(n,o){if(Nr(n)==="/")throw new Ce("EISDIR",n);const i=this.resolveDir(en(n)),a=tn(n),u=i.children.get(a);if(u&&u.type==="dir")throw new Ce("EISDIR",n);i.children.set(a,{type:"file",mtime:Zl(),data:new Uint8Array(o)})}mkdir(n){const o=this.resolveDir(en(n)),i=tn(n);if(!i)throw new Ce("EEXIST",n);if(o.children.has(i))throw new Ce("EEXIST",n);o.children.set(i,{type:"dir",mtime:Zl(),children:new Map})}unlink(n){if(Nr(n)==="/")throw new Ce("EACCES","cannot unlink /");const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type==="dir"&&o.children.size>0)throw new Ce("ENOTEMPTY",n);this.resolveDir(en(n)).children.delete(tn(n))}rename(n,o){const i=this.resolve(n);if(!i)throw new Ce("ENOENT",n);const a=this.resolveDir(en(o));this.resolveDir(en(n)).children.delete(tn(n)),i.mtime=Zl(),a.children.set(tn(o),i)}serialize(){return Qv(this.root)}static deserialize(n){const o=new ii;return o.root=qv(n),o}}function Qv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:Array.from(e.data??[])};const n={};for(const[o,i]of e.children)n[o]=Qv(i);return{type:"dir",mtime:e.mtime,children:n}}function qv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:new Uint8Array(e.data??[])};const n=new Map;for(const[o,i]of Object.entries(e.children??{}))n.set(o,qv(i));return{type:"dir",mtime:e.mtime,children:n}}const Ax=["null","zero","random"],Rx=256,Dx=()=>Date.now();class PD{constructor(){Ne(this,"readonly",!1)}device(n){const o=tn(n);if(en(n)!=="/"||!Ax.includes(o))throw new Ce("ENOENT",n);return o}stat(n){return n==="/"?{type:"dir",size:0,mtime:Dx()}:(this.device(n),{type:"dev",size:0,mtime:Dx()})}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return[...Ax]}read(n){switch(this.device(n)){case"null":return new Uint8Array;case"zero":return new Uint8Array(Rx);case"random":return crypto.getRandomValues(new Uint8Array(Rx));default:throw new Ce("ENOENT",n)}}write(n,o){if(this.device(n)!=="null")throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}const Ix=()=>Date.now(),Px=e=>new TextEncoder().encode(e);class ND{constructor(n){Ne(this,"readonly",!0);this.source=n}entries(){return["processes",...this.source().map(n=>n.pid)]}find(n){return this.source().find(o=>o.pid===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:Ix()};const o=tn(n);if(en(n)!=="/"||!this.entries().includes(o))throw new Ce("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:Ix()}}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return this.entries()}read(n){const o=tn(n);if(o==="processes"){const a=this.source().map(u=>`${u.pid.slice(0,8)}  ${u.state.padEnd(8)}  p${u.priority}  ${u.name}`).join(`
`);return Px(`PID       STATE     PRIO  NAME
${a}
`)}const i=this.find(o);if(!i)throw new Ce("ENOENT",n);return Px(`pid:      ${i.pid}
ppid:     ${i.ppid??"-"}
name:     ${i.name}
exec:     ${i.exec}
state:    ${i.state}
priority: ${i.priority}
uid:      ${i.uid}
`)}write(n){throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}const Nx=()=>Date.now(),MD=e=>new TextEncoder().encode(e);class LD{constructor(n){Ne(this,"readonly",!0);this.source=n}find(n){return this.source().find(o=>o.exec===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:Nx()};const o=tn(n);if(en(n)!=="/"||!this.find(o))throw new Ce("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:Nx()}}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return this.source().map(o=>o.exec).sort()}read(n){const o=this.find(tn(n));if(!o)throw new Ce("ENOENT",n);return MD(`#!vortex-program
exec=${o.exec}
name=${o.name}
`)}write(n){throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}function OD(e){let n="";for(const o of e)n+=String.fromCharCode(o);return btoa(n)}function zD(e){const n=atob(e),o=new Uint8Array(n.length);for(let i=0;i<n.length;i++)o[i]=n.charCodeAt(i);return o}class Mx{constructor(n,o,i=()=>{}){Ne(this,"readonly",!1);Ne(this,"mirror",new ii);Ne(this,"chains",new Map);this.mountPoint=n,this.api=o,this.onLoaded=i}async init(){try{const o=(await this.api.list()).filter(a=>a.path===this.mountPoint||a.path.startsWith(this.mountPoint+"/")),i=a=>a===this.mountPoint?"/":a.slice(this.mountPoint.length);for(const a of o.filter(u=>u.type==="folder").sort((u,d)=>u.path.length-d.path.length))this.ensureDir(i(a.path));for(const a of o.filter(u=>u.type!=="folder")){const u=i(a.path);this.ensureDir(en(u)),this.mirror.write(u,a.content?zD(a.content):new Uint8Array)}}catch{}this.onLoaded()}async reload(){this.mirror=new ii,this.chains.clear(),await this.init()}ensureDir(n){let o="";for(const i of Ts(n))o+="/"+i,this.mirror.exists(o)||this.mirror.mkdir(o)}full(n){return n==="/"?this.mountPoint:this.mountPoint+n}nameOf(n){return n.slice(n.lastIndexOf("/")+1)}stat(n){return this.mirror.stat(n)}readdir(n){return this.mirror.readdir(n)}read(n){return this.mirror.read(n)}chain(n,o){const a=(this.chains.get(n)??Promise.resolve()).then(o).catch(()=>{});this.chains.set(n,a)}async flush(){await Promise.all(this.chains.values())}write(n,o){this.mirror.write(n,o);const i=OD(o);this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"file",i))}mkdir(n){this.mirror.mkdir(n),this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"folder",null))}unlink(n){this.mirror.unlink(n),this.chain(n,()=>this.api.remove(this.full(n)))}rename(n,o){this.mirror.rename(n,o),this.chain(n,()=>this.api.rename(this.full(n),this.full(o)))}}function Lx(e,n="/files"){const o=()=>{const a=rc();return{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{}}},i=a=>(a.status===401&&vw(),a);return{async list(){const a=i(await fetch(`${e}${n}`,{headers:o()}));return a.ok?a.json():[]},async upsert(a,u,d,p){i(await fetch(`${e}${n}`,{method:"POST",headers:o(),body:JSON.stringify({path:a,name:u,type:d,content:p})}))},async remove(a){i(await fetch(`${e}${n}?path=${encodeURIComponent(a)}`,{method:"DELETE",headers:o()}))},async rename(a,u){i(await fetch(`${e}${n}/rename?from=${encodeURIComponent(a)}&to=${encodeURIComponent(u)}`,{method:"PUT",headers:o()}))}}}const Ba="vortex.vfs";function _D(){return{async load(){const e=localStorage.getItem(Ba);if(!e)return null;try{return JSON.parse(e)}catch{return null}},save(e){try{localStorage.setItem(Ba,JSON.stringify(e))}catch{}}}}const Ox="vortex.vfs.json";function FD(){var e;return typeof navigator<"u"&&!!((e=navigator.storage)!=null&&e.getDirectory)}function BD(){let e=null,n=null,o=!1;async function i(){if(o||n===null)return;o=!0;const a=n;n=null;try{const p=await(await(await navigator.storage.getDirectory()).getFileHandle(Ox,{create:!0})).createWritable();await p.write(JSON.stringify(a)),await p.close()}catch{}finally{o=!1,n!==null&&i()}}return{async load(){try{const u=await(await navigator.storage.getDirectory()).getFileHandle(Ox).catch(()=>null);if(u){const p=await(await u.getFile()).text();return p?JSON.parse(p):null}const d=localStorage.getItem(Ba);if(d){const p=JSON.parse(d);return n=p,i(),localStorage.removeItem(Ba),p}return null}catch{return null}},save(a){n=a,e&&clearTimeout(e),e=setTimeout(()=>void i(),300)}}}function WD(){return FD()?BD():_D()}const Gv=g.createContext(null),zx=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2});function HD(){const e=new ii;return e.mkdir("/home"),e.mkdir("/tmp"),e.mkdir("/mnt"),e.mkdir("/Recycle Bin"),e}async function UD(){const e=new y2;$D(e);for(const m of zv())e.unregister(m);const n=new x2({registry:e,persistence:AD(zx),defaultWindowLocation:zx}),o=WD(),i=await o.load(),a=i?ii.deserialize(i):HD();a.exists("/mnt")||a.mkdir("/mnt");const u=new ID;u.mount("/",a),u.mount("/dev",new PD),u.mount("/proc",new ND(()=>n.processInfo())),u.mount("/bin",new LD(()=>n.registry.list().map(m=>({exec:m.exec,name:m.name}))));const d="http://localhost:8082",p=new Mx("/mnt/cloud",Lx(d,"/files"),()=>u.touch());u.mount("/mnt/cloud",p);const h=new Mx("/mnt/public",Lx(d,"/public/files"),()=>u.touch());return u.mount("/mnt/public",h),u.subscribe(()=>o.save(a.serialize())),n.mountVfs(u),i||o.save(a.serialize()),{kernel:n,drives:[p,h]}}const Yv=g.createContext(async()=>{});function VD({children:e,kernel:n}){const[o,i]=g.useState(n?{kernel:n,drives:[]}:null);g.useEffect(()=>{if(n){i({kernel:n,drives:[]});return}let d=!1;return UD().then(p=>{d||i(p)}),()=>{d=!0}},[n]);const a=(o==null?void 0:o.drives)??[],u=g.useCallback(async()=>{await Promise.all(a.map(d=>d.reload()))},[a]);return o?l.jsx(Gv.Provider,{value:o.kernel,children:l.jsx(Yv.Provider,{value:u,children:e})}):l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#008080",color:"#fff",fontSize:14},children:"Starting VortexOS…"})}function KD(){return g.useContext(Yv)}function Wr(){const e=g.useContext(Gv);if(!e)throw new Error("useKernel must be used within a KernelProvider");return e}function yc(){const e=Wr();return g.useSyncExternalStore(e.subscribe,e.getSnapshot)}function QD(){const e=Wr();return g.useSyncExternalStore(e.subscribeFs,e.fsVersion)}function qD(){const e=Wr();return g.useSyncExternalStore(e.subscribePanic,e.getPanic)}const Xv=Y.createContext({});function GD({children:e}){const n=Wr(),o=yc(),i=g.useMemo(()=>o.map(h=>({uuid:h.pid,priority:h.priority,component:n.registry.component(h.exec)??(()=>null),selected:!1,icon:h.icon,name:h.name,location:h.window})),[o,n]),a=h=>{const m=h.componentName;m&&n.syscall(null,"spawn",{exec:m,name:h.name,icon:h.icon,argv:h.argv})},u=h=>{h&&n.syscall(null,"kill",{pid:h})},d=h=>{h.uuid&&n.syscall(null,"win_focus",{pid:h.uuid})},p=(h,m)=>{h&&n.syscall(null,"win_move",{pid:h,location:m})};return l.jsx(Xv.Provider,{value:{processes:i,changePriority:d,closeProcess:u,addProcess:a,handleProceessLocationChange:p},children:e})}function Dn(){return Y.useContext(Xv)}const _x=200,Fx=2400,YD=vt`from { width: 0 } to { width: 100% }`,Jv=vt`from { opacity: 0 } to { opacity: 1 }`,XD=vt`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`,Xp=L.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
`,JD=L(Xp)`
    ${({$vapor:e})=>e?`background:
                radial-gradient(120% 80% at 50% 18%, #2a0a4a 0%, #14012b 55%, #05010f 100%);`:"background-image: url('/clouds.jpg'); background-size: cover; background-position: center;"}
`,ZD=L.div`
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
`,e4=L.button`
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
`,t4=L(Xp)`
    background: ${({$vapor:e})=>e?"radial-gradient(80% 80% at 50% 50%, #0a0118 0%, #000 100%)":"#000"};
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7vh 8vw;
    color: #d8d8d8;
    font-family: "Courier New", monospace;
    font-size: 15px;
    line-height: 1.7;
    text-align: left;
`,n4=L.div`
    animation: ${Jv} 0.1s linear;
    white-space: pre;
`,r4=L.span`
    color: ${({$vapor:e})=>e?"#00e5d0":"#3ad14a"};
    font-weight: bold;
`,o4=L.span`
    display: inline-block;
    width: 9px;
    height: 16px;
    margin-left: 2px;
    vertical-align: text-bottom;
    background: currentColor;
    animation: ${XD} 1s step-end infinite;
`,i4=L(Xp)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#000"};
    animation: ${Jv} 0.5s ease;
`,Bx=L.h1`
    margin: 26px 0 2px;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #5cb9ff, #ffffff)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,Wx=L.p`
    margin: 2px 0 0;
    color: #b9b9c8;
    font-size: 13px;
    letter-spacing: 1px;
`,Hx=L.p`
    margin: 6px 0 0;
    font-size: 13px;
    font-weight: 600;
    color: ${({$vapor:e})=>e?"#00e5d0":"#7fc6ff"};
    text-shadow: 0 0 12px ${({$vapor:e})=>e?"#00e5d088":"transparent"};
`,s4=L.div`
    width: 320px;
    height: 18px;
    margin-top: 40px;
    padding: 2px;
    background: #000;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,l4=L.div`
    height: 100%;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #00e5d0)":"linear-gradient(90deg, #000080, #1084d0)"};
    animation: ${YD} ${({$ms:e})=>e}ms linear forwards;
`,a4=e=>[{label:"VortexOS BIOS v2.0  —  Experimental Edition"},{label:"(c) Serious Sam.  All rights reserved."},{label:""},{label:`Detecting processor cores ........ ${e}`,status:""},{label:"Microkernel .......................",status:"OK"},{label:"Syscall ABI .......................",status:"OK"},{label:"Virtual File System (OPFS) ........",status:"OK"},{label:"Process scheduler .................",status:"OK"},{label:""},{label:"Starting VortexOS ..."}],c4=()=>{const e=di(),{sssStyle:n}=Kt(),o=n,[i,a]=g.useState("ready"),[u,d]=g.useState(0),p=a4(navigator.hardwareConcurrency||4),h=g.useRef([]),m=()=>{s8(),a("post")};return g.useEffect(()=>{if(i==="post")return p.forEach((y,w)=>{h.current.push(setTimeout(()=>d(w+1),w*_x))}),h.current.push(setTimeout(()=>a("logo"),p.length*_x+350)),()=>{h.current.forEach(clearTimeout),h.current=[]}},[i]),g.useEffect(()=>{if(i!=="logo")return;l8();const y=setTimeout(()=>e("/vortex"),Fx);return()=>clearTimeout(y)},[i,e]),i==="ready"?l.jsxs(JD,{$vapor:o,children:[o&&l.jsx(ZD,{}),l.jsxs("div",{style:{position:"relative",zIndex:1},children:[l.jsx(oi,{size:150,vapor:o}),l.jsx(Bx,{$vapor:o,children:"VortexOS"}),l.jsx(Wx,{style:{color:o?"#cfcfe0":"#0a0a0a"},children:"Experimental Edition"}),l.jsx(e4,{$vapor:o,onClick:m,children:"Are you ready?"}),l.jsx(Hx,{$vapor:o,style:{marginTop:18,color:o?"#00e5d0":"#0a0a0a"},children:"a creation by Serious Sam"})]})]}):i==="post"?l.jsx(t4,{$vapor:o,children:p.slice(0,u).map((y,w)=>l.jsxs(n4,{children:[y.label,y.status?l.jsx(r4,{$vapor:o,children:y.status}):null,w===u-1&&l.jsx(o4,{})]},w))}):l.jsxs(i4,{$vapor:o,children:[l.jsx(oi,{size:170,vapor:o}),l.jsx(Bx,{$vapor:o,children:"VortexOS"}),l.jsx(Wx,{children:"Version 2.0 · Experimental Edition"}),l.jsx(Hx,{$vapor:o,children:"a creation by Serious Sam"}),l.jsx(s4,{children:l.jsx(l4,{$vapor:o,$ms:Fx-200})})]})},u4=`Welcome to VortexOS.\r
\r
This is a real file, stored on a real virtual filesystem.\r
Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r
`;async function ip(e,n){return e.stat(n).then(()=>!0).catch(()=>!1)}async function Zv(e,n,o){await ip(e,o)||await e.mkdir(o).catch(()=>{});const i=await e.readdir(n).catch(()=>[]);for(const a of i){const u=`${n}/${a}`,d=`${o}/${a}`,p=await e.stat(u).catch(()=>null);p&&(p.type==="dir"?(await Zv(e,u,d),await e.unlink(u).catch(()=>{})):await ip(e,d)?await e.unlink(u).catch(()=>{}):await e.rename(u,d).catch(()=>{}))}}async function d4(e,n){const o=`/home/${n}`,i=`vortex.homemerged.${n}`;if(n!=="user"&&!localStorage.getItem(i)){try{await ip(e,"/home/user")&&(await Zv(e,"/home/user",o),await e.unlink("/home/user").catch(()=>{}))}catch{}localStorage.setItem(i,"1")}await e.mkdir(o).catch(()=>{}),await e.mkdir(`${o}/Documents`).catch(()=>{}),await e.mkdir(`${o}/Desktop`).catch(()=>{}),(await e.readdir(o).catch(()=>[])).includes("welcome.txt")||await e.writeTextFile(`${o}/welcome.txt`,u4).catch(()=>{})}const Ux=40,Vx="/Recycle Bin",Zd=84,ea=92,f4=[{id:"app:recycle_bin",name:"Recycle Bin",icon:_v,kind:"app",componentName:"recycle_bin"},{id:"app:backlogger",name:"GameCache",icon:Hp,kind:"app",componentName:"backlogger"},{id:"app:my_computer",name:"My Computer",icon:ms,kind:"app",componentName:"my_computer"},{id:"app:network",name:"Network Neighborhood",icon:Yp,kind:"app",componentName:"network"},{id:"app:messenger",name:"WinPopup",icon:Ss,kind:"app",componentName:"messenger"},{id:"app:vaporwave",name:"Nightwave Plaza",icon:Kv,kind:"app",componentName:"vaporwave"},{id:"app:task_manager",name:"Task Manager",icon:xc,kind:"app",componentName:"task_manager"},{id:"app:explorer",name:"Explorer",icon:jt,kind:"app",componentName:"explorer"},{id:"app:terminal",name:"Terminal",icon:Up,kind:"app",componentName:"terminal"},{id:"app:notes",name:"Notes",icon:Fr,kind:"app",componentName:"notes"},{id:"app:browser",name:"Browser",icon:Hv,kind:"app",componentName:"browser"},{id:"app:doom",name:"Doom",icon:Fv,kind:"app",componentName:"doom"},{id:"app:doomII",name:"Doom II",icon:Bv,kind:"app",componentName:"doomII"},{id:"app:persia",name:"Prince of Persia",icon:Vv,kind:"app",componentName:"persia"},{id:"app:tomb",name:"Tomb Raider",icon:Uv,kind:"app",componentName:"tomb"},{id:"app:calculator",name:"Calculator",icon:Vp,kind:"app",componentName:"calculator"},{id:"app:minesweeper",name:"Minesweeper",icon:Kp,kind:"app",componentName:"minesweeper"},{id:"app:solitaire",name:"Solitaire",icon:Qp,kind:"app",componentName:"solitaire"},{id:"app:snake",name:"Snake",icon:qp,kind:"app",componentName:"snake"},{id:"app:freecell",name:"FreeCell",icon:Gp,kind:"app",componentName:"freecell"},{id:"app:clock",name:"Clock",icon:_a,kind:"app",componentName:"clock"},{id:"app:paint",name:"Paint",icon:Fa,kind:"app",componentName:"paint"}],p4=e=>{try{return JSON.parse(localStorage.getItem(e)||"{}")}catch{return{}}},h4=()=>{const{addProcess:e}=Dn(),n=rn(),{alert:o}=Ds(),{username:i}=Kn(),a=QD(),u=gc(),d=on(),p=t$[d.desktopIconSize],h=i||"user",m=`/home/${h}/Desktop`,y=`vortex.desktop.positions.${h}`,[w,b]=g.useState([]),[T,E]=g.useState(()=>p4(y)),[C,$]=g.useState(new Set),[k,j]=g.useState(null),[S,R]=g.useState(null),M=g.useRef(null),K=g.useRef(null),X=g.useRef(null),ee=[...f4.filter(A=>!A.componentName||!u.has(A.componentName)),...w],ie=Math.max(1,Math.floor((window.innerHeight-Ux-20)/ea)),me=(A,V)=>T[A]??{x:12+Math.floor(V/ie)*Zd,y:12+V%ie*ea},fe=g.useCallback(async()=>{try{await d4(n,h);const A=await n.readdir(m),V=await Promise.all(A.map(async te=>{const ne=await n.stat(He(m,te)).then(ce=>ce.type).catch(()=>"file");return{id:`file:${te}`,name:te,icon:Dw(te,ne==="dir"),kind:ne==="dir"?"dir":"file",path:He(m,te)}}));b(V)}catch{b([])}},[n,h,m]);g.useEffect(()=>{new Audio("win98.mp3").play().catch(()=>{})},[]),g.useEffect(()=>{fe()},[fe,a]),g.useEffect(()=>{if(!k)return;const A=()=>j(null);return document.addEventListener("click",A),()=>document.removeEventListener("click",A)},[k]),g.useEffect(()=>{localStorage.setItem(y,JSON.stringify(T))},[T,y]);const he=A=>{A.kind==="app"?e({componentName:A.componentName,name:A.name,icon:A.icon}):A.path&&Fp(n,A.path)},le=(A,V,te)=>{if(A.button!==0)return;A.stopPropagation(),j(null);const ne=C.has(V.id),ce=ne?[...C]:[V.id];ne||$(new Set([V.id]));const je={};ce.forEach(Re=>{const ze=ee.findIndex(st=>st.id===Re);je[Re]=me(Re,ze>=0?ze:te)}),K.current={ids:ce,startMouse:{x:A.clientX,y:A.clientY},start:je},document.addEventListener("mousemove",_),document.addEventListener("mouseup",D)},_=A=>{const V=K.current;if(!V)return;const te=A.clientX-V.startMouse.x,ne=A.clientY-V.startMouse.y;E(ce=>{const je={...ce};for(const Re of V.ids){const ze=V.start[Re];je[Re]={x:Math.max(0,ze.x+te),y:Math.max(0,ze.y+ne)}}return je})},D=A=>{document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",D);const V=K.current;if(V&&d.singleClickOpen&&V.ids.length===1&&!(Math.abs(A.clientX-V.startMouse.x)>4||Math.abs(A.clientY-V.startMouse.y)>4)){const ne=ee.find(ce=>ce.id===V.ids[0]);ne&&he(ne)}K.current=null},I=A=>{A.button===0&&($(new Set),j(null),X.current={x:A.clientX,y:A.clientY},document.addEventListener("mousemove",H),document.addEventListener("mouseup",W))},H=A=>{if(!X.current)return;const V=Math.min(A.clientX,X.current.x),te=Math.min(A.clientY,X.current.y),ne=Math.abs(A.clientX-X.current.x),ce=Math.abs(A.clientY-X.current.y);R({x:V,y:te,w:ne,h:ce});const je=new Set;ee.forEach((Re,ze)=>{const st=me(Re.id,ze);st.x+Zd>V&&st.x<V+ne&&st.y+ea>te&&st.y<te+ce&&je.add(Re.id)}),$(je)},W=()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W),X.current=null,R(null)},B=A=>{const V=w.map(je=>je.name);if(!V.includes(A))return A;const te=A.lastIndexOf("."),ne=te>0?A.slice(0,te):A,ce=te>0?A.slice(te):"";for(let je=2;;je++)if(!V.includes(`${ne} (${je})${ce}`))return`${ne} (${je})${ce}`},N=async()=>{await n.mkdir(He(m,B("New Folder"))).catch(A=>o({title:"Error",message:A.code??"failed",type:"error"})),fe()},z=async()=>{await n.writeTextFile(He(m,B("New Text Document.txt")),""),fe()},J=async A=>{const te=(await n.readdir(Vx).catch(()=>[])).includes(A.name)?`${A.name}-${Date.now()%1e4}`:A.name;await n.rename(A.path,He(Vx,te)).catch(()=>{}),yw(te,A.path)},ae=async A=>{await J(A),fe()},ue=async()=>{const A=w.filter(V=>C.has(V.id));for(const V of A)await J(V);fe()},ge=()=>E({}),pe=A=>{const V=ce=>ce.kind==="app"?0:ce.kind==="dir"?1:2,te=[...ee].sort((ce,je)=>{if(A==="type"){const Re=V(ce)-V(je);if(Re!==0)return Re}return ce.name.localeCompare(je.name)}),ne={};te.forEach((ce,je)=>{ne[ce.id]={x:12+Math.floor(je/ie)*Zd,y:12+je%ie*ea}}),E(ne)},xe=()=>e({componentName:"control_panel",name:"Control Panel",icon:"/controlpanel.png"});g.useEffect(()=>{const A=V=>{var ne;if(V.key!=="Delete")return;const te=(ne=document.activeElement)==null?void 0:ne.tagName;te==="INPUT"||te==="TEXTAREA"||w.some(ce=>C.has(ce.id))&&ue()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[C,w]);const q=(A,V)=>{A.preventDefault(),A.stopPropagation(),V&&$(new Set([V.id])),j({x:A.clientX,y:A.clientY,item:V})};return l.jsxs("div",{ref:M,onMouseDown:I,onContextMenu:A=>q(A,null),style:{position:"relative",width:"100%",height:`calc(100vh - ${Ux}px)`,overflow:"hidden"},children:[d.showDesktopIcons&&ee.map((A,V)=>{const te=me(A.id,V),ne=C.has(A.id);return l.jsxs("div",{onMouseDown:ce=>le(ce,A,V),onDoubleClick:d.singleClickOpen?void 0:()=>he(A),onContextMenu:ce=>q(ce,A),style:{position:"absolute",left:te.x,top:te.y,width:p.cell,display:"flex",flexDirection:"column",alignItems:"center",padding:3,cursor:"pointer",border:ne?"1px dotted #ffffff":"1px solid transparent"},children:[l.jsx("img",{src:A.icon,alt:A.name,style:{height:p.icon,width:p.icon,objectFit:"contain"},draggable:!1}),l.jsx("p",{style:{marginTop:2,padding:"0 3px",textAlign:"center",fontSize:p.font,color:"#fff",textShadow:ne?"none":"1px 1px 0 rgba(0,0,0,0.6)",backgroundColor:ne?d.accentColor:"transparent",wordBreak:"break-word"},children:A.name})]},A.id)}),S&&l.jsx("div",{style:{position:"fixed",left:S.x,top:S.y,width:S.w,height:S.h,border:`1px dotted ${d.accentColor}`,background:`${d.accentColor}22`,pointerEvents:"none",zIndex:5}}),k&&(k.item?l.jsx(ho,{x:k.x,y:k.y,onClose:()=>j(null),items:[{label:"Open",glyph:"▸",onClick:()=>he(k.item)},...k.item.kind!=="app"?[{separator:!0},{label:"Delete",glyph:"🗑",onClick:()=>ae(k.item)}]:[],{separator:!0},{label:"Properties",onClick:()=>o({title:`${k.item.name} Properties`,message:`Name: ${k.item.name}
Type: ${k.item.kind==="app"?"Application":k.item.kind==="dir"?"Folder":"File"}${k.item.path?`
Location: ${k.item.path}`:""}`,type:"info"})}]}):l.jsx(ho,{x:k.x,y:k.y,onClose:()=>j(null),items:[{label:"View",submenu:[{label:"Large Icons",bullet:d.desktopIconSize==="large",onClick:()=>nt("desktopIconSize","large")},{label:"Normal Icons",bullet:d.desktopIconSize==="normal",onClick:()=>nt("desktopIconSize","normal")},{label:"Small Icons",bullet:d.desktopIconSize==="small",onClick:()=>nt("desktopIconSize","small")},{separator:!0},{label:"Show Desktop Icons",checked:d.showDesktopIcons,onClick:()=>nt("showDesktopIcons",!d.showDesktopIcons)}]},{label:"Sort Icons",submenu:[{label:"by Name",onClick:()=>pe("name")},{label:"by Type",onClick:()=>pe("type")}]},{label:"Line up Icons",onClick:ge},{label:"Refresh",glyph:"⟳",onClick:fe},{separator:!0},{label:"New",submenu:[{label:"Folder",icon:jt,onClick:N},{label:"Text Document",icon:Fr,onClick:z}]},{separator:!0},{label:"Properties",onClick:xe}]}))]})},Jp=["terminal","explorer","browser"],Zp=e=>`vortex.quicklaunch.${e||"user"}`,sp=new Set,m4=()=>sp.forEach(e=>e());function eh(e){const n=localStorage.getItem(Zp(e));if(n===null)return Jp;try{const o=JSON.parse(n);return Array.isArray(o)?o.filter(i=>typeof i=="string"):[]}catch{return[]}}function e1(e,n){localStorage.setItem(Zp(e),JSON.stringify(n)),m4()}function t1(e,n){return eh(e).includes(n)}function g4(e,n){const o=eh(e);o.includes(n)||e1(e,[...o,n])}function n1(e,n){e1(e,eh(e).filter(o=>o!==n))}function x4(e,n){t1(e,n)?n1(e,n):g4(e,n)}function y4(e){return g.useSyncExternalStore(n=>(sp.add(n),()=>sp.delete(n)),()=>{const n=localStorage.getItem(Zp(e))??JSON.stringify(Jp);return w4(n)})}let Kx="",ef=Jp;function w4(e){if(e!==Kx){Kx=e;try{const n=JSON.parse(e);ef=Array.isArray(n)?n.filter(o=>typeof o=="string"):[]}catch{ef=[]}}return ef}let th=!1;const lp=new Set,r1=()=>lp.forEach(e=>e());function o1(){th=!0,r1()}function ta(){th=!1,r1()}function v4(){return g.useSyncExternalStore(e=>(lp.add(e),()=>lp.delete(e)),()=>th)}const i1="vortex.run.mru",b4=10;function ap(){try{const e=JSON.parse(localStorage.getItem(i1)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function k4(e){const n=e.trim();if(!n)return;const o=[n,...ap().filter(i=>i!==n)].slice(0,b4);localStorage.setItem(i1,JSON.stringify(o))}const tf=40,S4=L.div`
    margin-left: auto;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    font-size: 12px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,nf=L.button`
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
`,rf=L.div`
    position: fixed;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 100001;
    padding: 8px;
    font-size: 12px;
`;function j4({muted:e}){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M2 6.5h3l4-3v11l-4-3H2z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),e?l.jsx("path",{d:"M12 6l4 6M16 6l-4 6",stroke:"#a00",strokeWidth:"1.5",strokeLinecap:"round"}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.5 6.5a3.5 3.5 0 0 1 0 5",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}),l.jsx("path",{d:"M13.5 5a6 6 0 0 1 0 8",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})]})}function C4(){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M9 2.5a3.5 3.5 0 0 0-3.5 3.5c0 4-1.5 5-1.5 5h10s-1.5-1-1.5-5A3.5 3.5 0 0 0 9 2.5z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.5 13.5a1.5 1.5 0 0 0 3 0",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round"})]})}function E4({connected:e}){const n=e?"#00c000":"#5a5a5a";return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1",y:"3",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"8",y:"9",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("path",{d:"M5.5 9.5v1.5h7",fill:"none",stroke:"#000",strokeWidth:"0.8"})]})}function $4(e){const[n,o]=g.useState(()=>new Date);return g.useEffect(()=>{const i=setInterval(()=>o(new Date),e);return()=>clearInterval(i)},[e]),n}function T4(e,n){const o=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0");if(n.clock24h){const d=String(e.getHours()).padStart(2,"0");return n.clockSeconds?`${d}:${o}:${i}`:`${d}:${o}`}const a=e.getHours()>=12?"PM":"AM",u=e.getHours()%12||12;return n.clockSeconds?`${u}:${o}:${i} ${a}`:`${u}:${o} ${a}`}const A4=["January","February","March","April","May","June","July","August","September","October","November","December"],R4=["S","M","T","W","T","F","S"],D4=["M","T","W","T","F","S","S"];function I4({today:e,firstDayMonday:n}){const o=e.getFullYear(),i=e.getMonth(),a=new Date(o,i,1).getDay(),u=n?(a+6)%7:a,d=new Date(o,i+1,0).getDate(),p=n?D4:R4,h=[];for(let m=0;m<u;m++)h.push(null);for(let m=1;m<=d;m++)h.push(m);return l.jsxs("div",{style:{width:196},children:[l.jsxs("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:6},children:[A4[i]," ",o]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,textAlign:"center"},children:[p.map((m,y)=>l.jsx("div",{style:{fontWeight:"bold",color:"#000080",fontSize:11},children:m},y)),h.map((m,y)=>{const w=m===e.getDate();return l.jsx("div",{style:{padding:"2px 0",fontSize:11,background:w?"#000080":"transparent",color:w?"#fff":"#000"},children:m??""},y)})]})]})}const P4={info:"#000080",warning:"#806000",error:"#800000"};function N4({items:e}){return l.jsxs("div",{style:{width:260},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{fontWeight:"bold"},children:"Notifications"}),e.length>0&&l.jsx("button",{onClick:()=>g$(),style:{fontSize:11,cursor:"pointer",border:"1px solid #808080",background:"#c0c0c0"},children:"Clear"})]}),l.jsx("div",{style:{maxHeight:220,overflowY:"auto",background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080"},children:e.length===0?l.jsx("div",{style:{padding:12,color:"#666",textAlign:"center"},children:"No notifications"}):[...e].reverse().map(n=>l.jsxs("div",{style:{padding:"6px 8px",borderBottom:"1px solid #e0e0e0",display:"flex",gap:6},children:[n.icon&&l.jsx("img",{src:n.icon,alt:"",style:{width:16,height:16,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",color:P4[n.type]??"#000"},children:n.title}),l.jsx("div",{style:{color:"#000",wordBreak:"break-word"},children:n.body})]})]},n.id))})]})}const M4=({username:e})=>{const n=on(),o=$4(n.clockSeconds?1e3:1e4),[i,a]=g.useState(null),u=g.useRef(null);g.useSyncExternalStore(i8,()=>`${If()}|${Pf()}`);const d=If(),p=Pf();g.useSyncExternalStore(Wp,()=>`${Cx()}|${ep().length}`);const h=Cx(),m=ep().length;g.useSyncExternalStore(Bw,()=>String(Zg().length));const y=Zg();g.useEffect(()=>{if(!i)return;const b=E=>{var C;(C=u.current)!=null&&C.contains(E.target)||a(null)},T=E=>E.key==="Escape"&&a(null);return document.addEventListener("mousedown",b),document.addEventListener("keydown",T),()=>{document.removeEventListener("mousedown",b),document.removeEventListener("keydown",T)}},[i]);const w=b=>{Xo(),a(T=>T===b?null:b)};return l.jsxs(l.Fragment,{children:[l.jsxs(S4,{ref:u,className:"tray-clock",children:[l.jsx(nf,{title:h?`Network: connected (${m} online)`:"Network: offline",onClick:()=>{Xo(),a(null)},children:l.jsx(E4,{connected:h})}),l.jsx(nf,{title:p?"Volume: muted":`Volume: ${Math.round(d*100)}%`,onClick:()=>w("volume"),children:l.jsx(j4,{muted:p})}),l.jsx(nf,{title:`Notifications (${y.length})`,onClick:()=>w("notifications"),children:l.jsx(C4,{})}),e&&l.jsx("span",{style:{opacity:.85},children:e}),n.showClock&&l.jsx("span",{style:{cursor:"pointer"},onClick:()=>w("clock"),children:T4(o,n)})]}),i==="volume"&&Ut.createPortal(l.jsxs(rf,{style:{right:8,bottom:tf+6,width:96},onMouseDown:b=>b.stopPropagation(),children:[l.jsx("div",{style:{textAlign:"center",marginBottom:4},children:"Volume"}),l.jsx("div",{style:{display:"flex",justifyContent:"center",height:120},children:l.jsx(Vy,{orientation:"vertical",size:"120px",min:0,max:100,step:1,value:Math.round(d*100),onChange:b=>Pw(b/100)})}),l.jsx("div",{style:{marginTop:6},children:l.jsx(dt,{checked:p,onChange:()=>Nw(!p),label:"Mute"})})]}),document.body),i==="clock"&&Ut.createPortal(l.jsx(rf,{style:{right:8,bottom:tf+6},onMouseDown:b=>b.stopPropagation(),children:l.jsx(I4,{today:o,firstDayMonday:n.firstDayMonday})}),document.body),i==="notifications"&&Ut.createPortal(l.jsx(rf,{style:{right:8,bottom:tf+6},onMouseDown:b=>b.stopPropagation(),children:l.jsx(N4,{items:y})}),document.body)]})},L4=40,O4=({process:e,minimized:n,children:o})=>{const[i,a]=g.useState(null),u=g.useRef(null),d=g.useRef(null),p=()=>{u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{var w;const y=(w=d.current)==null?void 0:w.firstElementChild;y&&a(y.getBoundingClientRect())},400)},h=()=>{u.current&&clearTimeout(u.current),u.current=null,a(null)},m=n?"Minimized":e.priority===0?"Active":"Running";return l.jsxs("span",{ref:d,style:{display:"contents"},onMouseEnter:p,onMouseLeave:h,onMouseDown:h,children:[o,i&&Ut.createPortal(l.jsx("div",{style:{position:"fixed",left:Math.max(4,Math.min(i.left,window.innerWidth-184)),bottom:L4+6,width:180,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",padding:8,zIndex:3e6,pointerEvents:"none",fontSize:12,color:"#000"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:e.icon,alt:"",style:{width:32,height:32,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),l.jsx("div",{style:{color:"#000080"},children:m})]})]})}),document.body)]})},Qx=({text:e,children:n})=>{const[o,i]=g.useState(null),a=g.useRef(null),u=p=>{const h=p.clientX,m=p.clientY;a.current&&clearTimeout(a.current),a.current=setTimeout(()=>i({x:h,y:m}),500)},d=()=>{a.current&&clearTimeout(a.current),a.current=null,i(null)};return l.jsxs("span",{style:{display:"contents"},onMouseEnter:u,onMouseLeave:d,onMouseDown:d,children:[n,o&&e&&Ut.createPortal(l.jsx("div",{style:{position:"fixed",left:o.x+12,top:o.y+18,background:"#ffffe1",border:"1px solid #000",padding:"1px 5px",fontSize:12,color:"#000",pointerEvents:"none",zIndex:3e6,whiteSpace:"nowrap",boxShadow:"1px 1px 1px rgba(0,0,0,0.3)"},children:e}),document.body)]})},sr="/w95.png",qo="/controlpanel.png",Wa=40,z4=L.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${Wa}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 4px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    z-index: 99999;
    transition: transform 0.18s ease;
    transform: translateY(${({$hidden:e})=>e?`${Wa-3}px`:"0"});
`,_4=L.button`
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
`,of=new Map(Mr.map(e=>[e.exec,e])),F4=L.button`
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
`,B4=L.button`
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
`,W4=[{name:"Terminal",icon:Up,componentName:"terminal"},{name:"Explorer",icon:jt,componentName:"explorer"},{name:"Notes",icon:Fr,componentName:"notes"},{name:"WordPad",icon:Wv,componentName:"wordpad"},{name:"GameCache",icon:Hp,componentName:"backlogger"},{name:"Network Neighborhood",icon:Yp,componentName:"network"},{name:"WinPopup",icon:Ss,componentName:"messenger"},{name:"Task Manager",icon:xc,componentName:"task_manager"},{name:"Control Panel",icon:qo,componentName:"control_panel"},{name:"Calculator",icon:Vp,componentName:"calculator"},{name:"Minesweeper",icon:Kp,componentName:"minesweeper"},{name:"Solitaire",icon:Qp,componentName:"solitaire"},{name:"Snake",icon:qp,componentName:"snake"},{name:"FreeCell",icon:Gp,componentName:"freecell"},{name:"Clock",icon:_a,componentName:"clock"},{name:"Paint",icon:Fa,componentName:"paint"}],H4=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),[a,u]=g.useState(!1),{changePriority:d,processes:p,addProcess:h,handleProceessLocationChange:m}=Dn(),{minimized:y,minimize:w,restore:b,sssStyle:T}=Kt(),{username:E,logout:C}=Kn(),$=gc(),k=E||"user",j=y4(k),S=on(),R=g.useRef([]),M=()=>{const B=p.filter(N=>N.uuid&&!y.includes(N.uuid));B.length?(R.current=B.map(N=>N.uuid),B.forEach(N=>N.uuid&&w(N.uuid))):(R.current.forEach(N=>b(N)),R.current=[]),Xo()},K=B=>{const N=of.get(B);N&&(h({name:N.name,icon:N.icon,componentName:B}),Xo())},X=B=>{if(!B)return;const N=B.getBoundingClientRect().top,z=window.innerHeight-Wa-N-8;B.style.maxHeight=`${Math.max(140,z)}px`,B.style.overflowY="auto"},ee=di(),[ie,me]=g.useState(null),[fe,he]=g.useState(!1);g.useEffect(()=>{if(!ie)return;const B=()=>me(null);return document.addEventListener("click",B),()=>document.removeEventListener("click",B)},[ie]);const le=()=>{p.forEach((B,N)=>{B.uuid&&(b(B.uuid),m(B.uuid,{x:340+N*34,y:230+N*34}))}),me(null)},_=()=>{const B=p.length;if(B){const N=Math.ceil(Math.sqrt(B)),z=Math.ceil(B/N),J=window.innerWidth/N,ae=(window.innerHeight-Wa)/z;p.forEach((ue,ge)=>{if(!ue.uuid)return;const pe=ge%N,xe=Math.floor(ge/N);b(ue.uuid),m(ue.uuid,{x:Math.round(pe*J+J/2),y:Math.round(xe*ae+ae/2)})})}me(null)},D=()=>{p.forEach(B=>B.uuid&&w(B.uuid)),me(null)};g.useEffect(()=>{if(!e)return;const B=()=>{n(!1),i(!1),u(!1)},N=z=>z.key==="Escape"&&B();return document.addEventListener("click",B),document.addEventListener("keydown",N),()=>{document.removeEventListener("click",B),document.removeEventListener("keydown",N)}},[e]);const I=B=>{h(B),n(!1),i(!1)},H=B=>{const N=B.uuid;N&&(y.includes(N)?(b(N),d(B,0)):B.priority===0?w(N):d(B,0))},W=S.autoHideTaskbar&&!fe&&!e&&!o&&!a&&!ie;return l.jsxs(z4,{$hidden:W,onMouseEnter:()=>he(!0),onMouseLeave:()=>he(!1),onClick:B=>B.stopPropagation(),onContextMenu:B=>{B.preventDefault(),B.stopPropagation(),me({x:B.clientX,y:B.clientY})},children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(Ue,{onClick:()=>{Xo(),n(B=>!B),i(!1),u(!1)},active:e,style:{fontWeight:"bold",height:30,display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:sr,alt:"",style:{height:20}}),"Start"]}),e&&l.jsxs("div",{style:{position:"absolute",bottom:"calc(100% + 3px)",left:0,display:"flex",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)"},children:[l.jsx("div",{style:{width:30,background:T?"linear-gradient(180deg, #ff2d95 0%, #6a1b9a 55%, #00e5d0 100%)":"linear-gradient(180deg, #00007a 0%, #000033 100%)",borderTop:"2px solid #dfdfdf",borderLeft:"2px solid #dfdfdf",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsxs("div",{style:{writingMode:"vertical-rl",transform:"rotate(180deg)",whiteSpace:"nowrap",color:"#fff",padding:"12px 0",display:"flex",alignItems:"center",gap:4},children:[l.jsx("span",{style:{fontWeight:400,letterSpacing:1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"Vortex"}),l.jsx("span",{style:{fontWeight:"bold",fontSize:20,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"98"})]})}),l.jsxs(hs,{style:{width:200,position:"static"},children:[l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[l.jsxs(mt,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:jt,style:{width:20}})," Programs"]}),l.jsx("span",{children:"▸"})]}),o&&l.jsx(hs,{ref:X,style:{position:"absolute",left:"100%",top:0,width:220},children:W4.filter(B=>!$.has(B.componentName)).map(B=>l.jsxs(mt,{style:{cursor:"pointer",justifyContent:"space-between"},onClick:()=>I(B),onContextMenu:N=>{N.preventDefault(),N.stopPropagation(),x4(k,B.componentName)},title:"Right-click to pin/unpin to Quick Launch",children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:B.icon,style:{width:20}})," ",B.name]}),t1(k,B.componentName)&&l.jsx("span",{style:{color:"#000080"},children:"📌"})]},B.componentName))})]}),l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>I({name:"Explorer",icon:jt,componentName:"explorer",argv:["/home/user/Documents"]}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:jt,style:{width:20}})," Documents"]})}),l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[l.jsxs(mt,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:qo,style:{width:20}})," Settings"]}),l.jsx("span",{children:"▸"})]}),a&&l.jsxs(hs,{ref:X,style:{position:"absolute",left:"100%",top:0,width:220},children:[l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>I({name:"Control Panel",icon:qo,componentName:"control_panel"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:qo,style:{width:20}})," Control Panel"]})}),l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>I({name:"Add/Remove Programs",icon:qo,componentName:"add_remove"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:qo,style:{width:20}})," Add/Remove Programs"]})})]})]}),l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>I({name:"Find Files",icon:rp,componentName:"find"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:rp,style:{width:20}})," Find"]})}),l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>I({name:"Help",icon:op,componentName:"help"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:op,style:{width:20}})," Help"]})}),l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>{n(!1),o1()},children:"Run..."}),l.jsx(Ya,{}),l.jsxs(mt,{style:{cursor:"pointer"},onClick:()=>{n(!1),C()},children:["Log Off ",E,"..."]}),l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>ee("/shutdown"),children:"Shut Down..."})]})]})]}),S.showQuickLaunch&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2,paddingLeft:4,borderLeft:"1px solid #808080",borderRight:"1px solid #808080",marginLeft:2,marginRight:2},children:[l.jsx(Qx,{text:"Show Desktop",children:l.jsx(F4,{onClick:M,"aria-label":"Show Desktop",children:l.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1.5",y:"2",width:"13",height:"9",rx:"0.5",fill:"#000080",stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"5.5",y:"11",width:"5",height:"1.5",fill:"#808080"}),l.jsx("rect",{x:"3.5",y:"12.5",width:"9",height:"1.5",fill:"#404040"})]})})}),j.filter(B=>of.has(B)&&!$.has(B)).map(B=>{const N=of.get(B);return l.jsx(Qx,{text:N.name,children:l.jsx(B4,{onClick:()=>K(B),onContextMenu:z=>{z.preventDefault(),z.stopPropagation(),n1(k,B)},"aria-label":N.name,title:N.name,children:l.jsx("img",{src:N.icon,style:{width:18,height:18}})})},B)})]}),l.jsx("div",{style:{display:"flex",flex:1,gap:3,overflow:"hidden",marginLeft:2},children:p.map(B=>{const N=B.priority===0&&!y.includes(B.uuid??"");return l.jsx(O4,{process:B,minimized:y.includes(B.uuid??""),children:l.jsxs(_4,{$pressed:N,onClick:()=>H(B),children:[l.jsx("img",{src:B.icon,style:{width:18,height:18,flexShrink:0}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:B.name})]})},B.uuid)})}),l.jsx(M4,{username:E}),ie&&l.jsx(ho,{x:ie.x,y:ie.y,onClose:()=>me(null),items:[{label:"Cascade Windows",onClick:le},{label:"Tile Windows",onClick:_},{label:"Minimize All Windows",onClick:D},{separator:!0},{label:"Show the Desktop",onClick:M},{label:"Task Manager",icon:xc,onClick:()=>K("task_manager")},{separator:!0},{label:"Properties",onClick:()=>K("control_panel")}]})]})};let cp=[];const up=new Set,U4=()=>up.forEach(e=>e());function s1(e){cp=[...cp,{kind:e.kind??"app",app:e.app,pid:e.pid,message:e.message,stack:e.stack,ts:Date.now()}].slice(-30),U4()}function qx(){return cp}function V4(e){return up.add(e),()=>up.delete(e)}class K4 extends Y.Component{constructor(){super(...arguments);Ne(this,"state",{error:null,details:!1,stack:""})}static getDerivedStateFromError(o){return{error:o}}componentDidCatch(o,i){const a=`${o.stack??o.message}

Component stack:${i.componentStack??""}`;this.setState({stack:a}),s1({app:this.props.appName,pid:this.props.pid,message:o.message,stack:a})}render(){var i;if(!this.state.error)return this.props.children;const{appName:o}=this.props;return l.jsx("div",{style:{padding:16,background:"#c0c0c0",height:"100%",boxSizing:"border-box",overflow:"auto",color:"#000"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",maxWidth:380,margin:"0 auto"},children:[l.jsx("div",{style:{background:"linear-gradient(90deg, #000080, #1084d0)",color:"#fff",fontWeight:"bold",padding:"2px 4px",fontSize:12},children:o}),l.jsxs("div",{style:{padding:14,fontSize:12,lineHeight:1.5},children:[l.jsx("p",{style:{margin:0},children:"This program has performed an illegal operation and will be shut down."}),l.jsx("p",{style:{margin:"8px 0 0"},children:"If the problem persists, contact the program vendor."}),this.state.details&&l.jsxs("pre",{style:{marginTop:12,padding:8,background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080",fontSize:10,fontFamily:"monospace",whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:160,overflow:"auto"},children:["DR. WATSON — application fault",`
`,"App: ",o,"  PID: ",((i=this.props.pid)==null?void 0:i.slice(0,8))??"—",`
`,this.state.error.message,`

`,this.state.stack]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:16},children:[l.jsx(sf,{onClick:this.props.onClose,children:"Close"}),l.jsx(sf,{onClick:()=>this.setState({error:null,details:!1}),children:"Ignore"}),l.jsxs(sf,{onClick:()=>this.setState(a=>({details:!a.details})),children:["Details ",this.state.details?"<<":">>"]})]})]})]})})}}const sf=({onClick:e,children:n})=>l.jsx("button",{onClick:e,style:{minWidth:75,height:23,fontSize:12,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",cursor:"pointer"},onMouseDown:o=>{o.currentTarget.style.borderColor="#808080 #ffffff #ffffff #808080"},onMouseUp:o=>{o.currentTarget.style.borderColor="#ffffff #808080 #808080 #ffffff"},children:n}),fs=40,Q4=[{key:"n",dx:0,dy:-1,cursor:"ns-resize",box:{top:-3,left:10,right:10,height:7}},{key:"s",dx:0,dy:1,cursor:"ns-resize",box:{bottom:-3,left:10,right:10,height:7}},{key:"w",dx:-1,dy:0,cursor:"ew-resize",box:{left:-3,top:10,bottom:10,width:7}},{key:"e",dx:1,dy:0,cursor:"ew-resize",box:{right:-3,top:10,bottom:10,width:7}},{key:"nw",dx:-1,dy:-1,cursor:"nwse-resize",box:{left:-3,top:-3,width:14,height:14}},{key:"ne",dx:1,dy:-1,cursor:"nesw-resize",box:{right:-3,top:-3,width:14,height:14}},{key:"sw",dx:-1,dy:1,cursor:"nesw-resize",box:{left:-3,bottom:-3,width:14,height:14}},{key:"se",dx:1,dy:1,cursor:"nwse-resize",box:{right:-3,bottom:-3,width:14,height:14}}],na=22;function q4(e,n){const o=window.innerWidth,i=window.innerHeight-fs,a=e<=na,u=e>=o-na,d=n<=na,p=n>=i-na;return d&&a?{x:0,y:0,w:o/2,h:i/2}:d&&u?{x:o/2,y:0,w:o/2,h:i/2}:p&&a?{x:0,y:i/2,w:o/2,h:i/2}:p&&u?{x:o/2,y:i/2,w:o/2,h:i/2}:a?{x:0,y:0,w:o/2,h:i}:u?{x:o/2,y:0,w:o/2,h:i}:d?{x:0,y:0,w:o,h:i}:null}const G4=({process:e})=>{var ge,pe,xe,q;const{changePriority:n,closeProcess:o,handleProceessLocationChange:i}=Dn(),{changeCursor:a,minimized:u,minimize:d}=Kt(),p=on(),[h,m]=g.useState({x:((ge=e.location)==null?void 0:ge.x)??0,y:((pe=e.location)==null?void 0:pe.y)??0}),[y,w]=g.useState(!1),[b,T]=g.useState(null),[E,C]=g.useState(!1),[$,k]=g.useState(!1),[j,S]=g.useState(!1),[R,M]=g.useState(null),K=g.useRef(null);g.useEffect(()=>{if(!j)return;const A=()=>S(!1);return document.addEventListener("click",A),()=>document.removeEventListener("click",A)},[j]);const X=g.useRef(null),ee=g.useRef(null),ie=g.useRef(null),me=e.priority===0,fe=!!e.uuid&&u.includes(e.uuid);g.useEffect(()=>{var A,V;y||m({x:((A=e.location)==null?void 0:A.x)??0,y:((V=e.location)==null?void 0:V.y)??0})},[(xe=e.location)==null?void 0:xe.x,(q=e.location)==null?void 0:q.y]),g.useEffect(()=>(y?(a("Grabbing.cur"),document.addEventListener("mousemove",le),document.addEventListener("mouseup",_)):(a("arrow.cur"),document.removeEventListener("mousemove",le),document.removeEventListener("mouseup",_)),()=>{document.removeEventListener("mousemove",le),document.removeEventListener("mouseup",_)}),[y]);const he=A=>{var te;if(E)return;e.uuid&&n(e,0);const V=(te=X.current)==null?void 0:te.getBoundingClientRect();V&&(ee.current={mouseX:A.clientX,mouseY:A.clientY,left:V.left,top:V.top,w:V.width,h:V.height},T({x:V.left,y:V.top,w:V.width,h:V.height}),w(!0))},le=A=>{if(!ee.current)return;const V=p.windowSnap?q4(A.clientX,A.clientY):null;if(ie.current=V,V){T(V);return}const te=A.clientX-ee.current.mouseX,ne=A.clientY-ee.current.mouseY,ce=ee.current.w,je=ee.current.h;if(p.liveDrag&&e.uuid){let Re=ee.current.left+te,ze=ee.current.top+ne;Re=Math.min(Math.max(Re,80-ce),window.innerWidth-80),ze=Math.min(Math.max(ze,0),window.innerHeight-fs-28),m({x:Math.round(Re+ce/2),y:Math.round(ze+je/2)}),T(null)}else T({x:ee.current.left+te,y:ee.current.top+ne,w:ce,h:je})},_=A=>{w(!1);const V=ee.current,te=ie.current;if(te&&e.uuid){C(!1),M({w:te.w,h:te.h});const ne={x:Math.round(te.x+te.w/2),y:Math.round(te.y+te.h/2)};m(ne),i(e.uuid,ne)}else if(V&&e.uuid){let ne=V.left+(A.clientX-V.mouseX),ce=V.top+(A.clientY-V.mouseY);ne=Math.min(Math.max(ne,80-V.w),window.innerWidth-80),ce=Math.min(Math.max(ce,0),window.innerHeight-fs-28);const je={x:Math.round(ne+V.w/2),y:Math.round(ce+V.h/2)};m(je),i(e.uuid,je)}T(null),ie.current=null,ee.current=null},D=()=>{d8(),C(A=>!A)},I=()=>{if(u8(),!!e.uuid){if(E){d(e.uuid);return}k(!0),setTimeout(()=>{e.uuid&&d(e.uuid),k(!1)},150)}},H=A=>A.stopPropagation(),W=240,B=150,N=A=>{const V=K.current;if(!V)return;const te=A.clientX-V.mouseX,ne=A.clientY-V.mouseY;let ce=V.w,je=V.h,Re=V.left,ze=V.top;V.dx===1&&(ce=Math.max(W,V.w+te)),V.dx===-1&&(ce=Math.max(W,V.w-te),Re=V.left+(V.w-ce)),V.dy===1&&(je=Math.max(B,V.h+ne)),V.dy===-1&&(je=Math.max(B,V.h-ne),ze=V.top+(V.h-je)),M({w:ce,h:je}),m({x:Re+ce/2,y:ze+je/2})},z=()=>{K.current=null,document.removeEventListener("mousemove",N),document.removeEventListener("mouseup",z)},J=(A,V)=>te=>{var ce;if(E)return;te.preventDefault(),te.stopPropagation();const ne=(ce=X.current)==null?void 0:ce.getBoundingClientRect();ne&&(K.current={mouseX:te.clientX,mouseY:te.clientY,w:ne.width,h:ne.height,left:ne.left,top:ne.top,dx:A,dy:V},document.addEventListener("mousemove",N),document.addEventListener("mouseup",z))},ae=E?void 0:$?"winMinimize 150ms ease-in forwards":"winOpen 140ms ease-out",ue=E?{position:"fixed",top:0,left:0,width:"100vw",height:`calc(100vh - ${fs}px)`,transform:"none",zIndex:me?9999:e.priority+1,userSelect:"none",display:fe?"none":"flex",flexDirection:"column"}:{position:"absolute",top:`${h.y}px`,left:`${h.x}px`,transform:"translate(-50%, -50%)",zIndex:me?9999:e.priority+1,userSelect:"none",display:fe?"none":R?"flex":void 0,flexDirection:"column",animation:R?void 0:ae,minWidth:240,minHeight:150,maxWidth:"100vw",maxHeight:`calc(100vh - ${fs}px)`,...R?{width:R.w,height:R.h}:{}};return l.jsxs(l.Fragment,{children:[l.jsxs(ai,{ref:X,onClick:()=>n(e,0),resizable:!E,className:"window",style:ue,children:[l.jsxs(li,{onMouseDown:he,onDoubleClick:D,className:"window-title",style:{display:"flex",alignItems:"center",justifyContent:"space-between",...Rs(me)},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",overflow:"hidden",position:"relative"},children:[l.jsx("img",{src:e.icon,onMouseDown:A=>A.stopPropagation(),onClick:A=>{A.stopPropagation(),S(V=>!V)},onDoubleClick:A=>{A.stopPropagation(),e.uuid&&o(e.uuid)},style:{width:18,height:18,marginRight:4,cursor:"pointer"}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),j&&l.jsxs(hs,{style:{position:"absolute",left:0,top:"100%",width:150,zIndex:100002},onMouseDown:A=>A.stopPropagation(),children:[l.jsx(mt,{disabled:!E,style:{cursor:E?"pointer":"default"},onClick:()=>C(!1),children:"Restore"}),l.jsx(mt,{disabled:!0,children:"Move"}),l.jsx(mt,{disabled:!0,children:"Size"}),l.jsx(mt,{style:{cursor:"pointer"},onClick:I,children:"Minimize"}),l.jsx(mt,{disabled:E,style:{cursor:E?"default":"pointer"},onClick:()=>C(!0),children:"Maximize"}),l.jsx(Ya,{}),l.jsx(mt,{style:{cursor:"pointer"},onClick:()=>e.uuid&&o(e.uuid),children:"Close"})]})]}),l.jsxs("div",{style:{display:"flex",gap:2},onMouseDown:H,onClick:H,children:[l.jsx(lf,{label:"Minimize",onClick:I,glyph:l.jsx("span",{style:{display:"block",width:8,height:2,background:"#000",marginTop:5}})}),l.jsx(lf,{label:"Maximize",onClick:D,glyph:l.jsx("span",{style:{display:"block",width:9,height:8,border:"1px solid #000",borderTopWidth:2}})}),l.jsx(lf,{label:"Close",onClick:()=>e.uuid&&o(e.uuid),glyph:l.jsx("span",{style:{fontWeight:"bold",fontSize:11,lineHeight:"10px"},children:"✕"})})]})]}),e.component?l.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",...E||R?{flex:1,minHeight:0,overflow:"auto"}:{}},children:l.jsx(T2,{pid:e.uuid??null,children:l.jsx(K4,{appName:e.name,pid:e.uuid??null,onClose:()=>e.uuid&&o(e.uuid),children:l.jsx(g.Suspense,{fallback:l.jsxs("div",{style:{padding:24,textAlign:"center",color:"#000"},children:["Loading ",e.name,"…"]}),children:Y.createElement(e.component)})})})}):"",!E&&Q4.map(A=>l.jsx("div",{onMouseDown:J(A.dx,A.dy),style:{position:"absolute",zIndex:20,cursor:A.cursor,...A.box}},A.key))]},e.uuid),b&&Ut.createPortal(l.jsx("div",{style:{position:"fixed",left:b.x,top:b.y,width:b.w,height:b.h,border:"2px dotted #fff",mixBlendMode:"difference",pointerEvents:"none",zIndex:100001}}),document.body)]})},lf=({glyph:e,onClick:n,label:o})=>l.jsx(Ue,{"aria-label":o,onClick:n,style:{width:20,height:18,minWidth:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e}),Y4=()=>{const{processes:e}=Dn();return l.jsx(l.Fragment,{children:e.map(n=>l.jsx(G4,{process:n},n.uuid))})},X4="/clouds.jpg",J4=L.div`
    position: fixed;
    inset: 0;
    background: url(${X4}) center / cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`,Gx=L.label`
    display: grid;
    grid-template-columns: 86px 1fr;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 13px;
`,Z4=()=>{const{login:e,register:n}=Kn(),[o,i]=g.useState("login"),[a,u]=g.useState(""),[d,p]=g.useState(""),[h,m]=g.useState(null),[y,w]=g.useState(!1),b=async E=>{if(E.preventDefault(),!(y||!a.trim()||!d)){w(!0),m(null);try{o==="login"?await e(a.trim(),d):await n(a.trim(),d)}catch(C){m(C instanceof Error?C.message:"Sign in failed."),w(!1)}}},T=()=>{i(E=>E==="login"?"register":"login"),m(null)};return l.jsx(J4,{children:l.jsxs(ai,{style:{width:360},children:[l.jsxs(li,{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:sr,alt:"",style:{width:18,height:18}}),l.jsx("span",{children:o==="login"?"Enter Network Password":"New VortexOS Account"})]}),l.jsx(Br,{children:l.jsxs("form",{onSubmit:b,children:[l.jsx("p",{style:{marginTop:0,marginBottom:14,fontSize:13},children:o==="login"?"Type a user name and password to log on to VortexOS.":"Choose a user name and password to create your account."}),l.jsxs(Gx,{children:["User name:",l.jsx(lr,{value:a,onChange:E=>u(E.target.value),disabled:y,autoFocus:!0})]}),l.jsxs(Gx,{children:["Password:",l.jsx(lr,{type:"password",value:d,onChange:E=>p(E.target.value),disabled:y})]}),h&&l.jsx("p",{style:{color:"#aa0000",fontSize:12,margin:"4px 0 10px"},children:h}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:6},children:[l.jsx(Ue,{type:"submit",primary:!0,disabled:y||!a.trim()||!d,children:y?"Please wait…":o==="login"?"OK":"Create"}),l.jsx(Ue,{type:"button",onClick:T,disabled:y,children:o==="login"?"New user…":"Cancel"})]})]})})]})})},e5=()=>{const{alert:e}=Ds(),n=g.useRef(0);return g.useEffect(()=>(n.current=tp().length,Wp(()=>{const o=tp();for(let i=n.current;i<o.length;i++){const a=o[i];a.mine||(Uw()==="classic"?e({title:`Message from ${a.from}`,message:a.body,type:"info"}):m$({title:`Message from ${a.from}`,body:a.body,type:"info",icon:Ss,action:{kind:"open-app",exec:"messenger",name:"WinPopup",icon:Ss}}))}n.current=o.length})),[e]),null},t5=40,n5=6e3,r5=vt`
    from { transform: translateX(120%); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
`,o5=L.div`
    position: fixed;
    right: 8px;
    bottom: ${t5+8}px;
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
    z-index: 100000;
    pointer-events: none;
`,i5=L.div`
    width: 260px;
    background: #ffffe1;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    padding: 0;
    font-size: 12px;
    pointer-events: auto;
    animation: ${r5} 0.18s ease-out;
`,s5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #000080, #1084d0);
    color: #fff;
    font-weight: bold;
    padding: 2px 4px;
`,l5={info:"#000080",warning:"#806000",error:"#800000"},a5=({toast:e,onOpenApp:n})=>{g.useEffect(()=>{Np();const a=setTimeout(()=>Nd(e.id),n5);return()=>clearTimeout(a)},[e.id]);const o=!!e.action,i=()=>{var a;((a=e.action)==null?void 0:a.kind)==="open-app"&&n(e.action.exec,e.action.name,e.action.icon),Nd(e.id)};return l.jsxs(i5,{$type:e.type,children:[l.jsxs(s5,{style:{background:`linear-gradient(90deg, ${l5[e.type]??"#000080"}, #1084d0)`},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:e.icon??sr,alt:"",style:{width:14,height:14}}),e.title]}),l.jsx("button",{"aria-label":"Close notification",onClick:a=>{a.stopPropagation(),Nd(e.id)},style:{width:16,height:14,lineHeight:"10px",fontSize:11,border:"1px solid #fff",background:"#c0c0c0",color:"#000",cursor:"pointer"},children:"×"})]}),l.jsxs("div",{onClick:o?i:void 0,style:{padding:"8px 10px",cursor:o?"pointer":"default",color:"#000"},children:[e.body,o&&l.jsx("div",{style:{marginTop:6,color:"#000080",textDecoration:"underline",fontSize:11},children:"Click to open"})]})]})},c5=()=>{const{addProcess:e}=Dn();g.useSyncExternalStore(Bw,()=>Jg().map(i=>i.id).join(","));const n=Jg(),o=(i,a,u)=>{e({name:a,icon:u,componentName:i})};return l.jsx(o5,{children:n.map(i=>l.jsx(a5,{toast:i,onOpenApp:o},i.id))})},u5=vt`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`,d5=L.span`
    animation: ${u5} 1s step-end infinite;
`,f5=L.div`
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
`,p5=L.div`
    background: #c0c0c0;
    color: #0000aa;
    display: inline-block;
    padding: 0 8px;
    font-weight: bold;
    margin: 0 auto 28px;
`,h5=()=>{const e=qD(),n=Wr(),o=di();return g.useEffect(()=>{e&&s1({kind:"kernel",app:"VortexOS Kernel",pid:null,message:e.message,stack:e.stack??""})},[e]),g.useEffect(()=>{if(!e)return;const i=()=>{n.clearPanic(),o("/"),window.location.assign("/")},a=u=>{if(u.preventDefault(),u.ctrlKey&&u.altKey&&(u.key==="Delete"||u.key==="Backspace")){i();return}e.recoverable?n.clearPanic():i()};return window.addEventListener("keydown",a,!0),()=>window.removeEventListener("keydown",a,!0)},[e,n,o]),e?l.jsxs(f5,{onClick:()=>n.clearPanic(),children:[l.jsx("div",{style:{textAlign:"center"},children:l.jsx(p5,{children:"VortexOS"})}),l.jsxs("p",{style:{margin:"0 0 18px"},children:["A fatal exception ",e.code," has occurred at ",e.address,". The current application will be terminated."]}),l.jsx("p",{style:{margin:"0 0 6px"},children:"*  Press any key to terminate the current application."}),l.jsxs("p",{style:{margin:"0 0 28px"},children:["*  Press CTRL+ALT+DEL again to restart your computer. You will",l.jsx("br",{}),"   lose any unsaved information in all applications."]}),e.syscall&&l.jsxs("p",{style:{margin:"0 0 28px",opacity:.7},children:["Faulting syscall: ",e.syscall," — ",e.message]}),l.jsxs("p",{style:{textAlign:"center",margin:0},children:["Press any key to continue ",l.jsx(d5,{children:"_"})]})]}):null};class m5 extends Y.Component{constructor(){super(...arguments);Ne(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(o,i){this.props.onFatal(o,`${o.stack??o.message}
${i.componentStack??""}`)}render(){return this.state.dead?null:this.props.children}}const g5=({children:e})=>{const n=Wr();return l.jsx(m5,{onFatal:(o,i)=>n.panic({message:o.message,stack:i,recoverable:!1}),children:e})};function Yx(e,n){const o=e.toLowerCase(),i=n.toLowerCase();if(o==="")return 1;let a=0,u=0,d=-2;for(let p=0;p<i.length&&u<o.length;p++)i[p]===o[u]&&(a+=1,p===d+1&&(a+=3),(p===0||i[p-1]===" "||i[p-1]==="/"||i[p-1]==="-"||i[p-1]==="_")&&(a+=5),p===0&&(a+=2),d=p,u++);return u<o.length?null:(a-=i.length*.05,i.startsWith(o)&&(a+=4),i===o&&(a+=10),a)}function x5(e,n){if(n.trim()==="")return[...e].sort((i,a)=>i.name.localeCompare(a.name));const o=[];for(const i of e){const a=Math.max(Yx(n,i.name)??-1/0,(Yx(n,i.exec)??-1/0)-2);a>-1/0&&o.push({app:i,score:a})}return o.sort((i,a)=>a.score-i.score||i.app.name.localeCompare(a.app.name)),o.map(i=>i.app)}const y5=L.div`
    position: fixed;
    inset: 0;
    z-index: 1500000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 14vh;
    background: rgba(0, 0, 0, 0.25);
`,w5=L.div`
    width: 460px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
`,v5=L.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #808080;
`,b5=L.input`
    flex: 1;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 15px;
    padding: 4px 6px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    background: #fff;
    outline: none;
`,k5=L.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    background: ${e=>e.$sel?"#000080":"transparent"};
    color: ${e=>e.$sel?"#fff":"#000"};
`,S5=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(""),[a,u]=g.useState(0),d=g.useRef(null),{addProcess:p}=Dn(),{logout:h}=Kn(),m=di(),y=gc();g.useEffect(()=>{const $=k=>{k.ctrlKey&&(k.code==="Space"||k.key===" ")&&(k.preventDefault(),n(j=>!j))};return window.addEventListener("keydown",$),()=>window.removeEventListener("keydown",$)},[]),g.useEffect(()=>{e&&(i(""),u(0),setTimeout(()=>{var $;return($=d.current)==null?void 0:$.focus()},0))},[e]);const w=($,k,j)=>p({name:k,icon:j,componentName:$}),b=g.useMemo(()=>{const $=Mr.filter(S=>!y.has(S.exec)).map(S=>({exec:S.exec,name:S.name,icon:S.icon,kind:"app",run:()=>w(S.exec,S.name,S.icon)})),k=[{exec:"run",name:"Run…",icon:sr,kind:"action",run:()=>o1()},{exec:"shutdown",name:"Shut Down…",icon:sr,kind:"action",run:()=>m("/shutdown")},{exec:"logoff",name:"Log Off",icon:sr,kind:"action",run:()=>h()}];return x5([...$,...k],o).slice(0,8)},[o,y]);if(g.useEffect(()=>u(0),[o]),!e)return null;const T=()=>n(!1),E=$=>{$&&(Xo(),T(),$.run())},C=$=>{if($.key==="Escape")return T();$.key==="ArrowDown"?($.preventDefault(),u(k=>Math.min(b.length-1,k+1))):$.key==="ArrowUp"?($.preventDefault(),u(k=>Math.max(0,k-1))):$.key==="Enter"&&($.preventDefault(),E(b[a]))};return Ut.createPortal(l.jsx(y5,{onMouseDown:T,children:l.jsxs(w5,{onMouseDown:$=>$.stopPropagation(),children:[l.jsxs(v5,{children:[l.jsx("img",{src:sr,alt:"",style:{width:22,height:22}}),l.jsx(b5,{ref:d,value:o,placeholder:"Search apps and actions…",onChange:$=>i($.target.value),onKeyDown:C})]}),l.jsx("div",{style:{maxHeight:320,overflowY:"auto"},children:b.length===0?l.jsx("div",{style:{padding:12,color:"#555",fontSize:13},children:"No matches"}):b.map(($,k)=>l.jsxs(k5,{$sel:k===a,onMouseEnter:()=>u(k),onClick:()=>E($),children:[l.jsx("img",{src:$.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1},children:$.name}),l.jsx("span",{style:{fontSize:11,opacity:.6},children:$.kind==="action"?"Action":"App"})]},`${$.kind}:${$.exec}`))}),l.jsxs("div",{style:{borderTop:"1px solid #808080",padding:"3px 8px",fontSize:11,color:"#444",display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"↑↓ navigate · Enter run · Esc close"}),l.jsx("span",{children:"Ctrl+Space"})]})]})}),document.body)},dp=new Map;for(const e of Mr)dp.set(e.exec.toLowerCase(),e),dp.set(e.name.toLowerCase(),e);const j5=()=>{const e=v4(),n=rn(),{alert:o}=Ds(),[i,a]=g.useState(""),u=g.useRef(null);if(g.useEffect(()=>{e&&(a(ap()[0]??""),setTimeout(()=>{var p;return(p=u.current)==null?void 0:p.focus()},0))},[e]),!e)return null;const d=async()=>{var b;const p=i.trim();if(!p)return;k4(p),ta();const h=dp.get(p.toLowerCase());if(h){n.spawn(h.exec);return}if(p.startsWith("/")||p.startsWith("~")){const T=p.startsWith("~")?p.replace(/^~/,"/home/user"):p;await Fp(n,T)||o({title:"Run",message:`Cannot find '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"});return}const y=await new ev(n).run(p),w=(b=y.output)==null?void 0:b.trim();y.code!==0?o({title:"Run",message:w||`Cannot find the file '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"}):w&&o({title:`Run: ${p}`,message:w,type:"info"})};return Ut.createPortal(l.jsx("div",{style:{position:"fixed",inset:0,zIndex:14e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.15)"},onMouseDown:ta,children:l.jsxs(ai,{style:{width:380},onMouseDown:p=>p.stopPropagation(),children:[l.jsxs(li,{style:{display:"flex",alignItems:"center",gap:6,...Rs(!0)},children:[l.jsx("img",{src:sr,alt:"",style:{width:16,height:16}}),"Run"]}),l.jsxs(Br,{children:[l.jsxs("div",{style:{display:"flex",gap:10,marginBottom:12},children:[l.jsx("img",{src:sr,alt:"",style:{width:32,height:32}}),l.jsx("p",{style:{margin:0,fontSize:12,lineHeight:1.4},children:"Type the name of a program, folder, document, or command, and VortexOS will open it for you."})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[l.jsx("label",{style:{fontSize:12},children:"Open:"}),l.jsx("input",{ref:u,list:"run-mru",value:i,onChange:p=>a(p.target.value),onKeyDown:p=>{p.key==="Enter"&&d(),p.key==="Escape"&&ta()},style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:"3px 5px",border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff"}}),l.jsx("datalist",{id:"run-mru",children:[...ap(),...$v()].map(p=>l.jsx("option",{value:p},p))})]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[l.jsx(Ue,{onClick:d,style:{minWidth:75},children:"OK"}),l.jsx(Ue,{onClick:ta,style:{minWidth:75},children:"Cancel"})]})]})]})}),document.body)},C5=()=>{var m;const{processes:e,changePriority:n}=Dn(),{restore:o}=Kt(),[i,a]=g.useState(!1),[u,d]=g.useState(0),p=g.useRef([]),h=g.useRef(0);return g.useEffect(()=>{h.current=u},[u]),g.useEffect(()=>{const y=b=>{if(b.key!=="Tab"||!b.altKey){b.key==="Escape"&&i&&a(!1);return}const T=e.filter(E=>E.uuid);if(T.length!==0)if(b.preventDefault(),i){const E=p.current.length;d(C=>b.shiftKey?(C-1+E)%E:(C+1)%E)}else{const E=[...T].sort(($,k)=>($.priority??0)-(k.priority??0));p.current=E,a(!0);const C=b.shiftKey?E.length-1:Math.min(1,E.length-1);d(C)}},w=b=>{if((b.key==="Alt"||!b.altKey)&&i){const T=p.current[h.current];T!=null&&T.uuid&&(o(T.uuid),n(T,0)),a(!1)}};return window.addEventListener("keydown",y),window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",y),window.removeEventListener("keyup",w)}},[e,i,n,o]),!i||p.current.length===0?null:l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e6,pointerEvents:"none"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#dfdfdf #000 #000 #dfdfdf",boxShadow:"3px 3px 0 rgba(0,0,0,0.4)",padding:16,maxWidth:"80vw"},children:[l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",maxWidth:560},children:p.current.map((y,w)=>l.jsx("div",{style:{width:72,height:72,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:4,border:w===u?"2px solid #000080":"2px solid transparent",background:w===u?"#000080":"transparent"},children:l.jsx("img",{src:y.icon,alt:"",style:{width:32,height:32,objectFit:"contain"}})},y.uuid))}),l.jsx("p",{style:{textAlign:"center",margin:"10px 0 0",fontSize:13},children:(m=p.current[u])==null?void 0:m.name})]})})},E5=()=>{const e=yc(),{flashBusy:n}=Kt(),o=g.useRef(new Set(e.map(a=>a.pid))),i=g.useRef(!1);return g.useEffect(()=>{const a=new Set(e.map(u=>u.pid));if(i.current){let u=!1,d=!1;a.forEach(p=>{o.current.has(p)||(u=!0)}),o.current.forEach(p=>{a.has(p)||(d=!0)}),u&&(a8(),n()),d&&c8()}i.current=!0,o.current=a},[e,n]),null},$5=()=>{const{type:e,wait:n}=_w(),[o,i]=g.useState(!1),a=g.useRef(Date.now()),u=g.useRef(null);return g.useEffect(()=>{const d=()=>{a.current=Date.now(),i(m=>m&&!1)};window.addEventListener("mousemove",d),window.addEventListener("mousedown",d),window.addEventListener("keydown",d),window.addEventListener("wheel",d);const p=setInterval(()=>{const m=zw();m.type!=="none"&&Date.now()-a.current>m.wait*6e4&&i(!0)},1e3),h=Z8(()=>i(!0));return()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mousedown",d),window.removeEventListener("keydown",d),window.removeEventListener("wheel",d),clearInterval(p),h()}},[n]),g.useEffect(()=>{if(!o)return;const d=u.current;if(!d)return;const p=d.getContext("2d");if(!p)return;let h=d.width=window.innerWidth,m=d.height=window.innerHeight;const y=()=>{h=d.width=window.innerWidth,m=d.height=window.innerHeight};window.addEventListener("resize",y);let w=0;const b=T5(e,()=>h,()=>m),T=()=>{b(p),w=requestAnimationFrame(T)};return p.fillStyle="#000",p.fillRect(0,0,h,m),T(),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",y)}},[o,e]),!o||e==="none"?null:l.jsx("canvas",{ref:u,style:{position:"fixed",inset:0,zIndex:5e6,background:"#000",cursor:"none"}})};function T5(e,n,o){return e==="mystify"?R5(n,o):e==="pipes"?D5(n,o):A5(n,o)}function A5(e,n){const i=Array.from({length:500},()=>({x:jn(-1,1),y:jn(-1,1),z:jn(.05,1)}));return a=>{const u=e(),d=n(),p=u/2,h=d/2;a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(0,0,u,d),a.fillStyle="#fff";for(const m of i){m.z-=.006,m.z<=.02&&(m.x=jn(-1,1),m.y=jn(-1,1),m.z=1);const y=p+m.x/m.z*p,w=h+m.y/m.z*h;if(y<0||y>u||w<0||w>d)continue;const b=(1-m.z)*2.5;a.globalAlpha=Math.min(1,1-m.z+.2),a.beginPath(),a.arc(y,w,b,0,Math.PI*2),a.fill()}a.globalAlpha=1}}function R5(e,n){const o=e(),i=n(),a=d=>({hue:d,pts:Array.from({length:4},()=>({x:jn(0,o),y:jn(0,i),vx:jn(-3,3),vy:jn(-3,3)})),trail:[]}),u=[a(190),a(320)];return d=>{const p=e(),h=n();d.fillStyle="rgba(0,0,0,0.12)",d.fillRect(0,0,p,h);for(const m of u){for(const y of m.pts)y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>p)&&(y.vx*=-1),(y.y<0||y.y>h)&&(y.vy*=-1);m.trail.push(m.pts.map(y=>({x:y.x,y:y.y}))),m.trail.length>14&&m.trail.shift(),m.trail.forEach((y,w)=>{d.strokeStyle=`hsl(${m.hue}, 90%, ${20+w/m.trail.length*50}%)`,d.lineWidth=1.5,d.beginPath(),y.forEach((b,T)=>T===0?d.moveTo(b.x,b.y):d.lineTo(b.x,b.y)),d.closePath(),d.stroke()}),m.hue=(m.hue+.3)%360}}}function D5(e,n){let i=0,a=0,u=0,d=jn(0,360),p=Math.ceil(e()/26),h=Math.ceil(n()/26);i=Math.floor(p/2),a=Math.floor(h/2);let m=0;return y=>{p=Math.ceil(e()/26),h=Math.ceil(n()/26);for(let w=0;w<2;w++){const b=i*26+13,T=a*26+26/2;Math.random()<.15&&(u=(u+(Math.random()<.5?1:3))%4);const[E,C]=[[1,0],[0,1],[-1,0],[0,-1]][u];i+=E,a+=C,(i<0||i>=p||a<0||a>=h||++m>1400)&&(i=Math.floor(Math.random()*p),a=Math.floor(Math.random()*h),d=jn(0,360),m=0);const $=i*26+26/2,k=a*26+26/2;y.strokeStyle=`hsl(${d}, 80%, 55%)`,y.lineWidth=8,y.lineCap="round",y.beginPath(),y.moveTo(b,T),y.lineTo($,k),y.stroke(),y.fillStyle=`hsl(${d}, 80%, 65%)`,y.beginPath(),y.arc($,k,5,0,Math.PI*2),y.fill()}}}function jn(e,n){return e+Math.random()*(n-e)}const I5=L.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 60000;
    display: flex;
    align-items: center;
    justify-content: center;
`,P5=L.div`
    width: 540px;
    max-width: 94vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 5px 5px 18px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
`,N5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,M5=L.button`
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
`,L5=L.div`
    display: flex;
    height: 300px;
`,O5=L.div`
    width: 150px;
    flex-shrink: 0;
    background: linear-gradient(160deg, #1d0540 0%, #3a0a6b 45%, #00231f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 14px;
`,z5=L.div`
    text-align: center;
    color: #fff;
    font-weight: 800;
    font-size: 17px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #ff2d95, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,_5=L.div`
    flex: 1;
    padding: 18px 20px;
    background: #c0c0c0;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.55;
`,F5=L.h2`
    margin: 0 0 10px;
    font-size: 17px;
    color: #000080;
`,B5=L.button`
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
`,W5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid #808080;
    box-shadow: inset 0 1px 0 #ffffff;
`,H5=L.div`
    display: flex;
    gap: 6px;
`,U5=L.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({$on:e})=>e?"#000080":"#808080"};
    box-shadow: ${({$on:e})=>e?"0 0 5px #1084d0":"none"};
`,af=L.button`
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
`,V5=L.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,K5=()=>{const{username:e,isAuthenticated:n}=Kn(),{addProcess:o}=Dn(),[i,a]=g.useState(!1),[u,d]=g.useState(0),[p,h]=g.useState(!0),m=g.useRef(!1),y=(C,$,k)=>o({name:$,icon:k,componentName:C}),w=[{title:`Welcome${e?`, ${e}`:""}!`,body:l.jsxs("p",{children:["This is ",l.jsx("b",{children:"VortexOS"})," — a desktop operating system that runs in your browser, built on a"," ",l.jsx("b",{children:"real microkernel"}),": a virtual filesystem, processes, a command shell and a window manager. No emulator, no clone. Let's take a quick tour."]})},{title:"The Start menu & desktop",body:l.jsxs("p",{children:["Everything launches from the ",l.jsx("b",{children:"Start"})," button. Drag desktop icons anywhere, right-click the desktop for a menu, and use the taskbar tray for volume, the clock and notifications."]})},{title:"Command Palette",body:l.jsxs("p",{children:["Press ",l.jsx("b",{children:"Ctrl + Space"})," anywhere to open the Command Palette — a fuzzy launcher for every app and system action. It's the fastest way to get around VortexOS."]}),action:{label:"Try it now",run:()=>{try{window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space",ctrlKey:!0,bubbles:!0}))}catch{}}}},{title:"Apps & games",body:l.jsxs("p",{children:["Real productivity apps — ",l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"}),", ",l.jsx("b",{children:"WordPad"})," — save to the filesystem. And a full games suite — ",l.jsx("b",{children:"Solitaire"}),", ",l.jsx("b",{children:"Minesweeper"}),", ",l.jsx("b",{children:"FreeCell"}),","," ",l.jsx("b",{children:"Snake"})," — with high scores synced to your account."]}),action:{label:"Play Solitaire",run:()=>y("solitaire","Solitaire","/solitaire.svg")}},{title:"Connect & personalize",body:l.jsxs("p",{children:["Other people are here too. Browse their shared files in ",l.jsx("b",{children:"Network Neighborhood"})," and chat over"," ",l.jsx("b",{children:"WinPopup"}),". Make it yours in ",l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the"," ",l.jsx("b",{children:"Serious Sam Style"})," vaporwave toggle."]}),action:{label:"Open Control Panel",run:()=>y("control_panel","Control Panel","/controlpanel.png")}},{title:"You're all set",body:l.jsxs("p",{children:["That's the tour. You can re-open it any time from ",l.jsx("b",{children:"Help ▸ Welcome Tour"}),". Welcome aboard — enjoy VortexOS.",l.jsx("br",{}),l.jsx("br",{}),l.jsx("i",{children:"— a creation by Serious Sam"})]})}],b=u===w.length-1;g.useEffect(()=>{!n||m.current||(m.current=!0,Rv(e||"user")||setTimeout(()=>{d(0),a(!0)},700))},[n,e]),g.useEffect(()=>IR(()=>{d(0),a(!0)}),[]);const T=()=>{p&&ER(e||"user"),a(!1),va()&&setTimeout(()=>Iv(),350)};if(!i)return null;const E=w[u];return Ut.createPortal(l.jsx(I5,{onMouseDown:C=>C.target===C.currentTarget&&T(),children:l.jsxs(P5,{role:"dialog","aria-label":"Welcome to VortexOS",children:[l.jsxs(N5,{style:Rs(!0),children:[l.jsx("span",{children:"Welcome to VortexOS"}),l.jsx(M5,{onClick:T,title:"Close",children:"×"})]}),l.jsxs(L5,{children:[l.jsxs(O5,{children:[l.jsx(oi,{size:92,vapor:!0}),l.jsx(z5,{children:"VortexOS"})]}),l.jsxs(_5,{children:[l.jsx(F5,{children:E.title}),l.jsx("div",{children:E.body}),E.action&&l.jsx(B5,{onClick:E.action.run,children:E.action.label})]})]}),l.jsxs(W5,{children:[l.jsxs(V5,{children:[l.jsx("input",{type:"checkbox",checked:p,onChange:C=>h(C.target.checked)}),"Don't show this again"]}),l.jsx(H5,{children:w.map((C,$)=>l.jsx(U5,{$on:$===u},$))}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(af,{onClick:()=>d(C=>Math.max(0,C-1)),disabled:u===0,children:"‹ Back"}),b?l.jsx(af,{$primary:!0,onClick:T,children:"Finish"}):l.jsx(af,{$primary:!0,onClick:()=>d(C=>Math.min(w.length-1,C+1)),children:"Next ›"})]})]})]})}),document.body)},Q5=L.div`
    position: fixed;
    inset: 0;
    z-index: 59000;
    display: flex;
    align-items: center;
    justify-content: center;
`,q5=L.div`
    width: 440px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 4px 4px 14px rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
`,G5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,Y5=L.button`
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
`,X5=L.div`
    display: flex;
    gap: 14px;
    padding: 18px 16px;
`,J5=L.div`
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
`,Z5=L.div`
    flex: 1;
    background: #ffffff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 12px 14px;
    min-height: 96px;
    font-size: 13px;
    line-height: 1.55;
`,eI=L.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 6px;
`,tI=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 12px;
`,nI=L.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,Xx=L.button`
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
`,rI=()=>{const{username:e,isAuthenticated:n}=Kn(),[o,i]=g.useState(!1),[a,u]=g.useState(0),[d,p]=g.useState(va()),h=g.useRef(!1);g.useEffect(()=>{!n||h.current||va()&&Rv(e||"user")&&(h.current=!0,setTimeout(()=>{u(Math.floor(Date.now()/864e5)%Yo.length),p(!0),i(!0)},900))},[n,e]),g.useEffect(()=>PR(()=>{h.current=!0,p(va()),i(!0)}),[]);const m=y=>{p(y),AR(y)};return o?Ut.createPortal(l.jsx(Q5,{children:l.jsxs(q5,{role:"dialog","aria-label":"Tip of the Day",children:[l.jsxs(G5,{style:Rs(!0),children:[l.jsx("span",{children:"Tip of the Day"}),l.jsx(Y5,{onClick:()=>i(!1),title:"Close",children:"×"})]}),l.jsxs(X5,{children:[l.jsx(J5,{children:"💡"}),l.jsxs(Z5,{children:[l.jsx(eI,{children:"Did you know…"}),l.jsx("div",{children:RR(a)})]})]}),l.jsxs(tI,{children:[l.jsxs(nI,{children:[l.jsx("input",{type:"checkbox",checked:d,onChange:y=>m(y.target.checked)}),"Show tips at startup"]}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(Xx,{onClick:()=>u(y=>y+1),children:"Next Tip"}),l.jsx(Xx,{onClick:()=>i(!1),children:"Close"})]})]})]})}),document.body):null},oI=9e3,iI=6e3,sI=3e4,lI=75e3,aI=12e3,cI=vt`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
`,uI=vt`
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.12); }
`,dI=vt`
    0%, 92%, 100% { transform: scaleY(1); }
    96% { transform: scaleY(0.08); }
`,fI=vt`to { transform: rotate(360deg); }`,pI=vt`
    0% { transform: scale(0.6); opacity: 0; }
    60% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
`,hI=vt`
    0% { transform: scale(1); }
    40% { transform: scale(1.16) rotate(-4deg); }
    100% { transform: scale(1); }
`,mI=L.div`
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 58000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    pointer-events: none;
`,gI=L.div`
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
    animation: ${pI} 0.28s cubic-bezier(0.18, 0.9, 0.3, 1.2);
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
`,xI=L.div`
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.4px;
    margin-bottom: 3px;
    background: linear-gradient(90deg, #d6177f, #0aa89a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,yI=L.div`
    margin-top: 9px;
    display: flex;
    gap: 8px;
`,wI=L.button`
    font-size: 12px;
    padding: 3px 11px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,vI=L.button`
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
`,bI=L.div`
    pointer-events: auto;
    position: relative;
    width: 84px;
    height: 84px;
    cursor: pointer;
    animation: ${cI} 3.4s ease-in-out infinite;
    &:hover .vx-hide {
        opacity: 1;
    }
`,kI=L.div`
    width: 100%;
    height: 100%;
    /* re-keyed by $pop to retrigger the pop animation on each speak */
    animation: ${hI} 0.5s ease;
`,SI=L.div`
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #ff2d9577 0%, #00e5d000 70%);
    animation: ${uI} 2.6s ease-in-out infinite;
    pointer-events: none;
`,jI=L.button`
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
`,CI=L.g`
    transform-origin: 50px 46px;
    animation: ${dI} 4.5s infinite;
`,EI=L.path`
    transform-origin: 50px 50px;
    animation: ${fI} 7s linear infinite;
`,$I=()=>{const e=MR(),n=yc(),{addProcess:o}=Dn(),[i,a]=g.useState(null),[u,d]=g.useState(0),p=g.useRef(new Set),h=g.useRef(!1),m=g.useRef(0),y=g.useRef(0),w=g.useRef(Date.now()),b=g.useRef(qx().length),T=g.useRef(!1),E=g.useRef(null),C=g.useCallback(k=>{y.current=Date.now(),a(k),d(j=>j+1),E.current&&clearTimeout(E.current),E.current=setTimeout(()=>a(null),oI)},[]),$=g.useCallback((k,j,S)=>o({name:j,icon:S,componentName:k}),[o]);return g.useEffect(()=>{!e||T.current||(T.current=!0,setTimeout(()=>C({text:WR()}),2200))},[e,C]),g.useEffect(()=>{if(!e)return;const k=()=>w.current=Date.now(),j=["mousemove","mousedown","keydown","wheel"];j.forEach(R=>window.addEventListener(R,k,{passive:!0}));const S=setInterval(()=>{const R=Date.now(),M=R-w.current>sI,K=R-y.current>lI;M&&K&&!document.hidden&&C({text:Sx()})},aI);return()=>{j.forEach(R=>window.removeEventListener(R,k)),clearInterval(S)}},[e,C]),g.useEffect(()=>{if(e)return V4(()=>{const k=qx();if(k.length<=b.current){b.current=k.length;return}b.current=k.length,C({text:HR(),action:{label:"Task Manager",run:()=>$("task_manager","Task Manager","/task_manager.png")}})})},[e,C,$]),g.useEffect(()=>{if(e)return OR(k=>C(k))},[e,C]),g.useEffect(()=>{const k=new Set(n.map(j=>j.pid));if(h.current&&e){const j=n.find(R=>!p.current.has(R.pid)),S=Date.now();if(j&&S-m.current>iI){const R=BR(j.exec);R&&(m.current=S,C({text:R}))}}h.current=!0,p.current=k},[n,e,C]),e?l.jsxs(mI,{children:[i&&l.jsxs(gI,{role:"status",children:[l.jsx(xI,{children:"Vortex"}),l.jsx("div",{children:i.text}),i.action&&l.jsxs(yI,{children:[l.jsx(wI,{onClick:()=>{i.action.run(),a(null)},children:i.action.label}),l.jsx(vI,{onClick:()=>a(null),children:"Dismiss"})]})]}),l.jsxs(bI,{title:"Vortex — click for a tip",onClick:()=>C({text:Sx()}),children:[l.jsx(jI,{className:"vx-hide",title:"Hide Vortex (re-enable from Help)",onClick:k=>{k.stopPropagation(),Mv(!1)},children:"×"}),l.jsx(SI,{}),l.jsx(kI,{$pop:u,children:l.jsxs("svg",{viewBox:"0 0 100 100",width:84,height:84,style:{display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"vx-body",cx:"42%",cy:"36%",r:"70%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff8fd4"}),l.jsx("stop",{offset:"45%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#3a0a6b"})]}),l.jsxs("linearGradient",{id:"vx-rim",x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#00e5d0"})]})]}),l.jsx("circle",{cx:"50",cy:"50",r:"33",fill:"url(#vx-body)",stroke:"url(#vx-rim)",strokeWidth:"3"}),l.jsx(EI,{d:"M50 30 A20 20 0 1 1 30 50",fill:"none",stroke:"#ffffff",strokeWidth:"3",strokeLinecap:"round",opacity:"0.55"}),l.jsxs(CI,{children:[l.jsx("ellipse",{cx:"40",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("ellipse",{cx:"60",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("circle",{cx:"41.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"61.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"43",cy:"45",r:"1.1",fill:"#fff"}),l.jsx("circle",{cx:"63",cy:"45",r:"1.1",fill:"#fff"})]}),l.jsx("path",{d:"M42 62 Q50 69 58 62",fill:"none",stroke:"#fff",strokeWidth:"2.6",strokeLinecap:"round",opacity:"0.85"})]})},u)]})]}):null},TI=5500,Jx=["#ff2d95","#00e5d0","#a14bff","#ffd83a","#1084d0","#ff8fd4"],AI=vt`
    0% { transform: scale(0.4) rotate(-8deg); opacity: 0; }
    55% { transform: scale(1.12) rotate(2deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
`,RI=vt`to { filter: hue-rotate(360deg); }`,DI=L.div`
    position: fixed;
    inset: 0;
    z-index: 70000;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`,II=L.div`
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
    animation: ${AI} 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.3), ${RI} 3s linear infinite;
`,PI=L.canvas`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
`,NI=vt`
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-130%); }
`,MI=L.div`
    position: fixed;
    inset: 0;
    z-index: 71000;
    background: radial-gradient(80% 80% at 50% 40%, #0a0118 0%, #000 100%);
    overflow: hidden;
    cursor: pointer;
`,LI=L.div`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    color: #eee;
    font-family: "Segoe UI", Tahoma, sans-serif;
    animation: ${NI} 22s linear infinite;
`,cf=L.div`
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,OI=L.div`
    position: fixed;
    bottom: 18px;
    right: 22px;
    color: #888;
    font-size: 12px;
    font-family: "Segoe UI", sans-serif;
`,zI=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),a=g.useRef(null);return g.useEffect(()=>S$(()=>{ic("konami"),n(!0),mo(),LR({text:"🌀 You found the Konami code — VORTEX MODE engaged!"})}),[]),g.useEffect(()=>b$(()=>n(!0)),[]),g.useEffect(()=>k$(()=>{i(!0),mo()}),[]),g.useEffect(()=>{if(!e)return;const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width=window.innerWidth,h=u.height=window.innerHeight,m=Array.from({length:160},()=>({x:Math.random()*p,y:Math.random()*-h,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,size:5+Math.random()*7,color:Jx[Math.floor(Math.random()*Jx.length)],rot:Math.random()*Math.PI,vr:(Math.random()-.5)*.3}));let y=0;const w=()=>{d.clearRect(0,0,p,h),m.forEach(T=>{T.x+=T.vx,T.y+=T.vy,T.vy+=.04,T.rot+=T.vr,T.y>h+20&&(T.y=-20,T.x=Math.random()*p,T.vy=2+Math.random()*4),d.save(),d.translate(T.x,T.y),d.rotate(T.rot),d.fillStyle=T.color,d.fillRect(-T.size/2,-T.size/2,T.size,T.size*.6),d.restore()}),y=requestAnimationFrame(w)};w();const b=setTimeout(()=>n(!1),TI);return()=>{cancelAnimationFrame(y),clearTimeout(b)}},[e]),g.useEffect(()=>{if(!o)return;const u=d=>{d.key==="Escape"&&i(!1)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[o]),l.jsxs(l.Fragment,{children:[e&&Ut.createPortal(l.jsxs(DI,{children:[l.jsx(PI,{ref:a}),l.jsx(II,{children:"VORTEX MODE"})]}),document.body),o&&Ut.createPortal(l.jsxs(MI,{onClick:()=>i(!1),children:[l.jsxs(LI,{children:[l.jsx("div",{style:{height:40}}),l.jsx(cf,{children:"VortexOS 2.0"}),l.jsx("p",{style:{color:"#b9b9c8"},children:"Experimental Edition"}),l.jsx("div",{style:{height:40}}),l.jsx("p",{style:{color:"#888",fontSize:13},children:"a creation by"}),l.jsx(cf,{style:{fontSize:52},children:"SERIOUS SAM"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontWeight:700,color:"#00e5d0"},children:"The Microkernel"}),l.jsx("p",{children:"Syscall ABI · Process scheduler"}),l.jsx("p",{children:"Per-process file descriptors"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#ff67c8"},children:"The System"}),l.jsx("p",{children:"Virtual File System · OPFS"}),l.jsx("p",{children:"Real shell & coreutils"}),l.jsx("p",{children:"Window manager · compositor-free"}),l.jsx("p",{children:"Multi-user accounts & networking"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#a14bff"},children:"The Desktop"}),l.jsx("p",{children:"Every app, hand-built"}),l.jsx("p",{children:"The games · The tray · The assistant"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontSize:18},children:"Built from scratch in a browser."}),l.jsx("p",{style:{fontSize:18,color:"#00e5d0"},children:"No emulator. No clone."}),l.jsx("div",{style:{height:50}}),l.jsx("p",{style:{color:"#888"},children:"Special thanks:"}),l.jsx("p",{style:{fontSize:20},children:"You, for exploring. 🌀"}),l.jsx("div",{style:{height:80}}),l.jsx(cf,{style:{fontSize:30},children:"VortexOS"}),l.jsx("div",{style:{height:60}})]}),l.jsx(OI,{children:"Press Esc or click to close"})]}),document.body)]})},_I=()=>{const{uiScale:e,reduceMotion:n,pointerScheme:o}=on(),{changeCursor:i}=Kt();return g.useEffect(()=>(e===100?document.documentElement.style.removeProperty("zoom"):document.documentElement.style.setProperty("zoom",String(e/100)),()=>{document.documentElement.style.removeProperty("zoom")}),[e]),g.useEffect(()=>{n?document.documentElement.setAttribute("data-reduce-motion",""):document.documentElement.removeAttribute("data-reduce-motion")},[n]),g.useEffect(()=>{i(o)},[o]),null},FI=()=>{const{cursor:e,crt:n,busy:o,reloadWallpaper:i}=Kt(),{isAuthenticated:a}=Kn(),u=KD();return g.useEffect(()=>{a&&(u(),i())},[a]),g.useEffect(()=>{if(a)return JR(),()=>ZR()},[a]),a?l.jsxs("div",{style:{position:"fixed",inset:0,overflow:"hidden",cursor:o?"url(/win-cursor/loading.cur), wait":e},onContextMenu:d=>d.preventDefault(),children:[l.jsxs(g5,{children:[l.jsx(h4,{}),l.jsx(Y4,{}),l.jsx(H4,{}),l.jsx(e5,{}),l.jsx(c5,{}),l.jsx(C5,{}),l.jsx(E5,{}),l.jsx($5,{}),l.jsx(S5,{}),l.jsx(j5,{}),l.jsx(K5,{}),l.jsx(rI,{}),l.jsx($I,{}),l.jsx(zI,{}),l.jsx(_I,{})]}),l.jsx(h5,{}),n&&l.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:1e6,background:"repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",mixBlendMode:"multiply"},children:l.jsx("div",{style:{position:"absolute",inset:0,boxShadow:"inset 0 0 150px rgba(0,0,0,0.55)"}})})]}):l.jsx(Z4,{})},l1=vt`from { opacity: 0 } to { opacity: 1 }`,a1=L.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`,BI=L(a1)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#008080"};
    animation: ${l1} 0.4s ease;
`,WI=L.h1`
    margin: 22px 0 0;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #ffffff, #cfe9e9)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,HI=L(a1)`
    background: #000;
    gap: 34px;
`,UI=L.p`
    color: #ffa000;
    font-size: 26px;
    text-align: center;
    padding: 0 20px;
    text-shadow: 0 0 10px rgba(255, 160, 0, 0.35);
    animation: ${l1} 0.6s ease;
`,VI=L.button`
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
`,KI=()=>{const e=di(),{sssStyle:n}=Kt(),o=n,[i,a]=g.useState("closing");return g.useEffect(()=>{f8();const u=setTimeout(()=>a("off"),2600);return()=>clearTimeout(u)},[]),i==="closing"?l.jsxs(BI,{$vapor:o,children:[l.jsx(oi,{size:120,vapor:o}),l.jsx(WI,{$vapor:o,children:"VortexOS"}),l.jsx("p",{style:{marginTop:26,fontSize:14,color:o?"#cfcfe0":"#fff"},children:"Please wait while VortexOS shuts down…"})]}):l.jsxs(HI,{children:[l.jsx(UI,{children:"It's now safe to turn off your computer."}),l.jsx(VI,{onClick:()=>e("/"),children:"Restart"})]})},QI=()=>{const{wallpaper:e,sssStyle:n}=Kt(),o=()=>e.image?e.type===2?{background:e.image}:{backgroundImage:`url('/${e.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:n?{backgroundImage:"url('/wallpapers/vw-5.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#1a0033"}:{background:"#008080"};return l.jsx("div",{style:{...o(),width:"100vw",height:"100vh",overflow:"hidden"},children:l.jsxs(DE,{children:[l.jsx(aa,{path:"/",element:l.jsx(c4,{})}),l.jsx(aa,{path:"/vortex",element:l.jsx(FI,{})}),l.jsx(aa,{path:"/shutdown",element:l.jsx(KI,{})})]})})},qI=({children:e})=>{const{theme:n}=Kt();return l.jsx(dS,{theme:G8(n),children:e})},GI=hS`
  ${mS}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${FC}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${BC}') format('woff2');
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
`,YI=()=>l.jsxs(t2,{children:[l.jsx(GI,{}),l.jsx(VD,{children:l.jsx(H2,{children:l.jsx(qI,{children:l.jsx(GD,{children:l.jsx(g8,{children:l.jsx(L$,{children:l.jsx(QI,{})})})})})})})]});let Zx=!1;function XI(){Zx||(Zx=!0,Ve.interceptors.request.use(e=>{const n=rc();return n&&(e.headers=e.headers??{},e.headers.Authorization=`Bearer ${n}`),e}),Ve.interceptors.response.use(e=>e,e=>{var o,i;const n=((o=e==null?void 0:e.config)==null?void 0:o.url)??"";return((i=e==null?void 0:e.response)==null?void 0:i.status)===401&&!n.includes("/auth/")&&vw(),Promise.reject(e)}))}XI();C$();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});pk.createRoot(document.getElementById("root")).render(l.jsx(g.StrictMode,{children:l.jsx(YI,{})}));export{Et as A,Ue as B,dt as C,wt as F,gn as M,Kj as P,zy as S,lr as T,Br as W,Ve as a,Ds as b,Fe as c,L as d,Ae as e,mn as f,Pt as g,Oe as h,vf as i,l as j,rc as k,vt as m,g as r,Kt as u};
