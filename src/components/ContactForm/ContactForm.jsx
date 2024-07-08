import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import { CheckIcon } from "../../images/icons";
import MaskedInput from "react-text-mask";

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        createdAt: new Date().toISOString(),
        name: values.name,
        number: values.number,
      })
    );
    toast.success("Successfully created!", { duration: 5000 });
    actions.resetForm();
  };
  const phoneRegExp = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor={nameFieldId} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            placeholder="Kateryna Bobryshova"
            id={nameFieldId}
            className={css.input}
          />
          <ErrorMessage
            className={css.ErrorMessage}
            name="name"
            component="span"
          />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={phoneFieldId} className={css.label}>
            Phone number
          </label>
          <Field name="number" type="tel">
            {({ field }) => (
              <MaskedInput
                {...field}
                mask={[
                  "(",
                  /[0-9]/,
                  /\d/,
                  /\d/,
                  ")",
                  " ",
                  /\d/,
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                  "-",
                  /\d/,
                  /\d/,
                ]}
                placeholder="(063) 123-45-67"
                className={css.input}
                guide={false}
              />
            )}
          </Field>
          <ErrorMessage
            className={css.ErrorMessage}
            name="number"
            component="span"
          />
        </div>

        <button type="submit" className={css.button}>
          Add contact
          <CheckIcon />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
