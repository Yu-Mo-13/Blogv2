import React from "react";
import styles from "./page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import { topMenu, topMenuLinks } from "@/constants/const";
import { getAllArticles, getArticleById } from "@/apis/article";
import type { Article } from "@/types/article";
import { convertDate } from "@/functions/fucntion";
import Header from "@/app/components/header";

export default async function Page() {
  const articles = await getAllArticles();
  return (
    <main className={styles.main}>
      <Header />
      {topMenu.map((menu, index) => (
        <Link className={styles.card} key={index} href={topMenuLinks[index]} fontSize={22}>
          <h2>{menu} &rarr;</h2>
        </Link>
      ))}
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">Recent Posts</Box>
      {articles.length > 0 && articles.map((article: Article) => (
        <Link className={styles.card} key={article.id} href={`/articles/id=${article.id}`}>
          <Box className={styles.card} fontSize={20}>{`${article.title} (${convertDate(article.createdAt)}更新)`}</Box>
        </Link>
      ))}
    </main>
  );
}
