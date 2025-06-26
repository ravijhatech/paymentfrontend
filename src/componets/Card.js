import React, { useState } from 'react'
import {AiFillHeart , AiOutlineHeart} from 'react-icons/ai'

function Card({src,alt,productName,price,buybtn,addtocardbtn,onClick}) {

    const [liked , setLiked] = useState(false);
    const toggleLike =() => setLiked(!liked);
  return (
    <div className='relative max-w-xs mx-auto bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
        <button onClick={toggleLike} className='absolute top-3 right-3 text-red-500 text-xl'>
            {liked ? <AiFillHeart/>:<AiOutlineHeart/>}
        </button>
        <img 
         onClick={onClick}
        src={src}
        alt={alt}
        className='w-full h-48 object-cover'
        />
        <div className='p-4'>
            {/* <h2 className='text-lg font-semibold text-gray-800 '>
              {productName}
            </h2> */}
            <p className='text-gray-600 mt-1 text-sm'>{productName}</p>
            <div className=' mt-2 text-xl font-bold text-blue-600 '>
              {'\u20B9'}  {price}

            </div>
            <div className='flex gap-2 mt-4'>
                <button className='flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300'>{buybtn}</button>
                <button className='flex-1 border border-blue-600 text-white py-2 rounded-lg hover:bg-blue-50 hover:text-black transition duration-300 bg-red-600 ' >{addtocardbtn}</button>

            </div>


        </div>
      
    </div>
  )
}

export default Card
