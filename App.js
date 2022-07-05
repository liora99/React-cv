
import Header from './components/Header'
import Section from './components/Section'
import fond from './fond.jpeg'
/*import fond from './fond.jpeg'
import windows from './windows.jpeg'

 <img src={fond} alt ='fond bleu'/>
      <img src={windows} alt='fenetre'/> 
      en css:  background: url(./windows.jpeg) fixed no-repeat top right;
 deuxieme maniere d'importer des images
*/
import React from 'react'

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${fond})`}}>
      <Header />   
      <Section/>
    </div>
  )
}

export default App

