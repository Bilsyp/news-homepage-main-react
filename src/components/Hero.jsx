import Hero_Content from "./Hero_Content";
import Nav from "./Nav";
import News_Content from "./News_Content";
import Store from "./Store";

const Hero = () => {
  return (
    <div>
      <Nav />
      <section className='flex  flex-wrap md:px-10 md:mt-1 px-3 '>
        <Hero_Content />
        <News_Content />
        <Store />
      </section>
    </div>
  );
};

export default Hero;
