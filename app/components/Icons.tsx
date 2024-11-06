import { useState } from "react";
import styles from "./Icons.module.scss";

export const IconHamburgerMenu = () => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			{isHover ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24px'
					viewBox='0 -960 960 960'
					width='24px'
					fill='#26bbff'>
					<path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24px'
					viewBox='0 -960 960 960'
					width='24px'
					fill='#ffffff'>
					<path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
				</svg>
			)}
		</div>
	);
};

// Fråga Magnus eller Jon ifall man kan på snyggare sätt ändra FILL på svg'n
