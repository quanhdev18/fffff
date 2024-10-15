import React, { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { NavigationManager } from '@/components/NavigationManager';
import Wrapper from '@/components/Wrapper';

const PageA = lazy(() => import('@/pages/List'));
const Test = lazy(() => import('@/components/WorkGroup'));
export const routes = [
  {
    path: '/',
    element: (
      <NavigationManager>
        <Wrapper>
          <Outlet/>
        </Wrapper>
      </NavigationManager>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <PageA />
          </Suspense>
        ),
      },
      {
        path: 'list',
        element: (
          <Suspense>
            <PageA />
          </Suspense>
        ),
      },
      {
        path: 'test',
        element: (
          <Suspense>
            <Test />
          </Suspense>
        ),
      }
    ],
  },
];
