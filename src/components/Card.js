import React from 'react';

const Card = ({handleClick, pos, name, id}) => {
	return (
		<div onClick={(e) => handleClick(pos, e)} className="tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
			<div>
				<h3>{name}</h3>
			</div>
		</div>
	);
}

export default Card;