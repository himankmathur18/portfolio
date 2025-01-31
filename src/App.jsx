import './App.css'
import Header from './Components/Header'
import Right from './Components/Right'
import Frontend from './Components/Frontend'
import Tools from './Components/Tools'
import Sidebar from './Components/Sidebar'
import Backend from './Components/Backend'

function App() {
  return (
    <>
      <Header />
      <Right />
      <Sidebar/>
      <Frontend />
      <Backend/>
      <Tools />
      <script src="Portfolio.js"></script>
    </>
  )
}

export default App