'use client'

import React from 'react'

export default function SearchBar({ value, onChange, onSubmit }: { value: string; onChange: (v: string) => void; onSubmit: () => void }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="flex gap-2">
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="Search albums..." className="w-full px-4 py-2 border rounded-md" />
      <button className="px-4 py-2 bg-slate-900 text-white rounded-md">Search</button>
    </form>
  )
}
