//  import Modal from 'react-modal'
import React, {useState} from 'react'
import Modal from "./Modal"
import styles from "./Start.css"

function StartPage(props) {
  const [isModalopen, setModalIsOpen] = useState(false);
  function openModal(){
    setModalIsOpen(true)
  }
  function closeModal(){
    setModalIsOpen(false)
  } //회원가입

  const [id, setId] = React.useState("")
  const [pw, setPw] = React.useState("")

  const [isid, setisId] = React.useState(false)
  const [ispw, setisPw] = React.useState(false)

  function onChangeId(e){
    const currentId = e.target.value;
    setId(currentId);
    const idRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/

    if (!idRegExp.test(currentId)){
        setisId(false)
    } else{
        setisId(true);
    }
  };

  function onChangePassword(e){
    const currentPassword = e.target.value;
    setPw(currentPassword);
    const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
    if(!passwordRegExp.test(currentPassword)){
        setisPw(false);
    } else{
        setisPw(true);
    }
  };

  function PageMove(){
    if(isid === true && ispw === true){
      window.location.href = "/main"
    }
  }

  return (
    <div>
      <div style={{marginTop : '80px'}}>
        <img src="image/타이틀.png" style={{width : '700px'}}/>
      </div>
      <div className='FontPre' style={{marginTop : '10px'}}>
        <label style={{fontSize : '30px'}}>지금, 당신의 </label>
        <label style={{fontSize : '30px', color :'#2b9cfe'}}>여행</label>
        <label style={{fontSize : '30px'}}>이 시작됩니다.</label>
      </div>
      <div>
        <input type="text" className='inputCircle' placeholder='  ID' name='id' value={id} onChange={onChangeId}
        style={{marginTop: '80px', width:'400px', height: '35px', fontSize : '15px'}}></input><br></br>

        <input type="password" className='inputCircle' placeholder='  PassWord' name='pw' value={pw} onChange={onChangePassword}
        style={{marginTop : '15px', width:'400px', height: '35px', fontSize : '15px'}}></input><br></br>

        <div style={{marginTop : '30px', textAlign : 'center'}}>
          <button className='btn_one' disabled={!(isid === true && ispw === true)} onClick={PageMove}>
            로그인
          </button>
          <button className='btn_two' onClick={openModal}>
            회원가입
          </button>
          <Modal isOpen={isModalopen} closeModal={closeModal}></Modal>
        </div>
      </div>
    </div>
  )
}

export default StartPage;