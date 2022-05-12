import { FC } from 'react'
//import './Lecon03.css'

interface Lecon03Props {
  title: string
}

export const Lecon03: FC<Lecon03Props> = ({ title }) => {
  return (
    <div className='Lecon03'>Lecon03 {title}
    
    </div>
  )
}