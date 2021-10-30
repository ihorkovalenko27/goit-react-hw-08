import { React, useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Container from './components/container/Container';
import AppBar from './components/appBar/AppBar';
import { getCurrentUser } from './redux/users/auth-operations';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

const HomeViews = lazy(() => import('./views/HomeViews'));
const LoginView = lazy(() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const ContactsView = lazy(() => import('./views/ContactsView'));
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Router>
      <Container>
        <AppBar />
        <Switch>
          <Suspense fallback={<p>Загружаем...</p>}>
            <PublicRoute exact path="/">
              <HomeViews />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PublicRoute exact path="/register" redirectTo="/contacts" restricted>
              <RegisterView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Suspense>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
