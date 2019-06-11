import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
// import LogOutButton from '../LogOutButton/LogOutButton';
import Grid from '@material-ui/core/Grid';




class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
        type: 'FETCH_INVENTORY',
    });
}

removeItem = () => {
  this.props.dispatch({ type: 'DELETE_INVENTORY', payload: this.props.reduxState.inventoryReducer});
} //KONOU NOTE: I'm missing something and I can't figure out what it is.


render() {
    console.log(this.props.reduxState.inventoryReducer);
    const inventoryHTML = this.props.reduxState.inventoryReducer.map((inventory, index) => {
      return (
       <Grid item xs={4} key={index} className="borderdashboard">
              <img src={`images/${inventory.photos}`} alt={inventory.id}/>
              <div className="dashboard">
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
              <p>{inventory.qr_code}</p>
              <button onClick={this.removeItem}>Remove</button>
              </div>
      </Grid>

  )
    })
    return (

      <div>
      <Grid container spacing={1}>
        {inventoryHTML}
        </Grid>
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

