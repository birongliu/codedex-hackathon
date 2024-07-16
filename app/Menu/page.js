import styles from './menu.module.css';

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.title}>Our Menu</h1>
      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Coffee</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Latte</p>
            <p className={styles.itemPrice}>$4.75 (H) / $5.25 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Cortado</p>
            <p className={styles.itemPrice}>$4.25 (H) / $4.75 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Drip Coffee</p>
            <p className={styles.itemPrice}>Small: $3 (H) / $3.50 (C)<br />
              Medium: $3.50 (H)<br />
              Large: $4 (H) / $4.25 (C)
            </p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Cafe Au Lait</p>
            <p className={styles.itemPrice}>$3.25 (H)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Cappuccino</p>
            <p className={styles.itemPrice}>$4.50 (H)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Mocha</p>
            <p className={styles.itemPrice}>$5.75 (H) / $6.25 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Red Eye</p>
            <p className={styles.itemPrice}>$4.50 (H) / $4.75 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Americano</p>
            <p className={styles.itemPrice}>$3.75 (H) / $4.25 (C)</p>
          </div>
        </div>
      </div>
      <div className={styles.menuSection}>
        <h2 className={styles.sectionTitle}>Speciality Drinks</h2>
        <div className={styles.menuItems}>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Matcha Latte</p>
            <p className={styles.itemPrice}>$5.25 (H) / $5.75 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Nutella Latte</p>
            <p className={styles.itemPrice}>$5.75 (H) / $6.25 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Dirty Chai</p>
            <p className={styles.itemPrice}>$6.25 (H) / $6.75 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Rose Latte</p>
            <p className={styles.itemPrice}>$5.75 (H) / $6.25 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Bumblebee Latte</p>
            <p className={styles.itemPrice}>$6.25 (H) / $6.75 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Hot Chocolate</p>
            <p className={styles.itemPrice}>$4.50 (H)<br />S'mores: $5.50</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Chai</p>
            <p className={styles.itemPrice}>$5.00 (H) / $5.50 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Lavendar Latte</p>
            <p className={styles.itemPrice}>$5.75 (H) / $6.25 (C)</p>
          </div>
          <div className={styles.menuItem}>
            <p className={styles.itemName}>Brown Sugar Latte</p>
            <p className={styles.itemPrice}>$5.75 (H) / $6.25 (C)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
