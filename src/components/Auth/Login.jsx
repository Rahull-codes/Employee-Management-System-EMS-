import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email , password)
    setEmail('')
    setPassword('')
}

  return (
    <div className=' flex h-screen w-screen justify-center items-center '>
      <div className='neon-box p-20 rounded-2xl relative'>
        <div className="border-animation absolute inset-0 rounded-md pointer-events-none"></div>
            <form 
            onSubmit={(e) =>{submitHandler(e)}
            }
            className='flex flex-col justify-center '>
                <input 
                class="input" 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                // className='outline-none bg-transparent rounded-full border-2 border-emerald-600 text-balance  placeholder:text-gray-400 px-4 py-2' 
                type="email" required pattern=".+@.+\.com$"placeholder='Enter Email' />
               
                <input 
                class="input" 
                value={password}
                onChange={(e) =>{
                    setPassword(e.target.value)
                }}
                required
                // className='outline-none bg-transparent rounded-full border-2 border-emerald-600 text-balance  placeholder:text-gray-400 px-4 py-2 mt-4' 
                type='password' placeholder='Enter PassWord' />
                <button
                    className="bg-transparent text-center w-60 rounded-2xl h-14 relative text-white text-xl font-semibold group mt-5"
                >
                     <div
                    className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[230px] z-10 duration-500"
                      >
                      <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      height="25px"
                      width="25px"
                      >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </div>
  Log in </button>
            </form>
      </div>
    </div>
    
  )
}

export default Login
