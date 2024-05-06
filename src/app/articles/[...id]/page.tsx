import React from "react";
import styles from "../../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Article } from "@/types/article";
import { getArticleById } from "@/apis/article";
import {
  convertDate, convertMdToHtml, convertHtmlToReact
} from "@/functions/fucntion";
import Header from "@/app/components/header";

export default async function Page({ params }: { params: { id: string } }) {
  const article: Article = await getArticleById(params.id);
  return (
    <main className={styles.main}>
      <Header />
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">{article.title}</Box>
      <Box className={styles.card} fontSize={25}>
        <p>投稿日: {convertDate(article.createdAt)}</p>
      </Box>
      <Box className={styles.description} fontSize={20}>
        {convertHtmlToReact(await convertMdToHtml(article.contents2))}
      </Box>
    </main>
  );
}