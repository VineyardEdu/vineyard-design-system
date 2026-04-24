// MobileEduMethod — 3D-icon feature cards (mobile)
function MobileEduMethod() {
  const items = [
    { icon:'../../assets/3dcon/idea.png',      title:'핵심 개념으로 출발',  desc:'낯선 작품도 배운 개념으로 풀어내는 법.' },
    { icon:'../../assets/3dcon/books.png',     title:'작품 속에서 연결',    desc:'문학·비문학·문법이 한 흐름이 되도록.' },
    { icon:'../../assets/3dcon/magnifier.png', title:'구조로 해석',         desc:'글의 뼈대를 읽어 내는 훈련.' },
  ];
  return (
    <section style={{background:'var(--color-gray-6)', padding:'40px 20px'}}>
      <div style={{color:'var(--color-primary-1)', fontWeight:600, fontSize:11, letterSpacing:'.04em', marginBottom:8}}>포도밭 교육 방법</div>
      <h2 style={{fontSize:22, lineHeight:'30px', fontWeight:700, letterSpacing:'-.002em'}}>개념 따라 낯선 작품 <span style={{color:'var(--color-primary-0)'}}>보는 국어</span></h2>
      <p style={{marginTop:8, fontSize:13, lineHeight:'20px', color:'var(--fg-muted)'}}>외우는 국어가 아닙니다. 구조를 이해하고, 스스로 해석·쓰는 힘을.</p>
      <div style={{marginTop:20, display:'flex', flexDirection:'column', gap:12}}>
        {items.map(it=>(
          <div key={it.title} style={{
            background:'#fff', border:'1px solid var(--border)', borderRadius:8, padding:16,
            display:'flex', gap:14, alignItems:'center',
          }}>
            <img src={it.icon} style={{width:48, height:48, objectFit:'contain', flexShrink:0}}/>
            <div>
              <div style={{fontSize:14, fontWeight:700, letterSpacing:'-.002em'}}>{it.title}</div>
              <div style={{marginTop:2, fontSize:12, color:'var(--fg-muted)', lineHeight:'18px'}}>{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.MobileEduMethod = MobileEduMethod;
