import Image from 'next/image'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="FitStart Logo"
      width={32}
      height={32}
      className={className}
      priority
    />
  )
}
