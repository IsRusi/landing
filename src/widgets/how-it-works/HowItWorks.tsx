import { PhoneIcon } from '@/shared/config'
import { PHONE } from '@/shared/config/constants'
import { STEPS } from '@/entities/service/model/data'

export function HowItWorks() {
  return (
    <section className="py-20 bg-[#111827]" id="how">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Как это работает</span>
          <h2
            className="text-3xl md:text-4xl font-black text-white mt-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Заказ за 4 простых шага
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map(({ num, title, desc }, i) => (
            <div key={num} className="relative">
              {i < 3 && (
                <div className="hidden lg:block absolute top-9 left-[calc(100%-8px)] w-8 h-px bg-[#F97316]/25 z-10" />
              )}
              <div className="bg-white/5 hover:bg-white/8 border border-white/8 hover:border-[#F97316]/30 rounded-2xl p-6 transition-all duration-200 h-full">
                <div
                  className="text-[#F97316] text-5xl font-black leading-none mb-5"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {num}
                </div>
                <h3
                  className="text-white font-bold text-base mb-2 leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-orange-900/30"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <PhoneIcon size={22} />
            Начать - позвонить сейчас
          </a>
        </div>
      </div>
    </section>
  )
}