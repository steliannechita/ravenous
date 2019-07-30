import React from "react";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import "./App.css";
import Yelp from "../../util/Yelp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: null };
    
  
  }
  searchYelp=(term, location, sortBy)=>{
    Yelp.search(term, location, sortBy)
    .then(businesses => {
      return this.setState({businesses: businesses})})
      .catch((error)=> this.setState({businesses:error}))
  }
  searchYelpAndSortByRating=(term, location, sortBy)=>{
    Yelp.search(term, location, sortBy)
    .then(businesses => {
      const sortedByRating=businesses.sort((x,y)=>y.rating-x.rating)
      return this.setState({ businesses:sortedByRating })})
      .catch((error)=> this.setState({businesses:error}))
  }
  
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar 
            searchYelp={this.searchYelp}
            searchYelpAndSortByRating={this.searchYelpAndSortByRating}
            />
        {this.state.businesses && (
          <BusinessList businesses={this.state.businesses} />
        )}
      </div>
    );
  }
}

export default App;
