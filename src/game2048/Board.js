import "./Board.css"

import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

import Cell from "./Cell";

// class Board extends Component {
    // checkBoard() {
        
    //     const { cellValues, freeCellIndices } = this.state;

    //     if (!(freeCellIndices.length === 0) || cellValues.includes(2048)) {
    //         this.endGame();
    //     }
        
    // }

    // setRandom() {
    //     const { cellValues } = this.state;
    //     const freeCells = [];
        
    //     for (let i = 0; i < cellValues.length; i++) {
    //         if (cellValues[i] === 0) {
    //             freeCells.push(i);
    //         }            
    //     }

    //     if (freeCells.length > 0) {
    //         const random = () => Math.round(Math.random() * 100) % freeCells.length;
    //         const freeIndex = freeCells[random()];

    //         this.setState(function(state, props) {
    //             const cellValuesNew = state.cellValues;
    //             cellValuesNew[freeIndex] = 2;
    //             return {cellValues: cellValuesNew}
    //         });
    //     }
    // }

    // rightMovement() {
    //     this.leftMovement('RIGHT');
    // }

    // leftMovement(direction = 'LEFT') {
    //     // Get cell values
    //     const { cellValues } = this.state;

    //     let newCellValuesTemp = [];

    //     for (let i = 0; i < 16; i += 4) {
    //         let row = cellValues.slice(i, i + 4).filter(v => v !== 0);
    //         newCellValuesTemp.push(row);
    //     }

    //     for (let c = 0; c < 4; c++) {
    //         let val1, val2, row = newCellValuesTemp[c];

    //         for (let i = 0; i < row.length - 1; i++) {
    //             val1 = row[i];
    //             val2 = row[i + 1];

    //             if (val1 === val2) {
    //                 // Check if the second element of the pair is the last element of the list
    //                 if (i + 2 == row.length) {
    //                     row = row.slice(0, i);
    //                     row.push(val1 + val2);
    //                 } else {
    //                     row = row.slice(i + 2);
    //                     row.unshift(val1 + val2);
    //                 }
    //             }
    //         }

    //         for (let i = row.length; i < 4; i++) {
    //             row.push(0);
    //         }

    //         // newCellValuesTemp[c] = row;
    //         // alert(newCellValuesTemp);
    //     }

    //     this.setState({cellValues: newCellValuesTemp});
    //     this.setRandom();
    // }

    // render() {
    //     const { cellValues } = this.state;

    //     return (
    //         <>
    //             <Container className='section'>
    //                 <Row className='justify-content-md-center' sm={3}>
    //                     <Cell value={cellValues[0]} />
    //                     <Cell value={cellValues[1]} />
    //                     <Cell value={cellValues[2]} />
    //                     <Cell value={cellValues[3]} />
    //                 </Row>
    //                 <Row className='justify-content-md-center' sm={3}>
    //                     <Cell value={cellValues[4]} />
    //                     <Cell value={cellValues[5]} />
    //                     <Cell value={cellValues[6]} />
    //                     <Cell value={cellValues[7]} />
    //                 </Row>
    //                 <Row className='justify-content-md-center' sm={3}>
    //                     <Cell value={cellValues[8]} />
    //                     <Cell value={cellValues[9]} />
    //                     <Cell value={cellValues[10]} />
    //                     <Cell value={cellValues[11]} />
    //                 </Row>
    //                 <Row className='justify-content-md-center' sm={3}>
    //                     <Cell value={cellValues[12]} />
    //                     <Cell value={cellValues[13]} />
    //                     <Cell value={cellValues[14]} />
    //                     <Cell value={cellValues[15]} />
    //                 </Row>
    //             </Container>
    //             <ControlBar
    //                 movDown={this.endGame}
    //                 movLeft={this.leftMovement}
    //                 movRight={this.rightMovement}
    //                 movUp={this.endGame}
    //             />
    //         </>
    //     );
    // }
// }

const Board = ({ cellValues }) => (
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
);

export default Board;
