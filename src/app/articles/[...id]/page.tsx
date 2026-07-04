import styles from "../../page.module.css";
import type { Article } from "@/types/article";
import { getArticleById } from "@/apis/article";
import {
  convertDate, convertMdToHtml, convertHtmlToReact
} from "@/functions/fucntion";
import Header from "@/app/components/header";
import Footer from '@/app/components/footer';

type PageProps = {
  params: Promise<{
    id: string[];
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const article: Article = await getArticleById(id[0]);

  return (
    <main className={styles.articlemain}>
      <Header />
      <div className={styles.title} style={{ borderBottom: "medium solid" }}>Blog</div>
      <div className={styles.articlecard}>タイトル: {article.title}</div>
      <div className={styles.articlecard}>
        投稿日: {convertDate(article.createdAt)}
      </div>
      <div className={styles.description}>
        {convertHtmlToReact(await convertMdToHtml(article.contents))}
      </div>
      <Footer />
    </main>
  );
}
