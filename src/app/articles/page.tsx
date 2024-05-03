import React from "react";
import styles from "../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Article } from "@/types/article";
import { getAllArticles } from "@/apis/article";
import { rootUrl, endPoints } from "@/constants/const";
import { convertDate } from "@/functions/fucntion";

export default async function Page() {
  const articles: Article[] = await getAllArticles();
  return (
    <main className={styles.main}>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Link className="title" key={"title"} href="/">
        <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      </Link>
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">Blog</Box>
      {articles.map((article, index) => (
        <Link key={index} href={rootUrl + endPoints.articles + '/' + article.id} fontSize={22}>
          <h2>{article.title} ({convertDate(article.createdAt)}更新)</h2>
        </Link>
      ))}
    </main>
  );
}
