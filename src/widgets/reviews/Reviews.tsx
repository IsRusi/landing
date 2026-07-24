import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { REVIEWS } from '@/entities/service/model/data'

export function Reviews() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-20 overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <p className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">Отзывы</p>
        <h2 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
          Что говорят клиенты
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-12">

        <button
          onClick={scrollPrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl m-[-0.5em] bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all cursor-pointer"
          aria-label="Назад"
        >
          ←
        </button>


        <div ref={emblaRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
          <div className="flex gap-6 -ml-4 py-2">
            {REVIEWS.map((review, index) => (
              <div
                key={index}
                className="flex-[0_0_350px] md:flex-[0_0_340px] pl-4 min-w-0"
              >
                <div className="h-full bg-white border border-gray-200/85 hover:border-orange-500 rounded-2xl p-6 shadow-sm transition-all duration-300 flex flex-col justify-between aspect-square select-none">
                  <div>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-5">
                      {review.text}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm">
                    <span className="font-bold text-gray-900" style={{ fontFamily: 'var(--font-heading)' }}>
                      {review.name}
                    </span>
                    <span className="text-gray-400 text-xs">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-2xl m-[-0.5em] bg-white border border-gray-200 shadow-md items-center justify-center text-gray-700 hover:border-orange-500 hover:text-orange-500 transition-all cursor-pointer"
          aria-label="Вперед"
        >
          →
        </button>
      </div>
    </section>
  )
}