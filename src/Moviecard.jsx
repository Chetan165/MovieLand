import React from 'react'
const MovieCard=({movie})=>{
    // if(!movie1)
    //      return(
    //     <div className='empty'>
    //         <h3>
    //             No movie found. Please try again with different search criteria.
    
    //         </h3>
    //     </div>
    //     )
    return (
    <div className='movie'>
                    <div>
                    <p>{movie.Year}</p>
                    </div>
                    <div>
                    <img src={movie.Poster === 'N/A' ? 'https://placehold.co/400': movie.Poster} alt={movie.Title}></img>
                    </div>
                    <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                    </div>
    </div>
    )
}
export default MovieCard;