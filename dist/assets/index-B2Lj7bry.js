var M0=Object.defineProperty;var U0=(n,r,i)=>r in n?M0(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i;var Xe=(n,r,i)=>U0(n,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();function Bh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vu={exports:{}},ti={},wu={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function H0(){if($p)return Se;$p=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),y=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,C={};function b(P,F,X){this.props=P,this.context=F,this.refs=C,this.updater=X||$}b.prototype.isReactComponent={},b.prototype.setState=function(P,F){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,F,"setState")},b.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function N(){}N.prototype=b.prototype;function T(P,F,X){this.props=P,this.context=F,this.refs=C,this.updater=X||$}var O=T.prototype=new N;O.constructor=T,k(O,b.prototype),O.isPureReactComponent=!0;var W=Array.isArray,Q=Object.prototype.hasOwnProperty,K={current:null},q={key:!0,ref:!0,__self:!0,__source:!0};function fe(P,F,X){var Z,oe={},te=null,se=null;if(F!=null)for(Z in F.ref!==void 0&&(se=F.ref),F.key!==void 0&&(te=""+F.key),F)Q.call(F,Z)&&!q.hasOwnProperty(Z)&&(oe[Z]=F[Z]);var pe=arguments.length-2;if(pe===1)oe.children=X;else if(1<pe){for(var z=Array(pe),ue=0;ue<pe;ue++)z[ue]=arguments[ue+2];oe.children=z}if(P&&P.defaultProps)for(Z in pe=P.defaultProps,pe)oe[Z]===void 0&&(oe[Z]=pe[Z]);return{$$typeof:n,type:P,key:te,ref:se,props:oe,_owner:K.current}}function ge(P,F){return{$$typeof:n,type:P.type,key:F,ref:P.ref,props:P.props,_owner:P._owner}}function Ce(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function Le(P){var F={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(X){return F[X]})}var be=/\/+/g;function Pe(P,F){return typeof P=="object"&&P!==null&&P.key!=null?Le(""+P.key):F.toString(36)}function Te(P,F,X,Z,oe){var te=typeof P;(te==="undefined"||te==="boolean")&&(P=null);var se=!1;if(P===null)se=!0;else switch(te){case"string":case"number":se=!0;break;case"object":switch(P.$$typeof){case n:case r:se=!0}}if(se)return se=P,oe=oe(se),P=Z===""?"."+Pe(se,0):Z,W(oe)?(X="",P!=null&&(X=P.replace(be,"$&/")+"/"),Te(oe,F,X,"",function(ue){return ue})):oe!=null&&(Ce(oe)&&(oe=ge(oe,X+(!oe.key||se&&se.key===oe.key?"":(""+oe.key).replace(be,"$&/")+"/")+P)),F.push(oe)),1;if(se=0,Z=Z===""?".":Z+":",W(P))for(var pe=0;pe<P.length;pe++){te=P[pe];var z=Z+Pe(te,pe);se+=Te(te,F,X,z,oe)}else if(z=S(P),typeof z=="function")for(P=z.call(P),pe=0;!(te=P.next()).done;)te=te.value,z=Z+Pe(te,pe++),se+=Te(te,F,X,z,oe);else if(te==="object")throw F=String(P),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return se}function Re(P,F,X){if(P==null)return P;var Z=[],oe=0;return Te(P,Z,"","",function(te){return F.call(X,te,oe++)}),Z}function Ne(P){if(P._status===-1){var F=P._result;F=F(),F.then(function(X){(P._status===0||P._status===-1)&&(P._status=1,P._result=X)},function(X){(P._status===0||P._status===-1)&&(P._status=2,P._result=X)}),P._status===-1&&(P._status=0,P._result=F)}if(P._status===1)return P._result.default;throw P._result}var ke={current:null},B={transition:null},J={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:B,ReactCurrentOwner:K};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Re,forEach:function(P,F,X){Re(P,function(){F.apply(this,arguments)},X)},count:function(P){var F=0;return Re(P,function(){F++}),F},toArray:function(P){return Re(P,function(F){return F})||[]},only:function(P){if(!Ce(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Se.Component=b,Se.Fragment=i,Se.Profiler=a,Se.PureComponent=T,Se.StrictMode=l,Se.Suspense=p,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Se.act=Y,Se.cloneElement=function(P,F,X){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var Z=k({},P.props),oe=P.key,te=P.ref,se=P._owner;if(F!=null){if(F.ref!==void 0&&(te=F.ref,se=K.current),F.key!==void 0&&(oe=""+F.key),P.type&&P.type.defaultProps)var pe=P.type.defaultProps;for(z in F)Q.call(F,z)&&!q.hasOwnProperty(z)&&(Z[z]=F[z]===void 0&&pe!==void 0?pe[z]:F[z])}var z=arguments.length-2;if(z===1)Z.children=X;else if(1<z){pe=Array(z);for(var ue=0;ue<z;ue++)pe[ue]=arguments[ue+2];Z.children=pe}return{$$typeof:n,type:P.type,key:oe,ref:te,props:Z,_owner:se}},Se.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:c,_context:P},P.Consumer=P},Se.createElement=fe,Se.createFactory=function(P){var F=fe.bind(null,P);return F.type=P,F},Se.createRef=function(){return{current:null}},Se.forwardRef=function(P){return{$$typeof:m,render:P}},Se.isValidElement=Ce,Se.lazy=function(P){return{$$typeof:x,_payload:{_status:-1,_result:P},_init:Ne}},Se.memo=function(P,F){return{$$typeof:g,type:P,compare:F===void 0?null:F}},Se.startTransition=function(P){var F=B.transition;B.transition={};try{P()}finally{B.transition=F}},Se.unstable_act=Y,Se.useCallback=function(P,F){return ke.current.useCallback(P,F)},Se.useContext=function(P){return ke.current.useContext(P)},Se.useDebugValue=function(){},Se.useDeferredValue=function(P){return ke.current.useDeferredValue(P)},Se.useEffect=function(P,F){return ke.current.useEffect(P,F)},Se.useId=function(){return ke.current.useId()},Se.useImperativeHandle=function(P,F,X){return ke.current.useImperativeHandle(P,F,X)},Se.useInsertionEffect=function(P,F){return ke.current.useInsertionEffect(P,F)},Se.useLayoutEffect=function(P,F){return ke.current.useLayoutEffect(P,F)},Se.useMemo=function(P,F){return ke.current.useMemo(P,F)},Se.useReducer=function(P,F,X){return ke.current.useReducer(P,F,X)},Se.useRef=function(P){return ke.current.useRef(P)},Se.useState=function(P){return ke.current.useState(P)},Se.useSyncExternalStore=function(P,F,X){return ke.current.useSyncExternalStore(P,F,X)},Se.useTransition=function(){return ke.current.useTransition()},Se.version="18.3.1",Se}var Tp;function ac(){return Tp||(Tp=1,wu.exports=H0()),wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function W0(){if(Pp)return ti;Pp=1;var n=ac(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(m,p,g){var x,y={},S=null,$=null;g!==void 0&&(S=""+g),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&($=p.ref);for(x in p)l.call(p,x)&&!c.hasOwnProperty(x)&&(y[x]=p[x]);if(m&&m.defaultProps)for(x in p=m.defaultProps,p)y[x]===void 0&&(y[x]=p[x]);return{$$typeof:r,type:m,key:S,ref:$,props:y,_owner:a.current}}return ti.Fragment=i,ti.jsx=f,ti.jsxs=f,ti}var Np;function V0(){return Np||(Np=1,vu.exports=W0()),vu.exports}var v=V0(),w=ac();const L=Bh(w);var $l={},xu={exports:{}},Rt={},ku={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function Q0(){return jp||(jp=1,function(n){function r(B,J){var Y=B.length;B.push(J);e:for(;0<Y;){var P=Y-1>>>1,F=B[P];if(0<a(F,J))B[P]=J,B[Y]=F,Y=P;else break e}}function i(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var J=B[0],Y=B.pop();if(Y!==J){B[0]=Y;e:for(var P=0,F=B.length,X=F>>>1;P<X;){var Z=2*(P+1)-1,oe=B[Z],te=Z+1,se=B[te];if(0>a(oe,Y))te<F&&0>a(se,oe)?(B[P]=se,B[te]=Y,P=te):(B[P]=oe,B[Z]=Y,P=Z);else if(te<F&&0>a(se,Y))B[P]=se,B[te]=Y,P=te;else break e}}return J}function a(B,J){var Y=B.sortIndex-J.sortIndex;return Y!==0?Y:B.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var f=Date,m=f.now();n.unstable_now=function(){return f.now()-m}}var p=[],g=[],x=1,y=null,S=3,$=!1,k=!1,C=!1,b=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(B){for(var J=i(g);J!==null;){if(J.callback===null)l(g);else if(J.startTime<=B)l(g),J.sortIndex=J.expirationTime,r(p,J);else break;J=i(g)}}function W(B){if(C=!1,O(B),!k)if(i(p)!==null)k=!0,Ne(Q);else{var J=i(g);J!==null&&ke(W,J.startTime-B)}}function Q(B,J){k=!1,C&&(C=!1,N(fe),fe=-1),$=!0;var Y=S;try{for(O(J),y=i(p);y!==null&&(!(y.expirationTime>J)||B&&!Le());){var P=y.callback;if(typeof P=="function"){y.callback=null,S=y.priorityLevel;var F=P(y.expirationTime<=J);J=n.unstable_now(),typeof F=="function"?y.callback=F:y===i(p)&&l(p),O(J)}else l(p);y=i(p)}if(y!==null)var X=!0;else{var Z=i(g);Z!==null&&ke(W,Z.startTime-J),X=!1}return X}finally{y=null,S=Y,$=!1}}var K=!1,q=null,fe=-1,ge=5,Ce=-1;function Le(){return!(n.unstable_now()-Ce<ge)}function be(){if(q!==null){var B=n.unstable_now();Ce=B;var J=!0;try{J=q(!0,B)}finally{J?Pe():(K=!1,q=null)}}else K=!1}var Pe;if(typeof T=="function")Pe=function(){T(be)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Re=Te.port2;Te.port1.onmessage=be,Pe=function(){Re.postMessage(null)}}else Pe=function(){b(be,0)};function Ne(B){q=B,K||(K=!0,Pe())}function ke(B,J){fe=b(function(){B(n.unstable_now())},J)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){k||$||(k=!0,Ne(Q))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ge=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return i(p)},n.unstable_next=function(B){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var Y=S;S=J;try{return B()}finally{S=Y}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,J){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=S;S=B;try{return J()}finally{S=Y}},n.unstable_scheduleCallback=function(B,J,Y){var P=n.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?P+Y:P):Y=P,B){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=Y+F,B={id:x++,callback:J,priorityLevel:B,startTime:Y,expirationTime:F,sortIndex:-1},Y>P?(B.sortIndex=Y,r(g,B),i(p)===null&&B===i(g)&&(C?(N(fe),fe=-1):C=!0,ke(W,Y-P))):(B.sortIndex=F,r(p,B),k||$||(k=!0,Ne(Q))),B},n.unstable_shouldYield=Le,n.unstable_wrapCallback=function(B){var J=S;return function(){var Y=S;S=J;try{return B.apply(this,arguments)}finally{S=Y}}}}(Su)),Su}var Ip;function K0(){return Ip||(Ip=1,ku.exports=Q0()),ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function G0(){if(Dp)return Rt;Dp=1;var n=ac(),r=K0();function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)t+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function c(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(a[e]=t,e=0;e<t.length;e++)l.add(t[e])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},y={};function S(e){return p.call(y,e)?!0:p.call(x,e)?!1:g.test(e)?y[e]=!0:(x[e]=!0,!1)}function $(e,t,o,s){if(o!==null&&o.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,t,o,s){if(t===null||typeof t>"u"||$(e,t,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,o,s,u,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(N,T);b[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(N,T);b[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(N,T);b[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function O(e,t,o,s){var u=b.hasOwnProperty(t)?b[t]:null;(u!==null?u.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(k(t,o,u,s)&&(o=null),s||u===null?S(t)&&(o===null?e.removeAttribute(t):e.setAttribute(t,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(t=u.attributeName,s=u.attributeNamespace,o===null?e.removeAttribute(t):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,s?e.setAttributeNS(s,t,o):e.setAttribute(t,o))))}var W=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),K=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),fe=Symbol.for("react.strict_mode"),ge=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Le=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),Pe=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),B=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,P;function F(e){if(P===void 0)try{throw Error()}catch(o){var t=o.stack.trim().match(/\n( *(at )?)/);P=t&&t[1]||""}return`
`+P+e}var X=!1;function Z(e,t){if(!e||X)return"";X=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(D){var s=D}Reflect.construct(e,[],t)}else{try{t.call()}catch(D){s=D}e.call(t.prototype)}else{try{throw Error()}catch(D){s=D}e()}}catch(D){if(D&&s&&typeof D.stack=="string"){for(var u=D.stack.split(`
`),d=s.stack.split(`
`),h=u.length-1,E=d.length-1;1<=h&&0<=E&&u[h]!==d[E];)E--;for(;1<=h&&0<=E;h--,E--)if(u[h]!==d[E]){if(h!==1||E!==1)do if(h--,E--,0>E||u[h]!==d[E]){var A=`
`+u[h].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=h&&0<=E);break}}}finally{X=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?F(e):""}function oe(e){switch(e.tag){case 5:return F(e.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return e=Z(e.type,!1),e;case 11:return e=Z(e.type.render,!1),e;case 1:return e=Z(e.type,!0),e;default:return""}}function te(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case K:return"Portal";case ge:return"Profiler";case fe:return"StrictMode";case Pe:return"Suspense";case Te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Le:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return t=e.displayName||null,t!==null?t:te(e.type)||"Memo";case Ne:t=e._payload,e=e._init;try{return te(e(t))}catch{}}return null}function se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(t);case 8:return t===fe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function z(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ue(e){var t=z(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(h){s=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(h){s=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ye(e){e._valueTracker||(e._valueTracker=ue(e))}function Ee(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var o=t.getValue(),s="";return e&&(s=z(e)?e.checked?"true":"false":e.value),e=s,e!==o?(t.setValue(e),!0):!1}function Ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ge(e,t){var o=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ve(e,t){var o=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;o=pe(t.value!=null?t.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yt(e,t){t=t.checked,t!=null&&O(e,"checked",t,!1)}function Pt(e,t){yt(e,t);var o=pe(t.value),s=t.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_t(e,t.type,o):t.hasOwnProperty("defaultValue")&&_t(e,t.type,pe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rn(e,t,o){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,o||t===e.value||(e.value=t),e.defaultValue=t}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function _t(e,t,o){(t!=="number"||Ie(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var wn=Array.isArray;function on(e,t,o,s){if(e=e.options,t){t={};for(var u=0;u<o.length;u++)t["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=t.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&s&&(e[o].defaultSelected=!0)}else{for(o=""+pe(o),t=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function xn(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function go(e,t){var o=t.value;if(o==null){if(o=t.children,t=t.defaultValue,o!=null){if(t!=null)throw Error(i(92));if(wn(o)){if(1<o.length)throw Error(i(93));o=o[0]}t=o}t==null&&(t=""),o=t}e._wrapperState={initialValue:pe(o)}}function $s(e,t){var o=pe(t.value),s=pe(t.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),t.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function zc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ts(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xi,Mc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,o,s,u){MSApp.execUnsafeLocalFunction(function(){return e(t,o,s,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(xi=xi||document.createElement("div"),xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yo(e,t){if(t){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=t;return}}e.textContent=t}var vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qg=["Webkit","ms","Moz","O"];Object.keys(vo).forEach(function(e){Qg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),vo[t]=vo[e]})});function Uc(e,t,o){return t==null||typeof t=="boolean"||t===""?"":o||typeof t!="number"||t===0||vo.hasOwnProperty(e)&&vo[e]?(""+t).trim():t+"px"}function Hc(e,t){e=e.style;for(var o in t)if(t.hasOwnProperty(o)){var s=o.indexOf("--")===0,u=Uc(o,t[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,u):e[o]=u}}var Kg=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ps(e,t){if(t){if(Kg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(i(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(t.style!=null&&typeof t.style!="object")throw Error(i(62))}}function Ns(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var js=null;function Is(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,jr=null,Ir=null;function Wc(e){if(e=Bo(e)){if(typeof Ds!="function")throw Error(i(280));var t=e.stateNode;t&&(t=Hi(t),Ds(e.stateNode,e.type,t))}}function Vc(e){jr?Ir?Ir.push(e):Ir=[e]:jr=e}function Qc(){if(jr){var e=jr,t=Ir;if(Ir=jr=null,Wc(e),t)for(e=0;e<t.length;e++)Wc(t[e])}}function Kc(e,t){return e(t)}function Gc(){}var Ls=!1;function qc(e,t,o){if(Ls)return e(t,o);Ls=!0;try{return Kc(e,t,o)}finally{Ls=!1,(jr!==null||Ir!==null)&&(Gc(),Qc())}}function wo(e,t){var o=e.stateNode;if(o===null)return null;var s=Hi(o);if(s===null)return null;o=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,t,typeof o));return o}var Os=!1;if(m)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Os=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Os=!1}function Gg(e,t,o,s,u,d,h,E,A){var D=Array.prototype.slice.call(arguments,3);try{t.apply(o,D)}catch(H){this.onError(H)}}var ko=!1,ki=null,Si=!1,_s=null,qg={onError:function(e){ko=!0,ki=e}};function Yg(e,t,o,s,u,d,h,E,A){ko=!1,ki=null,Gg.apply(qg,arguments)}function Xg(e,t,o,s,u,d,h,E,A){if(Yg.apply(this,arguments),ko){if(ko){var D=ki;ko=!1,ki=null}else throw Error(i(198));Si||(Si=!0,_s=D)}}function rr(e){var t=e,o=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(o=t.return),e=t.return;while(e)}return t.tag===3?o:null}function Yc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Xc(e){if(rr(e)!==e)throw Error(i(188))}function Jg(e){var t=e.alternate;if(!t){if(t=rr(e),t===null)throw Error(i(188));return t!==e?null:e}for(var o=e,s=t;;){var u=o.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){o=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===o)return Xc(u),e;if(d===s)return Xc(u),t;d=d.sibling}throw Error(i(188))}if(o.return!==s.return)o=u,s=d;else{for(var h=!1,E=u.child;E;){if(E===o){h=!0,o=u,s=d;break}if(E===s){h=!0,s=u,o=d;break}E=E.sibling}if(!h){for(E=d.child;E;){if(E===o){h=!0,o=d,s=u;break}if(E===s){h=!0,s=d,o=u;break}E=E.sibling}if(!h)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:t}function Jc(e){return e=Jg(e),e!==null?Zc(e):null}function Zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Zc(e);if(t!==null)return t;e=e.sibling}return null}var ed=r.unstable_scheduleCallback,td=r.unstable_cancelCallback,Zg=r.unstable_shouldYield,ey=r.unstable_requestPaint,qe=r.unstable_now,ty=r.unstable_getCurrentPriorityLevel,Fs=r.unstable_ImmediatePriority,nd=r.unstable_UserBlockingPriority,Ei=r.unstable_NormalPriority,ny=r.unstable_LowPriority,rd=r.unstable_IdlePriority,bi=null,ln=null;function ry(e){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(bi,e,void 0,(e.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:ly,oy=Math.log,iy=Math.LN2;function ly(e){return e>>>=0,e===0?32:31-(oy(e)/iy|0)|0}var Ci=64,Ai=4194304;function So(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ri(e,t){var o=e.pendingLanes;if(o===0)return 0;var s=0,u=e.suspendedLanes,d=e.pingedLanes,h=o&268435455;if(h!==0){var E=h&~u;E!==0?s=So(E):(d&=h,d!==0&&(s=So(d)))}else h=o&~u,h!==0?s=So(h):d!==0&&(s=So(d));if(s===0)return 0;if(t!==0&&t!==s&&!(t&u)&&(u=s&-s,d=t&-t,u>=d||u===16&&(d&4194240)!==0))return t;if(s&4&&(s|=o&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)o=31-Vt(t),u=1<<o,s|=e[o],t&=~u;return s}function sy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ay(e,t){for(var o=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Vt(d),E=1<<h,A=u[h];A===-1?(!(E&o)||E&s)&&(u[h]=sy(E,t)):A<=t&&(e.expiredLanes|=E),d&=~E}}function zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=Ci;return Ci<<=1,!(Ci&4194240)&&(Ci=64),e}function Bs(e){for(var t=[],o=0;31>o;o++)t.push(e);return t}function Eo(e,t,o){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Vt(t),e[t]=o}function uy(e,t){var o=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-Vt(o),d=1<<u;t[u]=0,s[u]=-1,e[u]=-1,o&=~d}}function Ms(e,t){var o=e.entangledLanes|=t;for(e=e.entanglements;o;){var s=31-Vt(o),u=1<<s;u&t|e[s]&t&&(e[s]|=t),o&=~u}}var De=0;function id(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ld,Us,sd,ad,ud,Hs=!1,$i=[],In=null,Dn=null,Ln=null,bo=new Map,Co=new Map,On=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cd(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(t.pointerId)}}function Ao(e,t,o,s,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:o,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},t!==null&&(t=Bo(t),t!==null&&Us(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function dy(e,t,o,s,u){switch(t){case"focusin":return In=Ao(In,e,t,o,s,u),!0;case"dragenter":return Dn=Ao(Dn,e,t,o,s,u),!0;case"mouseover":return Ln=Ao(Ln,e,t,o,s,u),!0;case"pointerover":var d=u.pointerId;return bo.set(d,Ao(bo.get(d)||null,e,t,o,s,u)),!0;case"gotpointercapture":return d=u.pointerId,Co.set(d,Ao(Co.get(d)||null,e,t,o,s,u)),!0}return!1}function dd(e){var t=or(e.target);if(t!==null){var o=rr(t);if(o!==null){if(t=o.tag,t===13){if(t=Yc(o),t!==null){e.blockedOn=t,ud(e.priority,function(){sd(o)});return}}else if(t===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var o=Vs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);js=s,o.target.dispatchEvent(s),js=null}else return t=Bo(o),t!==null&&Us(t),e.blockedOn=o,!1;t.shift()}return!0}function fd(e,t,o){Ti(e)&&o.delete(t)}function fy(){Hs=!1,In!==null&&Ti(In)&&(In=null),Dn!==null&&Ti(Dn)&&(Dn=null),Ln!==null&&Ti(Ln)&&(Ln=null),bo.forEach(fd),Co.forEach(fd)}function Ro(e,t){e.blockedOn===t&&(e.blockedOn=null,Hs||(Hs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,fy)))}function $o(e){function t(u){return Ro(u,e)}if(0<$i.length){Ro($i[0],e);for(var o=1;o<$i.length;o++){var s=$i[o];s.blockedOn===e&&(s.blockedOn=null)}}for(In!==null&&Ro(In,e),Dn!==null&&Ro(Dn,e),Ln!==null&&Ro(Ln,e),bo.forEach(t),Co.forEach(t),o=0;o<On.length;o++)s=On[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<On.length&&(o=On[0],o.blockedOn===null);)dd(o),o.blockedOn===null&&On.shift()}var Dr=W.ReactCurrentBatchConfig,Pi=!0;function py(e,t,o,s){var u=De,d=Dr.transition;Dr.transition=null;try{De=1,Ws(e,t,o,s)}finally{De=u,Dr.transition=d}}function hy(e,t,o,s){var u=De,d=Dr.transition;Dr.transition=null;try{De=4,Ws(e,t,o,s)}finally{De=u,Dr.transition=d}}function Ws(e,t,o,s){if(Pi){var u=Vs(e,t,o,s);if(u===null)aa(e,t,s,Ni,o),cd(e,s);else if(dy(u,e,t,o,s))s.stopPropagation();else if(cd(e,s),t&4&&-1<cy.indexOf(e)){for(;u!==null;){var d=Bo(u);if(d!==null&&ld(d),d=Vs(e,t,o,s),d===null&&aa(e,t,s,Ni,o),d===u)break;u=d}u!==null&&s.stopPropagation()}else aa(e,t,s,null,o)}}var Ni=null;function Vs(e,t,o,s){if(Ni=null,e=Is(s),e=or(e),e!==null)if(t=rr(e),t===null)e=null;else if(o=t.tag,o===13){if(e=Yc(t),e!==null)return e;e=null}else if(o===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ni=e,null}function pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ty()){case Fs:return 1;case nd:return 4;case Ei:case ny:return 16;case rd:return 536870912;default:return 16}default:return 16}}var _n=null,Qs=null,ji=null;function hd(){if(ji)return ji;var e,t=Qs,o=t.length,s,u="value"in _n?_n.value:_n.textContent,d=u.length;for(e=0;e<o&&t[e]===u[e];e++);var h=o-e;for(s=1;s<=h&&t[o-s]===u[d-s];s++);return ji=u.slice(e,1<s?1-s:void 0)}function Ii(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function md(){return!1}function Nt(e){function t(o,s,u,d,h){this._reactName=o,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Di:md,this.isPropagationStopped=md,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ks=Nt(Lr),To=Y({},Lr,{view:0,detail:0}),my=Nt(To),Gs,qs,Po,Li=Y({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Gs=e.screenX-Po.screenX,qs=e.screenY-Po.screenY):qs=Gs=0,Po=e),Gs)},movementY:function(e){return"movementY"in e?e.movementY:qs}}),gd=Nt(Li),gy=Y({},Li,{dataTransfer:0}),yy=Nt(gy),vy=Y({},To,{relatedTarget:0}),Ys=Nt(vy),wy=Y({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=Nt(wy),ky=Y({},Lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sy=Nt(ky),Ey=Y({},Lr,{data:0}),yd=Nt(Ey),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ay={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ry(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ay[e])?!!t[e]:!1}function Xs(){return Ry}var $y=Y({},To,{key:function(e){if(e.key){var t=by[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xs,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ty=Nt($y),Py=Y({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vd=Nt(Py),Ny=Y({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xs}),jy=Nt(Ny),Iy=Y({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dy=Nt(Iy),Ly=Y({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=Nt(Ly),_y=[9,13,27,32],Js=m&&"CompositionEvent"in window,No=null;m&&"documentMode"in document&&(No=document.documentMode);var Fy=m&&"TextEvent"in window&&!No,wd=m&&(!Js||No&&8<No&&11>=No),xd=" ",kd=!1;function Sd(e,t){switch(e){case"keyup":return _y.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function zy(e,t){switch(e){case"compositionend":return Ed(t);case"keypress":return t.which!==32?null:(kd=!0,xd);case"textInput":return e=t.data,e===xd&&kd?null:e;default:return null}}function By(e,t){if(Or)return e==="compositionend"||!Js&&Sd(e,t)?(e=hd(),ji=Qs=_n=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wd&&t.locale!=="ko"?null:t.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!My[e.type]:t==="textarea"}function Cd(e,t,o,s){Vc(s),t=Bi(t,"onChange"),0<t.length&&(o=new Ks("onChange","change",null,o,s),e.push({event:o,listeners:t}))}var jo=null,Io=null;function Uy(e){Hd(e,0)}function Oi(e){var t=Mr(e);if(Ee(t))return e}function Hy(e,t){if(e==="change")return t}var Ad=!1;if(m){var Zs;if(m){var ea="oninput"in document;if(!ea){var Rd=document.createElement("div");Rd.setAttribute("oninput","return;"),ea=typeof Rd.oninput=="function"}Zs=ea}else Zs=!1;Ad=Zs&&(!document.documentMode||9<document.documentMode)}function $d(){jo&&(jo.detachEvent("onpropertychange",Td),Io=jo=null)}function Td(e){if(e.propertyName==="value"&&Oi(Io)){var t=[];Cd(t,Io,e,Is(e)),qc(Uy,t)}}function Wy(e,t,o){e==="focusin"?($d(),jo=t,Io=o,jo.attachEvent("onpropertychange",Td)):e==="focusout"&&$d()}function Vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oi(Io)}function Qy(e,t){if(e==="click")return Oi(t)}function Ky(e,t){if(e==="input"||e==="change")return Oi(t)}function Gy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qt=typeof Object.is=="function"?Object.is:Gy;function Do(e,t){if(Qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var o=Object.keys(e),s=Object.keys(t);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var u=o[s];if(!p.call(t,u)||!Qt(e[u],t[u]))return!1}return!0}function Pd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var o=Pd(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=t&&s>=t)return{node:o,offset:t-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Pd(o)}}function jd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Id(){for(var e=window,t=Ie();t instanceof e.HTMLIFrameElement;){try{var o=typeof t.contentWindow.location.href=="string"}catch{o=!1}if(o)e=t.contentWindow;else break;t=Ie(e.document)}return t}function ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qy(e){var t=Id(),o=e.focusedElem,s=e.selectionRange;if(t!==o&&o&&o.ownerDocument&&jd(o.ownerDocument.documentElement,o)){if(s!==null&&ta(o)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in o)o.selectionStart=t,o.selectionEnd=Math.min(e,o.value.length);else if(e=(t=o.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,d=Math.min(s.start,u);s=s.end===void 0?d:Math.min(s.end,u),!e.extend&&d>s&&(u=s,s=d,d=u),u=Nd(o,d);var h=Nd(o,s);u&&h&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),d>s?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=o;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<t.length;o++)e=t[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yy=m&&"documentMode"in document&&11>=document.documentMode,_r=null,na=null,Lo=null,ra=!1;function Dd(e,t,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ra||_r==null||_r!==Ie(s)||(s=_r,"selectionStart"in s&&ta(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Lo&&Do(Lo,s)||(Lo=s,s=Bi(na,"onSelect"),0<s.length&&(t=new Ks("onSelect","select",null,t,o),e.push({event:t,listeners:s}),t.target=_r)))}function _i(e,t){var o={};return o[e.toLowerCase()]=t.toLowerCase(),o["Webkit"+e]="webkit"+t,o["Moz"+e]="moz"+t,o}var Fr={animationend:_i("Animation","AnimationEnd"),animationiteration:_i("Animation","AnimationIteration"),animationstart:_i("Animation","AnimationStart"),transitionend:_i("Transition","TransitionEnd")},oa={},Ld={};m&&(Ld=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function Fi(e){if(oa[e])return oa[e];if(!Fr[e])return e;var t=Fr[e],o;for(o in t)if(t.hasOwnProperty(o)&&o in Ld)return oa[e]=t[o];return e}var Od=Fi("animationend"),_d=Fi("animationiteration"),Fd=Fi("animationstart"),zd=Fi("transitionend"),Bd=new Map,Md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){Bd.set(e,t),c(t,[e])}for(var ia=0;ia<Md.length;ia++){var la=Md[ia],Xy=la.toLowerCase(),Jy=la[0].toUpperCase()+la.slice(1);Fn(Xy,"on"+Jy)}Fn(Od,"onAnimationEnd"),Fn(_d,"onAnimationIteration"),Fn(Fd,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(zd,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oo));function Ud(e,t,o){var s=e.type||"unknown-event";e.currentTarget=o,Xg(s,t,void 0,e),e.currentTarget=null}function Hd(e,t){t=(t&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],u=s.event;s=s.listeners;e:{var d=void 0;if(t)for(var h=s.length-1;0<=h;h--){var E=s[h],A=E.instance,D=E.currentTarget;if(E=E.listener,A!==d&&u.isPropagationStopped())break e;Ud(u,E,D),d=A}else for(h=0;h<s.length;h++){if(E=s[h],A=E.instance,D=E.currentTarget,E=E.listener,A!==d&&u.isPropagationStopped())break e;Ud(u,E,D),d=A}}}if(Si)throw e=_s,Si=!1,_s=null,e}function Fe(e,t){var o=t[ha];o===void 0&&(o=t[ha]=new Set);var s=e+"__bubble";o.has(s)||(Wd(t,e,2,!1),o.add(s))}function sa(e,t,o){var s=0;t&&(s|=4),Wd(o,e,s,t)}var zi="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[zi]){e[zi]=!0,l.forEach(function(o){o!=="selectionchange"&&(Zy.has(o)||sa(o,!1,e),sa(o,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zi]||(t[zi]=!0,sa("selectionchange",!1,t))}}function Wd(e,t,o,s){switch(pd(t)){case 1:var u=py;break;case 4:u=hy;break;default:u=Ws}o=u.bind(null,t,o,e),u=void 0,!Os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(t,o,{capture:!0,passive:u}):e.addEventListener(t,o,!0):u!==void 0?e.addEventListener(t,o,{passive:u}):e.addEventListener(t,o,!1)}function aa(e,t,o,s,u){var d=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var h=s.tag;if(h===3||h===4){var E=s.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(h===4)for(h=s.return;h!==null;){var A=h.tag;if((A===3||A===4)&&(A=h.stateNode.containerInfo,A===u||A.nodeType===8&&A.parentNode===u))return;h=h.return}for(;E!==null;){if(h=or(E),h===null)return;if(A=h.tag,A===5||A===6){s=d=h;continue e}E=E.parentNode}}s=s.return}qc(function(){var D=d,H=Is(o),V=[];e:{var U=Bd.get(e);if(U!==void 0){var ee=Ks,ie=e;switch(e){case"keypress":if(Ii(o)===0)break e;case"keydown":case"keyup":ee=Ty;break;case"focusin":ie="focus",ee=Ys;break;case"focusout":ie="blur",ee=Ys;break;case"beforeblur":case"afterblur":ee=Ys;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=jy;break;case Od:case _d:case Fd:ee=xy;break;case zd:ee=Dy;break;case"scroll":ee=my;break;case"wheel":ee=Oy;break;case"copy":case"cut":case"paste":ee=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=vd}var le=(t&4)!==0,Ye=!le&&e==="scroll",j=le?U!==null?U+"Capture":null:U;le=[];for(var R=D,I;R!==null;){I=R;var G=I.stateNode;if(I.tag===5&&G!==null&&(I=G,j!==null&&(G=wo(R,j),G!=null&&le.push(Fo(R,G,I)))),Ye)break;R=R.return}0<le.length&&(U=new ee(U,ie,null,o,H),V.push({event:U,listeners:le}))}}if(!(t&7)){e:{if(U=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",U&&o!==js&&(ie=o.relatedTarget||o.fromElement)&&(or(ie)||ie[kn]))break e;if((ee||U)&&(U=H.window===H?H:(U=H.ownerDocument)?U.defaultView||U.parentWindow:window,ee?(ie=o.relatedTarget||o.toElement,ee=D,ie=ie?or(ie):null,ie!==null&&(Ye=rr(ie),ie!==Ye||ie.tag!==5&&ie.tag!==6)&&(ie=null)):(ee=null,ie=D),ee!==ie)){if(le=gd,G="onMouseLeave",j="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(le=vd,G="onPointerLeave",j="onPointerEnter",R="pointer"),Ye=ee==null?U:Mr(ee),I=ie==null?U:Mr(ie),U=new le(G,R+"leave",ee,o,H),U.target=Ye,U.relatedTarget=I,G=null,or(H)===D&&(le=new le(j,R+"enter",ie,o,H),le.target=I,le.relatedTarget=Ye,G=le),Ye=G,ee&&ie)t:{for(le=ee,j=ie,R=0,I=le;I;I=zr(I))R++;for(I=0,G=j;G;G=zr(G))I++;for(;0<R-I;)le=zr(le),R--;for(;0<I-R;)j=zr(j),I--;for(;R--;){if(le===j||j!==null&&le===j.alternate)break t;le=zr(le),j=zr(j)}le=null}else le=null;ee!==null&&Vd(V,U,ee,le,!1),ie!==null&&Ye!==null&&Vd(V,Ye,ie,le,!0)}}e:{if(U=D?Mr(D):window,ee=U.nodeName&&U.nodeName.toLowerCase(),ee==="select"||ee==="input"&&U.type==="file")var ae=Hy;else if(bd(U))if(Ad)ae=Ky;else{ae=Vy;var ce=Wy}else(ee=U.nodeName)&&ee.toLowerCase()==="input"&&(U.type==="checkbox"||U.type==="radio")&&(ae=Qy);if(ae&&(ae=ae(e,D))){Cd(V,ae,o,H);break e}ce&&ce(e,U,D),e==="focusout"&&(ce=U._wrapperState)&&ce.controlled&&U.type==="number"&&_t(U,"number",U.value)}switch(ce=D?Mr(D):window,e){case"focusin":(bd(ce)||ce.contentEditable==="true")&&(_r=ce,na=D,Lo=null);break;case"focusout":Lo=na=_r=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Dd(V,o,H);break;case"selectionchange":if(Yy)break;case"keydown":case"keyup":Dd(V,o,H)}var de;if(Js)e:{switch(e){case"compositionstart":var me="onCompositionStart";break e;case"compositionend":me="onCompositionEnd";break e;case"compositionupdate":me="onCompositionUpdate";break e}me=void 0}else Or?Sd(e,o)&&(me="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(me="onCompositionStart");me&&(wd&&o.locale!=="ko"&&(Or||me!=="onCompositionStart"?me==="onCompositionEnd"&&Or&&(de=hd()):(_n=H,Qs="value"in _n?_n.value:_n.textContent,Or=!0)),ce=Bi(D,me),0<ce.length&&(me=new yd(me,e,null,o,H),V.push({event:me,listeners:ce}),de?me.data=de:(de=Ed(o),de!==null&&(me.data=de)))),(de=Fy?zy(e,o):By(e,o))&&(D=Bi(D,"onBeforeInput"),0<D.length&&(H=new yd("onBeforeInput","beforeinput",null,o,H),V.push({event:H,listeners:D}),H.data=de))}Hd(V,t)})}function Fo(e,t,o){return{instance:e,listener:t,currentTarget:o}}function Bi(e,t){for(var o=t+"Capture",s=[];e!==null;){var u=e,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=wo(e,o),d!=null&&s.unshift(Fo(e,d,u)),d=wo(e,t),d!=null&&s.push(Fo(e,d,u))),e=e.return}return s}function zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vd(e,t,o,s,u){for(var d=t._reactName,h=[];o!==null&&o!==s;){var E=o,A=E.alternate,D=E.stateNode;if(A!==null&&A===s)break;E.tag===5&&D!==null&&(E=D,u?(A=wo(o,d),A!=null&&h.unshift(Fo(o,A,E))):u||(A=wo(o,d),A!=null&&h.push(Fo(o,A,E)))),o=o.return}h.length!==0&&e.push({event:t,listeners:h})}var e0=/\r\n?/g,t0=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(e0,`
`).replace(t0,"")}function Mi(e,t,o){if(t=Qd(t),Qd(e)!==t&&o)throw Error(i(425))}function Ui(){}var ua=null,ca=null;function da(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,r0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(e){return Kd.resolve(null).then(e).catch(o0)}:fa;function o0(e){setTimeout(function(){throw e})}function pa(e,t){var o=t,s=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(s===0){e.removeChild(u),$o(t);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=u}while(o);$o(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(t===0)return e;t--}else o==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),sn="__reactFiber$"+Br,zo="__reactProps$"+Br,kn="__reactContainer$"+Br,ha="__reactEvents$"+Br,i0="__reactListeners$"+Br,l0="__reactHandles$"+Br;function or(e){var t=e[sn];if(t)return t;for(var o=e.parentNode;o;){if(t=o[kn]||o[sn]){if(o=t.alternate,t.child!==null||o!==null&&o.child!==null)for(e=Gd(e);e!==null;){if(o=e[sn])return o;e=Gd(e)}return t}e=o,o=e.parentNode}return null}function Bo(e){return e=e[sn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Hi(e){return e[zo]||null}var ma=[],Ur=-1;function Bn(e){return{current:e}}function ze(e){0>Ur||(e.current=ma[Ur],ma[Ur]=null,Ur--)}function _e(e,t){Ur++,ma[Ur]=e.current,e.current=t}var Mn={},ft=Bn(Mn),St=Bn(!1),ir=Mn;function Hr(e,t){var o=e.type.contextTypes;if(!o)return Mn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in o)u[d]=t[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function Et(e){return e=e.childContextTypes,e!=null}function Wi(){ze(St),ze(ft)}function qd(e,t,o){if(ft.current!==Mn)throw Error(i(168));_e(ft,t),_e(St,o)}function Yd(e,t,o){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var u in s)if(!(u in t))throw Error(i(108,se(e)||"Unknown",u));return Y({},o,s)}function Vi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,ir=ft.current,_e(ft,e),_e(St,St.current),!0}function Xd(e,t,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=Yd(e,t,ir),s.__reactInternalMemoizedMergedChildContext=e,ze(St),ze(ft),_e(ft,e)):ze(St),_e(St,o)}var Sn=null,Qi=!1,ga=!1;function Jd(e){Sn===null?Sn=[e]:Sn.push(e)}function s0(e){Qi=!0,Jd(e)}function Un(){if(!ga&&Sn!==null){ga=!0;var e=0,t=De;try{var o=Sn;for(De=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}Sn=null,Qi=!1}catch(u){throw Sn!==null&&(Sn=Sn.slice(e+1)),ed(Fs,Un),u}finally{De=t,ga=!1}}return null}var Wr=[],Vr=0,Ki=null,Gi=0,Ft=[],zt=0,lr=null,En=1,bn="";function sr(e,t){Wr[Vr++]=Gi,Wr[Vr++]=Ki,Ki=e,Gi=t}function Zd(e,t,o){Ft[zt++]=En,Ft[zt++]=bn,Ft[zt++]=lr,lr=e;var s=En;e=bn;var u=32-Vt(s)-1;s&=~(1<<u),o+=1;var d=32-Vt(t)+u;if(30<d){var h=u-u%5;d=(s&(1<<h)-1).toString(32),s>>=h,u-=h,En=1<<32-Vt(t)+u|o<<u|s,bn=d+e}else En=1<<d|o<<u|s,bn=e}function ya(e){e.return!==null&&(sr(e,1),Zd(e,1,0))}function va(e){for(;e===Ki;)Ki=Wr[--Vr],Wr[Vr]=null,Gi=Wr[--Vr],Wr[Vr]=null;for(;e===lr;)lr=Ft[--zt],Ft[zt]=null,bn=Ft[--zt],Ft[zt]=null,En=Ft[--zt],Ft[zt]=null}var jt=null,It=null,Me=!1,Kt=null;function ef(e,t){var o=Ht(5,null,null,0);o.elementType="DELETED",o.stateNode=t,o.return=e,t=e.deletions,t===null?(e.deletions=[o],e.flags|=16):t.push(o)}function tf(e,t){switch(e.tag){case 5:var o=e.type;return t=t.nodeType!==1||o.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,jt=e,It=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,jt=e,It=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(o=lr!==null?{id:En,overflow:bn}:null,e.memoizedState={dehydrated:t,treeContext:o,retryLane:1073741824},o=Ht(18,null,null,0),o.stateNode=t,o.return=e,e.child=o,jt=e,It=null,!0):!1;default:return!1}}function wa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xa(e){if(Me){var t=It;if(t){var o=t;if(!tf(e,t)){if(wa(e))throw Error(i(418));t=zn(o.nextSibling);var s=jt;t&&tf(e,t)?ef(s,o):(e.flags=e.flags&-4097|2,Me=!1,jt=e)}}else{if(wa(e))throw Error(i(418));e.flags=e.flags&-4097|2,Me=!1,jt=e}}}function nf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;jt=e}function qi(e){if(e!==jt)return!1;if(!Me)return nf(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!da(e.type,e.memoizedProps)),t&&(t=It)){if(wa(e))throw rf(),Error(i(418));for(;t;)ef(e,t),t=zn(t.nextSibling)}if(nf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(t===0){It=zn(e.nextSibling);break e}t--}else o!=="$"&&o!=="$!"&&o!=="$?"||t++}e=e.nextSibling}It=null}}else It=jt?zn(e.stateNode.nextSibling):null;return!0}function rf(){for(var e=It;e;)e=zn(e.nextSibling)}function Qr(){It=jt=null,Me=!1}function ka(e){Kt===null?Kt=[e]:Kt.push(e)}var a0=W.ReactCurrentBatchConfig;function Mo(e,t,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var u=s,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var E=u.refs;h===null?delete E[d]:E[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function of(e){var t=e._init;return t(e._payload)}function lf(e){function t(j,R){if(e){var I=j.deletions;I===null?(j.deletions=[R],j.flags|=16):I.push(R)}}function o(j,R){if(!e)return null;for(;R!==null;)t(j,R),R=R.sibling;return null}function s(j,R){for(j=new Map;R!==null;)R.key!==null?j.set(R.key,R):j.set(R.index,R),R=R.sibling;return j}function u(j,R){return j=Yn(j,R),j.index=0,j.sibling=null,j}function d(j,R,I){return j.index=I,e?(I=j.alternate,I!==null?(I=I.index,I<R?(j.flags|=2,R):I):(j.flags|=2,R)):(j.flags|=1048576,R)}function h(j){return e&&j.alternate===null&&(j.flags|=2),j}function E(j,R,I,G){return R===null||R.tag!==6?(R=fu(I,j.mode,G),R.return=j,R):(R=u(R,I),R.return=j,R)}function A(j,R,I,G){var ae=I.type;return ae===q?H(j,R,I.props.children,G,I.key):R!==null&&(R.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ne&&of(ae)===R.type)?(G=u(R,I.props),G.ref=Mo(j,R,I),G.return=j,G):(G=xl(I.type,I.key,I.props,null,j.mode,G),G.ref=Mo(j,R,I),G.return=j,G)}function D(j,R,I,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==I.containerInfo||R.stateNode.implementation!==I.implementation?(R=pu(I,j.mode,G),R.return=j,R):(R=u(R,I.children||[]),R.return=j,R)}function H(j,R,I,G,ae){return R===null||R.tag!==7?(R=mr(I,j.mode,G,ae),R.return=j,R):(R=u(R,I),R.return=j,R)}function V(j,R,I){if(typeof R=="string"&&R!==""||typeof R=="number")return R=fu(""+R,j.mode,I),R.return=j,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Q:return I=xl(R.type,R.key,R.props,null,j.mode,I),I.ref=Mo(j,null,R),I.return=j,I;case K:return R=pu(R,j.mode,I),R.return=j,R;case Ne:var G=R._init;return V(j,G(R._payload),I)}if(wn(R)||J(R))return R=mr(R,j.mode,I,null),R.return=j,R;Yi(j,R)}return null}function U(j,R,I,G){var ae=R!==null?R.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ae!==null?null:E(j,R,""+I,G);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:return I.key===ae?A(j,R,I,G):null;case K:return I.key===ae?D(j,R,I,G):null;case Ne:return ae=I._init,U(j,R,ae(I._payload),G)}if(wn(I)||J(I))return ae!==null?null:H(j,R,I,G,null);Yi(j,I)}return null}function ee(j,R,I,G,ae){if(typeof G=="string"&&G!==""||typeof G=="number")return j=j.get(I)||null,E(R,j,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case Q:return j=j.get(G.key===null?I:G.key)||null,A(R,j,G,ae);case K:return j=j.get(G.key===null?I:G.key)||null,D(R,j,G,ae);case Ne:var ce=G._init;return ee(j,R,I,ce(G._payload),ae)}if(wn(G)||J(G))return j=j.get(I)||null,H(R,j,G,ae,null);Yi(R,G)}return null}function ie(j,R,I,G){for(var ae=null,ce=null,de=R,me=R=0,ot=null;de!==null&&me<I.length;me++){de.index>me?(ot=de,de=null):ot=de.sibling;var $e=U(j,de,I[me],G);if($e===null){de===null&&(de=ot);break}e&&de&&$e.alternate===null&&t(j,de),R=d($e,R,me),ce===null?ae=$e:ce.sibling=$e,ce=$e,de=ot}if(me===I.length)return o(j,de),Me&&sr(j,me),ae;if(de===null){for(;me<I.length;me++)de=V(j,I[me],G),de!==null&&(R=d(de,R,me),ce===null?ae=de:ce.sibling=de,ce=de);return Me&&sr(j,me),ae}for(de=s(j,de);me<I.length;me++)ot=ee(de,j,me,I[me],G),ot!==null&&(e&&ot.alternate!==null&&de.delete(ot.key===null?me:ot.key),R=d(ot,R,me),ce===null?ae=ot:ce.sibling=ot,ce=ot);return e&&de.forEach(function(Xn){return t(j,Xn)}),Me&&sr(j,me),ae}function le(j,R,I,G){var ae=J(I);if(typeof ae!="function")throw Error(i(150));if(I=ae.call(I),I==null)throw Error(i(151));for(var ce=ae=null,de=R,me=R=0,ot=null,$e=I.next();de!==null&&!$e.done;me++,$e=I.next()){de.index>me?(ot=de,de=null):ot=de.sibling;var Xn=U(j,de,$e.value,G);if(Xn===null){de===null&&(de=ot);break}e&&de&&Xn.alternate===null&&t(j,de),R=d(Xn,R,me),ce===null?ae=Xn:ce.sibling=Xn,ce=Xn,de=ot}if($e.done)return o(j,de),Me&&sr(j,me),ae;if(de===null){for(;!$e.done;me++,$e=I.next())$e=V(j,$e.value,G),$e!==null&&(R=d($e,R,me),ce===null?ae=$e:ce.sibling=$e,ce=$e);return Me&&sr(j,me),ae}for(de=s(j,de);!$e.done;me++,$e=I.next())$e=ee(de,j,me,$e.value,G),$e!==null&&(e&&$e.alternate!==null&&de.delete($e.key===null?me:$e.key),R=d($e,R,me),ce===null?ae=$e:ce.sibling=$e,ce=$e);return e&&de.forEach(function(B0){return t(j,B0)}),Me&&sr(j,me),ae}function Ye(j,R,I,G){if(typeof I=="object"&&I!==null&&I.type===q&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:e:{for(var ae=I.key,ce=R;ce!==null;){if(ce.key===ae){if(ae=I.type,ae===q){if(ce.tag===7){o(j,ce.sibling),R=u(ce,I.props.children),R.return=j,j=R;break e}}else if(ce.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===Ne&&of(ae)===ce.type){o(j,ce.sibling),R=u(ce,I.props),R.ref=Mo(j,ce,I),R.return=j,j=R;break e}o(j,ce);break}else t(j,ce);ce=ce.sibling}I.type===q?(R=mr(I.props.children,j.mode,G,I.key),R.return=j,j=R):(G=xl(I.type,I.key,I.props,null,j.mode,G),G.ref=Mo(j,R,I),G.return=j,j=G)}return h(j);case K:e:{for(ce=I.key;R!==null;){if(R.key===ce)if(R.tag===4&&R.stateNode.containerInfo===I.containerInfo&&R.stateNode.implementation===I.implementation){o(j,R.sibling),R=u(R,I.children||[]),R.return=j,j=R;break e}else{o(j,R);break}else t(j,R);R=R.sibling}R=pu(I,j.mode,G),R.return=j,j=R}return h(j);case Ne:return ce=I._init,Ye(j,R,ce(I._payload),G)}if(wn(I))return ie(j,R,I,G);if(J(I))return le(j,R,I,G);Yi(j,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,R!==null&&R.tag===6?(o(j,R.sibling),R=u(R,I),R.return=j,j=R):(o(j,R),R=fu(I,j.mode,G),R.return=j,j=R),h(j)):o(j,R)}return Ye}var Kr=lf(!0),sf=lf(!1),Xi=Bn(null),Ji=null,Gr=null,Sa=null;function Ea(){Sa=Gr=Ji=null}function ba(e){var t=Xi.current;ze(Xi),e._currentValue=t}function Ca(e,t,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===o)break;e=e.return}}function qr(e,t){Ji=e,Sa=Gr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(bt=!0),e.firstContext=null)}function Bt(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},Gr===null){if(Ji===null)throw Error(i(308));Gr=e,Ji.dependencies={lanes:0,firstContext:e}}else Gr=Gr.next=e;return t}var ar=null;function Aa(e){ar===null?ar=[e]:ar.push(e)}function af(e,t,o,s){var u=t.interleaved;return u===null?(o.next=o,Aa(t)):(o.next=u.next,u.next=o),t.interleaved=o,Cn(e,s)}function Cn(e,t){e.lanes|=t;var o=e.alternate;for(o!==null&&(o.lanes|=t),o=e,e=e.return;e!==null;)e.childLanes|=t,o=e.alternate,o!==null&&(o.childLanes|=t),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Hn=!1;function Ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wn(e,t,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ae&2){var u=s.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),s.pending=t,Cn(e,o)}return u=s.interleaved,u===null?(t.next=t,Aa(s)):(t.next=u.next,u.next=t),s.interleaved=t,Cn(e,o)}function Zi(e,t,o){if(t=t.updateQueue,t!==null&&(t=t.shared,(o&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,o|=s,t.lanes=o,Ms(e,o)}}function cf(e,t){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var u=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var h={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};d===null?u=d=h:d=d.next=h,o=o.next}while(o!==null);d===null?u=d=t:d=d.next=t}else u=d=t;o={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=t:e.next=t,o.lastBaseUpdate=t}function el(e,t,o,s){var u=e.updateQueue;Hn=!1;var d=u.firstBaseUpdate,h=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var A=E,D=A.next;A.next=null,h===null?d=D:h.next=D,h=A;var H=e.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==h&&(E===null?H.firstBaseUpdate=D:E.next=D,H.lastBaseUpdate=A))}if(d!==null){var V=u.baseState;h=0,H=D=A=null,E=d;do{var U=E.lane,ee=E.eventTime;if((s&U)===U){H!==null&&(H=H.next={eventTime:ee,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var ie=e,le=E;switch(U=t,ee=o,le.tag){case 1:if(ie=le.payload,typeof ie=="function"){V=ie.call(ee,V,U);break e}V=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=le.payload,U=typeof ie=="function"?ie.call(ee,V,U):ie,U==null)break e;V=Y({},V,U);break e;case 2:Hn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,U=u.effects,U===null?u.effects=[E]:U.push(E))}else ee={eventTime:ee,lane:U,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(D=H=ee,A=V):H=H.next=ee,h|=U;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;U=E,E=U.next,U.next=null,u.lastBaseUpdate=U,u.shared.pending=null}}while(!0);if(H===null&&(A=V),u.baseState=A,u.firstBaseUpdate=D,u.lastBaseUpdate=H,t=u.shared.interleaved,t!==null){u=t;do h|=u.lane,u=u.next;while(u!==t)}else d===null&&(u.shared.lanes=0);dr|=h,e.lanes=h,e.memoizedState=V}}function df(e,t,o){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],u=s.callback;if(u!==null){if(s.callback=null,s=o,typeof u!="function")throw Error(i(191,u));u.call(s)}}}var Uo={},an=Bn(Uo),Ho=Bn(Uo),Wo=Bn(Uo);function ur(e){if(e===Uo)throw Error(i(174));return e}function $a(e,t){switch(_e(Wo,t),_e(Ho,e),_e(an,Uo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ts(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ts(t,e)}ze(an),_e(an,t)}function Yr(){ze(an),ze(Ho),ze(Wo)}function ff(e){ur(Wo.current);var t=ur(an.current),o=Ts(t,e.type);t!==o&&(_e(Ho,e),_e(an,o))}function Ta(e){Ho.current===e&&(ze(an),ze(Ho))}var Ue=Bn(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var o=t.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pa=[];function Na(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var nl=W.ReactCurrentDispatcher,ja=W.ReactCurrentBatchConfig,cr=0,He=null,et=null,nt=null,rl=!1,Vo=!1,Qo=0,u0=0;function pt(){throw Error(i(321))}function Ia(e,t){if(t===null)return!1;for(var o=0;o<t.length&&o<e.length;o++)if(!Qt(e[o],t[o]))return!1;return!0}function Da(e,t,o,s,u,d){if(cr=d,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nl.current=e===null||e.memoizedState===null?p0:h0,e=o(s,u),Vo){d=0;do{if(Vo=!1,Qo=0,25<=d)throw Error(i(301));d+=1,nt=et=null,t.updateQueue=null,nl.current=m0,e=o(s,u)}while(Vo)}if(nl.current=ll,t=et!==null&&et.next!==null,cr=0,nt=et=He=null,rl=!1,t)throw Error(i(300));return e}function La(){var e=Qo!==0;return Qo=0,e}function un(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?He.memoizedState=nt=e:nt=nt.next=e,nt}function Mt(){if(et===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=et.next;var t=nt===null?He.memoizedState:nt.next;if(t!==null)nt=t,et=e;else{if(e===null)throw Error(i(310));et=e,e={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},nt===null?He.memoizedState=nt=e:nt=nt.next=e}return nt}function Ko(e,t){return typeof t=="function"?t(e):t}function Oa(e){var t=Mt(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=et,u=s.baseQueue,d=o.pending;if(d!==null){if(u!==null){var h=u.next;u.next=d.next,d.next=h}s.baseQueue=u=d,o.pending=null}if(u!==null){d=u.next,s=s.baseState;var E=h=null,A=null,D=d;do{var H=D.lane;if((cr&H)===H)A!==null&&(A=A.next={lane:0,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),s=D.hasEagerState?D.eagerState:e(s,D.action);else{var V={lane:H,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null};A===null?(E=A=V,h=s):A=A.next=V,He.lanes|=H,dr|=H}D=D.next}while(D!==null&&D!==d);A===null?h=s:A.next=E,Qt(s,t.memoizedState)||(bt=!0),t.memoizedState=s,t.baseState=h,t.baseQueue=A,o.lastRenderedState=s}if(e=o.interleaved,e!==null){u=e;do d=u.lane,He.lanes|=d,dr|=d,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[t.memoizedState,o.dispatch]}function _a(e){var t=Mt(),o=t.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,u=o.pending,d=t.memoizedState;if(u!==null){o.pending=null;var h=u=u.next;do d=e(d,h.action),h=h.next;while(h!==u);Qt(d,t.memoizedState)||(bt=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),o.lastRenderedState=d}return[d,s]}function pf(){}function hf(e,t){var o=He,s=Mt(),u=t(),d=!Qt(s.memoizedState,u);if(d&&(s.memoizedState=u,bt=!0),s=s.queue,Fa(yf.bind(null,o,s,e),[e]),s.getSnapshot!==t||d||nt!==null&&nt.memoizedState.tag&1){if(o.flags|=2048,Go(9,gf.bind(null,o,s,u,t),void 0,null),rt===null)throw Error(i(349));cr&30||mf(o,t,u)}return u}function mf(e,t,o){e.flags|=16384,e={getSnapshot:t,value:o},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(o=t.stores,o===null?t.stores=[e]:o.push(e))}function gf(e,t,o,s){t.value=o,t.getSnapshot=s,vf(t)&&wf(e)}function yf(e,t,o){return o(function(){vf(t)&&wf(e)})}function vf(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!Qt(e,o)}catch{return!0}}function wf(e){var t=Cn(e,1);t!==null&&Xt(t,e,1,-1)}function xf(e){var t=un();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=e,e=e.dispatch=f0.bind(null,He,e),[t.memoizedState,e]}function Go(e,t,o,s){return e={tag:e,create:t,destroy:o,deps:s,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(o=t.lastEffect,o===null?t.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,t.lastEffect=e)),e}function kf(){return Mt().memoizedState}function ol(e,t,o,s){var u=un();He.flags|=e,u.memoizedState=Go(1|t,o,void 0,s===void 0?null:s)}function il(e,t,o,s){var u=Mt();s=s===void 0?null:s;var d=void 0;if(et!==null){var h=et.memoizedState;if(d=h.destroy,s!==null&&Ia(s,h.deps)){u.memoizedState=Go(t,o,d,s);return}}He.flags|=e,u.memoizedState=Go(1|t,o,d,s)}function Sf(e,t){return ol(8390656,8,e,t)}function Fa(e,t){return il(2048,8,e,t)}function Ef(e,t){return il(4,2,e,t)}function bf(e,t){return il(4,4,e,t)}function Cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Af(e,t,o){return o=o!=null?o.concat([e]):null,il(4,4,Cf.bind(null,t,e),o)}function za(){}function Rf(e,t){var o=Mt();t=t===void 0?null:t;var s=o.memoizedState;return s!==null&&t!==null&&Ia(t,s[1])?s[0]:(o.memoizedState=[e,t],e)}function $f(e,t){var o=Mt();t=t===void 0?null:t;var s=o.memoizedState;return s!==null&&t!==null&&Ia(t,s[1])?s[0]:(e=e(),o.memoizedState=[e,t],e)}function Tf(e,t,o){return cr&21?(Qt(o,t)||(o=od(),He.lanes|=o,dr|=o,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,bt=!0),e.memoizedState=o)}function c0(e,t){var o=De;De=o!==0&&4>o?o:4,e(!0);var s=ja.transition;ja.transition={};try{e(!1),t()}finally{De=o,ja.transition=s}}function Pf(){return Mt().memoizedState}function d0(e,t,o){var s=Gn(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},Nf(e))jf(t,o);else if(o=af(e,t,o,s),o!==null){var u=wt();Xt(o,e,s,u),If(o,t,s)}}function f0(e,t,o){var s=Gn(e),u={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(Nf(e))jf(t,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,E=d(h,o);if(u.hasEagerState=!0,u.eagerState=E,Qt(E,h)){var A=t.interleaved;A===null?(u.next=u,Aa(t)):(u.next=A.next,A.next=u),t.interleaved=u;return}}catch{}finally{}o=af(e,t,u,s),o!==null&&(u=wt(),Xt(o,e,s,u),If(o,t,s))}}function Nf(e){var t=e.alternate;return e===He||t!==null&&t===He}function jf(e,t){Vo=rl=!0;var o=e.pending;o===null?t.next=t:(t.next=o.next,o.next=t),e.pending=t}function If(e,t,o){if(o&4194240){var s=t.lanes;s&=e.pendingLanes,o|=s,t.lanes=o,Ms(e,o)}}var ll={readContext:Bt,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},p0={readContext:Bt,useCallback:function(e,t){return un().memoizedState=[e,t===void 0?null:t],e},useContext:Bt,useEffect:Sf,useImperativeHandle:function(e,t,o){return o=o!=null?o.concat([e]):null,ol(4194308,4,Cf.bind(null,t,e),o)},useLayoutEffect:function(e,t){return ol(4194308,4,e,t)},useInsertionEffect:function(e,t){return ol(4,2,e,t)},useMemo:function(e,t){var o=un();return t=t===void 0?null:t,e=e(),o.memoizedState=[e,t],e},useReducer:function(e,t,o){var s=un();return t=o!==void 0?o(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=d0.bind(null,He,e),[s.memoizedState,e]},useRef:function(e){var t=un();return e={current:e},t.memoizedState=e},useState:xf,useDebugValue:za,useDeferredValue:function(e){return un().memoizedState=e},useTransition:function(){var e=xf(!1),t=e[0];return e=c0.bind(null,e[1]),un().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,o){var s=He,u=un();if(Me){if(o===void 0)throw Error(i(407));o=o()}else{if(o=t(),rt===null)throw Error(i(349));cr&30||mf(s,t,o)}u.memoizedState=o;var d={value:o,getSnapshot:t};return u.queue=d,Sf(yf.bind(null,s,d,e),[e]),s.flags|=2048,Go(9,gf.bind(null,s,d,o,t),void 0,null),o},useId:function(){var e=un(),t=rt.identifierPrefix;if(Me){var o=bn,s=En;o=(s&~(1<<32-Vt(s)-1)).toString(32)+o,t=":"+t+"R"+o,o=Qo++,0<o&&(t+="H"+o.toString(32)),t+=":"}else o=u0++,t=":"+t+"r"+o.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h0={readContext:Bt,useCallback:Rf,useContext:Bt,useEffect:Fa,useImperativeHandle:Af,useInsertionEffect:Ef,useLayoutEffect:bf,useMemo:$f,useReducer:Oa,useRef:kf,useState:function(){return Oa(Ko)},useDebugValue:za,useDeferredValue:function(e){var t=Mt();return Tf(t,et.memoizedState,e)},useTransition:function(){var e=Oa(Ko)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:hf,useId:Pf,unstable_isNewReconciler:!1},m0={readContext:Bt,useCallback:Rf,useContext:Bt,useEffect:Fa,useImperativeHandle:Af,useInsertionEffect:Ef,useLayoutEffect:bf,useMemo:$f,useReducer:_a,useRef:kf,useState:function(){return _a(Ko)},useDebugValue:za,useDeferredValue:function(e){var t=Mt();return et===null?t.memoizedState=e:Tf(t,et.memoizedState,e)},useTransition:function(){var e=_a(Ko)[0],t=Mt().memoizedState;return[e,t]},useMutableSource:pf,useSyncExternalStore:hf,useId:Pf,unstable_isNewReconciler:!1};function Gt(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var o in e)t[o]===void 0&&(t[o]=e[o]);return t}return t}function Ba(e,t,o,s){t=e.memoizedState,o=o(s,t),o=o==null?t:Y({},t,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var sl={isMounted:function(e){return(e=e._reactInternals)?rr(e)===e:!1},enqueueSetState:function(e,t,o){e=e._reactInternals;var s=wt(),u=Gn(e),d=An(s,u);d.payload=t,o!=null&&(d.callback=o),t=Wn(e,d,u),t!==null&&(Xt(t,e,u,s),Zi(t,e,u))},enqueueReplaceState:function(e,t,o){e=e._reactInternals;var s=wt(),u=Gn(e),d=An(s,u);d.tag=1,d.payload=t,o!=null&&(d.callback=o),t=Wn(e,d,u),t!==null&&(Xt(t,e,u,s),Zi(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var o=wt(),s=Gn(e),u=An(o,s);u.tag=2,t!=null&&(u.callback=t),t=Wn(e,u,s),t!==null&&(Xt(t,e,s,o),Zi(t,e,s))}};function Df(e,t,o,s,u,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,h):t.prototype&&t.prototype.isPureReactComponent?!Do(o,s)||!Do(u,d):!0}function Lf(e,t,o){var s=!1,u=Mn,d=t.contextType;return typeof d=="object"&&d!==null?d=Bt(d):(u=Et(t)?ir:ft.current,s=t.contextTypes,d=(s=s!=null)?Hr(e,u):Mn),t=new t(o,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=sl,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),t}function Of(e,t,o,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(o,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(o,s),t.state!==e&&sl.enqueueReplaceState(t,t.state,null)}function Ma(e,t,o,s){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},Ra(e);var d=t.contextType;typeof d=="object"&&d!==null?u.context=Bt(d):(d=Et(t)?ir:ft.current,u.context=Hr(e,d)),u.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Ba(e,t,d,o),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&sl.enqueueReplaceState(u,u.state,null),el(e,o,u,s),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Xr(e,t){try{var o="",s=t;do o+=oe(s),s=s.return;while(s);var u=o}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:u,digest:null}}function Ua(e,t,o){return{value:e,source:null,stack:o??null,digest:t??null}}function Ha(e,t){try{console.error(t.value)}catch(o){setTimeout(function(){throw o})}}var g0=typeof WeakMap=="function"?WeakMap:Map;function _f(e,t,o){o=An(-1,o),o.tag=3,o.payload={element:null};var s=t.value;return o.callback=function(){hl||(hl=!0,ou=s),Ha(e,t)},o}function Ff(e,t,o){o=An(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var u=t.value;o.payload=function(){return s(u)},o.callback=function(){Ha(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(o.callback=function(){Ha(e,t),typeof s!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),o}function zf(e,t,o){var s=e.pingCache;if(s===null){s=e.pingCache=new g0;var u=new Set;s.set(t,u)}else u=s.get(t),u===void 0&&(u=new Set,s.set(t,u));u.has(o)||(u.add(o),e=P0.bind(null,e,t,o),t.then(e,e))}function Bf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mf(e,t,o,s,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===t?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(t=An(-1,1),t.tag=2,Wn(o,t,1))),o.lanes|=1),e)}var y0=W.ReactCurrentOwner,bt=!1;function vt(e,t,o,s){t.child=e===null?sf(t,null,o,s):Kr(t,e.child,o,s)}function Uf(e,t,o,s,u){o=o.render;var d=t.ref;return qr(t,u),s=Da(e,t,o,s,d,u),o=La(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Rn(e,t,u)):(Me&&o&&ya(t),t.flags|=1,vt(e,t,s,u),t.child)}function Hf(e,t,o,s,u){if(e===null){var d=o.type;return typeof d=="function"&&!du(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(t.tag=15,t.type=d,Wf(e,t,d,s,u)):(e=xl(o.type,null,s,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!(e.lanes&u)){var h=d.memoizedProps;if(o=o.compare,o=o!==null?o:Do,o(h,s)&&e.ref===t.ref)return Rn(e,t,u)}return t.flags|=1,e=Yn(d,s),e.ref=t.ref,e.return=t,t.child=e}function Wf(e,t,o,s,u){if(e!==null){var d=e.memoizedProps;if(Do(d,s)&&e.ref===t.ref)if(bt=!1,t.pendingProps=s=d,(e.lanes&u)!==0)e.flags&131072&&(bt=!0);else return t.lanes=e.lanes,Rn(e,t,u)}return Wa(e,t,o,s,u)}function Vf(e,t,o){var s=t.pendingProps,u=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Zr,Dt),Dt|=o;else{if(!(o&1073741824))return e=d!==null?d.baseLanes|o:o,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,_e(Zr,Dt),Dt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:o,_e(Zr,Dt),Dt|=s}else d!==null?(s=d.baseLanes|o,t.memoizedState=null):s=o,_e(Zr,Dt),Dt|=s;return vt(e,t,u,o),t.child}function Qf(e,t){var o=t.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(t.flags|=512,t.flags|=2097152)}function Wa(e,t,o,s,u){var d=Et(o)?ir:ft.current;return d=Hr(t,d),qr(t,u),o=Da(e,t,o,s,d,u),s=La(),e!==null&&!bt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,Rn(e,t,u)):(Me&&s&&ya(t),t.flags|=1,vt(e,t,o,u),t.child)}function Kf(e,t,o,s,u){if(Et(o)){var d=!0;Vi(t)}else d=!1;if(qr(t,u),t.stateNode===null)ul(e,t),Lf(t,o,s),Ma(t,o,s,u),s=!0;else if(e===null){var h=t.stateNode,E=t.memoizedProps;h.props=E;var A=h.context,D=o.contextType;typeof D=="object"&&D!==null?D=Bt(D):(D=Et(o)?ir:ft.current,D=Hr(t,D));var H=o.getDerivedStateFromProps,V=typeof H=="function"||typeof h.getSnapshotBeforeUpdate=="function";V||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==s||A!==D)&&Of(t,h,s,D),Hn=!1;var U=t.memoizedState;h.state=U,el(t,s,h,u),A=t.memoizedState,E!==s||U!==A||St.current||Hn?(typeof H=="function"&&(Ba(t,o,H,s),A=t.memoizedState),(E=Hn||Df(t,o,E,s,U,A,D))?(V||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=A),h.props=s,h.state=A,h.context=D,s=E):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{h=t.stateNode,uf(e,t),E=t.memoizedProps,D=t.type===t.elementType?E:Gt(t.type,E),h.props=D,V=t.pendingProps,U=h.context,A=o.contextType,typeof A=="object"&&A!==null?A=Bt(A):(A=Et(o)?ir:ft.current,A=Hr(t,A));var ee=o.getDerivedStateFromProps;(H=typeof ee=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==V||U!==A)&&Of(t,h,s,A),Hn=!1,U=t.memoizedState,h.state=U,el(t,s,h,u);var ie=t.memoizedState;E!==V||U!==ie||St.current||Hn?(typeof ee=="function"&&(Ba(t,o,ee,s),ie=t.memoizedState),(D=Hn||Df(t,o,D,s,U,ie,A)||!1)?(H||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,ie,A),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,ie,A)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ie),h.props=s,h.state=ie,h.context=A,s=D):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&U===e.memoizedState||(t.flags|=1024),s=!1)}return Va(e,t,o,s,d,u)}function Va(e,t,o,s,u,d){Qf(e,t);var h=(t.flags&128)!==0;if(!s&&!h)return u&&Xd(t,o,!1),Rn(e,t,d);s=t.stateNode,y0.current=t;var E=h&&typeof o.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&h?(t.child=Kr(t,e.child,null,d),t.child=Kr(t,null,E,d)):vt(e,t,E,d),t.memoizedState=s.state,u&&Xd(t,o,!0),t.child}function Gf(e){var t=e.stateNode;t.pendingContext?qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qd(e,t.context,!1),$a(e,t.containerInfo)}function qf(e,t,o,s,u){return Qr(),ka(u),t.flags|=256,vt(e,t,o,s),t.child}var Qa={dehydrated:null,treeContext:null,retryLane:0};function Ka(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yf(e,t,o){var s=t.pendingProps,u=Ue.current,d=!1,h=(t.flags&128)!==0,E;if((E=h)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),_e(Ue,u&1),e===null)return xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(h=s.children,e=s.fallback,d?(s=t.mode,d=t.child,h={mode:"hidden",children:h},!(s&1)&&d!==null?(d.childLanes=0,d.pendingProps=h):d=kl(h,s,0,null),e=mr(e,s,o,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=Ka(o),t.memoizedState=Qa,e):Ga(t,h));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return v0(e,t,h,s,E,u,o);if(d){d=s.fallback,h=t.mode,u=e.child,E=u.sibling;var A={mode:"hidden",children:s.children};return!(h&1)&&t.child!==u?(s=t.child,s.childLanes=0,s.pendingProps=A,t.deletions=null):(s=Yn(u,A),s.subtreeFlags=u.subtreeFlags&14680064),E!==null?d=Yn(E,d):(d=mr(d,h,o,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,h=e.child.memoizedState,h=h===null?Ka(o):{baseLanes:h.baseLanes|o,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~o,t.memoizedState=Qa,s}return d=e.child,e=d.sibling,s=Yn(d,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=o),s.return=t,s.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=s,t.memoizedState=null,s}function Ga(e,t){return t=kl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function al(e,t,o,s){return s!==null&&ka(s),Kr(t,e.child,null,o),e=Ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v0(e,t,o,s,u,d,h){if(o)return t.flags&256?(t.flags&=-257,s=Ua(Error(i(422))),al(e,t,h,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=s.fallback,u=t.mode,s=kl({mode:"visible",children:s.children},u,0,null),d=mr(d,u,h,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,t.mode&1&&Kr(t,e.child,null,h),t.child.memoizedState=Ka(h),t.memoizedState=Qa,d);if(!(t.mode&1))return al(e,t,h,null);if(u.data==="$!"){if(s=u.nextSibling&&u.nextSibling.dataset,s)var E=s.dgst;return s=E,d=Error(i(419)),s=Ua(d,s,void 0),al(e,t,h,s)}if(E=(h&e.childLanes)!==0,bt||E){if(s=rt,s!==null){switch(h&-h){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(s.suspendedLanes|h)?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,Cn(e,u),Xt(s,e,u,-1))}return cu(),s=Ua(Error(i(421))),al(e,t,h,s)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=N0.bind(null,e),u._reactRetry=t,null):(e=d.treeContext,It=zn(u.nextSibling),jt=t,Me=!0,Kt=null,e!==null&&(Ft[zt++]=En,Ft[zt++]=bn,Ft[zt++]=lr,En=e.id,bn=e.overflow,lr=t),t=Ga(t,s.children),t.flags|=4096,t)}function Xf(e,t,o){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Ca(e.return,t,o)}function qa(e,t,o,s,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=o,d.tailMode=u)}function Jf(e,t,o){var s=t.pendingProps,u=s.revealOrder,d=s.tail;if(vt(e,t,s.children,o),s=Ue.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xf(e,o,t);else if(e.tag===19)Xf(e,o,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(_e(Ue,s),!(t.mode&1))t.memoizedState=null;else switch(u){case"forwards":for(o=t.child,u=null;o!==null;)e=o.alternate,e!==null&&tl(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=t.child,t.child=null):(u=o.sibling,o.sibling=null),qa(t,!1,u,o,d);break;case"backwards":for(o=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&tl(e)===null){t.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}qa(t,!0,o,null,d);break;case"together":qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ul(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rn(e,t,o){if(e!==null&&(t.dependencies=e.dependencies),dr|=t.lanes,!(o&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,o=Yn(e,e.pendingProps),t.child=o,o.return=t;e.sibling!==null;)e=e.sibling,o=o.sibling=Yn(e,e.pendingProps),o.return=t;o.sibling=null}return t.child}function w0(e,t,o){switch(t.tag){case 3:Gf(t),Qr();break;case 5:ff(t);break;case 1:Et(t.type)&&Vi(t);break;case 4:$a(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,u=t.memoizedProps.value;_e(Xi,s._currentValue),s._currentValue=u;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(_e(Ue,Ue.current&1),t.flags|=128,null):o&t.child.childLanes?Yf(e,t,o):(_e(Ue,Ue.current&1),e=Rn(e,t,o),e!==null?e.sibling:null);_e(Ue,Ue.current&1);break;case 19:if(s=(o&t.childLanes)!==0,e.flags&128){if(s)return Jf(e,t,o);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(Ue,Ue.current),s)break;return null;case 22:case 23:return t.lanes=0,Vf(e,t,o)}return Rn(e,t,o)}var Zf,Ya,ep,tp;Zf=function(e,t){for(var o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break;for(;o.sibling===null;){if(o.return===null||o.return===t)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ya=function(){},ep=function(e,t,o,s){var u=e.memoizedProps;if(u!==s){e=t.stateNode,ur(an.current);var d=null;switch(o){case"input":u=Ge(e,u),s=Ge(e,s),d=[];break;case"select":u=Y({},u,{value:void 0}),s=Y({},s,{value:void 0}),d=[];break;case"textarea":u=xn(e,u),s=xn(e,s),d=[];break;default:typeof u.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Ui)}Ps(o,s);var h;o=null;for(D in u)if(!s.hasOwnProperty(D)&&u.hasOwnProperty(D)&&u[D]!=null)if(D==="style"){var E=u[D];for(h in E)E.hasOwnProperty(h)&&(o||(o={}),o[h]="")}else D!=="dangerouslySetInnerHTML"&&D!=="children"&&D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&D!=="autoFocus"&&(a.hasOwnProperty(D)?d||(d=[]):(d=d||[]).push(D,null));for(D in s){var A=s[D];if(E=u!=null?u[D]:void 0,s.hasOwnProperty(D)&&A!==E&&(A!=null||E!=null))if(D==="style")if(E){for(h in E)!E.hasOwnProperty(h)||A&&A.hasOwnProperty(h)||(o||(o={}),o[h]="");for(h in A)A.hasOwnProperty(h)&&E[h]!==A[h]&&(o||(o={}),o[h]=A[h])}else o||(d||(d=[]),d.push(D,o)),o=A;else D==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,E=E?E.__html:void 0,A!=null&&E!==A&&(d=d||[]).push(D,A)):D==="children"?typeof A!="string"&&typeof A!="number"||(d=d||[]).push(D,""+A):D!=="suppressContentEditableWarning"&&D!=="suppressHydrationWarning"&&(a.hasOwnProperty(D)?(A!=null&&D==="onScroll"&&Fe("scroll",e),d||E===A||(d=[])):(d=d||[]).push(D,A))}o&&(d=d||[]).push("style",o);var D=d;(t.updateQueue=D)&&(t.flags|=4)}},tp=function(e,t,o,s){o!==s&&(t.flags|=4)};function qo(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var o=null;t!==null;)t.alternate!==null&&(o=t),t=t.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ht(e){var t=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(t)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags&14680064,s|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=o,t}function x0(e,t,o){var s=t.pendingProps;switch(va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ht(t),null;case 1:return Et(t.type)&&Wi(),ht(t),null;case 3:return s=t.stateNode,Yr(),ze(St),ze(ft),Na(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(qi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Kt!==null&&(su(Kt),Kt=null))),Ya(e,t),ht(t),null;case 5:Ta(t);var u=ur(Wo.current);if(o=t.type,e!==null&&t.stateNode!=null)ep(e,t,o,s,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(i(166));return ht(t),null}if(e=ur(an.current),qi(t)){s=t.stateNode,o=t.type;var d=t.memoizedProps;switch(s[sn]=t,s[zo]=d,e=(t.mode&1)!==0,o){case"dialog":Fe("cancel",s),Fe("close",s);break;case"iframe":case"object":case"embed":Fe("load",s);break;case"video":case"audio":for(u=0;u<Oo.length;u++)Fe(Oo[u],s);break;case"source":Fe("error",s);break;case"img":case"image":case"link":Fe("error",s),Fe("load",s);break;case"details":Fe("toggle",s);break;case"input":Ve(s,d),Fe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Fe("invalid",s);break;case"textarea":go(s,d),Fe("invalid",s)}Ps(o,d),u=null;for(var h in d)if(d.hasOwnProperty(h)){var E=d[h];h==="children"?typeof E=="string"?s.textContent!==E&&(d.suppressHydrationWarning!==!0&&Mi(s.textContent,E,e),u=["children",E]):typeof E=="number"&&s.textContent!==""+E&&(d.suppressHydrationWarning!==!0&&Mi(s.textContent,E,e),u=["children",""+E]):a.hasOwnProperty(h)&&E!=null&&h==="onScroll"&&Fe("scroll",s)}switch(o){case"input":ye(s),rn(s,d,!0);break;case"textarea":ye(s),zc(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Ui)}s=u,t.updateQueue=s,s!==null&&(t.flags|=4)}else{h=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bc(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=h.createElement(o,{is:s.is}):(e=h.createElement(o),o==="select"&&(h=e,s.multiple?h.multiple=!0:s.size&&(h.size=s.size))):e=h.createElementNS(e,o),e[sn]=t,e[zo]=s,Zf(e,t,!1,!1),t.stateNode=e;e:{switch(h=Ns(o,s),o){case"dialog":Fe("cancel",e),Fe("close",e),u=s;break;case"iframe":case"object":case"embed":Fe("load",e),u=s;break;case"video":case"audio":for(u=0;u<Oo.length;u++)Fe(Oo[u],e);u=s;break;case"source":Fe("error",e),u=s;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),u=s;break;case"details":Fe("toggle",e),u=s;break;case"input":Ve(e,s),u=Ge(e,s),Fe("invalid",e);break;case"option":u=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},u=Y({},s,{value:void 0}),Fe("invalid",e);break;case"textarea":go(e,s),u=xn(e,s),Fe("invalid",e);break;default:u=s}Ps(o,u),E=u;for(d in E)if(E.hasOwnProperty(d)){var A=E[d];d==="style"?Hc(e,A):d==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Mc(e,A)):d==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&yo(e,A):typeof A=="number"&&yo(e,""+A):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(a.hasOwnProperty(d)?A!=null&&d==="onScroll"&&Fe("scroll",e):A!=null&&O(e,d,A,h))}switch(o){case"input":ye(e),rn(e,s,!1);break;case"textarea":ye(e),zc(e);break;case"option":s.value!=null&&e.setAttribute("value",""+pe(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?on(e,!!s.multiple,d,!1):s.defaultValue!=null&&on(e,!!s.multiple,s.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Ui)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ht(t),null;case 6:if(e&&t.stateNode!=null)tp(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(i(166));if(o=ur(Wo.current),ur(an.current),qi(t)){if(s=t.stateNode,o=t.memoizedProps,s[sn]=t,(d=s.nodeValue!==o)&&(e=jt,e!==null))switch(e.tag){case 3:Mi(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mi(s.nodeValue,o,(e.mode&1)!==0)}d&&(t.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[sn]=t,t.stateNode=s}return ht(t),null;case 13:if(ze(Ue),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&It!==null&&t.mode&1&&!(t.flags&128))rf(),Qr(),t.flags|=98560,d=!1;else if(d=qi(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[sn]=t}else Qr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ht(t),d=!1}else Kt!==null&&(su(Kt),Kt=null),d=!0;if(!d)return t.flags&65536?t:null}return t.flags&128?(t.lanes=o,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Ue.current&1?tt===0&&(tt=3):cu())),t.updateQueue!==null&&(t.flags|=4),ht(t),null);case 4:return Yr(),Ya(e,t),e===null&&_o(t.stateNode.containerInfo),ht(t),null;case 10:return ba(t.type._context),ht(t),null;case 17:return Et(t.type)&&Wi(),ht(t),null;case 19:if(ze(Ue),d=t.memoizedState,d===null)return ht(t),null;if(s=(t.flags&128)!==0,h=d.rendering,h===null)if(s)qo(d,!1);else{if(tt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(h=tl(e),h!==null){for(t.flags|=128,qo(d,!1),s=h.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=o,o=t.child;o!==null;)d=o,e=s,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return _e(Ue,Ue.current&1|2),t.child}e=e.sibling}d.tail!==null&&qe()>eo&&(t.flags|=128,s=!0,qo(d,!1),t.lanes=4194304)}else{if(!s)if(e=tl(h),e!==null){if(t.flags|=128,s=!0,o=e.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),qo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Me)return ht(t),null}else 2*qe()-d.renderingStartTime>eo&&o!==1073741824&&(t.flags|=128,s=!0,qo(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(o=d.last,o!==null?o.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=qe(),t.sibling=null,o=Ue.current,_e(Ue,s?o&1|2:o&1),t):(ht(t),null);case 22:case 23:return uu(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Dt&1073741824&&(ht(t),t.subtreeFlags&6&&(t.flags|=8192)):ht(t),null;case 24:return null;case 25:return null}throw Error(i(156,t.tag))}function k0(e,t){switch(va(t),t.tag){case 1:return Et(t.type)&&Wi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yr(),ze(St),ze(ft),Na(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ta(t),null;case 13:if(ze(Ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(Ue),null;case 4:return Yr(),null;case 10:return ba(t.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var cl=!1,mt=!1,S0=typeof WeakSet=="function"?WeakSet:Set,re=null;function Jr(e,t){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){Qe(e,t,s)}else o.current=null}function Xa(e,t,o){try{o()}catch(s){Qe(e,t,s)}}var np=!1;function E0(e,t){if(ua=Pi,e=Id(),ta(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var h=0,E=-1,A=-1,D=0,H=0,V=e,U=null;t:for(;;){for(var ee;V!==o||u!==0&&V.nodeType!==3||(E=h+u),V!==d||s!==0&&V.nodeType!==3||(A=h+s),V.nodeType===3&&(h+=V.nodeValue.length),(ee=V.firstChild)!==null;)U=V,V=ee;for(;;){if(V===e)break t;if(U===o&&++D===u&&(E=h),U===d&&++H===s&&(A=h),(ee=V.nextSibling)!==null)break;V=U,U=V.parentNode}V=ee}o=E===-1||A===-1?null:{start:E,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(ca={focusedElem:e,selectionRange:o},Pi=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var ie=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ie!==null){var le=ie.memoizedProps,Ye=ie.memoizedState,j=t.stateNode,R=j.getSnapshotBeforeUpdate(t.elementType===t.type?le:Gt(t.type,le),Ye);j.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var I=t.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(G){Qe(t,t.return,G)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return ie=np,np=!1,ie}function Yo(e,t,o){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var u=s=s.next;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&Xa(t,o,d)}u=u.next}while(u!==s)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var o=t=t.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==t)}}function Ja(e){var t=e.ref;if(t!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof t=="function"?t(e):t.current=e}}function rp(e){var t=e.alternate;t!==null&&(e.alternate=null,rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[zo],delete t[ha],delete t[i0],delete t[l0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function op(e){return e.tag===5||e.tag===3||e.tag===4}function ip(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||op(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Za(e,t,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?o.nodeType===8?o.parentNode.insertBefore(e,t):o.insertBefore(e,t):(o.nodeType===8?(t=o.parentNode,t.insertBefore(e,o)):(t=o,t.appendChild(e)),o=o._reactRootContainer,o!=null||t.onclick!==null||(t.onclick=Ui));else if(s!==4&&(e=e.child,e!==null))for(Za(e,t,o),e=e.sibling;e!==null;)Za(e,t,o),e=e.sibling}function eu(e,t,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?o.insertBefore(e,t):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(eu(e,t,o),e=e.sibling;e!==null;)eu(e,t,o),e=e.sibling}var st=null,qt=!1;function Vn(e,t,o){for(o=o.child;o!==null;)lp(e,t,o),o=o.sibling}function lp(e,t,o){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(bi,o)}catch{}switch(o.tag){case 5:mt||Jr(o,t);case 6:var s=st,u=qt;st=null,Vn(e,t,o),st=s,qt=u,st!==null&&(qt?(e=st,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):st.removeChild(o.stateNode));break;case 18:st!==null&&(qt?(e=st,o=o.stateNode,e.nodeType===8?pa(e.parentNode,o):e.nodeType===1&&pa(e,o),$o(e)):pa(st,o.stateNode));break;case 4:s=st,u=qt,st=o.stateNode.containerInfo,qt=!0,Vn(e,t,o),st=s,qt=u;break;case 0:case 11:case 14:case 15:if(!mt&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){u=s=s.next;do{var d=u,h=d.destroy;d=d.tag,h!==void 0&&(d&2||d&4)&&Xa(o,t,h),u=u.next}while(u!==s)}Vn(e,t,o);break;case 1:if(!mt&&(Jr(o,t),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(E){Qe(o,t,E)}Vn(e,t,o);break;case 21:Vn(e,t,o);break;case 22:o.mode&1?(mt=(s=mt)||o.memoizedState!==null,Vn(e,t,o),mt=s):Vn(e,t,o);break;default:Vn(e,t,o)}}function sp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new S0),t.forEach(function(s){var u=j0.bind(null,e,s);o.has(s)||(o.add(s),s.then(u,u))})}}function Yt(e,t){var o=t.deletions;if(o!==null)for(var s=0;s<o.length;s++){var u=o[s];try{var d=e,h=t,E=h;e:for(;E!==null;){switch(E.tag){case 5:st=E.stateNode,qt=!1;break e;case 3:st=E.stateNode.containerInfo,qt=!0;break e;case 4:st=E.stateNode.containerInfo,qt=!0;break e}E=E.return}if(st===null)throw Error(i(160));lp(d,h,u),st=null,qt=!1;var A=u.alternate;A!==null&&(A.return=null),u.return=null}catch(D){Qe(u,t,D)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ap(t,e),t=t.sibling}function ap(e,t){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Yt(t,e),cn(e),s&4){try{Yo(3,e,e.return),dl(3,e)}catch(le){Qe(e,e.return,le)}try{Yo(5,e,e.return)}catch(le){Qe(e,e.return,le)}}break;case 1:Yt(t,e),cn(e),s&512&&o!==null&&Jr(o,o.return);break;case 5:if(Yt(t,e),cn(e),s&512&&o!==null&&Jr(o,o.return),e.flags&32){var u=e.stateNode;try{yo(u,"")}catch(le){Qe(e,e.return,le)}}if(s&4&&(u=e.stateNode,u!=null)){var d=e.memoizedProps,h=o!==null?o.memoizedProps:d,E=e.type,A=e.updateQueue;if(e.updateQueue=null,A!==null)try{E==="input"&&d.type==="radio"&&d.name!=null&&yt(u,d),Ns(E,h);var D=Ns(E,d);for(h=0;h<A.length;h+=2){var H=A[h],V=A[h+1];H==="style"?Hc(u,V):H==="dangerouslySetInnerHTML"?Mc(u,V):H==="children"?yo(u,V):O(u,H,V,D)}switch(E){case"input":Pt(u,d);break;case"textarea":$s(u,d);break;case"select":var U=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var ee=d.value;ee!=null?on(u,!!d.multiple,ee,!1):U!==!!d.multiple&&(d.defaultValue!=null?on(u,!!d.multiple,d.defaultValue,!0):on(u,!!d.multiple,d.multiple?[]:"",!1))}u[zo]=d}catch(le){Qe(e,e.return,le)}}break;case 6:if(Yt(t,e),cn(e),s&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,d=e.memoizedProps;try{u.nodeValue=d}catch(le){Qe(e,e.return,le)}}break;case 3:if(Yt(t,e),cn(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{$o(t.containerInfo)}catch(le){Qe(e,e.return,le)}break;case 4:Yt(t,e),cn(e);break;case 13:Yt(t,e),cn(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(ru=qe())),s&4&&sp(e);break;case 22:if(H=o!==null&&o.memoizedState!==null,e.mode&1?(mt=(D=mt)||H,Yt(t,e),mt=D):Yt(t,e),cn(e),s&8192){if(D=e.memoizedState!==null,(e.stateNode.isHidden=D)&&!H&&e.mode&1)for(re=e,H=e.child;H!==null;){for(V=re=H;re!==null;){switch(U=re,ee=U.child,U.tag){case 0:case 11:case 14:case 15:Yo(4,U,U.return);break;case 1:Jr(U,U.return);var ie=U.stateNode;if(typeof ie.componentWillUnmount=="function"){s=U,o=U.return;try{t=s,ie.props=t.memoizedProps,ie.state=t.memoizedState,ie.componentWillUnmount()}catch(le){Qe(s,o,le)}}break;case 5:Jr(U,U.return);break;case 22:if(U.memoizedState!==null){dp(V);continue}}ee!==null?(ee.return=U,re=ee):dp(V)}H=H.sibling}e:for(H=null,V=e;;){if(V.tag===5){if(H===null){H=V;try{u=V.stateNode,D?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(E=V.stateNode,A=V.memoizedProps.style,h=A!=null&&A.hasOwnProperty("display")?A.display:null,E.style.display=Uc("display",h))}catch(le){Qe(e,e.return,le)}}}else if(V.tag===6){if(H===null)try{V.stateNode.nodeValue=D?"":V.memoizedProps}catch(le){Qe(e,e.return,le)}}else if((V.tag!==22&&V.tag!==23||V.memoizedState===null||V===e)&&V.child!==null){V.child.return=V,V=V.child;continue}if(V===e)break e;for(;V.sibling===null;){if(V.return===null||V.return===e)break e;H===V&&(H=null),V=V.return}H===V&&(H=null),V.sibling.return=V.return,V=V.sibling}}break;case 19:Yt(t,e),cn(e),s&4&&sp(e);break;case 21:break;default:Yt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var o=e.return;o!==null;){if(op(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var u=s.stateNode;s.flags&32&&(yo(u,""),s.flags&=-33);var d=ip(e);eu(e,d,u);break;case 3:case 4:var h=s.stateNode.containerInfo,E=ip(e);Za(e,E,h);break;default:throw Error(i(161))}}catch(A){Qe(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function b0(e,t,o){re=e,up(e)}function up(e,t,o){for(var s=(e.mode&1)!==0;re!==null;){var u=re,d=u.child;if(u.tag===22&&s){var h=u.memoizedState!==null||cl;if(!h){var E=u.alternate,A=E!==null&&E.memoizedState!==null||mt;E=cl;var D=mt;if(cl=h,(mt=A)&&!D)for(re=u;re!==null;)h=re,A=h.child,h.tag===22&&h.memoizedState!==null?fp(u):A!==null?(A.return=h,re=A):fp(u);for(;d!==null;)re=d,up(d),d=d.sibling;re=u,cl=E,mt=D}cp(e)}else u.subtreeFlags&8772&&d!==null?(d.return=u,re=d):cp(e)}}function cp(e){for(;re!==null;){var t=re;if(t.flags&8772){var o=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:mt||dl(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!mt)if(o===null)s.componentDidMount();else{var u=t.elementType===t.type?o.memoizedProps:Gt(t.type,o.memoizedProps);s.componentDidUpdate(u,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&df(t,d,s);break;case 3:var h=t.updateQueue;if(h!==null){if(o=null,t.child!==null)switch(t.child.tag){case 5:o=t.child.stateNode;break;case 1:o=t.child.stateNode}df(t,h,o)}break;case 5:var E=t.stateNode;if(o===null&&t.flags&4){o=E;var A=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var D=t.alternate;if(D!==null){var H=D.memoizedState;if(H!==null){var V=H.dehydrated;V!==null&&$o(V)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}mt||t.flags&512&&Ja(t)}catch(U){Qe(t,t.return,U)}}if(t===e){re=null;break}if(o=t.sibling,o!==null){o.return=t.return,re=o;break}re=t.return}}function dp(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var o=t.sibling;if(o!==null){o.return=t.return,re=o;break}re=t.return}}function fp(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var o=t.return;try{dl(4,t)}catch(A){Qe(t,o,A)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var u=t.return;try{s.componentDidMount()}catch(A){Qe(t,u,A)}}var d=t.return;try{Ja(t)}catch(A){Qe(t,d,A)}break;case 5:var h=t.return;try{Ja(t)}catch(A){Qe(t,h,A)}}}catch(A){Qe(t,t.return,A)}if(t===e){re=null;break}var E=t.sibling;if(E!==null){E.return=t.return,re=E;break}re=t.return}}var C0=Math.ceil,fl=W.ReactCurrentDispatcher,tu=W.ReactCurrentOwner,Ut=W.ReactCurrentBatchConfig,Ae=0,rt=null,Je=null,at=0,Dt=0,Zr=Bn(0),tt=0,Xo=null,dr=0,pl=0,nu=0,Jo=null,Ct=null,ru=0,eo=1/0,$n=null,hl=!1,ou=null,Qn=null,ml=!1,Kn=null,gl=0,Zo=0,iu=null,yl=-1,vl=0;function wt(){return Ae&6?qe():yl!==-1?yl:yl=qe()}function Gn(e){return e.mode&1?Ae&2&&at!==0?at&-at:a0.transition!==null?(vl===0&&(vl=od()),vl):(e=De,e!==0||(e=window.event,e=e===void 0?16:pd(e.type)),e):1}function Xt(e,t,o,s){if(50<Zo)throw Zo=0,iu=null,Error(i(185));Eo(e,o,s),(!(Ae&2)||e!==rt)&&(e===rt&&(!(Ae&2)&&(pl|=o),tt===4&&qn(e,at)),At(e,s),o===1&&Ae===0&&!(t.mode&1)&&(eo=qe()+500,Qi&&Un()))}function At(e,t){var o=e.callbackNode;ay(e,t);var s=Ri(e,e===rt?at:0);if(s===0)o!==null&&td(o),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(o!=null&&td(o),t===1)e.tag===0?s0(hp.bind(null,e)):Jd(hp.bind(null,e)),r0(function(){!(Ae&6)&&Un()}),o=null;else{switch(id(s)){case 1:o=Fs;break;case 4:o=nd;break;case 16:o=Ei;break;case 536870912:o=rd;break;default:o=Ei}o=Sp(o,pp.bind(null,e))}e.callbackPriority=t,e.callbackNode=o}}function pp(e,t){if(yl=-1,vl=0,Ae&6)throw Error(i(327));var o=e.callbackNode;if(to()&&e.callbackNode!==o)return null;var s=Ri(e,e===rt?at:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=wl(e,s);else{t=s;var u=Ae;Ae|=2;var d=gp();(rt!==e||at!==t)&&($n=null,eo=qe()+500,pr(e,t));do try{$0();break}catch(E){mp(e,E)}while(!0);Ea(),fl.current=d,Ae=u,Je!==null?t=0:(rt=null,at=0,t=tt)}if(t!==0){if(t===2&&(u=zs(e),u!==0&&(s=u,t=lu(e,u))),t===1)throw o=Xo,pr(e,0),qn(e,s),At(e,qe()),o;if(t===6)qn(e,s);else{if(u=e.current.alternate,!(s&30)&&!A0(u)&&(t=wl(e,s),t===2&&(d=zs(e),d!==0&&(s=d,t=lu(e,d))),t===1))throw o=Xo,pr(e,0),qn(e,s),At(e,qe()),o;switch(e.finishedWork=u,e.finishedLanes=s,t){case 0:case 1:throw Error(i(345));case 2:hr(e,Ct,$n);break;case 3:if(qn(e,s),(s&130023424)===s&&(t=ru+500-qe(),10<t)){if(Ri(e,0)!==0)break;if(u=e.suspendedLanes,(u&s)!==s){wt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=fa(hr.bind(null,e,Ct,$n),t);break}hr(e,Ct,$n);break;case 4:if(qn(e,s),(s&4194240)===s)break;for(t=e.eventTimes,u=-1;0<s;){var h=31-Vt(s);d=1<<h,h=t[h],h>u&&(u=h),s&=~d}if(s=u,s=qe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*C0(s/1960))-s,10<s){e.timeoutHandle=fa(hr.bind(null,e,Ct,$n),s);break}hr(e,Ct,$n);break;case 5:hr(e,Ct,$n);break;default:throw Error(i(329))}}}return At(e,qe()),e.callbackNode===o?pp.bind(null,e):null}function lu(e,t){var o=Jo;return e.current.memoizedState.isDehydrated&&(pr(e,t).flags|=256),e=wl(e,t),e!==2&&(t=Ct,Ct=o,t!==null&&su(t)),e}function su(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function A0(e){for(var t=e;;){if(t.flags&16384){var o=t.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var u=o[s],d=u.getSnapshot;u=u.value;try{if(!Qt(d(),u))return!1}catch{return!1}}}if(o=t.child,t.subtreeFlags&16384&&o!==null)o.return=t,t=o;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qn(e,t){for(t&=~nu,t&=~pl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var o=31-Vt(t),s=1<<o;e[o]=-1,t&=~s}}function hp(e){if(Ae&6)throw Error(i(327));to();var t=Ri(e,0);if(!(t&1))return At(e,qe()),null;var o=wl(e,t);if(e.tag!==0&&o===2){var s=zs(e);s!==0&&(t=s,o=lu(e,s))}if(o===1)throw o=Xo,pr(e,0),qn(e,t),At(e,qe()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hr(e,Ct,$n),At(e,qe()),null}function au(e,t){var o=Ae;Ae|=1;try{return e(t)}finally{Ae=o,Ae===0&&(eo=qe()+500,Qi&&Un())}}function fr(e){Kn!==null&&Kn.tag===0&&!(Ae&6)&&to();var t=Ae;Ae|=1;var o=Ut.transition,s=De;try{if(Ut.transition=null,De=1,e)return e()}finally{De=s,Ut.transition=o,Ae=t,!(Ae&6)&&Un()}}function uu(){Dt=Zr.current,ze(Zr)}function pr(e,t){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,n0(o)),Je!==null)for(o=Je.return;o!==null;){var s=o;switch(va(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Wi();break;case 3:Yr(),ze(St),ze(ft),Na();break;case 5:Ta(s);break;case 4:Yr();break;case 13:ze(Ue);break;case 19:ze(Ue);break;case 10:ba(s.type._context);break;case 22:case 23:uu()}o=o.return}if(rt=e,Je=e=Yn(e.current,null),at=Dt=t,tt=0,Xo=null,nu=pl=dr=0,Ct=Jo=null,ar!==null){for(t=0;t<ar.length;t++)if(o=ar[t],s=o.interleaved,s!==null){o.interleaved=null;var u=s.next,d=o.pending;if(d!==null){var h=d.next;d.next=u,s.next=h}o.pending=s}ar=null}return e}function mp(e,t){do{var o=Je;try{if(Ea(),nl.current=ll,rl){for(var s=He.memoizedState;s!==null;){var u=s.queue;u!==null&&(u.pending=null),s=s.next}rl=!1}if(cr=0,nt=et=He=null,Vo=!1,Qo=0,tu.current=null,o===null||o.return===null){tt=1,Xo=t,Je=null;break}e:{var d=e,h=o.return,E=o,A=t;if(t=at,E.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var D=A,H=E,V=H.tag;if(!(H.mode&1)&&(V===0||V===11||V===15)){var U=H.alternate;U?(H.updateQueue=U.updateQueue,H.memoizedState=U.memoizedState,H.lanes=U.lanes):(H.updateQueue=null,H.memoizedState=null)}var ee=Bf(h);if(ee!==null){ee.flags&=-257,Mf(ee,h,E,d,t),ee.mode&1&&zf(d,D,t),t=ee,A=D;var ie=t.updateQueue;if(ie===null){var le=new Set;le.add(A),t.updateQueue=le}else ie.add(A);break e}else{if(!(t&1)){zf(d,D,t),cu();break e}A=Error(i(426))}}else if(Me&&E.mode&1){var Ye=Bf(h);if(Ye!==null){!(Ye.flags&65536)&&(Ye.flags|=256),Mf(Ye,h,E,d,t),ka(Xr(A,E));break e}}d=A=Xr(A,E),tt!==4&&(tt=2),Jo===null?Jo=[d]:Jo.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var j=_f(d,A,t);cf(d,j);break e;case 1:E=A;var R=d.type,I=d.stateNode;if(!(d.flags&128)&&(typeof R.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Qn===null||!Qn.has(I)))){d.flags|=65536,t&=-t,d.lanes|=t;var G=Ff(d,E,t);cf(d,G);break e}}d=d.return}while(d!==null)}vp(o)}catch(ae){t=ae,Je===o&&o!==null&&(Je=o=o.return);continue}break}while(!0)}function gp(){var e=fl.current;return fl.current=ll,e===null?ll:e}function cu(){(tt===0||tt===3||tt===2)&&(tt=4),rt===null||!(dr&268435455)&&!(pl&268435455)||qn(rt,at)}function wl(e,t){var o=Ae;Ae|=2;var s=gp();(rt!==e||at!==t)&&($n=null,pr(e,t));do try{R0();break}catch(u){mp(e,u)}while(!0);if(Ea(),Ae=o,fl.current=s,Je!==null)throw Error(i(261));return rt=null,at=0,tt}function R0(){for(;Je!==null;)yp(Je)}function $0(){for(;Je!==null&&!Zg();)yp(Je)}function yp(e){var t=kp(e.alternate,e,Dt);e.memoizedProps=e.pendingProps,t===null?vp(e):Je=t,tu.current=null}function vp(e){var t=e;do{var o=t.alternate;if(e=t.return,t.flags&32768){if(o=k0(o,t),o!==null){o.flags&=32767,Je=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{tt=6,Je=null;return}}else if(o=x0(o,t,Dt),o!==null){Je=o;return}if(t=t.sibling,t!==null){Je=t;return}Je=t=e}while(t!==null);tt===0&&(tt=5)}function hr(e,t,o){var s=De,u=Ut.transition;try{Ut.transition=null,De=1,T0(e,t,o,s)}finally{Ut.transition=u,De=s}return null}function T0(e,t,o,s){do to();while(Kn!==null);if(Ae&6)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=o.lanes|o.childLanes;if(uy(e,d),e===rt&&(Je=rt=null,at=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||ml||(ml=!0,Sp(Ei,function(){return to(),null})),d=(o.flags&15990)!==0,o.subtreeFlags&15990||d){d=Ut.transition,Ut.transition=null;var h=De;De=1;var E=Ae;Ae|=4,tu.current=null,E0(e,o),ap(o,e),qy(ca),Pi=!!ua,ca=ua=null,e.current=o,b0(o),ey(),Ae=E,De=h,Ut.transition=d}else e.current=o;if(ml&&(ml=!1,Kn=e,gl=u),d=e.pendingLanes,d===0&&(Qn=null),ry(o.stateNode),At(e,qe()),t!==null)for(s=e.onRecoverableError,o=0;o<t.length;o++)u=t[o],s(u.value,{componentStack:u.stack,digest:u.digest});if(hl)throw hl=!1,e=ou,ou=null,e;return gl&1&&e.tag!==0&&to(),d=e.pendingLanes,d&1?e===iu?Zo++:(Zo=0,iu=e):Zo=0,Un(),null}function to(){if(Kn!==null){var e=id(gl),t=Ut.transition,o=De;try{if(Ut.transition=null,De=16>e?16:e,Kn===null)var s=!1;else{if(e=Kn,Kn=null,gl=0,Ae&6)throw Error(i(331));var u=Ae;for(Ae|=4,re=e.current;re!==null;){var d=re,h=d.child;if(re.flags&16){var E=d.deletions;if(E!==null){for(var A=0;A<E.length;A++){var D=E[A];for(re=D;re!==null;){var H=re;switch(H.tag){case 0:case 11:case 15:Yo(8,H,d)}var V=H.child;if(V!==null)V.return=H,re=V;else for(;re!==null;){H=re;var U=H.sibling,ee=H.return;if(rp(H),H===D){re=null;break}if(U!==null){U.return=ee,re=U;break}re=ee}}}var ie=d.alternate;if(ie!==null){var le=ie.child;if(le!==null){ie.child=null;do{var Ye=le.sibling;le.sibling=null,le=Ye}while(le!==null)}}re=d}}if(d.subtreeFlags&2064&&h!==null)h.return=d,re=h;else e:for(;re!==null;){if(d=re,d.flags&2048)switch(d.tag){case 0:case 11:case 15:Yo(9,d,d.return)}var j=d.sibling;if(j!==null){j.return=d.return,re=j;break e}re=d.return}}var R=e.current;for(re=R;re!==null;){h=re;var I=h.child;if(h.subtreeFlags&2064&&I!==null)I.return=h,re=I;else e:for(h=R;re!==null;){if(E=re,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:dl(9,E)}}catch(ae){Qe(E,E.return,ae)}if(E===h){re=null;break e}var G=E.sibling;if(G!==null){G.return=E.return,re=G;break e}re=E.return}}if(Ae=u,Un(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(bi,e)}catch{}s=!0}return s}finally{De=o,Ut.transition=t}}return!1}function wp(e,t,o){t=Xr(o,t),t=_f(e,t,1),e=Wn(e,t,1),t=wt(),e!==null&&(Eo(e,1,t),At(e,t))}function Qe(e,t,o){if(e.tag===3)wp(e,e,o);else for(;t!==null;){if(t.tag===3){wp(t,e,o);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Qn===null||!Qn.has(s))){e=Xr(o,e),e=Ff(t,e,1),t=Wn(t,e,1),e=wt(),t!==null&&(Eo(t,1,e),At(t,e));break}}t=t.return}}function P0(e,t,o){var s=e.pingCache;s!==null&&s.delete(t),t=wt(),e.pingedLanes|=e.suspendedLanes&o,rt===e&&(at&o)===o&&(tt===4||tt===3&&(at&130023424)===at&&500>qe()-ru?pr(e,0):nu|=o),At(e,t)}function xp(e,t){t===0&&(e.mode&1?(t=Ai,Ai<<=1,!(Ai&130023424)&&(Ai=4194304)):t=1);var o=wt();e=Cn(e,t),e!==null&&(Eo(e,t,o),At(e,o))}function N0(e){var t=e.memoizedState,o=0;t!==null&&(o=t.retryLane),xp(e,o)}function j0(e,t){var o=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(t),xp(e,o)}var kp;kp=function(e,t,o){if(e!==null)if(e.memoizedProps!==t.pendingProps||St.current)bt=!0;else{if(!(e.lanes&o)&&!(t.flags&128))return bt=!1,w0(e,t,o);bt=!!(e.flags&131072)}else bt=!1,Me&&t.flags&1048576&&Zd(t,Gi,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;ul(e,t),e=t.pendingProps;var u=Hr(t,ft.current);qr(t,o),u=Da(null,t,s,e,u,o);var d=La();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Et(s)?(d=!0,Vi(t)):d=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ra(t),u.updater=sl,t.stateNode=u,u._reactInternals=t,Ma(t,s,e,o),t=Va(null,t,s,!0,d,o)):(t.tag=0,Me&&d&&ya(t),vt(null,t,u,o),t=t.child),t;case 16:s=t.elementType;e:{switch(ul(e,t),e=t.pendingProps,u=s._init,s=u(s._payload),t.type=s,u=t.tag=D0(s),e=Gt(s,e),u){case 0:t=Wa(null,t,s,e,o);break e;case 1:t=Kf(null,t,s,e,o);break e;case 11:t=Uf(null,t,s,e,o);break e;case 14:t=Hf(null,t,s,Gt(s.type,e),o);break e}throw Error(i(306,s,""))}return t;case 0:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Gt(s,u),Wa(e,t,s,u,o);case 1:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Gt(s,u),Kf(e,t,s,u,o);case 3:e:{if(Gf(t),e===null)throw Error(i(387));s=t.pendingProps,d=t.memoizedState,u=d.element,uf(e,t),el(t,s,null,o);var h=t.memoizedState;if(s=h.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){u=Xr(Error(i(423)),t),t=qf(e,t,s,o,u);break e}else if(s!==u){u=Xr(Error(i(424)),t),t=qf(e,t,s,o,u);break e}else for(It=zn(t.stateNode.containerInfo.firstChild),jt=t,Me=!0,Kt=null,o=sf(t,null,s,o),t.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Qr(),s===u){t=Rn(e,t,o);break e}vt(e,t,s,o)}t=t.child}return t;case 5:return ff(t),e===null&&xa(t),s=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,h=u.children,da(s,u)?h=null:d!==null&&da(s,d)&&(t.flags|=32),Qf(e,t),vt(e,t,h,o),t.child;case 6:return e===null&&xa(t),null;case 13:return Yf(e,t,o);case 4:return $a(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Kr(t,null,s,o):vt(e,t,s,o),t.child;case 11:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Gt(s,u),Uf(e,t,s,u,o);case 7:return vt(e,t,t.pendingProps,o),t.child;case 8:return vt(e,t,t.pendingProps.children,o),t.child;case 12:return vt(e,t,t.pendingProps.children,o),t.child;case 10:e:{if(s=t.type._context,u=t.pendingProps,d=t.memoizedProps,h=u.value,_e(Xi,s._currentValue),s._currentValue=h,d!==null)if(Qt(d.value,h)){if(d.children===u.children&&!St.current){t=Rn(e,t,o);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var E=d.dependencies;if(E!==null){h=d.child;for(var A=E.firstContext;A!==null;){if(A.context===s){if(d.tag===1){A=An(-1,o&-o),A.tag=2;var D=d.updateQueue;if(D!==null){D=D.shared;var H=D.pending;H===null?A.next=A:(A.next=H.next,H.next=A),D.pending=A}}d.lanes|=o,A=d.alternate,A!==null&&(A.lanes|=o),Ca(d.return,o,t),E.lanes|=o;break}A=A.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(i(341));h.lanes|=o,E=h.alternate,E!==null&&(E.lanes|=o),Ca(h,o,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}vt(e,t,u.children,o),t=t.child}return t;case 9:return u=t.type,s=t.pendingProps.children,qr(t,o),u=Bt(u),s=s(u),t.flags|=1,vt(e,t,s,o),t.child;case 14:return s=t.type,u=Gt(s,t.pendingProps),u=Gt(s.type,u),Hf(e,t,s,u,o);case 15:return Wf(e,t,t.type,t.pendingProps,o);case 17:return s=t.type,u=t.pendingProps,u=t.elementType===s?u:Gt(s,u),ul(e,t),t.tag=1,Et(s)?(e=!0,Vi(t)):e=!1,qr(t,o),Lf(t,s,u),Ma(t,s,u,o),Va(null,t,s,!0,e,o);case 19:return Jf(e,t,o);case 22:return Vf(e,t,o)}throw Error(i(156,t.tag))};function Sp(e,t){return ed(e,t)}function I0(e,t,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(e,t,o,s){return new I0(e,t,o,s)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function D0(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===be)return 11;if(e===Re)return 14}return 2}function Yn(e,t){var o=e.alternate;return o===null?(o=Ht(e.tag,t,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=t,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,t=e.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function xl(e,t,o,s,u,d){var h=2;if(s=e,typeof e=="function")du(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case q:return mr(o.children,u,d,t);case fe:h=8,u|=8;break;case ge:return e=Ht(12,o,t,u|2),e.elementType=ge,e.lanes=d,e;case Pe:return e=Ht(13,o,t,u),e.elementType=Pe,e.lanes=d,e;case Te:return e=Ht(19,o,t,u),e.elementType=Te,e.lanes=d,e;case ke:return kl(o,u,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ce:h=10;break e;case Le:h=9;break e;case be:h=11;break e;case Re:h=14;break e;case Ne:h=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return t=Ht(h,o,t,u),t.elementType=e,t.type=s,t.lanes=d,t}function mr(e,t,o,s){return e=Ht(7,e,s,t),e.lanes=o,e}function kl(e,t,o,s){return e=Ht(22,e,s,t),e.elementType=ke,e.lanes=o,e.stateNode={isHidden:!1},e}function fu(e,t,o){return e=Ht(6,e,null,t),e.lanes=o,e}function pu(e,t,o){return t=Ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=o,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L0(e,t,o,s,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bs(0),this.expirationTimes=Bs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bs(0),this.identifierPrefix=s,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function hu(e,t,o,s,u,d,h,E,A){return e=new L0(e,t,o,E,A),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Ht(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ra(d),e}function O0(e,t,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:s==null?null:""+s,children:e,containerInfo:t,implementation:o}}function Ep(e){if(!e)return Mn;e=e._reactInternals;e:{if(rr(e)!==e||e.tag!==1)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(Et(o))return Yd(e,o,t)}return t}function bp(e,t,o,s,u,d,h,E,A){return e=hu(o,s,!0,e,u,d,h,E,A),e.context=Ep(null),o=e.current,s=wt(),u=Gn(o),d=An(s,u),d.callback=t??null,Wn(o,d,u),e.current.lanes=u,Eo(e,u,s),At(e,s),e}function Sl(e,t,o,s){var u=t.current,d=wt(),h=Gn(u);return o=Ep(o),t.context===null?t.context=o:t.pendingContext=o,t=An(d,h),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Wn(u,t,h),e!==null&&(Xt(e,u,h,d),Zi(e,u,h)),h}function El(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<t?o:t}}function mu(e,t){Cp(e,t),(e=e.alternate)&&Cp(e,t)}var Ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}bl.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));Sl(e,t,null,null)},bl.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fr(function(){Sl(null,e,null,null)}),t[kn]=null}};function bl(e){this._internalRoot=e}bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ad();e={blockedOn:null,target:e,priority:t};for(var o=0;o<On.length&&t!==0&&t<On[o].priority;o++);On.splice(o,0,e),o===0&&dd(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rp(){}function _0(e,t,o,s,u){if(u){if(typeof s=="function"){var d=s;s=function(){var D=El(h);d.call(D)}}var h=bp(t,s,e,0,null,!1,!1,"",Rp);return e._reactRootContainer=h,e[kn]=h.current,_o(e.nodeType===8?e.parentNode:e),fr(),h}for(;u=e.lastChild;)e.removeChild(u);if(typeof s=="function"){var E=s;s=function(){var D=El(A);E.call(D)}}var A=hu(e,0,!1,null,null,!1,!1,"",Rp);return e._reactRootContainer=A,e[kn]=A.current,_o(e.nodeType===8?e.parentNode:e),fr(function(){Sl(t,A,o,s)}),A}function Al(e,t,o,s,u){var d=o._reactRootContainer;if(d){var h=d;if(typeof u=="function"){var E=u;u=function(){var A=El(h);E.call(A)}}Sl(t,h,e,u)}else h=_0(o,t,e,u,s);return El(h)}ld=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var o=So(t.pendingLanes);o!==0&&(Ms(t,o|1),At(t,qe()),!(Ae&6)&&(eo=qe()+500,Un()))}break;case 13:fr(function(){var s=Cn(e,1);if(s!==null){var u=wt();Xt(s,e,1,u)}}),mu(e,1)}},Us=function(e){if(e.tag===13){var t=Cn(e,134217728);if(t!==null){var o=wt();Xt(t,e,134217728,o)}mu(e,134217728)}},sd=function(e){if(e.tag===13){var t=Gn(e),o=Cn(e,t);if(o!==null){var s=wt();Xt(o,e,t,s)}mu(e,t)}},ad=function(){return De},ud=function(e,t){var o=De;try{return De=e,t()}finally{De=o}},Ds=function(e,t,o){switch(t){case"input":if(Pt(e,o),t=o.name,o.type==="radio"&&t!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<o.length;t++){var s=o[t];if(s!==e&&s.form===e.form){var u=Hi(s);if(!u)throw Error(i(90));Ee(s),Pt(s,u)}}}break;case"textarea":$s(e,o);break;case"select":t=o.value,t!=null&&on(e,!!o.multiple,t,!1)}},Kc=au,Gc=fr;var F0={usingClientEntryPoint:!1,Events:[Bo,Mr,Hi,Vc,Qc,au]},ei={findFiberByHostInstance:or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z0={bundleType:ei.bundleType,version:ei.version,rendererPackageName:ei.rendererPackageName,rendererConfig:ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:W.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:ei.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{bi=Rl.inject(z0),ln=Rl}catch{}}return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F0,Rt.createPortal=function(e,t){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(t))throw Error(i(200));return O0(e,t,null,o)},Rt.createRoot=function(e,t){if(!yu(e))throw Error(i(299));var o=!1,s="",u=Ap;return t!=null&&(t.unstable_strictMode===!0&&(o=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=hu(e,1,!1,null,null,o,!1,s,u),e[kn]=t.current,_o(e.nodeType===8?e.parentNode:e),new gu(t)},Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=Jc(t),e=e===null?null:e.stateNode,e},Rt.flushSync=function(e){return fr(e)},Rt.hydrate=function(e,t,o){if(!Cl(t))throw Error(i(200));return Al(null,e,t,!0,o)},Rt.hydrateRoot=function(e,t,o){if(!yu(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,u=!1,d="",h=Ap;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(h=o.onRecoverableError)),t=bp(t,null,e,1,o??null,u,!1,d,h),e[kn]=t.current,_o(e),s)for(e=0;e<s.length;e++)o=s[e],u=o._getVersion,u=u(o._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[o,u]:t.mutableSourceEagerHydrationData.push(o,u);return new bl(t)},Rt.render=function(e,t,o){if(!Cl(t))throw Error(i(200));return Al(null,e,t,!1,o)},Rt.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(i(40));return e._reactRootContainer?(fr(function(){Al(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1},Rt.unstable_batchedUpdates=au,Rt.unstable_renderSubtreeIntoContainer=function(e,t,o,s){if(!Cl(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Al(e,t,o,!1,s)},Rt.version="18.3.1-next-f1338f8080-20240426",Rt}var Lp;function Mh(){if(Lp)return xu.exports;Lp=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),xu.exports=G0(),xu.exports}var Op;function q0(){if(Op)return $l;Op=1;var n=Mh();return $l.createRoot=n.createRoot,$l.hydrateRoot=n.hydrateRoot,$l}var Y0=q0(),lt=function(){return lt=Object.assign||function(r){for(var i,l=1,a=arguments.length;l<a;l++){i=arguments[l];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(r[c]=i[c])}return r},lt.apply(this,arguments)};function si(n,r,i){if(i||arguments.length===2)for(var l=0,a=r.length,c;l<a;l++)(c||!(l in r))&&(c||(c=Array.prototype.slice.call(r,0,l)),c[l]=r[l]);return n.concat(c||Array.prototype.slice.call(r))}var Be="-ms-",li="-moz-",je="-webkit-",Uh="comm",ts="rule",uc="decl",X0="@import",Hh="@keyframes",J0="@layer",Wh=Math.abs,cc=String.fromCharCode,Fu=Object.assign;function Z0(n,r){return it(n,0)^45?(((r<<2^it(n,0))<<2^it(n,1))<<2^it(n,2))<<2^it(n,3):0}function Vh(n){return n.trim()}function Pn(n,r){return(n=r.exec(n))?n[0]:n}function we(n,r,i){return n.replace(r,i)}function Ol(n,r,i){return n.indexOf(r,i)}function it(n,r){return n.charCodeAt(r)|0}function io(n,r,i){return n.slice(r,i)}function fn(n){return n.length}function Qh(n){return n.length}function ii(n,r){return r.push(n),n}function ev(n,r){return n.map(r).join("")}function _p(n,r){return n.filter(function(i){return!Pn(i,r)})}var ns=1,lo=1,Kh=0,Wt=0,Ze=0,co="";function rs(n,r,i,l,a,c,f,m){return{value:n,root:r,parent:i,type:l,props:a,children:c,line:ns,column:lo,length:f,return:"",siblings:m}}function Jn(n,r){return Fu(rs("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},r)}function no(n){for(;n.root;)n=Jn(n.root,{children:[n]});ii(n,n.siblings)}function tv(){return Ze}function nv(){return Ze=Wt>0?it(co,--Wt):0,lo--,Ze===10&&(lo=1,ns--),Ze}function Zt(){return Ze=Wt<Kh?it(co,Wt++):0,lo++,Ze===10&&(lo=1,ns++),Ze}function xr(){return it(co,Wt)}function _l(){return Wt}function os(n,r){return io(co,n,r)}function zu(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rv(n){return ns=lo=1,Kh=fn(co=n),Wt=0,[]}function ov(n){return co="",n}function Eu(n){return Vh(os(Wt-1,Bu(n===91?n+2:n===40?n+1:n)))}function iv(n){for(;(Ze=xr())&&Ze<33;)Zt();return zu(n)>2||zu(Ze)>3?"":" "}function lv(n,r){for(;--r&&Zt()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return os(n,_l()+(r<6&&xr()==32&&Zt()==32))}function Bu(n){for(;Zt();)switch(Ze){case n:return Wt;case 34:case 39:n!==34&&n!==39&&Bu(Ze);break;case 40:n===41&&Bu(n);break;case 92:Zt();break}return Wt}function sv(n,r){for(;Zt()&&n+Ze!==57;)if(n+Ze===84&&xr()===47)break;return"/*"+os(r,Wt-1)+"*"+cc(n===47?n:Zt())}function av(n){for(;!zu(xr());)Zt();return os(n,Wt)}function uv(n){return ov(Fl("",null,null,null,[""],n=rv(n),0,[0],n))}function Fl(n,r,i,l,a,c,f,m,p){for(var g=0,x=0,y=f,S=0,$=0,k=0,C=1,b=1,N=1,T=0,O="",W=a,Q=c,K=l,q=O;b;)switch(k=T,T=Zt()){case 40:if(k!=108&&it(q,y-1)==58){Ol(q+=we(Eu(T),"&","&\f"),"&\f",Wh(g?m[g-1]:0))!=-1&&(N=-1);break}case 34:case 39:case 91:q+=Eu(T);break;case 9:case 10:case 13:case 32:q+=iv(k);break;case 92:q+=lv(_l()-1,7);continue;case 47:switch(xr()){case 42:case 47:ii(cv(sv(Zt(),_l()),r,i,p),p);break;default:q+="/"}break;case 123*C:m[g++]=fn(q)*N;case 125*C:case 59:case 0:switch(T){case 0:case 125:b=0;case 59+x:N==-1&&(q=we(q,/\f/g,"")),$>0&&fn(q)-y&&ii($>32?zp(q+";",l,i,y-1,p):zp(we(q," ","")+";",l,i,y-2,p),p);break;case 59:q+=";";default:if(ii(K=Fp(q,r,i,g,x,a,m,O,W=[],Q=[],y,c),c),T===123)if(x===0)Fl(q,r,K,K,W,c,y,m,Q);else switch(S===99&&it(q,3)===110?100:S){case 100:case 108:case 109:case 115:Fl(n,K,K,l&&ii(Fp(n,K,K,0,0,a,m,O,a,W=[],y,Q),Q),a,Q,y,m,l?W:Q);break;default:Fl(q,K,K,K,[""],Q,0,m,Q)}}g=x=$=0,C=N=1,O=q="",y=f;break;case 58:y=1+fn(q),$=k;default:if(C<1){if(T==123)--C;else if(T==125&&C++==0&&nv()==125)continue}switch(q+=cc(T),T*C){case 38:N=x>0?1:(q+="\f",-1);break;case 44:m[g++]=(fn(q)-1)*N,N=1;break;case 64:xr()===45&&(q+=Eu(Zt())),S=xr(),x=y=fn(O=q+=av(_l())),T++;break;case 45:k===45&&fn(q)==2&&(C=0)}}return c}function Fp(n,r,i,l,a,c,f,m,p,g,x,y){for(var S=a-1,$=a===0?c:[""],k=Qh($),C=0,b=0,N=0;C<l;++C)for(var T=0,O=io(n,S+1,S=Wh(b=f[C])),W=n;T<k;++T)(W=Vh(b>0?$[T]+" "+O:we(O,/&\f/g,$[T])))&&(p[N++]=W);return rs(n,r,i,a===0?ts:m,p,g,x,y)}function cv(n,r,i,l){return rs(n,r,i,Uh,cc(tv()),io(n,2,-2),0,l)}function zp(n,r,i,l,a){return rs(n,r,i,uc,io(n,0,l),io(n,l+1,-1),l,a)}function Gh(n,r,i){switch(Z0(n,r)){case 5103:return je+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return je+n+n;case 4789:return li+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return je+n+li+n+Be+n+n;case 5936:switch(it(n,r+11)){case 114:return je+n+Be+we(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return je+n+Be+we(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return je+n+Be+we(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return je+n+Be+n+n;case 6165:return je+n+Be+"flex-"+n+n;case 5187:return je+n+we(n,/(\w+).+(:[^]+)/,je+"box-$1$2"+Be+"flex-$1$2")+n;case 5443:return je+n+Be+"flex-item-"+we(n,/flex-|-self/g,"")+(Pn(n,/flex-|baseline/)?"":Be+"grid-row-"+we(n,/flex-|-self/g,""))+n;case 4675:return je+n+Be+"flex-line-pack"+we(n,/align-content|flex-|-self/g,"")+n;case 5548:return je+n+Be+we(n,"shrink","negative")+n;case 5292:return je+n+Be+we(n,"basis","preferred-size")+n;case 6060:return je+"box-"+we(n,"-grow","")+je+n+Be+we(n,"grow","positive")+n;case 4554:return je+we(n,/([^-])(transform)/g,"$1"+je+"$2")+n;case 6187:return we(we(we(n,/(zoom-|grab)/,je+"$1"),/(image-set)/,je+"$1"),n,"")+n;case 5495:case 3959:return we(n,/(image-set\([^]*)/,je+"$1$`$1");case 4968:return we(we(n,/(.+:)(flex-)?(.*)/,je+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+je+n+n;case 4200:if(!Pn(n,/flex-|baseline/))return Be+"grid-column-align"+io(n,r)+n;break;case 2592:case 3360:return Be+we(n,"template-","")+n;case 4384:case 3616:return i&&i.some(function(l,a){return r=a,Pn(l.props,/grid-\w+-end/)})?~Ol(n+(i=i[r].value),"span",0)?n:Be+we(n,"-start","")+n+Be+"grid-row-span:"+(~Ol(i,"span",0)?Pn(i,/\d+/):+Pn(i,/\d+/)-+Pn(n,/\d+/))+";":Be+we(n,"-start","")+n;case 4896:case 4128:return i&&i.some(function(l){return Pn(l.props,/grid-\w+-start/)})?n:Be+we(we(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return we(n,/(.+)-inline(.+)/,je+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(n)-1-r>6)switch(it(n,r+1)){case 109:if(it(n,r+4)!==45)break;case 102:return we(n,/(.+:)(.+)-([^]+)/,"$1"+je+"$2-$3$1"+li+(it(n,r+3)==108?"$3":"$2-$3"))+n;case 115:return~Ol(n,"stretch",0)?Gh(we(n,"stretch","fill-available"),r,i)+n:n}break;case 5152:case 5920:return we(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,a,c,f,m,p,g){return Be+a+":"+c+g+(f?Be+a+"-span:"+(m?p:+p-+c)+g:"")+n});case 4949:if(it(n,r+6)===121)return we(n,":",":"+je)+n;break;case 6444:switch(it(n,it(n,14)===45?18:11)){case 120:return we(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+je+(it(n,14)===45?"inline-":"")+"box$3$1"+je+"$2$3$1"+Be+"$2box$3")+n;case 100:return we(n,":",":"+Be)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return we(n,"scroll-","scroll-snap-")+n}return n}function Ql(n,r){for(var i="",l=0;l<n.length;l++)i+=r(n[l],l,n,r)||"";return i}function dv(n,r,i,l){switch(n.type){case J0:if(n.children.length)break;case X0:case uc:return n.return=n.return||n.value;case Uh:return"";case Hh:return n.return=n.value+"{"+Ql(n.children,l)+"}";case ts:if(!fn(n.value=n.props.join(",")))return""}return fn(i=Ql(n.children,l))?n.return=n.value+"{"+i+"}":""}function fv(n){var r=Qh(n);return function(i,l,a,c){for(var f="",m=0;m<r;m++)f+=n[m](i,l,a,c)||"";return f}}function pv(n){return function(r){r.root||(r=r.return)&&n(r)}}function hv(n,r,i,l){if(n.length>-1&&!n.return)switch(n.type){case uc:n.return=Gh(n.value,n.length,i);return;case Hh:return Ql([Jn(n,{value:we(n.value,"@","@"+je)})],l);case ts:if(n.length)return ev(i=n.props,function(a){switch(Pn(a,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":no(Jn(n,{props:[we(a,/:(read-\w+)/,":"+li+"$1")]})),no(Jn(n,{props:[a]})),Fu(n,{props:_p(i,l)});break;case"::placeholder":no(Jn(n,{props:[we(a,/:(plac\w+)/,":"+je+"input-$1")]})),no(Jn(n,{props:[we(a,/:(plac\w+)/,":"+li+"$1")]})),no(Jn(n,{props:[we(a,/:(plac\w+)/,Be+"input-$1")]})),no(Jn(n,{props:[a]})),Fu(n,{props:_p(i,l)});break}return""})}}var mv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Lt={},so=typeof process<"u"&&Lt!==void 0&&(Lt.REACT_APP_SC_ATTR||Lt.SC_ATTR)||"data-styled",qh="active",Yh="data-styled-version",is="6.1.14",dc=`/*!sc*/
`,Kl=typeof window<"u"&&"HTMLElement"in window,gv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Lt.REACT_APP_SC_DISABLE_SPEEDY!==""?Lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Lt!==void 0&&Lt.SC_DISABLE_SPEEDY!==void 0&&Lt.SC_DISABLE_SPEEDY!==""&&Lt.SC_DISABLE_SPEEDY!=="false"&&Lt.SC_DISABLE_SPEEDY),yv={},ls=Object.freeze([]),ao=Object.freeze({});function Xh(n,r,i){return i===void 0&&(i=ao),n.theme!==i.theme&&n.theme||r||i.theme}var Jh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,wv=/(^-|-$)/g;function Bp(n){return n.replace(vv,"-").replace(wv,"")}var xv=/(a)(d)/gi,Tl=52,Mp=function(n){return String.fromCharCode(n+(n>25?39:97))};function Mu(n){var r,i="";for(r=Math.abs(n);r>Tl;r=r/Tl|0)i=Mp(r%Tl)+i;return(Mp(r%Tl)+i).replace(xv,"$1-$2")}var bu,Zh=5381,oo=function(n,r){for(var i=r.length;i;)n=33*n^r.charCodeAt(--i);return n},em=function(n){return oo(Zh,n)};function tm(n){return Mu(em(n)>>>0)}function kv(n){return n.displayName||n.name||"Component"}function Cu(n){return typeof n=="string"&&!0}var nm=typeof Symbol=="function"&&Symbol.for,rm=nm?Symbol.for("react.memo"):60115,Sv=nm?Symbol.for("react.forward_ref"):60112,Ev={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},om={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Cv=((bu={})[Sv]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},bu[rm]=om,bu);function Up(n){return("type"in(r=n)&&r.type.$$typeof)===rm?om:"$$typeof"in n?Cv[n.$$typeof]:Ev;var r}var Av=Object.defineProperty,Rv=Object.getOwnPropertyNames,Hp=Object.getOwnPropertySymbols,$v=Object.getOwnPropertyDescriptor,Tv=Object.getPrototypeOf,Wp=Object.prototype;function im(n,r,i){if(typeof r!="string"){if(Wp){var l=Tv(r);l&&l!==Wp&&im(n,l,i)}var a=Rv(r);Hp&&(a=a.concat(Hp(r)));for(var c=Up(n),f=Up(r),m=0;m<a.length;++m){var p=a[m];if(!(p in bv||i&&i[p]||f&&p in f||c&&p in c)){var g=$v(r,p);try{Av(n,p,g)}catch{}}}}return n}function Er(n){return typeof n=="function"}function fc(n){return typeof n=="object"&&"styledComponentId"in n}function yr(n,r){return n&&r?"".concat(n," ").concat(r):n||r||""}function Uu(n,r){if(n.length===0)return"";for(var i=n[0],l=1;l<n.length;l++)i+=n[l];return i}function ai(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Hu(n,r,i){if(i===void 0&&(i=!1),!i&&!ai(n)&&!Array.isArray(n))return r;if(Array.isArray(r))for(var l=0;l<r.length;l++)n[l]=Hu(n[l],r[l]);else if(ai(r))for(var l in r)n[l]=Hu(n[l],r[l]);return n}function pc(n,r){Object.defineProperty(n,"toString",{value:r})}function br(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Pv=function(){function n(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return n.prototype.indexOfGroup=function(r){for(var i=0,l=0;l<r;l++)i+=this.groupSizes[l];return i},n.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var l=this.groupSizes,a=l.length,c=a;r>=c;)if((c<<=1)<0)throw br(16,"".concat(r));this.groupSizes=new Uint32Array(c),this.groupSizes.set(l),this.length=c;for(var f=a;f<c;f++)this.groupSizes[f]=0}for(var m=this.indexOfGroup(r+1),p=(f=0,i.length);f<p;f++)this.tag.insertRule(m,i[f])&&(this.groupSizes[r]++,m++)},n.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],l=this.indexOfGroup(r),a=l+i;this.groupSizes[r]=0;for(var c=l;c<a;c++)this.tag.deleteRule(l)}},n.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var l=this.groupSizes[r],a=this.indexOfGroup(r),c=a+l,f=a;f<c;f++)i+="".concat(this.tag.getRule(f)).concat(dc);return i},n}(),zl=new Map,Gl=new Map,Bl=1,Pl=function(n){if(zl.has(n))return zl.get(n);for(;Gl.has(Bl);)Bl++;var r=Bl++;return zl.set(n,r),Gl.set(r,n),r},Nv=function(n,r){Bl=r+1,zl.set(n,r),Gl.set(r,n)},jv="style[".concat(so,"][").concat(Yh,'="').concat(is,'"]'),Iv=new RegExp("^".concat(so,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Dv=function(n,r,i){for(var l,a=i.split(","),c=0,f=a.length;c<f;c++)(l=a[c])&&n.registerName(r,l)},Lv=function(n,r){for(var i,l=((i=r.textContent)!==null&&i!==void 0?i:"").split(dc),a=[],c=0,f=l.length;c<f;c++){var m=l[c].trim();if(m){var p=m.match(Iv);if(p){var g=0|parseInt(p[1],10),x=p[2];g!==0&&(Nv(x,g),Dv(n,x,p[3]),n.getTag().insertRules(g,a)),a.length=0}else a.push(m)}}},Vp=function(n){for(var r=document.querySelectorAll(jv),i=0,l=r.length;i<l;i++){var a=r[i];a&&a.getAttribute(so)!==qh&&(Lv(n,a),a.parentNode&&a.parentNode.removeChild(a))}};function Ov(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var lm=function(n){var r=document.head,i=n||r,l=document.createElement("style"),a=function(m){var p=Array.from(m.querySelectorAll("style[".concat(so,"]")));return p[p.length-1]}(i),c=a!==void 0?a.nextSibling:null;l.setAttribute(so,qh),l.setAttribute(Yh,is);var f=Ov();return f&&l.setAttribute("nonce",f),i.insertBefore(l,c),l},_v=function(){function n(r){this.element=lm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,a=0,c=l.length;a<c;a++){var f=l[a];if(f.ownerNode===i)return f}throw br(17)}(this.element),this.length=0}return n.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},n.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},n}(),Fv=function(){function n(r){this.element=lm(r),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[r]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},n.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},n}(),zv=function(){function n(r){this.rules=[],this.length=0}return n.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},n.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},n.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},n}(),Qp=Kl,Bv={isServer:!Kl,useCSSOMInjection:!gv},ql=function(){function n(r,i,l){r===void 0&&(r=ao),i===void 0&&(i={});var a=this;this.options=lt(lt({},Bv),r),this.gs=i,this.names=new Map(l),this.server=!!r.isServer,!this.server&&Kl&&Qp&&(Qp=!1,Vp(this)),pc(this,function(){return function(c){for(var f=c.getTag(),m=f.length,p="",g=function(y){var S=function(N){return Gl.get(N)}(y);if(S===void 0)return"continue";var $=c.names.get(S),k=f.getGroup(y);if($===void 0||!$.size||k.length===0)return"continue";var C="".concat(so,".g").concat(y,'[id="').concat(S,'"]'),b="";$!==void 0&&$.forEach(function(N){N.length>0&&(b+="".concat(N,","))}),p+="".concat(k).concat(C,'{content:"').concat(b,'"}').concat(dc)},x=0;x<m;x++)g(x);return p}(a)})}return n.registerId=function(r){return Pl(r)},n.prototype.rehydrate=function(){!this.server&&Kl&&Vp(this)},n.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new n(lt(lt({},this.options),r),this.gs,i&&this.names||void 0)},n.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var l=i.useCSSOMInjection,a=i.target;return i.isServer?new zv(a):l?new _v(a):new Fv(a)}(this.options),new Pv(r)));var r},n.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},n.prototype.registerName=function(r,i){if(Pl(r),this.names.has(r))this.names.get(r).add(i);else{var l=new Set;l.add(i),this.names.set(r,l)}},n.prototype.insertRules=function(r,i,l){this.registerName(r,i),this.getTag().insertRules(Pl(r),l)},n.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},n.prototype.clearRules=function(r){this.getTag().clearGroup(Pl(r)),this.clearNames(r)},n.prototype.clearTag=function(){this.tag=void 0},n}(),Mv=/&/g,Uv=/^\s*\/\/.*$/gm;function sm(n,r){return n.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(l){return"".concat(r," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=sm(i.children,r)),i})}function Hv(n){var r,i,l,a=ao,c=a.options,f=c===void 0?ao:c,m=a.plugins,p=m===void 0?ls:m,g=function(S,$,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(r):S},x=p.slice();x.push(function(S){S.type===ts&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(Mv,i).replace(l,g))}),f.prefix&&x.push(hv),x.push(dv);var y=function(S,$,k,C){$===void 0&&($=""),k===void 0&&(k=""),C===void 0&&(C="&"),r=C,i=$,l=new RegExp("\\".concat(i,"\\b"),"g");var b=S.replace(Uv,""),N=uv(k||$?"".concat(k," ").concat($," { ").concat(b," }"):b);f.namespace&&(N=sm(N,f.namespace));var T=[];return Ql(N,fv(x.concat(pv(function(O){return T.push(O)})))),T};return y.hash=p.length?p.reduce(function(S,$){return $.name||br(15),oo(S,$.name)},Zh).toString():"",y}var Wv=new ql,Wu=Hv(),am=L.createContext({shouldForwardProp:void 0,styleSheet:Wv,stylis:Wu});am.Consumer;L.createContext(void 0);function Vu(){return w.useContext(am)}var Vv=function(){function n(r,i){var l=this;this.inject=function(a,c){c===void 0&&(c=Wu);var f=l.name+c.hash;a.hasNameForId(l.id,f)||a.insertRules(l.id,f,c(l.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,pc(this,function(){throw br(12,String(l.name))})}return n.prototype.getName=function(r){return r===void 0&&(r=Wu),this.name+r.hash},n}(),Qv=function(n){return n>="A"&&n<="Z"};function Kp(n){for(var r="",i=0;i<n.length;i++){var l=n[i];if(i===1&&l==="-"&&n[0]==="-")return n;Qv(l)?r+="-"+l.toLowerCase():r+=l}return r.startsWith("ms-")?"-"+r:r}var um=function(n){return n==null||n===!1||n===""},cm=function(n){var r,i,l=[];for(var a in n){var c=n[a];n.hasOwnProperty(a)&&!um(c)&&(Array.isArray(c)&&c.isCss||Er(c)?l.push("".concat(Kp(a),":"),c,";"):ai(c)?l.push.apply(l,si(si(["".concat(a," {")],cm(c),!1),["}"],!1)):l.push("".concat(Kp(a),": ").concat((r=a,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in mv||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function Zn(n,r,i,l){if(um(n))return[];if(fc(n))return[".".concat(n.styledComponentId)];if(Er(n)){if(!Er(c=n)||c.prototype&&c.prototype.isReactComponent||!r)return[n];var a=n(r);return Zn(a,r,i,l)}var c;return n instanceof Vv?i?(n.inject(i,l),[n.getName(l)]):[n]:ai(n)?cm(n):Array.isArray(n)?Array.prototype.concat.apply(ls,n.map(function(f){return Zn(f,r,i,l)})):[n.toString()]}function dm(n){for(var r=0;r<n.length;r+=1){var i=n[r];if(Er(i)&&!fc(i))return!1}return!0}var Kv=em(is),Gv=function(){function n(r,i,l){this.rules=r,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&dm(r),this.componentId=i,this.baseHash=oo(Kv,i),this.baseStyle=l,ql.registerId(i)}return n.prototype.generateAndInjectStyles=function(r,i,l){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))a=yr(a,this.staticRulesId);else{var c=Uu(Zn(this.rules,r,i,l)),f=Mu(oo(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var m=l(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,m)}a=yr(a,f),this.staticRulesId=f}else{for(var p=oo(this.baseHash,l.hash),g="",x=0;x<this.rules.length;x++){var y=this.rules[x];if(typeof y=="string")g+=y;else if(y){var S=Uu(Zn(y,r,i,l));p=oo(p,S+x),g+=S}}if(g){var $=Mu(p>>>0);i.hasNameForId(this.componentId,$)||i.insertRules(this.componentId,$,l(g,".".concat($),void 0,this.componentId)),a=yr(a,$)}}return a},n}(),ui=L.createContext(void 0);ui.Consumer;function qv(n){var r=L.useContext(ui),i=w.useMemo(function(){return function(l,a){if(!l)throw br(14);if(Er(l)){var c=l(a);return c}if(Array.isArray(l)||typeof l!="object")throw br(8);return a?lt(lt({},a),l):l}(n.theme,r)},[n.theme,r]);return n.children?L.createElement(ui.Provider,{value:i},n.children):null}var Au={};function Yv(n,r,i){var l=fc(n),a=n,c=!Cu(n),f=r.attrs,m=f===void 0?ls:f,p=r.componentId,g=p===void 0?function(W,Q){var K=typeof W!="string"?"sc":Bp(W);Au[K]=(Au[K]||0)+1;var q="".concat(K,"-").concat(tm(is+K+Au[K]));return Q?"".concat(Q,"-").concat(q):q}(r.displayName,r.parentComponentId):p,x=r.displayName,y=x===void 0?function(W){return Cu(W)?"styled.".concat(W):"Styled(".concat(kv(W),")")}(n):x,S=r.displayName&&r.componentId?"".concat(Bp(r.displayName),"-").concat(r.componentId):r.componentId||g,$=l&&a.attrs?a.attrs.concat(m).filter(Boolean):m,k=r.shouldForwardProp;if(l&&a.shouldForwardProp){var C=a.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;k=function(W,Q){return C(W,Q)&&b(W,Q)}}else k=C}var N=new Gv(i,S,l?a.componentStyle:void 0);function T(W,Q){return function(K,q,fe){var ge=K.attrs,Ce=K.componentStyle,Le=K.defaultProps,be=K.foldedComponentIds,Pe=K.styledComponentId,Te=K.target,Re=L.useContext(ui),Ne=Vu(),ke=K.shouldForwardProp||Ne.shouldForwardProp,B=Xh(q,Re,Le)||ao,J=function(oe,te,se){for(var pe,z=lt(lt({},te),{className:void 0,theme:se}),ue=0;ue<oe.length;ue+=1){var ye=Er(pe=oe[ue])?pe(z):pe;for(var Ee in ye)z[Ee]=Ee==="className"?yr(z[Ee],ye[Ee]):Ee==="style"?lt(lt({},z[Ee]),ye[Ee]):ye[Ee]}return te.className&&(z.className=yr(z.className,te.className)),z}(ge,q,B),Y=J.as||Te,P={};for(var F in J)J[F]===void 0||F[0]==="$"||F==="as"||F==="theme"&&J.theme===B||(F==="forwardedAs"?P.as=J.forwardedAs:ke&&!ke(F,Y)||(P[F]=J[F]));var X=function(oe,te){var se=Vu(),pe=oe.generateAndInjectStyles(te,se.styleSheet,se.stylis);return pe}(Ce,J),Z=yr(be,Pe);return X&&(Z+=" "+X),J.className&&(Z+=" "+J.className),P[Cu(Y)&&!Jh.has(Y)?"class":"className"]=Z,fe&&(P.ref=fe),w.createElement(Y,P)}(O,W,Q)}T.displayName=y;var O=L.forwardRef(T);return O.attrs=$,O.componentStyle=N,O.displayName=y,O.shouldForwardProp=k,O.foldedComponentIds=l?yr(a.foldedComponentIds,a.styledComponentId):"",O.styledComponentId=S,O.target=l?a.target:n,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(W){this._foldedDefaultProps=l?function(Q){for(var K=[],q=1;q<arguments.length;q++)K[q-1]=arguments[q];for(var fe=0,ge=K;fe<ge.length;fe++)Hu(Q,ge[fe],!0);return Q}({},a.defaultProps,W):W}}),pc(O,function(){return".".concat(O.styledComponentId)}),c&&im(O,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function Gp(n,r){for(var i=[n[0]],l=0,a=r.length;l<a;l+=1)i.push(r[l],n[l+1]);return i}var qp=function(n){return Object.assign(n,{isCss:!0})};function ne(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(Er(n)||ai(n))return qp(Zn(Gp(ls,si([n],r,!0))));var l=n;return r.length===0&&l.length===1&&typeof l[0]=="string"?Zn(l):qp(Zn(Gp(l,r)))}function Qu(n,r,i){if(i===void 0&&(i=ao),!r)throw br(1,r);var l=function(a){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return n(r,i,ne.apply(void 0,si([a],c,!1)))};return l.attrs=function(a){return Qu(n,r,lt(lt({},i),{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},l.withConfig=function(a){return Qu(n,r,lt(lt({},i),a))},l}var fm=function(n){return Qu(Yv,n)},M=fm;Jh.forEach(function(n){M[n]=fm(n)});var Xv=function(){function n(r,i){this.rules=r,this.componentId=i,this.isStatic=dm(r),ql.registerId(this.componentId+1)}return n.prototype.createStyles=function(r,i,l,a){var c=a(Uu(Zn(this.rules,i,l,a)),""),f=this.componentId+r;l.insertRules(f,f,c)},n.prototype.removeStyles=function(r,i){i.clearRules(this.componentId+r)},n.prototype.renderStyles=function(r,i,l,a){r>2&&ql.registerId(this.componentId+r),this.removeStyles(r,l),this.createStyles(r,i,l,a)},n}();function Jv(n){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var l=ne.apply(void 0,si([n],r,!1)),a="sc-global-".concat(tm(JSON.stringify(l))),c=new Xv(l,a),f=function(p){var g=Vu(),x=L.useContext(ui),y=L.useRef(g.styleSheet.allocateGSInstance(a)).current;return g.styleSheet.server&&m(y,p,g.styleSheet,x,g.stylis),L.useLayoutEffect(function(){if(!g.styleSheet.server)return m(y,p,g.styleSheet,x,g.stylis),function(){return c.removeStyles(y,g.styleSheet)}},[y,p,g.styleSheet,x,g.stylis]),null};function m(p,g,x,y,S){if(c.isStatic)c.renderStyles(p,yv,x,S);else{var $=lt(lt({},g),{theme:Xh(g,y,f.defaultProps)});c.renderStyles(p,$,x,S)}}return L.memo(f)}var Zv=`
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

`;const hc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",mc="inset 2px 2px 3px rgba(0,0,0,0.2)",en=()=>ne`
  -webkit-text-fill-color: ${({theme:n})=>n.materialTextDisabled};
  color: ${({theme:n})=>n.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:n})=>n.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,tn=({background:n="material",color:r="materialText"}={})=>ne`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:i})=>i[n]};
  color: ${({theme:i})=>i[r]};
`,hi=({mainColor:n="black",secondaryColor:r="transparent",pixelSize:i=2})=>ne`
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
`,Cr=()=>ne`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:n})=>n.materialText};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  border: 2px solid ${({theme:n})=>n.canvas};
  outline: 2px solid ${({theme:n})=>n.flatDark};
  outline-offset: -4px;
`,ro={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},ew=({theme:n,topLeftInner:r,bottomRightInner:i,hasShadow:l=!1,hasInsetShadow:a=!1})=>[l?hc:!1,a?mc:!1,r!==null?`inset 1px 1px 0px 1px ${n[r]}`:!1,i!==null?`inset -1px -1px 0 1px ${n[i]}`:!1].filter(Boolean).join(", "),Ke=({invert:n=!1,style:r="button"}={})=>{const i={topLeftOuter:n?"bottomRightOuter":"topLeftOuter",topLeftInner:n?"bottomRightInner":"topLeftInner",bottomRightInner:n?"topLeftInner":"bottomRightInner",bottomRightOuter:n?"topLeftOuter":"bottomRightOuter"};return ne`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:l})=>l[ro[r][i.topLeftOuter]]};
    border-top-color: ${({theme:l})=>l[ro[r][i.topLeftOuter]]};
    border-right-color: ${({theme:l})=>l[ro[r][i.bottomRightOuter]]};
    border-bottom-color: ${({theme:l})=>l[ro[r][i.bottomRightOuter]]};
    box-shadow: ${({theme:l,shadow:a})=>ew({theme:l,topLeftInner:ro[r][i.topLeftInner],bottomRightInner:ro[r][i.bottomRightInner],hasShadow:a})};
  `},uo=()=>ne`
  outline: 2px dotted ${({theme:n})=>n.materialText};
`,tw=n=>Buffer.from(n).toString("base64"),nw=typeof btoa<"u"?btoa:tw,Nl=(n,r=0)=>{const i=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${n}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${nw(i)})`},gc=(n="default")=>ne`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>hi({mainColor:n==="flat"?r.flatLight:r.material,secondaryColor:n==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${tn()}
    ${n==="flat"?Cr():Ke({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${tn()}
    ${n==="flat"?Cr():Ke({style:"window"})}
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
    ${n==="default"?Ke({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:r})=>Nl(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>Nl(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>Nl(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>Nl(r.materialText,0)};
  }
`,rw=M.a`
  color: ${({theme:n})=>n.anchor};
  font-size: inherit;
  text-decoration: ${({underline:n})=>n?"underline":"none"};
  &:visited {
    color: ${({theme:n})=>n.anchorVisited};
  }
`,ow=w.forwardRef(({children:n,underline:r=!0,...i},l)=>L.createElement(rw,{ref:l,underline:r,...i},n));ow.displayName="Anchor";const iw=M.header`
  ${Ke()};
  ${tn()};

  position: ${n=>{var r;return(r=n.position)!==null&&r!==void 0?r:n.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,pm=w.forwardRef(({children:n,fixed:r=!0,position:i="fixed",...l},a)=>L.createElement(iw,{fixed:r,position:r!==!1?i:void 0,ref:a,...l},n));pm.displayName="AppBar";const $r=()=>{};function vr(n,r,i){return i!==null&&n>i?i:r!==null&&n<r?r:n}function lw(n){if(Math.abs(n)<1){const i=n.toExponential().split("e-"),l=i[0].split(".")[1];return(l?l.length:0)+parseInt(i[1],10)}const r=n.toString().split(".")[1];return r?r.length:0}function Yp(n,r,i){const l=Math.round((n-i)/r)*r+i;return Number(l.toFixed(lw(r)))}function er(n){return typeof n=="number"?`${n}px`:n}const sw=M.div`
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
`,aw=M.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,uw=w.forwardRef(({alt:n="",children:r,noBorder:i=!1,size:l=35,square:a=!1,src:c,...f},m)=>L.createElement(sw,{noBorder:i,ref:m,size:er(l),square:a,src:c,...f},c?L.createElement(aw,{src:c,alt:n}):r));uw.displayName="Avatar";const dt={sm:"28px",md:"36px",lg:"44px"},cw=ne`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:n="md"})=>dt[n]};
  width: ${({fullWidth:n,size:r="md",square:i})=>n?"100%":i?dt[r]:"auto"};
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
`,ss=M.button`
  ${({active:n,disabled:r,primary:i,theme:l,variant:a})=>a==="flat"?ne`
          ${Cr()}
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
            ${!n&&!r&&uo}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?ne`
          ${tn()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!n&&Ke({style:"buttonThin"})}
          }
          &:active {
            ${!r&&Ke({style:"buttonThinPressed"})}
          }
          ${n&&Ke({style:"buttonThinPressed"})}
          ${r&&en()}
        `:ne`
          ${tn()};
          border: none;
          ${r&&en()}
          ${n?hi({mainColor:l.material,secondaryColor:l.borderLightest}):""}
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

            ${Ke(n?{style:a==="raised"?"window":"button",invert:!0}:{style:a==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!r&&Ke({style:a==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!n&&!r&&uo}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${n?"0":"1px"};
          }
        `}
  ${cw}
`,xe=w.forwardRef(({onClick:n,disabled:r=!1,children:i,type:l="button",fullWidth:a=!1,size:c="md",square:f=!1,active:m=!1,onTouchStart:p=$r,primary:g=!1,variant:x="default",...y},S)=>L.createElement(ss,{active:m,disabled:r,$disabled:r,fullWidth:a,onClick:r?void 0:n,onTouchStart:p,primary:g,ref:S,size:c,square:f,type:l,variant:x,...y},i));xe.displayName="Button";function tr({defaultValue:n,onChange:r,onChangePropName:i="onChange",readOnly:l,value:a,valuePropName:c="value"}){const f=a!==void 0,[m,p]=w.useState(n),g=w.useCallback(x=>{f||p(x)},[f]);if(f&&typeof r!="function"&&!l){const x=`Warning: You provided a \`${c}\` prop to a component without an \`${i}\` handler.${c==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${i}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${i}\` function that updates \`${c}\`.`}`;console.warn(x)}return[f?a:m,g]}const Ku=M.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${n=>dt[n.size]};
  width: ${n=>n.square?dt[n.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${n=>n.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${n=>dt[n.size]};
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
  ${n=>n.$disabled&&en()}
`,Jt=w.forwardRef(({size:n="lg",disabled:r,square:i,children:l,onClick:a,primary:c,...f},m)=>L.createElement(Ku,{$disabled:r,size:n,square:i,onClick:r?void 0:a,primary:c,role:"menuitem",ref:m,"aria-disabled":r,...f},l));Jt.displayName="MenuListItem";const as=M.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${n=>n.fullWidth?"100%":"auto"};
  padding: 4px;
  ${Ke({style:"window"})}
  ${tn()}
  ${n=>n.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;as.displayName="MenuList";const mn=20,Yl=M.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${mn}px;
  height: ${mn}px;
  opacity: 0;
  z-index: -1;
`,yc=M.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:n})=>n?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:n})=>n.materialText};
  ${n=>n.$disabled&&en()}

  ${Ku} & {
    margin: 0;
    height: 100%;
  }
  ${Ku}:hover & {
    ${({$disabled:n,theme:r})=>!n&&ne`
        color: ${r.materialTextInvert};
      `};
  }
`,vc=M.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${Yl}:focus ~ & {
    ${uo}
  }
  ${Yl}:not(:disabled) ~ &:active {
    ${uo}
  }
`,yn=M.div`
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
    ${n=>n.shadow&&`box-shadow:${mc};`}
  }
`,dw=M.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${gc()}
`,hm=w.forwardRef(({children:n,shadow:r=!0,...i},l)=>L.createElement(yn,{ref:l,shadow:r,...i},L.createElement(dw,null,n)));hm.displayName="ScrollView";const mm=ne`
  width: ${mn}px;
  height: ${mn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,fw=M(yn)`
  ${mm}
  width: ${mn}px;
  height: ${mn}px;
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,pw=M.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
  ${mm}
  width: ${mn-4}px;
  height: ${mn-4}px;
  outline: none;
  border: 2px solid ${({theme:n})=>n.flatDark};
  background: ${({$disabled:n,theme:r})=>n?r.flatLight:r.canvas};
`,hw=M.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,mw=M.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:n,theme:r})=>hi({mainColor:n?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,gw={flat:pw,default:fw},gm=w.forwardRef(({checked:n,className:r="",defaultChecked:i=!1,disabled:l=!1,indeterminate:a=!1,label:c="",onChange:f=$r,style:m={},value:p,variant:g="default",...x},y)=>{var S;const[$,k]=tr({defaultValue:i,onChange:f,readOnly:(S=x.readOnly)!==null&&S!==void 0?S:l,value:n}),C=w.useCallback(T=>{const O=T.target.checked;k(O),f(T)},[f,k]),b=gw[g];let N=null;return a?N=mw:$&&(N=hw),L.createElement(yc,{$disabled:l,className:r,style:m},L.createElement(Yl,{disabled:l,onChange:l?void 0:C,readOnly:l,type:"checkbox",value:p,checked:$,"data-indeterminate":a,ref:y,...x}),L.createElement(b,{$disabled:l,role:"presentation"},N&&L.createElement(N,{$disabled:l,variant:g})),c&&L.createElement(vc,null,c))});gm.displayName="Checkbox";const us=M.div`
  ${({orientation:n,theme:r,size:i="100%"})=>n==="vertical"?`
    height: ${er(i)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${er(i)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;us.displayName="Separator";const yw=M(ss)`
  padding-left: 8px;
`,vw=M(us)`
  height: 21px;
  position: relative;
  top: 0;
`,ym=M.input`
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
`,ww=M.div`
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
  ${ym}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${uo}
    outline-offset: -8px;
  }
`,xw=M.span`
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
`,kw=w.forwardRef(({value:n,defaultValue:r,onChange:i=$r,disabled:l=!1,variant:a="default",...c},f)=>{var m;const[p,g]=tr({defaultValue:r,onChange:i,readOnly:(m=c.readOnly)!==null&&m!==void 0?m:l,value:n}),x=y=>{const S=y.target.value;g(S),i(y)};return L.createElement(yw,{disabled:l,as:"div",variant:a,size:"md"},L.createElement(ym,{onChange:x,readOnly:l,disabled:l,value:p??"#008080",type:"color",ref:f,...c}),L.createElement(ww,{$disabled:l,color:p??"#008080",role:"presentation"}),a==="default"&&L.createElement(vw,{orientation:"vertical"}),L.createElement(xw,{$disabled:l,variant:a}))});kw.displayName="ColorInput";const Sw=M.div`
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
      ${hi({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:n})}
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
`,Xp=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Ew=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function bw({digit:n=0,pixelSize:r=2,...i}){const l=Ew[Number(n)].map((a,c)=>a?`${Xp[c]} active`:Xp[c]);return L.createElement(Sw,{pixelSize:r,...i},l.map((a,c)=>L.createElement("span",{className:a,key:c})))}const Cw=M.div`
  ${Ke({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Aw={sm:1,md:2,lg:3,xl:4},Rw=w.forwardRef(({value:n=0,minLength:r=3,size:i="md",...l},a)=>{const c=w.useMemo(()=>n.toString().padStart(r,"0").split(""),[r,n]);return L.createElement(Cw,{ref:a,...l},c.map((f,m)=>L.createElement(bw,{digit:f,pixelSize:Aw[i],key:m})))});Rw.displayName="Counter";const vm=ne`
  display: flex;
  align-items: center;
  width: ${({fullWidth:n})=>n?"100%":"auto"};
  min-height: ${dt.md};
`,$w=M(yn).attrs({"data-testid":"variant-default"})`
  ${vm}
  background: ${({$disabled:n,theme:r})=>n?r.material:r.canvas};
`,Tw=M.div.attrs({"data-testid":"variant-flat"})`
  ${Cr()}
  ${vm}
  position: relative;
`,wm=ne`
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
  ${({disabled:n,variant:r})=>r!=="flat"&&n&&en()}
`,Pw=M.input`
  ${wm}
  padding: 0 8px;
`,Nw=M.textarea`
  ${wm}
  padding: 8px;
  resize: none;
  ${({variant:n})=>gc(n)}
`,Tr=w.forwardRef(({className:n,disabled:r=!1,fullWidth:i,onChange:l=$r,shadow:a=!0,style:c,variant:f="default",...m},p)=>{const g=f==="flat"?Tw:$w,x=w.useMemo(()=>{var y;return m.multiline?L.createElement(Nw,{disabled:r,onChange:r?void 0:l,readOnly:r,ref:p,variant:f,...m}):L.createElement(Pw,{disabled:r,onChange:r?void 0:l,readOnly:r,ref:p,type:(y=m.type)!==null&&y!==void 0?y:"text",variant:f,...m})},[r,l,m,p,f]);return L.createElement(g,{className:n,fullWidth:i,$disabled:r,shadow:a,style:c},x)});Tr.displayName="TextInput";const jw=M.div`
  display: inline-flex;
  align-items: center;
`,Gu=M(xe)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:n})=>n==="flat"?ne`
          height: calc(50% - 1px);
        `:ne`
          height: 50%;
        `}
`,Iw=M.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:n})=>n==="flat"?ne`
          height: calc(${dt.md} - 4px);
        `:ne`
          height: ${dt.md};
          margin-left: 2px;
        `}
`,Jp=M.span`
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
  ${Gu}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:n})=>n.materialTextDisabledShadow}
    );
    ${({invert:n})=>n?ne`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:ne`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,xm=w.forwardRef(({className:n,defaultValue:r,disabled:i=!1,max:l,min:a,onChange:c,readOnly:f,step:m=1,style:p,value:g,variant:x="default",width:y,...S},$)=>{const[k,C]=tr({defaultValue:r,onChange:c,readOnly:f,value:g}),b=w.useCallback(K=>{const q=parseFloat(K.target.value);C(q)},[C]),N=w.useCallback(K=>{const q=vr(parseFloat(((k??0)+K).toFixed(2)),a??null,l??null);C(q),c==null||c(q)},[l,a,c,C,k]),T=w.useCallback(()=>{k!==void 0&&(c==null||c(k))},[c,k]),O=w.useCallback(()=>{N(m)},[N,m]),W=w.useCallback(()=>{N(-m)},[N,m]),Q=x==="flat"?"flat":"raised";return L.createElement(jw,{className:n,style:{...p,width:y!==void 0?er(y):"auto"},...S},L.createElement(Tr,{value:k,variant:x,onChange:b,disabled:i,type:"number",readOnly:f,ref:$,fullWidth:!0,onBlur:T}),L.createElement(Iw,{variant:x},L.createElement(Gu,{"data-testid":"increment",variant:Q,disabled:i||f,onClick:O},L.createElement(Jp,{invert:!0})),L.createElement(Gu,{"data-testid":"decrement",variant:Q,disabled:i||f,onClick:W},L.createElement(Jp,null))))});xm.displayName="NumberInput";function Dw(){const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let i=0;i<10;i+=1)r+=n[Math.floor(Math.random()*n.length)];return r}const km=n=>w.useMemo(()=>Dw(),[n]),Sm=ne`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Em=ne`
  background: ${({theme:n})=>n.hoverBackground};
  color: ${({theme:n})=>n.canvasTextInvert};
`,wc=M.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,Lw=M.div`
  ${Sm}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${wc}:focus & {
    ${Em}
    border: 2px dotted ${({theme:n})=>n.focusSecondary};
  }
`,bm=ne`
  height: ${dt.md};
  display: inline-block;
  color: ${({$disabled:n=!1,theme:r})=>n?en():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:n})=>n?"default":"pointer"};
`,Ow=M(yn)`
  ${bm}
  background: ${({$disabled:n=!1,theme:r})=>n?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,_w=M.div`
  ${Cr()}
  ${bm}
  background: ${({$disabled:n=!1,theme:r})=>n?r.flatLight:r.canvas};
`,Fw=M.select`
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
  ${Sm}
  cursor: pointer;
  &:disabled {
    ${en()};
    background: ${({theme:n})=>n.material};
    cursor: default;
  }
`,Cm=M(ss).attrs(()=>({"aria-hidden":"true"}))`
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
`,zw=M.span`
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
  ${Cm}:active & {
    margin-top: 2px;
  }
`,Bw=M.ul`
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
  box-shadow: ${hc};
  ${({variant:n="default"})=>n==="flat"?ne`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:ne`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:n="default"})=>gc(n)}
`,Mw=M.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${dt.md} - 4px);
  line-height: calc(${dt.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:n})=>n.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:n})=>n?Em:""}
  user-select: none;
`,Uw=[],Am=({className:n,defaultValue:r,disabled:i,native:l,onChange:a,options:c=Uw,readOnly:f,style:m,value:p,variant:g,width:x})=>{var y;const S=w.useMemo(()=>c.filter(Boolean),[c]),[$,k]=tr({defaultValue:r??((y=S==null?void 0:S[0])===null||y===void 0?void 0:y.value),onChange:a,readOnly:f,value:p}),C=!(i||f),b=w.useMemo(()=>({className:n,style:{...m,width:x}}),[n,m,x]),N=w.useMemo(()=>L.createElement(Cm,{as:"div","data-testid":"select-button",$disabled:i,native:l,tabIndex:-1,variant:g==="flat"?"flat":"raised"},L.createElement(zw,{"data-testid":"select-icon",$disabled:i})),[i,l,g]),T=w.useMemo(()=>g==="flat"?_w:Ow,[g]);return w.useMemo(()=>({isEnabled:C,options:S,value:$,setValue:k,wrapperProps:b,DropdownButton:N,Wrapper:T}),[N,T,C,S,k,$,b])},Hw={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},Ww=1e3,Vw=({onBlur:n,onChange:r,onClose:i,onFocus:l,onKeyDown:a,onMouseDown:c,onOpen:f,open:m,options:p,readOnly:g,value:x,selectRef:y,setValue:S,wrapperRef:$})=>{const k=w.useRef(null),C=w.useRef([]),b=w.useRef(0),N=w.useRef(0),T=w.useRef(),O=w.useRef("search"),W=w.useRef(""),Q=w.useRef(),[K,q]=tr({defaultValue:!1,onChange:f,onChangePropName:"onOpen",readOnly:g,value:m,valuePropName:"open"}),fe=w.useMemo(()=>{const z=p.findIndex(ue=>ue.value===x);return b.current=vr(z,0,null),p[z]},[p,x]),[ge,Ce]=w.useState(p[0]),Le=w.useCallback(z=>{const ue=k.current,ye=C.current[z];if(!ye||!ue){T.current=z;return}T.current=void 0;const Ee=ue.clientHeight,Ie=ue.scrollTop,Ge=ue.scrollTop+Ee,Ve=ye.offsetTop,yt=ye.offsetHeight,Pt=ye.offsetTop+ye.offsetHeight;Ve<Ie&&ue.scrollTo(0,Ve),Pt>Ge&&ue.scrollTo(0,Ve-Ee+yt),ye.focus({preventScroll:!0})},[k]),be=w.useCallback((z,{scroll:ue}={})=>{var ye;const Ee=p.length-1;let Ie;switch(z){case"first":{Ie=0;break}case"last":{Ie=Ee;break}case"next":{Ie=vr(N.current+1,0,Ee);break}case"previous":{Ie=vr(N.current-1,0,Ee);break}case"selected":{Ie=vr((ye=b.current)!==null&&ye!==void 0?ye:0,0,Ee);break}default:Ie=z}N.current=Ie,Ce(p[Ie]),ue&&Le(Ie)},[N,p,Le]),Pe=w.useCallback(({fromEvent:z})=>{q(!0),be("selected",{scroll:!0}),f==null||f({fromEvent:z})},[be,f,q]),Te=w.useCallback(()=>{O.current="search",W.current="",clearTimeout(Q.current)},[]),Re=w.useCallback(({focusSelect:z,fromEvent:ue})=>{var ye;i==null||i({fromEvent:ue}),q(!1),Ce(p[0]),Te(),T.current=void 0,z&&((ye=y.current)===null||ye===void 0||ye.focus())},[Te,i,p,y,q]),Ne=w.useCallback(({fromEvent:z})=>{K?Re({focusSelect:!1,fromEvent:z}):Pe({fromEvent:z})},[Re,Pe,K]),ke=w.useCallback((z,{fromEvent:ue})=>{b.current!==z&&(b.current=z,S(p[z].value),r==null||r(p[z],{fromEvent:ue}))},[r,p,S]),B=w.useCallback(({focusSelect:z,fromEvent:ue})=>{ke(N.current,{fromEvent:ue}),Re({focusSelect:z,fromEvent:ue})},[Re,ke]),J=w.useCallback((z,{fromEvent:ue,select:ye})=>{var Ee;switch(O.current==="cycleFirstLetter"&&z!==W.current&&(O.current="search"),z===W.current?O.current="cycleFirstLetter":W.current+=z,O.current){case"search":{let Ie=p.findIndex(Ge=>{var Ve;return((Ve=Ge.label)===null||Ve===void 0?void 0:Ve.toLocaleUpperCase().indexOf(W.current))===0});Ie<0&&(Ie=p.findIndex(Ge=>{var Ve;return((Ve=Ge.label)===null||Ve===void 0?void 0:Ve.toLocaleUpperCase().indexOf(z))===0}),W.current=z),Ie>=0&&(ye?ke(Ie,{fromEvent:ue}):be(Ie,{scroll:!0}));break}case"cycleFirstLetter":{const Ie=ye?(Ee=b.current)!==null&&Ee!==void 0?Ee:-1:N.current;let Ge=p.findIndex((Ve,yt)=>{var Pt;return yt>Ie&&((Pt=Ve.label)===null||Pt===void 0?void 0:Pt.toLocaleUpperCase().indexOf(z))===0});Ge<0&&(Ge=p.findIndex(Ve=>{var yt;return((yt=Ve.label)===null||yt===void 0?void 0:yt.toLocaleUpperCase().indexOf(z))===0})),Ge>=0&&(ye?ke(Ge,{fromEvent:ue}):be(Ge,{scroll:!0}));break}}clearTimeout(Q.current),Q.current=setTimeout(()=>{O.current==="search"&&(W.current="")},Ww)},[be,p,ke]),Y=w.useCallback(z=>{var ue;z.button===0&&(z.preventDefault(),(ue=y.current)===null||ue===void 0||ue.focus(),Ne({fromEvent:z}),c==null||c(z))},[c,y,Ne]),P=w.useCallback(z=>{B({focusSelect:!0,fromEvent:z})},[B]),F=w.useCallback(z=>{const{altKey:ue,code:ye,ctrlKey:Ee,metaKey:Ie,shiftKey:Ge}=z,{ARROW_DOWN:Ve,ARROW_UP:yt,END:Pt,ENTER:rn,ESC:_t,HOME:wn,SPACE:on,TAB:xn}=Hw,go=ue||Ee||Ie||Ge;if(!(ye===xn&&(ue||Ee||Ie)||ye!==xn&&go))switch(ye){case Ve:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("next",{scroll:!0});break}case yt:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("previous",{scroll:!0});break}case Pt:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("last",{scroll:!0});break}case rn:{if(!K)return;z.preventDefault(),B({focusSelect:!0,fromEvent:z});break}case _t:{if(!K)return;z.preventDefault(),Re({focusSelect:!0,fromEvent:z});break}case wn:{if(z.preventDefault(),!K){Pe({fromEvent:z});return}be("first",{scroll:!0});break}case on:{z.preventDefault(),K?B({focusSelect:!0,fromEvent:z}):Pe({fromEvent:z});break}case xn:{if(!K)return;Ge||z.preventDefault(),B({focusSelect:!Ge,fromEvent:z});break}default:!go&&ye.match(/^Key/)&&(z.preventDefault(),z.stopPropagation(),J(ye.replace(/^Key/,""),{select:!K,fromEvent:z}))}},[be,Re,K,Pe,J,B]),X=w.useCallback(z=>{F(z),a==null||a(z)},[F,a]),Z=w.useCallback(z=>{be(z)},[be]),oe=w.useCallback(z=>{K||(Te(),n==null||n(z))},[Te,n,K]),te=w.useCallback(z=>{Te(),l==null||l(z)},[Te,l]),se=w.useCallback(z=>{k.current=z,T.current!==void 0&&Le(T.current)},[Le]),pe=w.useCallback((z,ue)=>{C.current[ue]=z,T.current===ue&&Le(T.current)},[Le]);return w.useEffect(()=>{if(!K)return()=>{};const z=ue=>{var ye;const Ee=ue.target;!((ye=$.current)===null||ye===void 0)&&ye.contains(Ee)||(ue.preventDefault(),Re({focusSelect:!1,fromEvent:ue}))};return document.addEventListener("mousedown",z),()=>{document.removeEventListener("mousedown",z)}},[Re,K,$]),w.useMemo(()=>({activeOption:ge,handleActivateOptionIndex:Z,handleBlur:oe,handleButtonKeyDown:X,handleDropdownKeyDown:F,handleFocus:te,handleMouseDown:Y,handleOptionClick:P,handleSetDropdownRef:se,handleSetOptionRef:pe,open:K,selectedOption:fe}),[ge,Z,oe,X,te,F,Y,P,se,pe,K,fe])},Qw=w.forwardRef(({className:n,defaultValue:r,disabled:i,onChange:l,options:a,readOnly:c,style:f,value:m,variant:p,width:g,...x},y)=>{const{isEnabled:S,options:$,setValue:k,value:C,DropdownButton:b,Wrapper:N}=Am({defaultValue:r,disabled:i,native:!0,onChange:l,options:a,readOnly:c,value:m,variant:p}),T=w.useCallback(O=>{const W=$.find(Q=>Q.value===O.target.value);W&&(k(W.value),l==null||l(W,{fromEvent:O}))},[l,$,k]);return L.createElement(N,{className:n,style:{...f,width:g}},L.createElement(wc,null,L.createElement(Fw,{...x,disabled:i,onChange:S?T:$r,ref:y,value:C},$.map((O,W)=>{var Q;return L.createElement("option",{key:`${O.value}-${W}`,value:O.value},(Q=O.label)!==null&&Q!==void 0?Q:O.value)})),b))});Qw.displayName="SelectNative";function Kw({activateOptionIndex:n,active:r,index:i,onClick:l,option:a,selected:c,setRef:f}){const m=w.useCallback(()=>{n(i)},[n,i]),p=w.useCallback(x=>{f(x,i)},[i,f]),g=km();return L.createElement(Mw,{active:r,"aria-selected":c?"true":void 0,"data-value":a.value,id:g,onClick:l,onMouseEnter:m,ref:p,role:"option",tabIndex:0},a.label)}function Gw({"aria-label":n,"aria-labelledby":r,className:i,defaultValue:l,disabled:a=!1,formatDisplay:c,inputProps:f,labelId:m,menuMaxHeight:p,name:g,onBlur:x,onChange:y,onClose:S,onFocus:$,onKeyDown:k,onMouseDown:C,onOpen:b,open:N,options:T,readOnly:O,shadow:W=!0,style:Q,variant:K="default",value:q,width:fe="auto",...ge},Ce){const{isEnabled:Le,options:be,setValue:Pe,value:Te,wrapperProps:Re,DropdownButton:Ne,Wrapper:ke}=Am({className:i,defaultValue:l,disabled:a,native:!1,onChange:y,options:T,style:Q,readOnly:O,value:q,variant:K,width:fe}),B=w.useRef(null),J=w.useRef(null),Y=w.useRef(null),{activeOption:P,handleActivateOptionIndex:F,handleBlur:X,handleButtonKeyDown:Z,handleDropdownKeyDown:oe,handleFocus:te,handleMouseDown:se,handleOptionClick:pe,handleSetDropdownRef:z,handleSetOptionRef:ue,open:ye,selectedOption:Ee}=Vw({onBlur:x,onChange:y,onClose:S,onFocus:$,onKeyDown:k,onMouseDown:C,onOpen:b,open:N,options:be,value:Te,selectRef:J,setValue:Pe,wrapperRef:Y});w.useImperativeHandle(Ce,()=>({focus:rn=>{var _t;(_t=J.current)===null||_t===void 0||_t.focus(rn)},node:B.current,value:String(Te)}),[Te]);const Ie=w.useMemo(()=>Ee?typeof c=="function"?c(Ee):Ee.label:"",[c,Ee]),Ge=Le?1:void 0,Ve=w.useMemo(()=>p?{overflow:"auto",maxHeight:p}:void 0,[p]),yt=km(),Pt=w.useMemo(()=>be.map((rn,_t)=>{const wn=`${Te}-${_t}`,on=rn===P,xn=rn===Ee;return L.createElement(Kw,{activateOptionIndex:F,active:on,index:_t,key:wn,onClick:pe,option:rn,selected:xn,setRef:ue})}),[P,F,pe,ue,be,Ee,Te]);return L.createElement(ke,{...Re,$disabled:a,ref:Y,shadow:W,style:{...Q,width:fe}},L.createElement("input",{name:g,ref:B,type:"hidden",value:String(Te),...f}),L.createElement(wc,{"aria-disabled":a,"aria-expanded":ye,"aria-haspopup":"listbox","aria-label":n,"aria-labelledby":r??m,"aria-owns":Le&&ye?yt:void 0,onBlur:X,onFocus:te,onKeyDown:Z,onMouseDown:Le?se:C,ref:J,role:"button",tabIndex:Ge,...ge},L.createElement(Lw,null,Ie),Ne),Le&&ye&&L.createElement(Bw,{id:yt,onKeyDown:oe,ref:z,role:"listbox",style:Ve,tabIndex:0,variant:K},Pt))}const xc=w.forwardRef(Gw);xc.displayName="Select";const qw=M.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${n=>n.noPadding?"0":"4px"};
`,xt=w.forwardRef(function({children:r,noPadding:i=!1,...l},a){return L.createElement(qw,{noPadding:i,ref:a,...l},r)});xt.displayName="Toolbar";const Yw=M.div`
  padding: 16px;
`,kt=w.forwardRef(function({children:r,...i},l){return L.createElement(Yw,{ref:l,...i},r)});kt.displayName="WindowContent";const Xw=M.div`
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

  ${ss} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,kc=w.forwardRef(function({active:r=!0,children:i,...l},a){return L.createElement(Xw,{active:r,ref:a,...l},i)});kc.displayName="WindowHeader";const Jw=M.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${Ke({style:"window"})}
  ${tn()}
`,Zw=M.span`
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
`,Sc=w.forwardRef(({children:n,resizable:r=!1,resizeRef:i,shadow:l=!0,...a},c)=>L.createElement(Jw,{ref:c,shadow:l,...a},n,r&&L.createElement(Zw,{"data-testid":"resizeHandle",ref:i})));Sc.displayName="Window";const ex=M(hm)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:n})=>n.canvas};
`,tx=M.div`
  display: flex;
  background: ${({theme:n})=>n.materialDark};
  color: #dfe0e3;
`,nx=M.div`
  display: flex;
  flex-wrap: wrap;
`,Tn=M.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,rx=M.span`
  cursor: pointer;

  background: ${({active:n,theme:r})=>n?r.hoverBackground:"transparent"};
  color: ${({active:n,theme:r})=>n?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:n,active:r})=>r?"none":n.materialDark};
  }
`,ox=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function ix(n,r){return new Date(n,r+1,0).getDate()}function lx(n,r,i){return new Date(n,r,i).getDay()}function sx(n){const r=new Date(Date.parse(n)),i=r.getUTCDate(),l=r.getUTCMonth(),a=r.getUTCFullYear();return{day:i,month:l,year:a}}const ax=w.forwardRef(({className:n,date:r=new Date().toISOString(),onAccept:i,onCancel:l,shadow:a=!0},c)=>{const[f,m]=w.useState(()=>sx(r)),{year:p,month:g,day:x}=f,y=w.useCallback(({value:b})=>{m(N=>({...N,month:b}))},[]),S=w.useCallback(b=>{m(N=>({...N,year:b}))},[]),$=w.useCallback(b=>{m(N=>({...N,day:b}))},[]),k=w.useCallback(()=>{const b=[f.year,f.month+1,f.day].map(N=>String(N).padStart(2,"0")).join("-");i==null||i(b)},[f.day,f.month,f.year,i]),C=w.useMemo(()=>{const b=Array.from({length:42}),N=lx(p,g,1);let T=x;const O=ix(p,g);return T=T<O?T:O,b.forEach((W,Q)=>{if(Q>=N&&Q<O+N){const K=Q-N+1;b[Q]=L.createElement(Tn,{key:Q,onClick:()=>{$(K)}},L.createElement(rx,{active:K===T},K))}else b[Q]=L.createElement(Tn,{key:Q})}),b},[x,$,g,p]);return L.createElement(Sc,{className:n,ref:c,shadow:a,style:{margin:20}},L.createElement(kc,null,L.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),L.createElement(kt,null,L.createElement(xt,{noPadding:!0,style:{justifyContent:"space-between"}},L.createElement(xc,{options:ox,value:g,onChange:y,width:128,menuMaxHeight:200}),L.createElement(xm,{value:p,onChange:S,width:100})),L.createElement(ex,null,L.createElement(tx,null,L.createElement(Tn,null,"S"),L.createElement(Tn,null,"M"),L.createElement(Tn,null,"T"),L.createElement(Tn,null,"W"),L.createElement(Tn,null,"T"),L.createElement(Tn,null,"F"),L.createElement(Tn,null,"S")),L.createElement(nx,null,C)),L.createElement(xt,{noPadding:!0,style:{justifyContent:"space-between"}},L.createElement(xe,{fullWidth:!0,onClick:l,disabled:!l},"Cancel"),L.createElement(xe,{fullWidth:!0,onClick:i?k:void 0,disabled:!i},"OK"))))});ax.displayName="DatePicker";const ux=n=>{switch(n){case"status":case"well":return ne`
        ${Ke({style:"status"})}
      `;case"window":case"outside":return ne`
        ${Ke({style:"window"})}
      `;case"field":return ne`
        ${Ke({style:"field"})}
      `;default:return ne`
        ${Ke()}
      `}},cx=M.div`
  position: relative;
  font-size: 1rem;
  ${({variant:n})=>ux(n)}
  ${({variant:n})=>tn(n==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Tt=w.forwardRef(({children:n,shadow:r=!1,variant:i="window",...l},a)=>L.createElement(cx,{ref:a,shadow:r,variant:i,...l},n));Tt.displayName="Frame";const dx=M.fieldset`
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
  ${n=>n.$disabled&&en()}
`,fx=M.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:n,variant:r})=>r==="flat"?n.canvas:n.material};
`,Rm=w.forwardRef(({label:n,disabled:r=!1,variant:i="default",children:l,...a},c)=>L.createElement(dx,{"aria-disabled":r,$disabled:r,variant:i,ref:c,...a},n&&L.createElement(fx,{variant:i},n),l));Rm.displayName="GroupBox";const px=M.div`
  ${({theme:n,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${er(r)};
  width: 5px;
  border-top: 2px solid ${n.borderLightest};
  border-left: 2px solid ${n.borderLightest};
  border-bottom: 2px solid ${n.borderDark};
  border-right: 2px solid ${n.borderDark};
  background: ${n.material};
`}
`;px.displayName="Handle";const hx="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",mx=M.div`
  display: inline-block;
  height: ${({size:n})=>er(n)};
  width: ${({size:n})=>er(n)};
`,gx=M.span`
  display: block;
  background: ${hx};
  background-size: cover;
  width: 100%;
  height: 100%;
`,yx=w.forwardRef(({size:n=30,...r},i)=>L.createElement(mx,{size:n,ref:i,...r},L.createElement(gx,null)));yx.displayName="Hourglass";const vx=M.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,wx=M.div`
  position: relative;
`,xx=M.div`
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
`,kx=M(yn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Sx=M.div`
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
`,$m=w.forwardRef(({backgroundStyles:n,children:r,...i},l)=>L.createElement(vx,{ref:l,...i},L.createElement(wx,null,L.createElement(xx,null,L.createElement(kx,{style:n},r)),L.createElement(Sx,null))));$m.displayName="Monitor";const Ex=M.div`
  display: inline-block;
  height: ${dt.md};
  width: 100%;
`,bx=M(yn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Tm=ne`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Cx=M.div`
  position: relative;
  top: 4px;
  ${Tm}
  background: ${({theme:n})=>n.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:n})=>n.materialText};
`,Ax=M.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Tm}
  color: ${({theme:n})=>n.materialTextInvert};
  background: ${({theme:n})=>n.progress};
  clip-path: polygon(
    0 0,
    ${({value:n=0})=>n}% 0,
    ${({value:n=0})=>n}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,Rx=M.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Pm=17,$x=M.span`
  display: inline-block;
  width: ${Pm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:n})=>n.progress};
  border-color: ${({theme:n})=>n.material};
  border-width: 0px 1px;
  border-style: solid;
`,cs=w.forwardRef(({hideValue:n=!1,shadow:r=!0,value:i,variant:l="default",...a},c)=>{const f=n?null:`${i}%`,m=w.useRef(null),[p,g]=w.useState([]),x=w.useCallback(()=>{if(!m.current||i===void 0)return;const y=m.current.getBoundingClientRect().width,S=Math.round(i/100*y/Pm);g(Array.from({length:S}))},[i]);return w.useEffect(()=>(x(),window.addEventListener("resize",x),()=>window.removeEventListener("resize",x)),[x]),L.createElement(Ex,{"aria-valuenow":i!==void 0?Math.round(i):void 0,ref:c,role:"progressbar",variant:l,...a},L.createElement(bx,{variant:l,shadow:r},l==="default"?L.createElement(L.Fragment,null,L.createElement(Cx,{"data-testid":"defaultProgress1"},f),L.createElement(Ax,{"data-testid":"defaultProgress2",value:i},f)):L.createElement(Rx,{ref:m,"data-testid":"tileProgress"},p.map((y,S)=>L.createElement($x,{key:S})))))});cs.displayName="ProgressBar";const Nm=ne`
  width: ${mn}px;
  height: ${mn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Tx=M(yn)`
  ${Nm}
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
`,Px=M.div`
  ${Cr()}
  ${Nm}
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
`,Nx=M.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,jx={flat:Px,default:Tx},Ix=w.forwardRef(({checked:n,className:r="",disabled:i=!1,label:l="",onChange:a,style:c={},variant:f="default",...m},p)=>{const g=jx[f];return L.createElement(yc,{$disabled:i,className:r,style:c},L.createElement(g,{$disabled:i,role:"presentation"},n&&L.createElement(Nx,{$disabled:i,variant:f})),L.createElement(Yl,{disabled:i,onChange:i?void 0:a,readOnly:i,type:"radio",checked:n,ref:p,...m}),l&&L.createElement(vc,null,l))});Ix.displayName="Radio";const Dx=typeof window<"u"?w.useLayoutEffect:w.useEffect;function gr(n){const r=w.useRef(n);return Dx(()=>{r.current=n}),w.useCallback((...i)=>(0,r.current)(...i),[])}function Zp(n,r){typeof n=="function"?n(r):n&&(n.current=r)}function eh(n,r){return w.useMemo(()=>n==null&&r==null?null:i=>{Zp(n,i),Zp(r,i)},[n,r])}var Lx=Mh();let ds=!0,qu=!1,th;const Ox={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function _x(n){if("type"in n){const{type:r,tagName:i}=n;if(i==="INPUT"&&Ox[r]&&!n.readOnly||i==="TEXTAREA"&&!n.readOnly)return!0}return!!("isContentEditable"in n&&n.isContentEditable)}function Fx(n){n.metaKey||n.altKey||n.ctrlKey||(ds=!0)}function Ru(){ds=!1}function zx(){this.visibilityState==="hidden"&&qu&&(ds=!0)}function Bx(n){n.addEventListener("keydown",Fx,!0),n.addEventListener("mousedown",Ru,!0),n.addEventListener("pointerdown",Ru,!0),n.addEventListener("touchstart",Ru,!0),n.addEventListener("visibilitychange",zx,!0)}function Mx(n){const{target:r}=n;try{return r.matches(":focus-visible")}catch{}return ds||_x(r)}function Ux(){qu=!0,window.clearTimeout(th),th=window.setTimeout(()=>{qu=!1},100)}function Hx(){const n=w.useCallback(r=>{const i=Lx.findDOMNode(r);i!=null&&Bx(i.ownerDocument)},[]);return{isFocusVisible:Mx,onBlurVisible:Ux,ref:n}}function Wx(n,r,i){return(i-r)*n+r}function jl(n,r){if(r!==void 0&&"changedTouches"in n){for(let i=0;i<n.changedTouches.length;i+=1){const l=n.changedTouches[i];if(l.identifier===r)return{x:l.clientX,y:l.clientY}}return!1}return"clientX"in n?{x:n.clientX,y:n.clientY}:!1}function Il(n){return n&&n.ownerDocument||document}function Vx(n,r){var i;const{index:l}=(i=n.reduce((a,c,f)=>{const m=Math.abs(r-c);return a===null||m<a.distance||m===a.distance?{distance:m,index:f}:a},null))!==null&&i!==void 0?i:{};return l??-1}const Qx=M.div`
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
`,jm=()=>ne`
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
`,Kx=M(yn)`
  ${jm()}
`,Gx=M(yn)`
  ${jm()}

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
`,qx=M.span`
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
          ${Cr()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:ne`
          ${tn()}
          ${Ke()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:n,theme:r})=>n&&hi({mainColor:r.material,secondaryColor:r.borderLightest})}
`,Xl=6,Yx=M.span`
  display: inline-block;
  position: absolute;

  ${({orientation:n})=>n==="vertical"?ne`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${Xl}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:ne`
          bottom: ${-6}px;
          height: ${Xl}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({theme:r})=>r.materialText};
          border-right: 1px solid ${({theme:r})=>r.materialText};
        `}

  color:  ${({theme:n})=>n.materialText};
  ${({$disabled:n,theme:r})=>n&&ne`
      ${en()}
      box-shadow: 1px 1px 0px ${r.materialTextDisabledShadow};
      border-color: ${r.materialTextDisabled};
    `}
`,Xx=M.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:n})=>n==="vertical"?ne`
          transform: translate(${Xl+2}px, ${Xl+1}px);
        `:ne`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,Jx=w.forwardRef(({defaultValue:n,disabled:r=!1,marks:i=!1,max:l=100,min:a=0,name:c,onChange:f,onChangeCommitted:m,onMouseDown:p,orientation:g="horizontal",size:x="100%",step:y=1,value:S,variant:$="default",...k},C)=>{const b=$==="flat"?Gx:Kx,N=g==="vertical",[T=a,O]=tr({defaultValue:n,onChange:f??m,value:S}),{isFocusVisible:W,onBlurVisible:Q,ref:K}=Hx(),[q,fe]=w.useState(!1),ge=w.useRef(),Ce=w.useRef(null),Le=eh(K,ge),be=eh(C,Le),Pe=gr(X=>{W(X)&&fe(!0)}),Te=gr(()=>{q!==!1&&(fe(!1),Q())}),Re=w.useRef(),Ne=w.useMemo(()=>i===!0&&Number.isFinite(y)?[...Array(Math.round((l-a)/y)+1)].map((X,Z)=>({label:void 0,value:a+y*Z})):Array.isArray(i)?i:[],[i,l,a,y]),ke=gr(X=>{const Z=(l-a)/10,oe=Ne.map(pe=>pe.value),te=oe.indexOf(T);let se=0;switch(X.key){case"Home":se=a;break;case"End":se=l;break;case"PageUp":y&&(se=T+Z);break;case"PageDown":y&&(se=T-Z);break;case"ArrowRight":case"ArrowUp":y?se=T+y:se=oe[te+1]||oe[oe.length-1];break;case"ArrowLeft":case"ArrowDown":y?se=T-y:se=oe[te-1]||oe[0];break;default:return}X.preventDefault(),y&&(se=Yp(se,y,a)),se=vr(se,a,l),O(se),fe(!0),f==null||f(se),m==null||m(se)}),B=w.useCallback(X=>{if(!ge.current)return 0;const Z=ge.current.getBoundingClientRect();let oe;N?oe=(Z.bottom-X.y)/Z.height:oe=(X.x-Z.left)/Z.width;let te;if(te=Wx(oe,a,l),y)te=Yp(te,y,a);else{const se=Ne.map(z=>z.value),pe=Vx(se,te);te=se[pe]}return te=vr(te,a,l),te},[Ne,l,a,y,N]),J=gr(X=>{var Z;const oe=jl(X,Re.current);if(!oe)return;const te=B(oe);(Z=Ce.current)===null||Z===void 0||Z.focus(),O(te),fe(!0),f==null||f(te)}),Y=gr(X=>{const Z=jl(X,Re.current);if(!Z)return;const oe=B(Z);m==null||m(oe),Re.current=void 0;const te=Il(ge.current);te.removeEventListener("mousemove",J),te.removeEventListener("mouseup",Y),te.removeEventListener("touchmove",J),te.removeEventListener("touchend",Y)}),P=gr(X=>{var Z;p==null||p(X),X.preventDefault(),(Z=Ce.current)===null||Z===void 0||Z.focus(),fe(!0);const oe=jl(X,Re.current);if(oe){const se=B(oe);O(se),f==null||f(se)}const te=Il(ge.current);te.addEventListener("mousemove",J),te.addEventListener("mouseup",Y)}),F=gr(X=>{var Z;X.preventDefault();const oe=X.changedTouches[0];oe!=null&&(Re.current=oe.identifier),(Z=Ce.current)===null||Z===void 0||Z.focus(),fe(!0);const te=jl(X,Re.current);if(te){const pe=B(te);O(pe),f==null||f(pe)}const se=Il(ge.current);se.addEventListener("touchmove",J),se.addEventListener("touchend",Y)});return w.useEffect(()=>{const{current:X}=ge;X==null||X.addEventListener("touchstart",F);const Z=Il(X);return()=>{X==null||X.removeEventListener("touchstart",F),Z.removeEventListener("mousemove",J),Z.removeEventListener("mouseup",Y),Z.removeEventListener("touchmove",J),Z.removeEventListener("touchend",Y)}},[Y,J,F]),L.createElement(Qx,{$disabled:r,hasMarks:!!Ne.length,isFocused:q,onMouseDown:P,orientation:g,ref:be,size:er(x),...k},L.createElement("input",{disabled:r,name:c,type:"hidden",value:T??0}),Ne&&Ne.map(X=>L.createElement(Yx,{$disabled:r,"data-testid":"tick",key:X.value/(l-a)*100,orientation:g,style:{[N?"bottom":"left"]:`${(X.value-a)/(l-a)*100}%`}},X.label&&L.createElement(Xx,{"aria-hidden":!0,"data-testid":"mark",orientation:g},X.label))),L.createElement(b,{orientation:g,variant:$}),L.createElement(qx,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":g,"aria-valuemax":l,"aria-valuemin":a,"aria-valuenow":T,onBlur:Te,onFocus:Pe,onKeyDown:ke,orientation:g,ref:Ce,role:"slider",style:{[N?"bottom":"left"]:`${(N?-100:0)+100*(T-a)/(l-a)}%`},tabIndex:r?void 0:0,variant:$}))});Jx.displayName="Slider";const Zx=M.tbody`
  background: ${({theme:n})=>n.canvas};
  display: table-row-group;
  box-shadow: ${mc};
  overflow-y: auto;
`,fs=w.forwardRef(function({children:r,...i},l){return L.createElement(Zx,{ref:l,...i},r)});fs.displayName="TableBody";const e1=M.td`
  padding: 0 8px;
`,ct=w.forwardRef(function({children:r,...i},l){return L.createElement(e1,{ref:l,...i},r)});ct.displayName="TableDataCell";const t1=M.thead`
  display: table-header-group;
`,ps=w.forwardRef(function({children:r,...i},l){return L.createElement(t1,{ref:l,...i},r)});ps.displayName="TableHead";const n1=M.th`
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
    ${Ke()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:n})=>!n&&ne`
      &:active {
        &:before {
          ${Ke({invert:!0,style:"window"})}
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
  ${({$disabled:n})=>n&&en()}
  &:hover {
    color: ${({theme:n})=>n.materialText};
    ${({$disabled:n})=>n&&en()}
  }
`,hs=w.forwardRef(function({disabled:r=!1,children:i,onClick:l,onTouchStart:a=$r,sort:c,...f},m){const p=c==="asc"?"ascending":c==="desc"?"descending":void 0;return L.createElement(n1,{$disabled:r,"aria-disabled":r,"aria-sort":p,onClick:r?void 0:l,onTouchStart:r?void 0:a,ref:m,...f},L.createElement("div",null,i))});hs.displayName="TableHeadCell";const r1=M.tr`
  color: inherit;
  display: table-row;
  height: calc(${dt.md} - 2px);
  line-height: calc(${dt.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:n})=>n.canvasText};
  &:hover {
    background: ${({theme:n})=>n.hoverBackground};
    color: ${({theme:n})=>n.canvasTextInvert};
  }
`,Ar=w.forwardRef(function({children:r,...i},l){return L.createElement(r1,{ref:l,...i},r)});Ar.displayName="TableRow";const o1=M.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,i1=M(yn)`
  &:before {
    box-shadow: none;
  }
`,ms=w.forwardRef(({children:n,...r},i)=>L.createElement(i1,null,L.createElement(o1,{ref:i,...r},n)));ms.displayName="Table";const l1=M.button`
  ${tn()}
  ${Ke()}
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
    ${uo}
    outline-offset: -6px;
  }
  ${n=>n.selected&&`
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
    background: ${({theme:n})=>n.material};
    bottom: -4px;
    left: 2px;
  }
`,s1=w.forwardRef(({value:n,onClick:r,selected:i=!1,children:l,...a},c)=>L.createElement(l1,{"aria-selected":i,selected:i,onClick:f=>r==null?void 0:r(n,f),ref:c,role:"tab",...a},l));s1.displayName="Tab";const a1=M.div`
  ${tn()}
  ${Ke()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,u1=w.forwardRef(({children:n,...r},i)=>L.createElement(a1,{ref:i,...r},n));u1.displayName="TabBody";const c1=M.div`
  position: relative;
  ${({isMultiRow:n,theme:r})=>n&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,d1=M.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function f1(n,r){const i=[];for(let l=r;l>0;l-=1)i.push(n.splice(0,Math.ceil(n.length/l)));return i}const p1=w.forwardRef(({value:n,onChange:r=$r,children:i,rows:l=1,...a},c)=>{const f=w.useMemo(()=>{var m;const p=(m=L.Children.map(i,y=>{if(!L.isValidElement(y))return null;const S={selected:y.props.value===n,onClick:r};return L.cloneElement(y,S)}))!==null&&m!==void 0?m:[],g=f1(p,l).map((y,S)=>({key:S,tabs:y})),x=g.findIndex(y=>y.tabs.some(S=>S.props.selected));return g.push(g.splice(x,1)[0]),g},[i,r,l,n]);return L.createElement(c1,{...a,isMultiRow:l>1,role:"tablist",ref:c},f.map(m=>L.createElement(d1,{key:m.key},m.tabs)))});p1.displayName="Tabs";const h1=["blur","focus"],m1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function nh(n){return"nativeEvent"in n&&h1.includes(n.type)}function rh(n){return"nativeEvent"in n&&m1.includes(n.type)}const g1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},y1=M.span`
  position: absolute;

  z-index: 1;
  display: ${n=>n.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:n})=>n.borderDarkest};
  background: ${({theme:n})=>n.tooltip};
  box-shadow: ${hc};
  text-align: center;
  font-size: 1rem;
  ${n=>g1[n.position]}
`,v1=M.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,w1=w.forwardRef(({className:n,children:r,disableFocusListener:i=!1,disableMouseListener:l=!1,enterDelay:a=1e3,leaveDelay:c=0,onBlur:f,onClose:m,onFocus:p,onMouseEnter:g,onMouseLeave:x,onOpen:y,style:S,text:$,position:k="top",...C},b)=>{const[N,T]=w.useState(!1),[O,W]=w.useState(),[Q,K]=w.useState(),q=!i,fe=!l,ge=B=>{window.clearTimeout(O),window.clearTimeout(Q);const J=window.setTimeout(()=>{T(!0),y==null||y(B)},a);W(J)},Ce=B=>{B.persist(),nh(B)?p==null||p(B):rh(B)&&(g==null||g(B)),ge(B)},Le=B=>{window.clearTimeout(O),window.clearTimeout(Q);const J=window.setTimeout(()=>{T(!1),m==null||m(B)},c);K(J)},be=B=>{B.persist(),nh(B)?f==null||f(B):rh(B)&&(x==null||x(B)),Le(B)},Pe=q?be:void 0,Te=q?Ce:void 0,Re=fe?Ce:void 0,Ne=fe?be:void 0,ke=q?0:void 0;return L.createElement(v1,{"data-testid":"tooltip-wrapper",onBlur:Pe,onFocus:Te,onMouseEnter:Re,onMouseLeave:Ne,tabIndex:ke},L.createElement(y1,{className:n,"data-testid":"tooltip",position:k,ref:b,show:N,style:S,...C},$),r)});w1.displayName="Tooltip";const Yu=M(vc)`
  white-space: nowrap;
`,Im=ne`
  :focus {
    outline: none;
  }

  ${({$disabled:n})=>n?"cursor: default;":ne`
          cursor: pointer;

          :focus {
            ${Yu} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,x1=M.ul`
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
`,k1=M.li`
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
`,S1=M.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,E1=M.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:n})=>n.materialText};
  user-select: none;
  padding-left: 18px;
  ${Im};

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
`,oh=M(yc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Im};
`,b1=M.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function ih(n,r){return n.includes(r)?n.filter(i=>i!==r):[...n,r]}function lh(n){n.preventDefault()}function Dm({className:n,disabled:r,expanded:i,innerRef:l,level:a,select:c,selected:f,style:m,tree:p=[]}){const g=a===0,x=w.useCallback(y=>{var S,$;const k=!!(y.items&&y.items.length>0),C=i.includes(y.id),b=(S=r||y.disabled)!==null&&S!==void 0?S:!1,N=b?lh:Q=>c(Q,y),T=b?lh:Q=>c(Q,y),O=f===y.id,W=L.createElement(b1,{"aria-hidden":!0},y.icon);return L.createElement(k1,{key:y.label,isRootLevel:g,role:"treeitem","aria-expanded":C,"aria-selected":O,hasItems:k},k?L.createElement(S1,{open:C},L.createElement(E1,{onClick:N,$disabled:b},L.createElement(oh,{$disabled:b},W,L.createElement(Yu,null,y.label))),C&&L.createElement(Dm,{className:n,disabled:b,expanded:i,level:a+1,select:c,selected:f,style:m,tree:($=y.items)!==null&&$!==void 0?$:[]})):L.createElement(oh,{as:"button",$disabled:b,onClick:T},W,L.createElement(Yu,null,y.label)))},[n,r,i,g,a,c,f,m]);return L.createElement(x1,{className:g?n:void 0,style:g?m:void 0,ref:g?l:void 0,role:g?"tree":"group",isRootLevel:g},p.map(x))}function C1({className:n,defaultExpanded:r=[],defaultSelected:i,disabled:l=!1,expanded:a,onNodeSelect:c,onNodeToggle:f,selected:m,style:p,tree:g=[]},x){const[y,S]=tr({defaultValue:r,onChange:f,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[$,k]=tr({defaultValue:i,onChange:c,onChangePropName:"onNodeSelect",value:m,valuePropName:"selected"}),C=w.useCallback((T,O)=>{if(f){const W=ih(y,O);f(T,W)}S(W=>ih(W,O))},[y,f,S]),b=w.useCallback((T,O)=>{k(O),c&&c(T,O)},[c,k]),N=w.useCallback((T,O)=>{T.preventDefault(),b(T,O.id),O.items&&O.items.length&&C(T,O.id)},[b,C]);return L.createElement(Dm,{className:n,disabled:l,expanded:y,level:0,innerRef:x,select:N,selected:$,style:p,tree:g})}const A1=w.forwardRef(C1);A1.displayName="TreeView";var $u,sh;function R1(){if(sh)return $u;sh=1;var n={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return $u=n,$u}var $1=R1();const T1=Bh($1),P1="/assets/ms_sans_serif-Du8rjN1q.woff2",N1="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var ni={},ah;function j1(){if(ah)return ni;ah=1,Object.defineProperty(ni,"__esModule",{value:!0}),ni.parse=f,ni.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,c=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,$){const k=new c,C=S.length;if(C<2)return k;const b=($==null?void 0:$.decode)||x;let N=0;do{const T=S.indexOf("=",N);if(T===-1)break;const O=S.indexOf(";",N),W=O===-1?C:O;if(T>W){N=S.lastIndexOf(";",T-1)+1;continue}const Q=m(S,N,T),K=p(S,T,Q),q=S.slice(Q,K);if(k[q]===void 0){let fe=m(S,T+1,W),ge=p(S,W,fe);const Ce=b(S.slice(fe,ge));k[q]=Ce}N=W+1}while(N<C);return k}function m(S,$,k){do{const C=S.charCodeAt($);if(C!==32&&C!==9)return $}while(++$<k);return k}function p(S,$,k){for(;$>k;){const C=S.charCodeAt(--$);if(C!==32&&C!==9)return $+1}return k}function g(S,$,k){const C=(k==null?void 0:k.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const b=C($);if(!r.test(b))throw new TypeError(`argument val is invalid: ${$}`);let N=S+"="+b;if(!k)return N;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);N+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);N+="; Domain="+k.domain}if(k.path){if(!l.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);N+="; Path="+k.path}if(k.expires){if(!y(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);N+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(N+="; HttpOnly"),k.secure&&(N+="; Secure"),k.partitioned&&(N+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return N}function x(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function y(S){return a.call(S)==="[object Date]"}return ni}j1();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uh="popstate";function I1(n={}){function r(l,a){let{pathname:c,search:f,hash:m}=l.location;return Xu("",{pathname:c,search:f,hash:m},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(l,a){return typeof a=="string"?a:ci(a)}return L1(r,i,null,n)}function We(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}function gn(n,r){if(!n){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function D1(){return Math.random().toString(36).substring(2,10)}function ch(n,r){return{usr:n.state,key:n.key,idx:r}}function Xu(n,r,i=null,l){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof r=="string"?fo(r):r,state:i,key:r&&r.key||l||D1()}}function ci({pathname:n="/",search:r="",hash:i=""}){return r&&r!=="?"&&(n+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function fo(n){let r={};if(n){let i=n.indexOf("#");i>=0&&(r.hash=n.substring(i),n=n.substring(0,i));let l=n.indexOf("?");l>=0&&(r.search=n.substring(l),n=n.substring(0,l)),n&&(r.pathname=n)}return r}function L1(n,r,i,l={}){let{window:a=document.defaultView,v5Compat:c=!1}=l,f=a.history,m="POP",p=null,g=x();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function x(){return(f.state||{idx:null}).idx}function y(){m="POP";let b=x(),N=b==null?null:b-g;g=b,p&&p({action:m,location:C.location,delta:N})}function S(b,N){m="PUSH";let T=Xu(C.location,b,N);g=x()+1;let O=ch(T,g),W=C.createHref(T);try{f.pushState(O,"",W)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;a.location.assign(W)}c&&p&&p({action:m,location:C.location,delta:1})}function $(b,N){m="REPLACE";let T=Xu(C.location,b,N);g=x();let O=ch(T,g),W=C.createHref(T);f.replaceState(O,"",W),c&&p&&p({action:m,location:C.location,delta:0})}function k(b){let N=a.location.origin!=="null"?a.location.origin:a.location.href,T=typeof b=="string"?b:ci(b);return T=T.replace(/ $/,"%20"),We(N,`No window.location.(origin|href) available to create URL for href: ${T}`),new URL(T,N)}let C={get action(){return m},get location(){return n(a,f)},listen(b){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(uh,y),p=b,()=>{a.removeEventListener(uh,y),p=null}},createHref(b){return r(a,b)},createURL:k,encodeLocation(b){let N=k(b);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:S,replace:$,go(b){return f.go(b)}};return C}function Lm(n,r,i="/"){return O1(n,r,i,!1)}function O1(n,r,i,l){let a=typeof r=="string"?fo(r):r,c=nr(a.pathname||"/",i);if(c==null)return null;let f=Om(n);_1(f);let m=null;for(let p=0;m==null&&p<f.length;++p){let g=G1(c);m=Q1(f[p],g,l)}return m}function Om(n,r=[],i=[],l=""){let a=(c,f,m)=>{let p={relativePath:m===void 0?c.path||"":m,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(We(p.relativePath.startsWith(l),`Absolute route path "${p.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(l.length));let g=Nn([l,p.relativePath]),x=i.concat(p);c.children&&c.children.length>0&&(We(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),Om(c.children,r,x,g)),!(c.path==null&&!c.index)&&r.push({path:g,score:W1(g,c.index),routesMeta:x})};return n.forEach((c,f)=>{var m;if(c.path===""||!((m=c.path)!=null&&m.includes("?")))a(c,f);else for(let p of _m(c.path))a(c,f,p)}),r}function _m(n){let r=n.split("/");if(r.length===0)return[];let[i,...l]=r,a=i.endsWith("?"),c=i.replace(/\?$/,"");if(l.length===0)return a?[c,""]:[c];let f=_m(l.join("/")),m=[];return m.push(...f.map(p=>p===""?c:[c,p].join("/"))),a&&m.push(...f),m.map(p=>n.startsWith("/")&&p===""?"/":p)}function _1(n){n.sort((r,i)=>r.score!==i.score?i.score-r.score:V1(r.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var F1=/^:[\w-]+$/,z1=3,B1=2,M1=1,U1=10,H1=-2,dh=n=>n==="*";function W1(n,r){let i=n.split("/"),l=i.length;return i.some(dh)&&(l+=H1),r&&(l+=B1),i.filter(a=>!dh(a)).reduce((a,c)=>a+(F1.test(c)?z1:c===""?M1:U1),l)}function V1(n,r){return n.length===r.length&&n.slice(0,-1).every((l,a)=>l===r[a])?n[n.length-1]-r[r.length-1]:0}function Q1(n,r,i=!1){let{routesMeta:l}=n,a={},c="/",f=[];for(let m=0;m<l.length;++m){let p=l[m],g=m===l.length-1,x=c==="/"?r:r.slice(c.length)||"/",y=Jl({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},x),S=p.route;if(!y&&g&&i&&!l[l.length-1].route.index&&(y=Jl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},x)),!y)return null;Object.assign(a,y.params),f.push({params:a,pathname:Nn([c,y.pathname]),pathnameBase:J1(Nn([c,y.pathnameBase])),route:S}),y.pathnameBase!=="/"&&(c=Nn([c,y.pathnameBase]))}return f}function Jl(n,r){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[i,l]=K1(n.path,n.caseSensitive,n.end),a=r.match(i);if(!a)return null;let c=a[0],f=c.replace(/(.)\/+$/,"$1"),m=a.slice(1);return{params:l.reduce((g,{paramName:x,isOptional:y},S)=>{if(x==="*"){let k=m[S]||"";f=c.slice(0,c.length-k.length).replace(/(.)\/+$/,"$1")}const $=m[S];return y&&!$?g[x]=void 0:g[x]=($||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:f,pattern:n}}function K1(n,r=!1,i=!0){gn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let l=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p)=>(l.push({paramName:m,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(l.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),l]}function G1(n){try{return n.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return gn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),n}}function nr(n,r){if(r==="/")return n;if(!n.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,l=n.charAt(i);return l&&l!=="/"?null:n.slice(i)||"/"}function q1(n,r="/"){let{pathname:i,search:l="",hash:a=""}=typeof n=="string"?fo(n):n;return{pathname:i?i.startsWith("/")?i:Y1(i,r):r,search:Z1(l),hash:ek(a)}}function Y1(n,r){let i=r.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function Tu(n,r,i,l){return`Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function X1(n){return n.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Fm(n){let r=X1(n);return r.map((i,l)=>l===r.length-1?i.pathname:i.pathnameBase)}function zm(n,r,i,l=!1){let a;typeof n=="string"?a=fo(n):(a={...n},We(!a.pathname||!a.pathname.includes("?"),Tu("?","pathname","search",a)),We(!a.pathname||!a.pathname.includes("#"),Tu("#","pathname","hash",a)),We(!a.search||!a.search.includes("#"),Tu("#","search","hash",a)));let c=n===""||a.pathname==="",f=c?"/":a.pathname,m;if(f==null)m=i;else{let y=r.length-1;if(!l&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),y-=1;a.pathname=S.join("/")}m=y>=0?r[y]:"/"}let p=q1(a,m),g=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||x)&&(p.pathname+="/"),p}var Nn=n=>n.join("/").replace(/\/\/+/g,"/"),J1=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),Z1=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,ek=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function tk(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Bm=["POST","PUT","PATCH","DELETE"];new Set(Bm);var nk=["GET",...Bm];new Set(nk);var po=w.createContext(null);po.displayName="DataRouter";var gs=w.createContext(null);gs.displayName="DataRouterState";var Mm=w.createContext({isTransitioning:!1});Mm.displayName="ViewTransition";var rk=w.createContext(new Map);rk.displayName="Fetchers";var ok=w.createContext(null);ok.displayName="Await";var vn=w.createContext(null);vn.displayName="Navigation";var mi=w.createContext(null);mi.displayName="Location";var jn=w.createContext({outlet:null,matches:[],isDataRoute:!1});jn.displayName="Route";var Ec=w.createContext(null);Ec.displayName="RouteError";function ik(n,{relative:r}={}){We(gi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=w.useContext(vn),{hash:a,pathname:c,search:f}=yi(n,{relative:r}),m=c;return i!=="/"&&(m=c==="/"?i:Nn([i,c])),l.createHref({pathname:m,search:f,hash:a})}function gi(){return w.useContext(mi)!=null}function Pr(){return We(gi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(mi).location}var Um="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hm(n){w.useContext(vn).static||w.useLayoutEffect(n)}function lk(){let{isDataRoute:n}=w.useContext(jn);return n?wk():sk()}function sk(){We(gi(),"useNavigate() may be used only in the context of a <Router> component.");let n=w.useContext(po),{basename:r,navigator:i}=w.useContext(vn),{matches:l}=w.useContext(jn),{pathname:a}=Pr(),c=JSON.stringify(Fm(l)),f=w.useRef(!1);return Hm(()=>{f.current=!0}),w.useCallback((p,g={})=>{if(gn(f.current,Um),!f.current)return;if(typeof p=="number"){i.go(p);return}let x=zm(p,JSON.parse(c),a,g.relative==="path");n==null&&r!=="/"&&(x.pathname=x.pathname==="/"?r:Nn([r,x.pathname])),(g.replace?i.replace:i.push)(x,g.state,g)},[r,i,c,a,n])}w.createContext(null);function yi(n,{relative:r}={}){let{matches:i}=w.useContext(jn),{pathname:l}=Pr(),a=JSON.stringify(Fm(i));return w.useMemo(()=>zm(n,JSON.parse(a),l,r==="path"),[n,a,l,r])}function ak(n,r){return Wm(n,r)}function Wm(n,r,i,l){var N;We(gi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=w.useContext(vn),{matches:c}=w.useContext(jn),f=c[c.length-1],m=f?f.params:{},p=f?f.pathname:"/",g=f?f.pathnameBase:"/",x=f&&f.route;{let T=x&&x.path||"";Vm(p,!x||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=Pr(),S;if(r){let T=typeof r=="string"?fo(r):r;We(g==="/"||((N=T.pathname)==null?void 0:N.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${T.pathname}" was given in the \`location\` prop.`),S=T}else S=y;let $=S.pathname||"/",k=$;if(g!=="/"){let T=g.replace(/^\//,"").split("/");k="/"+$.replace(/^\//,"").split("/").slice(T.length).join("/")}let C=Lm(n,{pathname:k});gn(x||C!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),gn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=pk(C&&C.map(T=>Object.assign({},T,{params:Object.assign({},m,T.params),pathname:Nn([g,a.encodeLocation?a.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?g:Nn([g,a.encodeLocation?a.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),c,i,l);return r&&b?w.createElement(mi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},b):b}function uk(){let n=vk(),r=tk(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),i=n instanceof Error?n.stack:null,l="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:l},c={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:c},"ErrorBoundary")," or"," ",w.createElement("code",{style:c},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},r),i?w.createElement("pre",{style:a},i):null,f)}var ck=w.createElement(uk,null),dk=class extends w.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,r){return r.location!==n.location||r.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:r.error,location:r.location,revalidation:n.revalidation||r.revalidation}}componentDidCatch(n,r){console.error("React Router caught the following error during render",n,r)}render(){return this.state.error!==void 0?w.createElement(jn.Provider,{value:this.props.routeContext},w.createElement(Ec.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function fk({routeContext:n,match:r,children:i}){let l=w.useContext(po);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(jn.Provider,{value:n},i)}function pk(n,r=[],i=null,l=null){if(n==null){if(!i)return null;if(i.errors)n=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)n=i.matches;else return null}let a=n,c=i==null?void 0:i.errors;if(c!=null){let p=a.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);We(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let f=!1,m=-1;if(i)for(let p=0;p<a.length;p++){let g=a[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:x,errors:y}=i,S=g.route.loader&&!x.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||S){f=!0,m>=0?a=a.slice(0,m+1):a=[a[0]];break}}}return a.reduceRight((p,g,x)=>{let y,S=!1,$=null,k=null;i&&(y=c&&g.route.id?c[g.route.id]:void 0,$=g.route.errorElement||ck,f&&(m<0&&x===0?(Vm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):m===x&&(S=!0,k=g.route.hydrateFallbackElement||null)));let C=r.concat(a.slice(0,x+1)),b=()=>{let N;return y?N=$:S?N=k:g.route.Component?N=w.createElement(g.route.Component,null):g.route.element?N=g.route.element:N=p,w.createElement(fk,{match:g,routeContext:{outlet:p,matches:C,isDataRoute:i!=null},children:N})};return i&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?w.createElement(dk,{location:i.location,revalidation:i.revalidation,component:$,error:y,children:b(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):b()},null)}function bc(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function hk(n){let r=w.useContext(po);return We(r,bc(n)),r}function mk(n){let r=w.useContext(gs);return We(r,bc(n)),r}function gk(n){let r=w.useContext(jn);return We(r,bc(n)),r}function Cc(n){let r=gk(n),i=r.matches[r.matches.length-1];return We(i.route.id,`${n} can only be used on routes that contain a unique "id"`),i.route.id}function yk(){return Cc("useRouteId")}function vk(){var l;let n=w.useContext(Ec),r=mk("useRouteError"),i=Cc("useRouteError");return n!==void 0?n:(l=r.errors)==null?void 0:l[i]}function wk(){let{router:n}=hk("useNavigate"),r=Cc("useNavigate"),i=w.useRef(!1);return Hm(()=>{i.current=!0}),w.useCallback(async(a,c={})=>{gn(i.current,Um),i.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:r,...c}))},[n,r])}var fh={};function Vm(n,r,i){!r&&!fh[n]&&(fh[n]=!0,gn(!1,i))}w.memo(xk);function xk({routes:n,future:r,state:i}){return Wm(n,void 0,i,r)}function Ju(n){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function kk({basename:n="/",children:r=null,location:i,navigationType:l="POP",navigator:a,static:c=!1}){We(!gi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=n.replace(/^\/*/,"/"),m=w.useMemo(()=>({basename:f,navigator:a,static:c,future:{}}),[f,a,c]);typeof i=="string"&&(i=fo(i));let{pathname:p="/",search:g="",hash:x="",state:y=null,key:S="default"}=i,$=w.useMemo(()=>{let k=nr(p,f);return k==null?null:{location:{pathname:k,search:g,hash:x,state:y,key:S},navigationType:l}},[f,p,g,x,y,S,l]);return gn($!=null,`<Router basename="${f}"> is not able to match the URL "${p}${g}${x}" because it does not start with the basename, so the <Router> won't render anything.`),$==null?null:w.createElement(vn.Provider,{value:m},w.createElement(mi.Provider,{children:r,value:$}))}function Sk({children:n,location:r}){return ak(Zu(n),r)}function Zu(n,r=[]){let i=[];return w.Children.forEach(n,(l,a)=>{if(!w.isValidElement(l))return;let c=[...r,a];if(l.type===w.Fragment){i.push.apply(i,Zu(l.props.children,c));return}We(l.type===Ju,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||c.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=Zu(l.props.children,c)),i.push(f)}),i}var Ml="get",Ul="application/x-www-form-urlencoded";function ys(n){return n!=null&&typeof n.tagName=="string"}function Ek(n){return ys(n)&&n.tagName.toLowerCase()==="button"}function bk(n){return ys(n)&&n.tagName.toLowerCase()==="form"}function Ck(n){return ys(n)&&n.tagName.toLowerCase()==="input"}function Ak(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Rk(n,r){return n.button===0&&(!r||r==="_self")&&!Ak(n)}var Dl=null;function $k(){if(Dl===null)try{new FormData(document.createElement("form"),0),Dl=!1}catch{Dl=!0}return Dl}var Tk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pu(n){return n!=null&&!Tk.has(n)?(gn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ul}"`),null):n}function Pk(n,r){let i,l,a,c,f;if(bk(n)){let m=n.getAttribute("action");l=m?nr(m,r):null,i=n.getAttribute("method")||Ml,a=Pu(n.getAttribute("enctype"))||Ul,c=new FormData(n)}else if(Ek(n)||Ck(n)&&(n.type==="submit"||n.type==="image")){let m=n.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||m.getAttribute("action");if(l=p?nr(p,r):null,i=n.getAttribute("formmethod")||m.getAttribute("method")||Ml,a=Pu(n.getAttribute("formenctype"))||Pu(m.getAttribute("enctype"))||Ul,c=new FormData(m,n),!$k()){let{name:g,type:x,value:y}=n;if(x==="image"){let S=g?`${g}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else g&&c.append(g,y)}}else{if(ys(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Ml,l=null,a=Ul,f=n}return c&&a==="text/plain"&&(f=c,c=void 0),{action:l,method:i.toLowerCase(),encType:a,formData:c,body:f}}function Ac(n,r){if(n===!1||n===null||typeof n>"u")throw new Error(r)}async function Nk(n,r){if(n.id in r)return r[n.id];try{let i=await import(n.module);return r[n.id]=i,i}catch(i){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jk(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Ik(n,r,i){let l=await Promise.all(n.map(async a=>{let c=r.routes[a.route.id];if(c){let f=await Nk(c,i);return f.links?f.links():[]}return[]}));return _k(l.flat(1).filter(jk).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function ph(n,r,i,l,a,c){let f=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,m=(p,g)=>{var x;return i[g].pathname!==p.pathname||((x=i[g].route.path)==null?void 0:x.endsWith("*"))&&i[g].params["*"]!==p.params["*"]};return c==="assets"?r.filter((p,g)=>f(p,g)||m(p,g)):c==="data"?r.filter((p,g)=>{var y;let x=l.routes[p.route.id];if(!x||!x.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function Dk(n,r){return Lk(n.map(i=>{let l=r.routes[i.route.id];if(!l)return[];let a=[l.module];return l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function Lk(n){return[...new Set(n)]}function Ok(n){let r={},i=Object.keys(n).sort();for(let l of i)r[l]=n[l];return r}function _k(n,r){let i=new Set;return new Set(r),n.reduce((l,a)=>{let c=JSON.stringify(Ok(a));return i.has(c)||(i.add(c),l.push({key:c,link:a})),l},[])}function Fk(n){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function zk(){let n=w.useContext(po);return Ac(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function Bk(){let n=w.useContext(gs);return Ac(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Rc=w.createContext(void 0);Rc.displayName="FrameworkContext";function Qm(){let n=w.useContext(Rc);return Ac(n,"You must render this element inside a <HydratedRouter> element"),n}function Mk(n,r){let i=w.useContext(Rc),[l,a]=w.useState(!1),[c,f]=w.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:x,onTouchStart:y}=r,S=w.useRef(null);w.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let C=N=>{N.forEach(T=>{f(T.isIntersecting)})},b=new IntersectionObserver(C,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[n]),w.useEffect(()=>{if(l){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[l]);let $=()=>{a(!0)},k=()=>{a(!1),f(!1)};return i?n!=="intent"?[c,S,{}]:[c,S,{onFocus:ri(m,$),onBlur:ri(p,k),onMouseEnter:ri(g,$),onMouseLeave:ri(x,k),onTouchStart:ri(y,$)}]:[!1,S,{}]}function ri(n,r){return i=>{n&&n(i),i.defaultPrevented||r(i)}}function Uk({page:n,...r}){let{router:i}=zk(),l=w.useMemo(()=>Lm(i.routes,n,i.basename),[i.routes,n,i.basename]);return l?w.createElement(Wk,{page:n,matches:l,...r}):null}function Hk(n){let{manifest:r,routeModules:i}=Qm(),[l,a]=w.useState([]);return w.useEffect(()=>{let c=!1;return Ik(n,r,i).then(f=>{c||a(f)}),()=>{c=!0}},[n,r,i]),l}function Wk({page:n,matches:r,...i}){let l=Pr(),{manifest:a,routeModules:c}=Qm(),{loaderData:f,matches:m}=Bk(),p=w.useMemo(()=>ph(n,r,m,a,l,"data"),[n,r,m,a,l]),g=w.useMemo(()=>ph(n,r,m,a,l,"assets"),[n,r,m,a,l]),x=w.useMemo(()=>{if(n===l.pathname+l.search+l.hash)return[];let $=new Set,k=!1;if(r.forEach(b=>{var T;let N=a.routes[b.route.id];!N||!N.hasLoader||(!p.some(O=>O.route.id===b.route.id)&&b.route.id in f&&((T=c[b.route.id])!=null&&T.shouldRevalidate)||N.hasClientLoader?k=!0:$.add(b.route.id))}),$.size===0)return[];let C=Fk(n);return k&&$.size>0&&C.searchParams.set("_routes",r.filter(b=>$.has(b.route.id)).map(b=>b.route.id).join(",")),[C.pathname+C.search]},[f,l,a,p,r,n,c]),y=w.useMemo(()=>Dk(g,a),[g,a]),S=Hk(g);return w.createElement(w.Fragment,null,x.map($=>w.createElement("link",{key:$,rel:"prefetch",as:"fetch",href:$,...i})),y.map($=>w.createElement("link",{key:$,rel:"modulepreload",href:$,...i})),S.map(({key:$,link:k})=>w.createElement("link",{key:$,...k})))}function Vk(...n){return r=>{n.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var Km=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Km&&(window.__reactRouterVersion="7.1.3")}catch{}function Qk({basename:n,children:r,window:i}){let l=w.useRef();l.current==null&&(l.current=I1({window:i,v5Compat:!0}));let a=l.current,[c,f]=w.useState({action:a.action,location:a.location}),m=w.useCallback(p=>{w.startTransition(()=>f(p))},[f]);return w.useLayoutEffect(()=>a.listen(m),[a,m]),w.createElement(kk,{basename:n,children:r,location:c.location,navigationType:c.action,navigator:a})}var Gm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$c=w.forwardRef(function({onClick:r,discover:i="render",prefetch:l="none",relative:a,reloadDocument:c,replace:f,state:m,target:p,to:g,preventScrollReset:x,viewTransition:y,...S},$){let{basename:k}=w.useContext(vn),C=typeof g=="string"&&Gm.test(g),b,N=!1;if(typeof g=="string"&&C&&(b=g,Km))try{let ge=new URL(window.location.href),Ce=g.startsWith("//")?new URL(ge.protocol+g):new URL(g),Le=nr(Ce.pathname,k);Ce.origin===ge.origin&&Le!=null?g=Le+Ce.search+Ce.hash:N=!0}catch{gn(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let T=ik(g,{relative:a}),[O,W,Q]=Mk(l,S),K=Yk(g,{replace:f,state:m,target:p,preventScrollReset:x,relative:a,viewTransition:y});function q(ge){r&&r(ge),ge.defaultPrevented||K(ge)}let fe=w.createElement("a",{...S,...Q,href:b||T,onClick:N||c?r:q,ref:Vk($,W),target:p,"data-discover":!C&&i==="render"?"true":void 0});return O&&!C?w.createElement(w.Fragment,null,fe,w.createElement(Uk,{page:T})):fe});$c.displayName="Link";var Kk=w.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:l="",end:a=!1,style:c,to:f,viewTransition:m,children:p,...g},x){let y=yi(f,{relative:g.relative}),S=Pr(),$=w.useContext(gs),{navigator:k,basename:C}=w.useContext(vn),b=$!=null&&tS(y)&&m===!0,N=k.encodeLocation?k.encodeLocation(y).pathname:y.pathname,T=S.pathname,O=$&&$.navigation&&$.navigation.location?$.navigation.location.pathname:null;i||(T=T.toLowerCase(),O=O?O.toLowerCase():null,N=N.toLowerCase()),O&&C&&(O=nr(O,C)||O);const W=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let Q=T===N||!a&&T.startsWith(N)&&T.charAt(W)==="/",K=O!=null&&(O===N||!a&&O.startsWith(N)&&O.charAt(N.length)==="/"),q={isActive:Q,isPending:K,isTransitioning:b},fe=Q?r:void 0,ge;typeof l=="function"?ge=l(q):ge=[l,Q?"active":null,K?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let Ce=typeof c=="function"?c(q):c;return w.createElement($c,{...g,"aria-current":fe,className:ge,ref:x,style:Ce,to:f,viewTransition:m},typeof p=="function"?p(q):p)});Kk.displayName="NavLink";var Gk=w.forwardRef(({discover:n="render",fetcherKey:r,navigate:i,reloadDocument:l,replace:a,state:c,method:f=Ml,action:m,onSubmit:p,relative:g,preventScrollReset:x,viewTransition:y,...S},$)=>{let k=Zk(),C=eS(m,{relative:g}),b=f.toLowerCase()==="get"?"get":"post",N=typeof m=="string"&&Gm.test(m),T=O=>{if(p&&p(O),O.defaultPrevented)return;O.preventDefault();let W=O.nativeEvent.submitter,Q=(W==null?void 0:W.getAttribute("formmethod"))||f;k(W||O.currentTarget,{fetcherKey:r,method:Q,navigate:i,replace:a,state:c,relative:g,preventScrollReset:x,viewTransition:y})};return w.createElement("form",{ref:$,method:b,action:C,onSubmit:l?p:T,...S,"data-discover":!N&&n==="render"?"true":void 0})});Gk.displayName="Form";function qk(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function qm(n){let r=w.useContext(po);return We(r,qk(n)),r}function Yk(n,{target:r,replace:i,state:l,preventScrollReset:a,relative:c,viewTransition:f}={}){let m=lk(),p=Pr(),g=yi(n,{relative:c});return w.useCallback(x=>{if(Rk(x,r)){x.preventDefault();let y=i!==void 0?i:ci(p)===ci(g);m(n,{replace:y,state:l,preventScrollReset:a,relative:c,viewTransition:f})}},[p,m,g,i,l,r,n,a,c,f])}var Xk=0,Jk=()=>`__${String(++Xk)}__`;function Zk(){let{router:n}=qm("useSubmit"),{basename:r}=w.useContext(vn),i=yk();return w.useCallback(async(l,a={})=>{let{action:c,method:f,encType:m,formData:p,body:g}=Pk(l,r);if(a.navigate===!1){let x=a.fetcherKey||Jk();await n.fetch(x,i,a.action||c,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||f,formEncType:a.encType||m,flushSync:a.flushSync})}else await n.navigate(a.action||c,{preventScrollReset:a.preventScrollReset,formData:p,body:g,formMethod:a.method||f,formEncType:a.encType||m,replace:a.replace,state:a.state,fromRouteId:i,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,r,i])}function eS(n,{relative:r}={}){let{basename:i}=w.useContext(vn),l=w.useContext(jn);We(l,"useFormAction must be used inside a RouteContext");let[a]=l.matches.slice(-1),c={...yi(n||".",{relative:r})},f=Pr();if(n==null){c.search=f.search;let m=new URLSearchParams(c.search),p=m.getAll("index");if(p.some(x=>x==="")){m.delete("index"),p.filter(y=>y).forEach(y=>m.append("index",y));let x=m.toString();c.search=x?`?${x}`:""}}return(!n||n===".")&&a.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Nn([i,c.pathname])),ci(c)}function tS(n,r={}){let i=w.useContext(Mm);We(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=qm("useViewTransitionState"),a=yi(n,{relative:r.relative});if(!i.isTransitioning)return!1;let c=nr(i.currentLocation.pathname,l)||i.currentLocation.pathname,f=nr(i.nextLocation.pathname,l)||i.nextLocation.pathname;return Jl(a.pathname,f)!=null||Jl(a.pathname,c)!=null}new TextEncoder;const ut=[];for(let n=0;n<256;++n)ut.push((n+256).toString(16).slice(1));function nS(n,r=0){return(ut[n[r+0]]+ut[n[r+1]]+ut[n[r+2]]+ut[n[r+3]]+"-"+ut[n[r+4]]+ut[n[r+5]]+"-"+ut[n[r+6]]+ut[n[r+7]]+"-"+ut[n[r+8]]+ut[n[r+9]]+"-"+ut[n[r+10]]+ut[n[r+11]]+ut[n[r+12]]+ut[n[r+13]]+ut[n[r+14]]+ut[n[r+15]]).toLowerCase()}let Nu;const rS=new Uint8Array(16);function oS(){if(!Nu){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Nu=crypto.getRandomValues.bind(crypto)}return Nu(rS)}const iS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),hh={randomUUID:iS};function lS(n,r,i){var a;if(hh.randomUUID&&!n)return hh.randomUUID();n=n||{};const l=n.random??((a=n.rng)==null?void 0:a.call(n))??oS();if(l.length<16)throw new Error("Random bytes length must be >= 16");return l[6]=l[6]&15|64,l[8]=l[8]&63|128,nS(l)}function vs(n){const r=[];for(const i of n.split("/"))if(!(i===""||i===".")){if(i===".."){r.pop();continue}r.push(i)}return r}function kr(n){return"/"+vs(n).join("/")}function mh(...n){return kr(n.join("/"))}function pn(n){const r=vs(n);return r.pop(),"/"+r.join("/")}function hn(n){const r=vs(n);return r.length?r[r.length-1]:""}class he extends Error{constructor(r,i){super(i?`${r}: ${i}`:r),this.code=r,this.name="KernelError"}}class sS{constructor(r){Xe(this,"registry");Xe(this,"processes",new Map);Xe(this,"listeners",new Set);Xe(this,"persistence");Xe(this,"defaultLocation");Xe(this,"uid");Xe(this,"snapshot",[]);Xe(this,"vfs",null);Xe(this,"kernelFds",new Map);Xe(this,"nextFd",3);Xe(this,"subscribe",r=>(this.listeners.add(r),()=>this.listeners.delete(r)));Xe(this,"getSnapshot",()=>this.snapshot);this.registry=r.registry,this.persistence=r.persistence,this.defaultLocation=r.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=r.uid??1e3,this.boot()}boot(){var i;const r=(i=this.persistence)==null?void 0:i.load();if(r)for(const l of r)this.registry.has(l.exec)&&this.processes.set(l.pid,this.hydrate(l));this.rebuildSnapshot()}hydrate(r){return{pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,icon:r.icon,argv:r.argv??[],state:r.state,priority:r.priority,window:r.window,cwd:r.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const r=this.snapshot.map(i=>({pid:i.pid,ppid:i.ppid,uid:i.uid,exec:i.exec,name:i.name,icon:i.icon,argv:i.argv,priority:i.priority,window:i.window,cwd:i.cwd,state:i.state}));this.persistence.save(r)}mountVfs(r){this.vfs=r}processInfo(){return this.sysPs()}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const r of this.listeners)r()}syscall(r,i,l){try{return Promise.resolve(this.dispatch(r,i,l))}catch(a){return Promise.reject(a)}}dispatch(r,i,l){var a;switch(i){case"spawn":return this.sysSpawn(r,l);case"exit":return this.sysExit(r,l.code??0);case"kill":return this.sysKill(l.pid);case"getpid":return r;case"getargv":return r?((a=this.processes.get(r))==null?void 0:a.argv)??[]:[];case"ps":return this.sysPs();case"win_focus":return this.sysFocus(l.pid);case"win_move":return this.sysMove(l.pid,l.location);case"open":return this.sysOpen(r,l.path,l.flags);case"read":return this.sysRead(r,l.fd,l.len);case"write":return this.sysWrite(r,l.fd,l.data);case"close":return this.sysClose(r,l.fd);case"readdir":return this.fs().readdir(l.path);case"stat":return this.fs().stat(l.path);case"mkdir":return this.fs().mkdir(l.path);case"unlink":return this.fs().unlink(l.path);default:throw new he("ENOSYS",`unknown syscall: ${i}`)}}sysSpawn(r,i){const l=this.registry.get(i.exec);if(!l)throw new he("ENOENT",`no program "${i.exec}" in /bin`);const a=lS();for(const c of this.processes.values())c.priority+=1;return this.processes.set(a,{pid:a,ppid:r,uid:this.uid,exec:i.exec,name:i.name??l.name,icon:i.icon??l.icon,argv:i.argv??[],state:"running",priority:0,window:i.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(r){if(!this.processes.delete(r))throw new he("ESRCH",`no process ${r}`);this.commit()}sysExit(r,i){r&&this.sysKill(r)}sysPs(){return this.snapshot.map(r=>({pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,state:r.state,priority:r.priority}))}sysFocus(r){if(!this.processes.get(r))throw new he("ESRCH",`no process ${r}`);let l=0;for(const a of this.processes.values())a.priority=a.pid===r?0:++l;this.commit()}sysMove(r,i){const l=this.processes.get(r);if(!l)throw new he("ESRCH",`no process ${r}`);l.window=i,this.commit()}fs(){if(!this.vfs)throw new he("ENOSYS","no filesystem mounted");return this.vfs}fdTable(r){if(r===null)return this.kernelFds;const i=this.processes.get(r);if(!i)throw new he("ESRCH",`no process ${r}`);return i.fds}sysOpen(r,i,l){const a=this.fs(),c=kr(i),f=a.exists(c),m=l==="w"||l==="a"||l==="rw";if(f)l==="w"&&a.write(c,new Uint8Array);else{if(!m)throw new he("ENOENT",c);a.write(c,new Uint8Array)}const p=l==="a"?a.stat(c).size:0,g=this.nextFd++;return this.fdTable(r).set(g,{path:c,flags:l,offset:p}),g}openFile(r,i){const l=this.fdTable(r).get(i);if(!l)throw new he("EBADF",`bad fd ${i}`);return l}sysRead(r,i,l){const a=this.openFile(r,i);if(a.flags!=="r"&&a.flags!=="rw")throw new he("EBADF","not opened for reading");const f=this.fs().read(a.path).slice(a.offset,a.offset+l);return a.offset+=f.length,f}sysWrite(r,i,l){const a=this.openFile(r,i);if(a.flags==="r")throw new he("EBADF","not opened for writing");const c=this.fs().read(a.path),f=a.offset+l.length,m=new Uint8Array(Math.max(c.length,f));return m.set(c),m.set(l,a.offset),this.fs().write(a.path,m),a.offset=f,l.length}sysClose(r,i){if(!this.fdTable(r).delete(i))throw new he("EBADF",`bad fd ${i}`)}}class aS{constructor(){Xe(this,"programs",new Map)}register(r){this.programs.set(r.exec,r)}get(r){return this.programs.get(r)}component(r){var i;return(i=this.programs.get(r))==null?void 0:i.component}has(r){return this.programs.has(r)}list(){return[...this.programs.values()]}}const Ym=()=>v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:"Recycle Bin"}),v.jsx(Tt,{variant:"well",className:"footer",children:"TEST"})]}),Xm=()=>v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:"My Computer"}),v.jsx(Tt,{variant:"well",className:"footer",children:"TEST"})]});function uS(n,r){const i=(l,a)=>n.syscall(r,l,a);return{spawn:(l,a)=>i("spawn",{exec:l,...a}),exit:(l=0)=>i("exit",{code:l}),kill:l=>i("kill",{pid:l}),getpid:()=>i("getpid",{}),argv:()=>i("getargv",{}),ps:()=>i("ps",{}),focus:l=>i("win_focus",{pid:l}),move:(l,a)=>i("win_move",{pid:a??r,location:l}),open:(l,a="r")=>i("open",{path:l,flags:a}),read:(l,a)=>i("read",{fd:l,len:a}),write:(l,a)=>i("write",{fd:l,data:a}),close:l=>i("close",{fd:l}),readdir:l=>i("readdir",{path:l}),stat:l=>i("stat",{path:l}),mkdir:l=>i("mkdir",{path:l}),unlink:l=>i("unlink",{path:l}),async readFile(l){const{size:a}=await i("stat",{path:l}),c=await i("open",{path:l,flags:"r"});try{return await i("read",{fd:c,len:a})}finally{await i("close",{fd:c})}},async writeFile(l,a){const c=await i("open",{path:l,flags:"w"});try{await i("write",{fd:c,data:a})}finally{await i("close",{fd:c})}},async readTextFile(l){return new TextDecoder().decode(await this.readFile(l))},async writeTextFile(l,a){await this.writeFile(l,new TextEncoder().encode(a))}}}const Jm=w.createContext(null);function cS({pid:n,children:r}){return v.jsx(Jm.Provider,{value:n,children:r})}function dS(){return w.useContext(Jm)}function Tc(){const n=Fc(),r=dS();return w.useMemo(()=>uS(n,r),[n,r])}const fS=()=>{const n=Hg(),r=Tc(),i=["PID","Name","Priority",""];return v.jsx(v.Fragment,{children:v.jsxs(ms,{style:{width:"50vw"},children:[v.jsx(ps,{children:v.jsx(Ar,{children:i.map(l=>v.jsx(hs,{children:l},l))})}),v.jsx(fs,{children:n.map(l=>v.jsxs(Ar,{children:[v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:l.pid.slice(0,8)}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:l.name}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:l.priority===0?"High":"Normal"}),v.jsx(ct,{onClick:()=>r.kill(l.pid),style:{textAlign:"center",verticalAlign:"middle",cursor:"pointer"},children:"Delete"})]},l.pid))})]})})},Pc=()=>v.jsxs(v.Fragment,{children:[v.jsx(kt,{children:v.jsx(fS,{})}),v.jsx(Tt,{variant:"well",className:"footer",children:"See your running processes"})]});function ws(n){const r=w.useRef(null),[i,l]=w.useState(null);return w.useEffect(()=>{if(!r.current)return;const a=r.current,c=Dos(a);return l(c),()=>{c.stop(),a&&(a.innerHTML="")}},[]),w.useEffect(()=>{i!==null&&i.run(n.bundleUrl)},[i,n.bundleUrl]),v.jsx("div",{ref:r,style:{width:"100%",height:"100%"}})}const Zm=()=>v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(ws,{bundleUrl:"dos/final-DOOM.jsdos"})})}),v.jsx(Tt,{variant:"well",className:"footer",children:"TEST"})]}),eg=()=>v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(ws,{bundleUrl:"dos/doom2.jsdos"})})}),v.jsx(Tt,{variant:"well",className:"footer",children:"TEST"})]}),tg="/error.png",pS="/trust.png";function ng(n,r){return function(){return n.apply(r,arguments)}}const{toString:hS}=Object.prototype,{getPrototypeOf:Nc}=Object,xs=(n=>r=>{const i=hS.call(r);return n[i]||(n[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),nn=n=>(n=n.toLowerCase(),r=>xs(r)===n),ks=n=>r=>typeof r===n,{isArray:ho}=Array,di=ks("undefined");function mS(n){return n!==null&&!di(n)&&n.constructor!==null&&!di(n.constructor)&&Ot(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const rg=nn("ArrayBuffer");function gS(n){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(n):r=n&&n.buffer&&rg(n.buffer),r}const yS=ks("string"),Ot=ks("function"),og=ks("number"),Ss=n=>n!==null&&typeof n=="object",vS=n=>n===!0||n===!1,Hl=n=>{if(xs(n)!=="object")return!1;const r=Nc(n);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},wS=nn("Date"),xS=nn("File"),kS=nn("Blob"),SS=nn("FileList"),ES=n=>Ss(n)&&Ot(n.pipe),bS=n=>{let r;return n&&(typeof FormData=="function"&&n instanceof FormData||Ot(n.append)&&((r=xs(n))==="formdata"||r==="object"&&Ot(n.toString)&&n.toString()==="[object FormData]"))},CS=nn("URLSearchParams"),[AS,RS,$S,TS]=["ReadableStream","Request","Response","Headers"].map(nn),PS=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function vi(n,r,{allOwnKeys:i=!1}={}){if(n===null||typeof n>"u")return;let l,a;if(typeof n!="object"&&(n=[n]),ho(n))for(l=0,a=n.length;l<a;l++)r.call(null,n[l],l,n);else{const c=i?Object.getOwnPropertyNames(n):Object.keys(n),f=c.length;let m;for(l=0;l<f;l++)m=c[l],r.call(null,n[m],m,n)}}function ig(n,r){r=r.toLowerCase();const i=Object.keys(n);let l=i.length,a;for(;l-- >0;)if(a=i[l],r===a.toLowerCase())return a;return null}const wr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,lg=n=>!di(n)&&n!==wr;function ec(){const{caseless:n}=lg(this)&&this||{},r={},i=(l,a)=>{const c=n&&ig(r,a)||a;Hl(r[c])&&Hl(l)?r[c]=ec(r[c],l):Hl(l)?r[c]=ec({},l):ho(l)?r[c]=l.slice():r[c]=l};for(let l=0,a=arguments.length;l<a;l++)arguments[l]&&vi(arguments[l],i);return r}const NS=(n,r,i,{allOwnKeys:l}={})=>(vi(r,(a,c)=>{i&&Ot(a)?n[c]=ng(a,i):n[c]=a},{allOwnKeys:l}),n),jS=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),IS=(n,r,i,l)=>{n.prototype=Object.create(r.prototype,l),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:r.prototype}),i&&Object.assign(n.prototype,i)},DS=(n,r,i,l)=>{let a,c,f;const m={};if(r=r||{},n==null)return r;do{for(a=Object.getOwnPropertyNames(n),c=a.length;c-- >0;)f=a[c],(!l||l(f,n,r))&&!m[f]&&(r[f]=n[f],m[f]=!0);n=i!==!1&&Nc(n)}while(n&&(!i||i(n,r))&&n!==Object.prototype);return r},LS=(n,r,i)=>{n=String(n),(i===void 0||i>n.length)&&(i=n.length),i-=r.length;const l=n.indexOf(r,i);return l!==-1&&l===i},OS=n=>{if(!n)return null;if(ho(n))return n;let r=n.length;if(!og(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=n[r];return i},_S=(n=>r=>n&&r instanceof n)(typeof Uint8Array<"u"&&Nc(Uint8Array)),FS=(n,r)=>{const l=(n&&n[Symbol.iterator]).call(n);let a;for(;(a=l.next())&&!a.done;){const c=a.value;r.call(n,c[0],c[1])}},zS=(n,r)=>{let i;const l=[];for(;(i=n.exec(r))!==null;)l.push(i);return l},BS=nn("HTMLFormElement"),MS=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,a){return l.toUpperCase()+a}),gh=(({hasOwnProperty:n})=>(r,i)=>n.call(r,i))(Object.prototype),US=nn("RegExp"),sg=(n,r)=>{const i=Object.getOwnPropertyDescriptors(n),l={};vi(i,(a,c)=>{let f;(f=r(a,c,n))!==!1&&(l[c]=f||a)}),Object.defineProperties(n,l)},HS=n=>{sg(n,(r,i)=>{if(Ot(n)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=n[i];if(Ot(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},WS=(n,r)=>{const i={},l=a=>{a.forEach(c=>{i[c]=!0})};return ho(n)?l(n):l(String(n).split(r)),i},VS=()=>{},QS=(n,r)=>n!=null&&Number.isFinite(n=+n)?n:r,ju="abcdefghijklmnopqrstuvwxyz",yh="0123456789",ag={DIGIT:yh,ALPHA:ju,ALPHA_DIGIT:ju+ju.toUpperCase()+yh},KS=(n=16,r=ag.ALPHA_DIGIT)=>{let i="";const{length:l}=r;for(;n--;)i+=r[Math.random()*l|0];return i};function GS(n){return!!(n&&Ot(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const qS=n=>{const r=new Array(10),i=(l,a)=>{if(Ss(l)){if(r.indexOf(l)>=0)return;if(!("toJSON"in l)){r[a]=l;const c=ho(l)?[]:{};return vi(l,(f,m)=>{const p=i(f,a+1);!di(p)&&(c[m]=p)}),r[a]=void 0,c}}return l};return i(n,0)},YS=nn("AsyncFunction"),XS=n=>n&&(Ss(n)||Ot(n))&&Ot(n.then)&&Ot(n.catch),ug=((n,r)=>n?setImmediate:r?((i,l)=>(wr.addEventListener("message",({source:a,data:c})=>{a===wr&&c===i&&l.length&&l.shift()()},!1),a=>{l.push(a),wr.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",Ot(wr.postMessage)),JS=typeof queueMicrotask<"u"?queueMicrotask.bind(wr):typeof process<"u"&&process.nextTick||ug,_={isArray:ho,isArrayBuffer:rg,isBuffer:mS,isFormData:bS,isArrayBufferView:gS,isString:yS,isNumber:og,isBoolean:vS,isObject:Ss,isPlainObject:Hl,isReadableStream:AS,isRequest:RS,isResponse:$S,isHeaders:TS,isUndefined:di,isDate:wS,isFile:xS,isBlob:kS,isRegExp:US,isFunction:Ot,isStream:ES,isURLSearchParams:CS,isTypedArray:_S,isFileList:SS,forEach:vi,merge:ec,extend:NS,trim:PS,stripBOM:jS,inherits:IS,toFlatObject:DS,kindOf:xs,kindOfTest:nn,endsWith:LS,toArray:OS,forEachEntry:FS,matchAll:zS,isHTMLForm:BS,hasOwnProperty:gh,hasOwnProp:gh,reduceDescriptors:sg,freezeMethods:HS,toObjectSet:WS,toCamelCase:MS,noop:VS,toFiniteNumber:QS,findKey:ig,global:wr,isContextDefined:lg,ALPHABET:ag,generateString:KS,isSpecCompliantForm:GS,toJSONObject:qS,isAsyncFn:YS,isThenable:XS,setImmediate:ug,asap:JS};function ve(n,r,i,l,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),l&&(this.request=l),a&&(this.response=a,this.status=a.status?a.status:null)}_.inherits(ve,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const cg=ve.prototype,dg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{dg[n]={value:n}});Object.defineProperties(ve,dg);Object.defineProperty(cg,"isAxiosError",{value:!0});ve.from=(n,r,i,l,a,c)=>{const f=Object.create(cg);return _.toFlatObject(n,f,function(p){return p!==Error.prototype},m=>m!=="isAxiosError"),ve.call(f,n.message,r,i,l,a),f.cause=n,f.name=n.name,c&&Object.assign(f,c),f};const ZS=null;function tc(n){return _.isPlainObject(n)||_.isArray(n)}function fg(n){return _.endsWith(n,"[]")?n.slice(0,-2):n}function vh(n,r,i){return n?n.concat(r).map(function(a,c){return a=fg(a),!i&&c?"["+a+"]":a}).join(i?".":""):r}function eE(n){return _.isArray(n)&&!n.some(tc)}const tE=_.toFlatObject(_,{},null,function(r){return/^is[A-Z]/.test(r)});function Es(n,r,i){if(!_.isObject(n))throw new TypeError("target must be an object");r=r||new FormData,i=_.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function(C,b){return!_.isUndefined(b[C])});const l=i.metaTokens,a=i.visitor||x,c=i.dots,f=i.indexes,p=(i.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(r);if(!_.isFunction(a))throw new TypeError("visitor must be a function");function g(k){if(k===null)return"";if(_.isDate(k))return k.toISOString();if(!p&&_.isBlob(k))throw new ve("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(k)||_.isTypedArray(k)?p&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function x(k,C,b){let N=k;if(k&&!b&&typeof k=="object"){if(_.endsWith(C,"{}"))C=l?C:C.slice(0,-2),k=JSON.stringify(k);else if(_.isArray(k)&&eE(k)||(_.isFileList(k)||_.endsWith(C,"[]"))&&(N=_.toArray(k)))return C=fg(C),N.forEach(function(O,W){!(_.isUndefined(O)||O===null)&&r.append(f===!0?vh([C],W,c):f===null?C:C+"[]",g(O))}),!1}return tc(k)?!0:(r.append(vh(b,C,c),g(k)),!1)}const y=[],S=Object.assign(tE,{defaultVisitor:x,convertValue:g,isVisitable:tc});function $(k,C){if(!_.isUndefined(k)){if(y.indexOf(k)!==-1)throw Error("Circular reference detected in "+C.join("."));y.push(k),_.forEach(k,function(N,T){(!(_.isUndefined(N)||N===null)&&a.call(r,N,_.isString(T)?T.trim():T,C,S))===!0&&$(N,C?C.concat(T):[T])}),y.pop()}}if(!_.isObject(n))throw new TypeError("data must be an object");return $(n),r}function wh(n){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(l){return r[l]})}function jc(n,r){this._pairs=[],n&&Es(n,this,r)}const pg=jc.prototype;pg.append=function(r,i){this._pairs.push([r,i])};pg.toString=function(r){const i=r?function(l){return r.call(this,l,wh)}:wh;return this._pairs.map(function(a){return i(a[0])+"="+i(a[1])},"").join("&")};function nE(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function hg(n,r,i){if(!r)return n;const l=i&&i.encode||nE;_.isFunction(i)&&(i={serialize:i});const a=i&&i.serialize;let c;if(a?c=a(r,i):c=_.isURLSearchParams(r)?r.toString():new jc(r,i).toString(l),c){const f=n.indexOf("#");f!==-1&&(n=n.slice(0,f)),n+=(n.indexOf("?")===-1?"?":"&")+c}return n}class xh{constructor(){this.handlers=[]}use(r,i,l){return this.handlers.push({fulfilled:r,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){_.forEach(this.handlers,function(l){l!==null&&r(l)})}}const mg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rE=typeof URLSearchParams<"u"?URLSearchParams:jc,oE=typeof FormData<"u"?FormData:null,iE=typeof Blob<"u"?Blob:null,lE={isBrowser:!0,classes:{URLSearchParams:rE,FormData:oE,Blob:iE},protocols:["http","https","file","blob","url","data"]},Ic=typeof window<"u"&&typeof document<"u",nc=typeof navigator=="object"&&navigator||void 0,sE=Ic&&(!nc||["ReactNative","NativeScript","NS"].indexOf(nc.product)<0),aE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uE=Ic&&window.location.href||"http://localhost",cE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ic,hasStandardBrowserEnv:sE,hasStandardBrowserWebWorkerEnv:aE,navigator:nc,origin:uE},Symbol.toStringTag,{value:"Module"})),gt={...cE,...lE};function dE(n,r){return Es(n,new gt.classes.URLSearchParams,Object.assign({visitor:function(i,l,a,c){return gt.isNode&&_.isBuffer(i)?(this.append(l,i.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},r))}function fE(n){return _.matchAll(/\w+|\[(\w*)]/g,n).map(r=>r[0]==="[]"?"":r[1]||r[0])}function pE(n){const r={},i=Object.keys(n);let l;const a=i.length;let c;for(l=0;l<a;l++)c=i[l],r[c]=n[c];return r}function gg(n){function r(i,l,a,c){let f=i[c++];if(f==="__proto__")return!0;const m=Number.isFinite(+f),p=c>=i.length;return f=!f&&_.isArray(a)?a.length:f,p?(_.hasOwnProp(a,f)?a[f]=[a[f],l]:a[f]=l,!m):((!a[f]||!_.isObject(a[f]))&&(a[f]=[]),r(i,l,a[f],c)&&_.isArray(a[f])&&(a[f]=pE(a[f])),!m)}if(_.isFormData(n)&&_.isFunction(n.entries)){const i={};return _.forEachEntry(n,(l,a)=>{r(fE(l),a,i,0)}),i}return null}function hE(n,r,i){if(_.isString(n))try{return(r||JSON.parse)(n),_.trim(n)}catch(l){if(l.name!=="SyntaxError")throw l}return(0,JSON.stringify)(n)}const wi={transitional:mg,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const l=i.getContentType()||"",a=l.indexOf("application/json")>-1,c=_.isObject(r);if(c&&_.isHTMLForm(r)&&(r=new FormData(r)),_.isFormData(r))return a?JSON.stringify(gg(r)):r;if(_.isArrayBuffer(r)||_.isBuffer(r)||_.isStream(r)||_.isFile(r)||_.isBlob(r)||_.isReadableStream(r))return r;if(_.isArrayBufferView(r))return r.buffer;if(_.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let m;if(c){if(l.indexOf("application/x-www-form-urlencoded")>-1)return dE(r,this.formSerializer).toString();if((m=_.isFileList(r))||l.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return Es(m?{"files[]":r}:r,p&&new p,this.formSerializer)}}return c||a?(i.setContentType("application/json",!1),hE(r)):r}],transformResponse:[function(r){const i=this.transitional||wi.transitional,l=i&&i.forcedJSONParsing,a=this.responseType==="json";if(_.isResponse(r)||_.isReadableStream(r))return r;if(r&&_.isString(r)&&(l&&!this.responseType||a)){const f=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(m){if(f)throw m.name==="SyntaxError"?ve.from(m,ve.ERR_BAD_RESPONSE,this,null,this.response):m}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:gt.classes.FormData,Blob:gt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],n=>{wi.headers[n]={}});const mE=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gE=n=>{const r={};let i,l,a;return n&&n.split(`
`).forEach(function(f){a=f.indexOf(":"),i=f.substring(0,a).trim().toLowerCase(),l=f.substring(a+1).trim(),!(!i||r[i]&&mE[i])&&(i==="set-cookie"?r[i]?r[i].push(l):r[i]=[l]:r[i]=r[i]?r[i]+", "+l:l)}),r},kh=Symbol("internals");function oi(n){return n&&String(n).trim().toLowerCase()}function Wl(n){return n===!1||n==null?n:_.isArray(n)?n.map(Wl):String(n)}function yE(n){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(n);)r[l[1]]=l[2];return r}const vE=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Iu(n,r,i,l,a){if(_.isFunction(l))return l.call(this,r,i);if(a&&(r=i),!!_.isString(r)){if(_.isString(l))return r.indexOf(l)!==-1;if(_.isRegExp(l))return l.test(r)}}function wE(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,l)=>i.toUpperCase()+l)}function xE(n,r){const i=_.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(n,l+i,{value:function(a,c,f){return this[l].call(this,r,a,c,f)},configurable:!0})})}class $t{constructor(r){r&&this.set(r)}set(r,i,l){const a=this;function c(m,p,g){const x=oi(p);if(!x)throw new Error("header name must be a non-empty string");const y=_.findKey(a,x);(!y||a[y]===void 0||g===!0||g===void 0&&a[y]!==!1)&&(a[y||p]=Wl(m))}const f=(m,p)=>_.forEach(m,(g,x)=>c(g,x,p));if(_.isPlainObject(r)||r instanceof this.constructor)f(r,i);else if(_.isString(r)&&(r=r.trim())&&!vE(r))f(gE(r),i);else if(_.isHeaders(r))for(const[m,p]of r.entries())c(p,m,l);else r!=null&&c(i,r,l);return this}get(r,i){if(r=oi(r),r){const l=_.findKey(this,r);if(l){const a=this[l];if(!i)return a;if(i===!0)return yE(a);if(_.isFunction(i))return i.call(this,a,l);if(_.isRegExp(i))return i.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=oi(r),r){const l=_.findKey(this,r);return!!(l&&this[l]!==void 0&&(!i||Iu(this,this[l],l,i)))}return!1}delete(r,i){const l=this;let a=!1;function c(f){if(f=oi(f),f){const m=_.findKey(l,f);m&&(!i||Iu(l,l[m],m,i))&&(delete l[m],a=!0)}}return _.isArray(r)?r.forEach(c):c(r),a}clear(r){const i=Object.keys(this);let l=i.length,a=!1;for(;l--;){const c=i[l];(!r||Iu(this,this[c],c,r,!0))&&(delete this[c],a=!0)}return a}normalize(r){const i=this,l={};return _.forEach(this,(a,c)=>{const f=_.findKey(l,c);if(f){i[f]=Wl(a),delete i[c];return}const m=r?wE(c):String(c).trim();m!==c&&delete i[c],i[m]=Wl(a),l[m]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return _.forEach(this,(l,a)=>{l!=null&&l!==!1&&(i[a]=r&&_.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const l=new this(r);return i.forEach(a=>l.set(a)),l}static accessor(r){const l=(this[kh]=this[kh]={accessors:{}}).accessors,a=this.prototype;function c(f){const m=oi(f);l[m]||(xE(a,f),l[m]=!0)}return _.isArray(r)?r.forEach(c):c(r),this}}$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors($t.prototype,({value:n},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>n,set(l){this[i]=l}}});_.freezeMethods($t);function Du(n,r){const i=this||wi,l=r||i,a=$t.from(l.headers);let c=l.data;return _.forEach(n,function(m){c=m.call(i,c,a.normalize(),r?r.status:void 0)}),a.normalize(),c}function yg(n){return!!(n&&n.__CANCEL__)}function mo(n,r,i){ve.call(this,n??"canceled",ve.ERR_CANCELED,r,i),this.name="CanceledError"}_.inherits(mo,ve,{__CANCEL__:!0});function vg(n,r,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?n(i):r(new ve("Request failed with status code "+i.status,[ve.ERR_BAD_REQUEST,ve.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function kE(n){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return r&&r[1]||""}function SE(n,r){n=n||10;const i=new Array(n),l=new Array(n);let a=0,c=0,f;return r=r!==void 0?r:1e3,function(p){const g=Date.now(),x=l[c];f||(f=g),i[a]=p,l[a]=g;let y=c,S=0;for(;y!==a;)S+=i[y++],y=y%n;if(a=(a+1)%n,a===c&&(c=(c+1)%n),g-f<r)return;const $=x&&g-x;return $?Math.round(S*1e3/$):void 0}}function EE(n,r){let i=0,l=1e3/r,a,c;const f=(g,x=Date.now())=>{i=x,a=null,c&&(clearTimeout(c),c=null),n.apply(null,g)};return[(...g)=>{const x=Date.now(),y=x-i;y>=l?f(g,x):(a=g,c||(c=setTimeout(()=>{c=null,f(a)},l-y)))},()=>a&&f(a)]}const Zl=(n,r,i=3)=>{let l=0;const a=SE(50,250);return EE(c=>{const f=c.loaded,m=c.lengthComputable?c.total:void 0,p=f-l,g=a(p),x=f<=m;l=f;const y={loaded:f,total:m,progress:m?f/m:void 0,bytes:p,rate:g||void 0,estimated:g&&m&&x?(m-f)/g:void 0,event:c,lengthComputable:m!=null,[r?"download":"upload"]:!0};n(y)},i)},Sh=(n,r)=>{const i=n!=null;return[l=>r[0]({lengthComputable:i,total:n,loaded:l}),r[1]]},Eh=n=>(...r)=>_.asap(()=>n(...r)),bE=gt.hasStandardBrowserEnv?((n,r)=>i=>(i=new URL(i,gt.origin),n.protocol===i.protocol&&n.host===i.host&&(r||n.port===i.port)))(new URL(gt.origin),gt.navigator&&/(msie|trident)/i.test(gt.navigator.userAgent)):()=>!0,CE=gt.hasStandardBrowserEnv?{write(n,r,i,l,a,c){const f=[n+"="+encodeURIComponent(r)];_.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),_.isString(l)&&f.push("path="+l),_.isString(a)&&f.push("domain="+a),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function AE(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function RE(n,r){return r?n.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):n}function wg(n,r){return n&&!AE(r)?RE(n,r):r}const bh=n=>n instanceof $t?{...n}:n;function Rr(n,r){r=r||{};const i={};function l(g,x,y,S){return _.isPlainObject(g)&&_.isPlainObject(x)?_.merge.call({caseless:S},g,x):_.isPlainObject(x)?_.merge({},x):_.isArray(x)?x.slice():x}function a(g,x,y,S){if(_.isUndefined(x)){if(!_.isUndefined(g))return l(void 0,g,y,S)}else return l(g,x,y,S)}function c(g,x){if(!_.isUndefined(x))return l(void 0,x)}function f(g,x){if(_.isUndefined(x)){if(!_.isUndefined(g))return l(void 0,g)}else return l(void 0,x)}function m(g,x,y){if(y in r)return l(g,x);if(y in n)return l(void 0,g)}const p={url:c,method:c,data:c,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:m,headers:(g,x,y)=>a(bh(g),bh(x),y,!0)};return _.forEach(Object.keys(Object.assign({},n,r)),function(x){const y=p[x]||a,S=y(n[x],r[x],x);_.isUndefined(S)&&y!==m||(i[x]=S)}),i}const xg=n=>{const r=Rr({},n);let{data:i,withXSRFToken:l,xsrfHeaderName:a,xsrfCookieName:c,headers:f,auth:m}=r;r.headers=f=$t.from(f),r.url=hg(wg(r.baseURL,r.url),n.params,n.paramsSerializer),m&&f.set("Authorization","Basic "+btoa((m.username||"")+":"+(m.password?unescape(encodeURIComponent(m.password)):"")));let p;if(_.isFormData(i)){if(gt.hasStandardBrowserEnv||gt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((p=f.getContentType())!==!1){const[g,...x]=p?p.split(";").map(y=>y.trim()).filter(Boolean):[];f.setContentType([g||"multipart/form-data",...x].join("; "))}}if(gt.hasStandardBrowserEnv&&(l&&_.isFunction(l)&&(l=l(r)),l||l!==!1&&bE(r.url))){const g=a&&c&&CE.read(c);g&&f.set(a,g)}return r},$E=typeof XMLHttpRequest<"u",TE=$E&&function(n){return new Promise(function(i,l){const a=xg(n);let c=a.data;const f=$t.from(a.headers).normalize();let{responseType:m,onUploadProgress:p,onDownloadProgress:g}=a,x,y,S,$,k;function C(){$&&$(),k&&k(),a.cancelToken&&a.cancelToken.unsubscribe(x),a.signal&&a.signal.removeEventListener("abort",x)}let b=new XMLHttpRequest;b.open(a.method.toUpperCase(),a.url,!0),b.timeout=a.timeout;function N(){if(!b)return;const O=$t.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),Q={data:!m||m==="text"||m==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:O,config:n,request:b};vg(function(q){i(q),C()},function(q){l(q),C()},Q),b=null}"onloadend"in b?b.onloadend=N:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(N)},b.onabort=function(){b&&(l(new ve("Request aborted",ve.ECONNABORTED,n,b)),b=null)},b.onerror=function(){l(new ve("Network Error",ve.ERR_NETWORK,n,b)),b=null},b.ontimeout=function(){let W=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const Q=a.transitional||mg;a.timeoutErrorMessage&&(W=a.timeoutErrorMessage),l(new ve(W,Q.clarifyTimeoutError?ve.ETIMEDOUT:ve.ECONNABORTED,n,b)),b=null},c===void 0&&f.setContentType(null),"setRequestHeader"in b&&_.forEach(f.toJSON(),function(W,Q){b.setRequestHeader(Q,W)}),_.isUndefined(a.withCredentials)||(b.withCredentials=!!a.withCredentials),m&&m!=="json"&&(b.responseType=a.responseType),g&&([S,k]=Zl(g,!0),b.addEventListener("progress",S)),p&&b.upload&&([y,$]=Zl(p),b.upload.addEventListener("progress",y),b.upload.addEventListener("loadend",$)),(a.cancelToken||a.signal)&&(x=O=>{b&&(l(!O||O.type?new mo(null,n,b):O),b.abort(),b=null)},a.cancelToken&&a.cancelToken.subscribe(x),a.signal&&(a.signal.aborted?x():a.signal.addEventListener("abort",x)));const T=kE(a.url);if(T&&gt.protocols.indexOf(T)===-1){l(new ve("Unsupported protocol "+T+":",ve.ERR_BAD_REQUEST,n));return}b.send(c||null)})},PE=(n,r)=>{const{length:i}=n=n?n.filter(Boolean):[];if(r||i){let l=new AbortController,a;const c=function(g){if(!a){a=!0,m();const x=g instanceof Error?g:this.reason;l.abort(x instanceof ve?x:new mo(x instanceof Error?x.message:x))}};let f=r&&setTimeout(()=>{f=null,c(new ve(`timeout ${r} of ms exceeded`,ve.ETIMEDOUT))},r);const m=()=>{n&&(f&&clearTimeout(f),f=null,n.forEach(g=>{g.unsubscribe?g.unsubscribe(c):g.removeEventListener("abort",c)}),n=null)};n.forEach(g=>g.addEventListener("abort",c));const{signal:p}=l;return p.unsubscribe=()=>_.asap(m),p}},NE=function*(n,r){let i=n.byteLength;if(i<r){yield n;return}let l=0,a;for(;l<i;)a=l+r,yield n.slice(l,a),l=a},jE=async function*(n,r){for await(const i of IE(n))yield*NE(i,r)},IE=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const r=n.getReader();try{for(;;){const{done:i,value:l}=await r.read();if(i)break;yield l}}finally{await r.cancel()}},Ch=(n,r,i,l)=>{const a=jE(n,r);let c=0,f,m=p=>{f||(f=!0,l&&l(p))};return new ReadableStream({async pull(p){try{const{done:g,value:x}=await a.next();if(g){m(),p.close();return}let y=x.byteLength;if(i){let S=c+=y;i(S)}p.enqueue(new Uint8Array(x))}catch(g){throw m(g),g}},cancel(p){return m(p),a.return()}},{highWaterMark:2})},bs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",kg=bs&&typeof ReadableStream=="function",DE=bs&&(typeof TextEncoder=="function"?(n=>r=>n.encode(r))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),Sg=(n,...r)=>{try{return!!n(...r)}catch{return!1}},LE=kg&&Sg(()=>{let n=!1;const r=new Request(gt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!r}),Ah=64*1024,rc=kg&&Sg(()=>_.isReadableStream(new Response("").body)),es={stream:rc&&(n=>n.body)};bs&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!es[r]&&(es[r]=_.isFunction(n[r])?i=>i[r]():(i,l)=>{throw new ve(`Response type '${r}' is not supported`,ve.ERR_NOT_SUPPORT,l)})})})(new Response);const OE=async n=>{if(n==null)return 0;if(_.isBlob(n))return n.size;if(_.isSpecCompliantForm(n))return(await new Request(gt.origin,{method:"POST",body:n}).arrayBuffer()).byteLength;if(_.isArrayBufferView(n)||_.isArrayBuffer(n))return n.byteLength;if(_.isURLSearchParams(n)&&(n=n+""),_.isString(n))return(await DE(n)).byteLength},_E=async(n,r)=>{const i=_.toFiniteNumber(n.getContentLength());return i??OE(r)},FE=bs&&(async n=>{let{url:r,method:i,data:l,signal:a,cancelToken:c,timeout:f,onDownloadProgress:m,onUploadProgress:p,responseType:g,headers:x,withCredentials:y="same-origin",fetchOptions:S}=xg(n);g=g?(g+"").toLowerCase():"text";let $=PE([a,c&&c.toAbortSignal()],f),k;const C=$&&$.unsubscribe&&(()=>{$.unsubscribe()});let b;try{if(p&&LE&&i!=="get"&&i!=="head"&&(b=await _E(x,l))!==0){let Q=new Request(r,{method:"POST",body:l,duplex:"half"}),K;if(_.isFormData(l)&&(K=Q.headers.get("content-type"))&&x.setContentType(K),Q.body){const[q,fe]=Sh(b,Zl(Eh(p)));l=Ch(Q.body,Ah,q,fe)}}_.isString(y)||(y=y?"include":"omit");const N="credentials"in Request.prototype;k=new Request(r,{...S,signal:$,method:i.toUpperCase(),headers:x.normalize().toJSON(),body:l,duplex:"half",credentials:N?y:void 0});let T=await fetch(k);const O=rc&&(g==="stream"||g==="response");if(rc&&(m||O&&C)){const Q={};["status","statusText","headers"].forEach(ge=>{Q[ge]=T[ge]});const K=_.toFiniteNumber(T.headers.get("content-length")),[q,fe]=m&&Sh(K,Zl(Eh(m),!0))||[];T=new Response(Ch(T.body,Ah,q,()=>{fe&&fe(),C&&C()}),Q)}g=g||"text";let W=await es[_.findKey(es,g)||"text"](T,n);return!O&&C&&C(),await new Promise((Q,K)=>{vg(Q,K,{data:W,headers:$t.from(T.headers),status:T.status,statusText:T.statusText,config:n,request:k})})}catch(N){throw C&&C(),N&&N.name==="TypeError"&&/fetch/i.test(N.message)?Object.assign(new ve("Network Error",ve.ERR_NETWORK,n,k),{cause:N.cause||N}):ve.from(N,N&&N.code,n,k)}}),oc={http:ZS,xhr:TE,fetch:FE};_.forEach(oc,(n,r)=>{if(n){try{Object.defineProperty(n,"name",{value:r})}catch{}Object.defineProperty(n,"adapterName",{value:r})}});const Rh=n=>`- ${n}`,zE=n=>_.isFunction(n)||n===null||n===!1,Eg={getAdapter:n=>{n=_.isArray(n)?n:[n];const{length:r}=n;let i,l;const a={};for(let c=0;c<r;c++){i=n[c];let f;if(l=i,!zE(i)&&(l=oc[(f=String(i)).toLowerCase()],l===void 0))throw new ve(`Unknown adapter '${f}'`);if(l)break;a[f||"#"+c]=l}if(!l){const c=Object.entries(a).map(([m,p])=>`adapter ${m} `+(p===!1?"is not supported by the environment":"is not available in the build"));let f=r?c.length>1?`since :
`+c.map(Rh).join(`
`):" "+Rh(c[0]):"as no adapter specified";throw new ve("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:oc};function Lu(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new mo(null,n)}function $h(n){return Lu(n),n.headers=$t.from(n.headers),n.data=Du.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Eg.getAdapter(n.adapter||wi.adapter)(n).then(function(l){return Lu(n),l.data=Du.call(n,n.transformResponse,l),l.headers=$t.from(l.headers),l},function(l){return yg(l)||(Lu(n),l&&l.response&&(l.response.data=Du.call(n,n.transformResponse,l.response),l.response.headers=$t.from(l.response.headers))),Promise.reject(l)})}const bg="1.7.9",Cs={};["object","boolean","number","function","string","symbol"].forEach((n,r)=>{Cs[n]=function(l){return typeof l===n||"a"+(r<1?"n ":" ")+n}});const Th={};Cs.transitional=function(r,i,l){function a(c,f){return"[Axios v"+bg+"] Transitional option '"+c+"'"+f+(l?". "+l:"")}return(c,f,m)=>{if(r===!1)throw new ve(a(f," has been removed"+(i?" in "+i:"")),ve.ERR_DEPRECATED);return i&&!Th[f]&&(Th[f]=!0,console.warn(a(f," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(c,f,m):!0}};Cs.spelling=function(r){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function BE(n,r,i){if(typeof n!="object")throw new ve("options must be an object",ve.ERR_BAD_OPTION_VALUE);const l=Object.keys(n);let a=l.length;for(;a-- >0;){const c=l[a],f=r[c];if(f){const m=n[c],p=m===void 0||f(m,c,n);if(p!==!0)throw new ve("option "+c+" must be "+p,ve.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new ve("Unknown option "+c,ve.ERR_BAD_OPTION)}}const Vl={assertOptions:BE,validators:Cs},dn=Vl.validators;class Sr{constructor(r){this.defaults=r,this.interceptors={request:new xh,response:new xh}}async request(r,i){try{return await this._request(r,i)}catch(l){if(l instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const c=a.stack?a.stack.replace(/^.+\n/,""):"";try{l.stack?c&&!String(l.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+c):l.stack=c}catch{}}throw l}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=Rr(this.defaults,i);const{transitional:l,paramsSerializer:a,headers:c}=i;l!==void 0&&Vl.assertOptions(l,{silentJSONParsing:dn.transitional(dn.boolean),forcedJSONParsing:dn.transitional(dn.boolean),clarifyTimeoutError:dn.transitional(dn.boolean)},!1),a!=null&&(_.isFunction(a)?i.paramsSerializer={serialize:a}:Vl.assertOptions(a,{encode:dn.function,serialize:dn.function},!0)),Vl.assertOptions(i,{baseUrl:dn.spelling("baseURL"),withXsrfToken:dn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=c&&_.merge(c.common,c[i.method]);c&&_.forEach(["delete","get","head","post","put","patch","common"],k=>{delete c[k]}),i.headers=$t.concat(f,c);const m=[];let p=!0;this.interceptors.request.forEach(function(C){typeof C.runWhen=="function"&&C.runWhen(i)===!1||(p=p&&C.synchronous,m.unshift(C.fulfilled,C.rejected))});const g=[];this.interceptors.response.forEach(function(C){g.push(C.fulfilled,C.rejected)});let x,y=0,S;if(!p){const k=[$h.bind(this),void 0];for(k.unshift.apply(k,m),k.push.apply(k,g),S=k.length,x=Promise.resolve(i);y<S;)x=x.then(k[y++],k[y++]);return x}S=m.length;let $=i;for(y=0;y<S;){const k=m[y++],C=m[y++];try{$=k($)}catch(b){C.call(this,b);break}}try{x=$h.call(this,$)}catch(k){return Promise.reject(k)}for(y=0,S=g.length;y<S;)x=x.then(g[y++],g[y++]);return x}getUri(r){r=Rr(this.defaults,r);const i=wg(r.baseURL,r.url);return hg(i,r.params,r.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(r){Sr.prototype[r]=function(i,l){return this.request(Rr(l||{},{method:r,url:i,data:(l||{}).data}))}});_.forEach(["post","put","patch"],function(r){function i(l){return function(c,f,m){return this.request(Rr(m||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:c,data:f}))}}Sr.prototype[r]=i(),Sr.prototype[r+"Form"]=i(!0)});class Dc{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(c){i=c});const l=this;this.promise.then(a=>{if(!l._listeners)return;let c=l._listeners.length;for(;c-- >0;)l._listeners[c](a);l._listeners=null}),this.promise.then=a=>{let c;const f=new Promise(m=>{l.subscribe(m),c=m}).then(a);return f.cancel=function(){l.unsubscribe(c)},f},r(function(c,f,m){l.reason||(l.reason=new mo(c,f,m),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=l=>{r.abort(l)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new Dc(function(a){r=a}),cancel:r}}}function ME(n){return function(i){return n.apply(null,i)}}function UE(n){return _.isObject(n)&&n.isAxiosError===!0}const ic={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ic).forEach(([n,r])=>{ic[r]=n});function Cg(n){const r=new Sr(n),i=ng(Sr.prototype.request,r);return _.extend(i,Sr.prototype,r,{allOwnKeys:!0}),_.extend(i,r,null,{allOwnKeys:!0}),i.create=function(a){return Cg(Rr(n,a))},i}const Oe=Cg(wi);Oe.Axios=Sr;Oe.CanceledError=mo;Oe.CancelToken=Dc;Oe.isCancel=yg;Oe.VERSION=bg;Oe.toFormData=Es;Oe.AxiosError=ve;Oe.Cancel=Oe.CanceledError;Oe.all=function(r){return Promise.all(r)};Oe.spread=ME;Oe.isAxiosError=UE;Oe.mergeConfig=Rr;Oe.AxiosHeaders=$t;Oe.formToJSON=n=>gg(_.isHTMLForm(n)?new FormData(n):n);Oe.getAdapter=Eg.getAdapter;Oe.HttpStatusCode=ic;Oe.default=Oe;const lc=w.createContext({});function HE({children:n}){const[r,i]=w.useState("url(/win-cursor/arrow.cur), auto"),[l,a]=w.useState([]),[c,f]=w.useState({image:"",type:1}),m=localStorage.getItem("wallpaper");w.useEffect(()=>{f(m!==null?JSON.parse(m):{image:"",type:1})},[m]);const p=x=>{localStorage.setItem("wallpaper",JSON.stringify(x)),f(x)},g=x=>{i(`url(/win-cursor/${x}), auto`)};return v.jsx(lc.Provider,{value:{cursor:r,changeCursor:g,storage:l,setStorage:a,wallpaper:c,changeWallpaper:p},children:n})}function Nr(){if(!lc)throw new Error("useProcessContext must be used within a ProcessContextProvider");return w.useContext(lc)}const WE=({games:n,fetchGames:r,setGames:i})=>{const{changeCursor:l}=Nr(),a=["Platform","Title","Started Date","Notes","Completed","Completed Date",""],[c,f]=w.useState(0),[m,p]=w.useState(!0);w.useEffect(()=>{g()},[]);const g=()=>{l("loading.cur");const k=setInterval(()=>{f(C=>{if(C===100)return p(!1),l("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(k)}},x=(k,C)=>{i(n.map((b,N)=>N===C?{...b,notes:k.target.value}:b))},y=k=>{p(!0),Oe.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{p(!0),Oe.post(`undefined/games/${k.id}/complete`).then(()=>r())},$=(k,C)=>{Oe.put(`undefined/games/${C.id}`,{notes:k.target.value})};return m?v.jsx(cs,{value:Math.floor(c)}):v.jsxs("div",{children:[v.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"GAMES!"}),n.length?v.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:v.jsxs(ms,{children:[v.jsx(ps,{children:v.jsx(Ar,{children:a.map(k=>v.jsx(hs,{children:k},k))})}),v.jsx(fs,{children:n.map((k,C)=>v.jsxs(Ar,{children:[v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("p",{children:k.platform.name})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("div",{style:{minWidth:"150px"},children:v.jsx("p",{children:k.title})})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?v.jsx(Tr,{style:{minWidth:"20vw"},onChange:b=>x(b,C),value:k.notes||"",onBlur:b=>$(b,k),multiline:!0,rows:4,fullWidth:!0}):k.notes}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?"Yes!":"No"}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completedDate}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&v.jsxs("div",{style:{width:"70px"},children:[v.jsx("img",{onClick:()=>S(k),src:pS,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),v.jsx("img",{onClick:()=>y(k),src:tg,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):v.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},VE=({saveAndGoBack:n})=>{const{changeCursor:r}=Nr(),[i,l]=w.useState([]),[a,c]=w.useState({}),[f,m]=w.useState(""),[p,g]=w.useState(0),[x,y]=w.useState(!1),[S,$]=w.useState(1);w.useEffect(()=>{p===100&&n(S)},[p]);const k=()=>{r("loading.cur");const b=setInterval(()=>{g(N=>{if(N===100)return 0;const T=Math.random()*50;return Math.min(N+T,100)})},500);return()=>{clearInterval(b)}};w.useEffect(()=>{Oe.get("undefined/platforms").then(b=>{l(b.data.map(N=>({...N,label:N.name})))})},[]);const C=()=>{$(x?2:1),k(),Oe.post("undefined/games",{platform_id:a.id,title:f,backlog:x})};return v.jsxs(v.Fragment,{children:[v.jsxs(Rm,{label:"New Game",children:[v.jsxs("div",{children:[v.jsx("p",{children:"Platform"}),v.jsx(xc,{formatDisplay:()=>a.name,labelId:"opt.name",options:[{},...i],menuMaxHeight:160,width:160,onChange:b=>c(b)})]}),v.jsxs("div",{style:{marginTop:"5px"},children:[v.jsx("p",{children:"Title"}),v.jsx(Tr,{value:f,placeholder:"Type here...",onChange:b=>m(b.target.value),fullWidth:!0})]}),v.jsxs("div",{style:{marginTop:"5px",display:"flex"},children:[v.jsx(gm,{value:x,onChange:()=>y(!x),style:{marginTop:"2px"}}),v.jsx("p",{children:"Backlog"})]})]}),v.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"},children:p>0?v.jsx(cs,{value:Math.floor(p)}):v.jsx(v.Fragment,{children:v.jsx(xe,{disabled:Object.keys(a).length===0||!f,onClick:()=>C(),style:{textAlign:"center"},children:"Save new game"})})})]})},QE="/freecellman.png",KE=({games:n,fetchGames:r,setGames:i})=>{const{changeCursor:l}=Nr(),a=["Platform","Title","Logged Date","Notes",""],[c,f]=w.useState(0),[m,p]=w.useState(!0);w.useEffect(()=>{g()},[]);const g=()=>{l("loading.cur");const k=setInterval(()=>{f(C=>{if(C===100)return p(!1),l("arrow.cur"),0;const b=Math.random()*20;return Math.min(C+b,100)})},500);return()=>{clearInterval(k)}},x=(k,C)=>{i(n.map((b,N)=>N===C?{...b,notes:k.target.value}:b))},y=k=>{p(!0),Oe.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{p(!0),Oe.get(`undefined/games/${k.id}/start`).then(()=>r())},$=(k,C)=>{Oe.put(`undefined/games/${C.id}`,{notes:k.target.value})};return m?v.jsx(cs,{value:Math.floor(c)}):v.jsxs("div",{children:[v.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Backlog"}),n.length?v.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:v.jsxs(ms,{children:[v.jsx(ps,{children:v.jsx(Ar,{children:a.map(k=>v.jsx(hs,{children:k},k))})}),v.jsx(fs,{children:n.map((k,C)=>v.jsxs(Ar,{children:[v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("p",{children:k.platform.name})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx("div",{style:{minWidth:"300px"},children:v.jsx("p",{children:k.title})})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:v.jsx(Tr,{style:{minWidth:"20vw"},onChange:b=>x(b,C),value:k.notes||"",onBlur:b=>$(b,k),multiline:!0,rows:2,fullWidth:!0})}),v.jsx(ct,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&v.jsxs("div",{style:{width:"70px"},children:[v.jsx("img",{onClick:()=>S(k),src:QE,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),v.jsx("img",{onClick:()=>y(k),src:tg,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},C))})]})}):v.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},Ag=()=>{const[n,r]=w.useState(1),[i,l]=w.useState([]),[a,c]=w.useState(!1);w.useEffect(()=>{f(!0)},[]),w.useEffect(()=>{switch(localStorage.setItem("system.gamecache.page",String(n)),n){case 1:f(!1);break;case 2:f(!0);break}},[n]);const f=x=>{l([]),Oe.get(`undefined/games${x?"/backlog":""}`).then(y=>l(y.data))},m=x=>{r(x),c(!1)},p=x=>{r(x),f(x===2)},g=[{component:v.jsx(VE,{saveAndGoBack:p}),text:"Add new Game to your Backlog"},{component:v.jsx(WE,{setGames:l,fetchGames:()=>f(!1),games:i}),text:"Game list"},{component:v.jsx(KE,{setGames:l,fetchGames:()=>f(!0),games:i}),text:"Backloged games, ready to play!"}];return v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>c(!a),children:"File"}),a&&v.jsxs(as,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:[v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>m(0),children:"New Game"}),v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>m(1),children:v.jsx("p",{children:"Game List"})}),v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>m(2),children:v.jsx("p",{children:"Backlog"})})]}),v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>c(!1),children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:g[n].component}),v.jsx(Tt,{variant:"well",className:"footer",children:g[n].text})]})},Ou="/home/user",Ph="/home/user/welcome.txt",Lc=()=>{const n=Tc(),[r,i]=w.useState(Ph),[l,a]=w.useState(""),[c,f]=w.useState(!1),[m,p]=w.useState(!1),[g,x]=w.useState([]),[y,S]=w.useState(""),$=w.useCallback(async T=>{try{const O=await n.readTextFile(T);i(T),a(O),f(!1),S(`Opened ${T}`)}catch(O){S(`Could not open ${T}: ${O.code??O.message}`)}},[n]);w.useEffect(()=>{(async()=>{const[T]=await n.argv();await $(T||Ph)})()},[$,n]);const k=async()=>{try{x((await n.readdir(Ou)).filter(T=>T.endsWith(".txt")))}catch{x([])}p(T=>!T)},C=async()=>{try{await n.writeTextFile(r,l),f(!1),S(`Saved ${r}`)}catch(T){S(`Save failed: ${T.code??T.message}`)}p(!1)},b=()=>{const T=window.prompt("New file name:","untitled.txt");p(!1),T&&(i(`${Ou}/${T}`),a(""),f(!0),S(`New file ${T} — not saved yet`))},N=async T=>{p(!1),await $(`${Ou}/${T}`)};return v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:k,children:"File"}),m&&v.jsxs(as,{style:{position:"absolute",left:"3%",top:"100%",zIndex:99999},children:[v.jsx(Jt,{style:{cursor:"pointer"},onClick:b,children:"New"}),v.jsx(Jt,{style:{cursor:"pointer"},onClick:C,children:"Save"}),v.jsx(us,{}),g.length===0&&v.jsx(Jt,{disabled:!0,children:"(no .txt files)"}),g.map(T=>v.jsx(Jt,{style:{cursor:"pointer"},onClick:()=>N(T),children:T},T))]}),v.jsx(xe,{variant:"menu",size:"sm",onClick:C,disabled:!c,children:"Save"})]}),v.jsx(kt,{children:v.jsx(Tr,{style:{minWidth:"60vw"},value:l,onChange:T=>{a(T.target.value),f(!0)},multiline:!0,rows:20,fullWidth:!0})}),v.jsx(Tt,{variant:"well",className:"footer",children:v.jsxs("p",{children:[r,c?" •":""," ",y&&`— ${y}`]})})]})},Rg=()=>v.jsxs(v.Fragment,{children:[v.jsx(kt,{children:v.jsx("iframe",{width:"680",height:"400",frameBorder:"0",src:"https://web.archive.org/web/20250307002700/https://www.google.com/web/20250307002700/https://www.google.com/x`x",allowFullScreen:!1})}),v.jsx(Tt,{variant:"well",className:"footer",children:"Browser"})]}),fi="/explorer.png",pi="/notes.png",Oc=()=>{const n=Tc(),[r,i]=w.useState("/"),[l,a]=w.useState([]),[c,f]=w.useState(null),[m,p]=w.useState(""),g=w.useCallback(async y=>{try{const S=await n.readdir(y),$=await Promise.all(S.map(async k=>{try{const C=await n.stat(mh(y,k));return{name:k,type:C.type,size:C.size}}catch{return{name:k,type:"file",size:0}}}));$.sort((k,C)=>k.type===C.type?k.name.localeCompare(C.name):k.type==="dir"?-1:1),i(y),a($),f(null),p(`${y} — ${$.length} item(s)`)}catch(S){p(`Cannot open ${y}: ${S.code??S.message}`)}},[n]);w.useEffect(()=>{g("/")},[g]);const x=y=>{const S=mh(r,y.name);y.type==="dir"?g(S):(n.spawn("notes",{argv:[S]}),p(`Opening ${y.name} in Notes…`))};return v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>g(pn(r)),disabled:r==="/",children:"Up"}),v.jsx(xe,{variant:"menu",size:"sm",onClick:()=>g(r),children:"Refresh"}),v.jsx("span",{style:{marginLeft:8,alignSelf:"center"},children:r})]}),v.jsx(kt,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:v.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:640,minHeight:240,alignContent:"flex-start"},children:l.map(y=>v.jsxs("div",{onClick:()=>f(y.name),onDoubleClick:()=>x(y),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[v.jsx("img",{src:y.type==="dir"?fi:pi,alt:y.type,style:{height:48,filter:c===y.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),v.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:c===y.name?"white":"black",backgroundColor:c===y.name?"#000080":"transparent"},children:y.name})]},y.name))})}),v.jsx(Tt,{variant:"well",className:"footer",children:v.jsx("p",{children:m||"Explorer"})})]})},$g=()=>v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(ws,{bundleUrl:"dos/tomb.jsdos"})})}),v.jsx(Tt,{variant:"well",className:"footer",children:"Tomb Raider"})]}),Tg=()=>v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:v.jsx("div",{style:{width:"800px",height:"600px"},children:v.jsx(ws,{bundleUrl:"dos/PERSIA.jsdos"})})}),v.jsx(Tt,{variant:"well",className:"footer",children:"TEST"})]}),GE="https://radio.plaza.one/mp3",Nh="https://api.plaza.one/status",Pg=()=>{const[n,r]=w.useState(null),[i,l]=w.useState(1);return w.useEffect(()=>{fetch(Nh).then(c=>c.json()).then(c=>r(c.song)),l(Math.floor(Math.random()*10)+1);const a=setInterval(()=>{l(Math.floor(Math.random()*10)+1),fetch(Nh).then(c=>c.json()).then(c=>r(c.song))},12e4);return()=>clearInterval(a)},[]),v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{children:v.jsxs("div",{style:{width:"300px"},className:"flex flex-col items-center gap-4",children:[v.jsx("h2",{className:"text-2xl font-bold",children:"Vaporwave Radio"}),v.jsx("audio",{controls:!0,autoPlay:!0,src:GE,className:"w-full max-w-md"}),n?v.jsxs("div",{className:"flex flex-col items-center",children:[v.jsx("img",{width:"200px",src:n.artwork_src??"/default_cover.jpg",alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),v.jsx("div",{className:"text-lg font-semibold",children:n.title}),v.jsx("div",{className:"text-sm text-neutral-400",children:n.artist})]}):v.jsxs("div",{className:"flex flex-col items-center",children:[v.jsx("img",{width:"200px",src:`/vaporwave/${i}.jpeg`,alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),v.jsx("div",{className:"text-lg font-semibold",children:"Sunset over Neon Palms"}),v.jsx("div",{className:"text-sm text-neutral-400",children:"Dream Mall Escalator"})]})]})}),v.jsx(Tt,{variant:"well",className:"footer",children:v.jsxs("p",{className:"text-sm text-neutral-400",children:["Powered by ",v.jsx("a",{href:"https://plaza.one",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Nightwave Plaza"})]})})]})},qE=()=>{const[n,r]=w.useState(""),[i,l]=w.useState(1),{changeWallpaper:a}=Nr(),c=["#008080","#000080","#000000","#00FF00","#800000","#FF00FF"],f=M.img`
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
    `,p=(y,S)=>{r(y),l(S)},g=()=>n?i===2?{background:n}:{backgroundImage:`url('/${n}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:"blue"},x=M.div`
        display: flex;
        justify-content: end;
        margin-top: 20px;
    `;return v.jsxs("div",{style:{width:"800px",maxHeight:"70vh",overflowY:"scroll",overflowX:"hidden"},children:[v.jsx("p",{className:"text-xl pb-4 font-bold",children:"Choose the wallpaper"}),v.jsx("div",{className:"flex justify-center",children:v.jsx($m,{backgroundStyles:g()})}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Solid Colors"}),v.jsx("div",{className:"flex justify-between",children:c.map(y=>v.jsx(m,{style:{background:y},onClick:()=>p(y,2),className:"p-2 cursor-pointer hover"}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Windows XP"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:5},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>p(`wallpapers/xp-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/xp-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Windows 7"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:4},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>p(`wallpapers/7-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/7-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Vaporwave Style"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:7},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>p(`wallpapers/vw-${y}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/vw-${y}.jpg`}))})]}),v.jsxs("div",{className:"mt-8",children:[v.jsx("p",{className:"text-lg text-center",children:"Games"}),v.jsx("div",{className:"flex justify-between",children:Array.from({length:1},(y,S)=>S+1).map(y=>v.jsx(f,{onClick:()=>p(`wallpapers/games-${y}.png`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/games-${y}.png`}))})]}),v.jsx(x,{children:v.jsx(xe,{onClick:()=>a({image:n,type:i}),disabled:n==="",children:"Apply"})})]})},Ng=()=>{const[n,r]=w.useState(!0),[i,l]=w.useState(null),[a,c]=w.useState([[{name:"Monitor",icon:"/monitor.png",component:qE,selected:!1}]]),f=w.useCallback((m,p)=>{c(a.map((g,x)=>g.map((y,S)=>a[m][p].selected===!0?(l(()=>a[m][p].component),r(!1),{...y,selected:!1}):x===m&&S===p?{...y,selected:!0}:{...y,selected:!1})))},[a,c]);return v.jsxs(v.Fragment,{children:[v.jsxs(xt,{children:[v.jsx(xe,{variant:"menu",size:"sm",children:"File"}),v.jsx(xe,{variant:"menu",size:"sm",children:"Edit"}),v.jsx(xe,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),v.jsx(kt,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:n||!i?v.jsx("div",{style:{width:"700px"},children:v.jsx("div",{style:{width:"100%"},children:Array.from({length:21}).map((m,p)=>v.jsx("div",{style:{display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"},children:Array.from({length:7}).map((g,x)=>a[p]&&a[p][x]&&v.jsxs("div",{onClick:()=>f(p,x),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column",paddingRight:"30px"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsx("img",{src:a[p][x].icon,style:{height:"70px",filter:a[p][x].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),v.jsx("p",{style:{color:a[p][x].selected?"white":"black",textAlign:"center",backgroundColor:a[p][x].selected?"#000080":"transparent"},children:a[p][x].name})]}))}))})}):i&&v.jsx(i,{})}),v.jsx(Tt,{variant:"well",className:"footer",children:"Control Panel"})]})},jg="/trash.svg",sc="/my-computer.png",_c="/task_manager.png",Ig="/doom.png",Dg="/doom2.png",Lg="/backlogger.png",Og="/browser.png",_g="/tomb.jpg",Fg="/persia.png",zg="/vapor.png";function YE(n){const r=[{exec:"recycle_bin",name:"Recycle Bin",icon:jg,component:Ym,permissions:[]},{exec:"my_computer",name:"My Computer",icon:sc,component:Xm,permissions:[]},{exec:"task_manager",name:"Task Manager",icon:_c,component:Pc,permissions:["proc"]},{exec:"backlogger",name:"GameCache",icon:Lg,component:Ag,permissions:["net"]},{exec:"notes",name:"Notes",icon:pi,component:Lc,permissions:["fs"]},{exec:"explorer",name:"Explorer",icon:fi,component:Oc,permissions:["fs","proc"]},{exec:"browser",name:"Browser",icon:Og,component:Rg,permissions:["net"]},{exec:"vaporwave",name:"Nightwave Plaza",icon:zg,component:Pg,permissions:["net","audio"]},{exec:"control_panel",name:"Control Panel",icon:sc,component:Ng,permissions:[]},{exec:"doom",name:"Doom",icon:Ig,component:Zm,permissions:[]},{exec:"doomII",name:"Doom II",icon:Dg,component:eg,permissions:[]},{exec:"tomb",name:"Tomb Raider",icon:_g,component:$g,permissions:[]},{exec:"persia",name:"Prince of Persia",icon:Fg,component:Tg,permissions:[]}];for(const i of r)n.register({...i,permissions:[...i.permissions]})}const _u="vortex.proctable",XE="process";function JE(n){return{load(){const r=localStorage.getItem(_u);if(r)return ZE(r);const i=localStorage.getItem(XE);if(i){const l=eb(i,n);return l&&localStorage.setItem(_u,JSON.stringify(l)),l}return null},save(r){localStorage.setItem(_u,JSON.stringify(r))}}}function ZE(n){try{const r=JSON.parse(n);return Array.isArray(r)?r:null}catch{return null}}function eb(n,r){let i;try{i=JSON.parse(n)}catch{return null}return Array.isArray(i)?i.filter(l=>l&&l.componentName).map(l=>{var a,c;return{pid:l.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:l.componentName,name:l.name??l.componentName,icon:l.icon??"",priority:typeof l.priority=="number"?l.priority:0,window:{x:((a=l.location)==null?void 0:a.x)??r().x,y:((c=l.location)==null?void 0:c.y)??r().y},cwd:"/home/user",state:"running"}}):null}class tb{constructor(){Xe(this,"mounts",[]);Xe(this,"onChange")}setOnChange(r){this.onChange=r}mount(r,i){const l=kr(r);this.mounts=this.mounts.filter(a=>a.mountPoint!==l),this.mounts.push({mountPoint:l,fs:i}),this.mounts.sort((a,c)=>c.mountPoint.length-a.mountPoint.length)}route(r){const i=kr(r);for(const l of this.mounts)if(l.mountPoint==="/"||i===l.mountPoint||i.startsWith(l.mountPoint+"/")){const a=l.mountPoint==="/"?i:i.slice(l.mountPoint.length)||"/";return{fs:l.fs,rel:a||"/",mountPoint:l.mountPoint}}throw new he("ENOENT",r)}childMounts(r){const i=kr(r);return this.mounts.filter(l=>l.mountPoint!=="/"&&pn(l.mountPoint)===i).map(l=>l.mountPoint.slice(i==="/"?1:i.length+1))}stat(r){const{fs:i,rel:l}=this.route(r);return i.stat(l)}readdir(r){const{fs:i,rel:l}=this.route(r),a=i.readdir(l);return[...new Set([...a,...this.childMounts(r)])].sort()}read(r){const{fs:i,rel:l}=this.route(r);return i.read(l)}write(r,i){var c;const{fs:l,rel:a}=this.route(r);if(l.readonly)throw new he("EROFS",r);l.write(a,i),(c=this.onChange)==null||c.call(this)}mkdir(r){var a;const{fs:i,rel:l}=this.route(r);if(i.readonly)throw new he("EROFS",r);i.mkdir(l),(a=this.onChange)==null||a.call(this)}unlink(r){var a;const{fs:i,rel:l}=this.route(r);if(i.readonly)throw new he("EROFS",r);i.unlink(l),(a=this.onChange)==null||a.call(this)}exists(r){try{return this.stat(r),!0}catch{return!1}}}const Ll=()=>Date.now();class As{constructor(){Xe(this,"readonly",!1);Xe(this,"root",{type:"dir",mtime:Ll(),children:new Map})}resolve(r){let i=this.root;for(const l of vs(r)){if(i.type!=="dir"||!i.children)throw new he("ENOTDIR",r);const a=i.children.get(l);if(!a)return null;i=a}return i}resolveDir(r){const i=this.resolve(r);if(!i)throw new he("ENOENT",r);if(i.type!=="dir")throw new he("ENOTDIR",r);return i}exists(r){return this.resolve(r)!==null}stat(r){var l;const i=this.resolve(r);if(!i)throw new he("ENOENT",r);return{type:i.type,size:i.type==="file"?((l=i.data)==null?void 0:l.length)??0:0,mtime:i.mtime}}readdir(r){return[...this.resolveDir(r).children.keys()].sort()}read(r){const i=this.resolve(r);if(!i)throw new he("ENOENT",r);if(i.type==="dir")throw new he("EISDIR",r);return i.data??new Uint8Array}write(r,i){if(kr(r)==="/")throw new he("EISDIR",r);const l=this.resolveDir(pn(r)),a=hn(r),c=l.children.get(a);if(c&&c.type==="dir")throw new he("EISDIR",r);l.children.set(a,{type:"file",mtime:Ll(),data:new Uint8Array(i)})}mkdir(r){const i=this.resolveDir(pn(r)),l=hn(r);if(!l)throw new he("EEXIST",r);if(i.children.has(l))throw new he("EEXIST",r);i.children.set(l,{type:"dir",mtime:Ll(),children:new Map})}unlink(r){if(kr(r)==="/")throw new he("EACCES","cannot unlink /");const i=this.resolve(r);if(!i)throw new he("ENOENT",r);if(i.type==="dir"&&i.children.size>0)throw new he("ENOTEMPTY",r);this.resolveDir(pn(r)).children.delete(hn(r))}rename(r,i){const l=this.resolve(r);if(!l)throw new he("ENOENT",r);const a=this.resolveDir(pn(i));this.resolveDir(pn(r)).children.delete(hn(r)),l.mtime=Ll(),a.children.set(hn(i),l)}serialize(){return Bg(this.root)}static deserialize(r){const i=new As;return i.root=Mg(r),i}}function Bg(n){if(n.type==="file")return{type:"file",mtime:n.mtime,data:Array.from(n.data??[])};const r={};for(const[i,l]of n.children)r[i]=Bg(l);return{type:"dir",mtime:n.mtime,children:r}}function Mg(n){if(n.type==="file")return{type:"file",mtime:n.mtime,data:new Uint8Array(n.data??[])};const r=new Map;for(const[i,l]of Object.entries(n.children??{}))r.set(i,Mg(l));return{type:"dir",mtime:n.mtime,children:r}}const jh=["null","zero","random"],Ih=256,Dh=()=>Date.now();class nb{constructor(){Xe(this,"readonly",!1)}device(r){const i=hn(r);if(pn(r)!=="/"||!jh.includes(i))throw new he("ENOENT",r);return i}stat(r){return r==="/"?{type:"dir",size:0,mtime:Dh()}:(this.device(r),{type:"dev",size:0,mtime:Dh()})}readdir(r){if(r!=="/")throw new he("ENOTDIR",r);return[...jh]}read(r){switch(this.device(r)){case"null":return new Uint8Array;case"zero":return new Uint8Array(Ih);case"random":return crypto.getRandomValues(new Uint8Array(Ih));default:throw new he("ENOENT",r)}}write(r,i){if(this.device(r)!=="null")throw new he("EROFS",r)}mkdir(r){throw new he("EROFS",r)}unlink(r){throw new he("EROFS",r)}}const Lh=()=>Date.now(),Oh=n=>new TextEncoder().encode(n);class rb{constructor(r){Xe(this,"readonly",!0);this.source=r}entries(){return["processes",...this.source().map(r=>r.pid)]}find(r){return this.source().find(i=>i.pid===r)}stat(r){if(r==="/")return{type:"dir",size:0,mtime:Lh()};const i=hn(r);if(pn(r)!=="/"||!this.entries().includes(i))throw new he("ENOENT",r);return{type:"file",size:this.read(r).length,mtime:Lh()}}readdir(r){if(r!=="/")throw new he("ENOTDIR",r);return this.entries()}read(r){const i=hn(r);if(i==="processes"){const a=this.source().map(c=>`${c.pid.slice(0,8)}  ${c.state.padEnd(8)}  p${c.priority}  ${c.name}`).join(`
`);return Oh(`PID       STATE     PRIO  NAME
${a}
`)}const l=this.find(i);if(!l)throw new he("ENOENT",r);return Oh(`pid:      ${l.pid}
ppid:     ${l.ppid??"-"}
name:     ${l.name}
exec:     ${l.exec}
state:    ${l.state}
priority: ${l.priority}
uid:      ${l.uid}
`)}write(r){throw new he("EROFS",r)}mkdir(r){throw new he("EROFS",r)}unlink(r){throw new he("EROFS",r)}}const _h=()=>Date.now(),ob=n=>new TextEncoder().encode(n);class ib{constructor(r){Xe(this,"readonly",!0);this.source=r}find(r){return this.source().find(i=>i.exec===r)}stat(r){if(r==="/")return{type:"dir",size:0,mtime:_h()};const i=hn(r);if(pn(r)!=="/"||!this.find(i))throw new he("ENOENT",r);return{type:"file",size:this.read(r).length,mtime:_h()}}readdir(r){if(r!=="/")throw new he("ENOTDIR",r);return this.source().map(i=>i.exec).sort()}read(r){const i=this.find(hn(r));if(!i)throw new he("ENOENT",r);return ob(`#!vortex-program
exec=${i.exec}
name=${i.name}
`)}write(r){throw new he("EROFS",r)}mkdir(r){throw new he("EROFS",r)}unlink(r){throw new he("EROFS",r)}}const Fh="vortex.vfs";function lb(){return{load(){const n=localStorage.getItem(Fh);if(!n)return null;try{return JSON.parse(n)}catch{return null}},save(n){localStorage.setItem(Fh,JSON.stringify(n))}}}const Ug=w.createContext(null),zh=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2}),sb=`Welcome to VortexOS.\r
\r
This is a real file, stored on a real virtual filesystem.\r
Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r
`;function ab(){const n=new As;return n.mkdir("/home"),n.mkdir("/home/user"),n.mkdir("/home/user/Documents"),n.mkdir("/tmp"),n.write("/home/user/welcome.txt",new TextEncoder().encode(sb)),n}function ub(){const n=new aS;YE(n);const r=new sS({registry:n,persistence:JE(zh),defaultWindowLocation:zh}),i=lb(),l=i.load(),a=l?As.deserialize(l):ab(),c=new tb;return c.mount("/",a),c.mount("/dev",new nb),c.mount("/proc",new rb(()=>r.processInfo())),c.mount("/bin",new ib(()=>r.registry.list().map(f=>({exec:f.exec,name:f.name})))),c.setOnChange(()=>i.save(a.serialize())),r.mountVfs(c),l||i.save(a.serialize()),r}function cb({children:n,kernel:r}){const i=w.useMemo(()=>r??ub(),[r]);return v.jsx(Ug.Provider,{value:i,children:n})}function Fc(){const n=w.useContext(Ug);if(!n)throw new Error("useKernel must be used within a KernelProvider");return n}function Hg(){const n=Fc();return w.useSyncExternalStore(n.subscribe,n.getSnapshot)}const Wg=L.createContext({});function db({children:n}){const r=Fc(),i=Hg(),l=w.useMemo(()=>i.map(y=>({uuid:y.pid,priority:y.priority,component:r.registry.component(y.exec)??(()=>null),selected:!1,icon:y.icon,name:y.name,location:y.window})),[i,r]),a=y=>{const S=y.componentName;S&&r.syscall(null,"spawn",{exec:S,name:y.name,icon:y.icon})},c=y=>{y&&r.syscall(null,"kill",{pid:y})},f=(y,S)=>{y.uuid&&r.syscall(null,"win_focus",{pid:y.uuid})},m=(y,S)=>{y&&r.syscall(null,"win_move",{pid:y,location:S})},p=y=>r.registry.component(y),g=y=>{switch(y){case"folder":return fi;case"notes":return pi}},x=[{name:"File",icon:fi,componentName:"explorer",component:Oc},{name:"Notes",icon:pi,componentName:"notes",component:Lc}];return v.jsx(Wg.Provider,{value:{processes:l,setProcesses:()=>{},changePriority:f,closeProcess:c,ordenatedProcess:l,addProcess:a,handleProceessLocationChange:m,fetchIcon:g,fetchComponent:p,programs:x},children:n})}function Rs(){return L.useContext(Wg)}const fb="/clouds.jpg",Vg="/w95.png",pb=()=>{const n=M.div`
        text-align: center;
    `,r=M.div`
        width: 80vw;
        height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(${fb});
        background-size: cover;
        background-position: center;
        border: 4px solid #000;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        `;return v.jsx(r,{children:v.jsxs(n,{children:[v.jsx("div",{children:v.jsx("img",{src:Vg,width:200,className:"logo"})}),v.jsx("h1",{children:"VortexOS"}),v.jsx("div",{className:"card",children:v.jsx($c,{to:"/vortex",children:v.jsx(xe,{primary:!0,children:"Are you ready?"})})}),v.jsx("p",{className:"read-the-docs",children:"By Serious Sam"})]})})},hb=()=>{const n=w.useRef(null),[r,i]=w.useState(0),{addProcess:l}=Rs(),a=()=>{n.current&&i(n.current.getBoundingClientRect().height/7)},[c,f]=w.useState([[{name:"Recycle Bin",icon:jg,selected:!1,componentName:"recycle_bin",component:Ym,priority:0},{name:"GameCache",icon:Lg,selected:!1,componentName:"backlogger",component:Ag,priority:0}],[{name:"My Computer",icon:sc,selected:!1,componentName:"my_computer",component:Xm,priority:0},{name:"Nightwave Plaza",icon:zg,selected:!1,componentName:"vaporwave",component:Pg,priority:0}],[{name:"Task Manager",icon:_c,selected:!1,componentName:"task_manager",component:Pc,priority:0},{name:"Doom",icon:Ig,selected:!1,componentName:"doom",component:Zm,priority:0}],[{name:"Explorer",icon:fi,selected:!1,componentName:"explorer",component:Oc,priority:0},{name:"Doom II",icon:Dg,selected:!1,componentName:"doomII",component:eg,priority:0}],[{name:"Browser",icon:Og,selected:!1,componentName:"browser",component:Rg,priority:0},{name:"Prince of Persia",icon:Fg,selected:!1,componentName:"persia",component:Tg,priority:0}],[{name:"Notes",icon:pi,selected:!1,componentName:"notes",component:Lc,priority:0},{name:"Tomb Raider",icon:_g,selected:!1,componentName:"tomb",component:$g,priority:0}]]),m=(x,y)=>{f(c.map((S,$)=>S.map((k,C)=>x===$&&y===C?(k.selected&&l(k),{...k,selected:!k.selected}):{...k,selected:!1})))},p=(x,y)=>{c[x]&&c[x][y]||f(c.map(S=>S.map($=>({...$,selected:!1}))))},g=()=>{new Audio("win98.mp3").play()};return w.useEffect(()=>(g(),a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),v.jsx("div",{ref:n,style:{width:"100vw",height:"94vh"},children:Array.from({length:7}).map((x,y)=>v.jsx("div",{style:{height:r,display:"flex"},children:Array.from({length:10}).map((S,$)=>v.jsx("div",{onClick:()=>p(y,$),style:{width:"10.2857%",display:"flex",justifyContent:"center",alignItems:"center"},children:c[y]&&c[y][$]&&v.jsxs("div",{onClick:()=>m(y,$),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column"},children:[v.jsx("div",{style:{display:"flex",justifyContent:"center"},children:v.jsx("img",{src:c[y][$].icon,alt:c[y][$].name,style:{height:"70px",filter:c[y][$].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),v.jsx("p",{style:{color:"white",textAlign:"center",backgroundColor:c[y][$].selected?"#000080":"transparent"},children:c[y][$].name})]})},$))},y))})},mb="/controlpanel.png",gb=()=>{const[n,r]=w.useState(!1),i=M(pm)`
        top: 94% !important;
    `,{changePriority:l,processes:a,addProcess:c}=Rs(),f=M.div`
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
    `,[m]=w.useState([{name:"Task Manager",icon:_c,selected:!1,componentName:"task_manager",component:Pc,priority:0},{name:"Control Panel",icon:mb,selected:!1,componentName:"control_panel",component:Ng,priority:0}]);return v.jsx(i,{children:v.jsxs(xt,{style:{justifyContent:"space-between",padding:"7px"},children:[v.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[v.jsxs(xe,{onClick:()=>r(!n),active:n,style:{fontWeight:"bold"},children:[v.jsx("img",{src:Vg,alt:"react95 logo",style:{height:"20px",marginRight:4}}),v.jsx("p",{style:{padding:"5px"},children:"Start"})]}),n&&v.jsxs(as,{style:{position:"absolute",left:"0",top:"-550%",width:"15vw"},onClick:()=>r(!1),children:[m.map(p=>v.jsxs(Jt,{style:{cursor:"pointer"},onClick:()=>c(p),children:[v.jsx("img",{src:p.icon,style:{width:"20px",marginRight:"5px"}}),v.jsx("p",{children:p.name})]})),v.jsxs(Jt,{children:[v.jsx("span",{role:"img","aria-label":"📁",children:"📁"}),"My account"]}),v.jsx(us,{}),v.jsxs(Jt,{disabled:!0,children:[v.jsx("span",{role:"img","aria-label":"🔙",children:"🔙"}),"Logout"]})]})]}),v.jsx("div",{style:{width:"100%",display:"flex"},children:a.map(p=>v.jsxs(f,{style:p.priority===0?{borderTopColor:"#808080",borderLeftColor:"#808080",borderRightColor:"#fff",borderBottomColor:"#fff",cursor:"pointer",display:"flex",justifyContent:"center"}:{cursor:"pointer",display:"flex",justifyContent:"center"},onClick:()=>l(p,0),children:[v.jsx("img",{src:p.icon,style:{height:"20px",alignSelf:"center",marginRight:"5px"}}),v.jsx("p",{style:{textAlign:"center",alignSelf:"center"},children:p.name})]}))}),v.jsx(Tr,{placeholder:"Search...",width:150})]})})},yb=({process:n})=>{var $,k;const{changePriority:r,closeProcess:i,handleProceessLocationChange:l}=Rs(),{changeCursor:a}=Nr(),[c,f]=w.useState({x:(($=n.location)==null?void 0:$.x)??0,y:((k=n.location)==null?void 0:k.y)??0}),m=w.useRef({x:0,y:0}),[p,g]=w.useState(!1);w.useEffect(()=>(p?(a("Grabbing.cur"),document.addEventListener("mousemove",S),document.addEventListener("mouseup",y)):(a("arrow.cur"),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",y)}),[p]);const x=C=>{g(!0),m.current={x:C.clientX-(c.x??0),y:C.clientY-(c.y??0)}},y=C=>{g(!1);const b={x:C.clientX-m.current.x,y:C.clientY-m.current.y};n.uuid&&l(n.uuid,b)},S=C=>{if(!p)return;const b={x:C.clientX-m.current.x,y:C.clientY-m.current.y};f(b)};return v.jsxs(Sc,{onClick:()=>r(n,0),resizable:!0,className:"window",style:{position:"absolute",top:`${c.y}px`,left:`${c.x}px`,transform:"translate(-50%, -50%)",zIndex:n.priority===0?"9999":n.priority+1,userSelect:"none"},children:[v.jsxs(kc,{onMouseDown:x,className:"window-title",style:{display:"flex",justifyContent:"space-between",backgroundColor:n.priority!==0?"grey":""},children:[v.jsxs("div",{style:{display:"flex"},children:[v.jsx("img",{src:n.icon,style:{width:"20px",height:"80%",marginRight:"5px",alignSelf:"center"}}),v.jsx("p",{children:n.name})]}),v.jsx(xe,{style:{alignSelf:"center"},onClick:()=>{n.uuid&&i(n.uuid)},disabled:!n.uuid,children:v.jsx("p",{style:{fontWeight:"bold"},children:"X"})})]}),n.component?v.jsx(cS,{pid:n.uuid??null,children:L.createElement(n.component)}):""]},n.uuid)},vb=()=>{const{processes:n}=Rs();return v.jsx(v.Fragment,{children:n.map(r=>v.jsx(yb,{process:r},r.uuid))})},wb=()=>{const{cursor:n}=Nr(),[r,i]=w.useState(!1),[l,a]=w.useState({x:0,y:0}),c=()=>i(!1);return w.useEffect(()=>(document.addEventListener("click",c),()=>document.removeEventListener("click",c)),[]),v.jsxs("div",{style:{cursor:n},onContextMenu:f=>{f.preventDefault(),a({x:f.pageX,y:f.pageY}),i(!0)},children:[v.jsx(hb,{}),v.jsx(vb,{}),r&&v.jsxs("div",{style:{position:"fixed",top:l.y,left:l.x,background:"#333",color:"#fff",padding:"10px",borderRadius:"5px",zIndex:9999},children:[v.jsx("div",{children:"Option 1"}),v.jsx("div",{children:"Option 2"})]}),v.jsx(gb,{})]})},xb=()=>{const{wallpaper:n}=Nr(),r=()=>n.image?n.type===2?{background:n.image}:{backgroundImage:`url('/${n.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{background:"#008080"};return v.jsx("div",{style:r(),children:v.jsxs(Sk,{children:[v.jsx(Ju,{path:"/",element:v.jsx(pb,{})}),v.jsx(Ju,{path:"/vortex",element:v.jsx(wb,{})})]})})},kb=Jv`
  ${Zv}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${P1}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${N1}') format('woff2');
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
`,Sb=()=>v.jsxs(Qk,{children:[v.jsx(kb,{}),v.jsx(qv,{theme:T1,children:v.jsx(cb,{children:v.jsx(HE,{children:v.jsx(db,{children:v.jsx(xb,{})})})})})]});Y0.createRoot(document.getElementById("root")).render(v.jsx(w.StrictMode,{children:v.jsx(Sb,{})}));
