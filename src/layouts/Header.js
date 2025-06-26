import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiHome, FiUser, FiMail, FiSettings, FiStar, FiMenu, FiX, FiShoppingCart, FiLogOut } from 'react-icons/fi'
import InputField from '../componets/InputField';
import img from '../assets/Images/logo.jpg'
import { logout } from '../utils/auth';
import { jwtDecode } from 'jwt-decode';

function Header() { 
  const [open, setOpen] = useState(false);
  const [user , setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      try {
        const decoded=jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token :",error);
        
      }
    }

  },[]);
  if(!user) return null;

  const toggleDrawer = () => setOpen(!open);

  


  const handleLogout = () => {
    logout()
    navigate("/login");
  };



  return (
    <div>
      <header className='fixed top-0 last:0 w-full bg-white shadow z-50'>
        <div className='max-w-7xl mx-auto px-4
         py-3 flex justify-between gap-5'>

          {/* log */}
          <p>Food Market</p>
          <div className='text-2xl font-bold text-blue-600'>
            <img
              src={img}
              alt='User Avater'
              className='flex w-50 h-10 object-cover gap-5'
            />

          </div>
          
          {/* Desktop /Tablet navbar */}
          <InputField />
          <nav className='hidden md:flex space-x-6 font-medium text-gray-700'>
            <Link to='/home' className='hover:text-blue-600'> Home</Link>
            <Link to='/contact' className='hover:text-blue-600'> Contact</Link>
            <Link to='/about' className='hover:text-blue-600'> About</Link>
            <Link to='/features' className='hover:text-blue-600'> Features</Link>
            <Link to='/services' className='hover:text-blue-600'> Services</Link>
            <div className='flex flex-row' >
              {/* Link to='/carditem' */}
              < FiShoppingCart className='cursor-pointer' size={30} color='green' onClick={() => navigate('/carditem')} />
              <p className='bg-black text-white h-6 w-6 rounded-full text-center justify-center items-center '>10</p>
            </div>

            <div className='flex items-center space-x-3'>
              <img
                src={user?.image}
                alt='User Avater'
                className='w-10 h-10 rounded-full object-cover'
              />
              <span className='text-gray-800 font-medium truncate'>Welcome: {user?.name}</span>
              <div className='flex text-red-600 '>
                <button onClick={handleLogout} className=" px-4 py-2 bg-red-500 text-white rounded">
                  Logout
                </button>
                {/* <p className='  text-black cursor-pointer'>LogOut</p> */}
              </div>
            </div>

          </nav>

          {/* mobile Menu button */}
          <div className='md:hidden'>
            <button className='text-lg' onClick={toggleDrawer}>{open ? '' : <FiMenu />}</button>


          </div>

        </div>
        {/* Mobile Drawer Overlay */}
        {
          open && (
            <div className='fixed inset-0 bg-black bg-opacity-50 z-40' onClick={toggleDrawer}>

            </div>
          )
        }
        {/* mobile Drawer */}
        <div className={`fixed top left-0 h-full w-64 bg-white shadow-md z-50 duration-300 ease-in-out transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='flex justify-end self-end '>
            <button className='flex hover:text-red-600 text-3xl' onClick={toggleDrawer} ><FiX /></button>
          </div>
          <div className='flex justify-center text-center self-center rounded-full'>
            <img
              src={user.image}
              alt='User Avater'
              className='w-16 h-16 object-cover rounded-full'
            />
          </div>
          <h2 className='text-xl font-semibold  text-center truncate'>H! {user?.name}</h2>

          <nav className='flex flex-col p-4 space-y-4 text-gray-700 font-medium'>
            <span className='flex flex-row gap-6'>
              <FiHome size={20} />
              <Link to='/' className='hover:text-blue-500' onClick={toggleDrawer}>Home</Link>
            </span>
            <span className='flex flex-row gap-5'>
              <FiMail size={20} />
              <Link to='/contact' className=' flex flex-row gap-5' onClick={toggleDrawer}>Contact</Link>
            </span>
            <span className='flex flex-row gap-5'>
              <FiUser size={20} />
              <Link to='/about' className='hover:text-blue-500' onClick={toggleDrawer}>About</Link>
            </span>
            <span className='flex flex-row gap-5'>
              <FiStar size={20} />

              <Link to='/features' className='hover:text-blue-500' onClick={toggleDrawer}>Features</Link>
            </span>
            <span className='flex flex-row gap-5'>
              <FiSettings size={20} />
              <Link to='/services' className='hover:text-blue-500' onClick={toggleDrawer}>Services</Link>
            </span>
            <span className='flex flex-row gap-5'>
              <FiLogOut size={20} color='red' />
              <Link to='/login' className='hover:text-blue-500'onClick={handleLogout}>LogOut</Link>
            </span>
          </nav>
        </div>

      </header>
    </div>
  )
}

export default Header
