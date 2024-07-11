'use client'
import Image from "next/image"
import styles from "./header.module.css"
export default function Header() {
  return (
    <nav>
        <div className={styles.container}>
            <Image
              src="/sipnplay.png"
              alt="sinplay Logo"
              width={100}
              height={100}
              priority
            />
            <ul className={styles.listContainer}>
                <li>About</li>
                <li>Press</li>
                <li>Menu</li>
                <li>Feedback</li>
            </ul>
        </div>
    </nav>
  )
}
