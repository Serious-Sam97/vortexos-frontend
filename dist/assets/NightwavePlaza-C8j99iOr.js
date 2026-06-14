import{m as p,d as a,r as i,j as e,A as m,M as w,c as d,e as c,g as b,h as x}from"./index-CbdnRyfS.js";const v="https://radio.plaza.one/mp3",j="https://api.plaza.one/status",$=p`
    0%, 100% { transform: scaleY(0.25); }
    50% { transform: scaleY(1); }
`,A=p`
    0%, 100% { opacity: 1; box-shadow: 0 0 6px #ff2d2d; }
    50% { opacity: 0.35; box-shadow: 0 0 2px #ff2d2d; }
`,S=a.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 16px 14px;
    background: linear-gradient(165deg, #3a0d5e 0%, #240a44 55%, #11052b 100%);
    color: #e8d8ff;
    font-family: "ms_sans_serif", sans-serif;
`,y=a.div`
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #fff;
    text-shadow: 0 0 8px #ff2d95, 0 0 16px #ff2d95;
    text-align: center;
`,z=a.img`
    width: 176px;
    height: 176px;
    object-fit: cover;
    border: 2px solid #00e5d0;
    box-shadow: 0 0 14px #00e5d0, 0 0 28px rgba(255, 45, 149, 0.5);
    image-rendering: auto;
`,M=a.div`
    font-size: 15px;
    font-weight: bold;
    color: #00e5d0;
    text-shadow: 0 0 6px rgba(0, 229, 208, 0.7);
    text-align: center;
    max-width: 240px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,P=a.div`
    font-size: 12px;
    color: #ff8ad0;
    text-shadow: 0 0 6px rgba(255, 45, 149, 0.6);
`,E=a.div`
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 26px;
`,N=a.div`
    width: 4px;
    height: 100%;
    transform-origin: bottom;
    background: linear-gradient(180deg, #00e5d0, #ff2d95);
    animation: ${$} ${t=>.6+t.$i%5*.12}s ease-in-out infinite;
    animation-delay: ${t=>t.$i%7*.08}s;
`,_=a.span`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff2d2d;
        animation: ${A} 1.4s ease-in-out infinite;
    }
`,T=()=>{const[t,h]=i.useState(null),[r,f]=i.useState(1);i.useEffect(()=>{const n=()=>fetch(j).then(o=>o.json()).then(o=>h(o.song)).catch(()=>{});n(),f(Math.floor(Math.random()*10)+1);const s=setInterval(n,3e4);return()=>clearInterval(s)},[]);const g=(t==null?void 0:t.artwork_src)??`/vaporwave/${r}.jpeg`,l=(t==null?void 0:t.title)??"Sunset over Neon Palms",u=(t==null?void 0:t.artist)??"Dream Mall Escalator";return e.jsxs(m,{$minW:300,$minH:440,children:[e.jsxs(w,{children:[e.jsx(d,{label:"Station",children:e.jsx(c,{onMouseDown:n=>{n.preventDefault(),window.open("https://plaza.one","_blank","noopener")},children:"Open plaza.one"})}),e.jsx(d,{label:"Help",children:e.jsx(c,{$disabled:!0,children:"Nightwave Plaza — VortexOS"})})]}),e.jsxs(S,{children:[e.jsx(y,{children:"♫ NIGHTWAVE PLAZA"}),e.jsx(z,{src:g,alt:"Cover",onError:n=>n.target.src=`/vaporwave/${r}.jpeg`}),e.jsx(M,{title:l,children:l}),e.jsx(P,{children:u}),e.jsx(E,{children:Array.from({length:16}).map((n,s)=>e.jsx(N,{$i:s},s))}),e.jsx("audio",{controls:!0,autoPlay:!0,src:v,style:{width:"100%",maxWidth:260}})]}),e.jsxs(b,{children:[e.jsx(x,{$flex:1,children:"Powered by Nightwave Plaza"}),e.jsx(x,{children:e.jsx(_,{children:"ON AIR"})})]})]})};export{T as default};
