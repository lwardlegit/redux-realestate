import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getListings} from '../actions/postActions';
import '../static/css/App.css';
import house from '../static/images/house.jpg';

    class Properties extends Component {

    componentDidMount(){
        this.props.getListings()
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.new){
            this.props.listings.unshift(nextProps.new)
        }
    }
   
    render() {
        const propertyList = this.props.listings.map(property => (
            <div className="listing" key = {property.propertyName}>
                <h3>{property.propertyName}</h3>
                <img src = { house } className="image" image alt="a listing"/>

                <div className="listingDetails">
                <p> {property.footage} </p>
                <p> {property.address} </p>
                <p> {property.price}   </p>
                </div>
            </div>
        ))
        return (
            <div className="listingContainer">
                <h2>Listings</h2>
            
            <div className="mappedListings">
                    {propertyList}
            </div> 
            </div>
        )
    }
}
Properties.propTypes = {
    new: PropTypes.object,
    listings: PropTypes.array.isRequired
}

const mapStateToProps = state =>({
    listings: state.listings.properties,
    new: state.listings.newListing
});
export default connect(mapStateToProps, {getListings})(Properties)