import type { Metadata } from "next";
import Image from "next/image";
import styles from "./maintenance.module.css";

export const metadata: Metadata = {
  title: "メンテナンス中 | m_yuya's monologue",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenancePage() {
  return (
    <main className={styles.main}>
      <section className={styles.panel} aria-labelledby="maintenance-title">
        <Image
          className={styles.logo}
          src="/monologue.png"
          alt="m_yuya's monologue"
          width={120}
          height={82}
          priority
        />
        <p className={styles.label}>Maintenance</p>
        <h1 id="maintenance-title" className={styles.title}>
          現在メンテナンス中です
        </h1>
        <p className={styles.message}>
          サイトの更新作業を行っています。しばらく時間をおいてから再度アクセスしてください。
        </p>
      </section>
    </main>
  );
}
