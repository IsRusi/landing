import { WHY } from '@/entities/service/model/data'

export function WhyMe() {
  return (
    <section className="py-20 bg-[#F9FAFB]" id="why">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Почему выбирают меня</span>
            <h2
              className="text-3xl md:text-4xl font-black text-[#111827] mt-2 mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Один человек.<br />Полная ответственность.
            </h2>
            <div className="flex flex-col gap-6">
              {WHY.map(({ icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#F97316]">
                    {icon}
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[#111827] mb-1 leading-tight"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden bg-gray-200"
              style={{
                aspectRatio: '4/5',
                backgroundImage: `url('https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=800&h=1000&fit=crop&auto=format')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label="Грузовой автомобиль"
            />
            <div className="absolute -bottom-5 -left-5 bg-[#F97316] text-white rounded-2xl px-6 py-5 shadow-2xl shadow-orange-900/30">
              <div
                className="text-4xl font-black leading-none mb-1"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                10 лет
              </div>
              <div className="text-sm font-medium opacity-90">работы в Гомеле</div>
            </div>
            <div className="absolute -top-5 -right-5 hidden md:block w-24 h-24 rounded-2xl border-4 border-[#F97316]/20" />
          </div>
        </div>
      </div>
    </section>
  )
}