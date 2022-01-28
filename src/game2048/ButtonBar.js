import { Col, Container, Row } from 'react-bootstrap';

import DirectionButton from "./DirectionButton";

const ButtonBar = ({ movDown, movLeft, movRight, movUp }) => (
    <Container>
        <Row className='row justify-content-md-center'>
            <Col sm={1}>
                <DirectionButton direction='UP' func={movUp} />
            </Col>
        </Row>
        <Row className='row justify-content-md-center'>
            <Col sm={1}>
                <DirectionButton direction='LEFT' func={movLeft} />
            </Col>
            <Col sm={1}>
                <DirectionButton direction='DOWN' func={movDown} />
            </Col>
            <Col sm={1}>
                <DirectionButton direction='RIGHT' func={movRight} />
            </Col>
        </Row>
    </Container>
);

export default ButtonBar;
