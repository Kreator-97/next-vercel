import React from 'react'

import MainLayout from '../../components/layouts/MainLayout'
import DarkLayout from '../../components/layouts/DarkLayout'

const About = () => {
  return (
    <>
      <h1 className="title" style={{color: '#0070F3'}}>About</h1>
      <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, facere.</p>
    </>
  )
}

About.getLayout = function getLayout(page: React.FunctionComponent) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}

export default About