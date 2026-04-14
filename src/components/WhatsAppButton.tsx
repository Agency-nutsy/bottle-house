import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import whatsappLogo from "@/assets/whatsapp-logo.jpeg";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
    {/* Get Directions Button */}
    <motion.a
      href="https://www.google.com/maps/place/Bottle+House/data=!4m2!3m1!1s0x0:0xe5bc7e362b8e7562?sa=X&ved=1t:2428&ictx=111"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get Directions"
      className="rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow flex items-center justify-center bg-blue-600 text-white w-14 h-14 sm:w-16 sm:h-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MapPin size={28} />
    </motion.a>

    {/* WhatsApp Button */}
    <motion.a
      href="https://wa.me/919911204431"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Us"
      className="rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow overflow-hidden w-14 h-14 sm:w-16 sm:h-16"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-cover rounded-full" />
    </motion.a>
  </div>
);

export default FloatingButtons;