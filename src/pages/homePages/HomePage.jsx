import React from 'react'
import styled from 'styled-components'

function HomePage() {
    return (
        <HomeForm>
            <TitleBox>
                <Title>우리가 시간이 없지, 세상이 안 궁금하냐!</Title>
            </TitleBox>
        </HomeForm>
    )
}

export default HomePage

const HomeForm = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
`

const TitleBox = styled.div`
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid #051619;
    font-size: 3rem;
    letter-spacing: -.025rem;

`

const Title = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0px auto;
    padding: 0 5%;


    font-size: 38px;
    font-weight: 700;
    letter-spacing: -.025rem;
`