import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8">Get In Touch</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-sm sm:text-base text-foreground/70">info@iyal.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-sm sm:text-base text-foreground/70">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-sm sm:text-base text-foreground/70">54g, 4th Cross Street, Anna Nagar, Tindivanam</p>
              </div>
            </div>
          </div>
          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">Business Hours</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm sm:text-base text-foreground/70">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-sm sm:text-base text-foreground/70">Saturday: 10AM - 4PM</p>
                  <p className="text-sm sm:text-base text-foreground/70">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
