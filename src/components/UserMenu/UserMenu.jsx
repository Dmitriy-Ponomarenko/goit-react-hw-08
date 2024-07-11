import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth.userName);
  
  const handleClick = () => dispatch(logout());
  
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.contactlink, isActive && css.active);
  };
  
  return (
    <div className={css.wrapper}>
      <NavLink className={buildLinkClass} to="/contacts">
        Contacts
      </NavLink>
      <button type="button" onClick={handleClick} className={css.button}>
        Log Out
      </button>
      <p>Welcome, {userName}</p>
    </div>
  );
};
