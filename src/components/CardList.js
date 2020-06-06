import React, { Fragment, useState } from 'react';
import Card from './Card';

const CardList = (props) => {
	const { robots } = props;

	const [currentIndex, setCurrentIndex] = useState(-1);
	const [previousIndex, setPreviousIndex] = useState(-1);
	const [count, setCount] = useState(0);

	const matchFound = () => {
		if (robots[previousIndex].name === robots[currentIndex].name) {
			return true;
		} else {
			return false;
		}

	}
	
	return (
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
							setCurrentIndex = {setCurrentIndex}
							previousIndex = {previousIndex}
							setPreviousIndex = {setPreviousIndex}
							count = {count}
							setCount = {setCount}
							matchFound = {matchFound}
						/>
					);
				})
	    	}
	    </Fragment>
	);
}

export default CardList;


