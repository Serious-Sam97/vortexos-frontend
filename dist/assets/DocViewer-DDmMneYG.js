import{d as m,l as S,r,o as d,j as e,A as w,M as $,c as x,e as p,f as v,g as E,h as u}from"./index-B3T7uafB.js";const B=m.iframe`
    flex: 1;
    min-height: 320px;
    width: 100%;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
    background: #525659;
`,F=m.div`
    flex: 1;
    min-height: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #555;
    background: #fff;
    border: 2px solid;
    border-color: #808080 #ffffff #ffffff #808080;
`,L={pdf:"application/pdf",html:"text/html",htm:"text/html",txt:"text/plain"},R=()=>{const n=S(),[l,h]=r.useState(null),[a,j]=r.useState(""),[b,i]=r.useState("No document");return r.useEffect(()=>{let o=null;return(async()=>{var c;const[t]=await n.argv();if(t)try{const s=await n.readFile(t),g=((c=t.split(".").pop())==null?void 0:c.toLowerCase())??"",y=new Blob([s],{type:L[g]??"application/octet-stream"}),f=URL.createObjectURL(y);o=f,h(f),j(d(t)),i(`${d(t)} — ${(s.length/1024).toFixed(1)} KB`)}catch(s){i(`Could not open: ${s.code??s.message}`)}})(),()=>{o&&URL.revokeObjectURL(o)}},[n]),e.jsxs(w,{$minW:520,$minH:420,children:[e.jsxs($,{children:[e.jsx(x,{label:"File",children:e.jsx(p,{$disabled:!0,children:"Open from Explorer"})}),e.jsx(x,{label:"Help",children:e.jsx(p,{$disabled:!0,children:"Document Viewer — VortexOS"})})]}),e.jsx(v,{style:{padding:3},children:l?e.jsx(B,{src:l,title:a}):e.jsxs(F,{children:[e.jsx("div",{style:{fontSize:40},children:"📄"}),e.jsx("div",{children:"Open a PDF or document from Explorer to view it here."})]})}),e.jsxs(E,{children:[e.jsx(u,{$flex:1,children:a||"Document Viewer"}),e.jsx(u,{children:b})]})]})};export{R as default};
