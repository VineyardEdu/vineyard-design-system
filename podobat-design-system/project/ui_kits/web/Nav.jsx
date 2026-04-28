// Top sticky navigation
function Nav({ route, goto }) {
  const [open, setOpen] = React.useState(null);
  const items = [
    { href: 'about', label: '학원 소개', sub: [
      { href: 'about?tab=philosophy', label: '교육 철학' },
      { href: 'about?tab=methods', label: '교육 방법' },
      { href: 'about?tab=teachers', label: '선생님 소개' },
      { href: 'about?tab=location', label: '찾아오시는 길' },
    ]},
    { href: 'courses', label: '수업 안내', sub: [
      { href: 'courses?tab=all', label: '전체 커리큘럼' },
      { href: 'courses?tab=elementary-writing', label: '초등 논술' },
      { href: 'courses?tab=middle-writing', label: '중등 논술' },
      { href: 'courses?tab=middle-korean', label: '중등 국어' },
    ]},
    { href: 'notices', label: '공지사항', sub: [
      { href: 'notices?tab=course-opening', label: '개강 안내' },
      { href: 'notices?tab=general-notices', label: '공지사항' },
      { href: 'notices?tab=session', label: '설명회 안내' },
    ]},
  ];
  return (
    <header style={{
      position:'sticky', top:0, zIndex:50, background:'#fff',
      height:70, boxShadow:'0 1px 2px rgba(0,0,0,.05)',
    }}>
      <div style={{
        maxWidth:1140, height:'100%', margin:'0 auto', padding:'0 20px',
        display:'flex', alignItems:'center', justifyContent:'space-between',
      }}>
        <a onClick={()=>goto('home')} style={{cursor:'pointer'}}>
          <img src="../../assets/logo.svg" alt="포도밭 국어논술" style={{height:28}}/>
        </a>
        <nav style={{display:'flex', gap:4}}>
          {items.map(it => (
            <div key={it.href}
              onMouseEnter={()=>setOpen(it.href)}
              onMouseLeave={()=>setOpen(null)}
              style={{position:'relative'}}>
              <a onClick={()=>goto(it.href)}
                style={{
                  cursor:'pointer', padding:'24px 18px',
                  display:'block', fontSize:16, fontWeight:600,
                  letterSpacing:'-.002em',
                  color: route.startsWith(it.href) ? 'var(--color-primary-1)' : 'var(--fg)',
                }}>{it.label}</a>
              {open===it.href && (
                <div style={{
                  position:'absolute', top:'100%', left:0,
                  background:'#fff', border:'1px solid var(--border)',
                  borderRadius:12, boxShadow:'0 4px 20px rgba(0,0,0,.06)',
                  padding:8, minWidth:180,
                }}>
                  {it.sub.map(s=>(
                    <a key={s.href} onClick={()=>goto(s.href)}
                      style={{
                        display:'block', padding:'10px 14px', borderRadius:8,
                        fontSize:14, color:'var(--fg-muted)', cursor:'pointer',
                      }}
                      onMouseEnter={e=>{e.currentTarget.style.background='var(--color-primary-2)';e.currentTarget.style.color='var(--color-primary-0)';}}
                      onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--fg-muted)';}}
                    >{s.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <button style={{
          border:'1px solid var(--border)', background:'#fff',
          borderRadius:8, padding:'8px 16px', fontSize:14,
          fontWeight:600, color:'var(--fg)', cursor:'pointer',
        }}>문의하기</button>
      </div>
    </header>
  );
}

window.Nav = Nav;
