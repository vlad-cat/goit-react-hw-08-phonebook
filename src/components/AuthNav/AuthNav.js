import { NavLink } from 'react-router-dom';
import navLinkStyles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={navLinkStyles.link} to="/register">
        Register
      </NavLink>
      <NavLink className={navLinkStyles.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
