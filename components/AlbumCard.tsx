'use client'

import React from 'react'
import Link from 'next/link'

export default function AlbumCard({ album }: { album: any }) {
  const image = album.images?.[0]
  return (
    <Link href={`/album/${album.id}`} className="block">
      <div className="bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-shadow">
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-slate-100 rounded overflow-hidden flex-none">
            {image ? <img src={image.url} alt={album.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>}
          </div>
          <div>
            <div className="font-semibold">{album.name}</div>
            <div className="text-sm text-slate-500">{album.artists?.map((a: any) => a.name).join(', ')}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
