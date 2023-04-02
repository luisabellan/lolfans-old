import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/HeaderMenu.module.scss'

export default function HeaderMenu() {
  return (
    <div className="flex flex-row">
      <div className="flex-end w-9/12">
        <Image
          src="/logos/logo.png"
          alt="LoLFans Logo"
          className=""
          width={50}
          height={50}
          priority
        />
      </div>
      <div className="flex flex-row w-full justify-end items-center">
        <div className='flex'>
          <li className="list-none pr-6">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none pr-6">
            <Link href="/players">Players</Link>
          </li>
          <li className="list-none pr-6">
            <Link href="/champions">Champions</Link>
          </li>
          <li className="list-none  pr-6">
            <Link href="/events">Events</Link>
          </li>
        </div>
      </div>
    </div>
  )
}
