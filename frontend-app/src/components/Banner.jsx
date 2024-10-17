import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-[#00205B] sm:block">
              {" "}
              Increase Conversion.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="flex items-center justify-center block w-full rounded bg-[#00205B] px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#001a47] focus:outline-none focus:ring active:bg-[#003080] sm:w-auto"
              to="/login"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 w-4 h-4" // Size of the arrow
                viewBox="0 0 24 24"
                fill="none"
                stroke="white" // Color of the arrow
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </Link>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-[#00205B] shadow hover:text-[#001a47] focus:outline-none focus:ring active:text-[#003080] sm:w-auto"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
