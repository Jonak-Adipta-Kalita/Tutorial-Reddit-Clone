import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_POST_BY_POST_ID } from '../../graphql/queries'
import Post from '../../components/Post'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { Jelly } from '@uiball/loaders'

const PostPage = () => {
  const router = useRouter()
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postid,
    },
  })
  const { data: session } = useSession()

  const post: Post = data?.getPostListByPostId

  return (
    <>
      <Head>
        <title>JAK Reddit Clone - {post?.title || 'Loading...'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!post ? (
        <div className="flex w-full items-center justify-center p-10 text-xl">
          <Jelly size={50} color="#FF4501" />
        </div>
      ) : (
        <div className="group mx-auto my-7 max-w-5xl">
          <Post post={post} />
          {(session || !post) && (
            <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16 group-hover:border-gray-400">
              <p className="text-sm">
                Comment as{' '}
                <span className="text-red-500">{session?.user?.name}</span>
              </p>
              <form onSubmit={(e) => {}} className="">
                <textarea className="" />
              </form>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default PostPage
