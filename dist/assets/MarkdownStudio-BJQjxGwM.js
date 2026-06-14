import{d as x,l as L,n as z,r as h,x as C,j as n,A as D,M as E,c as S,e as u,p as H,q as F,s as y,t as O,f as P,g as q,h as g,o as B}from"./index-B3T7uafB.js";function A(d){return d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(d){return d.replace(/`([^`]+)`/g,(o,s)=>`<code>${s}</code>`).replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g,(o,s,e)=>`<img alt="${s}" src="${e}" style="max-width:100%" />`).replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g,(o,s,e)=>`<a href="${e}" target="_blank" rel="noopener">${s}</a>`).replace(/\*\*([^*]+)\*\*|__([^_]+)__/g,(o,s,e)=>`<strong>${s??e}</strong>`).replace(/(^|[^*])\*([^*]+)\*/g,(o,s,e)=>`${s}<em>${e}</em>`).replace(/(^|[^_])_([^_]+)_/g,(o,s,e)=>`${s}<em>${e}</em>`)}function I(d){const o=A(d.replace(/\r\n/g,`
`)).split(`
`),s=[];let e=0,a=null;const l=()=>{a&&(s.push(`</${a}>`),a=null)};for(;e<o.length;){const i=o[e];if(/^```/.test(i)){l();const c=[];for(e++;e<o.length&&!/^```/.test(o[e]);)c.push(o[e++]);e++,s.push(`<pre class="md-pre"><code>${c.join(`
`)}</code></pre>`);continue}const p=/^(#{1,6})\s+(.*)$/.exec(i);if(p){l(),s.push(`<h${p[1].length}>${f(p[2])}</h${p[1].length}>`),e++;continue}if(/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(i)){l(),s.push("<hr />"),e++;continue}if(/^>\s?/.test(i)){l();const c=[];for(;e<o.length&&/^>\s?/.test(o[e]);)c.push(o[e++].replace(/^>\s?/,""));s.push(`<blockquote>${f(c.join(" "))}</blockquote>`);continue}if(/^\s*[-*+]\s+/.test(i)){a!=="ul"&&(l(),s.push("<ul>"),a="ul"),s.push(`<li>${f(i.replace(/^\s*[-*+]\s+/,""))}</li>`),e++;continue}if(/^\s*\d+\.\s+/.test(i)){a!=="ol"&&(l(),s.push("<ol>"),a="ol"),s.push(`<li>${f(i.replace(/^\s*\d+\.\s+/,""))}</li>`),e++;continue}if(/^\s*$/.test(i)){l(),e++;continue}l();const m=[i];for(e++;e<o.length&&!/^\s*$/.test(o[e])&&!/^(#{1,6}\s|```|>\s?|\s*[-*+]\s+|\s*\d+\.\s+)/.test(o[e])&&!/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/.test(o[e]);)m.push(o[e++]);s.push(`<p>${f(m.join(" "))}</p>`)}return l(),s.join(`
`)}const R=`# Welcome to Markdown Studio

Type **Markdown** on the left — see it *rendered* live on the right.

## Features

- Headings, **bold**, *italic*, \`code\`
- Lists, [links](https://plaza.one), and quotes
- Code blocks:

\`\`\`
const os = "VortexOS";
console.log(os);
\`\`\`

> Built into the OS — no library.
`,U=x.div`
    flex: 1;
    min-height: 0;
    display: flex;
    gap: 3px;
`,v=x.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
`,V=x.textarea`
    flex: 1;
    min-height: 280px;
    resize: none;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 8px;
    font-family: "Lucida Console", monospace;
    font-size: 13px;
    line-height: 1.5;
    outline: none;
