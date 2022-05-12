import { FC } from 'react'
//import './Lecon02.css'

interface Lecon02Props {
  title: string
}

export const Lecon02: FC<Lecon02Props> = ({ title }) => {
  return (
    <div className='Lecon02'>Lecon02 {title}
      
    </div>
  )
}