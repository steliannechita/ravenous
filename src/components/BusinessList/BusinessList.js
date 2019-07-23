import React from 'react'
import './BusinessList.css'
import Business from '../Business/business'

class BusinessList extends React.Component{
    
    render(){
        let businessesArray=this.props.businesses.map(business=> {                   
            return <Business key={business.id} business={business}/>
        })
        if(businessesArray===undefined||businessesArray.length===0){
           businessesArray=<h1 id='noResults'>No results found</h1>
        }
        
        
        return(
            
            <div className="BusinessList">
                {businessesArray}
            </div>
        )
    }    
}

export default BusinessList