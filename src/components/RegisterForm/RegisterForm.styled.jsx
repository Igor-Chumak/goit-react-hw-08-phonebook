import styled from 'styled-components';

export const Wrapper = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;

export const RegisterFormWrap = styled.form`
  max-width: ${props => props.theme.spacing(140)};
  margin: 0 auto;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(3)};
  padding-left: ${props => props.theme.spacing(5)};
  padding-right: ${props => props.theme.spacing(5)};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;
  gap: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.bg_color.item};
  border-color: inherit;
  border: 1px solid;
  border-radius: ${props => props.theme.spacing(2)};
  box-shadow: ${props => props.theme.shadows.main};
`;

export const RegisterFormLabel = styled.label`
  display: block;
  font-weight: 600;
  line-height: 2;
`;

export const RegisterFormInput = styled.input`
  display: block;
  padding: ${props => props.theme.spacing(2)};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  border: 2px solid;
  color: ${props => props.theme.colors.gray};
  border-radius: ${props => props.theme.spacing(2)};

  &:focus {
    color: initial;
  }

  &:not(:placeholder-shown):invalid {
    border-color: red;
  }

  &:not(:placeholder-shown):valid {
    border-color: green;
  }
`;

export const RegisterFormInputNote = styled.p`
  margin: 0;
  color: initial;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
`;

export const RegisterFormNote = styled(RegisterFormInputNote)`
  padding-top: ${props => props.theme.spacing(2)};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  text-align: left;
`;

export const RegisterFormSubmit = styled.button`
  margin-top: ${props => props.theme.spacing(4)};
  display: block;
  min-width: ${props => props.theme.spacing(5)};
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(3)};
  padding-right: ${props => props.theme.spacing(3)};
  /* padding: ${props => props.theme.spacing(2)}; */
  color: initial;
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  background-color: ${props => props.theme.colors.white};
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.darkgrey};
  box-shadow: ${props => props.theme.shadows.small};
  &:hover {
    transform: scale(1.1);
    box-shadow: ${props => props.theme.shadows.regular};
    color: red;
  }
`;

// input::-ms-reveal {
//     display: none;
// }

// input:disabled,
// input:disabled+svg {
//     opacity: 0.2;
// }

// .modal-auth-overlay {
//     position: fixed;
//     opacity: 0;
//     visibility: hidden;
//     z-index: 100;
//     top: 0px;
//     left: 0px;
//     width: 100%;
//     height: 100%;
//     overflow-y: auto;
//     background-color: var(--bg-color-backdrop);
//     transition: opacity var(--transition-property2), visibility var(--transition-property2);
// }

// .modal-main {
//     transition: scale 400ms linear, opacity 500ms linear;

//     scale: 0.1;
//     opacity: 0;
//     z-index: 300;
// }

// .modal-main.active,
// .modal-auth-overlay.active {
//     opacity: 1;
//     scale: 1;
//     visibility: visible;
// }

// .modal-auth {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     max-width: 335px;
//     width: 100%;
//     min-height: 384px;
//     padding: 40px 20px 40px 20px;
//     transform: translate(-50%, -50%) scaleY(1) skew(0);

//     background-color: var(--bg-color-modal);

//     border-radius: 18px;
// }

// @media screen and (min-width: 768px) {
//     .modal-auth {
//         top: 127px;
//         max-width: 579px;
//         min-height: 516px;
//         padding: 80px 40px 40px 40px;
//         border: 2px solid var(--brd-color-modal-input);

//         transform: translate(-50%, 0%) scaleY(1) skew(0);
//     }
// }

// .btn-modal-close {
//     --size: 20px;
//     width: var(--size);
//     height: var(--size);

//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0;

//     position: absolute;
//     top: 14px;
//     right: 14px;

//     color: var(--color-modal-icon);
//     background-color: transparent;
//     border: 0px;
//     cursor: pointer;

//     transition: color var(--transition-property);
// }

// .btn-modal-close:is(:hover, :focus) {
//     color: var(--color-modal-icon-close);
// }

// .modal-close-icon {
//     --size: 20px;
//     width: var(--size);
//     height: var(--size);
//     stroke: currentColor;
//     fill: var(--bg-color-modal);
// }

// @media screen and (min-width: 768px) {

//     .btn-modal-close {
//         --size: 28px;
//         width: var(--size);
//         height: var(--size);

//         top: 24px;
//         right: 24px;
//     }

//     .modal-close-icon {
//         --size: 28px;
//         width: var(--size);
//         height: var(--size);
//     }
// }

/* -------------------------------------FORM------------------------------------- */

// .modal-field {
//     display: block;
//     margin-bottom: 24px;
// }

// .modal-field:nth-child(3) {
//     margin-bottom: 24px;
// }

// .modal-field-input {
//     display: block;
//     position: relative;
// }

