import { Route, Routes } from 'react-router-dom'
import Checkup from './checkup/checkup'
import Overview from './overview/overview'
import SideNav from '../../components/sideNav/sideNav'

function Dashboard() {

  return (
    <div className='flex '>
        <SideNav />
        <div>
            <Routes>
                <Route path={"/"} exact element={<Overview />} />
                <Route path={"/checkup"} exact element={<Checkup />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
