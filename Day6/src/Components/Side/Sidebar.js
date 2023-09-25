import React from 'react'
import './sidebar.css';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlinePolicy } from 'react-icons/md';
import { MdHelp } from 'react-icons/md';
import { MdPolicy } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import Navbar from '../Navbar';
import Footer from '../Footer';
 function Sidebar() {
  return (
    <div>
        <Navbar/>
    <div className="sidebar">
      <div className="logo">
      </div>
      <div>
  <a href="/dashboard"><LuLayoutDashboard className='syn'/>dashboard</a>
</div>
<div>
  <a href="/Help"><MdHelp className='syn'/>Help</a>
</div>
<div>
  <a href="/services"><FcAbout className='syn'/>About</a>
</div>
<div>
  <a href="/Policy"><MdPolicy className='syn'/>Policy</a>
</div>
<div>
  <a href="/Faq"><MdPolicy className='syn'/>Faq</a>
</div>
    </div>
    <Footer/>
    </div>
  )
}
export default  Sidebar;

