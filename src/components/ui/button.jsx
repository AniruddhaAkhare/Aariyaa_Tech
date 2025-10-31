import React from 'react'

export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded-md bg-cyan-500 text-white hover:brightness-95 transition ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
