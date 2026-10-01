export const buildWhatsAppUrl = (phone, message='Hello, I would like to make an enquiry.') => {
  const clean = String(phone || '2348030000000').replace(/\D/g,'').replace(/^0/,'234');
  return `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
};
export default buildWhatsAppUrl;
