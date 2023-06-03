import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { loginUser } from '../features/userSlice/userSlice'

const Auth = ({closeForm,  toggleCurrentFormType }) => {

  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email:'',
    password:'',
  })
  const handleChange = ({ target: { value, name }}) => {
    setValues({...values,  [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isNotEmpty = Object.values(values).every((val) => val)
    if (!isNotEmpty) return
    dispatch(loginUser(values))
    closeForm()
  }
  return (
      <div class="w-full max-w-xs m-auto">
        <form 
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onChange={handleSubmit}
        >
    
          <div className='text-xl text-sky-500 mb-4'>Authorization</div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Your name
            </label>
            <input 
              value={values.email}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline' 
              type="email" 
              name='email'
              placeholder="Your name"
              required
            />
            
            <div className='mt-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' for='password'>
                Password
              </label>
              <input 
                value={values.password}
                onChange={handleChange}
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                type="password" 
                name='password'
                placeholder="Password" 
                required
              />
              
            </div>

            <div className='flex justify-between items-center'>
              <button 
                type='submit'
                onClick={handleSubmit}
                class="bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              >
                Log In
              </button>
              <a className='inline-block align-baseline font-bold text-sky-500 text-sm hover:text-sky-800 hover:duration-200'>
                Forgot a password?
              </a>
            </div>

            <div className='mt-6'>
              <button 
                onClick={() => toggleCurrentFormType('signup')}
                class="bg-gray-200 hover:bg-blue-600 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Haven't account? Sign in!
              </button>
            </div>
            
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 Kkirrin Frontend Developer. All rights reserved.
        </p>
    </div>
  )
}

export default Auth