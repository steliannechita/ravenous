import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: null };
    this.searchYelp = this.searchYelp.bind(this);
   /*this.sortedByRating=this.sortedByRating.bind(this);*/
  }
  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
    this.setState({ businesses:businesses });
    });
  }
  /*sortedByRating(){
    const sortedByRatingArray= this.state.businesses.map((a,b)=>b.rating-a.rating)
    return this.setState({businesses:sortedByRatingArray})
  }*/
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar 
            searchYelp={this.searchYelp} 
            businesses={this.state.businesses} 
            sortedByRating={this.sortedByRating}
            />
        {this.state.businesses && (
          <BusinessList businesses={this.state.businesses} />
        )}
      </div>
    );
  }
}

export default App;
