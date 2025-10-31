import React from 'react'

export function Badge({ children, className = '' }) {
  return (
    <span className={`inline-block px-3 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-300 ${className}`}>
      {children}
    </span>
  )
}

export default Badge
