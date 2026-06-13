var Z0=Object.defineProperty;var ev=(t,r,i)=>r in t?Z0(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;var We=(t,r,i)=>ev(t,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();function Vh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bu={exports:{}},ii={},Cu={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function tv(){if(Dp)return Se;Dp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),y=Symbol.iterator;function S(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,C={};function b(N,F,X){this.props=N,this.context=F,this.refs=C,this.updater=X||T}b.prototype.isReactComponent={},b.prototype.setState=function(N,F){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,F,"setState")},b.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function $(){}$.prototype=b.prototype;function R(N,F,X){this.props=N,this.context=F,this.refs=C,this.updater=X||T}var O=R.prototype=new $;O.constructor=R,k(O,b.prototype),O.isPureReactComponent=!0;var W=Array.isArray,Q=Object.prototype.hasOwnProperty,K={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function fe(N,F,X){var Z,oe={},te=null,se=null;if(F!=null)for(Z in F.ref!==void 0&&(se=F.ref),F.key!==void 0&&(te=""+F.key),F)Q.call(F,Z)&&!q.hasOwnProperty(Z)&&(oe[Z]=F[Z]);var pe=arguments.length-2;if(pe===1)oe.children=X;else if(1<pe){for(var z=Array(pe),ue=0;ue<pe;ue++)z[ue]=arguments[ue+2];oe.children=z}if(N&&N.defaultProps)for(Z in pe=N.defaultProps,pe)oe[Z]===void 0&&(oe[Z]=pe[Z]);return{$$typeof:t,type:N,key:te,ref:se,props:oe,_owner:K.current}}function ge(N,F){return{$$typeof:t,type:N.type,key:F,ref:N.ref,props:N.props,_owner:N._owner}}function Ce(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function Le(N){var F={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(X){return F[X]})}var be=/\/+/g;function Pe(N,F){return typeof N=="object"&&N!==null&&N.key!=null?Le(""+N.key):F.toString(36)}function Te(N,F,X,Z,oe){var te=typeof N;(te==="undefined"||te==="boolean")&&(N=null);var se=!1;if(N===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(N.$$typeof){case t:case r:se=!0}}if(se)return se=N,oe=oe(se),N=Z===""?"."+Pe(se,0):Z,W(oe)?(X="",N!=null&&(X=N.replace(be,"$&/")+"/"),Te(oe,F,X,"",function(ue){return ue})):oe!=null&&(Ce(oe)&&(oe=ge(oe,X+(!oe.key||se&&se.key===oe.key?"":(""+oe.key).replace(be,"$&/")+"/")+N)),F.push(oe)),1;if(se=0,Z=Z===""?".":Z+":",W(N))for(var pe=0;pe<N.length;pe++){te=N[pe];var z=Z+Pe(te,pe);se+=Te(te,F,X,z,oe)}else if(z=S(N),typeof z=="function")for(N=z.call(N),pe=0;!(te=N.next()).done;)te=te.value,z=Z+Pe(te,pe++),se+=Te(te,F,X,z,oe);else if(te==="object")throw F=String(N),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return se}function $e(N,F,X){if(N==null)return N;var Z=[],oe=0;return Te(N,Z,"","",function(te){return F.call(X,te,oe++)}),Z}function Ne(N){if(N._status===-1){var F=N._result;F=F(),F.then(function(X){(N._status===0||N._status===-1)&&(N._status=1,N._result=X)},function(X){(N._status===0||N._status===-1)&&(N._status=2,N._result=X)}),N._status===-1&&(N._status=0,N._result=F)}if(N._status===1)return N._result.default;throw N._result}var ke={current:null},B={transition:null},J={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:B,ReactCurrentOwner:K};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:$e,forEach:function(N,F,X){$e(N,function(){F.apply(this,arguments)},X)},count:function(N){var F=0;return $e(N,function(){F++}),F},toArray:function(N){return $e(N,function(F){return F})||[]},only:function(N){if(!Ce(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Se.Component=b,Se.Fragment=i,Se.Profiler=a,Se.PureComponent=R,Se.StrictMode=l,Se.Suspense=h,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Se.act=Y,Se.cloneElement=function(N,F,X){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Z=k({},N.props),oe=N.key,te=N.ref,se=N._owner;if(F!=null){if(F.ref!==void 0&&(te=F.ref,se=K.current),F.key!==void 0&&(oe=""+F.key),N.type&&N.type.defaultProps)var pe=N.type.defaultProps;for(z in F)Q.call(F,z)&&!q.hasOwnProperty(z)&&(Z[z]=F[z]===void 0&&pe!==void 0?pe[z]:F[z])}var z=arguments.length-2;if(z===1)Z.children=X;else if(1<z){pe=Array(z);for(var ue=0;ue<z;ue++)pe[ue]=arguments[ue+2];Z.children=pe}return{$$typeof:t,type:N.type,key:oe,ref:te,props:Z,_owner:se}},Se.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:c,_context:N},N.Consumer=N},Se.createElement=fe,Se.createFactory=function(N){var F=fe.bind(null,N);return F.type=N,F},Se.createRef=function(){return{current:null}},Se.forwardRef=function(N){return{$$typeof:p,render:N}},Se.isValidElement=Ce,Se.lazy=function(N){return{$$typeof:w,_payload:{_status:-1,_result:N},_init:Ne}},Se.memo=function(N,F){return{$$typeof:m,type:N,compare:F===void 0?null:F}},Se.startTransition=function(N){var F=B.transition;B.transition={};try{N()}finally{B.transition=F}},Se.unstable_act=Y,Se.useCallback=function(N,F){return ke.current.useCallback(N,F)},Se.useContext=function(N){return ke.current.useContext(N)},Se.useDebugValue=function(){},Se.useDeferredValue=function(N){return ke.current.useDeferredValue(N)},Se.useEffect=function(N,F){return ke.current.useEffect(N,F)},Se.useId=function(){return ke.current.useId()},Se.useImperativeHandle=function(N,F,X){return ke.current.useImperativeHandle(N,F,X)},Se.useInsertionEffect=function(N,F){return ke.current.useInsertionEffect(N,F)},Se.useLayoutEffect=function(N,F){return ke.current.useLayoutEffect(N,F)},Se.useMemo=function(N,F){return ke.current.useMemo(N,F)},Se.useReducer=function(N,F,X){return ke.current.useReducer(N,F,X)},Se.useRef=function(N){return ke.current.useRef(N)},Se.useState=function(N){return ke.current.useState(N)},Se.useSyncExternalStore=function(N,F,X){return ke.current.useSyncExternalStore(N,F,X)},Se.useTransition=function(){return ke.current.useTransition()},Se.version="18.3.1",Se}var Lp;function hc(){return Lp||(Lp=1,Cu.exports=tv()),Cu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function nv(){if(Op)return ii;Op=1;var t=hc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(p,h,m){var w,y={},S=null,T=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(T=h.ref);for(w in h)l.call(h,w)&&!c.hasOwnProperty(w)&&(y[w]=h[w]);if(p&&p.defaultProps)for(w in h=p.defaultProps,h)y[w]===void 0&&(y[w]=h[w]);return{$$typeof:r,type:p,key:S,ref:T,props:y,_owner:a.current}}return ii.Fragment=i,ii.jsx=f,ii.jsxs=f,ii}var _p;function rv(){return _p||(_p=1,bu.exports=nv()),bu.exports}var v=rv(),x=hc();const L=Vh(x);var jl={},Au={exports:{}},Rt={},$u={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function ov(){return Fp||(Fp=1,function(t){function r(B,J){var Y=B.length;B.push(J);e:for(;0<Y;){var N=Y-1>>>1,F=B[N];if(0<a(F,J))B[N]=J,B[Y]=F,Y=N;else break e}}function i(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var J=B[0],Y=B.pop();if(Y!==J){B[0]=Y;e:for(var N=0,F=B.length,X=F>>>1;N<X;){var Z=2*(N+1)-1,oe=B[Z],te=Z+1,se=B[te];if(0>a(oe,Y))te<F&&0>a(se,oe)?(B[N]=se,B[te]=Y,N=te):(B[N]=oe,B[Z]=Y,N=Z);else if(te<F&&0>a(se,Y))B[N]=se,B[te]=Y,N=te;else break e}}return J}function a(B,J){var Y=B.sortIndex-J.sortIndex;return Y!==0?Y:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();t.unstable_now=function(){return f.now()-p}}var h=[],m=[],w=1,y=null,S=3,T=!1,k=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(B){for(var J=i(m);J!==null;){if(J.callback===null)l(m);else if(J.startTime<=B)l(m),J.sortIndex=J.expirationTime,r(h,J);else break;J=i(m)}}function W(B){if(C=!1,O(B),!k)if(i(h)!==null)k=!0,Ne(Q);else{var J=i(m);J!==null&&ke(W,J.startTime-B)}}function Q(B,J){k=!1,C&&(C=!1,$(fe),fe=-1),T=!0;var Y=S;try{for(O(J),y=i(h);y!==null&&(!(y.expirationTime>J)||B&&!Le());){var N=y.callback;if(typeof N=="function"){y.callback=null,S=y.priorityLevel;var F=N(y.expirationTime<=J);J=t.unstable_now(),typeof F=="function"?y.callback=F:y===i(h)&&l(h),O(J)}else l(h);y=i(h)}if(y!==null)var X=!0;else{var Z=i(m);Z!==null&&ke(W,Z.startTime-J),X=!1}return X}finally{y=null,S=Y,T=!1}}var K=!1,q=null,fe=-1,ge=5,Ce=-1;function Le(){return!(t.unstable_now()-Ce<ge)}function be(){if(q!==null){var B=t.unstable_now();Ce=B;var J=!0;try{J=q(!0,B)}finally{J?Pe():(K=!1,q=null)}}else K=!1}var Pe;if(typeof R=="function")Pe=function(){R(be)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,$e=Te.port2;Te.port1.onmessage=be,Pe=function(){$e.postMessage(null)}}else Pe=function(){b(be,0)};function Ne(B){q=B,K||(K=!0,Pe())}function ke(B,J){fe=b(function(){B(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){k||T||(k=!0,Ne(Q))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return i(h)},t.unstable_next=function(B){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var Y=S;S=J;try{return B()}finally{S=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=S;S=B;try{return J()}finally{S=Y}},t.unstable_scheduleCallback=function(B,J,Y){var N=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?N+Y:N):Y=N,B){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,B={id:w++,callback:J,priorityLevel:B,startTime:Y,expirationTime:F,sortIndex:-1},Y>N?(B.sortIndex=Y,r(m,B),i(h)===null&&B===i(m)&&(C?($(fe),fe=-1):C=!0,ke(W,Y-N))):(B.sortIndex=F,r(h,B),k||T||(k=!0,Ne(Q))),B},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(B){var J=S;return function(){var Y=S;S=J;try{return B.apply(this,arguments)}finally{S=Y}}}}(Ru)),Ru}var zp;function iv(){return zp||(zp=1,$u.exports=ov()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function lv(){if(Bp)return Rt;Bp=1;var t=hc(),r=iv();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function c(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(a[e]=n,e=0;e<n.length;e++)l.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},y={};function S(e){return h.call(y,e)?!0:h.call(w,e)?!1:m.test(e)?y[e]=!0:(w[e]=!0,!1)}function T(e,n,o,s){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,n,o,s){if(n===null||typeof n>"u"||T(e,n,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(e,n,o,s,u,d,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=d,this.removeEmptyString=g}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];b[n]=new C(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($,R);b[n]=new C(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($,R);b[n]=new C(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($,R);b[n]=new C(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,n,o,s){var u=b.hasOwnProperty(n)?b[n]:null;(u!==null?u.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(k(n,o,u,s)&&(o=null),s||u===null?S(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,s=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,s?e.setAttributeNS(s,n,o):e.setAttribute(n,o))))}var W=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),K=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Le=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),$e=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),B=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,N;function F(e){if(N===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);N=n&&n[1]||""}return`
`+N+e}var X=!1;function Z(e,n){if(!e||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(D){var s=D}Reflect.construct(e,[],n)}else{try{n.call()}catch(D){s=D}e.call(n.prototype)}else{try{throw Error()}catch(D){s=D}e()}}catch(D){if(D&&s&&typeof D.stack=="string"){for(var u=D.stack.split(`
`),d=s.stack.split(`
`),g=u.length-1,E=d.length-1;1<=g&&0<=E&&u[g]!==d[E];)E--;for(;1<=g&&0<=E;g--,E--)if(u[g]!==d[E]){if(g!==1||E!==1)do if(g--,E--,0>E||u[g]!==d[E]){var A=`
`+u[g].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=g&&0<=E);break}}}finally{X=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?F(e):""}function oe(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Portal";case ge:return"Profiler";case fe:return"StrictMode";case Pe:return"Suspense";case Te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Le:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case be:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $e:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case Ne:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}function se(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(n);case 8:return n===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function z(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ue(e){var n=z(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){s=""+g,d.call(this,g)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(g){s=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ye(e){e._valueTracker||(e._valueTracker=ue(e))}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),s="";return e&&(s=z(e)?e.checked?"true":"false":e.value),e=s,e!==o?(n.setValue(e),!0):!1}function Ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function qe(e,n){var o=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Qe(e,n){var o=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;o=pe(n.value!=null?n.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function yt(e,n){n=n.checked,n!=null&&O(e,"checked",n,!1)}function Nt(e,n){yt(e,n);var o=pe(n.value),s=n.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zt(e,n.type,o):n.hasOwnProperty("defaultValue")&&zt(e,n.type,pe(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function sn(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function zt(e,n,o){(n!=="number"||Ie(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Sn=Array.isArray;function an(e,n,o,s){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&s&&(e[o].defaultSelected=!0)}else{for(o=""+pe(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function En(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xo(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Sn(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:pe(o)}}function Ds(e,n){var o=pe(n.value),s=pe(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function Vc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ls(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qc(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var bi,Kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,s,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,s,u)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(bi=bi||document.createElement("div"),bi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function ko(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oy=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(e){oy.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),So[n]=So[e]})});function Gc(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||So.hasOwnProperty(e)&&So[e]?(""+n).trim():n+"px"}function qc(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var s=o.indexOf("--")===0,u=Gc(o,n[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,u):e[o]=u}}var iy=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Os(e,n){if(n){if(iy[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function _s(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fs=null;function zs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bs=null,Lr=null,Or=null;function Yc(e){if(e=Wo(e)){if(typeof Bs!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Ki(n),Bs(e.stateNode,e.type,n))}}function Xc(e){Lr?Or?Or.push(e):Or=[e]:Lr=e}function Jc(){if(Lr){var e=Lr,n=Or;if(Or=Lr=null,Yc(e),n)for(e=0;e<n.length;e++)Yc(n[e])}}function Zc(e,n){return e(n)}function ed(){}var Ms=!1;function td(e,n,o){if(Ms)return e(n,o);Ms=!0;try{return Zc(e,n,o)}finally{Ms=!1,(Lr!==null||Or!==null)&&(ed(),Jc())}}function Eo(e,n){var o=e.stateNode;if(o===null)return null;var s=Ki(o);if(s===null)return null;o=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Us=!1;if(p)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){Us=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{Us=!1}function ly(e,n,o,s,u,d,g,E,A){var D=Array.prototype.slice.call(arguments,3);try{n.apply(o,D)}catch(H){this.onError(H)}}var Co=!1,Ci=null,Ai=!1,Hs=null,sy={onError:function(e){Co=!0,Ci=e}};function ay(e,n,o,s,u,d,g,E,A){Co=!1,Ci=null,ly.apply(sy,arguments)}function uy(e,n,o,s,u,d,g,E,A){if(ay.apply(this,arguments),Co){if(Co){var D=Ci;Co=!1,Ci=null}else throw Error(i(198));Ai||(Ai=!0,Hs=D)}}function sr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function nd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function rd(e){if(sr(e)!==e)throw Error(i(188))}function cy(e){var n=e.alternate;if(!n){if(n=sr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,s=n;;){var u=o.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){o=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===o)return rd(u),e;if(d===s)return rd(u),n;d=d.sibling}throw Error(i(188))}if(o.return!==s.return)o=u,s=d;else{for(var g=!1,E=u.child;E;){if(E===o){g=!0,o=u,s=d;break}if(E===s){g=!0,s=u,o=d;break}E=E.sibling}if(!g){for(E=d.child;E;){if(E===o){g=!0,o=d,s=u;break}if(E===s){g=!0,s=d,o=u;break}E=E.sibling}if(!g)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function od(e){return e=cy(e),e!==null?id(e):null}function id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=id(e);if(n!==null)return n;e=e.sibling}return null}var ld=r.unstable_scheduleCallback,sd=r.unstable_cancelCallback,dy=r.unstable_shouldYield,fy=r.unstable_requestPaint,Ye=r.unstable_now,py=r.unstable_getCurrentPriorityLevel,Ws=r.unstable_ImmediatePriority,ad=r.unstable_UserBlockingPriority,$i=r.unstable_NormalPriority,hy=r.unstable_LowPriority,ud=r.unstable_IdlePriority,Ri=null,un=null;function my(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:vy,gy=Math.log,yy=Math.LN2;function vy(e){return e>>>=0,e===0?32:31-(gy(e)/yy|0)|0}var Ti=64,Pi=4194304;function Ao(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,n){var o=e.pendingLanes;if(o===0)return 0;var s=0,u=e.suspendedLanes,d=e.pingedLanes,g=o&268435455;if(g!==0){var E=g&~u;E!==0?s=Ao(E):(d&=g,d!==0&&(s=Ao(d)))}else g=o&~u,g!==0?s=Ao(g):d!==0&&(s=Ao(d));if(s===0)return 0;if(n!==0&&n!==s&&!(n&u)&&(u=s&-s,d=n&-n,u>=d||u===16&&(d&4194240)!==0))return n;if(s&4&&(s|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)o=31-Gt(n),u=1<<o,s|=e[o],n&=~u;return s}function wy(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xy(e,n){for(var o=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var g=31-Gt(d),E=1<<g,A=u[g];A===-1?(!(E&o)||E&s)&&(u[g]=wy(E,n)):A<=n&&(e.expiredLanes|=E),d&=~E}}function Vs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cd(){var e=Ti;return Ti<<=1,!(Ti&4194240)&&(Ti=64),e}function Qs(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function $o(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Gt(n),e[n]=o}function ky(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-Gt(o),d=1<<u;n[u]=0,s[u]=-1,e[u]=-1,o&=~d}}function Ks(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var s=31-Gt(o),u=1<<s;u&n|e[s]&n&&(e[s]|=n),o&=~u}}var De=0;function dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fd,Gs,pd,hd,md,qs=!1,ji=[],On=null,_n=null,Fn=null,Ro=new Map,To=new Map,zn=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Po(e,n,o,s,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:o,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Wo(n),n!==null&&Gs(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ey(e,n,o,s,u){switch(n){case"focusin":return On=Po(On,e,n,o,s,u),!0;case"dragenter":return _n=Po(_n,e,n,o,s,u),!0;case"mouseover":return Fn=Po(Fn,e,n,o,s,u),!0;case"pointerover":var d=u.pointerId;return Ro.set(d,Po(Ro.get(d)||null,e,n,o,s,u)),!0;case"gotpointercapture":return d=u.pointerId,To.set(d,Po(To.get(d)||null,e,n,o,s,u)),!0}return!1}function yd(e){var n=ar(e.target);if(n!==null){var o=sr(n);if(o!==null){if(n=o.tag,n===13){if(n=nd(o),n!==null){e.blockedOn=n,md(e.priority,function(){pd(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ii(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=Xs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);Fs=s,o.target.dispatchEvent(s),Fs=null}else return n=Wo(o),n!==null&&Gs(n),e.blockedOn=o,!1;n.shift()}return!0}function vd(e,n,o){Ii(e)&&o.delete(n)}function by(){qs=!1,On!==null&&Ii(On)&&(On=null),_n!==null&&Ii(_n)&&(_n=null),Fn!==null&&Ii(Fn)&&(Fn=null),Ro.forEach(vd),To.forEach(vd)}function No(e,n){e.blockedOn===n&&(e.blockedOn=null,qs||(qs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,by)))}function jo(e){function n(u){return No(u,e)}if(0<ji.length){No(ji[0],e);for(var o=1;o<ji.length;o++){var s=ji[o];s.blockedOn===e&&(s.blockedOn=null)}}for(On!==null&&No(On,e),_n!==null&&No(_n,e),Fn!==null&&No(Fn,e),Ro.forEach(n),To.forEach(n),o=0;o<zn.length;o++)s=zn[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<zn.length&&(o=zn[0],o.blockedOn===null);)yd(o),o.blockedOn===null&&zn.shift()}var _r=W.ReactCurrentBatchConfig,Di=!0;function Cy(e,n,o,s){var u=De,d=_r.transition;_r.transition=null;try{De=1,Ys(e,n,o,s)}finally{De=u,_r.transition=d}}function Ay(e,n,o,s){var u=De,d=_r.transition;_r.transition=null;try{De=4,Ys(e,n,o,s)}finally{De=u,_r.transition=d}}function Ys(e,n,o,s){if(Di){var u=Xs(e,n,o,s);if(u===null)ha(e,n,s,Li,o),gd(e,s);else if(Ey(u,e,n,o,s))s.stopPropagation();else if(gd(e,s),n&4&&-1<Sy.indexOf(e)){for(;u!==null;){var d=Wo(u);if(d!==null&&fd(d),d=Xs(e,n,o,s),d===null&&ha(e,n,s,Li,o),d===u)break;u=d}u!==null&&s.stopPropagation()}else ha(e,n,s,null,o)}}var Li=null;function Xs(e,n,o,s){if(Li=null,e=zs(s),e=ar(e),e!==null)if(n=sr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=nd(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Li=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(py()){case Ws:return 1;case ad:return 4;case $i:case hy:return 16;case ud:return 536870912;default:return 16}default:return 16}}var Bn=null,Js=null,Oi=null;function xd(){if(Oi)return Oi;var e,n=Js,o=n.length,s,u="value"in Bn?Bn.value:Bn.textContent,d=u.length;for(e=0;e<o&&n[e]===u[e];e++);var g=o-e;for(s=1;s<=g&&n[o-s]===u[d-s];s++);return Oi=u.slice(e,1<s?1-s:void 0)}function _i(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function kd(){return!1}function jt(e){function n(o,s,u,d,g){this._reactName=o,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Fi:kd,this.isPropagationStopped=kd,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),n}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zs=jt(Fr),Io=Y({},Fr,{view:0,detail:0}),$y=jt(Io),ea,ta,Do,zi=Y({},Io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ra,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Do&&(Do&&e.type==="mousemove"?(ea=e.screenX-Do.screenX,ta=e.screenY-Do.screenY):ta=ea=0,Do=e),ea)},movementY:function(e){return"movementY"in e?e.movementY:ta}}),Sd=jt(zi),Ry=Y({},zi,{dataTransfer:0}),Ty=jt(Ry),Py=Y({},Io,{relatedTarget:0}),na=jt(Py),Ny=Y({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),jy=jt(Ny),Iy=Y({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dy=jt(Iy),Ly=Y({},Fr,{data:0}),Ed=jt(Ly),Oy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Fy[e])?!!n[e]:!1}function ra(){return zy}var By=Y({},Io,{key:function(e){if(e.key){var n=Oy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ra,charCode:function(e){return e.type==="keypress"?_i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),My=jt(By),Uy=Y({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=jt(Uy),Hy=Y({},Io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ra}),Wy=jt(Hy),Vy=Y({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=jt(Vy),Ky=Y({},zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=jt(Ky),qy=[9,13,27,32],oa=p&&"CompositionEvent"in window,Lo=null;p&&"documentMode"in document&&(Lo=document.documentMode);var Yy=p&&"TextEvent"in window&&!Lo,Cd=p&&(!oa||Lo&&8<Lo&&11>=Lo),Ad=" ",$d=!1;function Rd(e,n){switch(e){case"keyup":return qy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Td(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zr=!1;function Xy(e,n){switch(e){case"compositionend":return Td(n);case"keypress":return n.which!==32?null:($d=!0,Ad);case"textInput":return e=n.data,e===Ad&&$d?null:e;default:return null}}function Jy(e,n){if(zr)return e==="compositionend"||!oa&&Rd(e,n)?(e=xd(),Oi=Js=Bn=null,zr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cd&&n.locale!=="ko"?null:n.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zy[e.type]:n==="textarea"}function Nd(e,n,o,s){Xc(s),n=Wi(n,"onChange"),0<n.length&&(o=new Zs("onChange","change",null,o,s),e.push({event:o,listeners:n}))}var Oo=null,_o=null;function e0(e){qd(e,0)}function Bi(e){var n=Wr(e);if(Ee(n))return e}function t0(e,n){if(e==="change")return n}var jd=!1;if(p){var ia;if(p){var la="oninput"in document;if(!la){var Id=document.createElement("div");Id.setAttribute("oninput","return;"),la=typeof Id.oninput=="function"}ia=la}else ia=!1;jd=ia&&(!document.documentMode||9<document.documentMode)}function Dd(){Oo&&(Oo.detachEvent("onpropertychange",Ld),_o=Oo=null)}function Ld(e){if(e.propertyName==="value"&&Bi(_o)){var n=[];Nd(n,_o,e,zs(e)),td(e0,n)}}function n0(e,n,o){e==="focusin"?(Dd(),Oo=n,_o=o,Oo.attachEvent("onpropertychange",Ld)):e==="focusout"&&Dd()}function r0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(_o)}function o0(e,n){if(e==="click")return Bi(n)}function i0(e,n){if(e==="input"||e==="change")return Bi(n)}function l0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qt=typeof Object.is=="function"?Object.is:l0;function Fo(e,n){if(qt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),s=Object.keys(n);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var u=o[s];if(!h.call(n,u)||!qt(e[u],n[u]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,n){var o=Od(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=n&&s>=n)return{node:o,offset:n-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Od(o)}}function Fd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Fd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function zd(){for(var e=window,n=Ie();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=Ie(e.document)}return n}function sa(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function s0(e){var n=zd(),o=e.focusedElem,s=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Fd(o.ownerDocument.documentElement,o)){if(s!==null&&sa(o)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,d=Math.min(s.start,u);s=s.end===void 0?d:Math.min(s.end,u),!e.extend&&d>s&&(u=s,s=d,d=u),u=_d(o,d);var g=_d(o,s);u&&g&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==g.node||e.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),d>s?(e.addRange(n),e.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a0=p&&"documentMode"in document&&11>=document.documentMode,Br=null,aa=null,zo=null,ua=!1;function Bd(e,n,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ua||Br==null||Br!==Ie(s)||(s=Br,"selectionStart"in s&&sa(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zo&&Fo(zo,s)||(zo=s,s=Wi(aa,"onSelect"),0<s.length&&(n=new Zs("onSelect","select",null,n,o),e.push({event:n,listeners:s}),n.target=Br)))}function Mi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var Mr={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},ca={},Md={};p&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function Ui(e){if(ca[e])return ca[e];if(!Mr[e])return e;var n=Mr[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Md)return ca[e]=n[o];return e}var Ud=Ui("animationend"),Hd=Ui("animationiteration"),Wd=Ui("animationstart"),Vd=Ui("transitionend"),Qd=new Map,Kd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mn(e,n){Qd.set(e,n),c(n,[e])}for(var da=0;da<Kd.length;da++){var fa=Kd[da],u0=fa.toLowerCase(),c0=fa[0].toUpperCase()+fa.slice(1);Mn(u0,"on"+c0)}Mn(Ud,"onAnimationEnd"),Mn(Hd,"onAnimationIteration"),Mn(Wd,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(Vd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function Gd(e,n,o){var s=e.type||"unknown-event";e.currentTarget=o,uy(s,n,void 0,e),e.currentTarget=null}function qd(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],u=s.event;s=s.listeners;e:{var d=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],A=E.instance,D=E.currentTarget;if(E=E.listener,A!==d&&u.isPropagationStopped())break e;Gd(u,E,D),d=A}else for(g=0;g<s.length;g++){if(E=s[g],A=E.instance,D=E.currentTarget,E=E.listener,A!==d&&u.isPropagationStopped())break e;Gd(u,E,D),d=A}}}if(Ai)throw e=Hs,Ai=!1,Hs=null,e}function Fe(e,n){var o=n[xa];o===void 0&&(o=n[xa]=new Set);var s=e+"__bubble";o.has(s)||(Yd(n,e,2,!1),o.add(s))}function pa(e,n,o){var s=0;n&&(s|=4),Yd(o,e,s,n)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Mo(e){if(!e[Hi]){e[Hi]=!0,l.forEach(function(o){o!=="selectionchange"&&(d0.has(o)||pa(o,!1,e),pa(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Hi]||(n[Hi]=!0,pa("selectionchange",!1,n))}}function Yd(e,n,o,s){switch(wd(n)){case 1:var u=Cy;break;case 4:u=Ay;break;default:u=Ys}o=u.bind(null,n,o,e),u=void 0,!Us||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,o,{capture:!0,passive:u}):e.addEventListener(n,o,!0):u!==void 0?e.addEventListener(n,o,{passive:u}):e.addEventListener(n,o,!1)}function ha(e,n,o,s,u){var d=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(g===4)for(g=s.return;g!==null;){var A=g.tag;if((A===3||A===4)&&(A=g.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;g=g.return}for(;E!==null;){if(g=ar(E),g===null)return;if(A=g.tag,A===5||A===6){s=d=g;continue e}E=E.parentNode}}s=s.return}td(function(){var D=d,H=zs(o),V=[];e:{var U=Qd.get(e);if(U!==void 0){var ee=Zs,ie=e;switch(e){case"keypress":if(_i(o)===0)break e;case"keydown":case"keyup":ee=My;break;case"focusin":ie="focus",ee=na;break;case"focusout":ie="blur",ee=na;break;case"beforeblur":case"afterblur":ee=na;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Wy;break;case Ud:case Hd:case Wd:ee=jy;break;case Vd:ee=Qy;break;case"scroll":ee=$y;break;case"wheel":ee=Gy;break;case"copy":case"cut":case"paste":ee=Dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=bd}var le=(n&4)!==0,Xe=!le&&e==="scroll",j=le?U!==null?U+"Capture":null:U;le=[];for(var P=D,I;P!==null;){I=P;var G=I.stateNode;if(I.tag===5&&G!==null&&(I=G,j!==null&&(G=Eo(P,j),G!=null&&le.push(Uo(P,G,I)))),Xe)break;P=P.return}0<le.length&&(U=new ee(U,ie,null,o,H),V.push({event:U,listeners:le}))}}if(!(n&7)){e:{if(U=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",U&&o!==Fs&&(ie=o.relatedTarget||o.fromElement)&&(ar(ie)||ie[bn]))break e;if((ee||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,ee?(ie=o.relatedTarget||o.toElement,ee=D,ie=ie?ar(ie):null,ie!==null&&(Xe=sr(ie),ie!==Xe||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=D),ee!==ie)){if(le=Sd,G="onMouseLeave",j="onMouseEnter",P="mouse",(e==="pointerout"||e==="pointerover")&&(le=bd,G="onPointerLeave",j="onPointerEnter",P="pointer"),Xe=ee==null?U:Wr(ee),I=ie==null?U:Wr(ie),U=new le(G,P+"leave",ee,o,H),U.target=Xe,U.relatedTarget=I,G=null,ar(H)===D&&(le=new le(j,P+"enter",ie,o,H),le.target=I,le.relatedTarget=Xe,G=le),Xe=G,ee&&ie)t:{for(le=ee,j=ie,P=0,I=le;I;I=Ur(I))P++;for(I=0,G=j;G;G=Ur(G))I++;for(;0<P-I;)le=Ur(le),P--;for(;0<I-P;)j=Ur(j),I--;for(;P--;){if(le===j||j!==null&&le===j.alternate)break t;le=Ur(le),j=Ur(j)}le=null}else le=null;ee!==null&&Xd(V,U,ee,le,!1),ie!==null&&Xe!==null&&Xd(V,Xe,ie,le,!0)}}e:{if(U=D?Wr(D):window,ee=U.nodeName&&U.nodeName.toLowerCase(),ee==="select"||ee==="input"&&U.type==="file")var ae=t0;else if(Pd(U))if(jd)ae=i0;else{ae=r0;var ce=n0}else(ee=U.nodeName)&&ee.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(ae=o0);if(ae&&(ae=ae(e,D))){Nd(V,ae,o,H);break e}ce&&ce(e,U,D),e==="focusout"&&(ce=U._wrapperState)&&ce.controlled&&U.type==="number"&&zt(U,"number",U.value)}switch(ce=D?Wr(D):window,e){case"focusin":(Pd(ce)||ce.contentEditable==="true")&&(Br=ce,aa=D,zo=null);break;case"focusout":zo=aa=Br=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,Bd(V,o,H);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Bd(V,o,H)}var de;if(oa)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else zr?Rd(e,o)&&(me="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(me="onCompositionStart");me&&(Cd&&o.locale!=="ko"&&(zr||me!=="onCompositionStart"?me==="onCompositionEnd"&&zr&&(de=xd()):(Bn=H,Js="value"in Bn?Bn.value:Bn.textContent,zr=!0)),ce=Wi(D,me),0<ce.length&&(me=new Ed(me,e,null,o,H),V.push({event:me,listeners:ce}),de?me.data=de:(de=Td(o),de!==null&&(me.data=de)))),(de=Yy?Xy(e,o):Jy(e,o))&&(D=Wi(D,"onBeforeInput"),0<D.length&&(H=new Ed("onBeforeInput","beforeinput",null,o,H),V.push({event:H,listeners:D}),H.data=de))}qd(V,n)})}function Uo(e,n,o){return{instance:e,listener:n,currentTarget:o}}function Wi(e,n){for(var o=n+"Capture",s=[];e!==null;){var u=e,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=Eo(e,o),d!=null&&s.unshift(Uo(e,d,u)),d=Eo(e,n),d!=null&&s.push(Uo(e,d,u))),e=e.return}return s}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xd(e,n,o,s,u){for(var d=n._reactName,g=[];o!==null&&o!==s;){var E=o,A=E.alternate,D=E.stateNode;if(A!==null&&A===s)break;E.tag===5&&D!==null&&(E=D,u?(A=Eo(o,d),A!=null&&g.unshift(Uo(o,A,E))):u||(A=Eo(o,d),A!=null&&g.push(Uo(o,A,E)))),o=o.return}g.length!==0&&e.push({event:n,listeners:g})}var f0=/\r\n?/g,p0=/\u0000|\uFFFD/g;function Jd(e){return(typeof e=="string"?e:""+e).replace(f0,`
`).replace(p0,"")}function Vi(e,n,o){if(n=Jd(n),Jd(e)!==n&&o)throw Error(i(425))}function Qi(){}var ma=null,ga=null;function ya(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var va=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,m0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(e){return Zd.resolve(null).then(e).catch(g0)}:va;function g0(e){setTimeout(function(){throw e})}function wa(e,n){var o=n,s=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(s===0){e.removeChild(u),jo(n);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=u}while(o);jo(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ef(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),cn="__reactFiber$"+Hr,Ho="__reactProps$"+Hr,bn="__reactContainer$"+Hr,xa="__reactEvents$"+Hr,y0="__reactListeners$"+Hr,v0="__reactHandles$"+Hr;function ar(e){var n=e[cn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[bn]||o[cn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=ef(e);e!==null;){if(o=e[cn])return o;e=ef(e)}return n}e=o,o=e.parentNode}return null}function Wo(e){return e=e[cn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Ki(e){return e[Ho]||null}var ka=[],Vr=-1;function Hn(e){return{current:e}}function ze(e){0>Vr||(e.current=ka[Vr],ka[Vr]=null,Vr--)}function _e(e,n){Vr++,ka[Vr]=e.current,e.current=n}var Wn={},ft=Hn(Wn),Et=Hn(!1),ur=Wn;function Qr(e,n){var o=e.type.contextTypes;if(!o)return Wn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in o)u[d]=n[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function bt(e){return e=e.childContextTypes,e!=null}function Gi(){ze(Et),ze(ft)}function tf(e,n,o){if(ft.current!==Wn)throw Error(i(168));_e(ft,n),_e(Et,o)}function nf(e,n,o){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var u in s)if(!(u in n))throw Error(i(108,se(e)||"Unknown",u));return Y({},o,s)}function qi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Wn,ur=ft.current,_e(ft,e),_e(Et,Et.current),!0}function rf(e,n,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=nf(e,n,ur),s.__reactInternalMemoizedMergedChildContext=e,ze(Et),ze(ft),_e(ft,e)):ze(Et),_e(Et,o)}var Cn=null,Yi=!1,Sa=!1;function of(e){Cn===null?Cn=[e]:Cn.push(e)}function w0(e){Yi=!0,of(e)}function Vn(){if(!Sa&&Cn!==null){Sa=!0;var e=0,n=De;try{var o=Cn;for(De=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}Cn=null,Yi=!1}catch(u){throw Cn!==null&&(Cn=Cn.slice(e+1)),ld(Ws,Vn),u}finally{De=n,Sa=!1}}return null}var Kr=[],Gr=0,Xi=null,Ji=0,Bt=[],Mt=0,cr=null,An=1,$n="";function dr(e,n){Kr[Gr++]=Ji,Kr[Gr++]=Xi,Xi=e,Ji=n}function lf(e,n,o){Bt[Mt++]=An,Bt[Mt++]=$n,Bt[Mt++]=cr,cr=e;var s=An;e=$n;var u=32-Gt(s)-1;s&=~(1<<u),o+=1;var d=32-Gt(n)+u;if(30<d){var g=u-u%5;d=(s&(1<<g)-1).toString(32),s>>=g,u-=g,An=1<<32-Gt(n)+u|o<<u|s,$n=d+e}else An=1<<d|o<<u|s,$n=e}function Ea(e){e.return!==null&&(dr(e,1),lf(e,1,0))}function ba(e){for(;e===Xi;)Xi=Kr[--Gr],Kr[Gr]=null,Ji=Kr[--Gr],Kr[Gr]=null;for(;e===cr;)cr=Bt[--Mt],Bt[Mt]=null,$n=Bt[--Mt],Bt[Mt]=null,An=Bt[--Mt],Bt[Mt]=null}var It=null,Dt=null,Me=!1,Yt=null;function sf(e,n){var o=Vt(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function af(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,It=e,Dt=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,It=e,Dt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=cr!==null?{id:An,overflow:$n}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Vt(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,It=e,Dt=null,!0):!1;default:return!1}}function Ca(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(Me){var n=Dt;if(n){var o=n;if(!af(e,n)){if(Ca(e))throw Error(i(418));n=Un(o.nextSibling);var s=It;n&&af(e,n)?sf(s,o):(e.flags=e.flags&-4097|2,Me=!1,It=e)}}else{if(Ca(e))throw Error(i(418));e.flags=e.flags&-4097|2,Me=!1,It=e}}}function uf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;It=e}function Zi(e){if(e!==It)return!1;if(!Me)return uf(e),Me=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ya(e.type,e.memoizedProps)),n&&(n=Dt)){if(Ca(e))throw cf(),Error(i(418));for(;n;)sf(e,n),n=Un(n.nextSibling)}if(uf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Dt=Un(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Dt=null}}else Dt=It?Un(e.stateNode.nextSibling):null;return!0}function cf(){for(var e=Dt;e;)e=Un(e.nextSibling)}function qr(){Dt=It=null,Me=!1}function $a(e){Yt===null?Yt=[e]:Yt.push(e)}var x0=W.ReactCurrentBatchConfig;function Vo(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var u=s,d=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===d?n.ref:(n=function(g){var E=u.refs;g===null?delete E[d]:E[d]=g},n._stringRef=d,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function el(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function df(e){var n=e._init;return n(e._payload)}function ff(e){function n(j,P){if(e){var I=j.deletions;I===null?(j.deletions=[P],j.flags|=16):I.push(P)}}function o(j,P){if(!e)return null;for(;P!==null;)n(j,P),P=P.sibling;return null}function s(j,P){for(j=new Map;P!==null;)P.key!==null?j.set(P.key,P):j.set(P.index,P),P=P.sibling;return j}function u(j,P){return j=Zn(j,P),j.index=0,j.sibling=null,j}function d(j,P,I){return j.index=I,e?(I=j.alternate,I!==null?(I=I.index,I<P?(j.flags|=2,P):I):(j.flags|=2,P)):(j.flags|=1048576,P)}function g(j){return e&&j.alternate===null&&(j.flags|=2),j}function E(j,P,I,G){return P===null||P.tag!==6?(P=vu(I,j.mode,G),P.return=j,P):(P=u(P,I),P.return=j,P)}function A(j,P,I,G){var ae=I.type;return ae===q?H(j,P,I.props.children,G,I.key):P!==null&&(P.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ne&&df(ae)===P.type)?(G=u(P,I.props),G.ref=Vo(j,P,I),G.return=j,G):(G=bl(I.type,I.key,I.props,null,j.mode,G),G.ref=Vo(j,P,I),G.return=j,G)}function D(j,P,I,G){return P===null||P.tag!==4||P.stateNode.containerInfo!==I.containerInfo||P.stateNode.implementation!==I.implementation?(P=wu(I,j.mode,G),P.return=j,P):(P=u(P,I.children||[]),P.return=j,P)}function H(j,P,I,G,ae){return P===null||P.tag!==7?(P=wr(I,j.mode,G,ae),P.return=j,P):(P=u(P,I),P.return=j,P)}function V(j,P,I){if(typeof P=="string"&&P!==""||typeof P=="number")return P=vu(""+P,j.mode,I),P.return=j,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Q:return I=bl(P.type,P.key,P.props,null,j.mode,I),I.ref=Vo(j,null,P),I.return=j,I;case K:return P=wu(P,j.mode,I),P.return=j,P;case Ne:var G=P._init;return V(j,G(P._payload),I)}if(Sn(P)||J(P))return P=wr(P,j.mode,I,null),P.return=j,P;el(j,P)}return null}function U(j,P,I,G){var ae=P!==null?P.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ae!==null?null:E(j,P,""+I,G);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:return I.key===ae?A(j,P,I,G):null;case K:return I.key===ae?D(j,P,I,G):null;case Ne:return ae=I._init,U(j,P,ae(I._payload),G)}if(Sn(I)||J(I))return ae!==null?null:H(j,P,I,G,null);el(j,I)}return null}function ee(j,P,I,G,ae){if(typeof G=="string"&&G!==""||typeof G=="number")return j=j.get(I)||null,E(P,j,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Q:return j=j.get(G.key===null?I:G.key)||null,A(P,j,G,ae);case K:return j=j.get(G.key===null?I:G.key)||null,D(P,j,G,ae);case Ne:var ce=G._init;return ee(j,P,I,ce(G._payload),ae)}if(Sn(G)||J(G))return j=j.get(I)||null,H(P,j,G,ae,null);el(P,G)}return null}function ie(j,P,I,G){for(var ae=null,ce=null,de=P,me=P=0,ot=null;de!==null&&me<I.length;me++){de.index>me?(ot=de,de=null):ot=de.sibling;var Re=U(j,de,I[me],G);if(Re===null){de===null&&(de=ot);break}e&&de&&Re.alternate===null&&n(j,de),P=d(Re,P,me),ce===null?ae=Re:ce.sibling=Re,ce=Re,de=ot}if(me===I.length)return o(j,de),Me&&dr(j,me),ae;if(de===null){for(;me<I.length;me++)de=V(j,I[me],G),de!==null&&(P=d(de,P,me),ce===null?ae=de:ce.sibling=de,ce=de);return Me&&dr(j,me),ae}for(de=s(j,de);me<I.length;me++)ot=ee(de,j,me,I[me],G),ot!==null&&(e&&ot.alternate!==null&&de.delete(ot.key===null?me:ot.key),P=d(ot,P,me),ce===null?ae=ot:ce.sibling=ot,ce=ot);return e&&de.forEach(function(er){return n(j,er)}),Me&&dr(j,me),ae}function le(j,P,I,G){var ae=J(I);if(typeof ae!="function")throw Error(i(150));if(I=ae.call(I),I==null)throw Error(i(151));for(var ce=ae=null,de=P,me=P=0,ot=null,Re=I.next();de!==null&&!Re.done;me++,Re=I.next()){de.index>me?(ot=de,de=null):ot=de.sibling;var er=U(j,de,Re.value,G);if(er===null){de===null&&(de=ot);break}e&&de&&er.alternate===null&&n(j,de),P=d(er,P,me),ce===null?ae=er:ce.sibling=er,ce=er,de=ot}if(Re.done)return o(j,de),Me&&dr(j,me),ae;if(de===null){for(;!Re.done;me++,Re=I.next())Re=V(j,Re.value,G),Re!==null&&(P=d(Re,P,me),ce===null?ae=Re:ce.sibling=Re,ce=Re);return Me&&dr(j,me),ae}for(de=s(j,de);!Re.done;me++,Re=I.next())Re=ee(de,j,me,Re.value,G),Re!==null&&(e&&Re.alternate!==null&&de.delete(Re.key===null?me:Re.key),P=d(Re,P,me),ce===null?ae=Re:ce.sibling=Re,ce=Re);return e&&de.forEach(function(J0){return n(j,J0)}),Me&&dr(j,me),ae}function Xe(j,P,I,G){if(typeof I=="object"&&I!==null&&I.type===q&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:e:{for(var ae=I.key,ce=P;ce!==null;){if(ce.key===ae){if(ae=I.type,ae===q){if(ce.tag===7){o(j,ce.sibling),P=u(ce,I.props.children),P.return=j,j=P;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ne&&df(ae)===ce.type){o(j,ce.sibling),P=u(ce,I.props),P.ref=Vo(j,ce,I),P.return=j,j=P;break e}o(j,ce);break}else n(j,ce);ce=ce.sibling}I.type===q?(P=wr(I.props.children,j.mode,G,I.key),P.return=j,j=P):(G=bl(I.type,I.key,I.props,null,j.mode,G),G.ref=Vo(j,P,I),G.return=j,j=G)}return g(j);case K:e:{for(ce=I.key;P!==null;){if(P.key===ce)if(P.tag===4&&P.stateNode.containerInfo===I.containerInfo&&P.stateNode.implementation===I.implementation){o(j,P.sibling),P=u(P,I.children||[]),P.return=j,j=P;break e}else{o(j,P);break}else n(j,P);P=P.sibling}P=wu(I,j.mode,G),P.return=j,j=P}return g(j);case Ne:return ce=I._init,Xe(j,P,ce(I._payload),G)}if(Sn(I))return ie(j,P,I,G);if(J(I))return le(j,P,I,G);el(j,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,P!==null&&P.tag===6?(o(j,P.sibling),P=u(P,I),P.return=j,j=P):(o(j,P),P=vu(I,j.mode,G),P.return=j,j=P),g(j)):o(j,P)}return Xe}var Yr=ff(!0),pf=ff(!1),tl=Hn(null),nl=null,Xr=null,Ra=null;function Ta(){Ra=Xr=nl=null}function Pa(e){var n=tl.current;ze(tl),e._currentValue=n}function Na(e,n,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===o)break;e=e.return}}function Jr(e,n){nl=e,Ra=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ct=!0),e.firstContext=null)}function Ut(e){var n=e._currentValue;if(Ra!==e)if(e={context:e,memoizedValue:n,next:null},Xr===null){if(nl===null)throw Error(i(308));Xr=e,nl.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return n}var fr=null;function ja(e){fr===null?fr=[e]:fr.push(e)}function hf(e,n,o,s){var u=n.interleaved;return u===null?(o.next=o,ja(n)):(o.next=u.next,u.next=o),n.interleaved=o,Rn(e,s)}function Rn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Qn=!1;function Ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ae&2){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,Rn(e,o)}return u=s.interleaved,u===null?(n.next=n,ja(s)):(n.next=u.next,u.next=n),s.interleaved=n,Rn(e,o)}function rl(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,Ks(e,o)}}function gf(e,n){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var u=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};d===null?u=d=g:d=d.next=g,o=o.next}while(o!==null);d===null?u=d=n:d=d.next=n}else u=d=n;o={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function ol(e,n,o,s){var u=e.updateQueue;Qn=!1;var d=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var A=E,D=A.next;A.next=null,g===null?d=D:g.next=D,g=A;var H=e.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==g&&(E===null?H.firstBaseUpdate=D:E.next=D,H.lastBaseUpdate=A))}if(d!==null){var V=u.baseState;g=0,H=D=A=null,E=d;do{var U=E.lane,ee=E.eventTime;if((s&U)===U){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var ie=e,le=E;switch(U=n,ee=o,le.tag){case 1:if(ie=le.payload,typeof ie=="function"){V=ie.call(ee,V,U);break e}V=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=le.payload,U=typeof ie=="function"?ie.call(ee,V,U):ie,U==null)break e;V=Y({},V,U);break e;case 2:Qn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,U=u.effects,U===null?u.effects=[E]:U.push(E))}else ee={eventTime:ee,lane:U,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(D=H=ee,A=V):H=H.next=ee,g|=U;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;U=E,E=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);if(H===null&&(A=V),u.baseState=A,u.firstBaseUpdate=D,u.lastBaseUpdate=H,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else d===null&&(u.shared.lanes=0);mr|=g,e.lanes=g,e.memoizedState=V}}function yf(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],u=s.callback;if(u!==null){if(s.callback=null,s=o,typeof u!="function")throw Error(i(191,u));u.call(s)}}}var Qo={},dn=Hn(Qo),Ko=Hn(Qo),Go=Hn(Qo);function pr(e){if(e===Qo)throw Error(i(174));return e}function Da(e,n){switch(_e(Go,n),_e(Ko,e),_e(dn,Qo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Ls(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Ls(n,e)}ze(dn),_e(dn,n)}function Zr(){ze(dn),ze(Ko),ze(Go)}function vf(e){pr(Go.current);var n=pr(dn.current),o=Ls(n,e.type);n!==o&&(_e(Ko,e),_e(dn,o))}function La(e){Ko.current===e&&(ze(dn),ze(Ko))}var Ue=Hn(0);function il(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Oa=[];function _a(){for(var e=0;e<Oa.length;e++)Oa[e]._workInProgressVersionPrimary=null;Oa.length=0}var ll=W.ReactCurrentDispatcher,Fa=W.ReactCurrentBatchConfig,hr=0,He=null,et=null,nt=null,sl=!1,qo=!1,Yo=0,k0=0;function pt(){throw Error(i(321))}function za(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!qt(e[o],n[o]))return!1;return!0}function Ba(e,n,o,s,u,d){if(hr=d,He=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ll.current=e===null||e.memoizedState===null?C0:A0,e=o(s,u),qo){d=0;do{if(qo=!1,Yo=0,25<=d)throw Error(i(301));d+=1,nt=et=null,n.updateQueue=null,ll.current=$0,e=o(s,u)}while(qo)}if(ll.current=cl,n=et!==null&&et.next!==null,hr=0,nt=et=He=null,sl=!1,n)throw Error(i(300));return e}function Ma(){var e=Yo!==0;return Yo=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?He.memoizedState=nt=e:nt=nt.next=e,nt}function Ht(){if(et===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var n=nt===null?He.memoizedState:nt.next;if(n!==null)nt=n,et=e;else{if(e===null)throw Error(i(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},nt===null?He.memoizedState=nt=e:nt=nt.next=e}return nt}function Xo(e,n){return typeof n=="function"?n(e):n}function Ua(e){var n=Ht(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=et,u=s.baseQueue,d=o.pending;if(d!==null){if(u!==null){var g=u.next;u.next=d.next,d.next=g}s.baseQueue=u=d,o.pending=null}if(u!==null){d=u.next,s=s.baseState;var E=g=null,A=null,D=d;do{var H=D.lane;if((hr&H)===H)A!==null&&(A=A.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),s=D.hasEagerState?D.eagerState:e(s,D.action);else{var V={lane:H,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};A===null?(E=A=V,g=s):A=A.next=V,He.lanes|=H,mr|=H}D=D.next}while(D!==null&&D!==d);A===null?g=s:A.next=E,qt(s,n.memoizedState)||(Ct=!0),n.memoizedState=s,n.baseState=g,n.baseQueue=A,o.lastRenderedState=s}if(e=o.interleaved,e!==null){u=e;do d=u.lane,He.lanes|=d,mr|=d,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Ha(e){var n=Ht(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,u=o.pending,d=n.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do d=e(d,g.action),g=g.next;while(g!==u);qt(d,n.memoizedState)||(Ct=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),o.lastRenderedState=d}return[d,s]}function wf(){}function xf(e,n){var o=He,s=Ht(),u=n(),d=!qt(s.memoizedState,u);if(d&&(s.memoizedState=u,Ct=!0),s=s.queue,Wa(Ef.bind(null,o,s,e),[e]),s.getSnapshot!==n||d||nt!==null&&nt.memoizedState.tag&1){if(o.flags|=2048,Jo(9,Sf.bind(null,o,s,u,n),void 0,null),rt===null)throw Error(i(349));hr&30||kf(o,n,u)}return u}function kf(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=He.updateQueue,n===null?(n={lastEffect:null,stores:null},He.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function Sf(e,n,o,s){n.value=o,n.getSnapshot=s,bf(n)&&Cf(e)}function Ef(e,n,o){return o(function(){bf(n)&&Cf(e)})}function bf(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!qt(e,o)}catch{return!0}}function Cf(e){var n=Rn(e,1);n!==null&&en(n,e,1,-1)}function Af(e){var n=fn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xo,lastRenderedState:e},n.queue=e,e=e.dispatch=b0.bind(null,He,e),[n.memoizedState,e]}function Jo(e,n,o,s){return e={tag:e,create:n,destroy:o,deps:s,next:null},n=He.updateQueue,n===null?(n={lastEffect:null,stores:null},He.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,n.lastEffect=e)),e}function $f(){return Ht().memoizedState}function al(e,n,o,s){var u=fn();He.flags|=e,u.memoizedState=Jo(1|n,o,void 0,s===void 0?null:s)}function ul(e,n,o,s){var u=Ht();s=s===void 0?null:s;var d=void 0;if(et!==null){var g=et.memoizedState;if(d=g.destroy,s!==null&&za(s,g.deps)){u.memoizedState=Jo(n,o,d,s);return}}He.flags|=e,u.memoizedState=Jo(1|n,o,d,s)}function Rf(e,n){return al(8390656,8,e,n)}function Wa(e,n){return ul(2048,8,e,n)}function Tf(e,n){return ul(4,2,e,n)}function Pf(e,n){return ul(4,4,e,n)}function Nf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function jf(e,n,o){return o=o!=null?o.concat([e]):null,ul(4,4,Nf.bind(null,n,e),o)}function Va(){}function If(e,n){var o=Ht();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&za(n,s[1])?s[0]:(o.memoizedState=[e,n],e)}function Df(e,n){var o=Ht();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&za(n,s[1])?s[0]:(e=e(),o.memoizedState=[e,n],e)}function Lf(e,n,o){return hr&21?(qt(o,n)||(o=cd(),He.lanes|=o,mr|=o,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ct=!0),e.memoizedState=o)}function S0(e,n){var o=De;De=o!==0&&4>o?o:4,e(!0);var s=Fa.transition;Fa.transition={};try{e(!1),n()}finally{De=o,Fa.transition=s}}function Of(){return Ht().memoizedState}function E0(e,n,o){var s=Xn(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},_f(e))Ff(n,o);else if(o=hf(e,n,o,s),o!==null){var u=wt();en(o,e,s,u),zf(o,n,s)}}function b0(e,n,o){var s=Xn(e),u={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(_f(e))Ff(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var g=n.lastRenderedState,E=d(g,o);if(u.hasEagerState=!0,u.eagerState=E,qt(E,g)){var A=n.interleaved;A===null?(u.next=u,ja(n)):(u.next=A.next,A.next=u),n.interleaved=u;return}}catch{}finally{}o=hf(e,n,u,s),o!==null&&(u=wt(),en(o,e,s,u),zf(o,n,s))}}function _f(e){var n=e.alternate;return e===He||n!==null&&n===He}function Ff(e,n){qo=sl=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function zf(e,n,o){if(o&4194240){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,Ks(e,o)}}var cl={readContext:Ut,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},C0={readContext:Ut,useCallback:function(e,n){return fn().memoizedState=[e,n===void 0?null:n],e},useContext:Ut,useEffect:Rf,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,al(4194308,4,Nf.bind(null,n,e),o)},useLayoutEffect:function(e,n){return al(4194308,4,e,n)},useInsertionEffect:function(e,n){return al(4,2,e,n)},useMemo:function(e,n){var o=fn();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var s=fn();return n=o!==void 0?o(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=E0.bind(null,He,e),[s.memoizedState,e]},useRef:function(e){var n=fn();return e={current:e},n.memoizedState=e},useState:Af,useDebugValue:Va,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Af(!1),n=e[0];return e=S0.bind(null,e[1]),fn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var s=He,u=fn();if(Me){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),rt===null)throw Error(i(349));hr&30||kf(s,n,o)}u.memoizedState=o;var d={value:o,getSnapshot:n};return u.queue=d,Rf(Ef.bind(null,s,d,e),[e]),s.flags|=2048,Jo(9,Sf.bind(null,s,d,o,n),void 0,null),o},useId:function(){var e=fn(),n=rt.identifierPrefix;if(Me){var o=$n,s=An;o=(s&~(1<<32-Gt(s)-1)).toString(32)+o,n=":"+n+"R"+o,o=Yo++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=k0++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},A0={readContext:Ut,useCallback:If,useContext:Ut,useEffect:Wa,useImperativeHandle:jf,useInsertionEffect:Tf,useLayoutEffect:Pf,useMemo:Df,useReducer:Ua,useRef:$f,useState:function(){return Ua(Xo)},useDebugValue:Va,useDeferredValue:function(e){var n=Ht();return Lf(n,et.memoizedState,e)},useTransition:function(){var e=Ua(Xo)[0],n=Ht().memoizedState;return[e,n]},useMutableSource:wf,useSyncExternalStore:xf,useId:Of,unstable_isNewReconciler:!1},$0={readContext:Ut,useCallback:If,useContext:Ut,useEffect:Wa,useImperativeHandle:jf,useInsertionEffect:Tf,useLayoutEffect:Pf,useMemo:Df,useReducer:Ha,useRef:$f,useState:function(){return Ha(Xo)},useDebugValue:Va,useDeferredValue:function(e){var n=Ht();return et===null?n.memoizedState=e:Lf(n,et.memoizedState,e)},useTransition:function(){var e=Ha(Xo)[0],n=Ht().memoizedState;return[e,n]},useMutableSource:wf,useSyncExternalStore:xf,useId:Of,unstable_isNewReconciler:!1};function Xt(e,n){if(e&&e.defaultProps){n=Y({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function Qa(e,n,o,s){n=e.memoizedState,o=o(s,n),o=o==null?n:Y({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var dl={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var s=wt(),u=Xn(e),d=Tn(s,u);d.payload=n,o!=null&&(d.callback=o),n=Kn(e,d,u),n!==null&&(en(n,e,u,s),rl(n,e,u))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var s=wt(),u=Xn(e),d=Tn(s,u);d.tag=1,d.payload=n,o!=null&&(d.callback=o),n=Kn(e,d,u),n!==null&&(en(n,e,u,s),rl(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=wt(),s=Xn(e),u=Tn(o,s);u.tag=2,n!=null&&(u.callback=n),n=Kn(e,u,s),n!==null&&(en(n,e,s,o),rl(n,e,s))}};function Bf(e,n,o,s,u,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,g):n.prototype&&n.prototype.isPureReactComponent?!Fo(o,s)||!Fo(u,d):!0}function Mf(e,n,o){var s=!1,u=Wn,d=n.contextType;return typeof d=="object"&&d!==null?d=Ut(d):(u=bt(n)?ur:ft.current,s=n.contextTypes,d=(s=s!=null)?Qr(e,u):Wn),n=new n(o,d),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=dl,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),n}function Uf(e,n,o,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,s),n.state!==e&&dl.enqueueReplaceState(n,n.state,null)}function Ka(e,n,o,s){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},Ia(e);var d=n.contextType;typeof d=="object"&&d!==null?u.context=Ut(d):(d=bt(n)?ur:ft.current,u.context=Qr(e,d)),u.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Qa(e,n,d,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&dl.enqueueReplaceState(u,u.state,null),ol(e,o,u,s),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function eo(e,n){try{var o="",s=n;do o+=oe(s),s=s.return;while(s);var u=o}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:n,stack:u,digest:null}}function Ga(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function qa(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function Hf(e,n,o){o=Tn(-1,o),o.tag=3,o.payload={element:null};var s=n.value;return o.callback=function(){vl||(vl=!0,cu=s),qa(e,n)},o}function Wf(e,n,o){o=Tn(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var u=n.value;o.payload=function(){return s(u)},o.callback=function(){qa(e,n)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(o.callback=function(){qa(e,n),typeof s!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),o}function Vf(e,n,o){var s=e.pingCache;if(s===null){s=e.pingCache=new R0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(o)||(u.add(o),e=U0.bind(null,e,n,o),n.then(e,e))}function Qf(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Kf(e,n,o,s,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Tn(-1,1),n.tag=2,Kn(o,n,1))),o.lanes|=1),e)}var T0=W.ReactCurrentOwner,Ct=!1;function vt(e,n,o,s){n.child=e===null?pf(n,null,o,s):Yr(n,e.child,o,s)}function Gf(e,n,o,s,u){o=o.render;var d=n.ref;return Jr(n,u),s=Ba(e,n,o,s,d,u),o=Ma(),e!==null&&!Ct?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Pn(e,n,u)):(Me&&o&&Ea(n),n.flags|=1,vt(e,n,s,u),n.child)}function qf(e,n,o,s,u){if(e===null){var d=o.type;return typeof d=="function"&&!yu(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=d,Yf(e,n,d,s,u)):(e=bl(o.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!(e.lanes&u)){var g=d.memoizedProps;if(o=o.compare,o=o!==null?o:Fo,o(g,s)&&e.ref===n.ref)return Pn(e,n,u)}return n.flags|=1,e=Zn(d,s),e.ref=n.ref,e.return=n,n.child=e}function Yf(e,n,o,s,u){if(e!==null){var d=e.memoizedProps;if(Fo(d,s)&&e.ref===n.ref)if(Ct=!1,n.pendingProps=s=d,(e.lanes&u)!==0)e.flags&131072&&(Ct=!0);else return n.lanes=e.lanes,Pn(e,n,u)}return Ya(e,n,o,s,u)}function Xf(e,n,o){var s=n.pendingProps,u=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(no,Lt),Lt|=o;else{if(!(o&1073741824))return e=d!==null?d.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,_e(no,Lt),Lt|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:o,_e(no,Lt),Lt|=s}else d!==null?(s=d.baseLanes|o,n.memoizedState=null):s=o,_e(no,Lt),Lt|=s;return vt(e,n,u,o),n.child}function Jf(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Ya(e,n,o,s,u){var d=bt(o)?ur:ft.current;return d=Qr(n,d),Jr(n,u),o=Ba(e,n,o,s,d,u),s=Ma(),e!==null&&!Ct?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,Pn(e,n,u)):(Me&&s&&Ea(n),n.flags|=1,vt(e,n,o,u),n.child)}function Zf(e,n,o,s,u){if(bt(o)){var d=!0;qi(n)}else d=!1;if(Jr(n,u),n.stateNode===null)pl(e,n),Mf(n,o,s),Ka(n,o,s,u),s=!0;else if(e===null){var g=n.stateNode,E=n.memoizedProps;g.props=E;var A=g.context,D=o.contextType;typeof D=="object"&&D!==null?D=Ut(D):(D=bt(o)?ur:ft.current,D=Qr(n,D));var H=o.getDerivedStateFromProps,V=typeof H=="function"||typeof g.getSnapshotBeforeUpdate=="function";V||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==s||A!==D)&&Uf(n,g,s,D),Qn=!1;var U=n.memoizedState;g.state=U,ol(n,s,g,u),A=n.memoizedState,E!==s||U!==A||Et.current||Qn?(typeof H=="function"&&(Qa(n,o,H,s),A=n.memoizedState),(E=Qn||Bf(n,o,E,s,U,A,D))?(V||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=A),g.props=s,g.state=A,g.context=D,s=E):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{g=n.stateNode,mf(e,n),E=n.memoizedProps,D=n.type===n.elementType?E:Xt(n.type,E),g.props=D,V=n.pendingProps,U=g.context,A=o.contextType,typeof A=="object"&&A!==null?A=Ut(A):(A=bt(o)?ur:ft.current,A=Qr(n,A));var ee=o.getDerivedStateFromProps;(H=typeof ee=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==V||U!==A)&&Uf(n,g,s,A),Qn=!1,U=n.memoizedState,g.state=U,ol(n,s,g,u);var ie=n.memoizedState;E!==V||U!==ie||Et.current||Qn?(typeof ee=="function"&&(Qa(n,o,ee,s),ie=n.memoizedState),(D=Qn||Bf(n,o,D,s,U,ie,A)||!1)?(H||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(s,ie,A),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(s,ie,A)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ie),g.props=s,g.state=ie,g.context=A,s=D):(typeof g.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(n.flags|=1024),s=!1)}return Xa(e,n,o,s,d,u)}function Xa(e,n,o,s,u,d){Jf(e,n);var g=(n.flags&128)!==0;if(!s&&!g)return u&&rf(n,o,!1),Pn(e,n,d);s=n.stateNode,T0.current=n;var E=g&&typeof o.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&g?(n.child=Yr(n,e.child,null,d),n.child=Yr(n,null,E,d)):vt(e,n,E,d),n.memoizedState=s.state,u&&rf(n,o,!0),n.child}function ep(e){var n=e.stateNode;n.pendingContext?tf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&tf(e,n.context,!1),Da(e,n.containerInfo)}function tp(e,n,o,s,u){return qr(),$a(u),n.flags|=256,vt(e,n,o,s),n.child}var Ja={dehydrated:null,treeContext:null,retryLane:0};function Za(e){return{baseLanes:e,cachePool:null,transitions:null}}function np(e,n,o){var s=n.pendingProps,u=Ue.current,d=!1,g=(n.flags&128)!==0,E;if((E=g)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(d=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),_e(Ue,u&1),e===null)return Aa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(g=s.children,e=s.fallback,d?(s=n.mode,d=n.child,g={mode:"hidden",children:g},!(s&1)&&d!==null?(d.childLanes=0,d.pendingProps=g):d=Cl(g,s,0,null),e=wr(e,s,o,null),d.return=n,e.return=n,d.sibling=e,n.child=d,n.child.memoizedState=Za(o),n.memoizedState=Ja,e):eu(n,g));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return P0(e,n,g,s,E,u,o);if(d){d=s.fallback,g=n.mode,u=e.child,E=u.sibling;var A={mode:"hidden",children:s.children};return!(g&1)&&n.child!==u?(s=n.child,s.childLanes=0,s.pendingProps=A,n.deletions=null):(s=Zn(u,A),s.subtreeFlags=u.subtreeFlags&14680064),E!==null?d=Zn(E,d):(d=wr(d,g,o,null),d.flags|=2),d.return=n,s.return=n,s.sibling=d,n.child=s,s=d,d=n.child,g=e.child.memoizedState,g=g===null?Za(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},d.memoizedState=g,d.childLanes=e.childLanes&~o,n.memoizedState=Ja,s}return d=e.child,e=d.sibling,s=Zn(d,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=o),s.return=n,s.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=s,n.memoizedState=null,s}function eu(e,n){return n=Cl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function fl(e,n,o,s){return s!==null&&$a(s),Yr(n,e.child,null,o),e=eu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function P0(e,n,o,s,u,d,g){if(o)return n.flags&256?(n.flags&=-257,s=Ga(Error(i(422))),fl(e,n,g,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(d=s.fallback,u=n.mode,s=Cl({mode:"visible",children:s.children},u,0,null),d=wr(d,u,g,null),d.flags|=2,s.return=n,d.return=n,s.sibling=d,n.child=s,n.mode&1&&Yr(n,e.child,null,g),n.child.memoizedState=Za(g),n.memoizedState=Ja,d);if(!(n.mode&1))return fl(e,n,g,null);if(u.data==="$!"){if(s=u.nextSibling&&u.nextSibling.dataset,s)var E=s.dgst;return s=E,d=Error(i(419)),s=Ga(d,s,void 0),fl(e,n,g,s)}if(E=(g&e.childLanes)!==0,Ct||E){if(s=rt,s!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(s.suspendedLanes|g)?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,Rn(e,u),en(s,e,u,-1))}return gu(),s=Ga(Error(i(421))),fl(e,n,g,s)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=H0.bind(null,e),u._reactRetry=n,null):(e=d.treeContext,Dt=Un(u.nextSibling),It=n,Me=!0,Yt=null,e!==null&&(Bt[Mt++]=An,Bt[Mt++]=$n,Bt[Mt++]=cr,An=e.id,$n=e.overflow,cr=n),n=eu(n,s.children),n.flags|=4096,n)}function rp(e,n,o){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Na(e.return,n,o)}function tu(e,n,o,s,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=o,d.tailMode=u)}function op(e,n,o){var s=n.pendingProps,u=s.revealOrder,d=s.tail;if(vt(e,n,s.children,o),s=Ue.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rp(e,o,n);else if(e.tag===19)rp(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(_e(Ue,s),!(n.mode&1))n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&il(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),tu(n,!1,u,o,d);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&il(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}tu(n,!0,o,null,d);break;case"together":tu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function pl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Pn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),mr|=n.lanes,!(o&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=Zn(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=Zn(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function N0(e,n,o){switch(n.tag){case 3:ep(n),qr();break;case 5:vf(n);break;case 1:bt(n.type)&&qi(n);break;case 4:Da(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,u=n.memoizedProps.value;_e(tl,s._currentValue),s._currentValue=u;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(_e(Ue,Ue.current&1),n.flags|=128,null):o&n.child.childLanes?np(e,n,o):(_e(Ue,Ue.current&1),e=Pn(e,n,o),e!==null?e.sibling:null);_e(Ue,Ue.current&1);break;case 19:if(s=(o&n.childLanes)!==0,e.flags&128){if(s)return op(e,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(Ue,Ue.current),s)break;return null;case 22:case 23:return n.lanes=0,Xf(e,n,o)}return Pn(e,n,o)}var ip,nu,lp,sp;ip=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},nu=function(){},lp=function(e,n,o,s){var u=e.memoizedProps;if(u!==s){e=n.stateNode,pr(dn.current);var d=null;switch(o){case"input":u=qe(e,u),s=qe(e,s),d=[];break;case"select":u=Y({},u,{value:void 0}),s=Y({},s,{value:void 0}),d=[];break;case"textarea":u=En(e,u),s=En(e,s),d=[];break;default:typeof u.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Qi)}Os(o,s);var g;o=null;for(D in u)if(!s.hasOwnProperty(D)&&u.hasOwnProperty(D)&&u[D]!=null)if(D==="style"){var E=u[D];for(g in E)E.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(a.hasOwnProperty(D)?d||(d=[]):(d=d||[]).push(D,null));for(D in s){var A=s[D];if(E=u!=null?u[D]:void 0,s.hasOwnProperty(D)&&A!==E&&(A!=null||E!=null))if(D==="style")if(E){for(g in E)!E.hasOwnProperty(g)||A&&A.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in A)A.hasOwnProperty(g)&&E[g]!==A[g]&&(o||(o={}),o[g]=A[g])}else o||(d||(d=[]),d.push(D,o)),o=A;else D==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,E=E?E.__html:void 0,A!=null&&E!==A&&(d=d||[]).push(D,A)):D==="children"?typeof A!="string"&&typeof A!="number"||(d=d||[]).push(D,""+A):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(a.hasOwnProperty(D)?(A!=null&&D==="onScroll"&&Fe("scroll",e),d||E===A||(d=[])):(d=d||[]).push(D,A))}o&&(d=d||[]).push("style",o);var D=d;(n.updateQueue=D)&&(n.flags|=4)}},sp=function(e,n,o,s){o!==s&&(n.flags|=4)};function Zo(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ht(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(n)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags&14680064,s|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=o,n}function j0(e,n,o){var s=n.pendingProps;switch(ba(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(n),null;case 1:return bt(n.type)&&Gi(),ht(n),null;case 3:return s=n.stateNode,Zr(),ze(Et),ze(ft),_a(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Zi(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Yt!==null&&(pu(Yt),Yt=null))),nu(e,n),ht(n),null;case 5:La(n);var u=pr(Go.current);if(o=n.type,e!==null&&n.stateNode!=null)lp(e,n,o,s,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(i(166));return ht(n),null}if(e=pr(dn.current),Zi(n)){s=n.stateNode,o=n.type;var d=n.memoizedProps;switch(s[cn]=n,s[Ho]=d,e=(n.mode&1)!==0,o){case"dialog":Fe("cancel",s),Fe("close",s);break;case"iframe":case"object":case"embed":Fe("load",s);break;case"video":case"audio":for(u=0;u<Bo.length;u++)Fe(Bo[u],s);break;case"source":Fe("error",s);break;case"img":case"image":case"link":Fe("error",s),Fe("load",s);break;case"details":Fe("toggle",s);break;case"input":Qe(s,d),Fe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Fe("invalid",s);break;case"textarea":xo(s,d),Fe("invalid",s)}Os(o,d),u=null;for(var g in d)if(d.hasOwnProperty(g)){var E=d[g];g==="children"?typeof E=="string"?s.textContent!==E&&(d.suppressHydrationWarning!==!0&&Vi(s.textContent,E,e),u=["children",E]):typeof E=="number"&&s.textContent!==""+E&&(d.suppressHydrationWarning!==!0&&Vi(s.textContent,E,e),u=["children",""+E]):a.hasOwnProperty(g)&&E!=null&&g==="onScroll"&&Fe("scroll",s)}switch(o){case"input":ye(s),sn(s,d,!0);break;case"textarea":ye(s),Vc(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Qi)}s=u,n.updateQueue=s,s!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qc(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=g.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=g.createElement(o,{is:s.is}):(e=g.createElement(o),o==="select"&&(g=e,s.multiple?g.multiple=!0:s.size&&(g.size=s.size))):e=g.createElementNS(e,o),e[cn]=n,e[Ho]=s,ip(e,n,!1,!1),n.stateNode=e;e:{switch(g=_s(o,s),o){case"dialog":Fe("cancel",e),Fe("close",e),u=s;break;case"iframe":case"object":case"embed":Fe("load",e),u=s;break;case"video":case"audio":for(u=0;u<Bo.length;u++)Fe(Bo[u],e);u=s;break;case"source":Fe("error",e),u=s;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),u=s;break;case"details":Fe("toggle",e),u=s;break;case"input":Qe(e,s),u=qe(e,s),Fe("invalid",e);break;case"option":u=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},u=Y({},s,{value:void 0}),Fe("invalid",e);break;case"textarea":xo(e,s),u=En(e,s),Fe("invalid",e);break;default:u=s}Os(o,u),E=u;for(d in E)if(E.hasOwnProperty(d)){var A=E[d];d==="style"?qc(e,A):d==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Kc(e,A)):d==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&ko(e,A):typeof A=="number"&&ko(e,""+A):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(a.hasOwnProperty(d)?A!=null&&d==="onScroll"&&Fe("scroll",e):A!=null&&O(e,d,A,g))}switch(o){case"input":ye(e),sn(e,s,!1);break;case"textarea":ye(e),Vc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+pe(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?an(e,!!s.multiple,d,!1):s.defaultValue!=null&&an(e,!!s.multiple,s.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Qi)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ht(n),null;case 6:if(e&&n.stateNode!=null)sp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(i(166));if(o=pr(Go.current),pr(dn.current),Zi(n)){if(s=n.stateNode,o=n.memoizedProps,s[cn]=n,(d=s.nodeValue!==o)&&(e=It,e!==null))switch(e.tag){case 3:Vi(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vi(s.nodeValue,o,(e.mode&1)!==0)}d&&(n.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[cn]=n,n.stateNode=s}return ht(n),null;case 13:if(ze(Ue),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Dt!==null&&n.mode&1&&!(n.flags&128))cf(),qr(),n.flags|=98560,d=!1;else if(d=Zi(n),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[cn]=n}else qr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ht(n),d=!1}else Yt!==null&&(pu(Yt),Yt=null),d=!0;if(!d)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||Ue.current&1?tt===0&&(tt=3):gu())),n.updateQueue!==null&&(n.flags|=4),ht(n),null);case 4:return Zr(),nu(e,n),e===null&&Mo(n.stateNode.containerInfo),ht(n),null;case 10:return Pa(n.type._context),ht(n),null;case 17:return bt(n.type)&&Gi(),ht(n),null;case 19:if(ze(Ue),d=n.memoizedState,d===null)return ht(n),null;if(s=(n.flags&128)!==0,g=d.rendering,g===null)if(s)Zo(d,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(g=il(e),g!==null){for(n.flags|=128,Zo(d,!1),s=g.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=o,o=n.child;o!==null;)d=o,e=s,d.flags&=14680066,g=d.alternate,g===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=g.childLanes,d.lanes=g.lanes,d.child=g.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=g.memoizedProps,d.memoizedState=g.memoizedState,d.updateQueue=g.updateQueue,d.type=g.type,e=g.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return _e(Ue,Ue.current&1|2),n.child}e=e.sibling}d.tail!==null&&Ye()>ro&&(n.flags|=128,s=!0,Zo(d,!1),n.lanes=4194304)}else{if(!s)if(e=il(g),e!==null){if(n.flags|=128,s=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Zo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Me)return ht(n),null}else 2*Ye()-d.renderingStartTime>ro&&o!==1073741824&&(n.flags|=128,s=!0,Zo(d,!1),n.lanes=4194304);d.isBackwards?(g.sibling=n.child,n.child=g):(o=d.last,o!==null?o.sibling=g:n.child=g,d.last=g)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=Ye(),n.sibling=null,o=Ue.current,_e(Ue,s?o&1|2:o&1),n):(ht(n),null);case 22:case 23:return mu(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Lt&1073741824&&(ht(n),n.subtreeFlags&6&&(n.flags|=8192)):ht(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function I0(e,n){switch(ba(n),n.tag){case 1:return bt(n.type)&&Gi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zr(),ze(Et),ze(ft),_a(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return La(n),null;case 13:if(ze(Ue),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));qr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ze(Ue),null;case 4:return Zr(),null;case 10:return Pa(n.type._context),null;case 22:case 23:return mu(),null;case 24:return null;default:return null}}var hl=!1,mt=!1,D0=typeof WeakSet=="function"?WeakSet:Set,re=null;function to(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){Ke(e,n,s)}else o.current=null}function ru(e,n,o){try{o()}catch(s){Ke(e,n,s)}}var ap=!1;function L0(e,n){if(ma=Di,e=zd(),sa(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var g=0,E=-1,A=-1,D=0,H=0,V=e,U=null;t:for(;;){for(var ee;V!==o||u!==0&&V.nodeType!==3||(E=g+u),V!==d||s!==0&&V.nodeType!==3||(A=g+s),V.nodeType===3&&(g+=V.nodeValue.length),(ee=V.firstChild)!==null;)U=V,V=ee;for(;;){if(V===e)break t;if(U===o&&++D===u&&(E=g),U===d&&++H===s&&(A=g),(ee=V.nextSibling)!==null)break;V=U,U=V.parentNode}V=ee}o=E===-1||A===-1?null:{start:E,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(ga={focusedElem:e,selectionRange:o},Di=!1,re=n;re!==null;)if(n=re,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,re=e;else for(;re!==null;){n=re;try{var ie=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var le=ie.memoizedProps,Xe=ie.memoizedState,j=n.stateNode,P=j.getSnapshotBeforeUpdate(n.elementType===n.type?le:Xt(n.type,le),Xe);j.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var I=n.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(G){Ke(n,n.return,G)}if(e=n.sibling,e!==null){e.return=n.return,re=e;break}re=n.return}return ie=ap,ap=!1,ie}function ei(e,n,o){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var u=s=s.next;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&ru(n,o,d)}u=u.next}while(u!==s)}}function ml(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==n)}}function ou(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function up(e){var n=e.alternate;n!==null&&(e.alternate=null,up(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[cn],delete n[Ho],delete n[xa],delete n[y0],delete n[v0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cp(e){return e.tag===5||e.tag===3||e.tag===4}function dp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function iu(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Qi));else if(s!==4&&(e=e.child,e!==null))for(iu(e,n,o),e=e.sibling;e!==null;)iu(e,n,o),e=e.sibling}function lu(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(lu(e,n,o),e=e.sibling;e!==null;)lu(e,n,o),e=e.sibling}var st=null,Jt=!1;function Gn(e,n,o){for(o=o.child;o!==null;)fp(e,n,o),o=o.sibling}function fp(e,n,o){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Ri,o)}catch{}switch(o.tag){case 5:mt||to(o,n);case 6:var s=st,u=Jt;st=null,Gn(e,n,o),st=s,Jt=u,st!==null&&(Jt?(e=st,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):st.removeChild(o.stateNode));break;case 18:st!==null&&(Jt?(e=st,o=o.stateNode,e.nodeType===8?wa(e.parentNode,o):e.nodeType===1&&wa(e,o),jo(e)):wa(st,o.stateNode));break;case 4:s=st,u=Jt,st=o.stateNode.containerInfo,Jt=!0,Gn(e,n,o),st=s,Jt=u;break;case 0:case 11:case 14:case 15:if(!mt&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){u=s=s.next;do{var d=u,g=d.destroy;d=d.tag,g!==void 0&&(d&2||d&4)&&ru(o,n,g),u=u.next}while(u!==s)}Gn(e,n,o);break;case 1:if(!mt&&(to(o,n),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(E){Ke(o,n,E)}Gn(e,n,o);break;case 21:Gn(e,n,o);break;case 22:o.mode&1?(mt=(s=mt)||o.memoizedState!==null,Gn(e,n,o),mt=s):Gn(e,n,o);break;default:Gn(e,n,o)}}function pp(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new D0),n.forEach(function(s){var u=W0.bind(null,e,s);o.has(s)||(o.add(s),s.then(u,u))})}}function Zt(e,n){var o=n.deletions;if(o!==null)for(var s=0;s<o.length;s++){var u=o[s];try{var d=e,g=n,E=g;e:for(;E!==null;){switch(E.tag){case 5:st=E.stateNode,Jt=!1;break e;case 3:st=E.stateNode.containerInfo,Jt=!0;break e;case 4:st=E.stateNode.containerInfo,Jt=!0;break e}E=E.return}if(st===null)throw Error(i(160));fp(d,g,u),st=null,Jt=!1;var A=u.alternate;A!==null&&(A.return=null),u.return=null}catch(D){Ke(u,n,D)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)hp(n,e),n=n.sibling}function hp(e,n){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Zt(n,e),pn(e),s&4){try{ei(3,e,e.return),ml(3,e)}catch(le){Ke(e,e.return,le)}try{ei(5,e,e.return)}catch(le){Ke(e,e.return,le)}}break;case 1:Zt(n,e),pn(e),s&512&&o!==null&&to(o,o.return);break;case 5:if(Zt(n,e),pn(e),s&512&&o!==null&&to(o,o.return),e.flags&32){var u=e.stateNode;try{ko(u,"")}catch(le){Ke(e,e.return,le)}}if(s&4&&(u=e.stateNode,u!=null)){var d=e.memoizedProps,g=o!==null?o.memoizedProps:d,E=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{E==="input"&&d.type==="radio"&&d.name!=null&&yt(u,d),_s(E,g);var D=_s(E,d);for(g=0;g<A.length;g+=2){var H=A[g],V=A[g+1];H==="style"?qc(u,V):H==="dangerouslySetInnerHTML"?Kc(u,V):H==="children"?ko(u,V):O(u,H,V,D)}switch(E){case"input":Nt(u,d);break;case"textarea":Ds(u,d);break;case"select":var U=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var ee=d.value;ee!=null?an(u,!!d.multiple,ee,!1):U!==!!d.multiple&&(d.defaultValue!=null?an(u,!!d.multiple,d.defaultValue,!0):an(u,!!d.multiple,d.multiple?[]:"",!1))}u[Ho]=d}catch(le){Ke(e,e.return,le)}}break;case 6:if(Zt(n,e),pn(e),s&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,d=e.memoizedProps;try{u.nodeValue=d}catch(le){Ke(e,e.return,le)}}break;case 3:if(Zt(n,e),pn(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{jo(n.containerInfo)}catch(le){Ke(e,e.return,le)}break;case 4:Zt(n,e),pn(e);break;case 13:Zt(n,e),pn(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(uu=Ye())),s&4&&pp(e);break;case 22:if(H=o!==null&&o.memoizedState!==null,e.mode&1?(mt=(D=mt)||H,Zt(n,e),mt=D):Zt(n,e),pn(e),s&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!H&&e.mode&1)for(re=e,H=e.child;H!==null;){for(V=re=H;re!==null;){switch(U=re,ee=U.child,U.tag){case 0:case 11:case 14:case 15:ei(4,U,U.return);break;case 1:to(U,U.return);var ie=U.stateNode;if(typeof ie.componentWillUnmount=="function"){s=U,o=U.return;try{n=s,ie.props=n.memoizedProps,ie.state=n.memoizedState,ie.componentWillUnmount()}catch(le){Ke(s,o,le)}}break;case 5:to(U,U.return);break;case 22:if(U.memoizedState!==null){yp(V);continue}}ee!==null?(ee.return=U,re=ee):yp(V)}H=H.sibling}e:for(H=null,V=e;;){if(V.tag===5){if(H===null){H=V;try{u=V.stateNode,D?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(E=V.stateNode,A=V.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null,E.style.display=Gc("display",g))}catch(le){Ke(e,e.return,le)}}}else if(V.tag===6){if(H===null)try{V.stateNode.nodeValue=D?"":V.memoizedProps}catch(le){Ke(e,e.return,le)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;H===V&&(H=null),V=V.return}H===V&&(H=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Zt(n,e),pn(e),s&4&&pp(e);break;case 21:break;default:Zt(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(cp(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var u=s.stateNode;s.flags&32&&(ko(u,""),s.flags&=-33);var d=dp(e);lu(e,d,u);break;case 3:case 4:var g=s.stateNode.containerInfo,E=dp(e);iu(e,E,g);break;default:throw Error(i(161))}}catch(A){Ke(e,e.return,A)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function O0(e,n,o){re=e,mp(e)}function mp(e,n,o){for(var s=(e.mode&1)!==0;re!==null;){var u=re,d=u.child;if(u.tag===22&&s){var g=u.memoizedState!==null||hl;if(!g){var E=u.alternate,A=E!==null&&E.memoizedState!==null||mt;E=hl;var D=mt;if(hl=g,(mt=A)&&!D)for(re=u;re!==null;)g=re,A=g.child,g.tag===22&&g.memoizedState!==null?vp(u):A!==null?(A.return=g,re=A):vp(u);for(;d!==null;)re=d,mp(d),d=d.sibling;re=u,hl=E,mt=D}gp(e)}else u.subtreeFlags&8772&&d!==null?(d.return=u,re=d):gp(e)}}function gp(e){for(;re!==null;){var n=re;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:mt||ml(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!mt)if(o===null)s.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Xt(n.type,o.memoizedProps);s.componentDidUpdate(u,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=n.updateQueue;d!==null&&yf(n,d,s);break;case 3:var g=n.updateQueue;if(g!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}yf(n,g,o)}break;case 5:var E=n.stateNode;if(o===null&&n.flags&4){o=E;var A=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var D=n.alternate;if(D!==null){var H=D.memoizedState;if(H!==null){var V=H.dehydrated;V!==null&&jo(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}mt||n.flags&512&&ou(n)}catch(U){Ke(n,n.return,U)}}if(n===e){re=null;break}if(o=n.sibling,o!==null){o.return=n.return,re=o;break}re=n.return}}function yp(e){for(;re!==null;){var n=re;if(n===e){re=null;break}var o=n.sibling;if(o!==null){o.return=n.return,re=o;break}re=n.return}}function vp(e){for(;re!==null;){var n=re;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{ml(4,n)}catch(A){Ke(n,o,A)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var u=n.return;try{s.componentDidMount()}catch(A){Ke(n,u,A)}}var d=n.return;try{ou(n)}catch(A){Ke(n,d,A)}break;case 5:var g=n.return;try{ou(n)}catch(A){Ke(n,g,A)}}}catch(A){Ke(n,n.return,A)}if(n===e){re=null;break}var E=n.sibling;if(E!==null){E.return=n.return,re=E;break}re=n.return}}var _0=Math.ceil,gl=W.ReactCurrentDispatcher,su=W.ReactCurrentOwner,Wt=W.ReactCurrentBatchConfig,Ae=0,rt=null,Je=null,at=0,Lt=0,no=Hn(0),tt=0,ti=null,mr=0,yl=0,au=0,ni=null,At=null,uu=0,ro=1/0,Nn=null,vl=!1,cu=null,qn=null,wl=!1,Yn=null,xl=0,ri=0,du=null,kl=-1,Sl=0;function wt(){return Ae&6?Ye():kl!==-1?kl:kl=Ye()}function Xn(e){return e.mode&1?Ae&2&&at!==0?at&-at:x0.transition!==null?(Sl===0&&(Sl=cd()),Sl):(e=De,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function en(e,n,o,s){if(50<ri)throw ri=0,du=null,Error(i(185));$o(e,o,s),(!(Ae&2)||e!==rt)&&(e===rt&&(!(Ae&2)&&(yl|=o),tt===4&&Jn(e,at)),$t(e,s),o===1&&Ae===0&&!(n.mode&1)&&(ro=Ye()+500,Yi&&Vn()))}function $t(e,n){var o=e.callbackNode;xy(e,n);var s=Ni(e,e===rt?at:0);if(s===0)o!==null&&sd(o),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(o!=null&&sd(o),n===1)e.tag===0?w0(xp.bind(null,e)):of(xp.bind(null,e)),m0(function(){!(Ae&6)&&Vn()}),o=null;else{switch(dd(s)){case 1:o=Ws;break;case 4:o=ad;break;case 16:o=$i;break;case 536870912:o=ud;break;default:o=$i}o=Rp(o,wp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function wp(e,n){if(kl=-1,Sl=0,Ae&6)throw Error(i(327));var o=e.callbackNode;if(oo()&&e.callbackNode!==o)return null;var s=Ni(e,e===rt?at:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=El(e,s);else{n=s;var u=Ae;Ae|=2;var d=Sp();(rt!==e||at!==n)&&(Nn=null,ro=Ye()+500,yr(e,n));do try{B0();break}catch(E){kp(e,E)}while(!0);Ta(),gl.current=d,Ae=u,Je!==null?n=0:(rt=null,at=0,n=tt)}if(n!==0){if(n===2&&(u=Vs(e),u!==0&&(s=u,n=fu(e,u))),n===1)throw o=ti,yr(e,0),Jn(e,s),$t(e,Ye()),o;if(n===6)Jn(e,s);else{if(u=e.current.alternate,!(s&30)&&!F0(u)&&(n=El(e,s),n===2&&(d=Vs(e),d!==0&&(s=d,n=fu(e,d))),n===1))throw o=ti,yr(e,0),Jn(e,s),$t(e,Ye()),o;switch(e.finishedWork=u,e.finishedLanes=s,n){case 0:case 1:throw Error(i(345));case 2:vr(e,At,Nn);break;case 3:if(Jn(e,s),(s&130023424)===s&&(n=uu+500-Ye(),10<n)){if(Ni(e,0)!==0)break;if(u=e.suspendedLanes,(u&s)!==s){wt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=va(vr.bind(null,e,At,Nn),n);break}vr(e,At,Nn);break;case 4:if(Jn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,u=-1;0<s;){var g=31-Gt(s);d=1<<g,g=n[g],g>u&&(u=g),s&=~d}if(s=u,s=Ye()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*_0(s/1960))-s,10<s){e.timeoutHandle=va(vr.bind(null,e,At,Nn),s);break}vr(e,At,Nn);break;case 5:vr(e,At,Nn);break;default:throw Error(i(329))}}}return $t(e,Ye()),e.callbackNode===o?wp.bind(null,e):null}function fu(e,n){var o=ni;return e.current.memoizedState.isDehydrated&&(yr(e,n).flags|=256),e=El(e,n),e!==2&&(n=At,At=o,n!==null&&pu(n)),e}function pu(e){At===null?At=e:At.push.apply(At,e)}function F0(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var u=o[s],d=u.getSnapshot;u=u.value;try{if(!qt(d(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Jn(e,n){for(n&=~au,n&=~yl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-Gt(n),s=1<<o;e[o]=-1,n&=~s}}function xp(e){if(Ae&6)throw Error(i(327));oo();var n=Ni(e,0);if(!(n&1))return $t(e,Ye()),null;var o=El(e,n);if(e.tag!==0&&o===2){var s=Vs(e);s!==0&&(n=s,o=fu(e,s))}if(o===1)throw o=ti,yr(e,0),Jn(e,n),$t(e,Ye()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,vr(e,At,Nn),$t(e,Ye()),null}function hu(e,n){var o=Ae;Ae|=1;try{return e(n)}finally{Ae=o,Ae===0&&(ro=Ye()+500,Yi&&Vn())}}function gr(e){Yn!==null&&Yn.tag===0&&!(Ae&6)&&oo();var n=Ae;Ae|=1;var o=Wt.transition,s=De;try{if(Wt.transition=null,De=1,e)return e()}finally{De=s,Wt.transition=o,Ae=n,!(Ae&6)&&Vn()}}function mu(){Lt=no.current,ze(no)}function yr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,h0(o)),Je!==null)for(o=Je.return;o!==null;){var s=o;switch(ba(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Gi();break;case 3:Zr(),ze(Et),ze(ft),_a();break;case 5:La(s);break;case 4:Zr();break;case 13:ze(Ue);break;case 19:ze(Ue);break;case 10:Pa(s.type._context);break;case 22:case 23:mu()}o=o.return}if(rt=e,Je=e=Zn(e.current,null),at=Lt=n,tt=0,ti=null,au=yl=mr=0,At=ni=null,fr!==null){for(n=0;n<fr.length;n++)if(o=fr[n],s=o.interleaved,s!==null){o.interleaved=null;var u=s.next,d=o.pending;if(d!==null){var g=d.next;d.next=u,s.next=g}o.pending=s}fr=null}return e}function kp(e,n){do{var o=Je;try{if(Ta(),ll.current=cl,sl){for(var s=He.memoizedState;s!==null;){var u=s.queue;u!==null&&(u.pending=null),s=s.next}sl=!1}if(hr=0,nt=et=He=null,qo=!1,Yo=0,su.current=null,o===null||o.return===null){tt=1,ti=n,Je=null;break}e:{var d=e,g=o.return,E=o,A=n;if(n=at,E.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var D=A,H=E,V=H.tag;if(!(H.mode&1)&&(V===0||V===11||V===15)){var U=H.alternate;U?(H.updateQueue=U.updateQueue,H.memoizedState=U.memoizedState,H.lanes=U.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=Qf(g);if(ee!==null){ee.flags&=-257,Kf(ee,g,E,d,n),ee.mode&1&&Vf(d,D,n),n=ee,A=D;var ie=n.updateQueue;if(ie===null){var le=new Set;le.add(A),n.updateQueue=le}else ie.add(A);break e}else{if(!(n&1)){Vf(d,D,n),gu();break e}A=Error(i(426))}}else if(Me&&E.mode&1){var Xe=Qf(g);if(Xe!==null){!(Xe.flags&65536)&&(Xe.flags|=256),Kf(Xe,g,E,d,n),$a(eo(A,E));break e}}d=A=eo(A,E),tt!==4&&(tt=2),ni===null?ni=[d]:ni.push(d),d=g;do{switch(d.tag){case 3:d.flags|=65536,n&=-n,d.lanes|=n;var j=Hf(d,A,n);gf(d,j);break e;case 1:E=A;var P=d.type,I=d.stateNode;if(!(d.flags&128)&&(typeof P.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(qn===null||!qn.has(I)))){d.flags|=65536,n&=-n,d.lanes|=n;var G=Wf(d,E,n);gf(d,G);break e}}d=d.return}while(d!==null)}bp(o)}catch(ae){n=ae,Je===o&&o!==null&&(Je=o=o.return);continue}break}while(!0)}function Sp(){var e=gl.current;return gl.current=cl,e===null?cl:e}function gu(){(tt===0||tt===3||tt===2)&&(tt=4),rt===null||!(mr&268435455)&&!(yl&268435455)||Jn(rt,at)}function El(e,n){var o=Ae;Ae|=2;var s=Sp();(rt!==e||at!==n)&&(Nn=null,yr(e,n));do try{z0();break}catch(u){kp(e,u)}while(!0);if(Ta(),Ae=o,gl.current=s,Je!==null)throw Error(i(261));return rt=null,at=0,tt}function z0(){for(;Je!==null;)Ep(Je)}function B0(){for(;Je!==null&&!dy();)Ep(Je)}function Ep(e){var n=$p(e.alternate,e,Lt);e.memoizedProps=e.pendingProps,n===null?bp(e):Je=n,su.current=null}function bp(e){var n=e;do{var o=n.alternate;if(e=n.return,n.flags&32768){if(o=I0(o,n),o!==null){o.flags&=32767,Je=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Je=null;return}}else if(o=j0(o,n,Lt),o!==null){Je=o;return}if(n=n.sibling,n!==null){Je=n;return}Je=n=e}while(n!==null);tt===0&&(tt=5)}function vr(e,n,o){var s=De,u=Wt.transition;try{Wt.transition=null,De=1,M0(e,n,o,s)}finally{Wt.transition=u,De=s}return null}function M0(e,n,o,s){do oo();while(Yn!==null);if(Ae&6)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=o.lanes|o.childLanes;if(ky(e,d),e===rt&&(Je=rt=null,at=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||wl||(wl=!0,Rp($i,function(){return oo(),null})),d=(o.flags&15990)!==0,o.subtreeFlags&15990||d){d=Wt.transition,Wt.transition=null;var g=De;De=1;var E=Ae;Ae|=4,su.current=null,L0(e,o),hp(o,e),s0(ga),Di=!!ma,ga=ma=null,e.current=o,O0(o),fy(),Ae=E,De=g,Wt.transition=d}else e.current=o;if(wl&&(wl=!1,Yn=e,xl=u),d=e.pendingLanes,d===0&&(qn=null),my(o.stateNode),$t(e,Ye()),n!==null)for(s=e.onRecoverableError,o=0;o<n.length;o++)u=n[o],s(u.value,{componentStack:u.stack,digest:u.digest});if(vl)throw vl=!1,e=cu,cu=null,e;return xl&1&&e.tag!==0&&oo(),d=e.pendingLanes,d&1?e===du?ri++:(ri=0,du=e):ri=0,Vn(),null}function oo(){if(Yn!==null){var e=dd(xl),n=Wt.transition,o=De;try{if(Wt.transition=null,De=16>e?16:e,Yn===null)var s=!1;else{if(e=Yn,Yn=null,xl=0,Ae&6)throw Error(i(331));var u=Ae;for(Ae|=4,re=e.current;re!==null;){var d=re,g=d.child;if(re.flags&16){var E=d.deletions;if(E!==null){for(var A=0;A<E.length;A++){var D=E[A];for(re=D;re!==null;){var H=re;switch(H.tag){case 0:case 11:case 15:ei(8,H,d)}var V=H.child;if(V!==null)V.return=H,re=V;else for(;re!==null;){H=re;var U=H.sibling,ee=H.return;if(up(H),H===D){re=null;break}if(U!==null){U.return=ee,re=U;break}re=ee}}}var ie=d.alternate;if(ie!==null){var le=ie.child;if(le!==null){ie.child=null;do{var Xe=le.sibling;le.sibling=null,le=Xe}while(le!==null)}}re=d}}if(d.subtreeFlags&2064&&g!==null)g.return=d,re=g;else e:for(;re!==null;){if(d=re,d.flags&2048)switch(d.tag){case 0:case 11:case 15:ei(9,d,d.return)}var j=d.sibling;if(j!==null){j.return=d.return,re=j;break e}re=d.return}}var P=e.current;for(re=P;re!==null;){g=re;var I=g.child;if(g.subtreeFlags&2064&&I!==null)I.return=g,re=I;else e:for(g=P;re!==null;){if(E=re,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:ml(9,E)}}catch(ae){Ke(E,E.return,ae)}if(E===g){re=null;break e}var G=E.sibling;if(G!==null){G.return=E.return,re=G;break e}re=E.return}}if(Ae=u,Vn(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Ri,e)}catch{}s=!0}return s}finally{De=o,Wt.transition=n}}return!1}function Cp(e,n,o){n=eo(o,n),n=Hf(e,n,1),e=Kn(e,n,1),n=wt(),e!==null&&($o(e,1,n),$t(e,n))}function Ke(e,n,o){if(e.tag===3)Cp(e,e,o);else for(;n!==null;){if(n.tag===3){Cp(n,e,o);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(qn===null||!qn.has(s))){e=eo(o,e),e=Wf(n,e,1),n=Kn(n,e,1),e=wt(),n!==null&&($o(n,1,e),$t(n,e));break}}n=n.return}}function U0(e,n,o){var s=e.pingCache;s!==null&&s.delete(n),n=wt(),e.pingedLanes|=e.suspendedLanes&o,rt===e&&(at&o)===o&&(tt===4||tt===3&&(at&130023424)===at&&500>Ye()-uu?yr(e,0):au|=o),$t(e,n)}function Ap(e,n){n===0&&(e.mode&1?(n=Pi,Pi<<=1,!(Pi&130023424)&&(Pi=4194304)):n=1);var o=wt();e=Rn(e,n),e!==null&&($o(e,n,o),$t(e,o))}function H0(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Ap(e,o)}function W0(e,n){var o=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(n),Ap(e,o)}var $p;$p=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Et.current)Ct=!0;else{if(!(e.lanes&o)&&!(n.flags&128))return Ct=!1,N0(e,n,o);Ct=!!(e.flags&131072)}else Ct=!1,Me&&n.flags&1048576&&lf(n,Ji,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;pl(e,n),e=n.pendingProps;var u=Qr(n,ft.current);Jr(n,o),u=Ba(null,n,s,e,u,o);var d=Ma();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,bt(s)?(d=!0,qi(n)):d=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ia(n),u.updater=dl,n.stateNode=u,u._reactInternals=n,Ka(n,s,e,o),n=Xa(null,n,s,!0,d,o)):(n.tag=0,Me&&d&&Ea(n),vt(null,n,u,o),n=n.child),n;case 16:s=n.elementType;e:{switch(pl(e,n),e=n.pendingProps,u=s._init,s=u(s._payload),n.type=s,u=n.tag=Q0(s),e=Xt(s,e),u){case 0:n=Ya(null,n,s,e,o);break e;case 1:n=Zf(null,n,s,e,o);break e;case 11:n=Gf(null,n,s,e,o);break e;case 14:n=qf(null,n,s,Xt(s.type,e),o);break e}throw Error(i(306,s,""))}return n;case 0:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Xt(s,u),Ya(e,n,s,u,o);case 1:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Xt(s,u),Zf(e,n,s,u,o);case 3:e:{if(ep(n),e===null)throw Error(i(387));s=n.pendingProps,d=n.memoizedState,u=d.element,mf(e,n),ol(n,s,null,o);var g=n.memoizedState;if(s=g.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){u=eo(Error(i(423)),n),n=tp(e,n,s,o,u);break e}else if(s!==u){u=eo(Error(i(424)),n),n=tp(e,n,s,o,u);break e}else for(Dt=Un(n.stateNode.containerInfo.firstChild),It=n,Me=!0,Yt=null,o=pf(n,null,s,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(qr(),s===u){n=Pn(e,n,o);break e}vt(e,n,s,o)}n=n.child}return n;case 5:return vf(n),e===null&&Aa(n),s=n.type,u=n.pendingProps,d=e!==null?e.memoizedProps:null,g=u.children,ya(s,u)?g=null:d!==null&&ya(s,d)&&(n.flags|=32),Jf(e,n),vt(e,n,g,o),n.child;case 6:return e===null&&Aa(n),null;case 13:return np(e,n,o);case 4:return Da(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Yr(n,null,s,o):vt(e,n,s,o),n.child;case 11:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Xt(s,u),Gf(e,n,s,u,o);case 7:return vt(e,n,n.pendingProps,o),n.child;case 8:return vt(e,n,n.pendingProps.children,o),n.child;case 12:return vt(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(s=n.type._context,u=n.pendingProps,d=n.memoizedProps,g=u.value,_e(tl,s._currentValue),s._currentValue=g,d!==null)if(qt(d.value,g)){if(d.children===u.children&&!Et.current){n=Pn(e,n,o);break e}}else for(d=n.child,d!==null&&(d.return=n);d!==null;){var E=d.dependencies;if(E!==null){g=d.child;for(var A=E.firstContext;A!==null;){if(A.context===s){if(d.tag===1){A=Tn(-1,o&-o),A.tag=2;var D=d.updateQueue;if(D!==null){D=D.shared;var H=D.pending;H===null?A.next=A:(A.next=H.next,H.next=A),D.pending=A}}d.lanes|=o,A=d.alternate,A!==null&&(A.lanes|=o),Na(d.return,o,n),E.lanes|=o;break}A=A.next}}else if(d.tag===10)g=d.type===n.type?null:d.child;else if(d.tag===18){if(g=d.return,g===null)throw Error(i(341));g.lanes|=o,E=g.alternate,E!==null&&(E.lanes|=o),Na(g,o,n),g=d.sibling}else g=d.child;if(g!==null)g.return=d;else for(g=d;g!==null;){if(g===n){g=null;break}if(d=g.sibling,d!==null){d.return=g.return,g=d;break}g=g.return}d=g}vt(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,s=n.pendingProps.children,Jr(n,o),u=Ut(u),s=s(u),n.flags|=1,vt(e,n,s,o),n.child;case 14:return s=n.type,u=Xt(s,n.pendingProps),u=Xt(s.type,u),qf(e,n,s,u,o);case 15:return Yf(e,n,n.type,n.pendingProps,o);case 17:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Xt(s,u),pl(e,n),n.tag=1,bt(s)?(e=!0,qi(n)):e=!1,Jr(n,o),Mf(n,s,u),Ka(n,s,u,o),Xa(null,n,s,!0,e,o);case 19:return op(e,n,o);case 22:return Xf(e,n,o)}throw Error(i(156,n.tag))};function Rp(e,n){return ld(e,n)}function V0(e,n,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,n,o,s){return new V0(e,n,o,s)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Q0(e){if(typeof e=="function")return yu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===be)return 11;if(e===$e)return 14}return 2}function Zn(e,n){var o=e.alternate;return o===null?(o=Vt(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function bl(e,n,o,s,u,d){var g=2;if(s=e,typeof e=="function")yu(e)&&(g=1);else if(typeof e=="string")g=5;else e:switch(e){case q:return wr(o.children,u,d,n);case fe:g=8,u|=8;break;case ge:return e=Vt(12,o,n,u|2),e.elementType=ge,e.lanes=d,e;case Pe:return e=Vt(13,o,n,u),e.elementType=Pe,e.lanes=d,e;case Te:return e=Vt(19,o,n,u),e.elementType=Te,e.lanes=d,e;case ke:return Cl(o,u,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:g=10;break e;case Le:g=9;break e;case be:g=11;break e;case $e:g=14;break e;case Ne:g=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Vt(g,o,n,u),n.elementType=e,n.type=s,n.lanes=d,n}function wr(e,n,o,s){return e=Vt(7,e,s,n),e.lanes=o,e}function Cl(e,n,o,s){return e=Vt(22,e,s,n),e.elementType=ke,e.lanes=o,e.stateNode={isHidden:!1},e}function vu(e,n,o){return e=Vt(6,e,null,n),e.lanes=o,e}function wu(e,n,o){return n=Vt(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function K0(e,n,o,s,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qs(0),this.expirationTimes=Qs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.identifierPrefix=s,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function xu(e,n,o,s,u,d,g,E,A){return e=new K0(e,n,o,E,A),n===1?(n=1,d===!0&&(n|=8)):n=0,d=Vt(3,null,null,n),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ia(d),e}function G0(e,n,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:s==null?null:""+s,children:e,containerInfo:n,implementation:o}}function Tp(e){if(!e)return Wn;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(bt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(bt(o))return nf(e,o,n)}return n}function Pp(e,n,o,s,u,d,g,E,A){return e=xu(o,s,!0,e,u,d,g,E,A),e.context=Tp(null),o=e.current,s=wt(),u=Xn(o),d=Tn(s,u),d.callback=n??null,Kn(o,d,u),e.current.lanes=u,$o(e,u,s),$t(e,s),e}function Al(e,n,o,s){var u=n.current,d=wt(),g=Xn(u);return o=Tp(o),n.context===null?n.context=o:n.pendingContext=o,n=Tn(d,g),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Kn(u,n,g),e!==null&&(en(e,u,g,d),rl(e,u,g)),g}function $l(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Np(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function ku(e,n){Np(e,n),(e=e.alternate)&&Np(e,n)}var jp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Su(e){this._internalRoot=e}Rl.prototype.render=Su.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));Al(e,n,null,null)},Rl.prototype.unmount=Su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;gr(function(){Al(null,e,null,null)}),n[bn]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var n=hd();e={blockedOn:null,target:e,priority:n};for(var o=0;o<zn.length&&n!==0&&n<zn[o].priority;o++);zn.splice(o,0,e),o===0&&yd(e)}};function Eu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function q0(e,n,o,s,u){if(u){if(typeof s=="function"){var d=s;s=function(){var D=$l(g);d.call(D)}}var g=Pp(n,s,e,0,null,!1,!1,"",Ip);return e._reactRootContainer=g,e[bn]=g.current,Mo(e.nodeType===8?e.parentNode:e),gr(),g}for(;u=e.lastChild;)e.removeChild(u);if(typeof s=="function"){var E=s;s=function(){var D=$l(A);E.call(D)}}var A=xu(e,0,!1,null,null,!1,!1,"",Ip);return e._reactRootContainer=A,e[bn]=A.current,Mo(e.nodeType===8?e.parentNode:e),gr(function(){Al(n,A,o,s)}),A}function Pl(e,n,o,s,u){var d=o._reactRootContainer;if(d){var g=d;if(typeof u=="function"){var E=u;u=function(){var A=$l(g);E.call(A)}}Al(n,g,e,u)}else g=q0(o,n,e,u,s);return $l(g)}fd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=Ao(n.pendingLanes);o!==0&&(Ks(n,o|1),$t(n,Ye()),!(Ae&6)&&(ro=Ye()+500,Vn()))}break;case 13:gr(function(){var s=Rn(e,1);if(s!==null){var u=wt();en(s,e,1,u)}}),ku(e,1)}},Gs=function(e){if(e.tag===13){var n=Rn(e,134217728);if(n!==null){var o=wt();en(n,e,134217728,o)}ku(e,134217728)}},pd=function(e){if(e.tag===13){var n=Xn(e),o=Rn(e,n);if(o!==null){var s=wt();en(o,e,n,s)}ku(e,n)}},hd=function(){return De},md=function(e,n){var o=De;try{return De=e,n()}finally{De=o}},Bs=function(e,n,o){switch(n){case"input":if(Nt(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var s=o[n];if(s!==e&&s.form===e.form){var u=Ki(s);if(!u)throw Error(i(90));Ee(s),Nt(s,u)}}}break;case"textarea":Ds(e,o);break;case"select":n=o.value,n!=null&&an(e,!!o.multiple,n,!1)}},Zc=hu,ed=gr;var Y0={usingClientEntryPoint:!1,Events:[Wo,Wr,Ki,Xc,Jc,hu]},oi={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},X0={bundleType:oi.bundleType,version:oi.version,rendererPackageName:oi.rendererPackageName,rendererConfig:oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=od(e),e===null?null:e.stateNode},findFiberByHostInstance:oi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Ri=Nl.inject(X0),un=Nl}catch{}}return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0,Rt.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eu(n))throw Error(i(200));return G0(e,n,null,o)},Rt.createRoot=function(e,n){if(!Eu(e))throw Error(i(299));var o=!1,s="",u=jp;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=xu(e,1,!1,null,null,o,!1,s,u),e[bn]=n.current,Mo(e.nodeType===8?e.parentNode:e),new Su(n)},Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=od(n),e=e===null?null:e.stateNode,e},Rt.flushSync=function(e){return gr(e)},Rt.hydrate=function(e,n,o){if(!Tl(n))throw Error(i(200));return Pl(null,e,n,!0,o)},Rt.hydrateRoot=function(e,n,o){if(!Eu(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,u=!1,d="",g=jp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),n=Pp(n,null,e,1,o??null,u,!1,d,g),e[bn]=n.current,Mo(e),s)for(e=0;e<s.length;e++)o=s[e],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Rl(n)},Rt.render=function(e,n,o){if(!Tl(n))throw Error(i(200));return Pl(null,e,n,!1,o)},Rt.unmountComponentAtNode=function(e){if(!Tl(e))throw Error(i(40));return e._reactRootContainer?(gr(function(){Pl(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},Rt.unstable_batchedUpdates=hu,Rt.unstable_renderSubtreeIntoContainer=function(e,n,o,s){if(!Tl(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Pl(e,n,o,!1,s)},Rt.version="18.3.1-next-f1338f8080-20240426",Rt}var Mp;function Qh(){if(Mp)return Au.exports;Mp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Au.exports=lv(),Au.exports}var Up;function sv(){if(Up)return jl;Up=1;var t=Qh();return jl.createRoot=t.createRoot,jl.hydrateRoot=t.hydrateRoot,jl}var av=sv(),lt=function(){return lt=Object.assign||function(r){for(var i,l=1,a=arguments.length;l<a;l++){i=arguments[l];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(r[c]=i[c])}return r},lt.apply(this,arguments)};function di(t,r,i){if(i||arguments.length===2)for(var l=0,a=r.length,c;l<a;l++)(c||!(l in r))&&(c||(c=Array.prototype.slice.call(r,0,l)),c[l]=r[l]);return t.concat(c||Array.prototype.slice.call(r))}var Be="-ms-",ci="-moz-",je="-webkit-",Kh="comm",ls="rule",mc="decl",uv="@import",Gh="@keyframes",cv="@layer",qh=Math.abs,gc=String.fromCharCode,Wu=Object.assign;function dv(t,r){return it(t,0)^45?(((r<<2^it(t,0))<<2^it(t,1))<<2^it(t,2))<<2^it(t,3):0}function Yh(t){return t.trim()}function In(t,r){return(t=r.exec(t))?t[0]:t}function we(t,r,i){return t.replace(r,i)}function Ml(t,r,i){return t.indexOf(r,i)}function it(t,r){return t.charCodeAt(r)|0}function ao(t,r,i){return t.slice(r,i)}function mn(t){return t.length}function Xh(t){return t.length}function ui(t,r){return r.push(t),t}function fv(t,r){return t.map(r).join("")}function Hp(t,r){return t.filter(function(i){return!In(i,r)})}var ss=1,uo=1,Jh=0,Kt=0,Ze=0,mo="";function as(t,r,i,l,a,c,f,p){return{value:t,root:r,parent:i,type:l,props:a,children:c,line:ss,column:uo,length:f,return:"",siblings:p}}function tr(t,r){return Wu(as("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},r)}function io(t){for(;t.root;)t=tr(t.root,{children:[t]});ui(t,t.siblings)}function pv(){return Ze}function hv(){return Ze=Kt>0?it(mo,--Kt):0,uo--,Ze===10&&(uo=1,ss--),Ze}function nn(){return Ze=Kt<Jh?it(mo,Kt++):0,uo++,Ze===10&&(uo=1,ss++),Ze}function br(){return it(mo,Kt)}function Ul(){return Kt}function us(t,r){return ao(mo,t,r)}function Vu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mv(t){return ss=uo=1,Jh=mn(mo=t),Kt=0,[]}function gv(t){return mo="",t}function Tu(t){return Yh(us(Kt-1,Qu(t===91?t+2:t===40?t+1:t)))}function yv(t){for(;(Ze=br())&&Ze<33;)nn();return Vu(t)>2||Vu(Ze)>3?"":" "}function vv(t,r){for(;--r&&nn()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return us(t,Ul()+(r<6&&br()==32&&nn()==32))}function Qu(t){for(;nn();)switch(Ze){case t:return Kt;case 34:case 39:t!==34&&t!==39&&Qu(Ze);break;case 40:t===41&&Qu(t);break;case 92:nn();break}return Kt}function wv(t,r){for(;nn()&&t+Ze!==57;)if(t+Ze===84&&br()===47)break;return"/*"+us(r,Kt-1)+"*"+gc(t===47?t:nn())}function xv(t){for(;!Vu(br());)nn();return us(t,Kt)}function kv(t){return gv(Hl("",null,null,null,[""],t=mv(t),0,[0],t))}function Hl(t,r,i,l,a,c,f,p,h){for(var m=0,w=0,y=f,S=0,T=0,k=0,C=1,b=1,$=1,R=0,O="",W=a,Q=c,K=l,q=O;b;)switch(k=R,R=nn()){case 40:if(k!=108&&it(q,y-1)==58){Ml(q+=we(Tu(R),"&","&\f"),"&\f",qh(m?p[m-1]:0))!=-1&&($=-1);break}case 34:case 39:case 91:q+=Tu(R);break;case 9:case 10:case 13:case 32:q+=yv(k);break;case 92:q+=vv(Ul()-1,7);continue;case 47:switch(br()){case 42:case 47:ui(Sv(wv(nn(),Ul()),r,i,h),h);break;default:q+="/"}break;case 123*C:p[m++]=mn(q)*$;case 125*C:case 59:case 0:switch(R){case 0:case 125:b=0;case 59+w:$==-1&&(q=we(q,/\f/g,"")),T>0&&mn(q)-y&&ui(T>32?Vp(q+";",l,i,y-1,h):Vp(we(q," ","")+";",l,i,y-2,h),h);break;case 59:q+=";";default:if(ui(K=Wp(q,r,i,m,w,a,p,O,W=[],Q=[],y,c),c),R===123)if(w===0)Hl(q,r,K,K,W,c,y,p,Q);else switch(S===99&&it(q,3)===110?100:S){case 100:case 108:case 109:case 115:Hl(t,K,K,l&&ui(Wp(t,K,K,0,0,a,p,O,a,W=[],y,Q),Q),a,Q,y,p,l?W:Q);break;default:Hl(q,K,K,K,[""],Q,0,p,Q)}}m=w=T=0,C=$=1,O=q="",y=f;break;case 58:y=1+mn(q),T=k;default:if(C<1){if(R==123)--C;else if(R==125&&C++==0&&hv()==125)continue}switch(q+=gc(R),R*C){case 38:$=w>0?1:(q+="\f",-1);break;case 44:p[m++]=(mn(q)-1)*$,$=1;break;case 64:br()===45&&(q+=Tu(nn())),S=br(),w=y=mn(O=q+=xv(Ul())),R++;break;case 45:k===45&&mn(q)==2&&(C=0)}}return c}function Wp(t,r,i,l,a,c,f,p,h,m,w,y){for(var S=a-1,T=a===0?c:[""],k=Xh(T),C=0,b=0,$=0;C<l;++C)for(var R=0,O=ao(t,S+1,S=qh(b=f[C])),W=t;R<k;++R)(W=Yh(b>0?T[R]+" "+O:we(O,/&\f/g,T[R])))&&(h[$++]=W);return as(t,r,i,a===0?ls:p,h,m,w,y)}function Sv(t,r,i,l){return as(t,r,i,Kh,gc(pv()),ao(t,2,-2),0,l)}function Vp(t,r,i,l,a){return as(t,r,i,mc,ao(t,0,l),ao(t,l+1,-1),l,a)}function Zh(t,r,i){switch(dv(t,r)){case 5103:return je+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+t+t;case 4789:return ci+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return je+t+ci+t+Be+t+t;case 5936:switch(it(t,r+11)){case 114:return je+t+Be+we(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return je+t+Be+we(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return je+t+Be+we(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return je+t+Be+t+t;case 6165:return je+t+Be+"flex-"+t+t;case 5187:return je+t+we(t,/(\w+).+(:[^]+)/,je+"box-$1$2"+Be+"flex-$1$2")+t;case 5443:return je+t+Be+"flex-item-"+we(t,/flex-|-self/g,"")+(In(t,/flex-|baseline/)?"":Be+"grid-row-"+we(t,/flex-|-self/g,""))+t;case 4675:return je+t+Be+"flex-line-pack"+we(t,/align-content|flex-|-self/g,"")+t;case 5548:return je+t+Be+we(t,"shrink","negative")+t;case 5292:return je+t+Be+we(t,"basis","preferred-size")+t;case 6060:return je+"box-"+we(t,"-grow","")+je+t+Be+we(t,"grow","positive")+t;case 4554:return je+we(t,/([^-])(transform)/g,"$1"+je+"$2")+t;case 6187:return we(we(we(t,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),t,"")+t;case 5495:case 3959:return we(t,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return we(we(t,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+t+t;case 4200:if(!In(t,/flex-|baseline/))return Be+"grid-column-align"+ao(t,r)+t;break;case 2592:case 3360:return Be+we(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(l,a){return r=a,In(l.props,/grid-\w+-end/)})?~Ml(t+(i=i[r].value),"span",0)?t:Be+we(t,"-start","")+t+Be+"grid-row-span:"+(~Ml(i,"span",0)?In(i,/\d+/):+In(i,/\d+/)-+In(t,/\d+/))+";":Be+we(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(l){return In(l.props,/grid-\w+-start/)})?t:Be+we(we(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return we(t,/(.+)-inline(.+)/,je+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(t)-1-r>6)switch(it(t,r+1)){case 109:if(it(t,r+4)!==45)break;case 102:return we(t,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+ci+(it(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~Ml(t,"stretch",0)?Zh(we(t,"stretch","fill-available"),r,i)+t:t}break;case 5152:case 5920:return we(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,a,c,f,p,h,m){return Be+a+":"+c+m+(f?Be+a+"-span:"+(p?h:+h-+c)+m:"")+t});case 4949:if(it(t,r+6)===121)return we(t,":",":"+je)+t;break;case 6444:switch(it(t,it(t,14)===45?18:11)){case 120:return we(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(it(t,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Be+"$2box$3")+t;case 100:return we(t,":",":"+Be)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(t,"scroll-","scroll-snap-")+t}return t}function Xl(t,r){for(var i="",l=0;l<t.length;l++)i+=r(t[l],l,t,r)||"";return i}function Ev(t,r,i,l){switch(t.type){case cv:if(t.children.length)break;case uv:case mc:return t.return=t.return||t.value;case Kh:return"";case Gh:return t.return=t.value+"{"+Xl(t.children,l)+"}";case ls:if(!mn(t.value=t.props.join(",")))return""}return mn(i=Xl(t.children,l))?t.return=t.value+"{"+i+"}":""}function bv(t){var r=Xh(t);return function(i,l,a,c){for(var f="",p=0;p<r;p++)f+=t[p](i,l,a,c)||"";return f}}function Cv(t){return function(r){r.root||(r=r.return)&&t(r)}}function Av(t,r,i,l){if(t.length>-1&&!t.return)switch(t.type){case mc:t.return=Zh(t.value,t.length,i);return;case Gh:return Xl([tr(t,{value:we(t.value,"@","@"+je)})],l);case ls:if(t.length)return fv(i=t.props,function(a){switch(In(a,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":io(tr(t,{props:[we(a,/:(read-\w+)/,":"+ci+"$1")]})),io(tr(t,{props:[a]})),Wu(t,{props:Hp(i,l)});break;case"::placeholder":io(tr(t,{props:[we(a,/:(plac\w+)/,":"+je+"input-$1")]})),io(tr(t,{props:[we(a,/:(plac\w+)/,":"+ci+"$1")]})),io(tr(t,{props:[we(a,/:(plac\w+)/,Be+"input-$1")]})),io(tr(t,{props:[a]})),Wu(t,{props:Hp(i,l)});break}return""})}}var $v={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ot={},co=typeof process<"u"&&Ot!==void 0&&(Ot.REACT_APP_SC_ATTR||Ot.SC_ATTR)||"data-styled",em="active",tm="data-styled-version",cs="6.1.14",yc=`/*!sc*/
`,Jl=typeof window<"u"&&"HTMLElement"in window,Rv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ot.REACT_APP_SC_DISABLE_SPEEDY!==""?Ot.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ot.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ot!==void 0&&Ot.SC_DISABLE_SPEEDY!==void 0&&Ot.SC_DISABLE_SPEEDY!==""&&Ot.SC_DISABLE_SPEEDY!=="false"&&Ot.SC_DISABLE_SPEEDY),Tv={},ds=Object.freeze([]),fo=Object.freeze({});function nm(t,r,i){return i===void 0&&(i=fo),t.theme!==i.theme&&t.theme||r||i.theme}var rm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Pv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Nv=/(^-|-$)/g;function Qp(t){return t.replace(Pv,"-").replace(Nv,"")}var jv=/(a)(d)/gi,Il=52,Kp=function(t){return String.fromCharCode(t+(t>25?39:97))};function Ku(t){var r,i="";for(r=Math.abs(t);r>Il;r=r/Il|0)i=Kp(r%Il)+i;return(Kp(r%Il)+i).replace(jv,"$1-$2")}var Pu,om=5381,so=function(t,r){for(var i=r.length;i;)t=33*t^r.charCodeAt(--i);return t},im=function(t){return so(om,t)};function lm(t){return Ku(im(t)>>>0)}function Iv(t){return t.displayName||t.name||"Component"}function Nu(t){return typeof t=="string"&&!0}var sm=typeof Symbol=="function"&&Symbol.for,am=sm?Symbol.for("react.memo"):60115,Dv=sm?Symbol.for("react.forward_ref"):60112,Lv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ov={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},um={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_v=((Pu={})[Dv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pu[am]=um,Pu);function Gp(t){return("type"in(r=t)&&r.type.$$typeof)===am?um:"$$typeof"in t?_v[t.$$typeof]:Lv;var r}var Fv=Object.defineProperty,zv=Object.getOwnPropertyNames,qp=Object.getOwnPropertySymbols,Bv=Object.getOwnPropertyDescriptor,Mv=Object.getPrototypeOf,Yp=Object.prototype;function cm(t,r,i){if(typeof r!="string"){if(Yp){var l=Mv(r);l&&l!==Yp&&cm(t,l,i)}var a=zv(r);qp&&(a=a.concat(qp(r)));for(var c=Gp(t),f=Gp(r),p=0;p<a.length;++p){var h=a[p];if(!(h in Ov||i&&i[h]||f&&h in f||c&&h in c)){var m=Bv(r,h);try{Fv(t,h,m)}catch{}}}}return t}function Ar(t){return typeof t=="function"}function vc(t){return typeof t=="object"&&"styledComponentId"in t}function kr(t,r){return t&&r?"".concat(t," ").concat(r):t||r||""}function Gu(t,r){if(t.length===0)return"";for(var i=t[0],l=1;l<t.length;l++)i+=t[l];return i}function fi(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function qu(t,r,i){if(i===void 0&&(i=!1),!i&&!fi(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var l=0;l<r.length;l++)t[l]=qu(t[l],r[l]);else if(fi(r))for(var l in r)t[l]=qu(t[l],r[l]);return t}function wc(t,r){Object.defineProperty(t,"toString",{value:r})}function $r(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Uv=function(){function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return t.prototype.indexOfGroup=function(r){for(var i=0,l=0;l<r;l++)i+=this.groupSizes[l];return i},t.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var l=this.groupSizes,a=l.length,c=a;r>=c;)if((c<<=1)<0)throw $r(16,"".concat(r));this.groupSizes=new Uint32Array(c),this.groupSizes.set(l),this.length=c;for(var f=a;f<c;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(r+1),h=(f=0,i.length);f<h;f++)this.tag.insertRule(p,i[f])&&(this.groupSizes[r]++,p++)},t.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],l=this.indexOfGroup(r),a=l+i;this.groupSizes[r]=0;for(var c=l;c<a;c++)this.tag.deleteRule(l)}},t.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var l=this.groupSizes[r],a=this.indexOfGroup(r),c=a+l,f=a;f<c;f++)i+="".concat(this.tag.getRule(f)).concat(yc);return i},t}(),Wl=new Map,Zl=new Map,Vl=1,Dl=function(t){if(Wl.has(t))return Wl.get(t);for(;Zl.has(Vl);)Vl++;var r=Vl++;return Wl.set(t,r),Zl.set(r,t),r},Hv=function(t,r){Vl=r+1,Wl.set(t,r),Zl.set(r,t)},Wv="style[".concat(co,"][").concat(tm,'="').concat(cs,'"]'),Vv=new RegExp("^".concat(co,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qv=function(t,r,i){for(var l,a=i.split(","),c=0,f=a.length;c<f;c++)(l=a[c])&&t.registerName(r,l)},Kv=function(t,r){for(var i,l=((i=r.textContent)!==null&&i!==void 0?i:"").split(yc),a=[],c=0,f=l.length;c<f;c++){var p=l[c].trim();if(p){var h=p.match(Vv);if(h){var m=0|parseInt(h[1],10),w=h[2];m!==0&&(Hv(w,m),Qv(t,w,h[3]),t.getTag().insertRules(m,a)),a.length=0}else a.push(p)}}},Xp=function(t){for(var r=document.querySelectorAll(Wv),i=0,l=r.length;i<l;i++){var a=r[i];a&&a.getAttribute(co)!==em&&(Kv(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function Gv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var dm=function(t){var r=document.head,i=t||r,l=document.createElement("style"),a=function(p){var h=Array.from(p.querySelectorAll("style[".concat(co,"]")));return h[h.length-1]}(i),c=a!==void 0?a.nextSibling:null;l.setAttribute(co,em),l.setAttribute(tm,cs);var f=Gv();return f&&l.setAttribute("nonce",f),i.insertBefore(l,c),l},qv=function(){function t(r){this.element=dm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,a=0,c=l.length;a<c;a++){var f=l[a];if(f.ownerNode===i)return f}throw $r(17)}(this.element),this.length=0}return t.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},t}(),Yv=function(){function t(r){this.element=dm(r),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[r]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),Xv=function(){function t(r){this.rules=[],this.length=0}return t.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},t.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),Jp=Jl,Jv={isServer:!Jl,useCSSOMInjection:!Rv},es=function(){function t(r,i,l){r===void 0&&(r=fo),i===void 0&&(i={});var a=this;this.options=lt(lt({},Jv),r),this.gs=i,this.names=new Map(l),this.server=!!r.isServer,!this.server&&Jl&&Jp&&(Jp=!1,Xp(this)),wc(this,function(){return function(c){for(var f=c.getTag(),p=f.length,h="",m=function(y){var S=function($){return Zl.get($)}(y);if(S===void 0)return"continue";var T=c.names.get(S),k=f.getGroup(y);if(T===void 0||!T.size||k.length===0)return"continue";var C="".concat(co,".g").concat(y,'[id="').concat(S,'"]'),b="";T!==void 0&&T.forEach(function($){$.length>0&&(b+="".concat($,","))}),h+="".concat(k).concat(C,'{content:"').concat(b,'"}').concat(yc)},w=0;w<p;w++)m(w);return h}(a)})}return t.registerId=function(r){return Dl(r)},t.prototype.rehydrate=function(){!this.server&&Jl&&Xp(this)},t.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new t(lt(lt({},this.options),r),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var l=i.useCSSOMInjection,a=i.target;return i.isServer?new Xv(a):l?new qv(a):new Yv(a)}(this.options),new Uv(r)));var r},t.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},t.prototype.registerName=function(r,i){if(Dl(r),this.names.has(r))this.names.get(r).add(i);else{var l=new Set;l.add(i),this.names.set(r,l)}},t.prototype.insertRules=function(r,i,l){this.registerName(r,i),this.getTag().insertRules(Dl(r),l)},t.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.prototype.clearRules=function(r){this.getTag().clearGroup(Dl(r)),this.clearNames(r)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Zv=/&/g,ew=/^\s*\/\/.*$/gm;function fm(t,r){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(l){return"".concat(r," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=fm(i.children,r)),i})}function tw(t){var r,i,l,a=fo,c=a.options,f=c===void 0?fo:c,p=a.plugins,h=p===void 0?ds:p,m=function(S,T,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(r):S},w=h.slice();w.push(function(S){S.type===ls&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(Zv,i).replace(l,m))}),f.prefix&&w.push(Av),w.push(Ev);var y=function(S,T,k,C){T===void 0&&(T=""),k===void 0&&(k=""),C===void 0&&(C="&"),r=C,i=T,l=new RegExp("\\".concat(i,"\\b"),"g");var b=S.replace(ew,""),$=kv(k||T?"".concat(k," ").concat(T," { ").concat(b," }"):b);f.namespace&&($=fm($,f.namespace));var R=[];return Xl($,bv(w.concat(Cv(function(O){return R.push(O)})))),R};return y.hash=h.length?h.reduce(function(S,T){return T.name||$r(15),so(S,T.name)},om).toString():"",y}var nw=new es,Yu=tw(),pm=L.createContext({shouldForwardProp:void 0,styleSheet:nw,stylis:Yu});pm.Consumer;L.createContext(void 0);function Xu(){return x.useContext(pm)}var rw=function(){function t(r,i){var l=this;this.inject=function(a,c){c===void 0&&(c=Yu);var f=l.name+c.hash;a.hasNameForId(l.id,f)||a.insertRules(l.id,f,c(l.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,wc(this,function(){throw $r(12,String(l.name))})}return t.prototype.getName=function(r){return r===void 0&&(r=Yu),this.name+r.hash},t}(),ow=function(t){return t>="A"&&t<="Z"};function Zp(t){for(var r="",i=0;i<t.length;i++){var l=t[i];if(i===1&&l==="-"&&t[0]==="-")return t;ow(l)?r+="-"+l.toLowerCase():r+=l}return r.startsWith("ms-")?"-"+r:r}var hm=function(t){return t==null||t===!1||t===""},mm=function(t){var r,i,l=[];for(var a in t){var c=t[a];t.hasOwnProperty(a)&&!hm(c)&&(Array.isArray(c)&&c.isCss||Ar(c)?l.push("".concat(Zp(a),":"),c,";"):fi(c)?l.push.apply(l,di(di(["".concat(a," {")],mm(c),!1),["}"],!1)):l.push("".concat(Zp(a),": ").concat((r=a,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in $v||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function nr(t,r,i,l){if(hm(t))return[];if(vc(t))return[".".concat(t.styledComponentId)];if(Ar(t)){if(!Ar(c=t)||c.prototype&&c.prototype.isReactComponent||!r)return[t];var a=t(r);return nr(a,r,i,l)}var c;return t instanceof rw?i?(t.inject(i,l),[t.getName(l)]):[t]:fi(t)?mm(t):Array.isArray(t)?Array.prototype.concat.apply(ds,t.map(function(f){return nr(f,r,i,l)})):[t.toString()]}function gm(t){for(var r=0;r<t.length;r+=1){var i=t[r];if(Ar(i)&&!vc(i))return!1}return!0}var iw=im(cs),lw=function(){function t(r,i,l){this.rules=r,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&gm(r),this.componentId=i,this.baseHash=so(iw,i),this.baseStyle=l,es.registerId(i)}return t.prototype.generateAndInjectStyles=function(r,i,l){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))a=kr(a,this.staticRulesId);else{var c=Gu(nr(this.rules,r,i,l)),f=Ku(so(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var p=l(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,p)}a=kr(a,f),this.staticRulesId=f}else{for(var h=so(this.baseHash,l.hash),m="",w=0;w<this.rules.length;w++){var y=this.rules[w];if(typeof y=="string")m+=y;else if(y){var S=Gu(nr(y,r,i,l));h=so(h,S+w),m+=S}}if(m){var T=Ku(h>>>0);i.hasNameForId(this.componentId,T)||i.insertRules(this.componentId,T,l(m,".".concat(T),void 0,this.componentId)),a=kr(a,T)}}return a},t}(),pi=L.createContext(void 0);pi.Consumer;function sw(t){var r=L.useContext(pi),i=x.useMemo(function(){return function(l,a){if(!l)throw $r(14);if(Ar(l)){var c=l(a);return c}if(Array.isArray(l)||typeof l!="object")throw $r(8);return a?lt(lt({},a),l):l}(t.theme,r)},[t.theme,r]);return t.children?L.createElement(pi.Provider,{value:i},t.children):null}var ju={};function aw(t,r,i){var l=vc(t),a=t,c=!Nu(t),f=r.attrs,p=f===void 0?ds:f,h=r.componentId,m=h===void 0?function(W,Q){var K=typeof W!="string"?"sc":Qp(W);ju[K]=(ju[K]||0)+1;var q="".concat(K,"-").concat(lm(cs+K+ju[K]));return Q?"".concat(Q,"-").concat(q):q}(r.displayName,r.parentComponentId):h,w=r.displayName,y=w===void 0?function(W){return Nu(W)?"styled.".concat(W):"Styled(".concat(Iv(W),")")}(t):w,S=r.displayName&&r.componentId?"".concat(Qp(r.displayName),"-").concat(r.componentId):r.componentId||m,T=l&&a.attrs?a.attrs.concat(p).filter(Boolean):p,k=r.shouldForwardProp;if(l&&a.shouldForwardProp){var C=a.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;k=function(W,Q){return C(W,Q)&&b(W,Q)}}else k=C}var $=new lw(i,S,l?a.componentStyle:void 0);function R(W,Q){return function(K,q,fe){var ge=K.attrs,Ce=K.componentStyle,Le=K.defaultProps,be=K.foldedComponentIds,Pe=K.styledComponentId,Te=K.target,$e=L.useContext(pi),Ne=Xu(),ke=K.shouldForwardProp||Ne.shouldForwardProp,B=nm(q,$e,Le)||fo,J=function(oe,te,se){for(var pe,z=lt(lt({},te),{className:void 0,theme:se}),ue=0;ue<oe.length;ue+=1){var ye=Ar(pe=oe[ue])?pe(z):pe;for(var Ee in ye)z[Ee]=Ee==="className"?kr(z[Ee],ye[Ee]):Ee==="style"?lt(lt({},z[Ee]),ye[Ee]):ye[Ee]}return te.className&&(z.className=kr(z.className,te.className)),z}(ge,q,B),Y=J.as||Te,N={};for(var F in J)J[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&J.theme===B||(F==="forwardedAs"?N.as=J.forwardedAs:ke&&!ke(F,Y)||(N[F]=J[F]));var X=function(oe,te){var se=Xu(),pe=oe.generateAndInjectStyles(te,se.styleSheet,se.stylis);return pe}(Ce,J),Z=kr(be,Pe);return X&&(Z+=" "+X),J.className&&(Z+=" "+J.className),N[Nu(Y)&&!rm.has(Y)?"class":"className"]=Z,fe&&(N.ref=fe),x.createElement(Y,N)}(O,W,Q)}R.displayName=y;var O=L.forwardRef(R);return O.attrs=T,O.componentStyle=$,O.displayName=y,O.shouldForwardProp=k,O.foldedComponentIds=l?kr(a.foldedComponentIds,a.styledComponentId):"",O.styledComponentId=S,O.target=l?a.target:t,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=l?function(Q){for(var K=[],q=1;q<arguments.length;q++)K[q-1]=arguments[q];for(var fe=0,ge=K;fe<ge.length;fe++)qu(Q,ge[fe],!0);return Q}({},a.defaultProps,W):W}}),wc(O,function(){return".".concat(O.styledComponentId)}),c&&cm(O,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function eh(t,r){for(var i=[t[0]],l=0,a=r.length;l<a;l+=1)i.push(r[l],t[l+1]);return i}var th=function(t){return Object.assign(t,{isCss:!0})};function ne(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(Ar(t)||fi(t))return th(nr(eh(ds,di([t],r,!0))));var l=t;return r.length===0&&l.length===1&&typeof l[0]=="string"?nr(l):th(nr(eh(l,r)))}function Ju(t,r,i){if(i===void 0&&(i=fo),!r)throw $r(1,r);var l=function(a){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return t(r,i,ne.apply(void 0,di([a],c,!1)))};return l.attrs=function(a){return Ju(t,r,lt(lt({},i),{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},l.withConfig=function(a){return Ju(t,r,lt(lt({},i),a))},l}var ym=function(t){return Ju(aw,t)},M=ym;rm.forEach(function(t){M[t]=ym(t)});var uw=function(){function t(r,i){this.rules=r,this.componentId=i,this.isStatic=gm(r),es.registerId(this.componentId+1)}return t.prototype.createStyles=function(r,i,l,a){var c=a(Gu(nr(this.rules,i,l,a)),""),f=this.componentId+r;l.insertRules(f,f,c)},t.prototype.removeStyles=function(r,i){i.clearRules(this.componentId+r)},t.prototype.renderStyles=function(r,i,l,a){r>2&&es.registerId(this.componentId+r),this.removeStyles(r,l),this.createStyles(r,i,l,a)},t}();function cw(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var l=ne.apply(void 0,di([t],r,!1)),a="sc-global-".concat(lm(JSON.stringify(l))),c=new uw(l,a),f=function(h){var m=Xu(),w=L.useContext(pi),y=L.useRef(m.styleSheet.allocateGSInstance(a)).current;return m.styleSheet.server&&p(y,h,m.styleSheet,w,m.stylis),L.useLayoutEffect(function(){if(!m.styleSheet.server)return p(y,h,m.styleSheet,w,m.stylis),function(){return c.removeStyles(y,m.styleSheet)}},[y,h,m.styleSheet,w,m.stylis]),null};function p(h,m,w,y,S){if(c.isStatic)c.renderStyles(h,Tv,w,S);else{var T=lt(lt({},m),{theme:nm(m,y,f.defaultProps)});c.renderStyles(h,T,w,S)}}return L.memo(f)}var dw=`
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

`;const xc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",kc="inset 2px 2px 3px rgba(0,0,0,0.2)",rn=()=>ne`
  -webkit-text-fill-color: ${({theme:t})=>t.materialTextDisabled};
  color: ${({theme:t})=>t.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:t})=>t.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,on=({background:t="material",color:r="materialText"}={})=>ne`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:i})=>i[t]};
  color: ${({theme:i})=>i[r]};
`,vi=({mainColor:t="black",secondaryColor:r="transparent",pixelSize:i=2})=>ne`
  background-image: ${[`linear-gradient(
      45deg,
      ${t} 25%,
      transparent 25%,
      transparent 75%,
      ${t} 75%
    )`,`linear-gradient(
      45deg,
      ${t} 25%,
      transparent 25%,
      transparent 75%,
      ${t} 75%
    )`].join(",")};
  background-color: ${r};
  background-size: ${`${i*2}px ${i*2}px`};
  background-position: 0 0, ${`${i}px ${i}px`};
`,Rr=()=>ne`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:t})=>t.materialText};
  background: ${({$disabled:t,theme:r})=>t?r.flatLight:r.canvas};
  border: 2px solid ${({theme:t})=>t.canvas};
  outline: 2px solid ${({theme:t})=>t.flatDark};
  outline-offset: -4px;
`,lo={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},fw=({theme:t,topLeftInner:r,bottomRightInner:i,hasShadow:l=!1,hasInsetShadow:a=!1})=>[l?xc:!1,a?kc:!1,r!==null?`inset 1px 1px 0px 1px ${t[r]}`:!1,i!==null?`inset -1px -1px 0 1px ${t[i]}`:!1].filter(Boolean).join(", "),Ge=({invert:t=!1,style:r="button"}={})=>{const i={topLeftOuter:t?"bottomRightOuter":"topLeftOuter",topLeftInner:t?"bottomRightInner":"topLeftInner",bottomRightInner:t?"topLeftInner":"bottomRightInner",bottomRightOuter:t?"topLeftOuter":"bottomRightOuter"};return ne`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:l})=>l[lo[r][i.topLeftOuter]]};
    border-top-color: ${({theme:l})=>l[lo[r][i.topLeftOuter]]};
    border-right-color: ${({theme:l})=>l[lo[r][i.bottomRightOuter]]};
    border-bottom-color: ${({theme:l})=>l[lo[r][i.bottomRightOuter]]};
    box-shadow: ${({theme:l,shadow:a})=>fw({theme:l,topLeftInner:lo[r][i.topLeftInner],bottomRightInner:lo[r][i.bottomRightInner],hasShadow:a})};
  `},po=()=>ne`
  outline: 2px dotted ${({theme:t})=>t.materialText};
`,pw=t=>Buffer.from(t).toString("base64"),hw=typeof btoa<"u"?btoa:pw,Ll=(t,r=0)=>{const i=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${t}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${hw(i)})`},Sc=(t="default")=>ne`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>vi({mainColor:t==="flat"?r.flatLight:r.material,secondaryColor:t==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${on()}
    ${t==="flat"?Rr():Ge({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${on()}
    ${t==="flat"?Rr():Ge({style:"window"})}
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
    ${t==="default"?Ge({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:r})=>Ll(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>Ll(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>Ll(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>Ll(r.materialText,0)};
  }
`,mw=M.a`
  color: ${({theme:t})=>t.anchor};
  font-size: inherit;
  text-decoration: ${({underline:t})=>t?"underline":"none"};
  &:visited {
    color: ${({theme:t})=>t.anchorVisited};
  }
`,gw=x.forwardRef(({children:t,underline:r=!0,...i},l)=>L.createElement(mw,{ref:l,underline:r,...i},t));gw.displayName="Anchor";const yw=M.header`
  ${Ge()};
  ${on()};

  position: ${t=>{var r;return(r=t.position)!==null&&r!==void 0?r:t.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,vm=x.forwardRef(({children:t,fixed:r=!0,position:i="fixed",...l},a)=>L.createElement(yw,{fixed:r,position:r!==!1?i:void 0,ref:a,...l},t));vm.displayName="AppBar";const Nr=()=>{};function Sr(t,r,i){return i!==null&&t>i?i:r!==null&&t<r?r:t}function vw(t){if(Math.abs(t)<1){const i=t.toExponential().split("e-"),l=i[0].split(".")[1];return(l?l.length:0)+parseInt(i[1],10)}const r=t.toString().split(".")[1];return r?r.length:0}function nh(t,r,i){const l=Math.round((t-i)/r)*r+i;return Number(l.toFixed(vw(r)))}function or(t){return typeof t=="number"?`${t}px`:t}const ww=M.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:t})=>`
    height: ${t};
    width: ${t};
    `}
  border-radius: ${({square:t})=>t?0:"50%"};
  overflow: hidden;
  ${({noBorder:t,theme:r})=>!t&&`
    border-top: 2px solid ${r.borderDark};
    border-left: 2px solid ${r.borderDark};
    border-bottom: 2px solid ${r.borderLightest};
    border-right: 2px solid ${r.borderLightest};
    background: ${r.material};
  `}
  ${({src:t})=>!t&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,xw=M.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,kw=x.forwardRef(({alt:t="",children:r,noBorder:i=!1,size:l=35,square:a=!1,src:c,...f},p)=>L.createElement(ww,{noBorder:i,ref:p,size:or(l),square:a,src:c,...f},c?L.createElement(xw,{src:c,alt:t}):r));kw.displayName="Avatar";const dt={sm:"28px",md:"36px",lg:"44px"},Sw=ne`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:t="md"})=>dt[t]};
  width: ${({fullWidth:t,size:r="md",square:i})=>t?"100%":i?dt[r]:"auto"};
  padding: ${({square:t})=>t?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:t})=>!t&&"2px"};
  }
  padding-top: ${({active:t,disabled:r})=>t&&!r&&"2px"};
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
`,fs=M.button`
  ${({active:t,disabled:r,primary:i,theme:l,variant:a})=>a==="flat"?ne`
          ${Rr()}
          ${i?`
          border: 2px solid ${l.checkmark};
            outline: 2px solid ${l.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${l.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!t&&!r&&po}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?ne`
          ${on()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!t&&Ge({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Ge({style:"buttonThinPressed"})}
          }
          ${t&&Ge({style:"buttonThinPressed"})}
          ${r&&rn()}
        `:ne`
          ${on()};
          border: none;
          ${r&&rn()}
          ${t?vi({mainColor:l.material,secondaryColor:l.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${i?ne`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${l.borderDarkest};
                `:ne`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Ge(t?{style:a==="raised"?"window":"button",invert:!0}:{style:a==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!r&&Ge({style:a==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!t&&!r&&po}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${t?"0":"1px"};
          }
        `}
  ${Sw}
`,xe=x.forwardRef(({onClick:t,disabled:r=!1,children:i,type:l="button",fullWidth:a=!1,size:c="md",square:f=!1,active:p=!1,onTouchStart:h=Nr,primary:m=!1,variant:w="default",...y},S)=>L.createElement(fs,{active:p,disabled:r,$disabled:r,fullWidth:a,onClick:r?void 0:t,onTouchStart:h,primary:m,ref:S,size:c,square:f,type:l,variant:w,...y},i));xe.displayName="Button";function ir({defaultValue:t,onChange:r,onChangePropName:i="onChange",readOnly:l,value:a,valuePropName:c="value"}){const f=a!==void 0,[p,h]=x.useState(t),m=x.useCallback(w=>{f||h(w)},[f]);if(f&&typeof r!="function"&&!l){const w=`Warning: You provided a \`${c}\` prop to a component without an \`${i}\` handler.${c==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${i}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${i}\` function that updates \`${c}\`.`}`;console.warn(w)}return[f?a:p,m]}const Zu=M.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${t=>dt[t.size]};
  width: ${t=>t.square?dt[t.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${t=>t.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${t=>dt[t.size]};
  color: ${({theme:t})=>t.materialText};
  pointer-events: ${({$disabled:t})=>t?"none":"auto"};
  font-weight: ${({primary:t})=>t?"bold":"normal"};
  &:hover {
    ${({theme:t,$disabled:r})=>!r&&`
        color: ${t.materialTextInvert};
        background: ${t.hoverBackground};
      `}

    cursor: default;
  }
  ${t=>t.$disabled&&rn()}
`,tn=x.forwardRef(({size:t="lg",disabled:r,square:i,children:l,onClick:a,primary:c,...f},p)=>L.createElement(Zu,{$disabled:r,size:t,square:i,onClick:r?void 0:a,primary:c,role:"menuitem",ref:p,"aria-disabled":r,...f},l));tn.displayName="MenuListItem";const ps=M.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${t=>t.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ge({style:"window"})}
  ${on()}
  ${t=>t.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;ps.displayName="MenuList";const yn=20,ts=M.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${yn}px;
  height: ${yn}px;
  opacity: 0;
  z-index: -1;
`,Ec=M.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:t})=>t?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:t})=>t.materialText};
  ${t=>t.$disabled&&rn()}

  ${Zu} & {
    margin: 0;
    height: 100%;
  }
  ${Zu}:hover & {
    ${({$disabled:t,theme:r})=>!t&&ne`
        color: ${r.materialTextInvert};
      `};
  }
`,bc=M.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${ts}:focus ~ & {
    ${po}
  }
  ${ts}:not(:disabled) ~ &:active {
    ${po}
  }
`,wn=M.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:t})=>t.borderDark};
  border-top-color: ${({theme:t})=>t.borderDark};
  border-right-color: ${({theme:t})=>t.borderLightest};
  border-bottom-color: ${({theme:t})=>t.borderLightest};
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
    border-left-color: ${({theme:t})=>t.borderDarkest};
    border-top-color: ${({theme:t})=>t.borderDarkest};
    border-right-color: ${({theme:t})=>t.borderLight};
    border-bottom-color: ${({theme:t})=>t.borderLight};

    pointer-events: none;
    ${t=>t.shadow&&`box-shadow:${kc};`}
  }
`,Ew=M.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Sc()}
`,wm=x.forwardRef(({children:t,shadow:r=!0,...i},l)=>L.createElement(wn,{ref:l,shadow:r,...i},L.createElement(Ew,null,t)));wm.displayName="ScrollView";const xm=ne`
  width: ${yn}px;
  height: ${yn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,bw=M(wn)`
  ${xm}
  width: ${yn}px;
  height: ${yn}px;
  background: ${({$disabled:t,theme:r})=>t?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,Cw=M.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:t,theme:r})=>t?r.flatLight:r.canvas};
  ${xm}
  width: ${yn-4}px;
  height: ${yn-4}px;
  outline: none;
  border: 2px solid ${({theme:t})=>t.flatDark};
  background: ${({$disabled:t,theme:r})=>t?r.flatLight:r.canvas};
`,Aw=M.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:t,theme:r})=>t?r.checkmarkDisabled:r.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${t=>t.$disabled?t.theme.checkmarkDisabled:t.theme.checkmark};
  }
`,$w=M.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:t,theme:r})=>vi({mainColor:t?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Rw={flat:Cw,default:bw},km=x.forwardRef(({checked:t,className:r="",defaultChecked:i=!1,disabled:l=!1,indeterminate:a=!1,label:c="",onChange:f=Nr,style:p={},value:h,variant:m="default",...w},y)=>{var S;const[T,k]=ir({defaultValue:i,onChange:f,readOnly:(S=w.readOnly)!==null&&S!==void 0?S:l,value:t}),C=x.useCallback(R=>{const O=R.target.checked;k(O),f(R)},[f,k]),b=Rw[m];let $=null;return a?$=$w:T&&($=Aw),L.createElement(Ec,{$disabled:l,className:r,style:p},L.createElement(ts,{disabled:l,onChange:l?void 0:C,readOnly:l,type:"checkbox",value:h,checked:T,"data-indeterminate":a,ref:y,...w}),L.createElement(b,{$disabled:l,role:"presentation"},$&&L.createElement($,{$disabled:l,variant:m})),c&&L.createElement(bc,null,c))});km.displayName="Checkbox";const hs=M.div`
  ${({orientation:t,theme:r,size:i="100%"})=>t==="vertical"?`
    height: ${or(i)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${or(i)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;hs.displayName="Separator";const Tw=M(fs)`
  padding-left: 8px;
`,Pw=M(hs)`
  height: 21px;
  position: relative;
  top: 0;
`,Sm=M.input`
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
`,Nw=M.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:t})=>t};

  ${({$disabled:t})=>t?ne`
          border: 2px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:ne`
          border: 2px solid ${({theme:r})=>r.materialText};
        `}
  ${Sm}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${po}
    outline-offset: -8px;
  }
`,jw=M.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:t})=>t?ne`
          border-top: 6px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:ne`
          border-top: 6px solid ${({theme:r})=>r.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({variant:t})=>t==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,Iw=x.forwardRef(({value:t,defaultValue:r,onChange:i=Nr,disabled:l=!1,variant:a="default",...c},f)=>{var p;const[h,m]=ir({defaultValue:r,onChange:i,readOnly:(p=c.readOnly)!==null&&p!==void 0?p:l,value:t}),w=y=>{const S=y.target.value;m(S),i(y)};return L.createElement(Tw,{disabled:l,as:"div",variant:a,size:"md"},L.createElement(Sm,{onChange:w,readOnly:l,disabled:l,value:h??"#008080",type:"color",ref:f,...c}),L.createElement(Nw,{$disabled:l,color:h??"#008080",role:"presentation"}),a==="default"&&L.createElement(Pw,{orientation:"vertical"}),L.createElement(jw,{$disabled:l,variant:a}))});Iw.displayName="ColorInput";const Dw=M.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:t})=>ne`
    width: ${11*t}px;
    height: ${21*t}px;
    margin: ${t}px;

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
      ${vi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:t})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${t}px;
      border-left: ${t}px solid var(--react95-digit-bg-color);
      border-right: ${t}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${t}px;
      border-left: ${t}px solid var(--react95-digit-primary-color);
      border-right: ${t}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${t}px;
      width: ${9*t}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${t}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${t*2}px);
      top: ${2*t}px;
      left: ${t}px;
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
      height: ${t}px;
      border-left: ${t}px solid var(--react95-digit-bg-color);
      border-right: ${t}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${t}px solid var(--react95-digit-primary-color);
      border-right: ${t}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${t}px;
      width: ${9*t}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${t}px;
    }
    span.center:after {
      bottom: ${t}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${t}px;
      border-top: ${t}px solid var(--react95-digit-bg-color);
      border-bottom: ${t}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*t}px;
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
      left: ${t}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${t*2}px);
      top: ${t}px;
      left: ${t*2}px;
    }
  `}
`,rh=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Lw=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Ow({digit:t=0,pixelSize:r=2,...i}){const l=Lw[Number(t)].map((a,c)=>a?`${rh[c]} active`:rh[c]);return L.createElement(Dw,{pixelSize:r,...i},l.map((a,c)=>L.createElement("span",{className:a,key:c})))}const _w=M.div`
  ${Ge({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Fw={sm:1,md:2,lg:3,xl:4},zw=x.forwardRef(({value:t=0,minLength:r=3,size:i="md",...l},a)=>{const c=x.useMemo(()=>t.toString().padStart(r,"0").split(""),[r,t]);return L.createElement(_w,{ref:a,...l},c.map((f,p)=>L.createElement(Ow,{digit:f,pixelSize:Fw[i],key:p})))});zw.displayName="Counter";const Em=ne`
  display: flex;
  align-items: center;
  width: ${({fullWidth:t})=>t?"100%":"auto"};
  min-height: ${dt.md};
`,Bw=M(wn).attrs({"data-testid":"variant-default"})`
  ${Em}
  background: ${({$disabled:t,theme:r})=>t?r.material:r.canvas};
`,Mw=M.div.attrs({"data-testid":"variant-flat"})`
  ${Rr()}
  ${Em}
  position: relative;
`,bm=ne`
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
  color: ${({theme:t})=>t.canvasText};
  ${({disabled:t,variant:r})=>r!=="flat"&&t&&rn()}
`,Uw=M.input`
  ${bm}
  padding: 0 8px;
`,Hw=M.textarea`
  ${bm}
  padding: 8px;
  resize: none;
  ${({variant:t})=>Sc(t)}
`,jr=x.forwardRef(({className:t,disabled:r=!1,fullWidth:i,onChange:l=Nr,shadow:a=!0,style:c,variant:f="default",...p},h)=>{const m=f==="flat"?Mw:Bw,w=x.useMemo(()=>{var y;return p.multiline?L.createElement(Hw,{disabled:r,onChange:r?void 0:l,readOnly:r,ref:h,variant:f,...p}):L.createElement(Uw,{disabled:r,onChange:r?void 0:l,readOnly:r,ref:h,type:(y=p.type)!==null&&y!==void 0?y:"text",variant:f,...p})},[r,l,p,h,f]);return L.createElement(m,{className:t,fullWidth:i,$disabled:r,shadow:a,style:c},w)});jr.displayName="TextInput";const Ww=M.div`
  display: inline-flex;
  align-items: center;
`,ec=M(xe)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:t})=>t==="flat"?ne`
          height: calc(50% - 1px);
        `:ne`
          height: 50%;
        `}
`,Vw=M.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:t})=>t==="flat"?ne`
          height: calc(${dt.md} - 4px);
        `:ne`
          height: ${dt.md};
          margin-left: 2px;
        `}
`,oh=M.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:t})=>t?ne`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:r})=>r.materialText};
        `:ne`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:r})=>r.materialText};
        `}
  ${ec}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
    );
    ${({invert:t})=>t?ne`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:ne`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,Cm=x.forwardRef(({className:t,defaultValue:r,disabled:i=!1,max:l,min:a,onChange:c,readOnly:f,step:p=1,style:h,value:m,variant:w="default",width:y,...S},T)=>{const[k,C]=ir({defaultValue:r,onChange:c,readOnly:f,value:m}),b=x.useCallback(K=>{const q=parseFloat(K.target.value);C(q)},[C]),$=x.useCallback(K=>{const q=Sr(parseFloat(((k??0)+K).toFixed(2)),a??null,l??null);C(q),c==null||c(q)},[l,a,c,C,k]),R=x.useCallback(()=>{k!==void 0&&(c==null||c(k))},[c,k]),O=x.useCallback(()=>{$(p)},[$,p]),W=x.useCallback(()=>{$(-p)},[$,p]),Q=w==="flat"?"flat":"raised";return L.createElement(Ww,{className:t,style:{...h,width:y!==void 0?or(y):"auto"},...S},L.createElement(jr,{value:k,variant:w,onChange:b,disabled:i,type:"number",readOnly:f,ref:T,fullWidth:!0,onBlur:R}),L.createElement(Vw,{variant:w},L.createElement(ec,{"data-testid":"increment",variant:Q,disabled:i||f,onClick:O},L.createElement(oh,{invert:!0})),L.createElement(ec,{"data-testid":"decrement",variant:Q,disabled:i||f,onClick:W},L.createElement(oh,null))))});Cm.displayName="NumberInput";function Qw(){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let i=0;i<10;i+=1)r+=t[Math.floor(Math.random()*t.length)];return r}const Am=t=>x.useMemo(()=>Qw(),[t]),$m=ne`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Rm=ne`
  background: ${({theme:t})=>t.hoverBackground};
  color: ${({theme:t})=>t.canvasTextInvert};
`,Cc=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Kw=M.div`
  ${$m}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${Cc}:focus & {
    ${Rm}
    border: 2px dotted ${({theme:t})=>t.focusSecondary};
  }
`,Tm=ne`
  height: ${dt.md};
  display: inline-block;
  color: ${({$disabled:t=!1,theme:r})=>t?rn():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:t})=>t?"default":"pointer"};
`,Gw=M(wn)`
  ${Tm}
  background: ${({$disabled:t=!1,theme:r})=>t?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,qw=M.div`
  ${Rr()}
  ${Tm}
  background: ${({$disabled:t=!1,theme:r})=>t?r.flatLight:r.canvas};
`,Yw=M.select`
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
  ${$m}
  cursor: pointer;
  &:disabled {
    ${rn()};
    background: ${({theme:t})=>t.material};
    cursor: default;
  }
`,Pm=M(fs).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:t="default"})=>t==="flat"?ne`
          height: 100%;
          margin-right: 0;
        `:ne`
          height: 100%;
        `}
  ${({native:t=!1,variant:r="default"})=>t&&(r==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:t=!1,native:r=!1})=>t||r?"none":"auto"}
`,Xw=M.span`
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
    ${({$disabled:t=!1,theme:r})=>t?r.materialTextDisabled:r.materialText};
  ${({$disabled:t=!1,theme:r})=>t&&`
    filter: drop-shadow(1px 1px 0px ${r.materialTextDisabledShadow});
    border-top-color: ${r.materialTextDisabled};
    `}
  ${Pm}:active & {
    margin-top: 2px;
  }
`,Jw=M.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:t})=>t.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${xc};
  ${({variant:t="default"})=>t==="flat"?ne`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:ne`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:t="default"})=>Sc(t)}
`,Zw=M.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${dt.md} - 4px);
  line-height: calc(${dt.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:t})=>t.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:t})=>t?Rm:""}
  user-select: none;
`,ex=[],Nm=({className:t,defaultValue:r,disabled:i,native:l,onChange:a,options:c=ex,readOnly:f,style:p,value:h,variant:m,width:w})=>{var y;const S=x.useMemo(()=>c.filter(Boolean),[c]),[T,k]=ir({defaultValue:r??((y=S==null?void 0:S[0])===null||y===void 0?void 0:y.value),onChange:a,readOnly:f,value:h}),C=!(i||f),b=x.useMemo(()=>({className:t,style:{...p,width:w}}),[t,p,w]),$=x.useMemo(()=>L.createElement(Pm,{as:"div","data-testid":"select-button",$disabled:i,native:l,tabIndex:-1,variant:m==="flat"?"flat":"raised"},L.createElement(Xw,{"data-testid":"select-icon",$disabled:i})),[i,l,m]),R=x.useMemo(()=>m==="flat"?qw:Gw,[m]);return x.useMemo(()=>({isEnabled:C,options:S,value:T,setValue:k,wrapperProps:b,DropdownButton:$,Wrapper:R}),[$,R,C,S,k,T,b])},tx={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},nx=1e3,rx=({onBlur:t,onChange:r,onClose:i,onFocus:l,onKeyDown:a,onMouseDown:c,onOpen:f,open:p,options:h,readOnly:m,value:w,selectRef:y,setValue:S,wrapperRef:T})=>{const k=x.useRef(null),C=x.useRef([]),b=x.useRef(0),$=x.useRef(0),R=x.useRef(),O=x.useRef("search"),W=x.useRef(""),Q=x.useRef(),[K,q]=ir({defaultValue:!1,onChange:f,onChangePropName:"onOpen",readOnly:m,value:p,valuePropName:"open"}),fe=x.useMemo(()=>{const z=h.findIndex(ue=>ue.value===w);return b.current=Sr(z,0,null),h[z]},[h,w]),[ge,Ce]=x.useState(h[0]),Le=x.useCallback(z=>{const ue=k.current,ye=C.current[z];if(!ye||!ue){R.current=z;return}R.current=void 0;const Ee=ue.clientHeight,Ie=ue.scrollTop,qe=ue.scrollTop+Ee,Qe=ye.offsetTop,yt=ye.offsetHeight,Nt=ye.offsetTop+ye.offsetHeight;Qe<Ie&&ue.scrollTo(0,Qe),Nt>qe&&ue.scrollTo(0,Qe-Ee+yt),ye.focus({preventScroll:!0})},[k]),be=x.useCallback((z,{scroll:ue}={})=>{var ye;const Ee=h.length-1;let Ie;switch(z){case"first":{Ie=0;break}case"last":{Ie=Ee;break}case"next":{Ie=Sr($.current+1,0,Ee);break}case"previous":{Ie=Sr($.current-1,0,Ee);break}case"selected":{Ie=Sr((ye=b.current)!==null&&ye!==void 0?ye:0,0,Ee);break}default:Ie=z}$.current=Ie,Ce(h[Ie]),ue&&Le(Ie)},[$,h,Le]),Pe=x.useCallback(({fromEvent:z})=>{q(!0),be("selected",{scroll:!0}),f==null||f({fromEvent:z})},[be,f,q]),Te=x.useCallback(()=>{O.current="search",W.current="",clearTimeout(Q.current)},[]),$e=x.useCallback(({focusSelect:z,fromEvent:ue})=>{var ye;i==null||i({fromEvent:ue}),q(!1),Ce(h[0]),Te(),R.current=void 0,z&&((ye=y.current)===null||ye===void 0||ye.focus())},[Te,i,h,y,q]),Ne=x.useCallback(({fromEvent:z})=>{K?$e({focusSelect:!1,fromEvent:z}):Pe({fromEvent:z})},[$e,Pe,K]),ke=x.useCallback((z,{fromEvent:ue})=>{b.current!==z&&(b.current=z,S(h[z].value),r==null||r(h[z],{fromEvent:ue}))},[r,h,S]),B=x.useCallback(({focusSelect:z,fromEvent:ue})=>{ke($.current,{fromEvent:ue}),$e({focusSelect:z,fromEvent:ue})},[$e,ke]),J=x.useCallback((z,{fromEvent:ue,select:ye})=>{var Ee;switch(O.current==="cycleFirstLetter"&&z!==W.current&&(O.current="search"),z===W.current?O.current="cycleFirstLetter":W.current+=z,O.current){case"search":{let Ie=h.findIndex(qe=>{var Qe;return((Qe=qe.label)===null||Qe===void 0?void 0:Qe.toLocaleUpperCase().indexOf(W.current))===0});Ie<0&&(Ie=h.findIndex(qe=>{var Qe;return((Qe=qe.label)===null||Qe===void 0?void 0:Qe.toLocaleUpperCase().indexOf(z))===0}),W.current=z),Ie>=0&&(ye?ke(Ie,{fromEvent:ue}):be(Ie,{scroll:!0}));break}case"cycleFirstLetter":{const Ie=ye?(Ee=b.current)!==null&&Ee!==void 0?Ee:-1:$.current;let qe=h.findIndex((Qe,yt)=>{var Nt;return yt>Ie&&((Nt=Qe.label)===null||Nt===void 0?void 0:Nt.toLocaleUpperCase().indexOf(z))===0});qe<0&&(qe=h.findIndex(Qe=>{var yt;return((yt=Qe.label)===null||yt===void 0?void 0:yt.toLocaleUpperCase().indexOf(z))===0})),qe>=0&&(ye?ke(qe,{fromEvent:ue}):be(qe,{scroll:!0}));break}}clearTimeout(Q.current),Q.current=setTimeout(()=>{O.current==="search"&&(W.current="")},nx)},[be,h,ke]),Y=x.useCallback(z=>{var ue;z.button===0&&(z.preventDefault(),(ue=y.current)===null||ue===void 0||ue.focus(),Ne({fromEvent:z}),c==null||c(z))},[c,y,Ne]),N=x.useCallback(z=>{B({focusSelect:!0,fromEvent:z})},[B]),F=x.useCallback(z=>{const{altKey:ue,code:ye,ctrlKey:Ee,metaKey:Ie,shiftKey:qe}=z,{ARROW_DOWN:Qe,ARROW_UP:yt,END:Nt,ENTER:sn,ESC:zt,HOME:Sn,SPACE:an,TAB:En}=tx,xo=ue||Ee||Ie||qe;if(!(ye===En&&(ue||Ee||Ie)||ye!==En&&xo))switch(ye){case Qe:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("next",{scroll:!0});break}case yt:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("previous",{scroll:!0});break}case Nt:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("last",{scroll:!0});break}case sn:{if(!K)return;z.preventDefault(),B({focusSelect:!0,fromEvent:z});break}case zt:{if(!K)return;z.preventDefault(),$e({focusSelect:!0,fromEvent:z});break}case Sn:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("first",{scroll:!0});break}case an:{z.preventDefault(),K?B({focusSelect:!0,fromEvent:z}):Pe({fromEvent:z});break}case En:{if(!K)return;qe||z.preventDefault(),B({focusSelect:!qe,fromEvent:z});break}default:!xo&&ye.match(/^Key/)&&(z.preventDefault(),z.stopPropagation(),J(ye.replace(/^Key/,""),{select:!K,fromEvent:z}))}},[be,$e,K,Pe,J,B]),X=x.useCallback(z=>{F(z),a==null||a(z)},[F,a]),Z=x.useCallback(z=>{be(z)},[be]),oe=x.useCallback(z=>{K||(Te(),t==null||t(z))},[Te,t,K]),te=x.useCallback(z=>{Te(),l==null||l(z)},[Te,l]),se=x.useCallback(z=>{k.current=z,R.current!==void 0&&Le(R.current)},[Le]),pe=x.useCallback((z,ue)=>{C.current[ue]=z,R.current===ue&&Le(R.current)},[Le]);return x.useEffect(()=>{if(!K)return()=>{};const z=ue=>{var ye;const Ee=ue.target;!((ye=T.current)===null||ye===void 0)&&ye.contains(Ee)||(ue.preventDefault(),$e({focusSelect:!1,fromEvent:ue}))};return document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[$e,K,T]),x.useMemo(()=>({activeOption:ge,handleActivateOptionIndex:Z,handleBlur:oe,handleButtonKeyDown:X,handleDropdownKeyDown:F,handleFocus:te,handleMouseDown:Y,handleOptionClick:N,handleSetDropdownRef:se,handleSetOptionRef:pe,open:K,selectedOption:fe}),[ge,Z,oe,X,te,F,Y,N,se,pe,K,fe])},ox=x.forwardRef(({className:t,defaultValue:r,disabled:i,onChange:l,options:a,readOnly:c,style:f,value:p,variant:h,width:m,...w},y)=>{const{isEnabled:S,options:T,setValue:k,value:C,DropdownButton:b,Wrapper:$}=Nm({defaultValue:r,disabled:i,native:!0,onChange:l,options:a,readOnly:c,value:p,variant:h}),R=x.useCallback(O=>{const W=T.find(Q=>Q.value===O.target.value);W&&(k(W.value),l==null||l(W,{fromEvent:O}))},[l,T,k]);return L.createElement($,{className:t,style:{...f,width:m}},L.createElement(Cc,null,L.createElement(Yw,{...w,disabled:i,onChange:S?R:Nr,ref:y,value:C},T.map((O,W)=>{var Q;return L.createElement("option",{key:`${O.value}-${W}`,value:O.value},(Q=O.label)!==null&&Q!==void 0?Q:O.value)})),b))});ox.displayName="SelectNative";function ix({activateOptionIndex:t,active:r,index:i,onClick:l,option:a,selected:c,setRef:f}){const p=x.useCallback(()=>{t(i)},[t,i]),h=x.useCallback(w=>{f(w,i)},[i,f]),m=Am();return L.createElement(Zw,{active:r,"aria-selected":c?"true":void 0,"data-value":a.value,id:m,onClick:l,onMouseEnter:p,ref:h,role:"option",tabIndex:0},a.label)}function lx({"aria-label":t,"aria-labelledby":r,className:i,defaultValue:l,disabled:a=!1,formatDisplay:c,inputProps:f,labelId:p,menuMaxHeight:h,name:m,onBlur:w,onChange:y,onClose:S,onFocus:T,onKeyDown:k,onMouseDown:C,onOpen:b,open:$,options:R,readOnly:O,shadow:W=!0,style:Q,variant:K="default",value:q,width:fe="auto",...ge},Ce){const{isEnabled:Le,options:be,setValue:Pe,value:Te,wrapperProps:$e,DropdownButton:Ne,Wrapper:ke}=Nm({className:i,defaultValue:l,disabled:a,native:!1,onChange:y,options:R,style:Q,readOnly:O,value:q,variant:K,width:fe}),B=x.useRef(null),J=x.useRef(null),Y=x.useRef(null),{activeOption:N,handleActivateOptionIndex:F,handleBlur:X,handleButtonKeyDown:Z,handleDropdownKeyDown:oe,handleFocus:te,handleMouseDown:se,handleOptionClick:pe,handleSetDropdownRef:z,handleSetOptionRef:ue,open:ye,selectedOption:Ee}=rx({onBlur:w,onChange:y,onClose:S,onFocus:T,onKeyDown:k,onMouseDown:C,onOpen:b,open:$,options:be,value:Te,selectRef:J,setValue:Pe,wrapperRef:Y});x.useImperativeHandle(Ce,()=>({focus:sn=>{var zt;(zt=J.current)===null||zt===void 0||zt.focus(sn)},node:B.current,value:String(Te)}),[Te]);const Ie=x.useMemo(()=>Ee?typeof c=="function"?c(Ee):Ee.label:"",[c,Ee]),qe=Le?1:void 0,Qe=x.useMemo(()=>h?{overflow:"auto",maxHeight:h}:void 0,[h]),yt=Am(),Nt=x.useMemo(()=>be.map((sn,zt)=>{const Sn=`${Te}-${zt}`,an=sn===N,En=sn===Ee;return L.createElement(ix,{activateOptionIndex:F,active:an,index:zt,key:Sn,onClick:pe,option:sn,selected:En,setRef:ue})}),[N,F,pe,ue,be,Ee,Te]);return L.createElement(ke,{...$e,$disabled:a,ref:Y,shadow:W,style:{...Q,width:fe}},L.createElement("input",{name:m,ref:B,type:"hidden",value:String(Te),...f}),L.createElement(Cc,{"aria-disabled":a,"aria-expanded":ye,"aria-haspopup":"listbox","aria-label":t,"aria-labelledby":r??p,"aria-owns":Le&&ye?yt:void 0,onBlur:X,onFocus:te,onKeyDown:Z,onMouseDown:Le?se:C,ref:J,role:"button",tabIndex:qe,...ge},L.createElement(Kw,null,Ie),Ne),Le&&ye&&L.createElement(Jw,{id:yt,onKeyDown:oe,ref:z,role:"listbox",style:Qe,tabIndex:0,variant:K},Nt))}const Ac=x.forwardRef(lx);Ac.displayName="Select";const sx=M.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${t=>t.noPadding?"0":"4px"};
`,kt=x.forwardRef(function({children:r,noPadding:i=!1,...l},a){return L.createElement(sx,{noPadding:i,ref:a,...l},r)});kt.displayName="Toolbar";const ax=M.div`
  padding: 16px;
`,St=x.forwardRef(function({children:r,...i},l){return L.createElement(ax,{ref:l,...i},r)});St.displayName="WindowContent";const ux=M.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:t})=>t.material};
  ${({active:t})=>t===!1?ne`
          background: ${({theme:r})=>r.headerNotActiveBackground};
          color: ${({theme:r})=>r.headerNotActiveText};
        `:ne`
          background: ${({theme:r})=>r.headerBackground};
          color: ${({theme:r})=>r.headerText};
        `}

  ${fs} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,$c=x.forwardRef(function({active:r=!0,children:i,...l},a){return L.createElement(ux,{active:r,ref:a,...l},i)});$c.displayName="WindowHeader";const cx=M.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ge({style:"window"})}
  ${on()}
`,dx=M.span`
  ${({theme:t})=>ne`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${t.borderLightest} 16.67%,
      ${t.material} 16.67%,
      ${t.material} 33.33%,
      ${t.borderDark} 33.33%,
      ${t.borderDark} 50%,
      ${t.borderLightest} 50%,
      ${t.borderLightest} 66.67%,
      ${t.material} 66.67%,
      ${t.material} 83.33%,
      ${t.borderDark} 83.33%,
      ${t.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,Rc=x.forwardRef(({children:t,resizable:r=!1,resizeRef:i,shadow:l=!0,...a},c)=>L.createElement(cx,{ref:c,shadow:l,...a},t,r&&L.createElement(dx,{"data-testid":"resizeHandle",ref:i})));Rc.displayName="Window";const fx=M(wm)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:t})=>t.canvas};
`,px=M.div`
  display: flex;
  background: ${({theme:t})=>t.materialDark};
  color: #dfe0e3;
`,hx=M.div`
  display: flex;
  flex-wrap: wrap;
`,jn=M.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,mx=M.span`
  cursor: pointer;

  background: ${({active:t,theme:r})=>t?r.hoverBackground:"transparent"};
  color: ${({active:t,theme:r})=>t?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:t,active:r})=>r?"none":t.materialDark};
  }
`,gx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function yx(t,r){return new Date(t,r+1,0).getDate()}function vx(t,r,i){return new Date(t,r,i).getDay()}function wx(t){const r=new Date(Date.parse(t)),i=r.getUTCDate(),l=r.getUTCMonth(),a=r.getUTCFullYear();return{day:i,month:l,year:a}}const xx=x.forwardRef(({className:t,date:r=new Date().toISOString(),onAccept:i,onCancel:l,shadow:a=!0},c)=>{const[f,p]=x.useState(()=>wx(r)),{year:h,month:m,day:w}=f,y=x.useCallback(({value:b})=>{p($=>({...$,month:b}))},[]),S=x.useCallback(b=>{p($=>({...$,year:b}))},[]),T=x.useCallback(b=>{p($=>({...$,day:b}))},[]),k=x.useCallback(()=>{const b=[f.year,f.month+1,f.day].map($=>String($).padStart(2,"0")).join("-");i==null||i(b)},[f.day,f.month,f.year,i]),C=x.useMemo(()=>{const b=Array.from({length:42}),$=vx(h,m,1);let R=w;const O=yx(h,m);return R=R<O?R:O,b.forEach((W,Q)=>{if(Q>=$&&Q<O+$){const K=Q-$+1;b[Q]=L.createElement(jn,{key:Q,onClick:()=>{T(K)}},L.createElement(mx,{active:K===R},K))}else b[Q]=L.createElement(jn,{key:Q})}),b},[w,T,m,h]);return L.createElement(Rc,{className:t,ref:c,shadow:a,style:{margin:20}},L.createElement($c,null,L.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),L.createElement(St,null,L.createElement(kt,{noPadding:!0,style:{justifyContent:"space-between"}},L.createElement(Ac,{options:gx,value:m,onChange:y,width:128,menuMaxHeight:200}),L.createElement(Cm,{value:h,onChange:S,width:100})),L.createElement(fx,null,L.createElement(px,null,L.createElement(jn,null,"S"),L.createElement(jn,null,"M"),L.createElement(jn,null,"T"),L.createElement(jn,null,"W"),L.createElement(jn,null,"T"),L.createElement(jn,null,"F"),L.createElement(jn,null,"S")),L.createElement(hx,null,C)),L.createElement(kt,{noPadding:!0,style:{justifyContent:"space-between"}},L.createElement(xe,{fullWidth:!0,onClick:l,disabled:!l},"Cancel"),L.createElement(xe,{fullWidth:!0,onClick:i?k:void 0,disabled:!i},"OK"))))});xx.displayName="DatePicker";const kx=t=>{switch(t){case"status":case"well":return ne`
        ${Ge({style:"status"})}
      `;case"window":case"outside":return ne`
        ${Ge({style:"window"})}
      `;case"field":return ne`
        ${Ge({style:"field"})}
      `;default:return ne`
        ${Ge()}
      `}},Sx=M.div`
  position: relative;
  font-size: 1rem;
  ${({variant:t})=>kx(t)}
  ${({variant:t})=>on(t==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Pt=x.forwardRef(({children:t,shadow:r=!1,variant:i="window",...l},a)=>L.createElement(Sx,{ref:a,shadow:r,variant:i,...l},t));Pt.displayName="Frame";const Ex=M.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:t,variant:r})=>r==="flat"?t.flatDark:t.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:t})=>t.materialText};
  ${({variant:t})=>t!=="flat"&&ne`
      box-shadow: -1px -1px 0 1px ${({theme:r})=>r.borderDark},
        inset -1px -1px 0 1px ${({theme:r})=>r.borderDark};
    `}
  ${t=>t.$disabled&&rn()}
`,bx=M.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:t,variant:r})=>r==="flat"?t.canvas:t.material};
`,jm=x.forwardRef(({label:t,disabled:r=!1,variant:i="default",children:l,...a},c)=>L.createElement(Ex,{"aria-disabled":r,$disabled:r,variant:i,ref:c,...a},t&&L.createElement(bx,{variant:i},t),l));jm.displayName="GroupBox";const Cx=M.div`
  ${({theme:t,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${or(r)};
  width: 5px;
  border-top: 2px solid ${t.borderLightest};
  border-left: 2px solid ${t.borderLightest};
  border-bottom: 2px solid ${t.borderDark};
  border-right: 2px solid ${t.borderDark};
  background: ${t.material};
`}
`;Cx.displayName="Handle";const Ax="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",$x=M.div`
  display: inline-block;
  height: ${({size:t})=>or(t)};
  width: ${({size:t})=>or(t)};
`,Rx=M.span`
  display: block;
  background: ${Ax};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Tx=x.forwardRef(({size:t=30,...r},i)=>L.createElement($x,{size:t,ref:i,...r},L.createElement(Rx,null)));Tx.displayName="Hourglass";const Px=M.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Nx=M.div`
  position: relative;
`,jx=M.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:t})=>t.material};
  border-top: 4px solid ${({theme:t})=>t.borderLightest};
  border-left: 4px solid ${({theme:t})=>t.borderLightest};
  border-bottom: 4px solid ${({theme:t})=>t.borderDark};
  border-right: 4px solid ${({theme:t})=>t.borderDark};

  outline: 1px dotted ${({theme:t})=>t.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:t})=>t.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:t})=>t.borderDarkest};

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
`,Ix=M(wn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Dx=M.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:t})=>t.material};
  border-left: 2px solid ${({theme:t})=>t.borderLightest};
  border-bottom: 2px solid ${({theme:t})=>t.borderDarkest};
  border-right: 2px solid ${({theme:t})=>t.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:t})=>t.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:t})=>t.material};
    border-left: 2px solid ${({theme:t})=>t.borderLightest};
    border-right: 2px solid ${({theme:t})=>t.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:t})=>t.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:t})=>t.material};
    border: 2px solid ${({theme:t})=>t.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:t})=>t.borderLightest},
      1px 1px 0 1px ${({theme:t})=>t.borderDarkest};
  }
`,Im=x.forwardRef(({backgroundStyles:t,children:r,...i},l)=>L.createElement(Px,{ref:l,...i},L.createElement(Nx,null,L.createElement(jx,null,L.createElement(Ix,{style:t},r)),L.createElement(Dx,null))));Im.displayName="Monitor";const Lx=M.div`
  display: inline-block;
  height: ${dt.md};
  width: 100%;
`,Ox=M(wn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Dm=ne`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,_x=M.div`
  position: relative;
  top: 4px;
  ${Dm}
  background: ${({theme:t})=>t.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:t})=>t.materialText};
`,Fx=M.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Dm}
  color: ${({theme:t})=>t.materialTextInvert};
  background: ${({theme:t})=>t.progress};
  clip-path: polygon(
    0 0,
    ${({value:t=0})=>t}% 0,
    ${({value:t=0})=>t}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,zx=M.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Lm=17,Bx=M.span`
  display: inline-block;
  width: ${Lm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:t})=>t.progress};
  border-color: ${({theme:t})=>t.material};
  border-width: 0px 1px;
  border-style: solid;
`,ms=x.forwardRef(({hideValue:t=!1,shadow:r=!0,value:i,variant:l="default",...a},c)=>{const f=t?null:`${i}%`,p=x.useRef(null),[h,m]=x.useState([]),w=x.useCallback(()=>{if(!p.current||i===void 0)return;const y=p.current.getBoundingClientRect().width,S=Math.round(i/100*y/Lm);m(Array.from({length:S}))},[i]);return x.useEffect(()=>(w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)),[w]),L.createElement(Lx,{"aria-valuenow":i!==void 0?Math.round(i):void 0,ref:c,role:"progressbar",variant:l,...a},L.createElement(Ox,{variant:l,shadow:r},l==="default"?L.createElement(L.Fragment,null,L.createElement(_x,{"data-testid":"defaultProgress1"},f),L.createElement(Fx,{"data-testid":"defaultProgress2",value:i},f)):L.createElement(zx,{ref:p,"data-testid":"tileProgress"},h.map((y,S)=>L.createElement(Bx,{key:S})))))});ms.displayName="ProgressBar";const Om=ne`
  width: ${yn}px;
  height: ${yn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Mx=M(wn)`
  ${Om}
  background: ${({$disabled:t,theme:r})=>t?r.material:r.canvas};

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
`,Ux=M.div`
  ${Rr()}
  ${Om}
  outline: none;
  background: ${({$disabled:t,theme:r})=>t?r.flatLight:r.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:t})=>t.flatDark};
    border-radius: 50%;
  }
`,Hx=M.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${t=>t.$disabled?t.theme.checkmarkDisabled:t.theme.checkmark};
`,Wx={flat:Ux,default:Mx},Vx=x.forwardRef(({checked:t,className:r="",disabled:i=!1,label:l="",onChange:a,style:c={},variant:f="default",...p},h)=>{const m=Wx[f];return L.createElement(Ec,{$disabled:i,className:r,style:c},L.createElement(m,{$disabled:i,role:"presentation"},t&&L.createElement(Hx,{$disabled:i,variant:f})),L.createElement(ts,{disabled:i,onChange:i?void 0:a,readOnly:i,type:"radio",checked:t,ref:h,...p}),l&&L.createElement(bc,null,l))});Vx.displayName="Radio";const Qx=typeof window<"u"?x.useLayoutEffect:x.useEffect;function xr(t){const r=x.useRef(t);return Qx(()=>{r.current=t}),x.useCallback((...i)=>(0,r.current)(...i),[])}function ih(t,r){typeof t=="function"?t(r):t&&(t.current=r)}function lh(t,r){return x.useMemo(()=>t==null&&r==null?null:i=>{ih(t,i),ih(r,i)},[t,r])}var Kx=Qh();let gs=!0,tc=!1,sh;const Gx={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function qx(t){if("type"in t){const{type:r,tagName:i}=t;if(i==="INPUT"&&Gx[r]&&!t.readOnly||i==="TEXTAREA"&&!t.readOnly)return!0}return!!("isContentEditable"in t&&t.isContentEditable)}function Yx(t){t.metaKey||t.altKey||t.ctrlKey||(gs=!0)}function Iu(){gs=!1}function Xx(){this.visibilityState==="hidden"&&tc&&(gs=!0)}function Jx(t){t.addEventListener("keydown",Yx,!0),t.addEventListener("mousedown",Iu,!0),t.addEventListener("pointerdown",Iu,!0),t.addEventListener("touchstart",Iu,!0),t.addEventListener("visibilitychange",Xx,!0)}function Zx(t){const{target:r}=t;try{return r.matches(":focus-visible")}catch{}return gs||qx(r)}function e1(){tc=!0,window.clearTimeout(sh),sh=window.setTimeout(()=>{tc=!1},100)}function t1(){const t=x.useCallback(r=>{const i=Kx.findDOMNode(r);i!=null&&Jx(i.ownerDocument)},[]);return{isFocusVisible:Zx,onBlurVisible:e1,ref:t}}function n1(t,r,i){return(i-r)*t+r}function Ol(t,r){if(r!==void 0&&"changedTouches"in t){for(let i=0;i<t.changedTouches.length;i+=1){const l=t.changedTouches[i];if(l.identifier===r)return{x:l.clientX,y:l.clientY}}return!1}return"clientX"in t?{x:t.clientX,y:t.clientY}:!1}function _l(t){return t&&t.ownerDocument||document}function r1(t,r){var i;const{index:l}=(i=t.reduce((a,c,f)=>{const p=Math.abs(r-c);return a===null||p<a.distance||p===a.distance?{distance:p,index:f}:a},null))!==null&&i!==void 0?i:{};return l??-1}const o1=M.div`
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
    height: ${({hasMarks:t})=>t?"41px":"39px"};
    ${({isFocused:t,theme:r})=>t&&`
        outline: 2px dotted ${r.materialText};
        `}
  }

  ${({orientation:t,size:r})=>t==="vertical"?ne`
          height: ${r};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `:ne`
          width: ${r};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:t})=>t?"none":"auto"};
`,_m=()=>ne`
  position: absolute;
  ${({orientation:t})=>t==="vertical"?ne`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        `:ne`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`,i1=M(wn)`
  ${_m()}
`,l1=M(wn)`
  ${_m()}

  border-left-color: ${({theme:t})=>t.flatLight};
  border-top-color: ${({theme:t})=>t.flatLight};
  border-right-color: ${({theme:t})=>t.canvas};
  border-bottom-color: ${({theme:t})=>t.canvas};
  &:before {
    border-left-color: ${({theme:t})=>t.flatDark};
    border-top-color: ${({theme:t})=>t.flatDark};
    border-right-color: ${({theme:t})=>t.flatLight};
    border-bottom-color: ${({theme:t})=>t.flatLight};
  }
`,s1=M.span`
  position: relative;
  ${({orientation:t})=>t==="vertical"?ne`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        `:ne`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({variant:t})=>t==="flat"?ne`
          ${Rr()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:ne`
          ${on()}
          ${Ge()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:t,theme:r})=>t&&vi({mainColor:r.material,secondaryColor:r.borderLightest})}
`,ns=6,a1=M.span`
  display: inline-block;
  position: absolute;

  ${({orientation:t})=>t==="vertical"?ne`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${ns}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:ne`
          bottom: ${-6}px;
          height: ${ns}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:t})=>t.materialText};
  ${({$disabled:t,theme:r})=>t&&ne`
      ${rn()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,u1=M.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:t})=>t==="vertical"?ne`
          transform: translate(${ns+2}px, ${ns+1}px);
        `:ne`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,c1=x.forwardRef(({defaultValue:t,disabled:r=!1,marks:i=!1,max:l=100,min:a=0,name:c,onChange:f,onChangeCommitted:p,onMouseDown:h,orientation:m="horizontal",size:w="100%",step:y=1,value:S,variant:T="default",...k},C)=>{const b=T==="flat"?l1:i1,$=m==="vertical",[R=a,O]=ir({defaultValue:t,onChange:f??p,value:S}),{isFocusVisible:W,onBlurVisible:Q,ref:K}=t1(),[q,fe]=x.useState(!1),ge=x.useRef(),Ce=x.useRef(null),Le=lh(K,ge),be=lh(C,Le),Pe=xr(X=>{W(X)&&fe(!0)}),Te=xr(()=>{q!==!1&&(fe(!1),Q())}),$e=x.useRef(),Ne=x.useMemo(()=>i===!0&&Number.isFinite(y)?[...Array(Math.round((l-a)/y)+1)].map((X,Z)=>({label:void 0,value:a+y*Z})):Array.isArray(i)?i:[],[i,l,a,y]),ke=xr(X=>{const Z=(l-a)/10,oe=Ne.map(pe=>pe.value),te=oe.indexOf(R);let se=0;switch(X.key){case"Home":se=a;break;case"End":se=l;break;case"PageUp":y&&(se=R+Z);break;case"PageDown":y&&(se=R-Z);break;case"ArrowRight":case"ArrowUp":y?se=R+y:se=oe[te+1]||oe[oe.length-1];break;case"ArrowLeft":case"ArrowDown":y?se=R-y:se=oe[te-1]||oe[0];break;default:return}X.preventDefault(),y&&(se=nh(se,y,a)),se=Sr(se,a,l),O(se),fe(!0),f==null||f(se),p==null||p(se)}),B=x.useCallback(X=>{if(!ge.current)return 0;const Z=ge.current.getBoundingClientRect();let oe;$?oe=(Z.bottom-X.y)/Z.height:oe=(X.x-Z.left)/Z.width;let te;if(te=n1(oe,a,l),y)te=nh(te,y,a);else{const se=Ne.map(z=>z.value),pe=r1(se,te);te=se[pe]}return te=Sr(te,a,l),te},[Ne,l,a,y,$]),J=xr(X=>{var Z;const oe=Ol(X,$e.current);if(!oe)return;const te=B(oe);(Z=Ce.current)===null||Z===void 0||Z.focus(),O(te),fe(!0),f==null||f(te)}),Y=xr(X=>{const Z=Ol(X,$e.current);if(!Z)return;const oe=B(Z);p==null||p(oe),$e.current=void 0;const te=_l(ge.current);te.removeEventListener("mousemove",J),te.removeEventListener("mouseup",Y),te.removeEventListener("touchmove",J),te.removeEventListener("touchend",Y)}),N=xr(X=>{var Z;h==null||h(X),X.preventDefault(),(Z=Ce.current)===null||Z===void 0||Z.focus(),fe(!0);const oe=Ol(X,$e.current);if(oe){const se=B(oe);O(se),f==null||f(se)}const te=_l(ge.current);te.addEventListener("mousemove",J),te.addEventListener("mouseup",Y)}),F=xr(X=>{var Z;X.preventDefault();const oe=X.changedTouches[0];oe!=null&&($e.current=oe.identifier),(Z=Ce.current)===null||Z===void 0||Z.focus(),fe(!0);const te=Ol(X,$e.current);if(te){const pe=B(te);O(pe),f==null||f(pe)}const se=_l(ge.current);se.addEventListener("touchmove",J),se.addEventListener("touchend",Y)});return x.useEffect(()=>{const{current:X}=ge;X==null||X.addEventListener("touchstart",F);const Z=_l(X);return()=>{X==null||X.removeEventListener("touchstart",F),Z.removeEventListener("mousemove",J),Z.removeEventListener("mouseup",Y),Z.removeEventListener("touchmove",J),Z.removeEventListener("touchend",Y)}},[Y,J,F]),L.createElement(o1,{$disabled:r,hasMarks:!!Ne.length,isFocused:q,onMouseDown:N,orientation:m,ref:be,size:or(w),...k},L.createElement("input",{disabled:r,name:c,type:"hidden",value:R??0}),Ne&&Ne.map(X=>L.createElement(a1,{$disabled:r,"data-testid":"tick",key:X.value/(l-a)*100,orientation:m,style:{[$?"bottom":"left"]:`${(X.value-a)/(l-a)*100}%`}},X.label&&L.createElement(u1,{"aria-hidden":!0,"data-testid":"mark",orientation:m},X.label))),L.createElement(b,{orientation:m,variant:T}),L.createElement(s1,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":m,"aria-valuemax":l,"aria-valuemin":a,"aria-valuenow":R,onBlur:Te,onFocus:Pe,onKeyDown:ke,orientation:m,ref:Ce,role:"slider",style:{[$?"bottom":"left"]:`${($?-100:0)+100*(R-a)/(l-a)}%`},tabIndex:r?void 0:0,variant:T}))});c1.displayName="Slider";const d1=M.tbody`
  background: ${({theme:t})=>t.canvas};
  display: table-row-group;
  box-shadow: ${kc};
  overflow-y: auto;
`,ys=x.forwardRef(function({children:r,...i},l){return L.createElement(d1,{ref:l,...i},r)});ys.displayName="TableBody";const f1=M.td`
  padding: 0 8px;
`,ct=x.forwardRef(function({children:r,...i},l){return L.createElement(f1,{ref:l,...i},r)});ct.displayName="TableDataCell";const p1=M.thead`
  display: table-header-group;
`,vs=x.forwardRef(function({children:r,...i},l){return L.createElement(p1,{ref:l,...i},r)});vs.displayName="TableHead";const h1=M.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:t})=>t.material};
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
    ${Ge()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:t})=>!t&&ne`
      &:active {
        &:before {
          ${Ge({invert:!0,style:"window"})}
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

  color: ${({theme:t})=>t.materialText};
  ${({$disabled:t})=>t&&rn()}
  &:hover {
    color: ${({theme:t})=>t.materialText};
    ${({$disabled:t})=>t&&rn()}
  }
`,ws=x.forwardRef(function({disabled:r=!1,children:i,onClick:l,onTouchStart:a=Nr,sort:c,...f},p){const h=c==="asc"?"ascending":c==="desc"?"descending":void 0;return L.createElement(h1,{$disabled:r,"aria-disabled":r,"aria-sort":h,onClick:r?void 0:l,onTouchStart:r?void 0:a,ref:p,...f},L.createElement("div",null,i))});ws.displayName="TableHeadCell";const m1=M.tr`
  color: inherit;
  display: table-row;
  height: calc(${dt.md} - 2px);
  line-height: calc(${dt.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:t})=>t.canvasText};
  &:hover {
    background: ${({theme:t})=>t.hoverBackground};
    color: ${({theme:t})=>t.canvasTextInvert};
  }
`,Tr=x.forwardRef(function({children:r,...i},l){return L.createElement(m1,{ref:l,...i},r)});Tr.displayName="TableRow";const g1=M.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,y1=M(wn)`
  &:before {
    box-shadow: none;
  }
`,xs=x.forwardRef(({children:t,...r},i)=>L.createElement(y1,null,L.createElement(g1,{ref:i,...r},t)));xs.displayName="Table";const v1=M.button`
  ${on()}
  ${Ge()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${dt.md};
  line-height: ${dt.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:t})=>t.materialText};
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
    ${po}
    outline-offset: -6px;
  }
  ${t=>t.selected&&`
    z-index: 1;
    height: calc(${dt.md} + 4px);
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
    background: ${({theme:t})=>t.material};
    bottom: -4px;
    left: 2px;
  }
`,w1=x.forwardRef(({value:t,onClick:r,selected:i=!1,children:l,...a},c)=>L.createElement(v1,{"aria-selected":i,selected:i,onClick:f=>r==null?void 0:r(t,f),ref:c,role:"tab",...a},l));w1.displayName="Tab";const x1=M.div`
  ${on()}
  ${Ge()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,k1=x.forwardRef(({children:t,...r},i)=>L.createElement(x1,{ref:i,...r},t));k1.displayName="TabBody";const S1=M.div`
  position: relative;
  ${({isMultiRow:t,theme:r})=>t&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,E1=M.div.attrs(()=>({"data-testid":"tab-row"}))`
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
    border-right: 2px solid ${({theme:t})=>t.borderDarkest};
    border-left: 2px solid ${({theme:t})=>t.borderLightest};
  }
`;function b1(t,r){const i=[];for(let l=r;l>0;l-=1)i.push(t.splice(0,Math.ceil(t.length/l)));return i}const C1=x.forwardRef(({value:t,onChange:r=Nr,children:i,rows:l=1,...a},c)=>{const f=x.useMemo(()=>{var p;const h=(p=L.Children.map(i,y=>{if(!L.isValidElement(y))return null;const S={selected:y.props.value===t,onClick:r};return L.cloneElement(y,S)}))!==null&&p!==void 0?p:[],m=b1(h,l).map((y,S)=>({key:S,tabs:y})),w=m.findIndex(y=>y.tabs.some(S=>S.props.selected));return m.push(m.splice(w,1)[0]),m},[i,r,l,t]);return L.createElement(S1,{...a,isMultiRow:l>1,role:"tablist",ref:c},f.map(p=>L.createElement(E1,{key:p.key},p.tabs)))});C1.displayName="Tabs";const A1=["blur","focus"],$1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function ah(t){return"nativeEvent"in t&&A1.includes(t.type)}function uh(t){return"nativeEvent"in t&&$1.includes(t.type)}const R1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},T1=M.span`
  position: absolute;

  z-index: 1;
  display: ${t=>t.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:t})=>t.borderDarkest};
  background: ${({theme:t})=>t.tooltip};
  box-shadow: ${xc};
  text-align: center;
  font-size: 1rem;
  ${t=>R1[t.position]}
`,P1=M.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,N1=x.forwardRef(({className:t,children:r,disableFocusListener:i=!1,disableMouseListener:l=!1,enterDelay:a=1e3,leaveDelay:c=0,onBlur:f,onClose:p,onFocus:h,onMouseEnter:m,onMouseLeave:w,onOpen:y,style:S,text:T,position:k="top",...C},b)=>{const[$,R]=x.useState(!1),[O,W]=x.useState(),[Q,K]=x.useState(),q=!i,fe=!l,ge=B=>{window.clearTimeout(O),window.clearTimeout(Q);const J=window.setTimeout(()=>{R(!0),y==null||y(B)},a);W(J)},Ce=B=>{B.persist(),ah(B)?h==null||h(B):uh(B)&&(m==null||m(B)),ge(B)},Le=B=>{window.clearTimeout(O),window.clearTimeout(Q);const J=window.setTimeout(()=>{R(!1),p==null||p(B)},c);K(J)},be=B=>{B.persist(),ah(B)?f==null||f(B):uh(B)&&(w==null||w(B)),Le(B)},Pe=q?be:void 0,Te=q?Ce:void 0,$e=fe?Ce:void 0,Ne=fe?be:void 0,ke=q?0:void 0;return L.createElement(P1,{"data-testid":"tooltip-wrapper",onBlur:Pe,onFocus:Te,onMouseEnter:$e,onMouseLeave:Ne,tabIndex:ke},L.createElement(T1,{className:t,"data-testid":"tooltip",position:k,ref:b,show:$,style:S,...C},T),r)});N1.displayName="Tooltip";const nc=M(bc)`
  white-space: nowrap;
`,Fm=ne`
  :focus {
    outline: none;
  }

  ${({$disabled:t})=>t?"cursor: default;":ne`
          cursor: pointer;

          :focus {
            ${nc} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,j1=M.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:t})=>t&&ne`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({theme:r})=>r.borderDark};
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
      border-top: 2px dashed ${({theme:t})=>t.borderDark};
      font-size: 12px;
    }
  }
`,I1=M.li`
  position: relative;
  padding-left: ${({hasItems:t})=>t?"0":"13px"};

  ${({isRootLevel:t})=>t?ne`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({theme:r})=>r.material};
            }
          }
        `:ne`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({theme:r})=>r.material};
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
      border-left: 2px dashed ${({theme:t})=>t.borderDark};
    }
  }
`,D1=M.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,L1=M.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:t})=>t.materialText};
  user-select: none;
  padding-left: 18px;
  ${Fm};

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
`,ch=M(Ec)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Fm};
`,O1=M.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function dh(t,r){return t.includes(r)?t.filter(i=>i!==r):[...t,r]}function fh(t){t.preventDefault()}function zm({className:t,disabled:r,expanded:i,innerRef:l,level:a,select:c,selected:f,style:p,tree:h=[]}){const m=a===0,w=x.useCallback(y=>{var S,T;const k=!!(y.items&&y.items.length>0),C=i.includes(y.id),b=(S=r||y.disabled)!==null&&S!==void 0?S:!1,$=b?fh:Q=>c(Q,y),R=b?fh:Q=>c(Q,y),O=f===y.id,W=L.createElement(O1,{"aria-hidden":!0},y.icon);return L.createElement(I1,{key:y.label,isRootLevel:m,role:"treeitem","aria-expanded":C,"aria-selected":O,hasItems:k},k?L.createElement(D1,{open:C},L.createElement(L1,{onClick:$,$disabled:b},L.createElement(ch,{$disabled:b},W,L.createElement(nc,null,y.label))),C&&L.createElement(zm,{className:t,disabled:b,expanded:i,level:a+1,select:c,selected:f,style:p,tree:(T=y.items)!==null&&T!==void 0?T:[]})):L.createElement(ch,{as:"button",$disabled:b,onClick:R},W,L.createElement(nc,null,y.label)))},[t,r,i,m,a,c,f,p]);return L.createElement(j1,{className:m?t:void 0,style:m?p:void 0,ref:m?l:void 0,role:m?"tree":"group",isRootLevel:m},h.map(w))}function _1({className:t,defaultExpanded:r=[],defaultSelected:i,disabled:l=!1,expanded:a,onNodeSelect:c,onNodeToggle:f,selected:p,style:h,tree:m=[]},w){const[y,S]=ir({defaultValue:r,onChange:f,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[T,k]=ir({defaultValue:i,onChange:c,onChangePropName:"onNodeSelect",value:p,valuePropName:"selected"}),C=x.useCallback((R,O)=>{if(f){const W=dh(y,O);f(R,W)}S(W=>dh(W,O))},[y,f,S]),b=x.useCallback((R,O)=>{k(O),c&&c(R,O)},[c,k]),$=x.useCallback((R,O)=>{R.preventDefault(),b(R,O.id),O.items&&O.items.length&&C(R,O.id)},[b,C]);return L.createElement(zm,{className:t,disabled:l,expanded:y,level:0,innerRef:w,select:$,selected:T,style:h,tree:m})}const F1=x.forwardRef(_1);F1.displayName="TreeView";var Du,ph;function z1(){if(ph)return Du;ph=1;var t={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return Du=t,Du}var B1=z1();const M1=Vh(B1),U1="/assets/ms_sans_serif-Du8rjN1q.woff2",H1="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var li={},hh;function W1(){if(hh)return li;hh=1,Object.defineProperty(li,"__esModule",{value:!0}),li.parse=f,li.serialize=m;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,c=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,T){const k=new c,C=S.length;if(C<2)return k;const b=(T==null?void 0:T.decode)||w;let $=0;do{const R=S.indexOf("=",$);if(R===-1)break;const O=S.indexOf(";",$),W=O===-1?C:O;if(R>W){$=S.lastIndexOf(";",R-1)+1;continue}const Q=p(S,$,R),K=h(S,R,Q),q=S.slice(Q,K);if(k[q]===void 0){let fe=p(S,R+1,W),ge=h(S,W,fe);const Ce=b(S.slice(fe,ge));k[q]=Ce}$=W+1}while($<C);return k}function p(S,T,k){do{const C=S.charCodeAt(T);if(C!==32&&C!==9)return T}while(++T<k);return k}function h(S,T,k){for(;T>k;){const C=S.charCodeAt(--T);if(C!==32&&C!==9)return T+1}return k}function m(S,T,k){const C=(k==null?void 0:k.encode)||encodeURIComponent;if(!t.test(S))throw new TypeError(`argument name is invalid: ${S}`);const b=C(T);if(!r.test(b))throw new TypeError(`argument val is invalid: ${T}`);let $=S+"="+b;if(!k)return $;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);$+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);$+="; Domain="+k.domain}if(k.path){if(!l.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);$+="; Path="+k.path}if(k.expires){if(!y(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);$+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&($+="; HttpOnly"),k.secure&&($+="; Secure"),k.partitioned&&($+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return $}function w(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function y(S){return a.call(S)==="[object Date]"}return li}W1();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var mh="popstate";function V1(t={}){function r(l,a){let{pathname:c,search:f,hash:p}=l.location;return rc("",{pathname:c,search:f,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(l,a){return typeof a=="string"?a:hi(a)}return K1(r,i,null,t)}function Ve(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function vn(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Q1(){return Math.random().toString(36).substring(2,10)}function gh(t,r){return{usr:t.state,key:t.key,idx:r}}function rc(t,r,i=null,l){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?go(r):r,state:i,key:r&&r.key||l||Q1()}}function hi({pathname:t="/",search:r="",hash:i=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function go(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substring(i),t=t.substring(0,i));let l=t.indexOf("?");l>=0&&(r.search=t.substring(l),t=t.substring(0,l)),t&&(r.pathname=t)}return r}function K1(t,r,i,l={}){let{window:a=document.defaultView,v5Compat:c=!1}=l,f=a.history,p="POP",h=null,m=w();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function w(){return(f.state||{idx:null}).idx}function y(){p="POP";let b=w(),$=b==null?null:b-m;m=b,h&&h({action:p,location:C.location,delta:$})}function S(b,$){p="PUSH";let R=rc(C.location,b,$);m=w()+1;let O=gh(R,m),W=C.createHref(R);try{f.pushState(O,"",W)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;a.location.assign(W)}c&&h&&h({action:p,location:C.location,delta:1})}function T(b,$){p="REPLACE";let R=rc(C.location,b,$);m=w();let O=gh(R,m),W=C.createHref(R);f.replaceState(O,"",W),c&&h&&h({action:p,location:C.location,delta:0})}function k(b){let $=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof b=="string"?b:hi(b);return R=R.replace(/ $/,"%20"),Ve($,`No window.location.(origin|href) available to create URL for href: ${R}`),new URL(R,$)}let C={get action(){return p},get location(){return t(a,f)},listen(b){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(mh,y),h=b,()=>{a.removeEventListener(mh,y),h=null}},createHref(b){return r(a,b)},createURL:k,encodeLocation(b){let $=k(b);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:S,replace:T,go(b){return f.go(b)}};return C}function Bm(t,r,i="/"){return G1(t,r,i,!1)}function G1(t,r,i,l){let a=typeof r=="string"?go(r):r,c=lr(a.pathname||"/",i);if(c==null)return null;let f=Mm(t);q1(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let m=lk(c);p=ok(f[h],m,l)}return p}function Mm(t,r=[],i=[],l=""){let a=(c,f,p)=>{let h={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};h.relativePath.startsWith("/")&&(Ve(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length));let m=Dn([l,h.relativePath]),w=i.concat(h);c.children&&c.children.length>0&&(Ve(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Mm(c.children,r,w,m)),!(c.path==null&&!c.index)&&r.push({path:m,score:nk(m,c.index),routesMeta:w})};return t.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))a(c,f);else for(let h of Um(c.path))a(c,f,h)}),r}function Um(t){let r=t.split("/");if(r.length===0)return[];let[i,...l]=r,a=i.endsWith("?"),c=i.replace(/\?$/,"");if(l.length===0)return a?[c,""]:[c];let f=Um(l.join("/")),p=[];return p.push(...f.map(h=>h===""?c:[c,h].join("/"))),a&&p.push(...f),p.map(h=>t.startsWith("/")&&h===""?"/":h)}function q1(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:rk(r.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var Y1=/^:[\w-]+$/,X1=3,J1=2,Z1=1,ek=10,tk=-2,yh=t=>t==="*";function nk(t,r){let i=t.split("/"),l=i.length;return i.some(yh)&&(l+=tk),r&&(l+=J1),i.filter(a=>!yh(a)).reduce((a,c)=>a+(Y1.test(c)?X1:c===""?Z1:ek),l)}function rk(t,r){return t.length===r.length&&t.slice(0,-1).every((l,a)=>l===r[a])?t[t.length-1]-r[r.length-1]:0}function ok(t,r,i=!1){let{routesMeta:l}=t,a={},c="/",f=[];for(let p=0;p<l.length;++p){let h=l[p],m=p===l.length-1,w=c==="/"?r:r.slice(c.length)||"/",y=rs({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},w),S=h.route;if(!y&&m&&i&&!l[l.length-1].route.index&&(y=rs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},w)),!y)return null;Object.assign(a,y.params),f.push({params:a,pathname:Dn([c,y.pathname]),pathnameBase:ck(Dn([c,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(c=Dn([c,y.pathnameBase]))}return f}function rs(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,l]=ik(t.path,t.caseSensitive,t.end),a=r.match(i);if(!a)return null;let c=a[0],f=c.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:l.reduce((m,{paramName:w,isOptional:y},S)=>{if(w==="*"){let k=p[S]||"";f=c.slice(0,c.length-k.length).replace(/(.)\/+$/,"$1")}const T=p[S];return y&&!T?m[w]=void 0:m[w]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:t}}function ik(t,r=!1,i=!0){vn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let l=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(l.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),l]}function lk(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return vn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function lr(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,l=t.charAt(i);return l&&l!=="/"?null:t.slice(i)||"/"}function sk(t,r="/"){let{pathname:i,search:l="",hash:a=""}=typeof t=="string"?go(t):t;return{pathname:i?i.startsWith("/")?i:ak(i,r):r,search:dk(l),hash:fk(a)}}function ak(t,r){let i=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function Lu(t,r,i,l){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uk(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Hm(t){let r=uk(t);return r.map((i,l)=>l===r.length-1?i.pathname:i.pathnameBase)}function Wm(t,r,i,l=!1){let a;typeof t=="string"?a=go(t):(a={...t},Ve(!a.pathname||!a.pathname.includes("?"),Lu("?","pathname","search",a)),Ve(!a.pathname||!a.pathname.includes("#"),Lu("#","pathname","hash",a)),Ve(!a.search||!a.search.includes("#"),Lu("#","search","hash",a)));let c=t===""||a.pathname==="",f=c?"/":a.pathname,p;if(f==null)p=i;else{let y=r.length-1;if(!l&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),y-=1;a.pathname=S.join("/")}p=y>=0?r[y]:"/"}let h=sk(a,p),m=f&&f!=="/"&&f.endsWith("/"),w=(c||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||w)&&(h.pathname+="/"),h}var Dn=t=>t.join("/").replace(/\/\/+/g,"/"),ck=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),dk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,fk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function pk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var Vm=["POST","PUT","PATCH","DELETE"];new Set(Vm);var hk=["GET",...Vm];new Set(hk);var yo=x.createContext(null);yo.displayName="DataRouter";var ks=x.createContext(null);ks.displayName="DataRouterState";var Qm=x.createContext({isTransitioning:!1});Qm.displayName="ViewTransition";var mk=x.createContext(new Map);mk.displayName="Fetchers";var gk=x.createContext(null);gk.displayName="Await";var xn=x.createContext(null);xn.displayName="Navigation";var wi=x.createContext(null);wi.displayName="Location";var Ln=x.createContext({outlet:null,matches:[],isDataRoute:!1});Ln.displayName="Route";var Tc=x.createContext(null);Tc.displayName="RouteError";function yk(t,{relative:r}={}){Ve(xi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=x.useContext(xn),{hash:a,pathname:c,search:f}=ki(t,{relative:r}),p=c;return i!=="/"&&(p=c==="/"?i:Dn([i,c])),l.createHref({pathname:p,search:f,hash:a})}function xi(){return x.useContext(wi)!=null}function Ir(){return Ve(xi(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(wi).location}var Km="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Gm(t){x.useContext(xn).static||x.useLayoutEffect(t)}function vk(){let{isDataRoute:t}=x.useContext(Ln);return t?Nk():wk()}function wk(){Ve(xi(),"useNavigate() may be used only in the context of a <Router> component.");let t=x.useContext(yo),{basename:r,navigator:i}=x.useContext(xn),{matches:l}=x.useContext(Ln),{pathname:a}=Ir(),c=JSON.stringify(Hm(l)),f=x.useRef(!1);return Gm(()=>{f.current=!0}),x.useCallback((h,m={})=>{if(vn(f.current,Km),!f.current)return;if(typeof h=="number"){i.go(h);return}let w=Wm(h,JSON.parse(c),a,m.relative==="path");t==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:Dn([r,w.pathname])),(m.replace?i.replace:i.push)(w,m.state,m)},[r,i,c,a,t])}x.createContext(null);function ki(t,{relative:r}={}){let{matches:i}=x.useContext(Ln),{pathname:l}=Ir(),a=JSON.stringify(Hm(i));return x.useMemo(()=>Wm(t,JSON.parse(a),l,r==="path"),[t,a,l,r])}function xk(t,r){return qm(t,r)}function qm(t,r,i,l){var $;Ve(xi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=x.useContext(xn),{matches:c}=x.useContext(Ln),f=c[c.length-1],p=f?f.params:{},h=f?f.pathname:"/",m=f?f.pathnameBase:"/",w=f&&f.route;{let R=w&&w.path||"";Ym(h,!w||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let y=Ir(),S;if(r){let R=typeof r=="string"?go(r):r;Ve(m==="/"||(($=R.pathname)==null?void 0:$.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=y;let T=S.pathname||"/",k=T;if(m!=="/"){let R=m.replace(/^\//,"").split("/");k="/"+T.replace(/^\//,"").split("/").slice(R.length).join("/")}let C=Bm(t,{pathname:k});vn(w||C!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),vn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=Ck(C&&C.map(R=>Object.assign({},R,{params:Object.assign({},p,R.params),pathname:Dn([m,a.encodeLocation?a.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?m:Dn([m,a.encodeLocation?a.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),c,i,l);return r&&b?x.createElement(wi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},b):b}function kk(){let t=Pk(),r=pk(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,l="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:l},c={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:c},"ErrorBoundary")," or"," ",x.createElement("code",{style:c},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},r),i?x.createElement("pre",{style:a},i):null,f)}var Sk=x.createElement(kk,null),Ek=class extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?x.createElement(Ln.Provider,{value:this.props.routeContext},x.createElement(Tc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bk({routeContext:t,match:r,children:i}){let l=x.useContext(yo);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),x.createElement(Ln.Provider,{value:t},i)}function Ck(t,r=[],i=null,l=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let a=t,c=i==null?void 0:i.errors;if(c!=null){let h=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Ve(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let f=!1,p=-1;if(i)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:w,errors:y}=i,S=m.route.loader&&!w.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||S){f=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((h,m,w)=>{let y,S=!1,T=null,k=null;i&&(y=c&&m.route.id?c[m.route.id]:void 0,T=m.route.errorElement||Sk,f&&(p<0&&w===0?(Ym("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):p===w&&(S=!0,k=m.route.hydrateFallbackElement||null)));let C=r.concat(a.slice(0,w+1)),b=()=>{let $;return y?$=T:S?$=k:m.route.Component?$=x.createElement(m.route.Component,null):m.route.element?$=m.route.element:$=h,x.createElement(bk,{match:m,routeContext:{outlet:h,matches:C,isDataRoute:i!=null},children:$})};return i&&(m.route.ErrorBoundary||m.route.errorElement||w===0)?x.createElement(Ek,{location:i.location,revalidation:i.revalidation,component:T,error:y,children:b(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):b()},null)}function Pc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ak(t){let r=x.useContext(yo);return Ve(r,Pc(t)),r}function $k(t){let r=x.useContext(ks);return Ve(r,Pc(t)),r}function Rk(t){let r=x.useContext(Ln);return Ve(r,Pc(t)),r}function Nc(t){let r=Rk(t),i=r.matches[r.matches.length-1];return Ve(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function Tk(){return Nc("useRouteId")}function Pk(){var l;let t=x.useContext(Tc),r=$k("useRouteError"),i=Nc("useRouteError");return t!==void 0?t:(l=r.errors)==null?void 0:l[i]}function Nk(){let{router:t}=Ak("useNavigate"),r=Nc("useNavigate"),i=x.useRef(!1);return Gm(()=>{i.current=!0}),x.useCallback(async(a,c={})=>{vn(i.current,Km),i.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:r,...c}))},[t,r])}var vh={};function Ym(t,r,i){!r&&!vh[t]&&(vh[t]=!0,vn(!1,i))}x.memo(jk);function jk({routes:t,future:r,state:i}){return qm(t,void 0,i,r)}function oc(t){Ve(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ik({basename:t="/",children:r=null,location:i,navigationType:l="POP",navigator:a,static:c=!1}){Ve(!xi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),p=x.useMemo(()=>({basename:f,navigator:a,static:c,future:{}}),[f,a,c]);typeof i=="string"&&(i=go(i));let{pathname:h="/",search:m="",hash:w="",state:y=null,key:S="default"}=i,T=x.useMemo(()=>{let k=lr(h,f);return k==null?null:{location:{pathname:k,search:m,hash:w,state:y,key:S},navigationType:l}},[f,h,m,w,y,S,l]);return vn(T!=null,`<Router basename="${f}"> is not able to match the URL "${h}${m}${w}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:x.createElement(xn.Provider,{value:p},x.createElement(wi.Provider,{children:r,value:T}))}function Dk({children:t,location:r}){return xk(ic(t),r)}function ic(t,r=[]){let i=[];return x.Children.forEach(t,(l,a)=>{if(!x.isValidElement(l))return;let c=[...r,a];if(l.type===x.Fragment){i.push.apply(i,ic(l.props.children,c));return}Ve(l.type===oc,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ve(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||c.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=ic(l.props.children,c)),i.push(f)}),i}var Ql="get",Kl="application/x-www-form-urlencoded";function Ss(t){return t!=null&&typeof t.tagName=="string"}function Lk(t){return Ss(t)&&t.tagName.toLowerCase()==="button"}function Ok(t){return Ss(t)&&t.tagName.toLowerCase()==="form"}function _k(t){return Ss(t)&&t.tagName.toLowerCase()==="input"}function Fk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zk(t,r){return t.button===0&&(!r||r==="_self")&&!Fk(t)}var Fl=null;function Bk(){if(Fl===null)try{new FormData(document.createElement("form"),0),Fl=!1}catch{Fl=!0}return Fl}var Mk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ou(t){return t!=null&&!Mk.has(t)?(vn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Kl}"`),null):t}function Uk(t,r){let i,l,a,c,f;if(Ok(t)){let p=t.getAttribute("action");l=p?lr(p,r):null,i=t.getAttribute("method")||Ql,a=Ou(t.getAttribute("enctype"))||Kl,c=new FormData(t)}else if(Lk(t)||_k(t)&&(t.type==="submit"||t.type==="image")){let p=t.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||p.getAttribute("action");if(l=h?lr(h,r):null,i=t.getAttribute("formmethod")||p.getAttribute("method")||Ql,a=Ou(t.getAttribute("formenctype"))||Ou(p.getAttribute("enctype"))||Kl,c=new FormData(p,t),!Bk()){let{name:m,type:w,value:y}=t;if(w==="image"){let S=m?`${m}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else m&&c.append(m,y)}}else{if(Ss(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ql,l=null,a=Kl,f=t}return c&&a==="text/plain"&&(f=c,c=void 0),{action:l,method:i.toLowerCase(),encType:a,formData:c,body:f}}function jc(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}async function Hk(t,r){if(t.id in r)return r[t.id];try{let i=await import(t.module);return r[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Wk(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Vk(t,r,i){let l=await Promise.all(t.map(async a=>{let c=r.routes[a.route.id];if(c){let f=await Hk(c,i);return f.links?f.links():[]}return[]}));return qk(l.flat(1).filter(Wk).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function wh(t,r,i,l,a,c){let f=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,p=(h,m)=>{var w;return i[m].pathname!==h.pathname||((w=i[m].route.path)==null?void 0:w.endsWith("*"))&&i[m].params["*"]!==h.params["*"]};return c==="assets"?r.filter((h,m)=>f(h,m)||p(h,m)):c==="data"?r.filter((h,m)=>{var y;let w=l.routes[h.route.id];if(!w||!w.hasLoader)return!1;if(f(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Qk(t,r){return Kk(t.map(i=>{let l=r.routes[i.route.id];if(!l)return[];let a=[l.module];return l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function Kk(t){return[...new Set(t)]}function Gk(t){let r={},i=Object.keys(t).sort();for(let l of i)r[l]=t[l];return r}function qk(t,r){let i=new Set;return new Set(r),t.reduce((l,a)=>{let c=JSON.stringify(Gk(a));return i.has(c)||(i.add(c),l.push({key:c,link:a})),l},[])}function Yk(t){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function Xk(){let t=x.useContext(yo);return jc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Jk(){let t=x.useContext(ks);return jc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ic=x.createContext(void 0);Ic.displayName="FrameworkContext";function Xm(){let t=x.useContext(Ic);return jc(t,"You must render this element inside a <HydratedRouter> element"),t}function Zk(t,r){let i=x.useContext(Ic),[l,a]=x.useState(!1),[c,f]=x.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:w,onTouchStart:y}=r,S=x.useRef(null);x.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let C=$=>{$.forEach(R=>{f(R.isIntersecting)})},b=new IntersectionObserver(C,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[t]),x.useEffect(()=>{if(l){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[l]);let T=()=>{a(!0)},k=()=>{a(!1),f(!1)};return i?t!=="intent"?[c,S,{}]:[c,S,{onFocus:si(p,T),onBlur:si(h,k),onMouseEnter:si(m,T),onMouseLeave:si(w,k),onTouchStart:si(y,T)}]:[!1,S,{}]}function si(t,r){return i=>{t&&t(i),i.defaultPrevented||r(i)}}function eS({page:t,...r}){let{router:i}=Xk(),l=x.useMemo(()=>Bm(i.routes,t,i.basename),[i.routes,t,i.basename]);return l?x.createElement(nS,{page:t,matches:l,...r}):null}function tS(t){let{manifest:r,routeModules:i}=Xm(),[l,a]=x.useState([]);return x.useEffect(()=>{let c=!1;return Vk(t,r,i).then(f=>{c||a(f)}),()=>{c=!0}},[t,r,i]),l}function nS({page:t,matches:r,...i}){let l=Ir(),{manifest:a,routeModules:c}=Xm(),{loaderData:f,matches:p}=Jk(),h=x.useMemo(()=>wh(t,r,p,a,l,"data"),[t,r,p,a,l]),m=x.useMemo(()=>wh(t,r,p,a,l,"assets"),[t,r,p,a,l]),w=x.useMemo(()=>{if(t===l.pathname+l.search+l.hash)return[];let T=new Set,k=!1;if(r.forEach(b=>{var R;let $=a.routes[b.route.id];!$||!$.hasLoader||(!h.some(O=>O.route.id===b.route.id)&&b.route.id in f&&((R=c[b.route.id])!=null&&R.shouldRevalidate)||$.hasClientLoader?k=!0:T.add(b.route.id))}),T.size===0)return[];let C=Yk(t);return k&&T.size>0&&C.searchParams.set("_routes",r.filter(b=>T.has(b.route.id)).map(b=>b.route.id).join(",")),[C.pathname+C.search]},[f,l,a,h,r,t,c]),y=x.useMemo(()=>Qk(m,a),[m,a]),S=tS(m);return x.createElement(x.Fragment,null,w.map(T=>x.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...i})),y.map(T=>x.createElement("link",{key:T,rel:"modulepreload",href:T,...i})),S.map(({key:T,link:k})=>x.createElement("link",{key:T,...k})))}function rS(...t){return r=>{t.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var Jm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jm&&(window.__reactRouterVersion="7.1.3")}catch{}function oS({basename:t,children:r,window:i}){let l=x.useRef();l.current==null&&(l.current=V1({window:i,v5Compat:!0}));let a=l.current,[c,f]=x.useState({action:a.action,location:a.location}),p=x.useCallback(h=>{x.startTransition(()=>f(h))},[f]);return x.useLayoutEffect(()=>a.listen(p),[a,p]),x.createElement(Ik,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:a})}var Zm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dc=x.forwardRef(function({onClick:r,discover:i="render",prefetch:l="none",relative:a,reloadDocument:c,replace:f,state:p,target:h,to:m,preventScrollReset:w,viewTransition:y,...S},T){let{basename:k}=x.useContext(xn),C=typeof m=="string"&&Zm.test(m),b,$=!1;if(typeof m=="string"&&C&&(b=m,Jm))try{let ge=new URL(window.location.href),Ce=m.startsWith("//")?new URL(ge.protocol+m):new URL(m),Le=lr(Ce.pathname,k);Ce.origin===ge.origin&&Le!=null?m=Le+Ce.search+Ce.hash:$=!0}catch{vn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let R=yk(m,{relative:a}),[O,W,Q]=Zk(l,S),K=aS(m,{replace:f,state:p,target:h,preventScrollReset:w,relative:a,viewTransition:y});function q(ge){r&&r(ge),ge.defaultPrevented||K(ge)}let fe=x.createElement("a",{...S,...Q,href:b||R,onClick:$||c?r:q,ref:rS(T,W),target:h,"data-discover":!C&&i==="render"?"true":void 0});return O&&!C?x.createElement(x.Fragment,null,fe,x.createElement(eS,{page:R})):fe});Dc.displayName="Link";var iS=x.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:l="",end:a=!1,style:c,to:f,viewTransition:p,children:h,...m},w){let y=ki(f,{relative:m.relative}),S=Ir(),T=x.useContext(ks),{navigator:k,basename:C}=x.useContext(xn),b=T!=null&&pS(y)&&p===!0,$=k.encodeLocation?k.encodeLocation(y).pathname:y.pathname,R=S.pathname,O=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(R=R.toLowerCase(),O=O?O.toLowerCase():null,$=$.toLowerCase()),O&&C&&(O=lr(O,C)||O);const W=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let Q=R===$||!a&&R.startsWith($)&&R.charAt(W)==="/",K=O!=null&&(O===$||!a&&O.startsWith($)&&O.charAt($.length)==="/"),q={isActive:Q,isPending:K,isTransitioning:b},fe=Q?r:void 0,ge;typeof l=="function"?ge=l(q):ge=[l,Q?"active":null,K?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof c=="function"?c(q):c;return x.createElement(Dc,{...m,"aria-current":fe,className:ge,ref:w,style:Ce,to:f,viewTransition:p},typeof h=="function"?h(q):h)});iS.displayName="NavLink";var lS=x.forwardRef(({discover:t="render",fetcherKey:r,navigate:i,reloadDocument:l,replace:a,state:c,method:f=Ql,action:p,onSubmit:h,relative:m,preventScrollReset:w,viewTransition:y,...S},T)=>{let k=dS(),C=fS(p,{relative:m}),b=f.toLowerCase()==="get"?"get":"post",$=typeof p=="string"&&Zm.test(p),R=O=>{if(h&&h(O),O.defaultPrevented)return;O.preventDefault();let W=O.nativeEvent.submitter,Q=(W==null?void 0:W.getAttribute("formmethod"))||f;k(W||O.currentTarget,{fetcherKey:r,method:Q,navigate:i,replace:a,state:c,relative:m,preventScrollReset:w,viewTransition:y})};return x.createElement("form",{ref:T,method:b,action:C,onSubmit:l?h:R,...S,"data-discover":!$&&t==="render"?"true":void 0})});lS.displayName="Form";function sS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eg(t){let r=x.useContext(yo);return Ve(r,sS(t)),r}function aS(t,{target:r,replace:i,state:l,preventScrollReset:a,relative:c,viewTransition:f}={}){let p=vk(),h=Ir(),m=ki(t,{relative:c});return x.useCallback(w=>{if(zk(w,r)){w.preventDefault();let y=i!==void 0?i:hi(h)===hi(m);p(t,{replace:y,state:l,preventScrollReset:a,relative:c,viewTransition:f})}},[h,p,m,i,l,r,t,a,c,f])}var uS=0,cS=()=>`__${String(++uS)}__`;function dS(){let{router:t}=eg("useSubmit"),{basename:r}=x.useContext(xn),i=Tk();return x.useCallback(async(l,a={})=>{let{action:c,method:f,encType:p,formData:h,body:m}=Uk(l,r);if(a.navigate===!1){let w=a.fetcherKey||cS();await t.fetch(w,i,a.action||c,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||f,formEncType:a.encType||p,flushSync:a.flushSync})}else await t.navigate(a.action||c,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||f,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:i,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,r,i])}function fS(t,{relative:r}={}){let{basename:i}=x.useContext(xn),l=x.useContext(Ln);Ve(l,"useFormAction must be used inside a RouteContext");let[a]=l.matches.slice(-1),c={...ki(t||".",{relative:r})},f=Ir();if(t==null){c.search=f.search;let p=new URLSearchParams(c.search),h=p.getAll("index");if(h.some(w=>w==="")){p.delete("index"),h.filter(y=>y).forEach(y=>p.append("index",y));let w=p.toString();c.search=w?`?${w}`:""}}return(!t||t===".")&&a.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Dn([i,c.pathname])),hi(c)}function pS(t,r={}){let i=x.useContext(Qm);Ve(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=eg("useViewTransitionState"),a=ki(t,{relative:r.relative});if(!i.isTransitioning)return!1;let c=lr(i.currentLocation.pathname,l)||i.currentLocation.pathname,f=lr(i.nextLocation.pathname,l)||i.nextLocation.pathname;return rs(a.pathname,f)!=null||rs(a.pathname,c)!=null}new TextEncoder;const ut=[];for(let t=0;t<256;++t)ut.push((t+256).toString(16).slice(1));function hS(t,r=0){return(ut[t[r+0]]+ut[t[r+1]]+ut[t[r+2]]+ut[t[r+3]]+"-"+ut[t[r+4]]+ut[t[r+5]]+"-"+ut[t[r+6]]+ut[t[r+7]]+"-"+ut[t[r+8]]+ut[t[r+9]]+"-"+ut[t[r+10]]+ut[t[r+11]]+ut[t[r+12]]+ut[t[r+13]]+ut[t[r+14]]+ut[t[r+15]]).toLowerCase()}let _u;const mS=new Uint8Array(16);function gS(){if(!_u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");_u=crypto.getRandomValues.bind(crypto)}return _u(mS)}const yS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),xh={randomUUID:yS};function vS(t,r,i){var a;if(xh.randomUUID&&!t)return xh.randomUUID();t=t||{};const l=t.random??((a=t.rng)==null?void 0:a.call(t))??gS();if(l.length<16)throw new Error("Random bytes length must be >= 16");return l[6]=l[6]&15|64,l[8]=l[8]&63|128,hS(l)}function Es(t){const r=[];for(const i of t.split("/"))if(!(i===""||i===".")){if(i===".."){r.pop();continue}r.push(i)}return r}function rr(t){return"/"+Es(t).join("/")}function ho(...t){return rr(t.join("/"))}function gn(t){const r=Es(t);return r.pop(),"/"+r.join("/")}function Qt(t){const r=Es(t);return r.length?r[r.length-1]:""}class he extends Error{constructor(r,i){super(i?`${r}: ${i}`:r),this.code=r,this.name="KernelError"}}class wS{constructor(r){We(this,"registry");We(this,"processes",new Map);We(this,"listeners",new Set);We(this,"persistence");We(this,"defaultLocation");We(this,"uid");We(this,"snapshot",[]);We(this,"vfs",null);We(this,"kernelFds",new Map);We(this,"nextFd",3);We(this,"subscribe",r=>(this.listeners.add(r),()=>this.listeners.delete(r)));We(this,"getSnapshot",()=>this.snapshot);this.registry=r.registry,this.persistence=r.persistence,this.defaultLocation=r.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=r.uid??1e3,this.boot()}boot(){var i;const r=(i=this.persistence)==null?void 0:i.load();if(r)for(const l of r)this.registry.has(l.exec)&&this.processes.set(l.pid,this.hydrate(l));this.rebuildSnapshot()}hydrate(r){return{pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,icon:r.icon,argv:r.argv??[],state:r.state,priority:r.priority,window:r.window,cwd:r.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const r=this.snapshot.map(i=>({pid:i.pid,ppid:i.ppid,uid:i.uid,exec:i.exec,name:i.name,icon:i.icon,argv:i.argv,priority:i.priority,window:i.window,cwd:i.cwd,state:i.state}));this.persistence.save(r)}mountVfs(r){this.vfs=r}processInfo(){return this.sysPs()}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const r of this.listeners)r()}syscall(r,i,l){try{return Promise.resolve(this.dispatch(r,i,l))}catch(a){return Promise.reject(a)}}dispatch(r,i,l){var a;switch(i){case"spawn":return this.sysSpawn(r,l);case"exit":return this.sysExit(r,l.code??0);case"kill":return this.sysKill(l.pid);case"getpid":return r;case"getargv":return r?((a=this.processes.get(r))==null?void 0:a.argv)??[]:[];case"ps":return this.sysPs();case"win_focus":return this.sysFocus(l.pid);case"win_move":return this.sysMove(l.pid,l.location);case"open":return this.sysOpen(r,l.path,l.flags);case"read":return this.sysRead(r,l.fd,l.len);case"write":return this.sysWrite(r,l.fd,l.data);case"close":return this.sysClose(r,l.fd);case"readdir":return this.fs().readdir(l.path);case"stat":return this.fs().stat(l.path);case"mkdir":return this.fs().mkdir(l.path);case"unlink":return this.fs().unlink(l.path);default:throw new he("ENOSYS",`unknown syscall: ${i}`)}}sysSpawn(r,i){const l=this.registry.get(i.exec);if(!l)throw new he("ENOENT",`no program "${i.exec}" in /bin`);const a=vS();for(const c of this.processes.values())c.priority+=1;return this.processes.set(a,{pid:a,ppid:r,uid:this.uid,exec:i.exec,name:i.name??l.name,icon:i.icon??l.icon,argv:i.argv??[],state:"running",priority:0,window:i.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(r){if(!this.processes.delete(r))throw new he("ESRCH",`no process ${r}`);this.commit()}sysExit(r,i){r&&this.sysKill(r)}sysPs(){return this.snapshot.map(r=>({pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,state:r.state,priority:r.priority}))}sysFocus(r){if(!this.processes.get(r))throw new he("ESRCH",`no process ${r}`);let l=0;for(const a of this.processes.values())a.priority=a.pid===r?0:++l;this.commit()}sysMove(r,i){const l=this.processes.get(r);if(!l)throw new he("ESRCH",`no process ${r}`);l.window=i,this.commit()}fs(){if(!this.vfs)throw new he("ENOSYS","no filesystem mounted");return this.vfs}fdTable(r){if(r===null)return this.kernelFds;const i=this.processes.get(r);if(!i)throw new he("ESRCH",`no process ${r}`);return i.fds}sysOpen(r,i,l){const a=this.fs(),c=rr(i),f=a.exists(c),p=l==="w"||l==="a"||l==="rw";if(f)l==="w"&&a.write(c,new Uint8Array);else{if(!p)throw new he("ENOENT",c);a.write(c,new Uint8Array)}const h=l==="a"?a.stat(c).size:0,m=this.nextFd++;return this.fdTable(r).set(m,{path:c,flags:l,offset:h}),m}openFile(r,i){const l=this.fdTable(r).get(i);if(!l)throw new he("EBADF",`bad fd ${i}`);return l}sysRead(r,i,l){const a=this.openFile(r,i);if(a.flags!=="r"&&a.flags!=="rw")throw new he("EBADF","not opened for reading");const f=this.fs().read(a.path).slice(a.offset,a.offset+l);return a.offset+=f.length,f}sysWrite(r,i,l){const a=this.openFile(r,i);if(a.flags==="r")throw new he("EBADF","not opened for writing");const c=this.fs().read(a.path),f=a.offset+l.length,p=new Uint8Array(Math.max(c.length,f));return p.set(c),p.set(l,a.offset),this.fs().write(a.path,p),a.offset=f,l.length}sysClose(r,i){if(!this.fdTable(r).delete(i))throw new he("EBADF",`bad fd ${i}`)}}class xS{constructor(){We(this,"programs",new Map)}register(r){this.programs.set(r.exec,r)}get(r){return this.programs.get(r)}component(r){var i;return(i=this.programs.get(r))==null?void 0:i.component}has(r){return this.programs.has(r)}list(){return[...this.programs.values()]}}const tg=()=>v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:"Recycle Bin"}),v.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]}),ng=()=>v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:"My Computer"}),v.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]});function kS(t,r){const i=(l,a)=>t.syscall(r,l,a);return{spawn:(l,a)=>i("spawn",{exec:l,...a}),exit:(l=0)=>i("exit",{code:l}),kill:l=>i("kill",{pid:l}),getpid:()=>i("getpid",{}),argv:()=>i("getargv",{}),ps:()=>i("ps",{}),focus:l=>i("win_focus",{pid:l}),move:(l,a)=>i("win_move",{pid:a??r,location:l}),open:(l,a="r")=>i("open",{path:l,flags:a}),read:(l,a)=>i("read",{fd:l,len:a}),write:(l,a)=>i("write",{fd:l,data:a}),close:l=>i("close",{fd:l}),readdir:l=>i("readdir",{path:l}),stat:l=>i("stat",{path:l}),mkdir:l=>i("mkdir",{path:l}),unlink:l=>i("unlink",{path:l}),async readFile(l){const{size:a}=await i("stat",{path:l}),c=await i("open",{path:l,flags:"r"});try{return await i("read",{fd:c,len:a})}finally{await i("close",{fd:c})}},async writeFile(l,a){const c=await i("open",{path:l,flags:"w"});try{await i("write",{fd:c,data:a})}finally{await i("close",{fd:c})}},async readTextFile(l){return new TextDecoder().decode(await this.readFile(l))},async writeTextFile(l,a){await this.writeFile(l,new TextEncoder().encode(a))}}}const rg=x.createContext(null);function SS({pid:t,children:r}){return v.jsx(rg.Provider,{value:t,children:r})}function ES(){return x.useContext(rg)}function bs(){const t=Wc(),r=ES();return x.useMemo(()=>kS(t,r),[t,r])}const bS=()=>{const t=ty(),r=bs(),i=["PID","Name","Priority",""];return v.jsx(v.Fragment,{children:v.jsxs(xs,{style:{width:"50vw"},children:[v.jsx(vs,{children:v.jsx(Tr,{children:i.map(l=>v.jsx(ws,{children:l},l))})}),v.jsx(ys,{children:t.map(l=>v.jsxs(Tr,{children:[v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:l.pid.slice(0,8)}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:l.name}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:l.priority===0?"High":"Normal"}),v.jsx(ct,{onClick:()=>r.kill(l.pid),style:{textAlign:"center",verticalAlign:"middle",cursor:"pointer"},children:"Delete"})]},l.pid))})]})})},Lc=()=>v.jsxs(v.Fragment,{children:[v.jsx(St,{children:v.jsx(bS,{})}),v.jsx(Pt,{variant:"well",className:"footer",children:"See your running processes"})]});function Cs(t){const r=x.useRef(null),[i,l]=x.useState(null);return x.useEffect(()=>{if(!r.current)return;const a=r.current,c=Dos(a);return l(c),()=>{c.stop(),a&&(a.innerHTML="")}},[]),x.useEffect(()=>{i!==null&&i.run(t.bundleUrl)},[i,t.bundleUrl]),v.jsx("div",{ref:r,style:{width:"100%",height:"100%"}})}const og=()=>v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(Cs,{bundleUrl:"dos/final-DOOM.jsdos"})})}),v.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]}),ig=()=>v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(Cs,{bundleUrl:"dos/doom2.jsdos"})})}),v.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]}),lg="/error.png",CS="/trust.png";function sg(t,r){return function(){return t.apply(r,arguments)}}const{toString:AS}=Object.prototype,{getPrototypeOf:Oc}=Object,As=(t=>r=>{const i=AS.call(r);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),ln=t=>(t=t.toLowerCase(),r=>As(r)===t),$s=t=>r=>typeof r===t,{isArray:vo}=Array,mi=$s("undefined");function $S(t){return t!==null&&!mi(t)&&t.constructor!==null&&!mi(t.constructor)&&_t(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const ag=ln("ArrayBuffer");function RS(t){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(t):r=t&&t.buffer&&ag(t.buffer),r}const TS=$s("string"),_t=$s("function"),ug=$s("number"),Rs=t=>t!==null&&typeof t=="object",PS=t=>t===!0||t===!1,Gl=t=>{if(As(t)!=="object")return!1;const r=Oc(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},NS=ln("Date"),jS=ln("File"),IS=ln("Blob"),DS=ln("FileList"),LS=t=>Rs(t)&&_t(t.pipe),OS=t=>{let r;return t&&(typeof FormData=="function"&&t instanceof FormData||_t(t.append)&&((r=As(t))==="formdata"||r==="object"&&_t(t.toString)&&t.toString()==="[object FormData]"))},_S=ln("URLSearchParams"),[FS,zS,BS,MS]=["ReadableStream","Request","Response","Headers"].map(ln),US=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Si(t,r,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let l,a;if(typeof t!="object"&&(t=[t]),vo(t))for(l=0,a=t.length;l<a;l++)r.call(null,t[l],l,t);else{const c=i?Object.getOwnPropertyNames(t):Object.keys(t),f=c.length;let p;for(l=0;l<f;l++)p=c[l],r.call(null,t[p],p,t)}}function cg(t,r){r=r.toLowerCase();const i=Object.keys(t);let l=i.length,a;for(;l-- >0;)if(a=i[l],r===a.toLowerCase())return a;return null}const Er=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,dg=t=>!mi(t)&&t!==Er;function lc(){const{caseless:t}=dg(this)&&this||{},r={},i=(l,a)=>{const c=t&&cg(r,a)||a;Gl(r[c])&&Gl(l)?r[c]=lc(r[c],l):Gl(l)?r[c]=lc({},l):vo(l)?r[c]=l.slice():r[c]=l};for(let l=0,a=arguments.length;l<a;l++)arguments[l]&&Si(arguments[l],i);return r}const HS=(t,r,i,{allOwnKeys:l}={})=>(Si(r,(a,c)=>{i&&_t(a)?t[c]=sg(a,i):t[c]=a},{allOwnKeys:l}),t),WS=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),VS=(t,r,i,l)=>{t.prototype=Object.create(r.prototype,l),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),i&&Object.assign(t.prototype,i)},QS=(t,r,i,l)=>{let a,c,f;const p={};if(r=r||{},t==null)return r;do{for(a=Object.getOwnPropertyNames(t),c=a.length;c-- >0;)f=a[c],(!l||l(f,t,r))&&!p[f]&&(r[f]=t[f],p[f]=!0);t=i!==!1&&Oc(t)}while(t&&(!i||i(t,r))&&t!==Object.prototype);return r},KS=(t,r,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=r.length;const l=t.indexOf(r,i);return l!==-1&&l===i},GS=t=>{if(!t)return null;if(vo(t))return t;let r=t.length;if(!ug(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=t[r];return i},qS=(t=>r=>t&&r instanceof t)(typeof Uint8Array<"u"&&Oc(Uint8Array)),YS=(t,r)=>{const l=(t&&t[Symbol.iterator]).call(t);let a;for(;(a=l.next())&&!a.done;){const c=a.value;r.call(t,c[0],c[1])}},XS=(t,r)=>{let i;const l=[];for(;(i=t.exec(r))!==null;)l.push(i);return l},JS=ln("HTMLFormElement"),ZS=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,a){return l.toUpperCase()+a}),kh=(({hasOwnProperty:t})=>(r,i)=>t.call(r,i))(Object.prototype),eE=ln("RegExp"),fg=(t,r)=>{const i=Object.getOwnPropertyDescriptors(t),l={};Si(i,(a,c)=>{let f;(f=r(a,c,t))!==!1&&(l[c]=f||a)}),Object.defineProperties(t,l)},tE=t=>{fg(t,(r,i)=>{if(_t(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=t[i];if(_t(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},nE=(t,r)=>{const i={},l=a=>{a.forEach(c=>{i[c]=!0})};return vo(t)?l(t):l(String(t).split(r)),i},rE=()=>{},oE=(t,r)=>t!=null&&Number.isFinite(t=+t)?t:r,Fu="abcdefghijklmnopqrstuvwxyz",Sh="0123456789",pg={DIGIT:Sh,ALPHA:Fu,ALPHA_DIGIT:Fu+Fu.toUpperCase()+Sh},iE=(t=16,r=pg.ALPHA_DIGIT)=>{let i="";const{length:l}=r;for(;t--;)i+=r[Math.random()*l|0];return i};function lE(t){return!!(t&&_t(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const sE=t=>{const r=new Array(10),i=(l,a)=>{if(Rs(l)){if(r.indexOf(l)>=0)return;if(!("toJSON"in l)){r[a]=l;const c=vo(l)?[]:{};return Si(l,(f,p)=>{const h=i(f,a+1);!mi(h)&&(c[p]=h)}),r[a]=void 0,c}}return l};return i(t,0)},aE=ln("AsyncFunction"),uE=t=>t&&(Rs(t)||_t(t))&&_t(t.then)&&_t(t.catch),hg=((t,r)=>t?setImmediate:r?((i,l)=>(Er.addEventListener("message",({source:a,data:c})=>{a===Er&&c===i&&l.length&&l.shift()()},!1),a=>{l.push(a),Er.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",_t(Er.postMessage)),cE=typeof queueMicrotask<"u"?queueMicrotask.bind(Er):typeof process<"u"&&process.nextTick||hg,_={isArray:vo,isArrayBuffer:ag,isBuffer:$S,isFormData:OS,isArrayBufferView:RS,isString:TS,isNumber:ug,isBoolean:PS,isObject:Rs,isPlainObject:Gl,isReadableStream:FS,isRequest:zS,isResponse:BS,isHeaders:MS,isUndefined:mi,isDate:NS,isFile:jS,isBlob:IS,isRegExp:eE,isFunction:_t,isStream:LS,isURLSearchParams:_S,isTypedArray:qS,isFileList:DS,forEach:Si,merge:lc,extend:HS,trim:US,stripBOM:WS,inherits:VS,toFlatObject:QS,kindOf:As,kindOfTest:ln,endsWith:KS,toArray:GS,forEachEntry:YS,matchAll:XS,isHTMLForm:JS,hasOwnProperty:kh,hasOwnProp:kh,reduceDescriptors:fg,freezeMethods:tE,toObjectSet:nE,toCamelCase:ZS,noop:rE,toFiniteNumber:oE,findKey:cg,global:Er,isContextDefined:dg,ALPHABET:pg,generateString:iE,isSpecCompliantForm:lE,toJSONObject:sE,isAsyncFn:aE,isThenable:uE,setImmediate:hg,asap:cE};function ve(t,r,i,l,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),l&&(this.request=l),a&&(this.response=a,this.status=a.status?a.status:null)}_.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const mg=ve.prototype,gg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{gg[t]={value:t}});Object.defineProperties(ve,gg);Object.defineProperty(mg,"isAxiosError",{value:!0});ve.from=(t,r,i,l,a,c)=>{const f=Object.create(mg);return _.toFlatObject(t,f,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),ve.call(f,t.message,r,i,l,a),f.cause=t,f.name=t.name,c&&Object.assign(f,c),f};const dE=null;function sc(t){return _.isPlainObject(t)||_.isArray(t)}function yg(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function Eh(t,r,i){return t?t.concat(r).map(function(a,c){return a=yg(a),!i&&c?"["+a+"]":a}).join(i?".":""):r}function fE(t){return _.isArray(t)&&!t.some(sc)}const pE=_.toFlatObject(_,{},null,function(r){return/^is[A-Z]/.test(r)});function Ts(t,r,i){if(!_.isObject(t))throw new TypeError("target must be an object");r=r||new FormData,i=_.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,b){return!_.isUndefined(b[C])});const l=i.metaTokens,a=i.visitor||w,c=i.dots,f=i.indexes,h=(i.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(r);if(!_.isFunction(a))throw new TypeError("visitor must be a function");function m(k){if(k===null)return"";if(_.isDate(k))return k.toISOString();if(!h&&_.isBlob(k))throw new ve("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(k)||_.isTypedArray(k)?h&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function w(k,C,b){let $=k;if(k&&!b&&typeof k=="object"){if(_.endsWith(C,"{}"))C=l?C:C.slice(0,-2),k=JSON.stringify(k);else if(_.isArray(k)&&fE(k)||(_.isFileList(k)||_.endsWith(C,"[]"))&&($=_.toArray(k)))return C=yg(C),$.forEach(function(O,W){!(_.isUndefined(O)||O===null)&&r.append(f===!0?Eh([C],W,c):f===null?C:C+"[]",m(O))}),!1}return sc(k)?!0:(r.append(Eh(b,C,c),m(k)),!1)}const y=[],S=Object.assign(pE,{defaultVisitor:w,convertValue:m,isVisitable:sc});function T(k,C){if(!_.isUndefined(k)){if(y.indexOf(k)!==-1)throw Error("Circular reference detected in "+C.join("."));y.push(k),_.forEach(k,function($,R){(!(_.isUndefined($)||$===null)&&a.call(r,$,_.isString(R)?R.trim():R,C,S))===!0&&T($,C?C.concat(R):[R])}),y.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return T(t),r}function bh(t){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(l){return r[l]})}function _c(t,r){this._pairs=[],t&&Ts(t,this,r)}const vg=_c.prototype;vg.append=function(r,i){this._pairs.push([r,i])};vg.toString=function(r){const i=r?function(l){return r.call(this,l,bh)}:bh;return this._pairs.map(function(a){return i(a[0])+"="+i(a[1])},"").join("&")};function hE(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wg(t,r,i){if(!r)return t;const l=i&&i.encode||hE;_.isFunction(i)&&(i={serialize:i});const a=i&&i.serialize;let c;if(a?c=a(r,i):c=_.isURLSearchParams(r)?r.toString():new _c(r,i).toString(l),c){const f=t.indexOf("#");f!==-1&&(t=t.slice(0,f)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class Ch{constructor(){this.handlers=[]}use(r,i,l){return this.handlers.push({fulfilled:r,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){_.forEach(this.handlers,function(l){l!==null&&r(l)})}}const xg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mE=typeof URLSearchParams<"u"?URLSearchParams:_c,gE=typeof FormData<"u"?FormData:null,yE=typeof Blob<"u"?Blob:null,vE={isBrowser:!0,classes:{URLSearchParams:mE,FormData:gE,Blob:yE},protocols:["http","https","file","blob","url","data"]},Fc=typeof window<"u"&&typeof document<"u",ac=typeof navigator=="object"&&navigator||void 0,wE=Fc&&(!ac||["ReactNative","NativeScript","NS"].indexOf(ac.product)<0),xE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",kE=Fc&&window.location.href||"http://localhost",SE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Fc,hasStandardBrowserEnv:wE,hasStandardBrowserWebWorkerEnv:xE,navigator:ac,origin:kE},Symbol.toStringTag,{value:"Module"})),gt={...SE,...vE};function EE(t,r){return Ts(t,new gt.classes.URLSearchParams,Object.assign({visitor:function(i,l,a,c){return gt.isNode&&_.isBuffer(i)?(this.append(l,i.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},r))}function bE(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(r=>r[0]==="[]"?"":r[1]||r[0])}function CE(t){const r={},i=Object.keys(t);let l;const a=i.length;let c;for(l=0;l<a;l++)c=i[l],r[c]=t[c];return r}function kg(t){function r(i,l,a,c){let f=i[c++];if(f==="__proto__")return!0;const p=Number.isFinite(+f),h=c>=i.length;return f=!f&&_.isArray(a)?a.length:f,h?(_.hasOwnProp(a,f)?a[f]=[a[f],l]:a[f]=l,!p):((!a[f]||!_.isObject(a[f]))&&(a[f]=[]),r(i,l,a[f],c)&&_.isArray(a[f])&&(a[f]=CE(a[f])),!p)}if(_.isFormData(t)&&_.isFunction(t.entries)){const i={};return _.forEachEntry(t,(l,a)=>{r(bE(l),a,i,0)}),i}return null}function AE(t,r,i){if(_.isString(t))try{return(r||JSON.parse)(t),_.trim(t)}catch(l){if(l.name!=="SyntaxError")throw l}return(0,JSON.stringify)(t)}const Ei={transitional:xg,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const l=i.getContentType()||"",a=l.indexOf("application/json")>-1,c=_.isObject(r);if(c&&_.isHTMLForm(r)&&(r=new FormData(r)),_.isFormData(r))return a?JSON.stringify(kg(r)):r;if(_.isArrayBuffer(r)||_.isBuffer(r)||_.isStream(r)||_.isFile(r)||_.isBlob(r)||_.isReadableStream(r))return r;if(_.isArrayBufferView(r))return r.buffer;if(_.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let p;if(c){if(l.indexOf("application/x-www-form-urlencoded")>-1)return EE(r,this.formSerializer).toString();if((p=_.isFileList(r))||l.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return Ts(p?{"files[]":r}:r,h&&new h,this.formSerializer)}}return c||a?(i.setContentType("application/json",!1),AE(r)):r}],transformResponse:[function(r){const i=this.transitional||Ei.transitional,l=i&&i.forcedJSONParsing,a=this.responseType==="json";if(_.isResponse(r)||_.isReadableStream(r))return r;if(r&&_.isString(r)&&(l&&!this.responseType||a)){const f=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(p){if(f)throw p.name==="SyntaxError"?ve.from(p,ve.ERR_BAD_RESPONSE,this,null,this.response):p}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gt.classes.FormData,Blob:gt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{Ei.headers[t]={}});const $E=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),RE=t=>{const r={};let i,l,a;return t&&t.split(`
`).forEach(function(f){a=f.indexOf(":"),i=f.substring(0,a).trim().toLowerCase(),l=f.substring(a+1).trim(),!(!i||r[i]&&$E[i])&&(i==="set-cookie"?r[i]?r[i].push(l):r[i]=[l]:r[i]=r[i]?r[i]+", "+l:l)}),r},Ah=Symbol("internals");function ai(t){return t&&String(t).trim().toLowerCase()}function ql(t){return t===!1||t==null?t:_.isArray(t)?t.map(ql):String(t)}function TE(t){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(t);)r[l[1]]=l[2];return r}const PE=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function zu(t,r,i,l,a){if(_.isFunction(l))return l.call(this,r,i);if(a&&(r=i),!!_.isString(r)){if(_.isString(l))return r.indexOf(l)!==-1;if(_.isRegExp(l))return l.test(r)}}function NE(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,l)=>i.toUpperCase()+l)}function jE(t,r){const i=_.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(t,l+i,{value:function(a,c,f){return this[l].call(this,r,a,c,f)},configurable:!0})})}class Tt{constructor(r){r&&this.set(r)}set(r,i,l){const a=this;function c(p,h,m){const w=ai(h);if(!w)throw new Error("header name must be a non-empty string");const y=_.findKey(a,w);(!y||a[y]===void 0||m===!0||m===void 0&&a[y]!==!1)&&(a[y||h]=ql(p))}const f=(p,h)=>_.forEach(p,(m,w)=>c(m,w,h));if(_.isPlainObject(r)||r instanceof this.constructor)f(r,i);else if(_.isString(r)&&(r=r.trim())&&!PE(r))f(RE(r),i);else if(_.isHeaders(r))for(const[p,h]of r.entries())c(h,p,l);else r!=null&&c(i,r,l);return this}get(r,i){if(r=ai(r),r){const l=_.findKey(this,r);if(l){const a=this[l];if(!i)return a;if(i===!0)return TE(a);if(_.isFunction(i))return i.call(this,a,l);if(_.isRegExp(i))return i.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=ai(r),r){const l=_.findKey(this,r);return!!(l&&this[l]!==void 0&&(!i||zu(this,this[l],l,i)))}return!1}delete(r,i){const l=this;let a=!1;function c(f){if(f=ai(f),f){const p=_.findKey(l,f);p&&(!i||zu(l,l[p],p,i))&&(delete l[p],a=!0)}}return _.isArray(r)?r.forEach(c):c(r),a}clear(r){const i=Object.keys(this);let l=i.length,a=!1;for(;l--;){const c=i[l];(!r||zu(this,this[c],c,r,!0))&&(delete this[c],a=!0)}return a}normalize(r){const i=this,l={};return _.forEach(this,(a,c)=>{const f=_.findKey(l,c);if(f){i[f]=ql(a),delete i[c];return}const p=r?NE(c):String(c).trim();p!==c&&delete i[c],i[p]=ql(a),l[p]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return _.forEach(this,(l,a)=>{l!=null&&l!==!1&&(i[a]=r&&_.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const l=new this(r);return i.forEach(a=>l.set(a)),l}static accessor(r){const l=(this[Ah]=this[Ah]={accessors:{}}).accessors,a=this.prototype;function c(f){const p=ai(f);l[p]||(jE(a,f),l[p]=!0)}return _.isArray(r)?r.forEach(c):c(r),this}}Tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Tt.prototype,({value:t},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>t,set(l){this[i]=l}}});_.freezeMethods(Tt);function Bu(t,r){const i=this||Ei,l=r||i,a=Tt.from(l.headers);let c=l.data;return _.forEach(t,function(p){c=p.call(i,c,a.normalize(),r?r.status:void 0)}),a.normalize(),c}function Sg(t){return!!(t&&t.__CANCEL__)}function wo(t,r,i){ve.call(this,t??"canceled",ve.ERR_CANCELED,r,i),this.name="CanceledError"}_.inherits(wo,ve,{__CANCEL__:!0});function Eg(t,r,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?t(i):r(new ve("Request failed with status code "+i.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function IE(t){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}function DE(t,r){t=t||10;const i=new Array(t),l=new Array(t);let a=0,c=0,f;return r=r!==void 0?r:1e3,function(h){const m=Date.now(),w=l[c];f||(f=m),i[a]=h,l[a]=m;let y=c,S=0;for(;y!==a;)S+=i[y++],y=y%t;if(a=(a+1)%t,a===c&&(c=(c+1)%t),m-f<r)return;const T=w&&m-w;return T?Math.round(S*1e3/T):void 0}}function LE(t,r){let i=0,l=1e3/r,a,c;const f=(m,w=Date.now())=>{i=w,a=null,c&&(clearTimeout(c),c=null),t.apply(null,m)};return[(...m)=>{const w=Date.now(),y=w-i;y>=l?f(m,w):(a=m,c||(c=setTimeout(()=>{c=null,f(a)},l-y)))},()=>a&&f(a)]}const os=(t,r,i=3)=>{let l=0;const a=DE(50,250);return LE(c=>{const f=c.loaded,p=c.lengthComputable?c.total:void 0,h=f-l,m=a(h),w=f<=p;l=f;const y={loaded:f,total:p,progress:p?f/p:void 0,bytes:h,rate:m||void 0,estimated:m&&p&&w?(p-f)/m:void 0,event:c,lengthComputable:p!=null,[r?"download":"upload"]:!0};t(y)},i)},$h=(t,r)=>{const i=t!=null;return[l=>r[0]({lengthComputable:i,total:t,loaded:l}),r[1]]},Rh=t=>(...r)=>_.asap(()=>t(...r)),OE=gt.hasStandardBrowserEnv?((t,r)=>i=>(i=new URL(i,gt.origin),t.protocol===i.protocol&&t.host===i.host&&(r||t.port===i.port)))(new URL(gt.origin),gt.navigator&&/(msie|trident)/i.test(gt.navigator.userAgent)):()=>!0,_E=gt.hasStandardBrowserEnv?{write(t,r,i,l,a,c){const f=[t+"="+encodeURIComponent(r)];_.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),_.isString(l)&&f.push("path="+l),_.isString(a)&&f.push("domain="+a),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function FE(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function zE(t,r){return r?t.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):t}function bg(t,r){return t&&!FE(r)?zE(t,r):r}const Th=t=>t instanceof Tt?{...t}:t;function Pr(t,r){r=r||{};const i={};function l(m,w,y,S){return _.isPlainObject(m)&&_.isPlainObject(w)?_.merge.call({caseless:S},m,w):_.isPlainObject(w)?_.merge({},w):_.isArray(w)?w.slice():w}function a(m,w,y,S){if(_.isUndefined(w)){if(!_.isUndefined(m))return l(void 0,m,y,S)}else return l(m,w,y,S)}function c(m,w){if(!_.isUndefined(w))return l(void 0,w)}function f(m,w){if(_.isUndefined(w)){if(!_.isUndefined(m))return l(void 0,m)}else return l(void 0,w)}function p(m,w,y){if(y in r)return l(m,w);if(y in t)return l(void 0,m)}const h={url:c,method:c,data:c,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:p,headers:(m,w,y)=>a(Th(m),Th(w),y,!0)};return _.forEach(Object.keys(Object.assign({},t,r)),function(w){const y=h[w]||a,S=y(t[w],r[w],w);_.isUndefined(S)&&y!==p||(i[w]=S)}),i}const Cg=t=>{const r=Pr({},t);let{data:i,withXSRFToken:l,xsrfHeaderName:a,xsrfCookieName:c,headers:f,auth:p}=r;r.headers=f=Tt.from(f),r.url=wg(bg(r.baseURL,r.url),t.params,t.paramsSerializer),p&&f.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(_.isFormData(i)){if(gt.hasStandardBrowserEnv||gt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((h=f.getContentType())!==!1){const[m,...w]=h?h.split(";").map(y=>y.trim()).filter(Boolean):[];f.setContentType([m||"multipart/form-data",...w].join("; "))}}if(gt.hasStandardBrowserEnv&&(l&&_.isFunction(l)&&(l=l(r)),l||l!==!1&&OE(r.url))){const m=a&&c&&_E.read(c);m&&f.set(a,m)}return r},BE=typeof XMLHttpRequest<"u",ME=BE&&function(t){return new Promise(function(i,l){const a=Cg(t);let c=a.data;const f=Tt.from(a.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:m}=a,w,y,S,T,k;function C(){T&&T(),k&&k(),a.cancelToken&&a.cancelToken.unsubscribe(w),a.signal&&a.signal.removeEventListener("abort",w)}let b=new XMLHttpRequest;b.open(a.method.toUpperCase(),a.url,!0),b.timeout=a.timeout;function $(){if(!b)return;const O=Tt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),Q={data:!p||p==="text"||p==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:O,config:t,request:b};Eg(function(q){i(q),C()},function(q){l(q),C()},Q),b=null}"onloadend"in b?b.onloadend=$:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout($)},b.onabort=function(){b&&(l(new ve("Request aborted",ve.ECONNABORTED,t,b)),b=null)},b.onerror=function(){l(new ve("Network Error",ve.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let W=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const Q=a.transitional||xg;a.timeoutErrorMessage&&(W=a.timeoutErrorMessage),l(new ve(W,Q.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,t,b)),b=null},c===void 0&&f.setContentType(null),"setRequestHeader"in b&&_.forEach(f.toJSON(),function(W,Q){b.setRequestHeader(Q,W)}),_.isUndefined(a.withCredentials)||(b.withCredentials=!!a.withCredentials),p&&p!=="json"&&(b.responseType=a.responseType),m&&([S,k]=os(m,!0),b.addEventListener("progress",S)),h&&b.upload&&([y,T]=os(h),b.upload.addEventListener("progress",y),b.upload.addEventListener("loadend",T)),(a.cancelToken||a.signal)&&(w=O=>{b&&(l(!O||O.type?new wo(null,t,b):O),b.abort(),b=null)},a.cancelToken&&a.cancelToken.subscribe(w),a.signal&&(a.signal.aborted?w():a.signal.addEventListener("abort",w)));const R=IE(a.url);if(R&&gt.protocols.indexOf(R)===-1){l(new ve("Unsupported protocol "+R+":",ve.ERR_BAD_REQUEST,t));return}b.send(c||null)})},UE=(t,r)=>{const{length:i}=t=t?t.filter(Boolean):[];if(r||i){let l=new AbortController,a;const c=function(m){if(!a){a=!0,p();const w=m instanceof Error?m:this.reason;l.abort(w instanceof ve?w:new wo(w instanceof Error?w.message:w))}};let f=r&&setTimeout(()=>{f=null,c(new ve(`timeout ${r} of ms exceeded`,ve.ETIMEDOUT))},r);const p=()=>{t&&(f&&clearTimeout(f),f=null,t.forEach(m=>{m.unsubscribe?m.unsubscribe(c):m.removeEventListener("abort",c)}),t=null)};t.forEach(m=>m.addEventListener("abort",c));const{signal:h}=l;return h.unsubscribe=()=>_.asap(p),h}},HE=function*(t,r){let i=t.byteLength;if(i<r){yield t;return}let l=0,a;for(;l<i;)a=l+r,yield t.slice(l,a),l=a},WE=async function*(t,r){for await(const i of VE(t))yield*HE(i,r)},VE=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const r=t.getReader();try{for(;;){const{done:i,value:l}=await r.read();if(i)break;yield l}}finally{await r.cancel()}},Ph=(t,r,i,l)=>{const a=WE(t,r);let c=0,f,p=h=>{f||(f=!0,l&&l(h))};return new ReadableStream({async pull(h){try{const{done:m,value:w}=await a.next();if(m){p(),h.close();return}let y=w.byteLength;if(i){let S=c+=y;i(S)}h.enqueue(new Uint8Array(w))}catch(m){throw p(m),m}},cancel(h){return p(h),a.return()}},{highWaterMark:2})},Ps=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ag=Ps&&typeof ReadableStream=="function",QE=Ps&&(typeof TextEncoder=="function"?(t=>r=>t.encode(r))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),$g=(t,...r)=>{try{return!!t(...r)}catch{return!1}},KE=Ag&&$g(()=>{let t=!1;const r=new Request(gt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!r}),Nh=64*1024,uc=Ag&&$g(()=>_.isReadableStream(new Response("").body)),is={stream:uc&&(t=>t.body)};Ps&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!is[r]&&(is[r]=_.isFunction(t[r])?i=>i[r]():(i,l)=>{throw new ve(`Response type '${r}' is not supported`,ve.ERR_NOT_SUPPORT,l)})})})(new Response);const GE=async t=>{if(t==null)return 0;if(_.isBlob(t))return t.size;if(_.isSpecCompliantForm(t))return(await new Request(gt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(_.isArrayBufferView(t)||_.isArrayBuffer(t))return t.byteLength;if(_.isURLSearchParams(t)&&(t=t+""),_.isString(t))return(await QE(t)).byteLength},qE=async(t,r)=>{const i=_.toFiniteNumber(t.getContentLength());return i??GE(r)},YE=Ps&&(async t=>{let{url:r,method:i,data:l,signal:a,cancelToken:c,timeout:f,onDownloadProgress:p,onUploadProgress:h,responseType:m,headers:w,withCredentials:y="same-origin",fetchOptions:S}=Cg(t);m=m?(m+"").toLowerCase():"text";let T=UE([a,c&&c.toAbortSignal()],f),k;const C=T&&T.unsubscribe&&(()=>{T.unsubscribe()});let b;try{if(h&&KE&&i!=="get"&&i!=="head"&&(b=await qE(w,l))!==0){let Q=new Request(r,{method:"POST",body:l,duplex:"half"}),K;if(_.isFormData(l)&&(K=Q.headers.get("content-type"))&&w.setContentType(K),Q.body){const[q,fe]=$h(b,os(Rh(h)));l=Ph(Q.body,Nh,q,fe)}}_.isString(y)||(y=y?"include":"omit");const $="credentials"in Request.prototype;k=new Request(r,{...S,signal:T,method:i.toUpperCase(),headers:w.normalize().toJSON(),body:l,duplex:"half",credentials:$?y:void 0});let R=await fetch(k);const O=uc&&(m==="stream"||m==="response");if(uc&&(p||O&&C)){const Q={};["status","statusText","headers"].forEach(ge=>{Q[ge]=R[ge]});const K=_.toFiniteNumber(R.headers.get("content-length")),[q,fe]=p&&$h(K,os(Rh(p),!0))||[];R=new Response(Ph(R.body,Nh,q,()=>{fe&&fe(),C&&C()}),Q)}m=m||"text";let W=await is[_.findKey(is,m)||"text"](R,t);return!O&&C&&C(),await new Promise((Q,K)=>{Eg(Q,K,{data:W,headers:Tt.from(R.headers),status:R.status,statusText:R.statusText,config:t,request:k})})}catch($){throw C&&C(),$&&$.name==="TypeError"&&/fetch/i.test($.message)?Object.assign(new ve("Network Error",ve.ERR_NETWORK,t,k),{cause:$.cause||$}):ve.from($,$&&$.code,t,k)}}),cc={http:dE,xhr:ME,fetch:YE};_.forEach(cc,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch{}Object.defineProperty(t,"adapterName",{value:r})}});const jh=t=>`- ${t}`,XE=t=>_.isFunction(t)||t===null||t===!1,Rg={getAdapter:t=>{t=_.isArray(t)?t:[t];const{length:r}=t;let i,l;const a={};for(let c=0;c<r;c++){i=t[c];let f;if(l=i,!XE(i)&&(l=cc[(f=String(i)).toLowerCase()],l===void 0))throw new ve(`Unknown adapter '${f}'`);if(l)break;a[f||"#"+c]=l}if(!l){const c=Object.entries(a).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let f=r?c.length>1?`since :
`+c.map(jh).join(`
`):" "+jh(c[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:cc};function Mu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new wo(null,t)}function Ih(t){return Mu(t),t.headers=Tt.from(t.headers),t.data=Bu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Rg.getAdapter(t.adapter||Ei.adapter)(t).then(function(l){return Mu(t),l.data=Bu.call(t,t.transformResponse,l),l.headers=Tt.from(l.headers),l},function(l){return Sg(l)||(Mu(t),l&&l.response&&(l.response.data=Bu.call(t,t.transformResponse,l.response),l.response.headers=Tt.from(l.response.headers))),Promise.reject(l)})}const Tg="1.7.9",Ns={};["object","boolean","number","function","string","symbol"].forEach((t,r)=>{Ns[t]=function(l){return typeof l===t||"a"+(r<1?"n ":" ")+t}});const Dh={};Ns.transitional=function(r,i,l){function a(c,f){return"[Axios v"+Tg+"] Transitional option '"+c+"'"+f+(l?". "+l:"")}return(c,f,p)=>{if(r===!1)throw new ve(a(f," has been removed"+(i?" in "+i:"")),ve.ERR_DEPRECATED);return i&&!Dh[f]&&(Dh[f]=!0,console.warn(a(f," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(c,f,p):!0}};Ns.spelling=function(r){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function JE(t,r,i){if(typeof t!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const l=Object.keys(t);let a=l.length;for(;a-- >0;){const c=l[a],f=r[c];if(f){const p=t[c],h=p===void 0||f(p,c,t);if(h!==!0)throw new ve("option "+c+" must be "+h,ve.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ve("Unknown option "+c,ve.ERR_BAD_OPTION)}}const Yl={assertOptions:JE,validators:Ns},hn=Yl.validators;class Cr{constructor(r){this.defaults=r,this.interceptors={request:new Ch,response:new Ch}}async request(r,i){try{return await this._request(r,i)}catch(l){if(l instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const c=a.stack?a.stack.replace(/^.+\n/,""):"";try{l.stack?c&&!String(l.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+c):l.stack=c}catch{}}throw l}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=Pr(this.defaults,i);const{transitional:l,paramsSerializer:a,headers:c}=i;l!==void 0&&Yl.assertOptions(l,{silentJSONParsing:hn.transitional(hn.boolean),forcedJSONParsing:hn.transitional(hn.boolean),clarifyTimeoutError:hn.transitional(hn.boolean)},!1),a!=null&&(_.isFunction(a)?i.paramsSerializer={serialize:a}:Yl.assertOptions(a,{encode:hn.function,serialize:hn.function},!0)),Yl.assertOptions(i,{baseUrl:hn.spelling("baseURL"),withXsrfToken:hn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=c&&_.merge(c.common,c[i.method]);c&&_.forEach(["delete","get","head","post","put","patch","common"],k=>{delete c[k]}),i.headers=Tt.concat(f,c);const p=[];let h=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(i)===!1||(h=h&&C.synchronous,p.unshift(C.fulfilled,C.rejected))});const m=[];this.interceptors.response.forEach(function(C){m.push(C.fulfilled,C.rejected)});let w,y=0,S;if(!h){const k=[Ih.bind(this),void 0];for(k.unshift.apply(k,p),k.push.apply(k,m),S=k.length,w=Promise.resolve(i);y<S;)w=w.then(k[y++],k[y++]);return w}S=p.length;let T=i;for(y=0;y<S;){const k=p[y++],C=p[y++];try{T=k(T)}catch(b){C.call(this,b);break}}try{w=Ih.call(this,T)}catch(k){return Promise.reject(k)}for(y=0,S=m.length;y<S;)w=w.then(m[y++],m[y++]);return w}getUri(r){r=Pr(this.defaults,r);const i=bg(r.baseURL,r.url);return wg(i,r.params,r.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(r){Cr.prototype[r]=function(i,l){return this.request(Pr(l||{},{method:r,url:i,data:(l||{}).data}))}});_.forEach(["post","put","patch"],function(r){function i(l){return function(c,f,p){return this.request(Pr(p||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:c,data:f}))}}Cr.prototype[r]=i(),Cr.prototype[r+"Form"]=i(!0)});class zc{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(c){i=c});const l=this;this.promise.then(a=>{if(!l._listeners)return;let c=l._listeners.length;for(;c-- >0;)l._listeners[c](a);l._listeners=null}),this.promise.then=a=>{let c;const f=new Promise(p=>{l.subscribe(p),c=p}).then(a);return f.cancel=function(){l.unsubscribe(c)},f},r(function(c,f,p){l.reason||(l.reason=new wo(c,f,p),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=l=>{r.abort(l)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new zc(function(a){r=a}),cancel:r}}}function ZE(t){return function(i){return t.apply(null,i)}}function eb(t){return _.isObject(t)&&t.isAxiosError===!0}const dc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(dc).forEach(([t,r])=>{dc[r]=t});function Pg(t){const r=new Cr(t),i=sg(Cr.prototype.request,r);return _.extend(i,Cr.prototype,r,{allOwnKeys:!0}),_.extend(i,r,null,{allOwnKeys:!0}),i.create=function(a){return Pg(Pr(t,a))},i}const Oe=Pg(Ei);Oe.Axios=Cr;Oe.CanceledError=wo;Oe.CancelToken=zc;Oe.isCancel=Sg;Oe.VERSION=Tg;Oe.toFormData=Ts;Oe.AxiosError=ve;Oe.Cancel=Oe.CanceledError;Oe.all=function(r){return Promise.all(r)};Oe.spread=ZE;Oe.isAxiosError=eb;Oe.mergeConfig=Pr;Oe.AxiosHeaders=Tt;Oe.formToJSON=t=>kg(_.isHTMLForm(t)?new FormData(t):t);Oe.getAdapter=Rg.getAdapter;Oe.HttpStatusCode=dc;Oe.default=Oe;const fc=x.createContext({});function tb({children:t}){const[r,i]=x.useState("url(/win-cursor/arrow.cur), auto"),[l,a]=x.useState([]),[c,f]=x.useState({image:"",type:1}),p=localStorage.getItem("wallpaper");x.useEffect(()=>{f(p!==null?JSON.parse(p):{image:"",type:1})},[p]);const h=w=>{localStorage.setItem("wallpaper",JSON.stringify(w)),f(w)},m=w=>{i(`url(/win-cursor/${w}), auto`)};return v.jsx(fc.Provider,{value:{cursor:r,changeCursor:m,storage:l,setStorage:a,wallpaper:c,changeWallpaper:h},children:t})}function Dr(){if(!fc)throw new Error("useProcessContext must be used within a ProcessContextProvider");return x.useContext(fc)}const nb=({games:t,fetchGames:r,setGames:i})=>{const{changeCursor:l}=Dr(),a=["Platform","Title","Started Date","Notes","Completed","Completed Date",""],[c,f]=x.useState(0),[p,h]=x.useState(!0);x.useEffect(()=>{m()},[]);const m=()=>{l("loading.cur");const k=setInterval(()=>{f(C=>{if(C===100)return h(!1),l("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(k)}},w=(k,C)=>{i(t.map((b,$)=>$===C?{...b,notes:k.target.value}:b))},y=k=>{h(!0),Oe.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{h(!0),Oe.post(`undefined/games/${k.id}/complete`).then(()=>r())},T=(k,C)=>{Oe.put(`undefined/games/${C.id}`,{notes:k.target.value})};return p?v.jsx(ms,{value:Math.floor(c)}):v.jsxs("div",{children:[v.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"GAMES!"}),t.length?v.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:v.jsxs(xs,{children:[v.jsx(vs,{children:v.jsx(Tr,{children:a.map(k=>v.jsx(ws,{children:k},k))})}),v.jsx(ys,{children:t.map((k,C)=>v.jsxs(Tr,{children:[v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("p",{children:k.platform.name})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("div",{style:{minWidth:"150px"},children:v.jsx("p",{children:k.title})})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?v.jsx(jr,{style:{minWidth:"20vw"},onChange:b=>w(b,C),value:k.notes||"",onBlur:b=>T(b,k),multiline:!0,rows:4,fullWidth:!0}):k.notes}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?"Yes!":"No"}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completedDate}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&v.jsxs("div",{style:{width:"70px"},children:[v.jsx("img",{onClick:()=>S(k),src:CS,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),v.jsx("img",{onClick:()=>y(k),src:lg,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):v.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},rb=({saveAndGoBack:t})=>{const{changeCursor:r}=Dr(),[i,l]=x.useState([]),[a,c]=x.useState({}),[f,p]=x.useState(""),[h,m]=x.useState(0),[w,y]=x.useState(!1),[S,T]=x.useState(1);x.useEffect(()=>{h===100&&t(S)},[h]);const k=()=>{r("loading.cur");const b=setInterval(()=>{m($=>{if($===100)return 0;const R=Math.random()*50;return Math.min($+R,100)})},500);return()=>{clearInterval(b)}};x.useEffect(()=>{Oe.get("undefined/platforms").then(b=>{l(b.data.map($=>({...$,label:$.name})))})},[]);const C=()=>{T(w?2:1),k(),Oe.post("undefined/games",{platform_id:a.id,title:f,backlog:w})};return v.jsxs(v.Fragment,{children:[v.jsxs(jm,{label:"New Game",children:[v.jsxs("div",{children:[v.jsx("p",{children:"Platform"}),v.jsx(Ac,{formatDisplay:()=>a.name,labelId:"opt.name",options:[{},...i],menuMaxHeight:160,width:160,onChange:b=>c(b)})]}),v.jsxs("div",{style:{marginTop:"5px"},children:[v.jsx("p",{children:"Title"}),v.jsx(jr,{value:f,placeholder:"Type here...",onChange:b=>p(b.target.value),fullWidth:!0})]}),v.jsxs("div",{style:{marginTop:"5px",display:"flex"},children:[v.jsx(km,{value:w,onChange:()=>y(!w),style:{marginTop:"2px"}}),v.jsx("p",{children:"Backlog"})]})]}),v.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"},children:h>0?v.jsx(ms,{value:Math.floor(h)}):v.jsx(v.Fragment,{children:v.jsx(xe,{disabled:Object.keys(a).length===0||!f,onClick:()=>C(),style:{textAlign:"center"},children:"Save new game"})})})]})},ob="/freecellman.png",ib=({games:t,fetchGames:r,setGames:i})=>{const{changeCursor:l}=Dr(),a=["Platform","Title","Logged Date","Notes",""],[c,f]=x.useState(0),[p,h]=x.useState(!0);x.useEffect(()=>{m()},[]);const m=()=>{l("loading.cur");const k=setInterval(()=>{f(C=>{if(C===100)return h(!1),l("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(k)}},w=(k,C)=>{i(t.map((b,$)=>$===C?{...b,notes:k.target.value}:b))},y=k=>{h(!0),Oe.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{h(!0),Oe.get(`undefined/games/${k.id}/start`).then(()=>r())},T=(k,C)=>{Oe.put(`undefined/games/${C.id}`,{notes:k.target.value})};return p?v.jsx(ms,{value:Math.floor(c)}):v.jsxs("div",{children:[v.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Backlog"}),t.length?v.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:v.jsxs(xs,{children:[v.jsx(vs,{children:v.jsx(Tr,{children:a.map(k=>v.jsx(ws,{children:k},k))})}),v.jsx(ys,{children:t.map((k,C)=>v.jsxs(Tr,{children:[v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("p",{children:k.platform.name})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("div",{style:{minWidth:"300px"},children:v.jsx("p",{children:k.title})})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx(jr,{style:{minWidth:"20vw"},onChange:b=>w(b,C),value:k.notes||"",onBlur:b=>T(b,k),multiline:!0,rows:2,fullWidth:!0})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&v.jsxs("div",{style:{width:"70px"},children:[v.jsx("img",{onClick:()=>S(k),src:ob,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),v.jsx("img",{onClick:()=>y(k),src:lg,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):v.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},Ng=()=>{const[t,r]=x.useState(1),[i,l]=x.useState([]),[a,c]=x.useState(!1);x.useEffect(()=>{f(!0)},[]),x.useEffect(()=>{switch(localStorage.setItem("system.gamecache.page",String(t)),t){case 1:f(!1);break;case 2:f(!0);break}},[t]);const f=w=>{l([]),Oe.get(`undefined/games${w?"/backlog":""}`).then(y=>l(y.data))},p=w=>{r(w),c(!1)},h=w=>{r(w),f(w===2)},m=[{component:v.jsx(rb,{saveAndGoBack:h}),text:"Add new Game to your Backlog"},{component:v.jsx(nb,{setGames:l,fetchGames:()=>f(!1),games:i}),text:"Game list"},{component:v.jsx(ib,{setGames:l,fetchGames:()=>f(!0),games:i}),text:"Backloged games, ready to play!"}];return v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>c(!a),children:"File"}),a&&v.jsxs(ps,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:[v.jsx(tn,{style:{cursor:"pointer"},onClick:()=>p(0),children:"New Game"}),v.jsx(tn,{style:{cursor:"pointer"},onClick:()=>p(1),children:v.jsx("p",{children:"Game List"})}),v.jsx(tn,{style:{cursor:"pointer"},onClick:()=>p(2),children:v.jsx("p",{children:"Backlog"})})]}),v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>c(!1),children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:m[t].component}),v.jsx(Pt,{variant:"well",className:"footer",children:m[t].text})]})},Uu="/home/user",Lh="/home/user/welcome.txt",Bc=()=>{const t=bs(),[r,i]=x.useState(Lh),[l,a]=x.useState(""),[c,f]=x.useState(!1),[p,h]=x.useState(!1),[m,w]=x.useState([]),[y,S]=x.useState(""),T=x.useCallback(async R=>{try{const O=await t.readTextFile(R);i(R),a(O),f(!1),S(`Opened ${R}`)}catch(O){S(`Could not open ${R}: ${O.code??O.message}`)}},[t]);x.useEffect(()=>{(async()=>{const[R]=await t.argv();await T(R||Lh)})()},[T,t]);const k=async()=>{try{w((await t.readdir(Uu)).filter(R=>R.endsWith(".txt")))}catch{w([])}h(R=>!R)},C=async()=>{try{await t.writeTextFile(r,l),f(!1),S(`Saved ${r}`)}catch(R){S(`Save failed: ${R.code??R.message}`)}h(!1)},b=()=>{const R=window.prompt("New file name:","untitled.txt");h(!1),R&&(i(`${Uu}/${R}`),a(""),f(!0),S(`New file ${R} — not saved yet`))},$=async R=>{h(!1),await T(`${Uu}/${R}`)};return v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:k,children:"File"}),p&&v.jsxs(ps,{style:{position:"absolute",left:"3%",top:"100%",zIndex:99999},children:[v.jsx(tn,{style:{cursor:"pointer"},onClick:b,children:"New"}),v.jsx(tn,{style:{cursor:"pointer"},onClick:C,children:"Save"}),v.jsx(hs,{}),m.length===0&&v.jsx(tn,{disabled:!0,children:"(no .txt files)"}),m.map(R=>v.jsx(tn,{style:{cursor:"pointer"},onClick:()=>$(R),children:R},R))]}),v.jsx(xe,{variant:"menu",size:"sm",onClick:C,disabled:!c,children:"Save"})]}),v.jsx(St,{children:v.jsx(jr,{style:{minWidth:"60vw"},value:l,onChange:R=>{a(R.target.value),f(!0)},multiline:!0,rows:20,fullWidth:!0})}),v.jsx(Pt,{variant:"well",className:"footer",children:v.jsxs("p",{children:[r,c?" •":""," ",y&&`— ${y}`]})})]})},jg=()=>v.jsxs(v.Fragment,{children:[v.jsx(St,{children:v.jsx("iframe",{width:"680",height:"400",frameBorder:"0",src:"https://web.archive.org/web/20250307002700/https://www.google.com/web/20250307002700/https://www.google.com/x`x",allowFullScreen:!1})}),v.jsx(Pt,{variant:"well",className:"footer",children:"Browser"})]}),gi="/explorer.png",yi="/notes.png",Mc=()=>{const t=bs(),[r,i]=x.useState("/"),[l,a]=x.useState([]),[c,f]=x.useState(null),[p,h]=x.useState(""),m=x.useCallback(async y=>{try{const S=await t.readdir(y),T=await Promise.all(S.map(async k=>{try{const C=await t.stat(ho(y,k));return{name:k,type:C.type,size:C.size}}catch{return{name:k,type:"file",size:0}}}));T.sort((k,C)=>k.type===C.type?k.name.localeCompare(C.name):k.type==="dir"?-1:1),i(y),a(T),f(null),h(`${y} — ${T.length} item(s)`)}catch(S){h(`Cannot open ${y}: ${S.code??S.message}`)}},[t]);x.useEffect(()=>{m("/")},[m]);const w=y=>{const S=ho(r,y.name);y.type==="dir"?m(S):(t.spawn("notes",{argv:[S]}),h(`Opening ${y.name} in Notes…`))};return v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>m(gn(r)),disabled:r==="/",children:"Up"}),v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>m(r),children:"Refresh"}),v.jsx("span",{style:{marginLeft:8,alignSelf:"center"},children:r})]}),v.jsx(St,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:v.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:640,minHeight:240,alignContent:"flex-start"},children:l.map(y=>v.jsxs("div",{onClick:()=>f(y.name),onDoubleClick:()=>w(y),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[v.jsx("img",{src:y.type==="dir"?gi:yi,alt:y.type,style:{height:48,filter:c===y.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),v.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:c===y.name?"white":"black",backgroundColor:c===y.name?"#000080":"transparent"},children:y.name})]},y.name))})}),v.jsx(Pt,{variant:"well",className:"footer",children:v.jsx("p",{children:p||"Explorer"})})]})},Ig=()=>v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(Cs,{bundleUrl:"dos/tomb.jsdos"})})}),v.jsx(Pt,{variant:"well",className:"footer",children:"Tomb Raider"})]}),Dg=()=>v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(Cs,{bundleUrl:"dos/PERSIA.jsdos"})})}),v.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]}),lb="https://radio.plaza.one/mp3",Oh="https://api.plaza.one/status",Lg=()=>{const[t,r]=x.useState(null),[i,l]=x.useState(1);return x.useEffect(()=>{fetch(Oh).then(c=>c.json()).then(c=>r(c.song)),l(Math.floor(Math.random()*10)+1);const a=setInterval(()=>{l(Math.floor(Math.random()*10)+1),fetch(Oh).then(c=>c.json()).then(c=>r(c.song))},12e4);return()=>clearInterval(a)},[]),v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{children:v.jsxs("div",{style:{width:"300px"},className:"flex flex-col items-center gap-4",children:[v.jsx("h2",{className:"text-2xl font-bold",children:"Vaporwave Radio"}),v.jsx("audio",{controls:!0,autoPlay:!0,src:lb,className:"w-full max-w-md"}),t?v.jsxs("div",{className:"flex flex-col items-center",children:[v.jsx("img",{width:"200px",src:t.artwork_src??"/default_cover.jpg",alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),v.jsx("div",{className:"text-lg font-semibold",children:t.title}),v.jsx("div",{className:"text-sm text-neutral-400",children:t.artist})]}):v.jsxs("div",{className:"flex flex-col items-center",children:[v.jsx("img",{width:"200px",src:`/vaporwave/${i}.jpeg`,alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),v.jsx("div",{className:"text-lg font-semibold",children:"Sunset over Neon Palms"}),v.jsx("div",{className:"text-sm text-neutral-400",children:"Dream Mall Escalator"})]})]})}),v.jsx(Pt,{variant:"well",className:"footer",children:v.jsxs("p",{className:"text-sm text-neutral-400",children:["Powered by ",v.jsx("a",{href:"https://plaza.one",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Nightwave Plaza"})]})})]})},sb=()=>{const[t,r]=x.useState(""),[i,l]=x.useState(1),{changeWallpaper:a}=Dr(),c=["#008080","#000080","#000000","#00FF00","#800000","#FF00FF"],f=M.img`
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,p=M.div`
        width: 80px;
        height: 80px;
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,h=(y,S)=>{r(y),l(S)},m=()=>t?i===2?{background:t}:{backgroundImage:`url('/${t}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:"blue"},w=M.div`
        display: flex;
        justify-content: end;
        margin-top: 20px;
    `;return v.jsxs("div",{style:{width:"800px",maxHeight:"70vh",overflowY:"scroll",overflowX:"hidden"},children:[v.jsx("p",{className:"text-xl pb-4 font-bold",children:"Choose the wallpaper"}),v.jsx("div",{className:"flex justify-center",children:v.jsx(Im,{backgroundStyles:m()})}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Solid Colors"}),v.jsx("div",{className:"flex justify-between",children:c.map(y=>v.jsx(p,{style:{background:y},onClick:()=>h(y,2),className:"p-2 cursor-pointer hover"}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Windows XP"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:5},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/xp-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/xp-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Windows 7"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:4},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/7-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/7-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Vaporwave Style"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:7},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/vw-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/vw-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Games"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:1},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/games-${y}.png`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/games-${y}.png`}))})]}),v.jsx(w,{children:v.jsx(xe,{onClick:()=>a({image:t,type:i}),disabled:t==="",children:"Apply"})})]})},Og=()=>{const[t,r]=x.useState(!0),[i,l]=x.useState(null),[a,c]=x.useState([[{name:"Monitor",icon:"/monitor.png",component:sb,selected:!1}]]),f=x.useCallback((p,h)=>{c(a.map((m,w)=>m.map((y,S)=>a[p][h].selected===!0?(l(()=>a[p][h].component),r(!1),{...y,selected:!1}):w===p&&S===h?{...y,selected:!0}:{...y,selected:!1})))},[a,c]);return v.jsxs(v.Fragment,{children:[v.jsxs(kt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(St,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:t||!i?v.jsx("div",{style:{width:"700px"},children:v.jsx("div",{style:{width:"100%"},children:Array.from({length:21}).map((p,h)=>v.jsx("div",{style:{display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"},children:Array.from({length:7}).map((m,w)=>a[h]&&a[h][w]&&v.jsxs("div",{onClick:()=>f(h,w),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column",paddingRight:"30px"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsx("img",{src:a[h][w].icon,style:{height:"70px",filter:a[h][w].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),v.jsx("p",{style:{color:a[h][w].selected?"white":"black",textAlign:"center",backgroundColor:a[h][w].selected?"#000080":"transparent"},children:a[h][w].name})]}))}))})}):i&&v.jsx(i,{})}),v.jsx(Pt,{variant:"well",className:"footer",children:"Control Panel"})]})},ab=new Set(["|","<",";"]);function ub(t){const r=[];let i=0;const l=t.length;for(;i<l;){const a=t[i];if(a===" "||a==="	"){i++;continue}if(a===">"){t[i+1]===">"?(r.push({type:"op",value:">>"}),i+=2):(r.push({type:"op",value:">"}),i++);continue}if(ab.has(a)){r.push({type:"op",value:a}),i++;continue}let c="";for(;i<l;){const f=t[i];if(f===" "||f==="	"||f==="|"||f==="<"||f===">"||f===";")break;if(f==='"'||f==="'"){const p=f;for(i++;i<l&&t[i]!==p;)c+=t[i],i++;i++;continue}if(f==="\\"&&i+1<l){c+=t[i+1],i+=2;continue}c+=f,i++}r.push({type:"word",value:c})}return r}class zl extends Error{}function cb(t){const r=ub(t),i=[];let l=[],a=null,c=!1;const f=()=>{a&&l.push(a),a=null},p=()=>{if(c)throw new zl("syntax error near `|`");f(),l.length&&i.push(l),l=[]};for(let h=0;h<r.length;h++){const m=r[h];if(m.type==="word"){a||(a={argv:[]}),a.argv.push(m.value),c=!1;continue}if(m.value===";"){p();continue}if(m.value==="|"){if(!a||a.argv.length===0)throw new zl("syntax error near `|`");f(),c=!0;continue}const w=r[h+1];if(!w||w.type!=="word")throw new zl(`syntax error near \`${m.value}\``);a||(a={argv:[]}),m.value==="<"?a.stdinFile=w.value:(a.stdoutFile=w.value,a.append=m.value===">>"),h++}p();for(const h of i)for(const m of h)if(m.argv.length===0)throw new zl("syntax error: empty command");return i}function xt(t,r){return r.startsWith("/")?rr(r):ho(t,r)}function Ft(t){const r=new Set,i=[];for(const l of t.slice(1))if(l.length>1&&l[0]==="-"&&l[1]!=="-")for(const a of l.slice(1))r.add(a);else i.push(l);return{flags:r,operands:i}}const kn=t=>(t==null?void 0:t.code)??(t==null?void 0:t.message)??"error",db=async({argv:t,out:r})=>(r(t.slice(1).join(" ")+`
`),0),fb=async({cwd:t,out:r})=>(r(t+`
`),0),pb=async({env:t,out:r})=>(r((t.USER??"user")+`
`),0),hb=async({argv:t,out:r})=>(r(t.includes("-a")?`VortexOS 2.0 vortex web microkernel
`:`VortexOS
`),0),mb=async({out:t})=>(t(new Date().toString()+`
`),0),gb=async({env:t,out:r})=>{for(const[i,l]of Object.entries(t))r(`${i}=${l}
`);return 0},yb=async({argv:t,cwd:r,sys:i,out:l,err:a})=>{const{flags:c,operands:f}=Ft(t),p=f.length?f:["."];let h=0;for(const m of p){const w=xt(r,m);try{const y=await i.stat(w),S=y.type==="dir"?await i.readdir(w):[Qt(w)];if(c.has("l"))for(const T of S){const k=y.type==="dir"?ho(w,T):w,C=await i.stat(k),b=C.type==="dir"?"d":C.type==="dev"?"c":"-";l(`${b}  ${String(C.size).padStart(6)}  ${T}
`)}else S.length&&l(S.join(`
`)+`
`)}catch(y){a(`ls: cannot access '${m}': ${kn(y)}
`),h=1}}return h},vb=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const{operands:f}=Ft(t);if(f.length===0)return a(i),0;let p=0;for(const h of f)try{a(await l.readTextFile(xt(r,h)))}catch(m){c(`cat: ${h}: ${kn(m)}
`),p=1}return p},wb=async({argv:t,cwd:r,sys:i,err:l})=>{const{flags:a,operands:c}=Ft(t);let f=0;for(const p of c){const h=xt(r,p);try{if(a.has("p")){let m="";for(const w of h.split("/").filter(Boolean))m+="/"+w,await i.stat(m).then(()=>!0).catch(()=>!1)||await i.mkdir(m)}else await i.mkdir(h)}catch(m){l(`mkdir: ${p}: ${kn(m)}
`),f=1}}return f},xb=async({argv:t,cwd:r,sys:i,err:l})=>{const{operands:a}=Ft(t);let c=0;for(const f of a){const p=xt(r,f);try{await i.stat(p).then(()=>!0).catch(()=>!1)||await i.writeTextFile(p,"")}catch(h){l(`touch: ${f}: ${kn(h)}
`),c=1}}return c};async function _g(t,r){if((await t.stat(r)).type==="dir")for(const l of await t.readdir(r))await _g(t,ho(r,l));await t.unlink(r)}const kb=async({argv:t,cwd:r,sys:i,err:l})=>{const{flags:a,operands:c}=Ft(t);let f=0;for(const p of c){const h=xt(r,p);try{a.has("r")?await _g(i,h):await i.unlink(h)}catch(m){l(`rm: ${p}: ${kn(m)}
`),f=1}}return f},Fg=async({argv:t,cwd:r,sys:i,err:l})=>{const{operands:a}=Ft(t);if(a.length<2)return l(`cp: usage: cp <src> <dst>
`),1;const c=xt(r,a[0]);let f=xt(r,a[1]);try{return await i.stat(f).then(p=>p.type==="dir").catch(()=>!1)&&(f=ho(f,Qt(c))),await i.writeFile(f,await i.readFile(c)),0}catch(p){return l(`cp: ${kn(p)}
`),1}},Sb=async t=>{const r=await Fg(t);if(r!==0)return r;const{operands:i}=Ft(t.argv);return await t.sys.unlink(xt(t.cwd,i[0])).catch(()=>{}),0},Eb=async({sys:t,out:r})=>{const i=await t.ps();r(`PID       NAME                 STATE     PRIO
`);for(const l of i)r(`${l.pid.slice(0,8)}  ${l.name.padEnd(20).slice(0,20)}  ${l.state.padEnd(8)}  ${l.priority}
`);return 0},bb=async({argv:t,sys:r,out:i,err:l})=>{const{operands:a}=Ft(t);if(a.length===0)return l(`kill: usage: kill <pid>
`),1;const c=await r.ps();let f=0;for(const p of a){const h=c.find(m=>m.pid===p||m.pid.startsWith(p));if(!h){l(`kill: ${p}: no such process
`),f=1;continue}await r.kill(h.pid),i(`killed ${h.pid.slice(0,8)} (${h.name})
`)}return f},Cb=async({argv:t,out:r,err:i})=>{const{operands:l}=Ft(t);let a=0;for(const c of l)c in Uc||Mg.includes(c)?r(`/bin/${c}
`):(i(`${c} not found
`),a=1);return a},Ab=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const{flags:f,operands:p}=Ft(t);if(p.length===0)return c(`grep: usage: grep <pattern> [file...]
`),1;const[h,...m]=p,w=f.has("i")?h.toLowerCase():h,y=k=>(f.has("i")?k.toLowerCase():k).includes(w),S=[];if(m.length===0)S.push(i);else for(const k of m)try{S.push(await l.readTextFile(xt(r,k)))}catch(C){c(`grep: ${k}: ${kn(C)}
`)}let T=!1;for(const k of S)for(const C of k.split(`
`))C!==""&&y(C)&&(a(C+`
`),T=!0);return T?0:1},$b=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const{operands:f}=Ft(t),p=m=>({lines:m===""?0:m.replace(/\n$/,"").split(`
`).length,words:m.split(/\s+/).filter(Boolean).length,chars:m.length});if(f.length===0){const m=p(i);return a(`${m.lines} ${m.words} ${m.chars}
`),0}let h=0;for(const m of f)try{const w=p(await l.readTextFile(xt(r,m)));a(`${w.lines} ${w.words} ${w.chars} ${m}
`)}catch(w){c(`wc: ${m}: ${kn(w)}
`),h=1}return h};function zg(t){const r=t.split(`
`);return r[r.length-1]===""&&r.pop(),r}function Bg(t,r){const i=t.indexOf("-n"),l=i>=0?Number(t[i+1]):NaN;return Number.isFinite(l)?l:r}const Rb=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const f=Bg(t,10),p=Ft(t).operands.filter(m=>!/^\d+$/.test(m)),h=m=>zg(m).slice(0,f).forEach(w=>a(w+`
`));if(p.length===0)return h(i),0;try{for(const m of p)h(await l.readTextFile(xt(r,m)));return 0}catch(m){return c(`head: ${kn(m)}
`),1}},Tb=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const f=Bg(t,10),p=Ft(t).operands.filter(m=>!/^\d+$/.test(m)),h=m=>zg(m).slice(-f).forEach(w=>a(w+`
`));if(p.length===0)return h(i),0;try{for(const m of p)h(await l.readTextFile(xt(r,m)));return 0}catch(m){return c(`tail: ${kn(m)}
`),1}},Pb=async({out:t})=>(t(`VortexOS shell — available commands:
`),t([...Object.keys(Uc),...Mg].sort().join("  ")+`
`),t(`Pipes (|), redirects (> >> <) and ; are supported.
`),0),Mg=["cd","clear","export"],Uc={echo:db,pwd:fb,whoami:pb,uname:hb,date:mb,env:gb,ls:yb,cat:vb,mkdir:wb,touch:xb,rm:kb,cp:Fg,mv:Sb,ps:Eb,kill:bb,which:Cb,grep:Ab,wc:$b,head:Rb,tail:Tb,help:Pb};class Nb{constructor(r,i="/home/user",l={}){We(this,"cwd");We(this,"env");this.sys=r,this.cwd=i,this.env={HOME:"/home/user",USER:"user",PATH:"/bin",...l}}prompt(){const r=this.cwd===this.env.HOME?"~":this.cwd;return`${this.env.USER}@vortex:${r}$ `}async run(r){let i="",l=!1,a=0;const c=p=>{i+=p};let f;try{f=cb(r)}catch(p){return{output:`sh: ${p.message}
`,clear:!1,code:2}}for(const p of f){const h=await this.runPipeline(p,c);a=h.code,h.clear&&(l=!0,i="")}return{output:i,clear:l,code:a}}expand(r){return r==="~"?this.env.HOME:r.startsWith("~/")?this.env.HOME+r.slice(1):r}expandCommand(r){return{argv:r.argv.map(i=>this.expand(i)),stdinFile:r.stdinFile?this.expand(r.stdinFile):void 0,stdoutFile:r.stdoutFile?this.expand(r.stdoutFile):void 0,append:r.append}}async runPipeline(r,i){const l=r.map(f=>this.expandCommand(f));if(l.length===1){const f=l[0].argv[0];if(f==="cd")return{code:await this.cd(l[0].argv,i)};if(f==="clear")return{code:0,clear:!0};if(f==="export")return{code:this.export(l[0].argv)}}let a="",c=0;for(const f of l){const p=f.argv[0],h=Uc[p];let m=a;if(f.stdinFile)try{m=await this.sys.readTextFile(xt(this.cwd,f.stdinFile))}catch(y){return i(`sh: ${f.stdinFile}: ${y.code??"error"}
`),{code:1}}if(!h)return i(`sh: ${p}: command not found
`),{code:127};let w="";c=await h({argv:f.argv,stdin:m,cwd:this.cwd,env:this.env,sys:this.sys,out:y=>w+=y,err:i}),a=await this.applyStdout(f,w,i)}return i(a),{code:c}}async applyStdout(r,i,l){if(!r.stdoutFile)return i;const a=xt(this.cwd,r.stdoutFile);try{const c=r.append?await this.sys.readTextFile(a).catch(()=>""):"";await this.sys.writeTextFile(a,c+i)}catch(c){l(`sh: ${r.stdoutFile}: ${c.code??"error"}
`)}return""}async cd(r,i){const l=r[1]?xt(this.cwd,r[1]):this.env.HOME;try{return(await this.sys.stat(l)).type!=="dir"?(i(`cd: not a directory: ${r[1]}
`),1):(this.cwd=l,0)}catch{return i(`cd: ${r[1]}: No such file or directory
`),1}}export(r){for(const i of r.slice(1)){const l=i.indexOf("=");l>0&&(this.env[i.slice(0,l)]=i.slice(l+1))}return 0}}const jb=["VortexOS [Version 2.0]","Type 'help' for a list of commands.",""],Ug=()=>{const t=bs(),r=x.useRef(null);r.current||(r.current=new Nb(t));const i=r.current,[l,a]=x.useState(jb),[c,f]=x.useState(""),[p,h]=x.useState([]),[m,w]=x.useState(-1),[y,S]=x.useState(!1),T=x.useRef(null),k=x.useRef(null);x.useEffect(()=>{var $,R;($=T.current)==null||$.scrollTo(0,T.current.scrollHeight),(R=k.current)==null||R.focus()},[l]);const C=async()=>{const $=c;a(O=>[...O,i.prompt()+$]),f(""),w(-1),$.trim()&&h(O=>[...O,$]),S(!0);const R=await i.run($);if(S(!1),R.clear){a([]);return}R.output&&a(O=>[...O,...R.output.replace(/\n$/,"").split(`
`)])},b=$=>{if($.key==="Enter")$.preventDefault(),y||C();else if($.key==="ArrowUp"){if($.preventDefault(),!p.length)return;const R=m===-1?p.length-1:Math.max(0,m-1);w(R),f(p[R])}else if($.key==="ArrowDown"){if($.preventDefault(),m===-1)return;const R=m+1;R>=p.length?(w(-1),f("")):(w(R),f(p[R]))}};return v.jsxs("div",{ref:T,onClick:()=>{var $;return($=k.current)==null?void 0:$.focus()},style:{width:640,height:360,overflowY:"auto",background:"#000",color:"#c0c0c0",fontFamily:"'Lucida Console', 'Courier New', monospace",fontSize:13,lineHeight:1.35,padding:8,cursor:"text"},children:[l.map(($,R)=>v.jsx("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:$||" "},R)),v.jsxs("div",{style:{display:"flex",whiteSpace:"pre"},children:[v.jsx("span",{children:i.prompt()}),v.jsx("input",{ref:k,value:c,onChange:$=>f($.target.value),onKeyDown:b,spellCheck:!1,autoComplete:"off",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"inherit",fontSize:"inherit",padding:0}})]})]})},Hg="/trash.svg",pc="/my-computer.png",Hc="/task_manager.png",Wg="/doom.png",Vg="/doom2.png",Qg="/backlogger.png",Kg="/browser.png",Gg="/tomb.jpg",qg="/persia.png",Yg="/vapor.png",Xg="/terminal.svg";function Ib(t){const r=[{exec:"recycle_bin",name:"Recycle Bin",icon:Hg,component:tg,permissions:[]},{exec:"my_computer",name:"My Computer",icon:pc,component:ng,permissions:[]},{exec:"task_manager",name:"Task Manager",icon:Hc,component:Lc,permissions:["proc"]},{exec:"backlogger",name:"GameCache",icon:Qg,component:Ng,permissions:["net"]},{exec:"notes",name:"Notes",icon:yi,component:Bc,permissions:["fs"]},{exec:"explorer",name:"Explorer",icon:gi,component:Mc,permissions:["fs","proc"]},{exec:"terminal",name:"Terminal",icon:Xg,component:Ug,permissions:["fs","proc"]},{exec:"browser",name:"Browser",icon:Kg,component:jg,permissions:["net"]},{exec:"vaporwave",name:"Nightwave Plaza",icon:Yg,component:Lg,permissions:["net","audio"]},{exec:"control_panel",name:"Control Panel",icon:pc,component:Og,permissions:[]},{exec:"doom",name:"Doom",icon:Wg,component:og,permissions:[]},{exec:"doomII",name:"Doom II",icon:Vg,component:ig,permissions:[]},{exec:"tomb",name:"Tomb Raider",icon:Gg,component:Ig,permissions:[]},{exec:"persia",name:"Prince of Persia",icon:qg,component:Dg,permissions:[]}];for(const i of r)t.register({...i,permissions:[...i.permissions]})}const Hu="vortex.proctable",Db="process";function Lb(t){return{load(){const r=localStorage.getItem(Hu);if(r)return Ob(r);const i=localStorage.getItem(Db);if(i){const l=_b(i,t);return l&&localStorage.setItem(Hu,JSON.stringify(l)),l}return null},save(r){localStorage.setItem(Hu,JSON.stringify(r))}}}function Ob(t){try{const r=JSON.parse(t);return Array.isArray(r)?r:null}catch{return null}}function _b(t,r){let i;try{i=JSON.parse(t)}catch{return null}return Array.isArray(i)?i.filter(l=>l&&l.componentName).map(l=>{var a,c;return{pid:l.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:l.componentName,name:l.name??l.componentName,icon:l.icon??"",priority:typeof l.priority=="number"?l.priority:0,window:{x:((a=l.location)==null?void 0:a.x)??r().x,y:((c=l.location)==null?void 0:c.y)??r().y},cwd:"/home/user",state:"running"}}):null}class Fb{constructor(){We(this,"mounts",[]);We(this,"onChange")}setOnChange(r){this.onChange=r}mount(r,i){const l=rr(r);this.mounts=this.mounts.filter(a=>a.mountPoint!==l),this.mounts.push({mountPoint:l,fs:i}),this.mounts.sort((a,c)=>c.mountPoint.length-a.mountPoint.length)}route(r){const i=rr(r);for(const l of this.mounts)if(l.mountPoint==="/"||i===l.mountPoint||i.startsWith(l.mountPoint+"/")){const a=l.mountPoint==="/"?i:i.slice(l.mountPoint.length)||"/";return{fs:l.fs,rel:a||"/",mountPoint:l.mountPoint}}throw new he("ENOENT",r)}childMounts(r){const i=rr(r);return this.mounts.filter(l=>l.mountPoint!=="/"&&gn(l.mountPoint)===i).map(l=>l.mountPoint.slice(i==="/"?1:i.length+1))}stat(r){const{fs:i,rel:l}=this.route(r);return i.stat(l)}readdir(r){const{fs:i,rel:l}=this.route(r),a=i.readdir(l);return[...new Set([...a,...this.childMounts(r)])].sort()}read(r){const{fs:i,rel:l}=this.route(r);return i.read(l)}write(r,i){var c;const{fs:l,rel:a}=this.route(r);if(l.readonly)throw new he("EROFS",r);l.write(a,i),(c=this.onChange)==null||c.call(this)}mkdir(r){var a;const{fs:i,rel:l}=this.route(r);if(i.readonly)throw new he("EROFS",r);i.mkdir(l),(a=this.onChange)==null||a.call(this)}unlink(r){var a;const{fs:i,rel:l}=this.route(r);if(i.readonly)throw new he("EROFS",r);i.unlink(l),(a=this.onChange)==null||a.call(this)}exists(r){try{return this.stat(r),!0}catch{return!1}}}const Bl=()=>Date.now();class js{constructor(){We(this,"readonly",!1);We(this,"root",{type:"dir",mtime:Bl(),children:new Map})}resolve(r){let i=this.root;for(const l of Es(r)){if(i.type!=="dir"||!i.children)throw new he("ENOTDIR",r);const a=i.children.get(l);if(!a)return null;i=a}return i}resolveDir(r){const i=this.resolve(r);if(!i)throw new he("ENOENT",r);if(i.type!=="dir")throw new he("ENOTDIR",r);return i}exists(r){return this.resolve(r)!==null}stat(r){var l;const i=this.resolve(r);if(!i)throw new he("ENOENT",r);return{type:i.type,size:i.type==="file"?((l=i.data)==null?void 0:l.length)??0:0,mtime:i.mtime}}readdir(r){return[...this.resolveDir(r).children.keys()].sort()}read(r){const i=this.resolve(r);if(!i)throw new he("ENOENT",r);if(i.type==="dir")throw new he("EISDIR",r);return i.data??new Uint8Array}write(r,i){if(rr(r)==="/")throw new he("EISDIR",r);const l=this.resolveDir(gn(r)),a=Qt(r),c=l.children.get(a);if(c&&c.type==="dir")throw new he("EISDIR",r);l.children.set(a,{type:"file",mtime:Bl(),data:new Uint8Array(i)})}mkdir(r){const i=this.resolveDir(gn(r)),l=Qt(r);if(!l)throw new he("EEXIST",r);if(i.children.has(l))throw new he("EEXIST",r);i.children.set(l,{type:"dir",mtime:Bl(),children:new Map})}unlink(r){if(rr(r)==="/")throw new he("EACCES","cannot unlink /");const i=this.resolve(r);if(!i)throw new he("ENOENT",r);if(i.type==="dir"&&i.children.size>0)throw new he("ENOTEMPTY",r);this.resolveDir(gn(r)).children.delete(Qt(r))}rename(r,i){const l=this.resolve(r);if(!l)throw new he("ENOENT",r);const a=this.resolveDir(gn(i));this.resolveDir(gn(r)).children.delete(Qt(r)),l.mtime=Bl(),a.children.set(Qt(i),l)}serialize(){return Jg(this.root)}static deserialize(r){const i=new js;return i.root=Zg(r),i}}function Jg(t){if(t.type==="file")return{type:"file",mtime:t.mtime,data:Array.from(t.data??[])};const r={};for(const[i,l]of t.children)r[i]=Jg(l);return{type:"dir",mtime:t.mtime,children:r}}function Zg(t){if(t.type==="file")return{type:"file",mtime:t.mtime,data:new Uint8Array(t.data??[])};const r=new Map;for(const[i,l]of Object.entries(t.children??{}))r.set(i,Zg(l));return{type:"dir",mtime:t.mtime,children:r}}const _h=["null","zero","random"],Fh=256,zh=()=>Date.now();class zb{constructor(){We(this,"readonly",!1)}device(r){const i=Qt(r);if(gn(r)!=="/"||!_h.includes(i))throw new he("ENOENT",r);return i}stat(r){return r==="/"?{type:"dir",size:0,mtime:zh()}:(this.device(r),{type:"dev",size:0,mtime:zh()})}readdir(r){if(r!=="/")throw new he("ENOTDIR",r);return[..._h]}read(r){switch(this.device(r)){case"null":return new Uint8Array;case"zero":return new Uint8Array(Fh);case"random":return crypto.getRandomValues(new Uint8Array(Fh));default:throw new he("ENOENT",r)}}write(r,i){if(this.device(r)!=="null")throw new he("EROFS",r)}mkdir(r){throw new he("EROFS",r)}unlink(r){throw new he("EROFS",r)}}const Bh=()=>Date.now(),Mh=t=>new TextEncoder().encode(t);class Bb{constructor(r){We(this,"readonly",!0);this.source=r}entries(){return["processes",...this.source().map(r=>r.pid)]}find(r){return this.source().find(i=>i.pid===r)}stat(r){if(r==="/")return{type:"dir",size:0,mtime:Bh()};const i=Qt(r);if(gn(r)!=="/"||!this.entries().includes(i))throw new he("ENOENT",r);return{type:"file",size:this.read(r).length,mtime:Bh()}}readdir(r){if(r!=="/")throw new he("ENOTDIR",r);return this.entries()}read(r){const i=Qt(r);if(i==="processes"){const a=this.source().map(c=>`${c.pid.slice(0,8)}  ${c.state.padEnd(8)}  p${c.priority}  ${c.name}`).join(`
`);return Mh(`PID       STATE     PRIO  NAME
${a}
`)}const l=this.find(i);if(!l)throw new he("ENOENT",r);return Mh(`pid:      ${l.pid}
ppid:     ${l.ppid??"-"}
name:     ${l.name}
exec:     ${l.exec}
state:    ${l.state}
priority: ${l.priority}
uid:      ${l.uid}
`)}write(r){throw new he("EROFS",r)}mkdir(r){throw new he("EROFS",r)}unlink(r){throw new he("EROFS",r)}}const Uh=()=>Date.now(),Mb=t=>new TextEncoder().encode(t);class Ub{constructor(r){We(this,"readonly",!0);this.source=r}find(r){return this.source().find(i=>i.exec===r)}stat(r){if(r==="/")return{type:"dir",size:0,mtime:Uh()};const i=Qt(r);if(gn(r)!=="/"||!this.find(i))throw new he("ENOENT",r);return{type:"file",size:this.read(r).length,mtime:Uh()}}readdir(r){if(r!=="/")throw new he("ENOTDIR",r);return this.source().map(i=>i.exec).sort()}read(r){const i=this.find(Qt(r));if(!i)throw new he("ENOENT",r);return Mb(`#!vortex-program
exec=${i.exec}
name=${i.name}
`)}write(r){throw new he("EROFS",r)}mkdir(r){throw new he("EROFS",r)}unlink(r){throw new he("EROFS",r)}}const Hh="vortex.vfs";function Hb(){return{load(){const t=localStorage.getItem(Hh);if(!t)return null;try{return JSON.parse(t)}catch{return null}},save(t){localStorage.setItem(Hh,JSON.stringify(t))}}}const ey=x.createContext(null),Wh=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2}),Wb=`Welcome to VortexOS.\r
\r
This is a real file, stored on a real virtual filesystem.\r
Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r
`;function Vb(){const t=new js;return t.mkdir("/home"),t.mkdir("/home/user"),t.mkdir("/home/user/Documents"),t.mkdir("/tmp"),t.write("/home/user/welcome.txt",new TextEncoder().encode(Wb)),t}function Qb(){const t=new xS;Ib(t);const r=new wS({registry:t,persistence:Lb(Wh),defaultWindowLocation:Wh}),i=Hb(),l=i.load(),a=l?js.deserialize(l):Vb(),c=new Fb;return c.mount("/",a),c.mount("/dev",new zb),c.mount("/proc",new Bb(()=>r.processInfo())),c.mount("/bin",new Ub(()=>r.registry.list().map(f=>({exec:f.exec,name:f.name})))),c.setOnChange(()=>i.save(a.serialize())),r.mountVfs(c),l||i.save(a.serialize()),r}function Kb({children:t,kernel:r}){const i=x.useMemo(()=>r??Qb(),[r]);return v.jsx(ey.Provider,{value:i,children:t})}function Wc(){const t=x.useContext(ey);if(!t)throw new Error("useKernel must be used within a KernelProvider");return t}function ty(){const t=Wc();return x.useSyncExternalStore(t.subscribe,t.getSnapshot)}const ny=L.createContext({});function Gb({children:t}){const r=Wc(),i=ty(),l=x.useMemo(()=>i.map(y=>({uuid:y.pid,priority:y.priority,component:r.registry.component(y.exec)??(()=>null),selected:!1,icon:y.icon,name:y.name,location:y.window})),[i,r]),a=y=>{const S=y.componentName;S&&r.syscall(null,"spawn",{exec:S,name:y.name,icon:y.icon})},c=y=>{y&&r.syscall(null,"kill",{pid:y})},f=(y,S)=>{y.uuid&&r.syscall(null,"win_focus",{pid:y.uuid})},p=(y,S)=>{y&&r.syscall(null,"win_move",{pid:y,location:S})},h=y=>r.registry.component(y),m=y=>{switch(y){case"folder":return gi;case"notes":return yi}},w=[{name:"File",icon:gi,componentName:"explorer",component:Mc},{name:"Notes",icon:yi,componentName:"notes",component:Bc}];return v.jsx(ny.Provider,{value:{processes:l,setProcesses:()=>{},changePriority:f,closeProcess:c,ordenatedProcess:l,addProcess:a,handleProceessLocationChange:p,fetchIcon:m,fetchComponent:h,programs:w},children:t})}function Is(){return L.useContext(ny)}const qb="/clouds.jpg",ry="/w95.png",Yb=()=>{const t=M.div`
        text-align: center;
    `,r=M.div`
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(${qb});
        background-size: cover;
        background-position: center;
        border: 4px solid #000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `;return v.jsx(r,{children:v.jsxs(t,{children:[v.jsx("div",{children:v.jsx("img",{src:ry,width:200,className:"logo"})}),v.jsx("h1",{children:"VortexOS"}),v.jsx("div",{className:"card",children:v.jsx(Dc,{to:"/vortex",children:v.jsx(xe,{primary:!0,children:"Are you ready?"})})}),v.jsx("p",{className:"read-the-docs",children:"By Serious Sam"})]})})},Xb=()=>{const t=x.useRef(null),[r,i]=x.useState(0),{addProcess:l}=Is(),a=()=>{t.current&&i(t.current.getBoundingClientRect().height/7)},[c,f]=x.useState([[{name:"Recycle Bin",icon:Hg,selected:!1,componentName:"recycle_bin",component:tg,priority:0},{name:"GameCache",icon:Qg,selected:!1,componentName:"backlogger",component:Ng,priority:0}],[{name:"My Computer",icon:pc,selected:!1,componentName:"my_computer",component:ng,priority:0},{name:"Nightwave Plaza",icon:Yg,selected:!1,componentName:"vaporwave",component:Lg,priority:0}],[{name:"Task Manager",icon:Hc,selected:!1,componentName:"task_manager",component:Lc,priority:0},{name:"Doom",icon:Wg,selected:!1,componentName:"doom",component:og,priority:0}],[{name:"Explorer",icon:gi,selected:!1,componentName:"explorer",component:Mc,priority:0},{name:"Doom II",icon:Vg,selected:!1,componentName:"doomII",component:ig,priority:0}],[{name:"Browser",icon:Kg,selected:!1,componentName:"browser",component:jg,priority:0},{name:"Prince of Persia",icon:qg,selected:!1,componentName:"persia",component:Dg,priority:0}],[{name:"Notes",icon:yi,selected:!1,componentName:"notes",component:Bc,priority:0},{name:"Tomb Raider",icon:Gg,selected:!1,componentName:"tomb",component:Ig,priority:0}],[{name:"Terminal",icon:Xg,selected:!1,componentName:"terminal",component:Ug,priority:0}]]),p=(w,y)=>{f(c.map((S,T)=>S.map((k,C)=>w===T&&y===C?(k.selected&&l(k),{...k,selected:!k.selected}):{...k,selected:!1})))},h=(w,y)=>{c[w]&&c[w][y]||f(c.map(S=>S.map(T=>({...T,selected:!1}))))},m=()=>{new Audio("win98.mp3").play()};return x.useEffect(()=>(m(),a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),v.jsx("div",{ref:t,style:{width:"100vw",height:"94vh"},children:Array.from({length:7}).map((w,y)=>v.jsx("div",{style:{height:r,display:"flex"},children:Array.from({length:10}).map((S,T)=>v.jsx("div",{onClick:()=>h(y,T),style:{width:"10.2857%",display:"flex",justifyContent:"center",alignItems:"center"},children:c[y]&&c[y][T]&&v.jsxs("div",{onClick:()=>p(y,T),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsx("img",{src:c[y][T].icon,alt:c[y][T].name,style:{height:"70px",filter:c[y][T].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),v.jsx("p",{style:{color:"white",textAlign:"center",backgroundColor:c[y][T].selected?"#000080":"transparent"},children:c[y][T].name})]})},T))},y))})},Jb="/controlpanel.png",Zb=()=>{const[t,r]=x.useState(!1),i=M(vm)`
        top: 94% !important;
    `,{changePriority:l,processes:a,addProcess:c}=Is(),f=M.div`
        width: 20%;
        display: inline-block;
        padding: 7px 15px;
        margin-right: 2px;
        font-family: "MS Sans Serif", sans-serif;
        font-size: 12px;
        background-color: #C0C0C0;
        color: black;
        cursor: default;
        border: 2px solid #fff;
        border-right-color: #808080;
        border-bottom-color: #808080;
    `,[p]=x.useState([{name:"Task Manager",icon:Hc,selected:!1,componentName:"task_manager",component:Lc,priority:0},{name:"Control Panel",icon:Jb,selected:!1,componentName:"control_panel",component:Og,priority:0}]);return v.jsx(i,{children:v.jsxs(kt,{style:{justifyContent:"space-between",padding:"7px"},children:[v.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[v.jsxs(xe,{onClick:()=>r(!t),active:t,style:{fontWeight:"bold"},children:[v.jsx("img",{src:ry,alt:"react95 logo",style:{height:"20px",marginRight:4}}),v.jsx("p",{style:{padding:"5px"},children:"Start"})]}),t&&v.jsxs(ps,{style:{position:"absolute",left:"0",top:"-550%",width:"15vw"},onClick:()=>r(!1),children:[p.map(h=>v.jsxs(tn,{style:{cursor:"pointer"},onClick:()=>c(h),children:[v.jsx("img",{src:h.icon,style:{width:"20px",marginRight:"5px"}}),v.jsx("p",{children:h.name})]})),v.jsxs(tn,{children:[v.jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"My account"]}),v.jsx(hs,{}),v.jsxs(tn,{disabled:!0,children:[v.jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]})]})]}),v.jsx("div",{style:{width:"100%",display:"flex"},children:a.map(h=>v.jsxs(f,{style:h.priority===0?{borderTopColor:"#808080",borderLeftColor:"#808080",borderRightColor:"#fff",borderBottomColor:"#fff",cursor:"pointer",display:"flex",justifyContent:"center"}:{cursor:"pointer",display:"flex",justifyContent:"center"},onClick:()=>l(h,0),children:[v.jsx("img",{src:h.icon,style:{height:"20px",alignSelf:"center",marginRight:"5px"}}),v.jsx("p",{style:{textAlign:"center",alignSelf:"center"},children:h.name})]}))}),v.jsx(jr,{placeholder:"Search...",width:150})]})})},eC=({process:t})=>{var T,k;const{changePriority:r,closeProcess:i,handleProceessLocationChange:l}=Is(),{changeCursor:a}=Dr(),[c,f]=x.useState({x:((T=t.location)==null?void 0:T.x)??0,y:((k=t.location)==null?void 0:k.y)??0}),p=x.useRef({x:0,y:0}),[h,m]=x.useState(!1);x.useEffect(()=>(h?(a("Grabbing.cur"),document.addEventListener("mousemove",S),document.addEventListener("mouseup",y)):(a("arrow.cur"),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)}),[h]);const w=C=>{m(!0),p.current={x:C.clientX-(c.x??0),y:C.clientY-(c.y??0)}},y=C=>{m(!1);const b={x:C.clientX-p.current.x,y:C.clientY-p.current.y};t.uuid&&l(t.uuid,b)},S=C=>{if(!h)return;const b={x:C.clientX-p.current.x,y:C.clientY-p.current.y};f(b)};return v.jsxs(Rc,{onClick:()=>r(t,0),resizable:!0,className:"window",style:{position:"absolute",top:`${c.y}px`,left:`${c.x}px`,transform:"translate(-50%, -50%)",zIndex:t.priority===0?"9999":t.priority+1,userSelect:"none"},children:[v.jsxs($c,{onMouseDown:w,className:"window-title",style:{display:"flex",justifyContent:"space-between",backgroundColor:t.priority!==0?"grey":""},children:[v.jsxs("div",{style:{display:"flex"},children:[v.jsx("img",{src:t.icon,style:{width:"20px",height:"80%",marginRight:"5px",alignSelf:"center"}}),v.jsx("p",{children:t.name})]}),v.jsx(xe,{style:{alignSelf:"center"},onClick:()=>{t.uuid&&i(t.uuid)},disabled:!t.uuid,children:v.jsx("p",{style:{fontWeight:"bold"},children:"X"})})]}),t.component?v.jsx(SS,{pid:t.uuid??null,children:L.createElement(t.component)}):""]},t.uuid)},tC=()=>{const{processes:t}=Is();return v.jsx(v.Fragment,{children:t.map(r=>v.jsx(eC,{process:r},r.uuid))})},nC=()=>{const{cursor:t}=Dr(),[r,i]=x.useState(!1),[l,a]=x.useState({x:0,y:0}),c=()=>i(!1);return x.useEffect(()=>(document.addEventListener("click",c),()=>document.removeEventListener("click",c)),[]),v.jsxs("div",{style:{cursor:t},onContextMenu:f=>{f.preventDefault(),a({x:f.pageX,y:f.pageY}),i(!0)},children:[v.jsx(Xb,{}),v.jsx(tC,{}),r&&v.jsxs("div",{style:{position:"fixed",top:l.y,left:l.x,background:"#333",color:"#fff",padding:"10px",borderRadius:"5px",zIndex:9999},children:[v.jsx("div",{children:"Option 1"}),v.jsx("div",{children:"Option 2"})]}),v.jsx(Zb,{})]})},rC=()=>{const{wallpaper:t}=Dr(),r=()=>t.image?t.type===2?{background:t.image}:{backgroundImage:`url('/${t.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{background:"#008080"};return v.jsx("div",{style:r(),children:v.jsxs(Dk,{children:[v.jsx(oc,{path:"/",element:v.jsx(Yb,{})}),v.jsx(oc,{path:"/vortex",element:v.jsx(nC,{})})]})})},oC=cw`
  ${dw}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${U1}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${H1}') format('woff2');
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
`,iC=()=>v.jsxs(oS,{children:[v.jsx(oC,{}),v.jsx(sw,{theme:M1,children:v.jsx(Kb,{children:v.jsx(tb,{children:v.jsx(Gb,{children:v.jsx(rC,{})})})})})]});av.createRoot(document.getElementById("root")).render(v.jsx(x.StrictMode,{children:v.jsx(iC,{})}));
