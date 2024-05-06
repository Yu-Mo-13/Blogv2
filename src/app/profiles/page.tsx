import React from "react";
import styles from "../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Profile } from "@/types/profile";
import { getAllProfiles } from "@/apis/profile";
import { rootUrl, endPoints } from "@/constants/const";
import { convertMdToHtml, convertHtmlToReact } from "@/functions/fucntion";
import Header from "@/app/components/header";

export default async function Page() {
  const profiles: Profile[] = await getAllProfiles();
  return (
    <main className={styles.main}>
      <Header />
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">Profile</Box>
      {profiles.map(async (profile, index) => (
        <Link key={index} href={`${rootUrl}${endPoints.profiles}/${profile.id}`} fontSize={22}>
          <h2>{convertHtmlToReact(await convertMdToHtml(profile.value))}</h2>
        </Link>
      ))}
    </main>
  )
}