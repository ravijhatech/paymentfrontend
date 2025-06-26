import React, { useEffect, useState } from 'react'
import Card from '../componets/Card'
import img from '../assets/Images/download.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Fruit() {

        const [item , setItem] =useState([]);
        const navigate = useNavigate();
    
        useEffect(()=>{
            const fetchitem = async ()=>{
                const res = await axios.get("https://foodmarketbackend.onrender.com/api/v1/fetch/blog");
                setItem(res.data);
            };
            fetchitem();
        },[]);
    


    return (

        <div className='pt-24 flex flex-wrap gap-4'>
           {
                item.map((item ,index) =>(
                     <Card key={index} onClick={() => navigate(`/itemDetails/${item._id}`)} price={item.price} src={img} productName={item.productname} buybtn="Buy Now" addtocardbtn="Checkout" />

                ))
            }

        </div>

    )
}

export default Fruit