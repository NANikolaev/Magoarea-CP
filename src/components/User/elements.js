import {styled,keyframes} from 'styled-components';

let opacity = keyframes`
 0% {opacity:0;}
 100% {opacity:1;}
`

export const Heading=styled.h3`
 color: ${({theme})=>theme.colors.text};
 text-align: center;
 padding-right: 20px;
 animation: ${opacity} 3s;
`
export const Span=styled.span`
font-weight: 500;
color: #72dfff;
letter-spacing: 1px;
`