"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { useState } from "react";
import Link from "next/link";
const menuItem = ["About", "Press", "Menu", "Feedback"];
export default function Header() {
  const [active, setActive] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);

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
          {menuItem.map((key) => {
            return (
              <li
                onClick={() => setActive(key)}
                className={active === key ? styles.navActive : ""}
                key={key}
              >
                <Link href={`/${key.toLowerCase()}`}>{key}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.controller}>
          {!activeMenu ? (
            <Image
              src="/menu-open.svg"
              alt="sinplay Logo"
              onClick={() => setActiveMenu(!activeMenu)}
              width={45}
              height={45}
              priority
            />
          ) : (
            <Image
              src="/menu-close.svg"
              alt="sinplay Logo"
              width={45}
              onClick={() => setActiveMenu(!activeMenu)}
              height={45}
              priority
            />
          )}
        </div>
      </div>
      <div className={activeMenu ? styles.mobileMenu : styles.mobileMenuHidden}>
        {menuItem.map((key) => {
          return (
            <li
              onClick={() => setActive(key)}
              className={active === key ? styles.navActive : ""}
              key={key}
            >
              <a href={`/${key}`}>{key}</a>
            </li>
          );
        })}
      </div>
    </nav>
  );
}
