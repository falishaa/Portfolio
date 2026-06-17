import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import CreativeLab from './components/CreativeLab'
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Nav />
    <main>
      <Home />
      <About />
      <Portfolio />
      <CreativeLab />
      <Contact />
    </main>
    </>
  )
}

export default App