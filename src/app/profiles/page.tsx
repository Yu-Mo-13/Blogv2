import React from "react";
import styles from "../page.module.css";
import { Box } from "@chakra-ui/react";
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
      <Box className={styles.title} borderBottom="medium" borderBottomStyle="solid">Profile</Box>
      {profiles.map(async (profile, index) => (
        <Box className={styles.profile} key={index}>
          {convertHtmlToReact(await convertMdToHtml(profile.value))}
        </Box>
      ))}
      <Footer />
    </main>
  )
}