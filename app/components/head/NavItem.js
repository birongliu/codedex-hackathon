"use client"
import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link';
import { menuItem } from '@/app/constants/navItemLinks';
import { usePathname } from 'next/navigation';
import { seededRandom } from 'three/src/math/MathUtils';


export default function NavItem({ className }) {
  const path = usePathname();
  console.log(path)
  return (
    <ul key={seededRandom()} className={className}>
    {menuItem.map(({name, url}) => {
      return (
        <li
          className={path === url ? styles.navActive : ""}
          key={`${url}-${name}`}
        >
          <Link key={name} href={url}>{name}</Link>
        </li>
      );
    })}
  </ul>
  )
}
