import { PhoneIcon, CheckIcon, TelegramIcon } from "@/shared/config";
import { PHONE, CITY, TELEGRAM } from "@/shared/config/constants";
import carImg from "@/assets/car.png";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: 64 }}
    >
      <div
        className="absolute inset-0 bg-gray-900"
        style={{
          backgroundImage: `url(${carImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center 55%",
        }}
        role="img"
        aria-label="Грузовой автомобиль на дороге"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(17,24,39,0.96) 0%, rgba(17,24,39,0.80) 50%, rgba(17,24,39,0.40) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-36 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#F97316]/15 border border-[#F97316]/35 rounded-full px-4 py-1.5 mb-7">
            <div
              className="w-2 h-2 rounded-full bg-[#F97316]"
              style={{ animation: "pulse 2s infinite" }}
            />
            <span className="text-[#F97316] text-sm font-semibold">
              Работаю сам - без диспетчеров и наценок
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Вывоз мусора
            <br />
            и грузоперевозки
            <br />
            <span className="text-[#F97316]">в {CITY[2]}</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-9 max-w-xl">
            Выезд от 1 часа. Свой грузовик. Оплата после работы.
            <br className="hidden md:block" />
            Вы всегда знаете, кто приедет и сколько это стоит.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center justify-center gap-3 bg-[#F97316] hover:bg-[#EA580C] text-white font-black px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-orange-900/40"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <PhoneIcon size={22} />
              Заказать звонок
            </a>
            <a
              href={TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/18 border border-white/25 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 backdrop-blur-sm"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <TelegramIcon size={22} />
              Написать в Telegram
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-gray-300 text-sm">
            {[
              "Выезд от 1 часа",
              "Свой транспорт",
              `10 лет в ${CITY[2]}`,
              "Оплата после работы",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2">
                <CheckIcon />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
