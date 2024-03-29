import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

const HorizontalScrollCarousel = ({ children, ...props }) => {
	const targetRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: targetRef,
	});

	const x = useTransform(scrollYProgress, [0, 1], ['-95%', '50%']);

	return (
		<motion.div
			// style={{ x }}
			{...props}
			initial='hidden'
			animate='visible'>
			{children}
		</motion.div>
	);
};

export default HorizontalScrollCarousel;
