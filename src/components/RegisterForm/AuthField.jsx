import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Input } from 'antd';

const AuthField = React.memo(({ title, type, Icon, value, onChange, err }) => {
  const currentInput =
    type === 'password' ? (
      <Input.Password
        className='register-form__input'
        iconRender={Icon}
        placeholder={type}
        value={value}
        onChange={onChange}
        type={type}
      />
    ) : (
      <Input
        className='register-form__input'
        placeholder={type}
        value={value}
        onChange={onChange}
        type={type}
      />
    );
  return (
    <div
      className={classNames('register-form__entity', {
        'register-form__entity--invalid': err,
      })}
    >
      <h3 className='register-form__entity-title'>{title}</h3>
      <div className='register-form__wrapper-input'>{currentInput}</div>
      {err && <p className='register-form__field-error-message'>{err}</p>}
    </div>
  );
});

AuthField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  Icon: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  err: PropTypes.string,
};

export default AuthField;
