import { Col, Container, Row } from 'react-bootstrap';

import DirectionButton from "./DirectionButton";

const Score = () => (
    <b>Score: X</b>
);

const NumbMov = () => (
    <b>N° movimientos: X</b>
);

const ControlBar = ({ movDown, movLeft, movRight, movUp }) => (
    <Container>
        <Row className='justify-content-md-center'>
            <Col sm={2}>
                <Row>
                    <Score />
                </Row>
                <Row>
                    <NumbMov />
                </Row>
            </Col>
            <Col sm={8}>
                <Row className='row justify-content-md-center'>
                    <Col sm={2}>
                        <DirectionButton direction='UP' func={movUp} />
                    </Col>
                </Row>
                <Row className='row justify-content-md-center'>
                    <Col sm={2}>
                        <DirectionButton direction='LEFT' func={movLeft} />
                    </Col>
                    <Col sm={2}>
                        <DirectionButton direction='DOWN' func={movDown} />
                    </Col>
                    <Col sm={2}>
                        <DirectionButton direction='RIGHT' func={movRight} />
                    </Col>
                </Row>
            </Col>
            <Col sm={2}>
                <b>Other</b>
            </Col>
        </Row>
    </Container>
);

export default ControlBar;
