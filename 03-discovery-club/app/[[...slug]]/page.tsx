import Website from '../website';
import {nav,routes,settings} from '../content';
type Props={params:Promise<{slug?:string[]}>,searchParams:Promise<{lang?:string}>};
export async function generateMetadata({params,searchParams}:Props){const p=await params;const q=await searchParams;const ar=q.lang==='ar';const i=routes.indexOf(p.slug?.join('/')||'');return {title:`${nav[i]?.[ar?1:0]||'Page not found'} | ${settings.name[ar?1:0]}`,description:ar?'تعرّفوا على برامج الروضة والرعاية اليومية والقبول وطلب زيارة. بيانات الروضة في انتظار التأكيد.':'Explore kindergarten learning, everyday care, admissions and visit requests. School details awaiting confirmation.'};}
export default async function Page({params,searchParams}:Props){const p=await params;const q=await searchParams;return <Website initialPage={p.slug?.join('/')||''} initialAr={q.lang==='ar'}/>}
