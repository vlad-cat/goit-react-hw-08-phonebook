// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import userMenyStyles from './UserMenu.module.css';
// import backgroundImage from '../../pictures/hand.png';

export const UserMenu = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div>
      <section className={userMenyStyles.section}>
        <h2>Welcome to Phonebook! </h2>

        {!isLoggedIn && (
          <>
            <div>
              <div className={userMenyStyles.box}>
                <NavLink className={userMenyStyles.link} to="/register">
                  Register
                </NavLink>
                <NavLink className={userMenyStyles.link} to="/login">
                  Log In
                </NavLink>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};
