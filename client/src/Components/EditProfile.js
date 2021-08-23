import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function EditProfile({profileID}) {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [favGenre, setFavGenre] = useState("");
  const [password, setPassword] = useState("");
  const [favActor, setFavActor] = useState("");
  const [favRegion, setFavRegion] = useState("");
  const [name, setName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color: "#fff",
      fontFamily: "Nunito",
      // textAlign: 'center',
    },
    button: {
      color: "#fff",
      backgroundColor: "#FCC4D6",
      fontSize: "1.5rem",
      margin: "1.5px",
      borderRadius: 3,
      borderColor: "rgba(0,0,0,0.08)",
      borderWidth: 0.3,
    },
    colorText: {
      color: "#FCC4D6",
    },
    title: {
      fontSize: "3rem",
    },
  }));
  // const classes = useStyles();
  const updatedProfile = {
    username: name,
    favActor: favActor,
    favGenre: favGenre,
    favRegion: favRegion
    // gender: gender,
  };
  function handleClick(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/profiles/${profileID}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((response) => response.json)
      .then((data) => localStorage.setItem('profile', JSON.stringify(data)));
  }

  // function setFile(image){
  //   console.log(image)
  // }
  return (
    <div className="editProfile">
      <h1 >
        Update <span >Profile</span>
      </h1>
      <br />
      <br />
      <Form onClick={(e) => handleClick(e)} >
        <Form.Group className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Row>
            <Col>
        <label htmlFor="exampleInputPassword1">Genre:</label>
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
        </Col>
        <Col>
        <label htmlFor="exampleInputPassword1">Actor:</label>
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
        </Col>
        </Row>
        </Form.Group>
        <Form.Group className="mb-3">
        <label htmlFor="exampleInputPassword1">Region:</label>
        <select onChange={(e) => setFavRegion(e.target.value)}  className="form-select signupDropdown">
            <option selected >Select your preferred region</option>
            <option value="USA">USA</option>
            <option value="Nollywood">Nollywood</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Thailand">Thailand</option>
            <option value="KDrama">KDrama</option>
            <option value="Turkish">Turkish</option>

        </select>
          {/* <Form.Label>Password:</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          /> */}
          {/* <input type="file" onChange={(e) => setFile(e.target.value)}/> */}
        </Form.Group>
        <Form.Group className="mb-3">
        </Form.Group>
        <button className="profile-btn">
          Save Changes
        </button>
      </Form>
    </div>
  );
}

export default EditProfile;
