import React from 'react'

function Plot({movie}) {
    const loaded = () => {
        return (
          <>
            <h1>{movie.Plot}</h1>
    
          </>
        );
      };
    
      //function to return loading JSX
      const loading = () => {
        return <p className='plot'>No Plot to Display</p>;
      };
    
      //Ternary operator will determine which functions JSX we will return
      return movie ? loaded() : loading();
};

export default Plot