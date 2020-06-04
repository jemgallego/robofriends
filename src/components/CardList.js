import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ onCardClick, robots }) => {
	return (
		<Fragment> 
	    	{
	    		robots.map( (user,i) => {
					return (
						<Card onCardClick = {onCardClick}
							key={i} 
							pos = {i}
							id={robots[i].id} 
							name={robots[i].name} 
						/>
					);
				})
	    	}
	    </Fragment>
	);
}


export default CardList