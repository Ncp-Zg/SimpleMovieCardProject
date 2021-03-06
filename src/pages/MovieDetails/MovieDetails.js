import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import {
    Card, ListGroup,ListGroupItem
  } from 'react-bootstrap'


function MovieDetails() {
    const[details,setDetails] = useState([])
    const {id} =useParams();
    const getMovieDetails=()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=SECRET&language=en-US`)
        .then(res => setDetails(res.data))
    }
    console.log(details)

    useEffect(() => {
        getMovieDetails();
    }, [])

    return (
        <div>
           <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${details.poster_path}`} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieDetails
