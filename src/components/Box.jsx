const Box = ({ source, num, title, paragraph }) => {
  return (
    <div className='store_item flex my-8 justify-center items-center'>
      <div className=''>
        <img width={100} src={source} alt={title} />
      </div>
      <div className='w-full px-2   overflow-auto '>
        <h1 className='text-xl pb-1  md:pb-2 pt-1 font-bold text-Grayishblue sm:text-xl'>
          {num}
        </h1>
        <h2 className=' cursor-pointer hover:text-btnred font-semibold text-md md:text-md '>
          {title}
        </h2>
        <p className=' font-light text-sm '>{paragraph}</p>
      </div>
    </div>
  );
};

export default Box;
