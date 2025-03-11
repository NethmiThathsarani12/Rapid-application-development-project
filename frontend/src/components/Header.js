import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
             <div className=''>
             <Link to={"/"}>
                  <Logo w={50} h={20}/>
              </Link>
           </div>

           <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none' />
                <div className="text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white" style={{ backgroundColor: "#bd83b8" }}>
                  <GrSearch />
                </div>
            </div>

            <div className='flex items-center gap-7'>

              <div className='text-3xl cursor-pointer relative flex justify-center'>
                <FaRegCircleUser/>
              </div>

              <div className='text-2xl relative'>
              <span><FaShoppingCart/></span>

              <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                              <p className='text-sm'></p>
                          </div>
              </div>

              <div>
              {/* <button className="px-3 py-1 rounded-full text-white bg-[#564c78] hover:bg-[#342e4a]">
              Login
                 </button> */}

                 <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-[#bd83b8] hover:bg-[#342e4a]'>Login</Link>

              </div>

            </div>

      </div>


    </header>
  )
}

export default Header