import { X } from "lucide-react";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

const policyData = {
  terms: {
    title: 'Terms & Conditions',
    content: `
      <p class="font-bold mb-2">Electronic Record - Information Technology Act, 2000</p>
      <p class="mb-3 text-sm">Published per Rule 3(1) of IT (Intermediaries guidelines) Rules, 2011</p>
      <p class="font-bold mb-1">Platform Owner: Iyalhealthcare</p>
      <p class="text-xs mb-3">Registered Office: 54g, 4th cross street, marakkanam road, anna nagar, tindivanam, India</p>
      <p class="font-bold mb-2">KEY TERMS:</p>
      <ol class="list-decimal pl-5 space-y-2 text-sm">
        <li>Provide true, accurate information. Responsible for all account activities.</li>
        <li>No warranty on information offered.</li>
        <li>Use entirely at your own risk.</li>
        <li>Contents are proprietary.</li>
        <li>Unauthorized use leads to legal action.</li>
        <li>Agree to pay for services.</li>
        <li>Don't use for unlawful purposes.</li>
        <li>Enter legally binding contract upon transaction.</li>
        <li>Governed by laws of India.</li>
        <li>Disputes subject to courts in Tindivanam and Tamil Nadu.</li>
      </ol>
    `
  },
  privacy: {
    title: 'Privacy Policy',
    content: `
      <p class="font-bold mb-1">Data Collection</p>
      <p class="text-sm mb-3">We collect: name, email, phone, address, payment info, transaction data.</p>
      <p class="font-bold mb-1">Usage</p>
      <p class="text-sm mb-3">Provide services, enhance experience, prevent fraud, send updates.</p>
      <p class="font-bold mb-1">Sharing</p>
      <p class="text-sm mb-3">With trusted partners for order fulfillment.</p>
      <p class="font-bold mb-1">Security</p>
      <p class="text-sm mb-3">Reasonable security practices implemented.</p>
      <p class="font-bold mb-1">Your Rights</p>
      <p class="text-sm">Access, update, delete personal data anytime.</p>
    `
  },
  refund: {
    title: 'Refund & Cancellation Policy',
    content: `
      <p class="font-bold text-sm mb-1">Cancellation</p>
      <p class="text-sm mb-3">Within 5 days of order. Not after shipping initiated.</p>
      <p class="font-bold text-sm mb-1">Damaged/Defective</p>
      <p class="text-sm mb-3">Report within 5 days for refund/replacement.</p>
      <p class="font-bold text-sm mb-1">Perishable Items</p>
      <p class="text-sm mb-3">No cancellation. Refund only if quality poor.</p>
      <p class="font-bold text-sm mb-1">Refund Timeline</p>
      <p class="text-sm mb-3">Approved refunds within 3 days.</p>
      <p class="font-bold text-sm mb-1">Returns</p>
      <p class="text-sm">5-day window. Must be unused with original packaging.</p>
    `
  },
  shipping: {
    title: 'Shipping Policy',
    content: `
      <p class="font-bold text-sm mb-1">Shipping</p>
      <p class="text-sm mb-3">Via registered courier and speed post only.</p>
      <p class="font-bold text-sm mb-1">Timeline</p>
      <p class="text-sm mb-3">Orders ship within 3 days from order/payment date.</p>
      <p class="font-bold text-sm mb-1">Delivery</p>
      <p class="text-sm mb-3">To address provided at purchase. Email confirmation sent.</p>
      <p class="font-bold text-sm mb-1">Shipping Costs</p>
      <p class="text-sm mb-3">Non-refundable.</p>
      <p class="font-bold text-sm mb-1">Liability</p>
      <p class="text-sm">Not liable for courier delays.</p>
    `
  }
};

const PolicyModal = ({ isOpen, onClose, type }: PolicyModalProps) => {
  if (!isOpen) return null;

  const policy = policyData[type as keyof typeof policyData];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 sm:p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">{policy?.title}</h2>
          <button onClick={onClose} className="text-foreground/70 hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div 
            className="text-foreground/80 prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: policy?.content || '' }}
          />
        </div>
        
        <div className="p-4 sm:p-6 border-t border-border">
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;
