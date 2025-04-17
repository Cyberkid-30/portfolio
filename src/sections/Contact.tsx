import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <section id="contact">
      <hr className="text-zinc-700 h-0.5 mb-5" />
      <p className="flex items-center gap-5 text-zinc-400 md:text-xl mb-3">
        <FaMailBulk /> janphandoh@gmail.com
      </p>
      <p className="text-center text-zinc-400">
        &copy; Copyright {year} All rights reserved
      </p>
    </section>
  );
};

export default Contact;
