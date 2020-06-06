import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { robots } from '../robots';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			matchFound: false
		}

		this.cardListElement = React.createRef();

		this.onCardClick = this.onCardClick.bind(this);
		this.resetMatch = this.resetMatch.bind(this);
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
			// let slicedRobots = shuffledRobots.slice(0,10);
			let pickedRobots = shuffledRobots.concat(shuffledRobots);

			return shuffle(pickedRobots);
		}

		this.setState({robots: createDeck(robots)})
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value })
	}

	resetMatch() {
		this.setState({matchFound: false});
	}

	onCardClick = (previousIndex, currentIndex) => {
		const { robots} = this.state;
		
		if(previousIndex !== '' && currentIndex !== '') {
			console.log(robots[previousIndex].name);
			console.log(robots[currentIndex].name);

			if (robots[previousIndex].name === robots[currentIndex].name) {
				this.setState({ matchFound: true});
				console.log('Match!');
			}
		}
	}

	render() {
		const { robots } = this.state;

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
			 	<Scroll>
			 		<ErrorBoundary>
			 			<CardList 
			 				onCardClick={this.onCardClick} 
			 				robots={robots} 
			 				matchFound={this.state.matchFound} 
			 				resetMatch={this.resetMatch}
			 			/>
			 		</ErrorBoundary>
			 	</Scroll>	
			</div>
		);
	}
}

export default App;