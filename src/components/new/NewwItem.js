import React, { useState, useEffect } from 'react';

const NewwItems = ({ icon, position, delay, iconClassName, transition }) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, delay);

		return () => clearTimeout(timer);
	}, [delay]);

	const iconStyle = {
		position: 'absolute',
		top: `${position.top}px`,
		left: `${position.left}px`,
		iconClassName: `${iconClassName}`,
		opacity: isVisible ? 1 : 0,
		transition: `${transition}`,
	};

	return isVisible ? (
		<div
			className={iconClassName}
			style={iconStyle}>
			{icon}
		</div>
	) : null;
};

export default NewwItems;
