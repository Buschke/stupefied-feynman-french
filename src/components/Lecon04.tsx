import { FC } from 'react'
//import './Lecon04.css'

interface Lecon04Props {
  title: string
}

export const Lecon04: FC<Lecon04Props> = ({ title }) => {
  return (
    <div className='Lecon04'>Lecon04 {title}
    
    </div>
  )
}