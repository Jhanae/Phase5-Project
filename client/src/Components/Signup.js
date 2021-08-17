import React from 'react'
import {useState, useEffect } from 'react'
// import './Login.css'
function Signup({setLoggedIn, loggedIn}) {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [user, setUser] = useState("")
    const [hasAccount, setHasAccount] = useState(false)
    const [userID, setUserID] = useState("")
    const [favActor, setFavActor] = useState("")
    const [favPeriod, setFavPeriod] = useState("")
    const [favRegion, setFavRegion] = useState("")
    const [favGenre, setFavGenre] = useState("")
    const [username, setUsername] = useState("")
    const [profile, setProfile] = useState([])

    
    async function handleSignup(e){
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password })
        }

        await fetch("http://localhost:3000/users", requestOptions)
        .then(res => res.json())
        .then(data =>  console.log(data))
        // .catch(error => console.log(error))


        // await fetch("http://localhost:3000/profiles", {
        //     method: "POST",
        //     headers: {
        //     "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ user_id: userID, username, favActor, favPeriod, favRegion })
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .then(setLoggedIn(!loggedIn))

//         <div class="alert alert-success" role="alert">
//   A simple success alert—check it out!
// </div>
    }
    const [page, setPage] = useState(1)
    function OnboardingOne(){
        return <div>
            <h2 style={{color: '#fff'}}>Sign up</h2><br/>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1"/>
        </div>
    }
    function OnboardingTwo(){
        return <div>
               <label>Create a Username:</label>
                <input type="email" onChange={(e) => setUsername(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
    }
    function OnboardingThree(){
        return <div>
            <label htmlFor="exampleInputPassword1">Genre</label>
        <select onChange={(e) => setFavGenre(e.target.value)} className="form-select signupDropdown">
            <option selected >Select your favorite genre</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
        </select>
        <label htmlFor="exampleInputPassword1">Actor</label>
        <select onChange={(e) => setFavActor(e.target.value)}  className="form-select signupDropdown">
            <option selected >Select your favorite actor</option>
            <option value="Samuel L. Jackson">Samuel L. Jackson</option>
            <option value="Will Smith">Will Smith</option>
            <option value="Johnny Depp">Johnny Depp</option>
            <option value="Dwayne 'The Rock' Johnson">Dwayne "The Rock" Johnson</option>
            <option value="Eddie Murphy">Eddie Murphy</option>
            <option value="Kevin Hart">Kevin Hart</option>
            <option value="Robert Downey, Jr.">Robert Downey, Jr.</option>
            <option value="Idris Elba">Idris Elba</option>
            <option value="Vin Diesel">Vin Diesel</option>
            <option value="Scarlett Johansson">Scarlett Johansson</option>
        </select>
        </div>
    }
    function OnboardingFour(){
        return <div><label htmlFor="exampleInputPassword1">Region</label>
        <select onChange={(e) => setFavRegion(e.target.value)}  className="form-select signupDropdown">
            <option selected >Select your preferred region</option>
            <option value="USA">USA</option>
            <option value="Nollywood">Nollywood</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Thailand">Thailand</option>
            <option value="KDrama">KDrama</option>
            <option value="Turkish">Turkish</option>

        </select></div>
    }

    function NextPage(){
        setPage(page + 1);
    }
    return (
        <div>
            <section className="login">
            <div className="loginContainer">
            {page === 1 && <OnboardingOne />}
            {page === 2 && <OnboardingTwo />}
            {page === 3 && <OnboardingThree />}
            {page === 4 && <OnboardingFour />}
            {page < 4 ? 
            <div className="btnContainer">
            <button className="loginBtn" onClick={() => NextPage()}>Continue</button>
            <p>Have an account? <a href="/login">Sign in</a></p>
            </div>
            :
            <div className="btnContainer">
                <button className="loginBtn" onClick={(e) => handleSignup(e)}>Sign up</button>
                <p>Have an account? <a href="/login">Sign in</a></p>
            </div>} 
            </div>
            </section>
        </div>
        
    )
}

export default Signup
