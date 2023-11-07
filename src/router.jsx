import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

import Main from './pages/main/Main';
import Detail from './pages/cardDetail/Detail';
import Login from './pages/login/Logins';
import Community from './pages/community/Community';
import Quiz from './pages/quiz/Quiz';
import CommunityDetail from './pages/community/CommunityDetail';
import ComResult from './pages/community/ComResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'Detail',
        element: <Detail />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'CommunityDetail/:id',
        element: <CommunityDetail />,
      },
      {
        path: 'quiz',
        element: <Quiz />,
      },
      {
        path: 'ComResult',
        element: <ComResult />,
      },
    ],
  },
]);

export default router;
