import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from '../../modules/mapStateToProps';
import ImageUpload from '../ImageUpload/ImageUpload'; 




class EntryPage extends Component {
 

    state = {
        inventoryEntry: {
            batch: '',
            name: '',
            product_line: '',
            length: '',
            texture: '',
            color: '',
            hair_type: '',
            region_type: '',
            factory: '',
            current_location: '',
            quantity: 0,
            cost_of_batch: 0,
            price_per_unit: 0,
            photos: '',
            qr_code: '',
        }
    }

    clickMe = (event) => {
        event.preventDefault();
        this.props.dispatch({
          type: 'POST_INVENTORY',
          payload : {
            ...this.state.inventoryEntry,
            // ADD IMAGE URL imageUrl: this.reduxState.WHATEVER_IMAGE
          }
        });
        this.props.history.push('/home')
    }
 
  changeHandle = (event) => {
    const inputValue = event.target.value;
        const propertyKey = event.target.getAttribute('name');
        console.log('propertyKey', propertyKey);
        console.log('inputValue', inputValue);
        this.setState({
          inventoryEntry: {
            ...this.state.inventoryEntry,
            [propertyKey]: inputValue,
          }
        });
      }

  clearInputs =(event) => {
    this.setState({
        inventoryEntry: {
            batch: '',
            name: '',
            product_line: '',
            length: '',
            texture: '',
            color: '',
            hair_type: '',
            region_type: '',
            factory: '',
            current_location: '',
            quantity: '',
            cost_of_batch: '',
            price_per_unit: '',
            photos: '',
            qr_code: '',
        }
    })
  }

  render() {
    return (
        <form className="form" onSubmit={this.clickMe}>
                <input type="text" placeholder="batch" value={this.state.enteredbatch} name="batch"onChange={this.changeHandle}/>
                <input type="text" placeholder="name" value={this.state.enteredname} name="name"onChange={this.changeHandle}/>
                <input type="text" placeholder="product_line" value={this.state.enteredproduct_line} name="product_line"onChange={this.changeHandle}/>
                <input type="number" placeholder="length" value={this.state.enteredlength} name="length"onChange={this.changeHandle}/>
                <input type="text" placeholder="texture" value={this.state.enteredtexture} name="texture"onChange={this.changeHandle}/>
                <input type="text" placeholder="color" value={this.state.enteredcolor} name="color"onChange={this.changeHandle}/>
                <input type="text" placeholder="hair_type" value={this.state.enteredhair_type} name="hair_type"onChange={this.changeHandle}/>
                <input type="text" placeholder="region_type" value={this.state.enteredregion_type} name="region_type"onChange={this.changeHandle}/>
                <input type="text" placeholder="factory" value={this.state.enteredfactory} name="factory"onChange={this.changeHandle}/>
                <input type="text" placeholder="current_location" value={this.state.enteredcurrent_location} name="current_location"onChange={this.changeHandle}/>
                <input type="number" placeholder="quantity" value={this.state.enteredquantity} name="quantity"onChange={this.changeHandle}/>
                <input type="number" placeholder="cost_of_batch" value={this.state.enteredcost_of_batch} name="cost_of_batch"onChange={this.changeHandle}/>
                <input type="number" placeholder="price_per_unit" value={this.state.enteredprice_per_unit} name="price_per_unit"onChange={this.changeHandle}/>
                <input type="text" placeholder="photos" value={this.state.enteredphotos} name="photos"onChange={this.changeHandle}/>
                <input type="text" placeholder="qr_code" value={this.state.enteredqr_code} name="qr_code"onChange={this.changeHandle}/>
                <ImageUpload />
                <button className="saveupdatebtn">Submit</button>
        </form>
    );
  }
}

export default connect(mapStateToProps)(EntryPage);