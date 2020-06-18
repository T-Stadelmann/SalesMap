import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginFunction } from "../../store/actions/loginAction";
import styled from "styled-components";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainContainer  = styled.form`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(247,247,247);
    `;

const InputsContainer = styled.div`
    height: 130px;
    width: 70%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    `;

const Form = styled.form`
    margin-top: 150px;
    height: 350px;
    width: 350px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    align-items:center;
    `;

const InputContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-between;
    align-items: center;
    border-radius: 40px;
    background-color: white;
    height: 50px;
    border: none;
    `;

const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    text-indent: 20px;
    letter-spacing: 1.5px;
    background-color: transparent;
    `;

const LoginButton = styled.button`
    height: 50px;
    width: 70%;
    border-radius: 40px;
    background-color: rgb(190,186,218);
    border: none;
    letter-spacing: 1.5px;
    :hover {
        cursor: pointer
    }
    `;


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLoginHandler = e => {
        e.preventDefault();
        const data = {
            email,
            password
        };
        props.dispatch(loginFunction(data))
    };

    return <MainContainer>
            <Form>
            <img src={salesmap_logo} height='60px' style={{'marginBottom':'30px'}}/>
                <InputsContainer>
                    <InputContainer>
                    <FontAwesomeIcon color={'rgb(190,186,218)'} size='1x' icon={faEnvelope} style={{'margin-left':'15px'}}/>
                    <Input placeholder="Email" onChange={(e) => setEmail(e.currentTarget.value)} />
                    </InputContainer>
                    <InputContainer>
                    <FontAwesomeIcon color={'rgb(190,186,218)'} size='1x' icon={faLock} style={{'margin-left':'15px'}}/>
                    <Input placeholder='Password' type='password' onChange={(e) => setPassword(e.currentTarget.value)} /><br/>
                    </InputContainer>
                </InputsContainer>
                <LoginButton type='submit' onClick={userLoginHandler} >LOGIN</LoginButton>
            </Form>
            {/* <Map history={props.history} style={"mapbox://styles/ck8owa6rc08zo1jo1e6rwpa23"}/> */}
          </MainContainer>
}

export default connect()(Login);