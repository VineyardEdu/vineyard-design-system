// MobileLinks — 2x2 gradation tiles
function MobileLinks({ goto }) {
  const links = [
    { bg:'../../assets/gradation-primary.png', label:'학원 소개', icon:'../../assets/smiley.svg',         color:'gray',  border:'primary', href:'about' },
    { bg:'../../assets/gradation-blue.png',    label:'초등 논술', icon:'../../assets/pencil.svg',         color:'blue',  border:'blue',    href:'courses?tab=elementary-writing' },
    { bg:'../../assets/gradation-red.png',     label:'중등 논술', icon:'../../assets/graduation-cap.svg', color:'red',   border:'red',     href:'courses?tab=middle-writing' },
    { bg:'../../assets/gradation-green.png',   label:'중등 국어', icon:'../../assets/notebook.svg',       color:'green', border:'green',   href:'courses?tab=middle-korean' },
  ];
  const colorMap = { gray:'var(--color-gray-0)', blue:'var(--color-blue-0)', red:'var(--color-red-0)', green:'var(--color-green-0)' };
  return (
    <section style={{padding:'40px 20px 0'}}>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
        {links.map(l => (
          <a key={l.label} onClick={()=>goto(l.href)} style={{
            position:'relative', overflow:'hidden', borderRadius:8,
            border:'0.667px solid var(--color-gray-5)', cursor:'pointer', display:'block',
          }}>
            <img src={l.bg} style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:-1}}/>
            <div style={{padding:'18px 16px 16px 20px', display:'flex', flexDirection:'column', gap:8}}>
              <img src={l.icon} style={{width:28, height:28}}/>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span style={{fontSize:16, fontWeight:700, color:colorMap[l.color], letterSpacing:'-.002em'}}>{l.label}</span>
                <img src="../../assets/plus.svg" style={{width:24, height:24, opacity:.6}}/>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

window.MobileLinks = MobileLinks;
