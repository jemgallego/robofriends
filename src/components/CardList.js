import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Card from './Card';

const CardList = ({robots, incrementMoves, incrementMatchFound}) => {
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [previousIndex, setPreviousIndex] = useState(-1);
	const [cardsPicked, setCardsPicked] = useState(0);
	const [resetCounter, setResetCounter] = useState(0);

	const ANIMATIONS = ['none', 'flipback', 'fade'];

	const cardsMatch = useCallback(() => {
		if (robots[previousIndex].name === robots[currentIndex].name) {
			return true;
		} else {
			return false;
		}
	},[robots, currentIndex, previousIndex]);

	useEffect(() => {
		if (resetCounter === 2) {
			setPreviousIndex(-1);
			setCurrentIndex(-1);
			setCardsPicked(0);
			setResetCounter(0);
		}
	}, [resetCounter]);

	useEffect(() => {
		if (cardsPicked === 2) {
			incrementMoves();
			
			if (cardsMatch()) {
				incrementMatchFound();
			}
		}
	}, [cardsPicked, incrementMoves, cardsMatch, incrementMatchFound]);

	const cardAnimation = (index) => {
		let animate; 

		if (cardsPicked === 2 && (index === previousIndex || index === currentIndex)) {
			if (cardsMatch()) {
				animate = ANIMATIONS[2];
			} else {
				animate = ANIMATIONS[1];
			}
		} else {
			animate = ANIMATIONS[0];
		}

		return animate;
	}

	const shouldFlip = (index) => {
		console.log(previousIndex);
		console.log(currentIndex);
		console.log(cardsPicked);

		if (previousIndex === -1) {
			setPreviousIndex(currentIndex);
			setCurrentIndex(index);
			setCardsPicked(cardsPicked + 1);

			return true;
		} else {
			return false;
		}
	}
	
	return (
		<div className='flex flex-wrap justify-center pv4 w-100 w-90-l center'> 
		<Fragment> 
	    	{
	    		robots.map( (robot,i) => {
					return (
						<Card
							key={i} 
							index = {i}
							id={robot.id} 
							name={robot.name} 
							shouldFlip = {shouldFlip}
							cardAnimation = {cardAnimation(i)}
							setResetCounter = {setResetCounter}
							animations = {ANIMATIONS}
						/>
					);
				})
	    	}
	    </Fragment>
	    </div>
	);
}

export default CardList;