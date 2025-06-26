import React from 'react'

function Image({text,onClick,src}) {
  return (
    <div className='justify-between cursor-pointer'>
      <img
      onClick={onClick}
        src={src}
        alt='User Avater'
        className=' object-cover rounded-full w-20 h-20'

      />
      <p className='flex text-center justify-center  '>{text}</p>
    </div>
  )
}

export default Image
