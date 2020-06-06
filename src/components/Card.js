import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = (props) => {
	const [isFlipped, setIsFlipped] = useState(true);
	const [disableCounter, setDisableCounter] = useState(0);
	const {index, id, name, count, previousIndex, currentIndex} = props;

	const [display, setDisplay] = useState('');

	useEffect( () => {

		if (count === 2 && (index === previousIndex || index === currentIndex)) {
			const timeout = setTimeout( () => {
				if (props.matchFound()) {
					setDisplay('o-0');
				} else {
					setIsFlipped(true);	
				}

				props.setPreviousIndex(-1);
				props.setCurrentIndex(-1);
			}, 1000);

			props.setCount(0);

			return () => clearTimeout(timeout);
		}
	}, [currentIndex]);

	useEffect( () => {
		console.log(display);
	}, [display]);

	const handleClick = () => {
		// event.preventDefault();

		if (isFlipped && previousIndex === -1) {
			setIsFlipped(false);
			props.setPreviousIndex(currentIndex);
			props.setCurrentIndex(index);
			setDisableCounter(disableCounter + 1);
			props.setCount(count + 1);
		}
	}
	
	return (
		<div className="fl w-10 pa2">
			<ReactCardFlip isFlipped={isFlipped}>
				<div onClick={handleClick} className={`${display} tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5`}>
					<img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
					<div>
						<h3>{name}</h3>
					</div>
				</div>

				<div onClick={handleClick} className={`${display} tc bg-near-black light-green dib br3 pa3 ma2 grow bw shadow-5`}>
					<img alt="robots" src={`https://robohash.org/${100}?size=200x200`} />
					<div>
						<h3>Match</h3>
					</div>
				</div>
			</ReactCardFlip>
		</div>
	);
}

export default Card;
