import React from 'react'
import Baner from './Baner';
import Search from './Search';
import Menu from './Menu';

function Friend() {
  return (
    <div className='Page'>
      <Baner />
      <Search/>
      <Menu name="friend"/>
    </div>
  )
}
export default Friend;