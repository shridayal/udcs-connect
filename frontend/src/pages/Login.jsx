function Login() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-3"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  )
}

export default Login