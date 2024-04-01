import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const Button = ({ time, text, background, size, refs, disable }) => {
	const { theme } = useTheme();

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<motion.button
			whileHover={{ scale: 1.1, boxShadow: '0px 0px 8px rgb(255 255 255)' }}
			whileTap={{ scale: 0.95 }}
			className={`
			rounded-lg py-2 lg:py-2 px-5 whitespace-nowrap hover:bg-violet-400
        ${size && size} ${disable && 'opacity-40 cursor-wait'} mt-5`}
			style={{
				backgroundColor: `${
					background ? theme.primary.purple : theme.transparent
				}`,
				color: `${background ? theme.textcolor.light : theme.textcolor.black}`,
				border: '2px solid ' + theme.primary.purple,
			}}
			ref={refs}
			disabled={disable}
			initial='hidden'
			animate='visible'
			variants={variants}
			transition={{ delay: time || 2 }}>
			{text}
		</motion.button>
	);
};

export default Button;
