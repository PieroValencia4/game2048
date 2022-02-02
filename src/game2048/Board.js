import "./Board.css"

import { Component } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import ControlBar from "./ControlBar";
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

    checkBoard() {
        const { values } = this.state;

        if (!(values.includes(0)) || values.includes(2048)) {
            this.endGame();
        }
    }

    endGame() {
        alert("End of the game");
    }

    getValues() {
        const values = new Array(16);
        values.fill(0);

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

        return (
            <>
                <Container className='section'>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={values[0]} />
                        <Cell value={values[1]} />
                        <Cell value={values[2]} />
                        <Cell value={values[3]} />
                    </Row>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={values[4]} />
                        <Cell value={values[5]} />
                        <Cell value={values[6]} />
                        <Cell value={values[7]} />
                    </Row>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={values[8]} />
                        <Cell value={values[9]} />
                        <Cell value={values[10]} />
                        <Cell value={values[11]} />
                    </Row>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={values[12]} />
                        <Cell value={values[13]} />
                        <Cell value={values[14]} />
                        <Cell value={values[15]} />
                    </Row>
                </Container>
                <ControlBar
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
