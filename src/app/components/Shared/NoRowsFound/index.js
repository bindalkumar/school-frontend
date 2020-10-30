import React from 'react';

const NoRowsFound = (props) => {
  const { message } = props;
  return (
      <div className="noRowsFound">
        { message }
      </div>
  );
};

NoRowsFound.defaultProps = {
  message: 'No rows found',
};

export default NoRowsFound;
