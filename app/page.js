import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <Image
          src="/sipnplay.png"
          alt="SipNPlay Logo"
          className={styles.turtleLogo}
          width={200}
          height={200}
          priority
        />
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
