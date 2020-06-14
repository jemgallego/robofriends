import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Card from './Card';

const CardList = ({robots, incrementMoves, incrementMatchFound}) => {
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [previousIndex, setPreviousIndex] = useState(-1);
	const [count, setCount] = useState(0);

	const cardsMatch = useCallback(() => {
		if (robots[previousIndex].name === robots[currentIndex].name) {
			return true;
		} else {
			return false;
		}
	},[robots, currentIndex, previousIndex]);

	const updateIndices = (index) => {
		const i = index !== -1 ? currentIndex : -1; 

		setPreviousIndex(i);
		setCurrentIndex(index);
	}

	const shouldTakeAction = (index) => {		
		if (count === 2 && (index === previousIndex || index === currentIndex)) {
			return true;
		} else {
			return false;
		}
	}

	const shouldFlip = (index) => {
		if (previousIndex === -1) {
			updateIndices(index);
			setCount(count + 1);

			return true;
		} else {
			return false;
		}
	}

	useEffect(() => {
		if (count === 2) {
			incrementMoves();
			
			if (cardsMatch()) {
				incrementMatchFound();
			}
		}
	}, [count, incrementMoves, cardsMatch, incrementMatchFound]);
	
	return (
		<div className='flex flex-wrap justify-center pv4 w-90 center'> 
		<Fragment> 
	    	{
	    		robots.map( (robot,i) => {
					return (
						<Card
							key={i} 
							index = {i}
							id={robot.id} 
							name={robot.name} 
							currentIndex = {currentIndex}
							cardsMatch = {cardsMatch}
							shouldFlip = {shouldFlip}
							shouldTakeAction = {shouldTakeAction}
							updateIndices = {updateIndices}
							setCount = {setCount}
						/>
					);

				})
	    	}
	    </Fragment>
	    </div>
	);
}

export default CardList;