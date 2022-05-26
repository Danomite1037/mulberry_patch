import React from 'react'
import Cookies39 from '../imgs/cookies39.jpg';
import Cookies13 from '../imgs/cookies13.jpg';
import Cookies22 from '../imgs/cookies22.jpg';

const AdminHome = (props) => {
    return (
        <div className='w-75 mx-auto'>
            <h1>The Mulberry Patch</h1>
            <h3 className='fst-italic'>A place where ideas and products grow!</h3> 
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Cookies39} className="d-block w-100" style={{height: "650px"}} alt="First Slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Choose your cookies!</h2>
                                <h3>Pick from any holiday including Thanksgiving...</h3>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Cookies13} className="d-block w-100" style={{height: "650px"}} alt="Second Slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Choose your cookies!</h5>
                                <p>Christmas and more...</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Cookies22} className="d-block w-100" style={{height: "650px"}} alt="Third Slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Choose your cookies!</h5>
                                <p>Or customize your own style by submiting pictures and giving us a call!</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div>
                <h4>Special Messages / Contact Info</h4>
                <p>If you have any questions or updates for orders please call Wendy @ (304)669-5233</p>
                
            </div>
        </div>
    )
}

export default AdminHome;