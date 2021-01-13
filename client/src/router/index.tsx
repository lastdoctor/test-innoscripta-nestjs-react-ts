import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './index.css';
import { Navbar } from '@components/Navbar';

const { Header, Content, Footer } = Layout;

const Home = lazy(() => import('@pages/Home'));
const Profile = lazy(() => import('@pages/Profile'));
const Order = lazy(() => import('@pages/Order'));
const Signup = lazy(() => import('@pages/Signup'));
const Signin = lazy(() => import('@pages/Signin'));


export function RouterView() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Header>
            <Navbar />
          </Header>
          <Content>
            <div className='site-layout-background' style={{ padding: 24, minHeight: 380 }}>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/signin' component={Signin} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/order' component={Order} />
                <Route exact path='/profile' component={Profile} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>ANTD</Footer>
        </Suspense>
      </Layout>
    </Router>
  );
}