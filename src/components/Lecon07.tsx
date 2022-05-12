import { FC } from 'react'
//import './Lecon07.css'

interface Lecon07Props {
  title: string
}

export const Lecon07: FC<Lecon07Props> = ({ title }) => {
  return (
    <div className='Lecon07'>Lecon07 {title}
    
    </div>
  )
}