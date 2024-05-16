import './App.css'
import me from './assets/me.jpeg'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <img src={me} className="rounded-full" />
    </>
  )
}

export default App
