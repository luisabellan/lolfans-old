import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import HeaderMenu from '@/components/HeaderMenu'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

const headStyle = 'text-3xl, font-bold'

export default function SearchPlayer() {
  return (
    <>
      <Head>
        <title>Search player</title>
        <meta name="description" content="Player search" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderMenu />
      <main className={styles.main}></main>
    </>
  )
}
