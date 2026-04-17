import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl sm:text-9xl font-extrabold text-emerald-600 mb-4">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          La página que buscas no existe o fue movida a otro lugar.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          <i className="ri-arrow-left-line"></i>
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
