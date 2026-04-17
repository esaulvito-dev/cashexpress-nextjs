import CountdownTimer from "@/components/CountdownTimer";

const WHATSAPP_URL = "https://cashexpressgracias.esaullorenzo.es/";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static.readdy.ai/image/3e793795e87845ada69b8088167d8f30/16a4cc7c4e8b2783cef47c353b3a08bf.jpeg"
            alt="Workspace digital con gráficos de ventas y analítica"
            title="Productos digitales con inteligencia artificial"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 w-full px-4 py-16 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full mb-6 animate-pulse max-w-full">
            <span className="w-2 h-2 bg-white rounded-full animate-ping flex-shrink-0"></span>
            <span className="text-xs font-semibold tracking-wide uppercase leading-tight">
              ENTRENAMIENTO en vivo IA-Cash Express
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-2xl px-2">
            DESCUBRE CÓMO CREAR Y VENDER PRODUCTOS DIGITALES CON{" "}
            <span className="text-yellow-400">INTELIGENCIA ARTIFICIAL</span> EN{" "}
            <span className="text-yellow-400">MENOS DE 48 HORAS</span> 🚀
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 px-2">
            No necesitas ser un experto ni saber programar. Te enseñamos a
            fabricar activos digitales de alta demanda y alta rentabilidad
            (90%+) que puedes cobrar hoy mismo en tu moneda local.{" "}
            <strong className="text-yellow-400 font-bold">
              Entrenamiento en Vivo: Del Cero al Producto Terminado en 1 sesión
            </strong>
          </p>

          <div className="flex flex-col items-center justify-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-4 rounded-2xl mb-6 border border-white/10 mx-auto max-w-sm sm:max-w-none sm:flex-row sm:gap-4 sm:px-8 sm:py-5 sm:w-fit">
            <div className="flex items-center gap-2">
              <i className="ri-calendar-line text-xl text-emerald-400"></i>
              <span className="text-sm sm:text-xl font-semibold text-white">
                📅 PRÓXIMA CLASE: ESTA SEMANA
              </span>
            </div>
            <div className="w-16 h-px bg-white/20 sm:hidden"></div>
            <div className="hidden sm:block w-px h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <i className="ri-time-line text-xl text-emerald-400"></i>
              <span className="text-sm sm:text-xl font-semibold text-white">
                8:00 PM (Perú 🇵🇪 / Colombia 🇨🇴)
              </span>
            </div>
          </div>

          {/* Contador */}
          <CountdownTimer />

          {/* CTA Principal */}
          <div className="px-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white w-full max-w-md mx-auto px-5 py-4 rounded-full font-bold uppercase shadow-2xl hover:scale-105 hover:shadow-green-500/50 transition-all duration-300 animate-pulse cursor-pointer text-center"
            >
              <span className="text-sm sm:text-lg leading-tight">
                👉 QUIERO EMPEZAR
              </span>
              <span className="text-sm sm:text-lg leading-tight">
                A FACTURAR CON IA
              </span>
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-3">
            Acceso 100% gratuito — Cupos limitados
          </p>
        </div>
      </section>

      {/* Sección Lo Que Vas a Lograr */}
      <section className="py-14 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              ¿QUÉ VAS A APRENDER EN ESTA CLASE?
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-10 sm:mb-14">
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-lg text-white"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    El Secreto de la IA → La Fábrica de Activos 🏗️
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    De Cero a Producto en 24h: El método exacto para fabricar
                    Ebooks, Plantillas y Tools de alta demanda sin escribir una
                    sola palabra.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-lg text-white"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Venta Local → Cero Complicaciones, Soles en Mano 💰
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Dominio del Mercado Local: Olvídate del dólar y las
                    pasarelas gringas. Aprende a recibir pagos directo en tu
                    cuenta bancaria (Soles, Pesos) hoy mismo
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-lg text-white"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Rentabilidad Extrema → El 90% es Tuyo 📈
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Margen de Ganancia del 90%: Cómo saltarte a los
                    intermediarios y plataformas que te quitan la mitad de tu
                    esfuerzo. Si tú creas el valor, tú te llevas el dinero
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center bg-green-500 rounded-full flex-shrink-0 mt-0.5">
                  <i className="ri-check-line text-lg text-white"></i>
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                    Sistema de Ventas → Máquina en Piloto Automático 🤖
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Tu Vendedor 24/7: La hoja de ruta para automatizar la
                    captación y el cierre. Cómo vender mientras duermes, viajas
                    o sigues creando tu próximo producto
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 sm:p-8 mb-10 sm:mb-14 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-red-500">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full flex-shrink-0 mt-0.5">
                <i className="ri-vip-crown-2-fill text-lg text-red-600"></i>
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  Comunidad Exclusiva 🔥
                </h3>
                <p className="text-sm sm:text-base text-red-100 leading-relaxed">
                  No estarás solo en el camino. Únete a nuestra comunidad
                  privada donde compartimos{" "}
                  <strong className="text-yellow-300 font-bold">
                    lo que está facturando HOY mismo
                  </strong>
                  , actualizaciones de IA para que no quedes obsoleto y el
                  soporte que necesitas para que tu primera venta llegue en
                  tiempo récord.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Secundario */}
          <div className="text-center px-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 bg-black text-white w-full max-w-md mx-auto px-5 py-4 rounded-full font-semibold uppercase border-2 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 cursor-pointer text-center"
            >
              <span className="text-sm sm:text-base leading-tight">
                👉 SÍ, QUIERO MI FÁBRICA
              </span>
              <span className="text-sm sm:text-base leading-tight">
                DE PRODUCTOS DIGITALES
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Sección Autoridad */}
      <section className="py-14 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-none">
                <div className="absolute -top-3 -left-3 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl opacity-20"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://static.readdy.ai/image/3e793795e87845ada69b8088167d8f30/6db1f902baa70cf225dc0ef59a98b73c.png"
                  alt="Esaúl Lorenzo - Mentor de productos digitales con inteligencia artificial"
                  title="Esaúl Lorenzo mentor digital"
                  className="relative rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 flex gap-3">
                  <div className="bg-white rounded-xl px-3 py-2 shadow-lg">
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      $100K+
                    </div>
                    <div className="text-[10px] sm:text-xs text-gray-600">
                      Facturados
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 text-center md:text-left">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase mb-3">
                TU MENTOR
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                ESAÚL LORENZO
              </h2>
              <div className="border-l-4 border-yellow-500 pl-4 sm:pl-6 space-y-4 text-left">
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                  Llevo{" "}
                  <strong className="text-yellow-600">7 años</strong>{" "}
                  construyendo negocios digitales y ayudando a cientos de
                  emprendedores a que por fin logren vivir de internet.
                </p>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                  No te hablo desde la teoría, te hablo desde los resultados: El
                  año pasado, mis sistemas generaron más de{" "}
                  <strong className="text-yellow-600">$100,000 USD</strong>{" "}
                  facturados con pauta digital. Lo que vas a aprender es
                  exactamente lo que{" "}
                  <strong className="text-yellow-600">HAGO</strong> cada mañana
                  para mover la aguja de mi negocio.
                </p>
                <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
                  Mi misión es que tú también te lleves tu tajada de este
                  mercado millonario. Deja de adivinar y{" "}
                  <strong className="text-yellow-600">copia mi sistema</strong>{" "}
                  para ahorrarte años de errores y miles de dólares perdidos.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-6">
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                  <i className="ri-time-line text-lg text-emerald-600"></i>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">
                    7+ Años de Experiencia
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                  <i className="ri-money-dollar-circle-line text-lg text-green-600"></i>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">
                    $100K+ Facturados
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                  <i className="ri-group-line text-lg text-teal-600"></i>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">
                    Cientos de Alumnos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3 sm:mb-4 leading-tight">
            ¿ESTÁS LISTO PARA DAR EL SALTO?
          </h2>
          <p className="text-sm sm:text-lg text-emerald-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Únete a nuestro grupo exclusivo de WhatsApp y asegura tu lugar en el
            entrenamiento IA-Cash Express. Dentro recibirás los accesos a la
            clase en vivo, materiales descargables y las estrategias de oro que
            no comparto en ningún otro lugar
          </p>
          <div className="px-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-1 bg-white text-emerald-700 w-full max-w-md mx-auto px-5 py-4 rounded-full font-bold uppercase shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer text-center"
            >
              <span className="text-sm sm:text-base leading-tight">
                👉 UNIRME AL GRUPO
              </span>
              <span className="text-sm sm:text-base leading-tight">
                Y ASEGURAR MI CUPO 📲
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="border-t border-gray-800 mb-6 sm:mb-8"></div>
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://www.tiktok.com/@esaullorenzo.a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="w-11 h-11 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full hover:bg-pink-600 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-tiktok-fill text-lg text-white"></i>
            </a>
            <a
              href="https://www.youtube.com/@ESAULLORENZO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-11 h-11 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full hover:bg-red-600 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-youtube-fill text-lg text-white"></i>
            </a>
            <a
              href="https://www.instagram.com/esaullorenzo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-11 h-11 flex items-center justify-center bg-gray-800 border border-gray-700 rounded-full hover:bg-pink-500 transition-all duration-300 cursor-pointer"
            >
              <i className="ri-instagram-fill text-lg text-white"></i>
            </a>
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-500 mb-2">
            © 2026 Esaúl Lorenzo. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
