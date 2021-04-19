import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container} >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
          John Doe
        </h1>
        <h2>Front End Engineer</h2>
        <div className="flex flex-row justify-between w-2/5">
            <a href="#">
              <img className="h-12 mt-5" src="/twitter.png" alt="twitter icon" />
            </a>
            <a href="#">
              <img className="h-12 mt-5" src="/linkedin.png" alt="linkedin icon" />
            </a>
            <a href="#">
              <img className="h-12 mt-5" src="/mail.png" alt="mail icon" />
            </a>
            <a href="#">
              <img className="h-12 mt-5" src="/github.png" alt="github icon" />
            </a>
        </div>

      </main>

      <footer className={styles.footer}>
          Made with Love, Next.js and Tailwind {' '}
          <img src="/heart.svg" alt="Heart Logo" className={styles.logo} />
      </footer>
    </div>
  )
}
