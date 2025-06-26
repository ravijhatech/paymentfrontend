import React, { useEffect, useState } from 'react'
import Card from '../componets/Card'
import img from '../assets/Images/food.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Food() {
    const [item , setItem] =useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchitem = async ()=>{
            const res = await axios.get("http://localhost:5000/api/v1/fetch/blog");
            setItem(res.data);
        };
        fetchitem();
    },[]);


    return (

        <div className='pt-24 flex flex-wrap gap-4'>
            {
                item.map((item ,index) =>(
                     <Card key={index} onClick={() => navigate(`/itemDetails/${item._id}`)} price={item.price} src={item.image} productName={item.productname} buybtn="Buy" addtocardbtn="Checkout" />

                ))
            }

        </div>

    )
}

export default Food