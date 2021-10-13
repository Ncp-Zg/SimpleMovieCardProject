import {React,useEffect,useState} from 'react'
import Home from "./pages/Home"
import {Switch,Route} from "react-router-dom"
import {Searchbar,Movies,PlayList} from "./components"
import {SignIn} from "./pages"
import MovieDetails from "./pages/MovieDetails/MovieDetails"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

function Router() {

    const[searchedValue,setSearchedValue]=useState("star")
    const[movieList,setMovieList]=useState([])
    const baseURL = "https://api.themoviedb.org/3/search/movie";

    
    
    const searchMovie=(pageNum=1)=>{
        axios.get(baseURL,{
            params:{
            api_key:"SECRET",
            query:searchedValue,
            page:pageNum,
        }
            
        }).then(res=>setMovieList(res?.data?.results))
    }

    useEffect(() => {
        searchMovie()
    }, [searchedValue])

    return (

        <div className="App">
            <Searchbar setSearchedValue={setSearchedValue}/>
            <Switch>
                <Route exact path="/">
                    <Home movieList={movieList} searchMovie={searchMovie}/>
                </Route>
                <Route exact path="/details/:id" component={MovieDetails}/>
                <Route exact path="/Signin" component={SignIn}/>
                <Route exact path="/PlayList" component={PlayList}/>
            </Switch>
        </div>
    )
}

export default Router
