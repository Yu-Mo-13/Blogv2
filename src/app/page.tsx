import React from "react";
import styles from "./page.module.css";
import { Link, Box } from "@chakra-ui/react";
import { topMenu, topMenuLinks } from "@/constants/const";
import { getRecentArticles } from "@/apis/article";
import type { Article } from "@/types/article";
import { convertDate } from "@/functions/fucntion";
import Header from "@/app/components/header";
import Footer from "./components/footer";

export default async function Page() {
  const articles = await getRecentArticles();
  return (
    <main className={styles.main}>
      <Header />
      {topMenu.map((menu, index) => (
        <Link className={styles.topmenu} key={index} href={topMenuLinks[index]}>
          <h2>{menu} &rarr;</h2>
        </Link>
      ))}
      <Box className={styles.title} borderBottom="medium" borderBottomStyle="solid">Recent Posts</Box>
      {articles.length > 0 && articles.map((article: Article) => (
        <Link className={styles.card} key={article.id} href={`/articles/id=${article.id}`}>
          <Box className={styles.card}>{`${article.title} (${convertDate(article.createdAt)} 更新)`}</Box>
        </Link>
      ))}
      <Footer />
    </main>
  );
}
