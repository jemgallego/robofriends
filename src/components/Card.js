import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import './card.css';

const Card = ({ id, name, index, shouldFlip, cardAnimation, animations, setResetCounter}) => {
	const [isFlipped, setIsFlipped] = useState(true);
	const [display, setDisplay] = useState('');
	
	useEffect( () => {
		if (cardAnimation !== animations[0]) {
			const timeout = setTimeout( () => {
				cardAnimation === animations[1] ? setIsFlipped(true) : setDisplay('o-0');
				setResetCounter(reset => reset + 1);
			}, 1000);

			return () => clearTimeout(timeout);
		}
	}, [cardAnimation, animations, setResetCounter]);

	const handleClick = () => {
		if (isFlipped && shouldFlip(index)) {
			setIsFlipped(false);
		}
	}
	
	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<div onClick={handleClick} className={`${display} tc bg-light-green dib br3 pa3 ma2 grow shadow-5 card-size`}>
				<img alt="robots" src={`https://robohash.org/${id}?size=120x120`} />
				<div>
					<h3 className='dark-gray'>{name}</h3>
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
