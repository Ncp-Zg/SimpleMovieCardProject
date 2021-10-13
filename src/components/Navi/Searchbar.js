import {React,useState} from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
function Searchbar (props){

  const [search,setSearch]=useState([])
  const handleChange=(e)=>{
    e.preventDefault();
    setSearch(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.setSearchedValue(search)
  }

  return (
    <div style={{marginTop:55}}>
      <Navbar bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/SignIn">SignIn</Nav.Link>
      <Nav.Link href="/PlayList">PlayList</Nav.Link>
    </Nav>
    <Form inline onSubmit={handleSubmit}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} />
      <Button variant="outline-info" type="submit">Search</Button>
    </Form>
  </Navbar>
    </div>
  );
}

export {Searchbar};
