const Box = ({ source, num, title, paragraph }) => {
  return (
    <div className='store_item flex my-8 justify-center  items-stretch'>
      <div className=''>
        <img width={100} src={source} alt={title} />
      </div>
      <div className='w-full px-2 '>
        <h1 className='text-2xl  font-bold text-Grayishblue sm:text-2xl'>
          {num}
        </h1>
        <h2 className='text-xl cursor-pointer hover:text-btnred font-semibold md:text-xl '>
          {title}
        </h2>
        <p className=' max-w-[250px] font-light text-[15px] '>{paragraph}</p>
      </div>
    </div>
  );
};

export default Box;
