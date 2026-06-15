import{m as s,d as a,r,j as e,A as P,M as z,c as w,e as c,g as M,h as v}from"./index-C4Ycjhpd.js";const A="https://radio.plaza.one/mp3",E="https://api.plaza.one/status",D=s`to { transform: perspective(420px) rotateX(74deg) translateY(44px); }`,N=s`to { transform: rotate(360deg); }`,T=s`0%,100% { transform: scaleY(0.18); } 50% { transform: scaleY(1); }`,_=s`0%,100% { opacity: 1; box-shadow: 0 0 7px #ff2d2d; } 50% { opacity: 0.35; box-shadow: 0 0 2px #ff2d2d; }`,I=s`0%,100% { opacity: 0.2; } 50% { opacity: 1; }`,C=s`0% { transform: translateX(0); } 100% { transform: translateX(-50%); }`,R=s`0%,100% { filter: drop-shadow(0 0 24px #ff2d95aa); } 50% { filter: drop-shadow(0 0 40px #ff8a3caa); }`,V=a.div`
    flex: 1;
    min-height: 0;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #0a0220 0%, #25064a 38%, #5e0f5e 60%, #c01f6b 78%, #ff8a3c 100%);
    font-family: "ms_sans_serif", sans-serif;
    color: #fff;
`,U=a.div`
    position: absolute;
    top: 26%;
    left: 50%;
    width: 200px;
    height: 200px;
    margin-left: -100px;
    border-radius: 50%;
    background: linear-gradient(180deg, #fff27a 0%, #ff5ca8 55%, #ff2d95 100%);
    animation: ${R} 4s ease-in-out infinite;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 52%;
        background: repeating-linear-gradient(#0000 0 6px, #25064a 6px 11px);
    }
`,B=a.div`
    position: absolute;
    left: -50%;
    right: -50%;
    bottom: 0;
    height: 46%;
    background-image:
        linear-gradient(#ff2d95cc 2px, transparent 2px),
        linear-gradient(90deg, #00e5d0aa 1px, transparent 1px);
    background-size: 100% 44px, 44px 100%;
    transform-origin: top center;
    transform: perspective(420px) rotateX(74deg);
    animation: ${D} 1.1s linear infinite;
    mask-image: linear-gradient(transparent, #000 40%);
`,L=a.div`
    position: absolute;
    inset: 0 0 50% 0;
    pointer-events: none;
`,O=a.span`
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #fff;
    left: ${t=>t.$i*53%100}%;
    top: ${t=>t.$i*37%60}%;
    animation: ${I} ${t=>1.5+t.$i%4*.5}s ease-in-out infinite;
    animation-delay: ${t=>t.$i%5*.3}s;
`,X=a.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 14px 12px 12px;
    width: 100%;
    box-sizing: border-box;
