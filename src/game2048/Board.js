import "./Board.css"

import { Component } from 'react';

import { Container, Row } from 'react-bootstrap';

import ControlBar from "./ControlBar";
import Cell from "./Cell";

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cellValues: new Array(16).fill(0),
            freeCellIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        };

        this.movDown = this.movDown.bind(this);
        this.movLeft = this.movLeft.bind(this);
        this.movRight = this.movRight.bind(this);
        this.movUp = this.movUp.bind(this);
    }

    componentDidMount() {
        // El tablero debe aparecer con dos casillas llenas por defecto
        this.fillRandomCell();
        this.fillRandomCell();
    }

    checkBoard() {
        const { cellValues, freeCellIndices } = this.state;

        if (!(freeCellIndices.length === 0) || cellValues.includes(2048)) {
            this.endGame();
        }
    }

    endGame() {
        alert("End of the game");
    }

    fillRandomCell() {
        const { cellValues, freeCellIndices } = this.state;
        const freeCells = freeCellIndices.length;

        if (freeCells > 0) {
            const random = () => Math.round(Math.random() * 100) % freeCells;
            const freeIndex = freeCellIndices[random()];
            cellValues[freeIndex] = 2;

            const freeCellIndicesNew = [];

            for (let i = 0; i < 16; i++) {
                if (cellValues[i] === 0) {
                    freeCellIndicesNew.push(i);
                }
            }

            this.setState({cellValues: cellValues, freeCellIndices: freeCellIndicesNew});
        }
    }

    movDown() {
        this.fillRandomCell();
    }

    movLeft() {
        this.fillRandomCell();
    }

    movRight() {
        this.fillRandomCell();
    }

    movUp() {
        this.fillRandomCell();
    }

    render() {
        const { cellValues } = this.state;

        return (
            <>
                <Container className='section'>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={cellValues[0]} />
                        <Cell value={cellValues[1]} />
                        <Cell value={cellValues[2]} />
                        <Cell value={cellValues[3]} />
                    </Row>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={cellValues[4]} />
                        <Cell value={cellValues[5]} />
                        <Cell value={cellValues[6]} />
                        <Cell value={cellValues[7]} />
                    </Row>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={cellValues[8]} />
                        <Cell value={cellValues[9]} />
                        <Cell value={cellValues[10]} />
                        <Cell value={cellValues[11]} />
                    </Row>
                    <Row className='justify-content-md-center' sm={3}>
                        <Cell value={cellValues[12]} />
                        <Cell value={cellValues[13]} />
                        <Cell value={cellValues[14]} />
                        <Cell value={cellValues[15]} />
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
