import styles from "./page.module.scss";
import buttons from "./styles/Buttons.module.scss";

export default function Home() {
	return (
		<main>
			<div className={styles.divpadding}>
				<section className={styles.textContainer}>
					<p className={styles.subheading}>SUBHEADING</p>
					<h1>Lorem ipsum dolor sit amet.</h1>
					<div className={styles.textFrame}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</p>
						<div className={styles.buttonContainer}>
							<button className={buttons.ctaButton}>Lorem Ipsum</button>
							<button className={buttons.button}>Lorem Ipsum</button>
						</div>
					</div>
					<div className={styles.imageContainer}></div>
				</section>
			</div>
		</main>
	);
}
