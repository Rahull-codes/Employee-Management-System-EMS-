import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData , setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [asignto, setAsignto] = useState("")
    const [category, setCategory] = useState("")

    // const [newTask, setNewTask] = useState({})
    
    const submitHandler = (e) =>{

        e.preventDefault()

        // setNewTask({taskTitle , taskDate ,taskDescription ,category ,active:false , newTask:true , failed:false , completed:false})
        
        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
          };
          
        const data = userData

        data.forEach(function(elem) {
            if(asignto === elem.firstName){
                elem.tasks.push(newTask),
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1 
            }
        })
        setUserData(data)
        console.log(data)

        setAsignto('')
        setCategory('')
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
    }

  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit = {(e) =>{
            submitHandler(e)
        }}className='flex flex-wrap w-full items-start justify-between p-5'>
            <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm font-semibold text-gray-300 mb-0.5 '>Task  Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e) =>{
                            setTaskTitle(e.target.value)
                        }}
                        required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" name="taskTitle" placeholder="Enter task title"/>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-gray-300 mb-0.5 ' >Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e) =>{
                            setTaskDate(e.target.value)
                        }}
                        required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" placeholder='DD/MM/YY' />    
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-gray-300 mb-0.5 '>Asign to</h3>
                        <input 
                        value={asignto}
                        onChange={(e) =>{
                            setAsignto(e.target.value)
                        }}
                        required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name' />
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-gray-300 mb-0.5 ' >Category</h3>
                        <input
                        value={category}
                        onChange={(e) =>{
                            setCategory(e.target.value)
                        }}
                        required className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design,Dev,etc..' />    
                    </div>
            </div>
            
            <div className='w-2/5 flex flex-col items-start' >
                <h3 className='text-sm font-semibold text-gray-300 mb-0.5'>Task Description</h3>
                <textarea  
                value={taskDescription}
                onChange={(e) =>{
                    setTaskDescription(e.target.value)
                }}
                required className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" placeholder="Enter task description"></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full font-semibold'>Create Task</button>
            </div>
            
        </form>
      </div>
  )
}

export default CreateTask
