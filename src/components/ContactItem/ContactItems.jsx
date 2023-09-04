import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { api, selectIsLoading } from 'store';
import { BtnItem } from 'components';
import { BtnWrap, ContactItem } from './ContactItems.styled';

export const ContactItems = ({ name, number, id }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const handleDelete = itemId => dispatch(api.deleteContactThunk(itemId));
  return (
    <ContactItem>
      {name} : {number}
      <BtnWrap>
        <BtnItem
          type="button"
          id={id}
          onClick={() => handleDelete(id)}
          disabled={isLoading}
        >
          Edit
        </BtnItem>
        <BtnItem
          type="button"
          id={id}
          onClick={() => handleDelete(id)}
          disabled={isLoading}
        >
          Delete
        </BtnItem>
      </BtnWrap>
    </ContactItem>
  );
};

ContactItems.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
