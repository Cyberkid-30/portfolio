import { Gojo } from "../assets";

const About = () => {
  return (
    <section id="about" className="py-16">
      <h1 className="text-4xl mb-10">About me</h1>

      <div className="flex flex-col gap-10 md:flex-row">
        <img
          src={Gojo}
          className="shrink-0 border-4 border-white mx-auto rounded-xl size-[320px] object-cover"
          alt=""
        />

        <div>
          <p className="text-lg text-zinc-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sed
            magnam, ratione reprehenderit deserunt animi odit quidem officia
            iusto tempore cupiditate! Dolorem voluptatem labore dolorum velit?
            Culpa, voluptatum accusantium repellendus fugiat, quasi minus
            repellat in a consequatur ipsum commodi nostrum. Accusantium quos
            nulla itaque a esse magni, sed dolores non? Laborum soluta dolorum
            ducimus atque doloremque, odit exercitationem, dolores debitis optio
            aspernatur vero dicta recusandae.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
