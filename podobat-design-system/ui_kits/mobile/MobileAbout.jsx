// MobileAbout — tabs + content for 학원 소개 (375px viewport)
function MobileAbout({ initialTab }) {
  const tabs = [
    { key:'philosophy', label:'교육 철학' },
    { key:'methods',    label:'교육 방법' },
    { key:'teachers',   label:'선생님' },
    { key:'location',   label:'찾아오기' },
  ];
  const [tab, setTab] = React.useState(Math.max(0, tabs.findIndex(t=>t.key===initialTab)));
  return (
    <section style={{padding:'24px 20px 60px'}}>
      <h1 style={{fontSize:22, fontWeight:700, letterSpacing:'-.002em'}}>학원 소개</h1>
      <div style={{display:'flex', gap:12, marginTop:20, borderBottom:'1px solid var(--border)', overflowX:'auto'}}>
        {tabs.map((t,i)=>(
          <button key={t.key} onClick={()=>setTab(i)} style={{
            fontFamily:'inherit', fontSize:13, fontWeight:600, padding:'10px 4px',
            border:'none', background:'transparent', whiteSpace:'nowrap',
            borderBottom: tab===i ? '2px solid var(--color-primary-1)' : '2px solid transparent',
            color: tab===i ? 'var(--color-primary-1)' : 'var(--fg-muted)',
            marginBottom:-1, cursor:'pointer',
          }}>{t.label}</button>
        ))}
      </div>
      {tab===0 && <MPhilosophy/>}
      {tab===1 && <MMethods/>}
      {tab===2 && <MTeachers/>}
      {tab===3 && <MLocation/>}
    </section>
  );
}

function MPhilosophy() {
  return (
    <div style={{marginTop:28}}>
      <div style={{color:'var(--color-primary-1)', fontWeight:600, fontSize:11, letterSpacing:'.04em'}}>교육 철학</div>
      <h2 style={{marginTop:8, fontSize:22, lineHeight:'30px', fontWeight:300, letterSpacing:'-.002em'}}>
        국어·논술의 뿌리를 만드는<br/>
        <span style={{fontWeight:700, color:'var(--color-primary-0)'}}>포도밭 국어논술</span>
      </h2>
      <p style={{marginTop:16, fontSize:13, lineHeight:'22px', color:'var(--fg-muted)'}}>
        포도밭은 한 권의 책, 한 편의 글을 깊이 읽어 내는 힘을 기릅니다.
        정답을 외우는 국어가 아니라, 구조와 개념으로 스스로 해석하고
        자신의 언어로 풀어쓰는 학생을 만들어 갑니다.
      </p>
      <img src="../../assets/education-philosophy.jpg" style={{marginTop:20, width:'100%', borderRadius:12, aspectRatio:'4/3', objectFit:'cover'}}/>
    </div>
  );
}

function MMethods() {
  const steps = [
    {icon:'../../assets/3dcon/puzzle.png', t:'관찰',   d:'일상·작품 속 디테일을 발견하고 메모한다.'},
    {icon:'../../assets/3dcon/steps.png',  t:'구조화', d:'관찰을 주장-근거-사례로 구조화한다.'},
    {icon:'../../assets/3dcon/star.png',   t:'표현',   d:'나의 언어로 다듬어 한 편의 글로 완성한다.'},
  ];
  return (
    <div style={{marginTop:28}}>
      <div style={{color:'var(--color-primary-1)', fontWeight:600, fontSize:11, letterSpacing:'.04em'}}>교육 방법</div>
      <h2 style={{marginTop:8, fontSize:20, lineHeight:'28px', fontWeight:700, letterSpacing:'-.002em'}}>구조 따라 생각을 펼치는 <span style={{color:'var(--color-primary-0)'}}>글쓰기</span></h2>
      <div style={{marginTop:20, display:'flex', flexDirection:'column', gap:12}}>
        {steps.map(s=>(
          <div key={s.t} style={{background:'#fff', border:'1px solid var(--border)', borderRadius:8, padding:16, display:'flex', gap:14, alignItems:'center'}}>
            <img src={s.icon} style={{width:48, height:48, objectFit:'contain', flexShrink:0}}/>
            <div>
              <div style={{fontSize:15, fontWeight:700, letterSpacing:'-.002em'}}>{s.t}</div>
              <div style={{marginTop:2, fontSize:12, lineHeight:'18px', color:'var(--fg-muted)'}}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MTeachers() {
  const teachers = [
    { name:'선생님 1', role:'초등 논술 · 중등 국어', bio:'선생님 약력 및 소개 문구가 들어갑니다.' },
    { name:'선생님 2', role:'중등 논술',           bio:'선생님 약력 및 소개 문구가 들어갑니다.' },
  ];
  return (
    <div style={{marginTop:28, display:'flex', flexDirection:'column', gap:16}}>
      {teachers.map(t=>(
        <div key={t.name} style={{background:'#fff', border:'1px solid var(--border)', borderRadius:8, overflow:'hidden'}}>
          <div style={{
            width:'100%', aspectRatio:'4/3', background:'var(--color-gray-6)',
            display:'flex', alignItems:'center', justifyContent:'center',
            color:'var(--fg-subtle)', fontSize:12,
          }}>[ 선생님 사진 · 실 제품 ]</div>
          <div style={{padding:16}}>
            <div style={{fontSize:11, fontWeight:600, color:'var(--color-primary-1)', letterSpacing:'.04em'}}>{t.role}</div>
            <div style={{marginTop:4, fontSize:16, fontWeight:700, letterSpacing:'-.002em'}}>{t.name}</div>
            <div style={{marginTop:8, fontSize:12, lineHeight:'20px', color:'var(--fg-muted)'}}>{t.bio}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MLocation() {
  return (
    <div style={{marginTop:28}}>
      <div style={{color:'var(--color-primary-1)', fontWeight:600, fontSize:11, letterSpacing:'.04em'}}>찾아오시는 길</div>
      <h2 style={{marginTop:8, fontSize:18, fontWeight:700, letterSpacing:'-.002em', lineHeight:'26px'}}>서울특별시 서초구<br/>반포대로 000, 3층</h2>
      <div style={{marginTop:16, background:'var(--color-gray-6)', border:'1px solid var(--border)', borderRadius:8, aspectRatio:'1/1', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--fg-subtle)', fontSize:12}}>
        [ 지도 영역 · 네이버 지도 임베드 ]
      </div>
    </div>
  );
}

window.MobileAbout = MobileAbout;
