import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('@pages/Home'));
const Profile = lazy(() => import('@pages/Profile'));
const Order = lazy(() => import('@pages/Order'));
const Signup = lazy(() => import('@pages/Signup'));
const Signin = lazy(() => import('@pages/Signin'));


export function RouterView() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/order' component={Order} />
        <Route exact path='/profile' component={Profile} />
        </Switch>
      </Suspense>
    </Router>
  );
}