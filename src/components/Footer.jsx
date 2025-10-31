import React from 'react'
import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 md:px-12 lg:px-24 border-t border-cyan-500/20 mt-24">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Aariyaa Tech</span>
        </div>
        <p className="text-gray-400 mb-4">Empowering Intelligence. Enabling Growth.</p>
        <p className="text-gray-500 text-sm">© 2024 Aariyaa Tech. All rights reserved.</p>
      </div>
    </footer>
  )
}
