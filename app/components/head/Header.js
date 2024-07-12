"use client";
import Image from "next/image";
import styles from "./header.module.css";
import { useState } from "react";
import NavItem from "./NavItem";
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <nav>
      <div className={styles.container}>
        <a href="/">
          <Image
            src="/sipnplay.png"
            alt="sinplay Logo"
            width={100}
            height={100}
            priority
          />
        </a>
        <NavItem className={styles.listContainer} />
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
      <NavItem className={activeMenu ? styles.mobileMenu : styles.mobileMenuHidden} />
    </nav>
  );
}
