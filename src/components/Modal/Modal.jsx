import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWrapper } from './Modal.styled';

export const Modal = ({ handleCloseModal }) => {
  const onClickOverlay = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal('');
    }
  };

  useEffect(() => {
    const onClickEscape = e => {
      if (e.key === 'Escape') {
        handleCloseModal('');
      }
    };
    window.addEventListener('keydown', onClickEscape);
    return () => {
      window.removeEventListener('keydown', onClickEscape);
    };
  }, [handleCloseModal]);

  return createPortal(
    <Overlay onClick={onClickOverlay}>
      <ModalWrapper >
        < />
      </ModalWrapper>
    </Overlay>,
    document.querySelector('#root_modal')
  );
};

ModalWrapper.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};
