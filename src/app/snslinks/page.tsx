"use client";
import React from "react";
import styles from "../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Sns } from '../../types/sns';
import { getAllSns } from '../../apis/sns';

export async function Page() {
  const snslinks: Sns[] = await getAllSns();
  return (
    <main className={styles.main}>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Link className="title" key={"title"} href="/">
        <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      </Link>
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