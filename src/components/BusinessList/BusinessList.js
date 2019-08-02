import React from "react";
import "./BusinessList.css";
import Business from "../Business/business";

class BusinessList extends React.Component {
  render() {
    let businessesArray;
    if (
      Array.isArray(this.props.businesses) &&
      this.props.businesses.length > 0
    ) {
      businessesArray = this.props.businesses.map(business => {
        return <Business key={business.id} business={business} />;
      });
    } else {
      return (businessesArray = (
        <h3 id="noResults">
          No results found. Invalid inputs or no internet connection
        </h3>
      ));
    }

    return <div className="BusinessList">{businessesArray}</div>;
  }
}

export default BusinessList;
