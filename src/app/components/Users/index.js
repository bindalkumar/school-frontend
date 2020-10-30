import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { sagaTypes } from 'app/action-types';
import LoaderComponent from 'components/Shared/Loader';

const UserList = (props) => {
  const {
    userListProcessing, users,
  } = props;

  useEffect(() => {
    props.dispatch({
      type: sagaTypes.USER_LIST_REQUEST,
    });
  }, []);

  const renderUsers = () => {
    let userData = [];
    if (users.length > 0) {
      userData = map(users, (row) => {
        return (
          <tr key={`users-${row.id}`}>
            <td>{row.name}</td>
            <td>{row.roll_no}</td>
            <td>{row.house}</td>
            <td>
              <Link to={`/users/detail/${row.id}`}>
                <button type="button" className="btn-plain">
                  View
                </button>
              </Link>
            </td>
          </tr>
        );
      });
    }
    return userData;
  };

  return (
    <div>
      <h3>User List</h3>
      {userListProcessing
      && (
          <div><LoaderComponent /></div>
      )
      }
      {!userListProcessing
      && <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>House</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {renderUsers()}
            </tbody>
        </table>
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const userState = state.users;
  return {
    userListProcessing: userState.userListProcessing,
    users: userState.users,
  };
};

UserList.defaultProps = {
  userListProcessing: false,
  users: [],
};

UserList.propTypes = {
  userListProcessing: PropTypes.bool,
  users: PropTypes.array,
};

export default connect(
  mapStateToProps,
)(UserList);
