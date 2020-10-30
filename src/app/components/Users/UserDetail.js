import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map } from 'lodash';
import PropTypes from 'prop-types';
import { sagaTypes } from 'app/action-types';
import LoaderComponent from 'components/Shared/Loader';

const UserDetail = (props) => {
  const {
    userDetailProcessing, user,
  } = props;

  const { match } = props;
  const { id } = match.params;

  useEffect(() => {
    props.dispatch({
      type: sagaTypes.USER_DETAIL_REQUEST,
      id,
    });
  }, [id]);

  const renderSubjects = () => {
    let subjects = [];
    if (user?.assigned_subjects?.length > 0) {
      subjects = map(user.assigned_subjects, (row) => {
        return (
          <tr key={`subject-${row.id}`}>
            <td>{row.name}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>No subject assigned</td>
        </tr>
      );
    }
    return subjects;
  };

  const renderTeachers = () => {
    let teachers = [];
    if (user?.assigned_teachers?.length > 0) {
      teachers = map(user.assigned_teachers, (row) => {
        return (
          <tr key={`teacher-${row.id}`}>
            <td>{row.name}</td>
            <td>{row.education}</td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td colSpan="2">No Teacher assigned</td>
        </tr>
      );
    }
    return teachers;
  };

  return (
    <div>
      <Link to="/users">Back to user list page</Link>
      {userDetailProcessing
      && (
          <div><LoaderComponent /></div>
      )
      }
      {!userDetailProcessing
      && (<Fragment>
            <h3>Assigned Courses</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {renderSubjects()}
                </tbody>
            </table>

            <h3>Assigned Teachers</h3>
            <table className="table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Education</th>
                </tr>
                </thead>
                <tbody>
                {renderTeachers()}
                </tbody>
            </table>
            </Fragment>
      )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const userState = state.users;
  return {
    userDetailProcessing: userState.userDetailProcessing,
    user: userState.user,
  };
};

UserDetail.defaultProps = {
  userDetailProcessing: false,
  user: {},
};

UserDetail.propTypes = {
  userDetailProcessing: PropTypes.bool,
  user: PropTypes.object,
};

export default connect(
  mapStateToProps,
)(UserDetail);
