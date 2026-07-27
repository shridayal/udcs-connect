function StudentDashboard() {
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

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-900 text-white px-6 py-4 shadow">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-bold text-blue-900">Welcome, Student</h2>
          <p className="text-gray-600 mt-2">
            Access your academic resources and department services here.
          </p>
        </div>

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