import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Button from './Button';

const Menu = ({ gameActive, gameFinished, toggleGameStatus, setRobotCount, moves }) => {
	const ROBOTS = [6, 9, 12];
	const EASY = 'EASY';
	const NORMAL = 'NORMAL';
	const HARD = 'HARD';

	const [isDisabled, setIsDisabled] = useState(gameActive); 
	const [difficulty, setDifficulty] = useState(NORMAL);
	
	const changeDifficulty = (level, i) => {
		setRobotCount(ROBOTS[i]);
		setDifficulty(level);
	}

	const setButtonStyle = (level) => {
		return difficulty === level ? 'btn--success--solid' : 'btn--disabled--solid';
	}

	let mainButtonText; 

	if (gameActive) {
		mainButtonText = 'End Game';
	} else {
		mainButtonText = gameFinished ? 'Play Again' : 'Start Game';
	}

	useEffect (() => {
		setIsDisabled(gameActive);
	}, [gameActive]);

	return (
		<div className='flex justify-center'>
			<div className={`w-third pa3 helvetica ${gameFinished ? 'yellow' : 'washed-green'}`}>
				<Timer gameActive={gameActive} gameFinished={gameFinished} />
				<span className='f3 b ph4'>Moves: {moves}</span>
			</div>
			<div className ='w-third pa3'>
				<Button
					onClick={() => {
						toggleGameStatus();
						setIsDisabled(!isDisabled);
					}} 
					type= 'button' 
					buttonStyle={ !gameActive ? 'btn--primary--solid' : 'btn--danger--solid'}
					buttonSize= 'btn--medium'
				> 
					{mainButtonText} 
				</Button>
			</div>
			<div className ='w-third pa3'>
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