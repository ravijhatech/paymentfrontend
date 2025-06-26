import React from 'react'
import Card from '../componets/Card'
import img from '../assets/Images/spices.jpg'

function Spices() {
    return (

        <div className='pt-24 flex flex-wrap gap-4'>
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />
            <Card price="600" src={img} productName="Apple" buybtn="Buy" addtocardbtn="Checkout" />

        </div>

    )
}

export default Spices