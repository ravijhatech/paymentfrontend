// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import Card from '../componets/Card';
// import axios from 'axios';

// function ItemDetails() {
//     const { id } = useParams();
//     const [item, setItem] = useState(null);

//     useEffect(() => {
//         const fetchitem = async () => {
//             const res = await axios.get(`http://localhost:5000/api/v1/fetch/blog/${id}`);
//             setItem(res.data);
//         };
//         fetchitem();
//     }, [id]);
//     if (!item) return <p className='text-center'>Loading...</p>


//     return (
//         <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 mt-4">
//             <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

//                 {/* Image Section */}
//                 <div>
//                     <img
//                         src={item.image}
//                         alt="Contact Us Food"
//                         className="w-full h-auto rounded-2xl shadow-lg object-contain"
//                     />
//                 </div>

//                 {/* Form Section */}
//                 <div className='flex-1 space-y-4'>
//                     <h2 className="text-3xl font-bold text-gray-800 mb-6">{item.productname}</h2>
//                     <h2 className="text-xl font-semibold text-green-600 mb-6">  {'\u20B9'} {item.price}</h2>

//                     <div className='flex gap-4 mt-4 items-center'>
//                          <button className='bg-green-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full shadow-md transition' >Buy</button>
//                         <button className='bg-green-500 hover:bg-gray-600 text-white px-6 py-2 rounded-full shadow-md transition' >Card to Add</button>

//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// }

// export default ItemDetails



import React, { useEffect, useState } from "react";
import { Star, ShoppingCart, Info, ArrowDown, ArrowUp } from "lucide-react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function  ItemDetails() {

  const [showMore, setShowMore] = useState(false);

   const { id } = useParams();
   console.log(id );
   
   
   
    const [item, setItem] = useState(null);

    // add to cart

    // const handleAddToCart = async()=>{
    //   await fetch("http://localhost:5000/api/v1/add-to-cart" ,{
    //     method: "POST",
    //     headers: { "Content-Type":"application/json"

    //     },
    //     body: JSON.stringify({id})
    //   });
    //   alert ("Added to cart Sucessfully")
    // }

    const handleAddToCart = async () => {
  try {
    const response = await axios.post("https://foodmarketbackend.onrender.com/api/v1/add-to-cart", {
      userId: id._id,
      productId: id._id, 
      quantity: 1
    });

    console.log("Cart added", response.data);
  } catch (error) {
    console.error("Add to cart failed:", error.response?.data || error.message);
  }
};




    useEffect(() => {
        const fetchitem = async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/fetch/blog/${id}`);
            setItem(res.data);
        };
        fetchitem();
    }, [id]);
    if (!item) return <p className='text-center'>Loading...</p>



  const toggleMore = () => setShowMore((prev) => !prev);

  return (
    <div className="min-h-screen bg-orange-50 p-4 sm:p-10 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Product Image */}
        <div className="p-6 bg-orange-100 flex items-center justify-center">
          <img
            src={item.image}
            alt="Food Item"
            className="w-full max-h-96 object-cover rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Spicy Veggie Burger</h1>
            <div className="flex items-center gap-1 text-yellow-500 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
              ))}
              <span className="text-sm text-gray-600 ml-2">(98 ratings)</span>
            </div>
            <p className="text-2xl text-green-600 font-semibold mt-3">{'\u20B9'} {item.price}</p>

            {/* Short Description */}
            <p className="text-gray-600 mt-3">
              A juicy veggie patty layered with crispy lettuce, spicy mayo, and fresh buns.
            </p>

            {/* Show More Button */}
            <button
              className="mt-4 text-sm text-orange-600 flex items-center font-semibold hover:underline"
              onClick={toggleMore}
            >
              <Info className="w-4 h-4 mr-1" />
              {showMore ? "Hide details" : "More details"}
              {showMore ? <ArrowUp className="ml-1 w-4 h-4" /> : <ArrowDown className="ml-1 w-4 h-4" />}
            </button>

            {/* More Details Section */}
            {showMore && (
              <div className="mt-4 text-sm text-gray-700 space-y-2 animate-fadeIn">
                <p><strong>Ingredients:</strong> Wheat bun, veg patty, lettuce, tomato, mayo, spices.</p>
                <p><strong>Calories:</strong> 330 kcal per serving</p>
                <p><strong>Delivery:</strong> 20-30 mins</p>
                <p><strong>Allergens:</strong> Contains gluten, soy</p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button onClick={() => handleAddToCart(id)}className="bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-700 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Add to Cart
            </button>
            <button className="bg-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-orange-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
