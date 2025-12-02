import { NextResponse } from 'next/server'
import fetch from 'node-fetch'

async function getAppToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
  if (!clientId || !clientSecret) throw new Error('Missing SPOTIFY_CLIENT_ID/SECRET')
  const resp = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}` },
    body: new URLSearchParams({ grant_type: 'client_credentials' })
  })
  if (!resp.ok) throw new Error(await resp.text())
  const data = await resp.json()
  return data.access_token
}

export async function GET(request: any) {
  const url = new URL(request.url)
  const query = url.searchParams.get('q')
  if (!query) return NextResponse.json({ error: 'Missing query q parameter' }, { status: 400 })
  try {
    const token = await getAppToken()
    const params = new URLSearchParams({ q: query, type: 'album', limit: '24' })
    const r = await fetch(`https://api.spotify.com/v1/search?${params.toString()}`, { headers: { Authorization: `Bearer ${token}` } })
    if (!r.ok) return NextResponse.json({ error: 'Spotify search failed', details: await r.text() }, { status: r.status })
    const data = await r.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'Search error', details: String(err) }, { status: 500 })
  }
}
