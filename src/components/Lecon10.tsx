import { FC } from 'react'
//import './Lecon10.css'

interface Lecon10Props {
  title: string
}

export const Lecon10: FC<Lecon10Props> = ({ title }) => {
  return (
    <div className='Lecon10'>Lecon10 {title}
    
    </div>
  )
}