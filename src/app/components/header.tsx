import { Link, Box, Image } from "@chakra-ui/react";
import styles from "../page.module.css";

export default function Header() {
  return (
    <>
      <Image src="/monologue.png" alt="icon" width={120} height={82}></Image>
      <Link className="title" key={"title"} href="/">
        <Box className={styles.title} fontSize={25} fontWeight="bold">m_yuya&apos;s monologue</Box>
      </Link>
    </>
);
}