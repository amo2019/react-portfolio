// @ts-nocheck
import React, { Suspense, lazy } from 'react';
import Menu from './components/Menu';
import './App.css';
import {useRoutes} from 'hookrouter';
import Routes from './components/router'
import Spinner from "./spinner/Spinner";

const Sidebar = lazy(() => import('./components/Sidebar'));

const Footer = lazy(() => import('./components/Footer'));


const App = () => {
  
const routeResult = useRoutes(Routes);

return(
  <>
  <Menu />
  <Suspense fallback={< Spinner />}>
    <Sidebar />
  </Suspense>
  <div id="main">
    <main>
    <Suspense fallback={< Spinner />}>
  {routeResult || < Spinner />}
      </Suspense>
    </main>
  </div>
  <Suspense fallback={< Spinner />}>
    <Footer />
  </Suspense>

</>
);
}

export default App;
