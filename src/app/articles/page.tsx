import Link from "next/link";
import styles from "../page.module.css";
import type { Article } from "@/types/article";
import { getAllArticles } from "@/apis/article";
import { rootUrl } from "@/constants/const";
import { convertDate } from "@/functions/fucntion";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { FunctionEnum } from "@/enum/function";

export default async function Page() {
  const articles: Article[] = await getAllArticles();
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.title} style={{ borderBottom: "medium solid" }}>
        Blog
      </div>
      {articles.map((article, index) => (
        <Link
          className={styles.card}
          key={index}
          href={`${rootUrl}/${FunctionEnum.ARTICLES}/id=${article.id}`}
        >
          {article.title} ({convertDate(article.createdAt)} 更新)
        </Link>
      ))}
      <Footer />
    </main>
  );
}
