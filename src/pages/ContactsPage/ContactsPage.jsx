import { startTransition, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { NavLink } from "react-router-dom";
import css from "./ContactPage.module.css";
import { LogoIcon2 } from "../../images/icons";
import { selectUser } from "../../redux/auth/selectors";
const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const user = useSelector(selectUser);
  useEffect(() => {
    startTransition(() => {
      dispatch(fetchContacts());
    });
  }, [dispatch]);

  return (
    <>
      <NavLink className={css.titleLink} to="/">
        <div className={css.title}>
          <LogoIcon2 />
          <h1 className={css.titleText}>{user.name}&#39;s Phonebook</h1>
        </div>
      </NavLink>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};
export default ContactsPage;
