const News_Content = () => {
  return (
    <div className='news_content md:w-[30%] md:ml-5'>
      <div className='news_container'>
        <h1 className='text-3xl text-Softorange font-semibold lg:text-md'>
          New
        </h1>

        <div className='news_list'>
          <ul className='text-white mt-8 flex flex-col lg:mt-3'>
            <li>
              <h2 className='text-xl font-semibold'>
                Hydrogen VS Electric Cars
              </h2>
              <p className='text-sm py-6 font-light text-Grayishblue'>
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>

              <hr className='py-3' />
            </li>
            <li>
              <h2 className='text-xl font-semibold'>
                The Downsides of AI Artistry
              </h2>
              <p className='text-sm py-6 font-light text-Grayishblue'>
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>

              <hr className='py-3' />
            </li>
            <li>
              <h2 className='text-xl font-semibold'>
                Is VC Funding Drying Up?
              </h2>
              <p className='text-sm py-6 font-light text-Grayishblue'>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>

              <hr className='py-3' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News_Content;
