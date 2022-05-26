import { ChevronUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Avatar from './Avatar'

const SubredditRow = ({ index, topic }: { index: number; topic: string }) => {
  return (
    <div className="flex items-center space-x-2 border-2 bg-white px-4 py-2 last:rounded-b">
      <p className="">{index + 1}</p>
      <ChevronUpIcon className="h-4 w-4 flex-shrink-0 text-green-400" />
      <Avatar seed={topic} />
      <p className="flex-1 truncate">{topic}</p>
      <Link href={`/subreddit/${topic}`}>
        <div className="cursor-pointer rounded-full bg-blue-500 px-3 text-white">
          View
        </div>
      </Link>
    </div>
  )
}

export default SubredditRow
