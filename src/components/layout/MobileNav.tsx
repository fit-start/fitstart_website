"use client"

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

interface MobileNavProps {
  links: Array<{
    href: string
    label: string
    isButton?: boolean
  }>
}

export function MobileNav({ links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      <div 
        className={`
          fixed inset-y-0 right-0 w-64 bg-background/95 backdrop-blur-sm transform 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          transition-transform duration-300 ease-in-out
          border-l border-primary/10
          shadow-xl
          z-50
        `}
      >
        <div className="flex flex-col p-6 space-y-6">
          {links.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={`
                ${link.isButton 
                  ? 'bg-primary text-background px-4 py-2 rounded-full hover:bg-opacity-90 text-center' 
                  : 'text-foreground hover:text-primary'
                }
                transition-colors
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
