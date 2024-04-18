
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './Store/Store'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// pages ....
import NavbarComponent from './Components/NavbarComponent'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import Ipd from './Pages/IPD/Ipd'
import Opd from './Pages/OPD/Opd'
import AddOpd from './Pages/OPD/AddOpd';
import AddIpd from './Pages/IPD/AddIpd';


function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/ipd' element={<Ipd />} />
            <Route path='/addipd' element={<AddIpd />} />
            <Route path='/opd' element={<Opd />} />
            <Route path='/addopd' element={<AddOpd />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </>
  )
}

export default App