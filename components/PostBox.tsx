import { useSession } from 'next-auth/react'
import Avatar from './Avatar'
import { PhotographIcon, LinkIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  postTitle: string
  postBody: string
  postImage: string
  subreddit: string
}

const PostBox = () => {
  const { data: session } = useSession()
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  return (
    <form
      className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2"
      onSubmit={handleSubmit(async (formData) => {})}
    >
      <div className="flex items-center space-x-2">
        <Avatar />
        <input
          {...register('postTitle', { required: true })}
          type="text"
          disabled={!session}
          className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"
          placeholder={
            session ? 'Create a post by entering a title.' : 'Sign In to Post.'
          }
        />
        <PhotographIcon
          className={`h-6 cursor-pointer text-gray-300 ${
            imageBoxOpen && 'text-blue-300'
          }`}
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
        />
        <LinkIcon className="h-6 cursor-pointer text-gray-300" />
      </div>
      {!!watch('postTitle') && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              type="text"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              placeholder="Text (Optional)"
              {...register('postBody')}
            />
          </div>
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              type="text"
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              placeholder="i.e, beastnight_tv, reactjs"
              {...register('subreddit', { required: true })}
            />
          </div>
          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                type="text"
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                placeholder="Optional..."
                {...register('postImage')}
              />
            </div>
          )}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 text-red-500">
              {errors?.postTitle?.type == 'required' && (
                <div className="">
                  <p className="">Post Title is Required!!</p>
                </div>
              )}
              {errors?.subreddit?.type == 'required' && (
                <div className="">
                  <p className="">Subreddit is Required!!</p>
                </div>
              )}
            </div>
          )}
          {!!watch('postTitle') && (
            <button
              className="w-full rounded-full bg-blue-400 p-2 text-white"
              type="submit"
            >
              Create a Post
            </button>
          )}
        </div>
      )}
    </form>
  )
}

export default PostBox
