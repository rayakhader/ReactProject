import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {BsFillTrashFill } from 'react-icons/bs';

export default function Pagedetails() {
     const [visible, setVisible] =useState(true)
     const [data,setData]= useState(null);
     const {pageTitle} =useParams();
     useEffect(()=>{
      fetch('http://localhost:4000/pages')
      .then(response => response.json())
      .then(result=> setData(result))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
     },[])
     if(data!==null){
     const filterData =data.filter(element => element.title==pageTitle);
     return (
        <div className='content'>
            <nav>
                <p>{filterData[0].title}<span className='icon'><BsFillTrashFill /></span></p>
                <p>{filterData[0].details}<span className='date'>{filterData[0].date}</span></p>
            </nav> 
            <p>{filterData[0].content}</p>
        </div>
     )

    }
}
