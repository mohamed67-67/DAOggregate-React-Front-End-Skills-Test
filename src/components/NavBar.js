import React, { useEffect, useState } from 'react'
import{Navbar,Container,Nav,Form,FormControl} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { FetchAODS, SearchFilter } from '../redux/Actions';

const NavBar = () => {

  const dispatch = useDispatch();
  const [input,setInput] = useState('')
  
  const handleChange = (e) =>{
    setInput(e.target.value)
  }

  useEffect(()=>{
    if(input ===''){
      dispatch(FetchAODS())
    }else{
      dispatch(SearchFilter(input))
    }
  },[input,dispatch])

  return (
      <Navbar fixed="top" bg="dark" variant="dark" >
        <Container>
        <Navbar.Brand href=""><img style={{marginRight: '1vw'}} src="https://minorityprogrammers.com/assets/images/mpicon.svg" width="50" className="d-inline-block align-top" alt=""></img></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link style={{color:'white',fontWeight: '500'}} href=""> <Link style={{color:'white',textDecoration: 'none'}} to='/'>Home</Link></Nav.Link>
        </Nav>
        <Nav>
            <Form className="d-flex ml-5">
            <FormControl
              value={input}
              onChange={(e) => handleChange(e)}
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            </Form>
        </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
