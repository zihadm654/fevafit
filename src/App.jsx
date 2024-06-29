import Footer from './components/footer'
import Benefits from './components/layout/benefits'
import Engage from './components/layout/engage'
import Experts from './components/layout/experts'
import Hero from './components/layout/hero'
import Powered from './components/layout/powered'
import Sucess from './components/layout/success'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Navbar scroll={true}/>
      <main className='flex-1'>
        <Hero/>
        <Powered/>
        <Benefits/>
        <Sucess/>
        <Experts/>
        <Engage/>
      </main>
      <Footer/>
    </div>
  )
}

export default App