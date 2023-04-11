import React from "react";
import Baner from "./Baner";
import Search from "./Search";
import {BiTrip, BiBookmarks, BiLike} from "react-icons/bi"
import {TbAirBalloon} from "react-icons/tb"
import {BsPeople} from "react-icons/bs"
import {Tooltip as ReactTooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';
import { Link } from "react-router-dom";

function Main(props) {
    return (
      <div className="Page">
        <Baner />
        <Search/>
        <div style={{marginTop : '250px', marginRight : '690px'}}>
          <Link to="/travel">
          <TbAirBalloon className="MainBtn" id="Travel" data-tooltip-id="TooTip"
          data-tooltip-content="여행지 찾기" />
          </Link>

          <Link to="/path">
          <BiTrip className="MainBtn" id="Path" data-tooltip-id="TooTip"
          data-tooltip-content="경로 찾기"
          style={{marginLeft : '135px'}}/>
          </Link>

          <Link to="/bookMark">
          <BiBookmarks className="MainBtn" id="BookMark" data-tooltip-id="TooTip" data-tooltip-content="북마크"
          style={{marginLeft : '270px'}}/>
          </Link>

          <Link to="/friend">
          <BsPeople className="MainBtn" id="friend" data-tooltip-id="TooTip" data-tooltip-content="친구와 일정 공유"
          style={{marginLeft : '405px'}}/>
          </Link>

          <Link to="/hotTravel">
          <BiLike className="MainBtn" id="hotTravel" data-tooltip-id="TooTip" data-tooltip-content="인기 여행지"
          style={{marginLeft : '540px'}}/>
          </Link>

          <ReactTooltip id="TooTip" className="FontNanum" style={{backgroundColor:'rgb(175, 175, 175)', color:'white', fontSize:'16px'}}/>
        </div>
      </div>
    )
  }

  export default Main;