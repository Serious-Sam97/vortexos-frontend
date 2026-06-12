var S0=Object.defineProperty;var E0=(n,r,i)=>r in n?S0(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i;var Yt=(n,r,i)=>E0(n,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerPolicy&&(d.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?d.credentials="include":a.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(a){if(a.ep)return;a.ep=!0;const d=i(a);fetch(a.href,d)}})();function Eh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var du={exports:{}},Jo={},fu={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function b0(){if(wp)return ke;wp=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),y=Symbol.iterator;function S(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,C={};function b(T,z,X){this.props=T,this.context=z,this.refs=C,this.updater=X||R}b.prototype.isReactComponent={},b.prototype.setState=function(T,z){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,z,"setState")},b.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function P(){}P.prototype=b.prototype;function j(T,z,X){this.props=T,this.context=z,this.refs=C,this.updater=X||R}var O=j.prototype=new P;O.constructor=j,k(O,b.prototype),O.isPureReactComponent=!0;var W=Array.isArray,Q=Object.prototype.hasOwnProperty,K={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function fe(T,z,X){var Z,oe={},te=null,se=null;if(z!=null)for(Z in z.ref!==void 0&&(se=z.ref),z.key!==void 0&&(te=""+z.key),z)Q.call(z,Z)&&!q.hasOwnProperty(Z)&&(oe[Z]=z[Z]);var pe=arguments.length-2;if(pe===1)oe.children=X;else if(1<pe){for(var F=Array(pe),ue=0;ue<pe;ue++)F[ue]=arguments[ue+2];oe.children=F}if(T&&T.defaultProps)for(Z in pe=T.defaultProps,pe)oe[Z]===void 0&&(oe[Z]=pe[Z]);return{$$typeof:n,type:T,key:te,ref:se,props:oe,_owner:K.current}}function me(T,z){return{$$typeof:n,type:T.type,key:z,ref:T.ref,props:T.props,_owner:T._owner}}function be(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Ie(T){var z={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(X){return z[X]})}var Ee=/\/+/g;function Te(T,z){return typeof T=="object"&&T!==null&&T.key!=null?Ie(""+T.key):z.toString(36)}function $e(T,z,X,Z,oe){var te=typeof T;(te==="undefined"||te==="boolean")&&(T=null);var se=!1;if(T===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(T.$$typeof){case n:case r:se=!0}}if(se)return se=T,oe=oe(se),T=Z===""?"."+Te(se,0):Z,W(oe)?(X="",T!=null&&(X=T.replace(Ee,"$&/")+"/"),$e(oe,z,X,"",function(ue){return ue})):oe!=null&&(be(oe)&&(oe=me(oe,X+(!oe.key||se&&se.key===oe.key?"":(""+oe.key).replace(Ee,"$&/")+"/")+T)),z.push(oe)),1;if(se=0,Z=Z===""?".":Z+":",W(T))for(var pe=0;pe<T.length;pe++){te=T[pe];var F=Z+Te(te,pe);se+=$e(te,z,X,F,oe)}else if(F=S(T),typeof F=="function")for(T=F.call(T),pe=0;!(te=T.next()).done;)te=te.value,F=Z+Te(te,pe++),se+=$e(te,z,X,F,oe);else if(te==="object")throw z=String(T),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return se}function Ae(T,z,X){if(T==null)return T;var Z=[],oe=0;return $e(T,Z,"","",function(te){return z.call(X,te,oe++)}),Z}function Pe(T){if(T._status===-1){var z=T._result;z=z(),z.then(function(X){(T._status===0||T._status===-1)&&(T._status=1,T._result=X)},function(X){(T._status===0||T._status===-1)&&(T._status=2,T._result=X)}),T._status===-1&&(T._status=0,T._result=z)}if(T._status===1)return T._result.default;throw T._result}var we={current:null},B={transition:null},J={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:B,ReactCurrentOwner:K};function Y(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:Ae,forEach:function(T,z,X){Ae(T,function(){z.apply(this,arguments)},X)},count:function(T){var z=0;return Ae(T,function(){z++}),z},toArray:function(T){return Ae(T,function(z){return z})||[]},only:function(T){if(!be(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},ke.Component=b,ke.Fragment=i,ke.Profiler=a,ke.PureComponent=j,ke.StrictMode=s,ke.Suspense=h,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,ke.act=Y,ke.cloneElement=function(T,z,X){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var Z=k({},T.props),oe=T.key,te=T.ref,se=T._owner;if(z!=null){if(z.ref!==void 0&&(te=z.ref,se=K.current),z.key!==void 0&&(oe=""+z.key),T.type&&T.type.defaultProps)var pe=T.type.defaultProps;for(F in z)Q.call(z,F)&&!q.hasOwnProperty(F)&&(Z[F]=z[F]===void 0&&pe!==void 0?pe[F]:z[F])}var F=arguments.length-2;if(F===1)Z.children=X;else if(1<F){pe=Array(F);for(var ue=0;ue<F;ue++)pe[ue]=arguments[ue+2];Z.children=pe}return{$$typeof:n,type:T.type,key:oe,ref:te,props:Z,_owner:se}},ke.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},ke.createElement=fe,ke.createFactory=function(T){var z=fe.bind(null,T);return z.type=T,z},ke.createRef=function(){return{current:null}},ke.forwardRef=function(T){return{$$typeof:m,render:T}},ke.isValidElement=be,ke.lazy=function(T){return{$$typeof:w,_payload:{_status:-1,_result:T},_init:Pe}},ke.memo=function(T,z){return{$$typeof:g,type:T,compare:z===void 0?null:z}},ke.startTransition=function(T){var z=B.transition;B.transition={};try{T()}finally{B.transition=z}},ke.unstable_act=Y,ke.useCallback=function(T,z){return we.current.useCallback(T,z)},ke.useContext=function(T){return we.current.useContext(T)},ke.useDebugValue=function(){},ke.useDeferredValue=function(T){return we.current.useDeferredValue(T)},ke.useEffect=function(T,z){return we.current.useEffect(T,z)},ke.useId=function(){return we.current.useId()},ke.useImperativeHandle=function(T,z,X){return we.current.useImperativeHandle(T,z,X)},ke.useInsertionEffect=function(T,z){return we.current.useInsertionEffect(T,z)},ke.useLayoutEffect=function(T,z){return we.current.useLayoutEffect(T,z)},ke.useMemo=function(T,z){return we.current.useMemo(T,z)},ke.useReducer=function(T,z,X){return we.current.useReducer(T,z,X)},ke.useRef=function(T){return we.current.useRef(T)},ke.useState=function(T){return we.current.useState(T)},ke.useSyncExternalStore=function(T,z,X){return we.current.useSyncExternalStore(T,z,X)},ke.useTransition=function(){return we.current.useTransition()},ke.version="18.3.1",ke}var kp;function ec(){return kp||(kp=1,fu.exports=b0()),fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function C0(){if(Sp)return Jo;Sp=1;var n=ec(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(m,h,g){var w,y={},S=null,R=null;g!==void 0&&(S=""+g),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(R=h.ref);for(w in h)s.call(h,w)&&!d.hasOwnProperty(w)&&(y[w]=h[w]);if(m&&m.defaultProps)for(w in h=m.defaultProps,h)y[w]===void 0&&(y[w]=h[w]);return{$$typeof:r,type:m,key:S,ref:R,props:y,_owner:a.current}}return Jo.Fragment=i,Jo.jsx=f,Jo.jsxs=f,Jo}var Ep;function A0(){return Ep||(Ep=1,du.exports=C0()),du.exports}var v=A0(),x=ec();const D=Eh(x);var Cl={},pu={exports:{}},Ct={},hu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function R0(){return bp||(bp=1,function(n){function r(B,J){var Y=B.length;B.push(J);e:for(;0<Y;){var T=Y-1>>>1,z=B[T];if(0<a(z,J))B[T]=J,B[Y]=z,Y=T;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var J=B[0],Y=B.pop();if(Y!==J){B[0]=Y;e:for(var T=0,z=B.length,X=z>>>1;T<X;){var Z=2*(T+1)-1,oe=B[Z],te=Z+1,se=B[te];if(0>a(oe,Y))te<z&&0>a(se,oe)?(B[T]=se,B[te]=Y,T=te):(B[T]=oe,B[Z]=Y,T=Z);else if(te<z&&0>a(se,Y))B[T]=se,B[te]=Y,T=te;else break e}}return J}function a(B,J){var Y=B.sortIndex-J.sortIndex;return Y!==0?Y:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var h=[],g=[],w=1,y=null,S=3,R=!1,k=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(B){for(var J=i(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=B)s(g),J.sortIndex=J.expirationTime,r(h,J);else break;J=i(g)}}function W(B){if(C=!1,O(B),!k)if(i(h)!==null)k=!0,Pe(Q);else{var J=i(g);J!==null&&we(W,J.startTime-B)}}function Q(B,J){k=!1,C&&(C=!1,P(fe),fe=-1),R=!0;var Y=S;try{for(O(J),y=i(h);y!==null&&(!(y.expirationTime>J)||B&&!Ie());){var T=y.callback;if(typeof T=="function"){y.callback=null,S=y.priorityLevel;var z=T(y.expirationTime<=J);J=n.unstable_now(),typeof z=="function"?y.callback=z:y===i(h)&&s(h),O(J)}else s(h);y=i(h)}if(y!==null)var X=!0;else{var Z=i(g);Z!==null&&we(W,Z.startTime-J),X=!1}return X}finally{y=null,S=Y,R=!1}}var K=!1,q=null,fe=-1,me=5,be=-1;function Ie(){return!(n.unstable_now()-be<me)}function Ee(){if(q!==null){var B=n.unstable_now();be=B;var J=!0;try{J=q(!0,B)}finally{J?Te():(K=!1,q=null)}}else K=!1}var Te;if(typeof j=="function")Te=function(){j(Ee)};else if(typeof MessageChannel<"u"){var $e=new MessageChannel,Ae=$e.port2;$e.port1.onmessage=Ee,Te=function(){Ae.postMessage(null)}}else Te=function(){b(Ee,0)};function Pe(B){q=B,K||(K=!0,Te())}function we(B,J){fe=b(function(){B(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){k||R||(k=!0,Pe(Q))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return i(h)},n.unstable_next=function(B){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var Y=S;S=J;try{return B()}finally{S=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=S;S=B;try{return J()}finally{S=Y}},n.unstable_scheduleCallback=function(B,J,Y){var T=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?T+Y:T):Y=T,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=Y+z,B={id:w++,callback:J,priorityLevel:B,startTime:Y,expirationTime:z,sortIndex:-1},Y>T?(B.sortIndex=Y,r(g,B),i(h)===null&&B===i(g)&&(C?(P(fe),fe=-1):C=!0,we(W,Y-T))):(B.sortIndex=z,r(h,B),k||R||(k=!0,Pe(Q))),B},n.unstable_shouldYield=Ie,n.unstable_wrapCallback=function(B){var J=S;return function(){var Y=S;S=J;try{return B.apply(this,arguments)}finally{S=Y}}}}(mu)),mu}var Cp;function $0(){return Cp||(Cp=1,hu.exports=R0()),hu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function T0(){if(Ap)return Ct;Ap=1;var n=ec(),r=$0();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(a[e]=t,e=0;e<t.length;e++)s.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},y={};function S(e){return h.call(y,e)?!0:h.call(w,e)?!1:g.test(e)?y[e]=!0:(w[e]=!0,!1)}function R(e,t,o,l){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,t,o,l){if(t===null||typeof t>"u"||R(e,t,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,o,l,u,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function j(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,j);b[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,j);b[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,j);b[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,t,o,l){var u=b.hasOwnProperty(t)?b[t]:null;(u!==null?u.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k(t,o,u,l)&&(o=null),l||u===null?S(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(t=u.attributeName,l=u.attributeNamespace,o===null?e.removeAttribute(t):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?e.setAttributeNS(l,t,o):e.setAttribute(t,o))))}var W=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),K=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),be=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Te=Symbol.for("react.suspense"),$e=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),Pe=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),B=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,T;function z(e){if(T===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return`
`+T+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(I){var l=I}Reflect.construct(e,[],t)}else{try{t.call()}catch(I){l=I}e.call(t.prototype)}else{try{throw Error()}catch(I){l=I}e()}}catch(I){if(I&&l&&typeof I.stack=="string"){for(var u=I.stack.split(`
`),c=l.stack.split(`
`),p=u.length-1,E=c.length-1;1<=p&&0<=E&&u[p]!==c[E];)E--;for(;1<=p&&0<=E;p--,E--)if(u[p]!==c[E]){if(p!==1||E!==1)do if(p--,E--,0>E||u[p]!==c[E]){var A=`
`+u[p].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=p&&0<=E);break}}}finally{X=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?z(e):""}function oe(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Portal";case me:return"Profiler";case fe:return"StrictMode";case Te:return"Suspense";case $e:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ie:return(e.displayName||"Context")+".Consumer";case be:return(e._context.displayName||"Context")+".Provider";case Ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Pe:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function F(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ue(e){var t=F(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,c=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(p){l=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ge(e){e._valueTracker||(e._valueTracker=ue(e))}function Se(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),l="";return e&&(l=F(e)?e.checked?"true":"false":e.value),e=l,e!==o?(t.setValue(e),!0):!1}function je(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ke(e,t){var o=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function We(e,t){var o=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;o=pe(t.value!=null?t.value:o),e._wrapperState={initialChecked:l,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mt(e,t){t=t.checked,t!=null&&O(e,"checked",t,!1)}function $t(e,t){mt(e,t);var o=pe(t.value),l=t.type;if(o!=null)l==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dt(e,t.type,o):t.hasOwnProperty("defaultValue")&&Dt(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function nn(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Dt(e,t,o){(t!=="number"||je(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var gn=Array.isArray;function rn(e,t,o,l){if(e=e.options,t){t={};for(var u=0;u<o.length;u++)t["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=t.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&l&&(e[o].defaultSelected=!0)}else{for(o=""+pe(o),t=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function yn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function po(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(i(92));if(gn(o)){if(1<o.length)throw Error(i(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:pe(o)}}function ks(e,t){var o=pe(t.value),l=pe(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),l!=null&&(e.defaultValue=""+l)}function Nc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yi,Lc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,l,u){MSApp.execUnsafeLocalFunction(function(){return e(t,o,l,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yi=yi||document.createElement("div"),yi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ho(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rg=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(e){Rg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mo[t]=mo[e]})});function Ic(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||mo.hasOwnProperty(e)&&mo[e]?(""+t).trim():t+"px"}function Dc(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=Ic(o,t[o],l);o==="float"&&(o="cssFloat"),l?e.setProperty(o,u):e[o]=u}}var $g=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Es(e,t){if(t){if($g[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cs=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rs=null,$r=null,Tr=null;function _c(e){if(e=Oo(e)){if(typeof Rs!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Bi(t),Rs(e.stateNode,e.type,t))}}function Oc(e){$r?Tr?Tr.push(e):Tr=[e]:$r=e}function zc(){if($r){var e=$r,t=Tr;if(Tr=$r=null,_c(e),t)for(e=0;e<t.length;e++)_c(t[e])}}function Fc(e,t){return e(t)}function Bc(){}var $s=!1;function Mc(e,t,o){if($s)return e(t,o);$s=!0;try{return Fc(e,t,o)}finally{$s=!1,($r!==null||Tr!==null)&&(Bc(),zc())}}function go(e,t){var o=e.stateNode;if(o===null)return null;var l=Bi(o);if(l===null)return null;o=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,t,typeof o));return o}var Ts=!1;if(m)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Ts=!1}function Tg(e,t,o,l,u,c,p,E,A){var I=Array.prototype.slice.call(arguments,3);try{t.apply(o,I)}catch(H){this.onError(H)}}var vo=!1,vi=null,xi=!1,Ps=null,Pg={onError:function(e){vo=!0,vi=e}};function Ng(e,t,o,l,u,c,p,E,A){vo=!1,vi=null,Tg.apply(Pg,arguments)}function jg(e,t,o,l,u,c,p,E,A){if(Ng.apply(this,arguments),vo){if(vo){var I=vi;vo=!1,vi=null}else throw Error(i(198));xi||(xi=!0,Ps=I)}}function tr(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function Uc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hc(e){if(tr(e)!==e)throw Error(i(188))}function Lg(e){var t=e.alternate;if(!t){if(t=tr(e),t===null)throw Error(i(188));return t!==e?null:e}for(var o=e,l=t;;){var u=o.return;if(u===null)break;var c=u.alternate;if(c===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===o)return Hc(u),e;if(c===l)return Hc(u),t;c=c.sibling}throw Error(i(188))}if(o.return!==l.return)o=u,l=c;else{for(var p=!1,E=u.child;E;){if(E===o){p=!0,o=u,l=c;break}if(E===l){p=!0,l=u,o=c;break}E=E.sibling}if(!p){for(E=c.child;E;){if(E===o){p=!0,o=c,l=u;break}if(E===l){p=!0,l=c,o=u;break}E=E.sibling}if(!p)throw Error(i(189))}}if(o.alternate!==l)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:t}function Wc(e){return e=Lg(e),e!==null?Vc(e):null}function Vc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Vc(e);if(t!==null)return t;e=e.sibling}return null}var Qc=r.unstable_scheduleCallback,Kc=r.unstable_cancelCallback,Ig=r.unstable_shouldYield,Dg=r.unstable_requestPaint,Ge=r.unstable_now,_g=r.unstable_getCurrentPriorityLevel,Ns=r.unstable_ImmediatePriority,Gc=r.unstable_UserBlockingPriority,wi=r.unstable_NormalPriority,Og=r.unstable_LowPriority,qc=r.unstable_IdlePriority,ki=null,on=null;function zg(e){if(on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:Mg,Fg=Math.log,Bg=Math.LN2;function Mg(e){return e>>>=0,e===0?32:31-(Fg(e)/Bg|0)|0}var Si=64,Ei=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bi(e,t){var o=e.pendingLanes;if(o===0)return 0;var l=0,u=e.suspendedLanes,c=e.pingedLanes,p=o&268435455;if(p!==0){var E=p&~u;E!==0?l=xo(E):(c&=p,c!==0&&(l=xo(c)))}else p=o&~u,p!==0?l=xo(p):c!==0&&(l=xo(c));if(l===0)return 0;if(t!==0&&t!==l&&!(t&u)&&(u=l&-l,c=t&-t,u>=c||u===16&&(c&4194240)!==0))return t;if(l&4&&(l|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)o=31-Ht(t),u=1<<o,l|=e[o],t&=~u;return l}function Ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hg(e,t){for(var o=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-Ht(c),E=1<<p,A=u[p];A===-1?(!(E&o)||E&l)&&(u[p]=Ug(E,t)):A<=t&&(e.expiredLanes|=E),c&=~E}}function js(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yc(){var e=Si;return Si<<=1,!(Si&4194240)&&(Si=64),e}function Ls(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function wo(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ht(t),e[t]=o}function Wg(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-Ht(o),c=1<<u;t[u]=0,l[u]=-1,e[u]=-1,o&=~c}}function Is(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var l=31-Ht(o),u=1<<l;u&t|e[l]&t&&(e[l]|=t),o&=~u}}var Le=0;function Xc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jc,Ds,Zc,ed,td,_s=!1,Ci=[],Pn=null,Nn=null,jn=null,ko=new Map,So=new Map,Ln=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nd(e,t){switch(e){case"focusin":case"focusout":Pn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function Eo(e,t,o,l,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:o,eventSystemFlags:l,nativeEvent:c,targetContainers:[u]},t!==null&&(t=Oo(t),t!==null&&Ds(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Qg(e,t,o,l,u){switch(t){case"focusin":return Pn=Eo(Pn,e,t,o,l,u),!0;case"dragenter":return Nn=Eo(Nn,e,t,o,l,u),!0;case"mouseover":return jn=Eo(jn,e,t,o,l,u),!0;case"pointerover":var c=u.pointerId;return ko.set(c,Eo(ko.get(c)||null,e,t,o,l,u)),!0;case"gotpointercapture":return c=u.pointerId,So.set(c,Eo(So.get(c)||null,e,t,o,l,u)),!0}return!1}function rd(e){var t=nr(e.target);if(t!==null){var o=tr(t);if(o!==null){if(t=o.tag,t===13){if(t=Uc(o),t!==null){e.blockedOn=t,td(e.priority,function(){Zc(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ai(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var l=new o.constructor(o.type,o);Cs=l,o.target.dispatchEvent(l),Cs=null}else return t=Oo(o),t!==null&&Ds(t),e.blockedOn=o,!1;t.shift()}return!0}function od(e,t,o){Ai(e)&&o.delete(t)}function Kg(){_s=!1,Pn!==null&&Ai(Pn)&&(Pn=null),Nn!==null&&Ai(Nn)&&(Nn=null),jn!==null&&Ai(jn)&&(jn=null),ko.forEach(od),So.forEach(od)}function bo(e,t){e.blockedOn===t&&(e.blockedOn=null,_s||(_s=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Kg)))}function Co(e){function t(u){return bo(u,e)}if(0<Ci.length){bo(Ci[0],e);for(var o=1;o<Ci.length;o++){var l=Ci[o];l.blockedOn===e&&(l.blockedOn=null)}}for(Pn!==null&&bo(Pn,e),Nn!==null&&bo(Nn,e),jn!==null&&bo(jn,e),ko.forEach(t),So.forEach(t),o=0;o<Ln.length;o++)l=Ln[o],l.blockedOn===e&&(l.blockedOn=null);for(;0<Ln.length&&(o=Ln[0],o.blockedOn===null);)rd(o),o.blockedOn===null&&Ln.shift()}var Pr=W.ReactCurrentBatchConfig,Ri=!0;function Gg(e,t,o,l){var u=Le,c=Pr.transition;Pr.transition=null;try{Le=1,Os(e,t,o,l)}finally{Le=u,Pr.transition=c}}function qg(e,t,o,l){var u=Le,c=Pr.transition;Pr.transition=null;try{Le=4,Os(e,t,o,l)}finally{Le=u,Pr.transition=c}}function Os(e,t,o,l){if(Ri){var u=zs(e,t,o,l);if(u===null)ta(e,t,l,$i,o),nd(e,l);else if(Qg(u,e,t,o,l))l.stopPropagation();else if(nd(e,l),t&4&&-1<Vg.indexOf(e)){for(;u!==null;){var c=Oo(u);if(c!==null&&Jc(c),c=zs(e,t,o,l),c===null&&ta(e,t,l,$i,o),c===u)break;u=c}u!==null&&l.stopPropagation()}else ta(e,t,l,null,o)}}var $i=null;function zs(e,t,o,l){if($i=null,e=As(l),e=nr(e),e!==null)if(t=tr(e),t===null)e=null;else if(o=t.tag,o===13){if(e=Uc(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $i=e,null}function id(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_g()){case Ns:return 1;case Gc:return 4;case wi:case Og:return 16;case qc:return 536870912;default:return 16}default:return 16}}var In=null,Fs=null,Ti=null;function ld(){if(Ti)return Ti;var e,t=Fs,o=t.length,l,u="value"in In?In.value:In.textContent,c=u.length;for(e=0;e<o&&t[e]===u[e];e++);var p=o-e;for(l=1;l<=p&&t[o-l]===u[c-l];l++);return Ti=u.slice(e,1<l?1-l:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function sd(){return!1}function Tt(e){function t(o,l,u,c,p){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ni:sd,this.isPropagationStopped=sd,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bs=Tt(Nr),Ao=Y({},Nr,{view:0,detail:0}),Yg=Tt(Ao),Ms,Us,Ro,ji=Y({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(Ms=e.screenX-Ro.screenX,Us=e.screenY-Ro.screenY):Us=Ms=0,Ro=e),Ms)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),ad=Tt(ji),Xg=Y({},ji,{dataTransfer:0}),Jg=Tt(Xg),Zg=Y({},Ao,{relatedTarget:0}),Hs=Tt(Zg),ey=Y({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=Tt(ey),ny=Y({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ry=Tt(ny),oy=Y({},Nr,{data:0}),ud=Tt(oy),iy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ly={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sy[e])?!!t[e]:!1}function Ws(){return ay}var uy=Y({},Ao,{key:function(e){if(e.key){var t=iy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ly[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cy=Tt(uy),dy=Y({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cd=Tt(dy),fy=Y({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),py=Tt(fy),hy=Y({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=Tt(hy),gy=Y({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yy=Tt(gy),vy=[9,13,27,32],Vs=m&&"CompositionEvent"in window,$o=null;m&&"documentMode"in document&&($o=document.documentMode);var xy=m&&"TextEvent"in window&&!$o,dd=m&&(!Vs||$o&&8<$o&&11>=$o),fd=" ",pd=!1;function hd(e,t){switch(e){case"keyup":return vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jr=!1;function wy(e,t){switch(e){case"compositionend":return md(t);case"keypress":return t.which!==32?null:(pd=!0,fd);case"textInput":return e=t.data,e===fd&&pd?null:e;default:return null}}function ky(e,t){if(jr)return e==="compositionend"||!Vs&&hd(e,t)?(e=ld(),Ti=Fs=In=null,jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dd&&t.locale!=="ko"?null:t.data;default:return null}}var Sy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sy[e.type]:t==="textarea"}function yd(e,t,o,l){Oc(l),t=Oi(t,"onChange"),0<t.length&&(o=new Bs("onChange","change",null,o,l),e.push({event:o,listeners:t}))}var To=null,Po=null;function Ey(e){Dd(e,0)}function Li(e){var t=Or(e);if(Se(t))return e}function by(e,t){if(e==="change")return t}var vd=!1;if(m){var Qs;if(m){var Ks="oninput"in document;if(!Ks){var xd=document.createElement("div");xd.setAttribute("oninput","return;"),Ks=typeof xd.oninput=="function"}Qs=Ks}else Qs=!1;vd=Qs&&(!document.documentMode||9<document.documentMode)}function wd(){To&&(To.detachEvent("onpropertychange",kd),Po=To=null)}function kd(e){if(e.propertyName==="value"&&Li(Po)){var t=[];yd(t,Po,e,As(e)),Mc(Ey,t)}}function Cy(e,t,o){e==="focusin"?(wd(),To=t,Po=o,To.attachEvent("onpropertychange",kd)):e==="focusout"&&wd()}function Ay(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Li(Po)}function Ry(e,t){if(e==="click")return Li(t)}function $y(e,t){if(e==="input"||e==="change")return Li(t)}function Ty(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wt=typeof Object.is=="function"?Object.is:Ty;function No(e,t){if(Wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),l=Object.keys(t);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!h.call(t,u)||!Wt(e[u],t[u]))return!1}return!0}function Sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ed(e,t){var o=Sd(e);e=0;for(var l;o;){if(o.nodeType===3){if(l=e+o.textContent.length,e<=t&&l>=t)return{node:o,offset:t-e};e=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Sd(o)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(){for(var e=window,t=je();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=je(e.document)}return t}function Gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Py(e){var t=Cd(),o=e.focusedElem,l=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&bd(o.ownerDocument.documentElement,o)){if(l!==null&&Gs(o)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,c=Math.min(l.start,u);l=l.end===void 0?c:Math.min(l.end,u),!e.extend&&c>l&&(u=l,l=c,c=u),u=Ed(o,c);var p=Ed(o,l);u&&p&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),c>l?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ny=m&&"documentMode"in document&&11>=document.documentMode,Lr=null,qs=null,jo=null,Ys=!1;function Ad(e,t,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ys||Lr==null||Lr!==je(l)||(l=Lr,"selectionStart"in l&&Gs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),jo&&No(jo,l)||(jo=l,l=Oi(qs,"onSelect"),0<l.length&&(t=new Bs("onSelect","select",null,t,o),e.push({event:t,listeners:l}),t.target=Lr)))}function Ii(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var Ir={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},Xs={},Rd={};m&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Di(e){if(Xs[e])return Xs[e];if(!Ir[e])return e;var t=Ir[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Rd)return Xs[e]=t[o];return e}var $d=Di("animationend"),Td=Di("animationiteration"),Pd=Di("animationstart"),Nd=Di("transitionend"),jd=new Map,Ld="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){jd.set(e,t),d(t,[e])}for(var Js=0;Js<Ld.length;Js++){var Zs=Ld[Js],jy=Zs.toLowerCase(),Ly=Zs[0].toUpperCase()+Zs.slice(1);Dn(jy,"on"+Ly)}Dn($d,"onAnimationEnd"),Dn(Td,"onAnimationIteration"),Dn(Pd,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(Nd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Iy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function Id(e,t,o){var l=e.type||"unknown-event";e.currentTarget=o,jg(l,t,void 0,e),e.currentTarget=null}function Dd(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var l=e[o],u=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var p=l.length-1;0<=p;p--){var E=l[p],A=E.instance,I=E.currentTarget;if(E=E.listener,A!==c&&u.isPropagationStopped())break e;Id(u,E,I),c=A}else for(p=0;p<l.length;p++){if(E=l[p],A=E.instance,I=E.currentTarget,E=E.listener,A!==c&&u.isPropagationStopped())break e;Id(u,E,I),c=A}}}if(xi)throw e=Ps,xi=!1,Ps=null,e}function Oe(e,t){var o=t[sa];o===void 0&&(o=t[sa]=new Set);var l=e+"__bubble";o.has(l)||(_d(t,e,2,!1),o.add(l))}function ea(e,t,o){var l=0;t&&(l|=4),_d(o,e,l,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[_i]){e[_i]=!0,s.forEach(function(o){o!=="selectionchange"&&(Iy.has(o)||ea(o,!1,e),ea(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,ea("selectionchange",!1,t))}}function _d(e,t,o,l){switch(id(t)){case 1:var u=Gg;break;case 4:u=qg;break;default:u=Os}o=u.bind(null,t,o,e),u=void 0,!Ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,o,{capture:!0,passive:u}):e.addEventListener(t,o,!0):u!==void 0?e.addEventListener(t,o,{passive:u}):e.addEventListener(t,o,!1)}function ta(e,t,o,l,u){var c=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var E=l.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(p===4)for(p=l.return;p!==null;){var A=p.tag;if((A===3||A===4)&&(A=p.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;p=p.return}for(;E!==null;){if(p=nr(E),p===null)return;if(A=p.tag,A===5||A===6){l=c=p;continue e}E=E.parentNode}}l=l.return}Mc(function(){var I=c,H=As(o),V=[];e:{var U=jd.get(e);if(U!==void 0){var ee=Bs,ie=e;switch(e){case"keypress":if(Pi(o)===0)break e;case"keydown":case"keyup":ee=cy;break;case"focusin":ie="focus",ee=Hs;break;case"focusout":ie="blur",ee=Hs;break;case"beforeblur":case"afterblur":ee=Hs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Jg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=py;break;case $d:case Td:case Pd:ee=ty;break;case Nd:ee=my;break;case"scroll":ee=Yg;break;case"wheel":ee=yy;break;case"copy":case"cut":case"paste":ee=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=cd}var le=(t&4)!==0,qe=!le&&e==="scroll",N=le?U!==null?U+"Capture":null:U;le=[];for(var $=I,L;$!==null;){L=$;var G=L.stateNode;if(L.tag===5&&G!==null&&(L=G,N!==null&&(G=go($,N),G!=null&&le.push(Do($,G,L)))),qe)break;$=$.return}0<le.length&&(U=new ee(U,ie,null,o,H),V.push({event:U,listeners:le}))}}if(!(t&7)){e:{if(U=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",U&&o!==Cs&&(ie=o.relatedTarget||o.fromElement)&&(nr(ie)||ie[vn]))break e;if((ee||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,ee?(ie=o.relatedTarget||o.toElement,ee=I,ie=ie?nr(ie):null,ie!==null&&(qe=tr(ie),ie!==qe||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=I),ee!==ie)){if(le=ad,G="onMouseLeave",N="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(le=cd,G="onPointerLeave",N="onPointerEnter",$="pointer"),qe=ee==null?U:Or(ee),L=ie==null?U:Or(ie),U=new le(G,$+"leave",ee,o,H),U.target=qe,U.relatedTarget=L,G=null,nr(H)===I&&(le=new le(N,$+"enter",ie,o,H),le.target=L,le.relatedTarget=qe,G=le),qe=G,ee&&ie)t:{for(le=ee,N=ie,$=0,L=le;L;L=Dr(L))$++;for(L=0,G=N;G;G=Dr(G))L++;for(;0<$-L;)le=Dr(le),$--;for(;0<L-$;)N=Dr(N),L--;for(;$--;){if(le===N||N!==null&&le===N.alternate)break t;le=Dr(le),N=Dr(N)}le=null}else le=null;ee!==null&&Od(V,U,ee,le,!1),ie!==null&&qe!==null&&Od(V,qe,ie,le,!0)}}e:{if(U=I?Or(I):window,ee=U.nodeName&&U.nodeName.toLowerCase(),ee==="select"||ee==="input"&&U.type==="file")var ae=by;else if(gd(U))if(vd)ae=$y;else{ae=Ay;var ce=Cy}else(ee=U.nodeName)&&ee.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(ae=Ry);if(ae&&(ae=ae(e,I))){yd(V,ae,o,H);break e}ce&&ce(e,U,I),e==="focusout"&&(ce=U._wrapperState)&&ce.controlled&&U.type==="number"&&Dt(U,"number",U.value)}switch(ce=I?Or(I):window,e){case"focusin":(gd(ce)||ce.contentEditable==="true")&&(Lr=ce,qs=I,jo=null);break;case"focusout":jo=qs=Lr=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,Ad(V,o,H);break;case"selectionchange":if(Ny)break;case"keydown":case"keyup":Ad(V,o,H)}var de;if(Vs)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else jr?hd(e,o)&&(he="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(he="onCompositionStart");he&&(dd&&o.locale!=="ko"&&(jr||he!=="onCompositionStart"?he==="onCompositionEnd"&&jr&&(de=ld()):(In=H,Fs="value"in In?In.value:In.textContent,jr=!0)),ce=Oi(I,he),0<ce.length&&(he=new ud(he,e,null,o,H),V.push({event:he,listeners:ce}),de?he.data=de:(de=md(o),de!==null&&(he.data=de)))),(de=xy?wy(e,o):ky(e,o))&&(I=Oi(I,"onBeforeInput"),0<I.length&&(H=new ud("onBeforeInput","beforeinput",null,o,H),V.push({event:H,listeners:I}),H.data=de))}Dd(V,t)})}function Do(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Oi(e,t){for(var o=t+"Capture",l=[];e!==null;){var u=e,c=u.stateNode;u.tag===5&&c!==null&&(u=c,c=go(e,o),c!=null&&l.unshift(Do(e,c,u)),c=go(e,t),c!=null&&l.push(Do(e,c,u))),e=e.return}return l}function Dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Od(e,t,o,l,u){for(var c=t._reactName,p=[];o!==null&&o!==l;){var E=o,A=E.alternate,I=E.stateNode;if(A!==null&&A===l)break;E.tag===5&&I!==null&&(E=I,u?(A=go(o,c),A!=null&&p.unshift(Do(o,A,E))):u||(A=go(o,c),A!=null&&p.push(Do(o,A,E)))),o=o.return}p.length!==0&&e.push({event:t,listeners:p})}var Dy=/\r\n?/g,_y=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(Dy,`
`).replace(_y,"")}function zi(e,t,o){if(t=zd(t),zd(e)!==t&&o)throw Error(i(425))}function Fi(){}var na=null,ra=null;function oa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ia=typeof setTimeout=="function"?setTimeout:void 0,Oy=typeof clearTimeout=="function"?clearTimeout:void 0,Fd=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof Fd<"u"?function(e){return Fd.resolve(null).then(e).catch(Fy)}:ia;function Fy(e){setTimeout(function(){throw e})}function la(e,t){var o=t,l=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){e.removeChild(u),Co(t);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Co(t)}function _n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),ln="__reactFiber$"+_r,_o="__reactProps$"+_r,vn="__reactContainer$"+_r,sa="__reactEvents$"+_r,By="__reactListeners$"+_r,My="__reactHandles$"+_r;function nr(e){var t=e[ln];if(t)return t;for(var o=e.parentNode;o;){if(t=o[vn]||o[ln]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=Bd(e);e!==null;){if(o=e[ln])return o;e=Bd(e)}return t}e=o,o=e.parentNode}return null}function Oo(e){return e=e[ln]||e[vn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Bi(e){return e[_o]||null}var aa=[],zr=-1;function On(e){return{current:e}}function ze(e){0>zr||(e.current=aa[zr],aa[zr]=null,zr--)}function _e(e,t){zr++,aa[zr]=e.current,e.current=t}var zn={},ct=On(zn),wt=On(!1),rr=zn;function Fr(e,t){var o=e.type.contextTypes;if(!o)return zn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var u={},c;for(c in o)u[c]=t[c];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function kt(e){return e=e.childContextTypes,e!=null}function Mi(){ze(wt),ze(ct)}function Md(e,t,o){if(ct.current!==zn)throw Error(i(168));_e(ct,t),_e(wt,o)}function Ud(e,t,o){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in t))throw Error(i(108,se(e)||"Unknown",u));return Y({},o,l)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||zn,rr=ct.current,_e(ct,e),_e(wt,wt.current),!0}function Hd(e,t,o){var l=e.stateNode;if(!l)throw Error(i(169));o?(e=Ud(e,t,rr),l.__reactInternalMemoizedMergedChildContext=e,ze(wt),ze(ct),_e(ct,e)):ze(wt),_e(wt,o)}var xn=null,Hi=!1,ua=!1;function Wd(e){xn===null?xn=[e]:xn.push(e)}function Uy(e){Hi=!0,Wd(e)}function Fn(){if(!ua&&xn!==null){ua=!0;var e=0,t=Le;try{var o=xn;for(Le=1;e<o.length;e++){var l=o[e];do l=l(!0);while(l!==null)}xn=null,Hi=!1}catch(u){throw xn!==null&&(xn=xn.slice(e+1)),Qc(Ns,Fn),u}finally{Le=t,ua=!1}}return null}var Br=[],Mr=0,Wi=null,Vi=0,_t=[],Ot=0,or=null,wn=1,kn="";function ir(e,t){Br[Mr++]=Vi,Br[Mr++]=Wi,Wi=e,Vi=t}function Vd(e,t,o){_t[Ot++]=wn,_t[Ot++]=kn,_t[Ot++]=or,or=e;var l=wn;e=kn;var u=32-Ht(l)-1;l&=~(1<<u),o+=1;var c=32-Ht(t)+u;if(30<c){var p=u-u%5;c=(l&(1<<p)-1).toString(32),l>>=p,u-=p,wn=1<<32-Ht(t)+u|o<<u|l,kn=c+e}else wn=1<<c|o<<u|l,kn=e}function ca(e){e.return!==null&&(ir(e,1),Vd(e,1,0))}function da(e){for(;e===Wi;)Wi=Br[--Mr],Br[Mr]=null,Vi=Br[--Mr],Br[Mr]=null;for(;e===or;)or=_t[--Ot],_t[Ot]=null,kn=_t[--Ot],_t[Ot]=null,wn=_t[--Ot],_t[Ot]=null}var Pt=null,Nt=null,Be=!1,Vt=null;function Qd(e,t){var o=Mt(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function Kd(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pt=e,Nt=_n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=or!==null?{id:wn,overflow:kn}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Mt(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,Pt=e,Nt=null,!0):!1;default:return!1}}function fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pa(e){if(Be){var t=Nt;if(t){var o=t;if(!Kd(e,t)){if(fa(e))throw Error(i(418));t=_n(o.nextSibling);var l=Pt;t&&Kd(e,t)?Qd(l,o):(e.flags=e.flags&-4097|2,Be=!1,Pt=e)}}else{if(fa(e))throw Error(i(418));e.flags=e.flags&-4097|2,Be=!1,Pt=e}}}function Gd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pt=e}function Qi(e){if(e!==Pt)return!1;if(!Be)return Gd(e),Be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oa(e.type,e.memoizedProps)),t&&(t=Nt)){if(fa(e))throw qd(),Error(i(418));for(;t;)Qd(e,t),t=_n(t.nextSibling)}if(Gd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){Nt=_n(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Pt?_n(e.stateNode.nextSibling):null;return!0}function qd(){for(var e=Nt;e;)e=_n(e.nextSibling)}function Ur(){Nt=Pt=null,Be=!1}function ha(e){Vt===null?Vt=[e]:Vt.push(e)}var Hy=W.ReactCurrentBatchConfig;function zo(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var l=o.stateNode}if(!l)throw Error(i(147,e));var u=l,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var E=u.refs;p===null?delete E[c]:E[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Ki(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yd(e){var t=e._init;return t(e._payload)}function Xd(e){function t(N,$){if(e){var L=N.deletions;L===null?(N.deletions=[$],N.flags|=16):L.push($)}}function o(N,$){if(!e)return null;for(;$!==null;)t(N,$),$=$.sibling;return null}function l(N,$){for(N=new Map;$!==null;)$.key!==null?N.set($.key,$):N.set($.index,$),$=$.sibling;return N}function u(N,$){return N=Kn(N,$),N.index=0,N.sibling=null,N}function c(N,$,L){return N.index=L,e?(L=N.alternate,L!==null?(L=L.index,L<$?(N.flags|=2,$):L):(N.flags|=2,$)):(N.flags|=1048576,$)}function p(N){return e&&N.alternate===null&&(N.flags|=2),N}function E(N,$,L,G){return $===null||$.tag!==6?($=iu(L,N.mode,G),$.return=N,$):($=u($,L),$.return=N,$)}function A(N,$,L,G){var ae=L.type;return ae===q?H(N,$,L.props.children,G,L.key):$!==null&&($.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Pe&&Yd(ae)===$.type)?(G=u($,L.props),G.ref=zo(N,$,L),G.return=N,G):(G=yl(L.type,L.key,L.props,null,N.mode,G),G.ref=zo(N,$,L),G.return=N,G)}function I(N,$,L,G){return $===null||$.tag!==4||$.stateNode.containerInfo!==L.containerInfo||$.stateNode.implementation!==L.implementation?($=lu(L,N.mode,G),$.return=N,$):($=u($,L.children||[]),$.return=N,$)}function H(N,$,L,G,ae){return $===null||$.tag!==7?($=pr(L,N.mode,G,ae),$.return=N,$):($=u($,L),$.return=N,$)}function V(N,$,L){if(typeof $=="string"&&$!==""||typeof $=="number")return $=iu(""+$,N.mode,L),$.return=N,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case Q:return L=yl($.type,$.key,$.props,null,N.mode,L),L.ref=zo(N,null,$),L.return=N,L;case K:return $=lu($,N.mode,L),$.return=N,$;case Pe:var G=$._init;return V(N,G($._payload),L)}if(gn($)||J($))return $=pr($,N.mode,L,null),$.return=N,$;Ki(N,$)}return null}function U(N,$,L,G){var ae=$!==null?$.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return ae!==null?null:E(N,$,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Q:return L.key===ae?A(N,$,L,G):null;case K:return L.key===ae?I(N,$,L,G):null;case Pe:return ae=L._init,U(N,$,ae(L._payload),G)}if(gn(L)||J(L))return ae!==null?null:H(N,$,L,G,null);Ki(N,L)}return null}function ee(N,$,L,G,ae){if(typeof G=="string"&&G!==""||typeof G=="number")return N=N.get(L)||null,E($,N,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Q:return N=N.get(G.key===null?L:G.key)||null,A($,N,G,ae);case K:return N=N.get(G.key===null?L:G.key)||null,I($,N,G,ae);case Pe:var ce=G._init;return ee(N,$,L,ce(G._payload),ae)}if(gn(G)||J(G))return N=N.get(L)||null,H($,N,G,ae,null);Ki($,G)}return null}function ie(N,$,L,G){for(var ae=null,ce=null,de=$,he=$=0,nt=null;de!==null&&he<L.length;he++){de.index>he?(nt=de,de=null):nt=de.sibling;var Re=U(N,de,L[he],G);if(Re===null){de===null&&(de=nt);break}e&&de&&Re.alternate===null&&t(N,de),$=c(Re,$,he),ce===null?ae=Re:ce.sibling=Re,ce=Re,de=nt}if(he===L.length)return o(N,de),Be&&ir(N,he),ae;if(de===null){for(;he<L.length;he++)de=V(N,L[he],G),de!==null&&($=c(de,$,he),ce===null?ae=de:ce.sibling=de,ce=de);return Be&&ir(N,he),ae}for(de=l(N,de);he<L.length;he++)nt=ee(de,N,he,L[he],G),nt!==null&&(e&&nt.alternate!==null&&de.delete(nt.key===null?he:nt.key),$=c(nt,$,he),ce===null?ae=nt:ce.sibling=nt,ce=nt);return e&&de.forEach(function(Gn){return t(N,Gn)}),Be&&ir(N,he),ae}function le(N,$,L,G){var ae=J(L);if(typeof ae!="function")throw Error(i(150));if(L=ae.call(L),L==null)throw Error(i(151));for(var ce=ae=null,de=$,he=$=0,nt=null,Re=L.next();de!==null&&!Re.done;he++,Re=L.next()){de.index>he?(nt=de,de=null):nt=de.sibling;var Gn=U(N,de,Re.value,G);if(Gn===null){de===null&&(de=nt);break}e&&de&&Gn.alternate===null&&t(N,de),$=c(Gn,$,he),ce===null?ae=Gn:ce.sibling=Gn,ce=Gn,de=nt}if(Re.done)return o(N,de),Be&&ir(N,he),ae;if(de===null){for(;!Re.done;he++,Re=L.next())Re=V(N,Re.value,G),Re!==null&&($=c(Re,$,he),ce===null?ae=Re:ce.sibling=Re,ce=Re);return Be&&ir(N,he),ae}for(de=l(N,de);!Re.done;he++,Re=L.next())Re=ee(de,N,he,Re.value,G),Re!==null&&(e&&Re.alternate!==null&&de.delete(Re.key===null?he:Re.key),$=c(Re,$,he),ce===null?ae=Re:ce.sibling=Re,ce=Re);return e&&de.forEach(function(k0){return t(N,k0)}),Be&&ir(N,he),ae}function qe(N,$,L,G){if(typeof L=="object"&&L!==null&&L.type===q&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case Q:e:{for(var ae=L.key,ce=$;ce!==null;){if(ce.key===ae){if(ae=L.type,ae===q){if(ce.tag===7){o(N,ce.sibling),$=u(ce,L.props.children),$.return=N,N=$;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Pe&&Yd(ae)===ce.type){o(N,ce.sibling),$=u(ce,L.props),$.ref=zo(N,ce,L),$.return=N,N=$;break e}o(N,ce);break}else t(N,ce);ce=ce.sibling}L.type===q?($=pr(L.props.children,N.mode,G,L.key),$.return=N,N=$):(G=yl(L.type,L.key,L.props,null,N.mode,G),G.ref=zo(N,$,L),G.return=N,N=G)}return p(N);case K:e:{for(ce=L.key;$!==null;){if($.key===ce)if($.tag===4&&$.stateNode.containerInfo===L.containerInfo&&$.stateNode.implementation===L.implementation){o(N,$.sibling),$=u($,L.children||[]),$.return=N,N=$;break e}else{o(N,$);break}else t(N,$);$=$.sibling}$=lu(L,N.mode,G),$.return=N,N=$}return p(N);case Pe:return ce=L._init,qe(N,$,ce(L._payload),G)}if(gn(L))return ie(N,$,L,G);if(J(L))return le(N,$,L,G);Ki(N,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,$!==null&&$.tag===6?(o(N,$.sibling),$=u($,L),$.return=N,N=$):(o(N,$),$=iu(L,N.mode,G),$.return=N,N=$),p(N)):o(N,$)}return qe}var Hr=Xd(!0),Jd=Xd(!1),Gi=On(null),qi=null,Wr=null,ma=null;function ga(){ma=Wr=qi=null}function ya(e){var t=Gi.current;ze(Gi),e._currentValue=t}function va(e,t,o){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===o)break;e=e.return}}function Vr(e,t){qi=e,ma=Wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(St=!0),e.firstContext=null)}function zt(e){var t=e._currentValue;if(ma!==e)if(e={context:e,memoizedValue:t,next:null},Wr===null){if(qi===null)throw Error(i(308));Wr=e,qi.dependencies={lanes:0,firstContext:e}}else Wr=Wr.next=e;return t}var lr=null;function xa(e){lr===null?lr=[e]:lr.push(e)}function Zd(e,t,o,l){var u=t.interleaved;return u===null?(o.next=o,xa(t)):(o.next=u.next,u.next=o),t.interleaved=o,Sn(e,l)}function Sn(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Bn=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ef(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mn(e,t,o){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,Ce&2){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,Sn(e,o)}return u=l.interleaved,u===null?(t.next=t,xa(l)):(t.next=u.next,u.next=t),l.interleaved=t,Sn(e,o)}function Yi(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,o|=l,t.lanes=o,Is(e,o)}}function tf(e,t){var o=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,c=null;if(o=o.firstBaseUpdate,o!==null){do{var p={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};c===null?u=c=p:c=c.next=p,o=o.next}while(o!==null);c===null?u=c=t:c=c.next=t}else u=c=t;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:l.shared,effects:l.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function Xi(e,t,o,l){var u=e.updateQueue;Bn=!1;var c=u.firstBaseUpdate,p=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var A=E,I=A.next;A.next=null,p===null?c=I:p.next=I,p=A;var H=e.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==p&&(E===null?H.firstBaseUpdate=I:E.next=I,H.lastBaseUpdate=A))}if(c!==null){var V=u.baseState;p=0,H=I=A=null,E=c;do{var U=E.lane,ee=E.eventTime;if((l&U)===U){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var ie=e,le=E;switch(U=t,ee=o,le.tag){case 1:if(ie=le.payload,typeof ie=="function"){V=ie.call(ee,V,U);break e}V=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=le.payload,U=typeof ie=="function"?ie.call(ee,V,U):ie,U==null)break e;V=Y({},V,U);break e;case 2:Bn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,U=u.effects,U===null?u.effects=[E]:U.push(E))}else ee={eventTime:ee,lane:U,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(I=H=ee,A=V):H=H.next=ee,p|=U;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;U=E,E=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);if(H===null&&(A=V),u.baseState=A,u.firstBaseUpdate=I,u.lastBaseUpdate=H,t=u.shared.interleaved,t!==null){u=t;do p|=u.lane,u=u.next;while(u!==t)}else c===null&&(u.shared.lanes=0);ur|=p,e.lanes=p,e.memoizedState=V}}function nf(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(i(191,u));u.call(l)}}}var Fo={},sn=On(Fo),Bo=On(Fo),Mo=On(Fo);function sr(e){if(e===Fo)throw Error(i(174));return e}function ka(e,t){switch(_e(Mo,t),_e(Bo,e),_e(sn,Fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ss(t,e)}ze(sn),_e(sn,t)}function Qr(){ze(sn),ze(Bo),ze(Mo)}function rf(e){sr(Mo.current);var t=sr(sn.current),o=Ss(t,e.type);t!==o&&(_e(Bo,e),_e(sn,o))}function Sa(e){Bo.current===e&&(ze(sn),ze(Bo))}var Me=On(0);function Ji(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ea=[];function ba(){for(var e=0;e<Ea.length;e++)Ea[e]._workInProgressVersionPrimary=null;Ea.length=0}var Zi=W.ReactCurrentDispatcher,Ca=W.ReactCurrentBatchConfig,ar=0,Ue=null,Je=null,et=null,el=!1,Uo=!1,Ho=0,Wy=0;function dt(){throw Error(i(321))}function Aa(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!Wt(e[o],t[o]))return!1;return!0}function Ra(e,t,o,l,u,c){if(ar=c,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zi.current=e===null||e.memoizedState===null?Gy:qy,e=o(l,u),Uo){c=0;do{if(Uo=!1,Ho=0,25<=c)throw Error(i(301));c+=1,et=Je=null,t.updateQueue=null,Zi.current=Yy,e=o(l,u)}while(Uo)}if(Zi.current=rl,t=Je!==null&&Je.next!==null,ar=0,et=Je=Ue=null,el=!1,t)throw Error(i(300));return e}function $a(){var e=Ho!==0;return Ho=0,e}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ue.memoizedState=et=e:et=et.next=e,et}function Ft(){if(Je===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=et===null?Ue.memoizedState:et.next;if(t!==null)et=t,Je=e;else{if(e===null)throw Error(i(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},et===null?Ue.memoizedState=et=e:et=et.next=e}return et}function Wo(e,t){return typeof t=="function"?t(e):t}function Ta(e){var t=Ft(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=Je,u=l.baseQueue,c=o.pending;if(c!==null){if(u!==null){var p=u.next;u.next=c.next,c.next=p}l.baseQueue=u=c,o.pending=null}if(u!==null){c=u.next,l=l.baseState;var E=p=null,A=null,I=c;do{var H=I.lane;if((ar&H)===H)A!==null&&(A=A.next={lane:0,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null}),l=I.hasEagerState?I.eagerState:e(l,I.action);else{var V={lane:H,action:I.action,hasEagerState:I.hasEagerState,eagerState:I.eagerState,next:null};A===null?(E=A=V,p=l):A=A.next=V,Ue.lanes|=H,ur|=H}I=I.next}while(I!==null&&I!==c);A===null?p=l:A.next=E,Wt(l,t.memoizedState)||(St=!0),t.memoizedState=l,t.baseState=p,t.baseQueue=A,o.lastRenderedState=l}if(e=o.interleaved,e!==null){u=e;do c=u.lane,Ue.lanes|=c,ur|=c,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function Pa(e){var t=Ft(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var l=o.dispatch,u=o.pending,c=t.memoizedState;if(u!==null){o.pending=null;var p=u=u.next;do c=e(c,p.action),p=p.next;while(p!==u);Wt(c,t.memoizedState)||(St=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),o.lastRenderedState=c}return[c,l]}function of(){}function lf(e,t){var o=Ue,l=Ft(),u=t(),c=!Wt(l.memoizedState,u);if(c&&(l.memoizedState=u,St=!0),l=l.queue,Na(uf.bind(null,o,l,e),[e]),l.getSnapshot!==t||c||et!==null&&et.memoizedState.tag&1){if(o.flags|=2048,Vo(9,af.bind(null,o,l,u,t),void 0,null),tt===null)throw Error(i(349));ar&30||sf(o,t,u)}return u}function sf(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function af(e,t,o,l){t.value=o,t.getSnapshot=l,cf(t)&&df(e)}function uf(e,t,o){return o(function(){cf(t)&&df(e)})}function cf(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Wt(e,o)}catch{return!0}}function df(e){var t=Sn(e,1);t!==null&&qt(t,e,1,-1)}function ff(e){var t=an();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ky.bind(null,Ue,e),[t.memoizedState,e]}function Vo(e,t,o,l){return e={tag:e,create:t,destroy:o,deps:l,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(l=o.next,o.next=e,e.next=l,t.lastEffect=e)),e}function pf(){return Ft().memoizedState}function tl(e,t,o,l){var u=an();Ue.flags|=e,u.memoizedState=Vo(1|t,o,void 0,l===void 0?null:l)}function nl(e,t,o,l){var u=Ft();l=l===void 0?null:l;var c=void 0;if(Je!==null){var p=Je.memoizedState;if(c=p.destroy,l!==null&&Aa(l,p.deps)){u.memoizedState=Vo(t,o,c,l);return}}Ue.flags|=e,u.memoizedState=Vo(1|t,o,c,l)}function hf(e,t){return tl(8390656,8,e,t)}function Na(e,t){return nl(2048,8,e,t)}function mf(e,t){return nl(4,2,e,t)}function gf(e,t){return nl(4,4,e,t)}function yf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vf(e,t,o){return o=o!=null?o.concat([e]):null,nl(4,4,yf.bind(null,t,e),o)}function ja(){}function xf(e,t){var o=Ft();t=t===void 0?null:t;var l=o.memoizedState;return l!==null&&t!==null&&Aa(t,l[1])?l[0]:(o.memoizedState=[e,t],e)}function wf(e,t){var o=Ft();t=t===void 0?null:t;var l=o.memoizedState;return l!==null&&t!==null&&Aa(t,l[1])?l[0]:(e=e(),o.memoizedState=[e,t],e)}function kf(e,t,o){return ar&21?(Wt(o,t)||(o=Yc(),Ue.lanes|=o,ur|=o,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,St=!0),e.memoizedState=o)}function Vy(e,t){var o=Le;Le=o!==0&&4>o?o:4,e(!0);var l=Ca.transition;Ca.transition={};try{e(!1),t()}finally{Le=o,Ca.transition=l}}function Sf(){return Ft().memoizedState}function Qy(e,t,o){var l=Vn(e);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Ef(e))bf(t,o);else if(o=Zd(e,t,o,l),o!==null){var u=yt();qt(o,e,l,u),Cf(o,t,l)}}function Ky(e,t,o){var l=Vn(e),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ef(e))bf(t,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,E=c(p,o);if(u.hasEagerState=!0,u.eagerState=E,Wt(E,p)){var A=t.interleaved;A===null?(u.next=u,xa(t)):(u.next=A.next,A.next=u),t.interleaved=u;return}}catch{}finally{}o=Zd(e,t,u,l),o!==null&&(u=yt(),qt(o,e,l,u),Cf(o,t,l))}}function Ef(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function bf(e,t){Uo=el=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function Cf(e,t,o){if(o&4194240){var l=t.lanes;l&=e.pendingLanes,o|=l,t.lanes=o,Is(e,o)}}var rl={readContext:zt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Gy={readContext:zt,useCallback:function(e,t){return an().memoizedState=[e,t===void 0?null:t],e},useContext:zt,useEffect:hf,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,tl(4194308,4,yf.bind(null,t,e),o)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return tl(4,2,e,t)},useMemo:function(e,t){var o=an();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var l=an();return t=o!==void 0?o(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=Qy.bind(null,Ue,e),[l.memoizedState,e]},useRef:function(e){var t=an();return e={current:e},t.memoizedState=e},useState:ff,useDebugValue:ja,useDeferredValue:function(e){return an().memoizedState=e},useTransition:function(){var e=ff(!1),t=e[0];return e=Vy.bind(null,e[1]),an().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var l=Ue,u=an();if(Be){if(o===void 0)throw Error(i(407));o=o()}else{if(o=t(),tt===null)throw Error(i(349));ar&30||sf(l,t,o)}u.memoizedState=o;var c={value:o,getSnapshot:t};return u.queue=c,hf(uf.bind(null,l,c,e),[e]),l.flags|=2048,Vo(9,af.bind(null,l,c,o,t),void 0,null),o},useId:function(){var e=an(),t=tt.identifierPrefix;if(Be){var o=kn,l=wn;o=(l&~(1<<32-Ht(l)-1)).toString(32)+o,t=":"+t+"R"+o,o=Ho++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=Wy++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qy={readContext:zt,useCallback:xf,useContext:zt,useEffect:Na,useImperativeHandle:vf,useInsertionEffect:mf,useLayoutEffect:gf,useMemo:wf,useReducer:Ta,useRef:pf,useState:function(){return Ta(Wo)},useDebugValue:ja,useDeferredValue:function(e){var t=Ft();return kf(t,Je.memoizedState,e)},useTransition:function(){var e=Ta(Wo)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:of,useSyncExternalStore:lf,useId:Sf,unstable_isNewReconciler:!1},Yy={readContext:zt,useCallback:xf,useContext:zt,useEffect:Na,useImperativeHandle:vf,useInsertionEffect:mf,useLayoutEffect:gf,useMemo:wf,useReducer:Pa,useRef:pf,useState:function(){return Pa(Wo)},useDebugValue:ja,useDeferredValue:function(e){var t=Ft();return Je===null?t.memoizedState=e:kf(t,Je.memoizedState,e)},useTransition:function(){var e=Pa(Wo)[0],t=Ft().memoizedState;return[e,t]},useMutableSource:of,useSyncExternalStore:lf,useId:Sf,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function La(e,t,o,l){t=e.memoizedState,o=o(l,t),o=o==null?t:Y({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var ol={isMounted:function(e){return(e=e._reactInternals)?tr(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var l=yt(),u=Vn(e),c=En(l,u);c.payload=t,o!=null&&(c.callback=o),t=Mn(e,c,u),t!==null&&(qt(t,e,u,l),Yi(t,e,u))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var l=yt(),u=Vn(e),c=En(l,u);c.tag=1,c.payload=t,o!=null&&(c.callback=o),t=Mn(e,c,u),t!==null&&(qt(t,e,u,l),Yi(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=yt(),l=Vn(e),u=En(o,l);u.tag=2,t!=null&&(u.callback=t),t=Mn(e,u,l),t!==null&&(qt(t,e,l,o),Yi(t,e,l))}};function Af(e,t,o,l,u,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,p):t.prototype&&t.prototype.isPureReactComponent?!No(o,l)||!No(u,c):!0}function Rf(e,t,o){var l=!1,u=zn,c=t.contextType;return typeof c=="object"&&c!==null?c=zt(c):(u=kt(t)?rr:ct.current,l=t.contextTypes,c=(l=l!=null)?Fr(e,u):zn),t=new t(o,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ol,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=c),t}function $f(e,t,o,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,l),t.state!==e&&ol.enqueueReplaceState(t,t.state,null)}function Ia(e,t,o,l){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},wa(e);var c=t.contextType;typeof c=="object"&&c!==null?u.context=zt(c):(c=kt(t)?rr:ct.current,u.context=Fr(e,c)),u.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(La(e,t,c,o),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&ol.enqueueReplaceState(u,u.state,null),Xi(e,o,u,l),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var o="",l=t;do o+=oe(l),l=l.return;while(l);var u=o}catch(c){u=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:u,digest:null}}function Da(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function _a(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var Xy=typeof WeakMap=="function"?WeakMap:Map;function Tf(e,t,o){o=En(-1,o),o.tag=3,o.payload={element:null};var l=t.value;return o.callback=function(){dl||(dl=!0,Xa=l),_a(e,t)},o}function Pf(e,t,o){o=En(-1,o),o.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var u=t.value;o.payload=function(){return l(u)},o.callback=function(){_a(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(o.callback=function(){_a(e,t),typeof l!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),o}function Nf(e,t,o){var l=e.pingCache;if(l===null){l=e.pingCache=new Xy;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(o)||(u.add(o),e=d0.bind(null,e,t,o),t.then(e,e))}function jf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lf(e,t,o,l,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=En(-1,1),t.tag=2,Mn(o,t,1))),o.lanes|=1),e)}var Jy=W.ReactCurrentOwner,St=!1;function gt(e,t,o,l){t.child=e===null?Jd(t,null,o,l):Hr(t,e.child,o,l)}function If(e,t,o,l,u){o=o.render;var c=t.ref;return Vr(t,u),l=Ra(e,t,o,l,c,u),o=$a(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,bn(e,t,u)):(Be&&o&&ca(t),t.flags|=1,gt(e,t,l,u),t.child)}function Df(e,t,o,l,u){if(e===null){var c=o.type;return typeof c=="function"&&!ou(c)&&c.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=c,_f(e,t,c,l,u)):(e=yl(o.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&u)){var p=c.memoizedProps;if(o=o.compare,o=o!==null?o:No,o(p,l)&&e.ref===t.ref)return bn(e,t,u)}return t.flags|=1,e=Kn(c,l),e.ref=t.ref,e.return=t,t.child=e}function _f(e,t,o,l,u){if(e!==null){var c=e.memoizedProps;if(No(c,l)&&e.ref===t.ref)if(St=!1,t.pendingProps=l=c,(e.lanes&u)!==0)e.flags&131072&&(St=!0);else return t.lanes=e.lanes,bn(e,t,u)}return Oa(e,t,o,l,u)}function Of(e,t,o){var l=t.pendingProps,u=l.children,c=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(qr,jt),jt|=o;else{if(!(o&1073741824))return e=c!==null?c.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(qr,jt),jt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=c!==null?c.baseLanes:o,_e(qr,jt),jt|=l}else c!==null?(l=c.baseLanes|o,t.memoizedState=null):l=o,_e(qr,jt),jt|=l;return gt(e,t,u,o),t.child}function zf(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Oa(e,t,o,l,u){var c=kt(o)?rr:ct.current;return c=Fr(t,c),Vr(t,u),o=Ra(e,t,o,l,c,u),l=$a(),e!==null&&!St?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,bn(e,t,u)):(Be&&l&&ca(t),t.flags|=1,gt(e,t,o,u),t.child)}function Ff(e,t,o,l,u){if(kt(o)){var c=!0;Ui(t)}else c=!1;if(Vr(t,u),t.stateNode===null)ll(e,t),Rf(t,o,l),Ia(t,o,l,u),l=!0;else if(e===null){var p=t.stateNode,E=t.memoizedProps;p.props=E;var A=p.context,I=o.contextType;typeof I=="object"&&I!==null?I=zt(I):(I=kt(o)?rr:ct.current,I=Fr(t,I));var H=o.getDerivedStateFromProps,V=typeof H=="function"||typeof p.getSnapshotBeforeUpdate=="function";V||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==l||A!==I)&&$f(t,p,l,I),Bn=!1;var U=t.memoizedState;p.state=U,Xi(t,l,p,u),A=t.memoizedState,E!==l||U!==A||wt.current||Bn?(typeof H=="function"&&(La(t,o,H,l),A=t.memoizedState),(E=Bn||Af(t,o,E,l,U,A,I))?(V||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),p.props=l,p.state=A,p.context=I,l=E):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{p=t.stateNode,ef(e,t),E=t.memoizedProps,I=t.type===t.elementType?E:Qt(t.type,E),p.props=I,V=t.pendingProps,U=p.context,A=o.contextType,typeof A=="object"&&A!==null?A=zt(A):(A=kt(o)?rr:ct.current,A=Fr(t,A));var ee=o.getDerivedStateFromProps;(H=typeof ee=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==V||U!==A)&&$f(t,p,l,A),Bn=!1,U=t.memoizedState,p.state=U,Xi(t,l,p,u);var ie=t.memoizedState;E!==V||U!==ie||wt.current||Bn?(typeof ee=="function"&&(La(t,o,ee,l),ie=t.memoizedState),(I=Bn||Af(t,o,I,l,U,ie,A)||!1)?(H||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ie,A),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ie,A)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=ie),p.props=l,p.state=ie,p.context=A,l=I):(typeof p.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),l=!1)}return za(e,t,o,l,c,u)}function za(e,t,o,l,u,c){zf(e,t);var p=(t.flags&128)!==0;if(!l&&!p)return u&&Hd(t,o,!1),bn(e,t,c);l=t.stateNode,Jy.current=t;var E=p&&typeof o.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&p?(t.child=Hr(t,e.child,null,c),t.child=Hr(t,null,E,c)):gt(e,t,E,c),t.memoizedState=l.state,u&&Hd(t,o,!0),t.child}function Bf(e){var t=e.stateNode;t.pendingContext?Md(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Md(e,t.context,!1),ka(e,t.containerInfo)}function Mf(e,t,o,l,u){return Ur(),ha(u),t.flags|=256,gt(e,t,o,l),t.child}var Fa={dehydrated:null,treeContext:null,retryLane:0};function Ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uf(e,t,o){var l=t.pendingProps,u=Me.current,c=!1,p=(t.flags&128)!==0,E;if((E=p)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),_e(Me,u&1),e===null)return pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(p=l.children,e=l.fallback,c?(l=t.mode,c=t.child,p={mode:"hidden",children:p},!(l&1)&&c!==null?(c.childLanes=0,c.pendingProps=p):c=vl(p,l,0,null),e=pr(e,l,o,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=Ba(o),t.memoizedState=Fa,e):Ma(t,p));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return Zy(e,t,p,l,E,u,o);if(c){c=l.fallback,p=t.mode,u=e.child,E=u.sibling;var A={mode:"hidden",children:l.children};return!(p&1)&&t.child!==u?(l=t.child,l.childLanes=0,l.pendingProps=A,t.deletions=null):(l=Kn(u,A),l.subtreeFlags=u.subtreeFlags&14680064),E!==null?c=Kn(E,c):(c=pr(c,p,o,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,l=c,c=t.child,p=e.child.memoizedState,p=p===null?Ba(o):{baseLanes:p.baseLanes|o,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~o,t.memoizedState=Fa,l}return c=e.child,e=c.sibling,l=Kn(c,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=o),l.return=t,l.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=l,t.memoizedState=null,l}function Ma(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function il(e,t,o,l){return l!==null&&ha(l),Hr(t,e.child,null,o),e=Ma(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zy(e,t,o,l,u,c,p){if(o)return t.flags&256?(t.flags&=-257,l=Da(Error(i(422))),il(e,t,p,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=l.fallback,u=t.mode,l=vl({mode:"visible",children:l.children},u,0,null),c=pr(c,u,p,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,t.mode&1&&Hr(t,e.child,null,p),t.child.memoizedState=Ba(p),t.memoizedState=Fa,c);if(!(t.mode&1))return il(e,t,p,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var E=l.dgst;return l=E,c=Error(i(419)),l=Da(c,l,void 0),il(e,t,p,l)}if(E=(p&e.childLanes)!==0,St||E){if(l=tt,l!==null){switch(p&-p){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(l.suspendedLanes|p)?0:u,u!==0&&u!==c.retryLane&&(c.retryLane=u,Sn(e,u),qt(l,e,u,-1))}return ru(),l=Da(Error(i(421))),il(e,t,p,l)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=f0.bind(null,e),u._reactRetry=t,null):(e=c.treeContext,Nt=_n(u.nextSibling),Pt=t,Be=!0,Vt=null,e!==null&&(_t[Ot++]=wn,_t[Ot++]=kn,_t[Ot++]=or,wn=e.id,kn=e.overflow,or=t),t=Ma(t,l.children),t.flags|=4096,t)}function Hf(e,t,o){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),va(e.return,t,o)}function Ua(e,t,o,l,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=o,c.tailMode=u)}function Wf(e,t,o){var l=t.pendingProps,u=l.revealOrder,c=l.tail;if(gt(e,t,l.children,o),l=Me.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Hf(e,o,t);else if(e.tag===19)Hf(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(_e(Me,l),!(t.mode&1))t.memoizedState=null;else switch(u){case"forwards":for(o=t.child,u=null;o!==null;)e=o.alternate,e!==null&&Ji(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=t.child,t.child=null):(u=o.sibling,o.sibling=null),Ua(t,!1,u,o,c);break;case"backwards":for(o=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Ji(e)===null){t.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}Ua(t,!0,o,null,c);break;case"together":Ua(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ll(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bn(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,!(o&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,o=Kn(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Kn(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function e0(e,t,o){switch(t.tag){case 3:Bf(t),Ur();break;case 5:rf(t);break;case 1:kt(t.type)&&Ui(t);break;case 4:ka(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,u=t.memoizedProps.value;_e(Gi,l._currentValue),l._currentValue=u;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(_e(Me,Me.current&1),t.flags|=128,null):o&t.child.childLanes?Uf(e,t,o):(_e(Me,Me.current&1),e=bn(e,t,o),e!==null?e.sibling:null);_e(Me,Me.current&1);break;case 19:if(l=(o&t.childLanes)!==0,e.flags&128){if(l)return Wf(e,t,o);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(Me,Me.current),l)break;return null;case 22:case 23:return t.lanes=0,Of(e,t,o)}return bn(e,t,o)}var Vf,Ha,Qf,Kf;Vf=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ha=function(){},Qf=function(e,t,o,l){var u=e.memoizedProps;if(u!==l){e=t.stateNode,sr(sn.current);var c=null;switch(o){case"input":u=Ke(e,u),l=Ke(e,l),c=[];break;case"select":u=Y({},u,{value:void 0}),l=Y({},l,{value:void 0}),c=[];break;case"textarea":u=yn(e,u),l=yn(e,l),c=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=Fi)}Es(o,l);var p;o=null;for(I in u)if(!l.hasOwnProperty(I)&&u.hasOwnProperty(I)&&u[I]!=null)if(I==="style"){var E=u[I];for(p in E)E.hasOwnProperty(p)&&(o||(o={}),o[p]="")}else I!=="dangerouslySetInnerHTML"&&I!=="children"&&I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&I!=="autoFocus"&&(a.hasOwnProperty(I)?c||(c=[]):(c=c||[]).push(I,null));for(I in l){var A=l[I];if(E=u!=null?u[I]:void 0,l.hasOwnProperty(I)&&A!==E&&(A!=null||E!=null))if(I==="style")if(E){for(p in E)!E.hasOwnProperty(p)||A&&A.hasOwnProperty(p)||(o||(o={}),o[p]="");for(p in A)A.hasOwnProperty(p)&&E[p]!==A[p]&&(o||(o={}),o[p]=A[p])}else o||(c||(c=[]),c.push(I,o)),o=A;else I==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,E=E?E.__html:void 0,A!=null&&E!==A&&(c=c||[]).push(I,A)):I==="children"?typeof A!="string"&&typeof A!="number"||(c=c||[]).push(I,""+A):I!=="suppressContentEditableWarning"&&I!=="suppressHydrationWarning"&&(a.hasOwnProperty(I)?(A!=null&&I==="onScroll"&&Oe("scroll",e),c||E===A||(c=[])):(c=c||[]).push(I,A))}o&&(c=c||[]).push("style",o);var I=c;(t.updateQueue=I)&&(t.flags|=4)}},Kf=function(e,t,o,l){o!==l&&(t.flags|=4)};function Qo(e,t){if(!Be)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ft(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,l=0;if(t)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=o,t}function t0(e,t,o){var l=t.pendingProps;switch(da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(t),null;case 1:return kt(t.type)&&Mi(),ft(t),null;case 3:return l=t.stateNode,Qr(),ze(wt),ze(ct),ba(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vt!==null&&(eu(Vt),Vt=null))),Ha(e,t),ft(t),null;case 5:Sa(t);var u=sr(Mo.current);if(o=t.type,e!==null&&t.stateNode!=null)Qf(e,t,o,l,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(i(166));return ft(t),null}if(e=sr(sn.current),Qi(t)){l=t.stateNode,o=t.type;var c=t.memoizedProps;switch(l[ln]=t,l[_o]=c,e=(t.mode&1)!==0,o){case"dialog":Oe("cancel",l),Oe("close",l);break;case"iframe":case"object":case"embed":Oe("load",l);break;case"video":case"audio":for(u=0;u<Lo.length;u++)Oe(Lo[u],l);break;case"source":Oe("error",l);break;case"img":case"image":case"link":Oe("error",l),Oe("load",l);break;case"details":Oe("toggle",l);break;case"input":We(l,c),Oe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!c.multiple},Oe("invalid",l);break;case"textarea":po(l,c),Oe("invalid",l)}Es(o,c),u=null;for(var p in c)if(c.hasOwnProperty(p)){var E=c[p];p==="children"?typeof E=="string"?l.textContent!==E&&(c.suppressHydrationWarning!==!0&&zi(l.textContent,E,e),u=["children",E]):typeof E=="number"&&l.textContent!==""+E&&(c.suppressHydrationWarning!==!0&&zi(l.textContent,E,e),u=["children",""+E]):a.hasOwnProperty(p)&&E!=null&&p==="onScroll"&&Oe("scroll",l)}switch(o){case"input":ge(l),nn(l,c,!0);break;case"textarea":ge(l),Nc(l);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(l.onclick=Fi)}l=u,t.updateQueue=l,l!==null&&(t.flags|=4)}else{p=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jc(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=p.createElement(o,{is:l.is}):(e=p.createElement(o),o==="select"&&(p=e,l.multiple?p.multiple=!0:l.size&&(p.size=l.size))):e=p.createElementNS(e,o),e[ln]=t,e[_o]=l,Vf(e,t,!1,!1),t.stateNode=e;e:{switch(p=bs(o,l),o){case"dialog":Oe("cancel",e),Oe("close",e),u=l;break;case"iframe":case"object":case"embed":Oe("load",e),u=l;break;case"video":case"audio":for(u=0;u<Lo.length;u++)Oe(Lo[u],e);u=l;break;case"source":Oe("error",e),u=l;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),u=l;break;case"details":Oe("toggle",e),u=l;break;case"input":We(e,l),u=Ke(e,l),Oe("invalid",e);break;case"option":u=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},u=Y({},l,{value:void 0}),Oe("invalid",e);break;case"textarea":po(e,l),u=yn(e,l),Oe("invalid",e);break;default:u=l}Es(o,u),E=u;for(c in E)if(E.hasOwnProperty(c)){var A=E[c];c==="style"?Dc(e,A):c==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Lc(e,A)):c==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&ho(e,A):typeof A=="number"&&ho(e,""+A):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(a.hasOwnProperty(c)?A!=null&&c==="onScroll"&&Oe("scroll",e):A!=null&&O(e,c,A,p))}switch(o){case"input":ge(e),nn(e,l,!1);break;case"textarea":ge(e),Nc(e);break;case"option":l.value!=null&&e.setAttribute("value",""+pe(l.value));break;case"select":e.multiple=!!l.multiple,c=l.value,c!=null?rn(e,!!l.multiple,c,!1):l.defaultValue!=null&&rn(e,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Fi)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ft(t),null;case 6:if(e&&t.stateNode!=null)Kf(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(o=sr(Mo.current),sr(sn.current),Qi(t)){if(l=t.stateNode,o=t.memoizedProps,l[ln]=t,(c=l.nodeValue!==o)&&(e=Pt,e!==null))switch(e.tag){case 3:zi(l.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(l.nodeValue,o,(e.mode&1)!==0)}c&&(t.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ln]=t,t.stateNode=l}return ft(t),null;case 13:if(ze(Me),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Be&&Nt!==null&&t.mode&1&&!(t.flags&128))qd(),Ur(),t.flags|=98560,c=!1;else if(c=Qi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[ln]=t}else Ur(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ft(t),c=!1}else Vt!==null&&(eu(Vt),Vt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=o,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Ze===0&&(Ze=3):ru())),t.updateQueue!==null&&(t.flags|=4),ft(t),null);case 4:return Qr(),Ha(e,t),e===null&&Io(t.stateNode.containerInfo),ft(t),null;case 10:return ya(t.type._context),ft(t),null;case 17:return kt(t.type)&&Mi(),ft(t),null;case 19:if(ze(Me),c=t.memoizedState,c===null)return ft(t),null;if(l=(t.flags&128)!==0,p=c.rendering,p===null)if(l)Qo(c,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(p=Ji(e),p!==null){for(t.flags|=128,Qo(c,!1),l=p.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=o,o=t.child;o!==null;)c=o,e=l,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return _e(Me,Me.current&1|2),t.child}e=e.sibling}c.tail!==null&&Ge()>Yr&&(t.flags|=128,l=!0,Qo(c,!1),t.lanes=4194304)}else{if(!l)if(e=Ji(p),e!==null){if(t.flags|=128,l=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),Qo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Be)return ft(t),null}else 2*Ge()-c.renderingStartTime>Yr&&o!==1073741824&&(t.flags|=128,l=!0,Qo(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(o=c.last,o!==null?o.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Ge(),t.sibling=null,o=Me.current,_e(Me,l?o&1|2:o&1),t):(ft(t),null);case 22:case 23:return nu(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?jt&1073741824&&(ft(t),t.subtreeFlags&6&&(t.flags|=8192)):ft(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function n0(e,t){switch(da(t),t.tag){case 1:return kt(t.type)&&Mi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),ze(wt),ze(ct),ba(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sa(t),null;case 13:if(ze(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ur()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Me),null;case 4:return Qr(),null;case 10:return ya(t.type._context),null;case 22:case 23:return nu(),null;case 24:return null;default:return null}}var sl=!1,pt=!1,r0=typeof WeakSet=="function"?WeakSet:Set,re=null;function Gr(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Ve(e,t,l)}else o.current=null}function Wa(e,t,o){try{o()}catch(l){Ve(e,t,l)}}var Gf=!1;function o0(e,t){if(na=Ri,e=Cd(),Gs(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{o.nodeType,c.nodeType}catch{o=null;break e}var p=0,E=-1,A=-1,I=0,H=0,V=e,U=null;t:for(;;){for(var ee;V!==o||u!==0&&V.nodeType!==3||(E=p+u),V!==c||l!==0&&V.nodeType!==3||(A=p+l),V.nodeType===3&&(p+=V.nodeValue.length),(ee=V.firstChild)!==null;)U=V,V=ee;for(;;){if(V===e)break t;if(U===o&&++I===u&&(E=p),U===c&&++H===l&&(A=p),(ee=V.nextSibling)!==null)break;V=U,U=V.parentNode}V=ee}o=E===-1||A===-1?null:{start:E,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(ra={focusedElem:e,selectionRange:o},Ri=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var ie=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var le=ie.memoizedProps,qe=ie.memoizedState,N=t.stateNode,$=N.getSnapshotBeforeUpdate(t.elementType===t.type?le:Qt(t.type,le),qe);N.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var L=t.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(G){Ve(t,t.return,G)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return ie=Gf,Gf=!1,ie}function Ko(e,t,o){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&e)===e){var c=u.destroy;u.destroy=void 0,c!==void 0&&Wa(t,o,c)}u=u.next}while(u!==l)}}function al(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var l=o.create;o.destroy=l()}o=o.next}while(o!==t)}}function Va(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function qf(e){var t=e.alternate;t!==null&&(e.alternate=null,qf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ln],delete t[_o],delete t[sa],delete t[By],delete t[My])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yf(e){return e.tag===5||e.tag===3||e.tag===4}function Xf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qa(e,t,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Fi));else if(l!==4&&(e=e.child,e!==null))for(Qa(e,t,o),e=e.sibling;e!==null;)Qa(e,t,o),e=e.sibling}function Ka(e,t,o){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ka(e,t,o),e=e.sibling;e!==null;)Ka(e,t,o),e=e.sibling}var it=null,Kt=!1;function Un(e,t,o){for(o=o.child;o!==null;)Jf(e,t,o),o=o.sibling}function Jf(e,t,o){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(ki,o)}catch{}switch(o.tag){case 5:pt||Gr(o,t);case 6:var l=it,u=Kt;it=null,Un(e,t,o),it=l,Kt=u,it!==null&&(Kt?(e=it,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):it.removeChild(o.stateNode));break;case 18:it!==null&&(Kt?(e=it,o=o.stateNode,e.nodeType===8?la(e.parentNode,o):e.nodeType===1&&la(e,o),Co(e)):la(it,o.stateNode));break;case 4:l=it,u=Kt,it=o.stateNode.containerInfo,Kt=!0,Un(e,t,o),it=l,Kt=u;break;case 0:case 11:case 14:case 15:if(!pt&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var c=u,p=c.destroy;c=c.tag,p!==void 0&&(c&2||c&4)&&Wa(o,t,p),u=u.next}while(u!==l)}Un(e,t,o);break;case 1:if(!pt&&(Gr(o,t),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(E){Ve(o,t,E)}Un(e,t,o);break;case 21:Un(e,t,o);break;case 22:o.mode&1?(pt=(l=pt)||o.memoizedState!==null,Un(e,t,o),pt=l):Un(e,t,o);break;default:Un(e,t,o)}}function Zf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new r0),t.forEach(function(l){var u=p0.bind(null,e,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Gt(e,t){var o=t.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var c=e,p=t,E=p;e:for(;E!==null;){switch(E.tag){case 5:it=E.stateNode,Kt=!1;break e;case 3:it=E.stateNode.containerInfo,Kt=!0;break e;case 4:it=E.stateNode.containerInfo,Kt=!0;break e}E=E.return}if(it===null)throw Error(i(160));Jf(c,p,u),it=null,Kt=!1;var A=u.alternate;A!==null&&(A.return=null),u.return=null}catch(I){Ve(u,t,I)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ep(t,e),t=t.sibling}function ep(e,t){var o=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Gt(t,e),un(e),l&4){try{Ko(3,e,e.return),al(3,e)}catch(le){Ve(e,e.return,le)}try{Ko(5,e,e.return)}catch(le){Ve(e,e.return,le)}}break;case 1:Gt(t,e),un(e),l&512&&o!==null&&Gr(o,o.return);break;case 5:if(Gt(t,e),un(e),l&512&&o!==null&&Gr(o,o.return),e.flags&32){var u=e.stateNode;try{ho(u,"")}catch(le){Ve(e,e.return,le)}}if(l&4&&(u=e.stateNode,u!=null)){var c=e.memoizedProps,p=o!==null?o.memoizedProps:c,E=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{E==="input"&&c.type==="radio"&&c.name!=null&&mt(u,c),bs(E,p);var I=bs(E,c);for(p=0;p<A.length;p+=2){var H=A[p],V=A[p+1];H==="style"?Dc(u,V):H==="dangerouslySetInnerHTML"?Lc(u,V):H==="children"?ho(u,V):O(u,H,V,I)}switch(E){case"input":$t(u,c);break;case"textarea":ks(u,c);break;case"select":var U=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!c.multiple;var ee=c.value;ee!=null?rn(u,!!c.multiple,ee,!1):U!==!!c.multiple&&(c.defaultValue!=null?rn(u,!!c.multiple,c.defaultValue,!0):rn(u,!!c.multiple,c.multiple?[]:"",!1))}u[_o]=c}catch(le){Ve(e,e.return,le)}}break;case 6:if(Gt(t,e),un(e),l&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,c=e.memoizedProps;try{u.nodeValue=c}catch(le){Ve(e,e.return,le)}}break;case 3:if(Gt(t,e),un(e),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Co(t.containerInfo)}catch(le){Ve(e,e.return,le)}break;case 4:Gt(t,e),un(e);break;case 13:Gt(t,e),un(e),u=e.child,u.flags&8192&&(c=u.memoizedState!==null,u.stateNode.isHidden=c,!c||u.alternate!==null&&u.alternate.memoizedState!==null||(Ya=Ge())),l&4&&Zf(e);break;case 22:if(H=o!==null&&o.memoizedState!==null,e.mode&1?(pt=(I=pt)||H,Gt(t,e),pt=I):Gt(t,e),un(e),l&8192){if(I=e.memoizedState!==null,(e.stateNode.isHidden=I)&&!H&&e.mode&1)for(re=e,H=e.child;H!==null;){for(V=re=H;re!==null;){switch(U=re,ee=U.child,U.tag){case 0:case 11:case 14:case 15:Ko(4,U,U.return);break;case 1:Gr(U,U.return);var ie=U.stateNode;if(typeof ie.componentWillUnmount=="function"){l=U,o=U.return;try{t=l,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(le){Ve(l,o,le)}}break;case 5:Gr(U,U.return);break;case 22:if(U.memoizedState!==null){rp(V);continue}}ee!==null?(ee.return=U,re=ee):rp(V)}H=H.sibling}e:for(H=null,V=e;;){if(V.tag===5){if(H===null){H=V;try{u=V.stateNode,I?(c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(E=V.stateNode,A=V.memoizedProps.style,p=A!=null&&A.hasOwnProperty("display")?A.display:null,E.style.display=Ic("display",p))}catch(le){Ve(e,e.return,le)}}}else if(V.tag===6){if(H===null)try{V.stateNode.nodeValue=I?"":V.memoizedProps}catch(le){Ve(e,e.return,le)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;H===V&&(H=null),V=V.return}H===V&&(H=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Gt(t,e),un(e),l&4&&Zf(e);break;case 21:break;default:Gt(t,e),un(e)}}function un(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(Yf(o)){var l=o;break e}o=o.return}throw Error(i(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(ho(u,""),l.flags&=-33);var c=Xf(e);Ka(e,c,u);break;case 3:case 4:var p=l.stateNode.containerInfo,E=Xf(e);Qa(e,E,p);break;default:throw Error(i(161))}}catch(A){Ve(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function i0(e,t,o){re=e,tp(e)}function tp(e,t,o){for(var l=(e.mode&1)!==0;re!==null;){var u=re,c=u.child;if(u.tag===22&&l){var p=u.memoizedState!==null||sl;if(!p){var E=u.alternate,A=E!==null&&E.memoizedState!==null||pt;E=sl;var I=pt;if(sl=p,(pt=A)&&!I)for(re=u;re!==null;)p=re,A=p.child,p.tag===22&&p.memoizedState!==null?op(u):A!==null?(A.return=p,re=A):op(u);for(;c!==null;)re=c,tp(c),c=c.sibling;re=u,sl=E,pt=I}np(e)}else u.subtreeFlags&8772&&c!==null?(c.return=u,re=c):np(e)}}function np(e){for(;re!==null;){var t=re;if(t.flags&8772){var o=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pt||al(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!pt)if(o===null)l.componentDidMount();else{var u=t.elementType===t.type?o.memoizedProps:Qt(t.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&nf(t,c,l);break;case 3:var p=t.updateQueue;if(p!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}nf(t,p,o)}break;case 5:var E=t.stateNode;if(o===null&&t.flags&4){o=E;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var I=t.alternate;if(I!==null){var H=I.memoizedState;if(H!==null){var V=H.dehydrated;V!==null&&Co(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}pt||t.flags&512&&Va(t)}catch(U){Ve(t,t.return,U)}}if(t===e){re=null;break}if(o=t.sibling,o!==null){o.return=t.return,re=o;break}re=t.return}}function rp(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,re=o;break}re=t.return}}function op(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{al(4,t)}catch(A){Ve(t,o,A)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var u=t.return;try{l.componentDidMount()}catch(A){Ve(t,u,A)}}var c=t.return;try{Va(t)}catch(A){Ve(t,c,A)}break;case 5:var p=t.return;try{Va(t)}catch(A){Ve(t,p,A)}}}catch(A){Ve(t,t.return,A)}if(t===e){re=null;break}var E=t.sibling;if(E!==null){E.return=t.return,re=E;break}re=t.return}}var l0=Math.ceil,ul=W.ReactCurrentDispatcher,Ga=W.ReactCurrentOwner,Bt=W.ReactCurrentBatchConfig,Ce=0,tt=null,Ye=null,lt=0,jt=0,qr=On(0),Ze=0,Go=null,ur=0,cl=0,qa=0,qo=null,Et=null,Ya=0,Yr=1/0,Cn=null,dl=!1,Xa=null,Hn=null,fl=!1,Wn=null,pl=0,Yo=0,Ja=null,hl=-1,ml=0;function yt(){return Ce&6?Ge():hl!==-1?hl:hl=Ge()}function Vn(e){return e.mode&1?Ce&2&&lt!==0?lt&-lt:Hy.transition!==null?(ml===0&&(ml=Yc()),ml):(e=Le,e!==0||(e=window.event,e=e===void 0?16:id(e.type)),e):1}function qt(e,t,o,l){if(50<Yo)throw Yo=0,Ja=null,Error(i(185));wo(e,o,l),(!(Ce&2)||e!==tt)&&(e===tt&&(!(Ce&2)&&(cl|=o),Ze===4&&Qn(e,lt)),bt(e,l),o===1&&Ce===0&&!(t.mode&1)&&(Yr=Ge()+500,Hi&&Fn()))}function bt(e,t){var o=e.callbackNode;Hg(e,t);var l=bi(e,e===tt?lt:0);if(l===0)o!==null&&Kc(o),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(o!=null&&Kc(o),t===1)e.tag===0?Uy(lp.bind(null,e)):Wd(lp.bind(null,e)),zy(function(){!(Ce&6)&&Fn()}),o=null;else{switch(Xc(l)){case 1:o=Ns;break;case 4:o=Gc;break;case 16:o=wi;break;case 536870912:o=qc;break;default:o=wi}o=hp(o,ip.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function ip(e,t){if(hl=-1,ml=0,Ce&6)throw Error(i(327));var o=e.callbackNode;if(Xr()&&e.callbackNode!==o)return null;var l=bi(e,e===tt?lt:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=gl(e,l);else{t=l;var u=Ce;Ce|=2;var c=ap();(tt!==e||lt!==t)&&(Cn=null,Yr=Ge()+500,dr(e,t));do try{u0();break}catch(E){sp(e,E)}while(!0);ga(),ul.current=c,Ce=u,Ye!==null?t=0:(tt=null,lt=0,t=Ze)}if(t!==0){if(t===2&&(u=js(e),u!==0&&(l=u,t=Za(e,u))),t===1)throw o=Go,dr(e,0),Qn(e,l),bt(e,Ge()),o;if(t===6)Qn(e,l);else{if(u=e.current.alternate,!(l&30)&&!s0(u)&&(t=gl(e,l),t===2&&(c=js(e),c!==0&&(l=c,t=Za(e,c))),t===1))throw o=Go,dr(e,0),Qn(e,l),bt(e,Ge()),o;switch(e.finishedWork=u,e.finishedLanes=l,t){case 0:case 1:throw Error(i(345));case 2:fr(e,Et,Cn);break;case 3:if(Qn(e,l),(l&130023424)===l&&(t=Ya+500-Ge(),10<t)){if(bi(e,0)!==0)break;if(u=e.suspendedLanes,(u&l)!==l){yt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=ia(fr.bind(null,e,Et,Cn),t);break}fr(e,Et,Cn);break;case 4:if(Qn(e,l),(l&4194240)===l)break;for(t=e.eventTimes,u=-1;0<l;){var p=31-Ht(l);c=1<<p,p=t[p],p>u&&(u=p),l&=~c}if(l=u,l=Ge()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*l0(l/1960))-l,10<l){e.timeoutHandle=ia(fr.bind(null,e,Et,Cn),l);break}fr(e,Et,Cn);break;case 5:fr(e,Et,Cn);break;default:throw Error(i(329))}}}return bt(e,Ge()),e.callbackNode===o?ip.bind(null,e):null}function Za(e,t){var o=qo;return e.current.memoizedState.isDehydrated&&(dr(e,t).flags|=256),e=gl(e,t),e!==2&&(t=Et,Et=o,t!==null&&eu(t)),e}function eu(e){Et===null?Et=e:Et.push.apply(Et,e)}function s0(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],c=u.getSnapshot;u=u.value;try{if(!Wt(c(),u))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qn(e,t){for(t&=~qa,t&=~cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-Ht(t),l=1<<o;e[o]=-1,t&=~l}}function lp(e){if(Ce&6)throw Error(i(327));Xr();var t=bi(e,0);if(!(t&1))return bt(e,Ge()),null;var o=gl(e,t);if(e.tag!==0&&o===2){var l=js(e);l!==0&&(t=l,o=Za(e,l))}if(o===1)throw o=Go,dr(e,0),Qn(e,t),bt(e,Ge()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,fr(e,Et,Cn),bt(e,Ge()),null}function tu(e,t){var o=Ce;Ce|=1;try{return e(t)}finally{Ce=o,Ce===0&&(Yr=Ge()+500,Hi&&Fn())}}function cr(e){Wn!==null&&Wn.tag===0&&!(Ce&6)&&Xr();var t=Ce;Ce|=1;var o=Bt.transition,l=Le;try{if(Bt.transition=null,Le=1,e)return e()}finally{Le=l,Bt.transition=o,Ce=t,!(Ce&6)&&Fn()}}function nu(){jt=qr.current,ze(qr)}function dr(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,Oy(o)),Ye!==null)for(o=Ye.return;o!==null;){var l=o;switch(da(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Mi();break;case 3:Qr(),ze(wt),ze(ct),ba();break;case 5:Sa(l);break;case 4:Qr();break;case 13:ze(Me);break;case 19:ze(Me);break;case 10:ya(l.type._context);break;case 22:case 23:nu()}o=o.return}if(tt=e,Ye=e=Kn(e.current,null),lt=jt=t,Ze=0,Go=null,qa=cl=ur=0,Et=qo=null,lr!==null){for(t=0;t<lr.length;t++)if(o=lr[t],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,c=o.pending;if(c!==null){var p=c.next;c.next=u,l.next=p}o.pending=l}lr=null}return e}function sp(e,t){do{var o=Ye;try{if(ga(),Zi.current=rl,el){for(var l=Ue.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}el=!1}if(ar=0,et=Je=Ue=null,Uo=!1,Ho=0,Ga.current=null,o===null||o.return===null){Ze=1,Go=t,Ye=null;break}e:{var c=e,p=o.return,E=o,A=t;if(t=lt,E.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var I=A,H=E,V=H.tag;if(!(H.mode&1)&&(V===0||V===11||V===15)){var U=H.alternate;U?(H.updateQueue=U.updateQueue,H.memoizedState=U.memoizedState,H.lanes=U.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=jf(p);if(ee!==null){ee.flags&=-257,Lf(ee,p,E,c,t),ee.mode&1&&Nf(c,I,t),t=ee,A=I;var ie=t.updateQueue;if(ie===null){var le=new Set;le.add(A),t.updateQueue=le}else ie.add(A);break e}else{if(!(t&1)){Nf(c,I,t),ru();break e}A=Error(i(426))}}else if(Be&&E.mode&1){var qe=jf(p);if(qe!==null){!(qe.flags&65536)&&(qe.flags|=256),Lf(qe,p,E,c,t),ha(Kr(A,E));break e}}c=A=Kr(A,E),Ze!==4&&(Ze=2),qo===null?qo=[c]:qo.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var N=Tf(c,A,t);tf(c,N);break e;case 1:E=A;var $=c.type,L=c.stateNode;if(!(c.flags&128)&&(typeof $.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(Hn===null||!Hn.has(L)))){c.flags|=65536,t&=-t,c.lanes|=t;var G=Pf(c,E,t);tf(c,G);break e}}c=c.return}while(c!==null)}cp(o)}catch(ae){t=ae,Ye===o&&o!==null&&(Ye=o=o.return);continue}break}while(!0)}function ap(){var e=ul.current;return ul.current=rl,e===null?rl:e}function ru(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),tt===null||!(ur&268435455)&&!(cl&268435455)||Qn(tt,lt)}function gl(e,t){var o=Ce;Ce|=2;var l=ap();(tt!==e||lt!==t)&&(Cn=null,dr(e,t));do try{a0();break}catch(u){sp(e,u)}while(!0);if(ga(),Ce=o,ul.current=l,Ye!==null)throw Error(i(261));return tt=null,lt=0,Ze}function a0(){for(;Ye!==null;)up(Ye)}function u0(){for(;Ye!==null&&!Ig();)up(Ye)}function up(e){var t=pp(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?cp(e):Ye=t,Ga.current=null}function cp(e){var t=e;do{var o=t.alternate;if(e=t.return,t.flags&32768){if(o=n0(o,t),o!==null){o.flags&=32767,Ye=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Ye=null;return}}else if(o=t0(o,t,jt),o!==null){Ye=o;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Ze===0&&(Ze=5)}function fr(e,t,o){var l=Le,u=Bt.transition;try{Bt.transition=null,Le=1,c0(e,t,o,l)}finally{Bt.transition=u,Le=l}return null}function c0(e,t,o,l){do Xr();while(Wn!==null);if(Ce&6)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var c=o.lanes|o.childLanes;if(Wg(e,c),e===tt&&(Ye=tt=null,lt=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||fl||(fl=!0,hp(wi,function(){return Xr(),null})),c=(o.flags&15990)!==0,o.subtreeFlags&15990||c){c=Bt.transition,Bt.transition=null;var p=Le;Le=1;var E=Ce;Ce|=4,Ga.current=null,o0(e,o),ep(o,e),Py(ra),Ri=!!na,ra=na=null,e.current=o,i0(o),Dg(),Ce=E,Le=p,Bt.transition=c}else e.current=o;if(fl&&(fl=!1,Wn=e,pl=u),c=e.pendingLanes,c===0&&(Hn=null),zg(o.stateNode),bt(e,Ge()),t!==null)for(l=e.onRecoverableError,o=0;o<t.length;o++)u=t[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(dl)throw dl=!1,e=Xa,Xa=null,e;return pl&1&&e.tag!==0&&Xr(),c=e.pendingLanes,c&1?e===Ja?Yo++:(Yo=0,Ja=e):Yo=0,Fn(),null}function Xr(){if(Wn!==null){var e=Xc(pl),t=Bt.transition,o=Le;try{if(Bt.transition=null,Le=16>e?16:e,Wn===null)var l=!1;else{if(e=Wn,Wn=null,pl=0,Ce&6)throw Error(i(331));var u=Ce;for(Ce|=4,re=e.current;re!==null;){var c=re,p=c.child;if(re.flags&16){var E=c.deletions;if(E!==null){for(var A=0;A<E.length;A++){var I=E[A];for(re=I;re!==null;){var H=re;switch(H.tag){case 0:case 11:case 15:Ko(8,H,c)}var V=H.child;if(V!==null)V.return=H,re=V;else for(;re!==null;){H=re;var U=H.sibling,ee=H.return;if(qf(H),H===I){re=null;break}if(U!==null){U.return=ee,re=U;break}re=ee}}}var ie=c.alternate;if(ie!==null){var le=ie.child;if(le!==null){ie.child=null;do{var qe=le.sibling;le.sibling=null,le=qe}while(le!==null)}}re=c}}if(c.subtreeFlags&2064&&p!==null)p.return=c,re=p;else e:for(;re!==null;){if(c=re,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Ko(9,c,c.return)}var N=c.sibling;if(N!==null){N.return=c.return,re=N;break e}re=c.return}}var $=e.current;for(re=$;re!==null;){p=re;var L=p.child;if(p.subtreeFlags&2064&&L!==null)L.return=p,re=L;else e:for(p=$;re!==null;){if(E=re,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:al(9,E)}}catch(ae){Ve(E,E.return,ae)}if(E===p){re=null;break e}var G=E.sibling;if(G!==null){G.return=E.return,re=G;break e}re=E.return}}if(Ce=u,Fn(),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(ki,e)}catch{}l=!0}return l}finally{Le=o,Bt.transition=t}}return!1}function dp(e,t,o){t=Kr(o,t),t=Tf(e,t,1),e=Mn(e,t,1),t=yt(),e!==null&&(wo(e,1,t),bt(e,t))}function Ve(e,t,o){if(e.tag===3)dp(e,e,o);else for(;t!==null;){if(t.tag===3){dp(t,e,o);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Hn===null||!Hn.has(l))){e=Kr(o,e),e=Pf(t,e,1),t=Mn(t,e,1),e=yt(),t!==null&&(wo(t,1,e),bt(t,e));break}}t=t.return}}function d0(e,t,o){var l=e.pingCache;l!==null&&l.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&o,tt===e&&(lt&o)===o&&(Ze===4||Ze===3&&(lt&130023424)===lt&&500>Ge()-Ya?dr(e,0):qa|=o),bt(e,t)}function fp(e,t){t===0&&(e.mode&1?(t=Ei,Ei<<=1,!(Ei&130023424)&&(Ei=4194304)):t=1);var o=yt();e=Sn(e,t),e!==null&&(wo(e,t,o),bt(e,o))}function f0(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),fp(e,o)}function p0(e,t){var o=0;switch(e.tag){case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(t),fp(e,o)}var pp;pp=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||wt.current)St=!0;else{if(!(e.lanes&o)&&!(t.flags&128))return St=!1,e0(e,t,o);St=!!(e.flags&131072)}else St=!1,Be&&t.flags&1048576&&Vd(t,Vi,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ll(e,t),e=t.pendingProps;var u=Fr(t,ct.current);Vr(t,o),u=Ra(null,t,l,e,u,o);var c=$a();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kt(l)?(c=!0,Ui(t)):c=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,wa(t),u.updater=ol,t.stateNode=u,u._reactInternals=t,Ia(t,l,e,o),t=za(null,t,l,!0,c,o)):(t.tag=0,Be&&c&&ca(t),gt(null,t,u,o),t=t.child),t;case 16:l=t.elementType;e:{switch(ll(e,t),e=t.pendingProps,u=l._init,l=u(l._payload),t.type=l,u=t.tag=m0(l),e=Qt(l,e),u){case 0:t=Oa(null,t,l,e,o);break e;case 1:t=Ff(null,t,l,e,o);break e;case 11:t=If(null,t,l,e,o);break e;case 14:t=Df(null,t,l,Qt(l.type,e),o);break e}throw Error(i(306,l,""))}return t;case 0:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Qt(l,u),Oa(e,t,l,u,o);case 1:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Qt(l,u),Ff(e,t,l,u,o);case 3:e:{if(Bf(t),e===null)throw Error(i(387));l=t.pendingProps,c=t.memoizedState,u=c.element,ef(e,t),Xi(t,l,null,o);var p=t.memoizedState;if(l=p.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){u=Kr(Error(i(423)),t),t=Mf(e,t,l,o,u);break e}else if(l!==u){u=Kr(Error(i(424)),t),t=Mf(e,t,l,o,u);break e}else for(Nt=_n(t.stateNode.containerInfo.firstChild),Pt=t,Be=!0,Vt=null,o=Jd(t,null,l,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ur(),l===u){t=bn(e,t,o);break e}gt(e,t,l,o)}t=t.child}return t;case 5:return rf(t),e===null&&pa(t),l=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,p=u.children,oa(l,u)?p=null:c!==null&&oa(l,c)&&(t.flags|=32),zf(e,t),gt(e,t,p,o),t.child;case 6:return e===null&&pa(t),null;case 13:return Uf(e,t,o);case 4:return ka(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Hr(t,null,l,o):gt(e,t,l,o),t.child;case 11:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Qt(l,u),If(e,t,l,u,o);case 7:return gt(e,t,t.pendingProps,o),t.child;case 8:return gt(e,t,t.pendingProps.children,o),t.child;case 12:return gt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(l=t.type._context,u=t.pendingProps,c=t.memoizedProps,p=u.value,_e(Gi,l._currentValue),l._currentValue=p,c!==null)if(Wt(c.value,p)){if(c.children===u.children&&!wt.current){t=bn(e,t,o);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var E=c.dependencies;if(E!==null){p=c.child;for(var A=E.firstContext;A!==null;){if(A.context===l){if(c.tag===1){A=En(-1,o&-o),A.tag=2;var I=c.updateQueue;if(I!==null){I=I.shared;var H=I.pending;H===null?A.next=A:(A.next=H.next,H.next=A),I.pending=A}}c.lanes|=o,A=c.alternate,A!==null&&(A.lanes|=o),va(c.return,o,t),E.lanes|=o;break}A=A.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(i(341));p.lanes|=o,E=p.alternate,E!==null&&(E.lanes|=o),va(p,o,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}gt(e,t,u.children,o),t=t.child}return t;case 9:return u=t.type,l=t.pendingProps.children,Vr(t,o),u=zt(u),l=l(u),t.flags|=1,gt(e,t,l,o),t.child;case 14:return l=t.type,u=Qt(l,t.pendingProps),u=Qt(l.type,u),Df(e,t,l,u,o);case 15:return _f(e,t,t.type,t.pendingProps,o);case 17:return l=t.type,u=t.pendingProps,u=t.elementType===l?u:Qt(l,u),ll(e,t),t.tag=1,kt(l)?(e=!0,Ui(t)):e=!1,Vr(t,o),Rf(t,l,u),Ia(t,l,u,o),za(null,t,l,!0,e,o);case 19:return Wf(e,t,o);case 22:return Of(e,t,o)}throw Error(i(156,t.tag))};function hp(e,t){return Qc(e,t)}function h0(e,t,o,l){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,t,o,l){return new h0(e,t,o,l)}function ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function m0(e){if(typeof e=="function")return ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===Ae)return 14}return 2}function Kn(e,t){var o=e.alternate;return o===null?(o=Mt(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function yl(e,t,o,l,u,c){var p=2;if(l=e,typeof e=="function")ou(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case q:return pr(o.children,u,c,t);case fe:p=8,u|=8;break;case me:return e=Mt(12,o,t,u|2),e.elementType=me,e.lanes=c,e;case Te:return e=Mt(13,o,t,u),e.elementType=Te,e.lanes=c,e;case $e:return e=Mt(19,o,t,u),e.elementType=$e,e.lanes=c,e;case we:return vl(o,u,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case be:p=10;break e;case Ie:p=9;break e;case Ee:p=11;break e;case Ae:p=14;break e;case Pe:p=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Mt(p,o,t,u),t.elementType=e,t.type=l,t.lanes=c,t}function pr(e,t,o,l){return e=Mt(7,e,l,t),e.lanes=o,e}function vl(e,t,o,l){return e=Mt(22,e,l,t),e.elementType=we,e.lanes=o,e.stateNode={isHidden:!1},e}function iu(e,t,o){return e=Mt(6,e,null,t),e.lanes=o,e}function lu(e,t,o){return t=Mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function g0(e,t,o,l,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ls(0),this.expirationTimes=Ls(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ls(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function su(e,t,o,l,u,c,p,E,A){return e=new g0(e,t,o,E,A),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Mt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},wa(c),e}function y0(e,t,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:l==null?null:""+l,children:e,containerInfo:t,implementation:o}}function mp(e){if(!e)return zn;e=e._reactInternals;e:{if(tr(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(kt(o))return Ud(e,o,t)}return t}function gp(e,t,o,l,u,c,p,E,A){return e=su(o,l,!0,e,u,c,p,E,A),e.context=mp(null),o=e.current,l=yt(),u=Vn(o),c=En(l,u),c.callback=t??null,Mn(o,c,u),e.current.lanes=u,wo(e,u,l),bt(e,l),e}function xl(e,t,o,l){var u=t.current,c=yt(),p=Vn(u);return o=mp(o),t.context===null?t.context=o:t.pendingContext=o,t=En(c,p),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Mn(u,t,p),e!==null&&(qt(e,u,p,c),Yi(e,u,p)),p}function wl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function yp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function au(e,t){yp(e,t),(e=e.alternate)&&yp(e,t)}var vp=typeof reportError=="function"?reportError:function(e){console.error(e)};function uu(e){this._internalRoot=e}kl.prototype.render=uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));xl(e,t,null,null)},kl.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){xl(null,e,null,null)}),t[vn]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ed();e={blockedOn:null,target:e,priority:t};for(var o=0;o<Ln.length&&t!==0&&t<Ln[o].priority;o++);Ln.splice(o,0,e),o===0&&rd(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xp(){}function v0(e,t,o,l,u){if(u){if(typeof l=="function"){var c=l;l=function(){var I=wl(p);c.call(I)}}var p=gp(t,l,e,0,null,!1,!1,"",xp);return e._reactRootContainer=p,e[vn]=p.current,Io(e.nodeType===8?e.parentNode:e),cr(),p}for(;u=e.lastChild;)e.removeChild(u);if(typeof l=="function"){var E=l;l=function(){var I=wl(A);E.call(I)}}var A=su(e,0,!1,null,null,!1,!1,"",xp);return e._reactRootContainer=A,e[vn]=A.current,Io(e.nodeType===8?e.parentNode:e),cr(function(){xl(t,A,o,l)}),A}function El(e,t,o,l,u){var c=o._reactRootContainer;if(c){var p=c;if(typeof u=="function"){var E=u;u=function(){var A=wl(p);E.call(A)}}xl(t,p,e,u)}else p=v0(o,t,e,u,l);return wl(p)}Jc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=xo(t.pendingLanes);o!==0&&(Is(t,o|1),bt(t,Ge()),!(Ce&6)&&(Yr=Ge()+500,Fn()))}break;case 13:cr(function(){var l=Sn(e,1);if(l!==null){var u=yt();qt(l,e,1,u)}}),au(e,1)}},Ds=function(e){if(e.tag===13){var t=Sn(e,134217728);if(t!==null){var o=yt();qt(t,e,134217728,o)}au(e,134217728)}},Zc=function(e){if(e.tag===13){var t=Vn(e),o=Sn(e,t);if(o!==null){var l=yt();qt(o,e,t,l)}au(e,t)}},ed=function(){return Le},td=function(e,t){var o=Le;try{return Le=e,t()}finally{Le=o}},Rs=function(e,t,o){switch(t){case"input":if($t(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var l=o[t];if(l!==e&&l.form===e.form){var u=Bi(l);if(!u)throw Error(i(90));Se(l),$t(l,u)}}}break;case"textarea":ks(e,o);break;case"select":t=o.value,t!=null&&rn(e,!!o.multiple,t,!1)}},Fc=tu,Bc=cr;var x0={usingClientEntryPoint:!1,Events:[Oo,Or,Bi,Oc,zc,tu]},Xo={findFiberByHostInstance:nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Wc(e),e===null?null:e.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{ki=bl.inject(w0),on=bl}catch{}}return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0,Ct.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(t))throw Error(i(200));return y0(e,t,null,o)},Ct.createRoot=function(e,t){if(!cu(e))throw Error(i(299));var o=!1,l="",u=vp;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=su(e,1,!1,null,null,o,!1,l,u),e[vn]=t.current,Io(e.nodeType===8?e.parentNode:e),new uu(t)},Ct.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Wc(t),e=e===null?null:e.stateNode,e},Ct.flushSync=function(e){return cr(e)},Ct.hydrate=function(e,t,o){if(!Sl(t))throw Error(i(200));return El(null,e,t,!0,o)},Ct.hydrateRoot=function(e,t,o){if(!cu(e))throw Error(i(405));var l=o!=null&&o.hydratedSources||null,u=!1,c="",p=vp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(c=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),t=gp(t,null,e,1,o??null,u,!1,c,p),e[vn]=t.current,Io(e),l)for(e=0;e<l.length;e++)o=l[e],u=o._getVersion,u=u(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,u]:t.mutableSourceEagerHydrationData.push(o,u);return new kl(t)},Ct.render=function(e,t,o){if(!Sl(t))throw Error(i(200));return El(null,e,t,!1,o)},Ct.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(i(40));return e._reactRootContainer?(cr(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[vn]=null})}),!0):!1},Ct.unstable_batchedUpdates=tu,Ct.unstable_renderSubtreeIntoContainer=function(e,t,o,l){if(!Sl(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return El(e,t,o,!1,l)},Ct.version="18.3.1-next-f1338f8080-20240426",Ct}var Rp;function bh(){if(Rp)return pu.exports;Rp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),pu.exports=T0(),pu.exports}var $p;function P0(){if($p)return Cl;$p=1;var n=bh();return Cl.createRoot=n.createRoot,Cl.hydrateRoot=n.hydrateRoot,Cl}var N0=P0(),ot=function(){return ot=Object.assign||function(r){for(var i,s=1,a=arguments.length;s<a;s++){i=arguments[s];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(r[d]=i[d])}return r},ot.apply(this,arguments)};function oi(n,r,i){if(i||arguments.length===2)for(var s=0,a=r.length,d;s<a;s++)(d||!(s in r))&&(d||(d=Array.prototype.slice.call(r,0,s)),d[s]=r[s]);return n.concat(d||Array.prototype.slice.call(r))}var Fe="-ms-",ri="-moz-",Ne="-webkit-",Ch="comm",Zl="rule",tc="decl",j0="@import",Ah="@keyframes",L0="@layer",Rh=Math.abs,nc=String.fromCharCode,Pu=Object.assign;function I0(n,r){return rt(n,0)^45?(((r<<2^rt(n,0))<<2^rt(n,1))<<2^rt(n,2))<<2^rt(n,3):0}function $h(n){return n.trim()}function Rn(n,r){return(n=r.exec(n))?n[0]:n}function ve(n,r,i){return n.replace(r,i)}function jl(n,r,i){return n.indexOf(r,i)}function rt(n,r){return n.charCodeAt(r)|0}function no(n,r,i){return n.slice(r,i)}function dn(n){return n.length}function Th(n){return n.length}function ni(n,r){return r.push(n),n}function D0(n,r){return n.map(r).join("")}function Tp(n,r){return n.filter(function(i){return!Rn(i,r)})}var es=1,ro=1,Ph=0,Ut=0,Xe=0,so="";function ts(n,r,i,s,a,d,f,m){return{value:n,root:r,parent:i,type:s,props:a,children:d,line:es,column:ro,length:f,return:"",siblings:m}}function qn(n,r){return Pu(ts("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function Jr(n){for(;n.root;)n=qn(n.root,{children:[n]});ni(n,n.siblings)}function _0(){return Xe}function O0(){return Xe=Ut>0?rt(so,--Ut):0,ro--,Xe===10&&(ro=1,es--),Xe}function Xt(){return Xe=Ut<Ph?rt(so,Ut++):0,ro++,Xe===10&&(ro=1,es++),Xe}function vr(){return rt(so,Ut)}function Ll(){return Ut}function ns(n,r){return no(so,n,r)}function Nu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function z0(n){return es=ro=1,Ph=dn(so=n),Ut=0,[]}function F0(n){return so="",n}function gu(n){return $h(ns(Ut-1,ju(n===91?n+2:n===40?n+1:n)))}function B0(n){for(;(Xe=vr())&&Xe<33;)Xt();return Nu(n)>2||Nu(Xe)>3?"":" "}function M0(n,r){for(;--r&&Xt()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return ns(n,Ll()+(r<6&&vr()==32&&Xt()==32))}function ju(n){for(;Xt();)switch(Xe){case n:return Ut;case 34:case 39:n!==34&&n!==39&&ju(Xe);break;case 40:n===41&&ju(n);break;case 92:Xt();break}return Ut}function U0(n,r){for(;Xt()&&n+Xe!==57;)if(n+Xe===84&&vr()===47)break;return"/*"+ns(r,Ut-1)+"*"+nc(n===47?n:Xt())}function H0(n){for(;!Nu(vr());)Xt();return ns(n,Ut)}function W0(n){return F0(Il("",null,null,null,[""],n=z0(n),0,[0],n))}function Il(n,r,i,s,a,d,f,m,h){for(var g=0,w=0,y=f,S=0,R=0,k=0,C=1,b=1,P=1,j=0,O="",W=a,Q=d,K=s,q=O;b;)switch(k=j,j=Xt()){case 40:if(k!=108&&rt(q,y-1)==58){jl(q+=ve(gu(j),"&","&\f"),"&\f",Rh(g?m[g-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:q+=gu(j);break;case 9:case 10:case 13:case 32:q+=B0(k);break;case 92:q+=M0(Ll()-1,7);continue;case 47:switch(vr()){case 42:case 47:ni(V0(U0(Xt(),Ll()),r,i,h),h);break;default:q+="/"}break;case 123*C:m[g++]=dn(q)*P;case 125*C:case 59:case 0:switch(j){case 0:case 125:b=0;case 59+w:P==-1&&(q=ve(q,/\f/g,"")),R>0&&dn(q)-y&&ni(R>32?Np(q+";",s,i,y-1,h):Np(ve(q," ","")+";",s,i,y-2,h),h);break;case 59:q+=";";default:if(ni(K=Pp(q,r,i,g,w,a,m,O,W=[],Q=[],y,d),d),j===123)if(w===0)Il(q,r,K,K,W,d,y,m,Q);else switch(S===99&&rt(q,3)===110?100:S){case 100:case 108:case 109:case 115:Il(n,K,K,s&&ni(Pp(n,K,K,0,0,a,m,O,a,W=[],y,Q),Q),a,Q,y,m,s?W:Q);break;default:Il(q,K,K,K,[""],Q,0,m,Q)}}g=w=R=0,C=P=1,O=q="",y=f;break;case 58:y=1+dn(q),R=k;default:if(C<1){if(j==123)--C;else if(j==125&&C++==0&&O0()==125)continue}switch(q+=nc(j),j*C){case 38:P=w>0?1:(q+="\f",-1);break;case 44:m[g++]=(dn(q)-1)*P,P=1;break;case 64:vr()===45&&(q+=gu(Xt())),S=vr(),w=y=dn(O=q+=H0(Ll())),j++;break;case 45:k===45&&dn(q)==2&&(C=0)}}return d}function Pp(n,r,i,s,a,d,f,m,h,g,w,y){for(var S=a-1,R=a===0?d:[""],k=Th(R),C=0,b=0,P=0;C<s;++C)for(var j=0,O=no(n,S+1,S=Rh(b=f[C])),W=n;j<k;++j)(W=$h(b>0?R[j]+" "+O:ve(O,/&\f/g,R[j])))&&(h[P++]=W);return ts(n,r,i,a===0?Zl:m,h,g,w,y)}function V0(n,r,i,s){return ts(n,r,i,Ch,nc(_0()),no(n,2,-2),0,s)}function Np(n,r,i,s,a){return ts(n,r,i,tc,no(n,0,s),no(n,s+1,-1),s,a)}function Nh(n,r,i){switch(I0(n,r)){case 5103:return Ne+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ne+n+n;case 4789:return ri+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ne+n+ri+n+Fe+n+n;case 5936:switch(rt(n,r+11)){case 114:return Ne+n+Fe+ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ne+n+Fe+ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ne+n+Fe+ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ne+n+Fe+n+n;case 6165:return Ne+n+Fe+"flex-"+n+n;case 5187:return Ne+n+ve(n,/(\w+).+(:[^]+)/,Ne+"box-$1$2"+Fe+"flex-$1$2")+n;case 5443:return Ne+n+Fe+"flex-item-"+ve(n,/flex-|-self/g,"")+(Rn(n,/flex-|baseline/)?"":Fe+"grid-row-"+ve(n,/flex-|-self/g,""))+n;case 4675:return Ne+n+Fe+"flex-line-pack"+ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ne+n+Fe+ve(n,"shrink","negative")+n;case 5292:return Ne+n+Fe+ve(n,"basis","preferred-size")+n;case 6060:return Ne+"box-"+ve(n,"-grow","")+Ne+n+Fe+ve(n,"grow","positive")+n;case 4554:return Ne+ve(n,/([^-])(transform)/g,"$1"+Ne+"$2")+n;case 6187:return ve(ve(ve(n,/(zoom-|grab)/,Ne+"$1"),/(image-set)/,Ne+"$1"),n,"")+n;case 5495:case 3959:return ve(n,/(image-set\([^]*)/,Ne+"$1$`$1");case 4968:return ve(ve(n,/(.+:)(flex-)?(.*)/,Ne+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ne+n+n;case 4200:if(!Rn(n,/flex-|baseline/))return Fe+"grid-column-align"+no(n,r)+n;break;case 2592:case 3360:return Fe+ve(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(s,a){return r=a,Rn(s.props,/grid-\w+-end/)})?~jl(n+(i=i[r].value),"span",0)?n:Fe+ve(n,"-start","")+n+Fe+"grid-row-span:"+(~jl(i,"span",0)?Rn(i,/\d+/):+Rn(i,/\d+/)-+Rn(n,/\d+/))+";":Fe+ve(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(s){return Rn(s.props,/grid-\w+-start/)})?n:Fe+ve(ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ve(n,/(.+)-inline(.+)/,Ne+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(n)-1-r>6)switch(rt(n,r+1)){case 109:if(rt(n,r+4)!==45)break;case 102:return ve(n,/(.+:)(.+)-([^]+)/,"$1"+Ne+"$2-$3$1"+ri+(rt(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~jl(n,"stretch",0)?Nh(ve(n,"stretch","fill-available"),r,i)+n:n}break;case 5152:case 5920:return ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,a,d,f,m,h,g){return Fe+a+":"+d+g+(f?Fe+a+"-span:"+(m?h:+h-+d)+g:"")+n});case 4949:if(rt(n,r+6)===121)return ve(n,":",":"+Ne)+n;break;case 6444:switch(rt(n,rt(n,14)===45?18:11)){case 120:return ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ne+(rt(n,14)===45?"inline-":"")+"box$3$1"+Ne+"$2$3$1"+Fe+"$2box$3")+n;case 100:return ve(n,":",":"+Fe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(n,"scroll-","scroll-snap-")+n}return n}function Ul(n,r){for(var i="",s=0;s<n.length;s++)i+=r(n[s],s,n,r)||"";return i}function Q0(n,r,i,s){switch(n.type){case L0:if(n.children.length)break;case j0:case tc:return n.return=n.return||n.value;case Ch:return"";case Ah:return n.return=n.value+"{"+Ul(n.children,s)+"}";case Zl:if(!dn(n.value=n.props.join(",")))return""}return dn(i=Ul(n.children,s))?n.return=n.value+"{"+i+"}":""}function K0(n){var r=Th(n);return function(i,s,a,d){for(var f="",m=0;m<r;m++)f+=n[m](i,s,a,d)||"";return f}}function G0(n){return function(r){r.root||(r=r.return)&&n(r)}}function q0(n,r,i,s){if(n.length>-1&&!n.return)switch(n.type){case tc:n.return=Nh(n.value,n.length,i);return;case Ah:return Ul([qn(n,{value:ve(n.value,"@","@"+Ne)})],s);case Zl:if(n.length)return D0(i=n.props,function(a){switch(Rn(a,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(qn(n,{props:[ve(a,/:(read-\w+)/,":"+ri+"$1")]})),Jr(qn(n,{props:[a]})),Pu(n,{props:Tp(i,s)});break;case"::placeholder":Jr(qn(n,{props:[ve(a,/:(plac\w+)/,":"+Ne+"input-$1")]})),Jr(qn(n,{props:[ve(a,/:(plac\w+)/,":"+ri+"$1")]})),Jr(qn(n,{props:[ve(a,/:(plac\w+)/,Fe+"input-$1")]})),Jr(qn(n,{props:[a]})),Pu(n,{props:Tp(i,s)});break}return""})}}var Y0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},oo=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",jh="active",Lh="data-styled-version",rs="6.1.14",rc=`/*!sc*/
`,Hl=typeof window<"u"&&"HTMLElement"in window,X0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),J0={},os=Object.freeze([]),io=Object.freeze({});function Ih(n,r,i){return i===void 0&&(i=io),n.theme!==i.theme&&n.theme||r||i.theme}var Dh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Z0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ev=/(^-|-$)/g;function jp(n){return n.replace(Z0,"-").replace(ev,"")}var tv=/(a)(d)/gi,Al=52,Lp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Lu(n){var r,i="";for(r=Math.abs(n);r>Al;r=r/Al|0)i=Lp(r%Al)+i;return(Lp(r%Al)+i).replace(tv,"$1-$2")}var yu,_h=5381,to=function(n,r){for(var i=r.length;i;)n=33*n^r.charCodeAt(--i);return n},Oh=function(n){return to(_h,n)};function zh(n){return Lu(Oh(n)>>>0)}function nv(n){return n.displayName||n.name||"Component"}function vu(n){return typeof n=="string"&&!0}var Fh=typeof Symbol=="function"&&Symbol.for,Bh=Fh?Symbol.for("react.memo"):60115,rv=Fh?Symbol.for("react.forward_ref"):60112,ov={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Mh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lv=((yu={})[rv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yu[Bh]=Mh,yu);function Ip(n){return("type"in(r=n)&&r.type.$$typeof)===Bh?Mh:"$$typeof"in n?lv[n.$$typeof]:ov;var r}var sv=Object.defineProperty,av=Object.getOwnPropertyNames,Dp=Object.getOwnPropertySymbols,uv=Object.getOwnPropertyDescriptor,cv=Object.getPrototypeOf,_p=Object.prototype;function Uh(n,r,i){if(typeof r!="string"){if(_p){var s=cv(r);s&&s!==_p&&Uh(n,s,i)}var a=av(r);Dp&&(a=a.concat(Dp(r)));for(var d=Ip(n),f=Ip(r),m=0;m<a.length;++m){var h=a[m];if(!(h in iv||i&&i[h]||f&&h in f||d&&h in d)){var g=uv(r,h);try{sv(n,h,g)}catch{}}}}return n}function wr(n){return typeof n=="function"}function oc(n){return typeof n=="object"&&"styledComponentId"in n}function mr(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function Iu(n,r){if(n.length===0)return"";for(var i=n[0],s=1;s<n.length;s++)i+=n[s];return i}function ii(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Du(n,r,i){if(i===void 0&&(i=!1),!i&&!ii(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var s=0;s<r.length;s++)n[s]=Du(n[s],r[s]);else if(ii(r))for(var s in r)n[s]=Du(n[s],r[s]);return n}function ic(n,r){Object.defineProperty(n,"toString",{value:r})}function kr(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var dv=function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var i=0,s=0;s<r;s++)i+=this.groupSizes[s];return i},n.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var s=this.groupSizes,a=s.length,d=a;r>=d;)if((d<<=1)<0)throw kr(16,"".concat(r));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var f=a;f<d;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(r+1),h=(f=0,i.length);f<h;f++)this.tag.insertRule(m,i[f])&&(this.groupSizes[r]++,m++)},n.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],s=this.indexOfGroup(r),a=s+i;this.groupSizes[r]=0;for(var d=s;d<a;d++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var s=this.groupSizes[r],a=this.indexOfGroup(r),d=a+s,f=a;f<d;f++)i+="".concat(this.tag.getRule(f)).concat(rc);return i},n}(),Dl=new Map,Wl=new Map,_l=1,Rl=function(n){if(Dl.has(n))return Dl.get(n);for(;Wl.has(_l);)_l++;var r=_l++;return Dl.set(n,r),Wl.set(r,n),r},fv=function(n,r){_l=r+1,Dl.set(n,r),Wl.set(r,n)},pv="style[".concat(oo,"][").concat(Lh,'="').concat(rs,'"]'),hv=new RegExp("^".concat(oo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mv=function(n,r,i){for(var s,a=i.split(","),d=0,f=a.length;d<f;d++)(s=a[d])&&n.registerName(r,s)},gv=function(n,r){for(var i,s=((i=r.textContent)!==null&&i!==void 0?i:"").split(rc),a=[],d=0,f=s.length;d<f;d++){var m=s[d].trim();if(m){var h=m.match(hv);if(h){var g=0|parseInt(h[1],10),w=h[2];g!==0&&(fv(w,g),mv(n,w,h[3]),n.getTag().insertRules(g,a)),a.length=0}else a.push(m)}}},Op=function(n){for(var r=document.querySelectorAll(pv),i=0,s=r.length;i<s;i++){var a=r[i];a&&a.getAttribute(oo)!==jh&&(gv(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function yv(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hh=function(n){var r=document.head,i=n||r,s=document.createElement("style"),a=function(m){var h=Array.from(m.querySelectorAll("style[".concat(oo,"]")));return h[h.length-1]}(i),d=a!==void 0?a.nextSibling:null;s.setAttribute(oo,jh),s.setAttribute(Lh,rs);var f=yv();return f&&s.setAttribute("nonce",f),i.insertBefore(s,d),s},vv=function(){function n(r){this.element=Hh(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,a=0,d=s.length;a<d;a++){var f=s[a];if(f.ownerNode===i)return f}throw kr(17)}(this.element),this.length=0}return n.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},n}(),xv=function(){function n(r){this.element=Hh(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var s=document.createTextNode(i);return this.element.insertBefore(s,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n}(),wv=function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n}(),zp=Hl,kv={isServer:!Hl,useCSSOMInjection:!X0},Vl=function(){function n(r,i,s){r===void 0&&(r=io),i===void 0&&(i={});var a=this;this.options=ot(ot({},kv),r),this.gs=i,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Hl&&zp&&(zp=!1,Op(this)),ic(this,function(){return function(d){for(var f=d.getTag(),m=f.length,h="",g=function(y){var S=function(P){return Wl.get(P)}(y);if(S===void 0)return"continue";var R=d.names.get(S),k=f.getGroup(y);if(R===void 0||!R.size||k.length===0)return"continue";var C="".concat(oo,".g").concat(y,'[id="').concat(S,'"]'),b="";R!==void 0&&R.forEach(function(P){P.length>0&&(b+="".concat(P,","))}),h+="".concat(k).concat(C,'{content:"').concat(b,'"}').concat(rc)},w=0;w<m;w++)g(w);return h}(a)})}return n.registerId=function(r){return Rl(r)},n.prototype.rehydrate=function(){!this.server&&Hl&&Op(this)},n.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new n(ot(ot({},this.options),r),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var s=i.useCSSOMInjection,a=i.target;return i.isServer?new wv(a):s?new vv(a):new xv(a)}(this.options),new dv(r)));var r},n.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},n.prototype.registerName=function(r,i){if(Rl(r),this.names.has(r))this.names.get(r).add(i);else{var s=new Set;s.add(i),this.names.set(r,s)}},n.prototype.insertRules=function(r,i,s){this.registerName(r,i),this.getTag().insertRules(Rl(r),s)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(Rl(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Sv=/&/g,Ev=/^\s*\/\/.*$/gm;function Wh(n,r){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(s){return"".concat(r," ").concat(s)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Wh(i.children,r)),i})}function bv(n){var r,i,s,a=io,d=a.options,f=d===void 0?io:d,m=a.plugins,h=m===void 0?os:m,g=function(S,R,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(r):S},w=h.slice();w.push(function(S){S.type===Zl&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(Sv,i).replace(s,g))}),f.prefix&&w.push(q0),w.push(Q0);var y=function(S,R,k,C){R===void 0&&(R=""),k===void 0&&(k=""),C===void 0&&(C="&"),r=C,i=R,s=new RegExp("\\".concat(i,"\\b"),"g");var b=S.replace(Ev,""),P=W0(k||R?"".concat(k," ").concat(R," { ").concat(b," }"):b);f.namespace&&(P=Wh(P,f.namespace));var j=[];return Ul(P,K0(w.concat(G0(function(O){return j.push(O)})))),j};return y.hash=h.length?h.reduce(function(S,R){return R.name||kr(15),to(S,R.name)},_h).toString():"",y}var Cv=new Vl,_u=bv(),Vh=D.createContext({shouldForwardProp:void 0,styleSheet:Cv,stylis:_u});Vh.Consumer;D.createContext(void 0);function Ou(){return x.useContext(Vh)}var Av=function(){function n(r,i){var s=this;this.inject=function(a,d){d===void 0&&(d=_u);var f=s.name+d.hash;a.hasNameForId(s.id,f)||a.insertRules(s.id,f,d(s.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,ic(this,function(){throw kr(12,String(s.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=_u),this.name+r.hash},n}(),Rv=function(n){return n>="A"&&n<="Z"};function Fp(n){for(var r="",i=0;i<n.length;i++){var s=n[i];if(i===1&&s==="-"&&n[0]==="-")return n;Rv(s)?r+="-"+s.toLowerCase():r+=s}return r.startsWith("ms-")?"-"+r:r}var Qh=function(n){return n==null||n===!1||n===""},Kh=function(n){var r,i,s=[];for(var a in n){var d=n[a];n.hasOwnProperty(a)&&!Qh(d)&&(Array.isArray(d)&&d.isCss||wr(d)?s.push("".concat(Fp(a),":"),d,";"):ii(d)?s.push.apply(s,oi(oi(["".concat(a," {")],Kh(d),!1),["}"],!1)):s.push("".concat(Fp(a),": ").concat((r=a,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in Y0||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return s};function Yn(n,r,i,s){if(Qh(n))return[];if(oc(n))return[".".concat(n.styledComponentId)];if(wr(n)){if(!wr(d=n)||d.prototype&&d.prototype.isReactComponent||!r)return[n];var a=n(r);return Yn(a,r,i,s)}var d;return n instanceof Av?i?(n.inject(i,s),[n.getName(s)]):[n]:ii(n)?Kh(n):Array.isArray(n)?Array.prototype.concat.apply(os,n.map(function(f){return Yn(f,r,i,s)})):[n.toString()]}function Gh(n){for(var r=0;r<n.length;r+=1){var i=n[r];if(wr(i)&&!oc(i))return!1}return!0}var $v=Oh(rs),Tv=function(){function n(r,i,s){this.rules=r,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Gh(r),this.componentId=i,this.baseHash=to($v,i),this.baseStyle=s,Vl.registerId(i)}return n.prototype.generateAndInjectStyles=function(r,i,s){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))a=mr(a,this.staticRulesId);else{var d=Iu(Yn(this.rules,r,i,s)),f=Lu(to(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,f)){var m=s(d,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,m)}a=mr(a,f),this.staticRulesId=f}else{for(var h=to(this.baseHash,s.hash),g="",w=0;w<this.rules.length;w++){var y=this.rules[w];if(typeof y=="string")g+=y;else if(y){var S=Iu(Yn(y,r,i,s));h=to(h,S+w),g+=S}}if(g){var R=Lu(h>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,s(g,".".concat(R),void 0,this.componentId)),a=mr(a,R)}}return a},n}(),li=D.createContext(void 0);li.Consumer;function Pv(n){var r=D.useContext(li),i=x.useMemo(function(){return function(s,a){if(!s)throw kr(14);if(wr(s)){var d=s(a);return d}if(Array.isArray(s)||typeof s!="object")throw kr(8);return a?ot(ot({},a),s):s}(n.theme,r)},[n.theme,r]);return n.children?D.createElement(li.Provider,{value:i},n.children):null}var xu={};function Nv(n,r,i){var s=oc(n),a=n,d=!vu(n),f=r.attrs,m=f===void 0?os:f,h=r.componentId,g=h===void 0?function(W,Q){var K=typeof W!="string"?"sc":jp(W);xu[K]=(xu[K]||0)+1;var q="".concat(K,"-").concat(zh(rs+K+xu[K]));return Q?"".concat(Q,"-").concat(q):q}(r.displayName,r.parentComponentId):h,w=r.displayName,y=w===void 0?function(W){return vu(W)?"styled.".concat(W):"Styled(".concat(nv(W),")")}(n):w,S=r.displayName&&r.componentId?"".concat(jp(r.displayName),"-").concat(r.componentId):r.componentId||g,R=s&&a.attrs?a.attrs.concat(m).filter(Boolean):m,k=r.shouldForwardProp;if(s&&a.shouldForwardProp){var C=a.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;k=function(W,Q){return C(W,Q)&&b(W,Q)}}else k=C}var P=new Tv(i,S,s?a.componentStyle:void 0);function j(W,Q){return function(K,q,fe){var me=K.attrs,be=K.componentStyle,Ie=K.defaultProps,Ee=K.foldedComponentIds,Te=K.styledComponentId,$e=K.target,Ae=D.useContext(li),Pe=Ou(),we=K.shouldForwardProp||Pe.shouldForwardProp,B=Ih(q,Ae,Ie)||io,J=function(oe,te,se){for(var pe,F=ot(ot({},te),{className:void 0,theme:se}),ue=0;ue<oe.length;ue+=1){var ge=wr(pe=oe[ue])?pe(F):pe;for(var Se in ge)F[Se]=Se==="className"?mr(F[Se],ge[Se]):Se==="style"?ot(ot({},F[Se]),ge[Se]):ge[Se]}return te.className&&(F.className=mr(F.className,te.className)),F}(me,q,B),Y=J.as||$e,T={};for(var z in J)J[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&J.theme===B||(z==="forwardedAs"?T.as=J.forwardedAs:we&&!we(z,Y)||(T[z]=J[z]));var X=function(oe,te){var se=Ou(),pe=oe.generateAndInjectStyles(te,se.styleSheet,se.stylis);return pe}(be,J),Z=mr(Ee,Te);return X&&(Z+=" "+X),J.className&&(Z+=" "+J.className),T[vu(Y)&&!Dh.has(Y)?"class":"className"]=Z,fe&&(T.ref=fe),x.createElement(Y,T)}(O,W,Q)}j.displayName=y;var O=D.forwardRef(j);return O.attrs=R,O.componentStyle=P,O.displayName=y,O.shouldForwardProp=k,O.foldedComponentIds=s?mr(a.foldedComponentIds,a.styledComponentId):"",O.styledComponentId=S,O.target=s?a.target:n,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=s?function(Q){for(var K=[],q=1;q<arguments.length;q++)K[q-1]=arguments[q];for(var fe=0,me=K;fe<me.length;fe++)Du(Q,me[fe],!0);return Q}({},a.defaultProps,W):W}}),ic(O,function(){return".".concat(O.styledComponentId)}),d&&Uh(O,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function Bp(n,r){for(var i=[n[0]],s=0,a=r.length;s<a;s+=1)i.push(r[s],n[s+1]);return i}var Mp=function(n){return Object.assign(n,{isCss:!0})};function ne(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(wr(n)||ii(n))return Mp(Yn(Bp(os,oi([n],r,!0))));var s=n;return r.length===0&&s.length===1&&typeof s[0]=="string"?Yn(s):Mp(Yn(Bp(s,r)))}function zu(n,r,i){if(i===void 0&&(i=io),!r)throw kr(1,r);var s=function(a){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return n(r,i,ne.apply(void 0,oi([a],d,!1)))};return s.attrs=function(a){return zu(n,r,ot(ot({},i),{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},s.withConfig=function(a){return zu(n,r,ot(ot({},i),a))},s}var qh=function(n){return zu(Nv,n)},M=qh;Dh.forEach(function(n){M[n]=qh(n)});var jv=function(){function n(r,i){this.rules=r,this.componentId=i,this.isStatic=Gh(r),Vl.registerId(this.componentId+1)}return n.prototype.createStyles=function(r,i,s,a){var d=a(Iu(Yn(this.rules,i,s,a)),""),f=this.componentId+r;s.insertRules(f,f,d)},n.prototype.removeStyles=function(r,i){i.clearRules(this.componentId+r)},n.prototype.renderStyles=function(r,i,s,a){r>2&&Vl.registerId(this.componentId+r),this.removeStyles(r,s),this.createStyles(r,i,s,a)},n}();function Lv(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var s=ne.apply(void 0,oi([n],r,!1)),a="sc-global-".concat(zh(JSON.stringify(s))),d=new jv(s,a),f=function(h){var g=Ou(),w=D.useContext(li),y=D.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&m(y,h,g.styleSheet,w,g.stylis),D.useLayoutEffect(function(){if(!g.styleSheet.server)return m(y,h,g.styleSheet,w,g.stylis),function(){return d.removeStyles(y,g.styleSheet)}},[y,h,g.styleSheet,w,g.stylis]),null};function m(h,g,w,y,S){if(d.isStatic)d.renderStyles(h,J0,w,S);else{var R=ot(ot({},g),{theme:Ih(g,y,f.defaultProps)});d.renderStyles(h,R,w,S)}}return D.memo(f)}var Iv=`
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

`;const lc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",sc="inset 2px 2px 3px rgba(0,0,0,0.2)",Zt=()=>ne`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,en=({background:n="material",color:r="materialText"}={})=>ne`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:i})=>i[n]};
  color: ${({theme:i})=>i[r]};
`,ui=({mainColor:n="black",secondaryColor:r="transparent",pixelSize:i=2})=>ne`
  background-image: ${[`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`,`linear-gradient(
      45deg,
      ${n} 25%,
      transparent 25%,
      transparent 75%,
      ${n} 75%
    )`].join(",")};
  background-color: ${r};
  background-size: ${`${i*2}px ${i*2}px`};
  background-position: 0 0, ${`${i}px ${i}px`};
`,Sr=()=>ne`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,Zr={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},Dv=({theme:n,topLeftInner:r,bottomRightInner:i,hasShadow:s=!1,hasInsetShadow:a=!1})=>[s?lc:!1,a?sc:!1,r!==null?`inset 1px 1px 0px 1px ${n[r]}`:!1,i!==null?`inset -1px -1px 0 1px ${n[i]}`:!1].filter(Boolean).join(", "),Qe=({invert:n=!1,style:r="button"}={})=>{const i={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return ne`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:s})=>s[Zr[r][i.topLeftOuter]]};
    border-top-color: ${({theme:s})=>s[Zr[r][i.topLeftOuter]]};
    border-right-color: ${({theme:s})=>s[Zr[r][i.bottomRightOuter]]};
    border-bottom-color: ${({theme:s})=>s[Zr[r][i.bottomRightOuter]]};
    box-shadow: ${({theme:s,shadow:a})=>Dv({theme:s,topLeftInner:Zr[r][i.topLeftInner],bottomRightInner:Zr[r][i.bottomRightInner],hasShadow:a})};
  `},lo=()=>ne`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,_v=n=>Buffer.from(n).toString("base64"),Ov=typeof btoa<"u"?btoa:_v,$l=(n,r=0)=>{const i=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ov(i)})`},ac=(n="default")=>ne`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>ui({mainColor:n==="flat"?r.flatLight:r.material,secondaryColor:n==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${en()}
    ${n==="flat"?Sr():Qe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${en()}
    ${n==="flat"?Sr():Qe({style:"window"})}
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
    ${n==="default"?Qe({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:r})=>$l(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>$l(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>$l(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>$l(r.materialText,0)};
  }
`,zv=M.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,Fv=x.forwardRef(({children:n,underline:r=!0,...i},s)=>D.createElement(zv,{ref:s,underline:r,...i},n));Fv.displayName="Anchor";const Bv=M.header`
  ${Qe()};
  ${en()};

  position: ${n=>{var r;return(r=n.position)!==null&&r!==void 0?r:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Yh=x.forwardRef(({children:n,fixed:r=!0,position:i="fixed",...s},a)=>D.createElement(Bv,{fixed:r,position:r!==!1?i:void 0,ref:a,...s},n));Yh.displayName="AppBar";const Cr=()=>{};function gr(n,r,i){return i!==null&&n>i?i:r!==null&&n<r?r:n}function Mv(n){if(Math.abs(n)<1){const i=n.toExponential().split("e-"),s=i[0].split(".")[1];return(s?s.length:0)+parseInt(i[1],10)}const r=n.toString().split(".")[1];return r?r.length:0}function Up(n,r,i){const s=Math.round((n-i)/r)*r+i;return Number(s.toFixed(Mv(r)))}function Xn(n){return typeof n=="number"?`${n}px`:n}const Uv=M.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:r})=>!n&&`
    border-top: 2px solid ${r.borderDark};
    border-left: 2px solid ${r.borderDark};
    border-bottom: 2px solid ${r.borderLightest};
    border-right: 2px solid ${r.borderLightest};
    background: ${r.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,Hv=M.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Wv=x.forwardRef(({alt:n="",children:r,noBorder:i=!1,size:s=35,square:a=!1,src:d,...f},m)=>D.createElement(Uv,{noBorder:i,ref:m,size:Xn(s),square:a,src:d,...f},d?D.createElement(Hv,{src:d,alt:n}):r));Wv.displayName="Avatar";const ut={sm:"28px",md:"36px",lg:"44px"},Vv=ne`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>ut[n]};
  width: ${({fullWidth:n,size:r="md",square:i})=>n?"100%":i?ut[r]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:r})=>n&&!r&&"2px"};
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
`,is=M.button`
  ${({active:n,disabled:r,primary:i,theme:s,variant:a})=>a==="flat"?ne`
          ${Sr()}
          ${i?`
          border: 2px solid ${s.checkmark};
            outline: 2px solid ${s.flatDark};
            outline-offset: -4px;
          `:`
          border: 2px solid ${s.flatDark};
            outline: 2px solid transparent;
            outline-offset: -4px;
          `}
          &:focus:after, &:active:after {
            ${!n&&!r&&lo}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?ne`
          ${en()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!n&&Qe({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Qe({style:"buttonThinPressed"})}
          }
          ${n&&Qe({style:"buttonThinPressed"})}
          ${r&&Zt()}
        `:ne`
          ${en()};
          border: none;
          ${r&&Zt()}
          ${n?ui({mainColor:s.material,secondaryColor:s.borderLightest}):""}
          &:before {
            box-sizing: border-box;
            content: '';
            position: absolute;
            ${i?ne`
                  left: 2px;
                  top: 2px;
                  width: calc(100% - 4px);
                  height: calc(100% - 4px);
                  outline: 2px solid ${s.borderDarkest};
                `:ne`
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                `}

            ${Qe(n?{style:a==="raised"?"window":"button",invert:!0}:{style:a==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!r&&Qe({style:a==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!r&&lo}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${Vv}
`,xe=x.forwardRef(({onClick:n,disabled:r=!1,children:i,type:s="button",fullWidth:a=!1,size:d="md",square:f=!1,active:m=!1,onTouchStart:h=Cr,primary:g=!1,variant:w="default",...y},S)=>D.createElement(is,{active:m,disabled:r,$disabled:r,fullWidth:a,onClick:r?void 0:n,onTouchStart:h,primary:g,ref:S,size:d,square:f,type:s,variant:w,...y},i));xe.displayName="Button";function Jn({defaultValue:n,onChange:r,onChangePropName:i="onChange",readOnly:s,value:a,valuePropName:d="value"}){const f=a!==void 0,[m,h]=x.useState(n),g=x.useCallback(w=>{f||h(w)},[f]);if(f&&typeof r!="function"&&!s){const w=`Warning: You provided a \`${d}\` prop to a component without an \`${i}\` handler.${d==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${i}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${i}\` function that updates \`${d}\`.`}`;console.warn(w)}return[f?a:m,g]}const Fu=M.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>ut[n.size]};
  width: ${n=>n.square?ut[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>ut[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:r})=>!r&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&Zt()}
`,Jt=x.forwardRef(({size:n="lg",disabled:r,square:i,children:s,onClick:a,primary:d,...f},m)=>D.createElement(Fu,{$disabled:r,size:n,square:i,onClick:r?void 0:a,primary:d,role:"menuitem",ref:m,"aria-disabled":r,...f},s));Jt.displayName="MenuListItem";const ci=M.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Qe({style:"window"})}
  ${en()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;ci.displayName="MenuList";const fn=20,Ql=M.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${fn}px;
  height: ${fn}px;
  opacity: 0;
  z-index: -1;
`,uc=M.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&Zt()}

  ${Fu} & {
    margin: 0;
    height: 100%;
  }
  ${Fu}:hover & {
    ${({$disabled:n,theme:r})=>!n&&ne`
        color: ${r.materialTextInvert};
      `};
  }
`,cc=M.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Ql}:focus ~ & {
    ${lo}
  }
  ${Ql}:not(:disabled) ~ &:active {
    ${lo}
  }
`,hn=M.div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({theme:n})=>n.borderDark};
  border-top-color: ${({theme:n})=>n.borderDark};
  border-right-color: ${({theme:n})=>n.borderLightest};
  border-bottom-color: ${({theme:n})=>n.borderLightest};
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
    border-left-color: ${({theme:n})=>n.borderDarkest};
    border-top-color: ${({theme:n})=>n.borderDarkest};
    border-right-color: ${({theme:n})=>n.borderLight};
    border-bottom-color: ${({theme:n})=>n.borderLight};

    pointer-events: none;
    ${n=>n.shadow&&`box-shadow:${sc};`}
  }
`,Qv=M.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${ac()}
`,Xh=x.forwardRef(({children:n,shadow:r=!0,...i},s)=>D.createElement(hn,{ref:s,shadow:r,...i},D.createElement(Qv,null,n)));Xh.displayName="ScrollView";const Jh=ne`
  width: ${fn}px;
  height: ${fn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Kv=M(hn)`
  ${Jh}
  width: ${fn}px;
  height: ${fn}px;
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,Gv=M.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  ${Jh}
  width: ${fn-4}px;
  height: ${fn-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
`,qv=M.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:n,theme:r})=>n?r.checkmarkDisabled:r.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,Yv=M.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:r})=>ui({mainColor:n?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,Xv={flat:Gv,default:Kv},Zh=x.forwardRef(({checked:n,className:r="",defaultChecked:i=!1,disabled:s=!1,indeterminate:a=!1,label:d="",onChange:f=Cr,style:m={},value:h,variant:g="default",...w},y)=>{var S;const[R,k]=Jn({defaultValue:i,onChange:f,readOnly:(S=w.readOnly)!==null&&S!==void 0?S:s,value:n}),C=x.useCallback(j=>{const O=j.target.checked;k(O),f(j)},[f,k]),b=Xv[g];let P=null;return a?P=Yv:R&&(P=qv),D.createElement(uc,{$disabled:s,className:r,style:m},D.createElement(Ql,{disabled:s,onChange:s?void 0:C,readOnly:s,type:"checkbox",value:h,checked:R,"data-indeterminate":a,ref:y,...w}),D.createElement(b,{$disabled:s,role:"presentation"},P&&D.createElement(P,{$disabled:s,variant:g})),d&&D.createElement(cc,null,d))});Zh.displayName="Checkbox";const dc=M.div`
  ${({orientation:n,theme:r,size:i="100%"})=>n==="vertical"?`
    height: ${Xn(i)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${Xn(i)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;dc.displayName="Separator";const Jv=M(is)`
  padding-left: 8px;
`,Zv=M(dc)`
  height: 21px;
  position: relative;
  top: 0;
`,em=M.input`
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
`,ex=M.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?ne`
          border: 2px solid ${({theme:r})=>r.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:r})=>r.materialTextDisabledShadow}
          );
        `:ne`
          border: 2px solid ${({theme:r})=>r.materialText};
        `}
  ${em}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${lo}
    outline-offset: -8px;
  }
`,tx=M.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?ne`
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
    top: ${({variant:n})=>n==="flat"?"6px":"8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`,nx=x.forwardRef(({value:n,defaultValue:r,onChange:i=Cr,disabled:s=!1,variant:a="default",...d},f)=>{var m;const[h,g]=Jn({defaultValue:r,onChange:i,readOnly:(m=d.readOnly)!==null&&m!==void 0?m:s,value:n}),w=y=>{const S=y.target.value;g(S),i(y)};return D.createElement(Jv,{disabled:s,as:"div",variant:a,size:"md"},D.createElement(em,{onChange:w,readOnly:s,disabled:s,value:h??"#008080",type:"color",ref:f,...d}),D.createElement(ex,{$disabled:s,color:h??"#008080",role:"presentation"}),a==="default"&&D.createElement(Zv,{orientation:"vertical"}),D.createElement(tx,{$disabled:s,variant:a}))});nx.displayName="ColorInput";const rx=M.div`
  position: relative;
  --react95-digit-primary-color: #ff0102;
  --react95-digit-secondary-color: #740201;
  --react95-digit-bg-color: #000000;

  ${({pixelSize:n})=>ne`
    width: ${11*n}px;
    height: ${21*n}px;
    margin: ${n}px;

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
      ${ui({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
    }

    span.horizontal,
    span.horizontal:before,
    span.horizontal:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.horizontal.active,
    span.horizontal.active:before,
    span.horizontal.active:after {
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.horizontal {
      left: ${n}px;
      width: ${9*n}px;
    }
    span.horizontal:before {
      content: '';
      width: 100%;
      top: ${n}px;
      left: ${0}px;
    }
    span.horizontal:after {
      content: '';
      width: calc(100% - ${n*2}px);
      top: ${2*n}px;
      left: ${n}px;
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
      height: ${n}px;
      border-left: ${n}px solid var(--react95-digit-bg-color);
      border-right: ${n}px solid var(--react95-digit-bg-color);
    }
    span.center.active,
    span.center.active:before,
    span.center.active:after {
      border-left: ${n}px solid var(--react95-digit-primary-color);
      border-right: ${n}px solid var(--react95-digit-primary-color);
    }
    span.center {
      top: 50%;
      transform: translateY(-50%);
      left: ${n}px;
      width: ${9*n}px;
    }
    span.center:before,
    span.center:after {
      content: '';
      width: 100%;
    }
    span.center:before {
      top: ${n}px;
    }
    span.center:after {
      bottom: ${n}px;
    }

    span.vertical,
    span.vertical:before,
    span.vertical:after {
      width: ${n}px;
      border-top: ${n}px solid var(--react95-digit-bg-color);
      border-bottom: ${n}px solid var(--react95-digit-bg-color);
    }
    span.vertical {
      height: ${11*n}px;
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
      left: ${n}px;
    }
    span.vertical:after {
      content: '';
      height: calc(100% - ${n*2}px);
      top: ${n}px;
      left: ${n*2}px;
    }
  `}
`,Hp=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],ox=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function ix({digit:n=0,pixelSize:r=2,...i}){const s=ox[Number(n)].map((a,d)=>a?`${Hp[d]} active`:Hp[d]);return D.createElement(rx,{pixelSize:r,...i},s.map((a,d)=>D.createElement("span",{className:a,key:d})))}const lx=M.div`
  ${Qe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,sx={sm:1,md:2,lg:3,xl:4},ax=x.forwardRef(({value:n=0,minLength:r=3,size:i="md",...s},a)=>{const d=x.useMemo(()=>n.toString().padStart(r,"0").split(""),[r,n]);return D.createElement(lx,{ref:a,...s},d.map((f,m)=>D.createElement(ix,{digit:f,pixelSize:sx[i],key:m})))});ax.displayName="Counter";const tm=ne`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${ut.md};
`,ux=M(hn).attrs({"data-testid":"variant-default"})`
  ${tm}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
`,cx=M.div.attrs({"data-testid":"variant-flat"})`
  ${Sr()}
  ${tm}
  position: relative;
`,nm=ne`
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
  color: ${({theme:n})=>n.canvasText};
  ${({disabled:n,variant:r})=>r!=="flat"&&n&&Zt()}
`,dx=M.input`
  ${nm}
  padding: 0 8px;
`,fx=M.textarea`
  ${nm}
  padding: 8px;
  resize: none;
  ${({variant:n})=>ac(n)}
`,Ar=x.forwardRef(({className:n,disabled:r=!1,fullWidth:i,onChange:s=Cr,shadow:a=!0,style:d,variant:f="default",...m},h)=>{const g=f==="flat"?cx:ux,w=x.useMemo(()=>{var y;return m.multiline?D.createElement(fx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:h,variant:f,...m}):D.createElement(dx,{disabled:r,onChange:r?void 0:s,readOnly:r,ref:h,type:(y=m.type)!==null&&y!==void 0?y:"text",variant:f,...m})},[r,s,m,h,f]);return D.createElement(g,{className:n,fullWidth:i,$disabled:r,shadow:a,style:d},w)});Ar.displayName="TextInput";const px=M.div`
  display: inline-flex;
  align-items: center;
`,Bu=M(xe)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?ne`
          height: calc(50% - 1px);
        `:ne`
          height: 50%;
        `}
`,hx=M.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?ne`
          height: calc(${ut.md} - 4px);
        `:ne`
          height: ${ut.md};
          margin-left: 2px;
        `}
`,Wp=M.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?ne`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:r})=>r.materialText};
        `:ne`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:r})=>r.materialText};
        `}
  ${Bu}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?ne`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:ne`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,rm=x.forwardRef(({className:n,defaultValue:r,disabled:i=!1,max:s,min:a,onChange:d,readOnly:f,step:m=1,style:h,value:g,variant:w="default",width:y,...S},R)=>{const[k,C]=Jn({defaultValue:r,onChange:d,readOnly:f,value:g}),b=x.useCallback(K=>{const q=parseFloat(K.target.value);C(q)},[C]),P=x.useCallback(K=>{const q=gr(parseFloat(((k??0)+K).toFixed(2)),a??null,s??null);C(q),d==null||d(q)},[s,a,d,C,k]),j=x.useCallback(()=>{k!==void 0&&(d==null||d(k))},[d,k]),O=x.useCallback(()=>{P(m)},[P,m]),W=x.useCallback(()=>{P(-m)},[P,m]),Q=w==="flat"?"flat":"raised";return D.createElement(px,{className:n,style:{...h,width:y!==void 0?Xn(y):"auto"},...S},D.createElement(Ar,{value:k,variant:w,onChange:b,disabled:i,type:"number",readOnly:f,ref:R,fullWidth:!0,onBlur:j}),D.createElement(hx,{variant:w},D.createElement(Bu,{"data-testid":"increment",variant:Q,disabled:i||f,onClick:O},D.createElement(Wp,{invert:!0})),D.createElement(Bu,{"data-testid":"decrement",variant:Q,disabled:i||f,onClick:W},D.createElement(Wp,null))))});rm.displayName="NumberInput";function mx(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let i=0;i<10;i+=1)r+=n[Math.floor(Math.random()*n.length)];return r}const om=n=>x.useMemo(()=>mx(),[n]),im=ne`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,lm=ne`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,fc=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,gx=M.div`
  ${im}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${fc}:focus & {
    ${lm}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,sm=ne`
  height: ${ut.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:r})=>n?Zt():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,yx=M(hn)`
  ${sm}
  background: ${({$disabled:n=!1,theme:r})=>n?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,vx=M.div`
  ${Sr()}
  ${sm}
  background: ${({$disabled:n=!1,theme:r})=>n?r.flatLight:r.canvas};
`,xx=M.select`
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
  ${im}
  cursor: pointer;
  &:disabled {
    ${Zt()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,am=M(is).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?ne`
          height: 100%;
          margin-right: 0;
        `:ne`
          height: 100%;
        `}
  ${({native:n=!1,variant:r="default"})=>n&&(r==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:r=!1})=>n||r?"none":"auto"}
`,wx=M.span`
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
    ${({$disabled:n=!1,theme:r})=>n?r.materialTextDisabled:r.materialText};
  ${({$disabled:n=!1,theme:r})=>n&&`
    filter: drop-shadow(1px 1px 0px ${r.materialTextDisabledShadow});
    border-top-color: ${r.materialTextDisabled};
    `}
  ${am}:active & {
    margin-top: 2px;
  }
`,kx=M.ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({theme:n})=>n.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${lc};
  ${({variant:n="default"})=>n==="flat"?ne`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:ne`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:n="default"})=>ac(n)}
`,Sx=M.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ut.md} - 4px);
  line-height: calc(${ut.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?lm:""}
  user-select: none;
`,Ex=[],um=({className:n,defaultValue:r,disabled:i,native:s,onChange:a,options:d=Ex,readOnly:f,style:m,value:h,variant:g,width:w})=>{var y;const S=x.useMemo(()=>d.filter(Boolean),[d]),[R,k]=Jn({defaultValue:r??((y=S==null?void 0:S[0])===null||y===void 0?void 0:y.value),onChange:a,readOnly:f,value:h}),C=!(i||f),b=x.useMemo(()=>({className:n,style:{...m,width:w}}),[n,m,w]),P=x.useMemo(()=>D.createElement(am,{as:"div","data-testid":"select-button",$disabled:i,native:s,tabIndex:-1,variant:g==="flat"?"flat":"raised"},D.createElement(wx,{"data-testid":"select-icon",$disabled:i})),[i,s,g]),j=x.useMemo(()=>g==="flat"?vx:yx,[g]);return x.useMemo(()=>({isEnabled:C,options:S,value:R,setValue:k,wrapperProps:b,DropdownButton:P,Wrapper:j}),[P,j,C,S,k,R,b])},bx={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Cx=1e3,Ax=({onBlur:n,onChange:r,onClose:i,onFocus:s,onKeyDown:a,onMouseDown:d,onOpen:f,open:m,options:h,readOnly:g,value:w,selectRef:y,setValue:S,wrapperRef:R})=>{const k=x.useRef(null),C=x.useRef([]),b=x.useRef(0),P=x.useRef(0),j=x.useRef(),O=x.useRef("search"),W=x.useRef(""),Q=x.useRef(),[K,q]=Jn({defaultValue:!1,onChange:f,onChangePropName:"onOpen",readOnly:g,value:m,valuePropName:"open"}),fe=x.useMemo(()=>{const F=h.findIndex(ue=>ue.value===w);return b.current=gr(F,0,null),h[F]},[h,w]),[me,be]=x.useState(h[0]),Ie=x.useCallback(F=>{const ue=k.current,ge=C.current[F];if(!ge||!ue){j.current=F;return}j.current=void 0;const Se=ue.clientHeight,je=ue.scrollTop,Ke=ue.scrollTop+Se,We=ge.offsetTop,mt=ge.offsetHeight,$t=ge.offsetTop+ge.offsetHeight;We<je&&ue.scrollTo(0,We),$t>Ke&&ue.scrollTo(0,We-Se+mt),ge.focus({preventScroll:!0})},[k]),Ee=x.useCallback((F,{scroll:ue}={})=>{var ge;const Se=h.length-1;let je;switch(F){case"first":{je=0;break}case"last":{je=Se;break}case"next":{je=gr(P.current+1,0,Se);break}case"previous":{je=gr(P.current-1,0,Se);break}case"selected":{je=gr((ge=b.current)!==null&&ge!==void 0?ge:0,0,Se);break}default:je=F}P.current=je,be(h[je]),ue&&Ie(je)},[P,h,Ie]),Te=x.useCallback(({fromEvent:F})=>{q(!0),Ee("selected",{scroll:!0}),f==null||f({fromEvent:F})},[Ee,f,q]),$e=x.useCallback(()=>{O.current="search",W.current="",clearTimeout(Q.current)},[]),Ae=x.useCallback(({focusSelect:F,fromEvent:ue})=>{var ge;i==null||i({fromEvent:ue}),q(!1),be(h[0]),$e(),j.current=void 0,F&&((ge=y.current)===null||ge===void 0||ge.focus())},[$e,i,h,y,q]),Pe=x.useCallback(({fromEvent:F})=>{K?Ae({focusSelect:!1,fromEvent:F}):Te({fromEvent:F})},[Ae,Te,K]),we=x.useCallback((F,{fromEvent:ue})=>{b.current!==F&&(b.current=F,S(h[F].value),r==null||r(h[F],{fromEvent:ue}))},[r,h,S]),B=x.useCallback(({focusSelect:F,fromEvent:ue})=>{we(P.current,{fromEvent:ue}),Ae({focusSelect:F,fromEvent:ue})},[Ae,we]),J=x.useCallback((F,{fromEvent:ue,select:ge})=>{var Se;switch(O.current==="cycleFirstLetter"&&F!==W.current&&(O.current="search"),F===W.current?O.current="cycleFirstLetter":W.current+=F,O.current){case"search":{let je=h.findIndex(Ke=>{var We;return((We=Ke.label)===null||We===void 0?void 0:We.toLocaleUpperCase().indexOf(W.current))===0});je<0&&(je=h.findIndex(Ke=>{var We;return((We=Ke.label)===null||We===void 0?void 0:We.toLocaleUpperCase().indexOf(F))===0}),W.current=F),je>=0&&(ge?we(je,{fromEvent:ue}):Ee(je,{scroll:!0}));break}case"cycleFirstLetter":{const je=ge?(Se=b.current)!==null&&Se!==void 0?Se:-1:P.current;let Ke=h.findIndex((We,mt)=>{var $t;return mt>je&&(($t=We.label)===null||$t===void 0?void 0:$t.toLocaleUpperCase().indexOf(F))===0});Ke<0&&(Ke=h.findIndex(We=>{var mt;return((mt=We.label)===null||mt===void 0?void 0:mt.toLocaleUpperCase().indexOf(F))===0})),Ke>=0&&(ge?we(Ke,{fromEvent:ue}):Ee(Ke,{scroll:!0}));break}}clearTimeout(Q.current),Q.current=setTimeout(()=>{O.current==="search"&&(W.current="")},Cx)},[Ee,h,we]),Y=x.useCallback(F=>{var ue;F.button===0&&(F.preventDefault(),(ue=y.current)===null||ue===void 0||ue.focus(),Pe({fromEvent:F}),d==null||d(F))},[d,y,Pe]),T=x.useCallback(F=>{B({focusSelect:!0,fromEvent:F})},[B]),z=x.useCallback(F=>{const{altKey:ue,code:ge,ctrlKey:Se,metaKey:je,shiftKey:Ke}=F,{ARROW_DOWN:We,ARROW_UP:mt,END:$t,ENTER:nn,ESC:Dt,HOME:gn,SPACE:rn,TAB:yn}=bx,po=ue||Se||je||Ke;if(!(ge===yn&&(ue||Se||je)||ge!==yn&&po))switch(ge){case We:{if(F.preventDefault(),!K){Te({fromEvent:F});return}Ee("next",{scroll:!0});break}case mt:{if(F.preventDefault(),!K){Te({fromEvent:F});return}Ee("previous",{scroll:!0});break}case $t:{if(F.preventDefault(),!K){Te({fromEvent:F});return}Ee("last",{scroll:!0});break}case nn:{if(!K)return;F.preventDefault(),B({focusSelect:!0,fromEvent:F});break}case Dt:{if(!K)return;F.preventDefault(),Ae({focusSelect:!0,fromEvent:F});break}case gn:{if(F.preventDefault(),!K){Te({fromEvent:F});return}Ee("first",{scroll:!0});break}case rn:{F.preventDefault(),K?B({focusSelect:!0,fromEvent:F}):Te({fromEvent:F});break}case yn:{if(!K)return;Ke||F.preventDefault(),B({focusSelect:!Ke,fromEvent:F});break}default:!po&&ge.match(/^Key/)&&(F.preventDefault(),F.stopPropagation(),J(ge.replace(/^Key/,""),{select:!K,fromEvent:F}))}},[Ee,Ae,K,Te,J,B]),X=x.useCallback(F=>{z(F),a==null||a(F)},[z,a]),Z=x.useCallback(F=>{Ee(F)},[Ee]),oe=x.useCallback(F=>{K||($e(),n==null||n(F))},[$e,n,K]),te=x.useCallback(F=>{$e(),s==null||s(F)},[$e,s]),se=x.useCallback(F=>{k.current=F,j.current!==void 0&&Ie(j.current)},[Ie]),pe=x.useCallback((F,ue)=>{C.current[ue]=F,j.current===ue&&Ie(j.current)},[Ie]);return x.useEffect(()=>{if(!K)return()=>{};const F=ue=>{var ge;const Se=ue.target;!((ge=R.current)===null||ge===void 0)&&ge.contains(Se)||(ue.preventDefault(),Ae({focusSelect:!1,fromEvent:ue}))};return document.addEventListener("mousedown",F),()=>{document.removeEventListener("mousedown",F)}},[Ae,K,R]),x.useMemo(()=>({activeOption:me,handleActivateOptionIndex:Z,handleBlur:oe,handleButtonKeyDown:X,handleDropdownKeyDown:z,handleFocus:te,handleMouseDown:Y,handleOptionClick:T,handleSetDropdownRef:se,handleSetOptionRef:pe,open:K,selectedOption:fe}),[me,Z,oe,X,te,z,Y,T,se,pe,K,fe])},Rx=x.forwardRef(({className:n,defaultValue:r,disabled:i,onChange:s,options:a,readOnly:d,style:f,value:m,variant:h,width:g,...w},y)=>{const{isEnabled:S,options:R,setValue:k,value:C,DropdownButton:b,Wrapper:P}=um({defaultValue:r,disabled:i,native:!0,onChange:s,options:a,readOnly:d,value:m,variant:h}),j=x.useCallback(O=>{const W=R.find(Q=>Q.value===O.target.value);W&&(k(W.value),s==null||s(W,{fromEvent:O}))},[s,R,k]);return D.createElement(P,{className:n,style:{...f,width:g}},D.createElement(fc,null,D.createElement(xx,{...w,disabled:i,onChange:S?j:Cr,ref:y,value:C},R.map((O,W)=>{var Q;return D.createElement("option",{key:`${O.value}-${W}`,value:O.value},(Q=O.label)!==null&&Q!==void 0?Q:O.value)})),b))});Rx.displayName="SelectNative";function $x({activateOptionIndex:n,active:r,index:i,onClick:s,option:a,selected:d,setRef:f}){const m=x.useCallback(()=>{n(i)},[n,i]),h=x.useCallback(w=>{f(w,i)},[i,f]),g=om();return D.createElement(Sx,{active:r,"aria-selected":d?"true":void 0,"data-value":a.value,id:g,onClick:s,onMouseEnter:m,ref:h,role:"option",tabIndex:0},a.label)}function Tx({"aria-label":n,"aria-labelledby":r,className:i,defaultValue:s,disabled:a=!1,formatDisplay:d,inputProps:f,labelId:m,menuMaxHeight:h,name:g,onBlur:w,onChange:y,onClose:S,onFocus:R,onKeyDown:k,onMouseDown:C,onOpen:b,open:P,options:j,readOnly:O,shadow:W=!0,style:Q,variant:K="default",value:q,width:fe="auto",...me},be){const{isEnabled:Ie,options:Ee,setValue:Te,value:$e,wrapperProps:Ae,DropdownButton:Pe,Wrapper:we}=um({className:i,defaultValue:s,disabled:a,native:!1,onChange:y,options:j,style:Q,readOnly:O,value:q,variant:K,width:fe}),B=x.useRef(null),J=x.useRef(null),Y=x.useRef(null),{activeOption:T,handleActivateOptionIndex:z,handleBlur:X,handleButtonKeyDown:Z,handleDropdownKeyDown:oe,handleFocus:te,handleMouseDown:se,handleOptionClick:pe,handleSetDropdownRef:F,handleSetOptionRef:ue,open:ge,selectedOption:Se}=Ax({onBlur:w,onChange:y,onClose:S,onFocus:R,onKeyDown:k,onMouseDown:C,onOpen:b,open:P,options:Ee,value:$e,selectRef:J,setValue:Te,wrapperRef:Y});x.useImperativeHandle(be,()=>({focus:nn=>{var Dt;(Dt=J.current)===null||Dt===void 0||Dt.focus(nn)},node:B.current,value:String($e)}),[$e]);const je=x.useMemo(()=>Se?typeof d=="function"?d(Se):Se.label:"",[d,Se]),Ke=Ie?1:void 0,We=x.useMemo(()=>h?{overflow:"auto",maxHeight:h}:void 0,[h]),mt=om(),$t=x.useMemo(()=>Ee.map((nn,Dt)=>{const gn=`${$e}-${Dt}`,rn=nn===T,yn=nn===Se;return D.createElement($x,{activateOptionIndex:z,active:rn,index:Dt,key:gn,onClick:pe,option:nn,selected:yn,setRef:ue})}),[T,z,pe,ue,Ee,Se,$e]);return D.createElement(we,{...Ae,$disabled:a,ref:Y,shadow:W,style:{...Q,width:fe}},D.createElement("input",{name:g,ref:B,type:"hidden",value:String($e),...f}),D.createElement(fc,{"aria-disabled":a,"aria-expanded":ge,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":r??m,"aria-owns":Ie&&ge?mt:void 0,onBlur:X,onFocus:te,onKeyDown:Z,onMouseDown:Ie?se:C,ref:J,role:"button",tabIndex:Ke,...me},D.createElement(gx,null,je),Pe),Ie&&ge&&D.createElement(kx,{id:mt,onKeyDown:oe,ref:F,role:"listbox",style:We,tabIndex:0,variant:K},$t))}const pc=x.forwardRef(Tx);pc.displayName="Select";const Px=M.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,vt=x.forwardRef(function({children:r,noPadding:i=!1,...s},a){return D.createElement(Px,{noPadding:i,ref:a,...s},r)});vt.displayName="Toolbar";const Nx=M.div`
  padding: 16px;
`,xt=x.forwardRef(function({children:r,...i},s){return D.createElement(Nx,{ref:s,...i},r)});xt.displayName="WindowContent";const jx=M.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?ne`
          background: ${({theme:r})=>r.headerNotActiveBackground};
          color: ${({theme:r})=>r.headerNotActiveText};
        `:ne`
          background: ${({theme:r})=>r.headerBackground};
          color: ${({theme:r})=>r.headerText};
        `}

  ${is} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,hc=x.forwardRef(function({active:r=!0,children:i,...s},a){return D.createElement(jx,{active:r,ref:a,...s},i)});hc.displayName="WindowHeader";const Lx=M.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Qe({style:"window"})}
  ${en()}
`,Ix=M.span`
  ${({theme:n})=>ne`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${n.borderLightest} 16.67%,
      ${n.material} 16.67%,
      ${n.material} 33.33%,
      ${n.borderDark} 33.33%,
      ${n.borderDark} 50%,
      ${n.borderLightest} 50%,
      ${n.borderLightest} 66.67%,
      ${n.material} 66.67%,
      ${n.material} 83.33%,
      ${n.borderDark} 83.33%,
      ${n.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`,mc=x.forwardRef(({children:n,resizable:r=!1,resizeRef:i,shadow:s=!0,...a},d)=>D.createElement(Lx,{ref:d,shadow:s,...a},n,r&&D.createElement(Ix,{"data-testid":"resizeHandle",ref:i})));mc.displayName="Window";const Dx=M(Xh)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,_x=M.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,Ox=M.div`
  display: flex;
  flex-wrap: wrap;
`,An=M.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,zx=M.span`
  cursor: pointer;

  background: ${({active:n,theme:r})=>n?r.hoverBackground:"transparent"};
  color: ${({active:n,theme:r})=>n?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:r})=>r?"none":n.materialDark};
  }
`,Fx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function Bx(n,r){return new Date(n,r+1,0).getDate()}function Mx(n,r,i){return new Date(n,r,i).getDay()}function Ux(n){const r=new Date(Date.parse(n)),i=r.getUTCDate(),s=r.getUTCMonth(),a=r.getUTCFullYear();return{day:i,month:s,year:a}}const Hx=x.forwardRef(({className:n,date:r=new Date().toISOString(),onAccept:i,onCancel:s,shadow:a=!0},d)=>{const[f,m]=x.useState(()=>Ux(r)),{year:h,month:g,day:w}=f,y=x.useCallback(({value:b})=>{m(P=>({...P,month:b}))},[]),S=x.useCallback(b=>{m(P=>({...P,year:b}))},[]),R=x.useCallback(b=>{m(P=>({...P,day:b}))},[]),k=x.useCallback(()=>{const b=[f.year,f.month+1,f.day].map(P=>String(P).padStart(2,"0")).join("-");i==null||i(b)},[f.day,f.month,f.year,i]),C=x.useMemo(()=>{const b=Array.from({length:42}),P=Mx(h,g,1);let j=w;const O=Bx(h,g);return j=j<O?j:O,b.forEach((W,Q)=>{if(Q>=P&&Q<O+P){const K=Q-P+1;b[Q]=D.createElement(An,{key:Q,onClick:()=>{R(K)}},D.createElement(zx,{active:K===j},K))}else b[Q]=D.createElement(An,{key:Q})}),b},[w,R,g,h]);return D.createElement(mc,{className:n,ref:d,shadow:a,style:{margin:20}},D.createElement(hc,null,D.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),D.createElement(xt,null,D.createElement(vt,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(pc,{options:Fx,value:g,onChange:y,width:128,menuMaxHeight:200}),D.createElement(rm,{value:h,onChange:S,width:100})),D.createElement(Dx,null,D.createElement(_x,null,D.createElement(An,null,"S"),D.createElement(An,null,"M"),D.createElement(An,null,"T"),D.createElement(An,null,"W"),D.createElement(An,null,"T"),D.createElement(An,null,"F"),D.createElement(An,null,"S")),D.createElement(Ox,null,C)),D.createElement(vt,{noPadding:!0,style:{justifyContent:"space-between"}},D.createElement(xe,{fullWidth:!0,onClick:s,disabled:!s},"Cancel"),D.createElement(xe,{fullWidth:!0,onClick:i?k:void 0,disabled:!i},"OK"))))});Hx.displayName="DatePicker";const Wx=n=>{switch(n){case"status":case"well":return ne`
        ${Qe({style:"status"})}
      `;case"window":case"outside":return ne`
        ${Qe({style:"window"})}
      `;case"field":return ne`
        ${Qe({style:"field"})}
      `;default:return ne`
        ${Qe()}
      `}},Vx=M.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>Wx(n)}
  ${({variant:n})=>en(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Rt=x.forwardRef(({children:n,shadow:r=!1,variant:i="window",...s},a)=>D.createElement(Vx,{ref:a,shadow:r,variant:i,...s},n));Rt.displayName="Frame";const Qx=M.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:r})=>r==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&ne`
      box-shadow: -1px -1px 0 1px ${({theme:r})=>r.borderDark},
        inset -1px -1px 0 1px ${({theme:r})=>r.borderDark};
    `}
  ${n=>n.$disabled&&Zt()}
`,Kx=M.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:r})=>r==="flat"?n.canvas:n.material};
`,cm=x.forwardRef(({label:n,disabled:r=!1,variant:i="default",children:s,...a},d)=>D.createElement(Qx,{"aria-disabled":r,$disabled:r,variant:i,ref:d,...a},n&&D.createElement(Kx,{variant:i},n),s));cm.displayName="GroupBox";const Gx=M.div`
  ${({theme:n,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Xn(r)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;Gx.displayName="Handle";const qx="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Yx=M.div`
  display: inline-block;
  height: ${({size:n})=>Xn(n)};
  width: ${({size:n})=>Xn(n)};
`,Xx=M.span`
  display: block;
  background: ${qx};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Jx=x.forwardRef(({size:n=30,...r},i)=>D.createElement(Yx,{size:n,ref:i,...r},D.createElement(Xx,null)));Jx.displayName="Hourglass";const Zx=M.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,ew=M.div`
  position: relative;
`,tw=M.div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({theme:n})=>n.material};
  border-top: 4px solid ${({theme:n})=>n.borderLightest};
  border-left: 4px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 4px solid ${({theme:n})=>n.borderDark};
  border-right: 4px solid ${({theme:n})=>n.borderDark};

  outline: 1px dotted ${({theme:n})=>n.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({theme:n})=>n.material};
  }
  box-shadow: 1px 1px 0 1px ${({theme:n})=>n.borderDarkest};

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
`,nw=M(hn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,rw=M.div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({theme:n})=>n.material};
  border-left: 2px solid ${({theme:n})=>n.borderLightest};
  border-bottom: 2px solid ${({theme:n})=>n.borderDarkest};
  border-right: 2px solid ${({theme:n})=>n.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({theme:n})=>n.material};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({theme:n})=>n.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({theme:n})=>n.material};
    border: 2px solid ${({theme:n})=>n.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({theme:n})=>n.borderLightest},
      1px 1px 0 1px ${({theme:n})=>n.borderDarkest};
  }
`,dm=x.forwardRef(({backgroundStyles:n,children:r,...i},s)=>D.createElement(Zx,{ref:s,...i},D.createElement(ew,null,D.createElement(tw,null,D.createElement(nw,{style:n},r)),D.createElement(rw,null))));dm.displayName="Monitor";const ow=M.div`
  display: inline-block;
  height: ${ut.md};
  width: 100%;
`,iw=M(hn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,fm=ne`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,lw=M.div`
  position: relative;
  top: 4px;
  ${fm}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,sw=M.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${fm}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,aw=M.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,pm=17,uw=M.span`
  display: inline-block;
  width: ${pm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,ls=x.forwardRef(({hideValue:n=!1,shadow:r=!0,value:i,variant:s="default",...a},d)=>{const f=n?null:`${i}%`,m=x.useRef(null),[h,g]=x.useState([]),w=x.useCallback(()=>{if(!m.current||i===void 0)return;const y=m.current.getBoundingClientRect().width,S=Math.round(i/100*y/pm);g(Array.from({length:S}))},[i]);return x.useEffect(()=>(w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)),[w]),D.createElement(ow,{"aria-valuenow":i!==void 0?Math.round(i):void 0,ref:d,role:"progressbar",variant:s,...a},D.createElement(iw,{variant:s,shadow:r},s==="default"?D.createElement(D.Fragment,null,D.createElement(lw,{"data-testid":"defaultProgress1"},f),D.createElement(sw,{"data-testid":"defaultProgress2",value:i},f)):D.createElement(aw,{ref:m,"data-testid":"tileProgress"},h.map((y,S)=>D.createElement(uw,{key:S})))))});ls.displayName="ProgressBar";const hm=ne`
  width: ${fn}px;
  height: ${fn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,cw=M(hn)`
  ${hm}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};

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
`,dw=M.div`
  ${Sr()}
  ${hm}
  outline: none;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({theme:n})=>n.flatDark};
    border-radius: 50%;
  }
`,fw=M.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
`,pw={flat:dw,default:cw},hw=x.forwardRef(({checked:n,className:r="",disabled:i=!1,label:s="",onChange:a,style:d={},variant:f="default",...m},h)=>{const g=pw[f];return D.createElement(uc,{$disabled:i,className:r,style:d},D.createElement(g,{$disabled:i,role:"presentation"},n&&D.createElement(fw,{$disabled:i,variant:f})),D.createElement(Ql,{disabled:i,onChange:i?void 0:a,readOnly:i,type:"radio",checked:n,ref:h,...m}),s&&D.createElement(cc,null,s))});hw.displayName="Radio";const mw=typeof window<"u"?x.useLayoutEffect:x.useEffect;function hr(n){const r=x.useRef(n);return mw(()=>{r.current=n}),x.useCallback((...i)=>(0,r.current)(...i),[])}function Vp(n,r){typeof n=="function"?n(r):n&&(n.current=r)}function Qp(n,r){return x.useMemo(()=>n==null&&r==null?null:i=>{Vp(n,i),Vp(r,i)},[n,r])}var gw=bh();let ss=!0,Mu=!1,Kp;const yw={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function vw(n){if("type"in n){const{type:r,tagName:i}=n;if(i==="INPUT"&&yw[r]&&!n.readOnly||i==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function xw(n){n.metaKey||n.altKey||n.ctrlKey||(ss=!0)}function wu(){ss=!1}function ww(){this.visibilityState==="hidden"&&Mu&&(ss=!0)}function kw(n){n.addEventListener("keydown",xw,!0),n.addEventListener("mousedown",wu,!0),n.addEventListener("pointerdown",wu,!0),n.addEventListener("touchstart",wu,!0),n.addEventListener("visibilitychange",ww,!0)}function Sw(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return ss||vw(r)}function Ew(){Mu=!0,window.clearTimeout(Kp),Kp=window.setTimeout(()=>{Mu=!1},100)}function bw(){const n=x.useCallback(r=>{const i=gw.findDOMNode(r);i!=null&&kw(i.ownerDocument)},[]);return{isFocusVisible:Sw,onBlurVisible:Ew,ref:n}}function Cw(n,r,i){return(i-r)*n+r}function Tl(n,r){if(r!==void 0&&"changedTouches"in n){for(let i=0;i<n.changedTouches.length;i+=1){const s=n.changedTouches[i];if(s.identifier===r)return{x:s.clientX,y:s.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Pl(n){return n&&n.ownerDocument||document}function Aw(n,r){var i;const{index:s}=(i=n.reduce((a,d,f)=>{const m=Math.abs(r-d);return a===null||m<a.distance||m===a.distance?{distance:m,index:f}:a},null))!==null&&i!==void 0?i:{};return s??-1}const Rw=M.div`
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
    height: ${({hasMarks:n})=>n?"41px":"39px"};
    ${({isFocused:n,theme:r})=>n&&`
        outline: 2px dotted ${r.materialText};
        `}
  }

  ${({orientation:n,size:r})=>n==="vertical"?ne`
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

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,mm=()=>ne`
  position: absolute;
  ${({orientation:n})=>n==="vertical"?ne`
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
`,$w=M(hn)`
  ${mm()}
`,Tw=M(hn)`
  ${mm()}

  border-left-color: ${({theme:n})=>n.flatLight};
  border-top-color: ${({theme:n})=>n.flatLight};
  border-right-color: ${({theme:n})=>n.canvas};
  border-bottom-color: ${({theme:n})=>n.canvas};
  &:before {
    border-left-color: ${({theme:n})=>n.flatDark};
    border-top-color: ${({theme:n})=>n.flatDark};
    border-right-color: ${({theme:n})=>n.flatLight};
    border-bottom-color: ${({theme:n})=>n.flatLight};
  }
`,Pw=M.span`
  position: relative;
  ${({orientation:n})=>n==="vertical"?ne`
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
  ${({variant:n})=>n==="flat"?ne`
          ${Sr()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:ne`
          ${en()}
          ${Qe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:r})=>n&&ui({mainColor:r.material,secondaryColor:r.borderLightest})}
`,Kl=6,Nw=M.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?ne`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Kl}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:ne`
          bottom: ${-6}px;
          height: ${Kl}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:r})=>n&&ne`
      ${Zt()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,jw=M.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?ne`
          transform: translate(${Kl+2}px, ${Kl+1}px);
        `:ne`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Lw=x.forwardRef(({defaultValue:n,disabled:r=!1,marks:i=!1,max:s=100,min:a=0,name:d,onChange:f,onChangeCommitted:m,onMouseDown:h,orientation:g="horizontal",size:w="100%",step:y=1,value:S,variant:R="default",...k},C)=>{const b=R==="flat"?Tw:$w,P=g==="vertical",[j=a,O]=Jn({defaultValue:n,onChange:f??m,value:S}),{isFocusVisible:W,onBlurVisible:Q,ref:K}=bw(),[q,fe]=x.useState(!1),me=x.useRef(),be=x.useRef(null),Ie=Qp(K,me),Ee=Qp(C,Ie),Te=hr(X=>{W(X)&&fe(!0)}),$e=hr(()=>{q!==!1&&(fe(!1),Q())}),Ae=x.useRef(),Pe=x.useMemo(()=>i===!0&&Number.isFinite(y)?[...Array(Math.round((s-a)/y)+1)].map((X,Z)=>({label:void 0,value:a+y*Z})):Array.isArray(i)?i:[],[i,s,a,y]),we=hr(X=>{const Z=(s-a)/10,oe=Pe.map(pe=>pe.value),te=oe.indexOf(j);let se=0;switch(X.key){case"Home":se=a;break;case"End":se=s;break;case"PageUp":y&&(se=j+Z);break;case"PageDown":y&&(se=j-Z);break;case"ArrowRight":case"ArrowUp":y?se=j+y:se=oe[te+1]||oe[oe.length-1];break;case"ArrowLeft":case"ArrowDown":y?se=j-y:se=oe[te-1]||oe[0];break;default:return}X.preventDefault(),y&&(se=Up(se,y,a)),se=gr(se,a,s),O(se),fe(!0),f==null||f(se),m==null||m(se)}),B=x.useCallback(X=>{if(!me.current)return 0;const Z=me.current.getBoundingClientRect();let oe;P?oe=(Z.bottom-X.y)/Z.height:oe=(X.x-Z.left)/Z.width;let te;if(te=Cw(oe,a,s),y)te=Up(te,y,a);else{const se=Pe.map(F=>F.value),pe=Aw(se,te);te=se[pe]}return te=gr(te,a,s),te},[Pe,s,a,y,P]),J=hr(X=>{var Z;const oe=Tl(X,Ae.current);if(!oe)return;const te=B(oe);(Z=be.current)===null||Z===void 0||Z.focus(),O(te),fe(!0),f==null||f(te)}),Y=hr(X=>{const Z=Tl(X,Ae.current);if(!Z)return;const oe=B(Z);m==null||m(oe),Ae.current=void 0;const te=Pl(me.current);te.removeEventListener("mousemove",J),te.removeEventListener("mouseup",Y),te.removeEventListener("touchmove",J),te.removeEventListener("touchend",Y)}),T=hr(X=>{var Z;h==null||h(X),X.preventDefault(),(Z=be.current)===null||Z===void 0||Z.focus(),fe(!0);const oe=Tl(X,Ae.current);if(oe){const se=B(oe);O(se),f==null||f(se)}const te=Pl(me.current);te.addEventListener("mousemove",J),te.addEventListener("mouseup",Y)}),z=hr(X=>{var Z;X.preventDefault();const oe=X.changedTouches[0];oe!=null&&(Ae.current=oe.identifier),(Z=be.current)===null||Z===void 0||Z.focus(),fe(!0);const te=Tl(X,Ae.current);if(te){const pe=B(te);O(pe),f==null||f(pe)}const se=Pl(me.current);se.addEventListener("touchmove",J),se.addEventListener("touchend",Y)});return x.useEffect(()=>{const{current:X}=me;X==null||X.addEventListener("touchstart",z);const Z=Pl(X);return()=>{X==null||X.removeEventListener("touchstart",z),Z.removeEventListener("mousemove",J),Z.removeEventListener("mouseup",Y),Z.removeEventListener("touchmove",J),Z.removeEventListener("touchend",Y)}},[Y,J,z]),D.createElement(Rw,{$disabled:r,hasMarks:!!Pe.length,isFocused:q,onMouseDown:T,orientation:g,ref:Ee,size:Xn(w),...k},D.createElement("input",{disabled:r,name:d,type:"hidden",value:j??0}),Pe&&Pe.map(X=>D.createElement(Nw,{$disabled:r,"data-testid":"tick",key:X.value/(s-a)*100,orientation:g,style:{[P?"bottom":"left"]:`${(X.value-a)/(s-a)*100}%`}},X.label&&D.createElement(jw,{"aria-hidden":!0,"data-testid":"mark",orientation:g},X.label))),D.createElement(b,{orientation:g,variant:R}),D.createElement(Pw,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":g,"aria-valuemax":s,"aria-valuemin":a,"aria-valuenow":j,onBlur:$e,onFocus:Te,onKeyDown:we,orientation:g,ref:be,role:"slider",style:{[P?"bottom":"left"]:`${(P?-100:0)+100*(j-a)/(s-a)}%`},tabIndex:r?void 0:0,variant:R}))});Lw.displayName="Slider";const Iw=M.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${sc};
  overflow-y: auto;
`,as=x.forwardRef(function({children:r,...i},s){return D.createElement(Iw,{ref:s,...i},r)});as.displayName="TableBody";const Dw=M.td`
  padding: 0 8px;
`,at=x.forwardRef(function({children:r,...i},s){return D.createElement(Dw,{ref:s,...i},r)});at.displayName="TableDataCell";const _w=M.thead`
  display: table-header-group;
`,us=x.forwardRef(function({children:r,...i},s){return D.createElement(_w,{ref:s,...i},r)});us.displayName="TableHead";const Ow=M.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({theme:n})=>n.material};
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
    ${Qe()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&ne`
      &:active {
        &:before {
          ${Qe({invert:!0,style:"window"})}
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

  color: ${({theme:n})=>n.materialText};
  ${({$disabled:n})=>n&&Zt()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&Zt()}
  }
`,cs=x.forwardRef(function({disabled:r=!1,children:i,onClick:s,onTouchStart:a=Cr,sort:d,...f},m){const h=d==="asc"?"ascending":d==="desc"?"descending":void 0;return D.createElement(Ow,{$disabled:r,"aria-disabled":r,"aria-sort":h,onClick:r?void 0:s,onTouchStart:r?void 0:a,ref:m,...f},D.createElement("div",null,i))});cs.displayName="TableHeadCell";const zw=M.tr`
  color: inherit;
  display: table-row;
  height: calc(${ut.md} - 2px);
  line-height: calc(${ut.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,Er=x.forwardRef(function({children:r,...i},s){return D.createElement(zw,{ref:s,...i},r)});Er.displayName="TableRow";const Fw=M.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,Bw=M(hn)`
  &:before {
    box-shadow: none;
  }
`,ds=x.forwardRef(({children:n,...r},i)=>D.createElement(Bw,null,D.createElement(Fw,{ref:i,...r},n)));ds.displayName="Table";const Mw=M.button`
  ${en()}
  ${Qe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ut.md};
  line-height: ${ut.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({theme:n})=>n.materialText};
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
    ${lo}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${ut.md} + 4px);
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
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,Uw=x.forwardRef(({value:n,onClick:r,selected:i=!1,children:s,...a},d)=>D.createElement(Mw,{"aria-selected":i,selected:i,onClick:f=>r==null?void 0:r(n,f),ref:d,role:"tab",...a},s));Uw.displayName="Tab";const Hw=M.div`
  ${en()}
  ${Qe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,Ww=x.forwardRef(({children:n,...r},i)=>D.createElement(Hw,{ref:i,...r},n));Ww.displayName="TabBody";const Vw=M.div`
  position: relative;
  ${({isMultiRow:n,theme:r})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,Qw=M.div.attrs(()=>({"data-testid":"tab-row"}))`
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
    border-right: 2px solid ${({theme:n})=>n.borderDarkest};
    border-left: 2px solid ${({theme:n})=>n.borderLightest};
  }
`;function Kw(n,r){const i=[];for(let s=r;s>0;s-=1)i.push(n.splice(0,Math.ceil(n.length/s)));return i}const Gw=x.forwardRef(({value:n,onChange:r=Cr,children:i,rows:s=1,...a},d)=>{const f=x.useMemo(()=>{var m;const h=(m=D.Children.map(i,y=>{if(!D.isValidElement(y))return null;const S={selected:y.props.value===n,onClick:r};return D.cloneElement(y,S)}))!==null&&m!==void 0?m:[],g=Kw(h,s).map((y,S)=>({key:S,tabs:y})),w=g.findIndex(y=>y.tabs.some(S=>S.props.selected));return g.push(g.splice(w,1)[0]),g},[i,r,s,n]);return D.createElement(Vw,{...a,isMultiRow:s>1,role:"tablist",ref:d},f.map(m=>D.createElement(Qw,{key:m.key},m.tabs)))});Gw.displayName="Tabs";const qw=["blur","focus"],Yw=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Gp(n){return"nativeEvent"in n&&qw.includes(n.type)}function qp(n){return"nativeEvent"in n&&Yw.includes(n.type)}const Xw={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Jw=M.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${lc};
  text-align: center;
  font-size: 1rem;
  ${n=>Xw[n.position]}
`,Zw=M.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,e1=x.forwardRef(({className:n,children:r,disableFocusListener:i=!1,disableMouseListener:s=!1,enterDelay:a=1e3,leaveDelay:d=0,onBlur:f,onClose:m,onFocus:h,onMouseEnter:g,onMouseLeave:w,onOpen:y,style:S,text:R,position:k="top",...C},b)=>{const[P,j]=x.useState(!1),[O,W]=x.useState(),[Q,K]=x.useState(),q=!i,fe=!s,me=B=>{window.clearTimeout(O),window.clearTimeout(Q);const J=window.setTimeout(()=>{j(!0),y==null||y(B)},a);W(J)},be=B=>{B.persist(),Gp(B)?h==null||h(B):qp(B)&&(g==null||g(B)),me(B)},Ie=B=>{window.clearTimeout(O),window.clearTimeout(Q);const J=window.setTimeout(()=>{j(!1),m==null||m(B)},d);K(J)},Ee=B=>{B.persist(),Gp(B)?f==null||f(B):qp(B)&&(w==null||w(B)),Ie(B)},Te=q?Ee:void 0,$e=q?be:void 0,Ae=fe?be:void 0,Pe=fe?Ee:void 0,we=q?0:void 0;return D.createElement(Zw,{"data-testid":"tooltip-wrapper",onBlur:Te,onFocus:$e,onMouseEnter:Ae,onMouseLeave:Pe,tabIndex:we},D.createElement(Jw,{className:n,"data-testid":"tooltip",position:k,ref:b,show:P,style:S,...C},R),r)});e1.displayName="Tooltip";const Uu=M(cc)`
  white-space: nowrap;
`,gm=ne`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":ne`
          cursor: pointer;

          :focus {
            ${Uu} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,t1=M.ul`
  position: relative;
  isolation: isolate;

  ${({isRootLevel:n})=>n&&ne`
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
      border-top: 2px dashed ${({theme:n})=>n.borderDark};
      font-size: 12px;
    }
  }
`,n1=M.li`
  position: relative;
  padding-left: ${({hasItems:n})=>n?"0":"13px"};

  ${({isRootLevel:n})=>n?ne`
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
      border-left: 2px dashed ${({theme:n})=>n.borderDark};
    }
  }
`,r1=M.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,o1=M.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${gm};

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
`,Yp=M(uc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${gm};
`,i1=M.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Xp(n,r){return n.includes(r)?n.filter(i=>i!==r):[...n,r]}function Jp(n){n.preventDefault()}function ym({className:n,disabled:r,expanded:i,innerRef:s,level:a,select:d,selected:f,style:m,tree:h=[]}){const g=a===0,w=x.useCallback(y=>{var S,R;const k=!!(y.items&&y.items.length>0),C=i.includes(y.id),b=(S=r||y.disabled)!==null&&S!==void 0?S:!1,P=b?Jp:Q=>d(Q,y),j=b?Jp:Q=>d(Q,y),O=f===y.id,W=D.createElement(i1,{"aria-hidden":!0},y.icon);return D.createElement(n1,{key:y.label,isRootLevel:g,role:"treeitem","aria-expanded":C,"aria-selected":O,hasItems:k},k?D.createElement(r1,{open:C},D.createElement(o1,{onClick:P,$disabled:b},D.createElement(Yp,{$disabled:b},W,D.createElement(Uu,null,y.label))),C&&D.createElement(ym,{className:n,disabled:b,expanded:i,level:a+1,select:d,selected:f,style:m,tree:(R=y.items)!==null&&R!==void 0?R:[]})):D.createElement(Yp,{as:"button",$disabled:b,onClick:j},W,D.createElement(Uu,null,y.label)))},[n,r,i,g,a,d,f,m]);return D.createElement(t1,{className:g?n:void 0,style:g?m:void 0,ref:g?s:void 0,role:g?"tree":"group",isRootLevel:g},h.map(w))}function l1({className:n,defaultExpanded:r=[],defaultSelected:i,disabled:s=!1,expanded:a,onNodeSelect:d,onNodeToggle:f,selected:m,style:h,tree:g=[]},w){const[y,S]=Jn({defaultValue:r,onChange:f,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[R,k]=Jn({defaultValue:i,onChange:d,onChangePropName:"onNodeSelect",value:m,valuePropName:"selected"}),C=x.useCallback((j,O)=>{if(f){const W=Xp(y,O);f(j,W)}S(W=>Xp(W,O))},[y,f,S]),b=x.useCallback((j,O)=>{k(O),d&&d(j,O)},[d,k]),P=x.useCallback((j,O)=>{j.preventDefault(),b(j,O.id),O.items&&O.items.length&&C(j,O.id)},[b,C]);return D.createElement(ym,{className:n,disabled:s,expanded:y,level:0,innerRef:w,select:P,selected:R,style:h,tree:g})}const s1=x.forwardRef(l1);s1.displayName="TreeView";var ku,Zp;function a1(){if(Zp)return ku;Zp=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return ku=n,ku}var u1=a1();const c1=Eh(u1),d1="/assets/ms_sans_serif-Du8rjN1q.woff2",f1="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var Zo={},eh;function p1(){if(eh)return Zo;eh=1,Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.parse=f,Zo.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,d=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,R){const k=new d,C=S.length;if(C<2)return k;const b=(R==null?void 0:R.decode)||w;let P=0;do{const j=S.indexOf("=",P);if(j===-1)break;const O=S.indexOf(";",P),W=O===-1?C:O;if(j>W){P=S.lastIndexOf(";",j-1)+1;continue}const Q=m(S,P,j),K=h(S,j,Q),q=S.slice(Q,K);if(k[q]===void 0){let fe=m(S,j+1,W),me=h(S,W,fe);const be=b(S.slice(fe,me));k[q]=be}P=W+1}while(P<C);return k}function m(S,R,k){do{const C=S.charCodeAt(R);if(C!==32&&C!==9)return R}while(++R<k);return k}function h(S,R,k){for(;R>k;){const C=S.charCodeAt(--R);if(C!==32&&C!==9)return R+1}return k}function g(S,R,k){const C=(k==null?void 0:k.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const b=C(R);if(!r.test(b))throw new TypeError(`argument val is invalid: ${R}`);let P=S+"="+b;if(!k)return P;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);P+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);P+="; Domain="+k.domain}if(k.path){if(!s.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);P+="; Path="+k.path}if(k.expires){if(!y(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);P+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(P+="; HttpOnly"),k.secure&&(P+="; Secure"),k.partitioned&&(P+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":P+="; Priority=Low";break;case"medium":P+="; Priority=Medium";break;case"high":P+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":P+="; SameSite=Strict";break;case"lax":P+="; SameSite=Lax";break;case"none":P+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return P}function w(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function y(S){return a.call(S)==="[object Date]"}return Zo}p1();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var th="popstate";function h1(n={}){function r(s,a){let{pathname:d,search:f,hash:m}=s.location;return Hu("",{pathname:d,search:f,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(s,a){return typeof a=="string"?a:si(a)}return g1(r,i,null,n)}function He(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function pn(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function m1(){return Math.random().toString(36).substring(2,10)}function nh(n,r){return{usr:n.state,key:n.key,idx:r}}function Hu(n,r,i=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?ao(r):r,state:i,key:r&&r.key||s||m1()}}function si({pathname:n="/",search:r="",hash:i=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ao(n){let r={};if(n){let i=n.indexOf("#");i>=0&&(r.hash=n.substring(i),n=n.substring(0,i));let s=n.indexOf("?");s>=0&&(r.search=n.substring(s),n=n.substring(0,s)),n&&(r.pathname=n)}return r}function g1(n,r,i,s={}){let{window:a=document.defaultView,v5Compat:d=!1}=s,f=a.history,m="POP",h=null,g=w();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function w(){return(f.state||{idx:null}).idx}function y(){m="POP";let b=w(),P=b==null?null:b-g;g=b,h&&h({action:m,location:C.location,delta:P})}function S(b,P){m="PUSH";let j=Hu(C.location,b,P);g=w()+1;let O=nh(j,g),W=C.createHref(j);try{f.pushState(O,"",W)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;a.location.assign(W)}d&&h&&h({action:m,location:C.location,delta:1})}function R(b,P){m="REPLACE";let j=Hu(C.location,b,P);g=w();let O=nh(j,g),W=C.createHref(j);f.replaceState(O,"",W),d&&h&&h({action:m,location:C.location,delta:0})}function k(b){let P=a.location.origin!=="null"?a.location.origin:a.location.href,j=typeof b=="string"?b:si(b);return j=j.replace(/ $/,"%20"),He(P,`No window.location.(origin|href) available to create URL for href: ${j}`),new URL(j,P)}let C={get action(){return m},get location(){return n(a,f)},listen(b){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(th,y),h=b,()=>{a.removeEventListener(th,y),h=null}},createHref(b){return r(a,b)},createURL:k,encodeLocation(b){let P=k(b);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:S,replace:R,go(b){return f.go(b)}};return C}function vm(n,r,i="/"){return y1(n,r,i,!1)}function y1(n,r,i,s){let a=typeof r=="string"?ao(r):r,d=Zn(a.pathname||"/",i);if(d==null)return null;let f=xm(n);v1(f);let m=null;for(let h=0;m==null&&h<f.length;++h){let g=T1(d);m=R1(f[h],g,s)}return m}function xm(n,r=[],i=[],s=""){let a=(d,f,m)=>{let h={relativePath:m===void 0?d.path||"":m,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};h.relativePath.startsWith("/")&&(He(h.relativePath.startsWith(s),`Absolute route path "${h.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(s.length));let g=$n([s,h.relativePath]),w=i.concat(h);d.children&&d.children.length>0&&(He(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),xm(d.children,r,w,g)),!(d.path==null&&!d.index)&&r.push({path:g,score:C1(g,d.index),routesMeta:w})};return n.forEach((d,f)=>{var m;if(d.path===""||!((m=d.path)!=null&&m.includes("?")))a(d,f);else for(let h of wm(d.path))a(d,f,h)}),r}function wm(n){let r=n.split("/");if(r.length===0)return[];let[i,...s]=r,a=i.endsWith("?"),d=i.replace(/\?$/,"");if(s.length===0)return a?[d,""]:[d];let f=wm(s.join("/")),m=[];return m.push(...f.map(h=>h===""?d:[d,h].join("/"))),a&&m.push(...f),m.map(h=>n.startsWith("/")&&h===""?"/":h)}function v1(n){n.sort((r,i)=>r.score!==i.score?i.score-r.score:A1(r.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var x1=/^:[\w-]+$/,w1=3,k1=2,S1=1,E1=10,b1=-2,rh=n=>n==="*";function C1(n,r){let i=n.split("/"),s=i.length;return i.some(rh)&&(s+=b1),r&&(s+=k1),i.filter(a=>!rh(a)).reduce((a,d)=>a+(x1.test(d)?w1:d===""?S1:E1),s)}function A1(n,r){return n.length===r.length&&n.slice(0,-1).every((s,a)=>s===r[a])?n[n.length-1]-r[r.length-1]:0}function R1(n,r,i=!1){let{routesMeta:s}=n,a={},d="/",f=[];for(let m=0;m<s.length;++m){let h=s[m],g=m===s.length-1,w=d==="/"?r:r.slice(d.length)||"/",y=Gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:g},w),S=h.route;if(!y&&g&&i&&!s[s.length-1].route.index&&(y=Gl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},w)),!y)return null;Object.assign(a,y.params),f.push({params:a,pathname:$n([d,y.pathname]),pathnameBase:L1($n([d,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(d=$n([d,y.pathnameBase]))}return f}function Gl(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,s]=$1(n.path,n.caseSensitive,n.end),a=r.match(i);if(!a)return null;let d=a[0],f=d.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:s.reduce((g,{paramName:w,isOptional:y},S)=>{if(w==="*"){let k=m[S]||"";f=d.slice(0,d.length-k.length).replace(/(.)\/+$/,"$1")}const R=m[S];return y&&!R?g[w]=void 0:g[w]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:f,pattern:n}}function $1(n,r=!1,i=!0){pn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,h)=>(s.push({paramName:m,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),s]}function T1(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return pn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function Zn(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,s=n.charAt(i);return s&&s!=="/"?null:n.slice(i)||"/"}function P1(n,r="/"){let{pathname:i,search:s="",hash:a=""}=typeof n=="string"?ao(n):n;return{pathname:i?i.startsWith("/")?i:N1(i,r):r,search:I1(s),hash:D1(a)}}function N1(n,r){let i=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function Su(n,r,i,s){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function j1(n){return n.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function km(n){let r=j1(n);return r.map((i,s)=>s===r.length-1?i.pathname:i.pathnameBase)}function Sm(n,r,i,s=!1){let a;typeof n=="string"?a=ao(n):(a={...n},He(!a.pathname||!a.pathname.includes("?"),Su("?","pathname","search",a)),He(!a.pathname||!a.pathname.includes("#"),Su("#","pathname","hash",a)),He(!a.search||!a.search.includes("#"),Su("#","search","hash",a)));let d=n===""||a.pathname==="",f=d?"/":a.pathname,m;if(f==null)m=i;else{let y=r.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),y-=1;a.pathname=S.join("/")}m=y>=0?r[y]:"/"}let h=P1(a,m),g=f&&f!=="/"&&f.endsWith("/"),w=(d||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(g||w)&&(h.pathname+="/"),h}var $n=n=>n.join("/").replace(/\/\/+/g,"/"),L1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),I1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,D1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function _1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Em=["POST","PUT","PATCH","DELETE"];new Set(Em);var O1=["GET",...Em];new Set(O1);var uo=x.createContext(null);uo.displayName="DataRouter";var fs=x.createContext(null);fs.displayName="DataRouterState";var bm=x.createContext({isTransitioning:!1});bm.displayName="ViewTransition";var z1=x.createContext(new Map);z1.displayName="Fetchers";var F1=x.createContext(null);F1.displayName="Await";var mn=x.createContext(null);mn.displayName="Navigation";var di=x.createContext(null);di.displayName="Location";var Tn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Tn.displayName="Route";var gc=x.createContext(null);gc.displayName="RouteError";function B1(n,{relative:r}={}){He(fi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=x.useContext(mn),{hash:a,pathname:d,search:f}=pi(n,{relative:r}),m=d;return i!=="/"&&(m=d==="/"?i:$n([i,d])),s.createHref({pathname:m,search:f,hash:a})}function fi(){return x.useContext(di)!=null}function Rr(){return He(fi(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(di).location}var Cm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Am(n){x.useContext(mn).static||x.useLayoutEffect(n)}function M1(){let{isDataRoute:n}=x.useContext(Tn);return n?ek():U1()}function U1(){He(fi(),"useNavigate() may be used only in the context of a <Router> component.");let n=x.useContext(uo),{basename:r,navigator:i}=x.useContext(mn),{matches:s}=x.useContext(Tn),{pathname:a}=Rr(),d=JSON.stringify(km(s)),f=x.useRef(!1);return Am(()=>{f.current=!0}),x.useCallback((h,g={})=>{if(pn(f.current,Cm),!f.current)return;if(typeof h=="number"){i.go(h);return}let w=Sm(h,JSON.parse(d),a,g.relative==="path");n==null&&r!=="/"&&(w.pathname=w.pathname==="/"?r:$n([r,w.pathname])),(g.replace?i.replace:i.push)(w,g.state,g)},[r,i,d,a,n])}x.createContext(null);function pi(n,{relative:r}={}){let{matches:i}=x.useContext(Tn),{pathname:s}=Rr(),a=JSON.stringify(km(i));return x.useMemo(()=>Sm(n,JSON.parse(a),s,r==="path"),[n,a,s,r])}function H1(n,r){return Rm(n,r)}function Rm(n,r,i,s){var P;He(fi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=x.useContext(mn),{matches:d}=x.useContext(Tn),f=d[d.length-1],m=f?f.params:{},h=f?f.pathname:"/",g=f?f.pathnameBase:"/",w=f&&f.route;{let j=w&&w.path||"";$m(h,!w||j.endsWith("*")||j.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${j}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${j}"> to <Route path="${j==="/"?"*":`${j}/*`}">.`)}let y=Rr(),S;if(r){let j=typeof r=="string"?ao(r):r;He(g==="/"||((P=j.pathname)==null?void 0:P.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${j.pathname}" was given in the \`location\` prop.`),S=j}else S=y;let R=S.pathname||"/",k=R;if(g!=="/"){let j=g.replace(/^\//,"").split("/");k="/"+R.replace(/^\//,"").split("/").slice(j.length).join("/")}let C=vm(n,{pathname:k});pn(w||C!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),pn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=G1(C&&C.map(j=>Object.assign({},j,{params:Object.assign({},m,j.params),pathname:$n([g,a.encodeLocation?a.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?g:$n([g,a.encodeLocation?a.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),d,i,s);return r&&b?x.createElement(di.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},b):b}function W1(){let n=Z1(),r=_1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:d},"ErrorBoundary")," or"," ",x.createElement("code",{style:d},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},r),i?x.createElement("pre",{style:a},i):null,f)}var V1=x.createElement(W1,null),Q1=class extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?x.createElement(Tn.Provider,{value:this.props.routeContext},x.createElement(gc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function K1({routeContext:n,match:r,children:i}){let s=x.useContext(uo);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),x.createElement(Tn.Provider,{value:n},i)}function G1(n,r=[],i=null,s=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let a=n,d=i==null?void 0:i.errors;if(d!=null){let h=a.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);He(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let f=!1,m=-1;if(i)for(let h=0;h<a.length;h++){let g=a[h];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=h),g.route.id){let{loaderData:w,errors:y}=i,S=g.route.loader&&!w.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||S){f=!0,m>=0?a=a.slice(0,m+1):a=[a[0]];break}}}return a.reduceRight((h,g,w)=>{let y,S=!1,R=null,k=null;i&&(y=d&&g.route.id?d[g.route.id]:void 0,R=g.route.errorElement||V1,f&&(m<0&&w===0?($m("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):m===w&&(S=!0,k=g.route.hydrateFallbackElement||null)));let C=r.concat(a.slice(0,w+1)),b=()=>{let P;return y?P=R:S?P=k:g.route.Component?P=x.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=h,x.createElement(K1,{match:g,routeContext:{outlet:h,matches:C,isDataRoute:i!=null},children:P})};return i&&(g.route.ErrorBoundary||g.route.errorElement||w===0)?x.createElement(Q1,{location:i.location,revalidation:i.revalidation,component:R,error:y,children:b(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):b()},null)}function yc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function q1(n){let r=x.useContext(uo);return He(r,yc(n)),r}function Y1(n){let r=x.useContext(fs);return He(r,yc(n)),r}function X1(n){let r=x.useContext(Tn);return He(r,yc(n)),r}function vc(n){let r=X1(n),i=r.matches[r.matches.length-1];return He(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function J1(){return vc("useRouteId")}function Z1(){var s;let n=x.useContext(gc),r=Y1("useRouteError"),i=vc("useRouteError");return n!==void 0?n:(s=r.errors)==null?void 0:s[i]}function ek(){let{router:n}=q1("useNavigate"),r=vc("useNavigate"),i=x.useRef(!1);return Am(()=>{i.current=!0}),x.useCallback(async(a,d={})=>{pn(i.current,Cm),i.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:r,...d}))},[n,r])}var oh={};function $m(n,r,i){!r&&!oh[n]&&(oh[n]=!0,pn(!1,i))}x.memo(tk);function tk({routes:n,future:r,state:i}){return Rm(n,void 0,i,r)}function Wu(n){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function nk({basename:n="/",children:r=null,location:i,navigationType:s="POP",navigator:a,static:d=!1}){He(!fi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),m=x.useMemo(()=>({basename:f,navigator:a,static:d,future:{}}),[f,a,d]);typeof i=="string"&&(i=ao(i));let{pathname:h="/",search:g="",hash:w="",state:y=null,key:S="default"}=i,R=x.useMemo(()=>{let k=Zn(h,f);return k==null?null:{location:{pathname:k,search:g,hash:w,state:y,key:S},navigationType:s}},[f,h,g,w,y,S,s]);return pn(R!=null,`<Router basename="${f}"> is not able to match the URL "${h}${g}${w}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:x.createElement(mn.Provider,{value:m},x.createElement(di.Provider,{children:r,value:R}))}function rk({children:n,location:r}){return H1(Vu(n),r)}function Vu(n,r=[]){let i=[];return x.Children.forEach(n,(s,a)=>{if(!x.isValidElement(s))return;let d=[...r,a];if(s.type===x.Fragment){i.push.apply(i,Vu(s.props.children,d));return}He(s.type===Wu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Vu(s.props.children,d)),i.push(f)}),i}var Ol="get",zl="application/x-www-form-urlencoded";function ps(n){return n!=null&&typeof n.tagName=="string"}function ok(n){return ps(n)&&n.tagName.toLowerCase()==="button"}function ik(n){return ps(n)&&n.tagName.toLowerCase()==="form"}function lk(n){return ps(n)&&n.tagName.toLowerCase()==="input"}function sk(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function ak(n,r){return n.button===0&&(!r||r==="_self")&&!sk(n)}var Nl=null;function uk(){if(Nl===null)try{new FormData(document.createElement("form"),0),Nl=!1}catch{Nl=!0}return Nl}var ck=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Eu(n){return n!=null&&!ck.has(n)?(pn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${zl}"`),null):n}function dk(n,r){let i,s,a,d,f;if(ik(n)){let m=n.getAttribute("action");s=m?Zn(m,r):null,i=n.getAttribute("method")||Ol,a=Eu(n.getAttribute("enctype"))||zl,d=new FormData(n)}else if(ok(n)||lk(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=n.getAttribute("formaction")||m.getAttribute("action");if(s=h?Zn(h,r):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Ol,a=Eu(n.getAttribute("formenctype"))||Eu(m.getAttribute("enctype"))||zl,d=new FormData(m,n),!uk()){let{name:g,type:w,value:y}=n;if(w==="image"){let S=g?`${g}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else g&&d.append(g,y)}}else{if(ps(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ol,s=null,a=zl,f=n}return d&&a==="text/plain"&&(f=d,d=void 0),{action:s,method:i.toLowerCase(),encType:a,formData:d,body:f}}function xc(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}async function fk(n,r){if(n.id in r)return r[n.id];try{let i=await import(n.module);return r[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pk(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function hk(n,r,i){let s=await Promise.all(n.map(async a=>{let d=r.routes[a.route.id];if(d){let f=await fk(d,i);return f.links?f.links():[]}return[]}));return vk(s.flat(1).filter(pk).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function ih(n,r,i,s,a,d){let f=(h,g)=>i[g]?h.route.id!==i[g].route.id:!0,m=(h,g)=>{var w;return i[g].pathname!==h.pathname||((w=i[g].route.path)==null?void 0:w.endsWith("*"))&&i[g].params["*"]!==h.params["*"]};return d==="assets"?r.filter((h,g)=>f(h,g)||m(h,g)):d==="data"?r.filter((h,g)=>{var y;let w=s.routes[h.route.id];if(!w||!w.hasLoader)return!1;if(f(h,g)||m(h,g))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function mk(n,r){return gk(n.map(i=>{let s=r.routes[i.route.id];if(!s)return[];let a=[s.module];return s.imports&&(a=a.concat(s.imports)),a}).flat(1))}function gk(n){return[...new Set(n)]}function yk(n){let r={},i=Object.keys(n).sort();for(let s of i)r[s]=n[s];return r}function vk(n,r){let i=new Set;return new Set(r),n.reduce((s,a)=>{let d=JSON.stringify(yk(a));return i.has(d)||(i.add(d),s.push({key:d,link:a})),s},[])}function xk(n){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function wk(){let n=x.useContext(uo);return xc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function kk(){let n=x.useContext(fs);return xc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var wc=x.createContext(void 0);wc.displayName="FrameworkContext";function Tm(){let n=x.useContext(wc);return xc(n,"You must render this element inside a <HydratedRouter> element"),n}function Sk(n,r){let i=x.useContext(wc),[s,a]=x.useState(!1),[d,f]=x.useState(!1),{onFocus:m,onBlur:h,onMouseEnter:g,onMouseLeave:w,onTouchStart:y}=r,S=x.useRef(null);x.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let C=P=>{P.forEach(j=>{f(j.isIntersecting)})},b=new IntersectionObserver(C,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[n]),x.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let R=()=>{a(!0)},k=()=>{a(!1),f(!1)};return i?n!=="intent"?[d,S,{}]:[d,S,{onFocus:ei(m,R),onBlur:ei(h,k),onMouseEnter:ei(g,R),onMouseLeave:ei(w,k),onTouchStart:ei(y,R)}]:[!1,S,{}]}function ei(n,r){return i=>{n&&n(i),i.defaultPrevented||r(i)}}function Ek({page:n,...r}){let{router:i}=wk(),s=x.useMemo(()=>vm(i.routes,n,i.basename),[i.routes,n,i.basename]);return s?x.createElement(Ck,{page:n,matches:s,...r}):null}function bk(n){let{manifest:r,routeModules:i}=Tm(),[s,a]=x.useState([]);return x.useEffect(()=>{let d=!1;return hk(n,r,i).then(f=>{d||a(f)}),()=>{d=!0}},[n,r,i]),s}function Ck({page:n,matches:r,...i}){let s=Rr(),{manifest:a,routeModules:d}=Tm(),{loaderData:f,matches:m}=kk(),h=x.useMemo(()=>ih(n,r,m,a,s,"data"),[n,r,m,a,s]),g=x.useMemo(()=>ih(n,r,m,a,s,"assets"),[n,r,m,a,s]),w=x.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let R=new Set,k=!1;if(r.forEach(b=>{var j;let P=a.routes[b.route.id];!P||!P.hasLoader||(!h.some(O=>O.route.id===b.route.id)&&b.route.id in f&&((j=d[b.route.id])!=null&&j.shouldRevalidate)||P.hasClientLoader?k=!0:R.add(b.route.id))}),R.size===0)return[];let C=xk(n);return k&&R.size>0&&C.searchParams.set("_routes",r.filter(b=>R.has(b.route.id)).map(b=>b.route.id).join(",")),[C.pathname+C.search]},[f,s,a,h,r,n,d]),y=x.useMemo(()=>mk(g,a),[g,a]),S=bk(g);return x.createElement(x.Fragment,null,w.map(R=>x.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),y.map(R=>x.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),S.map(({key:R,link:k})=>x.createElement("link",{key:R,...k})))}function Ak(...n){return r=>{n.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var Pm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pm&&(window.__reactRouterVersion="7.1.3")}catch{}function Rk({basename:n,children:r,window:i}){let s=x.useRef();s.current==null&&(s.current=h1({window:i,v5Compat:!0}));let a=s.current,[d,f]=x.useState({action:a.action,location:a.location}),m=x.useCallback(h=>{x.startTransition(()=>f(h))},[f]);return x.useLayoutEffect(()=>a.listen(m),[a,m]),x.createElement(nk,{basename:n,children:r,location:d.location,navigationType:d.action,navigator:a})}var Nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kc=x.forwardRef(function({onClick:r,discover:i="render",prefetch:s="none",relative:a,reloadDocument:d,replace:f,state:m,target:h,to:g,preventScrollReset:w,viewTransition:y,...S},R){let{basename:k}=x.useContext(mn),C=typeof g=="string"&&Nm.test(g),b,P=!1;if(typeof g=="string"&&C&&(b=g,Pm))try{let me=new URL(window.location.href),be=g.startsWith("//")?new URL(me.protocol+g):new URL(g),Ie=Zn(be.pathname,k);be.origin===me.origin&&Ie!=null?g=Ie+be.search+be.hash:P=!0}catch{pn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let j=B1(g,{relative:a}),[O,W,Q]=Sk(s,S),K=Nk(g,{replace:f,state:m,target:h,preventScrollReset:w,relative:a,viewTransition:y});function q(me){r&&r(me),me.defaultPrevented||K(me)}let fe=x.createElement("a",{...S,...Q,href:b||j,onClick:P||d?r:q,ref:Ak(R,W),target:h,"data-discover":!C&&i==="render"?"true":void 0});return O&&!C?x.createElement(x.Fragment,null,fe,x.createElement(Ek,{page:j})):fe});kc.displayName="Link";var $k=x.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:s="",end:a=!1,style:d,to:f,viewTransition:m,children:h,...g},w){let y=pi(f,{relative:g.relative}),S=Rr(),R=x.useContext(fs),{navigator:k,basename:C}=x.useContext(mn),b=R!=null&&_k(y)&&m===!0,P=k.encodeLocation?k.encodeLocation(y).pathname:y.pathname,j=S.pathname,O=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(j=j.toLowerCase(),O=O?O.toLowerCase():null,P=P.toLowerCase()),O&&C&&(O=Zn(O,C)||O);const W=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let Q=j===P||!a&&j.startsWith(P)&&j.charAt(W)==="/",K=O!=null&&(O===P||!a&&O.startsWith(P)&&O.charAt(P.length)==="/"),q={isActive:Q,isPending:K,isTransitioning:b},fe=Q?r:void 0,me;typeof s=="function"?me=s(q):me=[s,Q?"active":null,K?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let be=typeof d=="function"?d(q):d;return x.createElement(kc,{...g,"aria-current":fe,className:me,ref:w,style:be,to:f,viewTransition:m},typeof h=="function"?h(q):h)});$k.displayName="NavLink";var Tk=x.forwardRef(({discover:n="render",fetcherKey:r,navigate:i,reloadDocument:s,replace:a,state:d,method:f=Ol,action:m,onSubmit:h,relative:g,preventScrollReset:w,viewTransition:y,...S},R)=>{let k=Ik(),C=Dk(m,{relative:g}),b=f.toLowerCase()==="get"?"get":"post",P=typeof m=="string"&&Nm.test(m),j=O=>{if(h&&h(O),O.defaultPrevented)return;O.preventDefault();let W=O.nativeEvent.submitter,Q=(W==null?void 0:W.getAttribute("formmethod"))||f;k(W||O.currentTarget,{fetcherKey:r,method:Q,navigate:i,replace:a,state:d,relative:g,preventScrollReset:w,viewTransition:y})};return x.createElement("form",{ref:R,method:b,action:C,onSubmit:s?h:j,...S,"data-discover":!P&&n==="render"?"true":void 0})});Tk.displayName="Form";function Pk(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jm(n){let r=x.useContext(uo);return He(r,Pk(n)),r}function Nk(n,{target:r,replace:i,state:s,preventScrollReset:a,relative:d,viewTransition:f}={}){let m=M1(),h=Rr(),g=pi(n,{relative:d});return x.useCallback(w=>{if(ak(w,r)){w.preventDefault();let y=i!==void 0?i:si(h)===si(g);m(n,{replace:y,state:s,preventScrollReset:a,relative:d,viewTransition:f})}},[h,m,g,i,s,r,n,a,d,f])}var jk=0,Lk=()=>`__${String(++jk)}__`;function Ik(){let{router:n}=jm("useSubmit"),{basename:r}=x.useContext(mn),i=J1();return x.useCallback(async(s,a={})=>{let{action:d,method:f,encType:m,formData:h,body:g}=dk(s,r);if(a.navigate===!1){let w=a.fetcherKey||Lk();await n.fetch(w,i,a.action||d,{preventScrollReset:a.preventScrollReset,formData:h,body:g,formMethod:a.method||f,formEncType:a.encType||m,flushSync:a.flushSync})}else await n.navigate(a.action||d,{preventScrollReset:a.preventScrollReset,formData:h,body:g,formMethod:a.method||f,formEncType:a.encType||m,replace:a.replace,state:a.state,fromRouteId:i,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,r,i])}function Dk(n,{relative:r}={}){let{basename:i}=x.useContext(mn),s=x.useContext(Tn);He(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),d={...pi(n||".",{relative:r})},f=Rr();if(n==null){d.search=f.search;let m=new URLSearchParams(d.search),h=m.getAll("index");if(h.some(w=>w==="")){m.delete("index"),h.filter(y=>y).forEach(y=>m.append("index",y));let w=m.toString();d.search=w?`?${w}`:""}}return(!n||n===".")&&a.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:$n([i,d.pathname])),si(d)}function _k(n,r={}){let i=x.useContext(bm);He(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=jm("useViewTransitionState"),a=pi(n,{relative:r.relative});if(!i.isTransitioning)return!1;let d=Zn(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Zn(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Gl(a.pathname,f)!=null||Gl(a.pathname,d)!=null}new TextEncoder;const st=[];for(let n=0;n<256;++n)st.push((n+256).toString(16).slice(1));function Ok(n,r=0){return(st[n[r+0]]+st[n[r+1]]+st[n[r+2]]+st[n[r+3]]+"-"+st[n[r+4]]+st[n[r+5]]+"-"+st[n[r+6]]+st[n[r+7]]+"-"+st[n[r+8]]+st[n[r+9]]+"-"+st[n[r+10]]+st[n[r+11]]+st[n[r+12]]+st[n[r+13]]+st[n[r+14]]+st[n[r+15]]).toLowerCase()}let bu;const zk=new Uint8Array(16);function Fk(){if(!bu){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");bu=crypto.getRandomValues.bind(crypto)}return bu(zk)}const Bk=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),lh={randomUUID:Bk};function Mk(n,r,i){var a;if(lh.randomUUID&&!n)return lh.randomUUID();n=n||{};const s=n.random??((a=n.rng)==null?void 0:a.call(n))??Fk();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,Ok(s)}class eo extends Error{constructor(r,i){super(i?`${r}: ${i}`:r),this.code=r,this.name="KernelError"}}class Uk{constructor(r){Yt(this,"registry");Yt(this,"processes",new Map);Yt(this,"listeners",new Set);Yt(this,"persistence");Yt(this,"defaultLocation");Yt(this,"uid");Yt(this,"snapshot",[]);Yt(this,"subscribe",r=>(this.listeners.add(r),()=>this.listeners.delete(r)));Yt(this,"getSnapshot",()=>this.snapshot);this.registry=r.registry,this.persistence=r.persistence,this.defaultLocation=r.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=r.uid??1e3,this.boot()}boot(){var i;const r=(i=this.persistence)==null?void 0:i.load();if(r)for(const s of r)this.registry.has(s.exec)&&this.processes.set(s.pid,this.hydrate(s));this.rebuildSnapshot()}hydrate(r){return{pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,icon:r.icon,state:r.state,priority:r.priority,window:r.window,cwd:r.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const r=this.snapshot.map(i=>({pid:i.pid,ppid:i.ppid,uid:i.uid,exec:i.exec,name:i.name,icon:i.icon,priority:i.priority,window:i.window,cwd:i.cwd,state:i.state}));this.persistence.save(r)}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const r of this.listeners)r()}syscall(r,i,s){try{return Promise.resolve(this.dispatch(r,i,s))}catch(a){return Promise.reject(a)}}dispatch(r,i,s){switch(i){case"spawn":return this.sysSpawn(r,s);case"exit":return this.sysExit(r,s.code??0);case"kill":return this.sysKill(s.pid);case"getpid":return r;case"ps":return this.sysPs();case"win_focus":return this.sysFocus(s.pid);case"win_move":return this.sysMove(s.pid,s.location);case"open":case"read":case"write":case"close":case"readdir":case"stat":throw new eo("ENOSYS",`${i} arrives in Phase 1 (filesystem)`);default:throw new eo("ENOSYS",`unknown syscall: ${i}`)}}sysSpawn(r,i){const s=this.registry.get(i.exec);if(!s)throw new eo("ENOENT",`no program "${i.exec}" in /bin`);const a=Mk();for(const d of this.processes.values())d.priority+=1;return this.processes.set(a,{pid:a,ppid:r,uid:this.uid,exec:i.exec,name:i.name??s.name,icon:i.icon??s.icon,state:"running",priority:0,window:i.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(r){if(!this.processes.delete(r))throw new eo("ESRCH",`no process ${r}`);this.commit()}sysExit(r,i){r&&this.sysKill(r)}sysPs(){return this.snapshot.map(r=>({pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,state:r.state,priority:r.priority}))}sysFocus(r){if(!this.processes.get(r))throw new eo("ESRCH",`no process ${r}`);let s=0;for(const a of this.processes.values())a.priority=a.pid===r?0:++s;this.commit()}sysMove(r,i){const s=this.processes.get(r);if(!s)throw new eo("ESRCH",`no process ${r}`);s.window=i,this.commit()}}class Hk{constructor(){Yt(this,"programs",new Map)}register(r){this.programs.set(r.exec,r)}get(r){return this.programs.get(r)}component(r){var i;return(i=this.programs.get(r))==null?void 0:i.component}has(r){return this.programs.has(r)}list(){return[...this.programs.values()]}}const Lm=()=>v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:"Recycle Bin"}),v.jsx(Rt,{variant:"well",className:"footer",children:"TEST"})]}),Im=()=>v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:"My Computer"}),v.jsx(Rt,{variant:"well",className:"footer",children:"TEST"})]});function Wk(n,r){const i=(s,a)=>n.syscall(r,s,a);return{spawn:(s,a)=>i("spawn",{exec:s,...a}),exit:(s=0)=>i("exit",{code:s}),kill:s=>i("kill",{pid:s}),getpid:()=>i("getpid",{}),ps:()=>i("ps",{}),focus:s=>i("win_focus",{pid:s}),move:(s,a)=>i("win_move",{pid:a??r,location:s}),open:(s,a="r")=>i("open",{path:s,flags:a}),read:(s,a)=>i("read",{fd:s,len:a}),write:(s,a)=>i("write",{fd:s,data:a}),close:s=>i("close",{fd:s}),readdir:s=>i("readdir",{path:s}),stat:s=>i("stat",{path:s})}}const Dm=x.createContext(null);function Vk({pid:n,children:r}){return v.jsx(Dm.Provider,{value:n,children:r})}function Qk(){return x.useContext(Dm)}function Kk(){const n=Pc(),r=Qk();return x.useMemo(()=>Wk(n,r),[n,r])}const Gk=()=>{const n=bg(),r=Kk(),i=["PID","Name","Priority",""];return v.jsx(v.Fragment,{children:v.jsxs(ds,{style:{width:"50vw"},children:[v.jsx(us,{children:v.jsx(Er,{children:i.map(s=>v.jsx(cs,{children:s},s))})}),v.jsx(as,{children:n.map(s=>v.jsxs(Er,{children:[v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:s.pid.slice(0,8)}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:s.name}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:s.priority===0?"High":"Normal"}),v.jsx(at,{onClick:()=>r.kill(s.pid),style:{textAlign:"center",verticalAlign:"middle",cursor:"pointer"},children:"Delete"})]},s.pid))})]})})},Sc=()=>v.jsxs(v.Fragment,{children:[v.jsx(xt,{children:v.jsx(Gk,{})}),v.jsx(Rt,{variant:"well",className:"footer",children:"See your running processes"})]});function hs(n){const r=x.useRef(null),[i,s]=x.useState(null);return x.useEffect(()=>{if(!r.current)return;const a=r.current,d=Dos(a);return s(d),()=>{d.stop(),a&&(a.innerHTML="")}},[]),x.useEffect(()=>{i!==null&&i.run(n.bundleUrl)},[i,n.bundleUrl]),v.jsx("div",{ref:r,style:{width:"100%",height:"100%"}})}const _m=()=>v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(hs,{bundleUrl:"dos/final-DOOM.jsdos"})})}),v.jsx(Rt,{variant:"well",className:"footer",children:"TEST"})]}),Om=()=>v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(hs,{bundleUrl:"dos/doom2.jsdos"})})}),v.jsx(Rt,{variant:"well",className:"footer",children:"TEST"})]}),zm="/error.png",qk="/trust.png";function Fm(n,r){return function(){return n.apply(r,arguments)}}const{toString:Yk}=Object.prototype,{getPrototypeOf:Ec}=Object,ms=(n=>r=>{const i=Yk.call(r);return n[i]||(n[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),tn=n=>(n=n.toLowerCase(),r=>ms(r)===n),gs=n=>r=>typeof r===n,{isArray:co}=Array,ai=gs("undefined");function Xk(n){return n!==null&&!ai(n)&&n.constructor!==null&&!ai(n.constructor)&&It(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Bm=tn("ArrayBuffer");function Jk(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&Bm(n.buffer),r}const Zk=gs("string"),It=gs("function"),Mm=gs("number"),ys=n=>n!==null&&typeof n=="object",eS=n=>n===!0||n===!1,Fl=n=>{if(ms(n)!=="object")return!1;const r=Ec(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},tS=tn("Date"),nS=tn("File"),rS=tn("Blob"),oS=tn("FileList"),iS=n=>ys(n)&&It(n.pipe),lS=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||It(n.append)&&((r=ms(n))==="formdata"||r==="object"&&It(n.toString)&&n.toString()==="[object FormData]"))},sS=tn("URLSearchParams"),[aS,uS,cS,dS]=["ReadableStream","Request","Response","Headers"].map(tn),fS=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function hi(n,r,{allOwnKeys:i=!1}={}){if(n===null||typeof n>"u")return;let s,a;if(typeof n!="object"&&(n=[n]),co(n))for(s=0,a=n.length;s<a;s++)r.call(null,n[s],s,n);else{const d=i?Object.getOwnPropertyNames(n):Object.keys(n),f=d.length;let m;for(s=0;s<f;s++)m=d[s],r.call(null,n[m],m,n)}}function Um(n,r){r=r.toLowerCase();const i=Object.keys(n);let s=i.length,a;for(;s-- >0;)if(a=i[s],r===a.toLowerCase())return a;return null}const yr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Hm=n=>!ai(n)&&n!==yr;function Qu(){const{caseless:n}=Hm(this)&&this||{},r={},i=(s,a)=>{const d=n&&Um(r,a)||a;Fl(r[d])&&Fl(s)?r[d]=Qu(r[d],s):Fl(s)?r[d]=Qu({},s):co(s)?r[d]=s.slice():r[d]=s};for(let s=0,a=arguments.length;s<a;s++)arguments[s]&&hi(arguments[s],i);return r}const pS=(n,r,i,{allOwnKeys:s}={})=>(hi(r,(a,d)=>{i&&It(a)?n[d]=Fm(a,i):n[d]=a},{allOwnKeys:s}),n),hS=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),mS=(n,r,i,s)=>{n.prototype=Object.create(r.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),i&&Object.assign(n.prototype,i)},gS=(n,r,i,s)=>{let a,d,f;const m={};if(r=r||{},n==null)return r;do{for(a=Object.getOwnPropertyNames(n),d=a.length;d-- >0;)f=a[d],(!s||s(f,n,r))&&!m[f]&&(r[f]=n[f],m[f]=!0);n=i!==!1&&Ec(n)}while(n&&(!i||i(n,r))&&n!==Object.prototype);return r},yS=(n,r,i)=>{n=String(n),(i===void 0||i>n.length)&&(i=n.length),i-=r.length;const s=n.indexOf(r,i);return s!==-1&&s===i},vS=n=>{if(!n)return null;if(co(n))return n;let r=n.length;if(!Mm(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=n[r];return i},xS=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&Ec(Uint8Array)),wS=(n,r)=>{const s=(n&&n[Symbol.iterator]).call(n);let a;for(;(a=s.next())&&!a.done;){const d=a.value;r.call(n,d[0],d[1])}},kS=(n,r)=>{let i;const s=[];for(;(i=n.exec(r))!==null;)s.push(i);return s},SS=tn("HTMLFormElement"),ES=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,s,a){return s.toUpperCase()+a}),sh=(({hasOwnProperty:n})=>(r,i)=>n.call(r,i))(Object.prototype),bS=tn("RegExp"),Wm=(n,r)=>{const i=Object.getOwnPropertyDescriptors(n),s={};hi(i,(a,d)=>{let f;(f=r(a,d,n))!==!1&&(s[d]=f||a)}),Object.defineProperties(n,s)},CS=n=>{Wm(n,(r,i)=>{if(It(n)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const s=n[i];if(It(s)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},AS=(n,r)=>{const i={},s=a=>{a.forEach(d=>{i[d]=!0})};return co(n)?s(n):s(String(n).split(r)),i},RS=()=>{},$S=(n,r)=>n!=null&&Number.isFinite(n=+n)?n:r,Cu="abcdefghijklmnopqrstuvwxyz",ah="0123456789",Vm={DIGIT:ah,ALPHA:Cu,ALPHA_DIGIT:Cu+Cu.toUpperCase()+ah},TS=(n=16,r=Vm.ALPHA_DIGIT)=>{let i="";const{length:s}=r;for(;n--;)i+=r[Math.random()*s|0];return i};function PS(n){return!!(n&&It(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const NS=n=>{const r=new Array(10),i=(s,a)=>{if(ys(s)){if(r.indexOf(s)>=0)return;if(!("toJSON"in s)){r[a]=s;const d=co(s)?[]:{};return hi(s,(f,m)=>{const h=i(f,a+1);!ai(h)&&(d[m]=h)}),r[a]=void 0,d}}return s};return i(n,0)},jS=tn("AsyncFunction"),LS=n=>n&&(ys(n)||It(n))&&It(n.then)&&It(n.catch),Qm=((n,r)=>n?setImmediate:r?((i,s)=>(yr.addEventListener("message",({source:a,data:d})=>{a===yr&&d===i&&s.length&&s.shift()()},!1),a=>{s.push(a),yr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",It(yr.postMessage)),IS=typeof queueMicrotask<"u"?queueMicrotask.bind(yr):typeof process<"u"&&process.nextTick||Qm,_={isArray:co,isArrayBuffer:Bm,isBuffer:Xk,isFormData:lS,isArrayBufferView:Jk,isString:Zk,isNumber:Mm,isBoolean:eS,isObject:ys,isPlainObject:Fl,isReadableStream:aS,isRequest:uS,isResponse:cS,isHeaders:dS,isUndefined:ai,isDate:tS,isFile:nS,isBlob:rS,isRegExp:bS,isFunction:It,isStream:iS,isURLSearchParams:sS,isTypedArray:xS,isFileList:oS,forEach:hi,merge:Qu,extend:pS,trim:fS,stripBOM:hS,inherits:mS,toFlatObject:gS,kindOf:ms,kindOfTest:tn,endsWith:yS,toArray:vS,forEachEntry:wS,matchAll:kS,isHTMLForm:SS,hasOwnProperty:sh,hasOwnProp:sh,reduceDescriptors:Wm,freezeMethods:CS,toObjectSet:AS,toCamelCase:ES,noop:RS,toFiniteNumber:$S,findKey:Um,global:yr,isContextDefined:Hm,ALPHABET:Vm,generateString:TS,isSpecCompliantForm:PS,toJSONObject:NS,isAsyncFn:jS,isThenable:LS,setImmediate:Qm,asap:IS};function ye(n,r,i,s,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),s&&(this.request=s),a&&(this.response=a,this.status=a.status?a.status:null)}_.inherits(ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const Km=ye.prototype,Gm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Gm[n]={value:n}});Object.defineProperties(ye,Gm);Object.defineProperty(Km,"isAxiosError",{value:!0});ye.from=(n,r,i,s,a,d)=>{const f=Object.create(Km);return _.toFlatObject(n,f,function(h){return h!==Error.prototype},m=>m!=="isAxiosError"),ye.call(f,n.message,r,i,s,a),f.cause=n,f.name=n.name,d&&Object.assign(f,d),f};const DS=null;function Ku(n){return _.isPlainObject(n)||_.isArray(n)}function qm(n){return _.endsWith(n,"[]")?n.slice(0,-2):n}function uh(n,r,i){return n?n.concat(r).map(function(a,d){return a=qm(a),!i&&d?"["+a+"]":a}).join(i?".":""):r}function _S(n){return _.isArray(n)&&!n.some(Ku)}const OS=_.toFlatObject(_,{},null,function(r){return/^is[A-Z]/.test(r)});function vs(n,r,i){if(!_.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,i=_.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,b){return!_.isUndefined(b[C])});const s=i.metaTokens,a=i.visitor||w,d=i.dots,f=i.indexes,h=(i.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(r);if(!_.isFunction(a))throw new TypeError("visitor must be a function");function g(k){if(k===null)return"";if(_.isDate(k))return k.toISOString();if(!h&&_.isBlob(k))throw new ye("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(k)||_.isTypedArray(k)?h&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function w(k,C,b){let P=k;if(k&&!b&&typeof k=="object"){if(_.endsWith(C,"{}"))C=s?C:C.slice(0,-2),k=JSON.stringify(k);else if(_.isArray(k)&&_S(k)||(_.isFileList(k)||_.endsWith(C,"[]"))&&(P=_.toArray(k)))return C=qm(C),P.forEach(function(O,W){!(_.isUndefined(O)||O===null)&&r.append(f===!0?uh([C],W,d):f===null?C:C+"[]",g(O))}),!1}return Ku(k)?!0:(r.append(uh(b,C,d),g(k)),!1)}const y=[],S=Object.assign(OS,{defaultVisitor:w,convertValue:g,isVisitable:Ku});function R(k,C){if(!_.isUndefined(k)){if(y.indexOf(k)!==-1)throw Error("Circular reference detected in "+C.join("."));y.push(k),_.forEach(k,function(P,j){(!(_.isUndefined(P)||P===null)&&a.call(r,P,_.isString(j)?j.trim():j,C,S))===!0&&R(P,C?C.concat(j):[j])}),y.pop()}}if(!_.isObject(n))throw new TypeError("data must be an object");return R(n),r}function ch(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return r[s]})}function bc(n,r){this._pairs=[],n&&vs(n,this,r)}const Ym=bc.prototype;Ym.append=function(r,i){this._pairs.push([r,i])};Ym.toString=function(r){const i=r?function(s){return r.call(this,s,ch)}:ch;return this._pairs.map(function(a){return i(a[0])+"="+i(a[1])},"").join("&")};function zS(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Xm(n,r,i){if(!r)return n;const s=i&&i.encode||zS;_.isFunction(i)&&(i={serialize:i});const a=i&&i.serialize;let d;if(a?d=a(r,i):d=_.isURLSearchParams(r)?r.toString():new bc(r,i).toString(s),d){const f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+d}return n}class dh{constructor(){this.handlers=[]}use(r,i,s){return this.handlers.push({fulfilled:r,rejected:i,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){_.forEach(this.handlers,function(s){s!==null&&r(s)})}}const Jm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},FS=typeof URLSearchParams<"u"?URLSearchParams:bc,BS=typeof FormData<"u"?FormData:null,MS=typeof Blob<"u"?Blob:null,US={isBrowser:!0,classes:{URLSearchParams:FS,FormData:BS,Blob:MS},protocols:["http","https","file","blob","url","data"]},Cc=typeof window<"u"&&typeof document<"u",Gu=typeof navigator=="object"&&navigator||void 0,HS=Cc&&(!Gu||["ReactNative","NativeScript","NS"].indexOf(Gu.product)<0),WS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",VS=Cc&&window.location.href||"http://localhost",QS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Cc,hasStandardBrowserEnv:HS,hasStandardBrowserWebWorkerEnv:WS,navigator:Gu,origin:VS},Symbol.toStringTag,{value:"Module"})),ht={...QS,...US};function KS(n,r){return vs(n,new ht.classes.URLSearchParams,Object.assign({visitor:function(i,s,a,d){return ht.isNode&&_.isBuffer(i)?(this.append(s,i.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},r))}function GS(n){return _.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function qS(n){const r={},i=Object.keys(n);let s;const a=i.length;let d;for(s=0;s<a;s++)d=i[s],r[d]=n[d];return r}function Zm(n){function r(i,s,a,d){let f=i[d++];if(f==="__proto__")return!0;const m=Number.isFinite(+f),h=d>=i.length;return f=!f&&_.isArray(a)?a.length:f,h?(_.hasOwnProp(a,f)?a[f]=[a[f],s]:a[f]=s,!m):((!a[f]||!_.isObject(a[f]))&&(a[f]=[]),r(i,s,a[f],d)&&_.isArray(a[f])&&(a[f]=qS(a[f])),!m)}if(_.isFormData(n)&&_.isFunction(n.entries)){const i={};return _.forEachEntry(n,(s,a)=>{r(GS(s),a,i,0)}),i}return null}function YS(n,r,i){if(_.isString(n))try{return(r||JSON.parse)(n),_.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(n)}const mi={transitional:Jm,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const s=i.getContentType()||"",a=s.indexOf("application/json")>-1,d=_.isObject(r);if(d&&_.isHTMLForm(r)&&(r=new FormData(r)),_.isFormData(r))return a?JSON.stringify(Zm(r)):r;if(_.isArrayBuffer(r)||_.isBuffer(r)||_.isStream(r)||_.isFile(r)||_.isBlob(r)||_.isReadableStream(r))return r;if(_.isArrayBufferView(r))return r.buffer;if(_.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let m;if(d){if(s.indexOf("application/x-www-form-urlencoded")>-1)return KS(r,this.formSerializer).toString();if((m=_.isFileList(r))||s.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return vs(m?{"files[]":r}:r,h&&new h,this.formSerializer)}}return d||a?(i.setContentType("application/json",!1),YS(r)):r}],transformResponse:[function(r){const i=this.transitional||mi.transitional,s=i&&i.forcedJSONParsing,a=this.responseType==="json";if(_.isResponse(r)||_.isReadableStream(r))return r;if(r&&_.isString(r)&&(s&&!this.responseType||a)){const f=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(m){if(f)throw m.name==="SyntaxError"?ye.from(m,ye.ERR_BAD_RESPONSE,this,null,this.response):m}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ht.classes.FormData,Blob:ht.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],n=>{mi.headers[n]={}});const XS=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),JS=n=>{const r={};let i,s,a;return n&&n.split(`
`).forEach(function(f){a=f.indexOf(":"),i=f.substring(0,a).trim().toLowerCase(),s=f.substring(a+1).trim(),!(!i||r[i]&&XS[i])&&(i==="set-cookie"?r[i]?r[i].push(s):r[i]=[s]:r[i]=r[i]?r[i]+", "+s:s)}),r},fh=Symbol("internals");function ti(n){return n&&String(n).trim().toLowerCase()}function Bl(n){return n===!1||n==null?n:_.isArray(n)?n.map(Bl):String(n)}function ZS(n){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=i.exec(n);)r[s[1]]=s[2];return r}const eE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Au(n,r,i,s,a){if(_.isFunction(s))return s.call(this,r,i);if(a&&(r=i),!!_.isString(r)){if(_.isString(s))return r.indexOf(s)!==-1;if(_.isRegExp(s))return s.test(r)}}function tE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,s)=>i.toUpperCase()+s)}function nE(n,r){const i=_.toCamelCase(" "+r);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+i,{value:function(a,d,f){return this[s].call(this,r,a,d,f)},configurable:!0})})}class At{constructor(r){r&&this.set(r)}set(r,i,s){const a=this;function d(m,h,g){const w=ti(h);if(!w)throw new Error("header name must be a non-empty string");const y=_.findKey(a,w);(!y||a[y]===void 0||g===!0||g===void 0&&a[y]!==!1)&&(a[y||h]=Bl(m))}const f=(m,h)=>_.forEach(m,(g,w)=>d(g,w,h));if(_.isPlainObject(r)||r instanceof this.constructor)f(r,i);else if(_.isString(r)&&(r=r.trim())&&!eE(r))f(JS(r),i);else if(_.isHeaders(r))for(const[m,h]of r.entries())d(h,m,s);else r!=null&&d(i,r,s);return this}get(r,i){if(r=ti(r),r){const s=_.findKey(this,r);if(s){const a=this[s];if(!i)return a;if(i===!0)return ZS(a);if(_.isFunction(i))return i.call(this,a,s);if(_.isRegExp(i))return i.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=ti(r),r){const s=_.findKey(this,r);return!!(s&&this[s]!==void 0&&(!i||Au(this,this[s],s,i)))}return!1}delete(r,i){const s=this;let a=!1;function d(f){if(f=ti(f),f){const m=_.findKey(s,f);m&&(!i||Au(s,s[m],m,i))&&(delete s[m],a=!0)}}return _.isArray(r)?r.forEach(d):d(r),a}clear(r){const i=Object.keys(this);let s=i.length,a=!1;for(;s--;){const d=i[s];(!r||Au(this,this[d],d,r,!0))&&(delete this[d],a=!0)}return a}normalize(r){const i=this,s={};return _.forEach(this,(a,d)=>{const f=_.findKey(s,d);if(f){i[f]=Bl(a),delete i[d];return}const m=r?tE(d):String(d).trim();m!==d&&delete i[d],i[m]=Bl(a),s[m]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return _.forEach(this,(s,a)=>{s!=null&&s!==!1&&(i[a]=r&&_.isArray(s)?s.join(", "):s)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const s=new this(r);return i.forEach(a=>s.set(a)),s}static accessor(r){const s=(this[fh]=this[fh]={accessors:{}}).accessors,a=this.prototype;function d(f){const m=ti(f);s[m]||(nE(a,f),s[m]=!0)}return _.isArray(r)?r.forEach(d):d(r),this}}At.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(At.prototype,({value:n},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(s){this[i]=s}}});_.freezeMethods(At);function Ru(n,r){const i=this||mi,s=r||i,a=At.from(s.headers);let d=s.data;return _.forEach(n,function(m){d=m.call(i,d,a.normalize(),r?r.status:void 0)}),a.normalize(),d}function eg(n){return!!(n&&n.__CANCEL__)}function fo(n,r,i){ye.call(this,n??"canceled",ye.ERR_CANCELED,r,i),this.name="CanceledError"}_.inherits(fo,ye,{__CANCEL__:!0});function tg(n,r,i){const s=i.config.validateStatus;!i.status||!s||s(i.status)?n(i):r(new ye("Request failed with status code "+i.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function rE(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function oE(n,r){n=n||10;const i=new Array(n),s=new Array(n);let a=0,d=0,f;return r=r!==void 0?r:1e3,function(h){const g=Date.now(),w=s[d];f||(f=g),i[a]=h,s[a]=g;let y=d,S=0;for(;y!==a;)S+=i[y++],y=y%n;if(a=(a+1)%n,a===d&&(d=(d+1)%n),g-f<r)return;const R=w&&g-w;return R?Math.round(S*1e3/R):void 0}}function iE(n,r){let i=0,s=1e3/r,a,d;const f=(g,w=Date.now())=>{i=w,a=null,d&&(clearTimeout(d),d=null),n.apply(null,g)};return[(...g)=>{const w=Date.now(),y=w-i;y>=s?f(g,w):(a=g,d||(d=setTimeout(()=>{d=null,f(a)},s-y)))},()=>a&&f(a)]}const ql=(n,r,i=3)=>{let s=0;const a=oE(50,250);return iE(d=>{const f=d.loaded,m=d.lengthComputable?d.total:void 0,h=f-s,g=a(h),w=f<=m;s=f;const y={loaded:f,total:m,progress:m?f/m:void 0,bytes:h,rate:g||void 0,estimated:g&&m&&w?(m-f)/g:void 0,event:d,lengthComputable:m!=null,[r?"download":"upload"]:!0};n(y)},i)},ph=(n,r)=>{const i=n!=null;return[s=>r[0]({lengthComputable:i,total:n,loaded:s}),r[1]]},hh=n=>(...r)=>_.asap(()=>n(...r)),lE=ht.hasStandardBrowserEnv?((n,r)=>i=>(i=new URL(i,ht.origin),n.protocol===i.protocol&&n.host===i.host&&(r||n.port===i.port)))(new URL(ht.origin),ht.navigator&&/(msie|trident)/i.test(ht.navigator.userAgent)):()=>!0,sE=ht.hasStandardBrowserEnv?{write(n,r,i,s,a,d){const f=[n+"="+encodeURIComponent(r)];_.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),_.isString(s)&&f.push("path="+s),_.isString(a)&&f.push("domain="+a),d===!0&&f.push("secure"),document.cookie=f.join("; ")},read(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function aE(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function uE(n,r){return r?n.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):n}function ng(n,r){return n&&!aE(r)?uE(n,r):r}const mh=n=>n instanceof At?{...n}:n;function br(n,r){r=r||{};const i={};function s(g,w,y,S){return _.isPlainObject(g)&&_.isPlainObject(w)?_.merge.call({caseless:S},g,w):_.isPlainObject(w)?_.merge({},w):_.isArray(w)?w.slice():w}function a(g,w,y,S){if(_.isUndefined(w)){if(!_.isUndefined(g))return s(void 0,g,y,S)}else return s(g,w,y,S)}function d(g,w){if(!_.isUndefined(w))return s(void 0,w)}function f(g,w){if(_.isUndefined(w)){if(!_.isUndefined(g))return s(void 0,g)}else return s(void 0,w)}function m(g,w,y){if(y in r)return s(g,w);if(y in n)return s(void 0,g)}const h={url:d,method:d,data:d,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:m,headers:(g,w,y)=>a(mh(g),mh(w),y,!0)};return _.forEach(Object.keys(Object.assign({},n,r)),function(w){const y=h[w]||a,S=y(n[w],r[w],w);_.isUndefined(S)&&y!==m||(i[w]=S)}),i}const rg=n=>{const r=br({},n);let{data:i,withXSRFToken:s,xsrfHeaderName:a,xsrfCookieName:d,headers:f,auth:m}=r;r.headers=f=At.from(f),r.url=Xm(ng(r.baseURL,r.url),n.params,n.paramsSerializer),m&&f.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let h;if(_.isFormData(i)){if(ht.hasStandardBrowserEnv||ht.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((h=f.getContentType())!==!1){const[g,...w]=h?h.split(";").map(y=>y.trim()).filter(Boolean):[];f.setContentType([g||"multipart/form-data",...w].join("; "))}}if(ht.hasStandardBrowserEnv&&(s&&_.isFunction(s)&&(s=s(r)),s||s!==!1&&lE(r.url))){const g=a&&d&&sE.read(d);g&&f.set(a,g)}return r},cE=typeof XMLHttpRequest<"u",dE=cE&&function(n){return new Promise(function(i,s){const a=rg(n);let d=a.data;const f=At.from(a.headers).normalize();let{responseType:m,onUploadProgress:h,onDownloadProgress:g}=a,w,y,S,R,k;function C(){R&&R(),k&&k(),a.cancelToken&&a.cancelToken.unsubscribe(w),a.signal&&a.signal.removeEventListener("abort",w)}let b=new XMLHttpRequest;b.open(a.method.toUpperCase(),a.url,!0),b.timeout=a.timeout;function P(){if(!b)return;const O=At.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),Q={data:!m||m==="text"||m==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:O,config:n,request:b};tg(function(q){i(q),C()},function(q){s(q),C()},Q),b=null}"onloadend"in b?b.onloadend=P:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(P)},b.onabort=function(){b&&(s(new ye("Request aborted",ye.ECONNABORTED,n,b)),b=null)},b.onerror=function(){s(new ye("Network Error",ye.ERR_NETWORK,n,b)),b=null},b.ontimeout=function(){let W=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const Q=a.transitional||Jm;a.timeoutErrorMessage&&(W=a.timeoutErrorMessage),s(new ye(W,Q.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,n,b)),b=null},d===void 0&&f.setContentType(null),"setRequestHeader"in b&&_.forEach(f.toJSON(),function(W,Q){b.setRequestHeader(Q,W)}),_.isUndefined(a.withCredentials)||(b.withCredentials=!!a.withCredentials),m&&m!=="json"&&(b.responseType=a.responseType),g&&([S,k]=ql(g,!0),b.addEventListener("progress",S)),h&&b.upload&&([y,R]=ql(h),b.upload.addEventListener("progress",y),b.upload.addEventListener("loadend",R)),(a.cancelToken||a.signal)&&(w=O=>{b&&(s(!O||O.type?new fo(null,n,b):O),b.abort(),b=null)},a.cancelToken&&a.cancelToken.subscribe(w),a.signal&&(a.signal.aborted?w():a.signal.addEventListener("abort",w)));const j=rE(a.url);if(j&&ht.protocols.indexOf(j)===-1){s(new ye("Unsupported protocol "+j+":",ye.ERR_BAD_REQUEST,n));return}b.send(d||null)})},fE=(n,r)=>{const{length:i}=n=n?n.filter(Boolean):[];if(r||i){let s=new AbortController,a;const d=function(g){if(!a){a=!0,m();const w=g instanceof Error?g:this.reason;s.abort(w instanceof ye?w:new fo(w instanceof Error?w.message:w))}};let f=r&&setTimeout(()=>{f=null,d(new ye(`timeout ${r} of ms exceeded`,ye.ETIMEDOUT))},r);const m=()=>{n&&(f&&clearTimeout(f),f=null,n.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),n=null)};n.forEach(g=>g.addEventListener("abort",d));const{signal:h}=s;return h.unsubscribe=()=>_.asap(m),h}},pE=function*(n,r){let i=n.byteLength;if(i<r){yield n;return}let s=0,a;for(;s<i;)a=s+r,yield n.slice(s,a),s=a},hE=async function*(n,r){for await(const i of mE(n))yield*pE(i,r)},mE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const r=n.getReader();try{for(;;){const{done:i,value:s}=await r.read();if(i)break;yield s}}finally{await r.cancel()}},gh=(n,r,i,s)=>{const a=hE(n,r);let d=0,f,m=h=>{f||(f=!0,s&&s(h))};return new ReadableStream({async pull(h){try{const{done:g,value:w}=await a.next();if(g){m(),h.close();return}let y=w.byteLength;if(i){let S=d+=y;i(S)}h.enqueue(new Uint8Array(w))}catch(g){throw m(g),g}},cancel(h){return m(h),a.return()}},{highWaterMark:2})},xs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",og=xs&&typeof ReadableStream=="function",gE=xs&&(typeof TextEncoder=="function"?(n=>r=>n.encode(r))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),ig=(n,...r)=>{try{return!!n(...r)}catch{return!1}},yE=og&&ig(()=>{let n=!1;const r=new Request(ht.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!r}),yh=64*1024,qu=og&&ig(()=>_.isReadableStream(new Response("").body)),Yl={stream:qu&&(n=>n.body)};xs&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!Yl[r]&&(Yl[r]=_.isFunction(n[r])?i=>i[r]():(i,s)=>{throw new ye(`Response type '${r}' is not supported`,ye.ERR_NOT_SUPPORT,s)})})})(new Response);const vE=async n=>{if(n==null)return 0;if(_.isBlob(n))return n.size;if(_.isSpecCompliantForm(n))return(await new Request(ht.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(_.isArrayBufferView(n)||_.isArrayBuffer(n))return n.byteLength;if(_.isURLSearchParams(n)&&(n=n+""),_.isString(n))return(await gE(n)).byteLength},xE=async(n,r)=>{const i=_.toFiniteNumber(n.getContentLength());return i??vE(r)},wE=xs&&(async n=>{let{url:r,method:i,data:s,signal:a,cancelToken:d,timeout:f,onDownloadProgress:m,onUploadProgress:h,responseType:g,headers:w,withCredentials:y="same-origin",fetchOptions:S}=rg(n);g=g?(g+"").toLowerCase():"text";let R=fE([a,d&&d.toAbortSignal()],f),k;const C=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let b;try{if(h&&yE&&i!=="get"&&i!=="head"&&(b=await xE(w,s))!==0){let Q=new Request(r,{method:"POST",body:s,duplex:"half"}),K;if(_.isFormData(s)&&(K=Q.headers.get("content-type"))&&w.setContentType(K),Q.body){const[q,fe]=ph(b,ql(hh(h)));s=gh(Q.body,yh,q,fe)}}_.isString(y)||(y=y?"include":"omit");const P="credentials"in Request.prototype;k=new Request(r,{...S,signal:R,method:i.toUpperCase(),headers:w.normalize().toJSON(),body:s,duplex:"half",credentials:P?y:void 0});let j=await fetch(k);const O=qu&&(g==="stream"||g==="response");if(qu&&(m||O&&C)){const Q={};["status","statusText","headers"].forEach(me=>{Q[me]=j[me]});const K=_.toFiniteNumber(j.headers.get("content-length")),[q,fe]=m&&ph(K,ql(hh(m),!0))||[];j=new Response(gh(j.body,yh,q,()=>{fe&&fe(),C&&C()}),Q)}g=g||"text";let W=await Yl[_.findKey(Yl,g)||"text"](j,n);return!O&&C&&C(),await new Promise((Q,K)=>{tg(Q,K,{data:W,headers:At.from(j.headers),status:j.status,statusText:j.statusText,config:n,request:k})})}catch(P){throw C&&C(),P&&P.name==="TypeError"&&/fetch/i.test(P.message)?Object.assign(new ye("Network Error",ye.ERR_NETWORK,n,k),{cause:P.cause||P}):ye.from(P,P&&P.code,n,k)}}),Yu={http:DS,xhr:dE,fetch:wE};_.forEach(Yu,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const vh=n=>`- ${n}`,kE=n=>_.isFunction(n)||n===null||n===!1,lg={getAdapter:n=>{n=_.isArray(n)?n:[n];const{length:r}=n;let i,s;const a={};for(let d=0;d<r;d++){i=n[d];let f;if(s=i,!kE(i)&&(s=Yu[(f=String(i)).toLowerCase()],s===void 0))throw new ye(`Unknown adapter '${f}'`);if(s)break;a[f||"#"+d]=s}if(!s){const d=Object.entries(a).map(([m,h])=>`adapter ${m} `+(h===!1?"is not supported by the environment":"is not available in the build"));let f=r?d.length>1?`since :
`+d.map(vh).join(`
`):" "+vh(d[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return s},adapters:Yu};function $u(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new fo(null,n)}function xh(n){return $u(n),n.headers=At.from(n.headers),n.data=Ru.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),lg.getAdapter(n.adapter||mi.adapter)(n).then(function(s){return $u(n),s.data=Ru.call(n,n.transformResponse,s),s.headers=At.from(s.headers),s},function(s){return eg(s)||($u(n),s&&s.response&&(s.response.data=Ru.call(n,n.transformResponse,s.response),s.response.headers=At.from(s.response.headers))),Promise.reject(s)})}const sg="1.7.9",ws={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{ws[n]=function(s){return typeof s===n||"a"+(r<1?"n ":" ")+n}});const wh={};ws.transitional=function(r,i,s){function a(d,f){return"[Axios v"+sg+"] Transitional option '"+d+"'"+f+(s?". "+s:"")}return(d,f,m)=>{if(r===!1)throw new ye(a(f," has been removed"+(i?" in "+i:"")),ye.ERR_DEPRECATED);return i&&!wh[f]&&(wh[f]=!0,console.warn(a(f," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(d,f,m):!0}};ws.spelling=function(r){return(i,s)=>(console.warn(`${s} is likely a misspelling of ${r}`),!0)};function SE(n,r,i){if(typeof n!="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let a=s.length;for(;a-- >0;){const d=s[a],f=r[d];if(f){const m=n[d],h=m===void 0||f(m,d,n);if(h!==!0)throw new ye("option "+d+" must be "+h,ye.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ye("Unknown option "+d,ye.ERR_BAD_OPTION)}}const Ml={assertOptions:SE,validators:ws},cn=Ml.validators;class xr{constructor(r){this.defaults=r,this.interceptors={request:new dh,response:new dh}}async request(r,i){try{return await this._request(r,i)}catch(s){if(s instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const d=a.stack?a.stack.replace(/^.+\n/,""):"";try{s.stack?d&&!String(s.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+d):s.stack=d}catch{}}throw s}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=br(this.defaults,i);const{transitional:s,paramsSerializer:a,headers:d}=i;s!==void 0&&Ml.assertOptions(s,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),a!=null&&(_.isFunction(a)?i.paramsSerializer={serialize:a}:Ml.assertOptions(a,{encode:cn.function,serialize:cn.function},!0)),Ml.assertOptions(i,{baseUrl:cn.spelling("baseURL"),withXsrfToken:cn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=d&&_.merge(d.common,d[i.method]);d&&_.forEach(["delete","get","head","post","put","patch","common"],k=>{delete d[k]}),i.headers=At.concat(f,d);const m=[];let h=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(i)===!1||(h=h&&C.synchronous,m.unshift(C.fulfilled,C.rejected))});const g=[];this.interceptors.response.forEach(function(C){g.push(C.fulfilled,C.rejected)});let w,y=0,S;if(!h){const k=[xh.bind(this),void 0];for(k.unshift.apply(k,m),k.push.apply(k,g),S=k.length,w=Promise.resolve(i);y<S;)w=w.then(k[y++],k[y++]);return w}S=m.length;let R=i;for(y=0;y<S;){const k=m[y++],C=m[y++];try{R=k(R)}catch(b){C.call(this,b);break}}try{w=xh.call(this,R)}catch(k){return Promise.reject(k)}for(y=0,S=g.length;y<S;)w=w.then(g[y++],g[y++]);return w}getUri(r){r=br(this.defaults,r);const i=ng(r.baseURL,r.url);return Xm(i,r.params,r.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(r){xr.prototype[r]=function(i,s){return this.request(br(s||{},{method:r,url:i,data:(s||{}).data}))}});_.forEach(["post","put","patch"],function(r){function i(s){return function(d,f,m){return this.request(br(m||{},{method:r,headers:s?{"Content-Type":"multipart/form-data"}:{},url:d,data:f}))}}xr.prototype[r]=i(),xr.prototype[r+"Form"]=i(!0)});class Ac{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(d){i=d});const s=this;this.promise.then(a=>{if(!s._listeners)return;let d=s._listeners.length;for(;d-- >0;)s._listeners[d](a);s._listeners=null}),this.promise.then=a=>{let d;const f=new Promise(m=>{s.subscribe(m),d=m}).then(a);return f.cancel=function(){s.unsubscribe(d)},f},r(function(d,f,m){s.reason||(s.reason=new fo(d,f,m),i(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=s=>{r.abort(s)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new Ac(function(a){r=a}),cancel:r}}}function EE(n){return function(i){return n.apply(null,i)}}function bE(n){return _.isObject(n)&&n.isAxiosError===!0}const Xu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xu).forEach(([n,r])=>{Xu[r]=n});function ag(n){const r=new xr(n),i=Fm(xr.prototype.request,r);return _.extend(i,xr.prototype,r,{allOwnKeys:!0}),_.extend(i,r,null,{allOwnKeys:!0}),i.create=function(a){return ag(br(n,a))},i}const De=ag(mi);De.Axios=xr;De.CanceledError=fo;De.CancelToken=Ac;De.isCancel=eg;De.VERSION=sg;De.toFormData=vs;De.AxiosError=ye;De.Cancel=De.CanceledError;De.all=function(r){return Promise.all(r)};De.spread=EE;De.isAxiosError=bE;De.mergeConfig=br;De.AxiosHeaders=At;De.formToJSON=n=>Zm(_.isHTMLForm(n)?new FormData(n):n);De.getAdapter=lg.getAdapter;De.HttpStatusCode=Xu;De.default=De;const Ju=x.createContext({});function CE({children:n}){const[r,i]=x.useState("url(/win-cursor/arrow.cur), auto"),[s,a]=x.useState([]),[d,f]=x.useState({image:"",type:1}),m=localStorage.getItem("wallpaper");x.useEffect(()=>{f(m!==null?JSON.parse(m):{image:"",type:1})},[m]);const h=w=>{localStorage.setItem("wallpaper",JSON.stringify(w)),f(w)},g=w=>{i(`url(/win-cursor/${w}), auto`)};return v.jsx(Ju.Provider,{value:{cursor:r,changeCursor:g,storage:s,setStorage:a,wallpaper:d,changeWallpaper:h},children:n})}function er(){if(!Ju)throw new Error("useProcessContext must be used within a ProcessContextProvider");return x.useContext(Ju)}const AE=({games:n,fetchGames:r,setGames:i})=>{const{changeCursor:s}=er(),a=["Platform","Title","Started Date","Notes","Completed","Completed Date",""],[d,f]=x.useState(0),[m,h]=x.useState(!0);x.useEffect(()=>{g()},[]);const g=()=>{s("loading.cur");const k=setInterval(()=>{f(C=>{if(C===100)return h(!1),s("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(k)}},w=(k,C)=>{i(n.map((b,P)=>P===C?{...b,notes:k.target.value}:b))},y=k=>{h(!0),De.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{h(!0),De.post(`undefined/games/${k.id}/complete`).then(()=>r())},R=(k,C)=>{De.put(`undefined/games/${C.id}`,{notes:k.target.value})};return m?v.jsx(ls,{value:Math.floor(d)}):v.jsxs("div",{children:[v.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"GAMES!"}),n.length?v.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:v.jsxs(ds,{children:[v.jsx(us,{children:v.jsx(Er,{children:a.map(k=>v.jsx(cs,{children:k},k))})}),v.jsx(as,{children:n.map((k,C)=>v.jsxs(Er,{children:[v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("p",{children:k.platform.name})}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("div",{style:{minWidth:"150px"},children:v.jsx("p",{children:k.title})})}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?v.jsx(Ar,{style:{minWidth:"20vw"},onChange:b=>w(b,C),value:k.notes||"",onBlur:b=>R(b,k),multiline:!0,rows:4,fullWidth:!0}):k.notes}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?"Yes!":"No"}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completedDate}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&v.jsxs("div",{style:{width:"70px"},children:[v.jsx("img",{onClick:()=>S(k),src:qk,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),v.jsx("img",{onClick:()=>y(k),src:zm,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):v.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},RE=({saveAndGoBack:n})=>{const{changeCursor:r}=er(),[i,s]=x.useState([]),[a,d]=x.useState({}),[f,m]=x.useState(""),[h,g]=x.useState(0),[w,y]=x.useState(!1),[S,R]=x.useState(1);x.useEffect(()=>{h===100&&n(S)},[h]);const k=()=>{r("loading.cur");const b=setInterval(()=>{g(P=>{if(P===100)return 0;const j=Math.random()*50;return Math.min(P+j,100)})},500);return()=>{clearInterval(b)}};x.useEffect(()=>{De.get("undefined/platforms").then(b=>{s(b.data.map(P=>({...P,label:P.name})))})},[]);const C=()=>{R(w?2:1),k(),De.post("undefined/games",{platform_id:a.id,title:f,backlog:w})};return v.jsxs(v.Fragment,{children:[v.jsxs(cm,{label:"New Game",children:[v.jsxs("div",{children:[v.jsx("p",{children:"Platform"}),v.jsx(pc,{formatDisplay:()=>a.name,labelId:"opt.name",options:[{},...i],menuMaxHeight:160,width:160,onChange:b=>d(b)})]}),v.jsxs("div",{style:{marginTop:"5px"},children:[v.jsx("p",{children:"Title"}),v.jsx(Ar,{value:f,placeholder:"Type here...",onChange:b=>m(b.target.value),fullWidth:!0})]}),v.jsxs("div",{style:{marginTop:"5px",display:"flex"},children:[v.jsx(Zh,{value:w,onChange:()=>y(!w),style:{marginTop:"2px"}}),v.jsx("p",{children:"Backlog"})]})]}),v.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"},children:h>0?v.jsx(ls,{value:Math.floor(h)}):v.jsx(v.Fragment,{children:v.jsx(xe,{disabled:Object.keys(a).length===0||!f,onClick:()=>C(),style:{textAlign:"center"},children:"Save new game"})})})]})},$E="/freecellman.png",TE=({games:n,fetchGames:r,setGames:i})=>{const{changeCursor:s}=er(),a=["Platform","Title","Logged Date","Notes",""],[d,f]=x.useState(0),[m,h]=x.useState(!0);x.useEffect(()=>{g()},[]);const g=()=>{s("loading.cur");const k=setInterval(()=>{f(C=>{if(C===100)return h(!1),s("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(k)}},w=(k,C)=>{i(n.map((b,P)=>P===C?{...b,notes:k.target.value}:b))},y=k=>{h(!0),De.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{h(!0),De.get(`undefined/games/${k.id}/start`).then(()=>r())},R=(k,C)=>{De.put(`undefined/games/${C.id}`,{notes:k.target.value})};return m?v.jsx(ls,{value:Math.floor(d)}):v.jsxs("div",{children:[v.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Backlog"}),n.length?v.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:v.jsxs(ds,{children:[v.jsx(us,{children:v.jsx(Er,{children:a.map(k=>v.jsx(cs,{children:k},k))})}),v.jsx(as,{children:n.map((k,C)=>v.jsxs(Er,{children:[v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("p",{children:k.platform.name})}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("div",{style:{minWidth:"300px"},children:v.jsx("p",{children:k.title})})}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx(Ar,{style:{minWidth:"20vw"},onChange:b=>w(b,C),value:k.notes||"",onBlur:b=>R(b,k),multiline:!0,rows:2,fullWidth:!0})}),v.jsx(at,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&v.jsxs("div",{style:{width:"70px"},children:[v.jsx("img",{onClick:()=>S(k),src:$E,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),v.jsx("img",{onClick:()=>y(k),src:zm,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):v.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},ug=()=>{const[n,r]=x.useState(1),[i,s]=x.useState([]),[a,d]=x.useState(!1);x.useEffect(()=>{f(!0)},[]),x.useEffect(()=>{switch(localStorage.setItem("system.gamecache.page",String(n)),n){case 1:f(!1);break;case 2:f(!0);break}},[n]);const f=w=>{s([]),De.get(`undefined/games${w?"/backlog":""}`).then(y=>s(y.data))},m=w=>{r(w),d(!1)},h=w=>{r(w),f(w===2)},g=[{component:v.jsx(RE,{saveAndGoBack:h}),text:"Add new Game to your Backlog"},{component:v.jsx(AE,{setGames:s,fetchGames:()=>f(!1),games:i}),text:"Game list"},{component:v.jsx(TE,{setGames:s,fetchGames:()=>f(!0),games:i}),text:"Backloged games, ready to play!"}];return v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>d(!a),children:"File"}),a&&v.jsxs(ci,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:[v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>m(0),children:"New Game"}),v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>m(1),children:v.jsx("p",{children:"Game List"})}),v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>m(2),children:v.jsx("p",{children:"Backlog"})})]}),v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>d(!1),children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:g[n].component}),v.jsx(Rt,{variant:"well",className:"footer",children:g[n].text})]})},Rc=()=>{const[n,r]=x.useState(""),[i,s]=x.useState(!1),a=d=>{switch(d){case 0:r("");break;case 1:alert("Save file");break;case 2:alert("Load file");break}s(!1)};return x.useEffect(()=>{const d=localStorage.getItem("App.Notes.tempValue");d&&r(d)},[]),x.useEffect(()=>{localStorage.setItem("App.Notes.tempValue",n)},[n]),v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>s(!i),children:"File"}),i&&v.jsxs(ci,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:[v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>a(0),children:"New Note"}),v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>a(1),children:v.jsx("p",{children:"Save File"})}),v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>a(1),children:v.jsx("p",{children:"Load File"})})]}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"}),v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>s(!1),children:"About us"})]}),v.jsx(xt,{children:v.jsx(Ar,{style:{minWidth:"60vw"},value:n,onChange:d=>r(d.target.value),multiline:!0,rows:20,fullWidth:!0})}),v.jsx(Rt,{variant:"well",className:"footer",children:v.jsx("p",{children:"Notes App, the file name will appear here : )"})})]})},cg=()=>v.jsxs(v.Fragment,{children:[v.jsx(xt,{children:v.jsx("iframe",{width:"680",height:"400",frameBorder:"0",src:"https://web.archive.org/web/20250307002700/https://www.google.com/web/20250307002700/https://www.google.com/x`x",allowFullScreen:!1})}),v.jsx(Rt,{variant:"well",className:"footer",children:"Browser"})]}),$c=({level:n})=>{const{addProcess:r,fetchIcon:i,programs:s}=gi(),{storage:a,setStorage:d}=er(),[f,m]=x.useState(!1);x.useState(""),x.useState(!1),x.useEffect(()=>{},[]);const h=w=>{let y=[0,0];for(let R=0;R<a.length;R++){const k=a[R];for(let C=0;C<k.length;C++)k[C].length>=4||(y=[R,C])}console.log(y);const S=a;S[y[0]]||d([[w]]),S[y[0]][y[1]]=w,console.log(S),d(S),m(!1)},g=(w,y)=>{d(a.map((S,R)=>S.map((k,C)=>w===R&&y===C?(k.selected&&r(k),{...k,selected:!k.selected}):{...k,selected:!1})))};return v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>m(!f),children:"New File"}),f&&v.jsx(ci,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:s.map((w,y)=>v.jsxs(Jt,{onClick:()=>h(w),style:{cursor:"pointer",display:"flex"},children:[v.jsx("img",{src:w.icon,alt:w.name,style:{width:"20px",height:"20px",marginRight:"10px"}}),v.jsx("p",{children:w.name})]},y))})]}),v.jsx(xt,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:v.jsx("div",{style:{width:"700px"},children:v.jsx("div",{style:{width:"100%"},children:Array.from({length:7}).map((w,y)=>v.jsx("div",{style:{display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"},children:Array.from({length:7}).map((S,R)=>a[y]&&a[y][R]&&v.jsxs("div",{onClick:()=>g(y,R),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column",paddingRight:"30px"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsx("img",{src:a[y][R].icon,style:{height:"70px",filter:a[y][R].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),v.jsx("p",{style:{color:a[y][R].selected?"white":"black",textAlign:"center",backgroundColor:a[y][R].selected?"#000080":"transparent"},children:a[y][R].name})]}))}))})})}),v.jsx(Rt,{variant:"well",className:"footer",children:v.jsx("p",{children:"Explorer"})})]})},dg=()=>v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(hs,{bundleUrl:"dos/tomb.jsdos"})})}),v.jsx(Rt,{variant:"well",className:"footer",children:"Tomb Raider"})]}),fg=()=>v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(hs,{bundleUrl:"dos/PERSIA.jsdos"})})}),v.jsx(Rt,{variant:"well",className:"footer",children:"TEST"})]}),PE="https://radio.plaza.one/mp3",kh="https://api.plaza.one/status",pg=()=>{const[n,r]=x.useState(null),[i,s]=x.useState(1);return x.useEffect(()=>{fetch(kh).then(d=>d.json()).then(d=>r(d.song)),s(Math.floor(Math.random()*10)+1);const a=setInterval(()=>{s(Math.floor(Math.random()*10)+1),fetch(kh).then(d=>d.json()).then(d=>r(d.song))},12e4);return()=>clearInterval(a)},[]),v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{children:v.jsxs("div",{style:{width:"300px"},className:"flex flex-col items-center gap-4",children:[v.jsx("h2",{className:"text-2xl font-bold",children:"Vaporwave Radio"}),v.jsx("audio",{controls:!0,autoPlay:!0,src:PE,className:"w-full max-w-md"}),n?v.jsxs("div",{className:"flex flex-col items-center",children:[v.jsx("img",{width:"200px",src:n.artwork_src??"/default_cover.jpg",alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),v.jsx("div",{className:"text-lg font-semibold",children:n.title}),v.jsx("div",{className:"text-sm text-neutral-400",children:n.artist})]}):v.jsxs("div",{className:"flex flex-col items-center",children:[v.jsx("img",{width:"200px",src:`/vaporwave/${i}.jpeg`,alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),v.jsx("div",{className:"text-lg font-semibold",children:"Sunset over Neon Palms"}),v.jsx("div",{className:"text-sm text-neutral-400",children:"Dream Mall Escalator"})]})]})}),v.jsx(Rt,{variant:"well",className:"footer",children:v.jsxs("p",{className:"text-sm text-neutral-400",children:["Powered by ",v.jsx("a",{href:"https://plaza.one",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Nightwave Plaza"})]})})]})},NE=()=>{const[n,r]=x.useState(""),[i,s]=x.useState(1),{changeWallpaper:a}=er(),d=["#008080","#000080","#000000","#00FF00","#800000","#FF00FF"],f=M.img`
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,m=M.div`
        width: 80px;
        height: 80px;
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,h=(y,S)=>{r(y),s(S)},g=()=>n?i===2?{background:n}:{backgroundImage:`url('/${n}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:"blue"},w=M.div`
        display: flex;
        justify-content: end;
        margin-top: 20px;
    `;return v.jsxs("div",{style:{width:"800px",maxHeight:"70vh",overflowY:"scroll",overflowX:"hidden"},children:[v.jsx("p",{className:"text-xl pb-4 font-bold",children:"Choose the wallpaper"}),v.jsx("div",{className:"flex justify-center",children:v.jsx(dm,{backgroundStyles:g()})}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Solid Colors"}),v.jsx("div",{className:"flex justify-between",children:d.map(y=>v.jsx(m,{style:{background:y},onClick:()=>h(y,2),className:"p-2 cursor-pointer hover"}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Windows XP"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:5},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/xp-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/xp-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Windows 7"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:4},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/7-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/7-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Vaporwave Style"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:7},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/vw-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/vw-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Games"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:1},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>h(`wallpapers/games-${y}.png`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/games-${y}.png`}))})]}),v.jsx(w,{children:v.jsx(xe,{onClick:()=>a({image:n,type:i}),disabled:n==="",children:"Apply"})})]})},hg=()=>{const[n,r]=x.useState(!0),[i,s]=x.useState(null),[a,d]=x.useState([[{name:"Monitor",icon:"/monitor.png",component:NE,selected:!1}]]),f=x.useCallback((m,h)=>{d(a.map((g,w)=>g.map((y,S)=>a[m][h].selected===!0?(s(()=>a[m][h].component),r(!1),{...y,selected:!1}):w===m&&S===h?{...y,selected:!0}:{...y,selected:!1})))},[a,d]);return v.jsxs(v.Fragment,{children:[v.jsxs(vt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(xt,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:n||!i?v.jsx("div",{style:{width:"700px"},children:v.jsx("div",{style:{width:"100%"},children:Array.from({length:21}).map((m,h)=>v.jsx("div",{style:{display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"},children:Array.from({length:7}).map((g,w)=>a[h]&&a[h][w]&&v.jsxs("div",{onClick:()=>f(h,w),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column",paddingRight:"30px"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsx("img",{src:a[h][w].icon,style:{height:"70px",filter:a[h][w].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),v.jsx("p",{style:{color:a[h][w].selected?"white":"black",textAlign:"center",backgroundColor:a[h][w].selected?"#000080":"transparent"},children:a[h][w].name})]}))}))})}):i&&v.jsx(i,{})}),v.jsx(Rt,{variant:"well",className:"footer",children:"Control Panel"})]})},mg="/trash.svg",Zu="/my-computer.png",Tc="/task_manager.png",gg="/doom.png",yg="/doom2.png",vg="/backlogger.png",Xl="/notes.png",xg="/browser.png",Jl="/explorer.png",wg="/tomb.jpg",kg="/persia.png",Sg="/vapor.png";function jE(n){const r=[{exec:"recycle_bin",name:"Recycle Bin",icon:mg,component:Lm,permissions:[]},{exec:"my_computer",name:"My Computer",icon:Zu,component:Im,permissions:[]},{exec:"task_manager",name:"Task Manager",icon:Tc,component:Sc,permissions:["proc"]},{exec:"backlogger",name:"GameCache",icon:vg,component:ug,permissions:["net"]},{exec:"notes",name:"Notes",icon:Xl,component:Rc,permissions:["fs"]},{exec:"explorer",name:"Explorer",icon:Jl,component:$c,permissions:["fs","proc"]},{exec:"browser",name:"Browser",icon:xg,component:cg,permissions:["net"]},{exec:"vaporwave",name:"Nightwave Plaza",icon:Sg,component:pg,permissions:["net","audio"]},{exec:"control_panel",name:"Control Panel",icon:Zu,component:hg,permissions:[]},{exec:"doom",name:"Doom",icon:gg,component:_m,permissions:[]},{exec:"doomII",name:"Doom II",icon:yg,component:Om,permissions:[]},{exec:"tomb",name:"Tomb Raider",icon:wg,component:dg,permissions:[]},{exec:"persia",name:"Prince of Persia",icon:kg,component:fg,permissions:[]}];for(const i of r)n.register({...i,permissions:[...i.permissions]})}const Tu="vortex.proctable",LE="process";function IE(n){return{load(){const r=localStorage.getItem(Tu);if(r)return DE(r);const i=localStorage.getItem(LE);if(i){const s=_E(i,n);return s&&localStorage.setItem(Tu,JSON.stringify(s)),s}return null},save(r){localStorage.setItem(Tu,JSON.stringify(r))}}}function DE(n){try{const r=JSON.parse(n);return Array.isArray(r)?r:null}catch{return null}}function _E(n,r){let i;try{i=JSON.parse(n)}catch{return null}return Array.isArray(i)?i.filter(s=>s&&s.componentName).map(s=>{var a,d;return{pid:s.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:s.componentName,name:s.name??s.componentName,icon:s.icon??"",priority:typeof s.priority=="number"?s.priority:0,window:{x:((a=s.location)==null?void 0:a.x)??r().x,y:((d=s.location)==null?void 0:d.y)??r().y},cwd:"/home/user",state:"running"}}):null}const Eg=x.createContext(null),Sh=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2});function OE(){const n=new Hk;return jE(n),new Uk({registry:n,persistence:IE(Sh),defaultWindowLocation:Sh})}function zE({children:n,kernel:r}){const i=x.useMemo(()=>r??OE(),[r]);return v.jsx(Eg.Provider,{value:i,children:n})}function Pc(){const n=x.useContext(Eg);if(!n)throw new Error("useKernel must be used within a KernelProvider");return n}function bg(){const n=Pc();return x.useSyncExternalStore(n.subscribe,n.getSnapshot)}const Cg=D.createContext({});function FE({children:n}){const r=Pc(),i=bg(),s=x.useMemo(()=>i.map(y=>({uuid:y.pid,priority:y.priority,component:r.registry.component(y.exec)??(()=>null),selected:!1,icon:y.icon,name:y.name,location:y.window})),[i,r]),a=y=>{const S=y.componentName;S&&r.syscall(null,"spawn",{exec:S,name:y.name,icon:y.icon})},d=y=>{y&&r.syscall(null,"kill",{pid:y})},f=(y,S)=>{y.uuid&&r.syscall(null,"win_focus",{pid:y.uuid})},m=(y,S)=>{y&&r.syscall(null,"win_move",{pid:y,location:S})},h=y=>r.registry.component(y),g=y=>{switch(y){case"folder":return Jl;case"notes":return Xl}},w=[{name:"File",icon:Jl,componentName:"explorer",component:$c},{name:"Notes",icon:Xl,componentName:"notes",component:Rc}];return v.jsx(Cg.Provider,{value:{processes:s,setProcesses:()=>{},changePriority:f,closeProcess:d,ordenatedProcess:s,addProcess:a,handleProceessLocationChange:m,fetchIcon:g,fetchComponent:h,programs:w},children:n})}function gi(){return D.useContext(Cg)}const BE="/clouds.jpg",Ag="/w95.png",ME=()=>{const n=M.div`
        text-align: center;
    `,r=M.div`
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(${BE});
        background-size: cover;
        background-position: center;
        border: 4px solid #000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `;return v.jsx(r,{children:v.jsxs(n,{children:[v.jsx("div",{children:v.jsx("img",{src:Ag,width:200,className:"logo"})}),v.jsx("h1",{children:"VortexOS"}),v.jsx("div",{className:"card",children:v.jsx(kc,{to:"/vortex",children:v.jsx(xe,{primary:!0,children:"Are you ready?"})})}),v.jsx("p",{className:"read-the-docs",children:"By Serious Sam"})]})})},UE=()=>{const n=x.useRef(null),[r,i]=x.useState(0),{addProcess:s}=gi(),a=()=>{n.current&&i(n.current.getBoundingClientRect().height/7)},[d,f]=x.useState([[{name:"Recycle Bin",icon:mg,selected:!1,componentName:"recycle_bin",component:Lm,priority:0},{name:"GameCache",icon:vg,selected:!1,componentName:"backlogger",component:ug,priority:0}],[{name:"My Computer",icon:Zu,selected:!1,componentName:"my_computer",component:Im,priority:0},{name:"Nightwave Plaza",icon:Sg,selected:!1,componentName:"vaporwave",component:pg,priority:0}],[{name:"Task Manager",icon:Tc,selected:!1,componentName:"task_manager",component:Sc,priority:0},{name:"Doom",icon:gg,selected:!1,componentName:"doom",component:_m,priority:0}],[{name:"Explorer",icon:Jl,selected:!1,componentName:"explorer",component:$c,priority:0},{name:"Doom II",icon:yg,selected:!1,componentName:"doomII",component:Om,priority:0}],[{name:"Browser",icon:xg,selected:!1,componentName:"browser",component:cg,priority:0},{name:"Prince of Persia",icon:kg,selected:!1,componentName:"persia",component:fg,priority:0}],[{name:"Notes",icon:Xl,selected:!1,componentName:"notes",component:Rc,priority:0},{name:"Tomb Raider",icon:wg,selected:!1,componentName:"tomb",component:dg,priority:0}]]),m=(w,y)=>{f(d.map((S,R)=>S.map((k,C)=>w===R&&y===C?(k.selected&&s(k),{...k,selected:!k.selected}):{...k,selected:!1})))},h=(w,y)=>{d[w]&&d[w][y]||f(d.map(S=>S.map(R=>({...R,selected:!1}))))},g=()=>{new Audio("win98.mp3").play()};return x.useEffect(()=>(g(),a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),v.jsx("div",{ref:n,style:{width:"100vw",height:"94vh"},children:Array.from({length:7}).map((w,y)=>v.jsx("div",{style:{height:r,display:"flex"},children:Array.from({length:10}).map((S,R)=>v.jsx("div",{onClick:()=>h(y,R),style:{width:"10.2857%",display:"flex",justifyContent:"center",alignItems:"center"},children:d[y]&&d[y][R]&&v.jsxs("div",{onClick:()=>m(y,R),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsx("img",{src:d[y][R].icon,alt:d[y][R].name,style:{height:"70px",filter:d[y][R].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),v.jsx("p",{style:{color:"white",textAlign:"center",backgroundColor:d[y][R].selected?"#000080":"transparent"},children:d[y][R].name})]})},R))},y))})},HE="/controlpanel.png",WE=()=>{const[n,r]=x.useState(!1),i=M(Yh)`
        top: 94% !important;
    `,{changePriority:s,processes:a,addProcess:d}=gi(),f=M.div`
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
    `,[m]=x.useState([{name:"Task Manager",icon:Tc,selected:!1,componentName:"task_manager",component:Sc,priority:0},{name:"Control Panel",icon:HE,selected:!1,componentName:"control_panel",component:hg,priority:0}]);return v.jsx(i,{children:v.jsxs(vt,{style:{justifyContent:"space-between",padding:"7px"},children:[v.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[v.jsxs(xe,{onClick:()=>r(!n),active:n,style:{fontWeight:"bold"},children:[v.jsx("img",{src:Ag,alt:"react95 logo",style:{height:"20px",marginRight:4}}),v.jsx("p",{style:{padding:"5px"},children:"Start"})]}),n&&v.jsxs(ci,{style:{position:"absolute",left:"0",top:"-550%",width:"15vw"},onClick:()=>r(!1),children:[m.map(h=>v.jsxs(Jt,{style:{cursor:"pointer"},onClick:()=>d(h),children:[v.jsx("img",{src:h.icon,style:{width:"20px",marginRight:"5px"}}),v.jsx("p",{children:h.name})]})),v.jsxs(Jt,{children:[v.jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"My account"]}),v.jsx(dc,{}),v.jsxs(Jt,{disabled:!0,children:[v.jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]})]})]}),v.jsx("div",{style:{width:"100%",display:"flex"},children:a.map(h=>v.jsxs(f,{style:h.priority===0?{borderTopColor:"#808080",borderLeftColor:"#808080",borderRightColor:"#fff",borderBottomColor:"#fff",cursor:"pointer",display:"flex",justifyContent:"center"}:{cursor:"pointer",display:"flex",justifyContent:"center"},onClick:()=>s(h,0),children:[v.jsx("img",{src:h.icon,style:{height:"20px",alignSelf:"center",marginRight:"5px"}}),v.jsx("p",{style:{textAlign:"center",alignSelf:"center"},children:h.name})]}))}),v.jsx(Ar,{placeholder:"Search...",width:150})]})})},VE=({process:n})=>{var R,k;const{changePriority:r,closeProcess:i,handleProceessLocationChange:s}=gi(),{changeCursor:a}=er(),[d,f]=x.useState({x:((R=n.location)==null?void 0:R.x)??0,y:((k=n.location)==null?void 0:k.y)??0}),m=x.useRef({x:0,y:0}),[h,g]=x.useState(!1);x.useEffect(()=>(h?(a("Grabbing.cur"),document.addEventListener("mousemove",S),document.addEventListener("mouseup",y)):(a("arrow.cur"),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)}),[h]);const w=C=>{g(!0),m.current={x:C.clientX-(d.x??0),y:C.clientY-(d.y??0)}},y=C=>{g(!1);const b={x:C.clientX-m.current.x,y:C.clientY-m.current.y};n.uuid&&s(n.uuid,b)},S=C=>{if(!h)return;const b={x:C.clientX-m.current.x,y:C.clientY-m.current.y};f(b)};return v.jsxs(mc,{onClick:()=>r(n,0),resizable:!0,className:"window",style:{position:"absolute",top:`${d.y}px`,left:`${d.x}px`,transform:"translate(-50%, -50%)",zIndex:n.priority===0?"9999":n.priority+1,userSelect:"none"},children:[v.jsxs(hc,{onMouseDown:w,className:"window-title",style:{display:"flex",justifyContent:"space-between",backgroundColor:n.priority!==0?"grey":""},children:[v.jsxs("div",{style:{display:"flex"},children:[v.jsx("img",{src:n.icon,style:{width:"20px",height:"80%",marginRight:"5px",alignSelf:"center"}}),v.jsx("p",{children:n.name})]}),v.jsx(xe,{style:{alignSelf:"center"},onClick:()=>{n.uuid&&i(n.uuid)},disabled:!n.uuid,children:v.jsx("p",{style:{fontWeight:"bold"},children:"X"})})]}),n.component?v.jsx(Vk,{pid:n.uuid??null,children:D.createElement(n.component)}):""]},n.uuid)},QE=()=>{const{processes:n}=gi();return v.jsx(v.Fragment,{children:n.map(r=>v.jsx(VE,{process:r},r.uuid))})},KE=()=>{const{cursor:n}=er(),[r,i]=x.useState(!1),[s,a]=x.useState({x:0,y:0}),d=()=>i(!1);return x.useEffect(()=>(document.addEventListener("click",d),()=>document.removeEventListener("click",d)),[]),v.jsxs("div",{style:{cursor:n},onContextMenu:f=>{f.preventDefault(),a({x:f.pageX,y:f.pageY}),i(!0)},children:[v.jsx(UE,{}),v.jsx(QE,{}),r&&v.jsxs("div",{style:{position:"fixed",top:s.y,left:s.x,background:"#333",color:"#fff",padding:"10px",borderRadius:"5px",zIndex:9999},children:[v.jsx("div",{children:"Option 1"}),v.jsx("div",{children:"Option 2"})]}),v.jsx(WE,{})]})},GE=()=>{const{wallpaper:n}=er(),r=()=>n.image?n.type===2?{background:n.image}:{backgroundImage:`url('/${n.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{background:"#008080"};return v.jsx("div",{style:r(),children:v.jsxs(rk,{children:[v.jsx(Wu,{path:"/",element:v.jsx(ME,{})}),v.jsx(Wu,{path:"/vortex",element:v.jsx(KE,{})})]})})},qE=Lv`
  ${Iv}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${d1}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${f1}') format('woff2');
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
`,YE=()=>v.jsxs(Rk,{children:[v.jsx(qE,{}),v.jsx(Pv,{theme:c1,children:v.jsx(zE,{children:v.jsx(CE,{children:v.jsx(FE,{children:v.jsx(GE,{})})})})})]});N0.createRoot(document.getElementById("root")).render(v.jsx(x.StrictMode,{children:v.jsx(YE,{})}));
