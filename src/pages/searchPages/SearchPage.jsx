import React, { useState } from 'react'
import '../searchPages/SearchPage.css'
import { useNavigate } from 'react-router-dom'

function SearchPage() {
    const navi = useNavigate();
    const[searchterm,setSearchTerm]=useState("")
    
    const searchButton = ()=>{
        navi(`/searchcontentspage/${searchterm}`)
    }
    return (
        <>
        <form className='search'>
            <fieldset className='textfield'>
                <button className='search-close' onClick={searchButton} >
                    <img src='/img/back.png' alt=''/>
                </button>
                <input className='textfield-input'  value={searchterm} onChange={(e)=>{setSearchTerm(e.target.value)}} placeholder='고슴아 이게 궁금해. (인물,이슈)'></input>
            </fieldset>
            <section className='seacrh-result'>
                <div className='search-option'>
                    <h2 className='search-option-title'>고슴이 추천 키워드</h2>
                    <a class="search-option-item" href="/">이재명</a>
                    <a class="search-option-item" href="/">경제</a>
                    <a class="search-option-item" href="/">러시아</a>
                    <a class="search-option-item" href="/">인도</a>
                    <a class="search-option-item" href="/">방송통신위원회</a>
                </div>
            </section>
        </form>
        <nav className='bottombar'>
            <a href='/'>
                <span role="img" aria-label="" class="emoji">🏠</span>
                <span>홈</span>
            </a>
            <a href='/searchpage' >
                <span role="img" aria-label="" class="emoji">🔍</span>
                <span>검색</span>
            </a>
            <a href='/'>
                <span role="img" aria-label="" class="emoji">🙍</span>
                <span>마이페이지</span>
            </a>
        </nav>
        </>
    )
}

export default SearchPage