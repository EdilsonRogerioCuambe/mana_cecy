import { AboutSection } from "@/components/about-section"
import { AnimatedSection } from "@/components/animated-section"
import { ContactSection } from "@/components/contact-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { GallerySection } from "@/components/gallery-section"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WhatsappButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main>
      <Navigation />

      <HeroSection />

      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection>
        <ServicesSection />
      </AnimatedSection>

      <AnimatedSection>
        <GallerySection />
      </AnimatedSection>

      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      <AnimatedSection>
        <CtaSection />
      </AnimatedSection>

      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>

      <Footer />

      <WhatsappButton />
    </main>
  )
}
