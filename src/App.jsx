import { useState } from 'react'
import './App.css'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
// import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <section id='#home'>
          <Hero />
        </section>
        <section id='#sevices'> 
          <Services />
        </section>
        <section id='#portfolio'>
          <Portfolio />
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <section id='#contact'>
          <Contact />
        </section>
      </div>

      
    </>
  )
}

export default App
