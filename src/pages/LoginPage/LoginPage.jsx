import { NavLink } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";
import { LogoIcon } from "../../images/icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearAuthError } from "../../redux/auth/slice";

const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(clearAuthError());
    };
  }, [dispatch]);

  return (
    <>
      <NavLink className={css.titleLink} to="/">
        <div className={css.title}>
          <LogoIcon />
          <h1 className={css.titleText}>Phonebook</h1>
        </div>
      </NavLink>
      <LoginForm />
    </>
  );
};

export default LoginPage;
