import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
    <div className=' flex-shrink-0 flex-nowrap h-900 w-[340px] bg-yellow-500 rounded-xl ml-3 p-5 '>
      <h1 className='flex text-center justify-center mb-2 font-semibold'>Failed Task</h1>
          <div className='flex items-center justify-between '>
              <h3 className='bg-red-600 text-xs px-3 py-1 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.taskDate}</h4>
          </div>
          <h1 className='font-semibold text-2xl mt-5'>{data.taskTitle}</h1>
          <p className='text-sm mt-2'>{data.taskDescription}</p>
          <div className='mt-8'> 
              <button className='bg-red-500 w-full rounded p-2'>Failed</button>
          </div>
    </div>
  </div>
  )
}

export default FailedTask
