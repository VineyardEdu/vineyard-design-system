// Hero banner carousel
function Banner() {
  const slides = [
    {
      img: '../../assets/education-philosophy.jpg',
      tag: '포도밭의 교육 철학',
      title: '국어·논술의 뿌리를 만드는',
      brand: '포도밭 국어논술',
    },
    {
      img: '../../assets/education-method.jpg',
      tag: '포도밭의 교육 방법',
      title: '구조 따라 생각을 펼치는',
      brand: '글쓰기 수업',
    },
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(()=>setIdx(i=>(i+1)%slides.length), 10000);
    return () => clearInterval(t);
  }, []);
  const s = slides[idx];
  return (
    <section style={{
      position:'relative', height:520, overflow:'hidden',
      background:`url('${s.img}') center/cover`, transition:'background .5s',
    }}>
      <div style={{position:'absolute', inset:0, background:'rgba(49,46,52,.40)'}}/>
      <div style={{
        position:'relative', maxWidth:1140, margin:'0 auto', height:'100%',
        display:'flex', alignItems:'center', padding:'0 20px', color:'#fff',
      }}>
        <div>
          <div style={{fontSize:14, fontWeight:500, letterSpacing:'.04em', opacity:.9}}>{s.tag}</div>
          <h1 style={{
            marginTop:12, fontSize:56, lineHeight:'72px', letterSpacing:'-.01em',
            fontWeight:300, textShadow:'0 0 2px rgba(49,46,52,.4)',
          }}>
            {s.title}<br/>
            <span style={{fontWeight:700}}>{s.brand}</span>
          </h1>
        </div>
      </div>
      <div style={{
        position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)',
        display:'flex', gap:8,
      }}>
        {slides.map((_,i)=>(
          <button key={i} onClick={()=>setIdx(i)} style={{
            width: i===idx ? 24 : 8, height:8, borderRadius:4,
            background: i===idx ? '#fff' : 'rgba(255,255,255,.5)',
            border:'none', cursor:'pointer', transition:'all .3s',
          }}/>
        ))}
      </div>
    </section>
  );
}

window.Banner = Banner;
