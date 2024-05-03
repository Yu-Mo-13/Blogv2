import React from "react";
import styles from "../../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Article } from "@/types/article";
import { getArticleById } from "@/apis/article";
import { convertRichTextToPlainText } from "@/functions/fucntion";

export default async function Page({ params }: { params: { id: string } }) {
  const article: Article = await getArticleById(params.id);
  return (
    <main className={styles.main}>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">{article.title}</Box>
      <Box className={styles.card} fontSize={20}>{convertRichTextToPlainText(article.contents)}</Box>
    </main>
  );
}
