import { FC } from 'react'
import Link from 'next/link'

import MainLayout from '../components/layouts/MainLayout'

const Home: FC = () => {
  return (
    <MainLayout>
      <h1 className="title">
          Ir a <Link href="/about">About</Link>
      </h1>

      <p className="description">
          Get started by editing{' '}
      </p>
    </MainLayout>
  )
}

export default Home