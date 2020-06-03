import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ handleClick, robots }) => {
	return (
		<Fragment> 
	    	{
	    		robots.map( (user,i) => {
					return (
						<Card handleClick = {handleClick}
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