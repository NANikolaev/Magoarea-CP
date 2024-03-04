import { ThreeCircles } from 'react-loader-spinner';
import { Container } from './elements';
const Loader = (toggle) => {

    return (
        <Container>
            <ThreeCircles
                visible={true}
                height='50px'
                width='50px'
                color='red'
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                 />
        </Container>
   )

};

export default Loader