import React from "react";
import { useEffect,useState } from "react";
import './app.css'
import Searchicon from './search.svg'
import MovieCard from "./Moviecard";
const API_url='http://www.omdbapi.com?apikey=ba3ad03b'
function App() {

    const [movies,setmovies]=useState([])
    const [Search,setSearch]=useState('');
    const search_movie=async (title)=>{
        try{
        const response=await fetch(`${API_url}&s=${title}`)
        const data= await response.json();
        setmovies(data.Search)
        console.log(data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{search_movie('Avengers Infinity')}
    ,[])
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                placeholder="Search for Movies"
                value={Search}
                onChange={(e)=>setSearch(e.target.value)}>
                </input>
                <img src={Searchicon}
                alt="Search_img"
                onClick={()=>search_movie(Search)}>
                </img>
            </div>
            {
                movies?.length>0 ? 
            (<div className="container">
                {
                    movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                    ))
                }
            </div>) :
             (<div className="empty">
                <h2>No Movies Found</h2>
             </div>)
             }
        </div>
    )

    
}
export default App