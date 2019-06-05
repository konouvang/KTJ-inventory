import React, { Component } from 'react';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';



class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
        type: 'FETCH_INVENTORY',
    });
}

    render() {
        console.log(this.props.reduxState.inventoryReducer);
        // const pizzaHTML = this.props.reduxState.pizzaAdminOrderReducer.map((pizza, index) => {
        //     return (


        // <tbody>
        //     <tr>
        //         <td scope="row">{pizza.customer_name}</td>
        //         <td>{pizza.time}</td>
        //         <td>{pizza.type}</td>
        //         <td>{pizza.total}</td>
        //     </tr>
        // </tbody>
    

          //   )
          // })
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
                {/* {pizzaHTML} */}
                </table>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
// export default connect(mapReduxStateToProps)(UserPage);

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
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

