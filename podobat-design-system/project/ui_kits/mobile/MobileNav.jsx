// MobileNav — 50px sticky top bar with logo + hamburger
function MobileNav({ onMenu }) {
  return (
    <header style={{
      position:'sticky', top:59, zIndex:10, height:50,
      background:'#fff', borderBottom:'1px solid var(--color-gray-5)',
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'0 16px',
    }}>
      <img src="../../assets/logo.svg" style={{height:20}} alt="포도밭"/>
      <button onClick={onMenu} style={{
        width:32, height:32, border:'none', background:'transparent', cursor:'pointer',
        display:'flex', alignItems:'center', justifyContent:'center', padding:0,
      }} aria-label="메뉴">
        <img src="../../assets/menu.svg" style={{width:24, height:24}}/>
      </button>
    </header>
  );
}

window.MobileNav = MobileNav;
