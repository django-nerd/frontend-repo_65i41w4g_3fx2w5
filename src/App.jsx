import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Philosophy from './components/Philosophy'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Collection />
        <Philosophy />
      </main>
      <Footer />
    </div>
  )
}

export default App
