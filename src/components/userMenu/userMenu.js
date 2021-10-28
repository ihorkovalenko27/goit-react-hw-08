import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/users/auth-selectors';
import { logOut } from '../../redux/users/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
    color: 'white',
  },

  button: {
    fontWeight: 500,
    borderRadius: 5,
    marginRight: 10,
    width: 70,
    height: 30,
    backgroundColor: '#EEEC76',
    cursor: 'pointer',
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Добро пожаловать, {name}</span>
      <button style={styles.button} type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
    </div>
  );
}
