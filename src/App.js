import RegisterForm from './components/RegisterForm/';

import AuthHelper from './helpers/AuthHelper';
import AuthSevice from './services/AuthService';

import './App.scss';

function App() {
  const confirmRegistration = ({
    gender,
    email,
    password,
    confirmPassword,
  }) => {
    if (gender === null) {
      throw {
        entity: 'gender',
        errMsg: 'You have not chosen a gender',
      };
    }

    if (!AuthHelper.isValidEmail(email)) {
      throw { entity: 'email', errMsg: 'Invalid email' };
    }

    if (!AuthHelper.isValidPasswordLength(password)) {
      throw { entity: 'password', errMsg: 'Invalid length' };
    }

    if (!AuthHelper.isSamePasswords(password, confirmPassword)) {
      throw {
        entity: 'confirmPassword',
        errMsg: 'Password mismatch',
      };
    }

    AuthSevice.register(gender, email, password);
  };
  return (
    <div className='App'>
      <RegisterForm onSubmit={confirmRegistration} />
    </div>
  );
}

export default App;
