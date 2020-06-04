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
			searchfield: '',
			counter: 0,
			selectedIndex: ''
		}

		this.onCardClick = this.onCardClick.bind(this);
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

	onCardClick = (index, e) => {
		const { robots, counter, selectedIndex } = this.state;
		
		const removeCards = () => {
			const filteredRobots = robots.filter(robot => robot.name !== robots[selectedIndex].name); 

			this.setState({robots: filteredRobots})
		}

		if (counter === 0) {
			this.setState({counter: counter + 1});
			this.setState({selectedIndex: index})
		} else {
			if (index !== selectedIndex && robots[index].name === robots[selectedIndex].name) {
				removeCards();
			} else {
				console.log('Flip cards back');
			}

			this.setState({counter: 0});
			this.setState({selectedIndex: ''});	
		}

		console.log('Hello');
	}

	render() {
		const { robots, searchfield } = this.state;

		return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
			 	<Scroll>
			 		<ErrorBoundary>
			 			<CardList onCardClick={this.onCardClick} robots={robots} />
			 		</ErrorBoundary>
			 	</Scroll>	
			</div>
		);
	}
}

export default App;