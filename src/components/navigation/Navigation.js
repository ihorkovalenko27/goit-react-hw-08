import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/users/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: 'white',
  },
  activeLink: {
    color: 'yellow',
  },
};

function Navigation() {
  const isLogin = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        HOME
      </NavLink>

      {isLogin && (
        <NavLink to="/contacts" exact style={styles.link} activeStyle={styles.activeLink}>
          Контакты
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
