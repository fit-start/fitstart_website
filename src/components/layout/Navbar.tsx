"use client"

import Link from 'next/link'
import { MobileNav } from './MobileNav'
import { Logo } from '@/components/icons'
import { useState, useEffect } from 'react'

const navigationLinks = [
  { href: '/trainer', label: 'Trainer' },
  { href: '/fitness-center', label: 'Fitness center' },
  { href: '/about-us', label: 'About Us' },
  { href: '/get-app', label: 'Get App', isButton: true },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`
      sticky top-0 z-50
      ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-background'}
      transition-all duration-200
    `}>
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">FitStart</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                ${link.isButton 
                  ? 'bg-primary text-background px-4 py-2 rounded-full hover:bg-opacity-90' 
                  : 'text-foreground hover:text-primary'
                }
                transition-colors
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <MobileNav links={navigationLinks} />
      </div>
    </nav>
  )
}
