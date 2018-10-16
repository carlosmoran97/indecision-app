import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
      </button>
  </div>
);

Option.propTypes = {
  count: PropTypes.number,
  optionText: PropTypes.string,
  handleDeleteOption: PropTypes.func
};

export default Option;
