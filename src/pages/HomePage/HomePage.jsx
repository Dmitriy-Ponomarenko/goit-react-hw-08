import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";
import { LogoIcon, LogoIcon2 } from "../../images/icons";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

const HomePage = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      {isLoggedIn && (
        <NavLink className={css.titleLink} to="/">
          <div className={css.title}>
            <LogoIcon2 />
            <h1 className={css.titleText}>{user.name}&#39;s Phonebook</h1>
          </div>
        </NavLink>
      )}
      {!isLoggedIn && (
        <NavLink className={css.titleLink} to="/">
          <div className={css.title}>
            <LogoIcon />
            <h1 className={clsx(css.titleText, css.mainTitleText)}>
              Phonebook
            </h1>
          </div>
        </NavLink>
      )}

      <div className={css.wrapper}>
        <h2 className={css.heroTitle}>
          All Your Contacts in One Convenient Place
        </h2>
      </div>
    </>
  );
};

export default HomePage;
