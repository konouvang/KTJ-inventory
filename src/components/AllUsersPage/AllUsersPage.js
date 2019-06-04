import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

class AllUsers extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_USERS'});
  }

  render() {
    console.log(this.props.alluserReducer);
    const allusersHTML = this.props.alluserReducer.map((user, index) => {
      return(
        <div>
          <ul>
            <li>
              {user.username}
            </li>
          </ul>
        </div>
      )})
    return (
    <div>
     {allusersHTML}
    </div>
  )
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  alluserReducer: state.alluserReducer,
});

export default connect(mapStateToProps)(AllUsers);