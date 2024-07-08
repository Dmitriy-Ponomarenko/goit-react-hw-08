import { NavLink } from "react-router-dom";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";
import { LogoIcon } from "../../images/icons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearAuthError } from "../../redux/auth/slice";

const RegistrationPage = () => {
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
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
