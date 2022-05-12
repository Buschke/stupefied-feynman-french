import { FC } from 'react'
//import './Lecon06.css'

interface Lecon06Props {
  title: string
}

export const Lecon06: FC<Lecon06Props> = ({ title }) => {
  return (
    <div className='Lecon06'>Lecon06 {title}
    
    </div>
  )
}