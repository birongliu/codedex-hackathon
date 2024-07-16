import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h4>Contact Us</h4>
          <p>sipnplaynyc@gmail.com<br />718-971-1684</p>
          <div className={styles.socialLinks}>
            <a href="https://discord.com" className={styles.socialIcon}>Discord</a>
            <a href="https://www.tiktok.com" className={styles.socialIcon}>TikTok</a>
            <a href="https://www.instagram.com" className={styles.socialIcon}>Instagram</a>
            <a href="https://www.facebook.com" className={styles.socialIcon}>Facebook</a>
          </div>
        </div>
        <div className={styles.section}>
          <h4>Location</h4>
          <p>471 5th Ave Brooklyn, NY 11215</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.949218684377!2d-73.991083!3d40.6702876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a229c94b439%3A0x7f8c3c2d0c1e5e85!2s471%205th%20Ave%2C%20Brooklyn%2C%20NY%2011215!5e0!3m2!1sen!2sus!4v1627648820215!5m2!1sen!2sus"
            width="300"
            height="200"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
