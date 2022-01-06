import { Component } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import ButtonBar from "./ButtonBar";
import Cell from "./Cell";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {values: []};
        /* Functions */
        this.movDown = this.movDown.bind(this);
        this.movLeft = this.movLeft.bind(this);
        this.movRight = this.movRight.bind(this);
        this.movUp = this.movUp.bind(this);
    }

    componentDidMount() {
        this.setState({values: this.getValues()});
    }

    getValues() {
        const values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        const random = () => Math.round(Math.random() * 100) % 16;

        let index1 = random();
        let index2 = random();

        while (index1 === index2) {
            index2 = random();
        }

        values[index1] = 2;
        values[index2] = 2;

        return values;
    }

    checkBoard() {
        const { values } = this.state;

        if (!(values.includes(0)) || values.includes(2048)) {
            this.endGame();
        }
    }

    endGame() {
        alert("End of the game");
    }

    movDown() {
        alert("movDown");
    }

    movLeft() {
        alert("movLeft");
    }

    movRight() {
        alert("movRight");
    }

    movUp() {
        alert("movUp");
    }

    setValue() {
        
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
                <ButtonBar
                    movDown={this.movDown}
                    movLeft={this.movLeft}
                    movRight={this.movRight}
                    movUp={this.movUp}
                />
            </>
        );
    }
}

export default Board;