import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = (props) => {
	const [isFlipped, setIsFlipped] = useState(true);
	const [display, setDisplay] = useState('');

	const { index, count, previousIndex, currentIndex, matchFound, setPreviousIndex, setCurrentIndex, setCount} = props;

	useEffect( () => {

		if (count === 2 && (index === previousIndex || index === currentIndex)) {
			const timeout = setTimeout( () => {
				if (matchFound()) {
					setDisplay('o-0');
				} else {
					setIsFlipped(true);	
				}

				setPreviousIndex(-1);
				setCurrentIndex(-1);
			}, 1000);

			setCount(0);

			return () => clearTimeout(timeout);
		}
		// eslint-disable-next-line
	}, [currentIndex]);

	const handleClick = () => {
		// event.preventDefault();

		if (isFlipped && previousIndex === -1) {
			setIsFlipped(false);
			
			props.setPreviousIndex(currentIndex);
			props.setCurrentIndex(index);
			props.setCount(count + 1);
		}
	}
	
	return (
		<div className="fl w-10 pa2">
			<ReactCardFlip isFlipped={isFlipped}>
				<div onClick={handleClick} className={`${display} tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5`}>
					<img alt="robots" src={`https://robohash.org/${props.id}?size=200x200`} />
					<div>
						<h3>{props.name}</h3>
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
