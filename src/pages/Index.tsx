import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Coffee, Pizza, Beer, Star, ArrowRight, Clock, MapPin, Phone, ChefHat } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// You will need to update these image imports with your actual assets
import heroSlide1 from "@/assets/hero 1.webp";
import heroSlide2 from "@/assets/hero 2.webp";
import heroSlide3 from "@/assets/hero 3.webp";
import heroSlide4 from "@/assets/hero 4.webp";
import pizzaImg from "@/assets/pizza.jpg"; // Placeholder
import springRollImg from "@/assets/rolls.jpg"; // Placeholder
import platterImg from "@/assets/platter.jpg"; // Placeholder
import drinkImg from "@/assets/mocktail.webp"; // Placeholder
import gallery1 from "@/assets/home 1.webp";
import gallery2 from "@/assets/home 2.webp";

// NAP Data fetched for Bottle House Cafe
const PHONE = "+919911204431"; 
const PHONE_DISPLAY = "+91 99112 04431"; 
const ADDRESS = "4/5 Building no, Opposite Venkateshwara College, Satya Niketan, New Delhi-110021";
const MAPS_LINK = "https://www.google.com/maps/place/Bottle+House/data=!4m2!3m1!1s0x0:0xe5bc7e362b8e7562?sa=X&ved=1t:2428&ictx=111"; 
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3968257177357!2d77.16752029999999!3d28.587869899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d2519b09785%3A0xe5bc7e362b8e7562!2sBottle%20House!5e0!3m2!1sen!2sin!4v1776113240775!5m2!1sen!2sin"; 

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

// Specialties tailored to Bottle House Cafe's actual menu
const specialties = [
  { name: "Spicy Chicken Pizza", desc: "Loaded with cheese, tender chicken, and fiery spices.", img: pizzaImg, price: "₹250", tag: "Bestseller" },
  { name: "Cheesy Spring Rolls", desc: "Crispy on the outside, melting cheese on the inside.", img: springRollImg, price: "₹180", tag: "Must Try" },
  { name: "Signature Veg Platter", desc: "A massive assortment of our best vegetarian starters.", img: platterImg, price: "₹350", tag: "Crowd Favorite" },
  { name: "Craft Mocktails & Drinks", desc: "Refreshing, aesthetic, and perfect for the weekend vibe.", img: drinkImg, price: "₹150", tag: "Perfect Pairing" },
];

// Based on reviews describing weekend vibes, good food, and great mood at Bottle House
const reviews = [
  { name: "Karan H.", text: "Best weekend vibes! Good food, good mood. The cheesy spring rolls are highly recommended.", rating: 5, avatar: "K" },
  { name: "Swiggy User", text: "Amazing spot in Satya Niketan. The spicy chicken pizza and continental dishes hit the spot perfectly.", rating: 4, avatar: "S" },
  { name: "Zomato User", text: "Great ambiance, budget-friendly eats, and super friendly staff. We keep coming back for the platters.", rating: 4, avatar: "Z" },
];

const stats = [
  { value: "4.2", label: "Google Rating" },
  { value: "100%", label: "Weekend Vibes" },
  { value: "Multi", label: "Cuisine Menu" },
  { value: "11am", label: "Opens Daily" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide}
            alt="Bottle House Cafe Ambiance"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay z-10" />

        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl z-10" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl z-10" />

        <div className="relative z-20 container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-accent" />
                Good Food, Good Mood
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bottle House
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/80 mb-2 font-display italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Weekend Vibes in Satya Niketan
            </motion.p>

            <motion.p
              className="text-primary-foreground/60 mb-10 text-lg max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Your perfect spot to chill. Multicuisine dishes, loaded pizzas, epic platters, and an unforgettable atmosphere.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Explore Menu
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why Us</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">The Bottle House Vibe</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ChefHat, title: "Multicuisine Masters", desc: "Chinese, Continental, Italian, and Mughlai. A huge variety so everyone finds exactly what they are craving." },
              { icon: Beer, title: "Weekend Vibes", desc: "An energetic, trendy atmosphere designed for catching up with friends, parties, and great memories." },
              { icon: Pizza, title: "Budget Eats", desc: "Big platters and loaded meals that don't break the bank. Top-tier taste at student-friendly prices." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <f.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Menu</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Signature Eats</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group card-hover">
                  <div className="relative overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{s.tag}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg">{s.name}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{s.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/menu" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                View Full Menu <ArrowRight size={18} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ambiance split */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={gallery1} alt="Bottle House Interior" className="rounded-2xl w-full h-80 object-cover shadow-xl" loading="lazy" />
                <img src={gallery2} alt="Cafe Food Platter" className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 object-cover rounded-2xl border-4 border-background shadow-lg" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="md:pl-4">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Space</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Your New Favorite<br />Spot to Hangout
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Located opposite Venkateshwara College in the vibrant heart of Satya Niketan, Bottle House is a haven designed for connection and great times. Whether you're dropping by for a massive food platter, catching up over drinks, or just looking for a lively backdrop with warm and friendly staff, you've found the perfect place.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Read Our Story <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">What Our Guests Say</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div className="absolute -top-3 left-8 text-6xl text-primary/10 font-display">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{r.avatar}</div>
                    <p className="font-semibold text-sm">{r.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Find Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-8">Visit Bottle House</h2>
                <div className="space-y-6">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <p className="text-sm text-muted-foreground">Monday – Sunday: 11:00 AM – 11:00 PM</p>
                    </div>
                  </div>
                  {PHONE && (
                    <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone size={22} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-80">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bottle House Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Craving the Perfect Vibe?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg max-w-lg mx-auto">
              Drop by for amazing multicuisine dishes, weekend energy, and great food right here in Satya Niketan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-background px-8 py-4 font-semibold hover:shadow-xl transition-all duration-300"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Explore Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;