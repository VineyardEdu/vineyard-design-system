// MobileFooter — compact info block
function MobileFooter() {
  return (
    <footer style={{background:'var(--color-gray-6)', padding:'32px 20px 40px', marginTop:40}}>
      <img src="../../assets/logo.svg" style={{height:20}}/>
      <p style={{marginTop:12, fontSize:11, lineHeight:'18px', color:'var(--fg-muted)'}}>
        상호명 : 포도밭학원 | 대표자명 : 유경하<br/>
        사업자등록번호 : 135-92-81736<br/>
        학원등록번호 : 제 13570호
      </p>
      <div style={{display:'flex', gap:10, marginTop:18}}>
        <img src="../../assets/logo/kakao-talk-logo.svg" style={{width:24, height:24}}/>
        <img src="../../assets/logo/naver-blog-logo.svg" style={{width:24, height:24}}/>
        <img src="../../assets/logo/youtube-logo.svg"    style={{width:24, height:24}}/>
      </div>
      <div style={{marginTop:20, fontSize:10, color:'var(--fg-subtle)'}}>© 2026 포도밭 국어논술</div>
    </footer>
  );
}

window.MobileFooter = MobileFooter;
