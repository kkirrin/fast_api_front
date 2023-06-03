import React from 'react'

import { useState } from 'react'
import { useDispatch } from "react-redux"
import { registerUser } from './../features/userSlice/userSlice'

const Register = ({ closeForm, toggleCurrentFormType }) => {

  const dispatch = useDispatch()
  const [values, setValues] = useState({
    email:'',
    password:'',
  })
  // Функция set values in state
  const handleChange = ({ target: { value, name }}) => {
    setValues({ ...values, [name]: value});
  };
  // Отправка  
  const handleSubmit = (e) => {
    e.preventDefault()

    // Проверка, заполнили ли поля
    const isNotEmpty = Object.values(values).some((val) => !val)
    if(!isNotEmpty) return 
    dispatch(registerUser(values))
    closeForm()
  }

  return (
    <div class="w-full max-w-xs m-auto">
    <form 
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
      onClick={handleChange}
    >
      <div className='text-xl text-sky-500 mb-4'>Registration</div>
      <div className='mb-4'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Your email
        </label>
        <input 
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline' 
          id="email" 
          name='email'
          type="email" 
          value={values.email}
          autoComplete='off'
          onChange={handleChange}
          required
          placeholder="Your email" />
        
        <div className='mt-6'>
          <label className='block text-gray-700 text-sm font-bold mb-2' for='password'>
            Password
          </label>
          <input 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            name='password'
            autoComplete='off'
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            
           />
        </div>

        <div className='flex justify-between items-center'>
          <button 
            type='submit'
            onClick={handleSubmit}
            class="bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
          >
            Sign In
          </button>
        </div>

        <div className='mt-6'>
          <button 
            onClick={() => toggleCurrentFormType('login')}
            class="bg-gray-200 hover:bg-blue-600 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button">
              Have account? Login!
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

export default Register