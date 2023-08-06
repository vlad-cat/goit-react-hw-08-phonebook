import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import logInStyles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form className={logInStyles.form} onSubmit={handleSubmit}>
        <label className={logInStyles.label}>
          E-mail
          <input
            className={logInStyles.input}
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={logInStyles.label}>
          Password
          <input
            className={logInStyles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className={logInStyles.btn} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};
