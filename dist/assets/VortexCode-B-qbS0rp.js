import{d as i,l as ae,n as ie,r as f,o as G,j as n,A as ce,M as de,c as D,e as m,p as fe,q as pe,s as S,t as U,g as ue,h as L,v as X,w as he}from"./index-B3T7uafB.js";const xe={js:"js",jsx:"js",ts:"js",tsx:"js",mjs:"js",cjs:"js",css:"css",scss:"css",less:"css",html:"html",htm:"html",xml:"html",svg:"html",json:"json",md:"markdown",markdown:"markdown",sh:"shell",bash:"shell",zsh:"shell",py:"python"};function Y(r){var d;const c=((d=r.split(".").pop())==null?void 0:d.toLowerCase())??"";return xe[c]??"text"}const b=r=>`\\b(?:${r.trim().split(/\s+/).join("|")})\\b`,me={js:[["comment","//[^\\n]*|/\\*[\\s\\S]*?\\*/"],["string","`(?:[^`\\\\]|\\\\.)*`|\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'"],["keyword",b("import from export default const let var function return if else for while do switch case break continue new class extends super this typeof instanceof in of try catch finally throw await async yield delete void static get set")],["literal",b("true false null undefined NaN Infinity")],["number","\\b(?:0x[\\da-fA-F]+|\\d+\\.?\\d*(?:e[+-]?\\d+)?)\\b"],["func","\\b[a-zA-Z_$][\\w$]*(?=\\s*\\()"]],css:[["comment","/\\*[\\s\\S]*?\\*/"],["string",`"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'`],["atrule","@[\\w-]+"],["prop","[a-z-]+(?=\\s*:)"],["number","#[\\da-fA-F]{3,8}\\b|-?\\b\\d+\\.?\\d*(?:px|em|rem|%|vh|vw|fr|s|ms|deg|pt)?\\b"]],html:[["comment","<!--[\\s\\S]*?-->"],["string",`"[^"]*"|'[^']*'`],["tag","</?[a-zA-Z][\\w-]*|/?>"],["attr","\\b[a-zA-Z-]+(?==)"]],json:[["prop",'"(?:[^"\\\\]|\\\\.)*"(?=\\s*:)'],["string",'"(?:[^"\\\\]|\\\\.)*"'],["literal",b("true false null")],["number","-?\\b\\d+\\.?\\d*(?:e[+-]?\\d+)?\\b"]],markdown:[["heading","^#{1,6} .*$"],["code","```[\\s\\S]*?```|`[^`\\n]+`"],["bold","\\*\\*[^*\\n]+\\*\\*|__[^_\\n]+__"],["link","\\[[^\\]\\n]+\\]\\([^)\\n]+\\)"],["list","^\\s*(?:[-*+]|\\d+\\.) "],["italic","\\*[^*\\n]+\\*|_[^_\\n]+_"]],shell:[["comment","#[^\\n]*"],["string",`"(?:[^"\\\\]|\\\\.)*"|'[^']*'`],["variable","\\$\\w+|\\$\\{[^}]+\\}"],["keyword",b("if then else elif fi for in do done while case esac function return export local echo cd")],["number","\\b\\d+\\b"]],python:[["comment","#[^\\n]*"],["string",`"""[\\s\\S]*?"""|'''[\\s\\S]*?'''|"(?:[^"\\\\]|\\\\.)*"|'(?:[^'\\\\]|\\\\.)*'`],["keyword",b("def class return if elif else for while in import from as with try except finally raise lambda and or not is pass break continue yield global nonlocal async await")],["literal",b("True False None")],["number","\\b\\d+\\.?\\d*\\b"],["func","\\b[a-zA-Z_]\\w*(?=\\s*\\()"]],text:[]},ge={comment:"color:#008000;font-style:italic",string:"color:#a31515",keyword:"color:#0000ff",literal:"color:#0000ff",number:"color:#098658",func:"color:#795e26",prop:"color:#0451a5",atrule:"color:#af00db",tag:"color:#800000",attr:"color:#e50000",heading:"color:#800080;font-weight:bold",code:"color:#a31515",bold:"font-weight:bold",italic:"font-style:italic",link:"color:#0000ee;text-decoration:underline",list:"color:#af00db",variable:"color:#267f99"};function R(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}const N=new Map;function we(r){if(N.has(r))return N.get(r);const c=me[r],d=c.length?new RegExp(c.map(([p,u])=>`(?<${p}>${u})`).join("|"),"gm"):null;return N.set(r,d),d}function be(r,c){const d=we(c);if(!d)return R(r);let p="",u=0;for(const h of r.matchAll(d)){p+=R(r.slice(u,h.index));const y=h.groups??{},M=Object.keys(y).find(k=>y[k]!==void 0)??"";p+=`<span style="${ge[M]??""}">${R(h[0])}</span>`,u=h.index+h[0].length}return p+=R(r.slice(u)),p}const z="'Lucida Console', 'Courier New', monospace",ye=i.div`
    flex: 1;
    min-height: 0;
    display: flex;
`,je=i.div`
    width: 188px;
    flex-shrink: 0;
    overflow: auto;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    font-size: 12px;
    padding: 4px 0;
`,ve=i.div`
    padding: 1px 6px 1px ${({$depth:r})=>6+r*14}px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    color: ${({$dir:r})=>r?"#000080":"#000"};
    &:hover {
        background: #d8e6ff;
    }
`,Se=i.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
`,ke=i.div`
    display: flex;
    background: #c0c0c0;
    overflow-x: auto;
