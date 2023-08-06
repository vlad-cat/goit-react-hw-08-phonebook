import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';

import { register } from 'redux/auth/operations';
import registerFormStyles from './RegisterForm.module.css';
import { getError } from 'redux/auth/selectors';

const getNotification = message => {
  Notiflix.Report.warning('Warning', message);
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    if (password.value.length < 7) {
      getNotification(
        `The password must be composed of at least 7 characters.`
      );
      return;
    }

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <form className={registerFormStyles.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={registerFormStyles.input}
            type="text"
            name="name"
            min="6"
          />
        </label>
        <label>
          E-mail
          <input
            className={registerFormStyles.input}
            type="text"
            name="email"
          />
        </label>
        <label>
          Password
          <input
            className={registerFormStyles.input}
            type="password"
            name="password"
          />
        </label>
        <button className={registerFormStyles.btn} type="submit">
          Sign up
        </button>
      </form>
      {error?.response?.data?.name &&
        getNotification('This email is already registered')}
    </div>
  );
};
