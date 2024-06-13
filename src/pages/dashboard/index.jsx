import { Route, Routes } from 'react-router-dom'
import Checkup from './checkup/checkup'
import Overview from './overview/overview'
import SideNav from '../../components/sideNav/sideNav'
import SymtomCheck from './symptom-check/symptomCheck'

function Dashboard() {

  return (
    <div className='flex '>
        <SideNav />
        <div>
            <Routes>
                <Route path={"/"} exact element={<Overview />} />
                <Route path={"/checkup"} exact element={<Checkup />} />
                <Route path={"/checkup/symptom-check"} exact element={<SymtomCheck />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard
