import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="lg:text-[9rem] text-[50px] font-extrabold text-center leading-[0.9] mb-16">
          CONTACT
        </h1>

        {/* Main Grid: Left info + Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 bg-black border border-gray-700 rounded-full px-4 py-1 mb-4">
              <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
              <span className="text-sm font-medium text-gray-300">
                BOOK A CALL
              </span>
            </div>

            <h2 className="md:text-7xl text-4xl font-semibold leading-tight mb-8">
              I'd love to hear <br /> from you!
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Your Budget
              </label>
              <input
                type="text"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                rows="5"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-lime-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-lime-400 text-black font-medium px-5 py-2 rounded-full hover:bg-lime-300 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-neutral-800 my-16"></div>

        {/* Bottom Section */}
        <section className="bg-black text-white py-12 sm:py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10">
            {/* EMAIL CARD */}
            <div className="bg-[#111] rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center">
              <p className="text-xs sm:text-sm text-gray-200 tracking-widest mb-3 sm:mb-4">
                EMAIL ME
              </p>
              <a
                href="mailto:sheikhkiron59@gmail.com"
                className="text-lg sm:text-2xl font-medium border-b border-gray-600 hover:text-lime-400 hover:border-lime-400 transition-all duration-300 break-all"
              >
                sheikhkiron59@gmail.com
              </a>
            </div>

            {/* SOCIAL CARD */}
            <div className="bg-[#111] rounded-2xl p-6 sm:p-10 flex flex-col items-center justify-center text-center">
              <p className="text-xs sm:text-sm text-gray-200 tracking-widest mb-4 sm:mb-6">
                FIND ME
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href="https://www.facebook.com/sheikh.kiron.2025"
                  className="bg-lime-400 text-black text-lg sm:text-xl w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://wa.me/8801516522658"
                  className="bg-lime-400 text-black text-lg sm:text-xl w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.linkedin.com/in/sheikh-kiron-a21763341/"
                  className="bg-lime-400 text-black text-lg sm:text-xl w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/SheikhKiron"
                  className="bg-lime-400 text-black text-lg sm:text-xl w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full hover:scale-110 transition-transform"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
