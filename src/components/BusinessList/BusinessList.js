import React from 'react'
import './BusinessList.css'
import Business from '../Business/business'

class BusinessList extends React.Component{
    
    render(){
        let businessesArray
        if(this.props.businesses.length===0){
            return businessesArray=<h1 id='noResults'>No results found</h1>        
        }else if(this.props.businesses.error){
            return businessesArray=<h1 id='noResults'>No results found</h1>
        }else {
             businessesArray=this.props.businesses.map(business=> {                   
                return <Business key={business.id} business={business}/>
            })
        }
        return(
            
            <div className="BusinessList">
                {businessesArray}
            </div>
        )
    }    
}

export default BusinessList