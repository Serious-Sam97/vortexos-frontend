import{i as b,r as h,j as s,k,B as a,T as w,l as j}from"./index-C4Ycjhpd.js";const t="vortex:home",S="http://localhost:8082";function z(n){return`${S}/proxy?url=${encodeURIComponent(n)}&token=${encodeURIComponent(j()??"")}`}const C=`
<html><head><style>
  body{font-family:'MS Sans Serif',Tahoma,sans-serif;background:#008080;color:#fff;text-align:center;padding:40px}
  h1{font-size:40px;margin:0}
  .links a{display:inline-block;margin:8px;color:#fff;background:#000080;padding:8px 14px;text-decoration:none;border:2px outset #c0c0c0}
  p{opacity:.85}
</style></head><body>
  <h1>VortexOS Web</h1>
  <p>Type a URL in the address bar and press Go.</p>
  <p>Pages load through the VortexOS proxy, so most sites work.</p>
  <p style="font-size:12px;opacity:.7">Try: example.com &middot; wikipedia.org &middot; news.ycombinator.com</p>
</body></html>`;function T(n){const e=n.trim();return!e||e===t?t:/^https?:\/\//i.test(e)?e:"https://"+e}const H=()=>{const n=b(),[e,f]=h.useState([t]),[o,c]=h.useState(0),[d,i]=h.useState(""),l=e[o],p=r=>{const x=T(r),m=[...e.slice(0,o+1),x];f(m),c(m.length-1),i(x===t?"":x)},u=()=>{o>0&&(c(o-1),i(e[o-1]===t?"":e[o-1]))},y=()=>{o<e.length-1&&(c(o+1),i(e[o+1]===t?"":e[o+1]))},g=()=>p(t);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",minWidth:n?0:560,minHeight:n?0:360},children:[s.jsxs(k,{style:{gap:4},children:[s.jsx(a,{size:"sm",onClick:u,disabled:o===0,children:"◀ Back"}),s.jsx(a,{size:"sm",onClick:y,disabled:o===e.length-1,children:"Forward ▶"}),s.jsx(a,{size:"sm",onClick:g,children:"Home"}),s.jsx(w,{value:d,onChange:r=>i(r.target.value),onKeyDown:r=>r.key==="Enter"&&p(d),placeholder:"Address",style:{flex:1},fullWidth:!0}),s.jsx(a,{size:"sm",onClick:()=>p(d),children:"Go"})]}),s.jsx("iframe",{title:"browser",src:l===t?void 0:z(l),srcDoc:l===t?C:void 0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",style:{flex:1,width:"100%",border:"2px inset #c0c0c0",background:"#fff"}},l)]})};export{H as default};
