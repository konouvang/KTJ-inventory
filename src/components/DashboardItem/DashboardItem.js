import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';


class DashboardItem extends Component {
    constructor(props){
        super(props)
            this.state= {
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

    selectInventory = (event) => {
        const payloadObject = {
            batch: this.state.batch,
            name: this.state.name,
            product_line: this.state.product_line,
            length: this.state.length,
            texture: this.state.texture,
            color: this.state.color,
            hair_type: this.state.hair_type,
            region_type: this.state.region_type,
            factory: this.state.factory,
            current_location: this.state.current_location,
            quantity: this.state.quantity,
            cost_of_batch: this.state.cost_of_batch,
            price_per_unit: this.state.price_per_unit,
            photos: this.state.photos,
            qr_code: this.state.qr_code
        }

        this.props.dispatch({type: 'UPDATE_INVENTORY', payload: payloadObject});
    }
    render(){
        return(
            <div key={index}>
                <img src={`images/${inventory.photos}`} alt={inventory.id}/>
                <p>{this.props.batch}</p>
                <p>{this.props.name}</p>
                <p>{this.props.product_line}</p>
                <p>{this.props.length}</p>
                <p>{this.props.texture}</p>
                <p>{this.props.color}</p>
                <p>{this.props.hair_type}</p>
                <p>{this.props.region_type}</p>
                <p>{this.props.factory}</p>
                <p>{this.props.current_location}</p>
                <p>{this.props.quantity}</p>
                <p>{this.props.cost_of_batch}</p>
                <p>{this.props.price_per_unit}</p>
                <p>{this.props.photos}</p>
                <p>{this.props.qr_code}</p>
                <button onClick={this.selectInventory}>Add Inventory to updateReducer</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DashboardItem);