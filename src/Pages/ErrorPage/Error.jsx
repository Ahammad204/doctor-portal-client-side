import React from 'react'
import error from "../../assets/icons/error.gif"
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className=' flex items-center justify-center '>
        <img className='w-96 h-96' src={error} alt="" /> <br /><br /> <br />
       
    </div>
    <div className=' flex items-center justify-center '>
    <button className="btn bg-amber-300 btn-xs items-center sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><NavLink to="/">Home</NavLink></button></div>
    </>
  )
}

export default Error