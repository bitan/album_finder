import React from 'react'

export default function AlbumPage({ params }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Album: {params.id}</h2>
      <p className="text-slate-500">Album details will go here.</p>
    </div>
  )
}
