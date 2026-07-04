import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

export default function Header() {
  return (
    <>
      <Image
        src="/monologue.png"
        alt="icon"
        width={120}
        height={82}
        style={{ height: "auto" }}
      />
      <Link className={styles.headerTitleLink} key={"title"} href="/">
        <div className={styles.title}>m_yuya&apos;s monologue</div>
      </Link>
    </>
);
}
