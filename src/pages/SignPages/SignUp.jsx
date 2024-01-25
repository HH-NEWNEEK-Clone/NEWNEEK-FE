import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navi = useNavigate();
    //checkbox 부분을 받아들이는 state 
    const [signUp, setSignUp] = useState(false)
    const [ageAgreement, setAgeAgreement] = useState(false);
    const [termsAgreement, setTermsAgreement] = useState(false);
    const [privacyAgreement, setPrivacyAgreement] = useState(false);
    const [marketingAgreement, setMarketingAgreement] = useState(false);

    //회원 가입을 위한 state
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        nickname: ''
    })

    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        validateInput(e.target.name, e.target.value)
    }
    const validateInput = (name, value) => {
        let isValid = false

        // eslint-disable-next-line default-case
        switch (name) {
            case 'email':
                isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
                break;
            case 'password':
                isValid = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,15}$/.test(value);
                break;
            case 'confirmpassword':
                isValid = value === form.password;
                break;
            case 'nickname':
                isValid = /^.{3,10}$/.test(value);
                break;
            default:
                isValid = true;
        }

        setvalidForm({
            ...validform,
            [name]: isValid
        });

    }
    //유효성 검사를 위한 state
    const [validform, setvalidForm] = useState({
        email: false,
        password: false,
        confirmpassword: false,
        nickname: false,
    })

    const handleSignUp = async (e) => {
        e.preventDefault();
        // 모든 필드의 유효성 검사
        const isEmailValid = validform.email;
        const isPasswordValid = validform.password;
        const isConfirmPasswordValid = validform.confirmpassword;
        const isNicknameValid = validform.nickname;

        // 조건에 맞지 않는 경우 alert를 띄움
        if (!isEmailValid) {
            alert('이메일의 형식이 올바르지 않습니다');
        } else if (!isPasswordValid) {
            alert('비밀번호의 형식이 올바르지 않습니다');
        } else if (!isConfirmPasswordValid) {
            alert('비밀번호 확인이 일치하지 않습니다');
        } else if (!isNicknameValid) {
            alert('닉네임의 형식이 올바르지 않습니다');
        } else {
            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}//api/sign-up`, {
                    email: form.email,
                    password: form.password,
                    nickname: form.nickname
                })
                console.log(response)
                alert('회원가입이 완료되었습니다')
                navi('/signIn')
            } catch (error) {
                console.log(error)
                alert('회원가입이 정상적으로 되지 않았습니다.')
            }
        }
    }


    useEffect(() => {
        setAgeAgreement(signUp)
        setTermsAgreement(signUp)
        setPrivacyAgreement(signUp)
        setMarketingAgreement(signUp)
    }, [signUp])

    const SignUpDisabled =
        !signUp || (!ageAgreement && !termsAgreement && !privacyAgreement && !marketingAgreement);

    const HandleCheckEvent = (event, setState) => {
        setState(event.target.checked)
    }
    return (
        <>
            <Form>
                <Head>
                    <Head_a href='' alt=''>
                        <img src='/img/logo.png' alt='' />
                    </Head_a>
                </Head>
                <Fieldset>
                    <TextField><TextField_input type='text' name='email' placeholder='이메일' value={form.email} onChange={handleFormChange}></TextField_input></TextField>
                    <TextField><TextField_input type='password' name='password' placeholder='비밀번호(6자이상)' value={form.password} onChange={handleFormChange}></TextField_input></TextField>
                    <TextField><TextField_input type='password' name='confirmpassword' placeholder='비밀번호 확인(6자이상)' value={form.confirmpassword} onChange={handleFormChange}></TextField_input></TextField>
                    <TextField><TextField_input type='text' name="nickname" placeholder='닉네임' value={form.nickname} onChange={handleFormChange}></TextField_input></TextField>
                </Fieldset>
                <Fieldset>
                    <Checkbox_div>
                        <Label_for_all>
                            <Checkbox type='checkbox' checked={signUp} onChange={(event) => HandleCheckEvent(event, setSignUp)}></Checkbox>
                            모두 동의합니다
                        </Label_for_all>
                    </Checkbox_div>
                    <Checkbox_div>
                        <Label_for_all>
                            <Checkbox type='checkbox' checked={ageAgreement} onChange={(event) => HandleCheckEvent(event, setAgeAgreement)}></Checkbox>
                            만 14세이상 가입 동의(필수)
                        </Label_for_all>
                    </Checkbox_div>
                    <Checkbox_div>

                        <Label_for_all>
                            <Checkbox type='checkbox' checked={termsAgreement} onChange={(event) => HandleCheckEvent(event, setTermsAgreement)}></Checkbox>
                            이용약관 동의 (필수)
                            <Terms href='https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769'>약관보기</Terms>
                        </Label_for_all>
                    </Checkbox_div>
                    <Checkbox_div>
                        <Label_for_all>
                            <Checkbox type='checkbox' checked={privacyAgreement} onChange={(event) => HandleCheckEvent(event, setPrivacyAgreement)}></Checkbox>
                            개인정보 수집/이용 동의 (필수)
                            <Terms href='https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769'>약관보기</Terms>
                        </Label_for_all>
                    </Checkbox_div>
                    <Checkbox_div>
                        <Label_for_all>
                            <Checkbox type='checkbox' checked={marketingAgreement} onChange={(event) => HandleCheckEvent(event, setMarketingAgreement)}></Checkbox>
                            뉴스레터 및 마케팅 정보 수신 동의 (선택)
                            <Terms href='https://newneek.notion.site/1e9ac1561fdb44109e2b154cf3b6a769'>약관보기</Terms>
                        </Label_for_all>
                    </Checkbox_div>
                </Fieldset>
                <Footer>
                    <SignUp_button onClick={handleSignUp} disabled={SignUpDisabled}>가입하기</SignUp_button>
                </Footer>
            </Form>
        </>
    )
}


export default SignUp

const Form = styled.form`
    max-width: 400px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 5rem 0 10rem;
    box-sizing: border-box;
`

const Head = styled.header`
    display: block;
`

const Head_a = styled.a`
    display: block;
    width: 60%;
    margin: 0 auto 3rem;
`

const Fieldset = styled.fieldset`
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
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
    color: #051619;
    transition: all .2s;
    outline: none;
    box-shadow: none;
`
const Checkbox_div = styled.div`
    display: block;
    padding: 0.5rem 0;
    position: relative;
`
const Checkbox = styled.input`
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 0;
    border: 1px solid #051619;
    box-sizing: border-box;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
`
const Label_for_all = styled.label`
    display: block;
    height: 16px;
    padding-left: 2rem;
    line-height: 16px;
    position: relative;
`
const Footer = styled.footer`
    padding: 32px 0;
`
const SignUp_button = styled.button`
    display: inline-block;
    width:100%;
    min-width: 104px;
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
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    &:hover {
        background-color: ${(props) => (props.disabled ? '#ccc' : '#0056b3')};
    }
`

const Terms = styled.a`
    display: inline!important;
    margin: 0!important;
    text-decoration: underline;
    color: #051619;
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
`