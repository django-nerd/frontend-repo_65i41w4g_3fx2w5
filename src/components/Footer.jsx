export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900">ULTRA NICHE</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">
              A contemporary Italian perfume house focusing on ultra‑niche creations. For press, wholesale, or private enquiries, please get in touch.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider">Contact</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>press@ultraniche.it</li>
              <li>atelier@ultraniche.it</li>
              <li>+39 02 123 4567</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 tracking-wider">Follow</h4>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Ultra Niche. All rights reserved.</p>
          <a href="#" className="hover:text-gray-700">Terms & Privacy</a>
        </div>
      </div>
    </footer>
  )
}
