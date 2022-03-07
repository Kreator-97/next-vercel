import { FC } from 'react'

const DarkLayout: FC = ({children}) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      borderRadius: '4px',
      padding: '8px',
    }}>
      <h3>Dark-layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}

export default DarkLayout