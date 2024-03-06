import { Heading,Span } from "./elements";


const User=({user})=>{
  
    return(<Heading>Служител :&nbsp; <Span>{user.Name}&nbsp;{user.LastName}</Span> </Heading>)

};

export default User