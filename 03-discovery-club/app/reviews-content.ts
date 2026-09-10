// Set preview=false before public launch. Add only consented, genuine feedback.
export type ParentReview = { id:string; approved:boolean; name:string; quote:{en:string;ar:string}; detail?:{en:string;ar:string}; date?:string; sourceLabel?:string; sourceUrl?:string; photo?:string; rating?:number };
export const reviewSettings = {
 preview: true,
 google: { verified:false, rating:null as number|null, count:null as number|null, profileUrl:'', checkedOn:'' },
 testimonials: [] as ParentReview[],
};
