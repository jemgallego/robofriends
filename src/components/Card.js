// import React from 'react';

// const Card = ({handleClick, pos, name, id}) => {
// 	return (
// 		<div onClick={(e) => handleClick(pos, e)} className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
// 			<img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
// 			<div>
// 				<h3>{name}</h3>
// 			</div>
// 		</div>
// 	);
// }

// export default Card;

import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';

class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFlipped: true
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		if (this.state.isFlipped) {
			this.setState(prevState => ({isFlipped: !prevState.isFlipped}));
		} else {
			console.log('Do Nothing');
		}

		this.props.onCardClick(this.props.pos,event);
	}

	render() {
		return (
			<div className="fl w-10 pa2">
			<ReactCardFlip isFlipped={this.state.isFlipped}>
				<div onClick={this.handleClick} className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
					<img alt="robots" src={`https://robohash.org/${this.props.id}?size=200x200`} />
					<div>
						<h3>{this.props.name}</h3>
					</div>
				</div>

				<div onClick={this.handleClick} className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
					<img alt="robots" src={`https://robohash.org/${100}?size=200x200`} />
					<div>
						<h3>CardBack</h3>
					</div>
				</div>
			</ReactCardFlip>
			</div>
		);
	}
}

export default Card;