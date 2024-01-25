import React from 'react'
import styled from 'styled-components'


function Nav() {
    return (
        <div>
            <img src="/img/banner1.png" alt="banner" />
            <NavForm>
                <NavFormInner>
                    <BoxLogo>
                        <img src="/img/logo.png" alt="logo"  />
                    </BoxLogo>
                    <BoxSearch>
                        <BoxSearchIcon1>
                            <img src="/img/search-icon.png" alt="banner" style={{ width: "14px" }} />
                        </BoxSearchIcon1>
                        <BoxSearchIcon2 >
                            🦔
                        </BoxSearchIcon2>
                    </BoxSearch>
                </NavFormInner>
            </NavForm>
        </div>
    )
}

export default Nav

const NavForm = styled.div`
    background: #eae7de;
    border-bottom: 1px solid #051619;
    position: relative;
    z-index: 4;
`
const NavFormInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 1360px;
    margin: 0 auto;
    padding: 3rem 5% 2.5rem;
`

const BoxLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 226px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
`
const BoxSearch = styled.div`
    display: flex;
    align-items: center;
    position: relative;
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