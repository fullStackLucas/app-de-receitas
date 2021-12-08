import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(true);

  const isValidEmail = (login) => login.match(/^[\w.]+@[\w.]+\w+\.\w+$/);

  const validateLogin = () => {
    const PASSWORD_LENGTH = 6;
    setValidate(!(password.length >= PASSWORD_LENGTH && isValidEmail(email)));
    console.log(validate);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    validateLogin();
  };

  const handleLogin = (event) => {
    setEmail(event.target.value);
    validateLogin();
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="login"
          data-testid="email-input"
          value={ email }
          onChange={ handleLogin }
        />
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ handlePassword }
        />
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={ validate }
        >
          Entrar
        </button>

      </form>
    </div>
  );
}

export default Login;
