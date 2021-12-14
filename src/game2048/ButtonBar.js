import { Col, Container, Row } from 'react-bootstrap';

import DirectionButton from "./DirectionButton";

const ButtonBar = () => {
    return (
        <Container>
            <Row className='row justify-content-md-center'>
                <Col sm={1}>
                    <DirectionButton direction='UP' />
                </Col>
            </Row>
            <Row className='row justify-content-md-center'>
                <Col sm={1}>
                    <DirectionButton direction='LEFT' />
                </Col>
                <Col sm={1}>
                    <DirectionButton direction='DOWN' />
                </Col>
                <Col sm={1}>
                    <DirectionButton direction='RIGHT' />
                </Col>
            </Row>
        </Container>
    );
};

export default ButtonBar;