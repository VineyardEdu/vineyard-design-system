// MobileBoard — tabbed notices preview (mobile)
function MobileBoard() {
  const tabs = ['개강 안내','공지사항','설명회'];
  const [tab, setTab] = React.useState(0);
  const all = {
    0: [
      { cat:'초등', color:'blue',  title:'2026년 여름학기 초등 논술 개강', date:'04.15' },
      { cat:'중등', color:'green', title:'중등 국어 심화반 신규 개설', date:'04.12' },
      { cat:'중등', color:'red',   title:'중등 논술 집중반 수강 접수', date:'04.08' },
    ],
    1: [
      { cat:'공지', color:'gray', title:'5월 연휴 휴강 및 보강 일정', date:'04.01' },
      { cat:'공지', color:'gray', title:'2026년 1학기 교재 배부 방식', date:'03.20' },
    ],
    2: [
      { cat:'설명회', color:'blue',  title:'4월 초등 교육 설명회 신청', date:'04.05' },
    ],
  };
  return (
    <section style={{padding:'40px 20px 40px'}}>
      <div style={{display:'flex', alignItems:'flex-end', justifyContent:'space-between', marginBottom:16}}>
        <div>
          <h2 style={{fontSize:20, fontWeight:700, letterSpacing:'-.002em'}}>포도밭 <span style={{color:'var(--color-primary-0)'}}>소식</span></h2>
          <p style={{marginTop:4, fontSize:12, color:'var(--fg-muted)'}}>새 소식을 확인하세요.</p>
        </div>
      </div>
      <div style={{display:'flex', borderBottom:'1px solid var(--color-gray-5)', gap:20}}>
        {tabs.map((t,i)=>(
          <button key={t} onClick={()=>setTab(i)} style={{
            fontFamily:'inherit', fontSize:13, fontWeight:600, padding:'10px 0',
            background:'transparent', border:'none', cursor:'pointer',
            borderBottom: tab===i ? '2px solid var(--color-primary-1)' : '2px solid transparent',
            color: tab===i ? 'var(--color-primary-1)' : 'var(--color-gray-2)',
            marginBottom:-1,
          }}>{t}</button>
        ))}
      </div>
      <div style={{marginTop:12}}>
        {all[tab].map((r,i)=>(
          <div key={i} style={{
            display:'flex', alignItems:'center', gap:10, padding:'12px 0',
            borderTop: i>0 ? '1px solid var(--color-gray-6)' : 'none',
          }}>
            <MBadge color={r.color}>{r.cat}</MBadge>
            <span style={{flex:1, fontSize:13, fontWeight:500, letterSpacing:'-.002em'}}>{r.title}</span>
            <span style={{fontSize:11, color:'var(--fg-subtle)', fontFamily:'SF Mono, ui-monospace, monospace'}}>{r.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MBadge({ color, children }) {
  const bg = { blue:'var(--color-blue-1)', red:'var(--color-red-1)', green:'var(--color-green-1)', gray:'var(--color-gray-6)' }[color];
  const fg = { blue:'var(--color-blue-0)', red:'var(--color-red-0)', green:'var(--color-green-0)', gray:'var(--fg-muted)' }[color];
  return (
    <span style={{
      padding:'2px 7px', borderRadius:2, fontSize:10, fontWeight:600,
      background:bg, color:fg, whiteSpace:'nowrap',
    }}>{children}</span>
  );
}

window.MobileBoard = MobileBoard;
