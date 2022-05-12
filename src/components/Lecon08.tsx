import { FC } from 'react'
//import './Lecon08.css'

interface Lecon08Props {
  title: string
}

export const Lecon08: FC<Lecon08Props> = ({ title }) => {
  return (
    <div className='Lecon08'>Lecon08 {title}
    
    </div>
  )
}