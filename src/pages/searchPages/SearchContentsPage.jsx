import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../searchPages/SearchContentsPage.css'
function SearchContentsPage() {
  const {text}=useParams();
  const [searchResult,setSearchResult]=useState([]);
  console.log(text)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    const resultData = async()=>{
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/news/find/search`,{
          keyword: text
        
      })
      console.log(response.data.data)
      setSearchResult(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }
    resultData(text)
  
  },[text])
  console.log(searchResult)
  return (
    <>
        <section className="search">
        <header className="posts-head">
          <h1>
            <span style={{color:"rgb(153, 153, 153)"}}>{text}</span>
            의 검색 결과예요.
          </h1>
          <span className="status"><span role="img" aria-label="">🦔</span>고슴이: {searchResult.length}개 찾았슴!</span>
          <div className="sorting"><button className="sorting-button is-active" type="button">최신순</button></div>
          </header>
          <div className="posts">
          {searchResult.map(news=>(
          <a className="card" href="">
          <div className="card-inner">
          <figure className="card-thumbnail"><img src={news.image} alt="" loading="lazy"/></figure>
          <div className="card-body"><h3 className="card-title">{news.title}</h3><time className="card-date">{news.date}</time>&nbsp;<i className="card-category">{news.category}</i></div></div></a>
          ))}
          </div>
          
          
        </section>
      
      <aside className='footer-statics'>
            <p>
                <span className='mobile-block'>
                    오늘까지&nbsp;
                    <b>
                        588회 &nbsp;
                    </b>
                    뉴스레터를 발행했고
                </span>
                <b>579,432</b>명이&nbsp;
                구독했어요!
            </p>
                <img src='/img/sub1.png'/>
            </aside>
            <nav class="bottombar" >
            <a class="" href="/">
            <span role="img" aria-label="" class="emoji">🏠</span><span>홈</span></a>
            <a class="" href="/search"><span role="img" aria-label="" class="emoji">🔍</span><span>검색</span></a>
            <a class="" href="/profile"><span role="img" aria-label="" class="emoji">🙍</span><span>마이페이지</span>
            </a></nav>
            
    </>
  );
}

export default SearchContentsPage;
