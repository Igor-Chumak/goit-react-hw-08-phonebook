import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'store';
import {
  ContactFormForm,
  ContactFormInput,
  ContactFormInputNote,
  ContactFormLabel,
  ContactFormNote,
  ContactFormSubmit,
  Wrapper,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch;

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      auth.register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <ContactFormForm onSubmit={handleSubmit}>
        <ContactFormLabel>
          Name
          <ContactFormInput
            type="text"
            name="name"
            minLength="2"
            maxLength="22"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Thr name must consist only one word and may contain only letters, apostrophe, dash and no one space."
            placeholder="Name *"
            required
            value={name}
            onChange={e => setName(e.target.value.trim())}
          />
          <ContactFormInputNote>one word & no one space</ContactFormInputNote>
        </ContactFormLabel>
        <ContactFormLabel>
          E-mail
          <ContactFormInput
            type="email"
            name="email"
            minLength="7"
            maxLength="22"
            autoComplete="username"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
            placeholder="E-mail *"
            required
            value={email}
            onChange={e => setEmail(e.target.value.trim())}
          />
        </ContactFormLabel>
        <ContactFormLabel>
          Password
          <ContactFormInput
            type="password"
            // type="text"
            name="password"
            minLength="7"
            maxLength="22"
            title="The password must be min 7 and max 22 symbols"
            placeholder="Password * "
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ContactFormInputNote>min 7 max 22 symbols</ContactFormInputNote>
          <ContactFormNote>* is required</ContactFormNote>
        </ContactFormLabel>
        <ContactFormSubmit type="submit">Sign Up</ContactFormSubmit>
      </ContactFormForm>
    </Wrapper>
  );
};

//   return (
// <form className="modal-form">
//     <label className="modal-field">
//       <span className="modal-field-input">
//         <input
//           className="modal-input"
//           type="text"
//           name="name"
//           minlength="2"
//           maxlength="20"
//           placeholder="name"
//           autoFocus
//         />
//         <svg
//           className="modal-icon"
//           width="28"
//           height="28"
//           style="stroke-width: 2px"
//         >
//           <use href="./img/icons.svg#icon-user"></use>
//         </svg>
//       </span>
//     </label>
//     <label className="modal-field">
//       <span className="modal-field-input">
//         <input
//           className="modal-input"
//           type="email"
//           name="email"
//           required
//           minlength="6"
//           maxlength="20"
//           autoComplete="username"
//           placeholder="email*"
//           pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
//           title="Invalid email address"
//         />

//         <svg className="modal-icon">
//           <use href="./img/icons.svg#icon-mail"></use>
//         </svg>
//       </span>
//     </label>
//     <label className="visually-hidden">password</label>
//     <div className="modal-field-input modal-field">
//       <input
//         className="modal-input"
//         type="password"
//         name="password"
//         required
//         minlength="6"
//         maxlength="20"
//         autocomplete="current-password"
//         placeholder="password*"
//         title="Require min 6 sign, which include at least 1 uppercase character, 1 lowercase character, and 1 number."
//       />
//       <!-- Eye -->
//       <button
//         className="toggle-password"
//         id="toggle-password"
//         type="button"
//         aria-label="Show password as plain text. Warning: this will display your password on the screen."
//       >
//         <svg className="modal-password-eye" width="20" height="20">
//           <use href="./img/icons-auth.svg#icon-eye-off"></use>
//         </svg>
//         <svg className="modal-password-eye off" width="20" height="20">
//           <use href="./img/icons-auth.svg#icon-eye"></use>
//         </svg>
//       </button>
//       <!-- Eye -->
//       <svg className="modal-icon modal-icon-lock">
//         <use href="./img/icons.svg#icon-lock"></use>
//       </svg>
//     </div>
//     <button className="btn-modal-submit" type="submit">sign up</button>
//     <div className="box-btn-modal-action">
//       <button className="btn-modal-action" type="button" data-action="signup">
//         sign up
//       </button>
//       <button className="btn-modal-action" type="button" data-action="signin">
//         sign in
//       </button>
//     </div>
//   </form>
//   );
// };

//   return (
//     <form onSubmit={handleSubmit} autoComplete="off">
//       <label>
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };
