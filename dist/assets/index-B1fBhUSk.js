const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Doom-imBIL7rP.js","assets/DosPlayer-Bv4QFngV.js","assets/DoomII-CyGhBUh3.js","assets/TombRaider-DR3NdKqO.js","assets/Persia-OSiY79Se.js"])))=>i.map(i=>d[i]);
var Bb=Object.defineProperty;var Wb=(e,n,o)=>n in e?Bb(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var Ie=(e,n,o)=>Wb(e,typeof n!="symbol"?n+"":n,o);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(a){if(a.ep)return;a.ep=!0;const u=o(a);fetch(a.href,u)}})();function $n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ju={exports:{}},Yi={},Zu={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function Hb(){if(P0)return De;P0=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,v={};function j(M,X,ce){this.props=M,this.context=X,this.refs=v,this.updater=ce||A}j.prototype.isReactComponent={},j.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},j.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function k(){}k.prototype=j.prototype;function E(M,X,ce){this.props=M,this.context=X,this.refs=v,this.updater=ce||A}var R=E.prototype=new k;R.constructor=E,C(R,j.prototype),R.isPureReactComponent=!0;var N=Array.isArray,z=Object.prototype.hasOwnProperty,K={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function Z(M,X,ce){var fe,Q={},te=null,le=null;if(X!=null)for(fe in X.ref!==void 0&&(le=X.ref),X.key!==void 0&&(te=""+X.key),X)z.call(X,fe)&&!Y.hasOwnProperty(fe)&&(Q[fe]=X[fe]);var L=arguments.length-2;if(L===1)Q.children=ce;else if(1<L){for(var P=Array(L),ne=0;ne<L;ne++)P[ne]=arguments[ne+2];Q.children=P}if(M&&M.defaultProps)for(fe in L=M.defaultProps,L)Q[fe]===void 0&&(Q[fe]=L[fe]);return{$$typeof:e,type:M,key:te,ref:le,props:Q,_owner:K.current}}function se(M,X){return{$$typeof:e,type:M.type,key:X,ref:M.ref,props:M.props,_owner:M._owner}}function ge(M){return typeof M=="object"&&M!==null&&M.$$typeof===e}function ie(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ce){return X[ce]})}var ue=/\/+/g;function me(M,X){return typeof M=="object"&&M!==null&&M.key!=null?ie(""+M.key):X.toString(36)}function B(M,X,ce,fe,Q){var te=typeof M;(te==="undefined"||te==="boolean")&&(M=null);var le=!1;if(M===null)le=!0;else switch(te){case"string":case"number":le=!0;break;case"object":switch(M.$$typeof){case e:case n:le=!0}}if(le)return le=M,Q=Q(le),M=fe===""?"."+me(le,0):fe,N(Q)?(ce="",M!=null&&(ce=M.replace(ue,"$&/")+"/"),B(Q,X,ce,"",function(ne){return ne})):Q!=null&&(ge(Q)&&(Q=se(Q,ce+(!Q.key||le&&le.key===Q.key?"":(""+Q.key).replace(ue,"$&/")+"/")+M)),X.push(Q)),1;if(le=0,fe=fe===""?".":fe+":",N(M))for(var L=0;L<M.length;L++){te=M[L];var P=fe+me(te,L);le+=B(te,X,ce,P,Q)}else if(P=S(M),typeof P=="function")for(M=P.call(M),L=0;!(te=M.next()).done;)te=te.value,P=fe+me(te,L++),le+=B(te,X,ce,P,Q);else if(te==="object")throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return le}function $(M,X,ce){if(M==null)return M;var fe=[],Q=0;return B(M,fe,"","",function(te){return X.call(ce,te,Q++)}),fe}function T(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(ce){(M._status===0||M._status===-1)&&(M._status=1,M._result=ce)},function(ce){(M._status===0||M._status===-1)&&(M._status=2,M._result=ce)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var H={current:null},W={transition:null},ee={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:W,ReactCurrentOwner:K};function F(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:$,forEach:function(M,X,ce){$(M,function(){X.apply(this,arguments)},ce)},count:function(M){var X=0;return $(M,function(){X++}),X},toArray:function(M){return $(M,function(X){return X})||[]},only:function(M){if(!ge(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},De.Component=j,De.Fragment=o,De.Profiler=a,De.PureComponent=E,De.StrictMode=i,De.Suspense=h,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,De.act=F,De.cloneElement=function(M,X,ce){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var fe=C({},M.props),Q=M.key,te=M.ref,le=M._owner;if(X!=null){if(X.ref!==void 0&&(te=X.ref,le=K.current),X.key!==void 0&&(Q=""+X.key),M.type&&M.type.defaultProps)var L=M.type.defaultProps;for(P in X)z.call(X,P)&&!Y.hasOwnProperty(P)&&(fe[P]=X[P]===void 0&&L!==void 0?L[P]:X[P])}var P=arguments.length-2;if(P===1)fe.children=ce;else if(1<P){L=Array(P);for(var ne=0;ne<P;ne++)L[ne]=arguments[ne+2];fe.children=L}return{$$typeof:e,type:M.type,key:Q,ref:te,props:fe,_owner:le}},De.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},De.createElement=Z,De.createFactory=function(M){var X=Z.bind(null,M);return X.type=M,X},De.createRef=function(){return{current:null}},De.forwardRef=function(M){return{$$typeof:p,render:M}},De.isValidElement=ge,De.lazy=function(M){return{$$typeof:y,_payload:{_status:-1,_result:M},_init:T}},De.memo=function(M,X){return{$$typeof:x,type:M,compare:X===void 0?null:X}},De.startTransition=function(M){var X=W.transition;W.transition={};try{M()}finally{W.transition=X}},De.unstable_act=F,De.useCallback=function(M,X){return H.current.useCallback(M,X)},De.useContext=function(M){return H.current.useContext(M)},De.useDebugValue=function(){},De.useDeferredValue=function(M){return H.current.useDeferredValue(M)},De.useEffect=function(M,X){return H.current.useEffect(M,X)},De.useId=function(){return H.current.useId()},De.useImperativeHandle=function(M,X,ce){return H.current.useImperativeHandle(M,X,ce)},De.useInsertionEffect=function(M,X){return H.current.useInsertionEffect(M,X)},De.useLayoutEffect=function(M,X){return H.current.useLayoutEffect(M,X)},De.useMemo=function(M,X){return H.current.useMemo(M,X)},De.useReducer=function(M,X,ce){return H.current.useReducer(M,X,ce)},De.useRef=function(M){return H.current.useRef(M)},De.useState=function(M){return H.current.useState(M)},De.useSyncExternalStore=function(M,X,ce){return H.current.useSyncExternalStore(M,X,ce)},De.useTransition=function(){return H.current.useTransition()},De.version="18.3.1",De}var I0;function ep(){return I0||(I0=1,Zu.exports=Hb()),Zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0;function Ub(){if(N0)return Yi;N0=1;var e=ep(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(p,h,x){var y,w={},S=null,A=null;x!==void 0&&(S=""+x),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(A=h.ref);for(y in h)i.call(h,y)&&!u.hasOwnProperty(y)&&(w[y]=h[y]);if(p&&p.defaultProps)for(y in h=p.defaultProps,h)w[y]===void 0&&(w[y]=h[y]);return{$$typeof:n,type:p,key:S,ref:A,props:w,_owner:a.current}}return Yi.Fragment=o,Yi.jsx=d,Yi.jsxs=d,Yi}var L0;function Vb(){return L0||(L0=1,Ju.exports=Ub()),Ju.exports}var l=Vb(),g=ep();const G=$n(g);var Ml={},ed={exports:{}},zt={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function Kb(){return O0||(O0=1,function(e){function n(W,ee){var F=W.length;W.push(ee);e:for(;0<F;){var M=F-1>>>1,X=W[M];if(0<a(X,ee))W[M]=ee,W[F]=X,F=M;else break e}}function o(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var ee=W[0],F=W.pop();if(F!==ee){W[0]=F;e:for(var M=0,X=W.length,ce=X>>>1;M<ce;){var fe=2*(M+1)-1,Q=W[fe],te=fe+1,le=W[te];if(0>a(Q,F))te<X&&0>a(le,Q)?(W[M]=le,W[te]=F,M=te):(W[M]=Q,W[fe]=F,M=fe);else if(te<X&&0>a(le,F))W[M]=le,W[te]=F,M=te;else break e}}return ee}function a(W,ee){var F=W.sortIndex-ee.sortIndex;return F!==0?F:W.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var h=[],x=[],y=1,w=null,S=3,A=!1,C=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var ee=o(x);ee!==null;){if(ee.callback===null)i(x);else if(ee.startTime<=W)i(x),ee.sortIndex=ee.expirationTime,n(h,ee);else break;ee=o(x)}}function N(W){if(v=!1,R(W),!C)if(o(h)!==null)C=!0,T(z);else{var ee=o(x);ee!==null&&H(N,ee.startTime-W)}}function z(W,ee){C=!1,v&&(v=!1,k(Z),Z=-1),A=!0;var F=S;try{for(R(ee),w=o(h);w!==null&&(!(w.expirationTime>ee)||W&&!ie());){var M=w.callback;if(typeof M=="function"){w.callback=null,S=w.priorityLevel;var X=M(w.expirationTime<=ee);ee=e.unstable_now(),typeof X=="function"?w.callback=X:w===o(h)&&i(h),R(ee)}else i(h);w=o(h)}if(w!==null)var ce=!0;else{var fe=o(x);fe!==null&&H(N,fe.startTime-ee),ce=!1}return ce}finally{w=null,S=F,A=!1}}var K=!1,Y=null,Z=-1,se=5,ge=-1;function ie(){return!(e.unstable_now()-ge<se)}function ue(){if(Y!==null){var W=e.unstable_now();ge=W;var ee=!0;try{ee=Y(!0,W)}finally{ee?me():(K=!1,Y=null)}}else K=!1}var me;if(typeof E=="function")me=function(){E(ue)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,$=B.port2;B.port1.onmessage=ue,me=function(){$.postMessage(null)}}else me=function(){j(ue,0)};function T(W){Y=W,K||(K=!0,me())}function H(W,ee){Z=j(function(){W(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){C||A||(C=!0,T(z))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return o(h)},e.unstable_next=function(W){switch(S){case 1:case 2:case 3:var ee=3;break;default:ee=S}var F=S;S=ee;try{return W()}finally{S=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,ee){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var F=S;S=W;try{return ee()}finally{S=F}},e.unstable_scheduleCallback=function(W,ee,F){var M=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?M+F:M):F=M,W){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=F+X,W={id:y++,callback:ee,priorityLevel:W,startTime:F,expirationTime:X,sortIndex:-1},F>M?(W.sortIndex=F,n(x,W),o(h)===null&&W===o(x)&&(v?(k(Z),Z=-1):v=!0,H(N,F-M))):(W.sortIndex=X,n(h,W),C||A||(C=!0,T(z))),W},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(W){var ee=S;return function(){var F=S;S=ee;try{return W.apply(this,arguments)}finally{S=F}}}}(nd)),nd}var M0;function Qb(){return M0||(M0=1,td.exports=Kb()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z0;function qb(){if(z0)return zt;z0=1;var e=ep(),n=Qb();function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)i.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function S(t){return h.call(w,t)?!0:h.call(y,t)?!1:x.test(t)?w[t]=!0:(y[t]=!0,!1)}function A(t,r,s,c){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C(t,r,s,c){if(r===null||typeof r>"u"||A(t,r,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function v(t,r,s,c,f,m,b){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=r,this.sanitizeURL=m,this.removeEmptyString=b}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){j[t]=new v(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];j[r]=new v(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){j[t]=new v(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){j[t]=new v(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){j[t]=new v(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){j[t]=new v(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){j[t]=new v(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){j[t]=new v(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){j[t]=new v(t,5,!1,t.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function E(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(k,E);j[r]=new v(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(k,E);j[r]=new v(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(k,E);j[r]=new v(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){j[t]=new v(t,1,!1,t.toLowerCase(),null,!1,!1)}),j.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){j[t]=new v(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,r,s,c){var f=j.hasOwnProperty(r)?j[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(C(r,s,f,c)&&(s=null),c||f===null?S(r)&&(s===null?t.removeAttribute(r):t.setAttribute(r,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(r=f.attributeName,c=f.attributeNamespace,s===null?t.removeAttribute(r):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,c?t.setAttributeNS(c,r,s):t.setAttribute(r,s))))}var N=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),K=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ge=Symbol.for("react.provider"),ie=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),W=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var F=Object.assign,M;function X(t){if(M===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);M=r&&r[1]||""}return`
`+M+t}var ce=!1;function fe(t,r){if(!t||ce)return"";ce=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(q){var c=q}Reflect.construct(t,[],r)}else{try{r.call()}catch(q){c=q}t.call(r.prototype)}else{try{throw Error()}catch(q){c=q}t()}}catch(q){if(q&&c&&typeof q.stack=="string"){for(var f=q.stack.split(`
`),m=c.stack.split(`
`),b=f.length-1,D=m.length-1;1<=b&&0<=D&&f[b]!==m[D];)D--;for(;1<=b&&0<=D;b--,D--)if(f[b]!==m[D]){if(b!==1||D!==1)do if(b--,D--,0>D||f[b]!==m[D]){var I=`
`+f[b].replace(" at new "," at ");return t.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",t.displayName)),I}while(1<=b&&0<=D);break}}}finally{ce=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?X(t):""}function Q(t){switch(t.tag){case 5:return X(t.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return t=fe(t.type,!1),t;case 11:return t=fe(t.type.render,!1),t;case 1:return t=fe(t.type,!0),t;default:return""}}function te(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Y:return"Fragment";case K:return"Portal";case se:return"Profiler";case Z:return"StrictMode";case me:return"Suspense";case B:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ie:return(t.displayName||"Context")+".Consumer";case ge:return(t._context.displayName||"Context")+".Provider";case ue:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $:return r=t.displayName||null,r!==null?r:te(t.type)||"Memo";case T:r=t._payload,t=t._init;try{return te(t(r))}catch{}}return null}function le(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===Z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function L(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function P(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ne(t){var r=P(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function pe(t){t._valueTracker||(t._valueTracker=ne(t))}function he(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return t&&(c=P(t)?t.checked?"true":"false":t.value),t=c,t!==s?(r.setValue(t),!0):!1}function be(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function _e(t,r){var s=r.checked;return F({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function He(t,r){var s=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;s=L(r.value!=null?r.value:s),t._wrapperState={initialChecked:c,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Rt(t,r){r=r.checked,r!=null&&R(t,"checked",r,!1)}function Wt(t,r){Rt(t,r);var s=L(r.value),c=r.type;if(s!=null)c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?tn(t,r.type,s):r.hasOwnProperty("defaultValue")&&tn(t,r.type,L(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function Rn(t,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,s||r===t.value||(t.value=r),t.defaultValue=r}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function tn(t,r,s){(r!=="number"||be(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var Kn=Array.isArray;function Dn(t,r,s,c){if(t=t.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=r.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&c&&(t[s].defaultSelected=!0)}else{for(s=""+L(s),r=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function Qn(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return F({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function di(t,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(o(92));if(Kn(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),s=r}t._wrapperState={initialValue:L(s)}}function ac(t,r){var s=L(r.value),c=L(r.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),r.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),c!=null&&(t.defaultValue=""+c)}function Up(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function Vp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function cc(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?Vp(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ts,Kp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,c,f){MSApp.execUnsafeLocalFunction(function(){return t(r,s,c,f)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ts.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function fi(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(pi).forEach(function(t){Kv.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),pi[r]=pi[t]})});function Qp(t,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||pi.hasOwnProperty(t)&&pi[t]?(""+r).trim():r+"px"}function qp(t,r){t=t.style;for(var s in r)if(r.hasOwnProperty(s)){var c=s.indexOf("--")===0,f=Qp(s,r[s],c);s==="float"&&(s="cssFloat"),c?t.setProperty(s,f):t[s]=f}}var Qv=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uc(t,r){if(r){if(Qv[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function dc(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fc=null;function pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hc=null,go=null,xo=null;function Gp(t){if(t=Li(t)){if(typeof hc!="function")throw Error(o(280));var r=t.stateNode;r&&(r=Js(r),hc(t.stateNode,t.type,r))}}function Yp(t){go?xo?xo.push(t):xo=[t]:go=t}function Xp(){if(go){var t=go,r=xo;if(xo=go=null,Gp(t),r)for(t=0;t<r.length;t++)Gp(r[t])}}function Jp(t,r){return t(r)}function Zp(){}var mc=!1;function eh(t,r,s){if(mc)return t(r,s);mc=!0;try{return Jp(t,r,s)}finally{mc=!1,(go!==null||xo!==null)&&(Zp(),Xp())}}function hi(t,r){var s=t.stateNode;if(s===null)return null;var c=Js(s);if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(o(231,r,typeof s));return s}var gc=!1;if(p)try{var mi={};Object.defineProperty(mi,"passive",{get:function(){gc=!0}}),window.addEventListener("test",mi,mi),window.removeEventListener("test",mi,mi)}catch{gc=!1}function qv(t,r,s,c,f,m,b,D,I){var q=Array.prototype.slice.call(arguments,3);try{r.apply(s,q)}catch(oe){this.onError(oe)}}var gi=!1,Rs=null,Ds=!1,xc=null,Gv={onError:function(t){gi=!0,Rs=t}};function Yv(t,r,s,c,f,m,b,D,I){gi=!1,Rs=null,qv.apply(Gv,arguments)}function Xv(t,r,s,c,f,m,b,D,I){if(Yv.apply(this,arguments),gi){if(gi){var q=Rs;gi=!1,Rs=null}else throw Error(o(198));Ds||(Ds=!0,xc=q)}}function _r(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function th(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function nh(t){if(_r(t)!==t)throw Error(o(188))}function Jv(t){var r=t.alternate;if(!r){if(r=_r(t),r===null)throw Error(o(188));return r!==t?null:t}for(var s=t,c=r;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return nh(f),t;if(m===c)return nh(f),r;m=m.sibling}throw Error(o(188))}if(s.return!==c.return)s=f,c=m;else{for(var b=!1,D=f.child;D;){if(D===s){b=!0,s=f,c=m;break}if(D===c){b=!0,c=f,s=m;break}D=D.sibling}if(!b){for(D=m.child;D;){if(D===s){b=!0,s=m,c=f;break}if(D===c){b=!0,c=m,s=f;break}D=D.sibling}if(!b)throw Error(o(189))}}if(s.alternate!==c)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?t:r}function rh(t){return t=Jv(t),t!==null?oh(t):null}function oh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=oh(t);if(r!==null)return r;t=t.sibling}return null}var ih=n.unstable_scheduleCallback,sh=n.unstable_cancelCallback,Zv=n.unstable_shouldYield,e1=n.unstable_requestPaint,nt=n.unstable_now,t1=n.unstable_getCurrentPriorityLevel,yc=n.unstable_ImmediatePriority,lh=n.unstable_UserBlockingPriority,Ps=n.unstable_NormalPriority,n1=n.unstable_LowPriority,ah=n.unstable_IdlePriority,Is=null,Pn=null;function r1(t){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(Is,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:s1,o1=Math.log,i1=Math.LN2;function s1(t){return t>>>=0,t===0?32:31-(o1(t)/i1|0)|0}var Ns=64,Ls=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Os(t,r){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,m=t.pingedLanes,b=s&268435455;if(b!==0){var D=b&~f;D!==0?c=xi(D):(m&=b,m!==0&&(c=xi(m)))}else b=s&~f,b!==0?c=xi(b):m!==0&&(c=xi(m));if(c===0)return 0;if(r!==0&&r!==c&&!(r&f)&&(f=c&-c,m=r&-r,f>=m||f===16&&(m&4194240)!==0))return r;if(c&4&&(c|=s&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)s=31-mn(r),f=1<<s,c|=t[s],r&=~f;return c}function l1(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a1(t,r){for(var s=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes;0<m;){var b=31-mn(m),D=1<<b,I=f[b];I===-1?(!(D&s)||D&c)&&(f[b]=l1(D,r)):I<=r&&(t.expiredLanes|=D),m&=~D}}function wc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ch(){var t=Ns;return Ns<<=1,!(Ns&4194240)&&(Ns=64),t}function vc(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function yi(t,r,s){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-mn(r),t[r]=s}function c1(t,r){var s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-mn(s),m=1<<f;r[f]=0,c[f]=-1,t[f]=-1,s&=~m}}function bc(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var c=31-mn(s),f=1<<c;f&r|t[c]&r&&(t[c]|=r),s&=~f}}var Fe=0;function uh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var dh,kc,fh,ph,hh,Sc=!1,Ms=[],cr=null,ur=null,dr=null,wi=new Map,vi=new Map,fr=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mh(t,r){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":dr=null;break;case"pointerover":case"pointerout":wi.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(r.pointerId)}}function bi(t,r,s,c,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Li(r),r!==null&&kc(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function d1(t,r,s,c,f){switch(r){case"focusin":return cr=bi(cr,t,r,s,c,f),!0;case"dragenter":return ur=bi(ur,t,r,s,c,f),!0;case"mouseover":return dr=bi(dr,t,r,s,c,f),!0;case"pointerover":var m=f.pointerId;return wi.set(m,bi(wi.get(m)||null,t,r,s,c,f)),!0;case"gotpointercapture":return m=f.pointerId,vi.set(m,bi(vi.get(m)||null,t,r,s,c,f)),!0}return!1}function gh(t){var r=Fr(t.target);if(r!==null){var s=_r(r);if(s!==null){if(r=s.tag,r===13){if(r=th(s),r!==null){t.blockedOn=r,hh(t.priority,function(){fh(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zs(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=Ec(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);fc=c,s.target.dispatchEvent(c),fc=null}else return r=Li(s),r!==null&&kc(r),t.blockedOn=s,!1;r.shift()}return!0}function xh(t,r,s){zs(t)&&s.delete(r)}function f1(){Sc=!1,cr!==null&&zs(cr)&&(cr=null),ur!==null&&zs(ur)&&(ur=null),dr!==null&&zs(dr)&&(dr=null),wi.forEach(xh),vi.forEach(xh)}function ki(t,r){t.blockedOn===r&&(t.blockedOn=null,Sc||(Sc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,f1)))}function Si(t){function r(f){return ki(f,t)}if(0<Ms.length){ki(Ms[0],t);for(var s=1;s<Ms.length;s++){var c=Ms[s];c.blockedOn===t&&(c.blockedOn=null)}}for(cr!==null&&ki(cr,t),ur!==null&&ki(ur,t),dr!==null&&ki(dr,t),wi.forEach(r),vi.forEach(r),s=0;s<fr.length;s++)c=fr[s],c.blockedOn===t&&(c.blockedOn=null);for(;0<fr.length&&(s=fr[0],s.blockedOn===null);)gh(s),s.blockedOn===null&&fr.shift()}var yo=N.ReactCurrentBatchConfig,_s=!0;function p1(t,r,s,c){var f=Fe,m=yo.transition;yo.transition=null;try{Fe=1,jc(t,r,s,c)}finally{Fe=f,yo.transition=m}}function h1(t,r,s,c){var f=Fe,m=yo.transition;yo.transition=null;try{Fe=4,jc(t,r,s,c)}finally{Fe=f,yo.transition=m}}function jc(t,r,s,c){if(_s){var f=Ec(t,r,s,c);if(f===null)Wc(t,r,c,Fs,s),mh(t,c);else if(d1(f,t,r,s,c))c.stopPropagation();else if(mh(t,c),r&4&&-1<u1.indexOf(t)){for(;f!==null;){var m=Li(f);if(m!==null&&dh(m),m=Ec(t,r,s,c),m===null&&Wc(t,r,c,Fs,s),m===f)break;f=m}f!==null&&c.stopPropagation()}else Wc(t,r,c,null,s)}}var Fs=null;function Ec(t,r,s,c){if(Fs=null,t=pc(c),t=Fr(t),t!==null)if(r=_r(t),r===null)t=null;else if(s=r.tag,s===13){if(t=th(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Fs=t,null}function yh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t1()){case yc:return 1;case lh:return 4;case Ps:case n1:return 16;case ah:return 536870912;default:return 16}default:return 16}}var pr=null,Cc=null,Bs=null;function wh(){if(Bs)return Bs;var t,r=Cc,s=r.length,c,f="value"in pr?pr.value:pr.textContent,m=f.length;for(t=0;t<s&&r[t]===f[t];t++);var b=s-t;for(c=1;c<=b&&r[s-c]===f[m-c];c++);return Bs=f.slice(t,1<c?1-c:void 0)}function Ws(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Hs(){return!0}function vh(){return!1}function Ht(t){function r(s,c,f,m,b){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(s=t[D],this[D]=s?s(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Hs:vh,this.isPropagationStopped=vh,this}return F(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Hs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Hs)},persist:function(){},isPersistent:Hs}),r}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$c=Ht(wo),ji=F({},wo,{view:0,detail:0}),m1=Ht(ji),Ac,Tc,Ei,Us=F({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ei&&(Ei&&t.type==="mousemove"?(Ac=t.screenX-Ei.screenX,Tc=t.screenY-Ei.screenY):Tc=Ac=0,Ei=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),bh=Ht(Us),g1=F({},Us,{dataTransfer:0}),x1=Ht(g1),y1=F({},ji,{relatedTarget:0}),Rc=Ht(y1),w1=F({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=Ht(w1),b1=F({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k1=Ht(b1),S1=F({},wo,{data:0}),kh=Ht(S1),j1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $1(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=C1[t])?!!r[t]:!1}function Dc(){return $1}var A1=F({},ji,{key:function(t){if(t.key){var r=j1[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ws(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?E1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(t){return t.type==="keypress"?Ws(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ws(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),T1=Ht(A1),R1=F({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sh=Ht(R1),D1=F({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),P1=Ht(D1),I1=F({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=Ht(I1),L1=F({},Us,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=Ht(L1),M1=[9,13,27,32],Pc=p&&"CompositionEvent"in window,Ci=null;p&&"documentMode"in document&&(Ci=document.documentMode);var z1=p&&"TextEvent"in window&&!Ci,jh=p&&(!Pc||Ci&&8<Ci&&11>=Ci),Eh=" ",Ch=!1;function $h(t,r){switch(t){case"keyup":return M1.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ah(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vo=!1;function _1(t,r){switch(t){case"compositionend":return Ah(r);case"keypress":return r.which!==32?null:(Ch=!0,Eh);case"textInput":return t=r.data,t===Eh&&Ch?null:t;default:return null}}function F1(t,r){if(vo)return t==="compositionend"||!Pc&&$h(t,r)?(t=wh(),Bs=Cc=pr=null,vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return jh&&r.locale!=="ko"?null:r.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Th(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!B1[t.type]:r==="textarea"}function Rh(t,r,s,c){Yp(c),r=Gs(r,"onChange"),0<r.length&&(s=new $c("onChange","change",null,s,c),t.push({event:s,listeners:r}))}var $i=null,Ai=null;function W1(t){qh(t,0)}function Vs(t){var r=Eo(t);if(he(r))return t}function H1(t,r){if(t==="change")return r}var Dh=!1;if(p){var Ic;if(p){var Nc="oninput"in document;if(!Nc){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),Nc=typeof Ph.oninput=="function"}Ic=Nc}else Ic=!1;Dh=Ic&&(!document.documentMode||9<document.documentMode)}function Ih(){$i&&($i.detachEvent("onpropertychange",Nh),Ai=$i=null)}function Nh(t){if(t.propertyName==="value"&&Vs(Ai)){var r=[];Rh(r,Ai,t,pc(t)),eh(W1,r)}}function U1(t,r,s){t==="focusin"?(Ih(),$i=r,Ai=s,$i.attachEvent("onpropertychange",Nh)):t==="focusout"&&Ih()}function V1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vs(Ai)}function K1(t,r){if(t==="click")return Vs(r)}function Q1(t,r){if(t==="input"||t==="change")return Vs(r)}function q1(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var gn=typeof Object.is=="function"?Object.is:q1;function Ti(t,r){if(gn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!h.call(r,f)||!gn(t[f],r[f]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oh(t,r){var s=Lh(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=r&&c>=r)return{node:s,offset:r-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Lh(s)}}function Mh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Mh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function zh(){for(var t=window,r=be();r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=be(t.document)}return r}function Lc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function G1(t){var r=zh(),s=t.focusedElem,c=t.selectionRange;if(r!==s&&s&&s.ownerDocument&&Mh(s.ownerDocument.documentElement,s)){if(c!==null&&Lc(s)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(t,s.value.length);else if(t=(r=s.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!t.extend&&m>c&&(f=c,c=m,m=f),f=Oh(s,m);var b=Oh(s,c);f&&b&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),m>c?(t.addRange(r),t.extend(b.node,b.offset)):(r.setEnd(b.node,b.offset),t.addRange(r)))}}for(r=[],t=s;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)t=r[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y1=p&&"documentMode"in document&&11>=document.documentMode,bo=null,Oc=null,Ri=null,Mc=!1;function _h(t,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Mc||bo==null||bo!==be(c)||(c=bo,"selectionStart"in c&&Lc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ri&&Ti(Ri,c)||(Ri=c,c=Gs(Oc,"onSelect"),0<c.length&&(r=new $c("onSelect","select",null,r,s),t.push({event:r,listeners:c}),r.target=bo)))}function Ks(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var ko={animationend:Ks("Animation","AnimationEnd"),animationiteration:Ks("Animation","AnimationIteration"),animationstart:Ks("Animation","AnimationStart"),transitionend:Ks("Transition","TransitionEnd")},zc={},Fh={};p&&(Fh=document.createElement("div").style,"AnimationEvent"in window||(delete ko.animationend.animation,delete ko.animationiteration.animation,delete ko.animationstart.animation),"TransitionEvent"in window||delete ko.transitionend.transition);function Qs(t){if(zc[t])return zc[t];if(!ko[t])return t;var r=ko[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Fh)return zc[t]=r[s];return t}var Bh=Qs("animationend"),Wh=Qs("animationiteration"),Hh=Qs("animationstart"),Uh=Qs("transitionend"),Vh=new Map,Kh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,r){Vh.set(t,r),u(r,[t])}for(var _c=0;_c<Kh.length;_c++){var Fc=Kh[_c],X1=Fc.toLowerCase(),J1=Fc[0].toUpperCase()+Fc.slice(1);hr(X1,"on"+J1)}hr(Bh,"onAnimationEnd"),hr(Wh,"onAnimationIteration"),hr(Hh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(Uh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function Qh(t,r,s){var c=t.type||"unknown-event";t.currentTarget=s,Xv(c,r,void 0,t),t.currentTarget=null}function qh(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],f=c.event;c=c.listeners;e:{var m=void 0;if(r)for(var b=c.length-1;0<=b;b--){var D=c[b],I=D.instance,q=D.currentTarget;if(D=D.listener,I!==m&&f.isPropagationStopped())break e;Qh(f,D,q),m=I}else for(b=0;b<c.length;b++){if(D=c[b],I=D.instance,q=D.currentTarget,D=D.listener,I!==m&&f.isPropagationStopped())break e;Qh(f,D,q),m=I}}}if(Ds)throw t=xc,Ds=!1,xc=null,t}function Qe(t,r){var s=r[qc];s===void 0&&(s=r[qc]=new Set);var c=t+"__bubble";s.has(c)||(Gh(r,t,2,!1),s.add(c))}function Bc(t,r,s){var c=0;r&&(c|=4),Gh(s,t,c,r)}var qs="_reactListening"+Math.random().toString(36).slice(2);function Pi(t){if(!t[qs]){t[qs]=!0,i.forEach(function(s){s!=="selectionchange"&&(Z1.has(s)||Bc(s,!1,t),Bc(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[qs]||(r[qs]=!0,Bc("selectionchange",!1,r))}}function Gh(t,r,s,c){switch(yh(r)){case 1:var f=p1;break;case 4:f=h1;break;default:f=jc}s=f.bind(null,r,s,t),f=void 0,!gc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(r,s,{capture:!0,passive:f}):t.addEventListener(r,s,!0):f!==void 0?t.addEventListener(r,s,{passive:f}):t.addEventListener(r,s,!1)}function Wc(t,r,s,c,f){var m=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var D=c.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(b===4)for(b=c.return;b!==null;){var I=b.tag;if((I===3||I===4)&&(I=b.stateNode.containerInfo,I===f||I.nodeType===8&&I.parentNode===f))return;b=b.return}for(;D!==null;){if(b=Fr(D),b===null)return;if(I=b.tag,I===5||I===6){c=m=b;continue e}D=D.parentNode}}c=c.return}eh(function(){var q=m,oe=pc(s),ae=[];e:{var re=Vh.get(t);if(re!==void 0){var ye=$c,ve=t;switch(t){case"keypress":if(Ws(s)===0)break e;case"keydown":case"keyup":ye=T1;break;case"focusin":ve="focus",ye=Rc;break;case"focusout":ve="blur",ye=Rc;break;case"beforeblur":case"afterblur":ye=Rc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ye=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ye=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ye=P1;break;case Bh:case Wh:case Hh:ye=v1;break;case Uh:ye=N1;break;case"scroll":ye=m1;break;case"wheel":ye=O1;break;case"copy":case"cut":case"paste":ye=k1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ye=Sh}var ke=(r&4)!==0,rt=!ke&&t==="scroll",U=ke?re!==null?re+"Capture":null:re;ke=[];for(var _=q,V;_!==null;){V=_;var de=V.stateNode;if(V.tag===5&&de!==null&&(V=de,U!==null&&(de=hi(_,U),de!=null&&ke.push(Ii(_,de,V)))),rt)break;_=_.return}0<ke.length&&(re=new ye(re,ve,null,s,oe),ae.push({event:re,listeners:ke}))}}if(!(r&7)){e:{if(re=t==="mouseover"||t==="pointerover",ye=t==="mouseout"||t==="pointerout",re&&s!==fc&&(ve=s.relatedTarget||s.fromElement)&&(Fr(ve)||ve[qn]))break e;if((ye||re)&&(re=oe.window===oe?oe:(re=oe.ownerDocument)?re.defaultView||re.parentWindow:window,ye?(ve=s.relatedTarget||s.toElement,ye=q,ve=ve?Fr(ve):null,ve!==null&&(rt=_r(ve),ve!==rt||ve.tag!==5&&ve.tag!==6)&&(ve=null)):(ye=null,ve=q),ye!==ve)){if(ke=bh,de="onMouseLeave",U="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(ke=Sh,de="onPointerLeave",U="onPointerEnter",_="pointer"),rt=ye==null?re:Eo(ye),V=ve==null?re:Eo(ve),re=new ke(de,_+"leave",ye,s,oe),re.target=rt,re.relatedTarget=V,de=null,Fr(oe)===q&&(ke=new ke(U,_+"enter",ve,s,oe),ke.target=V,ke.relatedTarget=rt,de=ke),rt=de,ye&&ve)t:{for(ke=ye,U=ve,_=0,V=ke;V;V=So(V))_++;for(V=0,de=U;de;de=So(de))V++;for(;0<_-V;)ke=So(ke),_--;for(;0<V-_;)U=So(U),V--;for(;_--;){if(ke===U||U!==null&&ke===U.alternate)break t;ke=So(ke),U=So(U)}ke=null}else ke=null;ye!==null&&Yh(ae,re,ye,ke,!1),ve!==null&&rt!==null&&Yh(ae,rt,ve,ke,!0)}}e:{if(re=q?Eo(q):window,ye=re.nodeName&&re.nodeName.toLowerCase(),ye==="select"||ye==="input"&&re.type==="file")var Se=H1;else if(Th(re))if(Dh)Se=Q1;else{Se=V1;var Ee=U1}else(ye=re.nodeName)&&ye.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(Se=K1);if(Se&&(Se=Se(t,q))){Rh(ae,Se,s,oe);break e}Ee&&Ee(t,re,q),t==="focusout"&&(Ee=re._wrapperState)&&Ee.controlled&&re.type==="number"&&tn(re,"number",re.value)}switch(Ee=q?Eo(q):window,t){case"focusin":(Th(Ee)||Ee.contentEditable==="true")&&(bo=Ee,Oc=q,Ri=null);break;case"focusout":Ri=Oc=bo=null;break;case"mousedown":Mc=!0;break;case"contextmenu":case"mouseup":case"dragend":Mc=!1,_h(ae,s,oe);break;case"selectionchange":if(Y1)break;case"keydown":case"keyup":_h(ae,s,oe)}var Ce;if(Pc)e:{switch(t){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else vo?$h(t,s)&&($e="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&($e="onCompositionStart");$e&&(jh&&s.locale!=="ko"&&(vo||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&vo&&(Ce=wh()):(pr=oe,Cc="value"in pr?pr.value:pr.textContent,vo=!0)),Ee=Gs(q,$e),0<Ee.length&&($e=new kh($e,t,null,s,oe),ae.push({event:$e,listeners:Ee}),Ce?$e.data=Ce:(Ce=Ah(s),Ce!==null&&($e.data=Ce)))),(Ce=z1?_1(t,s):F1(t,s))&&(q=Gs(q,"onBeforeInput"),0<q.length&&(oe=new kh("onBeforeInput","beforeinput",null,s,oe),ae.push({event:oe,listeners:q}),oe.data=Ce))}qh(ae,r)})}function Ii(t,r,s){return{instance:t,listener:r,currentTarget:s}}function Gs(t,r){for(var s=r+"Capture",c=[];t!==null;){var f=t,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=hi(t,s),m!=null&&c.unshift(Ii(t,m,f)),m=hi(t,r),m!=null&&c.push(Ii(t,m,f))),t=t.return}return c}function So(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yh(t,r,s,c,f){for(var m=r._reactName,b=[];s!==null&&s!==c;){var D=s,I=D.alternate,q=D.stateNode;if(I!==null&&I===c)break;D.tag===5&&q!==null&&(D=q,f?(I=hi(s,m),I!=null&&b.unshift(Ii(s,I,D))):f||(I=hi(s,m),I!=null&&b.push(Ii(s,I,D)))),s=s.return}b.length!==0&&t.push({event:r,listeners:b})}var eb=/\r\n?/g,tb=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(eb,`
`).replace(tb,"")}function Ys(t,r,s){if(r=Xh(r),Xh(t)!==r&&s)throw Error(o(425))}function Xs(){}var Hc=null,Uc=null;function Vc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kc=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(ob)}:Kc;function ob(t){setTimeout(function(){throw t})}function Qc(t,r){var s=r,c=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(c===0){t.removeChild(f),Si(r);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=f}while(s);Si(r)}function mr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function Zh(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}var jo=Math.random().toString(36).slice(2),In="__reactFiber$"+jo,Ni="__reactProps$"+jo,qn="__reactContainer$"+jo,qc="__reactEvents$"+jo,ib="__reactListeners$"+jo,sb="__reactHandles$"+jo;function Fr(t){var r=t[In];if(r)return r;for(var s=t.parentNode;s;){if(r=s[qn]||s[In]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=Zh(t);t!==null;){if(s=t[In])return s;t=Zh(t)}return r}t=s,s=t.parentNode}return null}function Li(t){return t=t[In]||t[qn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Eo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function Js(t){return t[Ni]||null}var Gc=[],Co=-1;function gr(t){return{current:t}}function qe(t){0>Co||(t.current=Gc[Co],Gc[Co]=null,Co--)}function Ve(t,r){Co++,Gc[Co]=t.current,t.current=r}var xr={},kt=gr(xr),It=gr(!1),Br=xr;function $o(t,r){var s=t.type.contextTypes;if(!s)return xr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in s)f[m]=r[m];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nt(t){return t=t.childContextTypes,t!=null}function Zs(){qe(It),qe(kt)}function em(t,r,s){if(kt.current!==xr)throw Error(o(168));Ve(kt,r),Ve(It,s)}function tm(t,r,s){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(o(108,le(t)||"Unknown",f));return F({},s,c)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xr,Br=kt.current,Ve(kt,t),Ve(It,It.current),!0}function nm(t,r,s){var c=t.stateNode;if(!c)throw Error(o(169));s?(t=tm(t,r,Br),c.__reactInternalMemoizedMergedChildContext=t,qe(It),qe(kt),Ve(kt,t)):qe(It),Ve(It,s)}var Gn=null,tl=!1,Yc=!1;function rm(t){Gn===null?Gn=[t]:Gn.push(t)}function lb(t){tl=!0,rm(t)}function yr(){if(!Yc&&Gn!==null){Yc=!0;var t=0,r=Fe;try{var s=Gn;for(Fe=1;t<s.length;t++){var c=s[t];do c=c(!0);while(c!==null)}Gn=null,tl=!1}catch(f){throw Gn!==null&&(Gn=Gn.slice(t+1)),ih(yc,yr),f}finally{Fe=r,Yc=!1}}return null}var Ao=[],To=0,nl=null,rl=0,nn=[],rn=0,Wr=null,Yn=1,Xn="";function Hr(t,r){Ao[To++]=rl,Ao[To++]=nl,nl=t,rl=r}function om(t,r,s){nn[rn++]=Yn,nn[rn++]=Xn,nn[rn++]=Wr,Wr=t;var c=Yn;t=Xn;var f=32-mn(c)-1;c&=~(1<<f),s+=1;var m=32-mn(r)+f;if(30<m){var b=f-f%5;m=(c&(1<<b)-1).toString(32),c>>=b,f-=b,Yn=1<<32-mn(r)+f|s<<f|c,Xn=m+t}else Yn=1<<m|s<<f|c,Xn=t}function Xc(t){t.return!==null&&(Hr(t,1),om(t,1,0))}function Jc(t){for(;t===nl;)nl=Ao[--To],Ao[To]=null,rl=Ao[--To],Ao[To]=null;for(;t===Wr;)Wr=nn[--rn],nn[rn]=null,Xn=nn[--rn],nn[rn]=null,Yn=nn[--rn],nn[rn]=null}var Ut=null,Vt=null,Ye=!1,xn=null;function im(t,r){var s=an(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=t,r=t.deletions,r===null?(t.deletions=[s],t.flags|=16):r.push(s)}function sm(t,r){switch(t.tag){case 5:var s=t.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Ut=t,Vt=mr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Ut=t,Vt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=Wr!==null?{id:Yn,overflow:Xn}:null,t.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=an(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,Ut=t,Vt=null,!0):!1;default:return!1}}function Zc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function eu(t){if(Ye){var r=Vt;if(r){var s=r;if(!sm(t,r)){if(Zc(t))throw Error(o(418));r=mr(s.nextSibling);var c=Ut;r&&sm(t,r)?im(c,s):(t.flags=t.flags&-4097|2,Ye=!1,Ut=t)}}else{if(Zc(t))throw Error(o(418));t.flags=t.flags&-4097|2,Ye=!1,Ut=t}}}function lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function ol(t){if(t!==Ut)return!1;if(!Ye)return lm(t),Ye=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Vc(t.type,t.memoizedProps)),r&&(r=Vt)){if(Zc(t))throw am(),Error(o(418));for(;r;)im(t,r),r=mr(r.nextSibling)}if(lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(r===0){Vt=mr(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}t=t.nextSibling}Vt=null}}else Vt=Ut?mr(t.stateNode.nextSibling):null;return!0}function am(){for(var t=Vt;t;)t=mr(t.nextSibling)}function Ro(){Vt=Ut=null,Ye=!1}function tu(t){xn===null?xn=[t]:xn.push(t)}var ab=N.ReactCurrentBatchConfig;function Oi(t,r,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var c=s.stateNode}if(!c)throw Error(o(147,t));var f=c,m=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===m?r.ref:(r=function(b){var D=f.refs;b===null?delete D[m]:D[m]=b},r._stringRef=m,r)}if(typeof t!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,t))}return t}function il(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function cm(t){var r=t._init;return r(t._payload)}function um(t){function r(U,_){if(t){var V=U.deletions;V===null?(U.deletions=[_],U.flags|=16):V.push(_)}}function s(U,_){if(!t)return null;for(;_!==null;)r(U,_),_=_.sibling;return null}function c(U,_){for(U=new Map;_!==null;)_.key!==null?U.set(_.key,_):U.set(_.index,_),_=_.sibling;return U}function f(U,_){return U=Cr(U,_),U.index=0,U.sibling=null,U}function m(U,_,V){return U.index=V,t?(V=U.alternate,V!==null?(V=V.index,V<_?(U.flags|=2,_):V):(U.flags|=2,_)):(U.flags|=1048576,_)}function b(U){return t&&U.alternate===null&&(U.flags|=2),U}function D(U,_,V,de){return _===null||_.tag!==6?(_=Ku(V,U.mode,de),_.return=U,_):(_=f(_,V),_.return=U,_)}function I(U,_,V,de){var Se=V.type;return Se===Y?oe(U,_,V.props.children,de,V.key):_!==null&&(_.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===T&&cm(Se)===_.type)?(de=f(_,V.props),de.ref=Oi(U,_,V),de.return=U,de):(de=Tl(V.type,V.key,V.props,null,U.mode,de),de.ref=Oi(U,_,V),de.return=U,de)}function q(U,_,V,de){return _===null||_.tag!==4||_.stateNode.containerInfo!==V.containerInfo||_.stateNode.implementation!==V.implementation?(_=Qu(V,U.mode,de),_.return=U,_):(_=f(_,V.children||[]),_.return=U,_)}function oe(U,_,V,de,Se){return _===null||_.tag!==7?(_=Xr(V,U.mode,de,Se),_.return=U,_):(_=f(_,V),_.return=U,_)}function ae(U,_,V){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ku(""+_,U.mode,V),_.return=U,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case z:return V=Tl(_.type,_.key,_.props,null,U.mode,V),V.ref=Oi(U,null,_),V.return=U,V;case K:return _=Qu(_,U.mode,V),_.return=U,_;case T:var de=_._init;return ae(U,de(_._payload),V)}if(Kn(_)||ee(_))return _=Xr(_,U.mode,V,null),_.return=U,_;il(U,_)}return null}function re(U,_,V,de){var Se=_!==null?_.key:null;if(typeof V=="string"&&V!==""||typeof V=="number")return Se!==null?null:D(U,_,""+V,de);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case z:return V.key===Se?I(U,_,V,de):null;case K:return V.key===Se?q(U,_,V,de):null;case T:return Se=V._init,re(U,_,Se(V._payload),de)}if(Kn(V)||ee(V))return Se!==null?null:oe(U,_,V,de,null);il(U,V)}return null}function ye(U,_,V,de,Se){if(typeof de=="string"&&de!==""||typeof de=="number")return U=U.get(V)||null,D(_,U,""+de,Se);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case z:return U=U.get(de.key===null?V:de.key)||null,I(_,U,de,Se);case K:return U=U.get(de.key===null?V:de.key)||null,q(_,U,de,Se);case T:var Ee=de._init;return ye(U,_,V,Ee(de._payload),Se)}if(Kn(de)||ee(de))return U=U.get(V)||null,oe(_,U,de,Se,null);il(_,de)}return null}function ve(U,_,V,de){for(var Se=null,Ee=null,Ce=_,$e=_=0,dt=null;Ce!==null&&$e<V.length;$e++){Ce.index>$e?(dt=Ce,Ce=null):dt=Ce.sibling;var Le=re(U,Ce,V[$e],de);if(Le===null){Ce===null&&(Ce=dt);break}t&&Ce&&Le.alternate===null&&r(U,Ce),_=m(Le,_,$e),Ee===null?Se=Le:Ee.sibling=Le,Ee=Le,Ce=dt}if($e===V.length)return s(U,Ce),Ye&&Hr(U,$e),Se;if(Ce===null){for(;$e<V.length;$e++)Ce=ae(U,V[$e],de),Ce!==null&&(_=m(Ce,_,$e),Ee===null?Se=Ce:Ee.sibling=Ce,Ee=Ce);return Ye&&Hr(U,$e),Se}for(Ce=c(U,Ce);$e<V.length;$e++)dt=ye(Ce,U,$e,V[$e],de),dt!==null&&(t&&dt.alternate!==null&&Ce.delete(dt.key===null?$e:dt.key),_=m(dt,_,$e),Ee===null?Se=dt:Ee.sibling=dt,Ee=dt);return t&&Ce.forEach(function($r){return r(U,$r)}),Ye&&Hr(U,$e),Se}function ke(U,_,V,de){var Se=ee(V);if(typeof Se!="function")throw Error(o(150));if(V=Se.call(V),V==null)throw Error(o(151));for(var Ee=Se=null,Ce=_,$e=_=0,dt=null,Le=V.next();Ce!==null&&!Le.done;$e++,Le=V.next()){Ce.index>$e?(dt=Ce,Ce=null):dt=Ce.sibling;var $r=re(U,Ce,Le.value,de);if($r===null){Ce===null&&(Ce=dt);break}t&&Ce&&$r.alternate===null&&r(U,Ce),_=m($r,_,$e),Ee===null?Se=$r:Ee.sibling=$r,Ee=$r,Ce=dt}if(Le.done)return s(U,Ce),Ye&&Hr(U,$e),Se;if(Ce===null){for(;!Le.done;$e++,Le=V.next())Le=ae(U,Le.value,de),Le!==null&&(_=m(Le,_,$e),Ee===null?Se=Le:Ee.sibling=Le,Ee=Le);return Ye&&Hr(U,$e),Se}for(Ce=c(U,Ce);!Le.done;$e++,Le=V.next())Le=ye(Ce,U,$e,Le.value,de),Le!==null&&(t&&Le.alternate!==null&&Ce.delete(Le.key===null?$e:Le.key),_=m(Le,_,$e),Ee===null?Se=Le:Ee.sibling=Le,Ee=Le);return t&&Ce.forEach(function(Fb){return r(U,Fb)}),Ye&&Hr(U,$e),Se}function rt(U,_,V,de){if(typeof V=="object"&&V!==null&&V.type===Y&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case z:e:{for(var Se=V.key,Ee=_;Ee!==null;){if(Ee.key===Se){if(Se=V.type,Se===Y){if(Ee.tag===7){s(U,Ee.sibling),_=f(Ee,V.props.children),_.return=U,U=_;break e}}else if(Ee.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===T&&cm(Se)===Ee.type){s(U,Ee.sibling),_=f(Ee,V.props),_.ref=Oi(U,Ee,V),_.return=U,U=_;break e}s(U,Ee);break}else r(U,Ee);Ee=Ee.sibling}V.type===Y?(_=Xr(V.props.children,U.mode,de,V.key),_.return=U,U=_):(de=Tl(V.type,V.key,V.props,null,U.mode,de),de.ref=Oi(U,_,V),de.return=U,U=de)}return b(U);case K:e:{for(Ee=V.key;_!==null;){if(_.key===Ee)if(_.tag===4&&_.stateNode.containerInfo===V.containerInfo&&_.stateNode.implementation===V.implementation){s(U,_.sibling),_=f(_,V.children||[]),_.return=U,U=_;break e}else{s(U,_);break}else r(U,_);_=_.sibling}_=Qu(V,U.mode,de),_.return=U,U=_}return b(U);case T:return Ee=V._init,rt(U,_,Ee(V._payload),de)}if(Kn(V))return ve(U,_,V,de);if(ee(V))return ke(U,_,V,de);il(U,V)}return typeof V=="string"&&V!==""||typeof V=="number"?(V=""+V,_!==null&&_.tag===6?(s(U,_.sibling),_=f(_,V),_.return=U,U=_):(s(U,_),_=Ku(V,U.mode,de),_.return=U,U=_),b(U)):s(U,_)}return rt}var Do=um(!0),dm=um(!1),sl=gr(null),ll=null,Po=null,nu=null;function ru(){nu=Po=ll=null}function ou(t){var r=sl.current;qe(sl),t._currentValue=r}function iu(t,r,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===s)break;t=t.return}}function Io(t,r){ll=t,nu=Po=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(Lt=!0),t.firstContext=null)}function on(t){var r=t._currentValue;if(nu!==t)if(t={context:t,memoizedValue:r,next:null},Po===null){if(ll===null)throw Error(o(308));Po=t,ll.dependencies={lanes:0,firstContext:t}}else Po=Po.next=t;return r}var Ur=null;function su(t){Ur===null?Ur=[t]:Ur.push(t)}function fm(t,r,s,c){var f=r.interleaved;return f===null?(s.next=s,su(r)):(s.next=f.next,f.next=s),r.interleaved=s,Jn(t,c)}function Jn(t,r){t.lanes|=r;var s=t.alternate;for(s!==null&&(s.lanes|=r),s=t,t=t.return;t!==null;)t.childLanes|=r,s=t.alternate,s!==null&&(s.childLanes|=r),s=t,t=t.return;return s.tag===3?s.stateNode:null}var wr=!1;function lu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zn(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function vr(t,r,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,Ne&2){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,Jn(t,s)}return f=c.interleaved,f===null?(r.next=r,su(c)):(r.next=f.next,f.next=r),c.interleaved=r,Jn(t,s)}function al(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,bc(t,s)}}function hm(t,r){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};m===null?f=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?f=m=r:m=m.next=r}else f=m=r;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}function cl(t,r,s,c){var f=t.updateQueue;wr=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var I=D,q=I.next;I.next=null,b===null?m=q:b.next=q,b=I;var oe=t.alternate;oe!==null&&(oe=oe.updateQueue,D=oe.lastBaseUpdate,D!==b&&(D===null?oe.firstBaseUpdate=q:D.next=q,oe.lastBaseUpdate=I))}if(m!==null){var ae=f.baseState;b=0,oe=q=I=null,D=m;do{var re=D.lane,ye=D.eventTime;if((c&re)===re){oe!==null&&(oe=oe.next={eventTime:ye,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ve=t,ke=D;switch(re=r,ye=s,ke.tag){case 1:if(ve=ke.payload,typeof ve=="function"){ae=ve.call(ye,ae,re);break e}ae=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=ke.payload,re=typeof ve=="function"?ve.call(ye,ae,re):ve,re==null)break e;ae=F({},ae,re);break e;case 2:wr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,re=f.effects,re===null?f.effects=[D]:re.push(D))}else ye={eventTime:ye,lane:re,tag:D.tag,payload:D.payload,callback:D.callback,next:null},oe===null?(q=oe=ye,I=ae):oe=oe.next=ye,b|=re;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;re=D,D=re.next,re.next=null,f.lastBaseUpdate=re,f.shared.pending=null}}while(!0);if(oe===null&&(I=ae),f.baseState=I,f.firstBaseUpdate=q,f.lastBaseUpdate=oe,r=f.shared.interleaved,r!==null){f=r;do b|=f.lane,f=f.next;while(f!==r)}else m===null&&(f.shared.lanes=0);Qr|=b,t.lanes=b,t.memoizedState=ae}}function mm(t,r,s){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],f=c.callback;if(f!==null){if(c.callback=null,c=s,typeof f!="function")throw Error(o(191,f));f.call(c)}}}var Mi={},Nn=gr(Mi),zi=gr(Mi),_i=gr(Mi);function Vr(t){if(t===Mi)throw Error(o(174));return t}function au(t,r){switch(Ve(_i,r),Ve(zi,t),Ve(Nn,Mi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:cc(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=cc(r,t)}qe(Nn),Ve(Nn,r)}function No(){qe(Nn),qe(zi),qe(_i)}function gm(t){Vr(_i.current);var r=Vr(Nn.current),s=cc(r,t.type);r!==s&&(Ve(zi,t),Ve(Nn,s))}function cu(t){zi.current===t&&(qe(Nn),qe(zi))}var Xe=gr(0);function ul(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var uu=[];function du(){for(var t=0;t<uu.length;t++)uu[t]._workInProgressVersionPrimary=null;uu.length=0}var dl=N.ReactCurrentDispatcher,fu=N.ReactCurrentBatchConfig,Kr=0,Je=null,lt=null,ct=null,fl=!1,Fi=!1,Bi=0,cb=0;function St(){throw Error(o(321))}function pu(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!gn(t[s],r[s]))return!1;return!0}function hu(t,r,s,c,f,m){if(Kr=m,Je=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,dl.current=t===null||t.memoizedState===null?pb:hb,t=s(c,f),Fi){m=0;do{if(Fi=!1,Bi=0,25<=m)throw Error(o(301));m+=1,ct=lt=null,r.updateQueue=null,dl.current=mb,t=s(c,f)}while(Fi)}if(dl.current=ml,r=lt!==null&&lt.next!==null,Kr=0,ct=lt=Je=null,fl=!1,r)throw Error(o(300));return t}function mu(){var t=Bi!==0;return Bi=0,t}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Je.memoizedState=ct=t:ct=ct.next=t,ct}function sn(){if(lt===null){var t=Je.alternate;t=t!==null?t.memoizedState:null}else t=lt.next;var r=ct===null?Je.memoizedState:ct.next;if(r!==null)ct=r,lt=t;else{if(t===null)throw Error(o(310));lt=t,t={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},ct===null?Je.memoizedState=ct=t:ct=ct.next=t}return ct}function Wi(t,r){return typeof r=="function"?r(t):r}function gu(t){var r=sn(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=lt,f=c.baseQueue,m=s.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}c.baseQueue=f=m,s.pending=null}if(f!==null){m=f.next,c=c.baseState;var D=b=null,I=null,q=m;do{var oe=q.lane;if((Kr&oe)===oe)I!==null&&(I=I.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),c=q.hasEagerState?q.eagerState:t(c,q.action);else{var ae={lane:oe,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};I===null?(D=I=ae,b=c):I=I.next=ae,Je.lanes|=oe,Qr|=oe}q=q.next}while(q!==null&&q!==m);I===null?b=c:I.next=D,gn(c,r.memoizedState)||(Lt=!0),r.memoizedState=c,r.baseState=b,r.baseQueue=I,s.lastRenderedState=c}if(t=s.interleaved,t!==null){f=t;do m=f.lane,Je.lanes|=m,Qr|=m,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function xu(t){var r=sn(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=s.dispatch,f=s.pending,m=r.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do m=t(m,b.action),b=b.next;while(b!==f);gn(m,r.memoizedState)||(Lt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),s.lastRenderedState=m}return[m,c]}function xm(){}function ym(t,r){var s=Je,c=sn(),f=r(),m=!gn(c.memoizedState,f);if(m&&(c.memoizedState=f,Lt=!0),c=c.queue,yu(bm.bind(null,s,c,t),[t]),c.getSnapshot!==r||m||ct!==null&&ct.memoizedState.tag&1){if(s.flags|=2048,Hi(9,vm.bind(null,s,c,f,r),void 0,null),ut===null)throw Error(o(349));Kr&30||wm(s,r,f)}return f}function wm(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function vm(t,r,s,c){r.value=s,r.getSnapshot=c,km(r)&&Sm(t)}function bm(t,r,s){return s(function(){km(r)&&Sm(t)})}function km(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!gn(t,s)}catch{return!0}}function Sm(t){var r=Jn(t,1);r!==null&&bn(r,t,1,-1)}function jm(t){var r=Ln();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:t},r.queue=t,t=t.dispatch=fb.bind(null,Je,t),[r.memoizedState,t]}function Hi(t,r,s,c){return t={tag:t,create:r,destroy:s,deps:c,next:null},r=Je.updateQueue,r===null?(r={lastEffect:null,stores:null},Je.updateQueue=r,r.lastEffect=t.next=t):(s=r.lastEffect,s===null?r.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,r.lastEffect=t)),t}function Em(){return sn().memoizedState}function pl(t,r,s,c){var f=Ln();Je.flags|=t,f.memoizedState=Hi(1|r,s,void 0,c===void 0?null:c)}function hl(t,r,s,c){var f=sn();c=c===void 0?null:c;var m=void 0;if(lt!==null){var b=lt.memoizedState;if(m=b.destroy,c!==null&&pu(c,b.deps)){f.memoizedState=Hi(r,s,m,c);return}}Je.flags|=t,f.memoizedState=Hi(1|r,s,m,c)}function Cm(t,r){return pl(8390656,8,t,r)}function yu(t,r){return hl(2048,8,t,r)}function $m(t,r){return hl(4,2,t,r)}function Am(t,r){return hl(4,4,t,r)}function Tm(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function Rm(t,r,s){return s=s!=null?s.concat([t]):null,hl(4,4,Tm.bind(null,r,t),s)}function wu(){}function Dm(t,r){var s=sn();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&pu(r,c[1])?c[0]:(s.memoizedState=[t,r],t)}function Pm(t,r){var s=sn();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&pu(r,c[1])?c[0]:(t=t(),s.memoizedState=[t,r],t)}function Im(t,r,s){return Kr&21?(gn(s,r)||(s=ch(),Je.lanes|=s,Qr|=s,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=s)}function ub(t,r){var s=Fe;Fe=s!==0&&4>s?s:4,t(!0);var c=fu.transition;fu.transition={};try{t(!1),r()}finally{Fe=s,fu.transition=c}}function Nm(){return sn().memoizedState}function db(t,r,s){var c=jr(t);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},Lm(t))Om(r,s);else if(s=fm(t,r,s,c),s!==null){var f=Pt();bn(s,t,c,f),Mm(s,r,c)}}function fb(t,r,s){var c=jr(t),f={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(Lm(t))Om(r,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,D=m(b,s);if(f.hasEagerState=!0,f.eagerState=D,gn(D,b)){var I=r.interleaved;I===null?(f.next=f,su(r)):(f.next=I.next,I.next=f),r.interleaved=f;return}}catch{}finally{}s=fm(t,r,f,c),s!==null&&(f=Pt(),bn(s,t,c,f),Mm(s,r,c))}}function Lm(t){var r=t.alternate;return t===Je||r!==null&&r===Je}function Om(t,r){Fi=fl=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function Mm(t,r,s){if(s&4194240){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,bc(t,s)}}var ml={readContext:on,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useInsertionEffect:St,useLayoutEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useMutableSource:St,useSyncExternalStore:St,useId:St,unstable_isNewReconciler:!1},pb={readContext:on,useCallback:function(t,r){return Ln().memoizedState=[t,r===void 0?null:r],t},useContext:on,useEffect:Cm,useImperativeHandle:function(t,r,s){return s=s!=null?s.concat([t]):null,pl(4194308,4,Tm.bind(null,r,t),s)},useLayoutEffect:function(t,r){return pl(4194308,4,t,r)},useInsertionEffect:function(t,r){return pl(4,2,t,r)},useMemo:function(t,r){var s=Ln();return r=r===void 0?null:r,t=t(),s.memoizedState=[t,r],t},useReducer:function(t,r,s){var c=Ln();return r=s!==void 0?s(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=db.bind(null,Je,t),[c.memoizedState,t]},useRef:function(t){var r=Ln();return t={current:t},r.memoizedState=t},useState:jm,useDebugValue:wu,useDeferredValue:function(t){return Ln().memoizedState=t},useTransition:function(){var t=jm(!1),r=t[0];return t=ub.bind(null,t[1]),Ln().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,s){var c=Je,f=Ln();if(Ye){if(s===void 0)throw Error(o(407));s=s()}else{if(s=r(),ut===null)throw Error(o(349));Kr&30||wm(c,r,s)}f.memoizedState=s;var m={value:s,getSnapshot:r};return f.queue=m,Cm(bm.bind(null,c,m,t),[t]),c.flags|=2048,Hi(9,vm.bind(null,c,m,s,r),void 0,null),s},useId:function(){var t=Ln(),r=ut.identifierPrefix;if(Ye){var s=Xn,c=Yn;s=(c&~(1<<32-mn(c)-1)).toString(32)+s,r=":"+r+"R"+s,s=Bi++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=cb++,r=":"+r+"r"+s.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},hb={readContext:on,useCallback:Dm,useContext:on,useEffect:yu,useImperativeHandle:Rm,useInsertionEffect:$m,useLayoutEffect:Am,useMemo:Pm,useReducer:gu,useRef:Em,useState:function(){return gu(Wi)},useDebugValue:wu,useDeferredValue:function(t){var r=sn();return Im(r,lt.memoizedState,t)},useTransition:function(){var t=gu(Wi)[0],r=sn().memoizedState;return[t,r]},useMutableSource:xm,useSyncExternalStore:ym,useId:Nm,unstable_isNewReconciler:!1},mb={readContext:on,useCallback:Dm,useContext:on,useEffect:yu,useImperativeHandle:Rm,useInsertionEffect:$m,useLayoutEffect:Am,useMemo:Pm,useReducer:xu,useRef:Em,useState:function(){return xu(Wi)},useDebugValue:wu,useDeferredValue:function(t){var r=sn();return lt===null?r.memoizedState=t:Im(r,lt.memoizedState,t)},useTransition:function(){var t=xu(Wi)[0],r=sn().memoizedState;return[t,r]},useMutableSource:xm,useSyncExternalStore:ym,useId:Nm,unstable_isNewReconciler:!1};function yn(t,r){if(t&&t.defaultProps){r=F({},r),t=t.defaultProps;for(var s in t)r[s]===void 0&&(r[s]=t[s]);return r}return r}function vu(t,r,s,c){r=t.memoizedState,s=s(c,r),s=s==null?r:F({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var gl={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,r,s){t=t._reactInternals;var c=Pt(),f=jr(t),m=Zn(c,f);m.payload=r,s!=null&&(m.callback=s),r=vr(t,m,f),r!==null&&(bn(r,t,f,c),al(r,t,f))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var c=Pt(),f=jr(t),m=Zn(c,f);m.tag=1,m.payload=r,s!=null&&(m.callback=s),r=vr(t,m,f),r!==null&&(bn(r,t,f,c),al(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=Pt(),c=jr(t),f=Zn(s,c);f.tag=2,r!=null&&(f.callback=r),r=vr(t,f,c),r!==null&&(bn(r,t,c,s),al(r,t,c))}};function zm(t,r,s,c,f,m,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,m,b):r.prototype&&r.prototype.isPureReactComponent?!Ti(s,c)||!Ti(f,m):!0}function _m(t,r,s){var c=!1,f=xr,m=r.contextType;return typeof m=="object"&&m!==null?m=on(m):(f=Nt(r)?Br:kt.current,c=r.contextTypes,m=(c=c!=null)?$o(t,f):xr),r=new r(s,m),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=gl,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=m),r}function Fm(t,r,s,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==t&&gl.enqueueReplaceState(r,r.state,null)}function bu(t,r,s,c){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},lu(t);var m=r.contextType;typeof m=="object"&&m!==null?f.context=on(m):(m=Nt(r)?Br:kt.current,f.context=$o(t,m)),f.state=t.memoizedState,m=r.getDerivedStateFromProps,typeof m=="function"&&(vu(t,r,m,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&gl.enqueueReplaceState(f,f.state,null),cl(t,s,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Lo(t,r){try{var s="",c=r;do s+=Q(c),c=c.return;while(c);var f=s}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:r,stack:f,digest:null}}function ku(t,r,s){return{value:t,source:null,stack:s??null,digest:r??null}}function Su(t,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var gb=typeof WeakMap=="function"?WeakMap:Map;function Bm(t,r,s){s=Zn(-1,s),s.tag=3,s.payload={element:null};var c=r.value;return s.callback=function(){Sl||(Sl=!0,zu=c),Su(t,r)},s}function Wm(t,r,s){s=Zn(-1,s),s.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;s.payload=function(){return c(f)},s.callback=function(){Su(t,r)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(s.callback=function(){Su(t,r),typeof c!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})}),s}function Hm(t,r,s){var c=t.pingCache;if(c===null){c=t.pingCache=new gb;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(s)||(f.add(s),t=Rb.bind(null,t,r,s),r.then(t,t))}function Um(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function Vm(t,r,s,c,f){return t.mode&1?(t.flags|=65536,t.lanes=f,t):(t===r?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=Zn(-1,1),r.tag=2,vr(s,r,1))),s.lanes|=1),t)}var xb=N.ReactCurrentOwner,Lt=!1;function Dt(t,r,s,c){r.child=t===null?dm(r,null,s,c):Do(r,t.child,s,c)}function Km(t,r,s,c,f){s=s.render;var m=r.ref;return Io(r,f),c=hu(t,r,s,c,m,f),s=mu(),t!==null&&!Lt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,er(t,r,f)):(Ye&&s&&Xc(r),r.flags|=1,Dt(t,r,c,f),r.child)}function Qm(t,r,s,c,f){if(t===null){var m=s.type;return typeof m=="function"&&!Vu(m)&&m.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=m,qm(t,r,m,c,f)):(t=Tl(s.type,null,c,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(m=t.child,!(t.lanes&f)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ti,s(b,c)&&t.ref===r.ref)return er(t,r,f)}return r.flags|=1,t=Cr(m,c),t.ref=r.ref,t.return=r,r.child=t}function qm(t,r,s,c,f){if(t!==null){var m=t.memoizedProps;if(Ti(m,c)&&t.ref===r.ref)if(Lt=!1,r.pendingProps=c=m,(t.lanes&f)!==0)t.flags&131072&&(Lt=!0);else return r.lanes=t.lanes,er(t,r,f)}return ju(t,r,s,c,f)}function Gm(t,r,s){var c=r.pendingProps,f=c.children,m=t!==null?t.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Mo,Kt),Kt|=s;else{if(!(s&1073741824))return t=m!==null?m.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Ve(Mo,Kt),Kt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:s,Ve(Mo,Kt),Kt|=c}else m!==null?(c=m.baseLanes|s,r.memoizedState=null):c=s,Ve(Mo,Kt),Kt|=c;return Dt(t,r,f,s),r.child}function Ym(t,r){var s=r.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function ju(t,r,s,c,f){var m=Nt(s)?Br:kt.current;return m=$o(r,m),Io(r,f),s=hu(t,r,s,c,m,f),c=mu(),t!==null&&!Lt?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,er(t,r,f)):(Ye&&c&&Xc(r),r.flags|=1,Dt(t,r,s,f),r.child)}function Xm(t,r,s,c,f){if(Nt(s)){var m=!0;el(r)}else m=!1;if(Io(r,f),r.stateNode===null)yl(t,r),_m(r,s,c),bu(r,s,c,f),c=!0;else if(t===null){var b=r.stateNode,D=r.memoizedProps;b.props=D;var I=b.context,q=s.contextType;typeof q=="object"&&q!==null?q=on(q):(q=Nt(s)?Br:kt.current,q=$o(r,q));var oe=s.getDerivedStateFromProps,ae=typeof oe=="function"||typeof b.getSnapshotBeforeUpdate=="function";ae||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(D!==c||I!==q)&&Fm(r,b,c,q),wr=!1;var re=r.memoizedState;b.state=re,cl(r,c,b,f),I=r.memoizedState,D!==c||re!==I||It.current||wr?(typeof oe=="function"&&(vu(r,s,oe,c),I=r.memoizedState),(D=wr||zm(r,s,D,c,re,I,q))?(ae||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(r.flags|=4194308)):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=I),b.props=c,b.state=I,b.context=q,c=D):(typeof b.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{b=r.stateNode,pm(t,r),D=r.memoizedProps,q=r.type===r.elementType?D:yn(r.type,D),b.props=q,ae=r.pendingProps,re=b.context,I=s.contextType,typeof I=="object"&&I!==null?I=on(I):(I=Nt(s)?Br:kt.current,I=$o(r,I));var ye=s.getDerivedStateFromProps;(oe=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(D!==ae||re!==I)&&Fm(r,b,c,I),wr=!1,re=r.memoizedState,b.state=re,cl(r,c,b,f);var ve=r.memoizedState;D!==ae||re!==ve||It.current||wr?(typeof ye=="function"&&(vu(r,s,ye,c),ve=r.memoizedState),(q=wr||zm(r,s,q,c,re,ve,I)||!1)?(oe||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,ve,I),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,ve,I)),typeof b.componentDidUpdate=="function"&&(r.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof b.componentDidUpdate!="function"||D===t.memoizedProps&&re===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&re===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=ve),b.props=c,b.state=ve,b.context=I,c=q):(typeof b.componentDidUpdate!="function"||D===t.memoizedProps&&re===t.memoizedState||(r.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&re===t.memoizedState||(r.flags|=1024),c=!1)}return Eu(t,r,s,c,m,f)}function Eu(t,r,s,c,f,m){Ym(t,r);var b=(r.flags&128)!==0;if(!c&&!b)return f&&nm(r,s,!1),er(t,r,m);c=r.stateNode,xb.current=r;var D=b&&typeof s.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&b?(r.child=Do(r,t.child,null,m),r.child=Do(r,null,D,m)):Dt(t,r,D,m),r.memoizedState=c.state,f&&nm(r,s,!0),r.child}function Jm(t){var r=t.stateNode;r.pendingContext?em(t,r.pendingContext,r.pendingContext!==r.context):r.context&&em(t,r.context,!1),au(t,r.containerInfo)}function Zm(t,r,s,c,f){return Ro(),tu(f),r.flags|=256,Dt(t,r,s,c),r.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function $u(t){return{baseLanes:t,cachePool:null,transitions:null}}function e0(t,r,s){var c=r.pendingProps,f=Xe.current,m=!1,b=(r.flags&128)!==0,D;if((D=b)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(m=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ve(Xe,f&1),t===null)return eu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(b=c.children,t=c.fallback,m?(c=r.mode,m=r.child,b={mode:"hidden",children:b},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=b):m=Rl(b,c,0,null),t=Xr(t,c,s,null),m.return=r,t.return=r,m.sibling=t,r.child=m,r.child.memoizedState=$u(s),r.memoizedState=Cu,t):Au(r,b));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return yb(t,r,b,c,D,f,s);if(m){m=c.fallback,b=r.mode,f=t.child,D=f.sibling;var I={mode:"hidden",children:c.children};return!(b&1)&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=I,r.deletions=null):(c=Cr(f,I),c.subtreeFlags=f.subtreeFlags&14680064),D!==null?m=Cr(D,m):(m=Xr(m,b,s,null),m.flags|=2),m.return=r,c.return=r,c.sibling=m,r.child=c,c=m,m=r.child,b=t.child.memoizedState,b=b===null?$u(s):{baseLanes:b.baseLanes|s,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=t.childLanes&~s,r.memoizedState=Cu,c}return m=t.child,t=m.sibling,c=Cr(m,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=s),c.return=r,c.sibling=null,t!==null&&(s=r.deletions,s===null?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=c,r.memoizedState=null,c}function Au(t,r){return r=Rl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function xl(t,r,s,c){return c!==null&&tu(c),Do(r,t.child,null,s),t=Au(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function yb(t,r,s,c,f,m,b){if(s)return r.flags&256?(r.flags&=-257,c=ku(Error(o(422))),xl(t,r,b,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(m=c.fallback,f=r.mode,c=Rl({mode:"visible",children:c.children},f,0,null),m=Xr(m,f,b,null),m.flags|=2,c.return=r,m.return=r,c.sibling=m,r.child=c,r.mode&1&&Do(r,t.child,null,b),r.child.memoizedState=$u(b),r.memoizedState=Cu,m);if(!(r.mode&1))return xl(t,r,b,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var D=c.dgst;return c=D,m=Error(o(419)),c=ku(m,c,void 0),xl(t,r,b,c)}if(D=(b&t.childLanes)!==0,Lt||D){if(c=ut,c!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|b)?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Jn(t,f),bn(c,t,f,-1))}return Uu(),c=ku(Error(o(421))),xl(t,r,b,c)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Db.bind(null,t),f._reactRetry=r,null):(t=m.treeContext,Vt=mr(f.nextSibling),Ut=r,Ye=!0,xn=null,t!==null&&(nn[rn++]=Yn,nn[rn++]=Xn,nn[rn++]=Wr,Yn=t.id,Xn=t.overflow,Wr=r),r=Au(r,c.children),r.flags|=4096,r)}function t0(t,r,s){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),iu(t.return,r,s)}function Tu(t,r,s,c,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=s,m.tailMode=f)}function n0(t,r,s){var c=r.pendingProps,f=c.revealOrder,m=c.tail;if(Dt(t,r,c.children,s),c=Xe.current,c&2)c=c&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,s,r);else if(t.tag===19)t0(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Ve(Xe,c),!(r.mode&1))r.memoizedState=null;else switch(f){case"forwards":for(s=r.child,f=null;s!==null;)t=s.alternate,t!==null&&ul(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),Tu(r,!1,f,s,m);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&ul(t)===null){r.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Tu(r,!0,s,null,m);break;case"together":Tu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function yl(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function er(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),Qr|=r.lanes,!(s&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,s=Cr(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Cr(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function wb(t,r,s){switch(r.tag){case 3:Jm(r),Ro();break;case 5:gm(r);break;case 1:Nt(r.type)&&el(r);break;case 4:au(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Ve(sl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Ve(Xe,Xe.current&1),r.flags|=128,null):s&r.child.childLanes?e0(t,r,s):(Ve(Xe,Xe.current&1),t=er(t,r,s),t!==null?t.sibling:null);Ve(Xe,Xe.current&1);break;case 19:if(c=(s&r.childLanes)!==0,t.flags&128){if(c)return n0(t,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ve(Xe,Xe.current),c)break;return null;case 22:case 23:return r.lanes=0,Gm(t,r,s)}return er(t,r,s)}var r0,Ru,o0,i0;r0=function(t,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ru=function(){},o0=function(t,r,s,c){var f=t.memoizedProps;if(f!==c){t=r.stateNode,Vr(Nn.current);var m=null;switch(s){case"input":f=_e(t,f),c=_e(t,c),m=[];break;case"select":f=F({},f,{value:void 0}),c=F({},c,{value:void 0}),m=[];break;case"textarea":f=Qn(t,f),c=Qn(t,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Xs)}uc(s,c);var b;s=null;for(q in f)if(!c.hasOwnProperty(q)&&f.hasOwnProperty(q)&&f[q]!=null)if(q==="style"){var D=f[q];for(b in D)D.hasOwnProperty(b)&&(s||(s={}),s[b]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(a.hasOwnProperty(q)?m||(m=[]):(m=m||[]).push(q,null));for(q in c){var I=c[q];if(D=f!=null?f[q]:void 0,c.hasOwnProperty(q)&&I!==D&&(I!=null||D!=null))if(q==="style")if(D){for(b in D)!D.hasOwnProperty(b)||I&&I.hasOwnProperty(b)||(s||(s={}),s[b]="");for(b in I)I.hasOwnProperty(b)&&D[b]!==I[b]&&(s||(s={}),s[b]=I[b])}else s||(m||(m=[]),m.push(q,s)),s=I;else q==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,D=D?D.__html:void 0,I!=null&&D!==I&&(m=m||[]).push(q,I)):q==="children"?typeof I!="string"&&typeof I!="number"||(m=m||[]).push(q,""+I):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(a.hasOwnProperty(q)?(I!=null&&q==="onScroll"&&Qe("scroll",t),m||D===I||(m=[])):(m=m||[]).push(q,I))}s&&(m=m||[]).push("style",s);var q=m;(r.updateQueue=q)&&(r.flags|=4)}},i0=function(t,r,s,c){s!==c&&(r.flags|=4)};function Ui(t,r){if(!Ye)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function jt(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(r)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=s,r}function vb(t,r,s){var c=r.pendingProps;switch(Jc(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(r),null;case 1:return Nt(r.type)&&Zs(),jt(r),null;case 3:return c=r.stateNode,No(),qe(It),qe(kt),du(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(ol(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,xn!==null&&(Bu(xn),xn=null))),Ru(t,r),jt(r),null;case 5:cu(r);var f=Vr(_i.current);if(s=r.type,t!==null&&r.stateNode!=null)o0(t,r,s,c,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return jt(r),null}if(t=Vr(Nn.current),ol(r)){c=r.stateNode,s=r.type;var m=r.memoizedProps;switch(c[In]=r,c[Ni]=m,t=(r.mode&1)!==0,s){case"dialog":Qe("cancel",c),Qe("close",c);break;case"iframe":case"object":case"embed":Qe("load",c);break;case"video":case"audio":for(f=0;f<Di.length;f++)Qe(Di[f],c);break;case"source":Qe("error",c);break;case"img":case"image":case"link":Qe("error",c),Qe("load",c);break;case"details":Qe("toggle",c);break;case"input":He(c,m),Qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Qe("invalid",c);break;case"textarea":di(c,m),Qe("invalid",c)}uc(s,m),f=null;for(var b in m)if(m.hasOwnProperty(b)){var D=m[b];b==="children"?typeof D=="string"?c.textContent!==D&&(m.suppressHydrationWarning!==!0&&Ys(c.textContent,D,t),f=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&Ys(c.textContent,D,t),f=["children",""+D]):a.hasOwnProperty(b)&&D!=null&&b==="onScroll"&&Qe("scroll",c)}switch(s){case"input":pe(c),Rn(c,m,!0);break;case"textarea":pe(c),Up(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Xs)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vp(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(s,{is:c.is}):(t=b.createElement(s),s==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,s),t[In]=r,t[Ni]=c,r0(t,r,!1,!1),r.stateNode=t;e:{switch(b=dc(s,c),s){case"dialog":Qe("cancel",t),Qe("close",t),f=c;break;case"iframe":case"object":case"embed":Qe("load",t),f=c;break;case"video":case"audio":for(f=0;f<Di.length;f++)Qe(Di[f],t);f=c;break;case"source":Qe("error",t),f=c;break;case"img":case"image":case"link":Qe("error",t),Qe("load",t),f=c;break;case"details":Qe("toggle",t),f=c;break;case"input":He(t,c),f=_e(t,c),Qe("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=F({},c,{value:void 0}),Qe("invalid",t);break;case"textarea":di(t,c),f=Qn(t,c),Qe("invalid",t);break;default:f=c}uc(s,f),D=f;for(m in D)if(D.hasOwnProperty(m)){var I=D[m];m==="style"?qp(t,I):m==="dangerouslySetInnerHTML"?(I=I?I.__html:void 0,I!=null&&Kp(t,I)):m==="children"?typeof I=="string"?(s!=="textarea"||I!=="")&&fi(t,I):typeof I=="number"&&fi(t,""+I):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?I!=null&&m==="onScroll"&&Qe("scroll",t):I!=null&&R(t,m,I,b))}switch(s){case"input":pe(t),Rn(t,c,!1);break;case"textarea":pe(t),Up(t);break;case"option":c.value!=null&&t.setAttribute("value",""+L(c.value));break;case"select":t.multiple=!!c.multiple,m=c.value,m!=null?Dn(t,!!c.multiple,m,!1):c.defaultValue!=null&&Dn(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Xs)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return jt(r),null;case 6:if(t&&r.stateNode!=null)i0(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(s=Vr(_i.current),Vr(Nn.current),ol(r)){if(c=r.stateNode,s=r.memoizedProps,c[In]=r,(m=c.nodeValue!==s)&&(t=Ut,t!==null))switch(t.tag){case 3:Ys(c.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ys(c.nodeValue,s,(t.mode&1)!==0)}m&&(r.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[In]=r,r.stateNode=c}return jt(r),null;case 13:if(qe(Xe),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ye&&Vt!==null&&r.mode&1&&!(r.flags&128))am(),Ro(),r.flags|=98560,m=!1;else if(m=ol(r),c!==null&&c.dehydrated!==null){if(t===null){if(!m)throw Error(o(318));if(m=r.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(o(317));m[In]=r}else Ro(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;jt(r),m=!1}else xn!==null&&(Bu(xn),xn=null),m=!0;if(!m)return r.flags&65536?r:null}return r.flags&128?(r.lanes=s,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(t===null||Xe.current&1?at===0&&(at=3):Uu())),r.updateQueue!==null&&(r.flags|=4),jt(r),null);case 4:return No(),Ru(t,r),t===null&&Pi(r.stateNode.containerInfo),jt(r),null;case 10:return ou(r.type._context),jt(r),null;case 17:return Nt(r.type)&&Zs(),jt(r),null;case 19:if(qe(Xe),m=r.memoizedState,m===null)return jt(r),null;if(c=(r.flags&128)!==0,b=m.rendering,b===null)if(c)Ui(m,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(b=ul(t),b!==null){for(r.flags|=128,Ui(m,!1),c=b.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=s,s=r.child;s!==null;)m=s,t=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,t=b.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Ve(Xe,Xe.current&1|2),r.child}t=t.sibling}m.tail!==null&&nt()>zo&&(r.flags|=128,c=!0,Ui(m,!1),r.lanes=4194304)}else{if(!c)if(t=ul(b),t!==null){if(r.flags|=128,c=!0,s=t.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),Ui(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!Ye)return jt(r),null}else 2*nt()-m.renderingStartTime>zo&&s!==1073741824&&(r.flags|=128,c=!0,Ui(m,!1),r.lanes=4194304);m.isBackwards?(b.sibling=r.child,r.child=b):(s=m.last,s!==null?s.sibling=b:r.child=b,m.last=b)}return m.tail!==null?(r=m.tail,m.rendering=r,m.tail=r.sibling,m.renderingStartTime=nt(),r.sibling=null,s=Xe.current,Ve(Xe,c?s&1|2:s&1),r):(jt(r),null);case 22:case 23:return Hu(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?Kt&1073741824&&(jt(r),r.subtreeFlags&6&&(r.flags|=8192)):jt(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function bb(t,r){switch(Jc(r),r.tag){case 1:return Nt(r.type)&&Zs(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return No(),qe(It),qe(kt),du(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return cu(r),null;case 13:if(qe(Xe),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));Ro()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return qe(Xe),null;case 4:return No(),null;case 10:return ou(r.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var wl=!1,Et=!1,kb=typeof WeakSet=="function"?WeakSet:Set,we=null;function Oo(t,r){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){et(t,r,c)}else s.current=null}function Du(t,r,s){try{s()}catch(c){et(t,r,c)}}var s0=!1;function Sb(t,r){if(Hc=_s,t=zh(),Lc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var b=0,D=-1,I=-1,q=0,oe=0,ae=t,re=null;t:for(;;){for(var ye;ae!==s||f!==0&&ae.nodeType!==3||(D=b+f),ae!==m||c!==0&&ae.nodeType!==3||(I=b+c),ae.nodeType===3&&(b+=ae.nodeValue.length),(ye=ae.firstChild)!==null;)re=ae,ae=ye;for(;;){if(ae===t)break t;if(re===s&&++q===f&&(D=b),re===m&&++oe===c&&(I=b),(ye=ae.nextSibling)!==null)break;ae=re,re=ae.parentNode}ae=ye}s=D===-1||I===-1?null:{start:D,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(Uc={focusedElem:t,selectionRange:s},_s=!1,we=r;we!==null;)if(r=we,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,we=t;else for(;we!==null;){r=we;try{var ve=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ve!==null){var ke=ve.memoizedProps,rt=ve.memoizedState,U=r.stateNode,_=U.getSnapshotBeforeUpdate(r.elementType===r.type?ke:yn(r.type,ke),rt);U.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var V=r.stateNode.containerInfo;V.nodeType===1?V.textContent="":V.nodeType===9&&V.documentElement&&V.removeChild(V.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(de){et(r,r.return,de)}if(t=r.sibling,t!==null){t.return=r.return,we=t;break}we=r.return}return ve=s0,s0=!1,ve}function Vi(t,r,s){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var m=f.destroy;f.destroy=void 0,m!==void 0&&Du(r,s,m)}f=f.next}while(f!==c)}}function vl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var c=s.create;s.destroy=c()}s=s.next}while(s!==r)}}function Pu(t){var r=t.ref;if(r!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof r=="function"?r(t):r.current=t}}function l0(t){var r=t.alternate;r!==null&&(t.alternate=null,l0(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[In],delete r[Ni],delete r[qc],delete r[ib],delete r[sb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function a0(t){return t.tag===5||t.tag===3||t.tag===4}function c0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||a0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Iu(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(t,r):s.insertBefore(t,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(t,s)):(r=s,r.appendChild(t)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=Xs));else if(c!==4&&(t=t.child,t!==null))for(Iu(t,r,s),t=t.sibling;t!==null;)Iu(t,r,s),t=t.sibling}function Nu(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Nu(t,r,s),t=t.sibling;t!==null;)Nu(t,r,s),t=t.sibling}var gt=null,wn=!1;function br(t,r,s){for(s=s.child;s!==null;)u0(t,r,s),s=s.sibling}function u0(t,r,s){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(Is,s)}catch{}switch(s.tag){case 5:Et||Oo(s,r);case 6:var c=gt,f=wn;gt=null,br(t,r,s),gt=c,wn=f,gt!==null&&(wn?(t=gt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):gt.removeChild(s.stateNode));break;case 18:gt!==null&&(wn?(t=gt,s=s.stateNode,t.nodeType===8?Qc(t.parentNode,s):t.nodeType===1&&Qc(t,s),Si(t)):Qc(gt,s.stateNode));break;case 4:c=gt,f=wn,gt=s.stateNode.containerInfo,wn=!0,br(t,r,s),gt=c,wn=f;break;case 0:case 11:case 14:case 15:if(!Et&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,b=m.destroy;m=m.tag,b!==void 0&&(m&2||m&4)&&Du(s,r,b),f=f.next}while(f!==c)}br(t,r,s);break;case 1:if(!Et&&(Oo(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(D){et(s,r,D)}br(t,r,s);break;case 21:br(t,r,s);break;case 22:s.mode&1?(Et=(c=Et)||s.memoizedState!==null,br(t,r,s),Et=c):br(t,r,s);break;default:br(t,r,s)}}function d0(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new kb),r.forEach(function(c){var f=Pb.bind(null,t,c);s.has(c)||(s.add(c),c.then(f,f))})}}function vn(t,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c];try{var m=t,b=r,D=b;e:for(;D!==null;){switch(D.tag){case 5:gt=D.stateNode,wn=!1;break e;case 3:gt=D.stateNode.containerInfo,wn=!0;break e;case 4:gt=D.stateNode.containerInfo,wn=!0;break e}D=D.return}if(gt===null)throw Error(o(160));u0(m,b,f),gt=null,wn=!1;var I=f.alternate;I!==null&&(I.return=null),f.return=null}catch(q){et(f,r,q)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)f0(r,t),r=r.sibling}function f0(t,r){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(r,t),On(t),c&4){try{Vi(3,t,t.return),vl(3,t)}catch(ke){et(t,t.return,ke)}try{Vi(5,t,t.return)}catch(ke){et(t,t.return,ke)}}break;case 1:vn(r,t),On(t),c&512&&s!==null&&Oo(s,s.return);break;case 5:if(vn(r,t),On(t),c&512&&s!==null&&Oo(s,s.return),t.flags&32){var f=t.stateNode;try{fi(f,"")}catch(ke){et(t,t.return,ke)}}if(c&4&&(f=t.stateNode,f!=null)){var m=t.memoizedProps,b=s!==null?s.memoizedProps:m,D=t.type,I=t.updateQueue;if(t.updateQueue=null,I!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&Rt(f,m),dc(D,b);var q=dc(D,m);for(b=0;b<I.length;b+=2){var oe=I[b],ae=I[b+1];oe==="style"?qp(f,ae):oe==="dangerouslySetInnerHTML"?Kp(f,ae):oe==="children"?fi(f,ae):R(f,oe,ae,q)}switch(D){case"input":Wt(f,m);break;case"textarea":ac(f,m);break;case"select":var re=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var ye=m.value;ye!=null?Dn(f,!!m.multiple,ye,!1):re!==!!m.multiple&&(m.defaultValue!=null?Dn(f,!!m.multiple,m.defaultValue,!0):Dn(f,!!m.multiple,m.multiple?[]:"",!1))}f[Ni]=m}catch(ke){et(t,t.return,ke)}}break;case 6:if(vn(r,t),On(t),c&4){if(t.stateNode===null)throw Error(o(162));f=t.stateNode,m=t.memoizedProps;try{f.nodeValue=m}catch(ke){et(t,t.return,ke)}}break;case 3:if(vn(r,t),On(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Si(r.containerInfo)}catch(ke){et(t,t.return,ke)}break;case 4:vn(r,t),On(t);break;case 13:vn(r,t),On(t),f=t.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Mu=nt())),c&4&&d0(t);break;case 22:if(oe=s!==null&&s.memoizedState!==null,t.mode&1?(Et=(q=Et)||oe,vn(r,t),Et=q):vn(r,t),On(t),c&8192){if(q=t.memoizedState!==null,(t.stateNode.isHidden=q)&&!oe&&t.mode&1)for(we=t,oe=t.child;oe!==null;){for(ae=we=oe;we!==null;){switch(re=we,ye=re.child,re.tag){case 0:case 11:case 14:case 15:Vi(4,re,re.return);break;case 1:Oo(re,re.return);var ve=re.stateNode;if(typeof ve.componentWillUnmount=="function"){c=re,s=re.return;try{r=c,ve.props=r.memoizedProps,ve.state=r.memoizedState,ve.componentWillUnmount()}catch(ke){et(c,s,ke)}}break;case 5:Oo(re,re.return);break;case 22:if(re.memoizedState!==null){m0(ae);continue}}ye!==null?(ye.return=re,we=ye):m0(ae)}oe=oe.sibling}e:for(oe=null,ae=t;;){if(ae.tag===5){if(oe===null){oe=ae;try{f=ae.stateNode,q?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=ae.stateNode,I=ae.memoizedProps.style,b=I!=null&&I.hasOwnProperty("display")?I.display:null,D.style.display=Qp("display",b))}catch(ke){et(t,t.return,ke)}}}else if(ae.tag===6){if(oe===null)try{ae.stateNode.nodeValue=q?"":ae.memoizedProps}catch(ke){et(t,t.return,ke)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===t)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===t)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===t)break e;oe===ae&&(oe=null),ae=ae.return}oe===ae&&(oe=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:vn(r,t),On(t),c&4&&d0(t);break;case 21:break;default:vn(r,t),On(t)}}function On(t){var r=t.flags;if(r&2){try{e:{for(var s=t.return;s!==null;){if(a0(s)){var c=s;break e}s=s.return}throw Error(o(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(fi(f,""),c.flags&=-33);var m=c0(t);Nu(t,m,f);break;case 3:case 4:var b=c.stateNode.containerInfo,D=c0(t);Iu(t,D,b);break;default:throw Error(o(161))}}catch(I){et(t,t.return,I)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function jb(t,r,s){we=t,p0(t)}function p0(t,r,s){for(var c=(t.mode&1)!==0;we!==null;){var f=we,m=f.child;if(f.tag===22&&c){var b=f.memoizedState!==null||wl;if(!b){var D=f.alternate,I=D!==null&&D.memoizedState!==null||Et;D=wl;var q=Et;if(wl=b,(Et=I)&&!q)for(we=f;we!==null;)b=we,I=b.child,b.tag===22&&b.memoizedState!==null?g0(f):I!==null?(I.return=b,we=I):g0(f);for(;m!==null;)we=m,p0(m),m=m.sibling;we=f,wl=D,Et=q}h0(t)}else f.subtreeFlags&8772&&m!==null?(m.return=f,we=m):h0(t)}}function h0(t){for(;we!==null;){var r=we;if(r.flags&8772){var s=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Et||vl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Et)if(s===null)c.componentDidMount();else{var f=r.elementType===r.type?s.memoizedProps:yn(r.type,s.memoizedProps);c.componentDidUpdate(f,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=r.updateQueue;m!==null&&mm(r,m,c);break;case 3:var b=r.updateQueue;if(b!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}mm(r,b,s)}break;case 5:var D=r.stateNode;if(s===null&&r.flags&4){s=D;var I=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":I.autoFocus&&s.focus();break;case"img":I.src&&(s.src=I.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var q=r.alternate;if(q!==null){var oe=q.memoizedState;if(oe!==null){var ae=oe.dehydrated;ae!==null&&Si(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Et||r.flags&512&&Pu(r)}catch(re){et(r,r.return,re)}}if(r===t){we=null;break}if(s=r.sibling,s!==null){s.return=r.return,we=s;break}we=r.return}}function m0(t){for(;we!==null;){var r=we;if(r===t){we=null;break}var s=r.sibling;if(s!==null){s.return=r.return,we=s;break}we=r.return}}function g0(t){for(;we!==null;){var r=we;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{vl(4,r)}catch(I){et(r,s,I)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(I){et(r,f,I)}}var m=r.return;try{Pu(r)}catch(I){et(r,m,I)}break;case 5:var b=r.return;try{Pu(r)}catch(I){et(r,b,I)}}}catch(I){et(r,r.return,I)}if(r===t){we=null;break}var D=r.sibling;if(D!==null){D.return=r.return,we=D;break}we=r.return}}var Eb=Math.ceil,bl=N.ReactCurrentDispatcher,Lu=N.ReactCurrentOwner,ln=N.ReactCurrentBatchConfig,Ne=0,ut=null,it=null,xt=0,Kt=0,Mo=gr(0),at=0,Ki=null,Qr=0,kl=0,Ou=0,Qi=null,Ot=null,Mu=0,zo=1/0,tr=null,Sl=!1,zu=null,kr=null,jl=!1,Sr=null,El=0,qi=0,_u=null,Cl=-1,$l=0;function Pt(){return Ne&6?nt():Cl!==-1?Cl:Cl=nt()}function jr(t){return t.mode&1?Ne&2&&xt!==0?xt&-xt:ab.transition!==null?($l===0&&($l=ch()),$l):(t=Fe,t!==0||(t=window.event,t=t===void 0?16:yh(t.type)),t):1}function bn(t,r,s,c){if(50<qi)throw qi=0,_u=null,Error(o(185));yi(t,s,c),(!(Ne&2)||t!==ut)&&(t===ut&&(!(Ne&2)&&(kl|=s),at===4&&Er(t,xt)),Mt(t,c),s===1&&Ne===0&&!(r.mode&1)&&(zo=nt()+500,tl&&yr()))}function Mt(t,r){var s=t.callbackNode;a1(t,r);var c=Os(t,t===ut?xt:0);if(c===0)s!==null&&sh(s),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(s!=null&&sh(s),r===1)t.tag===0?lb(y0.bind(null,t)):rm(y0.bind(null,t)),rb(function(){!(Ne&6)&&yr()}),s=null;else{switch(uh(c)){case 1:s=yc;break;case 4:s=lh;break;case 16:s=Ps;break;case 536870912:s=ah;break;default:s=Ps}s=C0(s,x0.bind(null,t))}t.callbackPriority=r,t.callbackNode=s}}function x0(t,r){if(Cl=-1,$l=0,Ne&6)throw Error(o(327));var s=t.callbackNode;if(_o()&&t.callbackNode!==s)return null;var c=Os(t,t===ut?xt:0);if(c===0)return null;if(c&30||c&t.expiredLanes||r)r=Al(t,c);else{r=c;var f=Ne;Ne|=2;var m=v0();(ut!==t||xt!==r)&&(tr=null,zo=nt()+500,Gr(t,r));do try{Ab();break}catch(D){w0(t,D)}while(!0);ru(),bl.current=m,Ne=f,it!==null?r=0:(ut=null,xt=0,r=at)}if(r!==0){if(r===2&&(f=wc(t),f!==0&&(c=f,r=Fu(t,f))),r===1)throw s=Ki,Gr(t,0),Er(t,c),Mt(t,nt()),s;if(r===6)Er(t,c);else{if(f=t.current.alternate,!(c&30)&&!Cb(f)&&(r=Al(t,c),r===2&&(m=wc(t),m!==0&&(c=m,r=Fu(t,m))),r===1))throw s=Ki,Gr(t,0),Er(t,c),Mt(t,nt()),s;switch(t.finishedWork=f,t.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:Yr(t,Ot,tr);break;case 3:if(Er(t,c),(c&130023424)===c&&(r=Mu+500-nt(),10<r)){if(Os(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Pt(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Kc(Yr.bind(null,t,Ot,tr),r);break}Yr(t,Ot,tr);break;case 4:if(Er(t,c),(c&4194240)===c)break;for(r=t.eventTimes,f=-1;0<c;){var b=31-mn(c);m=1<<b,b=r[b],b>f&&(f=b),c&=~m}if(c=f,c=nt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Eb(c/1960))-c,10<c){t.timeoutHandle=Kc(Yr.bind(null,t,Ot,tr),c);break}Yr(t,Ot,tr);break;case 5:Yr(t,Ot,tr);break;default:throw Error(o(329))}}}return Mt(t,nt()),t.callbackNode===s?x0.bind(null,t):null}function Fu(t,r){var s=Qi;return t.current.memoizedState.isDehydrated&&(Gr(t,r).flags|=256),t=Al(t,r),t!==2&&(r=Ot,Ot=s,r!==null&&Bu(r)),t}function Bu(t){Ot===null?Ot=t:Ot.push.apply(Ot,t)}function Cb(t){for(var r=t;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var f=s[c],m=f.getSnapshot;f=f.value;try{if(!gn(m(),f))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Er(t,r){for(r&=~Ou,r&=~kl,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var s=31-mn(r),c=1<<s;t[s]=-1,r&=~c}}function y0(t){if(Ne&6)throw Error(o(327));_o();var r=Os(t,0);if(!(r&1))return Mt(t,nt()),null;var s=Al(t,r);if(t.tag!==0&&s===2){var c=wc(t);c!==0&&(r=c,s=Fu(t,c))}if(s===1)throw s=Ki,Gr(t,0),Er(t,r),Mt(t,nt()),s;if(s===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,Yr(t,Ot,tr),Mt(t,nt()),null}function Wu(t,r){var s=Ne;Ne|=1;try{return t(r)}finally{Ne=s,Ne===0&&(zo=nt()+500,tl&&yr())}}function qr(t){Sr!==null&&Sr.tag===0&&!(Ne&6)&&_o();var r=Ne;Ne|=1;var s=ln.transition,c=Fe;try{if(ln.transition=null,Fe=1,t)return t()}finally{Fe=c,ln.transition=s,Ne=r,!(Ne&6)&&yr()}}function Hu(){Kt=Mo.current,qe(Mo)}function Gr(t,r){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,nb(s)),it!==null)for(s=it.return;s!==null;){var c=s;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Zs();break;case 3:No(),qe(It),qe(kt),du();break;case 5:cu(c);break;case 4:No();break;case 13:qe(Xe);break;case 19:qe(Xe);break;case 10:ou(c.type._context);break;case 22:case 23:Hu()}s=s.return}if(ut=t,it=t=Cr(t.current,null),xt=Kt=r,at=0,Ki=null,Ou=kl=Qr=0,Ot=Qi=null,Ur!==null){for(r=0;r<Ur.length;r++)if(s=Ur[r],c=s.interleaved,c!==null){s.interleaved=null;var f=c.next,m=s.pending;if(m!==null){var b=m.next;m.next=f,c.next=b}s.pending=c}Ur=null}return t}function w0(t,r){do{var s=it;try{if(ru(),dl.current=ml,fl){for(var c=Je.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}fl=!1}if(Kr=0,ct=lt=Je=null,Fi=!1,Bi=0,Lu.current=null,s===null||s.return===null){at=1,Ki=r,it=null;break}e:{var m=t,b=s.return,D=s,I=r;if(r=xt,D.flags|=32768,I!==null&&typeof I=="object"&&typeof I.then=="function"){var q=I,oe=D,ae=oe.tag;if(!(oe.mode&1)&&(ae===0||ae===11||ae===15)){var re=oe.alternate;re?(oe.updateQueue=re.updateQueue,oe.memoizedState=re.memoizedState,oe.lanes=re.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var ye=Um(b);if(ye!==null){ye.flags&=-257,Vm(ye,b,D,m,r),ye.mode&1&&Hm(m,q,r),r=ye,I=q;var ve=r.updateQueue;if(ve===null){var ke=new Set;ke.add(I),r.updateQueue=ke}else ve.add(I);break e}else{if(!(r&1)){Hm(m,q,r),Uu();break e}I=Error(o(426))}}else if(Ye&&D.mode&1){var rt=Um(b);if(rt!==null){!(rt.flags&65536)&&(rt.flags|=256),Vm(rt,b,D,m,r),tu(Lo(I,D));break e}}m=I=Lo(I,D),at!==4&&(at=2),Qi===null?Qi=[m]:Qi.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,r&=-r,m.lanes|=r;var U=Bm(m,I,r);hm(m,U);break e;case 1:D=I;var _=m.type,V=m.stateNode;if(!(m.flags&128)&&(typeof _.getDerivedStateFromError=="function"||V!==null&&typeof V.componentDidCatch=="function"&&(kr===null||!kr.has(V)))){m.flags|=65536,r&=-r,m.lanes|=r;var de=Wm(m,D,r);hm(m,de);break e}}m=m.return}while(m!==null)}k0(s)}catch(Se){r=Se,it===s&&s!==null&&(it=s=s.return);continue}break}while(!0)}function v0(){var t=bl.current;return bl.current=ml,t===null?ml:t}function Uu(){(at===0||at===3||at===2)&&(at=4),ut===null||!(Qr&268435455)&&!(kl&268435455)||Er(ut,xt)}function Al(t,r){var s=Ne;Ne|=2;var c=v0();(ut!==t||xt!==r)&&(tr=null,Gr(t,r));do try{$b();break}catch(f){w0(t,f)}while(!0);if(ru(),Ne=s,bl.current=c,it!==null)throw Error(o(261));return ut=null,xt=0,at}function $b(){for(;it!==null;)b0(it)}function Ab(){for(;it!==null&&!Zv();)b0(it)}function b0(t){var r=E0(t.alternate,t,Kt);t.memoizedProps=t.pendingProps,r===null?k0(t):it=r,Lu.current=null}function k0(t){var r=t;do{var s=r.alternate;if(t=r.return,r.flags&32768){if(s=bb(s,r),s!==null){s.flags&=32767,it=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{at=6,it=null;return}}else if(s=vb(s,r,Kt),s!==null){it=s;return}if(r=r.sibling,r!==null){it=r;return}it=r=t}while(r!==null);at===0&&(at=5)}function Yr(t,r,s){var c=Fe,f=ln.transition;try{ln.transition=null,Fe=1,Tb(t,r,s,c)}finally{ln.transition=f,Fe=c}return null}function Tb(t,r,s,c){do _o();while(Sr!==null);if(Ne&6)throw Error(o(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var m=s.lanes|s.childLanes;if(c1(t,m),t===ut&&(it=ut=null,xt=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||jl||(jl=!0,C0(Ps,function(){return _o(),null})),m=(s.flags&15990)!==0,s.subtreeFlags&15990||m){m=ln.transition,ln.transition=null;var b=Fe;Fe=1;var D=Ne;Ne|=4,Lu.current=null,Sb(t,s),f0(s,t),G1(Uc),_s=!!Hc,Uc=Hc=null,t.current=s,jb(s),e1(),Ne=D,Fe=b,ln.transition=m}else t.current=s;if(jl&&(jl=!1,Sr=t,El=f),m=t.pendingLanes,m===0&&(kr=null),r1(s.stateNode),Mt(t,nt()),r!==null)for(c=t.onRecoverableError,s=0;s<r.length;s++)f=r[s],c(f.value,{componentStack:f.stack,digest:f.digest});if(Sl)throw Sl=!1,t=zu,zu=null,t;return El&1&&t.tag!==0&&_o(),m=t.pendingLanes,m&1?t===_u?qi++:(qi=0,_u=t):qi=0,yr(),null}function _o(){if(Sr!==null){var t=uh(El),r=ln.transition,s=Fe;try{if(ln.transition=null,Fe=16>t?16:t,Sr===null)var c=!1;else{if(t=Sr,Sr=null,El=0,Ne&6)throw Error(o(331));var f=Ne;for(Ne|=4,we=t.current;we!==null;){var m=we,b=m.child;if(we.flags&16){var D=m.deletions;if(D!==null){for(var I=0;I<D.length;I++){var q=D[I];for(we=q;we!==null;){var oe=we;switch(oe.tag){case 0:case 11:case 15:Vi(8,oe,m)}var ae=oe.child;if(ae!==null)ae.return=oe,we=ae;else for(;we!==null;){oe=we;var re=oe.sibling,ye=oe.return;if(l0(oe),oe===q){we=null;break}if(re!==null){re.return=ye,we=re;break}we=ye}}}var ve=m.alternate;if(ve!==null){var ke=ve.child;if(ke!==null){ve.child=null;do{var rt=ke.sibling;ke.sibling=null,ke=rt}while(ke!==null)}}we=m}}if(m.subtreeFlags&2064&&b!==null)b.return=m,we=b;else e:for(;we!==null;){if(m=we,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Vi(9,m,m.return)}var U=m.sibling;if(U!==null){U.return=m.return,we=U;break e}we=m.return}}var _=t.current;for(we=_;we!==null;){b=we;var V=b.child;if(b.subtreeFlags&2064&&V!==null)V.return=b,we=V;else e:for(b=_;we!==null;){if(D=we,D.flags&2048)try{switch(D.tag){case 0:case 11:case 15:vl(9,D)}}catch(Se){et(D,D.return,Se)}if(D===b){we=null;break e}var de=D.sibling;if(de!==null){de.return=D.return,we=de;break e}we=D.return}}if(Ne=f,yr(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(Is,t)}catch{}c=!0}return c}finally{Fe=s,ln.transition=r}}return!1}function S0(t,r,s){r=Lo(s,r),r=Bm(t,r,1),t=vr(t,r,1),r=Pt(),t!==null&&(yi(t,1,r),Mt(t,r))}function et(t,r,s){if(t.tag===3)S0(t,t,s);else for(;r!==null;){if(r.tag===3){S0(r,t,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(kr===null||!kr.has(c))){t=Lo(s,t),t=Wm(r,t,1),r=vr(r,t,1),t=Pt(),r!==null&&(yi(r,1,t),Mt(r,t));break}}r=r.return}}function Rb(t,r,s){var c=t.pingCache;c!==null&&c.delete(r),r=Pt(),t.pingedLanes|=t.suspendedLanes&s,ut===t&&(xt&s)===s&&(at===4||at===3&&(xt&130023424)===xt&&500>nt()-Mu?Gr(t,0):Ou|=s),Mt(t,r)}function j0(t,r){r===0&&(t.mode&1?(r=Ls,Ls<<=1,!(Ls&130023424)&&(Ls=4194304)):r=1);var s=Pt();t=Jn(t,r),t!==null&&(yi(t,r,s),Mt(t,s))}function Db(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),j0(t,s)}function Pb(t,r){var s=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),j0(t,s)}var E0;E0=function(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps||It.current)Lt=!0;else{if(!(t.lanes&s)&&!(r.flags&128))return Lt=!1,wb(t,r,s);Lt=!!(t.flags&131072)}else Lt=!1,Ye&&r.flags&1048576&&om(r,rl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;yl(t,r),t=r.pendingProps;var f=$o(r,kt.current);Io(r,s),f=hu(null,r,c,t,f,s);var m=mu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Nt(c)?(m=!0,el(r)):m=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,lu(r),f.updater=gl,r.stateNode=f,f._reactInternals=r,bu(r,c,t,s),r=Eu(null,r,c,!0,m,s)):(r.tag=0,Ye&&m&&Xc(r),Dt(null,r,f,s),r=r.child),r;case 16:c=r.elementType;e:{switch(yl(t,r),t=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Nb(c),t=yn(c,t),f){case 0:r=ju(null,r,c,t,s);break e;case 1:r=Xm(null,r,c,t,s);break e;case 11:r=Km(null,r,c,t,s);break e;case 14:r=Qm(null,r,c,yn(c.type,t),s);break e}throw Error(o(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yn(c,f),ju(t,r,c,f,s);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yn(c,f),Xm(t,r,c,f,s);case 3:e:{if(Jm(r),t===null)throw Error(o(387));c=r.pendingProps,m=r.memoizedState,f=m.element,pm(t,r),cl(r,c,null,s);var b=r.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){f=Lo(Error(o(423)),r),r=Zm(t,r,c,s,f);break e}else if(c!==f){f=Lo(Error(o(424)),r),r=Zm(t,r,c,s,f);break e}else for(Vt=mr(r.stateNode.containerInfo.firstChild),Ut=r,Ye=!0,xn=null,s=dm(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ro(),c===f){r=er(t,r,s);break e}Dt(t,r,c,s)}r=r.child}return r;case 5:return gm(r),t===null&&eu(r),c=r.type,f=r.pendingProps,m=t!==null?t.memoizedProps:null,b=f.children,Vc(c,f)?b=null:m!==null&&Vc(c,m)&&(r.flags|=32),Ym(t,r),Dt(t,r,b,s),r.child;case 6:return t===null&&eu(r),null;case 13:return e0(t,r,s);case 4:return au(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=Do(r,null,c,s):Dt(t,r,c,s),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yn(c,f),Km(t,r,c,f,s);case 7:return Dt(t,r,r.pendingProps,s),r.child;case 8:return Dt(t,r,r.pendingProps.children,s),r.child;case 12:return Dt(t,r,r.pendingProps.children,s),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,m=r.memoizedProps,b=f.value,Ve(sl,c._currentValue),c._currentValue=b,m!==null)if(gn(m.value,b)){if(m.children===f.children&&!It.current){r=er(t,r,s);break e}}else for(m=r.child,m!==null&&(m.return=r);m!==null;){var D=m.dependencies;if(D!==null){b=m.child;for(var I=D.firstContext;I!==null;){if(I.context===c){if(m.tag===1){I=Zn(-1,s&-s),I.tag=2;var q=m.updateQueue;if(q!==null){q=q.shared;var oe=q.pending;oe===null?I.next=I:(I.next=oe.next,oe.next=I),q.pending=I}}m.lanes|=s,I=m.alternate,I!==null&&(I.lanes|=s),iu(m.return,s,r),D.lanes|=s;break}I=I.next}}else if(m.tag===10)b=m.type===r.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(o(341));b.lanes|=s,D=b.alternate,D!==null&&(D.lanes|=s),iu(b,s,r),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===r){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}Dt(t,r,f.children,s),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Io(r,s),f=on(f),c=c(f),r.flags|=1,Dt(t,r,c,s),r.child;case 14:return c=r.type,f=yn(c,r.pendingProps),f=yn(c.type,f),Qm(t,r,c,f,s);case 15:return qm(t,r,r.type,r.pendingProps,s);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:yn(c,f),yl(t,r),r.tag=1,Nt(c)?(t=!0,el(r)):t=!1,Io(r,s),_m(r,c,f),bu(r,c,f,s),Eu(null,r,c,!0,t,s);case 19:return n0(t,r,s);case 22:return Gm(t,r,s)}throw Error(o(156,r.tag))};function C0(t,r){return ih(t,r)}function Ib(t,r,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,r,s,c){return new Ib(t,r,s,c)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nb(t){if(typeof t=="function")return Vu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ue)return 11;if(t===$)return 14}return 2}function Cr(t,r){var s=t.alternate;return s===null?(s=an(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Tl(t,r,s,c,f,m){var b=2;if(c=t,typeof t=="function")Vu(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case Y:return Xr(s.children,f,m,r);case Z:b=8,f|=8;break;case se:return t=an(12,s,r,f|2),t.elementType=se,t.lanes=m,t;case me:return t=an(13,s,r,f),t.elementType=me,t.lanes=m,t;case B:return t=an(19,s,r,f),t.elementType=B,t.lanes=m,t;case H:return Rl(s,f,m,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ge:b=10;break e;case ie:b=9;break e;case ue:b=11;break e;case $:b=14;break e;case T:b=16,c=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return r=an(b,s,r,f),r.elementType=t,r.type=c,r.lanes=m,r}function Xr(t,r,s,c){return t=an(7,t,c,r),t.lanes=s,t}function Rl(t,r,s,c){return t=an(22,t,c,r),t.elementType=H,t.lanes=s,t.stateNode={isHidden:!1},t}function Ku(t,r,s){return t=an(6,t,null,r),t.lanes=s,t}function Qu(t,r,s){return r=an(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function Lb(t,r,s,c,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function qu(t,r,s,c,f,m,b,D,I){return t=new Lb(t,r,s,D,I),r===1?(r=1,m===!0&&(r|=8)):r=0,m=an(3,null,null,r),t.current=m,m.stateNode=t,m.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(m),t}function Ob(t,r,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:c==null?null:""+c,children:t,containerInfo:r,implementation:s}}function $0(t){if(!t)return xr;t=t._reactInternals;e:{if(_r(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Nt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var s=t.type;if(Nt(s))return tm(t,s,r)}return r}function A0(t,r,s,c,f,m,b,D,I){return t=qu(s,c,!0,t,f,m,b,D,I),t.context=$0(null),s=t.current,c=Pt(),f=jr(s),m=Zn(c,f),m.callback=r??null,vr(s,m,f),t.current.lanes=f,yi(t,f,c),Mt(t,c),t}function Dl(t,r,s,c){var f=r.current,m=Pt(),b=jr(f);return s=$0(s),r.context===null?r.context=s:r.pendingContext=s,r=Zn(m,b),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=vr(f,r,b),t!==null&&(bn(t,f,b,m),al(t,f,b)),b}function Pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function T0(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function Gu(t,r){T0(t,r),(t=t.alternate)&&T0(t,r)}var R0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yu(t){this._internalRoot=t}Il.prototype.render=Yu.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));Dl(t,r,null,null)},Il.prototype.unmount=Yu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;qr(function(){Dl(null,t,null,null)}),r[qn]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var r=ph();t={blockedOn:null,target:t,priority:r};for(var s=0;s<fr.length&&r!==0&&r<fr[s].priority;s++);fr.splice(s,0,t),s===0&&gh(t)}};function Xu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D0(){}function Mb(t,r,s,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var q=Pl(b);m.call(q)}}var b=A0(r,c,t,0,null,!1,!1,"",D0);return t._reactRootContainer=b,t[qn]=b.current,Pi(t.nodeType===8?t.parentNode:t),qr(),b}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var D=c;c=function(){var q=Pl(I);D.call(q)}}var I=qu(t,0,!1,null,null,!1,!1,"",D0);return t._reactRootContainer=I,t[qn]=I.current,Pi(t.nodeType===8?t.parentNode:t),qr(function(){Dl(r,I,s,c)}),I}function Ll(t,r,s,c,f){var m=s._reactRootContainer;if(m){var b=m;if(typeof f=="function"){var D=f;f=function(){var I=Pl(b);D.call(I)}}Dl(r,b,t,f)}else b=Mb(s,r,t,f,c);return Pl(b)}dh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var s=xi(r.pendingLanes);s!==0&&(bc(r,s|1),Mt(r,nt()),!(Ne&6)&&(zo=nt()+500,yr()))}break;case 13:qr(function(){var c=Jn(t,1);if(c!==null){var f=Pt();bn(c,t,1,f)}}),Gu(t,1)}},kc=function(t){if(t.tag===13){var r=Jn(t,134217728);if(r!==null){var s=Pt();bn(r,t,134217728,s)}Gu(t,134217728)}},fh=function(t){if(t.tag===13){var r=jr(t),s=Jn(t,r);if(s!==null){var c=Pt();bn(s,t,r,c)}Gu(t,r)}},ph=function(){return Fe},hh=function(t,r){var s=Fe;try{return Fe=t,r()}finally{Fe=s}},hc=function(t,r,s){switch(r){case"input":if(Wt(t,s),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==t&&c.form===t.form){var f=Js(c);if(!f)throw Error(o(90));he(c),Wt(c,f)}}}break;case"textarea":ac(t,s);break;case"select":r=s.value,r!=null&&Dn(t,!!s.multiple,r,!1)}},Jp=Wu,Zp=qr;var zb={usingClientEntryPoint:!1,Events:[Li,Eo,Js,Yp,Xp,Wu]},Gi={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_b={bundleType:Gi.bundleType,version:Gi.version,rendererPackageName:Gi.rendererPackageName,rendererConfig:Gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=rh(t),t===null?null:t.stateNode},findFiberByHostInstance:Gi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Is=Ol.inject(_b),Pn=Ol}catch{}}return zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zb,zt.createPortal=function(t,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(r))throw Error(o(200));return Ob(t,r,null,s)},zt.createRoot=function(t,r){if(!Xu(t))throw Error(o(299));var s=!1,c="",f=R0;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=qu(t,1,!1,null,null,s,!1,c,f),t[qn]=r.current,Pi(t.nodeType===8?t.parentNode:t),new Yu(r)},zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=rh(r),t=t===null?null:t.stateNode,t},zt.flushSync=function(t){return qr(t)},zt.hydrate=function(t,r,s){if(!Nl(r))throw Error(o(200));return Ll(null,t,r,!0,s)},zt.hydrateRoot=function(t,r,s){if(!Xu(t))throw Error(o(405));var c=s!=null&&s.hydratedSources||null,f=!1,m="",b=R0;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(m=s.identifierPrefix),s.onRecoverableError!==void 0&&(b=s.onRecoverableError)),r=A0(r,null,t,1,s??null,f,!1,m,b),t[qn]=r.current,Pi(t),c)for(t=0;t<c.length;t++)s=c[t],f=s._getVersion,f=f(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,f]:r.mutableSourceEagerHydrationData.push(s,f);return new Il(r)},zt.render=function(t,r,s){if(!Nl(r))throw Error(o(200));return Ll(null,t,r,!1,s)},zt.unmountComponentAtNode=function(t){if(!Nl(t))throw Error(o(40));return t._reactRootContainer?(qr(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[qn]=null})}),!0):!1},zt.unstable_batchedUpdates=Wu,zt.unstable_renderSubtreeIntoContainer=function(t,r,s,c){if(!Nl(s))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return Ll(t,r,s,!1,c)},zt.version="18.3.1-next-f1338f8080-20240426",zt}var _0;function Bx(){if(_0)return ed.exports;_0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),ed.exports=qb(),ed.exports}var F0;function Gb(){if(F0)return Ml;F0=1;var e=Bx();return Ml.createRoot=e.createRoot,Ml.hydrateRoot=e.hydrateRoot,Ml}var Yb=Gb(),pt=function(){return pt=Object.assign||function(n){for(var o,i=1,a=arguments.length;i<a;i++){o=arguments[i];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])}return n},pt.apply(this,arguments)};function qo(e,n,o){if(o||arguments.length===2)for(var i=0,a=n.length,u;i<a;i++)(u||!(i in n))&&(u||(u=Array.prototype.slice.call(n,0,i)),u[i]=n[i]);return e.concat(u||Array.prototype.slice.call(n))}var Ge="-ms-",cs="-moz-",Me="-webkit-",Wx="comm",La="rule",tp="decl",Xb="@import",Hx="@keyframes",Jb="@layer",Ux=Math.abs,np=String.fromCharCode,Jd=Object.assign;function Zb(e,n){return ft(e,0)^45?(((n<<2^ft(e,0))<<2^ft(e,1))<<2^ft(e,2))<<2^ft(e,3):0}function Vx(e){return e.trim()}function rr(e,n){return(e=n.exec(e))?e[0]:e}function Re(e,n,o){return e.replace(n,o)}function Yl(e,n,o){return e.indexOf(n,o)}function ft(e,n){return e.charCodeAt(n)|0}function Go(e,n,o){return e.slice(n,o)}function zn(e){return e.length}function Kx(e){return e.length}function os(e,n){return n.push(e),e}function ek(e,n){return e.map(n).join("")}function B0(e,n){return e.filter(function(o){return!rr(o,n)})}var Oa=1,Yo=1,Qx=0,dn=0,st=0,ni="";function Ma(e,n,o,i,a,u,d,p){return{value:e,root:n,parent:o,type:i,props:a,children:u,line:Oa,column:Yo,length:d,return:"",siblings:p}}function Ar(e,n){return Jd(Ma("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Fo(e){for(;e.root;)e=Ar(e.root,{children:[e]});os(e,e.siblings)}function tk(){return st}function nk(){return st=dn>0?ft(ni,--dn):0,Yo--,st===10&&(Yo=1,Oa--),st}function Sn(){return st=dn<Qx?ft(ni,dn++):0,Yo++,st===10&&(Yo=1,Oa++),st}function ro(){return ft(ni,dn)}function Xl(){return dn}function za(e,n){return Go(ni,e,n)}function Zd(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rk(e){return Oa=Yo=1,Qx=zn(ni=e),dn=0,[]}function ok(e){return ni="",e}function rd(e){return Vx(za(dn-1,ef(e===91?e+2:e===40?e+1:e)))}function ik(e){for(;(st=ro())&&st<33;)Sn();return Zd(e)>2||Zd(st)>3?"":" "}function sk(e,n){for(;--n&&Sn()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return za(e,Xl()+(n<6&&ro()==32&&Sn()==32))}function ef(e){for(;Sn();)switch(st){case e:return dn;case 34:case 39:e!==34&&e!==39&&ef(st);break;case 40:e===41&&ef(e);break;case 92:Sn();break}return dn}function lk(e,n){for(;Sn()&&e+st!==57;)if(e+st===84&&ro()===47)break;return"/*"+za(n,dn-1)+"*"+np(e===47?e:Sn())}function ak(e){for(;!Zd(ro());)Sn();return za(e,dn)}function ck(e){return ok(Jl("",null,null,null,[""],e=rk(e),0,[0],e))}function Jl(e,n,o,i,a,u,d,p,h){for(var x=0,y=0,w=d,S=0,A=0,C=0,v=1,j=1,k=1,E=0,R="",N=a,z=u,K=i,Y=R;j;)switch(C=E,E=Sn()){case 40:if(C!=108&&ft(Y,w-1)==58){Yl(Y+=Re(rd(E),"&","&\f"),"&\f",Ux(x?p[x-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:Y+=rd(E);break;case 9:case 10:case 13:case 32:Y+=ik(C);break;case 92:Y+=sk(Xl()-1,7);continue;case 47:switch(ro()){case 42:case 47:os(uk(lk(Sn(),Xl()),n,o,h),h);break;default:Y+="/"}break;case 123*v:p[x++]=zn(Y)*k;case 125*v:case 59:case 0:switch(E){case 0:case 125:j=0;case 59+y:k==-1&&(Y=Re(Y,/\f/g,"")),A>0&&zn(Y)-w&&os(A>32?H0(Y+";",i,o,w-1,h):H0(Re(Y," ","")+";",i,o,w-2,h),h);break;case 59:Y+=";";default:if(os(K=W0(Y,n,o,x,y,a,p,R,N=[],z=[],w,u),u),E===123)if(y===0)Jl(Y,n,K,K,N,u,w,p,z);else switch(S===99&&ft(Y,3)===110?100:S){case 100:case 108:case 109:case 115:Jl(e,K,K,i&&os(W0(e,K,K,0,0,a,p,R,a,N=[],w,z),z),a,z,w,p,i?N:z);break;default:Jl(Y,K,K,K,[""],z,0,p,z)}}x=y=A=0,v=k=1,R=Y="",w=d;break;case 58:w=1+zn(Y),A=C;default:if(v<1){if(E==123)--v;else if(E==125&&v++==0&&nk()==125)continue}switch(Y+=np(E),E*v){case 38:k=y>0?1:(Y+="\f",-1);break;case 44:p[x++]=(zn(Y)-1)*k,k=1;break;case 64:ro()===45&&(Y+=rd(Sn())),S=ro(),y=w=zn(R=Y+=ak(Xl())),E++;break;case 45:C===45&&zn(Y)==2&&(v=0)}}return u}function W0(e,n,o,i,a,u,d,p,h,x,y,w){for(var S=a-1,A=a===0?u:[""],C=Kx(A),v=0,j=0,k=0;v<i;++v)for(var E=0,R=Go(e,S+1,S=Ux(j=d[v])),N=e;E<C;++E)(N=Vx(j>0?A[E]+" "+R:Re(R,/&\f/g,A[E])))&&(h[k++]=N);return Ma(e,n,o,a===0?La:p,h,x,y,w)}function uk(e,n,o,i){return Ma(e,n,o,Wx,np(tk()),Go(e,2,-2),0,i)}function H0(e,n,o,i,a){return Ma(e,n,o,tp,Go(e,0,i),Go(e,i+1,-1),i,a)}function qx(e,n,o){switch(Zb(e,n)){case 5103:return Me+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Me+e+e;case 4789:return cs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Me+e+cs+e+Ge+e+e;case 5936:switch(ft(e,n+11)){case 114:return Me+e+Ge+Re(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Me+e+Ge+Re(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Me+e+Ge+Re(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Me+e+Ge+e+e;case 6165:return Me+e+Ge+"flex-"+e+e;case 5187:return Me+e+Re(e,/(\w+).+(:[^]+)/,Me+"box-$1$2"+Ge+"flex-$1$2")+e;case 5443:return Me+e+Ge+"flex-item-"+Re(e,/flex-|-self/g,"")+(rr(e,/flex-|baseline/)?"":Ge+"grid-row-"+Re(e,/flex-|-self/g,""))+e;case 4675:return Me+e+Ge+"flex-line-pack"+Re(e,/align-content|flex-|-self/g,"")+e;case 5548:return Me+e+Ge+Re(e,"shrink","negative")+e;case 5292:return Me+e+Ge+Re(e,"basis","preferred-size")+e;case 6060:return Me+"box-"+Re(e,"-grow","")+Me+e+Ge+Re(e,"grow","positive")+e;case 4554:return Me+Re(e,/([^-])(transform)/g,"$1"+Me+"$2")+e;case 6187:return Re(Re(Re(e,/(zoom-|grab)/,Me+"$1"),/(image-set)/,Me+"$1"),e,"")+e;case 5495:case 3959:return Re(e,/(image-set\([^]*)/,Me+"$1$`$1");case 4968:return Re(Re(e,/(.+:)(flex-)?(.*)/,Me+"box-pack:$3"+Ge+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Me+e+e;case 4200:if(!rr(e,/flex-|baseline/))return Ge+"grid-column-align"+Go(e,n)+e;break;case 2592:case 3360:return Ge+Re(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(i,a){return n=a,rr(i.props,/grid-\w+-end/)})?~Yl(e+(o=o[n].value),"span",0)?e:Ge+Re(e,"-start","")+e+Ge+"grid-row-span:"+(~Yl(o,"span",0)?rr(o,/\d+/):+rr(o,/\d+/)-+rr(e,/\d+/))+";":Ge+Re(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(i){return rr(i.props,/grid-\w+-start/)})?e:Ge+Re(Re(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Re(e,/(.+)-inline(.+)/,Me+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zn(e)-1-n>6)switch(ft(e,n+1)){case 109:if(ft(e,n+4)!==45)break;case 102:return Re(e,/(.+:)(.+)-([^]+)/,"$1"+Me+"$2-$3$1"+cs+(ft(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~Yl(e,"stretch",0)?qx(Re(e,"stretch","fill-available"),n,o)+e:e}break;case 5152:case 5920:return Re(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,u,d,p,h,x){return Ge+a+":"+u+x+(d?Ge+a+"-span:"+(p?h:+h-+u)+x:"")+e});case 4949:if(ft(e,n+6)===121)return Re(e,":",":"+Me)+e;break;case 6444:switch(ft(e,ft(e,14)===45?18:11)){case 120:return Re(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Me+(ft(e,14)===45?"inline-":"")+"box$3$1"+Me+"$2$3$1"+Ge+"$2box$3")+e;case 100:return Re(e,":",":"+Ge)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Re(e,"scroll-","scroll-snap-")+e}return e}function ha(e,n){for(var o="",i=0;i<e.length;i++)o+=n(e[i],i,e,n)||"";return o}function dk(e,n,o,i){switch(e.type){case Jb:if(e.children.length)break;case Xb:case tp:return e.return=e.return||e.value;case Wx:return"";case Hx:return e.return=e.value+"{"+ha(e.children,i)+"}";case La:if(!zn(e.value=e.props.join(",")))return""}return zn(o=ha(e.children,i))?e.return=e.value+"{"+o+"}":""}function fk(e){var n=Kx(e);return function(o,i,a,u){for(var d="",p=0;p<n;p++)d+=e[p](o,i,a,u)||"";return d}}function pk(e){return function(n){n.root||(n=n.return)&&e(n)}}function hk(e,n,o,i){if(e.length>-1&&!e.return)switch(e.type){case tp:e.return=qx(e.value,e.length,o);return;case Hx:return ha([Ar(e,{value:Re(e.value,"@","@"+Me)})],i);case La:if(e.length)return ek(o=e.props,function(a){switch(rr(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fo(Ar(e,{props:[Re(a,/:(read-\w+)/,":"+cs+"$1")]})),Fo(Ar(e,{props:[a]})),Jd(e,{props:B0(o,i)});break;case"::placeholder":Fo(Ar(e,{props:[Re(a,/:(plac\w+)/,":"+Me+"input-$1")]})),Fo(Ar(e,{props:[Re(a,/:(plac\w+)/,":"+cs+"$1")]})),Fo(Ar(e,{props:[Re(a,/:(plac\w+)/,Ge+"input-$1")]})),Fo(Ar(e,{props:[a]})),Jd(e,{props:B0(o,i)});break}return""})}}var mk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Gt={},Xo=typeof process<"u"&&Gt!==void 0&&(Gt.REACT_APP_SC_ATTR||Gt.SC_ATTR)||"data-styled",Gx="active",Yx="data-styled-version",_a="6.1.14",rp=`/*!sc*/
`,ma=typeof window<"u"&&"HTMLElement"in window,gk=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Gt.REACT_APP_SC_DISABLE_SPEEDY!==""?Gt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Gt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Gt!==void 0&&Gt.SC_DISABLE_SPEEDY!==void 0&&Gt.SC_DISABLE_SPEEDY!==""&&Gt.SC_DISABLE_SPEEDY!=="false"&&Gt.SC_DISABLE_SPEEDY),xk={},Fa=Object.freeze([]),Jo=Object.freeze({});function Xx(e,n,o){return o===void 0&&(o=Jo),e.theme!==o.theme&&e.theme||n||o.theme}var Jx=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),yk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wk=/(^-|-$)/g;function U0(e){return e.replace(yk,"-").replace(wk,"")}var vk=/(a)(d)/gi,zl=52,V0=function(e){return String.fromCharCode(e+(e>25?39:97))};function tf(e){var n,o="";for(n=Math.abs(e);n>zl;n=n/zl|0)o=V0(n%zl)+o;return(V0(n%zl)+o).replace(vk,"$1-$2")}var od,Zx=5381,Vo=function(e,n){for(var o=n.length;o;)e=33*e^n.charCodeAt(--o);return e},ey=function(e){return Vo(Zx,e)};function op(e){return tf(ey(e)>>>0)}function bk(e){return e.displayName||e.name||"Component"}function id(e){return typeof e=="string"&&!0}var ty=typeof Symbol=="function"&&Symbol.for,ny=ty?Symbol.for("react.memo"):60115,kk=ty?Symbol.for("react.forward_ref"):60112,Sk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jk={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ek=((od={})[kk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},od[ny]=ry,od);function K0(e){return("type"in(n=e)&&n.type.$$typeof)===ny?ry:"$$typeof"in e?Ek[e.$$typeof]:Sk;var n}var Ck=Object.defineProperty,$k=Object.getOwnPropertyNames,Q0=Object.getOwnPropertySymbols,Ak=Object.getOwnPropertyDescriptor,Tk=Object.getPrototypeOf,q0=Object.prototype;function oy(e,n,o){if(typeof n!="string"){if(q0){var i=Tk(n);i&&i!==q0&&oy(e,i,o)}var a=$k(n);Q0&&(a=a.concat(Q0(n)));for(var u=K0(e),d=K0(n),p=0;p<a.length;++p){var h=a[p];if(!(h in jk||o&&o[h]||d&&h in d||u&&h in u)){var x=Ak(n,h);try{Ck(e,h,x)}catch{}}}}return e}function io(e){return typeof e=="function"}function ip(e){return typeof e=="object"&&"styledComponentId"in e}function eo(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function ga(e,n){if(e.length===0)return"";for(var o=e[0],i=1;i<e.length;i++)o+=e[i];return o}function ps(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nf(e,n,o){if(o===void 0&&(o=!1),!o&&!ps(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)e[i]=nf(e[i],n[i]);else if(ps(n))for(var i in n)e[i]=nf(e[i],n[i]);return e}function sp(e,n){Object.defineProperty(e,"toString",{value:n})}function so(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Rk=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var o=0,i=0;i<n;i++)o+=this.groupSizes[i];return o},e.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,u=a;n>=u;)if((u<<=1)<0)throw so(16,"".concat(n));this.groupSizes=new Uint32Array(u),this.groupSizes.set(i),this.length=u;for(var d=a;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(n+1),h=(d=0,o.length);d<h;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[n]++,p++)},e.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o;this.groupSizes[n]=0;for(var u=i;u<a;u++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),u=a+i,d=a;d<u;d++)o+="".concat(this.tag.getRule(d)).concat(rp);return o},e}(),Zl=new Map,xa=new Map,ea=1,_l=function(e){if(Zl.has(e))return Zl.get(e);for(;xa.has(ea);)ea++;var n=ea++;return Zl.set(e,n),xa.set(n,e),n},Dk=function(e,n){ea=n+1,Zl.set(e,n),xa.set(n,e)},Pk="style[".concat(Xo,"][").concat(Yx,'="').concat(_a,'"]'),Ik=new RegExp("^".concat(Xo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Nk=function(e,n,o){for(var i,a=o.split(","),u=0,d=a.length;u<d;u++)(i=a[u])&&e.registerName(n,i)},Lk=function(e,n){for(var o,i=((o=n.textContent)!==null&&o!==void 0?o:"").split(rp),a=[],u=0,d=i.length;u<d;u++){var p=i[u].trim();if(p){var h=p.match(Ik);if(h){var x=0|parseInt(h[1],10),y=h[2];x!==0&&(Dk(y,x),Nk(e,y,h[3]),e.getTag().insertRules(x,a)),a.length=0}else a.push(p)}}},G0=function(e){for(var n=document.querySelectorAll(Pk),o=0,i=n.length;o<i;o++){var a=n[o];a&&a.getAttribute(Xo)!==Gx&&(Lk(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Ok(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var iy=function(e){var n=document.head,o=e||n,i=document.createElement("style"),a=function(p){var h=Array.from(p.querySelectorAll("style[".concat(Xo,"]")));return h[h.length-1]}(o),u=a!==void 0?a.nextSibling:null;i.setAttribute(Xo,Gx),i.setAttribute(Yx,_a);var d=Ok();return d&&i.setAttribute("nonce",d),o.insertBefore(i,u),i},Mk=function(){function e(n){this.element=iy(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,u=i.length;a<u;a++){var d=i[a];if(d.ownerNode===o)return d}throw so(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},e}(),zk=function(){function e(n){this.element=iy(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),_k=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Y0=ma,Fk={isServer:!ma,useCSSOMInjection:!gk},ya=function(){function e(n,o,i){n===void 0&&(n=Jo),o===void 0&&(o={});var a=this;this.options=pt(pt({},Fk),n),this.gs=o,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ma&&Y0&&(Y0=!1,G0(this)),sp(this,function(){return function(u){for(var d=u.getTag(),p=d.length,h="",x=function(w){var S=function(k){return xa.get(k)}(w);if(S===void 0)return"continue";var A=u.names.get(S),C=d.getGroup(w);if(A===void 0||!A.size||C.length===0)return"continue";var v="".concat(Xo,".g").concat(w,'[id="').concat(S,'"]'),j="";A!==void 0&&A.forEach(function(k){k.length>0&&(j+="".concat(k,","))}),h+="".concat(C).concat(v,'{content:"').concat(j,'"}').concat(rp)},y=0;y<p;y++)x(y);return h}(a)})}return e.registerId=function(n){return _l(n)},e.prototype.rehydrate=function(){!this.server&&ma&&G0(this)},e.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new e(pt(pt({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var i=o.useCSSOMInjection,a=o.target;return o.isServer?new _k(a):i?new Mk(a):new zk(a)}(this.options),new Rk(n)));var n},e.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},e.prototype.registerName=function(n,o){if(_l(n),this.names.has(n))this.names.get(n).add(o);else{var i=new Set;i.add(o),this.names.set(n,i)}},e.prototype.insertRules=function(n,o,i){this.registerName(n,o),this.getTag().insertRules(_l(n),i)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(_l(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Bk=/&/g,Wk=/^\s*\/\/.*$/gm;function sy(e,n){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(i){return"".concat(n," ").concat(i)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=sy(o.children,n)),o})}function Hk(e){var n,o,i,a=Jo,u=a.options,d=u===void 0?Jo:u,p=a.plugins,h=p===void 0?Fa:p,x=function(S,A,C){return C.startsWith(o)&&C.endsWith(o)&&C.replaceAll(o,"").length>0?".".concat(n):S},y=h.slice();y.push(function(S){S.type===La&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(Bk,o).replace(i,x))}),d.prefix&&y.push(hk),y.push(dk);var w=function(S,A,C,v){A===void 0&&(A=""),C===void 0&&(C=""),v===void 0&&(v="&"),n=v,o=A,i=new RegExp("\\".concat(o,"\\b"),"g");var j=S.replace(Wk,""),k=ck(C||A?"".concat(C," ").concat(A," { ").concat(j," }"):j);d.namespace&&(k=sy(k,d.namespace));var E=[];return ha(k,fk(y.concat(pk(function(R){return E.push(R)})))),E};return w.hash=h.length?h.reduce(function(S,A){return A.name||so(15),Vo(S,A.name)},Zx).toString():"",w}var Uk=new ya,rf=Hk(),ly=G.createContext({shouldForwardProp:void 0,styleSheet:Uk,stylis:rf});ly.Consumer;G.createContext(void 0);function of(){return g.useContext(ly)}var ay=function(){function e(n,o){var i=this;this.inject=function(a,u){u===void 0&&(u=rf);var d=i.name+u.hash;a.hasNameForId(i.id,d)||a.insertRules(i.id,d,u(i.rules,d,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,sp(this,function(){throw so(12,String(i.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=rf),this.name+n.hash},e}(),Vk=function(e){return e>="A"&&e<="Z"};function X0(e){for(var n="",o=0;o<e.length;o++){var i=e[o];if(o===1&&i==="-"&&e[0]==="-")return e;Vk(i)?n+="-"+i.toLowerCase():n+=i}return n.startsWith("ms-")?"-"+n:n}var cy=function(e){return e==null||e===!1||e===""},uy=function(e){var n,o,i=[];for(var a in e){var u=e[a];e.hasOwnProperty(a)&&!cy(u)&&(Array.isArray(u)&&u.isCss||io(u)?i.push("".concat(X0(a),":"),u,";"):ps(u)?i.push.apply(i,qo(qo(["".concat(a," {")],uy(u),!1),["}"],!1)):i.push("".concat(X0(a),": ").concat((n=a,(o=u)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in mk||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return i};function Rr(e,n,o,i){if(cy(e))return[];if(ip(e))return[".".concat(e.styledComponentId)];if(io(e)){if(!io(u=e)||u.prototype&&u.prototype.isReactComponent||!n)return[e];var a=e(n);return Rr(a,n,o,i)}var u;return e instanceof ay?o?(e.inject(o,i),[e.getName(i)]):[e]:ps(e)?uy(e):Array.isArray(e)?Array.prototype.concat.apply(Fa,e.map(function(d){return Rr(d,n,o,i)})):[e.toString()]}function dy(e){for(var n=0;n<e.length;n+=1){var o=e[n];if(io(o)&&!ip(o))return!1}return!0}var Kk=ey(_a),Qk=function(){function e(n,o,i){this.rules=n,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&dy(n),this.componentId=o,this.baseHash=Vo(Kk,o),this.baseStyle=i,ya.registerId(o)}return e.prototype.generateAndInjectStyles=function(n,o,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))a=eo(a,this.staticRulesId);else{var u=ga(Rr(this.rules,n,o,i)),d=tf(Vo(this.baseHash,u)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=i(u,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}a=eo(a,d),this.staticRulesId=d}else{for(var h=Vo(this.baseHash,i.hash),x="",y=0;y<this.rules.length;y++){var w=this.rules[y];if(typeof w=="string")x+=w;else if(w){var S=ga(Rr(w,n,o,i));h=Vo(h,S+y),x+=S}}if(x){var A=tf(h>>>0);o.hasNameForId(this.componentId,A)||o.insertRules(this.componentId,A,i(x,".".concat(A),void 0,this.componentId)),a=eo(a,A)}}return a},e}(),hs=G.createContext(void 0);hs.Consumer;function qk(e){var n=G.useContext(hs),o=g.useMemo(function(){return function(i,a){if(!i)throw so(14);if(io(i)){var u=i(a);return u}if(Array.isArray(i)||typeof i!="object")throw so(8);return a?pt(pt({},a),i):i}(e.theme,n)},[e.theme,n]);return e.children?G.createElement(hs.Provider,{value:o},e.children):null}var sd={};function Gk(e,n,o){var i=ip(e),a=e,u=!id(e),d=n.attrs,p=d===void 0?Fa:d,h=n.componentId,x=h===void 0?function(N,z){var K=typeof N!="string"?"sc":U0(N);sd[K]=(sd[K]||0)+1;var Y="".concat(K,"-").concat(op(_a+K+sd[K]));return z?"".concat(z,"-").concat(Y):Y}(n.displayName,n.parentComponentId):h,y=n.displayName,w=y===void 0?function(N){return id(N)?"styled.".concat(N):"Styled(".concat(bk(N),")")}(e):y,S=n.displayName&&n.componentId?"".concat(U0(n.displayName),"-").concat(n.componentId):n.componentId||x,A=i&&a.attrs?a.attrs.concat(p).filter(Boolean):p,C=n.shouldForwardProp;if(i&&a.shouldForwardProp){var v=a.shouldForwardProp;if(n.shouldForwardProp){var j=n.shouldForwardProp;C=function(N,z){return v(N,z)&&j(N,z)}}else C=v}var k=new Qk(o,S,i?a.componentStyle:void 0);function E(N,z){return function(K,Y,Z){var se=K.attrs,ge=K.componentStyle,ie=K.defaultProps,ue=K.foldedComponentIds,me=K.styledComponentId,B=K.target,$=G.useContext(hs),T=of(),H=K.shouldForwardProp||T.shouldForwardProp,W=Xx(Y,$,ie)||Jo,ee=function(Q,te,le){for(var L,P=pt(pt({},te),{className:void 0,theme:le}),ne=0;ne<Q.length;ne+=1){var pe=io(L=Q[ne])?L(P):L;for(var he in pe)P[he]=he==="className"?eo(P[he],pe[he]):he==="style"?pt(pt({},P[he]),pe[he]):pe[he]}return te.className&&(P.className=eo(P.className,te.className)),P}(se,Y,W),F=ee.as||B,M={};for(var X in ee)ee[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ee.theme===W||(X==="forwardedAs"?M.as=ee.forwardedAs:H&&!H(X,F)||(M[X]=ee[X]));var ce=function(Q,te){var le=of(),L=Q.generateAndInjectStyles(te,le.styleSheet,le.stylis);return L}(ge,ee),fe=eo(ue,me);return ce&&(fe+=" "+ce),ee.className&&(fe+=" "+ee.className),M[id(F)&&!Jx.has(F)?"class":"className"]=fe,Z&&(M.ref=Z),g.createElement(F,M)}(R,N,z)}E.displayName=w;var R=G.forwardRef(E);return R.attrs=A,R.componentStyle=k,R.displayName=w,R.shouldForwardProp=C,R.foldedComponentIds=i?eo(a.foldedComponentIds,a.styledComponentId):"",R.styledComponentId=S,R.target=i?a.target:e,Object.defineProperty(R,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=i?function(z){for(var K=[],Y=1;Y<arguments.length;Y++)K[Y-1]=arguments[Y];for(var Z=0,se=K;Z<se.length;Z++)nf(z,se[Z],!0);return z}({},a.defaultProps,N):N}}),sp(R,function(){return".".concat(R.styledComponentId)}),u&&oy(R,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),R}function J0(e,n){for(var o=[e[0]],i=0,a=n.length;i<a;i+=1)o.push(n[i],e[i+1]);return o}var Z0=function(e){return Object.assign(e,{isCss:!0})};function xe(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(io(e)||ps(e))return Z0(Rr(J0(Fa,qo([e],n,!0))));var i=e;return n.length===0&&i.length===1&&typeof i[0]=="string"?Rr(i):Z0(Rr(J0(i,n)))}function sf(e,n,o){if(o===void 0&&(o=Jo),!n)throw so(1,n);var i=function(a){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return e(n,o,xe.apply(void 0,qo([a],u,!1)))};return i.attrs=function(a){return sf(e,n,pt(pt({},o),{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return sf(e,n,pt(pt({},o),a))},i}var fy=function(e){return sf(Gk,e)},O=fy;Jx.forEach(function(e){O[e]=fy(e)});var Yk=function(){function e(n,o){this.rules=n,this.componentId=o,this.isStatic=dy(n),ya.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,o,i,a){var u=a(ga(Rr(this.rules,o,i,a)),""),d=this.componentId+n;i.insertRules(d,d,u)},e.prototype.removeStyles=function(n,o){o.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,o,i,a){n>2&&ya.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,o,i,a)},e}();function Xk(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=xe.apply(void 0,qo([e],n,!1)),a="sc-global-".concat(op(JSON.stringify(i))),u=new Yk(i,a),d=function(h){var x=of(),y=G.useContext(hs),w=G.useRef(x.styleSheet.allocateGSInstance(a)).current;return x.styleSheet.server&&p(w,h,x.styleSheet,y,x.stylis),G.useLayoutEffect(function(){if(!x.styleSheet.server)return p(w,h,x.styleSheet,y,x.stylis),function(){return u.removeStyles(w,x.styleSheet)}},[w,h,x.styleSheet,y,x.stylis]),null};function p(h,x,y,w,S){if(u.isStatic)u.renderStyles(h,xk,y,S);else{var A=pt(pt({},x),{theme:Xx(x,w,d.defaultProps)});u.renderStyles(h,A,y,S)}}return G.memo(d)}function mt(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=ga(xe.apply(void 0,qo([e],n,!1))),a=op(i);return new ay(a,i)}var Jk=`
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

`;const lp="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",ap="inset 2px 2px 3px rgba(0,0,0,0.2)",En=()=>xe`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Cn=({background:e="material",color:n="materialText"}={})=>xe`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[e]};
  color: ${({theme:o})=>o[n]};
`,ws=({mainColor:e="black",secondaryColor:n="transparent",pixelSize:o=2})=>xe`
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
`,lo=()=>xe`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:e})=>e.materialText};
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  border: 2px solid ${({theme:e})=>e.canvas};
  outline: 2px solid ${({theme:e})=>e.flatDark};
  outline-offset: -4px;
`,Bo={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Zk=({theme:e,topLeftInner:n,bottomRightInner:o,hasShadow:i=!1,hasInsetShadow:a=!1})=>[i?lp:!1,a?ap:!1,n!==null?`inset 1px 1px 0px 1px ${e[n]}`:!1,o!==null?`inset -1px -1px 0 1px ${e[o]}`:!1].filter(Boolean).join(", "),tt=({invert:e=!1,style:n="button"}={})=>{const o={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return xe`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:i})=>i[Bo[n][o.topLeftOuter]]};
    border-top-color: ${({theme:i})=>i[Bo[n][o.topLeftOuter]]};
    border-right-color: ${({theme:i})=>i[Bo[n][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:i})=>i[Bo[n][o.bottomRightOuter]]};
    box-shadow: ${({theme:i,shadow:a})=>Zk({theme:i,topLeftInner:Bo[n][o.topLeftInner],bottomRightInner:Bo[n][o.bottomRightInner],hasShadow:a})};
  `},Zo=()=>xe`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,eS=e=>Buffer.from(e).toString("base64"),tS=typeof btoa<"u"?btoa:eS,Fl=(e,n=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${n} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${tS(o)})`},cp=(e="default")=>xe`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:n})=>ws({mainColor:e==="flat"?n.flatLight:n.material,secondaryColor:e==="flat"?n.canvas:n.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Cn()}
    ${e==="flat"?lo():tt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:n})=>n.material};
  }
  ::-webkit-scrollbar-button {
    ${Cn()}
    ${e==="flat"?lo():tt({style:"window"})}
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
    background-image: ${({theme:n})=>Fl(n.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:n})=>Fl(n.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:n})=>Fl(n.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:n})=>Fl(n.materialText,0)};
  }
`,nS=O.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,rS=g.forwardRef(({children:e,underline:n=!0,...o},i)=>G.createElement(nS,{ref:i,underline:n,...o},e));rS.displayName="Anchor";const oS=O.header`
  ${tt()};
  ${Cn()};

  position: ${e=>{var n;return(n=e.position)!==null&&n!==void 0?n:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,iS=g.forwardRef(({children:e,fixed:n=!0,position:o="fixed",...i},a)=>G.createElement(oS,{fixed:n,position:n!==!1?o:void 0,ref:a,...i},e));iS.displayName="AppBar";const po=()=>{};function to(e,n,o){return o!==null&&e>o?o:n!==null&&e<n?n:e}function sS(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),i=o[0].split(".")[1];return(i?i.length:0)+parseInt(o[1],10)}const n=e.toString().split(".")[1];return n?n.length:0}function eg(e,n,o){const i=Math.round((e-o)/n)*n+o;return Number(i.toFixed(sS(n)))}function Nr(e){return typeof e=="number"?`${e}px`:e}const lS=O.div`
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
`,aS=O.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,cS=g.forwardRef(({alt:e="",children:n,noBorder:o=!1,size:i=35,square:a=!1,src:u,...d},p)=>G.createElement(lS,{noBorder:o,ref:p,size:Nr(i),square:a,src:u,...d},u?G.createElement(aS,{src:u,alt:e}):n));cS.displayName="Avatar";const wt={sm:"28px",md:"36px",lg:"44px"},uS=xe`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:e="md"})=>wt[e]};
  width: ${({fullWidth:e,size:n="md",square:o})=>e?"100%":o?wt[n]:"auto"};
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
`,Ba=O.button`
  ${({active:e,disabled:n,primary:o,theme:i,variant:a})=>a==="flat"?xe`
          ${lo()}
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
            ${!e&&!n&&Zo}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?xe`
          ${Cn()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!n&&!e&&tt({style:"buttonThin"})}
          }
          &:active {
            ${!n&&tt({style:"buttonThinPressed"})}
          }
          ${e&&tt({style:"buttonThinPressed"})}
          ${n&&En()}
        `:xe`
          ${Cn()};
          border: none;
          ${n&&En()}
          ${e?ws({mainColor:i.material,secondaryColor:i.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${o?xe`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${i.borderDarkest};
                `:xe`
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
            ${!e&&!n&&Zo}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${uS}
`,Ke=g.forwardRef(({onClick:e,disabled:n=!1,children:o,type:i="button",fullWidth:a=!1,size:u="md",square:d=!1,active:p=!1,onTouchStart:h=po,primary:x=!1,variant:y="default",...w},S)=>G.createElement(Ba,{active:p,disabled:n,$disabled:n,fullWidth:a,onClick:n?void 0:e,onTouchStart:h,primary:x,ref:S,size:u,square:d,type:i,variant:y,...w},o));Ke.displayName="Button";function Lr({defaultValue:e,onChange:n,onChangePropName:o="onChange",readOnly:i,value:a,valuePropName:u="value"}){const d=a!==void 0,[p,h]=g.useState(e),x=g.useCallback(y=>{d||h(y)},[d]);if(d&&typeof n!="function"&&!i){const y=`Warning: You provided a \`${u}\` prop to a component without an \`${o}\` handler.${u==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${u}\`.`}`;console.warn(y)}return[d?a:p,x]}const lf=O.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${e=>wt[e.size]};
  width: ${e=>e.square?wt[e.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${e=>e.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${e=>wt[e.size]};
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
  ${e=>e.$disabled&&En()}
`,Pe=g.forwardRef(({size:e="lg",disabled:n,square:o,children:i,onClick:a,primary:u,...d},p)=>G.createElement(lf,{$disabled:n,size:e,square:o,onClick:n?void 0:a,primary:u,role:"menuitem",ref:p,"aria-disabled":n,...d},i));Pe.displayName="MenuListItem";const _n=O.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${tt({style:"window"})}
  ${Cn()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;_n.displayName="MenuList";const Fn=20,wa=O.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Fn}px;
  height: ${Fn}px;
  opacity: 0;
  z-index: -1;
`,up=O.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&En()}

  ${lf} & {
    margin: 0;
    height: 100%;
  }
  ${lf}:hover & {
    ${({$disabled:e,theme:n})=>!e&&xe`
        color: ${n.materialTextInvert};
      `};
  }
`,dp=O.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${wa}:focus ~ & {
    ${Zo}
  }
  ${wa}:not(:disabled) ~ &:active {
    ${Zo}
  }
`,Wn=O.div`
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
    ${e=>e.shadow&&`box-shadow:${ap};`}
  }
`,dS=O.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${cp()}
`,py=g.forwardRef(({children:e,shadow:n=!0,...o},i)=>G.createElement(Wn,{ref:i,shadow:n,...o},G.createElement(dS,null,e)));py.displayName="ScrollView";const hy=xe`
  width: ${Fn}px;
  height: ${Fn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,fS=O(Wn)`
  ${hy}
  width: ${Fn}px;
  height: ${Fn}px;
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
  &:before {
    box-shadow: none;
  }
`,pS=O.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  ${hy}
  width: ${Fn-4}px;
  height: ${Fn-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
`,hS=O.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,mS=O.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:n})=>ws({mainColor:e?n.checkmarkDisabled:n.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,gS={flat:pS,default:fS},ao=g.forwardRef(({checked:e,className:n="",defaultChecked:o=!1,disabled:i=!1,indeterminate:a=!1,label:u="",onChange:d=po,style:p={},value:h,variant:x="default",...y},w)=>{var S;const[A,C]=Lr({defaultValue:o,onChange:d,readOnly:(S=y.readOnly)!==null&&S!==void 0?S:i,value:e}),v=g.useCallback(E=>{const R=E.target.checked;C(R),d(E)},[d,C]),j=gS[x];let k=null;return a?k=mS:A&&(k=hS),G.createElement(up,{$disabled:i,className:n,style:p},G.createElement(wa,{disabled:i,onChange:i?void 0:v,readOnly:i,type:"checkbox",value:h,checked:A,"data-indeterminate":a,ref:w,...y}),G.createElement(j,{$disabled:i,role:"presentation"},k&&G.createElement(k,{$disabled:i,variant:x})),u&&G.createElement(dp,null,u))});ao.displayName="Checkbox";const cn=O.div`
  ${({orientation:e,theme:n,size:o="100%"})=>e==="vertical"?`
    height: ${Nr(o)};
    border-left: 2px solid ${n.borderDark};
    border-right: 2px solid ${n.borderLightest};
    margin: 0;
    `:`
    width: ${Nr(o)};
    border-bottom: 2px solid ${n.borderLightest};
    border-top: 2px solid ${n.borderDark};
    margin: 0;
    `}
`;cn.displayName="Separator";const xS=O(Ba)`
  padding-left: 8px;
`,yS=O(cn)`
  height: 21px;
  position: relative;
  top: 0;
`,my=O.input`
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
`,wS=O.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:e})=>e};

  ${({$disabled:e})=>e?xe`
          border: 2px solid ${({theme:n})=>n.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
          );
        `:xe`
          border: 2px solid ${({theme:n})=>n.materialText};
        `}
  ${my}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${Zo}
    outline-offset: -8px;
  }
`,vS=O.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:e})=>e?xe`
          border-top: 6px solid ${({theme:n})=>n.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
          );
        `:xe`
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
`,bS=g.forwardRef(({value:e,defaultValue:n,onChange:o=po,disabled:i=!1,variant:a="default",...u},d)=>{var p;const[h,x]=Lr({defaultValue:n,onChange:o,readOnly:(p=u.readOnly)!==null&&p!==void 0?p:i,value:e}),y=w=>{const S=w.target.value;x(S),o(w)};return G.createElement(xS,{disabled:i,as:"div",variant:a,size:"md"},G.createElement(my,{onChange:y,readOnly:i,disabled:i,value:h??"#008080",type:"color",ref:d,...u}),G.createElement(wS,{$disabled:i,color:h??"#008080",role:"presentation"}),a==="default"&&G.createElement(yS,{orientation:"vertical"}),G.createElement(vS,{$disabled:i,variant:a}))});bS.displayName="ColorInput";const kS=O.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:e})=>xe`
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
      ${ws({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,tg=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],SS=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function jS({digit:e=0,pixelSize:n=2,...o}){const i=SS[Number(e)].map((a,u)=>a?`${tg[u]} active`:tg[u]);return G.createElement(kS,{pixelSize:n,...o},i.map((a,u)=>G.createElement("span",{className:a,key:u})))}const ES=O.div`
  ${tt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,CS={sm:1,md:2,lg:3,xl:4},$S=g.forwardRef(({value:e=0,minLength:n=3,size:o="md",...i},a)=>{const u=g.useMemo(()=>e.toString().padStart(n,"0").split(""),[n,e]);return G.createElement(ES,{ref:a,...i},u.map((d,p)=>G.createElement(jS,{digit:d,pixelSize:CS[o],key:p})))});$S.displayName="Counter";const gy=xe`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${wt.md};
`,AS=O(Wn).attrs({"data-testid":"variant-default"})`
  ${gy}
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
`,TS=O.div.attrs({"data-testid":"variant-flat"})`
  ${lo()}
  ${gy}
  position: relative;
`,xy=xe`
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
  ${({disabled:e,variant:n})=>n!=="flat"&&e&&En()}
`,RS=O.input`
  ${xy}
  padding: 0 8px;
`,DS=O.textarea`
  ${xy}
  padding: 8px;
  resize: none;
  ${({variant:e})=>cp(e)}
`,ir=g.forwardRef(({className:e,disabled:n=!1,fullWidth:o,onChange:i=po,shadow:a=!0,style:u,variant:d="default",...p},h)=>{const x=d==="flat"?TS:AS,y=g.useMemo(()=>{var w;return p.multiline?G.createElement(DS,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,variant:d,...p}):G.createElement(RS,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,type:(w=p.type)!==null&&w!==void 0?w:"text",variant:d,...p})},[n,i,p,h,d]);return G.createElement(x,{className:e,fullWidth:o,$disabled:n,shadow:a,style:u},y)});ir.displayName="TextInput";const PS=O.div`
  display: inline-flex;
  align-items: center;
`,af=O(Ke)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?xe`
          height: calc(50% - 1px);
        `:xe`
          height: 50%;
        `}
`,IS=O.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:e})=>e==="flat"?xe`
          height: calc(${wt.md} - 4px);
        `:xe`
          height: ${wt.md};
          margin-left: 2px;
        `}
`,ng=O.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:e})=>e?xe`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:n})=>n.materialText};
        `:xe`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:n})=>n.materialText};
        `}
  ${af}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?xe`
            border-bottom-color: ${({theme:n})=>n.materialTextDisabled};
          `:xe`
            border-top-color: ${({theme:n})=>n.materialTextDisabled};
          `}
  }
`,yy=g.forwardRef(({className:e,defaultValue:n,disabled:o=!1,max:i,min:a,onChange:u,readOnly:d,step:p=1,style:h,value:x,variant:y="default",width:w,...S},A)=>{const[C,v]=Lr({defaultValue:n,onChange:u,readOnly:d,value:x}),j=g.useCallback(K=>{const Y=parseFloat(K.target.value);v(Y)},[v]),k=g.useCallback(K=>{const Y=to(parseFloat(((C??0)+K).toFixed(2)),a??null,i??null);v(Y),u==null||u(Y)},[i,a,u,v,C]),E=g.useCallback(()=>{C!==void 0&&(u==null||u(C))},[u,C]),R=g.useCallback(()=>{k(p)},[k,p]),N=g.useCallback(()=>{k(-p)},[k,p]),z=y==="flat"?"flat":"raised";return G.createElement(PS,{className:e,style:{...h,width:w!==void 0?Nr(w):"auto"},...S},G.createElement(ir,{value:C,variant:y,onChange:j,disabled:o,type:"number",readOnly:d,ref:A,fullWidth:!0,onBlur:E}),G.createElement(IS,{variant:y},G.createElement(af,{"data-testid":"increment",variant:z,disabled:o||d,onClick:R},G.createElement(ng,{invert:!0})),G.createElement(af,{"data-testid":"decrement",variant:z,disabled:o||d,onClick:N},G.createElement(ng,null))))});yy.displayName="NumberInput";function NS(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<10;o+=1)n+=e[Math.floor(Math.random()*e.length)];return n}const wy=e=>g.useMemo(()=>NS(),[e]),vy=xe`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,by=xe`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,fp=O.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,LS=O.div`
  ${vy}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${fp}:focus & {
    ${by}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,ky=xe`
  height: ${wt.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:n})=>e?En():n.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,OS=O(Wn)`
  ${ky}
  background: ${({$disabled:e=!1,theme:n})=>e?n.material:n.canvas};
  &:focus {
    outline: 0;
  }
`,MS=O.div`
  ${lo()}
  ${ky}
  background: ${({$disabled:e=!1,theme:n})=>e?n.flatLight:n.canvas};
`,zS=O.select`
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
  ${vy}
  cursor: pointer;
  &:disabled {
    ${En()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Sy=O(Ba).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:e="default"})=>e==="flat"?xe`
          height: 100%;
          margin-right: 0;
        `:xe`
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
`,_S=O.span`
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
  ${Sy}:active & {
    margin-top: 2px;
  }
`,FS=O.ul`
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
  box-shadow: ${lp};
  ${({variant:e="default"})=>e==="flat"?xe`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:n})=>n.flatDark};
        `:xe`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:n})=>n.borderDarkest};
        `}
  ${({variant:e="default"})=>cp(e)}
`,BS=O.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${wt.md} - 4px);
  line-height: calc(${wt.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:e})=>e?by:""}
  user-select: none;
`,WS=[],jy=({className:e,defaultValue:n,disabled:o,native:i,onChange:a,options:u=WS,readOnly:d,style:p,value:h,variant:x,width:y})=>{var w;const S=g.useMemo(()=>u.filter(Boolean),[u]),[A,C]=Lr({defaultValue:n??((w=S==null?void 0:S[0])===null||w===void 0?void 0:w.value),onChange:a,readOnly:d,value:h}),v=!(o||d),j=g.useMemo(()=>({className:e,style:{...p,width:y}}),[e,p,y]),k=g.useMemo(()=>G.createElement(Sy,{as:"div","data-testid":"select-button",$disabled:o,native:i,tabIndex:-1,variant:x==="flat"?"flat":"raised"},G.createElement(_S,{"data-testid":"select-icon",$disabled:o})),[o,i,x]),E=g.useMemo(()=>x==="flat"?MS:OS,[x]);return g.useMemo(()=>({isEnabled:v,options:S,value:A,setValue:C,wrapperProps:j,DropdownButton:k,Wrapper:E}),[k,E,v,S,C,A,j])},HS={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},US=1e3,VS=({onBlur:e,onChange:n,onClose:o,onFocus:i,onKeyDown:a,onMouseDown:u,onOpen:d,open:p,options:h,readOnly:x,value:y,selectRef:w,setValue:S,wrapperRef:A})=>{const C=g.useRef(null),v=g.useRef([]),j=g.useRef(0),k=g.useRef(0),E=g.useRef(),R=g.useRef("search"),N=g.useRef(""),z=g.useRef(),[K,Y]=Lr({defaultValue:!1,onChange:d,onChangePropName:"onOpen",readOnly:x,value:p,valuePropName:"open"}),Z=g.useMemo(()=>{const P=h.findIndex(ne=>ne.value===y);return j.current=to(P,0,null),h[P]},[h,y]),[se,ge]=g.useState(h[0]),ie=g.useCallback(P=>{const ne=C.current,pe=v.current[P];if(!pe||!ne){E.current=P;return}E.current=void 0;const he=ne.clientHeight,be=ne.scrollTop,_e=ne.scrollTop+he,He=pe.offsetTop,Rt=pe.offsetHeight,Wt=pe.offsetTop+pe.offsetHeight;He<be&&ne.scrollTo(0,He),Wt>_e&&ne.scrollTo(0,He-he+Rt),pe.focus({preventScroll:!0})},[C]),ue=g.useCallback((P,{scroll:ne}={})=>{var pe;const he=h.length-1;let be;switch(P){case"first":{be=0;break}case"last":{be=he;break}case"next":{be=to(k.current+1,0,he);break}case"previous":{be=to(k.current-1,0,he);break}case"selected":{be=to((pe=j.current)!==null&&pe!==void 0?pe:0,0,he);break}default:be=P}k.current=be,ge(h[be]),ne&&ie(be)},[k,h,ie]),me=g.useCallback(({fromEvent:P})=>{Y(!0),ue("selected",{scroll:!0}),d==null||d({fromEvent:P})},[ue,d,Y]),B=g.useCallback(()=>{R.current="search",N.current="",clearTimeout(z.current)},[]),$=g.useCallback(({focusSelect:P,fromEvent:ne})=>{var pe;o==null||o({fromEvent:ne}),Y(!1),ge(h[0]),B(),E.current=void 0,P&&((pe=w.current)===null||pe===void 0||pe.focus())},[B,o,h,w,Y]),T=g.useCallback(({fromEvent:P})=>{K?$({focusSelect:!1,fromEvent:P}):me({fromEvent:P})},[$,me,K]),H=g.useCallback((P,{fromEvent:ne})=>{j.current!==P&&(j.current=P,S(h[P].value),n==null||n(h[P],{fromEvent:ne}))},[n,h,S]),W=g.useCallback(({focusSelect:P,fromEvent:ne})=>{H(k.current,{fromEvent:ne}),$({focusSelect:P,fromEvent:ne})},[$,H]),ee=g.useCallback((P,{fromEvent:ne,select:pe})=>{var he;switch(R.current==="cycleFirstLetter"&&P!==N.current&&(R.current="search"),P===N.current?R.current="cycleFirstLetter":N.current+=P,R.current){case"search":{let be=h.findIndex(_e=>{var He;return((He=_e.label)===null||He===void 0?void 0:He.toLocaleUpperCase().indexOf(N.current))===0});be<0&&(be=h.findIndex(_e=>{var He;return((He=_e.label)===null||He===void 0?void 0:He.toLocaleUpperCase().indexOf(P))===0}),N.current=P),be>=0&&(pe?H(be,{fromEvent:ne}):ue(be,{scroll:!0}));break}case"cycleFirstLetter":{const be=pe?(he=j.current)!==null&&he!==void 0?he:-1:k.current;let _e=h.findIndex((He,Rt)=>{var Wt;return Rt>be&&((Wt=He.label)===null||Wt===void 0?void 0:Wt.toLocaleUpperCase().indexOf(P))===0});_e<0&&(_e=h.findIndex(He=>{var Rt;return((Rt=He.label)===null||Rt===void 0?void 0:Rt.toLocaleUpperCase().indexOf(P))===0})),_e>=0&&(pe?H(_e,{fromEvent:ne}):ue(_e,{scroll:!0}));break}}clearTimeout(z.current),z.current=setTimeout(()=>{R.current==="search"&&(N.current="")},US)},[ue,h,H]),F=g.useCallback(P=>{var ne;P.button===0&&(P.preventDefault(),(ne=w.current)===null||ne===void 0||ne.focus(),T({fromEvent:P}),u==null||u(P))},[u,w,T]),M=g.useCallback(P=>{W({focusSelect:!0,fromEvent:P})},[W]),X=g.useCallback(P=>{const{altKey:ne,code:pe,ctrlKey:he,metaKey:be,shiftKey:_e}=P,{ARROW_DOWN:He,ARROW_UP:Rt,END:Wt,ENTER:Rn,ESC:tn,HOME:Kn,SPACE:Dn,TAB:Qn}=HS,di=ne||he||be||_e;if(!(pe===Qn&&(ne||he||be)||pe!==Qn&&di))switch(pe){case He:{if(P.preventDefault(),!K){me({fromEvent:P});return}ue("next",{scroll:!0});break}case Rt:{if(P.preventDefault(),!K){me({fromEvent:P});return}ue("previous",{scroll:!0});break}case Wt:{if(P.preventDefault(),!K){me({fromEvent:P});return}ue("last",{scroll:!0});break}case Rn:{if(!K)return;P.preventDefault(),W({focusSelect:!0,fromEvent:P});break}case tn:{if(!K)return;P.preventDefault(),$({focusSelect:!0,fromEvent:P});break}case Kn:{if(P.preventDefault(),!K){me({fromEvent:P});return}ue("first",{scroll:!0});break}case Dn:{P.preventDefault(),K?W({focusSelect:!0,fromEvent:P}):me({fromEvent:P});break}case Qn:{if(!K)return;_e||P.preventDefault(),W({focusSelect:!_e,fromEvent:P});break}default:!di&&pe.match(/^Key/)&&(P.preventDefault(),P.stopPropagation(),ee(pe.replace(/^Key/,""),{select:!K,fromEvent:P}))}},[ue,$,K,me,ee,W]),ce=g.useCallback(P=>{X(P),a==null||a(P)},[X,a]),fe=g.useCallback(P=>{ue(P)},[ue]),Q=g.useCallback(P=>{K||(B(),e==null||e(P))},[B,e,K]),te=g.useCallback(P=>{B(),i==null||i(P)},[B,i]),le=g.useCallback(P=>{C.current=P,E.current!==void 0&&ie(E.current)},[ie]),L=g.useCallback((P,ne)=>{v.current[ne]=P,E.current===ne&&ie(E.current)},[ie]);return g.useEffect(()=>{if(!K)return()=>{};const P=ne=>{var pe;const he=ne.target;!((pe=A.current)===null||pe===void 0)&&pe.contains(he)||(ne.preventDefault(),$({focusSelect:!1,fromEvent:ne}))};return document.addEventListener("mousedown",P),()=>{document.removeEventListener("mousedown",P)}},[$,K,A]),g.useMemo(()=>({activeOption:se,handleActivateOptionIndex:fe,handleBlur:Q,handleButtonKeyDown:ce,handleDropdownKeyDown:X,handleFocus:te,handleMouseDown:F,handleOptionClick:M,handleSetDropdownRef:le,handleSetOptionRef:L,open:K,selectedOption:Z}),[se,fe,Q,ce,te,X,F,M,le,L,K,Z])},KS=g.forwardRef(({className:e,defaultValue:n,disabled:o,onChange:i,options:a,readOnly:u,style:d,value:p,variant:h,width:x,...y},w)=>{const{isEnabled:S,options:A,setValue:C,value:v,DropdownButton:j,Wrapper:k}=jy({defaultValue:n,disabled:o,native:!0,onChange:i,options:a,readOnly:u,value:p,variant:h}),E=g.useCallback(R=>{const N=A.find(z=>z.value===R.target.value);N&&(C(N.value),i==null||i(N,{fromEvent:R}))},[i,A,C]);return G.createElement(k,{className:e,style:{...d,width:x}},G.createElement(fp,null,G.createElement(zS,{...y,disabled:o,onChange:S?E:po,ref:w,value:v},A.map((R,N)=>{var z;return G.createElement("option",{key:`${R.value}-${N}`,value:R.value},(z=R.label)!==null&&z!==void 0?z:R.value)})),j))});KS.displayName="SelectNative";function QS({activateOptionIndex:e,active:n,index:o,onClick:i,option:a,selected:u,setRef:d}){const p=g.useCallback(()=>{e(o)},[e,o]),h=g.useCallback(y=>{d(y,o)},[o,d]),x=wy();return G.createElement(BS,{active:n,"aria-selected":u?"true":void 0,"data-value":a.value,id:x,onClick:i,onMouseEnter:p,ref:h,role:"option",tabIndex:0},a.label)}function qS({"aria-label":e,"aria-labelledby":n,className:o,defaultValue:i,disabled:a=!1,formatDisplay:u,inputProps:d,labelId:p,menuMaxHeight:h,name:x,onBlur:y,onChange:w,onClose:S,onFocus:A,onKeyDown:C,onMouseDown:v,onOpen:j,open:k,options:E,readOnly:R,shadow:N=!0,style:z,variant:K="default",value:Y,width:Z="auto",...se},ge){const{isEnabled:ie,options:ue,setValue:me,value:B,wrapperProps:$,DropdownButton:T,Wrapper:H}=jy({className:o,defaultValue:i,disabled:a,native:!1,onChange:w,options:E,style:z,readOnly:R,value:Y,variant:K,width:Z}),W=g.useRef(null),ee=g.useRef(null),F=g.useRef(null),{activeOption:M,handleActivateOptionIndex:X,handleBlur:ce,handleButtonKeyDown:fe,handleDropdownKeyDown:Q,handleFocus:te,handleMouseDown:le,handleOptionClick:L,handleSetDropdownRef:P,handleSetOptionRef:ne,open:pe,selectedOption:he}=VS({onBlur:y,onChange:w,onClose:S,onFocus:A,onKeyDown:C,onMouseDown:v,onOpen:j,open:k,options:ue,value:B,selectRef:ee,setValue:me,wrapperRef:F});g.useImperativeHandle(ge,()=>({focus:Rn=>{var tn;(tn=ee.current)===null||tn===void 0||tn.focus(Rn)},node:W.current,value:String(B)}),[B]);const be=g.useMemo(()=>he?typeof u=="function"?u(he):he.label:"",[u,he]),_e=ie?1:void 0,He=g.useMemo(()=>h?{overflow:"auto",maxHeight:h}:void 0,[h]),Rt=wy(),Wt=g.useMemo(()=>ue.map((Rn,tn)=>{const Kn=`${B}-${tn}`,Dn=Rn===M,Qn=Rn===he;return G.createElement(QS,{activateOptionIndex:X,active:Dn,index:tn,key:Kn,onClick:L,option:Rn,selected:Qn,setRef:ne})}),[M,X,L,ne,ue,he,B]);return G.createElement(H,{...$,$disabled:a,ref:F,shadow:N,style:{...z,width:Z}},G.createElement("input",{name:x,ref:W,type:"hidden",value:String(B),...d}),G.createElement(fp,{"aria-disabled":a,"aria-expanded":pe,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":n??p,"aria-owns":ie&&pe?Rt:void 0,onBlur:ce,onFocus:te,onKeyDown:fe,onMouseDown:ie?le:v,ref:ee,role:"button",tabIndex:_e,...se},G.createElement(LS,null,be),T),ie&&pe&&G.createElement(FS,{id:Rt,onKeyDown:Q,ref:P,role:"listbox",style:He,tabIndex:0,variant:K},Wt))}const Ey=g.forwardRef(qS);Ey.displayName="Select";const GS=O.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,cf=g.forwardRef(function({children:n,noPadding:o=!1,...i},a){return G.createElement(GS,{noPadding:o,ref:a,...i},n)});cf.displayName="Toolbar";const YS=O.div`
  padding: 16px;
`,Mr=g.forwardRef(function({children:n,...o},i){return G.createElement(YS,{ref:i,...o},n)});Mr.displayName="WindowContent";const XS=O.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:e})=>e.material};
  ${({active:e})=>e===!1?xe`
          background: ${({theme:n})=>n.headerNotActiveBackground};
          color: ${({theme:n})=>n.headerNotActiveText};
        `:xe`
          background: ${({theme:n})=>n.headerBackground};
          color: ${({theme:n})=>n.headerText};
        `}

  ${Ba} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ri=g.forwardRef(function({active:n=!0,children:o,...i},a){return G.createElement(XS,{active:n,ref:a,...i},o)});ri.displayName="WindowHeader";const JS=O.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${tt({style:"window"})}
  ${Cn()}
`,ZS=O.span`
  ${({theme:e})=>xe`
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
`,oi=g.forwardRef(({children:e,resizable:n=!1,resizeRef:o,shadow:i=!0,...a},u)=>G.createElement(JS,{ref:u,shadow:i,...a},e,n&&G.createElement(ZS,{"data-testid":"resizeHandle",ref:o})));oi.displayName="Window";const ej=O(py)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,tj=O.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,nj=O.div`
  display: flex;
  flex-wrap: wrap;
`,nr=O.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,rj=O.span`
  cursor: pointer;

  background: ${({active:e,theme:n})=>e?n.hoverBackground:"transparent"};
  color: ${({active:e,theme:n})=>e?n.canvasTextInvert:n.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:n})=>n?"none":e.materialDark};
  }
`,oj=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function ij(e,n){return new Date(e,n+1,0).getDate()}function sj(e,n,o){return new Date(e,n,o).getDay()}function lj(e){const n=new Date(Date.parse(e)),o=n.getUTCDate(),i=n.getUTCMonth(),a=n.getUTCFullYear();return{day:o,month:i,year:a}}const aj=g.forwardRef(({className:e,date:n=new Date().toISOString(),onAccept:o,onCancel:i,shadow:a=!0},u)=>{const[d,p]=g.useState(()=>lj(n)),{year:h,month:x,day:y}=d,w=g.useCallback(({value:j})=>{p(k=>({...k,month:j}))},[]),S=g.useCallback(j=>{p(k=>({...k,year:j}))},[]),A=g.useCallback(j=>{p(k=>({...k,day:j}))},[]),C=g.useCallback(()=>{const j=[d.year,d.month+1,d.day].map(k=>String(k).padStart(2,"0")).join("-");o==null||o(j)},[d.day,d.month,d.year,o]),v=g.useMemo(()=>{const j=Array.from({length:42}),k=sj(h,x,1);let E=y;const R=ij(h,x);return E=E<R?E:R,j.forEach((N,z)=>{if(z>=k&&z<R+k){const K=z-k+1;j[z]=G.createElement(nr,{key:z,onClick:()=>{A(K)}},G.createElement(rj,{active:K===E},K))}else j[z]=G.createElement(nr,{key:z})}),j},[y,A,x,h]);return G.createElement(oi,{className:e,ref:u,shadow:a,style:{margin:20}},G.createElement(ri,null,G.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),G.createElement(Mr,null,G.createElement(cf,{noPadding:!0,style:{justifyContent:"space-between"}},G.createElement(Ey,{options:oj,value:x,onChange:w,width:128,menuMaxHeight:200}),G.createElement(yy,{value:h,onChange:S,width:100})),G.createElement(ej,null,G.createElement(tj,null,G.createElement(nr,null,"S"),G.createElement(nr,null,"M"),G.createElement(nr,null,"T"),G.createElement(nr,null,"W"),G.createElement(nr,null,"T"),G.createElement(nr,null,"F"),G.createElement(nr,null,"S")),G.createElement(nj,null,v)),G.createElement(cf,{noPadding:!0,style:{justifyContent:"space-between"}},G.createElement(Ke,{fullWidth:!0,onClick:i,disabled:!i},"Cancel"),G.createElement(Ke,{fullWidth:!0,onClick:o?C:void 0,disabled:!o},"OK"))))});aj.displayName="DatePicker";const cj=e=>{switch(e){case"status":case"well":return xe`
        ${tt({style:"status"})}
      `;case"window":case"outside":return xe`
        ${tt({style:"window"})}
      `;case"field":return xe`
        ${tt({style:"field"})}
      `;default:return xe`
        ${tt()}
      `}},uj=O.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>cj(e)}
  ${({variant:e})=>Cn(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,vt=g.forwardRef(({children:e,shadow:n=!1,variant:o="window",...i},a)=>G.createElement(uj,{ref:a,shadow:n,variant:o,...i},e));vt.displayName="Frame";const dj=O.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:e,variant:n})=>n==="flat"?e.flatDark:e.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${({variant:e})=>e!=="flat"&&xe`
      box-shadow: -1px -1px 0 1px ${({theme:n})=>n.borderDark},
        inset -1px -1px 0 1px ${({theme:n})=>n.borderDark};
    `}
  ${e=>e.$disabled&&En()}
`,fj=O.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:n})=>n==="flat"?e.canvas:e.material};
`,Cy=g.forwardRef(({label:e,disabled:n=!1,variant:o="default",children:i,...a},u)=>G.createElement(dj,{"aria-disabled":n,$disabled:n,variant:o,ref:u,...a},e&&G.createElement(fj,{variant:o},e),i));Cy.displayName="GroupBox";const pj=O.div`
  ${({theme:e,size:n="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Nr(n)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;pj.displayName="Handle";const hj="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",mj=O.div`
  display: inline-block;
  height: ${({size:e})=>Nr(e)};
  width: ${({size:e})=>Nr(e)};
`,gj=O.span`
  display: block;
  background: ${hj};
  background-size: cover;
  width: 100%;
  height: 100%;
`,xj=g.forwardRef(({size:e=30,...n},o)=>G.createElement(mj,{size:e,ref:o,...n},G.createElement(gj,null)));xj.displayName="Hourglass";const yj=O.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,wj=O.div`
  position: relative;
`,vj=O.div`
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
`,bj=O(Wn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,kj=O.div`
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
`,$y=g.forwardRef(({backgroundStyles:e,children:n,...o},i)=>G.createElement(yj,{ref:i,...o},G.createElement(wj,null,G.createElement(vj,null,G.createElement(bj,{style:e},n)),G.createElement(kj,null))));$y.displayName="Monitor";const Sj=O.div`
  display: inline-block;
  height: ${wt.md};
  width: 100%;
`,jj=O(Wn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Ay=xe`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Ej=O.div`
  position: relative;
  top: 4px;
  ${Ay}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,Cj=O.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Ay}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,$j=O.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Ty=17,Aj=O.span`
  display: inline-block;
  width: ${Ty}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Tj=g.forwardRef(({hideValue:e=!1,shadow:n=!0,value:o,variant:i="default",...a},u)=>{const d=e?null:`${o}%`,p=g.useRef(null),[h,x]=g.useState([]),y=g.useCallback(()=>{if(!p.current||o===void 0)return;const w=p.current.getBoundingClientRect().width,S=Math.round(o/100*w/Ty);x(Array.from({length:S}))},[o]);return g.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[y]),G.createElement(Sj,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:u,role:"progressbar",variant:i,...a},G.createElement(jj,{variant:i,shadow:n},i==="default"?G.createElement(G.Fragment,null,G.createElement(Ej,{"data-testid":"defaultProgress1"},d),G.createElement(Cj,{"data-testid":"defaultProgress2",value:o},d)):G.createElement($j,{ref:p,"data-testid":"tileProgress"},h.map((w,S)=>G.createElement(Aj,{key:S})))))});Tj.displayName="ProgressBar";const Ry=xe`
  width: ${Fn}px;
  height: ${Fn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Rj=O(Wn)`
  ${Ry}
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
`,Dj=O.div`
  ${lo()}
  ${Ry}
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
`,Pj=O.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Ij={flat:Dj,default:Rj},Nj=g.forwardRef(({checked:e,className:n="",disabled:o=!1,label:i="",onChange:a,style:u={},variant:d="default",...p},h)=>{const x=Ij[d];return G.createElement(up,{$disabled:o,className:n,style:u},G.createElement(x,{$disabled:o,role:"presentation"},e&&G.createElement(Pj,{$disabled:o,variant:d})),G.createElement(wa,{disabled:o,onChange:o?void 0:a,readOnly:o,type:"radio",checked:e,ref:h,...p}),i&&G.createElement(dp,null,i))});Nj.displayName="Radio";const Lj=typeof window<"u"?g.useLayoutEffect:g.useEffect;function Jr(e){const n=g.useRef(e);return Lj(()=>{n.current=e}),g.useCallback((...o)=>(0,n.current)(...o),[])}function rg(e,n){typeof e=="function"?e(n):e&&(e.current=n)}function og(e,n){return g.useMemo(()=>e==null&&n==null?null:o=>{rg(e,o),rg(n,o)},[e,n])}var Ft=Bx();let Wa=!0,uf=!1,ig;const Oj={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Mj(e){if("type"in e){const{type:n,tagName:o}=e;if(o==="INPUT"&&Oj[n]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function zj(e){e.metaKey||e.altKey||e.ctrlKey||(Wa=!0)}function ld(){Wa=!1}function _j(){this.visibilityState==="hidden"&&uf&&(Wa=!0)}function Fj(e){e.addEventListener("keydown",zj,!0),e.addEventListener("mousedown",ld,!0),e.addEventListener("pointerdown",ld,!0),e.addEventListener("touchstart",ld,!0),e.addEventListener("visibilitychange",_j,!0)}function Bj(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch{}return Wa||Mj(n)}function Wj(){uf=!0,window.clearTimeout(ig),ig=window.setTimeout(()=>{uf=!1},100)}function Hj(){const e=g.useCallback(n=>{const o=Ft.findDOMNode(n);o!=null&&Fj(o.ownerDocument)},[]);return{isFocusVisible:Bj,onBlurVisible:Wj,ref:e}}function Uj(e,n,o){return(o-n)*e+n}function Bl(e,n){if(n!==void 0&&"changedTouches"in e){for(let o=0;o<e.changedTouches.length;o+=1){const i=e.changedTouches[o];if(i.identifier===n)return{x:i.clientX,y:i.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Wl(e){return e&&e.ownerDocument||document}function Vj(e,n){var o;const{index:i}=(o=e.reduce((a,u,d)=>{const p=Math.abs(n-u);return a===null||p<a.distance||p===a.distance?{distance:p,index:d}:a},null))!==null&&o!==void 0?o:{};return i??-1}const Kj=O.div`
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

  ${({orientation:e,size:n})=>e==="vertical"?xe`
          height: ${n};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:o})=>o?"41px":"39px"};
          }
        `:xe`
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
`,Dy=()=>xe`
  position: absolute;
  ${({orientation:e})=>e==="vertical"?xe`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:xe`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,Qj=O(Wn)`
  ${Dy()}
`,qj=O(Wn)`
  ${Dy()}

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
`,Gj=O.span`
  position: relative;
  ${({orientation:e})=>e==="vertical"?xe`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:xe`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:e})=>e==="flat"?xe`
          ${lo()}
          outline: 2px solid ${({theme:n})=>n.flatDark};
          background: ${({theme:n})=>n.flatLight};
        `:xe`
          ${Cn()}
          ${tt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:n})=>e&&ws({mainColor:n.material,secondaryColor:n.borderLightest})}
`,va=6,Yj=O.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?xe`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${va}px;
          border-bottom: 2px solid ${({theme:n})=>n.materialText};
        `:xe`
          bottom: ${-6}px;
          height: ${va}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:n})=>n.materialText};
          border-right: 1px solid ${({theme:n})=>n.materialText};
        `}

  color:  ${({theme:e})=>e.materialText};
  ${({$disabled:e,theme:n})=>e&&xe`
      ${En()}
      box-shadow: 1px 1px 0px ${n.materialTextDisabledShadow};
      border-color: ${n.materialTextDisabled};
    `}
`,Xj=O.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?xe`
          transform: translate(${va+2}px, ${va+1}px);
        `:xe`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Py=g.forwardRef(({defaultValue:e,disabled:n=!1,marks:o=!1,max:i=100,min:a=0,name:u,onChange:d,onChangeCommitted:p,onMouseDown:h,orientation:x="horizontal",size:y="100%",step:w=1,value:S,variant:A="default",...C},v)=>{const j=A==="flat"?qj:Qj,k=x==="vertical",[E=a,R]=Lr({defaultValue:e,onChange:d??p,value:S}),{isFocusVisible:N,onBlurVisible:z,ref:K}=Hj(),[Y,Z]=g.useState(!1),se=g.useRef(),ge=g.useRef(null),ie=og(K,se),ue=og(v,ie),me=Jr(ce=>{N(ce)&&Z(!0)}),B=Jr(()=>{Y!==!1&&(Z(!1),z())}),$=g.useRef(),T=g.useMemo(()=>o===!0&&Number.isFinite(w)?[...Array(Math.round((i-a)/w)+1)].map((ce,fe)=>({label:void 0,value:a+w*fe})):Array.isArray(o)?o:[],[o,i,a,w]),H=Jr(ce=>{const fe=(i-a)/10,Q=T.map(L=>L.value),te=Q.indexOf(E);let le=0;switch(ce.key){case"Home":le=a;break;case"End":le=i;break;case"PageUp":w&&(le=E+fe);break;case"PageDown":w&&(le=E-fe);break;case"ArrowRight":case"ArrowUp":w?le=E+w:le=Q[te+1]||Q[Q.length-1];break;case"ArrowLeft":case"ArrowDown":w?le=E-w:le=Q[te-1]||Q[0];break;default:return}ce.preventDefault(),w&&(le=eg(le,w,a)),le=to(le,a,i),R(le),Z(!0),d==null||d(le),p==null||p(le)}),W=g.useCallback(ce=>{if(!se.current)return 0;const fe=se.current.getBoundingClientRect();let Q;k?Q=(fe.bottom-ce.y)/fe.height:Q=(ce.x-fe.left)/fe.width;let te;if(te=Uj(Q,a,i),w)te=eg(te,w,a);else{const le=T.map(P=>P.value),L=Vj(le,te);te=le[L]}return te=to(te,a,i),te},[T,i,a,w,k]),ee=Jr(ce=>{var fe;const Q=Bl(ce,$.current);if(!Q)return;const te=W(Q);(fe=ge.current)===null||fe===void 0||fe.focus(),R(te),Z(!0),d==null||d(te)}),F=Jr(ce=>{const fe=Bl(ce,$.current);if(!fe)return;const Q=W(fe);p==null||p(Q),$.current=void 0;const te=Wl(se.current);te.removeEventListener("mousemove",ee),te.removeEventListener("mouseup",F),te.removeEventListener("touchmove",ee),te.removeEventListener("touchend",F)}),M=Jr(ce=>{var fe;h==null||h(ce),ce.preventDefault(),(fe=ge.current)===null||fe===void 0||fe.focus(),Z(!0);const Q=Bl(ce,$.current);if(Q){const le=W(Q);R(le),d==null||d(le)}const te=Wl(se.current);te.addEventListener("mousemove",ee),te.addEventListener("mouseup",F)}),X=Jr(ce=>{var fe;ce.preventDefault();const Q=ce.changedTouches[0];Q!=null&&($.current=Q.identifier),(fe=ge.current)===null||fe===void 0||fe.focus(),Z(!0);const te=Bl(ce,$.current);if(te){const L=W(te);R(L),d==null||d(L)}const le=Wl(se.current);le.addEventListener("touchmove",ee),le.addEventListener("touchend",F)});return g.useEffect(()=>{const{current:ce}=se;ce==null||ce.addEventListener("touchstart",X);const fe=Wl(ce);return()=>{ce==null||ce.removeEventListener("touchstart",X),fe.removeEventListener("mousemove",ee),fe.removeEventListener("mouseup",F),fe.removeEventListener("touchmove",ee),fe.removeEventListener("touchend",F)}},[F,ee,X]),G.createElement(Kj,{$disabled:n,hasMarks:!!T.length,isFocused:Y,onMouseDown:M,orientation:x,ref:ue,size:Nr(y),...C},G.createElement("input",{disabled:n,name:u,type:"hidden",value:E??0}),T&&T.map(ce=>G.createElement(Yj,{$disabled:n,"data-testid":"tick",key:ce.value/(i-a)*100,orientation:x,style:{[k?"bottom":"left"]:`${(ce.value-a)/(i-a)*100}%`}},ce.label&&G.createElement(Xj,{"aria-hidden":!0,"data-testid":"mark",orientation:x},ce.label))),G.createElement(j,{orientation:x,variant:A}),G.createElement(Gj,{$disabled:n,"aria-disabled":n?!0:void 0,"aria-orientation":x,"aria-valuemax":i,"aria-valuemin":a,"aria-valuenow":E,onBlur:B,onFocus:me,onKeyDown:H,orientation:x,ref:ge,role:"slider",style:{[k?"bottom":"left"]:`${(k?-100:0)+100*(E-a)/(i-a)}%`},tabIndex:n?void 0:0,variant:A}))});Py.displayName="Slider";const Jj=O.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${ap};
  overflow-y: auto;
`,Iy=g.forwardRef(function({children:n,...o},i){return G.createElement(Jj,{ref:i,...o},n)});Iy.displayName="TableBody";const Zj=O.td`
  padding: 0 8px;
`,Zr=g.forwardRef(function({children:n,...o},i){return G.createElement(Zj,{ref:i,...o},n)});Zr.displayName="TableDataCell";const eE=O.thead`
  display: table-header-group;
`,Ny=g.forwardRef(function({children:n,...o},i){return G.createElement(eE,{ref:i,...o},n)});Ny.displayName="TableHead";const tE=O.th`
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
  ${({$disabled:e})=>!e&&xe`
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
  ${({$disabled:e})=>e&&En()}
  &:hover {
    color: ${({theme:e})=>e.materialText};
    ${({$disabled:e})=>e&&En()}
  }
`,Ly=g.forwardRef(function({disabled:n=!1,children:o,onClick:i,onTouchStart:a=po,sort:u,...d},p){const h=u==="asc"?"ascending":u==="desc"?"descending":void 0;return G.createElement(tE,{$disabled:n,"aria-disabled":n,"aria-sort":h,onClick:n?void 0:i,onTouchStart:n?void 0:a,ref:p,...d},G.createElement("div",null,o))});Ly.displayName="TableHeadCell";const nE=O.tr`
  color: inherit;
  display: table-row;
  height: calc(${wt.md} - 2px);
  line-height: calc(${wt.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:e})=>e.canvasText};
  &:hover {
    background: ${({theme:e})=>e.hoverBackground};
    color: ${({theme:e})=>e.canvasTextInvert};
  }
`,df=g.forwardRef(function({children:n,...o},i){return G.createElement(nE,{ref:i,...o},n)});df.displayName="TableRow";const rE=O.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,oE=O(Wn)`
  &:before {
    box-shadow: none;
  }
`,Oy=g.forwardRef(({children:e,...n},o)=>G.createElement(oE,null,G.createElement(rE,{ref:o,...n},e)));Oy.displayName="Table";const iE=O.button`
  ${Cn()}
  ${tt()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${wt.md};
  line-height: ${wt.md};
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
    ${Zo}
    outline-offset: -6px;
  }
  ${e=>e.selected&&`
    z-index: 1;
    height: calc(${wt.md} + 4px);
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
`,Dr=g.forwardRef(({value:e,onClick:n,selected:o=!1,children:i,...a},u)=>G.createElement(iE,{"aria-selected":o,selected:o,onClick:d=>n==null?void 0:n(e,d),ref:u,role:"tab",...a},i));Dr.displayName="Tab";const sE=O.div`
  ${Cn()}
  ${tt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Ha=g.forwardRef(({children:e,...n},o)=>G.createElement(sE,{ref:o,...n},e));Ha.displayName="TabBody";const lE=O.div`
  position: relative;
  ${({isMultiRow:e,theme:n})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${n.borderDark};
  }
  `}
`,aE=O.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function cE(e,n){const o=[];for(let i=n;i>0;i-=1)o.push(e.splice(0,Math.ceil(e.length/i)));return o}const Ua=g.forwardRef(({value:e,onChange:n=po,children:o,rows:i=1,...a},u)=>{const d=g.useMemo(()=>{var p;const h=(p=G.Children.map(o,w=>{if(!G.isValidElement(w))return null;const S={selected:w.props.value===e,onClick:n};return G.cloneElement(w,S)}))!==null&&p!==void 0?p:[],x=cE(h,i).map((w,S)=>({key:S,tabs:w})),y=x.findIndex(w=>w.tabs.some(S=>S.props.selected));return x.push(x.splice(y,1)[0]),x},[o,n,i,e]);return G.createElement(lE,{...a,isMultiRow:i>1,role:"tablist",ref:u},d.map(p=>G.createElement(aE,{key:p.key},p.tabs)))});Ua.displayName="Tabs";const uE=["blur","focus"],dE=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function sg(e){return"nativeEvent"in e&&uE.includes(e.type)}function lg(e){return"nativeEvent"in e&&dE.includes(e.type)}const fE={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},pE=O.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${lp};
  text-align: center;
  font-size: 1rem;
  ${e=>fE[e.position]}
`,hE=O.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,mE=g.forwardRef(({className:e,children:n,disableFocusListener:o=!1,disableMouseListener:i=!1,enterDelay:a=1e3,leaveDelay:u=0,onBlur:d,onClose:p,onFocus:h,onMouseEnter:x,onMouseLeave:y,onOpen:w,style:S,text:A,position:C="top",...v},j)=>{const[k,E]=g.useState(!1),[R,N]=g.useState(),[z,K]=g.useState(),Y=!o,Z=!i,se=W=>{window.clearTimeout(R),window.clearTimeout(z);const ee=window.setTimeout(()=>{E(!0),w==null||w(W)},a);N(ee)},ge=W=>{W.persist(),sg(W)?h==null||h(W):lg(W)&&(x==null||x(W)),se(W)},ie=W=>{window.clearTimeout(R),window.clearTimeout(z);const ee=window.setTimeout(()=>{E(!1),p==null||p(W)},u);K(ee)},ue=W=>{W.persist(),sg(W)?d==null||d(W):lg(W)&&(y==null||y(W)),ie(W)},me=Y?ue:void 0,B=Y?ge:void 0,$=Z?ge:void 0,T=Z?ue:void 0,H=Y?0:void 0;return G.createElement(hE,{"data-testid":"tooltip-wrapper",onBlur:me,onFocus:B,onMouseEnter:$,onMouseLeave:T,tabIndex:H},G.createElement(pE,{className:e,"data-testid":"tooltip",position:C,ref:j,show:k,style:S,...v},A),n)});mE.displayName="Tooltip";const ff=O(dp)`
  white-space: nowrap;
`,My=xe`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":xe`
          cursor: pointer;

          :focus {
            ${ff} {
              background: ${({theme:n})=>n.hoverBackground};
              color: ${({theme:n})=>n.materialTextInvert};
              outline: 2px dotted ${({theme:n})=>n.focusSecondary};
            }
          }
        `}
`,gE=O.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:e})=>e&&xe`
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
`,xE=O.li`
  position: relative;
  padding-left: ${({hasItems:e})=>e?"0":"13px"};

  ${({isRootLevel:e})=>e?xe`
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
        `:xe`
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
`,yE=O.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,wE=O.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${My};

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
`,ag=O(up)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${My};
`,vE=O.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function cg(e,n){return e.includes(n)?e.filter(o=>o!==n):[...e,n]}function ug(e){e.preventDefault()}function zy({className:e,disabled:n,expanded:o,innerRef:i,level:a,select:u,selected:d,style:p,tree:h=[]}){const x=a===0,y=g.useCallback(w=>{var S,A;const C=!!(w.items&&w.items.length>0),v=o.includes(w.id),j=(S=n||w.disabled)!==null&&S!==void 0?S:!1,k=j?ug:z=>u(z,w),E=j?ug:z=>u(z,w),R=d===w.id,N=G.createElement(vE,{"aria-hidden":!0},w.icon);return G.createElement(xE,{key:w.label,isRootLevel:x,role:"treeitem","aria-expanded":v,"aria-selected":R,hasItems:C},C?G.createElement(yE,{open:v},G.createElement(wE,{onClick:k,$disabled:j},G.createElement(ag,{$disabled:j},N,G.createElement(ff,null,w.label))),v&&G.createElement(zy,{className:e,disabled:j,expanded:o,level:a+1,select:u,selected:d,style:p,tree:(A=w.items)!==null&&A!==void 0?A:[]})):G.createElement(ag,{as:"button",$disabled:j,onClick:E},N,G.createElement(ff,null,w.label)))},[e,n,o,x,a,u,d,p]);return G.createElement(gE,{className:x?e:void 0,style:x?p:void 0,ref:x?i:void 0,role:x?"tree":"group",isRootLevel:x},h.map(y))}function bE({className:e,defaultExpanded:n=[],defaultSelected:o,disabled:i=!1,expanded:a,onNodeSelect:u,onNodeToggle:d,selected:p,style:h,tree:x=[]},y){const[w,S]=Lr({defaultValue:n,onChange:d,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[A,C]=Lr({defaultValue:o,onChange:u,onChangePropName:"onNodeSelect",value:p,valuePropName:"selected"}),v=g.useCallback((E,R)=>{if(d){const N=cg(w,R);d(E,N)}S(N=>cg(N,R))},[w,d,S]),j=g.useCallback((E,R)=>{C(R),u&&u(E,R)},[u,C]),k=g.useCallback((E,R)=>{E.preventDefault(),j(E,R.id),R.items&&R.items.length&&v(E,R.id)},[j,v]);return G.createElement(zy,{className:e,disabled:i,expanded:w,level:0,innerRef:y,select:k,selected:A,style:h,tree:x})}const kE=g.forwardRef(bE);kE.displayName="TreeView";const SE="/assets/ms_sans_serif-Du8rjN1q.woff2",jE="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var Xi={},dg;function EE(){if(dg)return Xi;dg=1,Object.defineProperty(Xi,"__esModule",{value:!0}),Xi.parse=d,Xi.serialize=x;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function d(S,A){const C=new u,v=S.length;if(v<2)return C;const j=(A==null?void 0:A.decode)||y;let k=0;do{const E=S.indexOf("=",k);if(E===-1)break;const R=S.indexOf(";",k),N=R===-1?v:R;if(E>N){k=S.lastIndexOf(";",E-1)+1;continue}const z=p(S,k,E),K=h(S,E,z),Y=S.slice(z,K);if(C[Y]===void 0){let Z=p(S,E+1,N),se=h(S,N,Z);const ge=j(S.slice(Z,se));C[Y]=ge}k=N+1}while(k<v);return C}function p(S,A,C){do{const v=S.charCodeAt(A);if(v!==32&&v!==9)return A}while(++A<C);return C}function h(S,A,C){for(;A>C;){const v=S.charCodeAt(--A);if(v!==32&&v!==9)return A+1}return C}function x(S,A,C){const v=(C==null?void 0:C.encode)||encodeURIComponent;if(!e.test(S))throw new TypeError(`argument name is invalid: ${S}`);const j=v(A);if(!n.test(j))throw new TypeError(`argument val is invalid: ${A}`);let k=S+"="+j;if(!C)return k;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);k+="; Max-Age="+C.maxAge}if(C.domain){if(!o.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);k+="; Domain="+C.domain}if(C.path){if(!i.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);k+="; Path="+C.path}if(C.expires){if(!w(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);k+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(k+="; HttpOnly"),C.secure&&(k+="; Secure"),C.partitioned&&(k+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":k+="; Priority=Low";break;case"medium":k+="; Priority=Medium";break;case"high":k+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":k+="; SameSite=Strict";break;case"lax":k+="; SameSite=Lax";break;case"none":k+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return k}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function w(S){return a.call(S)==="[object Date]"}return Xi}EE();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fg="popstate";function CE(e={}){function n(i,a){let{pathname:u,search:d,hash:p}=i.location;return pf("",{pathname:u,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function o(i,a){return typeof a=="string"?a:ms(a)}return AE(n,o,null,e)}function Ze(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Bn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function $E(){return Math.random().toString(36).substring(2,10)}function pg(e,n){return{usr:e.state,key:e.key,idx:n}}function pf(e,n,o=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?ii(n):n,state:o,key:n&&n.key||i||$E()}}function ms({pathname:e="/",search:n="",hash:o=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function ii(e){let n={};if(e){let o=e.indexOf("#");o>=0&&(n.hash=e.substring(o),e=e.substring(0,o));let i=e.indexOf("?");i>=0&&(n.search=e.substring(i),e=e.substring(0,i)),e&&(n.pathname=e)}return n}function AE(e,n,o,i={}){let{window:a=document.defaultView,v5Compat:u=!1}=i,d=a.history,p="POP",h=null,x=y();x==null&&(x=0,d.replaceState({...d.state,idx:x},""));function y(){return(d.state||{idx:null}).idx}function w(){p="POP";let j=y(),k=j==null?null:j-x;x=j,h&&h({action:p,location:v.location,delta:k})}function S(j,k){p="PUSH";let E=pf(v.location,j,k);x=y()+1;let R=pg(E,x),N=v.createHref(E);try{d.pushState(R,"",N)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;a.location.assign(N)}u&&h&&h({action:p,location:v.location,delta:1})}function A(j,k){p="REPLACE";let E=pf(v.location,j,k);x=y();let R=pg(E,x),N=v.createHref(E);d.replaceState(R,"",N),u&&h&&h({action:p,location:v.location,delta:0})}function C(j){let k=a.location.origin!=="null"?a.location.origin:a.location.href,E=typeof j=="string"?j:ms(j);return E=E.replace(/ $/,"%20"),Ze(k,`No window.location.(origin|href) available to create URL for href: ${E}`),new URL(E,k)}let v={get action(){return p},get location(){return e(a,d)},listen(j){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(fg,w),h=j,()=>{a.removeEventListener(fg,w),h=null}},createHref(j){return n(a,j)},createURL:C,encodeLocation(j){let k=C(j);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:S,replace:A,go(j){return d.go(j)}};return v}function _y(e,n,o="/"){return TE(e,n,o,!1)}function TE(e,n,o,i){let a=typeof n=="string"?ii(n):n,u=Or(a.pathname||"/",o);if(u==null)return null;let d=Fy(e);RE(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let x=BE(u);p=_E(d[h],x,i)}return p}function Fy(e,n=[],o=[],i=""){let a=(u,d,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};h.relativePath.startsWith("/")&&(Ze(h.relativePath.startsWith(i),`Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(i.length));let x=sr([i,h.relativePath]),y=o.concat(h);u.children&&u.children.length>0&&(Ze(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Fy(u.children,n,y,x)),!(u.path==null&&!u.index)&&n.push({path:x,score:ME(x,u.index),routesMeta:y})};return e.forEach((u,d)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))a(u,d);else for(let h of By(u.path))a(u,d,h)}),n}function By(e){let n=e.split("/");if(n.length===0)return[];let[o,...i]=n,a=o.endsWith("?"),u=o.replace(/\?$/,"");if(i.length===0)return a?[u,""]:[u];let d=By(i.join("/")),p=[];return p.push(...d.map(h=>h===""?u:[u,h].join("/"))),a&&p.push(...d),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function RE(e){e.sort((n,o)=>n.score!==o.score?o.score-n.score:zE(n.routesMeta.map(i=>i.childrenIndex),o.routesMeta.map(i=>i.childrenIndex)))}var DE=/^:[\w-]+$/,PE=3,IE=2,NE=1,LE=10,OE=-2,hg=e=>e==="*";function ME(e,n){let o=e.split("/"),i=o.length;return o.some(hg)&&(i+=OE),n&&(i+=IE),o.filter(a=>!hg(a)).reduce((a,u)=>a+(DE.test(u)?PE:u===""?NE:LE),i)}function zE(e,n){return e.length===n.length&&e.slice(0,-1).every((i,a)=>i===n[a])?e[e.length-1]-n[n.length-1]:0}function _E(e,n,o=!1){let{routesMeta:i}=e,a={},u="/",d=[];for(let p=0;p<i.length;++p){let h=i[p],x=p===i.length-1,y=u==="/"?n:n.slice(u.length)||"/",w=ba({path:h.relativePath,caseSensitive:h.caseSensitive,end:x},y),S=h.route;if(!w&&x&&o&&!i[i.length-1].route.index&&(w=ba({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!w)return null;Object.assign(a,w.params),d.push({params:a,pathname:sr([u,w.pathname]),pathnameBase:VE(sr([u,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(u=sr([u,w.pathnameBase]))}return d}function ba(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,i]=FE(e.path,e.caseSensitive,e.end),a=n.match(o);if(!a)return null;let u=a[0],d=u.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:i.reduce((x,{paramName:y,isOptional:w},S)=>{if(y==="*"){let C=p[S]||"";d=u.slice(0,u.length-C.length).replace(/(.)\/+$/,"$1")}const A=p[S];return w&&!A?x[y]=void 0:x[y]=(A||"").replace(/%2F/g,"/"),x},{}),pathname:u,pathnameBase:d,pattern:e}}function FE(e,n=!1,o=!0){Bn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(i.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),i]}function BE(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Bn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function Or(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,i=e.charAt(o);return i&&i!=="/"?null:e.slice(o)||"/"}function WE(e,n="/"){let{pathname:o,search:i="",hash:a=""}=typeof e=="string"?ii(e):e;return{pathname:o?o.startsWith("/")?o:HE(o,n):n,search:KE(i),hash:QE(a)}}function HE(e,n){let o=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function ad(e,n,o,i){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function UE(e){return e.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function Wy(e){let n=UE(e);return n.map((o,i)=>i===n.length-1?o.pathname:o.pathnameBase)}function Hy(e,n,o,i=!1){let a;typeof e=="string"?a=ii(e):(a={...e},Ze(!a.pathname||!a.pathname.includes("?"),ad("?","pathname","search",a)),Ze(!a.pathname||!a.pathname.includes("#"),ad("#","pathname","hash",a)),Ze(!a.search||!a.search.includes("#"),ad("#","search","hash",a)));let u=e===""||a.pathname==="",d=u?"/":a.pathname,p;if(d==null)p=o;else{let w=n.length-1;if(!i&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),w-=1;a.pathname=S.join("/")}p=w>=0?n[w]:"/"}let h=WE(a,p),x=d&&d!=="/"&&d.endsWith("/"),y=(u||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(x||y)&&(h.pathname+="/"),h}var sr=e=>e.join("/").replace(/\/\/+/g,"/"),VE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),KE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,QE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Uy=["POST","PUT","PATCH","DELETE"];new Set(Uy);var GE=["GET",...Uy];new Set(GE);var si=g.createContext(null);si.displayName="DataRouter";var Va=g.createContext(null);Va.displayName="DataRouterState";var Vy=g.createContext({isTransitioning:!1});Vy.displayName="ViewTransition";var YE=g.createContext(new Map);YE.displayName="Fetchers";var XE=g.createContext(null);XE.displayName="Await";var Hn=g.createContext(null);Hn.displayName="Navigation";var vs=g.createContext(null);vs.displayName="Location";var lr=g.createContext({outlet:null,matches:[],isDataRoute:!1});lr.displayName="Route";var pp=g.createContext(null);pp.displayName="RouteError";function JE(e,{relative:n}={}){Ze(bs(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:i}=g.useContext(Hn),{hash:a,pathname:u,search:d}=ks(e,{relative:n}),p=u;return o!=="/"&&(p=u==="/"?o:sr([o,u])),i.createHref({pathname:p,search:d,hash:a})}function bs(){return g.useContext(vs)!=null}function ho(){return Ze(bs(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(vs).location}var Ky="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Qy(e){g.useContext(Hn).static||g.useLayoutEffect(e)}function li(){let{isDataRoute:e}=g.useContext(lr);return e?dC():ZE()}function ZE(){Ze(bs(),"useNavigate() may be used only in the context of a <Router> component.");let e=g.useContext(si),{basename:n,navigator:o}=g.useContext(Hn),{matches:i}=g.useContext(lr),{pathname:a}=ho(),u=JSON.stringify(Wy(i)),d=g.useRef(!1);return Qy(()=>{d.current=!0}),g.useCallback((h,x={})=>{if(Bn(d.current,Ky),!d.current)return;if(typeof h=="number"){o.go(h);return}let y=Hy(h,JSON.parse(u),a,x.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:sr([n,y.pathname])),(x.replace?o.replace:o.push)(y,x.state,x)},[n,o,u,a,e])}g.createContext(null);function ks(e,{relative:n}={}){let{matches:o}=g.useContext(lr),{pathname:i}=ho(),a=JSON.stringify(Wy(o));return g.useMemo(()=>Hy(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function eC(e,n){return qy(e,n)}function qy(e,n,o,i){var k;Ze(bs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=g.useContext(Hn),{matches:u}=g.useContext(lr),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",x=d?d.pathnameBase:"/",y=d&&d.route;{let E=y&&y.path||"";Gy(h,!y||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let w=ho(),S;if(n){let E=typeof n=="string"?ii(n):n;Ze(x==="/"||((k=E.pathname)==null?void 0:k.startsWith(x)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${E.pathname}" was given in the \`location\` prop.`),S=E}else S=w;let A=S.pathname||"/",C=A;if(x!=="/"){let E=x.replace(/^\//,"").split("/");C="/"+A.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=_y(e,{pathname:C});Bn(y||v!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Bn(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=iC(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},p,E.params),pathname:sr([x,a.encodeLocation?a.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?x:sr([x,a.encodeLocation?a.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),u,o,i);return n&&j?g.createElement(vs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},j):j}function tC(){let e=uC(),n=qE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:u},"ErrorBoundary")," or"," ",g.createElement("code",{style:u},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),o?g.createElement("pre",{style:a},o):null,d)}var nC=g.createElement(tC,null),rC=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?g.createElement(lr.Provider,{value:this.props.routeContext},g.createElement(pp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oC({routeContext:e,match:n,children:o}){let i=g.useContext(si);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(lr.Provider,{value:e},o)}function iC(e,n=[],o=null,i=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let a=e,u=o==null?void 0:o.errors;if(u!=null){let h=a.findIndex(x=>x.route.id&&(u==null?void 0:u[x.route.id])!==void 0);Ze(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let d=!1,p=-1;if(o)for(let h=0;h<a.length;h++){let x=a[h];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=h),x.route.id){let{loaderData:y,errors:w}=o,S=x.route.loader&&!y.hasOwnProperty(x.route.id)&&(!w||w[x.route.id]===void 0);if(x.route.lazy||S){d=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((h,x,y)=>{let w,S=!1,A=null,C=null;o&&(w=u&&x.route.id?u[x.route.id]:void 0,A=x.route.errorElement||nC,d&&(p<0&&y===0?(Gy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):p===y&&(S=!0,C=x.route.hydrateFallbackElement||null)));let v=n.concat(a.slice(0,y+1)),j=()=>{let k;return w?k=A:S?k=C:x.route.Component?k=g.createElement(x.route.Component,null):x.route.element?k=x.route.element:k=h,g.createElement(oC,{match:x,routeContext:{outlet:h,matches:v,isDataRoute:o!=null},children:k})};return o&&(x.route.ErrorBoundary||x.route.errorElement||y===0)?g.createElement(rC,{location:o.location,revalidation:o.revalidation,component:A,error:w,children:j(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):j()},null)}function hp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sC(e){let n=g.useContext(si);return Ze(n,hp(e)),n}function lC(e){let n=g.useContext(Va);return Ze(n,hp(e)),n}function aC(e){let n=g.useContext(lr);return Ze(n,hp(e)),n}function mp(e){let n=aC(e),o=n.matches[n.matches.length-1];return Ze(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function cC(){return mp("useRouteId")}function uC(){var i;let e=g.useContext(pp),n=lC("useRouteError"),o=mp("useRouteError");return e!==void 0?e:(i=n.errors)==null?void 0:i[o]}function dC(){let{router:e}=sC("useNavigate"),n=mp("useNavigate"),o=g.useRef(!1);return Qy(()=>{o.current=!0}),g.useCallback(async(a,u={})=>{Bn(o.current,Ky),o.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:n,...u}))},[e,n])}var mg={};function Gy(e,n,o){!n&&!mg[e]&&(mg[e]=!0,Bn(!1,o))}g.memo(fC);function fC({routes:e,future:n,state:o}){return qy(e,void 0,o,n)}function ta(e){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function pC({basename:e="/",children:n=null,location:o,navigationType:i="POP",navigator:a,static:u=!1}){Ze(!bs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),p=g.useMemo(()=>({basename:d,navigator:a,static:u,future:{}}),[d,a,u]);typeof o=="string"&&(o=ii(o));let{pathname:h="/",search:x="",hash:y="",state:w=null,key:S="default"}=o,A=g.useMemo(()=>{let C=Or(h,d);return C==null?null:{location:{pathname:C,search:x,hash:y,state:w,key:S},navigationType:i}},[d,h,x,y,w,S,i]);return Bn(A!=null,`<Router basename="${d}"> is not able to match the URL "${h}${x}${y}" because it does not start with the basename, so the <Router> won't render anything.`),A==null?null:g.createElement(Hn.Provider,{value:p},g.createElement(vs.Provider,{children:n,value:A}))}function hC({children:e,location:n}){return eC(hf(e),n)}function hf(e,n=[]){let o=[];return g.Children.forEach(e,(i,a)=>{if(!g.isValidElement(i))return;let u=[...n,a];if(i.type===g.Fragment){o.push.apply(o,hf(i.props.children,u));return}Ze(i.type===ta,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||u.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=hf(i.props.children,u)),o.push(d)}),o}var na="get",ra="application/x-www-form-urlencoded";function Ka(e){return e!=null&&typeof e.tagName=="string"}function mC(e){return Ka(e)&&e.tagName.toLowerCase()==="button"}function gC(e){return Ka(e)&&e.tagName.toLowerCase()==="form"}function xC(e){return Ka(e)&&e.tagName.toLowerCase()==="input"}function yC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wC(e,n){return e.button===0&&(!n||n==="_self")&&!yC(e)}var Hl=null;function vC(){if(Hl===null)try{new FormData(document.createElement("form"),0),Hl=!1}catch{Hl=!0}return Hl}var bC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function cd(e){return e!=null&&!bC.has(e)?(Bn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ra}"`),null):e}function kC(e,n){let o,i,a,u,d;if(gC(e)){let p=e.getAttribute("action");i=p?Or(p,n):null,o=e.getAttribute("method")||na,a=cd(e.getAttribute("enctype"))||ra,u=new FormData(e)}else if(mC(e)||xC(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||p.getAttribute("action");if(i=h?Or(h,n):null,o=e.getAttribute("formmethod")||p.getAttribute("method")||na,a=cd(e.getAttribute("formenctype"))||cd(p.getAttribute("enctype"))||ra,u=new FormData(p,e),!vC()){let{name:x,type:y,value:w}=e;if(y==="image"){let S=x?`${x}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else x&&u.append(x,w)}}else{if(Ka(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=na,i=null,a=ra,d=e}return u&&a==="text/plain"&&(d=u,u=void 0),{action:i,method:o.toLowerCase(),encType:a,formData:u,body:d}}function gp(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function SC(e,n){if(e.id in n)return n[e.id];try{let o=await import(e.module);return n[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jC(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function EC(e,n,o){let i=await Promise.all(e.map(async a=>{let u=n.routes[a.route.id];if(u){let d=await SC(u,o);return d.links?d.links():[]}return[]}));return TC(i.flat(1).filter(jC).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function gg(e,n,o,i,a,u){let d=(h,x)=>o[x]?h.route.id!==o[x].route.id:!0,p=(h,x)=>{var y;return o[x].pathname!==h.pathname||((y=o[x].route.path)==null?void 0:y.endsWith("*"))&&o[x].params["*"]!==h.params["*"]};return u==="assets"?n.filter((h,x)=>d(h,x)||p(h,x)):u==="data"?n.filter((h,x)=>{var w;let y=i.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(d(h,x)||p(h,x))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function CC(e,n){return $C(e.map(o=>{let i=n.routes[o.route.id];if(!i)return[];let a=[i.module];return i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function $C(e){return[...new Set(e)]}function AC(e){let n={},o=Object.keys(e).sort();for(let i of o)n[i]=e[i];return n}function TC(e,n){let o=new Set;return new Set(n),e.reduce((i,a)=>{let u=JSON.stringify(AC(a));return o.has(u)||(o.add(u),i.push({key:u,link:a})),i},[])}function RC(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function DC(){let e=g.useContext(si);return gp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function PC(){let e=g.useContext(Va);return gp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var xp=g.createContext(void 0);xp.displayName="FrameworkContext";function Yy(){let e=g.useContext(xp);return gp(e,"You must render this element inside a <HydratedRouter> element"),e}function IC(e,n){let o=g.useContext(xp),[i,a]=g.useState(!1),[u,d]=g.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:x,onMouseLeave:y,onTouchStart:w}=n,S=g.useRef(null);g.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let v=k=>{k.forEach(E=>{d(E.isIntersecting)})},j=new IntersectionObserver(v,{threshold:.5});return S.current&&j.observe(S.current),()=>{j.disconnect()}}},[e]),g.useEffect(()=>{if(i){let v=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(v)}}},[i]);let A=()=>{a(!0)},C=()=>{a(!1),d(!1)};return o?e!=="intent"?[u,S,{}]:[u,S,{onFocus:Ji(p,A),onBlur:Ji(h,C),onMouseEnter:Ji(x,A),onMouseLeave:Ji(y,C),onTouchStart:Ji(w,A)}]:[!1,S,{}]}function Ji(e,n){return o=>{e&&e(o),o.defaultPrevented||n(o)}}function NC({page:e,...n}){let{router:o}=DC(),i=g.useMemo(()=>_y(o.routes,e,o.basename),[o.routes,e,o.basename]);return i?g.createElement(OC,{page:e,matches:i,...n}):null}function LC(e){let{manifest:n,routeModules:o}=Yy(),[i,a]=g.useState([]);return g.useEffect(()=>{let u=!1;return EC(e,n,o).then(d=>{u||a(d)}),()=>{u=!0}},[e,n,o]),i}function OC({page:e,matches:n,...o}){let i=ho(),{manifest:a,routeModules:u}=Yy(),{loaderData:d,matches:p}=PC(),h=g.useMemo(()=>gg(e,n,p,a,i,"data"),[e,n,p,a,i]),x=g.useMemo(()=>gg(e,n,p,a,i,"assets"),[e,n,p,a,i]),y=g.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let A=new Set,C=!1;if(n.forEach(j=>{var E;let k=a.routes[j.route.id];!k||!k.hasLoader||(!h.some(R=>R.route.id===j.route.id)&&j.route.id in d&&((E=u[j.route.id])!=null&&E.shouldRevalidate)||k.hasClientLoader?C=!0:A.add(j.route.id))}),A.size===0)return[];let v=RC(e);return C&&A.size>0&&v.searchParams.set("_routes",n.filter(j=>A.has(j.route.id)).map(j=>j.route.id).join(",")),[v.pathname+v.search]},[d,i,a,h,n,e,u]),w=g.useMemo(()=>CC(x,a),[x,a]),S=LC(x);return g.createElement(g.Fragment,null,y.map(A=>g.createElement("link",{key:A,rel:"prefetch",as:"fetch",href:A,...o})),w.map(A=>g.createElement("link",{key:A,rel:"modulepreload",href:A,...o})),S.map(({key:A,link:C})=>g.createElement("link",{key:A,...C})))}function MC(...e){return n=>{e.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})}}var Xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xy&&(window.__reactRouterVersion="7.1.3")}catch{}function zC({basename:e,children:n,window:o}){let i=g.useRef();i.current==null&&(i.current=CE({window:o,v5Compat:!0}));let a=i.current,[u,d]=g.useState({action:a.action,location:a.location}),p=g.useCallback(h=>{g.startTransition(()=>d(h))},[d]);return g.useLayoutEffect(()=>a.listen(p),[a,p]),g.createElement(pC,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:a})}var Jy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zy=g.forwardRef(function({onClick:n,discover:o="render",prefetch:i="none",relative:a,reloadDocument:u,replace:d,state:p,target:h,to:x,preventScrollReset:y,viewTransition:w,...S},A){let{basename:C}=g.useContext(Hn),v=typeof x=="string"&&Jy.test(x),j,k=!1;if(typeof x=="string"&&v&&(j=x,Xy))try{let se=new URL(window.location.href),ge=x.startsWith("//")?new URL(se.protocol+x):new URL(x),ie=Or(ge.pathname,C);ge.origin===se.origin&&ie!=null?x=ie+ge.search+ge.hash:k=!0}catch{Bn(!1,`<Link to="${x}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=JE(x,{relative:a}),[R,N,z]=IC(i,S),K=WC(x,{replace:d,state:p,target:h,preventScrollReset:y,relative:a,viewTransition:w});function Y(se){n&&n(se),se.defaultPrevented||K(se)}let Z=g.createElement("a",{...S,...z,href:j||E,onClick:k||u?n:Y,ref:MC(A,N),target:h,"data-discover":!v&&o==="render"?"true":void 0});return R&&!v?g.createElement(g.Fragment,null,Z,g.createElement(NC,{page:E})):Z});Zy.displayName="Link";var _C=g.forwardRef(function({"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:u,to:d,viewTransition:p,children:h,...x},y){let w=ks(d,{relative:x.relative}),S=ho(),A=g.useContext(Va),{navigator:C,basename:v}=g.useContext(Hn),j=A!=null&&QC(w)&&p===!0,k=C.encodeLocation?C.encodeLocation(w).pathname:w.pathname,E=S.pathname,R=A&&A.navigation&&A.navigation.location?A.navigation.location.pathname:null;o||(E=E.toLowerCase(),R=R?R.toLowerCase():null,k=k.toLowerCase()),R&&v&&(R=Or(R,v)||R);const N=k!=="/"&&k.endsWith("/")?k.length-1:k.length;let z=E===k||!a&&E.startsWith(k)&&E.charAt(N)==="/",K=R!=null&&(R===k||!a&&R.startsWith(k)&&R.charAt(k.length)==="/"),Y={isActive:z,isPending:K,isTransitioning:j},Z=z?n:void 0,se;typeof i=="function"?se=i(Y):se=[i,z?"active":null,K?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let ge=typeof u=="function"?u(Y):u;return g.createElement(Zy,{...x,"aria-current":Z,className:se,ref:y,style:ge,to:d,viewTransition:p},typeof h=="function"?h(Y):h)});_C.displayName="NavLink";var FC=g.forwardRef(({discover:e="render",fetcherKey:n,navigate:o,reloadDocument:i,replace:a,state:u,method:d=na,action:p,onSubmit:h,relative:x,preventScrollReset:y,viewTransition:w,...S},A)=>{let C=VC(),v=KC(p,{relative:x}),j=d.toLowerCase()==="get"?"get":"post",k=typeof p=="string"&&Jy.test(p),E=R=>{if(h&&h(R),R.defaultPrevented)return;R.preventDefault();let N=R.nativeEvent.submitter,z=(N==null?void 0:N.getAttribute("formmethod"))||d;C(N||R.currentTarget,{fetcherKey:n,method:z,navigate:o,replace:a,state:u,relative:x,preventScrollReset:y,viewTransition:w})};return g.createElement("form",{ref:A,method:j,action:v,onSubmit:i?h:E,...S,"data-discover":!k&&e==="render"?"true":void 0})});FC.displayName="Form";function BC(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ew(e){let n=g.useContext(si);return Ze(n,BC(e)),n}function WC(e,{target:n,replace:o,state:i,preventScrollReset:a,relative:u,viewTransition:d}={}){let p=li(),h=ho(),x=ks(e,{relative:u});return g.useCallback(y=>{if(wC(y,n)){y.preventDefault();let w=o!==void 0?o:ms(h)===ms(x);p(e,{replace:w,state:i,preventScrollReset:a,relative:u,viewTransition:d})}},[h,p,x,o,i,n,e,a,u,d])}var HC=0,UC=()=>`__${String(++HC)}__`;function VC(){let{router:e}=ew("useSubmit"),{basename:n}=g.useContext(Hn),o=cC();return g.useCallback(async(i,a={})=>{let{action:u,method:d,encType:p,formData:h,body:x}=kC(i,n);if(a.navigate===!1){let y=a.fetcherKey||UC();await e.fetch(y,o,a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:x,formMethod:a.method||d,formEncType:a.encType||p,flushSync:a.flushSync})}else await e.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:x,formMethod:a.method||d,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,n,o])}function KC(e,{relative:n}={}){let{basename:o}=g.useContext(Hn),i=g.useContext(lr);Ze(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),u={...ks(e||".",{relative:n})},d=ho();if(e==null){u.search=d.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(y=>y==="")){p.delete("index"),h.filter(w=>w).forEach(w=>p.append("index",w));let y=p.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:sr([o,u.pathname])),ms(u)}function QC(e,n={}){let o=g.useContext(Vy);Ze(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=ew("useViewTransitionState"),a=ks(e,{relative:n.relative});if(!o.isTransitioning)return!1;let u=Or(o.currentLocation.pathname,i)||o.currentLocation.pathname,d=Or(o.nextLocation.pathname,i)||o.nextLocation.pathname;return ba(a.pathname,d)!=null||ba(a.pathname,u)!=null}new TextEncoder;const yt=[];for(let e=0;e<256;++e)yt.push((e+256).toString(16).slice(1));function qC(e,n=0){return(yt[e[n+0]]+yt[e[n+1]]+yt[e[n+2]]+yt[e[n+3]]+"-"+yt[e[n+4]]+yt[e[n+5]]+"-"+yt[e[n+6]]+yt[e[n+7]]+"-"+yt[e[n+8]]+yt[e[n+9]]+"-"+yt[e[n+10]]+yt[e[n+11]]+yt[e[n+12]]+yt[e[n+13]]+yt[e[n+14]]+yt[e[n+15]]).toLowerCase()}let ud;const GC=new Uint8Array(16);function YC(){if(!ud){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ud=crypto.getRandomValues.bind(crypto)}return ud(GC)}const XC=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),xg={randomUUID:XC};function JC(e,n,o){var a;if(xg.randomUUID&&!e)return xg.randomUUID();e=e||{};const i=e.random??((a=e.rng)==null?void 0:a.call(e))??YC();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,qC(i)}function Ss(e){const n=[];for(const o of e.split("/"))if(!(o===""||o===".")){if(o===".."){n.pop();continue}n.push(o)}return n}function Pr(e){return"/"+Ss(e).join("/")}function We(...e){return Pr(e.join("/"))}function Yt(e){const n=Ss(e);return n.pop(),"/"+n.join("/")}function Xt(e){const n=Ss(e);return n.length?n[n.length-1]:""}class je extends Error{constructor(n,o){super(o?`${n}: ${o}`:n),this.code=n,this.name="KernelError"}}const ZC={spawn:"proc",kill:"proc",win_focus:"gui",win_move:"gui",open:"fs",read:"fs",write:"fs",close:"fs",readdir:"fs",stat:"fs",mkdir:"fs",unlink:"fs",rename:"fs"};class e2{constructor(n){Ie(this,"registry");Ie(this,"processes",new Map);Ie(this,"listeners",new Set);Ie(this,"persistence");Ie(this,"defaultLocation");Ie(this,"uid");Ie(this,"snapshot",[]);Ie(this,"vfs",null);Ie(this,"kernelFds",new Map);Ie(this,"nextFd",3);Ie(this,"panicListeners",new Set);Ie(this,"panicState",null);Ie(this,"subscribeFs",n=>this.vfs?this.vfs.subscribe(n):()=>{});Ie(this,"fsVersion",()=>{var n;return((n=this.vfs)==null?void 0:n.version())??0});Ie(this,"subscribe",n=>(this.listeners.add(n),()=>this.listeners.delete(n)));Ie(this,"getSnapshot",()=>this.snapshot);Ie(this,"subscribePanic",n=>(this.panicListeners.add(n),()=>this.panicListeners.delete(n)));Ie(this,"getPanic",()=>this.panicState);this.registry=n.registry,this.persistence=n.persistence,this.defaultLocation=n.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=n.uid??1e3,this.boot()}boot(){var o;const n=(o=this.persistence)==null?void 0:o.load();if(n)for(const i of n)this.registry.has(i.exec)&&this.processes.set(i.pid,this.hydrate(i));this.rebuildSnapshot()}hydrate(n){return{pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,icon:n.icon,argv:n.argv??[],state:n.state,priority:n.priority,window:n.window,cwd:n.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const n=this.snapshot.map(o=>({pid:o.pid,ppid:o.ppid,uid:o.uid,exec:o.exec,name:o.name,icon:o.icon,argv:o.argv,priority:o.priority,window:o.window,cwd:o.cwd,state:o.state}));this.persistence.save(n)}mountVfs(n){this.vfs=n}processInfo(){return this.sysPs()}panic(n){this.panicState={code:n.code??"0E",address:n.address??"0028:C000"+((this.snapshot.length*7+11)%65536).toString(16).toUpperCase().padStart(4,"0"),message:n.message,stack:n.stack,syscall:n.syscall,recoverable:n.recoverable??!0};for(const o of this.panicListeners)o(this.panicState)}clearPanic(){this.panicState=null;for(const n of this.panicListeners)n(null)}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const n of this.listeners)n()}syscall(n,o,i){try{return Promise.resolve(this.dispatch(n,o,i))}catch(a){if(!(a instanceof je)){const u=a;this.panic({message:(u==null?void 0:u.message)??String(a),stack:u==null?void 0:u.stack,syscall:o})}return Promise.reject(a)}}enforcePermission(n,o){var d;if(n===null)return;const i=ZC[o];if(!i)return;const a=this.processes.get(n);if(!a)throw new je("ESRCH",`no process ${n}`);if(!(((d=this.registry.get(a.exec))==null?void 0:d.permissions)??[]).includes(i))throw new je("EACCES",`'${a.exec}' lacks '${i}' permission for ${o}`)}dispatch(n,o,i){var a;switch(this.enforcePermission(n,o),o){case"spawn":return this.sysSpawn(n,i);case"exit":return this.sysExit(n,i.code??0);case"kill":return this.sysKill(i.pid);case"getpid":return n;case"getargv":return n?((a=this.processes.get(n))==null?void 0:a.argv)??[]:[];case"ps":return this.sysPs();case"win_focus":return this.sysFocus(i.pid);case"win_move":return this.sysMove(i.pid,i.location);case"open":return this.sysOpen(n,i.path,i.flags);case"read":return this.sysRead(n,i.fd,i.len);case"write":return this.sysWrite(n,i.fd,i.data);case"close":return this.sysClose(n,i.fd);case"readdir":return this.fs().readdir(i.path);case"stat":return this.fs().stat(i.path);case"mkdir":return this.fs().mkdir(i.path);case"unlink":return this.fs().unlink(i.path);case"rename":return this.fs().rename(i.from,i.to);default:throw new je("ENOSYS",`unknown syscall: ${o}`)}}sysSpawn(n,o){const i=this.registry.get(o.exec);if(!i)throw new je("ENOENT",`no program "${o.exec}" in /bin`);const a=JC();for(const u of this.processes.values())u.priority+=1;return this.processes.set(a,{pid:a,ppid:n,uid:this.uid,exec:o.exec,name:o.name??i.name,icon:o.icon??i.icon,argv:o.argv??[],state:"running",priority:0,window:o.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(n){if(!this.processes.delete(n))throw new je("ESRCH",`no process ${n}`);this.commit()}sysExit(n,o){n&&this.sysKill(n)}sysPs(){return this.snapshot.map(n=>({pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,state:n.state,priority:n.priority}))}sysFocus(n){if(!this.processes.get(n))throw new je("ESRCH",`no process ${n}`);let i=0;for(const a of this.processes.values())a.priority=a.pid===n?0:++i;this.commit()}sysMove(n,o){const i=this.processes.get(n);if(!i)throw new je("ESRCH",`no process ${n}`);i.window=o,this.commit()}fs(){if(!this.vfs)throw new je("ENOSYS","no filesystem mounted");return this.vfs}fdTable(n){if(n===null)return this.kernelFds;const o=this.processes.get(n);if(!o)throw new je("ESRCH",`no process ${n}`);return o.fds}sysOpen(n,o,i){const a=this.fs(),u=Pr(o),d=a.exists(u),p=i==="w"||i==="a"||i==="rw";if(d)i==="w"&&a.write(u,new Uint8Array);else{if(!p)throw new je("ENOENT",u);a.write(u,new Uint8Array)}const h=i==="a"?a.stat(u).size:0,x=this.nextFd++;return this.fdTable(n).set(x,{path:u,flags:i,offset:h}),x}openFile(n,o){const i=this.fdTable(n).get(o);if(!i)throw new je("EBADF",`bad fd ${o}`);return i}sysRead(n,o,i){const a=this.openFile(n,o);if(a.flags!=="r"&&a.flags!=="rw")throw new je("EBADF","not opened for reading");const d=this.fs().read(a.path).slice(a.offset,a.offset+i);return a.offset+=d.length,d}sysWrite(n,o,i){const a=this.openFile(n,o);if(a.flags==="r")throw new je("EBADF","not opened for writing");const u=this.fs().read(a.path),d=a.offset+i.length,p=new Uint8Array(Math.max(u.length,d));return p.set(u),p.set(i,a.offset),this.fs().write(a.path,p),a.offset=d,i.length}sysClose(n,o){if(!this.fdTable(n).delete(o))throw new je("EBADF",`bad fd ${o}`)}}class t2{constructor(){Ie(this,"programs",new Map)}register(n){this.programs.set(n.exec,n)}unregister(n){return this.programs.delete(n)}get(n){return this.programs.get(n)}component(n){var o;return(o=this.programs.get(n))==null?void 0:o.component}has(n){return this.programs.has(n)}list(){return[...this.programs.values()]}}const n2="modulepreload",r2=function(e){return"/"+e},yg={},mo=function(n,o,i){let a=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=Promise.allSettled(o.map(h=>{if(h=r2(h),h in yg)return;yg[h]=!0;const x=h.endsWith(".css"),y=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const w=document.createElement("link");if(w.rel=x?"stylesheet":n2,x||(w.as="script"),w.crossOrigin="",w.href=h,p&&w.setAttribute("nonce",p),document.head.appendChild(w),x)return new Promise((S,A)=>{w.addEventListener("load",S),w.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${h}`)))})}))}function u(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return a.then(d=>{for(const p of d||[])p.status==="rejected"&&u(p.reason);return n().catch(u)})};function Be(e){return{exec:e.exec,name:e.name,icon:e.icon,component:e.component,permissions:e.permissions??[]}}const bt=O.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-width: ${e=>e.$minW??360}px;
    min-height: ${e=>e.$minH??240}px;
    background: #c0c0c0;
`,fn=O.div`
    flex: 1;
    min-height: 0;
    display: flex;
    overflow: hidden;
`,o2=O.div`
    display: flex;
    align-items: stretch;
    height: 20px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    font-size: 12px;
    flex-shrink: 0;
`,i2=O.button`
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
`,s2=O.div`
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
`,l2=O.div`
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
`,Ae=({icon:e,children:n,...o})=>l.jsxs(l2,{...o,children:[l.jsx("span",{style:{width:16,flexShrink:0,display:"inline-flex",justifyContent:"center"},children:e&&l.jsx("img",{src:e,alt:"",style:{width:16,height:16}})}),l.jsx("span",{style:{flex:1,display:"flex",justifyContent:"space-between",gap:18},children:n})]}),js=O.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`;function a2({label:e,accel:n}){const o=n??e[0],i=e.toLowerCase().indexOf(o.toLowerCase());return i<0?l.jsx(l.Fragment,{children:e}):l.jsxs(l.Fragment,{children:[e.slice(0,i),l.jsx("u",{children:e[i]}),e.slice(i+1)]})}const tw=g.createContext({openId:null,setOpenId:()=>{}}),pn=({children:e})=>{const[n,o]=g.useState(null),i=g.useRef(null);return g.useEffect(()=>{if(n===null)return;const a=d=>{var p;(p=i.current)!=null&&p.contains(d.target)||o(null)},u=d=>{d.key==="Escape"&&o(null)};return document.addEventListener("mousedown",a),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",u)}},[n]),l.jsx(tw.Provider,{value:{openId:n,setOpenId:o},children:l.jsx(o2,{ref:i,children:e})})},ze=({label:e,accel:n,children:o,disabled:i,onOpen:a})=>{const u=g.useId(),{openId:d,setOpenId:p}=g.useContext(tw),h=d===u,x=()=>{i||(a==null||a(),p(u))},y=()=>i?void 0:h?p(null):x(),w=()=>{!i&&d!==null&&d!==u&&x()};return l.jsxs("div",{style:{position:"relative"},onMouseEnter:w,children:[l.jsx(i2,{$open:h,disabled:i,onClick:y,children:l.jsx(a2,{label:e,accel:n})}),h&&l.jsx(s2,{onClick:()=>p(null),children:o})]})},ai=O.div`
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
`,ot=O.button`
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
`,jn=O.div`
    width: 2px;
    height: 18px;
    margin: 0 3px;
    border-left: 1px solid #808080;
    border-right: 1px solid #ffffff;
`,c2=O.div`
    display: flex;
    align-items: stretch;
    gap: 2px;
    padding: 2px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    flex-shrink: 0;
    font-size: 11px;
`,Oe=O.div`
    flex: ${e=>e.$flex??0} 1 auto;
    min-width: 0;
    padding: 1px 6px;
    border: 1px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Tt=({children:e})=>l.jsxs(c2,{children:[e,l.jsx("div",{style:{width:14,alignSelf:"stretch",position:"relative"},children:l.jsx("svg",{viewBox:"0 0 14 14",width:"14",height:"100%",style:{position:"absolute",bottom:0,right:0},children:[0,1,2].map(n=>[0,1,2].filter(o=>o>=n).map(o=>l.jsxs("g",{children:[l.jsx("rect",{x:4+o*3,y:4+n*3,width:"2",height:"2",fill:"#ffffff"}),l.jsx("rect",{x:4+o*3,y:4+n*3,width:"1",height:"1",fill:"#808080"})]},`${n}-${o}`)))})})]});function u2(e,n){const o=(i,a)=>e.syscall(n,i,a);return{spawn:(i,a)=>o("spawn",{exec:i,...a}),exit:(i=0)=>o("exit",{code:i}),kill:i=>o("kill",{pid:i}),getpid:()=>o("getpid",{}),argv:()=>o("getargv",{}),ps:()=>o("ps",{}),focus:i=>o("win_focus",{pid:i}),move:(i,a)=>o("win_move",{pid:a??n,location:i}),open:(i,a="r")=>o("open",{path:i,flags:a}),read:(i,a)=>o("read",{fd:i,len:a}),write:(i,a)=>o("write",{fd:i,data:a}),close:i=>o("close",{fd:i}),readdir:i=>o("readdir",{path:i}),stat:i=>o("stat",{path:i}),mkdir:i=>o("mkdir",{path:i}),unlink:i=>o("unlink",{path:i}),rename:(i,a)=>o("rename",{from:i,to:a}),async readFile(i){const{size:a}=await o("stat",{path:i}),u=await o("open",{path:i,flags:"r"});try{return await o("read",{fd:u,len:a})}finally{await o("close",{fd:u})}},async writeFile(i,a){const u=await o("open",{path:i,flags:"w"});try{await o("write",{fd:u,data:a})}finally{await o("close",{fd:u})}},async readTextFile(i){return new TextDecoder().decode(await this.readFile(i))},async writeTextFile(i,a){await this.writeFile(i,new TextEncoder().encode(a))}}}const nw=g.createContext(null);function d2({pid:e,children:n}){return l.jsx(nw.Provider,{value:e,children:n})}function f2(){return g.useContext(nw)}function Zt(){const e=zr(),n=f2();return g.useMemo(()=>u2(e,n),[e,n])}const rw="vortex.recycle";function yp(){try{return JSON.parse(localStorage.getItem(rw)||"{}")}catch{return{}}}function ow(e){localStorage.setItem(rw,JSON.stringify(e))}function iw(e,n){const o=yp();o[e]=n,ow(o)}function p2(e){return yp()[e]}function wg(e){const n=yp();delete n[e],ow(n)}const Ct="/explorer.png",co="/notes.png",Zi="/Recycle Bin",vg="/home/user";async function sw(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await sw(e,We(n,i));await e.unlink(n)}const h2=()=>{const e=Zt(),[n,o]=g.useState([]),[i,a]=g.useState(null),u=g.useCallback(async()=>{await e.mkdir(Zi).catch(()=>{});const h=await e.readdir(Zi).catch(()=>[]),x=await Promise.all(h.map(async y=>{try{return{name:y,type:(await e.stat(We(Zi,y))).type}}catch{return{name:y,type:"file"}}}));o(x),a(null)},[e]);g.useEffect(()=>{u()},[u]);const d=async()=>{if(!i)return;let h=p2(i)??We(vg,i);await e.stat(Yt(h)).then(()=>!0).catch(()=>!1)||(h=We(vg,i)),await e.rename(We(Zi,i),h).catch(()=>{}),wg(i),await u()},p=async()=>{for(const h of n)await sw(e,We(Zi,h.name)).catch(()=>{}),wg(h.name);await u()};return l.jsxs(bt,{$minW:420,$minH:280,children:[l.jsxs(pn,{children:[l.jsxs(ze,{label:"File",children:[l.jsx(Ae,{$disabled:!i,onMouseDown:h=>{h.preventDefault(),d()},children:"Restore"}),l.jsx(js,{}),l.jsx(Ae,{$disabled:n.length===0,onMouseDown:h=>{h.preventDefault(),p()},children:"Empty Recycle Bin"})]}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Recycle Bin — VortexOS"})})]}),l.jsxs(ai,{children:[l.jsx(ot,{onClick:d,disabled:!i,children:"↩ Restore"}),l.jsx(jn,{}),l.jsx(ot,{onClick:p,disabled:n.length===0,children:"🗑 Empty Recycle Bin"})]}),l.jsx(fn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onClick:()=>a(null),children:n.length===0?l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#555"},children:"The Recycle Bin is empty."}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:n.map(h=>l.jsxs("div",{onClick:x=>{x.stopPropagation(),a(h.name)},style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:h.type==="dir"?Ct:co,alt:h.type,style:{height:48,filter:i===h.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:i===h.name?"white":"black",backgroundColor:i===h.name?"#000080":"transparent"},children:h.name})]},h.name))})})}),l.jsx(Tt,{children:l.jsxs(Oe,{$flex:1,children:[n.length," object(s)"]})})]})};async function m2(){var e;try{if((e=navigator.storage)!=null&&e.estimate){const{usage:n=0,quota:o=0}=await navigator.storage.estimate();return{usage:n,quota:o,supported:!0}}}catch{}return{usage:0,quota:0,supported:!1}}function Tr(e){if(e<=0)return"0 B";const n=["B","KB","MB","GB","TB"],o=Math.min(n.length-1,Math.floor(Math.log(e)/Math.log(1024)));return`${(e/Math.pow(1024,o)).toFixed(o===0?0:1)} ${n[o]}`}function lw(){const[e,n]=g.useState(null);return g.useEffect(()=>{let o=!0;return m2().then(i=>{o&&n(i)}),()=>{o=!1}},[]),e}const us="/my-computer.png",bg=[{name:"VortexOS (C:)",path:"/",icon:us},{name:"Home",path:"/home/user",icon:Ct},{name:"Cloud (/mnt/cloud)",path:"/mnt/cloud",icon:Ct},{name:"Public (/mnt/public)",path:"/mnt/public",icon:Ct},{name:"Programs (/bin)",path:"/bin",icon:Ct},{name:"Devices (/dev)",path:"/dev",icon:Ct},{name:"Processes (/proc)",path:"/proc",icon:Ct}],g2=()=>{const e=Zt(),n=lw(),o=n&&n.quota>0?Math.min(100,n.usage/n.quota*100):0;return l.jsxs(bt,{$minW:420,$minH:280,children:[l.jsxs(pn,{children:[l.jsx(ze,{label:"File",children:l.jsx(Ae,{$disabled:!0,children:"Open / Explore a drive"})}),l.jsx(ze,{label:"View",children:l.jsx(Ae,{$disabled:!0,children:"Large Icons"})}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"My Computer — VortexOS"})})]}),l.jsx(fn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:bg.map(i=>l.jsxs("div",{onDoubleClick:()=>e.spawn("explorer",{argv:[i.path]}),title:"Double-click to open",style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:110,padding:10},children:[l.jsx("img",{src:i.icon,alt:"",style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:i.name})]},i.path))})})}),l.jsxs(vt,{variant:"well",className:"footer",style:{display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[l.jsxs("span",{style:{fontSize:12},children:[bg.length," object(s)"]}),(n==null?void 0:n.supported)&&l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,marginLeft:"auto"},children:[l.jsx("span",{children:"Disk (C:):"}),l.jsx("span",{title:`${Tr(n.usage)} of ${Tr(n.quota)} used`,style:{width:90,height:12,border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff",position:"relative"},children:l.jsx("span",{style:{position:"absolute",inset:0,width:`${o}%`,background:"#000080"}})}),l.jsxs("span",{children:[Tr(n.usage)," / ",Tr(n.quota)]})]})]})]})},aw=60;let oa=4,ka=0,is=0,ss=0,mf=!1;const gf=new Array(aw).fill(0),xf=new Array(aw).fill(0);let cw=uw();function uw(){return{cpu:oa,mem:ka,memBytes:is,memTotal:ss,cpuHistory:[...gf],memHistory:[...xf],real:mf}}const ls=new Set;let yf=!1,wp=0,ia=0,wf=0,Sa=0,sa=null;function dw(e){if(ia){const n=e-ia;wf+=Math.max(0,n-16.7),Sa++}ia=e,wp=requestAnimationFrame(dw)}function x2(){const e=performance.memory;e&&e.jsHeapSizeLimit?(mf=!0,is=e.usedJSHeapSize,ss=e.jsHeapSizeLimit,ka=Math.min(100,Math.round(e.usedJSHeapSize/e.jsHeapSizeLimit*100))):(mf=!1,ss=64*1024*1024,is=Math.min(ss,is+Sa%3*4096+1024),ka=Math.min(95,Math.round(is/ss*100)))}function y2(){const e=Sa>0?Math.min(1,wf/1e3):0,n=3+Math.round(e*97);oa=Math.round(oa*.5+n*.5),wf=0,Sa=0,x2(),gf.push(oa),gf.shift(),xf.push(ka),xf.shift(),cw=uw(),ls.forEach(o=>o())}function w2(){yf||(yf=!0,ia=0,wp=requestAnimationFrame(dw),sa=setInterval(y2,1e3))}function v2(){yf=!1,cancelAnimationFrame(wp),sa&&clearInterval(sa),sa=null}function b2(){return cw}function fw(){return g.useSyncExternalStore(e=>(ls.add(e),ls.size===1&&w2(),()=>{ls.delete(e),ls.size===0&&v2()}),b2)}function k2(e,n){let o=0;for(let d=0;d<e.length;d++)o=o*31+e.charCodeAt(d)>>>0;const i=o%7,a=(o+n)%5,u=1.5+o%64+(o>>3)%10/10;return{cpu:i+a,mem:Math.round(u*10)/10}}const S2=()=>{const e=lc(),n=Zt(),[o,i]=g.useState(0);g.useEffect(()=>{const u=setInterval(()=>i(d=>d+1),1e3);return()=>clearInterval(u)},[]);const a=["PID","Name","CPU","Mem","Pri",""];return l.jsxs(Oy,{style:{width:"100%"},children:[l.jsx(Ny,{children:l.jsx(df,{children:a.map((u,d)=>l.jsx(Ly,{children:u},d))})}),l.jsx(Iy,{children:e.map(u=>{const d=k2(u.pid,o);return l.jsxs(df,{children:[l.jsx(Zr,{style:{textAlign:"center"},children:u.pid.slice(0,8)}),l.jsx(Zr,{children:u.name}),l.jsxs(Zr,{style:{textAlign:"center"},children:[String(d.cpu).padStart(2,"0"),"%"]}),l.jsxs(Zr,{style:{textAlign:"center"},children:[d.mem," MB"]}),l.jsx(Zr,{style:{textAlign:"center"},children:u.priority===0?"High":"Normal"}),l.jsx(Zr,{style:{textAlign:"center"},children:l.jsx(Ke,{size:"sm",onClick:()=>n.kill(u.pid),children:"End"})})]},u.pid)})})]})},kg=({history:e,value:n,label:o,unit:i="%"})=>{const a=g.useRef(null);return g.useEffect(()=>{const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width,h=u.height;d.fillStyle="#000",d.fillRect(0,0,p,h),d.strokeStyle="#003b00",d.lineWidth=1;for(let y=0;y<=p;y+=16)d.beginPath(),d.moveTo(y,0),d.lineTo(y,h),d.stroke();for(let y=0;y<=h;y+=12)d.beginPath(),d.moveTo(0,y),d.lineTo(p,y),d.stroke();d.strokeStyle="#00ff00",d.lineWidth=1.5,d.beginPath();const x=e.length;e.forEach((y,w)=>{const S=w/(x-1)*p,A=h-Math.min(100,y)/100*h;w===0?d.moveTo(S,A):d.lineTo(S,A)}),d.stroke()},[e]),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:12,marginBottom:4},children:o}),l.jsx(vt,{variant:"well",style:{padding:2},children:l.jsx("canvas",{ref:a,width:220,height:96,style:{display:"block",width:"100%",height:96}})}),l.jsxs("div",{style:{fontSize:18,fontFamily:"monospace",textAlign:"center",marginTop:4},children:[n,i]})]})},j2=()=>{const e=fw();return l.jsxs("div",{style:{padding:12},children:[l.jsxs("div",{style:{display:"flex",gap:16},children:[l.jsx(kg,{history:e.cpuHistory,value:e.cpu,label:"CPU Usage (main thread)"}),l.jsx(kg,{history:e.memHistory,value:e.mem,label:"Memory Usage"})]}),l.jsxs(vt,{variant:"well",style:{marginTop:12,padding:10,fontSize:12,lineHeight:1.7},children:[l.jsxs("div",{children:[l.jsx("b",{children:"CPU:"})," ",e.cpu,"% (measured from frame timing — a browser tab can't read the host CPU)"]}),l.jsxs("div",{children:[l.jsx("b",{children:"Memory:"})," ",Tr(e.memBytes)," of ",Tr(e.memTotal)," ",e.real?"(real JS heap)":"(estimated)"]})]})]})},pw=g.createContext({});function E2({children:e}){const[n,o]=g.useState("url(/win-cursor/arrow.cur), auto"),[i,a]=g.useState([]),u=ie=>a(ue=>ue.includes(ie)?ue:[...ue,ie]),d=ie=>a(ue=>ue.filter(me=>me!==ie)),[p,h]=g.useState(()=>localStorage.getItem("vortex.crt")==="1"),x=()=>h(ie=>{const ue=!ie;return localStorage.setItem("vortex.crt",ue?"1":"0"),ue}),[y,w]=g.useState(()=>localStorage.getItem("vortex.sss")!=="0"),S=()=>w(ie=>{const ue=!ie;return localStorage.setItem("vortex.sss",ue?"1":"0"),ue}),[A,C]=g.useState(null),[v,j]=g.useState(()=>localStorage.getItem("vortex.theme")||"original"),k=ie=>{localStorage.setItem("vortex.theme",ie),j(ie)},[E,R]=g.useState(!1),N=g.useRef(null),z=(ie=550)=>{R(!0),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>R(!1),ie)},[K,Y]=g.useState({image:"",type:1}),Z=localStorage.getItem("wallpaper");g.useEffect(()=>{Y(Z!==null?JSON.parse(Z):{image:"",type:1})},[Z]);const se=ie=>{localStorage.setItem("wallpaper",JSON.stringify(ie)),Y(ie)},ge=ie=>{o(`url(/win-cursor/${ie}), auto`)};return l.jsx(pw.Provider,{value:{cursor:n,changeCursor:ge,wallpaper:K,changeWallpaper:se,minimized:i,minimize:u,restore:d,crt:p,toggleCrt:x,clipboard:A,setClipboard:C,theme:v,setTheme:k,busy:E,flashBusy:z,sssStyle:y,toggleSssStyle:S},children:e})}function hn(){return g.useContext(pw)}const C2=()=>{const{processes:e,changePriority:n,closeProcess:o}=Tn(),{minimized:i,restore:a}=hn(),[u,d]=g.useState(null),p=h=>{h.uuid&&(a(h.uuid),n(h,0))};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[l.jsx("div",{style:{fontSize:12,marginBottom:6},children:"Task"}),l.jsxs(vt,{variant:"well",style:{flex:1,minHeight:80,overflow:"auto",background:"#fff"},children:[e.length===0&&l.jsx("div",{style:{padding:10,color:"#666"},children:"No tasks running."}),e.map(h=>{const x=!!h.uuid&&i.includes(h.uuid);return l.jsxs("div",{onClick:()=>d(h.uuid??null),onDoubleClick:()=>p(h),style:{display:"flex",alignItems:"center",gap:8,padding:"3px 6px",cursor:"pointer",background:u===h.uuid?"#000080":"transparent",color:u===h.uuid?"#fff":"#000"},children:[l.jsx("img",{src:h.icon,alt:"",style:{width:16,height:16}}),l.jsx("span",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:h.name}),l.jsx("span",{style:{fontSize:11,opacity:.8},children:x?"Background":"Running"})]},h.uuid)})]}),l.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end",marginTop:8},children:[l.jsx(Ke,{disabled:!u,onClick:()=>{const h=e.find(x=>x.uuid===u);h!=null&&h.uuid&&o(h.uuid),d(null)},children:"End Task"}),l.jsx(Ke,{disabled:!u,onClick:()=>{const h=e.find(x=>x.uuid===u);h&&p(h)},children:"Switch To"})]})]})},$2=()=>{const[e,n]=g.useState(0),o=fw(),{processes:i}=Tn();return l.jsxs(l.Fragment,{children:[l.jsxs(Mr,{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[l.jsxs(Ua,{value:e,onChange:a=>n(a),children:[l.jsx(Dr,{value:0,children:"Applications"}),l.jsx(Dr,{value:1,children:"Processes"}),l.jsx(Dr,{value:2,children:"Performance"})]}),l.jsxs(Ha,{style:{flex:1,minHeight:0,overflow:"auto"},children:[e===0&&l.jsx(C2,{}),e===1&&l.jsx(S2,{}),e===2&&l.jsx(j2,{})]})]}),l.jsxs(vt,{variant:"well",className:"footer",style:{display:"flex",gap:16,padding:"2px 8px",fontSize:11},children:[l.jsxs("span",{children:["Tasks: ",i.length]}),l.jsxs("span",{children:["CPU Usage: ",o.cpu,"%"]}),l.jsxs("span",{children:["Mem: ",o.mem,"%"]})]})]})},dd="/home/user",Sg="/home/user/welcome.txt",A2=()=>{const e=Zt(),[n,o]=g.useState(Sg),[i,a]=g.useState(""),[u,d]=g.useState(!1),[p,h]=g.useState([]),[x,y]=g.useState("Ready"),w=g.useCallback(async v=>{try{const j=await e.readTextFile(v);o(v),a(j),d(!1),y(`Opened ${v}`)}catch(j){y(`Could not open ${v}: ${j.code??j.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[v]=await e.argv();await w(v||Sg)})()},[w,e]);const S=async()=>{try{h((await e.readdir(dd)).filter(v=>v.endsWith(".txt")))}catch{h([])}},A=async()=>{try{await e.writeTextFile(n,i),d(!1),y(`Saved ${n}`)}catch(v){y(`Save failed: ${v.code??v.message}`)}},C=()=>{const v=window.prompt("New file name:","untitled.txt");v&&(o(`${dd}/${v}`),a(""),d(!0),y(`New file ${v} — not saved yet`))};return l.jsxs(bt,{$minW:520,$minH:360,children:[l.jsxs(pn,{children:[l.jsxs(ze,{label:"File",onOpen:S,children:[l.jsx(Ae,{onMouseDown:v=>{v.preventDefault(),C()},children:"New"}),l.jsxs(Ae,{onMouseDown:v=>{v.preventDefault(),A()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(js,{}),p.length===0?l.jsx(Ae,{$disabled:!0,children:"(no .txt files)"}):p.map(v=>l.jsx(Ae,{onMouseDown:j=>{j.preventDefault(),w(`${dd}/${v}`)},children:v},v))]}),l.jsx(ze,{label:"Edit",children:l.jsx(Ae,{onMouseDown:v=>{v.preventDefault(),a(""),d(!0)},children:"Select All / Clear"})}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Notes — VortexOS"})})]}),l.jsx(fn,{style:{padding:3},children:l.jsx("textarea",{value:i,onChange:v=>{a(v.target.value),d(!0)},spellCheck:!1,rows:20,style:{flex:1,width:"100%",height:"100%",resize:"none",boxSizing:"border-box",padding:6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",background:"#ffffff",fontFamily:"'ms_sans_serif', 'MS Sans Serif', sans-serif",fontSize:13,outline:"none"}})}),l.jsxs(Tt,{children:[l.jsxs(Oe,{$flex:1,children:[n,u?" •":""]}),l.jsx(Oe,{children:x})]})]})},es="/home/user",jg=/\.(html?|rtf|doc)$/i,T2=["MS Sans Serif","Times New Roman","Courier New","Arial","Georgia"],R2=[1,2,3,4,5,6,7],D2=()=>{const e=Zt(),n=g.useRef(null),[o,i]=g.useState(`${es}/document.html`),[a,u]=g.useState(""),[d,p]=g.useState([]),h=(v,j)=>{var k;(k=n.current)==null||k.focus(),document.execCommand(v,!1,j)},x=g.useCallback(async v=>{try{const j=await e.readTextFile(v);n.current&&(n.current.innerHTML=j),i(v),u(`Opened ${v}`)}catch(j){u(`Could not open ${v}: ${j.code??j.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[v]=await e.argv();v?await x(v):n.current&&(n.current.innerHTML="<p>The quick brown fox jumps over the lazy dog.</p>")})()},[x,e]);const y=async()=>{try{p((await e.readdir(es)).filter(v=>jg.test(v)))}catch{p([])}},w=async()=>{var v;try{await e.writeTextFile(o,((v=n.current)==null?void 0:v.innerHTML)??""),u(`Saved ${o}`)}catch(j){u(`Save failed: ${j.code??j.message}`)}},S=async()=>{var k;const v=window.prompt("Save as:",o.split("/").pop()||"document.html");if(!v)return;const j=`${es}/${jg.test(v)?v:v+".html"}`;i(j);try{await e.writeTextFile(j,((k=n.current)==null?void 0:k.innerHTML)??""),u(`Saved ${j}`)}catch(E){u(`Save failed: ${E.code??E.message}`)}},A=()=>{n.current&&(n.current.innerHTML=""),i(`${es}/document.html`),u("New document")},C=(v,j,k)=>l.jsx(ot,{onMouseDown:E=>E.preventDefault(),onClick:()=>h(j),style:k,children:v});return l.jsxs(bt,{$minW:560,$minH:400,children:[l.jsxs(pn,{children:[l.jsxs(ze,{label:"File",onOpen:y,children:[l.jsx(Ae,{onMouseDown:v=>{v.preventDefault(),A()},children:"New"}),l.jsxs(Ae,{onMouseDown:v=>{v.preventDefault(),w()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(Ae,{onMouseDown:v=>{v.preventDefault(),S()},children:"Save As…"}),l.jsx(js,{}),d.length===0?l.jsx(Ae,{$disabled:!0,children:"(no documents)"}):d.map(v=>l.jsx(Ae,{onMouseDown:j=>{j.preventDefault(),x(`${es}/${v}`)},children:v},v))]}),l.jsxs(ze,{label:"Edit",children:[l.jsx(Ae,{onMouseDown:v=>{v.preventDefault(),h("undo")},children:"Undo"}),l.jsx(Ae,{onMouseDown:v=>{v.preventDefault(),h("selectAll")},children:"Select All"})]}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"WordPad — VortexOS"})})]}),l.jsxs(ai,{children:[l.jsx("select",{onMouseDown:v=>v.stopPropagation(),onChange:v=>h("fontName",v.target.value),children:T2.map(v=>l.jsx("option",{value:v,children:v},v))}),l.jsx("select",{onChange:v=>h("fontSize",v.target.value),defaultValue:"3",children:R2.map(v=>l.jsx("option",{value:v,children:v},v))}),l.jsx(jn,{}),C("B","bold",{fontWeight:"bold"}),C("I","italic",{fontStyle:"italic"}),C("U","underline",{textDecoration:"underline"}),l.jsx("input",{type:"color",onChange:v=>h("foreColor",v.target.value),title:"Text colour",style:{width:26,height:20,padding:0}}),l.jsx(jn,{}),C("≡L","justifyLeft"),C("≡C","justifyCenter"),C("≡R","justifyRight"),C("• List","insertUnorderedList")]}),l.jsx(fn,{style:{padding:3},children:l.jsx(vt,{variant:"well",style:{flex:1,height:"100%",padding:0},children:l.jsx("div",{ref:n,contentEditable:!0,suppressContentEditableWarning:!0,style:{height:"100%",overflow:"auto",padding:10,background:"#fff",outline:"none",fontFamily:"'Times New Roman', serif",fontSize:16}})})}),l.jsxs(Tt,{children:[l.jsx(Oe,{$flex:1,children:o}),l.jsx(Oe,{children:a||"Ready"})]})]})};let ts=null,ja=(()=>{const e=parseFloat(localStorage.getItem("vortex.volume")??"");return Number.isFinite(e)?e:.7})(),vp=localStorage.getItem("vortex.muted")==="1";const vf=new Set,hw=()=>vf.forEach(e=>e());function P2(e){return vf.add(e),()=>vf.delete(e)}function bf(){return ja}function mw(e){ja=Math.min(1,Math.max(0,e)),localStorage.setItem("vortex.volume",String(ja)),hw()}function kf(){return vp}function gw(e){vp=e,localStorage.setItem("vortex.muted",e?"1":"0"),hw()}function Un(){try{if(!ts){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;ts=new e}return ts.state==="suspended"&&ts.resume(),ts}catch{return null}}function ht(e,{freq:n,start:o,dur:i,type:a="sine",gain:u=.2}){const d=vp?0:u*ja;if(d<=0)return;const p=e.createOscillator(),h=e.createGain();p.type=a,p.frequency.value=n;const x=e.currentTime+o;h.gain.setValueAtTime(1e-4,x),h.gain.linearRampToValueAtTime(d,x+.02),h.gain.exponentialRampToValueAtTime(1e-4,x+i),p.connect(h).connect(e.destination),p.start(x),p.stop(x+i+.05)}function I2(){const e=Un();if(!e)return;[[261.63,"sine"],[329.63,"sine"],[392,"sine"],[523.25,"triangle"]].forEach(([o,i],a)=>ht(e,{freq:o,start:a*.18,dur:1.8,type:i,gain:.15}))}function N2(){const e=Un();if(!e)return;[[261.63,"triangle"],[329.63,"triangle"],[392,"triangle"],[523.25,"sine"]].forEach(([o,i],a)=>ht(e,{freq:o,start:a*.13,dur:1.9,type:i,gain:.14})),[261.63,329.63,392,523.25].forEach(o=>ht(e,{freq:o,start:.55,dur:2.4,type:"sine",gain:.07})),ht(e,{freq:1046.5,start:.7,dur:1.6,type:"sine",gain:.06}),ht(e,{freq:1567.98,start:.78,dur:1.4,type:"sine",gain:.04})}function bp(){const e=Un();e&&(ht(e,{freq:880,start:0,dur:.16,type:"sine",gain:.22}),ht(e,{freq:1318.51,start:0,dur:.4,type:"sine",gain:.1}))}function Qo(){const e=Un();e&&ht(e,{freq:200,start:0,dur:.05,type:"square",gain:.05})}function uo(){const e=Un();e&&[523.25,659.25,783.99].forEach((n,o)=>ht(e,{freq:n,start:o*.04,dur:.5,gain:.11}))}function L2(){const e=Un();e&&(ht(e,{freq:440,start:0,dur:.08,type:"triangle",gain:.09}),ht(e,{freq:660,start:.05,dur:.1,type:"triangle",gain:.09}))}function O2(){const e=Un();e&&(ht(e,{freq:520,start:0,dur:.08,type:"triangle",gain:.08}),ht(e,{freq:320,start:.05,dur:.12,type:"triangle",gain:.08}))}function M2(){const e=Un();e&&(ht(e,{freq:600,start:0,dur:.12,type:"sine",gain:.08}),ht(e,{freq:300,start:.04,dur:.12,type:"sine",gain:.08}))}function z2(){const e=Un();e&&(ht(e,{freq:300,start:0,dur:.12,type:"sine",gain:.08}),ht(e,{freq:600,start:.04,dur:.12,type:"sine",gain:.08}))}function _2(){const e=Un();e&&[523.25,392,329.63,261.63].forEach((n,o)=>ht(e,{freq:n,start:o*.18,dur:.7,type:"sine",gain:.15}))}const F2="linear-gradient(90deg, #000080 0%, #1084d0 100%)",B2="linear-gradient(90deg, #808080 0%, #b5b5b5 100%)",Es=(e=!0)=>({background:e?F2:B2,color:e?"#ffffff":"#dfdfdf",fontWeight:"bold"}),xw=g.createContext({alert:async()=>{}}),Cs=()=>g.useContext(xw),W2=({type:e})=>{const n={width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"#fff",borderRadius:"50%"};return e==="error"?l.jsx("div",{style:{...n,background:"#d40000",fontSize:20},children:"✕"}):e==="warning"?l.jsxs("div",{style:{width:36,height:34,flexShrink:0,position:"relative"},children:[l.jsx("div",{style:{width:0,height:0,borderLeft:"18px solid transparent",borderRight:"18px solid transparent",borderBottom:"32px solid #ffd000"}}),l.jsx("span",{style:{position:"absolute",left:15,top:9,fontWeight:"bold",color:"#000"},children:"!"})]}):l.jsx("div",{style:{...n,background:"#000080",fontStyle:"italic",fontFamily:"Georgia, serif",fontSize:22},children:"i"})};function H2({children:e}){const[n,o]=g.useState(null),i=g.useCallback(u=>(bp(),new Promise(d=>{o({title:u.title??"VortexOS",message:u.message,type:u.type??"info",resolve:d})})),[]),a=()=>{n==null||n.resolve(),o(null)};return g.useEffect(()=>{if(!n)return;const u=d=>{(d.key==="Enter"||d.key==="Escape")&&a()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[n]),l.jsxs(xw.Provider,{value:{alert:i},children:[e,n&&l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.08)"},children:l.jsxs(oi,{style:{minWidth:330,maxWidth:420},children:[l.jsxs(ri,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",...Es(!0)},children:[l.jsx("span",{children:n.title}),l.jsx(Ke,{onClick:a,style:{width:20,height:18,minWidth:0,padding:0,fontWeight:"bold"},children:"✕"})]}),l.jsxs(Mr,{children:[l.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[l.jsx(W2,{type:n.type}),l.jsx("p",{style:{whiteSpace:"pre-line",lineHeight:1.4},children:n.message})]}),l.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:l.jsx(Ke,{onClick:a,style:{minWidth:84},primary:!0,children:"OK"})})]})]})})]})}const fd="/Recycle Bin";async function yw(e,n,o){if((await e.stat(n)).type==="dir"){await e.mkdir(o);for(const a of await e.readdir(n))await yw(e,We(n,a),We(o,a))}else await e.writeFile(o,await e.readFile(n))}function Ul(e,n){if(!e.includes(n))return n;const o=n.lastIndexOf("."),i=o>0?n.slice(0,o):n,a=o>0?n.slice(o):"";for(let u=2;;u++){const d=`${i} (${u})${a}`;if(!e.includes(d))return d}}const U2=()=>{const e=Zt(),{clipboard:n,setClipboard:o}=hn(),{alert:i}=Cs(),[a,u]=g.useState("/"),[d,p]=g.useState([]),[h,x]=g.useState(null),[y,w]=g.useState(""),[S,A]=g.useState(null),[C,v]=g.useState(null),[j,k]=g.useState(""),E=g.useRef(null),R=g.useCallback(async T=>{try{const H=await e.readdir(T),W=await Promise.all(H.map(async ee=>{try{const F=await e.stat(We(T,ee));return{name:ee,type:F.type,size:F.size}}catch{return{name:ee,type:"file",size:0}}}));W.sort((ee,F)=>ee.type===F.type?ee.name.localeCompare(F.name):ee.type==="dir"?-1:1),u(T),p(W),x(null),w(`${W.length} object(s)`)}catch(H){w(`Cannot open ${T}: ${H.code??H.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[T]=await e.argv();await R(T||"/")})()},[R,e]),g.useEffect(()=>{if(!S)return;const T=()=>A(null);return document.addEventListener("click",T),()=>document.removeEventListener("click",T)},[S]);const N=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,z=/\.(mp3|wav|ogg|m4a|flac)$/i,K=T=>{const H=We(a,T.name);T.type==="dir"?R(H):N.test(T.name)?e.spawn("imageviewer",{argv:[H]}):z.test(T.name)?e.spawn("mediaplayer",{argv:[H]}):e.spawn("notes",{argv:[H]})},Y=async()=>{const T=Ul(d.map(H=>H.name),"New Folder");try{await e.mkdir(We(a,T)),await R(a),ge(T)}catch(H){i({title:"Error",message:`Could not create folder: ${H.code??H.message}`,type:"error"})}},Z=async()=>{const T=Ul(d.map(H=>H.name),"New Text Document.txt");try{await e.writeTextFile(We(a,T),""),await R(a),ge(T)}catch(H){i({title:"Error",message:`Could not create file: ${H.code??H.message}`,type:"error"})}},se=async T=>{const H=We(a,T);try{await e.mkdir(fd).catch(()=>{});const W=await e.readdir(fd).catch(()=>[]),ee=Ul(W,T);await e.rename(H,We(fd,ee)),iw(ee,H),await R(a)}catch(W){i({title:"Delete",message:`Could not delete "${T}": ${W.code??W.message}`,type:"error"})}},ge=T=>{x(T),v(T),k(T)},ie=async()=>{if(!C)return;const T=j.trim(),H=C;if(v(null),!(!T||T===H))try{await e.rename(We(a,H),We(a,T)),await R(a)}catch(W){i({title:"Rename",message:`Could not rename: ${W.code??W.message}`,type:"error"})}},ue=async()=>{if(!n)return;const T=n.path,H=We(a,Ul(d.map(W=>W.name),Xt(T)));try{n.op==="cut"?(await e.rename(T,H),o(null)):await yw(e,T,H),await R(a)}catch(W){i({title:"Paste",message:`Could not paste: ${W.code??W.message}`,type:"error"})}},me=T=>{i({title:`${T.name} Properties`,message:`Name: ${T.name}
Type: ${T.type==="dir"?"File Folder":"File"}
Location: ${a}
Size: ${T.type==="dir"?"—":`${T.size} byte(s)`}`,type:"info"})},B=(T,H)=>{T.preventDefault(),T.stopPropagation(),H&&x(H.name),A({x:T.clientX,y:T.clientY,entry:H})},$=T=>{C||(T.key==="Delete"&&h?se(h):T.key==="F2"&&h&&ge(h))};return l.jsxs(bt,{ref:E,tabIndex:0,onKeyDown:$,$minW:560,$minH:360,style:{outline:"none"},children:[l.jsxs(pn,{children:[l.jsxs(ze,{label:"File",children:[l.jsx(Ae,{icon:Ct,onMouseDown:T=>{T.preventDefault(),Y()},children:"New Folder"}),l.jsx(Ae,{icon:co,onMouseDown:T=>{T.preventDefault(),Z()},children:"New Text Document"})]}),l.jsx(ze,{label:"Edit",children:l.jsxs(Ae,{$disabled:!n,onMouseDown:T=>{T.preventDefault(),ue()},children:["Paste",l.jsx("span",{children:"Ctrl+V"})]})}),l.jsxs(ze,{label:"View",children:[l.jsxs(Ae,{onMouseDown:T=>{T.preventDefault(),R(a)},children:["Refresh",l.jsx("span",{children:"F5"})]}),l.jsx(js,{}),l.jsx(Ae,{$disabled:a==="/",onMouseDown:T=>{T.preventDefault(),R(Yt(a))},children:"Up One Level"})]}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Explorer — VortexOS"})})]}),l.jsxs(ai,{children:[l.jsx(ot,{onClick:()=>R(Yt(a)),disabled:a==="/",children:"↑ Up"}),l.jsx(ot,{onClick:()=>R(a),children:"⟳ Refresh"}),l.jsx(jn,{}),l.jsx(ot,{onClick:Y,children:"New Folder"}),l.jsx(jn,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Address:"}),l.jsx("input",{defaultValue:a,onKeyDown:T=>{T.key==="Enter"&&R(T.target.value)},style:{flex:1,minWidth:120}},a)]}),l.jsx(fn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onContextMenu:T=>B(T,null),onClick:()=>x(null),children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",alignContent:"flex-start"},children:d.map(T=>l.jsxs("div",{onClick:H=>{H.stopPropagation(),x(T.name)},onDoubleClick:()=>K(T),onContextMenu:H=>B(H,T),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:T.type==="dir"?Ct:co,alt:T.type,style:{height:48,filter:h===T.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),C===T.name?l.jsx(ir,{value:j,onChange:H=>k(H.target.value),onBlur:ie,onKeyDown:H=>{H.key==="Enter"&&ie(),H.key==="Escape"&&v(null)},autoFocus:!0,style:{width:80}}):l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:h===T.name?"white":"black",backgroundColor:h===T.name?"#000080":"transparent"},children:T.name})]},T.name))})})}),l.jsxs(Tt,{children:[l.jsx(Oe,{$flex:1,children:y||"Explorer"}),l.jsxs(Oe,{children:[d.length," object(s)"]})]}),S&&Ft.createPortal(S.entry?l.jsxs(_n,{style:{position:"fixed",left:S.x,top:S.y,width:160,zIndex:1e5},children:[l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>K(S.entry),children:"Open"}),l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>o({op:"cut",path:We(a,S.entry.name)}),children:"Cut"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>o({op:"copy",path:We(a,S.entry.name)}),children:"Copy"}),l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>se(S.entry.name),children:"Delete"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>ge(S.entry.name),children:"Rename"}),l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>me(S.entry),children:"Properties"})]}):l.jsxs(_n,{style:{position:"fixed",left:S.x,top:S.y,width:175,zIndex:1e5},children:[l.jsx(Pe,{style:{cursor:"pointer"},onClick:Y,children:"New Folder"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:Z,children:"New Text Document"}),l.jsx(cn,{}),l.jsx(Pe,{disabled:!n,style:{cursor:n?"pointer":"default"},onClick:ue,children:"Paste"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>R(a),children:"Refresh"})]}),document.body)]})};var pd,Eg;function V2(){if(Eg)return pd;Eg=1;var e={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return pd=e,pd}var K2=V2();const Q2=$n(K2);var hd,Cg;function q2(){if(Cg)return hd;Cg=1;var e={name:"ash",anchor:"rgb(192, 192, 192)",anchorVisited:"rgb(192, 192, 192)",borderDark:"rgb(63, 63, 63)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(115, 115, 115)",borderLightest:"rgb(175, 175, 175)",canvas:"rgb(64, 64, 64)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(63, 63, 63)",canvasTextDisabledShadow:"rgb(175, 175, 175)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(128, 128, 128)",desktopBackground:"rgb(0, 0, 0)",flatDark:"rgb(63, 63, 63)",flatLight:"rgb(96, 96, 96)",focusSecondary:"rgb(175, 175, 175)",headerBackground:"linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))",headerNotActiveBackground:"linear-gradient(to right, rgb(63, 63, 63), rgb(0, 0, 0))",headerNotActiveText:"rgb(128, 128, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(0, 0, 0)",material:"rgb(96, 96, 96)",materialDark:"rgb(63, 63, 63)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(63, 63, 63)",materialTextDisabledShadow:"rgb(175, 175, 175)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(0, 0, 0)",tooltip:"rgb(0, 0, 0)"};return hd=e,hd}var G2=q2();const Y2=$n(G2);var md,$g;function X2(){if($g)return md;$g=1;var e={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"};return md=e,md}var J2=X2();const Z2=$n(J2);var gd,Ag;function e8(){if(Ag)return gd;Ag=1;var e={name:"matrix",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#282828",borderDarkest:"#000000",borderLight:"#656565",borderLightest:"#a7a7a7",canvas:"#c0c0c0",canvasText:"#000000",canvasTextDisabled:"#282828",canvasTextDisabledShadow:"#ff0000",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#282828",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#35FF69",headerBackground:"#000000",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#535353",headerText:"#a7a7a7",hoverBackground:"#000000",material:"#535353",materialDark:"#282828",materialText:"#35FF69",materialTextDisabled:"#282828",materialTextDisabledShadow:"#a7a7a7",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return gd=e,gd}var t8=e8();const n8=$n(t8);var xd,Tg;function r8(){if(Tg)return xd;Tg=1;var e={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"};return xd=e,xd}var o8=r8();const i8=$n(o8);var yd,Rg;function s8(){if(Rg)return yd;Rg=1;var e={name:"ninjaTurtles",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#017401",borderDarkest:"#000000",borderLight:"#1dbc1b",borderLightest:"#55fd55",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#017401",canvasTextDisabledShadow:"#55fd55",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#017401",desktopBackground:"#045424",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#FF1D15",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#FABC3C",material:"#00a800",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#017401",materialTextDisabledShadow:"#55fd55",materialTextInvert:"#000000",progress:"#FF1D15",tooltip:"#fefbcc"};return yd=e,yd}var l8=s8();const a8=$n(l8);var wd,Dg;function c8(){if(Dg)return wd;Dg=1;var e={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"};return wd=e,wd}var u8=c8();const d8=$n(u8);var vd,Pg;function f8(){if(Pg)return vd;Pg=1;var e={name:"lilac",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#5f549b",borderDarkest:"#1c1449",borderLight:"#bcb4e9",borderLightest:"#d3ccf4",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#5f549b",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#5f549b",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#5e4dba",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#5e4dba",material:"#b1a7df",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#5f549b",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#5e4dba",tooltip:"#fefbcc"};return vd=e,vd}var p8=f8();const h8=$n(p8);var bd,Ig;function m8(){if(Ig)return bd;Ig=1;var e={name:"blackAndWhite",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#000000",borderLight:"#dfe0e3",borderLightest:"#888c8f",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#888c8f",desktopBackground:"#ffffff",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000000",headerNotActiveBackground:"#ffffff",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#000000",material:"#ffffff",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return bd=e,bd}var g8=m8();const x8=$n(g8);var kd,Ng;function y8(){if(Ng)return kd;Ng=1;var e={name:"highContrast",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#ffffff",borderLight:"#dfe0e3",borderLightest:"#ffffff",canvas:"#353535",canvasText:"#ffffff",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#ffffff",checkmarkDisabled:"#888c8f",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#8e0284",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#8e0284",material:"#000000",materialDark:"#9a9e9c",materialText:"#ffffff",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0284",tooltip:"#fefbcc"};return kd=e,kd}var w8=y8();const v8=$n(w8),Sf={original:{name:"Windows Standard",theme:Q2},ash:{name:"Ash (Win98)",theme:Y2},marine:{name:"Marine",theme:d8},rainyDay:{name:"Rainy Day",theme:i8},candy:{name:"Candy",theme:Z2},lilac:{name:"Lilac",theme:h8},ninjaTurtles:{name:"Ninja Turtles",theme:a8},matrix:{name:"Matrix",theme:n8},blackAndWhite:{name:"Black & White",theme:x8},highContrast:{name:"High Contrast",theme:v8}},b8="original";function k8(e){return(Sf[e]??Sf[b8]).theme}const ww="vortex.screensaver",Lg={type:"starfield",wait:3};function S8(){try{return{...Lg,...JSON.parse(localStorage.getItem(ww)||"{}")}}catch{return{...Lg}}}let la=S8();const jf=new Set,Ef=new Set;function vw(){return la}function Og(e){la={...la,...e},localStorage.setItem(ww,JSON.stringify(la)),jf.forEach(n=>n())}function j8(e){return jf.add(e),()=>jf.delete(e)}function bw(){return g.useSyncExternalStore(j8,vw)}function E8(){Ef.forEach(e=>e())}function C8(e){return Ef.add(e),()=>Ef.delete(e)}const $8=[{key:"none",name:"(None)"},{key:"starfield",name:"Starfield Simulation"},{key:"mystify",name:"Mystify Your Mind"},{key:"pipes",name:"3D Pipes"}],A8=()=>{const[e,n]=g.useState(""),[o,i]=g.useState(1),{changeWallpaper:a,crt:u,toggleCrt:d,theme:p,setTheme:h,sssStyle:x,toggleSssStyle:y}=hn(),w=bw(),S=["#008080","#000080","#000000","#00FF00","#800000","#FF00FF"],A=O.img`
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,C=O.div`
        width: 80px;
        height: 80px;
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,v=(E,R)=>{n(E),i(R)},j=()=>e?o===2?{background:e}:{backgroundImage:`url('/${e}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:"blue"},k=O.div`
        display: flex;
        justify-content: end;
        margin-top: 20px;
    `;return l.jsxs("div",{style:{width:"800px",maxHeight:"70vh",overflowY:"scroll",overflowX:"hidden"},children:[l.jsxs("div",{style:{marginBottom:12,display:"flex",alignItems:"center",gap:8},children:[l.jsx("label",{htmlFor:"theme-select",style:{fontWeight:"bold"},children:"Theme / Appearance:"}),l.jsx("select",{id:"theme-select",value:p,onChange:E=>h(E.target.value),style:{fontFamily:"inherit",padding:2},children:Object.entries(Sf).map(([E,R])=>l.jsx("option",{value:E,children:R.name},E))})]}),l.jsx("div",{style:{marginBottom:12},children:l.jsx(ao,{checked:u,onChange:d,label:"CRT scanline effect"})}),l.jsxs("fieldset",{style:{marginBottom:16,border:"2px groove #c0c0c0",padding:"8px 12px"},children:[l.jsx("legend",{style:{fontWeight:"bold"},children:"Desktop Style"}),l.jsx(ao,{checked:x,onChange:y,label:"Serious Sam Style (Vaporwave)"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:6},children:"On: the signature vaporwave/retrowave desktop. Off: a clean, stock Windows 98 look."})]}),l.jsxs("fieldset",{style:{marginBottom:16,border:"2px groove #c0c0c0",padding:"8px 12px"},children:[l.jsx("legend",{style:{fontWeight:"bold"},children:"Screen Saver"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[l.jsx("select",{value:w.type,onChange:E=>Og({type:E.target.value}),style:{fontFamily:"inherit",padding:2},children:$8.map(E=>l.jsx("option",{value:E.key,children:E.name},E.key))}),l.jsx(Ke,{size:"sm",disabled:w.type==="none",onClick:()=>E8(),children:"Preview"}),l.jsxs("label",{style:{fontSize:13},children:["Wait:"," ",l.jsx("input",{type:"number",min:1,max:60,value:w.wait,onChange:E=>Og({wait:Math.max(1,Number(E.target.value)||1)}),style:{width:48,fontFamily:"inherit"}})," ","min"]})]})]}),l.jsx("p",{className:"text-xl pb-4 font-bold",children:"Choose the wallpaper"}),l.jsx("div",{className:"flex justify-center",children:l.jsx($y,{backgroundStyles:j()})}),l.jsxs("div",{className:"mt-8",children:[l.jsx("p",{className:"text-lg text-center",children:"Solid Colors"}),l.jsx("div",{className:"flex justify-between",children:S.map(E=>l.jsx(C,{style:{background:E},onClick:()=>v(E,2),className:"p-2 cursor-pointer hover"}))})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("p",{className:"text-lg text-center",children:"Windows XP"}),l.jsx("div",{className:"flex justify-between",children:Array.from({length:5},(E,R)=>R+1).map(E=>l.jsx(A,{onClick:()=>v(`wallpapers/xp-${E}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/xp-${E}.jpg`}))})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("p",{className:"text-lg text-center",children:"Windows 7"}),l.jsx("div",{className:"flex justify-between",children:Array.from({length:4},(E,R)=>R+1).map(E=>l.jsx(A,{onClick:()=>v(`wallpapers/7-${E}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/7-${E}.jpg`}))})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("p",{className:"text-lg text-center",children:"Vaporwave Style"}),l.jsx("div",{className:"flex justify-between",children:Array.from({length:7},(E,R)=>R+1).map(E=>l.jsx(A,{onClick:()=>v(`wallpapers/vw-${E}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/vw-${E}.jpg`}))})]}),l.jsxs("div",{className:"mt-8",children:[l.jsx("p",{className:"text-lg text-center",children:"Games"}),l.jsx("div",{className:"flex justify-between",children:Array.from({length:1},(E,R)=>R+1).map(E=>l.jsx(A,{onClick:()=>v(`wallpapers/games-${E}.png`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/games-${E}.png`}))})]}),l.jsx(k,{children:l.jsx(Ke,{onClick:()=>a({image:e,type:o}),disabled:e==="",children:"Apply"})})]})};let T8=1,gs=[],Ea=[];const Cf=new Set,Qa=()=>Cf.forEach(e=>e());function kw(e){return Cf.add(e),()=>Cf.delete(e)}function Mg(){return gs}function zg(){return Ea}function R8(e){const n={...e,id:T8++,ts:Date.now()};return gs=[...gs,n],Ea=[...Ea,n].slice(-50),Qa(),n.id}function Sd(e){gs=gs.filter(n=>n.id!==e),Qa()}function D8(){Ea=[],Qa()}const Sw="vortex.notify.winpopup";let jw=localStorage.getItem(Sw)==="classic"?"classic":"toast";function Ew(){return jw}function P8(e){jw=e,localStorage.setItem(Sw,e),Qa()}const Cw="vortex.eggs",_g=["konami","vortex","credits","about"],$f=new Set;function I8(){try{const e=JSON.parse(localStorage.getItem(Cw)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}let as=I8();function N8(){return as}function qa(e){as.includes(e)||(as=[...as,e],localStorage.setItem(Cw,JSON.stringify(as)),$f.forEach(n=>n()))}function L8(){return g.useSyncExternalStore(e=>($f.add(e),()=>$f.delete(e)),N8)}const Fg=new Set;function O8(e){return Fg.add(e),()=>Fg.delete(e)}const Af=new Set;function Tf(){Af.forEach(e=>e())}function M8(e){return Af.add(e),()=>Af.delete(e)}const jd=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function z8(e){let n=0;const o=i=>{const a=i.key.length===1?i.key.toLowerCase():i.key;a===jd[n]?(n++,n===jd.length&&(n=0,e())):n=a===jd[0]?1:0};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}const _8=Date.now(),Rf="vortex.bootcount";let Ca=0;function F8(){const e=parseInt(localStorage.getItem(Rf)??"0",10);Ca=(Number.isFinite(e)?e:0)+1,localStorage.setItem(Rf,String(Ca))}function B8(){if(Ca)return Ca;const e=parseInt(localStorage.getItem(Rf)??"0",10);return Number.isFinite(e)?e:0}function W8(){return Date.now()-_8}function H8(e){const n=Math.floor(e/1e3),o=n%60,i=Math.floor(n/60)%60,a=Math.floor(n/3600),u=d=>String(d).padStart(2,"0");return a>0?`${a}:${u(i)}:${u(o)}`:`${i}:${u(o)}`}const U8=mt`to { transform: rotate(360deg); }`,V8=mt`to { transform: rotate(-360deg); }`,K8=mt`
    0%, 100% { opacity: 0.75; transform: scale(0.94); }
    50% { opacity: 1; transform: scale(1.06); }
`,Ed=O.circle`
    fill: none;
    stroke-linecap: round;
    transform-origin: 60px 60px;
    ${({$spin:e,$dur:n,$rev:o})=>e&&xe`
            animation: ${o?V8:U8} ${n}s linear infinite;
        `}
`,Q8=O.circle`
    transform-origin: 60px 60px;
    ${({$spin:e})=>e&&xe`
            animation: ${K8} 2.4s ease-in-out infinite;
        `}
`,ei=({size:e=120,vapor:n=!0,spinning:o=!0})=>{const i=n?"vortex-vapor":"vortex-stock",a=n?["#ff2d95","#a14bff","#00e5d0"]:["#1084d0","#3fa9f5","#000080"],u=n?"#ff67c8":"#5cb9ff";return l.jsxs("svg",{viewBox:"0 0 120 120",width:e,height:e,role:"img","aria-label":"VortexOS",style:{filter:`drop-shadow(0 0 ${e/12}px ${a[0]}88)`,display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:`${i}-grad`,x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:a[0]}),l.jsx("stop",{offset:"50%",stopColor:a[1]}),l.jsx("stop",{offset:"100%",stopColor:a[2]})]}),l.jsxs("radialGradient",{id:`${i}-core`,children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"55%",stopColor:u}),l.jsx("stop",{offset:"100%",stopColor:a[0],stopOpacity:"0"})]})]}),l.jsx(Ed,{cx:"60",cy:"60",r:"52",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"200 127",$dur:7,$spin:o}),l.jsx(Ed,{cx:"60",cy:"60",r:"38",stroke:`url(#${i}-grad)`,strokeWidth:"7",strokeDasharray:"120 119",$dur:4.5,$rev:!0,$spin:o}),l.jsx(Ed,{cx:"60",cy:"60",r:"24",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"70 80",$dur:2.6,$spin:o}),l.jsx(Q8,{cx:"60",cy:"60",r:"13",fill:`url(#${i}-core)`,$spin:o})]})},q8=()=>{const[e,n]=g.useState(Math.round(bf()*100)),[o,i]=g.useState(kf()),[a,u]=g.useState(Ew()==="classic");return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Sound"}),l.jsx(ao,{checked:o,onChange:()=>{const d=!o;i(d),gw(d)},label:"Mute all sounds"}),l.jsxs("div",{style:{marginTop:14},children:[l.jsx("label",{children:"Volume"}),l.jsx("input",{type:"range",min:0,max:100,value:e,disabled:o,onChange:d=>{const p=Number(d.target.value);n(p),mw(p/100)},onMouseUp:()=>!o&&uo(),style:{width:220,display:"block",marginTop:4}}),l.jsxs("span",{children:[e,"%"]})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Notifications"}),l.jsx(ao,{checked:a,onChange:()=>{const d=!a;u(d),P8(d?"classic":"toast")},label:"Use classic WinPopup window for messages"}),l.jsx("p",{style:{fontSize:11,color:"#555",marginTop:6},children:"When off, incoming Net Send messages appear as toast notifications in the corner."})]})},G8=()=>{const[e,n]=g.useState(new Date);return g.useEffect(()=>{const o=setInterval(()=>n(new Date),1e3);return()=>clearInterval(o)},[]),l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Date/Time"}),l.jsx(vt,{variant:"well",style:{padding:10,fontSize:18,fontFamily:"monospace"},children:e.toLocaleString()}),l.jsx("p",{style:{marginTop:10,fontSize:12},children:"VortexOS follows your computer's clock."})]})},Y8=()=>{const e=lw(),n=L8(),o=g.useRef(0),i=()=>{o.current+=1,o.current>=5&&(o.current=0,qa("about"),Tf())},a=navigator,[,u]=g.useState(0);g.useEffect(()=>{const x=setInterval(()=>u(y=>y+1),1e3);return()=>clearInterval(x)},[]);const d=[["Uptime",H8(W8())],["Boots",String(B8())],["Apps",String(Ir.length)]],p=[["Processor",`${a.hardwareConcurrency??"?"} virtual cores`],["Memory",a.deviceMemory?`${a.deviceMemory} GB RAM`:"—"],["Display",`${window.screen.width} × ${window.screen.height}`],["Disk (OPFS)",e!=null&&e.supported?`${Tr(e.usage)} of ${Tr(e.quota)}`:"—"],["Kernel","VortexOS microkernel · syscall ABI"],["Filesystem","MemFS + OPFS · /dev /proc /bin /mnt"]],h=n.length===_g.length;return l.jsxs("div",{style:{padding:18,lineHeight:1.55,overflow:"auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14},children:[l.jsx("div",{onClick:i,style:{cursor:"pointer",userSelect:"none",flexShrink:0},title:"VortexOS",children:l.jsx(ei,{size:62,vapor:!0})}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:28,fontWeight:800,letterSpacing:1,margin:0,background:"linear-gradient(90deg, #d6177f, #7a2fd6, #0aa89a)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"},children:"VortexOS"}),l.jsx("p",{style:{margin:0,fontSize:13},children:"Version 2.0 · Experimental Edition"}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:13,color:"#a0117a",fontWeight:"bold"},children:"a creation by Serious Sam"})]})]}),l.jsx("div",{style:{display:"flex",gap:8,marginBottom:14},children:d.map(([x,y])=>l.jsxs("div",{style:{flex:1,textAlign:"center",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",padding:"7px 4px"},children:[l.jsx("div",{style:{fontSize:18,fontWeight:"bold",color:"#000080",fontVariantNumeric:"tabular-nums"},children:y}),l.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:.5},children:x})]},x))}),l.jsxs("p",{style:{fontSize:12.5,margin:"0 0 12px"},children:["I didn't theme a desktop — I ",l.jsx("b",{children:"built an operating system"}),". Under the nostalgia is a real microkernel with a syscall ABI, a virtual filesystem, a process scheduler, a command shell, a window manager and multi-user networking. Every window, every app, every sound — hand-made, from scratch, in a browser tab. No emulator. No clone. It just ",l.jsx("i",{children:"looks"})," like 1995."]}),l.jsx("table",{style:{fontSize:13,borderCollapse:"collapse",marginBottom:6},children:l.jsx("tbody",{children:p.map(([x,y])=>l.jsxs("tr",{children:[l.jsxs("td",{style:{fontWeight:"bold",paddingRight:16,verticalAlign:"top",whiteSpace:"nowrap"},children:[x,":"]}),l.jsx("td",{children:y})]},x))})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:12},children:[l.jsx("button",{onClick:Tf,style:{padding:"5px 16px",fontSize:13,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #000000 #000000 #ffffff",cursor:"pointer"},children:"🎬 Roll the Credits"}),l.jsxs("span",{style:{fontSize:11,color:h?"#008000":"#888",fontWeight:h?"bold":"normal"},children:[h?"🌀 ":"","Easter eggs found: ",n.length," / ",_g.length]})]})]})},Bg=[{name:"Display",icon:"/monitor.png",component:A8},{name:"Sounds",icon:"/sound.svg",component:q8},{name:"Date/Time",icon:"/clock.svg",component:G8},{name:"About Vortex",icon:"/w95.png",component:Y8}],X8=()=>{const[e,n]=g.useState(null);return l.jsxs(bt,{$minW:560,$minH:380,children:[l.jsxs(pn,{children:[l.jsx(ze,{label:"File",children:l.jsx(Ae,{$disabled:!e,onMouseDown:o=>{o.preventDefault(),n(null)},children:"Close Applet"})}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Control Panel — VortexOS"})})]}),l.jsxs(ai,{children:[l.jsx(ot,{onClick:()=>n(null),disabled:!e,children:"◀ Back"}),l.jsx(jn,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:e?e.name:"Control Panel"})]}),l.jsx(fn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:e?l.jsx(e.component,{}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap",padding:10},children:Bg.map(o=>l.jsxs("div",{onDoubleClick:()=>n(o),title:"Double-click to open",style:{cursor:"pointer",width:96,padding:12,display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("img",{src:o.icon,alt:o.name,style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:o.name})]},o.name))})})}),l.jsxs(Tt,{children:[l.jsx(Oe,{$flex:1,children:e?e.name:"Control Panel"}),l.jsxs(Oe,{children:[Bg.length," object(s)"]})]})]})},J8=new Set(["|","<",";"]);function Z8(e){const n=[];let o=0;const i=e.length;for(;o<i;){const a=e[o];if(a===" "||a==="	"){o++;continue}if(a===">"){e[o+1]===">"?(n.push({type:"op",value:">>"}),o+=2):(n.push({type:"op",value:">"}),o++);continue}if(J8.has(a)){n.push({type:"op",value:a}),o++;continue}let u="";for(;o<i;){const d=e[o];if(d===" "||d==="	"||d==="|"||d==="<"||d===">"||d===";")break;if(d==='"'||d==="'"){const p=d;for(o++;o<i&&e[o]!==p;)u+=e[o],o++;o++;continue}if(d==="\\"&&o+1<i){u+=e[o+1],o+=2;continue}u+=d,o++}n.push({type:"word",value:u})}return n}class Vl extends Error{}function e$(e){const n=Z8(e),o=[];let i=[],a=null,u=!1;const d=()=>{a&&i.push(a),a=null},p=()=>{if(u)throw new Vl("syntax error near `|`");d(),i.length&&o.push(i),i=[]};for(let h=0;h<n.length;h++){const x=n[h];if(x.type==="word"){a||(a={argv:[]}),a.argv.push(x.value),u=!1;continue}if(x.value===";"){p();continue}if(x.value==="|"){if(!a||a.argv.length===0)throw new Vl("syntax error near `|`");d(),u=!0;continue}const y=n[h+1];if(!y||y.type!=="word")throw new Vl(`syntax error near \`${x.value}\``);a||(a={argv:[]}),x.value==="<"?a.stdinFile=y.value:(a.stdoutFile=y.value,a.append=x.value===">>"),h++}p();for(const h of o)for(const x of h)if(x.argv.length===0)throw new Vl("syntax error: empty command");return o}function At(e,n){return n.startsWith("/")?Pr(n):We(e,n)}function en(e){const n=new Set,o=[];for(const i of e.slice(1))if(i.length>1&&i[0]==="-"&&i[1]!=="-")for(const a of i.slice(1))n.add(a);else o.push(i);return{flags:n,operands:o}}const Vn=e=>(e==null?void 0:e.code)??(e==null?void 0:e.message)??"error",t$=async({argv:e,out:n})=>(n(e.slice(1).join(" ")+`
`),0),n$=async({cwd:e,out:n})=>(n(e+`
`),0),r$=async({env:e,out:n})=>(n((e.USER??"user")+`
`),0),o$=async({argv:e,out:n})=>(n(e.includes("-a")?`VortexOS 2.0 vortex web microkernel
`:`VortexOS
`),0),i$=async({out:e})=>(e(new Date().toString()+`
`),0),s$=String.raw`
         .-""""-.
       .'        '.        V O R T E X   O S
      /   .--.     \       ----------------------------
     |   /    \     |      Version 2.0 · Experimental Edition
     |   \    /     |      a creation by Serious Sam
      \   '--'  o  /
       '.        .'        "No emulator. No clone."
         '-....-'           a real microkernel, in a browser.
`,l$=async({out:e})=>(qa("vortex"),e(s$+`
`),e(`Try 'credits' to roll the credits. The Konami code does something too...
`),0),a$=async({out:e})=>(qa("credits"),Tf(),e(`Rolling the credits... 🌀
`),0),c$=async({out:e})=>(e(`Nothing happens.
`),0),u$=async({env:e,out:n})=>{for(const[o,i]of Object.entries(e))n(`${o}=${i}
`);return 0},d$=async({argv:e,cwd:n,sys:o,out:i,err:a})=>{const{flags:u,operands:d}=en(e),p=d.length?d:["."];let h=0;for(const x of p){const y=At(n,x);try{const w=await o.stat(y),S=w.type==="dir"?await o.readdir(y):[Xt(y)];if(u.has("l"))for(const A of S){const C=w.type==="dir"?We(y,A):y,v=await o.stat(C),j=v.type==="dir"?"d":v.type==="dev"?"c":"-";i(`${j}  ${String(v.size).padStart(6)}  ${A}
`)}else S.length&&i(S.join(`
`)+`
`)}catch(w){a(`ls: cannot access '${x}': ${Vn(w)}
`),h=1}}return h},f$=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=en(e);if(d.length===0)return a(o),0;let p=0;for(const h of d)try{a(await i.readTextFile(At(n,h)))}catch(x){u(`cat: ${h}: ${Vn(x)}
`),p=1}return p},p$=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=en(e);let d=0;for(const p of u){const h=At(n,p);try{if(a.has("p")){let x="";for(const y of h.split("/").filter(Boolean))x+="/"+y,await o.stat(x).then(()=>!0).catch(()=>!1)||await o.mkdir(x)}else await o.mkdir(h)}catch(x){i(`mkdir: ${p}: ${Vn(x)}
`),d=1}}return d},h$=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=en(e);let u=0;for(const d of a){const p=At(n,d);try{await o.stat(p).then(()=>!0).catch(()=>!1)||await o.writeTextFile(p,"")}catch(h){i(`touch: ${d}: ${Vn(h)}
`),u=1}}return u};async function $w(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await $w(e,We(n,i));await e.unlink(n)}const m$=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=en(e);let d=0;for(const p of u){const h=At(n,p);try{a.has("r")?await $w(o,h):await o.unlink(h)}catch(x){i(`rm: ${p}: ${Vn(x)}
`),d=1}}return d},Aw=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=en(e);if(a.length<2)return i(`cp: usage: cp <src> <dst>
`),1;const u=At(n,a[0]);let d=At(n,a[1]);try{return await o.stat(d).then(p=>p.type==="dir").catch(()=>!1)&&(d=We(d,Xt(u))),await o.writeFile(d,await o.readFile(u)),0}catch(p){return i(`cp: ${Vn(p)}
`),1}},g$=async e=>{const n=await Aw(e);if(n!==0)return n;const{operands:o}=en(e.argv);return await e.sys.unlink(At(e.cwd,o[0])).catch(()=>{}),0},x$=async({sys:e,out:n})=>{const o=await e.ps();n(`PID       NAME                 STATE     PRIO
`);for(const i of o)n(`${i.pid.slice(0,8)}  ${i.name.padEnd(20).slice(0,20)}  ${i.state.padEnd(8)}  ${i.priority}
`);return 0},y$=async({argv:e,sys:n,out:o,err:i})=>{const{operands:a}=en(e);if(a.length===0)return i(`kill: usage: kill <pid>
`),1;const u=await n.ps();let d=0;for(const p of a){const h=u.find(x=>x.pid===p||x.pid.startsWith(p));if(!h){i(`kill: ${p}: no such process
`),d=1;continue}await n.kill(h.pid),o(`killed ${h.pid.slice(0,8)} (${h.name})
`)}return d},w$=async({argv:e,out:n,err:o})=>{const{operands:i}=en(e);let a=0;for(const u of i)u in kp||Dw.includes(u)?n(`/bin/${u}
`):(o(`${u} not found
`),a=1);return a},v$=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{flags:d,operands:p}=en(e);if(p.length===0)return u(`grep: usage: grep <pattern> [file...]
`),1;const[h,...x]=p,y=d.has("i")?h.toLowerCase():h,w=C=>(d.has("i")?C.toLowerCase():C).includes(y),S=[];if(x.length===0)S.push(o);else for(const C of x)try{S.push(await i.readTextFile(At(n,C)))}catch(v){u(`grep: ${C}: ${Vn(v)}
`)}let A=!1;for(const C of S)for(const v of C.split(`
`))v!==""&&w(v)&&(a(v+`
`),A=!0);return A?0:1},b$=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=en(e),p=x=>({lines:x===""?0:x.replace(/\n$/,"").split(`
`).length,words:x.split(/\s+/).filter(Boolean).length,chars:x.length});if(d.length===0){const x=p(o);return a(`${x.lines} ${x.words} ${x.chars}
`),0}let h=0;for(const x of d)try{const y=p(await i.readTextFile(At(n,x)));a(`${y.lines} ${y.words} ${y.chars} ${x}
`)}catch(y){u(`wc: ${x}: ${Vn(y)}
`),h=1}return h};function Tw(e){const n=e.split(`
`);return n[n.length-1]===""&&n.pop(),n}function Rw(e,n){const o=e.indexOf("-n"),i=o>=0?Number(e[o+1]):NaN;return Number.isFinite(i)?i:n}const k$=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=Rw(e,10),p=en(e).operands.filter(x=>!/^\d+$/.test(x)),h=x=>Tw(x).slice(0,d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const x of p)h(await i.readTextFile(At(n,x)));return 0}catch(x){return u(`head: ${Vn(x)}
`),1}},S$=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=Rw(e,10),p=en(e).operands.filter(x=>!/^\d+$/.test(x)),h=x=>Tw(x).slice(-d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const x of p)h(await i.readTextFile(At(n,x)));return 0}catch(x){return u(`tail: ${Vn(x)}
`),1}},j$=async({out:e})=>(e(`VortexOS shell — available commands:
`),e([...Object.keys(kp),...Dw].sort().join("  ")+`
`),e(`Pipes (|), redirects (> >> <) and ; are supported.
`),0),Dw=["cd","clear","export"],kp={echo:t$,pwd:n$,whoami:r$,uname:o$,date:i$,env:u$,ls:d$,cat:f$,mkdir:p$,touch:h$,rm:m$,cp:Aw,mv:g$,ps:x$,kill:y$,which:w$,grep:v$,wc:b$,head:k$,tail:S$,help:j$,vortex:l$,credits:a$,xyzzy:c$};class Pw{constructor(n,o="/home/user",i={}){Ie(this,"cwd");Ie(this,"env");this.sys=n,this.cwd=o,this.env={HOME:"/home/user",USER:"user",PATH:"/bin",...i}}prompt(){const n=this.cwd===this.env.HOME?"~":this.cwd;return`${this.env.USER}@vortex:${n}$ `}async run(n){let o="",i=!1,a=0;const u=p=>{o+=p};let d;try{d=e$(n)}catch(p){return{output:`sh: ${p.message}
`,clear:!1,code:2}}for(const p of d){const h=await this.runPipeline(p,u);a=h.code,h.clear&&(i=!0,o="")}return{output:o,clear:i,code:a}}expand(n){let o=n;return o==="~"?o=this.env.HOME:o.startsWith("~/")&&(o=this.env.HOME+o.slice(1)),o=o.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g,(i,a)=>this.env[a]??""),o=o.replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g,(i,a)=>this.env[a]??""),o}expandCommand(n){return{argv:n.argv.map(o=>this.expand(o)),stdinFile:n.stdinFile?this.expand(n.stdinFile):void 0,stdoutFile:n.stdoutFile?this.expand(n.stdoutFile):void 0,append:n.append}}async runPipeline(n,o){const i=n.map(d=>this.expandCommand(d));if(i.length===1){const d=i[0].argv,p=d[0],h=d.length===1?/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/.exec(p):null;if(h)return this.env[h[1]]=h[2],{code:0};if(p==="cd")return{code:await this.cd(d,o)};if(p==="clear")return{code:0,clear:!0};if(p==="export")return{code:this.export(d)};if(p==="sh"||p==="source"||p===".")return{code:await this.runScript(d[1],o)}}let a="",u=0;for(const d of i){const p=d.argv[0],h=kp[p];let x=a;if(d.stdinFile)try{x=await this.sys.readTextFile(At(this.cwd,d.stdinFile))}catch(w){return o(`sh: ${d.stdinFile}: ${w.code??"error"}
`),{code:1}}if(!h)return o(`sh: ${p}: command not found
`),{code:127};let y="";u=await h({argv:d.argv,stdin:x,cwd:this.cwd,env:this.env,sys:this.sys,out:w=>y+=w,err:o}),a=await this.applyStdout(d,y,o)}return o(a),{code:u}}async applyStdout(n,o,i){if(!n.stdoutFile)return o;const a=At(this.cwd,n.stdoutFile);try{const u=n.append?await this.sys.readTextFile(a).catch(()=>""):"";await this.sys.writeTextFile(a,u+o)}catch(u){i(`sh: ${n.stdoutFile}: ${u.code??"error"}
`)}return""}async cd(n,o){const i=n[1]?At(this.cwd,n[1]):this.env.HOME;try{return(await this.sys.stat(i)).type!=="dir"?(o(`cd: not a directory: ${n[1]}
`),1):(this.cwd=i,0)}catch{return o(`cd: ${n[1]}: No such file or directory
`),1}}export(n){for(const o of n.slice(1)){const i=o.indexOf("=");i>0&&(this.env[o.slice(0,i)]=o.slice(i+1))}return 0}async runScript(n,o){if(!n)return o(`sh: usage: sh <script>
`),2;let i;try{i=await this.sys.readTextFile(At(this.cwd,n))}catch(u){return o(`sh: ${n}: ${u.code??"not found"}
`),1}let a=0;for(const u of i.split(`
`)){const d=u.trim();if(!d||d.startsWith("#"))continue;const p=await this.run(d);p.output&&o(p.output),a=p.code}return a}}const E$=["VortexOS [Version 2.0]","Type 'help' for a list of commands.",""],C$=()=>{const e=Zt(),n=g.useRef(null);n.current||(n.current=new Pw(e));const o=n.current,[i,a]=g.useState(E$),[u,d]=g.useState(""),[p,h]=g.useState([]),[x,y]=g.useState(-1),[w,S]=g.useState(!1),A=g.useRef(null),C=g.useRef(null);g.useEffect(()=>{var k,E;(k=A.current)==null||k.scrollTo(0,A.current.scrollHeight),(E=C.current)==null||E.focus()},[i]);const v=async()=>{const k=u;a(R=>[...R,o.prompt()+k]),d(""),y(-1),k.trim()&&h(R=>[...R,k]),S(!0);const E=await o.run(k);if(S(!1),E.clear){a([]);return}E.output&&a(R=>[...R,...E.output.replace(/\n$/,"").split(`
`)])},j=k=>{if(k.key==="Enter")k.preventDefault(),w||v();else if(k.key==="ArrowUp"){if(k.preventDefault(),!p.length)return;const E=x===-1?p.length-1:Math.max(0,x-1);y(E),d(p[E])}else if(k.key==="ArrowDown"){if(k.preventDefault(),x===-1)return;const E=x+1;E>=p.length?(y(-1),d("")):(y(E),d(p[E]))}};return l.jsxs("div",{ref:A,onClick:()=>{var k;return(k=C.current)==null?void 0:k.focus()},style:{width:"100%",height:"100%",minWidth:600,minHeight:360,boxSizing:"border-box",overflowY:"auto",background:"#000",color:"#c0c0c0",fontFamily:"'Lucida Console', 'Courier New', monospace",fontSize:13,lineHeight:1.35,padding:8,cursor:"text"},children:[i.map((k,E)=>l.jsx("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:k||" "},E)),l.jsxs("div",{style:{display:"flex",whiteSpace:"pre"},children:[l.jsx("span",{children:o.prompt()}),l.jsx("input",{ref:C,value:u,onChange:k=>d(k.target.value),onKeyDown:j,spellCheck:!1,autoComplete:"off",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"inherit",fontSize:"inherit",padding:0}})]})]})},Wg=(e,n,o)=>{switch(o){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n;case"x^y":return Math.pow(e,n);case"Mod":return n===0?NaN:e%n;case"And":return(e&n)>>>0;case"Or":return(e|n)>>>0;case"Xor":return(e^n)>>>0;case"Lsh":return e<<n>>>0;case"Rsh":return e>>n>>>0}},$$=()=>{const[e,n]=g.useState("0"),[o,i]=g.useState(null),[a,u]=g.useState(null),[d,p]=g.useState(!0),[h,x]=g.useState(0),[y,w]=g.useState("standard"),[S,A]=g.useState(10),[C,v]=g.useState(!0),j=g.useRef(null);g.useEffect(()=>{var L;return(L=j.current)==null?void 0:L.focus()},[]);const k=()=>y==="programmer"?parseInt(e,S)||0:parseFloat(e)||0,E=L=>{if(!Number.isFinite(L))return n("Error");if(y==="programmer"){const P=Math.trunc(L)>>>0;n(P.toString(S).toUpperCase())}else n(String(Math.round(L*1e10)/1e10))},R=L=>{if(y!=="programmer")return!0;const P=parseInt(L,16);return!isNaN(P)&&P<S},N=L=>{L==="."&&y==="programmer"||R(L)&&(d?(n(L==="."?"0.":L),p(!1)):L==="."?e.includes(".")||n(e+"."):n(e==="0"?L:e+L))},z=L=>{const P=k();if(o!==null&&a&&!d){const ne=Wg(o,P,a);i(ne),E(ne)}else i(P);u(L),p(!0)},K=()=>{o===null||!a||(E(Wg(o,k(),a)),i(null),u(null),p(!0))},Y=()=>{n("0"),i(null),u(null),p(!0)},Z=()=>{n("0"),p(!0)},se=()=>{n(L=>L.length>1?L.slice(0,-1):"0")},ge=L=>C?L*Math.PI/180:L,ie=L=>{E(L(k())),p(!0)},ue=L=>{if(L=Math.trunc(L),L<0)return NaN;let P=1;for(let ne=2;ne<=L;ne++)P*=ne;return P},me=L=>{const P=k();A(L),n((Math.trunc(P)>>>0).toString(L).toUpperCase()),p(!0)},B=()=>x(0),$=()=>{E(h),p(!0)},T=()=>x(k()),H=()=>x(L=>L+k()),W=()=>x(L=>L-k()),ee=L=>{const P=L.key;if(/^[0-9]$/.test(P))return N(P);if(y==="programmer"&&/^[a-fA-F]$/.test(P))return N(P.toUpperCase());if(P===".")return N(".");if(P==="+")return z("+");if(P==="-")return z("-");if(P==="*")return z("×");if(P==="/")return L.preventDefault(),z("÷");if(P==="Enter"||P==="=")return L.preventDefault(),K();if(P==="Backspace")return se();if(P==="Escape")return Y()},F=({label:L,onClick:P,accent:ne,kind:pe,w:he=44})=>{const be=pe??(ne?"op":void 0),_e=be==="op"?"#000080":be==="clr"?"#a00000":be==="mem"?"#006000":"#000";return l.jsx(Ke,{onClick:P,onMouseDown:He=>He.preventDefault(),primary:be==="eq",style:{width:he,height:34,fontSize:14,padding:0,color:be==="eq"?void 0:_e,fontWeight:be&&be!=="mem"?"bold":"normal"},children:L})},M=l.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[["MC",B],["MR",$],["MS",T],["M+",H],["M-",W]].map(([L,P])=>l.jsx(Ke,{onClick:P,onMouseDown:ne=>ne.preventDefault(),style:{flex:1,minWidth:0,height:30,fontSize:13,padding:0,color:"#006000"},children:L},L))}),X=l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 44px)",gap:4},children:[l.jsx(F,{label:"Back",onClick:se,kind:"clr"}),l.jsx(F,{label:"CE",onClick:Z,kind:"clr"}),l.jsx(F,{label:"C",onClick:Y,kind:"clr"}),l.jsx(F,{label:"±",onClick:()=>ie(L=>-L)}),l.jsx(F,{label:"√",onClick:()=>ie(Math.sqrt)}),l.jsx(F,{label:"7",onClick:()=>N("7")}),l.jsx(F,{label:"8",onClick:()=>N("8")}),l.jsx(F,{label:"9",onClick:()=>N("9")}),l.jsx(F,{label:"÷",onClick:()=>z("÷"),accent:!0}),l.jsx(F,{label:"%",onClick:()=>ie(L=>L/100)}),l.jsx(F,{label:"4",onClick:()=>N("4")}),l.jsx(F,{label:"5",onClick:()=>N("5")}),l.jsx(F,{label:"6",onClick:()=>N("6")}),l.jsx(F,{label:"×",onClick:()=>z("×"),accent:!0}),l.jsx(F,{label:"1/x",onClick:()=>ie(L=>1/L)}),l.jsx(F,{label:"1",onClick:()=>N("1")}),l.jsx(F,{label:"2",onClick:()=>N("2")}),l.jsx(F,{label:"3",onClick:()=>N("3")}),l.jsx(F,{label:"-",onClick:()=>z("-"),accent:!0}),l.jsx(F,{label:"=",onClick:K,kind:"eq"}),l.jsx(F,{label:"0",onClick:()=>N("0"),w:92}),l.jsx(F,{label:".",onClick:()=>N(".")}),l.jsx(F,{label:"+",onClick:()=>z("+"),accent:!0})]}),ce=l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:C,onChange:()=>v(!0)})," Deg"]}),l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:!C,onChange:()=>v(!1)})," Rad"]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(F,{label:"sin",onClick:()=>ie(L=>Math.sin(ge(L)))}),l.jsx(F,{label:"cos",onClick:()=>ie(L=>Math.cos(ge(L)))}),l.jsx(F,{label:"tan",onClick:()=>ie(L=>Math.tan(ge(L)))}),l.jsx(F,{label:"x²",onClick:()=>ie(L=>L*L)}),l.jsx(F,{label:"x^y",onClick:()=>z("x^y"),accent:!0}),l.jsx(F,{label:"C",onClick:Y,kind:"clr"}),l.jsx(F,{label:"log",onClick:()=>ie(Math.log10)}),l.jsx(F,{label:"ln",onClick:()=>ie(Math.log)}),l.jsx(F,{label:"n!",onClick:()=>ie(ue)}),l.jsx(F,{label:"√",onClick:()=>ie(Math.sqrt)}),l.jsx(F,{label:"1/x",onClick:()=>ie(L=>1/L)}),l.jsx(F,{label:"Back",onClick:se,kind:"clr"}),l.jsx(F,{label:"π",onClick:()=>{E(Math.PI),p(!0)}}),l.jsx(F,{label:"e",onClick:()=>{E(Math.E),p(!0)}}),l.jsx(F,{label:"±",onClick:()=>ie(L=>-L)}),l.jsx(F,{label:"(",onClick:()=>{}}),l.jsx(F,{label:")",onClick:()=>{}}),l.jsx(F,{label:"%",onClick:()=>ie(L=>L/100)}),l.jsx(F,{label:"7",onClick:()=>N("7")}),l.jsx(F,{label:"8",onClick:()=>N("8")}),l.jsx(F,{label:"9",onClick:()=>N("9")}),l.jsx(F,{label:"÷",onClick:()=>z("÷"),accent:!0}),l.jsx(F,{label:"×",onClick:()=>z("×"),accent:!0}),l.jsx(F,{label:"=",onClick:K,kind:"eq"}),l.jsx(F,{label:"4",onClick:()=>N("4")}),l.jsx(F,{label:"5",onClick:()=>N("5")}),l.jsx(F,{label:"6",onClick:()=>N("6")}),l.jsx(F,{label:"-",onClick:()=>z("-"),accent:!0}),l.jsx(F,{label:"+",onClick:()=>z("+"),accent:!0}),l.jsx(F,{label:".",onClick:()=>N(".")}),l.jsx(F,{label:"1",onClick:()=>N("1")}),l.jsx(F,{label:"2",onClick:()=>N("2")}),l.jsx(F,{label:"3",onClick:()=>N("3")}),l.jsx(F,{label:"0",onClick:()=>N("0")}),l.jsx(F,{label:"0",onClick:()=>N("0")}),l.jsx(F,{label:"00",onClick:()=>{N("0"),N("0")}})]})]}),fe=["A","B","C","D","E","F"],Q=l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[["Hex",16],["Dec",10],["Oct",8],["Bin",2]].map(([L,P])=>l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:S===P,onChange:()=>me(P)})," ",L]},P))}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(F,{label:"And",onClick:()=>z("And"),accent:!0}),l.jsx(F,{label:"Or",onClick:()=>z("Or"),accent:!0}),l.jsx(F,{label:"Xor",onClick:()=>z("Xor"),accent:!0}),l.jsx(F,{label:"Not",onClick:()=>ie(L=>~Math.trunc(L)>>>0),accent:!0}),l.jsx(F,{label:"Lsh",onClick:()=>z("Lsh"),accent:!0}),l.jsx(F,{label:"Rsh",onClick:()=>z("Rsh"),accent:!0}),l.jsx(F,{label:"Mod",onClick:()=>z("Mod"),accent:!0}),l.jsx(F,{label:"C",onClick:Y,kind:"clr"}),l.jsx(F,{label:"CE",onClick:Z,kind:"clr"}),l.jsx(F,{label:"Back",onClick:se,kind:"clr"}),l.jsx(F,{label:"±",onClick:()=>ie(L=>-Math.trunc(L))}),l.jsx(F,{label:"=",onClick:K,kind:"eq"}),fe.slice(0,3).map(L=>l.jsx(F,{label:L,onClick:()=>N(L)},L)),l.jsx(F,{label:"7",onClick:()=>N("7")}),l.jsx(F,{label:"8",onClick:()=>N("8")}),l.jsx(F,{label:"9",onClick:()=>N("9")}),fe.slice(3).map(L=>l.jsx(F,{label:L,onClick:()=>N(L)},L)),l.jsx(F,{label:"4",onClick:()=>N("4")}),l.jsx(F,{label:"5",onClick:()=>N("5")}),l.jsx(F,{label:"6",onClick:()=>N("6")}),l.jsx(F,{label:"÷",onClick:()=>z("÷"),accent:!0}),l.jsx(F,{label:"×",onClick:()=>z("×"),accent:!0}),l.jsx(F,{label:"-",onClick:()=>z("-"),accent:!0}),l.jsx(F,{label:"1",onClick:()=>N("1")}),l.jsx(F,{label:"2",onClick:()=>N("2")}),l.jsx(F,{label:"3",onClick:()=>N("3")}),l.jsx(F,{label:"+",onClick:()=>z("+"),accent:!0}),l.jsx(F,{label:"0",onClick:()=>N("0"),w:92})]})]}),te=y==="standard"?252:300,le=y==="programmer"?{16:"HEX",10:"DEC",8:"OCT",2:"BIN"}[S]:y==="scientific"?C?"DEG":"RAD":"";return l.jsxs("div",{ref:j,tabIndex:0,onKeyDown:ee,style:{outline:"none",width:te},children:[l.jsxs(pn,{children:[l.jsx(ze,{label:"View",children:["standard","scientific","programmer"].map(L=>l.jsxs(Ae,{onMouseDown:P=>{P.preventDefault(),w(L),Y(),L!=="programmer"&&A(10)},style:{textTransform:"capitalize"},children:[y===L?"● ":"○ ",L]},L))}),l.jsx(ze,{label:"Edit",children:l.jsx(Ae,{onMouseDown:L=>{var P;L.preventDefault(),(P=navigator.clipboard)==null||P.writeText(e).catch(()=>{})},children:"Copy"})}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Calculator — VortexOS"})})]}),l.jsxs("div",{style:{padding:8},children:[l.jsxs(vt,{variant:"well",style:{width:"100%",boxSizing:"border-box",display:"block",padding:"4px 8px",marginBottom:8,overflow:"hidden",background:"#cfe3cf"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#3a5a3a",height:14,fontFamily:"monospace"},children:[l.jsx("span",{children:h!==0?"M":""}),l.jsx("span",{children:[a??"",le].filter(Boolean).join("  ")})]}),l.jsx("div",{style:{textAlign:"right",fontFamily:"'Courier New', monospace",fontWeight:"bold",fontSize:28,color:"#0c2a0c",lineHeight:1.1,letterSpacing:1,overflow:"hidden",textOverflow:"ellipsis"},children:e})]}),M,y==="standard"&&X,y==="scientific"&&ce,y==="programmer"&&Q]})]})};function Iw(e,n){return function(){return e.apply(n,arguments)}}const{toString:A$}=Object.prototype,{getPrototypeOf:Sp}=Object,Ga=(e=>n=>{const o=A$.call(n);return e[o]||(e[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),An=e=>(e=e.toLowerCase(),n=>Ga(n)===e),Ya=e=>n=>typeof n===e,{isArray:ci}=Array,xs=Ya("undefined");function T$(e){return e!==null&&!xs(e)&&e.constructor!==null&&!xs(e.constructor)&&Jt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Nw=An("ArrayBuffer");function R$(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Nw(e.buffer),n}const D$=Ya("string"),Jt=Ya("function"),Lw=Ya("number"),Xa=e=>e!==null&&typeof e=="object",P$=e=>e===!0||e===!1,aa=e=>{if(Ga(e)!=="object")return!1;const n=Sp(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},I$=An("Date"),N$=An("File"),L$=An("Blob"),O$=An("FileList"),M$=e=>Xa(e)&&Jt(e.pipe),z$=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||Jt(e.append)&&((n=Ga(e))==="formdata"||n==="object"&&Jt(e.toString)&&e.toString()==="[object FormData]"))},_$=An("URLSearchParams"),[F$,B$,W$,H$]=["ReadableStream","Request","Response","Headers"].map(An),U$=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $s(e,n,{allOwnKeys:o=!1}={}){if(e===null||typeof e>"u")return;let i,a;if(typeof e!="object"&&(e=[e]),ci(e))for(i=0,a=e.length;i<a;i++)n.call(null,e[i],i,e);else{const u=o?Object.getOwnPropertyNames(e):Object.keys(e),d=u.length;let p;for(i=0;i<d;i++)p=u[i],n.call(null,e[p],p,e)}}function Ow(e,n){n=n.toLowerCase();const o=Object.keys(e);let i=o.length,a;for(;i-- >0;)if(a=o[i],n===a.toLowerCase())return a;return null}const no=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Mw=e=>!xs(e)&&e!==no;function Df(){const{caseless:e}=Mw(this)&&this||{},n={},o=(i,a)=>{const u=e&&Ow(n,a)||a;aa(n[u])&&aa(i)?n[u]=Df(n[u],i):aa(i)?n[u]=Df({},i):ci(i)?n[u]=i.slice():n[u]=i};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&$s(arguments[i],o);return n}const V$=(e,n,o,{allOwnKeys:i}={})=>($s(n,(a,u)=>{o&&Jt(a)?e[u]=Iw(a,o):e[u]=a},{allOwnKeys:i}),e),K$=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Q$=(e,n,o,i)=>{e.prototype=Object.create(n.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),o&&Object.assign(e.prototype,o)},q$=(e,n,o,i)=>{let a,u,d;const p={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),u=a.length;u-- >0;)d=a[u],(!i||i(d,e,n))&&!p[d]&&(n[d]=e[d],p[d]=!0);e=o!==!1&&Sp(e)}while(e&&(!o||o(e,n))&&e!==Object.prototype);return n},G$=(e,n,o)=>{e=String(e),(o===void 0||o>e.length)&&(o=e.length),o-=n.length;const i=e.indexOf(n,o);return i!==-1&&i===o},Y$=e=>{if(!e)return null;if(ci(e))return e;let n=e.length;if(!Lw(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=e[n];return o},X$=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Sp(Uint8Array)),J$=(e,n)=>{const i=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=i.next())&&!a.done;){const u=a.value;n.call(e,u[0],u[1])}},Z$=(e,n)=>{let o;const i=[];for(;(o=e.exec(n))!==null;)i.push(o);return i},eA=An("HTMLFormElement"),tA=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,i,a){return i.toUpperCase()+a}),Hg=(({hasOwnProperty:e})=>(n,o)=>e.call(n,o))(Object.prototype),nA=An("RegExp"),zw=(e,n)=>{const o=Object.getOwnPropertyDescriptors(e),i={};$s(o,(a,u)=>{let d;(d=n(a,u,e))!==!1&&(i[u]=d||a)}),Object.defineProperties(e,i)},rA=e=>{zw(e,(n,o)=>{if(Jt(e)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const i=e[o];if(Jt(i)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},oA=(e,n)=>{const o={},i=a=>{a.forEach(u=>{o[u]=!0})};return ci(e)?i(e):i(String(e).split(n)),o},iA=()=>{},sA=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n,Cd="abcdefghijklmnopqrstuvwxyz",Ug="0123456789",_w={DIGIT:Ug,ALPHA:Cd,ALPHA_DIGIT:Cd+Cd.toUpperCase()+Ug},lA=(e=16,n=_w.ALPHA_DIGIT)=>{let o="";const{length:i}=n;for(;e--;)o+=n[Math.random()*i|0];return o};function aA(e){return!!(e&&Jt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const cA=e=>{const n=new Array(10),o=(i,a)=>{if(Xa(i)){if(n.indexOf(i)>=0)return;if(!("toJSON"in i)){n[a]=i;const u=ci(i)?[]:{};return $s(i,(d,p)=>{const h=o(d,a+1);!xs(h)&&(u[p]=h)}),n[a]=void 0,u}}return i};return o(e,0)},uA=An("AsyncFunction"),dA=e=>e&&(Xa(e)||Jt(e))&&Jt(e.then)&&Jt(e.catch),Fw=((e,n)=>e?setImmediate:n?((o,i)=>(no.addEventListener("message",({source:a,data:u})=>{a===no&&u===o&&i.length&&i.shift()()},!1),a=>{i.push(a),no.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",Jt(no.postMessage)),fA=typeof queueMicrotask<"u"?queueMicrotask.bind(no):typeof process<"u"&&process.nextTick||Fw,J={isArray:ci,isArrayBuffer:Nw,isBuffer:T$,isFormData:z$,isArrayBufferView:R$,isString:D$,isNumber:Lw,isBoolean:P$,isObject:Xa,isPlainObject:aa,isReadableStream:F$,isRequest:B$,isResponse:W$,isHeaders:H$,isUndefined:xs,isDate:I$,isFile:N$,isBlob:L$,isRegExp:nA,isFunction:Jt,isStream:M$,isURLSearchParams:_$,isTypedArray:X$,isFileList:O$,forEach:$s,merge:Df,extend:V$,trim:U$,stripBOM:K$,inherits:Q$,toFlatObject:q$,kindOf:Ga,kindOfTest:An,endsWith:G$,toArray:Y$,forEachEntry:J$,matchAll:Z$,isHTMLForm:eA,hasOwnProperty:Hg,hasOwnProp:Hg,reduceDescriptors:zw,freezeMethods:rA,toObjectSet:oA,toCamelCase:tA,noop:iA,toFiniteNumber:sA,findKey:Ow,global:no,isContextDefined:Mw,ALPHABET:_w,generateString:lA,isSpecCompliantForm:aA,toJSONObject:cA,isAsyncFn:uA,isThenable:dA,setImmediate:Fw,asap:fA};function Te(e,n,o,i,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),i&&(this.request=i),a&&(this.response=a,this.status=a.status?a.status:null)}J.inherits(Te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:J.toJSONObject(this.config),code:this.code,status:this.status}}});const Bw=Te.prototype,Ww={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ww[e]={value:e}});Object.defineProperties(Te,Ww);Object.defineProperty(Bw,"isAxiosError",{value:!0});Te.from=(e,n,o,i,a,u)=>{const d=Object.create(Bw);return J.toFlatObject(e,d,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),Te.call(d,e.message,n,o,i,a),d.cause=e,d.name=e.name,u&&Object.assign(d,u),d};const pA=null;function Pf(e){return J.isPlainObject(e)||J.isArray(e)}function Hw(e){return J.endsWith(e,"[]")?e.slice(0,-2):e}function Vg(e,n,o){return e?e.concat(n).map(function(a,u){return a=Hw(a),!o&&u?"["+a+"]":a}).join(o?".":""):n}function hA(e){return J.isArray(e)&&!e.some(Pf)}const mA=J.toFlatObject(J,{},null,function(n){return/^is[A-Z]/.test(n)});function Ja(e,n,o){if(!J.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,o=J.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,j){return!J.isUndefined(j[v])});const i=o.metaTokens,a=o.visitor||y,u=o.dots,d=o.indexes,h=(o.Blob||typeof Blob<"u"&&Blob)&&J.isSpecCompliantForm(n);if(!J.isFunction(a))throw new TypeError("visitor must be a function");function x(C){if(C===null)return"";if(J.isDate(C))return C.toISOString();if(!h&&J.isBlob(C))throw new Te("Blob is not supported. Use a Buffer instead.");return J.isArrayBuffer(C)||J.isTypedArray(C)?h&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function y(C,v,j){let k=C;if(C&&!j&&typeof C=="object"){if(J.endsWith(v,"{}"))v=i?v:v.slice(0,-2),C=JSON.stringify(C);else if(J.isArray(C)&&hA(C)||(J.isFileList(C)||J.endsWith(v,"[]"))&&(k=J.toArray(C)))return v=Hw(v),k.forEach(function(R,N){!(J.isUndefined(R)||R===null)&&n.append(d===!0?Vg([v],N,u):d===null?v:v+"[]",x(R))}),!1}return Pf(C)?!0:(n.append(Vg(j,v,u),x(C)),!1)}const w=[],S=Object.assign(mA,{defaultVisitor:y,convertValue:x,isVisitable:Pf});function A(C,v){if(!J.isUndefined(C)){if(w.indexOf(C)!==-1)throw Error("Circular reference detected in "+v.join("."));w.push(C),J.forEach(C,function(k,E){(!(J.isUndefined(k)||k===null)&&a.call(n,k,J.isString(E)?E.trim():E,v,S))===!0&&A(k,v?v.concat(E):[E])}),w.pop()}}if(!J.isObject(e))throw new TypeError("data must be an object");return A(e),n}function Kg(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return n[i]})}function jp(e,n){this._pairs=[],e&&Ja(e,this,n)}const Uw=jp.prototype;Uw.append=function(n,o){this._pairs.push([n,o])};Uw.toString=function(n){const o=n?function(i){return n.call(this,i,Kg)}:Kg;return this._pairs.map(function(a){return o(a[0])+"="+o(a[1])},"").join("&")};function gA(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Vw(e,n,o){if(!n)return e;const i=o&&o.encode||gA;J.isFunction(o)&&(o={serialize:o});const a=o&&o.serialize;let u;if(a?u=a(n,o):u=J.isURLSearchParams(n)?n.toString():new jp(n,o).toString(i),u){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class Qg{constructor(){this.handlers=[]}use(n,o,i){return this.handlers.push({fulfilled:n,rejected:o,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){J.forEach(this.handlers,function(i){i!==null&&n(i)})}}const Kw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},xA=typeof URLSearchParams<"u"?URLSearchParams:jp,yA=typeof FormData<"u"?FormData:null,wA=typeof Blob<"u"?Blob:null,vA={isBrowser:!0,classes:{URLSearchParams:xA,FormData:yA,Blob:wA},protocols:["http","https","file","blob","url","data"]},Ep=typeof window<"u"&&typeof document<"u",If=typeof navigator=="object"&&navigator||void 0,bA=Ep&&(!If||["ReactNative","NativeScript","NS"].indexOf(If.product)<0),kA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",SA=Ep&&window.location.href||"http://localhost",jA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ep,hasStandardBrowserEnv:bA,hasStandardBrowserWebWorkerEnv:kA,navigator:If,origin:SA},Symbol.toStringTag,{value:"Module"})),$t={...jA,...vA};function EA(e,n){return Ja(e,new $t.classes.URLSearchParams,Object.assign({visitor:function(o,i,a,u){return $t.isNode&&J.isBuffer(o)?(this.append(i,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function CA(e){return J.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function $A(e){const n={},o=Object.keys(e);let i;const a=o.length;let u;for(i=0;i<a;i++)u=o[i],n[u]=e[u];return n}function Qw(e){function n(o,i,a,u){let d=o[u++];if(d==="__proto__")return!0;const p=Number.isFinite(+d),h=u>=o.length;return d=!d&&J.isArray(a)?a.length:d,h?(J.hasOwnProp(a,d)?a[d]=[a[d],i]:a[d]=i,!p):((!a[d]||!J.isObject(a[d]))&&(a[d]=[]),n(o,i,a[d],u)&&J.isArray(a[d])&&(a[d]=$A(a[d])),!p)}if(J.isFormData(e)&&J.isFunction(e.entries)){const o={};return J.forEachEntry(e,(i,a)=>{n(CA(i),a,o,0)}),o}return null}function AA(e,n,o){if(J.isString(e))try{return(n||JSON.parse)(e),J.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(o||JSON.stringify)(e)}const As={transitional:Kw,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const i=o.getContentType()||"",a=i.indexOf("application/json")>-1,u=J.isObject(n);if(u&&J.isHTMLForm(n)&&(n=new FormData(n)),J.isFormData(n))return a?JSON.stringify(Qw(n)):n;if(J.isArrayBuffer(n)||J.isBuffer(n)||J.isStream(n)||J.isFile(n)||J.isBlob(n)||J.isReadableStream(n))return n;if(J.isArrayBufferView(n))return n.buffer;if(J.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let p;if(u){if(i.indexOf("application/x-www-form-urlencoded")>-1)return EA(n,this.formSerializer).toString();if((p=J.isFileList(n))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Ja(p?{"files[]":n}:n,h&&new h,this.formSerializer)}}return u||a?(o.setContentType("application/json",!1),AA(n)):n}],transformResponse:[function(n){const o=this.transitional||As.transitional,i=o&&o.forcedJSONParsing,a=this.responseType==="json";if(J.isResponse(n)||J.isReadableStream(n))return n;if(n&&J.isString(n)&&(i&&!this.responseType||a)){const d=!(o&&o.silentJSONParsing)&&a;try{return JSON.parse(n)}catch(p){if(d)throw p.name==="SyntaxError"?Te.from(p,Te.ERR_BAD_RESPONSE,this,null,this.response):p}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:$t.classes.FormData,Blob:$t.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};J.forEach(["delete","get","head","post","put","patch"],e=>{As.headers[e]={}});const TA=J.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),RA=e=>{const n={};let o,i,a;return e&&e.split(`
`).forEach(function(d){a=d.indexOf(":"),o=d.substring(0,a).trim().toLowerCase(),i=d.substring(a+1).trim(),!(!o||n[o]&&TA[o])&&(o==="set-cookie"?n[o]?n[o].push(i):n[o]=[i]:n[o]=n[o]?n[o]+", "+i:i)}),n},qg=Symbol("internals");function ns(e){return e&&String(e).trim().toLowerCase()}function ca(e){return e===!1||e==null?e:J.isArray(e)?e.map(ca):String(e)}function DA(e){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=o.exec(e);)n[i[1]]=i[2];return n}const PA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function $d(e,n,o,i,a){if(J.isFunction(i))return i.call(this,n,o);if(a&&(n=o),!!J.isString(n)){if(J.isString(i))return n.indexOf(i)!==-1;if(J.isRegExp(i))return i.test(n)}}function IA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,i)=>o.toUpperCase()+i)}function NA(e,n){const o=J.toCamelCase(" "+n);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+o,{value:function(a,u,d){return this[i].call(this,n,a,u,d)},configurable:!0})})}class Bt{constructor(n){n&&this.set(n)}set(n,o,i){const a=this;function u(p,h,x){const y=ns(h);if(!y)throw new Error("header name must be a non-empty string");const w=J.findKey(a,y);(!w||a[w]===void 0||x===!0||x===void 0&&a[w]!==!1)&&(a[w||h]=ca(p))}const d=(p,h)=>J.forEach(p,(x,y)=>u(x,y,h));if(J.isPlainObject(n)||n instanceof this.constructor)d(n,o);else if(J.isString(n)&&(n=n.trim())&&!PA(n))d(RA(n),o);else if(J.isHeaders(n))for(const[p,h]of n.entries())u(h,p,i);else n!=null&&u(o,n,i);return this}get(n,o){if(n=ns(n),n){const i=J.findKey(this,n);if(i){const a=this[i];if(!o)return a;if(o===!0)return DA(a);if(J.isFunction(o))return o.call(this,a,i);if(J.isRegExp(o))return o.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=ns(n),n){const i=J.findKey(this,n);return!!(i&&this[i]!==void 0&&(!o||$d(this,this[i],i,o)))}return!1}delete(n,o){const i=this;let a=!1;function u(d){if(d=ns(d),d){const p=J.findKey(i,d);p&&(!o||$d(i,i[p],p,o))&&(delete i[p],a=!0)}}return J.isArray(n)?n.forEach(u):u(n),a}clear(n){const o=Object.keys(this);let i=o.length,a=!1;for(;i--;){const u=o[i];(!n||$d(this,this[u],u,n,!0))&&(delete this[u],a=!0)}return a}normalize(n){const o=this,i={};return J.forEach(this,(a,u)=>{const d=J.findKey(i,u);if(d){o[d]=ca(a),delete o[u];return}const p=n?IA(u):String(u).trim();p!==u&&delete o[u],o[p]=ca(a),i[p]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return J.forEach(this,(i,a)=>{i!=null&&i!==!1&&(o[a]=n&&J.isArray(i)?i.join(", "):i)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const i=new this(n);return o.forEach(a=>i.set(a)),i}static accessor(n){const i=(this[qg]=this[qg]={accessors:{}}).accessors,a=this.prototype;function u(d){const p=ns(d);i[p]||(NA(a,d),i[p]=!0)}return J.isArray(n)?n.forEach(u):u(n),this}}Bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);J.reduceDescriptors(Bt.prototype,({value:e},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(i){this[o]=i}}});J.freezeMethods(Bt);function Ad(e,n){const o=this||As,i=n||o,a=Bt.from(i.headers);let u=i.data;return J.forEach(e,function(p){u=p.call(o,u,a.normalize(),n?n.status:void 0)}),a.normalize(),u}function qw(e){return!!(e&&e.__CANCEL__)}function ui(e,n,o){Te.call(this,e??"canceled",Te.ERR_CANCELED,n,o),this.name="CanceledError"}J.inherits(ui,Te,{__CANCEL__:!0});function Gw(e,n,o){const i=o.config.validateStatus;!o.status||!i||i(o.status)?e(o):n(new Te("Request failed with status code "+o.status,[Te.ERR_BAD_REQUEST,Te.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function LA(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function OA(e,n){e=e||10;const o=new Array(e),i=new Array(e);let a=0,u=0,d;return n=n!==void 0?n:1e3,function(h){const x=Date.now(),y=i[u];d||(d=x),o[a]=h,i[a]=x;let w=u,S=0;for(;w!==a;)S+=o[w++],w=w%e;if(a=(a+1)%e,a===u&&(u=(u+1)%e),x-d<n)return;const A=y&&x-y;return A?Math.round(S*1e3/A):void 0}}function MA(e,n){let o=0,i=1e3/n,a,u;const d=(x,y=Date.now())=>{o=y,a=null,u&&(clearTimeout(u),u=null),e.apply(null,x)};return[(...x)=>{const y=Date.now(),w=y-o;w>=i?d(x,y):(a=x,u||(u=setTimeout(()=>{u=null,d(a)},i-w)))},()=>a&&d(a)]}const $a=(e,n,o=3)=>{let i=0;const a=OA(50,250);return MA(u=>{const d=u.loaded,p=u.lengthComputable?u.total:void 0,h=d-i,x=a(h),y=d<=p;i=d;const w={loaded:d,total:p,progress:p?d/p:void 0,bytes:h,rate:x||void 0,estimated:x&&p&&y?(p-d)/x:void 0,event:u,lengthComputable:p!=null,[n?"download":"upload"]:!0};e(w)},o)},Gg=(e,n)=>{const o=e!=null;return[i=>n[0]({lengthComputable:o,total:e,loaded:i}),n[1]]},Yg=e=>(...n)=>J.asap(()=>e(...n)),zA=$t.hasStandardBrowserEnv?((e,n)=>o=>(o=new URL(o,$t.origin),e.protocol===o.protocol&&e.host===o.host&&(n||e.port===o.port)))(new URL($t.origin),$t.navigator&&/(msie|trident)/i.test($t.navigator.userAgent)):()=>!0,_A=$t.hasStandardBrowserEnv?{write(e,n,o,i,a,u){const d=[e+"="+encodeURIComponent(n)];J.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),J.isString(i)&&d.push("path="+i),J.isString(a)&&d.push("domain="+a),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function FA(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function BA(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function Yw(e,n){return e&&!FA(n)?BA(e,n):n}const Xg=e=>e instanceof Bt?{...e}:e;function fo(e,n){n=n||{};const o={};function i(x,y,w,S){return J.isPlainObject(x)&&J.isPlainObject(y)?J.merge.call({caseless:S},x,y):J.isPlainObject(y)?J.merge({},y):J.isArray(y)?y.slice():y}function a(x,y,w,S){if(J.isUndefined(y)){if(!J.isUndefined(x))return i(void 0,x,w,S)}else return i(x,y,w,S)}function u(x,y){if(!J.isUndefined(y))return i(void 0,y)}function d(x,y){if(J.isUndefined(y)){if(!J.isUndefined(x))return i(void 0,x)}else return i(void 0,y)}function p(x,y,w){if(w in n)return i(x,y);if(w in e)return i(void 0,x)}const h={url:u,method:u,data:u,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:p,headers:(x,y,w)=>a(Xg(x),Xg(y),w,!0)};return J.forEach(Object.keys(Object.assign({},e,n)),function(y){const w=h[y]||a,S=w(e[y],n[y],y);J.isUndefined(S)&&w!==p||(o[y]=S)}),o}const Xw=e=>{const n=fo({},e);let{data:o,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:u,headers:d,auth:p}=n;n.headers=d=Bt.from(d),n.url=Vw(Yw(n.baseURL,n.url),e.params,e.paramsSerializer),p&&d.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(J.isFormData(o)){if($t.hasStandardBrowserEnv||$t.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((h=d.getContentType())!==!1){const[x,...y]=h?h.split(";").map(w=>w.trim()).filter(Boolean):[];d.setContentType([x||"multipart/form-data",...y].join("; "))}}if($t.hasStandardBrowserEnv&&(i&&J.isFunction(i)&&(i=i(n)),i||i!==!1&&zA(n.url))){const x=a&&u&&_A.read(u);x&&d.set(a,x)}return n},WA=typeof XMLHttpRequest<"u",HA=WA&&function(e){return new Promise(function(o,i){const a=Xw(e);let u=a.data;const d=Bt.from(a.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:x}=a,y,w,S,A,C;function v(){A&&A(),C&&C(),a.cancelToken&&a.cancelToken.unsubscribe(y),a.signal&&a.signal.removeEventListener("abort",y)}let j=new XMLHttpRequest;j.open(a.method.toUpperCase(),a.url,!0),j.timeout=a.timeout;function k(){if(!j)return;const R=Bt.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),z={data:!p||p==="text"||p==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:R,config:e,request:j};Gw(function(Y){o(Y),v()},function(Y){i(Y),v()},z),j=null}"onloadend"in j?j.onloadend=k:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(k)},j.onabort=function(){j&&(i(new Te("Request aborted",Te.ECONNABORTED,e,j)),j=null)},j.onerror=function(){i(new Te("Network Error",Te.ERR_NETWORK,e,j)),j=null},j.ontimeout=function(){let N=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const z=a.transitional||Kw;a.timeoutErrorMessage&&(N=a.timeoutErrorMessage),i(new Te(N,z.clarifyTimeoutError?Te.ETIMEDOUT:Te.ECONNABORTED,e,j)),j=null},u===void 0&&d.setContentType(null),"setRequestHeader"in j&&J.forEach(d.toJSON(),function(N,z){j.setRequestHeader(z,N)}),J.isUndefined(a.withCredentials)||(j.withCredentials=!!a.withCredentials),p&&p!=="json"&&(j.responseType=a.responseType),x&&([S,C]=$a(x,!0),j.addEventListener("progress",S)),h&&j.upload&&([w,A]=$a(h),j.upload.addEventListener("progress",w),j.upload.addEventListener("loadend",A)),(a.cancelToken||a.signal)&&(y=R=>{j&&(i(!R||R.type?new ui(null,e,j):R),j.abort(),j=null)},a.cancelToken&&a.cancelToken.subscribe(y),a.signal&&(a.signal.aborted?y():a.signal.addEventListener("abort",y)));const E=LA(a.url);if(E&&$t.protocols.indexOf(E)===-1){i(new Te("Unsupported protocol "+E+":",Te.ERR_BAD_REQUEST,e));return}j.send(u||null)})},UA=(e,n)=>{const{length:o}=e=e?e.filter(Boolean):[];if(n||o){let i=new AbortController,a;const u=function(x){if(!a){a=!0,p();const y=x instanceof Error?x:this.reason;i.abort(y instanceof Te?y:new ui(y instanceof Error?y.message:y))}};let d=n&&setTimeout(()=>{d=null,u(new Te(`timeout ${n} of ms exceeded`,Te.ETIMEDOUT))},n);const p=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(x=>{x.unsubscribe?x.unsubscribe(u):x.removeEventListener("abort",u)}),e=null)};e.forEach(x=>x.addEventListener("abort",u));const{signal:h}=i;return h.unsubscribe=()=>J.asap(p),h}},VA=function*(e,n){let o=e.byteLength;if(o<n){yield e;return}let i=0,a;for(;i<o;)a=i+n,yield e.slice(i,a),i=a},KA=async function*(e,n){for await(const o of QA(e))yield*VA(o,n)},QA=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:o,value:i}=await n.read();if(o)break;yield i}}finally{await n.cancel()}},Jg=(e,n,o,i)=>{const a=KA(e,n);let u=0,d,p=h=>{d||(d=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:x,value:y}=await a.next();if(x){p(),h.close();return}let w=y.byteLength;if(o){let S=u+=w;o(S)}h.enqueue(new Uint8Array(y))}catch(x){throw p(x),x}},cancel(h){return p(h),a.return()}},{highWaterMark:2})},Za=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Jw=Za&&typeof ReadableStream=="function",qA=Za&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Zw=(e,...n)=>{try{return!!e(...n)}catch{return!1}},GA=Jw&&Zw(()=>{let e=!1;const n=new Request($t.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),Zg=64*1024,Nf=Jw&&Zw(()=>J.isReadableStream(new Response("").body)),Aa={stream:Nf&&(e=>e.body)};Za&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Aa[n]&&(Aa[n]=J.isFunction(e[n])?o=>o[n]():(o,i)=>{throw new Te(`Response type '${n}' is not supported`,Te.ERR_NOT_SUPPORT,i)})})})(new Response);const YA=async e=>{if(e==null)return 0;if(J.isBlob(e))return e.size;if(J.isSpecCompliantForm(e))return(await new Request($t.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(J.isArrayBufferView(e)||J.isArrayBuffer(e))return e.byteLength;if(J.isURLSearchParams(e)&&(e=e+""),J.isString(e))return(await qA(e)).byteLength},XA=async(e,n)=>{const o=J.toFiniteNumber(e.getContentLength());return o??YA(n)},JA=Za&&(async e=>{let{url:n,method:o,data:i,signal:a,cancelToken:u,timeout:d,onDownloadProgress:p,onUploadProgress:h,responseType:x,headers:y,withCredentials:w="same-origin",fetchOptions:S}=Xw(e);x=x?(x+"").toLowerCase():"text";let A=UA([a,u&&u.toAbortSignal()],d),C;const v=A&&A.unsubscribe&&(()=>{A.unsubscribe()});let j;try{if(h&&GA&&o!=="get"&&o!=="head"&&(j=await XA(y,i))!==0){let z=new Request(n,{method:"POST",body:i,duplex:"half"}),K;if(J.isFormData(i)&&(K=z.headers.get("content-type"))&&y.setContentType(K),z.body){const[Y,Z]=Gg(j,$a(Yg(h)));i=Jg(z.body,Zg,Y,Z)}}J.isString(w)||(w=w?"include":"omit");const k="credentials"in Request.prototype;C=new Request(n,{...S,signal:A,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:k?w:void 0});let E=await fetch(C);const R=Nf&&(x==="stream"||x==="response");if(Nf&&(p||R&&v)){const z={};["status","statusText","headers"].forEach(se=>{z[se]=E[se]});const K=J.toFiniteNumber(E.headers.get("content-length")),[Y,Z]=p&&Gg(K,$a(Yg(p),!0))||[];E=new Response(Jg(E.body,Zg,Y,()=>{Z&&Z(),v&&v()}),z)}x=x||"text";let N=await Aa[J.findKey(Aa,x)||"text"](E,e);return!R&&v&&v(),await new Promise((z,K)=>{Gw(z,K,{data:N,headers:Bt.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:C})})}catch(k){throw v&&v(),k&&k.name==="TypeError"&&/fetch/i.test(k.message)?Object.assign(new Te("Network Error",Te.ERR_NETWORK,e,C),{cause:k.cause||k}):Te.from(k,k&&k.code,e,C)}}),Lf={http:pA,xhr:HA,fetch:JA};J.forEach(Lf,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const ex=e=>`- ${e}`,ZA=e=>J.isFunction(e)||e===null||e===!1,ev={getAdapter:e=>{e=J.isArray(e)?e:[e];const{length:n}=e;let o,i;const a={};for(let u=0;u<n;u++){o=e[u];let d;if(i=o,!ZA(o)&&(i=Lf[(d=String(o)).toLowerCase()],i===void 0))throw new Te(`Unknown adapter '${d}'`);if(i)break;a[d||"#"+u]=i}if(!i){const u=Object.entries(a).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let d=n?u.length>1?`since :
`+u.map(ex).join(`
`):" "+ex(u[0]):"as no adapter specified";throw new Te("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return i},adapters:Lf};function Td(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ui(null,e)}function tx(e){return Td(e),e.headers=Bt.from(e.headers),e.data=Ad.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),ev.getAdapter(e.adapter||As.adapter)(e).then(function(i){return Td(e),i.data=Ad.call(e,e.transformResponse,i),i.headers=Bt.from(i.headers),i},function(i){return qw(i)||(Td(e),i&&i.response&&(i.response.data=Ad.call(e,e.transformResponse,i.response),i.response.headers=Bt.from(i.response.headers))),Promise.reject(i)})}const tv="1.7.9",ec={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{ec[e]=function(i){return typeof i===e||"a"+(n<1?"n ":" ")+e}});const nx={};ec.transitional=function(n,o,i){function a(u,d){return"[Axios v"+tv+"] Transitional option '"+u+"'"+d+(i?". "+i:"")}return(u,d,p)=>{if(n===!1)throw new Te(a(d," has been removed"+(o?" in "+o:"")),Te.ERR_DEPRECATED);return o&&!nx[d]&&(nx[d]=!0,console.warn(a(d," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(u,d,p):!0}};ec.spelling=function(n){return(o,i)=>(console.warn(`${i} is likely a misspelling of ${n}`),!0)};function eT(e,n,o){if(typeof e!="object")throw new Te("options must be an object",Te.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let a=i.length;for(;a-- >0;){const u=i[a],d=n[u];if(d){const p=e[u],h=p===void 0||d(p,u,e);if(h!==!0)throw new Te("option "+u+" must be "+h,Te.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new Te("Unknown option "+u,Te.ERR_BAD_OPTION)}}const ua={assertOptions:eT,validators:ec},Mn=ua.validators;class oo{constructor(n){this.defaults=n,this.interceptors={request:new Qg,response:new Qg}}async request(n,o){try{return await this._request(n,o)}catch(i){if(i instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{i.stack?u&&!String(i.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+u):i.stack=u}catch{}}throw i}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=fo(this.defaults,o);const{transitional:i,paramsSerializer:a,headers:u}=o;i!==void 0&&ua.assertOptions(i,{silentJSONParsing:Mn.transitional(Mn.boolean),forcedJSONParsing:Mn.transitional(Mn.boolean),clarifyTimeoutError:Mn.transitional(Mn.boolean)},!1),a!=null&&(J.isFunction(a)?o.paramsSerializer={serialize:a}:ua.assertOptions(a,{encode:Mn.function,serialize:Mn.function},!0)),ua.assertOptions(o,{baseUrl:Mn.spelling("baseURL"),withXsrfToken:Mn.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let d=u&&J.merge(u.common,u[o.method]);u&&J.forEach(["delete","get","head","post","put","patch","common"],C=>{delete u[C]}),o.headers=Bt.concat(d,u);const p=[];let h=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(o)===!1||(h=h&&v.synchronous,p.unshift(v.fulfilled,v.rejected))});const x=[];this.interceptors.response.forEach(function(v){x.push(v.fulfilled,v.rejected)});let y,w=0,S;if(!h){const C=[tx.bind(this),void 0];for(C.unshift.apply(C,p),C.push.apply(C,x),S=C.length,y=Promise.resolve(o);w<S;)y=y.then(C[w++],C[w++]);return y}S=p.length;let A=o;for(w=0;w<S;){const C=p[w++],v=p[w++];try{A=C(A)}catch(j){v.call(this,j);break}}try{y=tx.call(this,A)}catch(C){return Promise.reject(C)}for(w=0,S=x.length;w<S;)y=y.then(x[w++],x[w++]);return y}getUri(n){n=fo(this.defaults,n);const o=Yw(n.baseURL,n.url);return Vw(o,n.params,n.paramsSerializer)}}J.forEach(["delete","get","head","options"],function(n){oo.prototype[n]=function(o,i){return this.request(fo(i||{},{method:n,url:o,data:(i||{}).data}))}});J.forEach(["post","put","patch"],function(n){function o(i){return function(u,d,p){return this.request(fo(p||{},{method:n,headers:i?{"Content-Type":"multipart/form-data"}:{},url:u,data:d}))}}oo.prototype[n]=o(),oo.prototype[n+"Form"]=o(!0)});class Cp{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const i=this;this.promise.then(a=>{if(!i._listeners)return;let u=i._listeners.length;for(;u-- >0;)i._listeners[u](a);i._listeners=null}),this.promise.then=a=>{let u;const d=new Promise(p=>{i.subscribe(p),u=p}).then(a);return d.cancel=function(){i.unsubscribe(u)},d},n(function(u,d,p){i.reason||(i.reason=new ui(u,d,p),o(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=i=>{n.abort(i)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new Cp(function(a){n=a}),cancel:n}}}function tT(e){return function(o){return e.apply(null,o)}}function nT(e){return J.isObject(e)&&e.isAxiosError===!0}const Of={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Of).forEach(([e,n])=>{Of[n]=e});function nv(e){const n=new oo(e),o=Iw(oo.prototype.request,n);return J.extend(o,oo.prototype,n,{allOwnKeys:!0}),J.extend(o,n,null,{allOwnKeys:!0}),o.create=function(a){return nv(fo(e,a))},o}const Ue=nv(As);Ue.Axios=oo;Ue.CanceledError=ui;Ue.CancelToken=Cp;Ue.isCancel=qw;Ue.VERSION=tv;Ue.toFormData=Ja;Ue.AxiosError=Te;Ue.Cancel=Ue.CanceledError;Ue.all=function(n){return Promise.all(n)};Ue.spread=tT;Ue.isAxiosError=nT;Ue.mergeConfig=fo;Ue.AxiosHeaders=Bt;Ue.formToJSON=e=>Qw(J.isHTMLForm(e)?new FormData(e):e);Ue.getAdapter=ev.getAdapter;Ue.HttpStatusCode=Of;Ue.default=Ue;const rv="http://localhost:8082";async function tc(e,n){try{await Ue.post(`${rv}/scores`,{game:e,value:n})}catch{}}async function rT(e,n="desc"){try{const o=await Ue.get(`${rv}/scores`,{params:{game:e,order:n}});return Array.isArray(o.data)?o.data:[]}catch{return[]}}const nc=({game:e,order:n="desc",format:o=d=>String(d),title:i="High Scores",refreshKey:a,width:u=180})=>{const[d,p]=g.useState([]),[h,x]=g.useState(!1);return g.useEffect(()=>{let y=!0;return rT(e,n).then(w=>{y&&(p(w),x(!0))}),()=>{y=!1}},[e,n,a]),l.jsxs("div",{style:{width:u},children:[l.jsxs("div",{style:{fontWeight:"bold",fontSize:12,marginBottom:4,color:"#000080"},children:["🏆 ",i]}),l.jsx(vt,{variant:"well",style:{background:"#fff",padding:4,minHeight:60},children:h?d.length===0?l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"No scores yet — be the first!"}):d.map((y,w)=>l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,padding:"1px 4px",background:w===0?"#fff7cc":"transparent"},children:[l.jsxs("span",{style:{color:"#555",width:18},children:[w+1,"."]}),l.jsx("span",{style:{fontFamily:"monospace",fontWeight:w===0?"bold":"normal"},children:o(y.value)}),l.jsx("span",{style:{color:"#999",fontSize:10,marginLeft:"auto",paddingLeft:8},children:new Date(y.createdAt).toLocaleDateString()})]},y.id)):l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"Loading…"})})]})},Kl={beginner:{rows:9,cols:9,mines:10,label:"Beginner"},intermediate:{rows:16,cols:16,mines:40,label:"Intermediate"},expert:{rows:16,cols:30,mines:99,label:"Expert"}},oT=["","#0000ff","#008000","#ff0000","#000080","#800000","#008080","#000000","#808080"],rx=(e,n)=>Array.from({length:e},()=>Array.from({length:n},()=>({mine:!1,revealed:!1,flagged:!1,adj:0})));function iT(e,n,o){const i=e.length,a=e[0].length;let u=0;for(;u<n;){const d=Math.floor(Math.random()*i),p=Math.floor(Math.random()*a);e[d][p].mine||o.has(`${d},${p}`)||(e[d][p].mine=!0,u++)}for(let d=0;d<i;d++)for(let p=0;p<a;p++){if(e[d][p].mine)continue;let h=0;for(let x=-1;x<=1;x++)for(let y=-1;y<=1;y++){const w=d+x,S=p+y;w>=0&&w<i&&S>=0&&S<a&&e[w][S].mine&&h++}e[d][p].adj=h}}const sT=()=>{const[e,n]=g.useState("beginner"),o=Kl[e],[i,a]=g.useState(()=>rx(o.rows,o.cols)),[u,d]=g.useState("playing"),[p,h]=g.useState(!1),[x,y]=g.useState(0),[w,S]=g.useState(0),A=g.useRef(0),C=(z=e)=>{const K=Kl[z];n(z),a(rx(K.rows,K.cols)),d("playing"),h(!1),y(0),A.current=0};g.useEffect(()=>{if(u!=="playing"||!p)return;const z=setInterval(()=>y(K=>(A.current=K+1,K+1)),1e3);return()=>clearInterval(z)},[u,p]);const v=o.mines-i.flat().filter(z=>z.flagged).length,j=(z,K)=>{u==="playing"&&a(Y=>{const Z=Y.map(ue=>ue.map(me=>({...me})));if(!p){const ue=new Set;for(let me=-1;me<=1;me++)for(let B=-1;B<=1;B++)ue.add(`${z+me},${K+B}`);iT(Z,o.mines,ue),h(!0)}const se=Z[z][K];if(se.revealed||se.flagged)return Y;if(se.mine)return Z.forEach(ue=>ue.forEach(me=>me.mine&&(me.revealed=!0))),d("lost"),Z;const ge=[[z,K]];for(;ge.length;){const[ue,me]=ge.pop(),B=Z[ue][me];if(!(B.revealed||B.flagged)&&(B.revealed=!0,B.adj===0))for(let $=-1;$<=1;$++)for(let T=-1;T<=1;T++){const H=ue+$,W=me+T;H>=0&&H<Z.length&&W>=0&&W<Z[0].length&&!Z[H][W].mine&&ge.push([H,W])}}return Z.flat().filter(ue=>ue.revealed&&!ue.mine).length===o.rows*o.cols-o.mines&&(d("won"),uo(),tc(`minesweeper:${e}`,A.current).then(()=>S(ue=>ue+1))),Z})},k=(z,K,Y)=>{z.preventDefault(),u==="playing"&&a(Z=>Z.map((se,ge)=>se.map((ie,ue)=>ge===K&&ue===Y&&!ie.revealed?{...ie,flagged:!ie.flagged}:ie)))},E=u==="won"?"😎":u==="lost"?"😵":"🙂",R=z=>({border:"2px solid",borderColor:z?"#808080 #fff #fff #808080":"#fff #808080 #808080 #fff"}),N=z=>l.jsx("span",{style:{background:"#000",color:"#f00",fontFamily:"monospace",fontSize:20,padding:"0 4px",minWidth:42,textAlign:"center",letterSpacing:1},children:String(Math.max(0,Math.min(999,z))).padStart(3,"0")});return l.jsxs(bt,{$minW:260,$minH:300,children:[l.jsxs(pn,{children:[l.jsxs(ze,{label:"Game",children:[l.jsxs(Ae,{onMouseDown:z=>{z.preventDefault(),C()},children:["New",l.jsx("span",{children:"F2"})]}),l.jsx(js,{}),Object.keys(Kl).map(z=>l.jsxs(Ae,{onMouseDown:K=>{K.preventDefault(),C(z)},children:[e===z?"● ":"○ ",Kl[z].label]},z))]}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Minesweeper — VortexOS"})})]}),l.jsxs(fn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{style:{background:"#c0c0c0",userSelect:"none"},children:[l.jsxs("div",{style:{...R(!0),display:"flex",justifyContent:"space-between",alignItems:"center",padding:6,marginBottom:8},children:[N(v),l.jsx("button",{onClick:()=>C(),style:{...R(!1),width:32,height:32,fontSize:18,cursor:"pointer",background:"#c0c0c0"},children:E}),N(x)]}),l.jsx("div",{style:{...R(!0),display:"inline-block",padding:3},children:i.map((z,K)=>l.jsx("div",{style:{display:"flex"},children:z.map((Y,Z)=>l.jsx("div",{onClick:()=>j(K,Z),onContextMenu:se=>k(se,K,Z),style:{width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:13,cursor:u==="playing"?"pointer":"default",background:Y.revealed&&Y.mine?"#f00":"#c0c0c0",color:oT[Y.adj]||"#000",...Y.revealed?{border:"1px solid #808080"}:R(!1)},children:Y.flagged?"🚩":Y.revealed?Y.mine?"💣":Y.adj||"":""},Z))},K))})]}),l.jsx(nc,{game:`minesweeper:${e}`,order:"asc",format:z=>`${z}s`,title:`${o.label} Best`,width:130,refreshKey:w})]}),l.jsxs(Tt,{children:[l.jsx(Oe,{$flex:1,children:o.label}),l.jsx(Oe,{children:u==="won"?"You won! 😎":u==="lost"?"BOOM 💥":p?"Playing…":"Click to start"}),l.jsxs(Oe,{children:[x,"s"]})]})]})},Rd=["♠","♥","♦","♣"],Dd=e=>e===1||e===2,lT=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],Pd=56,rs=78,aT=20;function ox(){const e=[];for(let a=0;a<4;a=a+1)for(let u=1;u<=13;u++)e.push({suit:a,rank:u,up:!1});for(let a=e.length-1;a>0;a--){const u=Math.floor(Math.random()*(a+1));[e[a],e[u]]=[e[u],e[a]]}const n=[[],[],[],[],[],[],[]];let o=0;for(let a=0;a<7;a++)for(let u=0;u<=a;u++){const d=e[o++];d.up=u===a,n[a].push(d)}return{stock:e.slice(o).map(a=>({...a,up:!1})),waste:[],found:[[],[],[],[]],tab:n}}const cT=()=>{const[e,n]=g.useState(ox),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,x]=g.useState(!1),[y,w]=g.useState(!1),[S,A]=g.useState(0),C=g.useRef(!1);g.useEffect(()=>{if(h)return;const $=setInterval(()=>p(T=>T+1),1e3);return()=>clearInterval($)},[h]);const v=()=>{n(ox()),i(null),u(0),p(0),x(!1),C.current=!1},j=$=>{$.found.every(T=>T.length===13)&&(x(!0),C.current||(C.current=!0,uo(),tc("solitaire",d).then(()=>A(T=>T+1))))},k=$=>{u(T=>T+1),n($),i(null),j($)},E=$=>({stock:[...$.stock],waste:[...$.waste],found:$.found.map(T=>[...T]),tab:$.tab.map(T=>[...T])}),R=()=>{const $=E(e);if($.stock.length===0)$.stock=$.waste.reverse().map(T=>({...T,up:!1})),$.waste=[];else{const T=y?3:1;for(let H=0;H<T&&$.stock.length;H++){const W=$.stock.pop();W.up=!0,$.waste.push(W)}}n($),i(null)},N=($,T)=>T.length===0?$.rank===1:T[T.length-1].suit===$.suit&&$.rank===T[T.length-1].rank+1,z=($,T)=>T.length===0?$.rank===13:T[T.length-1].up&&Dd(T[T.length-1].suit)!==Dd($.suit)&&T[T.length-1].rank===$.rank+1,K=($,T)=>T.pile==="waste"?$.waste.slice(-1):T.pile==="found"?$.found[T.col].slice(-1):$.tab[T.col].slice(T.idx),Y=($,T)=>{if(T.pile==="waste")$.waste.pop();else if(T.pile==="found")$.found[T.col].pop();else{$.tab[T.col]=$.tab[T.col].slice(0,T.idx);const H=$.tab[T.col];H.length&&!H[H.length-1].up&&(H[H.length-1].up=!0)}},Z=($,T)=>{if(!K(e,$).length)return!1;const W=E(e),ee=K(W,$);return T.pile==="found"?ee.length!==1||!N(ee[0],W.found[T.col])?!1:(Y(W,$),W.found[T.col].push(ee[0]),k(W),!0):T.pile==="tab"&&z(ee[0],W.tab[T.col])?(Y(W,$),W.tab[T.col].push(...ee),k(W),!0):!1},se=$=>{const T=K(e,$);if(T.length!==1)return!1;for(let H=0;H<4;H++)if(N(T[0],e.found[H]))return Z($,{pile:"found",col:H});return!1},ge=($,T,H,W)=>{if(h||$==="tab"&&!W.up)return;if(!o){i({pile:$,col:T,idx:H});return}if(o.pile===$&&o.col===T&&o.idx===H){i(null);return}Z(o,$==="found"?{pile:$,col:T}:{pile:"tab",col:T})||i({pile:$,col:T,idx:H})},ie=($,T)=>{h||!o||Z(o,{pile:$,col:T})||i(null)},ue=($,T,H)=>(o==null?void 0:o.pile)===$&&o.col===T&&o.idx===H,me=({card:$,sel:T,onClick:H,onDouble:W})=>l.jsx("div",{onClick:H,onDoubleClick:W,style:{width:Pd,height:rs,boxSizing:"border-box",borderRadius:4,cursor:"pointer",border:T?"2px solid #ffd000":"1px solid #000",background:$.up?"#fff":"linear-gradient(135deg, #1064d0 25%, #0a3d80 25% 50%, #1064d0 50% 75%, #0a3d80 75%)",backgroundSize:$.up?void 0:"10px 10px",color:Dd($.suit)?"#c00000":"#000",position:"relative",userSelect:"none",flexShrink:0,boxShadow:T?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:$.up&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:13,fontWeight:"bold",lineHeight:1},children:[lT[$.rank],l.jsx("div",{children:Rd[$.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26},children:Rd[$.suit]})]})}),B=({children:$,onClick:T})=>l.jsx("div",{onClick:T,style:{width:Pd,height:rs,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",flexShrink:0},children:$});return l.jsxs(bt,{$minW:560,$minH:460,children:[l.jsxs(pn,{children:[l.jsxs(ze,{label:"Game",children:[l.jsxs(Ae,{onMouseDown:$=>{$.preventDefault(),v()},children:["New Game",l.jsx("span",{children:"F2"})]}),l.jsxs(Ae,{onMouseDown:$=>{$.preventDefault(),w(T=>!T)},children:[y?"● ":"○ ","Draw three"]})]}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Solitaire — VortexOS"})})]}),l.jsxs(fn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[l.jsx("div",{onClick:R,children:e.stock.length?l.jsx(me,{card:{suit:0,rank:0,up:!1}}):l.jsx(B,{children:l.jsx("div",{style:{color:"#fff",textAlign:"center",lineHeight:`${rs}px`},children:"↻"})})}),l.jsx("div",{children:e.waste.length?l.jsx(me,{card:e.waste[e.waste.length-1],sel:ue("waste",0,e.waste.length-1),onClick:()=>ge("waste",0,e.waste.length-1,e.waste[e.waste.length-1]),onDouble:()=>se({pile:"waste",col:0,idx:e.waste.length-1})}):l.jsx(B,{})}),l.jsx("div",{style:{flex:1}}),e.found.map(($,T)=>l.jsx("div",{onClick:()=>$.length===0&&ie("found",T),children:$.length?l.jsx(me,{card:$[$.length-1],sel:ue("found",T,$.length-1),onClick:()=>ge("found",T,$.length-1,$[$.length-1])}):l.jsx(B,{onClick:()=>ie("found",T),children:l.jsx("div",{style:{color:"rgba(255,255,255,0.4)",textAlign:"center",lineHeight:`${rs}px`,fontSize:24},children:Rd[T]})})},T))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map(($,T)=>l.jsxs("div",{style:{position:"relative",width:Pd,minHeight:rs},onClick:()=>$.length===0&&ie("tab",T),children:[$.length===0&&l.jsx(B,{onClick:()=>ie("tab",T)}),$.map((H,W)=>l.jsx("div",{style:{position:"absolute",top:W*aT,left:0},children:l.jsx(me,{card:H,sel:ue("tab",T,W),onClick:()=>ge("tab",T,W,H),onDouble:()=>H.up&&se({pile:"tab",col:T,idx:W})})},W))]},T))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 You won in ",d,"s and ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:v,children:"Play again"})]})]}),l.jsx(nc,{game:"solitaire",order:"asc",format:$=>`${Math.floor($/60)}:${String($%60).padStart(2,"0")}`,title:"Best Times",width:150,refreshKey:S})]}),l.jsxs(Tt,{children:[l.jsxs(Oe,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(Oe,{children:["Moves: ",a]}),l.jsx(Oe,{children:h?"You won! 🎉":`Stock: ${e.stock.length}`})]})]})},Ho=20,qt=16,Wo=Ho*qt,uT=110,Id=(e,n)=>e.x===n.x&&e.y===n.y,dT=()=>{const e=g.useRef(null),n=g.useRef(null),o=g.useRef([]),i=g.useRef({x:1,y:0}),a=g.useRef({x:1,y:0}),u=g.useRef({x:0,y:0}),[d,p]=g.useState(0),[h,x]=g.useState("ready"),[y,w]=g.useState(0),S=g.useRef(h);S.current=h;const A=()=>{let k;do k={x:Math.floor(Math.random()*Ho),y:Math.floor(Math.random()*Ho)};while(o.current.some(E=>Id(E,k)));u.current=k},C=()=>{var k;o.current=[{x:8,y:10},{x:7,y:10},{x:6,y:10}],i.current={x:1,y:0},a.current={x:1,y:0},A(),p(0),x("playing"),(k=n.current)==null||k.focus()},v=()=>{var E;const k=(E=e.current)==null?void 0:E.getContext("2d");if(k){k.fillStyle="#0a1f0a",k.fillRect(0,0,Wo,Wo),k.strokeStyle="#0f2f0f";for(let R=0;R<=Ho;R++)k.beginPath(),k.moveTo(R*qt,0),k.lineTo(R*qt,Wo),k.stroke(),k.beginPath(),k.moveTo(0,R*qt),k.lineTo(Wo,R*qt),k.stroke();k.fillStyle="#ff3b3b",k.fillRect(u.current.x*qt+2,u.current.y*qt+2,qt-4,qt-4),o.current.forEach((R,N)=>{k.fillStyle=N===0?"#9cff57":"#3ec70b",k.fillRect(R.x*qt+1,R.y*qt+1,qt-2,qt-2)})}};g.useEffect(()=>{v()},[]),g.useEffect(()=>{if(h!=="playing")return;const k=setInterval(()=>{const E=a.current;i.current=E;const R=o.current[0],N={x:R.x+E.x,y:R.y+E.y};if(N.x<0||N.y<0||N.x>=Ho||N.y>=Ho||o.current.some(z=>Id(z,N))){x("over"),uo(),p(z=>(tc("snake",z).then(()=>w(K=>K+1)),z));return}o.current=[N,...o.current],Id(N,u.current)?(p(z=>z+1),bp(),A()):o.current.pop(),v()},uT);return()=>clearInterval(k)},[h]);const j=k=>{const E=k.key,R=(N,z)=>{i.current.x===-N&&i.current.y===-z||(a.current={x:N,y:z})};E==="ArrowUp"||E==="w"?(k.preventDefault(),R(0,-1)):E==="ArrowDown"||E==="s"?(k.preventDefault(),R(0,1)):E==="ArrowLeft"||E==="a"?(k.preventDefault(),R(-1,0)):E==="ArrowRight"||E==="d"?(k.preventDefault(),R(1,0)):(E===" "||E==="Enter")&&(k.preventDefault(),S.current!=="playing"&&C())};return l.jsxs(bt,{$minW:360,$minH:300,children:[l.jsxs(pn,{children:[l.jsx(ze,{label:"Game",children:l.jsxs(Ae,{onMouseDown:k=>{k.preventDefault(),C()},children:["New Game",l.jsx("span",{children:"Space"})]})}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Snake — arrows or WASD to move"})})]}),l.jsxs(fn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{ref:n,tabIndex:0,onKeyDown:j,style:{outline:"none",position:"relative",border:"2px solid",borderColor:"#808080 #fff #fff #808080"},children:[l.jsx("canvas",{ref:e,width:Wo,height:Wo,style:{display:"block"}}),h!=="playing"&&l.jsxs("div",{onClick:C,style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:h==="over"?`Game Over — ${d}`:"🐍 Snake"}),l.jsx("div",{style:{fontSize:12},children:"Click or press Space to play"}),l.jsx("div",{style:{fontSize:11,opacity:.8},children:"Arrow keys / WASD to steer"})]})]}),l.jsx(nc,{game:"snake",order:"desc",format:k=>String(k),title:"Top Scores",width:130,refreshKey:y})]}),l.jsxs(Tt,{children:[l.jsxs(Oe,{$flex:1,children:["Score: ",d]}),l.jsx(Oe,{children:h==="over"?"Game Over":h==="playing"?"Go!":"Ready"}),l.jsxs(Oe,{children:["Length: ",Math.max(0,o.current.length)]})]})]})},Nd=["♠","♥","♦","♣"],fT=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],ds=e=>e===1||e===2,Ld=52,Od=72,pT=18;function ix(){const e=[];for(let o=0;o<4;o=o+1)for(let i=1;i<=13;i++)e.push({suit:o,rank:i});for(let o=e.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[e[o],e[i]]=[e[i],e[o]]}const n=[[],[],[],[],[],[],[],[]];return e.forEach((o,i)=>n[i%8].push(o)),{free:[null,null,null,null],found:[[],[],[],[]],tab:n}}const Md=e=>e.every((n,o)=>o===0||ds(e[o-1].suit)!==ds(n.suit)&&e[o-1].rank===n.rank+1),hT=()=>{const[e,n]=g.useState(ix),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,x]=g.useState(!1),[y,w]=g.useState(0),S=g.useRef(!1);g.useEffect(()=>{if(h)return;const B=setInterval(()=>p($=>$+1),1e3);return()=>clearInterval(B)},[h]);const A=()=>{n(ix()),i(null),u(0),p(0),x(!1),S.current=!1},C=B=>({free:[...B.free],found:B.found.map($=>[...$]),tab:B.tab.map($=>[...$])}),v=B=>{B.found.every($=>$.length===13)&&(x(!0),S.current||(S.current=!0,uo(),tc("freecell",d).then(()=>w($=>$+1))))},j=B=>{u($=>$+1),n(B),i(null),v(B)},k=(B,$)=>$.length===0?B.rank===1:$[$.length-1].suit===B.suit&&B.rank===$[$.length-1].rank+1,E=(B,$)=>$.length===0?!0:ds($[$.length-1].suit)!==ds(B.suit)&&$[$.length-1].rank===B.rank+1,R=B=>{const $=e.free.filter(H=>H===null).length,T=e.tab.filter(H=>H.length===0).length-(B?1:0);return($+1)*Math.pow(2,Math.max(0,T))},N=(B,$)=>{if($.pile==="free"){const T=B.free[$.col];return T?[T]:[]}return $.pile==="found"?B.found[$.col].slice(-1):B.tab[$.col].slice($.idx)},z=(B,$)=>{$.pile==="free"?B.free[$.col]=null:$.pile==="found"?B.found[$.col].pop():B.tab[$.col]=B.tab[$.col].slice(0,$.idx)},K=(B,$)=>{if(!N(e,B).length)return!1;const H=C(e),W=N(H,B);if($.pile==="free")return W.length!==1||H.free[$.col]!==null?!1:(z(H,B),H.free[$.col]=W[0],j(H),!0);if($.pile==="found")return W.length!==1||!k(W[0],H.found[$.col])?!1:(z(H,B),H.found[$.col].push(W[0]),j(H),!0);if(!Md(W))return!1;const ee=H.tab[$.col].length===0;return!E(W[0],H.tab[$.col])||W.length>R(ee)?!1:(z(H,B),H.tab[$.col].push(...W),j(H),!0)},Y=B=>{const $=N(e,B);if($.length!==1)return!1;for(let T=0;T<4;T++)if(k($[0],e.found[T]))return K(B,{pile:"found",col:T});return!1},Z=(B,$)=>{if(!h){if(!o){Md(e.tab[B].slice($))&&i({pile:"tab",col:B,idx:$});return}if(o.pile==="tab"&&o.col===B&&o.idx===$){i(null);return}K(o,{pile:"tab",col:B})||(Md(e.tab[B].slice($))?i({pile:"tab",col:B,idx:$}):i(null))}},se=B=>{h||o&&K(o,{pile:"free",col:B})||(e.free[B]?i(ie("free",B,0)?null:{pile:"free",col:B,idx:0}):i(null))},ge=B=>{h||!o||K(o,{pile:"found",col:B})||i(null)},ie=(B,$,T)=>(o==null?void 0:o.pile)===B&&o.col===$&&o.idx===T,ue=({card:B,selected:$,onClick:T,onDouble:H})=>l.jsxs("div",{onClick:T,onDoubleClick:H,style:{width:Ld,height:Od,boxSizing:"border-box",borderRadius:4,cursor:"pointer",background:"#fff",border:$?"2px solid #ffd000":"1px solid #000",color:ds(B.suit)?"#c00000":"#000",position:"relative",userSelect:"none",boxShadow:$?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:12,fontWeight:"bold",lineHeight:1},children:[fT[B.rank],l.jsx("div",{children:Nd[B.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24},children:Nd[B.suit]})]}),me=({label:B,onClick:$})=>l.jsx("div",{onClick:$,style:{width:Ld,height:Od,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:B});return l.jsxs(bt,{$minW:560,$minH:480,children:[l.jsxs(pn,{children:[l.jsx(ze,{label:"Game",children:l.jsxs(Ae,{onMouseDown:B=>{B.preventDefault(),A()},children:["New Game",l.jsx("span",{children:"F2"})]})}),l.jsx(ze,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"FreeCell — VortexOS"})})]}),l.jsxs(fn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[e.free.map((B,$)=>l.jsx("div",{onClick:()=>se($),children:B?l.jsx(ue,{card:B,selected:ie("free",$,0),onClick:()=>se($),onDouble:()=>Y({pile:"free",col:$,idx:0})}):l.jsx(me,{})},$)),l.jsx("div",{style:{flex:1}}),e.found.map((B,$)=>l.jsx("div",{onClick:()=>ge($),children:B.length?l.jsx(ue,{card:B[B.length-1]}):l.jsx(me,{label:Nd[$],onClick:()=>ge($)})},$))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map((B,$)=>l.jsxs("div",{style:{position:"relative",width:Ld,minHeight:Od},onClick:()=>B.length===0&&Z($,0),children:[B.length===0&&l.jsx(me,{onClick:()=>Z($,0)}),B.map((T,H)=>l.jsx("div",{style:{position:"absolute",top:H*pT,left:0},children:l.jsx(ue,{card:T,selected:ie("tab",$,H),onClick:()=>Z($,H),onDouble:()=>Y({pile:"tab",col:$,idx:H})})},H))]},$))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 Solved in ",d,"s, ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:A,children:"Play again"})]})]}),l.jsx(nc,{game:"freecell",order:"asc",format:B=>`${Math.floor(B/60)}:${String(B%60).padStart(2,"0")}`,title:"Best Times",width:140,refreshKey:y})]}),l.jsxs(Tt,{children:[l.jsxs(Oe,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(Oe,{children:["Moves: ",a]}),l.jsx(Oe,{children:h?"Solved! 🎉":"FreeCell"})]})]})},mT=()=>{const[e,n]=g.useState(new Date);g.useEffect(()=>{const v=setInterval(()=>n(new Date),1e3);return()=>clearInterval(v)},[]);const o=e.getSeconds(),i=e.getMinutes(),a=e.getHours()%12,u=o*6,d=i*6+o*.1,p=a*30+i*.5,h=(v,j,k,E)=>{const R=(v-90)*Math.PI/180;return l.jsx("line",{x1:"50",y1:"50",x2:50+j*Math.cos(R),y2:50+j*Math.sin(R),stroke:E,strokeWidth:k,strokeLinecap:"round"})},x=e.getFullYear(),y=e.getMonth(),w=new Date(x,y,1).getDay(),S=new Date(x,y+1,0).getDate(),A=e.toLocaleDateString(void 0,{month:"long",year:"numeric"}),C=[...Array(w).fill(null),...Array.from({length:S},(v,j)=>j+1)];return l.jsxs("div",{style:{padding:12,display:"flex",gap:16,alignItems:"flex-start"},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 100 100",children:[l.jsx("circle",{cx:"50",cy:"50",r:"47",fill:"#fff",stroke:"#000",strokeWidth:"2"}),Array.from({length:12}).map((v,j)=>{const k=(j*30-90)*Math.PI/180;return l.jsx("line",{x1:50+42*Math.cos(k),y1:50+42*Math.sin(k),x2:50+46*Math.cos(k),y2:50+46*Math.sin(k),stroke:"#000",strokeWidth:"2"},j)}),h(p,24,3,"#000"),h(d,34,2,"#000"),h(u,38,1,"#c0392b"),l.jsx("circle",{cx:"50",cy:"50",r:"2",fill:"#000"})]}),l.jsx(vt,{variant:"well",style:{marginTop:8,padding:4,fontFamily:"monospace",fontSize:16},children:e.toLocaleTimeString()})]}),l.jsxs("div",{children:[l.jsx("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:4},children:A}),l.jsxs("table",{style:{borderCollapse:"collapse",fontSize:12},children:[l.jsx("thead",{children:l.jsx("tr",{children:["S","M","T","W","T","F","S"].map((v,j)=>l.jsx("th",{style:{width:22,padding:2,color:"#000080"},children:v},j))})}),l.jsx("tbody",{children:Array.from({length:Math.ceil(C.length/7)}).map((v,j)=>l.jsx("tr",{children:C.slice(j*7,j*7+7).map((k,E)=>l.jsx("td",{style:{width:22,height:20,textAlign:"center",background:k===e.getDate()?"#000080":"transparent",color:k===e.getDate()?"#fff":"#000"},children:k??""},E))},j))})]})]})]})},gT=["#000000","#808080","#c0c0c0","#ffffff","#ff0000","#ffa500","#ffff00","#008000","#00ff00","#0000ff","#00ffff","#800080","#ff00ff","#8b4513"],xT=[2,4,8,14],_t=460,Qt=300,yT=[1,2,4],wT=[{id:"pencil",label:"✎ Pencil"},{id:"line",label:"╱ Line"},{id:"rect",label:"▭ Rect"},{id:"ellipse",label:"◯ Ellipse"},{id:"fill",label:"🪣 Fill"},{id:"eraser",label:"▱ Eraser"}],vT=()=>{const e=Zt(),{alert:n}=Cs(),o=g.useRef(null),i=g.useRef(!1),a=g.useRef(null),u=g.useRef(null),d=g.useRef(null),p=g.useRef([]),h=g.useRef([]),[x,y]=g.useState("pencil"),[w,S]=g.useState("#000000"),[A,C]=g.useState(4),[v,j]=g.useState(1),[,k]=g.useState(0),E=()=>o.current.getContext("2d");g.useEffect(()=>{const B=E();B.fillStyle="#fff",B.fillRect(0,0,_t,Qt)},[]);const R=B=>{const $=o.current.getBoundingClientRect();return{x:(B.clientX-$.left)/v,y:(B.clientY-$.top)/v}},N=()=>{p.current.push(E().getImageData(0,0,_t,Qt)),p.current.length>25&&p.current.shift(),h.current=[],k(B=>B+1)},z=()=>{p.current.length&&(h.current.push(E().getImageData(0,0,_t,Qt)),E().putImageData(p.current.pop(),0,0),k(B=>B+1))},K=()=>{h.current.length&&(p.current.push(E().getImageData(0,0,_t,Qt)),E().putImageData(h.current.pop(),0,0),k(B=>B+1))},Y=()=>x==="eraser"?"#fff":w,Z=B=>{const $=R(B);if(N(),x==="fill"){ie(Math.round($.x),Math.round($.y),w);return}i.current=!0,a.current=$,u.current=$,(x==="line"||x==="rect"||x==="ellipse")&&(d.current=E().getImageData(0,0,_t,Qt))},se=B=>{if(!i.current)return;const $=E(),T=R(B);if($.strokeStyle=Y(),$.fillStyle=Y(),$.lineWidth=A,$.lineCap="round",x==="pencil"||x==="eraser")$.beginPath(),$.moveTo(u.current.x,u.current.y),$.lineTo(T.x,T.y),$.stroke(),u.current=T;else if(d.current){$.putImageData(d.current,0,0);const H=a.current;$.beginPath(),x==="line"?($.moveTo(H.x,H.y),$.lineTo(T.x,T.y),$.stroke()):x==="rect"?$.strokeRect(Math.min(H.x,T.x),Math.min(H.y,T.y),Math.abs(T.x-H.x),Math.abs(T.y-H.y)):x==="ellipse"&&($.ellipse((H.x+T.x)/2,(H.y+T.y)/2,Math.abs(T.x-H.x)/2,Math.abs(T.y-H.y)/2,0,0,Math.PI*2),$.stroke())}},ge=()=>{i.current=!1,a.current=null,u.current=null,d.current=null},ie=(B,$,T)=>{if(B<0||$<0||B>=_t||$>=Qt)return;const H=E(),W=H.getImageData(0,0,_t,Qt),ee=W.data,F=(he,be)=>(be*_t+he)*4,M=F(B,$),X=ee[M],ce=ee[M+1],fe=ee[M+2],Q=ee[M+3],te=parseInt(T.slice(1,3),16),le=parseInt(T.slice(3,5),16),L=parseInt(T.slice(5,7),16);if(X===te&&ce===le&&fe===L&&Q===255)return;const P=he=>ee[he]===X&&ee[he+1]===ce&&ee[he+2]===fe&&ee[he+3]===Q,ne=he=>{ee[he]=te,ee[he+1]=le,ee[he+2]=L,ee[he+3]=255},pe=[[B,$]];for(;pe.length;){const[he,be]=pe.pop(),_e=F(he,be);P(_e)&&(ne(_e),he>0&&pe.push([he-1,be]),he<_t-1&&pe.push([he+1,be]),be>0&&pe.push([he,be-1]),be<Qt-1&&pe.push([he,be+1]))}H.putImageData(W,0,0)},ue=()=>{N();const B=E();B.fillStyle="#fff",B.fillRect(0,0,_t,Qt)},me=async()=>{const B=window.prompt("Save as:","painting.png");if(!B)return;const $=o.current.toDataURL("image/png"),T=Uint8Array.from(atob($.split(",")[1]),H=>H.charCodeAt(0));try{await e.writeFile(`/home/user/${B}`,T),await n({title:"Paint",message:`Saved to /home/user/${B}`,type:"info"})}catch(H){await n({title:"Paint",message:`Save failed: ${H.code??H.message}`,type:"error"})}};return l.jsxs("div",{style:{padding:6},children:[l.jsxs(ai,{children:[l.jsx(ot,{onClick:z,disabled:!p.current.length,children:"Undo"}),l.jsx(ot,{onClick:K,disabled:!h.current.length,children:"Redo"}),l.jsx(jn,{}),l.jsx(ot,{onClick:ue,children:"Clear"}),l.jsx(ot,{onClick:me,children:"Save"}),l.jsx(jn,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Zoom:"}),yT.map(B=>l.jsxs(ot,{$active:v===B,onClick:()=>j(B),children:[B,"x"]},B))]}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,width:92},children:[wT.map(B=>l.jsx(Ke,{size:"sm",active:x===B.id,onClick:()=>y(B.id),style:{justifyContent:"flex-start"},children:B.label},B.id)),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:92,marginTop:6},children:gT.map(B=>l.jsx("div",{onClick:()=>{S(B),x==="eraser"&&y("pencil")},style:{width:18,height:18,background:B,border:w===B?"2px solid #000080":"1px solid #808080",cursor:"pointer",boxSizing:"border-box"}},B))}),l.jsx("div",{style:{display:"flex",gap:3,marginTop:6,flexWrap:"wrap"},children:xT.map(B=>l.jsx(Ke,{size:"sm",active:A===B,onClick:()=>C(B),style:{width:28},children:B},B))})]}),l.jsx(vt,{variant:"well",style:{padding:2,overflow:"auto",maxWidth:_t+8,maxHeight:Qt+8},children:l.jsx("div",{style:{width:_t*v,height:Qt*v},children:l.jsx("canvas",{ref:o,width:_t,height:Qt,onMouseDown:Z,onMouseMove:se,onMouseUp:ge,onMouseLeave:ge,style:{display:"block",cursor:"crosshair",background:"#fff",width:_t*v,height:Qt*v,imageRendering:"pixelated"}})})})]})]})},ov="vortex.recent.docs",bT=10;function iv(){try{const e=JSON.parse(localStorage.getItem(ov)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function kT(e){const n=e.trim();if(!n)return;const o=[n,...iv().filter(i=>i!==n)].slice(0,bT);localStorage.setItem(ov,JSON.stringify(o))}const ST=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,jT=/\.(mp3|wav|ogg|m4a|flac)$/i,ET=/\.(html?|rtf|doc)$/i;async function sv(e,n){let o;try{o=(await e.stat(n)).type}catch{return!1}return o==="dir"?(e.spawn("explorer",{argv:[n]}),!0):(ST.test(n)?e.spawn("imageviewer",{argv:[n]}):jT.test(n)?e.spawn("mediaplayer",{argv:[n]}):ET.test(n)?e.spawn("wordpad",{argv:[n]}):e.spawn("notes",{argv:[n]}),kT(n),!0)}const sx=200,CT=new Set(["/proc","/dev"]),$T=512*1024,AT=/\.(png|jpe?g|gif|bmp|webp|ico|mp3|wav|ogg|m4a|flac|zip|gz|pdf)$/i,zd=864e5,lx=[{label:"any time",ms:0},{label:"today",ms:zd},{label:"the last 7 days",ms:7*zd},{label:"the last 30 days",ms:30*zd}];async function lv(e,n,o,i,a,u){if(a.length>=sx||CT.has(n)||!u())return;let d;try{d=await e.readdir(n)}catch{return}for(const p of d){if(a.length>=sx||!u())return;const h=We(n,p);let x="file",y=0,w=0;try{const A=await e.stat(h);x=A.type,y=A.size,w=A.mtime}catch{continue}let S=!0;if(o.name&&!p.toLowerCase().includes(o.name)&&(S=!1),S&&o.sinceMs&&w<i-o.sinceMs&&(S=!1),S&&o.content)if(x!=="file"||y>$T||AT.test(p))S=!1;else try{(await e.readTextFile(h)).toLowerCase().includes(o.content)||(S=!1)}catch{S=!1}S&&a.push({name:p,path:h,type:x,mtime:w}),x==="dir"&&await lv(e,h,o,i,a,u)}}const TT=()=>{const e=Zt(),[n,o]=g.useState("/home/user"),[i,a]=g.useState(""),[u,d]=g.useState(""),[p,h]=g.useState(0),[x,y]=g.useState([]),[w,S]=g.useState(!1),[A,C]=g.useState(!1),v=g.useRef(0),j=async()=>{const E=++v.current,R={name:i.trim().toLowerCase(),content:u.trim().toLowerCase(),sinceMs:lx[p].ms};if(!R.name&&!R.content&&!R.sinceMs){y([]),C(!1);return}S(!0);const N=[];await lv(e,n||"/",R,Date.now(),N,()=>v.current===E),v.current===E&&(y(N),S(!1),C(!0))};g.useEffect(()=>{const E=setTimeout(j,300);return()=>clearTimeout(E)},[i,u,p,n]);const k=E=>{E.type==="dir"?e.spawn("explorer",{argv:[E.path]}):sv(e,E.path)};return l.jsxs(bt,{$minW:480,$minH:380,children:[l.jsxs(fn,{style:{flexDirection:"column",padding:8},children:[l.jsxs(Cy,{label:"Find: Files or Folders",children:[l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Named:"}),l.jsx(ir,{value:i,onChange:E=>a(E.target.value),placeholder:"part of a name",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Containing text:"}),l.jsx(ir,{value:u,onChange:E=>d(E.target.value),placeholder:"words inside the file",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Modified:"}),l.jsx("select",{value:p,onChange:E=>h(Number(E.target.value)),style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:2},children:lx.map((E,R)=>l.jsx("option",{value:R,children:E.label},E.label))})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{width:96},children:"Look in:"}),l.jsx(ir,{value:n,onChange:E=>o(E.target.value),style:{flex:1},fullWidth:!0}),l.jsx(Ke,{onClick:j,disabled:w,children:w?"…":"Find Now"})]})]}),l.jsxs(vt,{variant:"well",style:{flex:1,minHeight:120,marginTop:8,overflow:"auto",background:"#fff",padding:4},children:[x.map(E=>l.jsxs("div",{onDoubleClick:()=>k(E),title:E.path,style:{display:"flex",justifyContent:"space-between",gap:8,padding:"2px 4px",cursor:"pointer"},children:[l.jsxs("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[E.type==="dir"?"📁":"📄"," ",E.name]}),l.jsxs("span",{style:{color:"#666",fontSize:11,whiteSpace:"nowrap"},children:[E.mtime?new Date(E.mtime).toLocaleDateString():""," · ",E.path]})]},E.path)),A&&x.length===0&&l.jsx("div",{style:{padding:8,color:"#666"},children:"No items found."}),!A&&l.jsx("div",{style:{padding:8,color:"#666"},children:"Enter a name, text to find inside files, or a date — results appear as you type."})]})]}),l.jsx(Tt,{children:l.jsx(Oe,{$flex:1,children:w?"Searching…":A?`${x.length} item(s) found`:"Ready"})})]})},av=e=>`vortex.welcome.${e||"user"}`;function cv(e){return localStorage.getItem(av(e))==="1"}function RT(e){localStorage.setItem(av(e),"1")}const uv="vortex.tips.enabled",DT=new Set,PT=()=>DT.forEach(e=>e());function da(){return localStorage.getItem(uv)!=="0"}function IT(e){localStorage.setItem(uv,e?"1":"0"),PT()}const Ko=["Press Ctrl+Space anywhere to open the Command Palette and launch any app or action instantly.","VortexOS runs on a real microkernel — open the Terminal and type `ps` to watch live processes.","Drag a window to a screen edge to snap it to that half; drag to a corner to quarter-tile it.","Your files live in a real virtual filesystem. Try `ls /` in the Terminal, or browse it in Explorer.","Share files with other users in Network Neighborhood, and send messages with WinPopup.","Right-click the desktop to create folders and documents or rearrange your icons.","Open Control Panel ▸ Display to switch between the Serious Sam vaporwave look and classic Windows.","Beat your own high scores in Solitaire, Minesweeper, FreeCell and Snake — they sync to your account.","Press Alt+Tab to flip between open windows, just like the real thing.","The Recycle Bin really works — deleted files go there, and you can restore them.","Press Ctrl+Alt+Del in a panic to reboot — VortexOS has a real BSOD and Task Manager too."];function NT(e){return Ko[(e%Ko.length+Ko.length)%Ko.length]}const Mf=new Set,zf=new Set;function LT(){Mf.forEach(e=>e())}function OT(e){return Mf.add(e),()=>Mf.delete(e)}function dv(){zf.forEach(e=>e())}function MT(e){return zf.add(e),()=>zf.delete(e)}const fv="vortex.assistant.enabled",_f=new Set,zT=()=>_f.forEach(e=>e());function pv(){return localStorage.getItem(fv)!=="0"}function hv(e){localStorage.setItem(fv,e?"1":"0"),zT()}function _T(){return g.useSyncExternalStore(e=>(_f.add(e),()=>_f.delete(e)),pv)}const Ff=new Set;function FT(e){pv()&&Ff.forEach(n=>n(e))}function BT(e){return Ff.add(e),()=>Ff.delete(e)}const WT=["Hi! I'm Vortex — your guide around here. Click me for a tip anytime.","Hey there. New to VortexOS? Click me and I'll show you the ropes.","Welcome back! Click me whenever you want a hand."],HT=["Yikes — that app hit a snag. Dr. Watson logged the details, and the rest of VortexOS is just fine.","That didn't go as planned. No data lost — want to peek at what happened?","Whoops. One app stumbled, but the kernel kept right on running."],UT={terminal:["A real shell awaits — try `ps` to see live processes, or `ls /`.","Pipes and redirects work here: `cat notes.txt | grep todo`."],explorer:["This is a real filesystem. Right-click for New Folder, F2 to rename."],notes:["Everything you type saves to an actual file on disk."],wordpad:["Rich text here — and it saves as a real .html file."],paint:["The fill bucket floods bounded areas. Don't forget Undo!"],calculator:["Psst — try Scientific or Programmer mode in the View menu."],minesweeper:["Your first click is always safe. Now go flag those mines!"],solitaire:["Aces up to the foundations. Double-click to auto-move a card."],freecell:["Use the four free cells wisely — almost every deal is winnable."],snake:["Arrow keys or WASD. Whatever you do, don't bite your tail."],browser:["I route pages through a proxy so they actually load — no frame blocking."],network:["See who else is online and browse their shared files."],messenger:["Net Send lives! Ping another signed-in user a message."],control_panel:["Make it yours — wallpaper, themes, screensavers, and Serious Sam Style."],backlogger:["Track your game backlog, complete with real console art."],task_manager:["Honest CPU and memory graphs in here — no faking it."],find:["Search by name, by contents, or by the date a file changed."],mediaplayer:["Folder playlists and a live retrowave visualizer. Press play."],imageviewer:["Prev/Next across the folder, plus zoom, rotate and a slideshow."],clock:["Hand-drawn analog face and a working calendar."],nightwave:["Retrowave radio, streaming live. Turn it up."],vaporwave:["Retrowave radio, streaming live. Turn it up."]};function rc(e){return e[Math.floor(Math.random()*e.length)]}function VT(e){const n=UT[e];return n&&n.length?rc(n):null}function ax(){return rc(Ko)}function KT(){return rc(WT)}function QT(){return rc(HT)}const qT=()=>l.jsxs(bt,{$minW:460,$minH:380,children:[l.jsxs(pn,{children:[l.jsx(ze,{label:"File",children:l.jsx(Ae,{$disabled:!0,children:"Print Topic"})}),l.jsxs(ze,{label:"Help",children:[l.jsx(Ae,{onClick:LT,children:"Welcome Tour…"}),l.jsx(Ae,{onClick:dv,children:"Tip of the Day…"}),l.jsx(Ae,{onClick:()=>hv(!0),children:"Show Vortex Assistant"})]})]}),l.jsx(fn,{style:{padding:3},children:l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",padding:16,lineHeight:1.6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:12},children:[l.jsx(ei,{size:48,vapor:!0,spinning:!1}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:"VortexOS 2.0"}),l.jsx("div",{style:{fontSize:12,color:"#444"},children:"Experimental Edition — a creation by Serious Sam"})]})]}),l.jsx("p",{style:{fontWeight:"bold"},children:"About"}),l.jsx("p",{children:"VortexOS is a desktop operating system that runs in your browser, built on a real microkernel: an in-memory virtual filesystem persisted to OPFS, a process model with a syscall ABI, a command shell, a window manager, and multi-user networking. No emulator, no clone."}),l.jsx("p",{style:{fontWeight:"bold",marginTop:12},children:"Getting started"}),l.jsxs("ul",{style:{margin:"4px 0 0 18px"},children:[l.jsxs("li",{children:[l.jsx("b",{children:"Command Palette"})," — press ",l.jsx("code",{children:"Ctrl+Space"})," to fuzzy-launch any app or action."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Explorer"})," & ",l.jsx("b",{children:"Terminal"})," — browse a real filesystem, or type ",l.jsx("code",{children:"ls"}),", ",l.jsx("code",{children:"cat"}),", ",l.jsx("code",{children:"ps"}),", even ",l.jsx("code",{children:".sh"})," scripts."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"WordPad"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"})," — real apps that save real files."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Games"})," — Solitaire, FreeCell, Minesweeper and Snake, with per-user high scores."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Network Neighborhood"})," & ",l.jsx("b",{children:"WinPopup"})," — share files and chat with other users."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the Serious Sam Style toggle."]}),l.jsxs("li",{children:["Drag desktop icons anywhere; deleted files go to the ",l.jsx("b",{children:"Recycle Bin"}),"."]})]}),l.jsxs("p",{style:{marginTop:12},children:["New here? Open ",l.jsx("b",{children:"Help ▸ Welcome Tour"})," for the guided introduction, or ",l.jsx("b",{children:"Tip of the Day"})," for a quick hint."]}),l.jsx("p",{style:{marginTop:12,color:"#444",fontSize:12},children:"Registered to: Serious Sam"})]})}),l.jsx(Tt,{children:l.jsx(Oe,{$flex:1,children:"VortexOS Help"})})]}),oc="http://localhost:8082";async function GT(){const{data:e}=await Ue.get(`${oc}/share/users`);return Array.isArray(e)?e:[]}async function YT(e){const{data:n}=await Ue.get(`${oc}/share/users/${e}/files`);return Array.isArray(n)?n:[]}async function XT(){const{data:e}=await Ue.get(`${oc}/files`);return Array.isArray(e)?e:[]}async function JT(e,n){await Ue.put(`${oc}/files/share`,null,{params:{path:e,shared:n}})}function ZT(e){if(!e)return"";try{return decodeURIComponent(escape(atob(e)))}catch{try{return atob(e)}catch{return"(unable to display this file)"}}}const eR="http://localhost:8082";function tR(e){switch(e){case 400:return"Please enter a user name and password.";case 401:return"Incorrect user name or password.";case 409:return"That user name is already taken.";default:return`Something went wrong (HTTP ${e}).`}}async function mv(e,n,o){let i;try{i=await fetch(`${eR}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:o})})}catch{throw new Error("Cannot reach the server. Is the backend running?")}if(!i.ok)throw new Error(tR(i.status));const a=await i.json();return{token:a.token,username:a.username}}const nR=(e,n)=>mv("/auth/register",e,n),rR=(e,n)=>mv("/auth/login",e,n),$p="vortex.session";function gv(){try{const e=localStorage.getItem($p);return e?JSON.parse(e):null}catch{return null}}function oR(e){localStorage.setItem($p,JSON.stringify(e))}function xv(){localStorage.removeItem($p)}function ic(){var e;return((e=gv())==null?void 0:e.token)??null}let fa=null;function cx(e){fa=e}function yv(){xv(),fa==null||fa()}const wv=g.createContext(null);function iR({children:e}){const[n,o]=g.useState(()=>gv()),i=g.useCallback(h=>{oR(h),o(h)},[]),a=g.useCallback(async(h,x)=>i(await rR(h,x)),[i]),u=g.useCallback(async(h,x)=>i(await nR(h,x)),[i]),d=g.useCallback(()=>{xv(),o(null)},[]);g.useEffect(()=>(cx(()=>o(null)),()=>cx(null)),[]);const p=g.useMemo(()=>({session:n,username:(n==null?void 0:n.username)??null,isAuthenticated:!!n,login:a,register:u,logout:d}),[n,a,u,d]);return l.jsx(wv.Provider,{value:p,children:e})}function ar(){const e=g.useContext(wv);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}const _d={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},ux={cursor:"pointer",padding:"2px 6px",fontSize:13},sR=()=>{const{username:e}=ar(),[n,o]=g.useState(0),[i,a]=g.useState(null),[u,d]=g.useState([]),p=g.useCallback(async()=>{try{a(null);const R=await XT();d(R.filter(N=>N.type!=="folder"))}catch{a("Could not reach the network. Is the backend running?")}},[]),h=async R=>{try{await JT(R.path,!R.shared),d(N=>N.map(z=>z.path===R.path?{...z,shared:!z.shared}:z))}catch{a("Could not update sharing.")}},[x,y]=g.useState([]),[w,S]=g.useState(null),[A,C]=g.useState([]),[v,j]=g.useState(null),k=g.useCallback(async()=>{try{a(null),y(await GT())}catch{a("Could not reach the network. Is the backend running?")}},[]),E=async R=>{S(R),j(null);try{C(await YT(R.id))}catch{C([])}};return g.useEffect(()=>{p(),k()},[p,k]),l.jsxs(bt,{$minW:460,$minH:320,style:{padding:4},children:[l.jsxs(Ua,{value:n,onChange:R=>o(R),children:[l.jsx(Dr,{value:0,children:"Network Neighborhood"}),l.jsx(Dr,{value:1,children:"My Shared Files"})]}),l.jsx(Ha,{style:{flex:1,minHeight:0},children:l.jsxs(Mr,{style:{height:"100%"},children:[i&&l.jsx("p",{style:{color:"#800000",fontSize:12},children:i}),n===0&&l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsxs("div",{style:{..._d,width:130},children:[x.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No one is sharing yet."}),x.map(R=>l.jsxs("div",{style:{...ux,background:(w==null?void 0:w.id)===R.id?"#000080":"transparent",color:(w==null?void 0:w.id)===R.id?"#fff":"#000"},onClick:()=>E(R),children:["🖥 ",R.username,R.username===e?" (you)":""]},R.id))]}),l.jsxs("div",{style:{..._d,width:150},children:[!w&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Select a computer."}),w&&A.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No shared files."}),A.map(R=>l.jsxs("div",{style:{...ux,background:(v==null?void 0:v.id)===R.id?"#000080":"transparent",color:(v==null?void 0:v.id)===R.id?"#fff":"#000"},onClick:()=>j(R),children:["📄 ",R.name]},R.id))]}),l.jsx(vt,{variant:"field",style:{flex:1,height:230,overflow:"auto",background:"white",padding:6},children:v?l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:12,fontFamily:"monospace"},children:ZT(v.content)}):l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Open a shared file to view it (read-only)."})})]}),n===1&&l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:12,marginTop:0},children:"Tick a file to share it with everyone on the network."}),l.jsxs("div",{style:_d,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"You have no cloud files to share."}),u.map(R=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"1px 4px"},children:[l.jsx(ao,{checked:R.shared,onChange:()=>h(R)}),l.jsx("span",{style:{fontSize:13},children:R.path.replace("/mnt/cloud","")})]},R.id))]}),l.jsx(Ke,{onClick:p,style:{marginTop:8},children:"Refresh"})]})]})}),l.jsx(Tt,{children:l.jsx(Oe,{$flex:1,children:i||"Network Neighborhood"})})]})};let un=null,Ta=[];const Ap=[];let Ra=!1;const Bf=new Set,fs=()=>Bf.forEach(e=>e());function lR(e){return`${"http://localhost:8082".replace(/^http/,"ws")}/ws?token=${encodeURIComponent(e)}`}function aR(){const e=ic();!e||un||(Ra=!0,vv(e))}function vv(e){let n;try{n=new WebSocket(lR(e))}catch{return}un=n,n.onmessage=o=>{let i;try{i=JSON.parse(o.data)}catch{return}i.type==="presence"?(Ta=i.users??[],fs()):i.type==="msg"&&i.from&&i.body&&(Ap.push({from:i.from,body:i.body,ts:i.ts??Date.now()}),fs())},n.onclose=()=>{un=null,Ta=[],fs(),Ra&&setTimeout(()=>{const o=ic();Ra&&o&&!un&&vv(o)},2e3)},n.onerror=()=>{try{n.close()}catch{}}}function cR(){Ra=!1,Ta=[];const e=un;un=null;try{e==null||e.close()}catch{}fs()}function uR(e,n){!un||un.readyState!==WebSocket.OPEN||!e||!n||(un.send(JSON.stringify({type:"msg",to:e,body:n})),Ap.push({from:"me",to:e,body:n,ts:Date.now(),mine:!0}),fs())}function Wf(){return Ta}function dx(){return(un==null?void 0:un.readyState)===WebSocket.OPEN}function Hf(){return Ap}function Tp(e){return Bf.add(e),()=>Bf.delete(e)}function dR(){const[,e]=g.useReducer(n=>n+1,0);return g.useEffect(()=>Tp(e),[]),{online:Wf(),log:Hf()}}const fR={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},pR=()=>{const{username:e}=ar(),{online:n,log:o}=dR(),[i,a]=g.useState(null),[u,d]=g.useState(""),p=n.filter(y=>y!==e),h=i?o.filter(y=>y.mine&&y.to===i||!y.mine&&y.from===i):[],x=()=>{!i||!u.trim()||(uR(i,u.trim()),d(""))};return l.jsxs(bt,{$minW:440,$minH:320,children:[l.jsxs("div",{style:{display:"flex",gap:8,flex:1,minHeight:0,padding:8},children:[l.jsx("div",{style:{...fR,width:130},children:p.map(y=>l.jsxs("div",{onClick:()=>a(y),style:{cursor:"pointer",padding:"2px 6px",fontSize:13,background:i===y?"#000080":"transparent",color:i===y?"#fff":"#000"},children:["🟢 ",y]},y))}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[l.jsxs(vt,{variant:"field",style:{flex:1,background:"white",overflow:"auto",padding:6,marginBottom:6},children:[!i&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Select someone to message."}),i&&h.length===0&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"No messages yet. Say hi!"}),h.map((y,w)=>l.jsxs("p",{style:{margin:"2px 0",fontSize:13},children:[l.jsxs("b",{children:[y.mine?"You":y.from,":"]})," ",y.body]},w))]}),l.jsxs("div",{style:{display:"flex",gap:6},children:[l.jsx(ir,{value:u,disabled:!i,placeholder:i?`Message ${i}…`:"Pick a recipient",onChange:y=>d(y.target.value),onKeyDown:y=>{y.key==="Enter"&&x()},style:{flex:1}}),l.jsx(Ke,{onClick:x,disabled:!i||!u.trim(),children:"Send"})]})]})]}),l.jsx(Tt,{children:l.jsx(Oe,{$flex:1,children:p.length===0?"No one else is online.":`${p.length} user(s) online`})})]})},hR={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",webp:"image/webp",svg:"image/svg+xml",ico:"image/x-icon"},mR=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,gR=e=>hR[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,xR=e=>e.slice(0,e.lastIndexOf("/"))||"/",yR=e=>e.slice(e.lastIndexOf("/")+1),wR=()=>{const e=Zt(),[n,o]=g.useState([]),[i,a]=g.useState(0),[u,d]=g.useState(null),[p,h]=g.useState(null),[x,y]=g.useState(1),[w,S]=g.useState(0),[A,C]=g.useState(!0),[v,j]=g.useState(!1);g.useEffect(()=>{(async()=>{const Z=(await e.argv())[0];if(!Z){h("No image to display.");return}const se=xR(Z);try{const ie=(await e.readdir(se)).filter(me=>mR.test(me)).sort().map(me=>`${se}/${me}`),ue=Math.max(0,ie.indexOf(Z));o(ie.length?ie:[Z]),a(ue)}catch{o([Z]),a(0)}})()},[e]),g.useEffect(()=>{const Z=n[i];if(!Z)return;let se=null,ge=!0;return h(null),y(1),S(0),C(!0),(async()=>{const ie=gR(Z);if(!ie){h("Unsupported image format.");return}try{const ue=await e.readFile(Z);se=URL.createObjectURL(new Blob([ue],{type:ie})),ge&&d(se)}catch{ge&&h("Could not open this file.")}})(),()=>{ge=!1,se&&URL.revokeObjectURL(se)}},[n,i,e]);const k=()=>a(Z=>n.length?(Z+1)%n.length:0),E=()=>a(Z=>n.length?(Z-1+n.length)%n.length:0),R=g.useRef(k);R.current=k,g.useEffect(()=>{if(!v||n.length<2)return;const Z=setInterval(()=>R.current(),3e3);return()=>clearInterval(Z)},[v,n.length]);const N=()=>{C(!1),y(Z=>Math.min(8,Z*1.25))},z=()=>{C(!1),y(Z=>Math.max(.1,Z/1.25))},K=()=>{C(!1),y(1)},Y=A?{maxWidth:"100%",maxHeight:"100%",transform:`rotate(${w}deg)`,imageRendering:"pixelated"}:{transform:`scale(${x}) rotate(${w}deg)`,imageRendering:"pixelated"};return l.jsxs(bt,{$minW:360,$minH:280,children:[l.jsxs(ai,{children:[l.jsx(ot,{onClick:E,disabled:n.length<2,children:"◀ Prev"}),l.jsx(ot,{onClick:k,disabled:n.length<2,children:"Next ▶"}),l.jsx(jn,{}),l.jsx(ot,{onClick:N,children:"Zoom +"}),l.jsx(ot,{onClick:z,children:"Zoom −"}),l.jsx(ot,{$active:A,onClick:()=>{C(!0),y(1)},children:"Fit"}),l.jsx(ot,{onClick:K,children:"1:1"}),l.jsx(jn,{}),l.jsx(ot,{onClick:()=>S(Z=>Z-90),children:"↺"}),l.jsx(ot,{onClick:()=>S(Z=>Z+90),children:"↻"}),l.jsx(jn,{}),l.jsx(ot,{$active:v,onClick:()=>j(Z=>!Z),disabled:n.length<2,children:v?"⏸ Stop":"▶ Slideshow"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",display:"flex",alignItems:"center",justifyContent:"center",background:"#2b2b2b"},children:[p&&l.jsx("p",{style:{color:"#fff"},children:p}),!p&&u&&l.jsx("img",{src:u,alt:n[i],style:Y}),!p&&!u&&l.jsx("p",{style:{color:"#fff"},children:"Loading…"})]}),l.jsxs(Tt,{children:[l.jsx(Oe,{$flex:1,children:n[i]?yR(n[i]):""}),l.jsx(Oe,{children:n.length>1?`${i+1} / ${n.length}`:"1 / 1"}),l.jsx(Oe,{children:A?"Fit":`${Math.round(x*100)}%`})]})]})},vR={mp3:"audio/mpeg",wav:"audio/wav",ogg:"audio/ogg",m4a:"audio/mp4",flac:"audio/flac"},bR=/\.(mp3|wav|ogg|m4a|flac)$/i,kR=e=>vR[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,SR=e=>e.slice(0,e.lastIndexOf("/"))||"/",Fd=e=>e.slice(e.lastIndexOf("/")+1),jR=()=>{const e=Zt(),n=g.useRef(null),o=g.useRef(null),i=g.useRef(null),a=g.useRef(!1),u=g.useRef(0),[d,p]=g.useState([]),[h,x]=g.useState(0),[y,w]=g.useState(null);g.useEffect(()=>{(async()=>{const v=(await e.argv())[0];if(!v){w("No media to play.");return}const j=SR(v);try{const E=(await e.readdir(j)).filter(R=>bR.test(R)).sort().map(R=>`${j}/${R}`);p(E.length?E:[v]),x(Math.max(0,E.indexOf(v)))}catch{p([v]),x(0)}})()},[e]),g.useEffect(()=>{const v=d[h];if(!v||!n.current)return;let j=null,k=!0;return(async()=>{const E=kR(v);if(!E){w("Unsupported audio format.");return}try{const R=await e.readFile(v);j=URL.createObjectURL(new Blob([R],{type:E})),k&&n.current&&(n.current.src=j,n.current.play().catch(()=>{}))}catch{k&&w("Could not open this file.")}})(),()=>{k=!1,j&&URL.revokeObjectURL(j)}},[d,h,e]);const S=()=>{if(!(a.current||!n.current))try{const v=window.AudioContext||window.webkitAudioContext,j=new v,k=j.createMediaElementSource(n.current),E=j.createAnalyser();E.fftSize=128,k.connect(E),E.connect(j.destination),i.current=E,a.current=!0,j.resume(),A()}catch{}},A=()=>{const v=o.current,j=i.current;if(!v||!j)return;const k=v.getContext("2d"),E=j.frequencyBinCount,R=new Uint8Array(E);j.getByteFrequencyData(R),k.fillStyle="#0a0020",k.fillRect(0,0,v.width,v.height);const N=v.width/E;for(let z=0;z<E;z++){const K=R[z]/255*v.height,Y=k.createLinearGradient(0,v.height,0,v.height-K);Y.addColorStop(0,"#ff2d95"),Y.addColorStop(1,"#00e5d0"),k.fillStyle=Y,k.fillRect(z*N,v.height-K,N-1,K)}u.current=requestAnimationFrame(A)};g.useEffect(()=>()=>cancelAnimationFrame(u.current),[]);const C=()=>x(v=>d.length?(v+1)%d.length:0);return l.jsxs(bt,{$minW:340,$minH:280,style:{padding:6,paddingBottom:0},children:[y&&l.jsx("p",{style:{padding:12},children:y}),!y&&l.jsxs(l.Fragment,{children:[l.jsxs("p",{style:{margin:"2px 0 6px",fontWeight:"bold",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["🎵 ",d[h]?Fd(d[h]):"—"]}),l.jsx(vt,{variant:"well",style:{padding:2,marginBottom:6},children:l.jsx("canvas",{ref:o,width:320,height:80,style:{display:"block",width:"100%",height:80,background:"#0a0020"}})}),l.jsx("audio",{ref:n,controls:!0,onPlay:S,onEnded:C,style:{width:"100%"}}),l.jsxs("p",{style:{fontSize:12,fontWeight:"bold",margin:"8px 0 4px"},children:["Playlist (",d.length,")"]}),l.jsx(vt,{variant:"well",style:{flex:1,minHeight:60,overflow:"auto",background:"#fff"},children:d.map((v,j)=>l.jsxs("div",{onClick:()=>x(j),style:{padding:"3px 6px",cursor:"pointer",fontSize:12,background:j===h?"#000080":"transparent",color:j===h?"#fff":"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[j===h?"▶ ":"",Fd(v)]},v))})]}),l.jsxs(Tt,{children:[l.jsx(Oe,{$flex:1,children:y?"No media":d[h]?Fd(d[h]):"—"}),l.jsxs(Oe,{children:[d.length," track(s)"]})]})]})},bv="vortex.uninstalled",Uf=new Set;function ER(){try{return new Set(JSON.parse(localStorage.getItem(bv)||"[]"))}catch{return new Set}}let Da=ER();function CR(){localStorage.setItem(bv,JSON.stringify([...Da]))}function kv(){return Da}function fx(e,n){const o=new Set(Da);n?o.delete(e):o.add(e),Da=o,CR(),Uf.forEach(i=>i())}function $R(e){return Uf.add(e),()=>Uf.delete(e)}function sc(){return g.useSyncExternalStore($R,kv)}const px={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},hx={display:"flex",alignItems:"center",gap:8,padding:"3px 6px"},AR=()=>{const e=zr(),n=sc(),[o,i]=g.useState(0),a=Ir.filter(h=>!n.has(h.exec)),u=Ir.filter(h=>n.has(h.exec)),d=h=>{e.registry.unregister(h),fx(h,!1)},p=h=>{const x=Ir.find(y=>y.exec===h);x&&e.registry.register(x),fx(h,!0)};return l.jsxs(bt,{$minW:420,$minH:320,style:{padding:4},children:[l.jsxs(Ua,{value:o,onChange:h=>i(h),children:[l.jsx(Dr,{value:0,children:"Install/Uninstall"}),l.jsx(Dr,{value:1,children:"Add Programs"})]}),l.jsx(Ha,{style:{flex:1,minHeight:0},children:l.jsxs(Mr,{style:{height:"100%"},children:[o===0&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Installed programs. Select one and click Remove to uninstall it."}),l.jsx("div",{style:px,children:a.map(h=>l.jsxs("div",{style:hx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),OR.has(h.exec)?l.jsx("span",{style:{fontSize:11,color:"#555"},children:"system"}):l.jsx(Ke,{size:"sm",onClick:()=>d(h.exec),children:"Remove"})]},h.exec))})]}),o===1&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Programs available to install."}),l.jsxs("div",{style:px,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Everything is installed."}),u.map(h=>l.jsxs("div",{style:hx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),l.jsx(Ke,{size:"sm",onClick:()=>p(h.exec),children:"Install"})]},h.exec))]})]})]})}),l.jsx(Tt,{children:l.jsxs(Oe,{$flex:1,children:[a.length," installed · ",u.length," available"]})})]})},Sv="/trash.svg",Rp="/task_manager.png",jv="/doom.png",Ev="/doom2.png",Dp="/playstation-logo.png",Cv="/wordpad.svg",$v="/browser.png",Av="/tomb.jpg",Tv="/persia.png",Rv="/vapor.png",Pp="/terminal.svg",Ip="/calculator.svg",Np="/minesweeper.svg",Lp="/solitaire.svg",Op="/snake.svg",Mp="/freecell.svg",Pa="/clock.svg",Ia="/paint_file-3.png",Vf="/find.svg",Kf="/help.svg",zp="/network.svg",ys="/winpopup.svg",TR=g.lazy(()=>mo(()=>import("./Doom-imBIL7rP.js"),__vite__mapDeps([0,1]))),RR=g.lazy(()=>mo(()=>import("./DoomII-CyGhBUh3.js"),__vite__mapDeps([2,1]))),DR=g.lazy(()=>mo(()=>import("./TombRaider-DR3NdKqO.js"),__vite__mapDeps([3,1]))),PR=g.lazy(()=>mo(()=>import("./Persia-OSiY79Se.js"),__vite__mapDeps([4,1]))),IR=g.lazy(()=>mo(()=>import("./Backlogger-DR83dCL8.js"),[])),NR=g.lazy(()=>mo(()=>import("./Browser-SlDLiFL7.js"),[])),LR=g.lazy(()=>mo(()=>import("./NightwavePlaza-ETFzC2JU.js"),[])),OR=new Set(["recycle_bin","my_computer","task_manager","explorer","terminal","control_panel","notes","find","add_remove"]),Ir=[Be({exec:"recycle_bin",name:"Recycle Bin",icon:Sv,component:h2,permissions:["fs"]}),Be({exec:"my_computer",name:"My Computer",icon:us,component:g2,permissions:["proc"]}),Be({exec:"task_manager",name:"Task Manager",icon:Rp,component:$2,permissions:["proc"]}),Be({exec:"notes",name:"Notes",icon:co,component:A2,permissions:["fs"]}),Be({exec:"wordpad",name:"WordPad",icon:Cv,component:D2,permissions:["fs"]}),Be({exec:"explorer",name:"Explorer",icon:Ct,component:U2,permissions:["fs","proc"]}),Be({exec:"terminal",name:"Terminal",icon:Pp,component:C$,permissions:["fs","proc"]}),Be({exec:"paint",name:"Paint",icon:Ia,component:vT,permissions:["fs"]}),Be({exec:"imageviewer",name:"Image Viewer",icon:Ia,component:wR,permissions:["fs"]}),Be({exec:"mediaplayer",name:"Media Player",icon:Pa,component:jR,permissions:["fs"]}),Be({exec:"find",name:"Find Files",icon:Vf,component:TT,permissions:["fs","proc"]}),Be({exec:"backlogger",name:"GameCache",icon:Dp,component:IR,permissions:["net"]}),Be({exec:"network",name:"Network Neighborhood",icon:zp,component:sR,permissions:["net"]}),Be({exec:"messenger",name:"WinPopup",icon:ys,component:pR,permissions:["net"]}),Be({exec:"browser",name:"Browser",icon:$v,component:NR,permissions:["net"]}),Be({exec:"vaporwave",name:"Nightwave Plaza",icon:Rv,component:LR,permissions:["net","audio"]}),Be({exec:"calculator",name:"Calculator",icon:Ip,component:$$,permissions:[]}),Be({exec:"minesweeper",name:"Minesweeper",icon:Np,component:sT,permissions:["net"]}),Be({exec:"solitaire",name:"Solitaire",icon:Lp,component:cT,permissions:["net"]}),Be({exec:"snake",name:"Snake",icon:Op,component:dT,permissions:["net"]}),Be({exec:"freecell",name:"FreeCell",icon:Mp,component:hT,permissions:["net"]}),Be({exec:"clock",name:"Clock",icon:Pa,component:mT,permissions:[]}),Be({exec:"help",name:"Help",icon:Kf,component:qT,permissions:[]}),Be({exec:"control_panel",name:"Control Panel",icon:us,component:X8,permissions:[]}),Be({exec:"add_remove",name:"Add/Remove Programs",icon:us,component:AR,permissions:[]}),Be({exec:"doom",name:"Doom",icon:jv,component:TR,permissions:[]}),Be({exec:"doomII",name:"Doom II",icon:Ev,component:RR,permissions:[]}),Be({exec:"tomb",name:"Tomb Raider",icon:Av,component:DR,permissions:[]}),Be({exec:"persia",name:"Prince of Persia",icon:Tv,component:PR,permissions:[]})];function MR(e){for(const n of Ir)e.register(n)}const Bd="vortex.proctable",zR="process";function _R(e){return{load(){const n=localStorage.getItem(Bd);if(n)return FR(n);const o=localStorage.getItem(zR);if(o){const i=BR(o,e);return i&&localStorage.setItem(Bd,JSON.stringify(i)),i}return null},save(n){localStorage.setItem(Bd,JSON.stringify(n))}}}function FR(e){try{const n=JSON.parse(e);return Array.isArray(n)?n:null}catch{return null}}function BR(e,n){let o;try{o=JSON.parse(e)}catch{return null}return Array.isArray(o)?o.filter(i=>i&&i.componentName).map(i=>{var a,u;return{pid:i.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:i.componentName,name:i.name??i.componentName,icon:i.icon??"",priority:typeof i.priority=="number"?i.priority:0,window:{x:((a=i.location)==null?void 0:a.x)??n().x,y:((u=i.location)==null?void 0:u.y)??n().y},cwd:"/home/user",state:"running"}}):null}class WR{constructor(){Ie(this,"mounts",[]);Ie(this,"listeners",new Set);Ie(this,"changeVersion",0)}subscribe(n){return this.listeners.add(n),()=>this.listeners.delete(n)}version(){return this.changeVersion}touch(){this.emit()}emit(){this.changeVersion++;for(const n of this.listeners)n()}mount(n,o){const i=Pr(n);this.mounts=this.mounts.filter(a=>a.mountPoint!==i),this.mounts.push({mountPoint:i,fs:o}),this.mounts.sort((a,u)=>u.mountPoint.length-a.mountPoint.length)}route(n){const o=Pr(n);for(const i of this.mounts)if(i.mountPoint==="/"||o===i.mountPoint||o.startsWith(i.mountPoint+"/")){const a=i.mountPoint==="/"?o:o.slice(i.mountPoint.length)||"/";return{fs:i.fs,rel:a||"/",mountPoint:i.mountPoint}}throw new je("ENOENT",n)}childMounts(n){const o=Pr(n);return this.mounts.filter(i=>i.mountPoint!=="/"&&Yt(i.mountPoint)===o).map(i=>i.mountPoint.slice(o==="/"?1:o.length+1))}stat(n){const{fs:o,rel:i}=this.route(n);return o.stat(i)}readdir(n){const{fs:o,rel:i}=this.route(n),a=o.readdir(i);return[...new Set([...a,...this.childMounts(n)])].sort()}read(n){const{fs:o,rel:i}=this.route(n);return o.read(i)}write(n,o){const{fs:i,rel:a}=this.route(n);if(i.readonly)throw new je("EROFS",n);i.write(a,o),this.emit()}mkdir(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new je("EROFS",n);o.mkdir(i),this.emit()}unlink(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new je("EROFS",n);o.unlink(i),this.emit()}rename(n,o){const i=this.route(n),a=this.route(o);if(i.fs.readonly||a.fs.readonly)throw new je("EROFS",n);if(i.fs===a.fs)i.fs.rename(i.rel,a.rel);else{if(this.stat(n).type==="dir")throw new je("EINVAL","cross-mount dir move");a.fs.write(a.rel,i.fs.read(i.rel)),i.fs.unlink(i.rel)}this.emit()}exists(n){try{return this.stat(n),!0}catch{return!1}}}const Ql=()=>Date.now();class ti{constructor(){Ie(this,"readonly",!1);Ie(this,"root",{type:"dir",mtime:Ql(),children:new Map})}resolve(n){let o=this.root;for(const i of Ss(n)){if(o.type!=="dir"||!o.children)throw new je("ENOTDIR",n);const a=o.children.get(i);if(!a)return null;o=a}return o}resolveDir(n){const o=this.resolve(n);if(!o)throw new je("ENOENT",n);if(o.type!=="dir")throw new je("ENOTDIR",n);return o}exists(n){return this.resolve(n)!==null}stat(n){var i;const o=this.resolve(n);if(!o)throw new je("ENOENT",n);return{type:o.type,size:o.type==="file"?((i=o.data)==null?void 0:i.length)??0:0,mtime:o.mtime}}readdir(n){return[...this.resolveDir(n).children.keys()].sort()}read(n){const o=this.resolve(n);if(!o)throw new je("ENOENT",n);if(o.type==="dir")throw new je("EISDIR",n);return o.data??new Uint8Array}write(n,o){if(Pr(n)==="/")throw new je("EISDIR",n);const i=this.resolveDir(Yt(n)),a=Xt(n),u=i.children.get(a);if(u&&u.type==="dir")throw new je("EISDIR",n);i.children.set(a,{type:"file",mtime:Ql(),data:new Uint8Array(o)})}mkdir(n){const o=this.resolveDir(Yt(n)),i=Xt(n);if(!i)throw new je("EEXIST",n);if(o.children.has(i))throw new je("EEXIST",n);o.children.set(i,{type:"dir",mtime:Ql(),children:new Map})}unlink(n){if(Pr(n)==="/")throw new je("EACCES","cannot unlink /");const o=this.resolve(n);if(!o)throw new je("ENOENT",n);if(o.type==="dir"&&o.children.size>0)throw new je("ENOTEMPTY",n);this.resolveDir(Yt(n)).children.delete(Xt(n))}rename(n,o){const i=this.resolve(n);if(!i)throw new je("ENOENT",n);const a=this.resolveDir(Yt(o));this.resolveDir(Yt(n)).children.delete(Xt(n)),i.mtime=Ql(),a.children.set(Xt(o),i)}serialize(){return Dv(this.root)}static deserialize(n){const o=new ti;return o.root=Pv(n),o}}function Dv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:Array.from(e.data??[])};const n={};for(const[o,i]of e.children)n[o]=Dv(i);return{type:"dir",mtime:e.mtime,children:n}}function Pv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:new Uint8Array(e.data??[])};const n=new Map;for(const[o,i]of Object.entries(e.children??{}))n.set(o,Pv(i));return{type:"dir",mtime:e.mtime,children:n}}const mx=["null","zero","random"],gx=256,xx=()=>Date.now();class HR{constructor(){Ie(this,"readonly",!1)}device(n){const o=Xt(n);if(Yt(n)!=="/"||!mx.includes(o))throw new je("ENOENT",n);return o}stat(n){return n==="/"?{type:"dir",size:0,mtime:xx()}:(this.device(n),{type:"dev",size:0,mtime:xx()})}readdir(n){if(n!=="/")throw new je("ENOTDIR",n);return[...mx]}read(n){switch(this.device(n)){case"null":return new Uint8Array;case"zero":return new Uint8Array(gx);case"random":return crypto.getRandomValues(new Uint8Array(gx));default:throw new je("ENOENT",n)}}write(n,o){if(this.device(n)!=="null")throw new je("EROFS",n)}mkdir(n){throw new je("EROFS",n)}unlink(n){throw new je("EROFS",n)}rename(n){throw new je("EROFS",n)}}const yx=()=>Date.now(),wx=e=>new TextEncoder().encode(e);class UR{constructor(n){Ie(this,"readonly",!0);this.source=n}entries(){return["processes",...this.source().map(n=>n.pid)]}find(n){return this.source().find(o=>o.pid===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:yx()};const o=Xt(n);if(Yt(n)!=="/"||!this.entries().includes(o))throw new je("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:yx()}}readdir(n){if(n!=="/")throw new je("ENOTDIR",n);return this.entries()}read(n){const o=Xt(n);if(o==="processes"){const a=this.source().map(u=>`${u.pid.slice(0,8)}  ${u.state.padEnd(8)}  p${u.priority}  ${u.name}`).join(`
`);return wx(`PID       STATE     PRIO  NAME
${a}
`)}const i=this.find(o);if(!i)throw new je("ENOENT",n);return wx(`pid:      ${i.pid}
ppid:     ${i.ppid??"-"}
name:     ${i.name}
exec:     ${i.exec}
state:    ${i.state}
priority: ${i.priority}
uid:      ${i.uid}
`)}write(n){throw new je("EROFS",n)}mkdir(n){throw new je("EROFS",n)}unlink(n){throw new je("EROFS",n)}rename(n){throw new je("EROFS",n)}}const vx=()=>Date.now(),VR=e=>new TextEncoder().encode(e);class KR{constructor(n){Ie(this,"readonly",!0);this.source=n}find(n){return this.source().find(o=>o.exec===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:vx()};const o=Xt(n);if(Yt(n)!=="/"||!this.find(o))throw new je("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:vx()}}readdir(n){if(n!=="/")throw new je("ENOTDIR",n);return this.source().map(o=>o.exec).sort()}read(n){const o=this.find(Xt(n));if(!o)throw new je("ENOENT",n);return VR(`#!vortex-program
exec=${o.exec}
name=${o.name}
`)}write(n){throw new je("EROFS",n)}mkdir(n){throw new je("EROFS",n)}unlink(n){throw new je("EROFS",n)}rename(n){throw new je("EROFS",n)}}function QR(e){let n="";for(const o of e)n+=String.fromCharCode(o);return btoa(n)}function qR(e){const n=atob(e),o=new Uint8Array(n.length);for(let i=0;i<n.length;i++)o[i]=n.charCodeAt(i);return o}class bx{constructor(n,o,i=()=>{}){Ie(this,"readonly",!1);Ie(this,"mirror",new ti);Ie(this,"chains",new Map);this.mountPoint=n,this.api=o,this.onLoaded=i}async init(){try{const o=(await this.api.list()).filter(a=>a.path===this.mountPoint||a.path.startsWith(this.mountPoint+"/")),i=a=>a===this.mountPoint?"/":a.slice(this.mountPoint.length);for(const a of o.filter(u=>u.type==="folder").sort((u,d)=>u.path.length-d.path.length))this.ensureDir(i(a.path));for(const a of o.filter(u=>u.type!=="folder")){const u=i(a.path);this.ensureDir(Yt(u)),this.mirror.write(u,a.content?qR(a.content):new Uint8Array)}}catch{}this.onLoaded()}async reload(){this.mirror=new ti,this.chains.clear(),await this.init()}ensureDir(n){let o="";for(const i of Ss(n))o+="/"+i,this.mirror.exists(o)||this.mirror.mkdir(o)}full(n){return n==="/"?this.mountPoint:this.mountPoint+n}nameOf(n){return n.slice(n.lastIndexOf("/")+1)}stat(n){return this.mirror.stat(n)}readdir(n){return this.mirror.readdir(n)}read(n){return this.mirror.read(n)}chain(n,o){const a=(this.chains.get(n)??Promise.resolve()).then(o).catch(()=>{});this.chains.set(n,a)}async flush(){await Promise.all(this.chains.values())}write(n,o){this.mirror.write(n,o);const i=QR(o);this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"file",i))}mkdir(n){this.mirror.mkdir(n),this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"folder",null))}unlink(n){this.mirror.unlink(n),this.chain(n,()=>this.api.remove(this.full(n)))}rename(n,o){this.mirror.rename(n,o),this.chain(n,()=>this.api.rename(this.full(n),this.full(o)))}}function kx(e,n="/files"){const o=()=>{const a=ic();return{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{}}},i=a=>(a.status===401&&yv(),a);return{async list(){const a=i(await fetch(`${e}${n}`,{headers:o()}));return a.ok?a.json():[]},async upsert(a,u,d,p){i(await fetch(`${e}${n}`,{method:"POST",headers:o(),body:JSON.stringify({path:a,name:u,type:d,content:p})}))},async remove(a){i(await fetch(`${e}${n}?path=${encodeURIComponent(a)}`,{method:"DELETE",headers:o()}))},async rename(a,u){i(await fetch(`${e}${n}/rename?from=${encodeURIComponent(a)}&to=${encodeURIComponent(u)}`,{method:"PUT",headers:o()}))}}}const Na="vortex.vfs";function GR(){return{async load(){const e=localStorage.getItem(Na);if(!e)return null;try{return JSON.parse(e)}catch{return null}},save(e){try{localStorage.setItem(Na,JSON.stringify(e))}catch{}}}}const Sx="vortex.vfs.json";function YR(){var e;return typeof navigator<"u"&&!!((e=navigator.storage)!=null&&e.getDirectory)}function XR(){let e=null,n=null,o=!1;async function i(){if(o||n===null)return;o=!0;const a=n;n=null;try{const p=await(await(await navigator.storage.getDirectory()).getFileHandle(Sx,{create:!0})).createWritable();await p.write(JSON.stringify(a)),await p.close()}catch{}finally{o=!1,n!==null&&i()}}return{async load(){try{const u=await(await navigator.storage.getDirectory()).getFileHandle(Sx).catch(()=>null);if(u){const p=await(await u.getFile()).text();return p?JSON.parse(p):null}const d=localStorage.getItem(Na);if(d){const p=JSON.parse(d);return n=p,i(),localStorage.removeItem(Na),p}return null}catch{return null}},save(a){n=a,e&&clearTimeout(e),e=setTimeout(()=>void i(),300)}}}function JR(){return YR()?XR():GR()}const Iv=g.createContext(null),jx=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2}),ZR=`Welcome to VortexOS.\r
\r
This is a real file, stored on a real virtual filesystem.\r
Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r
`;function e5(){const e=new ti;return e.mkdir("/home"),e.mkdir("/home/user"),e.mkdir("/home/user/Documents"),e.mkdir("/home/user/Desktop"),e.mkdir("/tmp"),e.mkdir("/mnt"),e.mkdir("/Recycle Bin"),e.write("/home/user/welcome.txt",new TextEncoder().encode(ZR)),e}async function t5(){const e=new t2;MR(e);for(const x of kv())e.unregister(x);const n=new e2({registry:e,persistence:_R(jx),defaultWindowLocation:jx}),o=JR(),i=await o.load(),a=i?ti.deserialize(i):e5();a.exists("/mnt")||a.mkdir("/mnt");const u=new WR;u.mount("/",a),u.mount("/dev",new HR),u.mount("/proc",new UR(()=>n.processInfo())),u.mount("/bin",new KR(()=>n.registry.list().map(x=>({exec:x.exec,name:x.name}))));const d="http://localhost:8082",p=new bx("/mnt/cloud",kx(d,"/files"),()=>u.touch());u.mount("/mnt/cloud",p);const h=new bx("/mnt/public",kx(d,"/public/files"),()=>u.touch());return u.mount("/mnt/public",h),u.subscribe(()=>o.save(a.serialize())),n.mountVfs(u),i||o.save(a.serialize()),{kernel:n,drives:[p,h]}}const Nv=g.createContext(async()=>{});function n5({children:e,kernel:n}){const[o,i]=g.useState(n?{kernel:n,drives:[]}:null);g.useEffect(()=>{if(n){i({kernel:n,drives:[]});return}let d=!1;return t5().then(p=>{d||i(p)}),()=>{d=!0}},[n]);const a=(o==null?void 0:o.drives)??[],u=g.useCallback(async()=>{await Promise.all(a.map(d=>d.reload()))},[a]);return o?l.jsx(Iv.Provider,{value:o.kernel,children:l.jsx(Nv.Provider,{value:u,children:e})}):l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#008080",color:"#fff",fontSize:14},children:"Starting VortexOS…"})}function r5(){return g.useContext(Nv)}function zr(){const e=g.useContext(Iv);if(!e)throw new Error("useKernel must be used within a KernelProvider");return e}function lc(){const e=zr();return g.useSyncExternalStore(e.subscribe,e.getSnapshot)}function o5(){const e=zr();return g.useSyncExternalStore(e.subscribeFs,e.fsVersion)}function i5(){const e=zr();return g.useSyncExternalStore(e.subscribePanic,e.getPanic)}const Lv=G.createContext({});function s5({children:e}){const n=zr(),o=lc(),i=g.useMemo(()=>o.map(h=>({uuid:h.pid,priority:h.priority,component:n.registry.component(h.exec)??(()=>null),selected:!1,icon:h.icon,name:h.name,location:h.window})),[o,n]),a=h=>{const x=h.componentName;x&&n.syscall(null,"spawn",{exec:x,name:h.name,icon:h.icon,argv:h.argv})},u=h=>{h&&n.syscall(null,"kill",{pid:h})},d=h=>{h.uuid&&n.syscall(null,"win_focus",{pid:h.uuid})},p=(h,x)=>{h&&n.syscall(null,"win_move",{pid:h,location:x})};return l.jsx(Lv.Provider,{value:{processes:i,changePriority:d,closeProcess:u,addProcess:a,handleProceessLocationChange:p},children:e})}function Tn(){return G.useContext(Lv)}const Ex=200,Cx=2400,l5=mt`from { width: 0 } to { width: 100% }`,Ov=mt`from { opacity: 0 } to { opacity: 1 }`,a5=mt`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`,_p=O.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
`,c5=O(_p)`
    ${({$vapor:e})=>e?`background:
                radial-gradient(120% 80% at 50% 18%, #2a0a4a 0%, #14012b 55%, #05010f 100%);`:"background-image: url('/clouds.jpg'); background-size: cover; background-position: center;"}
`,u5=O.div`
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
`,d5=O.button`
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
`,f5=O(_p)`
    background: ${({$vapor:e})=>e?"radial-gradient(80% 80% at 50% 50%, #0a0118 0%, #000 100%)":"#000"};
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7vh 8vw;
    color: #d8d8d8;
    font-family: "Courier New", monospace;
    font-size: 15px;
    line-height: 1.7;
    text-align: left;
`,p5=O.div`
    animation: ${Ov} 0.1s linear;
    white-space: pre;
`,h5=O.span`
    color: ${({$vapor:e})=>e?"#00e5d0":"#3ad14a"};
    font-weight: bold;
`,m5=O.span`
    display: inline-block;
    width: 9px;
    height: 16px;
    margin-left: 2px;
    vertical-align: text-bottom;
    background: currentColor;
    animation: ${a5} 1s step-end infinite;
`,g5=O(_p)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#000"};
    animation: ${Ov} 0.5s ease;
`,$x=O.h1`
    margin: 26px 0 2px;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #5cb9ff, #ffffff)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,Ax=O.p`
    margin: 2px 0 0;
    color: #b9b9c8;
    font-size: 13px;
    letter-spacing: 1px;
`,Tx=O.p`
    margin: 6px 0 0;
    font-size: 13px;
    font-weight: 600;
    color: ${({$vapor:e})=>e?"#00e5d0":"#7fc6ff"};
    text-shadow: 0 0 12px ${({$vapor:e})=>e?"#00e5d088":"transparent"};
`,x5=O.div`
    width: 320px;
    height: 18px;
    margin-top: 40px;
    padding: 2px;
    background: #000;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,y5=O.div`
    height: 100%;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #00e5d0)":"linear-gradient(90deg, #000080, #1084d0)"};
    animation: ${l5} ${({$ms:e})=>e}ms linear forwards;
`,w5=e=>[{label:"VortexOS BIOS v2.0  —  Experimental Edition"},{label:"(c) Serious Sam.  All rights reserved."},{label:""},{label:`Detecting processor cores ........ ${e}`,status:""},{label:"Microkernel .......................",status:"OK"},{label:"Syscall ABI .......................",status:"OK"},{label:"Virtual File System (OPFS) ........",status:"OK"},{label:"Process scheduler .................",status:"OK"},{label:""},{label:"Starting VortexOS ..."}],v5=()=>{const e=li(),{sssStyle:n}=hn(),o=n,[i,a]=g.useState("ready"),[u,d]=g.useState(0),p=w5(navigator.hardwareConcurrency||4),h=g.useRef([]),x=()=>{I2(),a("post")};return g.useEffect(()=>{if(i==="post")return p.forEach((y,w)=>{h.current.push(setTimeout(()=>d(w+1),w*Ex))}),h.current.push(setTimeout(()=>a("logo"),p.length*Ex+350)),()=>{h.current.forEach(clearTimeout),h.current=[]}},[i]),g.useEffect(()=>{if(i!=="logo")return;N2();const y=setTimeout(()=>e("/vortex"),Cx);return()=>clearTimeout(y)},[i,e]),i==="ready"?l.jsxs(c5,{$vapor:o,children:[o&&l.jsx(u5,{}),l.jsxs("div",{style:{position:"relative",zIndex:1},children:[l.jsx(ei,{size:150,vapor:o}),l.jsx($x,{$vapor:o,children:"VortexOS"}),l.jsx(Ax,{style:{color:o?"#cfcfe0":"#0a0a0a"},children:"Experimental Edition"}),l.jsx(d5,{$vapor:o,onClick:x,children:"Are you ready?"}),l.jsx(Tx,{$vapor:o,style:{marginTop:18,color:o?"#00e5d0":"#0a0a0a"},children:"a creation by Serious Sam"})]})]}):i==="post"?l.jsx(f5,{$vapor:o,children:p.slice(0,u).map((y,w)=>l.jsxs(p5,{children:[y.label,y.status?l.jsx(h5,{$vapor:o,children:y.status}):null,w===u-1&&l.jsx(m5,{})]},w))}):l.jsxs(g5,{$vapor:o,children:[l.jsx(ei,{size:170,vapor:o}),l.jsx($x,{$vapor:o,children:"VortexOS"}),l.jsx(Ax,{children:"Version 2.0 · Experimental Edition"}),l.jsx(Tx,{$vapor:o,children:"a creation by Serious Sam"}),l.jsx(x5,{children:l.jsx(y5,{$vapor:o,$ms:Cx-200})})]})},Rx=40,Dx="/Recycle Bin",Px=84,Wd=92,b5=[{id:"app:recycle_bin",name:"Recycle Bin",icon:Sv,kind:"app",componentName:"recycle_bin"},{id:"app:backlogger",name:"GameCache",icon:Dp,kind:"app",componentName:"backlogger"},{id:"app:my_computer",name:"My Computer",icon:us,kind:"app",componentName:"my_computer"},{id:"app:network",name:"Network Neighborhood",icon:zp,kind:"app",componentName:"network"},{id:"app:messenger",name:"WinPopup",icon:ys,kind:"app",componentName:"messenger"},{id:"app:vaporwave",name:"Nightwave Plaza",icon:Rv,kind:"app",componentName:"vaporwave"},{id:"app:task_manager",name:"Task Manager",icon:Rp,kind:"app",componentName:"task_manager"},{id:"app:explorer",name:"Explorer",icon:Ct,kind:"app",componentName:"explorer"},{id:"app:terminal",name:"Terminal",icon:Pp,kind:"app",componentName:"terminal"},{id:"app:notes",name:"Notes",icon:co,kind:"app",componentName:"notes"},{id:"app:browser",name:"Browser",icon:$v,kind:"app",componentName:"browser"},{id:"app:doom",name:"Doom",icon:jv,kind:"app",componentName:"doom"},{id:"app:doomII",name:"Doom II",icon:Ev,kind:"app",componentName:"doomII"},{id:"app:persia",name:"Prince of Persia",icon:Tv,kind:"app",componentName:"persia"},{id:"app:tomb",name:"Tomb Raider",icon:Av,kind:"app",componentName:"tomb"},{id:"app:calculator",name:"Calculator",icon:Ip,kind:"app",componentName:"calculator"},{id:"app:minesweeper",name:"Minesweeper",icon:Np,kind:"app",componentName:"minesweeper"},{id:"app:solitaire",name:"Solitaire",icon:Lp,kind:"app",componentName:"solitaire"},{id:"app:snake",name:"Snake",icon:Op,kind:"app",componentName:"snake"},{id:"app:freecell",name:"FreeCell",icon:Mp,kind:"app",componentName:"freecell"},{id:"app:clock",name:"Clock",icon:Pa,kind:"app",componentName:"clock"},{id:"app:paint",name:"Paint",icon:Ia,kind:"app",componentName:"paint"}],k5=e=>{try{return JSON.parse(localStorage.getItem(e)||"{}")}catch{return{}}},S5=()=>{const{addProcess:e}=Tn(),n=Zt(),{alert:o}=Cs(),{username:i}=ar(),a=o5(),u=sc(),d=i||"user",p=`/home/${d}/Desktop`,h=`vortex.desktop.positions.${d}`,[x,y]=g.useState([]),[w,S]=g.useState(()=>k5(h)),[A,C]=g.useState(new Set),[v,j]=g.useState(null),[k,E]=g.useState(null),R=g.useRef(null),N=g.useRef(null),z=g.useRef(null),K=[...b5.filter(Q=>!Q.componentName||!u.has(Q.componentName)),...x],Y=Math.max(1,Math.floor((window.innerHeight-Rx-20)/Wd)),Z=(Q,te)=>w[Q]??{x:12+Math.floor(te/Y)*Px,y:12+te%Y*Wd},se=g.useCallback(async()=>{try{await n.mkdir(`/home/${d}`).catch(()=>{}),await n.mkdir(p).catch(()=>{});const Q=await n.readdir(p),te=await Promise.all(Q.map(async le=>{const L=await n.stat(We(p,le)).then(P=>P.type).catch(()=>"file");return{id:`file:${le}`,name:le,icon:L==="dir"?Ct:co,kind:L==="dir"?"dir":"file",path:We(p,le)}}));y(te)}catch{y([])}},[n,d,p]);g.useEffect(()=>{new Audio("win98.mp3").play().catch(()=>{})},[]),g.useEffect(()=>{se()},[se,a]),g.useEffect(()=>{if(!v)return;const Q=()=>j(null);return document.addEventListener("click",Q),()=>document.removeEventListener("click",Q)},[v]),g.useEffect(()=>{localStorage.setItem(h,JSON.stringify(w))},[w,h]);const ge=Q=>{Q.kind==="app"?e({componentName:Q.componentName,name:Q.name,icon:Q.icon}):Q.kind==="dir"?n.spawn("explorer",{argv:[Q.path]}):/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i.test(Q.name)?n.spawn("imageviewer",{argv:[Q.path]}):n.spawn("notes",{argv:[Q.path]})},ie=(Q,te,le)=>{if(Q.button!==0)return;Q.stopPropagation(),j(null);const L=A.has(te.id),P=L?[...A]:[te.id];L||C(new Set([te.id]));const ne={};P.forEach(pe=>{const he=K.findIndex(be=>be.id===pe);ne[pe]=Z(pe,he>=0?he:le)}),N.current={ids:P,startMouse:{x:Q.clientX,y:Q.clientY},start:ne},document.addEventListener("mousemove",ue),document.addEventListener("mouseup",me)},ue=Q=>{const te=N.current;if(!te)return;const le=Q.clientX-te.startMouse.x,L=Q.clientY-te.startMouse.y;S(P=>{const ne={...P};for(const pe of te.ids){const he=te.start[pe];ne[pe]={x:Math.max(0,he.x+le),y:Math.max(0,he.y+L)}}return ne})},me=()=>{document.removeEventListener("mousemove",ue),document.removeEventListener("mouseup",me),N.current=null},B=Q=>{Q.button===0&&(C(new Set),j(null),z.current={x:Q.clientX,y:Q.clientY},document.addEventListener("mousemove",$),document.addEventListener("mouseup",T))},$=Q=>{if(!z.current)return;const te=Math.min(Q.clientX,z.current.x),le=Math.min(Q.clientY,z.current.y),L=Math.abs(Q.clientX-z.current.x),P=Math.abs(Q.clientY-z.current.y);E({x:te,y:le,w:L,h:P});const ne=new Set;K.forEach((pe,he)=>{const be=Z(pe.id,he);be.x+Px>te&&be.x<te+L&&be.y+Wd>le&&be.y<le+P&&ne.add(pe.id)}),C(ne)},T=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",T),z.current=null,E(null)},H=Q=>{const te=x.map(ne=>ne.name);if(!te.includes(Q))return Q;const le=Q.lastIndexOf("."),L=le>0?Q.slice(0,le):Q,P=le>0?Q.slice(le):"";for(let ne=2;;ne++)if(!te.includes(`${L} (${ne})${P}`))return`${L} (${ne})${P}`},W=async()=>{await n.mkdir(We(p,H("New Folder"))).catch(Q=>o({title:"Error",message:Q.code??"failed",type:"error"})),se()},ee=async()=>{await n.writeTextFile(We(p,H("New Text Document.txt")),""),se()},F=async Q=>{const le=(await n.readdir(Dx).catch(()=>[])).includes(Q.name)?`${Q.name}-${Date.now()%1e4}`:Q.name;await n.rename(Q.path,We(Dx,le)).catch(()=>{}),iw(le,Q.path)},M=async Q=>{await F(Q),se()},X=async()=>{const Q=x.filter(te=>A.has(te.id));for(const te of Q)await F(te);se()},ce=()=>S({});g.useEffect(()=>{const Q=te=>{var L;if(te.key!=="Delete")return;const le=(L=document.activeElement)==null?void 0:L.tagName;le==="INPUT"||le==="TEXTAREA"||x.some(P=>A.has(P.id))&&X()};return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[A,x]);const fe=(Q,te)=>{Q.preventDefault(),Q.stopPropagation(),te&&C(new Set([te.id])),j({x:Q.clientX,y:Q.clientY,item:te})};return l.jsxs("div",{ref:R,onMouseDown:B,onContextMenu:Q=>fe(Q,null),style:{position:"relative",width:"100%",height:`calc(100vh - ${Rx}px)`,overflow:"hidden"},children:[K.map((Q,te)=>{const le=Z(Q.id,te),L=A.has(Q.id);return l.jsxs("div",{onMouseDown:P=>ie(P,Q,te),onDoubleClick:()=>ge(Q),onContextMenu:P=>fe(P,Q),style:{position:"absolute",left:le.x,top:le.y,width:76,display:"flex",flexDirection:"column",alignItems:"center",padding:3,cursor:"pointer",border:L?"1px dotted #ffffff":"1px solid transparent"},children:[l.jsx("img",{src:Q.icon,alt:Q.name,style:{height:42,width:42,objectFit:"contain"},draggable:!1}),l.jsx("p",{style:{marginTop:2,padding:"0 3px",textAlign:"center",fontSize:12,color:"#fff",textShadow:L?"none":"1px 1px 0 rgba(0,0,0,0.6)",backgroundColor:L?"#000080":"transparent",wordBreak:"break-word"},children:Q.name})]},Q.id)}),k&&l.jsx("div",{style:{position:"fixed",left:k.x,top:k.y,width:k.w,height:k.h,border:"1px dotted #fff",background:"rgba(255,255,255,0.15)",pointerEvents:"none",zIndex:5}}),v&&(v.item?l.jsxs(_n,{onMouseDown:Q=>Q.stopPropagation(),style:{position:"fixed",left:v.x,top:v.y,width:150,zIndex:1e5},children:[l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>ge(v.item),children:"Open"}),v.item.kind!=="app"&&l.jsxs(l.Fragment,{children:[l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>M(v.item),children:"Delete"})]})]}):l.jsxs(_n,{onMouseDown:Q=>Q.stopPropagation(),style:{position:"fixed",left:v.x,top:v.y,width:180,zIndex:1e5},children:[l.jsx(Pe,{style:{cursor:"pointer"},onClick:W,children:"New Folder"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:ee,children:"New Text Document"}),l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:ce,children:"Arrange Icons"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:se,children:"Refresh"}),l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>o({title:"Display Properties",message:`VortexOS 2.0
Experimental Windows 95 simulation.`,type:"info"}),children:"Properties"})]}))]})},Fp=["terminal","explorer","browser"],Bp=e=>`vortex.quicklaunch.${e||"user"}`,Qf=new Set,j5=()=>Qf.forEach(e=>e());function Wp(e){const n=localStorage.getItem(Bp(e));if(n===null)return Fp;try{const o=JSON.parse(n);return Array.isArray(o)?o.filter(i=>typeof i=="string"):[]}catch{return[]}}function Mv(e,n){localStorage.setItem(Bp(e),JSON.stringify(n)),j5()}function zv(e,n){return Wp(e).includes(n)}function E5(e,n){const o=Wp(e);o.includes(n)||Mv(e,[...o,n])}function _v(e,n){Mv(e,Wp(e).filter(o=>o!==n))}function C5(e,n){zv(e,n)?_v(e,n):E5(e,n)}function $5(e){return g.useSyncExternalStore(n=>(Qf.add(n),()=>Qf.delete(n)),()=>{const n=localStorage.getItem(Bp(e))??JSON.stringify(Fp);return A5(n)})}let Ix="",Hd=Fp;function A5(e){if(e!==Ix){Ix=e;try{const n=JSON.parse(e);Hd=Array.isArray(n)?n.filter(o=>typeof o=="string"):[]}catch{Hd=[]}}return Hd}let Hp=!1;const qf=new Set,Fv=()=>qf.forEach(e=>e());function Bv(){Hp=!0,Fv()}function ql(){Hp=!1,Fv()}function T5(){return g.useSyncExternalStore(e=>(qf.add(e),()=>qf.delete(e)),()=>Hp)}const Wv="vortex.run.mru",R5=10;function Gf(){try{const e=JSON.parse(localStorage.getItem(Wv)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function D5(e){const n=e.trim();if(!n)return;const o=[n,...Gf().filter(i=>i!==n)].slice(0,R5);localStorage.setItem(Wv,JSON.stringify(o))}const Ud=40,P5=O.div`
    margin-left: auto;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    font-size: 12px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,Vd=O.button`
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
`,Kd=O.div`
    position: fixed;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 100001;
    padding: 8px;
    font-size: 12px;
`;function I5({muted:e}){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M2 6.5h3l4-3v11l-4-3H2z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),e?l.jsx("path",{d:"M12 6l4 6M16 6l-4 6",stroke:"#a00",strokeWidth:"1.5",strokeLinecap:"round"}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.5 6.5a3.5 3.5 0 0 1 0 5",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}),l.jsx("path",{d:"M13.5 5a6 6 0 0 1 0 8",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})]})}function N5(){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M9 2.5a3.5 3.5 0 0 0-3.5 3.5c0 4-1.5 5-1.5 5h10s-1.5-1-1.5-5A3.5 3.5 0 0 0 9 2.5z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.5 13.5a1.5 1.5 0 0 0 3 0",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round"})]})}function L5({connected:e}){const n=e?"#00c000":"#5a5a5a";return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1",y:"3",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"8",y:"9",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("path",{d:"M5.5 9.5v1.5h7",fill:"none",stroke:"#000",strokeWidth:"0.8"})]})}function O5(){const[e,n]=g.useState(()=>new Date);return g.useEffect(()=>{const o=setInterval(()=>n(new Date),1e4);return()=>clearInterval(o)},[]),e}function M5(e){let n=e.getHours();const o=n>=12?"PM":"AM";n=n%12||12;const i=String(e.getMinutes()).padStart(2,"0");return`${n}:${i} ${o}`}const z5=["January","February","March","April","May","June","July","August","September","October","November","December"],_5=["S","M","T","W","T","F","S"];function F5({today:e}){const n=e.getFullYear(),o=e.getMonth(),i=new Date(n,o,1).getDay(),a=new Date(n,o+1,0).getDate(),u=[];for(let d=0;d<i;d++)u.push(null);for(let d=1;d<=a;d++)u.push(d);return l.jsxs("div",{style:{width:196},children:[l.jsxs("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:6},children:[z5[o]," ",n]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,textAlign:"center"},children:[_5.map((d,p)=>l.jsx("div",{style:{fontWeight:"bold",color:"#000080",fontSize:11},children:d},p)),u.map((d,p)=>{const h=d===e.getDate();return l.jsx("div",{style:{padding:"2px 0",fontSize:11,background:h?"#000080":"transparent",color:h?"#fff":"#000"},children:d??""},p)})]})]})}const B5={info:"#000080",warning:"#806000",error:"#800000"};function W5({items:e}){return l.jsxs("div",{style:{width:260},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{fontWeight:"bold"},children:"Notifications"}),e.length>0&&l.jsx("button",{onClick:()=>D8(),style:{fontSize:11,cursor:"pointer",border:"1px solid #808080",background:"#c0c0c0"},children:"Clear"})]}),l.jsx("div",{style:{maxHeight:220,overflowY:"auto",background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080"},children:e.length===0?l.jsx("div",{style:{padding:12,color:"#666",textAlign:"center"},children:"No notifications"}):[...e].reverse().map(n=>l.jsxs("div",{style:{padding:"6px 8px",borderBottom:"1px solid #e0e0e0",display:"flex",gap:6},children:[n.icon&&l.jsx("img",{src:n.icon,alt:"",style:{width:16,height:16,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",color:B5[n.type]??"#000"},children:n.title}),l.jsx("div",{style:{color:"#000",wordBreak:"break-word"},children:n.body})]})]},n.id))})]})}const H5=({username:e})=>{const n=O5(),[o,i]=g.useState(null),a=g.useRef(null);g.useSyncExternalStore(P2,()=>`${bf()}|${kf()}`);const u=bf(),d=kf();g.useSyncExternalStore(Tp,()=>`${dx()}|${Wf().length}`);const p=dx(),h=Wf().length;g.useSyncExternalStore(kw,()=>String(zg().length));const x=zg();g.useEffect(()=>{if(!o)return;const w=A=>{var C;(C=a.current)!=null&&C.contains(A.target)||i(null)},S=A=>A.key==="Escape"&&i(null);return document.addEventListener("mousedown",w),document.addEventListener("keydown",S),()=>{document.removeEventListener("mousedown",w),document.removeEventListener("keydown",S)}},[o]);const y=w=>{Qo(),i(S=>S===w?null:w)};return l.jsxs(l.Fragment,{children:[l.jsxs(P5,{ref:a,className:"tray-clock",children:[l.jsx(Vd,{title:p?`Network: connected (${h} online)`:"Network: offline",onClick:()=>{Qo(),i(null)},children:l.jsx(L5,{connected:p})}),l.jsx(Vd,{title:d?"Volume: muted":`Volume: ${Math.round(u*100)}%`,onClick:()=>y("volume"),children:l.jsx(I5,{muted:d})}),l.jsx(Vd,{title:`Notifications (${x.length})`,onClick:()=>y("notifications"),children:l.jsx(N5,{})}),e&&l.jsx("span",{style:{opacity:.85},children:e}),l.jsx("span",{style:{cursor:"pointer"},onClick:()=>y("clock"),children:M5(n)})]}),o==="volume"&&Ft.createPortal(l.jsxs(Kd,{style:{right:8,bottom:Ud+6,width:96},onMouseDown:w=>w.stopPropagation(),children:[l.jsx("div",{style:{textAlign:"center",marginBottom:4},children:"Volume"}),l.jsx("div",{style:{display:"flex",justifyContent:"center",height:120},children:l.jsx(Py,{orientation:"vertical",size:"120px",min:0,max:100,step:1,value:Math.round(u*100),onChange:w=>mw(w/100)})}),l.jsx("div",{style:{marginTop:6},children:l.jsx(ao,{checked:d,onChange:()=>gw(!d),label:"Mute"})})]}),document.body),o==="clock"&&Ft.createPortal(l.jsx(Kd,{style:{right:8,bottom:Ud+6},onMouseDown:w=>w.stopPropagation(),children:l.jsx(F5,{today:n})}),document.body),o==="notifications"&&Ft.createPortal(l.jsx(Kd,{style:{right:8,bottom:Ud+6},onMouseDown:w=>w.stopPropagation(),children:l.jsx(W5,{items:x})}),document.body)]})},U5=40,V5=({process:e,minimized:n,children:o})=>{const[i,a]=g.useState(null),u=g.useRef(null),d=g.useRef(null),p=()=>{u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{var w;const y=(w=d.current)==null?void 0:w.firstElementChild;y&&a(y.getBoundingClientRect())},400)},h=()=>{u.current&&clearTimeout(u.current),u.current=null,a(null)},x=n?"Minimized":e.priority===0?"Active":"Running";return l.jsxs("span",{ref:d,style:{display:"contents"},onMouseEnter:p,onMouseLeave:h,onMouseDown:h,children:[o,i&&Ft.createPortal(l.jsx("div",{style:{position:"fixed",left:Math.max(4,Math.min(i.left,window.innerWidth-184)),bottom:U5+6,width:180,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",padding:8,zIndex:3e6,pointerEvents:"none",fontSize:12,color:"#000"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:e.icon,alt:"",style:{width:32,height:32,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),l.jsx("div",{style:{color:"#000080"},children:x})]})]})}),document.body)]})},Nx=({text:e,children:n})=>{const[o,i]=g.useState(null),a=g.useRef(null),u=p=>{const h=p.clientX,x=p.clientY;a.current&&clearTimeout(a.current),a.current=setTimeout(()=>i({x:h,y:x}),500)},d=()=>{a.current&&clearTimeout(a.current),a.current=null,i(null)};return l.jsxs("span",{style:{display:"contents"},onMouseEnter:u,onMouseLeave:d,onMouseDown:d,children:[n,o&&e&&Ft.createPortal(l.jsx("div",{style:{position:"fixed",left:o.x+12,top:o.y+18,background:"#ffffe1",border:"1px solid #000",padding:"1px 5px",fontSize:12,color:"#000",pointerEvents:"none",zIndex:3e6,whiteSpace:"nowrap",boxShadow:"1px 1px 1px rgba(0,0,0,0.3)"},children:e}),document.body)]})},or="/w95.png",Uo="/controlpanel.png",Yf=40,K5=O.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${Yf}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 4px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    z-index: 99999;
`,Q5=O.button`
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
`,Qd=new Map(Ir.map(e=>[e.exec,e])),q5=O.button`
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
`,G5=O.button`
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
`,Y5=[{name:"Terminal",icon:Pp,componentName:"terminal"},{name:"Explorer",icon:Ct,componentName:"explorer"},{name:"Notes",icon:co,componentName:"notes"},{name:"WordPad",icon:Cv,componentName:"wordpad"},{name:"GameCache",icon:Dp,componentName:"backlogger"},{name:"Network Neighborhood",icon:zp,componentName:"network"},{name:"WinPopup",icon:ys,componentName:"messenger"},{name:"Task Manager",icon:Rp,componentName:"task_manager"},{name:"Control Panel",icon:Uo,componentName:"control_panel"},{name:"Calculator",icon:Ip,componentName:"calculator"},{name:"Minesweeper",icon:Np,componentName:"minesweeper"},{name:"Solitaire",icon:Lp,componentName:"solitaire"},{name:"Snake",icon:Op,componentName:"snake"},{name:"FreeCell",icon:Mp,componentName:"freecell"},{name:"Clock",icon:Pa,componentName:"clock"},{name:"Paint",icon:Ia,componentName:"paint"}],X5=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),[a,u]=g.useState(!1),{changePriority:d,processes:p,addProcess:h,handleProceessLocationChange:x}=Tn(),{minimized:y,minimize:w,restore:S,sssStyle:A}=hn(),{username:C,logout:v}=ar(),j=sc(),k=C||"user",E=$5(k),R=g.useRef([]),N=()=>{const $=p.filter(T=>T.uuid&&!y.includes(T.uuid));$.length?(R.current=$.map(T=>T.uuid),$.forEach(T=>T.uuid&&w(T.uuid))):(R.current.forEach(T=>S(T)),R.current=[]),Qo()},z=$=>{const T=Qd.get($);T&&(h({name:T.name,icon:T.icon,componentName:$}),Qo())},K=$=>{if(!$)return;const T=$.getBoundingClientRect().top,H=window.innerHeight-Yf-T-8;$.style.maxHeight=`${Math.max(140,H)}px`,$.style.overflowY="auto"},Y=li(),[Z,se]=g.useState(null);g.useEffect(()=>{if(!Z)return;const $=()=>se(null);return document.addEventListener("click",$),()=>document.removeEventListener("click",$)},[Z]);const ge=()=>{p.forEach(($,T)=>{$.uuid&&(S($.uuid),x($.uuid,{x:340+T*34,y:230+T*34}))}),se(null)},ie=()=>{const $=p.length;if($){const T=Math.ceil(Math.sqrt($)),H=Math.ceil($/T),W=window.innerWidth/T,ee=(window.innerHeight-Yf)/H;p.forEach((F,M)=>{if(!F.uuid)return;const X=M%T,ce=Math.floor(M/T);S(F.uuid),x(F.uuid,{x:Math.round(X*W+W/2),y:Math.round(ce*ee+ee/2)})})}se(null)},ue=()=>{p.forEach($=>$.uuid&&w($.uuid)),se(null)};g.useEffect(()=>{if(!e)return;const $=()=>{n(!1),i(!1),u(!1)},T=H=>H.key==="Escape"&&$();return document.addEventListener("click",$),document.addEventListener("keydown",T),()=>{document.removeEventListener("click",$),document.removeEventListener("keydown",T)}},[e]);const me=$=>{h($),n(!1),i(!1)},B=$=>{const T=$.uuid;T&&(y.includes(T)?(S(T),d($,0)):$.priority===0?w(T):d($,0))};return l.jsxs(K5,{onClick:$=>$.stopPropagation(),onContextMenu:$=>{$.preventDefault(),$.stopPropagation(),se({x:$.clientX,y:$.clientY})},children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(Ke,{onClick:()=>{Qo(),n($=>!$),i(!1),u(!1)},active:e,style:{fontWeight:"bold",height:30,display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:or,alt:"",style:{height:20}}),"Start"]}),e&&l.jsxs("div",{style:{position:"absolute",bottom:"calc(100% + 3px)",left:0,display:"flex",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)"},children:[l.jsx("div",{style:{width:30,background:A?"linear-gradient(180deg, #ff2d95 0%, #6a1b9a 55%, #00e5d0 100%)":"linear-gradient(180deg, #00007a 0%, #000033 100%)",borderTop:"2px solid #dfdfdf",borderLeft:"2px solid #dfdfdf",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsxs("div",{style:{writingMode:"vertical-rl",transform:"rotate(180deg)",whiteSpace:"nowrap",color:"#fff",padding:"12px 0",display:"flex",alignItems:"center",gap:4},children:[l.jsx("span",{style:{fontWeight:400,letterSpacing:1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"Vortex"}),l.jsx("span",{style:{fontWeight:"bold",fontSize:20,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"98"})]})}),l.jsxs(_n,{style:{width:200,position:"static"},children:[l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[l.jsxs(Pe,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Ct,style:{width:20}})," Programs"]}),l.jsx("span",{children:"▸"})]}),o&&l.jsx(_n,{ref:K,style:{position:"absolute",left:"100%",top:0,width:220},children:Y5.filter($=>!j.has($.componentName)).map($=>l.jsxs(Pe,{style:{cursor:"pointer",justifyContent:"space-between"},onClick:()=>me($),onContextMenu:T=>{T.preventDefault(),T.stopPropagation(),C5(k,$.componentName)},title:"Right-click to pin/unpin to Quick Launch",children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:$.icon,style:{width:20}})," ",$.name]}),zv(k,$.componentName)&&l.jsx("span",{style:{color:"#000080"},children:"📌"})]},$.componentName))})]}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>me({name:"Explorer",icon:Ct,componentName:"explorer",argv:["/home/user/Documents"]}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Ct,style:{width:20}})," Documents"]})}),l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[l.jsxs(Pe,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Uo,style:{width:20}})," Settings"]}),l.jsx("span",{children:"▸"})]}),a&&l.jsxs(_n,{ref:K,style:{position:"absolute",left:"100%",top:0,width:220},children:[l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>me({name:"Control Panel",icon:Uo,componentName:"control_panel"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Uo,style:{width:20}})," Control Panel"]})}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>me({name:"Add/Remove Programs",icon:Uo,componentName:"add_remove"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Uo,style:{width:20}})," Add/Remove Programs"]})})]})]}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>me({name:"Find Files",icon:Vf,componentName:"find"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Vf,style:{width:20}})," Find"]})}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>me({name:"Help",icon:Kf,componentName:"help"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Kf,style:{width:20}})," Help"]})}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>{n(!1),Bv()},children:"Run..."}),l.jsx(cn,{}),l.jsxs(Pe,{style:{cursor:"pointer"},onClick:()=>{n(!1),v()},children:["Log Off ",C,"..."]}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>Y("/shutdown"),children:"Shut Down..."})]})]})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2,paddingLeft:4,borderLeft:"1px solid #808080",borderRight:"1px solid #808080",marginLeft:2,marginRight:2},children:[l.jsx(Nx,{text:"Show Desktop",children:l.jsx(q5,{onClick:N,"aria-label":"Show Desktop",children:l.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1.5",y:"2",width:"13",height:"9",rx:"0.5",fill:"#000080",stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"5.5",y:"11",width:"5",height:"1.5",fill:"#808080"}),l.jsx("rect",{x:"3.5",y:"12.5",width:"9",height:"1.5",fill:"#404040"})]})})}),E.filter($=>Qd.has($)&&!j.has($)).map($=>{const T=Qd.get($);return l.jsx(Nx,{text:T.name,children:l.jsx(G5,{onClick:()=>z($),onContextMenu:H=>{H.preventDefault(),H.stopPropagation(),_v(k,$)},"aria-label":T.name,title:T.name,children:l.jsx("img",{src:T.icon,style:{width:18,height:18}})})},$)})]}),l.jsx("div",{style:{display:"flex",flex:1,gap:3,overflow:"hidden",marginLeft:2},children:p.map($=>{const T=$.priority===0&&!y.includes($.uuid??"");return l.jsx(V5,{process:$,minimized:y.includes($.uuid??""),children:l.jsxs(Q5,{$pressed:T,onClick:()=>B($),children:[l.jsx("img",{src:$.icon,style:{width:18,height:18,flexShrink:0}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:$.name})]})},$.uuid)})}),l.jsx(H5,{username:C}),Z&&l.jsxs(_n,{style:{position:"fixed",left:Z.x,top:Z.y-112,width:200,zIndex:1e5},children:[l.jsx(Pe,{style:{cursor:"pointer"},onClick:ge,children:"Cascade Windows"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:ie,children:"Tile Windows"}),l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:ue,children:"Minimize All Windows"})]})]})};let Xf=[];const Jf=new Set,J5=()=>Jf.forEach(e=>e());function Hv(e){Xf=[...Xf,{kind:e.kind??"app",app:e.app,pid:e.pid,message:e.message,stack:e.stack,ts:Date.now()}].slice(-30),J5()}function Lx(){return Xf}function Z5(e){return Jf.add(e),()=>Jf.delete(e)}class eD extends G.Component{constructor(){super(...arguments);Ie(this,"state",{error:null,details:!1,stack:""})}static getDerivedStateFromError(o){return{error:o}}componentDidCatch(o,i){const a=`${o.stack??o.message}

Component stack:${i.componentStack??""}`;this.setState({stack:a}),Hv({app:this.props.appName,pid:this.props.pid,message:o.message,stack:a})}render(){var i;if(!this.state.error)return this.props.children;const{appName:o}=this.props;return l.jsx("div",{style:{padding:16,background:"#c0c0c0",height:"100%",boxSizing:"border-box",overflow:"auto",color:"#000"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",maxWidth:380,margin:"0 auto"},children:[l.jsx("div",{style:{background:"linear-gradient(90deg, #000080, #1084d0)",color:"#fff",fontWeight:"bold",padding:"2px 4px",fontSize:12},children:o}),l.jsxs("div",{style:{padding:14,fontSize:12,lineHeight:1.5},children:[l.jsx("p",{style:{margin:0},children:"This program has performed an illegal operation and will be shut down."}),l.jsx("p",{style:{margin:"8px 0 0"},children:"If the problem persists, contact the program vendor."}),this.state.details&&l.jsxs("pre",{style:{marginTop:12,padding:8,background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080",fontSize:10,fontFamily:"monospace",whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:160,overflow:"auto"},children:["DR. WATSON — application fault",`
`,"App: ",o,"  PID: ",((i=this.props.pid)==null?void 0:i.slice(0,8))??"—",`
`,this.state.error.message,`

`,this.state.stack]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:16},children:[l.jsx(qd,{onClick:this.props.onClose,children:"Close"}),l.jsx(qd,{onClick:()=>this.setState({error:null,details:!1}),children:"Ignore"}),l.jsxs(qd,{onClick:()=>this.setState(a=>({details:!a.details})),children:["Details ",this.state.details?"<<":">>"]})]})]})]})})}}const qd=({onClick:e,children:n})=>l.jsx("button",{onClick:e,style:{minWidth:75,height:23,fontSize:12,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",cursor:"pointer"},onMouseDown:o=>{o.currentTarget.style.borderColor="#808080 #ffffff #ffffff #808080"},onMouseUp:o=>{o.currentTarget.style.borderColor="#ffffff #808080 #808080 #ffffff"},children:n}),pa=40,tD=[{key:"n",dx:0,dy:-1,cursor:"ns-resize",box:{top:-3,left:10,right:10,height:7}},{key:"s",dx:0,dy:1,cursor:"ns-resize",box:{bottom:-3,left:10,right:10,height:7}},{key:"w",dx:-1,dy:0,cursor:"ew-resize",box:{left:-3,top:10,bottom:10,width:7}},{key:"e",dx:1,dy:0,cursor:"ew-resize",box:{right:-3,top:10,bottom:10,width:7}},{key:"nw",dx:-1,dy:-1,cursor:"nwse-resize",box:{left:-3,top:-3,width:14,height:14}},{key:"ne",dx:1,dy:-1,cursor:"nesw-resize",box:{right:-3,top:-3,width:14,height:14}},{key:"sw",dx:-1,dy:1,cursor:"nesw-resize",box:{left:-3,bottom:-3,width:14,height:14}},{key:"se",dx:1,dy:1,cursor:"nwse-resize",box:{right:-3,bottom:-3,width:14,height:14}}],Gl=22;function nD(e,n){const o=window.innerWidth,i=window.innerHeight-pa,a=e<=Gl,u=e>=o-Gl,d=n<=Gl,p=n>=i-Gl;return d&&a?{x:0,y:0,w:o/2,h:i/2}:d&&u?{x:o/2,y:0,w:o/2,h:i/2}:p&&a?{x:0,y:i/2,w:o/2,h:i/2}:p&&u?{x:o/2,y:i/2,w:o/2,h:i/2}:a?{x:0,y:0,w:o/2,h:i}:u?{x:o/2,y:0,w:o/2,h:i}:d?{x:0,y:0,w:o,h:i}:null}const rD=({process:e})=>{var fe,Q,te,le;const{changePriority:n,closeProcess:o,handleProceessLocationChange:i}=Tn(),{changeCursor:a,minimized:u,minimize:d}=hn(),[p,h]=g.useState({x:((fe=e.location)==null?void 0:fe.x)??0,y:((Q=e.location)==null?void 0:Q.y)??0}),[x,y]=g.useState(!1),[w,S]=g.useState(null),[A,C]=g.useState(!1),[v,j]=g.useState(!1),[k,E]=g.useState(!1),[R,N]=g.useState(null),z=g.useRef(null);g.useEffect(()=>{if(!k)return;const L=()=>E(!1);return document.addEventListener("click",L),()=>document.removeEventListener("click",L)},[k]);const K=g.useRef(null),Y=g.useRef(null),Z=g.useRef(null),se=e.priority===0,ge=!!e.uuid&&u.includes(e.uuid);g.useEffect(()=>{var L,P;x||h({x:((L=e.location)==null?void 0:L.x)??0,y:((P=e.location)==null?void 0:P.y)??0})},[(te=e.location)==null?void 0:te.x,(le=e.location)==null?void 0:le.y]),g.useEffect(()=>(x?(a("Grabbing.cur"),document.addEventListener("mousemove",ue),document.addEventListener("mouseup",me)):(a("arrow.cur"),document.removeEventListener("mousemove",ue),document.removeEventListener("mouseup",me)),()=>{document.removeEventListener("mousemove",ue),document.removeEventListener("mouseup",me)}),[x]);const ie=L=>{var ne;if(A)return;e.uuid&&n(e,0);const P=(ne=K.current)==null?void 0:ne.getBoundingClientRect();P&&(Y.current={mouseX:L.clientX,mouseY:L.clientY,left:P.left,top:P.top,w:P.width,h:P.height},S({x:P.left,y:P.top,w:P.width,h:P.height}),y(!0))},ue=L=>{if(!Y.current)return;const P=nD(L.clientX,L.clientY);if(Z.current=P,P)S(P);else{const ne=L.clientX-Y.current.mouseX,pe=L.clientY-Y.current.mouseY;S({x:Y.current.left+ne,y:Y.current.top+pe,w:Y.current.w,h:Y.current.h})}},me=L=>{y(!1);const P=Y.current,ne=Z.current;if(ne&&e.uuid){C(!1),N({w:ne.w,h:ne.h});const pe={x:Math.round(ne.x+ne.w/2),y:Math.round(ne.y+ne.h/2)};h(pe),i(e.uuid,pe)}else if(P&&e.uuid){let pe=P.left+(L.clientX-P.mouseX),he=P.top+(L.clientY-P.mouseY);pe=Math.min(Math.max(pe,80-P.w),window.innerWidth-80),he=Math.min(Math.max(he,0),window.innerHeight-pa-28);const be={x:Math.round(pe+P.w/2),y:Math.round(he+P.h/2)};h(be),i(e.uuid,be)}S(null),Z.current=null,Y.current=null},B=()=>{z2(),C(L=>!L)},$=()=>{if(M2(),!!e.uuid){if(A){d(e.uuid);return}j(!0),setTimeout(()=>{e.uuid&&d(e.uuid),j(!1)},150)}},T=L=>L.stopPropagation(),H=240,W=150,ee=L=>{const P=z.current;if(!P)return;const ne=L.clientX-P.mouseX,pe=L.clientY-P.mouseY;let he=P.w,be=P.h,_e=P.left,He=P.top;P.dx===1&&(he=Math.max(H,P.w+ne)),P.dx===-1&&(he=Math.max(H,P.w-ne),_e=P.left+(P.w-he)),P.dy===1&&(be=Math.max(W,P.h+pe)),P.dy===-1&&(be=Math.max(W,P.h-pe),He=P.top+(P.h-be)),N({w:he,h:be}),h({x:_e+he/2,y:He+be/2})},F=()=>{z.current=null,document.removeEventListener("mousemove",ee),document.removeEventListener("mouseup",F)},M=(L,P)=>ne=>{var he;if(A)return;ne.preventDefault(),ne.stopPropagation();const pe=(he=K.current)==null?void 0:he.getBoundingClientRect();pe&&(z.current={mouseX:ne.clientX,mouseY:ne.clientY,w:pe.width,h:pe.height,left:pe.left,top:pe.top,dx:L,dy:P},document.addEventListener("mousemove",ee),document.addEventListener("mouseup",F))},X=A?void 0:v?"winMinimize 150ms ease-in forwards":"winOpen 140ms ease-out",ce=A?{position:"fixed",top:0,left:0,width:"100vw",height:`calc(100vh - ${pa}px)`,transform:"none",zIndex:se?9999:e.priority+1,userSelect:"none",display:ge?"none":"flex",flexDirection:"column"}:{position:"absolute",top:`${p.y}px`,left:`${p.x}px`,transform:"translate(-50%, -50%)",zIndex:se?9999:e.priority+1,userSelect:"none",display:ge?"none":R?"flex":void 0,flexDirection:"column",animation:R?void 0:X,minWidth:240,minHeight:150,maxWidth:"100vw",maxHeight:`calc(100vh - ${pa}px)`,...R?{width:R.w,height:R.h}:{}};return l.jsxs(l.Fragment,{children:[l.jsxs(oi,{ref:K,onClick:()=>n(e,0),resizable:!A,className:"window",style:ce,children:[l.jsxs(ri,{onMouseDown:ie,onDoubleClick:B,className:"window-title",style:{display:"flex",alignItems:"center",justifyContent:"space-between",...Es(se)},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",overflow:"hidden",position:"relative"},children:[l.jsx("img",{src:e.icon,onMouseDown:L=>L.stopPropagation(),onClick:L=>{L.stopPropagation(),E(P=>!P)},onDoubleClick:L=>{L.stopPropagation(),e.uuid&&o(e.uuid)},style:{width:18,height:18,marginRight:4,cursor:"pointer"}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),k&&l.jsxs(_n,{style:{position:"absolute",left:0,top:"100%",width:150,zIndex:100002},onMouseDown:L=>L.stopPropagation(),children:[l.jsx(Pe,{disabled:!A,style:{cursor:A?"pointer":"default"},onClick:()=>C(!1),children:"Restore"}),l.jsx(Pe,{disabled:!0,children:"Move"}),l.jsx(Pe,{disabled:!0,children:"Size"}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:$,children:"Minimize"}),l.jsx(Pe,{disabled:A,style:{cursor:A?"default":"pointer"},onClick:()=>C(!0),children:"Maximize"}),l.jsx(cn,{}),l.jsx(Pe,{style:{cursor:"pointer"},onClick:()=>e.uuid&&o(e.uuid),children:"Close"})]})]}),l.jsxs("div",{style:{display:"flex",gap:2},onMouseDown:T,onClick:T,children:[l.jsx(Gd,{label:"Minimize",onClick:$,glyph:l.jsx("span",{style:{display:"block",width:8,height:2,background:"#000",marginTop:5}})}),l.jsx(Gd,{label:"Maximize",onClick:B,glyph:l.jsx("span",{style:{display:"block",width:9,height:8,border:"1px solid #000",borderTopWidth:2}})}),l.jsx(Gd,{label:"Close",onClick:()=>e.uuid&&o(e.uuid),glyph:l.jsx("span",{style:{fontWeight:"bold",fontSize:11,lineHeight:"10px"},children:"✕"})})]})]}),e.component?l.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",...A||R?{flex:1,minHeight:0,overflow:"auto"}:{}},children:l.jsx(d2,{pid:e.uuid??null,children:l.jsx(eD,{appName:e.name,pid:e.uuid??null,onClose:()=>e.uuid&&o(e.uuid),children:l.jsx(g.Suspense,{fallback:l.jsxs("div",{style:{padding:24,textAlign:"center",color:"#000"},children:["Loading ",e.name,"…"]}),children:G.createElement(e.component)})})})}):"",!A&&tD.map(L=>l.jsx("div",{onMouseDown:M(L.dx,L.dy),style:{position:"absolute",zIndex:20,cursor:L.cursor,...L.box}},L.key))]},e.uuid),w&&Ft.createPortal(l.jsx("div",{style:{position:"fixed",left:w.x,top:w.y,width:w.w,height:w.h,border:"2px dotted #fff",mixBlendMode:"difference",pointerEvents:"none",zIndex:100001}}),document.body)]})},Gd=({glyph:e,onClick:n,label:o})=>l.jsx(Ke,{"aria-label":o,onClick:n,style:{width:20,height:18,minWidth:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e}),oD=()=>{const{processes:e}=Tn();return l.jsx(l.Fragment,{children:e.map(n=>l.jsx(rD,{process:n},n.uuid))})},iD="/clouds.jpg",sD=O.div`
    position: fixed;
    inset: 0;
    background: url(${iD}) center / cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`,Ox=O.label`
    display: grid;
    grid-template-columns: 86px 1fr;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 13px;
`,lD=()=>{const{login:e,register:n}=ar(),[o,i]=g.useState("login"),[a,u]=g.useState(""),[d,p]=g.useState(""),[h,x]=g.useState(null),[y,w]=g.useState(!1),S=async C=>{if(C.preventDefault(),!(y||!a.trim()||!d)){w(!0),x(null);try{o==="login"?await e(a.trim(),d):await n(a.trim(),d)}catch(v){x(v instanceof Error?v.message:"Sign in failed."),w(!1)}}},A=()=>{i(C=>C==="login"?"register":"login"),x(null)};return l.jsx(sD,{children:l.jsxs(oi,{style:{width:360},children:[l.jsxs(ri,{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:or,alt:"",style:{width:18,height:18}}),l.jsx("span",{children:o==="login"?"Enter Network Password":"New VortexOS Account"})]}),l.jsx(Mr,{children:l.jsxs("form",{onSubmit:S,children:[l.jsx("p",{style:{marginTop:0,marginBottom:14,fontSize:13},children:o==="login"?"Type a user name and password to log on to VortexOS.":"Choose a user name and password to create your account."}),l.jsxs(Ox,{children:["User name:",l.jsx(ir,{value:a,onChange:C=>u(C.target.value),disabled:y,autoFocus:!0})]}),l.jsxs(Ox,{children:["Password:",l.jsx(ir,{type:"password",value:d,onChange:C=>p(C.target.value),disabled:y})]}),h&&l.jsx("p",{style:{color:"#aa0000",fontSize:12,margin:"4px 0 10px"},children:h}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:6},children:[l.jsx(Ke,{type:"submit",primary:!0,disabled:y||!a.trim()||!d,children:y?"Please wait…":o==="login"?"OK":"Create"}),l.jsx(Ke,{type:"button",onClick:A,disabled:y,children:o==="login"?"New user…":"Cancel"})]})]})})]})})},aD=()=>{const{alert:e}=Cs(),n=g.useRef(0);return g.useEffect(()=>(n.current=Hf().length,Tp(()=>{const o=Hf();for(let i=n.current;i<o.length;i++){const a=o[i];a.mine||(Ew()==="classic"?e({title:`Message from ${a.from}`,message:a.body,type:"info"}):R8({title:`Message from ${a.from}`,body:a.body,type:"info",icon:ys,action:{kind:"open-app",exec:"messenger",name:"WinPopup",icon:ys}}))}n.current=o.length})),[e]),null},cD=40,uD=6e3,dD=mt`
    from { transform: translateX(120%); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
`,fD=O.div`
    position: fixed;
    right: 8px;
    bottom: ${cD+8}px;
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
    z-index: 100000;
    pointer-events: none;
`,pD=O.div`
    width: 260px;
    background: #ffffe1;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    padding: 0;
    font-size: 12px;
    pointer-events: auto;
    animation: ${dD} 0.18s ease-out;
`,hD=O.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #000080, #1084d0);
    color: #fff;
    font-weight: bold;
    padding: 2px 4px;
`,mD={info:"#000080",warning:"#806000",error:"#800000"},gD=({toast:e,onOpenApp:n})=>{g.useEffect(()=>{bp();const a=setTimeout(()=>Sd(e.id),uD);return()=>clearTimeout(a)},[e.id]);const o=!!e.action,i=()=>{var a;((a=e.action)==null?void 0:a.kind)==="open-app"&&n(e.action.exec,e.action.name,e.action.icon),Sd(e.id)};return l.jsxs(pD,{$type:e.type,children:[l.jsxs(hD,{style:{background:`linear-gradient(90deg, ${mD[e.type]??"#000080"}, #1084d0)`},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:e.icon??or,alt:"",style:{width:14,height:14}}),e.title]}),l.jsx("button",{"aria-label":"Close notification",onClick:a=>{a.stopPropagation(),Sd(e.id)},style:{width:16,height:14,lineHeight:"10px",fontSize:11,border:"1px solid #fff",background:"#c0c0c0",color:"#000",cursor:"pointer"},children:"×"})]}),l.jsxs("div",{onClick:o?i:void 0,style:{padding:"8px 10px",cursor:o?"pointer":"default",color:"#000"},children:[e.body,o&&l.jsx("div",{style:{marginTop:6,color:"#000080",textDecoration:"underline",fontSize:11},children:"Click to open"})]})]})},xD=()=>{const{addProcess:e}=Tn();g.useSyncExternalStore(kw,()=>Mg().map(i=>i.id).join(","));const n=Mg(),o=(i,a,u)=>{e({name:a,icon:u,componentName:i})};return l.jsx(fD,{children:n.map(i=>l.jsx(gD,{toast:i,onOpenApp:o},i.id))})},yD=mt`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`,wD=O.span`
    animation: ${yD} 1s step-end infinite;
`,vD=O.div`
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
`,bD=O.div`
    background: #c0c0c0;
    color: #0000aa;
    display: inline-block;
    padding: 0 8px;
    font-weight: bold;
    margin: 0 auto 28px;
`,kD=()=>{const e=i5(),n=zr(),o=li();return g.useEffect(()=>{e&&Hv({kind:"kernel",app:"VortexOS Kernel",pid:null,message:e.message,stack:e.stack??""})},[e]),g.useEffect(()=>{if(!e)return;const i=()=>{n.clearPanic(),o("/"),window.location.assign("/")},a=u=>{if(u.preventDefault(),u.ctrlKey&&u.altKey&&(u.key==="Delete"||u.key==="Backspace")){i();return}e.recoverable?n.clearPanic():i()};return window.addEventListener("keydown",a,!0),()=>window.removeEventListener("keydown",a,!0)},[e,n,o]),e?l.jsxs(vD,{onClick:()=>n.clearPanic(),children:[l.jsx("div",{style:{textAlign:"center"},children:l.jsx(bD,{children:"VortexOS"})}),l.jsxs("p",{style:{margin:"0 0 18px"},children:["A fatal exception ",e.code," has occurred at ",e.address,". The current application will be terminated."]}),l.jsx("p",{style:{margin:"0 0 6px"},children:"*  Press any key to terminate the current application."}),l.jsxs("p",{style:{margin:"0 0 28px"},children:["*  Press CTRL+ALT+DEL again to restart your computer. You will",l.jsx("br",{}),"   lose any unsaved information in all applications."]}),e.syscall&&l.jsxs("p",{style:{margin:"0 0 28px",opacity:.7},children:["Faulting syscall: ",e.syscall," — ",e.message]}),l.jsxs("p",{style:{textAlign:"center",margin:0},children:["Press any key to continue ",l.jsx(wD,{children:"_"})]})]}):null};class SD extends G.Component{constructor(){super(...arguments);Ie(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(o,i){this.props.onFatal(o,`${o.stack??o.message}
${i.componentStack??""}`)}render(){return this.state.dead?null:this.props.children}}const jD=({children:e})=>{const n=zr();return l.jsx(SD,{onFatal:(o,i)=>n.panic({message:o.message,stack:i,recoverable:!1}),children:e})};function Mx(e,n){const o=e.toLowerCase(),i=n.toLowerCase();if(o==="")return 1;let a=0,u=0,d=-2;for(let p=0;p<i.length&&u<o.length;p++)i[p]===o[u]&&(a+=1,p===d+1&&(a+=3),(p===0||i[p-1]===" "||i[p-1]==="/"||i[p-1]==="-"||i[p-1]==="_")&&(a+=5),p===0&&(a+=2),d=p,u++);return u<o.length?null:(a-=i.length*.05,i.startsWith(o)&&(a+=4),i===o&&(a+=10),a)}function ED(e,n){if(n.trim()==="")return[...e].sort((i,a)=>i.name.localeCompare(a.name));const o=[];for(const i of e){const a=Math.max(Mx(n,i.name)??-1/0,(Mx(n,i.exec)??-1/0)-2);a>-1/0&&o.push({app:i,score:a})}return o.sort((i,a)=>a.score-i.score||i.app.name.localeCompare(a.app.name)),o.map(i=>i.app)}const CD=O.div`
    position: fixed;
    inset: 0;
    z-index: 1500000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 14vh;
    background: rgba(0, 0, 0, 0.25);
`,$D=O.div`
    width: 460px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
`,AD=O.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #808080;
`,TD=O.input`
    flex: 1;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 15px;
    padding: 4px 6px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    background: #fff;
    outline: none;
`,RD=O.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    background: ${e=>e.$sel?"#000080":"transparent"};
    color: ${e=>e.$sel?"#fff":"#000"};
`,DD=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(""),[a,u]=g.useState(0),d=g.useRef(null),{addProcess:p}=Tn(),{logout:h}=ar(),x=li(),y=sc();g.useEffect(()=>{const j=k=>{k.ctrlKey&&(k.code==="Space"||k.key===" ")&&(k.preventDefault(),n(E=>!E))};return window.addEventListener("keydown",j),()=>window.removeEventListener("keydown",j)},[]),g.useEffect(()=>{e&&(i(""),u(0),setTimeout(()=>{var j;return(j=d.current)==null?void 0:j.focus()},0))},[e]);const w=(j,k,E)=>p({name:k,icon:E,componentName:j}),S=g.useMemo(()=>{const j=Ir.filter(R=>!y.has(R.exec)).map(R=>({exec:R.exec,name:R.name,icon:R.icon,kind:"app",run:()=>w(R.exec,R.name,R.icon)})),k=[{exec:"run",name:"Run…",icon:or,kind:"action",run:()=>Bv()},{exec:"shutdown",name:"Shut Down…",icon:or,kind:"action",run:()=>x("/shutdown")},{exec:"logoff",name:"Log Off",icon:or,kind:"action",run:()=>h()}];return ED([...j,...k],o).slice(0,8)},[o,y]);if(g.useEffect(()=>u(0),[o]),!e)return null;const A=()=>n(!1),C=j=>{j&&(Qo(),A(),j.run())},v=j=>{if(j.key==="Escape")return A();j.key==="ArrowDown"?(j.preventDefault(),u(k=>Math.min(S.length-1,k+1))):j.key==="ArrowUp"?(j.preventDefault(),u(k=>Math.max(0,k-1))):j.key==="Enter"&&(j.preventDefault(),C(S[a]))};return Ft.createPortal(l.jsx(CD,{onMouseDown:A,children:l.jsxs($D,{onMouseDown:j=>j.stopPropagation(),children:[l.jsxs(AD,{children:[l.jsx("img",{src:or,alt:"",style:{width:22,height:22}}),l.jsx(TD,{ref:d,value:o,placeholder:"Search apps and actions…",onChange:j=>i(j.target.value),onKeyDown:v})]}),l.jsx("div",{style:{maxHeight:320,overflowY:"auto"},children:S.length===0?l.jsx("div",{style:{padding:12,color:"#555",fontSize:13},children:"No matches"}):S.map((j,k)=>l.jsxs(RD,{$sel:k===a,onMouseEnter:()=>u(k),onClick:()=>C(j),children:[l.jsx("img",{src:j.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1},children:j.name}),l.jsx("span",{style:{fontSize:11,opacity:.6},children:j.kind==="action"?"Action":"App"})]},`${j.kind}:${j.exec}`))}),l.jsxs("div",{style:{borderTop:"1px solid #808080",padding:"3px 8px",fontSize:11,color:"#444",display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"↑↓ navigate · Enter run · Esc close"}),l.jsx("span",{children:"Ctrl+Space"})]})]})}),document.body)},Zf=new Map;for(const e of Ir)Zf.set(e.exec.toLowerCase(),e),Zf.set(e.name.toLowerCase(),e);const PD=()=>{const e=T5(),n=Zt(),{alert:o}=Cs(),[i,a]=g.useState(""),u=g.useRef(null);if(g.useEffect(()=>{e&&(a(Gf()[0]??""),setTimeout(()=>{var p;return(p=u.current)==null?void 0:p.focus()},0))},[e]),!e)return null;const d=async()=>{var S;const p=i.trim();if(!p)return;D5(p),ql();const h=Zf.get(p.toLowerCase());if(h){n.spawn(h.exec);return}if(p.startsWith("/")||p.startsWith("~")){const A=p.startsWith("~")?p.replace(/^~/,"/home/user"):p;await sv(n,A)||o({title:"Run",message:`Cannot find '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"});return}const y=await new Pw(n).run(p),w=(S=y.output)==null?void 0:S.trim();y.code!==0?o({title:"Run",message:w||`Cannot find the file '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"}):w&&o({title:`Run: ${p}`,message:w,type:"info"})};return Ft.createPortal(l.jsx("div",{style:{position:"fixed",inset:0,zIndex:14e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.15)"},onMouseDown:ql,children:l.jsxs(oi,{style:{width:380},onMouseDown:p=>p.stopPropagation(),children:[l.jsxs(ri,{style:{display:"flex",alignItems:"center",gap:6,...Es(!0)},children:[l.jsx("img",{src:or,alt:"",style:{width:16,height:16}}),"Run"]}),l.jsxs(Mr,{children:[l.jsxs("div",{style:{display:"flex",gap:10,marginBottom:12},children:[l.jsx("img",{src:or,alt:"",style:{width:32,height:32}}),l.jsx("p",{style:{margin:0,fontSize:12,lineHeight:1.4},children:"Type the name of a program, folder, document, or command, and VortexOS will open it for you."})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[l.jsx("label",{style:{fontSize:12},children:"Open:"}),l.jsx("input",{ref:u,list:"run-mru",value:i,onChange:p=>a(p.target.value),onKeyDown:p=>{p.key==="Enter"&&d(),p.key==="Escape"&&ql()},style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:"3px 5px",border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff"}}),l.jsx("datalist",{id:"run-mru",children:[...Gf(),...iv()].map(p=>l.jsx("option",{value:p},p))})]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[l.jsx(Ke,{onClick:d,style:{minWidth:75},children:"OK"}),l.jsx(Ke,{onClick:ql,style:{minWidth:75},children:"Cancel"})]})]})]})}),document.body)},ID=()=>{var x;const{processes:e,changePriority:n}=Tn(),{restore:o}=hn(),[i,a]=g.useState(!1),[u,d]=g.useState(0),p=g.useRef([]),h=g.useRef(0);return g.useEffect(()=>{h.current=u},[u]),g.useEffect(()=>{const y=S=>{if(S.key!=="Tab"||!S.altKey){S.key==="Escape"&&i&&a(!1);return}const A=e.filter(C=>C.uuid);if(A.length!==0)if(S.preventDefault(),i){const C=p.current.length;d(v=>S.shiftKey?(v-1+C)%C:(v+1)%C)}else{const C=[...A].sort((j,k)=>(j.priority??0)-(k.priority??0));p.current=C,a(!0);const v=S.shiftKey?C.length-1:Math.min(1,C.length-1);d(v)}},w=S=>{if((S.key==="Alt"||!S.altKey)&&i){const A=p.current[h.current];A!=null&&A.uuid&&(o(A.uuid),n(A,0)),a(!1)}};return window.addEventListener("keydown",y),window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",y),window.removeEventListener("keyup",w)}},[e,i,n,o]),!i||p.current.length===0?null:l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e6,pointerEvents:"none"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#dfdfdf #000 #000 #dfdfdf",boxShadow:"3px 3px 0 rgba(0,0,0,0.4)",padding:16,maxWidth:"80vw"},children:[l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",maxWidth:560},children:p.current.map((y,w)=>l.jsx("div",{style:{width:72,height:72,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:4,border:w===u?"2px solid #000080":"2px solid transparent",background:w===u?"#000080":"transparent"},children:l.jsx("img",{src:y.icon,alt:"",style:{width:32,height:32,objectFit:"contain"}})},y.uuid))}),l.jsx("p",{style:{textAlign:"center",margin:"10px 0 0",fontSize:13},children:(x=p.current[u])==null?void 0:x.name})]})})},ND=()=>{const e=lc(),{flashBusy:n}=hn(),o=g.useRef(new Set(e.map(a=>a.pid))),i=g.useRef(!1);return g.useEffect(()=>{const a=new Set(e.map(u=>u.pid));if(i.current){let u=!1,d=!1;a.forEach(p=>{o.current.has(p)||(u=!0)}),o.current.forEach(p=>{a.has(p)||(d=!0)}),u&&(L2(),n()),d&&O2()}i.current=!0,o.current=a},[e,n]),null},LD=()=>{const{type:e,wait:n}=bw(),[o,i]=g.useState(!1),a=g.useRef(Date.now()),u=g.useRef(null);return g.useEffect(()=>{const d=()=>{a.current=Date.now(),i(x=>x&&!1)};window.addEventListener("mousemove",d),window.addEventListener("mousedown",d),window.addEventListener("keydown",d),window.addEventListener("wheel",d);const p=setInterval(()=>{const x=vw();x.type!=="none"&&Date.now()-a.current>x.wait*6e4&&i(!0)},1e3),h=C8(()=>i(!0));return()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mousedown",d),window.removeEventListener("keydown",d),window.removeEventListener("wheel",d),clearInterval(p),h()}},[n]),g.useEffect(()=>{if(!o)return;const d=u.current;if(!d)return;const p=d.getContext("2d");if(!p)return;let h=d.width=window.innerWidth,x=d.height=window.innerHeight;const y=()=>{h=d.width=window.innerWidth,x=d.height=window.innerHeight};window.addEventListener("resize",y);let w=0;const S=OD(e,()=>h,()=>x),A=()=>{S(p),w=requestAnimationFrame(A)};return p.fillStyle="#000",p.fillRect(0,0,h,x),A(),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",y)}},[o,e]),!o||e==="none"?null:l.jsx("canvas",{ref:u,style:{position:"fixed",inset:0,zIndex:5e6,background:"#000",cursor:"none"}})};function OD(e,n,o){return e==="mystify"?zD(n,o):e==="pipes"?_D(n,o):MD(n,o)}function MD(e,n){const i=Array.from({length:500},()=>({x:kn(-1,1),y:kn(-1,1),z:kn(.05,1)}));return a=>{const u=e(),d=n(),p=u/2,h=d/2;a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(0,0,u,d),a.fillStyle="#fff";for(const x of i){x.z-=.006,x.z<=.02&&(x.x=kn(-1,1),x.y=kn(-1,1),x.z=1);const y=p+x.x/x.z*p,w=h+x.y/x.z*h;if(y<0||y>u||w<0||w>d)continue;const S=(1-x.z)*2.5;a.globalAlpha=Math.min(1,1-x.z+.2),a.beginPath(),a.arc(y,w,S,0,Math.PI*2),a.fill()}a.globalAlpha=1}}function zD(e,n){const o=e(),i=n(),a=d=>({hue:d,pts:Array.from({length:4},()=>({x:kn(0,o),y:kn(0,i),vx:kn(-3,3),vy:kn(-3,3)})),trail:[]}),u=[a(190),a(320)];return d=>{const p=e(),h=n();d.fillStyle="rgba(0,0,0,0.12)",d.fillRect(0,0,p,h);for(const x of u){for(const y of x.pts)y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>p)&&(y.vx*=-1),(y.y<0||y.y>h)&&(y.vy*=-1);x.trail.push(x.pts.map(y=>({x:y.x,y:y.y}))),x.trail.length>14&&x.trail.shift(),x.trail.forEach((y,w)=>{d.strokeStyle=`hsl(${x.hue}, 90%, ${20+w/x.trail.length*50}%)`,d.lineWidth=1.5,d.beginPath(),y.forEach((S,A)=>A===0?d.moveTo(S.x,S.y):d.lineTo(S.x,S.y)),d.closePath(),d.stroke()}),x.hue=(x.hue+.3)%360}}}function _D(e,n){let i=0,a=0,u=0,d=kn(0,360),p=Math.ceil(e()/26),h=Math.ceil(n()/26);i=Math.floor(p/2),a=Math.floor(h/2);let x=0;return y=>{p=Math.ceil(e()/26),h=Math.ceil(n()/26);for(let w=0;w<2;w++){const S=i*26+13,A=a*26+26/2;Math.random()<.15&&(u=(u+(Math.random()<.5?1:3))%4);const[C,v]=[[1,0],[0,1],[-1,0],[0,-1]][u];i+=C,a+=v,(i<0||i>=p||a<0||a>=h||++x>1400)&&(i=Math.floor(Math.random()*p),a=Math.floor(Math.random()*h),d=kn(0,360),x=0);const j=i*26+26/2,k=a*26+26/2;y.strokeStyle=`hsl(${d}, 80%, 55%)`,y.lineWidth=8,y.lineCap="round",y.beginPath(),y.moveTo(S,A),y.lineTo(j,k),y.stroke(),y.fillStyle=`hsl(${d}, 80%, 65%)`,y.beginPath(),y.arc(j,k,5,0,Math.PI*2),y.fill()}}}function kn(e,n){return e+Math.random()*(n-e)}const FD=O.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 60000;
    display: flex;
    align-items: center;
    justify-content: center;
`,BD=O.div`
    width: 540px;
    max-width: 94vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 5px 5px 18px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
`,WD=O.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,HD=O.button`
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
`,UD=O.div`
    display: flex;
    height: 300px;
`,VD=O.div`
    width: 150px;
    flex-shrink: 0;
    background: linear-gradient(160deg, #1d0540 0%, #3a0a6b 45%, #00231f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 14px;
`,KD=O.div`
    text-align: center;
    color: #fff;
    font-weight: 800;
    font-size: 17px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #ff2d95, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,QD=O.div`
    flex: 1;
    padding: 18px 20px;
    background: #c0c0c0;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.55;
`,qD=O.h2`
    margin: 0 0 10px;
    font-size: 17px;
    color: #000080;
`,GD=O.button`
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
`,YD=O.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid #808080;
    box-shadow: inset 0 1px 0 #ffffff;
`,XD=O.div`
    display: flex;
    gap: 6px;
`,JD=O.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({$on:e})=>e?"#000080":"#808080"};
    box-shadow: ${({$on:e})=>e?"0 0 5px #1084d0":"none"};
`,Yd=O.button`
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
`,ZD=O.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,e4=()=>{const{username:e,isAuthenticated:n}=ar(),{addProcess:o}=Tn(),[i,a]=g.useState(!1),[u,d]=g.useState(0),[p,h]=g.useState(!0),x=g.useRef(!1),y=(v,j,k)=>o({name:j,icon:k,componentName:v}),w=[{title:`Welcome${e?`, ${e}`:""}!`,body:l.jsxs("p",{children:["This is ",l.jsx("b",{children:"VortexOS"})," — a desktop operating system that runs in your browser, built on a"," ",l.jsx("b",{children:"real microkernel"}),": a virtual filesystem, processes, a command shell and a window manager. No emulator, no clone. Let's take a quick tour."]})},{title:"The Start menu & desktop",body:l.jsxs("p",{children:["Everything launches from the ",l.jsx("b",{children:"Start"})," button. Drag desktop icons anywhere, right-click the desktop for a menu, and use the taskbar tray for volume, the clock and notifications."]})},{title:"Command Palette",body:l.jsxs("p",{children:["Press ",l.jsx("b",{children:"Ctrl + Space"})," anywhere to open the Command Palette — a fuzzy launcher for every app and system action. It's the fastest way to get around VortexOS."]}),action:{label:"Try it now",run:()=>{try{window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space",ctrlKey:!0,bubbles:!0}))}catch{}}}},{title:"Apps & games",body:l.jsxs("p",{children:["Real productivity apps — ",l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"}),", ",l.jsx("b",{children:"WordPad"})," — save to the filesystem. And a full games suite — ",l.jsx("b",{children:"Solitaire"}),", ",l.jsx("b",{children:"Minesweeper"}),", ",l.jsx("b",{children:"FreeCell"}),","," ",l.jsx("b",{children:"Snake"})," — with high scores synced to your account."]}),action:{label:"Play Solitaire",run:()=>y("solitaire","Solitaire","/solitaire.svg")}},{title:"Connect & personalize",body:l.jsxs("p",{children:["Other people are here too. Browse their shared files in ",l.jsx("b",{children:"Network Neighborhood"})," and chat over"," ",l.jsx("b",{children:"WinPopup"}),". Make it yours in ",l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the"," ",l.jsx("b",{children:"Serious Sam Style"})," vaporwave toggle."]}),action:{label:"Open Control Panel",run:()=>y("control_panel","Control Panel","/controlpanel.png")}},{title:"You're all set",body:l.jsxs("p",{children:["That's the tour. You can re-open it any time from ",l.jsx("b",{children:"Help ▸ Welcome Tour"}),". Welcome aboard — enjoy VortexOS.",l.jsx("br",{}),l.jsx("br",{}),l.jsx("i",{children:"— a creation by Serious Sam"})]})}],S=u===w.length-1;g.useEffect(()=>{!n||x.current||(x.current=!0,cv(e||"user")||setTimeout(()=>{d(0),a(!0)},700))},[n,e]),g.useEffect(()=>OT(()=>{d(0),a(!0)}),[]);const A=()=>{p&&RT(e||"user"),a(!1),da()&&setTimeout(()=>dv(),350)};if(!i)return null;const C=w[u];return Ft.createPortal(l.jsx(FD,{onMouseDown:v=>v.target===v.currentTarget&&A(),children:l.jsxs(BD,{role:"dialog","aria-label":"Welcome to VortexOS",children:[l.jsxs(WD,{style:Es(!0),children:[l.jsx("span",{children:"Welcome to VortexOS"}),l.jsx(HD,{onClick:A,title:"Close",children:"×"})]}),l.jsxs(UD,{children:[l.jsxs(VD,{children:[l.jsx(ei,{size:92,vapor:!0}),l.jsx(KD,{children:"VortexOS"})]}),l.jsxs(QD,{children:[l.jsx(qD,{children:C.title}),l.jsx("div",{children:C.body}),C.action&&l.jsx(GD,{onClick:C.action.run,children:C.action.label})]})]}),l.jsxs(YD,{children:[l.jsxs(ZD,{children:[l.jsx("input",{type:"checkbox",checked:p,onChange:v=>h(v.target.checked)}),"Don't show this again"]}),l.jsx(XD,{children:w.map((v,j)=>l.jsx(JD,{$on:j===u},j))}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(Yd,{onClick:()=>d(v=>Math.max(0,v-1)),disabled:u===0,children:"‹ Back"}),S?l.jsx(Yd,{$primary:!0,onClick:A,children:"Finish"}):l.jsx(Yd,{$primary:!0,onClick:()=>d(v=>Math.min(w.length-1,v+1)),children:"Next ›"})]})]})]})}),document.body)},t4=O.div`
    position: fixed;
    inset: 0;
    z-index: 59000;
    display: flex;
    align-items: center;
    justify-content: center;
`,n4=O.div`
    width: 440px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 4px 4px 14px rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
`,r4=O.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,o4=O.button`
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
`,i4=O.div`
    display: flex;
    gap: 14px;
    padding: 18px 16px;
`,s4=O.div`
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
`,l4=O.div`
    flex: 1;
    background: #ffffff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 12px 14px;
    min-height: 96px;
    font-size: 13px;
    line-height: 1.55;
`,a4=O.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 6px;
`,c4=O.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 12px;
`,u4=O.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,zx=O.button`
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
`,d4=()=>{const{username:e,isAuthenticated:n}=ar(),[o,i]=g.useState(!1),[a,u]=g.useState(0),[d,p]=g.useState(da()),h=g.useRef(!1);g.useEffect(()=>{!n||h.current||da()&&cv(e||"user")&&(h.current=!0,setTimeout(()=>{u(Math.floor(Date.now()/864e5)%Ko.length),p(!0),i(!0)},900))},[n,e]),g.useEffect(()=>MT(()=>{h.current=!0,p(da()),i(!0)}),[]);const x=y=>{p(y),IT(y)};return o?Ft.createPortal(l.jsx(t4,{children:l.jsxs(n4,{role:"dialog","aria-label":"Tip of the Day",children:[l.jsxs(r4,{style:Es(!0),children:[l.jsx("span",{children:"Tip of the Day"}),l.jsx(o4,{onClick:()=>i(!1),title:"Close",children:"×"})]}),l.jsxs(i4,{children:[l.jsx(s4,{children:"💡"}),l.jsxs(l4,{children:[l.jsx(a4,{children:"Did you know…"}),l.jsx("div",{children:NT(a)})]})]}),l.jsxs(c4,{children:[l.jsxs(u4,{children:[l.jsx("input",{type:"checkbox",checked:d,onChange:y=>x(y.target.checked)}),"Show tips at startup"]}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(zx,{onClick:()=>u(y=>y+1),children:"Next Tip"}),l.jsx(zx,{onClick:()=>i(!1),children:"Close"})]})]})]})}),document.body):null},f4=9e3,p4=6e3,h4=3e4,m4=75e3,g4=12e3,x4=mt`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
`,y4=mt`
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.12); }
`,w4=mt`
    0%, 92%, 100% { transform: scaleY(1); }
    96% { transform: scaleY(0.08); }
`,v4=mt`to { transform: rotate(360deg); }`,b4=mt`
    0% { transform: scale(0.6); opacity: 0; }
    60% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
`,k4=mt`
    0% { transform: scale(1); }
    40% { transform: scale(1.16) rotate(-4deg); }
    100% { transform: scale(1); }
`,S4=O.div`
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 58000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    pointer-events: none;
`,j4=O.div`
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
    animation: ${b4} 0.28s cubic-bezier(0.18, 0.9, 0.3, 1.2);
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
`,E4=O.div`
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.4px;
    margin-bottom: 3px;
    background: linear-gradient(90deg, #d6177f, #0aa89a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,C4=O.div`
    margin-top: 9px;
    display: flex;
    gap: 8px;
`,$4=O.button`
    font-size: 12px;
    padding: 3px 11px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,A4=O.button`
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
`,T4=O.div`
    pointer-events: auto;
    position: relative;
    width: 84px;
    height: 84px;
    cursor: pointer;
    animation: ${x4} 3.4s ease-in-out infinite;
    &:hover .vx-hide {
        opacity: 1;
    }
`,R4=O.div`
    width: 100%;
    height: 100%;
    /* re-keyed by $pop to retrigger the pop animation on each speak */
    animation: ${k4} 0.5s ease;
`,D4=O.div`
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #ff2d9577 0%, #00e5d000 70%);
    animation: ${y4} 2.6s ease-in-out infinite;
    pointer-events: none;
`,P4=O.button`
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
`,I4=O.g`
    transform-origin: 50px 46px;
    animation: ${w4} 4.5s infinite;
`,N4=O.path`
    transform-origin: 50px 50px;
    animation: ${v4} 7s linear infinite;
`,L4=()=>{const e=_T(),n=lc(),{addProcess:o}=Tn(),[i,a]=g.useState(null),[u,d]=g.useState(0),p=g.useRef(new Set),h=g.useRef(!1),x=g.useRef(0),y=g.useRef(0),w=g.useRef(Date.now()),S=g.useRef(Lx().length),A=g.useRef(!1),C=g.useRef(null),v=g.useCallback(k=>{y.current=Date.now(),a(k),d(E=>E+1),C.current&&clearTimeout(C.current),C.current=setTimeout(()=>a(null),f4)},[]),j=g.useCallback((k,E,R)=>o({name:E,icon:R,componentName:k}),[o]);return g.useEffect(()=>{!e||A.current||(A.current=!0,setTimeout(()=>v({text:KT()}),2200))},[e,v]),g.useEffect(()=>{if(!e)return;const k=()=>w.current=Date.now(),E=["mousemove","mousedown","keydown","wheel"];E.forEach(N=>window.addEventListener(N,k,{passive:!0}));const R=setInterval(()=>{const N=Date.now(),z=N-w.current>h4,K=N-y.current>m4;z&&K&&!document.hidden&&v({text:ax()})},g4);return()=>{E.forEach(N=>window.removeEventListener(N,k)),clearInterval(R)}},[e,v]),g.useEffect(()=>{if(e)return Z5(()=>{const k=Lx();if(k.length<=S.current){S.current=k.length;return}S.current=k.length,v({text:QT(),action:{label:"Task Manager",run:()=>j("task_manager","Task Manager","/task_manager.png")}})})},[e,v,j]),g.useEffect(()=>{if(e)return BT(k=>v(k))},[e,v]),g.useEffect(()=>{const k=new Set(n.map(E=>E.pid));if(h.current&&e){const E=n.find(N=>!p.current.has(N.pid)),R=Date.now();if(E&&R-x.current>p4){const N=VT(E.exec);N&&(x.current=R,v({text:N}))}}h.current=!0,p.current=k},[n,e,v]),e?l.jsxs(S4,{children:[i&&l.jsxs(j4,{role:"status",children:[l.jsx(E4,{children:"Vortex"}),l.jsx("div",{children:i.text}),i.action&&l.jsxs(C4,{children:[l.jsx($4,{onClick:()=>{i.action.run(),a(null)},children:i.action.label}),l.jsx(A4,{onClick:()=>a(null),children:"Dismiss"})]})]}),l.jsxs(T4,{title:"Vortex — click for a tip",onClick:()=>v({text:ax()}),children:[l.jsx(P4,{className:"vx-hide",title:"Hide Vortex (re-enable from Help)",onClick:k=>{k.stopPropagation(),hv(!1)},children:"×"}),l.jsx(D4,{}),l.jsx(R4,{$pop:u,children:l.jsxs("svg",{viewBox:"0 0 100 100",width:84,height:84,style:{display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"vx-body",cx:"42%",cy:"36%",r:"70%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff8fd4"}),l.jsx("stop",{offset:"45%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#3a0a6b"})]}),l.jsxs("linearGradient",{id:"vx-rim",x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#00e5d0"})]})]}),l.jsx("circle",{cx:"50",cy:"50",r:"33",fill:"url(#vx-body)",stroke:"url(#vx-rim)",strokeWidth:"3"}),l.jsx(N4,{d:"M50 30 A20 20 0 1 1 30 50",fill:"none",stroke:"#ffffff",strokeWidth:"3",strokeLinecap:"round",opacity:"0.55"}),l.jsxs(I4,{children:[l.jsx("ellipse",{cx:"40",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("ellipse",{cx:"60",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("circle",{cx:"41.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"61.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"43",cy:"45",r:"1.1",fill:"#fff"}),l.jsx("circle",{cx:"63",cy:"45",r:"1.1",fill:"#fff"})]}),l.jsx("path",{d:"M42 62 Q50 69 58 62",fill:"none",stroke:"#fff",strokeWidth:"2.6",strokeLinecap:"round",opacity:"0.85"})]})},u)]})]}):null},O4=5500,_x=["#ff2d95","#00e5d0","#a14bff","#ffd83a","#1084d0","#ff8fd4"],M4=mt`
    0% { transform: scale(0.4) rotate(-8deg); opacity: 0; }
    55% { transform: scale(1.12) rotate(2deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
`,z4=mt`to { filter: hue-rotate(360deg); }`,_4=O.div`
    position: fixed;
    inset: 0;
    z-index: 70000;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`,F4=O.div`
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
    animation: ${M4} 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.3), ${z4} 3s linear infinite;
`,B4=O.canvas`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
`,W4=mt`
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-130%); }
`,H4=O.div`
    position: fixed;
    inset: 0;
    z-index: 71000;
    background: radial-gradient(80% 80% at 50% 40%, #0a0118 0%, #000 100%);
    overflow: hidden;
    cursor: pointer;
`,U4=O.div`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    color: #eee;
    font-family: "Segoe UI", Tahoma, sans-serif;
    animation: ${W4} 22s linear infinite;
`,Xd=O.div`
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,V4=O.div`
    position: fixed;
    bottom: 18px;
    right: 22px;
    color: #888;
    font-size: 12px;
    font-family: "Segoe UI", sans-serif;
`,K4=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),a=g.useRef(null);return g.useEffect(()=>z8(()=>{qa("konami"),n(!0),uo(),FT({text:"🌀 You found the Konami code — VORTEX MODE engaged!"})}),[]),g.useEffect(()=>O8(()=>n(!0)),[]),g.useEffect(()=>M8(()=>{i(!0),uo()}),[]),g.useEffect(()=>{if(!e)return;const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width=window.innerWidth,h=u.height=window.innerHeight,x=Array.from({length:160},()=>({x:Math.random()*p,y:Math.random()*-h,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,size:5+Math.random()*7,color:_x[Math.floor(Math.random()*_x.length)],rot:Math.random()*Math.PI,vr:(Math.random()-.5)*.3}));let y=0;const w=()=>{d.clearRect(0,0,p,h),x.forEach(A=>{A.x+=A.vx,A.y+=A.vy,A.vy+=.04,A.rot+=A.vr,A.y>h+20&&(A.y=-20,A.x=Math.random()*p,A.vy=2+Math.random()*4),d.save(),d.translate(A.x,A.y),d.rotate(A.rot),d.fillStyle=A.color,d.fillRect(-A.size/2,-A.size/2,A.size,A.size*.6),d.restore()}),y=requestAnimationFrame(w)};w();const S=setTimeout(()=>n(!1),O4);return()=>{cancelAnimationFrame(y),clearTimeout(S)}},[e]),g.useEffect(()=>{if(!o)return;const u=d=>{d.key==="Escape"&&i(!1)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[o]),l.jsxs(l.Fragment,{children:[e&&Ft.createPortal(l.jsxs(_4,{children:[l.jsx(B4,{ref:a}),l.jsx(F4,{children:"VORTEX MODE"})]}),document.body),o&&Ft.createPortal(l.jsxs(H4,{onClick:()=>i(!1),children:[l.jsxs(U4,{children:[l.jsx("div",{style:{height:40}}),l.jsx(Xd,{children:"VortexOS 2.0"}),l.jsx("p",{style:{color:"#b9b9c8"},children:"Experimental Edition"}),l.jsx("div",{style:{height:40}}),l.jsx("p",{style:{color:"#888",fontSize:13},children:"a creation by"}),l.jsx(Xd,{style:{fontSize:52},children:"SERIOUS SAM"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontWeight:700,color:"#00e5d0"},children:"The Microkernel"}),l.jsx("p",{children:"Syscall ABI · Process scheduler"}),l.jsx("p",{children:"Per-process file descriptors"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#ff67c8"},children:"The System"}),l.jsx("p",{children:"Virtual File System · OPFS"}),l.jsx("p",{children:"Real shell & coreutils"}),l.jsx("p",{children:"Window manager · compositor-free"}),l.jsx("p",{children:"Multi-user accounts & networking"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#a14bff"},children:"The Desktop"}),l.jsx("p",{children:"Every app, hand-built"}),l.jsx("p",{children:"The games · The tray · The assistant"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontSize:18},children:"Built from scratch in a browser."}),l.jsx("p",{style:{fontSize:18,color:"#00e5d0"},children:"No emulator. No clone."}),l.jsx("div",{style:{height:50}}),l.jsx("p",{style:{color:"#888"},children:"Special thanks:"}),l.jsx("p",{style:{fontSize:20},children:"You, for exploring. 🌀"}),l.jsx("div",{style:{height:80}}),l.jsx(Xd,{style:{fontSize:30},children:"VortexOS"}),l.jsx("div",{style:{height:60}})]}),l.jsx(V4,{children:"Press Esc or click to close"})]}),document.body)]})},Q4=()=>{const{cursor:e,crt:n,busy:o}=hn(),{isAuthenticated:i}=ar(),a=r5();return g.useEffect(()=>{i&&a()},[i,a]),g.useEffect(()=>{if(i)return aR(),()=>cR()},[i]),i?l.jsxs("div",{style:{position:"fixed",inset:0,overflow:"hidden",cursor:o?"url(/win-cursor/loading.cur), wait":e},onContextMenu:u=>u.preventDefault(),children:[l.jsxs(jD,{children:[l.jsx(S5,{}),l.jsx(oD,{}),l.jsx(X5,{}),l.jsx(aD,{}),l.jsx(xD,{}),l.jsx(ID,{}),l.jsx(ND,{}),l.jsx(LD,{}),l.jsx(DD,{}),l.jsx(PD,{}),l.jsx(e4,{}),l.jsx(d4,{}),l.jsx(L4,{}),l.jsx(K4,{})]}),l.jsx(kD,{}),n&&l.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:1e6,background:"repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",mixBlendMode:"multiply"},children:l.jsx("div",{style:{position:"absolute",inset:0,boxShadow:"inset 0 0 150px rgba(0,0,0,0.55)"}})})]}):l.jsx(lD,{})},Uv=mt`from { opacity: 0 } to { opacity: 1 }`,Vv=O.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`,q4=O(Vv)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#008080"};
    animation: ${Uv} 0.4s ease;
`,G4=O.h1`
    margin: 22px 0 0;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #ffffff, #cfe9e9)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,Y4=O(Vv)`
    background: #000;
    gap: 34px;
`,X4=O.p`
    color: #ffa000;
    font-size: 26px;
    text-align: center;
    padding: 0 20px;
    text-shadow: 0 0 10px rgba(255, 160, 0, 0.35);
    animation: ${Uv} 0.6s ease;
`,J4=O.button`
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
`,Z4=()=>{const e=li(),{sssStyle:n}=hn(),o=n,[i,a]=g.useState("closing");return g.useEffect(()=>{_2();const u=setTimeout(()=>a("off"),2600);return()=>clearTimeout(u)},[]),i==="closing"?l.jsxs(q4,{$vapor:o,children:[l.jsx(ei,{size:120,vapor:o}),l.jsx(G4,{$vapor:o,children:"VortexOS"}),l.jsx("p",{style:{marginTop:26,fontSize:14,color:o?"#cfcfe0":"#fff"},children:"Please wait while VortexOS shuts down…"})]}):l.jsxs(Y4,{children:[l.jsx(X4,{children:"It's now safe to turn off your computer."}),l.jsx(J4,{onClick:()=>e("/"),children:"Restart"})]})},eP=()=>{const{wallpaper:e,sssStyle:n}=hn(),o=()=>e.image?e.type===2?{background:e.image}:{backgroundImage:`url('/${e.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:n?{backgroundImage:"url('/wallpapers/vw-5.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#1a0033"}:{background:"#008080"};return l.jsx("div",{style:{...o(),width:"100vw",height:"100vh",overflow:"hidden"},children:l.jsxs(hC,{children:[l.jsx(ta,{path:"/",element:l.jsx(v5,{})}),l.jsx(ta,{path:"/vortex",element:l.jsx(Q4,{})}),l.jsx(ta,{path:"/shutdown",element:l.jsx(Z4,{})})]})})},tP=({children:e})=>{const{theme:n}=hn();return l.jsx(qk,{theme:k8(n),children:e})},nP=Xk`
  ${Jk}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${SE}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${jE}') format('woff2');
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
`,rP=()=>l.jsxs(zC,{children:[l.jsx(nP,{}),l.jsx(n5,{children:l.jsx(E2,{children:l.jsx(tP,{children:l.jsx(s5,{children:l.jsx(H2,{children:l.jsx(iR,{children:l.jsx(eP,{})})})})})})})]});let Fx=!1;function oP(){Fx||(Fx=!0,Ue.interceptors.request.use(e=>{const n=ic();return n&&(e.headers=e.headers??{},e.headers.Authorization=`Bearer ${n}`),e}),Ue.interceptors.response.use(e=>e,e=>{var o,i;const n=((o=e==null?void 0:e.config)==null?void 0:o.url)??"";return((i=e==null?void 0:e.response)==null?void 0:i.status)===401&&!n.includes("/auth/")&&yv(),Promise.reject(e)}))}oP();F8();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});Yb.createRoot(document.getElementById("root")).render(l.jsx(g.StrictMode,{children:l.jsx(rP,{})}));export{bt as A,Ke as B,ao as C,vt as F,pn as M,Tj as P,Ey as S,ir as T,Mr as W,Ue as a,Cs as b,ze as c,O as d,Ae as e,fn as f,Tt as g,Oe as h,cf as i,l as j,ic as k,mt as m,g as r,hn as u};
