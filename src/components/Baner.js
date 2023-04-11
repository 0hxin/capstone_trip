import React from "react";
import styles from "./Design.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"
import { GoLocation } from "react-icons/go"

function Baner(){
    function LocatClick(){
        // console.log("위치 눌렀어용")
    }
    return(
        <div style={{backgroundColor:'white'}}>
            <div className="header">
                <div style={{float : 'left', marginTop : '60px', marginLeft : '10px'}}>
                    <GoLocation size='25' className="LocatBtn" id="locat"
                    data-tooltip-id="LocateTool" data-tooltip-content="위치 설정" onClick={LocatClick}/>
                    <ReactTooltip id="LocateTool" className="FontNanum"
                    style={{backgroundColor:'white', color:'black', fontSize:'13px'}}/>
                </div>
                <div style={{float : 'left', marginTop : '60px', marginLeft : '5px'}}>
                    <label className="FontNanum" style={{fontSize : '15px'}}>현재 위치 : </label>
                </div>
                <div style={{float : 'right', marginTop : '10px'}}>
                    <img src="../../image/타이틀.png" style={{width : '350px', marginBottom : '20px'}}/>
                </div>
            </div>
            <div style={{paddingTop : '100px'}}>
                <div className="line" style={{marginBottom: '25px'}}></div>
            </div>
        </div>
    )
}

export default Baner;