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

	useEffect(() => {
		if (count === 2) {
			incrementMoves();
			
			if (match()) {
				incrementMatchFound();
			}
		}
	}, [count, incrementMoves, match, incrementMatchFound]);
	
	return (
		<div className='pa4'> 
		<Fragment> 
	    	{
	    		robots.map( (robot,i) => {
					return (
						<Card
							key={i} 
							index = {i}
							id={robot.id} 
							name={robot.name} 
							robotCount={robots.length}
							currentIndex = {currentIndex}
							setCurrentIndex = {setCurrentIndex}
							previousIndex = {previousIndex}
							setPreviousIndex = {setPreviousIndex}
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
