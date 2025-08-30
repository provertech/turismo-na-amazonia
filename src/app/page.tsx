import Header from '@/components/layout/Header'
import HeroSection from '@/components/sections/HeroSection'
import FeaturedActivities from '@/components/sections/FeaturedActivities'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedActivities />
        <WhyChooseUs />
        <Footer />
      </main>
    </>
  )
}
