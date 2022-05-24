import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { GET_POST_BY_POST_ID } from '../../graphql/queries'
import Post from '../../components/Post'
import Head from 'next/head'

const PostPage = () => {
  const router = useRouter()
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postid,
    },
  })

  const post: Post = data?.getPostListByPostId

  return (
    <div className="">
      <Head>
        <title>JAK Reddit Clone - {post?.title || 'Loading...'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Post post={post} />
    </div>
  )
}

export default PostPage
