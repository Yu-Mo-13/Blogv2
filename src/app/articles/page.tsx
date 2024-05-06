import React from "react";
import styles from "../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Article } from "@/types/article";
import { getAllArticles } from "@/apis/article";
import { rootUrl, endPoints } from "@/constants/const";
import { convertDate } from "@/functions/fucntion";
import Header from "@/app/components/header";

export default async function Page() {
  const articles: Article[] = await getAllArticles();
  return (
    <main className={styles.main}>
      <Header />
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">Blog</Box>
      {articles.map((article, index) => (
        <Link key={index} href={rootUrl + endPoints.articles + '/' + article.id} fontSize={22}>
          <h2>{article.title} ({convertDate(article.createdAt)}更新)</h2>
        </Link>
      ))}
    </main>
  );
}
