import React from 'react';
import { map } from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sagaTypes } from 'app/action-types';

const AlertMessage = (props) => {
  const { messages } = props;

  const removeAlertMsg = (index) => {
    props.dispatch({
      type: sagaTypes.REMOVE_ALERT,
      msgIndex: index,
    });
  };

  return (
    <div>
      {
        map(messages, (row, index) => {
          return (
            <div className={`alert alert-${row.servity} alert-dismissible fade show`} role="alert" key={`alert${index}`}>
            {row.msg}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => { removeAlertMsg(index); }}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const alertMessageState = state.alertMessage;
  return {
    messages: alertMessageState.messages,
  };
};

AlertMessage.defaultProps = {
  messages: [],
};

AlertMessage.propTypes = {
  messages: PropTypes.array,
};

export default connect(
  mapStateToProps,
)(AlertMessage);
