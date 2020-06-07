import React, { useState, useEffect } from 'react';

const Timer = () => {
	const [seconds, setSeconds] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [displayTime, setDisplayTime] = useState('');

	function reset() {
		setSeconds(0);
		setIsActive(false);
	}

	useEffect(() => {
		let interval = null;

		if (isActive) {
			interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
			}, 1000);

			let displayMinutes = '';
			let displaySeconds = '';

			if (seconds < 60) {
				displaySeconds = seconds.toString().padStart(2,'0');
			} else {
				displayMinutes = Math.floor(seconds / 60);
				displaySeconds = (seconds % 60).toString().padStart(2,'0');
			}

			setDisplayTime(`${displayMinutes}:${displaySeconds}`); 
		
		} else if (!isActive && seconds !== 0) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [isActive, seconds]);

	return (
		<div className="fl w-10">
		<div className ='f2 b washed-green'>
			{displayTime}
		</div>
		</div>
	);
}

export default Timer;