// .modal-input {
//     width: 100%;
//     max-width: 295px;
//     max-height: 50px;
//     padding-left: 24px;
//     padding-right: 82px;
//     padding-top: 16px;
//     padding-bottom: 16px;

//     text-align: left;
//     text-transform: uppercase;
//     color: var(--color-modal-input);
//     font-family: inherit;
//     font-weight: 700;
//     font-size: 16px;
//     line-height: calc(18/16);
//     letter-spacing: -0.01em;

//     outline: transparent;
//     background-color: transparent;
//     border: 2px solid var(--brd-color-modal-input);
//     border-radius: 40px;

//     transition: color var(--transition-property), border-color var(--transition-property), fill var(--transition-property);
// }

// @media screen and (min-width: 768px) {

//     .modal-field {
//         margin-bottom: 28px;
//     }

//     .modal-field-input.modal-field {
//         margin-bottom: 40px;
//     }

//     .modal-input {
//         max-width: 499px;
//         max-height: 64px;
//         padding-left: 40px;
//         padding-right: 173px;
//         padding-top: 20px;
//         padding-bottom: 20px;

//         font-size: 18px;
//         line-height: calc(24/18);
//         letter-spacing: -0.01em;
//     }
// }

// .modal-input:focus {
//     color: var(--color-modal-input-focus);
//     border-color: var(--brd-color-modal-input-focus);
// }

// .modal-input::placeholder {
//     color: var(--color-modal-input);
// }

// .modal-input:not(:placeholder-shown):invalid {
//     border-color: var(--brd-color-modal-input-invalid);
// }

// .modal-input:not(:placeholder-shown):valid {
//     border-color: var(--brd-color-modal-input-valid);
// }

/* Eye */
// .toggle-password {
//     background: none;
//     border: none;
//     cursor: pointer;
//     padding: 0;
//     position: absolute;
//     top: 52%;
//     right: 20%;
// }

// .modal-password-eye {
//     --size: 16px;
//     width: var(--size);
//     height: var(--size);
//     position: absolute;
//     top: 0px;
//     right: 0px;
//     transform: translateY(-50%);
//     opacity: 0.6;

//     stroke: var(--color-modal-icon);
// }

// .modal-password-eye.off {
//     display: none;
// }

// @media screen and (min-width: 768px) {
//     .modal-password-eye {
//         --size: 20px;
//         width: var(--size);
//         height: var(--size);
//     }
// }

/* Eye */

// .modal-icon {
//     --size: 18px;
//     width: var(--size);
//     height: var(--size);
//     position: absolute;
//     top: 50%;
//     right: 16px;
//     transform: translateY(-50%);

//     stroke: var(--color-modal-icon);
//     fill: var(--bg-color-modal);
// }

// .modal-icon.modal-icon-lock {
//     fill: inherit;
//     fill-opacity: 0.5;
// }

// @media screen and (min-width: 768px) {
//     .modal-icon {
//         --size: 28px;
//         width: var(--size);
//         height: var(--size);
//         right: 32px;
//     }
// }

// .modal-input-focus:focus+.modal-icon {
//     stroke: var(--bg-color-btn-modal-active);
//     fill: var(--bg-color-modal);
// }

// .btn-modal-submit {
//     display: block;
//     margin-bottom: 14px;
//     margin-left: auto;
//     margin-right: auto;
//     width: 100%;
//     max-width: 293px;
//     padding: 16px 0px;

//     text-align: center;
//     text-transform: uppercase;
//     font-family: inherit;
//     font-weight: 700;
//     font-size: 16px;
//     line-height: calc(18/16);
//     letter-spacing: -0.01em;

//     color: var(--color-btn-modal-submit);
//     background-color: var(--bg-color-btn-modal-submit);
//     border: 0;
//     border-radius: 40px;

//     cursor: pointer;
//     transition: background-color var(--transition-property);
// }

// @media screen and (min-width: 768px) {
//     .btn-modal-submit {
//         margin-bottom: 20px;
//         max-width: 499px;
//         padding: 20px 0px;

//         font-size: 18px;
//         line-height: calc(24/18);
//         letter-spacing: -0.01em;
//     }
// }

// .btn-modal-submit:is(:hover, :focus) {
//     background-color: var(--bg-color-btn-modal-submit-hover);
// }

// .box-btn-modal-action {
//     display: flex;
//     gap: 20px;
//     justify-content: center;
// }

// .btn-modal-action {
//     padding: 0px;
//     border: 0px;
//     background-color: inherit;
//     color: var(--color-btn-modal-action);

//     text-align: center;
//     text-transform: uppercase;
//     font-family: inherit;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: calc(18/14);
//     letter-spacing: -0.01em;
// }

// @media screen and (min-width: 768px) {
//     .btn-modal-action {
//         font-size: 18px;
//         line-height: calc(24/18);
//         letter-spacing: -0.01em;
//     }
// }
