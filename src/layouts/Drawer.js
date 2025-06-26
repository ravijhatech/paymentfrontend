import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Drawer() {
    const [menuOpen , setMenuOpen] = useState(false);
    const toggleButton = () =>setMenuOpen(!menuOpen);
  return (
    <div className='  md:hidden '>
      <button onClick={toggleButton}>
        {menuOpen ? 'open':'close'}
        
      </button>
      {menuOpen &&(
        <div className='  md:hidden bg-red border-t shadow-md '>
            <nav className='flex flex-col p-4 space-y-2 text-gray-700 font-medium'>
                <Link to='/' className='hover:text-blue-600'>Home</Link>
                <Link to='/features' className='hover:text-blue-600'>Features</Link>
                <Link to='/contact' className='hover:text-blue-600'>Contact</Link>
                <Link to='/about' className='hover:text-blue-600'>About</Link>

            </nav>
          
        </div>
      )}
    </div>
  )
}

export default Drawer
