import React from 'react';
import PropTypes from 'prop-types';
import './Cancel.css';

const IconsCancel = ({ isText, onClick }) => (
  <svg onClick={onClick} className={isText ? "IconsCancel show" : "hide"} viewBox="0 0 31.112 31.112">
    <path d="M31.112 1.414L29.698 0 15.556 14.142 1.414 0 0 1.414l14.142 14.142L0 29.698l1.414 1.414L15.556 16.97l14.142 14.142 1.414-1.414L16.97 15.556z"/>
  </svg>
);

IconsCancel.propTypes = {
  isVisible: PropTypes.bool,
};

IconsCancel.defaultProps = {
  isVisible: false,
}

export default IconsCancel;
