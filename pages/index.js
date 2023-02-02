import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page 3</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia
          pariatur, accusantium vitae, eveniet culpa exercitationem magni eaque,
          ut quo architecto. Soluta eum deserunt modi. Eligendi est blanditiis
          beatae quisquam.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quia
          pariatur, accusantium vitae, eveniet culpa exercitationem magni eaque,
          ut quo architecto. Soluta eum deserunt modi. Eligendi est blanditiis
          beatae quisquam.
        </p>
        <Link href="/ninjas" legacyBehavior>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
