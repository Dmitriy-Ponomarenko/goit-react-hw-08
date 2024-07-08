import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { selectAuthError, selectUserLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import { CheckIcon } from "../../images/icons";

const RegistrationForm = () => {
  const isLoading = useSelector(selectUserLoading);
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const usernameFieldId = useId();
  const error = useSelector(selectAuthError);

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
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
    name: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(15, "Password must be no more than 15 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.form}>
          <div className={css.inputWrapper}>
            <label htmlFor={usernameFieldId} className={css.label}>
              Username
            </label>
            <Field
              type="text"
              name="name"
              id={usernameFieldId}
              className={css.input}
              placeholder="Kateryna"
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="name"
              component="span"
            />
          </div>

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
              className={css.input}
              id={passwordFieldId}
              placeholder="********"
            />
            <ErrorMessage
              className={css.ErrorMessage}
              name="password"
              component="span"
            />
          </div>

          <button type="submit" className={css.button}>
            Register
            <CheckIcon />
          </button>
        </Form>
      </Formik>
      {isLoading && <Loader />}
      {error && (
        <div className={css.error}>Something went wrong, try again!</div>
      )}
    </>
  );
};

export default RegistrationForm;
