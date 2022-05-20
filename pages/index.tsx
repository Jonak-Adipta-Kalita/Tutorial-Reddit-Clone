import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>JAK Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
      <div className=''>
        {/* Feed */}
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  return {
    props: {
      session,
    },
  }
}
