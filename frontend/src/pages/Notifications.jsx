import { useEffect, useState } from 'react'
import { getNotifications } from '../api/notificationApi'
import SectionTitle from '../components/SectionTitle'

function Notifications() {
  const [notifications, setNotifications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications()
        setNotifications(data)
      } catch (err) {
        setError('Failed to load notifications')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <SectionTitle title="Notifications" subtitle="Latest academic and department notices." />

      {loading && <p>Loading notifications...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="space-y-4">
        {notifications.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-5 border-l-4 border-blue-800">
            <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.message}</p>
            <p className="text-sm text-gray-500 mt-2">{item.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Notifications