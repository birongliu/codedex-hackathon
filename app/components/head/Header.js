"use client"
import Image from "next/image"
import styles from "./header.module.css"
import { useState } from "react"
const menuItem = ["About", "Press", "Menu", "Feedback"]
export default function Header() {
  const [active, setActive] = useState('');
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
                {menuItem.map(key => {
                  return <li onClick={() => setActive(key)} className={active === key ? styles.navActive : ""} key={key}>{key}</li>
                })}
            </ul>
        </div>
    </nav>
  )
}
