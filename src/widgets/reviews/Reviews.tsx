import { StarIcon } from '@/shared/config'
import { REVIEWS } from '@/entities/service/model/data'

export function Reviews() {
  return (
    <section className="py-20 bg-[#F9FAFB]" id="reviews">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Отзывы</span>
          <h2
            className="text-3xl md:text-4xl font-black text-[#111827] mt-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(({ name, date, text }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span
                  className="font-bold text-[#111827] text-sm"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {name}
                </span>
                <span className="text-gray-400 text-xs">{date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}