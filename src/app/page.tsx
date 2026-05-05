"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Code2, Heart, LayoutDashboard, Shield, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="mediumLarge"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Services", id: "features" },
        { name: "FAQ", id: "faq" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Gehwara Aman Trust"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      title="Gehwara Aman Welfare Trust: Safe Haven & Advanced Living"
      description="Empowering our community with a secure, technology-driven hostel experience supported by our 24/7 AI-driven assistance."
      testimonials={[
        { name: "Ahmed Raza", handle: "@ahmed", testimonial: "The AI support system here is incredible.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-woman-black-jacket-happy-short-haired-girl-dark-suit-widely-sincerely-smiles-isolated-background_197531-18508.jpg" },
        { name: "Fatima Z.", handle: "@fatima", testimonial: "Safe, secure, and always helpful.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/full-shot-men-balcony_23-2149085450.jpg" }
      ]}
      buttons={[{ text: "Contact Us", href: "#contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/white-facade-modern-building_181624-6180.jpg"
      marqueeItems={[
        { type: "text-icon", text: "24/7 AI Support", icon: Code2 },
        { type: "text-icon", text: "Secure Housing", icon: Shield },
        { type: "text-icon", text: "Community Centered", icon: Users },
        { type: "text-icon", text: "Advanced Management", icon: LayoutDashboard },
        { type: "text-icon", text: "Trusted Welfare", icon: Heart },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Commitment to Service"
      metrics={[
        { icon: Shield, label: "Security 24/7", value: "100%" },
        { icon: Code2, label: "AI Assistance", value: "Active" },
        { icon: Users, label: "Residents Served", value: "5000+" },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "AI Support Bot", description: "Our 24/7 virtual assistant manages all student queries instantly.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-using-cell-smartphone-happy-smiling-beautiful-girl-bed-bedroom-typing-mobile-smartphone_1153-5491.jpg" },
        { title: "Smart Security", description: "Biometric access and intelligent monitoring ensures resident safety.", imageSrc: "http://img.b2bpic.net/free-photo/extreme-close-up-computer-circuit-board_23-2147922289.jpg" },
        { title: "Digital Management", description: "Seamless check-in, maintenance requests, and event scheduling.", imageSrc: "http://img.b2bpic.net/free-photo/laptop-bed-with-pink-coffee-cup_23-2147962681.jpg" },
      ]}
      title="Innovative Hostel Technology"
      description="We blend welfare with modern technology to provide the best living environment."
    />
  </div>

  <div id="trust-metrics" data-section="trust-metrics">
      <MetricCardEleven
      useInvertedBackground={false}
      animationType="blur-reveal"
      title="AI-Enhanced Impact"
      description="Leveraging intelligent data to measure our dedication to community welfare."
      textboxLayout="split"
      metrics={[
        { id: "1", value: "98%", title: "Resident Satisfaction", description: "Optimized by AI feedback loops", imageSrc: "http://img.b2bpic.net/free-photo/modern-office-with-smart-technology_1150-13651.jpg" },
        { id: "2", value: "24/7", title: "Active Support", description: "Instant response systems", imageSrc: "http://img.b2bpic.net/free-photo/server-room-with-blue-lights_1150-48203.jpg" }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      title="Community Success Stories"
      description="Hear from our residents about the impact of our AI-supported facility."
      textboxLayout="split"
      testimonials={[
        { id: "t1", title: "Life-changing experience", quote: "The AI concierge system is always helpful and quick.", name: "Ahmed Raza", role: "Resident", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg" }
      ]}
      useInvertedBackground={false}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      useInvertedBackground={false}
      title="Frequently Asked Questions"
      description="Everything you need to know about our smart welfare system."
      faqs={[
        { id: "f1", title: "How do I interact with the AI assistant?", content: "Simply use our mobile dashboard or voice-activated units in common areas." },
        { id: "f2", title: "Is the data secure?", content: "Yes, our AI infrastructure is compliant with top-tier security standards." }
      ]}
      mediaPosition="right"
      mediaAnimation="slide-up"
      faqsAnimation="slide-up"
      textboxLayout="split"
      imageSrc="http://img.b2bpic.net/free-photo/guest-asking-girl-slope-direction_482257-76589.jpg?_wi=1"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect with us"
      description="Start your journey with us today."
      inputs={[
        { name: "name", type: "text", placeholder: "Full Name", required: true },
        { name: "email", type: "email", placeholder: "Email Address", required: true }
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/guest-asking-girl-slope-direction_482257-76589.jpg?_wi=2"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoText="Gehwara Aman Welfare Trust"
      columns={[
        { items: [{ label: "Home", href: "/" }, { label: "Features", href: "#features" }] },
        { items: [{ label: "Support", href: "#faq" }, { label: "Privacy" }] }
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}