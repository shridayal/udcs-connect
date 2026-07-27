import SectionTitle from '../components/SectionTitle'

function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <SectionTitle title="About UDCS" subtitle="Learn more about the department." />

      <div className="bg-white p-8 rounded-xl shadow space-y-6">
        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Department Overview</h3>
          <p className="text-gray-700">
            The University Department of Computer Science is committed to excellence
            in teaching, research, and innovation across computing disciplines.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Vision</h3>
          <p className="text-gray-700">
            To build a strong academic and research ecosystem in computer science and data science.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-blue-900 mb-2">Mission</h3>
          <p className="text-gray-700">
            To empower students and faculty through quality education, innovation, and collaboration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About