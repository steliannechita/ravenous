const apiKey = process.env.REACT_APP_API_KEY;

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          if (jsonResponse.businesses.length !== 0) {
            return jsonResponse.businesses.map(business => {
              return {
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
                phone: business.phone
              };
            });
          } else {
            throw {
              description:
                "Didn't find any results for the specified term. Try to perform the search by using valid names/terms"
            };
          }
        } else if (jsonResponse.error) {
          throw jsonResponse.error;
        }
      });
  }
};

export default Yelp;
