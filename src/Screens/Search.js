import React, { useState } from 'react';
import { Data } from './Data';

function Search() {
    const [store , setStore] = useState(Data);
    const [data , setData] = useState("");

    const getData =(e) =>{
        setData(e.target.value);
    }
    const filterData=store.filter((currentValue)=>{
      
        
        return currentValue.name.toLowerCase().includes(data) 
    })
      console.log(filterData);


  return (
    <div style={{width:'600px',margin:'auto',padding:'12px',backgroundColor:'white',boxShadow:'0px 4px 4px 4px',marginTop:"44px"}}>
        <input style={{width:'80%',padding:'8px',fontSize:"19px",border:'2px solid'}} type='text' placeholder='Search...' onChange={getData}/>
        {
            filterData.map((item,index)=>{
                return(
                    <div key={index} >
                        <div style={{display:'flex',justifyContent:'space-around',marginTop:'18px',backgroundColor:'green',color:'red',fontSize:'50px',boxShadow:'0px 4px 4px 4px'}}>
                            <p>{item.name}</p>
                         <p>{item.email}</p>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Search