import{d as l,n as je,o as ve,b as Se,r as p,p as re,j as n,A as ke,M as $e,c as E,e as w,q as Ce,s as Te,t as k,v as ie,g as De,h as N,w as ae,x as Ae,y as Fe,z as Re}from"./index-C4Ycjhpd.js";import{p as Ee,a as Pe}from"./appPackage-B4CYMNKd.js";const ze={js:"js",jsx:"js",ts:"js",tsx:"js",mjs:"js",cjs:"js",css:"css",scss:"css",less:"css",html:"html",htm:"html",xml:"html",svg:"html",json:"json",md:"markdown",markdown:"markdown",sh:"shell",bash:"shell",zsh:"shell",py:"python"};function le(r){var d;const c=((d=r.split(".").pop())==null?void 0:d.toLowerCase())??"";return ze[c]??"text"}const $=r=>`\\b(?:${r.trim().split(/\s+/).join("|")})\\b`,Me={js:[["comment","//[^\\n]*|/\\*[\\s\\S]*?\\*/"],["string","`(?:[^`\\\\]|\\\\.)*`|\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'"],["keyword",$("import from export default const let var function return if else for while do switch case break continue new class extends super this typeof instanceof in of try catch finally throw await async yield delete void static get set")],["literal",$("true false null undefined NaN Infinity")],["number","\\b(?:0x[\\da-fA-F]+|\\d+\\.?\\d*(?:e[+-]?\\d+)?)\\b"],["func","\\b[a-zA-Z_$][\\w$]*(?=\\s*\\()"]],css:[["comment","/\\*[\\s\\S]*?\\*/"],["string",`"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'`],["atrule","@[\\w-]+"],["prop","[a-z-]+(?=\\s*:)"],["number","#[\\da-fA-F]{3,8}\\b|-?\\b\\d+\\.?\\d*(?:px|em|rem|%|vh|vw|fr|s|ms|deg|pt)?\\b"]],html:[["comment","<!--[\\s\\S]*?-->"],["string",`"[^"]*"|'[^']*'`],["tag","</?[a-zA-Z][\\w-]*|/?>"],["attr","\\b[a-zA-Z-]+(?==)"]],json:[["prop",'"(?:[^"\\\\]|\\\\.)*"(?=\\s*:)'],["string",'"(?:[^"\\\\]|\\\\.)*"'],["literal",$("true false null")],["number","-?\\b\\d+\\.?\\d*(?:e[+-]?\\d+)?\\b"]],markdown:[["heading","^#{1,6} .*$"],["code","```[\\s\\S]*?```|`[^`\\n]+`"],["bold","\\*\\*[^*\\n]+\\*\\*|__[^_\\n]+__"],["link","\\[[^\\]\\n]+\\]\\([^)\\n]+\\)"],["list","^\\s*(?:[-*+]|\\d+\\.) "],["italic","\\*[^*\\n]+\\*|_[^_\\n]+_"]],shell:[["comment","#[^\\n]*"],["string",`"(?:[^"\\\\]|\\\\.)*"|'[^']*'`],["variable","\\$\\w+|\\$\\{[^}]+\\}"],["keyword",$("if then else elif fi for in do done while case esac function return export local echo cd")],["number","\\b\\d+\\b"]],python:[["comment","#[^\\n]*"],["string",`"""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'`],["keyword",$("def class return if elif else for while in import from as with try except finally raise lambda and or not is pass break continue yield global nonlocal async await")],["literal",$("True False None")],["number","\\b\\d+\\.?\\d*\\b"],["func","\\b[a-zA-Z_]\\w*(?=\\s*\\()"]],text:[]},_e={comment:"color:#008000;font-style:italic",string:"color:#a31515",keyword:"color:#0000ff",literal:"color:#0000ff",number:"color:#098658",func:"color:#795e26",prop:"color:#0451a5",atrule:"color:#af00db",tag:"color:#800000",attr:"color:#e50000",heading:"color:#800080;font-weight:bold",code:"color:#a31515",bold:"font-weight:bold",italic:"font-style:italic",link:"color:#0000ee;text-decoration:underline",list:"color:#af00db",variable:"color:#267f99"};function P(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const B=new Map;function Oe(r){if(B.has(r))return B.get(r);const c=Me[r],d=c.length?new RegExp(c.map(([x,h])=>`(?<${x}>${h})`).join("|"),"gm"):null;return B.set(r,d),d}function Le(r,c){const d=Oe(c);if(!d)return P(r);let x="",h=0;for(const f of r.matchAll(d)){x+=P(r.slice(h,f.index));const m=f.groups??{},g=Object.keys(m).find(b=>m[b]!==void 0)??"";x+=`<span style="${_e[g]??""}">${P(f[0])}</span>`,h=f.index+f[0].length}return x+=P(r.slice(h)),x}const ce="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="%231e7bd6"/><stop offset="1" stop-color="%236a1b9a"/></linearGradient></defs><rect x="5" y="5" width="38" height="38" rx="8" fill="url(%23g)"/><text x="24" y="33" font-size="22" text-anchor="middle" fill="white" font-family="monospace" font-weight="bold">&lt;/&gt;</text></svg>'),M="'Lucida Console', 'Courier New', monospace",Ne=l.div`
    flex: 1;
    min-height: 0;
    display: flex;
`,Be=l.div`
    width: 188px;
    flex-shrink: 0;
    overflow: auto;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    font-size: 12px;
    padding: 4px 0;
`,Ie=l.div`
    padding: 1px 6px 1px ${({$depth:r})=>6+r*14}px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    color: ${({$dir:r})=>r?"#000080":"#000"};
    &:hover {
        background: #d8e6ff;
    }
`,Ke=l.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
`,He=l.div`
    display: flex;
    background: #c0c0c0;
    overflow-x: auto;
`,Ve=l.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    font-size: 12px;
    cursor: pointer;
    white-space: nowrap;
    background: ${({$active:r})=>r?"#fff":"#c0c0c0"};
    border: 1px solid #808080;
    border-bottom: ${({$active:r})=>r?"1px solid #fff":"1px solid #808080"};
    margin-bottom: -1px;
`,Ge=l.span`
    font-weight: bold;
    &:hover {
        color: #c00;
    }
`,Ue=l.div`
    flex: 1;
    min-height: 0;
    display: flex;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,We=l.div`
    flex-shrink: 0;
    width: 44px;
    overflow: hidden;
    text-align: right;
    padding: 6px 6px 6px 0;
    background: #f0f0f0;
    color: #999;
    font-family: ${M};
    font-size: 13px;
    line-height: 1.5;
    border-right: 1px solid #ddd;
    user-select: none;
`,Ze=l.div`
    position: relative;
    flex: 1;
    min-width: 0;
    overflow: hidden;
`,de=`
    margin: 0;
    padding: 6px;
    border: 0;
    font-family: ${M};
    font-size: 13px;
    line-height: 1.5;
    tab-size: 2;
    white-space: pre;
    overflow-wrap: normal;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`,qe=l.pre`
    ${de}
    position: absolute;
    inset: 0;
    overflow: auto;
    pointer-events: none;
    color: #000;
    background: transparent;
`,Xe=l.textarea`
    ${de}
    position: absolute;
    inset: 0;
    resize: none;
    outline: none;
    overflow: auto;
    color: transparent;
    caret-color: #000;
    background: transparent;
`,Ye=l.pre`
    height: 130px;
    margin: 0;
    overflow: auto;
    background: #000;
    color: #c0c0c0;
    font-family: ${M};
    font-size: 12px;
    padding: 6px;
    white-space: pre-wrap;
`,Je=l.div`
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 3px 6px;
    background: #c0c0c0;
    font-size: 12px;
`,z={path:"",name:"untitled.txt",content:"",lang:"text",dirty:!0},tt=()=>{var J;const r=je(),c=ve(),{prompt:d,confirm:x,alert:h}=Se(),[f,m]=p.useState([z]),[g,b]=p.useState(0),[I,pe]=p.useState(new Set([c])),[K,fe]=p.useState({}),[H,D]=p.useState(null),[ue,C]=p.useState(!1),[y,he]=p.useState(""),[xe,j]=p.useState("Ready"),v=p.useRef(f);v.current=f;const A=p.useRef(null),F=p.useRef(null),_=p.useRef(null),a=f[g]??z,O=async e=>{const t=await r.readdir(e).catch(()=>[]),s=await Promise.all(t.map(async o=>{const i=await r.stat(ae(e,o)).then(u=>u.type).catch(()=>"file");return{name:o,path:ae(e,o),type:i}}));s.sort((o,i)=>o.type===i.type?o.name.localeCompare(i.name):o.type==="dir"?-1:1),fe(o=>({...o,[e]:s}))};p.useEffect(()=>{O(c),(async()=>{const[e]=await r.argv();e&&V(e)})()},[]);const V=async e=>{const s=v.current.findIndex(T=>T.path===e);if(s>=0){b(s);return}const o=await r.readTextFile(e).catch(()=>""),i=re(e),u=[...v.current,{path:e,name:i,content:o,lang:le(i),dirty:!1}];v.current=u,m(u),b(u.length-1),j(`Opened ${e}`)},me=e=>{pe(t=>{const s=new Set(t);return s.has(e)?s.delete(e):(s.add(e),K[e]||O(e)),s})},G=e=>m(t=>t.map((s,o)=>o===g?{...s,content:e,dirty:!0}:s)),U=e=>{m(t=>{const s=t.filter((o,i)=>i!==e);return s.length?s:[z]}),b(t=>Math.max(0,t>=e?t-1:t))},R=async()=>{let e=a.path;if(!e){const t=window.prompt("Save as (name):",a.name);if(!t)return null;e=`${c}/${t}`}try{await r.writeTextFile(e,a.content);const t=e;return m(s=>s.map((o,i)=>i===g?{...o,path:t,name:re(t),lang:le(t),dirty:!1}:o)),j(`Saved ${t}`),O(c),t}catch(t){return j(`Save failed: ${t.code??t.message}`),null}},W=async()=>{let e=a.path;if((a.dirty||!e)&&(e=await R()),!!e){D("Running…");try{const t=await new Ae(r,c).run(`sh ${e}`);D(t.output||"(no output)"),j(`Exited with code ${t.code}`)}catch(t){D(String((t==null?void 0:t.message)??t))}}},Z=async()=>{var ee,te,ne,se,oe;const e=v.current[g]??a,t=e.content;if(!t.trim()){await h({title:"Publish",message:"Nothing to publish — the file is empty.",type:"warning"});return}const s=(e.name||"app").replace(/\.[^.]*$/,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||"app",o=((ee=Fe())==null?void 0:ee.username)||"user",i=(te=await d({title:"Publish to App Store",message:"App id (unique, reverse-DNS):",default:`com.${o}.${s}`}))==null?void 0:te.trim();if(!i)return;const u=(ne=await d({title:"Publish (2/4)",message:"App name:",default:e.name.replace(/\.[^.]*$/,"")||"My App"}))==null?void 0:ne.trim();if(!u)return;const T=(se=await d({title:"Publish (3/4)",message:"Version:",default:"1.0.0"}))==null?void 0:se.trim();if(!T)return;const be=await d({title:"Publish (4/4)",message:"Short description:",default:""})??"",ye=await x({title:"Permissions",message:"Should this app read & write its own files (the 'fs' capability)?"}),Q={manifest:{id:i,name:u,version:T,description:be,author:o,icon:ce,permissions:ye?["fs"]:[],entry:"index.html"},files:{"index.html":t}};try{Ee(Q),await Pe(Q),Re({title:"App Store",body:`Published ${u} v${T}`,type:"info",icon:ce}),j(`Published ${i}`),await h({title:"Published! 🚀",message:`"${u}" is now in the Vortex App Store. Open the App Store to install it on any account.`})}catch(S){await h({title:"Publish failed",message:String(((oe=S==null?void 0:S.response)==null?void 0:oe.status)===403?"That app id is already owned by another user.":(S==null?void 0:S.message)??S),type:"error"})}},q=()=>{const e=A.current;e&&(F.current&&(F.current.scrollTop=e.scrollTop,F.current.scrollLeft=e.scrollLeft),_.current&&(_.current.scrollTop=e.scrollTop))},ge=e=>{if(e.key==="Tab"){e.preventDefault();const t=e.currentTarget,s=t.selectionStart,o=t.selectionEnd,i=a.content.slice(0,s)+"  "+a.content.slice(o);G(i),requestAnimationFrame(()=>t.setSelectionRange(s+2,s+2))}else(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"?(e.preventDefault(),R()):(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="f"&&(e.preventDefault(),C(!0))},X=()=>{const e=A.current;if(!e||!y)return;const t=e.selectionEnd;let s=a.content.indexOf(y,t);if(s<0&&(s=a.content.indexOf(y,0)),s>=0){e.focus(),e.setSelectionRange(s,s+y.length);const o=a.content.slice(0,s).split(`
`).length;e.scrollTop=(o-3)*13*1.5,q(),j(`Found "${y}"`)}else j(`"${y}" not found`)},we=a.content.split(`
`).length,L=[],Y=(e,t)=>{const s=K[e];if(s)for(const o of s){const i=o.type==="dir";L.push(n.jsxs(Ie,{$depth:t,$dir:i,onClick:()=>i?me(o.path):V(o.path),title:o.path,children:[i?I.has(o.path)?"▾ ":"▸ ":"  ",i?"📁":"📄"," ",o.name]},o.path)),i&&I.has(o.path)&&Y(o.path,t+1)}};return Y(c,0),n.jsxs(ke,{$minW:640,$minH:420,children:[n.jsxs($e,{children:[n.jsxs(E,{label:"File",children:[n.jsxs(w,{onMouseDown:e=>{e.preventDefault();const t=[...v.current,{...z}];v.current=t,m(t),b(t.length-1)},children:["New",n.jsx("span",{children:"Ctrl+N"})]}),n.jsxs(w,{onMouseDown:e=>{e.preventDefault(),R()},children:["Save",n.jsx("span",{children:"Ctrl+S"})]}),n.jsx(Ce,{}),n.jsx(w,{onMouseDown:e=>{e.preventDefault(),U(g)},children:"Close Tab"})]}),n.jsx(E,{label:"Edit",children:n.jsxs(w,{onMouseDown:e=>{e.preventDefault(),C(!0)},children:["Find…",n.jsx("span",{children:"Ctrl+F"})]})}),n.jsxs(E,{label:"Run",children:[n.jsxs(w,{onMouseDown:e=>{e.preventDefault(),W()},children:["Run Script",n.jsx("span",{children:"F5"})]}),n.jsx(w,{onMouseDown:e=>{e.preventDefault(),Z()},children:"Publish to App Store…"}),n.jsx(w,{onMouseDown:e=>{e.preventDefault(),D(null)},children:"Hide Output"})]}),n.jsx(E,{label:"Help",children:n.jsx(w,{$disabled:!0,children:"VortexCode — VortexOS"})})]}),n.jsxs(Te,{children:[n.jsx(k,{onClick:()=>R(),children:"💾 Save"}),n.jsx(k,{onClick:()=>W(),children:"▶ Run"}),n.jsx(k,{onClick:()=>Z(),title:"Package this file as a .vxapp and publish it to the App Store",children:"🚀 Publish"}),n.jsx(ie,{}),n.jsx(k,{onClick:()=>C(e=>!e),children:"🔍 Find"}),n.jsx(ie,{}),n.jsx("span",{style:{fontSize:12,padding:"0 6px",color:"#444"},children:a.lang.toUpperCase()})]}),ue&&n.jsxs(Je,{children:[n.jsx("input",{autoFocus:!0,value:y,onChange:e=>he(e.target.value),onKeyDown:e=>{e.key==="Enter"&&X(),e.key==="Escape"&&C(!1)},placeholder:"Find text…",style:{flex:1,fontFamily:M}}),n.jsx(k,{onClick:X,children:"Next"}),n.jsx(k,{onClick:()=>C(!1),children:"✕"})]}),n.jsxs(Ne,{children:[n.jsx(Be,{children:L.length?L:n.jsx("div",{style:{padding:8,color:"#888"},children:"Empty"})}),n.jsxs(Ke,{children:[n.jsx(He,{children:f.map((e,t)=>n.jsxs(Ve,{$active:t===g,onClick:()=>b(t),children:[e.name,e.dirty?" •":"",n.jsx(Ge,{onClick:s=>{s.stopPropagation(),U(t)},children:"×"})]},t))}),n.jsxs(Ue,{children:[n.jsx(We,{ref:_,children:Array.from({length:we},(e,t)=>n.jsx("div",{children:t+1},t))}),n.jsxs(Ze,{children:[n.jsx(qe,{ref:F,dangerouslySetInnerHTML:{__html:Le(a.content,a.lang)+`
`}}),n.jsx(Xe,{ref:A,value:a.content,onChange:e=>G(e.target.value),onScroll:q,onKeyDown:ge,spellCheck:!1,wrap:"off"})]})]}),H!==null&&n.jsx(Ye,{children:H})]})]}),n.jsxs(De,{children:[n.jsxs(N,{$flex:1,children:[a.path||"untitled",a.dirty?" •":""]}),n.jsxs(N,{children:["Ln ",a.content.slice(0,((J=A.current)==null?void 0:J.selectionStart)??0).split(`
`).length]}),n.jsx(N,{children:xe})]})]})};export{tt as default};
