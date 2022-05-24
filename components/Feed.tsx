import { useQuery } from '@apollo/client'
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../graphql/queries'
import Post from './Post'
import { Jelly } from '@uiball/loaders'

const Feed = ({ topic }: { topic?: string }) => {
  const { data } = !topic
    ? useQuery(GET_ALL_POSTS)
    : useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic,
        },
      })
  const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic

  return (
    <>
      {!posts ? (
        <div className="flex w-full items-center justify-center p-10 text-xl">
          <Jelly size={50} color="#FF4501" />
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          <>
            {posts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </>
        </div>
      )}
    </>
  )
}

export default Feed
