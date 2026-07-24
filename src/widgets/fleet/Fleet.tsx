import { FLEET } from '@/entities/service/model/data'

export function Fleet() {
  return (
    <section className="py-20 bg-white" id="fleet">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Автопарк</span>
          <h2
            className="text-3xl md:text-4xl font-black text-[#111827] mt-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Мой грузовик
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Работаю на собственном автомобиле - это значит, что вы платите только за перевозку.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FLEET.map(({ url, alt, label, spec }) => (
            <div
              key={label}
              className="group relative rounded-2xl overflow-hidden bg-gray-100"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src={url}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)' }}
              >
                <div
                  className="text-white font-bold text-base leading-tight"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {label}
                </div>
                <div className="text-[#F97316] text-sm font-semibold mt-0.5">{spec}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}