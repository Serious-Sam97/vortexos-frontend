const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Doom-Du8_EpbN.js","assets/DosPlayer-byEbJjwq.js","assets/DoomII-C1-TyDDt.js","assets/TombRaider-DhwnCACb.js","assets/Persia-DvOIBYsp.js"])))=>i.map(i=>d[i]);
var ek=Object.defineProperty;var tk=(e,n,o)=>n in e?ek(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o;var Ne=(e,n,o)=>tk(e,typeof n!="symbol"?n+"":n,o);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(a){if(a.ep)return;a.ep=!0;const u=o(a);fetch(a.href,u)}})();function An(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var id={exports:{}},Zi={},sd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function nk(){if(B0)return Pe;B0=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,b={};function C(O,J,ae){this.props=O,this.context=J,this.refs=b,this.updater=ae||$}C.prototype.isReactComponent={},C.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},C.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=C.prototype;function E(O,J,ae){this.props=O,this.context=J,this.refs=b,this.updater=ae||$}var T=E.prototype=new v;T.constructor=E,j(T,C.prototype),T.isPureReactComponent=!0;var N=Array.isArray,_=Object.prototype.hasOwnProperty,K={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function ee(O,J,ae){var ue,ge={},pe=null,xe=null;if(J!=null)for(ue in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(pe=""+J.key),J)_.call(J,ue)&&!X.hasOwnProperty(ue)&&(ge[ue]=J[ue]);var q=arguments.length-2;if(q===1)ge.children=ae;else if(1<q){for(var A=Array(q),V=0;V<q;V++)A[V]=arguments[V+2];ge.children=A}if(O&&O.defaultProps)for(ue in q=O.defaultProps,q)ge[ue]===void 0&&(ge[ue]=q[ue]);return{$$typeof:e,type:O,key:pe,ref:xe,props:ge,_owner:K.current}}function ie(O,J){return{$$typeof:e,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function me(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function fe(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ae){return J[ae]})}var he=/\/+/g;function le(O,J){return typeof O=="object"&&O!==null&&O.key!=null?fe(""+O.key):J.toString(36)}function z(O,J,ae,ue,ge){var pe=typeof O;(pe==="undefined"||pe==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(pe){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case e:case n:xe=!0}}if(xe)return xe=O,ge=ge(xe),O=ue===""?"."+le(xe,0):ue,N(ge)?(ae="",O!=null&&(ae=O.replace(he,"$&/")+"/"),z(ge,J,ae,"",function(V){return V})):ge!=null&&(me(ge)&&(ge=ie(ge,ae+(!ge.key||xe&&xe.key===ge.key?"":(""+ge.key).replace(he,"$&/")+"/")+O)),J.push(ge)),1;if(xe=0,ue=ue===""?".":ue+":",N(O))for(var q=0;q<O.length;q++){pe=O[q];var A=ue+le(pe,q);xe+=z(pe,J,ae,A,ge)}else if(A=S(O),typeof A=="function")for(O=A.call(O),q=0;!(pe=O.next()).done;)pe=pe.value,A=ue+le(pe,q++),xe+=z(pe,J,ae,A,ge);else if(pe==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function R(O,J,ae){if(O==null)return O;var ue=[],ge=0;return z(O,ue,"","",function(pe){return J.call(ae,pe,ge++)}),ue}function D(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=ae)},function(ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=ae)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var H={current:null},W={transition:null},B={ReactCurrentDispatcher:H,ReactCurrentBatchConfig:W,ReactCurrentOwner:K};function P(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:R,forEach:function(O,J,ae){R(O,function(){J.apply(this,arguments)},ae)},count:function(O){var J=0;return R(O,function(){J++}),J},toArray:function(O){return R(O,function(J){return J})||[]},only:function(O){if(!me(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Pe.Component=C,Pe.Fragment=o,Pe.Profiler=a,Pe.PureComponent=E,Pe.StrictMode=i,Pe.Suspense=h,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Pe.act=P,Pe.cloneElement=function(O,J,ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ue=j({},O.props),ge=O.key,pe=O.ref,xe=O._owner;if(J!=null){if(J.ref!==void 0&&(pe=J.ref,xe=K.current),J.key!==void 0&&(ge=""+J.key),O.type&&O.type.defaultProps)var q=O.type.defaultProps;for(A in J)_.call(J,A)&&!X.hasOwnProperty(A)&&(ue[A]=J[A]===void 0&&q!==void 0?q[A]:J[A])}var A=arguments.length-2;if(A===1)ue.children=ae;else if(1<A){q=Array(A);for(var V=0;V<A;V++)q[V]=arguments[V+2];ue.children=q}return{$$typeof:e,type:O.type,key:ge,ref:pe,props:ue,_owner:xe}},Pe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Pe.createElement=ee,Pe.createFactory=function(O){var J=ee.bind(null,O);return J.type=O,J},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(O){return{$$typeof:p,render:O}},Pe.isValidElement=me,Pe.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:D}},Pe.memo=function(O,J){return{$$typeof:m,type:O,compare:J===void 0?null:J}},Pe.startTransition=function(O){var J=W.transition;W.transition={};try{O()}finally{W.transition=J}},Pe.unstable_act=P,Pe.useCallback=function(O,J){return H.current.useCallback(O,J)},Pe.useContext=function(O){return H.current.useContext(O)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(O){return H.current.useDeferredValue(O)},Pe.useEffect=function(O,J){return H.current.useEffect(O,J)},Pe.useId=function(){return H.current.useId()},Pe.useImperativeHandle=function(O,J,ae){return H.current.useImperativeHandle(O,J,ae)},Pe.useInsertionEffect=function(O,J){return H.current.useInsertionEffect(O,J)},Pe.useLayoutEffect=function(O,J){return H.current.useLayoutEffect(O,J)},Pe.useMemo=function(O,J){return H.current.useMemo(O,J)},Pe.useReducer=function(O,J,ae){return H.current.useReducer(O,J,ae)},Pe.useRef=function(O){return H.current.useRef(O)},Pe.useState=function(O){return H.current.useState(O)},Pe.useSyncExternalStore=function(O,J,ae){return H.current.useSyncExternalStore(O,J,ae)},Pe.useTransition=function(){return H.current.useTransition()},Pe.version="18.3.1",Pe}var W0;function ap(){return W0||(W0=1,sd.exports=nk()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function rk(){if(H0)return Zi;H0=1;var e=ap(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(p,h,m){var y,w={},S=null,$=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&($=h.ref);for(y in h)i.call(h,y)&&!u.hasOwnProperty(y)&&(w[y]=h[y]);if(p&&p.defaultProps)for(y in h=p.defaultProps,h)w[y]===void 0&&(w[y]=h[y]);return{$$typeof:n,type:p,key:S,ref:$,props:w,_owner:a.current}}return Zi.Fragment=o,Zi.jsx=d,Zi.jsxs=d,Zi}var U0;function ok(){return U0||(U0=1,id.exports=rk()),id.exports}var l=ok(),g=ap();const Y=An(g);var Bl={},ld={exports:{}},Wt={},ad={exports:{}},cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function ik(){return V0||(V0=1,function(e){function n(W,B){var P=W.length;W.push(B);e:for(;0<P;){var O=P-1>>>1,J=W[O];if(0<a(J,B))W[O]=B,W[P]=J,P=O;else break e}}function o(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var B=W[0],P=W.pop();if(P!==B){W[0]=P;e:for(var O=0,J=W.length,ae=J>>>1;O<ae;){var ue=2*(O+1)-1,ge=W[ue],pe=ue+1,xe=W[pe];if(0>a(ge,P))pe<J&&0>a(xe,ge)?(W[O]=xe,W[pe]=P,O=pe):(W[O]=ge,W[ue]=P,O=ue);else if(pe<J&&0>a(xe,P))W[O]=xe,W[pe]=P,O=pe;else break e}}return B}function a(W,B){var P=W.sortIndex-B.sortIndex;return P!==0?P:W.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();e.unstable_now=function(){return d.now()-p}}var h=[],m=[],y=1,w=null,S=3,$=!1,j=!1,b=!1,C=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(W){for(var B=o(m);B!==null;){if(B.callback===null)i(m);else if(B.startTime<=W)i(m),B.sortIndex=B.expirationTime,n(h,B);else break;B=o(m)}}function N(W){if(b=!1,T(W),!j)if(o(h)!==null)j=!0,D(_);else{var B=o(m);B!==null&&H(N,B.startTime-W)}}function _(W,B){j=!1,b&&(b=!1,v(ee),ee=-1),$=!0;var P=S;try{for(T(B),w=o(h);w!==null&&(!(w.expirationTime>B)||W&&!fe());){var O=w.callback;if(typeof O=="function"){w.callback=null,S=w.priorityLevel;var J=O(w.expirationTime<=B);B=e.unstable_now(),typeof J=="function"?w.callback=J:w===o(h)&&i(h),T(B)}else i(h);w=o(h)}if(w!==null)var ae=!0;else{var ue=o(m);ue!==null&&H(N,ue.startTime-B),ae=!1}return ae}finally{w=null,S=P,$=!1}}var K=!1,X=null,ee=-1,ie=5,me=-1;function fe(){return!(e.unstable_now()-me<ie)}function he(){if(X!==null){var W=e.unstable_now();me=W;var B=!0;try{B=X(!0,W)}finally{B?le():(K=!1,X=null)}}else K=!1}var le;if(typeof E=="function")le=function(){E(he)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,R=z.port2;z.port1.onmessage=he,le=function(){R.postMessage(null)}}else le=function(){C(he,0)};function D(W){X=W,K||(K=!0,le())}function H(W,B){ee=C(function(){W(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){j||$||(j=!0,D(_))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ie=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return S},e.unstable_getFirstCallbackNode=function(){return o(h)},e.unstable_next=function(W){switch(S){case 1:case 2:case 3:var B=3;break;default:B=S}var P=S;S=B;try{return W()}finally{S=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,B){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var P=S;S=W;try{return B()}finally{S=P}},e.unstable_scheduleCallback=function(W,B,P){var O=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?O+P:O):P=O,W){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=P+J,W={id:y++,callback:B,priorityLevel:W,startTime:P,expirationTime:J,sortIndex:-1},P>O?(W.sortIndex=P,n(m,W),o(h)===null&&W===o(m)&&(b?(v(ee),ee=-1):b=!0,H(N,P-O))):(W.sortIndex=J,n(h,W),j||$||(j=!0,D(_))),W},e.unstable_shouldYield=fe,e.unstable_wrapCallback=function(W){var B=S;return function(){var P=S;S=B;try{return W.apply(this,arguments)}finally{S=P}}}}(cd)),cd}var K0;function sk(){return K0||(K0=1,ad.exports=ik()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function lk(){if(Q0)return Wt;Q0=1;var e=ap(),n=sk();function o(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function u(t,r){d(t,r),d(t+"Capture",r)}function d(t,r){for(a[t]=r,t=0;t<r.length;t++)i.add(r[t])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function S(t){return h.call(w,t)?!0:h.call(y,t)?!1:m.test(t)?w[t]=!0:(y[t]=!0,!1)}function $(t,r,s,c){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j(t,r,s,c){if(r===null||typeof r>"u"||$(t,r,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(t,r,s,c,f,x,k){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=t,this.type=r,this.sanitizeURL=x,this.removeEmptyString=k}var C={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){C[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var r=t[0];C[r]=new b(r,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){C[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){C[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){C[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){C[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){C[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){C[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){C[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function E(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var r=t.replace(v,E);C[r]=new b(r,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var r=t.replace(v,E);C[r]=new b(r,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var r=t.replace(v,E);C[r]=new b(r,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){C[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),C.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){C[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function T(t,r,s,c){var f=C.hasOwnProperty(r)?C[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(j(r,s,f,c)&&(s=null),c||f===null?S(r)&&(s===null?t.removeAttribute(r):t.setAttribute(r,""+s)):f.mustUseProperty?t[f.propertyName]=s===null?f.type===3?!1:"":s:(r=f.attributeName,c=f.attributeNamespace,s===null?t.removeAttribute(r):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,c?t.setAttributeNS(c,r,s):t.setAttribute(r,s))))}var N=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),K=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),ee=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),me=Symbol.for("react.provider"),fe=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),W=Symbol.iterator;function B(t){return t===null||typeof t!="object"?null:(t=W&&t[W]||t["@@iterator"],typeof t=="function"?t:null)}var P=Object.assign,O;function J(t){if(O===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+t}var ae=!1;function ue(t,r){if(!t||ae)return"";ae=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(G){var c=G}Reflect.construct(t,[],r)}else{try{r.call()}catch(G){c=G}t.call(r.prototype)}else{try{throw Error()}catch(G){c=G}t()}}catch(G){if(G&&c&&typeof G.stack=="string"){for(var f=G.stack.split(`
`),x=c.stack.split(`
`),k=f.length-1,I=x.length-1;1<=k&&0<=I&&f[k]!==x[I];)I--;for(;1<=k&&0<=I;k--,I--)if(f[k]!==x[I]){if(k!==1||I!==1)do if(k--,I--,0>I||f[k]!==x[I]){var M=`
`+f[k].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=k&&0<=I);break}}}finally{ae=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?J(t):""}function ge(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=ue(t.type,!1),t;case 11:return t=ue(t.type.render,!1),t;case 1:return t=ue(t.type,!0),t;default:return""}}function pe(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case K:return"Portal";case ie:return"Profiler";case ee:return"StrictMode";case le:return"Suspense";case z:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fe:return(t.displayName||"Context")+".Consumer";case me:return(t._context.displayName||"Context")+".Provider";case he:var r=t.render;return t=t.displayName,t||(t=r.displayName||r.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case R:return r=t.displayName||null,r!==null?r:pe(t.type)||"Memo";case D:r=t._payload,t=t._init;try{return pe(t(r))}catch{}}return null}function xe(t){var r=t.type;switch(t.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=r.render,t=t.displayName||t.name||"",r.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(r);case 8:return r===ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function q(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A(t){var r=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function V(t){var r=A(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,r),c=""+t[r];if(!t.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,x=s.set;return Object.defineProperty(t,r,{configurable:!0,get:function(){return f.call(this)},set:function(k){c=""+k,x.call(this,k)}}),Object.defineProperty(t,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(k){c=""+k},stopTracking:function(){t._valueTracker=null,delete t[r]}}}}function te(t){t._valueTracker||(t._valueTracker=V(t))}function ne(t){if(!t)return!1;var r=t._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return t&&(c=A(t)?t.checked?"true":"false":t.value),t=c,t!==s?(r.setValue(t),!0):!1}function ce(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function je(t,r){var s=r.checked;return P({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function Re(t,r){var s=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;s=q(r.value!=null?r.value:s),t._wrapperState={initialChecked:c,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _e(t,r){r=r.checked,r!=null&&T(t,"checked",r,!1)}function lt(t,r){_e(t,r);var s=q(r.value),c=r.type;if(s!=null)c==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}r.hasOwnProperty("value")?sn(t,r.type,s):r.hasOwnProperty("defaultValue")&&sn(t,r.type,q(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(t.defaultChecked=!!r.defaultChecked)}function In(t,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+t._wrapperState.initialValue,s||r===t.value||(t.value=r),t.defaultValue=r}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function sn(t,r,s){(r!=="number"||ce(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var qn=Array.isArray;function Pn(t,r,s,c){if(t=t.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=r.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&c&&(t[s].defaultSelected=!0)}else{for(s=""+q(s),r=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}r!==null||t[f].disabled||(r=t[f])}r!==null&&(r.selected=!0)}}function Gn(t,r){if(r.dangerouslySetInnerHTML!=null)throw Error(o(91));return P({},r,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hi(t,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(o(92));if(qn(s)){if(1<s.length)throw Error(o(93));s=s[0]}r=s}r==null&&(r=""),s=r}t._wrapperState={initialValue:q(s)}}function mc(t,r){var s=q(r.value),c=q(r.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),r.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),c!=null&&(t.defaultValue=""+c)}function Zp(t){var r=t.textContent;r===t._wrapperState.initialValue&&r!==""&&r!==null&&(t.value=r)}function eh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,r){return t==null||t==="http://www.w3.org/1999/xhtml"?eh(r):t==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ps,th=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,c,f){MSApp.execUnsafeLocalFunction(function(){return t(r,s,c,f)})}:t}(function(t,r){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=r;else{for(Ps=Ps||document.createElement("div"),Ps.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ps.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;r.firstChild;)t.appendChild(r.firstChild)}});function mi(t,r){if(r){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=r;return}}t.textContent=r}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i1=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(t){i1.forEach(function(r){r=r+t.charAt(0).toUpperCase()+t.substring(1),gi[r]=gi[t]})});function nh(t,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||gi.hasOwnProperty(t)&&gi[t]?(""+r).trim():r+"px"}function rh(t,r){t=t.style;for(var s in r)if(r.hasOwnProperty(s)){var c=s.indexOf("--")===0,f=nh(s,r[s],c);s==="float"&&(s="cssFloat"),c?t.setProperty(s,f):t[s]=f}}var s1=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xc(t,r){if(r){if(s1[t]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(o(137,t));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(o(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(o(61))}if(r.style!=null&&typeof r.style!="object")throw Error(o(62))}}function yc(t,r){if(t.indexOf("-")===-1)return typeof r.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=null;function vc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,wo=null,vo=null;function oh(t){if(t=zi(t)){if(typeof bc!="function")throw Error(o(280));var r=t.stateNode;r&&(r=nl(r),bc(t.stateNode,t.type,r))}}function ih(t){wo?vo?vo.push(t):vo=[t]:wo=t}function sh(){if(wo){var t=wo,r=vo;if(vo=wo=null,oh(t),r)for(t=0;t<r.length;t++)oh(r[t])}}function lh(t,r){return t(r)}function ah(){}var kc=!1;function ch(t,r,s){if(kc)return t(r,s);kc=!0;try{return lh(t,r,s)}finally{kc=!1,(wo!==null||vo!==null)&&(ah(),sh())}}function xi(t,r){var s=t.stateNode;if(s===null)return null;var c=nl(s);if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(o(231,r,typeof s));return s}var Sc=!1;if(p)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Sc=!1}function l1(t,r,s,c,f,x,k,I,M){var G=Array.prototype.slice.call(arguments,3);try{r.apply(s,G)}catch(oe){this.onError(oe)}}var wi=!1,Ns=null,Ls=!1,jc=null,a1={onError:function(t){wi=!0,Ns=t}};function c1(t,r,s,c,f,x,k,I,M){wi=!1,Ns=null,l1.apply(a1,arguments)}function u1(t,r,s,c,f,x,k,I,M){if(c1.apply(this,arguments),wi){if(wi){var G=Ns;wi=!1,Ns=null}else throw Error(o(198));Ls||(Ls=!0,jc=G)}}function Hr(t){var r=t,s=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,r.flags&4098&&(s=r.return),t=r.return;while(t)}return r.tag===3?s:null}function uh(t){if(t.tag===13){var r=t.memoizedState;if(r===null&&(t=t.alternate,t!==null&&(r=t.memoizedState)),r!==null)return r.dehydrated}return null}function dh(t){if(Hr(t)!==t)throw Error(o(188))}function d1(t){var r=t.alternate;if(!r){if(r=Hr(t),r===null)throw Error(o(188));return r!==t?null:t}for(var s=t,c=r;;){var f=s.return;if(f===null)break;var x=f.alternate;if(x===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===x.child){for(x=f.child;x;){if(x===s)return dh(f),t;if(x===c)return dh(f),r;x=x.sibling}throw Error(o(188))}if(s.return!==c.return)s=f,c=x;else{for(var k=!1,I=f.child;I;){if(I===s){k=!0,s=f,c=x;break}if(I===c){k=!0,c=f,s=x;break}I=I.sibling}if(!k){for(I=x.child;I;){if(I===s){k=!0,s=x,c=f;break}if(I===c){k=!0,c=x,s=f;break}I=I.sibling}if(!k)throw Error(o(189))}}if(s.alternate!==c)throw Error(o(190))}if(s.tag!==3)throw Error(o(188));return s.stateNode.current===s?t:r}function fh(t){return t=d1(t),t!==null?ph(t):null}function ph(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var r=ph(t);if(r!==null)return r;t=t.sibling}return null}var hh=n.unstable_scheduleCallback,mh=n.unstable_cancelCallback,f1=n.unstable_shouldYield,p1=n.unstable_requestPaint,ot=n.unstable_now,h1=n.unstable_getCurrentPriorityLevel,Cc=n.unstable_ImmediatePriority,gh=n.unstable_UserBlockingPriority,Ms=n.unstable_NormalPriority,m1=n.unstable_LowPriority,xh=n.unstable_IdlePriority,Os=null,Nn=null;function g1(t){if(Nn&&typeof Nn.onCommitFiberRoot=="function")try{Nn.onCommitFiberRoot(Os,t,void 0,(t.current.flags&128)===128)}catch{}}var xn=Math.clz32?Math.clz32:w1,x1=Math.log,y1=Math.LN2;function w1(t){return t>>>=0,t===0?32:31-(x1(t)/y1|0)|0}var zs=64,_s=4194304;function vi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fs(t,r){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes,k=s&268435455;if(k!==0){var I=k&~f;I!==0?c=vi(I):(x&=k,x!==0&&(c=vi(x)))}else k=s&~f,k!==0?c=vi(k):x!==0&&(c=vi(x));if(c===0)return 0;if(r!==0&&r!==c&&!(r&f)&&(f=c&-c,x=r&-r,f>=x||f===16&&(x&4194240)!==0))return r;if(c&4&&(c|=s&16),r=t.entangledLanes,r!==0)for(t=t.entanglements,r&=c;0<r;)s=31-xn(r),f=1<<s,c|=t[s],r&=~f;return c}function v1(t,r){switch(t){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b1(t,r){for(var s=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,x=t.pendingLanes;0<x;){var k=31-xn(x),I=1<<k,M=f[k];M===-1?(!(I&s)||I&c)&&(f[k]=v1(I,r)):M<=r&&(t.expiredLanes|=I),x&=~I}}function Ec(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yh(){var t=zs;return zs<<=1,!(zs&4194240)&&(zs=64),t}function $c(t){for(var r=[],s=0;31>s;s++)r.push(t);return r}function bi(t,r,s){t.pendingLanes|=r,r!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,r=31-xn(r),t[r]=s}function k1(t,r){var s=t.pendingLanes&~r;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=r,t.mutableReadLanes&=r,t.entangledLanes&=r,r=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<s;){var f=31-xn(s),x=1<<f;r[f]=0,c[f]=-1,t[f]=-1,s&=~x}}function Tc(t,r){var s=t.entangledLanes|=r;for(t=t.entanglements;s;){var c=31-xn(s),f=1<<c;f&r|t[c]&r&&(t[c]|=r),s&=~f}}var We=0;function wh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vh,Ac,bh,kh,Sh,Rc=!1,Bs=[],dr=null,fr=null,pr=null,ki=new Map,Si=new Map,hr=[],S1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(t,r){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":pr=null;break;case"pointerover":case"pointerout":ki.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(r.pointerId)}}function ji(t,r,s,c,f,x){return t===null||t.nativeEvent!==x?(t={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:x,targetContainers:[f]},r!==null&&(r=zi(r),r!==null&&Ac(r)),t):(t.eventSystemFlags|=c,r=t.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),t)}function j1(t,r,s,c,f){switch(r){case"focusin":return dr=ji(dr,t,r,s,c,f),!0;case"dragenter":return fr=ji(fr,t,r,s,c,f),!0;case"mouseover":return pr=ji(pr,t,r,s,c,f),!0;case"pointerover":var x=f.pointerId;return ki.set(x,ji(ki.get(x)||null,t,r,s,c,f)),!0;case"gotpointercapture":return x=f.pointerId,Si.set(x,ji(Si.get(x)||null,t,r,s,c,f)),!0}return!1}function Ch(t){var r=Ur(t.target);if(r!==null){var s=Hr(r);if(s!==null){if(r=s.tag,r===13){if(r=uh(s),r!==null){t.blockedOn=r,Sh(t.priority,function(){bh(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ws(t){if(t.blockedOn!==null)return!1;for(var r=t.targetContainers;0<r.length;){var s=Ic(t.domEventName,t.eventSystemFlags,r[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var c=new s.constructor(s.type,s);wc=c,s.target.dispatchEvent(c),wc=null}else return r=zi(s),r!==null&&Ac(r),t.blockedOn=s,!1;r.shift()}return!0}function Eh(t,r,s){Ws(t)&&s.delete(r)}function C1(){Rc=!1,dr!==null&&Ws(dr)&&(dr=null),fr!==null&&Ws(fr)&&(fr=null),pr!==null&&Ws(pr)&&(pr=null),ki.forEach(Eh),Si.forEach(Eh)}function Ci(t,r){t.blockedOn===r&&(t.blockedOn=null,Rc||(Rc=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,C1)))}function Ei(t){function r(f){return Ci(f,t)}if(0<Bs.length){Ci(Bs[0],t);for(var s=1;s<Bs.length;s++){var c=Bs[s];c.blockedOn===t&&(c.blockedOn=null)}}for(dr!==null&&Ci(dr,t),fr!==null&&Ci(fr,t),pr!==null&&Ci(pr,t),ki.forEach(r),Si.forEach(r),s=0;s<hr.length;s++)c=hr[s],c.blockedOn===t&&(c.blockedOn=null);for(;0<hr.length&&(s=hr[0],s.blockedOn===null);)Ch(s),s.blockedOn===null&&hr.shift()}var bo=N.ReactCurrentBatchConfig,Hs=!0;function E1(t,r,s,c){var f=We,x=bo.transition;bo.transition=null;try{We=1,Dc(t,r,s,c)}finally{We=f,bo.transition=x}}function $1(t,r,s,c){var f=We,x=bo.transition;bo.transition=null;try{We=4,Dc(t,r,s,c)}finally{We=f,bo.transition=x}}function Dc(t,r,s,c){if(Hs){var f=Ic(t,r,s,c);if(f===null)Gc(t,r,c,Us,s),jh(t,c);else if(j1(f,t,r,s,c))c.stopPropagation();else if(jh(t,c),r&4&&-1<S1.indexOf(t)){for(;f!==null;){var x=zi(f);if(x!==null&&vh(x),x=Ic(t,r,s,c),x===null&&Gc(t,r,c,Us,s),x===f)break;f=x}f!==null&&c.stopPropagation()}else Gc(t,r,c,null,s)}}var Us=null;function Ic(t,r,s,c){if(Us=null,t=vc(c),t=Ur(t),t!==null)if(r=Hr(t),r===null)t=null;else if(s=r.tag,s===13){if(t=uh(r),t!==null)return t;t=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;t=null}else r!==t&&(t=null);return Us=t,null}function $h(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(h1()){case Cc:return 1;case gh:return 4;case Ms:case m1:return 16;case xh:return 536870912;default:return 16}default:return 16}}var mr=null,Pc=null,Vs=null;function Th(){if(Vs)return Vs;var t,r=Pc,s=r.length,c,f="value"in mr?mr.value:mr.textContent,x=f.length;for(t=0;t<s&&r[t]===f[t];t++);var k=s-t;for(c=1;c<=k&&r[s-c]===f[x-c];c++);return Vs=f.slice(t,1<c?1-c:void 0)}function Ks(t){var r=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&r===13&&(t=13)):t=r,t===10&&(t=13),32<=t||t===13?t:0}function Qs(){return!0}function Ah(){return!1}function Kt(t){function r(s,c,f,x,k){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=x,this.target=k,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(s=t[I],this[I]=s?s(x):x[I]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Qs:Ah,this.isPropagationStopped=Ah,this}return P(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Qs)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Qs)},persist:function(){},isPersistent:Qs}),r}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nc=Kt(ko),$i=P({},ko,{view:0,detail:0}),T1=Kt($i),Lc,Mc,Ti,qs=P({},$i,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ti&&(Ti&&t.type==="mousemove"?(Lc=t.screenX-Ti.screenX,Mc=t.screenY-Ti.screenY):Mc=Lc=0,Ti=t),Lc)},movementY:function(t){return"movementY"in t?t.movementY:Mc}}),Rh=Kt(qs),A1=P({},qs,{dataTransfer:0}),R1=Kt(A1),D1=P({},$i,{relatedTarget:0}),Oc=Kt(D1),I1=P({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),P1=Kt(I1),N1=P({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),L1=Kt(N1),M1=P({},ko,{data:0}),Dh=Kt(M1),O1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(t){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(t):(t=_1[t])?!!r[t]:!1}function zc(){return F1}var B1=P({},$i,{key:function(t){if(t.key){var r=O1[t.key]||t.key;if(r!=="Unidentified")return r}return t.type==="keypress"?(t=Ks(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zc,charCode:function(t){return t.type==="keypress"?Ks(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ks(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W1=Kt(B1),H1=P({},qs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=Kt(H1),U1=P({},$i,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zc}),V1=Kt(U1),K1=P({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q1=Kt(K1),q1=P({},qs,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),G1=Kt(q1),Y1=[9,13,27,32],_c=p&&"CompositionEvent"in window,Ai=null;p&&"documentMode"in document&&(Ai=document.documentMode);var X1=p&&"TextEvent"in window&&!Ai,Ph=p&&(!_c||Ai&&8<Ai&&11>=Ai),Nh=" ",Lh=!1;function Mh(t,r){switch(t){case"keyup":return Y1.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var So=!1;function J1(t,r){switch(t){case"compositionend":return Oh(r);case"keypress":return r.which!==32?null:(Lh=!0,Nh);case"textInput":return t=r.data,t===Nh&&Lh?null:t;default:return null}}function Z1(t,r){if(So)return t==="compositionend"||!_c&&Mh(t,r)?(t=Th(),Vs=Pc=mr=null,So=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ph&&r.locale!=="ko"?null:r.data;default:return null}}var eb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r==="input"?!!eb[t.type]:r==="textarea"}function _h(t,r,s,c){ih(c),r=Zs(r,"onChange"),0<r.length&&(s=new Nc("onChange","change",null,s,c),t.push({event:s,listeners:r}))}var Ri=null,Di=null;function tb(t){rm(t,0)}function Gs(t){var r=To(t);if(ne(r))return t}function nb(t,r){if(t==="change")return r}var Fh=!1;if(p){var Fc;if(p){var Bc="oninput"in document;if(!Bc){var Bh=document.createElement("div");Bh.setAttribute("oninput","return;"),Bc=typeof Bh.oninput=="function"}Fc=Bc}else Fc=!1;Fh=Fc&&(!document.documentMode||9<document.documentMode)}function Wh(){Ri&&(Ri.detachEvent("onpropertychange",Hh),Di=Ri=null)}function Hh(t){if(t.propertyName==="value"&&Gs(Di)){var r=[];_h(r,Di,t,vc(t)),ch(tb,r)}}function rb(t,r,s){t==="focusin"?(Wh(),Ri=r,Di=s,Ri.attachEvent("onpropertychange",Hh)):t==="focusout"&&Wh()}function ob(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gs(Di)}function ib(t,r){if(t==="click")return Gs(r)}function sb(t,r){if(t==="input"||t==="change")return Gs(r)}function lb(t,r){return t===r&&(t!==0||1/t===1/r)||t!==t&&r!==r}var yn=typeof Object.is=="function"?Object.is:lb;function Ii(t,r){if(yn(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;var s=Object.keys(t),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!h.call(r,f)||!yn(t[f],r[f]))return!1}return!0}function Uh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,r){var s=Uh(t);t=0;for(var c;s;){if(s.nodeType===3){if(c=t+s.textContent.length,t<=r&&c>=r)return{node:s,offset:r-t};t=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Uh(s)}}function Kh(t,r){return t&&r?t===r?!0:t&&t.nodeType===3?!1:r&&r.nodeType===3?Kh(t,r.parentNode):"contains"in t?t.contains(r):t.compareDocumentPosition?!!(t.compareDocumentPosition(r)&16):!1:!1}function Qh(){for(var t=window,r=ce();r instanceof t.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)t=r.contentWindow;else break;r=ce(t.document)}return r}function Wc(t){var r=t&&t.nodeName&&t.nodeName.toLowerCase();return r&&(r==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||r==="textarea"||t.contentEditable==="true")}function ab(t){var r=Qh(),s=t.focusedElem,c=t.selectionRange;if(r!==s&&s&&s.ownerDocument&&Kh(s.ownerDocument.documentElement,s)){if(c!==null&&Wc(s)){if(r=c.start,t=c.end,t===void 0&&(t=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(t,s.value.length);else if(t=(r=s.ownerDocument||document)&&r.defaultView||window,t.getSelection){t=t.getSelection();var f=s.textContent.length,x=Math.min(c.start,f);c=c.end===void 0?x:Math.min(c.end,f),!t.extend&&x>c&&(f=c,c=x,x=f),f=Vh(s,x);var k=Vh(s,c);f&&k&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==k.node||t.focusOffset!==k.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),t.removeAllRanges(),x>c?(t.addRange(r),t.extend(k.node,k.offset)):(r.setEnd(k.node,k.offset),t.addRange(r)))}}for(r=[],t=s;t=t.parentNode;)t.nodeType===1&&r.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)t=r[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cb=p&&"documentMode"in document&&11>=document.documentMode,jo=null,Hc=null,Pi=null,Uc=!1;function qh(t,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Uc||jo==null||jo!==ce(c)||(c=jo,"selectionStart"in c&&Wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pi&&Ii(Pi,c)||(Pi=c,c=Zs(Hc,"onSelect"),0<c.length&&(r=new Nc("onSelect","select",null,r,s),t.push({event:r,listeners:c}),r.target=jo)))}function Ys(t,r){var s={};return s[t.toLowerCase()]=r.toLowerCase(),s["Webkit"+t]="webkit"+r,s["Moz"+t]="moz"+r,s}var Co={animationend:Ys("Animation","AnimationEnd"),animationiteration:Ys("Animation","AnimationIteration"),animationstart:Ys("Animation","AnimationStart"),transitionend:Ys("Transition","TransitionEnd")},Vc={},Gh={};p&&(Gh=document.createElement("div").style,"AnimationEvent"in window||(delete Co.animationend.animation,delete Co.animationiteration.animation,delete Co.animationstart.animation),"TransitionEvent"in window||delete Co.transitionend.transition);function Xs(t){if(Vc[t])return Vc[t];if(!Co[t])return t;var r=Co[t],s;for(s in r)if(r.hasOwnProperty(s)&&s in Gh)return Vc[t]=r[s];return t}var Yh=Xs("animationend"),Xh=Xs("animationiteration"),Jh=Xs("animationstart"),Zh=Xs("transitionend"),em=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,r){em.set(t,r),u(r,[t])}for(var Kc=0;Kc<tm.length;Kc++){var Qc=tm[Kc],ub=Qc.toLowerCase(),db=Qc[0].toUpperCase()+Qc.slice(1);gr(ub,"on"+db)}gr(Yh,"onAnimationEnd"),gr(Xh,"onAnimationIteration"),gr(Jh,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(Zh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ni="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fb=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ni));function nm(t,r,s){var c=t.type||"unknown-event";t.currentTarget=s,u1(c,r,void 0,t),t.currentTarget=null}function rm(t,r){r=(r&4)!==0;for(var s=0;s<t.length;s++){var c=t[s],f=c.event;c=c.listeners;e:{var x=void 0;if(r)for(var k=c.length-1;0<=k;k--){var I=c[k],M=I.instance,G=I.currentTarget;if(I=I.listener,M!==x&&f.isPropagationStopped())break e;nm(f,I,G),x=M}else for(k=0;k<c.length;k++){if(I=c[k],M=I.instance,G=I.currentTarget,I=I.listener,M!==x&&f.isPropagationStopped())break e;nm(f,I,G),x=M}}}if(Ls)throw t=jc,Ls=!1,jc=null,t}function qe(t,r){var s=r[tu];s===void 0&&(s=r[tu]=new Set);var c=t+"__bubble";s.has(c)||(om(r,t,2,!1),s.add(c))}function qc(t,r,s){var c=0;r&&(c|=4),om(s,t,c,r)}var Js="_reactListening"+Math.random().toString(36).slice(2);function Li(t){if(!t[Js]){t[Js]=!0,i.forEach(function(s){s!=="selectionchange"&&(fb.has(s)||qc(s,!1,t),qc(s,!0,t))});var r=t.nodeType===9?t:t.ownerDocument;r===null||r[Js]||(r[Js]=!0,qc("selectionchange",!1,r))}}function om(t,r,s,c){switch($h(r)){case 1:var f=E1;break;case 4:f=$1;break;default:f=Dc}s=f.bind(null,r,s,t),f=void 0,!Sc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(r,s,{capture:!0,passive:f}):t.addEventListener(r,s,!0):f!==void 0?t.addEventListener(r,s,{passive:f}):t.addEventListener(r,s,!1)}function Gc(t,r,s,c,f){var x=c;if(!(r&1)&&!(r&2)&&c!==null)e:for(;;){if(c===null)return;var k=c.tag;if(k===3||k===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(k===4)for(k=c.return;k!==null;){var M=k.tag;if((M===3||M===4)&&(M=k.stateNode.containerInfo,M===f||M.nodeType===8&&M.parentNode===f))return;k=k.return}for(;I!==null;){if(k=Ur(I),k===null)return;if(M=k.tag,M===5||M===6){c=x=k;continue e}I=I.parentNode}}c=c.return}ch(function(){var G=x,oe=vc(s),se=[];e:{var re=em.get(t);if(re!==void 0){var we=Nc,be=t;switch(t){case"keypress":if(Ks(s)===0)break e;case"keydown":case"keyup":we=W1;break;case"focusin":be="focus",we=Oc;break;case"focusout":be="blur",we=Oc;break;case"beforeblur":case"afterblur":we=Oc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=Rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=R1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=V1;break;case Yh:case Xh:case Jh:we=P1;break;case Zh:we=Q1;break;case"scroll":we=T1;break;case"wheel":we=G1;break;case"copy":case"cut":case"paste":we=L1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=Ih}var ke=(r&4)!==0,it=!ke&&t==="scroll",U=ke?re!==null?re+"Capture":null:re;ke=[];for(var F=G,Q;F!==null;){Q=F;var de=Q.stateNode;if(Q.tag===5&&de!==null&&(Q=de,U!==null&&(de=xi(F,U),de!=null&&ke.push(Mi(F,de,Q)))),it)break;F=F.return}0<ke.length&&(re=new we(re,be,null,s,oe),se.push({event:re,listeners:ke}))}}if(!(r&7)){e:{if(re=t==="mouseover"||t==="pointerover",we=t==="mouseout"||t==="pointerout",re&&s!==wc&&(be=s.relatedTarget||s.fromElement)&&(Ur(be)||be[Yn]))break e;if((we||re)&&(re=oe.window===oe?oe:(re=oe.ownerDocument)?re.defaultView||re.parentWindow:window,we?(be=s.relatedTarget||s.toElement,we=G,be=be?Ur(be):null,be!==null&&(it=Hr(be),be!==it||be.tag!==5&&be.tag!==6)&&(be=null)):(we=null,be=G),we!==be)){if(ke=Rh,de="onMouseLeave",U="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(ke=Ih,de="onPointerLeave",U="onPointerEnter",F="pointer"),it=we==null?re:To(we),Q=be==null?re:To(be),re=new ke(de,F+"leave",we,s,oe),re.target=it,re.relatedTarget=Q,de=null,Ur(oe)===G&&(ke=new ke(U,F+"enter",be,s,oe),ke.target=Q,ke.relatedTarget=it,de=ke),it=de,we&&be)t:{for(ke=we,U=be,F=0,Q=ke;Q;Q=Eo(Q))F++;for(Q=0,de=U;de;de=Eo(de))Q++;for(;0<F-Q;)ke=Eo(ke),F--;for(;0<Q-F;)U=Eo(U),Q--;for(;F--;){if(ke===U||U!==null&&ke===U.alternate)break t;ke=Eo(ke),U=Eo(U)}ke=null}else ke=null;we!==null&&im(se,re,we,ke,!1),be!==null&&it!==null&&im(se,it,be,ke,!0)}}e:{if(re=G?To(G):window,we=re.nodeName&&re.nodeName.toLowerCase(),we==="select"||we==="input"&&re.type==="file")var Se=nb;else if(zh(re))if(Fh)Se=sb;else{Se=ob;var Ee=rb}else(we=re.nodeName)&&we.toLowerCase()==="input"&&(re.type==="checkbox"||re.type==="radio")&&(Se=ib);if(Se&&(Se=Se(t,G))){_h(se,Se,s,oe);break e}Ee&&Ee(t,re,G),t==="focusout"&&(Ee=re._wrapperState)&&Ee.controlled&&re.type==="number"&&sn(re,"number",re.value)}switch(Ee=G?To(G):window,t){case"focusin":(zh(Ee)||Ee.contentEditable==="true")&&(jo=Ee,Hc=G,Pi=null);break;case"focusout":Pi=Hc=jo=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,qh(se,s,oe);break;case"selectionchange":if(cb)break;case"keydown":case"keyup":qh(se,s,oe)}var $e;if(_c)e:{switch(t){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else So?Mh(t,s)&&(Te="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Te="onCompositionStart");Te&&(Ph&&s.locale!=="ko"&&(So||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&So&&($e=Th()):(mr=oe,Pc="value"in mr?mr.value:mr.textContent,So=!0)),Ee=Zs(G,Te),0<Ee.length&&(Te=new Dh(Te,t,null,s,oe),se.push({event:Te,listeners:Ee}),$e?Te.data=$e:($e=Oh(s),$e!==null&&(Te.data=$e)))),($e=X1?J1(t,s):Z1(t,s))&&(G=Zs(G,"onBeforeInput"),0<G.length&&(oe=new Dh("onBeforeInput","beforeinput",null,s,oe),se.push({event:oe,listeners:G}),oe.data=$e))}rm(se,r)})}function Mi(t,r,s){return{instance:t,listener:r,currentTarget:s}}function Zs(t,r){for(var s=r+"Capture",c=[];t!==null;){var f=t,x=f.stateNode;f.tag===5&&x!==null&&(f=x,x=xi(t,s),x!=null&&c.unshift(Mi(t,x,f)),x=xi(t,r),x!=null&&c.push(Mi(t,x,f))),t=t.return}return c}function Eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,r,s,c,f){for(var x=r._reactName,k=[];s!==null&&s!==c;){var I=s,M=I.alternate,G=I.stateNode;if(M!==null&&M===c)break;I.tag===5&&G!==null&&(I=G,f?(M=xi(s,x),M!=null&&k.unshift(Mi(s,M,I))):f||(M=xi(s,x),M!=null&&k.push(Mi(s,M,I)))),s=s.return}k.length!==0&&t.push({event:r,listeners:k})}var pb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(pb,`
`).replace(hb,"")}function el(t,r,s){if(r=sm(r),sm(t)!==r&&s)throw Error(o(425))}function tl(){}var Yc=null,Xc=null;function Jc(t,r){return t==="textarea"||t==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Zc=typeof setTimeout=="function"?setTimeout:void 0,mb=typeof clearTimeout=="function"?clearTimeout:void 0,lm=typeof Promise=="function"?Promise:void 0,gb=typeof queueMicrotask=="function"?queueMicrotask:typeof lm<"u"?function(t){return lm.resolve(null).then(t).catch(xb)}:Zc;function xb(t){setTimeout(function(){throw t})}function eu(t,r){var s=r,c=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(c===0){t.removeChild(f),Ei(r);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=f}while(s);Ei(r)}function xr(t){for(;t!=null;t=t.nextSibling){var r=t.nodeType;if(r===1||r===3)break;if(r===8){if(r=t.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return t;r--}else s==="/$"&&r++}t=t.previousSibling}return null}var $o=Math.random().toString(36).slice(2),Ln="__reactFiber$"+$o,Oi="__reactProps$"+$o,Yn="__reactContainer$"+$o,tu="__reactEvents$"+$o,yb="__reactListeners$"+$o,wb="__reactHandles$"+$o;function Ur(t){var r=t[Ln];if(r)return r;for(var s=t.parentNode;s;){if(r=s[Yn]||s[Ln]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(t=am(t);t!==null;){if(s=t[Ln])return s;t=am(t)}return r}t=s,s=t.parentNode}return null}function zi(t){return t=t[Ln]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function To(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(o(33))}function nl(t){return t[Oi]||null}var nu=[],Ao=-1;function yr(t){return{current:t}}function Ge(t){0>Ao||(t.current=nu[Ao],nu[Ao]=null,Ao--)}function Qe(t,r){Ao++,nu[Ao]=t.current,t.current=r}var wr={},$t=yr(wr),Ot=yr(!1),Vr=wr;function Ro(t,r){var s=t.type.contextTypes;if(!s)return wr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},x;for(x in s)f[x]=r[x];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=f),f}function zt(t){return t=t.childContextTypes,t!=null}function rl(){Ge(Ot),Ge($t)}function cm(t,r,s){if($t.current!==wr)throw Error(o(168));Qe($t,r),Qe(Ot,s)}function um(t,r,s){var c=t.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(o(108,xe(t)||"Unknown",f));return P({},s,c)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wr,Vr=$t.current,Qe($t,t),Qe(Ot,Ot.current),!0}function dm(t,r,s){var c=t.stateNode;if(!c)throw Error(o(169));s?(t=um(t,r,Vr),c.__reactInternalMemoizedMergedChildContext=t,Ge(Ot),Ge($t),Qe($t,t)):Ge(Ot),Qe(Ot,s)}var Xn=null,il=!1,ru=!1;function fm(t){Xn===null?Xn=[t]:Xn.push(t)}function vb(t){il=!0,fm(t)}function vr(){if(!ru&&Xn!==null){ru=!0;var t=0,r=We;try{var s=Xn;for(We=1;t<s.length;t++){var c=s[t];do c=c(!0);while(c!==null)}Xn=null,il=!1}catch(f){throw Xn!==null&&(Xn=Xn.slice(t+1)),hh(Cc,vr),f}finally{We=r,ru=!1}}return null}var Do=[],Io=0,sl=null,ll=0,ln=[],an=0,Kr=null,Jn=1,Zn="";function Qr(t,r){Do[Io++]=ll,Do[Io++]=sl,sl=t,ll=r}function pm(t,r,s){ln[an++]=Jn,ln[an++]=Zn,ln[an++]=Kr,Kr=t;var c=Jn;t=Zn;var f=32-xn(c)-1;c&=~(1<<f),s+=1;var x=32-xn(r)+f;if(30<x){var k=f-f%5;x=(c&(1<<k)-1).toString(32),c>>=k,f-=k,Jn=1<<32-xn(r)+f|s<<f|c,Zn=x+t}else Jn=1<<x|s<<f|c,Zn=t}function ou(t){t.return!==null&&(Qr(t,1),pm(t,1,0))}function iu(t){for(;t===sl;)sl=Do[--Io],Do[Io]=null,ll=Do[--Io],Do[Io]=null;for(;t===Kr;)Kr=ln[--an],ln[an]=null,Zn=ln[--an],ln[an]=null,Jn=ln[--an],ln[an]=null}var Qt=null,qt=null,Xe=!1,wn=null;function hm(t,r){var s=fn(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=t,r=t.deletions,r===null?(t.deletions=[s],t.flags|=16):r.push(s)}function mm(t,r){switch(t.tag){case 5:var s=t.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(t.stateNode=r,Qt=t,qt=xr(r.firstChild),!0):!1;case 6:return r=t.pendingProps===""||r.nodeType!==3?null:r,r!==null?(t.stateNode=r,Qt=t,qt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=Kr!==null?{id:Jn,overflow:Zn}:null,t.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=fn(18,null,null,0),s.stateNode=r,s.return=t,t.child=s,Qt=t,qt=null,!0):!1;default:return!1}}function su(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lu(t){if(Xe){var r=qt;if(r){var s=r;if(!mm(t,r)){if(su(t))throw Error(o(418));r=xr(s.nextSibling);var c=Qt;r&&mm(t,r)?hm(c,s):(t.flags=t.flags&-4097|2,Xe=!1,Qt=t)}}else{if(su(t))throw Error(o(418));t.flags=t.flags&-4097|2,Xe=!1,Qt=t}}}function gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function al(t){if(t!==Qt)return!1;if(!Xe)return gm(t),Xe=!0,!1;var r;if((r=t.tag!==3)&&!(r=t.tag!==5)&&(r=t.type,r=r!=="head"&&r!=="body"&&!Jc(t.type,t.memoizedProps)),r&&(r=qt)){if(su(t))throw xm(),Error(o(418));for(;r;)hm(t,r),r=xr(r.nextSibling)}if(gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));e:{for(t=t.nextSibling,r=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(r===0){qt=xr(t.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}t=t.nextSibling}qt=null}}else qt=Qt?xr(t.stateNode.nextSibling):null;return!0}function xm(){for(var t=qt;t;)t=xr(t.nextSibling)}function Po(){qt=Qt=null,Xe=!1}function au(t){wn===null?wn=[t]:wn.push(t)}var bb=N.ReactCurrentBatchConfig;function _i(t,r,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(o(309));var c=s.stateNode}if(!c)throw Error(o(147,t));var f=c,x=""+t;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(k){var I=f.refs;k===null?delete I[x]:I[x]=k},r._stringRef=x,r)}if(typeof t!="string")throw Error(o(284));if(!s._owner)throw Error(o(290,t))}return t}function cl(t,r){throw t=Object.prototype.toString.call(r),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":t))}function ym(t){var r=t._init;return r(t._payload)}function wm(t){function r(U,F){if(t){var Q=U.deletions;Q===null?(U.deletions=[F],U.flags|=16):Q.push(F)}}function s(U,F){if(!t)return null;for(;F!==null;)r(U,F),F=F.sibling;return null}function c(U,F){for(U=new Map;F!==null;)F.key!==null?U.set(F.key,F):U.set(F.index,F),F=F.sibling;return U}function f(U,F){return U=Tr(U,F),U.index=0,U.sibling=null,U}function x(U,F,Q){return U.index=Q,t?(Q=U.alternate,Q!==null?(Q=Q.index,Q<F?(U.flags|=2,F):Q):(U.flags|=2,F)):(U.flags|=1048576,F)}function k(U){return t&&U.alternate===null&&(U.flags|=2),U}function I(U,F,Q,de){return F===null||F.tag!==6?(F=Zu(Q,U.mode,de),F.return=U,F):(F=f(F,Q),F.return=U,F)}function M(U,F,Q,de){var Se=Q.type;return Se===X?oe(U,F,Q.props.children,de,Q.key):F!==null&&(F.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===D&&ym(Se)===F.type)?(de=f(F,Q.props),de.ref=_i(U,F,Q),de.return=U,de):(de=Pl(Q.type,Q.key,Q.props,null,U.mode,de),de.ref=_i(U,F,Q),de.return=U,de)}function G(U,F,Q,de){return F===null||F.tag!==4||F.stateNode.containerInfo!==Q.containerInfo||F.stateNode.implementation!==Q.implementation?(F=ed(Q,U.mode,de),F.return=U,F):(F=f(F,Q.children||[]),F.return=U,F)}function oe(U,F,Q,de,Se){return F===null||F.tag!==7?(F=to(Q,U.mode,de,Se),F.return=U,F):(F=f(F,Q),F.return=U,F)}function se(U,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=Zu(""+F,U.mode,Q),F.return=U,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case _:return Q=Pl(F.type,F.key,F.props,null,U.mode,Q),Q.ref=_i(U,null,F),Q.return=U,Q;case K:return F=ed(F,U.mode,Q),F.return=U,F;case D:var de=F._init;return se(U,de(F._payload),Q)}if(qn(F)||B(F))return F=to(F,U.mode,Q,null),F.return=U,F;cl(U,F)}return null}function re(U,F,Q,de){var Se=F!==null?F.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Se!==null?null:I(U,F,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:return Q.key===Se?M(U,F,Q,de):null;case K:return Q.key===Se?G(U,F,Q,de):null;case D:return Se=Q._init,re(U,F,Se(Q._payload),de)}if(qn(Q)||B(Q))return Se!==null?null:oe(U,F,Q,de,null);cl(U,Q)}return null}function we(U,F,Q,de,Se){if(typeof de=="string"&&de!==""||typeof de=="number")return U=U.get(Q)||null,I(F,U,""+de,Se);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case _:return U=U.get(de.key===null?Q:de.key)||null,M(F,U,de,Se);case K:return U=U.get(de.key===null?Q:de.key)||null,G(F,U,de,Se);case D:var Ee=de._init;return we(U,F,Q,Ee(de._payload),Se)}if(qn(de)||B(de))return U=U.get(Q)||null,oe(F,U,de,Se,null);cl(F,de)}return null}function be(U,F,Q,de){for(var Se=null,Ee=null,$e=F,Te=F=0,mt=null;$e!==null&&Te<Q.length;Te++){$e.index>Te?(mt=$e,$e=null):mt=$e.sibling;var Me=re(U,$e,Q[Te],de);if(Me===null){$e===null&&($e=mt);break}t&&$e&&Me.alternate===null&&r(U,$e),F=x(Me,F,Te),Ee===null?Se=Me:Ee.sibling=Me,Ee=Me,$e=mt}if(Te===Q.length)return s(U,$e),Xe&&Qr(U,Te),Se;if($e===null){for(;Te<Q.length;Te++)$e=se(U,Q[Te],de),$e!==null&&(F=x($e,F,Te),Ee===null?Se=$e:Ee.sibling=$e,Ee=$e);return Xe&&Qr(U,Te),Se}for($e=c(U,$e);Te<Q.length;Te++)mt=we($e,U,Te,Q[Te],de),mt!==null&&(t&&mt.alternate!==null&&$e.delete(mt.key===null?Te:mt.key),F=x(mt,F,Te),Ee===null?Se=mt:Ee.sibling=mt,Ee=mt);return t&&$e.forEach(function(Ar){return r(U,Ar)}),Xe&&Qr(U,Te),Se}function ke(U,F,Q,de){var Se=B(Q);if(typeof Se!="function")throw Error(o(150));if(Q=Se.call(Q),Q==null)throw Error(o(151));for(var Ee=Se=null,$e=F,Te=F=0,mt=null,Me=Q.next();$e!==null&&!Me.done;Te++,Me=Q.next()){$e.index>Te?(mt=$e,$e=null):mt=$e.sibling;var Ar=re(U,$e,Me.value,de);if(Ar===null){$e===null&&($e=mt);break}t&&$e&&Ar.alternate===null&&r(U,$e),F=x(Ar,F,Te),Ee===null?Se=Ar:Ee.sibling=Ar,Ee=Ar,$e=mt}if(Me.done)return s(U,$e),Xe&&Qr(U,Te),Se;if($e===null){for(;!Me.done;Te++,Me=Q.next())Me=se(U,Me.value,de),Me!==null&&(F=x(Me,F,Te),Ee===null?Se=Me:Ee.sibling=Me,Ee=Me);return Xe&&Qr(U,Te),Se}for($e=c(U,$e);!Me.done;Te++,Me=Q.next())Me=we($e,U,Te,Me.value,de),Me!==null&&(t&&Me.alternate!==null&&$e.delete(Me.key===null?Te:Me.key),F=x(Me,F,Te),Ee===null?Se=Me:Ee.sibling=Me,Ee=Me);return t&&$e.forEach(function(Zb){return r(U,Zb)}),Xe&&Qr(U,Te),Se}function it(U,F,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===X&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case _:e:{for(var Se=Q.key,Ee=F;Ee!==null;){if(Ee.key===Se){if(Se=Q.type,Se===X){if(Ee.tag===7){s(U,Ee.sibling),F=f(Ee,Q.props.children),F.return=U,U=F;break e}}else if(Ee.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===D&&ym(Se)===Ee.type){s(U,Ee.sibling),F=f(Ee,Q.props),F.ref=_i(U,Ee,Q),F.return=U,U=F;break e}s(U,Ee);break}else r(U,Ee);Ee=Ee.sibling}Q.type===X?(F=to(Q.props.children,U.mode,de,Q.key),F.return=U,U=F):(de=Pl(Q.type,Q.key,Q.props,null,U.mode,de),de.ref=_i(U,F,Q),de.return=U,U=de)}return k(U);case K:e:{for(Ee=Q.key;F!==null;){if(F.key===Ee)if(F.tag===4&&F.stateNode.containerInfo===Q.containerInfo&&F.stateNode.implementation===Q.implementation){s(U,F.sibling),F=f(F,Q.children||[]),F.return=U,U=F;break e}else{s(U,F);break}else r(U,F);F=F.sibling}F=ed(Q,U.mode,de),F.return=U,U=F}return k(U);case D:return Ee=Q._init,it(U,F,Ee(Q._payload),de)}if(qn(Q))return be(U,F,Q,de);if(B(Q))return ke(U,F,Q,de);cl(U,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"?(Q=""+Q,F!==null&&F.tag===6?(s(U,F.sibling),F=f(F,Q),F.return=U,U=F):(s(U,F),F=Zu(Q,U.mode,de),F.return=U,U=F),k(U)):s(U,F)}return it}var No=wm(!0),vm=wm(!1),ul=yr(null),dl=null,Lo=null,cu=null;function uu(){cu=Lo=dl=null}function du(t){var r=ul.current;Ge(ul),t._currentValue=r}function fu(t,r,s){for(;t!==null;){var c=t.alternate;if((t.childLanes&r)!==r?(t.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),t===s)break;t=t.return}}function Mo(t,r){dl=t,cu=Lo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&r&&(_t=!0),t.firstContext=null)}function cn(t){var r=t._currentValue;if(cu!==t)if(t={context:t,memoizedValue:r,next:null},Lo===null){if(dl===null)throw Error(o(308));Lo=t,dl.dependencies={lanes:0,firstContext:t}}else Lo=Lo.next=t;return r}var qr=null;function pu(t){qr===null?qr=[t]:qr.push(t)}function bm(t,r,s,c){var f=r.interleaved;return f===null?(s.next=s,pu(r)):(s.next=f.next,f.next=s),r.interleaved=s,er(t,c)}function er(t,r){t.lanes|=r;var s=t.alternate;for(s!==null&&(s.lanes|=r),s=t,t=t.return;t!==null;)t.childLanes|=r,s=t.alternate,s!==null&&(s.childLanes|=r),s=t,t=t.return;return s.tag===3?s.stateNode:null}var br=!1;function hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(t,r){t=t.updateQueue,r.updateQueue===t&&(r.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tr(t,r){return{eventTime:t,lane:r,tag:0,payload:null,callback:null,next:null}}function kr(t,r,s){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,Le&2){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,er(t,s)}return f=c.interleaved,f===null?(r.next=r,pu(c)):(r.next=f.next,f.next=r),c.interleaved=r,er(t,s)}function fl(t,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,Tc(t,s)}}function Sm(t,r){var s=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,x=null;if(s=s.firstBaseUpdate,s!==null){do{var k={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};x===null?f=x=k:x=x.next=k,s=s.next}while(s!==null);x===null?f=x=r:x=x.next=r}else f=x=r;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:x,shared:c.shared,effects:c.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=r:t.next=r,s.lastBaseUpdate=r}function pl(t,r,s,c){var f=t.updateQueue;br=!1;var x=f.firstBaseUpdate,k=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var M=I,G=M.next;M.next=null,k===null?x=G:k.next=G,k=M;var oe=t.alternate;oe!==null&&(oe=oe.updateQueue,I=oe.lastBaseUpdate,I!==k&&(I===null?oe.firstBaseUpdate=G:I.next=G,oe.lastBaseUpdate=M))}if(x!==null){var se=f.baseState;k=0,oe=G=M=null,I=x;do{var re=I.lane,we=I.eventTime;if((c&re)===re){oe!==null&&(oe=oe.next={eventTime:we,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var be=t,ke=I;switch(re=r,we=s,ke.tag){case 1:if(be=ke.payload,typeof be=="function"){se=be.call(we,se,re);break e}se=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=ke.payload,re=typeof be=="function"?be.call(we,se,re):be,re==null)break e;se=P({},se,re);break e;case 2:br=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,re=f.effects,re===null?f.effects=[I]:re.push(I))}else we={eventTime:we,lane:re,tag:I.tag,payload:I.payload,callback:I.callback,next:null},oe===null?(G=oe=we,M=se):oe=oe.next=we,k|=re;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;re=I,I=re.next,re.next=null,f.lastBaseUpdate=re,f.shared.pending=null}}while(!0);if(oe===null&&(M=se),f.baseState=M,f.firstBaseUpdate=G,f.lastBaseUpdate=oe,r=f.shared.interleaved,r!==null){f=r;do k|=f.lane,f=f.next;while(f!==r)}else x===null&&(f.shared.lanes=0);Xr|=k,t.lanes=k,t.memoizedState=se}}function jm(t,r,s){if(t=r.effects,r.effects=null,t!==null)for(r=0;r<t.length;r++){var c=t[r],f=c.callback;if(f!==null){if(c.callback=null,c=s,typeof f!="function")throw Error(o(191,f));f.call(c)}}}var Fi={},Mn=yr(Fi),Bi=yr(Fi),Wi=yr(Fi);function Gr(t){if(t===Fi)throw Error(o(174));return t}function mu(t,r){switch(Qe(Wi,r),Qe(Bi,t),Qe(Mn,Fi),t=r.nodeType,t){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:gc(null,"");break;default:t=t===8?r.parentNode:r,r=t.namespaceURI||null,t=t.tagName,r=gc(r,t)}Ge(Mn),Qe(Mn,r)}function Oo(){Ge(Mn),Ge(Bi),Ge(Wi)}function Cm(t){Gr(Wi.current);var r=Gr(Mn.current),s=gc(r,t.type);r!==s&&(Qe(Bi,t),Qe(Mn,s))}function gu(t){Bi.current===t&&(Ge(Mn),Ge(Bi))}var Je=yr(0);function hl(t){for(var r=t;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var xu=[];function yu(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var ml=N.ReactCurrentDispatcher,wu=N.ReactCurrentBatchConfig,Yr=0,Ze=null,ut=null,pt=null,gl=!1,Hi=!1,Ui=0,kb=0;function Tt(){throw Error(o(321))}function vu(t,r){if(r===null)return!1;for(var s=0;s<r.length&&s<t.length;s++)if(!yn(t[s],r[s]))return!1;return!0}function bu(t,r,s,c,f,x){if(Yr=x,Ze=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ml.current=t===null||t.memoizedState===null?Eb:$b,t=s(c,f),Hi){x=0;do{if(Hi=!1,Ui=0,25<=x)throw Error(o(301));x+=1,pt=ut=null,r.updateQueue=null,ml.current=Tb,t=s(c,f)}while(Hi)}if(ml.current=wl,r=ut!==null&&ut.next!==null,Yr=0,pt=ut=Ze=null,gl=!1,r)throw Error(o(300));return t}function ku(){var t=Ui!==0;return Ui=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ze.memoizedState=pt=t:pt=pt.next=t,pt}function un(){if(ut===null){var t=Ze.alternate;t=t!==null?t.memoizedState:null}else t=ut.next;var r=pt===null?Ze.memoizedState:pt.next;if(r!==null)pt=r,ut=t;else{if(t===null)throw Error(o(310));ut=t,t={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},pt===null?Ze.memoizedState=pt=t:pt=pt.next=t}return pt}function Vi(t,r){return typeof r=="function"?r(t):r}function Su(t){var r=un(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=ut,f=c.baseQueue,x=s.pending;if(x!==null){if(f!==null){var k=f.next;f.next=x.next,x.next=k}c.baseQueue=f=x,s.pending=null}if(f!==null){x=f.next,c=c.baseState;var I=k=null,M=null,G=x;do{var oe=G.lane;if((Yr&oe)===oe)M!==null&&(M=M.next={lane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),c=G.hasEagerState?G.eagerState:t(c,G.action);else{var se={lane:oe,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null};M===null?(I=M=se,k=c):M=M.next=se,Ze.lanes|=oe,Xr|=oe}G=G.next}while(G!==null&&G!==x);M===null?k=c:M.next=I,yn(c,r.memoizedState)||(_t=!0),r.memoizedState=c,r.baseState=k,r.baseQueue=M,s.lastRenderedState=c}if(t=s.interleaved,t!==null){f=t;do x=f.lane,Ze.lanes|=x,Xr|=x,f=f.next;while(f!==t)}else f===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function ju(t){var r=un(),s=r.queue;if(s===null)throw Error(o(311));s.lastRenderedReducer=t;var c=s.dispatch,f=s.pending,x=r.memoizedState;if(f!==null){s.pending=null;var k=f=f.next;do x=t(x,k.action),k=k.next;while(k!==f);yn(x,r.memoizedState)||(_t=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),s.lastRenderedState=x}return[x,c]}function Em(){}function $m(t,r){var s=Ze,c=un(),f=r(),x=!yn(c.memoizedState,f);if(x&&(c.memoizedState=f,_t=!0),c=c.queue,Cu(Rm.bind(null,s,c,t),[t]),c.getSnapshot!==r||x||pt!==null&&pt.memoizedState.tag&1){if(s.flags|=2048,Ki(9,Am.bind(null,s,c,f,r),void 0,null),ht===null)throw Error(o(349));Yr&30||Tm(s,r,f)}return f}function Tm(t,r,s){t.flags|=16384,t={getSnapshot:r,value:s},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.stores=[t]):(s=r.stores,s===null?r.stores=[t]:s.push(t))}function Am(t,r,s,c){r.value=s,r.getSnapshot=c,Dm(r)&&Im(t)}function Rm(t,r,s){return s(function(){Dm(r)&&Im(t)})}function Dm(t){var r=t.getSnapshot;t=t.value;try{var s=r();return!yn(t,s)}catch{return!0}}function Im(t){var r=er(t,1);r!==null&&Sn(r,t,1,-1)}function Pm(t){var r=On();return typeof t=="function"&&(t=t()),r.memoizedState=r.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:t},r.queue=t,t=t.dispatch=Cb.bind(null,Ze,t),[r.memoizedState,t]}function Ki(t,r,s,c){return t={tag:t,create:r,destroy:s,deps:c,next:null},r=Ze.updateQueue,r===null?(r={lastEffect:null,stores:null},Ze.updateQueue=r,r.lastEffect=t.next=t):(s=r.lastEffect,s===null?r.lastEffect=t.next=t:(c=s.next,s.next=t,t.next=c,r.lastEffect=t)),t}function Nm(){return un().memoizedState}function xl(t,r,s,c){var f=On();Ze.flags|=t,f.memoizedState=Ki(1|r,s,void 0,c===void 0?null:c)}function yl(t,r,s,c){var f=un();c=c===void 0?null:c;var x=void 0;if(ut!==null){var k=ut.memoizedState;if(x=k.destroy,c!==null&&vu(c,k.deps)){f.memoizedState=Ki(r,s,x,c);return}}Ze.flags|=t,f.memoizedState=Ki(1|r,s,x,c)}function Lm(t,r){return xl(8390656,8,t,r)}function Cu(t,r){return yl(2048,8,t,r)}function Mm(t,r){return yl(4,2,t,r)}function Om(t,r){return yl(4,4,t,r)}function zm(t,r){if(typeof r=="function")return t=t(),r(t),function(){r(null)};if(r!=null)return t=t(),r.current=t,function(){r.current=null}}function _m(t,r,s){return s=s!=null?s.concat([t]):null,yl(4,4,zm.bind(null,r,t),s)}function Eu(){}function Fm(t,r){var s=un();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&vu(r,c[1])?c[0]:(s.memoizedState=[t,r],t)}function Bm(t,r){var s=un();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&vu(r,c[1])?c[0]:(t=t(),s.memoizedState=[t,r],t)}function Wm(t,r,s){return Yr&21?(yn(s,r)||(s=yh(),Ze.lanes|=s,Xr|=s,t.baseState=!0),r):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=s)}function Sb(t,r){var s=We;We=s!==0&&4>s?s:4,t(!0);var c=wu.transition;wu.transition={};try{t(!1),r()}finally{We=s,wu.transition=c}}function Hm(){return un().memoizedState}function jb(t,r,s){var c=Er(t);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},Um(t))Vm(r,s);else if(s=bm(t,r,s,c),s!==null){var f=Lt();Sn(s,t,c,f),Km(s,r,c)}}function Cb(t,r,s){var c=Er(t),f={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(Um(t))Vm(r,f);else{var x=t.alternate;if(t.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var k=r.lastRenderedState,I=x(k,s);if(f.hasEagerState=!0,f.eagerState=I,yn(I,k)){var M=r.interleaved;M===null?(f.next=f,pu(r)):(f.next=M.next,M.next=f),r.interleaved=f;return}}catch{}finally{}s=bm(t,r,f,c),s!==null&&(f=Lt(),Sn(s,t,c,f),Km(s,r,c))}}function Um(t){var r=t.alternate;return t===Ze||r!==null&&r===Ze}function Vm(t,r){Hi=gl=!0;var s=t.pending;s===null?r.next=r:(r.next=s.next,s.next=r),t.pending=r}function Km(t,r,s){if(s&4194240){var c=r.lanes;c&=t.pendingLanes,s|=c,r.lanes=s,Tc(t,s)}}var wl={readContext:cn,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useInsertionEffect:Tt,useLayoutEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useMutableSource:Tt,useSyncExternalStore:Tt,useId:Tt,unstable_isNewReconciler:!1},Eb={readContext:cn,useCallback:function(t,r){return On().memoizedState=[t,r===void 0?null:r],t},useContext:cn,useEffect:Lm,useImperativeHandle:function(t,r,s){return s=s!=null?s.concat([t]):null,xl(4194308,4,zm.bind(null,r,t),s)},useLayoutEffect:function(t,r){return xl(4194308,4,t,r)},useInsertionEffect:function(t,r){return xl(4,2,t,r)},useMemo:function(t,r){var s=On();return r=r===void 0?null:r,t=t(),s.memoizedState=[t,r],t},useReducer:function(t,r,s){var c=On();return r=s!==void 0?s(r):r,c.memoizedState=c.baseState=r,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},c.queue=t,t=t.dispatch=jb.bind(null,Ze,t),[c.memoizedState,t]},useRef:function(t){var r=On();return t={current:t},r.memoizedState=t},useState:Pm,useDebugValue:Eu,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=Pm(!1),r=t[0];return t=Sb.bind(null,t[1]),On().memoizedState=t,[r,t]},useMutableSource:function(){},useSyncExternalStore:function(t,r,s){var c=Ze,f=On();if(Xe){if(s===void 0)throw Error(o(407));s=s()}else{if(s=r(),ht===null)throw Error(o(349));Yr&30||Tm(c,r,s)}f.memoizedState=s;var x={value:s,getSnapshot:r};return f.queue=x,Lm(Rm.bind(null,c,x,t),[t]),c.flags|=2048,Ki(9,Am.bind(null,c,x,s,r),void 0,null),s},useId:function(){var t=On(),r=ht.identifierPrefix;if(Xe){var s=Zn,c=Jn;s=(c&~(1<<32-xn(c)-1)).toString(32)+s,r=":"+r+"R"+s,s=Ui++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=kb++,r=":"+r+"r"+s.toString(32)+":";return t.memoizedState=r},unstable_isNewReconciler:!1},$b={readContext:cn,useCallback:Fm,useContext:cn,useEffect:Cu,useImperativeHandle:_m,useInsertionEffect:Mm,useLayoutEffect:Om,useMemo:Bm,useReducer:Su,useRef:Nm,useState:function(){return Su(Vi)},useDebugValue:Eu,useDeferredValue:function(t){var r=un();return Wm(r,ut.memoizedState,t)},useTransition:function(){var t=Su(Vi)[0],r=un().memoizedState;return[t,r]},useMutableSource:Em,useSyncExternalStore:$m,useId:Hm,unstable_isNewReconciler:!1},Tb={readContext:cn,useCallback:Fm,useContext:cn,useEffect:Cu,useImperativeHandle:_m,useInsertionEffect:Mm,useLayoutEffect:Om,useMemo:Bm,useReducer:ju,useRef:Nm,useState:function(){return ju(Vi)},useDebugValue:Eu,useDeferredValue:function(t){var r=un();return ut===null?r.memoizedState=t:Wm(r,ut.memoizedState,t)},useTransition:function(){var t=ju(Vi)[0],r=un().memoizedState;return[t,r]},useMutableSource:Em,useSyncExternalStore:$m,useId:Hm,unstable_isNewReconciler:!1};function vn(t,r){if(t&&t.defaultProps){r=P({},r),t=t.defaultProps;for(var s in t)r[s]===void 0&&(r[s]=t[s]);return r}return r}function $u(t,r,s,c){r=t.memoizedState,s=s(c,r),s=s==null?r:P({},r,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var vl={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,r,s){t=t._reactInternals;var c=Lt(),f=Er(t),x=tr(c,f);x.payload=r,s!=null&&(x.callback=s),r=kr(t,x,f),r!==null&&(Sn(r,t,f,c),fl(r,t,f))},enqueueReplaceState:function(t,r,s){t=t._reactInternals;var c=Lt(),f=Er(t),x=tr(c,f);x.tag=1,x.payload=r,s!=null&&(x.callback=s),r=kr(t,x,f),r!==null&&(Sn(r,t,f,c),fl(r,t,f))},enqueueForceUpdate:function(t,r){t=t._reactInternals;var s=Lt(),c=Er(t),f=tr(s,c);f.tag=2,r!=null&&(f.callback=r),r=kr(t,f,c),r!==null&&(Sn(r,t,c,s),fl(r,t,c))}};function Qm(t,r,s,c,f,x,k){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,x,k):r.prototype&&r.prototype.isPureReactComponent?!Ii(s,c)||!Ii(f,x):!0}function qm(t,r,s){var c=!1,f=wr,x=r.contextType;return typeof x=="object"&&x!==null?x=cn(x):(f=zt(r)?Vr:$t.current,c=r.contextTypes,x=(c=c!=null)?Ro(t,f):wr),r=new r(s,x),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=vl,t.stateNode=r,r._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=x),r}function Gm(t,r,s,c){t=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==t&&vl.enqueueReplaceState(r,r.state,null)}function Tu(t,r,s,c){var f=t.stateNode;f.props=s,f.state=t.memoizedState,f.refs={},hu(t);var x=r.contextType;typeof x=="object"&&x!==null?f.context=cn(x):(x=zt(r)?Vr:$t.current,f.context=Ro(t,x)),f.state=t.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&($u(t,r,x,s),f.state=t.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&vl.enqueueReplaceState(f,f.state,null),pl(t,s,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,r){try{var s="",c=r;do s+=ge(c),c=c.return;while(c);var f=s}catch(x){f=`
Error generating stack: `+x.message+`
`+x.stack}return{value:t,source:r,stack:f,digest:null}}function Au(t,r,s){return{value:t,source:null,stack:s??null,digest:r??null}}function Ru(t,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var Ab=typeof WeakMap=="function"?WeakMap:Map;function Ym(t,r,s){s=tr(-1,s),s.tag=3,s.payload={element:null};var c=r.value;return s.callback=function(){$l||($l=!0,Vu=c),Ru(t,r)},s}function Xm(t,r,s){s=tr(-1,s),s.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;s.payload=function(){return c(f)},s.callback=function(){Ru(t,r)}}var x=t.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(s.callback=function(){Ru(t,r),typeof c!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var k=r.stack;this.componentDidCatch(r.value,{componentStack:k!==null?k:""})}),s}function Jm(t,r,s){var c=t.pingCache;if(c===null){c=t.pingCache=new Ab;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(s)||(f.add(s),t=Hb.bind(null,t,r,s),r.then(t,t))}function Zm(t){do{var r;if((r=t.tag===13)&&(r=t.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return t;t=t.return}while(t!==null);return null}function e0(t,r,s,c,f){return t.mode&1?(t.flags|=65536,t.lanes=f,t):(t===r?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=tr(-1,1),r.tag=2,kr(s,r,1))),s.lanes|=1),t)}var Rb=N.ReactCurrentOwner,_t=!1;function Nt(t,r,s,c){r.child=t===null?vm(r,null,s,c):No(r,t.child,s,c)}function t0(t,r,s,c,f){s=s.render;var x=r.ref;return Mo(r,f),c=bu(t,r,s,c,x,f),s=ku(),t!==null&&!_t?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,nr(t,r,f)):(Xe&&s&&ou(r),r.flags|=1,Nt(t,r,c,f),r.child)}function n0(t,r,s,c,f){if(t===null){var x=s.type;return typeof x=="function"&&!Ju(x)&&x.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=x,r0(t,r,x,c,f)):(t=Pl(s.type,null,c,r,r.mode,f),t.ref=r.ref,t.return=r,r.child=t)}if(x=t.child,!(t.lanes&f)){var k=x.memoizedProps;if(s=s.compare,s=s!==null?s:Ii,s(k,c)&&t.ref===r.ref)return nr(t,r,f)}return r.flags|=1,t=Tr(x,c),t.ref=r.ref,t.return=r,r.child=t}function r0(t,r,s,c,f){if(t!==null){var x=t.memoizedProps;if(Ii(x,c)&&t.ref===r.ref)if(_t=!1,r.pendingProps=c=x,(t.lanes&f)!==0)t.flags&131072&&(_t=!0);else return r.lanes=t.lanes,nr(t,r,f)}return Du(t,r,s,c,f)}function o0(t,r,s){var c=r.pendingProps,f=c.children,x=t!==null?t.memoizedState:null;if(c.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(Fo,Gt),Gt|=s;else{if(!(s&1073741824))return t=x!==null?x.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:t,cachePool:null,transitions:null},r.updateQueue=null,Qe(Fo,Gt),Gt|=t,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:s,Qe(Fo,Gt),Gt|=c}else x!==null?(c=x.baseLanes|s,r.memoizedState=null):c=s,Qe(Fo,Gt),Gt|=c;return Nt(t,r,f,s),r.child}function i0(t,r){var s=r.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function Du(t,r,s,c,f){var x=zt(s)?Vr:$t.current;return x=Ro(r,x),Mo(r,f),s=bu(t,r,s,c,x,f),c=ku(),t!==null&&!_t?(r.updateQueue=t.updateQueue,r.flags&=-2053,t.lanes&=~f,nr(t,r,f)):(Xe&&c&&ou(r),r.flags|=1,Nt(t,r,s,f),r.child)}function s0(t,r,s,c,f){if(zt(s)){var x=!0;ol(r)}else x=!1;if(Mo(r,f),r.stateNode===null)kl(t,r),qm(r,s,c),Tu(r,s,c,f),c=!0;else if(t===null){var k=r.stateNode,I=r.memoizedProps;k.props=I;var M=k.context,G=s.contextType;typeof G=="object"&&G!==null?G=cn(G):(G=zt(s)?Vr:$t.current,G=Ro(r,G));var oe=s.getDerivedStateFromProps,se=typeof oe=="function"||typeof k.getSnapshotBeforeUpdate=="function";se||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(I!==c||M!==G)&&Gm(r,k,c,G),br=!1;var re=r.memoizedState;k.state=re,pl(r,c,k,f),M=r.memoizedState,I!==c||re!==M||Ot.current||br?(typeof oe=="function"&&($u(r,s,oe,c),M=r.memoizedState),(I=br||Qm(r,s,I,c,re,M,G))?(se||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(r.flags|=4194308)):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=M),k.props=c,k.state=M,k.context=G,c=I):(typeof k.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{k=r.stateNode,km(t,r),I=r.memoizedProps,G=r.type===r.elementType?I:vn(r.type,I),k.props=G,se=r.pendingProps,re=k.context,M=s.contextType,typeof M=="object"&&M!==null?M=cn(M):(M=zt(s)?Vr:$t.current,M=Ro(r,M));var we=s.getDerivedStateFromProps;(oe=typeof we=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(I!==se||re!==M)&&Gm(r,k,c,M),br=!1,re=r.memoizedState,k.state=re,pl(r,c,k,f);var be=r.memoizedState;I!==se||re!==be||Ot.current||br?(typeof we=="function"&&($u(r,s,we,c),be=r.memoizedState),(G=br||Qm(r,s,G,c,re,be,M)||!1)?(oe||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(c,be,M),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(c,be,M)),typeof k.componentDidUpdate=="function"&&(r.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof k.componentDidUpdate!="function"||I===t.memoizedProps&&re===t.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&re===t.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=be),k.props=c,k.state=be,k.context=M,c=G):(typeof k.componentDidUpdate!="function"||I===t.memoizedProps&&re===t.memoizedState||(r.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&re===t.memoizedState||(r.flags|=1024),c=!1)}return Iu(t,r,s,c,x,f)}function Iu(t,r,s,c,f,x){i0(t,r);var k=(r.flags&128)!==0;if(!c&&!k)return f&&dm(r,s,!1),nr(t,r,x);c=r.stateNode,Rb.current=r;var I=k&&typeof s.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,t!==null&&k?(r.child=No(r,t.child,null,x),r.child=No(r,null,I,x)):Nt(t,r,I,x),r.memoizedState=c.state,f&&dm(r,s,!0),r.child}function l0(t){var r=t.stateNode;r.pendingContext?cm(t,r.pendingContext,r.pendingContext!==r.context):r.context&&cm(t,r.context,!1),mu(t,r.containerInfo)}function a0(t,r,s,c,f){return Po(),au(f),r.flags|=256,Nt(t,r,s,c),r.child}var Pu={dehydrated:null,treeContext:null,retryLane:0};function Nu(t){return{baseLanes:t,cachePool:null,transitions:null}}function c0(t,r,s){var c=r.pendingProps,f=Je.current,x=!1,k=(r.flags&128)!==0,I;if((I=k)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(x=!0,r.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Qe(Je,f&1),t===null)return lu(r),t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(r.mode&1?t.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(k=c.children,t=c.fallback,x?(c=r.mode,x=r.child,k={mode:"hidden",children:k},!(c&1)&&x!==null?(x.childLanes=0,x.pendingProps=k):x=Nl(k,c,0,null),t=to(t,c,s,null),x.return=r,t.return=r,x.sibling=t,r.child=x,r.child.memoizedState=Nu(s),r.memoizedState=Pu,t):Lu(r,k));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return Db(t,r,k,c,I,f,s);if(x){x=c.fallback,k=r.mode,f=t.child,I=f.sibling;var M={mode:"hidden",children:c.children};return!(k&1)&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=M,r.deletions=null):(c=Tr(f,M),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?x=Tr(I,x):(x=to(x,k,s,null),x.flags|=2),x.return=r,c.return=r,c.sibling=x,r.child=c,c=x,x=r.child,k=t.child.memoizedState,k=k===null?Nu(s):{baseLanes:k.baseLanes|s,cachePool:null,transitions:k.transitions},x.memoizedState=k,x.childLanes=t.childLanes&~s,r.memoizedState=Pu,c}return x=t.child,t=x.sibling,c=Tr(x,{mode:"visible",children:c.children}),!(r.mode&1)&&(c.lanes=s),c.return=r,c.sibling=null,t!==null&&(s=r.deletions,s===null?(r.deletions=[t],r.flags|=16):s.push(t)),r.child=c,r.memoizedState=null,c}function Lu(t,r){return r=Nl({mode:"visible",children:r},t.mode,0,null),r.return=t,t.child=r}function bl(t,r,s,c){return c!==null&&au(c),No(r,t.child,null,s),t=Lu(r,r.pendingProps.children),t.flags|=2,r.memoizedState=null,t}function Db(t,r,s,c,f,x,k){if(s)return r.flags&256?(r.flags&=-257,c=Au(Error(o(422))),bl(t,r,k,c)):r.memoizedState!==null?(r.child=t.child,r.flags|=128,null):(x=c.fallback,f=r.mode,c=Nl({mode:"visible",children:c.children},f,0,null),x=to(x,f,k,null),x.flags|=2,c.return=r,x.return=r,c.sibling=x,r.child=c,r.mode&1&&No(r,t.child,null,k),r.child.memoizedState=Nu(k),r.memoizedState=Pu,x);if(!(r.mode&1))return bl(t,r,k,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,x=Error(o(419)),c=Au(x,c,void 0),bl(t,r,k,c)}if(I=(k&t.childLanes)!==0,_t||I){if(c=ht,c!==null){switch(k&-k){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|k)?0:f,f!==0&&f!==x.retryLane&&(x.retryLane=f,er(t,f),Sn(c,t,f,-1))}return Xu(),c=Au(Error(o(421))),bl(t,r,k,c)}return f.data==="$?"?(r.flags|=128,r.child=t.child,r=Ub.bind(null,t),f._reactRetry=r,null):(t=x.treeContext,qt=xr(f.nextSibling),Qt=r,Xe=!0,wn=null,t!==null&&(ln[an++]=Jn,ln[an++]=Zn,ln[an++]=Kr,Jn=t.id,Zn=t.overflow,Kr=r),r=Lu(r,c.children),r.flags|=4096,r)}function u0(t,r,s){t.lanes|=r;var c=t.alternate;c!==null&&(c.lanes|=r),fu(t.return,r,s)}function Mu(t,r,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=s,x.tailMode=f)}function d0(t,r,s){var c=r.pendingProps,f=c.revealOrder,x=c.tail;if(Nt(t,r,c.children,s),c=Je.current,c&2)c=c&1|2,r.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=r.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&u0(t,s,r);else if(t.tag===19)u0(t,s,r);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break e;for(;t.sibling===null;){if(t.return===null||t.return===r)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Qe(Je,c),!(r.mode&1))r.memoizedState=null;else switch(f){case"forwards":for(s=r.child,f=null;s!==null;)t=s.alternate,t!==null&&hl(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),Mu(r,!1,f,s,x);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(t=f.alternate,t!==null&&hl(t)===null){r.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Mu(r,!0,s,null,x);break;case"together":Mu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function kl(t,r){!(r.mode&1)&&t!==null&&(t.alternate=null,r.alternate=null,r.flags|=2)}function nr(t,r,s){if(t!==null&&(r.dependencies=t.dependencies),Xr|=r.lanes,!(s&r.childLanes))return null;if(t!==null&&r.child!==t.child)throw Error(o(153));if(r.child!==null){for(t=r.child,s=Tr(t,t.pendingProps),r.child=s,s.return=r;t.sibling!==null;)t=t.sibling,s=s.sibling=Tr(t,t.pendingProps),s.return=r;s.sibling=null}return r.child}function Ib(t,r,s){switch(r.tag){case 3:l0(r),Po();break;case 5:Cm(r);break;case 1:zt(r.type)&&ol(r);break;case 4:mu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Qe(ul,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Qe(Je,Je.current&1),r.flags|=128,null):s&r.child.childLanes?c0(t,r,s):(Qe(Je,Je.current&1),t=nr(t,r,s),t!==null?t.sibling:null);Qe(Je,Je.current&1);break;case 19:if(c=(s&r.childLanes)!==0,t.flags&128){if(c)return d0(t,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Qe(Je,Je.current),c)break;return null;case 22:case 23:return r.lanes=0,o0(t,r,s)}return nr(t,r,s)}var f0,Ou,p0,h0;f0=function(t,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Ou=function(){},p0=function(t,r,s,c){var f=t.memoizedProps;if(f!==c){t=r.stateNode,Gr(Mn.current);var x=null;switch(s){case"input":f=je(t,f),c=je(t,c),x=[];break;case"select":f=P({},f,{value:void 0}),c=P({},c,{value:void 0}),x=[];break;case"textarea":f=Gn(t,f),c=Gn(t,c),x=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=tl)}xc(s,c);var k;s=null;for(G in f)if(!c.hasOwnProperty(G)&&f.hasOwnProperty(G)&&f[G]!=null)if(G==="style"){var I=f[G];for(k in I)I.hasOwnProperty(k)&&(s||(s={}),s[k]="")}else G!=="dangerouslySetInnerHTML"&&G!=="children"&&G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&G!=="autoFocus"&&(a.hasOwnProperty(G)?x||(x=[]):(x=x||[]).push(G,null));for(G in c){var M=c[G];if(I=f!=null?f[G]:void 0,c.hasOwnProperty(G)&&M!==I&&(M!=null||I!=null))if(G==="style")if(I){for(k in I)!I.hasOwnProperty(k)||M&&M.hasOwnProperty(k)||(s||(s={}),s[k]="");for(k in M)M.hasOwnProperty(k)&&I[k]!==M[k]&&(s||(s={}),s[k]=M[k])}else s||(x||(x=[]),x.push(G,s)),s=M;else G==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,I=I?I.__html:void 0,M!=null&&I!==M&&(x=x||[]).push(G,M)):G==="children"?typeof M!="string"&&typeof M!="number"||(x=x||[]).push(G,""+M):G!=="suppressContentEditableWarning"&&G!=="suppressHydrationWarning"&&(a.hasOwnProperty(G)?(M!=null&&G==="onScroll"&&qe("scroll",t),x||I===M||(x=[])):(x=x||[]).push(G,M))}s&&(x=x||[]).push("style",s);var G=x;(r.updateQueue=G)&&(r.flags|=4)}},h0=function(t,r,s,c){s!==c&&(r.flags|=4)};function Qi(t,r){if(!Xe)switch(t.tailMode){case"hidden":r=t.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function At(t){var r=t.alternate!==null&&t.alternate.child===t.child,s=0,c=0;if(r)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=s,r}function Pb(t,r,s){var c=r.pendingProps;switch(iu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(r),null;case 1:return zt(r.type)&&rl(),At(r),null;case 3:return c=r.stateNode,Oo(),Ge(Ot),Ge($t),yu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(al(r)?r.flags|=4:t===null||t.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,wn!==null&&(qu(wn),wn=null))),Ou(t,r),At(r),null;case 5:gu(r);var f=Gr(Wi.current);if(s=r.type,t!==null&&r.stateNode!=null)p0(t,r,s,c,f),t.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(o(166));return At(r),null}if(t=Gr(Mn.current),al(r)){c=r.stateNode,s=r.type;var x=r.memoizedProps;switch(c[Ln]=r,c[Oi]=x,t=(r.mode&1)!==0,s){case"dialog":qe("cancel",c),qe("close",c);break;case"iframe":case"object":case"embed":qe("load",c);break;case"video":case"audio":for(f=0;f<Ni.length;f++)qe(Ni[f],c);break;case"source":qe("error",c);break;case"img":case"image":case"link":qe("error",c),qe("load",c);break;case"details":qe("toggle",c);break;case"input":Re(c,x),qe("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},qe("invalid",c);break;case"textarea":hi(c,x),qe("invalid",c)}xc(s,x),f=null;for(var k in x)if(x.hasOwnProperty(k)){var I=x[k];k==="children"?typeof I=="string"?c.textContent!==I&&(x.suppressHydrationWarning!==!0&&el(c.textContent,I,t),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(x.suppressHydrationWarning!==!0&&el(c.textContent,I,t),f=["children",""+I]):a.hasOwnProperty(k)&&I!=null&&k==="onScroll"&&qe("scroll",c)}switch(s){case"input":te(c),In(c,x,!0);break;case"textarea":te(c),Zp(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=tl)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{k=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eh(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=k.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=k.createElement(s,{is:c.is}):(t=k.createElement(s),s==="select"&&(k=t,c.multiple?k.multiple=!0:c.size&&(k.size=c.size))):t=k.createElementNS(t,s),t[Ln]=r,t[Oi]=c,f0(t,r,!1,!1),r.stateNode=t;e:{switch(k=yc(s,c),s){case"dialog":qe("cancel",t),qe("close",t),f=c;break;case"iframe":case"object":case"embed":qe("load",t),f=c;break;case"video":case"audio":for(f=0;f<Ni.length;f++)qe(Ni[f],t);f=c;break;case"source":qe("error",t),f=c;break;case"img":case"image":case"link":qe("error",t),qe("load",t),f=c;break;case"details":qe("toggle",t),f=c;break;case"input":Re(t,c),f=je(t,c),qe("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=P({},c,{value:void 0}),qe("invalid",t);break;case"textarea":hi(t,c),f=Gn(t,c),qe("invalid",t);break;default:f=c}xc(s,f),I=f;for(x in I)if(I.hasOwnProperty(x)){var M=I[x];x==="style"?rh(t,M):x==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&th(t,M)):x==="children"?typeof M=="string"?(s!=="textarea"||M!=="")&&mi(t,M):typeof M=="number"&&mi(t,""+M):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?M!=null&&x==="onScroll"&&qe("scroll",t):M!=null&&T(t,x,M,k))}switch(s){case"input":te(t),In(t,c,!1);break;case"textarea":te(t),Zp(t);break;case"option":c.value!=null&&t.setAttribute("value",""+q(c.value));break;case"select":t.multiple=!!c.multiple,x=c.value,x!=null?Pn(t,!!c.multiple,x,!1):c.defaultValue!=null&&Pn(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=tl)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return At(r),null;case 6:if(t&&r.stateNode!=null)h0(t,r,t.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(o(166));if(s=Gr(Wi.current),Gr(Mn.current),al(r)){if(c=r.stateNode,s=r.memoizedProps,c[Ln]=r,(x=c.nodeValue!==s)&&(t=Qt,t!==null))switch(t.tag){case 3:el(c.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&el(c.nodeValue,s,(t.mode&1)!==0)}x&&(r.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[Ln]=r,r.stateNode=c}return At(r),null;case 13:if(Ge(Je),c=r.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xe&&qt!==null&&r.mode&1&&!(r.flags&128))xm(),Po(),r.flags|=98560,x=!1;else if(x=al(r),c!==null&&c.dehydrated!==null){if(t===null){if(!x)throw Error(o(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(o(317));x[Ln]=r}else Po(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;At(r),x=!1}else wn!==null&&(qu(wn),wn=null),x=!0;if(!x)return r.flags&65536?r:null}return r.flags&128?(r.lanes=s,r):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(r.child.flags|=8192,r.mode&1&&(t===null||Je.current&1?dt===0&&(dt=3):Xu())),r.updateQueue!==null&&(r.flags|=4),At(r),null);case 4:return Oo(),Ou(t,r),t===null&&Li(r.stateNode.containerInfo),At(r),null;case 10:return du(r.type._context),At(r),null;case 17:return zt(r.type)&&rl(),At(r),null;case 19:if(Ge(Je),x=r.memoizedState,x===null)return At(r),null;if(c=(r.flags&128)!==0,k=x.rendering,k===null)if(c)Qi(x,!1);else{if(dt!==0||t!==null&&t.flags&128)for(t=r.child;t!==null;){if(k=hl(t),k!==null){for(r.flags|=128,Qi(x,!1),c=k.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=s,s=r.child;s!==null;)x=s,t=c,x.flags&=14680066,k=x.alternate,k===null?(x.childLanes=0,x.lanes=t,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=k.childLanes,x.lanes=k.lanes,x.child=k.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=k.memoizedProps,x.memoizedState=k.memoizedState,x.updateQueue=k.updateQueue,x.type=k.type,t=k.dependencies,x.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Qe(Je,Je.current&1|2),r.child}t=t.sibling}x.tail!==null&&ot()>Bo&&(r.flags|=128,c=!0,Qi(x,!1),r.lanes=4194304)}else{if(!c)if(t=hl(k),t!==null){if(r.flags|=128,c=!0,s=t.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),Qi(x,!0),x.tail===null&&x.tailMode==="hidden"&&!k.alternate&&!Xe)return At(r),null}else 2*ot()-x.renderingStartTime>Bo&&s!==1073741824&&(r.flags|=128,c=!0,Qi(x,!1),r.lanes=4194304);x.isBackwards?(k.sibling=r.child,r.child=k):(s=x.last,s!==null?s.sibling=k:r.child=k,x.last=k)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=ot(),r.sibling=null,s=Je.current,Qe(Je,c?s&1|2:s&1),r):(At(r),null);case 22:case 23:return Yu(),c=r.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(r.flags|=8192),c&&r.mode&1?Gt&1073741824&&(At(r),r.subtreeFlags&6&&(r.flags|=8192)):At(r),null;case 24:return null;case 25:return null}throw Error(o(156,r.tag))}function Nb(t,r){switch(iu(r),r.tag){case 1:return zt(r.type)&&rl(),t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 3:return Oo(),Ge(Ot),Ge($t),yu(),t=r.flags,t&65536&&!(t&128)?(r.flags=t&-65537|128,r):null;case 5:return gu(r),null;case 13:if(Ge(Je),t=r.memoizedState,t!==null&&t.dehydrated!==null){if(r.alternate===null)throw Error(o(340));Po()}return t=r.flags,t&65536?(r.flags=t&-65537|128,r):null;case 19:return Ge(Je),null;case 4:return Oo(),null;case 10:return du(r.type._context),null;case 22:case 23:return Yu(),null;case 24:return null;default:return null}}var Sl=!1,Rt=!1,Lb=typeof WeakSet=="function"?WeakSet:Set,ve=null;function _o(t,r){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){tt(t,r,c)}else s.current=null}function zu(t,r,s){try{s()}catch(c){tt(t,r,c)}}var m0=!1;function Mb(t,r){if(Yc=Hs,t=Qh(),Wc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{s.nodeType,x.nodeType}catch{s=null;break e}var k=0,I=-1,M=-1,G=0,oe=0,se=t,re=null;t:for(;;){for(var we;se!==s||f!==0&&se.nodeType!==3||(I=k+f),se!==x||c!==0&&se.nodeType!==3||(M=k+c),se.nodeType===3&&(k+=se.nodeValue.length),(we=se.firstChild)!==null;)re=se,se=we;for(;;){if(se===t)break t;if(re===s&&++G===f&&(I=k),re===x&&++oe===c&&(M=k),(we=se.nextSibling)!==null)break;se=re,re=se.parentNode}se=we}s=I===-1||M===-1?null:{start:I,end:M}}else s=null}s=s||{start:0,end:0}}else s=null;for(Xc={focusedElem:t,selectionRange:s},Hs=!1,ve=r;ve!==null;)if(r=ve,t=r.child,(r.subtreeFlags&1028)!==0&&t!==null)t.return=r,ve=t;else for(;ve!==null;){r=ve;try{var be=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var ke=be.memoizedProps,it=be.memoizedState,U=r.stateNode,F=U.getSnapshotBeforeUpdate(r.elementType===r.type?ke:vn(r.type,ke),it);U.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var Q=r.stateNode.containerInfo;Q.nodeType===1?Q.textContent="":Q.nodeType===9&&Q.documentElement&&Q.removeChild(Q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(de){tt(r,r.return,de)}if(t=r.sibling,t!==null){t.return=r.return,ve=t;break}ve=r.return}return be=m0,m0=!1,be}function qi(t,r,s){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var x=f.destroy;f.destroy=void 0,x!==void 0&&zu(r,s,x)}f=f.next}while(f!==c)}}function jl(t,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var c=s.create;s.destroy=c()}s=s.next}while(s!==r)}}function _u(t){var r=t.ref;if(r!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof r=="function"?r(t):r.current=t}}function g0(t){var r=t.alternate;r!==null&&(t.alternate=null,g0(r)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(r=t.stateNode,r!==null&&(delete r[Ln],delete r[Oi],delete r[tu],delete r[yb],delete r[wb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function x0(t){return t.tag===5||t.tag===3||t.tag===4}function y0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||x0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(t,r):s.insertBefore(t,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(t,s)):(r=s,r.appendChild(t)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=tl));else if(c!==4&&(t=t.child,t!==null))for(Fu(t,r,s),t=t.sibling;t!==null;)Fu(t,r,s),t=t.sibling}function Bu(t,r,s){var c=t.tag;if(c===5||c===6)t=t.stateNode,r?s.insertBefore(t,r):s.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(Bu(t,r,s),t=t.sibling;t!==null;)Bu(t,r,s),t=t.sibling}var bt=null,bn=!1;function Sr(t,r,s){for(s=s.child;s!==null;)w0(t,r,s),s=s.sibling}function w0(t,r,s){if(Nn&&typeof Nn.onCommitFiberUnmount=="function")try{Nn.onCommitFiberUnmount(Os,s)}catch{}switch(s.tag){case 5:Rt||_o(s,r);case 6:var c=bt,f=bn;bt=null,Sr(t,r,s),bt=c,bn=f,bt!==null&&(bn?(t=bt,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):bt.removeChild(s.stateNode));break;case 18:bt!==null&&(bn?(t=bt,s=s.stateNode,t.nodeType===8?eu(t.parentNode,s):t.nodeType===1&&eu(t,s),Ei(t)):eu(bt,s.stateNode));break;case 4:c=bt,f=bn,bt=s.stateNode.containerInfo,bn=!0,Sr(t,r,s),bt=c,bn=f;break;case 0:case 11:case 14:case 15:if(!Rt&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var x=f,k=x.destroy;x=x.tag,k!==void 0&&(x&2||x&4)&&zu(s,r,k),f=f.next}while(f!==c)}Sr(t,r,s);break;case 1:if(!Rt&&(_o(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(I){tt(s,r,I)}Sr(t,r,s);break;case 21:Sr(t,r,s);break;case 22:s.mode&1?(Rt=(c=Rt)||s.memoizedState!==null,Sr(t,r,s),Rt=c):Sr(t,r,s);break;default:Sr(t,r,s)}}function v0(t){var r=t.updateQueue;if(r!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Lb),r.forEach(function(c){var f=Vb.bind(null,t,c);s.has(c)||(s.add(c),c.then(f,f))})}}function kn(t,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c];try{var x=t,k=r,I=k;e:for(;I!==null;){switch(I.tag){case 5:bt=I.stateNode,bn=!1;break e;case 3:bt=I.stateNode.containerInfo,bn=!0;break e;case 4:bt=I.stateNode.containerInfo,bn=!0;break e}I=I.return}if(bt===null)throw Error(o(160));w0(x,k,f),bt=null,bn=!1;var M=f.alternate;M!==null&&(M.return=null),f.return=null}catch(G){tt(f,r,G)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)b0(r,t),r=r.sibling}function b0(t,r){var s=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(kn(r,t),zn(t),c&4){try{qi(3,t,t.return),jl(3,t)}catch(ke){tt(t,t.return,ke)}try{qi(5,t,t.return)}catch(ke){tt(t,t.return,ke)}}break;case 1:kn(r,t),zn(t),c&512&&s!==null&&_o(s,s.return);break;case 5:if(kn(r,t),zn(t),c&512&&s!==null&&_o(s,s.return),t.flags&32){var f=t.stateNode;try{mi(f,"")}catch(ke){tt(t,t.return,ke)}}if(c&4&&(f=t.stateNode,f!=null)){var x=t.memoizedProps,k=s!==null?s.memoizedProps:x,I=t.type,M=t.updateQueue;if(t.updateQueue=null,M!==null)try{I==="input"&&x.type==="radio"&&x.name!=null&&_e(f,x),yc(I,k);var G=yc(I,x);for(k=0;k<M.length;k+=2){var oe=M[k],se=M[k+1];oe==="style"?rh(f,se):oe==="dangerouslySetInnerHTML"?th(f,se):oe==="children"?mi(f,se):T(f,oe,se,G)}switch(I){case"input":lt(f,x);break;case"textarea":mc(f,x);break;case"select":var re=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!x.multiple;var we=x.value;we!=null?Pn(f,!!x.multiple,we,!1):re!==!!x.multiple&&(x.defaultValue!=null?Pn(f,!!x.multiple,x.defaultValue,!0):Pn(f,!!x.multiple,x.multiple?[]:"",!1))}f[Oi]=x}catch(ke){tt(t,t.return,ke)}}break;case 6:if(kn(r,t),zn(t),c&4){if(t.stateNode===null)throw Error(o(162));f=t.stateNode,x=t.memoizedProps;try{f.nodeValue=x}catch(ke){tt(t,t.return,ke)}}break;case 3:if(kn(r,t),zn(t),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Ei(r.containerInfo)}catch(ke){tt(t,t.return,ke)}break;case 4:kn(r,t),zn(t);break;case 13:kn(r,t),zn(t),f=t.child,f.flags&8192&&(x=f.memoizedState!==null,f.stateNode.isHidden=x,!x||f.alternate!==null&&f.alternate.memoizedState!==null||(Uu=ot())),c&4&&v0(t);break;case 22:if(oe=s!==null&&s.memoizedState!==null,t.mode&1?(Rt=(G=Rt)||oe,kn(r,t),Rt=G):kn(r,t),zn(t),c&8192){if(G=t.memoizedState!==null,(t.stateNode.isHidden=G)&&!oe&&t.mode&1)for(ve=t,oe=t.child;oe!==null;){for(se=ve=oe;ve!==null;){switch(re=ve,we=re.child,re.tag){case 0:case 11:case 14:case 15:qi(4,re,re.return);break;case 1:_o(re,re.return);var be=re.stateNode;if(typeof be.componentWillUnmount=="function"){c=re,s=re.return;try{r=c,be.props=r.memoizedProps,be.state=r.memoizedState,be.componentWillUnmount()}catch(ke){tt(c,s,ke)}}break;case 5:_o(re,re.return);break;case 22:if(re.memoizedState!==null){j0(se);continue}}we!==null?(we.return=re,ve=we):j0(se)}oe=oe.sibling}e:for(oe=null,se=t;;){if(se.tag===5){if(oe===null){oe=se;try{f=se.stateNode,G?(x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(I=se.stateNode,M=se.memoizedProps.style,k=M!=null&&M.hasOwnProperty("display")?M.display:null,I.style.display=nh("display",k))}catch(ke){tt(t,t.return,ke)}}}else if(se.tag===6){if(oe===null)try{se.stateNode.nodeValue=G?"":se.memoizedProps}catch(ke){tt(t,t.return,ke)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===t)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===t)break e;for(;se.sibling===null;){if(se.return===null||se.return===t)break e;oe===se&&(oe=null),se=se.return}oe===se&&(oe=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:kn(r,t),zn(t),c&4&&v0(t);break;case 21:break;default:kn(r,t),zn(t)}}function zn(t){var r=t.flags;if(r&2){try{e:{for(var s=t.return;s!==null;){if(x0(s)){var c=s;break e}s=s.return}throw Error(o(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(mi(f,""),c.flags&=-33);var x=y0(t);Bu(t,x,f);break;case 3:case 4:var k=c.stateNode.containerInfo,I=y0(t);Fu(t,I,k);break;default:throw Error(o(161))}}catch(M){tt(t,t.return,M)}t.flags&=-3}r&4096&&(t.flags&=-4097)}function Ob(t,r,s){ve=t,k0(t)}function k0(t,r,s){for(var c=(t.mode&1)!==0;ve!==null;){var f=ve,x=f.child;if(f.tag===22&&c){var k=f.memoizedState!==null||Sl;if(!k){var I=f.alternate,M=I!==null&&I.memoizedState!==null||Rt;I=Sl;var G=Rt;if(Sl=k,(Rt=M)&&!G)for(ve=f;ve!==null;)k=ve,M=k.child,k.tag===22&&k.memoizedState!==null?C0(f):M!==null?(M.return=k,ve=M):C0(f);for(;x!==null;)ve=x,k0(x),x=x.sibling;ve=f,Sl=I,Rt=G}S0(t)}else f.subtreeFlags&8772&&x!==null?(x.return=f,ve=x):S0(t)}}function S0(t){for(;ve!==null;){var r=ve;if(r.flags&8772){var s=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:Rt||jl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Rt)if(s===null)c.componentDidMount();else{var f=r.elementType===r.type?s.memoizedProps:vn(r.type,s.memoizedProps);c.componentDidUpdate(f,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&jm(r,x,c);break;case 3:var k=r.updateQueue;if(k!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}jm(r,k,s)}break;case 5:var I=r.stateNode;if(s===null&&r.flags&4){s=I;var M=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&s.focus();break;case"img":M.src&&(s.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var G=r.alternate;if(G!==null){var oe=G.memoizedState;if(oe!==null){var se=oe.dehydrated;se!==null&&Ei(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Rt||r.flags&512&&_u(r)}catch(re){tt(r,r.return,re)}}if(r===t){ve=null;break}if(s=r.sibling,s!==null){s.return=r.return,ve=s;break}ve=r.return}}function j0(t){for(;ve!==null;){var r=ve;if(r===t){ve=null;break}var s=r.sibling;if(s!==null){s.return=r.return,ve=s;break}ve=r.return}}function C0(t){for(;ve!==null;){var r=ve;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{jl(4,r)}catch(M){tt(r,s,M)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(M){tt(r,f,M)}}var x=r.return;try{_u(r)}catch(M){tt(r,x,M)}break;case 5:var k=r.return;try{_u(r)}catch(M){tt(r,k,M)}}}catch(M){tt(r,r.return,M)}if(r===t){ve=null;break}var I=r.sibling;if(I!==null){I.return=r.return,ve=I;break}ve=r.return}}var zb=Math.ceil,Cl=N.ReactCurrentDispatcher,Wu=N.ReactCurrentOwner,dn=N.ReactCurrentBatchConfig,Le=0,ht=null,at=null,kt=0,Gt=0,Fo=yr(0),dt=0,Gi=null,Xr=0,El=0,Hu=0,Yi=null,Ft=null,Uu=0,Bo=1/0,rr=null,$l=!1,Vu=null,jr=null,Tl=!1,Cr=null,Al=0,Xi=0,Ku=null,Rl=-1,Dl=0;function Lt(){return Le&6?ot():Rl!==-1?Rl:Rl=ot()}function Er(t){return t.mode&1?Le&2&&kt!==0?kt&-kt:bb.transition!==null?(Dl===0&&(Dl=yh()),Dl):(t=We,t!==0||(t=window.event,t=t===void 0?16:$h(t.type)),t):1}function Sn(t,r,s,c){if(50<Xi)throw Xi=0,Ku=null,Error(o(185));bi(t,s,c),(!(Le&2)||t!==ht)&&(t===ht&&(!(Le&2)&&(El|=s),dt===4&&$r(t,kt)),Bt(t,c),s===1&&Le===0&&!(r.mode&1)&&(Bo=ot()+500,il&&vr()))}function Bt(t,r){var s=t.callbackNode;b1(t,r);var c=Fs(t,t===ht?kt:0);if(c===0)s!==null&&mh(s),t.callbackNode=null,t.callbackPriority=0;else if(r=c&-c,t.callbackPriority!==r){if(s!=null&&mh(s),r===1)t.tag===0?vb($0.bind(null,t)):fm($0.bind(null,t)),gb(function(){!(Le&6)&&vr()}),s=null;else{switch(wh(c)){case 1:s=Cc;break;case 4:s=gh;break;case 16:s=Ms;break;case 536870912:s=xh;break;default:s=Ms}s=L0(s,E0.bind(null,t))}t.callbackPriority=r,t.callbackNode=s}}function E0(t,r){if(Rl=-1,Dl=0,Le&6)throw Error(o(327));var s=t.callbackNode;if(Wo()&&t.callbackNode!==s)return null;var c=Fs(t,t===ht?kt:0);if(c===0)return null;if(c&30||c&t.expiredLanes||r)r=Il(t,c);else{r=c;var f=Le;Le|=2;var x=A0();(ht!==t||kt!==r)&&(rr=null,Bo=ot()+500,Zr(t,r));do try{Bb();break}catch(I){T0(t,I)}while(!0);uu(),Cl.current=x,Le=f,at!==null?r=0:(ht=null,kt=0,r=dt)}if(r!==0){if(r===2&&(f=Ec(t),f!==0&&(c=f,r=Qu(t,f))),r===1)throw s=Gi,Zr(t,0),$r(t,c),Bt(t,ot()),s;if(r===6)$r(t,c);else{if(f=t.current.alternate,!(c&30)&&!_b(f)&&(r=Il(t,c),r===2&&(x=Ec(t),x!==0&&(c=x,r=Qu(t,x))),r===1))throw s=Gi,Zr(t,0),$r(t,c),Bt(t,ot()),s;switch(t.finishedWork=f,t.finishedLanes=c,r){case 0:case 1:throw Error(o(345));case 2:eo(t,Ft,rr);break;case 3:if($r(t,c),(c&130023424)===c&&(r=Uu+500-ot(),10<r)){if(Fs(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Lt(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Zc(eo.bind(null,t,Ft,rr),r);break}eo(t,Ft,rr);break;case 4:if($r(t,c),(c&4194240)===c)break;for(r=t.eventTimes,f=-1;0<c;){var k=31-xn(c);x=1<<k,k=r[k],k>f&&(f=k),c&=~x}if(c=f,c=ot()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zb(c/1960))-c,10<c){t.timeoutHandle=Zc(eo.bind(null,t,Ft,rr),c);break}eo(t,Ft,rr);break;case 5:eo(t,Ft,rr);break;default:throw Error(o(329))}}}return Bt(t,ot()),t.callbackNode===s?E0.bind(null,t):null}function Qu(t,r){var s=Yi;return t.current.memoizedState.isDehydrated&&(Zr(t,r).flags|=256),t=Il(t,r),t!==2&&(r=Ft,Ft=s,r!==null&&qu(r)),t}function qu(t){Ft===null?Ft=t:Ft.push.apply(Ft,t)}function _b(t){for(var r=t;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var f=s[c],x=f.getSnapshot;f=f.value;try{if(!yn(x(),f))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $r(t,r){for(r&=~Hu,r&=~El,t.suspendedLanes|=r,t.pingedLanes&=~r,t=t.expirationTimes;0<r;){var s=31-xn(r),c=1<<s;t[s]=-1,r&=~c}}function $0(t){if(Le&6)throw Error(o(327));Wo();var r=Fs(t,0);if(!(r&1))return Bt(t,ot()),null;var s=Il(t,r);if(t.tag!==0&&s===2){var c=Ec(t);c!==0&&(r=c,s=Qu(t,c))}if(s===1)throw s=Gi,Zr(t,0),$r(t,r),Bt(t,ot()),s;if(s===6)throw Error(o(345));return t.finishedWork=t.current.alternate,t.finishedLanes=r,eo(t,Ft,rr),Bt(t,ot()),null}function Gu(t,r){var s=Le;Le|=1;try{return t(r)}finally{Le=s,Le===0&&(Bo=ot()+500,il&&vr())}}function Jr(t){Cr!==null&&Cr.tag===0&&!(Le&6)&&Wo();var r=Le;Le|=1;var s=dn.transition,c=We;try{if(dn.transition=null,We=1,t)return t()}finally{We=c,dn.transition=s,Le=r,!(Le&6)&&vr()}}function Yu(){Gt=Fo.current,Ge(Fo)}function Zr(t,r){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,mb(s)),at!==null)for(s=at.return;s!==null;){var c=s;switch(iu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&rl();break;case 3:Oo(),Ge(Ot),Ge($t),yu();break;case 5:gu(c);break;case 4:Oo();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:du(c.type._context);break;case 22:case 23:Yu()}s=s.return}if(ht=t,at=t=Tr(t.current,null),kt=Gt=r,dt=0,Gi=null,Hu=El=Xr=0,Ft=Yi=null,qr!==null){for(r=0;r<qr.length;r++)if(s=qr[r],c=s.interleaved,c!==null){s.interleaved=null;var f=c.next,x=s.pending;if(x!==null){var k=x.next;x.next=f,c.next=k}s.pending=c}qr=null}return t}function T0(t,r){do{var s=at;try{if(uu(),ml.current=wl,gl){for(var c=Ze.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}gl=!1}if(Yr=0,pt=ut=Ze=null,Hi=!1,Ui=0,Wu.current=null,s===null||s.return===null){dt=1,Gi=r,at=null;break}e:{var x=t,k=s.return,I=s,M=r;if(r=kt,I.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var G=M,oe=I,se=oe.tag;if(!(oe.mode&1)&&(se===0||se===11||se===15)){var re=oe.alternate;re?(oe.updateQueue=re.updateQueue,oe.memoizedState=re.memoizedState,oe.lanes=re.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var we=Zm(k);if(we!==null){we.flags&=-257,e0(we,k,I,x,r),we.mode&1&&Jm(x,G,r),r=we,M=G;var be=r.updateQueue;if(be===null){var ke=new Set;ke.add(M),r.updateQueue=ke}else be.add(M);break e}else{if(!(r&1)){Jm(x,G,r),Xu();break e}M=Error(o(426))}}else if(Xe&&I.mode&1){var it=Zm(k);if(it!==null){!(it.flags&65536)&&(it.flags|=256),e0(it,k,I,x,r),au(zo(M,I));break e}}x=M=zo(M,I),dt!==4&&(dt=2),Yi===null?Yi=[x]:Yi.push(x),x=k;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var U=Ym(x,M,r);Sm(x,U);break e;case 1:I=M;var F=x.type,Q=x.stateNode;if(!(x.flags&128)&&(typeof F.getDerivedStateFromError=="function"||Q!==null&&typeof Q.componentDidCatch=="function"&&(jr===null||!jr.has(Q)))){x.flags|=65536,r&=-r,x.lanes|=r;var de=Xm(x,I,r);Sm(x,de);break e}}x=x.return}while(x!==null)}D0(s)}catch(Se){r=Se,at===s&&s!==null&&(at=s=s.return);continue}break}while(!0)}function A0(){var t=Cl.current;return Cl.current=wl,t===null?wl:t}function Xu(){(dt===0||dt===3||dt===2)&&(dt=4),ht===null||!(Xr&268435455)&&!(El&268435455)||$r(ht,kt)}function Il(t,r){var s=Le;Le|=2;var c=A0();(ht!==t||kt!==r)&&(rr=null,Zr(t,r));do try{Fb();break}catch(f){T0(t,f)}while(!0);if(uu(),Le=s,Cl.current=c,at!==null)throw Error(o(261));return ht=null,kt=0,dt}function Fb(){for(;at!==null;)R0(at)}function Bb(){for(;at!==null&&!f1();)R0(at)}function R0(t){var r=N0(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,r===null?D0(t):at=r,Wu.current=null}function D0(t){var r=t;do{var s=r.alternate;if(t=r.return,r.flags&32768){if(s=Nb(s,r),s!==null){s.flags&=32767,at=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{dt=6,at=null;return}}else if(s=Pb(s,r,Gt),s!==null){at=s;return}if(r=r.sibling,r!==null){at=r;return}at=r=t}while(r!==null);dt===0&&(dt=5)}function eo(t,r,s){var c=We,f=dn.transition;try{dn.transition=null,We=1,Wb(t,r,s,c)}finally{dn.transition=f,We=c}return null}function Wb(t,r,s,c){do Wo();while(Cr!==null);if(Le&6)throw Error(o(327));s=t.finishedWork;var f=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0;var x=s.lanes|s.childLanes;if(k1(t,x),t===ht&&(at=ht=null,kt=0),!(s.subtreeFlags&2064)&&!(s.flags&2064)||Tl||(Tl=!0,L0(Ms,function(){return Wo(),null})),x=(s.flags&15990)!==0,s.subtreeFlags&15990||x){x=dn.transition,dn.transition=null;var k=We;We=1;var I=Le;Le|=4,Wu.current=null,Mb(t,s),b0(s,t),ab(Xc),Hs=!!Yc,Xc=Yc=null,t.current=s,Ob(s),p1(),Le=I,We=k,dn.transition=x}else t.current=s;if(Tl&&(Tl=!1,Cr=t,Al=f),x=t.pendingLanes,x===0&&(jr=null),g1(s.stateNode),Bt(t,ot()),r!==null)for(c=t.onRecoverableError,s=0;s<r.length;s++)f=r[s],c(f.value,{componentStack:f.stack,digest:f.digest});if($l)throw $l=!1,t=Vu,Vu=null,t;return Al&1&&t.tag!==0&&Wo(),x=t.pendingLanes,x&1?t===Ku?Xi++:(Xi=0,Ku=t):Xi=0,vr(),null}function Wo(){if(Cr!==null){var t=wh(Al),r=dn.transition,s=We;try{if(dn.transition=null,We=16>t?16:t,Cr===null)var c=!1;else{if(t=Cr,Cr=null,Al=0,Le&6)throw Error(o(331));var f=Le;for(Le|=4,ve=t.current;ve!==null;){var x=ve,k=x.child;if(ve.flags&16){var I=x.deletions;if(I!==null){for(var M=0;M<I.length;M++){var G=I[M];for(ve=G;ve!==null;){var oe=ve;switch(oe.tag){case 0:case 11:case 15:qi(8,oe,x)}var se=oe.child;if(se!==null)se.return=oe,ve=se;else for(;ve!==null;){oe=ve;var re=oe.sibling,we=oe.return;if(g0(oe),oe===G){ve=null;break}if(re!==null){re.return=we,ve=re;break}ve=we}}}var be=x.alternate;if(be!==null){var ke=be.child;if(ke!==null){be.child=null;do{var it=ke.sibling;ke.sibling=null,ke=it}while(ke!==null)}}ve=x}}if(x.subtreeFlags&2064&&k!==null)k.return=x,ve=k;else e:for(;ve!==null;){if(x=ve,x.flags&2048)switch(x.tag){case 0:case 11:case 15:qi(9,x,x.return)}var U=x.sibling;if(U!==null){U.return=x.return,ve=U;break e}ve=x.return}}var F=t.current;for(ve=F;ve!==null;){k=ve;var Q=k.child;if(k.subtreeFlags&2064&&Q!==null)Q.return=k,ve=Q;else e:for(k=F;ve!==null;){if(I=ve,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:jl(9,I)}}catch(Se){tt(I,I.return,Se)}if(I===k){ve=null;break e}var de=I.sibling;if(de!==null){de.return=I.return,ve=de;break e}ve=I.return}}if(Le=f,vr(),Nn&&typeof Nn.onPostCommitFiberRoot=="function")try{Nn.onPostCommitFiberRoot(Os,t)}catch{}c=!0}return c}finally{We=s,dn.transition=r}}return!1}function I0(t,r,s){r=zo(s,r),r=Ym(t,r,1),t=kr(t,r,1),r=Lt(),t!==null&&(bi(t,1,r),Bt(t,r))}function tt(t,r,s){if(t.tag===3)I0(t,t,s);else for(;r!==null;){if(r.tag===3){I0(r,t,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(jr===null||!jr.has(c))){t=zo(s,t),t=Xm(r,t,1),r=kr(r,t,1),t=Lt(),r!==null&&(bi(r,1,t),Bt(r,t));break}}r=r.return}}function Hb(t,r,s){var c=t.pingCache;c!==null&&c.delete(r),r=Lt(),t.pingedLanes|=t.suspendedLanes&s,ht===t&&(kt&s)===s&&(dt===4||dt===3&&(kt&130023424)===kt&&500>ot()-Uu?Zr(t,0):Hu|=s),Bt(t,r)}function P0(t,r){r===0&&(t.mode&1?(r=_s,_s<<=1,!(_s&130023424)&&(_s=4194304)):r=1);var s=Lt();t=er(t,r),t!==null&&(bi(t,r,s),Bt(t,s))}function Ub(t){var r=t.memoizedState,s=0;r!==null&&(s=r.retryLane),P0(t,s)}function Vb(t,r){var s=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(o(314))}c!==null&&c.delete(r),P0(t,s)}var N0;N0=function(t,r,s){if(t!==null)if(t.memoizedProps!==r.pendingProps||Ot.current)_t=!0;else{if(!(t.lanes&s)&&!(r.flags&128))return _t=!1,Ib(t,r,s);_t=!!(t.flags&131072)}else _t=!1,Xe&&r.flags&1048576&&pm(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;kl(t,r),t=r.pendingProps;var f=Ro(r,$t.current);Mo(r,s),f=bu(null,r,c,t,f,s);var x=ku();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,zt(c)?(x=!0,ol(r)):x=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,hu(r),f.updater=vl,r.stateNode=f,f._reactInternals=r,Tu(r,c,t,s),r=Iu(null,r,c,!0,x,s)):(r.tag=0,Xe&&x&&ou(r),Nt(null,r,f,s),r=r.child),r;case 16:c=r.elementType;e:{switch(kl(t,r),t=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Qb(c),t=vn(c,t),f){case 0:r=Du(null,r,c,t,s);break e;case 1:r=s0(null,r,c,t,s);break e;case 11:r=t0(null,r,c,t,s);break e;case 14:r=n0(null,r,c,vn(c.type,t),s);break e}throw Error(o(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),Du(t,r,c,f,s);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),s0(t,r,c,f,s);case 3:e:{if(l0(r),t===null)throw Error(o(387));c=r.pendingProps,x=r.memoizedState,f=x.element,km(t,r),pl(r,c,null,s);var k=r.memoizedState;if(c=k.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){f=zo(Error(o(423)),r),r=a0(t,r,c,s,f);break e}else if(c!==f){f=zo(Error(o(424)),r),r=a0(t,r,c,s,f);break e}else for(qt=xr(r.stateNode.containerInfo.firstChild),Qt=r,Xe=!0,wn=null,s=vm(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Po(),c===f){r=nr(t,r,s);break e}Nt(t,r,c,s)}r=r.child}return r;case 5:return Cm(r),t===null&&lu(r),c=r.type,f=r.pendingProps,x=t!==null?t.memoizedProps:null,k=f.children,Jc(c,f)?k=null:x!==null&&Jc(c,x)&&(r.flags|=32),i0(t,r),Nt(t,r,k,s),r.child;case 6:return t===null&&lu(r),null;case 13:return c0(t,r,s);case 4:return mu(r,r.stateNode.containerInfo),c=r.pendingProps,t===null?r.child=No(r,null,c,s):Nt(t,r,c,s),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),t0(t,r,c,f,s);case 7:return Nt(t,r,r.pendingProps,s),r.child;case 8:return Nt(t,r,r.pendingProps.children,s),r.child;case 12:return Nt(t,r,r.pendingProps.children,s),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,x=r.memoizedProps,k=f.value,Qe(ul,c._currentValue),c._currentValue=k,x!==null)if(yn(x.value,k)){if(x.children===f.children&&!Ot.current){r=nr(t,r,s);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var I=x.dependencies;if(I!==null){k=x.child;for(var M=I.firstContext;M!==null;){if(M.context===c){if(x.tag===1){M=tr(-1,s&-s),M.tag=2;var G=x.updateQueue;if(G!==null){G=G.shared;var oe=G.pending;oe===null?M.next=M:(M.next=oe.next,oe.next=M),G.pending=M}}x.lanes|=s,M=x.alternate,M!==null&&(M.lanes|=s),fu(x.return,s,r),I.lanes|=s;break}M=M.next}}else if(x.tag===10)k=x.type===r.type?null:x.child;else if(x.tag===18){if(k=x.return,k===null)throw Error(o(341));k.lanes|=s,I=k.alternate,I!==null&&(I.lanes|=s),fu(k,s,r),k=x.sibling}else k=x.child;if(k!==null)k.return=x;else for(k=x;k!==null;){if(k===r){k=null;break}if(x=k.sibling,x!==null){x.return=k.return,k=x;break}k=k.return}x=k}Nt(t,r,f.children,s),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Mo(r,s),f=cn(f),c=c(f),r.flags|=1,Nt(t,r,c,s),r.child;case 14:return c=r.type,f=vn(c,r.pendingProps),f=vn(c.type,f),n0(t,r,c,f,s);case 15:return r0(t,r,r.type,r.pendingProps,s);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:vn(c,f),kl(t,r),r.tag=1,zt(c)?(t=!0,ol(r)):t=!1,Mo(r,s),qm(r,c,f),Tu(r,c,f,s),Iu(null,r,c,!0,t,s);case 19:return d0(t,r,s);case 22:return o0(t,r,s)}throw Error(o(156,r.tag))};function L0(t,r){return hh(t,r)}function Kb(t,r,s,c){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fn(t,r,s,c){return new Kb(t,r,s,c)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qb(t){if(typeof t=="function")return Ju(t)?1:0;if(t!=null){if(t=t.$$typeof,t===he)return 11;if(t===R)return 14}return 2}function Tr(t,r){var s=t.alternate;return s===null?(s=fn(t.tag,r,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=r,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,r=t.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function Pl(t,r,s,c,f,x){var k=2;if(c=t,typeof t=="function")Ju(t)&&(k=1);else if(typeof t=="string")k=5;else e:switch(t){case X:return to(s.children,f,x,r);case ee:k=8,f|=8;break;case ie:return t=fn(12,s,r,f|2),t.elementType=ie,t.lanes=x,t;case le:return t=fn(13,s,r,f),t.elementType=le,t.lanes=x,t;case z:return t=fn(19,s,r,f),t.elementType=z,t.lanes=x,t;case H:return Nl(s,f,x,r);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case me:k=10;break e;case fe:k=9;break e;case he:k=11;break e;case R:k=14;break e;case D:k=16,c=null;break e}throw Error(o(130,t==null?t:typeof t,""))}return r=fn(k,s,r,f),r.elementType=t,r.type=c,r.lanes=x,r}function to(t,r,s,c){return t=fn(7,t,c,r),t.lanes=s,t}function Nl(t,r,s,c){return t=fn(22,t,c,r),t.elementType=H,t.lanes=s,t.stateNode={isHidden:!1},t}function Zu(t,r,s){return t=fn(6,t,null,r),t.lanes=s,t}function ed(t,r,s){return r=fn(4,t.children!==null?t.children:[],t.key,r),r.lanes=s,r.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},r}function qb(t,r,s,c,f){this.tag=r,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$c(0),this.expirationTimes=$c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$c(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function td(t,r,s,c,f,x,k,I,M){return t=new qb(t,r,s,I,M),r===1?(r=1,x===!0&&(r|=8)):r=0,x=fn(3,null,null,r),t.current=x,x.stateNode=t,x.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(x),t}function Gb(t,r,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:c==null?null:""+c,children:t,containerInfo:r,implementation:s}}function M0(t){if(!t)return wr;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(o(170));var r=t;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(zt(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(o(171))}if(t.tag===1){var s=t.type;if(zt(s))return um(t,s,r)}return r}function O0(t,r,s,c,f,x,k,I,M){return t=td(s,c,!0,t,f,x,k,I,M),t.context=M0(null),s=t.current,c=Lt(),f=Er(s),x=tr(c,f),x.callback=r??null,kr(s,x,f),t.current.lanes=f,bi(t,f,c),Bt(t,c),t}function Ll(t,r,s,c){var f=r.current,x=Lt(),k=Er(f);return s=M0(s),r.context===null?r.context=s:r.pendingContext=s,r=tr(x,k),r.payload={element:t},c=c===void 0?null:c,c!==null&&(r.callback=c),t=kr(f,r,k),t!==null&&(Sn(t,f,k,x),fl(t,f,k)),k}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function z0(t,r){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<r?s:r}}function nd(t,r){z0(t,r),(t=t.alternate)&&z0(t,r)}var _0=typeof reportError=="function"?reportError:function(t){console.error(t)};function rd(t){this._internalRoot=t}Ol.prototype.render=rd.prototype.render=function(t){var r=this._internalRoot;if(r===null)throw Error(o(409));Ll(t,r,null,null)},Ol.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var r=t.containerInfo;Jr(function(){Ll(null,t,null,null)}),r[Yn]=null}};function Ol(t){this._internalRoot=t}Ol.prototype.unstable_scheduleHydration=function(t){if(t){var r=kh();t={blockedOn:null,target:t,priority:r};for(var s=0;s<hr.length&&r!==0&&r<hr[s].priority;s++);hr.splice(s,0,t),s===0&&Ch(t)}};function od(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function F0(){}function Yb(t,r,s,c,f){if(f){if(typeof c=="function"){var x=c;c=function(){var G=Ml(k);x.call(G)}}var k=O0(r,c,t,0,null,!1,!1,"",F0);return t._reactRootContainer=k,t[Yn]=k.current,Li(t.nodeType===8?t.parentNode:t),Jr(),k}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var G=Ml(M);I.call(G)}}var M=td(t,0,!1,null,null,!1,!1,"",F0);return t._reactRootContainer=M,t[Yn]=M.current,Li(t.nodeType===8?t.parentNode:t),Jr(function(){Ll(r,M,s,c)}),M}function _l(t,r,s,c,f){var x=s._reactRootContainer;if(x){var k=x;if(typeof f=="function"){var I=f;f=function(){var M=Ml(k);I.call(M)}}Ll(r,k,t,f)}else k=Yb(s,r,t,f,c);return Ml(k)}vh=function(t){switch(t.tag){case 3:var r=t.stateNode;if(r.current.memoizedState.isDehydrated){var s=vi(r.pendingLanes);s!==0&&(Tc(r,s|1),Bt(r,ot()),!(Le&6)&&(Bo=ot()+500,vr()))}break;case 13:Jr(function(){var c=er(t,1);if(c!==null){var f=Lt();Sn(c,t,1,f)}}),nd(t,1)}},Ac=function(t){if(t.tag===13){var r=er(t,134217728);if(r!==null){var s=Lt();Sn(r,t,134217728,s)}nd(t,134217728)}},bh=function(t){if(t.tag===13){var r=Er(t),s=er(t,r);if(s!==null){var c=Lt();Sn(s,t,r,c)}nd(t,r)}},kh=function(){return We},Sh=function(t,r){var s=We;try{return We=t,r()}finally{We=s}},bc=function(t,r,s){switch(r){case"input":if(lt(t,s),r=s.name,s.type==="radio"&&r!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==t&&c.form===t.form){var f=nl(c);if(!f)throw Error(o(90));ne(c),lt(c,f)}}}break;case"textarea":mc(t,s);break;case"select":r=s.value,r!=null&&Pn(t,!!s.multiple,r,!1)}},lh=Gu,ah=Jr;var Xb={usingClientEntryPoint:!1,Events:[zi,To,nl,ih,sh,Gu]},Ji={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jb={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fh(t),t===null?null:t.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{Os=Fl.inject(Jb),Nn=Fl}catch{}}return Wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xb,Wt.createPortal=function(t,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(r))throw Error(o(200));return Gb(t,r,null,s)},Wt.createRoot=function(t,r){if(!od(t))throw Error(o(299));var s=!1,c="",f=_0;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=td(t,1,!1,null,null,s,!1,c,f),t[Yn]=r.current,Li(t.nodeType===8?t.parentNode:t),new rd(r)},Wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var r=t._reactInternals;if(r===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=fh(r),t=t===null?null:t.stateNode,t},Wt.flushSync=function(t){return Jr(t)},Wt.hydrate=function(t,r,s){if(!zl(r))throw Error(o(200));return _l(null,t,r,!0,s)},Wt.hydrateRoot=function(t,r,s){if(!od(t))throw Error(o(405));var c=s!=null&&s.hydratedSources||null,f=!1,x="",k=_0;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(x=s.identifierPrefix),s.onRecoverableError!==void 0&&(k=s.onRecoverableError)),r=O0(r,null,t,1,s??null,f,!1,x,k),t[Yn]=r.current,Li(t),c)for(t=0;t<c.length;t++)s=c[t],f=s._getVersion,f=f(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,f]:r.mutableSourceEagerHydrationData.push(s,f);return new Ol(r)},Wt.render=function(t,r,s){if(!zl(r))throw Error(o(200));return _l(null,t,r,!1,s)},Wt.unmountComponentAtNode=function(t){if(!zl(t))throw Error(o(40));return t._reactRootContainer?(Jr(function(){_l(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1},Wt.unstable_batchedUpdates=Gu,Wt.unstable_renderSubtreeIntoContainer=function(t,r,s,c){if(!zl(s))throw Error(o(200));if(t==null||t._reactInternals===void 0)throw Error(o(38));return _l(t,r,s,!1,c)},Wt.version="18.3.1-next-f1338f8080-20240426",Wt}var q0;function Jx(){if(q0)return ld.exports;q0=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),ld.exports=lk(),ld.exports}var G0;function ak(){if(G0)return Bl;G0=1;var e=Jx();return Bl.createRoot=e.createRoot,Bl.hydrateRoot=e.hydrateRoot,Bl}var ck=ak(),xt=function(){return xt=Object.assign||function(n){for(var o,i=1,a=arguments.length;i<a;i++){o=arguments[i];for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])}return n},xt.apply(this,arguments)};function Xo(e,n,o){if(o||arguments.length===2)for(var i=0,a=n.length,u;i<a;i++)(u||!(i in n))&&(u||(u=Array.prototype.slice.call(n,0,i)),u[i]=n[i]);return e.concat(u||Array.prototype.slice.call(n))}var Ye="-ms-",ps="-moz-",Fe="-webkit-",Zx="comm",Wa="rule",cp="decl",uk="@import",ey="@keyframes",dk="@layer",ty=Math.abs,up=String.fromCharCode,lf=Object.assign;function fk(e,n){return gt(e,0)^45?(((n<<2^gt(e,0))<<2^gt(e,1))<<2^gt(e,2))<<2^gt(e,3):0}function ny(e){return e.trim()}function ir(e,n){return(e=n.exec(e))?e[0]:e}function Ie(e,n,o){return e.replace(n,o)}function na(e,n,o){return e.indexOf(n,o)}function gt(e,n){return e.charCodeAt(n)|0}function Jo(e,n,o){return e.slice(n,o)}function Fn(e){return e.length}function ry(e){return e.length}function ls(e,n){return n.push(e),e}function pk(e,n){return e.map(n).join("")}function Y0(e,n){return e.filter(function(o){return!ir(o,n)})}var Ha=1,Zo=1,oy=0,hn=0,ct=0,ii="";function Ua(e,n,o,i,a,u,d,p){return{value:e,root:n,parent:o,type:i,props:a,children:u,line:Ha,column:Zo,length:d,return:"",siblings:p}}function Rr(e,n){return lf(Ua("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},n)}function Ho(e){for(;e.root;)e=Rr(e.root,{children:[e]});ls(e,e.siblings)}function hk(){return ct}function mk(){return ct=hn>0?gt(ii,--hn):0,Zo--,ct===10&&(Zo=1,Ha--),ct}function Cn(){return ct=hn<oy?gt(ii,hn++):0,Zo++,ct===10&&(Zo=1,Ha++),ct}function ao(){return gt(ii,hn)}function ra(){return hn}function Va(e,n){return Jo(ii,e,n)}function af(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gk(e){return Ha=Zo=1,oy=Fn(ii=e),hn=0,[]}function xk(e){return ii="",e}function ud(e){return ny(Va(hn-1,cf(e===91?e+2:e===40?e+1:e)))}function yk(e){for(;(ct=ao())&&ct<33;)Cn();return af(e)>2||af(ct)>3?"":" "}function wk(e,n){for(;--n&&Cn()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return Va(e,ra()+(n<6&&ao()==32&&Cn()==32))}function cf(e){for(;Cn();)switch(ct){case e:return hn;case 34:case 39:e!==34&&e!==39&&cf(ct);break;case 40:e===41&&cf(e);break;case 92:Cn();break}return hn}function vk(e,n){for(;Cn()&&e+ct!==57;)if(e+ct===84&&ao()===47)break;return"/*"+Va(n,hn-1)+"*"+up(e===47?e:Cn())}function bk(e){for(;!af(ao());)Cn();return Va(e,hn)}function kk(e){return xk(oa("",null,null,null,[""],e=gk(e),0,[0],e))}function oa(e,n,o,i,a,u,d,p,h){for(var m=0,y=0,w=d,S=0,$=0,j=0,b=1,C=1,v=1,E=0,T="",N=a,_=u,K=i,X=T;C;)switch(j=E,E=Cn()){case 40:if(j!=108&&gt(X,w-1)==58){na(X+=Ie(ud(E),"&","&\f"),"&\f",ty(m?p[m-1]:0))!=-1&&(v=-1);break}case 34:case 39:case 91:X+=ud(E);break;case 9:case 10:case 13:case 32:X+=yk(j);break;case 92:X+=wk(ra()-1,7);continue;case 47:switch(ao()){case 42:case 47:ls(Sk(vk(Cn(),ra()),n,o,h),h);break;default:X+="/"}break;case 123*b:p[m++]=Fn(X)*v;case 125*b:case 59:case 0:switch(E){case 0:case 125:C=0;case 59+y:v==-1&&(X=Ie(X,/\f/g,"")),$>0&&Fn(X)-w&&ls($>32?J0(X+";",i,o,w-1,h):J0(Ie(X," ","")+";",i,o,w-2,h),h);break;case 59:X+=";";default:if(ls(K=X0(X,n,o,m,y,a,p,T,N=[],_=[],w,u),u),E===123)if(y===0)oa(X,n,K,K,N,u,w,p,_);else switch(S===99&&gt(X,3)===110?100:S){case 100:case 108:case 109:case 115:oa(e,K,K,i&&ls(X0(e,K,K,0,0,a,p,T,a,N=[],w,_),_),a,_,w,p,i?N:_);break;default:oa(X,K,K,K,[""],_,0,p,_)}}m=y=$=0,b=v=1,T=X="",w=d;break;case 58:w=1+Fn(X),$=j;default:if(b<1){if(E==123)--b;else if(E==125&&b++==0&&mk()==125)continue}switch(X+=up(E),E*b){case 38:v=y>0?1:(X+="\f",-1);break;case 44:p[m++]=(Fn(X)-1)*v,v=1;break;case 64:ao()===45&&(X+=ud(Cn())),S=ao(),y=w=Fn(T=X+=bk(ra())),E++;break;case 45:j===45&&Fn(X)==2&&(b=0)}}return u}function X0(e,n,o,i,a,u,d,p,h,m,y,w){for(var S=a-1,$=a===0?u:[""],j=ry($),b=0,C=0,v=0;b<i;++b)for(var E=0,T=Jo(e,S+1,S=ty(C=d[b])),N=e;E<j;++E)(N=ny(C>0?$[E]+" "+T:Ie(T,/&\f/g,$[E])))&&(h[v++]=N);return Ua(e,n,o,a===0?Wa:p,h,m,y,w)}function Sk(e,n,o,i){return Ua(e,n,o,Zx,up(hk()),Jo(e,2,-2),0,i)}function J0(e,n,o,i,a){return Ua(e,n,o,cp,Jo(e,0,i),Jo(e,i+1,-1),i,a)}function iy(e,n,o){switch(fk(e,n)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 4789:return ps+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+ps+e+Ye+e+e;case 5936:switch(gt(e,n+11)){case 114:return Fe+e+Ye+Ie(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+Ye+Ie(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+Ye+Ie(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Fe+e+Ye+e+e;case 6165:return Fe+e+Ye+"flex-"+e+e;case 5187:return Fe+e+Ie(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+Ye+"flex-$1$2")+e;case 5443:return Fe+e+Ye+"flex-item-"+Ie(e,/flex-|-self/g,"")+(ir(e,/flex-|baseline/)?"":Ye+"grid-row-"+Ie(e,/flex-|-self/g,""))+e;case 4675:return Fe+e+Ye+"flex-line-pack"+Ie(e,/align-content|flex-|-self/g,"")+e;case 5548:return Fe+e+Ye+Ie(e,"shrink","negative")+e;case 5292:return Fe+e+Ye+Ie(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Ie(e,"-grow","")+Fe+e+Ye+Ie(e,"grow","positive")+e;case 4554:return Fe+Ie(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Ie(Ie(Ie(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Ie(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Ie(Ie(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+Ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4200:if(!ir(e,/flex-|baseline/))return Ye+"grid-column-align"+Jo(e,n)+e;break;case 2592:case 3360:return Ye+Ie(e,"template-","")+e;case 4384:case 3616:return o&&o.some(function(i,a){return n=a,ir(i.props,/grid-\w+-end/)})?~na(e+(o=o[n].value),"span",0)?e:Ye+Ie(e,"-start","")+e+Ye+"grid-row-span:"+(~na(o,"span",0)?ir(o,/\d+/):+ir(o,/\d+/)-+ir(e,/\d+/))+";":Ye+Ie(e,"-start","")+e;case 4896:case 4128:return o&&o.some(function(i){return ir(i.props,/grid-\w+-start/)})?e:Ye+Ie(Ie(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ie(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Fn(e)-1-n>6)switch(gt(e,n+1)){case 109:if(gt(e,n+4)!==45)break;case 102:return Ie(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+ps+(gt(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return~na(e,"stretch",0)?iy(Ie(e,"stretch","fill-available"),n,o)+e:e}break;case 5152:case 5920:return Ie(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,a,u,d,p,h,m){return Ye+a+":"+u+m+(d?Ye+a+"-span:"+(p?h:+h-+u)+m:"")+e});case 4949:if(gt(e,n+6)===121)return Ie(e,":",":"+Fe)+e;break;case 6444:switch(gt(e,gt(e,14)===45?18:11)){case 120:return Ie(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(gt(e,14)===45?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+Ye+"$2box$3")+e;case 100:return Ie(e,":",":"+Ye)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ie(e,"scroll-","scroll-snap-")+e}return e}function va(e,n){for(var o="",i=0;i<e.length;i++)o+=n(e[i],i,e,n)||"";return o}function jk(e,n,o,i){switch(e.type){case dk:if(e.children.length)break;case uk:case cp:return e.return=e.return||e.value;case Zx:return"";case ey:return e.return=e.value+"{"+va(e.children,i)+"}";case Wa:if(!Fn(e.value=e.props.join(",")))return""}return Fn(o=va(e.children,i))?e.return=e.value+"{"+o+"}":""}function Ck(e){var n=ry(e);return function(o,i,a,u){for(var d="",p=0;p<n;p++)d+=e[p](o,i,a,u)||"";return d}}function Ek(e){return function(n){n.root||(n=n.return)&&e(n)}}function $k(e,n,o,i){if(e.length>-1&&!e.return)switch(e.type){case cp:e.return=iy(e.value,e.length,o);return;case ey:return va([Rr(e,{value:Ie(e.value,"@","@"+Fe)})],i);case Wa:if(e.length)return pk(o=e.props,function(a){switch(ir(a,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ho(Rr(e,{props:[Ie(a,/:(read-\w+)/,":"+ps+"$1")]})),Ho(Rr(e,{props:[a]})),lf(e,{props:Y0(o,i)});break;case"::placeholder":Ho(Rr(e,{props:[Ie(a,/:(plac\w+)/,":"+Fe+"input-$1")]})),Ho(Rr(e,{props:[Ie(a,/:(plac\w+)/,":"+ps+"$1")]})),Ho(Rr(e,{props:[Ie(a,/:(plac\w+)/,Ye+"input-$1")]})),Ho(Rr(e,{props:[a]})),lf(e,{props:Y0(o,i)});break}return""})}}var Tk={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},ei=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",sy="active",ly="data-styled-version",Ka="6.1.14",dp=`/*!sc*/
`,ba=typeof window<"u"&&"HTMLElement"in window,Ak=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),Rk={},Qa=Object.freeze([]),ti=Object.freeze({});function ay(e,n,o){return o===void 0&&(o=ti),e.theme!==o.theme&&e.theme||n||o.theme}var cy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Dk=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ik=/(^-|-$)/g;function Z0(e){return e.replace(Dk,"-").replace(Ik,"")}var Pk=/(a)(d)/gi,Wl=52,eg=function(e){return String.fromCharCode(e+(e>25?39:97))};function uf(e){var n,o="";for(n=Math.abs(e);n>Wl;n=n/Wl|0)o=eg(n%Wl)+o;return(eg(n%Wl)+o).replace(Pk,"$1-$2")}var dd,uy=5381,qo=function(e,n){for(var o=n.length;o;)e=33*e^n.charCodeAt(--o);return e},dy=function(e){return qo(uy,e)};function fp(e){return uf(dy(e)>>>0)}function Nk(e){return e.displayName||e.name||"Component"}function fd(e){return typeof e=="string"&&!0}var fy=typeof Symbol=="function"&&Symbol.for,py=fy?Symbol.for("react.memo"):60115,Lk=fy?Symbol.for("react.forward_ref"):60112,Mk={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ok={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},hy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zk=((dd={})[Lk]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dd[py]=hy,dd);function tg(e){return("type"in(n=e)&&n.type.$$typeof)===py?hy:"$$typeof"in e?zk[e.$$typeof]:Mk;var n}var _k=Object.defineProperty,Fk=Object.getOwnPropertyNames,ng=Object.getOwnPropertySymbols,Bk=Object.getOwnPropertyDescriptor,Wk=Object.getPrototypeOf,rg=Object.prototype;function my(e,n,o){if(typeof n!="string"){if(rg){var i=Wk(n);i&&i!==rg&&my(e,i,o)}var a=Fk(n);ng&&(a=a.concat(ng(n)));for(var u=tg(e),d=tg(n),p=0;p<a.length;++p){var h=a[p];if(!(h in Ok||o&&o[h]||d&&h in d||u&&h in u)){var m=Bk(n,h);try{_k(e,h,m)}catch{}}}}return e}function uo(e){return typeof e=="function"}function pp(e){return typeof e=="object"&&"styledComponentId"in e}function io(e,n){return e&&n?"".concat(e," ").concat(n):e||n||""}function ka(e,n){if(e.length===0)return"";for(var o=e[0],i=1;i<e.length;i++)o+=e[i];return o}function xs(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function df(e,n,o){if(o===void 0&&(o=!1),!o&&!xs(e)&&!Array.isArray(e))return n;if(Array.isArray(n))for(var i=0;i<n.length;i++)e[i]=df(e[i],n[i]);else if(xs(n))for(var i in n)e[i]=df(e[i],n[i]);return e}function hp(e,n){Object.defineProperty(e,"toString",{value:n})}function fo(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(n.length>0?" Args: ".concat(n.join(", ")):""))}var Hk=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}return e.prototype.indexOfGroup=function(n){for(var o=0,i=0;i<n;i++)o+=this.groupSizes[i];return o},e.prototype.insertRules=function(n,o){if(n>=this.groupSizes.length){for(var i=this.groupSizes,a=i.length,u=a;n>=u;)if((u<<=1)<0)throw fo(16,"".concat(n));this.groupSizes=new Uint32Array(u),this.groupSizes.set(i),this.length=u;for(var d=a;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(n+1),h=(d=0,o.length);d<h;d++)this.tag.insertRule(p,o[d])&&(this.groupSizes[n]++,p++)},e.prototype.clearGroup=function(n){if(n<this.length){var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o;this.groupSizes[n]=0;for(var u=i;u<a;u++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(n){var o="";if(n>=this.length||this.groupSizes[n]===0)return o;for(var i=this.groupSizes[n],a=this.indexOfGroup(n),u=a+i,d=a;d<u;d++)o+="".concat(this.tag.getRule(d)).concat(dp);return o},e}(),ia=new Map,Sa=new Map,sa=1,Hl=function(e){if(ia.has(e))return ia.get(e);for(;Sa.has(sa);)sa++;var n=sa++;return ia.set(e,n),Sa.set(n,e),n},Uk=function(e,n){sa=n+1,ia.set(e,n),Sa.set(n,e)},Vk="style[".concat(ei,"][").concat(ly,'="').concat(Ka,'"]'),Kk=new RegExp("^".concat(ei,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qk=function(e,n,o){for(var i,a=o.split(","),u=0,d=a.length;u<d;u++)(i=a[u])&&e.registerName(n,i)},qk=function(e,n){for(var o,i=((o=n.textContent)!==null&&o!==void 0?o:"").split(dp),a=[],u=0,d=i.length;u<d;u++){var p=i[u].trim();if(p){var h=p.match(Kk);if(h){var m=0|parseInt(h[1],10),y=h[2];m!==0&&(Uk(y,m),Qk(e,y,h[3]),e.getTag().insertRules(m,a)),a.length=0}else a.push(p)}}},og=function(e){for(var n=document.querySelectorAll(Vk),o=0,i=n.length;o<i;o++){var a=n[o];a&&a.getAttribute(ei)!==sy&&(qk(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Gk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gy=function(e){var n=document.head,o=e||n,i=document.createElement("style"),a=function(p){var h=Array.from(p.querySelectorAll("style[".concat(ei,"]")));return h[h.length-1]}(o),u=a!==void 0?a.nextSibling:null;i.setAttribute(ei,sy),i.setAttribute(ly,Ka);var d=Gk();return d&&i.setAttribute("nonce",d),o.insertBefore(i,u),i},Yk=function(){function e(n){this.element=gy(n),this.element.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,u=i.length;a<u;a++){var d=i[a];if(d.ownerNode===o)return d}throw fo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(n,o){try{return this.sheet.insertRule(o,n),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.prototype.getRule=function(n){var o=this.sheet.cssRules[n];return o&&o.cssText?o.cssText:""},e}(),Xk=function(){function e(n){this.element=gy(n),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(n,o){if(n<=this.length&&n>=0){var i=document.createTextNode(o);return this.element.insertBefore(i,this.nodes[n]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.prototype.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Jk=function(){function e(n){this.rules=[],this.length=0}return e.prototype.insertRule=function(n,o){return n<=this.length&&(this.rules.splice(n,0,o),this.length++,!0)},e.prototype.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.prototype.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),ig=ba,Zk={isServer:!ba,useCSSOMInjection:!Ak},ja=function(){function e(n,o,i){n===void 0&&(n=ti),o===void 0&&(o={});var a=this;this.options=xt(xt({},Zk),n),this.gs=o,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ba&&ig&&(ig=!1,og(this)),hp(this,function(){return function(u){for(var d=u.getTag(),p=d.length,h="",m=function(w){var S=function(v){return Sa.get(v)}(w);if(S===void 0)return"continue";var $=u.names.get(S),j=d.getGroup(w);if($===void 0||!$.size||j.length===0)return"continue";var b="".concat(ei,".g").concat(w,'[id="').concat(S,'"]'),C="";$!==void 0&&$.forEach(function(v){v.length>0&&(C+="".concat(v,","))}),h+="".concat(j).concat(b,'{content:"').concat(C,'"}').concat(dp)},y=0;y<p;y++)m(y);return h}(a)})}return e.registerId=function(n){return Hl(n)},e.prototype.rehydrate=function(){!this.server&&ba&&og(this)},e.prototype.reconstructWithOptions=function(n,o){return o===void 0&&(o=!0),new e(xt(xt({},this.options),n),this.gs,o&&this.names||void 0)},e.prototype.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(n=function(o){var i=o.useCSSOMInjection,a=o.target;return o.isServer?new Jk(a):i?new Yk(a):new Xk(a)}(this.options),new Hk(n)));var n},e.prototype.hasNameForId=function(n,o){return this.names.has(n)&&this.names.get(n).has(o)},e.prototype.registerName=function(n,o){if(Hl(n),this.names.has(n))this.names.get(n).add(o);else{var i=new Set;i.add(o),this.names.set(n,i)}},e.prototype.insertRules=function(n,o,i){this.registerName(n,o),this.getTag().insertRules(Hl(n),i)},e.prototype.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.prototype.clearRules=function(n){this.getTag().clearGroup(Hl(n)),this.clearNames(n)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eS=/&/g,tS=/^\s*\/\/.*$/gm;function xy(e,n){return e.map(function(o){return o.type==="rule"&&(o.value="".concat(n," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(n," ")),o.props=o.props.map(function(i){return"".concat(n," ").concat(i)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=xy(o.children,n)),o})}function nS(e){var n,o,i,a=ti,u=a.options,d=u===void 0?ti:u,p=a.plugins,h=p===void 0?Qa:p,m=function(S,$,j){return j.startsWith(o)&&j.endsWith(o)&&j.replaceAll(o,"").length>0?".".concat(n):S},y=h.slice();y.push(function(S){S.type===Wa&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(eS,o).replace(i,m))}),d.prefix&&y.push($k),y.push(jk);var w=function(S,$,j,b){$===void 0&&($=""),j===void 0&&(j=""),b===void 0&&(b="&"),n=b,o=$,i=new RegExp("\\".concat(o,"\\b"),"g");var C=S.replace(tS,""),v=kk(j||$?"".concat(j," ").concat($," { ").concat(C," }"):C);d.namespace&&(v=xy(v,d.namespace));var E=[];return va(v,Ck(y.concat(Ek(function(T){return E.push(T)})))),E};return w.hash=h.length?h.reduce(function(S,$){return $.name||fo(15),qo(S,$.name)},uy).toString():"",w}var rS=new ja,ff=nS(),yy=Y.createContext({shouldForwardProp:void 0,styleSheet:rS,stylis:ff});yy.Consumer;Y.createContext(void 0);function pf(){return g.useContext(yy)}var wy=function(){function e(n,o){var i=this;this.inject=function(a,u){u===void 0&&(u=ff);var d=i.name+u.hash;a.hasNameForId(i.id,d)||a.insertRules(i.id,d,u(i.rules,d,"@keyframes"))},this.name=n,this.id="sc-keyframes-".concat(n),this.rules=o,hp(this,function(){throw fo(12,String(i.name))})}return e.prototype.getName=function(n){return n===void 0&&(n=ff),this.name+n.hash},e}(),oS=function(e){return e>="A"&&e<="Z"};function sg(e){for(var n="",o=0;o<e.length;o++){var i=e[o];if(o===1&&i==="-"&&e[0]==="-")return e;oS(i)?n+="-"+i.toLowerCase():n+=i}return n.startsWith("ms-")?"-"+n:n}var vy=function(e){return e==null||e===!1||e===""},by=function(e){var n,o,i=[];for(var a in e){var u=e[a];e.hasOwnProperty(a)&&!vy(u)&&(Array.isArray(u)&&u.isCss||uo(u)?i.push("".concat(sg(a),":"),u,";"):xs(u)?i.push.apply(i,Xo(Xo(["".concat(a," {")],by(u),!1),["}"],!1)):i.push("".concat(sg(a),": ").concat((n=a,(o=u)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||n in Tk||n.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return i};function Pr(e,n,o,i){if(vy(e))return[];if(pp(e))return[".".concat(e.styledComponentId)];if(uo(e)){if(!uo(u=e)||u.prototype&&u.prototype.isReactComponent||!n)return[e];var a=e(n);return Pr(a,n,o,i)}var u;return e instanceof wy?o?(e.inject(o,i),[e.getName(i)]):[e]:xs(e)?by(e):Array.isArray(e)?Array.prototype.concat.apply(Qa,e.map(function(d){return Pr(d,n,o,i)})):[e.toString()]}function ky(e){for(var n=0;n<e.length;n+=1){var o=e[n];if(uo(o)&&!pp(o))return!1}return!0}var iS=dy(Ka),sS=function(){function e(n,o,i){this.rules=n,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&ky(n),this.componentId=o,this.baseHash=qo(iS,o),this.baseStyle=i,ja.registerId(o)}return e.prototype.generateAndInjectStyles=function(n,o,i){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(n,o,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))a=io(a,this.staticRulesId);else{var u=ka(Pr(this.rules,n,o,i)),d=uf(qo(this.baseHash,u)>>>0);if(!o.hasNameForId(this.componentId,d)){var p=i(u,".".concat(d),void 0,this.componentId);o.insertRules(this.componentId,d,p)}a=io(a,d),this.staticRulesId=d}else{for(var h=qo(this.baseHash,i.hash),m="",y=0;y<this.rules.length;y++){var w=this.rules[y];if(typeof w=="string")m+=w;else if(w){var S=ka(Pr(w,n,o,i));h=qo(h,S+y),m+=S}}if(m){var $=uf(h>>>0);o.hasNameForId(this.componentId,$)||o.insertRules(this.componentId,$,i(m,".".concat($),void 0,this.componentId)),a=io(a,$)}}return a},e}(),ys=Y.createContext(void 0);ys.Consumer;function lS(e){var n=Y.useContext(ys),o=g.useMemo(function(){return function(i,a){if(!i)throw fo(14);if(uo(i)){var u=i(a);return u}if(Array.isArray(i)||typeof i!="object")throw fo(8);return a?xt(xt({},a),i):i}(e.theme,n)},[e.theme,n]);return e.children?Y.createElement(ys.Provider,{value:o},e.children):null}var pd={};function aS(e,n,o){var i=pp(e),a=e,u=!fd(e),d=n.attrs,p=d===void 0?Qa:d,h=n.componentId,m=h===void 0?function(N,_){var K=typeof N!="string"?"sc":Z0(N);pd[K]=(pd[K]||0)+1;var X="".concat(K,"-").concat(fp(Ka+K+pd[K]));return _?"".concat(_,"-").concat(X):X}(n.displayName,n.parentComponentId):h,y=n.displayName,w=y===void 0?function(N){return fd(N)?"styled.".concat(N):"Styled(".concat(Nk(N),")")}(e):y,S=n.displayName&&n.componentId?"".concat(Z0(n.displayName),"-").concat(n.componentId):n.componentId||m,$=i&&a.attrs?a.attrs.concat(p).filter(Boolean):p,j=n.shouldForwardProp;if(i&&a.shouldForwardProp){var b=a.shouldForwardProp;if(n.shouldForwardProp){var C=n.shouldForwardProp;j=function(N,_){return b(N,_)&&C(N,_)}}else j=b}var v=new sS(o,S,i?a.componentStyle:void 0);function E(N,_){return function(K,X,ee){var ie=K.attrs,me=K.componentStyle,fe=K.defaultProps,he=K.foldedComponentIds,le=K.styledComponentId,z=K.target,R=Y.useContext(ys),D=pf(),H=K.shouldForwardProp||D.shouldForwardProp,W=ay(X,R,fe)||ti,B=function(ge,pe,xe){for(var q,A=xt(xt({},pe),{className:void 0,theme:xe}),V=0;V<ge.length;V+=1){var te=uo(q=ge[V])?q(A):q;for(var ne in te)A[ne]=ne==="className"?io(A[ne],te[ne]):ne==="style"?xt(xt({},A[ne]),te[ne]):te[ne]}return pe.className&&(A.className=io(A.className,pe.className)),A}(ie,X,W),P=B.as||z,O={};for(var J in B)B[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&B.theme===W||(J==="forwardedAs"?O.as=B.forwardedAs:H&&!H(J,P)||(O[J]=B[J]));var ae=function(ge,pe){var xe=pf(),q=ge.generateAndInjectStyles(pe,xe.styleSheet,xe.stylis);return q}(me,B),ue=io(he,le);return ae&&(ue+=" "+ae),B.className&&(ue+=" "+B.className),O[fd(P)&&!cy.has(P)?"class":"className"]=ue,ee&&(O.ref=ee),g.createElement(P,O)}(T,N,_)}E.displayName=w;var T=Y.forwardRef(E);return T.attrs=$,T.componentStyle=v,T.displayName=w,T.shouldForwardProp=j,T.foldedComponentIds=i?io(a.foldedComponentIds,a.styledComponentId):"",T.styledComponentId=S,T.target=i?a.target:e,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(N){this._foldedDefaultProps=i?function(_){for(var K=[],X=1;X<arguments.length;X++)K[X-1]=arguments[X];for(var ee=0,ie=K;ee<ie.length;ee++)df(_,ie[ee],!0);return _}({},a.defaultProps,N):N}}),hp(T,function(){return".".concat(T.styledComponentId)}),u&&my(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function lg(e,n){for(var o=[e[0]],i=0,a=n.length;i<a;i+=1)o.push(n[i],e[i+1]);return o}var ag=function(e){return Object.assign(e,{isCss:!0})};function ye(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];if(uo(e)||xs(e))return ag(Pr(lg(Qa,Xo([e],n,!0))));var i=e;return n.length===0&&i.length===1&&typeof i[0]=="string"?Pr(i):ag(Pr(lg(i,n)))}function hf(e,n,o){if(o===void 0&&(o=ti),!n)throw fo(1,n);var i=function(a){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return e(n,o,ye.apply(void 0,Xo([a],u,!1)))};return i.attrs=function(a){return hf(e,n,xt(xt({},o),{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i.withConfig=function(a){return hf(e,n,xt(xt({},o),a))},i}var Sy=function(e){return hf(aS,e)},L=Sy;cy.forEach(function(e){L[e]=Sy(e)});var cS=function(){function e(n,o){this.rules=n,this.componentId=o,this.isStatic=ky(n),ja.registerId(this.componentId+1)}return e.prototype.createStyles=function(n,o,i,a){var u=a(ka(Pr(this.rules,o,i,a)),""),d=this.componentId+n;i.insertRules(d,d,u)},e.prototype.removeStyles=function(n,o){o.clearRules(this.componentId+n)},e.prototype.renderStyles=function(n,o,i,a){n>2&&ja.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,o,i,a)},e}();function uS(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=ye.apply(void 0,Xo([e],n,!1)),a="sc-global-".concat(fp(JSON.stringify(i))),u=new cS(i,a),d=function(h){var m=pf(),y=Y.useContext(ys),w=Y.useRef(m.styleSheet.allocateGSInstance(a)).current;return m.styleSheet.server&&p(w,h,m.styleSheet,y,m.stylis),Y.useLayoutEffect(function(){if(!m.styleSheet.server)return p(w,h,m.styleSheet,y,m.stylis),function(){return u.removeStyles(w,m.styleSheet)}},[w,h,m.styleSheet,y,m.stylis]),null};function p(h,m,y,w,S){if(u.isStatic)u.renderStyles(h,Rk,y,S);else{var $=xt(xt({},m),{theme:ay(m,w,d.defaultProps)});u.renderStyles(h,$,y,S)}}return Y.memo(d)}function vt(e){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=ka(ye.apply(void 0,Xo([e],n,!1))),a=fp(i);return new wy(a,i)}var dS=`
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

`;const mp="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",gp="inset 2px 2px 3px rgba(0,0,0,0.2)",$n=()=>ye`
  -webkit-text-fill-color: ${({theme:e})=>e.materialTextDisabled};
  color: ${({theme:e})=>e.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:e})=>e.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Tn=({background:e="material",color:n="materialText"}={})=>ye`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:o})=>o[e]};
  color: ${({theme:o})=>o[n]};
`,Ss=({mainColor:e="black",secondaryColor:n="transparent",pixelSize:o=2})=>ye`
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
`,Uo={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},fS=({theme:e,topLeftInner:n,bottomRightInner:o,hasShadow:i=!1,hasInsetShadow:a=!1})=>[i?mp:!1,a?gp:!1,n!==null?`inset 1px 1px 0px 1px ${e[n]}`:!1,o!==null?`inset -1px -1px 0 1px ${e[o]}`:!1].filter(Boolean).join(", "),nt=({invert:e=!1,style:n="button"}={})=>{const o={topLeftOuter:e?"bottomRightOuter":"topLeftOuter",topLeftInner:e?"bottomRightInner":"topLeftInner",bottomRightInner:e?"topLeftInner":"bottomRightInner",bottomRightOuter:e?"topLeftOuter":"bottomRightOuter"};return ye`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:i})=>i[Uo[n][o.topLeftOuter]]};
    border-top-color: ${({theme:i})=>i[Uo[n][o.topLeftOuter]]};
    border-right-color: ${({theme:i})=>i[Uo[n][o.bottomRightOuter]]};
    border-bottom-color: ${({theme:i})=>i[Uo[n][o.bottomRightOuter]]};
    box-shadow: ${({theme:i,shadow:a})=>fS({theme:i,topLeftInner:Uo[n][o.topLeftInner],bottomRightInner:Uo[n][o.bottomRightInner],hasShadow:a})};
  `},ni=()=>ye`
  outline: 2px dotted ${({theme:e})=>e.materialText};
`,pS=e=>Buffer.from(e).toString("base64"),hS=typeof btoa<"u"?btoa:pS,Ul=(e,n=0)=>{const o=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${n} 13 13)">
      <polygon fill="${e}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${hS(o)})`},xp=(e="default")=>ye`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:n})=>Ss({mainColor:e==="flat"?n.flatLight:n.material,secondaryColor:e==="flat"?n.canvas:n.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Tn()}
    ${e==="flat"?po():nt({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:n})=>n.material};
  }
  ::-webkit-scrollbar-button {
    ${Tn()}
    ${e==="flat"?po():nt({style:"window"})}
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
    ${e==="default"?nt({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:n})=>Ul(n.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:n})=>Ul(n.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:n})=>Ul(n.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:n})=>Ul(n.materialText,0)};
  }
`,mS=L.a`
  color: ${({theme:e})=>e.anchor};
  font-size: inherit;
  text-decoration: ${({underline:e})=>e?"underline":"none"};
  &:visited {
    color: ${({theme:e})=>e.anchorVisited};
  }
`,gS=g.forwardRef(({children:e,underline:n=!0,...o},i)=>Y.createElement(mS,{ref:i,underline:n,...o},e));gS.displayName="Anchor";const xS=L.header`
  ${nt()};
  ${Tn()};

  position: ${e=>{var n;return(n=e.position)!==null&&n!==void 0?n:e.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,yS=g.forwardRef(({children:e,fixed:n=!0,position:o="fixed",...i},a)=>Y.createElement(xS,{fixed:n,position:n!==!1?o:void 0,ref:a,...i},e));yS.displayName="AppBar";const go=()=>{};function so(e,n,o){return o!==null&&e>o?o:n!==null&&e<n?n:e}function wS(e){if(Math.abs(e)<1){const o=e.toExponential().split("e-"),i=o[0].split(".")[1];return(i?i.length:0)+parseInt(o[1],10)}const n=e.toString().split(".")[1];return n?n.length:0}function cg(e,n,o){const i=Math.round((e-o)/n)*n+o;return Number(i.toFixed(wS(n)))}function Or(e){return typeof e=="number"?`${e}px`:e}const vS=L.div`
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
`,bS=L.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,kS=g.forwardRef(({alt:e="",children:n,noBorder:o=!1,size:i=35,square:a=!1,src:u,...d},p)=>Y.createElement(vS,{noBorder:o,ref:p,size:Or(i),square:a,src:u,...d},u?Y.createElement(bS,{src:u,alt:e}):n));kS.displayName="Avatar";const Ct={sm:"28px",md:"36px",lg:"44px"},SS=ye`
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
`,qa=L.button`
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
            ${!e&&!n&&ni}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?ye`
          ${Tn()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!n&&!e&&nt({style:"buttonThin"})}
          }
          &:active {
            ${!n&&nt({style:"buttonThinPressed"})}
          }
          ${e&&nt({style:"buttonThinPressed"})}
          ${n&&$n()}
        `:ye`
          ${Tn()};
          border: none;
          ${n&&$n()}
          ${e?Ss({mainColor:i.material,secondaryColor:i.borderLightest}):""}
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

            ${nt(e?{style:a==="raised"?"window":"button",invert:!0}:{style:a==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!n&&nt({style:a==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!e&&!n&&ni}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${e?"0":"1px"};
          }
        `}
  ${SS}
`,Ve=g.forwardRef(({onClick:e,disabled:n=!1,children:o,type:i="button",fullWidth:a=!1,size:u="md",square:d=!1,active:p=!1,onTouchStart:h=go,primary:m=!1,variant:y="default",...w},S)=>Y.createElement(qa,{active:p,disabled:n,$disabled:n,fullWidth:a,onClick:n?void 0:e,onTouchStart:h,primary:m,ref:S,size:u,square:d,type:i,variant:y,...w},o));Ve.displayName="Button";function zr({defaultValue:e,onChange:n,onChangePropName:o="onChange",readOnly:i,value:a,valuePropName:u="value"}){const d=a!==void 0,[p,h]=g.useState(e),m=g.useCallback(y=>{d||h(y)},[d]);if(d&&typeof n!="function"&&!i){const y=`Warning: You provided a \`${u}\` prop to a component without an \`${o}\` handler.${u==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${o}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${o}\` function that updates \`${u}\`.`}`;console.warn(y)}return[d?a:p,m]}const mf=L.li`
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
`,Oe=g.forwardRef(({size:e="lg",disabled:n,square:o,children:i,onClick:a,primary:u,...d},p)=>Y.createElement(mf,{$disabled:n,size:e,square:o,onClick:n?void 0:a,primary:u,role:"menuitem",ref:p,"aria-disabled":n,...d},i));Oe.displayName="MenuListItem";const Dr=L.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${e=>e.fullWidth?"100%":"auto"};
  padding: 4px;
  ${nt({style:"window"})}
  ${Tn()}
  ${e=>e.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;Dr.displayName="MenuList";const Bn=20,Ca=L.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${Bn}px;
  height: ${Bn}px;
  opacity: 0;
  z-index: -1;
`,yp=L.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:e})=>e?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:e})=>e.materialText};
  ${e=>e.$disabled&&$n()}

  ${mf} & {
    margin: 0;
    height: 100%;
  }
  ${mf}:hover & {
    ${({$disabled:e,theme:n})=>!e&&ye`
        color: ${n.materialTextInvert};
      `};
  }
`,wp=L.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ca}:focus ~ & {
    ${ni}
  }
  ${Ca}:not(:disabled) ~ &:active {
    ${ni}
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
    ${e=>e.shadow&&`box-shadow:${gp};`}
  }
`,jS=L.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${xp()}
`,jy=g.forwardRef(({children:e,shadow:n=!0,...o},i)=>Y.createElement(Hn,{ref:i,shadow:n,...o},Y.createElement(jS,null,e)));jy.displayName="ScrollView";const Cy=ye`
  width: ${Bn}px;
  height: ${Bn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,CS=L(Hn)`
  ${Cy}
  width: ${Bn}px;
  height: ${Bn}px;
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
  &:before {
    box-shadow: none;
  }
`,ES=L.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
  ${Cy}
  width: ${Bn-4}px;
  height: ${Bn-4}px;
  outline: none;
  border: 2px solid ${({theme:e})=>e.flatDark};
  background: ${({$disabled:e,theme:n})=>e?n.flatLight:n.canvas};
`,$S=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,TS=L.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:e,theme:n})=>Ss({mainColor:e?n.checkmarkDisabled:n.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,AS={flat:ES,default:CS},ft=g.forwardRef(({checked:e,className:n="",defaultChecked:o=!1,disabled:i=!1,indeterminate:a=!1,label:u="",onChange:d=go,style:p={},value:h,variant:m="default",...y},w)=>{var S;const[$,j]=zr({defaultValue:o,onChange:d,readOnly:(S=y.readOnly)!==null&&S!==void 0?S:i,value:e}),b=g.useCallback(E=>{const T=E.target.checked;j(T),d(E)},[d,j]),C=AS[m];let v=null;return a?v=TS:$&&(v=$S),Y.createElement(yp,{$disabled:i,className:n,style:p},Y.createElement(Ca,{disabled:i,onChange:i?void 0:b,readOnly:i,type:"checkbox",value:h,checked:$,"data-indeterminate":a,ref:w,...y}),Y.createElement(C,{$disabled:i,role:"presentation"},v&&Y.createElement(v,{$disabled:i,variant:m})),u&&Y.createElement(wp,null,u))});ft.displayName="Checkbox";const sr=L.div`
  ${({orientation:e,theme:n,size:o="100%"})=>e==="vertical"?`
    height: ${Or(o)};
    border-left: 2px solid ${n.borderDark};
    border-right: 2px solid ${n.borderLightest};
    margin: 0;
    `:`
    width: ${Or(o)};
    border-bottom: 2px solid ${n.borderLightest};
    border-top: 2px solid ${n.borderDark};
    margin: 0;
    `}
`;sr.displayName="Separator";const RS=L(qa)`
  padding-left: 8px;
`,DS=L(sr)`
  height: 21px;
  position: relative;
  top: 0;
`,Ey=L.input`
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
`,IS=L.div`
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
  ${Ey}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ni}
    outline-offset: -8px;
  }
`,PS=L.span`
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
`,NS=g.forwardRef(({value:e,defaultValue:n,onChange:o=go,disabled:i=!1,variant:a="default",...u},d)=>{var p;const[h,m]=zr({defaultValue:n,onChange:o,readOnly:(p=u.readOnly)!==null&&p!==void 0?p:i,value:e}),y=w=>{const S=w.target.value;m(S),o(w)};return Y.createElement(RS,{disabled:i,as:"div",variant:a,size:"md"},Y.createElement(Ey,{onChange:y,readOnly:i,disabled:i,value:h??"#008080",type:"color",ref:d,...u}),Y.createElement(IS,{$disabled:i,color:h??"#008080",role:"presentation"}),a==="default"&&Y.createElement(DS,{orientation:"vertical"}),Y.createElement(PS,{$disabled:i,variant:a}))});NS.displayName="ColorInput";const LS=L.div`
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
      ${Ss({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:e})}
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
`,ug=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],MS=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function OS({digit:e=0,pixelSize:n=2,...o}){const i=MS[Number(e)].map((a,u)=>a?`${ug[u]} active`:ug[u]);return Y.createElement(LS,{pixelSize:n,...o},i.map((a,u)=>Y.createElement("span",{className:a,key:u})))}const zS=L.div`
  ${nt({style:"status"})}
  display: inline-flex;
  background: #000000;
`,_S={sm:1,md:2,lg:3,xl:4},FS=g.forwardRef(({value:e=0,minLength:n=3,size:o="md",...i},a)=>{const u=g.useMemo(()=>e.toString().padStart(n,"0").split(""),[n,e]);return Y.createElement(zS,{ref:a,...i},u.map((d,p)=>Y.createElement(OS,{digit:d,pixelSize:_S[o],key:p})))});FS.displayName="Counter";const $y=ye`
  display: flex;
  align-items: center;
  width: ${({fullWidth:e})=>e?"100%":"auto"};
  min-height: ${Ct.md};
`,BS=L(Hn).attrs({"data-testid":"variant-default"})`
  ${$y}
  background: ${({$disabled:e,theme:n})=>e?n.material:n.canvas};
`,WS=L.div.attrs({"data-testid":"variant-flat"})`
  ${po()}
  ${$y}
  position: relative;
`,Ty=ye`
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
`,HS=L.input`
  ${Ty}
  padding: 0 8px;
`,US=L.textarea`
  ${Ty}
  padding: 8px;
  resize: none;
  ${({variant:e})=>xp(e)}
`,ar=g.forwardRef(({className:e,disabled:n=!1,fullWidth:o,onChange:i=go,shadow:a=!0,style:u,variant:d="default",...p},h)=>{const m=d==="flat"?WS:BS,y=g.useMemo(()=>{var w;return p.multiline?Y.createElement(US,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,variant:d,...p}):Y.createElement(HS,{disabled:n,onChange:n?void 0:i,readOnly:n,ref:h,type:(w=p.type)!==null&&w!==void 0?w:"text",variant:d,...p})},[n,i,p,h,d]);return Y.createElement(m,{className:e,fullWidth:o,$disabled:n,shadow:a,style:u},y)});ar.displayName="TextInput";const VS=L.div`
  display: inline-flex;
  align-items: center;
`,gf=L(Ve)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:e})=>e==="flat"?ye`
          height: calc(50% - 1px);
        `:ye`
          height: 50%;
        `}
`,KS=L.div`
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
`,dg=L.span`
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
  ${gf}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:e})=>e.materialTextDisabledShadow}
    );
    ${({invert:e})=>e?ye`
            border-bottom-color: ${({theme:n})=>n.materialTextDisabled};
          `:ye`
            border-top-color: ${({theme:n})=>n.materialTextDisabled};
          `}
  }
`,Ay=g.forwardRef(({className:e,defaultValue:n,disabled:o=!1,max:i,min:a,onChange:u,readOnly:d,step:p=1,style:h,value:m,variant:y="default",width:w,...S},$)=>{const[j,b]=zr({defaultValue:n,onChange:u,readOnly:d,value:m}),C=g.useCallback(K=>{const X=parseFloat(K.target.value);b(X)},[b]),v=g.useCallback(K=>{const X=so(parseFloat(((j??0)+K).toFixed(2)),a??null,i??null);b(X),u==null||u(X)},[i,a,u,b,j]),E=g.useCallback(()=>{j!==void 0&&(u==null||u(j))},[u,j]),T=g.useCallback(()=>{v(p)},[v,p]),N=g.useCallback(()=>{v(-p)},[v,p]),_=y==="flat"?"flat":"raised";return Y.createElement(VS,{className:e,style:{...h,width:w!==void 0?Or(w):"auto"},...S},Y.createElement(ar,{value:j,variant:y,onChange:C,disabled:o,type:"number",readOnly:d,ref:$,fullWidth:!0,onBlur:E}),Y.createElement(KS,{variant:y},Y.createElement(gf,{"data-testid":"increment",variant:_,disabled:o||d,onClick:T},Y.createElement(dg,{invert:!0})),Y.createElement(gf,{"data-testid":"decrement",variant:_,disabled:o||d,onClick:N},Y.createElement(dg,null))))});Ay.displayName="NumberInput";function QS(){const e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let n="";for(let o=0;o<10;o+=1)n+=e[Math.floor(Math.random()*e.length)];return n}const Ry=e=>g.useMemo(()=>QS(),[e]),Dy=ye`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Iy=ye`
  background: ${({theme:e})=>e.hoverBackground};
  color: ${({theme:e})=>e.canvasTextInvert};
`,vp=L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,qS=L.div`
  ${Dy}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${vp}:focus & {
    ${Iy}
    border: 2px dotted ${({theme:e})=>e.focusSecondary};
  }
`,Py=ye`
  height: ${Ct.md};
  display: inline-block;
  color: ${({$disabled:e=!1,theme:n})=>e?$n():n.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:e})=>e?"default":"pointer"};
`,GS=L(Hn)`
  ${Py}
  background: ${({$disabled:e=!1,theme:n})=>e?n.material:n.canvas};
  &:focus {
    outline: 0;
  }
`,YS=L.div`
  ${po()}
  ${Py}
  background: ${({$disabled:e=!1,theme:n})=>e?n.flatLight:n.canvas};
`,XS=L.select`
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
  ${Dy}
  cursor: pointer;
  &:disabled {
    ${$n()};
    background: ${({theme:e})=>e.material};
    cursor: default;
  }
`,Ny=L(qa).attrs(()=>({"aria-hidden":"true"}))`
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
`,JS=L.span`
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
  ${Ny}:active & {
    margin-top: 2px;
  }
`,ZS=L.ul`
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
  box-shadow: ${mp};
  ${({variant:e="default"})=>e==="flat"?ye`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:n})=>n.flatDark};
        `:ye`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:n})=>n.borderDarkest};
        `}
  ${({variant:e="default"})=>xp(e)}
`,ej=L.li`
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
  ${({active:e})=>e?Iy:""}
  user-select: none;
`,tj=[],Ly=({className:e,defaultValue:n,disabled:o,native:i,onChange:a,options:u=tj,readOnly:d,style:p,value:h,variant:m,width:y})=>{var w;const S=g.useMemo(()=>u.filter(Boolean),[u]),[$,j]=zr({defaultValue:n??((w=S==null?void 0:S[0])===null||w===void 0?void 0:w.value),onChange:a,readOnly:d,value:h}),b=!(o||d),C=g.useMemo(()=>({className:e,style:{...p,width:y}}),[e,p,y]),v=g.useMemo(()=>Y.createElement(Ny,{as:"div","data-testid":"select-button",$disabled:o,native:i,tabIndex:-1,variant:m==="flat"?"flat":"raised"},Y.createElement(JS,{"data-testid":"select-icon",$disabled:o})),[o,i,m]),E=g.useMemo(()=>m==="flat"?YS:GS,[m]);return g.useMemo(()=>({isEnabled:b,options:S,value:$,setValue:j,wrapperProps:C,DropdownButton:v,Wrapper:E}),[v,E,b,S,j,$,C])},nj={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},rj=1e3,oj=({onBlur:e,onChange:n,onClose:o,onFocus:i,onKeyDown:a,onMouseDown:u,onOpen:d,open:p,options:h,readOnly:m,value:y,selectRef:w,setValue:S,wrapperRef:$})=>{const j=g.useRef(null),b=g.useRef([]),C=g.useRef(0),v=g.useRef(0),E=g.useRef(),T=g.useRef("search"),N=g.useRef(""),_=g.useRef(),[K,X]=zr({defaultValue:!1,onChange:d,onChangePropName:"onOpen",readOnly:m,value:p,valuePropName:"open"}),ee=g.useMemo(()=>{const A=h.findIndex(V=>V.value===y);return C.current=so(A,0,null),h[A]},[h,y]),[ie,me]=g.useState(h[0]),fe=g.useCallback(A=>{const V=j.current,te=b.current[A];if(!te||!V){E.current=A;return}E.current=void 0;const ne=V.clientHeight,ce=V.scrollTop,je=V.scrollTop+ne,Re=te.offsetTop,_e=te.offsetHeight,lt=te.offsetTop+te.offsetHeight;Re<ce&&V.scrollTo(0,Re),lt>je&&V.scrollTo(0,Re-ne+_e),te.focus({preventScroll:!0})},[j]),he=g.useCallback((A,{scroll:V}={})=>{var te;const ne=h.length-1;let ce;switch(A){case"first":{ce=0;break}case"last":{ce=ne;break}case"next":{ce=so(v.current+1,0,ne);break}case"previous":{ce=so(v.current-1,0,ne);break}case"selected":{ce=so((te=C.current)!==null&&te!==void 0?te:0,0,ne);break}default:ce=A}v.current=ce,me(h[ce]),V&&fe(ce)},[v,h,fe]),le=g.useCallback(({fromEvent:A})=>{X(!0),he("selected",{scroll:!0}),d==null||d({fromEvent:A})},[he,d,X]),z=g.useCallback(()=>{T.current="search",N.current="",clearTimeout(_.current)},[]),R=g.useCallback(({focusSelect:A,fromEvent:V})=>{var te;o==null||o({fromEvent:V}),X(!1),me(h[0]),z(),E.current=void 0,A&&((te=w.current)===null||te===void 0||te.focus())},[z,o,h,w,X]),D=g.useCallback(({fromEvent:A})=>{K?R({focusSelect:!1,fromEvent:A}):le({fromEvent:A})},[R,le,K]),H=g.useCallback((A,{fromEvent:V})=>{C.current!==A&&(C.current=A,S(h[A].value),n==null||n(h[A],{fromEvent:V}))},[n,h,S]),W=g.useCallback(({focusSelect:A,fromEvent:V})=>{H(v.current,{fromEvent:V}),R({focusSelect:A,fromEvent:V})},[R,H]),B=g.useCallback((A,{fromEvent:V,select:te})=>{var ne;switch(T.current==="cycleFirstLetter"&&A!==N.current&&(T.current="search"),A===N.current?T.current="cycleFirstLetter":N.current+=A,T.current){case"search":{let ce=h.findIndex(je=>{var Re;return((Re=je.label)===null||Re===void 0?void 0:Re.toLocaleUpperCase().indexOf(N.current))===0});ce<0&&(ce=h.findIndex(je=>{var Re;return((Re=je.label)===null||Re===void 0?void 0:Re.toLocaleUpperCase().indexOf(A))===0}),N.current=A),ce>=0&&(te?H(ce,{fromEvent:V}):he(ce,{scroll:!0}));break}case"cycleFirstLetter":{const ce=te?(ne=C.current)!==null&&ne!==void 0?ne:-1:v.current;let je=h.findIndex((Re,_e)=>{var lt;return _e>ce&&((lt=Re.label)===null||lt===void 0?void 0:lt.toLocaleUpperCase().indexOf(A))===0});je<0&&(je=h.findIndex(Re=>{var _e;return((_e=Re.label)===null||_e===void 0?void 0:_e.toLocaleUpperCase().indexOf(A))===0})),je>=0&&(te?H(je,{fromEvent:V}):he(je,{scroll:!0}));break}}clearTimeout(_.current),_.current=setTimeout(()=>{T.current==="search"&&(N.current="")},rj)},[he,h,H]),P=g.useCallback(A=>{var V;A.button===0&&(A.preventDefault(),(V=w.current)===null||V===void 0||V.focus(),D({fromEvent:A}),u==null||u(A))},[u,w,D]),O=g.useCallback(A=>{W({focusSelect:!0,fromEvent:A})},[W]),J=g.useCallback(A=>{const{altKey:V,code:te,ctrlKey:ne,metaKey:ce,shiftKey:je}=A,{ARROW_DOWN:Re,ARROW_UP:_e,END:lt,ENTER:In,ESC:sn,HOME:qn,SPACE:Pn,TAB:Gn}=nj,hi=V||ne||ce||je;if(!(te===Gn&&(V||ne||ce)||te!==Gn&&hi))switch(te){case Re:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("next",{scroll:!0});break}case _e:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("previous",{scroll:!0});break}case lt:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("last",{scroll:!0});break}case In:{if(!K)return;A.preventDefault(),W({focusSelect:!0,fromEvent:A});break}case sn:{if(!K)return;A.preventDefault(),R({focusSelect:!0,fromEvent:A});break}case qn:{if(A.preventDefault(),!K){le({fromEvent:A});return}he("first",{scroll:!0});break}case Pn:{A.preventDefault(),K?W({focusSelect:!0,fromEvent:A}):le({fromEvent:A});break}case Gn:{if(!K)return;je||A.preventDefault(),W({focusSelect:!je,fromEvent:A});break}default:!hi&&te.match(/^Key/)&&(A.preventDefault(),A.stopPropagation(),B(te.replace(/^Key/,""),{select:!K,fromEvent:A}))}},[he,R,K,le,B,W]),ae=g.useCallback(A=>{J(A),a==null||a(A)},[J,a]),ue=g.useCallback(A=>{he(A)},[he]),ge=g.useCallback(A=>{K||(z(),e==null||e(A))},[z,e,K]),pe=g.useCallback(A=>{z(),i==null||i(A)},[z,i]),xe=g.useCallback(A=>{j.current=A,E.current!==void 0&&fe(E.current)},[fe]),q=g.useCallback((A,V)=>{b.current[V]=A,E.current===V&&fe(E.current)},[fe]);return g.useEffect(()=>{if(!K)return()=>{};const A=V=>{var te;const ne=V.target;!((te=$.current)===null||te===void 0)&&te.contains(ne)||(V.preventDefault(),R({focusSelect:!1,fromEvent:V}))};return document.addEventListener("mousedown",A),()=>{document.removeEventListener("mousedown",A)}},[R,K,$]),g.useMemo(()=>({activeOption:ie,handleActivateOptionIndex:ue,handleBlur:ge,handleButtonKeyDown:ae,handleDropdownKeyDown:J,handleFocus:pe,handleMouseDown:P,handleOptionClick:O,handleSetDropdownRef:xe,handleSetOptionRef:q,open:K,selectedOption:ee}),[ie,ue,ge,ae,pe,J,P,O,xe,q,K,ee])},ij=g.forwardRef(({className:e,defaultValue:n,disabled:o,onChange:i,options:a,readOnly:u,style:d,value:p,variant:h,width:m,...y},w)=>{const{isEnabled:S,options:$,setValue:j,value:b,DropdownButton:C,Wrapper:v}=Ly({defaultValue:n,disabled:o,native:!0,onChange:i,options:a,readOnly:u,value:p,variant:h}),E=g.useCallback(T=>{const N=$.find(_=>_.value===T.target.value);N&&(j(N.value),i==null||i(N,{fromEvent:T}))},[i,$,j]);return Y.createElement(v,{className:e,style:{...d,width:m}},Y.createElement(vp,null,Y.createElement(XS,{...y,disabled:o,onChange:S?E:go,ref:w,value:b},$.map((T,N)=>{var _;return Y.createElement("option",{key:`${T.value}-${N}`,value:T.value},(_=T.label)!==null&&_!==void 0?_:T.value)})),C))});ij.displayName="SelectNative";function sj({activateOptionIndex:e,active:n,index:o,onClick:i,option:a,selected:u,setRef:d}){const p=g.useCallback(()=>{e(o)},[e,o]),h=g.useCallback(y=>{d(y,o)},[o,d]),m=Ry();return Y.createElement(ej,{active:n,"aria-selected":u?"true":void 0,"data-value":a.value,id:m,onClick:i,onMouseEnter:p,ref:h,role:"option",tabIndex:0},a.label)}function lj({"aria-label":e,"aria-labelledby":n,className:o,defaultValue:i,disabled:a=!1,formatDisplay:u,inputProps:d,labelId:p,menuMaxHeight:h,name:m,onBlur:y,onChange:w,onClose:S,onFocus:$,onKeyDown:j,onMouseDown:b,onOpen:C,open:v,options:E,readOnly:T,shadow:N=!0,style:_,variant:K="default",value:X,width:ee="auto",...ie},me){const{isEnabled:fe,options:he,setValue:le,value:z,wrapperProps:R,DropdownButton:D,Wrapper:H}=Ly({className:o,defaultValue:i,disabled:a,native:!1,onChange:w,options:E,style:_,readOnly:T,value:X,variant:K,width:ee}),W=g.useRef(null),B=g.useRef(null),P=g.useRef(null),{activeOption:O,handleActivateOptionIndex:J,handleBlur:ae,handleButtonKeyDown:ue,handleDropdownKeyDown:ge,handleFocus:pe,handleMouseDown:xe,handleOptionClick:q,handleSetDropdownRef:A,handleSetOptionRef:V,open:te,selectedOption:ne}=oj({onBlur:y,onChange:w,onClose:S,onFocus:$,onKeyDown:j,onMouseDown:b,onOpen:C,open:v,options:he,value:z,selectRef:B,setValue:le,wrapperRef:P});g.useImperativeHandle(me,()=>({focus:In=>{var sn;(sn=B.current)===null||sn===void 0||sn.focus(In)},node:W.current,value:String(z)}),[z]);const ce=g.useMemo(()=>ne?typeof u=="function"?u(ne):ne.label:"",[u,ne]),je=fe?1:void 0,Re=g.useMemo(()=>h?{overflow:"auto",maxHeight:h}:void 0,[h]),_e=Ry(),lt=g.useMemo(()=>he.map((In,sn)=>{const qn=`${z}-${sn}`,Pn=In===O,Gn=In===ne;return Y.createElement(sj,{activateOptionIndex:J,active:Pn,index:sn,key:qn,onClick:q,option:In,selected:Gn,setRef:V})}),[O,J,q,V,he,ne,z]);return Y.createElement(H,{...R,$disabled:a,ref:P,shadow:N,style:{..._,width:ee}},Y.createElement("input",{name:m,ref:W,type:"hidden",value:String(z),...d}),Y.createElement(vp,{"aria-disabled":a,"aria-expanded":te,"aria-haspopup":"listbox","aria-label":e,"aria-labelledby":n??p,"aria-owns":fe&&te?_e:void 0,onBlur:ae,onFocus:pe,onKeyDown:ue,onMouseDown:fe?xe:b,ref:B,role:"button",tabIndex:je,...ie},Y.createElement(qS,null,ce),D),fe&&te&&Y.createElement(ZS,{id:_e,onKeyDown:ge,ref:A,role:"listbox",style:Re,tabIndex:0,variant:K},lt))}const My=g.forwardRef(lj);My.displayName="Select";const aj=L.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${e=>e.noPadding?"0":"4px"};
`,xf=g.forwardRef(function({children:n,noPadding:o=!1,...i},a){return Y.createElement(aj,{noPadding:o,ref:a,...i},n)});xf.displayName="Toolbar";const cj=L.div`
  padding: 16px;
`,Br=g.forwardRef(function({children:n,...o},i){return Y.createElement(cj,{ref:i,...o},n)});Br.displayName="WindowContent";const uj=L.div`
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

  ${qa} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,si=g.forwardRef(function({active:n=!0,children:o,...i},a){return Y.createElement(uj,{active:n,ref:a,...i},o)});si.displayName="WindowHeader";const dj=L.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${nt({style:"window"})}
  ${Tn()}
`,fj=L.span`
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
`,li=g.forwardRef(({children:e,resizable:n=!1,resizeRef:o,shadow:i=!0,...a},u)=>Y.createElement(dj,{ref:u,shadow:i,...a},e,n&&Y.createElement(fj,{"data-testid":"resizeHandle",ref:o})));li.displayName="Window";const pj=L(jy)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:e})=>e.canvas};
`,hj=L.div`
  display: flex;
  background: ${({theme:e})=>e.materialDark};
  color: #dfe0e3;
`,mj=L.div`
  display: flex;
  flex-wrap: wrap;
`,or=L.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,gj=L.span`
  cursor: pointer;

  background: ${({active:e,theme:n})=>e?n.hoverBackground:"transparent"};
  color: ${({active:e,theme:n})=>e?n.canvasTextInvert:n.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:e,active:n})=>n?"none":e.materialDark};
  }
`,xj=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function yj(e,n){return new Date(e,n+1,0).getDate()}function wj(e,n,o){return new Date(e,n,o).getDay()}function vj(e){const n=new Date(Date.parse(e)),o=n.getUTCDate(),i=n.getUTCMonth(),a=n.getUTCFullYear();return{day:o,month:i,year:a}}const bj=g.forwardRef(({className:e,date:n=new Date().toISOString(),onAccept:o,onCancel:i,shadow:a=!0},u)=>{const[d,p]=g.useState(()=>vj(n)),{year:h,month:m,day:y}=d,w=g.useCallback(({value:C})=>{p(v=>({...v,month:C}))},[]),S=g.useCallback(C=>{p(v=>({...v,year:C}))},[]),$=g.useCallback(C=>{p(v=>({...v,day:C}))},[]),j=g.useCallback(()=>{const C=[d.year,d.month+1,d.day].map(v=>String(v).padStart(2,"0")).join("-");o==null||o(C)},[d.day,d.month,d.year,o]),b=g.useMemo(()=>{const C=Array.from({length:42}),v=wj(h,m,1);let E=y;const T=yj(h,m);return E=E<T?E:T,C.forEach((N,_)=>{if(_>=v&&_<T+v){const K=_-v+1;C[_]=Y.createElement(or,{key:_,onClick:()=>{$(K)}},Y.createElement(gj,{active:K===E},K))}else C[_]=Y.createElement(or,{key:_})}),C},[y,$,m,h]);return Y.createElement(li,{className:e,ref:u,shadow:a,style:{margin:20}},Y.createElement(si,null,Y.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),Y.createElement(Br,null,Y.createElement(xf,{noPadding:!0,style:{justifyContent:"space-between"}},Y.createElement(My,{options:xj,value:m,onChange:w,width:128,menuMaxHeight:200}),Y.createElement(Ay,{value:h,onChange:S,width:100})),Y.createElement(pj,null,Y.createElement(hj,null,Y.createElement(or,null,"S"),Y.createElement(or,null,"M"),Y.createElement(or,null,"T"),Y.createElement(or,null,"W"),Y.createElement(or,null,"T"),Y.createElement(or,null,"F"),Y.createElement(or,null,"S")),Y.createElement(mj,null,b)),Y.createElement(xf,{noPadding:!0,style:{justifyContent:"space-between"}},Y.createElement(Ve,{fullWidth:!0,onClick:i,disabled:!i},"Cancel"),Y.createElement(Ve,{fullWidth:!0,onClick:o?j:void 0,disabled:!o},"OK"))))});bj.displayName="DatePicker";const kj=e=>{switch(e){case"status":case"well":return ye`
        ${nt({style:"status"})}
      `;case"window":case"outside":return ye`
        ${nt({style:"window"})}
      `;case"field":return ye`
        ${nt({style:"field"})}
      `;default:return ye`
        ${nt()}
      `}},Sj=L.div`
  position: relative;
  font-size: 1rem;
  ${({variant:e})=>kj(e)}
  ${({variant:e})=>Tn(e==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,wt=g.forwardRef(({children:e,shadow:n=!1,variant:o="window",...i},a)=>Y.createElement(Sj,{ref:a,shadow:n,variant:o,...i},e));wt.displayName="Frame";const jj=L.fieldset`
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
`,Cj=L.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:e,variant:n})=>n==="flat"?e.canvas:e.material};
`,Oy=g.forwardRef(({label:e,disabled:n=!1,variant:o="default",children:i,...a},u)=>Y.createElement(jj,{"aria-disabled":n,$disabled:n,variant:o,ref:u,...a},e&&Y.createElement(Cj,{variant:o},e),i));Oy.displayName="GroupBox";const Ej=L.div`
  ${({theme:e,size:n="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Or(n)};
  width: 5px;
  border-top: 2px solid ${e.borderLightest};
  border-left: 2px solid ${e.borderLightest};
  border-bottom: 2px solid ${e.borderDark};
  border-right: 2px solid ${e.borderDark};
  background: ${e.material};
`}
`;Ej.displayName="Handle";const $j="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Tj=L.div`
  display: inline-block;
  height: ${({size:e})=>Or(e)};
  width: ${({size:e})=>Or(e)};
`,Aj=L.span`
  display: block;
  background: ${$j};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Rj=g.forwardRef(({size:e=30,...n},o)=>Y.createElement(Tj,{size:e,ref:o,...n},Y.createElement(Aj,null)));Rj.displayName="Hourglass";const Dj=L.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Ij=L.div`
  position: relative;
`,Pj=L.div`
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
`,Nj=L(Hn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Lj=L.div`
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
`,zy=g.forwardRef(({backgroundStyles:e,children:n,...o},i)=>Y.createElement(Dj,{ref:i,...o},Y.createElement(Ij,null,Y.createElement(Pj,null,Y.createElement(Nj,{style:e},n)),Y.createElement(Lj,null))));zy.displayName="Monitor";const Mj=L.div`
  display: inline-block;
  height: ${Ct.md};
  width: 100%;
`,Oj=L(Hn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,_y=ye`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,zj=L.div`
  position: relative;
  top: 4px;
  ${_y}
  background: ${({theme:e})=>e.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:e})=>e.materialText};
`,_j=L.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${_y}
  color: ${({theme:e})=>e.materialTextInvert};
  background: ${({theme:e})=>e.progress};
  clip-path: polygon(
    0 0,
    ${({value:e=0})=>e}% 0,
    ${({value:e=0})=>e}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Fj=L.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Fy=17,Bj=L.span`
  display: inline-block;
  width: ${Fy}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:e})=>e.progress};
  border-color: ${({theme:e})=>e.material};
  border-width: 0px 1px;
  border-style: solid;
`,Wj=g.forwardRef(({hideValue:e=!1,shadow:n=!0,value:o,variant:i="default",...a},u)=>{const d=e?null:`${o}%`,p=g.useRef(null),[h,m]=g.useState([]),y=g.useCallback(()=>{if(!p.current||o===void 0)return;const w=p.current.getBoundingClientRect().width,S=Math.round(o/100*w/Fy);m(Array.from({length:S}))},[o]);return g.useEffect(()=>(y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)),[y]),Y.createElement(Mj,{"aria-valuenow":o!==void 0?Math.round(o):void 0,ref:u,role:"progressbar",variant:i,...a},Y.createElement(Oj,{variant:i,shadow:n},i==="default"?Y.createElement(Y.Fragment,null,Y.createElement(zj,{"data-testid":"defaultProgress1"},d),Y.createElement(_j,{"data-testid":"defaultProgress2",value:o},d)):Y.createElement(Fj,{ref:p,"data-testid":"tileProgress"},h.map((w,S)=>Y.createElement(Bj,{key:S})))))});Wj.displayName="ProgressBar";const By=ye`
  width: ${Bn}px;
  height: ${Bn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Hj=L(Hn)`
  ${By}
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
`,Uj=L.div`
  ${po()}
  ${By}
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
`,Vj=L.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Kj={flat:Uj,default:Hj},Qj=g.forwardRef(({checked:e,className:n="",disabled:o=!1,label:i="",onChange:a,style:u={},variant:d="default",...p},h)=>{const m=Kj[d];return Y.createElement(yp,{$disabled:o,className:n,style:u},Y.createElement(m,{$disabled:o,role:"presentation"},e&&Y.createElement(Vj,{$disabled:o,variant:d})),Y.createElement(Ca,{disabled:o,onChange:o?void 0:a,readOnly:o,type:"radio",checked:e,ref:h,...p}),i&&Y.createElement(wp,null,i))});Qj.displayName="Radio";const qj=typeof window<"u"?g.useLayoutEffect:g.useEffect;function no(e){const n=g.useRef(e);return qj(()=>{n.current=e}),g.useCallback((...o)=>(0,n.current)(...o),[])}function fg(e,n){typeof e=="function"?e(n):e&&(e.current=n)}function pg(e,n){return g.useMemo(()=>e==null&&n==null?null:o=>{fg(e,o),fg(n,o)},[e,n])}var Mt=Jx();let Ga=!0,yf=!1,hg;const Gj={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Yj(e){if("type"in e){const{type:n,tagName:o}=e;if(o==="INPUT"&&Gj[n]&&!e.readOnly||o==="TEXTAREA"&&!e.readOnly)return!0}return!!("isContentEditable"in e&&e.isContentEditable)}function Xj(e){e.metaKey||e.altKey||e.ctrlKey||(Ga=!0)}function hd(){Ga=!1}function Jj(){this.visibilityState==="hidden"&&yf&&(Ga=!0)}function Zj(e){e.addEventListener("keydown",Xj,!0),e.addEventListener("mousedown",hd,!0),e.addEventListener("pointerdown",hd,!0),e.addEventListener("touchstart",hd,!0),e.addEventListener("visibilitychange",Jj,!0)}function eC(e){const{target:n}=e;try{return n.matches(":focus-visible")}catch{}return Ga||Yj(n)}function tC(){yf=!0,window.clearTimeout(hg),hg=window.setTimeout(()=>{yf=!1},100)}function nC(){const e=g.useCallback(n=>{const o=Mt.findDOMNode(n);o!=null&&Zj(o.ownerDocument)},[]);return{isFocusVisible:eC,onBlurVisible:tC,ref:e}}function rC(e,n,o){return(o-n)*e+n}function Vl(e,n){if(n!==void 0&&"changedTouches"in e){for(let o=0;o<e.changedTouches.length;o+=1){const i=e.changedTouches[o];if(i.identifier===n)return{x:i.clientX,y:i.clientY}}return!1}return"clientX"in e?{x:e.clientX,y:e.clientY}:!1}function Kl(e){return e&&e.ownerDocument||document}function oC(e,n){var o;const{index:i}=(o=e.reduce((a,u,d)=>{const p=Math.abs(n-u);return a===null||p<a.distance||p===a.distance?{distance:p,index:d}:a},null))!==null&&o!==void 0?o:{};return i??-1}const iC=L.div`
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
`,Wy=()=>ye`
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
`,sC=L(Hn)`
  ${Wy()}
`,lC=L(Hn)`
  ${Wy()}

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
`,aC=L.span`
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
          ${nt()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:e,theme:n})=>e&&Ss({mainColor:n.material,secondaryColor:n.borderLightest})}
`,Ea=6,cC=L.span`
  display: inline-block;
  position: absolute;

  ${({orientation:e})=>e==="vertical"?ye`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Ea}px;
          border-bottom: 2px solid ${({theme:n})=>n.materialText};
        `:ye`
          bottom: ${-6}px;
          height: ${Ea}px;
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
`,uC=L.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:e})=>e==="vertical"?ye`
          transform: translate(${Ea+2}px, ${Ea+1}px);
        `:ye`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Hy=g.forwardRef(({defaultValue:e,disabled:n=!1,marks:o=!1,max:i=100,min:a=0,name:u,onChange:d,onChangeCommitted:p,onMouseDown:h,orientation:m="horizontal",size:y="100%",step:w=1,value:S,variant:$="default",...j},b)=>{const C=$==="flat"?lC:sC,v=m==="vertical",[E=a,T]=zr({defaultValue:e,onChange:d??p,value:S}),{isFocusVisible:N,onBlurVisible:_,ref:K}=nC(),[X,ee]=g.useState(!1),ie=g.useRef(),me=g.useRef(null),fe=pg(K,ie),he=pg(b,fe),le=no(ae=>{N(ae)&&ee(!0)}),z=no(()=>{X!==!1&&(ee(!1),_())}),R=g.useRef(),D=g.useMemo(()=>o===!0&&Number.isFinite(w)?[...Array(Math.round((i-a)/w)+1)].map((ae,ue)=>({label:void 0,value:a+w*ue})):Array.isArray(o)?o:[],[o,i,a,w]),H=no(ae=>{const ue=(i-a)/10,ge=D.map(q=>q.value),pe=ge.indexOf(E);let xe=0;switch(ae.key){case"Home":xe=a;break;case"End":xe=i;break;case"PageUp":w&&(xe=E+ue);break;case"PageDown":w&&(xe=E-ue);break;case"ArrowRight":case"ArrowUp":w?xe=E+w:xe=ge[pe+1]||ge[ge.length-1];break;case"ArrowLeft":case"ArrowDown":w?xe=E-w:xe=ge[pe-1]||ge[0];break;default:return}ae.preventDefault(),w&&(xe=cg(xe,w,a)),xe=so(xe,a,i),T(xe),ee(!0),d==null||d(xe),p==null||p(xe)}),W=g.useCallback(ae=>{if(!ie.current)return 0;const ue=ie.current.getBoundingClientRect();let ge;v?ge=(ue.bottom-ae.y)/ue.height:ge=(ae.x-ue.left)/ue.width;let pe;if(pe=rC(ge,a,i),w)pe=cg(pe,w,a);else{const xe=D.map(A=>A.value),q=oC(xe,pe);pe=xe[q]}return pe=so(pe,a,i),pe},[D,i,a,w,v]),B=no(ae=>{var ue;const ge=Vl(ae,R.current);if(!ge)return;const pe=W(ge);(ue=me.current)===null||ue===void 0||ue.focus(),T(pe),ee(!0),d==null||d(pe)}),P=no(ae=>{const ue=Vl(ae,R.current);if(!ue)return;const ge=W(ue);p==null||p(ge),R.current=void 0;const pe=Kl(ie.current);pe.removeEventListener("mousemove",B),pe.removeEventListener("mouseup",P),pe.removeEventListener("touchmove",B),pe.removeEventListener("touchend",P)}),O=no(ae=>{var ue;h==null||h(ae),ae.preventDefault(),(ue=me.current)===null||ue===void 0||ue.focus(),ee(!0);const ge=Vl(ae,R.current);if(ge){const xe=W(ge);T(xe),d==null||d(xe)}const pe=Kl(ie.current);pe.addEventListener("mousemove",B),pe.addEventListener("mouseup",P)}),J=no(ae=>{var ue;ae.preventDefault();const ge=ae.changedTouches[0];ge!=null&&(R.current=ge.identifier),(ue=me.current)===null||ue===void 0||ue.focus(),ee(!0);const pe=Vl(ae,R.current);if(pe){const q=W(pe);T(q),d==null||d(q)}const xe=Kl(ie.current);xe.addEventListener("touchmove",B),xe.addEventListener("touchend",P)});return g.useEffect(()=>{const{current:ae}=ie;ae==null||ae.addEventListener("touchstart",J);const ue=Kl(ae);return()=>{ae==null||ae.removeEventListener("touchstart",J),ue.removeEventListener("mousemove",B),ue.removeEventListener("mouseup",P),ue.removeEventListener("touchmove",B),ue.removeEventListener("touchend",P)}},[P,B,J]),Y.createElement(iC,{$disabled:n,hasMarks:!!D.length,isFocused:X,onMouseDown:O,orientation:m,ref:he,size:Or(y),...j},Y.createElement("input",{disabled:n,name:u,type:"hidden",value:E??0}),D&&D.map(ae=>Y.createElement(cC,{$disabled:n,"data-testid":"tick",key:ae.value/(i-a)*100,orientation:m,style:{[v?"bottom":"left"]:`${(ae.value-a)/(i-a)*100}%`}},ae.label&&Y.createElement(uC,{"aria-hidden":!0,"data-testid":"mark",orientation:m},ae.label))),Y.createElement(C,{orientation:m,variant:$}),Y.createElement(aC,{$disabled:n,"aria-disabled":n?!0:void 0,"aria-orientation":m,"aria-valuemax":i,"aria-valuemin":a,"aria-valuenow":E,onBlur:z,onFocus:le,onKeyDown:H,orientation:m,ref:me,role:"slider",style:{[v?"bottom":"left"]:`${(v?-100:0)+100*(E-a)/(i-a)}%`},tabIndex:n?void 0:0,variant:$}))});Hy.displayName="Slider";const dC=L.tbody`
  background: ${({theme:e})=>e.canvas};
  display: table-row-group;
  box-shadow: ${gp};
  overflow-y: auto;
`,Uy=g.forwardRef(function({children:n,...o},i){return Y.createElement(dC,{ref:i,...o},n)});Uy.displayName="TableBody";const fC=L.td`
  padding: 0 8px;
`,oo=g.forwardRef(function({children:n,...o},i){return Y.createElement(fC,{ref:i,...o},n)});oo.displayName="TableDataCell";const pC=L.thead`
  display: table-header-group;
`,Vy=g.forwardRef(function({children:n,...o},i){return Y.createElement(pC,{ref:i,...o},n)});Vy.displayName="TableHead";const hC=L.th`
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
    ${nt()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:e})=>!e&&ye`
      &:active {
        &:before {
          ${nt({invert:!0,style:"window"})}
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
`,Ky=g.forwardRef(function({disabled:n=!1,children:o,onClick:i,onTouchStart:a=go,sort:u,...d},p){const h=u==="asc"?"ascending":u==="desc"?"descending":void 0;return Y.createElement(hC,{$disabled:n,"aria-disabled":n,"aria-sort":h,onClick:n?void 0:i,onTouchStart:n?void 0:a,ref:p,...d},Y.createElement("div",null,o))});Ky.displayName="TableHeadCell";const mC=L.tr`
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
`,wf=g.forwardRef(function({children:n,...o},i){return Y.createElement(mC,{ref:i,...o},n)});wf.displayName="TableRow";const gC=L.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,xC=L(Hn)`
  &:before {
    box-shadow: none;
  }
`,Qy=g.forwardRef(({children:e,...n},o)=>Y.createElement(xC,null,Y.createElement(gC,{ref:o,...n},e)));Qy.displayName="Table";const yC=L.button`
  ${Tn()}
  ${nt()}
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
    ${ni}
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
`,Nr=g.forwardRef(({value:e,onClick:n,selected:o=!1,children:i,...a},u)=>Y.createElement(yC,{"aria-selected":o,selected:o,onClick:d=>n==null?void 0:n(e,d),ref:u,role:"tab",...a},i));Nr.displayName="Tab";const wC=L.div`
  ${Tn()}
  ${nt()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Ya=g.forwardRef(({children:e,...n},o)=>Y.createElement(wC,{ref:o,...n},e));Ya.displayName="TabBody";const vC=L.div`
  position: relative;
  ${({isMultiRow:e,theme:n})=>e&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${n.borderDark};
  }
  `}
`,bC=L.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function kC(e,n){const o=[];for(let i=n;i>0;i-=1)o.push(e.splice(0,Math.ceil(e.length/i)));return o}const Xa=g.forwardRef(({value:e,onChange:n=go,children:o,rows:i=1,...a},u)=>{const d=g.useMemo(()=>{var p;const h=(p=Y.Children.map(o,w=>{if(!Y.isValidElement(w))return null;const S={selected:w.props.value===e,onClick:n};return Y.cloneElement(w,S)}))!==null&&p!==void 0?p:[],m=kC(h,i).map((w,S)=>({key:S,tabs:w})),y=m.findIndex(w=>w.tabs.some(S=>S.props.selected));return m.push(m.splice(y,1)[0]),m},[o,n,i,e]);return Y.createElement(vC,{...a,isMultiRow:i>1,role:"tablist",ref:u},d.map(p=>Y.createElement(bC,{key:p.key},p.tabs)))});Xa.displayName="Tabs";const SC=["blur","focus"],jC=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function mg(e){return"nativeEvent"in e&&SC.includes(e.type)}function gg(e){return"nativeEvent"in e&&jC.includes(e.type)}const CC={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},EC=L.span`
  position: absolute;

  z-index: 1;
  display: ${e=>e.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:e})=>e.borderDarkest};
  background: ${({theme:e})=>e.tooltip};
  box-shadow: ${mp};
  text-align: center;
  font-size: 1rem;
  ${e=>CC[e.position]}
`,$C=L.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,TC=g.forwardRef(({className:e,children:n,disableFocusListener:o=!1,disableMouseListener:i=!1,enterDelay:a=1e3,leaveDelay:u=0,onBlur:d,onClose:p,onFocus:h,onMouseEnter:m,onMouseLeave:y,onOpen:w,style:S,text:$,position:j="top",...b},C)=>{const[v,E]=g.useState(!1),[T,N]=g.useState(),[_,K]=g.useState(),X=!o,ee=!i,ie=W=>{window.clearTimeout(T),window.clearTimeout(_);const B=window.setTimeout(()=>{E(!0),w==null||w(W)},a);N(B)},me=W=>{W.persist(),mg(W)?h==null||h(W):gg(W)&&(m==null||m(W)),ie(W)},fe=W=>{window.clearTimeout(T),window.clearTimeout(_);const B=window.setTimeout(()=>{E(!1),p==null||p(W)},u);K(B)},he=W=>{W.persist(),mg(W)?d==null||d(W):gg(W)&&(y==null||y(W)),fe(W)},le=X?he:void 0,z=X?me:void 0,R=ee?me:void 0,D=ee?he:void 0,H=X?0:void 0;return Y.createElement($C,{"data-testid":"tooltip-wrapper",onBlur:le,onFocus:z,onMouseEnter:R,onMouseLeave:D,tabIndex:H},Y.createElement(EC,{className:e,"data-testid":"tooltip",position:j,ref:C,show:v,style:S,...b},$),n)});TC.displayName="Tooltip";const vf=L(wp)`
  white-space: nowrap;
`,qy=ye`
  :focus {
    outline: none;
  }

  ${({$disabled:e})=>e?"cursor: default;":ye`
          cursor: pointer;

          :focus {
            ${vf} {
              background: ${({theme:n})=>n.hoverBackground};
              color: ${({theme:n})=>n.materialTextInvert};
              outline: 2px dotted ${({theme:n})=>n.focusSecondary};
            }
          }
        `}
`,AC=L.ul`
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
`,RC=L.li`
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
`,DC=L.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,IC=L.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:e})=>e.materialText};
  user-select: none;
  padding-left: 18px;
  ${qy};

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
`,xg=L(yp)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${qy};
`,PC=L.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function yg(e,n){return e.includes(n)?e.filter(o=>o!==n):[...e,n]}function wg(e){e.preventDefault()}function Gy({className:e,disabled:n,expanded:o,innerRef:i,level:a,select:u,selected:d,style:p,tree:h=[]}){const m=a===0,y=g.useCallback(w=>{var S,$;const j=!!(w.items&&w.items.length>0),b=o.includes(w.id),C=(S=n||w.disabled)!==null&&S!==void 0?S:!1,v=C?wg:_=>u(_,w),E=C?wg:_=>u(_,w),T=d===w.id,N=Y.createElement(PC,{"aria-hidden":!0},w.icon);return Y.createElement(RC,{key:w.label,isRootLevel:m,role:"treeitem","aria-expanded":b,"aria-selected":T,hasItems:j},j?Y.createElement(DC,{open:b},Y.createElement(IC,{onClick:v,$disabled:C},Y.createElement(xg,{$disabled:C},N,Y.createElement(vf,null,w.label))),b&&Y.createElement(Gy,{className:e,disabled:C,expanded:o,level:a+1,select:u,selected:d,style:p,tree:($=w.items)!==null&&$!==void 0?$:[]})):Y.createElement(xg,{as:"button",$disabled:C,onClick:E},N,Y.createElement(vf,null,w.label)))},[e,n,o,m,a,u,d,p]);return Y.createElement(AC,{className:m?e:void 0,style:m?p:void 0,ref:m?i:void 0,role:m?"tree":"group",isRootLevel:m},h.map(y))}function NC({className:e,defaultExpanded:n=[],defaultSelected:o,disabled:i=!1,expanded:a,onNodeSelect:u,onNodeToggle:d,selected:p,style:h,tree:m=[]},y){const[w,S]=zr({defaultValue:n,onChange:d,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[$,j]=zr({defaultValue:o,onChange:u,onChangePropName:"onNodeSelect",value:p,valuePropName:"selected"}),b=g.useCallback((E,T)=>{if(d){const N=yg(w,T);d(E,N)}S(N=>yg(N,T))},[w,d,S]),C=g.useCallback((E,T)=>{j(T),u&&u(E,T)},[u,j]),v=g.useCallback((E,T)=>{E.preventDefault(),C(E,T.id),T.items&&T.items.length&&b(E,T.id)},[C,b]);return Y.createElement(Gy,{className:e,disabled:i,expanded:w,level:0,innerRef:y,select:v,selected:$,style:h,tree:m})}const LC=g.forwardRef(NC);LC.displayName="TreeView";const MC="/assets/ms_sans_serif-Du8rjN1q.woff2",OC="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var es={},vg;function zC(){if(vg)return es;vg=1,Object.defineProperty(es,"__esModule",{value:!0}),es.parse=d,es.serialize=m;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,n=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,u=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function d(S,$){const j=new u,b=S.length;if(b<2)return j;const C=($==null?void 0:$.decode)||y;let v=0;do{const E=S.indexOf("=",v);if(E===-1)break;const T=S.indexOf(";",v),N=T===-1?b:T;if(E>N){v=S.lastIndexOf(";",E-1)+1;continue}const _=p(S,v,E),K=h(S,E,_),X=S.slice(_,K);if(j[X]===void 0){let ee=p(S,E+1,N),ie=h(S,N,ee);const me=C(S.slice(ee,ie));j[X]=me}v=N+1}while(v<b);return j}function p(S,$,j){do{const b=S.charCodeAt($);if(b!==32&&b!==9)return $}while(++$<j);return j}function h(S,$,j){for(;$>j;){const b=S.charCodeAt(--$);if(b!==32&&b!==9)return $+1}return j}function m(S,$,j){const b=(j==null?void 0:j.encode)||encodeURIComponent;if(!e.test(S))throw new TypeError(`argument name is invalid: ${S}`);const C=b($);if(!n.test(C))throw new TypeError(`argument val is invalid: ${$}`);let v=S+"="+C;if(!j)return v;if(j.maxAge!==void 0){if(!Number.isInteger(j.maxAge))throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);v+="; Max-Age="+j.maxAge}if(j.domain){if(!o.test(j.domain))throw new TypeError(`option domain is invalid: ${j.domain}`);v+="; Domain="+j.domain}if(j.path){if(!i.test(j.path))throw new TypeError(`option path is invalid: ${j.path}`);v+="; Path="+j.path}if(j.expires){if(!w(j.expires)||!Number.isFinite(j.expires.valueOf()))throw new TypeError(`option expires is invalid: ${j.expires}`);v+="; Expires="+j.expires.toUTCString()}if(j.httpOnly&&(v+="; HttpOnly"),j.secure&&(v+="; Secure"),j.partitioned&&(v+="; Partitioned"),j.priority)switch(typeof j.priority=="string"?j.priority.toLowerCase():void 0){case"low":v+="; Priority=Low";break;case"medium":v+="; Priority=Medium";break;case"high":v+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${j.priority}`)}if(j.sameSite)switch(typeof j.sameSite=="string"?j.sameSite.toLowerCase():j.sameSite){case!0:case"strict":v+="; SameSite=Strict";break;case"lax":v+="; SameSite=Lax";break;case"none":v+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${j.sameSite}`)}return v}function y(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function w(S){return a.call(S)==="[object Date]"}return es}zC();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bg="popstate";function _C(e={}){function n(i,a){let{pathname:u,search:d,hash:p}=i.location;return bf("",{pathname:u,search:d,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function o(i,a){return typeof a=="string"?a:ws(a)}return BC(n,o,null,e)}function et(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Wn(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function FC(){return Math.random().toString(36).substring(2,10)}function kg(e,n){return{usr:e.state,key:e.key,idx:n}}function bf(e,n,o=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?ai(n):n,state:o,key:n&&n.key||i||FC()}}function ws({pathname:e="/",search:n="",hash:o=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),o&&o!=="#"&&(e+=o.charAt(0)==="#"?o:"#"+o),e}function ai(e){let n={};if(e){let o=e.indexOf("#");o>=0&&(n.hash=e.substring(o),e=e.substring(0,o));let i=e.indexOf("?");i>=0&&(n.search=e.substring(i),e=e.substring(0,i)),e&&(n.pathname=e)}return n}function BC(e,n,o,i={}){let{window:a=document.defaultView,v5Compat:u=!1}=i,d=a.history,p="POP",h=null,m=y();m==null&&(m=0,d.replaceState({...d.state,idx:m},""));function y(){return(d.state||{idx:null}).idx}function w(){p="POP";let C=y(),v=C==null?null:C-m;m=C,h&&h({action:p,location:b.location,delta:v})}function S(C,v){p="PUSH";let E=bf(b.location,C,v);m=y()+1;let T=kg(E,m),N=b.createHref(E);try{d.pushState(T,"",N)}catch(_){if(_ instanceof DOMException&&_.name==="DataCloneError")throw _;a.location.assign(N)}u&&h&&h({action:p,location:b.location,delta:1})}function $(C,v){p="REPLACE";let E=bf(b.location,C,v);m=y();let T=kg(E,m),N=b.createHref(E);d.replaceState(T,"",N),u&&h&&h({action:p,location:b.location,delta:0})}function j(C){let v=a.location.origin!=="null"?a.location.origin:a.location.href,E=typeof C=="string"?C:ws(C);return E=E.replace(/ $/,"%20"),et(v,`No window.location.(origin|href) available to create URL for href: ${E}`),new URL(E,v)}let b={get action(){return p},get location(){return e(a,d)},listen(C){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(bg,w),h=C,()=>{a.removeEventListener(bg,w),h=null}},createHref(C){return n(a,C)},createURL:j,encodeLocation(C){let v=j(C);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:S,replace:$,go(C){return d.go(C)}};return b}function Yy(e,n,o="/"){return WC(e,n,o,!1)}function WC(e,n,o,i){let a=typeof n=="string"?ai(n):n,u=_r(a.pathname||"/",o);if(u==null)return null;let d=Xy(e);HC(d);let p=null;for(let h=0;p==null&&h<d.length;++h){let m=eE(u);p=JC(d[h],m,i)}return p}function Xy(e,n=[],o=[],i=""){let a=(u,d,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};h.relativePath.startsWith("/")&&(et(h.relativePath.startsWith(i),`Absolute route path "${h.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(i.length));let m=cr([i,h.relativePath]),y=o.concat(h);u.children&&u.children.length>0&&(et(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Xy(u.children,n,y,m)),!(u.path==null&&!u.index)&&n.push({path:m,score:YC(m,u.index),routesMeta:y})};return e.forEach((u,d)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))a(u,d);else for(let h of Jy(u.path))a(u,d,h)}),n}function Jy(e){let n=e.split("/");if(n.length===0)return[];let[o,...i]=n,a=o.endsWith("?"),u=o.replace(/\?$/,"");if(i.length===0)return a?[u,""]:[u];let d=Jy(i.join("/")),p=[];return p.push(...d.map(h=>h===""?u:[u,h].join("/"))),a&&p.push(...d),p.map(h=>e.startsWith("/")&&h===""?"/":h)}function HC(e){e.sort((n,o)=>n.score!==o.score?o.score-n.score:XC(n.routesMeta.map(i=>i.childrenIndex),o.routesMeta.map(i=>i.childrenIndex)))}var UC=/^:[\w-]+$/,VC=3,KC=2,QC=1,qC=10,GC=-2,Sg=e=>e==="*";function YC(e,n){let o=e.split("/"),i=o.length;return o.some(Sg)&&(i+=GC),n&&(i+=KC),o.filter(a=>!Sg(a)).reduce((a,u)=>a+(UC.test(u)?VC:u===""?QC:qC),i)}function XC(e,n){return e.length===n.length&&e.slice(0,-1).every((i,a)=>i===n[a])?e[e.length-1]-n[n.length-1]:0}function JC(e,n,o=!1){let{routesMeta:i}=e,a={},u="/",d=[];for(let p=0;p<i.length;++p){let h=i[p],m=p===i.length-1,y=u==="/"?n:n.slice(u.length)||"/",w=$a({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},y),S=h.route;if(!w&&m&&o&&!i[i.length-1].route.index&&(w=$a({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},y)),!w)return null;Object.assign(a,w.params),d.push({params:a,pathname:cr([u,w.pathname]),pathnameBase:oE(cr([u,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(u=cr([u,w.pathnameBase]))}return d}function $a(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[o,i]=ZC(e.path,e.caseSensitive,e.end),a=n.match(o);if(!a)return null;let u=a[0],d=u.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:i.reduce((m,{paramName:y,isOptional:w},S)=>{if(y==="*"){let j=p[S]||"";d=u.slice(0,u.length-j.length).replace(/(.)\/+$/,"$1")}const $=p[S];return w&&!$?m[y]=void 0:m[y]=($||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:d,pattern:e}}function ZC(e,n=!1,o=!0){Wn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,p,h)=>(i.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,n?void 0:"i"),i]}function eE(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Wn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function _r(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let o=n.endsWith("/")?n.length-1:n.length,i=e.charAt(o);return i&&i!=="/"?null:e.slice(o)||"/"}function tE(e,n="/"){let{pathname:o,search:i="",hash:a=""}=typeof e=="string"?ai(e):e;return{pathname:o?o.startsWith("/")?o:nE(o,n):n,search:iE(i),hash:sE(a)}}function nE(e,n){let o=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?o.length>1&&o.pop():a!=="."&&o.push(a)}),o.length>1?o.join("/"):"/"}function md(e,n,o,i){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rE(e){return e.filter((n,o)=>o===0||n.route.path&&n.route.path.length>0)}function Zy(e){let n=rE(e);return n.map((o,i)=>i===n.length-1?o.pathname:o.pathnameBase)}function ew(e,n,o,i=!1){let a;typeof e=="string"?a=ai(e):(a={...e},et(!a.pathname||!a.pathname.includes("?"),md("?","pathname","search",a)),et(!a.pathname||!a.pathname.includes("#"),md("#","pathname","hash",a)),et(!a.search||!a.search.includes("#"),md("#","search","hash",a)));let u=e===""||a.pathname==="",d=u?"/":a.pathname,p;if(d==null)p=o;else{let w=n.length-1;if(!i&&d.startsWith("..")){let S=d.split("/");for(;S[0]==="..";)S.shift(),w-=1;a.pathname=S.join("/")}p=w>=0?n[w]:"/"}let h=tE(a,p),m=d&&d!=="/"&&d.endsWith("/"),y=(u||d===".")&&o.endsWith("/");return!h.pathname.endsWith("/")&&(m||y)&&(h.pathname+="/"),h}var cr=e=>e.join("/").replace(/\/\/+/g,"/"),oE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var tw=["POST","PUT","PATCH","DELETE"];new Set(tw);var aE=["GET",...tw];new Set(aE);var ci=g.createContext(null);ci.displayName="DataRouter";var Ja=g.createContext(null);Ja.displayName="DataRouterState";var nw=g.createContext({isTransitioning:!1});nw.displayName="ViewTransition";var cE=g.createContext(new Map);cE.displayName="Fetchers";var uE=g.createContext(null);uE.displayName="Await";var Un=g.createContext(null);Un.displayName="Navigation";var js=g.createContext(null);js.displayName="Location";var ur=g.createContext({outlet:null,matches:[],isDataRoute:!1});ur.displayName="Route";var bp=g.createContext(null);bp.displayName="RouteError";function dE(e,{relative:n}={}){et(Cs(),"useHref() may be used only in the context of a <Router> component.");let{basename:o,navigator:i}=g.useContext(Un),{hash:a,pathname:u,search:d}=Es(e,{relative:n}),p=u;return o!=="/"&&(p=u==="/"?o:cr([o,u])),i.createHref({pathname:p,search:d,hash:a})}function Cs(){return g.useContext(js)!=null}function xo(){return et(Cs(),"useLocation() may be used only in the context of a <Router> component."),g.useContext(js).location}var rw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ow(e){g.useContext(Un).static||g.useLayoutEffect(e)}function ui(){let{isDataRoute:e}=g.useContext(ur);return e?jE():fE()}function fE(){et(Cs(),"useNavigate() may be used only in the context of a <Router> component.");let e=g.useContext(ci),{basename:n,navigator:o}=g.useContext(Un),{matches:i}=g.useContext(ur),{pathname:a}=xo(),u=JSON.stringify(Zy(i)),d=g.useRef(!1);return ow(()=>{d.current=!0}),g.useCallback((h,m={})=>{if(Wn(d.current,rw),!d.current)return;if(typeof h=="number"){o.go(h);return}let y=ew(h,JSON.parse(u),a,m.relative==="path");e==null&&n!=="/"&&(y.pathname=y.pathname==="/"?n:cr([n,y.pathname])),(m.replace?o.replace:o.push)(y,m.state,m)},[n,o,u,a,e])}g.createContext(null);function Es(e,{relative:n}={}){let{matches:o}=g.useContext(ur),{pathname:i}=xo(),a=JSON.stringify(Zy(o));return g.useMemo(()=>ew(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function pE(e,n){return iw(e,n)}function iw(e,n,o,i){var v;et(Cs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=g.useContext(Un),{matches:u}=g.useContext(ur),d=u[u.length-1],p=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",y=d&&d.route;{let E=y&&y.path||"";sw(h,!y||E.endsWith("*")||E.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${E}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${E}"> to <Route path="${E==="/"?"*":`${E}/*`}">.`)}let w=xo(),S;if(n){let E=typeof n=="string"?ai(n):n;et(m==="/"||((v=E.pathname)==null?void 0:v.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${E.pathname}" was given in the \`location\` prop.`),S=E}else S=w;let $=S.pathname||"/",j=$;if(m!=="/"){let E=m.replace(/^\//,"").split("/");j="/"+$.replace(/^\//,"").split("/").slice(E.length).join("/")}let b=Yy(e,{pathname:j});Wn(y||b!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Wn(b==null||b[b.length-1].route.element!==void 0||b[b.length-1].route.Component!==void 0||b[b.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=yE(b&&b.map(E=>Object.assign({},E,{params:Object.assign({},p,E.params),pathname:cr([m,a.encodeLocation?a.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?m:cr([m,a.encodeLocation?a.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),u,o,i);return n&&C?g.createElement(js.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},C):C}function hE(){let e=SE(),n=lE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),o=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",e),d=g.createElement(g.Fragment,null,g.createElement("p",null,"💿 Hey developer 👋"),g.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",g.createElement("code",{style:u},"ErrorBoundary")," or"," ",g.createElement("code",{style:u},"errorElement")," prop on your route.")),g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},n),o?g.createElement("pre",{style:a},o):null,d)}var mE=g.createElement(hE,null),gE=class extends g.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?g.createElement(ur.Provider,{value:this.props.routeContext},g.createElement(bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xE({routeContext:e,match:n,children:o}){let i=g.useContext(ci);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(ur.Provider,{value:e},o)}function yE(e,n=[],o=null,i=null){if(e==null){if(!o)return null;if(o.errors)e=o.matches;else if(n.length===0&&!o.initialized&&o.matches.length>0)e=o.matches;else return null}let a=e,u=o==null?void 0:o.errors;if(u!=null){let h=a.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);et(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let d=!1,p=-1;if(o)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:y,errors:w}=o,S=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!w||w[m.route.id]===void 0);if(m.route.lazy||S){d=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((h,m,y)=>{let w,S=!1,$=null,j=null;o&&(w=u&&m.route.id?u[m.route.id]:void 0,$=m.route.errorElement||mE,d&&(p<0&&y===0?(sw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,j=null):p===y&&(S=!0,j=m.route.hydrateFallbackElement||null)));let b=n.concat(a.slice(0,y+1)),C=()=>{let v;return w?v=$:S?v=j:m.route.Component?v=g.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=h,g.createElement(xE,{match:m,routeContext:{outlet:h,matches:b,isDataRoute:o!=null},children:v})};return o&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?g.createElement(gE,{location:o.location,revalidation:o.revalidation,component:$,error:w,children:C(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):C()},null)}function kp(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wE(e){let n=g.useContext(ci);return et(n,kp(e)),n}function vE(e){let n=g.useContext(Ja);return et(n,kp(e)),n}function bE(e){let n=g.useContext(ur);return et(n,kp(e)),n}function Sp(e){let n=bE(e),o=n.matches[n.matches.length-1];return et(o.route.id,`${e} can only be used on routes that contain a unique "id"`),o.route.id}function kE(){return Sp("useRouteId")}function SE(){var i;let e=g.useContext(bp),n=vE("useRouteError"),o=Sp("useRouteError");return e!==void 0?e:(i=n.errors)==null?void 0:i[o]}function jE(){let{router:e}=wE("useNavigate"),n=Sp("useNavigate"),o=g.useRef(!1);return ow(()=>{o.current=!0}),g.useCallback(async(a,u={})=>{Wn(o.current,rw),o.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:n,...u}))},[e,n])}var jg={};function sw(e,n,o){!n&&!jg[e]&&(jg[e]=!0,Wn(!1,o))}g.memo(CE);function CE({routes:e,future:n,state:o}){return iw(e,void 0,o,n)}function la(e){et(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function EE({basename:e="/",children:n=null,location:o,navigationType:i="POP",navigator:a,static:u=!1}){et(!Cs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=e.replace(/^\/*/,"/"),p=g.useMemo(()=>({basename:d,navigator:a,static:u,future:{}}),[d,a,u]);typeof o=="string"&&(o=ai(o));let{pathname:h="/",search:m="",hash:y="",state:w=null,key:S="default"}=o,$=g.useMemo(()=>{let j=_r(h,d);return j==null?null:{location:{pathname:j,search:m,hash:y,state:w,key:S},navigationType:i}},[d,h,m,y,w,S,i]);return Wn($!=null,`<Router basename="${d}"> is not able to match the URL "${h}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:g.createElement(Un.Provider,{value:p},g.createElement(js.Provider,{children:n,value:$}))}function $E({children:e,location:n}){return pE(kf(e),n)}function kf(e,n=[]){let o=[];return g.Children.forEach(e,(i,a)=>{if(!g.isValidElement(i))return;let u=[...n,a];if(i.type===g.Fragment){o.push.apply(o,kf(i.props.children,u));return}et(i.type===la,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),et(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||u.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=kf(i.props.children,u)),o.push(d)}),o}var aa="get",ca="application/x-www-form-urlencoded";function Za(e){return e!=null&&typeof e.tagName=="string"}function TE(e){return Za(e)&&e.tagName.toLowerCase()==="button"}function AE(e){return Za(e)&&e.tagName.toLowerCase()==="form"}function RE(e){return Za(e)&&e.tagName.toLowerCase()==="input"}function DE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function IE(e,n){return e.button===0&&(!n||n==="_self")&&!DE(e)}var Ql=null;function PE(){if(Ql===null)try{new FormData(document.createElement("form"),0),Ql=!1}catch{Ql=!0}return Ql}var NE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gd(e){return e!=null&&!NE.has(e)?(Wn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ca}"`),null):e}function LE(e,n){let o,i,a,u,d;if(AE(e)){let p=e.getAttribute("action");i=p?_r(p,n):null,o=e.getAttribute("method")||aa,a=gd(e.getAttribute("enctype"))||ca,u=new FormData(e)}else if(TE(e)||RE(e)&&(e.type==="submit"||e.type==="image")){let p=e.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||p.getAttribute("action");if(i=h?_r(h,n):null,o=e.getAttribute("formmethod")||p.getAttribute("method")||aa,a=gd(e.getAttribute("formenctype"))||gd(p.getAttribute("enctype"))||ca,u=new FormData(p,e),!PE()){let{name:m,type:y,value:w}=e;if(y==="image"){let S=m?`${m}.`:"";u.append(`${S}x`,"0"),u.append(`${S}y`,"0")}else m&&u.append(m,w)}}else{if(Za(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');o=aa,i=null,a=ca,d=e}return u&&a==="text/plain"&&(d=u,u=void 0),{action:i,method:o.toLowerCase(),encType:a,formData:u,body:d}}function jp(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}async function ME(e,n){if(e.id in n)return n[e.id];try{let o=await import(e.module);return n[e.id]=o,o}catch(o){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(o),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OE(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function zE(e,n,o){let i=await Promise.all(e.map(async a=>{let u=n.routes[a.route.id];if(u){let d=await ME(u,o);return d.links?d.links():[]}return[]}));return WE(i.flat(1).filter(OE).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Cg(e,n,o,i,a,u){let d=(h,m)=>o[m]?h.route.id!==o[m].route.id:!0,p=(h,m)=>{var y;return o[m].pathname!==h.pathname||((y=o[m].route.path)==null?void 0:y.endsWith("*"))&&o[m].params["*"]!==h.params["*"]};return u==="assets"?n.filter((h,m)=>d(h,m)||p(h,m)):u==="data"?n.filter((h,m)=>{var w;let y=i.routes[h.route.id];if(!y||!y.hasLoader)return!1;if(d(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((w=o[0])==null?void 0:w.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function _E(e,n){return FE(e.map(o=>{let i=n.routes[o.route.id];if(!i)return[];let a=[i.module];return i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function FE(e){return[...new Set(e)]}function BE(e){let n={},o=Object.keys(e).sort();for(let i of o)n[i]=e[i];return n}function WE(e,n){let o=new Set;return new Set(n),e.reduce((i,a)=>{let u=JSON.stringify(BE(a));return o.has(u)||(o.add(u),i.push({key:u,link:a})),i},[])}function HE(e){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function UE(){let e=g.useContext(ci);return jp(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function VE(){let e=g.useContext(Ja);return jp(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Cp=g.createContext(void 0);Cp.displayName="FrameworkContext";function lw(){let e=g.useContext(Cp);return jp(e,"You must render this element inside a <HydratedRouter> element"),e}function KE(e,n){let o=g.useContext(Cp),[i,a]=g.useState(!1),[u,d]=g.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:y,onTouchStart:w}=n,S=g.useRef(null);g.useEffect(()=>{if(e==="render"&&d(!0),e==="viewport"){let b=v=>{v.forEach(E=>{d(E.isIntersecting)})},C=new IntersectionObserver(b,{threshold:.5});return S.current&&C.observe(S.current),()=>{C.disconnect()}}},[e]),g.useEffect(()=>{if(i){let b=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(b)}}},[i]);let $=()=>{a(!0)},j=()=>{a(!1),d(!1)};return o?e!=="intent"?[u,S,{}]:[u,S,{onFocus:ts(p,$),onBlur:ts(h,j),onMouseEnter:ts(m,$),onMouseLeave:ts(y,j),onTouchStart:ts(w,$)}]:[!1,S,{}]}function ts(e,n){return o=>{e&&e(o),o.defaultPrevented||n(o)}}function QE({page:e,...n}){let{router:o}=UE(),i=g.useMemo(()=>Yy(o.routes,e,o.basename),[o.routes,e,o.basename]);return i?g.createElement(GE,{page:e,matches:i,...n}):null}function qE(e){let{manifest:n,routeModules:o}=lw(),[i,a]=g.useState([]);return g.useEffect(()=>{let u=!1;return zE(e,n,o).then(d=>{u||a(d)}),()=>{u=!0}},[e,n,o]),i}function GE({page:e,matches:n,...o}){let i=xo(),{manifest:a,routeModules:u}=lw(),{loaderData:d,matches:p}=VE(),h=g.useMemo(()=>Cg(e,n,p,a,i,"data"),[e,n,p,a,i]),m=g.useMemo(()=>Cg(e,n,p,a,i,"assets"),[e,n,p,a,i]),y=g.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let $=new Set,j=!1;if(n.forEach(C=>{var E;let v=a.routes[C.route.id];!v||!v.hasLoader||(!h.some(T=>T.route.id===C.route.id)&&C.route.id in d&&((E=u[C.route.id])!=null&&E.shouldRevalidate)||v.hasClientLoader?j=!0:$.add(C.route.id))}),$.size===0)return[];let b=HE(e);return j&&$.size>0&&b.searchParams.set("_routes",n.filter(C=>$.has(C.route.id)).map(C=>C.route.id).join(",")),[b.pathname+b.search]},[d,i,a,h,n,e,u]),w=g.useMemo(()=>_E(m,a),[m,a]),S=qE(m);return g.createElement(g.Fragment,null,y.map($=>g.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...o})),w.map($=>g.createElement("link",{key:$,rel:"modulepreload",href:$,...o})),S.map(({key:$,link:j})=>g.createElement("link",{key:$,...j})))}function YE(...e){return n=>{e.forEach(o=>{typeof o=="function"?o(n):o!=null&&(o.current=n)})}}var aw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{aw&&(window.__reactRouterVersion="7.1.3")}catch{}function XE({basename:e,children:n,window:o}){let i=g.useRef();i.current==null&&(i.current=_C({window:o,v5Compat:!0}));let a=i.current,[u,d]=g.useState({action:a.action,location:a.location}),p=g.useCallback(h=>{g.startTransition(()=>d(h))},[d]);return g.useLayoutEffect(()=>a.listen(p),[a,p]),g.createElement(EE,{basename:e,children:n,location:u.location,navigationType:u.action,navigator:a})}var cw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uw=g.forwardRef(function({onClick:n,discover:o="render",prefetch:i="none",relative:a,reloadDocument:u,replace:d,state:p,target:h,to:m,preventScrollReset:y,viewTransition:w,...S},$){let{basename:j}=g.useContext(Un),b=typeof m=="string"&&cw.test(m),C,v=!1;if(typeof m=="string"&&b&&(C=m,aw))try{let ie=new URL(window.location.href),me=m.startsWith("//")?new URL(ie.protocol+m):new URL(m),fe=_r(me.pathname,j);me.origin===ie.origin&&fe!=null?m=fe+me.search+me.hash:v=!0}catch{Wn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let E=dE(m,{relative:a}),[T,N,_]=KE(i,S),K=t2(m,{replace:d,state:p,target:h,preventScrollReset:y,relative:a,viewTransition:w});function X(ie){n&&n(ie),ie.defaultPrevented||K(ie)}let ee=g.createElement("a",{...S,..._,href:C||E,onClick:v||u?n:X,ref:YE($,N),target:h,"data-discover":!b&&o==="render"?"true":void 0});return T&&!b?g.createElement(g.Fragment,null,ee,g.createElement(QE,{page:E})):ee});uw.displayName="Link";var JE=g.forwardRef(function({"aria-current":n="page",caseSensitive:o=!1,className:i="",end:a=!1,style:u,to:d,viewTransition:p,children:h,...m},y){let w=Es(d,{relative:m.relative}),S=xo(),$=g.useContext(Ja),{navigator:j,basename:b}=g.useContext(Un),C=$!=null&&s2(w)&&p===!0,v=j.encodeLocation?j.encodeLocation(w).pathname:w.pathname,E=S.pathname,T=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;o||(E=E.toLowerCase(),T=T?T.toLowerCase():null,v=v.toLowerCase()),T&&b&&(T=_r(T,b)||T);const N=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let _=E===v||!a&&E.startsWith(v)&&E.charAt(N)==="/",K=T!=null&&(T===v||!a&&T.startsWith(v)&&T.charAt(v.length)==="/"),X={isActive:_,isPending:K,isTransitioning:C},ee=_?n:void 0,ie;typeof i=="function"?ie=i(X):ie=[i,_?"active":null,K?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let me=typeof u=="function"?u(X):u;return g.createElement(uw,{...m,"aria-current":ee,className:ie,ref:y,style:me,to:d,viewTransition:p},typeof h=="function"?h(X):h)});JE.displayName="NavLink";var ZE=g.forwardRef(({discover:e="render",fetcherKey:n,navigate:o,reloadDocument:i,replace:a,state:u,method:d=aa,action:p,onSubmit:h,relative:m,preventScrollReset:y,viewTransition:w,...S},$)=>{let j=o2(),b=i2(p,{relative:m}),C=d.toLowerCase()==="get"?"get":"post",v=typeof p=="string"&&cw.test(p),E=T=>{if(h&&h(T),T.defaultPrevented)return;T.preventDefault();let N=T.nativeEvent.submitter,_=(N==null?void 0:N.getAttribute("formmethod"))||d;j(N||T.currentTarget,{fetcherKey:n,method:_,navigate:o,replace:a,state:u,relative:m,preventScrollReset:y,viewTransition:w})};return g.createElement("form",{ref:$,method:C,action:b,onSubmit:i?h:E,...S,"data-discover":!v&&e==="render"?"true":void 0})});ZE.displayName="Form";function e2(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function dw(e){let n=g.useContext(ci);return et(n,e2(e)),n}function t2(e,{target:n,replace:o,state:i,preventScrollReset:a,relative:u,viewTransition:d}={}){let p=ui(),h=xo(),m=Es(e,{relative:u});return g.useCallback(y=>{if(IE(y,n)){y.preventDefault();let w=o!==void 0?o:ws(h)===ws(m);p(e,{replace:w,state:i,preventScrollReset:a,relative:u,viewTransition:d})}},[h,p,m,o,i,n,e,a,u,d])}var n2=0,r2=()=>`__${String(++n2)}__`;function o2(){let{router:e}=dw("useSubmit"),{basename:n}=g.useContext(Un),o=kE();return g.useCallback(async(i,a={})=>{let{action:u,method:d,encType:p,formData:h,body:m}=LE(i,n);if(a.navigate===!1){let y=a.fetcherKey||r2();await e.fetch(y,o,a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||d,formEncType:a.encType||p,flushSync:a.flushSync})}else await e.navigate(a.action||u,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||d,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:o,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,n,o])}function i2(e,{relative:n}={}){let{basename:o}=g.useContext(Un),i=g.useContext(ur);et(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),u={...Es(e||".",{relative:n})},d=xo();if(e==null){u.search=d.search;let p=new URLSearchParams(u.search),h=p.getAll("index");if(h.some(y=>y==="")){p.delete("index"),h.filter(w=>w).forEach(w=>p.append("index",w));let y=p.toString();u.search=y?`?${y}`:""}}return(!e||e===".")&&a.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),o!=="/"&&(u.pathname=u.pathname==="/"?o:cr([o,u.pathname])),ws(u)}function s2(e,n={}){let o=g.useContext(nw);et(o!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=dw("useViewTransitionState"),a=Es(e,{relative:n.relative});if(!o.isTransitioning)return!1;let u=_r(o.currentLocation.pathname,i)||o.currentLocation.pathname,d=_r(o.nextLocation.pathname,i)||o.nextLocation.pathname;return $a(a.pathname,d)!=null||$a(a.pathname,u)!=null}new TextEncoder;const St=[];for(let e=0;e<256;++e)St.push((e+256).toString(16).slice(1));function l2(e,n=0){return(St[e[n+0]]+St[e[n+1]]+St[e[n+2]]+St[e[n+3]]+"-"+St[e[n+4]]+St[e[n+5]]+"-"+St[e[n+6]]+St[e[n+7]]+"-"+St[e[n+8]]+St[e[n+9]]+"-"+St[e[n+10]]+St[e[n+11]]+St[e[n+12]]+St[e[n+13]]+St[e[n+14]]+St[e[n+15]]).toLowerCase()}let xd;const a2=new Uint8Array(16);function c2(){if(!xd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");xd=crypto.getRandomValues.bind(crypto)}return xd(a2)}const u2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Eg={randomUUID:u2};function d2(e,n,o){var a;if(Eg.randomUUID&&!e)return Eg.randomUUID();e=e||{};const i=e.random??((a=e.rng)==null?void 0:a.call(e))??c2();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,l2(i)}function $s(e){const n=[];for(const o of e.split("/"))if(!(o===""||o===".")){if(o===".."){n.pop();continue}n.push(o)}return n}function Lr(e){return"/"+$s(e).join("/")}function Ue(...e){return Lr(e.join("/"))}function Zt(e){const n=$s(e);return n.pop(),"/"+n.join("/")}function en(e){const n=$s(e);return n.length?n[n.length-1]:""}class Ce extends Error{constructor(n,o){super(o?`${n}: ${o}`:n),this.code=n,this.name="KernelError"}}const f2={spawn:"proc",kill:"proc",win_focus:"gui",win_move:"gui",open:"fs",read:"fs",write:"fs",close:"fs",readdir:"fs",stat:"fs",mkdir:"fs",unlink:"fs",rename:"fs"};class p2{constructor(n){Ne(this,"registry");Ne(this,"processes",new Map);Ne(this,"listeners",new Set);Ne(this,"persistence");Ne(this,"defaultLocation");Ne(this,"uid");Ne(this,"snapshot",[]);Ne(this,"vfs",null);Ne(this,"kernelFds",new Map);Ne(this,"nextFd",3);Ne(this,"panicListeners",new Set);Ne(this,"panicState",null);Ne(this,"subscribeFs",n=>this.vfs?this.vfs.subscribe(n):()=>{});Ne(this,"fsVersion",()=>{var n;return((n=this.vfs)==null?void 0:n.version())??0});Ne(this,"subscribe",n=>(this.listeners.add(n),()=>this.listeners.delete(n)));Ne(this,"getSnapshot",()=>this.snapshot);Ne(this,"subscribePanic",n=>(this.panicListeners.add(n),()=>this.panicListeners.delete(n)));Ne(this,"getPanic",()=>this.panicState);this.registry=n.registry,this.persistence=n.persistence,this.defaultLocation=n.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=n.uid??1e3,this.boot()}boot(){var o;const n=(o=this.persistence)==null?void 0:o.load();if(n)for(const i of n)this.registry.has(i.exec)&&this.processes.set(i.pid,this.hydrate(i));this.rebuildSnapshot()}hydrate(n){return{pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,icon:n.icon,argv:n.argv??[],state:n.state,priority:n.priority,window:n.window,cwd:n.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const n=this.snapshot.map(o=>({pid:o.pid,ppid:o.ppid,uid:o.uid,exec:o.exec,name:o.name,icon:o.icon,argv:o.argv,priority:o.priority,window:o.window,cwd:o.cwd,state:o.state}));this.persistence.save(n)}mountVfs(n){this.vfs=n}processInfo(){return this.sysPs()}panic(n){this.panicState={code:n.code??"0E",address:n.address??"0028:C000"+((this.snapshot.length*7+11)%65536).toString(16).toUpperCase().padStart(4,"0"),message:n.message,stack:n.stack,syscall:n.syscall,recoverable:n.recoverable??!0};for(const o of this.panicListeners)o(this.panicState)}clearPanic(){this.panicState=null;for(const n of this.panicListeners)n(null)}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const n of this.listeners)n()}syscall(n,o,i){try{return Promise.resolve(this.dispatch(n,o,i))}catch(a){if(!(a instanceof Ce)){const u=a;this.panic({message:(u==null?void 0:u.message)??String(a),stack:u==null?void 0:u.stack,syscall:o})}return Promise.reject(a)}}enforcePermission(n,o){var d;if(n===null)return;const i=f2[o];if(!i)return;const a=this.processes.get(n);if(!a)throw new Ce("ESRCH",`no process ${n}`);if(!(((d=this.registry.get(a.exec))==null?void 0:d.permissions)??[]).includes(i))throw new Ce("EACCES",`'${a.exec}' lacks '${i}' permission for ${o}`)}dispatch(n,o,i){var a;switch(this.enforcePermission(n,o),o){case"spawn":return this.sysSpawn(n,i);case"exit":return this.sysExit(n,i.code??0);case"kill":return this.sysKill(i.pid);case"getpid":return n;case"getargv":return n?((a=this.processes.get(n))==null?void 0:a.argv)??[]:[];case"ps":return this.sysPs();case"win_focus":return this.sysFocus(i.pid);case"win_move":return this.sysMove(i.pid,i.location);case"open":return this.sysOpen(n,i.path,i.flags);case"read":return this.sysRead(n,i.fd,i.len);case"write":return this.sysWrite(n,i.fd,i.data);case"close":return this.sysClose(n,i.fd);case"readdir":return this.fs().readdir(i.path);case"stat":return this.fs().stat(i.path);case"mkdir":return this.fs().mkdir(i.path);case"unlink":return this.fs().unlink(i.path);case"rename":return this.fs().rename(i.from,i.to);default:throw new Ce("ENOSYS",`unknown syscall: ${o}`)}}sysSpawn(n,o){const i=this.registry.get(o.exec);if(!i)throw new Ce("ENOENT",`no program "${o.exec}" in /bin`);const a=d2();for(const u of this.processes.values())u.priority+=1;return this.processes.set(a,{pid:a,ppid:n,uid:this.uid,exec:o.exec,name:o.name??i.name,icon:o.icon??i.icon,argv:o.argv??[],state:"running",priority:0,window:o.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(n){if(!this.processes.delete(n))throw new Ce("ESRCH",`no process ${n}`);this.commit()}sysExit(n,o){n&&this.sysKill(n)}sysPs(){return this.snapshot.map(n=>({pid:n.pid,ppid:n.ppid,uid:n.uid,exec:n.exec,name:n.name,state:n.state,priority:n.priority}))}sysFocus(n){if(!this.processes.get(n))throw new Ce("ESRCH",`no process ${n}`);let i=0;for(const a of this.processes.values())a.priority=a.pid===n?0:++i;this.commit()}sysMove(n,o){const i=this.processes.get(n);if(!i)throw new Ce("ESRCH",`no process ${n}`);i.window=o,this.commit()}fs(){if(!this.vfs)throw new Ce("ENOSYS","no filesystem mounted");return this.vfs}fdTable(n){if(n===null)return this.kernelFds;const o=this.processes.get(n);if(!o)throw new Ce("ESRCH",`no process ${n}`);return o.fds}sysOpen(n,o,i){const a=this.fs(),u=Lr(o),d=a.exists(u),p=i==="w"||i==="a"||i==="rw";if(d)i==="w"&&a.write(u,new Uint8Array);else{if(!p)throw new Ce("ENOENT",u);a.write(u,new Uint8Array)}const h=i==="a"?a.stat(u).size:0,m=this.nextFd++;return this.fdTable(n).set(m,{path:u,flags:i,offset:h}),m}openFile(n,o){const i=this.fdTable(n).get(o);if(!i)throw new Ce("EBADF",`bad fd ${o}`);return i}sysRead(n,o,i){const a=this.openFile(n,o);if(a.flags!=="r"&&a.flags!=="rw")throw new Ce("EBADF","not opened for reading");const d=this.fs().read(a.path).slice(a.offset,a.offset+i);return a.offset+=d.length,d}sysWrite(n,o,i){const a=this.openFile(n,o);if(a.flags==="r")throw new Ce("EBADF","not opened for writing");const u=this.fs().read(a.path),d=a.offset+i.length,p=new Uint8Array(Math.max(u.length,d));return p.set(u),p.set(i,a.offset),this.fs().write(a.path,p),a.offset=d,i.length}sysClose(n,o){if(!this.fdTable(n).delete(o))throw new Ce("EBADF",`bad fd ${o}`)}}class h2{constructor(){Ne(this,"programs",new Map)}register(n){this.programs.set(n.exec,n)}unregister(n){return this.programs.delete(n)}get(n){return this.programs.get(n)}component(n){var o;return(o=this.programs.get(n))==null?void 0:o.component}has(n){return this.programs.has(n)}list(){return[...this.programs.values()]}}const m2="modulepreload",g2=function(e){return"/"+e},$g={},yo=function(n,o,i){let a=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=Promise.allSettled(o.map(h=>{if(h=g2(h),h in $g)return;$g[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":m2,m||(w.as="script"),w.crossOrigin="",w.href=h,p&&w.setAttribute("nonce",p),document.head.appendChild(w),m)return new Promise((S,$)=>{w.addEventListener("load",S),w.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${h}`)))})}))}function u(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return a.then(d=>{for(const p of d||[])p.status==="rejected"&&u(p.reason);return n().catch(u)})};function He(e){return{exec:e.exec,name:e.name,icon:e.icon,component:e.component,permissions:e.permissions??[]}}const Et=L.div`
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
`,x2=L.div`
    display: flex;
    align-items: stretch;
    height: 20px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    box-shadow: 0 1px 0 #ffffff;
    font-size: 12px;
    flex-shrink: 0;
`,y2=L.button`
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
`,w2=L.div`
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
`,v2=L.div`
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
`,Ae=({icon:e,children:n,...o})=>l.jsxs(v2,{...o,children:[l.jsx("span",{style:{width:16,flexShrink:0,display:"inline-flex",justifyContent:"center"},children:e&&l.jsx("img",{src:e,alt:"",style:{width:16,height:16}})}),l.jsx("span",{style:{flex:1,display:"flex",justifyContent:"space-between",gap:18},children:n})]}),Ts=L.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`;function b2({label:e,accel:n}){const o=n??e[0],i=e.toLowerCase().indexOf(o.toLowerCase());return i<0?l.jsx(l.Fragment,{children:e}):l.jsxs(l.Fragment,{children:[e.slice(0,i),l.jsx("u",{children:e[i]}),e.slice(i+1)]})}const fw=g.createContext({openId:null,setOpenId:()=>{}}),gn=({children:e})=>{const[n,o]=g.useState(null),i=g.useRef(null);return g.useEffect(()=>{if(n===null)return;const a=d=>{var p;(p=i.current)!=null&&p.contains(d.target)||o(null)},u=d=>{d.key==="Escape"&&o(null)};return document.addEventListener("mousedown",a),document.addEventListener("keydown",u),()=>{document.removeEventListener("mousedown",a),document.removeEventListener("keydown",u)}},[n]),l.jsx(fw.Provider,{value:{openId:n,setOpenId:o},children:l.jsx(x2,{ref:i,children:e})})},Be=({label:e,accel:n,children:o,disabled:i,onOpen:a})=>{const u=g.useId(),{openId:d,setOpenId:p}=g.useContext(fw),h=d===u,m=()=>{i||(a==null||a(),p(u))},y=()=>i?void 0:h?p(null):m(),w=()=>{!i&&d!==null&&d!==u&&m()};return l.jsxs("div",{style:{position:"relative"},onMouseEnter:w,children:[l.jsx(y2,{$open:h,disabled:i,onClick:y,children:l.jsx(b2,{label:e,accel:n})}),h&&l.jsx(w2,{onClick:()=>p(null),children:o})]})},di=L.div`
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
`,st=L.button`
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
`,k2=L.div`
    display: flex;
    align-items: stretch;
    gap: 2px;
    padding: 2px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    flex-shrink: 0;
    font-size: 11px;
`,ze=L.div`
    flex: ${e=>e.$flex??0} 1 auto;
    min-width: 0;
    padding: 1px 6px;
    border: 1px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,Pt=({children:e})=>l.jsxs(k2,{children:[e,l.jsx("div",{style:{width:14,alignSelf:"stretch",position:"relative"},children:l.jsx("svg",{viewBox:"0 0 14 14",width:"14",height:"100%",style:{position:"absolute",bottom:0,right:0},children:[0,1,2].map(n=>[0,1,2].filter(o=>o>=n).map(o=>l.jsxs("g",{children:[l.jsx("rect",{x:4+o*3,y:4+n*3,width:"2",height:"2",fill:"#ffffff"}),l.jsx("rect",{x:4+o*3,y:4+n*3,width:"1",height:"1",fill:"#808080"})]},`${n}-${o}`)))})})]});function S2(e,n){const o=(i,a)=>e.syscall(n,i,a);return{spawn:(i,a)=>o("spawn",{exec:i,...a}),exit:(i=0)=>o("exit",{code:i}),kill:i=>o("kill",{pid:i}),getpid:()=>o("getpid",{}),argv:()=>o("getargv",{}),ps:()=>o("ps",{}),focus:i=>o("win_focus",{pid:i}),move:(i,a)=>o("win_move",{pid:a??n,location:i}),open:(i,a="r")=>o("open",{path:i,flags:a}),read:(i,a)=>o("read",{fd:i,len:a}),write:(i,a)=>o("write",{fd:i,data:a}),close:i=>o("close",{fd:i}),readdir:i=>o("readdir",{path:i}),stat:i=>o("stat",{path:i}),mkdir:i=>o("mkdir",{path:i}),unlink:i=>o("unlink",{path:i}),rename:(i,a)=>o("rename",{from:i,to:a}),async readFile(i){const{size:a}=await o("stat",{path:i}),u=await o("open",{path:i,flags:"r"});try{return await o("read",{fd:u,len:a})}finally{await o("close",{fd:u})}},async writeFile(i,a){const u=await o("open",{path:i,flags:"w"});try{await o("write",{fd:u,data:a})}finally{await o("close",{fd:u})}},async readTextFile(i){return new TextDecoder().decode(await this.readFile(i))},async writeTextFile(i,a){await this.writeFile(i,new TextEncoder().encode(a))}}}const pw=g.createContext(null);function j2({pid:e,children:n}){return l.jsx(pw.Provider,{value:e,children:n})}function C2(){return g.useContext(pw)}function nn(){const e=Wr(),n=C2();return g.useMemo(()=>S2(e,n),[e,n])}const hw="vortex.recycle";function Ep(){try{return JSON.parse(localStorage.getItem(hw)||"{}")}catch{return{}}}function mw(e){localStorage.setItem(hw,JSON.stringify(e))}function gw(e,n){const o=Ep();o[e]=n,mw(o)}function E2(e){return Ep()[e]}function Tg(e){const n=Ep();delete n[e],mw(n)}const jt="/explorer.png",Fr="/notes.png",ns="/Recycle Bin",Ag="/home/user";async function xw(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await xw(e,Ue(n,i));await e.unlink(n)}const $2=()=>{const e=nn(),[n,o]=g.useState([]),[i,a]=g.useState(null),u=g.useCallback(async()=>{await e.mkdir(ns).catch(()=>{});const h=await e.readdir(ns).catch(()=>[]),m=await Promise.all(h.map(async y=>{try{return{name:y,type:(await e.stat(Ue(ns,y))).type}}catch{return{name:y,type:"file"}}}));o(m),a(null)},[e]);g.useEffect(()=>{u()},[u]);const d=async()=>{if(!i)return;let h=E2(i)??Ue(Ag,i);await e.stat(Zt(h)).then(()=>!0).catch(()=>!1)||(h=Ue(Ag,i)),await e.rename(Ue(ns,i),h).catch(()=>{}),Tg(i),await u()},p=async()=>{for(const h of n)await xw(e,Ue(ns,h.name)).catch(()=>{}),Tg(h.name);await u()};return l.jsxs(Et,{$minW:420,$minH:280,children:[l.jsxs(gn,{children:[l.jsxs(Be,{label:"File",children:[l.jsx(Ae,{$disabled:!i,onMouseDown:h=>{h.preventDefault(),d()},children:"Restore"}),l.jsx(Ts,{}),l.jsx(Ae,{$disabled:n.length===0,onMouseDown:h=>{h.preventDefault(),p()},children:"Empty Recycle Bin"})]}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Recycle Bin — VortexOS"})})]}),l.jsxs(di,{children:[l.jsx(st,{onClick:d,disabled:!i,children:"↩ Restore"}),l.jsx(En,{}),l.jsx(st,{onClick:p,disabled:n.length===0,children:"🗑 Empty Recycle Bin"})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onClick:()=>a(null),children:n.length===0?l.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#555"},children:"The Recycle Bin is empty."}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:n.map(h=>l.jsxs("div",{onClick:m=>{m.stopPropagation(),a(h.name)},style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:h.type==="dir"?jt:Fr,alt:h.type,style:{height:48,filter:i===h.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:i===h.name?"white":"black",backgroundColor:i===h.name?"#000080":"transparent"},children:h.name})]},h.name))})})}),l.jsx(Pt,{children:l.jsxs(ze,{$flex:1,children:[n.length," object(s)"]})})]})};async function T2(){var e;try{if((e=navigator.storage)!=null&&e.estimate){const{usage:n=0,quota:o=0}=await navigator.storage.estimate();return{usage:n,quota:o,supported:!0}}}catch{}return{usage:0,quota:0,supported:!1}}function Ir(e){if(e<=0)return"0 B";const n=["B","KB","MB","GB","TB"],o=Math.min(n.length-1,Math.floor(Math.log(e)/Math.log(1024)));return`${(e/Math.pow(1024,o)).toFixed(o===0?0:1)} ${n[o]}`}function yw(){const[e,n]=g.useState(null);return g.useEffect(()=>{let o=!0;return T2().then(i=>{o&&n(i)}),()=>{o=!1}},[]),e}const hs="/my-computer.png",Rg=[{name:"VortexOS (C:)",path:"/",icon:hs},{name:"Home",path:"/home/user",icon:jt},{name:"Cloud (/mnt/cloud)",path:"/mnt/cloud",icon:jt},{name:"Public (/mnt/public)",path:"/mnt/public",icon:jt},{name:"Programs (/bin)",path:"/bin",icon:jt},{name:"Devices (/dev)",path:"/dev",icon:jt},{name:"Processes (/proc)",path:"/proc",icon:jt}],A2=()=>{const e=nn(),n=yw(),o=n&&n.quota>0?Math.min(100,n.usage/n.quota*100):0;return l.jsxs(Et,{$minW:420,$minH:280,children:[l.jsxs(gn,{children:[l.jsx(Be,{label:"File",children:l.jsx(Ae,{$disabled:!0,children:"Open / Explore a drive"})}),l.jsx(Be,{label:"View",children:l.jsx(Ae,{$disabled:!0,children:"Large Icons"})}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"My Computer — VortexOS"})})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap"},children:Rg.map(i=>l.jsxs("div",{onDoubleClick:()=>e.spawn("explorer",{argv:[i.path]}),title:"Double-click to open",style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:110,padding:10},children:[l.jsx("img",{src:i.icon,alt:"",style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:i.name})]},i.path))})})}),l.jsxs(wt,{variant:"well",className:"footer",style:{display:"flex",alignItems:"center",gap:10,padding:"4px 8px"},children:[l.jsxs("span",{style:{fontSize:12},children:[Rg.length," object(s)"]}),(n==null?void 0:n.supported)&&l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,marginLeft:"auto"},children:[l.jsx("span",{children:"Disk (C:):"}),l.jsx("span",{title:`${Ir(n.usage)} of ${Ir(n.quota)} used`,style:{width:90,height:12,border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff",position:"relative"},children:l.jsx("span",{style:{position:"absolute",inset:0,width:`${o}%`,background:"#000080"}})}),l.jsxs("span",{children:[Ir(n.usage)," / ",Ir(n.quota)]})]})]})]})},ww=60;let ua=4,Ta=0,as=0,cs=0,Sf=!1;const jf=new Array(ww).fill(0),Cf=new Array(ww).fill(0);let vw=bw();function bw(){return{cpu:ua,mem:Ta,memBytes:as,memTotal:cs,cpuHistory:[...jf],memHistory:[...Cf],real:Sf}}const us=new Set;let Ef=!1,$p=0,da=0,$f=0,Aa=0,fa=null;function kw(e){if(da){const n=e-da;$f+=Math.max(0,n-16.7),Aa++}da=e,$p=requestAnimationFrame(kw)}function R2(){const e=performance.memory;e&&e.jsHeapSizeLimit?(Sf=!0,as=e.usedJSHeapSize,cs=e.jsHeapSizeLimit,Ta=Math.min(100,Math.round(e.usedJSHeapSize/e.jsHeapSizeLimit*100))):(Sf=!1,cs=64*1024*1024,as=Math.min(cs,as+Aa%3*4096+1024),Ta=Math.min(95,Math.round(as/cs*100)))}function D2(){const e=Aa>0?Math.min(1,$f/1e3):0,n=3+Math.round(e*97);ua=Math.round(ua*.5+n*.5),$f=0,Aa=0,R2(),jf.push(ua),jf.shift(),Cf.push(Ta),Cf.shift(),vw=bw(),us.forEach(o=>o())}function I2(){Ef||(Ef=!0,da=0,$p=requestAnimationFrame(kw),fa=setInterval(D2,1e3))}function P2(){Ef=!1,cancelAnimationFrame($p),fa&&clearInterval(fa),fa=null}function N2(){return vw}function Sw(){return g.useSyncExternalStore(e=>(us.add(e),us.size===1&&I2(),()=>{us.delete(e),us.size===0&&P2()}),N2)}function L2(e,n){let o=0;for(let d=0;d<e.length;d++)o=o*31+e.charCodeAt(d)>>>0;const i=o%7,a=(o+n)%5,u=1.5+o%64+(o>>3)%10/10;return{cpu:i+a,mem:Math.round(u*10)/10}}const M2=()=>{const e=hc(),n=nn(),[o,i]=g.useState(0);g.useEffect(()=>{const u=setInterval(()=>i(d=>d+1),1e3);return()=>clearInterval(u)},[]);const a=["PID","Name","CPU","Mem","Pri",""];return l.jsxs(Qy,{style:{width:"100%"},children:[l.jsx(Vy,{children:l.jsx(wf,{children:a.map((u,d)=>l.jsx(Ky,{children:u},d))})}),l.jsx(Uy,{children:e.map(u=>{const d=L2(u.pid,o);return l.jsxs(wf,{children:[l.jsx(oo,{style:{textAlign:"center"},children:u.pid.slice(0,8)}),l.jsx(oo,{children:u.name}),l.jsxs(oo,{style:{textAlign:"center"},children:[String(d.cpu).padStart(2,"0"),"%"]}),l.jsxs(oo,{style:{textAlign:"center"},children:[d.mem," MB"]}),l.jsx(oo,{style:{textAlign:"center"},children:u.priority===0?"High":"Normal"}),l.jsx(oo,{style:{textAlign:"center"},children:l.jsx(Ve,{size:"sm",onClick:()=>n.kill(u.pid),children:"End"})})]},u.pid)})})]})},Dg=({history:e,value:n,label:o,unit:i="%"})=>{const a=g.useRef(null);return g.useEffect(()=>{const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width,h=u.height;d.fillStyle="#000",d.fillRect(0,0,p,h),d.strokeStyle="#003b00",d.lineWidth=1;for(let y=0;y<=p;y+=16)d.beginPath(),d.moveTo(y,0),d.lineTo(y,h),d.stroke();for(let y=0;y<=h;y+=12)d.beginPath(),d.moveTo(0,y),d.lineTo(p,y),d.stroke();d.strokeStyle="#00ff00",d.lineWidth=1.5,d.beginPath();const m=e.length;e.forEach((y,w)=>{const S=w/(m-1)*p,$=h-Math.min(100,y)/100*h;w===0?d.moveTo(S,$):d.lineTo(S,$)}),d.stroke()},[e]),l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsx("div",{style:{fontSize:12,marginBottom:4},children:o}),l.jsx(wt,{variant:"well",style:{padding:2},children:l.jsx("canvas",{ref:a,width:220,height:96,style:{display:"block",width:"100%",height:96}})}),l.jsxs("div",{style:{fontSize:18,fontFamily:"monospace",textAlign:"center",marginTop:4},children:[n,i]})]})},O2=()=>{const e=Sw();return l.jsxs("div",{style:{padding:12},children:[l.jsxs("div",{style:{display:"flex",gap:16},children:[l.jsx(Dg,{history:e.cpuHistory,value:e.cpu,label:"CPU Usage (main thread)"}),l.jsx(Dg,{history:e.memHistory,value:e.mem,label:"Memory Usage"})]}),l.jsxs(wt,{variant:"well",style:{marginTop:12,padding:10,fontSize:12,lineHeight:1.7},children:[l.jsxs("div",{children:[l.jsx("b",{children:"CPU:"})," ",e.cpu,"% (measured from frame timing — a browser tab can't read the host CPU)"]}),l.jsxs("div",{children:[l.jsx("b",{children:"Memory:"})," ",Ir(e.memBytes)," of ",Ir(e.memTotal)," ",e.real?"(real JS heap)":"(estimated)"]})]})]})},Tp="vortex.session";function Ap(){try{const e=localStorage.getItem(Tp);return e?JSON.parse(e):null}catch{return null}}function z2(e){localStorage.setItem(Tp,JSON.stringify(e))}function jw(){localStorage.removeItem(Tp)}function ec(){var e;return((e=Ap())==null?void 0:e.token)??null}let pa=null;function Ig(e){pa=e}function Cw(){jw(),pa==null||pa()}const Ew=g.createContext({});function _2({children:e}){const[n,o]=g.useState("url(/win-cursor/arrow.cur), auto"),[i,a]=g.useState([]),u=le=>a(z=>z.includes(le)?z:[...z,le]),d=le=>a(z=>z.filter(R=>R!==le)),[p,h]=g.useState(()=>localStorage.getItem("vortex.crt")==="1"),m=()=>h(le=>{const z=!le;return localStorage.setItem("vortex.crt",z?"1":"0"),z}),[y,w]=g.useState(()=>localStorage.getItem("vortex.sss")!=="0"),S=()=>w(le=>{const z=!le;return localStorage.setItem("vortex.sss",z?"1":"0"),z}),[$,j]=g.useState(null),[b,C]=g.useState(()=>localStorage.getItem("vortex.theme")||"original"),v=le=>{localStorage.setItem("vortex.theme",le),C(le)},[E,T]=g.useState(!1),N=g.useRef(null),_=(le=550)=>{T(!0),N.current&&clearTimeout(N.current),N.current=setTimeout(()=>T(!1),le)},K=()=>{var le;return`vortex.wallpaper.${((le=Ap())==null?void 0:le.username)||"user"}`},X=()=>{const le=localStorage.getItem(K())??localStorage.getItem("wallpaper");if(le===null)return{image:"",type:1};try{return JSON.parse(le)}catch{return{image:"",type:1}}},[ee,ie]=g.useState(X),me=le=>{localStorage.setItem(K(),JSON.stringify(le)),ie(le)},fe=()=>ie(X()),he=le=>{o(`url(/win-cursor/${le}), auto`)};return l.jsx(Ew.Provider,{value:{cursor:n,changeCursor:he,wallpaper:ee,changeWallpaper:me,reloadWallpaper:fe,minimized:i,minimize:u,restore:d,crt:p,toggleCrt:m,clipboard:$,setClipboard:j,theme:b,setTheme:v,busy:E,flashBusy:_,sssStyle:y,toggleSssStyle:S},children:e})}function Vt(){return g.useContext(Ew)}const F2=()=>{const{processes:e,changePriority:n,closeProcess:o}=Dn(),{minimized:i,restore:a}=Vt(),[u,d]=g.useState(null),p=h=>{h.uuid&&(a(h.uuid),n(h,0))};return l.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[l.jsx("div",{style:{fontSize:12,marginBottom:6},children:"Task"}),l.jsxs(wt,{variant:"well",style:{flex:1,minHeight:80,overflow:"auto",background:"#fff"},children:[e.length===0&&l.jsx("div",{style:{padding:10,color:"#666"},children:"No tasks running."}),e.map(h=>{const m=!!h.uuid&&i.includes(h.uuid);return l.jsxs("div",{onClick:()=>d(h.uuid??null),onDoubleClick:()=>p(h),style:{display:"flex",alignItems:"center",gap:8,padding:"3px 6px",cursor:"pointer",background:u===h.uuid?"#000080":"transparent",color:u===h.uuid?"#fff":"#000"},children:[l.jsx("img",{src:h.icon,alt:"",style:{width:16,height:16}}),l.jsx("span",{style:{flex:1,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:h.name}),l.jsx("span",{style:{fontSize:11,opacity:.8},children:m?"Background":"Running"})]},h.uuid)})]}),l.jsxs("div",{style:{display:"flex",gap:6,justifyContent:"flex-end",marginTop:8},children:[l.jsx(Ve,{disabled:!u,onClick:()=>{const h=e.find(m=>m.uuid===u);h!=null&&h.uuid&&o(h.uuid),d(null)},children:"End Task"}),l.jsx(Ve,{disabled:!u,onClick:()=>{const h=e.find(m=>m.uuid===u);h&&p(h)},children:"Switch To"})]})]})},B2=()=>{const[e,n]=g.useState(0),o=Sw(),{processes:i}=Dn();return l.jsxs(l.Fragment,{children:[l.jsxs(Br,{style:{display:"flex",flexDirection:"column",height:"100%",minHeight:0},children:[l.jsxs(Xa,{value:e,onChange:a=>n(a),children:[l.jsx(Nr,{value:0,children:"Applications"}),l.jsx(Nr,{value:1,children:"Processes"}),l.jsx(Nr,{value:2,children:"Performance"})]}),l.jsxs(Ya,{style:{flex:1,minHeight:0,overflow:"auto"},children:[e===0&&l.jsx(F2,{}),e===1&&l.jsx(M2,{}),e===2&&l.jsx(O2,{})]})]}),l.jsxs(wt,{variant:"well",className:"footer",style:{display:"flex",gap:16,padding:"2px 8px",fontSize:11},children:[l.jsxs("span",{children:["Tasks: ",i.length]}),l.jsxs("span",{children:["CPU Usage: ",o.cpu,"%"]}),l.jsxs("span",{children:["Mem: ",o.mem,"%"]})]})]})},yd="/home/user",Pg="/home/user/welcome.txt",W2=()=>{const e=nn(),[n,o]=g.useState(Pg),[i,a]=g.useState(""),[u,d]=g.useState(!1),[p,h]=g.useState([]),[m,y]=g.useState("Ready"),w=g.useCallback(async b=>{try{const C=await e.readTextFile(b);o(b),a(C),d(!1),y(`Opened ${b}`)}catch(C){y(`Could not open ${b}: ${C.code??C.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[b]=await e.argv();await w(b||Pg)})()},[w,e]);const S=async()=>{try{h((await e.readdir(yd)).filter(b=>b.endsWith(".txt")))}catch{h([])}},$=async()=>{try{await e.writeTextFile(n,i),d(!1),y(`Saved ${n}`)}catch(b){y(`Save failed: ${b.code??b.message}`)}},j=()=>{const b=window.prompt("New file name:","untitled.txt");b&&(o(`${yd}/${b}`),a(""),d(!0),y(`New file ${b} — not saved yet`))};return l.jsxs(Et,{$minW:520,$minH:360,children:[l.jsxs(gn,{children:[l.jsxs(Be,{label:"File",onOpen:S,children:[l.jsx(Ae,{onMouseDown:b=>{b.preventDefault(),j()},children:"New"}),l.jsxs(Ae,{onMouseDown:b=>{b.preventDefault(),$()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(Ts,{}),p.length===0?l.jsx(Ae,{$disabled:!0,children:"(no .txt files)"}):p.map(b=>l.jsx(Ae,{onMouseDown:C=>{C.preventDefault(),w(`${yd}/${b}`)},children:b},b))]}),l.jsx(Be,{label:"Edit",children:l.jsx(Ae,{onMouseDown:b=>{b.preventDefault(),a(""),d(!0)},children:"Select All / Clear"})}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Notes — VortexOS"})})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("textarea",{value:i,onChange:b=>{a(b.target.value),d(!0)},spellCheck:!1,rows:20,style:{flex:1,width:"100%",height:"100%",resize:"none",boxSizing:"border-box",padding:6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",background:"#ffffff",fontFamily:"'ms_sans_serif', 'MS Sans Serif', sans-serif",fontSize:13,outline:"none"}})}),l.jsxs(Pt,{children:[l.jsxs(ze,{$flex:1,children:[n,u?" •":""]}),l.jsx(ze,{children:m})]})]})},rs="/home/user",Ng=/\.(html?|rtf|doc)$/i,H2=["MS Sans Serif","Times New Roman","Courier New","Arial","Georgia"],U2=[1,2,3,4,5,6,7],V2=()=>{const e=nn(),n=g.useRef(null),[o,i]=g.useState(`${rs}/document.html`),[a,u]=g.useState(""),[d,p]=g.useState([]),h=(b,C)=>{var v;(v=n.current)==null||v.focus(),document.execCommand(b,!1,C)},m=g.useCallback(async b=>{try{const C=await e.readTextFile(b);n.current&&(n.current.innerHTML=C),i(b),u(`Opened ${b}`)}catch(C){u(`Could not open ${b}: ${C.code??C.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[b]=await e.argv();b?await m(b):n.current&&(n.current.innerHTML="<p>The quick brown fox jumps over the lazy dog.</p>")})()},[m,e]);const y=async()=>{try{p((await e.readdir(rs)).filter(b=>Ng.test(b)))}catch{p([])}},w=async()=>{var b;try{await e.writeTextFile(o,((b=n.current)==null?void 0:b.innerHTML)??""),u(`Saved ${o}`)}catch(C){u(`Save failed: ${C.code??C.message}`)}},S=async()=>{var v;const b=window.prompt("Save as:",o.split("/").pop()||"document.html");if(!b)return;const C=`${rs}/${Ng.test(b)?b:b+".html"}`;i(C);try{await e.writeTextFile(C,((v=n.current)==null?void 0:v.innerHTML)??""),u(`Saved ${C}`)}catch(E){u(`Save failed: ${E.code??E.message}`)}},$=()=>{n.current&&(n.current.innerHTML=""),i(`${rs}/document.html`),u("New document")},j=(b,C,v)=>l.jsx(st,{onMouseDown:E=>E.preventDefault(),onClick:()=>h(C),style:v,children:b});return l.jsxs(Et,{$minW:560,$minH:400,children:[l.jsxs(gn,{children:[l.jsxs(Be,{label:"File",onOpen:y,children:[l.jsx(Ae,{onMouseDown:b=>{b.preventDefault(),$()},children:"New"}),l.jsxs(Ae,{onMouseDown:b=>{b.preventDefault(),w()},children:["Save",l.jsx("span",{children:"Ctrl+S"})]}),l.jsx(Ae,{onMouseDown:b=>{b.preventDefault(),S()},children:"Save As…"}),l.jsx(Ts,{}),d.length===0?l.jsx(Ae,{$disabled:!0,children:"(no documents)"}):d.map(b=>l.jsx(Ae,{onMouseDown:C=>{C.preventDefault(),m(`${rs}/${b}`)},children:b},b))]}),l.jsxs(Be,{label:"Edit",children:[l.jsx(Ae,{onMouseDown:b=>{b.preventDefault(),h("undo")},children:"Undo"}),l.jsx(Ae,{onMouseDown:b=>{b.preventDefault(),h("selectAll")},children:"Select All"})]}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"WordPad — VortexOS"})})]}),l.jsxs(di,{children:[l.jsx("select",{onMouseDown:b=>b.stopPropagation(),onChange:b=>h("fontName",b.target.value),children:H2.map(b=>l.jsx("option",{value:b,children:b},b))}),l.jsx("select",{onChange:b=>h("fontSize",b.target.value),defaultValue:"3",children:U2.map(b=>l.jsx("option",{value:b,children:b},b))}),l.jsx(En,{}),j("B","bold",{fontWeight:"bold"}),j("I","italic",{fontStyle:"italic"}),j("U","underline",{textDecoration:"underline"}),l.jsx("input",{type:"color",onChange:b=>h("foreColor",b.target.value),title:"Text colour",style:{width:26,height:20,padding:0}}),l.jsx(En,{}),j("≡L","justifyLeft"),j("≡C","justifyCenter"),j("≡R","justifyRight"),j("• List","insertUnorderedList")]}),l.jsx(mn,{style:{padding:3},children:l.jsx(wt,{variant:"well",style:{flex:1,height:"100%",padding:0},children:l.jsx("div",{ref:n,contentEditable:!0,suppressContentEditableWarning:!0,style:{height:"100%",overflow:"auto",padding:10,background:"#fff",outline:"none",fontFamily:"'Times New Roman', serif",fontSize:16}})})}),l.jsxs(Pt,{children:[l.jsx(ze,{$flex:1,children:o}),l.jsx(ze,{children:a||"Ready"})]})]})};let os=null,Ra=(()=>{const e=parseFloat(localStorage.getItem("vortex.volume")??"");return Number.isFinite(e)?e:.7})(),Rp=localStorage.getItem("vortex.muted")==="1";const Tf=new Set,$w=()=>Tf.forEach(e=>e());function K2(e){return Tf.add(e),()=>Tf.delete(e)}function Af(){return Ra}function Tw(e){Ra=Math.min(1,Math.max(0,e)),localStorage.setItem("vortex.volume",String(Ra)),$w()}function Rf(){return Rp}function Aw(e){Rp=e,localStorage.setItem("vortex.muted",e?"1":"0"),$w()}function Vn(){try{if(!os){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;os=new e}return os.state==="suspended"&&os.resume(),os}catch{return null}}function yt(e,{freq:n,start:o,dur:i,type:a="sine",gain:u=.2}){const d=Rp?0:u*Ra;if(d<=0)return;const p=e.createOscillator(),h=e.createGain();p.type=a,p.frequency.value=n;const m=e.currentTime+o;h.gain.setValueAtTime(1e-4,m),h.gain.linearRampToValueAtTime(d,m+.02),h.gain.exponentialRampToValueAtTime(1e-4,m+i),p.connect(h).connect(e.destination),p.start(m),p.stop(m+i+.05)}function Q2(){const e=Vn();if(!e)return;[[261.63,"sine"],[329.63,"sine"],[392,"sine"],[523.25,"triangle"]].forEach(([o,i],a)=>yt(e,{freq:o,start:a*.18,dur:1.8,type:i,gain:.15}))}function q2(){const e=Vn();if(!e)return;[[261.63,"triangle"],[329.63,"triangle"],[392,"triangle"],[523.25,"sine"]].forEach(([o,i],a)=>yt(e,{freq:o,start:a*.13,dur:1.9,type:i,gain:.14})),[261.63,329.63,392,523.25].forEach(o=>yt(e,{freq:o,start:.55,dur:2.4,type:"sine",gain:.07})),yt(e,{freq:1046.5,start:.7,dur:1.6,type:"sine",gain:.06}),yt(e,{freq:1567.98,start:.78,dur:1.4,type:"sine",gain:.04})}function Dp(){const e=Vn();e&&(yt(e,{freq:880,start:0,dur:.16,type:"sine",gain:.22}),yt(e,{freq:1318.51,start:0,dur:.4,type:"sine",gain:.1}))}function Yo(){const e=Vn();e&&yt(e,{freq:200,start:0,dur:.05,type:"square",gain:.05})}function ho(){const e=Vn();e&&[523.25,659.25,783.99].forEach((n,o)=>yt(e,{freq:n,start:o*.04,dur:.5,gain:.11}))}function G2(){const e=Vn();e&&(yt(e,{freq:440,start:0,dur:.08,type:"triangle",gain:.09}),yt(e,{freq:660,start:.05,dur:.1,type:"triangle",gain:.09}))}function Y2(){const e=Vn();e&&(yt(e,{freq:520,start:0,dur:.08,type:"triangle",gain:.08}),yt(e,{freq:320,start:.05,dur:.12,type:"triangle",gain:.08}))}function X2(){const e=Vn();e&&(yt(e,{freq:600,start:0,dur:.12,type:"sine",gain:.08}),yt(e,{freq:300,start:.04,dur:.12,type:"sine",gain:.08}))}function J2(){const e=Vn();e&&(yt(e,{freq:300,start:0,dur:.12,type:"sine",gain:.08}),yt(e,{freq:600,start:.04,dur:.12,type:"sine",gain:.08}))}function Z2(){const e=Vn();e&&[523.25,392,329.63,261.63].forEach((n,o)=>yt(e,{freq:n,start:o*.18,dur:.7,type:"sine",gain:.15}))}const e8="linear-gradient(90deg, #000080 0%, #1084d0 100%)",t8="linear-gradient(90deg, #808080 0%, #b5b5b5 100%)",As=(e=!0)=>({background:e?e8:t8,color:e?"#ffffff":"#dfdfdf",fontWeight:"bold"}),Rw=g.createContext({alert:async()=>{}}),Rs=()=>g.useContext(Rw),n8=({type:e})=>{const n={width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"#fff",borderRadius:"50%"};return e==="error"?l.jsx("div",{style:{...n,background:"#d40000",fontSize:20},children:"✕"}):e==="warning"?l.jsxs("div",{style:{width:36,height:34,flexShrink:0,position:"relative"},children:[l.jsx("div",{style:{width:0,height:0,borderLeft:"18px solid transparent",borderRight:"18px solid transparent",borderBottom:"32px solid #ffd000"}}),l.jsx("span",{style:{position:"absolute",left:15,top:9,fontWeight:"bold",color:"#000"},children:"!"})]}):l.jsx("div",{style:{...n,background:"#000080",fontStyle:"italic",fontFamily:"Georgia, serif",fontSize:22},children:"i"})};function r8({children:e}){const[n,o]=g.useState(null),i=g.useCallback(u=>(Dp(),new Promise(d=>{o({title:u.title??"VortexOS",message:u.message,type:u.type??"info",resolve:d})})),[]),a=()=>{n==null||n.resolve(),o(null)};return g.useEffect(()=>{if(!n)return;const u=d=>{(d.key==="Enter"||d.key==="Escape")&&a()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[n]),l.jsxs(Rw.Provider,{value:{alert:i},children:[e,n&&l.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.08)"},children:l.jsxs(li,{style:{minWidth:330,maxWidth:420},children:[l.jsxs(si,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",...As(!0)},children:[l.jsx("span",{children:n.title}),l.jsx(Ve,{onClick:a,style:{width:20,height:18,minWidth:0,padding:0,fontWeight:"bold"},children:"✕"})]}),l.jsxs(Br,{children:[l.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[l.jsx(n8,{type:n.type}),l.jsx("p",{style:{whiteSpace:"pre-line",lineHeight:1.4},children:n.message})]}),l.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:l.jsx(Ve,{onClick:a,style:{minWidth:84},primary:!0,children:"OK"})})]})]})})]})}const wd="/Recycle Bin";async function Dw(e,n,o){if((await e.stat(n)).type==="dir"){await e.mkdir(o);for(const a of await e.readdir(n))await Dw(e,Ue(n,a),Ue(o,a))}else await e.writeFile(o,await e.readFile(n))}function ql(e,n){if(!e.includes(n))return n;const o=n.lastIndexOf("."),i=o>0?n.slice(0,o):n,a=o>0?n.slice(o):"";for(let u=2;;u++){const d=`${i} (${u})${a}`;if(!e.includes(d))return d}}const o8=()=>{const e=nn(),{clipboard:n,setClipboard:o}=Vt(),{alert:i}=Rs(),[a,u]=g.useState("/"),[d,p]=g.useState([]),[h,m]=g.useState(null),[y,w]=g.useState(""),[S,$]=g.useState(null),[j,b]=g.useState(null),[C,v]=g.useState(""),E=g.useRef(null),T=g.useCallback(async D=>{try{const H=await e.readdir(D),W=await Promise.all(H.map(async B=>{try{const P=await e.stat(Ue(D,B));return{name:B,type:P.type,size:P.size}}catch{return{name:B,type:"file",size:0}}}));W.sort((B,P)=>B.type===P.type?B.name.localeCompare(P.name):B.type==="dir"?-1:1),u(D),p(W),m(null),w(`${W.length} object(s)`)}catch(H){w(`Cannot open ${D}: ${H.code??H.message}`)}},[e]);g.useEffect(()=>{(async()=>{const[D]=await e.argv();await T(D||"/")})()},[T,e]),g.useEffect(()=>{if(!S)return;const D=()=>$(null);return document.addEventListener("click",D),()=>document.removeEventListener("click",D)},[S]);const N=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,_=/\.(mp3|wav|ogg|m4a|flac)$/i,K=D=>{const H=Ue(a,D.name);D.type==="dir"?T(H):N.test(D.name)?e.spawn("imageviewer",{argv:[H]}):_.test(D.name)?e.spawn("mediaplayer",{argv:[H]}):e.spawn("notes",{argv:[H]})},X=async()=>{const D=ql(d.map(H=>H.name),"New Folder");try{await e.mkdir(Ue(a,D)),await T(a),me(D)}catch(H){i({title:"Error",message:`Could not create folder: ${H.code??H.message}`,type:"error"})}},ee=async()=>{const D=ql(d.map(H=>H.name),"New Text Document.txt");try{await e.writeTextFile(Ue(a,D),""),await T(a),me(D)}catch(H){i({title:"Error",message:`Could not create file: ${H.code??H.message}`,type:"error"})}},ie=async D=>{const H=Ue(a,D);try{await e.mkdir(wd).catch(()=>{});const W=await e.readdir(wd).catch(()=>[]),B=ql(W,D);await e.rename(H,Ue(wd,B)),gw(B,H),await T(a)}catch(W){i({title:"Delete",message:`Could not delete "${D}": ${W.code??W.message}`,type:"error"})}},me=D=>{m(D),b(D),v(D)},fe=async()=>{if(!j)return;const D=C.trim(),H=j;if(b(null),!(!D||D===H))try{await e.rename(Ue(a,H),Ue(a,D)),await T(a)}catch(W){i({title:"Rename",message:`Could not rename: ${W.code??W.message}`,type:"error"})}},he=async()=>{if(!n)return;const D=n.path,H=Ue(a,ql(d.map(W=>W.name),en(D)));try{n.op==="cut"?(await e.rename(D,H),o(null)):await Dw(e,D,H),await T(a)}catch(W){i({title:"Paste",message:`Could not paste: ${W.code??W.message}`,type:"error"})}},le=D=>{i({title:`${D.name} Properties`,message:`Name: ${D.name}
Type: ${D.type==="dir"?"File Folder":"File"}
Location: ${a}
Size: ${D.type==="dir"?"—":`${D.size} byte(s)`}`,type:"info"})},z=(D,H)=>{D.preventDefault(),D.stopPropagation(),H&&m(H.name),$({x:D.clientX,y:D.clientY,entry:H})},R=D=>{j||(D.key==="Delete"&&h?ie(h):D.key==="F2"&&h&&me(h))};return l.jsxs(Et,{ref:E,tabIndex:0,onKeyDown:R,$minW:560,$minH:360,style:{outline:"none"},children:[l.jsxs(gn,{children:[l.jsxs(Be,{label:"File",children:[l.jsx(Ae,{icon:jt,onMouseDown:D=>{D.preventDefault(),X()},children:"New Folder"}),l.jsx(Ae,{icon:Fr,onMouseDown:D=>{D.preventDefault(),ee()},children:"New Text Document"})]}),l.jsx(Be,{label:"Edit",children:l.jsxs(Ae,{$disabled:!n,onMouseDown:D=>{D.preventDefault(),he()},children:["Paste",l.jsx("span",{children:"Ctrl+V"})]})}),l.jsxs(Be,{label:"View",children:[l.jsxs(Ae,{onMouseDown:D=>{D.preventDefault(),T(a)},children:["Refresh",l.jsx("span",{children:"F5"})]}),l.jsx(Ts,{}),l.jsx(Ae,{$disabled:a==="/",onMouseDown:D=>{D.preventDefault(),T(Zt(a))},children:"Up One Level"})]}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Explorer — VortexOS"})})]}),l.jsxs(di,{children:[l.jsx(st,{onClick:()=>T(Zt(a)),disabled:a==="/",children:"↑ Up"}),l.jsx(st,{onClick:()=>T(a),children:"⟳ Refresh"}),l.jsx(En,{}),l.jsx(st,{onClick:X,children:"New Folder"}),l.jsx(En,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Address:"}),l.jsx("input",{defaultValue:a,onKeyDown:D=>{D.key==="Enter"&&T(D.target.value)},style:{flex:1,minWidth:120}},a)]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},onContextMenu:D=>z(D,null),onClick:()=>m(null),children:l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",alignContent:"flex-start"},children:d.map(D=>l.jsxs("div",{onClick:H=>{H.stopPropagation(),m(D.name)},onDoubleClick:()=>K(D),onContextMenu:H=>z(H,D),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[l.jsx("img",{src:D.type==="dir"?jt:Fr,alt:D.type,style:{height:48,filter:h===D.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),j===D.name?l.jsx(ar,{value:C,onChange:H=>v(H.target.value),onBlur:fe,onKeyDown:H=>{H.key==="Enter"&&fe(),H.key==="Escape"&&b(null)},autoFocus:!0,style:{width:80}}):l.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:h===D.name?"white":"black",backgroundColor:h===D.name?"#000080":"transparent"},children:D.name})]},D.name))})})}),l.jsxs(Pt,{children:[l.jsx(ze,{$flex:1,children:y||"Explorer"}),l.jsxs(ze,{children:[d.length," object(s)"]})]}),S&&Mt.createPortal(S.entry?l.jsxs(Dr,{style:{position:"fixed",left:S.x,top:S.y,width:160,zIndex:1e5},children:[l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>K(S.entry),children:"Open"}),l.jsx(sr,{}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>o({op:"cut",path:Ue(a,S.entry.name)}),children:"Cut"}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>o({op:"copy",path:Ue(a,S.entry.name)}),children:"Copy"}),l.jsx(sr,{}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>ie(S.entry.name),children:"Delete"}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>me(S.entry.name),children:"Rename"}),l.jsx(sr,{}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>le(S.entry),children:"Properties"})]}):l.jsxs(Dr,{style:{position:"fixed",left:S.x,top:S.y,width:175,zIndex:1e5},children:[l.jsx(Oe,{style:{cursor:"pointer"},onClick:X,children:"New Folder"}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:ee,children:"New Text Document"}),l.jsx(sr,{}),l.jsx(Oe,{disabled:!n,style:{cursor:n?"pointer":"default"},onClick:he,children:"Paste"}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>T(a),children:"Refresh"})]}),document.body)]})};var vd,Lg;function i8(){if(Lg)return vd;Lg=1;var e={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return vd=e,vd}var s8=i8();const l8=An(s8);var bd,Mg;function a8(){if(Mg)return bd;Mg=1;var e={name:"ash",anchor:"rgb(192, 192, 192)",anchorVisited:"rgb(192, 192, 192)",borderDark:"rgb(63, 63, 63)",borderDarkest:"rgb(0, 0, 0)",borderLight:"rgb(115, 115, 115)",borderLightest:"rgb(175, 175, 175)",canvas:"rgb(64, 64, 64)",canvasText:"rgb(0, 0, 0)",canvasTextDisabled:"rgb(63, 63, 63)",canvasTextDisabledShadow:"rgb(175, 175, 175)",canvasTextInvert:"rgb(255, 255, 255)",checkmark:"rgb(0, 0, 0)",checkmarkDisabled:"rgb(128, 128, 128)",desktopBackground:"rgb(0, 0, 0)",flatDark:"rgb(63, 63, 63)",flatLight:"rgb(96, 96, 96)",focusSecondary:"rgb(175, 175, 175)",headerBackground:"linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))",headerNotActiveBackground:"linear-gradient(to right, rgb(63, 63, 63), rgb(0, 0, 0))",headerNotActiveText:"rgb(128, 128, 128)",headerText:"rgb(255, 255, 255)",hoverBackground:"rgb(0, 0, 0)",material:"rgb(96, 96, 96)",materialDark:"rgb(63, 63, 63)",materialText:"rgb(0, 0, 0)",materialTextDisabled:"rgb(63, 63, 63)",materialTextDisabledShadow:"rgb(175, 175, 175)",materialTextInvert:"rgb(255, 255, 255)",progress:"rgb(0, 0, 0)",tooltip:"rgb(0, 0, 0)"};return bd=e,bd}var c8=a8();const u8=An(c8);var kd,Og;function d8(){if(Og)return kd;Og=1;var e={name:"candy",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#d1579e",borderDarkest:"#44132f",borderLight:"#f1acd5",borderLightest:"#EFF1F3",canvas:"#EFF1F3",canvasText:"#000000",canvasTextDisabled:"#d1579e",canvasTextDisabledShadow:"#EFF1F3",canvasTextInvert:"#EFF1F3",checkmark:"#000000",checkmarkDisabled:"#d1579e",desktopBackground:"#b477bd",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#87255B",headerNotActiveBackground:"#a08796",headerNotActiveText:"#EBD2BE",headerText:"#EFF1F3",hoverBackground:"#256EFF",material:"#E5A4CB",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#d1579e",materialTextDisabledShadow:"#EFF1F3",materialTextInvert:"#EFF1F3",progress:"#256EFF",tooltip:"#fefbcc"};return kd=e,kd}var f8=d8();const p8=An(f8);var Sd,zg;function h8(){if(zg)return Sd;zg=1;var e={name:"matrix",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#282828",borderDarkest:"#000000",borderLight:"#656565",borderLightest:"#a7a7a7",canvas:"#c0c0c0",canvasText:"#000000",canvasTextDisabled:"#282828",canvasTextDisabledShadow:"#ff0000",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#282828",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#35FF69",headerBackground:"#000000",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#535353",headerText:"#a7a7a7",hoverBackground:"#000000",material:"#535353",materialDark:"#282828",materialText:"#35FF69",materialTextDisabled:"#282828",materialTextDisabledShadow:"#a7a7a7",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return Sd=e,Sd}var m8=h8();const g8=An(m8);var jd,_g;function x8(){if(_g)return jd;_g=1;var e={name:"rainyDay",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3d5367",borderDarkest:"#16233b",borderLight:"#91abc2",borderLightest:"#b7cee5",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#3d5367",canvasTextDisabledShadow:"#b7cee5",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3d5367",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#4b6480",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0d9",headerText:"#ffffff",hoverBackground:"#4b6480",material:"#7a99b3",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3d5367",materialTextDisabledShadow:"#b7cee5",materialTextInvert:"#ffffff",progress:"#4b6480",tooltip:"#fefbcc"};return jd=e,jd}var y8=x8();const w8=An(y8);var Cd,Fg;function v8(){if(Fg)return Cd;Fg=1;var e={name:"ninjaTurtles",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#017401",borderDarkest:"#000000",borderLight:"#1dbc1b",borderLightest:"#55fd55",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#017401",canvasTextDisabledShadow:"#55fd55",canvasTextInvert:"#000000",checkmark:"#000000",checkmarkDisabled:"#017401",desktopBackground:"#045424",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#FF1D15",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#FABC3C",material:"#00a800",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#017401",materialTextDisabledShadow:"#55fd55",materialTextInvert:"#000000",progress:"#FF1D15",tooltip:"#fefbcc"};return Cd=e,Cd}var b8=v8();const k8=An(b8);var Ed,Bg;function S8(){if(Bg)return Ed;Bg=1;var e={name:"marine",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#3c8d88",borderDarkest:"#050608",borderLight:"#98d2cb",borderLightest:"#b1dfdf",canvas:"#c3e2da",canvasText:"#050608",canvasTextDisabled:"#3c8d88",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#3c8d88",desktopBackground:"#2c4e47",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000080",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#000080",material:"#75c1ba",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#3c8d88",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000080",tooltip:"#fefbcc"};return Ed=e,Ed}var j8=S8();const C8=An(j8);var $d,Wg;function E8(){if(Wg)return $d;Wg=1;var e={name:"lilac",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#5f549b",borderDarkest:"#1c1449",borderLight:"#bcb4e9",borderLightest:"#d3ccf4",canvas:"#ffffff",canvasText:"#050608",canvasTextDisabled:"#5f549b",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#050608",checkmarkDisabled:"#5f549b",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#5e4dba",headerNotActiveBackground:"#7f7f81",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#5e4dba",material:"#b1a7df",materialDark:"#9a9e9c",materialText:"#050608",materialTextDisabled:"#5f549b",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#5e4dba",tooltip:"#fefbcc"};return $d=e,$d}var $8=E8();const T8=An($8);var Td,Hg;function A8(){if(Hg)return Td;Hg=1;var e={name:"blackAndWhite",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#000000",borderLight:"#dfe0e3",borderLightest:"#888c8f",canvas:"#ffffff",canvasText:"#000000",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#000000",checkmarkDisabled:"#888c8f",desktopBackground:"#ffffff",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#000000",headerNotActiveBackground:"#ffffff",headerNotActiveText:"#000000",headerText:"#ffffff",hoverBackground:"#000000",material:"#ffffff",materialDark:"#9a9e9c",materialText:"#000000",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#000000",tooltip:"#fefbcc"};return Td=e,Td}var R8=A8();const D8=An(R8);var Ad,Ug;function I8(){if(Ug)return Ad;Ug=1;var e={name:"highContrast",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#888c8f",borderDarkest:"#ffffff",borderLight:"#dfe0e3",borderLightest:"#ffffff",canvas:"#353535",canvasText:"#ffffff",canvasTextDisabled:"#888c8f",canvasTextDisabledShadow:"#ffffff",canvasTextInvert:"#ffffff",checkmark:"#ffffff",checkmarkDisabled:"#888c8f",desktopBackground:"#000000",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#8e0284",headerNotActiveBackground:"#7f7f7f",headerNotActiveText:"#ced0cf",headerText:"#ffffff",hoverBackground:"#8e0284",material:"#000000",materialDark:"#9a9e9c",materialText:"#ffffff",materialTextDisabled:"#888c8f",materialTextDisabledShadow:"#ffffff",materialTextInvert:"#ffffff",progress:"#8e0284",tooltip:"#fefbcc"};return Ad=e,Ad}var P8=I8();const N8=An(P8),Df={original:{name:"Windows Standard",theme:l8},ash:{name:"Ash (Win98)",theme:u8},marine:{name:"Marine",theme:C8},rainyDay:{name:"Rainy Day",theme:w8},candy:{name:"Candy",theme:p8},lilac:{name:"Lilac",theme:T8},ninjaTurtles:{name:"Ninja Turtles",theme:k8},matrix:{name:"Matrix",theme:g8},blackAndWhite:{name:"Black & White",theme:D8},highContrast:{name:"High Contrast",theme:N8}},L8="original";function M8(e){return(Df[e]??Df[L8]).theme}const Iw="vortex.screensaver",Vg={type:"starfield",wait:3};function O8(){try{return{...Vg,...JSON.parse(localStorage.getItem(Iw)||"{}")}}catch{return{...Vg}}}let ha=O8();const If=new Set,Pf=new Set;function Pw(){return ha}function Kg(e){ha={...ha,...e},localStorage.setItem(Iw,JSON.stringify(ha)),If.forEach(n=>n())}function z8(e){return If.add(e),()=>If.delete(e)}function Nw(){return g.useSyncExternalStore(z8,Pw)}function _8(){Pf.forEach(e=>e())}function F8(e){return Pf.add(e),()=>Pf.delete(e)}const B8=[{key:"none",name:"(None)"},{key:"starfield",name:"Starfield Simulation"},{key:"mystify",name:"Mystify Your Mind"},{key:"pipes",name:"3D Pipes"}],Qg={reduceMotion:!1,uiScale:100,showClock:!0,clock24h:!1,clockSeconds:!1,pointerScheme:"arrow.cur",desktopIconSize:"normal",showDesktopIcons:!0,showQuickLaunch:!0,liveDrag:!1,windowSnap:!0,singleClickOpen:!1,accentColor:"#000080",autoHideTaskbar:!1,dateFormat:"short",firstDayMonday:!1},W8={small:{icon:32,cell:64,font:11},normal:{icon:42,cell:76,font:12},large:{icon:56,cell:92,font:13}},Lw="vortex.settings";function H8(){try{const e=JSON.parse(localStorage.getItem(Lw)??"{}");return{...Qg,...e&&typeof e=="object"?e:{}}}catch{return{...Qg}}}let ma=H8();const Nf=new Set,U8=()=>Nf.forEach(e=>e());function V8(){return ma}function rt(e,n){ma={...ma,[e]:n},localStorage.setItem(Lw,JSON.stringify(ma)),U8()}function rn(){return g.useSyncExternalStore(e=>(Nf.add(e),()=>Nf.delete(e)),V8)}const K8=[{key:"background",label:"Background"},{key:"appearance",label:"Appearance"},{key:"screensaver",label:"Screen Saver"},{key:"effects",label:"Effects"}],Q8=L.div`
    display: flex;
    gap: 3px;
    padding: 8px 10px 0;
`,q8=L.button`
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
`,G8=L.div`
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    margin: 0 10px 10px;
    padding: 16px;
    background: #c0c0c0;
`,ro=L.p`
    font-weight: bold;
    margin: 0 0 8px;
`,Gl=L.p`
    font-size: 12px;
    color: #444;
    margin: 6px 0 0;
`,Y8=[{name:"Vaporwave",count:7,prefix:"vw",ext:"jpg"},{name:"Windows XP",count:5,prefix:"xp",ext:"jpg"},{name:"Windows 7",count:4,prefix:"7",ext:"jpg"},{name:"Games",count:1,prefix:"games",ext:"png"}],X8=["#008080","#000080","#000000","#1a0033","#2e0d4f","#004b40","#800000","#3a3a3a"],J8=["#000080","#1084d0","#a0117a","#0a8043","#b8860b","#800000","#5a2d8c","#c0392b","#0d7377","#000000"],Z8=L.div`
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
`,Rd=L.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,qg=L.div`
    width: 48px;
    height: 48px;
    cursor: pointer;
    border: 3px solid ${({$selected:e})=>e?"#000080":"#808080"};
    &:hover {
        border-color: #1084d0;
    }
`,e$=()=>{const{changeWallpaper:e,wallpaper:n,crt:o,toggleCrt:i,theme:a,setTheme:u,sssStyle:d,toggleSssStyle:p}=Vt(),h=Nw(),m=rn(),[y,w]=g.useState("background"),[S,$]=g.useState(n.image||""),[j,b]=g.useState(n.type||1),C=S?j===2?{background:S}:{backgroundImage:`url('/${S}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:d?"#1a0033":"#008080"};return l.jsxs("div",{style:{minHeight:420},children:[l.jsx(Q8,{children:K8.map(v=>l.jsx(q8,{$active:y===v.key,onClick:()=>w(v.key),children:v.label},v.key))}),l.jsxs(G8,{children:[y==="background"&&l.jsxs("div",{children:[l.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:14},children:l.jsx(zy,{backgroundStyles:C})}),l.jsx(ro,{children:"Solid colors"}),l.jsx(Rd,{style:{marginBottom:16},children:X8.map(v=>l.jsx(qg,{$selected:S===v&&j===2,style:{background:v},onClick:()=>{$(v),b(2)}},v))}),Y8.map(v=>l.jsxs("div",{style:{marginBottom:14},children:[l.jsx(ro,{children:v.name}),l.jsx(Rd,{children:Array.from({length:v.count},(E,T)=>T+1).map(E=>{const T=`wallpapers/${v.prefix}-${E}.${v.ext}`;return l.jsx(Z8,{$selected:S===T,style:{backgroundImage:`url('/${T}')`},onClick:()=>{$(T),b(1)},title:`${v.name} ${E}`},T)})})]},v.name)),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:8},children:[l.jsx(Ve,{onClick:()=>{$(""),e({image:"",type:1})},children:"Default"}),l.jsx(Ve,{onClick:()=>e({image:S,type:j}),disabled:!S,children:"Apply"})]})]}),y==="appearance"&&l.jsxs("div",{children:[l.jsx(ro,{children:"Color scheme"}),l.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:6,marginBottom:16},children:Object.entries(Df).map(([v,E])=>{const T=E.headerBackground||"#000080",N=E.material||"#c0c0c0";return l.jsxs("div",{onClick:()=>u(v),style:{display:"flex",alignItems:"center",gap:8,padding:6,cursor:"pointer",background:a===v?"#000080":"#fff",color:a===v?"#fff":"#000",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:[l.jsxs("div",{style:{display:"flex",flexShrink:0,border:"1px solid #000"},children:[l.jsx("div",{style:{width:14,height:24,background:T}}),l.jsx("div",{style:{width:14,height:24,background:N}})]}),l.jsx("span",{style:{fontSize:13},children:E.name})]},v)})}),l.jsx(ro,{children:"Accent colour"}),l.jsx(Rd,{style:{marginBottom:16},children:J8.map(v=>l.jsx(qg,{$selected:m.accentColor.toLowerCase()===v.toLowerCase(),style:{background:v,width:36,height:36},onClick:()=>rt("accentColor",v),title:v},v))}),l.jsx(Gl,{style:{marginTop:0,marginBottom:14},children:"Used to highlight selected desktop icons and the selection box."}),l.jsxs("fieldset",{style:{border:"2px groove #c0c0c0",padding:"8px 12px"},children:[l.jsx("legend",{style:{fontWeight:"bold"},children:"Desktop Style"}),l.jsx(ft,{checked:d,onChange:p,label:"Serious Sam Style (Vaporwave)"}),l.jsx(Gl,{children:"On: the signature vaporwave desktop. Off: a clean, stock Windows 98 look."})]})]}),y==="screensaver"&&l.jsxs("div",{children:[l.jsx(ro,{children:"Screen saver"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:12},children:[l.jsx("select",{value:h.type,onChange:v=>Kg({type:v.target.value}),style:{fontFamily:"inherit",padding:2},children:B8.map(v=>l.jsx("option",{value:v.key,children:v.name},v.key))}),l.jsx(Ve,{size:"sm",disabled:h.type==="none",onClick:()=>_8(),children:"Preview"})]}),l.jsxs("label",{style:{fontSize:13},children:["Wait:"," ",l.jsx("input",{type:"number",min:1,max:60,value:h.wait,onChange:v=>Kg({wait:Math.max(1,Number(v.target.value)||1)}),style:{width:48,fontFamily:"inherit"}})," ","minutes"]}),l.jsx(Gl,{children:"The screen saver starts after the desktop has been idle for this long."})]}),y==="effects"&&l.jsxs("div",{children:[l.jsx(ro,{children:"Visual effects"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:o,onChange:i,label:"CRT scanline effect"}),l.jsx(ft,{checked:m.reduceMotion,onChange:()=>rt("reduceMotion",!m.reduceMotion),label:"Reduce motion (minimise animations)"})]}),l.jsx(ro,{style:{marginTop:16},children:"Windows"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:m.liveDrag,onChange:()=>rt("liveDrag",!m.liveDrag),label:"Show window contents while dragging"}),l.jsx(ft,{checked:m.windowSnap,onChange:()=>rt("windowSnap",!m.windowSnap),label:"Snap windows to screen edges"})]}),l.jsxs("div",{style:{marginTop:16,display:"flex",alignItems:"center",gap:8},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"ui-scale",children:"Interface size:"}),l.jsx("select",{id:"ui-scale",value:m.uiScale,onChange:v=>rt("uiScale",Number(v.target.value)),style:{fontFamily:"inherit",padding:2},children:[90,100,110,125,150].map(v=>l.jsxs("option",{value:v,children:[v,"%"]},v))})]}),l.jsx(Gl,{children:"Interface size and reduce-motion are also in the Accessibility applet."})]})]})]})};let t$=1,vs=[],Da=[];const Lf=new Set,tc=()=>Lf.forEach(e=>e());function Mw(e){return Lf.add(e),()=>Lf.delete(e)}function Gg(){return vs}function Yg(){return Da}function n$(e){const n={...e,id:t$++,ts:Date.now()};return vs=[...vs,n],Da=[...Da,n].slice(-50),tc(),n.id}function Dd(e){vs=vs.filter(n=>n.id!==e),tc()}function r$(){Da=[],tc()}const Ow="vortex.notify.winpopup";let zw=localStorage.getItem(Ow)==="classic"?"classic":"toast";function _w(){return zw}function o$(e){zw=e,localStorage.setItem(Ow,e),tc()}const Fw="vortex.eggs",Xg=["konami","vortex","credits","about"],Mf=new Set;function i$(){try{const e=JSON.parse(localStorage.getItem(Fw)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}let ds=i$();function s$(){return ds}function nc(e){ds.includes(e)||(ds=[...ds,e],localStorage.setItem(Fw,JSON.stringify(ds)),Mf.forEach(n=>n()))}function l$(){return g.useSyncExternalStore(e=>(Mf.add(e),()=>Mf.delete(e)),s$)}const Jg=new Set;function a$(e){return Jg.add(e),()=>Jg.delete(e)}const Of=new Set;function zf(){Of.forEach(e=>e())}function c$(e){return Of.add(e),()=>Of.delete(e)}const Id=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];function u$(e){let n=0;const o=i=>{const a=i.key.length===1?i.key.toLowerCase():i.key;a===Id[n]?(n++,n===Id.length&&(n=0,e())):n=a===Id[0]?1:0};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)}const d$=Date.now(),_f="vortex.bootcount";let Ia=0;function f$(){const e=parseInt(localStorage.getItem(_f)??"0",10);Ia=(Number.isFinite(e)?e:0)+1,localStorage.setItem(_f,String(Ia))}function Bw(){if(Ia)return Ia;const e=parseInt(localStorage.getItem(_f)??"0",10);return Number.isFinite(e)?e:0}function p$(){return Date.now()-d$}function h$(e){const n=Math.floor(e/1e3),o=n%60,i=Math.floor(n/60)%60,a=Math.floor(n/3600),u=d=>String(d).padStart(2,"0");return a>0?`${a}:${u(i)}:${u(o)}`:`${i}:${u(o)}`}const m$=vt`to { transform: rotate(360deg); }`,g$=vt`to { transform: rotate(-360deg); }`,x$=vt`
    0%, 100% { opacity: 0.75; transform: scale(0.94); }
    50% { opacity: 1; transform: scale(1.06); }
`,Pd=L.circle`
    fill: none;
    stroke-linecap: round;
    transform-origin: 60px 60px;
    ${({$spin:e,$dur:n,$rev:o})=>e&&ye`
            animation: ${o?g$:m$} ${n}s linear infinite;
        `}
`,y$=L.circle`
    transform-origin: 60px 60px;
    ${({$spin:e})=>e&&ye`
            animation: ${x$} 2.4s ease-in-out infinite;
        `}
`,ri=({size:e=120,vapor:n=!0,spinning:o=!0})=>{const i=n?"vortex-vapor":"vortex-stock",a=n?["#ff2d95","#a14bff","#00e5d0"]:["#1084d0","#3fa9f5","#000080"],u=n?"#ff67c8":"#5cb9ff";return l.jsxs("svg",{viewBox:"0 0 120 120",width:e,height:e,role:"img","aria-label":"VortexOS",style:{filter:`drop-shadow(0 0 ${e/12}px ${a[0]}88)`,display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:`${i}-grad`,x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:a[0]}),l.jsx("stop",{offset:"50%",stopColor:a[1]}),l.jsx("stop",{offset:"100%",stopColor:a[2]})]}),l.jsxs("radialGradient",{id:`${i}-core`,children:[l.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),l.jsx("stop",{offset:"55%",stopColor:u}),l.jsx("stop",{offset:"100%",stopColor:a[0],stopOpacity:"0"})]})]}),l.jsx(Pd,{cx:"60",cy:"60",r:"52",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"200 127",$dur:7,$spin:o}),l.jsx(Pd,{cx:"60",cy:"60",r:"38",stroke:`url(#${i}-grad)`,strokeWidth:"7",strokeDasharray:"120 119",$dur:4.5,$rev:!0,$spin:o}),l.jsx(Pd,{cx:"60",cy:"60",r:"24",stroke:`url(#${i}-grad)`,strokeWidth:"6",strokeDasharray:"70 80",$dur:2.6,$spin:o}),l.jsx(y$,{cx:"60",cy:"60",r:"13",fill:`url(#${i}-core)`,$spin:o})]})},w$="http://localhost:8082";function v$(e){switch(e){case 400:return"Please enter a user name and password.";case 401:return"Incorrect user name or password.";case 409:return"That user name is already taken.";default:return`Something went wrong (HTTP ${e}).`}}async function Ww(e,n,o){let i;try{i=await fetch(`${w$}${e}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:o})})}catch{throw new Error("Cannot reach the server. Is the backend running?")}if(!i.ok)throw new Error(v$(i.status));const a=await i.json();return{token:a.token,username:a.username}}const b$=(e,n)=>Ww("/auth/register",e,n),k$=(e,n)=>Ww("/auth/login",e,n),Hw=g.createContext(null);function S$({children:e}){const[n,o]=g.useState(()=>Ap()),i=g.useCallback(h=>{z2(h),o(h)},[]),a=g.useCallback(async(h,m)=>i(await k$(h,m)),[i]),u=g.useCallback(async(h,m)=>i(await b$(h,m)),[i]),d=g.useCallback(()=>{jw(),o(null)},[]);g.useEffect(()=>(Ig(()=>o(null)),()=>Ig(null)),[]);const p=g.useMemo(()=>({session:n,username:(n==null?void 0:n.username)??null,isAuthenticated:!!n,login:a,register:u,logout:d}),[n,a,u,d]);return l.jsx(Hw.Provider,{value:p,children:e})}function Kn(){const e=g.useContext(Hw);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e}const j$=()=>{const[e,n]=g.useState(Math.round(Af()*100)),[o,i]=g.useState(Rf()),[a,u]=g.useState(_w()==="classic");return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Sound"}),l.jsx(ft,{checked:o,onChange:()=>{const d=!o;i(d),Aw(d)},label:"Mute all sounds"}),l.jsxs("div",{style:{marginTop:14},children:[l.jsx("label",{children:"Volume"}),l.jsx("input",{type:"range",min:0,max:100,value:e,disabled:o,onChange:d=>{const p=Number(d.target.value);n(p),Tw(p/100)},onMouseUp:()=>!o&&ho(),style:{width:220,display:"block",marginTop:4}}),l.jsxs("span",{children:[e,"%"]})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Notifications"}),l.jsx(ft,{checked:a,onChange:()=>{const d=!a;u(d),o$(d?"classic":"toast")},label:"Use classic WinPopup window for messages"}),l.jsx("p",{style:{fontSize:11,color:"#555",marginTop:6},children:"When off, incoming Net Send messages appear as toast notifications in the corner."})]})},C$=()=>{const[e,n]=g.useState(new Date),{dateFormat:o,clock24h:i}=rn();g.useEffect(()=>{const d=setInterval(()=>n(new Date),1e3);return()=>clearInterval(d)},[]);const a=o==="long"?e.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}):e.toLocaleDateString(),u=e.toLocaleTimeString(void 0,{hour12:!i});return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Date & Time"}),l.jsxs(wt,{variant:"well",style:{padding:10,fontSize:16},children:[l.jsx("div",{style:{fontWeight:"bold"},children:a}),l.jsx("div",{style:{fontFamily:"monospace",fontSize:20,marginTop:4},children:u})]}),l.jsxs("p",{style:{marginTop:10,fontSize:12},children:["VortexOS follows your computer's clock. Change the date format and week start in"," ",l.jsx("b",{children:"Regional Settings"}),"."]})]})},E$=()=>{const e=rn(),n=new Date,o=e.dateFormat==="long"?n.toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}):n.toLocaleDateString();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Date"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:6},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"date-format",children:"Date format:"}),l.jsxs("select",{id:"date-format",value:e.dateFormat,onChange:i=>rt("dateFormat",i.target.value),style:{fontFamily:"inherit",padding:2},children:[l.jsx("option",{value:"short",children:"Short (e.g. 6/14/2026)"}),l.jsx("option",{value:"long",children:"Long (e.g. Sunday, June 14, 2026)"})]})]}),l.jsx(wt,{variant:"well",style:{padding:"6px 10px",fontSize:13,display:"inline-block"},children:o}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Calendar"}),l.jsx(ft,{checked:e.firstDayMonday,onChange:()=>rt("firstDayMonday",!e.firstDayMonday),label:"Start the week on Monday"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:10},children:"Affects the calendar in the Clock app and the system-tray fly-out."})]})},$$=[{file:"arrow.cur",name:"Standard"},{file:"Beam.cur",name:"Text Select"},{file:"help_win95.cur",name:"Help"},{file:"Grabbing.cur",name:"Grabbing"},{file:"Cursor_3.cur",name:"Classic 1"},{file:"Cursor_5.cur",name:"Classic 2"},{file:"Cursor_7.cur",name:"Classic 3"},{file:"Cursor_9.cur",name:"Classic 4"},{file:"Cursor_11.cur",name:"Classic 5"},{file:"Cursor_14.cur",name:"Classic 6"}],T$=()=>{const e=rn();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Pointer scheme"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginBottom:12},children:"Pick a pointer — it applies instantly and is remembered."}),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:$$.map(n=>{const o=e.pointerScheme===n.file;return l.jsxs("div",{onClick:()=>rt("pointerScheme",n.file),style:{width:92,cursor:`url(/win-cursor/${n.file}), auto`,textAlign:"center",padding:8,background:o?"#000080":"#fff",color:o?"#fff":"#000",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},title:n.name,children:[l.jsx("div",{style:{height:40,background:`#c0c0c0 url(/win-cursor/${n.file}) center no-repeat`,border:"1px solid #808080",marginBottom:6}}),l.jsx("div",{style:{fontSize:11},children:n.name})]},n.file)})})]})},A$=()=>{const e=rn();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Taskbar"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:e.showQuickLaunch,onChange:()=>rt("showQuickLaunch",!e.showQuickLaunch),label:"Show the Quick Launch toolbar"}),l.jsx(ft,{checked:e.autoHideTaskbar,onChange:()=>rt("autoHideTaskbar",!e.autoHideTaskbar),label:"Auto-hide the taskbar"})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 10px"},children:"Clock"}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[l.jsx(ft,{checked:e.showClock,onChange:()=>rt("showClock",!e.showClock),label:"Show the clock"}),l.jsx(ft,{checked:e.clock24h,onChange:()=>rt("clock24h",!e.clock24h),label:"Use 24-hour time",disabled:!e.showClock}),l.jsx(ft,{checked:e.clockSeconds,onChange:()=>rt("clockSeconds",!e.clockSeconds),label:"Show seconds",disabled:!e.showClock})]}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:14},children:"Taskbar and clock changes apply immediately."})]})},R$=()=>{const e=rn();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Desktop icons"}),l.jsx(ft,{checked:e.showDesktopIcons,onChange:()=>rt("showDesktopIcons",!e.showDesktopIcons),label:"Show icons on the desktop"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginTop:14},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"icon-size",children:"Icon size:"}),l.jsxs("select",{id:"icon-size",value:e.desktopIconSize,disabled:!e.showDesktopIcons,onChange:n=>rt("desktopIconSize",n.target.value),style:{fontFamily:"inherit",padding:2},children:[l.jsx("option",{value:"small",children:"Small"}),l.jsx("option",{value:"normal",children:"Normal"}),l.jsx("option",{value:"large",children:"Large"})]})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Open items"}),l.jsx(ft,{checked:e.singleClickOpen,onChange:()=>rt("singleClickOpen",!e.singleClickOpen),label:"Single-click to open an icon (instead of double-click)"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:14},children:"Changes apply to the desktop instantly."})]})},D$=()=>{const e=rn(),{setTheme:n}=Vt();return l.jsxs("div",{style:{padding:16},children:[l.jsx("p",{style:{fontWeight:"bold",marginBottom:10},children:"Display"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:14},children:[l.jsx("label",{style:{fontWeight:"bold"},htmlFor:"acc-scale",children:"Interface size:"}),l.jsx("select",{id:"acc-scale",value:e.uiScale,onChange:o=>rt("uiScale",Number(o.target.value)),style:{fontFamily:"inherit",padding:2},children:[90,100,110,125,150].map(o=>l.jsxs("option",{value:o,children:[o,"%"]},o))}),l.jsx("span",{style:{fontSize:12,color:"#444"},children:"Scales the whole desktop."})]}),l.jsx("p",{style:{fontWeight:"bold",margin:"4px 0 8px"},children:"Motion"}),l.jsx(ft,{checked:e.reduceMotion,onChange:()=>rt("reduceMotion",!e.reduceMotion),label:"Reduce motion (minimise animations & transitions)"}),l.jsx("p",{style:{fontWeight:"bold",margin:"18px 0 8px"},children:"Contrast"}),l.jsx(Ve,{onClick:()=>n("highContrast"),children:"Switch to High Contrast theme"}),l.jsx("p",{style:{fontSize:12,color:"#444",marginTop:8},children:"You can change the theme back any time in Display ▸ Appearance."})]})},I$=()=>{const{username:e,logout:n}=Kn(),o=Bw();return l.jsxs("div",{style:{padding:18},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:16},children:[l.jsx("div",{style:{width:56,height:56,borderRadius:"50%",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:"bold",color:"#fff",background:"linear-gradient(135deg, #ff2d95, #00e5d0)",textTransform:"uppercase"},children:(e||"?").charAt(0)}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:20,fontWeight:"bold",margin:0},children:e||"Guest"}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:12,color:"#008000"},children:"● Signed in"}),l.jsxs("p",{style:{margin:"2px 0 0",fontSize:12,color:"#555"},children:[o," session",o===1?"":"s"," on this machine"]})]})]}),l.jsx("p",{style:{fontSize:12.5,marginBottom:14},children:"Your files, desktop, shared folders and high scores are all private to this account. Sign out to switch users."}),l.jsxs(Ve,{onClick:n,children:["Log Off ",e,"…"]})]})},P$=()=>{const e=yw(),n=l$(),o=g.useRef(0),i=()=>{o.current+=1,o.current>=5&&(o.current=0,nc("about"),zf())},a=navigator,[,u]=g.useState(0);g.useEffect(()=>{const m=setInterval(()=>u(y=>y+1),1e3);return()=>clearInterval(m)},[]);const d=[["Uptime",h$(p$())],["Boots",String(Bw())],["Apps",String(Mr.length)]],p=[["Processor",`${a.hardwareConcurrency??"?"} virtual cores`],["Memory",a.deviceMemory?`${a.deviceMemory} GB RAM`:"—"],["Display",`${window.screen.width} × ${window.screen.height}`],["Disk (OPFS)",e!=null&&e.supported?`${Ir(e.usage)} of ${Ir(e.quota)}`:"—"],["Kernel","VortexOS microkernel · syscall ABI"],["Filesystem","MemFS + OPFS · /dev /proc /bin /mnt"]],h=n.length===Xg.length;return l.jsxs("div",{style:{padding:18,lineHeight:1.55,overflow:"auto"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14},children:[l.jsx("div",{onClick:i,style:{cursor:"pointer",userSelect:"none",flexShrink:0},title:"VortexOS",children:l.jsx(ri,{size:62,vapor:!0})}),l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:28,fontWeight:800,letterSpacing:1,margin:0,background:"linear-gradient(90deg, #d6177f, #7a2fd6, #0aa89a)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent"},children:"VortexOS"}),l.jsx("p",{style:{margin:0,fontSize:13},children:"Version 2.0 · Experimental Edition"}),l.jsx("p",{style:{margin:"2px 0 0",fontSize:13,color:"#a0117a",fontWeight:"bold"},children:"a creation by Serious Sam"})]})]}),l.jsx("div",{style:{display:"flex",gap:8,marginBottom:14},children:d.map(([m,y])=>l.jsxs("div",{style:{flex:1,textAlign:"center",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080",padding:"7px 4px"},children:[l.jsx("div",{style:{fontSize:18,fontWeight:"bold",color:"#000080",fontVariantNumeric:"tabular-nums"},children:y}),l.jsx("div",{style:{fontSize:10,color:"#555",textTransform:"uppercase",letterSpacing:.5},children:m})]},m))}),l.jsxs("p",{style:{fontSize:12.5,margin:"0 0 12px"},children:["I didn't theme a desktop — I ",l.jsx("b",{children:"built an operating system"}),". Under the nostalgia is a real microkernel with a syscall ABI, a virtual filesystem, a process scheduler, a command shell, a window manager and multi-user networking. Every window, every app, every sound — hand-made, from scratch, in a browser tab. No emulator. No clone. It just ",l.jsx("i",{children:"looks"})," like 1995."]}),l.jsx("table",{style:{fontSize:13,borderCollapse:"collapse",marginBottom:6},children:l.jsx("tbody",{children:p.map(([m,y])=>l.jsxs("tr",{children:[l.jsxs("td",{style:{fontWeight:"bold",paddingRight:16,verticalAlign:"top",whiteSpace:"nowrap"},children:[m,":"]}),l.jsx("td",{children:y})]},m))})}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginTop:12},children:[l.jsx("button",{onClick:zf,style:{padding:"5px 16px",fontSize:13,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #000000 #000000 #ffffff",cursor:"pointer"},children:"🎬 Roll the Credits"}),l.jsxs("span",{style:{fontSize:11,color:h?"#008000":"#888",fontWeight:h?"bold":"normal"},children:[h?"🌀 ":"","Easter eggs found: ",n.length," / ",Xg.length]})]})]})},Zg=[{name:"Display",icon:"/monitor.png",component:e$},{name:"Desktop",icon:"/desktop.svg",component:R$},{name:"Mouse",icon:"/mouse.svg",component:T$},{name:"Sounds",icon:"/sound.svg",component:j$},{name:"Taskbar & Clock",icon:"/taskbar.svg",component:A$},{name:"Accessibility",icon:"/accessibility.svg",component:D$},{name:"Date/Time",icon:"/clock.svg",component:C$},{name:"Regional",icon:"/regional.svg",component:E$},{name:"Accounts",icon:"/users.svg",component:I$},{name:"About Vortex",icon:"/w95.png",component:P$}],N$=()=>{const[e,n]=g.useState(null);return l.jsxs(Et,{$minW:560,$minH:380,children:[l.jsxs(gn,{children:[l.jsx(Be,{label:"File",children:l.jsx(Ae,{$disabled:!e,onMouseDown:o=>{o.preventDefault(),n(null)},children:"Close Applet"})}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Control Panel — VortexOS"})})]}),l.jsxs(di,{children:[l.jsx(st,{onClick:()=>n(null),disabled:!e,children:"◀ Back"}),l.jsx(En,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:e?e.name:"Control Panel"})]}),l.jsx(mn,{style:{padding:3},children:l.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:e?l.jsx(e.component,{}):l.jsx("div",{style:{display:"flex",flexWrap:"wrap",padding:10},children:Zg.map(o=>l.jsxs("div",{onDoubleClick:()=>n(o),title:"Double-click to open",style:{cursor:"pointer",width:96,padding:12,display:"flex",flexDirection:"column",alignItems:"center"},children:[l.jsx("img",{src:o.icon,alt:o.name,style:{height:44}}),l.jsx("p",{style:{textAlign:"center"},children:o.name})]},o.name))})})}),l.jsxs(Pt,{children:[l.jsx(ze,{$flex:1,children:e?e.name:"Control Panel"}),l.jsxs(ze,{children:[Zg.length," object(s)"]})]})]})},L$=new Set(["|","<",";"]);function M$(e){const n=[];let o=0;const i=e.length;for(;o<i;){const a=e[o];if(a===" "||a==="	"){o++;continue}if(a===">"){e[o+1]===">"?(n.push({type:"op",value:">>"}),o+=2):(n.push({type:"op",value:">"}),o++);continue}if(L$.has(a)){n.push({type:"op",value:a}),o++;continue}let u="";for(;o<i;){const d=e[o];if(d===" "||d==="	"||d==="|"||d==="<"||d===">"||d===";")break;if(d==='"'||d==="'"){const p=d;for(o++;o<i&&e[o]!==p;)u+=e[o],o++;o++;continue}if(d==="\\"&&o+1<i){u+=e[o+1],o+=2;continue}u+=d,o++}n.push({type:"word",value:u})}return n}class Yl extends Error{}function O$(e){const n=M$(e),o=[];let i=[],a=null,u=!1;const d=()=>{a&&i.push(a),a=null},p=()=>{if(u)throw new Yl("syntax error near `|`");d(),i.length&&o.push(i),i=[]};for(let h=0;h<n.length;h++){const m=n[h];if(m.type==="word"){a||(a={argv:[]}),a.argv.push(m.value),u=!1;continue}if(m.value===";"){p();continue}if(m.value==="|"){if(!a||a.argv.length===0)throw new Yl("syntax error near `|`");d(),u=!0;continue}const y=n[h+1];if(!y||y.type!=="word")throw new Yl(`syntax error near \`${m.value}\``);a||(a={argv:[]}),m.value==="<"?a.stdinFile=y.value:(a.stdoutFile=y.value,a.append=m.value===">>"),h++}p();for(const h of o)for(const m of h)if(m.argv.length===0)throw new Yl("syntax error: empty command");return o}function It(e,n){return n.startsWith("/")?Lr(n):Ue(e,n)}function on(e){const n=new Set,o=[];for(const i of e.slice(1))if(i.length>1&&i[0]==="-"&&i[1]!=="-")for(const a of i.slice(1))n.add(a);else o.push(i);return{flags:n,operands:o}}const Qn=e=>(e==null?void 0:e.code)??(e==null?void 0:e.message)??"error",z$=async({argv:e,out:n})=>(n(e.slice(1).join(" ")+`
`),0),_$=async({cwd:e,out:n})=>(n(e+`
`),0),F$=async({env:e,out:n})=>(n((e.USER??"user")+`
`),0),B$=async({argv:e,out:n})=>(n(e.includes("-a")?`VortexOS 2.0 vortex web microkernel
`:`VortexOS
`),0),W$=async({out:e})=>(e(new Date().toString()+`
`),0),H$=String.raw`
         .-""""-.
       .'        '.        V O R T E X   O S
      /   .--.     \       ----------------------------
     |   /    \     |      Version 2.0 · Experimental Edition
     |   \    /     |      a creation by Serious Sam
      \   '--'  o  /
       '.        .'        "No emulator. No clone."
         '-....-'           a real microkernel, in a browser.
`,U$=async({out:e})=>(nc("vortex"),e(H$+`
`),e(`Try 'credits' to roll the credits. The Konami code does something too...
`),0),V$=async({out:e})=>(nc("credits"),zf(),e(`Rolling the credits... 🌀
`),0),K$=async({out:e})=>(e(`Nothing happens.
`),0),Q$=async({env:e,out:n})=>{for(const[o,i]of Object.entries(e))n(`${o}=${i}
`);return 0},q$=async({argv:e,cwd:n,sys:o,out:i,err:a})=>{const{flags:u,operands:d}=on(e),p=d.length?d:["."];let h=0;for(const m of p){const y=It(n,m);try{const w=await o.stat(y),S=w.type==="dir"?await o.readdir(y):[en(y)];if(u.has("l"))for(const $ of S){const j=w.type==="dir"?Ue(y,$):y,b=await o.stat(j),C=b.type==="dir"?"d":b.type==="dev"?"c":"-";i(`${C}  ${String(b.size).padStart(6)}  ${$}
`)}else S.length&&i(S.join(`
`)+`
`)}catch(w){a(`ls: cannot access '${m}': ${Qn(w)}
`),h=1}}return h},G$=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=on(e);if(d.length===0)return a(o),0;let p=0;for(const h of d)try{a(await i.readTextFile(It(n,h)))}catch(m){u(`cat: ${h}: ${Qn(m)}
`),p=1}return p},Y$=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=on(e);let d=0;for(const p of u){const h=It(n,p);try{if(a.has("p")){let m="";for(const y of h.split("/").filter(Boolean))m+="/"+y,await o.stat(m).then(()=>!0).catch(()=>!1)||await o.mkdir(m)}else await o.mkdir(h)}catch(m){i(`mkdir: ${p}: ${Qn(m)}
`),d=1}}return d},X$=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=on(e);let u=0;for(const d of a){const p=It(n,d);try{await o.stat(p).then(()=>!0).catch(()=>!1)||await o.writeTextFile(p,"")}catch(h){i(`touch: ${d}: ${Qn(h)}
`),u=1}}return u};async function Uw(e,n){if((await e.stat(n)).type==="dir")for(const i of await e.readdir(n))await Uw(e,Ue(n,i));await e.unlink(n)}const J$=async({argv:e,cwd:n,sys:o,err:i})=>{const{flags:a,operands:u}=on(e);let d=0;for(const p of u){const h=It(n,p);try{a.has("r")?await Uw(o,h):await o.unlink(h)}catch(m){i(`rm: ${p}: ${Qn(m)}
`),d=1}}return d},Vw=async({argv:e,cwd:n,sys:o,err:i})=>{const{operands:a}=on(e);if(a.length<2)return i(`cp: usage: cp <src> <dst>
`),1;const u=It(n,a[0]);let d=It(n,a[1]);try{return await o.stat(d).then(p=>p.type==="dir").catch(()=>!1)&&(d=Ue(d,en(u))),await o.writeFile(d,await o.readFile(u)),0}catch(p){return i(`cp: ${Qn(p)}
`),1}},Z$=async e=>{const n=await Vw(e);if(n!==0)return n;const{operands:o}=on(e.argv);return await e.sys.unlink(It(e.cwd,o[0])).catch(()=>{}),0},eT=async({sys:e,out:n})=>{const o=await e.ps();n(`PID       NAME                 STATE     PRIO
`);for(const i of o)n(`${i.pid.slice(0,8)}  ${i.name.padEnd(20).slice(0,20)}  ${i.state.padEnd(8)}  ${i.priority}
`);return 0},tT=async({argv:e,sys:n,out:o,err:i})=>{const{operands:a}=on(e);if(a.length===0)return i(`kill: usage: kill <pid>
`),1;const u=await n.ps();let d=0;for(const p of a){const h=u.find(m=>m.pid===p||m.pid.startsWith(p));if(!h){i(`kill: ${p}: no such process
`),d=1;continue}await n.kill(h.pid),o(`killed ${h.pid.slice(0,8)} (${h.name})
`)}return d},nT=async({argv:e,out:n,err:o})=>{const{operands:i}=on(e);let a=0;for(const u of i)u in Ip||qw.includes(u)?n(`/bin/${u}
`):(o(`${u} not found
`),a=1);return a},rT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{flags:d,operands:p}=on(e);if(p.length===0)return u(`grep: usage: grep <pattern> [file...]
`),1;const[h,...m]=p,y=d.has("i")?h.toLowerCase():h,w=j=>(d.has("i")?j.toLowerCase():j).includes(y),S=[];if(m.length===0)S.push(o);else for(const j of m)try{S.push(await i.readTextFile(It(n,j)))}catch(b){u(`grep: ${j}: ${Qn(b)}
`)}let $=!1;for(const j of S)for(const b of j.split(`
`))b!==""&&w(b)&&(a(b+`
`),$=!0);return $?0:1},oT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const{operands:d}=on(e),p=m=>({lines:m===""?0:m.replace(/\n$/,"").split(`
`).length,words:m.split(/\s+/).filter(Boolean).length,chars:m.length});if(d.length===0){const m=p(o);return a(`${m.lines} ${m.words} ${m.chars}
`),0}let h=0;for(const m of d)try{const y=p(await i.readTextFile(It(n,m)));a(`${y.lines} ${y.words} ${y.chars} ${m}
`)}catch(y){u(`wc: ${m}: ${Qn(y)}
`),h=1}return h};function Kw(e){const n=e.split(`
`);return n[n.length-1]===""&&n.pop(),n}function Qw(e,n){const o=e.indexOf("-n"),i=o>=0?Number(e[o+1]):NaN;return Number.isFinite(i)?i:n}const iT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=Qw(e,10),p=on(e).operands.filter(m=>!/^\d+$/.test(m)),h=m=>Kw(m).slice(0,d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const m of p)h(await i.readTextFile(It(n,m)));return 0}catch(m){return u(`head: ${Qn(m)}
`),1}},sT=async({argv:e,cwd:n,stdin:o,sys:i,out:a,err:u})=>{const d=Qw(e,10),p=on(e).operands.filter(m=>!/^\d+$/.test(m)),h=m=>Kw(m).slice(-d).forEach(y=>a(y+`
`));if(p.length===0)return h(o),0;try{for(const m of p)h(await i.readTextFile(It(n,m)));return 0}catch(m){return u(`tail: ${Qn(m)}
`),1}},lT=async({out:e})=>(e(`VortexOS shell — available commands:
`),e([...Object.keys(Ip),...qw].sort().join("  ")+`
`),e(`Pipes (|), redirects (> >> <) and ; are supported.
`),0),qw=["cd","clear","export"],Ip={echo:z$,pwd:_$,whoami:F$,uname:B$,date:W$,env:Q$,ls:q$,cat:G$,mkdir:Y$,touch:X$,rm:J$,cp:Vw,mv:Z$,ps:eT,kill:tT,which:nT,grep:rT,wc:oT,head:iT,tail:sT,help:lT,vortex:U$,credits:V$,xyzzy:K$};class Gw{constructor(n,o="/home/user",i={}){Ne(this,"cwd");Ne(this,"env");this.sys=n,this.cwd=o,this.env={HOME:"/home/user",USER:"user",PATH:"/bin",...i}}prompt(){const n=this.cwd===this.env.HOME?"~":this.cwd;return`${this.env.USER}@vortex:${n}$ `}async run(n){let o="",i=!1,a=0;const u=p=>{o+=p};let d;try{d=O$(n)}catch(p){return{output:`sh: ${p.message}
`,clear:!1,code:2}}for(const p of d){const h=await this.runPipeline(p,u);a=h.code,h.clear&&(i=!0,o="")}return{output:o,clear:i,code:a}}expand(n){let o=n;return o==="~"?o=this.env.HOME:o.startsWith("~/")&&(o=this.env.HOME+o.slice(1)),o=o.replace(/\$\{([A-Za-z_][A-Za-z0-9_]*)\}/g,(i,a)=>this.env[a]??""),o=o.replace(/\$([A-Za-z_][A-Za-z0-9_]*)/g,(i,a)=>this.env[a]??""),o}expandCommand(n){return{argv:n.argv.map(o=>this.expand(o)),stdinFile:n.stdinFile?this.expand(n.stdinFile):void 0,stdoutFile:n.stdoutFile?this.expand(n.stdoutFile):void 0,append:n.append}}async runPipeline(n,o){const i=n.map(d=>this.expandCommand(d));if(i.length===1){const d=i[0].argv,p=d[0],h=d.length===1?/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/.exec(p):null;if(h)return this.env[h[1]]=h[2],{code:0};if(p==="cd")return{code:await this.cd(d,o)};if(p==="clear")return{code:0,clear:!0};if(p==="export")return{code:this.export(d)};if(p==="sh"||p==="source"||p===".")return{code:await this.runScript(d[1],o)}}let a="",u=0;for(const d of i){const p=d.argv[0],h=Ip[p];let m=a;if(d.stdinFile)try{m=await this.sys.readTextFile(It(this.cwd,d.stdinFile))}catch(w){return o(`sh: ${d.stdinFile}: ${w.code??"error"}
`),{code:1}}if(!h)return o(`sh: ${p}: command not found
`),{code:127};let y="";u=await h({argv:d.argv,stdin:m,cwd:this.cwd,env:this.env,sys:this.sys,out:w=>y+=w,err:o}),a=await this.applyStdout(d,y,o)}return o(a),{code:u}}async applyStdout(n,o,i){if(!n.stdoutFile)return o;const a=It(this.cwd,n.stdoutFile);try{const u=n.append?await this.sys.readTextFile(a).catch(()=>""):"";await this.sys.writeTextFile(a,u+o)}catch(u){i(`sh: ${n.stdoutFile}: ${u.code??"error"}
`)}return""}async cd(n,o){const i=n[1]?It(this.cwd,n[1]):this.env.HOME;try{return(await this.sys.stat(i)).type!=="dir"?(o(`cd: not a directory: ${n[1]}
`),1):(this.cwd=i,0)}catch{return o(`cd: ${n[1]}: No such file or directory
`),1}}export(n){for(const o of n.slice(1)){const i=o.indexOf("=");i>0&&(this.env[o.slice(0,i)]=o.slice(i+1))}return 0}async runScript(n,o){if(!n)return o(`sh: usage: sh <script>
`),2;let i;try{i=await this.sys.readTextFile(It(this.cwd,n))}catch(u){return o(`sh: ${n}: ${u.code??"not found"}
`),1}let a=0;for(const u of i.split(`
`)){const d=u.trim();if(!d||d.startsWith("#"))continue;const p=await this.run(d);p.output&&o(p.output),a=p.code}return a}}const aT=["VortexOS [Version 2.0]","Type 'help' for a list of commands.",""],cT=()=>{const e=nn(),n=g.useRef(null);n.current||(n.current=new Gw(e));const o=n.current,[i,a]=g.useState(aT),[u,d]=g.useState(""),[p,h]=g.useState([]),[m,y]=g.useState(-1),[w,S]=g.useState(!1),$=g.useRef(null),j=g.useRef(null);g.useEffect(()=>{var v,E;(v=$.current)==null||v.scrollTo(0,$.current.scrollHeight),(E=j.current)==null||E.focus()},[i]);const b=async()=>{const v=u;a(T=>[...T,o.prompt()+v]),d(""),y(-1),v.trim()&&h(T=>[...T,v]),S(!0);const E=await o.run(v);if(S(!1),E.clear){a([]);return}E.output&&a(T=>[...T,...E.output.replace(/\n$/,"").split(`
`)])},C=v=>{if(v.key==="Enter")v.preventDefault(),w||b();else if(v.key==="ArrowUp"){if(v.preventDefault(),!p.length)return;const E=m===-1?p.length-1:Math.max(0,m-1);y(E),d(p[E])}else if(v.key==="ArrowDown"){if(v.preventDefault(),m===-1)return;const E=m+1;E>=p.length?(y(-1),d("")):(y(E),d(p[E]))}};return l.jsxs("div",{ref:$,onClick:()=>{var v;return(v=j.current)==null?void 0:v.focus()},style:{width:"100%",height:"100%",minWidth:600,minHeight:360,boxSizing:"border-box",overflowY:"auto",background:"#000",color:"#c0c0c0",fontFamily:"'Lucida Console', 'Courier New', monospace",fontSize:13,lineHeight:1.35,padding:8,cursor:"text"},children:[i.map((v,E)=>l.jsx("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:v||" "},E)),l.jsxs("div",{style:{display:"flex",whiteSpace:"pre"},children:[l.jsx("span",{children:o.prompt()}),l.jsx("input",{ref:j,value:u,onChange:v=>d(v.target.value),onKeyDown:C,spellCheck:!1,autoComplete:"off",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"inherit",fontSize:"inherit",padding:0}})]})]})},ex=(e,n,o)=>{switch(o){case"+":return e+n;case"-":return e-n;case"×":return e*n;case"÷":return n===0?NaN:e/n;case"x^y":return Math.pow(e,n);case"Mod":return n===0?NaN:e%n;case"And":return(e&n)>>>0;case"Or":return(e|n)>>>0;case"Xor":return(e^n)>>>0;case"Lsh":return e<<n>>>0;case"Rsh":return e>>n>>>0}},uT=()=>{const[e,n]=g.useState("0"),[o,i]=g.useState(null),[a,u]=g.useState(null),[d,p]=g.useState(!0),[h,m]=g.useState(0),[y,w]=g.useState("standard"),[S,$]=g.useState(10),[j,b]=g.useState(!0),C=g.useRef(null);g.useEffect(()=>{var q;return(q=C.current)==null?void 0:q.focus()},[]);const v=()=>y==="programmer"?parseInt(e,S)||0:parseFloat(e)||0,E=q=>{if(!Number.isFinite(q))return n("Error");if(y==="programmer"){const A=Math.trunc(q)>>>0;n(A.toString(S).toUpperCase())}else n(String(Math.round(q*1e10)/1e10))},T=q=>{if(y!=="programmer")return!0;const A=parseInt(q,16);return!isNaN(A)&&A<S},N=q=>{q==="."&&y==="programmer"||T(q)&&(d?(n(q==="."?"0.":q),p(!1)):q==="."?e.includes(".")||n(e+"."):n(e==="0"?q:e+q))},_=q=>{const A=v();if(o!==null&&a&&!d){const V=ex(o,A,a);i(V),E(V)}else i(A);u(q),p(!0)},K=()=>{o===null||!a||(E(ex(o,v(),a)),i(null),u(null),p(!0))},X=()=>{n("0"),i(null),u(null),p(!0)},ee=()=>{n("0"),p(!0)},ie=()=>{n(q=>q.length>1?q.slice(0,-1):"0")},me=q=>j?q*Math.PI/180:q,fe=q=>{E(q(v())),p(!0)},he=q=>{if(q=Math.trunc(q),q<0)return NaN;let A=1;for(let V=2;V<=q;V++)A*=V;return A},le=q=>{const A=v();$(q),n((Math.trunc(A)>>>0).toString(q).toUpperCase()),p(!0)},z=()=>m(0),R=()=>{E(h),p(!0)},D=()=>m(v()),H=()=>m(q=>q+v()),W=()=>m(q=>q-v()),B=q=>{const A=q.key;if(/^[0-9]$/.test(A))return N(A);if(y==="programmer"&&/^[a-fA-F]$/.test(A))return N(A.toUpperCase());if(A===".")return N(".");if(A==="+")return _("+");if(A==="-")return _("-");if(A==="*")return _("×");if(A==="/")return q.preventDefault(),_("÷");if(A==="Enter"||A==="=")return q.preventDefault(),K();if(A==="Backspace")return ie();if(A==="Escape")return X()},P=({label:q,onClick:A,accent:V,kind:te,w:ne=44})=>{const ce=te??(V?"op":void 0),je=ce==="op"?"#000080":ce==="clr"?"#a00000":ce==="mem"?"#006000":"#000";return l.jsx(Ve,{onClick:A,onMouseDown:Re=>Re.preventDefault(),primary:ce==="eq",style:{width:ne,height:34,fontSize:14,padding:0,color:ce==="eq"?void 0:je,fontWeight:ce&&ce!=="mem"?"bold":"normal"},children:q})},O=l.jsx("div",{style:{display:"flex",gap:4,marginBottom:6},children:[["MC",z],["MR",R],["MS",D],["M+",H],["M-",W]].map(([q,A])=>l.jsx(Ve,{onClick:A,onMouseDown:V=>V.preventDefault(),style:{flex:1,minWidth:0,height:30,fontSize:13,padding:0,color:"#006000"},children:q},q))}),J=l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 44px)",gap:4},children:[l.jsx(P,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(P,{label:"CE",onClick:ee,kind:"clr"}),l.jsx(P,{label:"C",onClick:X,kind:"clr"}),l.jsx(P,{label:"±",onClick:()=>fe(q=>-q)}),l.jsx(P,{label:"√",onClick:()=>fe(Math.sqrt)}),l.jsx(P,{label:"7",onClick:()=>N("7")}),l.jsx(P,{label:"8",onClick:()=>N("8")}),l.jsx(P,{label:"9",onClick:()=>N("9")}),l.jsx(P,{label:"÷",onClick:()=>_("÷"),accent:!0}),l.jsx(P,{label:"%",onClick:()=>fe(q=>q/100)}),l.jsx(P,{label:"4",onClick:()=>N("4")}),l.jsx(P,{label:"5",onClick:()=>N("5")}),l.jsx(P,{label:"6",onClick:()=>N("6")}),l.jsx(P,{label:"×",onClick:()=>_("×"),accent:!0}),l.jsx(P,{label:"1/x",onClick:()=>fe(q=>1/q)}),l.jsx(P,{label:"1",onClick:()=>N("1")}),l.jsx(P,{label:"2",onClick:()=>N("2")}),l.jsx(P,{label:"3",onClick:()=>N("3")}),l.jsx(P,{label:"-",onClick:()=>_("-"),accent:!0}),l.jsx(P,{label:"=",onClick:K,kind:"eq"}),l.jsx(P,{label:"0",onClick:()=>N("0"),w:92}),l.jsx(P,{label:".",onClick:()=>N(".")}),l.jsx(P,{label:"+",onClick:()=>_("+"),accent:!0})]}),ae=l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:j,onChange:()=>b(!0)})," Deg"]}),l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:!j,onChange:()=>b(!1)})," Rad"]})]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(P,{label:"sin",onClick:()=>fe(q=>Math.sin(me(q)))}),l.jsx(P,{label:"cos",onClick:()=>fe(q=>Math.cos(me(q)))}),l.jsx(P,{label:"tan",onClick:()=>fe(q=>Math.tan(me(q)))}),l.jsx(P,{label:"x²",onClick:()=>fe(q=>q*q)}),l.jsx(P,{label:"x^y",onClick:()=>_("x^y"),accent:!0}),l.jsx(P,{label:"C",onClick:X,kind:"clr"}),l.jsx(P,{label:"log",onClick:()=>fe(Math.log10)}),l.jsx(P,{label:"ln",onClick:()=>fe(Math.log)}),l.jsx(P,{label:"n!",onClick:()=>fe(he)}),l.jsx(P,{label:"√",onClick:()=>fe(Math.sqrt)}),l.jsx(P,{label:"1/x",onClick:()=>fe(q=>1/q)}),l.jsx(P,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(P,{label:"π",onClick:()=>{E(Math.PI),p(!0)}}),l.jsx(P,{label:"e",onClick:()=>{E(Math.E),p(!0)}}),l.jsx(P,{label:"±",onClick:()=>fe(q=>-q)}),l.jsx(P,{label:"(",onClick:()=>{}}),l.jsx(P,{label:")",onClick:()=>{}}),l.jsx(P,{label:"%",onClick:()=>fe(q=>q/100)}),l.jsx(P,{label:"7",onClick:()=>N("7")}),l.jsx(P,{label:"8",onClick:()=>N("8")}),l.jsx(P,{label:"9",onClick:()=>N("9")}),l.jsx(P,{label:"÷",onClick:()=>_("÷"),accent:!0}),l.jsx(P,{label:"×",onClick:()=>_("×"),accent:!0}),l.jsx(P,{label:"=",onClick:K,kind:"eq"}),l.jsx(P,{label:"4",onClick:()=>N("4")}),l.jsx(P,{label:"5",onClick:()=>N("5")}),l.jsx(P,{label:"6",onClick:()=>N("6")}),l.jsx(P,{label:"-",onClick:()=>_("-"),accent:!0}),l.jsx(P,{label:"+",onClick:()=>_("+"),accent:!0}),l.jsx(P,{label:".",onClick:()=>N(".")}),l.jsx(P,{label:"1",onClick:()=>N("1")}),l.jsx(P,{label:"2",onClick:()=>N("2")}),l.jsx(P,{label:"3",onClick:()=>N("3")}),l.jsx(P,{label:"0",onClick:()=>N("0")}),l.jsx(P,{label:"0",onClick:()=>N("0")}),l.jsx(P,{label:"00",onClick:()=>{N("0"),N("0")}})]})]}),ue=["A","B","C","D","E","F"],ge=l.jsxs(l.Fragment,{children:[l.jsx("div",{style:{display:"flex",gap:8,marginBottom:4,fontSize:12},children:[["Hex",16],["Dec",10],["Oct",8],["Bin",2]].map(([q,A])=>l.jsxs("label",{children:[l.jsx("input",{type:"radio",checked:S===A,onChange:()=>le(A)})," ",q]},A))}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, 44px)",gap:4},children:[l.jsx(P,{label:"And",onClick:()=>_("And"),accent:!0}),l.jsx(P,{label:"Or",onClick:()=>_("Or"),accent:!0}),l.jsx(P,{label:"Xor",onClick:()=>_("Xor"),accent:!0}),l.jsx(P,{label:"Not",onClick:()=>fe(q=>~Math.trunc(q)>>>0),accent:!0}),l.jsx(P,{label:"Lsh",onClick:()=>_("Lsh"),accent:!0}),l.jsx(P,{label:"Rsh",onClick:()=>_("Rsh"),accent:!0}),l.jsx(P,{label:"Mod",onClick:()=>_("Mod"),accent:!0}),l.jsx(P,{label:"C",onClick:X,kind:"clr"}),l.jsx(P,{label:"CE",onClick:ee,kind:"clr"}),l.jsx(P,{label:"Back",onClick:ie,kind:"clr"}),l.jsx(P,{label:"±",onClick:()=>fe(q=>-Math.trunc(q))}),l.jsx(P,{label:"=",onClick:K,kind:"eq"}),ue.slice(0,3).map(q=>l.jsx(P,{label:q,onClick:()=>N(q)},q)),l.jsx(P,{label:"7",onClick:()=>N("7")}),l.jsx(P,{label:"8",onClick:()=>N("8")}),l.jsx(P,{label:"9",onClick:()=>N("9")}),ue.slice(3).map(q=>l.jsx(P,{label:q,onClick:()=>N(q)},q)),l.jsx(P,{label:"4",onClick:()=>N("4")}),l.jsx(P,{label:"5",onClick:()=>N("5")}),l.jsx(P,{label:"6",onClick:()=>N("6")}),l.jsx(P,{label:"÷",onClick:()=>_("÷"),accent:!0}),l.jsx(P,{label:"×",onClick:()=>_("×"),accent:!0}),l.jsx(P,{label:"-",onClick:()=>_("-"),accent:!0}),l.jsx(P,{label:"1",onClick:()=>N("1")}),l.jsx(P,{label:"2",onClick:()=>N("2")}),l.jsx(P,{label:"3",onClick:()=>N("3")}),l.jsx(P,{label:"+",onClick:()=>_("+"),accent:!0}),l.jsx(P,{label:"0",onClick:()=>N("0"),w:92})]})]}),pe=y==="standard"?252:300,xe=y==="programmer"?{16:"HEX",10:"DEC",8:"OCT",2:"BIN"}[S]:y==="scientific"?j?"DEG":"RAD":"";return l.jsxs("div",{ref:C,tabIndex:0,onKeyDown:B,style:{outline:"none",width:pe},children:[l.jsxs(gn,{children:[l.jsx(Be,{label:"View",children:["standard","scientific","programmer"].map(q=>l.jsxs(Ae,{onMouseDown:A=>{A.preventDefault(),w(q),X(),q!=="programmer"&&$(10)},style:{textTransform:"capitalize"},children:[y===q?"● ":"○ ",q]},q))}),l.jsx(Be,{label:"Edit",children:l.jsx(Ae,{onMouseDown:q=>{var A;q.preventDefault(),(A=navigator.clipboard)==null||A.writeText(e).catch(()=>{})},children:"Copy"})}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Calculator — VortexOS"})})]}),l.jsxs("div",{style:{padding:8},children:[l.jsxs(wt,{variant:"well",style:{width:"100%",boxSizing:"border-box",display:"block",padding:"4px 8px",marginBottom:8,overflow:"hidden",background:"#cfe3cf"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#3a5a3a",height:14,fontFamily:"monospace"},children:[l.jsx("span",{children:h!==0?"M":""}),l.jsx("span",{children:[a??"",xe].filter(Boolean).join("  ")})]}),l.jsx("div",{style:{textAlign:"right",fontFamily:"'Courier New', monospace",fontWeight:"bold",fontSize:28,color:"#0c2a0c",lineHeight:1.1,letterSpacing:1,overflow:"hidden",textOverflow:"ellipsis"},children:e})]}),O,y==="standard"&&J,y==="scientific"&&ae,y==="programmer"&&ge]})]})};function Yw(e,n){return function(){return e.apply(n,arguments)}}const{toString:dT}=Object.prototype,{getPrototypeOf:Pp}=Object,rc=(e=>n=>{const o=dT.call(n);return e[o]||(e[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Rn=e=>(e=e.toLowerCase(),n=>rc(n)===e),oc=e=>n=>typeof n===e,{isArray:fi}=Array,bs=oc("undefined");function fT(e){return e!==null&&!bs(e)&&e.constructor!==null&&!bs(e.constructor)&&tn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Xw=Rn("ArrayBuffer");function pT(e){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(e):n=e&&e.buffer&&Xw(e.buffer),n}const hT=oc("string"),tn=oc("function"),Jw=oc("number"),ic=e=>e!==null&&typeof e=="object",mT=e=>e===!0||e===!1,ga=e=>{if(rc(e)!=="object")return!1;const n=Pp(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},gT=Rn("Date"),xT=Rn("File"),yT=Rn("Blob"),wT=Rn("FileList"),vT=e=>ic(e)&&tn(e.pipe),bT=e=>{let n;return e&&(typeof FormData=="function"&&e instanceof FormData||tn(e.append)&&((n=rc(e))==="formdata"||n==="object"&&tn(e.toString)&&e.toString()==="[object FormData]"))},kT=Rn("URLSearchParams"),[ST,jT,CT,ET]=["ReadableStream","Request","Response","Headers"].map(Rn),$T=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ds(e,n,{allOwnKeys:o=!1}={}){if(e===null||typeof e>"u")return;let i,a;if(typeof e!="object"&&(e=[e]),fi(e))for(i=0,a=e.length;i<a;i++)n.call(null,e[i],i,e);else{const u=o?Object.getOwnPropertyNames(e):Object.keys(e),d=u.length;let p;for(i=0;i<d;i++)p=u[i],n.call(null,e[p],p,e)}}function Zw(e,n){n=n.toLowerCase();const o=Object.keys(e);let i=o.length,a;for(;i-- >0;)if(a=o[i],n===a.toLowerCase())return a;return null}const lo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ev=e=>!bs(e)&&e!==lo;function Ff(){const{caseless:e}=ev(this)&&this||{},n={},o=(i,a)=>{const u=e&&Zw(n,a)||a;ga(n[u])&&ga(i)?n[u]=Ff(n[u],i):ga(i)?n[u]=Ff({},i):fi(i)?n[u]=i.slice():n[u]=i};for(let i=0,a=arguments.length;i<a;i++)arguments[i]&&Ds(arguments[i],o);return n}const TT=(e,n,o,{allOwnKeys:i}={})=>(Ds(n,(a,u)=>{o&&tn(a)?e[u]=Yw(a,o):e[u]=a},{allOwnKeys:i}),e),AT=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),RT=(e,n,o,i)=>{e.prototype=Object.create(n.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:n.prototype}),o&&Object.assign(e.prototype,o)},DT=(e,n,o,i)=>{let a,u,d;const p={};if(n=n||{},e==null)return n;do{for(a=Object.getOwnPropertyNames(e),u=a.length;u-- >0;)d=a[u],(!i||i(d,e,n))&&!p[d]&&(n[d]=e[d],p[d]=!0);e=o!==!1&&Pp(e)}while(e&&(!o||o(e,n))&&e!==Object.prototype);return n},IT=(e,n,o)=>{e=String(e),(o===void 0||o>e.length)&&(o=e.length),o-=n.length;const i=e.indexOf(n,o);return i!==-1&&i===o},PT=e=>{if(!e)return null;if(fi(e))return e;let n=e.length;if(!Jw(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=e[n];return o},NT=(e=>n=>e&&n instanceof e)(typeof Uint8Array<"u"&&Pp(Uint8Array)),LT=(e,n)=>{const i=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=i.next())&&!a.done;){const u=a.value;n.call(e,u[0],u[1])}},MT=(e,n)=>{let o;const i=[];for(;(o=e.exec(n))!==null;)i.push(o);return i},OT=Rn("HTMLFormElement"),zT=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,i,a){return i.toUpperCase()+a}),tx=(({hasOwnProperty:e})=>(n,o)=>e.call(n,o))(Object.prototype),_T=Rn("RegExp"),tv=(e,n)=>{const o=Object.getOwnPropertyDescriptors(e),i={};Ds(o,(a,u)=>{let d;(d=n(a,u,e))!==!1&&(i[u]=d||a)}),Object.defineProperties(e,i)},FT=e=>{tv(e,(n,o)=>{if(tn(e)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const i=e[o];if(tn(i)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},BT=(e,n)=>{const o={},i=a=>{a.forEach(u=>{o[u]=!0})};return fi(e)?i(e):i(String(e).split(n)),o},WT=()=>{},HT=(e,n)=>e!=null&&Number.isFinite(e=+e)?e:n,Nd="abcdefghijklmnopqrstuvwxyz",nx="0123456789",nv={DIGIT:nx,ALPHA:Nd,ALPHA_DIGIT:Nd+Nd.toUpperCase()+nx},UT=(e=16,n=nv.ALPHA_DIGIT)=>{let o="";const{length:i}=n;for(;e--;)o+=n[Math.random()*i|0];return o};function VT(e){return!!(e&&tn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const KT=e=>{const n=new Array(10),o=(i,a)=>{if(ic(i)){if(n.indexOf(i)>=0)return;if(!("toJSON"in i)){n[a]=i;const u=fi(i)?[]:{};return Ds(i,(d,p)=>{const h=o(d,a+1);!bs(h)&&(u[p]=h)}),n[a]=void 0,u}}return i};return o(e,0)},QT=Rn("AsyncFunction"),qT=e=>e&&(ic(e)||tn(e))&&tn(e.then)&&tn(e.catch),rv=((e,n)=>e?setImmediate:n?((o,i)=>(lo.addEventListener("message",({source:a,data:u})=>{a===lo&&u===o&&i.length&&i.shift()()},!1),a=>{i.push(a),lo.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",tn(lo.postMessage)),GT=typeof queueMicrotask<"u"?queueMicrotask.bind(lo):typeof process<"u"&&process.nextTick||rv,Z={isArray:fi,isArrayBuffer:Xw,isBuffer:fT,isFormData:bT,isArrayBufferView:pT,isString:hT,isNumber:Jw,isBoolean:mT,isObject:ic,isPlainObject:ga,isReadableStream:ST,isRequest:jT,isResponse:CT,isHeaders:ET,isUndefined:bs,isDate:gT,isFile:xT,isBlob:yT,isRegExp:_T,isFunction:tn,isStream:vT,isURLSearchParams:kT,isTypedArray:NT,isFileList:wT,forEach:Ds,merge:Ff,extend:TT,trim:$T,stripBOM:AT,inherits:RT,toFlatObject:DT,kindOf:rc,kindOfTest:Rn,endsWith:IT,toArray:PT,forEachEntry:LT,matchAll:MT,isHTMLForm:OT,hasOwnProperty:tx,hasOwnProp:tx,reduceDescriptors:tv,freezeMethods:FT,toObjectSet:BT,toCamelCase:zT,noop:WT,toFiniteNumber:HT,findKey:Zw,global:lo,isContextDefined:ev,ALPHABET:nv,generateString:UT,isSpecCompliantForm:VT,toJSONObject:KT,isAsyncFn:QT,isThenable:qT,setImmediate:rv,asap:GT};function De(e,n,o,i,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),i&&(this.request=i),a&&(this.response=a,this.status=a.status?a.status:null)}Z.inherits(De,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Z.toJSONObject(this.config),code:this.code,status:this.status}}});const ov=De.prototype,iv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{iv[e]={value:e}});Object.defineProperties(De,iv);Object.defineProperty(ov,"isAxiosError",{value:!0});De.from=(e,n,o,i,a,u)=>{const d=Object.create(ov);return Z.toFlatObject(e,d,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),De.call(d,e.message,n,o,i,a),d.cause=e,d.name=e.name,u&&Object.assign(d,u),d};const YT=null;function Bf(e){return Z.isPlainObject(e)||Z.isArray(e)}function sv(e){return Z.endsWith(e,"[]")?e.slice(0,-2):e}function rx(e,n,o){return e?e.concat(n).map(function(a,u){return a=sv(a),!o&&u?"["+a+"]":a}).join(o?".":""):n}function XT(e){return Z.isArray(e)&&!e.some(Bf)}const JT=Z.toFlatObject(Z,{},null,function(n){return/^is[A-Z]/.test(n)});function sc(e,n,o){if(!Z.isObject(e))throw new TypeError("target must be an object");n=n||new FormData,o=Z.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,C){return!Z.isUndefined(C[b])});const i=o.metaTokens,a=o.visitor||y,u=o.dots,d=o.indexes,h=(o.Blob||typeof Blob<"u"&&Blob)&&Z.isSpecCompliantForm(n);if(!Z.isFunction(a))throw new TypeError("visitor must be a function");function m(j){if(j===null)return"";if(Z.isDate(j))return j.toISOString();if(!h&&Z.isBlob(j))throw new De("Blob is not supported. Use a Buffer instead.");return Z.isArrayBuffer(j)||Z.isTypedArray(j)?h&&typeof Blob=="function"?new Blob([j]):Buffer.from(j):j}function y(j,b,C){let v=j;if(j&&!C&&typeof j=="object"){if(Z.endsWith(b,"{}"))b=i?b:b.slice(0,-2),j=JSON.stringify(j);else if(Z.isArray(j)&&XT(j)||(Z.isFileList(j)||Z.endsWith(b,"[]"))&&(v=Z.toArray(j)))return b=sv(b),v.forEach(function(T,N){!(Z.isUndefined(T)||T===null)&&n.append(d===!0?rx([b],N,u):d===null?b:b+"[]",m(T))}),!1}return Bf(j)?!0:(n.append(rx(C,b,u),m(j)),!1)}const w=[],S=Object.assign(JT,{defaultVisitor:y,convertValue:m,isVisitable:Bf});function $(j,b){if(!Z.isUndefined(j)){if(w.indexOf(j)!==-1)throw Error("Circular reference detected in "+b.join("."));w.push(j),Z.forEach(j,function(v,E){(!(Z.isUndefined(v)||v===null)&&a.call(n,v,Z.isString(E)?E.trim():E,b,S))===!0&&$(v,b?b.concat(E):[E])}),w.pop()}}if(!Z.isObject(e))throw new TypeError("data must be an object");return $(e),n}function ox(e){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return n[i]})}function Np(e,n){this._pairs=[],e&&sc(e,this,n)}const lv=Np.prototype;lv.append=function(n,o){this._pairs.push([n,o])};lv.toString=function(n){const o=n?function(i){return n.call(this,i,ox)}:ox;return this._pairs.map(function(a){return o(a[0])+"="+o(a[1])},"").join("&")};function ZT(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function av(e,n,o){if(!n)return e;const i=o&&o.encode||ZT;Z.isFunction(o)&&(o={serialize:o});const a=o&&o.serialize;let u;if(a?u=a(n,o):u=Z.isURLSearchParams(n)?n.toString():new Np(n,o).toString(i),u){const d=e.indexOf("#");d!==-1&&(e=e.slice(0,d)),e+=(e.indexOf("?")===-1?"?":"&")+u}return e}class ix{constructor(){this.handlers=[]}use(n,o,i){return this.handlers.push({fulfilled:n,rejected:o,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){Z.forEach(this.handlers,function(i){i!==null&&n(i)})}}const cv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eA=typeof URLSearchParams<"u"?URLSearchParams:Np,tA=typeof FormData<"u"?FormData:null,nA=typeof Blob<"u"?Blob:null,rA={isBrowser:!0,classes:{URLSearchParams:eA,FormData:tA,Blob:nA},protocols:["http","https","file","blob","url","data"]},Lp=typeof window<"u"&&typeof document<"u",Wf=typeof navigator=="object"&&navigator||void 0,oA=Lp&&(!Wf||["ReactNative","NativeScript","NS"].indexOf(Wf.product)<0),iA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sA=Lp&&window.location.href||"http://localhost",lA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lp,hasStandardBrowserEnv:oA,hasStandardBrowserWebWorkerEnv:iA,navigator:Wf,origin:sA},Symbol.toStringTag,{value:"Module"})),Dt={...lA,...rA};function aA(e,n){return sc(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(o,i,a,u){return Dt.isNode&&Z.isBuffer(o)?(this.append(i,o.toString("base64")),!1):u.defaultVisitor.apply(this,arguments)}},n))}function cA(e){return Z.matchAll(/\w+|\[(\w*)]/g,e).map(n=>n[0]==="[]"?"":n[1]||n[0])}function uA(e){const n={},o=Object.keys(e);let i;const a=o.length;let u;for(i=0;i<a;i++)u=o[i],n[u]=e[u];return n}function uv(e){function n(o,i,a,u){let d=o[u++];if(d==="__proto__")return!0;const p=Number.isFinite(+d),h=u>=o.length;return d=!d&&Z.isArray(a)?a.length:d,h?(Z.hasOwnProp(a,d)?a[d]=[a[d],i]:a[d]=i,!p):((!a[d]||!Z.isObject(a[d]))&&(a[d]=[]),n(o,i,a[d],u)&&Z.isArray(a[d])&&(a[d]=uA(a[d])),!p)}if(Z.isFormData(e)&&Z.isFunction(e.entries)){const o={};return Z.forEachEntry(e,(i,a)=>{n(cA(i),a,o,0)}),o}return null}function dA(e,n,o){if(Z.isString(e))try{return(n||JSON.parse)(e),Z.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(o||JSON.stringify)(e)}const Is={transitional:cv,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const i=o.getContentType()||"",a=i.indexOf("application/json")>-1,u=Z.isObject(n);if(u&&Z.isHTMLForm(n)&&(n=new FormData(n)),Z.isFormData(n))return a?JSON.stringify(uv(n)):n;if(Z.isArrayBuffer(n)||Z.isBuffer(n)||Z.isStream(n)||Z.isFile(n)||Z.isBlob(n)||Z.isReadableStream(n))return n;if(Z.isArrayBufferView(n))return n.buffer;if(Z.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let p;if(u){if(i.indexOf("application/x-www-form-urlencoded")>-1)return aA(n,this.formSerializer).toString();if((p=Z.isFileList(n))||i.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return sc(p?{"files[]":n}:n,h&&new h,this.formSerializer)}}return u||a?(o.setContentType("application/json",!1),dA(n)):n}],transformResponse:[function(n){const o=this.transitional||Is.transitional,i=o&&o.forcedJSONParsing,a=this.responseType==="json";if(Z.isResponse(n)||Z.isReadableStream(n))return n;if(n&&Z.isString(n)&&(i&&!this.responseType||a)){const d=!(o&&o.silentJSONParsing)&&a;try{return JSON.parse(n)}catch(p){if(d)throw p.name==="SyntaxError"?De.from(p,De.ERR_BAD_RESPONSE,this,null,this.response):p}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Z.forEach(["delete","get","head","post","put","patch"],e=>{Is.headers[e]={}});const fA=Z.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),pA=e=>{const n={};let o,i,a;return e&&e.split(`
`).forEach(function(d){a=d.indexOf(":"),o=d.substring(0,a).trim().toLowerCase(),i=d.substring(a+1).trim(),!(!o||n[o]&&fA[o])&&(o==="set-cookie"?n[o]?n[o].push(i):n[o]=[i]:n[o]=n[o]?n[o]+", "+i:i)}),n},sx=Symbol("internals");function is(e){return e&&String(e).trim().toLowerCase()}function xa(e){return e===!1||e==null?e:Z.isArray(e)?e.map(xa):String(e)}function hA(e){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=o.exec(e);)n[i[1]]=i[2];return n}const mA=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ld(e,n,o,i,a){if(Z.isFunction(i))return i.call(this,n,o);if(a&&(n=o),!!Z.isString(n)){if(Z.isString(i))return n.indexOf(i)!==-1;if(Z.isRegExp(i))return i.test(n)}}function gA(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,i)=>o.toUpperCase()+i)}function xA(e,n){const o=Z.toCamelCase(" "+n);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+o,{value:function(a,u,d){return this[i].call(this,n,a,u,d)},configurable:!0})})}class Ut{constructor(n){n&&this.set(n)}set(n,o,i){const a=this;function u(p,h,m){const y=is(h);if(!y)throw new Error("header name must be a non-empty string");const w=Z.findKey(a,y);(!w||a[w]===void 0||m===!0||m===void 0&&a[w]!==!1)&&(a[w||h]=xa(p))}const d=(p,h)=>Z.forEach(p,(m,y)=>u(m,y,h));if(Z.isPlainObject(n)||n instanceof this.constructor)d(n,o);else if(Z.isString(n)&&(n=n.trim())&&!mA(n))d(pA(n),o);else if(Z.isHeaders(n))for(const[p,h]of n.entries())u(h,p,i);else n!=null&&u(o,n,i);return this}get(n,o){if(n=is(n),n){const i=Z.findKey(this,n);if(i){const a=this[i];if(!o)return a;if(o===!0)return hA(a);if(Z.isFunction(o))return o.call(this,a,i);if(Z.isRegExp(o))return o.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=is(n),n){const i=Z.findKey(this,n);return!!(i&&this[i]!==void 0&&(!o||Ld(this,this[i],i,o)))}return!1}delete(n,o){const i=this;let a=!1;function u(d){if(d=is(d),d){const p=Z.findKey(i,d);p&&(!o||Ld(i,i[p],p,o))&&(delete i[p],a=!0)}}return Z.isArray(n)?n.forEach(u):u(n),a}clear(n){const o=Object.keys(this);let i=o.length,a=!1;for(;i--;){const u=o[i];(!n||Ld(this,this[u],u,n,!0))&&(delete this[u],a=!0)}return a}normalize(n){const o=this,i={};return Z.forEach(this,(a,u)=>{const d=Z.findKey(i,u);if(d){o[d]=xa(a),delete o[u];return}const p=n?gA(u):String(u).trim();p!==u&&delete o[u],o[p]=xa(a),i[p]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return Z.forEach(this,(i,a)=>{i!=null&&i!==!1&&(o[a]=n&&Z.isArray(i)?i.join(", "):i)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const i=new this(n);return o.forEach(a=>i.set(a)),i}static accessor(n){const i=(this[sx]=this[sx]={accessors:{}}).accessors,a=this.prototype;function u(d){const p=is(d);i[p]||(xA(a,d),i[p]=!0)}return Z.isArray(n)?n.forEach(u):u(n),this}}Ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Z.reduceDescriptors(Ut.prototype,({value:e},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>e,set(i){this[o]=i}}});Z.freezeMethods(Ut);function Md(e,n){const o=this||Is,i=n||o,a=Ut.from(i.headers);let u=i.data;return Z.forEach(e,function(p){u=p.call(o,u,a.normalize(),n?n.status:void 0)}),a.normalize(),u}function dv(e){return!!(e&&e.__CANCEL__)}function pi(e,n,o){De.call(this,e??"canceled",De.ERR_CANCELED,n,o),this.name="CanceledError"}Z.inherits(pi,De,{__CANCEL__:!0});function fv(e,n,o){const i=o.config.validateStatus;!o.status||!i||i(o.status)?e(o):n(new De("Request failed with status code "+o.status,[De.ERR_BAD_REQUEST,De.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function yA(e){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return n&&n[1]||""}function wA(e,n){e=e||10;const o=new Array(e),i=new Array(e);let a=0,u=0,d;return n=n!==void 0?n:1e3,function(h){const m=Date.now(),y=i[u];d||(d=m),o[a]=h,i[a]=m;let w=u,S=0;for(;w!==a;)S+=o[w++],w=w%e;if(a=(a+1)%e,a===u&&(u=(u+1)%e),m-d<n)return;const $=y&&m-y;return $?Math.round(S*1e3/$):void 0}}function vA(e,n){let o=0,i=1e3/n,a,u;const d=(m,y=Date.now())=>{o=y,a=null,u&&(clearTimeout(u),u=null),e.apply(null,m)};return[(...m)=>{const y=Date.now(),w=y-o;w>=i?d(m,y):(a=m,u||(u=setTimeout(()=>{u=null,d(a)},i-w)))},()=>a&&d(a)]}const Pa=(e,n,o=3)=>{let i=0;const a=wA(50,250);return vA(u=>{const d=u.loaded,p=u.lengthComputable?u.total:void 0,h=d-i,m=a(h),y=d<=p;i=d;const w={loaded:d,total:p,progress:p?d/p:void 0,bytes:h,rate:m||void 0,estimated:m&&p&&y?(p-d)/m:void 0,event:u,lengthComputable:p!=null,[n?"download":"upload"]:!0};e(w)},o)},lx=(e,n)=>{const o=e!=null;return[i=>n[0]({lengthComputable:o,total:e,loaded:i}),n[1]]},ax=e=>(...n)=>Z.asap(()=>e(...n)),bA=Dt.hasStandardBrowserEnv?((e,n)=>o=>(o=new URL(o,Dt.origin),e.protocol===o.protocol&&e.host===o.host&&(n||e.port===o.port)))(new URL(Dt.origin),Dt.navigator&&/(msie|trident)/i.test(Dt.navigator.userAgent)):()=>!0,kA=Dt.hasStandardBrowserEnv?{write(e,n,o,i,a,u){const d=[e+"="+encodeURIComponent(n)];Z.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),Z.isString(i)&&d.push("path="+i),Z.isString(a)&&d.push("domain="+a),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read(e){const n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function SA(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jA(e,n){return n?e.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):e}function pv(e,n){return e&&!SA(n)?jA(e,n):n}const cx=e=>e instanceof Ut?{...e}:e;function mo(e,n){n=n||{};const o={};function i(m,y,w,S){return Z.isPlainObject(m)&&Z.isPlainObject(y)?Z.merge.call({caseless:S},m,y):Z.isPlainObject(y)?Z.merge({},y):Z.isArray(y)?y.slice():y}function a(m,y,w,S){if(Z.isUndefined(y)){if(!Z.isUndefined(m))return i(void 0,m,w,S)}else return i(m,y,w,S)}function u(m,y){if(!Z.isUndefined(y))return i(void 0,y)}function d(m,y){if(Z.isUndefined(y)){if(!Z.isUndefined(m))return i(void 0,m)}else return i(void 0,y)}function p(m,y,w){if(w in n)return i(m,y);if(w in e)return i(void 0,m)}const h={url:u,method:u,data:u,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,responseEncoding:d,validateStatus:p,headers:(m,y,w)=>a(cx(m),cx(y),w,!0)};return Z.forEach(Object.keys(Object.assign({},e,n)),function(y){const w=h[y]||a,S=w(e[y],n[y],y);Z.isUndefined(S)&&w!==p||(o[y]=S)}),o}const hv=e=>{const n=mo({},e);let{data:o,withXSRFToken:i,xsrfHeaderName:a,xsrfCookieName:u,headers:d,auth:p}=n;n.headers=d=Ut.from(d),n.url=av(pv(n.baseURL,n.url),e.params,e.paramsSerializer),p&&d.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(Z.isFormData(o)){if(Dt.hasStandardBrowserEnv||Dt.hasStandardBrowserWebWorkerEnv)d.setContentType(void 0);else if((h=d.getContentType())!==!1){const[m,...y]=h?h.split(";").map(w=>w.trim()).filter(Boolean):[];d.setContentType([m||"multipart/form-data",...y].join("; "))}}if(Dt.hasStandardBrowserEnv&&(i&&Z.isFunction(i)&&(i=i(n)),i||i!==!1&&bA(n.url))){const m=a&&u&&kA.read(u);m&&d.set(a,m)}return n},CA=typeof XMLHttpRequest<"u",EA=CA&&function(e){return new Promise(function(o,i){const a=hv(e);let u=a.data;const d=Ut.from(a.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:m}=a,y,w,S,$,j;function b(){$&&$(),j&&j(),a.cancelToken&&a.cancelToken.unsubscribe(y),a.signal&&a.signal.removeEventListener("abort",y)}let C=new XMLHttpRequest;C.open(a.method.toUpperCase(),a.url,!0),C.timeout=a.timeout;function v(){if(!C)return;const T=Ut.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),_={data:!p||p==="text"||p==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:T,config:e,request:C};fv(function(X){o(X),b()},function(X){i(X),b()},_),C=null}"onloadend"in C?C.onloadend=v:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(v)},C.onabort=function(){C&&(i(new De("Request aborted",De.ECONNABORTED,e,C)),C=null)},C.onerror=function(){i(new De("Network Error",De.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let N=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const _=a.transitional||cv;a.timeoutErrorMessage&&(N=a.timeoutErrorMessage),i(new De(N,_.clarifyTimeoutError?De.ETIMEDOUT:De.ECONNABORTED,e,C)),C=null},u===void 0&&d.setContentType(null),"setRequestHeader"in C&&Z.forEach(d.toJSON(),function(N,_){C.setRequestHeader(_,N)}),Z.isUndefined(a.withCredentials)||(C.withCredentials=!!a.withCredentials),p&&p!=="json"&&(C.responseType=a.responseType),m&&([S,j]=Pa(m,!0),C.addEventListener("progress",S)),h&&C.upload&&([w,$]=Pa(h),C.upload.addEventListener("progress",w),C.upload.addEventListener("loadend",$)),(a.cancelToken||a.signal)&&(y=T=>{C&&(i(!T||T.type?new pi(null,e,C):T),C.abort(),C=null)},a.cancelToken&&a.cancelToken.subscribe(y),a.signal&&(a.signal.aborted?y():a.signal.addEventListener("abort",y)));const E=yA(a.url);if(E&&Dt.protocols.indexOf(E)===-1){i(new De("Unsupported protocol "+E+":",De.ERR_BAD_REQUEST,e));return}C.send(u||null)})},$A=(e,n)=>{const{length:o}=e=e?e.filter(Boolean):[];if(n||o){let i=new AbortController,a;const u=function(m){if(!a){a=!0,p();const y=m instanceof Error?m:this.reason;i.abort(y instanceof De?y:new pi(y instanceof Error?y.message:y))}};let d=n&&setTimeout(()=>{d=null,u(new De(`timeout ${n} of ms exceeded`,De.ETIMEDOUT))},n);const p=()=>{e&&(d&&clearTimeout(d),d=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(u):m.removeEventListener("abort",u)}),e=null)};e.forEach(m=>m.addEventListener("abort",u));const{signal:h}=i;return h.unsubscribe=()=>Z.asap(p),h}},TA=function*(e,n){let o=e.byteLength;if(o<n){yield e;return}let i=0,a;for(;i<o;)a=i+n,yield e.slice(i,a),i=a},AA=async function*(e,n){for await(const o of RA(e))yield*TA(o,n)},RA=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const n=e.getReader();try{for(;;){const{done:o,value:i}=await n.read();if(o)break;yield i}}finally{await n.cancel()}},ux=(e,n,o,i)=>{const a=AA(e,n);let u=0,d,p=h=>{d||(d=!0,i&&i(h))};return new ReadableStream({async pull(h){try{const{done:m,value:y}=await a.next();if(m){p(),h.close();return}let w=y.byteLength;if(o){let S=u+=w;o(S)}h.enqueue(new Uint8Array(y))}catch(m){throw p(m),m}},cancel(h){return p(h),a.return()}},{highWaterMark:2})},lc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",mv=lc&&typeof ReadableStream=="function",DA=lc&&(typeof TextEncoder=="function"?(e=>n=>e.encode(n))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),gv=(e,...n)=>{try{return!!e(...n)}catch{return!1}},IA=mv&&gv(()=>{let e=!1;const n=new Request(Dt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!n}),dx=64*1024,Hf=mv&&gv(()=>Z.isReadableStream(new Response("").body)),Na={stream:Hf&&(e=>e.body)};lc&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!Na[n]&&(Na[n]=Z.isFunction(e[n])?o=>o[n]():(o,i)=>{throw new De(`Response type '${n}' is not supported`,De.ERR_NOT_SUPPORT,i)})})})(new Response);const PA=async e=>{if(e==null)return 0;if(Z.isBlob(e))return e.size;if(Z.isSpecCompliantForm(e))return(await new Request(Dt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(Z.isArrayBufferView(e)||Z.isArrayBuffer(e))return e.byteLength;if(Z.isURLSearchParams(e)&&(e=e+""),Z.isString(e))return(await DA(e)).byteLength},NA=async(e,n)=>{const o=Z.toFiniteNumber(e.getContentLength());return o??PA(n)},LA=lc&&(async e=>{let{url:n,method:o,data:i,signal:a,cancelToken:u,timeout:d,onDownloadProgress:p,onUploadProgress:h,responseType:m,headers:y,withCredentials:w="same-origin",fetchOptions:S}=hv(e);m=m?(m+"").toLowerCase():"text";let $=$A([a,u&&u.toAbortSignal()],d),j;const b=$&&$.unsubscribe&&(()=>{$.unsubscribe()});let C;try{if(h&&IA&&o!=="get"&&o!=="head"&&(C=await NA(y,i))!==0){let _=new Request(n,{method:"POST",body:i,duplex:"half"}),K;if(Z.isFormData(i)&&(K=_.headers.get("content-type"))&&y.setContentType(K),_.body){const[X,ee]=lx(C,Pa(ax(h)));i=ux(_.body,dx,X,ee)}}Z.isString(w)||(w=w?"include":"omit");const v="credentials"in Request.prototype;j=new Request(n,{...S,signal:$,method:o.toUpperCase(),headers:y.normalize().toJSON(),body:i,duplex:"half",credentials:v?w:void 0});let E=await fetch(j);const T=Hf&&(m==="stream"||m==="response");if(Hf&&(p||T&&b)){const _={};["status","statusText","headers"].forEach(ie=>{_[ie]=E[ie]});const K=Z.toFiniteNumber(E.headers.get("content-length")),[X,ee]=p&&lx(K,Pa(ax(p),!0))||[];E=new Response(ux(E.body,dx,X,()=>{ee&&ee(),b&&b()}),_)}m=m||"text";let N=await Na[Z.findKey(Na,m)||"text"](E,e);return!T&&b&&b(),await new Promise((_,K)=>{fv(_,K,{data:N,headers:Ut.from(E.headers),status:E.status,statusText:E.statusText,config:e,request:j})})}catch(v){throw b&&b(),v&&v.name==="TypeError"&&/fetch/i.test(v.message)?Object.assign(new De("Network Error",De.ERR_NETWORK,e,j),{cause:v.cause||v}):De.from(v,v&&v.code,e,j)}}),Uf={http:YT,xhr:EA,fetch:LA};Z.forEach(Uf,(e,n)=>{if(e){try{Object.defineProperty(e,"name",{value:n})}catch{}Object.defineProperty(e,"adapterName",{value:n})}});const fx=e=>`- ${e}`,MA=e=>Z.isFunction(e)||e===null||e===!1,xv={getAdapter:e=>{e=Z.isArray(e)?e:[e];const{length:n}=e;let o,i;const a={};for(let u=0;u<n;u++){o=e[u];let d;if(i=o,!MA(o)&&(i=Uf[(d=String(o)).toLowerCase()],i===void 0))throw new De(`Unknown adapter '${d}'`);if(i)break;a[d||"#"+u]=i}if(!i){const u=Object.entries(a).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let d=n?u.length>1?`since :
`+u.map(fx).join(`
`):" "+fx(u[0]):"as no adapter specified";throw new De("There is no suitable adapter to dispatch the request "+d,"ERR_NOT_SUPPORT")}return i},adapters:Uf};function Od(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pi(null,e)}function px(e){return Od(e),e.headers=Ut.from(e.headers),e.data=Md.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),xv.getAdapter(e.adapter||Is.adapter)(e).then(function(i){return Od(e),i.data=Md.call(e,e.transformResponse,i),i.headers=Ut.from(i.headers),i},function(i){return dv(i)||(Od(e),i&&i.response&&(i.response.data=Md.call(e,e.transformResponse,i.response),i.response.headers=Ut.from(i.response.headers))),Promise.reject(i)})}const yv="1.7.9",ac={};["object","boolean","number","function","string","symbol"].forEach((e,n)=>{ac[e]=function(i){return typeof i===e||"a"+(n<1?"n ":" ")+e}});const hx={};ac.transitional=function(n,o,i){function a(u,d){return"[Axios v"+yv+"] Transitional option '"+u+"'"+d+(i?". "+i:"")}return(u,d,p)=>{if(n===!1)throw new De(a(d," has been removed"+(o?" in "+o:"")),De.ERR_DEPRECATED);return o&&!hx[d]&&(hx[d]=!0,console.warn(a(d," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(u,d,p):!0}};ac.spelling=function(n){return(o,i)=>(console.warn(`${i} is likely a misspelling of ${n}`),!0)};function OA(e,n,o){if(typeof e!="object")throw new De("options must be an object",De.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let a=i.length;for(;a-- >0;){const u=i[a],d=n[u];if(d){const p=e[u],h=p===void 0||d(p,u,e);if(h!==!0)throw new De("option "+u+" must be "+h,De.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new De("Unknown option "+u,De.ERR_BAD_OPTION)}}const ya={assertOptions:OA,validators:ac},_n=ya.validators;class co{constructor(n){this.defaults=n,this.interceptors={request:new ix,response:new ix}}async request(n,o){try{return await this._request(n,o)}catch(i){if(i instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const u=a.stack?a.stack.replace(/^.+\n/,""):"";try{i.stack?u&&!String(i.stack).endsWith(u.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+u):i.stack=u}catch{}}throw i}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=mo(this.defaults,o);const{transitional:i,paramsSerializer:a,headers:u}=o;i!==void 0&&ya.assertOptions(i,{silentJSONParsing:_n.transitional(_n.boolean),forcedJSONParsing:_n.transitional(_n.boolean),clarifyTimeoutError:_n.transitional(_n.boolean)},!1),a!=null&&(Z.isFunction(a)?o.paramsSerializer={serialize:a}:ya.assertOptions(a,{encode:_n.function,serialize:_n.function},!0)),ya.assertOptions(o,{baseUrl:_n.spelling("baseURL"),withXsrfToken:_n.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let d=u&&Z.merge(u.common,u[o.method]);u&&Z.forEach(["delete","get","head","post","put","patch","common"],j=>{delete u[j]}),o.headers=Ut.concat(d,u);const p=[];let h=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(o)===!1||(h=h&&b.synchronous,p.unshift(b.fulfilled,b.rejected))});const m=[];this.interceptors.response.forEach(function(b){m.push(b.fulfilled,b.rejected)});let y,w=0,S;if(!h){const j=[px.bind(this),void 0];for(j.unshift.apply(j,p),j.push.apply(j,m),S=j.length,y=Promise.resolve(o);w<S;)y=y.then(j[w++],j[w++]);return y}S=p.length;let $=o;for(w=0;w<S;){const j=p[w++],b=p[w++];try{$=j($)}catch(C){b.call(this,C);break}}try{y=px.call(this,$)}catch(j){return Promise.reject(j)}for(w=0,S=m.length;w<S;)y=y.then(m[w++],m[w++]);return y}getUri(n){n=mo(this.defaults,n);const o=pv(n.baseURL,n.url);return av(o,n.params,n.paramsSerializer)}}Z.forEach(["delete","get","head","options"],function(n){co.prototype[n]=function(o,i){return this.request(mo(i||{},{method:n,url:o,data:(i||{}).data}))}});Z.forEach(["post","put","patch"],function(n){function o(i){return function(u,d,p){return this.request(mo(p||{},{method:n,headers:i?{"Content-Type":"multipart/form-data"}:{},url:u,data:d}))}}co.prototype[n]=o(),co.prototype[n+"Form"]=o(!0)});class Mp{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(u){o=u});const i=this;this.promise.then(a=>{if(!i._listeners)return;let u=i._listeners.length;for(;u-- >0;)i._listeners[u](a);i._listeners=null}),this.promise.then=a=>{let u;const d=new Promise(p=>{i.subscribe(p),u=p}).then(a);return d.cancel=function(){i.unsubscribe(u)},d},n(function(u,d,p){i.reason||(i.reason=new pi(u,d,p),o(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=i=>{n.abort(i)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new Mp(function(a){n=a}),cancel:n}}}function zA(e){return function(o){return e.apply(null,o)}}function _A(e){return Z.isObject(e)&&e.isAxiosError===!0}const Vf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vf).forEach(([e,n])=>{Vf[n]=e});function wv(e){const n=new co(e),o=Yw(co.prototype.request,n);return Z.extend(o,co.prototype,n,{allOwnKeys:!0}),Z.extend(o,n,null,{allOwnKeys:!0}),o.create=function(a){return wv(mo(e,a))},o}const Ke=wv(Is);Ke.Axios=co;Ke.CanceledError=pi;Ke.CancelToken=Mp;Ke.isCancel=dv;Ke.VERSION=yv;Ke.toFormData=sc;Ke.AxiosError=De;Ke.Cancel=Ke.CanceledError;Ke.all=function(n){return Promise.all(n)};Ke.spread=zA;Ke.isAxiosError=_A;Ke.mergeConfig=mo;Ke.AxiosHeaders=Ut;Ke.formToJSON=e=>uv(Z.isHTMLForm(e)?new FormData(e):e);Ke.getAdapter=xv.getAdapter;Ke.HttpStatusCode=Vf;Ke.default=Ke;const vv="http://localhost:8082";async function cc(e,n){try{await Ke.post(`${vv}/scores`,{game:e,value:n})}catch{}}async function FA(e,n="desc"){try{const o=await Ke.get(`${vv}/scores`,{params:{game:e,order:n}});return Array.isArray(o.data)?o.data:[]}catch{return[]}}const uc=({game:e,order:n="desc",format:o=d=>String(d),title:i="High Scores",refreshKey:a,width:u=180})=>{const[d,p]=g.useState([]),[h,m]=g.useState(!1);return g.useEffect(()=>{let y=!0;return FA(e,n).then(w=>{y&&(p(w),m(!0))}),()=>{y=!1}},[e,n,a]),l.jsxs("div",{style:{width:u},children:[l.jsxs("div",{style:{fontWeight:"bold",fontSize:12,marginBottom:4,color:"#000080"},children:["🏆 ",i]}),l.jsx(wt,{variant:"well",style:{background:"#fff",padding:4,minHeight:60},children:h?d.length===0?l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"No scores yet — be the first!"}):d.map((y,w)=>l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,padding:"1px 4px",background:w===0?"#fff7cc":"transparent"},children:[l.jsxs("span",{style:{color:"#555",width:18},children:[w+1,"."]}),l.jsx("span",{style:{fontFamily:"monospace",fontWeight:w===0?"bold":"normal"},children:o(y.value)}),l.jsx("span",{style:{color:"#999",fontSize:10,marginLeft:"auto",paddingLeft:8},children:new Date(y.createdAt).toLocaleDateString()})]},y.id)):l.jsx("div",{style:{fontSize:11,color:"#888",padding:4},children:"Loading…"})})]})},Xl={beginner:{rows:9,cols:9,mines:10,label:"Beginner"},intermediate:{rows:16,cols:16,mines:40,label:"Intermediate"},expert:{rows:16,cols:30,mines:99,label:"Expert"}},BA=["","#0000ff","#008000","#ff0000","#000080","#800000","#008080","#000000","#808080"],mx=(e,n)=>Array.from({length:e},()=>Array.from({length:n},()=>({mine:!1,revealed:!1,flagged:!1,adj:0})));function WA(e,n,o){const i=e.length,a=e[0].length;let u=0;for(;u<n;){const d=Math.floor(Math.random()*i),p=Math.floor(Math.random()*a);e[d][p].mine||o.has(`${d},${p}`)||(e[d][p].mine=!0,u++)}for(let d=0;d<i;d++)for(let p=0;p<a;p++){if(e[d][p].mine)continue;let h=0;for(let m=-1;m<=1;m++)for(let y=-1;y<=1;y++){const w=d+m,S=p+y;w>=0&&w<i&&S>=0&&S<a&&e[w][S].mine&&h++}e[d][p].adj=h}}const HA=()=>{const[e,n]=g.useState("beginner"),o=Xl[e],[i,a]=g.useState(()=>mx(o.rows,o.cols)),[u,d]=g.useState("playing"),[p,h]=g.useState(!1),[m,y]=g.useState(0),[w,S]=g.useState(0),$=g.useRef(0),j=(_=e)=>{const K=Xl[_];n(_),a(mx(K.rows,K.cols)),d("playing"),h(!1),y(0),$.current=0};g.useEffect(()=>{if(u!=="playing"||!p)return;const _=setInterval(()=>y(K=>($.current=K+1,K+1)),1e3);return()=>clearInterval(_)},[u,p]);const b=o.mines-i.flat().filter(_=>_.flagged).length,C=(_,K)=>{u==="playing"&&a(X=>{const ee=X.map(he=>he.map(le=>({...le})));if(!p){const he=new Set;for(let le=-1;le<=1;le++)for(let z=-1;z<=1;z++)he.add(`${_+le},${K+z}`);WA(ee,o.mines,he),h(!0)}const ie=ee[_][K];if(ie.revealed||ie.flagged)return X;if(ie.mine)return ee.forEach(he=>he.forEach(le=>le.mine&&(le.revealed=!0))),d("lost"),ee;const me=[[_,K]];for(;me.length;){const[he,le]=me.pop(),z=ee[he][le];if(!(z.revealed||z.flagged)&&(z.revealed=!0,z.adj===0))for(let R=-1;R<=1;R++)for(let D=-1;D<=1;D++){const H=he+R,W=le+D;H>=0&&H<ee.length&&W>=0&&W<ee[0].length&&!ee[H][W].mine&&me.push([H,W])}}return ee.flat().filter(he=>he.revealed&&!he.mine).length===o.rows*o.cols-o.mines&&(d("won"),ho(),cc(`minesweeper:${e}`,$.current).then(()=>S(he=>he+1))),ee})},v=(_,K,X)=>{_.preventDefault(),u==="playing"&&a(ee=>ee.map((ie,me)=>ie.map((fe,he)=>me===K&&he===X&&!fe.revealed?{...fe,flagged:!fe.flagged}:fe)))},E=u==="won"?"😎":u==="lost"?"😵":"🙂",T=_=>({border:"2px solid",borderColor:_?"#808080 #fff #fff #808080":"#fff #808080 #808080 #fff"}),N=_=>l.jsx("span",{style:{background:"#000",color:"#f00",fontFamily:"monospace",fontSize:20,padding:"0 4px",minWidth:42,textAlign:"center",letterSpacing:1},children:String(Math.max(0,Math.min(999,_))).padStart(3,"0")});return l.jsxs(Et,{$minW:260,$minH:300,children:[l.jsxs(gn,{children:[l.jsxs(Be,{label:"Game",children:[l.jsxs(Ae,{onMouseDown:_=>{_.preventDefault(),j()},children:["New",l.jsx("span",{children:"F2"})]}),l.jsx(Ts,{}),Object.keys(Xl).map(_=>l.jsxs(Ae,{onMouseDown:K=>{K.preventDefault(),j(_)},children:[e===_?"● ":"○ ",Xl[_].label]},_))]}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Minesweeper — VortexOS"})})]}),l.jsxs(mn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{style:{background:"#c0c0c0",userSelect:"none"},children:[l.jsxs("div",{style:{...T(!0),display:"flex",justifyContent:"space-between",alignItems:"center",padding:6,marginBottom:8},children:[N(b),l.jsx("button",{onClick:()=>j(),style:{...T(!1),width:32,height:32,fontSize:18,cursor:"pointer",background:"#c0c0c0"},children:E}),N(m)]}),l.jsx("div",{style:{...T(!0),display:"inline-block",padding:3},children:i.map((_,K)=>l.jsx("div",{style:{display:"flex"},children:_.map((X,ee)=>l.jsx("div",{onClick:()=>C(K,ee),onContextMenu:ie=>v(ie,K,ee),style:{width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:13,cursor:u==="playing"?"pointer":"default",background:X.revealed&&X.mine?"#f00":"#c0c0c0",color:BA[X.adj]||"#000",...X.revealed?{border:"1px solid #808080"}:T(!1)},children:X.flagged?"🚩":X.revealed?X.mine?"💣":X.adj||"":""},ee))},K))})]}),l.jsx(uc,{game:`minesweeper:${e}`,order:"asc",format:_=>`${_}s`,title:`${o.label} Best`,width:130,refreshKey:w})]}),l.jsxs(Pt,{children:[l.jsx(ze,{$flex:1,children:o.label}),l.jsx(ze,{children:u==="won"?"You won! 😎":u==="lost"?"BOOM 💥":p?"Playing…":"Click to start"}),l.jsxs(ze,{children:[m,"s"]})]})]})},zd=["♠","♥","♦","♣"],_d=e=>e===1||e===2,UA=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],Fd=56,ss=78,VA=20;function gx(){const e=[];for(let a=0;a<4;a=a+1)for(let u=1;u<=13;u++)e.push({suit:a,rank:u,up:!1});for(let a=e.length-1;a>0;a--){const u=Math.floor(Math.random()*(a+1));[e[a],e[u]]=[e[u],e[a]]}const n=[[],[],[],[],[],[],[]];let o=0;for(let a=0;a<7;a++)for(let u=0;u<=a;u++){const d=e[o++];d.up=u===a,n[a].push(d)}return{stock:e.slice(o).map(a=>({...a,up:!1})),waste:[],found:[[],[],[],[]],tab:n}}const KA=()=>{const[e,n]=g.useState(gx),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,m]=g.useState(!1),[y,w]=g.useState(!1),[S,$]=g.useState(0),j=g.useRef(!1);g.useEffect(()=>{if(h)return;const R=setInterval(()=>p(D=>D+1),1e3);return()=>clearInterval(R)},[h]);const b=()=>{n(gx()),i(null),u(0),p(0),m(!1),j.current=!1},C=R=>{R.found.every(D=>D.length===13)&&(m(!0),j.current||(j.current=!0,ho(),cc("solitaire",d).then(()=>$(D=>D+1))))},v=R=>{u(D=>D+1),n(R),i(null),C(R)},E=R=>({stock:[...R.stock],waste:[...R.waste],found:R.found.map(D=>[...D]),tab:R.tab.map(D=>[...D])}),T=()=>{const R=E(e);if(R.stock.length===0)R.stock=R.waste.reverse().map(D=>({...D,up:!1})),R.waste=[];else{const D=y?3:1;for(let H=0;H<D&&R.stock.length;H++){const W=R.stock.pop();W.up=!0,R.waste.push(W)}}n(R),i(null)},N=(R,D)=>D.length===0?R.rank===1:D[D.length-1].suit===R.suit&&R.rank===D[D.length-1].rank+1,_=(R,D)=>D.length===0?R.rank===13:D[D.length-1].up&&_d(D[D.length-1].suit)!==_d(R.suit)&&D[D.length-1].rank===R.rank+1,K=(R,D)=>D.pile==="waste"?R.waste.slice(-1):D.pile==="found"?R.found[D.col].slice(-1):R.tab[D.col].slice(D.idx),X=(R,D)=>{if(D.pile==="waste")R.waste.pop();else if(D.pile==="found")R.found[D.col].pop();else{R.tab[D.col]=R.tab[D.col].slice(0,D.idx);const H=R.tab[D.col];H.length&&!H[H.length-1].up&&(H[H.length-1].up=!0)}},ee=(R,D)=>{if(!K(e,R).length)return!1;const W=E(e),B=K(W,R);return D.pile==="found"?B.length!==1||!N(B[0],W.found[D.col])?!1:(X(W,R),W.found[D.col].push(B[0]),v(W),!0):D.pile==="tab"&&_(B[0],W.tab[D.col])?(X(W,R),W.tab[D.col].push(...B),v(W),!0):!1},ie=R=>{const D=K(e,R);if(D.length!==1)return!1;for(let H=0;H<4;H++)if(N(D[0],e.found[H]))return ee(R,{pile:"found",col:H});return!1},me=(R,D,H,W)=>{if(h||R==="tab"&&!W.up)return;if(!o){i({pile:R,col:D,idx:H});return}if(o.pile===R&&o.col===D&&o.idx===H){i(null);return}ee(o,R==="found"?{pile:R,col:D}:{pile:"tab",col:D})||i({pile:R,col:D,idx:H})},fe=(R,D)=>{h||!o||ee(o,{pile:R,col:D})||i(null)},he=(R,D,H)=>(o==null?void 0:o.pile)===R&&o.col===D&&o.idx===H,le=({card:R,sel:D,onClick:H,onDouble:W})=>l.jsx("div",{onClick:H,onDoubleClick:W,style:{width:Fd,height:ss,boxSizing:"border-box",borderRadius:4,cursor:"pointer",border:D?"2px solid #ffd000":"1px solid #000",background:R.up?"#fff":"linear-gradient(135deg, #1064d0 25%, #0a3d80 25% 50%, #1064d0 50% 75%, #0a3d80 75%)",backgroundSize:R.up?void 0:"10px 10px",color:_d(R.suit)?"#c00000":"#000",position:"relative",userSelect:"none",flexShrink:0,boxShadow:D?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:R.up&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:13,fontWeight:"bold",lineHeight:1},children:[UA[R.rank],l.jsx("div",{children:zd[R.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26},children:zd[R.suit]})]})}),z=({children:R,onClick:D})=>l.jsx("div",{onClick:D,style:{width:Fd,height:ss,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",flexShrink:0},children:R});return l.jsxs(Et,{$minW:560,$minH:460,children:[l.jsxs(gn,{children:[l.jsxs(Be,{label:"Game",children:[l.jsxs(Ae,{onMouseDown:R=>{R.preventDefault(),b()},children:["New Game",l.jsx("span",{children:"F2"})]}),l.jsxs(Ae,{onMouseDown:R=>{R.preventDefault(),w(D=>!D)},children:[y?"● ":"○ ","Draw three"]})]}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Solitaire — VortexOS"})})]}),l.jsxs(mn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[l.jsx("div",{onClick:T,children:e.stock.length?l.jsx(le,{card:{suit:0,rank:0,up:!1}}):l.jsx(z,{children:l.jsx("div",{style:{color:"#fff",textAlign:"center",lineHeight:`${ss}px`},children:"↻"})})}),l.jsx("div",{children:e.waste.length?l.jsx(le,{card:e.waste[e.waste.length-1],sel:he("waste",0,e.waste.length-1),onClick:()=>me("waste",0,e.waste.length-1,e.waste[e.waste.length-1]),onDouble:()=>ie({pile:"waste",col:0,idx:e.waste.length-1})}):l.jsx(z,{})}),l.jsx("div",{style:{flex:1}}),e.found.map((R,D)=>l.jsx("div",{onClick:()=>R.length===0&&fe("found",D),children:R.length?l.jsx(le,{card:R[R.length-1],sel:he("found",D,R.length-1),onClick:()=>me("found",D,R.length-1,R[R.length-1])}):l.jsx(z,{onClick:()=>fe("found",D),children:l.jsx("div",{style:{color:"rgba(255,255,255,0.4)",textAlign:"center",lineHeight:`${ss}px`,fontSize:24},children:zd[D]})})},D))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map((R,D)=>l.jsxs("div",{style:{position:"relative",width:Fd,minHeight:ss},onClick:()=>R.length===0&&fe("tab",D),children:[R.length===0&&l.jsx(z,{onClick:()=>fe("tab",D)}),R.map((H,W)=>l.jsx("div",{style:{position:"absolute",top:W*VA,left:0},children:l.jsx(le,{card:H,sel:he("tab",D,W),onClick:()=>me("tab",D,W,H),onDouble:()=>H.up&&ie({pile:"tab",col:D,idx:W})})},W))]},D))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 You won in ",d,"s and ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:b,children:"Play again"})]})]}),l.jsx(uc,{game:"solitaire",order:"asc",format:R=>`${Math.floor(R/60)}:${String(R%60).padStart(2,"0")}`,title:"Best Times",width:150,refreshKey:S})]}),l.jsxs(Pt,{children:[l.jsxs(ze,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(ze,{children:["Moves: ",a]}),l.jsx(ze,{children:h?"You won! 🎉":`Stock: ${e.stock.length}`})]})]})},Ko=20,Xt=16,Vo=Ko*Xt,QA=110,Bd=(e,n)=>e.x===n.x&&e.y===n.y,qA=()=>{const e=g.useRef(null),n=g.useRef(null),o=g.useRef([]),i=g.useRef({x:1,y:0}),a=g.useRef({x:1,y:0}),u=g.useRef({x:0,y:0}),[d,p]=g.useState(0),[h,m]=g.useState("ready"),[y,w]=g.useState(0),S=g.useRef(h);S.current=h;const $=()=>{let v;do v={x:Math.floor(Math.random()*Ko),y:Math.floor(Math.random()*Ko)};while(o.current.some(E=>Bd(E,v)));u.current=v},j=()=>{var v;o.current=[{x:8,y:10},{x:7,y:10},{x:6,y:10}],i.current={x:1,y:0},a.current={x:1,y:0},$(),p(0),m("playing"),(v=n.current)==null||v.focus()},b=()=>{var E;const v=(E=e.current)==null?void 0:E.getContext("2d");if(v){v.fillStyle="#0a1f0a",v.fillRect(0,0,Vo,Vo),v.strokeStyle="#0f2f0f";for(let T=0;T<=Ko;T++)v.beginPath(),v.moveTo(T*Xt,0),v.lineTo(T*Xt,Vo),v.stroke(),v.beginPath(),v.moveTo(0,T*Xt),v.lineTo(Vo,T*Xt),v.stroke();v.fillStyle="#ff3b3b",v.fillRect(u.current.x*Xt+2,u.current.y*Xt+2,Xt-4,Xt-4),o.current.forEach((T,N)=>{v.fillStyle=N===0?"#9cff57":"#3ec70b",v.fillRect(T.x*Xt+1,T.y*Xt+1,Xt-2,Xt-2)})}};g.useEffect(()=>{b()},[]),g.useEffect(()=>{if(h!=="playing")return;const v=setInterval(()=>{const E=a.current;i.current=E;const T=o.current[0],N={x:T.x+E.x,y:T.y+E.y};if(N.x<0||N.y<0||N.x>=Ko||N.y>=Ko||o.current.some(_=>Bd(_,N))){m("over"),ho(),p(_=>(cc("snake",_).then(()=>w(K=>K+1)),_));return}o.current=[N,...o.current],Bd(N,u.current)?(p(_=>_+1),Dp(),$()):o.current.pop(),b()},QA);return()=>clearInterval(v)},[h]);const C=v=>{const E=v.key,T=(N,_)=>{i.current.x===-N&&i.current.y===-_||(a.current={x:N,y:_})};E==="ArrowUp"||E==="w"?(v.preventDefault(),T(0,-1)):E==="ArrowDown"||E==="s"?(v.preventDefault(),T(0,1)):E==="ArrowLeft"||E==="a"?(v.preventDefault(),T(-1,0)):E==="ArrowRight"||E==="d"?(v.preventDefault(),T(1,0)):(E===" "||E==="Enter")&&(v.preventDefault(),S.current!=="playing"&&j())};return l.jsxs(Et,{$minW:360,$minH:300,children:[l.jsxs(gn,{children:[l.jsx(Be,{label:"Game",children:l.jsxs(Ae,{onMouseDown:v=>{v.preventDefault(),j()},children:["New Game",l.jsx("span",{children:"Space"})]})}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"Snake — arrows or WASD to move"})})]}),l.jsxs(mn,{style:{padding:10,gap:12,background:"#c0c0c0",overflow:"auto",alignItems:"flex-start"},children:[l.jsxs("div",{ref:n,tabIndex:0,onKeyDown:C,style:{outline:"none",position:"relative",border:"2px solid",borderColor:"#808080 #fff #fff #808080"},children:[l.jsx("canvas",{ref:e,width:Vo,height:Vo,style:{display:"block"}}),h!=="playing"&&l.jsxs("div",{onClick:j,style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,background:"rgba(0,0,0,0.6)",color:"#fff",cursor:"pointer",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:h==="over"?`Game Over — ${d}`:"🐍 Snake"}),l.jsx("div",{style:{fontSize:12},children:"Click or press Space to play"}),l.jsx("div",{style:{fontSize:11,opacity:.8},children:"Arrow keys / WASD to steer"})]})]}),l.jsx(uc,{game:"snake",order:"desc",format:v=>String(v),title:"Top Scores",width:130,refreshKey:y})]}),l.jsxs(Pt,{children:[l.jsxs(ze,{$flex:1,children:["Score: ",d]}),l.jsx(ze,{children:h==="over"?"Game Over":h==="playing"?"Go!":"Ready"}),l.jsxs(ze,{children:["Length: ",Math.max(0,o.current.length)]})]})]})},Wd=["♠","♥","♦","♣"],GA=["","A","2","3","4","5","6","7","8","9","10","J","Q","K"],ms=e=>e===1||e===2,Hd=52,Ud=72,YA=18;function xx(){const e=[];for(let o=0;o<4;o=o+1)for(let i=1;i<=13;i++)e.push({suit:o,rank:i});for(let o=e.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[e[o],e[i]]=[e[i],e[o]]}const n=[[],[],[],[],[],[],[],[]];return e.forEach((o,i)=>n[i%8].push(o)),{free:[null,null,null,null],found:[[],[],[],[]],tab:n}}const Vd=e=>e.every((n,o)=>o===0||ms(e[o-1].suit)!==ms(n.suit)&&e[o-1].rank===n.rank+1),XA=()=>{const[e,n]=g.useState(xx),[o,i]=g.useState(null),[a,u]=g.useState(0),[d,p]=g.useState(0),[h,m]=g.useState(!1),[y,w]=g.useState(0),S=g.useRef(!1);g.useEffect(()=>{if(h)return;const z=setInterval(()=>p(R=>R+1),1e3);return()=>clearInterval(z)},[h]);const $=()=>{n(xx()),i(null),u(0),p(0),m(!1),S.current=!1},j=z=>({free:[...z.free],found:z.found.map(R=>[...R]),tab:z.tab.map(R=>[...R])}),b=z=>{z.found.every(R=>R.length===13)&&(m(!0),S.current||(S.current=!0,ho(),cc("freecell",d).then(()=>w(R=>R+1))))},C=z=>{u(R=>R+1),n(z),i(null),b(z)},v=(z,R)=>R.length===0?z.rank===1:R[R.length-1].suit===z.suit&&z.rank===R[R.length-1].rank+1,E=(z,R)=>R.length===0?!0:ms(R[R.length-1].suit)!==ms(z.suit)&&R[R.length-1].rank===z.rank+1,T=z=>{const R=e.free.filter(H=>H===null).length,D=e.tab.filter(H=>H.length===0).length-(z?1:0);return(R+1)*Math.pow(2,Math.max(0,D))},N=(z,R)=>{if(R.pile==="free"){const D=z.free[R.col];return D?[D]:[]}return R.pile==="found"?z.found[R.col].slice(-1):z.tab[R.col].slice(R.idx)},_=(z,R)=>{R.pile==="free"?z.free[R.col]=null:R.pile==="found"?z.found[R.col].pop():z.tab[R.col]=z.tab[R.col].slice(0,R.idx)},K=(z,R)=>{if(!N(e,z).length)return!1;const H=j(e),W=N(H,z);if(R.pile==="free")return W.length!==1||H.free[R.col]!==null?!1:(_(H,z),H.free[R.col]=W[0],C(H),!0);if(R.pile==="found")return W.length!==1||!v(W[0],H.found[R.col])?!1:(_(H,z),H.found[R.col].push(W[0]),C(H),!0);if(!Vd(W))return!1;const B=H.tab[R.col].length===0;return!E(W[0],H.tab[R.col])||W.length>T(B)?!1:(_(H,z),H.tab[R.col].push(...W),C(H),!0)},X=z=>{const R=N(e,z);if(R.length!==1)return!1;for(let D=0;D<4;D++)if(v(R[0],e.found[D]))return K(z,{pile:"found",col:D});return!1},ee=(z,R)=>{if(!h){if(!o){Vd(e.tab[z].slice(R))&&i({pile:"tab",col:z,idx:R});return}if(o.pile==="tab"&&o.col===z&&o.idx===R){i(null);return}K(o,{pile:"tab",col:z})||(Vd(e.tab[z].slice(R))?i({pile:"tab",col:z,idx:R}):i(null))}},ie=z=>{h||o&&K(o,{pile:"free",col:z})||(e.free[z]?i(fe("free",z,0)?null:{pile:"free",col:z,idx:0}):i(null))},me=z=>{h||!o||K(o,{pile:"found",col:z})||i(null)},fe=(z,R,D)=>(o==null?void 0:o.pile)===z&&o.col===R&&o.idx===D,he=({card:z,selected:R,onClick:D,onDouble:H})=>l.jsxs("div",{onClick:D,onDoubleClick:H,style:{width:Hd,height:Ud,boxSizing:"border-box",borderRadius:4,cursor:"pointer",background:"#fff",border:R?"2px solid #ffd000":"1px solid #000",color:ms(z.suit)?"#c00000":"#000",position:"relative",userSelect:"none",boxShadow:R?"0 0 6px #ffd000":"1px 1px 1px rgba(0,0,0,0.3)"},children:[l.jsxs("div",{style:{position:"absolute",top:2,left:4,fontSize:12,fontWeight:"bold",lineHeight:1},children:[GA[z.rank],l.jsx("div",{children:Wd[z.suit]})]}),l.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24},children:Wd[z.suit]})]}),le=({label:z,onClick:R})=>l.jsx("div",{onClick:R,style:{width:Hd,height:Ud,borderRadius:4,border:"1px dashed rgba(255,255,255,0.5)",background:"rgba(255,255,255,0.06)",color:"rgba(255,255,255,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:z});return l.jsxs(Et,{$minW:560,$minH:480,children:[l.jsxs(gn,{children:[l.jsx(Be,{label:"Game",children:l.jsxs(Ae,{onMouseDown:z=>{z.preventDefault(),$()},children:["New Game",l.jsx("span",{children:"F2"})]})}),l.jsx(Be,{label:"Help",children:l.jsx(Ae,{$disabled:!0,children:"FreeCell — VortexOS"})})]}),l.jsxs(mn,{style:{background:"#1f7a3d",padding:10,gap:14,overflow:"auto"},children:[l.jsxs("div",{style:{flex:1,minWidth:0},children:[l.jsxs("div",{style:{display:"flex",gap:8,marginBottom:16},children:[e.free.map((z,R)=>l.jsx("div",{onClick:()=>ie(R),children:z?l.jsx(he,{card:z,selected:fe("free",R,0),onClick:()=>ie(R),onDouble:()=>X({pile:"free",col:R,idx:0})}):l.jsx(le,{})},R)),l.jsx("div",{style:{flex:1}}),e.found.map((z,R)=>l.jsx("div",{onClick:()=>me(R),children:z.length?l.jsx(he,{card:z[z.length-1]}):l.jsx(le,{label:Wd[R],onClick:()=>me(R)})},R))]}),l.jsx("div",{style:{display:"flex",gap:8},children:e.tab.map((z,R)=>l.jsxs("div",{style:{position:"relative",width:Hd,minHeight:Ud},onClick:()=>z.length===0&&ee(R,0),children:[z.length===0&&l.jsx(le,{onClick:()=>ee(R,0)}),z.map((D,H)=>l.jsx("div",{style:{position:"absolute",top:H*YA,left:0},children:l.jsx(he,{card:D,selected:fe("tab",R,H),onClick:()=>ee(R,H),onDouble:()=>X({pile:"tab",col:R,idx:H})})},H))]},R))}),h&&l.jsxs("div",{style:{marginTop:16,padding:12,background:"#ffffcc",border:"2px solid #000080",textAlign:"center",fontWeight:"bold"},children:["🎉 Solved in ",d,"s, ",a," moves! ",l.jsx("span",{style:{cursor:"pointer",color:"#000080",textDecoration:"underline"},onClick:$,children:"Play again"})]})]}),l.jsx(uc,{game:"freecell",order:"asc",format:z=>`${Math.floor(z/60)}:${String(z%60).padStart(2,"0")}`,title:"Best Times",width:140,refreshKey:y})]}),l.jsxs(Pt,{children:[l.jsxs(ze,{$flex:1,children:["Time ",Math.floor(d/60),":",String(d%60).padStart(2,"0")]}),l.jsxs(ze,{children:["Moves: ",a]}),l.jsx(ze,{children:h?"Solved! 🎉":"FreeCell"})]})]})},JA=()=>{const[e,n]=g.useState(new Date),{firstDayMonday:o}=rn();g.useEffect(()=>{const E=setInterval(()=>n(new Date),1e3);return()=>clearInterval(E)},[]);const i=e.getSeconds(),a=e.getMinutes(),u=e.getHours()%12,d=i*6,p=a*6+i*.1,h=u*30+a*.5,m=(E,T,N,_)=>{const K=(E-90)*Math.PI/180;return l.jsx("line",{x1:"50",y1:"50",x2:50+T*Math.cos(K),y2:50+T*Math.sin(K),stroke:_,strokeWidth:N,strokeLinecap:"round"})},y=e.getFullYear(),w=e.getMonth(),S=new Date(y,w,1).getDay(),$=o?(S+6)%7:S,j=new Date(y,w+1,0).getDate(),b=e.toLocaleDateString(void 0,{month:"long",year:"numeric"}),C=o?["M","T","W","T","F","S","S"]:["S","M","T","W","T","F","S"],v=[...Array($).fill(null),...Array.from({length:j},(E,T)=>T+1)];return l.jsxs("div",{style:{padding:12,display:"flex",gap:16,alignItems:"flex-start"},children:[l.jsxs("div",{style:{textAlign:"center"},children:[l.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 100 100",children:[l.jsx("circle",{cx:"50",cy:"50",r:"47",fill:"#fff",stroke:"#000",strokeWidth:"2"}),Array.from({length:12}).map((E,T)=>{const N=(T*30-90)*Math.PI/180;return l.jsx("line",{x1:50+42*Math.cos(N),y1:50+42*Math.sin(N),x2:50+46*Math.cos(N),y2:50+46*Math.sin(N),stroke:"#000",strokeWidth:"2"},T)}),m(h,24,3,"#000"),m(p,34,2,"#000"),m(d,38,1,"#c0392b"),l.jsx("circle",{cx:"50",cy:"50",r:"2",fill:"#000"})]}),l.jsx(wt,{variant:"well",style:{marginTop:8,padding:4,fontFamily:"monospace",fontSize:16},children:e.toLocaleTimeString()})]}),l.jsxs("div",{children:[l.jsx("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:4},children:b}),l.jsxs("table",{style:{borderCollapse:"collapse",fontSize:12},children:[l.jsx("thead",{children:l.jsx("tr",{children:C.map((E,T)=>l.jsx("th",{style:{width:22,padding:2,color:"#000080"},children:E},T))})}),l.jsx("tbody",{children:Array.from({length:Math.ceil(v.length/7)}).map((E,T)=>l.jsx("tr",{children:v.slice(T*7,T*7+7).map((N,_)=>l.jsx("td",{style:{width:22,height:20,textAlign:"center",background:N===e.getDate()?"#000080":"transparent",color:N===e.getDate()?"#fff":"#000"},children:N??""},_))},T))})]})]})]})},ZA=["#000000","#808080","#c0c0c0","#ffffff","#ff0000","#ffa500","#ffff00","#008000","#00ff00","#0000ff","#00ffff","#800080","#ff00ff","#8b4513"],eR=[2,4,8,14],Ht=460,Yt=300,tR=[1,2,4],nR=[{id:"pencil",label:"✎ Pencil"},{id:"line",label:"╱ Line"},{id:"rect",label:"▭ Rect"},{id:"ellipse",label:"◯ Ellipse"},{id:"fill",label:"🪣 Fill"},{id:"eraser",label:"▱ Eraser"}],rR=()=>{const e=nn(),{alert:n}=Rs(),o=g.useRef(null),i=g.useRef(!1),a=g.useRef(null),u=g.useRef(null),d=g.useRef(null),p=g.useRef([]),h=g.useRef([]),[m,y]=g.useState("pencil"),[w,S]=g.useState("#000000"),[$,j]=g.useState(4),[b,C]=g.useState(1),[,v]=g.useState(0),E=()=>o.current.getContext("2d");g.useEffect(()=>{const z=E();z.fillStyle="#fff",z.fillRect(0,0,Ht,Yt)},[]);const T=z=>{const R=o.current.getBoundingClientRect();return{x:(z.clientX-R.left)/b,y:(z.clientY-R.top)/b}},N=()=>{p.current.push(E().getImageData(0,0,Ht,Yt)),p.current.length>25&&p.current.shift(),h.current=[],v(z=>z+1)},_=()=>{p.current.length&&(h.current.push(E().getImageData(0,0,Ht,Yt)),E().putImageData(p.current.pop(),0,0),v(z=>z+1))},K=()=>{h.current.length&&(p.current.push(E().getImageData(0,0,Ht,Yt)),E().putImageData(h.current.pop(),0,0),v(z=>z+1))},X=()=>m==="eraser"?"#fff":w,ee=z=>{const R=T(z);if(N(),m==="fill"){fe(Math.round(R.x),Math.round(R.y),w);return}i.current=!0,a.current=R,u.current=R,(m==="line"||m==="rect"||m==="ellipse")&&(d.current=E().getImageData(0,0,Ht,Yt))},ie=z=>{if(!i.current)return;const R=E(),D=T(z);if(R.strokeStyle=X(),R.fillStyle=X(),R.lineWidth=$,R.lineCap="round",m==="pencil"||m==="eraser")R.beginPath(),R.moveTo(u.current.x,u.current.y),R.lineTo(D.x,D.y),R.stroke(),u.current=D;else if(d.current){R.putImageData(d.current,0,0);const H=a.current;R.beginPath(),m==="line"?(R.moveTo(H.x,H.y),R.lineTo(D.x,D.y),R.stroke()):m==="rect"?R.strokeRect(Math.min(H.x,D.x),Math.min(H.y,D.y),Math.abs(D.x-H.x),Math.abs(D.y-H.y)):m==="ellipse"&&(R.ellipse((H.x+D.x)/2,(H.y+D.y)/2,Math.abs(D.x-H.x)/2,Math.abs(D.y-H.y)/2,0,0,Math.PI*2),R.stroke())}},me=()=>{i.current=!1,a.current=null,u.current=null,d.current=null},fe=(z,R,D)=>{if(z<0||R<0||z>=Ht||R>=Yt)return;const H=E(),W=H.getImageData(0,0,Ht,Yt),B=W.data,P=(ne,ce)=>(ce*Ht+ne)*4,O=P(z,R),J=B[O],ae=B[O+1],ue=B[O+2],ge=B[O+3],pe=parseInt(D.slice(1,3),16),xe=parseInt(D.slice(3,5),16),q=parseInt(D.slice(5,7),16);if(J===pe&&ae===xe&&ue===q&&ge===255)return;const A=ne=>B[ne]===J&&B[ne+1]===ae&&B[ne+2]===ue&&B[ne+3]===ge,V=ne=>{B[ne]=pe,B[ne+1]=xe,B[ne+2]=q,B[ne+3]=255},te=[[z,R]];for(;te.length;){const[ne,ce]=te.pop(),je=P(ne,ce);A(je)&&(V(je),ne>0&&te.push([ne-1,ce]),ne<Ht-1&&te.push([ne+1,ce]),ce>0&&te.push([ne,ce-1]),ce<Yt-1&&te.push([ne,ce+1]))}H.putImageData(W,0,0)},he=()=>{N();const z=E();z.fillStyle="#fff",z.fillRect(0,0,Ht,Yt)},le=async()=>{const z=window.prompt("Save as:","painting.png");if(!z)return;const R=o.current.toDataURL("image/png"),D=Uint8Array.from(atob(R.split(",")[1]),H=>H.charCodeAt(0));try{await e.writeFile(`/home/user/${z}`,D),await n({title:"Paint",message:`Saved to /home/user/${z}`,type:"info"})}catch(H){await n({title:"Paint",message:`Save failed: ${H.code??H.message}`,type:"error"})}};return l.jsxs("div",{style:{padding:6},children:[l.jsxs(di,{children:[l.jsx(st,{onClick:_,disabled:!p.current.length,children:"Undo"}),l.jsx(st,{onClick:K,disabled:!h.current.length,children:"Redo"}),l.jsx(En,{}),l.jsx(st,{onClick:he,children:"Clear"}),l.jsx(st,{onClick:le,children:"Save"}),l.jsx(En,{}),l.jsx("span",{style:{fontSize:12,padding:"0 4px"},children:"Zoom:"}),tR.map(z=>l.jsxs(st,{$active:b===z,onClick:()=>C(z),children:[z,"x"]},z))]}),l.jsxs("div",{style:{display:"flex",gap:6,marginTop:6},children:[l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,width:92},children:[nR.map(z=>l.jsx(Ve,{size:"sm",active:m===z.id,onClick:()=>y(z.id),style:{justifyContent:"flex-start"},children:z.label},z.id)),l.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:92,marginTop:6},children:ZA.map(z=>l.jsx("div",{onClick:()=>{S(z),m==="eraser"&&y("pencil")},style:{width:18,height:18,background:z,border:w===z?"2px solid #000080":"1px solid #808080",cursor:"pointer",boxSizing:"border-box"}},z))}),l.jsx("div",{style:{display:"flex",gap:3,marginTop:6,flexWrap:"wrap"},children:eR.map(z=>l.jsx(Ve,{size:"sm",active:$===z,onClick:()=>j(z),style:{width:28},children:z},z))})]}),l.jsx(wt,{variant:"well",style:{padding:2,overflow:"auto",maxWidth:Ht+8,maxHeight:Yt+8},children:l.jsx("div",{style:{width:Ht*b,height:Yt*b},children:l.jsx("canvas",{ref:o,width:Ht,height:Yt,onMouseDown:ee,onMouseMove:ie,onMouseUp:me,onMouseLeave:me,style:{display:"block",cursor:"crosshair",background:"#fff",width:Ht*b,height:Yt*b,imageRendering:"pixelated"}})})})]})]})},bv="vortex.recent.docs",oR=10;function kv(){try{const e=JSON.parse(localStorage.getItem(bv)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function iR(e){const n=e.trim();if(!n)return;const o=[n,...kv().filter(i=>i!==n)].slice(0,oR);localStorage.setItem(bv,JSON.stringify(o))}const sR=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,lR=/\.(mp3|wav|ogg|m4a|flac)$/i,aR=/\.(html?|rtf|doc)$/i;async function Sv(e,n){let o;try{o=(await e.stat(n)).type}catch{return!1}return o==="dir"?(e.spawn("explorer",{argv:[n]}),!0):(sR.test(n)?e.spawn("imageviewer",{argv:[n]}):lR.test(n)?e.spawn("mediaplayer",{argv:[n]}):aR.test(n)?e.spawn("wordpad",{argv:[n]}):e.spawn("notes",{argv:[n]}),iR(n),!0)}const yx=200,cR=new Set(["/proc","/dev"]),uR=512*1024,dR=/\.(png|jpe?g|gif|bmp|webp|ico|mp3|wav|ogg|m4a|flac|zip|gz|pdf)$/i,Kd=864e5,wx=[{label:"any time",ms:0},{label:"today",ms:Kd},{label:"the last 7 days",ms:7*Kd},{label:"the last 30 days",ms:30*Kd}];async function jv(e,n,o,i,a,u){if(a.length>=yx||cR.has(n)||!u())return;let d;try{d=await e.readdir(n)}catch{return}for(const p of d){if(a.length>=yx||!u())return;const h=Ue(n,p);let m="file",y=0,w=0;try{const $=await e.stat(h);m=$.type,y=$.size,w=$.mtime}catch{continue}let S=!0;if(o.name&&!p.toLowerCase().includes(o.name)&&(S=!1),S&&o.sinceMs&&w<i-o.sinceMs&&(S=!1),S&&o.content)if(m!=="file"||y>uR||dR.test(p))S=!1;else try{(await e.readTextFile(h)).toLowerCase().includes(o.content)||(S=!1)}catch{S=!1}S&&a.push({name:p,path:h,type:m,mtime:w}),m==="dir"&&await jv(e,h,o,i,a,u)}}const fR=()=>{const e=nn(),[n,o]=g.useState("/home/user"),[i,a]=g.useState(""),[u,d]=g.useState(""),[p,h]=g.useState(0),[m,y]=g.useState([]),[w,S]=g.useState(!1),[$,j]=g.useState(!1),b=g.useRef(0),C=async()=>{const E=++b.current,T={name:i.trim().toLowerCase(),content:u.trim().toLowerCase(),sinceMs:wx[p].ms};if(!T.name&&!T.content&&!T.sinceMs){y([]),j(!1);return}S(!0);const N=[];await jv(e,n||"/",T,Date.now(),N,()=>b.current===E),b.current===E&&(y(N),S(!1),j(!0))};g.useEffect(()=>{const E=setTimeout(C,300);return()=>clearTimeout(E)},[i,u,p,n]);const v=E=>{E.type==="dir"?e.spawn("explorer",{argv:[E.path]}):Sv(e,E.path)};return l.jsxs(Et,{$minW:480,$minH:380,children:[l.jsxs(mn,{style:{flexDirection:"column",padding:8},children:[l.jsxs(Oy,{label:"Find: Files or Folders",children:[l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Named:"}),l.jsx(ar,{value:i,onChange:E=>a(E.target.value),placeholder:"part of a name",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Containing text:"}),l.jsx(ar,{value:u,onChange:E=>d(E.target.value),placeholder:"words inside the file",style:{flex:1},fullWidth:!0})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{width:96},children:"Modified:"}),l.jsx("select",{value:p,onChange:E=>h(Number(E.target.value)),style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:2},children:wx.map((E,T)=>l.jsx("option",{value:T,children:E.label},E.label))})]}),l.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[l.jsx("span",{style:{width:96},children:"Look in:"}),l.jsx(ar,{value:n,onChange:E=>o(E.target.value),style:{flex:1},fullWidth:!0}),l.jsx(Ve,{onClick:C,disabled:w,children:w?"…":"Find Now"})]})]}),l.jsxs(wt,{variant:"well",style:{flex:1,minHeight:120,marginTop:8,overflow:"auto",background:"#fff",padding:4},children:[m.map(E=>l.jsxs("div",{onDoubleClick:()=>v(E),title:E.path,style:{display:"flex",justifyContent:"space-between",gap:8,padding:"2px 4px",cursor:"pointer"},children:[l.jsxs("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[E.type==="dir"?"📁":"📄"," ",E.name]}),l.jsxs("span",{style:{color:"#666",fontSize:11,whiteSpace:"nowrap"},children:[E.mtime?new Date(E.mtime).toLocaleDateString():""," · ",E.path]})]},E.path)),$&&m.length===0&&l.jsx("div",{style:{padding:8,color:"#666"},children:"No items found."}),!$&&l.jsx("div",{style:{padding:8,color:"#666"},children:"Enter a name, text to find inside files, or a date — results appear as you type."})]})]}),l.jsx(Pt,{children:l.jsx(ze,{$flex:1,children:w?"Searching…":$?`${m.length} item(s) found`:"Ready"})})]})},Cv=e=>`vortex.welcome.${e||"user"}`;function Ev(e){return localStorage.getItem(Cv(e))==="1"}function pR(e){localStorage.setItem(Cv(e),"1")}const $v="vortex.tips.enabled",hR=new Set,mR=()=>hR.forEach(e=>e());function wa(){return localStorage.getItem($v)!=="0"}function gR(e){localStorage.setItem($v,e?"1":"0"),mR()}const Go=["Press Ctrl+Space anywhere to open the Command Palette and launch any app or action instantly.","VortexOS runs on a real microkernel — open the Terminal and type `ps` to watch live processes.","Drag a window to a screen edge to snap it to that half; drag to a corner to quarter-tile it.","Your files live in a real virtual filesystem. Try `ls /` in the Terminal, or browse it in Explorer.","Share files with other users in Network Neighborhood, and send messages with WinPopup.","Right-click the desktop to create folders and documents or rearrange your icons.","Open Control Panel ▸ Display to switch between the Serious Sam vaporwave look and classic Windows.","Beat your own high scores in Solitaire, Minesweeper, FreeCell and Snake — they sync to your account.","Press Alt+Tab to flip between open windows, just like the real thing.","The Recycle Bin really works — deleted files go there, and you can restore them.","Press Ctrl+Alt+Del in a panic to reboot — VortexOS has a real BSOD and Task Manager too."];function xR(e){return Go[(e%Go.length+Go.length)%Go.length]}const Kf=new Set,Qf=new Set;function yR(){Kf.forEach(e=>e())}function wR(e){return Kf.add(e),()=>Kf.delete(e)}function Tv(){Qf.forEach(e=>e())}function vR(e){return Qf.add(e),()=>Qf.delete(e)}const Av="vortex.assistant.enabled",qf=new Set,bR=()=>qf.forEach(e=>e());function Rv(){return localStorage.getItem(Av)!=="0"}function Dv(e){localStorage.setItem(Av,e?"1":"0"),bR()}function kR(){return g.useSyncExternalStore(e=>(qf.add(e),()=>qf.delete(e)),Rv)}const Gf=new Set;function SR(e){Rv()&&Gf.forEach(n=>n(e))}function jR(e){return Gf.add(e),()=>Gf.delete(e)}const CR=["Hi! I'm Vortex — your guide around here. Click me for a tip anytime.","Hey there. New to VortexOS? Click me and I'll show you the ropes.","Welcome back! Click me whenever you want a hand."],ER=["Yikes — that app hit a snag. Dr. Watson logged the details, and the rest of VortexOS is just fine.","That didn't go as planned. No data lost — want to peek at what happened?","Whoops. One app stumbled, but the kernel kept right on running."],$R={terminal:["A real shell awaits — try `ps` to see live processes, or `ls /`.","Pipes and redirects work here: `cat notes.txt | grep todo`."],explorer:["This is a real filesystem. Right-click for New Folder, F2 to rename."],notes:["Everything you type saves to an actual file on disk."],wordpad:["Rich text here — and it saves as a real .html file."],paint:["The fill bucket floods bounded areas. Don't forget Undo!"],calculator:["Psst — try Scientific or Programmer mode in the View menu."],minesweeper:["Your first click is always safe. Now go flag those mines!"],solitaire:["Aces up to the foundations. Double-click to auto-move a card."],freecell:["Use the four free cells wisely — almost every deal is winnable."],snake:["Arrow keys or WASD. Whatever you do, don't bite your tail."],browser:["I route pages through a proxy so they actually load — no frame blocking."],network:["See who else is online and browse their shared files."],messenger:["Net Send lives! Ping another signed-in user a message."],control_panel:["Make it yours — wallpaper, themes, screensavers, and Serious Sam Style."],backlogger:["Track your game backlog, complete with real console art."],task_manager:["Honest CPU and memory graphs in here — no faking it."],find:["Search by name, by contents, or by the date a file changed."],mediaplayer:["Folder playlists and a live retrowave visualizer. Press play."],imageviewer:["Prev/Next across the folder, plus zoom, rotate and a slideshow."],clock:["Hand-drawn analog face and a working calendar."],nightwave:["Retrowave radio, streaming live. Turn it up."],vaporwave:["Retrowave radio, streaming live. Turn it up."]};function dc(e){return e[Math.floor(Math.random()*e.length)]}function TR(e){const n=$R[e];return n&&n.length?dc(n):null}function vx(){return dc(Go)}function AR(){return dc(CR)}function RR(){return dc(ER)}const DR=()=>l.jsxs(Et,{$minW:460,$minH:380,children:[l.jsxs(gn,{children:[l.jsx(Be,{label:"File",children:l.jsx(Ae,{$disabled:!0,children:"Print Topic"})}),l.jsxs(Be,{label:"Help",children:[l.jsx(Ae,{onClick:yR,children:"Welcome Tour…"}),l.jsx(Ae,{onClick:Tv,children:"Tip of the Day…"}),l.jsx(Ae,{onClick:()=>Dv(!0),children:"Show Vortex Assistant"})]})]}),l.jsx(mn,{style:{padding:3},children:l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#fff",padding:16,lineHeight:1.6,border:"2px solid",borderColor:"#808080 #ffffff #ffffff #808080"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:12},children:[l.jsx(ri,{size:48,vapor:!0,spinning:!1}),l.jsxs("div",{children:[l.jsx("div",{style:{fontSize:20,fontWeight:"bold"},children:"VortexOS 2.0"}),l.jsx("div",{style:{fontSize:12,color:"#444"},children:"Experimental Edition — a creation by Serious Sam"})]})]}),l.jsx("p",{style:{fontWeight:"bold"},children:"About"}),l.jsx("p",{children:"VortexOS is a desktop operating system that runs in your browser, built on a real microkernel: an in-memory virtual filesystem persisted to OPFS, a process model with a syscall ABI, a command shell, a window manager, and multi-user networking. No emulator, no clone."}),l.jsx("p",{style:{fontWeight:"bold",marginTop:12},children:"Getting started"}),l.jsxs("ul",{style:{margin:"4px 0 0 18px"},children:[l.jsxs("li",{children:[l.jsx("b",{children:"Command Palette"})," — press ",l.jsx("code",{children:"Ctrl+Space"})," to fuzzy-launch any app or action."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Explorer"})," & ",l.jsx("b",{children:"Terminal"})," — browse a real filesystem, or type ",l.jsx("code",{children:"ls"}),", ",l.jsx("code",{children:"cat"}),", ",l.jsx("code",{children:"ps"}),", even ",l.jsx("code",{children:".sh"})," scripts."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"WordPad"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"})," — real apps that save real files."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Games"})," — Solitaire, FreeCell, Minesweeper and Snake, with per-user high scores."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Network Neighborhood"})," & ",l.jsx("b",{children:"WinPopup"})," — share files and chat with other users."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the Serious Sam Style toggle."]}),l.jsxs("li",{children:["Drag desktop icons anywhere; deleted files go to the ",l.jsx("b",{children:"Recycle Bin"}),"."]})]}),l.jsxs("p",{style:{marginTop:12},children:["New here? Open ",l.jsx("b",{children:"Help ▸ Welcome Tour"})," for the guided introduction, or ",l.jsx("b",{children:"Tip of the Day"})," for a quick hint."]}),l.jsx("p",{style:{marginTop:12,color:"#444",fontSize:12},children:"Registered to: Serious Sam"})]})}),l.jsx(Pt,{children:l.jsx(ze,{$flex:1,children:"VortexOS Help"})})]}),fc="http://localhost:8082";async function IR(){const{data:e}=await Ke.get(`${fc}/share/users`);return Array.isArray(e)?e:[]}async function PR(e){const{data:n}=await Ke.get(`${fc}/share/users/${e}/files`);return Array.isArray(n)?n:[]}async function NR(){const{data:e}=await Ke.get(`${fc}/files`);return Array.isArray(e)?e:[]}async function LR(e,n){await Ke.put(`${fc}/files/share`,null,{params:{path:e,shared:n}})}function MR(e){if(!e)return"";try{return decodeURIComponent(escape(atob(e)))}catch{try{return atob(e)}catch{return"(unable to display this file)"}}}const Qd={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},bx={cursor:"pointer",padding:"2px 6px",fontSize:13},OR=()=>{const{username:e}=Kn(),[n,o]=g.useState(0),[i,a]=g.useState(null),[u,d]=g.useState([]),p=g.useCallback(async()=>{try{a(null);const T=await NR();d(T.filter(N=>N.type!=="folder"))}catch{a("Could not reach the network. Is the backend running?")}},[]),h=async T=>{try{await LR(T.path,!T.shared),d(N=>N.map(_=>_.path===T.path?{..._,shared:!_.shared}:_))}catch{a("Could not update sharing.")}},[m,y]=g.useState([]),[w,S]=g.useState(null),[$,j]=g.useState([]),[b,C]=g.useState(null),v=g.useCallback(async()=>{try{a(null),y(await IR())}catch{a("Could not reach the network. Is the backend running?")}},[]),E=async T=>{S(T),C(null);try{j(await PR(T.id))}catch{j([])}};return g.useEffect(()=>{p(),v()},[p,v]),l.jsxs(Et,{$minW:460,$minH:320,style:{padding:4},children:[l.jsxs(Xa,{value:n,onChange:T=>o(T),children:[l.jsx(Nr,{value:0,children:"Network Neighborhood"}),l.jsx(Nr,{value:1,children:"My Shared Files"})]}),l.jsx(Ya,{style:{flex:1,minHeight:0},children:l.jsxs(Br,{style:{height:"100%"},children:[i&&l.jsx("p",{style:{color:"#800000",fontSize:12},children:i}),n===0&&l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsxs("div",{style:{...Qd,width:130},children:[m.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No one is sharing yet."}),m.map(T=>l.jsxs("div",{style:{...bx,background:(w==null?void 0:w.id)===T.id?"#000080":"transparent",color:(w==null?void 0:w.id)===T.id?"#fff":"#000"},onClick:()=>E(T),children:["🖥 ",T.username,T.username===e?" (you)":""]},T.id))]}),l.jsxs("div",{style:{...Qd,width:150},children:[!w&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Select a computer."}),w&&$.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"No shared files."}),$.map(T=>l.jsxs("div",{style:{...bx,background:(b==null?void 0:b.id)===T.id?"#000080":"transparent",color:(b==null?void 0:b.id)===T.id?"#fff":"#000"},onClick:()=>C(T),children:["📄 ",T.name]},T.id))]}),l.jsx(wt,{variant:"field",style:{flex:1,height:230,overflow:"auto",background:"white",padding:6},children:b?l.jsx("pre",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:12,fontFamily:"monospace"},children:MR(b.content)}):l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Open a shared file to view it (read-only)."})})]}),n===1&&l.jsxs("div",{children:[l.jsx("p",{style:{fontSize:12,marginTop:0},children:"Tick a file to share it with everyone on the network."}),l.jsxs("div",{style:Qd,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"You have no cloud files to share."}),u.map(T=>l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"1px 4px"},children:[l.jsx(ft,{checked:T.shared,onChange:()=>h(T)}),l.jsx("span",{style:{fontSize:13},children:T.path.replace("/mnt/cloud","")})]},T.id))]}),l.jsx(Ve,{onClick:p,style:{marginTop:8},children:"Refresh"})]})]})}),l.jsx(Pt,{children:l.jsx(ze,{$flex:1,children:i||"Network Neighborhood"})})]})};let pn=null,La=[];const Op=[];let Ma=!1;const Yf=new Set,gs=()=>Yf.forEach(e=>e());function zR(e){return`${"http://localhost:8082".replace(/^http/,"ws")}/ws?token=${encodeURIComponent(e)}`}function _R(){const e=ec();!e||pn||(Ma=!0,Iv(e))}function Iv(e){let n;try{n=new WebSocket(zR(e))}catch{return}pn=n,n.onmessage=o=>{let i;try{i=JSON.parse(o.data)}catch{return}i.type==="presence"?(La=i.users??[],gs()):i.type==="msg"&&i.from&&i.body&&(Op.push({from:i.from,body:i.body,ts:i.ts??Date.now()}),gs())},n.onclose=()=>{pn=null,La=[],gs(),Ma&&setTimeout(()=>{const o=ec();Ma&&o&&!pn&&Iv(o)},2e3)},n.onerror=()=>{try{n.close()}catch{}}}function FR(){Ma=!1,La=[];const e=pn;pn=null;try{e==null||e.close()}catch{}gs()}function BR(e,n){!pn||pn.readyState!==WebSocket.OPEN||!e||!n||(pn.send(JSON.stringify({type:"msg",to:e,body:n})),Op.push({from:"me",to:e,body:n,ts:Date.now(),mine:!0}),gs())}function Xf(){return La}function kx(){return(pn==null?void 0:pn.readyState)===WebSocket.OPEN}function Jf(){return Op}function zp(e){return Yf.add(e),()=>Yf.delete(e)}function WR(){const[,e]=g.useReducer(n=>n+1,0);return g.useEffect(()=>zp(e),[]),{online:Xf(),log:Jf()}}const HR={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},UR=()=>{const{username:e}=Kn(),{online:n,log:o}=WR(),[i,a]=g.useState(null),[u,d]=g.useState(""),p=n.filter(y=>y!==e),h=i?o.filter(y=>y.mine&&y.to===i||!y.mine&&y.from===i):[],m=()=>{!i||!u.trim()||(BR(i,u.trim()),d(""))};return l.jsxs(Et,{$minW:440,$minH:320,children:[l.jsxs("div",{style:{display:"flex",gap:8,flex:1,minHeight:0,padding:8},children:[l.jsx("div",{style:{...HR,width:130},children:p.map(y=>l.jsxs("div",{onClick:()=>a(y),style:{cursor:"pointer",padding:"2px 6px",fontSize:13,background:i===y?"#000080":"transparent",color:i===y?"#fff":"#000"},children:["🟢 ",y]},y))}),l.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0},children:[l.jsxs(wt,{variant:"field",style:{flex:1,background:"white",overflow:"auto",padding:6,marginBottom:6},children:[!i&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"Select someone to message."}),i&&h.length===0&&l.jsx("p",{style:{fontSize:12,color:"#555"},children:"No messages yet. Say hi!"}),h.map((y,w)=>l.jsxs("p",{style:{margin:"2px 0",fontSize:13},children:[l.jsxs("b",{children:[y.mine?"You":y.from,":"]})," ",y.body]},w))]}),l.jsxs("div",{style:{display:"flex",gap:6},children:[l.jsx(ar,{value:u,disabled:!i,placeholder:i?`Message ${i}…`:"Pick a recipient",onChange:y=>d(y.target.value),onKeyDown:y=>{y.key==="Enter"&&m()},style:{flex:1}}),l.jsx(Ve,{onClick:m,disabled:!i||!u.trim(),children:"Send"})]})]})]}),l.jsx(Pt,{children:l.jsx(ze,{$flex:1,children:p.length===0?"No one else is online.":`${p.length} user(s) online`})})]})},VR={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",bmp:"image/bmp",webp:"image/webp",svg:"image/svg+xml",ico:"image/x-icon"},KR=/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i,QR=e=>VR[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,qR=e=>e.slice(0,e.lastIndexOf("/"))||"/",GR=e=>e.slice(e.lastIndexOf("/")+1),YR=()=>{const e=nn(),[n,o]=g.useState([]),[i,a]=g.useState(0),[u,d]=g.useState(null),[p,h]=g.useState(null),[m,y]=g.useState(1),[w,S]=g.useState(0),[$,j]=g.useState(!0),[b,C]=g.useState(!1);g.useEffect(()=>{(async()=>{const ee=(await e.argv())[0];if(!ee){h("No image to display.");return}const ie=qR(ee);try{const fe=(await e.readdir(ie)).filter(le=>KR.test(le)).sort().map(le=>`${ie}/${le}`),he=Math.max(0,fe.indexOf(ee));o(fe.length?fe:[ee]),a(he)}catch{o([ee]),a(0)}})()},[e]),g.useEffect(()=>{const ee=n[i];if(!ee)return;let ie=null,me=!0;return h(null),y(1),S(0),j(!0),(async()=>{const fe=QR(ee);if(!fe){h("Unsupported image format.");return}try{const he=await e.readFile(ee);ie=URL.createObjectURL(new Blob([he],{type:fe})),me&&d(ie)}catch{me&&h("Could not open this file.")}})(),()=>{me=!1,ie&&URL.revokeObjectURL(ie)}},[n,i,e]);const v=()=>a(ee=>n.length?(ee+1)%n.length:0),E=()=>a(ee=>n.length?(ee-1+n.length)%n.length:0),T=g.useRef(v);T.current=v,g.useEffect(()=>{if(!b||n.length<2)return;const ee=setInterval(()=>T.current(),3e3);return()=>clearInterval(ee)},[b,n.length]);const N=()=>{j(!1),y(ee=>Math.min(8,ee*1.25))},_=()=>{j(!1),y(ee=>Math.max(.1,ee/1.25))},K=()=>{j(!1),y(1)},X=$?{maxWidth:"100%",maxHeight:"100%",transform:`rotate(${w}deg)`,imageRendering:"pixelated"}:{transform:`scale(${m}) rotate(${w}deg)`,imageRendering:"pixelated"};return l.jsxs(Et,{$minW:360,$minH:280,children:[l.jsxs(di,{children:[l.jsx(st,{onClick:E,disabled:n.length<2,children:"◀ Prev"}),l.jsx(st,{onClick:v,disabled:n.length<2,children:"Next ▶"}),l.jsx(En,{}),l.jsx(st,{onClick:N,children:"Zoom +"}),l.jsx(st,{onClick:_,children:"Zoom −"}),l.jsx(st,{$active:$,onClick:()=>{j(!0),y(1)},children:"Fit"}),l.jsx(st,{onClick:K,children:"1:1"}),l.jsx(En,{}),l.jsx(st,{onClick:()=>S(ee=>ee-90),children:"↺"}),l.jsx(st,{onClick:()=>S(ee=>ee+90),children:"↻"}),l.jsx(En,{}),l.jsx(st,{$active:b,onClick:()=>C(ee=>!ee),disabled:n.length<2,children:b?"⏸ Stop":"▶ Slideshow"})]}),l.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",display:"flex",alignItems:"center",justifyContent:"center",background:"#2b2b2b"},children:[p&&l.jsx("p",{style:{color:"#fff"},children:p}),!p&&u&&l.jsx("img",{src:u,alt:n[i],style:X}),!p&&!u&&l.jsx("p",{style:{color:"#fff"},children:"Loading…"})]}),l.jsxs(Pt,{children:[l.jsx(ze,{$flex:1,children:n[i]?GR(n[i]):""}),l.jsx(ze,{children:n.length>1?`${i+1} / ${n.length}`:"1 / 1"}),l.jsx(ze,{children:$?"Fit":`${Math.round(m*100)}%`})]})]})},XR={mp3:"audio/mpeg",wav:"audio/wav",ogg:"audio/ogg",m4a:"audio/mp4",flac:"audio/flac"},JR=/\.(mp3|wav|ogg|m4a|flac)$/i,ZR=e=>XR[e.slice(e.lastIndexOf(".")+1).toLowerCase()]??null,eD=e=>e.slice(0,e.lastIndexOf("/"))||"/",qd=e=>e.slice(e.lastIndexOf("/")+1),tD=()=>{const e=nn(),n=g.useRef(null),o=g.useRef(null),i=g.useRef(null),a=g.useRef(!1),u=g.useRef(0),[d,p]=g.useState([]),[h,m]=g.useState(0),[y,w]=g.useState(null);g.useEffect(()=>{(async()=>{const b=(await e.argv())[0];if(!b){w("No media to play.");return}const C=eD(b);try{const E=(await e.readdir(C)).filter(T=>JR.test(T)).sort().map(T=>`${C}/${T}`);p(E.length?E:[b]),m(Math.max(0,E.indexOf(b)))}catch{p([b]),m(0)}})()},[e]),g.useEffect(()=>{const b=d[h];if(!b||!n.current)return;let C=null,v=!0;return(async()=>{const E=ZR(b);if(!E){w("Unsupported audio format.");return}try{const T=await e.readFile(b);C=URL.createObjectURL(new Blob([T],{type:E})),v&&n.current&&(n.current.src=C,n.current.play().catch(()=>{}))}catch{v&&w("Could not open this file.")}})(),()=>{v=!1,C&&URL.revokeObjectURL(C)}},[d,h,e]);const S=()=>{if(!(a.current||!n.current))try{const b=window.AudioContext||window.webkitAudioContext,C=new b,v=C.createMediaElementSource(n.current),E=C.createAnalyser();E.fftSize=128,v.connect(E),E.connect(C.destination),i.current=E,a.current=!0,C.resume(),$()}catch{}},$=()=>{const b=o.current,C=i.current;if(!b||!C)return;const v=b.getContext("2d"),E=C.frequencyBinCount,T=new Uint8Array(E);C.getByteFrequencyData(T),v.fillStyle="#0a0020",v.fillRect(0,0,b.width,b.height);const N=b.width/E;for(let _=0;_<E;_++){const K=T[_]/255*b.height,X=v.createLinearGradient(0,b.height,0,b.height-K);X.addColorStop(0,"#ff2d95"),X.addColorStop(1,"#00e5d0"),v.fillStyle=X,v.fillRect(_*N,b.height-K,N-1,K)}u.current=requestAnimationFrame($)};g.useEffect(()=>()=>cancelAnimationFrame(u.current),[]);const j=()=>m(b=>d.length?(b+1)%d.length:0);return l.jsxs(Et,{$minW:340,$minH:280,style:{padding:6,paddingBottom:0},children:[y&&l.jsx("p",{style:{padding:12},children:y}),!y&&l.jsxs(l.Fragment,{children:[l.jsxs("p",{style:{margin:"2px 0 6px",fontWeight:"bold",textAlign:"center",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:["🎵 ",d[h]?qd(d[h]):"—"]}),l.jsx(wt,{variant:"well",style:{padding:2,marginBottom:6},children:l.jsx("canvas",{ref:o,width:320,height:80,style:{display:"block",width:"100%",height:80,background:"#0a0020"}})}),l.jsx("audio",{ref:n,controls:!0,onPlay:S,onEnded:j,style:{width:"100%"}}),l.jsxs("p",{style:{fontSize:12,fontWeight:"bold",margin:"8px 0 4px"},children:["Playlist (",d.length,")"]}),l.jsx(wt,{variant:"well",style:{flex:1,minHeight:60,overflow:"auto",background:"#fff"},children:d.map((b,C)=>l.jsxs("div",{onClick:()=>m(C),style:{padding:"3px 6px",cursor:"pointer",fontSize:12,background:C===h?"#000080":"transparent",color:C===h?"#fff":"#000",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:[C===h?"▶ ":"",qd(b)]},b))})]}),l.jsxs(Pt,{children:[l.jsx(ze,{$flex:1,children:y?"No media":d[h]?qd(d[h]):"—"}),l.jsxs(ze,{children:[d.length," track(s)"]})]})]})},Pv="vortex.uninstalled",Zf=new Set;function nD(){try{return new Set(JSON.parse(localStorage.getItem(Pv)||"[]"))}catch{return new Set}}let Oa=nD();function rD(){localStorage.setItem(Pv,JSON.stringify([...Oa]))}function Nv(){return Oa}function Sx(e,n){const o=new Set(Oa);n?o.delete(e):o.add(e),Oa=o,rD(),Zf.forEach(i=>i())}function oD(e){return Zf.add(e),()=>Zf.delete(e)}function pc(){return g.useSyncExternalStore(oD,Nv)}const jx={background:"white",border:"2px solid #808080",height:230,overflow:"auto",padding:4},Cx={display:"flex",alignItems:"center",gap:8,padding:"3px 6px"},iD=()=>{const e=Wr(),n=pc(),[o,i]=g.useState(0),a=Mr.filter(h=>!n.has(h.exec)),u=Mr.filter(h=>n.has(h.exec)),d=h=>{e.registry.unregister(h),Sx(h,!1)},p=h=>{const m=Mr.find(y=>y.exec===h);m&&e.registry.register(m),Sx(h,!0)};return l.jsxs(Et,{$minW:420,$minH:320,style:{padding:4},children:[l.jsxs(Xa,{value:o,onChange:h=>i(h),children:[l.jsx(Nr,{value:0,children:"Install/Uninstall"}),l.jsx(Nr,{value:1,children:"Add Programs"})]}),l.jsx(Ya,{style:{flex:1,minHeight:0},children:l.jsxs(Br,{style:{height:"100%"},children:[o===0&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Installed programs. Select one and click Remove to uninstall it."}),l.jsx("div",{style:jx,children:a.map(h=>l.jsxs("div",{style:Cx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),pD.has(h.exec)?l.jsx("span",{style:{fontSize:11,color:"#555"},children:"system"}):l.jsx(Ve,{size:"sm",onClick:()=>d(h.exec),children:"Remove"})]},h.exec))})]}),o===1&&l.jsxs(l.Fragment,{children:[l.jsx("p",{style:{marginTop:0,fontSize:12},children:"Programs available to install."}),l.jsxs("div",{style:jx,children:[u.length===0&&l.jsx("p",{style:{fontSize:12,padding:4},children:"Everything is installed."}),u.map(h=>l.jsxs("div",{style:Cx,children:[l.jsx("img",{src:h.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1,fontSize:13},children:h.name}),l.jsx(Ve,{size:"sm",onClick:()=>p(h.exec),children:"Install"})]},h.exec))]})]})]})}),l.jsx(Pt,{children:l.jsxs(ze,{$flex:1,children:[a.length," installed · ",u.length," available"]})})]})},Lv="/trash.svg",_p="/task_manager.png",Mv="/doom.png",Ov="/doom2.png",Fp="/playstation-logo.png",zv="/wordpad.svg",_v="/browser.png",Fv="/tomb.jpg",Bv="/persia.png",Wv="/vapor.png",Bp="/terminal.svg",Wp="/calculator.svg",Hp="/minesweeper.svg",Up="/solitaire.svg",Vp="/snake.svg",Kp="/freecell.svg",za="/clock.svg",_a="/paint_file-3.png",ep="/find.svg",tp="/help.svg",Qp="/network.svg",ks="/winpopup.svg",sD=g.lazy(()=>yo(()=>import("./Doom-Du8_EpbN.js"),__vite__mapDeps([0,1]))),lD=g.lazy(()=>yo(()=>import("./DoomII-C1-TyDDt.js"),__vite__mapDeps([2,1]))),aD=g.lazy(()=>yo(()=>import("./TombRaider-DhwnCACb.js"),__vite__mapDeps([3,1]))),cD=g.lazy(()=>yo(()=>import("./Persia-DvOIBYsp.js"),__vite__mapDeps([4,1]))),uD=g.lazy(()=>yo(()=>import("./Backlogger-D8ka97GZ.js"),[])),dD=g.lazy(()=>yo(()=>import("./Browser-tk4fjn3Q.js"),[])),fD=g.lazy(()=>yo(()=>import("./NightwavePlaza-CQqn30LX.js"),[])),pD=new Set(["recycle_bin","my_computer","task_manager","explorer","terminal","control_panel","notes","find","add_remove"]),Mr=[He({exec:"recycle_bin",name:"Recycle Bin",icon:Lv,component:$2,permissions:["fs"]}),He({exec:"my_computer",name:"My Computer",icon:hs,component:A2,permissions:["proc"]}),He({exec:"task_manager",name:"Task Manager",icon:_p,component:B2,permissions:["proc"]}),He({exec:"notes",name:"Notes",icon:Fr,component:W2,permissions:["fs"]}),He({exec:"wordpad",name:"WordPad",icon:zv,component:V2,permissions:["fs"]}),He({exec:"explorer",name:"Explorer",icon:jt,component:o8,permissions:["fs","proc"]}),He({exec:"terminal",name:"Terminal",icon:Bp,component:cT,permissions:["fs","proc"]}),He({exec:"paint",name:"Paint",icon:_a,component:rR,permissions:["fs"]}),He({exec:"imageviewer",name:"Image Viewer",icon:_a,component:YR,permissions:["fs"]}),He({exec:"mediaplayer",name:"Media Player",icon:za,component:tD,permissions:["fs"]}),He({exec:"find",name:"Find Files",icon:ep,component:fR,permissions:["fs","proc"]}),He({exec:"backlogger",name:"GameCache",icon:Fp,component:uD,permissions:["net"]}),He({exec:"network",name:"Network Neighborhood",icon:Qp,component:OR,permissions:["net"]}),He({exec:"messenger",name:"WinPopup",icon:ks,component:UR,permissions:["net"]}),He({exec:"browser",name:"Browser",icon:_v,component:dD,permissions:["net"]}),He({exec:"vaporwave",name:"Nightwave Plaza",icon:Wv,component:fD,permissions:["net","audio"]}),He({exec:"calculator",name:"Calculator",icon:Wp,component:uT,permissions:[]}),He({exec:"minesweeper",name:"Minesweeper",icon:Hp,component:HA,permissions:["net"]}),He({exec:"solitaire",name:"Solitaire",icon:Up,component:KA,permissions:["net"]}),He({exec:"snake",name:"Snake",icon:Vp,component:qA,permissions:["net"]}),He({exec:"freecell",name:"FreeCell",icon:Kp,component:XA,permissions:["net"]}),He({exec:"clock",name:"Clock",icon:za,component:JA,permissions:[]}),He({exec:"help",name:"Help",icon:tp,component:DR,permissions:[]}),He({exec:"control_panel",name:"Control Panel",icon:hs,component:N$,permissions:[]}),He({exec:"add_remove",name:"Add/Remove Programs",icon:hs,component:iD,permissions:[]}),He({exec:"doom",name:"Doom",icon:Mv,component:sD,permissions:[]}),He({exec:"doomII",name:"Doom II",icon:Ov,component:lD,permissions:[]}),He({exec:"tomb",name:"Tomb Raider",icon:Fv,component:aD,permissions:[]}),He({exec:"persia",name:"Prince of Persia",icon:Bv,component:cD,permissions:[]})];function hD(e){for(const n of Mr)e.register(n)}const Gd="vortex.proctable",mD="process";function gD(e){return{load(){const n=localStorage.getItem(Gd);if(n)return xD(n);const o=localStorage.getItem(mD);if(o){const i=yD(o,e);return i&&localStorage.setItem(Gd,JSON.stringify(i)),i}return null},save(n){localStorage.setItem(Gd,JSON.stringify(n))}}}function xD(e){try{const n=JSON.parse(e);return Array.isArray(n)?n:null}catch{return null}}function yD(e,n){let o;try{o=JSON.parse(e)}catch{return null}return Array.isArray(o)?o.filter(i=>i&&i.componentName).map(i=>{var a,u;return{pid:i.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:i.componentName,name:i.name??i.componentName,icon:i.icon??"",priority:typeof i.priority=="number"?i.priority:0,window:{x:((a=i.location)==null?void 0:a.x)??n().x,y:((u=i.location)==null?void 0:u.y)??n().y},cwd:"/home/user",state:"running"}}):null}class wD{constructor(){Ne(this,"mounts",[]);Ne(this,"listeners",new Set);Ne(this,"changeVersion",0)}subscribe(n){return this.listeners.add(n),()=>this.listeners.delete(n)}version(){return this.changeVersion}touch(){this.emit()}emit(){this.changeVersion++;for(const n of this.listeners)n()}mount(n,o){const i=Lr(n);this.mounts=this.mounts.filter(a=>a.mountPoint!==i),this.mounts.push({mountPoint:i,fs:o}),this.mounts.sort((a,u)=>u.mountPoint.length-a.mountPoint.length)}route(n){const o=Lr(n);for(const i of this.mounts)if(i.mountPoint==="/"||o===i.mountPoint||o.startsWith(i.mountPoint+"/")){const a=i.mountPoint==="/"?o:o.slice(i.mountPoint.length)||"/";return{fs:i.fs,rel:a||"/",mountPoint:i.mountPoint}}throw new Ce("ENOENT",n)}childMounts(n){const o=Lr(n);return this.mounts.filter(i=>i.mountPoint!=="/"&&Zt(i.mountPoint)===o).map(i=>i.mountPoint.slice(o==="/"?1:o.length+1))}stat(n){const{fs:o,rel:i}=this.route(n);return o.stat(i)}readdir(n){const{fs:o,rel:i}=this.route(n),a=o.readdir(i);return[...new Set([...a,...this.childMounts(n)])].sort()}read(n){const{fs:o,rel:i}=this.route(n);return o.read(i)}write(n,o){const{fs:i,rel:a}=this.route(n);if(i.readonly)throw new Ce("EROFS",n);i.write(a,o),this.emit()}mkdir(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new Ce("EROFS",n);o.mkdir(i),this.emit()}unlink(n){const{fs:o,rel:i}=this.route(n);if(o.readonly)throw new Ce("EROFS",n);o.unlink(i),this.emit()}rename(n,o){const i=this.route(n),a=this.route(o);if(i.fs.readonly||a.fs.readonly)throw new Ce("EROFS",n);if(i.fs===a.fs)i.fs.rename(i.rel,a.rel);else{if(this.stat(n).type==="dir")throw new Ce("EINVAL","cross-mount dir move");a.fs.write(a.rel,i.fs.read(i.rel)),i.fs.unlink(i.rel)}this.emit()}exists(n){try{return this.stat(n),!0}catch{return!1}}}const Jl=()=>Date.now();class oi{constructor(){Ne(this,"readonly",!1);Ne(this,"root",{type:"dir",mtime:Jl(),children:new Map})}resolve(n){let o=this.root;for(const i of $s(n)){if(o.type!=="dir"||!o.children)throw new Ce("ENOTDIR",n);const a=o.children.get(i);if(!a)return null;o=a}return o}resolveDir(n){const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type!=="dir")throw new Ce("ENOTDIR",n);return o}exists(n){return this.resolve(n)!==null}stat(n){var i;const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);return{type:o.type,size:o.type==="file"?((i=o.data)==null?void 0:i.length)??0:0,mtime:o.mtime}}readdir(n){return[...this.resolveDir(n).children.keys()].sort()}read(n){const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type==="dir")throw new Ce("EISDIR",n);return o.data??new Uint8Array}write(n,o){if(Lr(n)==="/")throw new Ce("EISDIR",n);const i=this.resolveDir(Zt(n)),a=en(n),u=i.children.get(a);if(u&&u.type==="dir")throw new Ce("EISDIR",n);i.children.set(a,{type:"file",mtime:Jl(),data:new Uint8Array(o)})}mkdir(n){const o=this.resolveDir(Zt(n)),i=en(n);if(!i)throw new Ce("EEXIST",n);if(o.children.has(i))throw new Ce("EEXIST",n);o.children.set(i,{type:"dir",mtime:Jl(),children:new Map})}unlink(n){if(Lr(n)==="/")throw new Ce("EACCES","cannot unlink /");const o=this.resolve(n);if(!o)throw new Ce("ENOENT",n);if(o.type==="dir"&&o.children.size>0)throw new Ce("ENOTEMPTY",n);this.resolveDir(Zt(n)).children.delete(en(n))}rename(n,o){const i=this.resolve(n);if(!i)throw new Ce("ENOENT",n);const a=this.resolveDir(Zt(o));this.resolveDir(Zt(n)).children.delete(en(n)),i.mtime=Jl(),a.children.set(en(o),i)}serialize(){return Hv(this.root)}static deserialize(n){const o=new oi;return o.root=Uv(n),o}}function Hv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:Array.from(e.data??[])};const n={};for(const[o,i]of e.children)n[o]=Hv(i);return{type:"dir",mtime:e.mtime,children:n}}function Uv(e){if(e.type==="file")return{type:"file",mtime:e.mtime,data:new Uint8Array(e.data??[])};const n=new Map;for(const[o,i]of Object.entries(e.children??{}))n.set(o,Uv(i));return{type:"dir",mtime:e.mtime,children:n}}const Ex=["null","zero","random"],$x=256,Tx=()=>Date.now();class vD{constructor(){Ne(this,"readonly",!1)}device(n){const o=en(n);if(Zt(n)!=="/"||!Ex.includes(o))throw new Ce("ENOENT",n);return o}stat(n){return n==="/"?{type:"dir",size:0,mtime:Tx()}:(this.device(n),{type:"dev",size:0,mtime:Tx()})}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return[...Ex]}read(n){switch(this.device(n)){case"null":return new Uint8Array;case"zero":return new Uint8Array($x);case"random":return crypto.getRandomValues(new Uint8Array($x));default:throw new Ce("ENOENT",n)}}write(n,o){if(this.device(n)!=="null")throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}const Ax=()=>Date.now(),Rx=e=>new TextEncoder().encode(e);class bD{constructor(n){Ne(this,"readonly",!0);this.source=n}entries(){return["processes",...this.source().map(n=>n.pid)]}find(n){return this.source().find(o=>o.pid===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:Ax()};const o=en(n);if(Zt(n)!=="/"||!this.entries().includes(o))throw new Ce("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:Ax()}}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return this.entries()}read(n){const o=en(n);if(o==="processes"){const a=this.source().map(u=>`${u.pid.slice(0,8)}  ${u.state.padEnd(8)}  p${u.priority}  ${u.name}`).join(`
`);return Rx(`PID       STATE     PRIO  NAME
${a}
`)}const i=this.find(o);if(!i)throw new Ce("ENOENT",n);return Rx(`pid:      ${i.pid}
ppid:     ${i.ppid??"-"}
name:     ${i.name}
exec:     ${i.exec}
state:    ${i.state}
priority: ${i.priority}
uid:      ${i.uid}
`)}write(n){throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}const Dx=()=>Date.now(),kD=e=>new TextEncoder().encode(e);class SD{constructor(n){Ne(this,"readonly",!0);this.source=n}find(n){return this.source().find(o=>o.exec===n)}stat(n){if(n==="/")return{type:"dir",size:0,mtime:Dx()};const o=en(n);if(Zt(n)!=="/"||!this.find(o))throw new Ce("ENOENT",n);return{type:"file",size:this.read(n).length,mtime:Dx()}}readdir(n){if(n!=="/")throw new Ce("ENOTDIR",n);return this.source().map(o=>o.exec).sort()}read(n){const o=this.find(en(n));if(!o)throw new Ce("ENOENT",n);return kD(`#!vortex-program
exec=${o.exec}
name=${o.name}
`)}write(n){throw new Ce("EROFS",n)}mkdir(n){throw new Ce("EROFS",n)}unlink(n){throw new Ce("EROFS",n)}rename(n){throw new Ce("EROFS",n)}}function jD(e){let n="";for(const o of e)n+=String.fromCharCode(o);return btoa(n)}function CD(e){const n=atob(e),o=new Uint8Array(n.length);for(let i=0;i<n.length;i++)o[i]=n.charCodeAt(i);return o}class Ix{constructor(n,o,i=()=>{}){Ne(this,"readonly",!1);Ne(this,"mirror",new oi);Ne(this,"chains",new Map);this.mountPoint=n,this.api=o,this.onLoaded=i}async init(){try{const o=(await this.api.list()).filter(a=>a.path===this.mountPoint||a.path.startsWith(this.mountPoint+"/")),i=a=>a===this.mountPoint?"/":a.slice(this.mountPoint.length);for(const a of o.filter(u=>u.type==="folder").sort((u,d)=>u.path.length-d.path.length))this.ensureDir(i(a.path));for(const a of o.filter(u=>u.type!=="folder")){const u=i(a.path);this.ensureDir(Zt(u)),this.mirror.write(u,a.content?CD(a.content):new Uint8Array)}}catch{}this.onLoaded()}async reload(){this.mirror=new oi,this.chains.clear(),await this.init()}ensureDir(n){let o="";for(const i of $s(n))o+="/"+i,this.mirror.exists(o)||this.mirror.mkdir(o)}full(n){return n==="/"?this.mountPoint:this.mountPoint+n}nameOf(n){return n.slice(n.lastIndexOf("/")+1)}stat(n){return this.mirror.stat(n)}readdir(n){return this.mirror.readdir(n)}read(n){return this.mirror.read(n)}chain(n,o){const a=(this.chains.get(n)??Promise.resolve()).then(o).catch(()=>{});this.chains.set(n,a)}async flush(){await Promise.all(this.chains.values())}write(n,o){this.mirror.write(n,o);const i=jD(o);this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"file",i))}mkdir(n){this.mirror.mkdir(n),this.chain(n,()=>this.api.upsert(this.full(n),this.nameOf(n),"folder",null))}unlink(n){this.mirror.unlink(n),this.chain(n,()=>this.api.remove(this.full(n)))}rename(n,o){this.mirror.rename(n,o),this.chain(n,()=>this.api.rename(this.full(n),this.full(o)))}}function Px(e,n="/files"){const o=()=>{const a=ec();return{"Content-Type":"application/json",...a?{Authorization:`Bearer ${a}`}:{}}},i=a=>(a.status===401&&Cw(),a);return{async list(){const a=i(await fetch(`${e}${n}`,{headers:o()}));return a.ok?a.json():[]},async upsert(a,u,d,p){i(await fetch(`${e}${n}`,{method:"POST",headers:o(),body:JSON.stringify({path:a,name:u,type:d,content:p})}))},async remove(a){i(await fetch(`${e}${n}?path=${encodeURIComponent(a)}`,{method:"DELETE",headers:o()}))},async rename(a,u){i(await fetch(`${e}${n}/rename?from=${encodeURIComponent(a)}&to=${encodeURIComponent(u)}`,{method:"PUT",headers:o()}))}}}const Fa="vortex.vfs";function ED(){return{async load(){const e=localStorage.getItem(Fa);if(!e)return null;try{return JSON.parse(e)}catch{return null}},save(e){try{localStorage.setItem(Fa,JSON.stringify(e))}catch{}}}}const Nx="vortex.vfs.json";function $D(){var e;return typeof navigator<"u"&&!!((e=navigator.storage)!=null&&e.getDirectory)}function TD(){let e=null,n=null,o=!1;async function i(){if(o||n===null)return;o=!0;const a=n;n=null;try{const p=await(await(await navigator.storage.getDirectory()).getFileHandle(Nx,{create:!0})).createWritable();await p.write(JSON.stringify(a)),await p.close()}catch{}finally{o=!1,n!==null&&i()}}return{async load(){try{const u=await(await navigator.storage.getDirectory()).getFileHandle(Nx).catch(()=>null);if(u){const p=await(await u.getFile()).text();return p?JSON.parse(p):null}const d=localStorage.getItem(Fa);if(d){const p=JSON.parse(d);return n=p,i(),localStorage.removeItem(Fa),p}return null}catch{return null}},save(a){n=a,e&&clearTimeout(e),e=setTimeout(()=>void i(),300)}}}function AD(){return $D()?TD():ED()}const Vv=g.createContext(null),Lx=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2}),RD=`Welcome to VortexOS.\r
\r
This is a real file, stored on a real virtual filesystem.\r
Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r
`;function DD(){const e=new oi;return e.mkdir("/home"),e.mkdir("/home/user"),e.mkdir("/home/user/Documents"),e.mkdir("/home/user/Desktop"),e.mkdir("/tmp"),e.mkdir("/mnt"),e.mkdir("/Recycle Bin"),e.write("/home/user/welcome.txt",new TextEncoder().encode(RD)),e}async function ID(){const e=new h2;hD(e);for(const m of Nv())e.unregister(m);const n=new p2({registry:e,persistence:gD(Lx),defaultWindowLocation:Lx}),o=AD(),i=await o.load(),a=i?oi.deserialize(i):DD();a.exists("/mnt")||a.mkdir("/mnt");const u=new wD;u.mount("/",a),u.mount("/dev",new vD),u.mount("/proc",new bD(()=>n.processInfo())),u.mount("/bin",new SD(()=>n.registry.list().map(m=>({exec:m.exec,name:m.name}))));const d="http://localhost:8082",p=new Ix("/mnt/cloud",Px(d,"/files"),()=>u.touch());u.mount("/mnt/cloud",p);const h=new Ix("/mnt/public",Px(d,"/public/files"),()=>u.touch());return u.mount("/mnt/public",h),u.subscribe(()=>o.save(a.serialize())),n.mountVfs(u),i||o.save(a.serialize()),{kernel:n,drives:[p,h]}}const Kv=g.createContext(async()=>{});function PD({children:e,kernel:n}){const[o,i]=g.useState(n?{kernel:n,drives:[]}:null);g.useEffect(()=>{if(n){i({kernel:n,drives:[]});return}let d=!1;return ID().then(p=>{d||i(p)}),()=>{d=!0}},[n]);const a=(o==null?void 0:o.drives)??[],u=g.useCallback(async()=>{await Promise.all(a.map(d=>d.reload()))},[a]);return o?l.jsx(Vv.Provider,{value:o.kernel,children:l.jsx(Kv.Provider,{value:u,children:e})}):l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"#008080",color:"#fff",fontSize:14},children:"Starting VortexOS…"})}function ND(){return g.useContext(Kv)}function Wr(){const e=g.useContext(Vv);if(!e)throw new Error("useKernel must be used within a KernelProvider");return e}function hc(){const e=Wr();return g.useSyncExternalStore(e.subscribe,e.getSnapshot)}function LD(){const e=Wr();return g.useSyncExternalStore(e.subscribeFs,e.fsVersion)}function MD(){const e=Wr();return g.useSyncExternalStore(e.subscribePanic,e.getPanic)}const Qv=Y.createContext({});function OD({children:e}){const n=Wr(),o=hc(),i=g.useMemo(()=>o.map(h=>({uuid:h.pid,priority:h.priority,component:n.registry.component(h.exec)??(()=>null),selected:!1,icon:h.icon,name:h.name,location:h.window})),[o,n]),a=h=>{const m=h.componentName;m&&n.syscall(null,"spawn",{exec:m,name:h.name,icon:h.icon,argv:h.argv})},u=h=>{h&&n.syscall(null,"kill",{pid:h})},d=h=>{h.uuid&&n.syscall(null,"win_focus",{pid:h.uuid})},p=(h,m)=>{h&&n.syscall(null,"win_move",{pid:h,location:m})};return l.jsx(Qv.Provider,{value:{processes:i,changePriority:d,closeProcess:u,addProcess:a,handleProceessLocationChange:p},children:e})}function Dn(){return Y.useContext(Qv)}const Mx=200,Ox=2400,zD=vt`from { width: 0 } to { width: 100% }`,qv=vt`from { opacity: 0 } to { opacity: 1 }`,_D=vt`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`,qp=L.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
`,FD=L(qp)`
    ${({$vapor:e})=>e?`background:
                radial-gradient(120% 80% at 50% 18%, #2a0a4a 0%, #14012b 55%, #05010f 100%);`:"background-image: url('/clouds.jpg'); background-size: cover; background-position: center;"}
`,BD=L.div`
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
`,WD=L.button`
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
`,HD=L(qp)`
    background: ${({$vapor:e})=>e?"radial-gradient(80% 80% at 50% 50%, #0a0118 0%, #000 100%)":"#000"};
    justify-content: flex-start;
    align-items: flex-start;
    padding: 7vh 8vw;
    color: #d8d8d8;
    font-family: "Courier New", monospace;
    font-size: 15px;
    line-height: 1.7;
    text-align: left;
`,UD=L.div`
    animation: ${qv} 0.1s linear;
    white-space: pre;
`,VD=L.span`
    color: ${({$vapor:e})=>e?"#00e5d0":"#3ad14a"};
    font-weight: bold;
`,KD=L.span`
    display: inline-block;
    width: 9px;
    height: 16px;
    margin-left: 2px;
    vertical-align: text-bottom;
    background: currentColor;
    animation: ${_D} 1s step-end infinite;
`,QD=L(qp)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#000"};
    animation: ${qv} 0.5s ease;
`,zx=L.h1`
    margin: 26px 0 2px;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #5cb9ff, #ffffff)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,_x=L.p`
    margin: 2px 0 0;
    color: #b9b9c8;
    font-size: 13px;
    letter-spacing: 1px;
`,Fx=L.p`
    margin: 6px 0 0;
    font-size: 13px;
    font-weight: 600;
    color: ${({$vapor:e})=>e?"#00e5d0":"#7fc6ff"};
    text-shadow: 0 0 12px ${({$vapor:e})=>e?"#00e5d088":"transparent"};
`,qD=L.div`
    width: 320px;
    height: 18px;
    margin-top: 40px;
    padding: 2px;
    background: #000;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,GD=L.div`
    height: 100%;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #00e5d0)":"linear-gradient(90deg, #000080, #1084d0)"};
    animation: ${zD} ${({$ms:e})=>e}ms linear forwards;
`,YD=e=>[{label:"VortexOS BIOS v2.0  —  Experimental Edition"},{label:"(c) Serious Sam.  All rights reserved."},{label:""},{label:`Detecting processor cores ........ ${e}`,status:""},{label:"Microkernel .......................",status:"OK"},{label:"Syscall ABI .......................",status:"OK"},{label:"Virtual File System (OPFS) ........",status:"OK"},{label:"Process scheduler .................",status:"OK"},{label:""},{label:"Starting VortexOS ..."}],XD=()=>{const e=ui(),{sssStyle:n}=Vt(),o=n,[i,a]=g.useState("ready"),[u,d]=g.useState(0),p=YD(navigator.hardwareConcurrency||4),h=g.useRef([]),m=()=>{Q2(),a("post")};return g.useEffect(()=>{if(i==="post")return p.forEach((y,w)=>{h.current.push(setTimeout(()=>d(w+1),w*Mx))}),h.current.push(setTimeout(()=>a("logo"),p.length*Mx+350)),()=>{h.current.forEach(clearTimeout),h.current=[]}},[i]),g.useEffect(()=>{if(i!=="logo")return;q2();const y=setTimeout(()=>e("/vortex"),Ox);return()=>clearTimeout(y)},[i,e]),i==="ready"?l.jsxs(FD,{$vapor:o,children:[o&&l.jsx(BD,{}),l.jsxs("div",{style:{position:"relative",zIndex:1},children:[l.jsx(ri,{size:150,vapor:o}),l.jsx(zx,{$vapor:o,children:"VortexOS"}),l.jsx(_x,{style:{color:o?"#cfcfe0":"#0a0a0a"},children:"Experimental Edition"}),l.jsx(WD,{$vapor:o,onClick:m,children:"Are you ready?"}),l.jsx(Fx,{$vapor:o,style:{marginTop:18,color:o?"#00e5d0":"#0a0a0a"},children:"a creation by Serious Sam"})]})]}):i==="post"?l.jsx(HD,{$vapor:o,children:p.slice(0,u).map((y,w)=>l.jsxs(UD,{children:[y.label,y.status?l.jsx(VD,{$vapor:o,children:y.status}):null,w===u-1&&l.jsx(KD,{})]},w))}):l.jsxs(QD,{$vapor:o,children:[l.jsx(ri,{size:170,vapor:o}),l.jsx(zx,{$vapor:o,children:"VortexOS"}),l.jsx(_x,{children:"Version 2.0 · Experimental Edition"}),l.jsx(Fx,{$vapor:o,children:"a creation by Serious Sam"}),l.jsx(qD,{children:l.jsx(GD,{$vapor:o,$ms:Ox-200})})]})},JD=L.div`
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
`,ZD=L.div`
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
`,e4=L.div`
    width: 22px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
`,t4=L.div`
    height: 2px;
    margin: 3px 2px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #ffffff;
`,n4=L.span`
    margin-left: auto;
    padding-left: 14px;
    font-size: 10px;
`,Gv=({items:e,x:n,y:o,onClose:i})=>{const[a,u]=g.useState(null);return l.jsx(JD,{style:{left:n,top:o},onMouseDown:d=>d.stopPropagation(),onContextMenu:d=>d.preventDefault(),children:e.map((d,p)=>{var m;if(d.separator)return l.jsx(t4,{},p);const h=!!((m=d.submenu)!=null&&m.length);return l.jsxs(ZD,{$disabled:d.disabled,onMouseEnter:y=>{if(h&&!d.disabled){const w=y.currentTarget.getBoundingClientRect();u({index:p,x:w.right-3,y:w.top-3})}else u(null)},onClick:()=>{var y;d.disabled||h||((y=d.onClick)==null||y.call(d),i())},children:[l.jsx(e4,{children:d.checked?"✓":d.bullet?"●":d.glyph?d.glyph:d.icon?l.jsx("img",{src:d.icon,alt:"",style:{width:16,height:16,objectFit:"contain"}}):""}),l.jsx("span",{children:d.label}),h&&l.jsx(n4,{children:"▶"}),h&&(a==null?void 0:a.index)===p&&l.jsx(Gv,{items:d.submenu,x:a.x,y:a.y,onClose:i})]},p)})})},Bx=({items:e,x:n,y:o,onClose:i})=>{const a=window.innerWidth,u=window.innerHeight,d=Math.min(n,a-180),p=Math.min(o,u-e.length*22-12);return Mt.createPortal(l.jsx(Gv,{items:e,x:d,y:Math.max(4,p),onClose:i}),document.body)},Wx=40,Hx="/Recycle Bin",Yd=84,Zl=92,r4=[{id:"app:recycle_bin",name:"Recycle Bin",icon:Lv,kind:"app",componentName:"recycle_bin"},{id:"app:backlogger",name:"GameCache",icon:Fp,kind:"app",componentName:"backlogger"},{id:"app:my_computer",name:"My Computer",icon:hs,kind:"app",componentName:"my_computer"},{id:"app:network",name:"Network Neighborhood",icon:Qp,kind:"app",componentName:"network"},{id:"app:messenger",name:"WinPopup",icon:ks,kind:"app",componentName:"messenger"},{id:"app:vaporwave",name:"Nightwave Plaza",icon:Wv,kind:"app",componentName:"vaporwave"},{id:"app:task_manager",name:"Task Manager",icon:_p,kind:"app",componentName:"task_manager"},{id:"app:explorer",name:"Explorer",icon:jt,kind:"app",componentName:"explorer"},{id:"app:terminal",name:"Terminal",icon:Bp,kind:"app",componentName:"terminal"},{id:"app:notes",name:"Notes",icon:Fr,kind:"app",componentName:"notes"},{id:"app:browser",name:"Browser",icon:_v,kind:"app",componentName:"browser"},{id:"app:doom",name:"Doom",icon:Mv,kind:"app",componentName:"doom"},{id:"app:doomII",name:"Doom II",icon:Ov,kind:"app",componentName:"doomII"},{id:"app:persia",name:"Prince of Persia",icon:Bv,kind:"app",componentName:"persia"},{id:"app:tomb",name:"Tomb Raider",icon:Fv,kind:"app",componentName:"tomb"},{id:"app:calculator",name:"Calculator",icon:Wp,kind:"app",componentName:"calculator"},{id:"app:minesweeper",name:"Minesweeper",icon:Hp,kind:"app",componentName:"minesweeper"},{id:"app:solitaire",name:"Solitaire",icon:Up,kind:"app",componentName:"solitaire"},{id:"app:snake",name:"Snake",icon:Vp,kind:"app",componentName:"snake"},{id:"app:freecell",name:"FreeCell",icon:Kp,kind:"app",componentName:"freecell"},{id:"app:clock",name:"Clock",icon:za,kind:"app",componentName:"clock"},{id:"app:paint",name:"Paint",icon:_a,kind:"app",componentName:"paint"}],o4=e=>{try{return JSON.parse(localStorage.getItem(e)||"{}")}catch{return{}}},i4=()=>{const{addProcess:e}=Dn(),n=nn(),{alert:o}=Rs(),{username:i}=Kn(),a=LD(),u=pc(),d=rn(),p=W8[d.desktopIconSize],h=i||"user",m=`/home/${h}/Desktop`,y=`vortex.desktop.positions.${h}`,[w,S]=g.useState([]),[$,j]=g.useState(()=>o4(y)),[b,C]=g.useState(new Set),[v,E]=g.useState(null),[T,N]=g.useState(null),_=g.useRef(null),K=g.useRef(null),X=g.useRef(null),ee=[...r4.filter(A=>!A.componentName||!u.has(A.componentName)),...w],ie=Math.max(1,Math.floor((window.innerHeight-Wx-20)/Zl)),me=(A,V)=>$[A]??{x:12+Math.floor(V/ie)*Yd,y:12+V%ie*Zl},fe=g.useCallback(async()=>{try{await n.mkdir(`/home/${h}`).catch(()=>{}),await n.mkdir(m).catch(()=>{});const A=await n.readdir(m),V=await Promise.all(A.map(async te=>{const ne=await n.stat(Ue(m,te)).then(ce=>ce.type).catch(()=>"file");return{id:`file:${te}`,name:te,icon:ne==="dir"?jt:Fr,kind:ne==="dir"?"dir":"file",path:Ue(m,te)}}));S(V)}catch{S([])}},[n,h,m]);g.useEffect(()=>{new Audio("win98.mp3").play().catch(()=>{})},[]),g.useEffect(()=>{fe()},[fe,a]),g.useEffect(()=>{if(!v)return;const A=()=>E(null);return document.addEventListener("click",A),()=>document.removeEventListener("click",A)},[v]),g.useEffect(()=>{localStorage.setItem(y,JSON.stringify($))},[$,y]);const he=A=>{A.kind==="app"?e({componentName:A.componentName,name:A.name,icon:A.icon}):A.kind==="dir"?n.spawn("explorer",{argv:[A.path]}):/\.(png|jpe?g|gif|bmp|webp|svg|ico)$/i.test(A.name)?n.spawn("imageviewer",{argv:[A.path]}):n.spawn("notes",{argv:[A.path]})},le=(A,V,te)=>{if(A.button!==0)return;A.stopPropagation(),E(null);const ne=b.has(V.id),ce=ne?[...b]:[V.id];ne||C(new Set([V.id]));const je={};ce.forEach(Re=>{const _e=ee.findIndex(lt=>lt.id===Re);je[Re]=me(Re,_e>=0?_e:te)}),K.current={ids:ce,startMouse:{x:A.clientX,y:A.clientY},start:je},document.addEventListener("mousemove",z),document.addEventListener("mouseup",R)},z=A=>{const V=K.current;if(!V)return;const te=A.clientX-V.startMouse.x,ne=A.clientY-V.startMouse.y;j(ce=>{const je={...ce};for(const Re of V.ids){const _e=V.start[Re];je[Re]={x:Math.max(0,_e.x+te),y:Math.max(0,_e.y+ne)}}return je})},R=A=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",R);const V=K.current;if(V&&d.singleClickOpen&&V.ids.length===1&&!(Math.abs(A.clientX-V.startMouse.x)>4||Math.abs(A.clientY-V.startMouse.y)>4)){const ne=ee.find(ce=>ce.id===V.ids[0]);ne&&he(ne)}K.current=null},D=A=>{A.button===0&&(C(new Set),E(null),X.current={x:A.clientX,y:A.clientY},document.addEventListener("mousemove",H),document.addEventListener("mouseup",W))},H=A=>{if(!X.current)return;const V=Math.min(A.clientX,X.current.x),te=Math.min(A.clientY,X.current.y),ne=Math.abs(A.clientX-X.current.x),ce=Math.abs(A.clientY-X.current.y);N({x:V,y:te,w:ne,h:ce});const je=new Set;ee.forEach((Re,_e)=>{const lt=me(Re.id,_e);lt.x+Yd>V&&lt.x<V+ne&&lt.y+Zl>te&&lt.y<te+ce&&je.add(Re.id)}),C(je)},W=()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",W),X.current=null,N(null)},B=A=>{const V=w.map(je=>je.name);if(!V.includes(A))return A;const te=A.lastIndexOf("."),ne=te>0?A.slice(0,te):A,ce=te>0?A.slice(te):"";for(let je=2;;je++)if(!V.includes(`${ne} (${je})${ce}`))return`${ne} (${je})${ce}`},P=async()=>{await n.mkdir(Ue(m,B("New Folder"))).catch(A=>o({title:"Error",message:A.code??"failed",type:"error"})),fe()},O=async()=>{await n.writeTextFile(Ue(m,B("New Text Document.txt")),""),fe()},J=async A=>{const te=(await n.readdir(Hx).catch(()=>[])).includes(A.name)?`${A.name}-${Date.now()%1e4}`:A.name;await n.rename(A.path,Ue(Hx,te)).catch(()=>{}),gw(te,A.path)},ae=async A=>{await J(A),fe()},ue=async()=>{const A=w.filter(V=>b.has(V.id));for(const V of A)await J(V);fe()},ge=()=>j({}),pe=A=>{const V=ce=>ce.kind==="app"?0:ce.kind==="dir"?1:2,te=[...ee].sort((ce,je)=>{if(A==="type"){const Re=V(ce)-V(je);if(Re!==0)return Re}return ce.name.localeCompare(je.name)}),ne={};te.forEach((ce,je)=>{ne[ce.id]={x:12+Math.floor(je/ie)*Yd,y:12+je%ie*Zl}}),j(ne)},xe=()=>e({componentName:"control_panel",name:"Control Panel",icon:"/controlpanel.png"});g.useEffect(()=>{const A=V=>{var ne;if(V.key!=="Delete")return;const te=(ne=document.activeElement)==null?void 0:ne.tagName;te==="INPUT"||te==="TEXTAREA"||w.some(ce=>b.has(ce.id))&&ue()};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[b,w]);const q=(A,V)=>{A.preventDefault(),A.stopPropagation(),V&&C(new Set([V.id])),E({x:A.clientX,y:A.clientY,item:V})};return l.jsxs("div",{ref:_,onMouseDown:D,onContextMenu:A=>q(A,null),style:{position:"relative",width:"100%",height:`calc(100vh - ${Wx}px)`,overflow:"hidden"},children:[d.showDesktopIcons&&ee.map((A,V)=>{const te=me(A.id,V),ne=b.has(A.id);return l.jsxs("div",{onMouseDown:ce=>le(ce,A,V),onDoubleClick:d.singleClickOpen?void 0:()=>he(A),onContextMenu:ce=>q(ce,A),style:{position:"absolute",left:te.x,top:te.y,width:p.cell,display:"flex",flexDirection:"column",alignItems:"center",padding:3,cursor:"pointer",border:ne?"1px dotted #ffffff":"1px solid transparent"},children:[l.jsx("img",{src:A.icon,alt:A.name,style:{height:p.icon,width:p.icon,objectFit:"contain"},draggable:!1}),l.jsx("p",{style:{marginTop:2,padding:"0 3px",textAlign:"center",fontSize:p.font,color:"#fff",textShadow:ne?"none":"1px 1px 0 rgba(0,0,0,0.6)",backgroundColor:ne?d.accentColor:"transparent",wordBreak:"break-word"},children:A.name})]},A.id)}),T&&l.jsx("div",{style:{position:"fixed",left:T.x,top:T.y,width:T.w,height:T.h,border:`1px dotted ${d.accentColor}`,background:`${d.accentColor}22`,pointerEvents:"none",zIndex:5}}),v&&(v.item?l.jsx(Bx,{x:v.x,y:v.y,onClose:()=>E(null),items:[{label:"Open",glyph:"▸",onClick:()=>he(v.item)},...v.item.kind!=="app"?[{separator:!0},{label:"Delete",glyph:"🗑",onClick:()=>ae(v.item)}]:[],{separator:!0},{label:"Properties",onClick:()=>o({title:`${v.item.name} Properties`,message:`Name: ${v.item.name}
Type: ${v.item.kind==="app"?"Application":v.item.kind==="dir"?"Folder":"File"}${v.item.path?`
Location: ${v.item.path}`:""}`,type:"info"})}]}):l.jsx(Bx,{x:v.x,y:v.y,onClose:()=>E(null),items:[{label:"View",submenu:[{label:"Large Icons",bullet:d.desktopIconSize==="large",onClick:()=>rt("desktopIconSize","large")},{label:"Normal Icons",bullet:d.desktopIconSize==="normal",onClick:()=>rt("desktopIconSize","normal")},{label:"Small Icons",bullet:d.desktopIconSize==="small",onClick:()=>rt("desktopIconSize","small")},{separator:!0},{label:"Show Desktop Icons",checked:d.showDesktopIcons,onClick:()=>rt("showDesktopIcons",!d.showDesktopIcons)}]},{label:"Sort Icons",submenu:[{label:"by Name",onClick:()=>pe("name")},{label:"by Type",onClick:()=>pe("type")}]},{label:"Line up Icons",onClick:ge},{label:"Refresh",glyph:"⟳",onClick:fe},{separator:!0},{label:"New",submenu:[{label:"Folder",icon:jt,onClick:P},{label:"Text Document",icon:Fr,onClick:O}]},{separator:!0},{label:"Properties",onClick:xe}]}))]})},Gp=["terminal","explorer","browser"],Yp=e=>`vortex.quicklaunch.${e||"user"}`,np=new Set,s4=()=>np.forEach(e=>e());function Xp(e){const n=localStorage.getItem(Yp(e));if(n===null)return Gp;try{const o=JSON.parse(n);return Array.isArray(o)?o.filter(i=>typeof i=="string"):[]}catch{return[]}}function Yv(e,n){localStorage.setItem(Yp(e),JSON.stringify(n)),s4()}function Xv(e,n){return Xp(e).includes(n)}function l4(e,n){const o=Xp(e);o.includes(n)||Yv(e,[...o,n])}function Jv(e,n){Yv(e,Xp(e).filter(o=>o!==n))}function a4(e,n){Xv(e,n)?Jv(e,n):l4(e,n)}function c4(e){return g.useSyncExternalStore(n=>(np.add(n),()=>np.delete(n)),()=>{const n=localStorage.getItem(Yp(e))??JSON.stringify(Gp);return u4(n)})}let Ux="",Xd=Gp;function u4(e){if(e!==Ux){Ux=e;try{const n=JSON.parse(e);Xd=Array.isArray(n)?n.filter(o=>typeof o=="string"):[]}catch{Xd=[]}}return Xd}let Jp=!1;const rp=new Set,Zv=()=>rp.forEach(e=>e());function e1(){Jp=!0,Zv()}function ea(){Jp=!1,Zv()}function d4(){return g.useSyncExternalStore(e=>(rp.add(e),()=>rp.delete(e)),()=>Jp)}const t1="vortex.run.mru",f4=10;function op(){try{const e=JSON.parse(localStorage.getItem(t1)??"[]");return Array.isArray(e)?e.filter(n=>typeof n=="string"):[]}catch{return[]}}function p4(e){const n=e.trim();if(!n)return;const o=[n,...op().filter(i=>i!==n)].slice(0,f4);localStorage.setItem(t1,JSON.stringify(o))}const Jd=40,h4=L.div`
    margin-left: auto;
    height: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 8px;
    font-size: 12px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,Zd=L.button`
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
`,ef=L.div`
    position: fixed;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    z-index: 100001;
    padding: 8px;
    font-size: 12px;
`;function m4({muted:e}){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M2 6.5h3l4-3v11l-4-3H2z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),e?l.jsx("path",{d:"M12 6l4 6M16 6l-4 6",stroke:"#a00",strokeWidth:"1.5",strokeLinecap:"round"}):l.jsxs(l.Fragment,{children:[l.jsx("path",{d:"M11.5 6.5a3.5 3.5 0 0 1 0 5",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"}),l.jsx("path",{d:"M13.5 5a6 6 0 0 1 0 8",fill:"none",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round"})]})]})}function g4(){return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("path",{d:"M9 2.5a3.5 3.5 0 0 0-3.5 3.5c0 4-1.5 5-1.5 5h10s-1.5-1-1.5-5A3.5 3.5 0 0 0 9 2.5z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.5",strokeLinejoin:"round"}),l.jsx("path",{d:"M7.5 13.5a1.5 1.5 0 0 0 3 0",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round"})]})}function x4({connected:e}){const n=e?"#00c000":"#5a5a5a";return l.jsxs("svg",{viewBox:"0 0 18 18",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1",y:"3",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"8",y:"9",width:"9",height:"6",rx:"0.5",fill:n,stroke:"#000",strokeWidth:"0.8"}),l.jsx("path",{d:"M5.5 9.5v1.5h7",fill:"none",stroke:"#000",strokeWidth:"0.8"})]})}function y4(e){const[n,o]=g.useState(()=>new Date);return g.useEffect(()=>{const i=setInterval(()=>o(new Date),e);return()=>clearInterval(i)},[e]),n}function w4(e,n){const o=String(e.getMinutes()).padStart(2,"0"),i=String(e.getSeconds()).padStart(2,"0");if(n.clock24h){const d=String(e.getHours()).padStart(2,"0");return n.clockSeconds?`${d}:${o}:${i}`:`${d}:${o}`}const a=e.getHours()>=12?"PM":"AM",u=e.getHours()%12||12;return n.clockSeconds?`${u}:${o}:${i} ${a}`:`${u}:${o} ${a}`}const v4=["January","February","March","April","May","June","July","August","September","October","November","December"],b4=["S","M","T","W","T","F","S"],k4=["M","T","W","T","F","S","S"];function S4({today:e,firstDayMonday:n}){const o=e.getFullYear(),i=e.getMonth(),a=new Date(o,i,1).getDay(),u=n?(a+6)%7:a,d=new Date(o,i+1,0).getDate(),p=n?k4:b4,h=[];for(let m=0;m<u;m++)h.push(null);for(let m=1;m<=d;m++)h.push(m);return l.jsxs("div",{style:{width:196},children:[l.jsxs("div",{style:{textAlign:"center",fontWeight:"bold",marginBottom:6},children:[v4[i]," ",o]}),l.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:1,textAlign:"center"},children:[p.map((m,y)=>l.jsx("div",{style:{fontWeight:"bold",color:"#000080",fontSize:11},children:m},y)),h.map((m,y)=>{const w=m===e.getDate();return l.jsx("div",{style:{padding:"2px 0",fontSize:11,background:w?"#000080":"transparent",color:w?"#fff":"#000"},children:m??""},y)})]})]})}const j4={info:"#000080",warning:"#806000",error:"#800000"};function C4({items:e}){return l.jsxs("div",{style:{width:260},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6},children:[l.jsx("span",{style:{fontWeight:"bold"},children:"Notifications"}),e.length>0&&l.jsx("button",{onClick:()=>r$(),style:{fontSize:11,cursor:"pointer",border:"1px solid #808080",background:"#c0c0c0"},children:"Clear"})]}),l.jsx("div",{style:{maxHeight:220,overflowY:"auto",background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080"},children:e.length===0?l.jsx("div",{style:{padding:12,color:"#666",textAlign:"center"},children:"No notifications"}):[...e].reverse().map(n=>l.jsxs("div",{style:{padding:"6px 8px",borderBottom:"1px solid #e0e0e0",display:"flex",gap:6},children:[n.icon&&l.jsx("img",{src:n.icon,alt:"",style:{width:16,height:16,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",color:j4[n.type]??"#000"},children:n.title}),l.jsx("div",{style:{color:"#000",wordBreak:"break-word"},children:n.body})]})]},n.id))})]})}const E4=({username:e})=>{const n=rn(),o=y4(n.clockSeconds?1e3:1e4),[i,a]=g.useState(null),u=g.useRef(null);g.useSyncExternalStore(K2,()=>`${Af()}|${Rf()}`);const d=Af(),p=Rf();g.useSyncExternalStore(zp,()=>`${kx()}|${Xf().length}`);const h=kx(),m=Xf().length;g.useSyncExternalStore(Mw,()=>String(Yg().length));const y=Yg();g.useEffect(()=>{if(!i)return;const S=j=>{var b;(b=u.current)!=null&&b.contains(j.target)||a(null)},$=j=>j.key==="Escape"&&a(null);return document.addEventListener("mousedown",S),document.addEventListener("keydown",$),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("keydown",$)}},[i]);const w=S=>{Yo(),a($=>$===S?null:S)};return l.jsxs(l.Fragment,{children:[l.jsxs(h4,{ref:u,className:"tray-clock",children:[l.jsx(Zd,{title:h?`Network: connected (${m} online)`:"Network: offline",onClick:()=>{Yo(),a(null)},children:l.jsx(x4,{connected:h})}),l.jsx(Zd,{title:p?"Volume: muted":`Volume: ${Math.round(d*100)}%`,onClick:()=>w("volume"),children:l.jsx(m4,{muted:p})}),l.jsx(Zd,{title:`Notifications (${y.length})`,onClick:()=>w("notifications"),children:l.jsx(g4,{})}),e&&l.jsx("span",{style:{opacity:.85},children:e}),n.showClock&&l.jsx("span",{style:{cursor:"pointer"},onClick:()=>w("clock"),children:w4(o,n)})]}),i==="volume"&&Mt.createPortal(l.jsxs(ef,{style:{right:8,bottom:Jd+6,width:96},onMouseDown:S=>S.stopPropagation(),children:[l.jsx("div",{style:{textAlign:"center",marginBottom:4},children:"Volume"}),l.jsx("div",{style:{display:"flex",justifyContent:"center",height:120},children:l.jsx(Hy,{orientation:"vertical",size:"120px",min:0,max:100,step:1,value:Math.round(d*100),onChange:S=>Tw(S/100)})}),l.jsx("div",{style:{marginTop:6},children:l.jsx(ft,{checked:p,onChange:()=>Aw(!p),label:"Mute"})})]}),document.body),i==="clock"&&Mt.createPortal(l.jsx(ef,{style:{right:8,bottom:Jd+6},onMouseDown:S=>S.stopPropagation(),children:l.jsx(S4,{today:o,firstDayMonday:n.firstDayMonday})}),document.body),i==="notifications"&&Mt.createPortal(l.jsx(ef,{style:{right:8,bottom:Jd+6},onMouseDown:S=>S.stopPropagation(),children:l.jsx(C4,{items:y})}),document.body)]})},$4=40,T4=({process:e,minimized:n,children:o})=>{const[i,a]=g.useState(null),u=g.useRef(null),d=g.useRef(null),p=()=>{u.current&&clearTimeout(u.current),u.current=setTimeout(()=>{var w;const y=(w=d.current)==null?void 0:w.firstElementChild;y&&a(y.getBoundingClientRect())},400)},h=()=>{u.current&&clearTimeout(u.current),u.current=null,a(null)},m=n?"Minimized":e.priority===0?"Active":"Running";return l.jsxs("span",{ref:d,style:{display:"contents"},onMouseEnter:p,onMouseLeave:h,onMouseDown:h,children:[o,i&&Mt.createPortal(l.jsx("div",{style:{position:"fixed",left:Math.max(4,Math.min(i.left,window.innerWidth-184)),bottom:$4+6,width:180,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",padding:8,zIndex:3e6,pointerEvents:"none",fontSize:12,color:"#000"},children:l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:e.icon,alt:"",style:{width:32,height:32,flexShrink:0}}),l.jsxs("div",{style:{minWidth:0},children:[l.jsx("div",{style:{fontWeight:"bold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),l.jsx("div",{style:{color:"#000080"},children:m})]})]})}),document.body)]})},Vx=({text:e,children:n})=>{const[o,i]=g.useState(null),a=g.useRef(null),u=p=>{const h=p.clientX,m=p.clientY;a.current&&clearTimeout(a.current),a.current=setTimeout(()=>i({x:h,y:m}),500)},d=()=>{a.current&&clearTimeout(a.current),a.current=null,i(null)};return l.jsxs("span",{style:{display:"contents"},onMouseEnter:u,onMouseLeave:d,onMouseDown:d,children:[n,o&&e&&Mt.createPortal(l.jsx("div",{style:{position:"fixed",left:o.x+12,top:o.y+18,background:"#ffffe1",border:"1px solid #000",padding:"1px 5px",fontSize:12,color:"#000",pointerEvents:"none",zIndex:3e6,whiteSpace:"nowrap",boxShadow:"1px 1px 1px rgba(0,0,0,0.3)"},children:e}),document.body)]})},lr="/w95.png",Qo="/controlpanel.png",Ba=40,A4=L.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${Ba}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 4px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    z-index: 99999;
    transition: transform 0.18s ease;
    transform: translateY(${({$hidden:e})=>e?`${Ba-3}px`:"0"});
`,R4=L.button`
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
`,tf=new Map(Mr.map(e=>[e.exec,e])),D4=L.button`
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
`,I4=L.button`
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
`,P4=[{name:"Terminal",icon:Bp,componentName:"terminal"},{name:"Explorer",icon:jt,componentName:"explorer"},{name:"Notes",icon:Fr,componentName:"notes"},{name:"WordPad",icon:zv,componentName:"wordpad"},{name:"GameCache",icon:Fp,componentName:"backlogger"},{name:"Network Neighborhood",icon:Qp,componentName:"network"},{name:"WinPopup",icon:ks,componentName:"messenger"},{name:"Task Manager",icon:_p,componentName:"task_manager"},{name:"Control Panel",icon:Qo,componentName:"control_panel"},{name:"Calculator",icon:Wp,componentName:"calculator"},{name:"Minesweeper",icon:Hp,componentName:"minesweeper"},{name:"Solitaire",icon:Up,componentName:"solitaire"},{name:"Snake",icon:Vp,componentName:"snake"},{name:"FreeCell",icon:Kp,componentName:"freecell"},{name:"Clock",icon:za,componentName:"clock"},{name:"Paint",icon:_a,componentName:"paint"}],N4=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),[a,u]=g.useState(!1),{changePriority:d,processes:p,addProcess:h,handleProceessLocationChange:m}=Dn(),{minimized:y,minimize:w,restore:S,sssStyle:$}=Vt(),{username:j,logout:b}=Kn(),C=pc(),v=j||"user",E=c4(v),T=rn(),N=g.useRef([]),_=()=>{const B=p.filter(P=>P.uuid&&!y.includes(P.uuid));B.length?(N.current=B.map(P=>P.uuid),B.forEach(P=>P.uuid&&w(P.uuid))):(N.current.forEach(P=>S(P)),N.current=[]),Yo()},K=B=>{const P=tf.get(B);P&&(h({name:P.name,icon:P.icon,componentName:B}),Yo())},X=B=>{if(!B)return;const P=B.getBoundingClientRect().top,O=window.innerHeight-Ba-P-8;B.style.maxHeight=`${Math.max(140,O)}px`,B.style.overflowY="auto"},ee=ui(),[ie,me]=g.useState(null),[fe,he]=g.useState(!1);g.useEffect(()=>{if(!ie)return;const B=()=>me(null);return document.addEventListener("click",B),()=>document.removeEventListener("click",B)},[ie]);const le=()=>{p.forEach((B,P)=>{B.uuid&&(S(B.uuid),m(B.uuid,{x:340+P*34,y:230+P*34}))}),me(null)},z=()=>{const B=p.length;if(B){const P=Math.ceil(Math.sqrt(B)),O=Math.ceil(B/P),J=window.innerWidth/P,ae=(window.innerHeight-Ba)/O;p.forEach((ue,ge)=>{if(!ue.uuid)return;const pe=ge%P,xe=Math.floor(ge/P);S(ue.uuid),m(ue.uuid,{x:Math.round(pe*J+J/2),y:Math.round(xe*ae+ae/2)})})}me(null)},R=()=>{p.forEach(B=>B.uuid&&w(B.uuid)),me(null)};g.useEffect(()=>{if(!e)return;const B=()=>{n(!1),i(!1),u(!1)},P=O=>O.key==="Escape"&&B();return document.addEventListener("click",B),document.addEventListener("keydown",P),()=>{document.removeEventListener("click",B),document.removeEventListener("keydown",P)}},[e]);const D=B=>{h(B),n(!1),i(!1)},H=B=>{const P=B.uuid;P&&(y.includes(P)?(S(P),d(B,0)):B.priority===0?w(P):d(B,0))},W=T.autoHideTaskbar&&!fe&&!e&&!o&&!a&&!ie;return l.jsxs(A4,{$hidden:W,onMouseEnter:()=>he(!0),onMouseLeave:()=>he(!1),onClick:B=>B.stopPropagation(),onContextMenu:B=>{B.preventDefault(),B.stopPropagation(),me({x:B.clientX,y:B.clientY})},children:[l.jsxs("div",{style:{position:"relative"},children:[l.jsxs(Ve,{onClick:()=>{Yo(),n(B=>!B),i(!1),u(!1)},active:e,style:{fontWeight:"bold",height:30,display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:lr,alt:"",style:{height:20}}),"Start"]}),e&&l.jsxs("div",{style:{position:"absolute",bottom:"calc(100% + 3px)",left:0,display:"flex",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)"},children:[l.jsx("div",{style:{width:30,background:$?"linear-gradient(180deg, #ff2d95 0%, #6a1b9a 55%, #00e5d0 100%)":"linear-gradient(180deg, #00007a 0%, #000033 100%)",borderTop:"2px solid #dfdfdf",borderLeft:"2px solid #dfdfdf",display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsxs("div",{style:{writingMode:"vertical-rl",transform:"rotate(180deg)",whiteSpace:"nowrap",color:"#fff",padding:"12px 0",display:"flex",alignItems:"center",gap:4},children:[l.jsx("span",{style:{fontWeight:400,letterSpacing:1,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"Vortex"}),l.jsx("span",{style:{fontWeight:"bold",fontSize:20,textShadow:"0 0 4px rgba(0,0,0,0.5)"},children:"98"})]})}),l.jsxs(Dr,{style:{width:200,position:"static"},children:[l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:[l.jsxs(Oe,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:jt,style:{width:20}})," Programs"]}),l.jsx("span",{children:"▸"})]}),o&&l.jsx(Dr,{ref:X,style:{position:"absolute",left:"100%",top:0,width:220},children:P4.filter(B=>!C.has(B.componentName)).map(B=>l.jsxs(Oe,{style:{cursor:"pointer",justifyContent:"space-between"},onClick:()=>D(B),onContextMenu:P=>{P.preventDefault(),P.stopPropagation(),a4(v,B.componentName)},title:"Right-click to pin/unpin to Quick Launch",children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:B.icon,style:{width:20}})," ",B.name]}),Xv(v,B.componentName)&&l.jsx("span",{style:{color:"#000080"},children:"📌"})]},B.componentName))})]}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>D({name:"Explorer",icon:jt,componentName:"explorer",argv:["/home/user/Documents"]}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:jt,style:{width:20}})," Documents"]})}),l.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[l.jsxs(Oe,{style:{cursor:"pointer",justifyContent:"space-between"},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Qo,style:{width:20}})," Settings"]}),l.jsx("span",{children:"▸"})]}),a&&l.jsxs(Dr,{ref:X,style:{position:"absolute",left:"100%",top:0,width:220},children:[l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>D({name:"Control Panel",icon:Qo,componentName:"control_panel"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Qo,style:{width:20}})," Control Panel"]})}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>D({name:"Add/Remove Programs",icon:Qo,componentName:"add_remove"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:Qo,style:{width:20}})," Add/Remove Programs"]})})]})]}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>D({name:"Find Files",icon:ep,componentName:"find"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:ep,style:{width:20}})," Find"]})}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>D({name:"Help",icon:tp,componentName:"help"}),children:l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[l.jsx("img",{src:tp,style:{width:20}})," Help"]})}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>{n(!1),e1()},children:"Run..."}),l.jsx(sr,{}),l.jsxs(Oe,{style:{cursor:"pointer"},onClick:()=>{n(!1),b()},children:["Log Off ",j,"..."]}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>ee("/shutdown"),children:"Shut Down..."})]})]})]}),T.showQuickLaunch&&l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:2,paddingLeft:4,borderLeft:"1px solid #808080",borderRight:"1px solid #808080",marginLeft:2,marginRight:2},children:[l.jsx(Vx,{text:"Show Desktop",children:l.jsx(D4,{onClick:_,"aria-label":"Show Desktop",children:l.jsxs("svg",{viewBox:"0 0 16 16",width:"16",height:"16","aria-hidden":!0,children:[l.jsx("rect",{x:"1.5",y:"2",width:"13",height:"9",rx:"0.5",fill:"#000080",stroke:"#000",strokeWidth:"0.8"}),l.jsx("rect",{x:"5.5",y:"11",width:"5",height:"1.5",fill:"#808080"}),l.jsx("rect",{x:"3.5",y:"12.5",width:"9",height:"1.5",fill:"#404040"})]})})}),E.filter(B=>tf.has(B)&&!C.has(B)).map(B=>{const P=tf.get(B);return l.jsx(Vx,{text:P.name,children:l.jsx(I4,{onClick:()=>K(B),onContextMenu:O=>{O.preventDefault(),O.stopPropagation(),Jv(v,B)},"aria-label":P.name,title:P.name,children:l.jsx("img",{src:P.icon,style:{width:18,height:18}})})},B)})]}),l.jsx("div",{style:{display:"flex",flex:1,gap:3,overflow:"hidden",marginLeft:2},children:p.map(B=>{const P=B.priority===0&&!y.includes(B.uuid??"");return l.jsx(T4,{process:B,minimized:y.includes(B.uuid??""),children:l.jsxs(R4,{$pressed:P,onClick:()=>H(B),children:[l.jsx("img",{src:B.icon,style:{width:18,height:18,flexShrink:0}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:B.name})]})},B.uuid)})}),l.jsx(E4,{username:j}),ie&&l.jsxs(Dr,{style:{position:"fixed",left:ie.x,top:ie.y-112,width:200,zIndex:1e5},children:[l.jsx(Oe,{style:{cursor:"pointer"},onClick:le,children:"Cascade Windows"}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:z,children:"Tile Windows"}),l.jsx(sr,{}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:R,children:"Minimize All Windows"})]})]})};let ip=[];const sp=new Set,L4=()=>sp.forEach(e=>e());function n1(e){ip=[...ip,{kind:e.kind??"app",app:e.app,pid:e.pid,message:e.message,stack:e.stack,ts:Date.now()}].slice(-30),L4()}function Kx(){return ip}function M4(e){return sp.add(e),()=>sp.delete(e)}class O4 extends Y.Component{constructor(){super(...arguments);Ne(this,"state",{error:null,details:!1,stack:""})}static getDerivedStateFromError(o){return{error:o}}componentDidCatch(o,i){const a=`${o.stack??o.message}

Component stack:${i.componentStack??""}`;this.setState({stack:a}),n1({app:this.props.appName,pid:this.props.pid,message:o.message,stack:a})}render(){var i;if(!this.state.error)return this.props.children;const{appName:o}=this.props;return l.jsx("div",{style:{padding:16,background:"#c0c0c0",height:"100%",boxSizing:"border-box",overflow:"auto",color:"#000"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)",maxWidth:380,margin:"0 auto"},children:[l.jsx("div",{style:{background:"linear-gradient(90deg, #000080, #1084d0)",color:"#fff",fontWeight:"bold",padding:"2px 4px",fontSize:12},children:o}),l.jsxs("div",{style:{padding:14,fontSize:12,lineHeight:1.5},children:[l.jsx("p",{style:{margin:0},children:"This program has performed an illegal operation and will be shut down."}),l.jsx("p",{style:{margin:"8px 0 0"},children:"If the problem persists, contact the program vendor."}),this.state.details&&l.jsxs("pre",{style:{marginTop:12,padding:8,background:"#fff",border:"1px solid #808080",borderColor:"#808080 #fff #fff #808080",fontSize:10,fontFamily:"monospace",whiteSpace:"pre-wrap",wordBreak:"break-word",maxHeight:160,overflow:"auto"},children:["DR. WATSON — application fault",`
`,"App: ",o,"  PID: ",((i=this.props.pid)==null?void 0:i.slice(0,8))??"—",`
`,this.state.error.message,`

`,this.state.stack]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:16},children:[l.jsx(nf,{onClick:this.props.onClose,children:"Close"}),l.jsx(nf,{onClick:()=>this.setState({error:null,details:!1}),children:"Ignore"}),l.jsxs(nf,{onClick:()=>this.setState(a=>({details:!a.details})),children:["Details ",this.state.details?"<<":">>"]})]})]})]})})}}const nf=({onClick:e,children:n})=>l.jsx("button",{onClick:e,style:{minWidth:75,height:23,fontSize:12,background:"#c0c0c0",border:"2px solid",borderColor:"#ffffff #808080 #808080 #ffffff",cursor:"pointer"},onMouseDown:o=>{o.currentTarget.style.borderColor="#808080 #ffffff #ffffff #808080"},onMouseUp:o=>{o.currentTarget.style.borderColor="#ffffff #808080 #808080 #ffffff"},children:n}),fs=40,z4=[{key:"n",dx:0,dy:-1,cursor:"ns-resize",box:{top:-3,left:10,right:10,height:7}},{key:"s",dx:0,dy:1,cursor:"ns-resize",box:{bottom:-3,left:10,right:10,height:7}},{key:"w",dx:-1,dy:0,cursor:"ew-resize",box:{left:-3,top:10,bottom:10,width:7}},{key:"e",dx:1,dy:0,cursor:"ew-resize",box:{right:-3,top:10,bottom:10,width:7}},{key:"nw",dx:-1,dy:-1,cursor:"nwse-resize",box:{left:-3,top:-3,width:14,height:14}},{key:"ne",dx:1,dy:-1,cursor:"nesw-resize",box:{right:-3,top:-3,width:14,height:14}},{key:"sw",dx:-1,dy:1,cursor:"nesw-resize",box:{left:-3,bottom:-3,width:14,height:14}},{key:"se",dx:1,dy:1,cursor:"nwse-resize",box:{right:-3,bottom:-3,width:14,height:14}}],ta=22;function _4(e,n){const o=window.innerWidth,i=window.innerHeight-fs,a=e<=ta,u=e>=o-ta,d=n<=ta,p=n>=i-ta;return d&&a?{x:0,y:0,w:o/2,h:i/2}:d&&u?{x:o/2,y:0,w:o/2,h:i/2}:p&&a?{x:0,y:i/2,w:o/2,h:i/2}:p&&u?{x:o/2,y:i/2,w:o/2,h:i/2}:a?{x:0,y:0,w:o/2,h:i}:u?{x:o/2,y:0,w:o/2,h:i}:d?{x:0,y:0,w:o,h:i}:null}const F4=({process:e})=>{var ge,pe,xe,q;const{changePriority:n,closeProcess:o,handleProceessLocationChange:i}=Dn(),{changeCursor:a,minimized:u,minimize:d}=Vt(),p=rn(),[h,m]=g.useState({x:((ge=e.location)==null?void 0:ge.x)??0,y:((pe=e.location)==null?void 0:pe.y)??0}),[y,w]=g.useState(!1),[S,$]=g.useState(null),[j,b]=g.useState(!1),[C,v]=g.useState(!1),[E,T]=g.useState(!1),[N,_]=g.useState(null),K=g.useRef(null);g.useEffect(()=>{if(!E)return;const A=()=>T(!1);return document.addEventListener("click",A),()=>document.removeEventListener("click",A)},[E]);const X=g.useRef(null),ee=g.useRef(null),ie=g.useRef(null),me=e.priority===0,fe=!!e.uuid&&u.includes(e.uuid);g.useEffect(()=>{var A,V;y||m({x:((A=e.location)==null?void 0:A.x)??0,y:((V=e.location)==null?void 0:V.y)??0})},[(xe=e.location)==null?void 0:xe.x,(q=e.location)==null?void 0:q.y]),g.useEffect(()=>(y?(a("Grabbing.cur"),document.addEventListener("mousemove",le),document.addEventListener("mouseup",z)):(a("arrow.cur"),document.removeEventListener("mousemove",le),document.removeEventListener("mouseup",z)),()=>{document.removeEventListener("mousemove",le),document.removeEventListener("mouseup",z)}),[y]);const he=A=>{var te;if(j)return;e.uuid&&n(e,0);const V=(te=X.current)==null?void 0:te.getBoundingClientRect();V&&(ee.current={mouseX:A.clientX,mouseY:A.clientY,left:V.left,top:V.top,w:V.width,h:V.height},$({x:V.left,y:V.top,w:V.width,h:V.height}),w(!0))},le=A=>{if(!ee.current)return;const V=p.windowSnap?_4(A.clientX,A.clientY):null;if(ie.current=V,V){$(V);return}const te=A.clientX-ee.current.mouseX,ne=A.clientY-ee.current.mouseY,ce=ee.current.w,je=ee.current.h;if(p.liveDrag&&e.uuid){let Re=ee.current.left+te,_e=ee.current.top+ne;Re=Math.min(Math.max(Re,80-ce),window.innerWidth-80),_e=Math.min(Math.max(_e,0),window.innerHeight-fs-28),m({x:Math.round(Re+ce/2),y:Math.round(_e+je/2)}),$(null)}else $({x:ee.current.left+te,y:ee.current.top+ne,w:ce,h:je})},z=A=>{w(!1);const V=ee.current,te=ie.current;if(te&&e.uuid){b(!1),_({w:te.w,h:te.h});const ne={x:Math.round(te.x+te.w/2),y:Math.round(te.y+te.h/2)};m(ne),i(e.uuid,ne)}else if(V&&e.uuid){let ne=V.left+(A.clientX-V.mouseX),ce=V.top+(A.clientY-V.mouseY);ne=Math.min(Math.max(ne,80-V.w),window.innerWidth-80),ce=Math.min(Math.max(ce,0),window.innerHeight-fs-28);const je={x:Math.round(ne+V.w/2),y:Math.round(ce+V.h/2)};m(je),i(e.uuid,je)}$(null),ie.current=null,ee.current=null},R=()=>{J2(),b(A=>!A)},D=()=>{if(X2(),!!e.uuid){if(j){d(e.uuid);return}v(!0),setTimeout(()=>{e.uuid&&d(e.uuid),v(!1)},150)}},H=A=>A.stopPropagation(),W=240,B=150,P=A=>{const V=K.current;if(!V)return;const te=A.clientX-V.mouseX,ne=A.clientY-V.mouseY;let ce=V.w,je=V.h,Re=V.left,_e=V.top;V.dx===1&&(ce=Math.max(W,V.w+te)),V.dx===-1&&(ce=Math.max(W,V.w-te),Re=V.left+(V.w-ce)),V.dy===1&&(je=Math.max(B,V.h+ne)),V.dy===-1&&(je=Math.max(B,V.h-ne),_e=V.top+(V.h-je)),_({w:ce,h:je}),m({x:Re+ce/2,y:_e+je/2})},O=()=>{K.current=null,document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",O)},J=(A,V)=>te=>{var ce;if(j)return;te.preventDefault(),te.stopPropagation();const ne=(ce=X.current)==null?void 0:ce.getBoundingClientRect();ne&&(K.current={mouseX:te.clientX,mouseY:te.clientY,w:ne.width,h:ne.height,left:ne.left,top:ne.top,dx:A,dy:V},document.addEventListener("mousemove",P),document.addEventListener("mouseup",O))},ae=j?void 0:C?"winMinimize 150ms ease-in forwards":"winOpen 140ms ease-out",ue=j?{position:"fixed",top:0,left:0,width:"100vw",height:`calc(100vh - ${fs}px)`,transform:"none",zIndex:me?9999:e.priority+1,userSelect:"none",display:fe?"none":"flex",flexDirection:"column"}:{position:"absolute",top:`${h.y}px`,left:`${h.x}px`,transform:"translate(-50%, -50%)",zIndex:me?9999:e.priority+1,userSelect:"none",display:fe?"none":N?"flex":void 0,flexDirection:"column",animation:N?void 0:ae,minWidth:240,minHeight:150,maxWidth:"100vw",maxHeight:`calc(100vh - ${fs}px)`,...N?{width:N.w,height:N.h}:{}};return l.jsxs(l.Fragment,{children:[l.jsxs(li,{ref:X,onClick:()=>n(e,0),resizable:!j,className:"window",style:ue,children:[l.jsxs(si,{onMouseDown:he,onDoubleClick:R,className:"window-title",style:{display:"flex",alignItems:"center",justifyContent:"space-between",...As(me)},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",overflow:"hidden",position:"relative"},children:[l.jsx("img",{src:e.icon,onMouseDown:A=>A.stopPropagation(),onClick:A=>{A.stopPropagation(),T(V=>!V)},onDoubleClick:A=>{A.stopPropagation(),e.uuid&&o(e.uuid)},style:{width:18,height:18,marginRight:4,cursor:"pointer"}}),l.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:e.name}),E&&l.jsxs(Dr,{style:{position:"absolute",left:0,top:"100%",width:150,zIndex:100002},onMouseDown:A=>A.stopPropagation(),children:[l.jsx(Oe,{disabled:!j,style:{cursor:j?"pointer":"default"},onClick:()=>b(!1),children:"Restore"}),l.jsx(Oe,{disabled:!0,children:"Move"}),l.jsx(Oe,{disabled:!0,children:"Size"}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:D,children:"Minimize"}),l.jsx(Oe,{disabled:j,style:{cursor:j?"default":"pointer"},onClick:()=>b(!0),children:"Maximize"}),l.jsx(sr,{}),l.jsx(Oe,{style:{cursor:"pointer"},onClick:()=>e.uuid&&o(e.uuid),children:"Close"})]})]}),l.jsxs("div",{style:{display:"flex",gap:2},onMouseDown:H,onClick:H,children:[l.jsx(rf,{label:"Minimize",onClick:D,glyph:l.jsx("span",{style:{display:"block",width:8,height:2,background:"#000",marginTop:5}})}),l.jsx(rf,{label:"Maximize",onClick:R,glyph:l.jsx("span",{style:{display:"block",width:9,height:8,border:"1px solid #000",borderTopWidth:2}})}),l.jsx(rf,{label:"Close",onClick:()=>e.uuid&&o(e.uuid),glyph:l.jsx("span",{style:{fontWeight:"bold",fontSize:11,lineHeight:"10px"},children:"✕"})})]})]}),e.component?l.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",...j||N?{flex:1,minHeight:0,overflow:"auto"}:{}},children:l.jsx(j2,{pid:e.uuid??null,children:l.jsx(O4,{appName:e.name,pid:e.uuid??null,onClose:()=>e.uuid&&o(e.uuid),children:l.jsx(g.Suspense,{fallback:l.jsxs("div",{style:{padding:24,textAlign:"center",color:"#000"},children:["Loading ",e.name,"…"]}),children:Y.createElement(e.component)})})})}):"",!j&&z4.map(A=>l.jsx("div",{onMouseDown:J(A.dx,A.dy),style:{position:"absolute",zIndex:20,cursor:A.cursor,...A.box}},A.key))]},e.uuid),S&&Mt.createPortal(l.jsx("div",{style:{position:"fixed",left:S.x,top:S.y,width:S.w,height:S.h,border:"2px dotted #fff",mixBlendMode:"difference",pointerEvents:"none",zIndex:100001}}),document.body)]})},rf=({glyph:e,onClick:n,label:o})=>l.jsx(Ve,{"aria-label":o,onClick:n,style:{width:20,height:18,minWidth:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:e}),B4=()=>{const{processes:e}=Dn();return l.jsx(l.Fragment,{children:e.map(n=>l.jsx(F4,{process:n},n.uuid))})},W4="/clouds.jpg",H4=L.div`
    position: fixed;
    inset: 0;
    background: url(${W4}) center / cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`,Qx=L.label`
    display: grid;
    grid-template-columns: 86px 1fr;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-size: 13px;
`,U4=()=>{const{login:e,register:n}=Kn(),[o,i]=g.useState("login"),[a,u]=g.useState(""),[d,p]=g.useState(""),[h,m]=g.useState(null),[y,w]=g.useState(!1),S=async j=>{if(j.preventDefault(),!(y||!a.trim()||!d)){w(!0),m(null);try{o==="login"?await e(a.trim(),d):await n(a.trim(),d)}catch(b){m(b instanceof Error?b.message:"Sign in failed."),w(!1)}}},$=()=>{i(j=>j==="login"?"register":"login"),m(null)};return l.jsx(H4,{children:l.jsxs(li,{style:{width:360},children:[l.jsxs(si,{style:{display:"flex",alignItems:"center",gap:8},children:[l.jsx("img",{src:lr,alt:"",style:{width:18,height:18}}),l.jsx("span",{children:o==="login"?"Enter Network Password":"New VortexOS Account"})]}),l.jsx(Br,{children:l.jsxs("form",{onSubmit:S,children:[l.jsx("p",{style:{marginTop:0,marginBottom:14,fontSize:13},children:o==="login"?"Type a user name and password to log on to VortexOS.":"Choose a user name and password to create your account."}),l.jsxs(Qx,{children:["User name:",l.jsx(ar,{value:a,onChange:j=>u(j.target.value),disabled:y,autoFocus:!0})]}),l.jsxs(Qx,{children:["Password:",l.jsx(ar,{type:"password",value:d,onChange:j=>p(j.target.value),disabled:y})]}),h&&l.jsx("p",{style:{color:"#aa0000",fontSize:12,margin:"4px 0 10px"},children:h}),l.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,marginTop:6},children:[l.jsx(Ve,{type:"submit",primary:!0,disabled:y||!a.trim()||!d,children:y?"Please wait…":o==="login"?"OK":"Create"}),l.jsx(Ve,{type:"button",onClick:$,disabled:y,children:o==="login"?"New user…":"Cancel"})]})]})})]})})},V4=()=>{const{alert:e}=Rs(),n=g.useRef(0);return g.useEffect(()=>(n.current=Jf().length,zp(()=>{const o=Jf();for(let i=n.current;i<o.length;i++){const a=o[i];a.mine||(_w()==="classic"?e({title:`Message from ${a.from}`,message:a.body,type:"info"}):n$({title:`Message from ${a.from}`,body:a.body,type:"info",icon:ks,action:{kind:"open-app",exec:"messenger",name:"WinPopup",icon:ks}}))}n.current=o.length})),[e]),null},K4=40,Q4=6e3,q4=vt`
    from { transform: translateX(120%); opacity: 0; }
    to   { transform: translateX(0); opacity: 1; }
`,G4=L.div`
    position: fixed;
    right: 8px;
    bottom: ${K4+8}px;
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
    z-index: 100000;
    pointer-events: none;
`,Y4=L.div`
    width: 260px;
    background: #ffffe1;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
    padding: 0;
    font-size: 12px;
    pointer-events: auto;
    animation: ${q4} 0.18s ease-out;
`,X4=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(90deg, #000080, #1084d0);
    color: #fff;
    font-weight: bold;
    padding: 2px 4px;
`,J4={info:"#000080",warning:"#806000",error:"#800000"},Z4=({toast:e,onOpenApp:n})=>{g.useEffect(()=>{Dp();const a=setTimeout(()=>Dd(e.id),Q4);return()=>clearTimeout(a)},[e.id]);const o=!!e.action,i=()=>{var a;((a=e.action)==null?void 0:a.kind)==="open-app"&&n(e.action.exec,e.action.name,e.action.icon),Dd(e.id)};return l.jsxs(Y4,{$type:e.type,children:[l.jsxs(X4,{style:{background:`linear-gradient(90deg, ${J4[e.type]??"#000080"}, #1084d0)`},children:[l.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4},children:[l.jsx("img",{src:e.icon??lr,alt:"",style:{width:14,height:14}}),e.title]}),l.jsx("button",{"aria-label":"Close notification",onClick:a=>{a.stopPropagation(),Dd(e.id)},style:{width:16,height:14,lineHeight:"10px",fontSize:11,border:"1px solid #fff",background:"#c0c0c0",color:"#000",cursor:"pointer"},children:"×"})]}),l.jsxs("div",{onClick:o?i:void 0,style:{padding:"8px 10px",cursor:o?"pointer":"default",color:"#000"},children:[e.body,o&&l.jsx("div",{style:{marginTop:6,color:"#000080",textDecoration:"underline",fontSize:11},children:"Click to open"})]})]})},e5=()=>{const{addProcess:e}=Dn();g.useSyncExternalStore(Mw,()=>Gg().map(i=>i.id).join(","));const n=Gg(),o=(i,a,u)=>{e({name:a,icon:u,componentName:i})};return l.jsx(G4,{children:n.map(i=>l.jsx(Z4,{toast:i,onOpenApp:o},i.id))})},t5=vt`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`,n5=L.span`
    animation: ${t5} 1s step-end infinite;
`,r5=L.div`
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
`,o5=L.div`
    background: #c0c0c0;
    color: #0000aa;
    display: inline-block;
    padding: 0 8px;
    font-weight: bold;
    margin: 0 auto 28px;
`,i5=()=>{const e=MD(),n=Wr(),o=ui();return g.useEffect(()=>{e&&n1({kind:"kernel",app:"VortexOS Kernel",pid:null,message:e.message,stack:e.stack??""})},[e]),g.useEffect(()=>{if(!e)return;const i=()=>{n.clearPanic(),o("/"),window.location.assign("/")},a=u=>{if(u.preventDefault(),u.ctrlKey&&u.altKey&&(u.key==="Delete"||u.key==="Backspace")){i();return}e.recoverable?n.clearPanic():i()};return window.addEventListener("keydown",a,!0),()=>window.removeEventListener("keydown",a,!0)},[e,n,o]),e?l.jsxs(r5,{onClick:()=>n.clearPanic(),children:[l.jsx("div",{style:{textAlign:"center"},children:l.jsx(o5,{children:"VortexOS"})}),l.jsxs("p",{style:{margin:"0 0 18px"},children:["A fatal exception ",e.code," has occurred at ",e.address,". The current application will be terminated."]}),l.jsx("p",{style:{margin:"0 0 6px"},children:"*  Press any key to terminate the current application."}),l.jsxs("p",{style:{margin:"0 0 28px"},children:["*  Press CTRL+ALT+DEL again to restart your computer. You will",l.jsx("br",{}),"   lose any unsaved information in all applications."]}),e.syscall&&l.jsxs("p",{style:{margin:"0 0 28px",opacity:.7},children:["Faulting syscall: ",e.syscall," — ",e.message]}),l.jsxs("p",{style:{textAlign:"center",margin:0},children:["Press any key to continue ",l.jsx(n5,{children:"_"})]})]}):null};class s5 extends Y.Component{constructor(){super(...arguments);Ne(this,"state",{dead:!1})}static getDerivedStateFromError(){return{dead:!0}}componentDidCatch(o,i){this.props.onFatal(o,`${o.stack??o.message}
${i.componentStack??""}`)}render(){return this.state.dead?null:this.props.children}}const l5=({children:e})=>{const n=Wr();return l.jsx(s5,{onFatal:(o,i)=>n.panic({message:o.message,stack:i,recoverable:!1}),children:e})};function qx(e,n){const o=e.toLowerCase(),i=n.toLowerCase();if(o==="")return 1;let a=0,u=0,d=-2;for(let p=0;p<i.length&&u<o.length;p++)i[p]===o[u]&&(a+=1,p===d+1&&(a+=3),(p===0||i[p-1]===" "||i[p-1]==="/"||i[p-1]==="-"||i[p-1]==="_")&&(a+=5),p===0&&(a+=2),d=p,u++);return u<o.length?null:(a-=i.length*.05,i.startsWith(o)&&(a+=4),i===o&&(a+=10),a)}function a5(e,n){if(n.trim()==="")return[...e].sort((i,a)=>i.name.localeCompare(a.name));const o=[];for(const i of e){const a=Math.max(qx(n,i.name)??-1/0,(qx(n,i.exec)??-1/0)-2);a>-1/0&&o.push({app:i,score:a})}return o.sort((i,a)=>a.score-i.score||i.app.name.localeCompare(a.app.name)),o.map(i=>i.app)}const c5=L.div`
    position: fixed;
    inset: 0;
    z-index: 1500000;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 14vh;
    background: rgba(0, 0, 0, 0.25);
`,u5=L.div`
    width: 460px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #808080 #808080 #ffffff;
    box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.4);
`,d5=L.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-bottom: 1px solid #808080;
`,f5=L.input`
    flex: 1;
    font-family: "ms_sans_serif", "MS Sans Serif", sans-serif;
    font-size: 15px;
    padding: 4px 6px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    background: #fff;
    outline: none;
`,p5=L.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 13px;
    background: ${e=>e.$sel?"#000080":"transparent"};
    color: ${e=>e.$sel?"#fff":"#000"};
`,h5=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(""),[a,u]=g.useState(0),d=g.useRef(null),{addProcess:p}=Dn(),{logout:h}=Kn(),m=ui(),y=pc();g.useEffect(()=>{const C=v=>{v.ctrlKey&&(v.code==="Space"||v.key===" ")&&(v.preventDefault(),n(E=>!E))};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[]),g.useEffect(()=>{e&&(i(""),u(0),setTimeout(()=>{var C;return(C=d.current)==null?void 0:C.focus()},0))},[e]);const w=(C,v,E)=>p({name:v,icon:E,componentName:C}),S=g.useMemo(()=>{const C=Mr.filter(T=>!y.has(T.exec)).map(T=>({exec:T.exec,name:T.name,icon:T.icon,kind:"app",run:()=>w(T.exec,T.name,T.icon)})),v=[{exec:"run",name:"Run…",icon:lr,kind:"action",run:()=>e1()},{exec:"shutdown",name:"Shut Down…",icon:lr,kind:"action",run:()=>m("/shutdown")},{exec:"logoff",name:"Log Off",icon:lr,kind:"action",run:()=>h()}];return a5([...C,...v],o).slice(0,8)},[o,y]);if(g.useEffect(()=>u(0),[o]),!e)return null;const $=()=>n(!1),j=C=>{C&&(Yo(),$(),C.run())},b=C=>{if(C.key==="Escape")return $();C.key==="ArrowDown"?(C.preventDefault(),u(v=>Math.min(S.length-1,v+1))):C.key==="ArrowUp"?(C.preventDefault(),u(v=>Math.max(0,v-1))):C.key==="Enter"&&(C.preventDefault(),j(S[a]))};return Mt.createPortal(l.jsx(c5,{onMouseDown:$,children:l.jsxs(u5,{onMouseDown:C=>C.stopPropagation(),children:[l.jsxs(d5,{children:[l.jsx("img",{src:lr,alt:"",style:{width:22,height:22}}),l.jsx(f5,{ref:d,value:o,placeholder:"Search apps and actions…",onChange:C=>i(C.target.value),onKeyDown:b})]}),l.jsx("div",{style:{maxHeight:320,overflowY:"auto"},children:S.length===0?l.jsx("div",{style:{padding:12,color:"#555",fontSize:13},children:"No matches"}):S.map((C,v)=>l.jsxs(p5,{$sel:v===a,onMouseEnter:()=>u(v),onClick:()=>j(C),children:[l.jsx("img",{src:C.icon,alt:"",style:{width:18,height:18}}),l.jsx("span",{style:{flex:1},children:C.name}),l.jsx("span",{style:{fontSize:11,opacity:.6},children:C.kind==="action"?"Action":"App"})]},`${C.kind}:${C.exec}`))}),l.jsxs("div",{style:{borderTop:"1px solid #808080",padding:"3px 8px",fontSize:11,color:"#444",display:"flex",justifyContent:"space-between"},children:[l.jsx("span",{children:"↑↓ navigate · Enter run · Esc close"}),l.jsx("span",{children:"Ctrl+Space"})]})]})}),document.body)},lp=new Map;for(const e of Mr)lp.set(e.exec.toLowerCase(),e),lp.set(e.name.toLowerCase(),e);const m5=()=>{const e=d4(),n=nn(),{alert:o}=Rs(),[i,a]=g.useState(""),u=g.useRef(null);if(g.useEffect(()=>{e&&(a(op()[0]??""),setTimeout(()=>{var p;return(p=u.current)==null?void 0:p.focus()},0))},[e]),!e)return null;const d=async()=>{var S;const p=i.trim();if(!p)return;p4(p),ea();const h=lp.get(p.toLowerCase());if(h){n.spawn(h.exec);return}if(p.startsWith("/")||p.startsWith("~")){const $=p.startsWith("~")?p.replace(/^~/,"/home/user"):p;await Sv(n,$)||o({title:"Run",message:`Cannot find '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"});return}const y=await new Gw(n).run(p),w=(S=y.output)==null?void 0:S.trim();y.code!==0?o({title:"Run",message:w||`Cannot find the file '${p}'. Make sure you typed the name correctly, and then try again.`,type:"error"}):w&&o({title:`Run: ${p}`,message:w,type:"info"})};return Mt.createPortal(l.jsx("div",{style:{position:"fixed",inset:0,zIndex:14e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.15)"},onMouseDown:ea,children:l.jsxs(li,{style:{width:380},onMouseDown:p=>p.stopPropagation(),children:[l.jsxs(si,{style:{display:"flex",alignItems:"center",gap:6,...As(!0)},children:[l.jsx("img",{src:lr,alt:"",style:{width:16,height:16}}),"Run"]}),l.jsxs(Br,{children:[l.jsxs("div",{style:{display:"flex",gap:10,marginBottom:12},children:[l.jsx("img",{src:lr,alt:"",style:{width:32,height:32}}),l.jsx("p",{style:{margin:0,fontSize:12,lineHeight:1.4},children:"Type the name of a program, folder, document, or command, and VortexOS will open it for you."})]}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:16},children:[l.jsx("label",{style:{fontSize:12},children:"Open:"}),l.jsx("input",{ref:u,list:"run-mru",value:i,onChange:p=>a(p.target.value),onKeyDown:p=>{p.key==="Enter"&&d(),p.key==="Escape"&&ea()},style:{flex:1,fontFamily:"ms_sans_serif, sans-serif",fontSize:13,padding:"3px 5px",border:"2px solid",borderColor:"#808080 #fff #fff #808080",background:"#fff"}}),l.jsx("datalist",{id:"run-mru",children:[...op(),...kv()].map(p=>l.jsx("option",{value:p},p))})]}),l.jsxs("div",{style:{display:"flex",gap:8,justifyContent:"flex-end"},children:[l.jsx(Ve,{onClick:d,style:{minWidth:75},children:"OK"}),l.jsx(Ve,{onClick:ea,style:{minWidth:75},children:"Cancel"})]})]})]})}),document.body)},g5=()=>{var m;const{processes:e,changePriority:n}=Dn(),{restore:o}=Vt(),[i,a]=g.useState(!1),[u,d]=g.useState(0),p=g.useRef([]),h=g.useRef(0);return g.useEffect(()=>{h.current=u},[u]),g.useEffect(()=>{const y=S=>{if(S.key!=="Tab"||!S.altKey){S.key==="Escape"&&i&&a(!1);return}const $=e.filter(j=>j.uuid);if($.length!==0)if(S.preventDefault(),i){const j=p.current.length;d(b=>S.shiftKey?(b-1+j)%j:(b+1)%j)}else{const j=[...$].sort((C,v)=>(C.priority??0)-(v.priority??0));p.current=j,a(!0);const b=S.shiftKey?j.length-1:Math.min(1,j.length-1);d(b)}},w=S=>{if((S.key==="Alt"||!S.altKey)&&i){const $=p.current[h.current];$!=null&&$.uuid&&(o($.uuid),n($,0)),a(!1)}};return window.addEventListener("keydown",y),window.addEventListener("keyup",w),()=>{window.removeEventListener("keydown",y),window.removeEventListener("keyup",w)}},[e,i,n,o]),!i||p.current.length===0?null:l.jsx("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2e6,pointerEvents:"none"},children:l.jsxs("div",{style:{background:"#c0c0c0",border:"2px solid",borderColor:"#dfdfdf #000 #000 #dfdfdf",boxShadow:"3px 3px 0 rgba(0,0,0,0.4)",padding:16,maxWidth:"80vw"},children:[l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",maxWidth:560},children:p.current.map((y,w)=>l.jsx("div",{style:{width:72,height:72,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:4,border:w===u?"2px solid #000080":"2px solid transparent",background:w===u?"#000080":"transparent"},children:l.jsx("img",{src:y.icon,alt:"",style:{width:32,height:32,objectFit:"contain"}})},y.uuid))}),l.jsx("p",{style:{textAlign:"center",margin:"10px 0 0",fontSize:13},children:(m=p.current[u])==null?void 0:m.name})]})})},x5=()=>{const e=hc(),{flashBusy:n}=Vt(),o=g.useRef(new Set(e.map(a=>a.pid))),i=g.useRef(!1);return g.useEffect(()=>{const a=new Set(e.map(u=>u.pid));if(i.current){let u=!1,d=!1;a.forEach(p=>{o.current.has(p)||(u=!0)}),o.current.forEach(p=>{a.has(p)||(d=!0)}),u&&(G2(),n()),d&&Y2()}i.current=!0,o.current=a},[e,n]),null},y5=()=>{const{type:e,wait:n}=Nw(),[o,i]=g.useState(!1),a=g.useRef(Date.now()),u=g.useRef(null);return g.useEffect(()=>{const d=()=>{a.current=Date.now(),i(m=>m&&!1)};window.addEventListener("mousemove",d),window.addEventListener("mousedown",d),window.addEventListener("keydown",d),window.addEventListener("wheel",d);const p=setInterval(()=>{const m=Pw();m.type!=="none"&&Date.now()-a.current>m.wait*6e4&&i(!0)},1e3),h=F8(()=>i(!0));return()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mousedown",d),window.removeEventListener("keydown",d),window.removeEventListener("wheel",d),clearInterval(p),h()}},[n]),g.useEffect(()=>{if(!o)return;const d=u.current;if(!d)return;const p=d.getContext("2d");if(!p)return;let h=d.width=window.innerWidth,m=d.height=window.innerHeight;const y=()=>{h=d.width=window.innerWidth,m=d.height=window.innerHeight};window.addEventListener("resize",y);let w=0;const S=w5(e,()=>h,()=>m),$=()=>{S(p),w=requestAnimationFrame($)};return p.fillStyle="#000",p.fillRect(0,0,h,m),$(),()=>{cancelAnimationFrame(w),window.removeEventListener("resize",y)}},[o,e]),!o||e==="none"?null:l.jsx("canvas",{ref:u,style:{position:"fixed",inset:0,zIndex:5e6,background:"#000",cursor:"none"}})};function w5(e,n,o){return e==="mystify"?b5(n,o):e==="pipes"?k5(n,o):v5(n,o)}function v5(e,n){const i=Array.from({length:500},()=>({x:jn(-1,1),y:jn(-1,1),z:jn(.05,1)}));return a=>{const u=e(),d=n(),p=u/2,h=d/2;a.fillStyle="rgba(0,0,0,0.35)",a.fillRect(0,0,u,d),a.fillStyle="#fff";for(const m of i){m.z-=.006,m.z<=.02&&(m.x=jn(-1,1),m.y=jn(-1,1),m.z=1);const y=p+m.x/m.z*p,w=h+m.y/m.z*h;if(y<0||y>u||w<0||w>d)continue;const S=(1-m.z)*2.5;a.globalAlpha=Math.min(1,1-m.z+.2),a.beginPath(),a.arc(y,w,S,0,Math.PI*2),a.fill()}a.globalAlpha=1}}function b5(e,n){const o=e(),i=n(),a=d=>({hue:d,pts:Array.from({length:4},()=>({x:jn(0,o),y:jn(0,i),vx:jn(-3,3),vy:jn(-3,3)})),trail:[]}),u=[a(190),a(320)];return d=>{const p=e(),h=n();d.fillStyle="rgba(0,0,0,0.12)",d.fillRect(0,0,p,h);for(const m of u){for(const y of m.pts)y.x+=y.vx,y.y+=y.vy,(y.x<0||y.x>p)&&(y.vx*=-1),(y.y<0||y.y>h)&&(y.vy*=-1);m.trail.push(m.pts.map(y=>({x:y.x,y:y.y}))),m.trail.length>14&&m.trail.shift(),m.trail.forEach((y,w)=>{d.strokeStyle=`hsl(${m.hue}, 90%, ${20+w/m.trail.length*50}%)`,d.lineWidth=1.5,d.beginPath(),y.forEach((S,$)=>$===0?d.moveTo(S.x,S.y):d.lineTo(S.x,S.y)),d.closePath(),d.stroke()}),m.hue=(m.hue+.3)%360}}}function k5(e,n){let i=0,a=0,u=0,d=jn(0,360),p=Math.ceil(e()/26),h=Math.ceil(n()/26);i=Math.floor(p/2),a=Math.floor(h/2);let m=0;return y=>{p=Math.ceil(e()/26),h=Math.ceil(n()/26);for(let w=0;w<2;w++){const S=i*26+13,$=a*26+26/2;Math.random()<.15&&(u=(u+(Math.random()<.5?1:3))%4);const[j,b]=[[1,0],[0,1],[-1,0],[0,-1]][u];i+=j,a+=b,(i<0||i>=p||a<0||a>=h||++m>1400)&&(i=Math.floor(Math.random()*p),a=Math.floor(Math.random()*h),d=jn(0,360),m=0);const C=i*26+26/2,v=a*26+26/2;y.strokeStyle=`hsl(${d}, 80%, 55%)`,y.lineWidth=8,y.lineCap="round",y.beginPath(),y.moveTo(S,$),y.lineTo(C,v),y.stroke(),y.fillStyle=`hsl(${d}, 80%, 65%)`,y.beginPath(),y.arc(C,v,5,0,Math.PI*2),y.fill()}}}function jn(e,n){return e+Math.random()*(n-e)}const S5=L.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 60000;
    display: flex;
    align-items: center;
    justify-content: center;
`,j5=L.div`
    width: 540px;
    max-width: 94vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 5px 5px 18px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
`,C5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,E5=L.button`
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
`,$5=L.div`
    display: flex;
    height: 300px;
`,T5=L.div`
    width: 150px;
    flex-shrink: 0;
    background: linear-gradient(160deg, #1d0540 0%, #3a0a6b 45%, #00231f 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 14px;
`,A5=L.div`
    text-align: center;
    color: #fff;
    font-weight: 800;
    font-size: 17px;
    letter-spacing: 1px;
    background: linear-gradient(90deg, #ff2d95, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,R5=L.div`
    flex: 1;
    padding: 18px 20px;
    background: #c0c0c0;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    line-height: 1.55;
`,D5=L.h2`
    margin: 0 0 10px;
    font-size: 17px;
    color: #000080;
`,I5=L.button`
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
`,P5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px;
    border-top: 1px solid #808080;
    box-shadow: inset 0 1px 0 #ffffff;
`,N5=L.div`
    display: flex;
    gap: 6px;
`,L5=L.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({$on:e})=>e?"#000080":"#808080"};
    box-shadow: ${({$on:e})=>e?"0 0 5px #1084d0":"none"};
`,of=L.button`
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
`,M5=L.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,O5=()=>{const{username:e,isAuthenticated:n}=Kn(),{addProcess:o}=Dn(),[i,a]=g.useState(!1),[u,d]=g.useState(0),[p,h]=g.useState(!0),m=g.useRef(!1),y=(b,C,v)=>o({name:C,icon:v,componentName:b}),w=[{title:`Welcome${e?`, ${e}`:""}!`,body:l.jsxs("p",{children:["This is ",l.jsx("b",{children:"VortexOS"})," — a desktop operating system that runs in your browser, built on a"," ",l.jsx("b",{children:"real microkernel"}),": a virtual filesystem, processes, a command shell and a window manager. No emulator, no clone. Let's take a quick tour."]})},{title:"The Start menu & desktop",body:l.jsxs("p",{children:["Everything launches from the ",l.jsx("b",{children:"Start"})," button. Drag desktop icons anywhere, right-click the desktop for a menu, and use the taskbar tray for volume, the clock and notifications."]})},{title:"Command Palette",body:l.jsxs("p",{children:["Press ",l.jsx("b",{children:"Ctrl + Space"})," anywhere to open the Command Palette — a fuzzy launcher for every app and system action. It's the fastest way to get around VortexOS."]}),action:{label:"Try it now",run:()=>{try{window.dispatchEvent(new KeyboardEvent("keydown",{key:" ",code:"Space",ctrlKey:!0,bubbles:!0}))}catch{}}}},{title:"Apps & games",body:l.jsxs("p",{children:["Real productivity apps — ",l.jsx("b",{children:"Notes"}),", ",l.jsx("b",{children:"Paint"}),", ",l.jsx("b",{children:"Calculator"}),", ",l.jsx("b",{children:"WordPad"})," — save to the filesystem. And a full games suite — ",l.jsx("b",{children:"Solitaire"}),", ",l.jsx("b",{children:"Minesweeper"}),", ",l.jsx("b",{children:"FreeCell"}),","," ",l.jsx("b",{children:"Snake"})," — with high scores synced to your account."]}),action:{label:"Play Solitaire",run:()=>y("solitaire","Solitaire","/solitaire.svg")}},{title:"Connect & personalize",body:l.jsxs("p",{children:["Other people are here too. Browse their shared files in ",l.jsx("b",{children:"Network Neighborhood"})," and chat over"," ",l.jsx("b",{children:"WinPopup"}),". Make it yours in ",l.jsx("b",{children:"Control Panel"})," — wallpaper, themes, screensavers, and the"," ",l.jsx("b",{children:"Serious Sam Style"})," vaporwave toggle."]}),action:{label:"Open Control Panel",run:()=>y("control_panel","Control Panel","/controlpanel.png")}},{title:"You're all set",body:l.jsxs("p",{children:["That's the tour. You can re-open it any time from ",l.jsx("b",{children:"Help ▸ Welcome Tour"}),". Welcome aboard — enjoy VortexOS.",l.jsx("br",{}),l.jsx("br",{}),l.jsx("i",{children:"— a creation by Serious Sam"})]})}],S=u===w.length-1;g.useEffect(()=>{!n||m.current||(m.current=!0,Ev(e||"user")||setTimeout(()=>{d(0),a(!0)},700))},[n,e]),g.useEffect(()=>wR(()=>{d(0),a(!0)}),[]);const $=()=>{p&&pR(e||"user"),a(!1),wa()&&setTimeout(()=>Tv(),350)};if(!i)return null;const j=w[u];return Mt.createPortal(l.jsx(S5,{onMouseDown:b=>b.target===b.currentTarget&&$(),children:l.jsxs(j5,{role:"dialog","aria-label":"Welcome to VortexOS",children:[l.jsxs(C5,{style:As(!0),children:[l.jsx("span",{children:"Welcome to VortexOS"}),l.jsx(E5,{onClick:$,title:"Close",children:"×"})]}),l.jsxs($5,{children:[l.jsxs(T5,{children:[l.jsx(ri,{size:92,vapor:!0}),l.jsx(A5,{children:"VortexOS"})]}),l.jsxs(R5,{children:[l.jsx(D5,{children:j.title}),l.jsx("div",{children:j.body}),j.action&&l.jsx(I5,{onClick:j.action.run,children:j.action.label})]})]}),l.jsxs(P5,{children:[l.jsxs(M5,{children:[l.jsx("input",{type:"checkbox",checked:p,onChange:b=>h(b.target.checked)}),"Don't show this again"]}),l.jsx(N5,{children:w.map((b,C)=>l.jsx(L5,{$on:C===u},C))}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(of,{onClick:()=>d(b=>Math.max(0,b-1)),disabled:u===0,children:"‹ Back"}),S?l.jsx(of,{$primary:!0,onClick:$,children:"Finish"}):l.jsx(of,{$primary:!0,onClick:()=>d(b=>Math.min(w.length-1,b+1)),children:"Next ›"})]})]})]})}),document.body)},z5=L.div`
    position: fixed;
    inset: 0;
    z-index: 59000;
    display: flex;
    align-items: center;
    justify-content: center;
`,_5=L.div`
    width: 440px;
    max-width: 92vw;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    box-shadow: 2px 2px 0 #000, 4px 4px 14px rgba(0, 0, 0, 0.45);
    display: flex;
    flex-direction: column;
`,F5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    padding: 0 3px 0 6px;
    font-size: 13px;
`,B5=L.button`
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
`,W5=L.div`
    display: flex;
    gap: 14px;
    padding: 18px 16px;
`,H5=L.div`
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
`,U5=L.div`
    flex: 1;
    background: #ffffff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 12px 14px;
    min-height: 96px;
    font-size: 13px;
    line-height: 1.55;
`,V5=L.div`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 6px;
`,K5=L.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 12px;
`,Q5=L.label`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    cursor: pointer;
`,Gx=L.button`
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
`,q5=()=>{const{username:e,isAuthenticated:n}=Kn(),[o,i]=g.useState(!1),[a,u]=g.useState(0),[d,p]=g.useState(wa()),h=g.useRef(!1);g.useEffect(()=>{!n||h.current||wa()&&Ev(e||"user")&&(h.current=!0,setTimeout(()=>{u(Math.floor(Date.now()/864e5)%Go.length),p(!0),i(!0)},900))},[n,e]),g.useEffect(()=>vR(()=>{h.current=!0,p(wa()),i(!0)}),[]);const m=y=>{p(y),gR(y)};return o?Mt.createPortal(l.jsx(z5,{children:l.jsxs(_5,{role:"dialog","aria-label":"Tip of the Day",children:[l.jsxs(F5,{style:As(!0),children:[l.jsx("span",{children:"Tip of the Day"}),l.jsx(B5,{onClick:()=>i(!1),title:"Close",children:"×"})]}),l.jsxs(W5,{children:[l.jsx(H5,{children:"💡"}),l.jsxs(U5,{children:[l.jsx(V5,{children:"Did you know…"}),l.jsx("div",{children:xR(a)})]})]}),l.jsxs(K5,{children:[l.jsxs(Q5,{children:[l.jsx("input",{type:"checkbox",checked:d,onChange:y=>m(y.target.checked)}),"Show tips at startup"]}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx(Gx,{onClick:()=>u(y=>y+1),children:"Next Tip"}),l.jsx(Gx,{onClick:()=>i(!1),children:"Close"})]})]})]})}),document.body):null},G5=9e3,Y5=6e3,X5=3e4,J5=75e3,Z5=12e3,eI=vt`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
`,tI=vt`
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.12); }
`,nI=vt`
    0%, 92%, 100% { transform: scaleY(1); }
    96% { transform: scaleY(0.08); }
`,rI=vt`to { transform: rotate(360deg); }`,oI=vt`
    0% { transform: scale(0.6); opacity: 0; }
    60% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
`,iI=vt`
    0% { transform: scale(1); }
    40% { transform: scale(1.16) rotate(-4deg); }
    100% { transform: scale(1); }
`,sI=L.div`
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 58000;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    pointer-events: none;
`,lI=L.div`
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
    animation: ${oI} 0.28s cubic-bezier(0.18, 0.9, 0.3, 1.2);
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
`,aI=L.div`
    font-weight: 800;
    font-size: 11px;
    letter-spacing: 0.4px;
    margin-bottom: 3px;
    background: linear-gradient(90deg, #d6177f, #0aa89a);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,cI=L.div`
    margin-top: 9px;
    display: flex;
    gap: 8px;
`,uI=L.button`
    font-size: 12px;
    padding: 3px 11px;
    background: #c0c0c0;
    border: 2px solid;
    border-color: #ffffff #000000 #000000 #ffffff;
    cursor: pointer;
    &:active {
        border-color: #000000 #ffffff #ffffff #000000;
    }
`,dI=L.button`
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
`,fI=L.div`
    pointer-events: auto;
    position: relative;
    width: 84px;
    height: 84px;
    cursor: pointer;
    animation: ${eI} 3.4s ease-in-out infinite;
    &:hover .vx-hide {
        opacity: 1;
    }
`,pI=L.div`
    width: 100%;
    height: 100%;
    /* re-keyed by $pop to retrigger the pop animation on each speak */
    animation: ${iI} 0.5s ease;
`,hI=L.div`
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle, #ff2d9577 0%, #00e5d000 70%);
    animation: ${tI} 2.6s ease-in-out infinite;
    pointer-events: none;
`,mI=L.button`
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
`,gI=L.g`
    transform-origin: 50px 46px;
    animation: ${nI} 4.5s infinite;
`,xI=L.path`
    transform-origin: 50px 50px;
    animation: ${rI} 7s linear infinite;
`,yI=()=>{const e=kR(),n=hc(),{addProcess:o}=Dn(),[i,a]=g.useState(null),[u,d]=g.useState(0),p=g.useRef(new Set),h=g.useRef(!1),m=g.useRef(0),y=g.useRef(0),w=g.useRef(Date.now()),S=g.useRef(Kx().length),$=g.useRef(!1),j=g.useRef(null),b=g.useCallback(v=>{y.current=Date.now(),a(v),d(E=>E+1),j.current&&clearTimeout(j.current),j.current=setTimeout(()=>a(null),G5)},[]),C=g.useCallback((v,E,T)=>o({name:E,icon:T,componentName:v}),[o]);return g.useEffect(()=>{!e||$.current||($.current=!0,setTimeout(()=>b({text:AR()}),2200))},[e,b]),g.useEffect(()=>{if(!e)return;const v=()=>w.current=Date.now(),E=["mousemove","mousedown","keydown","wheel"];E.forEach(N=>window.addEventListener(N,v,{passive:!0}));const T=setInterval(()=>{const N=Date.now(),_=N-w.current>X5,K=N-y.current>J5;_&&K&&!document.hidden&&b({text:vx()})},Z5);return()=>{E.forEach(N=>window.removeEventListener(N,v)),clearInterval(T)}},[e,b]),g.useEffect(()=>{if(e)return M4(()=>{const v=Kx();if(v.length<=S.current){S.current=v.length;return}S.current=v.length,b({text:RR(),action:{label:"Task Manager",run:()=>C("task_manager","Task Manager","/task_manager.png")}})})},[e,b,C]),g.useEffect(()=>{if(e)return jR(v=>b(v))},[e,b]),g.useEffect(()=>{const v=new Set(n.map(E=>E.pid));if(h.current&&e){const E=n.find(N=>!p.current.has(N.pid)),T=Date.now();if(E&&T-m.current>Y5){const N=TR(E.exec);N&&(m.current=T,b({text:N}))}}h.current=!0,p.current=v},[n,e,b]),e?l.jsxs(sI,{children:[i&&l.jsxs(lI,{role:"status",children:[l.jsx(aI,{children:"Vortex"}),l.jsx("div",{children:i.text}),i.action&&l.jsxs(cI,{children:[l.jsx(uI,{onClick:()=>{i.action.run(),a(null)},children:i.action.label}),l.jsx(dI,{onClick:()=>a(null),children:"Dismiss"})]})]}),l.jsxs(fI,{title:"Vortex — click for a tip",onClick:()=>b({text:vx()}),children:[l.jsx(mI,{className:"vx-hide",title:"Hide Vortex (re-enable from Help)",onClick:v=>{v.stopPropagation(),Dv(!1)},children:"×"}),l.jsx(hI,{}),l.jsx(pI,{$pop:u,children:l.jsxs("svg",{viewBox:"0 0 100 100",width:84,height:84,style:{display:"block"},children:[l.jsxs("defs",{children:[l.jsxs("radialGradient",{id:"vx-body",cx:"42%",cy:"36%",r:"70%",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff8fd4"}),l.jsx("stop",{offset:"45%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#3a0a6b"})]}),l.jsxs("linearGradient",{id:"vx-rim",x1:"0",y1:"0",x2:"1",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#ff2d95"}),l.jsx("stop",{offset:"100%",stopColor:"#00e5d0"})]})]}),l.jsx("circle",{cx:"50",cy:"50",r:"33",fill:"url(#vx-body)",stroke:"url(#vx-rim)",strokeWidth:"3"}),l.jsx(xI,{d:"M50 30 A20 20 0 1 1 30 50",fill:"none",stroke:"#ffffff",strokeWidth:"3",strokeLinecap:"round",opacity:"0.55"}),l.jsxs(gI,{children:[l.jsx("ellipse",{cx:"40",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("ellipse",{cx:"60",cy:"46",rx:"7",ry:"9",fill:"#fff"}),l.jsx("circle",{cx:"41.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"61.5",cy:"47",r:"3.4",fill:"#1a0033"}),l.jsx("circle",{cx:"43",cy:"45",r:"1.1",fill:"#fff"}),l.jsx("circle",{cx:"63",cy:"45",r:"1.1",fill:"#fff"})]}),l.jsx("path",{d:"M42 62 Q50 69 58 62",fill:"none",stroke:"#fff",strokeWidth:"2.6",strokeLinecap:"round",opacity:"0.85"})]})},u)]})]}):null},wI=5500,Yx=["#ff2d95","#00e5d0","#a14bff","#ffd83a","#1084d0","#ff8fd4"],vI=vt`
    0% { transform: scale(0.4) rotate(-8deg); opacity: 0; }
    55% { transform: scale(1.12) rotate(2deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
`,bI=vt`to { filter: hue-rotate(360deg); }`,kI=L.div`
    position: fixed;
    inset: 0;
    z-index: 70000;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
`,SI=L.div`
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
    animation: ${vI} 0.6s cubic-bezier(0.2, 0.9, 0.3, 1.3), ${bI} 3s linear infinite;
`,jI=L.canvas`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
`,CI=vt`
    0% { transform: translateY(100vh); }
    100% { transform: translateY(-130%); }
`,EI=L.div`
    position: fixed;
    inset: 0;
    z-index: 71000;
    background: radial-gradient(80% 80% at 50% 40%, #0a0118 0%, #000 100%);
    overflow: hidden;
    cursor: pointer;
`,$I=L.div`
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    color: #eee;
    font-family: "Segoe UI", Tahoma, sans-serif;
    animation: ${CI} 22s linear infinite;
`,sf=L.div`
    font-size: 40px;
    font-weight: 900;
    letter-spacing: 2px;
    background: linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,TI=L.div`
    position: fixed;
    bottom: 18px;
    right: 22px;
    color: #888;
    font-size: 12px;
    font-family: "Segoe UI", sans-serif;
`,AI=()=>{const[e,n]=g.useState(!1),[o,i]=g.useState(!1),a=g.useRef(null);return g.useEffect(()=>u$(()=>{nc("konami"),n(!0),ho(),SR({text:"🌀 You found the Konami code — VORTEX MODE engaged!"})}),[]),g.useEffect(()=>a$(()=>n(!0)),[]),g.useEffect(()=>c$(()=>{i(!0),ho()}),[]),g.useEffect(()=>{if(!e)return;const u=a.current;if(!u)return;const d=u.getContext("2d");if(!d)return;const p=u.width=window.innerWidth,h=u.height=window.innerHeight,m=Array.from({length:160},()=>({x:Math.random()*p,y:Math.random()*-h,vx:(Math.random()-.5)*3,vy:2+Math.random()*4,size:5+Math.random()*7,color:Yx[Math.floor(Math.random()*Yx.length)],rot:Math.random()*Math.PI,vr:(Math.random()-.5)*.3}));let y=0;const w=()=>{d.clearRect(0,0,p,h),m.forEach($=>{$.x+=$.vx,$.y+=$.vy,$.vy+=.04,$.rot+=$.vr,$.y>h+20&&($.y=-20,$.x=Math.random()*p,$.vy=2+Math.random()*4),d.save(),d.translate($.x,$.y),d.rotate($.rot),d.fillStyle=$.color,d.fillRect(-$.size/2,-$.size/2,$.size,$.size*.6),d.restore()}),y=requestAnimationFrame(w)};w();const S=setTimeout(()=>n(!1),wI);return()=>{cancelAnimationFrame(y),clearTimeout(S)}},[e]),g.useEffect(()=>{if(!o)return;const u=d=>{d.key==="Escape"&&i(!1)};return window.addEventListener("keydown",u),()=>window.removeEventListener("keydown",u)},[o]),l.jsxs(l.Fragment,{children:[e&&Mt.createPortal(l.jsxs(kI,{children:[l.jsx(jI,{ref:a}),l.jsx(SI,{children:"VORTEX MODE"})]}),document.body),o&&Mt.createPortal(l.jsxs(EI,{onClick:()=>i(!1),children:[l.jsxs($I,{children:[l.jsx("div",{style:{height:40}}),l.jsx(sf,{children:"VortexOS 2.0"}),l.jsx("p",{style:{color:"#b9b9c8"},children:"Experimental Edition"}),l.jsx("div",{style:{height:40}}),l.jsx("p",{style:{color:"#888",fontSize:13},children:"a creation by"}),l.jsx(sf,{style:{fontSize:52},children:"SERIOUS SAM"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontWeight:700,color:"#00e5d0"},children:"The Microkernel"}),l.jsx("p",{children:"Syscall ABI · Process scheduler"}),l.jsx("p",{children:"Per-process file descriptors"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#ff67c8"},children:"The System"}),l.jsx("p",{children:"Virtual File System · OPFS"}),l.jsx("p",{children:"Real shell & coreutils"}),l.jsx("p",{children:"Window manager · compositor-free"}),l.jsx("p",{children:"Multi-user accounts & networking"}),l.jsx("div",{style:{height:36}}),l.jsx("p",{style:{fontWeight:700,color:"#a14bff"},children:"The Desktop"}),l.jsx("p",{children:"Every app, hand-built"}),l.jsx("p",{children:"The games · The tray · The assistant"}),l.jsx("div",{style:{height:60}}),l.jsx("p",{style:{fontSize:18},children:"Built from scratch in a browser."}),l.jsx("p",{style:{fontSize:18,color:"#00e5d0"},children:"No emulator. No clone."}),l.jsx("div",{style:{height:50}}),l.jsx("p",{style:{color:"#888"},children:"Special thanks:"}),l.jsx("p",{style:{fontSize:20},children:"You, for exploring. 🌀"}),l.jsx("div",{style:{height:80}}),l.jsx(sf,{style:{fontSize:30},children:"VortexOS"}),l.jsx("div",{style:{height:60}})]}),l.jsx(TI,{children:"Press Esc or click to close"})]}),document.body)]})},RI=()=>{const{uiScale:e,reduceMotion:n,pointerScheme:o}=rn(),{changeCursor:i}=Vt();return g.useEffect(()=>(e===100?document.documentElement.style.removeProperty("zoom"):document.documentElement.style.setProperty("zoom",String(e/100)),()=>{document.documentElement.style.removeProperty("zoom")}),[e]),g.useEffect(()=>{n?document.documentElement.setAttribute("data-reduce-motion",""):document.documentElement.removeAttribute("data-reduce-motion")},[n]),g.useEffect(()=>{i(o)},[o]),null},DI=()=>{const{cursor:e,crt:n,busy:o,reloadWallpaper:i}=Vt(),{isAuthenticated:a}=Kn(),u=ND();return g.useEffect(()=>{a&&(u(),i())},[a]),g.useEffect(()=>{if(a)return _R(),()=>FR()},[a]),a?l.jsxs("div",{style:{position:"fixed",inset:0,overflow:"hidden",cursor:o?"url(/win-cursor/loading.cur), wait":e},onContextMenu:d=>d.preventDefault(),children:[l.jsxs(l5,{children:[l.jsx(i4,{}),l.jsx(B4,{}),l.jsx(N4,{}),l.jsx(V4,{}),l.jsx(e5,{}),l.jsx(g5,{}),l.jsx(x5,{}),l.jsx(y5,{}),l.jsx(h5,{}),l.jsx(m5,{}),l.jsx(O5,{}),l.jsx(q5,{}),l.jsx(yI,{}),l.jsx(AI,{}),l.jsx(RI,{})]}),l.jsx(i5,{}),n&&l.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:1e6,background:"repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",mixBlendMode:"multiply"},children:l.jsx("div",{style:{position:"absolute",inset:0,boxShadow:"inset 0 0 150px rgba(0,0,0,0.55)"}})})]}):l.jsx(U4,{})},r1=vt`from { opacity: 0 } to { opacity: 1 }`,o1=L.div`
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
`,II=L(o1)`
    background: ${({$vapor:e})=>e?"radial-gradient(110% 80% at 50% 42%, #1d0540 0%, #0a0118 55%, #000 100%)":"#008080"};
    animation: ${r1} 0.4s ease;
`,PI=L.h1`
    margin: 22px 0 0;
    font-family: "Segoe UI", "Tahoma", sans-serif;
    font-size: 34px;
    font-weight: 800;
    letter-spacing: 2px;
    background: ${({$vapor:e})=>e?"linear-gradient(90deg, #ff2d95, #a14bff, #00e5d0)":"linear-gradient(90deg, #ffffff, #cfe9e9)"};
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`,NI=L(o1)`
    background: #000;
    gap: 34px;
`,LI=L.p`
    color: #ffa000;
    font-size: 26px;
    text-align: center;
    padding: 0 20px;
    text-shadow: 0 0 10px rgba(255, 160, 0, 0.35);
    animation: ${r1} 0.6s ease;
`,MI=L.button`
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
`,OI=()=>{const e=ui(),{sssStyle:n}=Vt(),o=n,[i,a]=g.useState("closing");return g.useEffect(()=>{Z2();const u=setTimeout(()=>a("off"),2600);return()=>clearTimeout(u)},[]),i==="closing"?l.jsxs(II,{$vapor:o,children:[l.jsx(ri,{size:120,vapor:o}),l.jsx(PI,{$vapor:o,children:"VortexOS"}),l.jsx("p",{style:{marginTop:26,fontSize:14,color:o?"#cfcfe0":"#fff"},children:"Please wait while VortexOS shuts down…"})]}):l.jsxs(NI,{children:[l.jsx(LI,{children:"It's now safe to turn off your computer."}),l.jsx(MI,{onClick:()=>e("/"),children:"Restart"})]})},zI=()=>{const{wallpaper:e,sssStyle:n}=Vt(),o=()=>e.image?e.type===2?{background:e.image}:{backgroundImage:`url('/${e.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:n?{backgroundImage:"url('/wallpapers/vw-5.jpg')",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:"#1a0033"}:{background:"#008080"};return l.jsx("div",{style:{...o(),width:"100vw",height:"100vh",overflow:"hidden"},children:l.jsxs($E,{children:[l.jsx(la,{path:"/",element:l.jsx(XD,{})}),l.jsx(la,{path:"/vortex",element:l.jsx(DI,{})}),l.jsx(la,{path:"/shutdown",element:l.jsx(OI,{})})]})})},_I=({children:e})=>{const{theme:n}=Vt();return l.jsx(lS,{theme:M8(n),children:e})},FI=uS`
  ${dS}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${MC}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${OC}') format('woff2');
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
`,BI=()=>l.jsxs(XE,{children:[l.jsx(FI,{}),l.jsx(PD,{children:l.jsx(_2,{children:l.jsx(_I,{children:l.jsx(OD,{children:l.jsx(r8,{children:l.jsx(S$,{children:l.jsx(zI,{})})})})})})})]});let Xx=!1;function WI(){Xx||(Xx=!0,Ke.interceptors.request.use(e=>{const n=ec();return n&&(e.headers=e.headers??{},e.headers.Authorization=`Bearer ${n}`),e}),Ke.interceptors.response.use(e=>e,e=>{var o,i;const n=((o=e==null?void 0:e.config)==null?void 0:o.url)??"";return((i=e==null?void 0:e.response)==null?void 0:i.status)===401&&!n.includes("/auth/")&&Cw(),Promise.reject(e)}))}WI();f$();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(()=>{})});ck.createRoot(document.getElementById("root")).render(l.jsx(g.StrictMode,{children:l.jsx(BI,{})}));export{Et as A,Ve as B,ft as C,wt as F,gn as M,Wj as P,My as S,ar as T,Br as W,Ke as a,Rs as b,Be as c,L as d,Ae as e,mn as f,Pt as g,ze as h,xf as i,l as j,ec as k,vt as m,g as r,Vt as u};
