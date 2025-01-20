import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="container h-[calc(100vh-5rem)] pt-6 md:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
        {/* Text Content */}
        <div className="flex flex-col justify-start space-y-4 md:space-y-6 pt-4 md:pt-8">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            ALL YOUR GYM <br />
            <span className="text-primary">REQUIREMENTS AT</span><br />
            ONE PLACE
          </h1>
          <p className="text-base md:text-lg text-foreground/70 max-w-lg">
            Transform your fitness journey with our comprehensive platform. Get access to expert trainers,
            premium facilities, and a supportive community all in one place.
          </p>
          <div className="flex gap-4 pt-2">
            <Link 
              href="/get-app" 
              className="bg-primary text-background px-6 py-3 rounded-full hover:bg-opacity-90 transition-all inline-flex items-center gap-2 text-sm md:text-base"
            >
              Get the App <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative h-[280px] sm:h-[400px] md:h-[450px] lg:h-[550px] -mt-4 lg:mt-0">
          {/* Background glow effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-background rounded-full blur-2xl" />
          
          <Image
            src="/images/hero-image.png"
            alt="Fitness trainer"
            fill
            className="object-contain relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  )
}
