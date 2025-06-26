import React, { useState } from 'react'
import Image from '../componets/Image'
import Label from '../componets/Label'
import { useNavigate } from 'react-router-dom';
import fruit from '../assets/Images/download.jpg'
import vegitable from '../assets/Images/vegitable.jpg'
import Spices from '../assets/Images/spices.jpg'
import softDrink from '../assets/Images/softdrink.jpg'
import Water from '../assets/Images/water.jpg'
import Food from '../assets/Images/food.jpg'
import breakfast from '../assets/Images/breakfast.jpg'
import Lunch from '../assets/Images/lunch.jpg'
import CarouselSlider from '../layouts/Caresoul_Slider';
import Footer from '../layouts/Footer';

function Home() {

   const navigate = useNavigate();
  return (
    <div>
      <CarouselSlider/>
    <Label/>
    <br/>
    <br/>
    <div className='flex flex-wrap  justify-between mb-40 '>
      
     <Image onClick={()=>navigate('/fruit')} text="Fruit" src={fruit} />
     <Image onClick={()=>navigate('/Vagetable')} text="Vagetable" src={vegitable}/>
     <Image onClick={()=>navigate('/Spices')} text="Spices" src={Spices}/>
     <Image onClick={()=>navigate('/softDrink')} text="Soft Drink" src={softDrink}/>
     <Image onClick={()=>navigate('/Water')} text="Water" src={Water}/>
    <Image text="Food" onClick={()=>navigate('/Food')} src={Food}/>
     <Image onClick={()=>navigate('/breakfast')} text="Break Fast" src={breakfast}/>
    <Image onClick={()=>navigate('/lunch')} text="Lunch" src={Lunch}/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home
