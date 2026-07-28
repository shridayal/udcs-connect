import { useEffect, useState } from 'react'
import { getStudentProfile } from '../api/studentApi'

function StudentDashboard() {
  const [student, setStudent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const cards = [
    'Profile',
    'Virtual ID Card',
    'Timetable',
    'Courses',
    'Resources',
    'Notifications',
    'Academic Calendar',
    'Events',
    'Research',
    'Certificates',
    'Help Desk',
  ]

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getStudentProfile()
        setStudent(data)
      } catch (err) {
        setError('Failed to load student profile')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {loading && <p>Loading profile...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {student && (
          <div className="bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-xl font-bold text-blue-900">
              Welcome, {student.name}
            </h2>
            <p className="text-gray-600 mt-2">
              Program: {student.program} | Semester: {student.semester}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-900">{card}</h3>
              <p className="text-sm text-gray-600 mt-2">
                Open {card.toLowerCase()} module
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard