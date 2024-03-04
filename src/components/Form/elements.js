import styled from "styled-components";

export const Section = styled.section`
background-color: ${({theme})=>theme.colors.back};
box-shadow: ${({theme})=>theme.shadows.back};
border-radius: 5px;
`
export const HeadingBox=styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
padding-left: 10px;
border-bottom: 1px solid white;
`
export const BigHeading=styled.h3`
color:${({theme})=>theme.colors.text};
`
export const Icon=styled.img`

`
export const Span=styled.span`
 color:${({theme})=>theme.colors.article};
 font-weight: 700;
 font-size: 19px;
`
export const Image=styled.img`
width: 100%;
`