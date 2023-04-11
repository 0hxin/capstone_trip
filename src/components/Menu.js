import React, {useState} from 'react'
import styles from "./MenuSt.css"
import {BiTrip, BiBookmarks, BiLike} from "react-icons/bi"
import {TbAirBalloon} from "react-icons/tb"
import {BsPeople} from "react-icons/bs"
import { Link } from 'react-router-dom'

function Menu(props) {
  return (
    <div className='MenuBar'>
        <div style={{marginTop:'20px'}}>
            <Link to="/travel">
                <TbAirBalloon className={`MenuBtn ${props.name === 'travel' ? 'active' : ''}`} id="Travel"  title='여행지 찾기'/>
            </Link>
        </div>

        <div style={{marginTop:'100px'}}>
            <Link to="/path">
                <BiTrip className={`MenuBtn ${props.name === 'path' ? 'active' : ''}`} id="Path" title='경로 찾기'/>
            </Link>
        </div>

        <div style={{marginTop:'180px'}}>
            <Link to="/bookMark">
                <BiBookmarks className={`MenuBtn ${props.name === 'bookmark' ? 'active' : ''}`} id="BookMark" title='북마크'/>
            </Link>
        </div>

        <div style={{marginTop:'260px'}}>
            <Link to="/friend">
                <BsPeople className={`MenuBtn ${props.name === 'friend' ? 'active' : ''}`} id="friend" title='친구와 일정 공유'/>
            </Link>
        </div>

        <div style={{marginTop:'340px'}}>
            <Link to="/hotTravel">
                <BiLike className={`MenuBtn ${props.name === 'hotTravel' ? 'active' : ''}`} id="hotTravel" title='인기 여행지'/>
            </Link>
        </div>
    </div>
  )
}
export default Menu;