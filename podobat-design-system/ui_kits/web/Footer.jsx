// Footer
function Footer() {
  return (
    <footer style={{background:'var(--color-gray-6)', marginTop:0, padding:'60px 20px 40px'}}>
      <div style={{maxWidth:1140, margin:'0 auto'}}>
        <div style={{display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap:40}}>
          <div>
            <img src="../../assets/logo.svg" style={{height:28}}/>
            <p style={{marginTop:14, fontSize:13, color:'var(--fg-muted)', lineHeight:'22px'}}>
              국어·논술의 뿌리를 만드는<br/>
              포도밭 국어논술
            </p>
            <div style={{display:'flex', gap:8, marginTop:20}}>
              <img src="../../assets/logo/kakao-talk-logo.svg" style={{width:28, height:28}}/>
              <img src="../../assets/logo/naver-blog-logo.svg" style={{width:28, height:28}}/>
              <img src="../../assets/logo/youtube-logo.svg"    style={{width:28, height:28}}/>
            </div>
          </div>
          <FooterCol title="학원 소개" links={['교육 철학','교육 방법','선생님 소개','찾아오시는 길']}/>
          <FooterCol title="수업 안내" links={['전체 커리큘럼','초등 논술','중등 논술','중등 국어']}/>
          <FooterCol title="문의"     links={['카카오톡 상담','전화 02-000-0000','이메일 hello@podobat.com']}/>
        </div>
        <div style={{marginTop:48, paddingTop:20, borderTop:'1px solid var(--border)', display:'flex', justifyContent:'space-between', fontSize:12, color:'var(--fg-subtle)'}}>
          <span>© 2026 포도밭 국어논술. All rights reserved.</span>
          <span>사업자등록번호 000-00-00000 · 대표 박서영</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{fontSize:14, fontWeight:700, color:'var(--fg)', marginBottom:14}}>{title}</div>
      <ul style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:10}}>
        {links.map(l=>(
          <li key={l}><a style={{fontSize:13, color:'var(--fg-muted)', cursor:'pointer'}}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

window.Footer = Footer;
