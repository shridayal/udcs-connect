function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          University Department of Computer Science
        </h1>
        <p className="text-lg md:text-xl mb-6">
          A centralized digital portal for students, faculty, alumni, and department administration.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 text-base md:text-lg">
          <span className="bg-white/10 px-4 py-2 rounded-lg">MSc Computer Science</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">MSc Data Science</span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">BSc Computer Science (Honours)</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection