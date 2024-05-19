import React from "react";
import styles from "../page.module.css";
import { Link, Box } from "@chakra-ui/react";
import type { Article } from "@/types/article";
import { getAllArticles } from "@/apis/article";
import { rootUrl, endPoints } from "@/constants/const";
import { convertDate } from "@/functions/fucntion";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default async function Page() {
  const articles: Article[] = await getAllArticles();
  return (
    <main className={styles.main}>
      <Header />
      <Box className={styles.title} borderBottom="medium" borderBottomStyle="solid">Blog</Box>
      {articles.map((article, index) => (
        <Link className={styles.card} key={index} href={rootUrl + endPoints.articles + '/' + article.id}>
          {article.title} ({convertDate(article.createdAt)} 更新)
        </Link>
      ))}
      <Footer />
    </main>
  );
}
