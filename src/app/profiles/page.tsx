import styles from "../page.module.css";
import type { Profile } from "@/types/profile";
import { getAllProfiles } from "@/apis/profile";
import { convertMdToHtml, convertHtmlToReact } from "@/functions/fucntion";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default async function Page() {
  const profiles: Profile[] = await getAllProfiles();
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.title} style={{ borderBottom: "medium solid" }}>Profile</div>
      {profiles.map(async (profile, index) => (
        <div className={styles.profile} key={index}>
          {convertHtmlToReact(await convertMdToHtml(profile.value))}
        </div>
      ))}
      <Footer />
    </main>
  )
}
