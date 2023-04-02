import Link from 'next/link'
import styles from '@/styles/Home.module.scss'

export default function HeaderMenu() {
  return (
    <>
      <div className={styles.menuHeader}>
        <div className="flex flex-row">
          <li className="list-none">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none">
            <Link href="/players">Players</Link>
          </li>
          <li className="list-none">
            <Link href="/champions">Champions</Link>
          </li>
          <li className="list-none">
            <Link href="/events">Events</Link>
          </li>
        </div>
      </div>
    </>
  )
}
