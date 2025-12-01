import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import SearchBar from './components/SearchBar'
import AlbumList from './components/AlbumList'

async function searchAlbums(q: string) {
  const res = await fetch(`/api/albums/search?q=${encodeURIComponent(q)}`)
  if (!res.ok) throw new Error('Search failed')
  return res.json()
}

export default function Home() {
  const [query, setQuery] = useState('')
  const [albums, setAlbums] = useState<any[]>([]) 
  const [loading, setLoading] = useState(false)

  async function doSearch() {
    if (!query) return
    setLoading(true)
    try {
      const data = await searchAlbums(query)
      setAlbums(data.albums?.items || [])
    } catch (err) {
      console.error(err)
    } finally { setLoading(false) }
  }
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-2xl font-bold">Album Finder</h2>
        <p className="text-sm text-slate-500">Search albums powered by Spotify</p>
      </section>
      <section>
        <div className="p-6 border border-slate-200 rounded-lg bg-white">
          <SearchBar value={query} onChange={setQuery} onSubmit={doSearch} />
          <div className="mt-4">
            {loading && <div className="skeleton h-6 w-32 rounded mb-4" />}
            <AlbumList albums={albums} />
          </div>
        </div>
      </section>
    </div>
  )
}
