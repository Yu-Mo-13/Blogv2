import React from "react";
import styles from "../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Sns } from '../../types/sns';
import { getAllSns } from '../../apis/sns';
import Header from "@/app/components/header";

export async function Page() {
  const snslinks: Sns[] = await getAllSns();
  return (
    <main className={styles.main}>
      <Header />
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">Link</Box>
      {snslinks.map((snslink, index) => (
        <Link className={styles.card} key={index} href={snslink.url} fontSize={22}>
          <h2>{snslink.application} ({snslink.account})</h2>
        </Link>
      ))}
    </main>
  );
}

export default Page;