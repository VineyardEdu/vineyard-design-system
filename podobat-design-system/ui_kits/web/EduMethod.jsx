// "개념 따라 낯선 작품 보는 국어" feature row with 3D icons
function EduMethod() {
  const items = [
    { icon:'../../assets/3dcon/idea.png',      title:'핵심 개념으로 출발',     desc:'낯선 작품도 배운 개념으로 풀어내는 법.' },
    { icon:'../../assets/3dcon/books.png',     title:'작품 속에서 연결',        desc:'문학·비문학·문법이 한 흐름이 되도록.' },
    { icon:'../../assets/3dcon/magnifier.png', title:'구조로 해석',             desc:'글의 뼈대를 읽어 내는 훈련.' },
    { icon:'../../assets/3dcon/pen.png',       title:'내 생각으로 쓰기',        desc:'해석을 내 언어의 구조로 옮기는 연습.' },
  ];
  return (
    <section style={{background:'var(--color-gray-6)', padding:'100px 0', marginTop:120}}>
      <div style={{maxWidth:1140, margin:'0 auto', padding:'0 20px'}}>
        <div style={{display:'flex', alignItems:'center', gap:10, color:'var(--color-primary-1)', fontWeight:600, fontSize:14, letterSpacing:'.04em', marginBottom:12}}>
          <img src="../../assets/spark.svg" style={{width:18, height:18}}/>
          <span>포도밭 교육 방법</span>
        </div>
        <h2 style={{fontSize:40, lineHeight:'54px', fontWeight:700, color:'var(--fg)', letterSpacing:'-.002em', maxWidth:720}}>
          개념 따라 낯선 작품 <span style={{color:'var(--color-primary-0)'}}>보는 국어</span>
        </h2>
        <p style={{marginTop:12, color:'var(--fg-muted)', fontSize:17, lineHeight:'28px', maxWidth:640}}>
          외우는 국어가 아닙니다. 구조를 이해하고, 낯선 작품에서도 스스로 해석하고 쓰는 힘을 만듭니다.
        </p>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:20, marginTop:48}}>
          {items.map(it=>(
            <div key={it.title} style={{
              background:'#fff', borderRadius:12, padding:24,
              border:'1px solid var(--border)',
              display:'flex', flexDirection:'column', gap:14,
            }}>
              <img src={it.icon} style={{width:64, height:64, objectFit:'contain'}}/>
              <div style={{fontSize:18, fontWeight:700, color:'var(--fg)', letterSpacing:'-.002em'}}>{it.title}</div>
              <div style={{fontSize:14, lineHeight:'22px', color:'var(--fg-muted)'}}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.EduMethod = EduMethod;
