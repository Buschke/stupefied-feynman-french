import { FC } from 'react'
//import './French.css'
import { Lecon01 } from '../components/Lecon01'
import { Lecon02 } from '../components/Lecon02'
import { Lecon03 } from '../components/Lecon03'
import { Lecon04 } from '../components/Lecon04'
import { Lecon05 } from '../components/Lecon05'
import { Lecon06 } from '../components/Lecon06'
import { Lecon07 } from '../components/Lecon07'
import { Lecon08 } from '../components/Lecon08'
import { Lecon09 } from '../components/Lecon09'
import { Lecon10 } from '../components/Lecon10'

export interface FrenchProps {
  title: string
}

export const French: FC<FrenchProps> = ({ title }) => {
  return (
    <div className='French'>French {title}
      <Lecon01 title='Lecon 1'/>
      <Lecon02 title='Lecon 2'/>
      <Lecon03 title='Lecon 3'/>
      <Lecon04 title='Lecon 4'/>      
      <Lecon05 title='Lecon 5'/>
      <Lecon06 title='Lecon 6'/>
      <Lecon07 title='Lecon 7'/>
      <Lecon08 title='Lecon 8'/>
      <Lecon09 title='Lecon 9'/>
      <Lecon10 title='Lecon 10'/>
    </div>
  )
}