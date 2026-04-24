// MobileBanner — hero with smaller type
function MobileBanner() {
  return (
    <section style={{
      position:'relative', height:340,
      background:`url('../../assets/education-philosophy.jpg') center/cover`,
    }}>
      <div style={{position:'absolute', inset:0, background:'rgba(49,46,52,.40)'}}/>
      <div style={{position:'relative', padding:'40px 20px', color:'#fff'}}>
        <div style={{fontSize:11, fontWeight:500, letterSpacing:'.04em', opacity:.9}}>포도밭의 교육 철학</div>
        <h1 style={{
          marginTop:8, fontSize:22, lineHeight:'30px', letterSpacing:'-.002em',
          fontWeight:300, textShadow:'0 0 2px rgba(49,46,52,.4)',
        }}>
          국어·논술의 뿌리를 만드는<br/>
          <span style={{fontWeight:700}}>포도밭 국어논술</span>
        </h1>
      </div>
      <div style={{position:'absolute', bottom:16, left:'50%', transform:'translateX(-50%)', display:'flex', gap:6}}>
        <span style={{width:16, height:4, borderRadius:2, background:'#fff'}}/>
        <span style={{width:4, height:4, borderRadius:2, background:'rgba(255,255,255,.5)'}}/>
      </div>
    </section>
  );
}

window.MobileBanner = MobileBanner;
