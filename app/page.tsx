export default function Home() {
  return (
    <main className="font-sans text-gray-800">
      
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 text-white">
        <div className="max-w-3xl text-center px-4">
          <h1 className="text-5xl font-bold mb-6">
            Influencer marketing orqali real mijoz olib kelamiz
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Post emas — natija. Promo code orqali kelgan mijozlarni aniq ko‘rasiz.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition">
            Bepul konsultatsiya
          </button>
        </div>
      </section>

      {/* MUAMMO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Muammo</h2>
          <p className="text-gray-600 text-lg">
            Influencer reklama qiladi, lekin real mijoz kelgan-kelmaganini bilmaysiz.
            Reklama byudjeti ko‘pincha bekor ketadi.
          </p>
        </div>
      </section>

      {/* YECHIM */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Yechim</h2>
          <p className="text-gray-600 text-lg">
            Biz promo code va real tashrif orqali influencer reklamasini
            aniq o‘lchaymiz. Siz faqat natija uchun to‘laysiz.
          </p>
        </div>
      </section>

      {/* QANDAY ISHLAYDI */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Qanday ishlaydi
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">1. Influencer</h3>
              <p className="text-gray-600">
                Influencer sizning promo code bilan post joylaydi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">2. Mijoz</h3>
              <p className="text-gray-600">
                Mijoz promo code orqali keladi va harakati yozib olinadi.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-lg mb-2">3. Natija</h3>
              <p className="text-gray-600">
                Siz real ROI va haqiqiy mijozni ko‘rasiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + KONTAKT */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Loyihani boshlashga tayyormisiz?
          </h2>
          <p className="text-gray-300 mb-8">
            Bepul konsultatsiya oling va influencer marketingni
            natija bilan boshqaring.
          </p>

          <div className="space-y-2">
            <p>📩 Email: example@gmail.com</p>
            <p>💬 Telegram: @username</p>
          </div>
        </div>
      </section>

    </main>
  );
}

