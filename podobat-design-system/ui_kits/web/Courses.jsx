// Courses page — curriculum by level (no book list; that's domain content)
function Courses({ initialTab }) {
  const tabs = [
    { key:'all',                 label:'전체 커리큘럼' },
    { key:'elementary-writing',  label:'초등 논술' },
    { key:'middle-writing',      label:'중등 논술' },
    { key:'middle-korean',       label:'중등 국어' },
  ];
  const [tab, setTab] = React.useState(Math.max(0, tabs.findIndex(t=>t.key===initialTab)));
  const data = {
    'elementary-writing': {
      color:'blue', icon:'../../assets/pencil.svg',
      title:'초등 논술', tagline:'관찰과 생각을 글로 옮기는 첫 훈련.',
      grades:['초3–초4 입문','초5–초6 심화'],
      bullets:[
        '동화·수필 등 한 편을 꼼꼼히 읽고 핵심 장면 발췌',
        '주장–근거–사례 구조로 짧은 글을 완성',
        '매주 200–400자 글쓰기, 개별 첨삭',
      ],
    },
    'middle-writing': {
      color:'red', icon:'../../assets/graduation-cap.svg',
      title:'중등 논술', tagline:'문학·비문학을 넘나드는 구조적 사고.',
      grades:['중1 기초','중2–중3 집중'],
      bullets:[
        '논증의 뼈대 잡기: 문제제기 · 근거 · 반박',
        '시사 주제 월 1회, 1000자 이상 장문 에세이',
        '기출 유형 분석 및 개인별 약점 리포트',
      ],
    },
    'middle-korean': {
      color:'green', icon:'../../assets/notebook.svg',
      title:'중등 국어', tagline:'개념으로 낯선 작품을 읽어내는 국어.',
      grades:['중1 개념','중2–중3 심화'],
      bullets:[
        '문학 개념 · 문법 · 비문학 독해를 개념 단위로 정리',
        '단원별 서술형 평가 대비 주 1회',
        '내신 2주 전 집중 보강 커리큘럼',
      ],
    },
  };
  const activeKey = tabs[tab].key;
  const courses = activeKey === 'all' ? Object.keys(data) : [activeKey];

  return (
    <section style={{maxWidth:1140, margin:'48px auto 0', padding:'0 20px 120px'}}>
      <h1 style={{fontSize:40, fontWeight:700, letterSpacing:'-.002em'}}>수업 안내</h1>
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
      <div style={{marginTop:40, display:'grid', gridTemplateColumns: courses.length===1 ? '1fr' : 'repeat(3,1fr)', gap:24}}>
        {courses.map(k => <CourseCard key={k} {...data[k]} full={courses.length===1}/>)}
      </div>
    </section>
  );
}

function CourseCard({ color, icon, title, tagline, grades, bullets, full }) {
  const palette = {
    blue:  { bg:'var(--color-blue-1)',  fg:'var(--color-blue-0)'  },
    red:   { bg:'var(--color-red-1)',   fg:'var(--color-red-0)'   },
    green: { bg:'var(--color-green-1)', fg:'var(--color-green-0)' },
  }[color];
  return (
    <div style={{
      background:'#fff', border:'1px solid var(--border)', borderRadius:12,
      padding: full ? 40 : 28, display:'flex', flexDirection:'column', gap:16,
    }}>
      <div style={{
        width:48, height:48, borderRadius:12, background:palette.bg,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        <img src={icon} style={{width:24, height:24}}/>
      </div>
      <div>
        <div style={{fontSize: full?28:22, fontWeight:700, letterSpacing:'-.002em', color:palette.fg}}>{title}</div>
        <div style={{marginTop:6, fontSize:14, color:'var(--fg-muted)', lineHeight:'22px'}}>{tagline}</div>
      </div>
      <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
        {grades.map(g => (
          <span key={g} style={{
            padding:'4px 10px', fontSize:12, fontWeight:600, borderRadius:9999,
            background:palette.bg, color:palette.fg,
          }}>{g}</span>
        ))}
      </div>
      <ul style={{margin:'4px 0 0', padding:0, listStyle:'none', display:'flex', flexDirection:'column', gap:10}}>
        {bullets.map(b => (
          <li key={b} style={{display:'flex', gap:8, fontSize:14, lineHeight:'22px', color:'var(--fg)'}}>
            <img src="../../assets/check.svg" style={{width:16, height:16, marginTop:3, flexShrink:0}}/>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

window.Courses = Courses;
