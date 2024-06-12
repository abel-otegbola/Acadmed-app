import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/home'
import Topbar from './components/topbar/topbar'
import Dashboard from './pages/dashboard'

function App() {

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/dashboard/*"} exact element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
