import React from 'react'

const NewTask = ({data}) => {
  return (
    <div>
      <div className=' flex-shrink-0 flex-nowrap h-full w-[340px] bg-gray-600 rounded-xl ml-3 p-5 '>
      <h1 className='flex text-center justify-center mb-2 font-semibold'>New Task</h1>
            <div className='flex items-center justify-between '>
                <h3 className='bg-red-600 text-xs px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h1 className='font-semibold text-2xl mt-5 text-'>{data.taskTitle}</h1>
            <p className='text-sm mt-2'>{data.taskDescription}
            </p>
            <div className='mt-4'> 
                <button className='bg-green-500 p-2 text-sm mr-5 rounded'>Accept Task</button>
            </div>
      </div>
    </div>
  )
}

export default NewTask
