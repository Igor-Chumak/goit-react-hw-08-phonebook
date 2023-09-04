import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWrapper } from './Modal.styled';
import {
  ContactFormForm,
  ContactFormInput,
  ContactFormLabel,
  ContactFormSubmit,
} from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { api } from 'store';

export const Modal = ({ contact, handleCloseEditModal }) => {
  const { name, number, id } = contact;

  const dispatch = useDispatch();

  const [nameEdit, setNameEdit] = useState(name);
  const [numberEdit, setNumberEdit] = useState(number);

  const onClickOverlay = e => {
    if (e.target === e.currentTarget) {
      handleCloseEditModal('');
    }
  };

  useEffect(() => {
    const onClickEscape = e => {
      if (e.key === 'Escape') {
        handleCloseEditModal('');
      }
    };
    window.addEventListener('keydown', onClickEscape);
    return () => {
      window.removeEventListener('keydown', onClickEscape);
    };
  }, [handleCloseEditModal]);

  const handleSubmit = () => {
    const updateContact = { name: nameEdit, number: numberEdit, id };
    dispatch(api.updateContactThunk(updateContact));
    handleCloseEditModal('');
  };

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalWrapper>
        <>
          <ContactFormForm onSubmit={handleSubmit}>
            <ContactFormLabel>
              Name
              <ContactFormInput
                type="text"
                name="name"
                minLength="2"
                maxLength="22"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder=""
                required
                value={nameEdit}
                onChange={e => setNameEdit(e.target.value)}
              />
            </ContactFormLabel>
            <ContactFormLabel>
              Number
              <ContactFormInput
                type="tel"
                name="number"
                minLength="7"
                maxLength="17"
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder=""
                required
                value={numberEdit}
                onChange={e => setNumberEdit(e.target.value)}
              />
            </ContactFormLabel>
            <ContactFormSubmit type="submit">UpDate</ContactFormSubmit>
          </ContactFormForm>
        </>
      </ModalWrapper>
    </Overlay>,
    document.querySelector('#root_modal')
  );
};

ModalWrapper.propTypes = {
  handleCloseEditModal: PropTypes.func.isRequired,
  contact: PropTypes.exact({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
