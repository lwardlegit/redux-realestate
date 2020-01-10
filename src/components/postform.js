import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newProperty } from '../actions/postActions';
class Postform extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.properties[this.props.properties.length-1]+1,
            propertyName: 'enter name',
            footage: 'enter size in sqft',
            address: 'full address',
            price: '$ 00.00'
        }   
    }

    onChange =(e)=>{
        this.setState({ [e.target.name] :e.target.value});
    }

    onSubmit = (e) =>{
        e.preventDefault()
        const newListing = {
            id: this.state.id,
            propertyName: this.state.propertyName,
            footage: this.state.footage,
            address: this.state.address,
            price: this.state.price
        }

        this.props.newProperty(newListing)
    }


    render() {
        return (
            <div>
                <h1>Add Property Listing</h1>
                <form onSubmit = {this.onSubmit}>
                    <div>
                        <label>your listing name</label><br/>
                        <input name="propertyName" type="text" onChange={this.onChange} value={this.props.title}/>
                    </div>

                    <div>
                        <label>listing size </label><br/>
                        <input name="footage" onChange={this.onChange} value={this.props.body}/>
                    </div>

                    <div>
                        <label>listing location </label><br/>
                        <input name="address" onChange={this.onChange} value={this.props.body}/>
                    </div>

                    <div>
                        <label>desired price </label><br/>
                        <input name="price" onChange={this.onChange} value={this.props.body}/>
                    </div>

                    <br/>
                        <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    newProperty: PropTypes.func.isRequired
}

export default connect(null, {newProperty})(Postform)