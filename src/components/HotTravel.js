import React from 'react'
import Baner from './Baner';
import Search from './Search';
import Menu from './Menu';

function HotTravel() {
  return (
    <div className='Page'>
      <Baner />
      <Search/>
      <Menu name="hotTravel"/>
    </div>
  )
}
export default HotTravel;