import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

function Button ({ LoadMore }) {
  return (
    <button type="button" className={s.Button} onClick={LoadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  LoadMore: PropTypes.func.isRequired,
};

export default Button;