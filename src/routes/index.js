import React, { lazy, Suspense } from 'react';
import { Redirect } from 'react-router-dom';

import Home from '../application/Home';
const Recommend = lazy(() => import('../application/Recommend'));
const Singers = lazy(() => import('../application/Singers'));
const Rank = lazy(() => import('../application/Rank'));
const Album = lazy(() => import('../application/Album'));

const SuspenseComponent = Component => props => (
  <Suspense fallback={<div>loading...</div>}>
    <Component {...props} />
  </Suspense>
)

export default [
  {
    path: '/',
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to={'/recommend'} />
      },
      {
        path: '/recommend',
        component: SuspenseComponent(Recommend),
        routes: [
          {
            path: '/recommend/:id',
            component: SuspenseComponent(Album),
          }
        ]
      },
      {
        path: '/singers',
        component: SuspenseComponent(Singers),
      },
      {
        path: '/rank',
        component: SuspenseComponent(Rank),
      }
    ]
  }
]