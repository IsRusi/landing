import { PhoneIcon, WhatsAppIcon, TelegramIcon } from "@/shared/config";
import {
  PHONE,
  PHONE_DISPLAY,
  WHATSAPP,
  TELEGRAM,
  CITY,
  OWNER_NAME,
  IP_NUMBER,
  DATE,
} from "@/shared/config/constants";
import { ContactCardIcon } from "@/shared/config/icons/ContactCardIcon";

export function Footer() {
  return (
    <>
      <footer
        className="bg-[#0D1117] text-white pt-16 pb-36 md:pb-16"
        id="contact"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="mb-2" id='contacts'>
                <span
                  className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Контакты
                </span>
              </div>
              <h2
                className="text-2xl md:text-3xl font-black mb-7"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Всегда на связи
              </h2>

              <div className="flex flex-col gap-4 mb-8">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#F97316]/15 flex items-center justify-center text-[#F97316] flex-shrink-0 group-hover:bg-[#F97316]/25 transition-colors">
                    <PhoneIcon />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">Телефон</div>
                    <div
                      className="font-black text-xl text-white group-hover:text-[#F97316] transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {PHONE_DISPLAY}
                    </div>
                  </div>
                </a>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
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

                <a
                  href={TELEGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#229ED9]/15 flex items-center justify-center text-[#229ED9] flex-shrink-0 group-hover:bg-[#229ED9]/25 transition-colors">
                    <TelegramIcon />
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-0.5">Telegram</div>
                    <div className="font-semibold text-gray-200 group-hover:text-[#229ED9] transition-colors">
                      @test
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span
                  className="text-[#F97316] text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Юридическая информация
                </span>
              </div>

              <div className="text-sm text-gray-600 space-y-1">
                <div className="text-gray-400">{OWNER_NAME}</div>
                <div className="text-gray-400">УНП {IP_NUMBER}</div>
                <div>
                  <span className="text-gray-400">
                    Юр. Адрес: 246029, г. Гомель, ул.Григория Денисенко,
                    86,кв.112
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">
                    Свидетельство №0600042 от 13.06.2016
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">
                    Контактная почта: <strong>vozitsasha@gmail.com</strong>
                  </span>
                </div>
                <div className="text-gray-400">
                  Режим работы:{" "}
                  <span className="text-gray-500">ежедневно, 7:00 – 22:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/8 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-700 text-xs">
            <span>
              © {DATE} {OWNER_NAME}. Все права защищены.
            </span>
          </div>
        </div>
      </footer>

      <div
        className="md:hidden fixed bottom-0 right-0 z-50 w-14 h-14 m-4 flex rounded-full"
        style={{ boxShadow: "0 -4px 20px rgba(0,0,0,0.25)" }}
      >
        <a
          href={'#contacts'}
          className="flex-1 rounded-4xl flex items-center justify-center gap-2.5 bg-[#F97316] text-white font-black py-4 text-base transition-colors active:bg-[#EA580C]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <ContactCardIcon size={30} />
        </a>
      </div>

      <a
        href={'#contacts'}
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center gap-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-5 py-3.5 rounded-full shadow-2xl shadow-orange-900/40 transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        <ContactCardIcon size={18} />
        Контакты
      </a>
    </>
  );
}
