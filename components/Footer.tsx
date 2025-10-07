import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 mt-12 border-t border-white/4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-gray-300">© {new Date().getFullYear()} Glassy Dark</div>
        <div className="flex items-center gap-4 text-gray-400">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
