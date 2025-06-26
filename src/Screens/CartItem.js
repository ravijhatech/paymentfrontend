import React, { useEffect, useState } from 'react'
import Card from '../componets/Card'
import img from '../assets/Images/food.jpg'
import { useParams } from 'react-router-dom';

function CartItem({product,userId}) {
    const [ item ,setItem] = useState([]);
    const { id } = useParams();
    console.log(product);
    console.log(userId);
    

    const getCart = async ()=>{
        const res = await fetch("http://localhost:5000/api/v1/get-cart-item");
        const data = await res.json();
        setItem(data)
    }

    const removeItem = async ()=>{
        await fetch(`http://localhost:5000/api/v1/delete-cart-item/${id}`,{
            method:"DELETE"
        });
        getCart();
    };
    useEffect(()=>{
        getCart();
    },[]);

    // const totalAmount = item.reduce((acc,item)=> acc + (item.productId.price * item.quantity),0);



    return (
        <div className='pt-24 flex flex-wrap gap-4'>
            {
                item.map((item,index)=>(
                    //  <Card price={item.price} src={item.image} productName={item.productname} buybtn="Buy" addtocardbtn="Remove"/>
                    <div key={index}>
                        <h1>{item.quantity}</h1>
                      <h1>{item.length}</h1>
                    </div>

                ))
            }
           
            {/* <div>
                <h2> Total Amount :{totalAmount}</h2>
            </div> */}
           
        </div>

    )
}

export default CartItem
