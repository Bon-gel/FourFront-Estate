import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../../utils/buildWhatsAppUrl';
export default function WhatsAppInquireButton({property}){return <a target="_blank" rel="noreferrer" href={buildWhatsAppUrl('+2348030000000',`Hello FourFront Estate, I am interested in ${property?.title||'a property'}. Please provide more details.`)} className="btn-whatsapp"><MessageCircle size={18}/> WhatsApp enquiry</a>}
