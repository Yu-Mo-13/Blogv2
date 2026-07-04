import Link from "next/link";
import styles from "./page.module.css";
import { topMenu, topMenuLinks } from "@/constants/const";
import { getRecentArticles } from "@/apis/article";
import type { Article } from "@/types/article";
import { rootUrl } from "@/constants/const";
import { convertDate } from "@/functions/fucntion";
import Header from "@/app/components/header";
import Footer from "./components/footer";
import { FunctionEnum } from "@/enum/function";

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
      <div className={styles.title} style={{ borderBottom: "medium solid" }}>
        Recent Posts
      </div>
      {articles.length > 0 &&
        articles.map((article: Article) => (
          <Link
            className={styles.card}
            key={article.id}
            href={`${rootUrl}/${FunctionEnum.ARTICLES}/id=${article.id}`}
          >
            {`${article.title} (${convertDate(article.createdAt)} 更新)`}
          </Link>
        ))}
      <Footer />
    </main>
  );
}
