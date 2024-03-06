import styled from "styled-components";

export const Section = styled.section`
width: 100%;
max-width: 600px;
margin: 0 auto;
`
export const List= styled.ul`
display: flex;
flex-direction: column;
gap: 10px;
`
export const ListItem=styled.li`
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 align-items: center;
 margin-bottom: 10px;
 gap: 20px;
 line-height: 2.2;
 font-size: 18px;
 font-weight: 700;
 color: white;
 padding-left: 15px;
 border-radius: 20px;
 background-color: ${({theme})=>theme.colors.back};
 border: 2px solid white;
 box-shadow: ${({theme})=>theme.shadows.back};
`
export const Image=styled.img`
width: 30px;
`
export const Span=styled.span`
font-weight: 700;
`
export const Heading=styled.h2`
text-align: center;
color: #ff7373;
padding-right: 40px;
font-weight: 800;
`