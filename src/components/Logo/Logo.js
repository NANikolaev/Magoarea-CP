import { Div, Image, Container } from "./elements";
import banner from "../../assets/Images/MagoArea-150x150.png"

const Logo = ({ setLogo }) => {

      setTimeout(()=>{
        setLogo(show=>!show)
     },4000)

    return (
        <Container>
            <Div>
                <Image src={banner} />
            </Div>
        </Container>


    )

}

export default Logo