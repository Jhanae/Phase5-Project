import React from 'react'
import './Footer.css'

function Footer(){
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col">
                        <h4>Movie Junkie</h4>
                        <ul className="list-unstyled">
                            <li>It’s more than just a movie!</li>
                            <li>Created with React, Ruby on Rails and TMDB API.</li>
                        </ul>
                    </div>
                    {/* column 2 */}
                    <div className="col">
                        <h4>Jhanae Chisholm</h4>
                        <ul className="list-unstyled">
                            <li>jhanaechisholm12@gmail.com</li>
                            <li>223-666-0227</li>
                            <li>Harrisburg PA</li>
                        </ul>
                    </div>
                </div>
                {/* <hr/> */}
                <div className="row">
                    <p className="col-sm">MOVIE JUNKIE INC | All rights reserved | Terms of Service | Privacy
                    </p> 
                </div>
                <input type="email" className=" mb-3 subscribeInput" placeholder="  Join our Newsletter" aria-label="" />
                <br/>
                <div className="subscribe-btn mb-3" role="group" aria-label="...">Subscribe</div>
            </div>
        </div>
    )
}
export default Footer