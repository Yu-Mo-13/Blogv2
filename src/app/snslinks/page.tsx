import styles from "../page.module.css";
import type { Sns } from "../../types/sns";
import { getAllSns } from "../../apis/sns";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default async function Page() {
  const snslinks: Sns[] = await getAllSns();
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.title} style={{ borderBottom: "medium solid" }}>
        Link
      </div>
      {snslinks.map((snslink, index) => (
        <a className={styles.card} key={index} href={snslink.url} target="_blank" rel="noreferrer">
          {snslink.application} ({snslink.account})
        </a>
      ))}
      <Footer />
    </main>
  );
}
