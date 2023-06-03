import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleForm, toggleFormType } from './../features/userSlice/userSlice'

import { Auth, Register } from '../pages'

const UserForm = () => {
  const dispatch = useDispatch()
    const { showForm, formType } = useSelector(({ user }) => user)

    const closeForm = () => dispatch(toggleForm(false))
    
    const toggleCurrentFormType = (type) => {
      dispatch(toggleFormType(type))
    }

    return showForm ? (
      <>
        <div onClick={closeForm}/>
        {formType === 'login' ? <Auth closeForm={closeForm} toggleCurrentFormType={toggleCurrentFormType} /> : <Register toggleCurrentFormType={toggleCurrentFormType} closeForm={closeForm}/> }
      </>
    ) : (
      <></>
    )
}

export default UserForm