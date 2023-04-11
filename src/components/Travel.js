import React from 'react'
import Baner from "./Baner";
import Search from "./Search";
import Menu from './Menu';
function Travel() {
  return (
    <div className='Page'>
      <Baner />
      <Search/>
      <Menu name="travel"/>
    </div>
  )
}

export default Travel;