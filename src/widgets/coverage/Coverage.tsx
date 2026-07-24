import { PhoneIcon } from '@/shared/config'
import { PHONE, CITY } from '@/shared/config/constants'
import { CITIES } from '@/entities/service/model/data'

export function Coverage() {
  return (
    <section className="py-20 bg-[#111827]" id="coverage">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Зона работы</span>
        <h2
          className="text-3xl md:text-4xl font-black text-white mt-2 mb-4"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Работаю по областям Беларуси<br />
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">
          Выезжаю в любой район города, а также в соседние города и населённые пункты.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {CITIES.map(city => (
            <span
              key={city}
              className="bg-white/8 hover:bg-white/12 border border-white/10 text-gray-300 rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-default"
            >
              {city}
            </span>
          ))}
        </div>

        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-[1.02] shadow-xl shadow-orange-900/30"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <PhoneIcon size={22} />
          Уточнить по вашему маршруту
        </a>
      </div>
    </section>
  )
}