import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getListings} from '../actions/postActions';

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
            <div key = {property.propertyName}>
                <h3>{property.propertyName}</h3>
                <div style={{width: '4em', height:'4em', backgroundColor: 'blue'}}>image</div>
                <p>{property.footage}</p>
                <p>{property.address}</p>
                <p>{property.price}</p>
            </div>
        ))
        return (
            <div>
                <h1>Current Listings</h1>
                    {propertyList}
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