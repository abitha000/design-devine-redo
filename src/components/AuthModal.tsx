import { SignIn } from "@clerk/clerk-react";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-card rounded-3xl max-w-md w-full p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/70 hover:text-foreground"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">
          Login / Signup
        </h2>

        {/* Clerk SignIn Component */}
        <SignIn
          path="/sign-in"
          routing="path"
          redirectUrl="/"
          appearance={{
            elements: {
              card: "bg-background border border-border rounded-lg p-4",
              formButtonPrimary: "bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300",
              formFieldInput: "bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
            },
          }}
        />
      </div>
    </div>
  );
};

export default AuthModal;
