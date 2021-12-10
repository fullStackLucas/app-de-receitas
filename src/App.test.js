import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './App';
import Login from './pages/Login';

/* test('Farewell, front-end', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TRYBE/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe('2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login', () => {
  it('Tem os data-testids email-input, password-input e login-submit-btn', () => {
    // const history = createMemoryHistory();
    // render(<Router history={ history }> <App/> </Router>);
    // history.push('/')
    render(<App />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitBtn = screen.getByTestId('login-submit-btn');

    // Teste funciona sem o expect:
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

  });
});

describe('3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email', () => {
  it('É possível escrever o email', () => {
    render(<App />);
    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, 'email@mail.com');
    expect(emailInput).toHaveValue('email@mail.com');
  });
});

describe('4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha', () => {
  it('É possível escrever a senha', () => {
    render(<App />);
    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(passwordInput, '123456');
    expect(passwordInput).toHaveValue('123456');
  });
});

describe('5 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos', () => {
  beforeEach(() => {
    render(<App />);
  });
  
  it('O botão deve estar desativado se o email for inválido', () => {
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitBtn = screen.getByTestId('login-submit-btn');
    expect(submitBtn).toHaveProperty('disabled', true);

    userEvent.type(emailInput, 'email@com');
    userEvent.type(passwordInput, '1234567');

    expect(submitBtn).toHaveProperty('disabled', true);

    userEvent.type(emailInput, 'email.com');
    userEvent.type(passwordInput, '1234567');

    expect(submitBtn).toHaveProperty('disabled', true);

  });

  it('O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos', () => {
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitBtn = screen.getByTestId('login-submit-btn');

    expect(submitBtn).toHaveProperty('disabled', true);

    userEvent.type(emailInput, 'email@hotmail.com');
    userEvent.type(passwordInput, '123456');

    expect(submitBtn).toHaveProperty('disabled', true);
  });

  it('O botão deve estar ativado se o email e a senha forem válidos', () => {
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitBtn = screen.getByTestId('login-submit-btn');

    expect(submitBtn).toHaveProperty('disabled', true);

    userEvent.type(emailInput, 'email@hotmail.com');
    userEvent.type(passwordInput, '1234567');

    expect(submitBtn).toHaveProperty('disabled', false);
  });
});

// Estudar e refatorar parte do local storage!
describe('6 - Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken', () => {
  it('Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage', () => {
    const history = createMemoryHistory();
    render(<Router history={ history }> <Login /> </Router>);
  
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const submitBtn = screen.getByTestId('login-submit-btn');

    expect(submitBtn).toHaveProperty('disabled', true);

    userEvent.type(emailInput, 'email@hotmail.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(submitBtn);

    const user = localStorage.getItem('user');
    expect(user).toBe('{"email":"email@hotmail.com"}');

    const cocktailsToken = localStorage.getItem('cocktailsToken');
    expect(cocktailsToken).toBe('1');

    const mealsToken = localStorage.getItem('mealsToken');
    expect(mealsToken).toBe('1');

    // Verifica se é redirecionado a página de Comidas **Esse teste será feito no req 08
    const { pathname } = history.location;
    expect(pathname).toBe('/comidas');
  });
});
