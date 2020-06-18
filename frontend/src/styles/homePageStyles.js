import styled from "styled-components";
import React from "react";


export const MainContainer = styled.div`
   width: 100vw;
   height: 100vh;
   color: white;
   background-color: #D7E2E9 ;
   margin:0;
   `;

export const BodyContainer =styled.div`
    background-color: transparent;
    height: 100%;
    width: 100%;
    display:flex;
    column-count:2;
    `;

export const FirstContainer =styled.div`
    background-color: white;
    height: 100%;
    width:100%;
    
    `;

export const Logo =styled.img`
    width:50px;
    height: 20px;
    margin-left: 5px;   
    margin-top: 5px; 
    `;



export const HeaderContainer =styled.div`
    background-color:  #F1F5F8;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    `;

export const Title =styled.h1`
    text-align: center;
    font-size: 35px;
    color: #3A4052;
    margin-left: 35%;
    `;

export const MiddleContainer =styled.div`
    background-color: #D7E2E9;
    height: 90%;
    width: 100%;
    display:flex;
    column-count:2;
    `;

export const MapContainer= styled.div`
    height: 78.5vh;
    width: 82vw;
    margin-top: 50px;
    margin-left: 10px;
    margin-bottom: 50px;
    margin-right: 50px;
    border: 2px solid #F1F5F8;
    `;

export const FooterDiv= styled.div`
     background-color:  #F1F5F8;
     color: black;
     width: 100vw;
     height: 100vh;
     display: flex;
     column-count: 4;
     text-align: left;
     justify-content: space-evenly;
     
    `;

export const Seiten= styled.div`
    display: flex;
    flex-direction: column;
    color: grey;
    margin-top: 70px;
    text-align: left;
    `;

export const Sprachen=styled.label`
    `;

export const Links= styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    color: black;
    margin-top: 70px;
    `;

export const LinksColor= styled.a`
    color: black;
    font-size: 16px;
    margin-top: 30px;
    text-align: left;
    text-decoration: none;
        :hover{
        color: grey;
        }
    `;

export const FollowLabel= styled.label`
    color: grey;
    margin-top: 50px;
    text-align: left;
    font-size: 20px;
    `;

export const Produkte= styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    color: grey;
    margin-top: 70px;
    `;

export const Address =styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: left;
    color: grey;
    margin-top: 70px;
    `;

export const Para= styled.p`
    color: black;
    text-align: left;
    font-size: 16px;
    `;

export const NewsLetter = styled.div`
    color: grey;
    text-align: left;
    margin-top: 25px;
    `;

export const LabelColor = styled.label`
    color: grey;
    font-size:27px;
    text-align: left;
    `;

export const InputBox = styled.input`
    height: 50px;
    width: 250px;
    margin-top: 20px;
    `;

export const SubmitButton = styled.button`
    background-color: #fbf067;
    border: 0;
    font-size: 15px;
    height: 40px;
    width: 120px;
    margin-top: 20px;
        :hover{
        background-color:white;
        color: black;
        }
    `;


