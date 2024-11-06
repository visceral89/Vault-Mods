import { ReactNode, useState } from "react";
import styles from "./Hamburger.module.scss";

type HamburgerProps = {
	children: ReactNode;
};

export default function Hamburger({ children }: HamburgerProps) {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={styles.hamburgerMenu}>
			{/* icon */}
			{isOpen && <div className={styles.background} onClick={() => setIsOpen(false)}></div>}
			<div className={`${styles.menuLinks} ${isOpen ? styles.menuLinksOpen : ""}`}>{children}</div>
		</div>
	);
}
