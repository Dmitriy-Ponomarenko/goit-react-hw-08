import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import clsx from "clsx";
import { LogoIcon } from "../../images/icons";

export const Navigation = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      {!isLoggedIn && (
        <NavLink className={clsx(css.link, css.titleLink)} to="/">
          <div className={css.title}>
            <LogoIcon />
            <h1 className={css.titleText}>Phonebook</h1>
          </div>
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={clsx(css.link, css.titleLink)} to="/">
          <div className={css.title}>
            <LogoIcon />
            <h1 className={css.titleText}>{user.name}&#39;s Phonebook</h1>
          </div>
        </NavLink>
      )}
    </nav>
  );
};
