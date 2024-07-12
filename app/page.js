import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Sip & Play</h1>
        <p className={styles.description}>
          Classic eats, bubble tea & beer served in <br className={styles.hidden} /> an old-school, brick-lined cafe boasting 300+ board games.
        </p>
        <div className={styles.action}>
        <button className={styles.actionButton}>Ready? Reserve for Spot</button>
        </div>
      </div>
    </main>
  );
}
