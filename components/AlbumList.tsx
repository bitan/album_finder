'use client'

import React from 'react'
import AlbumCard from './AlbumCard'

export default function AlbumList({ albums }: { albums: any[] }) {
  if (!albums || albums.length === 0) return <div className="text-slate-500">No albums found</div>
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {albums.map((a) => <AlbumCard key={a.id} album={a} />)}
    </div>
  )
}
