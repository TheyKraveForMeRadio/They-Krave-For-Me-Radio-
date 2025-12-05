export default function LivePlayer() {
  const STREAM_URL = 'https://streaming.live365.com/a71526'
  return (
    <section className="bg-white/5 p-6 rounded-lg mt-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-pink-500 rounded animate-pulse" />
        <div>
          <h3 className="font-bold">Now Playing</h3>
          <p className="text-white/80">Live Stream</p>
        </div>
      </div>
      <audio controls className="w-full mt-4" src={STREAM_URL} />
    </section>
  )
}
