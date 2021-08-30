import React from 'react';
import PropTypes from 'prop-types';

const ExtraAction = React.memo(({ text, hrefText, href }) => {
  return (
    <div className='register-form__extra-action'>
      <p className='register-form__extra-action-text'>
        {text}{' '}
        <a className='register-form__extra-action-link' href={href}>
          {hrefText}
        </a>
      </p>
    </div>
  );
});

ExtraAction.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  hrefText: PropTypes.string,
};

export default ExtraAction;
