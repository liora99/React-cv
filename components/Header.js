import windows from './windows.jpeg'
const Header = () => {
    return (
        <header >
        <div className='head'> 
          <div className='head2'>
          <div className='header'> Microsoft Corporation </div> 
          <div class="herzliya">   Herzliya, Israel  <hr class="ligne" />  </div>
          </div>
          <div > <img className='bd' src={windows} alt='fenetre'/> </div>
        </div>
        </header>
    )
}

export default Header
