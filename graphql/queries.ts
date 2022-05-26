import { gql } from '@apollo/client'

export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditsListWithLimit(limit: $limit) {
      id
      created_at
      topic
    }
  }
`

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVotesByPostId(post_id: $post_id) {
      id
      created_at
      post_id
      upvote
      username
    }
  }
`

export const GET_POST_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        username
        text
      }
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        username
        text
      }
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      subreddit {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
      comments {
        created_at
        id
        post_id
        username
        text
      }
      body
      created_at
      id
      image
      subreddit_id
      title
      username
    }
  }
`

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`
