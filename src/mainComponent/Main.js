import React from 'react'
import Sidebar from './Sidebar'
import List from './List'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <div className='main'>
       <Sidebar />
       <List />
       <Outlet />
    </div>
  )
}
