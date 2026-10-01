export const formatCurrency = (value, compact=false) => {
  const n = Number(value || 0);
  if (compact && n >= 1e6) return `₦${(n/1e6).toFixed(n % 1e6 ? 1 : 0)}M`;
  if (compact && n >= 1e3) return `₦${(n/1e3).toFixed(0)}K`;
  return new Intl.NumberFormat('en-NG', { style:'currency', currency:'NGN', maximumFractionDigits:0 }).format(n);
};
export default formatCurrency;
