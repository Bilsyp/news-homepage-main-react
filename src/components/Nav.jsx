import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.svg";
import { useRef, useState } from "react";
const Nav = () => {
  const [toogle, setToogle] = useState(false);
  const containerListItem = useRef(null);
  const listItem = useRef(null);

  const handleClick = () => {
    const checkAttr = containerListItem.current.getAttribute("data-option");

    if (checkAttr == "show") {
      setToogle(true);
      containerListItem.current.setAttribute("data-option", "close");

      console.log("show");
    } else {
      setToogle(false);
      containerListItem.current.setAttribute("data-option", "show");
      console.log("close");
    }
  };
  return (
    <>
      <nav className='px-9 py-3 top-0 sticky md:static backdrop-blur'>
        <div className='nav_container flex justify-between items-center  gap-10'>
          <div className='brand '>
            <img width={40} src={logo} alt='' />
          </div>
          <div
            className={`${
              !toogle ? "show" : ""
            } container_item  absolute  bg-shadows top-0 overflow-hidden left-0 w-full h-screen  flex  justify-end   sm:w-full sm:h-auto  sm:overflow-auto  sm:static sm:bg-transparent`}
            ref={containerListItem}
            data-option='show'
          >
            <ul
              className={`${
                toogle ? "show" : ""
              }list_item w-[60%]  relative delay-100 py-10 px-8 flex items-start justify-center flex-col gap-6 bg-white sm:static sm:p-0 sm:w-auto sm:flex-row sm:bg-transparent md:text-md`}
              ref={listItem}
            >
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
              <button
                onClick={handleClick}
                className='absolute sm:hidden top-[30px] right-[20px] text-3xl'
              >
                <FaTimes />
              </button>
            </ul>
          </div>
          <div>
            <button className='sm:hidden text-xl' onClick={handleClick}>
              <FaBars />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
