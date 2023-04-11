import React from 'react'
import Baner from './Baner';
import Search from './Search';
import Menu from './Menu';

function Bookmark() {
  return (
    <div className='Page'>
      <Baner />
      <Search/>
      <Menu name="bookmark"/>
    </div>
  )
}
export default Bookmark;