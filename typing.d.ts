type Vote = {
  created_at: string
  id: number
  post_id: number
  upvote: boolean
  username: string
}

type Post = {
  created_at: string
  id: number
  body: string
  image: string
  subreddit_id: string
  title: string
  username: string
  votes: Vote[]
  comments: {
    created_at: string
    id: number
    post_id: string
    text: string
    username: string
  }[]
  subreddit: {
    created_at: string
    id: number
    topic: string
  }[]
}
