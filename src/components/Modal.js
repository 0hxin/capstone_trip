import React, {useState} from "react";
import styles from "./MDesign.css";

function Modal({isOpen, closeModal}){
    const [id, setId] = React.useState("");
    const [name, setName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checkPassword, setcheckPassword] = React.useState("");

    //오류 메시지
    const [idMessage, setIdMessage] = React.useState("");
    const [nameMessage, setNameMessage] = React.useState("");
    const [passwordMessage, setPasswordMessage] = React.useState("");
    const [checkPasswordMessage, setCheckPasswordMessage] = React.useState("");

    //유효성 검사
    const [isId, setIsId] = React.useState(false);
    const [isname, setIsName] = React.useState(false);
    const [isPassword, setIsPassword] = React.useState(false);
    const [isCheckPassword, setIsCheckPassword] = React.useState(false);

    //최종
    const [isInputPassed, setIsInputPassed] = React.useState(false);
    // function ActiveSingUp(){
    //     if(isInputPassed === true){
    //         console.log(id) //DB 연동하면 넣을 자리
    //         console.log(password) //DB연동하면 넣을 자리
    //         console.log(name) //DB 연동하면 넣을자리
    //         window.confirm("가입완료")
    //         closeModal()
    //         onReset()
    //     }
    //     else{
    //         window.confirm("양식에 맞는 정보를 입력해주세요.")
    //     }

    // }
    function SignUp(){
        if(isId===true && isname===true && isPassword === true && isCheckPassword === true){
            // //console.log(id) //DB 연동하면 넣을 자리
            // // console.log(password) //DB연동하면 넣을 자리
            // // console.log(name) //DB 연동하면 넣을자리
            setIsInputPassed(true)
        } //회원가입 완료
        else{
            setIsInputPassed(false)
        }
    } //회원가입 버튼


    function onReset(){
        setId("")
        setName("")
        setPassword("")
        setcheckPassword("")
        setIdMessage("")
        setNameMessage("")
        setPasswordMessage("")
        setCheckPasswordMessage("")
        setIsId("")
        setIsPassword("")
        setIsCheckPassword("")
    } //input reset

    //아이디
    function onChangeId(e){
        const currentId = e.target.value;
        setId(currentId);
        const idRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/
        if (!idRegExp.test(currentId)){
            setIdMessage("영문 대소문자, 숫자를 혼합하여 4~12자로 입력해주세요.");
            setIsId(false)
        } else{
            setIdMessage("사용 가능한 아이디 입니다.");
            setIsId(true);
        }
    };

    //이름
    function onChangeName(e){
        const currentName = e.target.value;
        setName(currentName);

        if(currentName.length < 2 || currentName.length > 5){
            setNameMessage("이름은 2~5자로 입력해주세요.");
            setIsName(false);
        }else{
            setNameMessage("올바른 이름 형식입니다.");
            setIsName(true);
        }
    };

    //비밀번호
    function onChangePassword(e){
        const currentPassword = e.target.value;
        setPassword(currentPassword);
        const passwordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/
        if(!passwordRegExp.test(currentPassword)){
            setPasswordMessage("영어 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요.");
            setIsPassword(false);
        } else{
            setPasswordMessage("안전한 비밀번호 입니다.");
            setIsPassword(true);
        }
    };
    //비밀번호체크
    function onChangeCheckPassword(e){
        const currentCheck = e.target.value;
        setcheckPassword(currentCheck);
        if(!isPassword){
            setCheckPasswordMessage("영어 대소문자, 숫자를 혼합하여 8~20자로 입력해주세요.");
            setIsCheckPassword(false);
        } else{
            if(currentCheck !== password){
                setCheckPasswordMessage("비밀번호가 다릅니다.");
                setIsCheckPassword(false);
            } else{
                setCheckPasswordMessage("비밀번호가 같습니다.");
                setIsCheckPassword(true);
            }
        }
    };

    return(
        <div style={{display: isOpen ? "block" : "none"}}>
            <div className="Modal">
            </div>
            <div className="ModalBody">
                <div style={{marginBottom : '10px' ,marginTop: '-18px'}}>
                    <img src="./image/타이틀.png" style={{width:'260px', marginLeft : '5px'}}></img>
                    <p className="FontCafe" style={{fontSize : '18px', marginTop : '-2px'}}>
                        환영해요, Happy Trip!
                    </p>
                </div>
                <p id="FontSize" style={{float : 'left'}}>아이디</p>
                <input type="text" id="inDesign" name='id'
                    value={id} onChange={onChangeId}></input>
                {
                    isId === true
                    ?<p className="message">{idMessage}</p>
                    : <p className="messageError">{idMessage}</p>
                }

                <p id="FontSize" style={{float : 'left'}}>비밀번호</p>
                <input type="text" id="inDesign" name='password'
                    value={password} onChange={onChangePassword}></input>
                {
                    isPassword === true
                    ?<p className="message">{passwordMessage}</p>
                    : <p className="messageError">{passwordMessage}</p>
                }

                <p id="FontSize" style={{float : 'left'}}>비밀번호 확인</p>
                <input type="password" id="inDesign" name='checkPassword'
                    value={checkPassword} onChange={onChangeCheckPassword}></input>
                {
                    isCheckPassword === true
                    ?<p className="message">{checkPasswordMessage}</p>
                    : <p className="messageError">{checkPasswordMessage}</p>
                }

                <p id="FontSize" style={{float : 'left'}}>이름</p>
                <input type="text" id="inDesign" name='name'
                    value={name} onChange={onChangeName}></input>
                {
                    isname === true
                    ?<p className="message">{nameMessage}</p>
                    : <p className="messageError">{nameMessage}</p>
                }

                <button type='button' id="ModalSingUpBtn"
                    onClick={()=>SignUp()}>Sign Up</button>

                <button id="ModalCloseBtn" onClick={()=> { closeModal(); onReset();}}>Close</button>
            </div>
        </div>
    );
}

export default Modal;