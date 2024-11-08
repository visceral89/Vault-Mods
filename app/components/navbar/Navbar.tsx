import styles from "./Navbar.module.scss";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div>{/* Logo */}</div>
			<div className={styles.navbarDropDownLinks}>
				<Link href={"/"}>Games {/* ArrowDown */}</Link>
				<Link href={"/"}>Mods {/* ArrowDown */}</Link>
				<Link href={"/"}>Support {/* ArrowDown */}</Link>
			</div>
			<div className={styles.navbarSearchBar}>
				<input type='text' name='searchBar' id='searchBar' />
			</div>
			<div className={styles.navbarUserLinks}>
				<Link href={"/"}>Notifications</Link>
				<Link href={"/"}>Account</Link>
			</div>
		</nav>
	);
}
