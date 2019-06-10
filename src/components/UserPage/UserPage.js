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
        const inventoryHTML = this.props.reduxState.inventoryReducer.map((inventory, index) => {
          return (
      <tbody>
          <tr>
              <td scope="row">
              <p>{inventory.id}</p>
              <p>{inventory.batch}</p>
              <p>{inventory.name}</p>
              <p>{inventory.product_line}</p>
              <p>{inventory.length}</p>
              <p>{inventory.texture}</p>
              <p>{inventory.color}</p>
              <p>{inventory.hair_type}</p>
              <p>{inventory.region_type}</p>
              <p>{inventory.factory}</p>
              <p>{inventory.current_location}</p>
              <p>{inventory.quantity}</p>
              <p>{inventory.cost_of_batch}</p>
              <p>{inventory.price_per_unit}</p>
              <p>{inventory.photos}</p>
              <p>{inventory.qr_code}</p>
              </td>
          </tr>
      </tbody>
  
      )
        })
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    {inventoryHTML}
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

