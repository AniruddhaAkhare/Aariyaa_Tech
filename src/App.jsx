import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,#0A1628_0%,#0E2A47_100%)] text-white">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}
