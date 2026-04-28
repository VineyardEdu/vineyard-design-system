// 4-up gradation link tiles
function MainLinks({ goto }) {
  const links = [
    { bg:'../../assets/gradation-primary.png', label:'학원 소개', icon:'../../assets/smiley.svg',         color:'gray',  border:'primary', href:'about' },
    { bg:'../../assets/gradation-blue.png',    label:'초등 논술', icon:'../../assets/pencil.svg',         color:'blue',  border:'blue',    href:'courses?tab=elementary-writing' },
    { bg:'../../assets/gradation-red.png',     label:'중등 논술', icon:'../../assets/graduation-cap.svg', color:'red',   border:'red',     href:'courses?tab=middle-writing' },
    { bg:'../../assets/gradation-green.png',   label:'중등 국어', icon:'../../assets/notebook.svg',       color:'green', border:'green',   href:'courses?tab=middle-korean' },
  ];
  return (
    <section style={{maxWidth:1140, margin:'100px auto 0', padding:'0 20px'}}>
      <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:44}}>
        {links.map(l=>(
          <LinkTile key={l.label} link={l} onClick={()=>goto(l.href)}/>
        ))}
      </div>
    </section>
  );
}

function LinkTile({ link, onClick }) {
  const [hover, setHover] = React.useState(false);
  const borderMap = { primary:'var(--color-primary-40)', blue:'var(--color-blue-40)', red:'var(--color-red-40)', green:'var(--color-green-40)' };
  const colorMap  = { gray:'var(--color-gray-0)', blue:'var(--color-blue-0)', red:'var(--color-red-0)', green:'var(--color-green-0)' };
  return (
    <a onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        position:'relative', overflow:'hidden', borderRadius:12,
        border:`1px solid ${hover ? borderMap[link.border] : 'var(--border)'}`,
        boxShadow: hover ? `0 0 4px 0 ${borderMap[link.border]}` : 'none',
        transform: hover ? 'translateY(-16px)' : 'translateY(0)',
        transition:'transform .3s, box-shadow .3s, border-color .3s',
        cursor:'pointer', display:'block',
      }}>
      <img src={link.bg} style={{
        position:'absolute', inset:0, width:'100%', height:'100%',
        objectFit:'cover', zIndex:-1,
      }}/>
      <div style={{padding:'28px 24px 24px 32px', display:'flex', flexDirection:'column', gap:12}}>
        <img src={link.icon} style={{width:44, height:44}}/>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <span style={{fontSize:20, fontWeight:700, color:colorMap[link.color], letterSpacing:'-.002em'}}>{link.label}</span>
          <img src="../../assets/plus.svg" style={{width:30, height:30, opacity:.6}}/>
        </div>
      </div>
    </a>
  );
}

window.MainLinks = MainLinks;
