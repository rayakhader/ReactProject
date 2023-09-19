import React from 'react'
import { MdEdit } from 'react-icons/md';
import { BsInboxFill, BsSend, BsFillTrashFill } from 'react-icons/bs';
import { BiSolidEdit } from 'react-icons/bi';
function Sidebar() {
  return (
    <nav className='side-bar'>
       <span className='head'><p>Compose <span><MdEdit /></span></p></span>
       <div className='links'>
       <a href='#'><span><BsInboxFill /></span>Inbox<span className='num'>4</span></a>
       <a href='#'><span><BsSend /></span>Sent<span className='num'>0</span></a>
       <a href='#'><span><BiSolidEdit /></span>Drafts<span className='num'>0</span></a>
       <a href='#'><span><BsFillTrashFill /></span>Trash<span className='num'>3</span></a>
       </div>
    </nav>
  )
}

export default Sidebar