"use client";
import { useEffect } from "react";
export const dynamic = "force-dynamic";
export default function Home() {
  useEffect(() => {
  const sections = document.querySelectorAll<HTMLElement>(".animate-fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("opacity-100");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);
  return (
    <main className="font-sans text-gray-800">
      
      {/* HERO */}
      <section className="
          min-h-screen flex items-center justify-center
          bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500
          text-white
          animate-fade-up">

        <div className="
            glass
            bg-gray-900-white/20
            text-black text-center
            p-6 sm:p-8 rounded-3xl
            shadow-xl ">
              
          <h1 className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              tracking-tight
              leading-tight">
            Influencer marketing orqali real mijoz olib kelamiz
          </h1>
          <p className="
            text-base
            sm:text-lg
            leading-relaxed
            opacity-90">
            Post emas — natija. Promo code orqali kelgan mijozlarni aniq ko‘rasiz.
            Va biznesingiz marketingini CRM orqali avtomatlashtiring.
          </p>
          <button className="
                bg-white text-black-600 px-8 py-4 rounded-2xl font-semibold
                shadow-xl w-full sm:w-auto text-base
                transition-all duration-300
                hover:scale-110 hover:shadow-2xl">
            Bepul konsultatsiya
          </button>
        </div>
      </section>

      {/* MUAMMO */}
        <section className="py-20 bg-gray-50 animate-fade-up animate-delay-200">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Muammo</h2>
          <p className="text-gray-600 text-lg">
            Influencer reklama qiladi, lekin real mijoz kelgan-kelmaganini bilmaysiz.
            Reklama byudjeti ko‘pincha bekor ketadi.
          </p>
        </div>
      </section>

      {/* YECHIM */}
          <section className="py-20 bg-white animate-fade-up animate-delay-400">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Yechim</h2>
          <p className="text-gray-600 text-lg">
            Biz promo code va real tashrif orqali influencer reklamasini
            aniq o‘lchaymiz. Siz faqat natija uchun to‘laysiz.
          </p>
        </div>
      </section>

      {/* QANDAY ISHLAYDI */}
<section className="py-20 bg-gray-50 animate-fade-up animate-delay-600">
        <div className="
            bg-white p-8 rounded-2xl
            border border-gray-100
            shadow-lg text-center
            transition-all duration-300
            hover:-translate-y-3 hover:shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Qanday ishlaydi
          </h2>

          <div className=" grid grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              gap-6">
            <div className="
                glass
                p-6 rounded-2xl
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              ">
              <h3 className="text-xl font-semibold mb-2">1. Influencer</h3>
              <p className="text-gray-600">
                Influencer sizning promo code bilan post joylaydi.
              </p>
            </div>

            <div className="
                glass
                p-6 rounded-2xl
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              ">
              <h3 className="font-semibold text-lg mb-2">2. Mijoz</h3>
              <p className="text-gray-600">
                Mijoz promo code orqali keladi va harakati yozib olinadi.
              </p>
            </div>

            <div className="
                glass
                p-6 rounded-2xl
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              ">
              <h3 className="font-semibold text-lg mb-2">3. Natija</h3>
              <p className="text-gray-600">
                Siz real ROI va haqiqiy mijozni ko‘rasiz.
              </p>
            </div>
            <div className="
                glass
                p-6 rounded-2xl
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              ">
              <h3 className="font-semibold text-lg mb-2">4. Influencer tanlovi</h3> 
              <p className="text-gray-600">
               Biznes kerakli influencer’ni marketplace orqali tanlash imkoni.
              </p>
            </div>
             <div className="
                glass
                p-6 rounded-2xl
                shadow-md
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              ">
              <h3 className="font-semibold text-lg mb-2">4. Doimiy auto marketing</h3> 
              <p className="text-gray-600">
               CRM + SMS/Telegram chegirmali kod xabarlari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
<section className="py-20 bg-black text-white animate-fade-up animate-delay-800">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">
            Loyihani boshlashga tayyormisiz?
          </h2>
          <p className="text-gray-300 mb-8">
            Bepul konsultatsiya oling va influencer marketingni
            natija bilan boshqaring.
          </p>

          <div className="space-y-2">
            <p>📩 Email: nuriddinmeyliyev04@gmail.com</p>
            <p>💬 Telegram: @sayihin</p>
          </div>
        </div>
      </section>


    </main>
  );
}

