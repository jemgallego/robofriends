import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Card from './Card';

const CardList = ({robots, incrementMoves, incrementMatchFound}) => {
	const [currentIndex, setCurrentIndex] = useState(-1);
	const [previousIndex, setPreviousIndex] = useState(-1);
	const [count, setCount] = useState(0);

	const match = useCallback(() => {
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

	useEffect(() => {
		if (count === 2) {
			incrementMoves();
			
			if (match()) {
				incrementMatchFound();
			}
		}
	}, [count, incrementMoves, match, incrementMatchFound]);
	
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
							previousIndex = {previousIndex}
							updateIndices = {updateIndices}
							count = {count}
							setCount = {setCount}
							match = {match}
						/>
					);

				})
	    	}
	    </Fragment>
	    </div>
	);
}

export default CardList;
