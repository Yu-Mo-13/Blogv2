import React from "react";
import styles from "../../page.module.css";
import { Box } from "@chakra-ui/react";
import type { Article } from "@/types/article";
import { getArticleById } from "@/apis/article";
import {
  convertDate, convertMdToHtml, convertHtmlToReact
} from "@/functions/fucntion";
import Header from "@/app/components/header";
import Footer from '@/app/components/footer';

export default async function Page({ params }: { params: { id: string } }) {
  const article: Article = await getArticleById(params.id);
  return (
    <main className={styles.articlemain}>
      <Header />
      <Box className={styles.title} borderBottom="medium" borderBottomStyle="solid">Blog</Box>
      <Box className={styles.articlecard}>タイトル: {article.title}</Box>
      <Box className={styles.articlecard}>
        投稿日: {convertDate(article.createdAt)}
      </Box>
      <Box className={styles.description}>
        {convertHtmlToReact(await convertMdToHtml(article.contents))}
      </Box>
      <Footer />
    </main>
  );
}