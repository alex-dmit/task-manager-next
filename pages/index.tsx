import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../src/components/Hero'
import { Tasks } from '../src/tasks/Tasks'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Landing page</title>
        <meta name="description" content="Landing page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Hero /> */}
      <Tasks />
    </>
  )
}

export default Home
