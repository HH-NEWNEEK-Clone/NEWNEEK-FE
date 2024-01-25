import React, { useEffect, useState } from "react";
import "../detailPages/DetailPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailPage() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isProgressBarFixed, setIsProgressBarFixed] = useState(false);
  const [getData, setGetData] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / scrollHeight) * 100;

      // 스크롤 진행 상태를 state에 업데이트
      setScrollPercentage(scrollPercentage);
      setIsProgressBarFixed(currentScroll > 5000);
    };

    const getNews = async (newsCode) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/news/${newsCode}`
        );
        const newsList = response.data.data;
        setGetData(newsList);

        // newsList.map(news => {
        //     // console.log(news.newsCode);
        //     setGetData(news.newsCode)
        // });
      } catch (error) {
        alert('error')
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", handleScroll);
    getNews(id);
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

//   useEffect(()=>{
//       console.log(getData)
//   },[getData])

  return (
    <>
      <div>
        <header className="Post-head">
          <a className="post-head-runninghead">{getData.category}</a>
          <h2 className="post-head-headline">{getData.title}</h2>
          <time className="post-head-date">{getData.date}</time>
          <div
            className={`progress-bar-container ${
              isProgressBarFixed ? "fixed" : ""
            }`}
          >
            <div
              className="progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            >
              <h2>{getData.title}</h2>
            </div>
          </div>
        </header>
        <div className="post-container">
          <div className="post-featured">
            <img src={getData.image} alt="" />
          </div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: getData.content }} key={getData.newsId}></div>
          <div class="footnote">이미지: ⓒ뉴스1</div>

          <section className="post-hashtag">
          {getData.hashTag?.map(ietm =>(
            <a key={ietm.index} className="post-hashtag-item" href="/">
              {ietm}
            </a>))}
          </section>

          <footer className="post-foot">
            <div className="post-foot-reaction ">
              <button className="post-foot-reaction-button">
                <span role="img" aria-label="">
                  🧡
                </span>
                좋았슴
                <b classname="post-foot-reaction-button-count">0</b>
              </button>
            </div>
            <div className="post-share">
              <div className="post-share-button">
                <button
                  aria-label="facebook"
                  className="react-share__ShareButton"
                  style={{}}
                >
                  <svg viewBox="0 0 64 64" width="32" height="32">
                    <rect
                      width="64"
                      height="64"
                      rx="0"
                      ry="0"
                      fill="#3b5998"
                    ></rect>
                    <path
                      d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="post-share-button">
                <button
                  aria-label="twitter"
                  className="react-share__ShareButton_twi"
                >
                  <svg viewBox="0 0 64 64" width="32" height="32">
                    <rect
                      width="64"
                      height="64"
                      rx="0"
                      ry="0"
                      fill="#00aced"
                    ></rect>
                    <path
                      d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                      fill="white"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </footer>
        </div>

        <form className="post-subscribe">
          <fieldset className="post-subscribe-group">
            <div className="post-subscribe-field">
              <input className="textfield-input"></input>
            </div>
            <button className="post-subscribe-submit ">
              뉴스레터 구독하기
            </button>
          </fieldset>
          <p className="post-subscribe-terms">
            구독할 경우&nbsp;
            <a rel="noopener noreferrer">개인정보 수집·이용</a> 과 &nbsp;
            <a rel="noopener noreferrer">광고성 정보 수신</a> 에 동의하게
            됩니다.
          </p>
        </form>
        <a className="home-banner">
          <figure className="home-banner-image">
            <img className="home-banner-image" src="/img/banner-app1.png"></img>
          </figure>
          <div className="home-banner-text">
            더 편하게 보고싶다면? 뉴닉 앱에서 만나요!
            <div className="cta-arrow">
              <img className="cta-arr" src="/img/sub.png" />
            </div>
          </div>
        </a>
      </div>
      <aside className="footer-statics">
        <p>
          <span className="mobile-block">
            오늘까지&nbsp;
            <b>588회 &nbsp;</b>
            뉴스레터를 발행했고
          </span>
          <b>579,432</b>명이&nbsp; 구독했어요!
        </p>
        <img src="/img/sub1.png" />
      </aside>
    </>
  );
}

export default DetailPage;
