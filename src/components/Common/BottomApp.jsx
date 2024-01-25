import React, { useState } from 'react'
import styled from 'styled-components'

function BottomApp() {
    const curruntUrl = window.location.href

    const [hover, setHover] = useState(false)
    const handleMouseOver = () => {
        setHover(true)
    }
    const handleMouseOut = () => {
        setHover(false)
    }

    const text = [
        "우리가 시간이 없지, 세상이 안 궁금하냐! 뉴닉탄생기 ✨",
        "퀴어 프렌들리한 팀을 위한 뉴닉 레인보우 가이드 🏳️‍🌈",
        "3월 8일에 업데이트된 뉴닉의 여성용어 가이드 🍞🌹",

    ]

    return (
        <div>
            {
                curruntUrl !== "https://www.yeonz90s.site/" ?
                    <Margin /> : ""
            }

            {
                curruntUrl === "https://www.yeonz90s.site/"?
                    <Form>
                        <FormTop>
                            <FormTopImg src="/img/banner-app.png" alt="app" />
                        </FormTop>
                        <FormBottom>
                            더 편하게 보고싶다면? 뉴닉 앱에서 만나요!
                            <Arrow />
                        </FormBottom>
                    </Form>
                    : ""
            }

            {
                curruntUrl === "https://www.yeonz90s.site/" ?
                    text.map((item, index) => {
                        return (
                            <FormBottom2 key={index}>
                                <div>
                                    {item}
                                </div>
                                <Arrow />
                            </FormBottom2>
                        )
                    }) : ""
            }


            <FormBottom3
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                {
                    hover ? (
                        <>
                            <FormBottom3Inner>
                                <Inner>
                                    {"뉴스레터 구독하기 ".repeat(30)}
                                </Inner>
                            </FormBottom3Inner>
                        </>
                    ) : (
                        <>
                            <FormBottom3Inner>
                                <div>
                                    오늘까지 <span style={{ fontWeight: 700 }}>588회</span> 뉴스레터를 발행했고 <span style={{ fontWeight: 700 }}>597,649명</span>이 구독했어요!
                                </div>
                            </FormBottom3Inner>
                            <Arrow />
                        </>
                    )
                }

            </FormBottom3>

        </div>
    )
}

export default BottomApp
const Margin = styled.div`
    width: 100%;
    height: 98px;
`


const Form = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 14rem 0 7.22rem;
    padding-top: 82px;
    border-top: 2px solid #051619;
    position: relative;
    cursor: pointer;
    background: #ff6b00;
    
    
`
const FormTop = styled.div`
    position: absolute;
    bottom: 55px;
    width: 280px;
    &:hover::after{
        content: "";
        display: block;
        position: absolute;
        top: 0px;
        right: 0;
        bottom: 0;
        left: 0;
        background: url(/img/banner-app-over.png) 50% no-repeat;
        background-size: contain;
        opacity: 1;
        transition: opacity 2s ease;
    }
`

const FormTopImg = styled.img`
    width: 100%;
`
const FormBottom = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 58px;
    border-top: 1px solid black;
    border-bottom: 2px solid black;
    background-color: #fff;

    font-size: 15px;
    font-weight: 600;
`
const FormBottom2 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0px 5%;
    height: 4.8rem;
    border-top: 1px solid black;
    box-sizing: border-box;

    font-size: 1.38rem;
    font-weight: 500;

    &:hover{
        background-color: #fff;
    }
    cursor: pointer;
`
const FormBottom3 = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0px 5%;
    height: 4.8rem;
    border-top: 1px solid black;
    box-sizing: border-box;

    font-size: 1.38rem;
    font-weight: 500;

    white-space: nowrap;
    overflow: hidden;

    
    cursor: pointer;
`
const FormBottom3Inner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    white-space: nowrap;

    width: 100%;
    height: 100%;
    &:hover{
        animation: marquee 30s linear infinite; 
        @keyframes marquee {
            from {
                transform: translateX(-50%);
            }
            to {
                transform: translateX(100%);
            }
        }
    }
`
const Inner = styled.div`
    margin: 0px 20px;
`


const Arrow = styled.div`
    position: relative;
    margin-left: 10px;
    border-top: .15rem solid #000;
    width: 60px;
    height: 0px;
    &::after{
        position: absolute;
        left: 41px;
        top: -9px;
        content: '';
        width: 15px; 
        height: 15px;
        border-top: .15rem solid #000;
        border-right: .15rem solid #000;
        transform: rotate(405deg);
    }
`