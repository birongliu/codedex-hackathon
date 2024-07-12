import styles from "./page.module.css";

import MyMonthlyCalendar from "../components/calendar/MyMonthlyCalendar";

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
        <h1>Events</h1>
        </div>
        <p className={styles.description}>
          Come out for our fun community <br className={styles.hidden} /> events with friends! 
        </p>
        <div className={styles.action}>
        <button className={styles.actionButton}>Sign up Now!</button>
        </div>
      </div>
      
      <div className={styles.calendar}>
        <MyMonthlyCalendar />
      </div>

    </main>
  );
}