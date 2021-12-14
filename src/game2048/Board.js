import { Component } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import ButtonBar from "./ButtonBar";
import Cell from "./Cell";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {values: [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0]};
    }

    render() {
        const { values } = this.state;
        const cells = values.map(value =>
            <Col sm={3}>
                <Cell value={value} />
            </Col>
        );

        return (
            <>
                <Container>
                    <Row>
                        {cells}
                    </Row>
                </Container>
                <br /><hr /><br />
                <ButtonBar />
            </>
        );
    }
}

export default Board;