import React, { useState } from 'react';
import Timer from './Timer';
import Button from './Button';


const Menu = ({ gameActive, toggleGameActive, setRobotCount, moves }) => {
	const ROBOTS = [6, 9, 12];
	const EASY = 'EASY';
	const NORMAL = 'NORMAL';
	const HARD = 'HARD';

	const [isDisabled, setIsDisabled] = useState(false); 
	const [difficulty, setDifficulty] = useState(NORMAL);

	
	const changeDifficulty = (level, i) => {
		setRobotCount(ROBOTS[i]);
		setDifficulty(level);
	}

	const setButtonStyle = (level) => {
		return difficulty === level ? 'btn--success--solid' : 'btn--disabled--solid';
	}

	return (
		<div className='flex justify-between'>
			<div className='fl w-third pa3'>
				<Timer gameActive={gameActive} />
				<span className='f3 b washed-green ph4'>Moves: {moves}</span>
			</div>
			<div className ='fl w-third pa3'>
				<Button
					onClick={() => {
						toggleGameActive();
						setIsDisabled(!isDisabled);
					}} 
					type= 'button' 
					buttonStyle={ !gameActive ? 'btn--primary--solid' : 'btn--danger--solid'}
					buttonSize= 'btn--medium'
				> 
					{ !gameActive ? 'Start Game' : 'End Game' } 
				</Button>
			</div>
			<div className ='fl w-third pa3'>
				<span className='f4 b washed-green pa2'>Difficulty: </span>
				<Button
					onClick={() => changeDifficulty(EASY, 0)}
					type='button' 
					buttonStyle={setButtonStyle(EASY)}
					buttonSize='btn--small'
					disabled={isDisabled}
				> 
					Easy 
				</Button>
				
				<Button
					onClick={() => changeDifficulty(NORMAL, 1)}
					type= 'button' 
					buttonStyle={setButtonStyle(NORMAL)}
					buttonSize='btn--small'
					disabled={isDisabled}
				> 
					Normal 
				</Button>

				<Button
					onClick={() => changeDifficulty(HARD, 2)} 
					type='button' 
					buttonStyle={setButtonStyle(HARD)}
					buttonSize='btn--small'
					disabled={isDisabled}
				> 
					Hard 
				</Button>
			</div>
		</div>
	)
}

export default Menu;