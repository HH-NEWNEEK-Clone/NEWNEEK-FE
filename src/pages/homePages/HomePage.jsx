import React, { useState } from 'react'
import styled from 'styled-components'
import MainNavBar from '../../components/Common/MainNavBar';
import BottomApp from '../../components/Common/BottomApp';
import api from '../../apis/api';

function HomePage() {

    const [email, setEmail] = useState("");
    const [nickname, setNickname] = useState("");

    const [check, setCheck] = useState(false);
    const [check2, setCheck2] = useState(false);

    const postEmail = async() => {
        if(check && check2 === true){
            const newPost={
                email,
                nickname,
            }
            await api.post('api/news/sending/email', newPost)
            setEmail("")
            setNickname("")
            setCheck(false)
            setCheck2(false)

            alert("구독이 완료됐습니다.")
        } else{
            alert("정보 수집 및 수신에 동의해 주세요.")
        }
    }

    return (
        <>
            <BoxHeaderImg>
                <HeaderImg2>
                    <img src="/img/gosum-home.png" alt="main-img" />
                </HeaderImg2>
            </BoxHeaderImg>
            <HeaderForm>
                <HeaderTop>
                    <Title>우리가 시간이 없지,&nbsp;<div>세상이 안 궁금하냐!</div></Title>
                </HeaderTop>

                <HeaderBottom>
                    <HeaderImg>
                        <img src="/img/gosum-home.png" alt="main-img" />
                    </HeaderImg>

                    <HeaderInfo>
                        <HeaderText1>
                            🚀 지금 구독하면 <span style={{ fontWeight: 700 }}>내일 아침</span>에 읽을 수 있어요.
                            <br />
                            ✨지금 <span style={{ fontWeight: 700 }}>596,882명</span>이 뉴닉을 읽고 있어요.
                        </HeaderText1>
                        <HeaderText2>
                            세상 돌아가는 소식, 알고는 싶지만 신문 볼 새 없이 바쁜 게 우리 탓은 아니잖아요!
                            월/화/수/목/금 아침마다 세상 돌아가는 소식을 메일로 받아보세요.
                        </HeaderText2>

                        <BoxInput>
                            <Input
                            type="text" 
                            placeholder='이메일 주소' 
                            value={email}
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            
                            />
                            <Input 
                            type="text"
                            placeholder='닉네임' 
                            value={nickname}
                            onChange={(e)=>{
                                setNickname(e.target.value)
                            }}
                            
                            />
                            <BoxInput2>
                                <Input2 
                                type="checkbox" 
                                value={check}
                                onChange={(e)=> {
                                    setCheck(e.target.checked)
                                }}
                                />
                                &nbsp; <span style={{ textDecoration: "underline"}}>개인정보 수집·이용</span>에 동의합니다
                            </BoxInput2>
                            <BoxInput2>
                                <Input2 type="checkbox" 
                                value={check2}
                                onChange={(e)=> {
                                    setCheck2(e.target.checked)
                                }}
                                />
                                &nbsp; <span style={{ textDecoration: "underline"}}>광고성 정보 수신</span>에 동의합니다
                            </BoxInput2>
                            <Boxbutton>
                                <Button onClick={postEmail}>뉴스레터 무료로 구독하기</Button>
                                <Button2> <div>앱 다운로드하기</div><Arrow /> </Button2>
                            </Boxbutton>
                        </BoxInput>
                    </HeaderInfo>

                </HeaderBottom>
            </HeaderForm>
            {/* main nav 불러오기 */}
            <MainNavBar />
            {/* BottomApp 불러오기 */}
            <BottomApp />
        </>
    )
}

export default HomePage

const BoxHeaderImg = styled.div`
    display: none;
    width: 100%;
    height: 338px;
    position: relative;
    @media screen and (max-width: 980px){
        display: block;
        
    }
`

const HeaderImg2 = styled.div`
    position: absolute;
    bottom: -135px;
    left: 50%;
    width: 100%;
    max-width: 439px;
    transform: translateX(-50%);
`

const HeaderForm = styled.div`
    position: relative;
`

