import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Gender = React.memo(({ active, children, Icon, onClick }) => {
  return (
    <div
      className={classNames('register-form__gender', {
        'register-form__gender--active': active,
      })}
      onClick={() => onClick(children)}
    >
      <Icon className='register-form__gender-icon' />
      <p className='register-form__gender-label'>{children}</p>
    </div>
  );
});

Gender.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.string,
  Icon: PropTypes.func,
  onClick: PropTypes.func,
};

export default Gender;
