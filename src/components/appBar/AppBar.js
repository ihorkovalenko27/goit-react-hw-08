import { useSelector } from 'react-redux';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/userMenu';
import AuthNav from '../authNav/AuthNav';
import { getIsLoggedIn } from '../../redux/users/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
    backgroundColor: '#4783EC',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
