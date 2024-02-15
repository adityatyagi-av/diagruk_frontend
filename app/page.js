import Image from 'next/image'
import Landingpage from '../app/Landingpage/page'
import Home2 from './Home2/page';
import Home3 from '../app/Home3/page';
import Home4 from '../app/Home4/page';
import Home5 from '../app/Home5/page';
import Home6 from '../app/Home6/page';
import Home7 from '../app/Home7/page';
import Home8 from '../app/Home8/page';
import Home9 from '../app/Home9/page';
import Home10 from '../app/Home10/page';

export default function app() {
  return (
  <>



       
      {/* <Navbar /> */}
      {/* <Component {...pageProps} /> */}
      <div className='justify-center'>
       <Home10 className='max-h-screen'/>
        <Home2 className='max-h-screen'/>
        <Home3 className='max-h-screen'/>
        <Home4 className='max-h-screen'/>
        <Home9 className='max-h-screen'/>
        <Home6 className='max-h-screen'/>
        <Home7 className='max-h-screen'/>
        <Home8 className='max-h-screen'/>
  </div>
  
 

  </>
  )
}
