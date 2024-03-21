import {styled,keyframes} from 'styled-components';

let opacity = keyframes`
 0% {opacity:0;}
 100% {opacity:1;}
`

export const Container=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 15px;
animation: ${opacity} 3s;
`

export const Heading=styled.h3`
 color: ${({theme})=>theme.colors.text};
 text-align: center;
`
export const Span=styled.span`
font-weight: 500;
color: #72dfff;
letter-spacing: 1px;
`
export const Button=styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
padding: 5px;
font-weight: 700;
font-size: 16px;
background-color: transparent;
border-radius: 5px;
color: #72dfff;
border: 1px solid white;
box-shadow: ${({theme})=>theme.shadows.back};
cursor: pointer;
letter-spacing: 1.2px;
`
export const Icon=styled.img`
 width: 32px;
`