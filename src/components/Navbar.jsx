import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { toggleForm } from './../features/userSlice/userSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const { currentUser} = useSelector(({ user }) => user)

  const handleClick = () => {
    if(!currentUser) dispatch(toggleForm(true))
  }

  return (
    <div>
      <div onClick={handleClick}>23</div>
    </div>
  )
}

export default Navbar