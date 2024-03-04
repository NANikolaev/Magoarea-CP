import styled from "styled-components";

export const Section = styled.section`
max-width: 800px;
margin: 0 auto;
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
export const Heading=styled.h3`
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
export const InfoContainer=styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 
   & article:nth-of-type(1){
     width: 35px;
   }
   & article:nth-of-type(2){
     width: 450px;
     & p{
        font-weight: 700;
     }
   }
   & article:nth-of-type(3){
     width: 315px;
     & p{
        font-weight: 700;
     }
   }
   & article:nth-of-type(4){
     width: 50px;
     & p{
        font-weight: 700;
     }
   }
   & article:nth-of-type(5){
     width: 90px;
   }
   & article:nth-of-type(6){
     width: 130px;
   }
   & article:nth-of-type(7){
     width: 130px;
   }
   & article:nth-of-type(8){
     width: 400px;
     font-weight: 700;
   }
`
export const Article=styled.article`
 display: flex;
 flex-direction: column;
 align-items: center;
 border-right: 1px solid white;
`
export const Paragraph=styled.p`
color:${({theme})=>theme.colors.text};
font-size: 14px;
border-bottom: 1px solid white;
width: 100%;
padding-left: 5px;
`