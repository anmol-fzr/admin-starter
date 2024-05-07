import { Link } from "react-router-dom"

const ErrorPage = () => (
  <div className="grid h-screen place-content-center bg-white px-4">
    <div className="text-center">
      <h1 className="text-9xl font-black text-gray-200">Something Went Wrong</h1>
      <Link
        to="/"
        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  </div>
)

export default ErrorPage 
