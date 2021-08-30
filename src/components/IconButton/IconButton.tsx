import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButtonPropTypes } from './IconButton.schema';

const IconButton = (props: IconButtonPropTypes) => {
  const { functionName, iconName } = props;

  return (
    <button type="button" className="btn-lg btn" onClick={functionName}>
      <FontAwesomeIcon icon={iconName} />
    </button>
  );
};

export default IconButton;
