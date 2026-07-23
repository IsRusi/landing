import { Header } from '@/widgets'
import { Hero } from '@/widgets'
import { Services } from '@/widgets'
import { WhyMe } from '@/widgets'
import { HowItWorks } from '@/widgets'
import { Fleet } from '@/widgets'
import { Reviews } from '@/widgets'
import { Coverage } from '@/widgets'
import { Footer } from '@/widgets'

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <WhyMe />
      <HowItWorks />
      <Fleet />
      <Reviews />
      <Coverage />
      <Footer />
    </div>
  )
}