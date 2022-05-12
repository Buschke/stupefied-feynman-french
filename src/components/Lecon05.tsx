import { FC } from 'react'
//import './Lecon05.css'

interface Lecon05Props {
  title: string
}

export const Lecon05: FC<Lecon05Props> = ({ title }) => {
  return (
    <div className='Lecon05'>Lecon05 {title}
    
    </div>
  )
}