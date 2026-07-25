import { useState, useEffect } from 'react'
import { PhoneIcon } from '@/shared/config'
import { PHONE, PHONE_DISPLAY, CITY } from '@/shared/config/constants'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: '#111827',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex flex-col leading-tight min-w-0">
          <span className="text-white font-black text-base md:text-lg truncate" style={{ fontFamily: 'var(--font-heading)' }}>
            Возит Саша
          </span>
          <span className="text-[#F97316] text-xs font-medium hidden md:block whitespace-nowrap">
            Вывоз мусора и грузоперевозки · {CITY[0]}
          </span>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={`tel:${PHONE}`}
            className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white font-semibold text-sm transition-colors"
          >
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-4 py-2 rounded-lg text-sm transition-all duration-200 active:scale-95"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <PhoneIcon size={16} />
            <span>Позвонить</span>
          </a>
        </div>
      </div>
    </header>
  )
}