import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useState,useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UseAuth } from '../context/AuthContex';
import { db } from '../firebase';
import {AiOutlineClose} from 'react-icons/ai'

const Faverate = () => {
    const [movies,setMovies]=useState([]);
    const { user } = UseAuth();
  
    const slideLeft =()=>{
        var slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft -500
      };
      const slideRight =()=>{
        var slider=document.getElementById('slider');
        slider.scrollLeft=slider.scrollLeft + 500
      };

      useEffect(()=>{
        onSnapshot(doc(db,'users', `${user?.email}`),(doc)=>{
          setMovies(doc.data()?.savedShows);
          
        })
      },[user?.email])

      const movieRef=doc(db,'users',`${user?.email}`);
      const deleteShows= async(passadID)=>{
        try {
          const result=movies.filter(item=>item.id !== passadID);
          await updateDoc(movieRef,{
            savedShows:result
          })
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <>

    <h2 className='text-white font-bold md:text-xl p-4'>My shows</h2>
  <div className="className='relative flex items-center group">
<MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer zIndex z-10 hidden group-hover:block'
          size={40}/>
<div id="slider" className="w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap overflow-hidden">
    {
        movies.map((item,id)=>(
            <div className='w-[50%] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ' key={id}>
            <img
              className='w-full h-auto block'
              src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
              alt={item?.title}
            />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-1 text-white movieHover'>
              <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                {item?.title}
              </p>
              <p onClick={()=>deleteShows(item.id)} className='absolute top-4 right-4 text-gray-300'>
               <AiOutlineClose />
              </p>
            </div>
          </div>
        ))
    }
</div>
<MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}/>
  </div>
</>
  )
}

export default Faverate