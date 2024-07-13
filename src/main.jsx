import React from 'react'
import './index.css'
import TeamScreen from './screens/TeamScreen.jsx'
import HomeScreen from './screens/HomeScreen.jsx'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Router
} from 'react-router-dom';
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/publication' element={<TeamScreen />} />
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
