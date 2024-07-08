import errorImage from "../../images/error.png";
import css from "./Error.module.css";

const Error = () => {
  return (
    <div>
      <img className={css.image} src={errorImage} alt="error" />
    </div>
  );
};

export default Error;
