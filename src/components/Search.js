import React from "react";
import styles from "./Design.css";
import {BsSearch} from "react-icons/bs"

function Search() {

  function Click(){
    // console.log('눌렀어용') //버튼 누르면 구현될 곳
  }
  return (
    <div>
        <input className="inputFind" type="text" style={{textAlign : 'center'}}
        placeholder="Happy, Trip!"></input>
        <BsSearch size='23' onClick={Click} className="SearchBtn" style={{marginTop : '1px'}}/>
    </div>
  )
}

export default Search