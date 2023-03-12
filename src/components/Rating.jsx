import React from 'react'

function Rating({movie}) {
    const loaded = () => {
        return (
          <>
            <h1>{movie.imdbRating}</h1>
    
          </>
        );
      };
    
      //function to return loading JSX
      const loading = () => {
        return <h3>No Rating to Display</h3>;
      };
    
      //Ternary operator will determine which functions JSX we will return
      return movie ? loaded() : loading();
};

export default Rating