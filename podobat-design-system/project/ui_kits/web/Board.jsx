// Notices/board section
function Board() {
  const tabs = ['개강 안내', '공지사항', '설명회 안내'];
  const [tab, setTab] = React.useState(0);
  const notices = [
    { badge:'초등', label:'초등 논술', date:'2026.04.15', title:'2026년 여름학기 초등 논술 개강 안내', color:'blue' },
    { badge:'중등', label:'중등 국어', date:'2026.04.12', title:'중등 국어 심화반 신규 개설 (목요일 7시)', color:'green' },
    { badge:'중등', label:'중등 논술', date:'2026.04.08', title:'중등 논술 집중반 수강 접수 시작', color:'red' },
    { badge:'공통', label:'수업', date:'2026.04.01', title:'5월 연휴 휴강 및 보강 일정 안내', color:'gray' },
  ];
  return (
    <section style={{maxWidth:1140, margin:'120px auto 0', padding:'0 20px'}}>
      <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:32}}>
        <div>
          <h2 style={{fontSize:36, lineHeight:'52px', fontWeight:700, color:'var(--fg)', letterSpacing:'-.002em'}}>
            포도밭 <span style={{color:'var(--color-primary-0)'}}>소식</span>
          </h2>
          <p style={{marginTop:8, color:'var(--fg-muted)', fontSize:16}}>개강, 설명회 그리고 새 소식을 확인하세요.</p>
        </div>
        <a style={{color:'var(--color-primary-1)', fontSize:15, fontWeight:600, cursor:'pointer'}}>전체 보기 →</a>
      </div>
      <div style={{display:'flex', gap:10, marginBottom:20}}>
        {tabs.map((t,i)=>(
          <button key={t} onClick={()=>setTab(i)} style={{
            fontFamily:'inherit', fontSize:14, fontWeight:500,
            padding:'8px 18px', borderRadius:9999,
            border:'1px solid var(--border)',
            background: tab===i ? 'var(--color-primary-1)' : '#fff',
            color: tab===i ? 'var(--color-gray-6)' : 'var(--fg)',
            cursor:'pointer',
            boxShadow: tab===i ? '0 0 1px 0 rgba(105,81,137,.4)' : '0 0 1px 0 rgba(49,46,52,.4)',
          }}>{t}</button>
        ))}
      </div>
      <div style={{background:'#fff', border:'1px solid var(--border)', borderRadius:12}}>
        {notices.map((n,i)=>(
          <div key={i} style={{
            display:'flex', alignItems:'center', gap:16, padding:'18px 24px',
            borderBottom: i<notices.length-1 ? '1px solid var(--color-gray-6)' : 'none',
          }}>
            <Badge color={n.color}>{n.label}</Badge>
            <span style={{flex:1, fontSize:16, color:'var(--fg)', fontWeight:500}}>{n.title}</span>
            <span style={{fontSize:13, color:'var(--fg-subtle)', fontFamily:'SF Mono, ui-monospace, monospace'}}>{n.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Badge({ color, children }) {
  const bg = { blue:'var(--color-blue-1)', red:'var(--color-red-1)', green:'var(--color-green-1)', gray:'var(--color-gray-6)' }[color];
  const fg = { blue:'var(--color-blue-0)', red:'var(--color-red-0)', green:'var(--color-green-0)', gray:'var(--fg-muted)' }[color];
  return (
    <span style={{
      padding:'4px 10px', borderRadius:2, fontSize:12, fontWeight:600,
      background:bg, color:fg, letterSpacing:'-.002em', whiteSpace:'nowrap',
    }}>{children}</span>
  );
}

window.Board = Board;
window.Badge = Badge;
