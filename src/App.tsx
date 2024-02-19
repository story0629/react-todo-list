import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Hook from './Pages/Hook'
import Classic from './Pages/Classic'

import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="hook" element={<Hook/>} />
        <Route path="classic" element={<Classic/>} />
      </Routes>
      <Layout/>
    </div>
  )
}

export default App
