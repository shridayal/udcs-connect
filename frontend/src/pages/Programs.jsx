import SectionTitle from '../components/SectionTitle'

function Programs() {
  const programs = [
    'MSc Computer Science',
    'MSc Data Science',
    'BSc Computer Science (Honours)',
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionTitle title="Programs" subtitle="Explore academic programs offered by UDCS." />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-bold text-blue-900">{program}</h3>
            <p className="text-gray-600 mt-2">
              Overview, eligibility, intake, and curriculum information.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs