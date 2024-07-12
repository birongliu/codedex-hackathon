import styles from "./page.module.css";
import ThreeScene from "./components/3d-model/ThreeScene";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div>
        <h1 className={styles.title}>Sip & Play 🧋</h1>
        <p className={styles.description}>
          Classic eats, bubble tea & beer served in <br className={styles.hidden} /> an old-school, brick-lined cafe boasting 300+ board games.
        </p>
        <div className={styles.action}>
        <button className={styles.actionButton}><Link href={"https://www.exploretock.com/sipnplay"}> Ready? Reserve for Spot</Link></button>
        </div>
        </div>
        <div id="threejs-container" className={styles.threejs}>
        <ThreeScene />
      </div>
      </div>
      <section className={styles.section}>
        <h1>Location</h1>
        <p>We are located at 471 5th Ave, Brooklyn, NY 11215</p>
      </section>
    </main>
  );
}
