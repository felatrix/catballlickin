import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.css';
import NavigationBar from 'components/layout/navigation';
import Button from 'components/base/button';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ball Lickin Cat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href={`${process.env.image_cdn}images/favicon.ico`} />
      </Head>
      <Button link href="/" text={"ini button"} />
    </div>
  )
}
