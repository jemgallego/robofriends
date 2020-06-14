import React from 'react';

const StartScreen = () => {

	return (
		<div className='washed-green w-60 center'>
			<h2 className = 'f1 lh-title'>Train your memory with</h2>
			<h1>Robo Match</h1>
			<p className='f4 lh-copy tj b'> Click on a card to flip it and reveal the robot hiding underneath. 
				If you select 2 identical pictures, the matching pair disappears. 
				Repeat until you find all matching pairs.
				<br/><br/>
				Try to find all the robot pairs with the least amount of time and/or moves.
			</p>
		</div>
	)
	
}

export default StartScreen;