import React from 'react'
import {useState } from 'react'
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login({ loggedIn, setLoggedIn}) {
    let history = useHistory();

    // States
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState([])
    
// Login function
    async function handleLogin(e){
        e.preventDefault();

        const requestOptions = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password })
        }

        await fetch("http://localhost:3000/login", requestOptions)
        .then(res => res.json())
        .then(data => {
            if (data.authenticated){
                getProfileData(data.profile.id)
                alert("Logged in successfully")
                history.push('/profile')
            }
            else{
                alert("Incorrect username or password")
            }
        })
        .then(setLoggedIn(!loggedIn))
        .catch(error => console.log(error))
    }
    async function getProfileData(profileID) {
        await fetch(`http://localhost:3000/profiles/${profileID}`)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('profile', JSON.stringify(data))
            localStorage.setItem('LoggedIn', true)
        })
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <h2 style={{color: '#fff'}}>Sign in</h2><br/>
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className="" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
                <div className="btnContainer">
                    <button className="loginBtn" id="liveToastBtn" onClick={(e) => handleLogin(e)}>Sign in</button>
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </section>

    )
}

export default Login;
