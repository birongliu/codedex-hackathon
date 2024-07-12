import styles from "./page.module.css";
import MyMonthlyCalendar from "../components/calendar/MyMonthlyCalendar";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Events</h1>
        </div>
        <div className={styles.events}>
          <div className={styles.eventCard}>
            <h3 className={styles.eventTitle}>Board Game Night</h3>
            <p className={styles.eventDetails}>July 20, 2024 | 7:00 PM</p>
            <p className={styles.eventDescription}>Join us for a fun-filled night of board games!</p>
          </div>
          <div className={styles.eventCard}>
            <h3 className={styles.eventTitle}>Chess Tournament</h3>
            <p className={styles.eventDetails}>July 22, 2024 | 5:00 PM</p>
            <p className={styles.eventDescription}>Compete in our annual chess tournament!</p>
          </div>
          <div className={styles.eventCard}>
            <h3 className={styles.eventTitle}>Magic: The Gathering</h3>
            <p className={styles.eventDetails}>July 25, 2024 | 6:00 PM</p>
            <p className={styles.eventDescription}>Experience the thrill of Magic: The Gathering!</p>
          </div>
        </div>
        <div className={styles.action}>
          <button className={styles.actionButton}>Sign up Now!</button>
        </div>
      </div>
      <div className={styles.calendar}>
        <MyMonthlyCalendar />
      </div>
      <div className={styles.boardGamesSection}>
        <h2 className={styles.sectionTitle}>Featured Board Games</h2>
        <div className={styles.gamesContainer}>
          <div className={styles.gameCard}>
            <img src="/img1.webp" alt="BloomBurrow Game" className={styles.gameImage} />
            <h3 className={styles.gameTitle}>BloomBurrow</h3>
            <p className={styles.gameDescription}>A thrilling adventure game with magical creatures and epic battles.</p>
          </div>
          <div className={styles.gameCard}>
            <img src="/img2.webp" alt="Lorcana Game" className={styles.gameImage} />
            <h3 className={styles.gameTitle}>Disney Lorcana</h3>
            <p className={styles.gameDescription}>A magical trading card game featuring your favorite Disney characters.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
