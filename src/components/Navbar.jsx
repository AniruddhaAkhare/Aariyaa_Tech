import React from 'react'
import { Zap } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 md:px-12 lg:px-24 fixed top-0 left-0 z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div className="text-white font-bold text-xl">Aariyaa Tech</div>
        </div>

        <div className="hidden md:flex gap-6 items-center text-sm text-cyan-200">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#tools" className="hover:text-white transition">Tools</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#founders" className="hover:text-white transition">Founders</a>
          <a href="#contact" className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">Contact</a>
        </div>
      </div>
    </nav>
  )
}
