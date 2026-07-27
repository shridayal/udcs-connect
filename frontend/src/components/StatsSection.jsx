function StatsSection() {
  const stats = [
    { label: 'Students', value: '500+' },
    { label: 'Faculty', value: '25+' },
    { label: 'Research Publications', value: '200+' },
    { label: 'Alumni', value: '1000+' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-blue-50 rounded-xl p-6 text-center shadow-sm">
            <h3 className="text-3xl font-bold text-blue-900">{stat.value}</h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection