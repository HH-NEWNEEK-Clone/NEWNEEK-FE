import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <FooterForm>
            <FooterFormTop>
                <BoxLogo>
                    <img src="/img/logo.png" alt="logo" />
                </BoxLogo>
                <BoxLink>
                    <BoxLinkInner1>
                        뉴닉 커뮤니티
                        <br />
                        인스타그램
                        <br />
                        네이버 블로그
                        <br />
                        X
                    </BoxLinkInner1>
                    <BoxLinkInner2>
                        모두와 함께, 뉴닉
                        <br />
                        물물교환
                        <br />
                        여성의 날
                        <br />
                        2020 총선
                    </BoxLinkInner2>
                    <BoxLinkInner3>
                        서비스이용약관
                        <br />
                        개인정보처리방침
                        <br />
                        제휴 문의
                        <br />
                        고객센터
                    </BoxLinkInner3>
                </BoxLink>
            </FooterFormTop>
            <FooterFormBottom>
                ㈜뉴닉 / 대표: 김소연 / 사업자등록번호: 632-81-01159 / 대표전화: 02-6952-1807 / 통신판매번호: 2020-서울마포-2938 / 개인정보보호책임자: 김소연 / 담당자메일주소: whatsup@newneek.co
                <br />
                서울특별시 마포구 어울마당로 35, 5층 (04048)
                <br />
                근무시간이 일정하지 않아 전화대신 고객센터를 이용해주세요!
            </FooterFormBottom>
                <Corporation>
                ⓒ NEWNEEK Co., Ltd.
                </Corporation>
        </FooterForm>
    )
}

export default Footer

const FooterForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    margin: 0 auto;
    padding: 4rem 5% 6rem;
    background: #eae7de;
    border-top: 1px solid #051619;
    box-sizing: border-box;
    position: relative;
    z-index: 4;
    
`

const FooterFormTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    
    
    width: 100%;
`

const BoxLogo = styled.div`
    width: 185px;
`
const BoxLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    text-align: right;

    font-size: 13px;
    font-weight: 500;
    line-height: 2.4;
    gap: 80px;

`
const BoxLinkInner1 = styled.div`
`
const BoxLinkInner2 = styled.div`
`
const BoxLinkInner3 = styled.div`
`

const FooterFormBottom = styled.div`
    margin-top: 4rem;
    width: 100%;
    
    font-size: 13px;
    font-weight: 500;
    line-height: 1.8;
`

const Corporation = styled.span`
    margin-top: 18px;
    font-size: 11px;
    font-weight: 500;
`