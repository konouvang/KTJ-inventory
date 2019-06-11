import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
// import LogOutButton from '../LogOutButton/LogOutButton';
import Grid from '@material-ui/core/Grid';




class DashBoardUpdate extends Component {
  state = {
    inventoryIsEditable: false,
    username: '',

    inventoryUpdate: {
      batch: '',
      name: '',
      product_line: '',
      length:0,
      texture: '',
      color: '',
      hair_type: '',
      region_type: '',
      factory: '',
      current_location: '',
      quantity:0,
      cost_of_batch:0,
      price_per_unit:0,
      photos: '',
      qr_code: '',
    }
  }


  componentDidMount() {
    this.props.dispatch({
        type: 'FETCH_INVENTORY',
    });
}

removeItem = (item) => () => {
  console.log('HERE: ', item);
  this.props.dispatch({ type: 'DELETE_INVENTORY', payload: item});
}

editInventory = () => {
  this.setState({
    inventoryIsEditable: true,
  });
}

updateItem = (item) => () => {
  this.props.dispatch({type: 'UPDATE_INVENTORY', payload: item});
}

saveUpdate = (event) => {
  event.preventDefault();
  console.log('Show me things!: ', this.state.inventoryUpdate);
}

changeHandle = (event) => {
  const inputValue = event.target.value;
      const propertyKey = event.target.getAttribute('name');
      console.log('propertyKey', propertyKey);
      console.log('inputValue', inputValue);
      this.setState({
        inventoryEntry: {
          ...this.state.inventoryUpdate,
          [propertyKey]: inputValue,
        }
      });
    }

render() {
    console.log(this.props.reduxState.inventoryReducer);
    const inventoryHTML = this.props.reduxState.inventoryReducer.map((inventory, index) => {
      return (
       <Grid item xs={4} key={index} >
              <img src={`images/${inventory.photos}`} alt={inventory.id}/>
              <div className="dashboard">
                {this.state.inventoryIsEditable ?
                <input placeholder="batch" value={inventory.id} name="batch"onChange={this.changeHandle}/> :
                <p>{inventory.id}</p>
                }
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
                <button onClick={this.removeItem(inventory.id)}>Remove</button>
              </div>
              {this.state.inventoryIsEditable ?
                <div>
                  <form onSubmit={this.saveUpdate} key={index}>
                    <input placeholder="batch" value={this.state.enteredbatch} name="batch"onChange={this.changeHandle}/>
                    <input placeholder="name" value={this.state.enteredname} name="name"onChange={this.changeHandle}/>
                    <input placeholder="product_line" value={this.state.enteredproduct_line} name="product_line"onChange={this.changeHandle}/>
                    <input placeholder="length" value={this.state.enteredlength} name="length"onChange={this.changeHandle}/>
                    <input placeholder="texture" value={this.state.enteredtexture} name="texture"onChange={this.changeHandle}/>
                    <input placeholder="color" value={this.state.enteredcolor} name="color"onChange={this.changeHandle}/>
                    <input placeholder="hair_type" value={this.state.enteredhair_type} name="hair_type"onChange={this.changeHandle}/>
                    <input placeholder="region_type" value={this.state.enteredregion_type} name="region_type"onChange={this.changeHandle}/>
                    <input placeholder="factory" value={this.state.enteredfactory} name="factory"onChange={this.changeHandle}/>
                    <input placeholder="current_location" value={this.state.enteredcurrent_location} name="current_location"onChange={this.changeHandle}/>
                    <input placeholder="quantity" value={this.state.enteredquantity} name="quantity"onChange={this.changeHandle}/>
                    <input placeholder="cost_of_batch" value={this.state.enteredcost_of_batch} name="cost_of_batch"onChange={this.changeHandle}/>
                    <input placeholder="price_per_unit" value={this.state.enteredprice_per_unit} name="price_per_unit"onChange={this.changeHandle}/>
                    <input placeholder="photos" value={this.state.enteredphotos} name="photos"onChange={this.changeHandle}/>
                    <input placeholder="qr_code" value={this.state.enteredqr_code} name="qr_code"onChange={this.changeHandle}/>
                    <button type="submit">Save</button>
                  </form>
                  <button onClick={this.updateItem(inventory.id)}>Update</button> 
                </div> :
                <button onClick={this.editInventory}>Edit Inventory</button>
                
              }
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
export default connect(mapStateToProps)(DashBoardUpdate);

