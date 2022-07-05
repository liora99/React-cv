import SectionTitle from './SectionTitle'
import SectionItem from './SectionItem'
import Skill from './Skill'
const Section = () => {
    return (
        <div>
            <div className='conteneur1'>

            <div className='conteneur2'>

            <div className='secClass'>
            <SectionTitle title='EXPERIENCE'/>
            <div className='flex'>
            <div>   
            <SectionItem t1='ASP.NET 5' t2='TEAMLEADER'  t3='2020-2021' t4='Explain the job that you have done and the results that you have got!'/>
            </div>
            <div> 
            <SectionItem t1='ASP.NET 3.0' t2='TEAMLEADER' t3='2019-2020' t4='Explain the job that you have done and the results that you have got!'/> 
            </div> 
            <div> 
            <SectionItem t1='ASP.NET 2.0' t2='TEAMLEADER' t3='2018-2019' t4='Explain the job that you have done and the results that you have got!'/>  
            </div>
            </div>
            </div>


            <div className='secClass'>
            <SectionTitle title='FORMATION'/>
            <SectionItem t1='DEGREE' t2='UNIVERSITY' t3='2017-2018' t4="Explain the formation's specificities: your degree,options,..."/>
            <SectionItem t1='DEGREE' t2='UNIVERSITY' t3='2017-2018' t4="Explain the formation's specificities: your degree,options,..."/>
            <SectionItem t1='DEGREE' t2='UNIVERSITY' t3='2017-2018' t4="Explain the formation's specificities: your degree,options,..."/>
            </div>
            <div className='secClass'>
            <SectionTitle title='HOBBIES'/>
            <p> Explain the formation's specificities: your degree,options,... </p>
            </div>

           </div>

           <div className='conteneur3'>

             <div className='secClass'>
            <SectionTitle title='PROFILE'/>
            <div> Explain in few line your professional training, your capabilities and your carrer's objectives. </div>
            </div>

            

           
           
            <div className='secClass'>
            <SectionTitle title='SKILL'/>
            <Skill title1='Web' title2='UI/UX Design' title3='ASP.NET CORE' title4='MS SQL' title5='Github' title6='add'  />
            
            </div>
            <div className='secClass'>
            <SectionTitle title='PERSONALITY'/>
            <Skill title1='Reactive' title2='Ambitious' title3='ASP.NET CORE' title4='Creative' title5='Reliable'  />
            </div>
            <div className='secClass'>
            <SectionTitle title='lANGUAGES'/>
            <Skill title1='Hebrew' title2='English' title3='French'/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Section
