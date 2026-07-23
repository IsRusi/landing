import { useState } from 'react'

export function RequestForm() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e: { name?: string; contact?: string } = {}
    if (!form.name.trim()) e.name = 'Введите ваше имя'
    if (!form.contact.trim()) e.contact = 'Введите телефон или email'
    return e
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-[#F97316]/10 border border-[#F97316]/30 rounded-2xl p-10 text-center">
        <div className="text-6xl font-black text-[#F97316] mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
          ✓
        </div>
        <div className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
          Заявка отправлена!
        </div>
        <div className="text-gray-400 text-sm">
          Перезвоню вам в ближайшее время.
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <input
          type="text"
          placeholder="Ваше имя *"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          className="w-full bg-white/5 border border-white/10 focus:border-[#F97316] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-colors text-sm"
        />
        {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
      </div>
      <div>
        <input
          type="text"
          placeholder="Телефон или Email *"
          value={form.contact}
          onChange={e => setForm(f => ({ ...f, contact: e.target.value }))}
          className="w-full bg-white/5 border border-white/10 focus:border-[#F97316] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-colors text-sm"
        />
        {errors.contact && <p className="text-red-400 text-xs mt-1.5">{errors.contact}</p>}
      </div>
      <textarea
        rows={4}
        placeholder="Что нужно перевезти или другой комментарий"
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        className="w-full bg-white/5 border border-white/10 focus:border-[#F97316] rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-colors text-sm resize-none"
      />
      <button
        type="submit"
        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-black py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Отправить заявку
      </button>
      <p className="text-gray-700 text-xs text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  )
}