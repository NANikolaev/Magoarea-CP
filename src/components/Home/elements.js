import {styled,keyframes} from 'styled-components';

let opacity = keyframes`
 0% {opacity:0;}
 100% {opacity:1;}
`

export const Container=styled.div`
width: 100%;
max-width: 310px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: fixed;
gap: 20px;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
`
export const Form=styled.form`
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 gap: 10px;
 animation: ${opacity} 3s;
`
export const Input = styled.input`
width: 100%;
max-width: 215px;
line-height: 2.2;
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
border: 2px solid white;
outline: none;
border-radius: 25px;
width: 40px;
height: 40px;
cursor: pointer;
transition: ease-in-out 300ms;
background-color: ${({theme})=>theme.colors.back};
box-shadow: ${({theme})=>theme.shadows.back};
`
export const Heading=styled.h3`
 color: ${({theme})=>theme.colors.text};
 width: 100%;
 max-width: 300px;
 text-align: center;
 animation: ${opacity} 3s;
`
export const Image = styled.img`
width: 48px;
height: 48px;
`