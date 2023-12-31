
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import  App  from './App';
import { Patients } from './pages/Patients';
import { Sessions } from './pages/Sessions';
import { Tips } from './pages/Tips';
import { Prescriptions } from './pages/Prescriptions';
import { Exams } from './pages/Exams';
import './styles/reset.css';
import { Register } from './pages/Register';
import { WelcomePage } from './pages/WelcomePage';

const router = createHashRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <WelcomePage />,
      },
      {
        path: 'patients',
        element: <Patients />,
      },
      {
        path: 'sessions',
        element: <Sessions/>,
      },
      {
        path: 'tips',
        element: <Tips />,
      },
      {
        path: 'prescriptions',
        element: <Prescriptions />,
      },
      {
        path: 'exams',
        element: <Exams />,
      },
      {
        path: 'register-patient',
        element: <Register />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
