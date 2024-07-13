import React from 'react'
import './index.css'

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Router
} from 'react-router-dom';
import App from './App';
import AboutScreen from './screens/AboutScreen.jsx'
import ContactScreen from './screens/ContactScreen.jsx'
import ResearchScreen from './screens/ResearchScreen.jsx'
import LeaderScreen from './screens/LeaderScreen.jsx'

import TeamScreen from './screens/TeamScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import PublicationScreen from './screens/PublicationScreen.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/research' element={<ResearchScreen />} />
      <Route path='/publication' element={<PublicationScreen />} />
      <Route path='/team' element={<TeamScreen />} />
      <Route path='/contact' element={<ContactScreen />} />
      <Route path='/weiweipeng' element={<LeaderScreen />} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
