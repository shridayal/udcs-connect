import { useEffect, useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import { getFacultyList } from '../api/facultyApi'

function Faculty() {
  const [facultyMembers, setFacultyMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const data = await getFacultyList()
        setFacultyMembers(data)
      } catch (err) {
        setError('Failed to load faculty data')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchFaculty()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionTitle title="Faculty Directory" subtitle="Meet our distinguished faculty members." />

      {loading && <p className="text-gray-600">Loading faculty...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full mb-4"></div>
            <h3 className="text-xl font-bold text-blue-900">{faculty.name}</h3>
            <p className="text-gray-700">{faculty.designation}</p>
            <p className="text-sm text-gray-500 mt-2">{faculty.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faculty