import { Col, Container, Row } from 'react-bootstrap';

import DirectionButton from "./DirectionButton";

// const ControlSection = ({ movDown, movLeft, movRight, movUp }) => (
//     <Container>
//         <Row className='justify-content-md-center'>
//             <Col sm={8}>
//                 <Row className='row justify-content-md-center'>
//                     <Col sm={2}>
//                         <DirectionButton direction='UP' func={movUp} />
//                     </Col>
//                 </Row>
//                 <Row className='row justify-content-md-center'>
//                     <Col sm={2}>
//                         <DirectionButton direction='LEFT' func={movLeft} />
//                     </Col>
//                     <Col sm={2}>
//                         <DirectionButton direction='DOWN' func={movDown} />
//                     </Col>
//                     <Col sm={2}>
//                         <DirectionButton direction='RIGHT' func={movRight} />
//                     </Col>
//                 </Row>
//             </Col>
//         </Row>
//     </Container>
// );

const ControlSection = () => (
    <Container>
        <Row className='justify-content-md-center'>
            <Col sm={9}>
                <Row className='row justify-content-md-center'>
                    <Col sm={3}>
                        <DirectionButton />
                    </Col>
                </Row>
                <Row className='row justify-content-md-center'>
                    <Col sm={3}>
                        <DirectionButton />
                    </Col>
                    <Col sm={3}>
                        <DirectionButton />
                    </Col>
                    <Col sm={3}>
                        <DirectionButton />
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
);

export default ControlSection;
