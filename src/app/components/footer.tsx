import { Link, Box, Image } from "@chakra-ui/react";
import styles from "../page.module.css";

export default function Footer() {
  return (
    <>
      <Box className={styles.footer}>
        <hr />
        <small className={styles.center}>© 2024 m_yuya</small>
      </Box>
    </>
);
}