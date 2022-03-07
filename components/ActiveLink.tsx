import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './NavigationBar.module.css'

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({text, href}) => {
  const { asPath } = useRouter()
  const active = asPath === href ? styles.active : ''

  return (
    <Link href={href}>
      <a className={`${styles.item} ${active}`}>{text}</a>
    </Link>
  )
}
