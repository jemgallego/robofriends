import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Timer from '../components/Timer';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { robots } from '../robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		
		this.state = {
			robots: robots
		}
	}

	componentDidMount() {
		const shuffle = (array) => {
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}

			return array;
		} 

		const createDeck = (robots) => {
			let shuffledRobots = shuffle(robots);
			let pickedRobots = shuffledRobots.concat(shuffledRobots);

			return shuffle(pickedRobots);
		}

		this.setState({robots: createDeck(robots)})
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	render() {
		const { robots } = this.state;

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<Timer />
				<SearchBox searchChange={this.onSearchChange}/>
			 	<Scroll>
			 		<ErrorBoundary>
			 			<CardList robots={robots} />
			 		</ErrorBoundary>
			 	</Scroll>	
			</div>
		);
	}
}

export default App;