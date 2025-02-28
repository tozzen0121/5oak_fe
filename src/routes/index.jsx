import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';
import LoginRoutes from './LoginRoutes';
import ComponentsRoutes from './ComponentsRoutes';

import SimpleLayout from 'layout/Simple';
import Loadable from 'components/Loadable';

import { SimpleLayoutType } from 'config';

// render - landing page
const PagesLanding = Loadable(lazy(() => import('pages/landing')));

const HomePage = Loadable(lazy(() => import('pages/user/home')));
const GamesPage = Loadable(lazy(() => import('pages/user/games')));
const GameViewPage = Loadable(lazy(() => import('pages/user/game-view')));
const TeamPage = Loadable(lazy(() => import('pages/user/team')));
const NewsPage = Loadable(lazy(() => import('pages/user/news')));
const NewsViewPage = Loadable(lazy(() => import('pages/user/news-view')));
const CareersPage = Loadable(lazy(() => import('pages/user/careers')));
const CareersViewPage = Loadable(lazy(() => import('pages/user/careers-view')));
const CareersApplyPage = Loadable(lazy(() => import('pages/user/careers-apply')));
const CareersApplySuccessPage = Loadable(lazy(() => import('pages/user/careers-apply-success')));
const ContactUsPage = Loadable(lazy(() => import('pages/user/contact-us')));
const ContactUsSuccessPage = Loadable(lazy(() => import('pages/user/contact-success')));

const ComingSoonPge = Loadable(lazy(() => import('pages/user/coming-soon')));

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <ComingSoonPge />, 
    }, 
    {
      path: '/staging',
      element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          path: '', 
          element: <HomePage />
        }, 
        {
          path: 'home',
          element: <HomePage />
        },
        {
          path: 'games',
          element: <GamesPage />
        }, 
        {
          path: 'games/:id',
          element: <GameViewPage />
        }, 
        {
          path: 'team',
          element: <TeamPage />
        }, 
        {
          path: 'news',
          element: <NewsPage />
        }, 
        {
          path: 'news/:id',
          element: <NewsViewPage />
        }, 
        {
          path: 'careers',
          element: <CareersPage />
        }, 
        {
          path: 'careers/apply-success',
          element: <CareersApplySuccessPage />
        }, 
        {
          path: 'careers/:id',
          element: <CareersViewPage />
        }, 
        {
          path: 'careers/:id/apply',
          element: <CareersApplyPage />
        }, 
        {
          path: 'contact',
          element: <ContactUsPage />
        }, 
        {
          path: 'contact/success',
          element: <ContactUsSuccessPage />
        }, 
      ]
    },
    
    LoginRoutes,
    ComponentsRoutes,
    MainRoutes
  ],
  { basename: import.meta.env.VITE_APP_BASE_NAME }
);

export default router;