`,H=a.div`
    font-size: 17px;
    font-weight: bold;
    letter-spacing: 3px;
    background: linear-gradient(#fff, #ff8ad0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 1px #ff2d95;
    filter: drop-shadow(0 0 8px #ff2d95);
`,Y=a.div`
    position: relative;
    width: 172px;
    height: 172px;
    border-radius: 50%;
    background:
        radial-gradient(circle, #2a2a2a 0 27%, transparent 27%),
        repeating-radial-gradient(circle, #111 0 2px, #1c1c1c 2px 4px);
    box-shadow: 0 0 18px #00e5d0, 0 0 36px rgba(255, 45, 149, 0.45);
    border: 1px solid #00e5d0;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${N} 3.4s linear infinite;
    animation-play-state: ${t=>t.$spin?"running":"paused"};
`,q=a.img`
    width: 84px;
    height: 84px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #fff;
`,G=a.div`
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #c0c0c0;
    box-shadow: 0 0 0 2px #000;
`,W=a.div`
    width: 100%;
    max-width: 280px;
    overflow: hidden;
    white-space: nowrap;
`,Z=a.div`
    display: inline-block;
    white-space: nowrap;
    font-size: 14px;
    font-weight: bold;
    color: #00e5d0;
    text-shadow: 0 0 7px rgba(0, 229, 208, 0.8);
    ${t=>t.$scroll&&`animation: ${C} 9s linear infinite;`}
`,F=a.div`
    font-size: 12px;
    color: #ff8ad0;
    text-shadow: 0 0 6px rgba(255, 45, 149, 0.6);
`,J=a.div`
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 22px;
`,K=a.div`
    width: 4px;
    height: 100%;
    transform-origin: bottom;
    background: linear-gradient(180deg, #00e5d0, #ff2d95);
    border-radius: 1px;
    animation: ${T} ${t=>.55+t.$i%5*.13}s ease-in-out infinite;
    animation-delay: ${t=>t.$i%7*.07}s;
    animation-play-state: ${t=>t.$on?"running":"paused"};
    opacity: ${t=>t.$on?1:.3};
`,Q=a.div`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    max-width: 280px;
    padding: 8px 12px;
    box-sizing: border-box;
    background: rgba(10, 2, 32, 0.55);
    border: 1px solid #ff2d9577;
    border-radius: 8px;
    backdrop-filter: blur(2px);
`,ee=a.button`
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #00e5d0;
    background: radial-gradient(circle at 38% 32%, #ff8ad0, #ff2d95);
    color: #fff;
    font-size: 17px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 12px #ff2d9588;
    &:active {
        transform: scale(0.94);
    }
`,te=a.button`
    flex-shrink: 0;
    background: none;
    border: none;
    color: #00e5d0;
    font-size: 16px;
    cursor: pointer;
    padding: 0;
`,ne=a.input`
    flex: 1;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    background: linear-gradient(90deg, #00e5d0, #ff2d95);
    border-radius: 3px;
    outline: none;
    cursor: pointer;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid #ff2d95;
        box-shadow: 0 0 6px #00e5d0;
    }
`,ae=a.span`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #ff2d2d;
        animation: ${_} 1.4s ease-in-out infinite;
    }
`,oe=()=>{const[t,j]=r.useState(null),[h,$]=r.useState(1),[d,g]=r.useState(!0),[l,y]=r.useState(.8),[o,f]=r.useState(!1),p=r.useRef(null);r.useEffect(()=>{const n=()=>fetch(E).then(u=>u.json()).then(u=>j(u.song)).catch(()=>{});n(),$(Math.floor(Math.random()*10)+1);const i=setInterval(n,3e4);return()=>clearInterval(i)},[]),r.useEffect(()=>{p.current&&(p.current.volume=o?0:l)},[l,o]);const b=()=>{const n=p.current;n&&(n.paused?n.play().catch(()=>{}):n.pause())},k=(t==null?void 0:t.artwork_src)??`/vaporwave/${h}.jpeg`,x=(t==null?void 0:t.title)??"Sunset over Neon Palms",S=(t==null?void 0:t.artist)??"Dream Mall Escalator",m=x.length>22;return e.jsxs(P,{$minW:320,$minH:520,children:[e.jsxs(z,{children:[e.jsxs(w,{label:"Station",children:[e.jsx(c,{onMouseDown:n=>{n.preventDefault(),b()},children:d?"Pause":"Play"}),e.jsx(c,{onMouseDown:n=>{n.preventDefault(),f(i=>!i)},children:o?"Unmute":"Mute"}),e.jsx(c,{onMouseDown:n=>{n.preventDefault(),window.open("https://plaza.one","_blank","noopener")},children:"Open plaza.one"})]}),e.jsx(w,{label:"Help",children:e.jsx(c,{$disabled:!0,children:"Nightwave Plaza — VortexOS"})})]}),e.jsxs(V,{children:[e.jsx(L,{children:Array.from({length:26}).map((n,i)=>e.jsx(O,{$i:i+1},i))}),e.jsx(U,{}),e.jsx(B,{}),e.jsxs(X,{children:[e.jsx(H,{children:"♫ NIGHTWAVE PLAZA"}),e.jsxs(Y,{$spin:d,children:[e.jsx(q,{src:k,alt:"Cover",onError:n=>n.target.src=`/vaporwave/${h}.jpeg`}),e.jsx(G,{})]}),e.jsx(W,{children:e.jsxs(Z,{$scroll:m,children:[x,m?"      "+x:""]})}),e.jsx(F,{children:S}),e.jsx(J,{children:Array.from({length:18}).map((n,i)=>e.jsx(K,{$i:i,$on:d&&!o},i))}),e.jsxs(Q,{children:[e.jsx(ee,{onClick:b,title:d?"Pause":"Play",children:d?"⏸":"▶"}),e.jsx(te,{onClick:()=>f(n=>!n),title:o?"Unmute":"Mute",children:o||l===0?"🔇":"🔊"}),e.jsx(ne,{type:"range",min:0,max:100,value:Math.round((o?0:l)*100),onChange:n=>{y(Number(n.target.value)/100),o&&f(!1)},title:"Volume"})]})]}),e.jsx("audio",{ref:p,autoPlay:!0,src:A,onPlay:()=>g(!0),onPause:()=>g(!1),style:{display:"none"}})]}),e.jsxs(M,{children:[e.jsx(v,{$flex:1,children:"Powered by Nightwave Plaza"}),e.jsx(v,{children:e.jsx(ae,{children:d?"ON AIR":"PAUSED"})})]})]})};export{oe as default};
