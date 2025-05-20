(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=i(u);fetch(u.href,d)}})();function mh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var lu={exports:{}},Xo={},su={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hp;function Xy(){if(hp)return we;hp=1;var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function k(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function b(T,F,X){this.props=T,this.context=F,this.refs=C,this.updater=X||R}b.prototype.isReactComponent={},b.prototype.setState=function(T,F){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,F,"setState")},b.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function P(){}P.prototype=b.prototype;function L(T,F,X){this.props=T,this.context=F,this.refs=C,this.updater=X||R}var j=L.prototype=new P;j.constructor=L,w(j,b.prototype),j.isPureReactComponent=!0;var W=Array.isArray,Q=Object.prototype.hasOwnProperty,G={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function fe(T,F,X){var Z,oe={},te=null,se=null;if(F!=null)for(Z in F.ref!==void 0&&(se=F.ref),F.key!==void 0&&(te=""+F.key),F)Q.call(F,Z)&&!q.hasOwnProperty(Z)&&(oe[Z]=F[Z]);var pe=arguments.length-2;if(pe===1)oe.children=X;else if(1<pe){for(var z=Array(pe),ue=0;ue<pe;ue++)z[ue]=arguments[ue+2];oe.children=z}if(T&&T.defaultProps)for(Z in pe=T.defaultProps,pe)oe[Z]===void 0&&(oe[Z]=pe[Z]);return{$$typeof:n,type:T,key:te,ref:se,props:oe,_owner:G.current}}function me(T,F){return{$$typeof:n,type:T.type,key:F,ref:T.ref,props:T.props,_owner:T._owner}}function Ee(T){return typeof T=="object"&&T!==null&&T.$$typeof===n}function Ie(T){var F={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(X){return F[X]})}var Se=/\/+/g;function $e(T,F){return typeof T=="object"&&T!==null&&T.key!=null?Ie(""+T.key):F.toString(36)}function Re(T,F,X,Z,oe){var te=typeof T;(te==="undefined"||te==="boolean")&&(T=null);var se=!1;if(T===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(T.$$typeof){case n:case o:se=!0}}if(se)return se=T,oe=oe(se),T=Z===""?"."+$e(se,0):Z,W(oe)?(X="",T!=null&&(X=T.replace(Se,"$&/")+"/"),Re(oe,F,X,"",function(ue){return ue})):oe!=null&&(Ee(oe)&&(oe=me(oe,X+(!oe.key||se&&se.key===oe.key?"":(""+oe.key).replace(Se,"$&/")+"/")+T)),F.push(oe)),1;if(se=0,Z=Z===""?".":Z+":",W(T))for(var pe=0;pe<T.length;pe++){te=T[pe];var z=Z+$e(te,pe);se+=Re(te,F,X,z,oe)}else if(z=k(T),typeof z=="function")for(T=z.call(T),pe=0;!(te=T.next()).done;)te=te.value,z=Z+$e(te,pe++),se+=Re(te,F,X,z,oe);else if(te==="object")throw F=String(T),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return se}function Ce(T,F,X){if(T==null)return T;var Z=[],oe=0;return Re(T,Z,"","",function(te){return F.call(X,te,oe++)}),Z}function Te(T){if(T._status===-1){var F=T._result;F=F(),F.then(function(X){(T._status===0||T._status===-1)&&(T._status=1,T._result=X)},function(X){(T._status===0||T._status===-1)&&(T._status=2,T._result=X)}),T._status===-1&&(T._status=0,T._result=F)}if(T._status===1)return T._result.default;throw T._result}var xe={current:null},B={transition:null},J={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:B,ReactCurrentOwner:G};function Y(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:Ce,forEach:function(T,F,X){Ce(T,function(){F.apply(this,arguments)},X)},count:function(T){var F=0;return Ce(T,function(){F++}),F},toArray:function(T){return Ce(T,function(F){return F})||[]},only:function(T){if(!Ee(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},we.Component=b,we.Fragment=i,we.Profiler=u,we.PureComponent=L,we.StrictMode=s,we.Suspense=m,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,we.act=Y,we.cloneElement=function(T,F,X){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var Z=w({},T.props),oe=T.key,te=T.ref,se=T._owner;if(F!=null){if(F.ref!==void 0&&(te=F.ref,se=G.current),F.key!==void 0&&(oe=""+F.key),T.type&&T.type.defaultProps)var pe=T.type.defaultProps;for(z in F)Q.call(F,z)&&!q.hasOwnProperty(z)&&(Z[z]=F[z]===void 0&&pe!==void 0?pe[z]:F[z])}var z=arguments.length-2;if(z===1)Z.children=X;else if(1<z){pe=Array(z);for(var ue=0;ue<z;ue++)pe[ue]=arguments[ue+2];Z.children=pe}return{$$typeof:n,type:T.type,key:oe,ref:te,props:Z,_owner:se}},we.createContext=function(T){return T={$$typeof:f,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:d,_context:T},T.Consumer=T},we.createElement=fe,we.createFactory=function(T){var F=fe.bind(null,T);return F.type=T,F},we.createRef=function(){return{current:null}},we.forwardRef=function(T){return{$$typeof:h,render:T}},we.isValidElement=Ee,we.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:Te}},we.memo=function(T,F){return{$$typeof:g,type:T,compare:F===void 0?null:F}},we.startTransition=function(T){var F=B.transition;B.transition={};try{T()}finally{B.transition=F}},we.unstable_act=Y,we.useCallback=function(T,F){return xe.current.useCallback(T,F)},we.useContext=function(T){return xe.current.useContext(T)},we.useDebugValue=function(){},we.useDeferredValue=function(T){return xe.current.useDeferredValue(T)},we.useEffect=function(T,F){return xe.current.useEffect(T,F)},we.useId=function(){return xe.current.useId()},we.useImperativeHandle=function(T,F,X){return xe.current.useImperativeHandle(T,F,X)},we.useInsertionEffect=function(T,F){return xe.current.useInsertionEffect(T,F)},we.useLayoutEffect=function(T,F){return xe.current.useLayoutEffect(T,F)},we.useMemo=function(T,F){return xe.current.useMemo(T,F)},we.useReducer=function(T,F,X){return xe.current.useReducer(T,F,X)},we.useRef=function(T){return xe.current.useRef(T)},we.useState=function(T){return xe.current.useState(T)},we.useSyncExternalStore=function(T,F,X){return xe.current.useSyncExternalStore(T,F,X)},we.useTransition=function(){return xe.current.useTransition()},we.version="18.3.1",we}var mp;function Ju(){return mp||(mp=1,su.exports=Xy()),su.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function Jy(){if(gp)return Xo;gp=1;var n=Ju(),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(h,m,g){var v,y={},k=null,R=null;g!==void 0&&(k=""+g),m.key!==void 0&&(k=""+m.key),m.ref!==void 0&&(R=m.ref);for(v in m)s.call(m,v)&&!d.hasOwnProperty(v)&&(y[v]=m[v]);if(h&&h.defaultProps)for(v in m=h.defaultProps,m)y[v]===void 0&&(y[v]=m[v]);return{$$typeof:o,type:h,key:k,ref:R,props:y,_owner:u.current}}return Xo.Fragment=i,Xo.jsx=f,Xo.jsxs=f,Xo}var yp;function Zy(){return yp||(yp=1,lu.exports=Jy()),lu.exports}var E=Zy(),x=Ju();const _=mh(x);var El={},au={exports:{}},Et={},uu={exports:{}},cu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function e0(){return vp||(vp=1,function(n){function o(B,J){var Y=B.length;B.push(J);e:for(;0<Y;){var T=Y-1>>>1,F=B[T];if(0<u(F,J))B[T]=J,B[Y]=F,Y=T;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var J=B[0],Y=B.pop();if(Y!==J){B[0]=Y;e:for(var T=0,F=B.length,X=F>>>1;T<X;){var Z=2*(T+1)-1,oe=B[Z],te=Z+1,se=B[te];if(0>u(oe,Y))te<F&&0>u(se,oe)?(B[T]=se,B[te]=Y,T=te):(B[T]=oe,B[Z]=Y,T=Z);else if(te<F&&0>u(se,Y))B[T]=se,B[te]=Y,T=te;else break e}}return J}function u(B,J){var Y=B.sortIndex-J.sortIndex;return Y!==0?Y:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;n.unstable_now=function(){return d.now()}}else{var f=Date,h=f.now();n.unstable_now=function(){return f.now()-h}}var m=[],g=[],v=1,y=null,k=3,R=!1,w=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(B){for(var J=i(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=B)s(g),J.sortIndex=J.expirationTime,o(m,J);else break;J=i(g)}}function W(B){if(C=!1,j(B),!w)if(i(m)!==null)w=!0,Te(Q);else{var J=i(g);J!==null&&xe(W,J.startTime-B)}}function Q(B,J){w=!1,C&&(C=!1,P(fe),fe=-1),R=!0;var Y=k;try{for(j(J),y=i(m);y!==null&&(!(y.expirationTime>J)||B&&!Ie());){var T=y.callback;if(typeof T=="function"){y.callback=null,k=y.priorityLevel;var F=T(y.expirationTime<=J);J=n.unstable_now(),typeof F=="function"?y.callback=F:y===i(m)&&s(m),j(J)}else s(m);y=i(m)}if(y!==null)var X=!0;else{var Z=i(g);Z!==null&&xe(W,Z.startTime-J),X=!1}return X}finally{y=null,k=Y,R=!1}}var G=!1,q=null,fe=-1,me=5,Ee=-1;function Ie(){return!(n.unstable_now()-Ee<me)}function Se(){if(q!==null){var B=n.unstable_now();Ee=B;var J=!0;try{J=q(!0,B)}finally{J?$e():(G=!1,q=null)}}else G=!1}var $e;if(typeof L=="function")$e=function(){L(Se)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Ce=Re.port2;Re.port1.onmessage=Se,$e=function(){Ce.postMessage(null)}}else $e=function(){b(Se,0)};function Te(B){q=B,G||(G=!0,$e())}function xe(B,J){fe=b(function(){B(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){w||R||(w=!0,Te(Q))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return k},n.unstable_getFirstCallbackNode=function(){return i(m)},n.unstable_next=function(B){switch(k){case 1:case 2:case 3:var J=3;break;default:J=k}var Y=k;k=J;try{return B()}finally{k=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=k;k=B;try{return J()}finally{k=Y}},n.unstable_scheduleCallback=function(B,J,Y){var T=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?T+Y:T):Y=T,B){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,B={id:v++,callback:J,priorityLevel:B,startTime:Y,expirationTime:F,sortIndex:-1},Y>T?(B.sortIndex=Y,o(g,B),i(m)===null&&B===i(g)&&(C?(P(fe),fe=-1):C=!0,xe(W,Y-T))):(B.sortIndex=F,o(m,B),w||R||(w=!0,Te(Q))),B},n.unstable_shouldYield=Ie,n.unstable_wrapCallback=function(B){var J=k;return function(){var Y=k;k=J;try{return B.apply(this,arguments)}finally{k=Y}}}}(cu)),cu}var xp;function t0(){return xp||(xp=1,uu.exports=e0()),uu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function n0(){if(wp)return Et;wp=1;var n=Ju(),o=t0();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,u={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(u[e]=t,e=0;e<t.length;e++)s.add(t[e])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function k(e){return m.call(y,e)?!0:m.call(v,e)?!1:g.test(e)?y[e]=!0:(v[e]=!0,!1)}function R(e,t,r,l){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w(e,t,r,l){if(t===null||typeof t>"u"||R(e,t,r,l))return!0;if(l)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,r,l,a,c,p){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=p}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var P=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(P,L);b[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(P,L);b[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(P,L);b[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function j(e,t,r,l){var a=b.hasOwnProperty(t)?b[t]:null;(a!==null?a.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w(t,r,a,l)&&(r=null),l||a===null?k(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,l=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,l?e.setAttributeNS(l,t,r):e.setAttribute(t,r))))}var W=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),G=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),me=Symbol.for("react.profiler"),Ee=Symbol.for("react.provider"),Ie=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),$e=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),B=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,T;function F(e){if(T===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);T=t&&t[1]||""}return`
`+T+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(D){var l=D}Reflect.construct(e,[],t)}else{try{t.call()}catch(D){l=D}e.call(t.prototype)}else{try{throw Error()}catch(D){l=D}e()}}catch(D){if(D&&l&&typeof D.stack=="string"){for(var a=D.stack.split(`
`),c=l.stack.split(`
`),p=a.length-1,S=c.length-1;1<=p&&0<=S&&a[p]!==c[S];)S--;for(;1<=p&&0<=S;p--,S--)if(a[p]!==c[S]){if(p!==1||S!==1)do if(p--,S--,0>S||a[p]!==c[S]){var A=`
`+a[p].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=p&&0<=S);break}}}finally{X=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?F(e):""}function oe(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case G:return"Portal";case me:return"Profiler";case fe:return"StrictMode";case $e:return"Suspense";case Re:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ie:return(e.displayName||"Context")+".Consumer";case Ee:return(e._context.displayName||"Context")+".Provider";case Se:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function z(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ue(e){var t=z(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,c=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(p){l=""+p,c.call(this,p)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return l},setValue:function(p){l=""+p},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ge(e){e._valueTracker||(e._valueTracker=ue(e))}function ke(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),l="";return e&&(l=z(e)?e.checked?"true":"false":e.value),e=l,e!==r?(t.setValue(e),!0):!1}function Ne(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ge(e,t){var r=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function We(e,t){var r=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;r=pe(t.value!=null?t.value:r),e._wrapperState={initialChecked:l,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mt(e,t){t=t.checked,t!=null&&j(e,"checked",t,!1)}function Ct(e,t){mt(e,t);var r=pe(t.value),l=t.type;if(r!=null)l==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Lt(e,t.type,r):t.hasOwnProperty("defaultValue")&&Lt(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Jt(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Lt(e,t,r){(t!=="number"||Ne(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var hn=Array.isArray;function Zt(e,t,r,l){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&l&&(e[r].defaultSelected=!0)}else{for(r=""+pe(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function mn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fo(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(i(92));if(hn(r)){if(1<r.length)throw Error(i(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:pe(r)}}function gs(e,t){var r=pe(t.value),l=pe(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),l!=null&&(e.defaultValue=""+l)}function Cc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ac(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ys(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ac(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mi,Rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,l,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,l,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(mi=mi||document.createElement("div"),mi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=mi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function po(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ng=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(e){ng.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ho[t]=ho[e]})});function $c(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||ho.hasOwnProperty(e)&&ho[e]?(""+t).trim():t+"px"}function Tc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var l=r.indexOf("--")===0,a=$c(r,t[r],l);r==="float"&&(r="cssFloat"),l?e.setProperty(r,a):e[r]=a}}var rg=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vs(e,t){if(t){if(rg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function xs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ss=null,Ar=null,Rr=null;function Pc(e){if(e=Oo(e)){if(typeof Ss!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Fi(t),Ss(e.stateNode,e.type,t))}}function Nc(e){Ar?Rr?Rr.push(e):Rr=[e]:Ar=e}function Lc(){if(Ar){var e=Ar,t=Rr;if(Rr=Ar=null,Pc(e),t)for(e=0;e<t.length;e++)Pc(t[e])}}function Ic(e,t){return e(t)}function Dc(){}var Es=!1;function _c(e,t,r){if(Es)return e(t,r);Es=!0;try{return Ic(e,t,r)}finally{Es=!1,(Ar!==null||Rr!==null)&&(Dc(),Lc())}}function mo(e,t){var r=e.stateNode;if(r===null)return null;var l=Fi(r);if(l===null)return null;r=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(i(231,t,typeof r));return r}var bs=!1;if(h)try{var go={};Object.defineProperty(go,"passive",{get:function(){bs=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{bs=!1}function og(e,t,r,l,a,c,p,S,A){var D=Array.prototype.slice.call(arguments,3);try{t.apply(r,D)}catch(H){this.onError(H)}}var yo=!1,gi=null,yi=!1,Cs=null,ig={onError:function(e){yo=!0,gi=e}};function lg(e,t,r,l,a,c,p,S,A){yo=!1,gi=null,og.apply(ig,arguments)}function sg(e,t,r,l,a,c,p,S,A){if(lg.apply(this,arguments),yo){if(yo){var D=gi;yo=!1,gi=null}else throw Error(i(198));yi||(yi=!0,Cs=D)}}function Zn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Oc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jc(e){if(Zn(e)!==e)throw Error(i(188))}function ag(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(i(188));return t!==e?null:e}for(var r=e,l=t;;){var a=r.return;if(a===null)break;var c=a.alternate;if(c===null){if(l=a.return,l!==null){r=l;continue}break}if(a.child===c.child){for(c=a.child;c;){if(c===r)return jc(a),e;if(c===l)return jc(a),t;c=c.sibling}throw Error(i(188))}if(r.return!==l.return)r=a,l=c;else{for(var p=!1,S=a.child;S;){if(S===r){p=!0,r=a,l=c;break}if(S===l){p=!0,l=a,r=c;break}S=S.sibling}if(!p){for(S=c.child;S;){if(S===r){p=!0,r=c,l=a;break}if(S===l){p=!0,l=c,r=a;break}S=S.sibling}if(!p)throw Error(i(189))}}if(r.alternate!==l)throw Error(i(190))}if(r.tag!==3)throw Error(i(188));return r.stateNode.current===r?e:t}function Fc(e){return e=ag(e),e!==null?zc(e):null}function zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zc(e);if(t!==null)return t;e=e.sibling}return null}var Bc=o.unstable_scheduleCallback,Mc=o.unstable_cancelCallback,ug=o.unstable_shouldYield,cg=o.unstable_requestPaint,Ke=o.unstable_now,dg=o.unstable_getCurrentPriorityLevel,As=o.unstable_ImmediatePriority,Uc=o.unstable_UserBlockingPriority,vi=o.unstable_NormalPriority,fg=o.unstable_LowPriority,Hc=o.unstable_IdlePriority,xi=null,en=null;function pg(e){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:gg,hg=Math.log,mg=Math.LN2;function gg(e){return e>>>=0,e===0?32:31-(hg(e)/mg|0)|0}var wi=64,ki=4194304;function vo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Si(e,t){var r=e.pendingLanes;if(r===0)return 0;var l=0,a=e.suspendedLanes,c=e.pingedLanes,p=r&268435455;if(p!==0){var S=p&~a;S!==0?l=vo(S):(c&=p,c!==0&&(l=vo(c)))}else p=r&~a,p!==0?l=vo(p):c!==0&&(l=vo(c));if(l===0)return 0;if(t!==0&&t!==l&&!(t&a)&&(a=l&-l,c=t&-t,a>=c||a===16&&(c&4194240)!==0))return t;if(l&4&&(l|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)r=31-Mt(t),a=1<<r,l|=e[r],t&=~a;return l}function yg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vg(e,t){for(var r=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,c=e.pendingLanes;0<c;){var p=31-Mt(c),S=1<<p,A=a[p];A===-1?(!(S&r)||S&l)&&(a[p]=yg(S,t)):A<=t&&(e.expiredLanes|=S),c&=~S}}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wc(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function $s(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function xo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=r}function xg(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Mt(r),c=1<<a;t[a]=0,l[a]=-1,e[a]=-1,r&=~c}}function Ts(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var l=31-Mt(r),a=1<<l;a&t|e[l]&t&&(e[l]|=t),r&=~a}}var Le=0;function Vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qc,Ps,Gc,Kc,qc,Ns=!1,Ei=[],Tn=null,Pn=null,Nn=null,wo=new Map,ko=new Map,Ln=[],wg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yc(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function So(e,t,r,l,a,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:r,eventSystemFlags:l,nativeEvent:c,targetContainers:[a]},t!==null&&(t=Oo(t),t!==null&&Ps(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function kg(e,t,r,l,a){switch(t){case"focusin":return Tn=So(Tn,e,t,r,l,a),!0;case"dragenter":return Pn=So(Pn,e,t,r,l,a),!0;case"mouseover":return Nn=So(Nn,e,t,r,l,a),!0;case"pointerover":var c=a.pointerId;return wo.set(c,So(wo.get(c)||null,e,t,r,l,a)),!0;case"gotpointercapture":return c=a.pointerId,ko.set(c,So(ko.get(c)||null,e,t,r,l,a)),!0}return!1}function Xc(e){var t=er(e.target);if(t!==null){var r=Zn(t);if(r!==null){if(t=r.tag,t===13){if(t=Oc(r),t!==null){e.blockedOn=t,qc(e.priority,function(){Gc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);ws=l,r.target.dispatchEvent(l),ws=null}else return t=Oo(r),t!==null&&Ps(t),e.blockedOn=r,!1;t.shift()}return!0}function Jc(e,t,r){bi(e)&&r.delete(t)}function Sg(){Ns=!1,Tn!==null&&bi(Tn)&&(Tn=null),Pn!==null&&bi(Pn)&&(Pn=null),Nn!==null&&bi(Nn)&&(Nn=null),wo.forEach(Jc),ko.forEach(Jc)}function Eo(e,t){e.blockedOn===t&&(e.blockedOn=null,Ns||(Ns=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sg)))}function bo(e){function t(a){return Eo(a,e)}if(0<Ei.length){Eo(Ei[0],e);for(var r=1;r<Ei.length;r++){var l=Ei[r];l.blockedOn===e&&(l.blockedOn=null)}}for(Tn!==null&&Eo(Tn,e),Pn!==null&&Eo(Pn,e),Nn!==null&&Eo(Nn,e),wo.forEach(t),ko.forEach(t),r=0;r<Ln.length;r++)l=Ln[r],l.blockedOn===e&&(l.blockedOn=null);for(;0<Ln.length&&(r=Ln[0],r.blockedOn===null);)Xc(r),r.blockedOn===null&&Ln.shift()}var $r=W.ReactCurrentBatchConfig,Ci=!0;function Eg(e,t,r,l){var a=Le,c=$r.transition;$r.transition=null;try{Le=1,Ls(e,t,r,l)}finally{Le=a,$r.transition=c}}function bg(e,t,r,l){var a=Le,c=$r.transition;$r.transition=null;try{Le=4,Ls(e,t,r,l)}finally{Le=a,$r.transition=c}}function Ls(e,t,r,l){if(Ci){var a=Is(e,t,r,l);if(a===null)Ys(e,t,l,Ai,r),Yc(e,l);else if(kg(a,e,t,r,l))l.stopPropagation();else if(Yc(e,l),t&4&&-1<wg.indexOf(e)){for(;a!==null;){var c=Oo(a);if(c!==null&&Qc(c),c=Is(e,t,r,l),c===null&&Ys(e,t,l,Ai,r),c===a)break;a=c}a!==null&&l.stopPropagation()}else Ys(e,t,l,null,r)}}var Ai=null;function Is(e,t,r,l){if(Ai=null,e=ks(l),e=er(e),e!==null)if(t=Zn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Oc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function Zc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dg()){case As:return 1;case Uc:return 4;case vi:case fg:return 16;case Hc:return 536870912;default:return 16}default:return 16}}var In=null,Ds=null,Ri=null;function ed(){if(Ri)return Ri;var e,t=Ds,r=t.length,l,a="value"in In?In.value:In.textContent,c=a.length;for(e=0;e<r&&t[e]===a[e];e++);var p=r-e;for(l=1;l<=p&&t[r-l]===a[c-l];l++);return Ri=a.slice(e,1<l?1-l:void 0)}function $i(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function td(){return!1}function At(e){function t(r,l,a,c,p){this._reactName=r,this._targetInst=a,this.type=l,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(r=e[S],this[S]=r?r(c):c[S]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ti:td,this.isPropagationStopped=td,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var Tr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=At(Tr),Co=Y({},Tr,{view:0,detail:0}),Cg=At(Co),Os,js,Ao,Pi=Y({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ao&&(Ao&&e.type==="mousemove"?(Os=e.screenX-Ao.screenX,js=e.screenY-Ao.screenY):js=Os=0,Ao=e),Os)},movementY:function(e){return"movementY"in e?e.movementY:js}}),nd=At(Pi),Ag=Y({},Pi,{dataTransfer:0}),Rg=At(Ag),$g=Y({},Co,{relatedTarget:0}),Fs=At($g),Tg=Y({},Tr,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=At(Tg),Ng=Y({},Tr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lg=At(Ng),Ig=Y({},Tr,{data:0}),rd=At(Ig),Dg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Og[e])?!!t[e]:!1}function zs(){return jg}var Fg=Y({},Co,{key:function(e){if(e.key){var t=Dg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_g[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zs,charCode:function(e){return e.type==="keypress"?$i(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zg=At(Fg),Bg=Y({},Pi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=At(Bg),Mg=Y({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zs}),Ug=At(Mg),Hg=Y({},Tr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wg=At(Hg),Vg=Y({},Pi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=At(Vg),Gg=[9,13,27,32],Bs=h&&"CompositionEvent"in window,Ro=null;h&&"documentMode"in document&&(Ro=document.documentMode);var Kg=h&&"TextEvent"in window&&!Ro,id=h&&(!Bs||Ro&&8<Ro&&11>=Ro),ld=" ",sd=!1;function ad(e,t){switch(e){case"keyup":return Gg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function qg(e,t){switch(e){case"compositionend":return ud(t);case"keypress":return t.which!==32?null:(sd=!0,ld);case"textInput":return e=t.data,e===ld&&sd?null:e;default:return null}}function Yg(e,t){if(Pr)return e==="compositionend"||!Bs&&ad(e,t)?(e=ed(),Ri=Ds=In=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return id&&t.locale!=="ko"?null:t.data;default:return null}}var Xg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xg[e.type]:t==="textarea"}function dd(e,t,r,l){Nc(l),t=_i(t,"onChange"),0<t.length&&(r=new _s("onChange","change",null,r,l),e.push({event:r,listeners:t}))}var $o=null,To=null;function Jg(e){Td(e,0)}function Ni(e){var t=_r(e);if(ke(t))return e}function Zg(e,t){if(e==="change")return t}var fd=!1;if(h){var Ms;if(h){var Us="oninput"in document;if(!Us){var pd=document.createElement("div");pd.setAttribute("oninput","return;"),Us=typeof pd.oninput=="function"}Ms=Us}else Ms=!1;fd=Ms&&(!document.documentMode||9<document.documentMode)}function hd(){$o&&($o.detachEvent("onpropertychange",md),To=$o=null)}function md(e){if(e.propertyName==="value"&&Ni(To)){var t=[];dd(t,To,e,ks(e)),_c(Jg,t)}}function ey(e,t,r){e==="focusin"?(hd(),$o=t,To=r,$o.attachEvent("onpropertychange",md)):e==="focusout"&&hd()}function ty(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(To)}function ny(e,t){if(e==="click")return Ni(t)}function ry(e,t){if(e==="input"||e==="change")return Ni(t)}function oy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:oy;function Po(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),l=Object.keys(t);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var a=r[l];if(!m.call(t,a)||!Ut(e[a],t[a]))return!1}return!0}function gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function yd(e,t){var r=gd(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=t&&l>=t)return{node:r,offset:t-e};e=l}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=gd(r)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xd(){for(var e=window,t=Ne();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ne(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function iy(e){var t=xd(),r=e.focusedElem,l=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&vd(r.ownerDocument.documentElement,r)){if(l!==null&&Hs(r)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,c=Math.min(l.start,a);l=l.end===void 0?c:Math.min(l.end,a),!e.extend&&c>l&&(a=l,l=c,c=a),a=yd(r,c);var p=yd(r,l);a&&p&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==p.node||e.focusOffset!==p.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),c>l?(e.addRange(t),e.extend(p.node,p.offset)):(t.setEnd(p.node,p.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ly=h&&"documentMode"in document&&11>=document.documentMode,Nr=null,Ws=null,No=null,Vs=!1;function wd(e,t,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Vs||Nr==null||Nr!==Ne(l)||(l=Nr,"selectionStart"in l&&Hs(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),No&&Po(No,l)||(No=l,l=_i(Ws,"onSelect"),0<l.length&&(t=new _s("onSelect","select",null,t,r),e.push({event:t,listeners:l}),t.target=Nr)))}function Li(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Lr={animationend:Li("Animation","AnimationEnd"),animationiteration:Li("Animation","AnimationIteration"),animationstart:Li("Animation","AnimationStart"),transitionend:Li("Transition","TransitionEnd")},Qs={},kd={};h&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ii(e){if(Qs[e])return Qs[e];if(!Lr[e])return e;var t=Lr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in kd)return Qs[e]=t[r];return e}var Sd=Ii("animationend"),Ed=Ii("animationiteration"),bd=Ii("animationstart"),Cd=Ii("transitionend"),Ad=new Map,Rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){Ad.set(e,t),d(t,[e])}for(var Gs=0;Gs<Rd.length;Gs++){var Ks=Rd[Gs],sy=Ks.toLowerCase(),ay=Ks[0].toUpperCase()+Ks.slice(1);Dn(sy,"on"+ay)}Dn(Sd,"onAnimationEnd"),Dn(Ed,"onAnimationIteration"),Dn(bd,"onAnimationStart"),Dn("dblclick","onDoubleClick"),Dn("focusin","onFocus"),Dn("focusout","onBlur"),Dn(Cd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function $d(e,t,r){var l=e.type||"unknown-event";e.currentTarget=r,sg(l,t,void 0,e),e.currentTarget=null}function Td(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],a=l.event;l=l.listeners;e:{var c=void 0;if(t)for(var p=l.length-1;0<=p;p--){var S=l[p],A=S.instance,D=S.currentTarget;if(S=S.listener,A!==c&&a.isPropagationStopped())break e;$d(a,S,D),c=A}else for(p=0;p<l.length;p++){if(S=l[p],A=S.instance,D=S.currentTarget,S=S.listener,A!==c&&a.isPropagationStopped())break e;$d(a,S,D),c=A}}}if(yi)throw e=Cs,yi=!1,Cs=null,e}function Oe(e,t){var r=t[na];r===void 0&&(r=t[na]=new Set);var l=e+"__bubble";r.has(l)||(Pd(t,e,2,!1),r.add(l))}function qs(e,t,r){var l=0;t&&(l|=4),Pd(r,e,l,t)}var Di="_reactListening"+Math.random().toString(36).slice(2);function Io(e){if(!e[Di]){e[Di]=!0,s.forEach(function(r){r!=="selectionchange"&&(uy.has(r)||qs(r,!1,e),qs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Di]||(t[Di]=!0,qs("selectionchange",!1,t))}}function Pd(e,t,r,l){switch(Zc(t)){case 1:var a=Eg;break;case 4:a=bg;break;default:a=Ls}r=a.bind(null,t,r,e),a=void 0,!bs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ys(e,t,r,l,a){var c=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var S=l.stateNode.containerInfo;if(S===a||S.nodeType===8&&S.parentNode===a)break;if(p===4)for(p=l.return;p!==null;){var A=p.tag;if((A===3||A===4)&&(A=p.stateNode.containerInfo,A===a||A.nodeType===8&&A.parentNode===a))return;p=p.return}for(;S!==null;){if(p=er(S),p===null)return;if(A=p.tag,A===5||A===6){l=c=p;continue e}S=S.parentNode}}l=l.return}_c(function(){var D=c,H=ks(r),V=[];e:{var M=Ad.get(e);if(M!==void 0){var ee=_s,ie=e;switch(e){case"keypress":if($i(r)===0)break e;case"keydown":case"keyup":ee=zg;break;case"focusin":ie="focus",ee=Fs;break;case"focusout":ie="blur",ee=Fs;break;case"beforeblur":case"afterblur":ee=Fs;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Ug;break;case Sd:case Ed:case bd:ee=Pg;break;case Cd:ee=Wg;break;case"scroll":ee=Cg;break;case"wheel":ee=Qg;break;case"copy":case"cut":case"paste":ee=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=od}var le=(t&4)!==0,qe=!le&&e==="scroll",N=le?M!==null?M+"Capture":null:M;le=[];for(var $=D,I;$!==null;){I=$;var K=I.stateNode;if(I.tag===5&&K!==null&&(I=K,N!==null&&(K=mo($,N),K!=null&&le.push(Do($,K,I)))),qe)break;$=$.return}0<le.length&&(M=new ee(M,ie,null,r,H),V.push({event:M,listeners:le}))}}if(!(t&7)){e:{if(M=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",M&&r!==ws&&(ie=r.relatedTarget||r.fromElement)&&(er(ie)||ie[gn]))break e;if((ee||M)&&(M=H.window===H?H:(M=H.ownerDocument)?M.defaultView||M.parentWindow:window,ee?(ie=r.relatedTarget||r.toElement,ee=D,ie=ie?er(ie):null,ie!==null&&(qe=Zn(ie),ie!==qe||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=D),ee!==ie)){if(le=nd,K="onMouseLeave",N="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(le=od,K="onPointerLeave",N="onPointerEnter",$="pointer"),qe=ee==null?M:_r(ee),I=ie==null?M:_r(ie),M=new le(K,$+"leave",ee,r,H),M.target=qe,M.relatedTarget=I,K=null,er(H)===D&&(le=new le(N,$+"enter",ie,r,H),le.target=I,le.relatedTarget=qe,K=le),qe=K,ee&&ie)t:{for(le=ee,N=ie,$=0,I=le;I;I=Ir(I))$++;for(I=0,K=N;K;K=Ir(K))I++;for(;0<$-I;)le=Ir(le),$--;for(;0<I-$;)N=Ir(N),I--;for(;$--;){if(le===N||N!==null&&le===N.alternate)break t;le=Ir(le),N=Ir(N)}le=null}else le=null;ee!==null&&Nd(V,M,ee,le,!1),ie!==null&&qe!==null&&Nd(V,qe,ie,le,!0)}}e:{if(M=D?_r(D):window,ee=M.nodeName&&M.nodeName.toLowerCase(),ee==="select"||ee==="input"&&M.type==="file")var ae=Zg;else if(cd(M))if(fd)ae=ry;else{ae=ty;var ce=ey}else(ee=M.nodeName)&&ee.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(ae=ny);if(ae&&(ae=ae(e,D))){dd(V,ae,r,H);break e}ce&&ce(e,M,D),e==="focusout"&&(ce=M._wrapperState)&&ce.controlled&&M.type==="number"&&Lt(M,"number",M.value)}switch(ce=D?_r(D):window,e){case"focusin":(cd(ce)||ce.contentEditable==="true")&&(Nr=ce,Ws=D,No=null);break;case"focusout":No=Ws=Nr=null;break;case"mousedown":Vs=!0;break;case"contextmenu":case"mouseup":case"dragend":Vs=!1,wd(V,r,H);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":wd(V,r,H)}var de;if(Bs)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else Pr?ad(e,r)&&(he="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(he="onCompositionStart");he&&(id&&r.locale!=="ko"&&(Pr||he!=="onCompositionStart"?he==="onCompositionEnd"&&Pr&&(de=ed()):(In=H,Ds="value"in In?In.value:In.textContent,Pr=!0)),ce=_i(D,he),0<ce.length&&(he=new rd(he,e,null,r,H),V.push({event:he,listeners:ce}),de?he.data=de:(de=ud(r),de!==null&&(he.data=de)))),(de=Kg?qg(e,r):Yg(e,r))&&(D=_i(D,"onBeforeInput"),0<D.length&&(H=new rd("onBeforeInput","beforeinput",null,r,H),V.push({event:H,listeners:D}),H.data=de))}Td(V,t)})}function Do(e,t,r){return{instance:e,listener:t,currentTarget:r}}function _i(e,t){for(var r=t+"Capture",l=[];e!==null;){var a=e,c=a.stateNode;a.tag===5&&c!==null&&(a=c,c=mo(e,r),c!=null&&l.unshift(Do(e,c,a)),c=mo(e,t),c!=null&&l.push(Do(e,c,a))),e=e.return}return l}function Ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nd(e,t,r,l,a){for(var c=t._reactName,p=[];r!==null&&r!==l;){var S=r,A=S.alternate,D=S.stateNode;if(A!==null&&A===l)break;S.tag===5&&D!==null&&(S=D,a?(A=mo(r,c),A!=null&&p.unshift(Do(r,A,S))):a||(A=mo(r,c),A!=null&&p.push(Do(r,A,S)))),r=r.return}p.length!==0&&e.push({event:t,listeners:p})}var cy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(cy,`
`).replace(dy,"")}function Oi(e,t,r){if(t=Ld(t),Ld(e)!==t&&r)throw Error(i(425))}function ji(){}var Xs=null,Js=null;function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,fy=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(e){return Id.resolve(null).then(e).catch(hy)}:ea;function hy(e){setTimeout(function(){throw e})}function ta(e,t){var r=t,l=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(l===0){e.removeChild(a),bo(t);return}l--}else r!=="$"&&r!=="$?"&&r!=="$!"||l++;r=a}while(r);bo(t)}function _n(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Dd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),tn="__reactFiber$"+Dr,_o="__reactProps$"+Dr,gn="__reactContainer$"+Dr,na="__reactEvents$"+Dr,my="__reactListeners$"+Dr,gy="__reactHandles$"+Dr;function er(e){var t=e[tn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gn]||r[tn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Dd(e);e!==null;){if(r=e[tn])return r;e=Dd(e)}return t}e=r,r=e.parentNode}return null}function Oo(e){return e=e[tn]||e[gn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _r(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Fi(e){return e[_o]||null}var ra=[],Or=-1;function On(e){return{current:e}}function je(e){0>Or||(e.current=ra[Or],ra[Or]=null,Or--)}function _e(e,t){Or++,ra[Or]=e.current,e.current=t}var jn={},ut=On(jn),vt=On(!1),tr=jn;function jr(e,t){var r=e.type.contextTypes;if(!r)return jn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var a={},c;for(c in r)a[c]=t[c];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function xt(e){return e=e.childContextTypes,e!=null}function zi(){je(vt),je(ut)}function _d(e,t,r){if(ut.current!==jn)throw Error(i(168));_e(ut,t),_e(vt,r)}function Od(e,t,r){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return r;l=l.getChildContext();for(var a in l)if(!(a in t))throw Error(i(108,se(e)||"Unknown",a));return Y({},r,l)}function Bi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,tr=ut.current,_e(ut,e),_e(vt,vt.current),!0}function jd(e,t,r){var l=e.stateNode;if(!l)throw Error(i(169));r?(e=Od(e,t,tr),l.__reactInternalMemoizedMergedChildContext=e,je(vt),je(ut),_e(ut,e)):je(vt),_e(vt,r)}var yn=null,Mi=!1,oa=!1;function Fd(e){yn===null?yn=[e]:yn.push(e)}function yy(e){Mi=!0,Fd(e)}function Fn(){if(!oa&&yn!==null){oa=!0;var e=0,t=Le;try{var r=yn;for(Le=1;e<r.length;e++){var l=r[e];do l=l(!0);while(l!==null)}yn=null,Mi=!1}catch(a){throw yn!==null&&(yn=yn.slice(e+1)),Bc(As,Fn),a}finally{Le=t,oa=!1}}return null}var Fr=[],zr=0,Ui=null,Hi=0,It=[],Dt=0,nr=null,vn=1,xn="";function rr(e,t){Fr[zr++]=Hi,Fr[zr++]=Ui,Ui=e,Hi=t}function zd(e,t,r){It[Dt++]=vn,It[Dt++]=xn,It[Dt++]=nr,nr=e;var l=vn;e=xn;var a=32-Mt(l)-1;l&=~(1<<a),r+=1;var c=32-Mt(t)+a;if(30<c){var p=a-a%5;c=(l&(1<<p)-1).toString(32),l>>=p,a-=p,vn=1<<32-Mt(t)+a|r<<a|l,xn=c+e}else vn=1<<c|r<<a|l,xn=e}function ia(e){e.return!==null&&(rr(e,1),zd(e,1,0))}function la(e){for(;e===Ui;)Ui=Fr[--zr],Fr[zr]=null,Hi=Fr[--zr],Fr[zr]=null;for(;e===nr;)nr=It[--Dt],It[Dt]=null,xn=It[--Dt],It[Dt]=null,vn=It[--Dt],It[Dt]=null}var Rt=null,$t=null,ze=!1,Ht=null;function Bd(e,t){var r=Ft(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Md(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Rt=e,$t=_n(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Rt=e,$t=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=nr!==null?{id:vn,overflow:xn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Ft(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Rt=e,$t=null,!0):!1;default:return!1}}function sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function aa(e){if(ze){var t=$t;if(t){var r=t;if(!Md(e,t)){if(sa(e))throw Error(i(418));t=_n(r.nextSibling);var l=Rt;t&&Md(e,t)?Bd(l,r):(e.flags=e.flags&-4097|2,ze=!1,Rt=e)}}else{if(sa(e))throw Error(i(418));e.flags=e.flags&-4097|2,ze=!1,Rt=e}}}function Ud(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Rt=e}function Wi(e){if(e!==Rt)return!1;if(!ze)return Ud(e),ze=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zs(e.type,e.memoizedProps)),t&&(t=$t)){if(sa(e))throw Hd(),Error(i(418));for(;t;)Bd(e,t),t=_n(t.nextSibling)}if(Ud(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){$t=_n(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}$t=null}}else $t=Rt?_n(e.stateNode.nextSibling):null;return!0}function Hd(){for(var e=$t;e;)e=_n(e.nextSibling)}function Br(){$t=Rt=null,ze=!1}function ua(e){Ht===null?Ht=[e]:Ht.push(e)}var vy=W.ReactCurrentBatchConfig;function jo(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(i(309));var l=r.stateNode}if(!l)throw Error(i(147,e));var a=l,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(p){var S=a.refs;p===null?delete S[c]:S[c]=p},t._stringRef=c,t)}if(typeof e!="string")throw Error(i(284));if(!r._owner)throw Error(i(290,e))}return e}function Vi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Wd(e){var t=e._init;return t(e._payload)}function Vd(e){function t(N,$){if(e){var I=N.deletions;I===null?(N.deletions=[$],N.flags|=16):I.push($)}}function r(N,$){if(!e)return null;for(;$!==null;)t(N,$),$=$.sibling;return null}function l(N,$){for(N=new Map;$!==null;)$.key!==null?N.set($.key,$):N.set($.index,$),$=$.sibling;return N}function a(N,$){return N=Qn(N,$),N.index=0,N.sibling=null,N}function c(N,$,I){return N.index=I,e?(I=N.alternate,I!==null?(I=I.index,I<$?(N.flags|=2,$):I):(N.flags|=2,$)):(N.flags|=1048576,$)}function p(N){return e&&N.alternate===null&&(N.flags|=2),N}function S(N,$,I,K){return $===null||$.tag!==6?($=eu(I,N.mode,K),$.return=N,$):($=a($,I),$.return=N,$)}function A(N,$,I,K){var ae=I.type;return ae===q?H(N,$,I.props.children,K,I.key):$!==null&&($.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Te&&Wd(ae)===$.type)?(K=a($,I.props),K.ref=jo(N,$,I),K.return=N,K):(K=ml(I.type,I.key,I.props,null,N.mode,K),K.ref=jo(N,$,I),K.return=N,K)}function D(N,$,I,K){return $===null||$.tag!==4||$.stateNode.containerInfo!==I.containerInfo||$.stateNode.implementation!==I.implementation?($=tu(I,N.mode,K),$.return=N,$):($=a($,I.children||[]),$.return=N,$)}function H(N,$,I,K,ae){return $===null||$.tag!==7?($=dr(I,N.mode,K,ae),$.return=N,$):($=a($,I),$.return=N,$)}function V(N,$,I){if(typeof $=="string"&&$!==""||typeof $=="number")return $=eu(""+$,N.mode,I),$.return=N,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case Q:return I=ml($.type,$.key,$.props,null,N.mode,I),I.ref=jo(N,null,$),I.return=N,I;case G:return $=tu($,N.mode,I),$.return=N,$;case Te:var K=$._init;return V(N,K($._payload),I)}if(hn($)||J($))return $=dr($,N.mode,I,null),$.return=N,$;Vi(N,$)}return null}function M(N,$,I,K){var ae=$!==null?$.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ae!==null?null:S(N,$,""+I,K);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:return I.key===ae?A(N,$,I,K):null;case G:return I.key===ae?D(N,$,I,K):null;case Te:return ae=I._init,M(N,$,ae(I._payload),K)}if(hn(I)||J(I))return ae!==null?null:H(N,$,I,K,null);Vi(N,I)}return null}function ee(N,$,I,K,ae){if(typeof K=="string"&&K!==""||typeof K=="number")return N=N.get(I)||null,S($,N,""+K,ae);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case Q:return N=N.get(K.key===null?I:K.key)||null,A($,N,K,ae);case G:return N=N.get(K.key===null?I:K.key)||null,D($,N,K,ae);case Te:var ce=K._init;return ee(N,$,I,ce(K._payload),ae)}if(hn(K)||J(K))return N=N.get(I)||null,H($,N,K,ae,null);Vi($,K)}return null}function ie(N,$,I,K){for(var ae=null,ce=null,de=$,he=$=0,nt=null;de!==null&&he<I.length;he++){de.index>he?(nt=de,de=null):nt=de.sibling;var Ae=M(N,de,I[he],K);if(Ae===null){de===null&&(de=nt);break}e&&de&&Ae.alternate===null&&t(N,de),$=c(Ae,$,he),ce===null?ae=Ae:ce.sibling=Ae,ce=Ae,de=nt}if(he===I.length)return r(N,de),ze&&rr(N,he),ae;if(de===null){for(;he<I.length;he++)de=V(N,I[he],K),de!==null&&($=c(de,$,he),ce===null?ae=de:ce.sibling=de,ce=de);return ze&&rr(N,he),ae}for(de=l(N,de);he<I.length;he++)nt=ee(de,N,he,I[he],K),nt!==null&&(e&&nt.alternate!==null&&de.delete(nt.key===null?he:nt.key),$=c(nt,$,he),ce===null?ae=nt:ce.sibling=nt,ce=nt);return e&&de.forEach(function(Gn){return t(N,Gn)}),ze&&rr(N,he),ae}function le(N,$,I,K){var ae=J(I);if(typeof ae!="function")throw Error(i(150));if(I=ae.call(I),I==null)throw Error(i(151));for(var ce=ae=null,de=$,he=$=0,nt=null,Ae=I.next();de!==null&&!Ae.done;he++,Ae=I.next()){de.index>he?(nt=de,de=null):nt=de.sibling;var Gn=M(N,de,Ae.value,K);if(Gn===null){de===null&&(de=nt);break}e&&de&&Gn.alternate===null&&t(N,de),$=c(Gn,$,he),ce===null?ae=Gn:ce.sibling=Gn,ce=Gn,de=nt}if(Ae.done)return r(N,de),ze&&rr(N,he),ae;if(de===null){for(;!Ae.done;he++,Ae=I.next())Ae=V(N,Ae.value,K),Ae!==null&&($=c(Ae,$,he),ce===null?ae=Ae:ce.sibling=Ae,ce=Ae);return ze&&rr(N,he),ae}for(de=l(N,de);!Ae.done;he++,Ae=I.next())Ae=ee(de,N,he,Ae.value,K),Ae!==null&&(e&&Ae.alternate!==null&&de.delete(Ae.key===null?he:Ae.key),$=c(Ae,$,he),ce===null?ae=Ae:ce.sibling=Ae,ce=Ae);return e&&de.forEach(function(Yy){return t(N,Yy)}),ze&&rr(N,he),ae}function qe(N,$,I,K){if(typeof I=="object"&&I!==null&&I.type===q&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:e:{for(var ae=I.key,ce=$;ce!==null;){if(ce.key===ae){if(ae=I.type,ae===q){if(ce.tag===7){r(N,ce.sibling),$=a(ce,I.props.children),$.return=N,N=$;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Te&&Wd(ae)===ce.type){r(N,ce.sibling),$=a(ce,I.props),$.ref=jo(N,ce,I),$.return=N,N=$;break e}r(N,ce);break}else t(N,ce);ce=ce.sibling}I.type===q?($=dr(I.props.children,N.mode,K,I.key),$.return=N,N=$):(K=ml(I.type,I.key,I.props,null,N.mode,K),K.ref=jo(N,$,I),K.return=N,N=K)}return p(N);case G:e:{for(ce=I.key;$!==null;){if($.key===ce)if($.tag===4&&$.stateNode.containerInfo===I.containerInfo&&$.stateNode.implementation===I.implementation){r(N,$.sibling),$=a($,I.children||[]),$.return=N,N=$;break e}else{r(N,$);break}else t(N,$);$=$.sibling}$=tu(I,N.mode,K),$.return=N,N=$}return p(N);case Te:return ce=I._init,qe(N,$,ce(I._payload),K)}if(hn(I))return ie(N,$,I,K);if(J(I))return le(N,$,I,K);Vi(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,$!==null&&$.tag===6?(r(N,$.sibling),$=a($,I),$.return=N,N=$):(r(N,$),$=eu(I,N.mode,K),$.return=N,N=$),p(N)):r(N,$)}return qe}var Mr=Vd(!0),Qd=Vd(!1),Qi=On(null),Gi=null,Ur=null,ca=null;function da(){ca=Ur=Gi=null}function fa(e){var t=Qi.current;je(Qi),e._currentValue=t}function pa(e,t,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===r)break;e=e.return}}function Hr(e,t){Gi=e,ca=Ur=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(wt=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(ca!==e)if(e={context:e,memoizedValue:t,next:null},Ur===null){if(Gi===null)throw Error(i(308));Ur=e,Gi.dependencies={lanes:0,firstContext:e}}else Ur=Ur.next=e;return t}var or=null;function ha(e){or===null?or=[e]:or.push(e)}function Gd(e,t,r,l){var a=t.interleaved;return a===null?(r.next=r,ha(t)):(r.next=a.next,a.next=r),t.interleaved=r,wn(e,l)}function wn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var zn=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bn(e,t,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,be&2){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,wn(e,r)}return a=l.interleaved,a===null?(t.next=t,ha(l)):(t.next=a.next,a.next=t),l.interleaved=t,wn(e,r)}function Ki(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,Ts(e,r)}}function qd(e,t){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var a=null,c=null;if(r=r.firstBaseUpdate,r!==null){do{var p={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};c===null?a=c=p:c=c.next=p,r=r.next}while(r!==null);c===null?a=c=t:c=c.next=t}else a=c=t;r={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:c,shared:l.shared,effects:l.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function qi(e,t,r,l){var a=e.updateQueue;zn=!1;var c=a.firstBaseUpdate,p=a.lastBaseUpdate,S=a.shared.pending;if(S!==null){a.shared.pending=null;var A=S,D=A.next;A.next=null,p===null?c=D:p.next=D,p=A;var H=e.alternate;H!==null&&(H=H.updateQueue,S=H.lastBaseUpdate,S!==p&&(S===null?H.firstBaseUpdate=D:S.next=D,H.lastBaseUpdate=A))}if(c!==null){var V=a.baseState;p=0,H=D=A=null,S=c;do{var M=S.lane,ee=S.eventTime;if((l&M)===M){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ie=e,le=S;switch(M=t,ee=r,le.tag){case 1:if(ie=le.payload,typeof ie=="function"){V=ie.call(ee,V,M);break e}V=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=le.payload,M=typeof ie=="function"?ie.call(ee,V,M):ie,M==null)break e;V=Y({},V,M);break e;case 2:zn=!0}}S.callback!==null&&S.lane!==0&&(e.flags|=64,M=a.effects,M===null?a.effects=[S]:M.push(S))}else ee={eventTime:ee,lane:M,tag:S.tag,payload:S.payload,callback:S.callback,next:null},H===null?(D=H=ee,A=V):H=H.next=ee,p|=M;if(S=S.next,S===null){if(S=a.shared.pending,S===null)break;M=S,S=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);if(H===null&&(A=V),a.baseState=A,a.firstBaseUpdate=D,a.lastBaseUpdate=H,t=a.shared.interleaved,t!==null){a=t;do p|=a.lane,a=a.next;while(a!==t)}else c===null&&(a.shared.lanes=0);sr|=p,e.lanes=p,e.memoizedState=V}}function Yd(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],a=l.callback;if(a!==null){if(l.callback=null,l=r,typeof a!="function")throw Error(i(191,a));a.call(l)}}}var Fo={},nn=On(Fo),zo=On(Fo),Bo=On(Fo);function ir(e){if(e===Fo)throw Error(i(174));return e}function ga(e,t){switch(_e(Bo,t),_e(zo,e),_e(nn,Fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ys(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ys(t,e)}je(nn),_e(nn,t)}function Wr(){je(nn),je(zo),je(Bo)}function Xd(e){ir(Bo.current);var t=ir(nn.current),r=ys(t,e.type);t!==r&&(_e(zo,e),_e(nn,r))}function ya(e){zo.current===e&&(je(nn),je(zo))}var Me=On(0);function Yi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=[];function xa(){for(var e=0;e<va.length;e++)va[e]._workInProgressVersionPrimary=null;va.length=0}var Xi=W.ReactCurrentDispatcher,wa=W.ReactCurrentBatchConfig,lr=0,Ue=null,Je=null,et=null,Ji=!1,Mo=!1,Uo=0,xy=0;function ct(){throw Error(i(321))}function ka(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ut(e[r],t[r]))return!1;return!0}function Sa(e,t,r,l,a,c){if(lr=c,Ue=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?Ey:by,e=r(l,a),Mo){c=0;do{if(Mo=!1,Uo=0,25<=c)throw Error(i(301));c+=1,et=Je=null,t.updateQueue=null,Xi.current=Cy,e=r(l,a)}while(Mo)}if(Xi.current=tl,t=Je!==null&&Je.next!==null,lr=0,et=Je=Ue=null,Ji=!1,t)throw Error(i(300));return e}function Ea(){var e=Uo!==0;return Uo=0,e}function rn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ue.memoizedState=et=e:et=et.next=e,et}function Ot(){if(Je===null){var e=Ue.alternate;e=e!==null?e.memoizedState:null}else e=Je.next;var t=et===null?Ue.memoizedState:et.next;if(t!==null)et=t,Je=e;else{if(e===null)throw Error(i(310));Je=e,e={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},et===null?Ue.memoizedState=et=e:et=et.next=e}return et}function Ho(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=Ot(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var l=Je,a=l.baseQueue,c=r.pending;if(c!==null){if(a!==null){var p=a.next;a.next=c.next,c.next=p}l.baseQueue=a=c,r.pending=null}if(a!==null){c=a.next,l=l.baseState;var S=p=null,A=null,D=c;do{var H=D.lane;if((lr&H)===H)A!==null&&(A=A.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),l=D.hasEagerState?D.eagerState:e(l,D.action);else{var V={lane:H,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};A===null?(S=A=V,p=l):A=A.next=V,Ue.lanes|=H,sr|=H}D=D.next}while(D!==null&&D!==c);A===null?p=l:A.next=S,Ut(l,t.memoizedState)||(wt=!0),t.memoizedState=l,t.baseState=p,t.baseQueue=A,r.lastRenderedState=l}if(e=r.interleaved,e!==null){a=e;do c=a.lane,Ue.lanes|=c,sr|=c,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ca(e){var t=Ot(),r=t.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=e;var l=r.dispatch,a=r.pending,c=t.memoizedState;if(a!==null){r.pending=null;var p=a=a.next;do c=e(c,p.action),p=p.next;while(p!==a);Ut(c,t.memoizedState)||(wt=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),r.lastRenderedState=c}return[c,l]}function Jd(){}function Zd(e,t){var r=Ue,l=Ot(),a=t(),c=!Ut(l.memoizedState,a);if(c&&(l.memoizedState=a,wt=!0),l=l.queue,Aa(nf.bind(null,r,l,e),[e]),l.getSnapshot!==t||c||et!==null&&et.memoizedState.tag&1){if(r.flags|=2048,Wo(9,tf.bind(null,r,l,a,t),void 0,null),tt===null)throw Error(i(349));lr&30||ef(r,t,a)}return a}function ef(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function tf(e,t,r,l){t.value=r,t.getSnapshot=l,rf(t)&&of(e)}function nf(e,t,r){return r(function(){rf(t)&&of(e)})}function rf(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ut(e,r)}catch{return!0}}function of(e){var t=wn(e,1);t!==null&&Gt(t,e,1,-1)}function lf(e){var t=rn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:e},t.queue=e,e=e.dispatch=Sy.bind(null,Ue,e),[t.memoizedState,e]}function Wo(e,t,r,l){return e={tag:e,create:t,destroy:r,deps:l,next:null},t=Ue.updateQueue,t===null?(t={lastEffect:null,stores:null},Ue.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,t.lastEffect=e)),e}function sf(){return Ot().memoizedState}function Zi(e,t,r,l){var a=rn();Ue.flags|=e,a.memoizedState=Wo(1|t,r,void 0,l===void 0?null:l)}function el(e,t,r,l){var a=Ot();l=l===void 0?null:l;var c=void 0;if(Je!==null){var p=Je.memoizedState;if(c=p.destroy,l!==null&&ka(l,p.deps)){a.memoizedState=Wo(t,r,c,l);return}}Ue.flags|=e,a.memoizedState=Wo(1|t,r,c,l)}function af(e,t){return Zi(8390656,8,e,t)}function Aa(e,t){return el(2048,8,e,t)}function uf(e,t){return el(4,2,e,t)}function cf(e,t){return el(4,4,e,t)}function df(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ff(e,t,r){return r=r!=null?r.concat([e]):null,el(4,4,df.bind(null,t,e),r)}function Ra(){}function pf(e,t){var r=Ot();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&ka(t,l[1])?l[0]:(r.memoizedState=[e,t],e)}function hf(e,t){var r=Ot();t=t===void 0?null:t;var l=r.memoizedState;return l!==null&&t!==null&&ka(t,l[1])?l[0]:(e=e(),r.memoizedState=[e,t],e)}function mf(e,t,r){return lr&21?(Ut(r,t)||(r=Wc(),Ue.lanes|=r,sr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,wt=!0),e.memoizedState=r)}function wy(e,t){var r=Le;Le=r!==0&&4>r?r:4,e(!0);var l=wa.transition;wa.transition={};try{e(!1),t()}finally{Le=r,wa.transition=l}}function gf(){return Ot().memoizedState}function ky(e,t,r){var l=Wn(e);if(r={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null},yf(e))vf(t,r);else if(r=Gd(e,t,r,l),r!==null){var a=yt();Gt(r,e,l,a),xf(r,t,l)}}function Sy(e,t,r){var l=Wn(e),a={lane:l,action:r,hasEagerState:!1,eagerState:null,next:null};if(yf(e))vf(t,a);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var p=t.lastRenderedState,S=c(p,r);if(a.hasEagerState=!0,a.eagerState=S,Ut(S,p)){var A=t.interleaved;A===null?(a.next=a,ha(t)):(a.next=A.next,A.next=a),t.interleaved=a;return}}catch{}finally{}r=Gd(e,t,a,l),r!==null&&(a=yt(),Gt(r,e,l,a),xf(r,t,l))}}function yf(e){var t=e.alternate;return e===Ue||t!==null&&t===Ue}function vf(e,t){Mo=Ji=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function xf(e,t,r){if(r&4194240){var l=t.lanes;l&=e.pendingLanes,r|=l,t.lanes=r,Ts(e,r)}}var tl={readContext:_t,useCallback:ct,useContext:ct,useEffect:ct,useImperativeHandle:ct,useInsertionEffect:ct,useLayoutEffect:ct,useMemo:ct,useReducer:ct,useRef:ct,useState:ct,useDebugValue:ct,useDeferredValue:ct,useTransition:ct,useMutableSource:ct,useSyncExternalStore:ct,useId:ct,unstable_isNewReconciler:!1},Ey={readContext:_t,useCallback:function(e,t){return rn().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:af,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Zi(4194308,4,df.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zi(4,2,e,t)},useMemo:function(e,t){var r=rn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var l=rn();return t=r!==void 0?r(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=ky.bind(null,Ue,e),[l.memoizedState,e]},useRef:function(e){var t=rn();return e={current:e},t.memoizedState=e},useState:lf,useDebugValue:Ra,useDeferredValue:function(e){return rn().memoizedState=e},useTransition:function(){var e=lf(!1),t=e[0];return e=wy.bind(null,e[1]),rn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var l=Ue,a=rn();if(ze){if(r===void 0)throw Error(i(407));r=r()}else{if(r=t(),tt===null)throw Error(i(349));lr&30||ef(l,t,r)}a.memoizedState=r;var c={value:r,getSnapshot:t};return a.queue=c,af(nf.bind(null,l,c,e),[e]),l.flags|=2048,Wo(9,tf.bind(null,l,c,r,t),void 0,null),r},useId:function(){var e=rn(),t=tt.identifierPrefix;if(ze){var r=xn,l=vn;r=(l&~(1<<32-Mt(l)-1)).toString(32)+r,t=":"+t+"R"+r,r=Uo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=xy++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},by={readContext:_t,useCallback:pf,useContext:_t,useEffect:Aa,useImperativeHandle:ff,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:hf,useReducer:ba,useRef:sf,useState:function(){return ba(Ho)},useDebugValue:Ra,useDeferredValue:function(e){var t=Ot();return mf(t,Je.memoizedState,e)},useTransition:function(){var e=ba(Ho)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:Zd,useId:gf,unstable_isNewReconciler:!1},Cy={readContext:_t,useCallback:pf,useContext:_t,useEffect:Aa,useImperativeHandle:ff,useInsertionEffect:uf,useLayoutEffect:cf,useMemo:hf,useReducer:Ca,useRef:sf,useState:function(){return Ca(Ho)},useDebugValue:Ra,useDeferredValue:function(e){var t=Ot();return Je===null?t.memoizedState=e:mf(t,Je.memoizedState,e)},useTransition:function(){var e=Ca(Ho)[0],t=Ot().memoizedState;return[e,t]},useMutableSource:Jd,useSyncExternalStore:Zd,useId:gf,unstable_isNewReconciler:!1};function Wt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function $a(e,t,r,l){t=e.memoizedState,r=r(l,t),r=r==null?t:Y({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var nl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var l=yt(),a=Wn(e),c=kn(l,a);c.payload=t,r!=null&&(c.callback=r),t=Bn(e,c,a),t!==null&&(Gt(t,e,a,l),Ki(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var l=yt(),a=Wn(e),c=kn(l,a);c.tag=1,c.payload=t,r!=null&&(c.callback=r),t=Bn(e,c,a),t!==null&&(Gt(t,e,a,l),Ki(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=yt(),l=Wn(e),a=kn(r,l);a.tag=2,t!=null&&(a.callback=t),t=Bn(e,a,l),t!==null&&(Gt(t,e,l,r),Ki(t,e,l))}};function wf(e,t,r,l,a,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,p):t.prototype&&t.prototype.isPureReactComponent?!Po(r,l)||!Po(a,c):!0}function kf(e,t,r){var l=!1,a=jn,c=t.contextType;return typeof c=="object"&&c!==null?c=_t(c):(a=xt(t)?tr:ut.current,l=t.contextTypes,c=(l=l!=null)?jr(e,a):jn),t=new t(r,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=c),t}function Sf(e,t,r,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,l),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function Ta(e,t,r,l){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},ma(e);var c=t.contextType;typeof c=="object"&&c!==null?a.context=_t(c):(c=xt(t)?tr:ut.current,a.context=jr(e,c)),a.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&($a(e,t,c,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&nl.enqueueReplaceState(a,a.state,null),qi(e,r,a,l),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Vr(e,t){try{var r="",l=t;do r+=oe(l),l=l.return;while(l);var a=r}catch(c){a=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:a,digest:null}}function Pa(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Ay=typeof WeakMap=="function"?WeakMap:Map;function Ef(e,t,r){r=kn(-1,r),r.tag=3,r.payload={element:null};var l=t.value;return r.callback=function(){ul||(ul=!0,Qa=l),Na(e,t)},r}function bf(e,t,r){r=kn(-1,r),r.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var a=t.value;r.payload=function(){return l(a)},r.callback=function(){Na(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(r.callback=function(){Na(e,t),typeof l!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var p=t.stack;this.componentDidCatch(t.value,{componentStack:p!==null?p:""})}),r}function Cf(e,t,r){var l=e.pingCache;if(l===null){l=e.pingCache=new Ay;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(r)||(a.add(r),e=By.bind(null,e,t,r),t.then(e,e))}function Af(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rf(e,t,r,l,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kn(-1,1),t.tag=2,Bn(r,t,1))),r.lanes|=1),e)}var Ry=W.ReactCurrentOwner,wt=!1;function gt(e,t,r,l){t.child=e===null?Qd(t,null,r,l):Mr(t,e.child,r,l)}function $f(e,t,r,l,a){r=r.render;var c=t.ref;return Hr(t,a),l=Sa(e,t,r,l,c,a),r=Ea(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Sn(e,t,a)):(ze&&r&&ia(t),t.flags|=1,gt(e,t,l,a),t.child)}function Tf(e,t,r,l,a){if(e===null){var c=r.type;return typeof c=="function"&&!Za(c)&&c.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=c,Pf(e,t,c,l,a)):(e=ml(r.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&a)){var p=c.memoizedProps;if(r=r.compare,r=r!==null?r:Po,r(p,l)&&e.ref===t.ref)return Sn(e,t,a)}return t.flags|=1,e=Qn(c,l),e.ref=t.ref,e.return=t,t.child=e}function Pf(e,t,r,l,a){if(e!==null){var c=e.memoizedProps;if(Po(c,l)&&e.ref===t.ref)if(wt=!1,t.pendingProps=l=c,(e.lanes&a)!==0)e.flags&131072&&(wt=!0);else return t.lanes=e.lanes,Sn(e,t,a)}return La(e,t,r,l,a)}function Nf(e,t,r){var l=t.pendingProps,a=l.children,c=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Gr,Tt),Tt|=r;else{if(!(r&1073741824))return e=c!==null?c.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Gr,Tt),Tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=c!==null?c.baseLanes:r,_e(Gr,Tt),Tt|=l}else c!==null?(l=c.baseLanes|r,t.memoizedState=null):l=r,_e(Gr,Tt),Tt|=l;return gt(e,t,a,r),t.child}function Lf(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function La(e,t,r,l,a){var c=xt(r)?tr:ut.current;return c=jr(t,c),Hr(t,a),r=Sa(e,t,r,l,c,a),l=Ea(),e!==null&&!wt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Sn(e,t,a)):(ze&&l&&ia(t),t.flags|=1,gt(e,t,r,a),t.child)}function If(e,t,r,l,a){if(xt(r)){var c=!0;Bi(t)}else c=!1;if(Hr(t,a),t.stateNode===null)ol(e,t),kf(t,r,l),Ta(t,r,l,a),l=!0;else if(e===null){var p=t.stateNode,S=t.memoizedProps;p.props=S;var A=p.context,D=r.contextType;typeof D=="object"&&D!==null?D=_t(D):(D=xt(r)?tr:ut.current,D=jr(t,D));var H=r.getDerivedStateFromProps,V=typeof H=="function"||typeof p.getSnapshotBeforeUpdate=="function";V||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==l||A!==D)&&Sf(t,p,l,D),zn=!1;var M=t.memoizedState;p.state=M,qi(t,l,p,a),A=t.memoizedState,S!==l||M!==A||vt.current||zn?(typeof H=="function"&&($a(t,r,H,l),A=t.memoizedState),(S=zn||wf(t,r,S,l,M,A,D))?(V||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(t.flags|=4194308)):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=A),p.props=l,p.state=A,p.context=D,l=S):(typeof p.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{p=t.stateNode,Kd(e,t),S=t.memoizedProps,D=t.type===t.elementType?S:Wt(t.type,S),p.props=D,V=t.pendingProps,M=p.context,A=r.contextType,typeof A=="object"&&A!==null?A=_t(A):(A=xt(r)?tr:ut.current,A=jr(t,A));var ee=r.getDerivedStateFromProps;(H=typeof ee=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==V||M!==A)&&Sf(t,p,l,A),zn=!1,M=t.memoizedState,p.state=M,qi(t,l,p,a);var ie=t.memoizedState;S!==V||M!==ie||vt.current||zn?(typeof ee=="function"&&($a(t,r,ee,l),ie=t.memoizedState),(D=zn||wf(t,r,D,l,M,ie,A)||!1)?(H||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,ie,A),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,ie,A)),typeof p.componentDidUpdate=="function"&&(t.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=ie),p.props=l,p.state=ie,p.context=A,l=D):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&M===e.memoizedState||(t.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&M===e.memoizedState||(t.flags|=1024),l=!1)}return Ia(e,t,r,l,c,a)}function Ia(e,t,r,l,a,c){Lf(e,t);var p=(t.flags&128)!==0;if(!l&&!p)return a&&jd(t,r,!1),Sn(e,t,c);l=t.stateNode,Ry.current=t;var S=p&&typeof r.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&p?(t.child=Mr(t,e.child,null,c),t.child=Mr(t,null,S,c)):gt(e,t,S,c),t.memoizedState=l.state,a&&jd(t,r,!0),t.child}function Df(e){var t=e.stateNode;t.pendingContext?_d(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_d(e,t.context,!1),ga(e,t.containerInfo)}function _f(e,t,r,l,a){return Br(),ua(a),t.flags|=256,gt(e,t,r,l),t.child}var Da={dehydrated:null,treeContext:null,retryLane:0};function _a(e){return{baseLanes:e,cachePool:null,transitions:null}}function Of(e,t,r){var l=t.pendingProps,a=Me.current,c=!1,p=(t.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(a&2)!==0),S?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),_e(Me,a&1),e===null)return aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(p=l.children,e=l.fallback,c?(l=t.mode,c=t.child,p={mode:"hidden",children:p},!(l&1)&&c!==null?(c.childLanes=0,c.pendingProps=p):c=gl(p,l,0,null),e=dr(e,l,r,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=_a(r),t.memoizedState=Da,e):Oa(t,p));if(a=e.memoizedState,a!==null&&(S=a.dehydrated,S!==null))return $y(e,t,p,l,S,a,r);if(c){c=l.fallback,p=t.mode,a=e.child,S=a.sibling;var A={mode:"hidden",children:l.children};return!(p&1)&&t.child!==a?(l=t.child,l.childLanes=0,l.pendingProps=A,t.deletions=null):(l=Qn(a,A),l.subtreeFlags=a.subtreeFlags&14680064),S!==null?c=Qn(S,c):(c=dr(c,p,r,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,l=c,c=t.child,p=e.child.memoizedState,p=p===null?_a(r):{baseLanes:p.baseLanes|r,cachePool:null,transitions:p.transitions},c.memoizedState=p,c.childLanes=e.childLanes&~r,t.memoizedState=Da,l}return c=e.child,e=c.sibling,l=Qn(c,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=r),l.return=t,l.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=l,t.memoizedState=null,l}function Oa(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rl(e,t,r,l){return l!==null&&ua(l),Mr(t,e.child,null,r),e=Oa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $y(e,t,r,l,a,c,p){if(r)return t.flags&256?(t.flags&=-257,l=Pa(Error(i(422))),rl(e,t,p,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=l.fallback,a=t.mode,l=gl({mode:"visible",children:l.children},a,0,null),c=dr(c,a,p,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,t.mode&1&&Mr(t,e.child,null,p),t.child.memoizedState=_a(p),t.memoizedState=Da,c);if(!(t.mode&1))return rl(e,t,p,null);if(a.data==="$!"){if(l=a.nextSibling&&a.nextSibling.dataset,l)var S=l.dgst;return l=S,c=Error(i(419)),l=Pa(c,l,void 0),rl(e,t,p,l)}if(S=(p&e.childLanes)!==0,wt||S){if(l=tt,l!==null){switch(p&-p){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(l.suspendedLanes|p)?0:a,a!==0&&a!==c.retryLane&&(c.retryLane=a,wn(e,a),Gt(l,e,a,-1))}return Ja(),l=Pa(Error(i(421))),rl(e,t,p,l)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=My.bind(null,e),a._reactRetry=t,null):(e=c.treeContext,$t=_n(a.nextSibling),Rt=t,ze=!0,Ht=null,e!==null&&(It[Dt++]=vn,It[Dt++]=xn,It[Dt++]=nr,vn=e.id,xn=e.overflow,nr=t),t=Oa(t,l.children),t.flags|=4096,t)}function jf(e,t,r){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),pa(e.return,t,r)}function ja(e,t,r,l,a){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:a}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=r,c.tailMode=a)}function Ff(e,t,r){var l=t.pendingProps,a=l.revealOrder,c=l.tail;if(gt(e,t,l.children,r),l=Me.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jf(e,r,t);else if(e.tag===19)jf(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(_e(Me,l),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Yi(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),ja(t,!1,a,r,c);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Yi(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}ja(t,!0,r,null,c);break;case"together":ja(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ol(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Sn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,r=Qn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Qn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ty(e,t,r){switch(t.tag){case 3:Df(t),Br();break;case 5:Xd(t);break;case 1:xt(t.type)&&Bi(t);break;case 4:ga(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,a=t.memoizedProps.value;_e(Qi,l._currentValue),l._currentValue=a;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(_e(Me,Me.current&1),t.flags|=128,null):r&t.child.childLanes?Of(e,t,r):(_e(Me,Me.current&1),e=Sn(e,t,r),e!==null?e.sibling:null);_e(Me,Me.current&1);break;case 19:if(l=(r&t.childLanes)!==0,e.flags&128){if(l)return Ff(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),_e(Me,Me.current),l)break;return null;case 22:case 23:return t.lanes=0,Nf(e,t,r)}return Sn(e,t,r)}var zf,Fa,Bf,Mf;zf=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Fa=function(){},Bf=function(e,t,r,l){var a=e.memoizedProps;if(a!==l){e=t.stateNode,ir(nn.current);var c=null;switch(r){case"input":a=Ge(e,a),l=Ge(e,l),c=[];break;case"select":a=Y({},a,{value:void 0}),l=Y({},l,{value:void 0}),c=[];break;case"textarea":a=mn(e,a),l=mn(e,l),c=[];break;default:typeof a.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=ji)}vs(r,l);var p;r=null;for(D in a)if(!l.hasOwnProperty(D)&&a.hasOwnProperty(D)&&a[D]!=null)if(D==="style"){var S=a[D];for(p in S)S.hasOwnProperty(p)&&(r||(r={}),r[p]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(u.hasOwnProperty(D)?c||(c=[]):(c=c||[]).push(D,null));for(D in l){var A=l[D];if(S=a!=null?a[D]:void 0,l.hasOwnProperty(D)&&A!==S&&(A!=null||S!=null))if(D==="style")if(S){for(p in S)!S.hasOwnProperty(p)||A&&A.hasOwnProperty(p)||(r||(r={}),r[p]="");for(p in A)A.hasOwnProperty(p)&&S[p]!==A[p]&&(r||(r={}),r[p]=A[p])}else r||(c||(c=[]),c.push(D,r)),r=A;else D==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,S=S?S.__html:void 0,A!=null&&S!==A&&(c=c||[]).push(D,A)):D==="children"?typeof A!="string"&&typeof A!="number"||(c=c||[]).push(D,""+A):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(u.hasOwnProperty(D)?(A!=null&&D==="onScroll"&&Oe("scroll",e),c||S===A||(c=[])):(c=c||[]).push(D,A))}r&&(c=c||[]).push("style",r);var D=c;(t.updateQueue=D)&&(t.flags|=4)}},Mf=function(e,t,r,l){r!==l&&(t.flags|=4)};function Vo(e,t){if(!ze)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function dt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,l|=a.subtreeFlags&14680064,l|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=r,t}function Py(e,t,r){var l=t.pendingProps;switch(la(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(t),null;case 1:return xt(t.type)&&zi(),dt(t),null;case 3:return l=t.stateNode,Wr(),je(vt),je(ut),xa(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ht!==null&&(qa(Ht),Ht=null))),Fa(e,t),dt(t),null;case 5:ya(t);var a=ir(Bo.current);if(r=t.type,e!==null&&t.stateNode!=null)Bf(e,t,r,l,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(i(166));return dt(t),null}if(e=ir(nn.current),Wi(t)){l=t.stateNode,r=t.type;var c=t.memoizedProps;switch(l[tn]=t,l[_o]=c,e=(t.mode&1)!==0,r){case"dialog":Oe("cancel",l),Oe("close",l);break;case"iframe":case"object":case"embed":Oe("load",l);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Oe(Lo[a],l);break;case"source":Oe("error",l);break;case"img":case"image":case"link":Oe("error",l),Oe("load",l);break;case"details":Oe("toggle",l);break;case"input":We(l,c),Oe("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!c.multiple},Oe("invalid",l);break;case"textarea":fo(l,c),Oe("invalid",l)}vs(r,c),a=null;for(var p in c)if(c.hasOwnProperty(p)){var S=c[p];p==="children"?typeof S=="string"?l.textContent!==S&&(c.suppressHydrationWarning!==!0&&Oi(l.textContent,S,e),a=["children",S]):typeof S=="number"&&l.textContent!==""+S&&(c.suppressHydrationWarning!==!0&&Oi(l.textContent,S,e),a=["children",""+S]):u.hasOwnProperty(p)&&S!=null&&p==="onScroll"&&Oe("scroll",l)}switch(r){case"input":ge(l),Jt(l,c,!0);break;case"textarea":ge(l),Cc(l);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(l.onclick=ji)}l=a,t.updateQueue=l,l!==null&&(t.flags|=4)}else{p=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ac(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=p.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=p.createElement(r,{is:l.is}):(e=p.createElement(r),r==="select"&&(p=e,l.multiple?p.multiple=!0:l.size&&(p.size=l.size))):e=p.createElementNS(e,r),e[tn]=t,e[_o]=l,zf(e,t,!1,!1),t.stateNode=e;e:{switch(p=xs(r,l),r){case"dialog":Oe("cancel",e),Oe("close",e),a=l;break;case"iframe":case"object":case"embed":Oe("load",e),a=l;break;case"video":case"audio":for(a=0;a<Lo.length;a++)Oe(Lo[a],e);a=l;break;case"source":Oe("error",e),a=l;break;case"img":case"image":case"link":Oe("error",e),Oe("load",e),a=l;break;case"details":Oe("toggle",e),a=l;break;case"input":We(e,l),a=Ge(e,l),Oe("invalid",e);break;case"option":a=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},a=Y({},l,{value:void 0}),Oe("invalid",e);break;case"textarea":fo(e,l),a=mn(e,l),Oe("invalid",e);break;default:a=l}vs(r,a),S=a;for(c in S)if(S.hasOwnProperty(c)){var A=S[c];c==="style"?Tc(e,A):c==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Rc(e,A)):c==="children"?typeof A=="string"?(r!=="textarea"||A!=="")&&po(e,A):typeof A=="number"&&po(e,""+A):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(u.hasOwnProperty(c)?A!=null&&c==="onScroll"&&Oe("scroll",e):A!=null&&j(e,c,A,p))}switch(r){case"input":ge(e),Jt(e,l,!1);break;case"textarea":ge(e),Cc(e);break;case"option":l.value!=null&&e.setAttribute("value",""+pe(l.value));break;case"select":e.multiple=!!l.multiple,c=l.value,c!=null?Zt(e,!!l.multiple,c,!1):l.defaultValue!=null&&Zt(e,!!l.multiple,l.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ji)}switch(r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dt(t),null;case 6:if(e&&t.stateNode!=null)Mf(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(i(166));if(r=ir(Bo.current),ir(nn.current),Wi(t)){if(l=t.stateNode,r=t.memoizedProps,l[tn]=t,(c=l.nodeValue!==r)&&(e=Rt,e!==null))switch(e.tag){case 3:Oi(l.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oi(l.nodeValue,r,(e.mode&1)!==0)}c&&(t.flags|=4)}else l=(r.nodeType===9?r:r.ownerDocument).createTextNode(l),l[tn]=t,t.stateNode=l}return dt(t),null;case 13:if(je(Me),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&$t!==null&&t.mode&1&&!(t.flags&128))Hd(),Br(),t.flags|=98560,c=!1;else if(c=Wi(t),l!==null&&l.dehydrated!==null){if(e===null){if(!c)throw Error(i(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(i(317));c[tn]=t}else Br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dt(t),c=!1}else Ht!==null&&(qa(Ht),Ht=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||Me.current&1?Ze===0&&(Ze=3):Ja())),t.updateQueue!==null&&(t.flags|=4),dt(t),null);case 4:return Wr(),Fa(e,t),e===null&&Io(t.stateNode.containerInfo),dt(t),null;case 10:return fa(t.type._context),dt(t),null;case 17:return xt(t.type)&&zi(),dt(t),null;case 19:if(je(Me),c=t.memoizedState,c===null)return dt(t),null;if(l=(t.flags&128)!==0,p=c.rendering,p===null)if(l)Vo(c,!1);else{if(Ze!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(p=Yi(e),p!==null){for(t.flags|=128,Vo(c,!1),l=p.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=r,r=t.child;r!==null;)c=r,e=l,c.flags&=14680066,p=c.alternate,p===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=p.childLanes,c.lanes=p.lanes,c.child=p.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=p.memoizedProps,c.memoizedState=p.memoizedState,c.updateQueue=p.updateQueue,c.type=p.type,e=p.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return _e(Me,Me.current&1|2),t.child}e=e.sibling}c.tail!==null&&Ke()>Kr&&(t.flags|=128,l=!0,Vo(c,!1),t.lanes=4194304)}else{if(!l)if(e=Yi(p),e!==null){if(t.flags|=128,l=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Vo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!ze)return dt(t),null}else 2*Ke()-c.renderingStartTime>Kr&&r!==1073741824&&(t.flags|=128,l=!0,Vo(c,!1),t.lanes=4194304);c.isBackwards?(p.sibling=t.child,t.child=p):(r=c.last,r!==null?r.sibling=p:t.child=p,c.last=p)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Ke(),t.sibling=null,r=Me.current,_e(Me,l?r&1|2:r&1),t):(dt(t),null);case 22:case 23:return Xa(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?Tt&1073741824&&(dt(t),t.subtreeFlags&6&&(t.flags|=8192)):dt(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function Ny(e,t){switch(la(t),t.tag){case 1:return xt(t.type)&&zi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wr(),je(vt),je(ut),xa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ya(t),null;case 13:if(je(Me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return je(Me),null;case 4:return Wr(),null;case 10:return fa(t.type._context),null;case 22:case 23:return Xa(),null;case 24:return null;default:return null}}var il=!1,ft=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,re=null;function Qr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(l){Ve(e,t,l)}else r.current=null}function za(e,t,r){try{r()}catch(l){Ve(e,t,l)}}var Uf=!1;function Iy(e,t){if(Xs=Ci,e=xd(),Hs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var a=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{r.nodeType,c.nodeType}catch{r=null;break e}var p=0,S=-1,A=-1,D=0,H=0,V=e,M=null;t:for(;;){for(var ee;V!==r||a!==0&&V.nodeType!==3||(S=p+a),V!==c||l!==0&&V.nodeType!==3||(A=p+l),V.nodeType===3&&(p+=V.nodeValue.length),(ee=V.firstChild)!==null;)M=V,V=ee;for(;;){if(V===e)break t;if(M===r&&++D===a&&(S=p),M===c&&++H===l&&(A=p),(ee=V.nextSibling)!==null)break;V=M,M=V.parentNode}V=ee}r=S===-1||A===-1?null:{start:S,end:A}}else r=null}r=r||{start:0,end:0}}else r=null;for(Js={focusedElem:e,selectionRange:r},Ci=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var ie=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var le=ie.memoizedProps,qe=ie.memoizedState,N=t.stateNode,$=N.getSnapshotBeforeUpdate(t.elementType===t.type?le:Wt(t.type,le),qe);N.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(K){Ve(t,t.return,K)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return ie=Uf,Uf=!1,ie}function Qo(e,t,r){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var a=l=l.next;do{if((a.tag&e)===e){var c=a.destroy;a.destroy=void 0,c!==void 0&&za(t,r,c)}a=a.next}while(a!==l)}}function ll(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var l=r.create;r.destroy=l()}r=r.next}while(r!==t)}}function Ba(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Hf(e){var t=e.alternate;t!==null&&(e.alternate=null,Hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tn],delete t[_o],delete t[na],delete t[my],delete t[gy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Wf(e){return e.tag===5||e.tag===3||e.tag===4}function Vf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ma(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ji));else if(l!==4&&(e=e.child,e!==null))for(Ma(e,t,r),e=e.sibling;e!==null;)Ma(e,t,r),e=e.sibling}function Ua(e,t,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ua(e,t,r),e=e.sibling;e!==null;)Ua(e,t,r),e=e.sibling}var it=null,Vt=!1;function Mn(e,t,r){for(r=r.child;r!==null;)Qf(e,t,r),r=r.sibling}function Qf(e,t,r){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(xi,r)}catch{}switch(r.tag){case 5:ft||Qr(r,t);case 6:var l=it,a=Vt;it=null,Mn(e,t,r),it=l,Vt=a,it!==null&&(Vt?(e=it,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):it.removeChild(r.stateNode));break;case 18:it!==null&&(Vt?(e=it,r=r.stateNode,e.nodeType===8?ta(e.parentNode,r):e.nodeType===1&&ta(e,r),bo(e)):ta(it,r.stateNode));break;case 4:l=it,a=Vt,it=r.stateNode.containerInfo,Vt=!0,Mn(e,t,r),it=l,Vt=a;break;case 0:case 11:case 14:case 15:if(!ft&&(l=r.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){a=l=l.next;do{var c=a,p=c.destroy;c=c.tag,p!==void 0&&(c&2||c&4)&&za(r,t,p),a=a.next}while(a!==l)}Mn(e,t,r);break;case 1:if(!ft&&(Qr(r,t),l=r.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=r.memoizedProps,l.state=r.memoizedState,l.componentWillUnmount()}catch(S){Ve(r,t,S)}Mn(e,t,r);break;case 21:Mn(e,t,r);break;case 22:r.mode&1?(ft=(l=ft)||r.memoizedState!==null,Mn(e,t,r),ft=l):Mn(e,t,r);break;default:Mn(e,t,r)}}function Gf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Ly),t.forEach(function(l){var a=Uy.bind(null,e,l);r.has(l)||(r.add(l),l.then(a,a))})}}function Qt(e,t){var r=t.deletions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];try{var c=e,p=t,S=p;e:for(;S!==null;){switch(S.tag){case 5:it=S.stateNode,Vt=!1;break e;case 3:it=S.stateNode.containerInfo,Vt=!0;break e;case 4:it=S.stateNode.containerInfo,Vt=!0;break e}S=S.return}if(it===null)throw Error(i(160));Qf(c,p,a),it=null,Vt=!1;var A=a.alternate;A!==null&&(A.return=null),a.return=null}catch(D){Ve(a,t,D)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Kf(t,e),t=t.sibling}function Kf(e,t){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qt(t,e),on(e),l&4){try{Qo(3,e,e.return),ll(3,e)}catch(le){Ve(e,e.return,le)}try{Qo(5,e,e.return)}catch(le){Ve(e,e.return,le)}}break;case 1:Qt(t,e),on(e),l&512&&r!==null&&Qr(r,r.return);break;case 5:if(Qt(t,e),on(e),l&512&&r!==null&&Qr(r,r.return),e.flags&32){var a=e.stateNode;try{po(a,"")}catch(le){Ve(e,e.return,le)}}if(l&4&&(a=e.stateNode,a!=null)){var c=e.memoizedProps,p=r!==null?r.memoizedProps:c,S=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{S==="input"&&c.type==="radio"&&c.name!=null&&mt(a,c),xs(S,p);var D=xs(S,c);for(p=0;p<A.length;p+=2){var H=A[p],V=A[p+1];H==="style"?Tc(a,V):H==="dangerouslySetInnerHTML"?Rc(a,V):H==="children"?po(a,V):j(a,H,V,D)}switch(S){case"input":Ct(a,c);break;case"textarea":gs(a,c);break;case"select":var M=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!c.multiple;var ee=c.value;ee!=null?Zt(a,!!c.multiple,ee,!1):M!==!!c.multiple&&(c.defaultValue!=null?Zt(a,!!c.multiple,c.defaultValue,!0):Zt(a,!!c.multiple,c.multiple?[]:"",!1))}a[_o]=c}catch(le){Ve(e,e.return,le)}}break;case 6:if(Qt(t,e),on(e),l&4){if(e.stateNode===null)throw Error(i(162));a=e.stateNode,c=e.memoizedProps;try{a.nodeValue=c}catch(le){Ve(e,e.return,le)}}break;case 3:if(Qt(t,e),on(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{bo(t.containerInfo)}catch(le){Ve(e,e.return,le)}break;case 4:Qt(t,e),on(e);break;case 13:Qt(t,e),on(e),a=e.child,a.flags&8192&&(c=a.memoizedState!==null,a.stateNode.isHidden=c,!c||a.alternate!==null&&a.alternate.memoizedState!==null||(Va=Ke())),l&4&&Gf(e);break;case 22:if(H=r!==null&&r.memoizedState!==null,e.mode&1?(ft=(D=ft)||H,Qt(t,e),ft=D):Qt(t,e),on(e),l&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!H&&e.mode&1)for(re=e,H=e.child;H!==null;){for(V=re=H;re!==null;){switch(M=re,ee=M.child,M.tag){case 0:case 11:case 14:case 15:Qo(4,M,M.return);break;case 1:Qr(M,M.return);var ie=M.stateNode;if(typeof ie.componentWillUnmount=="function"){l=M,r=M.return;try{t=l,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(le){Ve(l,r,le)}}break;case 5:Qr(M,M.return);break;case 22:if(M.memoizedState!==null){Xf(V);continue}}ee!==null?(ee.return=M,re=ee):Xf(V)}H=H.sibling}e:for(H=null,V=e;;){if(V.tag===5){if(H===null){H=V;try{a=V.stateNode,D?(c=a.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(S=V.stateNode,A=V.memoizedProps.style,p=A!=null&&A.hasOwnProperty("display")?A.display:null,S.style.display=$c("display",p))}catch(le){Ve(e,e.return,le)}}}else if(V.tag===6){if(H===null)try{V.stateNode.nodeValue=D?"":V.memoizedProps}catch(le){Ve(e,e.return,le)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;H===V&&(H=null),V=V.return}H===V&&(H=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Qt(t,e),on(e),l&4&&Gf(e);break;case 21:break;default:Qt(t,e),on(e)}}function on(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Wf(r)){var l=r;break e}r=r.return}throw Error(i(160))}switch(l.tag){case 5:var a=l.stateNode;l.flags&32&&(po(a,""),l.flags&=-33);var c=Vf(e);Ua(e,c,a);break;case 3:case 4:var p=l.stateNode.containerInfo,S=Vf(e);Ma(e,S,p);break;default:throw Error(i(161))}}catch(A){Ve(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dy(e,t,r){re=e,qf(e)}function qf(e,t,r){for(var l=(e.mode&1)!==0;re!==null;){var a=re,c=a.child;if(a.tag===22&&l){var p=a.memoizedState!==null||il;if(!p){var S=a.alternate,A=S!==null&&S.memoizedState!==null||ft;S=il;var D=ft;if(il=p,(ft=A)&&!D)for(re=a;re!==null;)p=re,A=p.child,p.tag===22&&p.memoizedState!==null?Jf(a):A!==null?(A.return=p,re=A):Jf(a);for(;c!==null;)re=c,qf(c),c=c.sibling;re=a,il=S,ft=D}Yf(e)}else a.subtreeFlags&8772&&c!==null?(c.return=a,re=c):Yf(e)}}function Yf(e){for(;re!==null;){var t=re;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ft||ll(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!ft)if(r===null)l.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Wt(t.type,r.memoizedProps);l.componentDidUpdate(a,r.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Yd(t,c,l);break;case 3:var p=t.updateQueue;if(p!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Yd(t,p,r)}break;case 5:var S=t.stateNode;if(r===null&&t.flags&4){r=S;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&r.focus();break;case"img":A.src&&(r.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var D=t.alternate;if(D!==null){var H=D.memoizedState;if(H!==null){var V=H.dehydrated;V!==null&&bo(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}ft||t.flags&512&&Ba(t)}catch(M){Ve(t,t.return,M)}}if(t===e){re=null;break}if(r=t.sibling,r!==null){r.return=t.return,re=r;break}re=t.return}}function Xf(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var r=t.sibling;if(r!==null){r.return=t.return,re=r;break}re=t.return}}function Jf(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ll(4,t)}catch(A){Ve(t,r,A)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var a=t.return;try{l.componentDidMount()}catch(A){Ve(t,a,A)}}var c=t.return;try{Ba(t)}catch(A){Ve(t,c,A)}break;case 5:var p=t.return;try{Ba(t)}catch(A){Ve(t,p,A)}}}catch(A){Ve(t,t.return,A)}if(t===e){re=null;break}var S=t.sibling;if(S!==null){S.return=t.return,re=S;break}re=t.return}}var _y=Math.ceil,sl=W.ReactCurrentDispatcher,Ha=W.ReactCurrentOwner,jt=W.ReactCurrentBatchConfig,be=0,tt=null,Ye=null,lt=0,Tt=0,Gr=On(0),Ze=0,Go=null,sr=0,al=0,Wa=0,Ko=null,kt=null,Va=0,Kr=1/0,En=null,ul=!1,Qa=null,Un=null,cl=!1,Hn=null,dl=0,qo=0,Ga=null,fl=-1,pl=0;function yt(){return be&6?Ke():fl!==-1?fl:fl=Ke()}function Wn(e){return e.mode&1?be&2&&lt!==0?lt&-lt:vy.transition!==null?(pl===0&&(pl=Wc()),pl):(e=Le,e!==0||(e=window.event,e=e===void 0?16:Zc(e.type)),e):1}function Gt(e,t,r,l){if(50<qo)throw qo=0,Ga=null,Error(i(185));xo(e,r,l),(!(be&2)||e!==tt)&&(e===tt&&(!(be&2)&&(al|=r),Ze===4&&Vn(e,lt)),St(e,l),r===1&&be===0&&!(t.mode&1)&&(Kr=Ke()+500,Mi&&Fn()))}function St(e,t){var r=e.callbackNode;vg(e,t);var l=Si(e,e===tt?lt:0);if(l===0)r!==null&&Mc(r),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(r!=null&&Mc(r),t===1)e.tag===0?yy(ep.bind(null,e)):Fd(ep.bind(null,e)),py(function(){!(be&6)&&Fn()}),r=null;else{switch(Vc(l)){case 1:r=As;break;case 4:r=Uc;break;case 16:r=vi;break;case 536870912:r=Hc;break;default:r=vi}r=ap(r,Zf.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zf(e,t){if(fl=-1,pl=0,be&6)throw Error(i(327));var r=e.callbackNode;if(qr()&&e.callbackNode!==r)return null;var l=Si(e,e===tt?lt:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=hl(e,l);else{t=l;var a=be;be|=2;var c=np();(tt!==e||lt!==t)&&(En=null,Kr=Ke()+500,ur(e,t));do try{Fy();break}catch(S){tp(e,S)}while(!0);da(),sl.current=c,be=a,Ye!==null?t=0:(tt=null,lt=0,t=Ze)}if(t!==0){if(t===2&&(a=Rs(e),a!==0&&(l=a,t=Ka(e,a))),t===1)throw r=Go,ur(e,0),Vn(e,l),St(e,Ke()),r;if(t===6)Vn(e,l);else{if(a=e.current.alternate,!(l&30)&&!Oy(a)&&(t=hl(e,l),t===2&&(c=Rs(e),c!==0&&(l=c,t=Ka(e,c))),t===1))throw r=Go,ur(e,0),Vn(e,l),St(e,Ke()),r;switch(e.finishedWork=a,e.finishedLanes=l,t){case 0:case 1:throw Error(i(345));case 2:cr(e,kt,En);break;case 3:if(Vn(e,l),(l&130023424)===l&&(t=Va+500-Ke(),10<t)){if(Si(e,0)!==0)break;if(a=e.suspendedLanes,(a&l)!==l){yt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ea(cr.bind(null,e,kt,En),t);break}cr(e,kt,En);break;case 4:if(Vn(e,l),(l&4194240)===l)break;for(t=e.eventTimes,a=-1;0<l;){var p=31-Mt(l);c=1<<p,p=t[p],p>a&&(a=p),l&=~c}if(l=a,l=Ke()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*_y(l/1960))-l,10<l){e.timeoutHandle=ea(cr.bind(null,e,kt,En),l);break}cr(e,kt,En);break;case 5:cr(e,kt,En);break;default:throw Error(i(329))}}}return St(e,Ke()),e.callbackNode===r?Zf.bind(null,e):null}function Ka(e,t){var r=Ko;return e.current.memoizedState.isDehydrated&&(ur(e,t).flags|=256),e=hl(e,t),e!==2&&(t=kt,kt=r,t!==null&&qa(t)),e}function qa(e){kt===null?kt=e:kt.push.apply(kt,e)}function Oy(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var l=0;l<r.length;l++){var a=r[l],c=a.getSnapshot;a=a.value;try{if(!Ut(c(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vn(e,t){for(t&=~Wa,t&=~al,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Mt(t),l=1<<r;e[r]=-1,t&=~l}}function ep(e){if(be&6)throw Error(i(327));qr();var t=Si(e,0);if(!(t&1))return St(e,Ke()),null;var r=hl(e,t);if(e.tag!==0&&r===2){var l=Rs(e);l!==0&&(t=l,r=Ka(e,l))}if(r===1)throw r=Go,ur(e,0),Vn(e,t),St(e,Ke()),r;if(r===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,kt,En),St(e,Ke()),null}function Ya(e,t){var r=be;be|=1;try{return e(t)}finally{be=r,be===0&&(Kr=Ke()+500,Mi&&Fn())}}function ar(e){Hn!==null&&Hn.tag===0&&!(be&6)&&qr();var t=be;be|=1;var r=jt.transition,l=Le;try{if(jt.transition=null,Le=1,e)return e()}finally{Le=l,jt.transition=r,be=t,!(be&6)&&Fn()}}function Xa(){Tt=Gr.current,je(Gr)}function ur(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,fy(r)),Ye!==null)for(r=Ye.return;r!==null;){var l=r;switch(la(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&zi();break;case 3:Wr(),je(vt),je(ut),xa();break;case 5:ya(l);break;case 4:Wr();break;case 13:je(Me);break;case 19:je(Me);break;case 10:fa(l.type._context);break;case 22:case 23:Xa()}r=r.return}if(tt=e,Ye=e=Qn(e.current,null),lt=Tt=t,Ze=0,Go=null,Wa=al=sr=0,kt=Ko=null,or!==null){for(t=0;t<or.length;t++)if(r=or[t],l=r.interleaved,l!==null){r.interleaved=null;var a=l.next,c=r.pending;if(c!==null){var p=c.next;c.next=a,l.next=p}r.pending=l}or=null}return e}function tp(e,t){do{var r=Ye;try{if(da(),Xi.current=tl,Ji){for(var l=Ue.memoizedState;l!==null;){var a=l.queue;a!==null&&(a.pending=null),l=l.next}Ji=!1}if(lr=0,et=Je=Ue=null,Mo=!1,Uo=0,Ha.current=null,r===null||r.return===null){Ze=1,Go=t,Ye=null;break}e:{var c=e,p=r.return,S=r,A=t;if(t=lt,S.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var D=A,H=S,V=H.tag;if(!(H.mode&1)&&(V===0||V===11||V===15)){var M=H.alternate;M?(H.updateQueue=M.updateQueue,H.memoizedState=M.memoizedState,H.lanes=M.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=Af(p);if(ee!==null){ee.flags&=-257,Rf(ee,p,S,c,t),ee.mode&1&&Cf(c,D,t),t=ee,A=D;var ie=t.updateQueue;if(ie===null){var le=new Set;le.add(A),t.updateQueue=le}else ie.add(A);break e}else{if(!(t&1)){Cf(c,D,t),Ja();break e}A=Error(i(426))}}else if(ze&&S.mode&1){var qe=Af(p);if(qe!==null){!(qe.flags&65536)&&(qe.flags|=256),Rf(qe,p,S,c,t),ua(Vr(A,S));break e}}c=A=Vr(A,S),Ze!==4&&(Ze=2),Ko===null?Ko=[c]:Ko.push(c),c=p;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var N=Ef(c,A,t);qd(c,N);break e;case 1:S=A;var $=c.type,I=c.stateNode;if(!(c.flags&128)&&(typeof $.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Un===null||!Un.has(I)))){c.flags|=65536,t&=-t,c.lanes|=t;var K=bf(c,S,t);qd(c,K);break e}}c=c.return}while(c!==null)}op(r)}catch(ae){t=ae,Ye===r&&r!==null&&(Ye=r=r.return);continue}break}while(!0)}function np(){var e=sl.current;return sl.current=tl,e===null?tl:e}function Ja(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),tt===null||!(sr&268435455)&&!(al&268435455)||Vn(tt,lt)}function hl(e,t){var r=be;be|=2;var l=np();(tt!==e||lt!==t)&&(En=null,ur(e,t));do try{jy();break}catch(a){tp(e,a)}while(!0);if(da(),be=r,sl.current=l,Ye!==null)throw Error(i(261));return tt=null,lt=0,Ze}function jy(){for(;Ye!==null;)rp(Ye)}function Fy(){for(;Ye!==null&&!ug();)rp(Ye)}function rp(e){var t=sp(e.alternate,e,Tt);e.memoizedProps=e.pendingProps,t===null?op(e):Ye=t,Ha.current=null}function op(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Ny(r,t),r!==null){r.flags&=32767,Ye=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ze=6,Ye=null;return}}else if(r=Py(r,t,Tt),r!==null){Ye=r;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Ze===0&&(Ze=5)}function cr(e,t,r){var l=Le,a=jt.transition;try{jt.transition=null,Le=1,zy(e,t,r,l)}finally{jt.transition=a,Le=l}return null}function zy(e,t,r,l){do qr();while(Hn!==null);if(be&6)throw Error(i(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var c=r.lanes|r.childLanes;if(xg(e,c),e===tt&&(Ye=tt=null,lt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||cl||(cl=!0,ap(vi,function(){return qr(),null})),c=(r.flags&15990)!==0,r.subtreeFlags&15990||c){c=jt.transition,jt.transition=null;var p=Le;Le=1;var S=be;be|=4,Ha.current=null,Iy(e,r),Kf(r,e),iy(Js),Ci=!!Xs,Js=Xs=null,e.current=r,Dy(r),cg(),be=S,Le=p,jt.transition=c}else e.current=r;if(cl&&(cl=!1,Hn=e,dl=a),c=e.pendingLanes,c===0&&(Un=null),pg(r.stateNode),St(e,Ke()),t!==null)for(l=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],l(a.value,{componentStack:a.stack,digest:a.digest});if(ul)throw ul=!1,e=Qa,Qa=null,e;return dl&1&&e.tag!==0&&qr(),c=e.pendingLanes,c&1?e===Ga?qo++:(qo=0,Ga=e):qo=0,Fn(),null}function qr(){if(Hn!==null){var e=Vc(dl),t=jt.transition,r=Le;try{if(jt.transition=null,Le=16>e?16:e,Hn===null)var l=!1;else{if(e=Hn,Hn=null,dl=0,be&6)throw Error(i(331));var a=be;for(be|=4,re=e.current;re!==null;){var c=re,p=c.child;if(re.flags&16){var S=c.deletions;if(S!==null){for(var A=0;A<S.length;A++){var D=S[A];for(re=D;re!==null;){var H=re;switch(H.tag){case 0:case 11:case 15:Qo(8,H,c)}var V=H.child;if(V!==null)V.return=H,re=V;else for(;re!==null;){H=re;var M=H.sibling,ee=H.return;if(Hf(H),H===D){re=null;break}if(M!==null){M.return=ee,re=M;break}re=ee}}}var ie=c.alternate;if(ie!==null){var le=ie.child;if(le!==null){ie.child=null;do{var qe=le.sibling;le.sibling=null,le=qe}while(le!==null)}}re=c}}if(c.subtreeFlags&2064&&p!==null)p.return=c,re=p;else e:for(;re!==null;){if(c=re,c.flags&2048)switch(c.tag){case 0:case 11:case 15:Qo(9,c,c.return)}var N=c.sibling;if(N!==null){N.return=c.return,re=N;break e}re=c.return}}var $=e.current;for(re=$;re!==null;){p=re;var I=p.child;if(p.subtreeFlags&2064&&I!==null)I.return=p,re=I;else e:for(p=$;re!==null;){if(S=re,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:ll(9,S)}}catch(ae){Ve(S,S.return,ae)}if(S===p){re=null;break e}var K=S.sibling;if(K!==null){K.return=S.return,re=K;break e}re=S.return}}if(be=a,Fn(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(xi,e)}catch{}l=!0}return l}finally{Le=r,jt.transition=t}}return!1}function ip(e,t,r){t=Vr(r,t),t=Ef(e,t,1),e=Bn(e,t,1),t=yt(),e!==null&&(xo(e,1,t),St(e,t))}function Ve(e,t,r){if(e.tag===3)ip(e,e,r);else for(;t!==null;){if(t.tag===3){ip(t,e,r);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Un===null||!Un.has(l))){e=Vr(r,e),e=bf(t,e,1),t=Bn(t,e,1),e=yt(),t!==null&&(xo(t,1,e),St(t,e));break}}t=t.return}}function By(e,t,r){var l=e.pingCache;l!==null&&l.delete(t),t=yt(),e.pingedLanes|=e.suspendedLanes&r,tt===e&&(lt&r)===r&&(Ze===4||Ze===3&&(lt&130023424)===lt&&500>Ke()-Va?ur(e,0):Wa|=r),St(e,t)}function lp(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var r=yt();e=wn(e,t),e!==null&&(xo(e,t,r),St(e,r))}function My(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),lp(e,r)}function Uy(e,t){var r=0;switch(e.tag){case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(t),lp(e,r)}var sp;sp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)wt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return wt=!1,Ty(e,t,r);wt=!!(e.flags&131072)}else wt=!1,ze&&t.flags&1048576&&zd(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;ol(e,t),e=t.pendingProps;var a=jr(t,ut.current);Hr(t,r),a=Sa(null,t,l,e,a,r);var c=Ea();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xt(l)?(c=!0,Bi(t)):c=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ma(t),a.updater=nl,t.stateNode=a,a._reactInternals=t,Ta(t,l,e,r),t=Ia(null,t,l,!0,c,r)):(t.tag=0,ze&&c&&ia(t),gt(null,t,a,r),t=t.child),t;case 16:l=t.elementType;e:{switch(ol(e,t),e=t.pendingProps,a=l._init,l=a(l._payload),t.type=l,a=t.tag=Wy(l),e=Wt(l,e),a){case 0:t=La(null,t,l,e,r);break e;case 1:t=If(null,t,l,e,r);break e;case 11:t=$f(null,t,l,e,r);break e;case 14:t=Tf(null,t,l,Wt(l.type,e),r);break e}throw Error(i(306,l,""))}return t;case 0:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Wt(l,a),La(e,t,l,a,r);case 1:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Wt(l,a),If(e,t,l,a,r);case 3:e:{if(Df(t),e===null)throw Error(i(387));l=t.pendingProps,c=t.memoizedState,a=c.element,Kd(e,t),qi(t,l,null,r);var p=t.memoizedState;if(l=p.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:p.cache,pendingSuspenseBoundaries:p.pendingSuspenseBoundaries,transitions:p.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){a=Vr(Error(i(423)),t),t=_f(e,t,l,r,a);break e}else if(l!==a){a=Vr(Error(i(424)),t),t=_f(e,t,l,r,a);break e}else for($t=_n(t.stateNode.containerInfo.firstChild),Rt=t,ze=!0,Ht=null,r=Qd(t,null,l,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Br(),l===a){t=Sn(e,t,r);break e}gt(e,t,l,r)}t=t.child}return t;case 5:return Xd(t),e===null&&aa(t),l=t.type,a=t.pendingProps,c=e!==null?e.memoizedProps:null,p=a.children,Zs(l,a)?p=null:c!==null&&Zs(l,c)&&(t.flags|=32),Lf(e,t),gt(e,t,p,r),t.child;case 6:return e===null&&aa(t),null;case 13:return Of(e,t,r);case 4:return ga(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Mr(t,null,l,r):gt(e,t,l,r),t.child;case 11:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Wt(l,a),$f(e,t,l,a,r);case 7:return gt(e,t,t.pendingProps,r),t.child;case 8:return gt(e,t,t.pendingProps.children,r),t.child;case 12:return gt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(l=t.type._context,a=t.pendingProps,c=t.memoizedProps,p=a.value,_e(Qi,l._currentValue),l._currentValue=p,c!==null)if(Ut(c.value,p)){if(c.children===a.children&&!vt.current){t=Sn(e,t,r);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var S=c.dependencies;if(S!==null){p=c.child;for(var A=S.firstContext;A!==null;){if(A.context===l){if(c.tag===1){A=kn(-1,r&-r),A.tag=2;var D=c.updateQueue;if(D!==null){D=D.shared;var H=D.pending;H===null?A.next=A:(A.next=H.next,H.next=A),D.pending=A}}c.lanes|=r,A=c.alternate,A!==null&&(A.lanes|=r),pa(c.return,r,t),S.lanes|=r;break}A=A.next}}else if(c.tag===10)p=c.type===t.type?null:c.child;else if(c.tag===18){if(p=c.return,p===null)throw Error(i(341));p.lanes|=r,S=p.alternate,S!==null&&(S.lanes|=r),pa(p,r,t),p=c.sibling}else p=c.child;if(p!==null)p.return=c;else for(p=c;p!==null;){if(p===t){p=null;break}if(c=p.sibling,c!==null){c.return=p.return,p=c;break}p=p.return}c=p}gt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,l=t.pendingProps.children,Hr(t,r),a=_t(a),l=l(a),t.flags|=1,gt(e,t,l,r),t.child;case 14:return l=t.type,a=Wt(l,t.pendingProps),a=Wt(l.type,a),Tf(e,t,l,a,r);case 15:return Pf(e,t,t.type,t.pendingProps,r);case 17:return l=t.type,a=t.pendingProps,a=t.elementType===l?a:Wt(l,a),ol(e,t),t.tag=1,xt(l)?(e=!0,Bi(t)):e=!1,Hr(t,r),kf(t,l,a),Ta(t,l,a,r),Ia(null,t,l,!0,e,r);case 19:return Ff(e,t,r);case 22:return Nf(e,t,r)}throw Error(i(156,t.tag))};function ap(e,t){return Bc(e,t)}function Hy(e,t,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(e,t,r,l){return new Hy(e,t,r,l)}function Za(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wy(e){if(typeof e=="function")return Za(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Se)return 11;if(e===Ce)return 14}return 2}function Qn(e,t){var r=e.alternate;return r===null?(r=Ft(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ml(e,t,r,l,a,c){var p=2;if(l=e,typeof e=="function")Za(e)&&(p=1);else if(typeof e=="string")p=5;else e:switch(e){case q:return dr(r.children,a,c,t);case fe:p=8,a|=8;break;case me:return e=Ft(12,r,t,a|2),e.elementType=me,e.lanes=c,e;case $e:return e=Ft(13,r,t,a),e.elementType=$e,e.lanes=c,e;case Re:return e=Ft(19,r,t,a),e.elementType=Re,e.lanes=c,e;case xe:return gl(r,a,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ee:p=10;break e;case Ie:p=9;break e;case Se:p=11;break e;case Ce:p=14;break e;case Te:p=16,l=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Ft(p,r,t,a),t.elementType=e,t.type=l,t.lanes=c,t}function dr(e,t,r,l){return e=Ft(7,e,l,t),e.lanes=r,e}function gl(e,t,r,l){return e=Ft(22,e,l,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function eu(e,t,r){return e=Ft(6,e,null,t),e.lanes=r,e}function tu(e,t,r){return t=Ft(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vy(e,t,r,l,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=l,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function nu(e,t,r,l,a,c,p,S,A){return e=new Vy(e,t,r,S,A),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Ft(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:l,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ma(c),e}function Qy(e,t,r){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:G,key:l==null?null:""+l,children:e,containerInfo:t,implementation:r}}function up(e){if(!e)return jn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var r=e.type;if(xt(r))return Od(e,r,t)}return t}function cp(e,t,r,l,a,c,p,S,A){return e=nu(r,l,!0,e,a,c,p,S,A),e.context=up(null),r=e.current,l=yt(),a=Wn(r),c=kn(l,a),c.callback=t??null,Bn(r,c,a),e.current.lanes=a,xo(e,a,l),St(e,l),e}function yl(e,t,r,l){var a=t.current,c=yt(),p=Wn(a);return r=up(r),t.context===null?t.context=r:t.pendingContext=r,t=kn(c,p),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=Bn(a,t,p),e!==null&&(Gt(e,a,p,c),Ki(e,a,p)),p}function vl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ru(e,t){dp(e,t),(e=e.alternate)&&dp(e,t)}var fp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ou(e){this._internalRoot=e}xl.prototype.render=ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));yl(e,t,null,null)},xl.prototype.unmount=ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){yl(null,e,null,null)}),t[gn]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Kc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Ln.length&&t!==0&&t<Ln[r].priority;r++);Ln.splice(r,0,e),r===0&&Xc(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function pp(){}function Gy(e,t,r,l,a){if(a){if(typeof l=="function"){var c=l;l=function(){var D=vl(p);c.call(D)}}var p=cp(t,l,e,0,null,!1,!1,"",pp);return e._reactRootContainer=p,e[gn]=p.current,Io(e.nodeType===8?e.parentNode:e),ar(),p}for(;a=e.lastChild;)e.removeChild(a);if(typeof l=="function"){var S=l;l=function(){var D=vl(A);S.call(D)}}var A=nu(e,0,!1,null,null,!1,!1,"",pp);return e._reactRootContainer=A,e[gn]=A.current,Io(e.nodeType===8?e.parentNode:e),ar(function(){yl(t,A,r,l)}),A}function kl(e,t,r,l,a){var c=r._reactRootContainer;if(c){var p=c;if(typeof a=="function"){var S=a;a=function(){var A=vl(p);S.call(A)}}yl(t,p,e,a)}else p=Gy(r,t,e,a,l);return vl(p)}Qc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=vo(t.pendingLanes);r!==0&&(Ts(t,r|1),St(t,Ke()),!(be&6)&&(Kr=Ke()+500,Fn()))}break;case 13:ar(function(){var l=wn(e,1);if(l!==null){var a=yt();Gt(l,e,1,a)}}),ru(e,1)}},Ps=function(e){if(e.tag===13){var t=wn(e,134217728);if(t!==null){var r=yt();Gt(t,e,134217728,r)}ru(e,134217728)}},Gc=function(e){if(e.tag===13){var t=Wn(e),r=wn(e,t);if(r!==null){var l=yt();Gt(r,e,t,l)}ru(e,t)}},Kc=function(){return Le},qc=function(e,t){var r=Le;try{return Le=e,t()}finally{Le=r}},Ss=function(e,t,r){switch(t){case"input":if(Ct(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var l=r[t];if(l!==e&&l.form===e.form){var a=Fi(l);if(!a)throw Error(i(90));ke(l),Ct(l,a)}}}break;case"textarea":gs(e,r);break;case"select":t=r.value,t!=null&&Zt(e,!!r.multiple,t,!1)}},Ic=Ya,Dc=ar;var Ky={usingClientEntryPoint:!1,Events:[Oo,_r,Fi,Nc,Lc,Ya]},Yo={findFiberByHostInstance:er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qy={bundleType:Yo.bundleType,version:Yo.version,rendererPackageName:Yo.rendererPackageName,rendererConfig:Yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fc(e),e===null?null:e.stateNode},findFiberByHostInstance:Yo.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{xi=Sl.inject(qy),en=Sl}catch{}}return Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky,Et.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(i(200));return Qy(e,t,null,r)},Et.createRoot=function(e,t){if(!iu(e))throw Error(i(299));var r=!1,l="",a=fp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,r,!1,l,a),e[gn]=t.current,Io(e.nodeType===8?e.parentNode:e),new ou(t)},Et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Fc(t),e=e===null?null:e.stateNode,e},Et.flushSync=function(e){return ar(e)},Et.hydrate=function(e,t,r){if(!wl(t))throw Error(i(200));return kl(null,e,t,!0,r)},Et.hydrateRoot=function(e,t,r){if(!iu(e))throw Error(i(405));var l=r!=null&&r.hydratedSources||null,a=!1,c="",p=fp;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),t=cp(t,null,e,1,r??null,a,!1,c,p),e[gn]=t.current,Io(e),l)for(e=0;e<l.length;e++)r=l[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new xl(t)},Et.render=function(e,t,r){if(!wl(t))throw Error(i(200));return kl(null,e,t,!1,r)},Et.unmountComponentAtNode=function(e){if(!wl(e))throw Error(i(40));return e._reactRootContainer?(ar(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[gn]=null})}),!0):!1},Et.unstable_batchedUpdates=Ya,Et.unstable_renderSubtreeIntoContainer=function(e,t,r,l){if(!wl(r))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return kl(e,t,r,!1,l)},Et.version="18.3.1-next-f1338f8080-20240426",Et}var kp;function gh(){if(kp)return au.exports;kp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(o){console.error(o)}}return n(),au.exports=n0(),au.exports}var Sp;function r0(){if(Sp)return El;Sp=1;var n=gh();return El.createRoot=n.createRoot,El.hydrateRoot=n.hydrateRoot,El}var o0=r0(),ot=function(){return ot=Object.assign||function(o){for(var i,s=1,u=arguments.length;s<u;s++){i=arguments[s];for(var d in i)Object.prototype.hasOwnProperty.call(i,d)&&(o[d]=i[d])}return o},ot.apply(this,arguments)};function ri(n,o,i){if(i||arguments.length===2)for(var s=0,u=o.length,d;s<u;s++)(d||!(s in o))&&(d||(d=Array.prototype.slice.call(o,0,s)),d[s]=o[s]);return n.concat(d||Array.prototype.slice.call(o))}var Fe="-ms-",ni="-moz-",Pe="-webkit-",yh="comm",ql="rule",Zu="decl",i0="@import",vh="@keyframes",l0="@layer",xh=Math.abs,ec=String.fromCharCode,bu=Object.assign;function s0(n,o){return rt(n,0)^45?(((o<<2^rt(n,0))<<2^rt(n,1))<<2^rt(n,2))<<2^rt(n,3):0}function wh(n){return n.trim()}function Cn(n,o){return(n=o.exec(n))?n[0]:n}function ve(n,o,i){return n.replace(o,i)}function Pl(n,o,i){return n.indexOf(o,i)}function rt(n,o){return n.charCodeAt(o)|0}function Zr(n,o,i){return n.slice(o,i)}function sn(n){return n.length}function kh(n){return n.length}function ti(n,o){return o.push(n),n}function a0(n,o){return n.map(o).join("")}function Ep(n,o){return n.filter(function(i){return!Cn(i,o)})}var Yl=1,eo=1,Sh=0,Bt=0,Xe=0,oo="";function Xl(n,o,i,s,u,d,f,h){return{value:n,root:o,parent:i,type:s,props:u,children:d,line:Yl,column:eo,length:f,return:"",siblings:h}}function Kn(n,o){return bu(Xl("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},o)}function Yr(n){for(;n.root;)n=Kn(n.root,{children:[n]});ti(n,n.siblings)}function u0(){return Xe}function c0(){return Xe=Bt>0?rt(oo,--Bt):0,eo--,Xe===10&&(eo=1,Yl--),Xe}function Kt(){return Xe=Bt<Sh?rt(oo,Bt++):0,eo++,Xe===10&&(eo=1,Yl++),Xe}function gr(){return rt(oo,Bt)}function Nl(){return Bt}function Jl(n,o){return Zr(oo,n,o)}function Cu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function d0(n){return Yl=eo=1,Sh=sn(oo=n),Bt=0,[]}function f0(n){return oo="",n}function du(n){return wh(Jl(Bt-1,Au(n===91?n+2:n===40?n+1:n)))}function p0(n){for(;(Xe=gr())&&Xe<33;)Kt();return Cu(n)>2||Cu(Xe)>3?"":" "}function h0(n,o){for(;--o&&Kt()&&!(Xe<48||Xe>102||Xe>57&&Xe<65||Xe>70&&Xe<97););return Jl(n,Nl()+(o<6&&gr()==32&&Kt()==32))}function Au(n){for(;Kt();)switch(Xe){case n:return Bt;case 34:case 39:n!==34&&n!==39&&Au(Xe);break;case 40:n===41&&Au(n);break;case 92:Kt();break}return Bt}function m0(n,o){for(;Kt()&&n+Xe!==57;)if(n+Xe===84&&gr()===47)break;return"/*"+Jl(o,Bt-1)+"*"+ec(n===47?n:Kt())}function g0(n){for(;!Cu(gr());)Kt();return Jl(n,Bt)}function y0(n){return f0(Ll("",null,null,null,[""],n=d0(n),0,[0],n))}function Ll(n,o,i,s,u,d,f,h,m){for(var g=0,v=0,y=f,k=0,R=0,w=0,C=1,b=1,P=1,L=0,j="",W=u,Q=d,G=s,q=j;b;)switch(w=L,L=Kt()){case 40:if(w!=108&&rt(q,y-1)==58){Pl(q+=ve(du(L),"&","&\f"),"&\f",xh(g?h[g-1]:0))!=-1&&(P=-1);break}case 34:case 39:case 91:q+=du(L);break;case 9:case 10:case 13:case 32:q+=p0(w);break;case 92:q+=h0(Nl()-1,7);continue;case 47:switch(gr()){case 42:case 47:ti(v0(m0(Kt(),Nl()),o,i,m),m);break;default:q+="/"}break;case 123*C:h[g++]=sn(q)*P;case 125*C:case 59:case 0:switch(L){case 0:case 125:b=0;case 59+v:P==-1&&(q=ve(q,/\f/g,"")),R>0&&sn(q)-y&&ti(R>32?Cp(q+";",s,i,y-1,m):Cp(ve(q," ","")+";",s,i,y-2,m),m);break;case 59:q+=";";default:if(ti(G=bp(q,o,i,g,v,u,h,j,W=[],Q=[],y,d),d),L===123)if(v===0)Ll(q,o,G,G,W,d,y,h,Q);else switch(k===99&&rt(q,3)===110?100:k){case 100:case 108:case 109:case 115:Ll(n,G,G,s&&ti(bp(n,G,G,0,0,u,h,j,u,W=[],y,Q),Q),u,Q,y,h,s?W:Q);break;default:Ll(q,G,G,G,[""],Q,0,h,Q)}}g=v=R=0,C=P=1,j=q="",y=f;break;case 58:y=1+sn(q),R=w;default:if(C<1){if(L==123)--C;else if(L==125&&C++==0&&c0()==125)continue}switch(q+=ec(L),L*C){case 38:P=v>0?1:(q+="\f",-1);break;case 44:h[g++]=(sn(q)-1)*P,P=1;break;case 64:gr()===45&&(q+=du(Kt())),k=gr(),v=y=sn(j=q+=g0(Nl())),L++;break;case 45:w===45&&sn(q)==2&&(C=0)}}return d}function bp(n,o,i,s,u,d,f,h,m,g,v,y){for(var k=u-1,R=u===0?d:[""],w=kh(R),C=0,b=0,P=0;C<s;++C)for(var L=0,j=Zr(n,k+1,k=xh(b=f[C])),W=n;L<w;++L)(W=wh(b>0?R[L]+" "+j:ve(j,/&\f/g,R[L])))&&(m[P++]=W);return Xl(n,o,i,u===0?ql:h,m,g,v,y)}function v0(n,o,i,s){return Xl(n,o,i,yh,ec(u0()),Zr(n,2,-2),0,s)}function Cp(n,o,i,s,u){return Xl(n,o,i,Zu,Zr(n,0,s),Zr(n,s+1,-1),s,u)}function Eh(n,o,i){switch(s0(n,o)){case 5103:return Pe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Pe+n+n;case 4789:return ni+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+n+ni+n+Fe+n+n;case 5936:switch(rt(n,o+11)){case 114:return Pe+n+Fe+ve(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Pe+n+Fe+ve(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Pe+n+Fe+ve(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Pe+n+Fe+n+n;case 6165:return Pe+n+Fe+"flex-"+n+n;case 5187:return Pe+n+ve(n,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Fe+"flex-$1$2")+n;case 5443:return Pe+n+Fe+"flex-item-"+ve(n,/flex-|-self/g,"")+(Cn(n,/flex-|baseline/)?"":Fe+"grid-row-"+ve(n,/flex-|-self/g,""))+n;case 4675:return Pe+n+Fe+"flex-line-pack"+ve(n,/align-content|flex-|-self/g,"")+n;case 5548:return Pe+n+Fe+ve(n,"shrink","negative")+n;case 5292:return Pe+n+Fe+ve(n,"basis","preferred-size")+n;case 6060:return Pe+"box-"+ve(n,"-grow","")+Pe+n+Fe+ve(n,"grow","positive")+n;case 4554:return Pe+ve(n,/([^-])(transform)/g,"$1"+Pe+"$2")+n;case 6187:return ve(ve(ve(n,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),n,"")+n;case 5495:case 3959:return ve(n,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return ve(ve(n,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Pe+n+n;case 4200:if(!Cn(n,/flex-|baseline/))return Fe+"grid-column-align"+Zr(n,o)+n;break;case 2592:case 3360:return Fe+ve(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(s,u){return o=u,Cn(s.props,/grid-\w+-end/)})?~Pl(n+(i=i[o].value),"span",0)?n:Fe+ve(n,"-start","")+n+Fe+"grid-row-span:"+(~Pl(i,"span",0)?Cn(i,/\d+/):+Cn(i,/\d+/)-+Cn(n,/\d+/))+";":Fe+ve(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(s){return Cn(s.props,/grid-\w+-start/)})?n:Fe+ve(ve(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return ve(n,/(.+)-inline(.+)/,Pe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(n)-1-o>6)switch(rt(n,o+1)){case 109:if(rt(n,o+4)!==45)break;case 102:return ve(n,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+ni+(rt(n,o+3)==108?"$3":"$2-$3"))+n;case 115:return~Pl(n,"stretch",0)?Eh(ve(n,"stretch","fill-available"),o,i)+n:n}break;case 5152:case 5920:return ve(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,u,d,f,h,m,g){return Fe+u+":"+d+g+(f?Fe+u+"-span:"+(h?m:+m-+d)+g:"")+n});case 4949:if(rt(n,o+6)===121)return ve(n,":",":"+Pe)+n;break;case 6444:switch(rt(n,rt(n,14)===45?18:11)){case 120:return ve(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(rt(n,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Fe+"$2box$3")+n;case 100:return ve(n,":",":"+Fe)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(n,"scroll-","scroll-snap-")+n}return n}function Bl(n,o){for(var i="",s=0;s<n.length;s++)i+=o(n[s],s,n,o)||"";return i}function x0(n,o,i,s){switch(n.type){case l0:if(n.children.length)break;case i0:case Zu:return n.return=n.return||n.value;case yh:return"";case vh:return n.return=n.value+"{"+Bl(n.children,s)+"}";case ql:if(!sn(n.value=n.props.join(",")))return""}return sn(i=Bl(n.children,s))?n.return=n.value+"{"+i+"}":""}function w0(n){var o=kh(n);return function(i,s,u,d){for(var f="",h=0;h<o;h++)f+=n[h](i,s,u,d)||"";return f}}function k0(n){return function(o){o.root||(o=o.return)&&n(o)}}function S0(n,o,i,s){if(n.length>-1&&!n.return)switch(n.type){case Zu:n.return=Eh(n.value,n.length,i);return;case vh:return Bl([Kn(n,{value:ve(n.value,"@","@"+Pe)})],s);case ql:if(n.length)return a0(i=n.props,function(u){switch(Cn(u,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Yr(Kn(n,{props:[ve(u,/:(read-\w+)/,":"+ni+"$1")]})),Yr(Kn(n,{props:[u]})),bu(n,{props:Ep(i,s)});break;case"::placeholder":Yr(Kn(n,{props:[ve(u,/:(plac\w+)/,":"+Pe+"input-$1")]})),Yr(Kn(n,{props:[ve(u,/:(plac\w+)/,":"+ni+"$1")]})),Yr(Kn(n,{props:[ve(u,/:(plac\w+)/,Fe+"input-$1")]})),Yr(Kn(n,{props:[u]})),bu(n,{props:Ep(i,s)});break}return""})}}var E0={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pt={},to=typeof process<"u"&&Pt!==void 0&&(Pt.REACT_APP_SC_ATTR||Pt.SC_ATTR)||"data-styled",bh="active",Ch="data-styled-version",Zl="6.1.14",tc=`/*!sc*/
`,Ml=typeof window<"u"&&"HTMLElement"in window,b0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pt!==void 0&&Pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pt.REACT_APP_SC_DISABLE_SPEEDY!==""?Pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pt!==void 0&&Pt.SC_DISABLE_SPEEDY!==void 0&&Pt.SC_DISABLE_SPEEDY!==""&&Pt.SC_DISABLE_SPEEDY!=="false"&&Pt.SC_DISABLE_SPEEDY),C0={},es=Object.freeze([]),no=Object.freeze({});function Ah(n,o,i){return i===void 0&&(i=no),n.theme!==i.theme&&n.theme||o||i.theme}var Rh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),A0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,R0=/(^-|-$)/g;function Ap(n){return n.replace(A0,"-").replace(R0,"")}var $0=/(a)(d)/gi,bl=52,Rp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Ru(n){var o,i="";for(o=Math.abs(n);o>bl;o=o/bl|0)i=Rp(o%bl)+i;return(Rp(o%bl)+i).replace($0,"$1-$2")}var fu,$h=5381,Jr=function(n,o){for(var i=o.length;i;)n=33*n^o.charCodeAt(--i);return n},Th=function(n){return Jr($h,n)};function Ph(n){return Ru(Th(n)>>>0)}function T0(n){return n.displayName||n.name||"Component"}function pu(n){return typeof n=="string"&&!0}var Nh=typeof Symbol=="function"&&Symbol.for,Lh=Nh?Symbol.for("react.memo"):60115,P0=Nh?Symbol.for("react.forward_ref"):60112,N0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ih={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},I0=((fu={})[P0]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},fu[Lh]=Ih,fu);function $p(n){return("type"in(o=n)&&o.type.$$typeof)===Lh?Ih:"$$typeof"in n?I0[n.$$typeof]:N0;var o}var D0=Object.defineProperty,_0=Object.getOwnPropertyNames,Tp=Object.getOwnPropertySymbols,O0=Object.getOwnPropertyDescriptor,j0=Object.getPrototypeOf,Pp=Object.prototype;function Dh(n,o,i){if(typeof o!="string"){if(Pp){var s=j0(o);s&&s!==Pp&&Dh(n,s,i)}var u=_0(o);Tp&&(u=u.concat(Tp(o)));for(var d=$p(n),f=$p(o),h=0;h<u.length;++h){var m=u[h];if(!(m in L0||i&&i[m]||f&&m in f||d&&m in d)){var g=O0(o,m);try{D0(n,m,g)}catch{}}}}return n}function vr(n){return typeof n=="function"}function nc(n){return typeof n=="object"&&"styledComponentId"in n}function pr(n,o){return n&&o?"".concat(n," ").concat(o):n||o||""}function $u(n,o){if(n.length===0)return"";for(var i=n[0],s=1;s<n.length;s++)i+=n[s];return i}function oi(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Tu(n,o,i){if(i===void 0&&(i=!1),!i&&!oi(n)&&!Array.isArray(n))return o;if(Array.isArray(o))for(var s=0;s<o.length;s++)n[s]=Tu(n[s],o[s]);else if(oi(o))for(var s in o)n[s]=Tu(n[s],o[s]);return n}function rc(n,o){Object.defineProperty(n,"toString",{value:o})}function xr(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(o.length>0?" Args: ".concat(o.join(", ")):""))}var F0=function(){function n(o){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=o}return n.prototype.indexOfGroup=function(o){for(var i=0,s=0;s<o;s++)i+=this.groupSizes[s];return i},n.prototype.insertRules=function(o,i){if(o>=this.groupSizes.length){for(var s=this.groupSizes,u=s.length,d=u;o>=d;)if((d<<=1)<0)throw xr(16,"".concat(o));this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(var f=u;f<d;f++)this.groupSizes[f]=0}for(var h=this.indexOfGroup(o+1),m=(f=0,i.length);f<m;f++)this.tag.insertRule(h,i[f])&&(this.groupSizes[o]++,h++)},n.prototype.clearGroup=function(o){if(o<this.length){var i=this.groupSizes[o],s=this.indexOfGroup(o),u=s+i;this.groupSizes[o]=0;for(var d=s;d<u;d++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(o){var i="";if(o>=this.length||this.groupSizes[o]===0)return i;for(var s=this.groupSizes[o],u=this.indexOfGroup(o),d=u+s,f=u;f<d;f++)i+="".concat(this.tag.getRule(f)).concat(tc);return i},n}(),Il=new Map,Ul=new Map,Dl=1,Cl=function(n){if(Il.has(n))return Il.get(n);for(;Ul.has(Dl);)Dl++;var o=Dl++;return Il.set(n,o),Ul.set(o,n),o},z0=function(n,o){Dl=o+1,Il.set(n,o),Ul.set(o,n)},B0="style[".concat(to,"][").concat(Ch,'="').concat(Zl,'"]'),M0=new RegExp("^".concat(to,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),U0=function(n,o,i){for(var s,u=i.split(","),d=0,f=u.length;d<f;d++)(s=u[d])&&n.registerName(o,s)},H0=function(n,o){for(var i,s=((i=o.textContent)!==null&&i!==void 0?i:"").split(tc),u=[],d=0,f=s.length;d<f;d++){var h=s[d].trim();if(h){var m=h.match(M0);if(m){var g=0|parseInt(m[1],10),v=m[2];g!==0&&(z0(v,g),U0(n,v,m[3]),n.getTag().insertRules(g,u)),u.length=0}else u.push(h)}}},Np=function(n){for(var o=document.querySelectorAll(B0),i=0,s=o.length;i<s;i++){var u=o[i];u&&u.getAttribute(to)!==bh&&(H0(n,u),u.parentNode&&u.parentNode.removeChild(u))}};function W0(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _h=function(n){var o=document.head,i=n||o,s=document.createElement("style"),u=function(h){var m=Array.from(h.querySelectorAll("style[".concat(to,"]")));return m[m.length-1]}(i),d=u!==void 0?u.nextSibling:null;s.setAttribute(to,bh),s.setAttribute(Ch,Zl);var f=W0();return f&&s.setAttribute("nonce",f),i.insertBefore(s,d),s},V0=function(){function n(o){this.element=_h(o),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,u=0,d=s.length;u<d;u++){var f=s[u];if(f.ownerNode===i)return f}throw xr(17)}(this.element),this.length=0}return n.prototype.insertRule=function(o,i){try{return this.sheet.insertRule(i,o),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(o){this.sheet.deleteRule(o),this.length--},n.prototype.getRule=function(o){var i=this.sheet.cssRules[o];return i&&i.cssText?i.cssText:""},n}(),Q0=function(){function n(o){this.element=_h(o),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(o,i){if(o<=this.length&&o>=0){var s=document.createTextNode(i);return this.element.insertBefore(s,this.nodes[o]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(o){this.element.removeChild(this.nodes[o]),this.length--},n.prototype.getRule=function(o){return o<this.length?this.nodes[o].textContent:""},n}(),G0=function(){function n(o){this.rules=[],this.length=0}return n.prototype.insertRule=function(o,i){return o<=this.length&&(this.rules.splice(o,0,i),this.length++,!0)},n.prototype.deleteRule=function(o){this.rules.splice(o,1),this.length--},n.prototype.getRule=function(o){return o<this.length?this.rules[o]:""},n}(),Lp=Ml,K0={isServer:!Ml,useCSSOMInjection:!b0},Hl=function(){function n(o,i,s){o===void 0&&(o=no),i===void 0&&(i={});var u=this;this.options=ot(ot({},K0),o),this.gs=i,this.names=new Map(s),this.server=!!o.isServer,!this.server&&Ml&&Lp&&(Lp=!1,Np(this)),rc(this,function(){return function(d){for(var f=d.getTag(),h=f.length,m="",g=function(y){var k=function(P){return Ul.get(P)}(y);if(k===void 0)return"continue";var R=d.names.get(k),w=f.getGroup(y);if(R===void 0||!R.size||w.length===0)return"continue";var C="".concat(to,".g").concat(y,'[id="').concat(k,'"]'),b="";R!==void 0&&R.forEach(function(P){P.length>0&&(b+="".concat(P,","))}),m+="".concat(w).concat(C,'{content:"').concat(b,'"}').concat(tc)},v=0;v<h;v++)g(v);return m}(u)})}return n.registerId=function(o){return Cl(o)},n.prototype.rehydrate=function(){!this.server&&Ml&&Np(this)},n.prototype.reconstructWithOptions=function(o,i){return i===void 0&&(i=!0),new n(ot(ot({},this.options),o),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(o){return this.gs[o]=(this.gs[o]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(o=function(i){var s=i.useCSSOMInjection,u=i.target;return i.isServer?new G0(u):s?new V0(u):new Q0(u)}(this.options),new F0(o)));var o},n.prototype.hasNameForId=function(o,i){return this.names.has(o)&&this.names.get(o).has(i)},n.prototype.registerName=function(o,i){if(Cl(o),this.names.has(o))this.names.get(o).add(i);else{var s=new Set;s.add(i),this.names.set(o,s)}},n.prototype.insertRules=function(o,i,s){this.registerName(o,i),this.getTag().insertRules(Cl(o),s)},n.prototype.clearNames=function(o){this.names.has(o)&&this.names.get(o).clear()},n.prototype.clearRules=function(o){this.getTag().clearGroup(Cl(o)),this.clearNames(o)},n.prototype.clearTag=function(){this.tag=void 0},n}(),q0=/&/g,Y0=/^\s*\/\/.*$/gm;function Oh(n,o){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(o," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(o," ")),i.props=i.props.map(function(s){return"".concat(o," ").concat(s)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Oh(i.children,o)),i})}function X0(n){var o,i,s,u=no,d=u.options,f=d===void 0?no:d,h=u.plugins,m=h===void 0?es:h,g=function(k,R,w){return w.startsWith(i)&&w.endsWith(i)&&w.replaceAll(i,"").length>0?".".concat(o):k},v=m.slice();v.push(function(k){k.type===ql&&k.value.includes("&")&&(k.props[0]=k.props[0].replace(q0,i).replace(s,g))}),f.prefix&&v.push(S0),v.push(x0);var y=function(k,R,w,C){R===void 0&&(R=""),w===void 0&&(w=""),C===void 0&&(C="&"),o=C,i=R,s=new RegExp("\\".concat(i,"\\b"),"g");var b=k.replace(Y0,""),P=y0(w||R?"".concat(w," ").concat(R," { ").concat(b," }"):b);f.namespace&&(P=Oh(P,f.namespace));var L=[];return Bl(P,w0(v.concat(k0(function(j){return L.push(j)})))),L};return y.hash=m.length?m.reduce(function(k,R){return R.name||xr(15),Jr(k,R.name)},$h).toString():"",y}var J0=new Hl,Pu=X0(),jh=_.createContext({shouldForwardProp:void 0,styleSheet:J0,stylis:Pu});jh.Consumer;_.createContext(void 0);function Nu(){return x.useContext(jh)}var Z0=function(){function n(o,i){var s=this;this.inject=function(u,d){d===void 0&&(d=Pu);var f=s.name+d.hash;u.hasNameForId(s.id,f)||u.insertRules(s.id,f,d(s.rules,f,"@keyframes"))},this.name=o,this.id="sc-keyframes-".concat(o),this.rules=i,rc(this,function(){throw xr(12,String(s.name))})}return n.prototype.getName=function(o){return o===void 0&&(o=Pu),this.name+o.hash},n}(),ev=function(n){return n>="A"&&n<="Z"};function Ip(n){for(var o="",i=0;i<n.length;i++){var s=n[i];if(i===1&&s==="-"&&n[0]==="-")return n;ev(s)?o+="-"+s.toLowerCase():o+=s}return o.startsWith("ms-")?"-"+o:o}var Fh=function(n){return n==null||n===!1||n===""},zh=function(n){var o,i,s=[];for(var u in n){var d=n[u];n.hasOwnProperty(u)&&!Fh(d)&&(Array.isArray(d)&&d.isCss||vr(d)?s.push("".concat(Ip(u),":"),d,";"):oi(d)?s.push.apply(s,ri(ri(["".concat(u," {")],zh(d),!1),["}"],!1)):s.push("".concat(Ip(u),": ").concat((o=u,(i=d)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||o in E0||o.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return s};function qn(n,o,i,s){if(Fh(n))return[];if(nc(n))return[".".concat(n.styledComponentId)];if(vr(n)){if(!vr(d=n)||d.prototype&&d.prototype.isReactComponent||!o)return[n];var u=n(o);return qn(u,o,i,s)}var d;return n instanceof Z0?i?(n.inject(i,s),[n.getName(s)]):[n]:oi(n)?zh(n):Array.isArray(n)?Array.prototype.concat.apply(es,n.map(function(f){return qn(f,o,i,s)})):[n.toString()]}function Bh(n){for(var o=0;o<n.length;o+=1){var i=n[o];if(vr(i)&&!nc(i))return!1}return!0}var tv=Th(Zl),nv=function(){function n(o,i,s){this.rules=o,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&Bh(o),this.componentId=i,this.baseHash=Jr(tv,i),this.baseStyle=s,Hl.registerId(i)}return n.prototype.generateAndInjectStyles=function(o,i,s){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(o,i,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))u=pr(u,this.staticRulesId);else{var d=$u(qn(this.rules,o,i,s)),f=Ru(Jr(this.baseHash,d)>>>0);if(!i.hasNameForId(this.componentId,f)){var h=s(d,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,h)}u=pr(u,f),this.staticRulesId=f}else{for(var m=Jr(this.baseHash,s.hash),g="",v=0;v<this.rules.length;v++){var y=this.rules[v];if(typeof y=="string")g+=y;else if(y){var k=$u(qn(y,o,i,s));m=Jr(m,k+v),g+=k}}if(g){var R=Ru(m>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,s(g,".".concat(R),void 0,this.componentId)),u=pr(u,R)}}return u},n}(),ii=_.createContext(void 0);ii.Consumer;function rv(n){var o=_.useContext(ii),i=x.useMemo(function(){return function(s,u){if(!s)throw xr(14);if(vr(s)){var d=s(u);return d}if(Array.isArray(s)||typeof s!="object")throw xr(8);return u?ot(ot({},u),s):s}(n.theme,o)},[n.theme,o]);return n.children?_.createElement(ii.Provider,{value:i},n.children):null}var hu={};function ov(n,o,i){var s=nc(n),u=n,d=!pu(n),f=o.attrs,h=f===void 0?es:f,m=o.componentId,g=m===void 0?function(W,Q){var G=typeof W!="string"?"sc":Ap(W);hu[G]=(hu[G]||0)+1;var q="".concat(G,"-").concat(Ph(Zl+G+hu[G]));return Q?"".concat(Q,"-").concat(q):q}(o.displayName,o.parentComponentId):m,v=o.displayName,y=v===void 0?function(W){return pu(W)?"styled.".concat(W):"Styled(".concat(T0(W),")")}(n):v,k=o.displayName&&o.componentId?"".concat(Ap(o.displayName),"-").concat(o.componentId):o.componentId||g,R=s&&u.attrs?u.attrs.concat(h).filter(Boolean):h,w=o.shouldForwardProp;if(s&&u.shouldForwardProp){var C=u.shouldForwardProp;if(o.shouldForwardProp){var b=o.shouldForwardProp;w=function(W,Q){return C(W,Q)&&b(W,Q)}}else w=C}var P=new nv(i,k,s?u.componentStyle:void 0);function L(W,Q){return function(G,q,fe){var me=G.attrs,Ee=G.componentStyle,Ie=G.defaultProps,Se=G.foldedComponentIds,$e=G.styledComponentId,Re=G.target,Ce=_.useContext(ii),Te=Nu(),xe=G.shouldForwardProp||Te.shouldForwardProp,B=Ah(q,Ce,Ie)||no,J=function(oe,te,se){for(var pe,z=ot(ot({},te),{className:void 0,theme:se}),ue=0;ue<oe.length;ue+=1){var ge=vr(pe=oe[ue])?pe(z):pe;for(var ke in ge)z[ke]=ke==="className"?pr(z[ke],ge[ke]):ke==="style"?ot(ot({},z[ke]),ge[ke]):ge[ke]}return te.className&&(z.className=pr(z.className,te.className)),z}(me,q,B),Y=J.as||Re,T={};for(var F in J)J[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&J.theme===B||(F==="forwardedAs"?T.as=J.forwardedAs:xe&&!xe(F,Y)||(T[F]=J[F]));var X=function(oe,te){var se=Nu(),pe=oe.generateAndInjectStyles(te,se.styleSheet,se.stylis);return pe}(Ee,J),Z=pr(Se,$e);return X&&(Z+=" "+X),J.className&&(Z+=" "+J.className),T[pu(Y)&&!Rh.has(Y)?"class":"className"]=Z,fe&&(T.ref=fe),x.createElement(Y,T)}(j,W,Q)}L.displayName=y;var j=_.forwardRef(L);return j.attrs=R,j.componentStyle=P,j.displayName=y,j.shouldForwardProp=w,j.foldedComponentIds=s?pr(u.foldedComponentIds,u.styledComponentId):"",j.styledComponentId=k,j.target=s?u.target:n,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=s?function(Q){for(var G=[],q=1;q<arguments.length;q++)G[q-1]=arguments[q];for(var fe=0,me=G;fe<me.length;fe++)Tu(Q,me[fe],!0);return Q}({},u.defaultProps,W):W}}),rc(j,function(){return".".concat(j.styledComponentId)}),d&&Dh(j,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function Dp(n,o){for(var i=[n[0]],s=0,u=o.length;s<u;s+=1)i.push(o[s],n[s+1]);return i}var _p=function(n){return Object.assign(n,{isCss:!0})};function ne(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];if(vr(n)||oi(n))return _p(qn(Dp(es,ri([n],o,!0))));var s=n;return o.length===0&&s.length===1&&typeof s[0]=="string"?qn(s):_p(qn(Dp(s,o)))}function Lu(n,o,i){if(i===void 0&&(i=no),!o)throw xr(1,o);var s=function(u){for(var d=[],f=1;f<arguments.length;f++)d[f-1]=arguments[f];return n(o,i,ne.apply(void 0,ri([u],d,!1)))};return s.attrs=function(u){return Lu(n,o,ot(ot({},i),{attrs:Array.prototype.concat(i.attrs,u).filter(Boolean)}))},s.withConfig=function(u){return Lu(n,o,ot(ot({},i),u))},s}var Mh=function(n){return Lu(ov,n)},U=Mh;Rh.forEach(function(n){U[n]=Mh(n)});var iv=function(){function n(o,i){this.rules=o,this.componentId=i,this.isStatic=Bh(o),Hl.registerId(this.componentId+1)}return n.prototype.createStyles=function(o,i,s,u){var d=u($u(qn(this.rules,i,s,u)),""),f=this.componentId+o;s.insertRules(f,f,d)},n.prototype.removeStyles=function(o,i){i.clearRules(this.componentId+o)},n.prototype.renderStyles=function(o,i,s,u){o>2&&Hl.registerId(this.componentId+o),this.removeStyles(o,s),this.createStyles(o,i,s,u)},n}();function lv(n){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];var s=ne.apply(void 0,ri([n],o,!1)),u="sc-global-".concat(Ph(JSON.stringify(s))),d=new iv(s,u),f=function(m){var g=Nu(),v=_.useContext(ii),y=_.useRef(g.styleSheet.allocateGSInstance(u)).current;return g.styleSheet.server&&h(y,m,g.styleSheet,v,g.stylis),_.useLayoutEffect(function(){if(!g.styleSheet.server)return h(y,m,g.styleSheet,v,g.stylis),function(){return d.removeStyles(y,g.styleSheet)}},[y,m,g.styleSheet,v,g.stylis]),null};function h(m,g,v,y,k){if(d.isStatic)d.renderStyles(m,C0,v,k);else{var R=ot(ot({},g),{theme:Ah(g,y,f.defaultProps)});d.renderStyles(m,R,v,k)}}return _.memo(f)}var sv=`
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

`;const oc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",ic="inset 2px 2px 3px rgba(0,0,0,0.2)",qt=()=>ne`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,Yt=({background:n="material",color:o="materialText"}={})=>ne`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:i})=>i[n]};
  color: ${({theme:i})=>i[o]};
`,ai=({mainColor:n="black",secondaryColor:o="transparent",pixelSize:i=2})=>ne`
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
  background-color: ${o};
  background-size: ${`${i*2}px ${i*2}px`};
  background-position: 0 0, ${`${i}px ${i}px`};
`,wr=()=>ne`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,Xr={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},av=({theme:n,topLeftInner:o,bottomRightInner:i,hasShadow:s=!1,hasInsetShadow:u=!1})=>[s?oc:!1,u?ic:!1,o!==null?`inset 1px 1px 0px 1px ${n[o]}`:!1,i!==null?`inset -1px -1px 0 1px ${n[i]}`:!1].filter(Boolean).join(", "),Qe=({invert:n=!1,style:o="button"}={})=>{const i={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return ne`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:s})=>s[Xr[o][i.topLeftOuter]]};
    border-top-color: ${({theme:s})=>s[Xr[o][i.topLeftOuter]]};
    border-right-color: ${({theme:s})=>s[Xr[o][i.bottomRightOuter]]};
    border-bottom-color: ${({theme:s})=>s[Xr[o][i.bottomRightOuter]]};
    box-shadow: ${({theme:s,shadow:u})=>av({theme:s,topLeftInner:Xr[o][i.topLeftInner],bottomRightInner:Xr[o][i.bottomRightInner],hasShadow:u})};
  `},ro=()=>ne`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,uv=n=>Buffer.from(n).toString("base64"),cv=typeof btoa<"u"?btoa:uv,Al=(n,o=0)=>{const i=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${o} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${cv(i)})`},lc=(n="default")=>ne`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:o})=>ai({mainColor:n==="flat"?o.flatLight:o.material,secondaryColor:n==="flat"?o.canvas:o.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${Yt()}
    ${n==="flat"?wr():Qe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:o})=>o.material};
  }
  ::-webkit-scrollbar-button {
    ${Yt()}
    ${n==="flat"?wr():Qe({style:"window"})}
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
    background-image: ${({theme:o})=>Al(o.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:o})=>Al(o.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:o})=>Al(o.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:o})=>Al(o.materialText,0)};
  }
`,dv=U.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,fv=x.forwardRef(({children:n,underline:o=!0,...i},s)=>_.createElement(dv,{ref:s,underline:o,...i},n));fv.displayName="Anchor";const pv=U.header`
  ${Qe()};
  ${Yt()};

  position: ${n=>{var o;return(o=n.position)!==null&&o!==void 0?o:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Uh=x.forwardRef(({children:n,fixed:o=!0,position:i="fixed",...s},u)=>_.createElement(pv,{fixed:o,position:o!==!1?i:void 0,ref:u,...s},n));Uh.displayName="AppBar";const Er=()=>{};function hr(n,o,i){return i!==null&&n>i?i:o!==null&&n<o?o:n}function hv(n){if(Math.abs(n)<1){const i=n.toExponential().split("e-"),s=i[0].split(".")[1];return(s?s.length:0)+parseInt(i[1],10)}const o=n.toString().split(".")[1];return o?o.length:0}function Op(n,o,i){const s=Math.round((n-i)/o)*o+i;return Number(s.toFixed(hv(o)))}function Yn(n){return typeof n=="number"?`${n}px`:n}const mv=U.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({size:n})=>`
    height: ${n};
    width: ${n};
    `}
  border-radius: ${({square:n})=>n?0:"50%"};
  overflow: hidden;
  ${({noBorder:n,theme:o})=>!n&&`
    border-top: 2px solid ${o.borderDark};
    border-left: 2px solid ${o.borderDark};
    border-bottom: 2px solid ${o.borderLightest};
    border-right: 2px solid ${o.borderLightest};
    background: ${o.material};
  `}
  ${({src:n})=>!n&&`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`,gv=U.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,yv=x.forwardRef(({alt:n="",children:o,noBorder:i=!1,size:s=35,square:u=!1,src:d,...f},h)=>_.createElement(mv,{noBorder:i,ref:h,size:Yn(s),square:u,src:d,...f},d?_.createElement(gv,{src:d,alt:n}):o));yv.displayName="Avatar";const at={sm:"28px",md:"36px",lg:"44px"},vv=ne`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>at[n]};
  width: ${({fullWidth:n,size:o="md",square:i})=>n?"100%":i?at[o]:"auto"};
  padding: ${({square:n})=>n?0:"0 10px"};
  font-size: 1rem;
  user-select: none;
  &:active {
    padding-top: ${({disabled:n})=>!n&&"2px"};
  }
  padding-top: ${({active:n,disabled:o})=>n&&!o&&"2px"};
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
`,ts=U.button`
  ${({active:n,disabled:o,primary:i,theme:s,variant:u})=>u==="flat"?ne`
          ${wr()}
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
            ${!n&&!o&&ro}
            outline-offset: -4px;
          }
        `:u==="menu"||u==="thin"?ne`
          ${Yt()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!o&&!n&&Qe({style:"buttonThin"})}
          }
          &:active {
            ${!o&&Qe({style:"buttonThinPressed"})}
          }
          ${n&&Qe({style:"buttonThinPressed"})}
          ${o&&qt()}
        `:ne`
          ${Yt()};
          border: none;
          ${o&&qt()}
          ${n?ai({mainColor:s.material,secondaryColor:s.borderLightest}):""}
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

            ${Qe(n?{style:u==="raised"?"window":"button",invert:!0}:{style:u==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!o&&Qe({style:u==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!o&&ro}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${vv}
`,Be=x.forwardRef(({onClick:n,disabled:o=!1,children:i,type:s="button",fullWidth:u=!1,size:d="md",square:f=!1,active:h=!1,onTouchStart:m=Er,primary:g=!1,variant:v="default",...y},k)=>_.createElement(ts,{active:h,disabled:o,$disabled:o,fullWidth:u,onClick:o?void 0:n,onTouchStart:m,primary:g,ref:k,size:d,square:f,type:s,variant:v,...y},i));Be.displayName="Button";function Xn({defaultValue:n,onChange:o,onChangePropName:i="onChange",readOnly:s,value:u,valuePropName:d="value"}){const f=u!==void 0,[h,m]=x.useState(n),g=x.useCallback(v=>{f||m(v)},[f]);if(f&&typeof o!="function"&&!s){const v=`Warning: You provided a \`${d}\` prop to a component without an \`${i}\` handler.${d==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${i}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${i}\` function that updates \`${d}\`.`}`;console.warn(v)}return[f?u:h,g]}const Iu=U.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>at[n.size]};
  width: ${n=>n.square?at[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>at[n.size]};
  color: ${({theme:n})=>n.materialText};
  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
  font-weight: ${({primary:n})=>n?"bold":"normal"};
  &:hover {
    ${({theme:n,$disabled:o})=>!o&&`
        color: ${n.materialTextInvert};
        background: ${n.hoverBackground};
      `}

    cursor: default;
  }
  ${n=>n.$disabled&&qt()}
`,zt=x.forwardRef(({size:n="lg",disabled:o,square:i,children:s,onClick:u,primary:d,...f},h)=>_.createElement(Iu,{$disabled:o,size:n,square:i,onClick:o?void 0:u,primary:d,role:"menuitem",ref:h,"aria-disabled":o,...f},s));zt.displayName="MenuListItem";const ui=U.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Qe({style:"window"})}
  ${Yt()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;ui.displayName="MenuList";const an=20,Wl=U.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${an}px;
  height: ${an}px;
  opacity: 0;
  z-index: -1;
`,sc=U.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&qt()}

  ${Iu} & {
    margin: 0;
    height: 100%;
  }
  ${Iu}:hover & {
    ${({$disabled:n,theme:o})=>!n&&ne`
        color: ${o.materialTextInvert};
      `};
  }
`,ac=U.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Wl}:focus ~ & {
    ${ro}
  }
  ${Wl}:not(:disabled) ~ &:active {
    ${ro}
  }
`,dn=U.div`
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
    ${n=>n.shadow&&`box-shadow:${ic};`}
  }
`,xv=U.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${lc()}
`,Hh=x.forwardRef(({children:n,shadow:o=!0,...i},s)=>_.createElement(dn,{ref:s,shadow:o,...i},_.createElement(xv,null,n)));Hh.displayName="ScrollView";const Wh=ne`
  width: ${an}px;
  height: ${an}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,wv=U(dn)`
  ${Wh}
  width: ${an}px;
  height: ${an}px;
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};
  &:before {
    box-shadow: none;
  }
`,kv=U.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
  ${Wh}
  width: ${an-4}px;
  height: ${an-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
`,Sv=U.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
      ${({$disabled:n,theme:o})=>n?o.checkmarkDisabled:o.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${n=>n.$disabled?n.theme.checkmarkDisabled:n.theme.checkmark};
  }
`,Ev=U.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:o})=>ai({mainColor:n?o.checkmarkDisabled:o.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,bv={flat:kv,default:wv},Vh=x.forwardRef(({checked:n,className:o="",defaultChecked:i=!1,disabled:s=!1,indeterminate:u=!1,label:d="",onChange:f=Er,style:h={},value:m,variant:g="default",...v},y)=>{var k;const[R,w]=Xn({defaultValue:i,onChange:f,readOnly:(k=v.readOnly)!==null&&k!==void 0?k:s,value:n}),C=x.useCallback(L=>{const j=L.target.checked;w(j),f(L)},[f,w]),b=bv[g];let P=null;return u?P=Ev:R&&(P=Sv),_.createElement(sc,{$disabled:s,className:o,style:h},_.createElement(Wl,{disabled:s,onChange:s?void 0:C,readOnly:s,type:"checkbox",value:m,checked:R,"data-indeterminate":u,ref:y,...v}),_.createElement(b,{$disabled:s,role:"presentation"},P&&_.createElement(P,{$disabled:s,variant:g})),d&&_.createElement(ac,null,d))});Vh.displayName="Checkbox";const uc=U.div`
  ${({orientation:n,theme:o,size:i="100%"})=>n==="vertical"?`
    height: ${Yn(i)};
    border-left: 2px solid ${o.borderDark};
    border-right: 2px solid ${o.borderLightest};
    margin: 0;
    `:`
    width: ${Yn(i)};
    border-bottom: 2px solid ${o.borderLightest};
    border-top: 2px solid ${o.borderDark};
    margin: 0;
    `}
`;uc.displayName="Separator";const Cv=U(ts)`
  padding-left: 8px;
`,Av=U(uc)`
  height: 21px;
  position: relative;
  top: 0;
`,Qh=U.input`
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
`,Rv=U.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({color:n})=>n};

  ${({$disabled:n})=>n?ne`
          border: 2px solid ${({theme:o})=>o.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:o})=>o.materialTextDisabledShadow}
          );
        `:ne`
          border: 2px solid ${({theme:o})=>o.materialText};
        `}
  ${Qh}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${ro}
    outline-offset: -8px;
  }
`,$v=U.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({$disabled:n})=>n?ne`
          border-top: 6px solid ${({theme:o})=>o.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({theme:o})=>o.materialTextDisabledShadow}
          );
        `:ne`
          border-top: 6px solid ${({theme:o})=>o.materialText};
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
`,Tv=x.forwardRef(({value:n,defaultValue:o,onChange:i=Er,disabled:s=!1,variant:u="default",...d},f)=>{var h;const[m,g]=Xn({defaultValue:o,onChange:i,readOnly:(h=d.readOnly)!==null&&h!==void 0?h:s,value:n}),v=y=>{const k=y.target.value;g(k),i(y)};return _.createElement(Cv,{disabled:s,as:"div",variant:u,size:"md"},_.createElement(Qh,{onChange:v,readOnly:s,disabled:s,value:m??"#008080",type:"color",ref:f,...d}),_.createElement(Rv,{$disabled:s,color:m??"#008080",role:"presentation"}),u==="default"&&_.createElement(Av,{orientation:"vertical"}),_.createElement($v,{$disabled:s,variant:u}))});Tv.displayName="ColorInput";const Pv=U.div`
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
      ${ai({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,jp=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Nv=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Lv({digit:n=0,pixelSize:o=2,...i}){const s=Nv[Number(n)].map((u,d)=>u?`${jp[d]} active`:jp[d]);return _.createElement(Pv,{pixelSize:o,...i},s.map((u,d)=>_.createElement("span",{className:u,key:d})))}const Iv=U.div`
  ${Qe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Dv={sm:1,md:2,lg:3,xl:4},_v=x.forwardRef(({value:n=0,minLength:o=3,size:i="md",...s},u)=>{const d=x.useMemo(()=>n.toString().padStart(o,"0").split(""),[o,n]);return _.createElement(Iv,{ref:u,...s},d.map((f,h)=>_.createElement(Lv,{digit:f,pixelSize:Dv[i],key:h})))});_v.displayName="Counter";const Gh=ne`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${at.md};
`,Ov=U(dn).attrs({"data-testid":"variant-default"})`
  ${Gh}
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};
`,jv=U.div.attrs({"data-testid":"variant-flat"})`
  ${wr()}
  ${Gh}
  position: relative;
`,Kh=ne`
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
  ${({disabled:n,variant:o})=>o!=="flat"&&n&&qt()}
`,Fv=U.input`
  ${Kh}
  padding: 0 8px;
`,zv=U.textarea`
  ${Kh}
  padding: 8px;
  resize: none;
  ${({variant:n})=>lc(n)}
`,br=x.forwardRef(({className:n,disabled:o=!1,fullWidth:i,onChange:s=Er,shadow:u=!0,style:d,variant:f="default",...h},m)=>{const g=f==="flat"?jv:Ov,v=x.useMemo(()=>{var y;return h.multiline?_.createElement(zv,{disabled:o,onChange:o?void 0:s,readOnly:o,ref:m,variant:f,...h}):_.createElement(Fv,{disabled:o,onChange:o?void 0:s,readOnly:o,ref:m,type:(y=h.type)!==null&&y!==void 0?y:"text",variant:f,...h})},[o,s,h,m,f]);return _.createElement(g,{className:n,fullWidth:i,$disabled:o,shadow:u,style:d},v)});br.displayName="TextInput";const Bv=U.div`
  display: inline-flex;
  align-items: center;
`,Du=U(Be)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?ne`
          height: calc(50% - 1px);
        `:ne`
          height: 50%;
        `}
`,Mv=U.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?ne`
          height: calc(${at.md} - 4px);
        `:ne`
          height: ${at.md};
          margin-left: 2px;
        `}
`,Fp=U.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({invert:n})=>n?ne`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({theme:o})=>o.materialText};
        `:ne`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({theme:o})=>o.materialText};
        `}
  ${Du}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?ne`
            border-bottom-color: ${({theme:o})=>o.materialTextDisabled};
          `:ne`
            border-top-color: ${({theme:o})=>o.materialTextDisabled};
          `}
  }
`,qh=x.forwardRef(({className:n,defaultValue:o,disabled:i=!1,max:s,min:u,onChange:d,readOnly:f,step:h=1,style:m,value:g,variant:v="default",width:y,...k},R)=>{const[w,C]=Xn({defaultValue:o,onChange:d,readOnly:f,value:g}),b=x.useCallback(G=>{const q=parseFloat(G.target.value);C(q)},[C]),P=x.useCallback(G=>{const q=hr(parseFloat(((w??0)+G).toFixed(2)),u??null,s??null);C(q),d==null||d(q)},[s,u,d,C,w]),L=x.useCallback(()=>{w!==void 0&&(d==null||d(w))},[d,w]),j=x.useCallback(()=>{P(h)},[P,h]),W=x.useCallback(()=>{P(-h)},[P,h]),Q=v==="flat"?"flat":"raised";return _.createElement(Bv,{className:n,style:{...m,width:y!==void 0?Yn(y):"auto"},...k},_.createElement(br,{value:w,variant:v,onChange:b,disabled:i,type:"number",readOnly:f,ref:R,fullWidth:!0,onBlur:L}),_.createElement(Mv,{variant:v},_.createElement(Du,{"data-testid":"increment",variant:Q,disabled:i||f,onClick:j},_.createElement(Fp,{invert:!0})),_.createElement(Du,{"data-testid":"decrement",variant:Q,disabled:i||f,onClick:W},_.createElement(Fp,null))))});qh.displayName="NumberInput";function Uv(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let o="";for(let i=0;i<10;i+=1)o+=n[Math.floor(Math.random()*n.length)];return o}const Yh=n=>x.useMemo(()=>Uv(),[n]),Xh=ne`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Jh=ne`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,cc=U.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Hv=U.div`
  ${Xh}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${cc}:focus & {
    ${Jh}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,Zh=ne`
  height: ${at.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:o})=>n?qt():o.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Wv=U(dn)`
  ${Zh}
  background: ${({$disabled:n=!1,theme:o})=>n?o.material:o.canvas};
  &:focus {
    outline: 0;
  }
`,Vv=U.div`
  ${wr()}
  ${Zh}
  background: ${({$disabled:n=!1,theme:o})=>n?o.flatLight:o.canvas};
`,Qv=U.select`
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
  ${Xh}
  cursor: pointer;
  &:disabled {
    ${qt()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,em=U(ts).attrs(()=>({"aria-hidden":"true"}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({variant:n="default"})=>n==="flat"?ne`
          height: 100%;
          margin-right: 0;
        `:ne`
          height: 100%;
        `}
  ${({native:n=!1,variant:o="default"})=>n&&(o==="flat"?`
      position: absolute;
      right: 0;
      height: 100%;
      `:`
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({$disabled:n=!1,native:o=!1})=>n||o?"none":"auto"}
`,Gv=U.span`
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
    ${({$disabled:n=!1,theme:o})=>n?o.materialTextDisabled:o.materialText};
  ${({$disabled:n=!1,theme:o})=>n&&`
    filter: drop-shadow(1px 1px 0px ${o.materialTextDisabledShadow});
    border-top-color: ${o.materialTextDisabled};
    `}
  ${em}:active & {
    margin-top: 2px;
  }
`,Kv=U.ul`
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
  box-shadow: ${oc};
  ${({variant:n="default"})=>n==="flat"?ne`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:o})=>o.flatDark};
        `:ne`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:o})=>o.borderDarkest};
        `}
  ${({variant:n="default"})=>lc(n)}
`,qv=U.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${at.md} - 4px);
  line-height: calc(${at.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?Jh:""}
  user-select: none;
`,Yv=[],tm=({className:n,defaultValue:o,disabled:i,native:s,onChange:u,options:d=Yv,readOnly:f,style:h,value:m,variant:g,width:v})=>{var y;const k=x.useMemo(()=>d.filter(Boolean),[d]),[R,w]=Xn({defaultValue:o??((y=k==null?void 0:k[0])===null||y===void 0?void 0:y.value),onChange:u,readOnly:f,value:m}),C=!(i||f),b=x.useMemo(()=>({className:n,style:{...h,width:v}}),[n,h,v]),P=x.useMemo(()=>_.createElement(em,{as:"div","data-testid":"select-button",$disabled:i,native:s,tabIndex:-1,variant:g==="flat"?"flat":"raised"},_.createElement(Gv,{"data-testid":"select-icon",$disabled:i})),[i,s,g]),L=x.useMemo(()=>g==="flat"?Vv:Wv,[g]);return x.useMemo(()=>({isEnabled:C,options:k,value:R,setValue:w,wrapperProps:b,DropdownButton:P,Wrapper:L}),[P,L,C,k,w,R,b])},Xv={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Jv=1e3,Zv=({onBlur:n,onChange:o,onClose:i,onFocus:s,onKeyDown:u,onMouseDown:d,onOpen:f,open:h,options:m,readOnly:g,value:v,selectRef:y,setValue:k,wrapperRef:R})=>{const w=x.useRef(null),C=x.useRef([]),b=x.useRef(0),P=x.useRef(0),L=x.useRef(),j=x.useRef("search"),W=x.useRef(""),Q=x.useRef(),[G,q]=Xn({defaultValue:!1,onChange:f,onChangePropName:"onOpen",readOnly:g,value:h,valuePropName:"open"}),fe=x.useMemo(()=>{const z=m.findIndex(ue=>ue.value===v);return b.current=hr(z,0,null),m[z]},[m,v]),[me,Ee]=x.useState(m[0]),Ie=x.useCallback(z=>{const ue=w.current,ge=C.current[z];if(!ge||!ue){L.current=z;return}L.current=void 0;const ke=ue.clientHeight,Ne=ue.scrollTop,Ge=ue.scrollTop+ke,We=ge.offsetTop,mt=ge.offsetHeight,Ct=ge.offsetTop+ge.offsetHeight;We<Ne&&ue.scrollTo(0,We),Ct>Ge&&ue.scrollTo(0,We-ke+mt),ge.focus({preventScroll:!0})},[w]),Se=x.useCallback((z,{scroll:ue}={})=>{var ge;const ke=m.length-1;let Ne;switch(z){case"first":{Ne=0;break}case"last":{Ne=ke;break}case"next":{Ne=hr(P.current+1,0,ke);break}case"previous":{Ne=hr(P.current-1,0,ke);break}case"selected":{Ne=hr((ge=b.current)!==null&&ge!==void 0?ge:0,0,ke);break}default:Ne=z}P.current=Ne,Ee(m[Ne]),ue&&Ie(Ne)},[P,m,Ie]),$e=x.useCallback(({fromEvent:z})=>{q(!0),Se("selected",{scroll:!0}),f==null||f({fromEvent:z})},[Se,f,q]),Re=x.useCallback(()=>{j.current="search",W.current="",clearTimeout(Q.current)},[]),Ce=x.useCallback(({focusSelect:z,fromEvent:ue})=>{var ge;i==null||i({fromEvent:ue}),q(!1),Ee(m[0]),Re(),L.current=void 0,z&&((ge=y.current)===null||ge===void 0||ge.focus())},[Re,i,m,y,q]),Te=x.useCallback(({fromEvent:z})=>{G?Ce({focusSelect:!1,fromEvent:z}):$e({fromEvent:z})},[Ce,$e,G]),xe=x.useCallback((z,{fromEvent:ue})=>{b.current!==z&&(b.current=z,k(m[z].value),o==null||o(m[z],{fromEvent:ue}))},[o,m,k]),B=x.useCallback(({focusSelect:z,fromEvent:ue})=>{xe(P.current,{fromEvent:ue}),Ce({focusSelect:z,fromEvent:ue})},[Ce,xe]),J=x.useCallback((z,{fromEvent:ue,select:ge})=>{var ke;switch(j.current==="cycleFirstLetter"&&z!==W.current&&(j.current="search"),z===W.current?j.current="cycleFirstLetter":W.current+=z,j.current){case"search":{let Ne=m.findIndex(Ge=>{var We;return((We=Ge.label)===null||We===void 0?void 0:We.toLocaleUpperCase().indexOf(W.current))===0});Ne<0&&(Ne=m.findIndex(Ge=>{var We;return((We=Ge.label)===null||We===void 0?void 0:We.toLocaleUpperCase().indexOf(z))===0}),W.current=z),Ne>=0&&(ge?xe(Ne,{fromEvent:ue}):Se(Ne,{scroll:!0}));break}case"cycleFirstLetter":{const Ne=ge?(ke=b.current)!==null&&ke!==void 0?ke:-1:P.current;let Ge=m.findIndex((We,mt)=>{var Ct;return mt>Ne&&((Ct=We.label)===null||Ct===void 0?void 0:Ct.toLocaleUpperCase().indexOf(z))===0});Ge<0&&(Ge=m.findIndex(We=>{var mt;return((mt=We.label)===null||mt===void 0?void 0:mt.toLocaleUpperCase().indexOf(z))===0})),Ge>=0&&(ge?xe(Ge,{fromEvent:ue}):Se(Ge,{scroll:!0}));break}}clearTimeout(Q.current),Q.current=setTimeout(()=>{j.current==="search"&&(W.current="")},Jv)},[Se,m,xe]),Y=x.useCallback(z=>{var ue;z.button===0&&(z.preventDefault(),(ue=y.current)===null||ue===void 0||ue.focus(),Te({fromEvent:z}),d==null||d(z))},[d,y,Te]),T=x.useCallback(z=>{B({focusSelect:!0,fromEvent:z})},[B]),F=x.useCallback(z=>{const{altKey:ue,code:ge,ctrlKey:ke,metaKey:Ne,shiftKey:Ge}=z,{ARROW_DOWN:We,ARROW_UP:mt,END:Ct,ENTER:Jt,ESC:Lt,HOME:hn,SPACE:Zt,TAB:mn}=Xv,fo=ue||ke||Ne||Ge;if(!(ge===mn&&(ue||ke||Ne)||ge!==mn&&fo))switch(ge){case We:{if(z.preventDefault(),!G){$e({fromEvent:z});return}Se("next",{scroll:!0});break}case mt:{if(z.preventDefault(),!G){$e({fromEvent:z});return}Se("previous",{scroll:!0});break}case Ct:{if(z.preventDefault(),!G){$e({fromEvent:z});return}Se("last",{scroll:!0});break}case Jt:{if(!G)return;z.preventDefault(),B({focusSelect:!0,fromEvent:z});break}case Lt:{if(!G)return;z.preventDefault(),Ce({focusSelect:!0,fromEvent:z});break}case hn:{if(z.preventDefault(),!G){$e({fromEvent:z});return}Se("first",{scroll:!0});break}case Zt:{z.preventDefault(),G?B({focusSelect:!0,fromEvent:z}):$e({fromEvent:z});break}case mn:{if(!G)return;Ge||z.preventDefault(),B({focusSelect:!Ge,fromEvent:z});break}default:!fo&&ge.match(/^Key/)&&(z.preventDefault(),z.stopPropagation(),J(ge.replace(/^Key/,""),{select:!G,fromEvent:z}))}},[Se,Ce,G,$e,J,B]),X=x.useCallback(z=>{F(z),u==null||u(z)},[F,u]),Z=x.useCallback(z=>{Se(z)},[Se]),oe=x.useCallback(z=>{G||(Re(),n==null||n(z))},[Re,n,G]),te=x.useCallback(z=>{Re(),s==null||s(z)},[Re,s]),se=x.useCallback(z=>{w.current=z,L.current!==void 0&&Ie(L.current)},[Ie]),pe=x.useCallback((z,ue)=>{C.current[ue]=z,L.current===ue&&Ie(L.current)},[Ie]);return x.useEffect(()=>{if(!G)return()=>{};const z=ue=>{var ge;const ke=ue.target;!((ge=R.current)===null||ge===void 0)&&ge.contains(ke)||(ue.preventDefault(),Ce({focusSelect:!1,fromEvent:ue}))};return document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[Ce,G,R]),x.useMemo(()=>({activeOption:me,handleActivateOptionIndex:Z,handleBlur:oe,handleButtonKeyDown:X,handleDropdownKeyDown:F,handleFocus:te,handleMouseDown:Y,handleOptionClick:T,handleSetDropdownRef:se,handleSetOptionRef:pe,open:G,selectedOption:fe}),[me,Z,oe,X,te,F,Y,T,se,pe,G,fe])},ex=x.forwardRef(({className:n,defaultValue:o,disabled:i,onChange:s,options:u,readOnly:d,style:f,value:h,variant:m,width:g,...v},y)=>{const{isEnabled:k,options:R,setValue:w,value:C,DropdownButton:b,Wrapper:P}=tm({defaultValue:o,disabled:i,native:!0,onChange:s,options:u,readOnly:d,value:h,variant:m}),L=x.useCallback(j=>{const W=R.find(Q=>Q.value===j.target.value);W&&(w(W.value),s==null||s(W,{fromEvent:j}))},[s,R,w]);return _.createElement(P,{className:n,style:{...f,width:g}},_.createElement(cc,null,_.createElement(Qv,{...v,disabled:i,onChange:k?L:Er,ref:y,value:C},R.map((j,W)=>{var Q;return _.createElement("option",{key:`${j.value}-${W}`,value:j.value},(Q=j.label)!==null&&Q!==void 0?Q:j.value)})),b))});ex.displayName="SelectNative";function tx({activateOptionIndex:n,active:o,index:i,onClick:s,option:u,selected:d,setRef:f}){const h=x.useCallback(()=>{n(i)},[n,i]),m=x.useCallback(v=>{f(v,i)},[i,f]),g=Yh();return _.createElement(qv,{active:o,"aria-selected":d?"true":void 0,"data-value":u.value,id:g,onClick:s,onMouseEnter:h,ref:m,role:"option",tabIndex:0},u.label)}function nx({"aria-label":n,"aria-labelledby":o,className:i,defaultValue:s,disabled:u=!1,formatDisplay:d,inputProps:f,labelId:h,menuMaxHeight:m,name:g,onBlur:v,onChange:y,onClose:k,onFocus:R,onKeyDown:w,onMouseDown:C,onOpen:b,open:P,options:L,readOnly:j,shadow:W=!0,style:Q,variant:G="default",value:q,width:fe="auto",...me},Ee){const{isEnabled:Ie,options:Se,setValue:$e,value:Re,wrapperProps:Ce,DropdownButton:Te,Wrapper:xe}=tm({className:i,defaultValue:s,disabled:u,native:!1,onChange:y,options:L,style:Q,readOnly:j,value:q,variant:G,width:fe}),B=x.useRef(null),J=x.useRef(null),Y=x.useRef(null),{activeOption:T,handleActivateOptionIndex:F,handleBlur:X,handleButtonKeyDown:Z,handleDropdownKeyDown:oe,handleFocus:te,handleMouseDown:se,handleOptionClick:pe,handleSetDropdownRef:z,handleSetOptionRef:ue,open:ge,selectedOption:ke}=Zv({onBlur:v,onChange:y,onClose:k,onFocus:R,onKeyDown:w,onMouseDown:C,onOpen:b,open:P,options:Se,value:Re,selectRef:J,setValue:$e,wrapperRef:Y});x.useImperativeHandle(Ee,()=>({focus:Jt=>{var Lt;(Lt=J.current)===null||Lt===void 0||Lt.focus(Jt)},node:B.current,value:String(Re)}),[Re]);const Ne=x.useMemo(()=>ke?typeof d=="function"?d(ke):ke.label:"",[d,ke]),Ge=Ie?1:void 0,We=x.useMemo(()=>m?{overflow:"auto",maxHeight:m}:void 0,[m]),mt=Yh(),Ct=x.useMemo(()=>Se.map((Jt,Lt)=>{const hn=`${Re}-${Lt}`,Zt=Jt===T,mn=Jt===ke;return _.createElement(tx,{activateOptionIndex:F,active:Zt,index:Lt,key:hn,onClick:pe,option:Jt,selected:mn,setRef:ue})}),[T,F,pe,ue,Se,ke,Re]);return _.createElement(xe,{...Ce,$disabled:u,ref:Y,shadow:W,style:{...Q,width:fe}},_.createElement("input",{name:g,ref:B,type:"hidden",value:String(Re),...f}),_.createElement(cc,{"aria-disabled":u,"aria-expanded":ge,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":o??h,"aria-owns":Ie&&ge?mt:void 0,onBlur:X,onFocus:te,onKeyDown:Z,onMouseDown:Ie?se:C,ref:J,role:"button",tabIndex:Ge,...me},_.createElement(Hv,null,Ne),Te),Ie&&ge&&_.createElement(Kv,{id:mt,onKeyDown:oe,ref:z,role:"listbox",style:We,tabIndex:0,variant:G},Ct))}const dc=x.forwardRef(nx);dc.displayName="Select";const rx=U.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,un=x.forwardRef(function({children:o,noPadding:i=!1,...s},u){return _.createElement(rx,{noPadding:i,ref:u,...s},o)});un.displayName="Toolbar";const ox=U.div`
  padding: 16px;
`,fn=x.forwardRef(function({children:o,...i},s){return _.createElement(ox,{ref:s,...i},o)});fn.displayName="WindowContent";const ix=U.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({theme:n})=>n.material};
  ${({active:n})=>n===!1?ne`
          background: ${({theme:o})=>o.headerNotActiveBackground};
          color: ${({theme:o})=>o.headerNotActiveText};
        `:ne`
          background: ${({theme:o})=>o.headerBackground};
          color: ${({theme:o})=>o.headerText};
        `}

  ${ts} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,fc=x.forwardRef(function({active:o=!0,children:i,...s},u){return _.createElement(ix,{active:o,ref:u,...s},i)});fc.displayName="WindowHeader";const lx=U.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Qe({style:"window"})}
  ${Yt()}
`,sx=U.span`
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
`,pc=x.forwardRef(({children:n,resizable:o=!1,resizeRef:i,shadow:s=!0,...u},d)=>_.createElement(lx,{ref:d,shadow:s,...u},n,o&&_.createElement(sx,{"data-testid":"resizeHandle",ref:i})));pc.displayName="Window";const ax=U(Hh)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,ux=U.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,cx=U.div`
  display: flex;
  flex-wrap: wrap;
`,bn=U.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,dx=U.span`
  cursor: pointer;

  background: ${({active:n,theme:o})=>n?o.hoverBackground:"transparent"};
  color: ${({active:n,theme:o})=>n?o.canvasTextInvert:o.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:o})=>o?"none":n.materialDark};
  }
`,fx=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function px(n,o){return new Date(n,o+1,0).getDate()}function hx(n,o,i){return new Date(n,o,i).getDay()}function mx(n){const o=new Date(Date.parse(n)),i=o.getUTCDate(),s=o.getUTCMonth(),u=o.getUTCFullYear();return{day:i,month:s,year:u}}const gx=x.forwardRef(({className:n,date:o=new Date().toISOString(),onAccept:i,onCancel:s,shadow:u=!0},d)=>{const[f,h]=x.useState(()=>mx(o)),{year:m,month:g,day:v}=f,y=x.useCallback(({value:b})=>{h(P=>({...P,month:b}))},[]),k=x.useCallback(b=>{h(P=>({...P,year:b}))},[]),R=x.useCallback(b=>{h(P=>({...P,day:b}))},[]),w=x.useCallback(()=>{const b=[f.year,f.month+1,f.day].map(P=>String(P).padStart(2,"0")).join("-");i==null||i(b)},[f.day,f.month,f.year,i]),C=x.useMemo(()=>{const b=Array.from({length:42}),P=hx(m,g,1);let L=v;const j=px(m,g);return L=L<j?L:j,b.forEach((W,Q)=>{if(Q>=P&&Q<j+P){const G=Q-P+1;b[Q]=_.createElement(bn,{key:Q,onClick:()=>{R(G)}},_.createElement(dx,{active:G===L},G))}else b[Q]=_.createElement(bn,{key:Q})}),b},[v,R,g,m]);return _.createElement(pc,{className:n,ref:d,shadow:u,style:{margin:20}},_.createElement(fc,null,_.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),_.createElement(fn,null,_.createElement(un,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement(dc,{options:fx,value:g,onChange:y,width:128,menuMaxHeight:200}),_.createElement(qh,{value:m,onChange:k,width:100})),_.createElement(ax,null,_.createElement(ux,null,_.createElement(bn,null,"S"),_.createElement(bn,null,"M"),_.createElement(bn,null,"T"),_.createElement(bn,null,"W"),_.createElement(bn,null,"T"),_.createElement(bn,null,"F"),_.createElement(bn,null,"S")),_.createElement(cx,null,C)),_.createElement(un,{noPadding:!0,style:{justifyContent:"space-between"}},_.createElement(Be,{fullWidth:!0,onClick:s,disabled:!s},"Cancel"),_.createElement(Be,{fullWidth:!0,onClick:i?w:void 0,disabled:!i},"OK"))))});gx.displayName="DatePicker";const yx=n=>{switch(n){case"status":case"well":return ne`
        ${Qe({style:"status"})}
      `;case"window":case"outside":return ne`
        ${Qe({style:"window"})}
      `;case"field":return ne`
        ${Qe({style:"field"})}
      `;default:return ne`
        ${Qe()}
      `}},vx=U.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>yx(n)}
  ${({variant:n})=>Yt(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Rn=x.forwardRef(({children:n,shadow:o=!1,variant:i="window",...s},u)=>_.createElement(vx,{ref:u,shadow:o,variant:i,...s},n));Rn.displayName="Frame";const xx=U.fieldset`
  position: relative;
  border: 2px solid
    ${({theme:n,variant:o})=>o==="flat"?n.flatDark:n.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${({variant:n})=>n!=="flat"&&ne`
      box-shadow: -1px -1px 0 1px ${({theme:o})=>o.borderDark},
        inset -1px -1px 0 1px ${({theme:o})=>o.borderDark};
    `}
  ${n=>n.$disabled&&qt()}
`,wx=U.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:o})=>o==="flat"?n.canvas:n.material};
`,nm=x.forwardRef(({label:n,disabled:o=!1,variant:i="default",children:s,...u},d)=>_.createElement(xx,{"aria-disabled":o,$disabled:o,variant:i,ref:d,...u},n&&_.createElement(wx,{variant:i},n),s));nm.displayName="GroupBox";const kx=U.div`
  ${({theme:n,size:o="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${Yn(o)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;kx.displayName="Handle";const Sx="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",Ex=U.div`
  display: inline-block;
  height: ${({size:n})=>Yn(n)};
  width: ${({size:n})=>Yn(n)};
`,bx=U.span`
  display: block;
  background: ${Sx};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Cx=x.forwardRef(({size:n=30,...o},i)=>_.createElement(Ex,{size:n,ref:i,...o},_.createElement(bx,null)));Cx.displayName="Hourglass";const Ax=U.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Rx=U.div`
  position: relative;
`,$x=U.div`
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
`,Tx=U(dn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Px=U.div`
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
`,Nx=x.forwardRef(({backgroundStyles:n,children:o,...i},s)=>_.createElement(Ax,{ref:s,...i},_.createElement(Rx,null,_.createElement($x,null,_.createElement(Tx,{style:n},o)),_.createElement(Px,null))));Nx.displayName="Monitor";const Lx=U.div`
  display: inline-block;
  height: ${at.md};
  width: 100%;
`,Ix=U(dn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,rm=ne`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Dx=U.div`
  position: relative;
  top: 4px;
  ${rm}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,_x=U.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${rm}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Ox=U.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,om=17,jx=U.span`
  display: inline-block;
  width: ${om}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,ns=x.forwardRef(({hideValue:n=!1,shadow:o=!0,value:i,variant:s="default",...u},d)=>{const f=n?null:`${i}%`,h=x.useRef(null),[m,g]=x.useState([]),v=x.useCallback(()=>{if(!h.current||i===void 0)return;const y=h.current.getBoundingClientRect().width,k=Math.round(i/100*y/om);g(Array.from({length:k}))},[i]);return x.useEffect(()=>(v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[v]),_.createElement(Lx,{"aria-valuenow":i!==void 0?Math.round(i):void 0,ref:d,role:"progressbar",variant:s,...u},_.createElement(Ix,{variant:s,shadow:o},s==="default"?_.createElement(_.Fragment,null,_.createElement(Dx,{"data-testid":"defaultProgress1"},f),_.createElement(_x,{"data-testid":"defaultProgress2",value:i},f)):_.createElement(Ox,{ref:h,"data-testid":"tileProgress"},m.map((y,k)=>_.createElement(jx,{key:k})))))});ns.displayName="ProgressBar";const im=ne`
  width: ${an}px;
  height: ${an}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Fx=U(dn)`
  ${im}
  background: ${({$disabled:n,theme:o})=>n?o.material:o.canvas};

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
`,zx=U.div`
  ${wr()}
  ${im}
  outline: none;
  background: ${({$disabled:n,theme:o})=>n?o.flatLight:o.canvas};
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
`,Bx=U.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,Mx={flat:zx,default:Fx},Ux=x.forwardRef(({checked:n,className:o="",disabled:i=!1,label:s="",onChange:u,style:d={},variant:f="default",...h},m)=>{const g=Mx[f];return _.createElement(sc,{$disabled:i,className:o,style:d},_.createElement(g,{$disabled:i,role:"presentation"},n&&_.createElement(Bx,{$disabled:i,variant:f})),_.createElement(Wl,{disabled:i,onChange:i?void 0:u,readOnly:i,type:"radio",checked:n,ref:m,...h}),s&&_.createElement(ac,null,s))});Ux.displayName="Radio";const Hx=typeof window<"u"?x.useLayoutEffect:x.useEffect;function fr(n){const o=x.useRef(n);return Hx(()=>{o.current=n}),x.useCallback((...i)=>(0,o.current)(...i),[])}function zp(n,o){typeof n=="function"?n(o):n&&(n.current=o)}function Bp(n,o){return x.useMemo(()=>n==null&&o==null?null:i=>{zp(n,i),zp(o,i)},[n,o])}var Wx=gh();let rs=!0,_u=!1,Mp;const Vx={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function Qx(n){if("type"in n){const{type:o,tagName:i}=n;if(i==="INPUT"&&Vx[o]&&!n.readOnly||i==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function Gx(n){n.metaKey||n.altKey||n.ctrlKey||(rs=!0)}function mu(){rs=!1}function Kx(){this.visibilityState==="hidden"&&_u&&(rs=!0)}function qx(n){n.addEventListener("keydown",Gx,!0),n.addEventListener("mousedown",mu,!0),n.addEventListener("pointerdown",mu,!0),n.addEventListener("touchstart",mu,!0),n.addEventListener("visibilitychange",Kx,!0)}function Yx(n){const{target:o}=n;try{return o.matches(":focus-visible")}catch{}return rs||Qx(o)}function Xx(){_u=!0,window.clearTimeout(Mp),Mp=window.setTimeout(()=>{_u=!1},100)}function Jx(){const n=x.useCallback(o=>{const i=Wx.findDOMNode(o);i!=null&&qx(i.ownerDocument)},[]);return{isFocusVisible:Yx,onBlurVisible:Xx,ref:n}}function Zx(n,o,i){return(i-o)*n+o}function Rl(n,o){if(o!==void 0&&"changedTouches"in n){for(let i=0;i<n.changedTouches.length;i+=1){const s=n.changedTouches[i];if(s.identifier===o)return{x:s.clientX,y:s.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function $l(n){return n&&n.ownerDocument||document}function ew(n,o){var i;const{index:s}=(i=n.reduce((u,d,f)=>{const h=Math.abs(o-d);return u===null||h<u.distance||h===u.distance?{distance:h,index:f}:u},null))!==null&&i!==void 0?i:{};return s??-1}const tw=U.div`
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
    ${({isFocused:n,theme:o})=>n&&`
        outline: 2px dotted ${o.materialText};
        `}
  }

  ${({orientation:n,size:o})=>n==="vertical"?ne`
          height: ${o};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `:ne`
          width: ${o};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({hasMarks:i})=>i?"41px":"39px"};
          }
        `}

  pointer-events: ${({$disabled:n})=>n?"none":"auto"};
`,lm=()=>ne`
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
`,nw=U(dn)`
  ${lm()}
`,rw=U(dn)`
  ${lm()}

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
`,ow=U.span`
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
          ${wr()}
          outline: 2px solid ${({theme:o})=>o.flatDark};
          background: ${({theme:o})=>o.flatLight};
        `:ne`
          ${Yt()}
          ${Qe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:o})=>n&&ai({mainColor:o.material,secondaryColor:o.borderLightest})}
`,Vl=6,iw=U.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?ne`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Vl}px;
          border-bottom: 2px solid ${({theme:o})=>o.materialText};
        `:ne`
          bottom: ${-6}px;
          height: ${Vl}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:o})=>o.materialText};
          border-right: 1px solid ${({theme:o})=>o.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:o})=>n&&ne`
      ${qt()}
      box-shadow: 1px 1px 0px ${o.materialTextDisabledShadow};
      border-color: ${o.materialTextDisabled};
    `}
`,lw=U.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?ne`
          transform: translate(${Vl+2}px, ${Vl+1}px);
        `:ne`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,sw=x.forwardRef(({defaultValue:n,disabled:o=!1,marks:i=!1,max:s=100,min:u=0,name:d,onChange:f,onChangeCommitted:h,onMouseDown:m,orientation:g="horizontal",size:v="100%",step:y=1,value:k,variant:R="default",...w},C)=>{const b=R==="flat"?rw:nw,P=g==="vertical",[L=u,j]=Xn({defaultValue:n,onChange:f??h,value:k}),{isFocusVisible:W,onBlurVisible:Q,ref:G}=Jx(),[q,fe]=x.useState(!1),me=x.useRef(),Ee=x.useRef(null),Ie=Bp(G,me),Se=Bp(C,Ie),$e=fr(X=>{W(X)&&fe(!0)}),Re=fr(()=>{q!==!1&&(fe(!1),Q())}),Ce=x.useRef(),Te=x.useMemo(()=>i===!0&&Number.isFinite(y)?[...Array(Math.round((s-u)/y)+1)].map((X,Z)=>({label:void 0,value:u+y*Z})):Array.isArray(i)?i:[],[i,s,u,y]),xe=fr(X=>{const Z=(s-u)/10,oe=Te.map(pe=>pe.value),te=oe.indexOf(L);let se=0;switch(X.key){case"Home":se=u;break;case"End":se=s;break;case"PageUp":y&&(se=L+Z);break;case"PageDown":y&&(se=L-Z);break;case"ArrowRight":case"ArrowUp":y?se=L+y:se=oe[te+1]||oe[oe.length-1];break;case"ArrowLeft":case"ArrowDown":y?se=L-y:se=oe[te-1]||oe[0];break;default:return}X.preventDefault(),y&&(se=Op(se,y,u)),se=hr(se,u,s),j(se),fe(!0),f==null||f(se),h==null||h(se)}),B=x.useCallback(X=>{if(!me.current)return 0;const Z=me.current.getBoundingClientRect();let oe;P?oe=(Z.bottom-X.y)/Z.height:oe=(X.x-Z.left)/Z.width;let te;if(te=Zx(oe,u,s),y)te=Op(te,y,u);else{const se=Te.map(z=>z.value),pe=ew(se,te);te=se[pe]}return te=hr(te,u,s),te},[Te,s,u,y,P]),J=fr(X=>{var Z;const oe=Rl(X,Ce.current);if(!oe)return;const te=B(oe);(Z=Ee.current)===null||Z===void 0||Z.focus(),j(te),fe(!0),f==null||f(te)}),Y=fr(X=>{const Z=Rl(X,Ce.current);if(!Z)return;const oe=B(Z);h==null||h(oe),Ce.current=void 0;const te=$l(me.current);te.removeEventListener("mousemove",J),te.removeEventListener("mouseup",Y),te.removeEventListener("touchmove",J),te.removeEventListener("touchend",Y)}),T=fr(X=>{var Z;m==null||m(X),X.preventDefault(),(Z=Ee.current)===null||Z===void 0||Z.focus(),fe(!0);const oe=Rl(X,Ce.current);if(oe){const se=B(oe);j(se),f==null||f(se)}const te=$l(me.current);te.addEventListener("mousemove",J),te.addEventListener("mouseup",Y)}),F=fr(X=>{var Z;X.preventDefault();const oe=X.changedTouches[0];oe!=null&&(Ce.current=oe.identifier),(Z=Ee.current)===null||Z===void 0||Z.focus(),fe(!0);const te=Rl(X,Ce.current);if(te){const pe=B(te);j(pe),f==null||f(pe)}const se=$l(me.current);se.addEventListener("touchmove",J),se.addEventListener("touchend",Y)});return x.useEffect(()=>{const{current:X}=me;X==null||X.addEventListener("touchstart",F);const Z=$l(X);return()=>{X==null||X.removeEventListener("touchstart",F),Z.removeEventListener("mousemove",J),Z.removeEventListener("mouseup",Y),Z.removeEventListener("touchmove",J),Z.removeEventListener("touchend",Y)}},[Y,J,F]),_.createElement(tw,{$disabled:o,hasMarks:!!Te.length,isFocused:q,onMouseDown:T,orientation:g,ref:Se,size:Yn(v),...w},_.createElement("input",{disabled:o,name:d,type:"hidden",value:L??0}),Te&&Te.map(X=>_.createElement(iw,{$disabled:o,"data-testid":"tick",key:X.value/(s-u)*100,orientation:g,style:{[P?"bottom":"left"]:`${(X.value-u)/(s-u)*100}%`}},X.label&&_.createElement(lw,{"aria-hidden":!0,"data-testid":"mark",orientation:g},X.label))),_.createElement(b,{orientation:g,variant:R}),_.createElement(ow,{$disabled:o,"aria-disabled":o?!0:void 0,"aria-orientation":g,"aria-valuemax":s,"aria-valuemin":u,"aria-valuenow":L,onBlur:Re,onFocus:$e,onKeyDown:xe,orientation:g,ref:Ee,role:"slider",style:{[P?"bottom":"left"]:`${(P?-100:0)+100*(L-u)/(s-u)}%`},tabIndex:o?void 0:0,variant:R}))});sw.displayName="Slider";const aw=U.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${ic};
  overflow-y: auto;
`,os=x.forwardRef(function({children:o,...i},s){return _.createElement(aw,{ref:s,...i},o)});os.displayName="TableBody";const uw=U.td`
  padding: 0 8px;
`,pt=x.forwardRef(function({children:o,...i},s){return _.createElement(uw,{ref:s,...i},o)});pt.displayName="TableDataCell";const cw=U.thead`
  display: table-header-group;
`,is=x.forwardRef(function({children:o,...i},s){return _.createElement(cw,{ref:s,...i},o)});is.displayName="TableHead";const dw=U.th`
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
  ${({$disabled:n})=>n&&qt()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&qt()}
  }
`,ls=x.forwardRef(function({disabled:o=!1,children:i,onClick:s,onTouchStart:u=Er,sort:d,...f},h){const m=d==="asc"?"ascending":d==="desc"?"descending":void 0;return _.createElement(dw,{$disabled:o,"aria-disabled":o,"aria-sort":m,onClick:o?void 0:s,onTouchStart:o?void 0:u,ref:h,...f},_.createElement("div",null,i))});ls.displayName="TableHeadCell";const fw=U.tr`
  color: inherit;
  display: table-row;
  height: calc(${at.md} - 2px);
  line-height: calc(${at.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,kr=x.forwardRef(function({children:o,...i},s){return _.createElement(fw,{ref:s,...i},o)});kr.displayName="TableRow";const pw=U.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,hw=U(dn)`
  &:before {
    box-shadow: none;
  }
`,ss=x.forwardRef(({children:n,...o},i)=>_.createElement(hw,null,_.createElement(pw,{ref:i,...o},n)));ss.displayName="Table";const mw=U.button`
  ${Yt()}
  ${Qe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${at.md};
  line-height: ${at.md};
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
    ${ro}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
    z-index: 1;
    height: calc(${at.md} + 4px);
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
`,gw=x.forwardRef(({value:n,onClick:o,selected:i=!1,children:s,...u},d)=>_.createElement(mw,{"aria-selected":i,selected:i,onClick:f=>o==null?void 0:o(n,f),ref:d,role:"tab",...u},s));gw.displayName="Tab";const yw=U.div`
  ${Yt()}
  ${Qe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,vw=x.forwardRef(({children:n,...o},i)=>_.createElement(yw,{ref:i,...o},n));vw.displayName="TabBody";const xw=U.div`
  position: relative;
  ${({isMultiRow:n,theme:o})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${o.borderDark};
  }
  `}
`,ww=U.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function kw(n,o){const i=[];for(let s=o;s>0;s-=1)i.push(n.splice(0,Math.ceil(n.length/s)));return i}const Sw=x.forwardRef(({value:n,onChange:o=Er,children:i,rows:s=1,...u},d)=>{const f=x.useMemo(()=>{var h;const m=(h=_.Children.map(i,y=>{if(!_.isValidElement(y))return null;const k={selected:y.props.value===n,onClick:o};return _.cloneElement(y,k)}))!==null&&h!==void 0?h:[],g=kw(m,s).map((y,k)=>({key:k,tabs:y})),v=g.findIndex(y=>y.tabs.some(k=>k.props.selected));return g.push(g.splice(v,1)[0]),g},[i,o,s,n]);return _.createElement(xw,{...u,isMultiRow:s>1,role:"tablist",ref:d},f.map(h=>_.createElement(ww,{key:h.key},h.tabs)))});Sw.displayName="Tabs";const Ew=["blur","focus"],bw=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function Up(n){return"nativeEvent"in n&&Ew.includes(n.type)}function Hp(n){return"nativeEvent"in n&&bw.includes(n.type)}const Cw={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},Aw=U.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${oc};
  text-align: center;
  font-size: 1rem;
  ${n=>Cw[n.position]}
`,Rw=U.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,$w=x.forwardRef(({className:n,children:o,disableFocusListener:i=!1,disableMouseListener:s=!1,enterDelay:u=1e3,leaveDelay:d=0,onBlur:f,onClose:h,onFocus:m,onMouseEnter:g,onMouseLeave:v,onOpen:y,style:k,text:R,position:w="top",...C},b)=>{const[P,L]=x.useState(!1),[j,W]=x.useState(),[Q,G]=x.useState(),q=!i,fe=!s,me=B=>{window.clearTimeout(j),window.clearTimeout(Q);const J=window.setTimeout(()=>{L(!0),y==null||y(B)},u);W(J)},Ee=B=>{B.persist(),Up(B)?m==null||m(B):Hp(B)&&(g==null||g(B)),me(B)},Ie=B=>{window.clearTimeout(j),window.clearTimeout(Q);const J=window.setTimeout(()=>{L(!1),h==null||h(B)},d);G(J)},Se=B=>{B.persist(),Up(B)?f==null||f(B):Hp(B)&&(v==null||v(B)),Ie(B)},$e=q?Se:void 0,Re=q?Ee:void 0,Ce=fe?Ee:void 0,Te=fe?Se:void 0,xe=q?0:void 0;return _.createElement(Rw,{"data-testid":"tooltip-wrapper",onBlur:$e,onFocus:Re,onMouseEnter:Ce,onMouseLeave:Te,tabIndex:xe},_.createElement(Aw,{className:n,"data-testid":"tooltip",position:w,ref:b,show:P,style:k,...C},R),o)});$w.displayName="Tooltip";const Ou=U(ac)`
  white-space: nowrap;
`,sm=ne`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":ne`
          cursor: pointer;

          :focus {
            ${Ou} {
              background: ${({theme:o})=>o.hoverBackground};
              color: ${({theme:o})=>o.materialTextInvert};
              outline: 2px dotted ${({theme:o})=>o.focusSecondary};
            }
          }
        `}
`,Tw=U.ul`
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
        border-left: 2px dashed ${({theme:o})=>o.borderDark};
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
`,Pw=U.li`
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
              background: ${({theme:o})=>o.material};
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
              background: ${({theme:o})=>o.material};
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
`,Nw=U.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,Lw=U.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${sm};

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
`,Wp=U(sc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${sm};
`,Iw=U.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function Vp(n,o){return n.includes(o)?n.filter(i=>i!==o):[...n,o]}function Qp(n){n.preventDefault()}function am({className:n,disabled:o,expanded:i,innerRef:s,level:u,select:d,selected:f,style:h,tree:m=[]}){const g=u===0,v=x.useCallback(y=>{var k,R;const w=!!(y.items&&y.items.length>0),C=i.includes(y.id),b=(k=o||y.disabled)!==null&&k!==void 0?k:!1,P=b?Qp:Q=>d(Q,y),L=b?Qp:Q=>d(Q,y),j=f===y.id,W=_.createElement(Iw,{"aria-hidden":!0},y.icon);return _.createElement(Pw,{key:y.label,isRootLevel:g,role:"treeitem","aria-expanded":C,"aria-selected":j,hasItems:w},w?_.createElement(Nw,{open:C},_.createElement(Lw,{onClick:P,$disabled:b},_.createElement(Wp,{$disabled:b},W,_.createElement(Ou,null,y.label))),C&&_.createElement(am,{className:n,disabled:b,expanded:i,level:u+1,select:d,selected:f,style:h,tree:(R=y.items)!==null&&R!==void 0?R:[]})):_.createElement(Wp,{as:"button",$disabled:b,onClick:L},W,_.createElement(Ou,null,y.label)))},[n,o,i,g,u,d,f,h]);return _.createElement(Tw,{className:g?n:void 0,style:g?h:void 0,ref:g?s:void 0,role:g?"tree":"group",isRootLevel:g},m.map(v))}function Dw({className:n,defaultExpanded:o=[],defaultSelected:i,disabled:s=!1,expanded:u,onNodeSelect:d,onNodeToggle:f,selected:h,style:m,tree:g=[]},v){const[y,k]=Xn({defaultValue:o,onChange:f,onChangePropName:"onNodeToggle",value:u,valuePropName:"expanded"}),[R,w]=Xn({defaultValue:i,onChange:d,onChangePropName:"onNodeSelect",value:h,valuePropName:"selected"}),C=x.useCallback((L,j)=>{if(f){const W=Vp(y,j);f(L,W)}k(W=>Vp(W,j))},[y,f,k]),b=x.useCallback((L,j)=>{w(j),d&&d(L,j)},[d,w]),P=x.useCallback((L,j)=>{L.preventDefault(),b(L,j.id),j.items&&j.items.length&&C(L,j.id)},[b,C]);return _.createElement(am,{className:n,disabled:s,expanded:y,level:0,innerRef:v,select:P,selected:R,style:m,tree:g})}const _w=x.forwardRef(Dw);_w.displayName="TreeView";var gu,Gp;function Ow(){if(Gp)return gu;Gp=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return gu=n,gu}var jw=Ow();const Fw=mh(jw),zw="/assets/ms_sans_serif-Du8rjN1q.woff2",Bw="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var Jo={},Kp;function Mw(){if(Kp)return Jo;Kp=1,Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.parse=f,Jo.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,d=(()=>{const k=function(){};return k.prototype=Object.create(null),k})();function f(k,R){const w=new d,C=k.length;if(C<2)return w;const b=(R==null?void 0:R.decode)||v;let P=0;do{const L=k.indexOf("=",P);if(L===-1)break;const j=k.indexOf(";",P),W=j===-1?C:j;if(L>W){P=k.lastIndexOf(";",L-1)+1;continue}const Q=h(k,P,L),G=m(k,L,Q),q=k.slice(Q,G);if(w[q]===void 0){let fe=h(k,L+1,W),me=m(k,W,fe);const Ee=b(k.slice(fe,me));w[q]=Ee}P=W+1}while(P<C);return w}function h(k,R,w){do{const C=k.charCodeAt(R);if(C!==32&&C!==9)return R}while(++R<w);return w}function m(k,R,w){for(;R>w;){const C=k.charCodeAt(--R);if(C!==32&&C!==9)return R+1}return w}function g(k,R,w){const C=(w==null?void 0:w.encode)||encodeURIComponent;if(!n.test(k))throw new TypeError(`argument name is invalid: ${k}`);const b=C(R);if(!o.test(b))throw new TypeError(`argument val is invalid: ${R}`);let P=k+"="+b;if(!w)return P;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);P+="; Max-Age="+w.maxAge}if(w.domain){if(!i.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);P+="; Domain="+w.domain}if(w.path){if(!s.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);P+="; Path="+w.path}if(w.expires){if(!y(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);P+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(P+="; HttpOnly"),w.secure&&(P+="; Secure"),w.partitioned&&(P+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":P+="; Priority=Low";break;case"medium":P+="; Priority=Medium";break;case"high":P+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":P+="; SameSite=Strict";break;case"lax":P+="; SameSite=Lax";break;case"none":P+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return P}function v(k){if(k.indexOf("%")===-1)return k;try{return decodeURIComponent(k)}catch{return k}}function y(k){return u.call(k)==="[object Date]"}return Jo}Mw();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var qp="popstate";function Uw(n={}){function o(s,u){let{pathname:d,search:f,hash:h}=s.location;return ju("",{pathname:d,search:f,hash:h},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(s,u){return typeof u=="string"?u:li(u)}return Ww(o,i,null,n)}function He(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}function cn(n,o){if(!n){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Hw(){return Math.random().toString(36).substring(2,10)}function Yp(n,o){return{usr:n.state,key:n.key,idx:o}}function ju(n,o,i=null,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof o=="string"?io(o):o,state:i,key:o&&o.key||s||Hw()}}function li({pathname:n="/",search:o="",hash:i=""}){return o&&o!=="?"&&(n+=o.charAt(0)==="?"?o:"?"+o),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function io(n){let o={};if(n){let i=n.indexOf("#");i>=0&&(o.hash=n.substring(i),n=n.substring(0,i));let s=n.indexOf("?");s>=0&&(o.search=n.substring(s),n=n.substring(0,s)),n&&(o.pathname=n)}return o}function Ww(n,o,i,s={}){let{window:u=document.defaultView,v5Compat:d=!1}=s,f=u.history,h="POP",m=null,g=v();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function v(){return(f.state||{idx:null}).idx}function y(){h="POP";let b=v(),P=b==null?null:b-g;g=b,m&&m({action:h,location:C.location,delta:P})}function k(b,P){h="PUSH";let L=ju(C.location,b,P);g=v()+1;let j=Yp(L,g),W=C.createHref(L);try{f.pushState(j,"",W)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;u.location.assign(W)}d&&m&&m({action:h,location:C.location,delta:1})}function R(b,P){h="REPLACE";let L=ju(C.location,b,P);g=v();let j=Yp(L,g),W=C.createHref(L);f.replaceState(j,"",W),d&&m&&m({action:h,location:C.location,delta:0})}function w(b){let P=u.location.origin!=="null"?u.location.origin:u.location.href,L=typeof b=="string"?b:li(b);return L=L.replace(/ $/,"%20"),He(P,`No window.location.(origin|href) available to create URL for href: ${L}`),new URL(L,P)}let C={get action(){return h},get location(){return n(u,f)},listen(b){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(qp,y),m=b,()=>{u.removeEventListener(qp,y),m=null}},createHref(b){return o(u,b)},createURL:w,encodeLocation(b){let P=w(b);return{pathname:P.pathname,search:P.search,hash:P.hash}},push:k,replace:R,go(b){return f.go(b)}};return C}function um(n,o,i="/"){return Vw(n,o,i,!1)}function Vw(n,o,i,s){let u=typeof o=="string"?io(o):o,d=Jn(u.pathname||"/",i);if(d==null)return null;let f=cm(n);Qw(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let g=r1(d);h=t1(f[m],g,s)}return h}function cm(n,o=[],i=[],s=""){let u=(d,f,h)=>{let m={relativePath:h===void 0?d.path||"":h,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};m.relativePath.startsWith("/")&&(He(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let g=An([s,m.relativePath]),v=i.concat(m);d.children&&d.children.length>0&&(He(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),cm(d.children,o,v,g)),!(d.path==null&&!d.index)&&o.push({path:g,score:Zw(g,d.index),routesMeta:v})};return n.forEach((d,f)=>{var h;if(d.path===""||!((h=d.path)!=null&&h.includes("?")))u(d,f);else for(let m of dm(d.path))u(d,f,m)}),o}function dm(n){let o=n.split("/");if(o.length===0)return[];let[i,...s]=o,u=i.endsWith("?"),d=i.replace(/\?$/,"");if(s.length===0)return u?[d,""]:[d];let f=dm(s.join("/")),h=[];return h.push(...f.map(m=>m===""?d:[d,m].join("/"))),u&&h.push(...f),h.map(m=>n.startsWith("/")&&m===""?"/":m)}function Qw(n){n.sort((o,i)=>o.score!==i.score?i.score-o.score:e1(o.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var Gw=/^:[\w-]+$/,Kw=3,qw=2,Yw=1,Xw=10,Jw=-2,Xp=n=>n==="*";function Zw(n,o){let i=n.split("/"),s=i.length;return i.some(Xp)&&(s+=Jw),o&&(s+=qw),i.filter(u=>!Xp(u)).reduce((u,d)=>u+(Gw.test(d)?Kw:d===""?Yw:Xw),s)}function e1(n,o){return n.length===o.length&&n.slice(0,-1).every((s,u)=>s===o[u])?n[n.length-1]-o[o.length-1]:0}function t1(n,o,i=!1){let{routesMeta:s}=n,u={},d="/",f=[];for(let h=0;h<s.length;++h){let m=s[h],g=h===s.length-1,v=d==="/"?o:o.slice(d.length)||"/",y=Ql({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},v),k=m.route;if(!y&&g&&i&&!s[s.length-1].route.index&&(y=Ql({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!y)return null;Object.assign(u,y.params),f.push({params:u,pathname:An([d,y.pathname]),pathnameBase:s1(An([d,y.pathnameBase])),route:k}),y.pathnameBase!=="/"&&(d=An([d,y.pathnameBase]))}return f}function Ql(n,o){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,s]=n1(n.path,n.caseSensitive,n.end),u=o.match(i);if(!u)return null;let d=u[0],f=d.replace(/(.)\/+$/,"$1"),h=u.slice(1);return{params:s.reduce((g,{paramName:v,isOptional:y},k)=>{if(v==="*"){let w=h[k]||"";f=d.slice(0,d.length-w.length).replace(/(.)\/+$/,"$1")}const R=h[k];return y&&!R?g[v]=void 0:g[v]=(R||"").replace(/%2F/g,"/"),g},{}),pathname:d,pathnameBase:f,pattern:n}}function n1(n,o=!1,i=!0){cn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],u="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),u+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?u+="\\/*$":n!==""&&n!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,o?void 0:"i"),s]}function r1(n){try{return n.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return cn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),n}}function Jn(n,o){if(o==="/")return n;if(!n.toLowerCase().startsWith(o.toLowerCase()))return null;let i=o.endsWith("/")?o.length-1:o.length,s=n.charAt(i);return s&&s!=="/"?null:n.slice(i)||"/"}function o1(n,o="/"){let{pathname:i,search:s="",hash:u=""}=typeof n=="string"?io(n):n;return{pathname:i?i.startsWith("/")?i:i1(i,o):o,search:a1(s),hash:u1(u)}}function i1(n,o){let i=o.replace(/\/+$/,"").split("/");return n.split("/").forEach(u=>{u===".."?i.length>1&&i.pop():u!=="."&&i.push(u)}),i.length>1?i.join("/"):"/"}function yu(n,o,i,s){return`Cannot include a '${n}' character in a manually specified \`to.${o}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function l1(n){return n.filter((o,i)=>i===0||o.route.path&&o.route.path.length>0)}function fm(n){let o=l1(n);return o.map((i,s)=>s===o.length-1?i.pathname:i.pathnameBase)}function pm(n,o,i,s=!1){let u;typeof n=="string"?u=io(n):(u={...n},He(!u.pathname||!u.pathname.includes("?"),yu("?","pathname","search",u)),He(!u.pathname||!u.pathname.includes("#"),yu("#","pathname","hash",u)),He(!u.search||!u.search.includes("#"),yu("#","search","hash",u)));let d=n===""||u.pathname==="",f=d?"/":u.pathname,h;if(f==null)h=i;else{let y=o.length-1;if(!s&&f.startsWith("..")){let k=f.split("/");for(;k[0]==="..";)k.shift(),y-=1;u.pathname=k.join("/")}h=y>=0?o[y]:"/"}let m=o1(u,h),g=f&&f!=="/"&&f.endsWith("/"),v=(d||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(g||v)&&(m.pathname+="/"),m}var An=n=>n.join("/").replace(/\/\/+/g,"/"),s1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),a1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,u1=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function c1(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var hm=["POST","PUT","PATCH","DELETE"];new Set(hm);var d1=["GET",...hm];new Set(d1);var lo=x.createContext(null);lo.displayName="DataRouter";var as=x.createContext(null);as.displayName="DataRouterState";var mm=x.createContext({isTransitioning:!1});mm.displayName="ViewTransition";var f1=x.createContext(new Map);f1.displayName="Fetchers";var p1=x.createContext(null);p1.displayName="Await";var pn=x.createContext(null);pn.displayName="Navigation";var ci=x.createContext(null);ci.displayName="Location";var $n=x.createContext({outlet:null,matches:[],isDataRoute:!1});$n.displayName="Route";var hc=x.createContext(null);hc.displayName="RouteError";function h1(n,{relative:o}={}){He(di(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=x.useContext(pn),{hash:u,pathname:d,search:f}=fi(n,{relative:o}),h=d;return i!=="/"&&(h=d==="/"?i:An([i,d])),s.createHref({pathname:h,search:f,hash:u})}function di(){return x.useContext(ci)!=null}function Cr(){return He(di(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(ci).location}var gm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ym(n){x.useContext(pn).static||x.useLayoutEffect(n)}function m1(){let{isDataRoute:n}=x.useContext($n);return n?$1():g1()}function g1(){He(di(),"useNavigate() may be used only in the context of a <Router> component.");let n=x.useContext(lo),{basename:o,navigator:i}=x.useContext(pn),{matches:s}=x.useContext($n),{pathname:u}=Cr(),d=JSON.stringify(fm(s)),f=x.useRef(!1);return ym(()=>{f.current=!0}),x.useCallback((m,g={})=>{if(cn(f.current,gm),!f.current)return;if(typeof m=="number"){i.go(m);return}let v=pm(m,JSON.parse(d),u,g.relative==="path");n==null&&o!=="/"&&(v.pathname=v.pathname==="/"?o:An([o,v.pathname])),(g.replace?i.replace:i.push)(v,g.state,g)},[o,i,d,u,n])}x.createContext(null);function fi(n,{relative:o}={}){let{matches:i}=x.useContext($n),{pathname:s}=Cr(),u=JSON.stringify(fm(i));return x.useMemo(()=>pm(n,JSON.parse(u),s,o==="path"),[n,u,s,o])}function y1(n,o){return vm(n,o)}function vm(n,o,i,s){var P;He(di(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=x.useContext(pn),{matches:d}=x.useContext($n),f=d[d.length-1],h=f?f.params:{},m=f?f.pathname:"/",g=f?f.pathnameBase:"/",v=f&&f.route;{let L=v&&v.path||"";xm(m,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let y=Cr(),k;if(o){let L=typeof o=="string"?io(o):o;He(g==="/"||((P=L.pathname)==null?void 0:P.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),k=L}else k=y;let R=k.pathname||"/",w=R;if(g!=="/"){let L=g.replace(/^\//,"").split("/");w="/"+R.replace(/^\//,"").split("/").slice(L.length).join("/")}let C=um(n,{pathname:w});cn(v||C!=null,`No routes matched location "${k.pathname}${k.search}${k.hash}" `),cn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=S1(C&&C.map(L=>Object.assign({},L,{params:Object.assign({},h,L.params),pathname:An([g,u.encodeLocation?u.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:An([g,u.encodeLocation?u.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),d,i,s);return o&&b?x.createElement(ci.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...k},navigationType:"POP"}},b):b}function v1(){let n=R1(),o=c1(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:d},"ErrorBoundary")," or"," ",x.createElement("code",{style:d},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},o),i?x.createElement("pre",{style:u},i):null,f)}var x1=x.createElement(v1,null),w1=class extends x.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,o){return o.location!==n.location||o.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:o.error,location:o.location,revalidation:n.revalidation||o.revalidation}}componentDidCatch(n,o){console.error("React Router caught the following error during render",n,o)}render(){return this.state.error!==void 0?x.createElement($n.Provider,{value:this.props.routeContext},x.createElement(hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function k1({routeContext:n,match:o,children:i}){let s=x.useContext(lo);return s&&s.static&&s.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=o.route.id),x.createElement($n.Provider,{value:n},i)}function S1(n,o=[],i=null,s=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(o.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let u=n,d=i==null?void 0:i.errors;if(d!=null){let m=u.findIndex(g=>g.route.id&&(d==null?void 0:d[g.route.id])!==void 0);He(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,m+1))}let f=!1,h=-1;if(i)for(let m=0;m<u.length;m++){let g=u[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=m),g.route.id){let{loaderData:v,errors:y}=i,k=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||k){f=!0,h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}return u.reduceRight((m,g,v)=>{let y,k=!1,R=null,w=null;i&&(y=d&&g.route.id?d[g.route.id]:void 0,R=g.route.errorElement||x1,f&&(h<0&&v===0?(xm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),k=!0,w=null):h===v&&(k=!0,w=g.route.hydrateFallbackElement||null)));let C=o.concat(u.slice(0,v+1)),b=()=>{let P;return y?P=R:k?P=w:g.route.Component?P=x.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=m,x.createElement(k1,{match:g,routeContext:{outlet:m,matches:C,isDataRoute:i!=null},children:P})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?x.createElement(w1,{location:i.location,revalidation:i.revalidation,component:R,error:y,children:b(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):b()},null)}function mc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function E1(n){let o=x.useContext(lo);return He(o,mc(n)),o}function b1(n){let o=x.useContext(as);return He(o,mc(n)),o}function C1(n){let o=x.useContext($n);return He(o,mc(n)),o}function gc(n){let o=C1(n),i=o.matches[o.matches.length-1];return He(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function A1(){return gc("useRouteId")}function R1(){var s;let n=x.useContext(hc),o=b1("useRouteError"),i=gc("useRouteError");return n!==void 0?n:(s=o.errors)==null?void 0:s[i]}function $1(){let{router:n}=E1("useNavigate"),o=gc("useNavigate"),i=x.useRef(!1);return ym(()=>{i.current=!0}),x.useCallback(async(u,d={})=>{cn(i.current,gm),i.current&&(typeof u=="number"?n.navigate(u):await n.navigate(u,{fromRouteId:o,...d}))},[n,o])}var Jp={};function xm(n,o,i){!o&&!Jp[n]&&(Jp[n]=!0,cn(!1,i))}x.memo(T1);function T1({routes:n,future:o,state:i}){return vm(n,void 0,i,o)}function Fu(n){He(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function P1({basename:n="/",children:o=null,location:i,navigationType:s="POP",navigator:u,static:d=!1}){He(!di(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),h=x.useMemo(()=>({basename:f,navigator:u,static:d,future:{}}),[f,u,d]);typeof i=="string"&&(i=io(i));let{pathname:m="/",search:g="",hash:v="",state:y=null,key:k="default"}=i,R=x.useMemo(()=>{let w=Jn(m,f);return w==null?null:{location:{pathname:w,search:g,hash:v,state:y,key:k},navigationType:s}},[f,m,g,v,y,k,s]);return cn(R!=null,`<Router basename="${f}"> is not able to match the URL "${m}${g}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:x.createElement(pn.Provider,{value:h},x.createElement(ci.Provider,{children:o,value:R}))}function N1({children:n,location:o}){return y1(zu(n),o)}function zu(n,o=[]){let i=[];return x.Children.forEach(n,(s,u)=>{if(!x.isValidElement(s))return;let d=[...o,u];if(s.type===x.Fragment){i.push.apply(i,zu(s.props.children,d));return}He(s.type===Fu,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),He(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=zu(s.props.children,d)),i.push(f)}),i}var _l="get",Ol="application/x-www-form-urlencoded";function us(n){return n!=null&&typeof n.tagName=="string"}function L1(n){return us(n)&&n.tagName.toLowerCase()==="button"}function I1(n){return us(n)&&n.tagName.toLowerCase()==="form"}function D1(n){return us(n)&&n.tagName.toLowerCase()==="input"}function _1(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function O1(n,o){return n.button===0&&(!o||o==="_self")&&!_1(n)}var Tl=null;function j1(){if(Tl===null)try{new FormData(document.createElement("form"),0),Tl=!1}catch{Tl=!0}return Tl}var F1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vu(n){return n!=null&&!F1.has(n)?(cn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ol}"`),null):n}function z1(n,o){let i,s,u,d,f;if(I1(n)){let h=n.getAttribute("action");s=h?Jn(h,o):null,i=n.getAttribute("method")||_l,u=vu(n.getAttribute("enctype"))||Ol,d=new FormData(n)}else if(L1(n)||D1(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||h.getAttribute("action");if(s=m?Jn(m,o):null,i=n.getAttribute("formmethod")||h.getAttribute("method")||_l,u=vu(n.getAttribute("formenctype"))||vu(h.getAttribute("enctype"))||Ol,d=new FormData(h,n),!j1()){let{name:g,type:v,value:y}=n;if(v==="image"){let k=g?`${g}.`:"";d.append(`${k}x`,"0"),d.append(`${k}y`,"0")}else g&&d.append(g,y)}}else{if(us(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=_l,s=null,u=Ol,f=n}return d&&u==="text/plain"&&(f=d,d=void 0),{action:s,method:i.toLowerCase(),encType:u,formData:d,body:f}}function yc(n,o){if(n===!1||n===null||typeof n>"u")throw new Error(o)}async function B1(n,o){if(n.id in o)return o[n.id];try{let i=await import(n.module);return o[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function M1(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function U1(n,o,i){let s=await Promise.all(n.map(async u=>{let d=o.routes[u.route.id];if(d){let f=await B1(d,i);return f.links?f.links():[]}return[]}));return Q1(s.flat(1).filter(M1).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function Zp(n,o,i,s,u,d){let f=(m,g)=>i[g]?m.route.id!==i[g].route.id:!0,h=(m,g)=>{var v;return i[g].pathname!==m.pathname||((v=i[g].route.path)==null?void 0:v.endsWith("*"))&&i[g].params["*"]!==m.params["*"]};return d==="assets"?o.filter((m,g)=>f(m,g)||h(m,g)):d==="data"?o.filter((m,g)=>{var y;let v=s.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(f(m,g)||h(m,g))return!0;if(m.route.shouldRevalidate){let k=m.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function H1(n,o){return W1(n.map(i=>{let s=o.routes[i.route.id];if(!s)return[];let u=[s.module];return s.imports&&(u=u.concat(s.imports)),u}).flat(1))}function W1(n){return[...new Set(n)]}function V1(n){let o={},i=Object.keys(n).sort();for(let s of i)o[s]=n[s];return o}function Q1(n,o){let i=new Set;return new Set(o),n.reduce((s,u)=>{let d=JSON.stringify(V1(u));return i.has(d)||(i.add(d),s.push({key:d,link:u})),s},[])}function G1(n){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return o.pathname==="/"?o.pathname="_root.data":o.pathname=`${o.pathname.replace(/\/$/,"")}.data`,o}function K1(){let n=x.useContext(lo);return yc(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function q1(){let n=x.useContext(as);return yc(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var vc=x.createContext(void 0);vc.displayName="FrameworkContext";function wm(){let n=x.useContext(vc);return yc(n,"You must render this element inside a <HydratedRouter> element"),n}function Y1(n,o){let i=x.useContext(vc),[s,u]=x.useState(!1),[d,f]=x.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:g,onMouseLeave:v,onTouchStart:y}=o,k=x.useRef(null);x.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let C=P=>{P.forEach(L=>{f(L.isIntersecting)})},b=new IntersectionObserver(C,{threshold:.5});return k.current&&b.observe(k.current),()=>{b.disconnect()}}},[n]),x.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let R=()=>{u(!0)},w=()=>{u(!1),f(!1)};return i?n!=="intent"?[d,k,{}]:[d,k,{onFocus:Zo(h,R),onBlur:Zo(m,w),onMouseEnter:Zo(g,R),onMouseLeave:Zo(v,w),onTouchStart:Zo(y,R)}]:[!1,k,{}]}function Zo(n,o){return i=>{n&&n(i),i.defaultPrevented||o(i)}}function X1({page:n,...o}){let{router:i}=K1(),s=x.useMemo(()=>um(i.routes,n,i.basename),[i.routes,n,i.basename]);return s?x.createElement(Z1,{page:n,matches:s,...o}):null}function J1(n){let{manifest:o,routeModules:i}=wm(),[s,u]=x.useState([]);return x.useEffect(()=>{let d=!1;return U1(n,o,i).then(f=>{d||u(f)}),()=>{d=!0}},[n,o,i]),s}function Z1({page:n,matches:o,...i}){let s=Cr(),{manifest:u,routeModules:d}=wm(),{loaderData:f,matches:h}=q1(),m=x.useMemo(()=>Zp(n,o,h,u,s,"data"),[n,o,h,u,s]),g=x.useMemo(()=>Zp(n,o,h,u,s,"assets"),[n,o,h,u,s]),v=x.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let R=new Set,w=!1;if(o.forEach(b=>{var L;let P=u.routes[b.route.id];!P||!P.hasLoader||(!m.some(j=>j.route.id===b.route.id)&&b.route.id in f&&((L=d[b.route.id])!=null&&L.shouldRevalidate)||P.hasClientLoader?w=!0:R.add(b.route.id))}),R.size===0)return[];let C=G1(n);return w&&R.size>0&&C.searchParams.set("_routes",o.filter(b=>R.has(b.route.id)).map(b=>b.route.id).join(",")),[C.pathname+C.search]},[f,s,u,m,o,n,d]),y=x.useMemo(()=>H1(g,u),[g,u]),k=J1(g);return x.createElement(x.Fragment,null,v.map(R=>x.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),y.map(R=>x.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),k.map(({key:R,link:w})=>x.createElement("link",{key:R,...w})))}function ek(...n){return o=>{n.forEach(i=>{typeof i=="function"?i(o):i!=null&&(i.current=o)})}}var km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{km&&(window.__reactRouterVersion="7.1.3")}catch{}function tk({basename:n,children:o,window:i}){let s=x.useRef();s.current==null&&(s.current=Uw({window:i,v5Compat:!0}));let u=s.current,[d,f]=x.useState({action:u.action,location:u.location}),h=x.useCallback(m=>{x.startTransition(()=>f(m))},[f]);return x.useLayoutEffect(()=>u.listen(h),[u,h]),x.createElement(P1,{basename:n,children:o,location:d.location,navigationType:d.action,navigator:u})}var Sm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xc=x.forwardRef(function({onClick:o,discover:i="render",prefetch:s="none",relative:u,reloadDocument:d,replace:f,state:h,target:m,to:g,preventScrollReset:v,viewTransition:y,...k},R){let{basename:w}=x.useContext(pn),C=typeof g=="string"&&Sm.test(g),b,P=!1;if(typeof g=="string"&&C&&(b=g,km))try{let me=new URL(window.location.href),Ee=g.startsWith("//")?new URL(me.protocol+g):new URL(g),Ie=Jn(Ee.pathname,w);Ee.origin===me.origin&&Ie!=null?g=Ie+Ee.search+Ee.hash:P=!0}catch{cn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=h1(g,{relative:u}),[j,W,Q]=Y1(s,k),G=ik(g,{replace:f,state:h,target:m,preventScrollReset:v,relative:u,viewTransition:y});function q(me){o&&o(me),me.defaultPrevented||G(me)}let fe=x.createElement("a",{...k,...Q,href:b||L,onClick:P||d?o:q,ref:ek(R,W),target:m,"data-discover":!C&&i==="render"?"true":void 0});return j&&!C?x.createElement(x.Fragment,null,fe,x.createElement(X1,{page:L})):fe});xc.displayName="Link";var nk=x.forwardRef(function({"aria-current":o="page",caseSensitive:i=!1,className:s="",end:u=!1,style:d,to:f,viewTransition:h,children:m,...g},v){let y=fi(f,{relative:g.relative}),k=Cr(),R=x.useContext(as),{navigator:w,basename:C}=x.useContext(pn),b=R!=null&&ck(y)&&h===!0,P=w.encodeLocation?w.encodeLocation(y).pathname:y.pathname,L=k.pathname,j=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(L=L.toLowerCase(),j=j?j.toLowerCase():null,P=P.toLowerCase()),j&&C&&(j=Jn(j,C)||j);const W=P!=="/"&&P.endsWith("/")?P.length-1:P.length;let Q=L===P||!u&&L.startsWith(P)&&L.charAt(W)==="/",G=j!=null&&(j===P||!u&&j.startsWith(P)&&j.charAt(P.length)==="/"),q={isActive:Q,isPending:G,isTransitioning:b},fe=Q?o:void 0,me;typeof s=="function"?me=s(q):me=[s,Q?"active":null,G?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Ee=typeof d=="function"?d(q):d;return x.createElement(xc,{...g,"aria-current":fe,className:me,ref:v,style:Ee,to:f,viewTransition:h},typeof m=="function"?m(q):m)});nk.displayName="NavLink";var rk=x.forwardRef(({discover:n="render",fetcherKey:o,navigate:i,reloadDocument:s,replace:u,state:d,method:f=_l,action:h,onSubmit:m,relative:g,preventScrollReset:v,viewTransition:y,...k},R)=>{let w=ak(),C=uk(h,{relative:g}),b=f.toLowerCase()==="get"?"get":"post",P=typeof h=="string"&&Sm.test(h),L=j=>{if(m&&m(j),j.defaultPrevented)return;j.preventDefault();let W=j.nativeEvent.submitter,Q=(W==null?void 0:W.getAttribute("formmethod"))||f;w(W||j.currentTarget,{fetcherKey:o,method:Q,navigate:i,replace:u,state:d,relative:g,preventScrollReset:v,viewTransition:y})};return x.createElement("form",{ref:R,method:b,action:C,onSubmit:s?m:L,...k,"data-discover":!P&&n==="render"?"true":void 0})});rk.displayName="Form";function ok(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Em(n){let o=x.useContext(lo);return He(o,ok(n)),o}function ik(n,{target:o,replace:i,state:s,preventScrollReset:u,relative:d,viewTransition:f}={}){let h=m1(),m=Cr(),g=fi(n,{relative:d});return x.useCallback(v=>{if(O1(v,o)){v.preventDefault();let y=i!==void 0?i:li(m)===li(g);h(n,{replace:y,state:s,preventScrollReset:u,relative:d,viewTransition:f})}},[m,h,g,i,s,o,n,u,d,f])}var lk=0,sk=()=>`__${String(++lk)}__`;function ak(){let{router:n}=Em("useSubmit"),{basename:o}=x.useContext(pn),i=A1();return x.useCallback(async(s,u={})=>{let{action:d,method:f,encType:h,formData:m,body:g}=z1(s,o);if(u.navigate===!1){let v=u.fetcherKey||sk();await n.fetch(v,i,u.action||d,{preventScrollReset:u.preventScrollReset,formData:m,body:g,formMethod:u.method||f,formEncType:u.encType||h,flushSync:u.flushSync})}else await n.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:m,body:g,formMethod:u.method||f,formEncType:u.encType||h,replace:u.replace,state:u.state,fromRouteId:i,flushSync:u.flushSync,viewTransition:u.viewTransition})},[n,o,i])}function uk(n,{relative:o}={}){let{basename:i}=x.useContext(pn),s=x.useContext($n);He(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),d={...fi(n||".",{relative:o})},f=Cr();if(n==null){d.search=f.search;let h=new URLSearchParams(d.search),m=h.getAll("index");if(m.some(v=>v==="")){h.delete("index"),m.filter(y=>y).forEach(y=>h.append("index",y));let v=h.toString();d.search=v?`?${v}`:""}}return(!n||n===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(d.pathname=d.pathname==="/"?i:An([i,d.pathname])),li(d)}function ck(n,o={}){let i=x.useContext(mm);He(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Em("useViewTransitionState"),u=fi(n,{relative:o.relative});if(!i.isTransitioning)return!1;let d=Jn(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Jn(i.nextLocation.pathname,s)||i.nextLocation.pathname;return Ql(u.pathname,f)!=null||Ql(u.pathname,d)!=null}new TextEncoder;const dk="/clouds.jpg",bm="/w95.png",fk=()=>{const n=U.div`
        text-align: center;
    `,o=U.div`
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(${dk});
        background-size: cover;
        background-position: center;
        border: 4px solid #000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `;return E.jsx(o,{children:E.jsxs(n,{children:[E.jsx("div",{children:E.jsx("img",{src:bm,width:200,className:"logo"})}),E.jsx("h1",{children:"VortexOS"}),E.jsx("div",{className:"card",children:E.jsx(xc,{to:"/vortex",children:E.jsx(Be,{primary:!0,children:"Are you ready?"})})}),E.jsx("p",{className:"read-the-docs",children:"By Serious Sam"})]})})},pk="/trash.svg",hk="/my-computer.png",mk="/doom.png",Cm=()=>E.jsxs(E.Fragment,{children:[E.jsxs(un,{children:[E.jsx(Be,{variant:"menu",size:"sm",children:"File"}),E.jsx(Be,{variant:"menu",size:"sm",children:"Edit"}),E.jsx(Be,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),E.jsx(fn,{children:E.jsx("iframe",{width:"680",height:"400",frameBorder:"0",src:"https://dos.zone/doom-ii-oct-10-1994",allowFullScreen:!0})}),E.jsx(Rn,{variant:"well",className:"footer",children:"TEST"})]}),Am=()=>E.jsxs(E.Fragment,{children:[E.jsxs(un,{children:[E.jsx(Be,{variant:"menu",size:"sm",children:"File"}),E.jsx(Be,{variant:"menu",size:"sm",children:"Edit"}),E.jsx(Be,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),E.jsx(fn,{children:"My Computer"}),E.jsx(Rn,{variant:"well",className:"footer",children:"TEST"})]}),Rm=()=>E.jsxs(E.Fragment,{children:[E.jsxs(un,{children:[E.jsx(Be,{variant:"menu",size:"sm",children:"File"}),E.jsx(Be,{variant:"menu",size:"sm",children:"Edit"}),E.jsx(Be,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),E.jsx(fn,{children:"Recycle Bin"}),E.jsx(Rn,{variant:"well",className:"footer",children:"TEST"})]}),$m="/error.png",gk="/trust.png";function Tm(n,o){return function(){return n.apply(o,arguments)}}const{toString:yk}=Object.prototype,{getPrototypeOf:wc}=Object,cs=(n=>o=>{const i=yk.call(o);return n[i]||(n[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),Xt=n=>(n=n.toLowerCase(),o=>cs(o)===n),ds=n=>o=>typeof o===n,{isArray:so}=Array,si=ds("undefined");function vk(n){return n!==null&&!si(n)&&n.constructor!==null&&!si(n.constructor)&&Nt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const Pm=Xt("ArrayBuffer");function xk(n){let o;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?o=ArrayBuffer.isView(n):o=n&&n.buffer&&Pm(n.buffer),o}const wk=ds("string"),Nt=ds("function"),Nm=ds("number"),fs=n=>n!==null&&typeof n=="object",kk=n=>n===!0||n===!1,jl=n=>{if(cs(n)!=="object")return!1;const o=wc(n);return(o===null||o===Object.prototype||Object.getPrototypeOf(o)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Sk=Xt("Date"),Ek=Xt("File"),bk=Xt("Blob"),Ck=Xt("FileList"),Ak=n=>fs(n)&&Nt(n.pipe),Rk=n=>{let o;return n&&(typeof FormData=="function"&&n instanceof FormData||Nt(n.append)&&((o=cs(n))==="formdata"||o==="object"&&Nt(n.toString)&&n.toString()==="[object FormData]"))},$k=Xt("URLSearchParams"),[Tk,Pk,Nk,Lk]=["ReadableStream","Request","Response","Headers"].map(Xt),Ik=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function pi(n,o,{allOwnKeys:i=!1}={}){if(n===null||typeof n>"u")return;let s,u;if(typeof n!="object"&&(n=[n]),so(n))for(s=0,u=n.length;s<u;s++)o.call(null,n[s],s,n);else{const d=i?Object.getOwnPropertyNames(n):Object.keys(n),f=d.length;let h;for(s=0;s<f;s++)h=d[s],o.call(null,n[h],h,n)}}function Lm(n,o){o=o.toLowerCase();const i=Object.keys(n);let s=i.length,u;for(;s-- >0;)if(u=i[s],o===u.toLowerCase())return u;return null}const mr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Im=n=>!si(n)&&n!==mr;function Bu(){const{caseless:n}=Im(this)&&this||{},o={},i=(s,u)=>{const d=n&&Lm(o,u)||u;jl(o[d])&&jl(s)?o[d]=Bu(o[d],s):jl(s)?o[d]=Bu({},s):so(s)?o[d]=s.slice():o[d]=s};for(let s=0,u=arguments.length;s<u;s++)arguments[s]&&pi(arguments[s],i);return o}const Dk=(n,o,i,{allOwnKeys:s}={})=>(pi(o,(u,d)=>{i&&Nt(u)?n[d]=Tm(u,i):n[d]=u},{allOwnKeys:s}),n),_k=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),Ok=(n,o,i,s)=>{n.prototype=Object.create(o.prototype,s),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:o.prototype}),i&&Object.assign(n.prototype,i)},jk=(n,o,i,s)=>{let u,d,f;const h={};if(o=o||{},n==null)return o;do{for(u=Object.getOwnPropertyNames(n),d=u.length;d-- >0;)f=u[d],(!s||s(f,n,o))&&!h[f]&&(o[f]=n[f],h[f]=!0);n=i!==!1&&wc(n)}while(n&&(!i||i(n,o))&&n!==Object.prototype);return o},Fk=(n,o,i)=>{n=String(n),(i===void 0||i>n.length)&&(i=n.length),i-=o.length;const s=n.indexOf(o,i);return s!==-1&&s===i},zk=n=>{if(!n)return null;if(so(n))return n;let o=n.length;if(!Nm(o))return null;const i=new Array(o);for(;o-- >0;)i[o]=n[o];return i},Bk=(n=>o=>n&&o instanceof n)(typeof Uint8Array<"u"&&wc(Uint8Array)),Mk=(n,o)=>{const s=(n&&n[Symbol.iterator]).call(n);let u;for(;(u=s.next())&&!u.done;){const d=u.value;o.call(n,d[0],d[1])}},Uk=(n,o)=>{let i;const s=[];for(;(i=n.exec(o))!==null;)s.push(i);return s},Hk=Xt("HTMLFormElement"),Wk=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,s,u){return s.toUpperCase()+u}),eh=(({hasOwnProperty:n})=>(o,i)=>n.call(o,i))(Object.prototype),Vk=Xt("RegExp"),Dm=(n,o)=>{const i=Object.getOwnPropertyDescriptors(n),s={};pi(i,(u,d)=>{let f;(f=o(u,d,n))!==!1&&(s[d]=f||u)}),Object.defineProperties(n,s)},Qk=n=>{Dm(n,(o,i)=>{if(Nt(n)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const s=n[i];if(Nt(s)){if(o.enumerable=!1,"writable"in o){o.writable=!1;return}o.set||(o.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},Gk=(n,o)=>{const i={},s=u=>{u.forEach(d=>{i[d]=!0})};return so(n)?s(n):s(String(n).split(o)),i},Kk=()=>{},qk=(n,o)=>n!=null&&Number.isFinite(n=+n)?n:o,xu="abcdefghijklmnopqrstuvwxyz",th="0123456789",_m={DIGIT:th,ALPHA:xu,ALPHA_DIGIT:xu+xu.toUpperCase()+th},Yk=(n=16,o=_m.ALPHA_DIGIT)=>{let i="";const{length:s}=o;for(;n--;)i+=o[Math.random()*s|0];return i};function Xk(n){return!!(n&&Nt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const Jk=n=>{const o=new Array(10),i=(s,u)=>{if(fs(s)){if(o.indexOf(s)>=0)return;if(!("toJSON"in s)){o[u]=s;const d=so(s)?[]:{};return pi(s,(f,h)=>{const m=i(f,u+1);!si(m)&&(d[h]=m)}),o[u]=void 0,d}}return s};return i(n,0)},Zk=Xt("AsyncFunction"),eS=n=>n&&(fs(n)||Nt(n))&&Nt(n.then)&&Nt(n.catch),Om=((n,o)=>n?setImmediate:o?((i,s)=>(mr.addEventListener("message",({source:u,data:d})=>{u===mr&&d===i&&s.length&&s.shift()()},!1),u=>{s.push(u),mr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Nt(mr.postMessage)),tS=typeof queueMicrotask<"u"?queueMicrotask.bind(mr):typeof process<"u"&&process.nextTick||Om,O={isArray:so,isArrayBuffer:Pm,isBuffer:vk,isFormData:Rk,isArrayBufferView:xk,isString:wk,isNumber:Nm,isBoolean:kk,isObject:fs,isPlainObject:jl,isReadableStream:Tk,isRequest:Pk,isResponse:Nk,isHeaders:Lk,isUndefined:si,isDate:Sk,isFile:Ek,isBlob:bk,isRegExp:Vk,isFunction:Nt,isStream:Ak,isURLSearchParams:$k,isTypedArray:Bk,isFileList:Ck,forEach:pi,merge:Bu,extend:Dk,trim:Ik,stripBOM:_k,inherits:Ok,toFlatObject:jk,kindOf:cs,kindOfTest:Xt,endsWith:Fk,toArray:zk,forEachEntry:Mk,matchAll:Uk,isHTMLForm:Hk,hasOwnProperty:eh,hasOwnProp:eh,reduceDescriptors:Dm,freezeMethods:Qk,toObjectSet:Gk,toCamelCase:Wk,noop:Kk,toFiniteNumber:qk,findKey:Lm,global:mr,isContextDefined:Im,ALPHABET:_m,generateString:Yk,isSpecCompliantForm:Xk,toJSONObject:Jk,isAsyncFn:Zk,isThenable:eS,setImmediate:Om,asap:tS};function ye(n,o,i,s,u){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",o&&(this.code=o),i&&(this.config=i),s&&(this.request=s),u&&(this.response=u,this.status=u.status?u.status:null)}O.inherits(ye,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const jm=ye.prototype,Fm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{Fm[n]={value:n}});Object.defineProperties(ye,Fm);Object.defineProperty(jm,"isAxiosError",{value:!0});ye.from=(n,o,i,s,u,d)=>{const f=Object.create(jm);return O.toFlatObject(n,f,function(m){return m!==Error.prototype},h=>h!=="isAxiosError"),ye.call(f,n.message,o,i,s,u),f.cause=n,f.name=n.name,d&&Object.assign(f,d),f};const nS=null;function Mu(n){return O.isPlainObject(n)||O.isArray(n)}function zm(n){return O.endsWith(n,"[]")?n.slice(0,-2):n}function nh(n,o,i){return n?n.concat(o).map(function(u,d){return u=zm(u),!i&&d?"["+u+"]":u}).join(i?".":""):o}function rS(n){return O.isArray(n)&&!n.some(Mu)}const oS=O.toFlatObject(O,{},null,function(o){return/^is[A-Z]/.test(o)});function ps(n,o,i){if(!O.isObject(n))throw new TypeError("target must be an object");o=o||new FormData,i=O.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,b){return!O.isUndefined(b[C])});const s=i.metaTokens,u=i.visitor||v,d=i.dots,f=i.indexes,m=(i.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(o);if(!O.isFunction(u))throw new TypeError("visitor must be a function");function g(w){if(w===null)return"";if(O.isDate(w))return w.toISOString();if(!m&&O.isBlob(w))throw new ye("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(w)||O.isTypedArray(w)?m&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function v(w,C,b){let P=w;if(w&&!b&&typeof w=="object"){if(O.endsWith(C,"{}"))C=s?C:C.slice(0,-2),w=JSON.stringify(w);else if(O.isArray(w)&&rS(w)||(O.isFileList(w)||O.endsWith(C,"[]"))&&(P=O.toArray(w)))return C=zm(C),P.forEach(function(j,W){!(O.isUndefined(j)||j===null)&&o.append(f===!0?nh([C],W,d):f===null?C:C+"[]",g(j))}),!1}return Mu(w)?!0:(o.append(nh(b,C,d),g(w)),!1)}const y=[],k=Object.assign(oS,{defaultVisitor:v,convertValue:g,isVisitable:Mu});function R(w,C){if(!O.isUndefined(w)){if(y.indexOf(w)!==-1)throw Error("Circular reference detected in "+C.join("."));y.push(w),O.forEach(w,function(P,L){(!(O.isUndefined(P)||P===null)&&u.call(o,P,O.isString(L)?L.trim():L,C,k))===!0&&R(P,C?C.concat(L):[L])}),y.pop()}}if(!O.isObject(n))throw new TypeError("data must be an object");return R(n),o}function rh(n){const o={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(s){return o[s]})}function kc(n,o){this._pairs=[],n&&ps(n,this,o)}const Bm=kc.prototype;Bm.append=function(o,i){this._pairs.push([o,i])};Bm.toString=function(o){const i=o?function(s){return o.call(this,s,rh)}:rh;return this._pairs.map(function(u){return i(u[0])+"="+i(u[1])},"").join("&")};function iS(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Mm(n,o,i){if(!o)return n;const s=i&&i.encode||iS;O.isFunction(i)&&(i={serialize:i});const u=i&&i.serialize;let d;if(u?d=u(o,i):d=O.isURLSearchParams(o)?o.toString():new kc(o,i).toString(s),d){const f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+d}return n}class oh{constructor(){this.handlers=[]}use(o,i,s){return this.handlers.push({fulfilled:o,rejected:i,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(o){this.handlers[o]&&(this.handlers[o]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(o){O.forEach(this.handlers,function(s){s!==null&&o(s)})}}const Um={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lS=typeof URLSearchParams<"u"?URLSearchParams:kc,sS=typeof FormData<"u"?FormData:null,aS=typeof Blob<"u"?Blob:null,uS={isBrowser:!0,classes:{URLSearchParams:lS,FormData:sS,Blob:aS},protocols:["http","https","file","blob","url","data"]},Sc=typeof window<"u"&&typeof document<"u",Uu=typeof navigator=="object"&&navigator||void 0,cS=Sc&&(!Uu||["ReactNative","NativeScript","NS"].indexOf(Uu.product)<0),dS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",fS=Sc&&window.location.href||"http://localhost",pS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sc,hasStandardBrowserEnv:cS,hasStandardBrowserWebWorkerEnv:dS,navigator:Uu,origin:fS},Symbol.toStringTag,{value:"Module"})),ht={...pS,...uS};function hS(n,o){return ps(n,new ht.classes.URLSearchParams,Object.assign({visitor:function(i,s,u,d){return ht.isNode&&O.isBuffer(i)?(this.append(s,i.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},o))}function mS(n){return O.matchAll(/\w+|\[(\w*)]/g,n).map(o=>o[0]==="[]"?"":o[1]||o[0])}function gS(n){const o={},i=Object.keys(n);let s;const u=i.length;let d;for(s=0;s<u;s++)d=i[s],o[d]=n[d];return o}function Hm(n){function o(i,s,u,d){let f=i[d++];if(f==="__proto__")return!0;const h=Number.isFinite(+f),m=d>=i.length;return f=!f&&O.isArray(u)?u.length:f,m?(O.hasOwnProp(u,f)?u[f]=[u[f],s]:u[f]=s,!h):((!u[f]||!O.isObject(u[f]))&&(u[f]=[]),o(i,s,u[f],d)&&O.isArray(u[f])&&(u[f]=gS(u[f])),!h)}if(O.isFormData(n)&&O.isFunction(n.entries)){const i={};return O.forEachEntry(n,(s,u)=>{o(mS(s),u,i,0)}),i}return null}function yS(n,o,i){if(O.isString(n))try{return(o||JSON.parse)(n),O.trim(n)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(n)}const hi={transitional:Um,adapter:["xhr","http","fetch"],transformRequest:[function(o,i){const s=i.getContentType()||"",u=s.indexOf("application/json")>-1,d=O.isObject(o);if(d&&O.isHTMLForm(o)&&(o=new FormData(o)),O.isFormData(o))return u?JSON.stringify(Hm(o)):o;if(O.isArrayBuffer(o)||O.isBuffer(o)||O.isStream(o)||O.isFile(o)||O.isBlob(o)||O.isReadableStream(o))return o;if(O.isArrayBufferView(o))return o.buffer;if(O.isURLSearchParams(o))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),o.toString();let h;if(d){if(s.indexOf("application/x-www-form-urlencoded")>-1)return hS(o,this.formSerializer).toString();if((h=O.isFileList(o))||s.indexOf("multipart/form-data")>-1){const m=this.env&&this.env.FormData;return ps(h?{"files[]":o}:o,m&&new m,this.formSerializer)}}return d||u?(i.setContentType("application/json",!1),yS(o)):o}],transformResponse:[function(o){const i=this.transitional||hi.transitional,s=i&&i.forcedJSONParsing,u=this.responseType==="json";if(O.isResponse(o)||O.isReadableStream(o))return o;if(o&&O.isString(o)&&(s&&!this.responseType||u)){const f=!(i&&i.silentJSONParsing)&&u;try{return JSON.parse(o)}catch(h){if(f)throw h.name==="SyntaxError"?ye.from(h,ye.ERR_BAD_RESPONSE,this,null,this.response):h}}return o}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ht.classes.FormData,Blob:ht.classes.Blob},validateStatus:function(o){return o>=200&&o<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],n=>{hi.headers[n]={}});const vS=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),xS=n=>{const o={};let i,s,u;return n&&n.split(`
`).forEach(function(f){u=f.indexOf(":"),i=f.substring(0,u).trim().toLowerCase(),s=f.substring(u+1).trim(),!(!i||o[i]&&vS[i])&&(i==="set-cookie"?o[i]?o[i].push(s):o[i]=[s]:o[i]=o[i]?o[i]+", "+s:s)}),o},ih=Symbol("internals");function ei(n){return n&&String(n).trim().toLowerCase()}function Fl(n){return n===!1||n==null?n:O.isArray(n)?n.map(Fl):String(n)}function wS(n){const o=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=i.exec(n);)o[s[1]]=s[2];return o}const kS=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function wu(n,o,i,s,u){if(O.isFunction(s))return s.call(this,o,i);if(u&&(o=i),!!O.isString(o)){if(O.isString(s))return o.indexOf(s)!==-1;if(O.isRegExp(s))return s.test(o)}}function SS(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(o,i,s)=>i.toUpperCase()+s)}function ES(n,o){const i=O.toCamelCase(" "+o);["get","set","has"].forEach(s=>{Object.defineProperty(n,s+i,{value:function(u,d,f){return this[s].call(this,o,u,d,f)},configurable:!0})})}class bt{constructor(o){o&&this.set(o)}set(o,i,s){const u=this;function d(h,m,g){const v=ei(m);if(!v)throw new Error("header name must be a non-empty string");const y=O.findKey(u,v);(!y||u[y]===void 0||g===!0||g===void 0&&u[y]!==!1)&&(u[y||m]=Fl(h))}const f=(h,m)=>O.forEach(h,(g,v)=>d(g,v,m));if(O.isPlainObject(o)||o instanceof this.constructor)f(o,i);else if(O.isString(o)&&(o=o.trim())&&!kS(o))f(xS(o),i);else if(O.isHeaders(o))for(const[h,m]of o.entries())d(m,h,s);else o!=null&&d(i,o,s);return this}get(o,i){if(o=ei(o),o){const s=O.findKey(this,o);if(s){const u=this[s];if(!i)return u;if(i===!0)return wS(u);if(O.isFunction(i))return i.call(this,u,s);if(O.isRegExp(i))return i.exec(u);throw new TypeError("parser must be boolean|regexp|function")}}}has(o,i){if(o=ei(o),o){const s=O.findKey(this,o);return!!(s&&this[s]!==void 0&&(!i||wu(this,this[s],s,i)))}return!1}delete(o,i){const s=this;let u=!1;function d(f){if(f=ei(f),f){const h=O.findKey(s,f);h&&(!i||wu(s,s[h],h,i))&&(delete s[h],u=!0)}}return O.isArray(o)?o.forEach(d):d(o),u}clear(o){const i=Object.keys(this);let s=i.length,u=!1;for(;s--;){const d=i[s];(!o||wu(this,this[d],d,o,!0))&&(delete this[d],u=!0)}return u}normalize(o){const i=this,s={};return O.forEach(this,(u,d)=>{const f=O.findKey(s,d);if(f){i[f]=Fl(u),delete i[d];return}const h=o?SS(d):String(d).trim();h!==d&&delete i[d],i[h]=Fl(u),s[h]=!0}),this}concat(...o){return this.constructor.concat(this,...o)}toJSON(o){const i=Object.create(null);return O.forEach(this,(s,u)=>{s!=null&&s!==!1&&(i[u]=o&&O.isArray(s)?s.join(", "):s)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([o,i])=>o+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(o){return o instanceof this?o:new this(o)}static concat(o,...i){const s=new this(o);return i.forEach(u=>s.set(u)),s}static accessor(o){const s=(this[ih]=this[ih]={accessors:{}}).accessors,u=this.prototype;function d(f){const h=ei(f);s[h]||(ES(u,f),s[h]=!0)}return O.isArray(o)?o.forEach(d):d(o),this}}bt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(bt.prototype,({value:n},o)=>{let i=o[0].toUpperCase()+o.slice(1);return{get:()=>n,set(s){this[i]=s}}});O.freezeMethods(bt);function ku(n,o){const i=this||hi,s=o||i,u=bt.from(s.headers);let d=s.data;return O.forEach(n,function(h){d=h.call(i,d,u.normalize(),o?o.status:void 0)}),u.normalize(),d}function Wm(n){return!!(n&&n.__CANCEL__)}function ao(n,o,i){ye.call(this,n??"canceled",ye.ERR_CANCELED,o,i),this.name="CanceledError"}O.inherits(ao,ye,{__CANCEL__:!0});function Vm(n,o,i){const s=i.config.validateStatus;!i.status||!s||s(i.status)?n(i):o(new ye("Request failed with status code "+i.status,[ye.ERR_BAD_REQUEST,ye.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function bS(n){const o=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return o&&o[1]||""}function CS(n,o){n=n||10;const i=new Array(n),s=new Array(n);let u=0,d=0,f;return o=o!==void 0?o:1e3,function(m){const g=Date.now(),v=s[d];f||(f=g),i[u]=m,s[u]=g;let y=d,k=0;for(;y!==u;)k+=i[y++],y=y%n;if(u=(u+1)%n,u===d&&(d=(d+1)%n),g-f<o)return;const R=v&&g-v;return R?Math.round(k*1e3/R):void 0}}function AS(n,o){let i=0,s=1e3/o,u,d;const f=(g,v=Date.now())=>{i=v,u=null,d&&(clearTimeout(d),d=null),n.apply(null,g)};return[(...g)=>{const v=Date.now(),y=v-i;y>=s?f(g,v):(u=g,d||(d=setTimeout(()=>{d=null,f(u)},s-y)))},()=>u&&f(u)]}const Gl=(n,o,i=3)=>{let s=0;const u=CS(50,250);return AS(d=>{const f=d.loaded,h=d.lengthComputable?d.total:void 0,m=f-s,g=u(m),v=f<=h;s=f;const y={loaded:f,total:h,progress:h?f/h:void 0,bytes:m,rate:g||void 0,estimated:g&&h&&v?(h-f)/g:void 0,event:d,lengthComputable:h!=null,[o?"download":"upload"]:!0};n(y)},i)},lh=(n,o)=>{const i=n!=null;return[s=>o[0]({lengthComputable:i,total:n,loaded:s}),o[1]]},sh=n=>(...o)=>O.asap(()=>n(...o)),RS=ht.hasStandardBrowserEnv?((n,o)=>i=>(i=new URL(i,ht.origin),n.protocol===i.protocol&&n.host===i.host&&(o||n.port===i.port)))(new URL(ht.origin),ht.navigator&&/(msie|trident)/i.test(ht.navigator.userAgent)):()=>!0,$S=ht.hasStandardBrowserEnv?{write(n,o,i,s,u,d){const f=[n+"="+encodeURIComponent(o)];O.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),O.isString(s)&&f.push("path="+s),O.isString(u)&&f.push("domain="+u),d===!0&&f.push("secure"),document.cookie=f.join("; ")},read(n){const o=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function TS(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function PS(n,o){return o?n.replace(/\/?\/$/,"")+"/"+o.replace(/^\/+/,""):n}function Qm(n,o){return n&&!TS(o)?PS(n,o):o}const ah=n=>n instanceof bt?{...n}:n;function Sr(n,o){o=o||{};const i={};function s(g,v,y,k){return O.isPlainObject(g)&&O.isPlainObject(v)?O.merge.call({caseless:k},g,v):O.isPlainObject(v)?O.merge({},v):O.isArray(v)?v.slice():v}function u(g,v,y,k){if(O.isUndefined(v)){if(!O.isUndefined(g))return s(void 0,g,y,k)}else return s(g,v,y,k)}function d(g,v){if(!O.isUndefined(v))return s(void 0,v)}function f(g,v){if(O.isUndefined(v)){if(!O.isUndefined(g))return s(void 0,g)}else return s(void 0,v)}function h(g,v,y){if(y in o)return s(g,v);if(y in n)return s(void 0,g)}const m={url:d,method:d,data:d,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:h,headers:(g,v,y)=>u(ah(g),ah(v),y,!0)};return O.forEach(Object.keys(Object.assign({},n,o)),function(v){const y=m[v]||u,k=y(n[v],o[v],v);O.isUndefined(k)&&y!==h||(i[v]=k)}),i}const Gm=n=>{const o=Sr({},n);let{data:i,withXSRFToken:s,xsrfHeaderName:u,xsrfCookieName:d,headers:f,auth:h}=o;o.headers=f=bt.from(f),o.url=Mm(Qm(o.baseURL,o.url),n.params,n.paramsSerializer),h&&f.set("Authorization","Basic "+btoa((h.username||"")+":"+(h.password?unescape(encodeURIComponent(h.password)):"")));let m;if(O.isFormData(i)){if(ht.hasStandardBrowserEnv||ht.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((m=f.getContentType())!==!1){const[g,...v]=m?m.split(";").map(y=>y.trim()).filter(Boolean):[];f.setContentType([g||"multipart/form-data",...v].join("; "))}}if(ht.hasStandardBrowserEnv&&(s&&O.isFunction(s)&&(s=s(o)),s||s!==!1&&RS(o.url))){const g=u&&d&&$S.read(d);g&&f.set(u,g)}return o},NS=typeof XMLHttpRequest<"u",LS=NS&&function(n){return new Promise(function(i,s){const u=Gm(n);let d=u.data;const f=bt.from(u.headers).normalize();let{responseType:h,onUploadProgress:m,onDownloadProgress:g}=u,v,y,k,R,w;function C(){R&&R(),w&&w(),u.cancelToken&&u.cancelToken.unsubscribe(v),u.signal&&u.signal.removeEventListener("abort",v)}let b=new XMLHttpRequest;b.open(u.method.toUpperCase(),u.url,!0),b.timeout=u.timeout;function P(){if(!b)return;const j=bt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),Q={data:!h||h==="text"||h==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:j,config:n,request:b};Vm(function(q){i(q),C()},function(q){s(q),C()},Q),b=null}"onloadend"in b?b.onloadend=P:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(P)},b.onabort=function(){b&&(s(new ye("Request aborted",ye.ECONNABORTED,n,b)),b=null)},b.onerror=function(){s(new ye("Network Error",ye.ERR_NETWORK,n,b)),b=null},b.ontimeout=function(){let W=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded";const Q=u.transitional||Um;u.timeoutErrorMessage&&(W=u.timeoutErrorMessage),s(new ye(W,Q.clarifyTimeoutError?ye.ETIMEDOUT:ye.ECONNABORTED,n,b)),b=null},d===void 0&&f.setContentType(null),"setRequestHeader"in b&&O.forEach(f.toJSON(),function(W,Q){b.setRequestHeader(Q,W)}),O.isUndefined(u.withCredentials)||(b.withCredentials=!!u.withCredentials),h&&h!=="json"&&(b.responseType=u.responseType),g&&([k,w]=Gl(g,!0),b.addEventListener("progress",k)),m&&b.upload&&([y,R]=Gl(m),b.upload.addEventListener("progress",y),b.upload.addEventListener("loadend",R)),(u.cancelToken||u.signal)&&(v=j=>{b&&(s(!j||j.type?new ao(null,n,b):j),b.abort(),b=null)},u.cancelToken&&u.cancelToken.subscribe(v),u.signal&&(u.signal.aborted?v():u.signal.addEventListener("abort",v)));const L=bS(u.url);if(L&&ht.protocols.indexOf(L)===-1){s(new ye("Unsupported protocol "+L+":",ye.ERR_BAD_REQUEST,n));return}b.send(d||null)})},IS=(n,o)=>{const{length:i}=n=n?n.filter(Boolean):[];if(o||i){let s=new AbortController,u;const d=function(g){if(!u){u=!0,h();const v=g instanceof Error?g:this.reason;s.abort(v instanceof ye?v:new ao(v instanceof Error?v.message:v))}};let f=o&&setTimeout(()=>{f=null,d(new ye(`timeout ${o} of ms exceeded`,ye.ETIMEDOUT))},o);const h=()=>{n&&(f&&clearTimeout(f),f=null,n.forEach(g=>{g.unsubscribe?g.unsubscribe(d):g.removeEventListener("abort",d)}),n=null)};n.forEach(g=>g.addEventListener("abort",d));const{signal:m}=s;return m.unsubscribe=()=>O.asap(h),m}},DS=function*(n,o){let i=n.byteLength;if(i<o){yield n;return}let s=0,u;for(;s<i;)u=s+o,yield n.slice(s,u),s=u},_S=async function*(n,o){for await(const i of OS(n))yield*DS(i,o)},OS=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const o=n.getReader();try{for(;;){const{done:i,value:s}=await o.read();if(i)break;yield s}}finally{await o.cancel()}},uh=(n,o,i,s)=>{const u=_S(n,o);let d=0,f,h=m=>{f||(f=!0,s&&s(m))};return new ReadableStream({async pull(m){try{const{done:g,value:v}=await u.next();if(g){h(),m.close();return}let y=v.byteLength;if(i){let k=d+=y;i(k)}m.enqueue(new Uint8Array(v))}catch(g){throw h(g),g}},cancel(m){return h(m),u.return()}},{highWaterMark:2})},hs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Km=hs&&typeof ReadableStream=="function",jS=hs&&(typeof TextEncoder=="function"?(n=>o=>n.encode(o))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),qm=(n,...o)=>{try{return!!n(...o)}catch{return!1}},FS=Km&&qm(()=>{let n=!1;const o=new Request(ht.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!o}),ch=64*1024,Hu=Km&&qm(()=>O.isReadableStream(new Response("").body)),Kl={stream:Hu&&(n=>n.body)};hs&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(o=>{!Kl[o]&&(Kl[o]=O.isFunction(n[o])?i=>i[o]():(i,s)=>{throw new ye(`Response type '${o}' is not supported`,ye.ERR_NOT_SUPPORT,s)})})})(new Response);const zS=async n=>{if(n==null)return 0;if(O.isBlob(n))return n.size;if(O.isSpecCompliantForm(n))return(await new Request(ht.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(O.isArrayBufferView(n)||O.isArrayBuffer(n))return n.byteLength;if(O.isURLSearchParams(n)&&(n=n+""),O.isString(n))return(await jS(n)).byteLength},BS=async(n,o)=>{const i=O.toFiniteNumber(n.getContentLength());return i??zS(o)},MS=hs&&(async n=>{let{url:o,method:i,data:s,signal:u,cancelToken:d,timeout:f,onDownloadProgress:h,onUploadProgress:m,responseType:g,headers:v,withCredentials:y="same-origin",fetchOptions:k}=Gm(n);g=g?(g+"").toLowerCase():"text";let R=IS([u,d&&d.toAbortSignal()],f),w;const C=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let b;try{if(m&&FS&&i!=="get"&&i!=="head"&&(b=await BS(v,s))!==0){let Q=new Request(o,{method:"POST",body:s,duplex:"half"}),G;if(O.isFormData(s)&&(G=Q.headers.get("content-type"))&&v.setContentType(G),Q.body){const[q,fe]=lh(b,Gl(sh(m)));s=uh(Q.body,ch,q,fe)}}O.isString(y)||(y=y?"include":"omit");const P="credentials"in Request.prototype;w=new Request(o,{...k,signal:R,method:i.toUpperCase(),headers:v.normalize().toJSON(),body:s,duplex:"half",credentials:P?y:void 0});let L=await fetch(w);const j=Hu&&(g==="stream"||g==="response");if(Hu&&(h||j&&C)){const Q={};["status","statusText","headers"].forEach(me=>{Q[me]=L[me]});const G=O.toFiniteNumber(L.headers.get("content-length")),[q,fe]=h&&lh(G,Gl(sh(h),!0))||[];L=new Response(uh(L.body,ch,q,()=>{fe&&fe(),C&&C()}),Q)}g=g||"text";let W=await Kl[O.findKey(Kl,g)||"text"](L,n);return!j&&C&&C(),await new Promise((Q,G)=>{Vm(Q,G,{data:W,headers:bt.from(L.headers),status:L.status,statusText:L.statusText,config:n,request:w})})}catch(P){throw C&&C(),P&&P.name==="TypeError"&&/fetch/i.test(P.message)?Object.assign(new ye("Network Error",ye.ERR_NETWORK,n,w),{cause:P.cause||P}):ye.from(P,P&&P.code,n,w)}}),Wu={http:nS,xhr:LS,fetch:MS};O.forEach(Wu,(n,o)=>{if(n){try{Object.defineProperty(n,"name",{value:o})}catch{}Object.defineProperty(n,"adapterName",{value:o})}});const dh=n=>`- ${n}`,US=n=>O.isFunction(n)||n===null||n===!1,Ym={getAdapter:n=>{n=O.isArray(n)?n:[n];const{length:o}=n;let i,s;const u={};for(let d=0;d<o;d++){i=n[d];let f;if(s=i,!US(i)&&(s=Wu[(f=String(i)).toLowerCase()],s===void 0))throw new ye(`Unknown adapter '${f}'`);if(s)break;u[f||"#"+d]=s}if(!s){const d=Object.entries(u).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let f=o?d.length>1?`since :
`+d.map(dh).join(`
`):" "+dh(d[0]):"as no adapter specified";throw new ye("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return s},adapters:Wu};function Su(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new ao(null,n)}function fh(n){return Su(n),n.headers=bt.from(n.headers),n.data=ku.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Ym.getAdapter(n.adapter||hi.adapter)(n).then(function(s){return Su(n),s.data=ku.call(n,n.transformResponse,s),s.headers=bt.from(s.headers),s},function(s){return Wm(s)||(Su(n),s&&s.response&&(s.response.data=ku.call(n,n.transformResponse,s.response),s.response.headers=bt.from(s.response.headers))),Promise.reject(s)})}const Xm="1.7.9",ms={};["object","boolean","number","function","string","symbol"].forEach((n,o)=>{ms[n]=function(s){return typeof s===n||"a"+(o<1?"n ":" ")+n}});const ph={};ms.transitional=function(o,i,s){function u(d,f){return"[Axios v"+Xm+"] Transitional option '"+d+"'"+f+(s?". "+s:"")}return(d,f,h)=>{if(o===!1)throw new ye(u(f," has been removed"+(i?" in "+i:"")),ye.ERR_DEPRECATED);return i&&!ph[f]&&(ph[f]=!0,console.warn(u(f," has been deprecated since v"+i+" and will be removed in the near future"))),o?o(d,f,h):!0}};ms.spelling=function(o){return(i,s)=>(console.warn(`${s} is likely a misspelling of ${o}`),!0)};function HS(n,o,i){if(typeof n!="object")throw new ye("options must be an object",ye.ERR_BAD_OPTION_VALUE);const s=Object.keys(n);let u=s.length;for(;u-- >0;){const d=s[u],f=o[d];if(f){const h=n[d],m=h===void 0||f(h,d,n);if(m!==!0)throw new ye("option "+d+" must be "+m,ye.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ye("Unknown option "+d,ye.ERR_BAD_OPTION)}}const zl={assertOptions:HS,validators:ms},ln=zl.validators;class yr{constructor(o){this.defaults=o,this.interceptors={request:new oh,response:new oh}}async request(o,i){try{return await this._request(o,i)}catch(s){if(s instanceof Error){let u={};Error.captureStackTrace?Error.captureStackTrace(u):u=new Error;const d=u.stack?u.stack.replace(/^.+\n/,""):"";try{s.stack?d&&!String(s.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+d):s.stack=d}catch{}}throw s}}_request(o,i){typeof o=="string"?(i=i||{},i.url=o):i=o||{},i=Sr(this.defaults,i);const{transitional:s,paramsSerializer:u,headers:d}=i;s!==void 0&&zl.assertOptions(s,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),u!=null&&(O.isFunction(u)?i.paramsSerializer={serialize:u}:zl.assertOptions(u,{encode:ln.function,serialize:ln.function},!0)),zl.assertOptions(i,{baseUrl:ln.spelling("baseURL"),withXsrfToken:ln.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=d&&O.merge(d.common,d[i.method]);d&&O.forEach(["delete","get","head","post","put","patch","common"],w=>{delete d[w]}),i.headers=bt.concat(f,d);const h=[];let m=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(i)===!1||(m=m&&C.synchronous,h.unshift(C.fulfilled,C.rejected))});const g=[];this.interceptors.response.forEach(function(C){g.push(C.fulfilled,C.rejected)});let v,y=0,k;if(!m){const w=[fh.bind(this),void 0];for(w.unshift.apply(w,h),w.push.apply(w,g),k=w.length,v=Promise.resolve(i);y<k;)v=v.then(w[y++],w[y++]);return v}k=h.length;let R=i;for(y=0;y<k;){const w=h[y++],C=h[y++];try{R=w(R)}catch(b){C.call(this,b);break}}try{v=fh.call(this,R)}catch(w){return Promise.reject(w)}for(y=0,k=g.length;y<k;)v=v.then(g[y++],g[y++]);return v}getUri(o){o=Sr(this.defaults,o);const i=Qm(o.baseURL,o.url);return Mm(i,o.params,o.paramsSerializer)}}O.forEach(["delete","get","head","options"],function(o){yr.prototype[o]=function(i,s){return this.request(Sr(s||{},{method:o,url:i,data:(s||{}).data}))}});O.forEach(["post","put","patch"],function(o){function i(s){return function(d,f,h){return this.request(Sr(h||{},{method:o,headers:s?{"Content-Type":"multipart/form-data"}:{},url:d,data:f}))}}yr.prototype[o]=i(),yr.prototype[o+"Form"]=i(!0)});class Ec{constructor(o){if(typeof o!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(d){i=d});const s=this;this.promise.then(u=>{if(!s._listeners)return;let d=s._listeners.length;for(;d-- >0;)s._listeners[d](u);s._listeners=null}),this.promise.then=u=>{let d;const f=new Promise(h=>{s.subscribe(h),d=h}).then(u);return f.cancel=function(){s.unsubscribe(d)},f},o(function(d,f,h){s.reason||(s.reason=new ao(d,f,h),i(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(o){if(this.reason){o(this.reason);return}this._listeners?this._listeners.push(o):this._listeners=[o]}unsubscribe(o){if(!this._listeners)return;const i=this._listeners.indexOf(o);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const o=new AbortController,i=s=>{o.abort(s)};return this.subscribe(i),o.signal.unsubscribe=()=>this.unsubscribe(i),o.signal}static source(){let o;return{token:new Ec(function(u){o=u}),cancel:o}}}function WS(n){return function(i){return n.apply(null,i)}}function VS(n){return O.isObject(n)&&n.isAxiosError===!0}const Vu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Vu).forEach(([n,o])=>{Vu[o]=n});function Jm(n){const o=new yr(n),i=Tm(yr.prototype.request,o);return O.extend(i,yr.prototype,o,{allOwnKeys:!0}),O.extend(i,o,null,{allOwnKeys:!0}),i.create=function(u){return Jm(Sr(n,u))},i}const De=Jm(hi);De.Axios=yr;De.CanceledError=ao;De.CancelToken=Ec;De.isCancel=Wm;De.VERSION=Xm;De.toFormData=ps;De.AxiosError=ye;De.Cancel=De.CanceledError;De.all=function(o){return Promise.all(o)};De.spread=WS;De.isAxiosError=VS;De.mergeConfig=Sr;De.AxiosHeaders=bt;De.formToJSON=n=>Hm(O.isHTMLForm(n)?new FormData(n):n);De.getAdapter=Ym.getAdapter;De.HttpStatusCode=Vu;De.default=De;const Qu=x.createContext({});function QS({children:n}){const[o,i]=x.useState("url(/win-cursor/arrow.cur), auto"),[s,u]=x.useState([]),d=f=>{i(`url(/win-cursor/${f}), auto`)};return E.jsx(Qu.Provider,{value:{cursor:o,changeCursor:d,storage:s,setStorage:u},children:n})}function uo(){if(!Qu)throw new Error("useProcessContext must be used within a ProcessContextProvider");return x.useContext(Qu)}const GS=({games:n,fetchGames:o,setGames:i})=>{const{changeCursor:s}=uo(),u=["Platform","Title","Started Date","Notes","Completed","Completed Date",""],[d,f]=x.useState(0),[h,m]=x.useState(!0);x.useEffect(()=>{g()},[]);const g=()=>{s("loading.cur");const w=setInterval(()=>{f(C=>{if(C===100)return m(!1),s("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(w)}},v=(w,C)=>{i(n.map((b,P)=>P===C?{...b,notes:w.target.value}:b))},y=w=>{m(!0),De.delete(`http://localhost:8080/games/${w.id}`).then(()=>o())},k=w=>{m(!0),De.post(`http://localhost:8080/games/${w.id}/complete`).then(()=>o())},R=(w,C)=>{De.put(`http://localhost:8080/games/${C.id}`,{notes:w.target.value})};return h?E.jsx(ns,{value:Math.floor(d)}):E.jsxs("div",{children:[E.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"GAMES!"}),n.length?E.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:E.jsxs(ss,{children:[E.jsx(is,{children:E.jsx(kr,{children:u.map(w=>E.jsx(ls,{children:w},w))})}),E.jsx(os,{children:n.map((w,C)=>E.jsxs(kr,{children:[E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:E.jsx("p",{children:w.platform.name})}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:E.jsx("div",{style:{minWidth:"150px"},children:E.jsx("p",{children:w.title})})}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:w.startedDate}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:w.completed?E.jsx(br,{style:{minWidth:"20vw"},onChange:b=>v(b,C),value:w.notes||"",onBlur:b=>R(b,w),multiline:!0,rows:4,fullWidth:!0}):w.notes}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:w.completed?"Yes!":"No"}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:w.completedDate}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:!w.completed&&E.jsxs("div",{style:{width:"70px"},children:[E.jsx("img",{onClick:()=>k(w),src:gk,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),E.jsx("img",{onClick:()=>y(w),src:$m,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):E.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},KS=({saveAndGoBack:n})=>{const{changeCursor:o}=uo(),[i,s]=x.useState([]),[u,d]=x.useState({}),[f,h]=x.useState(""),[m,g]=x.useState(0),[v,y]=x.useState(!1),[k,R]=x.useState(1);x.useEffect(()=>{m===100&&n(k)},[m]);const w=()=>{o("loading.cur");const b=setInterval(()=>{g(P=>{if(P===100)return 0;const L=Math.random()*50;return Math.min(P+L,100)})},500);return()=>{clearInterval(b)}};x.useEffect(()=>{De.get("http://localhost:8080/platforms").then(b=>{s(b.data.map(P=>({...P,label:P.name})))})},[]);const C=()=>{R(v?2:1),w(),De.post("http://localhost:8080/games",{platform_id:u.id,title:f,backlog:v})};return E.jsxs(E.Fragment,{children:[E.jsxs(nm,{label:"New Game",children:[E.jsxs("div",{children:[E.jsx("p",{children:"Platform"}),E.jsx(dc,{formatDisplay:()=>u.name,labelId:"opt.name",options:[{},...i],menuMaxHeight:160,width:160,onChange:b=>d(b)})]}),E.jsxs("div",{style:{marginTop:"5px"},children:[E.jsx("p",{children:"Title"}),E.jsx(br,{value:f,placeholder:"Type here...",onChange:b=>h(b.target.value),fullWidth:!0})]}),E.jsxs("div",{style:{marginTop:"5px",display:"flex"},children:[E.jsx(Vh,{value:v,onChange:()=>y(!v),style:{marginTop:"2px"}}),E.jsx("p",{children:"Backlog"})]})]}),E.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"},children:m>0?E.jsx(ns,{value:Math.floor(m)}):E.jsx(E.Fragment,{children:E.jsx(Be,{disabled:Object.keys(u).length===0||!f,onClick:()=>C(),style:{textAlign:"center"},children:"Save new game"})})})]})},qS="/freecellman.png",YS=({games:n,fetchGames:o,setGames:i})=>{const{changeCursor:s}=uo(),u=["Platform","Title","Logged Date","Notes",""],[d,f]=x.useState(0),[h,m]=x.useState(!0);x.useEffect(()=>{g()},[]);const g=()=>{s("loading.cur");const w=setInterval(()=>{f(C=>{if(C===100)return m(!1),s("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(w)}},v=(w,C)=>{i(n.map((b,P)=>P===C?{...b,notes:w.target.value}:b))},y=w=>{m(!0),De.delete(`http://localhost:8080/games/${w.id}`).then(()=>o())},k=w=>{m(!0),De.get(`http://localhost:8080/games/${w.id}/start`).then(()=>o())},R=(w,C)=>{De.put(`http://localhost:8080/games/${C.id}`,{notes:w.target.value})};return h?E.jsx(ns,{value:Math.floor(d)}):E.jsxs("div",{children:[E.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Backlog"}),n.length?E.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:E.jsxs(ss,{children:[E.jsx(is,{children:E.jsx(kr,{children:u.map(w=>E.jsx(ls,{children:w},w))})}),E.jsx(os,{children:n.map((w,C)=>E.jsxs(kr,{children:[E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:E.jsx("p",{children:w.platform.name})}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:E.jsx("div",{style:{minWidth:"300px"},children:E.jsx("p",{children:w.title})})}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:w.startedDate}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:E.jsx(br,{style:{minWidth:"20vw"},onChange:b=>v(b,C),value:w.notes||"",onBlur:b=>R(b,w),multiline:!0,rows:2,fullWidth:!0})}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:!w.completed&&E.jsxs("div",{style:{width:"70px"},children:[E.jsx("img",{onClick:()=>k(w),src:qS,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),E.jsx("img",{onClick:()=>y(w),src:$m,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):E.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},Zm=()=>{const[n,o]=x.useState(1),[i,s]=x.useState([]),[u,d]=x.useState(!1);x.useEffect(()=>{f(!0)},[]),x.useEffect(()=>{switch(localStorage.setItem("system.gamecache.page",String(n)),n){case 1:f(!1);break;case 2:f(!0);break}},[n]);const f=v=>{s([]),De.get(`http://localhost:8080/games${v?"/backlog":""}`).then(y=>s(y.data))},h=v=>{o(v),d(!1)},m=v=>{o(v),f(v===2)},g=[{component:E.jsx(KS,{saveAndGoBack:m}),text:"Add new Game to your Backlog"},{component:E.jsx(GS,{setGames:s,fetchGames:()=>f(!1),games:i}),text:"Game list"},{component:E.jsx(YS,{setGames:s,fetchGames:()=>f(!0),games:i}),text:"Backloged games, ready to play!"}];return E.jsxs(E.Fragment,{children:[E.jsxs(un,{children:[E.jsx(Be,{variant:"menu",size:"sm",onClick:()=>d(!u),children:"File"}),u&&E.jsxs(ui,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:[E.jsx(zt,{style:{cursor:"pointer"},onClick:()=>h(0),children:"New Game"}),E.jsx(zt,{style:{cursor:"pointer"},onClick:()=>h(1),children:E.jsx("p",{children:"Game List"})}),E.jsx(zt,{style:{cursor:"pointer"},onClick:()=>h(2),children:E.jsx("p",{children:"Backlog"})})]}),E.jsx(Be,{variant:"menu",size:"sm",onClick:()=>d(!1),children:"Edit"}),E.jsx(Be,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),E.jsx(fn,{children:g[n].component}),E.jsx(Rn,{variant:"well",className:"footer",children:g[n].text})]})},XS="/backlogger.png",st=[];for(let n=0;n<256;++n)st.push((n+256).toString(16).slice(1));function JS(n,o=0){return(st[n[o+0]]+st[n[o+1]]+st[n[o+2]]+st[n[o+3]]+"-"+st[n[o+4]]+st[n[o+5]]+"-"+st[n[o+6]]+st[n[o+7]]+"-"+st[n[o+8]]+st[n[o+9]]+"-"+st[n[o+10]]+st[n[o+11]]+st[n[o+12]]+st[n[o+13]]+st[n[o+14]]+st[n[o+15]]).toLowerCase()}let Eu;const ZS=new Uint8Array(16);function eE(){if(!Eu){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Eu=crypto.getRandomValues.bind(crypto)}return Eu(ZS)}const tE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),hh={randomUUID:tE};function nE(n,o,i){var u;if(hh.randomUUID&&!n)return hh.randomUUID();n=n||{};const s=n.random??((u=n.rng)==null?void 0:u.call(n))??eE();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,JS(s)}const Gu=()=>{const[n,o]=x.useState(""),[i,s]=x.useState(!1),u=d=>{switch(d){case 0:o("");break;case 1:alert("Save file");break;case 2:alert("Load file");break}s(!1)};return x.useEffect(()=>{const d=localStorage.getItem("App.Notes.tempValue");d&&o(d)},[]),x.useEffect(()=>{localStorage.setItem("App.Notes.tempValue",n)},[n]),E.jsxs(E.Fragment,{children:[E.jsxs(un,{children:[E.jsx(Be,{variant:"menu",size:"sm",onClick:()=>s(!i),children:"File"}),i&&E.jsxs(ui,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:[E.jsx(zt,{style:{cursor:"pointer"},onClick:()=>u(0),children:"New Note"}),E.jsx(zt,{style:{cursor:"pointer"},onClick:()=>u(1),children:E.jsx("p",{children:"Save File"})}),E.jsx(zt,{style:{cursor:"pointer"},onClick:()=>u(1),children:E.jsx("p",{children:"Load File"})})]}),E.jsx(Be,{variant:"menu",size:"sm",disabled:!0,children:"Save"}),E.jsx(Be,{variant:"menu",size:"sm",onClick:()=>s(!1),children:"About us"})]}),E.jsx(fn,{children:E.jsx(br,{style:{minWidth:"60vw"},value:n,onChange:d=>o(d.target.value),multiline:!0,rows:20,fullWidth:!0})}),E.jsx(Rn,{variant:"well",className:"footer",children:E.jsx("p",{children:"Notes App, the file name will appear here : )"})})]})},eg=()=>E.jsxs(E.Fragment,{children:[E.jsx(fn,{children:E.jsx("iframe",{width:"680",height:"400",frameBorder:"0",src:"https://web.archive.org/web/20250307002700/https://www.google.com/web/20250307002700/https://www.google.com/x`x",allowFullScreen:!1})}),E.jsx(Rn,{variant:"well",className:"footer",children:"Browser"})]}),Ku=({level:n})=>{const{addProcess:o,fetchIcon:i,programs:s}=co(),{storage:u,setStorage:d}=uo(),[f,h]=x.useState(!1);x.useState(""),x.useState(!1),x.useEffect(()=>{},[]);const m=v=>{let y=[0,0];for(let R=0;R<u.length;R++){const w=u[R];for(let C=0;C<w.length;C++)w[C].length>=4||(y=[R,C])}console.log(y);let k=u;k[y[0]]||d([[v]]),k[y[0]][y[1]]=v,console.log(k),d(k),h(!1)},g=(v,y)=>{d(u.map((k,R)=>k.map((w,C)=>v===R&&y===C?(w.selected&&o(w),{...w,selected:!w.selected}):{...w,selected:!1})))};return E.jsxs(E.Fragment,{children:[E.jsxs(un,{children:[E.jsx(Be,{variant:"menu",size:"sm",onClick:()=>h(!f),children:"New File"}),f&&E.jsx(ui,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:s.map((v,y)=>E.jsxs(zt,{onClick:()=>m(v),style:{cursor:"pointer",display:"flex"},children:[E.jsx("img",{src:v.icon,alt:v.name,style:{width:"20px",height:"20px",marginRight:"10px"}}),E.jsx("p",{children:v.name})]},y))})]}),E.jsx(fn,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:E.jsx("div",{style:{width:"700px"},children:E.jsx("div",{style:{width:"100%"},children:Array.from({length:7}).map((v,y)=>E.jsx("div",{style:{display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"},children:Array.from({length:7}).map((k,R)=>u[y]&&u[y][R]&&E.jsxs("div",{onClick:()=>g(y,R),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column",paddingRight:"30px"},children:[E.jsx("div",{style:{display:"flex",justifyContent:"center"},children:E.jsx("img",{src:u[y][R].icon,style:{height:"70px",filter:u[y][R].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),E.jsx("p",{style:{color:u[y][R].selected?"white":"black",textAlign:"center",backgroundColor:u[y][R].selected?"#000080":"transparent"},children:u[y][R].name})]}))}))})})}),E.jsx(Rn,{variant:"well",className:"footer",children:E.jsx("p",{children:"Explorer"})})]})},qu="/explorer.png",Yu="/notes.png",Xu=x.createContext({});function rE({children:n}){const[o,i]=x.useState([]),[s]=_.useState([]);x.useEffect(()=>{const y=localStorage.getItem("process");y&&i([...JSON.parse(y).map(k=>({...k,component:h(k.componentName)}))])},[]),x.useEffect(()=>{},[o]);const u=(y,k)=>{let R=0;i(o.map(w=>w.uuid===y.uuid?{...w,priority:k}:{...w,priority:++R}))},d=y=>{const k={...y,uuid:nE(),location:{x:window.innerWidth/2,y:window.innerHeight/2},priority:0},R=[...o.map(w=>({...w,priority:w.priority+1})),k];setTimeout(()=>{i(R)},0),localStorage.setItem("process",JSON.stringify(R))},f=y=>{setTimeout(()=>{const k=o.filter(R=>R.uuid!==y);i(k),localStorage.setItem("process",JSON.stringify(k))},0)},h=y=>{switch(y){case"recycle_bin":return Rm;case"my_computer":return Am;case"task_manager":return bc;case"doom":return Cm;case"backlogger":return Zm;case"notes":return Gu;case"browser":return eg;case"explorer":return Ku}},m=y=>{switch(y){case"folder":return qu;case"notes":return Yu}},g=(y,k)=>{const R=localStorage.getItem("process");if(!R)return;const w=[...JSON.parse(R).map(C=>C.uuid===y?{...C,location:k}:C)];localStorage.removeItem("process"),localStorage.setItem("process",JSON.stringify(w))},[v]=x.useState([{name:"File",icon:qu,componentName:"explorer",component:Ku},{name:"Notes",icon:Yu,componentName:"notes",component:Gu}]);return E.jsx(Xu.Provider,{value:{processes:o,setProcesses:i,changePriority:u,closeProcess:f,ordenatedProcess:s,addProcess:d,handleProceessLocationChange:g,fetchIcon:m,fetchComponent:h,programs:v},children:n})}function co(){if(!Xu)throw new Error("useProcessContext must be used within a ProcessContextProvider");return x.useContext(Xu)}const oE=()=>{const{processes:n}=co(),o=["UUID","Name","Priority"];return E.jsx(E.Fragment,{children:E.jsxs(ss,{style:{width:"50vw"},children:[E.jsx(is,{children:E.jsx(kr,{children:o.map(i=>E.jsx(ls,{children:i},i))})}),E.jsx(os,{children:n.map((i,s)=>E.jsxs(kr,{children:[E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:i.uuid}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:i.name}),E.jsx(pt,{style:{textAlign:"center",verticalAlign:"middle"},children:i.priority===0?"High":"Normal"})]},s))})]})})},bc=()=>E.jsxs(E.Fragment,{children:[E.jsx(fn,{children:E.jsx(oE,{})}),E.jsx(Rn,{variant:"well",className:"footer",children:"See your running processes"})]}),tg="/task_manager.png",iE="/browser.png",lE=()=>{const n=x.useRef(null),[o,i]=x.useState(0),{addProcess:s}=co(),u=()=>{n.current&&i(n.current.getBoundingClientRect().height/7)},[d,f]=x.useState([[{name:"Recycle Bin",icon:pk,selected:!1,componentName:"recycle_bin",component:Rm,priority:0},{name:"Doom",icon:mk,selected:!1,componentName:"doom",component:Cm,priority:0}],[{name:"My Computer",icon:hk,selected:!1,componentName:"my_computer",component:Am,priority:0},{name:"Browser",icon:iE,selected:!1,componentName:"browser",component:eg,priority:0}],[{name:"Task Manager",icon:tg,selected:!1,componentName:"task_manager",component:bc,priority:0}],[{name:"Explorer",icon:qu,selected:!1,componentName:"explorer",component:Ku,priority:0}],[{name:"GameCache",icon:XS,selected:!1,componentName:"backlogger",component:Zm,priority:0}],[{name:"Notes",icon:Yu,selected:!1,componentName:"notes",component:Gu,priority:0}]]),h=(g,v)=>{f(d.map((y,k)=>y.map((R,w)=>g===k&&v===w?(R.selected&&s(R),{...R,selected:!R.selected}):{...R,selected:!1})))},m=(g,v)=>{d[g]&&d[g][v]||f(d.map(y=>y.map(k=>({...k,selected:!1}))))};return x.useEffect(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)),[]),E.jsx("div",{ref:n,style:{width:"100vw",height:"94vh"},children:Array.from({length:7}).map((g,v)=>E.jsx("div",{style:{height:o,display:"flex"},children:Array.from({length:10}).map((y,k)=>E.jsx("div",{onClick:()=>m(v,k),style:{width:"10.2857%",display:"flex",justifyContent:"center",alignItems:"center"},children:d[v]&&d[v][k]&&E.jsxs("div",{onClick:()=>h(v,k),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column"},children:[E.jsx("div",{style:{display:"flex",justifyContent:"center"},children:E.jsx("img",{src:d[v][k].icon,alt:d[v][k].name,style:{height:"70px",filter:d[v][k].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),E.jsx("p",{style:{color:"white",textAlign:"center",backgroundColor:d[v][k].selected?"#000080":"transparent"},children:d[v][k].name})]})},k))},v))})},sE=()=>{const[n,o]=x.useState(!1),i=U(Uh)`
        top: 94% !important;
    `,{changePriority:s,processes:u,addProcess:d}=co(),f=U.div`
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
    `,[h]=x.useState([{name:"Task Manager",icon:tg,selected:!1,componentName:"task_manager",component:bc,priority:0}]);return E.jsx(i,{children:E.jsxs(un,{style:{justifyContent:"space-between"},children:[E.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[E.jsxs(Be,{onClick:()=>o(!n),active:n,style:{fontWeight:"bold"},children:[E.jsx("img",{src:bm,alt:"react95 logo",style:{height:"20px",marginRight:4}}),"Start"]}),n&&E.jsxs(ui,{style:{position:"absolute",left:"0",top:"-550%"},onClick:()=>o(!1),children:[h.map(m=>E.jsxs(zt,{style:{cursor:"pointer"},onClick:()=>d(m),children:[E.jsx("img",{src:m.icon,style:{width:"20px",marginRight:"5px"}}),E.jsx("p",{children:m.name})]})),E.jsxs(zt,{children:[E.jsx("span",{role:"img","aria-label":"👨‍💻",children:"👨‍💻"}),"Profile"]}),E.jsxs(zt,{children:[E.jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"My account"]}),E.jsx(uc,{}),E.jsxs(zt,{disabled:!0,children:[E.jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]})]})]}),E.jsx("div",{style:{width:"100%",display:"flex"},children:u.map(m=>E.jsxs(f,{style:m.priority===0?{borderTopColor:"#808080",borderLeftColor:"#808080",borderRightColor:"#fff",borderBottomColor:"#fff",cursor:"pointer",display:"flex",justifyContent:"center"}:{cursor:"pointer",display:"flex",justifyContent:"center"},onClick:()=>s(m,0),children:[E.jsx("img",{src:m.icon,style:{height:"25px",alignSelf:"center",marginRight:"5px"}}),E.jsx("p",{style:{textAlign:"center",alignSelf:"center"},children:m.name})]}))}),E.jsx(br,{placeholder:"Search...",width:150})]})})},aE=({process:n})=>{var R,w;const{changePriority:o,closeProcess:i,handleProceessLocationChange:s}=co(),{changeCursor:u}=uo(),[d,f]=x.useState({x:((R=n.location)==null?void 0:R.x)??0,y:((w=n.location)==null?void 0:w.y)??0}),h=x.useRef({x:0,y:0}),[m,g]=x.useState(!1);x.useEffect(()=>(m?(u("Grabbing.cur"),document.addEventListener("mousemove",k),document.addEventListener("mouseup",y)):(u("arrow.cur"),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",y)),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",y)}),[m]);const v=C=>{g(!0),h.current={x:C.clientX-(d.x??0),y:C.clientY-(d.y??0)}},y=C=>{g(!1);const b={x:C.clientX-h.current.x,y:C.clientY-h.current.y};n.uuid&&s(n.uuid,b)},k=C=>{if(!m)return;const b={x:C.clientX-h.current.x,y:C.clientY-h.current.y};f(b)};return E.jsxs(pc,{onClick:()=>o(n,0),resizable:!0,className:"window",style:{position:"absolute",top:`${d.y}px`,left:`${d.x}px`,transform:"translate(-50%, -50%)",zIndex:n.priority===0?"9999":n.priority+1,userSelect:"none"},children:[E.jsxs(fc,{onMouseDown:v,className:"window-title",style:{display:"flex",justifyContent:"space-between",backgroundColor:n.priority!==0?"grey":""},children:[E.jsxs("div",{style:{display:"flex"},children:[E.jsx("img",{src:n.icon,style:{width:"20px",height:"80%",marginRight:"5px",alignSelf:"center"}}),E.jsx("p",{children:n.name})]}),E.jsx(Be,{style:{alignSelf:"center"},onClick:()=>{n.uuid&&i(n.uuid)},disabled:!n.uuid,children:E.jsx("p",{style:{fontWeight:"bold"},children:"X"})})]}),n.component?_.createElement(n.component):""]},n.uuid)},uE=()=>{const{processes:n}=co();return E.jsx(E.Fragment,{children:n.map(o=>E.jsx(aE,{process:o},o.uuid))})},cE=()=>{const{cursor:n}=uo(),[o,i]=x.useState(!1),[s,u]=x.useState({x:0,y:0}),d=()=>i(!1);return x.useEffect(()=>(document.addEventListener("click",d),()=>document.removeEventListener("click",d)),[]),E.jsxs("div",{style:{cursor:n},onContextMenu:f=>{f.preventDefault(),u({x:f.pageX,y:f.pageY}),i(!0)},children:[E.jsx(lE,{}),E.jsx(uE,{}),o&&E.jsxs("div",{style:{position:"fixed",top:s.y,left:s.x,background:"#333",color:"#fff",padding:"10px",borderRadius:"5px",zIndex:9999},children:[E.jsx("div",{children:"Option 1"}),E.jsx("div",{children:"Option 2"})]}),E.jsx(sE,{})]})},dE=lv`
  ${sv}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${zw}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Bw}') format('woff2');
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
    background-color: #008080; /* Background for full screen */
  }
`,fE=()=>E.jsxs(tk,{children:[E.jsx(dE,{}),E.jsx(rv,{theme:Fw,children:E.jsx(QS,{children:E.jsx(rE,{children:E.jsxs(N1,{children:[E.jsx(Fu,{path:"/",element:E.jsx(fk,{})}),E.jsx(Fu,{path:"/vortex",element:E.jsx(cE,{})})]})})})})]});o0.createRoot(document.getElementById("root")).render(E.jsx(x.StrictMode,{children:E.jsx(fE,{})}));
