import { RouteObject } from 'react-router';
import { lazy } from 'react';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import EventsPage from './pages/events';
import PrayerPage from './pages/prayer';
import GivePage from './pages/give';
import TeachingsPage from './pages/teachings';
import WatchLivePage from './pages/watch-live';
const ProductsPage = lazy(() => import('./pages/Products'));
const CartPage = lazy(() => import('./pages/cart'));
const CheckoutSuccess = lazy(() => import('./pages/checkout/success'));
const CheckoutCancel = lazy(() => import('./pages/checkout/cancel'));
// Eager import so renderToString doesn't hit a Suspense boundary on 404 routes
// and abort to client rendering. The prod 404 page is tiny; the dev-tools
// variant stays lazy because it pulls in dev-only code we don't want in
// production bundles.
import ProdNotFoundPage from './pages/_404';

const NotFoundPage = ProdNotFoundPage;

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/events',
    element: <EventsPage />,
  },
  {
    path: '/prayer',
    element: <PrayerPage />,
  },
  {
    path: '/give',
    element: <GivePage />,
  },
  {
    path: '/teachings',
    element: <TeachingsPage />,
  },
  {
    path: '/watch-live',
    element: <WatchLivePage />,
  },
  {
    path: '/give/donate',
    element: <ProductsPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/checkout/success',
    element: <CheckoutSuccess />,
  },
  {
    path: '/checkout/cancel',
    element: <CheckoutCancel />,
  },
  {
    id: 'airo-not-found',
    path: '*',
    element: <NotFoundPage />,
  },
];

// Types for type-safe navigation
export type Path = '/';

export type Params = Record<string, string | undefined>;
