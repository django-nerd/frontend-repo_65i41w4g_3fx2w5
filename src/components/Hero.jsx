import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#EDE7F6] overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability (non-blocking) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#EDE7F6] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.3em] text-gray-700">ITALIAN PERFUMERY</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Ultra‑Niche Collection
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl">
            A modern catalog celebrating craftsmanship and the art of scent.
            Explore limited creations designed for connoisseurs and visionaries.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-black transition-colors">
              Explore Collection
            </a>
            <a href="#philosophy" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold border border-gray-200 hover:border-gray-300 transition-colors">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
