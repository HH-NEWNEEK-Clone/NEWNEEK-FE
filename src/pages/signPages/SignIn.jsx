import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navi = useNavigate()
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handlerSubmt = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const submitButton = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/sign-in`, {
                email: form.email,
                password: form.password
            })
            console.log(response.data.data['accessToken'])
            localStorage.setItem('token', response.data.data['accessToken'])
            alert('로그인 되었습니다')
            navi('/')
        } catch (error) {
            alert('로그인이 되지 않았습니다', error)
        }
    }
    return (
        <>
            <Login>
                <header>
                    <Login_logo>
                        <img src="/img/logo.png" alt="" />
                    </Login_logo>
                </header>
                <SignGoogleButtons>
                    <GoogleButton><GoogleButtonSpan><img src='/img/icon-google.png' alt='' /></GoogleButtonSpan>구글로 로그인하기</GoogleButton>
                </SignGoogleButtons>
                <Login_divider />
                <TextField>
                    <TextField_input type='text' placeholder='이메일' name='email' value={form.email} onChange={handlerSubmt}></TextField_input>
                </TextField>
                <TextField>
                    <TextField_input type='text' placeholder='비밀번호' name='password' value={form.password} onChange={handlerSubmt}></TextField_input>
                </TextField>
                <Forget_div>
                    <Forget >비밀번호를 잊으셨나요?</Forget>
                </Forget_div>
                <Login_foot>
                    <Login_button onClick={submitButton}>로그인</Login_button>
                    <Login_option>
                        <Login_option_link href='/signUp' >회원가입하기</Login_option_link>
                    </Login_option>
                </Login_foot>
            </Login>
        </>
    )
}

export default SignIn

const Login = styled.form`
    max-width: 400px;
    margin: 0 auto;
    padding: 7.5% 5% 4rem;
    position: relative;
    
`

const SignGoogleButtons = styled.div`
    display: block;
    
`
const GoogleButton = styled.button`
    display:flex!important;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    border-radius:8px;
    padding: 10px 1.5rem 11px;
    border: 1px solid #051619;
    cursor: pointer;
    font-size:14px;
    font-family: 'Noto Sans KR', sans-serif;
`
const GoogleButtonSpan = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right:10px;
    font-family: 'Noto Sans KR', sans-serif;

`

const Login_logo = styled.a`
    display: block;
    width: 100%;
    margin: 0 auto 3rem ;

`

const Login_divider = styled.div`
    height: 2px;
    margin: 2rem auto;
    background: #051619;
    text-align: center;
    position: relative;
    z-index: 1;
`

const TextField = styled.div`
    margin: 1rem 0;
    position: relative;

`
const TextField_input = styled.input`
    display: block;
    width: 100%;
    padding: 10px 40px 11px 1.5rem;
    border: 1px solid #051619;
    border-radius: 0;
    box-sizing: border-box;
    box-shadow: 0;
    font: inherit;
    transition: all .2s;
    outline: none;
    box-shadow: none;
    font-family: 'Noto Sans KR', sans-serif;
`
const Forget_div = styled.div`
    font-family: 'Noto Sans KR', sans-serif;
`

const Forget = styled.a`
    color: #051619;
    text-decoration: underline;
    font-family: 'Noto Sans KR', sans-serif;
`
const Login_foot = styled.footer`
    margin: 2rem 0;
`
const Login_button = styled.button`
    display: inline-block;
    width:100%;
    background: #ff6b00;
    padding: 10px 1.5rem 11px;
    border-radius: 0;
    text-align: center;
    cursor: pointer;
    position: relative;
    border-radius: 8px;
    background: #051619;
    border: 1px solid #051619;
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
`

const Login_option = styled.p`
    margin: 2rem 0;
    text-align: center;
    font-family: 'Noto Sans KR', sans-serif;
`

const Login_option_link = styled.a`
    display: block;
    width: 100%;
    color: #051619;
    text-decoration: underline;
    font-family: 'Noto Sans KR', sans-serif;
`