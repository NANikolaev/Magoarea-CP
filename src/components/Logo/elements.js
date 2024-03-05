import { styled, keyframes } from "styled-components";


let scale = keyframes`
 0% {
		transform: scale(0.9);
		box-shadow: 0px 0px 0px 0px rgba(247,237,237,0.75);
	}
    70% {
		transform: scale(1);
		box-shadow: 0px 0px 10px 30px rgba(247,237,237,0);
	}

	100% {
		transform: scale(0.90);
        box-shadow: 0px 0px 10px 30px rgba(247,237,237,0);
	}
`
let opacity = keyframes`
 0% {opacity:0;}
 100% {opacity:1;}
`

export const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 190px;
height: 190px;
animation: ${scale} 3s infinite, ${opacity} 1s;
background-color: white;
border-radius: 50%;
`
export const Image = styled.img`
width: 130px;
height: 130px;
padding-bottom: 10px;
`
export const Container=styled.div`
position: fixed;
left: 50%;
top: 30%;
transform: translate(-50%, 0);
`