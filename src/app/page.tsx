import React from "react";
import styles from "./page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import { topMenu, topMenuLinks } from "@/constants/const";
import { getAllArticles, getArticleById } from "@/apis/article";
import type { Article } from "@/types/article";

export default async function Home() {
  const articles = await getAllArticles();
  return (
    <main className={styles.main}>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      {topMenu.map((menu, index) => (
        <Link key={index} href={topMenuLinks[index]} fontSize={22}>
          <h2>{menu} &rarr;</h2>
        </Link>
      ))}
      <Box className={styles.card} fontSize={25} borderBottom="medium" borderBottomStyle="solid">Recent Posts</Box>
      {articles.map((article: Article) => (
        <Link key={article.id} href={`/articles/${article.id}`}>
          <Box className={styles.card} fontSize={20}>{article.title}</Box>
        </Link>
      ))}
    </main>
  );
}
