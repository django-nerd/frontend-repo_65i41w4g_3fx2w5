const perfumes = [
  {
    id: 1,
    name: 'Iridescent No. 1',
    notes: 'Iris • Bergamot • White Musk',
    color: 'from-purple-200/60 to-purple-100/40',
  },
  {
    id: 2,
    name: 'Vetro Azzurro',
    notes: 'Sea Salt • Neroli • Cedar',
    color: 'from-indigo-200/60 to-blue-100/40',
  },
  {
    id: 3,
    name: 'Gioia Lucente',
    notes: 'Pear • Peony • Ambroxan',
    color: 'from-pink-200/60 to-rose-100/40',
  },
  {
    id: 4,
    name: 'Notte di Vetro',
    notes: 'Incense • Vanilla • Vetiver',
    color: 'from-slate-200/60 to-gray-100/40',
  },
]

export default function Collection() {
  return (
    <section id="collection" className="relative py-24 bg-gradient-to-b from-[#EDE7F6] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs tracking-[0.3em] text-gray-600">COLLECTION</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">Signature Creations</h2>
          </div>
          <a href="#" className="text-sm text-gray-700 hover:text-gray-900">View all</a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perfumes.map((p) => (
            <article key={p.id} className="group relative">
              <div className={`aspect-[3/4] rounded-2xl bg-gradient-to-br ${p.color} border border-white/60 shadow-sm overflow-hidden`}></div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600">{p.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
