import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

import Main from './pages/main/Main';
import PMain from './pages/cardDetail/PMain';
import Community from './pages/community/Community';
import Quiz from './pages/quiz/Quiz';
import CommunityDetail from './pages/community/CommunityDetail';

import Detail from './pages/cardDetail/Detail';

import ComResult from './pages/community/ComResult';
import SignUp from './pages/login/SignUp';
import Signin from './pages/login/SignIn';
import Intro from './pages/Intro/Intro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        //element: <PMain/>
        element: <Intro />,
      },

      {
        path: 'Intro',
        element: <Intro />,
      },
      {
        path: 'PMain',
        element: <PMain />,
      },
      {
        path: 'politician/id/:MONA_CD',
        element: <Detail />,
      },
      {
        path: 'SignUp',
        element: <SignUp />,
      },
      {
        path: 'SignIn',
        element: <Signin />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: '/communityDetail/:community_id/board/:board_id',
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
