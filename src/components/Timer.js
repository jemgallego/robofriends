import React, { useState, useEffect } from 'react';

const Timer = ({ gameActive, gameFinished }) => {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(gameActive);
	const [displayTime, setDisplayTime] = useState('00:00');

	useEffect(() => {
		let interval = null;

		setIsActive(gameActive);

		if (isActive) {
			const format = (time) => {
				return time.toString().padStart(2,'0');
			}

			interval = setInterval(() => {
				setSeconds(sec => sec + 1);
			}, 1000);

			let displayMinutes = '';
			let displaySeconds = '';

			if (seconds < 60) {
				displaySeconds = format(seconds);
			} else {
				displaySeconds = format(seconds % 60);
			}

			displayMinutes = format(Math.floor(seconds / 60));

			setDisplayTime(`${displayMinutes}:${displaySeconds}`); 
		
		} else if (!isActive && seconds !== 0) {
			setSeconds(0);
			setIsActive(false);
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isActive, seconds, gameActive]);

	return (
		<span className ={`f3 b pa2`}>
			Time: {displayTime}
		</span>
	);
}

export default Timer;




