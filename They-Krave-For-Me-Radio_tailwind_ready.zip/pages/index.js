import Head from 'next/head'
import Header from '../components/Header'
import LivePlayer from '../components/LivePlayer'

export default function Home() {
  return (
    <div>
      <Head><title>They Krave For Me Radio</title></Head>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <LivePlayer />
        <section className="mt-8">
          <h2 className="text-2xl neon-text font-bold">Welcome to the Krave Zone</h2>
          <p className="mt-2 text-white/80">Streaming non-stop vibes, culture, and energy.</p>
        </section>
      </main>
    </div>
  )
}
