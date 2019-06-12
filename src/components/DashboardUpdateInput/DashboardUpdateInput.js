import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './mapStateToProps';


class DashboardUpdateInput extends Component {
  state= {
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

  componentDidMount() {
    this.setState({
      inventoryEntry: {
        ...this.state.inventoryEntry,
        inventoryId: this.props.batch,
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
    })
  }

  // clickMe = (event) => {
  //     event.preventDefault();
  //     this.props.dispatch({type: 'UPDATE_INVENTORY', payload : this.state.inventoryEntry});

  // }


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

  saveUpdate = (event) => {
    event.preventDefault();
    console.log('Show me things!: ', this.state.inventoryUpdate);
    this.props.dispatch({type: 'UPDATE_INVENTORY', payload : this.state.inventoryEntry});
  }

  // clearInputs =(event) => {
  //   this.setState({
  //       inventoryEntry: {
  //           batch: '',
  //           name: '',
  //           product_line: '',
  //           length: '',
  //           texture: '',
  //           color: '',
  //           hair_type: '',
  //           region_type: '',
  //           factory: '',
  //           current_location: '',
  //           quantity: '',
  //           cost_of_batch: '',
  //           price_per_unit: '',
  //           photos: '',
  //           qr_code: '',
  //       }
  //   })
  // }

  render() {
    return (
        <form onSubmit={this.saveUpdate}>
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
                <button>Save update</button>
        </form>
    );
  }
}

export default connect(mapStateToProps)(DashboardUpdateInput);