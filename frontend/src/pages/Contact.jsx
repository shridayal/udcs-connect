import SectionTitle from '../components/SectionTitle'

function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <SectionTitle title="Contact Us" subtitle="Get in touch with UDCS." />

      <div className="bg-white rounded-xl shadow p-8 space-y-4">
        <p><strong>Address:</strong> University Department of Computer Science</p>
        <p><strong>Phone:</strong> +91 12345 67890</p>
        <p><strong>Email:</strong> udcs@example.com</p>

        <form className="space-y-4 pt-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-3"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-lg px-4 py-3"
          ></textarea>
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact