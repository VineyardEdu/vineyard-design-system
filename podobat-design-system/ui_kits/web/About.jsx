// About page with tabs
function About({ initialTab }) {
  const tabs = [
    { key:'philosophy', label:'교육 철학' },
    { key:'methods',    label:'교육 방법' },
    { key:'teachers',   label:'선생님 소개' },
    { key:'location',   label:'찾아오시는 길' },
  ];
  const [tab, setTab] = React.useState(
    Math.max(0, tabs.findIndex(t=>t.key===initialTab))
  );
  return (
    <section style={{maxWidth:1140, margin:'48px auto 0', padding:'0 20px 120px'}}>
      <h1 style={{fontSize:40, fontWeight:700, letterSpacing:'-.002em'}}>학원 소개</h1>
      <div style={{display:'flex', gap:16, marginTop:28, borderBottom:'1px solid var(--border)'}}>
        {tabs.map((t,i)=>(
          <button key={t.key} onClick={()=>setTab(i)} style={{
            fontFamily:'inherit', fontSize:16, fontWeight:600, padding:'14px 6px',
            border:'none', background:'transparent',
            borderBottom: tab===i ? '2px solid var(--color-primary-1)' : '2px solid transparent',
            color: tab===i ? 'var(--color-primary-1)' : 'var(--fg-muted)',
            cursor:'pointer',
          }}>{t.label}</button>
        ))}
      </div>
      {tab===0 && <Philosophy/>}
      {tab===1 && <Methods/>}
      {tab===2 && <Teachers/>}
      {tab===3 && <Location/>}
    </section>
  );
}

function Philosophy() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:60, marginTop:60, alignItems:'center'}}>
      <div>
        <div style={{color:'var(--color-primary-1)', fontWeight:600, fontSize:14, letterSpacing:'.04em', marginBottom:12}}>교육 철학</div>
        <h2 style={{fontSize:40, lineHeight:'54px', fontWeight:300, letterSpacing:'-.002em', color:'var(--fg)'}}>
          국어·논술의 뿌리를 만드는<br/>
          <span style={{fontWeight:700, color:'var(--color-primary-0)'}}>포도밭 국어논술</span>
        </h2>
        <p style={{marginTop:20, fontSize:16, lineHeight:'28px', color:'var(--fg-muted)'}}>
          포도밭은 한 권의 책, 한 편의 글을 깊이 읽어 내는 힘을 기릅니다.
          정답을 외우는 국어가 아니라, 구조와 개념으로 스스로 해석하고
          자신의 언어로 풀어쓰는 학생을 만들어 갑니다.
        </p>
      </div>
      <img src="../../assets/education-philosophy.jpg" style={{width:'100%', borderRadius:16, aspectRatio:'4/3', objectFit:'cover'}}/>
    </div>
  );
}

function Methods() {
  return (
    <div style={{marginTop:60}}>
      <div style={{color:'var(--color-primary-1)', fontWeight:600, fontSize:14, letterSpacing:'.04em', marginBottom:12}}>교육 방법</div>
      <h2 style={{fontSize:36, lineHeight:'52px', fontWeight:700, letterSpacing:'-.002em'}}>구조 따라 생각을 펼치는 <span style={{color:'var(--color-primary-0)'}}>글쓰기</span></h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, marginTop:40}}>
        {[
          {icon:'../../assets/3dcon/puzzle.png',  t:'관찰',  d:'일상·작품 속 디테일을 발견하고 메모한다.'},
          {icon:'../../assets/3dcon/steps.png',   t:'구조화', d:'관찰을 주장-근거-사례로 구조화한다.'},
          {icon:'../../assets/3dcon/star.png',    t:'표현',  d:'나의 언어로 다듬어 한 편의 글로 완성한다.'},
        ].map(x=>(
          <div key={x.t} style={{background:'#fff', border:'1px solid var(--border)', borderRadius:12, padding:28}}>
            <img src={x.icon} style={{width:64, height:64}}/>
            <div style={{marginTop:12, fontSize:22, fontWeight:700, letterSpacing:'-.002em'}}>{x.t}</div>
            <div style={{marginTop:6, fontSize:14, color:'var(--fg-muted)', lineHeight:'22px'}}>{x.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Teachers() {
  const teachers = [
    { name:'선생님 1', role:'초등 논술 · 중등 국어', bio:'선생님 약력 및 소개 문구가 들어갑니다.' },
    { name:'선생님 2', role:'중등 논술',           bio:'선생님 약력 및 소개 문구가 들어갑니다.' },
  ];
  return (
    <div style={{marginTop:60, display:'grid', gridTemplateColumns:'1fr 1fr', gap:32}}>
      {teachers.map(t=>(
        <div key={t.name} style={{background:'#fff', border:'1px solid var(--border)', borderRadius:12, overflow:'hidden'}}>
          <div style={{
            width:'100%', aspectRatio:'4/3', background:'var(--color-gray-6)',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--fg-subtle)', fontSize:13,
          }}>[ 선생님 사진 · 실 제품 ]</div>
          <div style={{padding:24}}>
            <div style={{fontSize:13, fontWeight:600, color:'var(--color-primary-1)', letterSpacing:'.04em'}}>{t.role}</div>
            <div style={{marginTop:6, fontSize:24, fontWeight:700, letterSpacing:'-.002em'}}>{t.name}</div>
            <div style={{marginTop:10, fontSize:14, lineHeight:'24px', color:'var(--fg-muted)'}}>{t.bio}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Location() {
  return (
    <div style={{marginTop:60}}>
      <div style={{color:'var(--color-primary-1)', fontWeight:600, fontSize:14, letterSpacing:'.04em', marginBottom:12}}>찾아오시는 길</div>
      <h2 style={{fontSize:28, fontWeight:700, letterSpacing:'-.002em'}}>서울특별시 서초구 반포대로 000, 3층</h2>
      <div style={{marginTop:24, background:'var(--color-gray-6)', border:'1px solid var(--border)', borderRadius:12, aspectRatio:'2/1', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--fg-subtle)'}}>
        [ 지도 영역 · 실 제품에서는 네이버 지도 API 임베드 ]
      </div>
    </div>
  );
}

window.About = About;
