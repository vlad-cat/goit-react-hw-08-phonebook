import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/selectors';
import navigationStyles from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavLink className={navigationStyles.link} to="/" title="Home">
        <span className={navigationStyles.home}>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={navigationStyles.link} to="/contacts">
          <span className={navigationStyles.home}>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};
