import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/users/auth-operations';
import s from '../components/contactForm/ContactForm.module.css';

const styles = {
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input type="email" name="email" value={email} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" value={password} onChange={handleChange} />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
