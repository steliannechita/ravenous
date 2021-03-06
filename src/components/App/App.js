import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      errors: null,
      isLoading: false
    };
  }
  searchYelp = (term, location, sortBy) => {
    this.setState({ businesses: [], errors: null, isLoading: true });
    Yelp.search(term, location, sortBy)
      .then(businesses => {
        return this.setState({ businesses: businesses, isLoading: false });
      })
      .catch(errors => this.setState({ errors, isLoading: false }));
  };
  searchYelpAndSortByRating = (term, location, sortBy) => {
    this.setState({ businesses: [], errors: null, isLoading: true });
    Yelp.search(term, location, sortBy)
      .then(businesses => {
        const sortedByRating = businesses.sort((x, y) => y.rating - x.rating);
        return this.setState({ businesses: sortedByRating, isLoading: false });
      })
      .catch(errors => this.setState({ errors, isLoading: false }));
  };
  handleClearErrState = () => {
    this.setState({ errors: null });
  };

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar
          searchYelp={this.searchYelp}
          searchYelpAndSortByRating={this.searchYelpAndSortByRating}
          handleClearErrState={this.handleClearErrState}
        />

        <BusinessList
          businesses={this.state.businesses}
          errors={this.state.errors}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
