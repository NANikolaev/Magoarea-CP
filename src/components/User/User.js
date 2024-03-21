import { useNavigate } from "react-router-dom";
import { Heading,Span,Button,Container,Icon } from "./elements";
import homeIcon from '../../assets/Icons/icons8-home-64.png';

const User=({user, setPass ,setUser})=>{
    let navigate=useNavigate()
    let onClick=()=>{
     setPass(false);
     setUser('');
     navigate('/', { replace: true })
    }
  
    return(
        <Container>
            <Heading>Служител :&nbsp; <Span>{user.Name}&nbsp;{user.LastName}</Span> </Heading>
            <Button onClick={onClick}><Icon src={homeIcon}/></Button>
        </Container>
    )

};

export default User