import React from 'react';

import { Row, Col } from 'antd';

import useInput from '../../hooks/useInput';
import useWindowSize from '../../hooks/useWindowSize';

import Gender from './Gender';
import AuthField from './AuthField';
import ExtraAction from './ExtraAction';

import EyeIcon from '../icons/Eye';
import LogoIcon from '../icons/Logo';
import MaleGenderIcon from '../icons/MaleGender';
import OtherGenderIcon from '../icons/OtherGender';
import FemaleGenderIcon from '../icons/FemaleGender';

import './index.scss';

const genders = [
  { label: 'Male', icon: MaleGenderIcon },
  { label: 'Female', icon: FemaleGenderIcon },
  { label: 'Other', icon: OtherGenderIcon },
];

const extraActions = [
  { text: 'Already have an account', hrefText: 'Log In', href: '#' },
  { text: 'Review privacy and disclosures', hrefText: 'here', href: '#' },
];

function RegisterForm({ onSubmit }) {
  const [authErr, setAuthErr] = React.useState({});

  const [activeGender, setActiveGender] = React.useState(null);

  const emailInput = useInput('');
  const passwordInput = useInput('');
  const confirmPasswordInput = useInput('');

  const [, windowHeight] = useWindowSize();

  const passwordIcon = React.useCallback(
    () => <EyeIcon className='register-form__eye-icon' />,
    []
  );

  const handleForm = e => {
    e.preventDefault();
    const formData = {
      gender: activeGender,
      email: emailInput.value.trim(),
      password: passwordInput.value,
      confirmPassword: confirmPasswordInput.value,
    };
    try {
      onSubmit(formData);
    } catch (e) {
      setAuthErr(e);
    }
  };

  return (
    <Row justify='center' align='middle' style={{ 'min-height': windowHeight }}>
      <Col xs={{ span: 24 }} md={{ span: 10 }}>
        <form className='register-form' onSubmit={handleForm}>
          <LogoIcon className='register-form__logo' />
          <h1 className='register-form__title'>Sign Up with email</h1>
          <div className='register-form__entity'>
            <h3 className='register-form__entity-title'>Gender</h3>
            <div className='register-form__gender-options'>
              {genders.map(gender => (
                <Gender
                  key={gender.label}
                  active={gender.label === activeGender}
                  Icon={gender.icon}
                  onClick={setActiveGender}
                  err={(authErr.entity === 'gender' && authErr.errMsg) || null}
                >
                  {gender.label}
                </Gender>
              ))}
            </div>
            {authErr.entity === 'gender' && authErr.errMsg && (
              <p className='register-form__field-error-message'>
                {authErr.errMsg}
              </p>
            )}
          </div>

          <AuthField
            title='E-mail'
            type='email'
            Icon={null}
            value={emailInput.value}
            onChange={emailInput.onChange}
            err={(authErr.entity === 'email' && authErr.errMsg) || null}
          />
          <AuthField
            title='Create Password'
            type='password'
            Icon={passwordIcon}
            value={passwordInput.value}
            onChange={passwordInput.onChange}
            err={(authErr.entity === 'password' && authErr.errMsg) || null}
          />
          <AuthField
            title='Confirm Password'
            type='password'
            Icon={passwordIcon}
            value={confirmPasswordInput.value}
            onChange={confirmPasswordInput.onChange}
            err={
              (authErr.entity === 'confirmPassword' && authErr.errMsg) || null
            }
          />
          <button className='register-form__confirm-button' type='submit'>
            Sign Up
          </button>

          {extraActions.map((el, i) => {
            return (
              <ExtraAction
                key={i}
                text={el.text}
                hrefText={el.hrefText}
                href={el.href}
              />
            );
          })}
        </form>
      </Col>
    </Row>
  );
}

export default RegisterForm;
