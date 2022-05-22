type Comment = {
  created_at: string
  id: number
  post_id: string
  text: string
  username: string
}

type Vote = {
  created_at: string
  id: number
  post_id: number
  upvote: boolean
  username: string
}

type Subreddit = {
  created_at: string
  id: number
  topic: string
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
  comments: Comment[]
  subreddit: Subreddit[]
}
