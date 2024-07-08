import { useEffect } from "react";
import css from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      document.body.style.overflow = "hidden";
      if (event.target.classList.contains(css.modalOverlay)) {
        onCancel();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onCancel]);

  return (
    <div className={css.modalOverlay}>
      <div className={css.modal}>
        <p>{message}</p>
        <div className={css.buttons}>
          <button onClick={onConfirm} className={css.confirmButton}>
            Confirm
          </button>
          <button onClick={onCancel} className={css.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