`,$e=i.div`
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
`,Ce=i.span`
    font-weight: bold;
    &:hover {
        color: #c00;
    }
`,Te=i.div`
    flex: 1;
    min-height: 0;
    display: flex;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,Fe=i.div`
    flex-shrink: 0;
    width: 44px;
    overflow: hidden;
    text-align: right;
    padding: 6px 6px 6px 0;
    background: #f0f0f0;
    color: #999;
    font-family: ${z};
    font-size: 13px;
    line-height: 1.5;
    border-right: 1px solid #ddd;
    user-select: none;
`,De=i.div`
    position: relative;
    flex: 1;
    min-width: 0;
    overflow: hidden;
`,J=`
    margin: 0;
    padding: 6px;
    border: 0;
    font-family: ${z};
    font-size: 13px;
    line-height: 1.5;
    tab-size: 2;
    white-space: pre;
    overflow-wrap: normal;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`,Re=i.pre`
    ${J}
    position: absolute;
    inset: 0;
    overflow: auto;
    pointer-events: none;
    color: #000;
    background: transparent;
`,Ee=i.textarea`
    ${J}
    position: absolute;
    inset: 0;
    resize: none;
    outline: none;
    overflow: auto;
    color: transparent;
    caret-color: #000;
    background: transparent;
`,ze=i.pre`
    height: 130px;
    margin: 0;
    overflow: auto;
    background: #000;
    color: #c0c0c0;
    font-family: ${z};
    font-size: 12px;
    padding: 6px;
    white-space: pre-wrap;
`,Me=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 3px 6px;
    background: #c0c0c0;
    font-size: 12px;
