import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SearchContentsPage() {
  const {text}=useParams();
  const [searchResult,seSearchResult]=useState([]);
  console.log(text)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    const resultData = async()=>{
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/news/find/search`,{
        params:{
          keyword:text
        }
      })
      console.log(response)
    } catch (error) {
      
    }
  }
    resultData()
  
  },[text])

  return (
    <>
      <section className="search">
        <section className="search-result">
          <h1 className="search-h1" style={{fontSize:"2rem"}}>
            <span style={{color:"rgb(153, 153, 153)"}}>ㄹㅇㄴㄹ</span>
            관련된 이슈를 아직 다루지 않았어요!
          </h1>
          <div className="search-option">
            <h2 className="search-option-title">고슴이 추천 키워드</h2>
            <a className="search-option-item" href="/search/posts?keyword=이재명">
              이재명
            </a>
            <a className="search-option-item" href="/search/posts?keyword=경제">
              경제
            </a>
            <a className="search-option-item" href="/search/posts?keyword=러시아">
              러시아
            </a>
            <a className="search-option-item" href="/search/posts?keyword=인도">
              인도
            </a>
            <a
              className="search-option-item"
              href="/search/posts?keyword=방송통신위원회"
            >
              방송통신위원회
            </a>
          </div>
        </section>
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
            <nav className='bottombar'>
            <a href='/'>
                <span role="img" aria-label="" classname="emoji">🏠</span>
                <span>홈</span>
            </a>
            <a href='/searchpage' >
                <span role="img" aria-label="" classname="emoji">🔍</span>
                <span>검색</span>
            </a>
            <a href='/'>
                <span role="img" aria-label="" classname="emoji">🙍</span>
                <span>마이페이지</span>
            </a>
        </nav>
    </>
  );
}

export default SearchContentsPage;
