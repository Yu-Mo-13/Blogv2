import React from "react";
import styles from "../page.module.css";
import { Link, Box } from "@chakra-ui/react";
import type { Sns } from '../../types/sns';
import { getAllSns } from '../../apis/sns';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default async function Page() {
  const snslinks: Sns[] = await getAllSns();
  return (
    <main className={styles.main}>
      <Header />
      <Box className={styles.title} borderBottom="medium" borderBottomStyle="solid">Link</Box>
      {snslinks.map((snslink, index) => (
        <Link className={styles.card} key={index} href={snslink.url}>
          {snslink.application} ({snslink.account})
        </Link>
      ))}
      <Footer />
    </main>
  );
}
