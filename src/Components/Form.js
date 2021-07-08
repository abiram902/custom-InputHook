import React from "react";
import "./Form.css";
import useInput from "../custom-hooks/use-input";

function Form() {
  const {
    value: usernameValue,
    handleChange: handleUsernameChange,
    handleBlur: handleUsernameBlur,
    isValid: isUsernameValid,
    hasError: usernameHasError,
    isTouched: usernameTouched,
    reset: resetUsername,
  } = useInput((value) => value.trim().length >= 3);

  const {
    value: emailValue,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    isValid: isEmailValid,
    hasError: emailHasError,
    isTouched: emailTouched,
    reset: resetEmail,
  } = useInput((value) => /^[a-z]+[@][a-z]+[.][a-z]+/gi.test(value));

  const formValidity = isUsernameValid && isEmailValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValidity) {
      console.log(`username:${usernameValue}`);
      resetUsername();
      resetEmail();
    } else {
      console.log("form not valid");
      return;
    }
  };

  return (
    <div className="form__container">
      <form className="form__form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="form__username__label">
          user name:
        </label>
        <input
          type="text"
          className={
            usernameHasError
              ? "form__username form__invalid"
              : usernameTouched && !usernameHasError
              ? "form__username form__valid"
              : "form__username"
          }
          id="username"
          onChange={handleUsernameChange}
          onBlur={handleUsernameBlur}
          value={usernameValue}
        />
        <label htmlFor="email" className="form__email__label">
          email :
        </label>
        <input
          type="text"
          className={
            emailHasError
              ? "form__username form__invalid"
              : emailTouched && !emailHasError
              ? "form__username form__valid"
              : "form__username"
          }
          value={emailValue}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          id="email"
        />
        <input
          type="submit"
          value="submit"
          className={
            formValidity ? "form__btn" : "form__btn form__btn__inactive"
          }
          id="email"
        />
      </form>
    </div>
  );
}

export default Form;
