import styles from "./page.module.css";
import ThreeScene from "./components/3d-model/ThreeScene";
import MyMonthlyCalendar from "./components/calendar/MyMonthlyCalendar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sip & Play</h1>
        <p className={styles.description}>
          Welcome to Sip & Play, your ultimate destination for fun and relaxation! Enjoy classic eats, refreshing bubble tea, and a variety of beers served in a cozy, old-school, brick-lined café.
          <br className={styles.hidden} />
          Our café boasts an impressive collection of over 300 board games, making it the perfect spot for game enthusiasts and casual players alike.
          <br className={styles.hidden} />
          Whether you're here to challenge friends to a strategic showdown, explore new games, or simply unwind with a drink, Sip & Play offers an inviting atmosphere for all.
          <br className={styles.hidden} />
          Join us for special themed game nights, tournaments, and community events that bring people together. We can't wait to welcome you and make your experience unforgettable!
        </p>
        <div className={styles.action}>
        <button className={styles.actionButton}>Ready? Reserve for Spot</button>
        </div>
      </div>
      <div id="threejs-container" className={styles.threejs}>
        <ThreeScene />
        </div>
    </main>
  );
}





