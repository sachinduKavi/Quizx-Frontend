// import Reach, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './screens/MainPage'
import Home from './screens/Home'
// import About from './screens/About'
import Dashboard from './screens/Dashboard'
import Addquiz from './screens/Addquiz'
import Question from './screens/questions'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addquiz" element={<Addquiz />} />
        <Route path='/editor' element={<MainPage/>}/>
      </Routes>
    
    </BrowserRouter>
  )
}
    // https://66eead92de4e9a441ed73561--iridescent-unicorn-f4897a.netlify.app/
export default App
