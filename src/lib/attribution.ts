export type Attribution = { source?:string;medium?:string;campaign?:string;term?:string;content?:string;gclid?:string;landingPage:string;referrer:string };
const key="myl3d-attribution";
export function captureAttribution(): Attribution {
  const p=new URLSearchParams(location.search); const existing=sessionStorage.getItem(key);
  const previous:Partial<Attribution>=existing?JSON.parse(existing):{};
  const value:Attribution={source:p.get("utm_source")||previous.source,medium:p.get("utm_medium")||previous.medium,campaign:p.get("utm_campaign")||previous.campaign,term:p.get("utm_term")||previous.term,content:p.get("utm_content")||previous.content,gclid:p.get("gclid")||previous.gclid,landingPage:previous.landingPage||location.href,referrer:previous.referrer||document.referrer};
  sessionStorage.setItem(key,JSON.stringify(value)); return value;
}
