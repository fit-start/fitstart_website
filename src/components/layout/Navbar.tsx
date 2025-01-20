import Link from 'next/link'
import { Dumbbell } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="container flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Dumbbell className="h-8 w-8 text-primary" />
        <span className="text-xl font-bold text-foreground">FitStart</span>
      </div>
      <div className="flex items-center gap-8">
        <Link href="/trainer" className="text-foreground hover:text-primary transition-colors">
          Trainer
        </Link>
        <Link href="/fitness-center" className="text-foreground hover:text-primary transition-colors">
          Fitness center
        </Link>
        <Link href="/about-us" className="text-foreground hover:text-primary transition-colors">
          About Us
        </Link>
        <Link 
          href="/get-app" 
          className="bg-primary text-background px-4 py-2 rounded-full hover:bg-opacity-90 transition-all"
        >
          Get App
        </Link>
      </div>
    </nav>
  )
}
