import { Link } from "react-router-dom";
function Signup() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img className="w-8 h-8 mr-2" src="src/assets/logo.svg" alt="logo" />
          Chatty
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#00205B] focus:border-[#00205B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00205B] dark:focus:border-[#00205B]"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#00205B] focus:border-[#00205B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00205B] dark:focus:border-[#00205B]"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-[#00205B] focus:border-[#00205B] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#00205B] dark:focus:border-[#00205B]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#00205B] hover:bg-[#001a47] focus:ring-4 focus:outline-none focus:ring-[#003080] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#00205B] dark:hover:bg-[#001a47] dark:focus:ring-[#003080]"
              >
                Sign Up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-[#00205B] hover:underline dark:text-[#003080]"
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
