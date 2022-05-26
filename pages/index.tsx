import type { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import Feed from '../components/Feed'
import PostBox from '../components/PostBox'
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries'
import { useQuery } from '@apollo/client'
import SubredditRow from '../components/SubredditRow'

const Home: NextPage = () => {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  })

  const subreddits: Subreddit[] = data?.getSubredditsListWithLimit

  return (
    <div className="my-7 mx-auto max-w-5xl">
      <Head>
        <title>JAK Reddit Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostBox />
      <div className="flex">
        <Feed />
        <div className="sticky top-36 mx-5 mt-5 hidden h-fit max-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div className="">
            {subreddits?.map((subreddit, i) => (
              <SubredditRow
                key={subreddit.id}
                index={i}
                topic={subreddit.topic}
              />
            ))}
          </div>
        </div>
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
