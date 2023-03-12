import React from 'react'

function Awards({movie}) {
    const loaded = () => {
        return (
          <>
            <h1>{movie.Awards}</h1>
    
          </>
        );
      };
    
      //function to return loading JSX
      const loading = () => {
        return <p className='plot'>No Awards to Display</p>;
      };
    
      //Ternary operator will determine which functions JSX we will return
      return movie ? loaded() : loading();
};

export default Awards