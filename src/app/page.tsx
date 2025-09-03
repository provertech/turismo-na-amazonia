import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import TourCatalog from '@/components/sections/TourCatalog'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import SocialProof from '@/components/sections/SocialProof'
import GalleryStrip from '@/components/sections/GalleryStrip'
import Faq from '@/components/sections/Faq'
import FinalCta from '@/components/sections/FinalCta'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <TourCatalog />
        <GalleryStrip />
        <WhyChooseUs />
        <SocialProof />
        <Faq />
        <FinalCta />
        <Footer />
      </main>
    </>
  )
}
