import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
// import LogOutButton from '../LogOutButton/LogOutButton';



class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
        type: 'FETCH_INVENTORY',
    });
}

    render() {
        console.log(this.props.reduxState.inventoryReducer);
       
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Time Order Placed</th>
                            <th scope="col">Type</th>
                            <th scope="col">Cost</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}



////THIS WILL BE THE DASHBOARD!!!!!!!!!!

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
// const UserPage = (props) => (
//   <div>
//     <h1 id="welcome">
//       Welcome, { props.user.username }!
//     </h1>
//     <p>Your ID is: {props.user.id}</p>
//     <LogOutButton className="log-in" />
//   </div>
// );

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

