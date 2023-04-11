import React from 'react'
import Baner from './Baner';
import Search from './Search';
import Menu from './Menu';

function Path() {
  return (
    <div className='Page'>
      <Baner />
      <Search/>
      <Menu name="path"/>
    </div>
  )
}

export default Path;