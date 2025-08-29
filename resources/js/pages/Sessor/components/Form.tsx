const Form = () => {
  return (
    <section className="container mx-auto w-full px-4 sm:px-6 lg:px-10 py-10">
      <form className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Full Name */}
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-xl border bg-white px-5 py-4 text-sm shadow-md focus:border-indigo-200 focus:ring focus:ring-indigo-200"
        />

        {/* Phone Number */}
        <input
          required
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
          className="w-full rounded-xl border bg-white px-5 py-4 text-sm shadow-md focus:border-indigo-200 focus:ring focus:ring-indigo-200"
        />

        {/* Email */}
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full rounded-xl border bg-white px-5 py-4 text-sm shadow-md focus:border-indigo-200 focus:ring focus:ring-indigo-200 md:col-span-2 lg:col-span-1"
        />

        {/* Message */}
        <textarea
          required
          name="message"
          id="message"
          placeholder="Your Message"
          className="w-full min-h-[140px] rounded-xl border bg-white px-5 py-4 text-sm shadow-md focus:border-indigo-200 focus:ring focus:ring-indigo-200 md:col-span-2 lg:col-span-3"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="mx-auto w-full md:w-auto lg:col-span-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-400 p-[1px] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95"
        >
          <span className="block w-full rounded-xl bg-white px-6 py-4 font-bold text-black">
            Send Message
          </span>
        </button>
      </form>
    </section>
  );
};

export default Form;
