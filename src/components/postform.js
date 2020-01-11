import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newProperty } from '../actions/postActions';
class Postform extends Component {
    constructor(props){
        super(props)
        this.state={
            propertyName: ' enter name ',
            footage: ' size in sqft ',
            address: ' full address ',
            price: ' $ 00.00 '
        }   
    }

    onChange =(e)=>{
        this.setState({ [e.target.name] :e.target.value});
    }

    onSubmit = (e) =>{
        e.preventDefault()
        const newListing = {
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
                        <input name="propertyName" type="text" onChange={this.onChange} placeholder={this.state.propertyName} value={this.props.title}/>
                    </div>

                    <div>
                        <label>listing size </label><br/>
                        <input name="footage" onChange={this.onChange} placeholder={this.state.footage} value={this.props.body}/>
                    </div>

                    <div>
                        <label>listing location </label><br/>
                        <input name="address" onChange={this.onChange} placeholder={this.state.address} value={this.props.body}/>
                    </div>

                    <div>
                        <label>desired price </label><br/>
                        <input name="price" onChange={this.onChange} placeholder={this.state.price} value={this.props.body}/>
                    </div>

                    <br/>
                        <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    newProperty: PropTypes.func.isRequired,
    new: PropTypes.object
}

const mapStateToProps = state =>({
    listings: state.listings.properties,
    new: state.listings.newListing
});

export default connect(mapStateToProps, {newProperty})(Postform)