import { X, Plus, Minus, Trash2 } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, change: number) => void;
  onRemove: (productId: string) => void;
  onCheckout: () => void;
}

const CartModal = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove, onCheckout }: CartModalProps) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-card rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 sm:p-6 border-b border-border flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Shopping Cart</h2>
          <button onClick={onClose} className="text-foreground/70 hover:text-foreground">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/70">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-background rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.name}</h4>
                    <p className="text-foreground/70 text-sm">₹{item.price} x {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="bg-secondary text-foreground w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-semibold text-foreground w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="bg-secondary text-foreground w-8 h-8 rounded-full hover:bg-accent flex items-center justify-center"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-destructive hover:text-destructive/80 ml-2"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-6 border-t border-border space-y-4">
            <div className="flex justify-between items-center text-lg sm:text-xl font-bold">
              <span className="text-foreground">Total:</span>
              <span className="text-foreground">₹{total}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
