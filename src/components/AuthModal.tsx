import { useState } from "react";
import { X, ArrowLeft } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (mobile: string) => void;
}

const AuthModal = ({ isOpen, onClose, onLogin }: AuthModalProps) => {
  const [showOTP, setShowOTP] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [generatedOTP, setGeneratedOTP] = useState('');

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOTP(newOTP);
    alert(`Demo: Your OTP is ${newOTP}\n(In production, this would be sent via SMS)`);
    setShowOTP(true);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredOTP = otp.join('');
    
    if (enteredOTP.length !== 6) {
      alert('Please enter the complete 6-digit OTP');
      return;
    }
    
    if (enteredOTP === generatedOTP) {
      onLogin(countryCode + mobileNumber);
      resetForm();
      onClose();
      alert('Welcome to Iyal! You are now logged in.');
    } else {
      alert('Invalid OTP. Please try again.');
      setOtp(['', '', '', '', '', '']);
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleOTPKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const resetForm = () => {
    setShowOTP(false);
    setMobileNumber('');
    setOtp(['', '', '', '', '', '']);
    setGeneratedOTP('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={handleClose}>
      <div className="bg-card rounded-3xl max-w-md w-full p-6 sm:p-8 relative" onClick={(e) => e.stopPropagation()}>
        <button onClick={handleClose} className="absolute top-4 right-4 text-foreground/70 hover:text-foreground">
          <X className="w-6 h-6" />
        </button>
        
        {!showOTP ? (
          <>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">Login / Signup</h2>
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Mobile Number</label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-background border border-border rounded-lg px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="Enter 10-digit mobile number"
                    className="flex-1 bg-background border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    maxLength={10}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Send OTP
              </button>
            </form>
          </>
        ) : (
          <>
            <button onClick={() => setShowOTP(false)} className="mb-4 flex items-center gap-2 text-foreground/70 hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back</span>
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">Verify OTP</h2>
            <p className="text-sm text-foreground/70 mb-6 text-center">Sent to {countryCode} {mobileNumber}</p>
            <form onSubmit={handleVerifyOTP} className="space-y-6">
              <div className="flex gap-2 justify-center">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    value={digit}
                    onChange={(e) => handleOTPChange(index, e.target.value)}
                    onKeyDown={(e) => handleOTPKeyDown(index, e)}
                    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl font-bold bg-background border-2 border-border rounded-lg focus:border-primary focus:outline-none"
                    maxLength={1}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#3C1810] to-[#8B4513] text-primary-foreground py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                Verify OTP
              </button>
              <button
                type="button"
                onClick={() => {
                  const newOTP = Math.floor(100000 + Math.random() * 900000).toString();
                  setGeneratedOTP(newOTP);
                  alert(`Demo: Your new OTP is ${newOTP}`);
                }}
                className="w-full text-primary hover:underline text-sm"
              >
                Resend OTP
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
