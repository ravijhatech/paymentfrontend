import React, { useEffect, useState } from 'react'
import Card from '../componets/Card'
import img from '../assets/Images/vegitable.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Vegitable() {
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
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Vegitable" buybtn="Buy" addtocardbtn="Checkout" />

        </div>

    )
}

export default Vegitable