import styled from "styled-components";

export const Section = styled.section`
width: 100%;
max-width: 850px;
margin: 0 auto;
background-color: ${({ theme }) => theme.colors.back};
box-shadow: ${({ theme }) => theme.shadows.back};
border-radius: 5px;
`
export const HeadingBox = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
padding-left: 10px;
border-bottom: 1px solid white;
`
export const Heading = styled.h3`
color:${({ theme }) => theme.colors.text};
font-size: 16px;
`
export const Icon = styled.img`

`
export const Span = styled.span`
 color:${({ theme }) => theme.colors.article};
 font-weight: 700;
 font-size: 16px;
`
export const Image = styled.img`
width: 100%;
`
export const InfoContainer = styled.div`
 display: flex;
 position: relative;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 width: 100%;
 max-width: 490px;
 margin: 0 auto;

   & h3{padding-bottom: 5px;}
   & article {white-space: nowrap; overflow: auto;}

   & article:nth-of-type(1){
     width: 35px;
     border-left: 1px solid white;
   }
   & article:nth-of-type(2){
     width: 100%;
     max-width: 450px;
     & p{font-weight: 700;}
   }
   & article:nth-of-type(3){
     width: 100%;
     max-width: 485px;
     border-left: 1px solid white;
     & p{font-weight: 700;}
   }
   & article:nth-of-type(4){
     width: 70px;    
     border-left: 1px solid white;
     & p{ font-weight: 700;}
   }
   & article:nth-of-type(5){
     width: 80px;
   }
   & article:nth-of-type(6){
     width: 95px;
   }
   & article:nth-of-type(7){
     width: 95px;
   }
   & article:nth-of-type(8){
     width: 300px;
     font-weight: 700;
     border-left: 1px solid white;
   }

   @media screen and (min-width: 505px){
       
       & article:nth-of-type(4){ width: 105px;}
       & article:nth-of-type(5){ width: 120px;}
       & article:nth-of-type(6){ width: 112px;}
       & article:nth-of-type(7){ width: 113px;}
   }

   @media screen and (min-width: 820px){
       max-width:max-content;
       & article:nth-of-type(3){ max-width: 365px;}
       & article:nth-of-type(4){ max-width: 50px;}
       & article:nth-of-type(5){ max-width: 90px;}
       & article:nth-of-type(8){ max-width: 400px;}
   }
`
export const Column = styled.article`
 display: flex;
 flex-direction: column;
 align-items: center;
 border-right: 1px solid white;
`
export const Paragraph = styled.p`
color:${({ theme }) => theme.colors.text};
font-size: 12px;
border-bottom: 1px solid white;
width: 100%;
padding-left: 5px;
overflow: hidden;
`
export const Form=styled.form`
display: flex;
flex-direction: column;
width: 185px;
text-align: center;
  & div:nth-of-type(1){border-bottom:none;}
`
export const FormGroup=styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width: 100%;
border-bottom:1px solid white;
border-right:1px solid white;
`
export const InputCheck=styled.input`
 width: 15px;

`
export const InputNum=styled.input`
width: 60px;
height: 14.5px;
padding-left: 5px;
outline: none;
`
export const Button=styled.button`
position: absolute;
padding: 10px;
font-weight: 700;
font-size: 16px;
background-color: #72dfff;
border-radius: 5px;
color: black;
border: 1px solid white;
box-shadow: ${({theme})=>theme.shadows.back};
cursor: pointer;
letter-spacing: 1.2px;
left: 50%;
bottom: -50px;
transform: translate(-50%);
`