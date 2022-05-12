import { FC } from 'react'
//import './Lecon09.css'

interface Lecon09Props {
  title: string
}

export const Lecon09: FC<Lecon09Props> = ({ title }) => {
  return (
    <div className='Lecon09'>Lecon09 {title}
    
    </div>
  )
}