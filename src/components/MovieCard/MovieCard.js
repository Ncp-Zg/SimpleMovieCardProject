import React,{useState} from 'react'
import {
    Card, CardImg, CardTitle, CardText, CardGroup,Container,
    Col, Row, CardBody
  } from 'reactstrap'
  import {Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as farHeart} from "@fortawesome/free-regular-svg-icons"
import {useHistory} from "react-router-dom"

  


function MovieCard({movies,favStatus,handleFav}) {
  const history = useHistory();

    
    return (
        <div style={{}}>
            
            <Container style={{width:500,height:875}}>
            <Card style={{height:850,backgroundColor:"lightyellow"}}>
        <CardImg style={{height:500}} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movies.poster_path}`} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{movies.title}</CardTitle>
          <CardText>{movies.overview.slice(0,200)}...</CardText>
          <CardText>
            <small className="text-muted">VoteAverage : {movies.vote_average}</small>
          </CardText>
        </CardBody>
        <Button variant="secondary" style={{fontWeight:'bold'}} onClick={()=>history.push({pathname:`/details/${movies.id}`})}>Details</Button>
        <Button 
        variant="warning" 
        onClick={()=>handleFav(movies.id)}
        ><FontAwesomeIcon icon={favStatus? faHeart:farHeart} color="red" /></Button>
      </Card>
            </Container>   

        </div>
        
    )
}

export {MovieCard}
