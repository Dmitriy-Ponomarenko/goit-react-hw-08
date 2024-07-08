import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { selectUserLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import { selectAuthError } from "../../redux/auth/selectors";
import { CheckIcon } from "../../images/icons";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        actions.resetForm();
      })
      .catch((error) => {
        error.message;
      });
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <label htmlFor={emailFieldId} className={css.label}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              className={css.input}
              placeholder="example@mail.com"
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="email"
              component="span"
            />
          </div>

          <div className={css.inputWrapper}>
            <label htmlFor={passwordFieldId} className={css.label}>
              Password
            </label>
            <Field
              type="password"
              name="password"
              id={passwordFieldId}
              className={css.input}
              placeholder="********"
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="password"
              component="span"
            />
          </div>

          <button type="submit" className={css.button}>
            Log In
            <CheckIcon />
          </button>
        </Form>
      </Formik>
      {isLoading && <Loader />}
      {error && <div className={css.error}>Wrong email or password</div>}
    </>
  );
};

export default LoginForm;
