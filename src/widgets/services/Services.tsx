import { PhoneIcon } from '@/shared/config'
import { PHONE, CITY } from '@/shared/config/constants'
import { SERVICES } from '@/entities/service/model/data'

export function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Услуги</span>
          <h2
            className="text-3xl md:text-4xl font-black text-[#111827] mt-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Грузоперевозки по {CITY}у<br className="hidden md:block" /> и Краснодарскому краю
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon, photo, photoAlt, title, desc }) => (
            <div
              key={title}
              className="group bg-white hover:bg-[#111827] border border-gray-200 hover:border-[#111827] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-sm hover:shadow-2xl"
            >
              {photo ? (
                <div className="h-36 flex-shrink-0 bg-gray-100 overflow-hidden">
                  <img
                    src={photo}
                    alt={photoAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="px-6 pt-6 pb-1 flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#FFF7ED] group-hover:bg-[#F97316]/15 flex items-center justify-center text-[#F97316] transition-colors duration-300">
                    {icon}
                  </div>
                </div>
              )}

              <div className={`flex flex-col gap-3 flex-1 px-6 pb-6 ${photo ? 'pt-5' : 'pt-3'}`}>
                <h3
                  className="font-bold text-lg text-[#111827] group-hover:text-white leading-tight transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors duration-300 flex-1">
                  {desc}
                </p>
                <a
                  href={`tel:${PHONE}`}
                  className="mt-2 flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-full text-sm transition-all duration-200 active:scale-95 group-hover:shadow-lg group-hover:shadow-orange-900/30"
                  style={{ fontFamily: 'var(--font-heading)', minHeight: 44, paddingLeft: 20, paddingRight: 20 }}
                >
                  <PhoneIcon size={15} />
                  Узнать цену
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}