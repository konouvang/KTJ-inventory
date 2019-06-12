import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import DashboardList from '../DashboardList/DashboardList';




class DashboardHomePage extends Component {
  state = {
    inventoryIsEditable: false,

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
    return (
      <div>
        <DashboardList />
      </div>
    )
}
}

export default connect(mapStateToProps)(DashboardHomePage);

