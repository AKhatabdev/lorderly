import "../styles/LandingPage.css";

import image_1 from './images/landing-1.jpg';
import {Container, Image} from 'react-bootstrap'

export function LandingPage() {

    return (
        <Container>
            <Image src={image_1}/>
        </Container>
    )
}

export default LandingPage;
