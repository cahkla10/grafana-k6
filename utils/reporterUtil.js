import { htmlReport, textSummary } from "./index.js";

export function handleSummary(data) {
  // Generate timestamp: YYYY-MM-DD_HH-MM-SS
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:]/g, '-').replace(/\..+/, '');

  return {
    [`report/report_${timestamp}.html`]: htmlReport(data),
    [`report/report_${timestamp}.txt`]: textSummary(data, { indent: ' ', enableColors: false }),
    [`report/report_${timestamp}.json`]: JSON.stringify(data),
  };
}