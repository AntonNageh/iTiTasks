import Footer from './components/footer'
import Movies from './components/movies'
import './App.css'
import Sliderpage from './components/Sliderpage'

function App() {

  return (
    <>
      <div className="card">
       <h1>Welcome to my movies site!</h1>
        {/* <Movies  /> */}
        <Sliderpage />
        <Footer />        
      </div>
    </>
  )
}

export default App
