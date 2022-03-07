import { FC } from 'react'
import { ActiveLink } from './ActiveLink'

interface MenuItem {
  text: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
]

export const NavigationBar:FC = () => {
  return (
    <nav>
      {
        menuItems.map(({text, href}) => (
          <ActiveLink key={href} text={text} href={href}/>
        ))
      }
    </nav>
  )
}
