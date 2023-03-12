import {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import Moviedisplay from './components/Moviedisplay';
import Form from './components/Form';
import Rating from "./components/Rating";
import Plot from "./components/Plot";
import Awards from "./components/Awards";
import Button from "./components/Button";
import favorites from './models/favorites'
import Favoritedisplay from "./components/Favoritedisplay";
import plots from './models/plots'
import Favoriteplot from "./components/Favoriteplot";

function App() {
  const apikey ="23d82c01"
  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
   
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apikey}&t=${searchTerm}`
    );
  
    const data = await response.json();
 
    setMovie(data);
  };
  useEffect(() => {
    getMovie("");
  }, []);


// favorites caraousel
const [count, setCount] = useState(-1)
//Current pic
const [currentPic, setCurrentPic] = useState(favorites[count])
//---------------------Established State--------------

const changeCount = () => {
  setCount(count+1)
  setCurrentPic(favorites[count])
}

const reverseCount = () => {
  setCount( - 1)
  setCurrentPic(favorites[count])
}

// plot carousel
const [count2, setCount2] = useState(-1)
//Current pic
const [currentPic2, setCurrentPic2] = useState(plots[count])
//---------------------Established State--------------

const changeCount2 = () => {
  setCount(count+1)
  setCurrentPic(plots[count])
}




  return (
    <div className="App">
      <div className="topBox"> <img className="titlelogo" src="https://agoodmovietowatch.com/assets/agmtw_logo.png"/><h1>Search for Films</h1></div>
      <div className="formBox">
         <div className="form">
        <Form moviesearch={getMovie} />
        </div>
        <div className="form">
        <Button togglePic={changeCount}/>
        </div>
      </div>

     <div className="container1">
       <div className="poster">
        <Moviedisplay movie={movie} />
        <Favoritedisplay images={favorites[count]}/>
        <div className="mainPic">
        <img className="pic" src="https://neonize.gumlet.io/wp-content/uploads/2022/08/Movie-Night_light.jpg"/></div>
        </div> 

       <div className="descriptionBox">
          <div className="rating">
         <Rating movie={movie}/>
         </div>
         <div className="plot">
         <Plot movie={movie}/>
         <Favoriteplot favplot={plots[count]}/>

         </div>
         <div className="awards">
         <Awards movie={movie}/>
           </div>
        </div>
      </div>

    </div>
  );
}

export default App;