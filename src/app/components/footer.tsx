import styles from "../page.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={styles.footer}>
        <hr />
        <small className={styles.center}>© {currentYear} m_yuya</small>
      </div>
    </>
);
}
