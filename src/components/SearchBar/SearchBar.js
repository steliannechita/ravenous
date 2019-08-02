import React from'react'
import './SearchBar.css'



class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            term:'',
            location:'',
            sortBy:'best_match'
        }
        this.sortByOptions={
            'Best Match':'best_match',
            'Highest Rated':'rating',
            'Most Reviewd':'review_count'
        }
        this.handleLocationChange=this.handleLocationChange.bind(this)
        this.handleTermChange=this.handleTermChange.bind(this)
        this.handleSortByChange=this.handleSortByChange.bind(this)
        this.handleSearch=this.handleSearch.bind(this)
    }
    getSortByClass(sortByOption){
       return this.state.sortBy===sortByOption?'active':''

    }
    handleSortByChange(sortByOption){
        this.setState({sortBy:sortByOption})
    }
    handleTermChange(event){
        return this.setState({term:event.target.value})       
    }
    handleLocationChange(event){
        return this.setState({location:event.target.value})
    }
    handleSearch(e){
        e.preventDefault();
        return this.state.sortBy==='rating'?
        this.props.searchYelpAndSortByRating(this.state.term,this.state.location,this.state.sortBy):
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
        
    }
    renderSortByOptions(){
        return Object.keys(this.sortByOptions)
        .map(sortbyOption=>{
            let sortByOptionValue=this.sortByOptions[sortbyOption]
            return <li 
            key={sortByOptionValue}
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange.bind(this,sortByOptionValue)}
            >{sortbyOption}</li>
        })
    }
    render(){
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <form 
                    onSubmit={this.handleSearch}>
                    <div className="SearchBar-fields">
                        <input 
                        placeholder="Search Businesses" 
                        onChange={this.handleTermChange}
                        required/>
                        <input 
                        placeholder="Where?" 
                        onChange={this.handleLocationChange}
                        required/>
                    </div>
                    <div className="SearchBar-submit">
                        <button >Let's Go</button>
                    </div>
                </form>
                
            </div>  
        )
    }
}

export default SearchBar