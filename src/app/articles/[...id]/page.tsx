import React from "react";
import styles from "../../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Article } from "@/types/article";
import { getArticleById } from "@/apis/article";
import {
  convertDate, convertMdToHtml, convertHtmlToReact
} from "@/functions/fucntion";

export default async function Page({ params }: { params: { id: string } }) {
  const article: Article = await getArticleById(params.id);
  return (
    <main className={styles.main}>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Link className="title" key={"title"} href="/">
        <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      </Link>
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