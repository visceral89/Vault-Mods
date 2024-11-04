import styles from "./page.module.css";

export default function Home() {
	return (
		<main>
			<div className={styles.divpadding}>
				<section className={styles.textContainer}>
					<p>SUBHEADING</p>
					<h1>Lorem ipsum dolor sit amet.</h1>
					<div className={styles.textFrame}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</section>
			</div>
		</main>
	);
}
