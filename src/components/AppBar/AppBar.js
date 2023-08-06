import { useDispatch, useSelector } from 'react-redux';
// import { BiSolidUserCircle, BiSolidDoorOpen } from 'react-icons/bi';
// import { IoMdPerson, IoMdLogOut } from 'react-icons/io';

import { getIsLoggedIn, getUser } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import { Navigation } from 'components/Navigation/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import appBarStyles from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  return (
    <header className={appBarStyles.header}>
      <Navigation />
      {isLoggedIn ? (
        <div className={appBarStyles.userMenu}>
          <div className={appBarStyles.user}>
            {/* <BiSolidUserCircle /> */}
            {user.name}
          </div>
          <button
            className={appBarStyles.btn}
            type="button"
            onClick={() => dispatch(logOut())}
          >
            {/* <BiSolidDoorOpen /> */}
            <span className={appBarStyles.span}>Logout</span>
          </button>
        </div>
      ) : (
        <AuthNav />
      )}
    </header>
  );
};
