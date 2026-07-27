import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import SectionTitle from '../components/SectionTitle'

function Home() {
  const notifications = [
    'Internal Assessment Schedule Released',
    'Semester Registration Opens Next Week',
    'Research Seminar on AI this Friday',
  ]

  const events = [
    'AI Workshop',
    'Research Seminar',
    'Hackathon 2026',
  ]

  return (
    <div>
      <HeroSection />
      <StatsSection />

      <section className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle
          title="Latest Notifications"
          subtitle="Stay updated with important academic and department announcements."
        />
        <div className="grid gap-4">
          {notifications.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <SectionTitle
          title="Upcoming Events"
          subtitle="Explore workshops, seminars, and student activities."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold text-blue-900">{event}</h3>
              <p className="text-gray-600 mt-2">
                Event details will be available soon.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home