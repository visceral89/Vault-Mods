import { useState } from "react";
import styles from "./Icons.module.scss";

export const IconHamburgerMenu = () => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
			{isHover ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#26bbff'
					className='size-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			) : (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='#ffffff'
					className='size-6'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			)}
		</div>
	);
};

// Fråga Magnus eller Jon ifall man kan på snyggare sätt ändra FILL på svg'n

/* OLD

					<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24px'
					viewBox='0 -960 960 960'
					width='24px'
					fill='#26bbff'>
					<path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
				</svg>


				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24px'
					viewBox='0 -960 960 960'
					width='24px'
					fill='#ffffff'>
					<path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
				</svg>
					*/
