import React, { Component } from 'react';
import { connect } from 'react-redux';
import DashboardItem from '../DashboardItem/DashboardItem'
import mapStateToProps from '../../modules/mapStateToProps';
import Grid from '@material-ui/core/Grid';

class DashboardList extends Component {


  render() {
    const inventoryHTML = this.props.reduxState.inventoryReducer.map((inventory, index) => {
      return (
        <Grid item xs={4} key={index}>
        <DashboardItem
            inventoryId={inventory.id}
            batch={inventory.batch}
            name={inventory.name}
            product_line={inventory.product_line}
            length={inventory.length}
            texture={inventory.texture}
            color={inventory.color}
            hair_type={inventory.hair_type}
            region_type={inventory.region_type}
            factory={inventory.factory}
            current_location={inventory.current_location}
            quantity={inventory.quantity}
            cost_of_batch={inventory.cost_of_batch}
            price_per_unit={inventory.price_per_unit}
            photos={inventory.photos}
            qr_code={inventory.qr_code}
          />
          </Grid>
      )
    })
    return (
      <div className="container">
        <Grid container spacing={3}>
          {inventoryHTML}
        </Grid>
      </div>
    )
  }
}

export default connect(mapStateToProps)(DashboardList);
