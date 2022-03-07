import { FC } from 'react'
import Head from 'next/head'

import { NavigationBar } from '../NavigationBar'
import styles from './MainLayout.module.css'

const MainLayout:FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Donato</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavigationBar />

      <main className={styles.main}>
        {
          children
        }
      </main>
    </div>
  )
}

export default MainLayout