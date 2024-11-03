import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <div className="bg-gray-100 py-20" id="contact">
      <div className="align-element max-w-2xl mx-auto text-center">
        <SectionTitle text="Contact Me" />
        <p className="text-slate-600 mt-4">
          Have a question or want to work together? Feel free to reach out using
          the form below.
        </p>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
