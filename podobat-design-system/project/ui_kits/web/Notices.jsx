// Notices list with tabs
function Notices({ initialTab }) {
  const tabs = [
    { key:'course-opening',   label:'개강 안내' },
    { key:'general-notices',  label:'공지사항' },
    { key:'session',          label:'설명회 안내' },
  ];
  const [tab, setTab] = React.useState(Math.max(0, tabs.findIndex(t=>t.key===initialTab)));
  const all = {
    0: [
      { cat:'초등 논술', color:'blue',  title:'2026년 여름학기 초등 논술 개강 안내',   date:'2026.04.15', views:128 },
      { cat:'중등 국어', color:'green', title:'중등 국어 심화반 신규 개설 (목요일 7시)',date:'2026.04.12', views:96 },
      { cat:'중등 논술', color:'red',   title:'중등 논술 집중반 수강 접수 시작',        date:'2026.04.08', views:203 },
    ],
    1: [
      { cat:'공지',  color:'gray', title:'5월 연휴 휴강 및 보강 일정 안내',         date:'2026.04.01', views:412 },
      { cat:'공지',  color:'gray', title:'2026년 1학기 교재 배부 방식 변경 안내',    date:'2026.03.20', views:287 },
    ],
    2: [
      { cat:'설명회', color:'blue',  title:'초등 학부모 대상 4월 교육 설명회 신청',  date:'2026.04.05', views:342 },
      { cat:'설명회', color:'green', title:'중등 국어·논술 통합 설명회 안내',         date:'2026.03.28', views:421 },
    ],
  };
  const rows = all[tab];
  return (
    <section style={{maxWidth:1140, margin:'48px auto 0', padding:'0 20px 120px'}}>
      <h1 style={{fontSize:40, fontWeight:700, letterSpacing:'-.002em'}}>공지사항</h1>
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
      <div style={{marginTop:28, background:'#fff', border:'1px solid var(--border)', borderRadius:12}}>
        <div style={{display:'grid', gridTemplateColumns:'100px 1fr 120px 80px', padding:'14px 24px', borderBottom:'1px solid var(--border)', fontSize:13, fontWeight:600, color:'var(--fg-subtle)'}}>
          <span>분류</span><span>제목</span><span>날짜</span><span style={{textAlign:'right'}}>조회</span>
        </div>
        {rows.map((r,i)=>(
          <div key={i} style={{display:'grid', gridTemplateColumns:'100px 1fr 120px 80px', padding:'18px 24px', alignItems:'center', borderBottom: i<rows.length-1 ? '1px solid var(--color-gray-6)' : 'none', fontSize:15}}>
            <Badge color={r.color}>{r.cat}</Badge>
            <span style={{color:'var(--fg)', fontWeight:500}}>{r.title}</span>
            <span style={{color:'var(--fg-subtle)', fontSize:13, fontFamily:'SF Mono, ui-monospace, monospace'}}>{r.date}</span>
            <span style={{color:'var(--fg-subtle)', fontSize:13, textAlign:'right'}}>{r.views}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

window.Notices = Notices;
