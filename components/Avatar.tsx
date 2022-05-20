import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Avatar = ({ seed, large }: { seed?: string; large?: boolean }) => {
  const { data: session } = useSession()

  return (
    <div
      className={`relative h-10 w-10 overflow-hidden rounded-full border-gray-300 bg-white ${
        large && 'h-20 w-20'
      }`}
    >
      <Image
        layout="fill"
        src={`https://avatars.dicebear.com/api/open-peeps/${
          seed || session?.user?.image || 'placeholder'
        }.svg`}
      />
    </div>
  )
}

export default Avatar
