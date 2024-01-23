import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function SignUp() {
    const[signUp,setSignUp]=useState(false)
    const [ageAgreement, setAgeAgreement] = useState(false);
    const [termsAgreement, setTermsAgreement] = useState(false);
    const [privacyAgreement, setPrivacyAgreement] = useState(false);
    const [marketingAgreement, setMarketingAgreement] = useState(false);

    useEffect(()=>{
        setAgeAgreement(signUp)
        setTermsAgreement(signUp)
        setPrivacyAgreement(signUp)
        setMarketingAgreement(signUp)
    },[signUp])
    
    const SignUpDisabled= 
    !signUp || (!ageAgreement && !termsAgreement && !privacyAgreement && !marketingAgreement);

    const HandleCheckEvent=(event,setState)=>{
        setState(event.target.checked)
    }
    return (
        <>
        <Form>
            <Head>
                <Head_a href='' alt=''>
                    <img src='/img/logo.png' alt=''/>
                </Head_a>
            </Head>
            <Fieldset>
                <TextField><TextField_input type='text' placeholder='이메일'></TextField_input></TextField>
                <TextField><TextField_input type='password' placeholder='비밀번호(8자이상)'></TextField_input></TextField>
                <TextField><TextField_input type='password' placeholder='비밀번호 확인(8자이상)'></TextField_input></TextField>
                <TextField><TextField_input type='text' placeholder='닉네임'></TextField_input></TextField>
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
                <SignUp_button disabled={SignUpDisabled}>가입하기</SignUp_button>
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
const TextField= styled.div`
    margin: 1rem 0;
    position: relative;
`
const TextField_input= styled.input`
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
const Footer= styled.footer`
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