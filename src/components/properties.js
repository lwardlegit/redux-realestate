import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getListings} from '../actions/postActions';

 class Properties extends Component {

    componentDidMount(){
        getListings()
    }
   
    render() {
        const properties = this.props.properties.map(property => (
            <div key = {property.id}>
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
                    {properties}
            </div> 
        )
    }
}
Properties.propTypes = {
    properties: PropTypes.array.isRequired,
    newListing: PropTypes.object
}

const mapStateToProps = state =>({
    properties: state.properties.properties,
    newListing: state.properties.newListing
});
export default connect(mapStateToProps)(Properties)