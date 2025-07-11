import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link className={styles.logo} href="/">
          <span>⚑</span>
          <span className={styles.logoText}>AlgoVisualisor</span>
        </Link>

        {/* Navigation */}
        {/* <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Explore
          </Link>
        </nav> */}

        {/* Sign In Button */}
        <button className={styles.signInBtn}>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