`,E={path:"",name:"untitled.txt",content:"",lang:"text",dirty:!0},Ae=()=>{var q;const r=ae(),c=ie(),[d,p]=f.useState([E]),[u,h]=f.useState(0),[y,M]=f.useState(new Set([c])),[k,Q]=f.useState({}),[B,$]=f.useState(null),[ee,j]=f.useState(!1),[x,te]=f.useState(""),[ne,g]=f.useState("Ready"),w=f.useRef(d);w.current=d;const C=f.useRef(null),T=f.useRef(null),_=f.useRef(null),a=d[u]??E,A=async e=>{const t=await r.readdir(e).catch(()=>[]),s=await Promise.all(t.map(async o=>{const l=await r.stat(X(e,o)).then(v=>v.type).catch(()=>"file");return{name:o,path:X(e,o),type:l}}));s.sort((o,l)=>o.type===l.type?o.name.localeCompare(l.name):o.type==="dir"?-1:1),Q(o=>({...o,[e]:s}))};f.useEffect(()=>{A(c),(async()=>{const[e]=await r.argv();e&&K(e)})()},[]);const K=async e=>{const s=w.current.findIndex(le=>le.path===e);if(s>=0){h(s);return}const o=await r.readTextFile(e).catch(()=>""),l=G(e),v=[...w.current,{path:e,name:l,content:o,lang:Y(l),dirty:!1}];w.current=v,p(v),h(v.length-1),g(`Opened ${e}`)},se=e=>{M(t=>{const s=new Set(t);return s.has(e)?s.delete(e):(s.add(e),k[e]||A(e)),s})},I=e=>p(t=>t.map((s,o)=>o===u?{...s,content:e,dirty:!0}:s)),H=e=>{p(t=>{const s=t.filter((o,l)=>l!==e);return s.length?s:[E]}),h(t=>Math.max(0,t>=e?t-1:t))},F=async()=>{let e=a.path;if(!e){const t=window.prompt("Save as (name):",a.name);if(!t)return null;e=`${c}/${t}`}try{await r.writeTextFile(e,a.content);const t=e;return p(s=>s.map((o,l)=>l===u?{...o,path:t,name:G(t),lang:Y(t),dirty:!1}:o)),g(`Saved ${t}`),A(c),t}catch(t){return g(`Save failed: ${t.code??t.message}`),null}},P=async()=>{let e=a.path;if((a.dirty||!e)&&(e=await F()),!!e){$("Running…");try{const t=await new he(r,c).run(`sh ${e}`);$(t.output||"(no output)"),g(`Exited with code ${t.code}`)}catch(t){$(String((t==null?void 0:t.message)??t))}}},W=()=>{const e=C.current;e&&(T.current&&(T.current.scrollTop=e.scrollTop,T.current.scrollLeft=e.scrollLeft),_.current&&(_.current.scrollTop=e.scrollTop))},oe=e=>{if(e.key==="Tab"){e.preventDefault();const t=e.currentTarget,s=t.selectionStart,o=t.selectionEnd,l=a.content.slice(0,s)+"  "+a.content.slice(o);I(l),requestAnimationFrame(()=>t.setSelectionRange(s+2,s+2))}else(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"?(e.preventDefault(),F()):(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="f"&&(e.preventDefault(),j(!0))},Z=()=>{const e=C.current;if(!e||!x)return;const t=e.selectionEnd;let s=a.content.indexOf(x,t);if(s<0&&(s=a.content.indexOf(x,0)),s>=0){e.focus(),e.setSelectionRange(s,s+x.length);const o=a.content.slice(0,s).split(`
`).length;e.scrollTop=(o-3)*13*1.5,W(),g(`Found "${x}"`)}else g(`"${x}" not found`)},re=a.content.split(`
`).length,O=[],V=(e,t)=>{const s=k[e];if(s)for(const o of s){const l=o.type==="dir";O.push(n.jsxs(ve,{$depth:t,$dir:l,onClick:()=>l?se(o.path):K(o.path),title:o.path,children:[l?y.has(o.path)?"▾ ":"▸ ":"  ",l?"📁":"📄"," ",o.name]},o.path)),l&&y.has(o.path)&&V(o.path,t+1)}};return V(c,0),n.jsxs(ce,{$minW:640,$minH:420,children:[n.jsxs(de,{children:[n.jsxs(D,{label:"File",children:[n.jsxs(m,{onMouseDown:e=>{e.preventDefault();const t=[...w.current,{...E}];w.current=t,p(t),h(t.length-1)},children:["New",n.jsx("span",{children:"Ctrl+N"})]}),n.jsxs(m,{onMouseDown:e=>{e.preventDefault(),F()},children:["Save",n.jsx("span",{children:"Ctrl+S"})]}),n.jsx(fe,{}),n.jsx(m,{onMouseDown:e=>{e.preventDefault(),H(u)},children:"Close Tab"})]}),n.jsx(D,{label:"Edit",children:n.jsxs(m,{onMouseDown:e=>{e.preventDefault(),j(!0)},children:["Find…",n.jsx("span",{children:"Ctrl+F"})]})}),n.jsxs(D,{label:"Run",children:[n.jsxs(m,{onMouseDown:e=>{e.preventDefault(),P()},children:["Run Script",n.jsx("span",{children:"F5"})]}),n.jsx(m,{onMouseDown:e=>{e.preventDefault(),$(null)},children:"Hide Output"})]}),n.jsx(D,{label:"Help",children:n.jsx(m,{$disabled:!0,children:"VortexCode — VortexOS"})})]}),n.jsxs(pe,{children:[n.jsx(S,{onClick:()=>F(),children:"💾 Save"}),n.jsx(S,{onClick:()=>P(),children:"▶ Run"}),n.jsx(U,{}),n.jsx(S,{onClick:()=>j(e=>!e),children:"🔍 Find"}),n.jsx(U,{}),n.jsx("span",{style:{fontSize:12,padding:"0 6px",color:"#444"},children:a.lang.toUpperCase()})]}),ee&&n.jsxs(Me,{children:[n.jsx("input",{autoFocus:!0,value:x,onChange:e=>te(e.target.value),onKeyDown:e=>{e.key==="Enter"&&Z(),e.key==="Escape"&&j(!1)},placeholder:"Find text…",style:{flex:1,fontFamily:z}}),n.jsx(S,{onClick:Z,children:"Next"}),n.jsx(S,{onClick:()=>j(!1),children:"✕"})]}),n.jsxs(ye,{children:[n.jsx(je,{children:O.length?O:n.jsx("div",{style:{padding:8,color:"#888"},children:"Empty"})}),n.jsxs(Se,{children:[n.jsx(ke,{children:d.map((e,t)=>n.jsxs($e,{$active:t===u,onClick:()=>h(t),children:[e.name,e.dirty?" •":"",n.jsx(Ce,{onClick:s=>{s.stopPropagation(),H(t)},children:"×"})]},t))}),n.jsxs(Te,{children:[n.jsx(Fe,{ref:_,children:Array.from({length:re},(e,t)=>n.jsx("div",{children:t+1},t))}),n.jsxs(De,{children:[n.jsx(Re,{ref:T,dangerouslySetInnerHTML:{__html:be(a.content,a.lang)+`
`}}),n.jsx(Ee,{ref:C,value:a.content,onChange:e=>I(e.target.value),onScroll:W,onKeyDown:oe,spellCheck:!1,wrap:"off"})]})]}),B!==null&&n.jsx(ze,{children:B})]})]}),n.jsxs(ue,{children:[n.jsxs(L,{$flex:1,children:[a.path||"untitled",a.dirty?" •":""]}),n.jsxs(L,{children:["Ln ",a.content.slice(0,((q=C.current)==null?void 0:q.selectionStart)??0).split(`
`).length]}),n.jsx(L,{children:ne})]})]})};export{Ae as default};
