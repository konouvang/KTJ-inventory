// import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import Grid from '@material-ui/core/Grid';
import DashboardUpdateInput from '../DashboardUpdateInput/DashboardUpdateInput';


class DashboardItem extends Component {
    constructor(props){
        super(props)
            this.state= {
                inventoryId: this.props.inventoryId,
                batch: this.props.batch,
                name: this.props.name,
                product_line: this.props.product_line,
                length: this.props.length,
                texture: this.props.texture,
                color: this.props.color,
                hair_type: this.props.hair_type,
                region_type: this.props.region_type,
                factory: this.props.factory,
                current_location: this.props.current_location,
                quantity: this.props.quantity,
                cost_of_batch: this.props.cost_of_batch,
                price_per_unit: this.props.price_per_unit,
                photos: this.props.photos,
                qr_code: this.props.qr_code,

        }
    }


    editInventory = () => {
        this.setState({
          inventoryIsEditable: true,
        });
      }

    removeItem = (item) => () => {
        console.log('HERE: ', item);
        this.props.dispatch({ type: 'DELETE_INVENTORY', payload: item});
    }
    render(){
        return(
            <div className="card">
                    <img src={`images/${this.props.photos}`} alt={this.props.inventoryId}/>
                    <div className="container">
                        <div>
                        {this.state.inventoryIsEditable ?
                        <DashboardUpdateInput
                            inventoryId={this.props.inventoryId}
                            batch={this.props.batch}
                            name={this.props.name}
                            product_line={this.props.product_line}
                            length={this.props.length}
                            texture={this.props.texture}
                            color={this.props.color}
                            hair_type={this.props.hair_type}
                            region_type={this.props.region_type}
                            factory={this.props.factory}
                            current_location={this.props.current_location}
                            quantity={this.props.quantity}
                            cost_of_batch={this.props.cost_of_batch}
                            price_per_unit={this.props.price_per_unit}
                            photos={this.props.photos}
                            qr_code={this.props.qr_code}
                        />
                        :
<<<<<<< HEAD
                        <div className="dashboardPTag" className="row">
                            <div className="column">
=======
                        <div className="dashboardPTag" class="row">
                            <div class="column">
>>>>>>> 1b77c14a1276ac5b49991ca24f6a333a84afe5a7
                                <p>Id: {this.props.inventoryId}</p>
                                <p>Batch: {this.props.batch}</p>
                                <p>Name: {this.props.name}</p>
                                <p>Product Line: {this.props.product_line}</p>
                                <p>Length: {this.props.length}</p>
                                <p>Texture: {this.props.texture}</p>
                                <p>Color: {this.props.color}</p>
                                <p>Hair Type: {this.props.hair_type}</p>
                            </div>
<<<<<<< HEAD
                            <div className="column">
=======
                            <div class="column">
>>>>>>> 1b77c14a1276ac5b49991ca24f6a333a84afe5a7
                                <p>Region: {this.props.region_type}</p>
                                <p>Factory: {this.props.factory}</p>
                                <p>Location: {this.props.current_location}</p>
                                <p>Quantity: {this.props.quantity}</p>
                                <p>Cost of Batch: {this.props.cost_of_batch}</p>
                                <p>Price per Unit: {this.props.price_per_unit}</p>
                                <p>Image: {this.props.photos}</p>
                                <p>QR Code: {this.props.qr_code}</p>
                            </div>
                        </div>
                        }

                        <div>

<<<<<<< HEAD
                            <button type="button" className="deletebtn" onClick={this.removeItem(this.props.inventoryId)}>Remove</button>
                            {/* <button onClick={this.selectInventory}>Add Inventory to updateReducer</button> */}
                            <button type="button" className="editbtn" disabled={this.state.inventoryIsEditable} onClick={this.editInventory}>Edit Inventory</button>
=======
                            <button type="button" class="deletebtn" onClick={this.removeItem(this.props.inventoryId)}>Remove</button>
                            {/* <button onClick={this.selectInventory}>Add Inventory to updateReducer</button> */}
                            <button type="button" class="editbtn" disabled={this.state.inventoryIsEditable} onClick={this.editInventory}>Edit Inventory</button>
>>>>>>> 1b77c14a1276ac5b49991ca24f6a333a84afe5a7
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DashboardItem);