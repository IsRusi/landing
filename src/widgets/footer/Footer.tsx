import { PhoneIcon, WhatsAppIcon, TelegramIcon } from '@/shared/config'
import { PHONE, PHONE_DISPLAY, WHATSAPP, TELEGRAM, CITY } from '@/shared/config/constants'
import { RequestForm } from '@/features/send-request/RequestForm'

export function Footer() {
  return (
    <>
      <footer className="bg-[#0D1117] text-white pt-16 pb-36 md:pb-16" id="contact">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="mb-2">
                <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Контакты</span>
              </div>
              <h2
                className="text-2xl md:text-3xl font-black mb-7"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Всегда на связи
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                <a href={`tel:${PHONE}`} className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#F97316]/15 flex items-center justify-center text-[#F97316] flex-shrink-0 group-hover:bg-[#F97316]/25 transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">Телефон</div>
                    <div
                      className="font-black text-xl text-white group-hover:text-[#F97316] transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {PHONE_DISPLAY}
                    </div>
                  </div>
                </a>

                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] flex-shrink-0 group-hover:bg-[#25D366]/25 transition-colors">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">WhatsApp</div>
                    <div className="font-semibold text-gray-200 group-hover:text-[#25D366] transition-colors">
                      {PHONE_DISPLAY}
                    </div>
                  </div>
                </a>

                <a href={TELEGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#229ED9]/15 flex items-center justify-center text-[#229ED9] flex-shrink-0 group-hover:bg-[#229ED9]/25 transition-colors">
                    <TelegramIcon />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">Telegram</div>
                    <div className="font-semibold text-gray-200 group-hover:text-[#229ED9] transition-colors">
                      @gruzchik_krd
                    </div>
                  </div>
                </a>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <div>
                  Режим работы: <span className="text-gray-400">ежедневно, 7:00 – 22:00</span>
                </div>
                <div>ИП Петров Александр Сергеевич</div>
                <div>ОГРНИП: 321234567890001</div>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]" style={{ fontFamily: 'var(--font-heading)' }}>Заявка</span>
              </div>
              <h2
                className="text-2xl md:text-3xl font-black mb-7"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Оставить заявку
              </h2>

              <RequestForm />
            </div>
          </div>

          <div className="border-t border-white/8 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-700 text-xs">
            <span>© 2024 ИП Петров Александр Сергеевич. Все права защищены.</span>
            <span>Грузоперевозки и вывоз мусора в {CITY}</span>
          </div>
        </div>
      </footer>

      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{ boxShadow: '0 -4px 20px rgba(0,0,0,0.25)' }}
      >
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#F97316] text-white font-black py-4 text-base transition-colors active:bg-[#EA580C]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <PhoneIcon size={20} />
          Позвонить
        </a>
        <div className="w-px bg-white/20" />
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 bg-[#111827] text-white font-black py-4 text-base transition-colors active:bg-[#1F2937]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <WhatsAppIcon size={20} />
          Написать
        </a>
      </div>

      <a
        href={`tel:${PHONE}`}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-5 py-3.5 rounded-full shadow-2xl shadow-orange-900/40 transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <PhoneIcon size={18} />
        Позвонить
      </a>
    </>
  )
}