import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../../redux/filter/slice";
import { selectNameFilter } from "../../redux/filter/selectors";
import { FilterIcon } from "../../images/icons";

const SearchBox = () => {
  const filterId = useId();
  const filterValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (event) => dispatch(filterContact(event.target.value));

  return (
    <div className={css.filterWrapper}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name or number
      </label>
      <div className={css.inputWrapper}>
        <input
          type="text"
          value={filterValue}
          id={filterId}
          onChange={handleChange}
          className={css.input}
        />
        <div className={css.svg}>
          <FilterIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
