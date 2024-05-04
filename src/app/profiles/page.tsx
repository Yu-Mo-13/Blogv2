import React from "react";
import styles from "../page.module.css";
import { Link, Box, Image } from "@chakra-ui/react";
import type { Profile } from "@/types/profile";
import { getAllProfiles } from "@/apis/profile";
import { rootUrl, endPoints } from "@/constants/const";
import { convertRichTextToPlainText } from "@/functions/fucntion";

export default async function Page() {
  const profiles: Profile[] = await getAllProfiles();
  return (
    <main className={styles.main}>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Link className="title" key={"title"} href="/">
        <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      </Link>
      <Box className={styles.title} fontSize={25} borderBottom="medium" borderBottomStyle="solid">Profile</Box>
      {profiles.map((profile, index) => (
        <Link key={index} href={`${rootUrl}${endPoints.profiles}/${profile.id}`} fontSize={22}>
          <h2>{convertRichTextToPlainText(profile.value)}</h2>
        </Link>
      ))}
    </main>
  )
}