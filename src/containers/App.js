import React, { Component } from 'react';
import CardList from '../components/CardList';
import Menu from '../components/Menu';
import StartScreen from '../components/StartScreen';
import GameFinished from '../components/GameFinished';
import ErrorBoundary from '../components/ErrorBoundary';
import { robots } from '../robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		
		this.state = {
			robots: robots,
			gameActive: false,
			gameFinished: false,
			robotCount: 9,
			matchFound: 0,
			moves: 0
		}
	}

	toggleGameStatus = () => {
		this.setState({gameActive: !this.state.gameActive}, this.restartGame);
	}

	setRobotCount = (robotCount) => {
		this.setState({robotCount: robotCount}, this.updateRobots);
	}

	restartGame = () => {
		this.setState({robots: this.createDeck(robots)});

		if (this.state.gameActive) {
			this.setState({moves: 0});
			this.setState({matchFound: 0});
			this.setState({gameFinished: false});
		}
	}

	incrementMoves = () => {
		this.setState({moves: this.state.moves + 1});
	} 

	incrementMatchFound = () => {
		this.setState({ matchFound: this.state.matchFound + 1}, () => {
			if (this.state.matchFound === this.state.robotCount) {
				this.setState({gameFinished: true});
				this.setState({gameActive: false});
			}
		});
	} 

	createDeck = (robots) => {
		const shuffle = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}

			return array;
		} 

		let shuffledRobots = shuffle(robots);
		let pickedRobots = shuffledRobots.slice(0,this.state.robotCount);
		let clonedRobots = pickedRobots.concat(pickedRobots);

		return shuffle(clonedRobots);
	}

	componentDidMount() {
		this.setState({robots: this.createDeck(robots)})
	}

	render() {
		const { robots, gameActive, moves, gameFinished } = this.state;

		const component = gameFinished ? <GameFinished /> : <StartScreen />

		return (
			<div className='tc washed-green'>
				<h1 className='f2 f1-l'>Robo Match</h1>
				<Menu 
					gameActive={gameActive} 
					gameFinished={gameFinished}
					toggleGameStatus={this.toggleGameStatus} 
					setRobotCount={this.setRobotCount} 
					moves={moves}
				/>

		 		<ErrorBoundary>
		 			{!gameActive && component}
		 			{gameActive && <CardList robots={robots} incrementMoves={this.incrementMoves} incrementMatchFound={this.incrementMatchFound} />}
		 		</ErrorBoundary>
		 		<p className='pt4'>Robots lovingly delivered by <a className='light-blue' href='https://robohash.org'>Robohash.org</a></p>
			</div>
		);
	}
}

export default App;