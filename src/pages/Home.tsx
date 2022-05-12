import { FC } from 'react'
//import './Home.css'

export interface HomeProps {
  title: string
}

export const Home: FC<HomeProps> = ({ title }) => {
  return (
    <div className='Home'>Home {title}
    
    </div>
  )
}