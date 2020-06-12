import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import './card.css';

const Card = (props) => {
	const [isFlipped, setIsFlipped] = useState(true);
	const [display, setDisplay] = useState('');

	const { index, count, previousIndex, currentIndex, match, updateIndices, setCount} = props;

	useEffect( () => {
		if (count === 2 && (index === previousIndex || index === currentIndex)) {
			const timeout = setTimeout( () => {
				if (match()) {
					setDisplay('o-0');
				} else {
					setIsFlipped(true);	
				}

				updateIndices(-1);
			}, 1000);

			setCount(0);

			return () => clearTimeout(timeout);
		}

	}, [currentIndex]);

	const handleClick = () => {
		if (isFlipped && previousIndex === -1) {
			setIsFlipped(false);

			updateIndices(index);
			setCount(count + 1);
		}
	}
	
	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<div onClick={handleClick} className={`${display} tc bg-light-green dib br3 pa3 ma2 grow shadow-5 card-size`}>
				<img alt="robots" src={`https://robohash.org/${props.id}?size=120x120`} />
				<div>
					<h3 className='dark-gray'>{props.name}</h3>
				</div>
			</div>

			<div onClick={handleClick} className={`${display} tc bg-near-black light-green dib br3 pa3 ma2 grow shadow-5 card-size`}>
				<div className='flex items-center card-back'>
					<h2 className=''>Robo Match</h2>
				</div>
			</div>
		</ReactCardFlip>
	);
}

export default Card;
