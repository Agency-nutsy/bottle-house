import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

const PHONE = "+919911204431";
const PHONE_DISPLAY = "+91 99112 04431";
const ADDRESS = "4/5 Building no, Opposite Venkateshwara College, Satya Niketan, New Delhi-110021";
const MAPS_LINK = "https://www.google.com/maps/place/Bottle+House/data=!4m2!3m1!1s0x0:0xe5bc7e362b8e7562?sa=X&ved=1t:2428&ictx=111";

const Footer = () => (
  <footer className="bg-foreground text-background relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
    
    <div className="container py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl font-bold mb-4">
            <span className="text-primary">Bottle</span> House
          </h3>
          <p className="text-background/60 text-sm leading-relaxed mb-6">
            A vibrant, multicuisine cafe and bar in Satya Niketan known for epic platters, loaded pizzas, and weekend vibes.
          </p>
          <div className="flex gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Navigate</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-background/60 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Popular</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li>Spicy Chicken Pizza</li>
            <li>Cheesy Spring Rolls</li>
            <li>Signature Veg Platter</li>
            <li>Continental Dishes</li>
            <li>Craft Mocktails</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Contact</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-accent transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                {ADDRESS}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={16} className="shrink-0 text-primary" />
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-background/40">
          © {new Date().getFullYear()} Bottle House Cafe. All rights reserved.
        </p>
        <p className="text-xs text-background/40">
          Mon – Sun: 11:00 AM – 11:00 PM
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;