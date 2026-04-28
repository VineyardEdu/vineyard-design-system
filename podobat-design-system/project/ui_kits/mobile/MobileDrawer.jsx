// MobileDrawer — 310px right-slide drawer with expandable sub-menus
function MobileDrawer({ open, onClose, route, goto }) {
  const [expanded, setExpanded] = React.useState(null);
  const items = [
    { href:'about',   label:'학원 소개', sub:[
      {href:'about?tab=philosophy', label:'교육 철학'},
      {href:'about?tab=methods',    label:'교육 방법'},
      {href:'about?tab=teachers',   label:'선생님 소개'},
      {href:'about?tab=location',   label:'찾아오시는 길'},
    ]},
    { href:'courses', label:'수업 안내', sub:[
      {href:'courses?tab=all',                 label:'전체 커리큘럼'},
      {href:'courses?tab=elementary-writing',  label:'초등 논술'},
      {href:'courses?tab=middle-writing',      label:'중등 논술'},
      {href:'courses?tab=middle-korean',       label:'중등 국어'},
    ]},
    { href:'notices', label:'공지사항', sub:[
      {href:'notices?tab=course-opening',   label:'개강 안내'},
      {href:'notices?tab=general-notices',  label:'공지사항'},
      {href:'notices?tab=session',          label:'설명회 안내'},
    ]},
  ];
  const toggle = (lbl) => setExpanded(e => e===lbl ? null : lbl);
  const nav = (h) => { goto(h); onClose(); };

  return (
    <>
      <div onClick={onClose} style={{
        position:'absolute', inset:0, background:'rgba(0,0,0,.5)', zIndex:40,
        opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none',
        transition:'opacity .3s',
      }}/>
      <aside style={{
        position:'absolute', top:0, right:0, zIndex:50, height:'100%', width:310,
        background:'#fff', paddingTop:113, paddingBottom:24, /* 59 (notch) + 54 (header spacing) */
        boxShadow:'-4px 0 12px rgba(0,0,0,.06)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition:'transform .3s ease-in-out',
        display:'flex', flexDirection:'column',
      }}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0 20px 11px', borderBottom:'1px solid var(--color-gray-5)'}}>
          <button onClick={()=>nav('home')} style={{width:32, height:32, border:'none', background:'var(--color-primary-0)', borderRadius:9999, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'}}>
            <img src="../../assets/home.svg" style={{width:16, height:16, filter:'brightness(0) invert(1)'}}/>
          </button>
          <button onClick={onClose} style={{width:32, height:32, border:'none', background:'transparent', cursor:'pointer'}}>
            <img src="../../assets/close.svg" style={{width:20, height:20}}/>
          </button>
        </div>
        <ul style={{listStyle:'none', margin:0, padding:'32px 20px', display:'flex', flexDirection:'column', gap:32}}>
          {items.map(it => {
            const isActive = route.startsWith(it.href);
            const isExp = expanded === it.label;
            return (
              <li key={it.href}>
                <button onClick={()=>toggle(it.label)} style={{
                  width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',
                  border:'none', background:'transparent', cursor:'pointer', padding:0,
                  color: isActive ? 'var(--color-primary-1)' : 'var(--color-gray-1)',
                  fontFamily:'inherit', fontSize:14, fontWeight:600, letterSpacing:'-.002em',
                }}>
                  <span>{it.label}</span>
                  <img src="../../assets/chevron-up.svg" style={{width:20, height:20, transform: isExp ? 'rotate(0)' : 'rotate(180deg)', transition:'transform .2s'}}/>
                </button>
                {isExp && (
                  <ul style={{listStyle:'none', margin:'16px 0 0', padding:0, display:'flex', flexDirection:'column', gap:16}}>
                    {it.sub.map(s => (
                      <li key={s.href}>
                        <a onClick={()=>nav(s.href)} style={{
                          display:'block', fontSize:12, fontWeight:600, color:'var(--color-gray-2)',
                          cursor:'pointer', letterSpacing:'-.002em',
                        }}>{s.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}

window.MobileDrawer = MobileDrawer;
