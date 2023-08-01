import logo from "../assets/images/image-web-3-mobile.jpg";

const Hero_Content = () => {
  return (
    <div className='hero_content  md:flex-1 mt-4'>
      <div className='image-wrapper  w-full h-[300px]'></div>
      <div className='lg:flex'>
        <div className=' lg:p-3   '>
          <h2 className='text-4xl py-3 font-bold'>
            The Bright Future of Web 3.0?
          </h2>
        </div>
        <div className=' lg:ml-10'>
          <p className='py-2 lg:px-10'>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className='btn hover:bg-news_bg lg:ml-10'>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Hero_Content;
