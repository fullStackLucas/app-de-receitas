import '../style/login.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validate, setValidate] = useState(true);
  const history = useHistory();

  const isValidEmail = (login) => login.match(/^[\w.]+@[\w.]+\w+\.\w+$/);

  const validateLogin = () => {
    const PASSWORD_LENGTH = 6;
    setValidate(!(password.length >= PASSWORD_LENGTH && isValidEmail(email)));
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    validateLogin();
  };

  const handleLogin = (event) => {
    setEmail(event.target.value);
    validateLogin();
  };

  const setToLocalStorage = () => {
    localStorage.setItem('user', JSON.stringify({
      email,
    }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    history.push('./comidas');
  };

  return (
    <div className="containers">
      <form className="login-form">
        <h1>LOGIN</h1>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="login"
            data-testid="email-input"
            value={ email }
            onChange={ handleLogin }
            placeholder="Digite seu email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ handlePassword }
            placeholder="Digite sua senha"
          />
        </div>

        <button
          className="btn btn-warning"
          type="button"
          data-testid="login-submit-btn"
          disabled={ validate }
          onClick={ setToLocalStorage }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
