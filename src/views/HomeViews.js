import React from 'react';
import { NavLink } from 'react-router-dom';
import myImage from '../components//image/image2.jpg';
import s from '../components/image/image.module.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },

  title: {
    fontWeight: 200,
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>WELCOME TO MAGIC PHONEBOOK!</h1>
    <div className={s.container}>
      <div className={s.image}>
        <NavLink to="/contacts">
          <img className={s.img} src={myImage} alt="" />
        </NavLink>
      </div>
    </div>
  </div>
);

export default HomeView;
