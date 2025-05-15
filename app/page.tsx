import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { EnhancedVotingSection } from "@/components/enhanced-voting-section"
import { HowItWorks } from "@/components/how-it-works"
import { RewardsSection } from "@/components/rewards-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 page-transition">
        <HeroSection />
        <EnhancedVotingSection />
        <FeaturesSection />
        <HowItWorks />
        <RewardsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
