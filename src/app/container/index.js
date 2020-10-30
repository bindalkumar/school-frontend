import React from 'react';
import AlertMessage from 'components/Shared/AlertMessage';

class Container extends React.Component {
  render() {
    return (
      <div className="container-fluid">
          <AlertMessage />
          <div>
              {this.props.children}
          </div>
        </div>
    );
  }
}

export default Container;
