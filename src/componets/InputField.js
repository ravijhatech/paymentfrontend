import React from 'react'
import { FiSearch } from 'react-icons/fi'

function InputField({type,onChange,name,value}) {
  return (
    <div className='relative w-full max-w-xs'>
     
        <input 
        placeholder="Search..."
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        
        className='w-full pl-10 pr-4 py-2 border rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500'
         />
          <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500'/>
        
      
      
    </div>
  )
}

export default InputField
