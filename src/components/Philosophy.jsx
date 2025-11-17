export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] text-gray-600">PHILOSOPHY</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Crafted in Italy</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              We design fragrances as objects of quiet intensity: minimalist, modern, and meticulously engineered. Each bottle is a study in balance—texture, light, and scent.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Limited batches, premium raw materials, and a dedication to excellence define our approach. The result is a collection for those who value refinement over noise.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 border border-white/60" />
        </div>
      </div>
    </section>
  )
}