const HeaderTop = styled.div`
    width: 100%;
    padding: 1.5rem 0;
    border-bottom: 1px solid #051619;
    font-size: 3rem;
    letter-spacing: -.025rem;
    background-color: #eae7de;
    @media screen and (max-width: 980px) {
        border-top: 1px solid black;
        margin-top: 1.5rem;
        padding: .8rem 0;
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 1090px;
    padding: 0 5%;
    box-sizing: border-box;
    height: 100%;

    font-size: 38px;
    font-weight: 700;
    letter-spacing: -.025rem;

    @media screen and (min-width: 1090px){
        margin: 0px auto;
    }
    
    @media screen and (max-width: 980px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-size:21px;
        line-height: 30px;
    }
`

const HeaderBottom = styled.div`
    
    padding: 2rem 0 3rem;
    background: #ff6b00;
    box-sizing: border-box;

    @media screen and (max-width: 980px) {
        display: flex;
        
    }
`

const HeaderImg = styled.div`
    position: absolute;
    bottom: -8.3rem;
    left: 50%;
    width: 100%;
    max-width: 490px;
    margin-left: 50px;
    z-index: 1;

    @media screen and (max-width: 980px) {
        display: none;
    }
`

const HeaderInfo = styled.div`

    max-width: 1090px;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
    
    @media screen and (min-width: 1090px){
    margin: 0px auto;
    }
    @media screen and (max-width: 980px) {
    }

`

const HeaderText1 = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;

    @media screen and (max-width: 980px) {
        font-size: 13px;
    }
`
const HeaderText2 = styled.div`
    margin-top: 16px;
    max-width: 460px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    @media screen and (max-width: 980px) {
        font-size: 13px;
        max-width: 360px;
    }
`

const BoxInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    

    max-width: 411px;
    margin: 1.5rem 0 0;
    box-sizing: border-box;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 980px) {
        max-width: 360px;
    }
`
const Input = styled.input`
    display: block;
    width: 100%;
    padding: 13px 40px 13px 1.4rem;
    margin-bottom: 6px;

    border: 1px solid #051619;
    box-sizing: border-box;
    font: inherit;
    color: #051619;
    transition: all .2s;
    outline: none;
    box-shadow: none;

    
`

const BoxInput2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 13px;
    font-weight: 500;
    margin-top: 4px;

    @media screen and (max-width: 980px) {
        font-size: 13px;
    }
`
const Input2 = styled.input`
    width: 15px;
    height: 15px;
    border: 1px solid #051619;
    border-radius: none;
    box-sizing: border-box;

`
const Boxbutton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
`

const Button = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    width: 205px;
    height: 48px;
    text-align: center;
    border: 2px solid #051619;
    border-radius: 8px;
    box-sizing: border-box;

    color: #051619;
    background: #fff;

    margin-top: 30px;
    margin-right: 6px;
    padding-left: 5px;
    padding-right: 5px;

    font-size: 12px;
    font-weight: 600;

    &:hover{
        background-color: #051619;
        color: #fff;
    }
    
    @media screen and (max-width: 980px) {
        font-size: 11px;
        width: 180px;
        height: 45px;
    }
`

const Button2 = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 205px;
    height: 48px;
    text-align: center;

    border: 2px solid #051619;
    border-radius: 8px;
    box-sizing: border-box;
    color: #fff;
    background: #051619;

    margin-top: 30px;
    margin-right: 10px;
    padding-left: 5px;
    padding-right: 5px;

    font-size: 12px;
    font-weight: 600;
    letter-spacing: -.0128rem;

    &:hover{
        background-color: #fff;
        color: #051619;
    }

    @media screen and (max-width: 980px) {
        font-size: 11px;
        width: 180px;
        height: 45px;
    }
`

const Arrow = styled.div`
    position: relative;
    margin-left: 9px;
    border-top: .12rem solid #fff;
    width: 10px;
    height: 0px;
    &::after{
        position: absolute;
        left: 3px;
        top: -.34rem;
        content: '';
        width: 6px; 
        height: 6px;
        border-top: .13rem solid #fff;
        border-right: .13rem solid #fff;
        transform: rotate(405deg);
    }
`