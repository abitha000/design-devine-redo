import { X, Package, User, MapPin } from "lucide-react";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  userMobile: string;
}

const AccountModal = ({ isOpen, onClose, userName, userMobile }: AccountModalProps) => {
  const handleOrderHistory = () => {
    alert('📦 Order History\n\nYour recent orders:\n\n• Premium Hair Oil - ₹299 (Delivered)\n• Natural Face Pack - ₹199 (In Transit)\n• Wellness Health Mix - ₹399 (Processing)\n\nTotal Orders: 3\nTotal Spent: ₹897');
  };

  const handleProfileSettings = () => {
    const newName = prompt('Enter your name:', userName);
    if (newName) {
      alert('✅ Profile updated successfully!');
    }
  };

  const handleAddressBook = () => {
    alert('📍 Address Book\n\nSaved Addresses:\n\n🏠 Home\n123 Main Street\nMumbai, Maharashtra 400001\n\n🏢 Office\n456 Business Park\nMumbai, Maharashtra 400002\n\nClick "Add New Address" to add more addresses.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card rounded-3xl max-w-md w-full p-6 sm:p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-foreground/70 hover:text-foreground">
          <X className="w-6 h-6" />
        </button>
        
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">My Account</h2>
        
        <div className="bg-gradient-to-r from-[#3C1810] to-[#8B4513] rounded-2xl p-6 mb-6 text-center">
          <div className="w-20 h-20 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-primary-foreground mb-1">{userName}</h3>
          <p className="text-sm text-primary-foreground/80">{userMobile}</p>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={handleOrderHistory}
            className="w-full flex items-center gap-3 p-4 bg-background hover:bg-secondary rounded-lg transition-colors"
          >
            <Package className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Order History</span>
          </button>
          
          <button
            onClick={handleProfileSettings}
            className="w-full flex items-center gap-3 p-4 bg-background hover:bg-secondary rounded-lg transition-colors"
          >
            <User className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Profile Settings</span>
          </button>
          
          <button
            onClick={handleAddressBook}
            className="w-full flex items-center gap-3 p-4 bg-background hover:bg-secondary rounded-lg transition-colors"
          >
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Address Book</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
