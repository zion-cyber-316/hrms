
import React from 'react'

import { AiFillAmazonCircle } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { FaBuilding, FaCalendar, FaMoneyBill, FaMoneyBillWave, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { useEffect } from 'react';


const SideBar = () => {

  const {user} = useAuth()
  useEffect(()=>{
    console.log(user._id)
  })

  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
      <div className='bg-teal-600 h-12 flex items-center justify-center'>
        <h1 className='text-2xl text-center'>Empolyee Ms</h1>
      </div>
      <div>
        
        <NavLink to="/employee-dashbord"
          className={({ isActive }) => `${isActive ? "bg-teal-500 " : " "}  flex items-center space-x-4 block py-2.5 px-4 rounded`}
          end>
          <FaTachometerAlt />
          <span>Dashbord</span>
        </NavLink>




       


    

         {user && user._id && (<NavLink to= {`/employee-dashbord/profile/${user._id}`}
          className={ ({ isActive }) => `${isActive ? "bg-teal-500 " : " "}   flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          <FaUsers />
          <span>My Profle</span>
        </NavLink>) }

    <NavLink to="/employee-dashbord/leaves"
          className={({ isActive }) => `${isActive ? "bg-teal-500 " : " "}  flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          <FaBuilding />
          <span>Leaves</span>
        </NavLink>
        







     


        <NavLink to={`/employee-dashbord/salary/${user._id}`}
           className={ ({ isActive }) => `${isActive ? "bg-teal-500 " : " "}   flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>


        
    <NavLink to="/employee-dashbord/purchase"
          className={({ isActive }) => `${isActive ? "bg-teal-500 " : " "}  flex items-center space-x-4 block py-2.5 px-4 rounded`}>
          < GiMoneyStack />
          <span> Purchase </span>
        </NavLink>
        





        <NavLink to="/employee-dashbord/setting"
          className="flex items-center space-x-4 block py-2.5 px-4 rounded">
          <FaTachometerAlt />
          <span>Setting</span>
        </NavLink>


      </div>
    </div>
   
  )
}

export default SideBar



































































































