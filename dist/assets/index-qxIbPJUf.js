var ax=Object.defineProperty;var ux=(t,r,i)=>r in t?ax(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i;var Ve=(t,r,i)=>ux(t,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(a){if(a.ep)return;a.ep=!0;const c=i(a);fetch(a.href,c)}})();function tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Du={exports:{}},ci={},Lu={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function cx(){if(Wp)return $e;Wp=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function S(P){return P===null||typeof P!="object"?null:(P=x&&P[x]||P["@@iterator"],typeof P=="function"?P:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,$={};function b(P,z,Z){this.props=P,this.context=z,this.refs=$,this.updater=Z||R}b.prototype.isReactComponent={},b.prototype.setState=function(P,z){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,z,"setState")},b.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function A(){}A.prototype=b.prototype;function C(P,z,Z){this.props=P,this.context=z,this.refs=$,this.updater=Z||R}var D=C.prototype=new A;D.constructor=C,k(D,b.prototype),D.isPureReactComponent=!0;var U=Array.isArray,Q=Object.prototype.hasOwnProperty,V={current:null},G={key:!0,ref:!0,__self:!0,__source:!0};function pe(P,z,Z){var ee,ie={},re=null,ae=null;if(z!=null)for(ee in z.ref!==void 0&&(ae=z.ref),z.key!==void 0&&(re=""+z.key),z)Q.call(z,ee)&&!G.hasOwnProperty(ee)&&(ie[ee]=z[ee]);var ye=arguments.length-2;if(ye===1)ie.children=Z;else if(1<ye){for(var M=Array(ye),de=0;de<ye;de++)M[de]=arguments[de+2];ie.children=M}if(P&&P.defaultProps)for(ee in ye=P.defaultProps,ye)ie[ee]===void 0&&(ie[ee]=ye[ee]);return{$$typeof:t,type:P,key:re,ref:ae,props:ie,_owner:V.current}}function q(P,z){return{$$typeof:t,type:P.type,key:z,ref:P.ref,props:P.props,_owner:P._owner}}function fe(P){return typeof P=="object"&&P!==null&&P.$$typeof===t}function je(P){var z={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Z){return z[Z]})}var Ee=/\/+/g;function Re(P,z){return typeof P=="object"&&P!==null&&P.key!=null?je(""+P.key):z.toString(36)}function Ce(P,z,Z,ee,ie){var re=typeof P;(re==="undefined"||re==="boolean")&&(P=null);var ae=!1;if(P===null)ae=!0;else switch(re){case"string":case"number":ae=!0;break;case"object":switch(P.$$typeof){case t:case r:ae=!0}}if(ae)return ae=P,ie=ie(ae),P=ee===""?"."+Re(ae,0):ee,U(ie)?(Z="",P!=null&&(Z=P.replace(Ee,"$&/")+"/"),Ce(ie,z,Z,"",function(de){return de})):ie!=null&&(fe(ie)&&(ie=q(ie,Z+(!ie.key||ae&&ae.key===ie.key?"":(""+ie.key).replace(Ee,"$&/")+"/")+P)),z.push(ie)),1;if(ae=0,ee=ee===""?".":ee+":",U(P))for(var ye=0;ye<P.length;ye++){re=P[ye];var M=ee+Re(re,ye);ae+=Ce(re,z,Z,M,ie)}else if(M=S(P),typeof M=="function")for(P=M.call(P),ye=0;!(re=P.next()).done;)re=re.value,M=ee+Re(re,ye++),ae+=Ce(re,z,Z,M,ie);else if(re==="object")throw z=String(P),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return ae}function Ae(P,z,Z){if(P==null)return P;var ee=[],ie=0;return Ce(P,ee,"","",function(re){return z.call(Z,re,ie++)}),ee}function ge(P){if(P._status===-1){var z=P._result;z=z(),z.then(function(Z){(P._status===0||P._status===-1)&&(P._status=1,P._result=Z)},function(Z){(P._status===0||P._status===-1)&&(P._status=2,P._result=Z)}),P._status===-1&&(P._status=0,P._result=z)}if(P._status===1)return P._result.default;throw P._result}var ce={current:null},F={transition:null},J={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:F,ReactCurrentOwner:V};function X(){throw Error("act(...) is not supported in production builds of React.")}return $e.Children={map:Ae,forEach:function(P,z,Z){Ae(P,function(){z.apply(this,arguments)},Z)},count:function(P){var z=0;return Ae(P,function(){z++}),z},toArray:function(P){return Ae(P,function(z){return z})||[]},only:function(P){if(!fe(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},$e.Component=b,$e.Fragment=i,$e.Profiler=a,$e.PureComponent=C,$e.StrictMode=l,$e.Suspense=h,$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,$e.act=X,$e.cloneElement=function(P,z,Z){if(P==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+P+".");var ee=k({},P.props),ie=P.key,re=P.ref,ae=P._owner;if(z!=null){if(z.ref!==void 0&&(re=z.ref,ae=V.current),z.key!==void 0&&(ie=""+z.key),P.type&&P.type.defaultProps)var ye=P.type.defaultProps;for(M in z)Q.call(z,M)&&!G.hasOwnProperty(M)&&(ee[M]=z[M]===void 0&&ye!==void 0?ye[M]:z[M])}var M=arguments.length-2;if(M===1)ee.children=Z;else if(1<M){ye=Array(M);for(var de=0;de<M;de++)ye[de]=arguments[de+2];ee.children=ye}return{$$typeof:t,type:P.type,key:ie,ref:re,props:ee,_owner:ae}},$e.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},P.Provider={$$typeof:c,_context:P},P.Consumer=P},$e.createElement=pe,$e.createFactory=function(P){var z=pe.bind(null,P);return z.type=P,z},$e.createRef=function(){return{current:null}},$e.forwardRef=function(P){return{$$typeof:p,render:P}},$e.isValidElement=fe,$e.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:ge}},$e.memo=function(P,z){return{$$typeof:m,type:P,compare:z===void 0?null:z}},$e.startTransition=function(P){var z=F.transition;F.transition={};try{P()}finally{F.transition=z}},$e.unstable_act=X,$e.useCallback=function(P,z){return ce.current.useCallback(P,z)},$e.useContext=function(P){return ce.current.useContext(P)},$e.useDebugValue=function(){},$e.useDeferredValue=function(P){return ce.current.useDeferredValue(P)},$e.useEffect=function(P,z){return ce.current.useEffect(P,z)},$e.useId=function(){return ce.current.useId()},$e.useImperativeHandle=function(P,z,Z){return ce.current.useImperativeHandle(P,z,Z)},$e.useInsertionEffect=function(P,z){return ce.current.useInsertionEffect(P,z)},$e.useLayoutEffect=function(P,z){return ce.current.useLayoutEffect(P,z)},$e.useMemo=function(P,z){return ce.current.useMemo(P,z)},$e.useReducer=function(P,z,Z){return ce.current.useReducer(P,z,Z)},$e.useRef=function(P){return ce.current.useRef(P)},$e.useState=function(P){return ce.current.useState(P)},$e.useSyncExternalStore=function(P,z,Z){return ce.current.useSyncExternalStore(P,z,Z)},$e.useTransition=function(){return ce.current.useTransition()},$e.version="18.3.1",$e}var Vp;function bc(){return Vp||(Vp=1,Lu.exports=cx()),Lu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function dx(){if(Qp)return ci;Qp=1;var t=bc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(p,h,m){var v,x={},S=null,R=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(R=h.ref);for(v in h)l.call(h,v)&&!c.hasOwnProperty(v)&&(x[v]=h[v]);if(p&&p.defaultProps)for(v in h=p.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:r,type:p,key:S,ref:R,props:x,_owner:a.current}}return ci.Fragment=i,ci.jsx=f,ci.jsxs=f,ci}var Kp;function fx(){return Kp||(Kp=1,Du.exports=dx()),Du.exports}var g=fx(),w=bc();const O=tm(w);var Ol={},Ou={exports:{}},Rt={},_u={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function px(){return Gp||(Gp=1,function(t){function r(F,J){var X=F.length;F.push(J);e:for(;0<X;){var P=X-1>>>1,z=F[P];if(0<a(z,J))F[P]=J,F[X]=z,X=P;else break e}}function i(F){return F.length===0?null:F[0]}function l(F){if(F.length===0)return null;var J=F[0],X=F.pop();if(X!==J){F[0]=X;e:for(var P=0,z=F.length,Z=z>>>1;P<Z;){var ee=2*(P+1)-1,ie=F[ee],re=ee+1,ae=F[re];if(0>a(ie,X))re<z&&0>a(ae,ie)?(F[P]=ae,F[re]=X,P=re):(F[P]=ie,F[ee]=X,P=ee);else if(re<z&&0>a(ae,X))F[P]=ae,F[re]=X,P=re;else break e}}return J}function a(F,J){var X=F.sortIndex-J.sortIndex;return X!==0?X:F.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();t.unstable_now=function(){return f.now()-p}}var h=[],m=[],v=1,x=null,S=3,R=!1,k=!1,$=!1,b=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(F){for(var J=i(m);J!==null;){if(J.callback===null)l(m);else if(J.startTime<=F)l(m),J.sortIndex=J.expirationTime,r(h,J);else break;J=i(m)}}function U(F){if($=!1,D(F),!k)if(i(h)!==null)k=!0,ge(Q);else{var J=i(m);J!==null&&ce(U,J.startTime-F)}}function Q(F,J){k=!1,$&&($=!1,A(pe),pe=-1),R=!0;var X=S;try{for(D(J),x=i(h);x!==null&&(!(x.expirationTime>J)||F&&!je());){var P=x.callback;if(typeof P=="function"){x.callback=null,S=x.priorityLevel;var z=P(x.expirationTime<=J);J=t.unstable_now(),typeof z=="function"?x.callback=z:x===i(h)&&l(h),D(J)}else l(h);x=i(h)}if(x!==null)var Z=!0;else{var ee=i(m);ee!==null&&ce(U,ee.startTime-J),Z=!1}return Z}finally{x=null,S=X,R=!1}}var V=!1,G=null,pe=-1,q=5,fe=-1;function je(){return!(t.unstable_now()-fe<q)}function Ee(){if(G!==null){var F=t.unstable_now();fe=F;var J=!0;try{J=G(!0,F)}finally{J?Re():(V=!1,G=null)}}else V=!1}var Re;if(typeof C=="function")Re=function(){C(Ee)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Ae=Ce.port2;Ce.port1.onmessage=Ee,Re=function(){Ae.postMessage(null)}}else Re=function(){b(Ee,0)};function ge(F){G=F,V||(V=!0,Re())}function ce(F,J){pe=b(function(){F(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){k||R||(k=!0,ge(Q))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return i(h)},t.unstable_next=function(F){switch(S){case 1:case 2:case 3:var J=3;break;default:J=S}var X=S;S=J;try{return F()}finally{S=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,J){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var X=S;S=F;try{return J()}finally{S=X}},t.unstable_scheduleCallback=function(F,J,X){var P=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?P+X:P):X=P,F){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=X+z,F={id:v++,callback:J,priorityLevel:F,startTime:X,expirationTime:z,sortIndex:-1},X>P?(F.sortIndex=X,r(m,F),i(h)===null&&F===i(m)&&($?(A(pe),pe=-1):$=!0,ce(U,X-P))):(F.sortIndex=z,r(h,F),k||R||(k=!0,ge(Q))),F},t.unstable_shouldYield=je,t.unstable_wrapCallback=function(F){var J=S;return function(){var X=S;S=J;try{return F.apply(this,arguments)}finally{S=X}}}}(zu)),zu}var qp;function hx(){return qp||(qp=1,_u.exports=px()),_u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function mx(){if(Yp)return Rt;Yp=1;var t=bc(),r=hx();function i(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function c(e,n){f(e,n),f(e+"Capture",n)}function f(e,n){for(a[e]=n,e=0;e<n.length;e++)l.add(n[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function S(e){return h.call(x,e)?!0:h.call(v,e)?!1:m.test(e)?x[e]=!0:(v[e]=!0,!1)}function R(e,n,o,s){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:o!==null?!o.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function k(e,n,o,s){if(n===null||typeof n>"u"||R(e,n,o,s))return!0;if(s)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function $(e,n,o,s,u,d,y){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=e,this.type=n,this.sanitizeURL=d,this.removeEmptyString=y}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new $(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];b[n]=new $(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new $(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new $(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new $(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new $(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new $(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new $(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new $(e,5,!1,e.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function C(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(A,C);b[n]=new $(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(A,C);b[n]=new $(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(A,C);b[n]=new $(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new $(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new $(e,1,!1,e.toLowerCase(),null,!0,!0)});function D(e,n,o,s){var u=b.hasOwnProperty(n)?b[n]:null;(u!==null?u.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(k(n,o,u,s)&&(o=null),s||u===null?S(n)&&(o===null?e.removeAttribute(n):e.setAttribute(n,""+o)):u.mustUseProperty?e[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,s=u.attributeNamespace,o===null?e.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,s?e.setAttributeNS(s,n,o):e.setAttribute(n,o))))}var U=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),V=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),pe=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),je=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Re=Symbol.for("react.suspense"),Ce=Symbol.for("react.suspense_list"),Ae=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),F=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,P;function z(e){if(P===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);P=n&&n[1]||""}return`
`+P+e}var Z=!1;function ee(e,n){if(!e||Z)return"";Z=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(L){var s=L}Reflect.construct(e,[],n)}else{try{n.call()}catch(L){s=L}e.call(n.prototype)}else{try{throw Error()}catch(L){s=L}e()}}catch(L){if(L&&s&&typeof L.stack=="string"){for(var u=L.stack.split(`
`),d=s.stack.split(`
`),y=u.length-1,E=d.length-1;1<=y&&0<=E&&u[y]!==d[E];)E--;for(;1<=y&&0<=E;y--,E--)if(u[y]!==d[E]){if(y!==1||E!==1)do if(y--,E--,0>E||u[y]!==d[E]){var T=`
`+u[y].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=y&&0<=E);break}}}finally{Z=!1,Error.prepareStackTrace=o}return(e=e?e.displayName||e.name:"")?z(e):""}function ie(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case V:return"Portal";case q:return"Profiler";case pe:return"StrictMode";case Re:return"Suspense";case Ce:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case je:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case Ee:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ae:return n=e.displayName||null,n!==null?n:re(e.type)||"Memo";case ge:n=e._payload,e=e._init;try{return re(e(n))}catch{}}return null}function ae(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(n);case 8:return n===pe?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ye(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function M(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function de(e){var n=M(e)?"checked":"value",o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){s=""+y,d.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(y){s=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ke(e){e._valueTracker||(e._valueTracker=de(e))}function Te(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var o=n.getValue(),s="";return e&&(s=M(e)?e.checked?"true":"false":e.value),e=s,e!==o?(n.setValue(e),!0):!1}function De(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ye(e,n){var o=n.checked;return X({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??e._wrapperState.initialChecked})}function Ke(e,n){var o=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;o=ye(n.value!=null?n.value:o),e._wrapperState={initialChecked:s,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function wt(e,n){n=n.checked,n!=null&&D(e,"checked",n,!1)}function Nt(e,n){wt(e,n);var o=ye(n.value),s=n.type;if(o!=null)s==="number"?(o===0&&e.value===""||e.value!=o)&&(e.value=""+o):e.value!==""+o&&(e.value=""+o);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Mt(e,n.type,o):n.hasOwnProperty("defaultValue")&&Mt(e,n.type,ye(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function sn(e,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,o||n===e.value||(e.value=n),e.defaultValue=n}o=e.name,o!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,o!==""&&(e.name=o)}function Mt(e,n,o){(n!=="number"||De(e.ownerDocument)!==e)&&(o==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+o&&(e.defaultValue=""+o))}var Sn=Array.isArray;function an(e,n,o,s){if(e=e.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<e.length;o++)u=n.hasOwnProperty("$"+e[o].value),e[o].selected!==u&&(e[o].selected=u),u&&s&&(e[o].defaultSelected=!0)}else{for(o=""+ye(o),n=null,u=0;u<e.length;u++){if(e[u].value===o){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function En(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return X({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Co(e,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Sn(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}e._wrapperState={initialValue:ye(o)}}function Ws(e,n){var o=ye(n.value),s=ye(n.defaultValue);o!=null&&(o=""+o,o!==e.value&&(e.value=o),n.defaultValue==null&&e.defaultValue!==o&&(e.defaultValue=o)),s!=null&&(e.defaultValue=""+s)}function td(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function nd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vs(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?nd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ri,rd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,s,u){MSApp.execUnsafeLocalFunction(function(){return e(n,o,s,u)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Ri=Ri||document.createElement("div"),Ri.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ao(e,n){if(n){var o=e.firstChild;if(o&&o===e.lastChild&&o.nodeType===3){o.nodeValue=n;return}}e.textContent=n}var $o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},py=["Webkit","ms","Moz","O"];Object.keys($o).forEach(function(e){py.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),$o[n]=$o[e]})});function od(e,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||$o.hasOwnProperty(e)&&$o[e]?(""+n).trim():n+"px"}function id(e,n){e=e.style;for(var o in n)if(n.hasOwnProperty(o)){var s=o.indexOf("--")===0,u=od(o,n[o],s);o==="float"&&(o="cssFloat"),s?e.setProperty(o,u):e[o]=u}}var hy=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qs(e,n){if(n){if(hy[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Ks(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gs=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,_r=null,zr=null;function ld(e){if(e=qo(e)){if(typeof Ys!="function")throw Error(i(280));var n=e.stateNode;n&&(n=Xi(n),Ys(e.stateNode,e.type,n))}}function sd(e){_r?zr?zr.push(e):zr=[e]:_r=e}function ad(){if(_r){var e=_r,n=zr;if(zr=_r=null,ld(e),n)for(e=0;e<n.length;e++)ld(n[e])}}function ud(e,n){return e(n)}function cd(){}var Xs=!1;function dd(e,n,o){if(Xs)return e(n,o);Xs=!0;try{return ud(e,n,o)}finally{Xs=!1,(_r!==null||zr!==null)&&(cd(),ad())}}function Ro(e,n){var o=e.stateNode;if(o===null)return null;var s=Xi(o);if(s===null)return null;o=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Js=!1;if(p)try{var To={};Object.defineProperty(To,"passive",{get:function(){Js=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{Js=!1}function my(e,n,o,s,u,d,y,E,T){var L=Array.prototype.slice.call(arguments,3);try{n.apply(o,L)}catch(W){this.onError(W)}}var jo=!1,Ti=null,ji=!1,Zs=null,gy={onError:function(e){jo=!0,Ti=e}};function yy(e,n,o,s,u,d,y,E,T){jo=!1,Ti=null,my.apply(gy,arguments)}function xy(e,n,o,s,u,d,y,E,T){if(yy.apply(this,arguments),jo){if(jo){var L=Ti;jo=!1,Ti=null}else throw Error(i(198));ji||(ji=!0,Zs=L)}}function dr(e){var n=e,o=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(o=n.return),e=n.return;while(e)}return n.tag===3?o:null}function fd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function pd(e){if(dr(e)!==e)throw Error(i(188))}function wy(e){var n=e.alternate;if(!n){if(n=dr(e),n===null)throw Error(i(188));return n!==e?null:e}for(var o=e,s=n;;){var u=o.return;if(u===null)break;var d=u.alternate;if(d===null){if(s=u.return,s!==null){o=s;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===o)return pd(u),e;if(d===s)return pd(u),n;d=d.sibling}throw Error(i(188))}if(o.return!==s.return)o=u,s=d;else{for(var y=!1,E=u.child;E;){if(E===o){y=!0,o=u,s=d;break}if(E===s){y=!0,s=u,o=d;break}E=E.sibling}if(!y){for(E=d.child;E;){if(E===o){y=!0,o=d,s=u;break}if(E===s){y=!0,s=d,o=u;break}E=E.sibling}if(!y)throw Error(i(189))}}if(o.alternate!==s)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?e:n}function hd(e){return e=wy(e),e!==null?md(e):null}function md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=md(e);if(n!==null)return n;e=e.sibling}return null}var gd=r.unstable_scheduleCallback,yd=r.unstable_cancelCallback,vy=r.unstable_shouldYield,ky=r.unstable_requestPaint,Xe=r.unstable_now,Sy=r.unstable_getCurrentPriorityLevel,ea=r.unstable_ImmediatePriority,xd=r.unstable_UserBlockingPriority,Pi=r.unstable_NormalPriority,Ey=r.unstable_LowPriority,wd=r.unstable_IdlePriority,Ni=null,un=null;function by(e){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:$y,Cy=Math.log,Ay=Math.LN2;function $y(e){return e>>>=0,e===0?32:31-(Cy(e)/Ay|0)|0}var Ii=64,Di=4194304;function Po(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,n){var o=e.pendingLanes;if(o===0)return 0;var s=0,u=e.suspendedLanes,d=e.pingedLanes,y=o&268435455;if(y!==0){var E=y&~u;E!==0?s=Po(E):(d&=y,d!==0&&(s=Po(d)))}else y=o&~u,y!==0?s=Po(y):d!==0&&(s=Po(d));if(s===0)return 0;if(n!==0&&n!==s&&!(n&u)&&(u=s&-s,d=n&-n,u>=d||u===16&&(d&4194240)!==0))return n;if(s&4&&(s|=o&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)o=31-qt(n),u=1<<o,s|=e[o],n&=~u;return s}function Ry(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ty(e,n){for(var o=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes;0<d;){var y=31-qt(d),E=1<<y,T=u[y];T===-1?(!(E&o)||E&s)&&(u[y]=Ry(E,n)):T<=n&&(e.expiredLanes|=E),d&=~E}}function ta(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vd(){var e=Ii;return Ii<<=1,!(Ii&4194240)&&(Ii=64),e}function na(e){for(var n=[],o=0;31>o;o++)n.push(e);return n}function No(e,n,o){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-qt(n),e[n]=o}function jy(e,n){var o=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<o;){var u=31-qt(o),d=1<<u;n[u]=0,s[u]=-1,e[u]=-1,o&=~d}}function ra(e,n){var o=e.entangledLanes|=n;for(e=e.entanglements;o;){var s=31-qt(o),u=1<<s;u&n|e[s]&n&&(e[s]|=n),o&=~u}}var Le=0;function kd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sd,oa,Ed,bd,Cd,ia=!1,Oi=[],_n=null,zn=null,Fn=null,Io=new Map,Do=new Map,Mn=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ad(e,n){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":Fn=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(n.pointerId)}}function Lo(e,n,o,s,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:o,eventSystemFlags:s,nativeEvent:d,targetContainers:[u]},n!==null&&(n=qo(n),n!==null&&oa(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ny(e,n,o,s,u){switch(n){case"focusin":return _n=Lo(_n,e,n,o,s,u),!0;case"dragenter":return zn=Lo(zn,e,n,o,s,u),!0;case"mouseover":return Fn=Lo(Fn,e,n,o,s,u),!0;case"pointerover":var d=u.pointerId;return Io.set(d,Lo(Io.get(d)||null,e,n,o,s,u)),!0;case"gotpointercapture":return d=u.pointerId,Do.set(d,Lo(Do.get(d)||null,e,n,o,s,u)),!0}return!1}function $d(e){var n=fr(e.target);if(n!==null){var o=dr(n);if(o!==null){if(n=o.tag,n===13){if(n=fd(o),n!==null){e.blockedOn=n,Cd(e.priority,function(){Ed(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){e.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var o=sa(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(o===null){o=e.nativeEvent;var s=new o.constructor(o.type,o);Gs=s,o.target.dispatchEvent(s),Gs=null}else return n=qo(o),n!==null&&oa(n),e.blockedOn=o,!1;n.shift()}return!0}function Rd(e,n,o){_i(e)&&o.delete(n)}function Iy(){ia=!1,_n!==null&&_i(_n)&&(_n=null),zn!==null&&_i(zn)&&(zn=null),Fn!==null&&_i(Fn)&&(Fn=null),Io.forEach(Rd),Do.forEach(Rd)}function Oo(e,n){e.blockedOn===n&&(e.blockedOn=null,ia||(ia=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Iy)))}function _o(e){function n(u){return Oo(u,e)}if(0<Oi.length){Oo(Oi[0],e);for(var o=1;o<Oi.length;o++){var s=Oi[o];s.blockedOn===e&&(s.blockedOn=null)}}for(_n!==null&&Oo(_n,e),zn!==null&&Oo(zn,e),Fn!==null&&Oo(Fn,e),Io.forEach(n),Do.forEach(n),o=0;o<Mn.length;o++)s=Mn[o],s.blockedOn===e&&(s.blockedOn=null);for(;0<Mn.length&&(o=Mn[0],o.blockedOn===null);)$d(o),o.blockedOn===null&&Mn.shift()}var Fr=U.ReactCurrentBatchConfig,zi=!0;function Dy(e,n,o,s){var u=Le,d=Fr.transition;Fr.transition=null;try{Le=1,la(e,n,o,s)}finally{Le=u,Fr.transition=d}}function Ly(e,n,o,s){var u=Le,d=Fr.transition;Fr.transition=null;try{Le=4,la(e,n,o,s)}finally{Le=u,Fr.transition=d}}function la(e,n,o,s){if(zi){var u=sa(e,n,o,s);if(u===null)ba(e,n,s,Fi,o),Ad(e,s);else if(Ny(u,e,n,o,s))s.stopPropagation();else if(Ad(e,s),n&4&&-1<Py.indexOf(e)){for(;u!==null;){var d=qo(u);if(d!==null&&Sd(d),d=sa(e,n,o,s),d===null&&ba(e,n,s,Fi,o),d===u)break;u=d}u!==null&&s.stopPropagation()}else ba(e,n,s,null,o)}}var Fi=null;function sa(e,n,o,s){if(Fi=null,e=qs(s),e=fr(e),e!==null)if(n=dr(e),n===null)e=null;else if(o=n.tag,o===13){if(e=fd(n),e!==null)return e;e=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Fi=e,null}function Td(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sy()){case ea:return 1;case xd:return 4;case Pi:case Ey:return 16;case wd:return 536870912;default:return 16}default:return 16}}var Bn=null,aa=null,Mi=null;function jd(){if(Mi)return Mi;var e,n=aa,o=n.length,s,u="value"in Bn?Bn.value:Bn.textContent,d=u.length;for(e=0;e<o&&n[e]===u[e];e++);var y=o-e;for(s=1;s<=y&&n[o-s]===u[d-s];s++);return Mi=u.slice(e,1<s?1-s:void 0)}function Bi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ui(){return!0}function Pd(){return!1}function It(e){function n(o,s,u,d,y){this._reactName=o,this._targetInst=u,this.type=s,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(o=e[E],this[E]=o?o(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ui:Pd,this.isPropagationStopped=Pd,this}return X(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ui)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ui)},persist:function(){},isPersistent:Ui}),n}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ua=It(Mr),zo=X({},Mr,{view:0,detail:0}),Oy=It(zo),ca,da,Fo,Hi=X({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fo&&(Fo&&e.type==="mousemove"?(ca=e.screenX-Fo.screenX,da=e.screenY-Fo.screenY):da=ca=0,Fo=e),ca)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Nd=It(Hi),_y=X({},Hi,{dataTransfer:0}),zy=It(_y),Fy=X({},zo,{relatedTarget:0}),fa=It(Fy),My=X({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),By=It(My),Uy=X({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hy=It(Uy),Wy=X({},Mr,{data:0}),Id=It(Wy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ky={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ky[e])?!!n[e]:!1}function pa(){return Gy}var qy=X({},zo,{key:function(e){if(e.key){var n=Vy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Bi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pa,charCode:function(e){return e.type==="keypress"?Bi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yy=It(qy),Xy=X({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dd=It(Xy),Jy=X({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pa}),Zy=It(Jy),e0=X({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=It(e0),n0=X({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),r0=It(n0),o0=[9,13,27,32],ha=p&&"CompositionEvent"in window,Mo=null;p&&"documentMode"in document&&(Mo=document.documentMode);var i0=p&&"TextEvent"in window&&!Mo,Ld=p&&(!ha||Mo&&8<Mo&&11>=Mo),Od=" ",_d=!1;function zd(e,n){switch(e){case"keyup":return o0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function l0(e,n){switch(e){case"compositionend":return Fd(n);case"keypress":return n.which!==32?null:(_d=!0,Od);case"textInput":return e=n.data,e===Od&&_d?null:e;default:return null}}function s0(e,n){if(Br)return e==="compositionend"||!ha&&zd(e,n)?(e=jd(),Mi=aa=Bn=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ld&&n.locale!=="ko"?null:n.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!a0[e.type]:n==="textarea"}function Bd(e,n,o,s){sd(s),n=Gi(n,"onChange"),0<n.length&&(o=new ua("onChange","change",null,o,s),e.push({event:o,listeners:n}))}var Bo=null,Uo=null;function u0(e){lf(e,0)}function Wi(e){var n=Qr(e);if(Te(n))return e}function c0(e,n){if(e==="change")return n}var Ud=!1;if(p){var ma;if(p){var ga="oninput"in document;if(!ga){var Hd=document.createElement("div");Hd.setAttribute("oninput","return;"),ga=typeof Hd.oninput=="function"}ma=ga}else ma=!1;Ud=ma&&(!document.documentMode||9<document.documentMode)}function Wd(){Bo&&(Bo.detachEvent("onpropertychange",Vd),Uo=Bo=null)}function Vd(e){if(e.propertyName==="value"&&Wi(Uo)){var n=[];Bd(n,Uo,e,qs(e)),dd(u0,n)}}function d0(e,n,o){e==="focusin"?(Wd(),Bo=n,Uo=o,Bo.attachEvent("onpropertychange",Vd)):e==="focusout"&&Wd()}function f0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Wi(Uo)}function p0(e,n){if(e==="click")return Wi(n)}function h0(e,n){if(e==="input"||e==="change")return Wi(n)}function m0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yt=typeof Object.is=="function"?Object.is:m0;function Ho(e,n){if(Yt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var o=Object.keys(e),s=Object.keys(n);if(o.length!==s.length)return!1;for(s=0;s<o.length;s++){var u=o[s];if(!h.call(n,u)||!Yt(e[u],n[u]))return!1}return!0}function Qd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kd(e,n){var o=Qd(e);e=0;for(var s;o;){if(o.nodeType===3){if(s=e+o.textContent.length,e<=n&&s>=n)return{node:o,offset:n-e};e=s}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Qd(o)}}function Gd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Gd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qd(){for(var e=window,n=De();n instanceof e.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)e=n.contentWindow;else break;n=De(e.document)}return n}function ya(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function g0(e){var n=qd(),o=e.focusedElem,s=e.selectionRange;if(n!==o&&o&&o.ownerDocument&&Gd(o.ownerDocument.documentElement,o)){if(s!==null&&ya(o)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(e,o.value.length);else if(e=(n=o.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var u=o.textContent.length,d=Math.min(s.start,u);s=s.end===void 0?d:Math.min(s.end,u),!e.extend&&d>s&&(u=s,s=d,d=u),u=Kd(o,d);var y=Kd(o,s);u&&y&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==y.node||e.focusOffset!==y.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),e.removeAllRanges(),d>s?(e.addRange(n),e.extend(y.node,y.offset)):(n.setEnd(y.node,y.offset),e.addRange(n)))}}for(n=[],e=o;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)e=n[o],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var y0=p&&"documentMode"in document&&11>=document.documentMode,Ur=null,xa=null,Wo=null,wa=!1;function Yd(e,n,o){var s=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;wa||Ur==null||Ur!==De(s)||(s=Ur,"selectionStart"in s&&ya(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Wo&&Ho(Wo,s)||(Wo=s,s=Gi(xa,"onSelect"),0<s.length&&(n=new ua("onSelect","select",null,n,o),e.push({event:n,listeners:s}),n.target=Ur)))}function Vi(e,n){var o={};return o[e.toLowerCase()]=n.toLowerCase(),o["Webkit"+e]="webkit"+n,o["Moz"+e]="moz"+n,o}var Hr={animationend:Vi("Animation","AnimationEnd"),animationiteration:Vi("Animation","AnimationIteration"),animationstart:Vi("Animation","AnimationStart"),transitionend:Vi("Transition","TransitionEnd")},va={},Xd={};p&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function Qi(e){if(va[e])return va[e];if(!Hr[e])return e;var n=Hr[e],o;for(o in n)if(n.hasOwnProperty(o)&&o in Xd)return va[e]=n[o];return e}var Jd=Qi("animationend"),Zd=Qi("animationiteration"),ef=Qi("animationstart"),tf=Qi("transitionend"),nf=new Map,rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(e,n){nf.set(e,n),c(n,[e])}for(var ka=0;ka<rf.length;ka++){var Sa=rf[ka],x0=Sa.toLowerCase(),w0=Sa[0].toUpperCase()+Sa.slice(1);Un(x0,"on"+w0)}Un(Jd,"onAnimationEnd"),Un(Zd,"onAnimationIteration"),Un(ef,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(tf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vo));function of(e,n,o){var s=e.type||"unknown-event";e.currentTarget=o,xy(s,n,void 0,e),e.currentTarget=null}function lf(e,n){n=(n&4)!==0;for(var o=0;o<e.length;o++){var s=e[o],u=s.event;s=s.listeners;e:{var d=void 0;if(n)for(var y=s.length-1;0<=y;y--){var E=s[y],T=E.instance,L=E.currentTarget;if(E=E.listener,T!==d&&u.isPropagationStopped())break e;of(u,E,L),d=T}else for(y=0;y<s.length;y++){if(E=s[y],T=E.instance,L=E.currentTarget,E=E.listener,T!==d&&u.isPropagationStopped())break e;of(u,E,L),d=T}}}if(ji)throw e=Zs,ji=!1,Zs=null,e}function Fe(e,n){var o=n[ja];o===void 0&&(o=n[ja]=new Set);var s=e+"__bubble";o.has(s)||(sf(n,e,2,!1),o.add(s))}function Ea(e,n,o){var s=0;n&&(s|=4),sf(o,e,s,n)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[Ki]){e[Ki]=!0,l.forEach(function(o){o!=="selectionchange"&&(v0.has(o)||Ea(o,!1,e),Ea(o,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ki]||(n[Ki]=!0,Ea("selectionchange",!1,n))}}function sf(e,n,o,s){switch(Td(n)){case 1:var u=Dy;break;case 4:u=Ly;break;default:u=la}o=u.bind(null,n,o,e),u=void 0,!Js||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,o,{capture:!0,passive:u}):e.addEventListener(n,o,!0):u!==void 0?e.addEventListener(n,o,{passive:u}):e.addEventListener(n,o,!1)}function ba(e,n,o,s,u){var d=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var E=s.stateNode.containerInfo;if(E===u||E.nodeType===8&&E.parentNode===u)break;if(y===4)for(y=s.return;y!==null;){var T=y.tag;if((T===3||T===4)&&(T=y.stateNode.containerInfo,T===u||T.nodeType===8&&T.parentNode===u))return;y=y.return}for(;E!==null;){if(y=fr(E),y===null)return;if(T=y.tag,T===5||T===6){s=d=y;continue e}E=E.parentNode}}s=s.return}dd(function(){var L=d,W=qs(o),K=[];e:{var H=nf.get(e);if(H!==void 0){var te=ua,le=e;switch(e){case"keypress":if(Bi(o)===0)break e;case"keydown":case"keyup":te=Yy;break;case"focusin":le="focus",te=fa;break;case"focusout":le="blur",te=fa;break;case"beforeblur":case"afterblur":te=fa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=Nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=Zy;break;case Jd:case Zd:case ef:te=By;break;case tf:te=t0;break;case"scroll":te=Oy;break;case"wheel":te=r0;break;case"copy":case"cut":case"paste":te=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=Dd}var se=(n&4)!==0,Je=!se&&e==="scroll",N=se?H!==null?H+"Capture":null:H;se=[];for(var j=L,I;j!==null;){I=j;var Y=I.stateNode;if(I.tag===5&&Y!==null&&(I=Y,N!==null&&(Y=Ro(j,N),Y!=null&&se.push(Ko(j,Y,I)))),Je)break;j=j.return}0<se.length&&(H=new te(H,le,null,o,W),K.push({event:H,listeners:se}))}}if(!(n&7)){e:{if(H=e==="mouseover"||e==="pointerover",te=e==="mouseout"||e==="pointerout",H&&o!==Gs&&(le=o.relatedTarget||o.fromElement)&&(fr(le)||le[bn]))break e;if((te||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,te?(le=o.relatedTarget||o.toElement,te=L,le=le?fr(le):null,le!==null&&(Je=dr(le),le!==Je||le.tag!==5&&le.tag!==6)&&(le=null)):(te=null,le=L),te!==le)){if(se=Nd,Y="onMouseLeave",N="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(se=Dd,Y="onPointerLeave",N="onPointerEnter",j="pointer"),Je=te==null?H:Qr(te),I=le==null?H:Qr(le),H=new se(Y,j+"leave",te,o,W),H.target=Je,H.relatedTarget=I,Y=null,fr(W)===L&&(se=new se(N,j+"enter",le,o,W),se.target=I,se.relatedTarget=Je,Y=se),Je=Y,te&&le)t:{for(se=te,N=le,j=0,I=se;I;I=Wr(I))j++;for(I=0,Y=N;Y;Y=Wr(Y))I++;for(;0<j-I;)se=Wr(se),j--;for(;0<I-j;)N=Wr(N),I--;for(;j--;){if(se===N||N!==null&&se===N.alternate)break t;se=Wr(se),N=Wr(N)}se=null}else se=null;te!==null&&af(K,H,te,se,!1),le!==null&&Je!==null&&af(K,Je,le,se,!0)}}e:{if(H=L?Qr(L):window,te=H.nodeName&&H.nodeName.toLowerCase(),te==="select"||te==="input"&&H.type==="file")var ue=c0;else if(Md(H))if(Ud)ue=h0;else{ue=f0;var he=d0}else(te=H.nodeName)&&te.toLowerCase()==="input"&&(H.type==="checkbox"||H.type==="radio")&&(ue=p0);if(ue&&(ue=ue(e,L))){Bd(K,ue,o,W);break e}he&&he(e,H,L),e==="focusout"&&(he=H._wrapperState)&&he.controlled&&H.type==="number"&&Mt(H,"number",H.value)}switch(he=L?Qr(L):window,e){case"focusin":(Md(he)||he.contentEditable==="true")&&(Ur=he,xa=L,Wo=null);break;case"focusout":Wo=xa=Ur=null;break;case"mousedown":wa=!0;break;case"contextmenu":case"mouseup":case"dragend":wa=!1,Yd(K,o,W);break;case"selectionchange":if(y0)break;case"keydown":case"keyup":Yd(K,o,W)}var me;if(ha)e:{switch(e){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Br?zd(e,o)&&(we="onCompositionEnd"):e==="keydown"&&o.keyCode===229&&(we="onCompositionStart");we&&(Ld&&o.locale!=="ko"&&(Br||we!=="onCompositionStart"?we==="onCompositionEnd"&&Br&&(me=jd()):(Bn=W,aa="value"in Bn?Bn.value:Bn.textContent,Br=!0)),he=Gi(L,we),0<he.length&&(we=new Id(we,e,null,o,W),K.push({event:we,listeners:he}),me?we.data=me:(me=Fd(o),me!==null&&(we.data=me)))),(me=i0?l0(e,o):s0(e,o))&&(L=Gi(L,"onBeforeInput"),0<L.length&&(W=new Id("onBeforeInput","beforeinput",null,o,W),K.push({event:W,listeners:L}),W.data=me))}lf(K,n)})}function Ko(e,n,o){return{instance:e,listener:n,currentTarget:o}}function Gi(e,n){for(var o=n+"Capture",s=[];e!==null;){var u=e,d=u.stateNode;u.tag===5&&d!==null&&(u=d,d=Ro(e,o),d!=null&&s.unshift(Ko(e,d,u)),d=Ro(e,n),d!=null&&s.push(Ko(e,d,u))),e=e.return}return s}function Wr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function af(e,n,o,s,u){for(var d=n._reactName,y=[];o!==null&&o!==s;){var E=o,T=E.alternate,L=E.stateNode;if(T!==null&&T===s)break;E.tag===5&&L!==null&&(E=L,u?(T=Ro(o,d),T!=null&&y.unshift(Ko(o,T,E))):u||(T=Ro(o,d),T!=null&&y.push(Ko(o,T,E)))),o=o.return}y.length!==0&&e.push({event:n,listeners:y})}var k0=/\r\n?/g,S0=/\u0000|\uFFFD/g;function uf(e){return(typeof e=="string"?e:""+e).replace(k0,`
`).replace(S0,"")}function qi(e,n,o){if(n=uf(n),uf(e)!==n&&o)throw Error(i(425))}function Yi(){}var Ca=null,Aa=null;function $a(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ra=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,b0=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(e){return cf.resolve(null).then(e).catch(C0)}:Ra;function C0(e){setTimeout(function(){throw e})}function Ta(e,n){var o=n,s=0;do{var u=o.nextSibling;if(e.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(s===0){e.removeChild(u),_o(n);return}s--}else o!=="$"&&o!=="$?"&&o!=="$!"||s++;o=u}while(o);_o(n)}function Hn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function df(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return e;n--}else o==="/$"&&n++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),cn="__reactFiber$"+Vr,Go="__reactProps$"+Vr,bn="__reactContainer$"+Vr,ja="__reactEvents$"+Vr,A0="__reactListeners$"+Vr,$0="__reactHandles$"+Vr;function fr(e){var n=e[cn];if(n)return n;for(var o=e.parentNode;o;){if(n=o[bn]||o[cn]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(e=df(e);e!==null;){if(o=e[cn])return o;e=df(e)}return n}e=o,o=e.parentNode}return null}function qo(e){return e=e[cn]||e[bn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(i(33))}function Xi(e){return e[Go]||null}var Pa=[],Kr=-1;function Wn(e){return{current:e}}function Me(e){0>Kr||(e.current=Pa[Kr],Pa[Kr]=null,Kr--)}function ze(e,n){Kr++,Pa[Kr]=e.current,e.current=n}var Vn={},pt=Wn(Vn),Et=Wn(!1),pr=Vn;function Gr(e,n){var o=e.type.contextTypes;if(!o)return Vn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var u={},d;for(d in o)u[d]=n[d];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=u),u}function bt(e){return e=e.childContextTypes,e!=null}function Ji(){Me(Et),Me(pt)}function ff(e,n,o){if(pt.current!==Vn)throw Error(i(168));ze(pt,n),ze(Et,o)}function pf(e,n,o){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return o;s=s.getChildContext();for(var u in s)if(!(u in n))throw Error(i(108,ae(e)||"Unknown",u));return X({},o,s)}function Zi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Vn,pr=pt.current,ze(pt,e),ze(Et,Et.current),!0}function hf(e,n,o){var s=e.stateNode;if(!s)throw Error(i(169));o?(e=pf(e,n,pr),s.__reactInternalMemoizedMergedChildContext=e,Me(Et),Me(pt),ze(pt,e)):Me(Et),ze(Et,o)}var Cn=null,el=!1,Na=!1;function mf(e){Cn===null?Cn=[e]:Cn.push(e)}function R0(e){el=!0,mf(e)}function Qn(){if(!Na&&Cn!==null){Na=!0;var e=0,n=Le;try{var o=Cn;for(Le=1;e<o.length;e++){var s=o[e];do s=s(!0);while(s!==null)}Cn=null,el=!1}catch(u){throw Cn!==null&&(Cn=Cn.slice(e+1)),gd(ea,Qn),u}finally{Le=n,Na=!1}}return null}var qr=[],Yr=0,tl=null,nl=0,Bt=[],Ut=0,hr=null,An=1,$n="";function mr(e,n){qr[Yr++]=nl,qr[Yr++]=tl,tl=e,nl=n}function gf(e,n,o){Bt[Ut++]=An,Bt[Ut++]=$n,Bt[Ut++]=hr,hr=e;var s=An;e=$n;var u=32-qt(s)-1;s&=~(1<<u),o+=1;var d=32-qt(n)+u;if(30<d){var y=u-u%5;d=(s&(1<<y)-1).toString(32),s>>=y,u-=y,An=1<<32-qt(n)+u|o<<u|s,$n=d+e}else An=1<<d|o<<u|s,$n=e}function Ia(e){e.return!==null&&(mr(e,1),gf(e,1,0))}function Da(e){for(;e===tl;)tl=qr[--Yr],qr[Yr]=null,nl=qr[--Yr],qr[Yr]=null;for(;e===hr;)hr=Bt[--Ut],Bt[Ut]=null,$n=Bt[--Ut],Bt[Ut]=null,An=Bt[--Ut],Bt[Ut]=null}var Dt=null,Lt=null,Ue=!1,Xt=null;function yf(e,n){var o=Qt(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=e,n=e.deletions,n===null?(e.deletions=[o],e.flags|=16):n.push(o)}function xf(e,n){switch(e.tag){case 5:var o=e.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Dt=e,Lt=Hn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Dt=e,Lt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=hr!==null?{id:An,overflow:$n}:null,e.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Qt(18,null,null,0),o.stateNode=n,o.return=e,e.child=o,Dt=e,Lt=null,!0):!1;default:return!1}}function La(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Oa(e){if(Ue){var n=Lt;if(n){var o=n;if(!xf(e,n)){if(La(e))throw Error(i(418));n=Hn(o.nextSibling);var s=Dt;n&&xf(e,n)?yf(s,o):(e.flags=e.flags&-4097|2,Ue=!1,Dt=e)}}else{if(La(e))throw Error(i(418));e.flags=e.flags&-4097|2,Ue=!1,Dt=e}}}function wf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Dt=e}function rl(e){if(e!==Dt)return!1;if(!Ue)return wf(e),Ue=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!$a(e.type,e.memoizedProps)),n&&(n=Lt)){if(La(e))throw vf(),Error(i(418));for(;n;)yf(e,n),n=Hn(n.nextSibling)}if(wf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var o=e.data;if(o==="/$"){if(n===0){Lt=Hn(e.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}e=e.nextSibling}Lt=null}}else Lt=Dt?Hn(e.stateNode.nextSibling):null;return!0}function vf(){for(var e=Lt;e;)e=Hn(e.nextSibling)}function Xr(){Lt=Dt=null,Ue=!1}function _a(e){Xt===null?Xt=[e]:Xt.push(e)}var T0=U.ReactCurrentBatchConfig;function Yo(e,n,o){if(e=o.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var s=o.stateNode}if(!s)throw Error(i(147,e));var u=s,d=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===d?n.ref:(n=function(y){var E=u.refs;y===null?delete E[d]:E[d]=y},n._stringRef=d,n)}if(typeof e!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,e))}return e}function ol(e,n){throw e=Object.prototype.toString.call(n),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function kf(e){var n=e._init;return n(e._payload)}function Sf(e){function n(N,j){if(e){var I=N.deletions;I===null?(N.deletions=[j],N.flags|=16):I.push(j)}}function o(N,j){if(!e)return null;for(;j!==null;)n(N,j),j=j.sibling;return null}function s(N,j){for(N=new Map;j!==null;)j.key!==null?N.set(j.key,j):N.set(j.index,j),j=j.sibling;return N}function u(N,j){return N=er(N,j),N.index=0,N.sibling=null,N}function d(N,j,I){return N.index=I,e?(I=N.alternate,I!==null?(I=I.index,I<j?(N.flags|=2,j):I):(N.flags|=2,j)):(N.flags|=1048576,j)}function y(N){return e&&N.alternate===null&&(N.flags|=2),N}function E(N,j,I,Y){return j===null||j.tag!==6?(j=Ru(I,N.mode,Y),j.return=N,j):(j=u(j,I),j.return=N,j)}function T(N,j,I,Y){var ue=I.type;return ue===G?W(N,j,I.props.children,Y,I.key):j!==null&&(j.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ge&&kf(ue)===j.type)?(Y=u(j,I.props),Y.ref=Yo(N,j,I),Y.return=N,Y):(Y=Rl(I.type,I.key,I.props,null,N.mode,Y),Y.ref=Yo(N,j,I),Y.return=N,Y)}function L(N,j,I,Y){return j===null||j.tag!==4||j.stateNode.containerInfo!==I.containerInfo||j.stateNode.implementation!==I.implementation?(j=Tu(I,N.mode,Y),j.return=N,j):(j=u(j,I.children||[]),j.return=N,j)}function W(N,j,I,Y,ue){return j===null||j.tag!==7?(j=Er(I,N.mode,Y,ue),j.return=N,j):(j=u(j,I),j.return=N,j)}function K(N,j,I){if(typeof j=="string"&&j!==""||typeof j=="number")return j=Ru(""+j,N.mode,I),j.return=N,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return I=Rl(j.type,j.key,j.props,null,N.mode,I),I.ref=Yo(N,null,j),I.return=N,I;case V:return j=Tu(j,N.mode,I),j.return=N,j;case ge:var Y=j._init;return K(N,Y(j._payload),I)}if(Sn(j)||J(j))return j=Er(j,N.mode,I,null),j.return=N,j;ol(N,j)}return null}function H(N,j,I,Y){var ue=j!==null?j.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ue!==null?null:E(N,j,""+I,Y);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:return I.key===ue?T(N,j,I,Y):null;case V:return I.key===ue?L(N,j,I,Y):null;case ge:return ue=I._init,H(N,j,ue(I._payload),Y)}if(Sn(I)||J(I))return ue!==null?null:W(N,j,I,Y,null);ol(N,I)}return null}function te(N,j,I,Y,ue){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return N=N.get(I)||null,E(j,N,""+Y,ue);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Q:return N=N.get(Y.key===null?I:Y.key)||null,T(j,N,Y,ue);case V:return N=N.get(Y.key===null?I:Y.key)||null,L(j,N,Y,ue);case ge:var he=Y._init;return te(N,j,I,he(Y._payload),ue)}if(Sn(Y)||J(Y))return N=N.get(I)||null,W(j,N,Y,ue,null);ol(j,Y)}return null}function le(N,j,I,Y){for(var ue=null,he=null,me=j,we=j=0,it=null;me!==null&&we<I.length;we++){me.index>we?(it=me,me=null):it=me.sibling;var Ne=H(N,me,I[we],Y);if(Ne===null){me===null&&(me=it);break}e&&me&&Ne.alternate===null&&n(N,me),j=d(Ne,j,we),he===null?ue=Ne:he.sibling=Ne,he=Ne,me=it}if(we===I.length)return o(N,me),Ue&&mr(N,we),ue;if(me===null){for(;we<I.length;we++)me=K(N,I[we],Y),me!==null&&(j=d(me,j,we),he===null?ue=me:he.sibling=me,he=me);return Ue&&mr(N,we),ue}for(me=s(N,me);we<I.length;we++)it=te(me,N,we,I[we],Y),it!==null&&(e&&it.alternate!==null&&me.delete(it.key===null?we:it.key),j=d(it,j,we),he===null?ue=it:he.sibling=it,he=it);return e&&me.forEach(function(tr){return n(N,tr)}),Ue&&mr(N,we),ue}function se(N,j,I,Y){var ue=J(I);if(typeof ue!="function")throw Error(i(150));if(I=ue.call(I),I==null)throw Error(i(151));for(var he=ue=null,me=j,we=j=0,it=null,Ne=I.next();me!==null&&!Ne.done;we++,Ne=I.next()){me.index>we?(it=me,me=null):it=me.sibling;var tr=H(N,me,Ne.value,Y);if(tr===null){me===null&&(me=it);break}e&&me&&tr.alternate===null&&n(N,me),j=d(tr,j,we),he===null?ue=tr:he.sibling=tr,he=tr,me=it}if(Ne.done)return o(N,me),Ue&&mr(N,we),ue;if(me===null){for(;!Ne.done;we++,Ne=I.next())Ne=K(N,Ne.value,Y),Ne!==null&&(j=d(Ne,j,we),he===null?ue=Ne:he.sibling=Ne,he=Ne);return Ue&&mr(N,we),ue}for(me=s(N,me);!Ne.done;we++,Ne=I.next())Ne=te(me,N,we,Ne.value,Y),Ne!==null&&(e&&Ne.alternate!==null&&me.delete(Ne.key===null?we:Ne.key),j=d(Ne,j,we),he===null?ue=Ne:he.sibling=Ne,he=Ne);return e&&me.forEach(function(sx){return n(N,sx)}),Ue&&mr(N,we),ue}function Je(N,j,I,Y){if(typeof I=="object"&&I!==null&&I.type===G&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Q:e:{for(var ue=I.key,he=j;he!==null;){if(he.key===ue){if(ue=I.type,ue===G){if(he.tag===7){o(N,he.sibling),j=u(he,I.props.children),j.return=N,N=j;break e}}else if(he.elementType===ue||typeof ue=="object"&&ue!==null&&ue.$$typeof===ge&&kf(ue)===he.type){o(N,he.sibling),j=u(he,I.props),j.ref=Yo(N,he,I),j.return=N,N=j;break e}o(N,he);break}else n(N,he);he=he.sibling}I.type===G?(j=Er(I.props.children,N.mode,Y,I.key),j.return=N,N=j):(Y=Rl(I.type,I.key,I.props,null,N.mode,Y),Y.ref=Yo(N,j,I),Y.return=N,N=Y)}return y(N);case V:e:{for(he=I.key;j!==null;){if(j.key===he)if(j.tag===4&&j.stateNode.containerInfo===I.containerInfo&&j.stateNode.implementation===I.implementation){o(N,j.sibling),j=u(j,I.children||[]),j.return=N,N=j;break e}else{o(N,j);break}else n(N,j);j=j.sibling}j=Tu(I,N.mode,Y),j.return=N,N=j}return y(N);case ge:return he=I._init,Je(N,j,he(I._payload),Y)}if(Sn(I))return le(N,j,I,Y);if(J(I))return se(N,j,I,Y);ol(N,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,j!==null&&j.tag===6?(o(N,j.sibling),j=u(j,I),j.return=N,N=j):(o(N,j),j=Ru(I,N.mode,Y),j.return=N,N=j),y(N)):o(N,j)}return Je}var Jr=Sf(!0),Ef=Sf(!1),il=Wn(null),ll=null,Zr=null,za=null;function Fa(){za=Zr=ll=null}function Ma(e){var n=il.current;Me(il),e._currentValue=n}function Ba(e,n,o){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===o)break;e=e.return}}function eo(e,n){ll=e,za=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(Ct=!0),e.firstContext=null)}function Ht(e){var n=e._currentValue;if(za!==e)if(e={context:e,memoizedValue:n,next:null},Zr===null){if(ll===null)throw Error(i(308));Zr=e,ll.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return n}var gr=null;function Ua(e){gr===null?gr=[e]:gr.push(e)}function bf(e,n,o,s){var u=n.interleaved;return u===null?(o.next=o,Ua(n)):(o.next=u.next,u.next=o),n.interleaved=o,Rn(e,s)}function Rn(e,n){e.lanes|=n;var o=e.alternate;for(o!==null&&(o.lanes|=n),o=e,e=e.return;e!==null;)e.childLanes|=n,o=e.alternate,o!==null&&(o.childLanes|=n),o=e,e=e.return;return o.tag===3?o.stateNode:null}var Kn=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Gn(e,n,o){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Pe&2){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,Rn(e,o)}return u=s.interleaved,u===null?(n.next=n,Ua(s)):(n.next=u.next,u.next=n),s.interleaved=n,Rn(e,o)}function sl(e,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,ra(e,o)}}function Af(e,n){var o=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,o===s)){var u=null,d=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};d===null?u=d=y:d=d.next=y,o=o.next}while(o!==null);d===null?u=d=n:d=d.next=n}else u=d=n;o={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:s.shared,effects:s.effects},e.updateQueue=o;return}e=o.lastBaseUpdate,e===null?o.firstBaseUpdate=n:e.next=n,o.lastBaseUpdate=n}function al(e,n,o,s){var u=e.updateQueue;Kn=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var T=E,L=T.next;T.next=null,y===null?d=L:y.next=L,y=T;var W=e.alternate;W!==null&&(W=W.updateQueue,E=W.lastBaseUpdate,E!==y&&(E===null?W.firstBaseUpdate=L:E.next=L,W.lastBaseUpdate=T))}if(d!==null){var K=u.baseState;y=0,W=L=T=null,E=d;do{var H=E.lane,te=E.eventTime;if((s&H)===H){W!==null&&(W=W.next={eventTime:te,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var le=e,se=E;switch(H=n,te=o,se.tag){case 1:if(le=se.payload,typeof le=="function"){K=le.call(te,K,H);break e}K=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=se.payload,H=typeof le=="function"?le.call(te,K,H):le,H==null)break e;K=X({},K,H);break e;case 2:Kn=!0}}E.callback!==null&&E.lane!==0&&(e.flags|=64,H=u.effects,H===null?u.effects=[E]:H.push(E))}else te={eventTime:te,lane:H,tag:E.tag,payload:E.payload,callback:E.callback,next:null},W===null?(L=W=te,T=K):W=W.next=te,y|=H;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;H=E,E=H.next,H.next=null,u.lastBaseUpdate=H,u.shared.pending=null}}while(!0);if(W===null&&(T=K),u.baseState=T,u.firstBaseUpdate=L,u.lastBaseUpdate=W,n=u.shared.interleaved,n!==null){u=n;do y|=u.lane,u=u.next;while(u!==n)}else d===null&&(u.shared.lanes=0);wr|=y,e.lanes=y,e.memoizedState=K}}function $f(e,n,o){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],u=s.callback;if(u!==null){if(s.callback=null,s=o,typeof u!="function")throw Error(i(191,u));u.call(s)}}}var Xo={},dn=Wn(Xo),Jo=Wn(Xo),Zo=Wn(Xo);function yr(e){if(e===Xo)throw Error(i(174));return e}function Wa(e,n){switch(ze(Zo,n),ze(Jo,e),ze(dn,Xo),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Vs(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Vs(n,e)}Me(dn),ze(dn,n)}function to(){Me(dn),Me(Jo),Me(Zo)}function Rf(e){yr(Zo.current);var n=yr(dn.current),o=Vs(n,e.type);n!==o&&(ze(Jo,e),ze(dn,o))}function Va(e){Jo.current===e&&(Me(dn),Me(Jo))}var He=Wn(0);function ul(e){for(var n=e;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qa=[];function Ka(){for(var e=0;e<Qa.length;e++)Qa[e]._workInProgressVersionPrimary=null;Qa.length=0}var cl=U.ReactCurrentDispatcher,Ga=U.ReactCurrentBatchConfig,xr=0,We=null,tt=null,rt=null,dl=!1,ei=!1,ti=0,j0=0;function ht(){throw Error(i(321))}function qa(e,n){if(n===null)return!1;for(var o=0;o<n.length&&o<e.length;o++)if(!Yt(e[o],n[o]))return!1;return!0}function Ya(e,n,o,s,u,d){if(xr=d,We=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,cl.current=e===null||e.memoizedState===null?D0:L0,e=o(s,u),ei){d=0;do{if(ei=!1,ti=0,25<=d)throw Error(i(301));d+=1,rt=tt=null,n.updateQueue=null,cl.current=O0,e=o(s,u)}while(ei)}if(cl.current=hl,n=tt!==null&&tt.next!==null,xr=0,rt=tt=We=null,dl=!1,n)throw Error(i(300));return e}function Xa(){var e=ti!==0;return ti=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rt===null?We.memoizedState=rt=e:rt=rt.next=e,rt}function Wt(){if(tt===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var n=rt===null?We.memoizedState:rt.next;if(n!==null)rt=n,tt=e;else{if(e===null)throw Error(i(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},rt===null?We.memoizedState=rt=e:rt=rt.next=e}return rt}function ni(e,n){return typeof n=="function"?n(e):n}function Ja(e){var n=Wt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=tt,u=s.baseQueue,d=o.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}s.baseQueue=u=d,o.pending=null}if(u!==null){d=u.next,s=s.baseState;var E=y=null,T=null,L=d;do{var W=L.lane;if((xr&W)===W)T!==null&&(T=T.next={lane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),s=L.hasEagerState?L.eagerState:e(s,L.action);else{var K={lane:W,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null};T===null?(E=T=K,y=s):T=T.next=K,We.lanes|=W,wr|=W}L=L.next}while(L!==null&&L!==d);T===null?y=s:T.next=E,Yt(s,n.memoizedState)||(Ct=!0),n.memoizedState=s,n.baseState=y,n.baseQueue=T,o.lastRenderedState=s}if(e=o.interleaved,e!==null){u=e;do d=u.lane,We.lanes|=d,wr|=d,u=u.next;while(u!==e)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Za(e){var n=Wt(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=e;var s=o.dispatch,u=o.pending,d=n.memoizedState;if(u!==null){o.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);Yt(d,n.memoizedState)||(Ct=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),o.lastRenderedState=d}return[d,s]}function Tf(){}function jf(e,n){var o=We,s=Wt(),u=n(),d=!Yt(s.memoizedState,u);if(d&&(s.memoizedState=u,Ct=!0),s=s.queue,eu(If.bind(null,o,s,e),[e]),s.getSnapshot!==n||d||rt!==null&&rt.memoizedState.tag&1){if(o.flags|=2048,ri(9,Nf.bind(null,o,s,u,n),void 0,null),ot===null)throw Error(i(349));xr&30||Pf(o,n,u)}return u}function Pf(e,n,o){e.flags|=16384,e={getSnapshot:n,value:o},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.stores=[e]):(o=n.stores,o===null?n.stores=[e]:o.push(e))}function Nf(e,n,o,s){n.value=o,n.getSnapshot=s,Df(n)&&Lf(e)}function If(e,n,o){return o(function(){Df(n)&&Lf(e)})}function Df(e){var n=e.getSnapshot;e=e.value;try{var o=n();return!Yt(e,o)}catch{return!0}}function Lf(e){var n=Rn(e,1);n!==null&&tn(n,e,1,-1)}function Of(e){var n=fn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},n.queue=e,e=e.dispatch=I0.bind(null,We,e),[n.memoizedState,e]}function ri(e,n,o,s){return e={tag:e,create:n,destroy:o,deps:s,next:null},n=We.updateQueue,n===null?(n={lastEffect:null,stores:null},We.updateQueue=n,n.lastEffect=e.next=e):(o=n.lastEffect,o===null?n.lastEffect=e.next=e:(s=o.next,o.next=e,e.next=s,n.lastEffect=e)),e}function _f(){return Wt().memoizedState}function fl(e,n,o,s){var u=fn();We.flags|=e,u.memoizedState=ri(1|n,o,void 0,s===void 0?null:s)}function pl(e,n,o,s){var u=Wt();s=s===void 0?null:s;var d=void 0;if(tt!==null){var y=tt.memoizedState;if(d=y.destroy,s!==null&&qa(s,y.deps)){u.memoizedState=ri(n,o,d,s);return}}We.flags|=e,u.memoizedState=ri(1|n,o,d,s)}function zf(e,n){return fl(8390656,8,e,n)}function eu(e,n){return pl(2048,8,e,n)}function Ff(e,n){return pl(4,2,e,n)}function Mf(e,n){return pl(4,4,e,n)}function Bf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Uf(e,n,o){return o=o!=null?o.concat([e]):null,pl(4,4,Bf.bind(null,n,e),o)}function tu(){}function Hf(e,n){var o=Wt();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&qa(n,s[1])?s[0]:(o.memoizedState=[e,n],e)}function Wf(e,n){var o=Wt();n=n===void 0?null:n;var s=o.memoizedState;return s!==null&&n!==null&&qa(n,s[1])?s[0]:(e=e(),o.memoizedState=[e,n],e)}function Vf(e,n,o){return xr&21?(Yt(o,n)||(o=vd(),We.lanes|=o,wr|=o,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,Ct=!0),e.memoizedState=o)}function P0(e,n){var o=Le;Le=o!==0&&4>o?o:4,e(!0);var s=Ga.transition;Ga.transition={};try{e(!1),n()}finally{Le=o,Ga.transition=s}}function Qf(){return Wt().memoizedState}function N0(e,n,o){var s=Jn(e);if(o={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null},Kf(e))Gf(n,o);else if(o=bf(e,n,o,s),o!==null){var u=kt();tn(o,e,s,u),qf(o,n,s)}}function I0(e,n,o){var s=Jn(e),u={lane:s,action:o,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))Gf(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var y=n.lastRenderedState,E=d(y,o);if(u.hasEagerState=!0,u.eagerState=E,Yt(E,y)){var T=n.interleaved;T===null?(u.next=u,Ua(n)):(u.next=T.next,T.next=u),n.interleaved=u;return}}catch{}finally{}o=bf(e,n,u,s),o!==null&&(u=kt(),tn(o,e,s,u),qf(o,n,s))}}function Kf(e){var n=e.alternate;return e===We||n!==null&&n===We}function Gf(e,n){ei=dl=!0;var o=e.pending;o===null?n.next=n:(n.next=o.next,o.next=n),e.pending=n}function qf(e,n,o){if(o&4194240){var s=n.lanes;s&=e.pendingLanes,o|=s,n.lanes=o,ra(e,o)}}var hl={readContext:Ht,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},D0={readContext:Ht,useCallback:function(e,n){return fn().memoizedState=[e,n===void 0?null:n],e},useContext:Ht,useEffect:zf,useImperativeHandle:function(e,n,o){return o=o!=null?o.concat([e]):null,fl(4194308,4,Bf.bind(null,n,e),o)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){return fl(4,2,e,n)},useMemo:function(e,n){var o=fn();return n=n===void 0?null:n,e=e(),o.memoizedState=[e,n],e},useReducer:function(e,n,o){var s=fn();return n=o!==void 0?o(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=N0.bind(null,We,e),[s.memoizedState,e]},useRef:function(e){var n=fn();return e={current:e},n.memoizedState=e},useState:Of,useDebugValue:tu,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Of(!1),n=e[0];return e=P0.bind(null,e[1]),fn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,o){var s=We,u=fn();if(Ue){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),ot===null)throw Error(i(349));xr&30||Pf(s,n,o)}u.memoizedState=o;var d={value:o,getSnapshot:n};return u.queue=d,zf(If.bind(null,s,d,e),[e]),s.flags|=2048,ri(9,Nf.bind(null,s,d,o,n),void 0,null),o},useId:function(){var e=fn(),n=ot.identifierPrefix;if(Ue){var o=$n,s=An;o=(s&~(1<<32-qt(s)-1)).toString(32)+o,n=":"+n+"R"+o,o=ti++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=j0++,n=":"+n+"r"+o.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},L0={readContext:Ht,useCallback:Hf,useContext:Ht,useEffect:eu,useImperativeHandle:Uf,useInsertionEffect:Ff,useLayoutEffect:Mf,useMemo:Wf,useReducer:Ja,useRef:_f,useState:function(){return Ja(ni)},useDebugValue:tu,useDeferredValue:function(e){var n=Wt();return Vf(n,tt.memoizedState,e)},useTransition:function(){var e=Ja(ni)[0],n=Wt().memoizedState;return[e,n]},useMutableSource:Tf,useSyncExternalStore:jf,useId:Qf,unstable_isNewReconciler:!1},O0={readContext:Ht,useCallback:Hf,useContext:Ht,useEffect:eu,useImperativeHandle:Uf,useInsertionEffect:Ff,useLayoutEffect:Mf,useMemo:Wf,useReducer:Za,useRef:_f,useState:function(){return Za(ni)},useDebugValue:tu,useDeferredValue:function(e){var n=Wt();return tt===null?n.memoizedState=e:Vf(n,tt.memoizedState,e)},useTransition:function(){var e=Za(ni)[0],n=Wt().memoizedState;return[e,n]},useMutableSource:Tf,useSyncExternalStore:jf,useId:Qf,unstable_isNewReconciler:!1};function Jt(e,n){if(e&&e.defaultProps){n=X({},n),e=e.defaultProps;for(var o in e)n[o]===void 0&&(n[o]=e[o]);return n}return n}function nu(e,n,o,s){n=e.memoizedState,o=o(s,n),o=o==null?n:X({},n,o),e.memoizedState=o,e.lanes===0&&(e.updateQueue.baseState=o)}var ml={isMounted:function(e){return(e=e._reactInternals)?dr(e)===e:!1},enqueueSetState:function(e,n,o){e=e._reactInternals;var s=kt(),u=Jn(e),d=Tn(s,u);d.payload=n,o!=null&&(d.callback=o),n=Gn(e,d,u),n!==null&&(tn(n,e,u,s),sl(n,e,u))},enqueueReplaceState:function(e,n,o){e=e._reactInternals;var s=kt(),u=Jn(e),d=Tn(s,u);d.tag=1,d.payload=n,o!=null&&(d.callback=o),n=Gn(e,d,u),n!==null&&(tn(n,e,u,s),sl(n,e,u))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var o=kt(),s=Jn(e),u=Tn(o,s);u.tag=2,n!=null&&(u.callback=n),n=Gn(e,u,s),n!==null&&(tn(n,e,s,o),sl(n,e,s))}};function Yf(e,n,o,s,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,d,y):n.prototype&&n.prototype.isPureReactComponent?!Ho(o,s)||!Ho(u,d):!0}function Xf(e,n,o){var s=!1,u=Vn,d=n.contextType;return typeof d=="object"&&d!==null?d=Ht(d):(u=bt(n)?pr:pt.current,s=n.contextTypes,d=(s=s!=null)?Gr(e,u):Vn),n=new n(o,d),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ml,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=d),n}function Jf(e,n,o,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,s),n.state!==e&&ml.enqueueReplaceState(n,n.state,null)}function ru(e,n,o,s){var u=e.stateNode;u.props=o,u.state=e.memoizedState,u.refs={},Ha(e);var d=n.contextType;typeof d=="object"&&d!==null?u.context=Ht(d):(d=bt(n)?pr:pt.current,u.context=Gr(e,d)),u.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(nu(e,n,d,o),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&ml.enqueueReplaceState(u,u.state,null),al(e,o,u,s),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function no(e,n){try{var o="",s=n;do o+=ie(s),s=s.return;while(s);var u=o}catch(d){u=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:n,stack:u,digest:null}}function ou(e,n,o){return{value:e,source:null,stack:o??null,digest:n??null}}function iu(e,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var _0=typeof WeakMap=="function"?WeakMap:Map;function Zf(e,n,o){o=Tn(-1,o),o.tag=3,o.payload={element:null};var s=n.value;return o.callback=function(){Sl||(Sl=!0,vu=s),iu(e,n)},o}function ep(e,n,o){o=Tn(-1,o),o.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var u=n.value;o.payload=function(){return s(u)},o.callback=function(){iu(e,n)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(o.callback=function(){iu(e,n),typeof s!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})}),o}function tp(e,n,o){var s=e.pingCache;if(s===null){s=e.pingCache=new _0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(o)||(u.add(o),e=X0.bind(null,e,n,o),n.then(e,e))}function np(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function rp(e,n,o,s,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===n?e.flags|=65536:(e.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=Tn(-1,1),n.tag=2,Gn(o,n,1))),o.lanes|=1),e)}var z0=U.ReactCurrentOwner,Ct=!1;function vt(e,n,o,s){n.child=e===null?Ef(n,null,o,s):Jr(n,e.child,o,s)}function op(e,n,o,s,u){o=o.render;var d=n.ref;return eo(n,u),s=Ya(e,n,o,s,d,u),o=Xa(),e!==null&&!Ct?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,jn(e,n,u)):(Ue&&o&&Ia(n),n.flags|=1,vt(e,n,s,u),n.child)}function ip(e,n,o,s,u){if(e===null){var d=o.type;return typeof d=="function"&&!$u(d)&&d.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=d,lp(e,n,d,s,u)):(e=Rl(o.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!(e.lanes&u)){var y=d.memoizedProps;if(o=o.compare,o=o!==null?o:Ho,o(y,s)&&e.ref===n.ref)return jn(e,n,u)}return n.flags|=1,e=er(d,s),e.ref=n.ref,e.return=n,n.child=e}function lp(e,n,o,s,u){if(e!==null){var d=e.memoizedProps;if(Ho(d,s)&&e.ref===n.ref)if(Ct=!1,n.pendingProps=s=d,(e.lanes&u)!==0)e.flags&131072&&(Ct=!0);else return n.lanes=e.lanes,jn(e,n,u)}return lu(e,n,o,s,u)}function sp(e,n,o){var s=n.pendingProps,u=s.children,d=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(oo,Ot),Ot|=o;else{if(!(o&1073741824))return e=d!==null?d.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ze(oo,Ot),Ot|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=d!==null?d.baseLanes:o,ze(oo,Ot),Ot|=s}else d!==null?(s=d.baseLanes|o,n.memoizedState=null):s=o,ze(oo,Ot),Ot|=s;return vt(e,n,u,o),n.child}function ap(e,n){var o=n.ref;(e===null&&o!==null||e!==null&&e.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function lu(e,n,o,s,u){var d=bt(o)?pr:pt.current;return d=Gr(n,d),eo(n,u),o=Ya(e,n,o,s,d,u),s=Xa(),e!==null&&!Ct?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~u,jn(e,n,u)):(Ue&&s&&Ia(n),n.flags|=1,vt(e,n,o,u),n.child)}function up(e,n,o,s,u){if(bt(o)){var d=!0;Zi(n)}else d=!1;if(eo(n,u),n.stateNode===null)yl(e,n),Xf(n,o,s),ru(n,o,s,u),s=!0;else if(e===null){var y=n.stateNode,E=n.memoizedProps;y.props=E;var T=y.context,L=o.contextType;typeof L=="object"&&L!==null?L=Ht(L):(L=bt(o)?pr:pt.current,L=Gr(n,L));var W=o.getDerivedStateFromProps,K=typeof W=="function"||typeof y.getSnapshotBeforeUpdate=="function";K||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==s||T!==L)&&Jf(n,y,s,L),Kn=!1;var H=n.memoizedState;y.state=H,al(n,s,y,u),T=n.memoizedState,E!==s||H!==T||Et.current||Kn?(typeof W=="function"&&(nu(n,o,W,s),T=n.memoizedState),(E=Kn||Yf(n,o,E,s,H,T,L))?(K||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(n.flags|=4194308)):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=T),y.props=s,y.state=T,y.context=L,s=E):(typeof y.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{y=n.stateNode,Cf(e,n),E=n.memoizedProps,L=n.type===n.elementType?E:Jt(n.type,E),y.props=L,K=n.pendingProps,H=y.context,T=o.contextType,typeof T=="object"&&T!==null?T=Ht(T):(T=bt(o)?pr:pt.current,T=Gr(n,T));var te=o.getDerivedStateFromProps;(W=typeof te=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==K||H!==T)&&Jf(n,y,s,T),Kn=!1,H=n.memoizedState,y.state=H,al(n,s,y,u);var le=n.memoizedState;E!==K||H!==le||Et.current||Kn?(typeof te=="function"&&(nu(n,o,te,s),le=n.memoizedState),(L=Kn||Yf(n,o,L,s,H,le,T)||!1)?(W||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(s,le,T),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(s,le,T)),typeof y.componentDidUpdate=="function"&&(n.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof y.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=le),y.props=s,y.state=le,y.context=T,s=L):(typeof y.componentDidUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(n.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&H===e.memoizedState||(n.flags|=1024),s=!1)}return su(e,n,o,s,d,u)}function su(e,n,o,s,u,d){ap(e,n);var y=(n.flags&128)!==0;if(!s&&!y)return u&&hf(n,o,!1),jn(e,n,d);s=n.stateNode,z0.current=n;var E=y&&typeof o.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&y?(n.child=Jr(n,e.child,null,d),n.child=Jr(n,null,E,d)):vt(e,n,E,d),n.memoizedState=s.state,u&&hf(n,o,!0),n.child}function cp(e){var n=e.stateNode;n.pendingContext?ff(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ff(e,n.context,!1),Wa(e,n.containerInfo)}function dp(e,n,o,s,u){return Xr(),_a(u),n.flags|=256,vt(e,n,o,s),n.child}var au={dehydrated:null,treeContext:null,retryLane:0};function uu(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,n,o){var s=n.pendingProps,u=He.current,d=!1,y=(n.flags&128)!==0,E;if((E=y)||(E=e!==null&&e.memoizedState===null?!1:(u&2)!==0),E?(d=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),ze(He,u&1),e===null)return Oa(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(y=s.children,e=s.fallback,d?(s=n.mode,d=n.child,y={mode:"hidden",children:y},!(s&1)&&d!==null?(d.childLanes=0,d.pendingProps=y):d=Tl(y,s,0,null),e=Er(e,s,o,null),d.return=n,e.return=n,d.sibling=e,n.child=d,n.child.memoizedState=uu(o),n.memoizedState=au,e):cu(n,y));if(u=e.memoizedState,u!==null&&(E=u.dehydrated,E!==null))return F0(e,n,y,s,E,u,o);if(d){d=s.fallback,y=n.mode,u=e.child,E=u.sibling;var T={mode:"hidden",children:s.children};return!(y&1)&&n.child!==u?(s=n.child,s.childLanes=0,s.pendingProps=T,n.deletions=null):(s=er(u,T),s.subtreeFlags=u.subtreeFlags&14680064),E!==null?d=er(E,d):(d=Er(d,y,o,null),d.flags|=2),d.return=n,s.return=n,s.sibling=d,n.child=s,s=d,d=n.child,y=e.child.memoizedState,y=y===null?uu(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},d.memoizedState=y,d.childLanes=e.childLanes&~o,n.memoizedState=au,s}return d=e.child,e=d.sibling,s=er(d,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=o),s.return=n,s.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=s,n.memoizedState=null,s}function cu(e,n){return n=Tl({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function gl(e,n,o,s){return s!==null&&_a(s),Jr(n,e.child,null,o),e=cu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function F0(e,n,o,s,u,d,y){if(o)return n.flags&256?(n.flags&=-257,s=ou(Error(i(422))),gl(e,n,y,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(d=s.fallback,u=n.mode,s=Tl({mode:"visible",children:s.children},u,0,null),d=Er(d,u,y,null),d.flags|=2,s.return=n,d.return=n,s.sibling=d,n.child=s,n.mode&1&&Jr(n,e.child,null,y),n.child.memoizedState=uu(y),n.memoizedState=au,d);if(!(n.mode&1))return gl(e,n,y,null);if(u.data==="$!"){if(s=u.nextSibling&&u.nextSibling.dataset,s)var E=s.dgst;return s=E,d=Error(i(419)),s=ou(d,s,void 0),gl(e,n,y,s)}if(E=(y&e.childLanes)!==0,Ct||E){if(s=ot,s!==null){switch(y&-y){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(s.suspendedLanes|y)?0:u,u!==0&&u!==d.retryLane&&(d.retryLane=u,Rn(e,u),tn(s,e,u,-1))}return Au(),s=ou(Error(i(421))),gl(e,n,y,s)}return u.data==="$?"?(n.flags|=128,n.child=e.child,n=J0.bind(null,e),u._reactRetry=n,null):(e=d.treeContext,Lt=Hn(u.nextSibling),Dt=n,Ue=!0,Xt=null,e!==null&&(Bt[Ut++]=An,Bt[Ut++]=$n,Bt[Ut++]=hr,An=e.id,$n=e.overflow,hr=n),n=cu(n,s.children),n.flags|=4096,n)}function pp(e,n,o){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ba(e.return,n,o)}function du(e,n,o,s,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:o,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=s,d.tail=o,d.tailMode=u)}function hp(e,n,o){var s=n.pendingProps,u=s.revealOrder,d=s.tail;if(vt(e,n,s.children,o),s=He.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,o,n);else if(e.tag===19)pp(e,o,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(ze(He,s),!(n.mode&1))n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)e=o.alternate,e!==null&&ul(e)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),du(n,!1,u,o,d);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ul(e)===null){n.child=u;break}e=u.sibling,u.sibling=o,o=u,u=e}du(n,!0,o,null,d);break;case"together":du(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function yl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,o){if(e!==null&&(n.dependencies=e.dependencies),wr|=n.lanes,!(o&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(i(153));if(n.child!==null){for(e=n.child,o=er(e,e.pendingProps),n.child=o,o.return=n;e.sibling!==null;)e=e.sibling,o=o.sibling=er(e,e.pendingProps),o.return=n;o.sibling=null}return n.child}function M0(e,n,o){switch(n.tag){case 3:cp(n),Xr();break;case 5:Rf(n);break;case 1:bt(n.type)&&Zi(n);break;case 4:Wa(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,u=n.memoizedProps.value;ze(il,s._currentValue),s._currentValue=u;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(ze(He,He.current&1),n.flags|=128,null):o&n.child.childLanes?fp(e,n,o):(ze(He,He.current&1),e=jn(e,n,o),e!==null?e.sibling:null);ze(He,He.current&1);break;case 19:if(s=(o&n.childLanes)!==0,e.flags&128){if(s)return hp(e,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ze(He,He.current),s)break;return null;case 22:case 23:return n.lanes=0,sp(e,n,o)}return jn(e,n,o)}var mp,fu,gp,yp;mp=function(e,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},fu=function(){},gp=function(e,n,o,s){var u=e.memoizedProps;if(u!==s){e=n.stateNode,yr(dn.current);var d=null;switch(o){case"input":u=Ye(e,u),s=Ye(e,s),d=[];break;case"select":u=X({},u,{value:void 0}),s=X({},s,{value:void 0}),d=[];break;case"textarea":u=En(e,u),s=En(e,s),d=[];break;default:typeof u.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Yi)}Qs(o,s);var y;o=null;for(L in u)if(!s.hasOwnProperty(L)&&u.hasOwnProperty(L)&&u[L]!=null)if(L==="style"){var E=u[L];for(y in E)E.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else L!=="dangerouslySetInnerHTML"&&L!=="children"&&L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&L!=="autoFocus"&&(a.hasOwnProperty(L)?d||(d=[]):(d=d||[]).push(L,null));for(L in s){var T=s[L];if(E=u!=null?u[L]:void 0,s.hasOwnProperty(L)&&T!==E&&(T!=null||E!=null))if(L==="style")if(E){for(y in E)!E.hasOwnProperty(y)||T&&T.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in T)T.hasOwnProperty(y)&&E[y]!==T[y]&&(o||(o={}),o[y]=T[y])}else o||(d||(d=[]),d.push(L,o)),o=T;else L==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,E=E?E.__html:void 0,T!=null&&E!==T&&(d=d||[]).push(L,T)):L==="children"?typeof T!="string"&&typeof T!="number"||(d=d||[]).push(L,""+T):L!=="suppressContentEditableWarning"&&L!=="suppressHydrationWarning"&&(a.hasOwnProperty(L)?(T!=null&&L==="onScroll"&&Fe("scroll",e),d||E===T||(d=[])):(d=d||[]).push(L,T))}o&&(d=d||[]).push("style",o);var L=d;(n.updateQueue=L)&&(n.flags|=4)}},yp=function(e,n,o,s){o!==s&&(n.flags|=4)};function oi(e,n){if(!Ue)switch(e.tailMode){case"hidden":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?e.tail=null:o.sibling=null;break;case"collapsed":o=e.tail;for(var s=null;o!==null;)o.alternate!==null&&(s=o),o=o.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function mt(e){var n=e.alternate!==null&&e.alternate.child===e.child,o=0,s=0;if(n)for(var u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags&14680064,s|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)o|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=o,n}function B0(e,n,o){var s=n.pendingProps;switch(Da(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(n),null;case 1:return bt(n.type)&&Ji(),mt(n),null;case 3:return s=n.stateNode,to(),Me(Et),Me(pt),Ka(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(rl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Xt!==null&&(Eu(Xt),Xt=null))),fu(e,n),mt(n),null;case 5:Va(n);var u=yr(Zo.current);if(o=n.type,e!==null&&n.stateNode!=null)gp(e,n,o,s,u),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(i(166));return mt(n),null}if(e=yr(dn.current),rl(n)){s=n.stateNode,o=n.type;var d=n.memoizedProps;switch(s[cn]=n,s[Go]=d,e=(n.mode&1)!==0,o){case"dialog":Fe("cancel",s),Fe("close",s);break;case"iframe":case"object":case"embed":Fe("load",s);break;case"video":case"audio":for(u=0;u<Vo.length;u++)Fe(Vo[u],s);break;case"source":Fe("error",s);break;case"img":case"image":case"link":Fe("error",s),Fe("load",s);break;case"details":Fe("toggle",s);break;case"input":Ke(s,d),Fe("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!d.multiple},Fe("invalid",s);break;case"textarea":Co(s,d),Fe("invalid",s)}Qs(o,d),u=null;for(var y in d)if(d.hasOwnProperty(y)){var E=d[y];y==="children"?typeof E=="string"?s.textContent!==E&&(d.suppressHydrationWarning!==!0&&qi(s.textContent,E,e),u=["children",E]):typeof E=="number"&&s.textContent!==""+E&&(d.suppressHydrationWarning!==!0&&qi(s.textContent,E,e),u=["children",""+E]):a.hasOwnProperty(y)&&E!=null&&y==="onScroll"&&Fe("scroll",s)}switch(o){case"input":ke(s),sn(s,d,!0);break;case"textarea":ke(s),td(s);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(s.onclick=Yi)}s=u,n.updateQueue=s,s!==null&&(n.flags|=4)}else{y=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nd(o)),e==="http://www.w3.org/1999/xhtml"?o==="script"?(e=y.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=y.createElement(o,{is:s.is}):(e=y.createElement(o),o==="select"&&(y=e,s.multiple?y.multiple=!0:s.size&&(y.size=s.size))):e=y.createElementNS(e,o),e[cn]=n,e[Go]=s,mp(e,n,!1,!1),n.stateNode=e;e:{switch(y=Ks(o,s),o){case"dialog":Fe("cancel",e),Fe("close",e),u=s;break;case"iframe":case"object":case"embed":Fe("load",e),u=s;break;case"video":case"audio":for(u=0;u<Vo.length;u++)Fe(Vo[u],e);u=s;break;case"source":Fe("error",e),u=s;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),u=s;break;case"details":Fe("toggle",e),u=s;break;case"input":Ke(e,s),u=Ye(e,s),Fe("invalid",e);break;case"option":u=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},u=X({},s,{value:void 0}),Fe("invalid",e);break;case"textarea":Co(e,s),u=En(e,s),Fe("invalid",e);break;default:u=s}Qs(o,u),E=u;for(d in E)if(E.hasOwnProperty(d)){var T=E[d];d==="style"?id(e,T):d==="dangerouslySetInnerHTML"?(T=T?T.__html:void 0,T!=null&&rd(e,T)):d==="children"?typeof T=="string"?(o!=="textarea"||T!=="")&&Ao(e,T):typeof T=="number"&&Ao(e,""+T):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(a.hasOwnProperty(d)?T!=null&&d==="onScroll"&&Fe("scroll",e):T!=null&&D(e,d,T,y))}switch(o){case"input":ke(e),sn(e,s,!1);break;case"textarea":ke(e),td(e);break;case"option":s.value!=null&&e.setAttribute("value",""+ye(s.value));break;case"select":e.multiple=!!s.multiple,d=s.value,d!=null?an(e,!!s.multiple,d,!1):s.defaultValue!=null&&an(e,!!s.multiple,s.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=Yi)}switch(o){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return mt(n),null;case 6:if(e&&n.stateNode!=null)yp(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(i(166));if(o=yr(Zo.current),yr(dn.current),rl(n)){if(s=n.stateNode,o=n.memoizedProps,s[cn]=n,(d=s.nodeValue!==o)&&(e=Dt,e!==null))switch(e.tag){case 3:qi(s.nodeValue,o,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(s.nodeValue,o,(e.mode&1)!==0)}d&&(n.flags|=4)}else s=(o.nodeType===9?o:o.ownerDocument).createTextNode(s),s[cn]=n,n.stateNode=s}return mt(n),null;case 13:if(Me(He),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ue&&Lt!==null&&n.mode&1&&!(n.flags&128))vf(),Xr(),n.flags|=98560,d=!1;else if(d=rl(n),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=n.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[cn]=n}else Xr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;mt(n),d=!1}else Xt!==null&&(Eu(Xt),Xt=null),d=!0;if(!d)return n.flags&65536?n:null}return n.flags&128?(n.lanes=o,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||He.current&1?nt===0&&(nt=3):Au())),n.updateQueue!==null&&(n.flags|=4),mt(n),null);case 4:return to(),fu(e,n),e===null&&Qo(n.stateNode.containerInfo),mt(n),null;case 10:return Ma(n.type._context),mt(n),null;case 17:return bt(n.type)&&Ji(),mt(n),null;case 19:if(Me(He),d=n.memoizedState,d===null)return mt(n),null;if(s=(n.flags&128)!==0,y=d.rendering,y===null)if(s)oi(d,!1);else{if(nt!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(y=ul(e),y!==null){for(n.flags|=128,oi(d,!1),s=y.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=o,o=n.child;o!==null;)d=o,e=s,d.flags&=14680066,y=d.alternate,y===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=y.childLanes,d.lanes=y.lanes,d.child=y.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=y.memoizedProps,d.memoizedState=y.memoizedState,d.updateQueue=y.updateQueue,d.type=y.type,e=y.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),o=o.sibling;return ze(He,He.current&1|2),n.child}e=e.sibling}d.tail!==null&&Xe()>io&&(n.flags|=128,s=!0,oi(d,!1),n.lanes=4194304)}else{if(!s)if(e=ul(y),e!==null){if(n.flags|=128,s=!0,o=e.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),oi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!y.alternate&&!Ue)return mt(n),null}else 2*Xe()-d.renderingStartTime>io&&o!==1073741824&&(n.flags|=128,s=!0,oi(d,!1),n.lanes=4194304);d.isBackwards?(y.sibling=n.child,n.child=y):(o=d.last,o!==null?o.sibling=y:n.child=y,d.last=y)}return d.tail!==null?(n=d.tail,d.rendering=n,d.tail=n.sibling,d.renderingStartTime=Xe(),n.sibling=null,o=He.current,ze(He,s?o&1|2:o&1),n):(mt(n),null);case 22:case 23:return Cu(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?Ot&1073741824&&(mt(n),n.subtreeFlags&6&&(n.flags|=8192)):mt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function U0(e,n){switch(Da(n),n.tag){case 1:return bt(n.type)&&Ji(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return to(),Me(Et),Me(pt),Ka(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Va(n),null;case 13:if(Me(He),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Xr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Me(He),null;case 4:return to(),null;case 10:return Ma(n.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var xl=!1,gt=!1,H0=typeof WeakSet=="function"?WeakSet:Set,oe=null;function ro(e,n){var o=e.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(s){Ge(e,n,s)}else o.current=null}function pu(e,n,o){try{o()}catch(s){Ge(e,n,s)}}var xp=!1;function W0(e,n){if(Ca=zi,e=qd(),ya(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else e:{o=(o=e.ownerDocument)&&o.defaultView||window;var s=o.getSelection&&o.getSelection();if(s&&s.rangeCount!==0){o=s.anchorNode;var u=s.anchorOffset,d=s.focusNode;s=s.focusOffset;try{o.nodeType,d.nodeType}catch{o=null;break e}var y=0,E=-1,T=-1,L=0,W=0,K=e,H=null;t:for(;;){for(var te;K!==o||u!==0&&K.nodeType!==3||(E=y+u),K!==d||s!==0&&K.nodeType!==3||(T=y+s),K.nodeType===3&&(y+=K.nodeValue.length),(te=K.firstChild)!==null;)H=K,K=te;for(;;){if(K===e)break t;if(H===o&&++L===u&&(E=y),H===d&&++W===s&&(T=y),(te=K.nextSibling)!==null)break;K=H,H=K.parentNode}K=te}o=E===-1||T===-1?null:{start:E,end:T}}else o=null}o=o||{start:0,end:0}}else o=null;for(Aa={focusedElem:e,selectionRange:o},zi=!1,oe=n;oe!==null;)if(n=oe,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,oe=e;else for(;oe!==null;){n=oe;try{var le=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(le!==null){var se=le.memoizedProps,Je=le.memoizedState,N=n.stateNode,j=N.getSnapshotBeforeUpdate(n.elementType===n.type?se:Jt(n.type,se),Je);N.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var I=n.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(Y){Ge(n,n.return,Y)}if(e=n.sibling,e!==null){e.return=n.return,oe=e;break}oe=n.return}return le=xp,xp=!1,le}function ii(e,n,o){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var u=s=s.next;do{if((u.tag&e)===e){var d=u.destroy;u.destroy=void 0,d!==void 0&&pu(n,o,d)}u=u.next}while(u!==s)}}function wl(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var s=o.create;o.destroy=s()}o=o.next}while(o!==n)}}function hu(e){var n=e.ref;if(n!==null){var o=e.stateNode;switch(e.tag){case 5:e=o;break;default:e=o}typeof n=="function"?n(e):n.current=e}}function wp(e){var n=e.alternate;n!==null&&(e.alternate=null,wp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[cn],delete n[Go],delete n[ja],delete n[A0],delete n[$0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function kp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(e,n):o.insertBefore(e,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(e,o)):(n=o,n.appendChild(e)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Yi));else if(s!==4&&(e=e.child,e!==null))for(mu(e,n,o),e=e.sibling;e!==null;)mu(e,n,o),e=e.sibling}function gu(e,n,o){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?o.insertBefore(e,n):o.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(gu(e,n,o),e=e.sibling;e!==null;)gu(e,n,o),e=e.sibling}var at=null,Zt=!1;function qn(e,n,o){for(o=o.child;o!==null;)Sp(e,n,o),o=o.sibling}function Sp(e,n,o){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Ni,o)}catch{}switch(o.tag){case 5:gt||ro(o,n);case 6:var s=at,u=Zt;at=null,qn(e,n,o),at=s,Zt=u,at!==null&&(Zt?(e=at,o=o.stateNode,e.nodeType===8?e.parentNode.removeChild(o):e.removeChild(o)):at.removeChild(o.stateNode));break;case 18:at!==null&&(Zt?(e=at,o=o.stateNode,e.nodeType===8?Ta(e.parentNode,o):e.nodeType===1&&Ta(e,o),_o(e)):Ta(at,o.stateNode));break;case 4:s=at,u=Zt,at=o.stateNode.containerInfo,Zt=!0,qn(e,n,o),at=s,Zt=u;break;case 0:case 11:case 14:case 15:if(!gt&&(s=o.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){u=s=s.next;do{var d=u,y=d.destroy;d=d.tag,y!==void 0&&(d&2||d&4)&&pu(o,n,y),u=u.next}while(u!==s)}qn(e,n,o);break;case 1:if(!gt&&(ro(o,n),s=o.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=o.memoizedProps,s.state=o.memoizedState,s.componentWillUnmount()}catch(E){Ge(o,n,E)}qn(e,n,o);break;case 21:qn(e,n,o);break;case 22:o.mode&1?(gt=(s=gt)||o.memoizedState!==null,qn(e,n,o),gt=s):qn(e,n,o);break;default:qn(e,n,o)}}function Ep(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var o=e.stateNode;o===null&&(o=e.stateNode=new H0),n.forEach(function(s){var u=Z0.bind(null,e,s);o.has(s)||(o.add(s),s.then(u,u))})}}function en(e,n){var o=n.deletions;if(o!==null)for(var s=0;s<o.length;s++){var u=o[s];try{var d=e,y=n,E=y;e:for(;E!==null;){switch(E.tag){case 5:at=E.stateNode,Zt=!1;break e;case 3:at=E.stateNode.containerInfo,Zt=!0;break e;case 4:at=E.stateNode.containerInfo,Zt=!0;break e}E=E.return}if(at===null)throw Error(i(160));Sp(d,y,u),at=null,Zt=!1;var T=u.alternate;T!==null&&(T.return=null),u.return=null}catch(L){Ge(u,n,L)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)bp(n,e),n=n.sibling}function bp(e,n){var o=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(en(n,e),pn(e),s&4){try{ii(3,e,e.return),wl(3,e)}catch(se){Ge(e,e.return,se)}try{ii(5,e,e.return)}catch(se){Ge(e,e.return,se)}}break;case 1:en(n,e),pn(e),s&512&&o!==null&&ro(o,o.return);break;case 5:if(en(n,e),pn(e),s&512&&o!==null&&ro(o,o.return),e.flags&32){var u=e.stateNode;try{Ao(u,"")}catch(se){Ge(e,e.return,se)}}if(s&4&&(u=e.stateNode,u!=null)){var d=e.memoizedProps,y=o!==null?o.memoizedProps:d,E=e.type,T=e.updateQueue;if(e.updateQueue=null,T!==null)try{E==="input"&&d.type==="radio"&&d.name!=null&&wt(u,d),Ks(E,y);var L=Ks(E,d);for(y=0;y<T.length;y+=2){var W=T[y],K=T[y+1];W==="style"?id(u,K):W==="dangerouslySetInnerHTML"?rd(u,K):W==="children"?Ao(u,K):D(u,W,K,L)}switch(E){case"input":Nt(u,d);break;case"textarea":Ws(u,d);break;case"select":var H=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!d.multiple;var te=d.value;te!=null?an(u,!!d.multiple,te,!1):H!==!!d.multiple&&(d.defaultValue!=null?an(u,!!d.multiple,d.defaultValue,!0):an(u,!!d.multiple,d.multiple?[]:"",!1))}u[Go]=d}catch(se){Ge(e,e.return,se)}}break;case 6:if(en(n,e),pn(e),s&4){if(e.stateNode===null)throw Error(i(162));u=e.stateNode,d=e.memoizedProps;try{u.nodeValue=d}catch(se){Ge(e,e.return,se)}}break;case 3:if(en(n,e),pn(e),s&4&&o!==null&&o.memoizedState.isDehydrated)try{_o(n.containerInfo)}catch(se){Ge(e,e.return,se)}break;case 4:en(n,e),pn(e);break;case 13:en(n,e),pn(e),u=e.child,u.flags&8192&&(d=u.memoizedState!==null,u.stateNode.isHidden=d,!d||u.alternate!==null&&u.alternate.memoizedState!==null||(wu=Xe())),s&4&&Ep(e);break;case 22:if(W=o!==null&&o.memoizedState!==null,e.mode&1?(gt=(L=gt)||W,en(n,e),gt=L):en(n,e),pn(e),s&8192){if(L=e.memoizedState!==null,(e.stateNode.isHidden=L)&&!W&&e.mode&1)for(oe=e,W=e.child;W!==null;){for(K=oe=W;oe!==null;){switch(H=oe,te=H.child,H.tag){case 0:case 11:case 14:case 15:ii(4,H,H.return);break;case 1:ro(H,H.return);var le=H.stateNode;if(typeof le.componentWillUnmount=="function"){s=H,o=H.return;try{n=s,le.props=n.memoizedProps,le.state=n.memoizedState,le.componentWillUnmount()}catch(se){Ge(s,o,se)}}break;case 5:ro(H,H.return);break;case 22:if(H.memoizedState!==null){$p(K);continue}}te!==null?(te.return=H,oe=te):$p(K)}W=W.sibling}e:for(W=null,K=e;;){if(K.tag===5){if(W===null){W=K;try{u=K.stateNode,L?(d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(E=K.stateNode,T=K.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null,E.style.display=od("display",y))}catch(se){Ge(e,e.return,se)}}}else if(K.tag===6){if(W===null)try{K.stateNode.nodeValue=L?"":K.memoizedProps}catch(se){Ge(e,e.return,se)}}else if((K.tag!==22&&K.tag!==23||K.memoizedState===null||K===e)&&K.child!==null){K.child.return=K,K=K.child;continue}if(K===e)break e;for(;K.sibling===null;){if(K.return===null||K.return===e)break e;W===K&&(W=null),K=K.return}W===K&&(W=null),K.sibling.return=K.return,K=K.sibling}}break;case 19:en(n,e),pn(e),s&4&&Ep(e);break;case 21:break;default:en(n,e),pn(e)}}function pn(e){var n=e.flags;if(n&2){try{e:{for(var o=e.return;o!==null;){if(vp(o)){var s=o;break e}o=o.return}throw Error(i(160))}switch(s.tag){case 5:var u=s.stateNode;s.flags&32&&(Ao(u,""),s.flags&=-33);var d=kp(e);gu(e,d,u);break;case 3:case 4:var y=s.stateNode.containerInfo,E=kp(e);mu(e,E,y);break;default:throw Error(i(161))}}catch(T){Ge(e,e.return,T)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function V0(e,n,o){oe=e,Cp(e)}function Cp(e,n,o){for(var s=(e.mode&1)!==0;oe!==null;){var u=oe,d=u.child;if(u.tag===22&&s){var y=u.memoizedState!==null||xl;if(!y){var E=u.alternate,T=E!==null&&E.memoizedState!==null||gt;E=xl;var L=gt;if(xl=y,(gt=T)&&!L)for(oe=u;oe!==null;)y=oe,T=y.child,y.tag===22&&y.memoizedState!==null?Rp(u):T!==null?(T.return=y,oe=T):Rp(u);for(;d!==null;)oe=d,Cp(d),d=d.sibling;oe=u,xl=E,gt=L}Ap(e)}else u.subtreeFlags&8772&&d!==null?(d.return=u,oe=d):Ap(e)}}function Ap(e){for(;oe!==null;){var n=oe;if(n.flags&8772){var o=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:gt||wl(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!gt)if(o===null)s.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Jt(n.type,o.memoizedProps);s.componentDidUpdate(u,o.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var d=n.updateQueue;d!==null&&$f(n,d,s);break;case 3:var y=n.updateQueue;if(y!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}$f(n,y,o)}break;case 5:var E=n.stateNode;if(o===null&&n.flags&4){o=E;var T=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":T.autoFocus&&o.focus();break;case"img":T.src&&(o.src=T.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var L=n.alternate;if(L!==null){var W=L.memoizedState;if(W!==null){var K=W.dehydrated;K!==null&&_o(K)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}gt||n.flags&512&&hu(n)}catch(H){Ge(n,n.return,H)}}if(n===e){oe=null;break}if(o=n.sibling,o!==null){o.return=n.return,oe=o;break}oe=n.return}}function $p(e){for(;oe!==null;){var n=oe;if(n===e){oe=null;break}var o=n.sibling;if(o!==null){o.return=n.return,oe=o;break}oe=n.return}}function Rp(e){for(;oe!==null;){var n=oe;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{wl(4,n)}catch(T){Ge(n,o,T)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var u=n.return;try{s.componentDidMount()}catch(T){Ge(n,u,T)}}var d=n.return;try{hu(n)}catch(T){Ge(n,d,T)}break;case 5:var y=n.return;try{hu(n)}catch(T){Ge(n,y,T)}}}catch(T){Ge(n,n.return,T)}if(n===e){oe=null;break}var E=n.sibling;if(E!==null){E.return=n.return,oe=E;break}oe=n.return}}var Q0=Math.ceil,vl=U.ReactCurrentDispatcher,yu=U.ReactCurrentOwner,Vt=U.ReactCurrentBatchConfig,Pe=0,ot=null,Ze=null,ut=0,Ot=0,oo=Wn(0),nt=0,li=null,wr=0,kl=0,xu=0,si=null,At=null,wu=0,io=1/0,Pn=null,Sl=!1,vu=null,Yn=null,El=!1,Xn=null,bl=0,ai=0,ku=null,Cl=-1,Al=0;function kt(){return Pe&6?Xe():Cl!==-1?Cl:Cl=Xe()}function Jn(e){return e.mode&1?Pe&2&&ut!==0?ut&-ut:T0.transition!==null?(Al===0&&(Al=vd()),Al):(e=Le,e!==0||(e=window.event,e=e===void 0?16:Td(e.type)),e):1}function tn(e,n,o,s){if(50<ai)throw ai=0,ku=null,Error(i(185));No(e,o,s),(!(Pe&2)||e!==ot)&&(e===ot&&(!(Pe&2)&&(kl|=o),nt===4&&Zn(e,ut)),$t(e,s),o===1&&Pe===0&&!(n.mode&1)&&(io=Xe()+500,el&&Qn()))}function $t(e,n){var o=e.callbackNode;Ty(e,n);var s=Li(e,e===ot?ut:0);if(s===0)o!==null&&yd(o),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(o!=null&&yd(o),n===1)e.tag===0?R0(jp.bind(null,e)):mf(jp.bind(null,e)),b0(function(){!(Pe&6)&&Qn()}),o=null;else{switch(kd(s)){case 1:o=ea;break;case 4:o=xd;break;case 16:o=Pi;break;case 536870912:o=wd;break;default:o=Pi}o=zp(o,Tp.bind(null,e))}e.callbackPriority=n,e.callbackNode=o}}function Tp(e,n){if(Cl=-1,Al=0,Pe&6)throw Error(i(327));var o=e.callbackNode;if(lo()&&e.callbackNode!==o)return null;var s=Li(e,e===ot?ut:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=$l(e,s);else{n=s;var u=Pe;Pe|=2;var d=Np();(ot!==e||ut!==n)&&(Pn=null,io=Xe()+500,kr(e,n));do try{q0();break}catch(E){Pp(e,E)}while(!0);Fa(),vl.current=d,Pe=u,Ze!==null?n=0:(ot=null,ut=0,n=nt)}if(n!==0){if(n===2&&(u=ta(e),u!==0&&(s=u,n=Su(e,u))),n===1)throw o=li,kr(e,0),Zn(e,s),$t(e,Xe()),o;if(n===6)Zn(e,s);else{if(u=e.current.alternate,!(s&30)&&!K0(u)&&(n=$l(e,s),n===2&&(d=ta(e),d!==0&&(s=d,n=Su(e,d))),n===1))throw o=li,kr(e,0),Zn(e,s),$t(e,Xe()),o;switch(e.finishedWork=u,e.finishedLanes=s,n){case 0:case 1:throw Error(i(345));case 2:Sr(e,At,Pn);break;case 3:if(Zn(e,s),(s&130023424)===s&&(n=wu+500-Xe(),10<n)){if(Li(e,0)!==0)break;if(u=e.suspendedLanes,(u&s)!==s){kt(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Ra(Sr.bind(null,e,At,Pn),n);break}Sr(e,At,Pn);break;case 4:if(Zn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,u=-1;0<s;){var y=31-qt(s);d=1<<y,y=n[y],y>u&&(u=y),s&=~d}if(s=u,s=Xe()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Q0(s/1960))-s,10<s){e.timeoutHandle=Ra(Sr.bind(null,e,At,Pn),s);break}Sr(e,At,Pn);break;case 5:Sr(e,At,Pn);break;default:throw Error(i(329))}}}return $t(e,Xe()),e.callbackNode===o?Tp.bind(null,e):null}function Su(e,n){var o=si;return e.current.memoizedState.isDehydrated&&(kr(e,n).flags|=256),e=$l(e,n),e!==2&&(n=At,At=o,n!==null&&Eu(n)),e}function Eu(e){At===null?At=e:At.push.apply(At,e)}function K0(e){for(var n=e;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var s=0;s<o.length;s++){var u=o[s],d=u.getSnapshot;u=u.value;try{if(!Yt(d(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~xu,n&=~kl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var o=31-qt(n),s=1<<o;e[o]=-1,n&=~s}}function jp(e){if(Pe&6)throw Error(i(327));lo();var n=Li(e,0);if(!(n&1))return $t(e,Xe()),null;var o=$l(e,n);if(e.tag!==0&&o===2){var s=ta(e);s!==0&&(n=s,o=Su(e,s))}if(o===1)throw o=li,kr(e,0),Zn(e,n),$t(e,Xe()),o;if(o===6)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,Sr(e,At,Pn),$t(e,Xe()),null}function bu(e,n){var o=Pe;Pe|=1;try{return e(n)}finally{Pe=o,Pe===0&&(io=Xe()+500,el&&Qn())}}function vr(e){Xn!==null&&Xn.tag===0&&!(Pe&6)&&lo();var n=Pe;Pe|=1;var o=Vt.transition,s=Le;try{if(Vt.transition=null,Le=1,e)return e()}finally{Le=s,Vt.transition=o,Pe=n,!(Pe&6)&&Qn()}}function Cu(){Ot=oo.current,Me(oo)}function kr(e,n){e.finishedWork=null,e.finishedLanes=0;var o=e.timeoutHandle;if(o!==-1&&(e.timeoutHandle=-1,E0(o)),Ze!==null)for(o=Ze.return;o!==null;){var s=o;switch(Da(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Ji();break;case 3:to(),Me(Et),Me(pt),Ka();break;case 5:Va(s);break;case 4:to();break;case 13:Me(He);break;case 19:Me(He);break;case 10:Ma(s.type._context);break;case 22:case 23:Cu()}o=o.return}if(ot=e,Ze=e=er(e.current,null),ut=Ot=n,nt=0,li=null,xu=kl=wr=0,At=si=null,gr!==null){for(n=0;n<gr.length;n++)if(o=gr[n],s=o.interleaved,s!==null){o.interleaved=null;var u=s.next,d=o.pending;if(d!==null){var y=d.next;d.next=u,s.next=y}o.pending=s}gr=null}return e}function Pp(e,n){do{var o=Ze;try{if(Fa(),cl.current=hl,dl){for(var s=We.memoizedState;s!==null;){var u=s.queue;u!==null&&(u.pending=null),s=s.next}dl=!1}if(xr=0,rt=tt=We=null,ei=!1,ti=0,yu.current=null,o===null||o.return===null){nt=1,li=n,Ze=null;break}e:{var d=e,y=o.return,E=o,T=n;if(n=ut,E.flags|=32768,T!==null&&typeof T=="object"&&typeof T.then=="function"){var L=T,W=E,K=W.tag;if(!(W.mode&1)&&(K===0||K===11||K===15)){var H=W.alternate;H?(W.updateQueue=H.updateQueue,W.memoizedState=H.memoizedState,W.lanes=H.lanes):(W.updateQueue=null,W.memoizedState=null)}var te=np(y);if(te!==null){te.flags&=-257,rp(te,y,E,d,n),te.mode&1&&tp(d,L,n),n=te,T=L;var le=n.updateQueue;if(le===null){var se=new Set;se.add(T),n.updateQueue=se}else le.add(T);break e}else{if(!(n&1)){tp(d,L,n),Au();break e}T=Error(i(426))}}else if(Ue&&E.mode&1){var Je=np(y);if(Je!==null){!(Je.flags&65536)&&(Je.flags|=256),rp(Je,y,E,d,n),_a(no(T,E));break e}}d=T=no(T,E),nt!==4&&(nt=2),si===null?si=[d]:si.push(d),d=y;do{switch(d.tag){case 3:d.flags|=65536,n&=-n,d.lanes|=n;var N=Zf(d,T,n);Af(d,N);break e;case 1:E=T;var j=d.type,I=d.stateNode;if(!(d.flags&128)&&(typeof j.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Yn===null||!Yn.has(I)))){d.flags|=65536,n&=-n,d.lanes|=n;var Y=ep(d,E,n);Af(d,Y);break e}}d=d.return}while(d!==null)}Dp(o)}catch(ue){n=ue,Ze===o&&o!==null&&(Ze=o=o.return);continue}break}while(!0)}function Np(){var e=vl.current;return vl.current=hl,e===null?hl:e}function Au(){(nt===0||nt===3||nt===2)&&(nt=4),ot===null||!(wr&268435455)&&!(kl&268435455)||Zn(ot,ut)}function $l(e,n){var o=Pe;Pe|=2;var s=Np();(ot!==e||ut!==n)&&(Pn=null,kr(e,n));do try{G0();break}catch(u){Pp(e,u)}while(!0);if(Fa(),Pe=o,vl.current=s,Ze!==null)throw Error(i(261));return ot=null,ut=0,nt}function G0(){for(;Ze!==null;)Ip(Ze)}function q0(){for(;Ze!==null&&!vy();)Ip(Ze)}function Ip(e){var n=_p(e.alternate,e,Ot);e.memoizedProps=e.pendingProps,n===null?Dp(e):Ze=n,yu.current=null}function Dp(e){var n=e;do{var o=n.alternate;if(e=n.return,n.flags&32768){if(o=U0(o,n),o!==null){o.flags&=32767,Ze=o;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{nt=6,Ze=null;return}}else if(o=B0(o,n,Ot),o!==null){Ze=o;return}if(n=n.sibling,n!==null){Ze=n;return}Ze=n=e}while(n!==null);nt===0&&(nt=5)}function Sr(e,n,o){var s=Le,u=Vt.transition;try{Vt.transition=null,Le=1,Y0(e,n,o,s)}finally{Vt.transition=u,Le=s}return null}function Y0(e,n,o,s){do lo();while(Xn!==null);if(Pe&6)throw Error(i(327));o=e.finishedWork;var u=e.finishedLanes;if(o===null)return null;if(e.finishedWork=null,e.finishedLanes=0,o===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var d=o.lanes|o.childLanes;if(jy(e,d),e===ot&&(Ze=ot=null,ut=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||El||(El=!0,zp(Pi,function(){return lo(),null})),d=(o.flags&15990)!==0,o.subtreeFlags&15990||d){d=Vt.transition,Vt.transition=null;var y=Le;Le=1;var E=Pe;Pe|=4,yu.current=null,W0(e,o),bp(o,e),g0(Aa),zi=!!Ca,Aa=Ca=null,e.current=o,V0(o),ky(),Pe=E,Le=y,Vt.transition=d}else e.current=o;if(El&&(El=!1,Xn=e,bl=u),d=e.pendingLanes,d===0&&(Yn=null),by(o.stateNode),$t(e,Xe()),n!==null)for(s=e.onRecoverableError,o=0;o<n.length;o++)u=n[o],s(u.value,{componentStack:u.stack,digest:u.digest});if(Sl)throw Sl=!1,e=vu,vu=null,e;return bl&1&&e.tag!==0&&lo(),d=e.pendingLanes,d&1?e===ku?ai++:(ai=0,ku=e):ai=0,Qn(),null}function lo(){if(Xn!==null){var e=kd(bl),n=Vt.transition,o=Le;try{if(Vt.transition=null,Le=16>e?16:e,Xn===null)var s=!1;else{if(e=Xn,Xn=null,bl=0,Pe&6)throw Error(i(331));var u=Pe;for(Pe|=4,oe=e.current;oe!==null;){var d=oe,y=d.child;if(oe.flags&16){var E=d.deletions;if(E!==null){for(var T=0;T<E.length;T++){var L=E[T];for(oe=L;oe!==null;){var W=oe;switch(W.tag){case 0:case 11:case 15:ii(8,W,d)}var K=W.child;if(K!==null)K.return=W,oe=K;else for(;oe!==null;){W=oe;var H=W.sibling,te=W.return;if(wp(W),W===L){oe=null;break}if(H!==null){H.return=te,oe=H;break}oe=te}}}var le=d.alternate;if(le!==null){var se=le.child;if(se!==null){le.child=null;do{var Je=se.sibling;se.sibling=null,se=Je}while(se!==null)}}oe=d}}if(d.subtreeFlags&2064&&y!==null)y.return=d,oe=y;else e:for(;oe!==null;){if(d=oe,d.flags&2048)switch(d.tag){case 0:case 11:case 15:ii(9,d,d.return)}var N=d.sibling;if(N!==null){N.return=d.return,oe=N;break e}oe=d.return}}var j=e.current;for(oe=j;oe!==null;){y=oe;var I=y.child;if(y.subtreeFlags&2064&&I!==null)I.return=y,oe=I;else e:for(y=j;oe!==null;){if(E=oe,E.flags&2048)try{switch(E.tag){case 0:case 11:case 15:wl(9,E)}}catch(ue){Ge(E,E.return,ue)}if(E===y){oe=null;break e}var Y=E.sibling;if(Y!==null){Y.return=E.return,oe=Y;break e}oe=E.return}}if(Pe=u,Qn(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Ni,e)}catch{}s=!0}return s}finally{Le=o,Vt.transition=n}}return!1}function Lp(e,n,o){n=no(o,n),n=Zf(e,n,1),e=Gn(e,n,1),n=kt(),e!==null&&(No(e,1,n),$t(e,n))}function Ge(e,n,o){if(e.tag===3)Lp(e,e,o);else for(;n!==null;){if(n.tag===3){Lp(n,e,o);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Yn===null||!Yn.has(s))){e=no(o,e),e=ep(n,e,1),n=Gn(n,e,1),e=kt(),n!==null&&(No(n,1,e),$t(n,e));break}}n=n.return}}function X0(e,n,o){var s=e.pingCache;s!==null&&s.delete(n),n=kt(),e.pingedLanes|=e.suspendedLanes&o,ot===e&&(ut&o)===o&&(nt===4||nt===3&&(ut&130023424)===ut&&500>Xe()-wu?kr(e,0):xu|=o),$t(e,n)}function Op(e,n){n===0&&(e.mode&1?(n=Di,Di<<=1,!(Di&130023424)&&(Di=4194304)):n=1);var o=kt();e=Rn(e,n),e!==null&&(No(e,n,o),$t(e,o))}function J0(e){var n=e.memoizedState,o=0;n!==null&&(o=n.retryLane),Op(e,o)}function Z0(e,n){var o=0;switch(e.tag){case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(o=u.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(i(314))}s!==null&&s.delete(n),Op(e,o)}var _p;_p=function(e,n,o){if(e!==null)if(e.memoizedProps!==n.pendingProps||Et.current)Ct=!0;else{if(!(e.lanes&o)&&!(n.flags&128))return Ct=!1,M0(e,n,o);Ct=!!(e.flags&131072)}else Ct=!1,Ue&&n.flags&1048576&&gf(n,nl,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;yl(e,n),e=n.pendingProps;var u=Gr(n,pt.current);eo(n,o),u=Ya(null,n,s,e,u,o);var d=Xa();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,bt(s)?(d=!0,Zi(n)):d=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Ha(n),u.updater=ml,n.stateNode=u,u._reactInternals=n,ru(n,s,e,o),n=su(null,n,s,!0,d,o)):(n.tag=0,Ue&&d&&Ia(n),vt(null,n,u,o),n=n.child),n;case 16:s=n.elementType;e:{switch(yl(e,n),e=n.pendingProps,u=s._init,s=u(s._payload),n.type=s,u=n.tag=tx(s),e=Jt(s,e),u){case 0:n=lu(null,n,s,e,o);break e;case 1:n=up(null,n,s,e,o);break e;case 11:n=op(null,n,s,e,o);break e;case 14:n=ip(null,n,s,Jt(s.type,e),o);break e}throw Error(i(306,s,""))}return n;case 0:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Jt(s,u),lu(e,n,s,u,o);case 1:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Jt(s,u),up(e,n,s,u,o);case 3:e:{if(cp(n),e===null)throw Error(i(387));s=n.pendingProps,d=n.memoizedState,u=d.element,Cf(e,n),al(n,s,null,o);var y=n.memoizedState;if(s=y.element,d.isDehydrated)if(d={element:s,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){u=no(Error(i(423)),n),n=dp(e,n,s,o,u);break e}else if(s!==u){u=no(Error(i(424)),n),n=dp(e,n,s,o,u);break e}else for(Lt=Hn(n.stateNode.containerInfo.firstChild),Dt=n,Ue=!0,Xt=null,o=Ef(n,null,s,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Xr(),s===u){n=jn(e,n,o);break e}vt(e,n,s,o)}n=n.child}return n;case 5:return Rf(n),e===null&&Oa(n),s=n.type,u=n.pendingProps,d=e!==null?e.memoizedProps:null,y=u.children,$a(s,u)?y=null:d!==null&&$a(s,d)&&(n.flags|=32),ap(e,n),vt(e,n,y,o),n.child;case 6:return e===null&&Oa(n),null;case 13:return fp(e,n,o);case 4:return Wa(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Jr(n,null,s,o):vt(e,n,s,o),n.child;case 11:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Jt(s,u),op(e,n,s,u,o);case 7:return vt(e,n,n.pendingProps,o),n.child;case 8:return vt(e,n,n.pendingProps.children,o),n.child;case 12:return vt(e,n,n.pendingProps.children,o),n.child;case 10:e:{if(s=n.type._context,u=n.pendingProps,d=n.memoizedProps,y=u.value,ze(il,s._currentValue),s._currentValue=y,d!==null)if(Yt(d.value,y)){if(d.children===u.children&&!Et.current){n=jn(e,n,o);break e}}else for(d=n.child,d!==null&&(d.return=n);d!==null;){var E=d.dependencies;if(E!==null){y=d.child;for(var T=E.firstContext;T!==null;){if(T.context===s){if(d.tag===1){T=Tn(-1,o&-o),T.tag=2;var L=d.updateQueue;if(L!==null){L=L.shared;var W=L.pending;W===null?T.next=T:(T.next=W.next,W.next=T),L.pending=T}}d.lanes|=o,T=d.alternate,T!==null&&(T.lanes|=o),Ba(d.return,o,n),E.lanes|=o;break}T=T.next}}else if(d.tag===10)y=d.type===n.type?null:d.child;else if(d.tag===18){if(y=d.return,y===null)throw Error(i(341));y.lanes|=o,E=y.alternate,E!==null&&(E.lanes|=o),Ba(y,o,n),y=d.sibling}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===n){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}vt(e,n,u.children,o),n=n.child}return n;case 9:return u=n.type,s=n.pendingProps.children,eo(n,o),u=Ht(u),s=s(u),n.flags|=1,vt(e,n,s,o),n.child;case 14:return s=n.type,u=Jt(s,n.pendingProps),u=Jt(s.type,u),ip(e,n,s,u,o);case 15:return lp(e,n,n.type,n.pendingProps,o);case 17:return s=n.type,u=n.pendingProps,u=n.elementType===s?u:Jt(s,u),yl(e,n),n.tag=1,bt(s)?(e=!0,Zi(n)):e=!1,eo(n,o),Xf(n,s,u),ru(n,s,u,o),su(null,n,s,!0,e,o);case 19:return hp(e,n,o);case 22:return sp(e,n,o)}throw Error(i(156,n.tag))};function zp(e,n){return gd(e,n)}function ex(e,n,o,s){this.tag=e,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(e,n,o,s){return new ex(e,n,o,s)}function $u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function tx(e){if(typeof e=="function")return $u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===Ae)return 14}return 2}function er(e,n){var o=e.alternate;return o===null?(o=Qt(e.tag,n,e.key,e.mode),o.elementType=e.elementType,o.type=e.type,o.stateNode=e.stateNode,o.alternate=e,e.alternate=o):(o.pendingProps=n,o.type=e.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=e.flags&14680064,o.childLanes=e.childLanes,o.lanes=e.lanes,o.child=e.child,o.memoizedProps=e.memoizedProps,o.memoizedState=e.memoizedState,o.updateQueue=e.updateQueue,n=e.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=e.sibling,o.index=e.index,o.ref=e.ref,o}function Rl(e,n,o,s,u,d){var y=2;if(s=e,typeof e=="function")$u(e)&&(y=1);else if(typeof e=="string")y=5;else e:switch(e){case G:return Er(o.children,u,d,n);case pe:y=8,u|=8;break;case q:return e=Qt(12,o,n,u|2),e.elementType=q,e.lanes=d,e;case Re:return e=Qt(13,o,n,u),e.elementType=Re,e.lanes=d,e;case Ce:return e=Qt(19,o,n,u),e.elementType=Ce,e.lanes=d,e;case ce:return Tl(o,u,d,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fe:y=10;break e;case je:y=9;break e;case Ee:y=11;break e;case Ae:y=14;break e;case ge:y=16,s=null;break e}throw Error(i(130,e==null?e:typeof e,""))}return n=Qt(y,o,n,u),n.elementType=e,n.type=s,n.lanes=d,n}function Er(e,n,o,s){return e=Qt(7,e,s,n),e.lanes=o,e}function Tl(e,n,o,s){return e=Qt(22,e,s,n),e.elementType=ce,e.lanes=o,e.stateNode={isHidden:!1},e}function Ru(e,n,o){return e=Qt(6,e,null,n),e.lanes=o,e}function Tu(e,n,o){return n=Qt(4,e.children!==null?e.children:[],e.key,n),n.lanes=o,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function nx(e,n,o,s,u){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=na(0),this.expirationTimes=na(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=na(0),this.identifierPrefix=s,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function ju(e,n,o,s,u,d,y,E,T){return e=new nx(e,n,o,E,T),n===1?(n=1,d===!0&&(n|=8)):n=0,d=Qt(3,null,null,n),e.current=d,d.stateNode=e,d.memoizedState={element:s,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ha(d),e}function rx(e,n,o){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:s==null?null:""+s,children:e,containerInfo:n,implementation:o}}function Fp(e){if(!e)return Vn;e=e._reactInternals;e:{if(dr(e)!==e||e.tag!==1)throw Error(i(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(bt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(e.tag===1){var o=e.type;if(bt(o))return pf(e,o,n)}return n}function Mp(e,n,o,s,u,d,y,E,T){return e=ju(o,s,!0,e,u,d,y,E,T),e.context=Fp(null),o=e.current,s=kt(),u=Jn(o),d=Tn(s,u),d.callback=n??null,Gn(o,d,u),e.current.lanes=u,No(e,u,s),$t(e,s),e}function jl(e,n,o,s){var u=n.current,d=kt(),y=Jn(u);return o=Fp(o),n.context===null?n.context=o:n.pendingContext=o,n=Tn(d,y),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=Gn(u,n,y),e!==null&&(tn(e,u,y,d),sl(e,u,y)),y}function Pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var o=e.retryLane;e.retryLane=o!==0&&o<n?o:n}}function Pu(e,n){Bp(e,n),(e=e.alternate)&&Bp(e,n)}var Up=typeof reportError=="function"?reportError:function(e){console.error(e)};function Nu(e){this._internalRoot=e}Nl.prototype.render=Nu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(i(409));jl(e,n,null,null)},Nl.prototype.unmount=Nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vr(function(){jl(null,e,null,null)}),n[bn]=null}};function Nl(e){this._internalRoot=e}Nl.prototype.unstable_scheduleHydration=function(e){if(e){var n=bd();e={blockedOn:null,target:e,priority:n};for(var o=0;o<Mn.length&&n!==0&&n<Mn[o].priority;o++);Mn.splice(o,0,e),o===0&&$d(e)}};function Iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function ox(e,n,o,s,u){if(u){if(typeof s=="function"){var d=s;s=function(){var L=Pl(y);d.call(L)}}var y=Mp(n,s,e,0,null,!1,!1,"",Hp);return e._reactRootContainer=y,e[bn]=y.current,Qo(e.nodeType===8?e.parentNode:e),vr(),y}for(;u=e.lastChild;)e.removeChild(u);if(typeof s=="function"){var E=s;s=function(){var L=Pl(T);E.call(L)}}var T=ju(e,0,!1,null,null,!1,!1,"",Hp);return e._reactRootContainer=T,e[bn]=T.current,Qo(e.nodeType===8?e.parentNode:e),vr(function(){jl(n,T,o,s)}),T}function Dl(e,n,o,s,u){var d=o._reactRootContainer;if(d){var y=d;if(typeof u=="function"){var E=u;u=function(){var T=Pl(y);E.call(T)}}jl(n,y,e,u)}else y=ox(o,n,e,u,s);return Pl(y)}Sd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var o=Po(n.pendingLanes);o!==0&&(ra(n,o|1),$t(n,Xe()),!(Pe&6)&&(io=Xe()+500,Qn()))}break;case 13:vr(function(){var s=Rn(e,1);if(s!==null){var u=kt();tn(s,e,1,u)}}),Pu(e,1)}},oa=function(e){if(e.tag===13){var n=Rn(e,134217728);if(n!==null){var o=kt();tn(n,e,134217728,o)}Pu(e,134217728)}},Ed=function(e){if(e.tag===13){var n=Jn(e),o=Rn(e,n);if(o!==null){var s=kt();tn(o,e,n,s)}Pu(e,n)}},bd=function(){return Le},Cd=function(e,n){var o=Le;try{return Le=e,n()}finally{Le=o}},Ys=function(e,n,o){switch(n){case"input":if(Nt(e,o),n=o.name,o.type==="radio"&&n!=null){for(o=e;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var s=o[n];if(s!==e&&s.form===e.form){var u=Xi(s);if(!u)throw Error(i(90));Te(s),Nt(s,u)}}}break;case"textarea":Ws(e,o);break;case"select":n=o.value,n!=null&&an(e,!!o.multiple,n,!1)}},ud=bu,cd=vr;var ix={usingClientEntryPoint:!1,Events:[qo,Qr,Xi,sd,ad,bu]},ui={findFiberByHostInstance:fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lx={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hd(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ll.isDisabled&&Ll.supportsFiber)try{Ni=Ll.inject(lx),un=Ll}catch{}}return Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ix,Rt.createPortal=function(e,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(n))throw Error(i(200));return rx(e,n,null,o)},Rt.createRoot=function(e,n){if(!Iu(e))throw Error(i(299));var o=!1,s="",u=Up;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=ju(e,1,!1,null,null,o,!1,s,u),e[bn]=n.current,Qo(e.nodeType===8?e.parentNode:e),new Nu(n)},Rt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=hd(n),e=e===null?null:e.stateNode,e},Rt.flushSync=function(e){return vr(e)},Rt.hydrate=function(e,n,o){if(!Il(n))throw Error(i(200));return Dl(null,e,n,!0,o)},Rt.hydrateRoot=function(e,n,o){if(!Iu(e))throw Error(i(405));var s=o!=null&&o.hydratedSources||null,u=!1,d="",y=Up;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),n=Mp(n,null,e,1,o??null,u,!1,d,y),e[bn]=n.current,Qo(e),s)for(e=0;e<s.length;e++)o=s[e],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new Nl(n)},Rt.render=function(e,n,o){if(!Il(n))throw Error(i(200));return Dl(null,e,n,!1,o)},Rt.unmountComponentAtNode=function(e){if(!Il(e))throw Error(i(40));return e._reactRootContainer?(vr(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[bn]=null})}),!0):!1},Rt.unstable_batchedUpdates=bu,Rt.unstable_renderSubtreeIntoContainer=function(e,n,o,s){if(!Il(o))throw Error(i(200));if(e==null||e._reactInternals===void 0)throw Error(i(38));return Dl(e,n,o,!1,s)},Rt.version="18.3.1-next-f1338f8080-20240426",Rt}var Xp;function nm(){if(Xp)return Ou.exports;Xp=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),Ou.exports=mx(),Ou.exports}var Jp;function gx(){if(Jp)return Ol;Jp=1;var t=nm();return Ol.createRoot=t.createRoot,Ol.hydrateRoot=t.hydrateRoot,Ol}var yx=gx(),st=function(){return st=Object.assign||function(r){for(var i,l=1,a=arguments.length;l<a;l++){i=arguments[l];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(r[c]=i[c])}return r},st.apply(this,arguments)};function co(t,r,i){if(i||arguments.length===2)for(var l=0,a=r.length,c;l<a;l++)(c||!(l in r))&&(c||(c=Array.prototype.slice.call(r,0,l)),c[l]=r[l]);return t.concat(c||Array.prototype.slice.call(r))}var Be="-ms-",gi="-moz-",Ie="-webkit-",rm="comm",hs="rule",Cc="decl",xx="@import",om="@keyframes",wx="@layer",im=Math.abs,Ac=String.fromCharCode,tc=Object.assign;function vx(t,r){return lt(t,0)^45?(((r<<2^lt(t,0))<<2^lt(t,1))<<2^lt(t,2))<<2^lt(t,3):0}function lm(t){return t.trim()}function In(t,r){return(t=r.exec(t))?t[0]:t}function be(t,r,i){return t.replace(r,i)}function Vl(t,r,i){return t.indexOf(r,i)}function lt(t,r){return t.charCodeAt(r)|0}function fo(t,r,i){return t.slice(r,i)}function mn(t){return t.length}function sm(t){return t.length}function mi(t,r){return r.push(t),t}function kx(t,r){return t.map(r).join("")}function Zp(t,r){return t.filter(function(i){return!In(i,r)})}var ms=1,po=1,am=0,Gt=0,et=0,wo="";function gs(t,r,i,l,a,c,f,p){return{value:t,root:r,parent:i,type:l,props:a,children:c,line:ms,column:po,length:f,return:"",siblings:p}}function nr(t,r){return tc(gs("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},r)}function so(t){for(;t.root;)t=nr(t.root,{children:[t]});mi(t,t.siblings)}function Sx(){return et}function Ex(){return et=Gt>0?lt(wo,--Gt):0,po--,et===10&&(po=1,ms--),et}function nn(){return et=Gt<am?lt(wo,Gt++):0,po++,et===10&&(po=1,ms++),et}function Rr(){return lt(wo,Gt)}function Ql(){return Gt}function ys(t,r){return fo(wo,t,r)}function nc(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bx(t){return ms=po=1,am=mn(wo=t),Gt=0,[]}function Cx(t){return wo="",t}function Fu(t){return lm(ys(Gt-1,rc(t===91?t+2:t===40?t+1:t)))}function Ax(t){for(;(et=Rr())&&et<33;)nn();return nc(t)>2||nc(et)>3?"":" "}function $x(t,r){for(;--r&&nn()&&!(et<48||et>102||et>57&&et<65||et>70&&et<97););return ys(t,Ql()+(r<6&&Rr()==32&&nn()==32))}function rc(t){for(;nn();)switch(et){case t:return Gt;case 34:case 39:t!==34&&t!==39&&rc(et);break;case 40:t===41&&rc(t);break;case 92:nn();break}return Gt}function Rx(t,r){for(;nn()&&t+et!==57;)if(t+et===84&&Rr()===47)break;return"/*"+ys(r,Gt-1)+"*"+Ac(t===47?t:nn())}function Tx(t){for(;!nc(Rr());)nn();return ys(t,Gt)}function jx(t){return Cx(Kl("",null,null,null,[""],t=bx(t),0,[0],t))}function Kl(t,r,i,l,a,c,f,p,h){for(var m=0,v=0,x=f,S=0,R=0,k=0,$=1,b=1,A=1,C=0,D="",U=a,Q=c,V=l,G=D;b;)switch(k=C,C=nn()){case 40:if(k!=108&&lt(G,x-1)==58){Vl(G+=be(Fu(C),"&","&\f"),"&\f",im(m?p[m-1]:0))!=-1&&(A=-1);break}case 34:case 39:case 91:G+=Fu(C);break;case 9:case 10:case 13:case 32:G+=Ax(k);break;case 92:G+=$x(Ql()-1,7);continue;case 47:switch(Rr()){case 42:case 47:mi(Px(Rx(nn(),Ql()),r,i,h),h);break;default:G+="/"}break;case 123*$:p[m++]=mn(G)*A;case 125*$:case 59:case 0:switch(C){case 0:case 125:b=0;case 59+v:A==-1&&(G=be(G,/\f/g,"")),R>0&&mn(G)-x&&mi(R>32?th(G+";",l,i,x-1,h):th(be(G," ","")+";",l,i,x-2,h),h);break;case 59:G+=";";default:if(mi(V=eh(G,r,i,m,v,a,p,D,U=[],Q=[],x,c),c),C===123)if(v===0)Kl(G,r,V,V,U,c,x,p,Q);else switch(S===99&&lt(G,3)===110?100:S){case 100:case 108:case 109:case 115:Kl(t,V,V,l&&mi(eh(t,V,V,0,0,a,p,D,a,U=[],x,Q),Q),a,Q,x,p,l?U:Q);break;default:Kl(G,V,V,V,[""],Q,0,p,Q)}}m=v=R=0,$=A=1,D=G="",x=f;break;case 58:x=1+mn(G),R=k;default:if($<1){if(C==123)--$;else if(C==125&&$++==0&&Ex()==125)continue}switch(G+=Ac(C),C*$){case 38:A=v>0?1:(G+="\f",-1);break;case 44:p[m++]=(mn(G)-1)*A,A=1;break;case 64:Rr()===45&&(G+=Fu(nn())),S=Rr(),v=x=mn(D=G+=Tx(Ql())),C++;break;case 45:k===45&&mn(G)==2&&($=0)}}return c}function eh(t,r,i,l,a,c,f,p,h,m,v,x){for(var S=a-1,R=a===0?c:[""],k=sm(R),$=0,b=0,A=0;$<l;++$)for(var C=0,D=fo(t,S+1,S=im(b=f[$])),U=t;C<k;++C)(U=lm(b>0?R[C]+" "+D:be(D,/&\f/g,R[C])))&&(h[A++]=U);return gs(t,r,i,a===0?hs:p,h,m,v,x)}function Px(t,r,i,l){return gs(t,r,i,rm,Ac(Sx()),fo(t,2,-2),0,l)}function th(t,r,i,l,a){return gs(t,r,i,Cc,fo(t,0,l),fo(t,l+1,-1),l,a)}function um(t,r,i){switch(vx(t,r)){case 5103:return Ie+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ie+t+t;case 4789:return gi+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ie+t+gi+t+Be+t+t;case 5936:switch(lt(t,r+11)){case 114:return Ie+t+Be+be(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ie+t+Be+be(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ie+t+Be+be(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ie+t+Be+t+t;case 6165:return Ie+t+Be+"flex-"+t+t;case 5187:return Ie+t+be(t,/(\w+).+(:[^]+)/,Ie+"box-$1$2"+Be+"flex-$1$2")+t;case 5443:return Ie+t+Be+"flex-item-"+be(t,/flex-|-self/g,"")+(In(t,/flex-|baseline/)?"":Be+"grid-row-"+be(t,/flex-|-self/g,""))+t;case 4675:return Ie+t+Be+"flex-line-pack"+be(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ie+t+Be+be(t,"shrink","negative")+t;case 5292:return Ie+t+Be+be(t,"basis","preferred-size")+t;case 6060:return Ie+"box-"+be(t,"-grow","")+Ie+t+Be+be(t,"grow","positive")+t;case 4554:return Ie+be(t,/([^-])(transform)/g,"$1"+Ie+"$2")+t;case 6187:return be(be(be(t,/(zoom-|grab)/,Ie+"$1"),/(image-set)/,Ie+"$1"),t,"")+t;case 5495:case 3959:return be(t,/(image-set\([^]*)/,Ie+"$1$`$1");case 4968:return be(be(t,/(.+:)(flex-)?(.*)/,Ie+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ie+t+t;case 4200:if(!In(t,/flex-|baseline/))return Be+"grid-column-align"+fo(t,r)+t;break;case 2592:case 3360:return Be+be(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(l,a){return r=a,In(l.props,/grid-\w+-end/)})?~Vl(t+(i=i[r].value),"span",0)?t:Be+be(t,"-start","")+t+Be+"grid-row-span:"+(~Vl(i,"span",0)?In(i,/\d+/):+In(i,/\d+/)-+In(t,/\d+/))+";":Be+be(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(l){return In(l.props,/grid-\w+-start/)})?t:Be+be(be(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return be(t,/(.+)-inline(.+)/,Ie+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(mn(t)-1-r>6)switch(lt(t,r+1)){case 109:if(lt(t,r+4)!==45)break;case 102:return be(t,/(.+:)(.+)-([^]+)/,"$1"+Ie+"$2-$3$1"+gi+(lt(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~Vl(t,"stretch",0)?um(be(t,"stretch","fill-available"),r,i)+t:t}break;case 5152:case 5920:return be(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,a,c,f,p,h,m){return Be+a+":"+c+m+(f?Be+a+"-span:"+(p?h:+h-+c)+m:"")+t});case 4949:if(lt(t,r+6)===121)return be(t,":",":"+Ie)+t;break;case 6444:switch(lt(t,lt(t,14)===45?18:11)){case 120:return be(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ie+(lt(t,14)===45?"inline-":"")+"box$3$1"+Ie+"$2$3$1"+Be+"$2box$3")+t;case 100:return be(t,":",":"+Be)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return be(t,"scroll-","scroll-snap-")+t}return t}function rs(t,r){for(var i="",l=0;l<t.length;l++)i+=r(t[l],l,t,r)||"";return i}function Nx(t,r,i,l){switch(t.type){case wx:if(t.children.length)break;case xx:case Cc:return t.return=t.return||t.value;case rm:return"";case om:return t.return=t.value+"{"+rs(t.children,l)+"}";case hs:if(!mn(t.value=t.props.join(",")))return""}return mn(i=rs(t.children,l))?t.return=t.value+"{"+i+"}":""}function Ix(t){var r=sm(t);return function(i,l,a,c){for(var f="",p=0;p<r;p++)f+=t[p](i,l,a,c)||"";return f}}function Dx(t){return function(r){r.root||(r=r.return)&&t(r)}}function Lx(t,r,i,l){if(t.length>-1&&!t.return)switch(t.type){case Cc:t.return=um(t.value,t.length,i);return;case om:return rs([nr(t,{value:be(t.value,"@","@"+Ie)})],l);case hs:if(t.length)return kx(i=t.props,function(a){switch(In(a,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":so(nr(t,{props:[be(a,/:(read-\w+)/,":"+gi+"$1")]})),so(nr(t,{props:[a]})),tc(t,{props:Zp(i,l)});break;case"::placeholder":so(nr(t,{props:[be(a,/:(plac\w+)/,":"+Ie+"input-$1")]})),so(nr(t,{props:[be(a,/:(plac\w+)/,":"+gi+"$1")]})),so(nr(t,{props:[be(a,/:(plac\w+)/,Be+"input-$1")]})),so(nr(t,{props:[a]})),tc(t,{props:Zp(i,l)});break}return""})}}var Ox={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t={},ho=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",cm="active",dm="data-styled-version",xs="6.1.14",$c=`/*!sc*/
`,os=typeof window<"u"&&"HTMLElement"in window,_x=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY),zx={},ws=Object.freeze([]),mo=Object.freeze({});function fm(t,r,i){return i===void 0&&(i=mo),t.theme!==i.theme&&t.theme||r||i.theme}var pm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Fx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Mx=/(^-|-$)/g;function nh(t){return t.replace(Fx,"-").replace(Mx,"")}var Bx=/(a)(d)/gi,_l=52,rh=function(t){return String.fromCharCode(t+(t>25?39:97))};function oc(t){var r,i="";for(r=Math.abs(t);r>_l;r=r/_l|0)i=rh(r%_l)+i;return(rh(r%_l)+i).replace(Bx,"$1-$2")}var Mu,hm=5381,uo=function(t,r){for(var i=r.length;i;)t=33*t^r.charCodeAt(--i);return t},mm=function(t){return uo(hm,t)};function Rc(t){return oc(mm(t)>>>0)}function Ux(t){return t.displayName||t.name||"Component"}function Bu(t){return typeof t=="string"&&!0}var gm=typeof Symbol=="function"&&Symbol.for,ym=gm?Symbol.for("react.memo"):60115,Hx=gm?Symbol.for("react.forward_ref"):60112,Wx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Qx=((Mu={})[Hx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Mu[ym]=xm,Mu);function oh(t){return("type"in(r=t)&&r.type.$$typeof)===ym?xm:"$$typeof"in t?Qx[t.$$typeof]:Wx;var r}var Kx=Object.defineProperty,Gx=Object.getOwnPropertyNames,ih=Object.getOwnPropertySymbols,qx=Object.getOwnPropertyDescriptor,Yx=Object.getPrototypeOf,lh=Object.prototype;function wm(t,r,i){if(typeof r!="string"){if(lh){var l=Yx(r);l&&l!==lh&&wm(t,l,i)}var a=Gx(r);ih&&(a=a.concat(ih(r)));for(var c=oh(t),f=oh(r),p=0;p<a.length;++p){var h=a[p];if(!(h in Vx||i&&i[h]||f&&h in f||c&&h in c)){var m=qx(r,h);try{Kx(t,h,m)}catch{}}}}return t}function jr(t){return typeof t=="function"}function Tc(t){return typeof t=="object"&&"styledComponentId"in t}function Cr(t,r){return t&&r?"".concat(t," ").concat(r):t||r||""}function is(t,r){if(t.length===0)return"";for(var i=t[0],l=1;l<t.length;l++)i+=t[l];return i}function yi(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function ic(t,r,i){if(i===void 0&&(i=!1),!i&&!yi(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var l=0;l<r.length;l++)t[l]=ic(t[l],r[l]);else if(yi(r))for(var l in r)t[l]=ic(t[l],r[l]);return t}function jc(t,r){Object.defineProperty(t,"toString",{value:r})}function Pr(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Xx=function(){function t(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return t.prototype.indexOfGroup=function(r){for(var i=0,l=0;l<r;l++)i+=this.groupSizes[l];return i},t.prototype.insertRules=function(r,i){if(r>=this.groupSizes.length){for(var l=this.groupSizes,a=l.length,c=a;r>=c;)if((c<<=1)<0)throw Pr(16,"".concat(r));this.groupSizes=new Uint32Array(c),this.groupSizes.set(l),this.length=c;for(var f=a;f<c;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(r+1),h=(f=0,i.length);f<h;f++)this.tag.insertRule(p,i[f])&&(this.groupSizes[r]++,p++)},t.prototype.clearGroup=function(r){if(r<this.length){var i=this.groupSizes[r],l=this.indexOfGroup(r),a=l+i;this.groupSizes[r]=0;for(var c=l;c<a;c++)this.tag.deleteRule(l)}},t.prototype.getGroup=function(r){var i="";if(r>=this.length||this.groupSizes[r]===0)return i;for(var l=this.groupSizes[r],a=this.indexOfGroup(r),c=a+l,f=a;f<c;f++)i+="".concat(this.tag.getRule(f)).concat($c);return i},t}(),Gl=new Map,ls=new Map,ql=1,zl=function(t){if(Gl.has(t))return Gl.get(t);for(;ls.has(ql);)ql++;var r=ql++;return Gl.set(t,r),ls.set(r,t),r},Jx=function(t,r){ql=r+1,Gl.set(t,r),ls.set(r,t)},Zx="style[".concat(ho,"][").concat(dm,'="').concat(xs,'"]'),ew=new RegExp("^".concat(ho,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),tw=function(t,r,i){for(var l,a=i.split(","),c=0,f=a.length;c<f;c++)(l=a[c])&&t.registerName(r,l)},nw=function(t,r){for(var i,l=((i=r.textContent)!==null&&i!==void 0?i:"").split($c),a=[],c=0,f=l.length;c<f;c++){var p=l[c].trim();if(p){var h=p.match(ew);if(h){var m=0|parseInt(h[1],10),v=h[2];m!==0&&(Jx(v,m),tw(t,v,h[3]),t.getTag().insertRules(m,a)),a.length=0}else a.push(p)}}},sh=function(t){for(var r=document.querySelectorAll(Zx),i=0,l=r.length;i<l;i++){var a=r[i];a&&a.getAttribute(ho)!==cm&&(nw(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function rw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var vm=function(t){var r=document.head,i=t||r,l=document.createElement("style"),a=function(p){var h=Array.from(p.querySelectorAll("style[".concat(ho,"]")));return h[h.length-1]}(i),c=a!==void 0?a.nextSibling:null;l.setAttribute(ho,cm),l.setAttribute(dm,xs);var f=rw();return f&&l.setAttribute("nonce",f),i.insertBefore(l,c),l},ow=function(){function t(r){this.element=vm(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var l=document.styleSheets,a=0,c=l.length;a<c;a++){var f=l[a];if(f.ownerNode===i)return f}throw Pr(17)}(this.element),this.length=0}return t.prototype.insertRule=function(r,i){try{return this.sheet.insertRule(i,r),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.prototype.getRule=function(r){var i=this.sheet.cssRules[r];return i&&i.cssText?i.cssText:""},t}(),iw=function(){function t(r){this.element=vm(r),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(r,i){if(r<=this.length&&r>=0){var l=document.createTextNode(i);return this.element.insertBefore(l,this.nodes[r]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},t}(),lw=function(){function t(r){this.rules=[],this.length=0}return t.prototype.insertRule=function(r,i){return r<=this.length&&(this.rules.splice(r,0,i),this.length++,!0)},t.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},t}(),ah=os,sw={isServer:!os,useCSSOMInjection:!_x},ss=function(){function t(r,i,l){r===void 0&&(r=mo),i===void 0&&(i={});var a=this;this.options=st(st({},sw),r),this.gs=i,this.names=new Map(l),this.server=!!r.isServer,!this.server&&os&&ah&&(ah=!1,sh(this)),jc(this,function(){return function(c){for(var f=c.getTag(),p=f.length,h="",m=function(x){var S=function(A){return ls.get(A)}(x);if(S===void 0)return"continue";var R=c.names.get(S),k=f.getGroup(x);if(R===void 0||!R.size||k.length===0)return"continue";var $="".concat(ho,".g").concat(x,'[id="').concat(S,'"]'),b="";R!==void 0&&R.forEach(function(A){A.length>0&&(b+="".concat(A,","))}),h+="".concat(k).concat($,'{content:"').concat(b,'"}').concat($c)},v=0;v<p;v++)m(v);return h}(a)})}return t.registerId=function(r){return zl(r)},t.prototype.rehydrate=function(){!this.server&&os&&sh(this)},t.prototype.reconstructWithOptions=function(r,i){return i===void 0&&(i=!0),new t(st(st({},this.options),r),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(r=function(i){var l=i.useCSSOMInjection,a=i.target;return i.isServer?new lw(a):l?new ow(a):new iw(a)}(this.options),new Xx(r)));var r},t.prototype.hasNameForId=function(r,i){return this.names.has(r)&&this.names.get(r).has(i)},t.prototype.registerName=function(r,i){if(zl(r),this.names.has(r))this.names.get(r).add(i);else{var l=new Set;l.add(i),this.names.set(r,l)}},t.prototype.insertRules=function(r,i,l){this.registerName(r,i),this.getTag().insertRules(zl(r),l)},t.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.prototype.clearRules=function(r){this.getTag().clearGroup(zl(r)),this.clearNames(r)},t.prototype.clearTag=function(){this.tag=void 0},t}(),aw=/&/g,uw=/^\s*\/\/.*$/gm;function km(t,r){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(r," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(r," ")),i.props=i.props.map(function(l){return"".concat(r," ").concat(l)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=km(i.children,r)),i})}function cw(t){var r,i,l,a=mo,c=a.options,f=c===void 0?mo:c,p=a.plugins,h=p===void 0?ws:p,m=function(S,R,k){return k.startsWith(i)&&k.endsWith(i)&&k.replaceAll(i,"").length>0?".".concat(r):S},v=h.slice();v.push(function(S){S.type===hs&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(aw,i).replace(l,m))}),f.prefix&&v.push(Lx),v.push(Nx);var x=function(S,R,k,$){R===void 0&&(R=""),k===void 0&&(k=""),$===void 0&&($="&"),r=$,i=R,l=new RegExp("\\".concat(i,"\\b"),"g");var b=S.replace(uw,""),A=jx(k||R?"".concat(k," ").concat(R," { ").concat(b," }"):b);f.namespace&&(A=km(A,f.namespace));var C=[];return rs(A,Ix(v.concat(Dx(function(D){return C.push(D)})))),C};return x.hash=h.length?h.reduce(function(S,R){return R.name||Pr(15),uo(S,R.name)},hm).toString():"",x}var dw=new ss,lc=cw(),Sm=O.createContext({shouldForwardProp:void 0,styleSheet:dw,stylis:lc});Sm.Consumer;O.createContext(void 0);function sc(){return w.useContext(Sm)}var Em=function(){function t(r,i){var l=this;this.inject=function(a,c){c===void 0&&(c=lc);var f=l.name+c.hash;a.hasNameForId(l.id,f)||a.insertRules(l.id,f,c(l.rules,f,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=i,jc(this,function(){throw Pr(12,String(l.name))})}return t.prototype.getName=function(r){return r===void 0&&(r=lc),this.name+r.hash},t}(),fw=function(t){return t>="A"&&t<="Z"};function uh(t){for(var r="",i=0;i<t.length;i++){var l=t[i];if(i===1&&l==="-"&&t[0]==="-")return t;fw(l)?r+="-"+l.toLowerCase():r+=l}return r.startsWith("ms-")?"-"+r:r}var bm=function(t){return t==null||t===!1||t===""},Cm=function(t){var r,i,l=[];for(var a in t){var c=t[a];t.hasOwnProperty(a)&&!bm(c)&&(Array.isArray(c)&&c.isCss||jr(c)?l.push("".concat(uh(a),":"),c,";"):yi(c)?l.push.apply(l,co(co(["".concat(a," {")],Cm(c),!1),["}"],!1)):l.push("".concat(uh(a),": ").concat((r=a,(i=c)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||r in Ox||r.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return l};function or(t,r,i,l){if(bm(t))return[];if(Tc(t))return[".".concat(t.styledComponentId)];if(jr(t)){if(!jr(c=t)||c.prototype&&c.prototype.isReactComponent||!r)return[t];var a=t(r);return or(a,r,i,l)}var c;return t instanceof Em?i?(t.inject(i,l),[t.getName(l)]):[t]:yi(t)?Cm(t):Array.isArray(t)?Array.prototype.concat.apply(ws,t.map(function(f){return or(f,r,i,l)})):[t.toString()]}function Am(t){for(var r=0;r<t.length;r+=1){var i=t[r];if(jr(i)&&!Tc(i))return!1}return!0}var pw=mm(xs),hw=function(){function t(r,i,l){this.rules=r,this.staticRulesId="",this.isStatic=(l===void 0||l.isStatic)&&Am(r),this.componentId=i,this.baseHash=uo(pw,i),this.baseStyle=l,ss.registerId(i)}return t.prototype.generateAndInjectStyles=function(r,i,l){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,l):"";if(this.isStatic&&!l.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))a=Cr(a,this.staticRulesId);else{var c=is(or(this.rules,r,i,l)),f=oc(uo(this.baseHash,c)>>>0);if(!i.hasNameForId(this.componentId,f)){var p=l(c,".".concat(f),void 0,this.componentId);i.insertRules(this.componentId,f,p)}a=Cr(a,f),this.staticRulesId=f}else{for(var h=uo(this.baseHash,l.hash),m="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")m+=x;else if(x){var S=is(or(x,r,i,l));h=uo(h,S+v),m+=S}}if(m){var R=oc(h>>>0);i.hasNameForId(this.componentId,R)||i.insertRules(this.componentId,R,l(m,".".concat(R),void 0,this.componentId)),a=Cr(a,R)}}return a},t}(),xi=O.createContext(void 0);xi.Consumer;function mw(t){var r=O.useContext(xi),i=w.useMemo(function(){return function(l,a){if(!l)throw Pr(14);if(jr(l)){var c=l(a);return c}if(Array.isArray(l)||typeof l!="object")throw Pr(8);return a?st(st({},a),l):l}(t.theme,r)},[t.theme,r]);return t.children?O.createElement(xi.Provider,{value:i},t.children):null}var Uu={};function gw(t,r,i){var l=Tc(t),a=t,c=!Bu(t),f=r.attrs,p=f===void 0?ws:f,h=r.componentId,m=h===void 0?function(U,Q){var V=typeof U!="string"?"sc":nh(U);Uu[V]=(Uu[V]||0)+1;var G="".concat(V,"-").concat(Rc(xs+V+Uu[V]));return Q?"".concat(Q,"-").concat(G):G}(r.displayName,r.parentComponentId):h,v=r.displayName,x=v===void 0?function(U){return Bu(U)?"styled.".concat(U):"Styled(".concat(Ux(U),")")}(t):v,S=r.displayName&&r.componentId?"".concat(nh(r.displayName),"-").concat(r.componentId):r.componentId||m,R=l&&a.attrs?a.attrs.concat(p).filter(Boolean):p,k=r.shouldForwardProp;if(l&&a.shouldForwardProp){var $=a.shouldForwardProp;if(r.shouldForwardProp){var b=r.shouldForwardProp;k=function(U,Q){return $(U,Q)&&b(U,Q)}}else k=$}var A=new hw(i,S,l?a.componentStyle:void 0);function C(U,Q){return function(V,G,pe){var q=V.attrs,fe=V.componentStyle,je=V.defaultProps,Ee=V.foldedComponentIds,Re=V.styledComponentId,Ce=V.target,Ae=O.useContext(xi),ge=sc(),ce=V.shouldForwardProp||ge.shouldForwardProp,F=fm(G,Ae,je)||mo,J=function(ie,re,ae){for(var ye,M=st(st({},re),{className:void 0,theme:ae}),de=0;de<ie.length;de+=1){var ke=jr(ye=ie[de])?ye(M):ye;for(var Te in ke)M[Te]=Te==="className"?Cr(M[Te],ke[Te]):Te==="style"?st(st({},M[Te]),ke[Te]):ke[Te]}return re.className&&(M.className=Cr(M.className,re.className)),M}(q,G,F),X=J.as||Ce,P={};for(var z in J)J[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&J.theme===F||(z==="forwardedAs"?P.as=J.forwardedAs:ce&&!ce(z,X)||(P[z]=J[z]));var Z=function(ie,re){var ae=sc(),ye=ie.generateAndInjectStyles(re,ae.styleSheet,ae.stylis);return ye}(fe,J),ee=Cr(Ee,Re);return Z&&(ee+=" "+Z),J.className&&(ee+=" "+J.className),P[Bu(X)&&!pm.has(X)?"class":"className"]=ee,pe&&(P.ref=pe),w.createElement(X,P)}(D,U,Q)}C.displayName=x;var D=O.forwardRef(C);return D.attrs=R,D.componentStyle=A,D.displayName=x,D.shouldForwardProp=k,D.foldedComponentIds=l?Cr(a.foldedComponentIds,a.styledComponentId):"",D.styledComponentId=S,D.target=l?a.target:t,Object.defineProperty(D,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=l?function(Q){for(var V=[],G=1;G<arguments.length;G++)V[G-1]=arguments[G];for(var pe=0,q=V;pe<q.length;pe++)ic(Q,q[pe],!0);return Q}({},a.defaultProps,U):U}}),jc(D,function(){return".".concat(D.styledComponentId)}),c&&wm(D,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),D}function ch(t,r){for(var i=[t[0]],l=0,a=r.length;l<a;l+=1)i.push(r[l],t[l+1]);return i}var dh=function(t){return Object.assign(t,{isCss:!0})};function ne(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];if(jr(t)||yi(t))return dh(or(ch(ws,co([t],r,!0))));var l=t;return r.length===0&&l.length===1&&typeof l[0]=="string"?or(l):dh(or(ch(l,r)))}function ac(t,r,i){if(i===void 0&&(i=mo),!r)throw Pr(1,r);var l=function(a){for(var c=[],f=1;f<arguments.length;f++)c[f-1]=arguments[f];return t(r,i,ne.apply(void 0,co([a],c,!1)))};return l.attrs=function(a){return ac(t,r,st(st({},i),{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},l.withConfig=function(a){return ac(t,r,st(st({},i),a))},l}var $m=function(t){return ac(gw,t)},B=$m;pm.forEach(function(t){B[t]=$m(t)});var yw=function(){function t(r,i){this.rules=r,this.componentId=i,this.isStatic=Am(r),ss.registerId(this.componentId+1)}return t.prototype.createStyles=function(r,i,l,a){var c=a(is(or(this.rules,i,l,a)),""),f=this.componentId+r;l.insertRules(f,f,c)},t.prototype.removeStyles=function(r,i){i.clearRules(this.componentId+r)},t.prototype.renderStyles=function(r,i,l,a){r>2&&ss.registerId(this.componentId+r),this.removeStyles(r,l),this.createStyles(r,i,l,a)},t}();function xw(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var l=ne.apply(void 0,co([t],r,!1)),a="sc-global-".concat(Rc(JSON.stringify(l))),c=new yw(l,a),f=function(h){var m=sc(),v=O.useContext(xi),x=O.useRef(m.styleSheet.allocateGSInstance(a)).current;return m.styleSheet.server&&p(x,h,m.styleSheet,v,m.stylis),O.useLayoutEffect(function(){if(!m.styleSheet.server)return p(x,h,m.styleSheet,v,m.stylis),function(){return c.removeStyles(x,m.styleSheet)}},[x,h,m.styleSheet,v,m.stylis]),null};function p(h,m,v,x,S){if(c.isStatic)c.renderStyles(h,zx,v,S);else{var R=st(st({},m),{theme:fm(m,x,f.defaultProps)});c.renderStyles(h,R,v,S)}}return O.memo(f)}function ww(t){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];var l=is(ne.apply(void 0,co([t],r,!1))),a=Rc(l);return new Em(a,l)}var vw=`
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

`;const Pc="4px 4px 10px 0 rgba(0, 0, 0, 0.35)",Nc="inset 2px 2px 3px rgba(0,0,0,0.2)",rn=()=>ne`
  -webkit-text-fill-color: ${({theme:t})=>t.materialTextDisabled};
  color: ${({theme:t})=>t.materialTextDisabled};
  text-shadow: 1px 1px ${({theme:t})=>t.materialTextDisabledShadow};
  /* filter: grayscale(100%); */
`,on=({background:t="material",color:r="materialText"}={})=>ne`
  box-sizing: border-box;
  display: inline-block;
  background: ${({theme:i})=>i[t]};
  color: ${({theme:i})=>i[r]};
`,Si=({mainColor:t="black",secondaryColor:r="transparent",pixelSize:i=2})=>ne`
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
`,Nr=()=>ne`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  color: ${({theme:t})=>t.materialText};
  background: ${({$disabled:t,theme:r})=>t?r.flatLight:r.canvas};
  border: 2px solid ${({theme:t})=>t.canvas};
  outline: 2px solid ${({theme:t})=>t.flatDark};
  outline-offset: -4px;
`,ao={button:{topLeftOuter:"borderLightest",topLeftInner:"borderLight",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"},buttonPressed:{topLeftOuter:"borderDarkest",topLeftInner:"borderDark",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},buttonThin:{topLeftOuter:"borderLightest",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderDark"},buttonThinPressed:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},field:{topLeftOuter:"borderDark",topLeftInner:"borderDarkest",bottomRightInner:"borderLight",bottomRightOuter:"borderLightest"},grouping:{topLeftOuter:"borderDark",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderLightest"},status:{topLeftOuter:"borderDark",topLeftInner:null,bottomRightInner:null,bottomRightOuter:"borderLightest"},window:{topLeftOuter:"borderLight",topLeftInner:"borderLightest",bottomRightInner:"borderDark",bottomRightOuter:"borderDarkest"}},kw=({theme:t,topLeftInner:r,bottomRightInner:i,hasShadow:l=!1,hasInsetShadow:a=!1})=>[l?Pc:!1,a?Nc:!1,r!==null?`inset 1px 1px 0px 1px ${t[r]}`:!1,i!==null?`inset -1px -1px 0 1px ${t[i]}`:!1].filter(Boolean).join(", "),qe=({invert:t=!1,style:r="button"}={})=>{const i={topLeftOuter:t?"bottomRightOuter":"topLeftOuter",topLeftInner:t?"bottomRightInner":"topLeftInner",bottomRightInner:t?"topLeftInner":"bottomRightInner",bottomRightOuter:t?"topLeftOuter":"bottomRightOuter"};return ne`
    border-style: solid;
    border-width: 2px;
    border-left-color: ${({theme:l})=>l[ao[r][i.topLeftOuter]]};
    border-top-color: ${({theme:l})=>l[ao[r][i.topLeftOuter]]};
    border-right-color: ${({theme:l})=>l[ao[r][i.bottomRightOuter]]};
    border-bottom-color: ${({theme:l})=>l[ao[r][i.bottomRightOuter]]};
    box-shadow: ${({theme:l,shadow:a})=>kw({theme:l,topLeftInner:ao[r][i.topLeftInner],bottomRightInner:ao[r][i.bottomRightInner],hasShadow:a})};
  `},go=()=>ne`
  outline: 2px dotted ${({theme:t})=>t.materialText};
`,Sw=t=>Buffer.from(t).toString("base64"),Ew=typeof btoa<"u"?btoa:Sw,Fl=(t,r=0)=>{const i=`<svg height="26" width="26" viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g transform="rotate(${r} 13 13)">
      <polygon fill="${t}" points="6,10 20,10 13,17"/>
    </g>
  </svg>`;return`url(data:image/svg+xml;base64,${Ew(i)})`},Ic=(t="default")=>ne`
  ::-webkit-scrollbar {
    width: 26px;
    height: 26px;
  }
  ::-webkit-scrollbar-track {
    ${({theme:r})=>Si({mainColor:t==="flat"?r.flatLight:r.material,secondaryColor:t==="flat"?r.canvas:r.borderLightest})}
  }
  ::-webkit-scrollbar-thumb {
    ${on()}
    ${t==="flat"?Nr():qe({style:"window"})}
      outline-offset: -2px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${({theme:r})=>r.material};
  }
  ::-webkit-scrollbar-button {
    ${on()}
    ${t==="flat"?Nr():qe({style:"window"})}
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
    ${t==="default"?qe({style:"window",invert:!0}):""}
  }

  ::-webkit-scrollbar-button:horizontal:increment:start,
  ::-webkit-scrollbar-button:horizontal:decrement:end,
  ::-webkit-scrollbar-button:vertical:increment:start,
  ::-webkit-scrollbar-button:vertical:decrement:end {
    display: none;
  }

  ::-webkit-scrollbar-button:horizontal:decrement {
    background-image: ${({theme:r})=>Fl(r.materialText,90)};
  }

  ::-webkit-scrollbar-button:horizontal:increment {
    background-image: ${({theme:r})=>Fl(r.materialText,270)};
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    background-image: ${({theme:r})=>Fl(r.materialText,180)};
  }

  ::-webkit-scrollbar-button:vertical:increment {
    background-image: ${({theme:r})=>Fl(r.materialText,0)};
  }
`,bw=B.a`
  color: ${({theme:t})=>t.anchor};
  font-size: inherit;
  text-decoration: ${({underline:t})=>t?"underline":"none"};
  &:visited {
    color: ${({theme:t})=>t.anchorVisited};
  }
`,Cw=w.forwardRef(({children:t,underline:r=!0,...i},l)=>O.createElement(bw,{ref:l,underline:r,...i},t));Cw.displayName="Anchor";const Aw=B.header`
  ${qe()};
  ${on()};

  position: ${t=>{var r;return(r=t.position)!==null&&r!==void 0?r:t.fixed?"fixed":"absolute"}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`,$w=w.forwardRef(({children:t,fixed:r=!0,position:i="fixed",...l},a)=>O.createElement(Aw,{fixed:r,position:r!==!1?i:void 0,ref:a,...l},t));$w.displayName="AppBar";const Lr=()=>{};function Ar(t,r,i){return i!==null&&t>i?i:r!==null&&t<r?r:t}function Rw(t){if(Math.abs(t)<1){const i=t.toExponential().split("e-"),l=i[0].split(".")[1];return(l?l.length:0)+parseInt(i[1],10)}const r=t.toString().split(".")[1];return r?r.length:0}function fh(t,r,i){const l=Math.round((t-i)/r)*r+i;return Number(l.toFixed(Rw(r)))}function sr(t){return typeof t=="number"?`${t}px`:t}const Tw=B.div`
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
`,jw=B.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`,Pw=w.forwardRef(({alt:t="",children:r,noBorder:i=!1,size:l=35,square:a=!1,src:c,...f},p)=>O.createElement(Tw,{noBorder:i,ref:p,size:sr(l),square:a,src:c,...f},c?O.createElement(jw,{src:c,alt:t}):r));Pw.displayName="Avatar";const ft={sm:"28px",md:"36px",lg:"44px"},Nw=ne`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({size:t="md"})=>ft[t]};
  width: ${({fullWidth:t,size:r="md",square:i})=>t?"100%":i?ft[r]:"auto"};
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
`,vs=B.button`
  ${({active:t,disabled:r,primary:i,theme:l,variant:a})=>a==="flat"?ne`
          ${Nr()}
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
            ${!t&&!r&&go}
            outline-offset: -4px;
          }
        `:a==="menu"||a==="thin"?ne`
          ${on()};
          border: 2px solid transparent;
          &:hover,
          &:focus {
            ${!r&&!t&&qe({style:"buttonThin"})}
          }
          &:active {
            ${!r&&qe({style:"buttonThinPressed"})}
          }
          ${t&&qe({style:"buttonThinPressed"})}
          ${r&&rn()}
        `:ne`
          ${on()};
          border: none;
          ${r&&rn()}
          ${t?Si({mainColor:l.material,secondaryColor:l.borderLightest}):""}
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

            ${qe(t?{style:a==="raised"?"window":"button",invert:!0}:{style:a==="raised"?"window":"button",invert:!1})}
          }
          &:active:before {
            ${!r&&qe({style:a==="raised"?"window":"button",invert:!0})}
          }
          &:focus:after,
          &:active:after {
            ${!t&&!r&&go}
            outline-offset: -8px;
          }
          &:active:focus:after,
          &:active:after {
            top: ${t?"0":"1px"};
          }
        `}
  ${Nw}
`,ve=w.forwardRef(({onClick:t,disabled:r=!1,children:i,type:l="button",fullWidth:a=!1,size:c="md",square:f=!1,active:p=!1,onTouchStart:h=Lr,primary:m=!1,variant:v="default",...x},S)=>O.createElement(vs,{active:p,disabled:r,$disabled:r,fullWidth:a,onClick:r?void 0:t,onTouchStart:h,primary:m,ref:S,size:c,square:f,type:l,variant:v,...x},i));ve.displayName="Button";function ar({defaultValue:t,onChange:r,onChangePropName:i="onChange",readOnly:l,value:a,valuePropName:c="value"}){const f=a!==void 0,[p,h]=w.useState(t),m=w.useCallback(v=>{f||h(v)},[f]);if(f&&typeof r!="function"&&!l){const v=`Warning: You provided a \`${c}\` prop to a component without an \`${i}\` handler.${c==="value"?`This will render a read-only field. If the field should be mutable use \`defaultValue\`. Otherwise, set either \`${i}\` or \`readOnly\`.`:`This breaks the component state. You must provide an \`${i}\` function that updates \`${c}\`.`}`;console.warn(v)}return[f?a:p,m]}const uc=B.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${t=>ft[t.size]};
  width: ${t=>t.square?ft[t.size]:"auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${t=>t.square?"space-around":"space-between"};
  text-align: center;
  line-height: ${t=>ft[t.size]};
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
`,_e=w.forwardRef(({size:t="lg",disabled:r,square:i,children:l,onClick:a,primary:c,...f},p)=>O.createElement(uc,{$disabled:r,size:t,square:i,onClick:r?void 0:a,primary:c,role:"menuitem",ref:p,"aria-disabled":r,...f},l));_e.displayName="MenuListItem";const rr=B.ul.attrs(()=>({role:"menu"}))`
  box-sizing: border-box;
  width: ${t=>t.fullWidth?"100%":"auto"};
  padding: 4px;
  ${qe({style:"window"})}
  ${on()}
  ${t=>t.inline&&`
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;rr.displayName="MenuList";const yn=20,as=B.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${yn}px;
  height: ${yn}px;
  opacity: 0;
  z-index: -1;
`,Dc=B.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({$disabled:t})=>t?"auto":"pointer"};
  user-select: none;
  font-size: 1rem;
  color: ${({theme:t})=>t.materialText};
  ${t=>t.$disabled&&rn()}

  ${uc} & {
    margin: 0;
    height: 100%;
  }
  ${uc}:hover & {
    ${({$disabled:t,theme:r})=>!t&&ne`
        color: ${r.materialTextInvert};
      `};
  }
`,Lc=B.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${as}:focus ~ & {
    ${go}
  }
  ${as}:not(:disabled) ~ &:active {
    ${go}
  }
`,wn=B.div`
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
    ${t=>t.shadow&&`box-shadow:${Nc};`}
  }
`,Iw=B.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${Ic()}
`,Rm=w.forwardRef(({children:t,shadow:r=!0,...i},l)=>O.createElement(wn,{ref:l,shadow:r,...i},O.createElement(Iw,null,t)));Rm.displayName="ScrollView";const Tm=ne`
  width: ${yn}px;
  height: ${yn}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Dw=B(wn)`
  ${Tm}
  width: ${yn}px;
  height: ${yn}px;
  background: ${({$disabled:t,theme:r})=>t?r.material:r.canvas};
  &:before {
    box-shadow: none;
  }
`,Lw=B.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({$disabled:t,theme:r})=>t?r.flatLight:r.canvas};
  ${Tm}
  width: ${yn-4}px;
  height: ${yn-4}px;
  outline: none;
  border: 2px solid ${({theme:t})=>t.flatDark};
  background: ${({$disabled:t,theme:r})=>t?r.flatLight:r.canvas};
`,Ow=B.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,_w=B.span.attrs(()=>({"data-testid":"indeterminateIcon"}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({$disabled:t,theme:r})=>Si({mainColor:t?r.checkmarkDisabled:r.checkmark})}
    background-position: 0px 0px, 2px 2px;
  }
`,zw={flat:Lw,default:Dw},Oc=w.forwardRef(({checked:t,className:r="",defaultChecked:i=!1,disabled:l=!1,indeterminate:a=!1,label:c="",onChange:f=Lr,style:p={},value:h,variant:m="default",...v},x)=>{var S;const[R,k]=ar({defaultValue:i,onChange:f,readOnly:(S=v.readOnly)!==null&&S!==void 0?S:l,value:t}),$=w.useCallback(C=>{const D=C.target.checked;k(D),f(C)},[f,k]),b=zw[m];let A=null;return a?A=_w:R&&(A=Ow),O.createElement(Dc,{$disabled:l,className:r,style:p},O.createElement(as,{disabled:l,onChange:l?void 0:$,readOnly:l,type:"checkbox",value:h,checked:R,"data-indeterminate":a,ref:x,...v}),O.createElement(b,{$disabled:l,role:"presentation"},A&&O.createElement(A,{$disabled:l,variant:m})),c&&O.createElement(Lc,null,c))});Oc.displayName="Checkbox";const ir=B.div`
  ${({orientation:t,theme:r,size:i="100%"})=>t==="vertical"?`
    height: ${sr(i)};
    border-left: 2px solid ${r.borderDark};
    border-right: 2px solid ${r.borderLightest};
    margin: 0;
    `:`
    width: ${sr(i)};
    border-bottom: 2px solid ${r.borderLightest};
    border-top: 2px solid ${r.borderDark};
    margin: 0;
    `}
`;ir.displayName="Separator";const Fw=B(vs)`
  padding-left: 8px;
`,Mw=B(ir)`
  height: 21px;
  position: relative;
  top: 0;
`,jm=B.input`
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
`,Bw=B.div`
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
  ${jm}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${go}
    outline-offset: -8px;
  }
`,Uw=B.span`
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
`,Hw=w.forwardRef(({value:t,defaultValue:r,onChange:i=Lr,disabled:l=!1,variant:a="default",...c},f)=>{var p;const[h,m]=ar({defaultValue:r,onChange:i,readOnly:(p=c.readOnly)!==null&&p!==void 0?p:l,value:t}),v=x=>{const S=x.target.value;m(S),i(x)};return O.createElement(Fw,{disabled:l,as:"div",variant:a,size:"md"},O.createElement(jm,{onChange:v,readOnly:l,disabled:l,value:h??"#008080",type:"color",ref:f,...c}),O.createElement(Bw,{$disabled:l,color:h??"#008080",role:"presentation"}),a==="default"&&O.createElement(Mw,{orientation:"vertical"}),O.createElement(Uw,{$disabled:l,variant:a}))});Hw.displayName="ColorInput";const Ww=B.div`
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
      ${Si({mainColor:"var(--react95-digit-bg-color)",secondaryColor:"var(--react95-digit-secondary-color)",pixelSize:t})}
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
`,ph=["horizontal top","center","horizontal bottom","vertical top left","vertical top right","vertical bottom left","vertical bottom right"],Vw=[[1,0,1,1,1,1,1],[0,0,0,0,1,0,1],[1,1,1,0,1,1,0],[1,1,1,0,1,0,1],[0,1,0,1,1,0,1],[1,1,1,1,0,0,1],[1,1,1,1,0,1,1],[1,0,0,0,1,0,1],[1,1,1,1,1,1,1],[1,1,1,1,1,0,1]];function Qw({digit:t=0,pixelSize:r=2,...i}){const l=Vw[Number(t)].map((a,c)=>a?`${ph[c]} active`:ph[c]);return O.createElement(Ww,{pixelSize:r,...i},l.map((a,c)=>O.createElement("span",{className:a,key:c})))}const Kw=B.div`
  ${qe({style:"status"})}
  display: inline-flex;
  background: #000000;
`,Gw={sm:1,md:2,lg:3,xl:4},qw=w.forwardRef(({value:t=0,minLength:r=3,size:i="md",...l},a)=>{const c=w.useMemo(()=>t.toString().padStart(r,"0").split(""),[r,t]);return O.createElement(Kw,{ref:a,...l},c.map((f,p)=>O.createElement(Qw,{digit:f,pixelSize:Gw[i],key:p})))});qw.displayName="Counter";const Pm=ne`
  display: flex;
  align-items: center;
  width: ${({fullWidth:t})=>t?"100%":"auto"};
  min-height: ${ft.md};
`,Yw=B(wn).attrs({"data-testid":"variant-default"})`
  ${Pm}
  background: ${({$disabled:t,theme:r})=>t?r.material:r.canvas};
`,Xw=B.div.attrs({"data-testid":"variant-flat"})`
  ${Nr()}
  ${Pm}
  position: relative;
`,Nm=ne`
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
`,Jw=B.input`
  ${Nm}
  padding: 0 8px;
`,Zw=B.textarea`
  ${Nm}
  padding: 8px;
  resize: none;
  ${({variant:t})=>Ic(t)}
`,vo=w.forwardRef(({className:t,disabled:r=!1,fullWidth:i,onChange:l=Lr,shadow:a=!0,style:c,variant:f="default",...p},h)=>{const m=f==="flat"?Xw:Yw,v=w.useMemo(()=>{var x;return p.multiline?O.createElement(Zw,{disabled:r,onChange:r?void 0:l,readOnly:r,ref:h,variant:f,...p}):O.createElement(Jw,{disabled:r,onChange:r?void 0:l,readOnly:r,ref:h,type:(x=p.type)!==null&&x!==void 0?x:"text",variant:f,...p})},[r,l,p,h,f]);return O.createElement(m,{className:t,fullWidth:i,$disabled:r,shadow:a,style:c},v)});vo.displayName="TextInput";const ev=B.div`
  display: inline-flex;
  align-items: center;
`,cc=B(ve)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({variant:t})=>t==="flat"?ne`
          height: calc(50% - 1px);
        `:ne`
          height: 50%;
        `}
`,tv=B.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({variant:t})=>t==="flat"?ne`
          height: calc(${ft.md} - 4px);
        `:ne`
          height: ${ft.md};
          margin-left: 2px;
        `}
`,hh=B.span`
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
  ${cc}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({theme:t})=>t.materialTextDisabledShadow}
    );
    ${({invert:t})=>t?ne`
            border-bottom-color: ${({theme:r})=>r.materialTextDisabled};
          `:ne`
            border-top-color: ${({theme:r})=>r.materialTextDisabled};
          `}
  }
`,Im=w.forwardRef(({className:t,defaultValue:r,disabled:i=!1,max:l,min:a,onChange:c,readOnly:f,step:p=1,style:h,value:m,variant:v="default",width:x,...S},R)=>{const[k,$]=ar({defaultValue:r,onChange:c,readOnly:f,value:m}),b=w.useCallback(V=>{const G=parseFloat(V.target.value);$(G)},[$]),A=w.useCallback(V=>{const G=Ar(parseFloat(((k??0)+V).toFixed(2)),a??null,l??null);$(G),c==null||c(G)},[l,a,c,$,k]),C=w.useCallback(()=>{k!==void 0&&(c==null||c(k))},[c,k]),D=w.useCallback(()=>{A(p)},[A,p]),U=w.useCallback(()=>{A(-p)},[A,p]),Q=v==="flat"?"flat":"raised";return O.createElement(ev,{className:t,style:{...h,width:x!==void 0?sr(x):"auto"},...S},O.createElement(vo,{value:k,variant:v,onChange:b,disabled:i,type:"number",readOnly:f,ref:R,fullWidth:!0,onBlur:C}),O.createElement(tv,{variant:v},O.createElement(cc,{"data-testid":"increment",variant:Q,disabled:i||f,onClick:D},O.createElement(hh,{invert:!0})),O.createElement(cc,{"data-testid":"decrement",variant:Q,disabled:i||f,onClick:U},O.createElement(hh,null))))});Im.displayName="NumberInput";function nv(){const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";let r="";for(let i=0;i<10;i+=1)r+=t[Math.floor(Math.random()*t.length)];return r}const Dm=t=>w.useMemo(()=>nv(),[t]),Lm=ne`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`,Om=ne`
  background: ${({theme:t})=>t.hoverBackground};
  color: ${({theme:t})=>t.canvasTextInvert};
`,_c=B.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`,rv=B.div`
  ${Lm}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${_c}:focus & {
    ${Om}
    border: 2px dotted ${({theme:t})=>t.focusSecondary};
  }
`,_m=ne`
  height: ${ft.md};
  display: inline-block;
  color: ${({$disabled:t=!1,theme:r})=>t?rn():r.canvasText};
  font-size: 1rem;
  cursor: ${({$disabled:t})=>t?"default":"pointer"};
`,ov=B(wn)`
  ${_m}
  background: ${({$disabled:t=!1,theme:r})=>t?r.material:r.canvas};
  &:focus {
    outline: 0;
  }
`,iv=B.div`
  ${Nr()}
  ${_m}
  background: ${({$disabled:t=!1,theme:r})=>t?r.flatLight:r.canvas};
`,lv=B.select`
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
  ${Lm}
  cursor: pointer;
  &:disabled {
    ${rn()};
    background: ${({theme:t})=>t.material};
    cursor: default;
  }
`,zm=B(vs).attrs(()=>({"aria-hidden":"true"}))`
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
`,sv=B.span`
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
  ${zm}:active & {
    margin-top: 2px;
  }
`,av=B.ul`
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
  box-shadow: ${Pc};
  ${({variant:t="default"})=>t==="flat"?ne`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({theme:r})=>r.flatDark};
        `:ne`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({theme:r})=>r.borderDarkest};
        `}
  ${({variant:t="default"})=>Ic(t)}
`,uv=B.li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${ft.md} - 4px);
  line-height: calc(${ft.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:t})=>t.canvasText};
  &:focus {
    outline: 0;
  }
  ${({active:t})=>t?Om:""}
  user-select: none;
`,cv=[],Fm=({className:t,defaultValue:r,disabled:i,native:l,onChange:a,options:c=cv,readOnly:f,style:p,value:h,variant:m,width:v})=>{var x;const S=w.useMemo(()=>c.filter(Boolean),[c]),[R,k]=ar({defaultValue:r??((x=S==null?void 0:S[0])===null||x===void 0?void 0:x.value),onChange:a,readOnly:f,value:h}),$=!(i||f),b=w.useMemo(()=>({className:t,style:{...p,width:v}}),[t,p,v]),A=w.useMemo(()=>O.createElement(zm,{as:"div","data-testid":"select-button",$disabled:i,native:l,tabIndex:-1,variant:m==="flat"?"flat":"raised"},O.createElement(sv,{"data-testid":"select-icon",$disabled:i})),[i,l,m]),C=w.useMemo(()=>m==="flat"?iv:ov,[m]);return w.useMemo(()=>({isEnabled:$,options:S,value:R,setValue:k,wrapperProps:b,DropdownButton:A,Wrapper:C}),[A,C,$,S,k,R,b])},dv={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESC:"Escape",HOME:"Home",SPACE:"Space",TAB:"Tab"},fv=1e3,pv=({onBlur:t,onChange:r,onClose:i,onFocus:l,onKeyDown:a,onMouseDown:c,onOpen:f,open:p,options:h,readOnly:m,value:v,selectRef:x,setValue:S,wrapperRef:R})=>{const k=w.useRef(null),$=w.useRef([]),b=w.useRef(0),A=w.useRef(0),C=w.useRef(),D=w.useRef("search"),U=w.useRef(""),Q=w.useRef(),[V,G]=ar({defaultValue:!1,onChange:f,onChangePropName:"onOpen",readOnly:m,value:p,valuePropName:"open"}),pe=w.useMemo(()=>{const M=h.findIndex(de=>de.value===v);return b.current=Ar(M,0,null),h[M]},[h,v]),[q,fe]=w.useState(h[0]),je=w.useCallback(M=>{const de=k.current,ke=$.current[M];if(!ke||!de){C.current=M;return}C.current=void 0;const Te=de.clientHeight,De=de.scrollTop,Ye=de.scrollTop+Te,Ke=ke.offsetTop,wt=ke.offsetHeight,Nt=ke.offsetTop+ke.offsetHeight;Ke<De&&de.scrollTo(0,Ke),Nt>Ye&&de.scrollTo(0,Ke-Te+wt),ke.focus({preventScroll:!0})},[k]),Ee=w.useCallback((M,{scroll:de}={})=>{var ke;const Te=h.length-1;let De;switch(M){case"first":{De=0;break}case"last":{De=Te;break}case"next":{De=Ar(A.current+1,0,Te);break}case"previous":{De=Ar(A.current-1,0,Te);break}case"selected":{De=Ar((ke=b.current)!==null&&ke!==void 0?ke:0,0,Te);break}default:De=M}A.current=De,fe(h[De]),de&&je(De)},[A,h,je]),Re=w.useCallback(({fromEvent:M})=>{G(!0),Ee("selected",{scroll:!0}),f==null||f({fromEvent:M})},[Ee,f,G]),Ce=w.useCallback(()=>{D.current="search",U.current="",clearTimeout(Q.current)},[]),Ae=w.useCallback(({focusSelect:M,fromEvent:de})=>{var ke;i==null||i({fromEvent:de}),G(!1),fe(h[0]),Ce(),C.current=void 0,M&&((ke=x.current)===null||ke===void 0||ke.focus())},[Ce,i,h,x,G]),ge=w.useCallback(({fromEvent:M})=>{V?Ae({focusSelect:!1,fromEvent:M}):Re({fromEvent:M})},[Ae,Re,V]),ce=w.useCallback((M,{fromEvent:de})=>{b.current!==M&&(b.current=M,S(h[M].value),r==null||r(h[M],{fromEvent:de}))},[r,h,S]),F=w.useCallback(({focusSelect:M,fromEvent:de})=>{ce(A.current,{fromEvent:de}),Ae({focusSelect:M,fromEvent:de})},[Ae,ce]),J=w.useCallback((M,{fromEvent:de,select:ke})=>{var Te;switch(D.current==="cycleFirstLetter"&&M!==U.current&&(D.current="search"),M===U.current?D.current="cycleFirstLetter":U.current+=M,D.current){case"search":{let De=h.findIndex(Ye=>{var Ke;return((Ke=Ye.label)===null||Ke===void 0?void 0:Ke.toLocaleUpperCase().indexOf(U.current))===0});De<0&&(De=h.findIndex(Ye=>{var Ke;return((Ke=Ye.label)===null||Ke===void 0?void 0:Ke.toLocaleUpperCase().indexOf(M))===0}),U.current=M),De>=0&&(ke?ce(De,{fromEvent:de}):Ee(De,{scroll:!0}));break}case"cycleFirstLetter":{const De=ke?(Te=b.current)!==null&&Te!==void 0?Te:-1:A.current;let Ye=h.findIndex((Ke,wt)=>{var Nt;return wt>De&&((Nt=Ke.label)===null||Nt===void 0?void 0:Nt.toLocaleUpperCase().indexOf(M))===0});Ye<0&&(Ye=h.findIndex(Ke=>{var wt;return((wt=Ke.label)===null||wt===void 0?void 0:wt.toLocaleUpperCase().indexOf(M))===0})),Ye>=0&&(ke?ce(Ye,{fromEvent:de}):Ee(Ye,{scroll:!0}));break}}clearTimeout(Q.current),Q.current=setTimeout(()=>{D.current==="search"&&(U.current="")},fv)},[Ee,h,ce]),X=w.useCallback(M=>{var de;M.button===0&&(M.preventDefault(),(de=x.current)===null||de===void 0||de.focus(),ge({fromEvent:M}),c==null||c(M))},[c,x,ge]),P=w.useCallback(M=>{F({focusSelect:!0,fromEvent:M})},[F]),z=w.useCallback(M=>{const{altKey:de,code:ke,ctrlKey:Te,metaKey:De,shiftKey:Ye}=M,{ARROW_DOWN:Ke,ARROW_UP:wt,END:Nt,ENTER:sn,ESC:Mt,HOME:Sn,SPACE:an,TAB:En}=dv,Co=de||Te||De||Ye;if(!(ke===En&&(de||Te||De)||ke!==En&&Co))switch(ke){case Ke:{if(M.preventDefault(),!V){Re({fromEvent:M});return}Ee("next",{scroll:!0});break}case wt:{if(M.preventDefault(),!V){Re({fromEvent:M});return}Ee("previous",{scroll:!0});break}case Nt:{if(M.preventDefault(),!V){Re({fromEvent:M});return}Ee("last",{scroll:!0});break}case sn:{if(!V)return;M.preventDefault(),F({focusSelect:!0,fromEvent:M});break}case Mt:{if(!V)return;M.preventDefault(),Ae({focusSelect:!0,fromEvent:M});break}case Sn:{if(M.preventDefault(),!V){Re({fromEvent:M});return}Ee("first",{scroll:!0});break}case an:{M.preventDefault(),V?F({focusSelect:!0,fromEvent:M}):Re({fromEvent:M});break}case En:{if(!V)return;Ye||M.preventDefault(),F({focusSelect:!Ye,fromEvent:M});break}default:!Co&&ke.match(/^Key/)&&(M.preventDefault(),M.stopPropagation(),J(ke.replace(/^Key/,""),{select:!V,fromEvent:M}))}},[Ee,Ae,V,Re,J,F]),Z=w.useCallback(M=>{z(M),a==null||a(M)},[z,a]),ee=w.useCallback(M=>{Ee(M)},[Ee]),ie=w.useCallback(M=>{V||(Ce(),t==null||t(M))},[Ce,t,V]),re=w.useCallback(M=>{Ce(),l==null||l(M)},[Ce,l]),ae=w.useCallback(M=>{k.current=M,C.current!==void 0&&je(C.current)},[je]),ye=w.useCallback((M,de)=>{$.current[de]=M,C.current===de&&je(C.current)},[je]);return w.useEffect(()=>{if(!V)return()=>{};const M=de=>{var ke;const Te=de.target;!((ke=R.current)===null||ke===void 0)&&ke.contains(Te)||(de.preventDefault(),Ae({focusSelect:!1,fromEvent:de}))};return document.addEventListener("mousedown",M),()=>{document.removeEventListener("mousedown",M)}},[Ae,V,R]),w.useMemo(()=>({activeOption:q,handleActivateOptionIndex:ee,handleBlur:ie,handleButtonKeyDown:Z,handleDropdownKeyDown:z,handleFocus:re,handleMouseDown:X,handleOptionClick:P,handleSetDropdownRef:ae,handleSetOptionRef:ye,open:V,selectedOption:pe}),[q,ee,ie,Z,re,z,X,P,ae,ye,V,pe])},hv=w.forwardRef(({className:t,defaultValue:r,disabled:i,onChange:l,options:a,readOnly:c,style:f,value:p,variant:h,width:m,...v},x)=>{const{isEnabled:S,options:R,setValue:k,value:$,DropdownButton:b,Wrapper:A}=Fm({defaultValue:r,disabled:i,native:!0,onChange:l,options:a,readOnly:c,value:p,variant:h}),C=w.useCallback(D=>{const U=R.find(Q=>Q.value===D.target.value);U&&(k(U.value),l==null||l(U,{fromEvent:D}))},[l,R,k]);return O.createElement(A,{className:t,style:{...f,width:m}},O.createElement(_c,null,O.createElement(lv,{...v,disabled:i,onChange:S?C:Lr,ref:x,value:$},R.map((D,U)=>{var Q;return O.createElement("option",{key:`${D.value}-${U}`,value:D.value},(Q=D.label)!==null&&Q!==void 0?Q:D.value)})),b))});hv.displayName="SelectNative";function mv({activateOptionIndex:t,active:r,index:i,onClick:l,option:a,selected:c,setRef:f}){const p=w.useCallback(()=>{t(i)},[t,i]),h=w.useCallback(v=>{f(v,i)},[i,f]),m=Dm();return O.createElement(uv,{active:r,"aria-selected":c?"true":void 0,"data-value":a.value,id:m,onClick:l,onMouseEnter:p,ref:h,role:"option",tabIndex:0},a.label)}function gv({"aria-label":t,"aria-labelledby":r,className:i,defaultValue:l,disabled:a=!1,formatDisplay:c,inputProps:f,labelId:p,menuMaxHeight:h,name:m,onBlur:v,onChange:x,onClose:S,onFocus:R,onKeyDown:k,onMouseDown:$,onOpen:b,open:A,options:C,readOnly:D,shadow:U=!0,style:Q,variant:V="default",value:G,width:pe="auto",...q},fe){const{isEnabled:je,options:Ee,setValue:Re,value:Ce,wrapperProps:Ae,DropdownButton:ge,Wrapper:ce}=Fm({className:i,defaultValue:l,disabled:a,native:!1,onChange:x,options:C,style:Q,readOnly:D,value:G,variant:V,width:pe}),F=w.useRef(null),J=w.useRef(null),X=w.useRef(null),{activeOption:P,handleActivateOptionIndex:z,handleBlur:Z,handleButtonKeyDown:ee,handleDropdownKeyDown:ie,handleFocus:re,handleMouseDown:ae,handleOptionClick:ye,handleSetDropdownRef:M,handleSetOptionRef:de,open:ke,selectedOption:Te}=pv({onBlur:v,onChange:x,onClose:S,onFocus:R,onKeyDown:k,onMouseDown:$,onOpen:b,open:A,options:Ee,value:Ce,selectRef:J,setValue:Re,wrapperRef:X});w.useImperativeHandle(fe,()=>({focus:sn=>{var Mt;(Mt=J.current)===null||Mt===void 0||Mt.focus(sn)},node:F.current,value:String(Ce)}),[Ce]);const De=w.useMemo(()=>Te?typeof c=="function"?c(Te):Te.label:"",[c,Te]),Ye=je?1:void 0,Ke=w.useMemo(()=>h?{overflow:"auto",maxHeight:h}:void 0,[h]),wt=Dm(),Nt=w.useMemo(()=>Ee.map((sn,Mt)=>{const Sn=`${Ce}-${Mt}`,an=sn===P,En=sn===Te;return O.createElement(mv,{activateOptionIndex:z,active:an,index:Mt,key:Sn,onClick:ye,option:sn,selected:En,setRef:de})}),[P,z,ye,de,Ee,Te,Ce]);return O.createElement(ce,{...Ae,$disabled:a,ref:X,shadow:U,style:{...Q,width:pe}},O.createElement("input",{name:m,ref:F,type:"hidden",value:String(Ce),...f}),O.createElement(_c,{"aria-disabled":a,"aria-expanded":ke,"aria-haspopup":"listbox","aria-label":t,"aria-labelledby":r??p,"aria-owns":je&&ke?wt:void 0,onBlur:Z,onFocus:re,onKeyDown:ee,onMouseDown:je?ae:$,ref:J,role:"button",tabIndex:Ye,...q},O.createElement(rv,null,De),ge),je&&ke&&O.createElement(av,{id:wt,onKeyDown:ie,ref:M,role:"listbox",style:Ke,tabIndex:0,variant:V},Nt))}const zc=w.forwardRef(gv);zc.displayName="Select";const yv=B.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${t=>t.noPadding?"0":"4px"};
`,jt=w.forwardRef(function({children:r,noPadding:i=!1,...l},a){return O.createElement(yv,{noPadding:i,ref:a,...l},r)});jt.displayName="Toolbar";const xv=B.div`
  padding: 16px;
`,xt=w.forwardRef(function({children:r,...i},l){return O.createElement(xv,{ref:l,...i},r)});xt.displayName="WindowContent";const wv=B.div`
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

  ${vs} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`,ks=w.forwardRef(function({active:r=!0,children:i,...l},a){return O.createElement(wv,{active:r,ref:a,...l},i)});ks.displayName="WindowHeader";const vv=B.div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${qe({style:"window"})}
  ${on()}
`,kv=B.span`
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
`,Ss=w.forwardRef(({children:t,resizable:r=!1,resizeRef:i,shadow:l=!0,...a},c)=>O.createElement(vv,{ref:c,shadow:l,...a},t,r&&O.createElement(kv,{"data-testid":"resizeHandle",ref:i})));Ss.displayName="Window";const Sv=B(Rm)`
  width: 234px;
  margin: 1rem 0;
  background: ${({theme:t})=>t.canvas};
`,Ev=B.div`
  display: flex;
  background: ${({theme:t})=>t.materialDark};
  color: #dfe0e3;
`,bv=B.div`
  display: flex;
  flex-wrap: wrap;
`,Nn=B.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`,Cv=B.span`
  cursor: pointer;

  background: ${({active:t,theme:r})=>t?r.hoverBackground:"transparent"};
  color: ${({active:t,theme:r})=>t?r.canvasTextInvert:r.canvasText};

  &:hover {
    border: 2px dashed
      ${({theme:t,active:r})=>r?"none":t.materialDark};
  }
`,Av=[{value:0,label:"January"},{value:1,label:"February"},{value:2,label:"March"},{value:3,label:"April"},{value:4,label:"May"},{value:5,label:"June"},{value:6,label:"July"},{value:7,label:"August"},{value:8,label:"September"},{value:9,label:"October"},{value:10,label:"November"},{value:11,label:"December"}];function $v(t,r){return new Date(t,r+1,0).getDate()}function Rv(t,r,i){return new Date(t,r,i).getDay()}function Tv(t){const r=new Date(Date.parse(t)),i=r.getUTCDate(),l=r.getUTCMonth(),a=r.getUTCFullYear();return{day:i,month:l,year:a}}const jv=w.forwardRef(({className:t,date:r=new Date().toISOString(),onAccept:i,onCancel:l,shadow:a=!0},c)=>{const[f,p]=w.useState(()=>Tv(r)),{year:h,month:m,day:v}=f,x=w.useCallback(({value:b})=>{p(A=>({...A,month:b}))},[]),S=w.useCallback(b=>{p(A=>({...A,year:b}))},[]),R=w.useCallback(b=>{p(A=>({...A,day:b}))},[]),k=w.useCallback(()=>{const b=[f.year,f.month+1,f.day].map(A=>String(A).padStart(2,"0")).join("-");i==null||i(b)},[f.day,f.month,f.year,i]),$=w.useMemo(()=>{const b=Array.from({length:42}),A=Rv(h,m,1);let C=v;const D=$v(h,m);return C=C<D?C:D,b.forEach((U,Q)=>{if(Q>=A&&Q<D+A){const V=Q-A+1;b[Q]=O.createElement(Nn,{key:Q,onClick:()=>{R(V)}},O.createElement(Cv,{active:V===C},V))}else b[Q]=O.createElement(Nn,{key:Q})}),b},[v,R,m,h]);return O.createElement(Ss,{className:t,ref:c,shadow:a,style:{margin:20}},O.createElement(ks,null,O.createElement("span",{role:"img","aria-label":"📆"},"📆"),"Date"),O.createElement(xt,null,O.createElement(jt,{noPadding:!0,style:{justifyContent:"space-between"}},O.createElement(zc,{options:Av,value:m,onChange:x,width:128,menuMaxHeight:200}),O.createElement(Im,{value:h,onChange:S,width:100})),O.createElement(Sv,null,O.createElement(Ev,null,O.createElement(Nn,null,"S"),O.createElement(Nn,null,"M"),O.createElement(Nn,null,"T"),O.createElement(Nn,null,"W"),O.createElement(Nn,null,"T"),O.createElement(Nn,null,"F"),O.createElement(Nn,null,"S")),O.createElement(bv,null,$)),O.createElement(jt,{noPadding:!0,style:{justifyContent:"space-between"}},O.createElement(ve,{fullWidth:!0,onClick:l,disabled:!l},"Cancel"),O.createElement(ve,{fullWidth:!0,onClick:i?k:void 0,disabled:!i},"OK"))))});jv.displayName="DatePicker";const Pv=t=>{switch(t){case"status":case"well":return ne`
        ${qe({style:"status"})}
      `;case"window":case"outside":return ne`
        ${qe({style:"window"})}
      `;case"field":return ne`
        ${qe({style:"field"})}
      `;default:return ne`
        ${qe()}
      `}},Nv=B.div`
  position: relative;
  font-size: 1rem;
  ${({variant:t})=>Pv(t)}
  ${({variant:t})=>on(t==="field"?{background:"canvas",color:"canvasText"}:void 0)}
`,Pt=w.forwardRef(({children:t,shadow:r=!1,variant:i="window",...l},a)=>O.createElement(Nv,{ref:a,shadow:r,variant:i,...l},t));Pt.displayName="Frame";const Iv=B.fieldset`
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
`,Dv=B.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({theme:t,variant:r})=>r==="flat"?t.canvas:t.material};
`,Mm=w.forwardRef(({label:t,disabled:r=!1,variant:i="default",children:l,...a},c)=>O.createElement(Iv,{"aria-disabled":r,$disabled:r,variant:i,ref:c,...a},t&&O.createElement(Dv,{variant:i},t),l));Mm.displayName="GroupBox";const Lv=B.div`
  ${({theme:t,size:r="100%"})=>`
  display: inline-block;
  box-sizing: border-box;
  height: ${sr(r)};
  width: 5px;
  border-top: 2px solid ${t.borderLightest};
  border-left: 2px solid ${t.borderLightest};
  border-bottom: 2px solid ${t.borderDark};
  border-right: 2px solid ${t.borderDark};
  background: ${t.material};
`}
`;Lv.displayName="Handle";const Ov="url('data:image/gif;base64,R0lGODlhPAA8APQAADc3N6+vr4+Pj05OTvn5+V1dXZ+fn29vby8vLw8PD/X19d/f37S0tJSUlLq6und3d39/f9XV1c/Pz+bm5qamphkZGWZmZsbGxr+/v+rq6tra2u/v7yIiIv///wAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBAAfACH+I1Jlc2l6ZWQgb24gaHR0cHM6Ly9lemdpZi5jb20vcmVzaXplACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYADAAQAA0AAAVFYCeOZPmVaKqimeO+MPxFXv3d+F17Cm3nuJ1ic7lAdroapUjABZCfnQb4ef6k1OHGULtsNk3qjVKLiIFkj/mMIygU4VwIACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBkAIwAKAAcAAAUp4CdehrGI6Ed5XpSKa4teguBoGlVPAXuJBpam5/l9gh7NZrFQiDJMRQgAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsFgAPABAAIQAABVBgJ45kaZ5oakZB67bZ+M10bd94ru987//AoHBILNYYAsGlR/F4IkwnlLeZTBQ9UlaWwzweERHjuzAKFZkMYYZWm4mOw0ETfdanO8Vms7aFAAAh+QQFBAAfACwAAAAAAQABAAAFA+AXAgAh+QQFBAAfACwZABIACgAeAAAFUGAnjmRpnij5rerqtu4Hx3Rt33iu758iZrUZa1TDCASLGsXjiSiZzmFnM5n4TNJSdmREElfL5lO8cgwGACbgrAkwPat3+x1naggKRS+f/4QAACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCACH5BAUEAB8ALBYAIwAQAA0AAAVE4CeOXdmNaGqeabu27SUIC5xSnifZKK7zl8djkCsIaylGziNaakaEzcbH/Cwl0k9kuWxyPYptzrZULA7otFpNIK1eoxAAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkEBQQAHwAsAAAAAAEAAQAABQPgFwIAIfkECQQAHwAsDgAEACAANAAABTHgJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/Y7CoEACH5BAUEAB8ALAAAAAA8ADwAAAX/4CeOZGmeaKqubFt6biy3Xj3fuFjveU/vPJ/wBAQOj6RiEClUGpk9IMAJxQEdmQK1Grt2OhutkvurOb7f8JaM8qLT4iKbuDu/0erxfOS+4+NPex9mfn55coIfCAuFhoBLbDUAjI1vh4FkOxSVd5eQXB4GnI5rXAAbo6R6VTUFqKmWjzasNaKwsaVIHhAEt3cLTjBQA6++XwoHuUM1vMYdyMorwoN8wkC2t9A8s102204Wxana3DNAAQO1FjUCEDXhvuTT5nUdEwOiGxa8BBDwXxKaLTiAKoMFRvJy9CmmoFcHAgrQSEiwKwICDwU0pAMQIdmnboR8TfwWrJyMPrAiz1DkNs2aSRbe6hnr99LEvDJ9IB5DQ8Dhm36glNh5COGBAmQNHrbz+WXBFChOTqFx5+GBxwYCmL1ZcPHmMiWuvkTgECzBBUvrvH4tErbDWCcYDB2IBPbV2yJJ72SZ46TtXSB5v2RIp1ZXXbFkgWxCc68mk752E3tY/OZeIsiIaxi9o+BBokGH3SZ+4FPbZ8yiPQxNeDl0hNUeHWcKjYb1Zx20bd/GzRaV7t28gRSYELvw7pIfgVcLplwF8+bOo0Ffjmm6zerWrxvPzoe79w8hAAAh+QQJBAAfACwBAAEAOgA6AAAFRuAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/D4MgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyJxnyTQym6nn0ilVSa9XGHY7jXKx2m/WK36Gy1CUVCBpu9+OtNqDeNslgip5Gej4/4ATcidLAICHHQF6c0x9iH+CXV6Gj36KZnsejgsREQSACp0Yg0ydEZWWi4RPjgdLG48apEuogJeDJVKtr7GzHrV/t5KrjX6uHhQMF4cKCwujTxHOwKmYjHzGTw+VEVIK1MGqJrrZTNuP3U/f4IniuazlSwMUFMugE/j47NW4JOQdx9bsoybMgxV4ALEIGAis4MFiCZkUaLPgUAYHGDF+Yucw0y5z3Lzt63hNUzwP5xCRpWOyDhxJYtgiStBQEVCGAAEM6MLp0p0/hMdgIZI17AOTntZgmowo9BBRgz9/EfQ54h8BBS39bKDXwBc9CrVejkNYKRLUSWGpivhXtt9PSpXEvmNiwYDdu3jzFB3LAa9fAxbUGkXjtmSZh4TPJM4kRgbhvVEL9xhTEongJJgza97MubPnz6BDix5NurTp0yJCAAAh+QQJBAAfACwEAA4ANAAgAAAFMeAnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9jsKgQAIfkEBQQAHwAsAAAAADwAPAAABf/gJ45kaZ5oqq5s6bVwLHu0bN8uXeM8rP+9YOoHFBpHRN1xmSwue02A82lrFjaOKbVl3XQ6WeWWm7x+v+HdeFj2ntHaNbL9jUAI5/RLTurWOR53eXFbfh0RgB4PCm9hfCKGiDSLb18Bjx+RiR4HjG8TA3trmkSdZxuhalSkRA2VBqpPrD+ulR0Go3SHmz8CeG8bFqJMupJNHr5nCsKxQccTg4oUNA0YCYG/HQQQYsSlnmCUFLUXgm8EAsPeP6Zf2baV2+rEmTrt8PDyzS7O9uD4b5YV2VGjGw52/wB+CaYjlQcpNBAQioHwy4QMCxe4i3BKGIQN3K7AArBATz8anUDADcgQDMGCbQkknDKAh4ABNxQ0gpnoQ8eDVAUO0ADAzUNMhbZMQiG4R4mOo0gb8eTCQgeEqJVM7juCDWvWJnI4ev2aZIwHl2PfZIBIZBXKtAsLgC1kJu0GuWXNaoB7d67ZlWP75jVLw4JXwW35PNSJFPFUrmIb402smFNCW44N5kJ5+dTkx+vuAfus+VHF0X4xzeHsObXq1ZY7ZN76mt0C0rRf1zuWW/du175PHAu+YjhxFcCPm6CsHHnv5kig6w4BACH5BAkEAB8ALAEAAQA6ADoAAAVG4CeOZGmeaKqubOu+cCzPdG3feK7vfO//wKBwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8PgyBAAh+QQFBAAfACwAAAAAPAA8AAAF/+AnjmRpnmiqrmzrvnAsz3Rt37jr7Xzv/8BebhQsGn1D0XFZTH6YUGQySvU4fYKAdsvtdi1Cp3In6ZjP6HTawBMTyWbFYk6v18/snXvsKXciUApmeVZ7PH6ATIIdhHtPcB0TDQ1gQBCTBINthpBnAUEaa5tuh2mfQKFojZx9aRMSEhA7FLAbonqsfmoUOxFqmriknWm8Hr6/q8IeCAAAx2cTERG2aBTNHMGOj8a/v8WF2m/c3cSj4SQ8C92n4Ocm6evm7ui9CosdBPbs8yo8E2YO5PE74Q+gwIElCnYImA3hux3/Fh50yCciw3YUt2GQtiiDtGQO4f3al1GkGpIDeXlg0KDhXpoMLBtMVPaMnJlv/HjUtIkzHA8HEya4tLkhqICGV4bZVAMyaaul3ZpOUQoVz8wbpaoyvWojq1ZVXGt4/QoM49SnZMs6GktW6hC2X93mgKtVbtceWbzo9VIJKdYqUJwCPiJ4cJOzhg+/TWwko+PHkCNLdhgCACH5BAUEAB8ALAAAAAABAAEAAAUD4BcCADs=')",_v=B.div`
  display: inline-block;
  height: ${({size:t})=>sr(t)};
  width: ${({size:t})=>sr(t)};
`,zv=B.span`
  display: block;
  background: ${Ov};
  background-size: cover;
  width: 100%;
  height: 100%;
`,Fv=w.forwardRef(({size:t=30,...r},i)=>O.createElement(_v,{size:t,ref:i,...r},O.createElement(zv,null)));Fv.displayName="Hourglass";const Mv=B.div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`,Bv=B.div`
  position: relative;
`,Uv=B.div`
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
`,Hv=B(wn).attrs(()=>({"data-testid":"background"}))`
  width: 100%;
  height: 100%;
`,Wv=B.div`
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
`,Bm=w.forwardRef(({backgroundStyles:t,children:r,...i},l)=>O.createElement(Mv,{ref:l,...i},O.createElement(Bv,null,O.createElement(Uv,null,O.createElement(Hv,{style:t},r)),O.createElement(Wv,null))));Bm.displayName="Monitor";const Vv=B.div`
  display: inline-block;
  height: ${ft.md};
  width: 100%;
`,Qv=B(wn)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`,Um=ne`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`,Kv=B.div`
  position: relative;
  top: 4px;
  ${Um}
  background: ${({theme:t})=>t.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({theme:t})=>t.materialText};
`,Gv=B.div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${Um}
  color: ${({theme:t})=>t.materialTextInvert};
  background: ${({theme:t})=>t.progress};
  clip-path: polygon(
    0 0,
    ${({value:t=0})=>t}% 0,
    ${({value:t=0})=>t}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`,qv=B.div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`,Hm=17,Yv=B.span`
  display: inline-block;
  width: ${Hm}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({theme:t})=>t.progress};
  border-color: ${({theme:t})=>t.material};
  border-width: 0px 1px;
  border-style: solid;
`,Es=w.forwardRef(({hideValue:t=!1,shadow:r=!0,value:i,variant:l="default",...a},c)=>{const f=t?null:`${i}%`,p=w.useRef(null),[h,m]=w.useState([]),v=w.useCallback(()=>{if(!p.current||i===void 0)return;const x=p.current.getBoundingClientRect().width,S=Math.round(i/100*x/Hm);m(Array.from({length:S}))},[i]);return w.useEffect(()=>(v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)),[v]),O.createElement(Vv,{"aria-valuenow":i!==void 0?Math.round(i):void 0,ref:c,role:"progressbar",variant:l,...a},O.createElement(Qv,{variant:l,shadow:r},l==="default"?O.createElement(O.Fragment,null,O.createElement(Kv,{"data-testid":"defaultProgress1"},f),O.createElement(Gv,{"data-testid":"defaultProgress2",value:i},f)):O.createElement(qv,{ref:p,"data-testid":"tileProgress"},h.map((x,S)=>O.createElement(Yv,{key:S})))))});Es.displayName="ProgressBar";const Wm=ne`
  width: ${yn}px;
  height: ${yn}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`,Xv=B(wn)`
  ${Wm}
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
`,Jv=B.div`
  ${Nr()}
  ${Wm}
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
`,Zv=B.span.attrs(()=>({"data-testid":"checkmarkIcon"}))`
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
`,e1={flat:Jv,default:Xv},t1=w.forwardRef(({checked:t,className:r="",disabled:i=!1,label:l="",onChange:a,style:c={},variant:f="default",...p},h)=>{const m=e1[f];return O.createElement(Dc,{$disabled:i,className:r,style:c},O.createElement(m,{$disabled:i,role:"presentation"},t&&O.createElement(Zv,{$disabled:i,variant:f})),O.createElement(as,{disabled:i,onChange:i?void 0:a,readOnly:i,type:"radio",checked:t,ref:h,...p}),l&&O.createElement(Lc,null,l))});t1.displayName="Radio";const n1=typeof window<"u"?w.useLayoutEffect:w.useEffect;function br(t){const r=w.useRef(t);return n1(()=>{r.current=t}),w.useCallback((...i)=>(0,r.current)(...i),[])}function mh(t,r){typeof t=="function"?t(r):t&&(t.current=r)}function gh(t,r){return w.useMemo(()=>t==null&&r==null?null:i=>{mh(t,i),mh(r,i)},[t,r])}var Vm=nm();let bs=!0,dc=!1,yh;const r1={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function o1(t){if("type"in t){const{type:r,tagName:i}=t;if(i==="INPUT"&&r1[r]&&!t.readOnly||i==="TEXTAREA"&&!t.readOnly)return!0}return!!("isContentEditable"in t&&t.isContentEditable)}function i1(t){t.metaKey||t.altKey||t.ctrlKey||(bs=!0)}function Hu(){bs=!1}function l1(){this.visibilityState==="hidden"&&dc&&(bs=!0)}function s1(t){t.addEventListener("keydown",i1,!0),t.addEventListener("mousedown",Hu,!0),t.addEventListener("pointerdown",Hu,!0),t.addEventListener("touchstart",Hu,!0),t.addEventListener("visibilitychange",l1,!0)}function a1(t){const{target:r}=t;try{return r.matches(":focus-visible")}catch{}return bs||o1(r)}function u1(){dc=!0,window.clearTimeout(yh),yh=window.setTimeout(()=>{dc=!1},100)}function c1(){const t=w.useCallback(r=>{const i=Vm.findDOMNode(r);i!=null&&s1(i.ownerDocument)},[]);return{isFocusVisible:a1,onBlurVisible:u1,ref:t}}function d1(t,r,i){return(i-r)*t+r}function Ml(t,r){if(r!==void 0&&"changedTouches"in t){for(let i=0;i<t.changedTouches.length;i+=1){const l=t.changedTouches[i];if(l.identifier===r)return{x:l.clientX,y:l.clientY}}return!1}return"clientX"in t?{x:t.clientX,y:t.clientY}:!1}function Bl(t){return t&&t.ownerDocument||document}function f1(t,r){var i;const{index:l}=(i=t.reduce((a,c,f)=>{const p=Math.abs(r-c);return a===null||p<a.distance||p===a.distance?{distance:p,index:f}:a},null))!==null&&i!==void 0?i:{};return l??-1}const p1=B.div`
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
`,Qm=()=>ne`
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
`,h1=B(wn)`
  ${Qm()}
`,m1=B(wn)`
  ${Qm()}

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
`,g1=B.span`
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
          ${Nr()}
          outline: 2px solid ${({theme:r})=>r.flatDark};
          background: ${({theme:r})=>r.flatLight};
        `:ne`
          ${on()}
          ${qe()}
          &:focus {
            outline: none;
          }
        `}
    ${({$disabled:t,theme:r})=>t&&Si({mainColor:r.material,secondaryColor:r.borderLightest})}
`,us=6,y1=B.span`
  display: inline-block;
  position: absolute;

  ${({orientation:t})=>t==="vertical"?ne`
          right: ${-8}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${us}px;
          border-bottom: 2px solid ${({theme:r})=>r.materialText};
        `:ne`
          bottom: ${-6}px;
          height: ${us}px;
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
`,x1=B.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({orientation:t})=>t==="vertical"?ne`
          transform: translate(${us+2}px, ${us+1}px);
        `:ne`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`,w1=w.forwardRef(({defaultValue:t,disabled:r=!1,marks:i=!1,max:l=100,min:a=0,name:c,onChange:f,onChangeCommitted:p,onMouseDown:h,orientation:m="horizontal",size:v="100%",step:x=1,value:S,variant:R="default",...k},$)=>{const b=R==="flat"?m1:h1,A=m==="vertical",[C=a,D]=ar({defaultValue:t,onChange:f??p,value:S}),{isFocusVisible:U,onBlurVisible:Q,ref:V}=c1(),[G,pe]=w.useState(!1),q=w.useRef(),fe=w.useRef(null),je=gh(V,q),Ee=gh($,je),Re=br(Z=>{U(Z)&&pe(!0)}),Ce=br(()=>{G!==!1&&(pe(!1),Q())}),Ae=w.useRef(),ge=w.useMemo(()=>i===!0&&Number.isFinite(x)?[...Array(Math.round((l-a)/x)+1)].map((Z,ee)=>({label:void 0,value:a+x*ee})):Array.isArray(i)?i:[],[i,l,a,x]),ce=br(Z=>{const ee=(l-a)/10,ie=ge.map(ye=>ye.value),re=ie.indexOf(C);let ae=0;switch(Z.key){case"Home":ae=a;break;case"End":ae=l;break;case"PageUp":x&&(ae=C+ee);break;case"PageDown":x&&(ae=C-ee);break;case"ArrowRight":case"ArrowUp":x?ae=C+x:ae=ie[re+1]||ie[ie.length-1];break;case"ArrowLeft":case"ArrowDown":x?ae=C-x:ae=ie[re-1]||ie[0];break;default:return}Z.preventDefault(),x&&(ae=fh(ae,x,a)),ae=Ar(ae,a,l),D(ae),pe(!0),f==null||f(ae),p==null||p(ae)}),F=w.useCallback(Z=>{if(!q.current)return 0;const ee=q.current.getBoundingClientRect();let ie;A?ie=(ee.bottom-Z.y)/ee.height:ie=(Z.x-ee.left)/ee.width;let re;if(re=d1(ie,a,l),x)re=fh(re,x,a);else{const ae=ge.map(M=>M.value),ye=f1(ae,re);re=ae[ye]}return re=Ar(re,a,l),re},[ge,l,a,x,A]),J=br(Z=>{var ee;const ie=Ml(Z,Ae.current);if(!ie)return;const re=F(ie);(ee=fe.current)===null||ee===void 0||ee.focus(),D(re),pe(!0),f==null||f(re)}),X=br(Z=>{const ee=Ml(Z,Ae.current);if(!ee)return;const ie=F(ee);p==null||p(ie),Ae.current=void 0;const re=Bl(q.current);re.removeEventListener("mousemove",J),re.removeEventListener("mouseup",X),re.removeEventListener("touchmove",J),re.removeEventListener("touchend",X)}),P=br(Z=>{var ee;h==null||h(Z),Z.preventDefault(),(ee=fe.current)===null||ee===void 0||ee.focus(),pe(!0);const ie=Ml(Z,Ae.current);if(ie){const ae=F(ie);D(ae),f==null||f(ae)}const re=Bl(q.current);re.addEventListener("mousemove",J),re.addEventListener("mouseup",X)}),z=br(Z=>{var ee;Z.preventDefault();const ie=Z.changedTouches[0];ie!=null&&(Ae.current=ie.identifier),(ee=fe.current)===null||ee===void 0||ee.focus(),pe(!0);const re=Ml(Z,Ae.current);if(re){const ye=F(re);D(ye),f==null||f(ye)}const ae=Bl(q.current);ae.addEventListener("touchmove",J),ae.addEventListener("touchend",X)});return w.useEffect(()=>{const{current:Z}=q;Z==null||Z.addEventListener("touchstart",z);const ee=Bl(Z);return()=>{Z==null||Z.removeEventListener("touchstart",z),ee.removeEventListener("mousemove",J),ee.removeEventListener("mouseup",X),ee.removeEventListener("touchmove",J),ee.removeEventListener("touchend",X)}},[X,J,z]),O.createElement(p1,{$disabled:r,hasMarks:!!ge.length,isFocused:G,onMouseDown:P,orientation:m,ref:Ee,size:sr(v),...k},O.createElement("input",{disabled:r,name:c,type:"hidden",value:C??0}),ge&&ge.map(Z=>O.createElement(y1,{$disabled:r,"data-testid":"tick",key:Z.value/(l-a)*100,orientation:m,style:{[A?"bottom":"left"]:`${(Z.value-a)/(l-a)*100}%`}},Z.label&&O.createElement(x1,{"aria-hidden":!0,"data-testid":"mark",orientation:m},Z.label))),O.createElement(b,{orientation:m,variant:R}),O.createElement(g1,{$disabled:r,"aria-disabled":r?!0:void 0,"aria-orientation":m,"aria-valuemax":l,"aria-valuemin":a,"aria-valuenow":C,onBlur:Ce,onFocus:Re,onKeyDown:ce,orientation:m,ref:fe,role:"slider",style:{[A?"bottom":"left"]:`${(A?-100:0)+100*(C-a)/(l-a)}%`},tabIndex:r?void 0:0,variant:R}))});w1.displayName="Slider";const v1=B.tbody`
  background: ${({theme:t})=>t.canvas};
  display: table-row-group;
  box-shadow: ${Nc};
  overflow-y: auto;
`,Cs=w.forwardRef(function({children:r,...i},l){return O.createElement(v1,{ref:l,...i},r)});Cs.displayName="TableBody";const k1=B.td`
  padding: 0 8px;
`,dt=w.forwardRef(function({children:r,...i},l){return O.createElement(k1,{ref:l,...i},r)});dt.displayName="TableDataCell";const S1=B.thead`
  display: table-header-group;
`,As=w.forwardRef(function({children:r,...i},l){return O.createElement(S1,{ref:l,...i},r)});As.displayName="TableHead";const E1=B.th`
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
    ${qe()}

    border-left: none;
    border-top: none;
  }
  ${({$disabled:t})=>!t&&ne`
      &:active {
        &:before {
          ${qe({invert:!0,style:"window"})}
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
`,$s=w.forwardRef(function({disabled:r=!1,children:i,onClick:l,onTouchStart:a=Lr,sort:c,...f},p){const h=c==="asc"?"ascending":c==="desc"?"descending":void 0;return O.createElement(E1,{$disabled:r,"aria-disabled":r,"aria-sort":h,onClick:r?void 0:l,onTouchStart:r?void 0:a,ref:p,...f},O.createElement("div",null,i))});$s.displayName="TableHeadCell";const b1=B.tr`
  color: inherit;
  display: table-row;
  height: calc(${ft.md} - 2px);
  line-height: calc(${ft.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({theme:t})=>t.canvasText};
  &:hover {
    background: ${({theme:t})=>t.hoverBackground};
    color: ${({theme:t})=>t.canvasTextInvert};
  }
`,Ir=w.forwardRef(function({children:r,...i},l){return O.createElement(b1,{ref:l,...i},r)});Ir.displayName="TableRow";const C1=B.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`,A1=B(wn)`
  &:before {
    box-shadow: none;
  }
`,Rs=w.forwardRef(({children:t,...r},i)=>O.createElement(A1,null,O.createElement(C1,{ref:i,...r},t)));Rs.displayName="Table";const $1=B.button`
  ${on()}
  ${qe()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${ft.md};
  line-height: ${ft.md};
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
    ${go}
    outline-offset: -6px;
  }
  ${t=>t.selected&&`
    z-index: 1;
    height: calc(${ft.md} + 4px);
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
`,R1=w.forwardRef(({value:t,onClick:r,selected:i=!1,children:l,...a},c)=>O.createElement($1,{"aria-selected":i,selected:i,onClick:f=>r==null?void 0:r(t,f),ref:c,role:"tab",...a},l));R1.displayName="Tab";const T1=B.div`
  ${on()}
  ${qe()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`,j1=w.forwardRef(({children:t,...r},i)=>O.createElement(T1,{ref:i,...r},t));j1.displayName="TabBody";const P1=B.div`
  position: relative;
  ${({isMultiRow:t,theme:r})=>t&&`
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${r.borderDark};
  }
  `}
`,N1=B.div.attrs(()=>({"data-testid":"tab-row"}))`
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
`;function I1(t,r){const i=[];for(let l=r;l>0;l-=1)i.push(t.splice(0,Math.ceil(t.length/l)));return i}const D1=w.forwardRef(({value:t,onChange:r=Lr,children:i,rows:l=1,...a},c)=>{const f=w.useMemo(()=>{var p;const h=(p=O.Children.map(i,x=>{if(!O.isValidElement(x))return null;const S={selected:x.props.value===t,onClick:r};return O.cloneElement(x,S)}))!==null&&p!==void 0?p:[],m=I1(h,l).map((x,S)=>({key:S,tabs:x})),v=m.findIndex(x=>x.tabs.some(S=>S.props.selected));return m.push(m.splice(v,1)[0]),m},[i,r,l,t]);return O.createElement(P1,{...a,isMultiRow:l>1,role:"tablist",ref:c},f.map(p=>O.createElement(N1,{key:p.key},p.tabs)))});D1.displayName="Tabs";const L1=["blur","focus"],O1=["click","contextmenu","doubleclick","drag","dragend","dragenter","dragexit","dragleave","dragover","dragstart","drop","mousedown","mouseenter","mouseleave","mousemove","mouseout","mouseover","mouseup"];function xh(t){return"nativeEvent"in t&&L1.includes(t.type)}function wh(t){return"nativeEvent"in t&&O1.includes(t.type)}const _1={top:`top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,bottom:`bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,left:`left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,right:`right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`},z1=B.span`
  position: absolute;

  z-index: 1;
  display: ${t=>t.show?"block":"none"};
  padding: 4px;
  border: 2px solid ${({theme:t})=>t.borderDarkest};
  background: ${({theme:t})=>t.tooltip};
  box-shadow: ${Pc};
  text-align: center;
  font-size: 1rem;
  ${t=>_1[t.position]}
`,F1=B.div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`,M1=w.forwardRef(({className:t,children:r,disableFocusListener:i=!1,disableMouseListener:l=!1,enterDelay:a=1e3,leaveDelay:c=0,onBlur:f,onClose:p,onFocus:h,onMouseEnter:m,onMouseLeave:v,onOpen:x,style:S,text:R,position:k="top",...$},b)=>{const[A,C]=w.useState(!1),[D,U]=w.useState(),[Q,V]=w.useState(),G=!i,pe=!l,q=F=>{window.clearTimeout(D),window.clearTimeout(Q);const J=window.setTimeout(()=>{C(!0),x==null||x(F)},a);U(J)},fe=F=>{F.persist(),xh(F)?h==null||h(F):wh(F)&&(m==null||m(F)),q(F)},je=F=>{window.clearTimeout(D),window.clearTimeout(Q);const J=window.setTimeout(()=>{C(!1),p==null||p(F)},c);V(J)},Ee=F=>{F.persist(),xh(F)?f==null||f(F):wh(F)&&(v==null||v(F)),je(F)},Re=G?Ee:void 0,Ce=G?fe:void 0,Ae=pe?fe:void 0,ge=pe?Ee:void 0,ce=G?0:void 0;return O.createElement(F1,{"data-testid":"tooltip-wrapper",onBlur:Re,onFocus:Ce,onMouseEnter:Ae,onMouseLeave:ge,tabIndex:ce},O.createElement(z1,{className:t,"data-testid":"tooltip",position:k,ref:b,show:A,style:S,...$},R),r)});M1.displayName="Tooltip";const fc=B(Lc)`
  white-space: nowrap;
`,Km=ne`
  :focus {
    outline: none;
  }

  ${({$disabled:t})=>t?"cursor: default;":ne`
          cursor: pointer;

          :focus {
            ${fc} {
              background: ${({theme:r})=>r.hoverBackground};
              color: ${({theme:r})=>r.materialTextInvert};
              outline: 2px dotted ${({theme:r})=>r.focusSecondary};
            }
          }
        `}
`,B1=B.ul`
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
`,U1=B.li`
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
`,H1=B.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`,W1=B.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({theme:t})=>t.materialText};
  user-select: none;
  padding-left: 18px;
  ${Km};

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
`,vh=B(Dc)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${Km};
`,V1=B.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;function kh(t,r){return t.includes(r)?t.filter(i=>i!==r):[...t,r]}function Sh(t){t.preventDefault()}function Gm({className:t,disabled:r,expanded:i,innerRef:l,level:a,select:c,selected:f,style:p,tree:h=[]}){const m=a===0,v=w.useCallback(x=>{var S,R;const k=!!(x.items&&x.items.length>0),$=i.includes(x.id),b=(S=r||x.disabled)!==null&&S!==void 0?S:!1,A=b?Sh:Q=>c(Q,x),C=b?Sh:Q=>c(Q,x),D=f===x.id,U=O.createElement(V1,{"aria-hidden":!0},x.icon);return O.createElement(U1,{key:x.label,isRootLevel:m,role:"treeitem","aria-expanded":$,"aria-selected":D,hasItems:k},k?O.createElement(H1,{open:$},O.createElement(W1,{onClick:A,$disabled:b},O.createElement(vh,{$disabled:b},U,O.createElement(fc,null,x.label))),$&&O.createElement(Gm,{className:t,disabled:b,expanded:i,level:a+1,select:c,selected:f,style:p,tree:(R=x.items)!==null&&R!==void 0?R:[]})):O.createElement(vh,{as:"button",$disabled:b,onClick:C},U,O.createElement(fc,null,x.label)))},[t,r,i,m,a,c,f,p]);return O.createElement(B1,{className:m?t:void 0,style:m?p:void 0,ref:m?l:void 0,role:m?"tree":"group",isRootLevel:m},h.map(v))}function Q1({className:t,defaultExpanded:r=[],defaultSelected:i,disabled:l=!1,expanded:a,onNodeSelect:c,onNodeToggle:f,selected:p,style:h,tree:m=[]},v){const[x,S]=ar({defaultValue:r,onChange:f,onChangePropName:"onNodeToggle",value:a,valuePropName:"expanded"}),[R,k]=ar({defaultValue:i,onChange:c,onChangePropName:"onNodeSelect",value:p,valuePropName:"selected"}),$=w.useCallback((C,D)=>{if(f){const U=kh(x,D);f(C,U)}S(U=>kh(U,D))},[x,f,S]),b=w.useCallback((C,D)=>{k(D),c&&c(C,D)},[c,k]),A=w.useCallback((C,D)=>{C.preventDefault(),b(C,D.id),D.items&&D.items.length&&$(C,D.id)},[b,$]);return O.createElement(Gm,{className:t,disabled:l,expanded:x,level:0,innerRef:v,select:A,selected:R,style:h,tree:m})}const K1=w.forwardRef(Q1);K1.displayName="TreeView";var Wu,Eh;function G1(){if(Eh)return Wu;Eh=1;var t={name:"original",anchor:"#1034a6",anchorVisited:"#440381",borderDark:"#848584",borderDarkest:"#0a0a0a",borderLight:"#dfdfdf",borderLightest:"#fefefe",canvas:"#ffffff",canvasText:"#0a0a0a",canvasTextDisabled:"#848584",canvasTextDisabledShadow:"#fefefe",canvasTextInvert:"#fefefe",checkmark:"#0a0a0a",checkmarkDisabled:"#848584",desktopBackground:"#008080",flatDark:"#9e9e9e",flatLight:"#d8d8d8",focusSecondary:"#fefe03",headerBackground:"#060084",headerNotActiveBackground:"#7f787f",headerNotActiveText:"#c6c6c6",headerText:"#fefefe",hoverBackground:"#060084",material:"#c6c6c6",materialDark:"#9a9e9c",materialText:"#0a0a0a",materialTextDisabled:"#848584",materialTextDisabledShadow:"#fefefe",materialTextInvert:"#fefefe",progress:"#060084",tooltip:"#fefbcc"};return Wu=t,Wu}var q1=G1();const Y1=tm(q1),X1="/assets/ms_sans_serif-Du8rjN1q.woff2",J1="/assets/ms_sans_serif_bold-D5dpRRHG.woff2";var di={},bh;function Z1(){if(bh)return di;bh=1,Object.defineProperty(di,"__esModule",{value:!0}),di.parse=f,di.serialize=m;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,l=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,c=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,R){const k=new c,$=S.length;if($<2)return k;const b=(R==null?void 0:R.decode)||v;let A=0;do{const C=S.indexOf("=",A);if(C===-1)break;const D=S.indexOf(";",A),U=D===-1?$:D;if(C>U){A=S.lastIndexOf(";",C-1)+1;continue}const Q=p(S,A,C),V=h(S,C,Q),G=S.slice(Q,V);if(k[G]===void 0){let pe=p(S,C+1,U),q=h(S,U,pe);const fe=b(S.slice(pe,q));k[G]=fe}A=U+1}while(A<$);return k}function p(S,R,k){do{const $=S.charCodeAt(R);if($!==32&&$!==9)return R}while(++R<k);return k}function h(S,R,k){for(;R>k;){const $=S.charCodeAt(--R);if($!==32&&$!==9)return R+1}return k}function m(S,R,k){const $=(k==null?void 0:k.encode)||encodeURIComponent;if(!t.test(S))throw new TypeError(`argument name is invalid: ${S}`);const b=$(R);if(!r.test(b))throw new TypeError(`argument val is invalid: ${R}`);let A=S+"="+b;if(!k)return A;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);A+="; Max-Age="+k.maxAge}if(k.domain){if(!i.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);A+="; Domain="+k.domain}if(k.path){if(!l.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);A+="; Path="+k.path}if(k.expires){if(!x(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);A+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(A+="; HttpOnly"),k.secure&&(A+="; Secure"),k.partitioned&&(A+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return A}function v(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function x(S){return a.call(S)==="[object Date]"}return di}Z1();/**
 * react-router v7.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ch="popstate";function ek(t={}){function r(l,a){let{pathname:c,search:f,hash:p}=l.location;return pc("",{pathname:c,search:f,hash:p},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function i(l,a){return typeof a=="string"?a:wi(a)}return nk(r,i,null,t)}function Qe(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}function xn(t,r){if(!t){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function tk(){return Math.random().toString(36).substring(2,10)}function Ah(t,r){return{usr:t.state,key:t.key,idx:r}}function pc(t,r,i=null,l){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof r=="string"?ko(r):r,state:i,key:r&&r.key||l||tk()}}function wi({pathname:t="/",search:r="",hash:i=""}){return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function ko(t){let r={};if(t){let i=t.indexOf("#");i>=0&&(r.hash=t.substring(i),t=t.substring(0,i));let l=t.indexOf("?");l>=0&&(r.search=t.substring(l),t=t.substring(0,l)),t&&(r.pathname=t)}return r}function nk(t,r,i,l={}){let{window:a=document.defaultView,v5Compat:c=!1}=l,f=a.history,p="POP",h=null,m=v();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function v(){return(f.state||{idx:null}).idx}function x(){p="POP";let b=v(),A=b==null?null:b-m;m=b,h&&h({action:p,location:$.location,delta:A})}function S(b,A){p="PUSH";let C=pc($.location,b,A);m=v()+1;let D=Ah(C,m),U=$.createHref(C);try{f.pushState(D,"",U)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;a.location.assign(U)}c&&h&&h({action:p,location:$.location,delta:1})}function R(b,A){p="REPLACE";let C=pc($.location,b,A);m=v();let D=Ah(C,m),U=$.createHref(C);f.replaceState(D,"",U),c&&h&&h({action:p,location:$.location,delta:0})}function k(b){let A=a.location.origin!=="null"?a.location.origin:a.location.href,C=typeof b=="string"?b:wi(b);return C=C.replace(/ $/,"%20"),Qe(A,`No window.location.(origin|href) available to create URL for href: ${C}`),new URL(C,A)}let $={get action(){return p},get location(){return t(a,f)},listen(b){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(Ch,x),h=b,()=>{a.removeEventListener(Ch,x),h=null}},createHref(b){return r(a,b)},createURL:k,encodeLocation(b){let A=k(b);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:S,replace:R,go(b){return f.go(b)}};return $}function qm(t,r,i="/"){return rk(t,r,i,!1)}function rk(t,r,i,l){let a=typeof r=="string"?ko(r):r,c=ur(a.pathname||"/",i);if(c==null)return null;let f=Ym(t);ok(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let m=mk(c);p=pk(f[h],m,l)}return p}function Ym(t,r=[],i=[],l=""){let a=(c,f,p)=>{let h={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};h.relativePath.startsWith("/")&&(Qe(h.relativePath.startsWith(l),`Absolute route path "${h.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(l.length));let m=Dn([l,h.relativePath]),v=i.concat(h);c.children&&c.children.length>0&&(Qe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ym(c.children,r,v,m)),!(c.path==null&&!c.index)&&r.push({path:m,score:dk(m,c.index),routesMeta:v})};return t.forEach((c,f)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))a(c,f);else for(let h of Xm(c.path))a(c,f,h)}),r}function Xm(t){let r=t.split("/");if(r.length===0)return[];let[i,...l]=r,a=i.endsWith("?"),c=i.replace(/\?$/,"");if(l.length===0)return a?[c,""]:[c];let f=Xm(l.join("/")),p=[];return p.push(...f.map(h=>h===""?c:[c,h].join("/"))),a&&p.push(...f),p.map(h=>t.startsWith("/")&&h===""?"/":h)}function ok(t){t.sort((r,i)=>r.score!==i.score?i.score-r.score:fk(r.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var ik=/^:[\w-]+$/,lk=3,sk=2,ak=1,uk=10,ck=-2,$h=t=>t==="*";function dk(t,r){let i=t.split("/"),l=i.length;return i.some($h)&&(l+=ck),r&&(l+=sk),i.filter(a=>!$h(a)).reduce((a,c)=>a+(ik.test(c)?lk:c===""?ak:uk),l)}function fk(t,r){return t.length===r.length&&t.slice(0,-1).every((l,a)=>l===r[a])?t[t.length-1]-r[r.length-1]:0}function pk(t,r,i=!1){let{routesMeta:l}=t,a={},c="/",f=[];for(let p=0;p<l.length;++p){let h=l[p],m=p===l.length-1,v=c==="/"?r:r.slice(c.length)||"/",x=cs({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v),S=h.route;if(!x&&m&&i&&!l[l.length-1].route.index&&(x=cs({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},v)),!x)return null;Object.assign(a,x.params),f.push({params:a,pathname:Dn([c,x.pathname]),pathnameBase:wk(Dn([c,x.pathnameBase])),route:S}),x.pathnameBase!=="/"&&(c=Dn([c,x.pathnameBase]))}return f}function cs(t,r){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,l]=hk(t.path,t.caseSensitive,t.end),a=r.match(i);if(!a)return null;let c=a[0],f=c.replace(/(.)\/+$/,"$1"),p=a.slice(1);return{params:l.reduce((m,{paramName:v,isOptional:x},S)=>{if(v==="*"){let k=p[S]||"";f=c.slice(0,c.length-k.length).replace(/(.)\/+$/,"$1")}const R=p[S];return x&&!R?m[v]=void 0:m[v]=(R||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:t}}function hk(t,r=!1,i=!0){xn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let l=[],a="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(l.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(l.push({paramName:"*"}),a+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?a+="\\/*$":t!==""&&t!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),l]}function mk(t){try{return t.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return xn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`),t}}function ur(t,r){if(r==="/")return t;if(!t.toLowerCase().startsWith(r.toLowerCase()))return null;let i=r.endsWith("/")?r.length-1:r.length,l=t.charAt(i);return l&&l!=="/"?null:t.slice(i)||"/"}function gk(t,r="/"){let{pathname:i,search:l="",hash:a=""}=typeof t=="string"?ko(t):t;return{pathname:i?i.startsWith("/")?i:yk(i,r):r,search:vk(l),hash:kk(a)}}function yk(t,r){let i=r.replace(/\/+$/,"").split("/");return t.split("/").forEach(a=>{a===".."?i.length>1&&i.pop():a!=="."&&i.push(a)}),i.length>1?i.join("/"):"/"}function Vu(t,r,i,l){return`Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xk(t){return t.filter((r,i)=>i===0||r.route.path&&r.route.path.length>0)}function Jm(t){let r=xk(t);return r.map((i,l)=>l===r.length-1?i.pathname:i.pathnameBase)}function Zm(t,r,i,l=!1){let a;typeof t=="string"?a=ko(t):(a={...t},Qe(!a.pathname||!a.pathname.includes("?"),Vu("?","pathname","search",a)),Qe(!a.pathname||!a.pathname.includes("#"),Vu("#","pathname","hash",a)),Qe(!a.search||!a.search.includes("#"),Vu("#","search","hash",a)));let c=t===""||a.pathname==="",f=c?"/":a.pathname,p;if(f==null)p=i;else{let x=r.length-1;if(!l&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),x-=1;a.pathname=S.join("/")}p=x>=0?r[x]:"/"}let h=gk(a,p),m=f&&f!=="/"&&f.endsWith("/"),v=(c||f===".")&&i.endsWith("/");return!h.pathname.endsWith("/")&&(m||v)&&(h.pathname+="/"),h}var Dn=t=>t.join("/").replace(/\/\/+/g,"/"),wk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,kk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Sk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var eg=["POST","PUT","PATCH","DELETE"];new Set(eg);var Ek=["GET",...eg];new Set(Ek);var So=w.createContext(null);So.displayName="DataRouter";var Ts=w.createContext(null);Ts.displayName="DataRouterState";var tg=w.createContext({isTransitioning:!1});tg.displayName="ViewTransition";var bk=w.createContext(new Map);bk.displayName="Fetchers";var Ck=w.createContext(null);Ck.displayName="Await";var vn=w.createContext(null);vn.displayName="Navigation";var Ei=w.createContext(null);Ei.displayName="Location";var On=w.createContext({outlet:null,matches:[],isDataRoute:!1});On.displayName="Route";var Fc=w.createContext(null);Fc.displayName="RouteError";function Ak(t,{relative:r}={}){Qe(bi(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=w.useContext(vn),{hash:a,pathname:c,search:f}=Ci(t,{relative:r}),p=c;return i!=="/"&&(p=c==="/"?i:Dn([i,c])),l.createHref({pathname:p,search:f,hash:a})}function bi(){return w.useContext(Ei)!=null}function Or(){return Qe(bi(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(Ei).location}var ng="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function rg(t){w.useContext(vn).static||w.useLayoutEffect(t)}function js(){let{isDataRoute:t}=w.useContext(On);return t?Fk():$k()}function $k(){Qe(bi(),"useNavigate() may be used only in the context of a <Router> component.");let t=w.useContext(So),{basename:r,navigator:i}=w.useContext(vn),{matches:l}=w.useContext(On),{pathname:a}=Or(),c=JSON.stringify(Jm(l)),f=w.useRef(!1);return rg(()=>{f.current=!0}),w.useCallback((h,m={})=>{if(xn(f.current,ng),!f.current)return;if(typeof h=="number"){i.go(h);return}let v=Zm(h,JSON.parse(c),a,m.relative==="path");t==null&&r!=="/"&&(v.pathname=v.pathname==="/"?r:Dn([r,v.pathname])),(m.replace?i.replace:i.push)(v,m.state,m)},[r,i,c,a,t])}w.createContext(null);function Ci(t,{relative:r}={}){let{matches:i}=w.useContext(On),{pathname:l}=Or(),a=JSON.stringify(Jm(i));return w.useMemo(()=>Zm(t,JSON.parse(a),l,r==="path"),[t,a,l,r])}function Rk(t,r){return og(t,r)}function og(t,r,i,l){var A;Qe(bi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=w.useContext(vn),{matches:c}=w.useContext(On),f=c[c.length-1],p=f?f.params:{},h=f?f.pathname:"/",m=f?f.pathnameBase:"/",v=f&&f.route;{let C=v&&v.path||"";ig(h,!v||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let x=Or(),S;if(r){let C=typeof r=="string"?ko(r):r;Qe(m==="/"||((A=C.pathname)==null?void 0:A.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${C.pathname}" was given in the \`location\` prop.`),S=C}else S=x;let R=S.pathname||"/",k=R;if(m!=="/"){let C=m.replace(/^\//,"").split("/");k="/"+R.replace(/^\//,"").split("/").slice(C.length).join("/")}let $=qm(t,{pathname:k});xn(v||$!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),xn($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=Ik($&&$.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:Dn([m,a.encodeLocation?a.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?m:Dn([m,a.encodeLocation?a.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),c,i,l);return r&&b?w.createElement(Ei.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},b):b}function Tk(){let t=zk(),r=Sk(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,l="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:l},c={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",t),f=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:c},"ErrorBoundary")," or"," ",w.createElement("code",{style:c},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},r),i?w.createElement("pre",{style:a},i):null,f)}var jk=w.createElement(Tk,null),Pk=class extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?w.createElement(On.Provider,{value:this.props.routeContext},w.createElement(Fc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Nk({routeContext:t,match:r,children:i}){let l=w.useContext(So);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(On.Provider,{value:t},i)}function Ik(t,r=[],i=null,l=null){if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(r.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let a=t,c=i==null?void 0:i.errors;if(c!=null){let h=a.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Qe(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),a=a.slice(0,Math.min(a.length,h+1))}let f=!1,p=-1;if(i)for(let h=0;h<a.length;h++){let m=a[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(p=h),m.route.id){let{loaderData:v,errors:x}=i,S=m.route.loader&&!v.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||S){f=!0,p>=0?a=a.slice(0,p+1):a=[a[0]];break}}}return a.reduceRight((h,m,v)=>{let x,S=!1,R=null,k=null;i&&(x=c&&m.route.id?c[m.route.id]:void 0,R=m.route.errorElement||jk,f&&(p<0&&v===0?(ig("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,k=null):p===v&&(S=!0,k=m.route.hydrateFallbackElement||null)));let $=r.concat(a.slice(0,v+1)),b=()=>{let A;return x?A=R:S?A=k:m.route.Component?A=w.createElement(m.route.Component,null):m.route.element?A=m.route.element:A=h,w.createElement(Nk,{match:m,routeContext:{outlet:h,matches:$,isDataRoute:i!=null},children:A})};return i&&(m.route.ErrorBoundary||m.route.errorElement||v===0)?w.createElement(Pk,{location:i.location,revalidation:i.revalidation,component:R,error:x,children:b(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):b()},null)}function Mc(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Dk(t){let r=w.useContext(So);return Qe(r,Mc(t)),r}function Lk(t){let r=w.useContext(Ts);return Qe(r,Mc(t)),r}function Ok(t){let r=w.useContext(On);return Qe(r,Mc(t)),r}function Bc(t){let r=Ok(t),i=r.matches[r.matches.length-1];return Qe(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function _k(){return Bc("useRouteId")}function zk(){var l;let t=w.useContext(Fc),r=Lk("useRouteError"),i=Bc("useRouteError");return t!==void 0?t:(l=r.errors)==null?void 0:l[i]}function Fk(){let{router:t}=Dk("useNavigate"),r=Bc("useNavigate"),i=w.useRef(!1);return rg(()=>{i.current=!0}),w.useCallback(async(a,c={})=>{xn(i.current,ng),i.current&&(typeof a=="number"?t.navigate(a):await t.navigate(a,{fromRouteId:r,...c}))},[t,r])}var Rh={};function ig(t,r,i){!r&&!Rh[t]&&(Rh[t]=!0,xn(!1,i))}w.memo(Mk);function Mk({routes:t,future:r,state:i}){return og(t,void 0,i,r)}function Yl(t){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Bk({basename:t="/",children:r=null,location:i,navigationType:l="POP",navigator:a,static:c=!1}){Qe(!bi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=t.replace(/^\/*/,"/"),p=w.useMemo(()=>({basename:f,navigator:a,static:c,future:{}}),[f,a,c]);typeof i=="string"&&(i=ko(i));let{pathname:h="/",search:m="",hash:v="",state:x=null,key:S="default"}=i,R=w.useMemo(()=>{let k=ur(h,f);return k==null?null:{location:{pathname:k,search:m,hash:v,state:x,key:S},navigationType:l}},[f,h,m,v,x,S,l]);return xn(R!=null,`<Router basename="${f}"> is not able to match the URL "${h}${m}${v}" because it does not start with the basename, so the <Router> won't render anything.`),R==null?null:w.createElement(vn.Provider,{value:p},w.createElement(Ei.Provider,{children:r,value:R}))}function Uk({children:t,location:r}){return Rk(hc(t),r)}function hc(t,r=[]){let i=[];return w.Children.forEach(t,(l,a)=>{if(!w.isValidElement(l))return;let c=[...r,a];if(l.type===w.Fragment){i.push.apply(i,hc(l.props.children,c));return}Qe(l.type===Yl,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||c.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=hc(l.props.children,c)),i.push(f)}),i}var Xl="get",Jl="application/x-www-form-urlencoded";function Ps(t){return t!=null&&typeof t.tagName=="string"}function Hk(t){return Ps(t)&&t.tagName.toLowerCase()==="button"}function Wk(t){return Ps(t)&&t.tagName.toLowerCase()==="form"}function Vk(t){return Ps(t)&&t.tagName.toLowerCase()==="input"}function Qk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Kk(t,r){return t.button===0&&(!r||r==="_self")&&!Qk(t)}var Ul=null;function Gk(){if(Ul===null)try{new FormData(document.createElement("form"),0),Ul=!1}catch{Ul=!0}return Ul}var qk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qu(t){return t!=null&&!qk.has(t)?(xn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jl}"`),null):t}function Yk(t,r){let i,l,a,c,f;if(Wk(t)){let p=t.getAttribute("action");l=p?ur(p,r):null,i=t.getAttribute("method")||Xl,a=Qu(t.getAttribute("enctype"))||Jl,c=new FormData(t)}else if(Hk(t)||Vk(t)&&(t.type==="submit"||t.type==="image")){let p=t.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||p.getAttribute("action");if(l=h?ur(h,r):null,i=t.getAttribute("formmethod")||p.getAttribute("method")||Xl,a=Qu(t.getAttribute("formenctype"))||Qu(p.getAttribute("enctype"))||Jl,c=new FormData(p,t),!Gk()){let{name:m,type:v,value:x}=t;if(v==="image"){let S=m?`${m}.`:"";c.append(`${S}x`,"0"),c.append(`${S}y`,"0")}else m&&c.append(m,x)}}else{if(Ps(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Xl,l=null,a=Jl,f=t}return c&&a==="text/plain"&&(f=c,c=void 0),{action:l,method:i.toLowerCase(),encType:a,formData:c,body:f}}function Uc(t,r){if(t===!1||t===null||typeof t>"u")throw new Error(r)}async function Xk(t,r){if(t.id in r)return r[t.id];try{let i=await import(t.module);return r[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Jk(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function Zk(t,r,i){let l=await Promise.all(t.map(async a=>{let c=r.routes[a.route.id];if(c){let f=await Xk(c,i);return f.links?f.links():[]}return[]}));return rS(l.flat(1).filter(Jk).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Th(t,r,i,l,a,c){let f=(h,m)=>i[m]?h.route.id!==i[m].route.id:!0,p=(h,m)=>{var v;return i[m].pathname!==h.pathname||((v=i[m].route.path)==null?void 0:v.endsWith("*"))&&i[m].params["*"]!==h.params["*"]};return c==="assets"?r.filter((h,m)=>f(h,m)||p(h,m)):c==="data"?r.filter((h,m)=>{var x;let v=l.routes[h.route.id];if(!v||!v.hasLoader)return!1;if(f(h,m)||p(h,m))return!0;if(h.route.shouldRevalidate){let S=h.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function eS(t,r){return tS(t.map(i=>{let l=r.routes[i.route.id];if(!l)return[];let a=[l.module];return l.imports&&(a=a.concat(l.imports)),a}).flat(1))}function tS(t){return[...new Set(t)]}function nS(t){let r={},i=Object.keys(t).sort();for(let l of i)r[l]=t[l];return r}function rS(t,r){let i=new Set;return new Set(r),t.reduce((l,a)=>{let c=JSON.stringify(nS(a));return i.has(c)||(i.add(c),l.push({key:c,link:a})),l},[])}function oS(t){let r=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return r.pathname==="/"?r.pathname="_root.data":r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function iS(){let t=w.useContext(So);return Uc(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function lS(){let t=w.useContext(Ts);return Uc(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Hc=w.createContext(void 0);Hc.displayName="FrameworkContext";function lg(){let t=w.useContext(Hc);return Uc(t,"You must render this element inside a <HydratedRouter> element"),t}function sS(t,r){let i=w.useContext(Hc),[l,a]=w.useState(!1),[c,f]=w.useState(!1),{onFocus:p,onBlur:h,onMouseEnter:m,onMouseLeave:v,onTouchStart:x}=r,S=w.useRef(null);w.useEffect(()=>{if(t==="render"&&f(!0),t==="viewport"){let $=A=>{A.forEach(C=>{f(C.isIntersecting)})},b=new IntersectionObserver($,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[t]),w.useEffect(()=>{if(l){let $=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout($)}}},[l]);let R=()=>{a(!0)},k=()=>{a(!1),f(!1)};return i?t!=="intent"?[c,S,{}]:[c,S,{onFocus:fi(p,R),onBlur:fi(h,k),onMouseEnter:fi(m,R),onMouseLeave:fi(v,k),onTouchStart:fi(x,R)}]:[!1,S,{}]}function fi(t,r){return i=>{t&&t(i),i.defaultPrevented||r(i)}}function aS({page:t,...r}){let{router:i}=iS(),l=w.useMemo(()=>qm(i.routes,t,i.basename),[i.routes,t,i.basename]);return l?w.createElement(cS,{page:t,matches:l,...r}):null}function uS(t){let{manifest:r,routeModules:i}=lg(),[l,a]=w.useState([]);return w.useEffect(()=>{let c=!1;return Zk(t,r,i).then(f=>{c||a(f)}),()=>{c=!0}},[t,r,i]),l}function cS({page:t,matches:r,...i}){let l=Or(),{manifest:a,routeModules:c}=lg(),{loaderData:f,matches:p}=lS(),h=w.useMemo(()=>Th(t,r,p,a,l,"data"),[t,r,p,a,l]),m=w.useMemo(()=>Th(t,r,p,a,l,"assets"),[t,r,p,a,l]),v=w.useMemo(()=>{if(t===l.pathname+l.search+l.hash)return[];let R=new Set,k=!1;if(r.forEach(b=>{var C;let A=a.routes[b.route.id];!A||!A.hasLoader||(!h.some(D=>D.route.id===b.route.id)&&b.route.id in f&&((C=c[b.route.id])!=null&&C.shouldRevalidate)||A.hasClientLoader?k=!0:R.add(b.route.id))}),R.size===0)return[];let $=oS(t);return k&&R.size>0&&$.searchParams.set("_routes",r.filter(b=>R.has(b.route.id)).map(b=>b.route.id).join(",")),[$.pathname+$.search]},[f,l,a,h,r,t,c]),x=w.useMemo(()=>eS(m,a),[m,a]),S=uS(m);return w.createElement(w.Fragment,null,v.map(R=>w.createElement("link",{key:R,rel:"prefetch",as:"fetch",href:R,...i})),x.map(R=>w.createElement("link",{key:R,rel:"modulepreload",href:R,...i})),S.map(({key:R,link:k})=>w.createElement("link",{key:R,...k})))}function dS(...t){return r=>{t.forEach(i=>{typeof i=="function"?i(r):i!=null&&(i.current=r)})}}var sg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{sg&&(window.__reactRouterVersion="7.1.3")}catch{}function fS({basename:t,children:r,window:i}){let l=w.useRef();l.current==null&&(l.current=ek({window:i,v5Compat:!0}));let a=l.current,[c,f]=w.useState({action:a.action,location:a.location}),p=w.useCallback(h=>{w.startTransition(()=>f(h))},[f]);return w.useLayoutEffect(()=>a.listen(p),[a,p]),w.createElement(Bk,{basename:t,children:r,location:c.location,navigationType:c.action,navigator:a})}var ag=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ug=w.forwardRef(function({onClick:r,discover:i="render",prefetch:l="none",relative:a,reloadDocument:c,replace:f,state:p,target:h,to:m,preventScrollReset:v,viewTransition:x,...S},R){let{basename:k}=w.useContext(vn),$=typeof m=="string"&&ag.test(m),b,A=!1;if(typeof m=="string"&&$&&(b=m,sg))try{let q=new URL(window.location.href),fe=m.startsWith("//")?new URL(q.protocol+m):new URL(m),je=ur(fe.pathname,k);fe.origin===q.origin&&je!=null?m=je+fe.search+fe.hash:A=!0}catch{xn(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=Ak(m,{relative:a}),[D,U,Q]=sS(l,S),V=gS(m,{replace:f,state:p,target:h,preventScrollReset:v,relative:a,viewTransition:x});function G(q){r&&r(q),q.defaultPrevented||V(q)}let pe=w.createElement("a",{...S,...Q,href:b||C,onClick:A||c?r:G,ref:dS(R,U),target:h,"data-discover":!$&&i==="render"?"true":void 0});return D&&!$?w.createElement(w.Fragment,null,pe,w.createElement(aS,{page:C})):pe});ug.displayName="Link";var pS=w.forwardRef(function({"aria-current":r="page",caseSensitive:i=!1,className:l="",end:a=!1,style:c,to:f,viewTransition:p,children:h,...m},v){let x=Ci(f,{relative:m.relative}),S=Or(),R=w.useContext(Ts),{navigator:k,basename:$}=w.useContext(vn),b=R!=null&&kS(x)&&p===!0,A=k.encodeLocation?k.encodeLocation(x).pathname:x.pathname,C=S.pathname,D=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(C=C.toLowerCase(),D=D?D.toLowerCase():null,A=A.toLowerCase()),D&&$&&(D=ur(D,$)||D);const U=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let Q=C===A||!a&&C.startsWith(A)&&C.charAt(U)==="/",V=D!=null&&(D===A||!a&&D.startsWith(A)&&D.charAt(A.length)==="/"),G={isActive:Q,isPending:V,isTransitioning:b},pe=Q?r:void 0,q;typeof l=="function"?q=l(G):q=[l,Q?"active":null,V?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let fe=typeof c=="function"?c(G):c;return w.createElement(ug,{...m,"aria-current":pe,className:q,ref:v,style:fe,to:f,viewTransition:p},typeof h=="function"?h(G):h)});pS.displayName="NavLink";var hS=w.forwardRef(({discover:t="render",fetcherKey:r,navigate:i,reloadDocument:l,replace:a,state:c,method:f=Xl,action:p,onSubmit:h,relative:m,preventScrollReset:v,viewTransition:x,...S},R)=>{let k=wS(),$=vS(p,{relative:m}),b=f.toLowerCase()==="get"?"get":"post",A=typeof p=="string"&&ag.test(p),C=D=>{if(h&&h(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,Q=(U==null?void 0:U.getAttribute("formmethod"))||f;k(U||D.currentTarget,{fetcherKey:r,method:Q,navigate:i,replace:a,state:c,relative:m,preventScrollReset:v,viewTransition:x})};return w.createElement("form",{ref:R,method:b,action:$,onSubmit:l?h:C,...S,"data-discover":!A&&t==="render"?"true":void 0})});hS.displayName="Form";function mS(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cg(t){let r=w.useContext(So);return Qe(r,mS(t)),r}function gS(t,{target:r,replace:i,state:l,preventScrollReset:a,relative:c,viewTransition:f}={}){let p=js(),h=Or(),m=Ci(t,{relative:c});return w.useCallback(v=>{if(Kk(v,r)){v.preventDefault();let x=i!==void 0?i:wi(h)===wi(m);p(t,{replace:x,state:l,preventScrollReset:a,relative:c,viewTransition:f})}},[h,p,m,i,l,r,t,a,c,f])}var yS=0,xS=()=>`__${String(++yS)}__`;function wS(){let{router:t}=cg("useSubmit"),{basename:r}=w.useContext(vn),i=_k();return w.useCallback(async(l,a={})=>{let{action:c,method:f,encType:p,formData:h,body:m}=Yk(l,r);if(a.navigate===!1){let v=a.fetcherKey||xS();await t.fetch(v,i,a.action||c,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||f,formEncType:a.encType||p,flushSync:a.flushSync})}else await t.navigate(a.action||c,{preventScrollReset:a.preventScrollReset,formData:h,body:m,formMethod:a.method||f,formEncType:a.encType||p,replace:a.replace,state:a.state,fromRouteId:i,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,r,i])}function vS(t,{relative:r}={}){let{basename:i}=w.useContext(vn),l=w.useContext(On);Qe(l,"useFormAction must be used inside a RouteContext");let[a]=l.matches.slice(-1),c={...Ci(t||".",{relative:r})},f=Or();if(t==null){c.search=f.search;let p=new URLSearchParams(c.search),h=p.getAll("index");if(h.some(v=>v==="")){p.delete("index"),h.filter(x=>x).forEach(x=>p.append("index",x));let v=p.toString();c.search=v?`?${v}`:""}}return(!t||t===".")&&a.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Dn([i,c.pathname])),wi(c)}function kS(t,r={}){let i=w.useContext(tg);Qe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=cg("useViewTransitionState"),a=Ci(t,{relative:r.relative});if(!i.isTransitioning)return!1;let c=ur(i.currentLocation.pathname,l)||i.currentLocation.pathname,f=ur(i.nextLocation.pathname,l)||i.nextLocation.pathname;return cs(a.pathname,f)!=null||cs(a.pathname,c)!=null}new TextEncoder;const ct=[];for(let t=0;t<256;++t)ct.push((t+256).toString(16).slice(1));function SS(t,r=0){return(ct[t[r+0]]+ct[t[r+1]]+ct[t[r+2]]+ct[t[r+3]]+"-"+ct[t[r+4]]+ct[t[r+5]]+"-"+ct[t[r+6]]+ct[t[r+7]]+"-"+ct[t[r+8]]+ct[t[r+9]]+"-"+ct[t[r+10]]+ct[t[r+11]]+ct[t[r+12]]+ct[t[r+13]]+ct[t[r+14]]+ct[t[r+15]]).toLowerCase()}let Ku;const ES=new Uint8Array(16);function bS(){if(!Ku){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ku=crypto.getRandomValues.bind(crypto)}return Ku(ES)}const CS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),jh={randomUUID:CS};function AS(t,r,i){var a;if(jh.randomUUID&&!t)return jh.randomUUID();t=t||{};const l=t.random??((a=t.rng)==null?void 0:a.call(t))??bS();if(l.length<16)throw new Error("Random bytes length must be >= 16");return l[6]=l[6]&15|64,l[8]=l[8]&63|128,SS(l)}function Ns(t){const r=[];for(const i of t.split("/"))if(!(i===""||i===".")){if(i===".."){r.pop();continue}r.push(i)}return r}function lr(t){return"/"+Ns(t).join("/")}function yo(...t){return lr(t.join("/"))}function gn(t){const r=Ns(t);return r.pop(),"/"+r.join("/")}function Kt(t){const r=Ns(t);return r.length?r[r.length-1]:""}class xe extends Error{constructor(r,i){super(i?`${r}: ${i}`:r),this.code=r,this.name="KernelError"}}class $S{constructor(r){Ve(this,"registry");Ve(this,"processes",new Map);Ve(this,"listeners",new Set);Ve(this,"persistence");Ve(this,"defaultLocation");Ve(this,"uid");Ve(this,"snapshot",[]);Ve(this,"vfs",null);Ve(this,"kernelFds",new Map);Ve(this,"nextFd",3);Ve(this,"subscribe",r=>(this.listeners.add(r),()=>this.listeners.delete(r)));Ve(this,"getSnapshot",()=>this.snapshot);this.registry=r.registry,this.persistence=r.persistence,this.defaultLocation=r.defaultWindowLocation??(()=>({x:400,y:300})),this.uid=r.uid??1e3,this.boot()}boot(){var i;const r=(i=this.persistence)==null?void 0:i.load();if(r)for(const l of r)this.registry.has(l.exec)&&this.processes.set(l.pid,this.hydrate(l));this.rebuildSnapshot()}hydrate(r){return{pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,icon:r.icon,argv:r.argv??[],state:r.state,priority:r.priority,window:r.window,cwd:r.cwd,fds:new Map,exitCode:null,startedAt:0}}persist(){if(!this.persistence)return;const r=this.snapshot.map(i=>({pid:i.pid,ppid:i.ppid,uid:i.uid,exec:i.exec,name:i.name,icon:i.icon,argv:i.argv,priority:i.priority,window:i.window,cwd:i.cwd,state:i.state}));this.persistence.save(r)}mountVfs(r){this.vfs=r}processInfo(){return this.sysPs()}rebuildSnapshot(){this.snapshot=[...this.processes.values()]}commit(){this.rebuildSnapshot(),this.persist();for(const r of this.listeners)r()}syscall(r,i,l){try{return Promise.resolve(this.dispatch(r,i,l))}catch(a){return Promise.reject(a)}}dispatch(r,i,l){var a;switch(i){case"spawn":return this.sysSpawn(r,l);case"exit":return this.sysExit(r,l.code??0);case"kill":return this.sysKill(l.pid);case"getpid":return r;case"getargv":return r?((a=this.processes.get(r))==null?void 0:a.argv)??[]:[];case"ps":return this.sysPs();case"win_focus":return this.sysFocus(l.pid);case"win_move":return this.sysMove(l.pid,l.location);case"open":return this.sysOpen(r,l.path,l.flags);case"read":return this.sysRead(r,l.fd,l.len);case"write":return this.sysWrite(r,l.fd,l.data);case"close":return this.sysClose(r,l.fd);case"readdir":return this.fs().readdir(l.path);case"stat":return this.fs().stat(l.path);case"mkdir":return this.fs().mkdir(l.path);case"unlink":return this.fs().unlink(l.path);default:throw new xe("ENOSYS",`unknown syscall: ${i}`)}}sysSpawn(r,i){const l=this.registry.get(i.exec);if(!l)throw new xe("ENOENT",`no program "${i.exec}" in /bin`);const a=AS();for(const c of this.processes.values())c.priority+=1;return this.processes.set(a,{pid:a,ppid:r,uid:this.uid,exec:i.exec,name:i.name??l.name,icon:i.icon??l.icon,argv:i.argv??[],state:"running",priority:0,window:i.location??this.defaultLocation(),cwd:"/home/user",fds:new Map,exitCode:null,startedAt:0}),this.commit(),a}sysKill(r){if(!this.processes.delete(r))throw new xe("ESRCH",`no process ${r}`);this.commit()}sysExit(r,i){r&&this.sysKill(r)}sysPs(){return this.snapshot.map(r=>({pid:r.pid,ppid:r.ppid,uid:r.uid,exec:r.exec,name:r.name,state:r.state,priority:r.priority}))}sysFocus(r){if(!this.processes.get(r))throw new xe("ESRCH",`no process ${r}`);let l=0;for(const a of this.processes.values())a.priority=a.pid===r?0:++l;this.commit()}sysMove(r,i){const l=this.processes.get(r);if(!l)throw new xe("ESRCH",`no process ${r}`);l.window=i,this.commit()}fs(){if(!this.vfs)throw new xe("ENOSYS","no filesystem mounted");return this.vfs}fdTable(r){if(r===null)return this.kernelFds;const i=this.processes.get(r);if(!i)throw new xe("ESRCH",`no process ${r}`);return i.fds}sysOpen(r,i,l){const a=this.fs(),c=lr(i),f=a.exists(c),p=l==="w"||l==="a"||l==="rw";if(f)l==="w"&&a.write(c,new Uint8Array);else{if(!p)throw new xe("ENOENT",c);a.write(c,new Uint8Array)}const h=l==="a"?a.stat(c).size:0,m=this.nextFd++;return this.fdTable(r).set(m,{path:c,flags:l,offset:h}),m}openFile(r,i){const l=this.fdTable(r).get(i);if(!l)throw new xe("EBADF",`bad fd ${i}`);return l}sysRead(r,i,l){const a=this.openFile(r,i);if(a.flags!=="r"&&a.flags!=="rw")throw new xe("EBADF","not opened for reading");const f=this.fs().read(a.path).slice(a.offset,a.offset+l);return a.offset+=f.length,f}sysWrite(r,i,l){const a=this.openFile(r,i);if(a.flags==="r")throw new xe("EBADF","not opened for writing");const c=this.fs().read(a.path),f=a.offset+l.length,p=new Uint8Array(Math.max(c.length,f));return p.set(c),p.set(l,a.offset),this.fs().write(a.path,p),a.offset=f,l.length}sysClose(r,i){if(!this.fdTable(r).delete(i))throw new xe("EBADF",`bad fd ${i}`)}}class RS{constructor(){Ve(this,"programs",new Map)}register(r){this.programs.set(r.exec,r)}get(r){return this.programs.get(r)}component(r){var i;return(i=this.programs.get(r))==null?void 0:i.component}has(r){return this.programs.has(r)}list(){return[...this.programs.values()]}}const dg=()=>g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{style:{minWidth:360,minHeight:140,display:"flex",alignItems:"center",justifyContent:"center",color:"#555"},children:"The Recycle Bin is empty."}),g.jsx(Pt,{variant:"well",className:"footer",children:"0 object(s)"})]}),fg=()=>g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsxs(xt,{style:{minWidth:360,minHeight:140,display:"flex",gap:24,padding:16},children:[g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("div",{style:{fontSize:40},children:"🖥️"}),g.jsx("span",{children:"VortexOS (C:)"})]}),g.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4},children:[g.jsx("div",{style:{fontSize:40},children:"📁"}),g.jsx("span",{children:"Control Panel"})]})]}),g.jsx(Pt,{variant:"well",className:"footer",children:"2 object(s)"})]});function TS(t,r){const i=(l,a)=>t.syscall(r,l,a);return{spawn:(l,a)=>i("spawn",{exec:l,...a}),exit:(l=0)=>i("exit",{code:l}),kill:l=>i("kill",{pid:l}),getpid:()=>i("getpid",{}),argv:()=>i("getargv",{}),ps:()=>i("ps",{}),focus:l=>i("win_focus",{pid:l}),move:(l,a)=>i("win_move",{pid:a??r,location:l}),open:(l,a="r")=>i("open",{path:l,flags:a}),read:(l,a)=>i("read",{fd:l,len:a}),write:(l,a)=>i("write",{fd:l,data:a}),close:l=>i("close",{fd:l}),readdir:l=>i("readdir",{path:l}),stat:l=>i("stat",{path:l}),mkdir:l=>i("mkdir",{path:l}),unlink:l=>i("unlink",{path:l}),async readFile(l){const{size:a}=await i("stat",{path:l}),c=await i("open",{path:l,flags:"r"});try{return await i("read",{fd:c,len:a})}finally{await i("close",{fd:c})}},async writeFile(l,a){const c=await i("open",{path:l,flags:"w"});try{await i("write",{fd:c,data:a})}finally{await i("close",{fd:c})}},async readTextFile(l){return new TextDecoder().decode(await this.readFile(l))},async writeTextFile(l,a){await this.writeFile(l,new TextEncoder().encode(a))}}}const pg=w.createContext(null);function jS({pid:t,children:r}){return g.jsx(pg.Provider,{value:t,children:r})}function PS(){return w.useContext(pg)}function Is(){const t=ed(),r=PS();return w.useMemo(()=>TS(t,r),[t,r])}const NS=()=>{const t=uy(),r=Is(),i=["PID","Name","Priority",""];return g.jsx(g.Fragment,{children:g.jsxs(Rs,{style:{width:"50vw"},children:[g.jsx(As,{children:g.jsx(Ir,{children:i.map(l=>g.jsx($s,{children:l},l))})}),g.jsx(Cs,{children:t.map(l=>g.jsxs(Ir,{children:[g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:l.pid.slice(0,8)}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:l.name}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:l.priority===0?"High":"Normal"}),g.jsx(dt,{onClick:()=>r.kill(l.pid),style:{textAlign:"center",verticalAlign:"middle",cursor:"pointer"},children:"Delete"})]},l.pid))})]})})},hg=()=>g.jsxs(g.Fragment,{children:[g.jsx(xt,{children:g.jsx(NS,{})}),g.jsx(Pt,{variant:"well",className:"footer",children:"See your running processes"})]});function Ds(t){const r=w.useRef(null),[i,l]=w.useState(null);return w.useEffect(()=>{if(!r.current)return;const a=r.current,c=Dos(a);return l(c),()=>{c.stop(),a&&(a.innerHTML="")}},[]),w.useEffect(()=>{i!==null&&i.run(t.bundleUrl)},[i,t.bundleUrl]),g.jsx("div",{ref:r,style:{width:"100%",height:"100%"}})}const mg=()=>g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{children:g.jsx("div",{style:{width:"800px",height:"600px"},children:g.jsx(Ds,{bundleUrl:"dos/final-DOOM.jsdos"})})}),g.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]}),gg=()=>g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{children:g.jsx("div",{style:{width:"800px",height:"600px"},children:g.jsx(Ds,{bundleUrl:"dos/doom2.jsdos"})})}),g.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]}),yg="/error.png",IS="/trust.png";function xg(t,r){return function(){return t.apply(r,arguments)}}const{toString:DS}=Object.prototype,{getPrototypeOf:Wc}=Object,Ls=(t=>r=>{const i=DS.call(r);return t[i]||(t[i]=i.slice(8,-1).toLowerCase())})(Object.create(null)),ln=t=>(t=t.toLowerCase(),r=>Ls(r)===t),Os=t=>r=>typeof r===t,{isArray:Eo}=Array,vi=Os("undefined");function LS(t){return t!==null&&!vi(t)&&t.constructor!==null&&!vi(t.constructor)&&zt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const wg=ln("ArrayBuffer");function OS(t){let r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(t):r=t&&t.buffer&&wg(t.buffer),r}const _S=Os("string"),zt=Os("function"),vg=Os("number"),_s=t=>t!==null&&typeof t=="object",zS=t=>t===!0||t===!1,Zl=t=>{if(Ls(t)!=="object")return!1;const r=Wc(t);return(r===null||r===Object.prototype||Object.getPrototypeOf(r)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},FS=ln("Date"),MS=ln("File"),BS=ln("Blob"),US=ln("FileList"),HS=t=>_s(t)&&zt(t.pipe),WS=t=>{let r;return t&&(typeof FormData=="function"&&t instanceof FormData||zt(t.append)&&((r=Ls(t))==="formdata"||r==="object"&&zt(t.toString)&&t.toString()==="[object FormData]"))},VS=ln("URLSearchParams"),[QS,KS,GS,qS]=["ReadableStream","Request","Response","Headers"].map(ln),YS=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ai(t,r,{allOwnKeys:i=!1}={}){if(t===null||typeof t>"u")return;let l,a;if(typeof t!="object"&&(t=[t]),Eo(t))for(l=0,a=t.length;l<a;l++)r.call(null,t[l],l,t);else{const c=i?Object.getOwnPropertyNames(t):Object.keys(t),f=c.length;let p;for(l=0;l<f;l++)p=c[l],r.call(null,t[p],p,t)}}function kg(t,r){r=r.toLowerCase();const i=Object.keys(t);let l=i.length,a;for(;l-- >0;)if(a=i[l],r===a.toLowerCase())return a;return null}const $r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Sg=t=>!vi(t)&&t!==$r;function mc(){const{caseless:t}=Sg(this)&&this||{},r={},i=(l,a)=>{const c=t&&kg(r,a)||a;Zl(r[c])&&Zl(l)?r[c]=mc(r[c],l):Zl(l)?r[c]=mc({},l):Eo(l)?r[c]=l.slice():r[c]=l};for(let l=0,a=arguments.length;l<a;l++)arguments[l]&&Ai(arguments[l],i);return r}const XS=(t,r,i,{allOwnKeys:l}={})=>(Ai(r,(a,c)=>{i&&zt(a)?t[c]=xg(a,i):t[c]=a},{allOwnKeys:l}),t),JS=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),ZS=(t,r,i,l)=>{t.prototype=Object.create(r.prototype,l),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:r.prototype}),i&&Object.assign(t.prototype,i)},eE=(t,r,i,l)=>{let a,c,f;const p={};if(r=r||{},t==null)return r;do{for(a=Object.getOwnPropertyNames(t),c=a.length;c-- >0;)f=a[c],(!l||l(f,t,r))&&!p[f]&&(r[f]=t[f],p[f]=!0);t=i!==!1&&Wc(t)}while(t&&(!i||i(t,r))&&t!==Object.prototype);return r},tE=(t,r,i)=>{t=String(t),(i===void 0||i>t.length)&&(i=t.length),i-=r.length;const l=t.indexOf(r,i);return l!==-1&&l===i},nE=t=>{if(!t)return null;if(Eo(t))return t;let r=t.length;if(!vg(r))return null;const i=new Array(r);for(;r-- >0;)i[r]=t[r];return i},rE=(t=>r=>t&&r instanceof t)(typeof Uint8Array<"u"&&Wc(Uint8Array)),oE=(t,r)=>{const l=(t&&t[Symbol.iterator]).call(t);let a;for(;(a=l.next())&&!a.done;){const c=a.value;r.call(t,c[0],c[1])}},iE=(t,r)=>{let i;const l=[];for(;(i=t.exec(r))!==null;)l.push(i);return l},lE=ln("HTMLFormElement"),sE=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(i,l,a){return l.toUpperCase()+a}),Ph=(({hasOwnProperty:t})=>(r,i)=>t.call(r,i))(Object.prototype),aE=ln("RegExp"),Eg=(t,r)=>{const i=Object.getOwnPropertyDescriptors(t),l={};Ai(i,(a,c)=>{let f;(f=r(a,c,t))!==!1&&(l[c]=f||a)}),Object.defineProperties(t,l)},uE=t=>{Eg(t,(r,i)=>{if(zt(t)&&["arguments","caller","callee"].indexOf(i)!==-1)return!1;const l=t[i];if(zt(l)){if(r.enumerable=!1,"writable"in r){r.writable=!1;return}r.set||(r.set=()=>{throw Error("Can not rewrite read-only method '"+i+"'")})}})},cE=(t,r)=>{const i={},l=a=>{a.forEach(c=>{i[c]=!0})};return Eo(t)?l(t):l(String(t).split(r)),i},dE=()=>{},fE=(t,r)=>t!=null&&Number.isFinite(t=+t)?t:r,Gu="abcdefghijklmnopqrstuvwxyz",Nh="0123456789",bg={DIGIT:Nh,ALPHA:Gu,ALPHA_DIGIT:Gu+Gu.toUpperCase()+Nh},pE=(t=16,r=bg.ALPHA_DIGIT)=>{let i="";const{length:l}=r;for(;t--;)i+=r[Math.random()*l|0];return i};function hE(t){return!!(t&&zt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const mE=t=>{const r=new Array(10),i=(l,a)=>{if(_s(l)){if(r.indexOf(l)>=0)return;if(!("toJSON"in l)){r[a]=l;const c=Eo(l)?[]:{};return Ai(l,(f,p)=>{const h=i(f,a+1);!vi(h)&&(c[p]=h)}),r[a]=void 0,c}}return l};return i(t,0)},gE=ln("AsyncFunction"),yE=t=>t&&(_s(t)||zt(t))&&zt(t.then)&&zt(t.catch),Cg=((t,r)=>t?setImmediate:r?((i,l)=>($r.addEventListener("message",({source:a,data:c})=>{a===$r&&c===i&&l.length&&l.shift()()},!1),a=>{l.push(a),$r.postMessage(i,"*")}))(`axios@${Math.random()}`,[]):i=>setTimeout(i))(typeof setImmediate=="function",zt($r.postMessage)),xE=typeof queueMicrotask<"u"?queueMicrotask.bind($r):typeof process<"u"&&process.nextTick||Cg,_={isArray:Eo,isArrayBuffer:wg,isBuffer:LS,isFormData:WS,isArrayBufferView:OS,isString:_S,isNumber:vg,isBoolean:zS,isObject:_s,isPlainObject:Zl,isReadableStream:QS,isRequest:KS,isResponse:GS,isHeaders:qS,isUndefined:vi,isDate:FS,isFile:MS,isBlob:BS,isRegExp:aE,isFunction:zt,isStream:HS,isURLSearchParams:VS,isTypedArray:rE,isFileList:US,forEach:Ai,merge:mc,extend:XS,trim:YS,stripBOM:JS,inherits:ZS,toFlatObject:eE,kindOf:Ls,kindOfTest:ln,endsWith:tE,toArray:nE,forEachEntry:oE,matchAll:iE,isHTMLForm:lE,hasOwnProperty:Ph,hasOwnProp:Ph,reduceDescriptors:Eg,freezeMethods:uE,toObjectSet:cE,toCamelCase:sE,noop:dE,toFiniteNumber:fE,findKey:kg,global:$r,isContextDefined:Sg,ALPHABET:bg,generateString:pE,isSpecCompliantForm:hE,toJSONObject:mE,isAsyncFn:gE,isThenable:yE,setImmediate:Cg,asap:xE};function Se(t,r,i,l,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",r&&(this.code=r),i&&(this.config=i),l&&(this.request=l),a&&(this.response=a,this.status=a.status?a.status:null)}_.inherits(Se,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:_.toJSONObject(this.config),code:this.code,status:this.status}}});const Ag=Se.prototype,$g={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{$g[t]={value:t}});Object.defineProperties(Se,$g);Object.defineProperty(Ag,"isAxiosError",{value:!0});Se.from=(t,r,i,l,a,c)=>{const f=Object.create(Ag);return _.toFlatObject(t,f,function(h){return h!==Error.prototype},p=>p!=="isAxiosError"),Se.call(f,t.message,r,i,l,a),f.cause=t,f.name=t.name,c&&Object.assign(f,c),f};const wE=null;function gc(t){return _.isPlainObject(t)||_.isArray(t)}function Rg(t){return _.endsWith(t,"[]")?t.slice(0,-2):t}function Ih(t,r,i){return t?t.concat(r).map(function(a,c){return a=Rg(a),!i&&c?"["+a+"]":a}).join(i?".":""):r}function vE(t){return _.isArray(t)&&!t.some(gc)}const kE=_.toFlatObject(_,{},null,function(r){return/^is[A-Z]/.test(r)});function zs(t,r,i){if(!_.isObject(t))throw new TypeError("target must be an object");r=r||new FormData,i=_.toFlatObject(i,{metaTokens:!0,dots:!1,indexes:!1},!1,function($,b){return!_.isUndefined(b[$])});const l=i.metaTokens,a=i.visitor||v,c=i.dots,f=i.indexes,h=(i.Blob||typeof Blob<"u"&&Blob)&&_.isSpecCompliantForm(r);if(!_.isFunction(a))throw new TypeError("visitor must be a function");function m(k){if(k===null)return"";if(_.isDate(k))return k.toISOString();if(!h&&_.isBlob(k))throw new Se("Blob is not supported. Use a Buffer instead.");return _.isArrayBuffer(k)||_.isTypedArray(k)?h&&typeof Blob=="function"?new Blob([k]):Buffer.from(k):k}function v(k,$,b){let A=k;if(k&&!b&&typeof k=="object"){if(_.endsWith($,"{}"))$=l?$:$.slice(0,-2),k=JSON.stringify(k);else if(_.isArray(k)&&vE(k)||(_.isFileList(k)||_.endsWith($,"[]"))&&(A=_.toArray(k)))return $=Rg($),A.forEach(function(D,U){!(_.isUndefined(D)||D===null)&&r.append(f===!0?Ih([$],U,c):f===null?$:$+"[]",m(D))}),!1}return gc(k)?!0:(r.append(Ih(b,$,c),m(k)),!1)}const x=[],S=Object.assign(kE,{defaultVisitor:v,convertValue:m,isVisitable:gc});function R(k,$){if(!_.isUndefined(k)){if(x.indexOf(k)!==-1)throw Error("Circular reference detected in "+$.join("."));x.push(k),_.forEach(k,function(A,C){(!(_.isUndefined(A)||A===null)&&a.call(r,A,_.isString(C)?C.trim():C,$,S))===!0&&R(A,$?$.concat(C):[C])}),x.pop()}}if(!_.isObject(t))throw new TypeError("data must be an object");return R(t),r}function Dh(t){const r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(l){return r[l]})}function Vc(t,r){this._pairs=[],t&&zs(t,this,r)}const Tg=Vc.prototype;Tg.append=function(r,i){this._pairs.push([r,i])};Tg.toString=function(r){const i=r?function(l){return r.call(this,l,Dh)}:Dh;return this._pairs.map(function(a){return i(a[0])+"="+i(a[1])},"").join("&")};function SE(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function jg(t,r,i){if(!r)return t;const l=i&&i.encode||SE;_.isFunction(i)&&(i={serialize:i});const a=i&&i.serialize;let c;if(a?c=a(r,i):c=_.isURLSearchParams(r)?r.toString():new Vc(r,i).toString(l),c){const f=t.indexOf("#");f!==-1&&(t=t.slice(0,f)),t+=(t.indexOf("?")===-1?"?":"&")+c}return t}class Lh{constructor(){this.handlers=[]}use(r,i,l){return this.handlers.push({fulfilled:r,rejected:i,synchronous:l?l.synchronous:!1,runWhen:l?l.runWhen:null}),this.handlers.length-1}eject(r){this.handlers[r]&&(this.handlers[r]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(r){_.forEach(this.handlers,function(l){l!==null&&r(l)})}}const Pg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},EE=typeof URLSearchParams<"u"?URLSearchParams:Vc,bE=typeof FormData<"u"?FormData:null,CE=typeof Blob<"u"?Blob:null,AE={isBrowser:!0,classes:{URLSearchParams:EE,FormData:bE,Blob:CE},protocols:["http","https","file","blob","url","data"]},Qc=typeof window<"u"&&typeof document<"u",yc=typeof navigator=="object"&&navigator||void 0,$E=Qc&&(!yc||["ReactNative","NativeScript","NS"].indexOf(yc.product)<0),RE=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",TE=Qc&&window.location.href||"http://localhost",jE=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qc,hasStandardBrowserEnv:$E,hasStandardBrowserWebWorkerEnv:RE,navigator:yc,origin:TE},Symbol.toStringTag,{value:"Module"})),yt={...jE,...AE};function PE(t,r){return zs(t,new yt.classes.URLSearchParams,Object.assign({visitor:function(i,l,a,c){return yt.isNode&&_.isBuffer(i)?(this.append(l,i.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)}},r))}function NE(t){return _.matchAll(/\w+|\[(\w*)]/g,t).map(r=>r[0]==="[]"?"":r[1]||r[0])}function IE(t){const r={},i=Object.keys(t);let l;const a=i.length;let c;for(l=0;l<a;l++)c=i[l],r[c]=t[c];return r}function Ng(t){function r(i,l,a,c){let f=i[c++];if(f==="__proto__")return!0;const p=Number.isFinite(+f),h=c>=i.length;return f=!f&&_.isArray(a)?a.length:f,h?(_.hasOwnProp(a,f)?a[f]=[a[f],l]:a[f]=l,!p):((!a[f]||!_.isObject(a[f]))&&(a[f]=[]),r(i,l,a[f],c)&&_.isArray(a[f])&&(a[f]=IE(a[f])),!p)}if(_.isFormData(t)&&_.isFunction(t.entries)){const i={};return _.forEachEntry(t,(l,a)=>{r(NE(l),a,i,0)}),i}return null}function DE(t,r,i){if(_.isString(t))try{return(r||JSON.parse)(t),_.trim(t)}catch(l){if(l.name!=="SyntaxError")throw l}return(0,JSON.stringify)(t)}const $i={transitional:Pg,adapter:["xhr","http","fetch"],transformRequest:[function(r,i){const l=i.getContentType()||"",a=l.indexOf("application/json")>-1,c=_.isObject(r);if(c&&_.isHTMLForm(r)&&(r=new FormData(r)),_.isFormData(r))return a?JSON.stringify(Ng(r)):r;if(_.isArrayBuffer(r)||_.isBuffer(r)||_.isStream(r)||_.isFile(r)||_.isBlob(r)||_.isReadableStream(r))return r;if(_.isArrayBufferView(r))return r.buffer;if(_.isURLSearchParams(r))return i.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),r.toString();let p;if(c){if(l.indexOf("application/x-www-form-urlencoded")>-1)return PE(r,this.formSerializer).toString();if((p=_.isFileList(r))||l.indexOf("multipart/form-data")>-1){const h=this.env&&this.env.FormData;return zs(p?{"files[]":r}:r,h&&new h,this.formSerializer)}}return c||a?(i.setContentType("application/json",!1),DE(r)):r}],transformResponse:[function(r){const i=this.transitional||$i.transitional,l=i&&i.forcedJSONParsing,a=this.responseType==="json";if(_.isResponse(r)||_.isReadableStream(r))return r;if(r&&_.isString(r)&&(l&&!this.responseType||a)){const f=!(i&&i.silentJSONParsing)&&a;try{return JSON.parse(r)}catch(p){if(f)throw p.name==="SyntaxError"?Se.from(p,Se.ERR_BAD_RESPONSE,this,null,this.response):p}}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};_.forEach(["delete","get","head","post","put","patch"],t=>{$i.headers[t]={}});const LE=_.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),OE=t=>{const r={};let i,l,a;return t&&t.split(`
`).forEach(function(f){a=f.indexOf(":"),i=f.substring(0,a).trim().toLowerCase(),l=f.substring(a+1).trim(),!(!i||r[i]&&LE[i])&&(i==="set-cookie"?r[i]?r[i].push(l):r[i]=[l]:r[i]=r[i]?r[i]+", "+l:l)}),r},Oh=Symbol("internals");function pi(t){return t&&String(t).trim().toLowerCase()}function es(t){return t===!1||t==null?t:_.isArray(t)?t.map(es):String(t)}function _E(t){const r=Object.create(null),i=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let l;for(;l=i.exec(t);)r[l[1]]=l[2];return r}const zE=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function qu(t,r,i,l,a){if(_.isFunction(l))return l.call(this,r,i);if(a&&(r=i),!!_.isString(r)){if(_.isString(l))return r.indexOf(l)!==-1;if(_.isRegExp(l))return l.test(r)}}function FE(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(r,i,l)=>i.toUpperCase()+l)}function ME(t,r){const i=_.toCamelCase(" "+r);["get","set","has"].forEach(l=>{Object.defineProperty(t,l+i,{value:function(a,c,f){return this[l].call(this,r,a,c,f)},configurable:!0})})}class Tt{constructor(r){r&&this.set(r)}set(r,i,l){const a=this;function c(p,h,m){const v=pi(h);if(!v)throw new Error("header name must be a non-empty string");const x=_.findKey(a,v);(!x||a[x]===void 0||m===!0||m===void 0&&a[x]!==!1)&&(a[x||h]=es(p))}const f=(p,h)=>_.forEach(p,(m,v)=>c(m,v,h));if(_.isPlainObject(r)||r instanceof this.constructor)f(r,i);else if(_.isString(r)&&(r=r.trim())&&!zE(r))f(OE(r),i);else if(_.isHeaders(r))for(const[p,h]of r.entries())c(h,p,l);else r!=null&&c(i,r,l);return this}get(r,i){if(r=pi(r),r){const l=_.findKey(this,r);if(l){const a=this[l];if(!i)return a;if(i===!0)return _E(a);if(_.isFunction(i))return i.call(this,a,l);if(_.isRegExp(i))return i.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(r,i){if(r=pi(r),r){const l=_.findKey(this,r);return!!(l&&this[l]!==void 0&&(!i||qu(this,this[l],l,i)))}return!1}delete(r,i){const l=this;let a=!1;function c(f){if(f=pi(f),f){const p=_.findKey(l,f);p&&(!i||qu(l,l[p],p,i))&&(delete l[p],a=!0)}}return _.isArray(r)?r.forEach(c):c(r),a}clear(r){const i=Object.keys(this);let l=i.length,a=!1;for(;l--;){const c=i[l];(!r||qu(this,this[c],c,r,!0))&&(delete this[c],a=!0)}return a}normalize(r){const i=this,l={};return _.forEach(this,(a,c)=>{const f=_.findKey(l,c);if(f){i[f]=es(a),delete i[c];return}const p=r?FE(c):String(c).trim();p!==c&&delete i[c],i[p]=es(a),l[p]=!0}),this}concat(...r){return this.constructor.concat(this,...r)}toJSON(r){const i=Object.create(null);return _.forEach(this,(l,a)=>{l!=null&&l!==!1&&(i[a]=r&&_.isArray(l)?l.join(", "):l)}),i}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([r,i])=>r+": "+i).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(r){return r instanceof this?r:new this(r)}static concat(r,...i){const l=new this(r);return i.forEach(a=>l.set(a)),l}static accessor(r){const l=(this[Oh]=this[Oh]={accessors:{}}).accessors,a=this.prototype;function c(f){const p=pi(f);l[p]||(ME(a,f),l[p]=!0)}return _.isArray(r)?r.forEach(c):c(r),this}}Tt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);_.reduceDescriptors(Tt.prototype,({value:t},r)=>{let i=r[0].toUpperCase()+r.slice(1);return{get:()=>t,set(l){this[i]=l}}});_.freezeMethods(Tt);function Yu(t,r){const i=this||$i,l=r||i,a=Tt.from(l.headers);let c=l.data;return _.forEach(t,function(p){c=p.call(i,c,a.normalize(),r?r.status:void 0)}),a.normalize(),c}function Ig(t){return!!(t&&t.__CANCEL__)}function bo(t,r,i){Se.call(this,t??"canceled",Se.ERR_CANCELED,r,i),this.name="CanceledError"}_.inherits(bo,Se,{__CANCEL__:!0});function Dg(t,r,i){const l=i.config.validateStatus;!i.status||!l||l(i.status)?t(i):r(new Se("Request failed with status code "+i.status,[Se.ERR_BAD_REQUEST,Se.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}function BE(t){const r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return r&&r[1]||""}function UE(t,r){t=t||10;const i=new Array(t),l=new Array(t);let a=0,c=0,f;return r=r!==void 0?r:1e3,function(h){const m=Date.now(),v=l[c];f||(f=m),i[a]=h,l[a]=m;let x=c,S=0;for(;x!==a;)S+=i[x++],x=x%t;if(a=(a+1)%t,a===c&&(c=(c+1)%t),m-f<r)return;const R=v&&m-v;return R?Math.round(S*1e3/R):void 0}}function HE(t,r){let i=0,l=1e3/r,a,c;const f=(m,v=Date.now())=>{i=v,a=null,c&&(clearTimeout(c),c=null),t.apply(null,m)};return[(...m)=>{const v=Date.now(),x=v-i;x>=l?f(m,v):(a=m,c||(c=setTimeout(()=>{c=null,f(a)},l-x)))},()=>a&&f(a)]}const ds=(t,r,i=3)=>{let l=0;const a=UE(50,250);return HE(c=>{const f=c.loaded,p=c.lengthComputable?c.total:void 0,h=f-l,m=a(h),v=f<=p;l=f;const x={loaded:f,total:p,progress:p?f/p:void 0,bytes:h,rate:m||void 0,estimated:m&&p&&v?(p-f)/m:void 0,event:c,lengthComputable:p!=null,[r?"download":"upload"]:!0};t(x)},i)},_h=(t,r)=>{const i=t!=null;return[l=>r[0]({lengthComputable:i,total:t,loaded:l}),r[1]]},zh=t=>(...r)=>_.asap(()=>t(...r)),WE=yt.hasStandardBrowserEnv?((t,r)=>i=>(i=new URL(i,yt.origin),t.protocol===i.protocol&&t.host===i.host&&(r||t.port===i.port)))(new URL(yt.origin),yt.navigator&&/(msie|trident)/i.test(yt.navigator.userAgent)):()=>!0,VE=yt.hasStandardBrowserEnv?{write(t,r,i,l,a,c){const f=[t+"="+encodeURIComponent(r)];_.isNumber(i)&&f.push("expires="+new Date(i).toGMTString()),_.isString(l)&&f.push("path="+l),_.isString(a)&&f.push("domain="+a),c===!0&&f.push("secure"),document.cookie=f.join("; ")},read(t){const r=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function QE(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function KE(t,r){return r?t.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):t}function Lg(t,r){return t&&!QE(r)?KE(t,r):r}const Fh=t=>t instanceof Tt?{...t}:t;function Dr(t,r){r=r||{};const i={};function l(m,v,x,S){return _.isPlainObject(m)&&_.isPlainObject(v)?_.merge.call({caseless:S},m,v):_.isPlainObject(v)?_.merge({},v):_.isArray(v)?v.slice():v}function a(m,v,x,S){if(_.isUndefined(v)){if(!_.isUndefined(m))return l(void 0,m,x,S)}else return l(m,v,x,S)}function c(m,v){if(!_.isUndefined(v))return l(void 0,v)}function f(m,v){if(_.isUndefined(v)){if(!_.isUndefined(m))return l(void 0,m)}else return l(void 0,v)}function p(m,v,x){if(x in r)return l(m,v);if(x in t)return l(void 0,m)}const h={url:c,method:c,data:c,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:p,headers:(m,v,x)=>a(Fh(m),Fh(v),x,!0)};return _.forEach(Object.keys(Object.assign({},t,r)),function(v){const x=h[v]||a,S=x(t[v],r[v],v);_.isUndefined(S)&&x!==p||(i[v]=S)}),i}const Og=t=>{const r=Dr({},t);let{data:i,withXSRFToken:l,xsrfHeaderName:a,xsrfCookieName:c,headers:f,auth:p}=r;r.headers=f=Tt.from(f),r.url=jg(Lg(r.baseURL,r.url),t.params,t.paramsSerializer),p&&f.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let h;if(_.isFormData(i)){if(yt.hasStandardBrowserEnv||yt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((h=f.getContentType())!==!1){const[m,...v]=h?h.split(";").map(x=>x.trim()).filter(Boolean):[];f.setContentType([m||"multipart/form-data",...v].join("; "))}}if(yt.hasStandardBrowserEnv&&(l&&_.isFunction(l)&&(l=l(r)),l||l!==!1&&WE(r.url))){const m=a&&c&&VE.read(c);m&&f.set(a,m)}return r},GE=typeof XMLHttpRequest<"u",qE=GE&&function(t){return new Promise(function(i,l){const a=Og(t);let c=a.data;const f=Tt.from(a.headers).normalize();let{responseType:p,onUploadProgress:h,onDownloadProgress:m}=a,v,x,S,R,k;function $(){R&&R(),k&&k(),a.cancelToken&&a.cancelToken.unsubscribe(v),a.signal&&a.signal.removeEventListener("abort",v)}let b=new XMLHttpRequest;b.open(a.method.toUpperCase(),a.url,!0),b.timeout=a.timeout;function A(){if(!b)return;const D=Tt.from("getAllResponseHeaders"in b&&b.getAllResponseHeaders()),Q={data:!p||p==="text"||p==="json"?b.responseText:b.response,status:b.status,statusText:b.statusText,headers:D,config:t,request:b};Dg(function(G){i(G),$()},function(G){l(G),$()},Q),b=null}"onloadend"in b?b.onloadend=A:b.onreadystatechange=function(){!b||b.readyState!==4||b.status===0&&!(b.responseURL&&b.responseURL.indexOf("file:")===0)||setTimeout(A)},b.onabort=function(){b&&(l(new Se("Request aborted",Se.ECONNABORTED,t,b)),b=null)},b.onerror=function(){l(new Se("Network Error",Se.ERR_NETWORK,t,b)),b=null},b.ontimeout=function(){let U=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const Q=a.transitional||Pg;a.timeoutErrorMessage&&(U=a.timeoutErrorMessage),l(new Se(U,Q.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,t,b)),b=null},c===void 0&&f.setContentType(null),"setRequestHeader"in b&&_.forEach(f.toJSON(),function(U,Q){b.setRequestHeader(Q,U)}),_.isUndefined(a.withCredentials)||(b.withCredentials=!!a.withCredentials),p&&p!=="json"&&(b.responseType=a.responseType),m&&([S,k]=ds(m,!0),b.addEventListener("progress",S)),h&&b.upload&&([x,R]=ds(h),b.upload.addEventListener("progress",x),b.upload.addEventListener("loadend",R)),(a.cancelToken||a.signal)&&(v=D=>{b&&(l(!D||D.type?new bo(null,t,b):D),b.abort(),b=null)},a.cancelToken&&a.cancelToken.subscribe(v),a.signal&&(a.signal.aborted?v():a.signal.addEventListener("abort",v)));const C=BE(a.url);if(C&&yt.protocols.indexOf(C)===-1){l(new Se("Unsupported protocol "+C+":",Se.ERR_BAD_REQUEST,t));return}b.send(c||null)})},YE=(t,r)=>{const{length:i}=t=t?t.filter(Boolean):[];if(r||i){let l=new AbortController,a;const c=function(m){if(!a){a=!0,p();const v=m instanceof Error?m:this.reason;l.abort(v instanceof Se?v:new bo(v instanceof Error?v.message:v))}};let f=r&&setTimeout(()=>{f=null,c(new Se(`timeout ${r} of ms exceeded`,Se.ETIMEDOUT))},r);const p=()=>{t&&(f&&clearTimeout(f),f=null,t.forEach(m=>{m.unsubscribe?m.unsubscribe(c):m.removeEventListener("abort",c)}),t=null)};t.forEach(m=>m.addEventListener("abort",c));const{signal:h}=l;return h.unsubscribe=()=>_.asap(p),h}},XE=function*(t,r){let i=t.byteLength;if(i<r){yield t;return}let l=0,a;for(;l<i;)a=l+r,yield t.slice(l,a),l=a},JE=async function*(t,r){for await(const i of ZE(t))yield*XE(i,r)},ZE=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const r=t.getReader();try{for(;;){const{done:i,value:l}=await r.read();if(i)break;yield l}}finally{await r.cancel()}},Mh=(t,r,i,l)=>{const a=JE(t,r);let c=0,f,p=h=>{f||(f=!0,l&&l(h))};return new ReadableStream({async pull(h){try{const{done:m,value:v}=await a.next();if(m){p(),h.close();return}let x=v.byteLength;if(i){let S=c+=x;i(S)}h.enqueue(new Uint8Array(v))}catch(m){throw p(m),m}},cancel(h){return p(h),a.return()}},{highWaterMark:2})},Fs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",_g=Fs&&typeof ReadableStream=="function",eb=Fs&&(typeof TextEncoder=="function"?(t=>r=>t.encode(r))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),zg=(t,...r)=>{try{return!!t(...r)}catch{return!1}},tb=_g&&zg(()=>{let t=!1;const r=new Request(yt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!r}),Bh=64*1024,xc=_g&&zg(()=>_.isReadableStream(new Response("").body)),fs={stream:xc&&(t=>t.body)};Fs&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(r=>{!fs[r]&&(fs[r]=_.isFunction(t[r])?i=>i[r]():(i,l)=>{throw new Se(`Response type '${r}' is not supported`,Se.ERR_NOT_SUPPORT,l)})})})(new Response);const nb=async t=>{if(t==null)return 0;if(_.isBlob(t))return t.size;if(_.isSpecCompliantForm(t))return(await new Request(yt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(_.isArrayBufferView(t)||_.isArrayBuffer(t))return t.byteLength;if(_.isURLSearchParams(t)&&(t=t+""),_.isString(t))return(await eb(t)).byteLength},rb=async(t,r)=>{const i=_.toFiniteNumber(t.getContentLength());return i??nb(r)},ob=Fs&&(async t=>{let{url:r,method:i,data:l,signal:a,cancelToken:c,timeout:f,onDownloadProgress:p,onUploadProgress:h,responseType:m,headers:v,withCredentials:x="same-origin",fetchOptions:S}=Og(t);m=m?(m+"").toLowerCase():"text";let R=YE([a,c&&c.toAbortSignal()],f),k;const $=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let b;try{if(h&&tb&&i!=="get"&&i!=="head"&&(b=await rb(v,l))!==0){let Q=new Request(r,{method:"POST",body:l,duplex:"half"}),V;if(_.isFormData(l)&&(V=Q.headers.get("content-type"))&&v.setContentType(V),Q.body){const[G,pe]=_h(b,ds(zh(h)));l=Mh(Q.body,Bh,G,pe)}}_.isString(x)||(x=x?"include":"omit");const A="credentials"in Request.prototype;k=new Request(r,{...S,signal:R,method:i.toUpperCase(),headers:v.normalize().toJSON(),body:l,duplex:"half",credentials:A?x:void 0});let C=await fetch(k);const D=xc&&(m==="stream"||m==="response");if(xc&&(p||D&&$)){const Q={};["status","statusText","headers"].forEach(q=>{Q[q]=C[q]});const V=_.toFiniteNumber(C.headers.get("content-length")),[G,pe]=p&&_h(V,ds(zh(p),!0))||[];C=new Response(Mh(C.body,Bh,G,()=>{pe&&pe(),$&&$()}),Q)}m=m||"text";let U=await fs[_.findKey(fs,m)||"text"](C,t);return!D&&$&&$(),await new Promise((Q,V)=>{Dg(Q,V,{data:U,headers:Tt.from(C.headers),status:C.status,statusText:C.statusText,config:t,request:k})})}catch(A){throw $&&$(),A&&A.name==="TypeError"&&/fetch/i.test(A.message)?Object.assign(new Se("Network Error",Se.ERR_NETWORK,t,k),{cause:A.cause||A}):Se.from(A,A&&A.code,t,k)}}),wc={http:wE,xhr:qE,fetch:ob};_.forEach(wc,(t,r)=>{if(t){try{Object.defineProperty(t,"name",{value:r})}catch{}Object.defineProperty(t,"adapterName",{value:r})}});const Uh=t=>`- ${t}`,ib=t=>_.isFunction(t)||t===null||t===!1,Fg={getAdapter:t=>{t=_.isArray(t)?t:[t];const{length:r}=t;let i,l;const a={};for(let c=0;c<r;c++){i=t[c];let f;if(l=i,!ib(i)&&(l=wc[(f=String(i)).toLowerCase()],l===void 0))throw new Se(`Unknown adapter '${f}'`);if(l)break;a[f||"#"+c]=l}if(!l){const c=Object.entries(a).map(([p,h])=>`adapter ${p} `+(h===!1?"is not supported by the environment":"is not available in the build"));let f=r?c.length>1?`since :
`+c.map(Uh).join(`
`):" "+Uh(c[0]):"as no adapter specified";throw new Se("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return l},adapters:wc};function Xu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new bo(null,t)}function Hh(t){return Xu(t),t.headers=Tt.from(t.headers),t.data=Yu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Fg.getAdapter(t.adapter||$i.adapter)(t).then(function(l){return Xu(t),l.data=Yu.call(t,t.transformResponse,l),l.headers=Tt.from(l.headers),l},function(l){return Ig(l)||(Xu(t),l&&l.response&&(l.response.data=Yu.call(t,t.transformResponse,l.response),l.response.headers=Tt.from(l.response.headers))),Promise.reject(l)})}const Mg="1.7.9",Ms={};["object","boolean","number","function","string","symbol"].forEach((t,r)=>{Ms[t]=function(l){return typeof l===t||"a"+(r<1?"n ":" ")+t}});const Wh={};Ms.transitional=function(r,i,l){function a(c,f){return"[Axios v"+Mg+"] Transitional option '"+c+"'"+f+(l?". "+l:"")}return(c,f,p)=>{if(r===!1)throw new Se(a(f," has been removed"+(i?" in "+i:"")),Se.ERR_DEPRECATED);return i&&!Wh[f]&&(Wh[f]=!0,console.warn(a(f," has been deprecated since v"+i+" and will be removed in the near future"))),r?r(c,f,p):!0}};Ms.spelling=function(r){return(i,l)=>(console.warn(`${l} is likely a misspelling of ${r}`),!0)};function lb(t,r,i){if(typeof t!="object")throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const l=Object.keys(t);let a=l.length;for(;a-- >0;){const c=l[a],f=r[c];if(f){const p=t[c],h=p===void 0||f(p,c,t);if(h!==!0)throw new Se("option "+c+" must be "+h,Se.ERR_BAD_OPTION_VALUE);continue}if(i!==!0)throw new Se("Unknown option "+c,Se.ERR_BAD_OPTION)}}const ts={assertOptions:lb,validators:Ms},hn=ts.validators;class Tr{constructor(r){this.defaults=r,this.interceptors={request:new Lh,response:new Lh}}async request(r,i){try{return await this._request(r,i)}catch(l){if(l instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const c=a.stack?a.stack.replace(/^.+\n/,""):"";try{l.stack?c&&!String(l.stack).endsWith(c.replace(/^.+\n.+\n/,""))&&(l.stack+=`
`+c):l.stack=c}catch{}}throw l}}_request(r,i){typeof r=="string"?(i=i||{},i.url=r):i=r||{},i=Dr(this.defaults,i);const{transitional:l,paramsSerializer:a,headers:c}=i;l!==void 0&&ts.assertOptions(l,{silentJSONParsing:hn.transitional(hn.boolean),forcedJSONParsing:hn.transitional(hn.boolean),clarifyTimeoutError:hn.transitional(hn.boolean)},!1),a!=null&&(_.isFunction(a)?i.paramsSerializer={serialize:a}:ts.assertOptions(a,{encode:hn.function,serialize:hn.function},!0)),ts.assertOptions(i,{baseUrl:hn.spelling("baseURL"),withXsrfToken:hn.spelling("withXSRFToken")},!0),i.method=(i.method||this.defaults.method||"get").toLowerCase();let f=c&&_.merge(c.common,c[i.method]);c&&_.forEach(["delete","get","head","post","put","patch","common"],k=>{delete c[k]}),i.headers=Tt.concat(f,c);const p=[];let h=!0;this.interceptors.request.forEach(function($){typeof $.runWhen=="function"&&$.runWhen(i)===!1||(h=h&&$.synchronous,p.unshift($.fulfilled,$.rejected))});const m=[];this.interceptors.response.forEach(function($){m.push($.fulfilled,$.rejected)});let v,x=0,S;if(!h){const k=[Hh.bind(this),void 0];for(k.unshift.apply(k,p),k.push.apply(k,m),S=k.length,v=Promise.resolve(i);x<S;)v=v.then(k[x++],k[x++]);return v}S=p.length;let R=i;for(x=0;x<S;){const k=p[x++],$=p[x++];try{R=k(R)}catch(b){$.call(this,b);break}}try{v=Hh.call(this,R)}catch(k){return Promise.reject(k)}for(x=0,S=m.length;x<S;)v=v.then(m[x++],m[x++]);return v}getUri(r){r=Dr(this.defaults,r);const i=Lg(r.baseURL,r.url);return jg(i,r.params,r.paramsSerializer)}}_.forEach(["delete","get","head","options"],function(r){Tr.prototype[r]=function(i,l){return this.request(Dr(l||{},{method:r,url:i,data:(l||{}).data}))}});_.forEach(["post","put","patch"],function(r){function i(l){return function(c,f,p){return this.request(Dr(p||{},{method:r,headers:l?{"Content-Type":"multipart/form-data"}:{},url:c,data:f}))}}Tr.prototype[r]=i(),Tr.prototype[r+"Form"]=i(!0)});class Kc{constructor(r){if(typeof r!="function")throw new TypeError("executor must be a function.");let i;this.promise=new Promise(function(c){i=c});const l=this;this.promise.then(a=>{if(!l._listeners)return;let c=l._listeners.length;for(;c-- >0;)l._listeners[c](a);l._listeners=null}),this.promise.then=a=>{let c;const f=new Promise(p=>{l.subscribe(p),c=p}).then(a);return f.cancel=function(){l.unsubscribe(c)},f},r(function(c,f,p){l.reason||(l.reason=new bo(c,f,p),i(l.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(r){if(this.reason){r(this.reason);return}this._listeners?this._listeners.push(r):this._listeners=[r]}unsubscribe(r){if(!this._listeners)return;const i=this._listeners.indexOf(r);i!==-1&&this._listeners.splice(i,1)}toAbortSignal(){const r=new AbortController,i=l=>{r.abort(l)};return this.subscribe(i),r.signal.unsubscribe=()=>this.unsubscribe(i),r.signal}static source(){let r;return{token:new Kc(function(a){r=a}),cancel:r}}}function sb(t){return function(i){return t.apply(null,i)}}function ab(t){return _.isObject(t)&&t.isAxiosError===!0}const vc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(vc).forEach(([t,r])=>{vc[r]=t});function Bg(t){const r=new Tr(t),i=xg(Tr.prototype.request,r);return _.extend(i,Tr.prototype,r,{allOwnKeys:!0}),_.extend(i,r,null,{allOwnKeys:!0}),i.create=function(a){return Bg(Dr(t,a))},i}const Oe=Bg($i);Oe.Axios=Tr;Oe.CanceledError=bo;Oe.CancelToken=Kc;Oe.isCancel=Ig;Oe.VERSION=Mg;Oe.toFormData=zs;Oe.AxiosError=Se;Oe.Cancel=Oe.CanceledError;Oe.all=function(r){return Promise.all(r)};Oe.spread=sb;Oe.isAxiosError=ab;Oe.mergeConfig=Dr;Oe.AxiosHeaders=Tt;Oe.formToJSON=t=>Ng(_.isHTMLForm(t)?new FormData(t):t);Oe.getAdapter=Fg.getAdapter;Oe.HttpStatusCode=vc;Oe.default=Oe;const kc=w.createContext({});function ub({children:t}){const[r,i]=w.useState("url(/win-cursor/arrow.cur), auto"),[l,a]=w.useState([]),[c,f]=w.useState([]),p=A=>f(C=>C.includes(A)?C:[...C,A]),h=A=>f(C=>C.filter(D=>D!==A)),[m,v]=w.useState(()=>localStorage.getItem("vortex.crt")==="1"),x=()=>v(A=>{const C=!A;return localStorage.setItem("vortex.crt",C?"1":"0"),C}),[S,R]=w.useState({image:"",type:1}),k=localStorage.getItem("wallpaper");w.useEffect(()=>{R(k!==null?JSON.parse(k):{image:"",type:1})},[k]);const $=A=>{localStorage.setItem("wallpaper",JSON.stringify(A)),R(A)},b=A=>{i(`url(/win-cursor/${A}), auto`)};return g.jsx(kc.Provider,{value:{cursor:r,changeCursor:b,storage:l,setStorage:a,wallpaper:S,changeWallpaper:$,minimized:c,minimize:p,restore:h,crt:m,toggleCrt:x},children:t})}function cr(){if(!kc)throw new Error("useProcessContext must be used within a ProcessContextProvider");return w.useContext(kc)}const cb=({games:t,fetchGames:r,setGames:i})=>{const{changeCursor:l}=cr(),a=["Platform","Title","Started Date","Notes","Completed","Completed Date",""],[c,f]=w.useState(0),[p,h]=w.useState(!0);w.useEffect(()=>{m()},[]);const m=()=>{l("loading.cur");const k=setInterval(()=>{f($=>{if($===100)return h(!1),l("arrow.cur"),0;const b=Math.random()*20;return Math.min($+b,100)})},500);return()=>{clearInterval(k)}},v=(k,$)=>{i(t.map((b,A)=>A===$?{...b,notes:k.target.value}:b))},x=k=>{h(!0),Oe.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{h(!0),Oe.post(`undefined/games/${k.id}/complete`).then(()=>r())},R=(k,$)=>{Oe.put(`undefined/games/${$.id}`,{notes:k.target.value})};return p?g.jsx(Es,{value:Math.floor(c)}):g.jsxs("div",{children:[g.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"GAMES!"}),t.length?g.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:g.jsxs(Rs,{children:[g.jsx(As,{children:g.jsx(Ir,{children:a.map(k=>g.jsx($s,{children:k},k))})}),g.jsx(Cs,{children:t.map((k,$)=>g.jsxs(Ir,{children:[g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:g.jsx("p",{children:k.platform.name})}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:g.jsx("div",{style:{minWidth:"150px"},children:g.jsx("p",{children:k.title})})}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?g.jsx(vo,{style:{minWidth:"20vw"},onChange:b=>v(b,$),value:k.notes||"",onBlur:b=>R(b,k),multiline:!0,rows:4,fullWidth:!0}):k.notes}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completed?"Yes!":"No"}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:k.completedDate}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&g.jsxs("div",{style:{width:"70px"},children:[g.jsx("img",{onClick:()=>S(k),src:IS,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),g.jsx("img",{onClick:()=>x(k),src:yg,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},$))})]})}):g.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},db=({saveAndGoBack:t})=>{const{changeCursor:r}=cr(),[i,l]=w.useState([]),[a,c]=w.useState({}),[f,p]=w.useState(""),[h,m]=w.useState(0),[v,x]=w.useState(!1),[S,R]=w.useState(1);w.useEffect(()=>{h===100&&t(S)},[h]);const k=()=>{r("loading.cur");const b=setInterval(()=>{m(A=>{if(A===100)return 0;const C=Math.random()*50;return Math.min(A+C,100)})},500);return()=>{clearInterval(b)}};w.useEffect(()=>{Oe.get("undefined/platforms").then(b=>{l(b.data.map(A=>({...A,label:A.name})))})},[]);const $=()=>{R(v?2:1),k(),Oe.post("undefined/games",{platform_id:a.id,title:f,backlog:v})};return g.jsxs(g.Fragment,{children:[g.jsxs(Mm,{label:"New Game",children:[g.jsxs("div",{children:[g.jsx("p",{children:"Platform"}),g.jsx(zc,{formatDisplay:()=>a.name,labelId:"opt.name",options:[{},...i],menuMaxHeight:160,width:160,onChange:b=>c(b)})]}),g.jsxs("div",{style:{marginTop:"5px"},children:[g.jsx("p",{children:"Title"}),g.jsx(vo,{value:f,placeholder:"Type here...",onChange:b=>p(b.target.value),fullWidth:!0})]}),g.jsxs("div",{style:{marginTop:"5px",display:"flex"},children:[g.jsx(Oc,{value:v,onChange:()=>x(!v),style:{marginTop:"2px"}}),g.jsx("p",{children:"Backlog"})]})]}),g.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:"15px"},children:h>0?g.jsx(Es,{value:Math.floor(h)}):g.jsx(g.Fragment,{children:g.jsx(ve,{disabled:Object.keys(a).length===0||!f,onClick:()=>$(),style:{textAlign:"center"},children:"Save new game"})})})]})},fb="/freecellman.png",pb=({games:t,fetchGames:r,setGames:i})=>{const{changeCursor:l}=cr(),a=["Platform","Title","Logged Date","Notes",""],[c,f]=w.useState(0),[p,h]=w.useState(!0);w.useEffect(()=>{m()},[]);const m=()=>{l("loading.cur");const k=setInterval(()=>{f($=>{if($===100)return h(!1),l("arrow.cur"),0;const b=Math.random()*20;return Math.min($+b,100)})},500);return()=>{clearInterval(k)}},v=(k,$)=>{i(t.map((b,A)=>A===$?{...b,notes:k.target.value}:b))},x=k=>{h(!0),Oe.delete(`undefined/games/${k.id}`).then(()=>r())},S=k=>{h(!0),Oe.get(`undefined/games/${k.id}/start`).then(()=>r())},R=(k,$)=>{Oe.put(`undefined/games/${$.id}`,{notes:k.target.value})};return p?g.jsx(Es,{value:Math.floor(c)}):g.jsxs("div",{children:[g.jsx("p",{style:{textAlign:"center",fontSize:"18px",fontWeight:"bold",marginBottom:"10px"},children:"Backlog"}),t.length?g.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:g.jsxs(Rs,{children:[g.jsx(As,{children:g.jsx(Ir,{children:a.map(k=>g.jsx($s,{children:k},k))})}),g.jsx(Cs,{children:t.map((k,$)=>g.jsxs(Ir,{children:[g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:g.jsx("p",{children:k.platform.name})}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:g.jsx("div",{style:{minWidth:"300px"},children:g.jsx("p",{children:k.title})})}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:k.startedDate}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:g.jsx(vo,{style:{minWidth:"20vw"},onChange:b=>v(b,$),value:k.notes||"",onBlur:b=>R(b,k),multiline:!0,rows:2,fullWidth:!0})}),g.jsx(dt,{style:{textAlign:"center",verticalAlign:"middle"},children:!k.completed&&g.jsxs("div",{style:{width:"70px"},children:[g.jsx("img",{onClick:()=>S(k),src:fb,style:{height:"25px",cursor:"pointer",marginTop:"10px",marginRight:"20px"}}),g.jsx("img",{onClick:()=>x(k),src:yg,style:{height:"25px",cursor:"pointer",marginTop:"10px"}})]})})]},$))})]})}):g.jsx("p",{children:"NO GAMES AVAILABLE, Go registry some!"})]})},Ug=()=>{const[t,r]=w.useState(1),[i,l]=w.useState([]),[a,c]=w.useState(!1);w.useEffect(()=>{f(!0)},[]),w.useEffect(()=>{switch(localStorage.setItem("system.gamecache.page",String(t)),t){case 1:f(!1);break;case 2:f(!0);break}},[t]);const f=v=>{l([]),Oe.get(`undefined/games${v?"/backlog":""}`).then(x=>l(x.data))},p=v=>{r(v),c(!1)},h=v=>{r(v),f(v===2)},m=[{component:g.jsx(db,{saveAndGoBack:h}),text:"Add new Game to your Backlog"},{component:g.jsx(cb,{setGames:l,fetchGames:()=>f(!1),games:i}),text:"Game list"},{component:g.jsx(pb,{setGames:l,fetchGames:()=>f(!0),games:i}),text:"Backloged games, ready to play!"}];return g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",onClick:()=>c(!a),children:"File"}),a&&g.jsxs(rr,{style:{position:"absolute",left:"3%",top:"100%",zIndex:"99999"},children:[g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>p(0),children:"New Game"}),g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>p(1),children:g.jsx("p",{children:"Game List"})}),g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>p(2),children:g.jsx("p",{children:"Backlog"})})]}),g.jsx(ve,{variant:"menu",size:"sm",onClick:()=>c(!1),children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{children:m[t].component}),g.jsx(Pt,{variant:"well",className:"footer",children:m[t].text})]})},Ju="/home/user",Vh="/home/user/welcome.txt",Gc=()=>{const t=Is(),[r,i]=w.useState(Vh),[l,a]=w.useState(""),[c,f]=w.useState(!1),[p,h]=w.useState(!1),[m,v]=w.useState([]),[x,S]=w.useState(""),R=w.useCallback(async C=>{try{const D=await t.readTextFile(C);i(C),a(D),f(!1),S(`Opened ${C}`)}catch(D){S(`Could not open ${C}: ${D.code??D.message}`)}},[t]);w.useEffect(()=>{(async()=>{const[C]=await t.argv();await R(C||Vh)})()},[R,t]);const k=async()=>{try{v((await t.readdir(Ju)).filter(C=>C.endsWith(".txt")))}catch{v([])}h(C=>!C)},$=async()=>{try{await t.writeTextFile(r,l),f(!1),S(`Saved ${r}`)}catch(C){S(`Save failed: ${C.code??C.message}`)}h(!1)},b=()=>{const C=window.prompt("New file name:","untitled.txt");h(!1),C&&(i(`${Ju}/${C}`),a(""),f(!0),S(`New file ${C} — not saved yet`))},A=async C=>{h(!1),await R(`${Ju}/${C}`)};return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",minWidth:520,minHeight:360},children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",onClick:k,children:"File"}),p&&g.jsxs(rr,{style:{position:"absolute",left:"3%",top:"100%",zIndex:99999},children:[g.jsx(_e,{style:{cursor:"pointer"},onClick:b,children:"New"}),g.jsx(_e,{style:{cursor:"pointer"},onClick:$,children:"Save"}),g.jsx(ir,{}),m.length===0&&g.jsx(_e,{disabled:!0,children:"(no .txt files)"}),m.map(C=>g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>A(C),children:C},C))]}),g.jsx(ve,{variant:"menu",size:"sm",onClick:$,disabled:!c,children:"Save"})]}),g.jsx(xt,{style:{flex:1,minHeight:0,display:"flex"},children:g.jsx(vo,{style:{flex:1,height:"100%"},value:l,onChange:C=>{a(C.target.value),f(!0)},multiline:!0,rows:20,fullWidth:!0})}),g.jsx(Pt,{variant:"well",className:"footer",children:g.jsxs("p",{children:[r,c?" •":""," ",x&&`— ${x}`]})})]})},Hg=()=>g.jsxs(g.Fragment,{children:[g.jsx(xt,{children:g.jsx("iframe",{width:"680",height:"400",frameBorder:"0",src:"https://web.archive.org/web/20250307002700/https://www.google.com/web/20250307002700/https://www.google.com/x`x",allowFullScreen:!1})}),g.jsx(Pt,{variant:"well",className:"footer",children:"Browser"})]}),Ln="/explorer.png",xo="/notes.png",qc=()=>{const t=Is(),[r,i]=w.useState("/"),[l,a]=w.useState([]),[c,f]=w.useState(null),[p,h]=w.useState(""),m=w.useCallback(async x=>{try{const S=await t.readdir(x),R=await Promise.all(S.map(async k=>{try{const $=await t.stat(yo(x,k));return{name:k,type:$.type,size:$.size}}catch{return{name:k,type:"file",size:0}}}));R.sort((k,$)=>k.type===$.type?k.name.localeCompare($.name):k.type==="dir"?-1:1),i(x),a(R),f(null),h(`${x} — ${R.length} item(s)`)}catch(S){h(`Cannot open ${x}: ${S.code??S.message}`)}},[t]);w.useEffect(()=>{(async()=>{const[x]=await t.argv();await m(x||"/")})()},[m,t]);const v=x=>{const S=yo(r,x.name);x.type==="dir"?m(S):(t.spawn("notes",{argv:[S]}),h(`Opening ${x.name} in Notes…`))};return g.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",minWidth:560,minHeight:340},children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",onClick:()=>m(gn(r)),disabled:r==="/",children:"Up"}),g.jsx(ve,{variant:"menu",size:"sm",onClick:()=>m(r),children:"Refresh"}),g.jsx("span",{style:{marginLeft:8,alignSelf:"center"},children:r})]}),g.jsx(xt,{style:{flex:1,minHeight:0,overflow:"auto",backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:g.jsx("div",{style:{display:"flex",flexWrap:"wrap",width:"100%",alignContent:"flex-start"},children:l.map(x=>g.jsxs("div",{onClick:()=>f(x.name),onDoubleClick:()=>v(x),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",width:90,padding:8},children:[g.jsx("img",{src:x.type==="dir"?Ln:xo,alt:x.type,style:{height:48,filter:c===x.name?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}}),g.jsx("p",{style:{textAlign:"center",wordBreak:"break-all",color:c===x.name?"white":"black",backgroundColor:c===x.name?"#000080":"transparent"},children:x.name})]},x.name))})}),g.jsx(Pt,{variant:"well",className:"footer",children:g.jsx("p",{children:p||"Explorer"})})]})},Wg=()=>g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{children:g.jsx("div",{style:{width:"800px",height:"600px"},children:g.jsx(Ds,{bundleUrl:"dos/tomb.jsdos"})})}),g.jsx(Pt,{variant:"well",className:"footer",children:"Tomb Raider"})]}),Vg=()=>g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{children:g.jsx("div",{style:{width:"800px",height:"600px"},children:g.jsx(Ds,{bundleUrl:"dos/PERSIA.jsdos"})})}),g.jsx(Pt,{variant:"well",className:"footer",children:"TEST"})]}),hb="https://radio.plaza.one/mp3",Qh="https://api.plaza.one/status",Qg=()=>{const[t,r]=w.useState(null),[i,l]=w.useState(1);return w.useEffect(()=>{fetch(Qh).then(c=>c.json()).then(c=>r(c.song)),l(Math.floor(Math.random()*10)+1);const a=setInterval(()=>{l(Math.floor(Math.random()*10)+1),fetch(Qh).then(c=>c.json()).then(c=>r(c.song))},12e4);return()=>clearInterval(a)},[]),g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{children:g.jsxs("div",{style:{width:"300px"},className:"flex flex-col items-center gap-4",children:[g.jsx("h2",{className:"text-2xl font-bold",children:"Vaporwave Radio"}),g.jsx("audio",{controls:!0,autoPlay:!0,src:hb,className:"w-full max-w-md"}),t?g.jsxs("div",{className:"flex flex-col items-center",children:[g.jsx("img",{width:"200px",src:t.artwork_src??"/default_cover.jpg",alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),g.jsx("div",{className:"text-lg font-semibold",children:t.title}),g.jsx("div",{className:"text-sm text-neutral-400",children:t.artist})]}):g.jsxs("div",{className:"flex flex-col items-center",children:[g.jsx("img",{width:"200px",src:`/vaporwave/${i}.jpeg`,alt:"Cover",className:"w-40 h-40 rounded-2xl mb-2 shadow-lg"}),g.jsx("div",{className:"text-lg font-semibold",children:"Sunset over Neon Palms"}),g.jsx("div",{className:"text-sm text-neutral-400",children:"Dream Mall Escalator"})]})]})}),g.jsx(Pt,{variant:"well",className:"footer",children:g.jsxs("p",{className:"text-sm text-neutral-400",children:["Powered by ",g.jsx("a",{href:"https://plaza.one",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Nightwave Plaza"})]})})]})},mb=()=>{const[t,r]=w.useState(""),[i,l]=w.useState(1),{changeWallpaper:a,crt:c,toggleCrt:f}=cr(),p=["#008080","#000080","#000000","#00FF00","#800000","#FF00FF"],h=B.img`
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,m=B.div`
        width: 80px;
        height: 80px;
        &:hover {
            border: 3px solid;
            border-color: blue;
        }
    `,v=(R,k)=>{r(R),l(k)},x=()=>t?i===2?{background:t}:{backgroundImage:`url('/${t}')`,backgroundSize:"cover",backgroundPosition:"center"}:{background:"blue"},S=B.div`
        display: flex;
        justify-content: end;
        margin-top: 20px;
    `;return g.jsxs("div",{style:{width:"800px",maxHeight:"70vh",overflowY:"scroll",overflowX:"hidden"},children:[g.jsx("div",{style:{marginBottom:12},children:g.jsx(Oc,{checked:c,onChange:f,label:"CRT scanline effect"})}),g.jsx("p",{className:"text-xl pb-4 font-bold",children:"Choose the wallpaper"}),g.jsx("div",{className:"flex justify-center",children:g.jsx(Bm,{backgroundStyles:x()})}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-lg text-center",children:"Solid Colors"}),g.jsx("div",{className:"flex justify-between",children:p.map(R=>g.jsx(m,{style:{background:R},onClick:()=>v(R,2),className:"p-2 cursor-pointer hover"}))})]}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-lg text-center",children:"Windows XP"}),g.jsx("div",{className:"flex justify-between",children:Array.from({length:5},(R,k)=>k+1).map(R=>g.jsx(h,{onClick:()=>v(`wallpapers/xp-${R}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/xp-${R}.jpg`}))})]}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-lg text-center",children:"Windows 7"}),g.jsx("div",{className:"flex justify-between",children:Array.from({length:4},(R,k)=>k+1).map(R=>g.jsx(h,{onClick:()=>v(`wallpapers/7-${R}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/7-${R}.jpg`}))})]}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-lg text-center",children:"Vaporwave Style"}),g.jsx("div",{className:"flex justify-between",children:Array.from({length:7},(R,k)=>k+1).map(R=>g.jsx(h,{onClick:()=>v(`wallpapers/vw-${R}.jpg`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/vw-${R}.jpg`}))})]}),g.jsxs("div",{className:"mt-8",children:[g.jsx("p",{className:"text-lg text-center",children:"Games"}),g.jsx("div",{className:"flex justify-between",children:Array.from({length:1},(R,k)=>k+1).map(R=>g.jsx(h,{onClick:()=>v(`wallpapers/games-${R}.png`,1),className:"p-2 cursor-pointer hover",width:"115px",height:"20px",src:`/wallpapers/games-${R}.png`}))})]}),g.jsx(S,{children:g.jsx(ve,{onClick:()=>a({image:t,type:i}),disabled:t==="",children:"Apply"})})]})},gb=()=>{const[t,r]=w.useState(!0),[i,l]=w.useState(null),[a,c]=w.useState([[{name:"Monitor",icon:"/monitor.png",component:mb,selected:!1}]]),f=w.useCallback((p,h)=>{c(a.map((m,v)=>m.map((x,S)=>a[p][h].selected===!0?(l(()=>a[p][h].component),r(!1),{...x,selected:!1}):v===p&&S===h?{...x,selected:!0}:{...x,selected:!1})))},[a,c]);return g.jsxs(g.Fragment,{children:[g.jsxs(jt,{children:[g.jsx(ve,{variant:"menu",size:"sm",children:"File"}),g.jsx(ve,{variant:"menu",size:"sm",children:"Edit"}),g.jsx(ve,{variant:"menu",size:"sm",disabled:!0,children:"Save"})]}),g.jsx(xt,{style:{backgroundColor:"white",border:"3px solid gray",borderRadius:"5px"},children:t||!i?g.jsx("div",{style:{width:"700px"},children:g.jsx("div",{style:{width:"100%"},children:Array.from({length:21}).map((p,h)=>g.jsx("div",{style:{display:"flex",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px"},children:Array.from({length:7}).map((m,v)=>a[h]&&a[h][v]&&g.jsxs("div",{onClick:()=>f(h,v),style:{cursor:"pointer",display:"flex",justifyContent:"center",flexDirection:"column",paddingRight:"30px"},children:[g.jsx("div",{style:{display:"flex",justifyContent:"center"},children:g.jsx("img",{src:a[h][v].icon,style:{height:"70px",filter:a[h][v].selected?"sepia(100%) saturate(500%) hue-rotate(220deg) brightness(60%)":"none"}})}),g.jsx("p",{style:{color:a[h][v].selected?"white":"black",textAlign:"center",backgroundColor:a[h][v].selected?"#000080":"transparent"},children:a[h][v].name})]}))}))})}):i&&g.jsx(i,{})}),g.jsx(Pt,{variant:"well",className:"footer",children:"Control Panel"})]})},yb=new Set(["|","<",";"]);function xb(t){const r=[];let i=0;const l=t.length;for(;i<l;){const a=t[i];if(a===" "||a==="	"){i++;continue}if(a===">"){t[i+1]===">"?(r.push({type:"op",value:">>"}),i+=2):(r.push({type:"op",value:">"}),i++);continue}if(yb.has(a)){r.push({type:"op",value:a}),i++;continue}let c="";for(;i<l;){const f=t[i];if(f===" "||f==="	"||f==="|"||f==="<"||f===">"||f===";")break;if(f==='"'||f==="'"){const p=f;for(i++;i<l&&t[i]!==p;)c+=t[i],i++;i++;continue}if(f==="\\"&&i+1<l){c+=t[i+1],i+=2;continue}c+=f,i++}r.push({type:"word",value:c})}return r}class Hl extends Error{}function wb(t){const r=xb(t),i=[];let l=[],a=null,c=!1;const f=()=>{a&&l.push(a),a=null},p=()=>{if(c)throw new Hl("syntax error near `|`");f(),l.length&&i.push(l),l=[]};for(let h=0;h<r.length;h++){const m=r[h];if(m.type==="word"){a||(a={argv:[]}),a.argv.push(m.value),c=!1;continue}if(m.value===";"){p();continue}if(m.value==="|"){if(!a||a.argv.length===0)throw new Hl("syntax error near `|`");f(),c=!0;continue}const v=r[h+1];if(!v||v.type!=="word")throw new Hl(`syntax error near \`${m.value}\``);a||(a={argv:[]}),m.value==="<"?a.stdinFile=v.value:(a.stdoutFile=v.value,a.append=m.value===">>"),h++}p();for(const h of i)for(const m of h)if(m.argv.length===0)throw new Hl("syntax error: empty command");return i}function St(t,r){return r.startsWith("/")?lr(r):yo(t,r)}function Ft(t){const r=new Set,i=[];for(const l of t.slice(1))if(l.length>1&&l[0]==="-"&&l[1]!=="-")for(const a of l.slice(1))r.add(a);else i.push(l);return{flags:r,operands:i}}const kn=t=>(t==null?void 0:t.code)??(t==null?void 0:t.message)??"error",vb=async({argv:t,out:r})=>(r(t.slice(1).join(" ")+`
`),0),kb=async({cwd:t,out:r})=>(r(t+`
`),0),Sb=async({env:t,out:r})=>(r((t.USER??"user")+`
`),0),Eb=async({argv:t,out:r})=>(r(t.includes("-a")?`VortexOS 2.0 vortex web microkernel
`:`VortexOS
`),0),bb=async({out:t})=>(t(new Date().toString()+`
`),0),Cb=async({env:t,out:r})=>{for(const[i,l]of Object.entries(t))r(`${i}=${l}
`);return 0},Ab=async({argv:t,cwd:r,sys:i,out:l,err:a})=>{const{flags:c,operands:f}=Ft(t),p=f.length?f:["."];let h=0;for(const m of p){const v=St(r,m);try{const x=await i.stat(v),S=x.type==="dir"?await i.readdir(v):[Kt(v)];if(c.has("l"))for(const R of S){const k=x.type==="dir"?yo(v,R):v,$=await i.stat(k),b=$.type==="dir"?"d":$.type==="dev"?"c":"-";l(`${b}  ${String($.size).padStart(6)}  ${R}
`)}else S.length&&l(S.join(`
`)+`
`)}catch(x){a(`ls: cannot access '${m}': ${kn(x)}
`),h=1}}return h},$b=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const{operands:f}=Ft(t);if(f.length===0)return a(i),0;let p=0;for(const h of f)try{a(await l.readTextFile(St(r,h)))}catch(m){c(`cat: ${h}: ${kn(m)}
`),p=1}return p},Rb=async({argv:t,cwd:r,sys:i,err:l})=>{const{flags:a,operands:c}=Ft(t);let f=0;for(const p of c){const h=St(r,p);try{if(a.has("p")){let m="";for(const v of h.split("/").filter(Boolean))m+="/"+v,await i.stat(m).then(()=>!0).catch(()=>!1)||await i.mkdir(m)}else await i.mkdir(h)}catch(m){l(`mkdir: ${p}: ${kn(m)}
`),f=1}}return f},Tb=async({argv:t,cwd:r,sys:i,err:l})=>{const{operands:a}=Ft(t);let c=0;for(const f of a){const p=St(r,f);try{await i.stat(p).then(()=>!0).catch(()=>!1)||await i.writeTextFile(p,"")}catch(h){l(`touch: ${f}: ${kn(h)}
`),c=1}}return c};async function Kg(t,r){if((await t.stat(r)).type==="dir")for(const l of await t.readdir(r))await Kg(t,yo(r,l));await t.unlink(r)}const jb=async({argv:t,cwd:r,sys:i,err:l})=>{const{flags:a,operands:c}=Ft(t);let f=0;for(const p of c){const h=St(r,p);try{a.has("r")?await Kg(i,h):await i.unlink(h)}catch(m){l(`rm: ${p}: ${kn(m)}
`),f=1}}return f},Gg=async({argv:t,cwd:r,sys:i,err:l})=>{const{operands:a}=Ft(t);if(a.length<2)return l(`cp: usage: cp <src> <dst>
`),1;const c=St(r,a[0]);let f=St(r,a[1]);try{return await i.stat(f).then(p=>p.type==="dir").catch(()=>!1)&&(f=yo(f,Kt(c))),await i.writeFile(f,await i.readFile(c)),0}catch(p){return l(`cp: ${kn(p)}
`),1}},Pb=async t=>{const r=await Gg(t);if(r!==0)return r;const{operands:i}=Ft(t.argv);return await t.sys.unlink(St(t.cwd,i[0])).catch(()=>{}),0},Nb=async({sys:t,out:r})=>{const i=await t.ps();r(`PID       NAME                 STATE     PRIO
`);for(const l of i)r(`${l.pid.slice(0,8)}  ${l.name.padEnd(20).slice(0,20)}  ${l.state.padEnd(8)}  ${l.priority}
`);return 0},Ib=async({argv:t,sys:r,out:i,err:l})=>{const{operands:a}=Ft(t);if(a.length===0)return l(`kill: usage: kill <pid>
`),1;const c=await r.ps();let f=0;for(const p of a){const h=c.find(m=>m.pid===p||m.pid.startsWith(p));if(!h){l(`kill: ${p}: no such process
`),f=1;continue}await r.kill(h.pid),i(`killed ${h.pid.slice(0,8)} (${h.name})
`)}return f},Db=async({argv:t,out:r,err:i})=>{const{operands:l}=Ft(t);let a=0;for(const c of l)c in Yc||Xg.includes(c)?r(`/bin/${c}
`):(i(`${c} not found
`),a=1);return a},Lb=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const{flags:f,operands:p}=Ft(t);if(p.length===0)return c(`grep: usage: grep <pattern> [file...]
`),1;const[h,...m]=p,v=f.has("i")?h.toLowerCase():h,x=k=>(f.has("i")?k.toLowerCase():k).includes(v),S=[];if(m.length===0)S.push(i);else for(const k of m)try{S.push(await l.readTextFile(St(r,k)))}catch($){c(`grep: ${k}: ${kn($)}
`)}let R=!1;for(const k of S)for(const $ of k.split(`
`))$!==""&&x($)&&(a($+`
`),R=!0);return R?0:1},Ob=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const{operands:f}=Ft(t),p=m=>({lines:m===""?0:m.replace(/\n$/,"").split(`
`).length,words:m.split(/\s+/).filter(Boolean).length,chars:m.length});if(f.length===0){const m=p(i);return a(`${m.lines} ${m.words} ${m.chars}
`),0}let h=0;for(const m of f)try{const v=p(await l.readTextFile(St(r,m)));a(`${v.lines} ${v.words} ${v.chars} ${m}
`)}catch(v){c(`wc: ${m}: ${kn(v)}
`),h=1}return h};function qg(t){const r=t.split(`
`);return r[r.length-1]===""&&r.pop(),r}function Yg(t,r){const i=t.indexOf("-n"),l=i>=0?Number(t[i+1]):NaN;return Number.isFinite(l)?l:r}const _b=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const f=Yg(t,10),p=Ft(t).operands.filter(m=>!/^\d+$/.test(m)),h=m=>qg(m).slice(0,f).forEach(v=>a(v+`
`));if(p.length===0)return h(i),0;try{for(const m of p)h(await l.readTextFile(St(r,m)));return 0}catch(m){return c(`head: ${kn(m)}
`),1}},zb=async({argv:t,cwd:r,stdin:i,sys:l,out:a,err:c})=>{const f=Yg(t,10),p=Ft(t).operands.filter(m=>!/^\d+$/.test(m)),h=m=>qg(m).slice(-f).forEach(v=>a(v+`
`));if(p.length===0)return h(i),0;try{for(const m of p)h(await l.readTextFile(St(r,m)));return 0}catch(m){return c(`tail: ${kn(m)}
`),1}},Fb=async({out:t})=>(t(`VortexOS shell — available commands:
`),t([...Object.keys(Yc),...Xg].sort().join("  ")+`
`),t(`Pipes (|), redirects (> >> <) and ; are supported.
`),0),Xg=["cd","clear","export"],Yc={echo:vb,pwd:kb,whoami:Sb,uname:Eb,date:bb,env:Cb,ls:Ab,cat:$b,mkdir:Rb,touch:Tb,rm:jb,cp:Gg,mv:Pb,ps:Nb,kill:Ib,which:Db,grep:Lb,wc:Ob,head:_b,tail:zb,help:Fb};class Mb{constructor(r,i="/home/user",l={}){Ve(this,"cwd");Ve(this,"env");this.sys=r,this.cwd=i,this.env={HOME:"/home/user",USER:"user",PATH:"/bin",...l}}prompt(){const r=this.cwd===this.env.HOME?"~":this.cwd;return`${this.env.USER}@vortex:${r}$ `}async run(r){let i="",l=!1,a=0;const c=p=>{i+=p};let f;try{f=wb(r)}catch(p){return{output:`sh: ${p.message}
`,clear:!1,code:2}}for(const p of f){const h=await this.runPipeline(p,c);a=h.code,h.clear&&(l=!0,i="")}return{output:i,clear:l,code:a}}expand(r){return r==="~"?this.env.HOME:r.startsWith("~/")?this.env.HOME+r.slice(1):r}expandCommand(r){return{argv:r.argv.map(i=>this.expand(i)),stdinFile:r.stdinFile?this.expand(r.stdinFile):void 0,stdoutFile:r.stdoutFile?this.expand(r.stdoutFile):void 0,append:r.append}}async runPipeline(r,i){const l=r.map(f=>this.expandCommand(f));if(l.length===1){const f=l[0].argv[0];if(f==="cd")return{code:await this.cd(l[0].argv,i)};if(f==="clear")return{code:0,clear:!0};if(f==="export")return{code:this.export(l[0].argv)}}let a="",c=0;for(const f of l){const p=f.argv[0],h=Yc[p];let m=a;if(f.stdinFile)try{m=await this.sys.readTextFile(St(this.cwd,f.stdinFile))}catch(x){return i(`sh: ${f.stdinFile}: ${x.code??"error"}
`),{code:1}}if(!h)return i(`sh: ${p}: command not found
`),{code:127};let v="";c=await h({argv:f.argv,stdin:m,cwd:this.cwd,env:this.env,sys:this.sys,out:x=>v+=x,err:i}),a=await this.applyStdout(f,v,i)}return i(a),{code:c}}async applyStdout(r,i,l){if(!r.stdoutFile)return i;const a=St(this.cwd,r.stdoutFile);try{const c=r.append?await this.sys.readTextFile(a).catch(()=>""):"";await this.sys.writeTextFile(a,c+i)}catch(c){l(`sh: ${r.stdoutFile}: ${c.code??"error"}
`)}return""}async cd(r,i){const l=r[1]?St(this.cwd,r[1]):this.env.HOME;try{return(await this.sys.stat(l)).type!=="dir"?(i(`cd: not a directory: ${r[1]}
`),1):(this.cwd=l,0)}catch{return i(`cd: ${r[1]}: No such file or directory
`),1}}export(r){for(const i of r.slice(1)){const l=i.indexOf("=");l>0&&(this.env[i.slice(0,l)]=i.slice(l+1))}return 0}}const Bb=["VortexOS [Version 2.0]","Type 'help' for a list of commands.",""],Jg=()=>{const t=Is(),r=w.useRef(null);r.current||(r.current=new Mb(t));const i=r.current,[l,a]=w.useState(Bb),[c,f]=w.useState(""),[p,h]=w.useState([]),[m,v]=w.useState(-1),[x,S]=w.useState(!1),R=w.useRef(null),k=w.useRef(null);w.useEffect(()=>{var A,C;(A=R.current)==null||A.scrollTo(0,R.current.scrollHeight),(C=k.current)==null||C.focus()},[l]);const $=async()=>{const A=c;a(D=>[...D,i.prompt()+A]),f(""),v(-1),A.trim()&&h(D=>[...D,A]),S(!0);const C=await i.run(A);if(S(!1),C.clear){a([]);return}C.output&&a(D=>[...D,...C.output.replace(/\n$/,"").split(`
`)])},b=A=>{if(A.key==="Enter")A.preventDefault(),x||$();else if(A.key==="ArrowUp"){if(A.preventDefault(),!p.length)return;const C=m===-1?p.length-1:Math.max(0,m-1);v(C),f(p[C])}else if(A.key==="ArrowDown"){if(A.preventDefault(),m===-1)return;const C=m+1;C>=p.length?(v(-1),f("")):(v(C),f(p[C]))}};return g.jsxs("div",{ref:R,onClick:()=>{var A;return(A=k.current)==null?void 0:A.focus()},style:{width:"100%",height:"100%",minWidth:600,minHeight:360,boxSizing:"border-box",overflowY:"auto",background:"#000",color:"#c0c0c0",fontFamily:"'Lucida Console', 'Courier New', monospace",fontSize:13,lineHeight:1.35,padding:8,cursor:"text"},children:[l.map((A,C)=>g.jsx("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-word"},children:A||" "},C)),g.jsxs("div",{style:{display:"flex",whiteSpace:"pre"},children:[g.jsx("span",{children:i.prompt()}),g.jsx("input",{ref:k,value:c,onChange:A=>f(A.target.value),onKeyDown:b,spellCheck:!1,autoComplete:"off",style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#fff",fontFamily:"inherit",fontSize:"inherit",padding:0}})]})]})},Zg="/trash.svg",Sc="/my-computer.png",Xc="/task_manager.png",ey="/doom.png",ty="/doom2.png",Jc="/backlogger.png",ny="/browser.png",ry="/tomb.jpg",oy="/persia.png",iy="/vapor.png",Zc="/terminal.svg";function Ub(t){const r=[{exec:"recycle_bin",name:"Recycle Bin",icon:Zg,component:dg,permissions:[]},{exec:"my_computer",name:"My Computer",icon:Sc,component:fg,permissions:[]},{exec:"task_manager",name:"Task Manager",icon:Xc,component:hg,permissions:["proc"]},{exec:"backlogger",name:"GameCache",icon:Jc,component:Ug,permissions:["net"]},{exec:"notes",name:"Notes",icon:xo,component:Gc,permissions:["fs"]},{exec:"explorer",name:"Explorer",icon:Ln,component:qc,permissions:["fs","proc"]},{exec:"terminal",name:"Terminal",icon:Zc,component:Jg,permissions:["fs","proc"]},{exec:"browser",name:"Browser",icon:ny,component:Hg,permissions:["net"]},{exec:"vaporwave",name:"Nightwave Plaza",icon:iy,component:Qg,permissions:["net","audio"]},{exec:"control_panel",name:"Control Panel",icon:Sc,component:gb,permissions:[]},{exec:"doom",name:"Doom",icon:ey,component:mg,permissions:[]},{exec:"doomII",name:"Doom II",icon:ty,component:gg,permissions:[]},{exec:"tomb",name:"Tomb Raider",icon:ry,component:Wg,permissions:[]},{exec:"persia",name:"Prince of Persia",icon:oy,component:Vg,permissions:[]}];for(const i of r)t.register({...i,permissions:[...i.permissions]})}const Zu="vortex.proctable",Hb="process";function Wb(t){return{load(){const r=localStorage.getItem(Zu);if(r)return Vb(r);const i=localStorage.getItem(Hb);if(i){const l=Qb(i,t);return l&&localStorage.setItem(Zu,JSON.stringify(l)),l}return null},save(r){localStorage.setItem(Zu,JSON.stringify(r))}}}function Vb(t){try{const r=JSON.parse(t);return Array.isArray(r)?r:null}catch{return null}}function Qb(t,r){let i;try{i=JSON.parse(t)}catch{return null}return Array.isArray(i)?i.filter(l=>l&&l.componentName).map(l=>{var a,c;return{pid:l.uuid??crypto.randomUUID(),ppid:null,uid:1e3,exec:l.componentName,name:l.name??l.componentName,icon:l.icon??"",priority:typeof l.priority=="number"?l.priority:0,window:{x:((a=l.location)==null?void 0:a.x)??r().x,y:((c=l.location)==null?void 0:c.y)??r().y},cwd:"/home/user",state:"running"}}):null}class Kb{constructor(){Ve(this,"mounts",[]);Ve(this,"onChange")}setOnChange(r){this.onChange=r}mount(r,i){const l=lr(r);this.mounts=this.mounts.filter(a=>a.mountPoint!==l),this.mounts.push({mountPoint:l,fs:i}),this.mounts.sort((a,c)=>c.mountPoint.length-a.mountPoint.length)}route(r){const i=lr(r);for(const l of this.mounts)if(l.mountPoint==="/"||i===l.mountPoint||i.startsWith(l.mountPoint+"/")){const a=l.mountPoint==="/"?i:i.slice(l.mountPoint.length)||"/";return{fs:l.fs,rel:a||"/",mountPoint:l.mountPoint}}throw new xe("ENOENT",r)}childMounts(r){const i=lr(r);return this.mounts.filter(l=>l.mountPoint!=="/"&&gn(l.mountPoint)===i).map(l=>l.mountPoint.slice(i==="/"?1:i.length+1))}stat(r){const{fs:i,rel:l}=this.route(r);return i.stat(l)}readdir(r){const{fs:i,rel:l}=this.route(r),a=i.readdir(l);return[...new Set([...a,...this.childMounts(r)])].sort()}read(r){const{fs:i,rel:l}=this.route(r);return i.read(l)}write(r,i){var c;const{fs:l,rel:a}=this.route(r);if(l.readonly)throw new xe("EROFS",r);l.write(a,i),(c=this.onChange)==null||c.call(this)}mkdir(r){var a;const{fs:i,rel:l}=this.route(r);if(i.readonly)throw new xe("EROFS",r);i.mkdir(l),(a=this.onChange)==null||a.call(this)}unlink(r){var a;const{fs:i,rel:l}=this.route(r);if(i.readonly)throw new xe("EROFS",r);i.unlink(l),(a=this.onChange)==null||a.call(this)}exists(r){try{return this.stat(r),!0}catch{return!1}}}const Wl=()=>Date.now();class Bs{constructor(){Ve(this,"readonly",!1);Ve(this,"root",{type:"dir",mtime:Wl(),children:new Map})}resolve(r){let i=this.root;for(const l of Ns(r)){if(i.type!=="dir"||!i.children)throw new xe("ENOTDIR",r);const a=i.children.get(l);if(!a)return null;i=a}return i}resolveDir(r){const i=this.resolve(r);if(!i)throw new xe("ENOENT",r);if(i.type!=="dir")throw new xe("ENOTDIR",r);return i}exists(r){return this.resolve(r)!==null}stat(r){var l;const i=this.resolve(r);if(!i)throw new xe("ENOENT",r);return{type:i.type,size:i.type==="file"?((l=i.data)==null?void 0:l.length)??0:0,mtime:i.mtime}}readdir(r){return[...this.resolveDir(r).children.keys()].sort()}read(r){const i=this.resolve(r);if(!i)throw new xe("ENOENT",r);if(i.type==="dir")throw new xe("EISDIR",r);return i.data??new Uint8Array}write(r,i){if(lr(r)==="/")throw new xe("EISDIR",r);const l=this.resolveDir(gn(r)),a=Kt(r),c=l.children.get(a);if(c&&c.type==="dir")throw new xe("EISDIR",r);l.children.set(a,{type:"file",mtime:Wl(),data:new Uint8Array(i)})}mkdir(r){const i=this.resolveDir(gn(r)),l=Kt(r);if(!l)throw new xe("EEXIST",r);if(i.children.has(l))throw new xe("EEXIST",r);i.children.set(l,{type:"dir",mtime:Wl(),children:new Map})}unlink(r){if(lr(r)==="/")throw new xe("EACCES","cannot unlink /");const i=this.resolve(r);if(!i)throw new xe("ENOENT",r);if(i.type==="dir"&&i.children.size>0)throw new xe("ENOTEMPTY",r);this.resolveDir(gn(r)).children.delete(Kt(r))}rename(r,i){const l=this.resolve(r);if(!l)throw new xe("ENOENT",r);const a=this.resolveDir(gn(i));this.resolveDir(gn(r)).children.delete(Kt(r)),l.mtime=Wl(),a.children.set(Kt(i),l)}serialize(){return ly(this.root)}static deserialize(r){const i=new Bs;return i.root=sy(r),i}}function ly(t){if(t.type==="file")return{type:"file",mtime:t.mtime,data:Array.from(t.data??[])};const r={};for(const[i,l]of t.children)r[i]=ly(l);return{type:"dir",mtime:t.mtime,children:r}}function sy(t){if(t.type==="file")return{type:"file",mtime:t.mtime,data:new Uint8Array(t.data??[])};const r=new Map;for(const[i,l]of Object.entries(t.children??{}))r.set(i,sy(l));return{type:"dir",mtime:t.mtime,children:r}}const Kh=["null","zero","random"],Gh=256,qh=()=>Date.now();class Gb{constructor(){Ve(this,"readonly",!1)}device(r){const i=Kt(r);if(gn(r)!=="/"||!Kh.includes(i))throw new xe("ENOENT",r);return i}stat(r){return r==="/"?{type:"dir",size:0,mtime:qh()}:(this.device(r),{type:"dev",size:0,mtime:qh()})}readdir(r){if(r!=="/")throw new xe("ENOTDIR",r);return[...Kh]}read(r){switch(this.device(r)){case"null":return new Uint8Array;case"zero":return new Uint8Array(Gh);case"random":return crypto.getRandomValues(new Uint8Array(Gh));default:throw new xe("ENOENT",r)}}write(r,i){if(this.device(r)!=="null")throw new xe("EROFS",r)}mkdir(r){throw new xe("EROFS",r)}unlink(r){throw new xe("EROFS",r)}}const Yh=()=>Date.now(),Xh=t=>new TextEncoder().encode(t);class qb{constructor(r){Ve(this,"readonly",!0);this.source=r}entries(){return["processes",...this.source().map(r=>r.pid)]}find(r){return this.source().find(i=>i.pid===r)}stat(r){if(r==="/")return{type:"dir",size:0,mtime:Yh()};const i=Kt(r);if(gn(r)!=="/"||!this.entries().includes(i))throw new xe("ENOENT",r);return{type:"file",size:this.read(r).length,mtime:Yh()}}readdir(r){if(r!=="/")throw new xe("ENOTDIR",r);return this.entries()}read(r){const i=Kt(r);if(i==="processes"){const a=this.source().map(c=>`${c.pid.slice(0,8)}  ${c.state.padEnd(8)}  p${c.priority}  ${c.name}`).join(`
`);return Xh(`PID       STATE     PRIO  NAME
${a}
`)}const l=this.find(i);if(!l)throw new xe("ENOENT",r);return Xh(`pid:      ${l.pid}
ppid:     ${l.ppid??"-"}
name:     ${l.name}
exec:     ${l.exec}
state:    ${l.state}
priority: ${l.priority}
uid:      ${l.uid}
`)}write(r){throw new xe("EROFS",r)}mkdir(r){throw new xe("EROFS",r)}unlink(r){throw new xe("EROFS",r)}}const Jh=()=>Date.now(),Yb=t=>new TextEncoder().encode(t);class Xb{constructor(r){Ve(this,"readonly",!0);this.source=r}find(r){return this.source().find(i=>i.exec===r)}stat(r){if(r==="/")return{type:"dir",size:0,mtime:Jh()};const i=Kt(r);if(gn(r)!=="/"||!this.find(i))throw new xe("ENOENT",r);return{type:"file",size:this.read(r).length,mtime:Jh()}}readdir(r){if(r!=="/")throw new xe("ENOTDIR",r);return this.source().map(i=>i.exec).sort()}read(r){const i=this.find(Kt(r));if(!i)throw new xe("ENOENT",r);return Yb(`#!vortex-program
exec=${i.exec}
name=${i.name}
`)}write(r){throw new xe("EROFS",r)}mkdir(r){throw new xe("EROFS",r)}unlink(r){throw new xe("EROFS",r)}}const Zh="vortex.vfs";function Jb(){return{load(){const t=localStorage.getItem(Zh);if(!t)return null;try{return JSON.parse(t)}catch{return null}},save(t){localStorage.setItem(Zh,JSON.stringify(t))}}}const ay=w.createContext(null),em=()=>({x:(typeof window<"u"?window.innerWidth:800)/2,y:(typeof window<"u"?window.innerHeight:600)/2}),Zb=`Welcome to VortexOS.\r
\r
This is a real file, stored on a real virtual filesystem.\r
Edit it in Notes, browse the tree in Explorer, or read /proc and /bin.\r
`;function eC(){const t=new Bs;return t.mkdir("/home"),t.mkdir("/home/user"),t.mkdir("/home/user/Documents"),t.mkdir("/tmp"),t.write("/home/user/welcome.txt",new TextEncoder().encode(Zb)),t}function tC(){const t=new RS;Ub(t);const r=new $S({registry:t,persistence:Wb(em),defaultWindowLocation:em}),i=Jb(),l=i.load(),a=l?Bs.deserialize(l):eC(),c=new Kb;return c.mount("/",a),c.mount("/dev",new Gb),c.mount("/proc",new qb(()=>r.processInfo())),c.mount("/bin",new Xb(()=>r.registry.list().map(f=>({exec:f.exec,name:f.name})))),c.setOnChange(()=>i.save(a.serialize())),r.mountVfs(c),l||i.save(a.serialize()),r}function nC({children:t,kernel:r}){const i=w.useMemo(()=>r??tC(),[r]);return g.jsx(ay.Provider,{value:i,children:t})}function ed(){const t=w.useContext(ay);if(!t)throw new Error("useKernel must be used within a KernelProvider");return t}function uy(){const t=ed();return w.useSyncExternalStore(t.subscribe,t.getSnapshot)}const cy=O.createContext({});function rC({children:t}){const r=ed(),i=uy(),l=w.useMemo(()=>i.map(x=>({uuid:x.pid,priority:x.priority,component:r.registry.component(x.exec)??(()=>null),selected:!1,icon:x.icon,name:x.name,location:x.window})),[i,r]),a=x=>{const S=x.componentName;S&&r.syscall(null,"spawn",{exec:S,name:x.name,icon:x.icon,argv:x.argv})},c=x=>{x&&r.syscall(null,"kill",{pid:x})},f=(x,S)=>{x.uuid&&r.syscall(null,"win_focus",{pid:x.uuid})},p=(x,S)=>{x&&r.syscall(null,"win_move",{pid:x,location:S})},h=x=>r.registry.component(x),m=x=>{switch(x){case"folder":return Ln;case"notes":return xo}},v=[{name:"File",icon:Ln,componentName:"explorer",component:qc},{name:"Notes",icon:xo,componentName:"notes",component:Gc}];return g.jsx(cy.Provider,{value:{processes:l,setProcesses:()=>{},changePriority:f,closeProcess:c,ordenatedProcess:l,addProcess:a,handleProceessLocationChange:p,fetchIcon:m,fetchComponent:h,programs:v},children:t})}function Us(){return O.useContext(cy)}let hi=null;function Hs(){try{if(!hi){const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;hi=new t}return hi.state==="suspended"&&hi.resume(),hi}catch{return null}}function ki(t,{freq:r,start:i,dur:l,type:a="sine",gain:c=.2}){const f=t.createOscillator(),p=t.createGain();f.type=a,f.frequency.value=r;const h=t.currentTime+i;p.gain.setValueAtTime(1e-4,h),p.gain.linearRampToValueAtTime(c,h+.02),p.gain.exponentialRampToValueAtTime(1e-4,h+l),f.connect(p).connect(t.destination),f.start(h),f.stop(h+l+.05)}function oC(){const t=Hs();if(!t)return;[[261.63,"sine"],[329.63,"sine"],[392,"sine"],[523.25,"triangle"]].forEach(([i,l],a)=>ki(t,{freq:i,start:a*.18,dur:1.8,type:l,gain:.15}))}function iC(){const t=Hs();t&&(ki(t,{freq:880,start:0,dur:.16,type:"sine",gain:.22}),ki(t,{freq:1318.51,start:0,dur:.4,type:"sine",gain:.1}))}function lC(){const t=Hs();t&&ki(t,{freq:200,start:0,dur:.05,type:"square",gain:.05})}function sC(){const t=Hs();t&&[523.25,392,329.63,261.63].forEach((r,i)=>ki(t,{freq:r,start:i*.18,dur:.7,type:"sine",gain:.15}))}const dy=w.createContext({alert:async()=>{}}),fy=()=>w.useContext(dy),aC=({type:t})=>{const r={width:34,height:34,flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",color:"#fff",borderRadius:"50%"};return t==="error"?g.jsx("div",{style:{...r,background:"#d40000",fontSize:20},children:"✕"}):t==="warning"?g.jsxs("div",{style:{width:36,height:34,flexShrink:0,position:"relative"},children:[g.jsx("div",{style:{width:0,height:0,borderLeft:"18px solid transparent",borderRight:"18px solid transparent",borderBottom:"32px solid #ffd000"}}),g.jsx("span",{style:{position:"absolute",left:15,top:9,fontWeight:"bold",color:"#000"},children:"!"})]}):g.jsx("div",{style:{...r,background:"#000080",fontStyle:"italic",fontFamily:"Georgia, serif",fontSize:22},children:"i"})};function uC({children:t}){const[r,i]=w.useState(null),l=w.useCallback(c=>(iC(),new Promise(f=>{i({title:c.title??"VortexOS",message:c.message,type:c.type??"info",resolve:f})})),[]),a=()=>{r==null||r.resolve(),i(null)};return w.useEffect(()=>{if(!r)return;const c=f=>{(f.key==="Enter"||f.key==="Escape")&&a()};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r]),g.jsxs(dy.Provider,{value:{alert:l},children:[t,r&&g.jsx("div",{style:{position:"fixed",inset:0,zIndex:1e5,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.08)"},children:g.jsxs(Ss,{style:{minWidth:330,maxWidth:420},children:[g.jsxs(ks,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[g.jsx("span",{children:r.title}),g.jsx(ve,{onClick:a,style:{width:20,height:18,minWidth:0,padding:0,fontWeight:"bold"},children:"✕"})]}),g.jsxs(xt,{children:[g.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[g.jsx(aC,{type:r.type}),g.jsx("p",{style:{whiteSpace:"pre-line",lineHeight:1.4},children:r.message})]}),g.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:g.jsx(ve,{onClick:a,style:{minWidth:84},primary:!0,children:"OK"})})]})]})})]})}const cC="/clouds.jpg",ps="/w95.png",dC=ww`from { width: 0 } to { width: 100% }`,fC=B.div`
    position: fixed;
    inset: 0;
    background-image: url(${cC});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`,pC=B.div`
    position: fixed;
    inset: 0;
    background: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
`,hC=B.div`
    width: 320px;
    height: 20px;
    margin-top: 48px;
    padding: 2px;
    background: #000;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,mC=B.div`
    height: 100%;
    background: linear-gradient(90deg, #000080, #1084d0);
    animation: ${dC} 2.1s linear forwards;
`,gC=()=>{const t=js(),[r,i]=w.useState(!1),l=()=>{oC(),i(!0),setTimeout(()=>t("/vortex"),2300)};return r?g.jsxs(pC,{children:[g.jsx("img",{src:ps,width:110,alt:""}),g.jsx("h1",{style:{fontWeight:400,letterSpacing:3,margin:"16px 0 0"},children:"VortexOS"}),g.jsx(hC,{children:g.jsx(mC,{})}),g.jsx("p",{style:{color:"#9a9a9a",marginTop:16,fontSize:13},children:"Starting VortexOS…"})]}):g.jsxs(fC,{children:[g.jsx("img",{src:ps,width:170,className:"logo",alt:""}),g.jsx("h1",{style:{margin:"10px 0 4px",color:"#000"},children:"VortexOS"}),g.jsx(ve,{primary:!0,onClick:l,style:{marginTop:8},children:"Are you ready?"}),g.jsx("p",{style:{marginTop:14,color:"#000"},children:"By Serious Sam"})]})},yC=()=>{const t=w.useRef(null),[r,i]=w.useState(0),{addProcess:l}=Us(),a=()=>{t.current&&i(t.current.getBoundingClientRect().height/7)},[c,f]=w.useState([[{name:"Recycle Bin",icon:Zg,selected:!1,componentName:"recycle_bin",component:dg,priority:0},{name:"GameCache",icon:Jc,selected:!1,componentName:"backlogger",component:Ug,priority:0}],[{name:"My Computer",icon:Sc,selected:!1,componentName:"my_computer",component:fg,priority:0},{name:"Nightwave Plaza",icon:iy,selected:!1,componentName:"vaporwave",component:Qg,priority:0}],[{name:"Task Manager",icon:Xc,selected:!1,componentName:"task_manager",component:hg,priority:0},{name:"Doom",icon:ey,selected:!1,componentName:"doom",component:mg,priority:0}],[{name:"Explorer",icon:Ln,selected:!1,componentName:"explorer",component:qc,priority:0},{name:"Doom II",icon:ty,selected:!1,componentName:"doomII",component:gg,priority:0}],[{name:"Browser",icon:ny,selected:!1,componentName:"browser",component:Hg,priority:0},{name:"Prince of Persia",icon:oy,selected:!1,componentName:"persia",component:Vg,priority:0}],[{name:"Notes",icon:xo,selected:!1,componentName:"notes",component:Gc,priority:0},{name:"Tomb Raider",icon:ry,selected:!1,componentName:"tomb",component:Wg,priority:0}],[{name:"Terminal",icon:Zc,selected:!1,componentName:"terminal",component:Jg,priority:0}]]),p=(x,S)=>{f(c.map((R,k)=>R.map(($,b)=>({...$,selected:x===k&&S===b}))))},h=(x,S)=>{var k;const R=(k=c[x])==null?void 0:k[S];R&&l(R)},m=(x,S)=>{c[x]&&c[x][S]||f(c.map(R=>R.map(k=>({...k,selected:!1}))))},v=()=>{new Audio("win98.mp3").play()};return w.useEffect(()=>(v(),a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),g.jsx("div",{ref:t,style:{width:"100vw",height:"calc(100vh - 40px)"},children:Array.from({length:7}).map((x,S)=>g.jsx("div",{style:{height:r,display:"flex"},children:Array.from({length:10}).map((R,k)=>g.jsx("div",{onClick:()=>m(S,k),style:{width:"10.2857%",display:"flex",justifyContent:"center",alignItems:"center"},children:c[S]&&c[S][k]&&g.jsxs("div",{onClick:$=>{$.stopPropagation(),p(S,k)},onDoubleClick:()=>h(S,k),style:{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",padding:3,border:c[S][k].selected?"1px dotted #ffffff":"1px solid transparent"},children:[g.jsx("img",{src:c[S][k].icon,alt:c[S][k].name,style:{height:48,width:48,objectFit:"contain"}}),g.jsx("p",{style:{marginTop:2,padding:"0 3px",textAlign:"center",color:"#fff",textShadow:c[S][k].selected?"none":"1px 1px 0 rgba(0,0,0,0.6)",backgroundColor:c[S][k].selected?"#000080":"transparent"},children:c[S][k].name})]})},k))},S))})},ns="/controlpanel.png",Ec=40,xC=B.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${Ec}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 3px 4px;
    background: #c0c0c0;
    border-top: 1px solid #ffffff;
    z-index: 99999;
`,wC=B.button`
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
    border-color: ${t=>t.$pressed?"#808080 #ffffff #ffffff #808080":"#ffffff #808080 #808080 #ffffff"};
`,vC=B.div`
    margin-left: auto;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    font-size: 12px;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,kC=[{name:"Terminal",icon:Zc,componentName:"terminal"},{name:"Explorer",icon:Ln,componentName:"explorer"},{name:"Notes",icon:xo,componentName:"notes"},{name:"GameCache",icon:Jc,componentName:"backlogger"},{name:"Task Manager",icon:Xc,componentName:"task_manager"},{name:"Control Panel",icon:ns,componentName:"control_panel"}];function SC(){const[t,r]=w.useState(()=>new Date);w.useEffect(()=>{const c=setInterval(()=>r(new Date),1e4);return()=>clearInterval(c)},[]);let i=t.getHours();const l=i>=12?"PM":"AM";i=i%12||12;const a=String(t.getMinutes()).padStart(2,"0");return`${i}:${a} ${l}`}const EC=()=>{const[t,r]=w.useState(!1),[i,l]=w.useState(!1),[a,c]=w.useState(!1),{changePriority:f,processes:p,addProcess:h,handleProceessLocationChange:m}=Us(),{minimized:v,minimize:x,restore:S}=cr(),{alert:R}=fy(),k=SC(),$=js(),[b,A]=w.useState(null),[C,D]=w.useState(!1);w.useEffect(()=>{if(!b)return;const q=()=>A(null);return document.addEventListener("click",q),()=>document.removeEventListener("click",q)},[b]);const U=()=>{p.forEach((q,fe)=>{q.uuid&&(S(q.uuid),m(q.uuid,{x:340+fe*34,y:230+fe*34}))}),A(null)},Q=()=>{const q=p.length;if(q){const fe=Math.ceil(Math.sqrt(q)),je=Math.ceil(q/fe),Ee=window.innerWidth/fe,Re=(window.innerHeight-Ec)/je;p.forEach((Ce,Ae)=>{if(!Ce.uuid)return;const ge=Ae%fe,ce=Math.floor(Ae/fe);S(Ce.uuid),m(Ce.uuid,{x:Math.round(ge*Ee+Ee/2),y:Math.round(ce*Re+Re/2)})})}A(null)},V=()=>{p.forEach(q=>q.uuid&&x(q.uuid)),A(null)};w.useEffect(()=>{if(!t)return;const q=()=>{r(!1),l(!1),c(!1)},fe=je=>je.key==="Escape"&&q();return document.addEventListener("click",q),document.addEventListener("keydown",fe),()=>{document.removeEventListener("click",q),document.removeEventListener("keydown",fe)}},[t]);const G=q=>{h(q),r(!1),l(!1)},pe=q=>{const fe=q.uuid;fe&&(v.includes(fe)?(S(fe),f(q,0)):q.priority===0?x(fe):f(q,0))};return g.jsxs(xC,{onClick:q=>q.stopPropagation(),onContextMenu:q=>{q.preventDefault(),q.stopPropagation(),A({x:q.clientX,y:q.clientY})},children:[g.jsxs("div",{style:{position:"relative"},children:[g.jsxs(ve,{onClick:()=>{lC(),r(q=>!q),l(!1),c(!1)},active:t,style:{fontWeight:"bold",height:30,display:"flex",alignItems:"center",gap:4},children:[g.jsx("img",{src:ps,alt:"",style:{height:20}}),"Start"]}),t&&g.jsxs("div",{style:{position:"absolute",bottom:"calc(100% + 3px)",left:0,display:"flex",boxShadow:"2px 2px 0 rgba(0,0,0,0.4)"},children:[g.jsx("div",{style:{width:28,background:"linear-gradient(180deg, #00007a 0%, #000033 100%)",borderTop:"2px solid #dfdfdf",borderLeft:"2px solid #dfdfdf",display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"10px 0"},children:g.jsxs("div",{style:{transform:"rotate(-90deg)",transformOrigin:"center",whiteSpace:"nowrap",color:"#fff"},children:[g.jsx("span",{style:{fontWeight:400,letterSpacing:1},children:"Vortex"}),g.jsx("span",{style:{fontWeight:"bold",fontSize:20,marginLeft:4},children:"95"})]})}),g.jsxs(rr,{style:{width:200,position:"static"},children:[g.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:[g.jsxs(_e,{style:{cursor:"pointer",justifyContent:"space-between"},children:[g.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("img",{src:Ln,style:{width:20}})," Programs"]}),g.jsx("span",{children:"▸"})]}),i&&g.jsx(rr,{style:{position:"absolute",left:"100%",top:0,width:180},children:kC.map(q=>g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>G(q),children:g.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("img",{src:q.icon,style:{width:20}})," ",q.name]})},q.componentName))})]}),g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>G({name:"Explorer",icon:Ln,componentName:"explorer",argv:["/home/user/Documents"]}),children:g.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("img",{src:Ln,style:{width:20}})," Documents"]})}),g.jsxs("div",{style:{position:"relative"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[g.jsxs(_e,{style:{cursor:"pointer",justifyContent:"space-between"},children:[g.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("img",{src:ns,style:{width:20}})," Settings"]}),g.jsx("span",{children:"▸"})]}),a&&g.jsx(rr,{style:{position:"absolute",left:"100%",top:0,width:175},children:g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>G({name:"Control Panel",icon:ns,componentName:"control_panel"}),children:g.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[g.jsx("img",{src:ns,style:{width:20}})," Control Panel"]})})})]}),g.jsx(_e,{disabled:!0,children:"Find ▸"}),g.jsx(_e,{disabled:!0,children:"Help"}),g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>R({title:"Run",message:"Tip: open the Terminal and type a command like `ls` or `help`.",type:"info"}),children:"Run..."}),g.jsx(ir,{}),g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>$("/shutdown"),children:"Shut Down..."})]})]})]}),g.jsx("div",{style:{display:"flex",flex:1,gap:3,overflow:"hidden",marginLeft:2},children:p.map(q=>{const fe=q.priority===0&&!v.includes(q.uuid??"");return g.jsxs(wC,{$pressed:fe,onClick:()=>pe(q),children:[g.jsx("img",{src:q.icon,style:{width:18,height:18,flexShrink:0}}),g.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:q.name})]},q.uuid)})}),g.jsx(vC,{className:"tray-clock",onMouseEnter:()=>D(!0),onMouseLeave:()=>D(!1),children:k}),C&&g.jsx("div",{style:{position:"fixed",right:8,bottom:Ec+6,background:"#ffffe1",border:"1px solid #000",padding:"2px 6px",fontSize:11,zIndex:1e5,pointerEvents:"none"},children:new Date().toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})}),b&&g.jsxs(rr,{style:{position:"fixed",left:b.x,top:b.y-112,width:200,zIndex:1e5},children:[g.jsx(_e,{style:{cursor:"pointer"},onClick:U,children:"Cascade Windows"}),g.jsx(_e,{style:{cursor:"pointer"},onClick:Q,children:"Tile Windows"}),g.jsx(ir,{}),g.jsx(_e,{style:{cursor:"pointer"},onClick:V,children:"Minimize All Windows"})]})]})},bC=40,CC=({process:t})=>{var Ee,Re,Ce,Ae;const{changePriority:r,closeProcess:i,handleProceessLocationChange:l}=Us(),{changeCursor:a,minimized:c,minimize:f}=cr(),[p,h]=w.useState({x:((Ee=t.location)==null?void 0:Ee.x)??0,y:((Re=t.location)==null?void 0:Re.y)??0}),[m,v]=w.useState(!1),[x,S]=w.useState(null),[R,k]=w.useState(!1),[$,b]=w.useState(!1),A=w.useRef(null),C=w.useRef(null),D=t.priority===0,U=!!t.uuid&&c.includes(t.uuid);w.useEffect(()=>{var ge,ce;m||h({x:((ge=t.location)==null?void 0:ge.x)??0,y:((ce=t.location)==null?void 0:ce.y)??0})},[(Ce=t.location)==null?void 0:Ce.x,(Ae=t.location)==null?void 0:Ae.y]),w.useEffect(()=>(m?(a("Grabbing.cur"),document.addEventListener("mousemove",V),document.addEventListener("mouseup",G)):(a("arrow.cur"),document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",G)),()=>{document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",G)}),[m]);const Q=ge=>{var F;if(R)return;t.uuid&&r(t,0);const ce=(F=A.current)==null?void 0:F.getBoundingClientRect();ce&&(C.current={mouseX:ge.clientX,mouseY:ge.clientY,left:ce.left,top:ce.top,w:ce.width,h:ce.height},S({x:ce.left,y:ce.top,w:ce.width,h:ce.height}),v(!0))},V=ge=>{if(!C.current)return;const ce=ge.clientX-C.current.mouseX,F=ge.clientY-C.current.mouseY;S({x:C.current.left+ce,y:C.current.top+F,w:C.current.w,h:C.current.h})},G=ge=>{if(v(!1),C.current&&t.uuid){const ce=ge.clientX-C.current.mouseX,F=ge.clientY-C.current.mouseY,J={x:p.x+ce,y:p.y+F};h(J),l(t.uuid,J)}S(null),C.current=null},pe=()=>{if(t.uuid){if(R){f(t.uuid);return}b(!0),setTimeout(()=>{t.uuid&&f(t.uuid),b(!1)},150)}},q=ge=>ge.stopPropagation(),fe=R?void 0:$?"winMinimize 150ms ease-in forwards":"winOpen 140ms ease-out",je=R?{position:"fixed",top:0,left:0,width:"100vw",height:`calc(100vh - ${bC}px)`,transform:"none",zIndex:D?9999:t.priority+1,userSelect:"none",display:U?"none":"flex",flexDirection:"column"}:{position:"absolute",top:`${p.y}px`,left:`${p.x}px`,transform:"translate(-50%, -50%)",zIndex:D?9999:t.priority+1,userSelect:"none",display:U?"none":void 0,animation:fe};return g.jsxs(g.Fragment,{children:[g.jsxs(Ss,{ref:A,onClick:()=>r(t,0),resizable:!R,className:"window",style:je,children:[g.jsxs(ks,{onMouseDown:Q,onDoubleClick:()=>k(ge=>!ge),className:"window-title",style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:D?void 0:"#808080"},children:[g.jsxs("div",{style:{display:"flex",alignItems:"center",overflow:"hidden"},children:[g.jsx("img",{src:t.icon,style:{width:18,height:18,marginRight:4}}),g.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.name})]}),g.jsxs("div",{style:{display:"flex",gap:2},onMouseDown:q,onClick:q,children:[g.jsx(ec,{label:"Minimize",onClick:pe,glyph:g.jsx("span",{style:{display:"block",width:8,height:2,background:"#000",marginTop:5}})}),g.jsx(ec,{label:"Maximize",onClick:()=>k(ge=>!ge),glyph:g.jsx("span",{style:{display:"block",width:9,height:8,border:"1px solid #000",borderTopWidth:2}})}),g.jsx(ec,{label:"Close",onClick:()=>t.uuid&&i(t.uuid),glyph:g.jsx("span",{style:{fontWeight:"bold",fontSize:11,lineHeight:"10px"},children:"✕"})})]})]}),t.component?g.jsx("div",{style:{display:"flex",flexDirection:"column",width:"100%",...R?{flex:1,minHeight:0,overflow:"auto"}:{}},children:g.jsx(jS,{pid:t.uuid??null,children:O.createElement(t.component)})}):""]},t.uuid),x&&Vm.createPortal(g.jsx("div",{style:{position:"fixed",left:x.x,top:x.y,width:x.w,height:x.h,border:"2px dotted #fff",mixBlendMode:"difference",pointerEvents:"none",zIndex:100001}}),document.body)]})},ec=({glyph:t,onClick:r,label:i})=>g.jsx(ve,{"aria-label":i,onClick:r,style:{width:20,height:18,minWidth:0,padding:0,display:"flex",alignItems:"center",justifyContent:"center"},children:t}),AC=()=>{const{processes:t}=Us();return g.jsx(g.Fragment,{children:t.map(r=>g.jsx(CC,{process:r},r.uuid))})},$C=()=>{const{cursor:t,crt:r}=cr(),{alert:i}=fy(),[l,a]=w.useState(!1),[c,f]=w.useState({x:0,y:0});return w.useEffect(()=>{const p=()=>a(!1),h=m=>m.key==="Escape"&&a(!1);return document.addEventListener("click",p),document.addEventListener("keydown",h),()=>{document.removeEventListener("click",p),document.removeEventListener("keydown",h)}},[]),g.jsxs("div",{style:{position:"fixed",inset:0,overflow:"hidden",cursor:t},onContextMenu:p=>{p.preventDefault(),f({x:Math.min(p.pageX,window.innerWidth-200),y:Math.min(p.pageY,window.innerHeight-240-8)}),a(!0)},children:[g.jsx(yC,{}),g.jsx(AC,{}),l&&g.jsxs(rr,{style:{position:"fixed",top:c.y,left:c.x,width:190,zIndex:99998},onClick:()=>a(!1),children:[g.jsx(_e,{disabled:!0,children:"Arrange Icons ▸"}),g.jsx(_e,{disabled:!0,children:"Line up Icons"}),g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>window.location.reload(),children:"Refresh"}),g.jsx(ir,{}),g.jsx(_e,{disabled:!0,children:"Paste"}),g.jsx(_e,{disabled:!0,children:"Paste Shortcut"}),g.jsx(ir,{}),g.jsx(_e,{disabled:!0,children:"New ▸"}),g.jsx(ir,{}),g.jsx(_e,{style:{cursor:"pointer"},onClick:()=>i({title:"Display Properties",message:`VortexOS 2.0
Experimental Windows 95 simulation.

Microkernel build — desktop, VFS, shell.`,type:"info"}),children:"Properties"})]}),g.jsx(EC,{}),r&&g.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:1e6,background:"repeating-linear-gradient(rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",mixBlendMode:"multiply"},children:g.jsx("div",{style:{position:"absolute",inset:0,boxShadow:"inset 0 0 150px rgba(0,0,0,0.55)"}})})]})},RC=()=>{const t=js(),[r,i]=w.useState("closing");return w.useEffect(()=>{sC();const l=setTimeout(()=>i("off"),2600);return()=>clearTimeout(l)},[]),r==="closing"?g.jsxs("div",{style:{position:"fixed",inset:0,background:"#008080",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",color:"#fff"},children:[g.jsx("img",{src:ps,width:110,alt:""}),g.jsx("h1",{style:{fontWeight:400,letterSpacing:3,margin:"16px 0 0"},children:"VortexOS"}),g.jsx("p",{style:{marginTop:28,fontSize:14},children:"Please wait while VortexOS shuts down…"})]}):g.jsxs("div",{style:{position:"fixed",inset:0,background:"#000",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:34},children:[g.jsx("p",{style:{color:"#ffa000",fontSize:26,textAlign:"center",padding:"0 20px",textShadow:"0 0 10px rgba(255,160,0,0.35)"},children:"It's now safe to turn off your computer."}),g.jsx(ve,{onClick:()=>t("/"),children:"Restart"})]})},TC=()=>{const{wallpaper:t}=cr(),r=()=>t.image?t.type===2?{background:t.image}:{backgroundImage:`url('/${t.image}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}:{background:"#008080"};return g.jsx("div",{style:{...r(),width:"100vw",height:"100vh",overflow:"hidden"},children:g.jsxs(Uk,{children:[g.jsx(Yl,{path:"/",element:g.jsx(gC,{})}),g.jsx(Yl,{path:"/vortex",element:g.jsx($C,{})}),g.jsx(Yl,{path:"/shutdown",element:g.jsx(RC,{})})]})})},jC=xw`
  ${vw}
  
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${X1}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${J1}') format('woff2');
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
`,PC=()=>g.jsxs(fS,{children:[g.jsx(jC,{}),g.jsx(mw,{theme:Y1,children:g.jsx(nC,{children:g.jsx(ub,{children:g.jsx(rC,{children:g.jsx(uC,{children:g.jsx(TC,{})})})})})})]});yx.createRoot(document.getElementById("root")).render(g.jsx(w.StrictMode,{children:g.jsx(PC,{})}));
