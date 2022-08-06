import "./App.css"

import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Board from "./Board";
import StatisticsSection from "./StatisticsSection";
import ControlSection from "./ControlSection";

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	        cellValues: new Array(16).fill(0),
	    };

	    // this.endGame = this.endGame.bind(this);
	    // this.setRandom = this.setRandom.bind(this);
	    // this.rightMovement = this.rightMovement.bind(this);
	    // this.leftMovement = this.leftMovement.bind(this);
	}

	componentDidMount() {
	    // El tablero debe aparecer con dos casillas llenas por defecto
	    // this.setRandom();
	    // this.setRandom();
	}

	// endGame() {
	//     alert("End of the game");
	// }

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<h1 id="Title">2048 Game</h1>
						<p>Statistics:</p>
						<StatisticsSection />
						<hr />
						<p>Controls:</p>
						<ControlSection />
					</Col>
					<Col>
						<Board cellValues={this.state.cellValues} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
