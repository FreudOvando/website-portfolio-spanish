import './App.css'
import Footer from './component/Footer'
import Header from './component/Header'
import Main from './component/Main'
import Proyects from './component/Proyects'


function App() {
  

  return (
  <div className='flex items-center justify-center flex-col min-w-[375px] w-auto '>
  <Header />
  <Main />
  <Proyects />
  <Footer/>
  </div>
  )
}

export default App
