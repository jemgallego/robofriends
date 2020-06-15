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
		<div className='flex flex-wrap justify-center'>
			<div className={`w-100 w-third-l f5 f3-l b pa3 helvetica ${gameFinished ? 'yellow' : 'washed-green'}`}>
				<Timer gameActive={gameActive} gameFinished={gameFinished} />
				<span className='ph4'>Moves: {moves}</span>
			</div>
			<div className ='w-100 w-third-l pv3'>
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
			<div className ='w-100 w-third-l pa3'>
				<span className='f5 f4-l b washed-green'>Difficulty: </span>
				<Button
					onClick={() => changeDifficulty(EASY, 0)}
					type='button' 
					buttonStyle={setButtonStyle(EASY)}
					buttonSize='btn--small'
					disabled={isDisabled}
				> Easy 
				</Button>
				
				<Button
					onClick={() => changeDifficulty(NORMAL, 1)}
					type= 'button' 
					buttonStyle={setButtonStyle(NORMAL)}
					buttonSize='btn--small'
					disabled={isDisabled}
				> Normal 
				</Button>

				<Button
					onClick={() => changeDifficulty(HARD, 2)} 
					type='button' 
					buttonStyle={setButtonStyle(HARD)}
					buttonSize='btn--small'
					disabled={isDisabled}
				> Hard 
				</Button>
			</div>
		</div>
	)
}

export default Menu;