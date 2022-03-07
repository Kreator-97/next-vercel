import { FC } from "react"
import MainLayout from "../../components/layouts/MainLayout"

const Contact: FC = () => {
  return (
    <MainLayout>
      <h1 className="title" style={{color: '#0070F3'}}>Contact us</h1>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quasi repellendus.
      </p>
    </MainLayout>
  )
}

export default Contact