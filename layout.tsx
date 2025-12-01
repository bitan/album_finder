import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Album Finder'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="p-4 bg-white shadow-sm"><div className="container mx-auto">Album Finder</div></header>
          <main className="container mx-auto p-4 flex-1">{children}</main>
          <footer className="p-4 text-center text-sm text-slate-500">Built with ♥ and Spotify API</footer>
        </div>
      </body>
    </html>
  )
}
