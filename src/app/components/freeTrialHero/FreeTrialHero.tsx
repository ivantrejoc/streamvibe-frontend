import Link from "next/link";
import styles from "./freeTrialHero.module.css";

export default function FreeTrialHero() {
  return (
   <section className={styles.heroMainContainer}>
    <div className={styles.textContainer}>
        <h2 className={styles.cta}>Start your free trial today!</h2>
        <p className={styles.paragraph}>And enjoy the best movies and shows with StreamVibe.</p>
    </div>
    <Link href={"/"} className={styles.actionButton}>Start a Free Trial</Link>
   </section>
  )
}
