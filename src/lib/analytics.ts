export const analyticsEvents = ["page_view","view_service","view_product","start_quote_form","submit_quote_form","lead","whatsapp_click","phone_click","email_click","upload_project_photo","cta_click","calculator_start","calculator_complete"] as const;
export type AnalyticsEvent = typeof analyticsEvents[number];

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
  window.dispatchEvent(new CustomEvent("myl3d:analytics", { detail: { event, parameters } }));
}

export function trackLeadOnce(id: string) {
  const key = `myl3d-lead-${id}`;
  if (sessionStorage.getItem(key)) return;
  sessionStorage.setItem(key, "1");
  trackEvent("lead", { lead_id: id });
}
