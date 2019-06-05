import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
// import LogOutButton from '../LogOutButton/LogOutButton';



class MasterData extends Component {
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
              <td scope="row">{inventory.name}</td>
              <td>{inventory.id}</td>
              <td>{inventory.batch}</td>
              <td>{inventory.name}</td>
              <td>{inventory.product_line}</td>
              <td>{inventory.length}</td>
              <td>{inventory.texture}</td>
              <td>{inventory.color}</td>
              <td>{inventory.hair_type}</td>
              <td>{inventory.region_type}</td>
              <td>{inventory.factory}</td>
              <td>{inventory.current_location}</td>
              <td>{inventory.quantity}</td>
              <td>{inventory.cost_of_batch}</td>
              <td>{inventory.price_per_unit}</td>
              <td>{inventory.photos}</td>
              <td>{inventory.qr_code}</td>
          </tr>
      </tbody>
  
      )
        })
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Batch</th>
                            <th scope="col">Name</th>
                            <th scope="col">Product Line</th>
                            <th scope="col">Length</th>
                            <th scope="col">Texture</th>
                            <th scope="col">Color</th>
                            <th scope="col">Hair Type</th>
                            <th scope="col">Region Type</th>
                            <th scope="col">Factory</th>
                            <th scope="col">Current Location</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Cost of Batch</th>
                            <th scope="col">Price per Unit</th>
                            <th scope="col">Photos</th>
                            <th scope="col">QR Code</th>
                        </tr>
                    </thead>
                    {inventoryHTML}
                </table>
            </div>
        )
    }
}



export default connect(mapStateToProps)(MasterData);

