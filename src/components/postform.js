import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newProperty } from '../actions/postActions';
import '../static/css/App.css';

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
    
    };
    

    


    render() {
        return (
            <div className="form">
                <h2>Add Listing</h2>
                <form name="listingsform" onSubmit = {this.onSubmit}>
                    <div>
                        <label>your listing name</label><br/>
                        <input name="propertyName" type="text" onChange={this.onChange} placeholder={this.state.propertyName} />
                    </div>

                    <div>
                        <label>listing size </label><br/>
                        <input name="footage" onChange={this.onChange} placeholder={this.state.footage} />
                    </div>

                    <div>
                        <label>listing location </label><br/>
                        <input name="address" onChange={this.onChange} placeholder={this.state.address} />
                    </div>

                    <div>
                        <label>desired price </label><br/>
                        <input name="price" onChange={this.onChange} placeholder={this.state.price} />
                    </div>

                    <br/>
                        <button className="submitbtn" type="submit">Submit</button>
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