`,W=x.div`
    flex: 1;
    min-height: 280px;
    overflow: auto;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    padding: 10px 14px;
    font-family: "Segoe UI", Tahoma, sans-serif;
    font-size: 14px;
    line-height: 1.55;
    h1, h2, h3 { margin: 0.5em 0 0.3em; }
    h1 { font-size: 1.7em; border-bottom: 1px solid #ddd; padding-bottom: 2px; }
    h2 { font-size: 1.35em; }
    code { background: #f0f0f0; padding: 1px 4px; border-radius: 3px; font-family: "Lucida Console", monospace; font-size: 0.9em; }
    .md-pre { background: #1e1e2e; color: #d8d8e8; padding: 8px 10px; border-radius: 4px; overflow: auto; }
    .md-pre code { background: none; color: inherit; }
    blockquote { margin: 0.4em 0; padding: 2px 10px; border-left: 3px solid #ff2d95; color: #555; background: #faf0f6; }
    a { color: #1084d0; }
    hr { border: none; border-top: 1px solid #ccc; }
    ul, ol { margin: 0.3em 0 0.3em 1.4em; }
`,k=x.div`
    font-size: 11px;
    font-weight: bold;
    color: #444;
    padding: 2px 4px;
    background: #d4d0c8;
`,G=()=>{const d=L(),o=z(),[s,e]=h.useState(R),[a,l]=h.useState(null),[i,p]=h.useState([]),[m,c]=h.useState("Ready"),{openEditMenu:M,editMenu:_}=C(),$=h.useMemo(()=>I(s),[s]);h.useEffect(()=>{(async()=>{const[t]=await d.argv();t&&b(t)})()},[]);const T=async()=>{try{p((await d.readdir(o)).filter(t=>/\.(md|markdown)$/i.test(t)))}catch{p([])}},b=async t=>{try{e(await d.readTextFile(t)),l(t),c(`Opened ${t}`)}catch(r){c(`Open failed: ${r.code??r.message}`)}},j=async()=>{let t=a;if(!t){const r=window.prompt("Save as (name):","notes.md");if(!r)return;t=`${o}/${/\.(md|markdown)$/i.test(r)?r:r+".md"}`}await d.writeTextFile(t,s).then(()=>{l(t),c(`Saved ${t}`)}).catch(r=>c(`Save failed: ${r.code??r.message}`))},w=async()=>{const t=`${o}/${a?B(a).replace(/\.(md|markdown)$/i,""):"document"}.html`;await d.writeTextFile(t,`<!doctype html><meta charset="utf-8"><body>${$}</body>`).then(()=>c(`Exported ${t}`)).catch(()=>{})};return n.jsxs(D,{$minW:620,$minH:420,children:[n.jsxs(E,{children:[n.jsxs(S,{label:"File",onOpen:T,children:[n.jsx(u,{onMouseDown:t=>{t.preventDefault(),e(""),l(null)},children:"New"}),n.jsxs(u,{onMouseDown:t=>{t.preventDefault(),j()},children:["Save",n.jsx("span",{children:"Ctrl+S"})]}),n.jsx(u,{onMouseDown:t=>{t.preventDefault(),w()},children:"Export HTML"}),n.jsx(H,{}),i.length===0?n.jsx(u,{$disabled:!0,children:"(no .md files)"}):i.map(t=>n.jsx(u,{onMouseDown:r=>{r.preventDefault(),b(`${o}/${t}`)},children:t},t))]}),n.jsx(S,{label:"Help",children:n.jsx(u,{$disabled:!0,children:"Markdown Studio — VortexOS"})})]}),n.jsxs(F,{children:[n.jsx(y,{onClick:j,children:"💾 Save"}),n.jsx(y,{onClick:w,children:"⇩ HTML"}),n.jsx(O,{}),n.jsx("span",{style:{fontSize:12,color:"#444",padding:"0 6px"},children:"Live preview"})]}),n.jsx(P,{style:{padding:3},children:n.jsxs(U,{children:[n.jsxs(v,{children:[n.jsx(k,{children:"Markdown"}),n.jsx(V,{value:s,onChange:t=>e(t.target.value),onContextMenu:M,spellCheck:!1})]}),n.jsxs(v,{children:[n.jsx(k,{children:"Preview"}),n.jsx(W,{dangerouslySetInnerHTML:{__html:$}})]})]})}),n.jsxs(q,{children:[n.jsx(g,{$flex:1,children:a||"Unsaved document"}),n.jsxs(g,{children:[s.length," chars"]}),n.jsx(g,{children:m})]}),_]})};export{G as default};
