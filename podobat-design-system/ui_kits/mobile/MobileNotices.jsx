// MobileNotices — list with tab filter (375px viewport)
function MobileNotices({ initialTab }) {
  const tabs = [
    { key:'course-opening',   label:'개강 안내' },
    { key:'general-notices',  label:'공지사항' },
    { key:'session',          label:'설명회' },
  ];
  const [tab, setTab] = React.useState(Math.max(0, tabs.findIndex(t=>t.key===initialTab)));
  const all = {
    0: [
      { cat:'초등', color:'blue',  title:'2026년 여름학기 초등 논술 개강 안내',   date:'04.15' },
      { cat:'중등', color:'green', title:'중등 국어 심화반 신규 개설 (목요일 7시)',date:'04.12' },
      { cat:'중등', color:'red',   title:'중등 논술 집중반 수강 접수 시작',        date:'04.08' },
    ],
    1: [
      { cat:'공지', color:'gray', title:'5월 연휴 휴강 및 보강 일정 안내',         date:'04.01' },
      { cat:'공지', color:'gray', title:'2026년 1학기 교재 배부 방식 변경 안내',    date:'03.20' },
    ],
    2: [
      { cat:'설명회', color:'blue',  title:'초등 학부모 대상 4월 교육 설명회 신청', date:'04.05' },
      { cat:'설명회', color:'green', title:'중등 국어·논술 통합 설명회 안내',        date:'03.28' },
    ],
  };
  const rows = all[tab];
  return (
    <section style={{padding:'24px 20px 60px'}}>
      <h1 style={{fontSize:22, fontWeight:700, letterSpacing:'-.002em'}}>공지사항</h1>
      <div style={{display:'flex', gap:20, marginTop:20, borderBottom:'1px solid var(--border)'}}>
        {tabs.map((t,i)=>(
          <button key={t.key} onClick={()=>setTab(i)} style={{
            fontFamily:'inherit', fontSize:13, fontWeight:600, padding:'10px 0',
            border:'none', background:'transparent',
            borderBottom: tab===i ? '2px solid var(--color-primary-1)' : '2px solid transparent',
            color: tab===i ? 'var(--color-primary-1)' : 'var(--fg-muted)',
            marginBottom:-1, cursor:'pointer',
          }}>{t.label}</button>
        ))}
      </div>
      <div style={{marginTop:8}}>
        {rows.map((r,i)=>(
          <div key={i} style={{
            display:'flex', alignItems:'center', gap:10, padding:'14px 0',
            borderBottom:'1px solid var(--color-gray-6)',
          }}>
            <MNBadge color={r.color}>{r.cat}</MNBadge>
            <span style={{flex:1, fontSize:13, fontWeight:500, letterSpacing:'-.002em', lineHeight:'20px'}}>{r.title}</span>
            <span style={{fontSize:11, color:'var(--fg-subtle)', fontFamily:'SF Mono, ui-monospace, monospace'}}>{r.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MNBadge({ color, children }) {
  const bg = { blue:'var(--color-blue-1)', red:'var(--color-red-1)', green:'var(--color-green-1)', gray:'var(--color-gray-6)' }[color];
  const fg = { blue:'var(--color-blue-0)', red:'var(--color-red-0)', green:'var(--color-green-0)', gray:'var(--fg-muted)' }[color];
  return (
    <span style={{
      padding:'2px 7px', borderRadius:2, fontSize:10, fontWeight:600,
      background:bg, color:fg, whiteSpace:'nowrap',
    }}>{children}</span>
  );
}

window.MobileNotices = MobileNotices;
