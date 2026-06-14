import{d as y,l as Q,n as q,r as w,j as f,A as X,M as Y,c as B,e as S,p as J,f as ee,g as te,h as z}from"./index-B3T7uafB.js";function K(e){let s="";for(e++;e>0;){const a=(e-1)%26;s=String.fromCharCode(65+a)+s,e=Math.floor((e-1)/26)}return s}function ne(e){let s=0;for(const a of e.toUpperCase())s=s*26+(a.charCodeAt(0)-64);return s-1}function F(e){const s=/^([A-Za-z]+)(\d+)$/.exec(e.trim());return s?{c:ne(s[1]),r:parseInt(s[2],10)}:null}function g(e,s){return K(e)+s}const re={SUM:e=>e.reduce((s,a)=>s+a,0),AVERAGE:e=>e.length?e.reduce((s,a)=>s+a,0)/e.length:0,AVG:e=>e.length?e.reduce((s,a)=>s+a,0)/e.length:0,MIN:e=>e.length?Math.min(...e):0,MAX:e=>e.length?Math.max(...e):0,COUNT:e=>e.length,ABS:e=>Math.abs(e[0]??0),ROUND:e=>{const s=Math.pow(10,e[1]??0);return Math.round((e[0]??0)*s)/s},SQRT:e=>Math.sqrt(e[0]??0),POW:e=>Math.pow(e[0]??0,e[1]??0),IF:e=>e[0]?e[1]:e[2]};class v extends Error{constructor(s){super(s),this.tag=s}}function se(e){const s=[],a=/\s*([A-Za-z]+\d+:[A-Za-z]+\d+|[A-Za-z]+\d+|[A-Za-z]+|\d+\.?\d*|[-+*/^%(),])/g;let u,r=0;for(;u=a.exec(e);){if(u.index!==r&&e.slice(r,u.index).trim())throw new v("#ERR");const t=u[1];/^[A-Za-z]+\d+:[A-Za-z]+\d+$/.test(t)?s.push({t:"range",v:t}):/^[A-Za-z]+\d+$/.test(t)?s.push({t:"ref",v:t}):/^[A-Za-z]+$/.test(t)?s.push({t:"func",v:t.toUpperCase()}):/^\d/.test(t)?s.push({t:"num",v:t}):t==="("?s.push({t:"lp",v:t}):t===")"?s.push({t:"rp",v:t}):t===","?s.push({t:"comma",v:t}):s.push({t:"op",v:t}),r=a.lastIndex}return s}function oe(e,s){const[a,u]=e.split(":"),r=F(a),t=F(u);if(!r||!t)throw new v("#REF");const i=[];for(let c=Math.min(r.r,t.r);c<=Math.max(r.r,t.r);c++)for(let l=Math.min(r.c,t.c);l<=Math.max(r.c,t.c);l++){const d=s(g(l,c));typeof d=="number"&&!Number.isNaN(d)&&i.push(d)}return i}function ie(e,s){const a=se(e);let u=0;const r=()=>a[u],t=()=>a[u++];function i(){let h=c();for(;r()&&r().t==="op"&&(r().v==="+"||r().v==="-");){const p=t().v,m=c();h=p==="+"?h+m:h-m}return h}function c(){let h=l();for(;r()&&r().t==="op"&&(r().v==="*"||r().v==="/"||r().v==="%");){const p=t().v,m=l();h=p==="*"?h*m:p==="/"?h/m:h%m}return h}function l(){let h=d();return r()&&r().t==="op"&&r().v==="^"&&(t(),h=Math.pow(h,l())),h}function d(){return r()&&r().t==="op"&&r().v==="-"?(t(),-d()):R()}function R(){const h=r();if(!h)throw new v("#ERR");if(h.t==="num")return Number(t().v);if(h.t==="ref"){const p=s(t().v);return typeof p=="number"?p:p===""?0:NaN}if(h.t==="lp"){t();const p=i();if(!r()||r().t!=="rp")throw new v("#ERR");return t(),p}if(h.t==="func"){const p=t().v;if(!r()||r().t!=="lp")throw new v("#ERR");t();const m=[];if(r()&&r().t!=="rp")do r()&&r().t==="range"?m.push(...oe(t().v,s)):m.push(i());while(r()&&r().t==="comma"&&t());if(!r()||r().t!=="rp")throw new v("#ERR");t();const b=re[p];if(!b)throw new v("#NAME");return b(m)}throw new v("#ERR")}const k=i();if(u!==a.length)throw new v("#ERR");return k}function ce(e){const s={},a=new Set,u=t=>{const i=e[t];if(i===void 0||i==="")return"";if(i[0]!=="="){const l=Number(i);return i.trim()!==""&&!Number.isNaN(l)?l:i}if(t in s)return s[t];if(a.has(t))return"#CYCLE";a.add(t);let c;try{c=ie(i.slice(1),u),typeof c=="number"&&Number.isNaN(c)&&(c="#ERR")}catch(l){c=l instanceof v?l.tag:"#ERR"}return a.delete(t),s[t]=c,c},r={};for(const t of Object.keys(e))e[t]!==""&&(r[t]=u(t));return r}function le(e,s,a){const u=[];let r=0,t=0;for(const i of Object.keys(e)){if(e[i]==="")continue;const c=F(i);c&&(r=Math.max(r,c.r),t=Math.max(t,c.c))}r=Math.min(r||1,a),t=Math.min(t||1,s-1);for(let i=1;i<=r;i++){const c=[];for(let l=0;l<=t;l++){const d=e[g(l,i)]??"";c.push(/[",\n]/.test(d)?`"${d.replace(/"/g,'""')}"`:d)}u.push(c.join(","))}return u.join(`
`)}function ae(e){const s={};return e.replace(/\r\n/g,`
`).split(`
`).forEach((u,r)=>{const t=[];let i="",c=!1;for(let l=0;l<u.length;l++){const d=u[l];c?d==='"'&&u[l+1]==='"'?(i+='"',l++):d==='"'?c=!1:i+=d:d==='"'?c=!0:d===","?(t.push(i),i=""):i+=d}t.push(i),t.forEach((l,d)=>{l!==""&&(s[g(d,r+1)]=l)})}),s}const E=26,D=60,fe=y.div`
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
`,ue=y.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 3px 6px;
    background: #c0c0c0;
    border-bottom: 1px solid #808080;
    font-size: 12px;
`,de=y.div`
    width: 54px;
    text-align: center;
    font-weight: bold;
    background: #fff;
    border: 1px solid #808080;
    padding: 2px;
`,he=y.input`
    flex: 1;
    font-family: "Lucida Console", monospace;
    font-size: 12px;
    padding: 2px 4px;
`,pe=y.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,xe=y.table`
    border-collapse: collapse;
    font-size: 12px;
    table-layout: fixed;
`,W=y.th`
    position: sticky;
    top: 0;
    z-index: 2;
    background: #d4d0c8;
    border: 1px solid #808080;
    min-width: 72px;
    height: 18px;
    font-weight: normal;
`,me=y.th`
    position: sticky;
    left: 0;
    z-index: 1;
    background: #d4d0c8;
    border: 1px solid #808080;
    width: 36px;
    font-weight: normal;
`,we=y.td`
    border: 1px solid #d0d0d0;
    min-width: 72px;
    max-width: 72px;
    height: 18px;
    padding: 0 4px;
    overflow: hidden;
    white-space: nowrap;
    text-align: ${({$num:e})=>e?"right":"left"};
    outline: ${({$sel:e})=>e?"2px solid #000080":"none"};
    outline-offset: -2px;
    cursor: cell;
`,ge=y.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 12px;
    font-family: inherit;
    padding: 0;
`,ye=()=>{const e=Q(),s=q(),[a,u]=w.useState({}),[r,t]=w.useState("A1"),[i,c]=w.useState(!1),[l,d]=w.useState(""),[R,k]=w.useState(null),[h,p]=w.useState([]),[m,b]=w.useState("Ready"),I=w.useRef(null),L=w.useMemo(()=>ce(a),[a]);w.useEffect(()=>{(async()=>{const[n]=await e.argv();n&&O(n)})()},[]),w.useEffect(()=>{var n;i&&((n=I.current)==null||n.focus())},[i]);const G=async()=>{try{p((await e.readdir(s)).filter(n=>n.endsWith(".csv")))}catch{p([])}},O=async n=>{try{u(ae(await e.readTextFile(n))),k(n),b(`Opened ${n}`)}catch(o){b(`Open failed: ${o.code??o.message}`)}},P=async()=>{let n=R;if(!n){const o=window.prompt("Save as (name):","sheet.csv");if(!o)return;n=`${s}/${o.endsWith(".csv")?o:o+".csv"}`}try{await e.writeTextFile(n,le(a,E,D)),k(n),b(`Saved ${n}`)}catch(o){b(`Save failed: ${o.code??o.message}`)}},C=(n,o)=>{u(A=>{const j={...A};return n===""?delete j[r]:j[r]=n,j}),c(!1);const x=T(r);x&&o==="down"?t(g(x.c,Math.min(D,x.r+1))):x&&o==="right"&&t(g(Math.min(E-1,x.c+1),x.r))},T=n=>{const o=/^([A-Z]+)(\d+)$/.exec(n);return o?{c:V(o[1]),r:parseInt(o[2],10)}:null},V=n=>{let o=0;for(const x of n)o=o*26+(x.charCodeAt(0)-64);return o-1},N=n=>{d(n!==void 0?n:a[r]??""),c(!0)},H=n=>{if(i)return;const o=T(r);o&&(n.key==="Enter"||n.key==="F2"?(n.preventDefault(),N()):n.key==="Delete"||n.key==="Backspace"?(n.preventDefault(),u(x=>{const A={...x};return delete A[r],A})):n.key==="ArrowUp"?t(g(o.c,Math.max(1,o.r-1))):n.key==="ArrowDown"?t(g(o.c,Math.min(D,o.r+1))):n.key==="ArrowLeft"?t(g(Math.max(0,o.c-1),o.r)):n.key==="ArrowRight"||n.key==="Tab"?(n.preventDefault(),t(g(Math.min(E-1,o.c+1),o.r))):n.key.length===1&&!n.ctrlKey&&!n.metaKey&&N(n.key))},_=n=>n===void 0||n===""?"":typeof n=="number"?Number.isInteger(n)?String(n):String(Math.round(n*1e6)/1e6):n;return f.jsxs(X,{$minW:620,$minH:420,children:[f.jsxs(Y,{children:[f.jsxs(B,{label:"File",onOpen:G,children:[f.jsx(S,{onMouseDown:n=>{n.preventDefault(),u({}),k(null),t("A1")},children:"New"}),f.jsxs(S,{onMouseDown:n=>{n.preventDefault(),P()},children:["Save (.csv)",f.jsx("span",{children:"Ctrl+S"})]}),f.jsx(J,{}),h.length===0?f.jsx(S,{$disabled:!0,children:"(no .csv files)"}):h.map(n=>f.jsx(S,{onMouseDown:o=>{o.preventDefault(),O(`${s}/${n}`)},children:n},n))]}),f.jsx(B,{label:"Help",children:f.jsx(S,{$disabled:!0,children:"VortexCalc — try =SUM(A1:A3)"})})]}),f.jsxs(fe,{children:[f.jsxs(ue,{children:[f.jsx(de,{children:r}),f.jsx(he,{value:i?l:a[r]??"",onChange:n=>{d(n.target.value),i||c(!0)},onFocus:()=>{i||(d(a[r]??""),c(!0))},onKeyDown:n=>{n.key==="Enter"?C(l,"down"):n.key==="Escape"&&c(!1)},placeholder:"value or =formula"})]}),f.jsx(ee,{style:{padding:0},children:f.jsx(pe,{tabIndex:0,onKeyDown:H,children:f.jsxs(xe,{children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx(W,{style:{minWidth:36,width:36,left:0,zIndex:3}}),Array.from({length:E},(n,o)=>f.jsx(W,{children:K(o)},o))]})}),f.jsx("tbody",{children:Array.from({length:D},(n,o)=>{const x=o+1;return f.jsxs("tr",{children:[f.jsx(me,{children:x}),Array.from({length:E},(A,j)=>{const $=g(j,x),U=L[$],Z=$===r;return f.jsx(we,{$sel:Z,$num:typeof U=="number",onClick:()=>{t($),c(!1)},onDoubleClick:()=>{t($),N()},children:Z&&i?f.jsx(ge,{ref:I,value:l,onChange:M=>d(M.target.value),onKeyDown:M=>{M.key==="Enter"?(M.preventDefault(),C(l,"down")):M.key==="Tab"?(M.preventDefault(),C(l,"right")):M.key==="Escape"&&c(!1)},onBlur:()=>C(l,null)}):_(U)},j)})]},x)})})]})})})]}),f.jsxs(te,{children:[f.jsx(z,{$flex:1,children:R||"Unsaved sheet"}),f.jsx(z,{children:r}),f.jsx(z,{children:m})]})]})};export{ye as default};
