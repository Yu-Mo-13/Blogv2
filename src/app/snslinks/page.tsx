import React from "react";
import styles from "../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Sns } from '../../types/sns';
import { getAllSns } from '../../apis/sns';

export default async function Home() {
  const snslinks: Sns[] = await getAllSns();
  return (
    <main className={styles.main}>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">SNS</Box>
      {snslinks.map((snslink, index) => (
        <Link key={index} href={snslink.url} fontSize={22}>
          <h2>{snslink.application} ({snslink.account})</h2>
        </Link>
      ))}
    </main>
  );
}
