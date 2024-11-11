import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData , setUserData] = useContext(AuthContext)

  return (
    <div   className='bg-[#1c1c1c] p-5 rounded mt-5 '>
       <div className='bg-sky-600  mb-2  py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 font-bold'>Employee Name</h2>
          <h3 className='w-1/5 font-bold'> New Task</h3>
          <h5 className='w-1/5 font-bold'>Active </h5>
          <h5 className='w-1/5 font-bold'>Completed </h5>
          <h5 className='w-1/5 font-bold'>Failed</h5>
        </div>
        <div  className=''>
        {userData.map(function (elem ,idx) {
          return <div key={idx} className='bg-[#f0f9ffc9]  mb-2  py-2 px-4 flex justify-between rounded'>
          <h2 className='w-1/5 font-semibold text-[#111827]'>{elem.firstName}</h2>
          <h3 className='w-1/5 font-semibold text-[#111827] '>{elem.taskCounts.newTask}</h3>
          <h5 className='w-1/5 font-semibold text-[#111827] '>{elem.taskCounts.active}</h5>
          <h5 className='w-1/5  font-semibold text-green-700'>{elem.taskCounts.completed} </h5>
          <h5 className='w-1/5 font-semibold text-[#df3838] '>{elem.taskCounts.failed} </h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask
