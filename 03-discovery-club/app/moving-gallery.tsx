'use client';
import {useEffect,useRef,useState} from 'react';
import {Pause,Play,ArrowUpRight} from 'lucide-react';
export const galleryImages=[
 {src:'/images/creative.jpg',en:'Little hands, big ideas',ar:'أيدٍ صغيرة وأفكار كبيرة'},
 {src:'/images/play.webp',en:'Learning together',ar:'نتعلّم معاً'},
 {src:'/images/classroom.jpg',en:'Spaces to explore',ar:'مساحات للاكتشاف'},
 {src:'/images/outdoor.webp',en:'Out into the world',ar:'نكتشف العالم'},
 {src:'/images/books.webp',en:'One more story',ar:'حكاية أخرى'},
 {src:'/images/art.webp',en:'A splash of imagination',ar:'لمسة من الخيال'}
];
export default function MovingGallery({ar}:{ar:boolean}){
 const section=useRef<HTMLElement>(null);const [paused,setPaused]=useState(false),[inView,setInView]=useState(false),[visible,setVisible]=useState(true),[reduced,setReduced]=useState(false);
 useEffect(()=>{const media=matchMedia('(prefers-reduced-motion: reduce)');const motion=()=>setReduced(media.matches);motion();media.addEventListener('change',motion);const visibility=()=>setVisible(!document.hidden);document.addEventListener('visibilitychange',visibility);visibility();const observer=new IntersectionObserver(([entry])=>setInView(entry.isIntersecting),{rootMargin:'80px'});if(section.current)observer.observe(section.current);return()=>{observer.disconnect();media.removeEventListener('change',motion);document.removeEventListener('visibilitychange',visibility)}},[]);
 const run=!paused&&inView&&visible&&!reduced;
 return <section ref={section} className="moving-gallery" aria-label={ar?'لحظات من الطفولة':'Moments of childhood'} data-running={run}>
 <div className="wrap gallery-heading"><div><div className="eyebrow">{ar?'الطفولة، بكل ألوانها':'CHILDHOOD, IN FULL COLOUR'}</div><h2>{ar?'أيام صغيرة. ذكريات كبيرة.':'Little days. Lasting memories.'}</h2><p>{ar?'صور توضيحية من مكتبة صور، وليست للروضة الفعلية.':'Illustrative stock photography, not the actual kindergarten.'}</p></div><button className="pause-button" onClick={()=>setPaused(!paused)} aria-pressed={paused} disabled={reduced}>{paused||reduced?<Play size={18}/>:<Pause size={18}/>} {reduced?(ar?'الحركة متوقفة':'Motion off'):paused?(ar?'تشغيل الصور':'Play photos'):(ar?'إيقاف الحركة':'Pause photos')}</button></div>
 {[galleryImages,[...galleryImages.slice(3),...galleryImages.slice(0,3)]].map((row,i)=><div className={'photo-lane lane-'+i} key={i}><div className="photo-track">{[0,1].map(copy=><div className={'photo-group '+(copy?'duplicate':'')} aria-hidden={copy===1?true:undefined} key={copy}>{row.map((im,n)=><figure key={im.src} className={'moment moment-'+((n+i)%3)}><img src={im.src} alt={copy?'':ar?im.ar:im.en} width={640} height={480} loading="lazy" decoding="async"/><figcaption>{ar?im.ar:im.en}</figcaption></figure>)}</div>)}</div></div>)}
 <div className="gallery-bottom"><a className="inline-link" href={'/gallery'+(ar?'?lang=ar':'')}>{ar?'اكتشف يوماً في الروضة':'A closer look at their day'}<ArrowUpRight size={18}/></a></div>
 </section>
}
