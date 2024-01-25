import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import api from '../../apis/api'
import { useQuery } from 'react-query'

function MainNavBar() {

    //--------------------현재 URL------------------------//
    const curruntUrl = window.location.href

    //---------홈, 카테고리 데이터 받아오기 조건------------//
    const params = useParams()
    // console.log(params)
    
    const getMainData = async () => {
        if(Object.keys(params).length === 0){
            const response = await api.get('api/news')
            console.log(response.data)
            return response.data.data.news
        }
    }
    const mainData = useQuery('mainData', getMainData)

    const getCategoryData = async () => {
        if(Object.keys(params).length !== 0 ){
            const response = await api.get(`api/tag/${params.id}`)
            return response.data.data
        }
    }
    const categoryData = useQuery('categoryData', getCategoryData)

    const dataState = () => {
        return Object.keys(params).length === 0 ?  mainData.data : categoryData.data
        
    }


    //----------------------더보기-------------------------//
    const [count, setCount] = useState(12)

    const addCount = () => {
        setCount(count + 12)
        console.log(count)
    }

    //----------------------더보기-------------------------//
    const navigate = useNavigate();
    const detailPage = (id) => {
        navigate(`/detailpage/${id}`)
    }


    //------------------------title-----------------------//
    const title = () => {
        switch(params.id){
            case "politics":
                return "⚖️ 정치"
            case "economy":
                return "💰 경제"
            case "world":
                return "🌐 세계"
            case "tech":
                return "🤖 테크"
            case "labor":
                return "💪 노동"
            case "environment":
                return "🌱 환경"
            case "social-rights":
                return "🤝 인권"
            case "domestic-issue":
                return "👥 사회"
            case "culture":
                return "🎞 문화"
            case "life":
                return "🧘 라이프"
            default:
        }
    }

    return (
        <div>
            <MainNav>
                <MainNavInner>
                    <A href="/" selected={Object.keys(params).length === 0}><span>전체</span></A>
                    <A href="/tag/politics"selected={params.id === "politics"}><span>⚖️정치</span></A>
                    <A href="/tag/economy" selected={params.id === "economy"}><span>💰경제</span></A>
                    <A href="/tag/world" selected={params.id === "world"}><span>🌐세계</span></A>
                    <A href="/tag/tech" selected={params.id === "tech"}><span>🤖테크</span></A>
                    <A href="/tag/labor" selected={params.id === "labor"}><span>💪노동</span></A>
                    <A href="/tag/environment" selected={params.id === "environment"}><span>🌱환경</span></A>
                    <A href="/tag/social-rights" selected={params.id === "social-rights"}><span>🤝인권</span></A>
                    <A href="/tag/domestic-issue" selected={params.id === "domestic-issue"}><span>👥사회</span></A>
                    <A href="/tag/culture" selected={params.id === "culture"}><span>🎞문화</span></A>
                    <A href="/tag/life" selected={params.id === "life"}><span>🧘라이프</span></A>
                </MainNavInner>
            </MainNav>
            {
            curruntUrl !== "https://www.yeonz90s.site/" ?
            <CategryTitle>
            {title()}
            </CategryTitle>
            : ""
            }

            <MainBack>
                <MainContents>
                    {
                        dataState() &&
                        dataState().slice(0, count).map((item) => {
                            return (
                                <BoxContents key={item.newsId} onClick={()=>{detailPage(item.newsCode)}}>
                                    <Contents>
                                        <ContentsImg>
                                            <Img src={item.image} alt="image" style={{ objectFit: "cover" }} />
                                        </ContentsImg>
                                        <ContentsText>
                                            <ContentsText1>
                                                {item.title}
                                            </ContentsText1>
                                            <ContentsText2>
                                                {item.date} &nbsp;&nbsp;{item.category}
                                            </ContentsText2>
                                        </ContentsText>
                                    </Contents>
                                </BoxContents>
                            )
                        })
                    }
                </MainContents>
            </MainBack>
            <BoxBtn>
                <Button onClick={addCount}>더보기</Button>
            </BoxBtn>
        </div>
    )
}

export default MainNavBar


const MainNav = styled.div`
    background-color: #fff;
    position: sticky;
    top: 0px;
    z-index: 2;
    width: 100%;
    border-top: 1px solid #051619;
    border-bottom: 1px solid #051619;
    overflow: auto;
`

const MainNavInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    min-width: 810px;
`

const A = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    padding: 1.5rem 0;
    box-sizing: border-box;
    font-size: 1.02rem;
    font-weight: 500;
    color: #051619;
    cursor: pointer;
    &:hover{
        color: #ff6b00;
    }
    border-bottom: ${(props) => (props.selected ? ".25rem solid #051619" : "")};
`
///////////////////////////////////


const CategryTitle = styled.div`
    width: 90%;
    max-width: 1240px;
    box-sizing: border-box;
    margin: 0px auto;
    margin-top: 50px;
    margin-bottom: 35px;

    font-size: 25px;
    font-weight: 500;
    word-spacing: 8px;
`

const MainBack = styled.div`
    width: 100%;
    height: 100%;
    background-color: #eae7de;
    position: relative;
    z-index: 1;
`


const MainContents = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    border-left: 1px solid black;
    width: 90%;
    max-width: 1240px;
    box-sizing: border-box;
    margin: 0px auto;
    position: relative;
    

    @media screen and (min-width: 1230px){
        margin: 0px  auto;
    }
    @media screen and (max-width: 1230px){
        grid-template-columns: repeat(3, 1fr);
        width: 90%;
    }
    @media screen and (max-width: 820px){
        grid-template-columns: repeat(2, 1fr);
        width: 90%;
    }
    @media screen and (max-width: 655px){
        grid-template-columns: repeat(1, 1fr);
        width: 90%;
    }

`
const BoxContents = styled.div`
    display: flex;
    position: relative;
    border-color: rgb(5, 22, 25);
    border-right:1px solid black;
    border-bottom:1px solid black;
    border-top: 1px solid black;
`
const Contents = styled.div`
    width: 100%;
    /* border-right: 1px solid black; */
    box-sizing: border-box;
    background-color: #eae7de;
    &:hover{
        filter: grayscale(0);
        background-color: #fff;
    }
    cursor: pointer;
`
const ContentsImg = styled.div`

    padding-bottom: 75%;
    height: 0px;
    border-bottom: 1px solid rgb(5, 22, 25);
    border-radius: 0px;
    overflow: hidden;
    position: relative;
    
`
const Img = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100);
    &:hover{
        filter: grayscale(0);
        background-color: #fff;
    }
`
const ContentsText = styled.div`
    padding: 24px 25px;
    
`
const ContentsText1 = styled.div`
    font-size: 16px;
    margin-bottom: 13px;
    font-weight: 700;
`
const ContentsText2 = styled.div`
    font-size: 13px;
    font-weight: 400;
`

///////////////////////////////////////

const BoxBtn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;


`

const Button = styled.button`
    font-family: 'Noto Sans KR', sans-serif;
    width: 260px;
    height: 45px;
    text-align: center;
    border: 1px solid #051619;
    border-radius: 8px;
    box-sizing: border-box;

    color: #051619;
    background: #fff;

    margin-top: 25px;
    

    font-size: 13px;
    font-weight: 500;

    &:hover{
        background-color: #ff6b00;
        color: #fff;
    }
    cursor: pointer;
`