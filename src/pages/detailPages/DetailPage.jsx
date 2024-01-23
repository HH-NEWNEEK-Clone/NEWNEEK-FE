import React, { useEffect, useState } from 'react'
import '../detailPages/DetailPage.css'
function DetailPage() {
    const[scrollPercentage,setScrollPercentage]=useState(0)
    const [isProgressBarFixed, setIsProgressBarFixed] = useState(false);
    useEffect(()=>{
        const handleScroll = () =>{
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            const scrollPercentage = (currentScroll / scrollHeight) * 100;

            // 스크롤 진행 상태를 state에 업데이트
            setScrollPercentage(scrollPercentage);
            setIsProgressBarFixed(currentScroll > 5000);
        }

           // 스크롤 이벤트 리스너 등록
            window.addEventListener('scroll', handleScroll);

           // 컴포넌트 언마운트 시 이벤트 리스너 제거
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
    },[])

    return (
        <>
            <div>
                <header className='Post-head'>
                
                <a className='post-head-runninghead'>정치</a>
                <h2 className='post-head-headline'>윤석열 한동훈 사퇴 갈등</h2>
                <time className='post-head-date'>
                2024/01/23</time>
                <div className={`progress-bar-container ${isProgressBarFixed ? 'fixed' : ''}`}>
                    <div className='progress-bar'  style={{ width: `${scrollPercentage}%` }}><h2>윤석열 한동훈 사퇴 갈등</h2></div>
                </div>
                </header>
                <div className='post-container' >
                    <div className='post-featured'>
                        <img  src='https://d2phebdq64jyfk.cloudfront.net/media/image/article/thumbnail/%EB%8B%A8%EC%8B%A0_1_V9SjA9N.jpg' alt=''/>
                    </div>
                    <div className='post-body'>요즘 뉴스에 제일 자주 나오는 정치인이 누구게요? 어제오늘 뉴스는 온통 한동훈 국민의힘 비상대책위원장(비대위원장) 얘기예요. 윤석열 대통령의 오른팔로 정치 인생을 시작했는데, 요즘은 윤 대통령과 사이가 심상치 않다고. 둘 사이 관계가 총선을 앞두고 있는 국민의힘에 폭풍을 몰고 올 수 있다는 말도 나와요.

한동훈, 어떤 사람이더라?
검사 출신으로 윤 대통령과 여러 사건을 함께 수사한, 윤 대통령의 20년지기이자 최측근이에요. 윤 대통령이 지명해 작년에 법무부 장관이 됐고, 올해는 국민의힘의 ‘대세’이자 국회의원 후보로 떠올랐어요. 한 달 전에는 당의 총선을 이끌 비대위원장 자리에 올랐고요. 그런데 그런 그가 요즘은 윤 대통령의 심기(‘윤심’)을 거스르고 있다는 말이 나와요.

그게 무슨 말이야?
3초 요약하면 대통령실이 “비대위원장 물러나는 거 어때” vs. 한 위원장이 “물러나지 않겠습니다” 한 건데요. 더 자세히 살펴보면:

김건희 여사 명품백 논란: 2022년 9월 김건희 여사가 한 목사로부터 명품백을 받는 영상이 공개됐어요. 대통령실은 명품백을 받은 사실을 부정하진 않았지만, “김 여사를 일부러 함정에 빠뜨린 것”이라는 입장을 고수하고 있어요.

이를 건드린 한동훈: 한 위원장은 다른 입장을 밝혔어요. 18일과 19일에 각각 “국민이 걱정할 만한 부분이 있었다”, “국민 눈높이로 봐야 한다”고 한 것. 명품백 논란에 대통령의 공개 사과를 요구한 김경률 비상대책위원을 총선 후보로 추천하기도 했어요(=공천). 이에 ‘한 위원장이 윤 대통령과 대립하는 것 아니냐’는 말이 나왔어요.

사퇴 요구한 대통령실: 21일, 대통령실이 한 위원장에게 사퇴를 요구했다는 소식이 전해졌어요. 대통령실은 적절한 절차 없이 김경률 위원을 공천한 걸 지적했을 뿐이라고 해명했는데요. 명품백 논란을 건드렸기 때문이라는 해석이 지배적이에요.

굽히지 않은 한동훈: 21일 사퇴 요구 보도가 나오자마자 바로 “국민 보고 나선 일, 할 일 하겠다”며 받아쳤어요. 사실상 사퇴 요구를 거절한 것. 22일에도 “제 임기는 총선 이후까지”라고 했어요. 명품백 논란에 대해서도 “제 입장은 한 번도 변한 적 없다”라고 못 박았고요.

대통령실은 “비대위원장 사퇴는 우리가 관여할 일 아니다”라며 수습에 나섰지만, 논란은 가라앉지 않고 있어요.

국민의힘 분위기는 어떤데?
윤 대통령 너무해: 윤 대통령이 당을 너무 휘두르려 한다는 비판이 나와요. 이준석 전 대표와 김기현 전 대표에 이어 한 위원장까지, ‘대통령 마음에 안 들 때마다 당대표 바꾸냐’는 말도 있고요.

한 위원장 너무해: 일부는 한 위원장 때문에 당이 분열됐다고 말해요. 김경률 비대위원을 공천한 과정도 문제가 있었다고 하고요: “공정하게 공천하자면서, 한 위원장 맘대로 꽂아주면 어떡해!”

앞으로 어떻게 될까?
국민의힘은 혼란스럽다: 4월 총선이 80일 남은 상황에서 윤심과 한심이 갈려 혼란스러운 분위기예요: “이렇게 싸우다 우리 다 죽어!” 한편 이번 일을 계기로 국민의힘도 윤 대통령과 거리두기하고, 한 위원장도 ‘윤 대통령 오른팔’에서 벗어나 홀로서기 할 수 있다는 말도 나와요.

야당은 ‘대통령, 이건 아냐’: 민주당은 윤 대통령이 정치적 중립을 어기고, 불법으로 당의 일에 개입했다며 비판했어요. 대통령이 총선이나 공천에 말을 얹는 행위는 공직선거법·정당법 위반이라는 건데요. 이에 탄핵 등 법적 조치를 하겠다고 했어요. 새로운미래 등 제3세력도 대통령실의 사퇴 요구가 지나치다고 비판하고요.</div>
                <div class="footnote">이미지: ⓒ뉴스1</div>

                <section className='post-hashtag'>
                    <a className="post-hashtag-item" href="/">#정치</a>
                    <a className="post-hashtag-item" href="/">#경제</a>
                    <a className="post-hashtag-item" href="/">#사회</a>
                    <a className="post-hashtag-item" href="/">#문화</a> 
                </section>
                
                <footer className='post-foot'>
                    <div className='post-foot-reaction '>
                        <button className='post-foot-reaction-button'>
                        <span role="img" aria-label="">🧡</span>
                        좋았슴 
                        <b class="post-foot-reaction-button-count">0</b>
                        </button>
                    </div>
                    <div className='post-share'>
                        <div className='post-share-button'>
                        <button aria-label="facebook" className="react-share__ShareButton" style={{}}><svg viewBox="0 0 64 64" width="32" height="32"><rect width="64" height="64" rx="0" ry="0" fill="#3b5998"></rect><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z" fill="white"></path></svg></button>
                        </div>
                        <div className='post-share-button'>
                        <button aria-label="twitter" className="react-share__ShareButton_twi" ><svg viewBox="0 0 64 64" width="32" height="32"><rect width="64" height="64" rx="0" ry="0" fill="#00aced"></rect><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z" fill="white"></path></svg></button>
                        </div>
                    </div>
                </footer>
                </div>
                
                <form className='post-subscribe'>
                    <fieldset className='post-subscribe-group'>
                        <div className='post-subscribe-field'>
                        <input className='textfield-input'></input>
                        </div>
                        <button className='post-subscribe-submit '>뉴스레터 구독하기</button>
                    </fieldset>
                    <p className='post-subscribe-terms'>
                        구독할 경우&nbsp; 
                        <a rel="noopener noreferrer">개인정보 수집·이용</a> 과 &nbsp;
                        <a rel="noopener noreferrer" >광고성 정보 수신</a> 에 동의하게 됩니다.
                    </p>
                </form>
                <a className='home-banner'>
                    <figure className='home-banner-image'>
                    <img className='home-banner-image' src='/img/banner-app1.png'></img>
                    </figure>
                    <div className='home-banner-text'>
                     더 편하게 보고싶다면? 뉴닉 앱에서 만나요!
                     <div className='cta-arrow'>
                        <img className='cta-arr' src='/img/sub.png'/>
                     </div>
                    </div>
                </a>
            </div>
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
        </>
    )
}

export default DetailPage