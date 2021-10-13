import React,{useEffect ,useState} from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
import {Col,Row} from "reactstrap"
import {MovieCard} from '../components'
import ReactPaginate from "react-paginate"

function Home(props) {
    console.log(props.movieList)
    const[favList,setfavList]=useState([])

    const handleFav=(id)=>{
        if(favList.includes(id)){
            const filtered = favList.filter(movieId=>movieId!==id)
            setfavList(filtered)

        }else{
            setfavList(state=>[...state,id])

        }
    }
   
    return (
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",backgroundColor:"#0F2541"}}>
            {

                props.movieList.map(movie=><MovieCard movies={movie} favStatus={favList.includes(movie.id)? true:false} handleFav={handleFav}/>)

            }    

        <ReactPaginate
        pageCount={Math.ceil(props.movieList.length / 3)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={(data) => props.searchMovie(data.selected + 1)}
        containerClassName="pagination"
      />

        </div>
    )
}

export default Home
