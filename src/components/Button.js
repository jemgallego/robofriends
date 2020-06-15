import React from 'react';
import './button.css'

const STYLES = [
	'btn--primary--solid',
	'btn--warning--solid',
	'btn--danger--solid',
	'btn--success--solid',
	'btn--disabled--solid'
];

const SIZES = ['btn--small', 'btn--medium', 'btn--large'];

const Button = ({disabled, buttonStyle, buttonSize, onClick, type, children}) => {

	const setButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

	const setButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<button 
			disabled={disabled} 
			className={`btn ${setButtonStyle} ${setButtonSize} ${disabled ? 'noHover' : ''} mr2 mb2 `} 
			onClick={onClick} 
			type={type}>
			{children}
		</button>
	)
}

export default Button;