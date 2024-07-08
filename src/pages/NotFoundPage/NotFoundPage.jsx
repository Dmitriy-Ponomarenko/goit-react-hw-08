import { NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "cadetblue";
    return () => {
      document.body.style.backgroundColor = "#f5f5f5";
    };
  }, []);
  return (
    <div className={css.wrapper}>
      <h1 className={css.notFound}>404</h1>
      <NavLink className={css.link} to="/">
        Take me back to <span className={css.home}>Home Page</span>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
