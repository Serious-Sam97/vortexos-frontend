import{r as h,j as s,o as g,B as l,f as b,p as k}from"./index-DChfvWiY.js";const o="vortex:home",w="http://localhost:8082";function j(e){return`${w}/proxy?url=${encodeURIComponent(e)}&token=${encodeURIComponent(k()??"")}`}const S=`
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
</body></html>`;function z(e){const n=e.trim();return!n||n===o?o:/^https?:\/\//i.test(n)?n:"https://"+n}const E=()=>{const[e,n]=h.useState([o]),[t,c]=h.useState(0),[d,i]=h.useState(""),a=e[t],p=r=>{const x=z(r),f=[...e.slice(0,t+1),x];n(f),c(f.length-1),i(x===o?"":x)},m=()=>{t>0&&(c(t-1),i(e[t-1]===o?"":e[t-1]))},u=()=>{t<e.length-1&&(c(t+1),i(e[t+1]===o?"":e[t+1]))},y=()=>p(o);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",minWidth:560,minHeight:360},children:[s.jsxs(g,{style:{gap:4},children:[s.jsx(l,{size:"sm",onClick:m,disabled:t===0,children:"◀ Back"}),s.jsx(l,{size:"sm",onClick:u,disabled:t===e.length-1,children:"Forward ▶"}),s.jsx(l,{size:"sm",onClick:y,children:"Home"}),s.jsx(b,{value:d,onChange:r=>i(r.target.value),onKeyDown:r=>r.key==="Enter"&&p(d),placeholder:"Address",style:{flex:1},fullWidth:!0}),s.jsx(l,{size:"sm",onClick:()=>p(d),children:"Go"})]}),s.jsx("iframe",{title:"browser",src:a===o?void 0:j(a),srcDoc:a===o?S:void 0,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",style:{flex:1,width:"100%",border:"2px inset #c0c0c0",background:"#fff"}},a)]})};export{E as default};
