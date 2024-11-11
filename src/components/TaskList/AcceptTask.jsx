import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
      <div className=' flex-shrink-0 flex-nowrap h-900 w-[340px] bg-cyan-700 rounded-xl ml-3 p-5 '>
                <h1 className='flex text-center justify-center mb-2 font-semibold'> Accepted Task </h1>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-xs px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h1 className='font-semibold text-2xl mt-5'>{data.taskTitle}</h1>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='flex justify-between  mt-10'>
                <button className='bg-green-500 py-1 px-2 text-sm mr-5 rounded'>Mark as Completed</button>
                <button className='bg-red-500 py-1 px-2 text-sm rounded '>Marks as Failed</button>
            </div>
      </div>
  )
}

export default AcceptTask
