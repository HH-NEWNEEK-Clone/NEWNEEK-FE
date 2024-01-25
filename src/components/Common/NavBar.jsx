import React from 'react'
import styled from 'styled-components'


function NavBar() {
    const curruntUrl = window.location.href
    
    return (
        <div>
            {
                curruntUrl === "https://yeonz90s.site/" ? <Img src="/img/banner1.png" alt="banner" /> : ""
            }
            <NavForm>
                <NavFormInner>
                    <BoxLogo>
                        <a href ="/"><img src="/img/logo.png" alt="logo" /></a>
                    </BoxLogo>

                    <BoxSearch>
                        <BoxSearchIcon1>
                            <a href='/searchpage'>
                            <img  src="/img/search-icon.png" alt="banner" style={{ width: "14px" }} >    
                            </img>
                            </a>
                        </BoxSearchIcon1>
                        <BoxSearchIcon2 >
                            <a href='/signIn'>
                            🦔
                            </a>
                        </BoxSearchIcon2>
                    </BoxSearch>
                </NavFormInner>
            </NavForm>
        </div>
    )
}

export default NavBar

const Img = styled.img`
    @media screen and (max-width: 980px){
        content: url("/img/banner2.png");
    }
    
`

const NavForm = styled.div`
    background: #eae7de;
    border-bottom: 1px solid #051619;
    position: relative;
`
const NavFormInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 1240px;
    padding: 2.5rem 5% 2.3rem;
    @media screen and (min-width: 1240px){
        margin: 0px  auto;

    }
    @media screen and (max-width: 980px){
        padding: 2.5rem 5% 2.9rem;
        
    }
`

const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 205px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 980px){
        width: 170px;
        
    }
`

const BoxSearch = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media screen and (max-width: 980px){
        display:none;
    }
`
const BoxSearchIcon1 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 42px;
    height: 42px;
    border: 1px solid black;

    font-size: 26px;

`
const BoxSearchIcon2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 42px;
    height: 42px;
    border: 1px solid black;
    border-left: none;
    
    font-size: 25px;
`
