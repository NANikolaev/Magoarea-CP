import styled from "styled-components";

export const Form=styled.form`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 margin-bottom: 40px;
 gap: 10px;
`
export const Input = styled.input`
width: 100%;
max-width: 400px;
line-height: 2.5;
padding: 0 10px;
border-radius: 25px;
font-weight: 700;
font-size: 18px;
text-align: center;
border: 2px solid white;
outline: none;
color: ${({theme})=>theme.colors.text};
background-color: ${({theme})=>theme.colors.back};
box-shadow: ${({theme})=>theme.shadows.back};

`
export const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
padding: 5px;
border: 2px solid white;
outline: none;
border-radius: 25px;
width: 45px;
height: 45px;
cursor: pointer;
transition: ease-in-out 300ms;
background-color: ${({theme})=>theme.colors.back};
box-shadow: ${({theme})=>theme.shadows.back};

`
export const Image = styled.img`
width: 30px;
height: 30px;
`