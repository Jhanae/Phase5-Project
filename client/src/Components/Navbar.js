import React from 'react'
// import Logo from './Pictures/spacebackground.jpeg';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useState } from 'react'
import ProfileLogo from './Pictures/outline_account_circle_white_24dp 2.png';
import HomeLogo from './Pictures/outline_home_white_24dp.png';
import SearchLogo from './Pictures/outline_search_white_24dp.png';
import Categories from './Pictures/outline_category_white_24dp.png';
import Logout from './Pictures/outline_logout_white_24dp 2.png';
import Login from './Pictures/outline_login_white_24dp.png'
import Logo from './Pictures/pngaaa.com-1762708.png'

function Navigation(){
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('LoggedIn'))
  console.log(loggedIn)
    return (
        <div className="Nav" >
            <Navbar sticky="top" collapseOnSelect>
                <Navbar.Brand style={{'color' : '#e0aaff', 'marginRight':'64rem', 'marginLeft':'2rem', 'display':'flex', 'fontSize':'1.5rem'}} href="/home">
                <img src={Logo} style={{ marginRight: '.5rem' }}  className="logo"/> 
                Movie Addict
                </Navbar.Brand>

                <Navbar.Collapse>
                <Nav style={{'background':'#7B2CBF', 'borderRadius':'2rem', 'fontWeight':'3rem', 'paddingRight':'2rem'}}>
                    <Nav.Link style={{'color' : '#e0aaff'}} href="/home"><img src={HomeLogo} /></Nav.Link>   <br/>
                    <Nav.Link style={{'color' : '#e0aaff'}}href="/categories"><img src={Categories} /></Nav.Link> <br/>
                    <Nav.Link style={{'color' : '#e0aaff'}} href="/search"><img src={SearchLogo} /></Nav.Link> <br/>
                    <Nav.Link style={{'color' : '#e0aaff'}} href="/profile"><img src={ProfileLogo}/></Nav.Link> <br/>
                    {loggedIn ?
                    <Nav.Link style={{'color' : '#e0aaff', 'background':'#7B2CBF', 'borderRadius':'2rem'}} href="/" onClick={() => localStorage.setItem('LoggedIn', !loggedIn)}><img src={Login}/></Nav.Link>
                    : 
                    <Nav.Link style={{'color' : '#e0aaff', 'background':'#7B2CBF', 'borderRadius':'2rem'}} href="/"><img src={Logout}/></Nav.Link>
                    }
                </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
export default Navigation