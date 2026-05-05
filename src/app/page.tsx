"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
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
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "FAQ",
          id: "faq",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Gehwara Aman Trust"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      title="Gehwara Aman Welfare Trust: Safe Haven & Advanced Living"
      description="Empowering our community with a secure, technology-driven hostel experience supported by our 24/7 AI-driven assistance."
      testimonials={[
        {
          name: "Ahmed Raza",
          handle: "@ahmed",
          testimonial: "The AI support system here is incredible. It makes my life so much easier.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-woman-black-jacket-happy-short-haired-girl-dark-suit-widely-sincerely-smiles-isolated-background_197531-18508.jpg",
        },
        {
          name: "Fatima Z.",
          handle: "@fatima",
          testimonial: "Safe, secure, and always helpful. Highly recommend this trust.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-men-balcony_23-2149085450.jpg",
        },
        {
          name: "Siddiq Khan",
          handle: "@siddiq",
          testimonial: "Excellent facilities and responsive AI assistants.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/elderly-man_23-2148138573.jpg",
        },
        {
          name: "Zara Ali",
          handle: "@zara",
          testimonial: "I feel at home here. The technology is very impressive.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/sudio-shot-surprised-handsome-male-student-with-mustache-wears-round-glasses-formal-clothes_273609-8675.jpg",
        },
        {
          name: "Hamza M.",
          handle: "@hamza",
          testimonial: "Professional services and very quick support.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-with-curly-hair-posing-with-copy-space_23-2148728583.jpg",
        },
      ]}
      buttons={[
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/white-facade-modern-building_181624-6180.jpg"
      imageAlt="Hostel Facility Exterior"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/african-american-man-wearing-round-glasses_273609-10062.jpg",
          alt: "Portrait of African-American man",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-business-woman-suit_23-2148603018.jpg",
          alt: "Business woman in suit",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-businessman-smiling-camera_1163-4660.jpg",
          alt: "Happy businessman smiling",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg",
          alt: "Young bearded man smiling",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-blonde-hair-smiling-warmly-minimalist-portrait_24972-2971.jpg",
          alt: "Woman with blonde hair",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "24/7 AI Support",
          icon: Code2,
        },
        {
          type: "text-icon",
          text: "Secure Housing",
          icon: Shield,
        },
        {
          type: "text-icon",
          text: "Community Centered",
          icon: Users,
        },
        {
          type: "text-icon",
          text: "Advanced Management",
          icon: LayoutDashboard,
        },
        {
          type: "text-icon",
          text: "Trusted Welfare",
          icon: Heart,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Commitment to Service"
      metrics={[
        {
          icon: Shield,
          label: "Security 24/7",
          value: "100%",
        },
        {
          icon: Code2,
          label: "AI Assistance",
          value: "Active",
        },
        {
          icon: Users,
          label: "Residents Served",
          value: "5000+",
        },
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
        {
          title: "AI Support Bot",
          description: "Our 24/7 virtual assistant manages all student queries instantly.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-using-cell-smartphone-happy-smiling-beautiful-girl-bed-bedroom-typing-mobile-smartphone_1153-5491.jpg",
        },
        {
          title: "Smart Security",
          description: "Biometric access and intelligent monitoring ensures resident safety.",
          imageSrc: "http://img.b2bpic.net/free-photo/extreme-close-up-computer-circuit-board_23-2147922289.jpg",
        },
        {
          title: "Digital Management",
          description: "Seamless check-in, maintenance requests, and event scheduling.",
          imageSrc: "http://img.b2bpic.net/free-photo/laptop-bed-with-pink-coffee-cup_23-2147962681.jpg",
        },
      ]}
      title="Innovative Hostel Technology"
      description="We blend welfare with modern technology to provide the best living environment."
    />
  </div>

  <div id="trust-metrics" data-section="trust-metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "20+",
          title: "Facilities",
          items: [
            "Well maintained rooms",
            "Modern kitchens",
            "Library spaces",
          ],
        },
        {
          id: "m2",
          value: "15k+",
          title: "Meals Provided",
          items: [
            "Nutritious diet",
            "Fresh ingredients",
            "Dietary adjustments",
          ],
        },
        {
          id: "m3",
          value: "50+",
          title: "Events Hosted",
          items: [
            "Educational workshops",
            "Community meetings",
            "Skill training",
          ],
        },
      ]}
      title="Proven Impact"
      description="Measuring our dedication to welfare through measurable statistics."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="one-large-right-three-stacked-left"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ahmed Raza",
          role: "Student",
          company: "University",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiley-modern-male_23-2148514900.jpg",
        },
        {
          id: "t2",
          name: "Fatima Z.",
          role: "Resident",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
        },
        {
          id: "t3",
          name: "Siddiq Khan",
          role: "Worker",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-senior-man-looking-camera_23-2148036714.jpg",
        },
        {
          id: "t4",
          name: "Zara Ali",
          role: "Student",
          company: "University",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-cool-teenage-girl-with-no-make-up-pinkish-bob-hairdo-ring-her-nose-posing-indoors_343059-124.jpg",
        },
        {
          id: "t5",
          name: "Hamza M.",
          role: "Resident",
          company: "Local",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-executive-formal-wear-catching-taxi-street_23-2147972859.jpg",
        },
      ]}
      title="Community Voices"
      description="Hear from those who call our hostel their second home."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How to register?",
          content: "You can register through our AI-integrated website form.",
        },
        {
          id: "f2",
          title: "Is the trust active 24/7?",
          content: "Yes, our welfare operations and AI support run 24/7.",
        },
        {
          id: "f3",
          title: "Can I volunteer?",
          content: "Absolutely! Reach out to us through the contact page.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Common questions about our welfare hostel and trust."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get In Touch"
      description="Have questions about our facility or wish to contribute to the cause?"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we assist you today?",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/guest-asking-girl-slope-direction_482257-76589.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Gehwara Aman Well Fare Trust"
      copyrightText="© 2025 Gehwara Aman Well Fare Trust. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
