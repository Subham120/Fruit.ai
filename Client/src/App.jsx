import { Route, Routes } from "react-router-dom"
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import Chat from "./Pages/Chat"
import About from "./Pages/About"
import Faq from "./Pages/Faq"
import Translate from "./Pages/Translate"
function App() {
  return (
      <div className='w-full min-h-screen bg-gray-800 '>
        <div className='max-w-screen-sm bg-white mx-auto h-screen'>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat" element={<Chat/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/Faq" element={<Faq/>}/>
            <Route path="/translate" element={<Translate/>}/>
          </Routes>
        </div>
      </div>
  )
}

export default App
