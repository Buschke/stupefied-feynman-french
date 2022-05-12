import { FC } from 'react'
//import './Lecon01.css'

interface Lecon01Props {
  title: string
}

export const Lecon01: FC<Lecon01Props> = ({ title }) => {
  return (
    <div className='Lecon01'>Lecon01 {title}
      <div className="lec1">
        <ol>
          <li>Page d'accueil de Leçon 1 <br/> Je souhaite que vous prendre la temps et decouvrir la content de cette site <br/> Cordiale salutations. Si vous voulez vous pouvez manger quelque-chose comme un sandwich ou un autre chose de notre menu. Si vous avez encure du faim, vous pouvez prendre un autre petit-déjouner</li>
          <li>Lien <br/>Voici sont des liens de notre programme. Soit 30 heures avec notre collégues avec d'expertise de moin de trente anné.</li>
          <li>Tarifs</li>
        </ol>
        Salut Romain, comment vas-tu, je vous presente Romain;<br/>
      </div>
    </div>
  )
}