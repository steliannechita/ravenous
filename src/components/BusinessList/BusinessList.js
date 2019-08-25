import React from "react";
import "./BusinessList.css";
import Business from "../Business/business";

class BusinessList extends React.Component {
  render() {
    if (this.props.isLoading) {
      return <div className="loading">Loading results</div>;
    }
    if (this.props.errors) {
      return  <h3 id="noResults">{this.props.errors.description}</h3>;
    }
    
    let businessesArray;
    businessesArray = this.props.businesses.map(business => {
      console.log(business);
      return <Business key={business.id} business={business} />;
    });
    return <div className="BusinessList">{businessesArray}</div>;
  }
}

export default BusinessList;
